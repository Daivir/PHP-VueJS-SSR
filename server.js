var server=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n.w={},n(n.s=14)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"Blog",props:["posts"]}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=n(8),u=(r=o)&&r.__esModule?r:{default:r};t.default={name:"App",components:u.default,props:["view","params"],computed:{currentComponent:function(){return this.view}}}},function(e,t,n){"use strict";function r(e,t,n,r,o,u,i,s){var c=typeof(e=e||{}).default;"object"!==c&&"function"!==c||(e=e.default);var a,f="function"==typeof e?e.options:e;if(t&&(f.render=t,f.staticRenderFns=n,f._compiled=!0),r&&(f.functional=!0),u&&(f._scopeId=u),i?(a=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(i)},f._ssrRegister=a):o&&(a=s?function(){o.call(this,this.$root.$options.shadowRoot)}:o),a)if(f.functional){f._injectStyles=a;var d=f.render;f.render=function(e,t){return a.call(t),d(e,t)}}else{var l=f.beforeCreate;f.beforeCreate=l?[].concat(l,a):[a]}return{exports:e,options:f}}n.d(t,"a",function(){return r})},function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"b",function(){return o});var r=function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t(this.currentComponent,this._b({tag:"component"},"component",this.params,!1))],1)},o=[];r._withStripped=!0},function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"b",function(){return o});var r=function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"blog"},[e._ssrNode("\r\n    Blog:\r\n    "+e._ssrList(e.posts,function(t){return"<div><h1>"+e._ssrEscape(e._s(t.title))+"</h1> <p>"+e._ssrEscape(e._s(t.content))+"</p> <hr></div>"}))])},o=[];r._withStripped=!0},function(e,t){e.exports=require("fs")},function(e,t){e.exports=require("express")},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r);for(var u in r)"default"!==u&&function(e){n.d(t,e,function(){return r[e]})}(u);var i=n(4),s=n(2);var c=function(e){var t;(t=n(19)).__inject__&&t.__inject__(e)},a=Object(s.a)(o.a,i.a,i.b,!1,c,null,"161fcf4a");a.options.__file="resources\\components\\Blog.vue",t.default=a.exports},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=n(7),u=(r=o)&&r.__esModule?r:{default:r};t.default={Blog:u.default}},function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r);for(var u in r)"default"!==u&&function(e){n.d(t,e,function(){return r[e]})}(u);var i=n(3),s=n(2),c=Object(s.a)(o.a,i.a,i.b,!1,null,null,"4d3d2594");c.options.__file="resources\\App.vue",t.default=c.exports},function(e,t){e.exports=require("vue")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createApp=function(e){return new r.default({render:function(t){return t(o.default,{props:e})}})};var r=u(n(10)),o=u(n(9));function u(e){return e&&e.__esModule?e:{default:e}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(11);t.default=function(e){return(0,r.createApp)(e)}},function(e,t){e.exports=require("vue-server-renderer")},function(e,t,n){"use strict";var r=n(13),o=s(n(12)),u=s(n(6)),i=s(n(5));function s(e){return e&&e.__esModule?e:{default:e}}var c=(0,u.default)();c.use("*",function(e,t){var n=e.query,u=(0,o.default)(n),s={title:e.query.title};(0,r.createRenderer)({template:i.default.readFileSync("./index.template.html","utf-8")}).renderToString(u,s,function(e,n){e?t.status(500).end("Internal server error"):t.end(n)})}),c.listen(8081)},,,,,function(e,t){}]);