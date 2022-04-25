"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5935],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var l=r.createContext({}),c=function(t){var e=r.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},u=function(t){var e=c(t.components);return r.createElement(l.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,l=t.parentName,u=s(t,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(f,o(o({ref:e},u),{},{components:n})):r.createElement(f,o({ref:e},u))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s.mdxType="string"==typeof t?t:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4696:function(t,e,n){n.r(e),n.d(e,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],s={sidebar_position:1,title:"First steps"},l=void 0,c={unversionedId:"getting-started/basic/intro",id:"getting-started/basic/intro",title:"First steps",description:"In the following tutorial, we are going to go over a standard classy example, covering Token Classification, specifically",source:"@site/docs/getting-started/basic/intro.md",sourceDirName:"getting-started/basic",slug:"/getting-started/basic/intro",permalink:"/classy/docs/getting-started/basic/intro",editUrl:"https://github.com/sunglasses-ai/classy/edit/main/docs/docs/getting-started/basic/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"First steps"},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/classy/docs/installation"},next:{title:"Organizing your data",permalink:"/classy/docs/getting-started/basic/data-formatting"}},u={},p=[{value:"The Task",id:"the-task",level:2}],d={toc:p};function m(t){var e=t.components,n=(0,a.Z)(t,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In the following tutorial, we are going to go over a standard ",(0,i.kt)("inlineCode",{parentName:"p"},"classy")," example, covering ",(0,i.kt)("strong",{parentName:"p"},"Token Classification"),", specifically\n",(0,i.kt)("em",{parentName:"p"},"Named Entity Recognition"),", and you are going to learn the basics of how to use ",(0,i.kt)("inlineCode",{parentName:"p"},"classy")," without (potentially) writing a single line of code."),(0,i.kt)("h2",{id:"the-task"},"The Task"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Named Entity Recognition")," is the task of identifying Named Entities in a text linking them to a predefined\nset of classes, e.g., ",(0,i.kt)("strong",{parentName:"p"},"ORG")," (organization), ",(0,i.kt)("strong",{parentName:"p"},"LOC")," (location), ",(0,i.kt)("strong",{parentName:"p"},"PER")," (person) and ",(0,i.kt)("strong",{parentName:"p"},"O")," (other) for non-entities.\nFor instance, consider what will be our running example for this whole tutorial:"),(0,i.kt)("table",null,(0,i.kt)("tr",{style:{textAlign:"center"}},(0,i.kt)("td",null,"Barack"),(0,i.kt)("td",null,"Obama"),(0,i.kt)("td",null,"visited"),(0,i.kt)("td",null,"Google"),(0,i.kt)("td",null,"in"),(0,i.kt)("td",null,"California")),(0,i.kt)("tr",{style:{textAlign:"center"}},(0,i.kt)("td",null,"PER"),(0,i.kt)("td",null,"PER"),(0,i.kt)("td",null,"O"),(0,i.kt)("td",null,"ORG"),(0,i.kt)("td",null,"O"),(0,i.kt)("td",null,"LOC"))),(0,i.kt)("p",null,"Our goal is to train a classification model that, given a sequence of tokens as input,\noutputs a sequence of Named Entity tags corresponding to each token in the sequence."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The contents of this tutorial focus on the task of ",(0,i.kt)("em",{parentName:"p"},"Token Classification"),", but the general ideas and code structure are\nvery similar for other tasks as well (you can check them out ",(0,i.kt)("a",{parentName:"p",href:"/docs/reference-manual/tasks-and-formats"},"in the documentation"),")."))))}m.isMDXComponent=!0}}]);