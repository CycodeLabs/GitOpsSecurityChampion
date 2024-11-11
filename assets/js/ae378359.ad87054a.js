"use strict";(self.webpackChunkgitopssecuritychampion=self.webpackChunkgitopssecuritychampion||[]).push([[74],{8037:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>s,metadata:()=>r,toc:()=>a});const r=JSON.parse('{"id":"resources/network-policies-enforcement/networkPoliciesEnforcement","title":"Network Policies Enforcement","description":"Overview","source":"@site/docs/resources/network-policies-enforcement/README.md","sourceDirName":"resources/network-policies-enforcement","slug":"/networkPoliciesEnforcement","permalink":"/GitOpsSecurityChampion/networkPoliciesEnforcement","draft":false,"unlisted":false,"editUrl":"https://github.com/CycodeLabs/GitOpsSecurityChampion/blob/main/docs/resources/network-policies-enforcement/README.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"slug":"/networkPoliciesEnforcement","id":"networkPoliciesEnforcement","sidebar_position":2},"sidebar":"resources","previous":{"title":"Cluster Separation","permalink":"/GitOpsSecurityChampion/clusterSeparation"},"next":{"title":"Restrict Repository Access","permalink":"/GitOpsSecurityChampion/restrictRepositoryAccess"}}');var o=i(4848),t=i(8453);const s={slug:"/networkPoliciesEnforcement",id:"networkPoliciesEnforcement",sidebar_position:2},c="Network Policies Enforcement",l={},a=[{value:"Overview",id:"overview",level:2},{value:"Why It\u2019s Important",id:"why-its-important",level:2},{value:"Cloud Provider Differences",id:"cloud-provider-differences",level:2},{value:"Implementation Steps",id:"implementation-steps",level:2},{value:"Best Practices",id:"best-practices",level:2},{value:"Additional Resources",id:"additional-resources",level:2},{value:"Priority Level",id:"priority-level",level:2}];function d(e){const n={a:"a",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"network-policies-enforcement",children:"Network Policies Enforcement"})}),"\n",(0,o.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,o.jsx)(n.p,{children:"Network policies are crucial for limiting access in a Kubernetes environment, especially in a GitOps setup where strict control over resource access is essential. For GitOps, ensure that only necessary resources (such as ArgoCD resources) have access to GitOps tools. Implementing network policies alone is not enough; you must confirm that these policies are actively enforced within the cloud environment."}),"\n",(0,o.jsx)(n.h2,{id:"why-its-important",children:"Why It\u2019s Important"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Restricting Access:"})," Network policies help restrict access between components, minimizing the attack surface by only allowing necessary communication."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Protection Against Lateral Movement:"})," Enforced network policies can prevent compromised components from accessing critical GitOps resources or propagating throughout the environment."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Cloud-Specific Behavior:"})," Cloud providers differ in how they handle network policy enforcement. Understanding these differences ensures consistent policy application across cloud providers."]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"cloud-provider-differences",children:"Cloud Provider Differences"}),"\n",(0,o.jsx)(n.p,{children:"The enforcement of network policies varies across the three major cloud providers:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"AWS EKS"}),": Network policies are not enforced by default, even when proper network policy rules are set."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Azure AKS"}),": Similar to AWS EKS, network policies are not enforced by default."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"GCP GKE"}),": Network policies are enforced by default, using Cilium with eBPF for efficient network policy enforcement, enhancing both security and performance."]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"implementation-steps",children:"Implementation Steps"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Define Network Policies"}),": Configure network policies in your Kubernetes clusters to restrict access to only essential resources. For example, allow ArgoCD only to access its necessary resources."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Verify Policy Enforcement"}),": Confirm that network policies are actively enforced. This is particularly important for AWS EKS and Azure AKS, where enforcement does not happen automatically."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Use Cilium on GCP"}),": On GCP, leverage Cilium with eBPF for default network policy enforcement, which offers better performance and lower latency."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Continuous Monitoring"}),": Regularly monitor network policy compliance, especially if you deploy across multiple clouds with different enforcement behaviors."]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"best-practices",children:"Best Practices"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Apply network policies to all GitOps-related resources, restricting them to only necessary connections."}),"\n",(0,o.jsx)(n.li,{children:"Verify network policy enforcement, particularly on AWS EKS and Azure AKS."}),"\n",(0,o.jsx)(n.li,{children:"On GCP, take advantage of Cilium with eBPF for network policy management."}),"\n",(0,o.jsx)(n.li,{children:"Regularly audit and monitor network policies to ensure they remain effective and align with security requirements."}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"additional-resources",children:"Additional Resources"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://cloud.google.com/kubernetes-engine/docs/concepts/dataplane-v2",children:"Cilium Network Policies and eBPF on GCP"})}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"priority-level",children:"Priority Level"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Gold:"})," Essential for secure GitOps deployments, providing robust access control and minimizing risk."]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>c});var r=i(6540);const o={},t=r.createContext(o);function s(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);