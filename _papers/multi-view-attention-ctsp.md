---
layout: page
title: A Multi-View Attention-Based Encoder-Decoder Framework for Clustered Traveling Salesman Problem
description: IEEE Robotics and Automation Letters (RA-L), vol. 11, no. 1, pp. 137–144, 2026
---

**Authors:** Jimin Park†, Inguk Choi†, and Hyun-Jung Kim &nbsp;(†&nbsp;Co-first authors)
**Venue:** IEEE Robotics and Automation Letters (IEEE RA-L), vol. 11, no. 1, pp. 137–144, 2026
[[Paper]](https://ieeexplore.ieee.org/document/11248888)

---

### TL;DR

The **Clustered Traveling Salesman Problem (CTSP)** is a TSP variant where cities
are grouped into clusters and all cities of a cluster must be visited
consecutively before moving on. We propose a **deep-learning construction method
— an attention-based encoder–decoder** that reads a CTSP instance from multiple
views and builds high-quality tours in a single fast pass, without a hand-crafted
solver.

### The problem

CTSP shows up whenever visits are naturally zoned — warehouse order picking,
PCB/board manufacturing, and zoned last-mile delivery. The clustering constraint
makes classical TSP heuristics awkward: a good tour has to reason about both the
**order of clusters** and the **order of cities inside each cluster** at the same
time, and exact solvers scale poorly.

### The approach

- **Multi-view attention** — the encoder represents the instance from more than
  one perspective (e.g. city-level and cluster-level structure), so the model can
  weigh intra-cluster and inter-cluster relationships together.
- **Encoder–decoder construction** — the decoder builds the tour step by step,
  attending to the encoded views to pick the next city while respecting the
  clustering constraint.
- **Learned, not tuned** — the policy is trained with deep reinforcement learning,
  so it generalizes across instances and produces tours quickly at inference.

### Why it matters

A single learned model produces competitive CTSP tours far faster than exact
optimization, and adapts across problem sizes — useful for real, time-constrained
routing in robotics and logistics.

---

### My Role

I am a **co-first author** of this work, jointly leading the method design,
implementation, and experiments.

> ✍️ Feel free to refine this summary with the exact abstract, the key results
> (e.g. optimality gap / runtime vs. baselines), and your specific contribution.
