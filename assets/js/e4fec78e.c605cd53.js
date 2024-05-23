"use strict";(self.webpackChunkgo_feature_flag_website=self.webpackChunkgo_feature_flag_website||[]).push([[87712],{59354:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>r,toc:()=>h});var a=n(85893),i=n(11151);const s={sidebar_position:100},o="Frequently Asked Questions",r={id:"faq",title:"Frequently Asked Questions",description:"Why Use Feature Flags?",source:"@site/versioned_docs/version-v1.28.1/faq.md",sourceDirName:".",slug:"/faq",permalink:"/docs/faq",draft:!1,unlisted:!1,editUrl:"https://github.com/thomaspoignant/go-feature-flag/tree/main/website/versioned_docs/version-v1.28.1/faq.md",tags:[],version:"v1.28.1",sidebarPosition:100,frontMatter:{sidebar_position:100},sidebar:"tutorialSidebar",previous:{title:"Migrate from v0.x.x to v1.x.x",permalink:"/docs/tooling/migrate_v0_v1"},next:{title:"OpenFeature Remote Evaluation Protocol (OFREP)",permalink:"/docs/experimental/ofrep"}},l={},h=[{value:"Why Use Feature Flags?",id:"why-use-feature-flags",level:3},{value:"What is the lifecycle of a flag?",id:"what-is-the-lifecycle-of-a-flag",level:3},{value:"What happens if my configuration file is not reachable/deleted?",id:"what-happens-if-my-configuration-file-is-not-reachabledeleted",level:3},{value:"What is the best rollout strategy?",id:"what-is-the-best-rollout-strategy",level:3},{value:"How do we ensure that users affected by the feature flags are not always the same?",id:"how-do-we-ensure-that-users-affected-by-the-feature-flags-are-not-always-the-same",level:3}];function c(e){const t={a:"a",code:"code",em:"em",h1:"h1",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"frequently-asked-questions",children:"Frequently Asked Questions"}),"\n",(0,a.jsx)(t.h3,{id:"why-use-feature-flags",children:"Why Use Feature Flags?"}),"\n",(0,a.jsx)(t.p,{children:"This one of most common question I get.\nFeature flags are a software development technique that allows the toggling of specific functionalities on and off at runtime without the need to deploy new code."}),"\n",(0,a.jsxs)(t.p,{children:["It allows you to decouple ",(0,a.jsx)(t.strong,{children:"deploy"})," and ",(0,a.jsx)(t.strong,{children:"release"}),", giving you better control and more experimentation over the full lifecycle of features."]}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h3,{id:"what-is-the-lifecycle-of-a-flag",children:"What is the lifecycle of a flag?"}),"\n",(0,a.jsx)(t.p,{children:"Managing the lifecycle of feature flags is crucial to prevent cluttering your codebase with obsolete elements. Here's a step-by-step guide:"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Creation"}),": Initiate by adding the flag to your configuration file, setting it to 0% to avoid impacting users."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Evaluation"}),": Implement the flag evaluation in your code (refer to ",(0,a.jsx)(t.a,{href:"/docs/go_module/target_user#variation",children:"variation"}),")."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Deployment"}),": Deploy your application with the variation check in place."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Rollout"}),": Gradually enable the flag for users."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Completion"}),": Once the feature reaches 100% visibility, eliminate the variation call from your code."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Clean-Up"}),": Deploy your application sans the variation check."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Removal"}),": Finally, delete the flag from your configuration file."]}),"\n"]}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h3,{id:"what-happens-if-my-configuration-file-is-not-reachabledeleted",children:"What happens if my configuration file is not reachable/deleted?"}),"\n",(0,a.jsxs)(t.p,{children:["If while you are on production and for some reason your flag file becomes unreachable, we will be able to serve the users based on the last version of the file we were able to read. We will continue to try reading the file based on the ",(0,a.jsx)(t.code,{children:"pollingInterval"})," you have configured."]}),"\n",(0,a.jsxs)(t.p,{children:["If you start a new instance and the file is not reachable to module, it will fail to initialize except if you have set the option ",(0,a.jsx)(t.code,{children:"StartWithRetrieverError"})," in the config. With this option, we will serve the SDK the default value ",(0,a.jsx)(t.em,{children:"(the 3rd param in your variation)"})," until the flag becomes available again."]}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h3,{id:"what-is-the-best-rollout-strategy",children:"What is the best rollout strategy?"}),"\n",(0,a.jsx)(t.p,{children:'The lib offers numerous rollout strategies, with no single "best" approach as it heavily depends on the context of your feature release.\nSome strategies include:'}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Simple Cut-Off"}),": For non-critical releases, transitioning the flag from 0% to 100% immediately for all users might be suitable."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Progressive Rollout"}),": For releases that might impact infrastructure, a gradual rollout can mitigate risks by incrementally increasing user exposure."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Targeted Release"}),": To affect only a specific user segment, applying rules to your flag can be effective."]}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"You have an endless list of rollout strategies depending on what is your feature."}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h3,{id:"how-do-we-ensure-that-users-affected-by-the-feature-flags-are-not-always-the-same",children:"How do we ensure that users affected by the feature flags are not always the same?"}),"\n",(0,a.jsx)(t.p,{children:"To avoid always have the same users getting affected by a flag, we compute the hash that allows us to determine if the user is part of the percentage that is not computed only based on the user key but a combination of the user key and the flag name."}),"\n",(0,a.jsx)(t.p,{children:"It guarantees that the user will be always in the same group but depending on the flag."}),"\n",(0,a.jsx)(t.hr,{})]})}function u(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>o});var a=n(67294);const i={},s=a.createContext(i);function o(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);