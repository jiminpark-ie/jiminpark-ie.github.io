---
layout: page
title: A Multi-View Attention-Based Encoder-Decoder Framework for Clustered Traveling Salesman Problem
description: IEEE Robotics and Automation Letters (RA-L), vol. 11, no. 1, pp. 137–144, 2026
---

**Authors:** Jimin Park†, Inguk Choi†, and Hyun-Jung Kim &nbsp;(†&nbsp;Co-first authors)
**Venue:** IEEE Robotics and Automation Letters (IEEE RA-L), vol. 11, no. 1, pp. 137–144, 2026
[[Paper]](https://ieeexplore.ieee.org/document/11248888) · [[Code]](https://github.com/Ingukchoi/MultiViewAttentionCluTSP)

---

### TL;DR

Autonomous mobile robots often serve **grouped** delivery points — a setting
captured by the **Clustered Traveling Salesman Problem (CluTSP)**, where all nodes
in a cluster must be visited consecutively. CluTSP couples two interdependent
subproblems: **inter-cluster routing** (which cluster to visit next) and
**intra-cluster routing** (the path inside a cluster). We train a single **deep
reinforcement learning** agent with a **multi-view attention encoder-decoder**
that solves both at once, in one fast construction pass.

### The problem

CluTSP arises naturally in last-mile delivery, automated warehouse routing,
emergency response, and drone reconnaissance, where visits are grouped into zones.
It is NP-hard, and existing **decomposition-based** methods handle the inter- and
intra-cluster subproblems _separately_ — which limits information sharing between
global and local decisions, needs long computation (each subproblem is itself
NP-hard), and relies on hand-designed heuristics.

### The approach

- **Multi-view GNN encoder** — a **global-view** encoder over the fully-connected
  graph captures inter-cluster (global) structure, while a **local-view** encoder
  over the intra-cluster graph captures local neighborhoods; the two views are
  fused (GATv2-based). Feature augmentation over eight rotations/flips yields
  position-invariant node embeddings.
- **Collaborative decoder** — a **Global Guiding Module** selects the next cluster
  and a **Local Routing Module** builds the intra-cluster path. They cooperate to
  construct the whole tour in a single one-shot pass, rather than solving each
  subproblem in isolation.
- **Learned end-to-end** — trained with REINFORCE and a shared baseline.

### Results

The framework **significantly outperforms** metaheuristics and prior learning-based
methods within a short computation time, and — trained only on small instances —
**generalizes to much larger CluTSP instances without retraining**. Ablation
studies confirm the value of the multi-view encoder and collaborative decoder. To
our knowledge, this is the first DRL approach for cluster-constrained routing.

---

### My Role

I am a **co-first author** of this work, jointly leading the framework design
(multi-view encoder and collaborative decoder), implementation, and experiments.
