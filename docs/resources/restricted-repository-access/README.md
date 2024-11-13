---
slug: /restrictedRepositoryAccess
id: restrictedRepositoryAccess
sidebar_position: 5
---


# Restricted Repository Access

## Overview
In a GitOps workflow, repositories that store Kubernetes manifests, Helm charts, and other configuration files are essential for managing infrastructure. These repositories should be kept private, with access strictly limited to authorized individuals or teams. Allowing outside collaborators or broad access increases the risk of unauthorized changes, whether accidental or malicious.

## Why It’s Important
1. **Protect Sensitive Data:** Configuration repositories often contain sensitive infrastructure details that must remain secure. Unauthorized access can expose sensitive information or lead to misconfigurations that compromise the system's security.
2. **Enforce Better Access Control:** By separating configuration repositories from source code repositories (as discussed in [GitOps Manifest Segregation](resources/gitops-manifest-segregation/README.md)), you can grant access based on roles and needs, further upholding the principle of least privilege.

## Implementation Steps

1. **Keep Repositories Private:** Ensure that GitOps configuration repositories are set to private and restrict any public access.
2. **Restrict Collaborator Access:** Limit repository access to a small, trusted group of individuals or specific teams, such as the DevOps team, responsible for maintaining the infrastructure.