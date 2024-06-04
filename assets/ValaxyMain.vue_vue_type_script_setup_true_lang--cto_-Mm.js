import{_ as St}from"./GLFooter.vue_vue_type_script_setup_true_lang-GnTinhqk.js";import{n as Ht,q as ve,s as U,v as ne,x as xt,f as Tt,y as Be,z as Oe,d as Ve,A as Nt,B as Mt,C as Rt,o as me,c as ue,l as b,k as X,b as A,t as Se,e as K,D as jt,a as He,w as qt}from"./app-B2YxGJaF.js";function Bt(e,t){const n=document.createElement("div");n.className=t,e.parentNode.insertBefore(n,e),e.parentNode.removeChild(e),n.appendChild(e)}function Vt(e=document){e.querySelectorAll("table").forEach(t=>{const n=document.createElement("div");n.className="table-container",Bt(t,"table-container")})}let Q=[];function Pt(e){Q.push(e),Ht(()=>{Q=Q.filter(t=>t!==e)})}const Ut=()=>Q.forEach(e=>e()),Y=Ut;function Dt(){if(ve){const e=new WeakMap;window.addEventListener("click",t=>{var o;const n=t.target;if(n.matches('div[class*="language-"] > button.copy')){const a=n.parentElement,i=(o=n.nextElementSibling)==null?void 0:o.nextElementSibling;if(!a||!i)return;const m=/language-(shellscript|shell|bash|sh|zsh)/.test(a.className);let f="";i.querySelectorAll("span.line:not(.diff.remove)").forEach(E=>f+=`${E.textContent||""}
`),f=f.slice(0,-1),m&&(f=f.replace(/^ *(\$|>) /gm,"").trim()),Ft(f).then(()=>{n.classList.add("copied"),clearTimeout(e.get(n));const E=setTimeout(()=>{n.classList.remove("copied"),n.blur(),e.delete(n)},2e3);e.set(n,E)})}})}}async function Ft(e){try{return navigator.clipboard.writeText(e)}catch{const t=document.createElement("textarea"),n=document.activeElement;t.value=e,t.setAttribute("readonly",""),t.style.contain="strict",t.style.position="absolute",t.style.left="-9999px",t.style.fontSize="12pt";const o=document.getSelection(),a=o?o.rangeCount>0&&o.getRangeAt(0):null;document.body.appendChild(t),t.select(),t.selectionStart=0,t.selectionEnd=e.length,document.execCommand("copy"),document.body.removeChild(t),a&&(o.removeAllRanges(),o.addRange(a)),n&&n.focus()}}/*! medium-zoom 1.1.0 | MIT License | https://github.com/francoischalifour/medium-zoom */var S=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},J=function(t){return t.tagName==="IMG"},Gt=function(t){return NodeList.prototype.isPrototypeOf(t)},ee=function(t){return t&&t.nodeType===1},xe=function(t){var n=t.currentSrc||t.src;return n.substr(-4).toLowerCase()===".svg"},Te=function(t){try{return Array.isArray(t)?t.filter(J):Gt(t)?[].slice.call(t).filter(J):ee(t)?[t].filter(J):typeof t=="string"?[].slice.call(document.querySelectorAll(t)).filter(J):[]}catch{throw new TypeError(`The provided selector is invalid.
Expects a CSS selector, a Node element, a NodeList or an array.
See: https://github.com/francoischalifour/medium-zoom`)}},Zt=function(t){var n=document.createElement("div");return n.classList.add("medium-zoom-overlay"),n.style.background=t,n},Wt=function(t){var n=t.getBoundingClientRect(),o=n.top,a=n.left,i=n.width,m=n.height,f=t.cloneNode(),E=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,T=window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0;return f.removeAttribute("id"),f.style.position="absolute",f.style.top=o+E+"px",f.style.left=a+T+"px",f.style.width=i+"px",f.style.height=m+"px",f.style.transform="",f},R=function(t,n){var o=S({bubbles:!1,cancelable:!1,detail:void 0},n);if(typeof window.CustomEvent=="function")return new CustomEvent(t,o);var a=document.createEvent("CustomEvent");return a.initCustomEvent(t,o.bubbles,o.cancelable,o.detail),a},Yt=function e(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=window.Promise||function(s){function l(){}s(l,l)},a=function(s){var l=s.target;if(l===Z){$();return}_.indexOf(l)!==-1&&Ae({target:l})},i=function(){if(!(N||!r.original)){var s=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;Math.abs(ke-s)>c.scrollOffset&&setTimeout($,150)}},m=function(s){var l=s.key||s.keyCode;(l==="Escape"||l==="Esc"||l===27)&&$()},f=function(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},l=s;if(s.background&&(Z.style.background=s.background),s.container&&s.container instanceof Object&&(l.container=S({},c.container,s.container)),s.template){var u=ee(s.template)?s.template:document.querySelector(s.template);l.template=u}return c=S({},c,l),_.forEach(function(g){g.dispatchEvent(R("medium-zoom:update",{detail:{zoom:p}}))}),p},E=function(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return e(S({},c,s))},T=function(){for(var s=arguments.length,l=Array(s),u=0;u<s;u++)l[u]=arguments[u];var g=l.reduce(function(d,h){return[].concat(d,Te(h))},[]);return g.filter(function(d){return _.indexOf(d)===-1}).forEach(function(d){_.push(d),d.classList.add("medium-zoom-image")}),G.forEach(function(d){var h=d.type,z=d.listener,M=d.options;g.forEach(function(L){L.addEventListener(h,z,M)})}),p},gt=function(){for(var s=arguments.length,l=Array(s),u=0;u<s;u++)l[u]=arguments[u];r.zoomed&&$();var g=l.length>0?l.reduce(function(d,h){return[].concat(d,Te(h))},[]):_;return g.forEach(function(d){d.classList.remove("medium-zoom-image"),d.dispatchEvent(R("medium-zoom:detach",{detail:{zoom:p}}))}),_=_.filter(function(d){return g.indexOf(d)===-1}),p},pt=function(s,l){var u=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return _.forEach(function(g){g.addEventListener("medium-zoom:"+s,l,u)}),G.push({type:"medium-zoom:"+s,listener:l,options:u}),p},vt=function(s,l){var u=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return _.forEach(function(g){g.removeEventListener("medium-zoom:"+s,l,u)}),G=G.filter(function(g){return!(g.type==="medium-zoom:"+s&&g.listener.toString()===l.toString())}),p},Le=function(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},l=s.target,u=function(){var d={width:document.documentElement.clientWidth,height:document.documentElement.clientHeight,left:0,top:0,right:0,bottom:0},h=void 0,z=void 0;if(c.container)if(c.container instanceof Object)d=S({},d,c.container),h=d.width-d.left-d.right-c.margin*2,z=d.height-d.top-d.bottom-c.margin*2;else{var M=ee(c.container)?c.container:document.querySelector(c.container),L=M.getBoundingClientRect(),se=L.width,_t=L.height,Et=L.left,zt=L.top;d=S({},d,{width:se,height:_t,left:Et,top:zt})}h=h||d.width-c.margin*2,z=z||d.height-c.margin*2;var B=r.zoomedHd||r.original,$t=xe(B)?h:B.naturalWidth||h,wt=xe(B)?z:B.naturalHeight||z,W=B.getBoundingClientRect(),Ct=W.top,Lt=W.left,le=W.width,de=W.height,At=Math.min(Math.max(le,$t),h)/le,kt=Math.min(Math.max(de,wt),z)/de,ce=Math.min(At,kt),It=(-Lt+(h-le)/2+c.margin+d.left)/ce,Ot=(-Ct+(z-de)/2+c.margin+d.top)/ce,Ie="scale("+ce+") translate3d("+It+"px, "+Ot+"px, 0)";r.zoomed.style.transform=Ie,r.zoomedHd&&(r.zoomedHd.style.transform=Ie)};return new o(function(g){if(l&&_.indexOf(l)===-1){g(p);return}var d=function se(){N=!1,r.zoomed.removeEventListener("transitionend",se),r.original.dispatchEvent(R("medium-zoom:opened",{detail:{zoom:p}})),g(p)};if(r.zoomed){g(p);return}if(l)r.original=l;else if(_.length>0){var h=_;r.original=h[0]}else{g(p);return}if(r.original.dispatchEvent(R("medium-zoom:open",{detail:{zoom:p}})),ke=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,N=!0,r.zoomed=Wt(r.original),document.body.appendChild(Z),c.template){var z=ee(c.template)?c.template:document.querySelector(c.template);r.template=document.createElement("div"),r.template.appendChild(z.content.cloneNode(!0)),document.body.appendChild(r.template)}if(r.original.parentElement&&r.original.parentElement.tagName==="PICTURE"&&r.original.currentSrc&&(r.zoomed.src=r.original.currentSrc),document.body.appendChild(r.zoomed),window.requestAnimationFrame(function(){document.body.classList.add("medium-zoom--opened")}),r.original.classList.add("medium-zoom-image--hidden"),r.zoomed.classList.add("medium-zoom-image--opened"),r.zoomed.addEventListener("click",$),r.zoomed.addEventListener("transitionend",d),r.original.getAttribute("data-zoom-src")){r.zoomedHd=r.zoomed.cloneNode(),r.zoomedHd.removeAttribute("srcset"),r.zoomedHd.removeAttribute("sizes"),r.zoomedHd.removeAttribute("loading"),r.zoomedHd.src=r.zoomed.getAttribute("data-zoom-src"),r.zoomedHd.onerror=function(){clearInterval(M),console.warn("Unable to reach the zoom image target "+r.zoomedHd.src),r.zoomedHd=null,u()};var M=setInterval(function(){r.zoomedHd.complete&&(clearInterval(M),r.zoomedHd.classList.add("medium-zoom-image--opened"),r.zoomedHd.addEventListener("click",$),document.body.appendChild(r.zoomedHd),u())},10)}else if(r.original.hasAttribute("srcset")){r.zoomedHd=r.zoomed.cloneNode(),r.zoomedHd.removeAttribute("sizes"),r.zoomedHd.removeAttribute("loading");var L=r.zoomedHd.addEventListener("load",function(){r.zoomedHd.removeEventListener("load",L),r.zoomedHd.classList.add("medium-zoom-image--opened"),r.zoomedHd.addEventListener("click",$),document.body.appendChild(r.zoomedHd),u()})}else u()})},$=function(){return new o(function(s){if(N||!r.original){s(p);return}var l=function u(){r.original.classList.remove("medium-zoom-image--hidden"),document.body.removeChild(r.zoomed),r.zoomedHd&&document.body.removeChild(r.zoomedHd),document.body.removeChild(Z),r.zoomed.classList.remove("medium-zoom-image--opened"),r.template&&document.body.removeChild(r.template),N=!1,r.zoomed.removeEventListener("transitionend",u),r.original.dispatchEvent(R("medium-zoom:closed",{detail:{zoom:p}})),r.original=null,r.zoomed=null,r.zoomedHd=null,r.template=null,s(p)};N=!0,document.body.classList.remove("medium-zoom--opened"),r.zoomed.style.transform="",r.zoomedHd&&(r.zoomedHd.style.transform=""),r.template&&(r.template.style.transition="opacity 150ms",r.template.style.opacity=0),r.original.dispatchEvent(R("medium-zoom:close",{detail:{zoom:p}})),r.zoomed.addEventListener("transitionend",l)})},Ae=function(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},l=s.target;return r.original?$():Le({target:l})},ht=function(){return c},bt=function(){return _},yt=function(){return r.original},_=[],G=[],N=!1,ke=0,c=n,r={original:null,zoomed:null,zoomedHd:null,template:null};Object.prototype.toString.call(t)==="[object Object]"?c=t:(t||typeof t=="string")&&T(t),c=S({margin:0,background:"#fff",scrollOffset:40,container:null,template:null},c);var Z=Zt(c.background);document.addEventListener("click",a),document.addEventListener("keyup",m),document.addEventListener("scroll",i),window.addEventListener("resize",$);var p={open:Le,close:$,toggle:Ae,update:f,clone:E,attach:T,detach:gt,on:pt,off:vt,getOptions:ht,getImages:bt,getZoomedImage:yt};return p};function Jt(e,t){t===void 0&&(t={});var n=t.insertAt;if(!(typeof document>"u")){var o=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css",n==="top"&&o.firstChild?o.insertBefore(a,o.firstChild):o.appendChild(a),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(document.createTextNode(e))}}var Xt=".medium-zoom-overlay{position:fixed;top:0;right:0;bottom:0;left:0;opacity:0;transition:opacity .3s;will-change:opacity}.medium-zoom--opened .medium-zoom-overlay{cursor:pointer;cursor:zoom-out;opacity:1}.medium-zoom-image{cursor:pointer;cursor:zoom-in;transition:transform .3s cubic-bezier(.2,0,.2,1)!important}.medium-zoom-image--hidden{visibility:hidden}.medium-zoom-image--opened{position:relative;cursor:pointer;cursor:zoom-out;will-change:transform}";Jt(Xt);function Kt(){const t=U().value.mediumZoom;ne(()=>{t.enable&&Yt(t.selector||".markdown-body img",{background:"var(--medium-zoom-c-bg, rgba(0, 0, 0, 0.8))",...t.options})})}function Qt(){const e=U(),t=xt();ve&&window.addEventListener("click",n=>{const o=n.target;if(o.matches('[class*="language-"] > button.collapse')){const a=o.parentElement;a==null||a.removeAttribute("style"),a==null||a.classList.remove("folded")}}),ne(()=>{const n=document.querySelectorAll('div[class*="language-"]'),o=e.value.codeHeightLimit,a=t.value.codeHeightLimit;let i;if(typeof a!="number"||a<=0){if(o===void 0||o<=0)return;i=o}else i=a;for(const m of Array.from(n))m.scrollHeight>i&&m.classList.add("folded")})}function en(){const e=U(),t=Tt(()=>e.value.cdn.prefix);Be({link:[{rel:"stylesheet",href:`${t.value}aplayer/dist/APlayer.min.css`}]}),Oe(`${t.value}aplayer/dist/APlayer.min.js`,()=>{Oe(`${t.value}meting@2/dist/Meting.min.js`)})}function tn(){Be({script:[{src:"https://static.codepen.io/assets/embed/ei.js",async:!0}]})}const I=typeof window<"u",Pe=I&&!("onscroll"in window)||typeof navigator<"u"&&/(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent),Ue=I&&window.devicePixelRatio>1,nn={elements_selector:".lazy",container:Pe||I?document:null,threshold:300,thresholds:null,data_src:"src",data_srcset:"srcset",data_sizes:"sizes",data_bg:"bg",data_bg_hidpi:"bg-hidpi",data_bg_multi:"bg-multi",data_bg_multi_hidpi:"bg-multi-hidpi",data_bg_set:"bg-set",data_poster:"poster",class_applied:"applied",class_loading:"loading",class_loaded:"loaded",class_error:"error",class_entered:"entered",class_exited:"exited",unobserve_completed:!0,unobserve_entered:!1,cancel_on_exit:!0,callback_enter:null,callback_exit:null,callback_applied:null,callback_loading:null,callback_loaded:null,callback_error:null,callback_finish:null,callback_cancel:null,use_native:!1,restore_on_error:!1},De=e=>Object.assign({},nn,e),Ne=function(e,t){let n;const o="LazyLoad::Initialized",a=new e(t);try{n=new CustomEvent(o,{detail:{instance:a}})}catch{n=document.createEvent("CustomEvent"),n.initCustomEvent(o,!1,!1,{instance:a})}window.dispatchEvent(n)},on=(e,t)=>{if(t)if(t.length)for(let n,o=0;n=t[o];o+=1)Ne(e,n);else Ne(e,t)},C="src",he="srcset",be="sizes",Fe="poster",D="llOriginalAttrs",Ge="data",ye="loading",Ze="loaded",We="applied",an="entered",_e="error",Ye="native",Je="data-",Xe="ll-status",y=(e,t)=>e.getAttribute(Je+t),rn=(e,t,n)=>{const o=Je+t;n!==null?e.setAttribute(o,n):e.removeAttribute(o)},F=e=>y(e,Xe),x=(e,t)=>rn(e,Xe,t),oe=e=>x(e,null),Ee=e=>F(e)===null,sn=e=>F(e)===ye,ln=e=>F(e)===_e,ze=e=>F(e)===Ye,dn=[ye,Ze,We,_e],cn=e=>dn.indexOf(F(e))>=0,O=(e,t,n,o)=>{e&&typeof e=="function"&&(o===void 0?n===void 0?e(t):e(t,n):e(t,n,o))},q=(e,t)=>{I&&t!==""&&e.classList.add(t)},w=(e,t)=>{I&&t!==""&&e.classList.remove(t)},mn=e=>{e.llTempImage=document.createElement("IMG")},un=e=>{delete e.llTempImage},Ke=e=>e.llTempImage,ae=(e,t)=>{if(!t)return;const n=t._observer;n&&n.unobserve(e)},fn=e=>{e.disconnect()},gn=(e,t,n)=>{t.unobserve_entered&&ae(e,n)},$e=(e,t)=>{e&&(e.loadingCount+=t)},pn=e=>{e&&(e.toLoadCount-=1)},Qe=(e,t)=>{e&&(e.toLoadCount=t)},vn=e=>e.loadingCount>0,hn=e=>e.toLoadCount>0,et=e=>{let t=[];for(let n,o=0;n=e.children[o];o+=1)n.tagName==="SOURCE"&&t.push(n);return t},we=(e,t)=>{const n=e.parentNode;n&&n.tagName==="PICTURE"&&et(n).forEach(t)},tt=(e,t)=>{et(e).forEach(t)},re=[C],nt=[C,Fe],P=[C,he,be],ot=[Ge],ie=e=>!!e[D],at=e=>e[D],rt=e=>delete e[D],j=(e,t)=>{if(ie(e))return;const n={};t.forEach(o=>{n[o]=e.getAttribute(o)}),e[D]=n},bn=e=>{ie(e)||(e[D]={backgroundImage:e.style.backgroundImage})},H=(e,t)=>{if(!ie(e))return;const n=at(e);t.forEach(o=>{((a,i,m)=>{m?a.setAttribute(i,m):a.removeAttribute(i)})(e,o,n[o])})},yn=e=>{if(!ie(e))return;const t=at(e);e.style.backgroundImage=t.backgroundImage},it=(e,t,n)=>{q(e,t.class_applied),x(e,We),n&&(t.unobserve_completed&&ae(e,t),O(t.callback_applied,e,n))},st=(e,t,n)=>{q(e,t.class_loading),x(e,ye),n&&($e(n,1),O(t.callback_loading,e,n))},k=(e,t,n)=>{n&&e.setAttribute(t,n)},Me=(e,t)=>{k(e,be,y(e,t.data_sizes)),k(e,he,y(e,t.data_srcset)),k(e,C,y(e,t.data_src))},_n=(e,t)=>{we(e,n=>{j(n,P),Me(n,t)}),j(e,P),Me(e,t)},En=(e,t)=>{j(e,re),k(e,C,y(e,t.data_src))},zn=(e,t)=>{tt(e,n=>{j(n,re),k(n,C,y(n,t.data_src))}),j(e,nt),k(e,Fe,y(e,t.data_poster)),k(e,C,y(e,t.data_src)),e.load()},$n=(e,t)=>{j(e,ot),k(e,Ge,y(e,t.data_src))},wn=(e,t,n)=>{const o=y(e,t.data_bg),a=y(e,t.data_bg_hidpi),i=Ue&&a?a:o;i&&(e.style.backgroundImage=`url("${i}")`,Ke(e).setAttribute(C,i),st(e,t,n))},Cn=(e,t,n)=>{const o=y(e,t.data_bg_multi),a=y(e,t.data_bg_multi_hidpi),i=Ue&&a?a:o;i&&(e.style.backgroundImage=i,it(e,t,n))},Ln=(e,t,n)=>{const o=y(e,t.data_bg_set);if(!o)return;let a=o.split("|").map(i=>`image-set(${i})`);e.style.backgroundImage=a.join(),it(e,t,n)},lt={IMG:_n,IFRAME:En,VIDEO:zn,OBJECT:$n},An=(e,t)=>{const n=lt[e.tagName];n&&n(e,t)},kn=(e,t,n)=>{const o=lt[e.tagName];o&&(o(e,t),st(e,t,n))},In=["IMG","IFRAME","VIDEO","OBJECT"],On=e=>In.indexOf(e.tagName)>-1,dt=(e,t)=>{!t||vn(t)||hn(t)||O(e.callback_finish,t)},Re=(e,t,n)=>{e.addEventListener(t,n),e.llEvLisnrs[t]=n},Sn=(e,t,n)=>{e.removeEventListener(t,n)},Ce=e=>!!e.llEvLisnrs,Hn=(e,t,n)=>{Ce(e)||(e.llEvLisnrs={});const o=e.tagName==="VIDEO"?"loadeddata":"load";Re(e,o,t),Re(e,"error",n)},fe=e=>{if(!Ce(e))return;const t=e.llEvLisnrs;for(let n in t){const o=t[n];Sn(e,n,o)}delete e.llEvLisnrs},ct=(e,t,n)=>{un(e),$e(n,-1),pn(n),w(e,t.class_loading),t.unobserve_completed&&ae(e,n)},xn=(e,t,n,o)=>{const a=ze(t);ct(t,n,o),q(t,n.class_loaded),x(t,Ze),O(n.callback_loaded,t,o),a||dt(n,o)},Tn=(e,t,n,o)=>{const a=ze(t);ct(t,n,o),q(t,n.class_error),x(t,_e),O(n.callback_error,t,o),n.restore_on_error&&H(t,P),a||dt(n,o)},ge=(e,t,n)=>{const o=Ke(e)||e;Ce(o)||Hn(o,a=>{xn(0,e,t,n),fe(o)},a=>{Tn(0,e,t,n),fe(o)})},pe=(e,t,n)=>{On(e)?((o,a,i)=>{ge(o,a,i),kn(o,a,i)})(e,t,n):((o,a,i)=>{mn(o),ge(o,a,i),bn(o),wn(o,a,i),Cn(o,a,i),Ln(o,a,i)})(e,t,n)},Nn=(e,t,n)=>{e.setAttribute("loading","lazy"),ge(e,t,n),An(e,t),x(e,Ye)},je=e=>{e.removeAttribute(C),e.removeAttribute(he),e.removeAttribute(be)},Mn=e=>{we(e,t=>{je(t)}),je(e)},mt=e=>{we(e,t=>{H(t,P)}),H(e,P)},Rn=e=>{tt(e,t=>{H(t,re)}),H(e,nt),e.load()},jn=e=>{H(e,re)},qn=e=>{H(e,ot)},Bn={IMG:mt,IFRAME:jn,VIDEO:Rn,OBJECT:qn},Vn=(e,t)=>{(n=>{const o=Bn[n.tagName];o?o(n):yn(n)})(e),((n,o)=>{Ee(n)||ze(n)||(w(n,o.class_entered),w(n,o.class_exited),w(n,o.class_applied),w(n,o.class_loading),w(n,o.class_loaded),w(n,o.class_error))})(e,t),oe(e),rt(e)},Pn=(e,t,n,o)=>{n.cancel_on_exit&&sn(e)&&e.tagName==="IMG"&&(fe(e),Mn(e),mt(e),w(e,n.class_loading),$e(o,-1),oe(e),O(n.callback_cancel,e,t,o))},Un=(e,t,n,o)=>{const a=cn(e);x(e,an),q(e,n.class_entered),w(e,n.class_exited),gn(e,n,o),O(n.callback_enter,e,t,o),a||pe(e,n,o)},Dn=(e,t,n,o)=>{Ee(e)||(q(e,n.class_exited),Pn(e,t,n,o),O(n.callback_exit,e,t,o))},Fn=["IMG","IFRAME","VIDEO"],ut=e=>e.use_native&&"loading"in HTMLImageElement.prototype,Gn=(e,t,n)=>{e.forEach(o=>{Fn.indexOf(o.tagName)!==-1&&Nn(o,t,n)}),Qe(n,0)},Zn=e=>e.isIntersecting||e.intersectionRatio>0,Wn=(e,t)=>{t.forEach(n=>{e.observe(n)})},Yn=(e,t)=>{fn(e),Wn(e,t)},Jn=(e,t)=>{ut(e)||(t._observer=new IntersectionObserver(n=>{((o,a,i)=>{o.forEach(m=>Zn(m)?Un(m.target,m,a,i):Dn(m.target,m,a,i))})(n,e,t)},(n=>({root:n.container===document?null:n.container,rootMargin:n.thresholds||n.threshold+"px"}))(e)))},ft=e=>Array.prototype.slice.call(e),te=e=>e.container.querySelectorAll(e.elements_selector),Xn=e=>ft(e).filter(Ee),Kn=e=>ln(e),Qn=e=>ft(e).filter(Kn),qe=(e,t)=>Xn(e||te(t)),eo=(e,t)=>{Qn(te(e)).forEach(n=>{w(n,e.class_error),oe(n)}),t.update()},to=(e,t)=>{I&&(t._onlineHandler=()=>{eo(e,t)},window.addEventListener("online",t._onlineHandler))},no=e=>{I&&window.removeEventListener("online",e._onlineHandler)},V=function(e,t){const n=De(e);this._settings=n,this.loadingCount=0,Jn(n,this),to(n,this),this.update(t)};V.prototype={update:function(e){const t=this._settings,n=qe(e,t);Qe(this,n.length),Pe?this.loadAll(n):ut(t)?Gn(n,t,this):Yn(this._observer,n)},destroy:function(){this._observer&&this._observer.disconnect(),no(this),te(this._settings).forEach(e=>{rt(e)}),delete this._observer,delete this._settings,delete this._onlineHandler,delete this.loadingCount,delete this.toLoadCount},loadAll:function(e){const t=this._settings;qe(e,t).forEach(n=>{ae(n,this),pe(n,t,this)})},restoreAll:function(){const e=this._settings;te(e).forEach(t=>{Vn(t,e)})}},V.load=(e,t)=>{const n=De(t);pe(e,n)},V.resetStatus=e=>{oe(e)},I&&on(V,window.lazyLoadOptions);function oo(e={}){return document.querySelectorAll(".lazy").forEach(t=>{const n=t.getAttribute("src");t.removeAttribute("src"),t.setAttribute("data-src",n??"")}),new V({elements_selector:".lazy",...e})}function ao(){const e=U();e.value.vanillaLazyload.enable&&ne(()=>{oo(e.value.vanillaLazyload)})}function ro(){ve&&window.addEventListener("click",e=>{var n;const t=e.target;if(t.matches(".vp-code-group input")){const o=(n=t.parentElement)==null?void 0:n.parentElement;if(!o)return;const a=Array.from(o.querySelectorAll("input")).indexOf(t);if(a<0)return;const i=o.querySelector(".blocks");if(!i)return;const m=Array.from(i.children).find(T=>T.classList.contains("active"));if(!m)return;const f=i.children[a];if(!f||m===f)return;m.classList.remove("active"),f.classList.add("active");const E=o==null?void 0:o.querySelector(`label[for="${t.id}"]`);E==null||E.scrollIntoView({block:"nearest"})}})}const io={key:0,text:"center"},so=["href"],lo={m:"y-4",class:"end flex justify-center items-center"},co=A("hr",{class:"line inline-flex",w:"full",m:"!y-2"},null,-1),mo={p:"x-4",font:"bold",class:"whitespace-nowrap"},uo=A("hr",{class:"line inline-flex",w:"full",m:"!y-2"},null,-1),fo=Ve({__name:"ValaxyMd",props:{frontmatter:{},excerpt:{}},setup(e){const t=e,{t:n}=Nt(),o=Mt();return Pt(()=>{Vt(o.value)}),ne(()=>{Y()}),Rt(()=>{Y()}),t.frontmatter.aplayer&&en(),t.frontmatter.codepen&&tn(),Dt(),ro(),Qt(),(typeof t.frontmatter.medium_zoom>"u"||t.frontmatter.medium_zoom)&&Kt(),ao(),(a,i)=>a.$slots.default?(me(),ue("article",{key:0,class:jt(a.frontmatter.markdown!==!1&&"markdown-body")},[b(a.$slots,"default",{ref_key:"contentRef",ref:o,onVnodeUpdated:i[0]||(i[0]=(...m)=>X(Y)&&X(Y)(...m))}),a.frontmatter.url?(me(),ue("div",io,[A("a",{href:a.frontmatter.url,class:"post-link-btn shadow hover:shadow-md",rounded:"",target:"_blank",m:"b-4"},Se(X(n)("post.view_link")),9,so)])):K("v-if",!0),a.frontmatter.end!==void 0?b(a.$slots,"end",{key:1},()=>[A("div",lo,[co,A("span",mo,Se(a.frontmatter.end?"Q.E.D.":"To Be Continued."),1),uo])]):K("v-if",!0)],2)):K("v-if",!0)}}),go={w:"full",flex:"~ col"},po={class:"content",flex:"~ col grow",w:"full",p:"l-4 lt-md:0"},vo={class:"markdown-body max-w-none pb-8 prose"},yo=Ve({__name:"ValaxyMain",props:{frontmatter:{},data:{}},setup(e){const t=U();return(n,o)=>{const a=fo,i=St;return me(),ue("main",null,[A("div",go,[b(n.$slots,"main",{},()=>[A("div",po,[b(n.$slots,"main-header"),b(n.$slots,"main-header-after"),b(n.$slots,"main-content",{},()=>[A("div",vo,[He(a,{frontmatter:n.frontmatter},{default:qt(()=>[b(n.$slots,"main-content-md"),b(n.$slots,"default")]),_:3},8,["frontmatter"])]),b(n.$slots,"main-content-after")])]),b(n.$slots,"main-nav-before"),b(n.$slots,"main-nav"),b(n.$slots,"main-nav-after"),X(t).comment.enable&&n.frontmatter.comment!==!1?b(n.$slots,"comment",{key:0}):K("v-if",!0),He(i)])]),b(n.$slots,"aside")])}}});export{yo as _};
