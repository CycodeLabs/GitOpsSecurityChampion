---
slug: /separatingConfig
id: separatingConfig
sidebar_position: 6
---

# Separating Config Vs. Source Code Repositories

## Overview

Separating your Kubernetes configuration (e.g., manifests) into a dedicated Git repository, distinct from your application source code, is a core GitOps best practice. By keeping application configuration isolated from the application codebase, you gain greater control over deployments, simplify auditing, and prevent unintended CI/CD pipeline triggers from minor configuration changes.

## Why It’s Important

1. **Clear Separation of Code and Config:** Modifying configurations (such as updating the number of replicas) should not require an entire CI build process, as it does not affect the core application code.
2. **Cleaner Audit Logs:** When configuration is in a separate repository, the commit history only reflects changes to deployment specs and configurations, without the noise from regular development check-ins.
3. **Management of Complex Applications:** For applications consisting of multiple services (e.g., ELK Stack, Kafka with ZooKeeper), having manifests in a separate repository allows each service to maintain its own versioning and release cycle, while still being deployed as a cohesive unit.
4. **Separation of Access and Control:** Developers who work on application code should not necessarily have the ability to push to production configuration repositories. Separating repositories allows different access controls, ensuring that only authorized personnel can modify production configurations.
5. **Avoiding Infinite CI/CD Loops:** Mixing config changes with application code in a single repository can lead to unwanted CI/CD build triggers, creating a loop of rebuilds. A separate config repo prevents such CI/CD triggers from being initiated by config-only changes.

## Implementation Steps

1. **Create Dedicated Repositories:** Set up one Git repository for the application source code and another for configuration, such as Kubernetes manifests.
2. **Define Access Controls:** Implement role-based access control (RBAC) for each repository to enforce separation between application developers and deployment managers.
3. **Automate Config Changes:** Configure your GitOps tool to pull configurations only from the dedicated configuration repository.
4. **Monitor Changes:** Set up logging and alerting to monitor changes to configuration, especially in production.

## Best Practices

- Ensure configurations are version-controlled independently from the application source code.
- Use branch protection rules to safeguard configurations in the config repository.
- Document which repository holds specific configurations, especially for large applications with multiple services.
- Use CI/CD pipelines to validate configuration changes separately before pushing them to the main configuration repository.

## Additional Resources

- [ArgoCD Documentation on Config and Code Separation](https://argo-cd.readthedocs.io/en/stable/)
- [Flux GitOps Workflow Guide](https://fluxcd.io/docs/)

## Priority Level

- **Gold:** Critical for robust GitOps workflows and ensuring security, manageability, and separation of duties in complex deployments.