"use strict";(self.webpackChunkgo_feature_flag_website=self.webpackChunkgo_feature_flag_website||[]).push([[53128],{31146:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var a=r(85893),n=r(11151),s=r(52991);const o={title:"Use the relay proxy",description:"GO Feature Flag Relay Proxy is a powerful tool that allows developers to easily integrate feature flagging functionality into their applications. It is a simple API service that can be called directly through the API or via the available OpenFeature providers. The service wraps the GO Feature Flag golang module to evaluate your flags and allows it to be used with all the available languages."},i="Use the relay proxy",l={id:"relay_proxy/index",title:"Use the relay proxy",description:"GO Feature Flag Relay Proxy is a powerful tool that allows developers to easily integrate feature flagging functionality into their applications. It is a simple API service that can be called directly through the API or via the available OpenFeature providers. The service wraps the GO Feature Flag golang module to evaluate your flags and allows it to be used with all the available languages.",source:"@site/versioned_docs/version-v1.30.0/relay_proxy/index.mdx",sourceDirName:"relay_proxy",slug:"/relay_proxy/",permalink:"/docs/relay_proxy/",draft:!1,unlisted:!1,editUrl:"https://github.com/thomaspoignant/go-feature-flag/tree/main/website/versioned_docs/version-v1.30.0/relay_proxy/index.mdx",tags:[],version:"v1.30.0",frontMatter:{title:"Use the relay proxy",description:"GO Feature Flag Relay Proxy is a powerful tool that allows developers to easily integrate feature flagging functionality into their applications. It is a simple API service that can be called directly through the API or via the available OpenFeature providers. The service wraps the GO Feature Flag golang module to evaluate your flags and allows it to be used with all the available languages."},sidebar:"tutorialSidebar",previous:{title:"Android / Kotlin",permalink:"/docs/openfeature_sdk/client_providers/openfeature_android"},next:{title:"Getting started",permalink:"/docs/relay_proxy/getting_started"}},c={},u=[];function d(e){const t={h1:"h1",hr:"hr",img:"img",p:"p",strong:"strong",...(0,n.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"use-the-relay-proxy",children:"Use the relay proxy"}),"\n",(0,a.jsxs)(t.p,{children:["The GO Feature Flag Relay Proxy serves as the ",(0,a.jsx)(t.strong,{children:"backend"})," for your feature flag solution, housing all the necessary logic for feature flag management."]}),"\n",(0,a.jsxs)(t.p,{children:["It provides APIs to enable remote access to the GO Feature Flag system. While you have the option to interact directly with these APIs, it is recommended to use the ",(0,a.jsx)(t.strong,{children:"Openfeature SDK"})," and the appropriate ",(0,a.jsx)(t.strong,{children:"provider"})," for your programming language for a seamless experience."]}),"\n",(0,a.jsxs)(t.p,{children:["The relay proxy is designed to be ",(0,a.jsx)(t.strong,{children:"simple, lightweight, and stateless"}),". It operates without the need for any databases or complex systems, as it loads feature flag configuration files from a specified location and stores them in memory. Periodic polling ensures the proxy stays up-to-date with any changes in the configuration. This straightforward setup makes installation and usage incredibly easy and hassle-free."]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:r(46664).Z+"",width:"684",height:"265"})}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(s.Z,{})]})}function h(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},52991:(e,t,r)=>{r.d(t,{Z:()=>x});r(67294);var a=r(36905),n=r(53438),s=r(33692),o=r(88824),i=r(13919),l=r(95999),c=r(92503);const u={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var d=r(85893);function h(e){let{href:t,children:r}=e;return(0,d.jsx)(s.Z,{href:t,className:(0,a.Z)("card padding--lg",u.cardContainer),children:r})}function p(e){let{href:t,icon:r,title:n,description:s}=e;return(0,d.jsxs)(h,{href:t,children:[(0,d.jsxs)(c.Z,{as:"h2",className:(0,a.Z)("text--truncate",u.cardTitle),title:n,children:[r," ",n]}),s&&(0,d.jsx)("p",{className:(0,a.Z)("text--truncate",u.cardDescription),title:s,children:s})]})}function g(e){let{item:t}=e;const r=(0,n.LM)(t),a=function(){const{selectMessage:e}=(0,o.c)();return t=>e(t,(0,l.I)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return r?(0,d.jsx)(p,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??a(t.items.length)}):null}function f(e){let{item:t}=e;const r=(0,i.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",a=(0,n.xz)(t.docId??void 0);return(0,d.jsx)(p,{href:t.href,icon:r,title:t.label,description:t.description??a?.description})}function m(e){let{item:t}=e;switch(t.type){case"link":return(0,d.jsx)(f,{item:t});case"category":return(0,d.jsx)(g,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function y(e){let{className:t}=e;const r=(0,n.jA)();return(0,d.jsx)(x,{items:r.items,className:t})}function x(e){const{items:t,className:r}=e;if(!t)return(0,d.jsx)(y,{...e});const s=(0,n.MN)(t);return(0,d.jsx)("section",{className:(0,a.Z)("row",r),children:s.map(((e,t)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(m,{item:e})},t)))})}},88824:(e,t,r)=>{r.d(t,{c:()=>c});var a=r(67294),n=r(52263);const s=["zero","one","two","few","many","other"];function o(e){return s.filter((t=>e.includes(t)))}const i={locale:"en",pluralForms:o(["one","other"]),select:e=>1===e?"one":"other"};function l(){const{i18n:{currentLocale:e}}=(0,n.Z)();return(0,a.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:o(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),i}}),[e])}function c(){const e=l();return{selectMessage:(t,r)=>function(e,t,r){const a=e.split("|");if(1===a.length)return a[0];a.length>r.pluralForms.length&&console.error(`For locale=${r.locale}, a maximum of ${r.pluralForms.length} plural forms are expected (${r.pluralForms.join(",")}), but the message contains ${a.length}: ${e}`);const n=r.select(t),s=r.pluralForms.indexOf(n);return a[Math.min(s,a.length-1)]}(r,t,e)}}},46664:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/arch-5ef698ddb50577ad73285434b41d6e7e.png"},11151:(e,t,r)=>{r.d(t,{Z:()=>i,a:()=>o});var a=r(67294);const n={},s=a.createContext(n);function o(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);