(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[421],{5328:function(e,t,r){Promise.resolve().then(r.bind(r,4262))},4262:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return y}});var n=r(7821),a=r(9032),o=r(3198),s=r(4868),i=r(9600);let l=async e=>{try{await navigator.clipboard.writeText(e)}catch(e){throw Error("Not able to copy")}};var c={jsx:"React",markup:"HTML",markdown:"Plain Text"},d=r(6671),u=r(8784),x=r.n(u);let h=o.forwardRef((e,t)=>{let{children:r,className:a,...o}=e;return(0,n.jsx)("button",{...o,ref:t,className:x()("rounded text-slate-11 focus:text-slate-12 ease-in-out transition duration-200 focus:outline-none focus:ring-2 focus:ring-gray-8 hover:text-slate-12",a),children:r})});h.displayName="IconButton";let p=o.forwardRef((e,t)=>{let{size:r=20,...a}=e;return(0,n.jsx)("svg",{ref:t,width:r,height:r,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...a})});p.displayName="IconBase";let m=o.forwardRef((e,t)=>{let{...r}=e;return(0,n.jsx)(p,{ref:t,...r,children:(0,n.jsx)("path",{d:"M16.25 8.75L10.406 15.25L7.75 12.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})});m.displayName="IconCheck";let f=o.forwardRef((e,t)=>{let{...r}=e;return(0,n.jsxs)(p,{ref:t,...r,children:[(0,n.jsx)("path",{d:"M9 6.75H7.75C6.64543 6.75 5.75 7.64543 5.75 8.75V17.25C5.75 18.3546 6.64543 19.25 7.75 19.25H16.25C17.3546 19.25 18.25 18.3546 18.25 17.25V8.75C18.25 7.64543 17.3546 6.75 16.25 6.75H15",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,n.jsx)("path",{d:"M14 8.25H10C9.44772 8.25 9 7.80228 9 7.25V5.75C9 5.19772 9.44772 4.75 10 4.75H14C14.5523 4.75 15 5.19772 15 5.75V7.25C15 7.80228 14.5523 8.25 14 8.25Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,n.jsx)("path",{d:"M9.75 12.25H14.25",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,n.jsx)("path",{d:"M9.75 15.25H14.25",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})});f.displayName="IconClipboard";let j=o.forwardRef((e,t)=>{let{...r}=e;return(0,n.jsx)(p,{ref:t,...r,children:(0,n.jsx)("path",{d:"M4.75 14.75v1.5a3 3 0 0 0 3 3h8.5a3 3 0 0 0 3-3v-1.5M12 14.25v-9.5M8.75 10.75l3.25 3.5 3.25-3.5",stroke:"currentColor",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})})});j.displayName="IconDownload";var g=r(3706),k=r(2668);let w=o.forwardRef((e,t)=>{let{sideOffset:r=6,children:a,...o}=e;return(0,n.jsx)(g.h_,{children:(0,n.jsx)(g.VY,{...o,ref:t,className:x()("bg-black border border-slate-6 z-20 px-3 py-2 rounded-md text-xs","".concat(k.i.variable," font-sans")),sideOffset:r,children:a})})});w.displayName="TooltipContent";let b=e=>{let{children:t,...r}=e;return(0,n.jsx)(g.fC,{...r,children:t})},v=Object.assign(b,{Arrow:g.Ce,Provider:g.pn,Content:w,Trigger:g.aJ}),C=e=>{let{markups:t,activeLang:r,setActiveLang:a}=e,[u,x]=o.useState(!1);return o.useEffect(()=>{x(!1)},[r]),(0,n.jsxs)("pre",{className:"border-slate-6 relative w-full items-center whitespace-pre rounded-md border text-sm backdrop-blur-md",style:{lineHeight:"130%",background:"linear-gradient(145.37deg, rgba(255, 255, 255, 0.09) -8.75%, rgba(255, 255, 255, 0.027) 83.95%)",boxShadow:"rgb(0 0 0 / 10%) 0px 5px 30px -5px"},children:[(0,n.jsxs)("div",{className:"h-9 border-b border-slate-6",children:[(0,n.jsx)("div",{className:"flex",children:(0,n.jsx)(s.S,{id:"code",children:t.map(e=>{let{language:t}=e;return(0,n.jsxs)(i.E.button,{className:"relative py-[8px] px-4 text-sm font-medium font-sans transition ease-in-out duration-200 hover:text-slate-12 ".concat(r!==t?"text-slate-11":"text-slate-12"),onClick:()=>a(t),children:[r===t&&(0,n.jsx)(i.E.span,{layoutId:"code",className:"absolute left-0 right-0 top-0 bottom-0 bg-slate-4",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0}}),c[t]]},t)})})}),(0,n.jsxs)(v,{children:[(0,n.jsx)(v.Trigger,{className:"absolute top-2 right-2 hidden md:block",children:(()=>{let e=async()=>{let e=t.filter(e=>{let{language:t}=e;return r===t});x(!0),await l(e[0].content),setTimeout(()=>x(!1),3e3)};return(0,n.jsx)(h,{onClick:e,children:u?(0,n.jsx)(m,{}):(0,n.jsx)(f,{})})})()}),(0,n.jsx)(v.Content,{children:"Copy to Clipboard"})]}),(0,n.jsxs)(v,{children:[(0,n.jsx)(v.Trigger,{className:"text-gray-11 absolute top-2 right-8 hidden md:block",children:(()=>{let e=t.filter(e=>e.language===r),a=new File([e[0].content],"email.".concat(e[0].language)),o=URL.createObjectURL(a);return(0,n.jsx)("a",{href:o,download:a.name,className:"text-slate-11 transition ease-in-out duration-200 hover:text-slate-12",children:(0,n.jsx)(j,{})})})()}),(0,n.jsx)(v.Content,{children:"Download"})]})]}),t.map(e=>{let{language:t,content:a}=e;return(0,n.jsx)("div",{className:"".concat(r!==t&&"hidden"),children:(0,n.jsx)(d.E,{language:t,children:a})},t)})]})};var N=r(4821);function y(e){let{navItems:t,slug:r,markup:s,reactMarkup:i,plainText:l}=e,c=(0,a.useRouter)(),d=(0,a.usePathname)(),u=(0,a.useSearchParams)(),[x,h]=o.useState("desktop"),[p,m]=o.useState("jsx");o.useEffect(()=>{let e=u.get("view"),t=u.get("lang");("source"===e||"desktop"===e)&&h(e),("jsx"===t||"markup"===t||"markdown"===t)&&m(t)},[u]);let f=e=>{h(e),c.push("".concat(d,"?view=").concat(e))},j=e=>{m(e),c.push("".concat(d,"?view=source&lang=").concat(e))};return(0,n.jsx)(N.N,{navItems:t,title:r,markup:s,activeView:x,setActiveView:f,children:"desktop"===x?(0,n.jsx)("iframe",{srcDoc:s,className:"w-full h-[calc(100vh_-_70px)]"}):(0,n.jsx)("div",{className:"flex gap-6 mx-auto p-6 max-w-3xl",children:(0,n.jsx)(v.Provider,{children:(0,n.jsx)(C,{markups:[{language:"jsx",content:i},{language:"markup",content:s},{language:"markdown",content:l}],activeLang:p,setActiveLang:j})})})})}}},function(e){e.O(0,[340,103,544,90,92,744],function(){return e(e.s=5328)}),_N_E=e.O()}]);