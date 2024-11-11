# GitOps Security Champion

GitOpsSecurityChampion aims to provide security guidelines along with best practices and resources to secure GitOps workflows. GitOps is a modern approach to managing infrastructure and applications through version-controlled configuration files stored in a Git repository. By following security best practices, organizations can ensure the integrity, confidentiality, and availability of their GitOps environments.

## Best Practices

| Best Practice       | Priority | Description                                                                                      | Link                               |
|---------------------|----------|--------------------------------------------------------------------------------------------------|------------------------------------|
| Cluster Separation  | Gold   | Host the GitOps tool on a separate cluster to safeguard it from application-level compromises. | [Details](resources/cluster-separation/README.md) |
| Separating Config Vs. Source Code Repositories | Gold   | Store Kubernetes manifests in a separate repo from application code to ensure cleaner versioning and access control. | [Details](resources/separating-config-vs-source-code-repos/README.md) |
| Network Policies Enforcement | Gold     | Ensure network policies limit access only to necessary resources and are enforced correctly. | [Details](resources/network-policies-enforcement/README.md) |
| Strict RBAC Policies        | Gold     | Limit permissions to the GitOps system, ensure agents have restricted access, and use admission control for policy enforcement. | [Details](resources/strict-rbac-policies/README.md) |
| Restrict Repository Access    | Gold         | Keep the configuration repository private, and grant access only to authorized teams or individuals.  | [Details](resources/restrict-repository-access/README.md) |
| Branch Protection Rules                 | Gold     | Enforce rules for code reviews, CI/CD checks, and restricted access to critical branches to ensure only authorized changes are deployed. | [Details](resources/branch-protection-rules/README.md)                    |
| Use Password Management Tool | Gold     | Sensitive data should never be kept in plain text and should always be stored in a proper secret management tool. | [Details](resources/use-password-management-tool/README.md)        |
| SLSA Provenance Verification | Gold     | Users should always verify the SLSA Provenance produced by the GitOps supplier. For example, ArgoCD publishes a signed SLSA Provenance that should be verified by end users to ensure GitOps integrity. | [Details](resources/slsa-provenance-verification/README.md)        |

### Cluster Separation

Cluster separation in GitOps means isolating the GitOps control plane on its own dedicated cluster, separate from application clusters. This isolation minimizes the impact of potential security incidents: if an application cluster is compromised, it won’t provide an attacker direct access to the GitOps management system. This separation reduces risks, enhances control, and improves overall security posture.


### Separating Config Vs. Source Code Repositories

In GitOps workflows, it is recommended to store configuration (such as Kubernetes manifests) in a separate Git repository from the application source code. This separation provides a cleaner distinction between application code and configuration, making it easier to audit, manage access, and avoid unnecessary CI/CD rebuilds due to configuration-only changes.

### Network Policies Enforcement

Limit access in your GitOps environment by enforcing network policies, allowing only necessary resources access to each other. Even if network policies are configured, you must verify they’re enforced.


### Strict RBAC Policies

To ensure a secure GitOps environment, strict Role-Based Access Control (RBAC) policies should be enforced. Permissions to manage the GitOps system should be granted only to specific personnel or teams who need it, such as the DevOps team, while most developers should not have this level of access. The GitOps agent should be restricted to managing only specific namespaces and clusters, defined through an allowed list. Additionally, admission control should be used to ensure that the configurations deployed by GitOps meet your organization’s security and compliance policies. By following these practices, you can minimize risk, prevent unauthorized access, and ensure that only compliant configurations are deployed.

### Restrict Repository Access

In a GitOps workflow, repositories that store configuration files such as Kubernetes manifests and Helm charts are crucial to infrastructure management. These repositories should be kept private and must not accept outside collaborators. Only a small number of authorized individuals, typically from specific teams such as DevOps, should have access to these repositories. This limited access reduces the risk of accidental or malicious changes that could compromise the infrastructure.


### Branch Protection Rules

Branch protection rules are essential for safeguarding critical configuration repositories used in GitOps workflows. These rules ensure that code changes cannot be pushed directly to important branches like `main` or `production` without passing through a controlled process, such as code reviews and automated testing. By enforcing these rules, you ensure that only authorized changes are deployed to your infrastructure.


### Use Password Management Tool

Sensitive data such as passwords, API keys, and other secrets should never be kept in plain text in Git repositories. Instead, use a password management tool to securely store and manage these secrets. This practice ensures that sensitive information is protected from unauthorized access and reduces the risk of accidental exposure.

### SLSA Provenance Verification

Users should always verify the SLSA Provenance produced by the GitOps supplier. For example, ArgoCD publishes a signed SLSA Provenance that should be verified by end users to ensure GitOps integrity.
