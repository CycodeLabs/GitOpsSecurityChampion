"use strict";(self.webpackChunkgitopssecuritychampion=self.webpackChunkgitopssecuritychampion||[]).push([[67],{5348:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>a,contentTitle:()=>c,default:()=>p,frontMatter:()=>n,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"resources/restricted-repository-access/restrictedRepositoryAccess","title":"Restricted Repository Access","description":"Overview","source":"@site/docs/resources/restricted-repository-access/README.md","sourceDirName":"resources/restricted-repository-access","slug":"/restrictedRepositoryAccess","permalink":"/restrictedRepositoryAccess","draft":false,"unlisted":false,"editUrl":"https://github.com/CycodeLabs/GitOpsSecurityChampion/blob/main/docs/resources/restricted-repository-access/README.md","tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"slug":"/restrictedRepositoryAccess","id":"restrictedRepositoryAccess","sidebar_position":5},"sidebar":"resources","previous":{"title":"Strict RBAC Policies","permalink":"/strictRBACPolicies"},"next":{"title":"Branch Protection","permalink":"/branchProtection"}}');var i=t(4848),o=t(8453);const n={slug:"/restrictedRepositoryAccess",id:"restrictedRepositoryAccess",sidebar_position:5},c="Restricted Repository Access",a={},l=[{value:"Overview",id:"overview",level:2},{value:"Why It\u2019s Important",id:"why-its-important",level:2},{value:"Implementation Steps",id:"implementation-steps",level:2}];function d(e){const s={a:"a",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.header,{children:(0,i.jsx)(s.h1,{id:"restricted-repository-access",children:"Restricted Repository Access"})}),"\n",(0,i.jsx)(s.h2,{id:"overview",children:"Overview"}),"\n",(0,i.jsx)(s.p,{children:"In a GitOps workflow, repositories that store Kubernetes manifests, Helm charts, and other configuration files are essential for managing infrastructure. These repositories should be kept private, with access strictly limited to authorized individuals or teams. Allowing outside collaborators or broad access increases the risk of unauthorized changes, whether accidental or malicious."}),"\n",(0,i.jsx)(s.h2,{id:"why-its-important",children:"Why It\u2019s Important"}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Protect Sensitive Data:"})," Configuration repositories often contain sensitive infrastructure details that must remain secure. Unauthorized access can expose sensitive information or lead to misconfigurations that compromise the system's security."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Enforce Better Access Control:"})," By separating configuration repositories from source code repositories (as discussed in ",(0,i.jsx)(s.a,{href:"/gitOpsManifestSegregation",children:"GitOps Manifest Segregation"}),"), you can grant access based on roles and needs, further upholding the principle of least privilege."]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"implementation-steps",children:"Implementation Steps"}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Keep Repositories Private:"})," Ensure that GitOps configuration repositories are set to private and restrict any public access."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Restrict Collaborator Access:"})," Limit repository access to a small, trusted group of individuals or specific teams, such as the DevOps team, responsible for maintaining the infrastructure."]}),"\n"]})]})}function p(e={}){const{wrapper:s}={...(0,o.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,s,t)=>{t.d(s,{R:()=>n,x:()=>c});var r=t(6540);const i={},o=r.createContext(i);function n(e){const s=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:n(e.components),r.createElement(o.Provider,{value:s},e.children)}}}]);