(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{"1de5":function(t,e,i){"use strict";t.exports=function(t,e){return e||(e={}),t=t&&t.__esModule?t.default:t,"string"!==typeof t?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},3598:function(t,e,i){"use strict";var a=i("9d2d"),n=i.n(a);n.a},6469:function(t,e,i){"use strict";i("ac1f"),i("466d"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{appLogo:"https://img.agrimedia.cn/bmsc/apps/bm-app-logo.jpeg",appName:"白马星球",appDes:"白马星球下载页",andHref:"https://img.agrimedia.cn/bmsc/apps/bmsc_v1.0.0.apk",weixin:!1,scheme:""}},onLoad:function(){this.setTitle(),this.openApp(),this.deviceType=uni.getSystemInfoSync().platform},mounted:function(){if("android"==uni.getSystemInfoSync().platform){var t=window.navigator.userAgent.toLowerCase();if("micromessenger"==t.match(/MicroMessenger/i))return;window.open(this.andHref)}},methods:{setTitle:function(){uni.setNavigationBarTitle({title:this.appName+"下载"})},isWX:function(){var t=navigator.userAgent.toLowerCase();"micromessenger"==t.match(/MicroMessenger/i)?this.weixin=!0:this.weixin=!1},openApp:function(){this.scheme&&(window.location=this.scheme)},down:function(t){"and"==t?"android"==this.deviceType&&(this.isWX(),this.weixin||window.open(this.andHref)):"ios"==this.deviceType&&(window.location.href="https://game.aiaxig.cc/iosign/softwareDistribute/down/b2ec0e433e2741d1a82f8337077d00f5")}}};e.default=a},7014:function(t,e,i){var a=i("24fb"),n=i("1de5"),o=i("c304");e=a(!1);var s=n(o);e.push([t.i,".page[data-v-c5a92320]{background-color:#f8f8f8;width:100vw;height:100vh;overflow:hidden;background-image:url(https://img.agrimedia.cn/bmsc/apps/main-bg.png);background-size:100%}.page .header[data-v-c5a92320]{width:100vw;height:%?350?%;background-color:#262633;padding-top:%?110?%;display:flex;justify-content:center}.page .header .logo[data-v-c5a92320]{border-radius:%?20?%}.page .header uni-image[data-v-c5a92320]{width:%?120?%;height:%?120?%;margin-right:%?30?%}.page .header > uni-view[data-v-c5a92320]{height:%?120?%;color:#fff;font-weight:700;display:flex;flex-direction:column;justify-content:center}.page .header > uni-view uni-view[data-v-c5a92320]:nth-child(1){font-size:%?34?%}.page .header > uni-view uni-view[data-v-c5a92320]:nth-child(2){font-size:%?28?%}.page .bg[data-v-c5a92320]{width:100vw;height:%?210?%;background-size:100%;background-position:bottom;background-repeat:no-repeat;position:absolute;left:0;top:%?300?%}.page .content[data-v-c5a92320]{width:%?750?%;height:%?750?%;position:absolute;top:50%;left:%?0?%;-webkit-transform:translateY(-54%);transform:translateY(-54%);overflow:hidden}.page .content img[data-v-c5a92320]{width:%?750?%;height:%?750?%}.page .btn[data-v-c5a92320]{height:%?60?%}.page .btns[data-v-c5a92320]{width:100vw;position:absolute;bottom:10%;left:0}.page .btns > uni-view[data-v-c5a92320]{width:%?600?%;height:%?110?%;background-color:#262633;color:#fff;display:flex;margin:0 auto;margin-bottom:%?40?%;border-radius:%?15?%;box-shadow:0 %?10?% %?24?% %?-10?% #262633}.page .btns > uni-view uni-image[data-v-c5a92320]{width:100%;height:auto}.page .btns > uni-view[data-v-c5a92320]:nth-child(2){margin-bottom:%?0?%}.page .wx[data-v-c5a92320]{position:fixed;left:0;top:0;background-color:rgba(0,0,0,.7);width:100vw;height:100vh;background-image:url("+s+");background-size:100%;background-position:50% %?100?%;background-repeat:no-repeat}",""]),t.exports=e},8865:function(t,e,i){"use strict";i.r(e);var a=i("d853"),n=i("bebb");for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("3598");var s,r=i("f0c5"),c=Object(r["a"])(n["default"],a["b"],a["c"],!1,null,"c5a92320",null,!1,a["a"],s);e["default"]=c.exports},"9d2d":function(t,e,i){var a=i("7014");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("2f287cde",a,!0,{sourceMap:!1,shadowMode:!1})},bebb:function(t,e,i){"use strict";i.r(e);var a=i("6469"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},c304:function(t,e,i){t.exports=i.p+"static/img/wx.60b47565.png"},d853:function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"page"},[i("v-uni-view",{staticClass:"btns"},[i("v-uni-view",{staticClass:"btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.down("and")}}},[i("v-uni-image",{attrs:{src:"https://img.agrimedia.cn/bmsc/apps/andriod.png",mode:""}})],1),i("v-uni-view",{staticClass:"btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.down("ios")}}},[i("v-uni-image",{attrs:{src:"https://img.agrimedia.cn/bmsc/apps/ios.png",mode:""}})],1)],1),t.weixin?i("v-uni-view",{staticClass:"wx"}):t._e()],1)},o=[]}}]);