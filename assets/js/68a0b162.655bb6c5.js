"use strict";(self.webpackChunkgo_feature_flag_website=self.webpackChunkgo_feature_flag_website||[]).push([[62787],{22898:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>v,frontMatter:()=>d,metadata:()=>c,toc:()=>p});var r=n(85893),a=n(11151),i=n(74866),o=n(85162),l=n(9617),s=n(9286);const d={sidebar_position:30,title:"Android / Kotlin",description:"How to use the OpenFeature Kotlin SDK for your Android application"},u=void 0,c={id:"openfeature_sdk/client_providers/openfeature_android",title:"Android / Kotlin",description:"How to use the OpenFeature Kotlin SDK for your Android application",source:"@site/versioned_docs/version-v1.31.0/openfeature_sdk/client_providers/openfeature_android.mdx",sourceDirName:"openfeature_sdk/client_providers",slug:"/openfeature_sdk/client_providers/openfeature_android",permalink:"/docs/openfeature_sdk/client_providers/openfeature_android",draft:!1,unlisted:!1,editUrl:"https://github.com/thomaspoignant/go-feature-flag/tree/main/website/versioned_docs/version-v1.31.0/openfeature_sdk/client_providers/openfeature_android.mdx",tags:[],version:"v1.31.0",sidebarPosition:30,frontMatter:{sidebar_position:30,title:"Android / Kotlin",description:"How to use the OpenFeature Kotlin SDK for your Android application"},sidebar:"tutorialSidebar",previous:{title:"React",permalink:"/docs/openfeature_sdk/client_providers/openfeature_react"},next:{title:"Use the relay proxy",permalink:"/docs/relay_proxy/"}},h={},p=[{value:"About this provider",id:"about-this-provider",level:2},{value:"Install the provider",id:"install-the-provider",level:2},{value:"How to use the provider?",id:"how-to-use-the-provider",level:2},{value:"Available options",id:"available-options",level:3},{value:"Reconnection",id:"reconnection",level:3},{value:"Event streaming",id:"event-streaming",level:3},{value:"Features status",id:"features-status",level:2}];function f(e){const t={a:"a",br:"br",code:"code",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://search.maven.org/artifact/org.gofeatureflag.openfeature/gofeatureflag-kotlin-provider",children:(0,r.jsx)(t.img,{src:"https://img.shields.io/maven-central/v/org.gofeatureflag.openfeature/gofeatureflag-kotlin-provider?color=blue&style=flat-square",alt:"Maven Central Version"})}),"\n",(0,r.jsx)(t.img,{src:"https://img.shields.io/badge/status-experimental-red?style=flat-square",alt:"Static Badge"})]}),"\n",(0,r.jsx)(t.p,{children:"This OpenFeature provider has a Kotlin implementation for Android to communicate with the GO Feature\nFlag Server."}),"\n",(0,r.jsxs)(t.p,{children:["The OpenFeature Kotlin is experimental, and the provider is also experimental.",(0,r.jsx)(t.br,{}),"\n","We don't recommend using this in production yet."]}),"\n",(0,r.jsx)(t.h2,{id:"about-this-provider",children:"About this provider"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://gofeatureflag.org",children:"GO Feature Flag"})," provider allows you to connect to your GO Feature Flag\ninstance with the OpenFeature Kotlin SDK."]}),"\n",(0,r.jsxs)(t.p,{children:["This is a client provider made for Android, we do not recommend using it in a server environment.",(0,r.jsx)(t.br,{}),"\n","If you want to use it in a server environment, you should use\nthe ",(0,r.jsxs)(t.a,{href:"/docs/openfeature_sdk/server_providers/openfeature_java",children:[(0,r.jsx)(t.code,{children:"Java"})," provider"]}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"install-the-provider",children:"Install the provider"}),"\n",(0,r.jsxs)(i.Z,{groupId:"code",children:[(0,r.jsxs)(o.Z,{value:"gradle",label:"gradle",children:[(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:'implementation("org.gofeatureflag.openfeature:gofeatureflag-kotlin-provider:0.0.1-beta.1")\n'})}),(0,r.jsx)(s.Z,{language:"toml",showLineNumbers:!0,children:`api("dev.openfeature:android-sdk:${l.qg.tW}")\nimplementation("org.gofeatureflag.openfeature:gofeatureflag-kotlin-provider${l.qg.fl}")`})]}),(0,r.jsx)(o.Z,{value:"maven",label:"maven",children:(0,r.jsx)(s.Z,{language:"xml",showLineNumbers:!0,children:`<dependency>\n    <groupId>dev.openfeature</groupId>\n    <artifactId>sdk</artifactId>\n    <artifactId>${l.qg.tW}</artifactId>\n</dependency>\n<dependency>\n    <groupId>org.gofeatureflag.openfeature</groupId>\n    <artifactId>gofeatureflag-kotlin-provider</artifactId>\n    <version>${l.qg.fl}</version>\n</dependency>`})})]}),"\n",(0,r.jsx)(t.h2,{id:"how-to-use-the-provider",children:"How to use the provider?"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-kotlin",children:'val evaluationContext = ImmutableContext(\n    targetingKey = "0a23d9a5-0a8f-42c9-9f5f-4de3afd6cf99",\n    attributes = mutableMapOf(\n        "region" to Value.String("us-east-1"),\n        "email" to Value.String("john.doe@gofeatureflag.org")\n    )\n)\n\nOpenFeatureAPI.setProvider(\n    GoFeatureFlagProvider(\n        options = GoFeatureFlagOptions(\n            endpoint = "http://localhost:1031"\n        )\n    ), evaluationContext\n)\n\nval client = OpenFeatureAPI.getClient("my-client")\nif (client.getBooleanValue("my-flag", false)) {\n    println("my-flag is enabled")\n}\nOpenFeatureAPI.shutdown()\n'})}),"\n",(0,r.jsx)(t.h3,{id:"available-options",children:"Available options"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Option name"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Default"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"endpoint"}),(0,r.jsx)(t.td,{children:"String"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"endpoint is the URL where your GO Feature Flag server is located."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"timeout"}),(0,r.jsx)(t.td,{children:"Long"}),(0,r.jsx)(t.td,{children:"10000"}),(0,r.jsx)(t.td,{children:"(optional) timeout is the time in millisecond we wait for an answer from the server."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"maxIdleConnections"}),(0,r.jsx)(t.td,{children:"Int"}),(0,r.jsx)(t.td,{children:"1000"}),(0,r.jsx)(t.td,{children:"(optional) maxIdleConnections is the maximum number of connexions in the connexion pool."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"keepAliveDuration"}),(0,r.jsx)(t.td,{children:"Long"}),(0,r.jsx)(t.td,{children:"7200000"}),(0,r.jsx)(t.td,{children:"(optional) keepAliveDuration is the time in millisecond we keep the connexion open."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"apiKey"}),(0,r.jsx)(t.td,{children:"String"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"(optional) If GO Feature Flag is configured to authenticate the requests, you should provide an API Key to the provider. Please ask the administrator of the relay proxy to provide an API Key."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"retryDelay"}),(0,r.jsx)(t.td,{children:"Long"}),(0,r.jsx)(t.td,{children:"300"}),(0,r.jsx)(t.td,{children:"(optional) delay in millisecond to wait before retrying to connect the websocket"})]})]})]}),"\n",(0,r.jsx)(t.h3,{id:"reconnection",children:"Reconnection"}),"\n",(0,r.jsx)(t.p,{children:"If the connection to the GO Feature Flag instance fails, the provider will attempt to reconnect."}),"\n",(0,r.jsx)(t.h3,{id:"event-streaming",children:"Event streaming"}),"\n",(0,r.jsx)(t.p,{children:"Event streaming is not implemented yet in the GO Feature Flag provider."}),"\n",(0,r.jsx)(t.h2,{id:"features-status",children:"Features status"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Status"}),(0,r.jsx)(t.th,{children:"Feature"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"\u2705"}),(0,r.jsx)(t.td,{children:"Flag evaluation"}),(0,r.jsx)(t.td,{children:"It is possible to evaluate all the type of flags"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"\u2705"}),(0,r.jsx)(t.td,{children:"Cache invalidation"}),(0,r.jsx)(t.td,{children:"Websocket mechanism is in place to refresh the cache in case of configuration change"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"\u274c"}),(0,r.jsx)(t.td,{children:"Logging"}),(0,r.jsx)(t.td,{children:"Not supported by the SDK"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"\u274c"}),(0,r.jsx)(t.td,{children:"Flag Metadata"}),(0,r.jsx)(t.td,{children:"Not supported by the SDK"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"\u274c"}),(0,r.jsx)(t.td,{children:"Event Streaming"}),(0,r.jsx)(t.td,{children:"Not implemented"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"\u274c"}),(0,r.jsx)(t.td,{children:"Unit test"}),(0,r.jsx)(t.td,{children:"Not implemented"})]})]})]}),"\n",(0,r.jsx)("sub",{children:"Implemented: \u2705 | In-progress: \u26a0\ufe0f | Not implemented yet: \u274c"})]})}function v(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(f,{...e})}):f(e)}},85162:(e,t,n)=>{n.d(t,{Z:()=>o});n(67294);var r=n(36905);const a={tabItem:"tabItem_Ymn6"};var i=n(85893);function o(e){let{children:t,hidden:n,className:o}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,o),hidden:n,children:t})}},74866:(e,t,n)=>{n.d(t,{Z:()=>w});var r=n(67294),a=n(36905),i=n(12466),o=n(16550),l=n(20469),s=n(91980),d=n(67392),u=n(20812);function c(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return c(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}(n);return function(e){const t=(0,d.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const a=(0,o.k6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(a.location.search);t.set(i,e),a.replace({...a.location,search:t.toString()})}),[i,a])]}function v(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,i=h(e),[o,s]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:i}))),[d,c]=f({queryString:n,groupId:a}),[v,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,i]=(0,u.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:a}),x=(()=>{const e=d??v;return p({value:e,tabValues:i})?e:null})();(0,l.Z)((()=>{x&&s(x)}),[x]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);s(e),c(e),g(e)}),[c,g,i]),tabValues:i}}var g=n(72389);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var m=n(85893);function j(e){let{className:t,block:n,selectedValue:r,selectValue:o,tabValues:l}=e;const s=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.o5)(),u=e=>{const t=e.currentTarget,n=s.indexOf(t),a=l[n].value;a!==r&&(d(t),o(a))},c=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=s.indexOf(e.currentTarget)+1;t=s[n]??s[0];break}case"ArrowLeft":{const n=s.indexOf(e.currentTarget)-1;t=s[n]??s[s.length-1];break}}t?.focus()};return(0,m.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},t),children:l.map((e=>{let{value:t,label:n,attributes:i}=e;return(0,m.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>s.push(e),onKeyDown:c,onClick:u,...i,className:(0,a.Z)("tabs__item",x.tabItem,i?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function b(e){let{lazy:t,children:n,selectedValue:a}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,m.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function y(e){const t=v(e);return(0,m.jsxs)("div",{className:(0,a.Z)("tabs-container",x.tabList),children:[(0,m.jsx)(j,{...t,...e}),(0,m.jsx)(b,{...t,...e})]})}function w(e){const t=(0,g.Z)();return(0,m.jsx)(y,{...e,children:c(e.children)},String(t))}},9617:e=>{e.exports=JSON.parse('{"qg":{"SZ":"1.9.0","fl":"0.0.1-beta.2","m1":"0.2.23","tW":"0.3.0"}}')}}]);