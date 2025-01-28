"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[64],{9967:(e,t,n)=>{n.d(t,{A:()=>u});var r=n(107);let o=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),a=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((e,t,n)=>!!e&&""!==e.trim()&&n.indexOf(e)===t).join(" ").trim()};var c={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let i=(0,r.forwardRef)((e,t)=>{let{color:n="currentColor",size:o=24,strokeWidth:i=2,absoluteStrokeWidth:u,className:l="",children:s,iconNode:d,...f}=e;return(0,r.createElement)("svg",{ref:t,...c,width:o,height:o,stroke:n,strokeWidth:u?24*Number(i)/Number(o):i,className:a("lucide",l),...f},[...d.map(e=>{let[t,n]=e;return(0,r.createElement)(t,n)}),...Array.isArray(s)?s:[s]])}),u=(e,t)=>{let n=(0,r.forwardRef)((n,c)=>{let{className:u,...l}=n;return(0,r.createElement)(i,{ref:c,iconNode:t,className:a("lucide-".concat(o(e)),u),...l})});return n.displayName="".concat(e),n}},6118:(e,t,n)=>{var r=n(5834);n.o(r,"usePathname")&&n.d(t,{usePathname:function(){return r.usePathname}}),n.o(r,"useRouter")&&n.d(t,{useRouter:function(){return r.useRouter}})},7939:(e,t,n)=>{n.d(t,{A:()=>G});var r,o,a=function(){return(a=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function c(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)0>t.indexOf(r[o])&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n}Object.create,Object.create;var i=("function"==typeof SuppressedError&&SuppressedError,n(107)),u="right-scroll-bar-position",l="width-before-scroll-bar";function s(e,t){return"function"==typeof e?e(t):e&&(e.current=t),e}var d="undefined"!=typeof window?i.useLayoutEffect:i.useEffect,f=new WeakMap;function h(e){return e}var v=function(e){void 0===e&&(e={});var t,n,r,o=(void 0===t&&(t=h),n=[],r=!1,{read:function(){if(r)throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return n.length?n[n.length-1]:null},useMedium:function(e){var o=t(e,r);return n.push(o),function(){n=n.filter(function(e){return e!==o})}},assignSyncMedium:function(e){for(r=!0;n.length;){var t=n;n=[],t.forEach(e)}n={push:function(t){return e(t)},filter:function(){return n}}},assignMedium:function(e){r=!0;var t=[];if(n.length){var o=n;n=[],o.forEach(e),t=n}var a=function(){var n=t;t=[],n.forEach(e)},c=function(){return Promise.resolve().then(a)};c(),n={push:function(e){t.push(e),c()},filter:function(e){return t=t.filter(e),n}}}});return o.options=a({async:!0,ssr:!1},e),o}(),p=function(){},m=i.forwardRef(function(e,t){var n,r,o,u,l=i.useRef(null),h=i.useState({onScrollCapture:p,onWheelCapture:p,onTouchMoveCapture:p}),m=h[0],g=h[1],w=e.forwardProps,y=e.children,b=e.className,E=e.removeScrollBar,C=e.enabled,S=e.shards,k=e.sideCar,x=e.noIsolation,R=e.inert,N=e.allowPinchZoom,L=e.as,P=e.gapMode,M=c(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as","gapMode"]),O=(n=[l,t],r=function(e){return n.forEach(function(t){return s(t,e)})},(o=(0,i.useState)(function(){return{value:null,callback:r,facade:{get current(){return o.value},set current(value){var e=o.value;e!==value&&(o.value=value,o.callback(value,e))}}}})[0]).callback=r,u=o.facade,d(function(){var e=f.get(u);if(e){var t=new Set(e),r=new Set(n),o=u.current;t.forEach(function(e){r.has(e)||s(e,null)}),r.forEach(function(e){t.has(e)||s(e,o)})}f.set(u,n)},[n]),u),T=a(a({},M),m);return i.createElement(i.Fragment,null,C&&i.createElement(k,{sideCar:v,removeScrollBar:E,shards:S,noIsolation:x,inert:R,setCallbacks:g,allowPinchZoom:!!N,lockRef:l,gapMode:P}),w?i.cloneElement(i.Children.only(y),a(a({},T),{ref:O})):i.createElement(void 0===L?"div":L,a({},T,{className:b,ref:O}),y))});m.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1},m.classNames={fullWidth:l,zeroRight:u};var g=function(e){var t=e.sideCar,n=c(e,["sideCar"]);if(!t)throw Error("Sidecar: please provide `sideCar` property to import the right car");var r=t.read();if(!r)throw Error("Sidecar medium not found");return i.createElement(r,a({},n))};g.isSideCarExport=!0;var w=function(){var e=0,t=null;return{add:function(r){if(0==e&&(t=function(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=o||n.nc;return t&&e.setAttribute("nonce",t),e}())){var a,c;(a=t).styleSheet?a.styleSheet.cssText=r:a.appendChild(document.createTextNode(r)),c=t,(document.head||document.getElementsByTagName("head")[0]).appendChild(c)}e++},remove:function(){--e||!t||(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},y=function(){var e=w();return function(t,n){i.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&n])}},b=function(){var e=y();return function(t){return e(t.styles,t.dynamic),null}},E={left:0,top:0,right:0,gap:0},C=function(e){return parseInt(e||"",10)||0},S=function(e){var t=window.getComputedStyle(document.body),n=t["padding"===e?"paddingLeft":"marginLeft"],r=t["padding"===e?"paddingTop":"marginTop"],o=t["padding"===e?"paddingRight":"marginRight"];return[C(n),C(r),C(o)]},k=function(e){if(void 0===e&&(e="margin"),"undefined"==typeof window)return E;var t=S(e),n=document.documentElement.clientWidth,r=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,r-n+t[2]-t[0])}},x=b(),R="data-scroll-locked",N=function(e,t,n,r){var o=e.left,a=e.top,c=e.right,i=e.gap;return void 0===n&&(n="margin"),"\n  .".concat("with-scroll-bars-hidden"," {\n   overflow: hidden ").concat(r,";\n   padding-right: ").concat(i,"px ").concat(r,";\n  }\n  body[").concat(R,"] {\n    overflow: hidden ").concat(r,";\n    overscroll-behavior: contain;\n    ").concat([t&&"position: relative ".concat(r,";"),"margin"===n&&"\n    padding-left: ".concat(o,"px;\n    padding-top: ").concat(a,"px;\n    padding-right: ").concat(c,"px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(i,"px ").concat(r,";\n    "),"padding"===n&&"padding-right: ".concat(i,"px ").concat(r,";")].filter(Boolean).join(""),"\n  }\n  \n  .").concat(u," {\n    right: ").concat(i,"px ").concat(r,";\n  }\n  \n  .").concat(l," {\n    margin-right: ").concat(i,"px ").concat(r,";\n  }\n  \n  .").concat(u," .").concat(u," {\n    right: 0 ").concat(r,";\n  }\n  \n  .").concat(l," .").concat(l," {\n    margin-right: 0 ").concat(r,";\n  }\n  \n  body[").concat(R,"] {\n    ").concat("--removed-body-scroll-bar-size",": ").concat(i,"px;\n  }\n")},L=function(){var e=parseInt(document.body.getAttribute(R)||"0",10);return isFinite(e)?e:0},P=function(){i.useEffect(function(){return document.body.setAttribute(R,(L()+1).toString()),function(){var e=L()-1;e<=0?document.body.removeAttribute(R):document.body.setAttribute(R,e.toString())}},[])},M=function(e){var t=e.noRelative,n=e.noImportant,r=e.gapMode,o=void 0===r?"margin":r;P();var a=i.useMemo(function(){return k(o)},[o]);return i.createElement(x,{styles:N(a,!t,o,n?"":"!important")})},O=!1;if("undefined"!=typeof window)try{var T=Object.defineProperty({},"passive",{get:function(){return O=!0,!0}});window.addEventListener("test",T,T),window.removeEventListener("test",T,T)}catch(e){O=!1}var A=!!O&&{passive:!1},j=function(e,t){if(!(e instanceof Element))return!1;var n=window.getComputedStyle(e);return"hidden"!==n[t]&&!(n.overflowY===n.overflowX&&"TEXTAREA"!==e.tagName&&"visible"===n[t])},B=function(e,t){var n=t.ownerDocument,r=t;do{if("undefined"!=typeof ShadowRoot&&r instanceof ShadowRoot&&(r=r.host),W(e,r)){var o=I(e,r);if(o[1]>o[2])return!0}r=r.parentNode}while(r&&r!==n.body);return!1},W=function(e,t){return"v"===e?j(t,"overflowY"):j(t,"overflowX")},I=function(e,t){return"v"===e?[t.scrollTop,t.scrollHeight,t.clientHeight]:[t.scrollLeft,t.scrollWidth,t.clientWidth]},X=function(e,t,n,r,o){var a,c=(a=window.getComputedStyle(t).direction,"h"===e&&"rtl"===a?-1:1),i=c*r,u=n.target,l=t.contains(u),s=!1,d=i>0,f=0,h=0;do{var v=I(e,u),p=v[0],m=v[1]-v[2]-c*p;(p||m)&&W(e,u)&&(f+=m,h+=p),u instanceof ShadowRoot?u=u.host:u=u.parentNode}while(!l&&u!==document.body||l&&(t.contains(u)||t===u));return d&&(o&&1>Math.abs(f)||!o&&i>f)?s=!0:!d&&(o&&1>Math.abs(h)||!o&&-i>h)&&(s=!0),s},Y=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},H=function(e){return[e.deltaX,e.deltaY]},Z=function(e){return e&&"current"in e?e.current:e},F=0,_=[];let z=(r=function(e){var t=i.useRef([]),n=i.useRef([0,0]),r=i.useRef(),o=i.useState(F++)[0],a=i.useState(b)[0],c=i.useRef(e);i.useEffect(function(){c.current=e},[e]),i.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(o));var t=(function(e,t,n){if(n||2==arguments.length)for(var r,o=0,a=t.length;o<a;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))})([e.lockRef.current],(e.shards||[]).map(Z),!0).filter(Boolean);return t.forEach(function(e){return e.classList.add("allow-interactivity-".concat(o))}),function(){document.body.classList.remove("block-interactivity-".concat(o)),t.forEach(function(e){return e.classList.remove("allow-interactivity-".concat(o))})}}},[e.inert,e.lockRef.current,e.shards]);var u=i.useCallback(function(e,t){if("touches"in e&&2===e.touches.length||"wheel"===e.type&&e.ctrlKey)return!c.current.allowPinchZoom;var o,a=Y(e),i=n.current,u="deltaX"in e?e.deltaX:i[0]-a[0],l="deltaY"in e?e.deltaY:i[1]-a[1],s=e.target,d=Math.abs(u)>Math.abs(l)?"h":"v";if("touches"in e&&"h"===d&&"range"===s.type)return!1;var f=B(d,s);if(!f)return!0;if(f?o=d:(o="v"===d?"h":"v",f=B(d,s)),!f)return!1;if(!r.current&&"changedTouches"in e&&(u||l)&&(r.current=o),!o)return!0;var h=r.current||o;return X(h,t,e,"h"===h?u:l,!0)},[]),l=i.useCallback(function(e){if(_.length&&_[_.length-1]===a){var n="deltaY"in e?H(e):Y(e),r=t.current.filter(function(t){var r;return t.name===e.type&&(t.target===e.target||e.target===t.shadowParent)&&(r=t.delta)[0]===n[0]&&r[1]===n[1]})[0];if(r&&r.should){e.cancelable&&e.preventDefault();return}if(!r){var o=(c.current.shards||[]).map(Z).filter(Boolean).filter(function(t){return t.contains(e.target)});(o.length>0?u(e,o[0]):!c.current.noIsolation)&&e.cancelable&&e.preventDefault()}}},[]),s=i.useCallback(function(e,n,r,o){var a={name:e,delta:n,target:r,should:o,shadowParent:function(e){for(var t=null;null!==e;)e instanceof ShadowRoot&&(t=e.host,e=e.host),e=e.parentNode;return t}(r)};t.current.push(a),setTimeout(function(){t.current=t.current.filter(function(e){return e!==a})},1)},[]),d=i.useCallback(function(e){n.current=Y(e),r.current=void 0},[]),f=i.useCallback(function(t){s(t.type,H(t),t.target,u(t,e.lockRef.current))},[]),h=i.useCallback(function(t){s(t.type,Y(t),t.target,u(t,e.lockRef.current))},[]);i.useEffect(function(){return _.push(a),e.setCallbacks({onScrollCapture:f,onWheelCapture:f,onTouchMoveCapture:h}),document.addEventListener("wheel",l,A),document.addEventListener("touchmove",l,A),document.addEventListener("touchstart",d,A),function(){_=_.filter(function(e){return e!==a}),document.removeEventListener("wheel",l,A),document.removeEventListener("touchmove",l,A),document.removeEventListener("touchstart",d,A)}},[]);var v=e.removeScrollBar,p=e.inert;return i.createElement(i.Fragment,null,p?i.createElement(a,{styles:"\n  .block-interactivity-".concat(o," {pointer-events: none;}\n  .allow-interactivity-").concat(o," {pointer-events: all;}\n")}):null,v?i.createElement(M,{gapMode:e.gapMode}):null)},v.useMedium(r),g);var D=i.forwardRef(function(e,t){return i.createElement(m,a({},e,{ref:t,sideCar:z}))});D.classNames=m.classNames;let G=D},2515:(e,t,n)=>{n.d(t,{FX:()=>c,jH:()=>i});var r=n(107),o=n(475),a=r.createContext(void 0),c=e=>{let{dir:t,children:n}=e;return(0,o.jsx)(a.Provider,{value:t,children:n})};function i(e){let t=r.useContext(a);return e||t||"ltr"}},1658:(e,t,n)=>{},9250:(e,t,n)=>{n.d(t,{I18nLabel:()=>a,s:()=>c});var r=n(107);let o=(0,r.createContext)({text:{search:"Search",searchNoResult:"No results found",toc:"On this page",tocNoHeadings:"No Headings",lastUpdate:"Last updated on",chooseLanguage:"Choose a language",nextPage:"Next",previousPage:"Previous",chooseTheme:"Theme",editOnGithub:"Edit on GitHub"}});function a(e){let{text:t}=c();return t[e.label]}function c(){return(0,r.useContext)(o)}}}]);