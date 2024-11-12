# GitOps Security Champion

The **GitOps Security Champion** project provides a set of best practices, guidelines, and tools designed to help security engineers and DevOps teams implement secure GitOps workflows. With GitOps becoming a standard for managing infrastructure and application deployments, securing these processes is essential to mitigate security risks. This open source project provides foundational practices to secure GitOps environments, covering everything from access control to software provenance verification.

## Project Structure
The project is structured around individual best practices, each in its own file. A central README offers an overview of all recommendations, while each practice has a dedicated README with detailed guidance. This structure makes it easy to navigate and implement the practices.

## Best Practices

| Best Practice                  | Description                                                                                                                                            | Link                                                       |
|--------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------|
| Cluster Separation             | Deploy the GitOps agent in a separate Kubernetes cluster from the one it manages to protect against application-level compromises.                      | [Details](resources/cluster-separation/README.md)          |
| Separation Of Concerns         | Store Kubernetes manifests that manage GitOps agent resources in a separate repository from its application deployment files to ensure security.         | [Details](resources/separation-of-concerns/README.md)      |
| Network Policies Enforcement   | Implement network policies to restrict access to GitOps Kubernetes resources and ensure that a CNI plugin enforces these rules correctly.              | [Details](resources/network-policies-enforcement/README.md) |
| Strict RBAC Policies           | Enforce strict RBAC policies to ensure only authorized users can manage the GitOps system and grant appropriate permissions.                           | [Details](resources/strict-rbac-policies/README.md)        |
| Restrict Repository Access     | Keep GitOps configuration repositories private, granting access only to authorized teams or individuals.                                               | [Details](resources/restrict-repository-access/README.md)  |
| Branch Protection Rules        | Implement code review requirements, CI/CD checks, and restrict access to critical branches on the GitOps repository to control deployments.            | [Details](resources/branch-protection-rules/README.md)     |
| Use Password Management Tool   | Store sensitive data in a proper secret management tool rather than in plaintext.                                                                      | [Details](resources/use-password-management-tool/README.md) |
| SLSA Provenance Verification   | Verify the SLSA provenance from GitOps suppliers (e.g., ArgoCD’s signed SLSA provenance) to ensure the integrity of GitOps deployments.                | [Details](resources/slsa-provenance-verification/README.md) |


## How to Contribute

We encourage contributions to make this repository as practical and comprehensive as possible. You can contribute in the following ways:
1. **Contributing Resources and Documentation:** If you have expertise in GitOps security or notice areas where documentation can be improved or expanded, submit a pull request with your suggestions.
2. **Creating Examples and Tools:** Real-world examples, scripts, or tools that demonstrate the implementation of best practices will be highly beneficial to users.
3. **Reporting Issues:** If you encounter any issues or inaccuracies, please submit an issue with a detailed description.

Please refer to our [CONTRIBUTING.md](https://github.com/CycodeLabs/GitOpsSecurityChampion/blob/main/CONTRIBUTING.md) file for more details.
