import{s as i,f as l}from"./app.Ble2f7Lk.js";import"./chunks/dayjs.Byk5cVHE.js";import{d as m}from"./chunks/pinia.DOzz5O-T.js";import{d}from"./chunks/vue-router.rDPxF0t6.js";import{f as p,j as f,N as h,L as _,R as u,V as g}from"./framework.Cn6PPJXy.js";const x=m("routerStore",()=>({router:d()}));function y(){const s=x().router;return p(()=>{const o=["/:..all","/:all(.*)*","/","/:path(.*)"];return s.getRoutes().filter(t=>t.name).filter(t=>t.meta).filter(t=>t.meta.frontmatter).filter(t=>t.path&&!o.includes(t.path)).map(t=>Object.assign({path:t.path,excerpt:t.meta.excerpt},t.meta.frontmatter||{}))})}function v(r={}){const s=y();return p(()=>{const o=s.value.filter(e=>{var a,c;return((a=e.path)==null?void 0:a.startsWith("/posts"))&&!((c=e.path)!=null&&c.endsWith(".html"))&&e.date&&(!r.type||e.type===r.type)&&(!e.hide||e.hide==="index")}),n=i(o.filter(e=>e.top)).sort((e,a)=>a.top-e.top),t=i(o.filter(e=>!e.top));return n.concat(t)})}const S={class:"text-base text-gray-500 font-medium leading-6"},P=["datetime"],j=f({__name:"StarterDate",props:{date:{}},setup(r){const s=r,o=p(()=>l(s.date||""));return(n,t)=>(_(),h("dl",null,[t[0]||(t[0]=u("dt",{class:"sr-only"}," Published on ",-1)),u("dd",S,[u("time",{datetime:o.value},g(o.value),9,P)])]))}});export{j as _,v as u};
