(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{"1da1":function(t,e,n){"use strict";function r(t,e,n,r,o,i,a){try{var c=t[i](a),s=c.value}catch(u){return void n(u)}c.done?e(s):Promise.resolve(s).then(r,o)}function o(t){return function(){var e=this,n=arguments;return new Promise((function(o,i){var a=t.apply(e,n);function c(t){r(a,o,i,c,s,"next",t)}function s(t){r(a,o,i,c,s,"throw",t)}c(void 0)}))}}n("d3b7"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=o},"1de5":function(t,e,n){"use strict";t.exports=function(t,e){return e||(e={}),t=t&&t.__esModule?t.default:t,"string"!==typeof t?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},6469:function(t,e,n){"use strict";var r=n("4ea4");n("ac1f"),n("466d"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("96cf");var o=r(n("1da1")),i=n("9da8"),a={data:function(){return{appLogo:"https://img.agrimedia.cn/bmsc/apps/bm-app-logo.jpeg",appName:"白马星球",appDes:"白马星球下载页",andHref:"https://img.agrimedia.cn/bmsc/apps/bmsc_v1.1.2.apk",weixin:!1,scheme:""}},onLoad:function(){this.setTitle(),this.openApp(),this.deviceType=uni.getSystemInfoSync().platform},mounted:function(){if("android"==uni.getSystemInfoSync().platform){var t=window.navigator.userAgent.toLowerCase();if("micromessenger"==t.match(/MicroMessenger/i))return;window.open(this.andHref)}},methods:{getData:function(){return(0,o.default)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,i.getIosUrl)();case 3:e=t.sent,console.log(e),t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](0),uni.showToast({title:t.t0,icon:"none"});case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))()},setTitle:function(){uni.setNavigationBarTitle({title:this.appName+"下载"})},isWX:function(){var t=navigator.userAgent.toLowerCase();"micromessenger"==t.match(/MicroMessenger/i)?this.weixin=!0:this.weixin=!1},openApp:function(){this.scheme&&(window.location=this.scheme)},down:function(t){"and"==t?"android"==this.deviceType&&(this.isWX(),this.weixin||window.open(this.andHref)):"ios"==this.deviceType&&(window.location.href="https://game.jennybba.cc/iosign/softwareDistribute/down/b2ec0e433e2741d1a82f8337077d00f5")}}};e.default=a},7742:function(t,e,n){"use strict";n("d3b7"),Object.defineProperty(e,"__esModule",{value:!0}),e.request=e.baseURL=void 0;var r="http://103.39.230.169:8085";e.baseURL=r;var o=function(t){return new Promise((function(e,n){uni.request({url:r+t.url,method:t.method||"GET",data:t.data||{},header:{token:uni.getStorageSync("token")||""},success:function(t){1==t.data.code?e(t.data):n(t.data.msg)},fail:function(t){console.log(t),n(t)}})}))};e.request=o},"85a3":function(t,e,n){"use strict";var r;n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return r}));var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"page"},[n("v-uni-view",{staticClass:"btns"},[n("v-uni-view",{staticClass:"btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.down("and")}}},[n("v-uni-image",{attrs:{src:"https://img.agrimedia.cn/bmsc/apps/andriod.png",mode:""}})],1),n("v-uni-view",{staticClass:"btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.down("ios")}}},[n("v-uni-image",{attrs:{src:"https://img.agrimedia.cn/bmsc/apps/ios.png",mode:""}})],1)],1),n("v-uni-view",{staticClass:"version"},[t._v("v1.1.2")]),t.weixin?n("v-uni-view",{staticClass:"wx"}):t._e()],1)},i=[]},8742:function(t,e,n){var r=n("e481");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var o=n("4f06").default;o("ec8db4f8",r,!0,{sourceMap:!1,shadowMode:!1})},8865:function(t,e,n){"use strict";n.r(e);var r=n("85a3"),o=n("bebb");for(var i in o)"default"!==i&&function(t){n.d(e,t,(function(){return o[t]}))}(i);n("ba7f");var a,c=n("f0c5"),s=Object(c["a"])(o["default"],r["b"],r["c"],!1,null,"1d80c9bd",null,!1,r["a"],a);e["default"]=s.exports},"96cf":function(t,e){!function(e){"use strict";var n,r=Object.prototype,o=r.hasOwnProperty,i="function"===typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag",u="object"===typeof t,d=e.regeneratorRuntime;if(d)u&&(t.exports=d);else{d=e.regeneratorRuntime=u?t.exports:{},d.wrap=y;var f="suspendedStart",h="suspendedYield",l="executing",p="completed",g={},v={};v[a]=function(){return this};var m=Object.getPrototypeOf,w=m&&m(m(N([])));w&&w!==r&&o.call(w,a)&&(v=w);var b=k.prototype=L.prototype=Object.create(v);_.prototype=b.constructor=k,k.constructor=_,k[s]=_.displayName="GeneratorFunction",d.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===_||"GeneratorFunction"===(e.displayName||e.name))},d.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,k):(t.__proto__=k,s in t||(t[s]="GeneratorFunction")),t.prototype=Object.create(b),t},d.awrap=function(t){return{__await:t}},E(j.prototype),j.prototype[c]=function(){return this},d.AsyncIterator=j,d.async=function(t,e,n,r){var o=new j(y(t,e,n,r));return d.isGeneratorFunction(e)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},E(b),b[s]="Generator",b[a]=function(){return this},b.toString=function(){return"[object Generator]"},d.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){while(e.length){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},d.values=N,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(M),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,o){return c.type="throw",c.arg=t,e.next=r,o&&(e.method="next",e.arg=n),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var s=o.call(a,"catchLoc"),u=o.call(a,"finallyLoc");if(s&&u){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,g):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),M(n),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;M(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:N(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=n),g}}}function y(t,e,n,r){var o=e&&e.prototype instanceof L?e:L,i=Object.create(o.prototype),a=new S(r||[]);return i._invoke=O(t,n,a),i}function x(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(r){return{type:"throw",arg:r}}}function L(){}function _(){}function k(){}function E(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function j(t){function e(n,r,i,a){var c=x(t[n],t,r);if("throw"!==c.type){var s=c.arg,u=s.value;return u&&"object"===typeof u&&o.call(u,"__await")?Promise.resolve(u.__await).then((function(t){e("next",t,i,a)}),(function(t){e("throw",t,i,a)})):Promise.resolve(u).then((function(t){s.value=t,i(s)}),(function(t){return e("throw",t,i,a)}))}a(c.arg)}var n;function r(t,r){function o(){return new Promise((function(n,o){e(t,r,n,o)}))}return n=n?n.then(o,o):o()}this._invoke=r}function O(t,e,n){var r=f;return function(o,i){if(r===l)throw new Error("Generator is already running");if(r===p){if("throw"===o)throw i;return G()}n.method=o,n.arg=i;while(1){var a=n.delegate;if(a){var c=P(a,n);if(c){if(c===g)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===f)throw r=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=l;var s=x(t,e,n);if("normal"===s.type){if(r=n.done?p:h,s.arg===g)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r=p,n.method="throw",n.arg=s.arg)}}}function P(t,e){var r=t.iterator[e.method];if(r===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,P(t,e),"throw"===e.method))return g;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return g}var o=x(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,g;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,g):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,g)}function T(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function M(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(T,this),this.reset(!0)}function N(t){if(t){var e=t[a];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var r=-1,i=function e(){while(++r<t.length)if(o.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=n,e.done=!0,e};return i.next=i}}return{next:G}}function G(){return{value:n,done:!0}}}(function(){return this||"object"===typeof self&&self}()||Function("return this")())},"9da8":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.sendForum=e.getIosUrl=void 0;var r=n("7742"),o=function(t){return(0,r.request)({url:"/api/Index/getBanner",method:"get",data:t})};e.getIosUrl=o;var i=function(t){return(0,r.request)({url:"接口地址",method:"post",data:t})};e.sendForum=i},ba7f:function(t,e,n){"use strict";var r=n("8742"),o=n.n(r);o.a},bebb:function(t,e,n){"use strict";n.r(e);var r=n("6469"),o=n.n(r);for(var i in r)"default"!==i&&function(t){n.d(e,t,(function(){return r[t]}))}(i);e["default"]=o.a},c304:function(t,e,n){t.exports=n.p+"static/img/wx.60b47565.png"},e481:function(t,e,n){var r=n("24fb"),o=n("1de5"),i=n("c304");e=r(!1);var a=o(i);e.push([t.i,".version[data-v-1d80c9bd]{opacity:.5;text-align:center;color:#fff}.page[data-v-1d80c9bd]{background-color:#f8f8f8;width:100vw;height:100vh;overflow:hidden;background-image:url(https://img.agrimedia.cn/bmsc/apps/main-bg.png);background-size:100%}.page .header[data-v-1d80c9bd]{width:100vw;height:%?350?%;background-color:#262633;padding-top:%?110?%;display:flex;justify-content:center}.page .header .logo[data-v-1d80c9bd]{border-radius:%?20?%}.page .header uni-image[data-v-1d80c9bd]{width:%?120?%;height:%?120?%;margin-right:%?30?%}.page .header > uni-view[data-v-1d80c9bd]{height:%?120?%;color:#fff;font-weight:700;display:flex;flex-direction:column;justify-content:center}.page .header > uni-view uni-view[data-v-1d80c9bd]:nth-child(1){font-size:%?34?%}.page .header > uni-view uni-view[data-v-1d80c9bd]:nth-child(2){font-size:%?28?%}.page .bg[data-v-1d80c9bd]{width:100vw;height:%?210?%;background-size:100%;background-position:bottom;background-repeat:no-repeat;position:absolute;left:0;top:%?300?%}.page .content[data-v-1d80c9bd]{width:%?750?%;height:%?750?%;position:absolute;top:50%;left:%?0?%;-webkit-transform:translateY(-54%);transform:translateY(-54%);overflow:hidden}.page .content img[data-v-1d80c9bd]{width:%?750?%;height:%?750?%}.page .btn[data-v-1d80c9bd]{height:%?60?%}.page .btns[data-v-1d80c9bd]{width:100vw;position:absolute;bottom:10%;left:0}.page .btns > uni-view[data-v-1d80c9bd]{width:%?600?%;height:%?110?%;background-color:#262633;color:#fff;display:flex;margin:0 auto;margin-bottom:%?40?%;border-radius:%?15?%;box-shadow:0 %?10?% %?24?% %?-10?% #262633}.page .btns > uni-view uni-image[data-v-1d80c9bd]{width:100%;height:auto}.page .btns > uni-view[data-v-1d80c9bd]:nth-child(2){margin-bottom:%?0?%}.page .wx[data-v-1d80c9bd]{position:fixed;left:0;top:0;background-color:rgba(0,0,0,.7);width:100vw;height:100vh;background-image:url("+a+");background-size:100%;background-position:50% %?100?%;background-repeat:no-repeat}",""]),t.exports=e}}]);