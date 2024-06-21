"use strict";(self.webpackChunkgo_feature_flag_website=self.webpackChunkgo_feature_flag_website||[]).push([[23526],{94092:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var n=a(85893),o=a(11151);const i={title:"Add Feature Flags in your Node.JS application using GO Feature Flag and Open Feature SDK",description:"In this video, we'll walk you through the process of implementing feature flags in your Node js applications, allowing you to roll out new features gradually and control their visibility in real-time.",authors:["thomaspoignant"],tags:["openfeature","nodeJS"],image:"http://gofeatureflag.org/assets/images/banner-819d71b94352213afa22d2b53f376cab.png"},r=void 0,l={permalink:"/blog/2023/07/24/nodejs-tutorial",editUrl:"https://github.com/thomaspoignant/go-feature-flag/tree/main/website/blog/2023-07-24-nodejs-tutorial/index.md",source:"@site/blog/2023-07-24-nodejs-tutorial/index.md",title:"Add Feature Flags in your Node.JS application using GO Feature Flag and Open Feature SDK",description:"In this video, we'll walk you through the process of implementing feature flags in your Node js applications, allowing you to roll out new features gradually and control their visibility in real-time.",date:"2023-07-24T00:00:00.000Z",tags:[{inline:!0,label:"openfeature",permalink:"/blog/tags/openfeature"},{inline:!0,label:"nodeJS",permalink:"/blog/tags/node-js"}],readingTime:2.85,hasTruncateMarker:!0,authors:[{name:"Thomas Poignant",title:"Creator of GO Feature Flag",url:"https://github.com/thomaspoignant",imageURL:"https://github.com/thomaspoignant.png",key:"thomaspoignant"}],frontMatter:{title:"Add Feature Flags in your Node.JS application using GO Feature Flag and Open Feature SDK",description:"In this video, we'll walk you through the process of implementing feature flags in your Node js applications, allowing you to roll out new features gradually and control their visibility in real-time.",authors:["thomaspoignant"],tags:["openfeature","nodeJS"],image:"http://gofeatureflag.org/assets/images/banner-819d71b94352213afa22d2b53f376cab.png"},unlisted:!1,prevItem:{title:"The Power of Rollbacks",permalink:"/blog/2023/09/12/the-power-of-rollbacks"},nextItem:{title:"Enhancing Flag Configuration with Flag Metadata",permalink:"/blog/2023/06/09/flag-metadata"}},s={authorsImageUrls:[void 0]},u=[{value:"Setup GO Feature Flag",id:"setup-go-feature-flag",level:2},{value:"Create our first flag",id:"create-our-first-flag",level:2},{value:"Start GO Feature Flag",id:"start-go-feature-flag",level:2},{value:"Create Node.JS application using OpenFeature",id:"create-nodejs-application-using-openfeature",level:2},{value:"Conclusion",id:"conclusion",level:2}];function c(e){const t={a:"a",br:"br",code:"code",em:"em",h2:"h2",img:"img",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("iframe",{width:"100%",height:"444",src:"https://www.youtube.com/embed/ascFFZqjQAI",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),"\n",(0,n.jsx)(t.p,{children:"Welcome to this tutorial on using feature flags in Node js with GO Feature Flag and Open Feature SDKs."}),"\n",(0,n.jsx)(t.p,{children:"In this video, we'll walk you through the process of implementing feature flags in your Node js applications, allowing you to roll out new features gradually and control their visibility in real-time."}),"\n",(0,n.jsx)(t.h2,{id:"setup-go-feature-flag",children:"Setup GO Feature Flag"}),"\n",(0,n.jsxs)(t.p,{children:["Before we proceed with the implementation, it's essential to set up GO Feature Flag to efficiently evaluate our flags.\nTo achieve this, we will create a new file called ",(0,n.jsx)(t.code,{children:"goff-proxy.yaml"})," that will contain the configuration on how to retrieve our feature flags' configuration file."]}),"\n",(0,n.jsxs)(t.p,{children:["In this file, we will first configure where to retrieve the flags and also a polling interval ",(0,n.jsx)(t.em,{children:"(here 5000 milliseconds)"}),".",(0,n.jsx)(t.br,{}),"\n","It means that GO Feature Flag will read the file every 5 seconds to check if your configuration has changed."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-yaml",children:"retriever:\n  kind: github  # type of retriever we are using\n  repositorySlug: thomaspoignant/demo-goff  # repository we are retrieving\n  path: flags.yaml  # location of the file in the repository\npollingInterval: 5000  # Time in milliseconds we wait before trying to check for changes\n"})}),"\n",(0,n.jsx)(t.h2,{id:"create-our-first-flag",children:"Create our first flag"}),"\n",(0,n.jsxs)(t.p,{children:["To create our flag we start by using the ",(0,n.jsx)(t.a,{href:"https://editor.gofeatureflag.org",children:"GO Feature Flag editor"}),", for our test we will create a flag\nnamed ",(0,n.jsx)(t.code,{children:"my-new-feature"})," and it will use a type ",(0,n.jsx)(t.code,{children:"boolean"}),"."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"editor.png",src:a(27966).Z+"",width:"1439",height:"885"})}),"\n",(0,n.jsx)(t.p,{children:"When it is ready you can  copy/paste the flag definition and commit it in GitHub."}),"\n",(0,n.jsx)(t.h2,{id:"start-go-feature-flag",children:"Start GO Feature Flag"}),"\n",(0,n.jsx)(t.p,{children:"We will now start GO Feature Flag, for this we gonna use the docker image."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-shell",children:"docker run -p 1031:1031 -e RETRIEVER_TOKEN=$GITHUB_TOKEN -v $(pwd):/goff thomaspoignant/go-feature-flag\n"})}),"\n",(0,n.jsx)(t.p,{children:"With this command we launch GO Feature Flag on the port 1031 and with the configuration file we just created, you can also see that we provide a GitHub Token, this is to avoid being rate limited by the Github API."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"terminal.png",src:a(59376).Z+"",width:"1316",height:"217"})}),"\n",(0,n.jsx)(t.p,{children:"GO Feature Flag is now started, and we can see that our flag is loaded."}),"\n",(0,n.jsx)(t.h2,{id:"create-nodejs-application-using-openfeature",children:"Create Node.JS application using OpenFeature"}),"\n",(0,n.jsx)(t.p,{children:"Now let's start to create our Node JS application."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:'import { GoFeatureFlagProvider } from "@openfeature/go-feature-flag-provider"\nimport { EvaluationContext, OpenFeature } from "@openfeature/js-sdk"\n\nasync function main(){\n  // We start by creating an instance of the Go Feature Flag Provider\n  // We are just setting the endpoint to connect to our instance of GO Feature Flag\n  const provider = new GoFeatureFlagProvider({\n     endpoint: \'http://localhost:1031\'\n  })\n\n  // We associate the provider to the SDK\n  // It means that now when we call OpenFeature it will rely on GO Feature Flag as a backend.\n  OpenFeature.setProvider(provider)\n  \n  // We need to ask for a client to evaluate the flags.\n  const client = OpenFeature.getClient()\n\n  // We create a context for our evaluation.\n  const ctx: EvaluationContext = {\n     targetingKey: \'aae1cb41-c3cb-4753-a117-031ddc958f82\'\n  }\n\n  // We evaluate the flag.\n  const myNewFeature = await client.getBooleanValue("my-new-feature", false, ctx)\n\n  if (myNewFeature) {\n    // the new feature is available\n  } else {\n    // apply the old feature\n  }\n}\n\nmain()\n'})}),"\n",(0,n.jsx)(t.p,{children:"You are now ready to use GO Feature Flag in your application."}),"\n",(0,n.jsx)(t.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,n.jsx)(t.p,{children:"In this tutorial we've seen how simple it is to use GO Feature Flag in your Node.JS application using the OpenFeature SDK."}),"\n",(0,n.jsx)(t.p,{children:"I encourage you to read our documentation to see all the amazing possibility that you will have."}),"\n",(0,n.jsxs)(t.p,{children:["And please provide us ",(0,n.jsx)(t.a,{href:"mailto:contact@gofeatureflag.org",children:"feedbacks"})," on how we can make your experience even better."]})]})}function d(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},27966:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/editor-78f4f0d3bcefb410bc09d5a338d0252c.png"},59376:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/terminal-0db207eb433127d3176598bee06805ce.png"},11151:(e,t,a)=>{a.d(t,{Z:()=>l,a:()=>r});var n=a(67294);const o={},i=n.createContext(o);function r(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);