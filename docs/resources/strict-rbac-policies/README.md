---
slug: /strictRBACPolicies
id: strictRBACPolicies
sidebar_position: 4
---

# Strict RBAC Policies

## Overview

Role-Based Access Control (RBAC) policies are crucial for restricting access to the GitOps system and ensuring that only specific individuals or teams can manage it. Enforcing RBAC through admission controllers ensures that configurations deployed via GitOps comply with your organization's security and compliance standards, mitigating risks associated with over-permissioning and unauthorized changes.

## Why It’s Important

1. **Minimize Unauthorized Access:** Strict RBAC limits administrative access to authorized teams (e.g., DevOps), reducing the risk of unauthorized changes.
2. **Limit GitOps Agent Permissions:** The GitOps agent should only have permissions for specific namespaces and clusters, minimizing potential damage if compromised. 

## Implementation Steps
1. **Limit Access to GitOps System:**  - Grant administrative access only to authorized teams (e.g., DevOps), and avoid giving developers access to modify GitOps configurations.
2. **Restrict GitOps Agent Permissions:**  - Configure the GitOps agent to manage only the necessary namespaces and clusters, applying the least privilege principle.
3. **Implement Admission Control:**  - Set up admission controllers to ensure that only compliant configurations are deployed via GitOps, enforcing your organization's security and policy requirements. 

## Additional Resources

- [Kubernetes RBAC documentation](https://kubernetes.io/docs/reference/access-authn-authz/rbac/)
- [ArgoCD RBAC Best Practices](https://argo-cd.readthedocs.io/en/stable/operator-manual/rbac/)

## Priority Level

- **Gold:** Ensuring strict RBAC policies is a critical step in securing your GitOps workflows. It is essential for protecting access and ensuring compliance with organizational policies.