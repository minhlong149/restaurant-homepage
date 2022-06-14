(()=>{"use strict";var e={807:(e,n,t)=>{t.d(n,{Z:()=>o});var a=t(81),s=t.n(a),i=t(645),r=t.n(i)()(s());r.push([e.id,"@import url(https://fonts.googleapis.com/css?family=Crimson+Text|Unica+One);"]),r.push([e.id,'html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:before,blockquote:after,q:before,q:after{content:"";content:none}table{border-collapse:collapse;border-spacing:0}*{font-family:"Crimson Text",Serif;font-size:19px}h1,h2,h3{font-family:"Unica One",Cursive}h1{font-size:52px}h2{font-size:39px}h3{font-size:26px}:root{background-color:#fcf8e8;color:#3d5a47}button{color:#fcf8e8;background:#3d5a47}button:hover{background:#577862}button{border:none;padding:1em 3em;border-radius:50% 20%/10% 40%}button:hover{cursor:pointer}img{max-width:100%;max-height:100%}#content{display:flex;flex-direction:column;height:100vh}.nav{display:flex;justify-content:center}.nav__tab{margin:2em;display:inline-block;padding-bottom:.25rem;position:relative}.nav__tab::before{content:"";position:absolute;right:0;bottom:0;width:0;height:2px;background-color:#3d5a47;transition:width .25s ease-out}.nav__tab:hover::before{width:100%;left:0;right:auto}.nav__tab:hover{cursor:pointer}.home{flex-grow:1;display:flex;flex-direction:column;align-items:center;gap:1em;margin:1em}.menu{display:flex;flex-direction:column;align-items:center;color:#fcf8e8;background-color:#3d5a47;padding:2em 0}.menu__title{margin:.5em 0}.menu__dishes{display:flex;flex-direction:column;align-items:center;margin:2em;gap:1em}.dishes__img{border-radius:50% 20%/10% 40%}.dishes__price{font-size:1.1em}.dishes__price::before{content:"$"}',""]);const o=r},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",a=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),a&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),a&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,a,s,i){"string"==typeof e&&(e=[[null,e,void 0]]);var r={};if(a)for(var o=0;o<this.length;o++){var c=this[o][0];null!=c&&(r[c]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);a&&r[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),s&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=s):d[4]="".concat(s)),n.push(d))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,a=0;a<n.length;a++)if(n[a].identifier===e){t=a;break}return t}function a(e,a){for(var i={},r=[],o=0;o<e.length;o++){var c=e[o],l=a.base?c[0]+a.base:c[0],d=i[l]||0,u="".concat(l," ").concat(d);i[l]=d+1;var p=t(u),h={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)n[p].references++,n[p].updater(h);else{var m=s(h,a);a.byIndex=o,n.splice(o,0,{identifier:u,updater:m,references:1})}r.push(u)}return r}function s(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,s){var i=a(e=e||[],s=s||{});return function(e){e=e||[];for(var r=0;r<i.length;r++){var o=t(i[r]);n[o].references--}for(var c=a(e,s),l=0;l<i.length;l++){var d=t(i[l]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}i=c}}},569:e=>{var n={};e.exports=function(e,t){var a=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var a="";t.supports&&(a+="@supports (".concat(t.supports,") {")),t.media&&(a+="@media ".concat(t.media," {"));var s=void 0!==t.layer;s&&(a+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),a+=t.css,s&&(a+="}"),t.media&&(a+="}"),t.supports&&(a+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(a,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(a){var s=n[a];if(void 0!==s)return s.exports;var i=n[a]={id:a,exports:{}};return e[a](i,i.exports,t),i.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var a in n)t.o(n,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:n[a]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e=t(379),n=t.n(e),a=t(795),s=t.n(a),i=t(569),r=t.n(i),o=t(565),c=t.n(o),l=t(216),d=t.n(l),u=t(589),p=t.n(u),h=t(807),m={};m.styleTagTransform=p(),m.setAttributes=c(),m.insert=r().bind(null,"head"),m.domAPI=s(),m.insertStyleElement=d(),n()(h.Z,m),h.Z&&h.Z.locals&&h.Z.locals;var f='\n    <ul class="nav">\n      <li class="nav__tab">Home</li>\n      <li class="nav__tab">Menu</li>\n      <li class="nav__tab">Contact</li>\n    </ul>\n    <div class="home">\n      <h1 class="home__title">Phút Diner</h1>\n      <img class="home__hero"src="../src/asset/danis-lou-small.jpg"  alt="restaurant with people dining in photo">\n      <button class="home__btn">Order now</button>\n    </div>\n',v=document.createElement("div");v.setAttribute("id","content"),v.innerHTML=f,document.body.appendChild(v),function e(){document.querySelectorAll(".nav__tab").forEach((function(n){n.addEventListener("click",(function(){switch(n.innerHTML){case"Home":v.innerHTML=f,e();break;case"Menu":v.innerHTML='\n    <ul class="nav">\n      <li class="nav__tab">Home</li>\n      <li class="nav__tab">Menu</li>\n      <li class="nav__tab">Contact</li>\n    </ul>\n    <div class="home">\n      <h1 class="home__title">Phút Diner</h1>\n    </div>\n    <div class="menu">\n      <h2 class="menu__title">The Menu</h2>\n      <div class="menu__dishes">\n        <h3 class="dishes__heading">Boiled Shrimp</h3>\n        <img src="../src/asset/boiled-shrimp.jpg" alt="boiled shrimp" class="dishes__img">\n        <p class="dishes__price">6.81</p>\n      </div>\n      <div class="menu__dishes dishes">\n        <h3 class="dishes__heading">Fatty tuna & Red meat tuna</h3>\n        <img src="../src/asset/fatty-tuna-and-red-meat-tuna.jpg" alt="Fatty tuna and red meat tuna" class="dishes__img">\n        <p class="dishes__price">6.84</p>\n      </div>\n      <div class="menu__dishes">\n        <h3 class="dishes__heading">Salmon & Crab</h3>\n        <img src="../src/asset/salmon-and-crab.jpg" alt="salmon and crab" class="dishes__img">\n        <p class="dishes__price">7.35</p>\n      </div>\n      <div class="menu__dishes">\n        <h3 class="dishes__heading">Salmon egg & Conger eel</h3>\n        <img src="../src/asset/salmon-egg-and-conger-eel.jpg" alt="Salmon egg and conger eel" class="dishes__img">\n        <p class="dishes__price">7.60</p>\n      </div>\n      <div class="menu__dishes">\n        <h3 class="dishes__heading">Scallops & Squid</h3>\n        <img src="../src/asset/scallops-and-squid.jpg" alt="Scallops and squid" class="dishes__img">\n        <p class="dishes__price">3.50</p>\n      </div>\n    </div>\n',e()}}))}))}()})()})();