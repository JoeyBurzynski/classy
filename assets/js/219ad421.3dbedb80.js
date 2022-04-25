"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9558],{3905:function(e,a,t){t.d(a,{Zo:function(){return p},kt:function(){return m}});var i=t(7294);function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function n(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);a&&(i=i.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,i)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?n(Object(t),!0).forEach((function(a){l(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function c(e,a){if(null==e)return{};var t,i,l=function(e,a){if(null==e)return{};var t,i,l={},n=Object.keys(e);for(i=0;i<n.length;i++)t=n[i],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)t=n[i],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var r=i.createContext({}),o=function(e){var a=i.useContext(r),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},p=function(e){var a=o(e.components);return i.createElement(r.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return i.createElement(i.Fragment,{},a)}},d=i.forwardRef((function(e,a){var t=e.components,l=e.mdxType,n=e.originalType,r=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=o(t),m=l,v=d["".concat(r,".").concat(m)]||d[m]||u[m]||n;return t?i.createElement(v,s(s({ref:a},p),{},{components:t})):i.createElement(v,s({ref:a},p))}));function m(e,a){var t=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var n=t.length,s=new Array(n);s[0]=d;var c={};for(var r in a)hasOwnProperty.call(a,r)&&(c[r]=a[r]);c.originalType=e,c.mdxType="string"==typeof e?e:l,s[1]=c;for(var o=2;o<n;o++)s[o]=t[o];return i.createElement.apply(null,s)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9591:function(e,a,t){t.r(a),t.d(a,{assets:function(){return p},contentTitle:function(){return r},default:function(){return m},frontMatter:function(){return c},metadata:function(){return o},toc:function(){return u}});var i=t(7462),l=t(3366),n=(t(7294),t(3905)),s=["components"],c={title:"classy.evaluation.simple",toc_min_heading_level:2,toc_max_heading_level:4,pagination_next:null,pagination_prev:null},r=void 0,o={unversionedId:"api/evaluation/simple",id:"api/evaluation/simple",title:"classy.evaluation.simple",description:"Functions",source:"@site/docs/api/evaluation/simple.md",sourceDirName:"api/evaluation",slug:"/api/evaluation/simple",permalink:"/classy/docs/api/evaluation/simple",tags:[],version:"current",frontMatter:{title:"classy.evaluation.simple",toc_min_heading_level:2,toc_max_heading_level:4,pagination_next:null,pagination_prev:null},sidebar:"apiSidebar"},p={},u=[{value:"Functions",id:"functions",level:2},{value:"accuracy",id:"accuracy",level:3},{value:"p_r_f_support",id:"p_r_f_support",level:3},{value:"Classes",id:"clzs",level:2},{value:"GenerationSimpleEvaluation",id:"GenerationSimpleEvaluation",level:3},{value:"QASimpleEvaluation",id:"QASimpleEvaluation",level:3},{value:"SentencePairSimpleEvaluation",id:"SentencePairSimpleEvaluation",level:3},{value:"SequenceSimpleEvaluation",id:"SequenceSimpleEvaluation",level:3},{value:"TokenSimpleEvaluation",id:"TokenSimpleEvaluation",level:3}],d={toc:u};function m(e){var a=e.components,t=(0,l.Z)(e,s);return(0,n.kt)("wrapper",(0,i.Z)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"functions"},"Functions"),(0,n.kt)("div",{className:"api"},(0,n.kt)("h3",{id:"accuracy"},"accuracy"),(0,n.kt)("div",{className:"api__signature"},"def ",(0,n.kt)("span",{className:"ident"},"accuracy"),"(",(0,n.kt)("br",null),"\xa0\xa0\xa0\xa0gold,",(0,n.kt)("br",null),"\xa0\xa0\xa0\xa0pred,",(0,n.kt)("br",null),") \u2011>\xa0float",(0,n.kt)("div",{className:"links-div"},(0,n.kt)("a",{href:"#accuracy",className:"direct-link"},"#"),(0,n.kt)("a",{href:"https://github.com/sunglasses-ai/classy/blob/c166490a30d8ba6d7c25f70ce707b7a2ddcfb53f/classy/evaluation/simple.py#L16-L17",className:"git-link"},"#"))),(0,n.kt)("div",{className:"api__body"},(0,n.kt)("div",{className:"api__description"}))),(0,n.kt)("div",{className:"api"},(0,n.kt)("h3",{id:"p_r_f_support"},"p_r_f_support"),(0,n.kt)("div",{className:"api__signature"},"def ",(0,n.kt)("span",{className:"ident"},"p_r_f_support"),"(",(0,n.kt)("br",null),"\xa0\xa0\xa0\xa0gold,",(0,n.kt)("br",null),"\xa0\xa0\xa0\xa0pred,",(0,n.kt)("br",null),") \u2011>\xa0Dict[str,\xa0float]",(0,n.kt)("div",{className:"links-div"},(0,n.kt)("a",{href:"#p_r_f_support",className:"direct-link"},"#"),(0,n.kt)("a",{href:"https://github.com/sunglasses-ai/classy/blob/c166490a30d8ba6d7c25f70ce707b7a2ddcfb53f/classy/evaluation/simple.py#L20-L26",className:"git-link"},"#"))),(0,n.kt)("div",{className:"api__body"},(0,n.kt)("div",{className:"api__description"}))),(0,n.kt)("h2",{id:"clzs"},"Classes"),(0,n.kt)("div",{className:"api"},(0,n.kt)("h3",{id:"GenerationSimpleEvaluation"},"GenerationSimpleEvaluation"),(0,n.kt)("div",{className:"api__signature"},(0,n.kt)("p",null,"class ",(0,n.kt)("span",{className:"ident"},"GenerationSimpleEvaluation"),"()"),(0,n.kt)("div",{className:"links-div"},(0,n.kt)("a",{href:"#GenerationSimpleEvaluation",className:"direct-link"},"#"),(0,n.kt)("a",{href:"https://github.com/sunglasses-ai/classy/blob/c166490a30d8ba6d7c25f70ce707b7a2ddcfb53f/classy/evaluation/simple.py#L65-L76",className:"git-link"},"#"))),(0,n.kt)("div",{className:"api__body"},(0,n.kt)("div",{className:"api__description"},(0,n.kt)("p",null,"Computes a simple full-text accuracy")),(0,n.kt)("div",{className:"api__description"}))),(0,n.kt)("div",{className:"api"},(0,n.kt)("h3",{id:"QASimpleEvaluation"},"QASimpleEvaluation"),(0,n.kt)("div",{className:"api__signature"},(0,n.kt)("p",null,"class ",(0,n.kt)("span",{className:"ident"},"QASimpleEvaluation"),"()"),(0,n.kt)("div",{className:"links-div"},(0,n.kt)("a",{href:"#QASimpleEvaluation",className:"direct-link"},"#"),(0,n.kt)("a",{href:"https://github.com/sunglasses-ai/classy/blob/c166490a30d8ba6d7c25f70ce707b7a2ddcfb53f/classy/evaluation/simple.py#L51-L62",className:"git-link"},"#"))),(0,n.kt)("div",{className:"api__body"},(0,n.kt)("div",{className:"api__description"},(0,n.kt)("p",null,"Computes a simple exact-match accuracy")),(0,n.kt)("div",{className:"api__description"}))),(0,n.kt)("div",{className:"api"},(0,n.kt)("h3",{id:"SentencePairSimpleEvaluation"},"SentencePairSimpleEvaluation"),(0,n.kt)("div",{className:"api__signature"},(0,n.kt)("p",null,"class ",(0,n.kt)("span",{className:"ident"},"SentencePairSimpleEvaluation"),"()"),(0,n.kt)("div",{className:"links-div"},(0,n.kt)("a",{href:"#SentencePairSimpleEvaluation",className:"direct-link"},"#"),(0,n.kt)("a",{href:"https://github.com/sunglasses-ai/classy/blob/c166490a30d8ba6d7c25f70ce707b7a2ddcfb53f/classy/evaluation/simple.py#L36-L40",className:"git-link"},"#"))),(0,n.kt)("div",{className:"api__body"},(0,n.kt)("div",{className:"api__description"}),(0,n.kt)("div",{className:"api__description"}))),(0,n.kt)("div",{className:"api"},(0,n.kt)("h3",{id:"SequenceSimpleEvaluation"},"SequenceSimpleEvaluation"),(0,n.kt)("div",{className:"api__signature"},(0,n.kt)("p",null,"class ",(0,n.kt)("span",{className:"ident"},"SequenceSimpleEvaluation"),"()"),(0,n.kt)("div",{className:"links-div"},(0,n.kt)("a",{href:"#SequenceSimpleEvaluation",className:"direct-link"},"#"),(0,n.kt)("a",{href:"https://github.com/sunglasses-ai/classy/blob/c166490a30d8ba6d7c25f70ce707b7a2ddcfb53f/classy/evaluation/simple.py#L29-L33",className:"git-link"},"#"))),(0,n.kt)("div",{className:"api__body"},(0,n.kt)("div",{className:"api__description"}),(0,n.kt)("div",{className:"api__description"}))),(0,n.kt)("div",{className:"api"},(0,n.kt)("h3",{id:"TokenSimpleEvaluation"},"TokenSimpleEvaluation"),(0,n.kt)("div",{className:"api__signature"},(0,n.kt)("p",null,"class ",(0,n.kt)("span",{className:"ident"},"TokenSimpleEvaluation"),"()"),(0,n.kt)("div",{className:"links-div"},(0,n.kt)("a",{href:"#TokenSimpleEvaluation",className:"direct-link"},"#"),(0,n.kt)("a",{href:"https://github.com/sunglasses-ai/classy/blob/c166490a30d8ba6d7c25f70ce707b7a2ddcfb53f/classy/evaluation/simple.py#L43-L48",className:"git-link"},"#"))),(0,n.kt)("div",{className:"api__body"},(0,n.kt)("div",{className:"api__description"}),(0,n.kt)("div",{className:"api__description"}))))}m.isMDXComponent=!0}}]);