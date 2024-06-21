"use strict";(self.webpackChunkgo_feature_flag_website=self.webpackChunkgo_feature_flag_website||[]).push([[35524],{31512:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>u,toc:()=>f});var n=a(85893),r=a(11151),l=a(74866),i=a(85162);const o={title:"Multiple Configuration Flags for GO Feature Flag \ud83d\uddc4\ufe0f",authors:["thomaspoignant"],tags:["GO Feature Flag","Open Feature","release","retrievers"]},s="Support Of Multiple Configuration Flags \ud83d\uddc4\ufe0f",u={permalink:"/blog/2023/03/17/multiple-config-file",editUrl:"https://github.com/thomaspoignant/go-feature-flag/tree/main/website/blog/2023-03-17-multiple-config-file/index.mdx",source:"@site/blog/2023-03-17-multiple-config-file/index.mdx",title:"Multiple Configuration Flags for GO Feature Flag \ud83d\uddc4\ufe0f",description:"Are you tired of managing your feature flags with a single configuration flag?",date:"2023-03-17T00:00:00.000Z",tags:[{inline:!0,label:"GO Feature Flag",permalink:"/blog/tags/go-feature-flag"},{inline:!0,label:"Open Feature",permalink:"/blog/tags/open-feature"},{inline:!0,label:"release",permalink:"/blog/tags/release"},{inline:!0,label:"retrievers",permalink:"/blog/tags/retrievers"}],readingTime:2.39,hasTruncateMarker:!0,authors:[{name:"Thomas Poignant",title:"Creator of GO Feature Flag",url:"https://github.com/thomaspoignant",imageURL:"https://github.com/thomaspoignant.png",key:"thomaspoignant"}],frontMatter:{title:"Multiple Configuration Flags for GO Feature Flag \ud83d\uddc4\ufe0f",authors:["thomaspoignant"],tags:["GO Feature Flag","Open Feature","release","retrievers"]},unlisted:!1,prevItem:{title:"Feature Flag best practice",permalink:"/blog/feature-flag-best-practice"},nextItem:{title:"Lint your feature flag config in you CI/CD pipelines \u274c \u2705",permalink:"/blog/2023/02/20/lint-your-feature-flags"}},c={authorsImageUrls:[void 0]},f=[{value:"How to configure multiple flag configuration files",id:"how-to-configure-multiple-flag-configuration-files",level:2},{value:"What happen if 2 files have the same flag?",id:"what-happen-if-2-files-have-the-same-flag",level:2},{value:"Conclusion",id:"conclusion",level:2}];function g(e){const t={admonition:"admonition",code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Are you tired of managing your feature flags with a single configuration flag?"})}),"\n",(0,n.jsxs)(t.p,{children:["We've got good news for you ",(0,n.jsx)(t.strong,{children:"GO feature flag"})," now supports multiple configuration flags! Plus, we've added a new\nfeature that allows all files to be loaded in parallel, making it faster and more efficient."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Retriever Flow",src:a(87867).Z+"",width:"1034",height:"241"})}),"\n",(0,n.jsx)(t.p,{children:"Managing feature flags can be a challenging task, especially as your application grows and becomes more complex.\nWith multiple configuration flags, you can easily manage different feature flag configurations for different apps, user groups, or any other criteria that you need.\nYou can also use the same flags for multiple features, making it easier to maintain and update your code."}),"\n",(0,n.jsx)(t.p,{children:"In addition to multiple configuration flags, we've also ensured that all files are downloaded in parallel.\nThis means that your feature flag configurations will be downloaded faster and more efficiently, improving the performance of your application."}),"\n",(0,n.jsx)(t.h2,{id:"how-to-configure-multiple-flag-configuration-files",children:"How to configure multiple flag configuration files"}),"\n",(0,n.jsx)(t.p,{children:"To configure GO Feature Flag using multiple configuration flags files, simply create multiple files and store them in your favorite place."}),"\n",(0,n.jsxs)(t.p,{children:["Then, use the field ",(0,n.jsx)(t.code,{children:"retrievers"})," in your configuration to configure all the access to your configuration flags."]}),"\n",(0,n.jsxs)(l.Z,{groupId:"code",children:[(0,n.jsx)(i.Z,{value:"relayproxy",label:"Relay Proxy Configuration",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-yaml",children:"# ...\nretrievers:\n  - kind: http\n    url: https://raw.githubusercontent.com/thomaspoignant/go-feature-flag/main/examples/retriever_file/flags.yaml\n  - kind: file\n    path: /local/flag-file.yaml   # Example of local path\n  - kind: http   # you can have multiple time the same type of retriever\n    url: https://raw.githubusercontent.com/thomaspoignant/go-feature-flag/main/testdata/flag-config.yaml\n\n# Before we were using the field retriever that allows only one retriever at the time\n# \n# retriever:\n#   kind: http\n#   url: https://raw.githubusercontent.com/thomaspoignant/go-feature-flag/main/examples/retriever_file/flags.yaml\n\n"})})}),(0,n.jsx)(i.Z,{value:"gomodule",label:"GO Module Configuration",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-go",children:'err := ffclient.Init(ffclient.Config{\n  // ...\n  Retrievers: []retriever.Retriever{\n    &fileretriever.Retriever{\n      Path: "examples/retriever_multiple_config_files/flags.yaml",\n    },\n    &fileretriever.Retriever{\n      Path: "examples/retriever_multiple_config_files/flags2.yaml",\n    },\n  },\n  //...\n\n  // Before we were using the field retriever that allows only one retriever at the time\n  //\n  // Retriever: &fileretriever.Retriever{\n  //     Path: "examples/retriever_multiple_config_files/flags.yaml",\n  // },\n})\n'})})})]}),"\n",(0,n.jsx)(t.h2,{id:"what-happen-if-2-files-have-the-same-flag",children:"What happen if 2 files have the same flag?"}),"\n",(0,n.jsxs)(t.p,{children:["We are taking all the configuration files in the order of the ",(0,n.jsx)(t.code,{children:"retrievers"}),". It means than the latest version of your flag will be the one from the latest file."]}),"\n",(0,n.jsxs)(t.admonition,{title:"example",type:"tip",children:[(0,n.jsxs)(t.p,{children:["We have 3 files that contains the flag ",(0,n.jsx)(t.code,{children:"my-flag"})," and there are in this order in the retriever list :"]}),(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.code,{children:"flag-s3.yaml"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.code,{children:"flag-configmap.yaml"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.code,{children:"flag-github.yaml"})}),"\n"]}),(0,n.jsxs)(t.p,{children:["The flag configuration we will use to evaluate your flag will be the one that is in the file ",(0,n.jsx)(t.code,{children:"flag-github.yaml"})]})]}),"\n",(0,n.jsx)(t.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,n.jsx)(t.p,{children:"We believe that multiple configuration flags and parallel downloads will make it easier for you to manage your feature flags and provide more flexibility to your development process.\nWe hope you find these features useful, and we look forward to hearing your feedback!"}),"\n",(0,n.jsx)(t.p,{children:"If you have any questions or comments, please don't hesitate to reach out to us. We're always happy to help!"})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(g,{...e})}):g(e)}},85162:(e,t,a)=>{a.d(t,{Z:()=>i});a(67294);var n=a(36905);const r={tabItem:"tabItem_Ymn6"};var l=a(85893);function i(e){let{children:t,hidden:a,className:i}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,n.Z)(r.tabItem,i),hidden:a,children:t})}},74866:(e,t,a)=>{a.d(t,{Z:()=>j});var n=a(67294),r=a(36905),l=a(12466),i=a(16550),o=a(20469),s=a(91980),u=a(67392),c=a(20812);function f(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function g(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return f(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function h(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function d(e){let{queryString:t=!1,groupId:a}=e;const r=(0,i.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(l),(0,n.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(r.location.search);t.set(l,e),r.replace({...r.location,search:t.toString()})}),[l,r])]}function p(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,l=g(e),[i,s]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[u,f]=d({queryString:a,groupId:r}),[p,m]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,l]=(0,c.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:r}),v=(()=>{const e=u??p;return h({value:e,tabValues:l})?e:null})();(0,o.Z)((()=>{v&&s(v)}),[v]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!h({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);s(e),f(e),m(e)}),[f,m,l]),tabValues:l}}var m=a(72389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=a(85893);function y(e){let{className:t,block:a,selectedValue:n,selectValue:i,tabValues:o}=e;const s=[],{blockElementScrollPositionUntilNextRender:u}=(0,l.o5)(),c=e=>{const t=e.currentTarget,a=s.indexOf(t),r=o[a].value;r!==n&&(u(t),i(r))},f=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const a=s.indexOf(e.currentTarget)+1;t=s[a]??s[0];break}case"ArrowLeft":{const a=s.indexOf(e.currentTarget)-1;t=s[a]??s[s.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},t),children:o.map((e=>{let{value:t,label:a,attributes:l}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>s.push(e),onKeyDown:f,onClick:c,...l,className:(0,r.Z)("tabs__item",v.tabItem,l?.className,{"tabs__item--active":n===t}),children:a??t},t)}))})}function x(e){let{lazy:t,children:a,selectedValue:r}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:l.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function w(e){const t=p(e);return(0,b.jsxs)("div",{className:(0,r.Z)("tabs-container",v.tabList),children:[(0,b.jsx)(y,{...t,...e}),(0,b.jsx)(x,{...t,...e})]})}function j(e){const t=(0,m.Z)();return(0,b.jsx)(w,{...e,children:f(e.children)},String(t))}},87867:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/retriever-flow-3504f9f4662e13fe654c119d1e042519.png"},11151:(e,t,a)=>{a.d(t,{Z:()=>o,a:()=>i});var n=a(67294);const r={},l=n.createContext(r);function i(e){const t=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(l.Provider,{value:t},e.children)}}}]);