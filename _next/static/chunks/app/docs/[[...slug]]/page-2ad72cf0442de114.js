(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[870],{3021:(e,t,r)=>{Promise.resolve().then(r.bind(r,3155)),Promise.resolve().then(r.bind(r,399)),Promise.resolve().then(r.bind(r,2428)),Promise.resolve().then(r.bind(r,79)),Promise.resolve().then(r.bind(r,9232)),Promise.resolve().then(r.bind(r,6258)),Promise.resolve().then(r.bind(r,3625)),Promise.resolve().then(r.bind(r,9317)),Promise.resolve().then(r.bind(r,1517)),Promise.resolve().then(r.bind(r,6433)),Promise.resolve().then(r.bind(r,9250)),Promise.resolve().then(r.bind(r,4143)),Promise.resolve().then(r.bind(r,7612)),Promise.resolve().then(r.t.bind(r,9477,23)),Promise.resolve().then(r.t.bind(r,5354,23)),Promise.resolve().then(r.bind(r,3727))},3155:(e,t,r)=>{"use strict";r.d(t,{Configurator:()=>a});var n=r(475),l=r(107),s=r(460),o=r.n(s);let a=e=>{let{args:t,template:r,env:s}=e,a=Object.entries(s).map(e=>{var t;let[r,n]=e;return{key:r,name:"".concat(r," (").concat(n.tip,")"),defaultVal:null===(t=n.default)||void 0===t?void 0:t.toString()}}),[i,c]=(0,l.useState)(a.map(e=>e.defaultVal||""));return(0,n.jsxs)("div",{className:"border rounded-lg p-4 bg-gray-50 dark:bg-gray-900",children:[(0,n.jsx)("div",{className:"space-y-4",children:a.map((e,t)=>(0,n.jsxs)("div",{className:"flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4",children:[(0,n.jsx)("span",{className:"text-sm sm:w-1/3",children:e.name}),(0,n.jsx)("input",{type:"password"===s[e.key].type?"password":"text",className:"w-full sm:flex-1 border rounded px-3 py-2 text-sm dark:bg-gray-800 dark:border-gray-700",value:i[t],onChange:e=>{let r=[...i];r[t]=e.target.value,c(r)},placeholder:e.defaultVal})]},e.key))}),(0,n.jsx)("button",{onClick:()=>{a.map((e,t)=>"".concat(e.key,"=").concat(i[t])).join("\n"),t.join(" ");let e=r;a.forEach((t,r)=>{e=e.replace(RegExp("process.env.".concat(t.key),"g"),i[r])}),o()(e)},className:"mt-4 w-full bg-black text-white px-4 py-2 rounded text-sm hover:bg-gray-800",children:"复制配置"})]})}},399:(e,t,r)=>{"use strict";r.r(t),r.d(t,{EnvVariableConfig:()=>a});var n=r(475),l=r(107),s=r(460),o=r.n(s);function a(e){let{variableNames:t,format:r}=e,[s,a]=(0,l.useState)(t.map(e=>e.defaultVal||"")),[i,c]=(0,l.useState)("复制"),d=(e,t)=>{let r=[...s];r[e]=t,a(r)};return(0,n.jsxs)("div",{className:"p-4 mt-2 rounded-lg border dark:bg-gray-900 dark:border-gray-800",children:[t.map((e,t)=>(0,n.jsxs)("div",{className:"flex items-center space-x-4 mb-4",children:[(0,n.jsx)("input",{type:"text",className:"border rounded-lg px-2 py-2 w-1/2 bg-transparent focus:outline-none focus:border-black hover:border-white-400 transition duration-300 font-[400] font-sans text-sm cursor-not-allowed dark:border-gray-700 dark:text-gray-300 dark:bg-gray-800",value:e.name||e.key,"data-tip":e.key,onMouseOver:e=>{e.target.style.color="transparent",setTimeout(()=>{e.target.style.color="inherit",e.target.value=e.target.dataset.tip},300)},onMouseLeave:t=>{t.target.style.color="transparent",setTimeout(()=>{t.target.style.color="inherit",t.target.value=e.name||e.key},300)},disabled:!0}),(0,n.jsx)("input",{type:"text",className:"border rounded-lg px-2 py-2 w-1/2 focus:outline-none focus:border-black hover:border-gray-400 transition duration-300 font-[400] font-sans text-sm dark:border-gray-700 dark:text-gray-300 dark:bg-gray-800",style:{outline:"none",boxShadow:"none"},placeholder:"Enter value...",value:s[t],onChange:e=>d(t,e.target.value)})]},"".concat(e.key))),(0,n.jsxs)("div",{className:"flex items-center justify-between mb-4",children:[(0,n.jsx)("h2",{className:"sr-only",children:"环境变量配置"}),(0,n.jsx)("button",{type:"button",className:"border bg-black w-full text-white px-4 py-2 rounded-lg text-sm transform transition-all duration-300 focus:outline-none hover:bg-gray-700 dark:border-gray-700 dark:bg-gray-800",onClick:()=>{if("yaml"===r){let e=t.map((e,t)=>"- ".concat(e.key,"=").concat(s[t])).join("\n");o()(e)}else{let e=t.map((e,t)=>"".concat(e.key,"=").concat(s[t])).join("\n");o()(e)}c("复制成功"),setTimeout(()=>{c("复制")},3e3)},children:i})]})]})}},2428:(e,t,r)=>{"use strict";r.d(t,{default:()=>i});var n=r(475);r(107);var l=r(4629),s=r(8524),o=r(3195);let a=e=>{let{title:t,preview:r,href:a,github:i}=e;return(0,n.jsxs)("div",{className:"relative",children:[(0,n.jsx)("div",{className:"absolute top-4 right-4 z-10",children:(0,n.jsx)("a",{href:i,target:"_blank",rel:"noopener noreferrer",className:"text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors",onClick:e=>e.stopPropagation(),children:(0,n.jsx)(o.A,{size:16})})}),(0,n.jsx)(s.Z,{title:t,href:a,className:"overflow-hidden",children:(0,n.jsx)("div",{className:"relative aspect-[16/10] w-full overflow-hidden bg-white dark:bg-neutral-800",children:(0,n.jsx)(l.default,{src:r,alt:"".concat(t," 预览图"),fill:!0,className:"object-scale-down",style:{transform:"translateY(-30px)"},priority:!0,sizes:"(max-width: 768px) 100vw, (max-width: 1200px) 40vw"})})})]})},i=()=>(0,n.jsx)(s.C,{children:[{title:"Shiro (@innei)",preview:"/assets/images/preview/shiro.png",href:"/docs/themes/shiro/deploy",github:"https://github.com/innei/shiro"},{title:"Kami (@innei)",preview:"/assets/images/preview/kami.png",href:"/docs/themes/kami",github:"https://github.com/mx-space/kami"},{title:"Yun (@innei)",preview:"/assets/images/preview/yun.png",href:"/docs/themes/yun",github:"https://github.com/mx-space/mx-web-yun"}].map(e=>(0,n.jsx)(a,{...e},e.title))})},79:(e,t,r)=>{"use strict";r.r(t),r.d(t,{ToGitHub:()=>o});var n=r(475),l=r(8177),s=r(8524);function o(e){let{repo:t}=e;return(0,n.jsx)(s.C,{className:"gap-6",children:(0,n.jsx)(s.Z,{className:"m-2 break-words",style:{maxWidth:"100%"},href:"https://github.com/".concat(t),title:"".concat(t," - GitHub"),icon:(0,n.jsx)(l.A,{}),external:!0})})}},9232:(e,t,r)=>{"use strict";r.d(t,{default:()=>o});var n=r(475),l=r(107);let s={root:null,rootMargin:"0px",threshold:.5};function o(e){let{src:t}=e,r=(0,l.useRef)(null),o=(0,l.useRef)(null);(0,l.useEffect)(()=>(o.current=new IntersectionObserver(a,s),r.current&&o.current.observe(r.current),()=>{r.current&&o.current&&o.current.unobserve(r.current)}),[t]);let a=e=>{e.forEach(e=>{e.isIntersecting&&r.current?(r.current.src||(r.current.src=t),r.current.play()):r.current&&r.current.pause()})};return(0,n.jsx)("video",{ref:r,muted:!0,autoPlay:!0,playsInline:!0,loop:!0,controls:!0,className:"mt-6 rounded-xl border dark:border-zinc-800"})}},3097:(e,t,r)=>{"use strict";r.d(t,{A:()=>n});let n=(0,r(9967).A)("Text",[["path",{d:"M17 6.1H3",key:"wptmhv"}],["path",{d:"M21 12.1H3",key:"1j38uz"}],["path",{d:"M15.1 18H3",key:"1nb16a"}]])},3727:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n});let n={src:"/_next/static/media/status.c2de24b0.png",height:246,width:488,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAGFBMVEUhISMcHSAuLi8nJyhJSEltamY8PD2noZ9UXJ3YAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIklEQVR4nAXBgQEAMAiDMGjV/f/xEvYtqtxcAJGZpELTIh8FzQBG1Jzn9QAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:4}},6258:(e,t,r)=>{"use strict";r.d(t,{AnchorProvider:()=>v,N2:()=>x,Cz:()=>b,R3:()=>p,Mf:()=>g});var n=r(5704);r(1658);var l=r(107);let s=e=>"object"==typeof e&&null!=e&&1===e.nodeType,o=(e,t)=>(!t||"hidden"!==e)&&"visible"!==e&&"clip"!==e,a=(e,t)=>{if(e.clientHeight<e.scrollHeight||e.clientWidth<e.scrollWidth){let r=getComputedStyle(e,null);return o(r.overflowY,t)||o(r.overflowX,t)||(e=>{let t=(e=>{if(!e.ownerDocument||!e.ownerDocument.defaultView)return null;try{return e.ownerDocument.defaultView.frameElement}catch(e){return null}})(e);return!!t&&(t.clientHeight<e.scrollHeight||t.clientWidth<e.scrollWidth)})(e)}return!1},i=(e,t,r,n,l,s,o,a)=>s<e&&o>t||s>e&&o<t?0:s<=e&&a<=r||o>=t&&a>=r?s-e-n:o>t&&a<r||s<e&&a>r?o-t+l:0,c=e=>{let t=e.parentElement;return null==t?e.getRootNode().host||null:t},d=(e,t)=>{var r,n,l,o;if("undefined"==typeof document)return[];let{scrollMode:d,block:u,inline:h,boundary:f,skipOverflowHiddenElements:m}=t,p="function"==typeof f?f:e=>e!==f;if(!s(e))throw TypeError("Invalid target");let g=document.scrollingElement||document.documentElement,x=[],v=e;for(;s(v)&&p(v);){if((v=c(v))===g){x.push(v);break}null!=v&&v===document.body&&a(v)&&!a(document.documentElement)||null!=v&&a(v,m)&&x.push(v)}let b=null!=(n=null==(r=window.visualViewport)?void 0:r.width)?n:innerWidth,y=null!=(o=null==(l=window.visualViewport)?void 0:l.height)?o:innerHeight,{scrollX:w,scrollY:j}=window,{height:N,width:k,top:A,right:P,bottom:C,left:M}=e.getBoundingClientRect(),{top:E,right:T,bottom:R,left:H}=(e=>{let t=window.getComputedStyle(e);return{top:parseFloat(t.scrollMarginTop)||0,right:parseFloat(t.scrollMarginRight)||0,bottom:parseFloat(t.scrollMarginBottom)||0,left:parseFloat(t.scrollMarginLeft)||0}})(e),S="start"===u||"nearest"===u?A-E:"end"===u?C+R:A+N/2-E+R,z="center"===h?M+k/2-H+T:"end"===h?P+T:M-H,Q=[];for(let e=0;e<x.length;e++){let t=x[e],{height:r,width:n,top:l,right:s,bottom:o,left:a}=t.getBoundingClientRect();if("if-needed"===d&&A>=0&&M>=0&&C<=y&&P<=b&&A>=l&&C<=o&&M>=a&&P<=s)break;let c=getComputedStyle(t),f=parseInt(c.borderLeftWidth,10),m=parseInt(c.borderTopWidth,10),p=parseInt(c.borderRightWidth,10),v=parseInt(c.borderBottomWidth,10),E=0,T=0,R="offsetWidth"in t?t.offsetWidth-t.clientWidth-f-p:0,H="offsetHeight"in t?t.offsetHeight-t.clientHeight-m-v:0,I="offsetWidth"in t?0===t.offsetWidth?0:n/t.offsetWidth:0,W="offsetHeight"in t?0===t.offsetHeight?0:r/t.offsetHeight:0;if(g===t)E="start"===u?S:"end"===u?S-y:"nearest"===u?i(j,j+y,y,m,v,j+S,j+S+N,N):S-y/2,T="start"===h?z:"center"===h?z-b/2:"end"===h?z-b:i(w,w+b,b,f,p,w+z,w+z+k,k),E=Math.max(0,E+j),T=Math.max(0,T+w);else{E="start"===u?S-l-m:"end"===u?S-o+v+H:"nearest"===u?i(l,o,r,m,v+H,S,S+N,N):S-(l+r/2)+H/2,T="start"===h?z-a-f:"center"===h?z-(a+n/2)+R/2:"end"===h?z-s+p+R:i(a,s,n,f,p+R,z,z+k,k);let{scrollLeft:e,scrollTop:c}=t;E=0===W?0:Math.max(0,Math.min(c+E/W,t.scrollHeight-r/W+H)),T=0===I?0:Math.max(0,Math.min(e+T/I,t.scrollWidth-n/I+R)),S+=c-E,z+=e-T}Q.push({el:t,top:E,left:T})}return Q},u=e=>!1===e?{block:"end",inline:"nearest"}:(e=>e===Object(e)&&0!==Object.keys(e).length)(e)?e:{block:"start",inline:"nearest"};var h=r(475),f=(0,l.createContext)([]),m=(0,l.createContext)({current:null});function p(){return(0,l.useContext)(f).at(-1)}function g(){return(0,l.useContext)(f)}function x(e){let{containerRef:t,children:r}=e;return(0,h.jsx)(m.Provider,{value:t,children:r})}function v(e){let{toc:t,single:r=!0,children:n}=e,s=(0,l.useMemo)(()=>t.map(e=>e.url.split("#")[1]),[t]);return(0,h.jsx)(f.Provider,{value:function(e,t){let[r,n]=(0,l.useState)([]);return(0,l.useEffect)(()=>{let r=[],l=new IntersectionObserver(e=>{for(let t of e)t.isIntersecting&&!r.includes(t.target.id)?r=[...r,t.target.id]:!t.isIntersecting&&r.includes(t.target.id)&&(r=r.filter(e=>e!==t.target.id));r.length>0&&n(r)},{rootMargin:t?"-80px 0% -70% 0%":"-20px 0% -40% 0%",threshold:1});function s(){let r=document.scrollingElement;r&&(0===r.scrollTop&&t?n(e.slice(0,1)):r.scrollTop+r.clientHeight>=r.scrollHeight-6&&n(r=>r.length>0&&!t?e.slice(e.indexOf(r[0])):e.slice(-1)))}for(let t of e){let e=document.getElementById(t);e&&l.observe(e)}return s(),window.addEventListener("scroll",s),()=>{window.removeEventListener("scroll",s),l.disconnect()}},[t,e]),t?r.slice(0,1):r}(s,r),children:n})}var b=(0,l.forwardRef)((e,t)=>{let{onActiveChange:r,...s}=e,o=(0,l.useContext)(m),a=g(),i=(0,l.useRef)(null),c=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return e=>{t.forEach(t=>{"function"==typeof t?t(e):null!==t&&(t.current=e)})}}(i,t),f=a.includes(s.href.slice(1));return(0,n.T)(f,e=>{let t=i.current;t&&(e&&o.current&&function(e,t){if(!e.isConnected||!(e=>{let t=e;for(;t&&t.parentNode;){if(t.parentNode===document)return!0;t=t.parentNode instanceof ShadowRoot?t.parentNode.host:t.parentNode}return!1})(e))return;let r=(e=>{let t=window.getComputedStyle(e);return{top:parseFloat(t.scrollMarginTop)||0,right:parseFloat(t.scrollMarginRight)||0,bottom:parseFloat(t.scrollMarginBottom)||0,left:parseFloat(t.scrollMarginLeft)||0}})(e);if("object"==typeof t&&"function"==typeof t.behavior)return t.behavior(d(e,t));let n="boolean"==typeof t||null==t?void 0:t.behavior;for(let{el:l,top:s,left:o}of d(e,u(t))){let e=s-r.top+r.bottom,t=o-r.left+r.right;l.scroll({top:e,left:t,behavior:n})}}(t,{behavior:"smooth",block:"center",inline:"center",scrollMode:"always",boundary:o.current}),null==r||r(e))}),(0,h.jsx)("a",{ref:c,"data-active":f,...s,children:s.children})});b.displayName="TOCItem"},1517:(e,t,r)=>{"use strict";r.d(t,{default:()=>d});var n=r(475),l=r(6258),s=r(107),o=r(3552),a=r(3636),i=r(6582),c=r(6433);function d(e){let{items:t,isMenu:r=!1}=e,d=(0,s.useRef)(null),f=(0,s.useRef)(null),[m,p]=(0,s.useState)();return((0,s.useEffect)(()=>{if(!f.current)return;let e=f.current;function r(){if(0===e.clientHeight)return;let r=0,n=0,l=[];for(let s=0;s<t.length;s++){let o=e.querySelector('a[href="#'.concat(t[s].url.slice(1),'"]'));if(!o)continue;let a=getComputedStyle(o),i=u(t[s].depth)+1,c=o.offsetTop+parseFloat(a.paddingTop),d=o.offsetTop+o.clientHeight-parseFloat(a.paddingBottom);r=Math.max(i,r),n=Math.max(n,d),l.push("".concat(0===s?"M":"L").concat(i," ").concat(c)),l.push("L".concat(i," ").concat(d))}p({path:l.join(" "),width:r+1,height:n})}let n=new ResizeObserver(r);return r(),n.observe(e),()=>{n.disconnect()}},[t]),0===t.length)?(0,n.jsx)(c.k,{}):(0,n.jsx)(i.FK,{className:(0,o.QP)("flex flex-col",r&&"-ms-3"),children:(0,n.jsxs)(i.Gl,{className:"relative min-h-0",ref:d,children:[m?(0,n.jsx)("div",{className:"absolute start-0 top-0 rtl:-scale-x-100",style:{width:m.width,height:m.height,maskImage:'url("data:image/svg+xml,'.concat(encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 '.concat(m.width," ").concat(m.height,'"><path d="').concat(m.path,'" stroke="black" stroke-width="1" fill="none" /></svg>')),'")')},children:(0,n.jsx)(a.j,{containerRef:f,className:"mt-[var(--fd-top)] h-[var(--fd-height)] bg-fd-primary transition-all"})}):null,(0,n.jsx)(l.N2,{containerRef:d,children:(0,n.jsx)("div",{className:"flex flex-col",ref:f,children:t.map((e,r)=>{var l,s;return(0,n.jsx)(h,{item:e,upper:null===(l=t[r-1])||void 0===l?void 0:l.depth,lower:null===(s=t[r+1])||void 0===s?void 0:s.depth},e.url)})})})]})})}function u(e){return e>=3?10:0}function h(e){var t;let{item:r,upper:s=r.depth,lower:a=r.depth}=e,i=u(r.depth),c=u(s),d=u(a);return(0,n.jsxs)(l.Cz,{href:r.url,style:{paddingInlineStart:(t=r.depth)<=2?14:3===t?26:36},className:"prose relative py-1.5 text-sm text-fd-muted-foreground transition-colors [overflow-wrap:anywhere] first:pt-0 last:pb-0 data-[active=true]:text-fd-primary",children:[i!==c?(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",className:"absolute -top-1.5 start-0 size-4 rtl:-scale-x-100",children:(0,n.jsx)("line",{x1:c,y1:"0",x2:i,y2:"12",className:"stroke-fd-foreground/10",strokeWidth:"1"})}):null,(0,n.jsx)("div",{className:(0,o.QP)("absolute inset-y-0 w-px bg-fd-foreground/10",i!==c&&"top-1.5",i!==d&&"bottom-1.5"),style:{insetInlineStart:i}}),r.title]})}},3636:(e,t,r)=>{"use strict";r.d(t,{j:()=>c});var n=r(475),l=r(107),s=r(6258),o=r(1114);function a(e,t){if(0===t.length||0===e.clientHeight)return[0,0];let r=Number.MAX_VALUE,n=0;for(let l of t){let t=e.querySelector(`a[href="#${l}"]`);if(!t)continue;let s=getComputedStyle(t);r=Math.min(r,t.offsetTop+parseFloat(s.paddingTop)),n=Math.max(n,t.offsetTop+t.clientHeight-parseFloat(s.paddingBottom))}return[r,n-r]}function i(e,t){e.style.setProperty("--fd-top",`${t[0]}px`),e.style.setProperty("--fd-height",`${t[1]}px`)}function c({containerRef:e,...t}){let r=s.Mf(),c=(0,l.useRef)(null),d=(0,l.useRef)(r);return d.current=r,(0,l.useEffect)(()=>{if(!e.current)return;let t=e.current,r=()=>{c.current&&i(c.current,a(t,d.current))};r();let n=new ResizeObserver(r);return n.observe(t),()=>{n.disconnect()}},[e]),(0,o.T)(r,()=>{e.current&&c.current&&i(c.current,a(e.current,r))}),(0,n.jsx)("div",{ref:c,role:"none",...t})}},6433:(e,t,r)=>{"use strict";r.d(t,{TOCItems:()=>g,Toc:()=>m,TocPopover:()=>v,TocPopoverContent:()=>y,TocPopoverTrigger:()=>b,k:()=>p});var n=r(475),l=r(6258),s=r(107),o=r(3552),a=r(9250),i=r(3636),c=r(6582),d=r(6263),u=r(3097),h=r(5682),f=r(4136);function m(e){let{toc:t}=(0,f.v)();return(0,n.jsx)("div",{id:"nd-toc",...e,className:(0,o.QP)("sticky top-fd-layout-top h-[var(--fd-toc-height)] pb-2 pt-12",t,e.className),style:{...e.style,"--fd-toc-height":"calc(100dvh - var(--fd-banner-height) - var(--fd-nav-height))"},children:(0,n.jsx)("div",{className:"flex h-full w-[var(--fd-toc-width)] max-w-full flex-col gap-3 pe-4",children:e.children})})}function p(){let{text:e}=(0,a.s)();return(0,n.jsx)("div",{className:"rounded-lg border bg-fd-card p-3 text-xs text-fd-muted-foreground",children:e.tocNoHeadings})}function g(e){let{items:t,isMenu:r=!1}=e,a=(0,s.useRef)(null),d=(0,s.useRef)(null);return 0===t.length?(0,n.jsx)(p,{}):(0,n.jsx)(c.FK,{className:(0,o.QP)("flex flex-col",r&&"-ms-3"),children:(0,n.jsx)(l.N2,{containerRef:d,children:(0,n.jsxs)(c.Gl,{className:"relative min-h-0 text-sm",ref:d,children:[(0,n.jsx)(i.j,{containerRef:a,className:"absolute start-0 mt-[var(--fd-top)] h-[var(--fd-height)] w-px bg-fd-primary transition-all"}),(0,n.jsx)("div",{ref:a,className:(0,o.QP)("flex flex-col",!r&&"border-s border-fd-foreground/10"),children:t.map(e=>(0,n.jsx)(x,{item:e},e.url))})]})})})}function x(e){let{item:t}=e;return(0,n.jsx)(l.Cz,{href:t.url,className:(0,o.QP)("prose py-1.5 text-sm text-fd-muted-foreground transition-colors [overflow-wrap:anywhere] first:pt-0 last:pb-0 data-[active=true]:text-fd-primary",t.depth<=2&&"ps-3.5",3===t.depth&&"ps-6",t.depth>=4&&"ps-8"),children:t.title})}let v=d.AM;function b(e){let{items:t,...r}=e,{text:i}=(0,a.s)(),c=l.R3(),f=(0,s.useMemo)(()=>{var e;return null===(e=t.find(e=>c===e.url.slice(1)))||void 0===e?void 0:e.title},[t,c]);return(0,n.jsxs)(d.Wv,{...r,className:(0,o.QP)("inline-flex items-center gap-2 text-nowrap px-4 py-2 text-start",r.className),children:[(0,n.jsx)(u.A,{className:"size-4 shrink-0"}),i.toc,f?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(h.A,{className:"-mx-1.5 size-4 shrink-0 text-fd-muted-foreground"}),(0,n.jsx)("span",{className:"truncate text-fd-muted-foreground",children:f})]}):null]})}function y(e){return(0,n.jsx)(d.hl,{hideWhenDetached:!0,alignOffset:16,align:"start",side:"bottom","data-toc-popover":"",...e,className:(0,o.QP)("flex max-h-[var(--radix-popover-content-available-height)] w-[260px] flex-col gap-4 p-3",e.className),children:e.children})}},4143:(e,t,r)=>{"use strict";r.d(t,{Pre:()=>m});var n=r(475),l=r(4754);let s=(0,r(9967).A)("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);var o=r(107),a=r(3552),i=r(6582),c=r(891),d=r(2673);let u=(0,o.forwardRef)((e,t)=>{let{className:r,...l}=e;return(0,n.jsx)("pre",{ref:t,className:(0,a.QP)("p-4 focus-visible:outline-none",r),...l,children:l.children})});u.displayName="Pre";let h=(0,o.forwardRef)((e,t)=>{let{title:r,allowCopy:l=!0,keepBackground:s=!1,icon:c,viewportProps:d,...u}=e,h=(0,o.useRef)(null),m=(0,o.useCallback)(()=>{var e,t;let r=null===(e=h.current)||void 0===e?void 0:e.getElementsByTagName("pre").item(0);if(!r)return;let n=r.cloneNode(!0);n.querySelectorAll(".nd-copy-ignore").forEach(e=>{e.remove()}),navigator.clipboard.writeText(null!==(t=n.textContent)&&void 0!==t?t:"")},[]);return(0,n.jsxs)("figure",{ref:t,...u,className:(0,a.QP)("not-prose group fd-codeblock relative my-6 overflow-hidden rounded-lg border bg-fd-secondary/50 text-sm",s&&"bg-[var(--shiki-light-bg)] dark:bg-[var(--shiki-dark-bg)]",u.className),children:[r?(0,n.jsxs)("div",{className:"flex flex-row items-center gap-2 border-b bg-fd-muted px-4 py-1.5",children:[c?(0,n.jsx)("div",{className:"text-fd-muted-foreground [&_svg]:size-3.5",dangerouslySetInnerHTML:"string"==typeof c?{__html:c}:void 0,children:"string"!=typeof c?c:null}):null,(0,n.jsx)("figcaption",{className:"flex-1 truncate text-fd-muted-foreground",children:r}),l?(0,n.jsx)(f,{className:"-me-2",onCopy:m}):null]}):l&&(0,n.jsx)(f,{className:"absolute right-2 top-2 z-[2] backdrop-blur-md",onCopy:m}),(0,n.jsxs)(i.FK,{ref:h,dir:"ltr",children:[(0,n.jsx)(i.Gl,{...d,className:(0,a.QP)("max-h-[600px]",null==d?void 0:d.className),children:u.children}),(0,n.jsx)(i.$H,{orientation:"horizontal"})]})]})});function f(e){let{className:t,onCopy:r,...o}=e,[i,u]=(0,c.x)(r);return(0,n.jsxs)("button",{type:"button",className:(0,a.QP)((0,d.r)({color:"ghost"}),"transition-opacity group-hover:opacity-100",!i&&"opacity-0",t),"aria-label":"Copy Text",onClick:u,...o,children:[(0,n.jsx)(l.A,{className:(0,a.QP)("size-3.5 transition-transform",!i&&"scale-0")}),(0,n.jsx)(s,{className:(0,a.QP)("absolute size-3.5 transition-transform",i&&"scale-0")})]})}function m(e){return(0,n.jsx)(h,{...e,children:(0,n.jsx)(u,{children:e.children})})}h.displayName="CodeBlock"},7612:(e,t,r)=>{"use strict";r.d(t,{Breadcrumb:()=>A,Footer:()=>k,LastUpdate:()=>y,PageArticle:()=>b,PageBody:()=>v,TocNav:()=>x});var n=r(475),l=r(107);let s=(0,r(9967).A)("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);var o=r(5682),a=r(9477),i=r(7609),c=r(3552),d=r(9250),u=r(7566),h=r(3970),f=r(6118),m=r(3038),p=r(3695),g=r(4136);function x(e){let{open:t}=(0,h.c)(),{tocNav:r}=(0,g.v)(),{isTransparent:l}=(0,m.h)();return(0,n.jsx)("header",{id:"nd-tocnav",...e,className:(0,c.QP)("sticky top-fd-layout-top z-10 flex flex-row items-center border-b border-fd-foreground/10 text-sm backdrop-blur-md transition-colors",!l&&"bg-fd-background/80",t&&"opacity-0",r,e.className),style:{...e.style,"--fd-toc-top-with-offset":"calc(4px + var(--fd-banner-height) + var(--fd-nav-height))"},children:e.children})}function v(e){let{page:t}=(0,g.v)();return(0,n.jsx)("div",{id:"nd-page",...e,className:(0,c.QP)("flex w-full min-w-0 flex-col",t,e.className),children:e.children})}function b(e){let{article:t}=(0,g.v)();return(0,n.jsx)("article",{...e,className:(0,c.QP)("flex w-full flex-1 flex-col gap-6 px-4 pt-8 md:pt-12 lg:px-8 xl:mx-auto",t,e.className),children:e.children})}function y(e){let{text:t}=(0,d.s)(),[r,s]=(0,l.useState)("");return(0,l.useEffect)(()=>{s(e.date.toLocaleDateString())},[e.date]),(0,n.jsxs)("p",{className:"text-sm text-fd-muted-foreground",children:[t.lastUpdate," ",r]})}let w=(0,i.F)("flex w-full flex-col gap-2 rounded-lg border bg-fd-card p-4 text-sm transition-colors hover:bg-fd-accent/80 hover:text-fd-accent-foreground"),j=(0,i.F)("inline-flex items-center gap-0.5 text-fd-muted-foreground"),N=new WeakMap;function k(e){let{items:t}=e,{root:r}=(0,u.t)(),{text:i}=(0,d.s)(),h=(0,f.usePathname)(),{previous:m,next:p}=(0,l.useMemo)(()=>{if(t)return t;let e=N.get(r),n=null!=e?e:function e(t){let r=[];return t.forEach(t=>{if("folder"===t.type){t.index&&r.push(t.index),r.push(...e(t.children));return}"page"!==t.type||t.external||r.push(t)}),r}(r.children);N.set(r,n);let l=n.findIndex(e=>e.url===h);return -1===l?{}:{previous:n[l-1],next:n[l+1]}},[t,h,r]);return(0,n.jsxs)("div",{className:"grid grid-cols-2 gap-4 pb-6",children:[m?(0,n.jsxs)(a,{href:m.url,className:(0,c.QP)(w()),children:[(0,n.jsxs)("div",{className:(0,c.QP)(j()),children:[(0,n.jsx)(s,{className:"-ms-1 size-4 shrink-0 rtl:rotate-180"}),(0,n.jsx)("p",{children:i.previousPage})]}),(0,n.jsx)("p",{className:"font-medium",children:m.name})]}):null,p?(0,n.jsxs)(a,{href:p.url,className:(0,c.QP)(w({className:"col-start-2 text-end"})),children:[(0,n.jsxs)("div",{className:(0,c.QP)(j({className:"flex-row-reverse"})),children:[(0,n.jsx)(o.A,{className:"-me-1 size-4 shrink-0 rtl:rotate-180"}),(0,n.jsx)("p",{children:i.nextPage})]}),(0,n.jsx)("p",{className:"font-medium",children:p.name})]}):null]})}function A(e){let t=(0,u.L)(),{root:r}=(0,u.t)(),s=(0,l.useMemo)(()=>{var n;return(0,p.Pp)(r,t,{includePage:null!==(n=e.includePage)&&void 0!==n&&n,...e})},[e,t,r]);return 0===s.length?null:(0,n.jsx)("div",{className:"-mb-3 flex flex-row items-center gap-1 text-sm font-medium text-fd-muted-foreground",children:s.map((e,t)=>(0,n.jsxs)(l.Fragment,{children:[0!==t&&(0,n.jsx)(o.A,{className:"size-4 shrink-0 rtl:rotate-180"}),e.url?(0,n.jsx)(a,{href:e.url,className:"truncate hover:text-fd-accent-foreground",children:e.name}):(0,n.jsx)("span",{className:"truncate",children:e.name})]},t))})}}},e=>{var t=t=>e(e.s=t);e.O(0,[552,163,342,680,64,775,567,159,191,35,358],()=>t(3021)),_N_E=e.O()}]);