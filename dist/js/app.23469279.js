(function(e){function t(t){for(var r,a,i=t[0],s=t[1],u=t[2],l=0,d=[];l<i.length;l++)a=i[l],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&d.push(c[a][0]),c[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);p&&p(t);while(d.length)d.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,a=1;a<n.length;a++){var i=n[a];0!==c[i]&&(r=!1)}r&&(o.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},a={app:0},c={app:0},o=[];function i(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-5e42d909":"56b2c739","chunk-7fc88754":"d2cc09b6","chunk-18c16106":"c28bd900","chunk-73d1d86c":"95c4e373","chunk-9974a960":"e1cd2a88","chunk-2d0d8052":"0dae1be0","chunk-2d225f64":"81eb03e3","chunk-6899d5d1":"4eeb7f2b","chunk-f37b0f58":"991b3ac0","chunk-56ff256b":"141035ec","chunk-4db41429":"3dcd89c9"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={"chunk-7fc88754":1,"chunk-18c16106":1,"chunk-73d1d86c":1,"chunk-9974a960":1,"chunk-6899d5d1":1,"chunk-f37b0f58":1,"chunk-56ff256b":1,"chunk-4db41429":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-5e42d909":"31d6cfe0","chunk-7fc88754":"31dbd923","chunk-18c16106":"eaa8ef3f","chunk-73d1d86c":"8a4ae755","chunk-9974a960":"d085486f","chunk-2d0d8052":"31d6cfe0","chunk-2d225f64":"31d6cfe0","chunk-6899d5d1":"2689a797","chunk-f37b0f58":"c7ffa2fd","chunk-56ff256b":"e00f0632","chunk-4db41429":"45f30f3b"}[e]+".css",c=s.p+r,o=document.getElementsByTagName("link"),i=0;i<o.length;i++){var u=o[i],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===c))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){u=d[i],l=u.getAttribute("data-href");if(l===r||l===c)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||c,o=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete a[e],p.parentNode.removeChild(p),n(o)},p.href=c;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){a[e]=0})));var r=c[e];if(0!==r)if(r)t.push(r[2]);else{var o=new Promise((function(t,n){r=c[e]=[t,n]}));t.push(r[2]=o);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=i(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(p);var n=c[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}c[e]=void 0}};var p=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var p=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"2d73":function(e,t){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-app-bar",{staticClass:"pt-0 px-16 app-bar",attrs:{app:"",dark:"","elevate-on-scroll":"",height:"90px"}},[n("div",{staticClass:"d-flex align-center"},[n("router-link",{attrs:{to:"/"}},[n("v-img",{staticClass:"mt-1 hidden-sm-and-down",attrs:{contain:"","min-width":"90",src:"https://flipdish.imgix.net/iTq1umXwFBF4xWqQKSTsLD56rpo.png?h=150&fm=png32",width:"90"}})],1)],1),n("v-spacer"),n("v-btn",{staticClass:"appbarButton",staticStyle:{"font-weight":"400"},attrs:{to:"/",ripple:!1,text:"","x-large":""}},[n("span",[e._v("home")])]),n("v-btn",{staticClass:"appbarButton",staticStyle:{"font-weight":"400"},attrs:{to:"/order",ripple:!1,text:"","x-large":""}},[n("span",[e._v("Menu")])]),n("v-btn",{staticClass:"appbarButton",staticStyle:{"font-weight":"400"},attrs:{ripple:!1,text:"","x-large":""}},[n("span",[e._v("about")])]),n("v-btn",{staticClass:"appbarButton",staticStyle:{"font-weight":"400"},attrs:{ripple:!1,text:"","x-large":""}},[n("span",[e._v("gallery")])]),n("v-btn",{staticClass:"appbarButton",staticStyle:{"font-weight":"400"},attrs:{ripple:!1,text:"","x-large":""}},[n("span",[e._v("contact")])]),n("v-btn",{staticClass:"appbarButton yellow--text",staticStyle:{"font-weight":"400"},attrs:{ripple:!1,text:"","x-large":""}},[n("span",[e._v("Order Online")])])],1),n("v-main",[n("v-snackbar",{attrs:{color:e.$store.getters.getSnack.color,top:"",timeout:4500,elevation:"24"},scopedSlots:e._u([{key:"action",fn:function(t){var r=t.attrs;return[n("v-btn",e._b({attrs:{color:"pink"},on:{click:function(t){return e.$store.commit("closeSnackbar")}}},"v-btn",r,!1),[e._v(" Close ")])]}}]),model:{value:e.$store.getters.getSnack.state,callback:function(t){e.$set(e.$store.getters.getSnack,"state",t)},expression:"$store.getters.getSnack.state"}},[e._v(" "+e._s(e.$store.getters.getSnack.content)+" ")]),n("router-view")],1)],1)},c=[],o={name:"App",components:{},data:function(){return{}},created:function(){var e=window.location.host;"localhost"!==e.substring(0,9)?this.$store.commit("setBaseUrl","https://"+e):this.$store.commit("setBaseUrl","http://localhost:3000")}},i=o,s=(n("5b72"),n("2877")),u=n("6544"),l=n.n(u),d=n("7496"),p=n("40dc"),f=n("8336"),h=n("adda"),m=n("f6c4"),b=n("2db4"),g=n("2fa4"),k=Object(s["a"])(i,a,c,!1,null,"fec000e0",null),v=k.exports;l()(k,{VApp:d["a"],VAppBar:p["a"],VBtn:f["a"],VImg:h["a"],VMain:m["a"],VSnackbar:b["a"],VSpacer:g["a"]});var y=n("f309");r["a"].use(y["a"]);var w=new y["a"]({theme:{themes:{light:{primary:"#E0CF5E",third:"#F7F7F7",forth:"#80550B"}}}}),S=n("2909"),_=n("8c4f"),x=(n("d3b7"),n("3ca3"),n("ddb0"),function(){return Promise.all([n.e("chunk-7fc88754"),n.e("chunk-18c16106")]).then(n.bind(null,"9f9a"))}),I=function(){return Promise.all([n.e("chunk-7fc88754"),n.e("chunk-f37b0f58"),n.e("chunk-4db41429")]).then(n.bind(null,"ee2f"))},P=function(){return Promise.all([n.e("chunk-7fc88754"),n.e("chunk-9974a960"),n.e("chunk-6899d5d1")]).then(n.bind(null,"f0bc"))},O=function(){return Promise.all([n.e("chunk-7fc88754"),n.e("chunk-9974a960"),n.e("chunk-f37b0f58"),n.e("chunk-56ff256b")]).then(n.bind(null,"67d5"))},A=[{path:"",component:x},{path:"delivery",component:I,children:[{path:"new",component:P}]},{path:"cart",component:O}],E=function(){return n.e("chunk-5e42d909").then(n.bind(null,"ea65"))},T=function(){return Promise.all([n.e("chunk-7fc88754"),n.e("chunk-73d1d86c")]).then(n.bind(null,"0124"))},C=[{path:"",component:T},{path:"order",component:E,children:Object(S["a"])(A)}],U=function(){return Promise.all([n.e("chunk-7fc88754"),n.e("chunk-9974a960"),n.e("chunk-2d225f64")]).then(n.bind(null,"e740"))},j=function(){return Promise.all([n.e("chunk-7fc88754"),n.e("chunk-9974a960"),n.e("chunk-2d0d8052")]).then(n.bind(null,"78fa"))},B=[{path:"/login",name:"login",component:U},{path:"/register",name:"register",component:j}],N=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("router-view")},$=[],F={},L=F,D=Object(s["a"])(L,N,$,!1,null,null,null),R=D.exports,V=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("router-view")],1)},H=[],M={name:"outer"},q=M,J=n("2d73"),K=n.n(J),Z=Object(s["a"])(q,V,H,!1,null,null,null);"function"===typeof K.a&&K()(Z);var Q=Z.exports;l()(Z,{VApp:d["a"]}),r["a"].use(_["a"]);var W=new _["a"]({mode:"hash",routes:[{path:"/login",component:Q,children:Object(S["a"])(B)},{path:"/",component:R,children:Object(S["a"])(C)}]}),X=n("1da1"),z=(n("96cf"),n("b0c0"),n("2f62"));r["a"].use(z["a"]);var G=new z["a"].Store({state:{baseUrl:"",token:localStorage.getItem("authtoken")||"",dialog2:!1,snackbar:{state:!1,color:"",content:""},address:{type:"",house:"",street:"",city:"",state:"",pincode:""},user:{name:"",mobile:"",email:"",cardpay:"credit/debit card",promotionreceive:!1},loggedIn:!1,cart:[],group_by_category:"",menu:[{_id:"1",category:"SOUTH INDIAN SPECIAL",item:"Plain Idly 1",description:"steamed rice and lentil patties",price:8.99,total_price:0,count:0},{_id:"2",category:"SOUTH INDIAN SPECIAL",item:"Plain Idly 2",description:"steamed rice and lentil patties",price:9.99,total_price:0,count:0,configure:{sides:[{name:"sambhar",price:"0.99",count:0}]}},{_id:"3",category:"SOUTH INDIAN SPECIAL",item:"Plain Idly 3",description:"steamed rice and lentil patties",price:11.99,total_price:0,count:0,configure:{sides:[{name:"chutney",price:"0.99",count:0},{name:"sambhar",price:"0.99",count:0}]}},{_id:"4",category:"APPETIZERS",item:"Plain Idly 4",description:"steamed rice and lentil patties",price:9.49,total_price:0,count:0,configure:{sides:[{name:"chutney",price:"0.99",count:0},{name:"sambhar",price:"0.99",count:0}]}},{_id:"5",category:"SOUTH INDIAN SPECIAL",item:"Plain Idly 12",description:"steamed rice and lentil patties",price:12.99,total_price:0,count:0},{_id:"6",category:"SOUTH INDIAN SPECIAL",item:"Plain Idly 3",description:"steamed rice and lentil patties",price:10.49,total_price:0,count:0,configure:{sides:[{name:"sambhar",price:"0.99",count:0}]}},{_id:"7",category:"SOUTH INDIAN SPECIAL",item:"Plain Idly 2",description:"steamed rice and lentil patties",price:5.99,total_price:0,count:0,configure:{sides:[{name:"chutney",price:"0.99",count:0},{name:"sambhar",price:"0.99",count:0}]}},{_id:"8",category:"APPETIZERS",item:"Plain Idly 3",description:"steamed rice and lentil patties",price:7.49,total_price:0,count:0,configure:{sides:[{name:"chutney",price:"0.99",count:0},{name:"sambhar",price:"0.99",count:0}]}}]},getters:{getSnack:function(e){return e.snackbar},getBaseUrl:function(e){return e.baseUrl},getToken:function(e){return e.token}},mutations:{updateUsername:function(e,t){e.user.name=t},setBaseUrl:function(e,t){e.baseUrl=t},setTokenForUser:function(e,t){return Object(X["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.token=t.token,n.next=3,window.localStorage.setItem("authtoken",t.token);case 3:case"end":return n.stop()}}),n)})))()},removeTokenForUser:function(e){e.token="",window.localStorage.removeItem("authtoken")},createSnackbar:function(e,t){e.snackbar.state=!0,e.snackbar.color=t.color,e.snackbar.content=t.content},closeSnackbar:function(e){e.snackbar.state=!1,e.snackbar.color="",e.snackbar.content=""},set_address:function(e,t){e.address=t},pickup_address:function(e,t){e.address=t}},actions:{setTokenForUser:function(e,t){return Object(X["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,e.commit("setTokenForUser",t);case 2:case"end":return n.stop()}}),n)})))()},removeTokenForUser:function(e){return Object(X["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.commit("removeTokenForUser");case 2:case"end":return t.stop()}}),t)})))()}}}),Y=n("bc3a"),ee=n.n(Y);r["a"].prototype.$axios=ee.a,r["a"].config.productionTip=!1,ee.a.defaults.headers.common["authtoken"]=localStorage.getItem("authtoken"),W.beforeEach((function(e,t,n){e.matched.some((function(e){return e.meta.requiresAuth}))?window.localStorage.getItem("authtoken")?(console.log("global ckecker pass"),n()):(console.log("global ckecker failed"),n({path:"/login"})):n()})),new r["a"]({vuetify:w,router:W,store:G,render:function(e){return e(v)}}).$mount("#app")},"5b72":function(e,t,n){"use strict";n("ea07")},ea07:function(e,t,n){}});
//# sourceMappingURL=app.23469279.js.map