import os
from typing import Optional, Union, List, Dict

import hydra.utils
import omegaconf
import pytorch_lightning as pl
from torch.utils.data import DataLoader

from classy.data.readers import get_reader
from classy.utils.data import split_dataset

import logging

from classy.utils.log import get_project_logger
from classy.utils.vocabulary import Vocabulary


logger = get_project_logger(__name__)


class ClassyDataModule(pl.LightningDataModule):
    def __init__(
            self,
            task: str,
            dataset_path: str,
            train_dataset: omegaconf.DictConfig,
            validation_dataset: Optional[omegaconf.DictConfig] = None,
            test_dataset: Optional[omegaconf.DictConfig] = None,
            validation_split_size: Optional[float] = None,
            test_split_size: Optional[float] = None,
            max_nontrain_split_size: Optional[int] = None
    ):
        super().__init__()
        self.task = task
        self.dataset_path = dataset_path
        self.file_extension = None
        self.reader = None

        self.train_path, self.validation_path, self.test_path = None, None, None
        self.train_dataset, self.validation_dataset, self.test_dataset = None, None, None
        self.train_dataset_conf = train_dataset
        self.validation_dataset_conf = validation_dataset or train_dataset
        self.test_dataset_conf = test_dataset or validation_dataset or train_dataset

        self.validation_split_size = validation_split_size
        self.test_split_size = test_split_size
        self.max_nontrain_split_size = max_nontrain_split_size

        self.features_vocabulary: Optional[Vocabulary] = None
        self.labels_vocabulary: Optional[Vocabulary] = None

    def prepare_data(self) -> None:

        if os.path.isdir(self.dataset_path):
            dir_files = [fp for fp in os.listdir(self.dataset_path) if "train" in fp]

            assert len(dir_files) == 1, "Found more than one file with 'train' in their name"  # todo: expand

            self.file_extension = dir_files[0].split(".")[-1]

            self.train_path = os.path.join(self.dataset_path, f"train.{self.file_extension}")
            self.validation_path = os.path.join(self.dataset_path, f"validation.{self.file_extension}")
            self.test_path = os.path.join(self.dataset_path, f"test.{self.file_extension}")

            assert os.path.exists(self.train_path), f"Cannot find the training file 'train.{self.file_extension}'"
            assert os.path.exists(self.test_path), f"Cannot find the training file 'test.{self.file_extension}'"

            if not os.path.exists(self.validation_path):
                logger.info(
                    f"Validation dataset not found: splitting the training dataset "
                    f"(split_size: {1 - self.validation_split_size} / {self.validation_split_size})"
                    f"enforcing a maximum of {self.max_nontrain_split_size} instances on validation dataset"
                )
                self.train_path, self.validation_path, _ = split_dataset(
                    'data/',  # hydra takes care of placing this folder within the appropriate folder
                    self.train_path,
                    validation_split_size=self.validation_split_size,
                    data_max_split=self.max_nontrain_split_size,
                )
                logger.info(f"Storing the newly created datasets at '{self.train_path}' and '{self.validation_path}'")

        else:

            logger.info(
                "Splitting the dataset in train, validation and test. "
                f"(split_size: {1 - self.validation_split_size - self.test_split_size} "
                f"/ {self.validation_split_size}, {self.test_split_size}) "
                f"enforcing a maximum of {self.max_nontrain_split_size} instances on non-train splits"
            )

            self.file_extension = self.train_path.split(".")[-1]

            self.train_path, self.validation_path, self.test_path = split_dataset(
                'data/',
                self.train_path,
                validation_split_size=self.validation_split_size,
                test_split_size=self.test_split_size,
                data_max_split=self.max_nontrain_split_size,
            )

            logger.info(
                f"Storing the newly created datasets at '{self.train_path}', "
                f"'{self.validation_path}'and '{self.test_path}'"
            )

        # todo: can we improve it?
        self.reader = get_reader(self.task, self.file_extension)
        self.vocabulary = hydra.utils.instantiate(
            self.train_dataset_conf,
            path=self.train_path,
            reader=self.reader,
        ).vocabulary
        self.vocabulary.save('vocabulary/')

    def setup(self, stage: Optional[str] = None) -> None:

        if stage == "fit":
            self.train_dataset = hydra.utils.instantiate(
                self.train_dataset_conf,
                path=self.train_path,
                reader=self.reader,
                vocabulary=self.vocabulary,
            )
            self.validation_dataset = hydra.utils.instantiate(
                self.validation_dataset_conf,
                path=self.validation_path,
                reader=self.reader,
                vocabulary=self.vocabulary,
            )
        if stage == "test":
            self.test_dataset = hydra.utils.instantiate(
                self.test_dataset_conf,
                path=self.test_path,
                reader=self.reader,
                vocabulary=self.vocabulary,
            )

    def train_dataloader(self) -> Union[DataLoader, List[DataLoader], Dict[str, DataLoader]]:
        return DataLoader(self.train_dataset, batch_size=None, num_workers=1)

    def val_dataloader(self) -> Union[DataLoader, List[DataLoader], Dict[str, DataLoader]]:
        return DataLoader(self.validation_dataset, batch_size=None, num_workers=1)

    def test_dataloader(self) -> Union[DataLoader, List[DataLoader], Dict[str, DataLoader]]:
        return DataLoader(self.test_dataset, batch_size=None, num_workers=1)
