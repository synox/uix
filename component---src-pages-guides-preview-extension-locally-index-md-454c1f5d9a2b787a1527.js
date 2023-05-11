"use strict";(self.webpackChunk_adobe_uix_docs=self.webpackChunk_adobe_uix_docs||[]).push([[3715],{32778:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return c},default:function(){return b}});var i=a(87462),n=a(45987),o=(a(15007),a(64983)),s=a(91515);const r=["components"],c={},p=(l="InlineAlert",function(e){return console.warn("Component "+l+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.mdx)("div",e)});var l;const d={_frontmatter:c},m=s.Z;function b(e){let{components:t}=e,a=(0,n.Z)(e,r);return(0,o.mdx)(m,(0,i.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"local-preview-of-ui-extensions"},"Local Preview of UI Extensions"),(0,o.mdx)("p",null,"During development, it's important to preview your extension to ensure it meets all requirements and doesn't have any errors. To do so, make sure you meet the following conditions:"),(0,o.mdx)("ol",null,(0,o.mdx)("li",{parentName:"ol"},"Access to an ",(0,o.mdx)("a",{parentName:"li",href:"https://experienceleague.adobe.com/docs/experience-manager.html"},"Adobe Experience Manager (AEM)")," instance. For instructions on how to obtain access, refer to ",(0,o.mdx)("a",{parentName:"li",href:"../get-access"},"How to Get Access"),"."),(0,o.mdx)("li",{parentName:"ol"},"You should have an implemented or partially implemented UI extension. Details on how to do it can be found in ",(0,o.mdx)("a",{parentName:"li",href:"../../services/aem-cf-console-admin/extension-development"},"Step-by-step Extension Development"),".")),(0,o.mdx)("h2",{id:"running-ui-extension-locally"},"Running UI Extension locally"),(0,o.mdx)("p",null,"From the extension project directory, begin by running the following command:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-shell"},"aio app run\n")),(0,o.mdx)("p",null,"This will deploy the actions to Adobe I/O Runtime, while running the UI part on the local machine."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-shell"},"➜  demo-extension-project % aio app run\n  create .vscode/launch.json\n\nNo change to package.json was detected. No package manager install will be executed.\n\nTo view your local application:\n  -> https://localhost:9080\nTo view your deployed application in the Experience Cloud shell:\n  -> https://experience.adobe.com/?devMode=true#/custom-apps/?localDevUrl=https://localhost:9080\npress CTRL+C to terminate dev environment\n")),(0,o.mdx)("h4",{id:"accepting-the-certificate-first-time-users"},"Accepting the certificate (First time users)"),(0,o.mdx)("p",null,"If you are using this application for the first time, you will see a message similar to"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-shell"},"success: generated certificate\nA self signed development certificate has been generated, you will need to accept it in your browser in order to use it.\nWaiting for the certificate to be accepted.... timed out\n")),(0,o.mdx)("p",null,"This message pops up because we use a development SSL certificate for secure communication. Understand more about the purpose of this certificate ",(0,o.mdx)("a",{parentName:"p",href:"https://letsencrypt.org/docs/certificates-for-localhost/"},"here"),"."),(0,o.mdx)("p",null,"If you see this message, please navigate to ",(0,o.mdx)("inlineCode",{parentName:"p"},"https://localhost:9080"),", you should see a screen similar to this."),(0,o.mdx)("p",null,(0,o.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"613px"}},"\n      ",(0,o.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"64.99999999999999%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,o.mdx)("picture",{parentName:"span"},"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/uix/static/2b378084b922b4706af7b7deb20345eb/5530d/cert-1.webp 320w","/uix/static/2b378084b922b4706af7b7deb20345eb/5c2f3/cert-1.webp 613w"],sizes:"(max-width: 613px) 100vw, 613px",type:"image/webp"}),"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/uix/static/2b378084b922b4706af7b7deb20345eb/dd4a7/cert-1.png 320w","/uix/static/2b378084b922b4706af7b7deb20345eb/ac863/cert-1.png 613w"],sizes:"(max-width: 613px) 100vw, 613px",type:"image/png"}),"\n          ",(0,o.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/uix/static/2b378084b922b4706af7b7deb20345eb/ac863/cert-1.png",alt:"Certification",title:"Certification",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,o.mdx)("p",null,"Click on ",(0,o.mdx)("inlineCode",{parentName:"p"},"Advanced"),", the nex screen may vary from browser to browser, but you should see a screen like this, where you can click on ",(0,o.mdx)("inlineCode",{parentName:"p"},"Proceed to localhost (unsafe)")," to accept the certificate."),(0,o.mdx)("p",null,(0,o.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"608px"}},"\n      ",(0,o.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"90.3125%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,o.mdx)("picture",{parentName:"span"},"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/uix/static/94a8822b887641fef60d5eb3eeaffb74/5530d/cert-2.webp 320w","/uix/static/94a8822b887641fef60d5eb3eeaffb74/dfa82/cert-2.webp 608w"],sizes:"(max-width: 608px) 100vw, 608px",type:"image/webp"}),"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/uix/static/94a8822b887641fef60d5eb3eeaffb74/dd4a7/cert-2.png 320w","/uix/static/94a8822b887641fef60d5eb3eeaffb74/5db90/cert-2.png 608w"],sizes:"(max-width: 608px) 100vw, 608px",type:"image/png"}),"\n          ",(0,o.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/uix/static/94a8822b887641fef60d5eb3eeaffb74/5db90/cert-2.png",alt:"Certification",title:"Certification",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,o.mdx)("h2",{id:"previewing-ui-extension-with-additional-parameters-in-url"},"Previewing UI Extension with additional parameters in URL"),(0,o.mdx)("p",null,"As mentioned before, you should have access to an AEM instance. For example, your URL should be structured like this:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-termminal"},"https://experience.adobe.com/?repo=<CURTOMER_AEM_HOST>#/@<CUSTOMER_IMS_ORG>/aem/cf/admin/\n")),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"repo (host name of AEM instance): ",(0,o.mdx)("inlineCode",{parentName:"li"},"repo=<CURTOMER_AEM_HOST>"))),(0,o.mdx)("p",null,(0,o.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,o.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"63.125%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,o.mdx)("picture",{parentName:"span"},"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/uix/static/ebbdf3c353f8ebce0e77df5b9fdac5e2/5530d/cfc-console-overview.webp 320w","/uix/static/ebbdf3c353f8ebce0e77df5b9fdac5e2/0c8fb/cfc-console-overview.webp 640w","/uix/static/ebbdf3c353f8ebce0e77df5b9fdac5e2/94b1e/cfc-console-overview.webp 1280w","/uix/static/ebbdf3c353f8ebce0e77df5b9fdac5e2/0b34d/cfc-console-overview.webp 1920w","/uix/static/ebbdf3c353f8ebce0e77df5b9fdac5e2/d5269/cfc-console-overview.webp 2560w","/uix/static/ebbdf3c353f8ebce0e77df5b9fdac5e2/ba45c/cfc-console-overview.webp 2836w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/uix/static/ebbdf3c353f8ebce0e77df5b9fdac5e2/dd4a7/cfc-console-overview.png 320w","/uix/static/ebbdf3c353f8ebce0e77df5b9fdac5e2/0f09e/cfc-console-overview.png 640w","/uix/static/ebbdf3c353f8ebce0e77df5b9fdac5e2/bbbf7/cfc-console-overview.png 1280w","/uix/static/ebbdf3c353f8ebce0e77df5b9fdac5e2/ac7a9/cfc-console-overview.png 1920w","/uix/static/ebbdf3c353f8ebce0e77df5b9fdac5e2/c7a69/cfc-console-overview.png 2560w","/uix/static/ebbdf3c353f8ebce0e77df5b9fdac5e2/100fa/cfc-console-overview.png 2836w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,o.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/uix/static/ebbdf3c353f8ebce0e77df5b9fdac5e2/bbbf7/cfc-console-overview.png",alt:"Contents Fragment Console",title:"Contents Fragment Console",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,o.mdx)("p",null,"For previewing and testing, you don't need to ",(0,o.mdx)("a",{parentName:"p",href:"../publication"},"publish the extension"),". Instead, you can add extra parameters in the URL:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"ext (extension): ",(0,o.mdx)("inlineCode",{parentName:"li"},"ext=https://localhost:9080")),(0,o.mdx)("li",{parentName:"ul"},"devMode (development mode): ",(0,o.mdx)("inlineCode",{parentName:"li"},"devMode=true")," (required to allow access to resources on ",(0,o.mdx)("inlineCode",{parentName:"li"},"production")," env from localhost)")),(0,o.mdx)("p",null,"The final URL for local preview will look like:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-terminal"},"https://experience.adobe.com/?ext=https://localhost:9080&repo=<CURTOMER_AEM_HOST>#/@<CUSTOMER_IMS_ORG>/aem/cf/admin/\n")),(0,o.mdx)("p",null,"The system will process these parameters, making it work as if the extension was published."),(0,o.mdx)(p,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,o.mdx)("p",null,"Similarly, you can preview any UI Extension that has been ",(0,o.mdx)("a",{parentName:"p",href:"../../services/aem-cf-console-admin/extension-development/#run-on-stage"},"deployed on the stage environment"),", and you can also share a link to the result."),(0,o.mdx)("p",null,"For example, if your extension has implemented additional logic for the ",(0,o.mdx)("a",{parentName:"p",href:"../../services/aem-cf-console-admin/api/#action-bar"},"Action Bar")," in ",(0,o.mdx)("a",{parentName:"p",href:"../../services/aem-cf-console-admin"},"AEM Content Fragments Console"),", you should be able to see the result:"),(0,o.mdx)("p",null,(0,o.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,o.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"15.312499999999998%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,o.mdx)("picture",{parentName:"span"},"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/uix/static/80b780dc41082272b8408bff189a9986/5530d/publishing-2.webp 320w","/uix/static/80b780dc41082272b8408bff189a9986/0c8fb/publishing-2.webp 640w","/uix/static/80b780dc41082272b8408bff189a9986/94b1e/publishing-2.webp 1280w","/uix/static/80b780dc41082272b8408bff189a9986/5a546/publishing-2.webp 1547w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/uix/static/80b780dc41082272b8408bff189a9986/dd4a7/publishing-2.png 320w","/uix/static/80b780dc41082272b8408bff189a9986/0f09e/publishing-2.png 640w","/uix/static/80b780dc41082272b8408bff189a9986/bbbf7/publishing-2.png 1280w","/uix/static/80b780dc41082272b8408bff189a9986/8373c/publishing-2.png 1547w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,o.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/uix/static/80b780dc41082272b8408bff189a9986/bbbf7/publishing-2.png",alt:"New functionality in AEM admin panel",title:"New functionality in AEM admin panel",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,o.mdx)("h2",{id:"retrieving-logs-for-the-ui-extension"},"Retrieving logs for the UI Extension"),(0,o.mdx)("p",null,"To view the logs for your application, you can use the CLI command:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-terminal"},"aio app logs\n")),(0,o.mdx)("p",null,"By default, only the logs from the most recent runs are retrieved. If you need to access a larger set of logs, you can utilize the ",(0,o.mdx)("inlineCode",{parentName:"p"},"--limit")," flag to specify the number of recent runs to fetch."),(0,o.mdx)("h3",{id:"additional-resources"},"Additional resources"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"../../"},"UI Extensibility Overview")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"../../guides/development-flow"},"UI Extensions Development Flow")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"../../overview/faq/"},"FAQ"))))}b.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-preview-extension-locally-index-md-454c1f5d9a2b787a1527.js.map