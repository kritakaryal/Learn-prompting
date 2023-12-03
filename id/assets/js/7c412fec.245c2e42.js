"use strict";(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[782],{3905:(e,a,n)=>{n.d(a,{Zo:()=>m,kt:()=>d});var t=n(67294);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function i(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?i(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function p(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=t.createContext({}),s=function(e){var a=t.useContext(l),n=a;return e&&(n="function"==typeof e?e(a):o(o({},a),e)),n},m=function(e){var a=s(e.components);return t.createElement(l.Provider,{value:a},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},k=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),u=s(n),k=r,d=u["".concat(l,".").concat(k)]||u[k]||c[k]||i;return n?t.createElement(d,o(o({ref:a},m),{},{components:n})):t.createElement(d,o({ref:a},m))}));function d(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=k;var p={};for(var l in a)hasOwnProperty.call(a,l)&&(p[l]=a[l]);p.originalType=e,p[u]="string"==typeof e?e:r,o[1]=p;for(var s=2;s<i;s++)o[s]=n[s];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}k.displayName="MDXCreateElement"},62923:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>u,contentTitle:()=>s,default:()=>f,frontMatter:()=>l,metadata:()=>m,toc:()=>c});var t=n(87462),r=(n(67294),n(3905));const i=n.p+"assets/images/jailbreak_research-b2b12ec0d4906b8afc2f89ea7bfc3b7f.webp",o=n.p+"assets/images/injection_leak-2aa93f60f62ec02e61a979a4c3c4e59e.webp",p=n.p+"assets/images/bing_chat-ba205919acb6d6126df3163641b8f8ee.webp",l={sidebar_position:2},s="\ud83d\udfe2 Prompt Leaking",m={unversionedId:"prompt_hacking/leaking",id:"prompt_hacking/leaking",title:"\ud83d\udfe2 Prompt Leaking",description:"Prompt leaking adalah salah satu bentuk prompt injection di mana model diminta untuk \u2018memuntahkan\u2019 prompt-nya sendiri.",source:"@site/i18n/id/docusaurus-plugin-content-docs/current/prompt_hacking/leaking.md",sourceDirName:"prompt_hacking",slug:"/prompt_hacking/leaking",permalink:"/id/docs/prompt_hacking/leaking",draft:!1,editUrl:"https://github.com/trigaten/promptgineering/tree/v1.2.3/docs/prompt_hacking/leaking.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udfe2 Prompt Injection",permalink:"/id/docs/prompt_hacking/injection"},next:{title:"\ud83d\udfe2 Jailbreaking",permalink:"/id/docs/prompt_hacking/jailbreaking"}},u={},c=[{value:"Microsoft Bing Chat",id:"microsoft-bing-chat",level:3},{value:"Latihan",id:"latihan",level:2}],k=(d="LazyLoadImage",function(e){return console.warn("Component "+d+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var d;const g={toc:c},b="wrapper";function f(e){let{components:a,...n}=e;return(0,r.kt)(b,(0,t.Z)({},g,n,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"-prompt-leaking"},"\ud83d\udfe2 Prompt Leaking"),(0,r.kt)("p",null,"Prompt leaking adalah salah satu bentuk prompt injection di mana model diminta untuk \u2018memuntahkan\u2019 ",(0,r.kt)("em",{parentName:"p"},"prompt-nya sendiri"),"."),(0,r.kt)("p",null,"Seperti yang ditunjukkan dalam gambar contoh",(0,r.kt)("sup",{parentName:"p",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))," di bawah ini, penyerang mengubah ",(0,r.kt)("inlineCode",{parentName:"p"},"input_pengguna")," untuk mencoba mengembalikan prompt. Tujuan yang dimaksud berbeda dari penyusupan tujuan (injeksi instruksi normal), di mana penyerang mengubah ",(0,r.kt)("inlineCode",{parentName:"p"},"masukan_pengguna")," untuk mencetak instruksi jahat",(0,r.kt)("sup",{parentName:"p",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),"."),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("img",{src:i,style:{width:"500px"}})),(0,r.kt)("p",null,"Gambar berikut",(0,r.kt)("sup",{parentName:"p",id:"fnref-2"},(0,r.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2")),", lagi-lagi dari contoh ",(0,r.kt)("inlineCode",{parentName:"p"},"remoteli.io"),", menampilkan pengguna Twitter yang membuat model bocor dengan promptnya."),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)(k,{src:o,style:{width:"300px"},mdxType:"LazyLoadImage"})),(0,r.kt)("p",null,"Ya, lalu apa? Mengapa kita harus peduli tentang prompt leaking?"),(0,r.kt)("p",null,"Terkadang orang ingin merahasiakan tanggapan mereka. Contohnya sebuah perusahaan pendidikan bisa menggunakan prompt ",(0,r.kt)("inlineCode",{parentName:"p"},"jelaskan ini kepadaku seperti saya berumur 5 tahun")," untuk menjelaskan topik yang kompleks. Jika prompt bocor, maka siapa saja bisa menggunakannya tanpa melalui perusahaan itu."),(0,r.kt)("h3",{id:"microsoft-bing-chat"},"Microsoft Bing Chat"),(0,r.kt)("p",null,'Lebih mencolok, Microsoft merilis mesin pencari berbasis ChatGPT yang dikenal sebagai "Bing baru" pada 2/7/23, yang terbukti rentan terhadap kebocoran prompt. Contoh berikut oleh ',(0,r.kt)("a",{parentName:"p",href:"https://twitter.com/kliu128/status/1623472922374574080"},"@kliu128"),' menunjukkan bagaimana dengan versi sebelumnya dari Pencarian Bing yang bernama kode "Sydney", rentan ketika memberikan potongan dari perintahnya',(0,r.kt)("sup",{parentName:"p",id:"fnref-3"},(0,r.kt)("a",{parentName:"sup",href:"#fn-3",className:"footnote-ref"},"3")),". Ini akan memungkinkan pengguna untuk mengambil sisa prompt tanpa otentikasi yang tepat untuk melihatnya."),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)(k,{src:p,style:{width:"700px"},mdxType:"LazyLoadImage"})),(0,r.kt)("p",null,"Dengan lonjakan baru-baru ini dalam startup berbasis GPT-3, dengan prompt yang jauh lebih rumit yang dapat memakan banyak waktu untuk dikembangkan, ini adalah kekhawatiran yang nyata."),(0,r.kt)("h2",{id:"latihan"},"Latihan"),(0,r.kt)("p",null,"Coba bocorkan prompt berikut",(0,r.kt)("sup",{parentName:"p",id:"fnref-4"},(0,r.kt)("a",{parentName:"sup",href:"#fn-4",className:"footnote-ref"},"4"))," dengan menambahkan teks ke dalamnya:"),(0,r.kt)("iframe",{src:"https://embed.learnprompting.org/embed?config=eyJ0b3BQIjowLCJ0ZW1wZXJhdHVyZSI6MCwibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6IiIsInByb21wdCI6IkVuZ2xpc2g6IEkgd2FudCB0byBnbyB0byB0aGUgcGFyayB0b2RheS5cbkZyZW5jaDogSmUgdmV1eCBhbGxlciBhdSBwYXJjIGF1am91cmQnaHVpLlxuRW5nbGlzaDogSSBsaWtlIHRvIHdlYXIgYSBoYXQgd2hlbiBpdCByYWlucy5cbkZyZW5jaDogSidhaW1lIHBvcnRlciB1biBjaGFwZWF1IHF1YW5kIGl0IHBsZXV0LlxuRW5nbGlzaDogV2hhdCBhcmUgeW91IGRvaW5nIGF0IHNjaG9vbD9cbkZyZW5jaDogUXUnZXN0LWNlIHF1ZSB0byBmYWlzIGEgbCdlY29sZT9cbkVuZ2xpc2g6IiwibW9kZWwiOiJ0ZXh0LWRhdmluY2ktMDAzIn0%3D",style:{width:"100%",height:"500px",border:"0",borderRadius:"4px",overflow:"hidden"},sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),(0,r.kt)("div",{className:"footnotes"},(0,r.kt)("hr",{parentName:"div"}),(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol",id:"fn-1"},"Perez, F., & Ribeiro, I. (2022). Ignore Previous Prompt: Attack Techniques For Language Models. arXiv. https://doi.org/10.48550/ARXIV.2211.09527\n",(0,r.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,r.kt)("li",{parentName:"ol",id:"fn-2"},"Willison, S. (2022). Prompt injection attacks against GPT-3. https://simonwillison.net/2022/Sep/12/prompt-injection/\n",(0,r.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")),(0,r.kt)("li",{parentName:"ol",id:"fn-3"},"Liu, K. (2023). The entire prompt of Microsoft Bing Chat?! (Hi, Sydney.). https://twitter.com/kliu128/status/1623472922374574080\n",(0,r.kt)("a",{parentName:"li",href:"#fnref-3",className:"footnote-backref"},"\u21a9")),(0,r.kt)("li",{parentName:"ol",id:"fn-4"},"Chase, H. (2022). adversarial-prompts. https://github.com/hwchase17/adversarial-prompts\n",(0,r.kt)("a",{parentName:"li",href:"#fnref-4",className:"footnote-backref"},"\u21a9")))))}f.isMDXComponent=!0}}]);