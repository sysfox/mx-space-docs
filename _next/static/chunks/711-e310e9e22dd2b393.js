"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[711],{9990:(e,t,n)=>{n.d(t,{A:()=>r});let r=(0,n(9967).A)("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]])},7866:(e,t,n)=>{n.d(t,{Content:()=>ep,Item:()=>em,Link:()=>eh,List:()=>ef,Root:()=>eu,Trigger:()=>ev,Viewport:()=>eg});var r=n(107),a=n(5642),o=n(5604),i=n(5456),l=n(1431),s=n(7725),d=n(1536),c=n(2515),u=n(8485),f=n(6137),m=n(1156),v=n(6126),h=n(5536),p=n(8085),g=n(475),x=r.forwardRef((e,t)=>(0,g.jsx)(l.sG.span,{...e,ref:t,style:{position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal",...e.style}}));x.displayName="VisuallyHidden";var w="NavigationMenu",[y,b,N]=(0,m.N)(w),[C,j,k]=(0,m.N)(w),[E,T]=(0,o.A)(w,[N,k]),[R,M]=E(w),[P,L]=E(w),S=r.forwardRef((e,t)=>{let{__scopeNavigationMenu:n,value:a,onValueChange:o,defaultValue:i,delayDuration:u=200,skipDelayDuration:f=300,orientation:m="horizontal",dir:v,...h}=e,[p,x]=r.useState(null),w=(0,d.s)(t,e=>x(e)),y=(0,c.jH)(v),b=r.useRef(0),N=r.useRef(0),C=r.useRef(0),[j,k]=r.useState(!0),[E="",T]=(0,s.i)({prop:a,onChange:e=>{let t=f>0;""!==e?(window.clearTimeout(C.current),t&&k(!1)):(window.clearTimeout(C.current),C.current=window.setTimeout(()=>k(!0),f)),null==o||o(e)},defaultProp:i}),R=r.useCallback(()=>{window.clearTimeout(N.current),N.current=window.setTimeout(()=>T(""),150)},[T]),M=r.useCallback(e=>{window.clearTimeout(N.current),T(e)},[T]),P=r.useCallback(e=>{E===e?window.clearTimeout(N.current):b.current=window.setTimeout(()=>{window.clearTimeout(N.current),T(e)},u)},[E,T,u]);return r.useEffect(()=>()=>{window.clearTimeout(b.current),window.clearTimeout(N.current),window.clearTimeout(C.current)},[]),(0,g.jsx)(I,{scope:n,isRootMenu:!0,value:E,dir:y,orientation:m,rootNavigationMenu:p,onTriggerEnter:e=>{window.clearTimeout(b.current),j?P(e):M(e)},onTriggerLeave:()=>{window.clearTimeout(b.current),R()},onContentEnter:()=>window.clearTimeout(N.current),onContentLeave:R,onItemSelect:e=>{T(t=>t===e?"":e)},onItemDismiss:()=>T(""),children:(0,g.jsx)(l.sG.nav,{"aria-label":"Main","data-orientation":m,dir:y,...h,ref:w})})});S.displayName=w;var A="NavigationMenuSub";r.forwardRef((e,t)=>{let{__scopeNavigationMenu:n,value:r,onValueChange:a,defaultValue:o,orientation:i="horizontal",...d}=e,c=M(A,n),[u="",f]=(0,s.i)({prop:r,onChange:a,defaultProp:o});return(0,g.jsx)(I,{scope:n,isRootMenu:!1,value:u,dir:c.dir,orientation:i,rootNavigationMenu:c.rootNavigationMenu,onTriggerEnter:e=>f(e),onItemSelect:e=>f(e),onItemDismiss:()=>f(""),children:(0,g.jsx)(l.sG.div,{"data-orientation":i,...d,ref:t})})}).displayName=A;var I=e=>{let{scope:t,isRootMenu:n,rootNavigationMenu:a,dir:o,orientation:i,children:l,value:s,onItemSelect:d,onItemDismiss:c,onTriggerEnter:u,onTriggerLeave:m,onContentEnter:v,onContentLeave:h}=e,[x,w]=r.useState(null),[b,N]=r.useState(new Map),[C,j]=r.useState(null);return(0,g.jsx)(R,{scope:t,isRootMenu:n,rootNavigationMenu:a,value:s,previousValue:function(e){let t=r.useRef({value:e,previous:e});return r.useMemo(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}(s),baseId:(0,f.B)(),dir:o,orientation:i,viewport:x,onViewportChange:w,indicatorTrack:C,onIndicatorTrackChange:j,onTriggerEnter:(0,p.c)(u),onTriggerLeave:(0,p.c)(m),onContentEnter:(0,p.c)(v),onContentLeave:(0,p.c)(h),onItemSelect:(0,p.c)(d),onItemDismiss:(0,p.c)(c),onViewportContentChange:r.useCallback((e,t)=>{N(n=>(n.set(e,t),new Map(n)))},[]),onViewportContentRemove:r.useCallback(e=>{N(t=>t.has(e)?(t.delete(e),new Map(t)):t)},[]),children:(0,g.jsx)(y.Provider,{scope:t,children:(0,g.jsx)(P,{scope:t,items:b,children:l})})})},_="NavigationMenuList",D=r.forwardRef((e,t)=>{let{__scopeNavigationMenu:n,...r}=e,a=M(_,n),o=(0,g.jsx)(l.sG.ul,{"data-orientation":a.orientation,...r,ref:t});return(0,g.jsx)(l.sG.div,{style:{position:"relative"},ref:a.onIndicatorTrackChange,children:(0,g.jsx)(y.Slot,{scope:n,children:a.isRootMenu?(0,g.jsx)(et,{asChild:!0,children:o}):o})})});D.displayName=_;var F="NavigationMenuItem",[K,O]=E(F),z=r.forwardRef((e,t)=>{let{__scopeNavigationMenu:n,value:a,...o}=e,i=(0,f.B)(),s=r.useRef(null),d=r.useRef(null),c=r.useRef(null),u=r.useRef(()=>{}),m=r.useRef(!1),v=r.useCallback(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"start";if(s.current){u.current();let t=ea(s.current);t.length&&eo("start"===e?t:t.reverse())}},[]),h=r.useCallback(()=>{if(s.current){let e=ea(s.current);e.length&&(u.current=function(e){return e.forEach(e=>{e.dataset.tabindex=e.getAttribute("tabindex")||"",e.setAttribute("tabindex","-1")}),()=>{e.forEach(e=>{let t=e.dataset.tabindex;e.setAttribute("tabindex",t)})}}(e))}},[]);return(0,g.jsx)(K,{scope:n,value:a||i||"LEGACY_REACT_AUTO_VALUE",triggerRef:d,contentRef:s,focusProxyRef:c,wasEscapeCloseRef:m,onEntryKeyDown:v,onFocusProxyEnter:v,onRootContentClose:h,onContentFocusOutside:h,children:(0,g.jsx)(l.sG.li,{...o,ref:t})})});z.displayName=F;var Q="NavigationMenuTrigger",V=r.forwardRef((e,t)=>{let{__scopeNavigationMenu:n,disabled:a,...o}=e,s=M(Q,e.__scopeNavigationMenu),c=O(Q,e.__scopeNavigationMenu),u=r.useRef(null),f=(0,d.s)(u,c.triggerRef,t),m=es(s.baseId,c.value),v=ed(s.baseId,c.value),h=r.useRef(!1),p=r.useRef(!1),w=c.value===s.value;return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(y.ItemSlot,{scope:n,value:c.value,children:(0,g.jsx)(er,{asChild:!0,children:(0,g.jsx)(l.sG.button,{id:m,disabled:a,"data-disabled":a?"":void 0,"data-state":el(w),"aria-expanded":w,"aria-controls":v,...o,ref:f,onPointerEnter:(0,i.m)(e.onPointerEnter,()=>{p.current=!1,c.wasEscapeCloseRef.current=!1}),onPointerMove:(0,i.m)(e.onPointerMove,ec(()=>{a||p.current||c.wasEscapeCloseRef.current||h.current||(s.onTriggerEnter(c.value),h.current=!0)})),onPointerLeave:(0,i.m)(e.onPointerLeave,ec(()=>{a||(s.onTriggerLeave(),h.current=!1)})),onClick:(0,i.m)(e.onClick,()=>{s.onItemSelect(c.value),p.current=w}),onKeyDown:(0,i.m)(e.onKeyDown,e=>{let t={horizontal:"ArrowDown",vertical:"rtl"===s.dir?"ArrowLeft":"ArrowRight"}[s.orientation];w&&e.key===t&&(c.onEntryKeyDown(),e.preventDefault())})})})}),w&&(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(x,{"aria-hidden":!0,tabIndex:0,ref:c.focusProxyRef,onFocus:e=>{let t=c.contentRef.current,n=e.relatedTarget,r=n===u.current,a=null==t?void 0:t.contains(n);(r||!a)&&c.onFocusProxyEnter(r?"start":"end")}}),s.viewport&&(0,g.jsx)("span",{"aria-owns":v})]})]})});V.displayName=Q;var W="navigationMenu.linkSelect",G=r.forwardRef((e,t)=>{let{__scopeNavigationMenu:n,active:r,onSelect:a,...o}=e;return(0,g.jsx)(er,{asChild:!0,children:(0,g.jsx)(l.sG.a,{"data-active":r?"":void 0,"aria-current":r?"page":void 0,...o,ref:t,onClick:(0,i.m)(e.onClick,e=>{let t=e.target,n=new CustomEvent(W,{bubbles:!0,cancelable:!0});if(t.addEventListener(W,e=>null==a?void 0:a(e),{once:!0}),(0,l.hO)(t,n),!n.defaultPrevented&&!e.metaKey){let e=new CustomEvent(J,{bubbles:!0,cancelable:!0});(0,l.hO)(t,e)}},{checkForDefaultPrevented:!1})})})});G.displayName="NavigationMenuLink";var H="NavigationMenuIndicator";r.forwardRef((e,t)=>{let{forceMount:n,...r}=e,o=M(H,e.__scopeNavigationMenu),i=!!o.value;return o.indicatorTrack?a.createPortal((0,g.jsx)(u.C,{present:n||i,children:(0,g.jsx)(B,{...r,ref:t})}),o.indicatorTrack):null}).displayName=H;var B=r.forwardRef((e,t)=>{let{__scopeNavigationMenu:n,...a}=e,o=M(H,n),i=b(n),[s,d]=r.useState(null),[c,u]=r.useState(null),f="horizontal"===o.orientation,m=!!o.value;r.useEffect(()=>{var e;let t=null===(e=i().find(e=>e.value===o.value))||void 0===e?void 0:e.ref.current;t&&d(t)},[i,o.value]);let v=()=>{s&&u({size:f?s.offsetWidth:s.offsetHeight,offset:f?s.offsetLeft:s.offsetTop})};return ei(s,v),ei(o.indicatorTrack,v),c?(0,g.jsx)(l.sG.div,{"aria-hidden":!0,"data-state":m?"visible":"hidden","data-orientation":o.orientation,...a,ref:t,style:{position:"absolute",...f?{left:0,width:c.size+"px",transform:"translateX(".concat(c.offset,"px)")}:{top:0,height:c.size+"px",transform:"translateY(".concat(c.offset,"px)")},...a.style}}):null}),$="NavigationMenuContent",q=r.forwardRef((e,t)=>{let{forceMount:n,...r}=e,a=M($,e.__scopeNavigationMenu),o=O($,e.__scopeNavigationMenu),l=(0,d.s)(o.contentRef,t),s=o.value===a.value,c={value:o.value,triggerRef:o.triggerRef,focusProxyRef:o.focusProxyRef,wasEscapeCloseRef:o.wasEscapeCloseRef,onContentFocusOutside:o.onContentFocusOutside,onRootContentClose:o.onRootContentClose,...r};return a.viewport?(0,g.jsx)(U,{forceMount:n,...c,ref:l}):(0,g.jsx)(u.C,{present:n||s,children:(0,g.jsx)(Y,{"data-state":el(s),...c,ref:l,onPointerEnter:(0,i.m)(e.onPointerEnter,a.onContentEnter),onPointerLeave:(0,i.m)(e.onPointerLeave,ec(a.onContentLeave)),style:{pointerEvents:!s&&a.isRootMenu?"none":void 0,...c.style}})})});q.displayName=$;var U=r.forwardRef((e,t)=>{let{onViewportContentChange:n,onViewportContentRemove:r}=M($,e.__scopeNavigationMenu);return(0,h.N)(()=>{n(e.value,{ref:t,...e})},[e,t,n]),(0,h.N)(()=>()=>r(e.value),[e.value,r]),null}),J="navigationMenu.rootContentDismiss",Y=r.forwardRef((e,t)=>{let{__scopeNavigationMenu:n,value:a,triggerRef:o,focusProxyRef:l,wasEscapeCloseRef:s,onRootContentClose:c,onContentFocusOutside:u,...f}=e,m=M($,n),h=r.useRef(null),p=(0,d.s)(h,t),x=es(m.baseId,a),w=ed(m.baseId,a),y=b(n),N=r.useRef(null),{onItemDismiss:C}=m;r.useEffect(()=>{let e=h.current;if(m.isRootMenu&&e){let t=()=>{var t;C(),c(),e.contains(document.activeElement)&&(null===(t=o.current)||void 0===t||t.focus())};return e.addEventListener(J,t),()=>e.removeEventListener(J,t)}},[m.isRootMenu,e.value,o,C,c]);let j=r.useMemo(()=>{let e=y().map(e=>e.value);"rtl"===m.dir&&e.reverse();let t=e.indexOf(m.value),n=e.indexOf(m.previousValue),r=a===m.value,o=n===e.indexOf(a);if(!r&&!o)return N.current;let i=(()=>{if(t!==n){if(r&&-1!==n)return t>n?"from-end":"from-start";if(o&&-1!==t)return t>n?"to-start":"to-end"}return null})();return N.current=i,i},[m.previousValue,m.value,m.dir,y,a]);return(0,g.jsx)(et,{asChild:!0,children:(0,g.jsx)(v.qW,{id:w,"aria-labelledby":x,"data-motion":j,"data-orientation":m.orientation,...f,ref:p,disableOutsidePointerEvents:!1,onDismiss:()=>{var e;let t=new Event(J,{bubbles:!0,cancelable:!0});null===(e=h.current)||void 0===e||e.dispatchEvent(t)},onFocusOutside:(0,i.m)(e.onFocusOutside,e=>{var t;u();let n=e.target;(null===(t=m.rootNavigationMenu)||void 0===t?void 0:t.contains(n))&&e.preventDefault()}),onPointerDownOutside:(0,i.m)(e.onPointerDownOutside,e=>{var t;let n=e.target,r=y().some(e=>{var t;return null===(t=e.ref.current)||void 0===t?void 0:t.contains(n)}),a=m.isRootMenu&&(null===(t=m.viewport)||void 0===t?void 0:t.contains(n));(r||a||!m.isRootMenu)&&e.preventDefault()}),onKeyDown:(0,i.m)(e.onKeyDown,e=>{let t=e.altKey||e.ctrlKey||e.metaKey;if("Tab"===e.key&&!t){let t=ea(e.currentTarget),r=document.activeElement,a=t.findIndex(e=>e===r);if(eo(e.shiftKey?t.slice(0,a).reverse():t.slice(a+1,t.length)))e.preventDefault();else{var n;null===(n=l.current)||void 0===n||n.focus()}}}),onEscapeKeyDown:(0,i.m)(e.onEscapeKeyDown,e=>{s.current=!0})})})}),X="NavigationMenuViewport",Z=r.forwardRef((e,t)=>{let{forceMount:n,...r}=e,a=!!M(X,e.__scopeNavigationMenu).value;return(0,g.jsx)(u.C,{present:n||a,children:(0,g.jsx)(ee,{...r,ref:t})})});Z.displayName=X;var ee=r.forwardRef((e,t)=>{let{__scopeNavigationMenu:n,children:a,...o}=e,s=M(X,n),c=(0,d.s)(t,s.onViewportChange),f=L($,e.__scopeNavigationMenu),[m,v]=r.useState(null),[h,p]=r.useState(null),x=m?(null==m?void 0:m.width)+"px":void 0,w=m?(null==m?void 0:m.height)+"px":void 0,y=!!s.value,b=y?s.value:s.previousValue;return ei(h,()=>{h&&v({width:h.offsetWidth,height:h.offsetHeight})}),(0,g.jsx)(l.sG.div,{"data-state":el(y),"data-orientation":s.orientation,...o,ref:c,style:{pointerEvents:!y&&s.isRootMenu?"none":void 0,"--radix-navigation-menu-viewport-width":x,"--radix-navigation-menu-viewport-height":w,...o.style},onPointerEnter:(0,i.m)(e.onPointerEnter,s.onContentEnter),onPointerLeave:(0,i.m)(e.onPointerLeave,ec(s.onContentLeave)),children:Array.from(f.items).map(e=>{let[t,{ref:n,forceMount:r,...a}]=e,o=b===t;return(0,g.jsx)(u.C,{present:r||o,children:(0,g.jsx)(Y,{...a,ref:(0,d.t)(n,e=>{o&&e&&p(e)})})},t)})})}),et=r.forwardRef((e,t)=>{let{__scopeNavigationMenu:n,...r}=e,a=M("FocusGroup",n);return(0,g.jsx)(C.Provider,{scope:n,children:(0,g.jsx)(C.Slot,{scope:n,children:(0,g.jsx)(l.sG.div,{dir:a.dir,...r,ref:t})})})}),en=["ArrowRight","ArrowLeft","ArrowUp","ArrowDown"],er=r.forwardRef((e,t)=>{let{__scopeNavigationMenu:n,...r}=e,a=j(n),o=M("FocusGroupItem",n);return(0,g.jsx)(C.ItemSlot,{scope:n,children:(0,g.jsx)(l.sG.button,{...r,ref:t,onKeyDown:(0,i.m)(e.onKeyDown,e=>{if(["Home","End",...en].includes(e.key)){let t=a().map(e=>e.ref.current);if(["rtl"===o.dir?"ArrowRight":"ArrowLeft","ArrowUp","End"].includes(e.key)&&t.reverse(),en.includes(e.key)){let n=t.indexOf(e.currentTarget);t=t.slice(n+1)}setTimeout(()=>eo(t)),e.preventDefault()}})})})});function ea(e){let t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>{let t="INPUT"===e.tagName&&"hidden"===e.type;return e.disabled||e.hidden||t?NodeFilter.FILTER_SKIP:e.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function eo(e){let t=document.activeElement;return e.some(e=>e===t||(e.focus(),document.activeElement!==t))}function ei(e,t){let n=(0,p.c)(t);(0,h.N)(()=>{let t=0;if(e){let r=new ResizeObserver(()=>{cancelAnimationFrame(t),t=window.requestAnimationFrame(n)});return r.observe(e),()=>{window.cancelAnimationFrame(t),r.unobserve(e)}}},[e,n])}function el(e){return e?"open":"closed"}function es(e,t){return"".concat(e,"-trigger-").concat(t)}function ed(e,t){return"".concat(e,"-content-").concat(t)}function ec(e){return t=>"mouse"===t.pointerType?e(t):void 0}var eu=S,ef=D,em=z,ev=V,eh=G,ep=q,eg=Z},7582:(e,t,n)=>{n.d(t,{LanguageToggle:()=>s,LanguageToggleText:()=>d});var r=n(475),a=n(9250),o=n(6263),i=n(3552),l=n(2673);function s(e){let t=(0,a.s)();if(!t.locales)throw Error("Missing `<I18nProvider />`");return(0,r.jsxs)(o.AM,{children:[(0,r.jsx)(o.Wv,{"aria-label":t.text.chooseLanguage,...e,className:(0,i.QP)((0,l.r)({color:"ghost",className:"gap-1.5 p-1.5"}),e.className),children:e.children}),(0,r.jsxs)(o.hl,{className:"flex flex-col overflow-hidden p-0",children:[(0,r.jsx)("p",{className:"mb-1 p-2 text-xs font-medium text-fd-muted-foreground",children:t.text.chooseLanguage}),t.locales.map(e=>(0,r.jsx)("button",{type:"button",className:(0,i.QP)("p-2 text-start text-sm",e.locale===t.locale?"bg-fd-primary/10 font-medium text-fd-primary":"hover:bg-fd-accent hover:text-fd-accent-foreground"),onClick:()=>{var n;null===(n=t.onChange)||void 0===n||n.call(t,e.locale)},children:e.name},e.locale))]})]})}function d(e){var t,n;let o=(0,a.s)(),i=null===(n=o.locales)||void 0===n?void 0:null===(t=n.find(e=>e.locale===o.locale))||void 0===t?void 0:t.name;return(0,r.jsx)("span",{...e,children:i})}},2216:(e,t,n)=>{n.d(t,{LargeSearchToggle:()=>c,SearchToggle:()=>d});var r=n(475),a=n(9990),o=n(6090),i=n(9250),l=n(3552),s=n(2673);function d(e){let{setOpenSearch:t}=(0,o.$)();return(0,r.jsx)("button",{type:"button",className:(0,l.QP)((0,s.r)({size:"icon",color:"ghost",className:e.className})),"data-search":"","aria-label":"Open Search",onClick:()=>{t(!0)},children:(0,r.jsx)(a.A,{})})}function c(e){let{hotKey:t,setOpenSearch:n}=(0,o.$)(),{text:s}=(0,i.s)();return(0,r.jsxs)("button",{type:"button","data-search-full":"",...e,className:(0,l.QP)("inline-flex items-center gap-2 rounded-full border bg-fd-secondary/50 p-1.5 text-sm text-fd-muted-foreground transition-colors hover:bg-fd-accent hover:text-fd-accent-foreground",e.className),onClick:()=>{n(!0)},children:[(0,r.jsx)(a.A,{className:"ms-1 size-4"}),s.search,(0,r.jsx)("div",{className:"ms-auto inline-flex gap-0.5",children:t.map((e,t)=>(0,r.jsx)("kbd",{className:"rounded-md border bg-fd-background px-1.5",children:e.display},t))})]})}},3568:(e,t,n)=>{n.d(t,{ThemeToggle:()=>u});var r=n(475),a=n(7609),o=n(9967);let i=(0,o.A)("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]),l=(0,o.A)("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);var s=n(7475),d=n(3552);let c=(0,a.F)("size-7 rounded-full p-1.5 text-fd-muted-foreground",{variants:{dark:{true:"dark:bg-fd-accent dark:text-fd-accent-foreground",false:"bg-fd-accent text-fd-accent-foreground dark:bg-transparent dark:text-fd-muted-foreground"}}});function u(e){let{className:t,...n}=e,{setTheme:a,resolvedTheme:o}=(0,s.D)();return(0,r.jsxs)("button",{type:"button",className:(0,d.QP)("inline-flex items-center rounded-full border p-[3px]",t),"data-theme-toggle":"","aria-label":"Toggle Theme",onClick:()=>{a("dark"===o?"light":"dark")},...n,children:[(0,r.jsx)(i,{className:(0,d.QP)(c({dark:!1}))}),(0,r.jsx)(l,{className:(0,d.QP)(c({dark:!0}))})]})}},7837:(e,t,n)=>{n.d(t,{JD:()=>s,KS:()=>l,QW:()=>f,Ws:()=>u,hA:()=>c,wd:()=>d});var r=n(475),a=n(107),o=n(7866),i=n(3552);let l=o.Root;o.List;let s=o.Item,d=a.forwardRef(({className:e,children:t,...n},a)=>(0,r.jsx)(o.Trigger,{ref:a,className:(0,i.QP)("data-[state=open]:bg-fd-accent/50",e),...n,children:t}));d.displayName=o.Trigger.displayName;let c=a.forwardRef(({className:e,...t},n)=>(0,r.jsx)(o.Content,{ref:n,className:(0,i.QP)("absolute inset-x-0 top-0 data-[motion=from-end]:animate-fd-enterFromRight data-[motion=from-start]:animate-fd-enterFromLeft data-[motion=to-end]:animate-fd-exitToRight data-[motion=to-start]:animate-fd-exitToLeft",e),...t}));c.displayName=o.Content.displayName;let u=o.Link,f=a.forwardRef(({className:e,...t},n)=>(0,r.jsx)("div",{ref:n,className:"flex w-full justify-center",children:(0,r.jsx)(o.Viewport,{...t,className:(0,i.QP)("relative h-[var(--radix-navigation-menu-viewport-height)] w-full origin-[top_center] overflow-hidden text-fd-popover-foreground transition-[width,height] duration-300 data-[state=closed]:animate-fd-nav-menu-out data-[state=open]:animate-fd-nav-menu-in",e)})}));f.displayName=o.Viewport.displayName},6090:(e,t,n)=>{n.d(t,{$:()=>i,SearchOnly:()=>d,Y:()=>s});var r=n(475),a=n(107);let o=(0,a.createContext)({enabled:!1,hotKey:[],setOpenSearch:()=>void 0});function i(){return(0,a.useContext)(o)}function l(){let[e,t]=(0,a.useState)("⌘");return(0,a.useEffect)(()=>{window.navigator.userAgent.includes("Windows")&&t("Ctrl")},[]),e}function s(e){let{SearchDialog:t,children:n,preload:i=!0,options:s,hotKey:d=[{key:e=>e.metaKey||e.ctrlKey,display:(0,r.jsx)(l,{})},{key:"k",display:"K"}],links:c}=e,[u,f]=(0,a.useState)(!i&&void 0);return(0,a.useEffect)(()=>{let e=e=>{d.every(t=>"string"==typeof t.key?e.key===t.key:t.key(e))&&(f(!0),e.preventDefault())};return window.addEventListener("keydown",e),()=>{window.removeEventListener("keydown",e)}},[d]),(0,r.jsxs)(o.Provider,{value:(0,a.useMemo)(()=>({enabled:!0,hotKey:d,setOpenSearch:f}),[d]),children:[void 0!==u&&(0,r.jsx)(t,{open:u,onOpenChange:f,links:c,...s}),n]})}function d(e){let{children:t}=e;if(i().enabled)return t}},9184:(e,t,n)=>{n.d(t,{MenuLinkItem:()=>u});var r=n(475),a=n(7230),o=n(3552),i=n(7837),l=n(5334),s=n(7609),d=n(2673);let c=(0,s.F)("",{variants:{variant:{main:"inline-flex items-center gap-2 py-1.5 transition-colors hover:text-fd-popover-foreground/50 data-[active=true]:font-medium data-[active=true]:text-fd-primary [&_svg]:size-4",icon:(0,d.r)({size:"icon",color:"ghost"}),button:(0,d.r)({color:"secondary",className:"gap-1.5 [&_svg]:size-4"})}},defaultVariants:{variant:"main"}});function u(e){let{item:t,...n}=e;return"custom"===t.type?(0,r.jsx)("div",{className:(0,o.QP)("grid",n.className),children:t.children}):"menu"===t.type?(0,r.jsxs)("div",{className:(0,o.QP)("mb-4 flex flex-col",n.className),children:[(0,r.jsx)("p",{className:"mb-1 text-sm text-fd-muted-foreground",children:t.url?(0,r.jsx)(i.Ws,{asChild:!0,children:(0,r.jsxs)(l.A,{href:t.url,children:[t.icon,t.text]})}):(0,r.jsxs)(r.Fragment,{children:[t.icon,t.text]})}),t.items.map((e,t)=>(0,r.jsx)(u,{item:e},t))]}):(0,r.jsx)(i.Ws,{asChild:!0,children:(0,r.jsxs)(a.BaseLinkItem,{item:t,className:(0,o.QP)(c({variant:t.type}),n.className),"aria-label":"icon"===t.type?t.label:void 0,children:[t.icon,"icon"===t.type?void 0:t.text]})})}},4477:(e,t,n)=>{n.d(t,{Navbar:()=>m,NavbarLink:()=>x,NavbarMenu:()=>v,NavbarMenuContent:()=>h,NavbarMenuItem:()=>w,NavbarMenuTrigger:()=>p});var r=n(475),a=n(107),o=n(7609),i=n(5334),l=n(3552),s=n(7230),d=n(7837),c=n(3038),u=n(2673);let f=(0,o.F)("inline-flex items-center gap-1 p-2 text-fd-muted-foreground transition-colors hover:text-fd-accent-foreground data-[active=true]:text-fd-primary [&_svg]:size-4");function m(e){let[t,n]=(0,a.useState)(""),{isTransparent:o}=(0,c.h)();return(0,r.jsx)(d.KS,{value:t,onValueChange:n,asChild:!0,children:(0,r.jsxs)("header",{id:"nd-nav",...e,className:(0,l.QP)("fixed left-1/2 top-[var(--fd-banner-height)] z-40 w-full max-w-fd-container -translate-x-1/2 border-b border-fd-foreground/10 transition-colors lg:mt-2 lg:w-[calc(100%-1rem)] lg:rounded-2xl lg:border",t.length>0?"shadow-lg":"shadow-sm",(!o||t.length>0)&&"bg-fd-background/80 backdrop-blur-lg",e.className),children:[(0,r.jsx)("nav",{className:"flex h-14 w-full flex-row items-center gap-6 px-4 lg:h-12",children:e.children}),(0,r.jsx)(d.QW,{})]})})}let v=d.JD;function h(e){return(0,r.jsx)(d.hA,{...e,className:(0,l.QP)("grid grid-cols-1 gap-3 px-4 pb-4 md:grid-cols-2 lg:grid-cols-3",e.className),children:e.children})}function p(e){return(0,r.jsx)(d.wd,{...e,className:(0,l.QP)(f(),"rounded-md",e.className),children:e.children})}let g=(0,o.F)(void 0,{variants:{variant:{main:f(),button:(0,u.r)({color:"secondary",className:"gap-1.5 [&_svg]:size-4"}),icon:(0,u.r)({color:"ghost",size:"icon"})}},defaultVariants:{variant:"main"}});function x(e){let{item:t,variant:n,...a}=e;return(0,r.jsx)(d.JD,{className:"list-none",children:(0,r.jsx)(d.Ws,{asChild:!0,children:(0,r.jsx)(s.BaseLinkItem,{...a,item:t,className:(0,l.QP)(g({variant:n}),a.className),children:a.children})})})}function w(e){return(0,r.jsx)(d.Ws,{asChild:!0,children:(0,r.jsx)(i.A,{...e,className:(0,l.QP)("flex flex-col gap-2 rounded-lg border bg-fd-card p-3 transition-colors hover:bg-fd-accent/80 hover:text-fd-accent-foreground",e.className)})})}},7230:(e,t,n)=>{n.r(t),n.d(t,{BaseLinkItem:()=>s});var r=n(475),a=n(5334),o=n(6118),i=n(107),l=n(8604);let s=(0,i.forwardRef)((e,t)=>{var n;let{item:i,...s}=e,d=(0,o.usePathname)(),c=null!==(n=i.active)&&void 0!==n?n:"url",u="none"!==c&&(0,l.$)(i.url,d,"nested-url"===c);return(0,r.jsx)(a.A,{ref:t,href:i.url,external:i.external,...s,"data-active":u,children:s.children})});s.displayName="BaseLinkItem"},8604:(e,t,n)=>{n.d(t,{$:()=>r});function r(e,t,n=!0){return e===t||n&&t.startsWith(`${e}/`)}},7475:(e,t,n)=>{n.d(t,{D:()=>c,N:()=>u});var r=n(107),a=(e,t,n,r,a,o,i,l)=>{let s=document.documentElement,d=["light","dark"];function c(t){(Array.isArray(e)?e:[e]).forEach(e=>{let n="class"===e,r=n&&o?a.map(e=>o[e]||e):a;n?(s.classList.remove(...r),s.classList.add(t)):s.setAttribute(e,t)}),l&&d.includes(t)&&(s.style.colorScheme=t)}if(r)c(r);else try{let e=localStorage.getItem(t)||n,r=i&&"system"===e?window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":e;c(r)}catch(e){}},o=["light","dark"],i="(prefers-color-scheme: dark)",l="undefined"==typeof window,s=r.createContext(void 0),d={setTheme:e=>{},themes:[]},c=()=>{var e;return null!=(e=r.useContext(s))?e:d},u=e=>r.useContext(s)?r.createElement(r.Fragment,null,e.children):r.createElement(m,{...e}),f=["light","dark"],m=e=>{let{forcedTheme:t,disableTransitionOnChange:n=!1,enableSystem:a=!0,enableColorScheme:l=!0,storageKey:d="theme",themes:c=f,defaultTheme:u=a?"system":"light",attribute:m="data-theme",value:x,children:w,nonce:y,scriptProps:b}=e,[N,C]=r.useState(()=>h(d,u)),[j,k]=r.useState(()=>h(d)),E=x?Object.values(x):c,T=r.useCallback(e=>{let t=e;if(!t)return;"system"===e&&a&&(t=g());let r=x?x[t]:t,i=n?p(y):null,s=document.documentElement,d=e=>{"class"===e?(s.classList.remove(...E),r&&s.classList.add(r)):e.startsWith("data-")&&(r?s.setAttribute(e,r):s.removeAttribute(e))};if(Array.isArray(m)?m.forEach(d):d(m),l){let e=o.includes(u)?u:null,n=o.includes(t)?t:e;s.style.colorScheme=n}null==i||i()},[y]),R=r.useCallback(e=>{let t="function"==typeof e?e(N):e;C(t);try{localStorage.setItem(d,t)}catch(e){}},[N]),M=r.useCallback(e=>{k(g(e)),"system"===N&&a&&!t&&T("system")},[N,t]);r.useEffect(()=>{let e=window.matchMedia(i);return e.addListener(M),M(e),()=>e.removeListener(M)},[M]),r.useEffect(()=>{let e=e=>{e.key===d&&(e.newValue?C(e.newValue):R(u))};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[R]),r.useEffect(()=>{T(null!=t?t:N)},[t,N]);let P=r.useMemo(()=>({theme:N,setTheme:R,forcedTheme:t,resolvedTheme:"system"===N?j:N,themes:a?[...c,"system"]:c,systemTheme:a?j:void 0}),[N,R,t,j,a,c]);return r.createElement(s.Provider,{value:P},r.createElement(v,{forcedTheme:t,storageKey:d,attribute:m,enableSystem:a,enableColorScheme:l,defaultTheme:u,value:x,themes:c,nonce:y,scriptProps:b}),w)},v=r.memo(e=>{let{forcedTheme:t,storageKey:n,attribute:o,enableSystem:i,enableColorScheme:l,defaultTheme:s,value:d,themes:c,nonce:u,scriptProps:f}=e,m=JSON.stringify([o,n,s,t,c,d,i,l]).slice(1,-1);return r.createElement("script",{...f,suppressHydrationWarning:!0,nonce:"undefined"==typeof window?u:"",dangerouslySetInnerHTML:{__html:"(".concat(a.toString(),")(").concat(m,")")}})}),h=(e,t)=>{let n;if(!l){try{n=localStorage.getItem(e)||void 0}catch(e){}return n||t}},p=e=>{let t=document.createElement("style");return e&&t.setAttribute("nonce",e),t.appendChild(document.createTextNode("*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(t),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(t)},1)}},g=e=>(e||(e=window.matchMedia(i)),e.matches?"dark":"light")}}]);