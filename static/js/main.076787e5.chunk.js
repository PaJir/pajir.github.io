(this.webpackJsonppajir=this.webpackJsonppajir||[]).push([[0],{120:function(e,t,n){e.exports=n(187)},125:function(e,t,n){},126:function(e,t,n){},187:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(18),o=n.n(c),i=(n(125),n(50)),u=n(51),l=n(74),s=n(73),p=n(78),f=n(9),h=(n(126),n(55)),b=n(192),d=n(193),m=n(191),v=n(118),g=n(63),k=n.n(g),j=n(79),O=n(80),y=n.n(O),E=new(function(){function e(){Object(i.a)(this,e)}return Object(u.a)(e,[{key:"predict",value:function(){var e=Object(j.a)(k.a.mark((function e(t){var n;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat("http://8.135.48.48","/api/"),e.abrupt("return",y.a.get(n,{headers:{"Access-Control-Allow-Origin":"*"},params:t,responseType:"json"}).then((function(e){return e.data})));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"feedback",value:function(){var e=Object(j.a)(k.a.mark((function e(t){var n;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat("http://8.135.48.48","/api/"),e.abrupt("return",y.a.post(n,t,{headers:{"Access-Control-Allow-Origin":"*"},responseType:"json"}).then((function(e){return e.data})));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),e}()),w=b.a.Search,S=b.a.TextArea,C=function(e){Object(l.a)(n,e);var t=Object(s.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).state={predictions:[]},a.feedbackRef=r.a.createRef(),a.onSearch=a.onSearch.bind(Object(h.a)(a)),a.onSubmit=a.onSubmit.bind(Object(h.a)(a)),a.feedback=a.feedback.bind(Object(h.a)(a)),a}return Object(u.a)(n,[{key:"onSearch",value:function(e){if(e.length<2)this.setState((function(){return{predictions:[]}}));else{var t=e.slice(-2);if(!/[0-9a-zA-Z]+/.test(t)){console.log(t);var n=this;E.predict({data:t}).then((function(t){t.length>0&&(console.log(t),n.setState((function(){return{predictions:t.map((function(t){return{value:e+t.predict,label:r.a.createElement("span",null,e+t.predict)}}))}})))})).catch((function(e){console.warn(e)}))}}}},{key:"onSubmit",value:function(){d.a.open({message:"\u8fd9\u4e2a\u8fd8\u6ca1\u505a\u5462",description:"\u800c\u4e14\u53ef\u80fd\u4e5f\u4e0d\u4f1a\u505a\u8fd9\u4e2a"})}},{key:"feedback",value:function(){var e=this.feedbackRef.current.state.value;e.length<2||(console.log(e),E.feedback({data:e}).then((function(e){console.log(e),d.a.open({message:"\u6536\u5230\u53cd\u9988\u4e86\uff0c\u611f\u8c22\u652f\u6301",placement:"bottomRight"})})).catch((function(e){d.a.open({message:"\u6ca1\u6210\u529f\uff0c\u518d\u8bd5\u4e00\u6b21\u5427",placement:"bottomRight"}),console.warn(e)})))}},{key:"render",value:function(){return r.a.createElement("div",{className:"app-main"},r.a.createElement(m.a,{options:this.state.predictions,onSearch:this.onSearch,style:{width:400}},r.a.createElement(w,{id:"search81",placeholder:"\u8f93\u5165\u4ec0\u4e48\u5462",onSearch:this.onSubmit,style:{width:400}})),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(S,{id:"textarea13",ref:this.feedbackRef,placeholder:"\u8bf4\u70b9\u4ec0\u4e48\u5427",rows:4,size:"large",style:{width:400}}),r.a.createElement(v.a,{onClick:this.feedback,style:{width:400}},"biu~"))}}]),n}(a.Component),x=Object(f.e)(C),A=function(e){Object(l.a)(n,e);var t=Object(s.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement(p.a,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a,{path:"/",exact:!0,component:x}),r.a.createElement(f.a,{path:"/about/",exact:!0,component:x})))}}]),n}(a.Component),R=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,194)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),a(e),r(e),c(e),o(e)}))};o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(A,null)),document.getElementById("root")),R()}},[[120,1,2]]]);
//# sourceMappingURL=main.076787e5.chunk.js.map