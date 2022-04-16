(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(81),o=n.n(r),a=n(645),i=n.n(a)()(o());i.push([e.id,"* {\n  padding: 0%;\n  margin: 0%;\n  font-size: 16px;\n}\n\n#content {\n  display: grid;\n  grid-template-rows: 50px minmax(300px, 100vh) 50px;\n  width: 100%;\n}\n\n#header,\n#footer {\n  width: 100%;\n  display: flex;\n  align-items: center;\n}\n\n#header {\n  justify-content: space-between;\n}\n\n#footer {\n  justify-content: center;\n  font-size: 0.5rem;\n}\n\n#myForm :first-child,\n#myForm {\n  display: flex;\n  flex-direction: row;\n}\n\n/*info styling*/\n#container {\n  display: grid;\n  grid-template-columns: 40% 60%;\n}\n\n#weatherInfoContainer {\n  display: grid;\n  grid-template-rows: 3fr 1fr;\n  gap: 4px;\n}\n\n#upper {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n#unitInforContainer {\n  display: flex;\n  flex-direction: row;\n  gap: 4px;\n}\n",""]);const c=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var u=0;u<e.length;u++){var d=[].concat(e[u]);r&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),t.push(d))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],u=r.base?s[0]+r.base:s[0],d=a[u]||0,l="".concat(u," ").concat(d);a[u]=d+1;var p=n(l),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)t[p].references++,t[p].updater(f);else{var m=o(f,r);r.byIndex=c,t.splice(c,0,{identifier:l,updater:m,references:1})}i.push(l)}return i}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=n(a[i]);t[c].references--}for(var s=r(e,o),u=0;u<a.length;u++){var d=n(a[u]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}a=s}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e=document.querySelector("#city");function t(){e.validity.valid?e.checkValidity():e.setCustomValidity("Enter city or town name")}e.addEventListener("input",(function(){e.validity.valid?(e.setCustomValidity(""),e.checkValidity()):t()})),document.querySelector("form").addEventListener("submit",(function(e){e.preventDefault()}));const r=t;var o=n(379),a=n.n(o),i=n(795),c=n.n(i),s=n(569),u=n.n(s),d=n(565),l=n.n(d),p=n(216),f=n.n(p),m=n(589),v=n.n(m),y=n(426),h={};h.styleTagTransform=v(),h.setAttributes=l(),h.insert=u().bind(null,"head"),h.domAPI=c(),h.insertStyleElement=f(),a()(y.Z,h),y.Z&&y.Z.locals&&y.Z.locals;var x,g,b,w,C,S,q,T=(x=document.querySelector("#location"),g=document.querySelector("#temp"),b=document.querySelector("#briefDescription"),w=document.querySelector("#humidity"),C=document.querySelector("#pressure"),S=document.querySelector("#wind"),q=document.querySelector("#date"),{getTemp:function(e){fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(e,"&APPID=4eaaa26ad9ee84323de7fe5e30bc033a"),{mode:"cors"}).then((function(e){return e.json()})).then((function(t){console.log(t),x.textContent=e,g.textContent=t.main.temp,b.textContent=t.weather[0].description,w.textContent=t.main.humidity,C.textContent=t.main.pressure,S.textContent=t.wind.speed,q.textContent=new Date})).catch((function(t){t!==Object&&console.log("".concat(e," not found"))}))}}),E=document.querySelector("#city");document.querySelector("#submitBtn").addEventListener("click",(function(){""!==E.value?(T.getTemp(E.value),E.value=""):r()}))})()})();