import{d as h,q as v,J as g,f as m,o as n,c as r,j as t,b as o,t as s,e as i,k as l,F as b,C,l as k}from"./app-CO5i8b39.js";const x={class:"va-footer p-4",text:"center sm $va-c-text-light"},y={key:0,class:"beian",m:"y-2"},F={href:"https://beian.miit.gov.cn/",target:"_blank",rel:"noopener"},w={class:"copyright flex items-center justify-center",p:"1"},B=["href","title"],T=h({__name:"GLFooter",setup(N){const p=v(),e=g(),c=new Date().getFullYear(),d=m(()=>c===e.value.footer.since),a=m(()=>e.value.footer.icon);return(_,f)=>{var u;return n(),r("footer",x,[(u=t(e).footer.beian)!=null&&u.enable&&t(e).footer.beian.icp?(n(),r("div",y,[o("a",F,s(t(e).footer.beian.icp),1)])):i("v-if",!0),o("div",w,[o("span",null,[f[0]||(f[0]=l(" © ")),d.value?i("v-if",!0):(n(),r(b,{key:0},[l(s(t(e).footer.since)+" - ",1)],64)),l(" "+s(t(c)),1)]),o("a",{m:"x-2",class:"inline-flex animate-pulse",href:a.value.url,target:"_blank",title:a.value.title},[o("div",{class:C(a.value.name)},null,2)],8,B),o("span",null,s(t(p).author.name),1)]),i(' <GLFooterPowered v-if="themeConfig.footer.powered" /> '),k(_.$slots,"default")])}}});export{T as _};