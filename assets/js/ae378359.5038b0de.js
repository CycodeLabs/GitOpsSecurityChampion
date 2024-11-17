"use strict";(self.webpackChunkgitopssecuritychampion=self.webpackChunkgitopssecuritychampion||[]).push([[74],{8037:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>s,metadata:()=>t,toc:()=>a});const t=JSON.parse('{"id":"resources/network-policies-enforcement/networkPoliciesEnforcement","title":"Network Policies Enforcement","description":"Overview","source":"@site/docs/resources/network-policies-enforcement/README.md","sourceDirName":"resources/network-policies-enforcement","slug":"/networkPoliciesEnforcement","permalink":"/networkPoliciesEnforcement","draft":false,"unlisted":false,"editUrl":"https://github.com/CycodeLabs/GitOpsSecurityChampion/blob/main/docs/resources/network-policies-enforcement/README.md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"slug":"/networkPoliciesEnforcement","id":"networkPoliciesEnforcement","sidebar_position":3},"sidebar":"resources","previous":{"title":"GitOps Manifest Segregation","permalink":"/gitOpsManifestSegregation"},"next":{"title":"Strict RBAC Policies","permalink":"/strictRBACPolicies"}}');var o=i(4848),r=i(8453);const s={slug:"/networkPoliciesEnforcement",id:"networkPoliciesEnforcement",sidebar_position:3},c="Network Policies Enforcement",l={},a=[{value:"Overview",id:"overview",level:2},{value:"Why It&#39;s Important",id:"why-its-important",level:2},{value:"Implementation Steps",id:"implementation-steps",level:2},{value:"Cloud Provider Differences",id:"cloud-provider-differences",level:2},{value:"Additional Resources",id:"additional-resources",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"network-policies-enforcement",children:"Network Policies Enforcement"})}),"\n",(0,o.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,o.jsx)(n.p,{children:"Network policies are essential for controlling communication within Kubernetes, particularly in GitOps namespaces where strict access control to GitOps resources is critical. These policies act like a firewall, defining rules to restrict traffic between pods and ensuring that only authorized resources can communicate."}),"\n",(0,o.jsx)(n.p,{children:"This principle involves two key steps:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Define Network Policies:"})," Implement Network Policies to restrict access to GitOps internal resources."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Enforce with CNI Plugin:"})," Ensure a CNI (Container Network Interface) plugin is installed and active in your cluster to enforce these policies. Without it, the network policies will not be enforced."]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"why-its-important",children:"Why It's Important"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Restricting Access and Minimizing Attack Surface:"})," Network policies limit communication between components, reducing the attack surface on GitOps resources by allowing only necessary traffic."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Preventing Lateral Movement:"})," Enforced network policies help contain compromised components, preventing them from accessing critical GitOps resources or spreading across the environment."]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"implementation-steps",children:"Implementation Steps"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Test Existing Network Policies:"}),"  Some GitOps tools come with pre-configured network policies to protect their resources. To check if these policies are already in place, you can use the following command to list the network policies in your cluster:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"kubectl get networkpolicies --all-namespaces\n"})}),"\n",(0,o.jsx)(n.p,{children:"This command will display all the network policies in your Kubernetes environment. If you don\u2019t see policies for the GitOps tools, you may need to define them yourself."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Define Network Policies:"}),"  If no network policies are configured, create network policies in your Kubernetes cluster to restrict access to the GitOps resources. For example, define appropriate policies to ensure that only specific services or pods can communicate with the GitOps tool (e.g., ArgoCD)."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Ensure CNI Plugin is Installed and Active:"}),"  Verify that a Container Network Interface (CNI) plugin is installed and active in your cluster. The CNI plugin is responsible for enforcing network policies across your environment. Without it, network policies will not be enforced. ",(0,o.jsx)(n.a,{href:"https://kubernetes.io/docs/concepts/extend-kubernetes/compute-storage-net/network-plugins/",children:"Read more about CNI Plugins"})]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Enforce Network Policies:"}),"  Ensure that your CNI plugin actively enforces network policies, especially in environments where enforcement is not automatic (e.g., AWS EKS or Azure AKS). For detailed instructions on validating the correct enforcement of network policies, refer to this ",(0,o.jsx)(n.a,{href:"https://www.suse.com/support/kb/doc/?id=000020041",children:"SUSE Knowledge Base article"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Monitor and Audit Policies:"})," Monitor and audit network policies to ensure they remain effective, mainly as your GitOps setup evolves. Set up alerts for any policy violations or unauthorized access attempts."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"cloud-provider-differences",children:"Cloud Provider Differences"}),"\n",(0,o.jsx)(n.p,{children:"The default behavior for network policy enforcement varies across major cloud providers. We have verified whether the managed Kubernetes services from these providers include CNI plugins that enforce network policies out of the box. Below are our findings. (Note: It's still important to validate network policies yourself to ensure no custom configurations are in place in your organization):"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"AWS EKS"}),":  Network policies are ",(0,o.jsx)(n.strong,{children:"not enforced by default"}),". Even if a CNI plugin is installed during cluster creation, network policy enforcement must be configured manually. For more details, refer to the ",(0,o.jsx)(n.a,{href:"https://docs.aws.amazon.com/eks/latest/userguide/cni-network-policy-configure.html#cni-network-policy-setup",children:"AWS documentation"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Azure AKS"}),": Network policies are ",(0,o.jsx)(n.strong,{children:"not enforced by default"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"GCP GKE"}),": Network policies are ",(0,o.jsx)(n.strong,{children:"enforced by default"}),", using ",(0,o.jsx)(n.a,{href:"https://cloud.google.com/kubernetes-engine/docs/concepts/dataplane-v2",children:"Cilium"})," with eBPF for efficient enforcement."]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"additional-resources",children:"Additional Resources"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://kubernetes.io/docs/concepts/extend-kubernetes/compute-storage-net/network-plugins/",children:"CNI Plugins in Kubernetes"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://www.suse.com/support/kb/doc/?id=000020041",children:"Network Policies SUSE Knowledge Base article"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://cloud.google.com/kubernetes-engine/docs/concepts/dataplane-v2",children:"Cilium Network Policies and eBPF on GCP"})}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>c});var t=i(6540);const o={},r=t.createContext(o);function s(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);