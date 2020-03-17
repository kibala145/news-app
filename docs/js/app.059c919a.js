(function(e){function t(t){for(var a,i,c=t[0],u=t[1],s=t[2],l=0,p=[];l<c.length;l++)i=c[l],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&p.push(n[i][0]),n[i]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);d&&d(t);while(p.length)p.shift()();return o.push.apply(o,s||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],a=!0,i=1;i<r.length;i++){var u=r[i];0!==n[u]&&(a=!1)}a&&(o.splice(t--,1),e=c(c.s=r[0]))}return e}var a={},n={app:0},o=[];function i(e){return c.p+"js/"+({about:"about"}[e]||e)+"."+{about:"cc6313ba"}[e]+".js"}function c(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.e=function(e){var t=[],r=n[e];if(0!==r)if(r)t.push(r[2]);else{var a=new Promise((function(t,a){r=n[e]=[t,a]}));t.push(r[2]=a);var o,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=i(e);var s=new Error;o=function(t){u.onerror=u.onload=null,clearTimeout(l);var r=n[e];if(0!==r){if(r){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+a+": "+o+")",s.name="ChunkLoadError",s.type=a,s.request=o,r[1](s)}n[e]=void 0}};var l=setTimeout((function(){o({type:"timeout",target:u})}),12e4);u.onerror=u.onload=o,document.head.appendChild(u)}return Promise.all(t)},c.m=e,c.c=a,c.d=function(e,t,r){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(r,a,function(t){return e[t]}.bind(null,a));return r},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/my-project/",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var d=s;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("cd49")},cd49:function(e,t,r){"use strict";r.r(t);r("9cac"),r("10d9"),r("a107"),r("925a");var a=r("ed16"),n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",{attrs:{dark:e.dark}},[r("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[r("v-spacer"),r("v-switch",{attrs:{color:"grey","hide-details":"",light:"",flat:"",inset:"",ripple:!1},on:{change:e.toggleTheme},scopedSlots:e._u([{key:"label",fn:function(){},proxy:!0}]),model:{value:e.dark,callback:function(t){e.dark=t},expression:"dark"}})],1),r("v-content",[r("router-view")],1)],1)},o=[],i=r("2e3d"),c=Object(i["b"])({name:"App",setup:function(e,t){var r=t.root,a=Object(i["d"])(r.$vuetify.theme.dark);function n(){r.$vuetify.theme.dark=!r.$vuetify.theme.dark}return{dark:a,toggleTheme:n}}}),u=c,s=r("9d3f"),l=r("7137"),d=r.n(l),p=r("87d2"),f=r("5500"),v=r("ae60"),b=r("e62f"),h=r("8a0a"),m=Object(s["a"])(u,n,o,!1,null,null,null),g=m.exports;d()(m,{VApp:p["a"],VAppBar:f["a"],VContent:v["a"],VSpacer:b["a"],VSwitch:h["a"]});r("4195");var y=r("b1b9"),k=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",[r("v-row",{attrs:{justify:"center"}},[r("v-col",{attrs:{cols:"8"}},[r("v-text-field",{staticClass:"mb-4",attrs:{"prepend-inner-icon":"mdi-magnify",autofocus:"",color:e.dark?"grey lighten-4":"grey darken-3",clearable:"",placeholder:"Поиск...","hide-details":"",filled:"",flat:"",loading:e.loading},on:{"click:clear":function(t){e.q=""},input:function(t){return e.getArticles({q:e.q})}},model:{value:e.q,callback:function(t){e.q=t},expression:"q"}}),e.loading?r("div",{staticClass:"d-flex justify-center"},[r("v-progress-circular",{attrs:{indeterminate:""}})],1):e._l(e.articles,(function(t,a){return r("div",{key:a,staticClass:"d-flex flex-column justify-center elevation-5 pa-3 mb-9",class:e.dark?"grey darken-4":"white"},[r("div",{staticClass:"pa-6"},[r("a",{staticClass:"display-1\tfont-weight-bold",class:e.dark?"grey--text text--lighten-4":"grey--text text--darken-4",attrs:{href:t.url,target:"_blank"}},[e._v(" "+e._s(t.title)+" ")]),r("div",{staticClass:"pt-1 caption"},[e._v(" "+e._s(t.publishedAt)+" ")]),r("v-img",{staticClass:"mt-2",attrs:{src:t.urlToImage}})],1),r("p",{staticClass:"px-6"},[e._v(" "+e._s(t.description)+" ")])])}))],2)],1)],1)},j=[],w=(r("f3e0"),r("d786"),r("eead"),r("ad21"),r("25dc"),r("4608"),r("74da"),r("8767")),O=(r("daeb"),r("a01b")),x=Object(i["b"])({setup:function(e,t){var r=t.root,a=Object(i["d"])([]),n=Object(i["d"])(!1),o=Object(i["d"])(""),c=Object(i["d"])(!1),u=Object(i["d"])(0);function s(e){return l.apply(this,arguments)}function l(){return l=Object(O["a"])(regeneratorRuntime.mark((function e(t){var r,n,o,i,s,l,d,p,f,v,b,h;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.q,n=void 0===r?"":r,o=t.country,i=void 0===o?"us":o,s=t.pageSize,l=void 0===s?"5":s,d=t.apiKey,p=void 0===d?"fda8939a86a3462ea943a82e28b91f18":d,c.value=!0,f={q:n,country:i,pageSize:l,apiKey:p},v=new URL("http://newsapi.org/v2/top-headlines"),Object.keys(f).forEach((function(e){f[e]&&v.searchParams.append(e,f[e])})),e.next=6,fetch(v.href);case 6:return b=e.sent,e.next=9,b.json();case 9:h=e.sent,a.value=h.articles.map((function(e){var t=Object(w["a"])({},e);return t.publishedAt=new Date(t.publishedAt).toLocaleString(),t})),u.value=h.totalResults,c.value=!1;case 13:case"end":return e.stop()}}),e)}))),l.apply(this,arguments)}return Object(i["c"])((function(){return s({})})),Object(i["e"])((function(){n.value=r.$vuetify.theme.dark})),{articles:a,dark:n,q:o,loading:c,getArticles:s,totalResults:u}}}),_=x,C=r("73ca"),S=r("ff1d"),P=r("b1fb"),V=r("e80d"),q=r("63ef"),A=r("22f9"),T=Object(s["a"])(_,k,j,!1,null,null,null),$=T.exports;d()(T,{VCol:C["a"],VContainer:S["a"],VImg:P["a"],VProgressCircular:V["a"],VRow:q["a"],VTextField:A["a"]}),a["a"].use(y["a"]);var E=[{path:"/",name:"Home",component:$},{path:"/about",name:"About",component:function(){return r.e("about").then(r.bind(null,"f820"))}}],R=new y["a"]({mode:"history",base:"/my-project/",routes:E}),L=R,M=r("f8e7");a["a"].use(M["a"]);var z=new M["a"].Store({state:{},mutations:{},actions:{},modules:{}}),D=(r("270b"),r("6c00")),H=r("520b");a["a"].use(D["a"]);var I=(new Date).getHours(),J=new D["a"]({theme:{themes:{light:{primary:H["a"].grey.lighten4,secondary:H["a"].grey.darken1,accent:H["a"].shades.black,error:H["a"].red.accent3,anchor:H["a"].grey.darken1},dark:{primary:H["a"].grey.darken4}},dark:I>18||I<9},icons:{iconfont:"mdi"}});a["a"].use(i["a"]),a["a"].config.productionTip=!1,new a["a"]({router:L,store:z,vuetify:J,render:function(e){return e(g)}}).$mount("#app")}});
//# sourceMappingURL=app.059c919a.js.map