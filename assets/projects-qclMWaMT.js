import{d as F,N as O,f as N,o as b,c as p,t as S,e as A,b as d,G as W,F as R,r as G,g as y,v as D,O as T,D as V,w as U,j as z,a as Y,E as J}from"./app-CO5i8b39.js";function f(r,e){Z(r)&&(r="100%");const t=K(r);return r=e===360?r:Math.min(e,Math.max(0,parseFloat(r))),t&&(r=parseInt(String(r*e),10)/100),Math.abs(r-e)<1e-6?1:(e===360?r=(r<0?r%e+e:r%e)/parseFloat(String(e)):r=r%e/parseFloat(String(e)),r)}function v(r){return Math.min(1,Math.max(0,r))}function Z(r){return typeof r=="string"&&r.indexOf(".")!==-1&&parseFloat(r)===1}function K(r){return typeof r=="string"&&r.indexOf("%")!==-1}function L(r){return r=parseFloat(r),(isNaN(r)||r<0||r>1)&&(r=1),r}function M(r){return Number(r)<=1?`${Number(r)*100}%`:r}function k(r){return r.length===1?"0"+r:String(r)}function Q(r,e,t){return{r:f(r,255)*255,g:f(e,255)*255,b:f(t,255)*255}}function E(r,e,t){r=f(r,255),e=f(e,255),t=f(t,255);const n=Math.max(r,e,t),s=Math.min(r,e,t);let a=0,i=0;const h=(n+s)/2;if(n===s)i=0,a=0;else{const u=n-s;switch(i=h>.5?u/(2-n-s):u/(n+s),n){case r:a=(e-t)/u+(e<t?6:0);break;case e:a=(t-r)/u+2;break;case t:a=(r-e)/u+4;break}a/=6}return{h:a,s:i,l:h}}function H(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*(6*t):t<1/2?e:t<2/3?r+(e-r)*(2/3-t)*6:r}function X(r,e,t){let n,s,a;if(r=f(r,360),e=f(e,100),t=f(t,100),e===0)s=t,a=t,n=t;else{const i=t<.5?t*(1+e):t+e-t*e,h=2*t-i;n=H(h,i,r+1/3),s=H(h,i,r),a=H(h,i,r-1/3)}return{r:n*255,g:s*255,b:a*255}}function B(r,e,t){r=f(r,255),e=f(e,255),t=f(t,255);const n=Math.max(r,e,t),s=Math.min(r,e,t);let a=0;const i=n,h=n-s,u=n===0?0:h/n;if(n===s)a=0;else{switch(n){case r:a=(e-t)/h+(e<t?6:0);break;case e:a=(t-r)/h+2;break;case t:a=(r-e)/h+4;break}a/=6}return{h:a,s:u,v:i}}function tt(r,e,t){r=f(r,360)*6,e=f(e,100),t=f(t,100);const n=Math.floor(r),s=r-n,a=t*(1-e),i=t*(1-s*e),h=t*(1-(1-s)*e),u=n%6,x=[t,i,a,a,h,t][u],$=[h,t,t,i,a,a][u],q=[a,a,h,t,t,i][u];return{r:x*255,g:$*255,b:q*255}}function I(r,e,t,n){const s=[k(Math.round(r).toString(16)),k(Math.round(e).toString(16)),k(Math.round(t).toString(16))];return n&&s[0].startsWith(s[0].charAt(1))&&s[1].startsWith(s[1].charAt(1))&&s[2].startsWith(s[2].charAt(1))?s[0].charAt(0)+s[1].charAt(0)+s[2].charAt(0):s.join("")}function et(r,e,t,n,s){const a=[k(Math.round(r).toString(16)),k(Math.round(e).toString(16)),k(Math.round(t).toString(16)),k(nt(n))];return s&&a[0].startsWith(a[0].charAt(1))&&a[1].startsWith(a[1].charAt(1))&&a[2].startsWith(a[2].charAt(1))&&a[3].startsWith(a[3].charAt(1))?a[0].charAt(0)+a[1].charAt(0)+a[2].charAt(0)+a[3].charAt(0):a.join("")}function rt(r,e,t,n){const s=r/100,a=e/100,i=t/100,h=n/100,u=255*(1-s)*(1-h),x=255*(1-a)*(1-h),$=255*(1-i)*(1-h);return{r:u,g:x,b:$}}function P(r,e,t){let n=1-r/255,s=1-e/255,a=1-t/255,i=Math.min(n,s,a);return i===1?(n=0,s=0,a=0):(n=(n-i)/(1-i)*100,s=(s-i)/(1-i)*100,a=(a-i)/(1-i)*100),i*=100,{c:Math.round(n),m:Math.round(s),y:Math.round(a),k:Math.round(i)}}function nt(r){return Math.round(parseFloat(r)*255).toString(16)}function C(r){return l(r)/255}function l(r){return parseInt(r,16)}function st(r){return{r:r>>16,g:(r&65280)>>8,b:r&255}}const j={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};function at(r){let e={r:0,g:0,b:0},t=1,n=null,s=null,a=null,i=!1,h=!1;return typeof r=="string"&&(r=ot(r)),typeof r=="object"&&(c(r.r)&&c(r.g)&&c(r.b)?(e=Q(r.r,r.g,r.b),i=!0,h=String(r.r).substr(-1)==="%"?"prgb":"rgb"):c(r.h)&&c(r.s)&&c(r.v)?(n=M(r.s),s=M(r.v),e=tt(r.h,n,s),i=!0,h="hsv"):c(r.h)&&c(r.s)&&c(r.l)?(n=M(r.s),a=M(r.l),e=X(r.h,n,a),i=!0,h="hsl"):c(r.c)&&c(r.m)&&c(r.y)&&c(r.k)&&(e=rt(r.c,r.m,r.y,r.k),i=!0,h="cmyk"),Object.prototype.hasOwnProperty.call(r,"a")&&(t=r.a)),t=L(t),{ok:i,format:r.format||h,r:Math.min(255,Math.max(e.r,0)),g:Math.min(255,Math.max(e.g,0)),b:Math.min(255,Math.max(e.b,0)),a:t}}const it="[-\\+]?\\d+%?",ht="[-\\+]?\\d*\\.\\d+%?",m="(?:"+ht+")|(?:"+it+")",_="[\\s|\\(]+("+m+")[,|\\s]+("+m+")[,|\\s]+("+m+")\\s*\\)?",w="[\\s|\\(]+("+m+")[,|\\s]+("+m+")[,|\\s]+("+m+")[,|\\s]+("+m+")\\s*\\)?",g={CSS_UNIT:new RegExp(m),rgb:new RegExp("rgb"+_),rgba:new RegExp("rgba"+w),hsl:new RegExp("hsl"+_),hsla:new RegExp("hsla"+w),hsv:new RegExp("hsv"+_),hsva:new RegExp("hsva"+w),cmyk:new RegExp("cmyk"+w),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function ot(r){if(r=r.trim().toLowerCase(),r.length===0)return!1;let e=!1;if(j[r])r=j[r],e=!0;else if(r==="transparent")return{r:0,g:0,b:0,a:0,format:"name"};let t=g.rgb.exec(r);return t?{r:t[1],g:t[2],b:t[3]}:(t=g.rgba.exec(r),t?{r:t[1],g:t[2],b:t[3],a:t[4]}:(t=g.hsl.exec(r),t?{h:t[1],s:t[2],l:t[3]}:(t=g.hsla.exec(r),t?{h:t[1],s:t[2],l:t[3],a:t[4]}:(t=g.hsv.exec(r),t?{h:t[1],s:t[2],v:t[3]}:(t=g.hsva.exec(r),t?{h:t[1],s:t[2],v:t[3],a:t[4]}:(t=g.cmyk.exec(r),t?{c:t[1],m:t[2],y:t[3],k:t[4]}:(t=g.hex8.exec(r),t?{r:l(t[1]),g:l(t[2]),b:l(t[3]),a:C(t[4]),format:e?"name":"hex8"}:(t=g.hex6.exec(r),t?{r:l(t[1]),g:l(t[2]),b:l(t[3]),format:e?"name":"hex"}:(t=g.hex4.exec(r),t?{r:l(t[1]+t[1]),g:l(t[2]+t[2]),b:l(t[3]+t[3]),a:C(t[4]+t[4]),format:e?"name":"hex8"}:(t=g.hex3.exec(r),t?{r:l(t[1]+t[1]),g:l(t[2]+t[2]),b:l(t[3]+t[3]),format:e?"name":"hex"}:!1))))))))))}function c(r){return typeof r=="number"?!Number.isNaN(r):g.CSS_UNIT.test(r)}class o{constructor(e="",t={}){if(e instanceof o)return e;typeof e=="number"&&(e=st(e)),this.originalInput=e;const n=at(e);this.originalInput=e,this.r=n.r,this.g=n.g,this.b=n.b,this.a=n.a,this.roundA=Math.round(100*this.a)/100,this.format=t.format??n.format,this.gradientType=t.gradientType,this.r<1&&(this.r=Math.round(this.r)),this.g<1&&(this.g=Math.round(this.g)),this.b<1&&(this.b=Math.round(this.b)),this.isValid=n.ok}isDark(){return this.getBrightness()<128}isLight(){return!this.isDark()}getBrightness(){const e=this.toRgb();return(e.r*299+e.g*587+e.b*114)/1e3}getLuminance(){const e=this.toRgb();let t,n,s;const a=e.r/255,i=e.g/255,h=e.b/255;return a<=.03928?t=a/12.92:t=Math.pow((a+.055)/1.055,2.4),i<=.03928?n=i/12.92:n=Math.pow((i+.055)/1.055,2.4),h<=.03928?s=h/12.92:s=Math.pow((h+.055)/1.055,2.4),.2126*t+.7152*n+.0722*s}getAlpha(){return this.a}setAlpha(e){return this.a=L(e),this.roundA=Math.round(100*this.a)/100,this}isMonochrome(){const{s:e}=this.toHsl();return e===0}toHsv(){const e=B(this.r,this.g,this.b);return{h:e.h*360,s:e.s,v:e.v,a:this.a}}toHsvString(){const e=B(this.r,this.g,this.b),t=Math.round(e.h*360),n=Math.round(e.s*100),s=Math.round(e.v*100);return this.a===1?`hsv(${t}, ${n}%, ${s}%)`:`hsva(${t}, ${n}%, ${s}%, ${this.roundA})`}toHsl(){const e=E(this.r,this.g,this.b);return{h:e.h*360,s:e.s,l:e.l,a:this.a}}toHslString(){const e=E(this.r,this.g,this.b),t=Math.round(e.h*360),n=Math.round(e.s*100),s=Math.round(e.l*100);return this.a===1?`hsl(${t}, ${n}%, ${s}%)`:`hsla(${t}, ${n}%, ${s}%, ${this.roundA})`}toHex(e=!1){return I(this.r,this.g,this.b,e)}toHexString(e=!1){return"#"+this.toHex(e)}toHex8(e=!1){return et(this.r,this.g,this.b,this.a,e)}toHex8String(e=!1){return"#"+this.toHex8(e)}toHexShortString(e=!1){return this.a===1?this.toHexString(e):this.toHex8String(e)}toRgb(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a}}toRgbString(){const e=Math.round(this.r),t=Math.round(this.g),n=Math.round(this.b);return this.a===1?`rgb(${e}, ${t}, ${n})`:`rgba(${e}, ${t}, ${n}, ${this.roundA})`}toPercentageRgb(){const e=t=>`${Math.round(f(t,255)*100)}%`;return{r:e(this.r),g:e(this.g),b:e(this.b),a:this.a}}toPercentageRgbString(){const e=t=>Math.round(f(t,255)*100);return this.a===1?`rgb(${e(this.r)}%, ${e(this.g)}%, ${e(this.b)}%)`:`rgba(${e(this.r)}%, ${e(this.g)}%, ${e(this.b)}%, ${this.roundA})`}toCmyk(){return{...P(this.r,this.g,this.b)}}toCmykString(){const{c:e,m:t,y:n,k:s}=P(this.r,this.g,this.b);return`cmyk(${e}, ${t}, ${n}, ${s})`}toName(){if(this.a===0)return"transparent";if(this.a<1)return!1;const e="#"+I(this.r,this.g,this.b,!1);for(const[t,n]of Object.entries(j))if(e===n)return t;return!1}toString(e){const t=!!e;e=e??this.format;let n=!1;const s=this.a<1&&this.a>=0;return!t&&s&&(e.startsWith("hex")||e==="name")?e==="name"&&this.a===0?this.toName():this.toRgbString():(e==="rgb"&&(n=this.toRgbString()),e==="prgb"&&(n=this.toPercentageRgbString()),(e==="hex"||e==="hex6")&&(n=this.toHexString()),e==="hex3"&&(n=this.toHexString(!0)),e==="hex4"&&(n=this.toHex8String(!0)),e==="hex8"&&(n=this.toHex8String()),e==="name"&&(n=this.toName()),e==="hsl"&&(n=this.toHslString()),e==="hsv"&&(n=this.toHsvString()),e==="cmyk"&&(n=this.toCmykString()),n||this.toHexString())}toNumber(){return(Math.round(this.r)<<16)+(Math.round(this.g)<<8)+Math.round(this.b)}clone(){return new o(this.toString())}lighten(e=10){const t=this.toHsl();return t.l+=e/100,t.l=v(t.l),new o(t)}brighten(e=10){const t=this.toRgb();return t.r=Math.max(0,Math.min(255,t.r-Math.round(255*-(e/100)))),t.g=Math.max(0,Math.min(255,t.g-Math.round(255*-(e/100)))),t.b=Math.max(0,Math.min(255,t.b-Math.round(255*-(e/100)))),new o(t)}darken(e=10){const t=this.toHsl();return t.l-=e/100,t.l=v(t.l),new o(t)}tint(e=10){return this.mix("white",e)}shade(e=10){return this.mix("black",e)}desaturate(e=10){const t=this.toHsl();return t.s-=e/100,t.s=v(t.s),new o(t)}saturate(e=10){const t=this.toHsl();return t.s+=e/100,t.s=v(t.s),new o(t)}greyscale(){return this.desaturate(100)}spin(e){const t=this.toHsl(),n=(t.h+e)%360;return t.h=n<0?360+n:n,new o(t)}mix(e,t=50){const n=this.toRgb(),s=new o(e).toRgb(),a=t/100,i={r:(s.r-n.r)*a+n.r,g:(s.g-n.g)*a+n.g,b:(s.b-n.b)*a+n.b,a:(s.a-n.a)*a+n.a};return new o(i)}analogous(e=6,t=30){const n=this.toHsl(),s=360/t,a=[this];for(n.h=(n.h-(s*e>>1)+720)%360;--e;)n.h=(n.h+s)%360,a.push(new o(n));return a}complement(){const e=this.toHsl();return e.h=(e.h+180)%360,new o(e)}monochromatic(e=6){const t=this.toHsv(),{h:n}=t,{s}=t;let{v:a}=t;const i=[],h=1/e;for(;e--;)i.push(new o({h:n,s,v:a})),a=(a+h)%1;return i}splitcomplement(){const e=this.toHsl(),{h:t}=e;return[this,new o({h:(t+72)%360,s:e.s,l:e.l}),new o({h:(t+216)%360,s:e.s,l:e.l})]}onBackground(e){const t=this.toRgb(),n=new o(e).toRgb(),s=t.a+n.a*(1-t.a);return new o({r:(t.r*t.a+n.r*n.a*(1-t.a))/s,g:(t.g*t.a+n.g*n.a*(1-t.a))/s,b:(t.b*t.a+n.b*n.a*(1-t.a))/s,a:s})}triad(){return this.polyad(3)}tetrad(){return this.polyad(4)}polyad(e){const t=this.toHsl(),{h:n}=t,s=[this],a=360/e;for(let i=1;i<e;i++)s.push(new o({h:(n+i*a)%360,s:t.s,l:t.l}));return s}equals(e){const t=new o(e);return this.format==="cmyk"||t.format==="cmyk"?this.toCmykString()===t.toCmykString():this.toRgbString()===t.toRgbString()}}const ft={key:0,class:"mt-4"},ut=["href"],ct={text:"lg",font:"bold",m:"2"},lt=["innerHTML"],gt={p:"2"},dt=["href"],bt=["href"],mt=["href"],pt=F({__name:"GLProjectCard",props:{project:{}},setup(r){const t=O(r,"project"),n=N(()=>{if(t.value.color){const a=new o(t.value.color),i=t.value.textColor||(a.isDark()?"white":"black");return{"--un-gradient-stops":`${a.spin(55).toHexString()}, ${t.value.color}`,"--va-c-link":i,color:i}}else return{backgroundColor:"rgba(255,255,255,0.9)","--va-c-link":"black",color:"black"}}),s=N(()=>t.value.github?`https://github.com/${t.value.github}`:`https://github.com/YunYouJun/${t.value.name}`);return(a,i)=>(b(),p("div",{class:"m-2 w-90 transform rounded shadow-md transition duration-400",bg:"opacity-80 gradient-to-br",p:"2",hover:"shadow-lg from-white scale-105",style:W(n.value)},[t.value.emoji?(b(),p("div",ft,S(t.value.emoji),1)):A("v-if",!0),d("a",{href:s.value},[d("h2",ct,S(t.value.name||"忘记叫啥了"),1)],8,ut),d("small",{class:"block",p:"2",innerHTML:t.value.desc||"说点什么好呢"},null,8,lt),d("p",gt,[d("a",{class:"icon-btn mx-1",href:s.value,target:"_blank"},i[0]||(i[0]=[d("div",{"i-ri-github-line":""},null,-1)]),8,dt),t.value.url?(b(),p("a",{key:0,class:"icon-btn mx-1",href:t.value.url,target:"_blank"},i[1]||(i[1]=[d("div",{"i-ri-global-line":""},null,-1)]),8,bt)):A("v-if",!0),t.value.docs?(b(),p("a",{key:1,class:"icon-btn mx-1",href:t.value.docs,target:"_blank"},i[2]||(i[2]=[d("div",{"i-ri-book-line":""},null,-1)]),8,mt)):A("v-if",!0)])],4))}}),kt={class:"w-full flex justify-center",text:"xl",font:"black",m:"b-2 t-4"},xt=F({__name:"GLProjectCollection",props:{title:{},projects:{}},setup(r){return(e,t)=>{const n=pt;return b(),p(R,null,[d("div",kt,S(e.title),1),(b(!0),p(R,null,G(e.projects,(s,a)=>(b(),y(n,{key:a,project:s},null,8,["project"]))),128))],64)}}}),vt={text:"center"},Mt={class:"my-5 text-2xl"},wt={flex:"~ wrap",text:"center",justify:"center"},St=F({__name:"projects",setup(r){const e=D(),t=T(e.value.projects);return(n,s)=>{const a=xt,i=V("router-view"),h=J;return b(),y(h,null,{default:U(()=>[d("div",vt,[d("h2",Mt,S(z(e).title),1),d("div",wt,[Array.isArray(t)?(b(),y(a,{key:1,title:"",projects:t},null,8,["projects"])):(b(!0),p(R,{key:0},G(Object.entries(t),([u,x])=>(b(),y(a,{key:u,title:x.title||u,projects:x.children},null,8,["title","projects"]))),128))])]),Y(i)]),_:1})}}});export{St as default};
