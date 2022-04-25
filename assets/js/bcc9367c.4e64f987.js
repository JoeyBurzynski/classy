"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[578],{3905:function(a,t,e){e.d(t,{Zo:function(){return o},kt:function(){return _}});var s=e(7294);function i(a,t,e){return t in a?Object.defineProperty(a,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):a[t]=e,a}function l(a,t){var e=Object.keys(a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(a);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable}))),e.push.apply(e,s)}return e}function r(a){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?l(Object(e),!0).forEach((function(t){i(a,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(e)):l(Object(e)).forEach((function(t){Object.defineProperty(a,t,Object.getOwnPropertyDescriptor(e,t))}))}return a}function n(a,t){if(null==a)return{};var e,s,i=function(a,t){if(null==a)return{};var e,s,i={},l=Object.keys(a);for(s=0;s<l.length;s++)e=l[s],t.indexOf(e)>=0||(i[e]=a[e]);return i}(a,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(a);for(s=0;s<l.length;s++)e=l[s],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(a,e)&&(i[e]=a[e])}return i}var d=s.createContext({}),c=function(a){var t=s.useContext(d),e=t;return a&&(e="function"==typeof a?a(t):r(r({},t),a)),e},o=function(a){var t=c(a.components);return s.createElement(d.Provider,{value:t},a.children)},k={inlineCode:"code",wrapper:function(a){var t=a.children;return s.createElement(s.Fragment,{},t)}},u=s.forwardRef((function(a,t){var e=a.components,i=a.mdxType,l=a.originalType,d=a.parentName,o=n(a,["components","mdxType","originalType","parentName"]),u=c(e),_=i,p=u["".concat(d,".").concat(_)]||u[_]||k[_]||l;return e?s.createElement(p,r(r({ref:t},o),{},{components:e})):s.createElement(p,r({ref:t},o))}));function _(a,t){var e=arguments,i=t&&t.mdxType;if("string"==typeof a||i){var l=e.length,r=new Array(l);r[0]=u;var n={};for(var d in t)hasOwnProperty.call(t,d)&&(n[d]=t[d]);n.originalType=a,n.mdxType="string"==typeof a?a:i,r[1]=n;for(var c=2;c<l;c++)r[c]=e[c];return s.createElement.apply(null,r)}return s.createElement.apply(null,e)}u.displayName="MDXCreateElement"},8215:function(a,t,e){e.r(t),e.d(t,{assets:function(){return o},contentTitle:function(){return d},default:function(){return _},frontMatter:function(){return n},metadata:function(){return c},toc:function(){return k}});var s=e(7462),i=e(3366),l=(e(7294),e(3905)),r=["components"],n={title:"classy.data.dataset.base",toc_min_heading_level:2,toc_max_heading_level:4,pagination_next:null,pagination_prev:null},d=void 0,c={unversionedId:"api/data/dataset/base",id:"api/data/dataset/base",title:"classy.data.dataset.base",description:"Functions",source:"@site/docs/api/data/dataset/base.md",sourceDirName:"api/data/dataset",slug:"/api/data/dataset/base",permalink:"/classy/docs/api/data/dataset/base",tags:[],version:"current",frontMatter:{title:"classy.data.dataset.base",toc_min_heading_level:2,toc_max_heading_level:4,pagination_next:null,pagination_prev:null},sidebar:"apiSidebar"},o={},k=[{value:"Functions",id:"functions",level:2},{value:"batchify",id:"batchify",level:3},{value:"batchify_matrices",id:"batchify_matrices",level:3},{value:"Classes",id:"clzs",level:2},{value:"BaseDataset",id:"BaseDataset",level:3},{value:"__init__",id:"BaseDataset-init",level:4},{value:"dataset_iterator_func",id:"BaseDataset-dataset_iterator_func",level:4},{value:"materialize_batches",id:"BaseDataset-materialize_batches",level:4},{value:"materialize_dataset",id:"BaseDataset-materialize_dataset",level:4},{value:"prebatch_elements",id:"BaseDataset-prebatch_elements",level:4},{value:"adapt_dataset_from",id:"BaseDataset-adapt_dataset_from",level:4},{value:"fit_vocabulary",id:"BaseDataset-fit_vocabulary",level:4},{value:"from_file",id:"BaseDataset-from_file",level:4},{value:"from_samples",id:"BaseDataset-from_samples",level:4},{value:"requires_vocab",id:"BaseDataset-requires_vocab",level:4}],u={toc:k};function _(a){var t=a.components,e=(0,i.Z)(a,r);return(0,l.kt)("wrapper",(0,s.Z)({},u,e,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"functions"},"Functions"),(0,l.kt)("div",{className:"api"},(0,l.kt)("h3",{id:"batchify"},"batchify"),(0,l.kt)("div",{className:"api__signature"},"def ",(0,l.kt)("span",{className:"ident"},"batchify"),"(",(0,l.kt)("br",null),"\xa0\xa0\xa0\xa0tensors:\xa0List[torch.Tensor],",(0,l.kt)("br",null),"\xa0\xa0\xa0\xa0padding_value:\xa0int,",(0,l.kt)("br",null),") \u2011>\xa0torch.Tensor",(0,l.kt)("div",{className:"links-div"},(0,l.kt)("a",{href:"#batchify",className:"direct-link"},"#"),(0,l.kt)("a",{href:"https://github.com/sunglasses-ai/classy/blob/c166490a30d8ba6d7c25f70ce707b7a2ddcfb53f/classy/data/dataset/base.py#L20-L21",className:"git-link"},"#"))),(0,l.kt)("div",{className:"api__body"},(0,l.kt)("div",{className:"api__description"}))),(0,l.kt)("div",{className:"api"},(0,l.kt)("h3",{id:"batchify_matrices"},"batchify_matrices"),(0,l.kt)("div",{className:"api__signature"},"def ",(0,l.kt)("span",{className:"ident"},"batchify_matrices"),"(",(0,l.kt)("br",null),"\xa0\xa0\xa0\xa0tensors:\xa0List[torch.Tensor],",(0,l.kt)("br",null),"\xa0\xa0\xa0\xa0padding_value:\xa0int,",(0,l.kt)("br",null),") \u2011>\xa0torch.Tensor",(0,l.kt)("div",{className:"links-div"},(0,l.kt)("a",{href:"#batchify_matrices",className:"direct-link"},"#"),(0,l.kt)("a",{href:"https://github.com/sunglasses-ai/classy/blob/c166490a30d8ba6d7c25f70ce707b7a2ddcfb53f/classy/data/dataset/base.py#L24-L31",className:"git-link"},"#"))),(0,l.kt)("div",{className:"api__body"},(0,l.kt)("div",{className:"api__description"}))),(0,l.kt)("h2",{id:"clzs"},"Classes"),(0,l.kt)("div",{className:"api"},(0,l.kt)("h3",{id:"BaseDataset"},"BaseDataset"),(0,l.kt)("div",{className:"api__signature"},(0,l.kt)("p",null,"class ",(0,l.kt)("span",{className:"ident"},"BaseDataset"),"(torch.utils.data.dataset.IterableDataset)"),(0,l.kt)("div",{className:"links-div"},(0,l.kt)("a",{href:"#BaseDataset",className:"direct-link"},"#"),(0,l.kt)("a",{href:"https://github.com/sunglasses-ai/classy/blob/c166490a30d8ba6d7c25f70ce707b7a2ddcfb53f/classy/data/dataset/base.py#L34-L357",className:"git-link"},"#"))),(0,l.kt)("div",{className:"api__body"},(0,l.kt)("div",{className:"api__description"},(0,l.kt)("p",null,"An iterable Dataset."),(0,l.kt)("p",null,"All datasets that represent an iterable of data samples should subclass it. Such form of datasets is particularly useful when data come from a stream."),(0,l.kt)("p",null,"All subclasses should overwrite :meth:",(0,l.kt)("code",null,"__iter__"),", which would return an iterator of samples in this dataset."),(0,l.kt)("p",null,"When a subclass is used with :class:",(0,l.kt)("code",null,"~torch.utils.data.DataLoader"),", each item in the dataset will be yielded from the :class:",(0,l.kt)("code",null,"~torch.utils.data.DataLoader"),"iterator. When :attr:",(0,l.kt)("code",null,"num_workers > 0"),", each worker process will have a different copy of the dataset object, so it is often desired to configure each copy independently to avoid having duplicate data returned from the workers. :func:",(0,l.kt)("code",null,"~torch.utils.data.get_worker_info"),", when called in a worker process, returns information about the worker. It can be used in either the dataset's :meth:",(0,l.kt)("code",null,"__iter__")," method or the :class:",(0,l.kt)("code",null,"~torch.utils.data.DataLoader")," 's :attr:",(0,l.kt)("code",null,"worker_init_fn")," option to modify each copy's behavior."),(0,l.kt)("p",null,"Example 1: splitting workload across all workers in :meth:",(0,l.kt)("code",null,"__iter__"),"::"),(0,l.kt)("pre",null,(0,l.kt)("code",null,'>>> class MyIterableDataset(torch.utils.data.IterableDataset): ...     def __init__(self, start, end): ...         super(MyIterableDataset).__init__() ...         assert end > start, "this example code only works with end >= start" ...         self.start = start ...         self.end = end ... ...     def __iter__(self): ...         worker_info = torch.utils.data.get_worker_info() ...         if worker_info is None:  # single-process data loading, return the full iterator ...             iter_start = self.start ...             iter_end = self.end ...         else:  # in a worker process ...             # split workload ...             per_worker = int(math.ceil((self.end - self.start) / float(worker_info.num_workers))) ...             worker_id = worker_info.id ...             iter_start = self.start + worker_id * per_worker ...             iter_end = min(iter_start + per_worker, self.end) ...         return iter(range(iter_start, iter_end)) ... >>> # should give same set of data as range(3, 7), i.e., [3, 4, 5, 6]. >>> ds = MyIterableDataset(start=3, end=7)',(0,l.kt)("p",null,">",">",">"," # Single-process loading\n",">",">",">"," print(list(torch.utils.data.DataLoader(ds, num_workers=0)))\n","[3, 4, 5, 6]"),(0,l.kt)("p",null,">",">",">"," # Mult-process loading with two worker processes\n",">",">",">"," # Worker 0 fetched ","[3, 4]",".  Worker 1 fetched ","[5, 6]",".\n",">",">",">"," print(list(torch.utils.data.DataLoader(ds, num_workers=2)))\n","[3, 5, 4, 6]"),(0,l.kt)("p",null,">",">",">"," # With even more workers\n",">",">",">"," print(list(torch.utils.data.DataLoader(ds, num_workers=20)))\n","[3, 4, 5, 6]"))),(0,l.kt)("p",null,"Example 2: splitting workload across all workers using :attr:",(0,l.kt)("code",null,"worker_init_fn"),"::"),(0,l.kt)("pre",null,(0,l.kt)("code",null,'>>> class MyIterableDataset(torch.utils.data.IterableDataset): ...     def __init__(self, start, end): ...         super(MyIterableDataset).__init__() ...         assert end > start, "this example code only works with end >= start" ...         self.start = start ...         self.end = end ... ...     def __iter__(self): ...         return iter(range(self.start, self.end)) ... >>> # should give same set of data as range(3, 7), i.e., [3, 4, 5, 6]. >>> ds = MyIterableDataset(start=3, end=7)',(0,l.kt)("p",null,">",">",">"," # Single-process loading\n",">",">",">"," print(list(torch.utils.data.DataLoader(ds, num_workers=0)))\n","[3, 4, 5, 6]","\n",">",">",">","\n",">",">",">"," # Directly doing multi-process loading yields duplicate data\n",">",">",">"," print(list(torch.utils.data.DataLoader(ds, num_workers=2)))\n","[3, 3, 4, 4, 5, 5, 6, 6]"),(0,l.kt)("p",null,">",">",">"," # Define a ","<","code",">","worker","_","init","_","fn","<","/code",">"," that configures each dataset copy differently\n",">",">",">"," def worker_init_fn(worker_id):\n...     worker_info = torch.utils.data.get_worker_info()\n...     dataset = worker_info.dataset  # the dataset copy in this worker process\n...     overall_start = dataset.start\n...     overall_end = dataset.end\n...     # configure the dataset to only process the split workload\n...     per_worker = int(math.ceil((overall_end - overall_start) / float(worker_info.num_workers)))\n...     worker_id = worker_info.id\n...     dataset.start = overall_start + worker_id * per_worker\n...     dataset.end = min(dataset.start + per_worker, overall_end)\n..."),(0,l.kt)("p",null,">",">",">"," # Mult-process loading with the custom ","<","code",">","worker","_","init","_","fn","<","/code",">","\n",">",">",">"," # Worker 0 fetched ","[3, 4]",".  Worker 1 fetched ","[5, 6]",".\n",">",">",">"," print(list(torch.utils.data.DataLoader(ds, num_workers=2, worker_init_fn=worker_init_fn)))\n","[3, 5, 4, 6]"),(0,l.kt)("p",null,">",">",">"," # With even more workers\n",">",">",">"," print(list(torch.utils.data.DataLoader(ds, num_workers=20, worker_init_fn=worker_init_fn)))\n","[3, 4, 5, 6]")))),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Subclasses (1)"),(0,l.kt)("div",null,(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{title:"HFBaseDataset",href:"/docs/api/data/dataset/hf/base#HFBaseDataset"},"HFBaseDataset"))))),(0,l.kt)("h4",{id:"BaseDataset-init"},"_","_","init","_","_"),(0,l.kt)("div",{className:"api__signature"},"def ",(0,l.kt)("span",{className:"ident"},"__init__"),"(",(0,l.kt)("br",null),"\xa0\xa0\xa0\xa0samples_iterator:\xa0Callable[[],\xa0Iterator[",(0,l.kt)("a",{title:"ClassySample",href:"/docs/api/data/data_drivers#ClassySample"},"ClassySample"),"]],",(0,l.kt)("br",null),"\xa0\xa0\xa0\xa0vocabulary:\xa0",(0,l.kt)("a",{title:"Vocabulary",href:"/docs/api/utils/vocabulary#Vocabulary"},"Vocabulary"),",",(0,l.kt)("br",null),"\xa0\xa0\xa0\xa0fields_batchers:\xa0Optional[Dict[str,\xa0Optional[None]]],",(0,l.kt)("br",null),"\xa0\xa0\xa0\xa0for_inference:\xa0bool,",(0,l.kt)("br",null),"\xa0\xa0\xa0\xa0batch_size:\xa0Optional[int]\xa0=\xa0None,",(0,l.kt)("br",null),"\xa0\xa0\xa0\xa0tokens_per_batch:\xa0Optional[int]\xa0=\xa0None,",(0,l.kt)("br",null),"\xa0\xa0\xa0\xa0max_batch_size:\xa0Optional[int]\xa0=\xa0None,",(0,l.kt)("br",null),"\xa0\xa0\xa0\xa0batching_fields:\xa0Optional[List[str]]\xa0=\xa0None,",(0,l.kt)("br",null),"\xa0\xa0\xa0\xa0section_size:\xa0Optional[int]\xa0=\xa0None,",(0,l.kt)("br",null),"\xa0\xa0\xa0\xa0prebatch:\xa0bool\xa0=\xa0False,",(0,l.kt)("br",null),"\xa0\xa0\xa0\xa0materialize:\xa0bool\xa0=\xa0False,",(0,l.kt)("br",null),"\xa0\xa0\xa0\xa0drop_last:\xa0bool\xa0=\xa0False,",(0,l.kt)("br",null),"\xa0\xa0\xa0\xa0min_length:\xa0int\xa0=\xa0-1,",(0,l.kt)("br",null),"\xa0\xa0\xa0\xa0max_length:\xa0int\xa0=\xa0-1,",(0,l.kt)("br",null),")",(0,l.kt)("div",{className:"links-div"},(0,l.kt)("a",{href:"#BaseDataset-init",className:"direct-link"},"#"),(0,l.kt)("a",{href:"https://github.com/sunglasses-ai/classy/blob/c166490a30d8ba6d7c25f70ce707b7a2ddcfb53f/classy/data/dataset/base.py#L34-L357",className:"git-link"},"#"))),(0,l.kt)("div",{className:"api__description"}),(0,l.kt)("div",{className:"api"},(0,l.kt)("h4",{id:"BaseDataset-dataset_iterator_func"},"dataset_iterator_func"),(0,l.kt)("div",{className:"api__signature"},"def ",(0,l.kt)("span",{className:"ident"},"dataset_iterator_func"),"(",(0,l.kt)("br",null),"\xa0\xa0\xa0\xa0self,",(0,l.kt)("br",null),")",(0,l.kt)("div",{className:"links-div"},(0,l.kt)("a",{href:"#BaseDataset-dataset_iterator_func",className:"direct-link"},"#"),(0,l.kt)("a",{href:"https://github.com/sunglasses-ai/classy/blob/c166490a30d8ba6d7c25f70ce707b7a2ddcfb53f/classy/data/dataset/base.py#L161-L162",className:"git-link"},"#"))),(0,l.kt)("div",{className:"api__body"},(0,l.kt)("div",{className:"api__description"}))),(0,l.kt)("div",{className:"api"},(0,l.kt)("h4",{id:"BaseDataset-materialize_batches"},"materialize_batches"),(0,l.kt)("div",{className:"api__signature"},"def ",(0,l.kt)("span",{className:"ident"},"materialize_batches"),"(",(0,l.kt)("br",null),"\xa0\xa0\xa0\xa0self,",(0,l.kt)("br",null),"\xa0\xa0\xa0\xa0dataset_elements:\xa0List[Dict[str,\xa0Any]],",(0,l.kt)("br",null),") \u2011>\xa0Generator[Dict[str,\xa0Any],\xa0None,\xa0None]",(0,l.kt)("div",{className:"links-div"},(0,l.kt)("a",{href:"#BaseDataset-materialize_batches",className:"direct-link"},"#"),(0,l.kt)("a",{href:"https://github.com/sunglasses-ai/classy/blob/c166490a30d8ba6d7c25f70ce707b7a2ddcfb53f/classy/data/dataset/base.py#L185-L322",className:"git-link"},"#"))),(0,l.kt)("div",{className:"api__body"},(0,l.kt)("div",{className:"api__description"}))),(0,l.kt)("div",{className:"api"},(0,l.kt)("h4",{id:"BaseDataset-materialize_dataset"},"materialize_dataset"),(0,l.kt)("div",{className:"api__signature"},"def ",(0,l.kt)("span",{className:"ident"},"materialize_dataset"),"(",(0,l.kt)("br",null),"\xa0\xa0\xa0\xa0self,",(0,l.kt)("br",null),") \u2011>\xa0None",(0,l.kt)("div",{className:"links-div"},(0,l.kt)("a",{href:"#BaseDataset-materialize_dataset",className:"direct-link"},"#"),(0,l.kt)("a",{href:"https://github.com/sunglasses-ai/classy/blob/c166490a30d8ba6d7c25f70ce707b7a2ddcfb53f/classy/data/dataset/base.py#L177-L183",className:"git-link"},"#"))),(0,l.kt)("div",{className:"api__body"},(0,l.kt)("div",{className:"api__description"}))),(0,l.kt)("div",{className:"api"},(0,l.kt)("h4",{id:"BaseDataset-prebatch_elements"},"prebatch_elements"),(0,l.kt)("div",{className:"api__signature"},"def ",(0,l.kt)("span",{className:"ident"},"prebatch_elements"),"(",(0,l.kt)("br",null),"\xa0\xa0\xa0\xa0self,",(0,l.kt)("br",null),"\xa0\xa0\xa0\xa0dataset_elements:\xa0List[~T],",(0,l.kt)("br",null),")",(0,l.kt)("div",{className:"links-div"},(0,l.kt)("a",{href:"#BaseDataset-prebatch_elements",className:"direct-link"},"#"),(0,l.kt)("a",{href:"https://github.com/sunglasses-ai/classy/blob/c166490a30d8ba6d7c25f70ce707b7a2ddcfb53f/classy/data/dataset/base.py#L164-L175",className:"git-link"},"#"))),(0,l.kt)("div",{className:"api__body"},(0,l.kt)("div",{className:"api__description"}))),(0,l.kt)("div",{className:"api"},(0,l.kt)("h4",{id:"BaseDataset-adapt_dataset_from"},"adapt_dataset_from"),(0,l.kt)("div",{className:"api__signature"},(0,l.kt)("div",{className:"annotation"},"@classmethod"),"def ",(0,l.kt)("span",{className:"ident"},"adapt_dataset_from"),"(",(0,l.kt)("br",null),"\xa0\xa0\xa0\xa0training_dataset:\xa0omegaconf.dictconfig.DictConfig,",(0,l.kt)("br",null),"\xa0\xa0\xa0\xa0setting:\xa0str,",(0,l.kt)("br",null),")",(0,l.kt)("div",{className:"links-div"},(0,l.kt)("a",{href:"#BaseDataset-adapt_dataset_from",className:"direct-link"},"#"),(0,l.kt)("a",{href:"https://github.com/sunglasses-ai/classy/blob/c166490a30d8ba6d7c25f70ce707b7a2ddcfb53f/classy/data/dataset/base.py#L43-L62",className:"git-link"},"#"))),(0,l.kt)("div",{className:"api__body"},(0,l.kt)("div",{className:"api__description"}))),(0,l.kt)("div",{className:"api"},(0,l.kt)("h4",{id:"BaseDataset-fit_vocabulary"},"fit_vocabulary"),(0,l.kt)("div",{className:"api__signature"},(0,l.kt)("div",{className:"annotation"},"@classmethod"),"def ",(0,l.kt)("span",{className:"ident"},"fit_vocabulary"),"(",(0,l.kt)("br",null),"\xa0\xa0\xa0\xa0samples:\xa0Iterator[",(0,l.kt)("a",{title:"ClassySample",href:"/docs/api/data/data_drivers#ClassySample"},"ClassySample"),"],",(0,l.kt)("br",null),") \u2011>\xa0",(0,l.kt)("a",{title:"Vocabulary",href:"/docs/api/utils/vocabulary#Vocabulary"},"Vocabulary"),(0,l.kt)("div",{className:"links-div"},(0,l.kt)("a",{href:"#BaseDataset-fit_vocabulary",className:"direct-link"},"#"),(0,l.kt)("a",{href:"https://github.com/sunglasses-ai/classy/blob/c166490a30d8ba6d7c25f70ce707b7a2ddcfb53f/classy/data/dataset/base.py#L39-L41",className:"git-link"},"#"))),(0,l.kt)("div",{className:"api__body"},(0,l.kt)("div",{className:"api__description"}))),(0,l.kt)("div",{className:"api"},(0,l.kt)("h4",{id:"BaseDataset-from_file"},"from_file"),(0,l.kt)("div",{className:"api__signature"},(0,l.kt)("div",{className:"annotation"},"@classmethod"),"def ",(0,l.kt)("span",{className:"ident"},"from_file"),"(",(0,l.kt)("br",null),"\xa0\xa0\xa0\xa0path:\xa0Union[str,\xa0Dict[str,\xa0",(0,l.kt)("a",{title:"DataDriver",href:"/docs/api/data/data_drivers#DataDriver"},"DataDriver"),"]],",(0,l.kt)("br",null),"\xa0\xa0\xa0\xa0data_driver:\xa0Optional[",(0,l.kt)("a",{title:"DataDriver",href:"/docs/api/data/data_drivers#DataDriver"},"DataDriver"),"]\xa0=\xa0None,",(0,l.kt)("br",null),"\xa0\xa0\xa0\xa0vocabulary:\xa0",(0,l.kt)("a",{title:"Vocabulary",href:"/docs/api/utils/vocabulary#Vocabulary"},"Vocabulary"),"\xa0=\xa0None,",(0,l.kt)("br",null),"\xa0\xa0\xa0\xa0**kwargs,",(0,l.kt)("br",null),") \u2011>\xa0",(0,l.kt)("a",{title:"BaseDataset",href:"/docs/api/data/dataset/base#BaseDataset"},"BaseDataset"),(0,l.kt)("div",{className:"links-div"},(0,l.kt)("a",{href:"#BaseDataset-from_file",className:"direct-link"},"#"),(0,l.kt)("a",{href:"https://github.com/sunglasses-ai/classy/blob/c166490a30d8ba6d7c25f70ce707b7a2ddcfb53f/classy/data/dataset/base.py#L64-L93",className:"git-link"},"#"))),(0,l.kt)("div",{className:"api__body"},(0,l.kt)("div",{className:"api__description"}))),(0,l.kt)("div",{className:"api"},(0,l.kt)("h4",{id:"BaseDataset-from_samples"},"from_samples"),(0,l.kt)("div",{className:"api__signature"},(0,l.kt)("div",{className:"annotation"},"@classmethod"),"def ",(0,l.kt)("span",{className:"ident"},"from_samples"),"(",(0,l.kt)("br",null),"\xa0\xa0\xa0\xa0samples:\xa0Iterator[",(0,l.kt)("a",{title:"ClassySample",href:"/docs/api/data/data_drivers#ClassySample"},"ClassySample"),"],",(0,l.kt)("br",null),"\xa0\xa0\xa0\xa0vocabulary:\xa0",(0,l.kt)("a",{title:"Vocabulary",href:"/docs/api/utils/vocabulary#Vocabulary"},"Vocabulary"),",",(0,l.kt)("br",null),"\xa0\xa0\xa0\xa0**kwargs,",(0,l.kt)("br",null),")",(0,l.kt)("div",{className:"links-div"},(0,l.kt)("a",{href:"#BaseDataset-from_samples",className:"direct-link"},"#"),(0,l.kt)("a",{href:"https://github.com/sunglasses-ai/classy/blob/c166490a30d8ba6d7c25f70ce707b7a2ddcfb53f/classy/data/dataset/base.py#L95-L102",className:"git-link"},"#"))),(0,l.kt)("div",{className:"api__body"},(0,l.kt)("div",{className:"api__description"}))),(0,l.kt)("div",{className:"api"},(0,l.kt)("h4",{id:"BaseDataset-requires_vocab"},"requires_vocab"),(0,l.kt)("div",{className:"api__signature"},(0,l.kt)("div",{className:"annotation"},"@classmethod"),"def ",(0,l.kt)("span",{className:"ident"},"requires_vocab"),"() \u2011>\xa0bool",(0,l.kt)("div",{className:"links-div"},(0,l.kt)("a",{href:"#BaseDataset-requires_vocab",className:"direct-link"},"#"),(0,l.kt)("a",{href:"https://github.com/sunglasses-ai/classy/blob/c166490a30d8ba6d7c25f70ce707b7a2ddcfb53f/classy/data/dataset/base.py#L35-L37",className:"git-link"},"#"))),(0,l.kt)("div",{className:"api__body"},(0,l.kt)("div",{className:"api__description"}))))))}_.isMDXComponent=!0}}]);