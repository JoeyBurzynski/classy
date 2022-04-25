"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9988],{3905:function(a,e,s){s.d(e,{Zo:function(){return k},kt:function(){return u}});var t=s(7294);function i(a,e,s){return e in a?Object.defineProperty(a,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):a[e]=s,a}function l(a,e){var s=Object.keys(a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(a);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),s.push.apply(s,t)}return s}function n(a){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?l(Object(s),!0).forEach((function(e){i(a,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(s)):l(Object(s)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(s,e))}))}return a}function r(a,e){if(null==a)return{};var s,t,i=function(a,e){if(null==a)return{};var s,t,i={},l=Object.keys(a);for(t=0;t<l.length;t++)s=l[t],e.indexOf(s)>=0||(i[s]=a[s]);return i}(a,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(a);for(t=0;t<l.length;t++)s=l[t],e.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(a,s)&&(i[s]=a[s])}return i}var c=t.createContext({}),d=function(a){var e=t.useContext(c),s=e;return a&&(s="function"==typeof a?a(e):n(n({},e),a)),s},k=function(a){var e=d(a.components);return t.createElement(c.Provider,{value:e},a.children)},o={inlineCode:"code",wrapper:function(a){var e=a.children;return t.createElement(t.Fragment,{},e)}},p=t.forwardRef((function(a,e){var s=a.components,i=a.mdxType,l=a.originalType,c=a.parentName,k=r(a,["components","mdxType","originalType","parentName"]),p=d(s),u=i,m=p["".concat(c,".").concat(u)]||p[u]||o[u]||l;return s?t.createElement(m,n(n({ref:e},k),{},{components:s})):t.createElement(m,n({ref:e},k))}));function u(a,e){var s=arguments,i=e&&e.mdxType;if("string"==typeof a||i){var l=s.length,n=new Array(l);n[0]=p;var r={};for(var c in e)hasOwnProperty.call(e,c)&&(r[c]=e[c]);r.originalType=a,r.mdxType="string"==typeof a?a:i,n[1]=r;for(var d=2;d<l;d++)n[d]=s[d];return t.createElement.apply(null,n)}return t.createElement.apply(null,s)}p.displayName="MDXCreateElement"},8142:function(a,e,s){s.r(e),s.d(e,{assets:function(){return k},contentTitle:function(){return c},default:function(){return u},frontMatter:function(){return r},metadata:function(){return d},toc:function(){return o}});var t=s(7462),i=s(3366),l=(s(7294),s(3905)),n=["components"],r={title:"classy.pl_modules.mixins.task",toc_min_heading_level:2,toc_max_heading_level:4,pagination_next:null,pagination_prev:null},c=void 0,d={unversionedId:"api/pl_modules/mixins/task",id:"api/pl_modules/mixins/task",title:"classy.pl_modules.mixins.task",description:"Classes",source:"@site/docs/api/pl_modules/mixins/task.md",sourceDirName:"api/pl_modules/mixins",slug:"/api/pl_modules/mixins/task",permalink:"/classy/docs/api/pl_modules/mixins/task",tags:[],version:"current",frontMatter:{title:"classy.pl_modules.mixins.task",toc_min_heading_level:2,toc_max_heading_level:4,pagination_next:null,pagination_prev:null},sidebar:"apiSidebar"},k={},o=[{value:"Classes",id:"clzs",level:2},{value:"GenerationTask",id:"GenerationTask",level:3},{value:"read_input_from_bash",id:"GenerationTask-read_input_from_bash",level:4},{value:"QATask",id:"QATask",level:3},{value:"read_input_from_bash",id:"QATask-read_input_from_bash",level:4},{value:"SentencePairTask",id:"SentencePairTask",level:3},{value:"read_input_from_bash",id:"SentencePairTask-read_input_from_bash",level:4},{value:"SequenceTask",id:"SequenceTask",level:3},{value:"read_input_from_bash",id:"SequenceTask-read_input_from_bash",level:4},{value:"TaskMixin",id:"TaskMixin",level:3},{value:"read_input_from_bash",id:"TaskMixin-read_input_from_bash",level:4},{value:"TokensTask",id:"TokensTask",level:3},{value:"read_input_from_bash",id:"TokensTask-read_input_from_bash",level:4}],p={toc:o};function u(a){var e=a.components,s=(0,i.Z)(a,n);return(0,l.kt)("wrapper",(0,t.Z)({},p,s,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"clzs"},"Classes"),(0,l.kt)("div",{className:"api"},(0,l.kt)("h3",{id:"GenerationTask"},"GenerationTask"),(0,l.kt)("div",{className:"api__signature"},(0,l.kt)("p",null,"class ",(0,l.kt)("span",{className:"ident"},"GenerationTask"),"()"),(0,l.kt)("div",{className:"links-div"},(0,l.kt)("a",{href:"#GenerationTask",className:"direct-link"},"#"),(0,l.kt)("a",{href:"https://github.com/sunglasses-ai/classy/blob/c166490a30d8ba6d7c25f70ce707b7a2ddcfb53f/classy/pl_modules/mixins/task.py#L72-L96",className:"git-link"},"#"))),(0,l.kt)("div",{className:"api__body"},(0,l.kt)("div",{className:"api__description"}),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Subclasses (1)"),(0,l.kt)("div",null,(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{title:"HFGenerationPLModule",href:"/docs/api/pl_modules/hf/generation#HFGenerationPLModule"},"HFGenerationPLModule"))))),(0,l.kt)("div",{className:"api__description"}),(0,l.kt)("div",{className:"api"},(0,l.kt)("h4",{id:"GenerationTask-read_input_from_bash"},"read_input_from_bash"),(0,l.kt)("div",{className:"api__signature"},"def ",(0,l.kt)("span",{className:"ident"},"read_input_from_bash"),"(",(0,l.kt)("br",null),"\xa0\xa0\xa0\xa0self,",(0,l.kt)("br",null),") \u2011>\xa0",(0,l.kt)("a",{title:"GenerationSample",href:"/docs/api/data/data_drivers#GenerationSample"},"GenerationSample"),(0,l.kt)("div",{className:"links-div"},(0,l.kt)("a",{href:"#GenerationTask-read_input_from_bash",className:"direct-link"},"#"),(0,l.kt)("a",{href:"https://github.com/sunglasses-ai/classy/blob/c166490a30d8ba6d7c25f70ce707b7a2ddcfb53f/classy/pl_modules/mixins/task.py#L75-L92",className:"git-link"},"#"))),(0,l.kt)("div",{className:"api__body"},(0,l.kt)("div",{className:"api__description"}))))),(0,l.kt)("div",{className:"api"},(0,l.kt)("h3",{id:"QATask"},"QATask"),(0,l.kt)("div",{className:"api__signature"},(0,l.kt)("p",null,"class ",(0,l.kt)("span",{className:"ident"},"QATask"),"()"),(0,l.kt)("div",{className:"links-div"},(0,l.kt)("a",{href:"#QATask",className:"direct-link"},"#"),(0,l.kt)("a",{href:"https://github.com/sunglasses-ai/classy/blob/c166490a30d8ba6d7c25f70ce707b7a2ddcfb53f/classy/pl_modules/mixins/task.py#L113-L124",className:"git-link"},"#"))),(0,l.kt)("div",{className:"api__body"},(0,l.kt)("div",{className:"api__description"}),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Subclasses (1)"),(0,l.kt)("div",null,(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{title:"HFQAPLModule",href:"/docs/api/pl_modules/hf/classification#HFQAPLModule"},"HFQAPLModule"))))),(0,l.kt)("div",{className:"api__description"}),(0,l.kt)("div",{className:"api"},(0,l.kt)("h4",{id:"QATask-read_input_from_bash"},"read_input_from_bash"),(0,l.kt)("div",{className:"api__signature"},"def ",(0,l.kt)("span",{className:"ident"},"read_input_from_bash"),"(",(0,l.kt)("br",null),"\xa0\xa0\xa0\xa0self,",(0,l.kt)("br",null),") \u2011>\xa0",(0,l.kt)("a",{title:"QASample",href:"/docs/api/data/data_drivers#QASample"},"QASample"),(0,l.kt)("div",{className:"links-div"},(0,l.kt)("a",{href:"#QATask-read_input_from_bash",className:"direct-link"},"#"),(0,l.kt)("a",{href:"https://github.com/sunglasses-ai/classy/blob/c166490a30d8ba6d7c25f70ce707b7a2ddcfb53f/classy/pl_modules/mixins/task.py#L116-L120",className:"git-link"},"#"))),(0,l.kt)("div",{className:"api__body"},(0,l.kt)("div",{className:"api__description"}))))),(0,l.kt)("div",{className:"api"},(0,l.kt)("h3",{id:"SentencePairTask"},"SentencePairTask"),(0,l.kt)("div",{className:"api__signature"},(0,l.kt)("p",null,"class ",(0,l.kt)("span",{className:"ident"},"SentencePairTask"),"()"),(0,l.kt)("div",{className:"links-div"},(0,l.kt)("a",{href:"#SentencePairTask",className:"direct-link"},"#"),(0,l.kt)("a",{href:"https://github.com/sunglasses-ai/classy/blob/c166490a30d8ba6d7c25f70ce707b7a2ddcfb53f/classy/pl_modules/mixins/task.py#L99-L110",className:"git-link"},"#"))),(0,l.kt)("div",{className:"api__body"},(0,l.kt)("div",{className:"api__description"}),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Subclasses (1)"),(0,l.kt)("div",null,(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{title:"HFSentencePairPLModule",href:"/docs/api/pl_modules/hf/classification#HFSentencePairPLModule"},"HFSentencePairPLModule"))))),(0,l.kt)("div",{className:"api__description"}),(0,l.kt)("div",{className:"api"},(0,l.kt)("h4",{id:"SentencePairTask-read_input_from_bash"},"read_input_from_bash"),(0,l.kt)("div",{className:"api__signature"},"def ",(0,l.kt)("span",{className:"ident"},"read_input_from_bash"),"(",(0,l.kt)("br",null),"\xa0\xa0\xa0\xa0self,",(0,l.kt)("br",null),") \u2011>\xa0",(0,l.kt)("a",{title:"SentencePairSample",href:"/docs/api/data/data_drivers#SentencePairSample"},"SentencePairSample"),(0,l.kt)("div",{className:"links-div"},(0,l.kt)("a",{href:"#SentencePairTask-read_input_from_bash",className:"direct-link"},"#"),(0,l.kt)("a",{href:"https://github.com/sunglasses-ai/classy/blob/c166490a30d8ba6d7c25f70ce707b7a2ddcfb53f/classy/pl_modules/mixins/task.py#L102-L106",className:"git-link"},"#"))),(0,l.kt)("div",{className:"api__body"},(0,l.kt)("div",{className:"api__description"}))))),(0,l.kt)("div",{className:"api"},(0,l.kt)("h3",{id:"SequenceTask"},"SequenceTask"),(0,l.kt)("div",{className:"api__signature"},(0,l.kt)("p",null,"class ",(0,l.kt)("span",{className:"ident"},"SequenceTask"),"()"),(0,l.kt)("div",{className:"links-div"},(0,l.kt)("a",{href:"#SequenceTask",className:"direct-link"},"#"),(0,l.kt)("a",{href:"https://github.com/sunglasses-ai/classy/blob/c166490a30d8ba6d7c25f70ce707b7a2ddcfb53f/classy/pl_modules/mixins/task.py#L45-L56",className:"git-link"},"#"))),(0,l.kt)("div",{className:"api__body"},(0,l.kt)("div",{className:"api__description"}),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Subclasses (1)"),(0,l.kt)("div",null,(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{title:"HFSequencePLModule",href:"/docs/api/pl_modules/hf/classification#HFSequencePLModule"},"HFSequencePLModule"))))),(0,l.kt)("div",{className:"api__description"}),(0,l.kt)("div",{className:"api"},(0,l.kt)("h4",{id:"SequenceTask-read_input_from_bash"},"read_input_from_bash"),(0,l.kt)("div",{className:"api__signature"},"def ",(0,l.kt)("span",{className:"ident"},"read_input_from_bash"),"(",(0,l.kt)("br",null),"\xa0\xa0\xa0\xa0self,",(0,l.kt)("br",null),") \u2011>\xa0",(0,l.kt)("a",{title:"SequenceSample",href:"/docs/api/data/data_drivers#SequenceSample"},"SequenceSample"),(0,l.kt)("div",{className:"links-div"},(0,l.kt)("a",{href:"#SequenceTask-read_input_from_bash",className:"direct-link"},"#"),(0,l.kt)("a",{href:"https://github.com/sunglasses-ai/classy/blob/c166490a30d8ba6d7c25f70ce707b7a2ddcfb53f/classy/pl_modules/mixins/task.py#L49-L52",className:"git-link"},"#"))),(0,l.kt)("div",{className:"api__body"},(0,l.kt)("div",{className:"api__description"}))))),(0,l.kt)("div",{className:"api"},(0,l.kt)("h3",{id:"TaskMixin"},"TaskMixin"),(0,l.kt)("div",{className:"api__signature"},(0,l.kt)("p",null,"class ",(0,l.kt)("span",{className:"ident"},"TaskMixin"),"()"),(0,l.kt)("div",{className:"links-div"},(0,l.kt)("a",{href:"#TaskMixin",className:"direct-link"},"#"),(0,l.kt)("a",{href:"https://github.com/sunglasses-ai/classy/blob/c166490a30d8ba6d7c25f70ce707b7a2ddcfb53f/classy/pl_modules/mixins/task.py#L34-L42",className:"git-link"},"#"))),(0,l.kt)("div",{className:"api__body"},(0,l.kt)("div",{className:"api__description"}),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Subclasses (5)"),(0,l.kt)("div",null,(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{title:"GenerationTask",href:"/docs/api/pl_modules/mixins/task#GenerationTask"},"GenerationTask")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{title:"QATask",href:"/docs/api/pl_modules/mixins/task#QATask"},"QATask")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{title:"SentencePairTask",href:"/docs/api/pl_modules/mixins/task#SentencePairTask"},"SentencePairTask")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{title:"SequenceTask",href:"/docs/api/pl_modules/mixins/task#SequenceTask"},"SequenceTask")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{title:"TokensTask",href:"/docs/api/pl_modules/mixins/task#TokensTask"},"TokensTask"))))),(0,l.kt)("div",{className:"api__description"}),(0,l.kt)("div",{className:"api"},(0,l.kt)("h4",{id:"TaskMixin-read_input_from_bash"},"read_input_from_bash"),(0,l.kt)("div",{className:"api__signature"},"def ",(0,l.kt)("span",{className:"ident"},"read_input_from_bash"),"(",(0,l.kt)("br",null),"\xa0\xa0\xa0\xa0self,",(0,l.kt)("br",null),") \u2011>\xa0",(0,l.kt)("a",{title:"ClassySample",href:"/docs/api/data/data_drivers#ClassySample"},"ClassySample"),(0,l.kt)("div",{className:"links-div"},(0,l.kt)("a",{href:"#TaskMixin-read_input_from_bash",className:"direct-link"},"#"),(0,l.kt)("a",{href:"https://github.com/sunglasses-ai/classy/blob/c166490a30d8ba6d7c25f70ce707b7a2ddcfb53f/classy/pl_modules/mixins/task.py#L35-L38",className:"git-link"},"#"))),(0,l.kt)("div",{className:"api__body"},(0,l.kt)("div",{className:"api__description"}))))),(0,l.kt)("div",{className:"api"},(0,l.kt)("h3",{id:"TokensTask"},"TokensTask"),(0,l.kt)("div",{className:"api__signature"},(0,l.kt)("p",null,"class ",(0,l.kt)("span",{className:"ident"},"TokensTask"),"()"),(0,l.kt)("div",{className:"links-div"},(0,l.kt)("a",{href:"#TokensTask",className:"direct-link"},"#"),(0,l.kt)("a",{href:"https://github.com/sunglasses-ai/classy/blob/c166490a30d8ba6d7c25f70ce707b7a2ddcfb53f/classy/pl_modules/mixins/task.py#L59-L69",className:"git-link"},"#"))),(0,l.kt)("div",{className:"api__body"},(0,l.kt)("div",{className:"api__description"}),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Subclasses (1)"),(0,l.kt)("div",null,(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{title:"HFTokensPLModule",href:"/docs/api/pl_modules/hf/classification#HFTokensPLModule"},"HFTokensPLModule"))))),(0,l.kt)("div",{className:"api__description"}),(0,l.kt)("div",{className:"api"},(0,l.kt)("h4",{id:"TokensTask-read_input_from_bash"},"read_input_from_bash"),(0,l.kt)("div",{className:"api__signature"},"def ",(0,l.kt)("span",{className:"ident"},"read_input_from_bash"),"(",(0,l.kt)("br",null),"\xa0\xa0\xa0\xa0self,",(0,l.kt)("br",null),") \u2011>\xa0",(0,l.kt)("a",{title:"TokensSample",href:"/docs/api/data/data_drivers#TokensSample"},"TokensSample"),(0,l.kt)("div",{className:"links-div"},(0,l.kt)("a",{href:"#TokensTask-read_input_from_bash",className:"direct-link"},"#"),(0,l.kt)("a",{href:"https://github.com/sunglasses-ai/classy/blob/c166490a30d8ba6d7c25f70ce707b7a2ddcfb53f/classy/pl_modules/mixins/task.py#L62-L65",className:"git-link"},"#"))),(0,l.kt)("div",{className:"api__body"},(0,l.kt)("div",{className:"api__description"}))))))}u.isMDXComponent=!0}}]);