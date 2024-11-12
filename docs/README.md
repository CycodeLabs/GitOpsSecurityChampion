# GitOps Security Champion

The **GitOps Security Champion** project provides a set of best practices, guidelines, and tools designed to help security engineers and DevOps teams implement secure GitOps workflows. With GitOps becoming a standard for managing infrastructure and application deployments, securing these processes is essential to mitigate security risks. This open source project provides foundational practices to secure GitOps environments, covering everything from access control to software provenance verification.

The best practices in this project are organized by priority level — **Bronze**, **Silver**, and **Gold** — to help teams identify and implement security measures based on their needs and available resources.

## Project Structure
The project is structured around individual best practices, each in its own file. A central README offers an overview of all recommendations, while each practice has a dedicated README with detailed guidance. This structure makes it easy to navigate and implement the practices.

## Best Practices

| Best Practice       | Priority | Description                                                                                      | Link                               |
|---------------------|----------|--------------------------------------------------------------------------------------------------|------------------------------------|
| Cluster Separation  | Bronze   | Deploy the GitOps agent in a separate Kubernetes cluster from the one it manages to protect against application-level compromises. | [Details](resources/cluster-separation/README.md) |
| Separation Of Concerns | Silver   | Store Kubernetes manifests that manage GitOps agent resources in a separate repository from the its application deployment files to ensure that only authorized personnel can modify the GitOps agent. | [Details](resources/separation-of-concerns/README.md) |
| Network Policies Enforcement | Bronze     | Implement network policies to restrict access to GitOps Kubernetes resources, ensuring only necessary components can communicate. Ensure a CNI plugin enforces these network rules correctly. | [Details](resources/network-policies-enforcement/README.md) |
| Strict RBAC Policies        | Silver     | Enforce strict Role-Based Access Control (RBAC) policies to ensure only authorized users can manage the GitOps system and grant the GitOps agent appropriate permissions, reducing the risk of unauthorized changes and maintaining security compliance.  | [Details](resources/strict-rbac-policies/README.md) |
| Restrict Repository Access    | Bronze         | Keep the Gitops's Keep GitOps configuration repositories private, granting access only to authorized teams or individuals. | [Details](resources/restrict-repository-access/README.md) |
| Branch Protection Rules                 | Silver     | Implement code review requirements, CI/CD checks, and restrict access to critical branches on the GitOps Application repository to ensure that only authorized changes are deployed to the system. | [Details](resources/branch-protection-rules/README.md)                    |
| Use Password Management Tool | Silver     | Store sensitive data in a proper secret management tool rather than in plaintext. | [Details](resources/use-password-management-tool/README.md)        |
| SLSA Provenance Verification | Gold     | Verify the SLSA provenance produced by GitOps suppliers (e.g., ArgoCD’s signed SLSA provenance) to ensure the integrity of GitOps deployments. | [Details](resources/slsa-provenance-verification/README.md)        |


## How to Contribute

We encourage contributions to make this repository as practical and comprehensive as possible. You can contribute in the following ways:
1. **Contributing Resources and Documentation:** If you have expertise in GitOps security or notice areas where documentation can be improved or expanded, submit a pull request with your suggestions.
2. **Creating Examples and Tools:** Real-world examples, scripts, or tools that demonstrate the implementation of best practices will be highly beneficial to users.
3. **Reporting Issues:** If you encounter any issues or inaccuracies, please submit an issue with a detailed description.

Please refer to our [CONTRIBUTING.md](https://github.com/CycodeLabs/GitOpsSecurityChampion/blob/main/CONTRIBUTING.md) file for more details.
