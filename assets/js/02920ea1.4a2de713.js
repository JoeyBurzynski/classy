"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6550],{3905:function(a,t,e){e.d(t,{Zo:function(){return o},kt:function(){return f}});var i=e(7294);function r(a,t,e){return t in a?Object.defineProperty(a,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):a[t]=e,a}function s(a,t){var e=Object.keys(a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(a);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable}))),e.push.apply(e,i)}return e}function l(a){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?s(Object(e),!0).forEach((function(t){r(a,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(e)):s(Object(e)).forEach((function(t){Object.defineProperty(a,t,Object.getOwnPropertyDescriptor(e,t))}))}return a}function n(a,t){if(null==a)return{};var e,i,r=function(a,t){if(null==a)return{};var e,i,r={},s=Object.keys(a);for(i=0;i<s.length;i++)e=s[i],t.indexOf(e)>=0||(r[e]=a[e]);return r}(a,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(a);for(i=0;i<s.length;i++)e=s[i],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(a,e)&&(r[e]=a[e])}return r}var d=i.createContext({}),c=function(a){var t=i.useContext(d),e=t;return a&&(e="function"==typeof a?a(t):l(l({},t),a)),e},o=function(a){var t=c(a.components);return i.createElement(d.Provider,{value:t},a.children)},u={inlineCode:"code",wrapper:function(a){var t=a.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(a,t){var e=a.components,r=a.mdxType,s=a.originalType,d=a.parentName,o=n(a,["components","mdxType","originalType","parentName"]),p=c(e),f=r,_=p["".concat(d,".").concat(f)]||p[f]||u[f]||s;return e?i.createElement(_,l(l({ref:t},o),{},{components:e})):i.createElement(_,l({ref:t},o))}));function f(a,t){var e=arguments,r=t&&t.mdxType;if("string"==typeof a||r){var s=e.length,l=new Array(s);l[0]=p;var n={};for(var d in t)hasOwnProperty.call(t,d)&&(n[d]=t[d]);n.originalType=a,n.mdxType="string"==typeof a?a:r,l[1]=n;for(var c=2;c<s;c++)l[c]=e[c];return i.createElement.apply(null,l)}return i.createElement.apply(null,e)}p.displayName="MDXCreateElement"},3486:function(a,t,e){e.r(t),e.d(t,{assets:function(){return o},contentTitle:function(){return d},default:function(){return f},frontMatter:function(){return n},metadata:function(){return c},toc:function(){return u}});var i=e(7462),r=e(3366),s=(e(7294),e(3905)),l=["components"],n={title:"classy.utils.data",toc_min_heading_level:2,toc_max_heading_level:4,pagination_next:null,pagination_prev:null},d=void 0,c={unversionedId:"api/utils/data",id:"api/utils/data",title:"classy.utils.data",description:"Functions",source:"@site/docs/api/utils/data.md",sourceDirName:"api/utils",slug:"/api/utils/data",permalink:"/classy/docs/api/utils/data",tags:[],version:"current",frontMatter:{title:"classy.utils.data",toc_min_heading_level:2,toc_max_heading_level:4,pagination_next:null,pagination_prev:null},sidebar:"apiSidebar"},o={},u=[{value:"Functions",id:"functions",level:2},{value:"create_data_dir",id:"create_data_dir",level:3},{value:"load_dataset",id:"load_dataset",level:3},{value:"shuffle_and_store_dataset",id:"shuffle_and_store_dataset",level:3},{value:"shuffle_dataset",id:"shuffle_dataset",level:3},{value:"split_dataset",id:"split_dataset",level:3}],p={toc:u};function f(a){var t=a.components,e=(0,r.Z)(a,l);return(0,s.kt)("wrapper",(0,i.Z)({},p,e,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"functions"},"Functions"),(0,s.kt)("div",{className:"api"},(0,s.kt)("h3",{id:"create_data_dir"},"create_data_dir"),(0,s.kt)("div",{className:"api__signature"},"def ",(0,s.kt)("span",{className:"ident"},"create_data_dir"),"()",(0,s.kt)("div",{className:"links-div"},(0,s.kt)("a",{href:"#create_data_dir",className:"direct-link"},"#"),(0,s.kt)("a",{href:"https://github.com/sunglasses-ai/classy/blob/c166490a30d8ba6d7c25f70ce707b7a2ddcfb53f/classy/utils/data.py#L13-L16",className:"git-link"},"#"))),(0,s.kt)("div",{className:"api__body"},(0,s.kt)("div",{className:"api__description"}))),(0,s.kt)("div",{className:"api"},(0,s.kt)("h3",{id:"load_dataset"},"load_dataset"),(0,s.kt)("div",{className:"api__signature"},"def ",(0,s.kt)("span",{className:"ident"},"load_dataset"),"(",(0,s.kt)("br",null),"\xa0\xa0\xa0\xa0path2data_driver:\xa0Dict[str,\xa0",(0,s.kt)("a",{title:"DataDriver",href:"/docs/api/data/data_drivers#DataDriver"},"DataDriver"),"],",(0,s.kt)("br",null),") \u2011>\xa0list",(0,s.kt)("div",{className:"links-div"},(0,s.kt)("a",{href:"#load_dataset",className:"direct-link"},"#"),(0,s.kt)("a",{href:"https://github.com/sunglasses-ai/classy/blob/c166490a30d8ba6d7c25f70ce707b7a2ddcfb53f/classy/utils/data.py#L19-L25",className:"git-link"},"#"))),(0,s.kt)("div",{className:"api__body"},(0,s.kt)("div",{className:"api__description"}))),(0,s.kt)("div",{className:"api"},(0,s.kt)("h3",{id:"shuffle_and_store_dataset"},"shuffle_and_store_dataset"),(0,s.kt)("div",{className:"api__signature"},"def ",(0,s.kt)("span",{className:"ident"},"shuffle_and_store_dataset"),"(",(0,s.kt)("br",null),"\xa0\xa0\xa0\xa0path2data_driver:\xa0Dict[str,\xa0",(0,s.kt)("a",{title:"DataDriver",href:"/docs/api/data/data_drivers#DataDriver"},"DataDriver"),"],",(0,s.kt)("br",null),"\xa0\xa0\xa0\xa0main_data_driver:\xa0",(0,s.kt)("a",{title:"DataDriver",href:"/docs/api/data/data_drivers#DataDriver"},"DataDriver"),",",(0,s.kt)("br",null),"\xa0\xa0\xa0\xa0output_path:\xa0str,",(0,s.kt)("br",null),") \u2011>\xa0None",(0,s.kt)("div",{className:"links-div"},(0,s.kt)("a",{href:"#shuffle_and_store_dataset",className:"direct-link"},"#"),(0,s.kt)("a",{href:"https://github.com/sunglasses-ai/classy/blob/c166490a30d8ba6d7c25f70ce707b7a2ddcfb53f/classy/utils/data.py#L36-L42",className:"git-link"},"#"))),(0,s.kt)("div",{className:"api__body"},(0,s.kt)("div",{className:"api__description"}))),(0,s.kt)("div",{className:"api"},(0,s.kt)("h3",{id:"shuffle_dataset"},"shuffle_dataset"),(0,s.kt)("div",{className:"api__signature"},"def ",(0,s.kt)("span",{className:"ident"},"shuffle_dataset"),"(",(0,s.kt)("br",null),"\xa0\xa0\xa0\xa0path2data_driver:\xa0Dict[str,\xa0",(0,s.kt)("a",{title:"DataDriver",href:"/docs/api/data/data_drivers#DataDriver"},"DataDriver"),"],",(0,s.kt)("br",null),") \u2011>\xa0list",(0,s.kt)("div",{className:"links-div"},(0,s.kt)("a",{href:"#shuffle_dataset",className:"direct-link"},"#"),(0,s.kt)("a",{href:"https://github.com/sunglasses-ai/classy/blob/c166490a30d8ba6d7c25f70ce707b7a2ddcfb53f/classy/utils/data.py#L28-L33",className:"git-link"},"#"))),(0,s.kt)("div",{className:"api__body"},(0,s.kt)("div",{className:"api__description"}))),(0,s.kt)("div",{className:"api"},(0,s.kt)("h3",{id:"split_dataset"},"split_dataset"),(0,s.kt)("div",{className:"api__signature"},"def ",(0,s.kt)("span",{className:"ident"},"split_dataset"),"(",(0,s.kt)("br",null),"\xa0\xa0\xa0\xa0path2data_driver:\xa0Dict[str,\xa0",(0,s.kt)("a",{title:"DataDriver",href:"/docs/api/data/data_drivers#DataDriver"},"DataDriver"),"],",(0,s.kt)("br",null),"\xa0\xa0\xa0\xa0main_data_driver:\xa0",(0,s.kt)("a",{title:"DataDriver",href:"/docs/api/data/data_drivers#DataDriver"},"DataDriver"),",",(0,s.kt)("br",null),"\xa0\xa0\xa0\xa0main_extension:\xa0str,",(0,s.kt)("br",null),"\xa0\xa0\xa0\xa0output_folder:\xa0str,",(0,s.kt)("br",null),"\xa0\xa0\xa0\xa0validation_split_size:\xa0Optional[float]\xa0=\xa0None,",(0,s.kt)("br",null),"\xa0\xa0\xa0\xa0test_split_size:\xa0Optional[float]\xa0=\xa0None,",(0,s.kt)("br",null),"\xa0\xa0\xa0\xa0data_max_split:\xa0Optional[int]\xa0=\xa0None,",(0,s.kt)("br",null),"\xa0\xa0\xa0\xa0shuffle:\xa0bool\xa0=\xa0True,",(0,s.kt)("br",null),") \u2011>\xa0Tuple[Dict[str,\xa0",(0,s.kt)("a",{title:"DataDriver",href:"/docs/api/data/data_drivers#DataDriver"},"DataDriver"),"],\xa0Optional[Dict[str,\xa0",(0,s.kt)("a",{title:"DataDriver",href:"/docs/api/data/data_drivers#DataDriver"},"DataDriver"),"]],\xa0Optional[Dict[str,\xa0",(0,s.kt)("a",{title:"DataDriver",href:"/docs/api/data/data_drivers#DataDriver"},"DataDriver"),"]]]",(0,s.kt)("div",{className:"links-div"},(0,s.kt)("a",{href:"#split_dataset",className:"direct-link"},"#"),(0,s.kt)("a",{href:"https://github.com/sunglasses-ai/classy/blob/c166490a30d8ba6d7c25f70ce707b7a2ddcfb53f/classy/utils/data.py#L46-L113",className:"git-link"},"#"))),(0,s.kt)("div",{className:"api__body"},(0,s.kt)("div",{className:"api__description"}))))}f.isMDXComponent=!0}}]);