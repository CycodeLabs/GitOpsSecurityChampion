---
slug: /slsaProvenanceVerification
id: slsaProvenanceVerification
sidebar_position: 8
---

# SLSA Provenance Verification

## Overview

Before updating or installing new GitOps tools, users must verify the SLSA Provenance provided by the GitOps supplier. SLSA (Supply Chain Levels for Software Artifacts) is a framework designed to ensure the integrity and security of software artifacts. Verifying the provenance of GitOps tools ensures they are built securely and haven't been tampered with during the supply chain process. For example, tools like ArgoCD publish signed SLSA Provenance, which end users should verify.

## Why It’s Important

1. **Prevent Supply Chain Attacks:** Verifying the SLSA Provenance ensures that the GitOps tool being installed or updated is legitimate and has not been tampered with or compromised. SLSA Provenance provides a verifiable record of the build process, which is essential for validating the security of the software and identifying potential vulnerabilities. 

## Implementation Steps

1. **Use Trusted Sources:** Only install or update GitOps tools from trusted sources, such as official GitHub repositories or verified release channels, to minimize the risk of compromise. 
2. **Verify the SLSA Provenance:** Use appropriate tools to validate the signature of the SLSA Provenance document, ensuring it hasn’t been tampered with and is authentic. 

## Additional Resources

- [SLSA Framework](https://slsa.dev/)
- [Verification of ArgoCD Artifacts](https://argo-cd.readthedocs.io/en/stable/operator-manual/signed-release-assets/)
- [Verification of Flux Artifacts](https://fluxcd.io/blog/2022/02/security-image-provenance/)
