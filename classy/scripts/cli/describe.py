from argparse import ArgumentParser


def populate_parser(parser: ArgumentParser):
    parser.add_argument("task")
    parser.add_argument("--dataset", required=True, help="The dataset you want to describe (run statistics on)")
    parser.add_argument(
        "--tokenize",
        default=None,
        help="Indicates the language of the dataset in order to select "
        "the correct tokenizer. Must be a valid language code for "
        "the sacremoses tokenizer url: 'https://github.com/alvations/sacremoses'.",
    )
    parser.add_argument("-p", "--port", type=int, default=8000)


def get_parser(subparser=None) -> ArgumentParser:
    parser_kwargs = dict(
        name="describe",
        description="run several statistics on the input dataset and expose them on a streamlit page",
        help="TODO",
    )
    parser = (subparser.add_parser if subparser is not None else ArgumentParser)(**parser_kwargs)

    populate_parser(parser)

    return parser


def parse_args():
    return get_parser().parse_args()


def main(args):
    # import here to avoid importing before needed
    import sys
    from streamlit.cli import main as st_main

    # script params
    script_params = [args.task, args.dataset]

    if args.tokenize is not None:
        script_params += [args.tokenize]

    sys.argv = [
        "streamlit",
        "run",
        "classy/scripts/model/describe.py",
        *script_params,
        "--server.port",
        str(args.port),
    ]

    sys.exit(st_main())


if __name__ == "__main__":
    main(parse_args())