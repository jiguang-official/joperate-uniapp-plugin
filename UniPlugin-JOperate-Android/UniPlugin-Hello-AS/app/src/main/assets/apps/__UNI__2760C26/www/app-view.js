(function(t){var n={};function e(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,e),i.l=!0,i.exports}e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var i in t)e.d(r,i,function(n){return t[n]}.bind(null,i));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="./",e(e.s="00d2")})({"00d2":function(t,n,e){"use strict";function r(){function t(t){var n=e("cc8a");n.__inject__&&n.__inject__(t)}"function"===typeof t&&t(),UniViewJSBridge.publishHandler("webviewReady")}e("3235"),"undefined"!==typeof plus?r():document.addEventListener("plusready",r)},"24fb":function(t,n,e){"use strict";t.exports=function(t){var n=[];return n.toString=function(){return this.map((function(n){var e=function(t,n){var e=t[1]||"",r=t[3];if(!r)return e;if(n&&"function"===typeof btoa){var i=function(t){var n=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),e="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(n);return"/*# ".concat(e," */")}(r),a=r.sources.map((function(t){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(t," */")}));return[e].concat(a).concat([i]).join("\n")}return[e].join("\n")}(n,t);return n[2]?"@media ".concat(n[2]," {").concat(e,"}"):e})).join("")},n.i=function(t,e,r){"string"===typeof t&&(t=[[null,t,""]]);var i={};if(r)for(var a=0;a<this.length;a++){var o=this[a][0];null!=o&&(i[o]=!0)}for(var s=0;s<t.length;s++){var u=[].concat(t[s]);r&&i[u[0]]||(e&&(u[2]?u[2]="".concat(e," and ").concat(u[2]):u[2]=e),n.push(u))}},n}},3235:function(t,n,e){if("undefined"===typeof Promise||Promise.prototype.finally||(Promise.prototype.finally=function(t){var n=this.constructor;return this.then((function(e){return n.resolve(t()).then((function(){return e}))}),(function(e){return n.resolve(t()).then((function(){throw e}))}))}),"undefined"!==typeof uni&&uni&&uni.requireGlobal){var r=uni.requireGlobal();ArrayBuffer=r.ArrayBuffer,Int8Array=r.Int8Array,Uint8Array=r.Uint8Array,Uint8ClampedArray=r.Uint8ClampedArray,Int16Array=r.Int16Array,Uint16Array=r.Uint16Array,Int32Array=r.Int32Array,Uint32Array=r.Uint32Array,Float32Array=r.Float32Array,Float64Array=r.Float64Array,BigInt64Array=r.BigInt64Array,BigUint64Array=r.BigUint64Array}window.__uniConfig={window:{navigationBarTextStyle:"black",navigationBarTitleText:"uni-app",navigationBarBackgroundColor:"#F8F8F8",backgroundColor:"#F8F8F8"},darkmode:!1},uni.restoreGlobal&&uni.restoreGlobal(weex,plus,setTimeout,clearTimeout,setInterval,clearInterval),__definePage("pages/index/index",(function(){return Vue.extend(e("4037").default)}))},4037:function(t,n,e){"use strict";e.r(n);var r=e("93cd"),i=e("835c");for(var a in i)["default"].indexOf(a)<0&&function(t){e.d(n,t,(function(){return i[t]}))}(a);e("5089");var o=e("f0c5"),s=Object(o["a"])(i["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],void 0);n["default"]=s.exports},5089:function(t,n,e){"use strict";var r=e("fabc"),i=e.n(r);i.a},"7f7e":function(t,n,e){"use strict";function r(t,n){for(var e=[],r={},i=0;i<n.length;i++){var a=n[i],o=a[0],s=a[1],u=a[2],c=a[3],l={id:t+":"+i,css:s,media:u,sourceMap:c};r[o]?r[o].parts.push(l):e.push(r[o]={id:o,parts:[l]})}return e}e.r(n),e.d(n,"default",(function(){return p}));var i="undefined"!==typeof document;if("undefined"!==typeof DEBUG&&DEBUG&&!i)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var a={},o=i&&(document.head||document.getElementsByTagName("head")[0]),s=null,u=0,c=!1,l=function(){},f=null,d="undefined"!==typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function p(t,n,e,i){c=e,f=i||{};var o=r(t,n);return v(o),function(n){for(var e=[],i=0;i<o.length;i++){var s=o[i],u=a[s.id];u.refs--,e.push(u)}n?(o=r(t,n),v(o)):o=[];for(i=0;i<e.length;i++){u=e[i];if(0===u.refs){for(var c=0;c<u.parts.length;c++)u.parts[c]();delete a[u.id]}}}}function v(t){for(var n=0;n<t.length;n++){var e=t[n],r=a[e.id];if(r){r.refs++;for(var i=0;i<r.parts.length;i++)r.parts[i](e.parts[i]);for(;i<e.parts.length;i++)r.parts.push(y(e.parts[i]));r.parts.length>e.parts.length&&(r.parts.length=e.parts.length)}else{var o=[];for(i=0;i<e.parts.length;i++)o.push(y(e.parts[i]));a[e.id]={id:e.id,refs:1,parts:o}}}}function _(){var t=document.createElement("style");return t.type="text/css",o.appendChild(t),t}function y(t){var n,e,r=document.querySelector('style[data-vue-ssr-id~="'+t.id+'"]');if(r){if(c)return l;r.parentNode.removeChild(r)}if(d){var i=u++;r=s||(s=_()),n=h.bind(null,r,i,!1),e=h.bind(null,r,i,!0)}else r=_(),n=g.bind(null,r),e=function(){r.parentNode.removeChild(r)};return n(t),function(r){if(r){if(r.css===t.css&&r.media===t.media&&r.sourceMap===t.sourceMap)return;n(t=r)}else e()}}var b=function(){var t=[];return function(n,e){return t[n]=e,t.filter(Boolean).join("\n")}}();function h(t,n,e,r){var i=e?"":V(r.css);if(t.styleSheet)t.styleSheet.cssText=b(n,i);else{var a=document.createTextNode(i),o=t.childNodes;o[n]&&t.removeChild(o[n]),o.length?t.insertBefore(a,o[n]):t.appendChild(a)}}function g(t,n){var e=V(n.css),r=n.media,i=n.sourceMap;if(r&&t.setAttribute("media",r),f.ssrId&&t.setAttribute("data-vue-ssr-id",n.id),i&&(e+="\n/*# sourceURL="+i.sources[0]+" */",e+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),t.styleSheet)t.styleSheet.cssText=e;else{while(t.firstChild)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}var m=/\b([+-]?\d+(\.\d+)?)[r|u]px\b/g,$=/var\(--status-bar-height\)/gi,w=/var\(--window-top\)/gi,C=/var\(--window-bottom\)/gi,x=/var\(--window-left\)/gi,E=/var\(--window-right\)/gi,k=!1;function V(t){if(!uni.canIUse("css.var")){!1===k&&(k=plus.navigator.getStatusbarHeight());var n={statusBarHeight:k,top:window.__WINDOW_TOP||0,bottom:window.__WINDOW_BOTTOM||0};t=t.replace($,n.statusBarHeight+"px").replace(w,n.top+"px").replace(C,n.bottom+"px").replace(x,"0px").replace(E,"0px")}return t.replace(/\{[\s\S]+?\}|@media.+?\{/g,(function(t){return t.replace(m,(function(t,n){return uni.upx2px(n)+"px"}))}))}},"835c":function(t,n,e){"use strict";e.r(n);var r=e("d2d4"),i=e.n(r);for(var a in r)["default"].indexOf(a)<0&&function(t){e.d(n,t,(function(){return r[t]}))}(a);n["default"]=i.a},8717:function(t,n,e){var r=e("24fb");n=r(!1),n.push([t.i,"",""]),t.exports=n},"93cd":function(t,n,e){"use strict";e.d(n,"b",(function(){return r})),e.d(n,"c",(function(){return i})),e.d(n,"a",(function(){}));var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{_i:0}},[e("br",{attrs:{_i:1}}),e("v-uni-label",{attrs:{_i:2}},[t._v("---------------------------------")]),e("v-uni-button",{staticClass:t._$g(3,"sc"),attrs:{type:"primary",_i:3},on:{click:function(n){return t.$handleViewEvent(n)}}},[t._v("\u521d\u59cb\u5316")]),e("br",{attrs:{_i:4}}),e("v-uni-button",{staticClass:t._$g(5,"sc"),attrs:{type:"primary",_i:5},on:{click:function(n){return t.$handleViewEvent(n)}}},[t._v("\u6253\u5f00\u65e5\u5fd7")]),e("br",{attrs:{_i:6}}),e("v-uni-button",{staticClass:t._$g(7,"sc"),attrs:{type:"primary",_i:7},on:{click:function(n){return t.$handleViewEvent(n)}}},[t._v("\u5173\u95ed\u65e5\u5fd7")]),e("br",{attrs:{_i:8}}),e("v-uni-button",{staticClass:t._$g(9,"sc"),attrs:{type:"primary",_i:9},on:{click:function(n){return t.$handleViewEvent(n)}}},[t._v("\u81ea\u5b9a\u4e49\u4e8b\u4ef6\u7edf\u8ba1")]),e("br",{attrs:{_i:10}}),e("v-uni-button",{staticClass:t._$g(11,"sc"),attrs:{type:"primary",_i:11},on:{click:function(n){return t.$handleViewEvent(n)}}},[t._v("\u8bbe\u7f6e\u7528\u6237\u8054\u7cfb\u65b9\u5f0f")]),e("br",{attrs:{_i:12}}),e("v-uni-button",{staticClass:t._$g(13,"sc"),attrs:{type:"primary",_i:13},on:{click:function(n){return t.$handleViewEvent(n)}}},[t._v("\u8bbe\u7f6e\u7528\u6237\u6807\u8bc6")]),e("br",{attrs:{_i:14}}),e("v-uni-button",{staticClass:t._$g(15,"sc"),attrs:{type:"primary",_i:15},on:{click:function(n){return t.$handleViewEvent(n)}}},[t._v("\u83b7\u53d6 CUID")]),e("br",{attrs:{_i:16}}),e("v-uni-button",{staticClass:t._$g(17,"sc"),attrs:{type:"primary",_i:17},on:{click:function(n){return t.$handleViewEvent(n)}}},[t._v("\u8bbe\u7f6e UTM \u5c5e\u6027")]),e("br",{attrs:{_i:18}}),e("v-uni-button",{staticClass:t._$g(19,"sc"),attrs:{type:"primary",_i:19},on:{click:function(n){return t.$handleViewEvent(n)}}},[t._v("\u8bbe\u7f6e\u9759\u6001\u516c\u5171\u5c5e\u6027")]),e("br",{attrs:{_i:20}}),e("v-uni-button",{staticClass:t._$g(21,"sc"),attrs:{type:"primary",_i:21},on:{click:function(n){return t.$handleViewEvent(n)}}},[t._v("\u8bbe\u7f6e\u52a8\u6001\u516c\u5171\u5c5e\u6027")]),e("br",{attrs:{_i:22}}),e("v-uni-button",{staticClass:t._$g(23,"sc"),attrs:{type:"primary",_i:23},on:{click:function(n){return t.$handleViewEvent(n)}}},[t._v("\u5220\u9664\u67d0\u4e2a\u9759\u6001\u516c\u5171\u5c5e\u6027")]),e("br",{attrs:{_i:24}}),e("v-uni-button",{staticClass:t._$g(25,"sc"),attrs:{type:"primary",_i:25},on:{click:function(n){return t.$handleViewEvent(n)}}},[t._v("\u5220\u9664\u6240\u6709\u7684\u9759\u6001\u516c\u5171\u5c5e\u6027")]),e("br",{attrs:{_i:26}}),e("v-uni-button",{staticClass:t._$g(27,"sc"),attrs:{type:"primary",_i:27},on:{click:function(n){return t.$handleViewEvent(n)}}},[t._v("\u83b7\u53d6\u9759\u6001\u516c\u5171\u5c5e\u6027")]),e("br",{attrs:{_i:28}}),e("v-uni-button",{staticClass:t._$g(29,"sc"),attrs:{type:"primary",_i:29},on:{click:function(n){return t.$handleViewEvent(n)}}},[t._v("\u8bbe\u7f6e\u8986\u76d6\u65b9\u5f0f\u7684\u7528\u6237\u5c5e\u6027")]),e("br",{attrs:{_i:30}}),e("v-uni-button",{staticClass:t._$g(31,"sc"),attrs:{type:"primary",_i:31},on:{click:function(n){return t.$handleViewEvent(n)}}},[t._v("\u8bbe\u7f6e\u4ec5\u9996\u6b21\u751f\u6548\u7684\u7528\u6237\u5c5e\u6027")]),e("br",{attrs:{_i:32}}),e("v-uni-button",{staticClass:t._$g(33,"sc"),attrs:{type:"primary",_i:33},on:{click:function(n){return t.$handleViewEvent(n)}}},[t._v("\u8bbe\u7f6e\u7d2f\u52a0\u65b9\u5f0f\u7684\u7528\u6237\u5c5e\u6027")]),e("br",{attrs:{_i:34}}),e("v-uni-button",{staticClass:t._$g(35,"sc"),attrs:{type:"primary",_i:35},on:{click:function(n){return t.$handleViewEvent(n)}}},[t._v("\u8bbe\u7f6e\u8ffd\u52a0\u65b9\u5f0f\u7684\u7528\u6237\u5c5e\u6027")]),e("br",{attrs:{_i:36}}),e("v-uni-button",{staticClass:t._$g(37,"sc"),attrs:{type:"primary",_i:37},on:{click:function(n){return t.$handleViewEvent(n)}}},[t._v("\u5220\u9664\u7528\u6237\u5c5e\u6027")]),e("br",{attrs:{_i:38}}),e("v-uni-button",{staticClass:t._$g(39,"sc"),attrs:{type:"primary",_i:39},on:{click:function(n){return t.$handleViewEvent(n)}}},[t._v("\u5f00\u59cb\u4e8b\u4ef6\u8ba1\u65f6")]),e("br",{attrs:{_i:40}}),e("v-uni-button",{staticClass:t._$g(41,"sc"),attrs:{type:"primary",_i:41},on:{click:function(n){return t.$handleViewEvent(n)}}},[t._v("\u7ed3\u675f\u4e8b\u4ef6\u8ba1\u65f6")]),e("br",{attrs:{_i:42}}),e("v-uni-button",{staticClass:t._$g(43,"sc"),attrs:{type:"primary",_i:43},on:{click:function(n){return t.$handleViewEvent(n)}}},[t._v("\u6682\u505c\u4e8b\u4ef6\u8ba1\u65f6")]),e("br",{attrs:{_i:44}}),e("v-uni-button",{staticClass:t._$g(45,"sc"),attrs:{type:"primary",_i:45},on:{click:function(n){return t.$handleViewEvent(n)}}},[t._v("\u6062\u590d\u4e8b\u4ef6\u8ba1\u65f6")]),e("br",{attrs:{_i:46}}),e("v-uni-button",{staticClass:t._$g(47,"sc"),attrs:{type:"primary",_i:47},on:{click:function(n){return t.$handleViewEvent(n)}}},[t._v("\u5220\u9664\u4e8b\u4ef6\u8ba1\u65f6")]),e("br",{attrs:{_i:48}}),e("v-uni-button",{staticClass:t._$g(49,"sc"),attrs:{type:"primary",_i:49},on:{click:function(n){return t.$handleViewEvent(n)}}},[t._v("\u6e05\u9664\u6240\u6709\u8ba1\u65f6\u4e8b\u4ef6")]),e("br",{attrs:{_i:50}}),e("v-uni-button",{staticClass:t._$g(51,"sc"),attrs:{type:"primary",_i:51},on:{click:function(n){return t.$handleViewEvent(n)}}},[t._v("\u83b7\u53d6\u8fd0\u8425\u589e\u957f\u5f00\u901a\u72b6\u6001")]),e("br",{attrs:{_i:52}}),e("v-uni-button",{staticClass:t._$g(53,"sc"),attrs:{type:"primary",_i:53},on:{click:function(n){return t.$handleViewEvent(n)}}},[t._v("\u83b7\u53d6\u7528\u6237\u6570\u636e")]),e("br",{attrs:{_i:54}}),e("v-uni-button",{staticClass:t._$g(55,"sc"),attrs:{type:"primary",_i:55},on:{click:function(n){return t.$handleViewEvent(n)}}},[t._v("\u83b7\u53d6\u9879\u76ee\u4fe1\u606f")]),e("br",{attrs:{_i:56}}),e("v-uni-button",{staticClass:t._$g(57,"sc"),attrs:{type:"primary",_i:57},on:{click:function(n){return t.$handleViewEvent(n)}}},[t._v("\u83b7\u53d6 SDK \u7248\u672c\u53f7")]),e("br",{attrs:{_i:58}}),e("v-uni-button",{staticClass:t._$g(59,"sc"),attrs:{type:"primary",_i:59},on:{click:function(n){return t.$handleViewEvent(n)}}},[t._v("\u67e5\u770b\u4e0a\u62a5\u5916\u56f4\u5b57\u6bb5")]),e("br",{attrs:{_i:60}}),e("v-uni-button",{staticClass:t._$g(61,"sc"),attrs:{type:"primary",_i:61},on:{click:function(n){return t.$handleViewEvent(n)}}},[t._v("\u8bbe\u7f6e\u662f\u5426\u53ef\u83b7\u53d6\u8bbe\u5907\u4fe1\u606f\u603b\u5f00\u5173")]),e("br",{attrs:{_i:62}}),e("v-uni-button",{staticClass:t._$g(63,"sc"),attrs:{type:"primary",_i:63},on:{click:function(n){return t.$handleViewEvent(n)}}},[t._v("\u8bbe\u7f6e\u662f\u5426\u53ef\u83b7\u53d6\u5730\u7406\u4f4d\u7f6e\u4fe1\u606f")]),e("br",{attrs:{_i:64}}),e("v-uni-button",{staticClass:t._$g(65,"sc"),attrs:{type:"primary",_i:65},on:{click:function(n){return t.$handleViewEvent(n)}}},[t._v("\u8bbe\u7f6e\u662f\u5426\u53ef\u83b7\u53d6 mac \u4fe1\u606f")])],1)},i=[]},cc8a:function(t,n,e){"use strict";e.r(n);var r=e("d1b4"),i=e.n(r);for(var a in r)["default"].indexOf(a)<0&&function(t){e.d(n,t,(function(){return r[t]}))}(a);n["default"]=i.a},d1b4:function(t,n,e){var r=e("8717");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var i=e("7f7e").default;i("d82aa324",r,!0,{sourceMap:!1,shadowMode:!1})},d2d4:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;n.default={data:function(){return{wxsProps:{}}},components:{}}},f0c5:function(t,n,e){"use strict";function r(t,n,e,r,i,a,o,s,u,c){var l,f="function"===typeof t?t.options:t;if(u){f.components||(f.components={});var d=Object.prototype.hasOwnProperty;for(var p in u)d.call(u,p)&&!d.call(f.components,p)&&(f.components[p]=u[p])}if(c&&("function"===typeof c.beforeCreate&&(c.beforeCreate=[c.beforeCreate]),(c.beforeCreate||(c.beforeCreate=[])).unshift((function(){this[c.__module]=this})),(f.mixins||(f.mixins=[])).push(c)),n&&(f.render=n,f.staticRenderFns=e,f._compiled=!0),r&&(f.functional=!0),a&&(f._scopeId="data-v-"+a),o?(l=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},f._ssrRegister=l):i&&(l=s?function(){i.call(this,this.$root.$options.shadowRoot)}:i),l)if(f.functional){f._injectStyles=l;var v=f.render;f.render=function(t,n){return l.call(n),v(t,n)}}else{var _=f.beforeCreate;f.beforeCreate=_?[].concat(_,l):[l]}return{exports:t,options:f}}e.d(n,"a",(function(){return r}))},f4c1:function(t,n,e){var r=e("24fb");n=r(!1),n.push([t.i,".btn{width:300px;height:40px;font-size:15px}",""]),t.exports=n},fabc:function(t,n,e){var r=e("f4c1");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var i=e("7f7e").default;i("dae9055e",r,!0,{sourceMap:!1,shadowMode:!1})}});