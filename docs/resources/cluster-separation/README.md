---
slug: /clusterSeparation
id: clusterSeparation
sidebar_position: 1
---

# Cluster Separation

## Overview

Cluster separation in GitOps involves hosting the GitOps control plane on a distinct Kubernetes cluster, separate from the application clusters. By isolating the GitOps tool (e.g., ArgoCD, FluxCD) from the clusters where applications run, you create a security boundary that limits the risk of an attacker gaining control over the GitOps pipeline if they compromise an application cluster.

## Why It’s Important

1. **Security Isolation:** A compromised application cluster won’t grant direct access to the GitOps tool, reducing the potential impact of the breach.
2. **Enhanced Control:** A dedicated GitOps cluster allows for stricter access control and better monitoring of the deployment process.
3. **Reduced Attack Surface:** Keeping the GitOps cluster more secure and isolated from publicly exposed application clusters reduces its vulnerability to network-based attacks.

## Implementation Steps

1. **Set Up a Dedicated GitOps Cluster:** Deploy your GitOps tool in a separate Kubernetes cluster, isolated from production and staging clusters.
2. **Enforce Network Isolation:** Use network policies to prevent the application clusters from directly communicating with the GitOps cluster, allowing access only for necessary pull and deployment operations.
3. **Monitor for Anomalies:** Set up logging and monitoring specifically for the GitOps cluster to alert on any suspicious activities.
