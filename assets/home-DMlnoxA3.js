import{_ as u}from"./GLFooter.vue_vue_type_script_setup_true_lang-CrlWCwvX.js";import{d,i as m,o as a,c as n,F as p,j as g,b as e,n as y,k as b,f as s,t as r,l as x,e as c,m as k,p as v,_ as w}from"./app-DLpDFI9G.js";const L={class:"gl-social-container",flex:"~ wrap",justify:"center"},$=["href","alt"],G=d({__name:"GLSocial",setup(_){const t=m();return(i,l)=>(a(),n("ul",L,[(a(!0),n(p,null,g(s(t).social,o=>(a(),n("li",{key:o.name,class:"inline-flex"},[e("a",{href:o.link,class:"gl-social-icon",m:"1",p:"2",alt:o.name,style:b({"--gl-c-icon":o.color}),target:"_blank"},[e("div",{class:y(o.icon)},null,2)],12,$)]))),128))]))}}),j={class:"gl-intro flex items-center",justify:"center",w:"full",h:"screen"},C={class:"gl-card relative rounded shadow-md transition hover:shadow-lg",flex:"~ col","min-w":"300px",items:"center",justify:"center",m:"2",p:"4",bg:"white dark:dark-900"},S={class:"avatar",flex:"~ col",justify:"center",items:"center",m:"t-2"},N=["src"],B={key:0,opacity:"70"},F={font:"black",text:"2xl",m:"t-4"},V={opacity:"75",m:"y-2"},z={m:"y-4",p:"y-2",opacity:"80",text:"sm",class:"border-y border-b-gray-200 border-t-gray-200"},I=d({__name:"GLIntro",setup(_){const t=m();return(i,l)=>{const o=k,f=G,h=v;return a(),n("div",j,[e("div",C,[e("div",S,[e("img",{class:"gl-avatar border-width-3px border-white shadow transition",rounded:"full",src:s(t).author.avatar,width:"100",height:"100",alt:"avatar"},null,8,N),s(t).author.name?(a(),n("small",B,r(s(t).author.name),1)):x("v-if",!0)]),e("h1",F,r(s(t).title),1),e("h2",V,r(s(t).subtitle),1),e("blockquote",z,r(s(t).author.intro),1),c(o,{m:"y-2"}),c(f,{m:"t-2"})]),c(h,{class:"absolute right-5 top-5"})])}}}),q={},D={bg:"gray-200 dark:dark-800"};function E(_,t){const i=I,l=u;return a(),n("div",D,[c(i),c(l,{class:"absolute bottom-0",w:"full"})])}const J=w(q,[["render",E]]);export{J as default};