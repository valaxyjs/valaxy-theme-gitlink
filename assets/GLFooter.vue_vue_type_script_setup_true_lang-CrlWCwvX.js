import{d as v,i as h,O as g,v as m,o as n,c as r,f as t,b as o,t as s,l as i,E as l,F as b,n as C,G as x}from"./app-DLpDFI9G.js";const y={class:"va-footer p-4",text:"center sm $va-c-text-light"},k={key:0,class:"beian",m:"y-2"},F={href:"https://beian.miit.gov.cn/",target:"_blank",rel:"noopener"},w={class:"copyright flex items-center justify-center",p:"1"},B=["href","title"],S=v({__name:"GLFooter",setup(G){const p=h(),e=g(),c=new Date().getFullYear(),d=m(()=>c===e.value.footer.since),a=m(()=>e.value.footer.icon);return(_,f)=>{var u;return n(),r("footer",y,[(u=t(e).footer.beian)!=null&&u.enable&&t(e).footer.beian.icp?(n(),r("div",k,[o("a",F,s(t(e).footer.beian.icp),1)])):i("v-if",!0),o("div",w,[o("span",null,[f[0]||(f[0]=l(" © ")),d.value?i("v-if",!0):(n(),r(b,{key:0},[l(s(t(e).footer.since)+" - ",1)],64)),l(" "+s(t(c)),1)]),o("a",{m:"x-2",class:"inline-flex animate-pulse",href:a.value.url,target:"_blank",title:a.value.title},[o("div",{class:C(a.value.name)},null,2)],8,B),o("span",null,s(t(p).author.name),1)]),i(' <GLFooterPowered v-if="themeConfig.footer.powered" /> '),x(_.$slots,"default")])}}});export{S as _};
