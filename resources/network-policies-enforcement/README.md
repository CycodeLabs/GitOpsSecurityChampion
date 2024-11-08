# Network Policies Enforcement

## Overview

Network policies are crucial for limiting access in a Kubernetes environment, especially in a GitOps setup where strict control over resource access is essential. For GitOps, ensure that only necessary resources (such as ArgoCD resources) have access to GitOps tools. Implementing network policies alone is not enough; you must confirm that these policies are actively enforced within the cloud environment.

## Why It’s Important

1. **Restricting Access:** Network policies help restrict access between components, minimizing the attack surface by only allowing necessary communication.
2. **Protection Against Lateral Movement:** Enforced network policies can prevent compromised components from accessing critical GitOps resources or propagating throughout the environment.
3. **Cloud-Specific Behavior:** Cloud providers differ in how they handle network policy enforcement. Understanding these differences ensures consistent policy application across cloud providers.

## Cloud Provider Differences

The enforcement of network policies varies across the three major cloud providers:

- **AWS EKS**: Network policies are not enforced by default, even when proper network policy rules are set.
- **Azure AKS**: Similar to AWS EKS, network policies are not enforced by default.
- **GCP GKE**: Network policies are enforced by default, using Cilium with eBPF for efficient network policy enforcement, enhancing both security and performance.

## Implementation Steps

1. **Define Network Policies**: Configure network policies in your Kubernetes clusters to restrict access to only essential resources. For example, allow ArgoCD only to access its necessary resources.
2. **Verify Policy Enforcement**: Confirm that network policies are actively enforced. This is particularly important for AWS EKS and Azure AKS, where enforcement does not happen automatically.
3. **Use Cilium on GCP**: On GCP, leverage Cilium with eBPF for default network policy enforcement, which offers better performance and lower latency.
4. **Continuous Monitoring**: Regularly monitor network policy compliance, especially if you deploy across multiple clouds with different enforcement behaviors.

## Best Practices

- Apply network policies to all GitOps-related resources, restricting them to only necessary connections.
- Verify network policy enforcement, particularly on AWS EKS and Azure AKS.
- On GCP, take advantage of Cilium with eBPF for network policy management.
- Regularly audit and monitor network policies to ensure they remain effective and align with security requirements.

## Additional Resources

- [Cilium Network Policies and eBPF on GCP](https://cloud.google.com/kubernetes-engine/docs/concepts/dataplane-v2)

## Priority Level

- **Gold:** Essential for secure GitOps deployments, providing robust access control and minimizing risk.