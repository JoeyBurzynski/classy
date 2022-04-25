"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4293],{3905:function(t,e,a){a.d(e,{Zo:function(){return p},kt:function(){return d}});var n=a(7294);function i(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function s(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){i(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,i=function(t,e){if(null==t)return{};var a,n,i={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(i[a]=t[a]);return i}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(i[a]=t[a])}return i}var l=n.createContext({}),c=function(t){var e=n.useContext(l),a=e;return t&&(a="function"==typeof t?t(e):s(s({},e),t)),a},p=function(t){var e=c(t.components);return n.createElement(l.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,i=t.mdxType,r=t.originalType,l=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),m=c(a),d=i,h=m["".concat(l,".").concat(d)]||m[d]||u[d]||r;return a?n.createElement(h,s(s({ref:e},p),{},{components:a})):n.createElement(h,s({ref:e},p))}));function d(t,e){var a=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var r=a.length,s=new Array(r);s[0]=m;var o={};for(var l in e)hasOwnProperty.call(e,l)&&(o[l]=e[l]);o.originalType=t,o.mdxType="string"==typeof t?t:i,s[1]=o;for(var c=2;c<r;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},856:function(t,e,a){a.d(e,{Z:function(){return p}});var n=a(4578),i=a(5861),r=a(7855),s=a(7757),o=a.n(s),l=a(7294),c=function(){function t(t,e){void 0===t&&(t="#termynal"),void 0===e&&(e={}),this.container="string"==typeof t?document.querySelector(t):t,this.pfx="data-"+(e.prefix||"ty"),this.originalStartDelay=this.startDelay=e.startDelay||parseFloat(this.container.getAttribute(this.pfx+"-startDelay"))||600,this.originalTypeDelay=this.typeDelay=e.typeDelay||parseFloat(this.container.getAttribute(this.pfx+"-typeDelay"))||90,this.originalLineDelay=this.lineDelay=e.lineDelay||parseFloat(this.container.getAttribute(this.pfx+"-lineDelay"))||1500,this.progressLength=e.progressLength||parseFloat(this.container.getAttribute(this.pfx+"-progressLength"))||40,this.progressChar=e.progressChar||this.container.getAttribute(this.pfx+"-progressChar")||"\u2588",this.progressPercent=e.progressPercent||parseFloat(this.container.getAttribute(this.pfx+"-progressPercent"))||100,this.cursor=e.cursor||this.container.getAttribute(this.pfx+"-cursor")||"\u258b",this.lineData=this.lineDataToElements(e.lineData||[]),this.loadLines(),e.noInit||this.init()}var e=t.prototype;return e.loadLines=function(){var t=this.generateFinish();t.style.visibility="hidden",this.container.appendChild(t),this.lines=Array.from(this.container.querySelectorAll("["+this.pfx+"]")).concat(this.lineData);for(var e=0;e<this.lines.length;e++)this.lines[e].style.visibility="hidden",this.container.appendChild(this.lines[e]);var a=this.generateRestart();a.style.visibility="hidden",this.container.appendChild(a),this.container.setAttribute("data-termynal","")},e.init=function(){var t=getComputedStyle(this.container);this.container.style.width="0px"!==t.width?t.width:void 0,this.container.style.minHeight="0px"!==t.height?t.height:void 0,this.container.setAttribute("data-termynal",""),this.container.innerHTML="";for(var e,a=(0,r.Z)(this.lines);!(e=a()).done;){e.value.style.visibility="visible"}this.start()},e.start=function(){var t=(0,i.Z)(o().mark((function t(){var e,a,n,i,s;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.addFinish(),t.next=3,this._wait(this.startDelay);case 3:e=(0,r.Z)(this.lines);case 4:if((a=e()).done){t.next=29;break}if(n=a.value,i=n.getAttribute(this.pfx),s=n.getAttribute(this.pfx+"-delay")||this.lineDelay,"input"!==i){t.next=16;break}return n.setAttribute(this.pfx+"-cursor",this.cursor),t.next=12,this.type(n);case 12:return t.next=14,this._wait(s);case 14:t.next=26;break;case 16:if("progress"!==i){t.next=23;break}return t.next=19,this.progress(n);case 19:return t.next=21,this._wait(s);case 21:t.next=26;break;case 23:return this.container.appendChild(n),t.next=26,this._wait(s);case 26:n.removeAttribute(this.pfx+"-cursor");case 27:t.next=4;break;case 29:this.addRestart(),this.finishElement.style.visibility="hidden",this.lineDelay=this.originalLineDelay,this.typeDelay=this.originalTypeDelay,this.startDelay=this.originalStartDelay;case 34:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}(),e.generateRestart=function(){var t=this,e=document.createElement("a");return e.onclick=function(e){e.preventDefault(),t.container.innerHTML="",t.init()},e.href="#",e.setAttribute("data-terminal-control",""),e.innerHTML="restart \u21bb",e},e.generateFinish=function(){var t=this,e=document.createElement("a");return e.onclick=function(e){e.preventDefault(),t.lineDelay=0,t.typeDelay=0,t.startDelay=0},e.href="#",e.setAttribute("data-terminal-control",""),e.innerHTML="fast \u2192",this.finishElement=e,e},e.addRestart=function(){var t=this.generateRestart();this.container.appendChild(t)},e.addFinish=function(){var t=this.generateFinish();this.container.appendChild(t)},e.type=function(){var t=(0,i.Z)(o().mark((function t(e){var a,n,i,r,s;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a=Array.from(e.textContent),e.textContent="",this.container.appendChild(e),n=0,i=a;case 4:if(!(n<i.length)){t.next=13;break}return r=i[n],s=e.getAttribute(this.pfx+"-typeDelay")||this.typeDelay,t.next=9,this._wait(s);case 9:e.textContent+=r;case 10:n++,t.next=4;break;case 13:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}(),e.progress=function(){var t=(0,i.Z)(o().mark((function t(e){var a,n,i,r,s,l;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a=e.getAttribute(this.pfx+"-progressLength")||this.progressLength,n=e.getAttribute(this.pfx+"-progressChar")||this.progressChar,i=n.repeat(a),r=e.getAttribute(this.pfx+"-progressPercent")||this.progressPercent,e.textContent="",this.container.appendChild(e),s=1;case 7:if(!(s<i.length+1)){t.next=17;break}return t.next=10,this._wait(this.typeDelay);case 10:if(l=Math.round(s/i.length*100),e.textContent=i.slice(0,s)+" "+l+"%",!(l>r)){t.next=14;break}return t.abrupt("break",17);case 14:s++,t.next=7;break;case 17:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}(),e._wait=function(t){return new Promise((function(e){return setTimeout(e,t)}))},e.lineDataToElements=function(t){var e=this;return t.map((function(t){var a=document.createElement("div");return a.innerHTML="<span "+e._attributes(t)+">"+(t.value||"")+"</span>",a.firstElementChild}))},e._attributes=function(t){var e="";for(var a in t)"class"!==a?"type"===a?e+=this.pfx+'="'+t[a]+'" ':"value"!==a&&(e+=this.pfx+"-"+a+'="'+t[a]+'" '):e+=" class="+t[a]+" ";return e},t}(),p=function(t){function e(){return t.apply(this,arguments)||this}(0,n.Z)(e,t);var a=e.prototype;return a.componentDidMount=function(){new c(this.t,{typeDelay:40,lineDelay:700})},a.render=function(){var t=this;return l.createElement("div",null,l.createElement("div",{"data-terminal":!0,style:this.props.style,ref:function(e){return t.t=e}},this.props.children))},e}(l.Component)},150:function(t,e,a){a.r(e),a.d(e,{assets:function(){return u},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return m}});var n=a(7462),i=a(3366),r=(a(7294),a(3905)),s=a(856),o=["components"],l={sidebar_position:7,title:"Custom Evaluation Metric"},c=void 0,p={unversionedId:"getting-started/customizing-things/custom-metric",id:"getting-started/customizing-things/custom-metric",title:"Custom Evaluation Metric",description:"Adding a custom metric for evaluation is easy in classy, and you can use it for both classy evaluate and",source:"@site/docs/getting-started/customizing-things/custom-metric.md",sourceDirName:"getting-started/customizing-things",slug:"/getting-started/customizing-things/custom-metric",permalink:"/classy/docs/getting-started/customizing-things/custom-metric",editUrl:"https://github.com/sunglasses-ai/classy/edit/main/docs/docs/getting-started/customizing-things/custom-metric.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,title:"Custom Evaluation Metric"},sidebar:"tutorialSidebar",previous:{title:"Custom Optimizer",permalink:"/classy/docs/getting-started/customizing-things/custom-optimizer"},next:{title:"train",permalink:"/classy/docs/reference-manual/cli/train"}},u={},m=[{value:"A Minimal Example",id:"a-minimal-example",level:2},{value:"Monitoring at Training Time",id:"monitoring-at-training-time",level:2},{value:"Swapping Evaluation Metric",id:"swapping-evaluation-metric",level:2}],d={toc:m};function h(t){var e=t.components,a=(0,i.Z)(t,o);return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Adding a custom metric for evaluation is easy in ",(0,r.kt)("inlineCode",{parentName:"p"},"classy"),", and you can use it for both ",(0,r.kt)("inlineCode",{parentName:"p"},"classy evaluate")," and\n",(0,r.kt)("inlineCode",{parentName:"p"},"classy train")," (to monitor performance or, perhaps, even early-stop). To do this, you just need to:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Write your ",(0,r.kt)("em",{parentName:"li"},"Evaluation")," class")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"class Evaluation:\n    def __call__(\n        self,\n        path: str,\n        predicted_samples: List[ClassySample],\n    ) -> Dict:\n        raise NotImplementedError\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Write its config"),(0,r.kt)("li",{parentName:"ol"},"Train, specifying your evaluation ",(0,r.kt)("inlineCode",{parentName:"li"},"classy train [...] -c [...] evaluation=<your evaluation name>")),(0,r.kt)("li",{parentName:"ol"},"using ",(0,r.kt)("inlineCode",{parentName:"li"},"classy evaluate")," now prints your custom evaluation")),(0,r.kt)("h2",{id:"a-minimal-example"},"A Minimal Example"),(0,r.kt)("p",null,"As an example, imagine you want to use SpanF1 to evaluate your NER (Named Entity Recognition) system. First, you implement\nthe class:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="classy/evaluation/span.py"',title:'"classy/evaluation/span.py"'},'from datasets import load_metric\n\nclass SeqEvalSpanEvaluation(Evaluation):\n    def __init__(self):\n        self.backend_metric = load_metric("seqeval")\n\n    def __call__(\n        self,\n        predicted_samples: List[TokensSample],\n    ) -> Dict:\n\n        metric_out = self.backend_metric.compute(\n            predictions=[labels for _, labels in predicted_samples],\n            references=[sample.labels for sample, _ in predicted_samples],\n        )\n        p, r, f1 = metric_out["overall_precision"], metric_out["overall_recall"], metric_out["overall_f1"]\n\n        return {"precision": p, "recall": r, "f1": f1}\n')),(0,r.kt)("p",null,"We use here the SpanF1 metric implemented in the HuggingFace ",(0,r.kt)("em",{parentName:"p"},"datasets")," library (this is what ",(0,r.kt)("em",{parentName:"p"},'load_metric("seqeval")'),"\ndoes). Then, you write the corresponding config:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="configurations/evaluation/span.yaml"',title:'"configurations/evaluation/span.yaml"'},"_target_: 'classy.evaluation.span.SeqEvalSpanEvaluation'\n")),(0,r.kt)("p",null,"Finally, add this evaluation metric to your training configuration, train your model and automatically evaluate with\nyour metric:"),(0,r.kt)(s.Z,{mdxType:"ReactTermynal"},(0,r.kt)("span",{"data-ty":"input"},"classy train token DATA-PATH -n token -c evaluation=span"),(0,r.kt)("span",{"data-ty":"progress"}),(0,r.kt)("span",{"data-ty":!0},"Training completed"),(0,r.kt)("span",{"data-ty":"input"},"classy evaluate MODEL-PATH TEST-PATH"),(0,r.kt)("span",{"data-ty":"progress"}),(0,r.kt)("span",{"data-ty":!0},"* precision: 0.8746950156849076"),(0,r.kt)("span",{"data-ty":!0},"* recall: 0.8886331444759207"),(0,r.kt)("span",{"data-ty":!0},"* f1: 0.8816089935007905")),(0,r.kt)("h2",{id:"monitoring-at-training-time"},"Monitoring at Training Time"),(0,r.kt)("p",null,"As a matter of fact, most of the time you'll want to monitor your evaluation metric on some dataset (most likely, the validation)\nalso during training. You can achieve this as follows:"),(0,r.kt)(s.Z,{mdxType:"ReactTermynal"},(0,r.kt)("span",{"data-ty":"input"},"classy train token DATA-PATH -n token -c callbacks=evaluation evaluation=span"),(0,r.kt)("span",{"data-ty":"progress"}),(0,r.kt)("span",{"data-ty":!0},"Training completed")),(0,r.kt)("p",null),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"callbacks=evaluation")," is what does the magic. Behind the scenes, what is happening is that you are adding a callback\nwith the following config (which, obviously, you can modify either with ",(0,r.kt)("inlineCode",{parentName:"p"},"-c")," or via profile):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="configurations/callbacks/evaluation.yaml"',title:'"configurations/callbacks/evaluation.yaml"'},'- _target_: "classy.pl_callbacks.prediction.PredictionPLCallback"\n  path: null  # leave it to null to set it to validation path\n  prediction_dataset_conf: ${prediction.dataset}\n  on_result:\n    file_dumper:\n      _target_: "classy.pl_callbacks.prediction.FileDumperPredictionCallback"\n    evaluation:\n      _target_: "classy.pl_callbacks.prediction.EvaluationPredictionCallback"\n      evaluation: ${evaluation}\n  settings:\n    - name: "validation"\n      path: null  # leave it to null to set it to PredictionPLCallback.path\n      token_batch_size: 800\n      limit: 1000\n      prediction_param_conf_path: null\n      on_result:\n        - "file_dumper"\n        - "evaluation"\n')),(0,r.kt)("p",null,"Left as it is, this config tells ",(0,r.kt)("inlineCode",{parentName:"p"},"classy")," to use the model being trained to predict all samples in the validation dataset,\nand runs 2 callbacks on the resulting (sample, prediction) tuples:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"FileDumperPredictionCallback"),"; this callback dumps the (sample, prediction) tuples that your model predicts at each\nvalidation epoch in a dedicated folder in your experiment directory"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"EvaluationPredictionCallback")," (the actual magic); this callback evaluates the (sample, prediction) tuples with the\nevaluation metric you specified and logs the result")),(0,r.kt)("p",null,"More in detail, ",(0,r.kt)("em",{parentName:"p"},"PredictionPLCallback")," is a powerful class supporting quite the number of evaluation scenarios during\nyour training. It has 2 main arguments:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"on_result"),", a dictionary of (name, callback) pairs; each callback here is a ",(0,r.kt)("em",{parentName:"li"},"classy.pl_callbacks.prediction.PredictionCallback")," class"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"settings"),", a list of settings where model prediction should be performed, each made up of:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"name")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"path")," (containing the dataset you want to evaluate upon)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"token_batch_size"),", the token batch size you want to use (remember, no gradient computation here)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"limit"),", the maximum number of samples to be used (chosen as they occur in the dataset); set it to -1 to use all of them"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"prediction_param_conf_path"),", the path to the prediction params config file you want to use (leave it to null if not needed)"),(0,r.kt)("li",{parentName:"ul"},"(optionally) ",(0,r.kt)("em",{parentName:"li"},"on_result"),", a list containing the name of the on_result callbacks to want to launch on this setting; if not\nprovided, all callbacks will be used")))),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"You can use your metric for early-stopping as well! Just add\n",(0,r.kt)("inlineCode",{parentName:"p"},"-c [...] callbacks_monitor=<setting-name>-<name-of-metric-returned-in-evaluation-dict> callbacks_mode=<max-or-min>"),".\nFor instance, in our example, to early-stop on SpanF1 on the validation set,\nuse ",(0,r.kt)("inlineCode",{parentName:"p"},"-c [...] callbacks_monitor=validation-f1 callbacks_mode=max")))),(0,r.kt)("h2",{id:"swapping-evaluation-metric"},"Swapping Evaluation Metric"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"classy")," also supports changing the evaluation metric directly when using ",(0,r.kt)("inlineCode",{parentName:"p"},"classy evaluate"),", regardless of the config\nused in ",(0,r.kt)("inlineCode",{parentName:"p"},"classy train"),". To do so, you can use the the ",(0,r.kt)("inlineCode",{parentName:"p"},"--evaluation-config")," CLI parameter to ",(0,r.kt)("inlineCode",{parentName:"p"},"classy evaluate"),". This\nparameter specifies the configuration path (e.g. ",(0,r.kt)("em",{parentName:"p"},"configurations/evaluation/span.yaml"),") where the config of the desired\nevaluation metric is stored."),(0,r.kt)(s.Z,{mdxType:"ReactTermynal"},(0,r.kt)("span",{"data-ty":"input"},"classy train token DATA-PATH -n token"),(0,r.kt)("span",{"data-ty":"progress"}),(0,r.kt)("span",{"data-ty":!0},"Training completed"),(0,r.kt)("span",{"data-ty":"input"},"classy evaluate MODEL-PATH TEST-PATH"),(0,r.kt)("span",{"data-ty":"progress"}),(0,r.kt)("span",{"data-ty":!0},"# Evaluation with original training config"),(0,r.kt)("span",{"data-ty":!0},"[...]"),(0,r.kt)("span",{"data-ty":"input"},"classy evaluate MODEL-PATH TEST-PATH --evaluation-config configurations/evaluation/span.yaml"),(0,r.kt)("span",{"data-ty":"progress"}),(0,r.kt)("span",{"data-ty":!0},"* precision: 0.8746950156849076"),(0,r.kt)("span",{"data-ty":!0},"* recall: 0.8886331444759207"),(0,r.kt)("span",{"data-ty":!0},"* f1: 0.8816089935007905")),(0,r.kt)("p",null),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Note that interpolation to other configs is currently not supported in this setting."))))}h.isMDXComponent=!0}}]);