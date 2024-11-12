---
slug: /separatingConfig
id: separatingConfig
sidebar_position: 6
---

# Separation Of Concerns

## Overview
Separate the GitOps Kubernetes configurations (e.g., manifests) into a dedicated Git repository, distinct from your GitOps managed application source code. Isolating application configuration from the codebase enhances deployment control, simplifies auditing, and prevents unintended CI/CD pipeline triggers due to minor configuration changes.

## Why It’s Important

1. **Access Control and Security:** Developers focused on application code shouldn't necessarily have access to production configuration repositories. A separate repository ensures that only authorized personnel can modify production configurations
2. **Cleaner Audit Logs:** Keeping configuration in a separate repository ensures that commit history only reflects changes to deployment specs and configurations, making audit logs more focused and useful.
3. **Managing Complex Applications:** For multi-service applications (e.g., ELK Stack, Kafka with ZooKeeper), separating manifests into their own repository enables independent versioning and release cycles for each service while maintaining cohesive deployments.
4. **Avoiding Infinite CI/CD Loops:** Mixing configuration changes with application code in a single repository can lead to unwanted CI/CD pipeline triggers, creating continuous rebuilds. A dedicated configuration repository avoids this issue by preventing triggers for configuration-only changes.

## Implementation Steps

1. **Create Dedicated Repositories:** Set up one Git repository for GitOps resources and another for GitOps-managed application files (the apps GitOps will create).
2. **Define Access Controls:** Implement role-based access control (RBAC) for each repository to enforce clear boundaries between application developers and deployment managers. 
3. **Automate Configuration Updates:** Configure your GitOps tool to pull configurations only from the dedicated configuration repository, ensuring separation and preventing unwanted triggers. 

## Additional Resources

- [ArgoCD Documentation on Config and Code Separation](https://argo-cd.readthedocs.io/en/stable/)
- [Flux GitOps Workflow Guide](https://fluxcd.io/docs/)

## Priority Level

- **Gold:** Critical for robust GitOps workflows and ensuring security, manageability, and separation of duties in complex deployments.