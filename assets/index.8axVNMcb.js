import{_ as h,u as y}from"./StarterDate.vue_vue_type_script_setup_true_lang.v7KpBqNE.js";import{j as p,N as o,L as e,u as l,R as s,Q as d,V as x,f as g,F as v,S as k,K as _,O as L,P as S,J as b}from"./framework.Cn6PPJXy.js";import"./app.Ble2f7Lk.js";import"./chunks/dayjs.Byk5cVHE.js";import{e as i}from"./chunks/vue-router.rDPxF0t6.js";import"./chunks/pinia.DOzz5O-T.js";import"./chunks/vue-i18n.rHMIpzVY.js";import"./chunks/nprogress.Cino7761.js";const C={class:"xl:grid xl:grid-cols-4 xl:items-baseline space-y-2 xl:space-y-0"},P={class:"xl:col-span-3 space-y-5"},$={class:"space-y-6"},B={class:"text-2xl font-bold leading-8 tracking-tight"},N=["href"],V=["innerHTML"],T={class:"text-base font-medium leading-6"},w=["href"],A=p({__name:"StarterArticleCard",props:{post:{}},setup(r){return(t,a)=>{const n=h;return e(),o("article",C,[l(n,{date:t.post.date},null,8,["date"]),s("div",P,[s("div",$,[s("h2",B,[s("a",{class:"st-text",href:t.post.path},x(t.post.title),9,N)]),t.post.excerpt?(e(),o("div",{key:0,class:"max-w-none text-gray-500 prose",innerHTML:t.post.excerpt},null,8,V)):d("v-if",!0)]),s("div",T,[s("a",{class:"link","aria-label":"read more",href:t.post.path},"Read more →",8,w)])])])}}}),D={class:"divide-y divide-gray-200 dark:divide-gray-700"},F={key:0,class:"py-12"},H=p({__name:"StarterPostList",props:{type:{},posts:{},curPage:{default:1}},setup(r){const t=r,a=y({type:t.type||""}),n=g(()=>t.posts||a.value);return(R,j)=>{const u=A;return e(),o("ul",D,[(e(!0),o(v,null,k(n.value,(c,f)=>(e(),_(L,{key:f,name:"fade"},{default:S(()=>[c?(e(),o("li",F,[l(u,{post:c},null,8,["post"])])):d("v-if",!0)]),_:2},1024))),128))])}}}),m={};function M(r,t){const a=H;return e(),_(a)}typeof i=="function"&&i(m);const I=b(m,[["render",M]]);export{I as default};
