---
slug: /branchProtection
id: branchProtection
sidebar_position: 6
---

# Branch Protection

## Overview

Branch protection rules are essential for ensuring the integrity and security of the GitOps workflow. These rules enforce strict conditions that must be met before changes can be merged into critical branches, such as `main` or `production`. By requiring pull requests, status checks, code reviews, and other safeguards, these rules help prevent unauthorized or insecure changes from reaching production systems.

## Why It’s Important

1. **Prevent Unauthorized Changes:** Branch protection rules prevent direct pushes to critical branches, ensuring that changes go through a controlled process with proper review and approval.
2. **Enforce Security and Quality Checks:** By requiring status checks to pass before merging, you ensure that automated tests, such as linting, secret scanning, and sanity checks, are validated before deployment.

## Implementation Steps

1. **Define Protection Rules:** Configure your version control system to enforce protection rules on critical branches like `main` and `production`. The rules should include:
   - **Require a Pull Request Before Merging:** All changes to the protected branch must be made through a pull request, ensuring that each change is reviewed.
   - **Require Status Checks to Pass Before Merging:** Ensure that status checks such as linting, secret scanning, and sanity checks pass before allowing a merge. This guarantees that code adheres to security and quality standards.
   - **Require Signed Commits:** Only allow commits that are signed to verify the authenticity of changes.
   - **Disable Force Pushes:** Prevent force pushes to protected branches, which could rewrite commit history and bypass safeguards.
   - **Require Code Reviews:** Specify a minimum number of approvals required before merging, ensuring changes are properly reviewed by the team.

2. **Configure Automated Status Checks:** Set up automated workflows for linting, secret scanning, dependency checks, and other tests to run on every pull request. These status checks should be required to pass before a pull request can be merged.

## Additional Resources

- [GitHub Branch Protection](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches)
- [GitLab Protected Branches](https://docs.gitlab.com/ee/user/project/protected_branches.html)