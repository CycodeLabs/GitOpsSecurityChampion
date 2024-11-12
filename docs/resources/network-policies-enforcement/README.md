---
slug: /networkPoliciesEnforcement
id: networkPoliciesEnforcement
sidebar_position: 2
---

# Network Policies Enforcement

## Overview

Network policies are essential for controlling communication within Kubernetes, particularly in GitOps namespaces where strict access control to GitOps resources is critical. These policies act like a firewall, defining rules to restrict traffic between pods and ensuring that only authorized resources can communicate.

This principle involves two key steps:
1. **Define Network Policies:** Implement Network Policies to restrict access to GitOps internal resources.
2. **Enforce with CNI Plugin:** Ensure a CNI (Container Network Interface) plugin is installed and active in your cluster to enforce these policies. Without it, the network policies will not be enforced.

## Why It's Important

1. **Restricting Access and Minimizing Attack Surface:** Network policies limit communication between components, reducing the attack surface on GitOps resources by allowing only necessary traffic.  
2. **Preventing Lateral Movement:** Enforced network policies help contain compromised components, preventing them from accessing critical GitOps resources or spreading across the environment.

## Implementation Steps
1. **Test Existing Network Policies:**  Some GitOps tools come with pre-configured network policies to protect their resources. To check if these policies are already in place, you can use the following command to list the network policies in your cluster:
    ```bash
   kubectl get networkpolicies --all-namespaces
    ```
    This command will display all the network policies in your Kubernetes environment. If you don’t see policies for the GitOps tools, you may need to define them yourself.

2. **Define Network Policies:**  If no network policies are configured, create network policies in your Kubernetes cluster to restrict access to the GitOps resources. For example, define appropriate policies to ensure that only specific services or pods can communicate with the GitOps tool (e.g., ArgoCD).

3. **Ensure CNI Plugin is Installed and Active:**  Verify that a Container Network Interface (CNI) plugin is installed and active in your cluster. The CNI plugin is responsible for enforcing network policies across your environment. Without it, network policies will not be enforced. [Read more about CNI Plugins](https://kubernetes.io/docs/concepts/extend-kubernetes/compute-storage-net/network-plugins/)

4. **Enforce Network Policies:**  Ensure that your CNI plugin actively enforces network policies, especially in environments where enforcement is not automatic (e.g., AWS EKS or Azure AKS). For detailed instructions on validating the correct enforcement of network policies, refer to this [SUSE Knowledge Base article](https://www.suse.com/support/kb/doc/?id=000020041).

5. **Monitor and Audit Policies:** Monitor and audit network policies to ensure they remain effective, mainly as your GitOps setup evolves. Set up alerts for any policy violations or unauthorized access attempts.


## Cloud Provider Differences
The default behavior for network policy enforcement varies across major cloud providers. We have verified whether the managed Kubernetes services from these providers include CNI plugins that enforce network policies out of the box. Below are our findings. (Note: It's still important to validate network policies yourself to ensure no custom configurations are in place in your organization):
- **AWS EKS**:  Network policies are **not enforced by default**. Even if a CNI plugin is installed during cluster creation, network policy enforcement must be configured manually. For more details, refer to the [AWS documentation](https://docs.aws.amazon.com/eks/latest/userguide/cni-network-policy-configure.html#cni-network-policy-setup).
- **Azure AKS**: Network policies are **not enforced by default**.
- **GCP GKE**: Network policies are **enforced by default**, using [Cilium](https://cloud.google.com/kubernetes-engine/docs/concepts/dataplane-v2) with eBPF for efficient enforcement. 

## Additional Resources

- [CNI Plugins in Kubernetes](https://kubernetes.io/docs/concepts/extend-kubernetes/compute-storage-net/network-plugins/)
- [Network Policies SUSE Knowledge Base article](https://www.suse.com/support/kb/doc/?id=000020041)
- [Cilium Network Policies and eBPF on GCP](https://cloud.google.com/kubernetes-engine/docs/concepts/dataplane-v2)

## Priority Level

- **Gold:** Essential for secure GitOps deployments, providing robust access control and minimizing risk.