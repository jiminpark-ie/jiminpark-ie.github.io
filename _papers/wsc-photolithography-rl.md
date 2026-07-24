---
layout: page
title: Graph-based Reinforcement Learning for Dynamic Photolithography Scheduling
description: WSC 2025, Seattle, USA · Collaborative work with Samsung Display
---

**Authors:** S.-H. Cho, Sohyun Jeong, Jimin Park, B. Choi, P. Han, and Hyun-Jung Kim
**Venue:** Winter Simulation Conference (WSC), Seattle, USA, 2025
**Collaboration:** Samsung Display

---

### TL;DR

**Photolithography** is one of the tightest, most expensive stages in a display /
semiconductor FAB, and lots keep arriving and changing priority in real time. We
use **graph-based reinforcement learning** to make dynamic dispatching decisions
that adapt as the shop-floor state evolves.

### The problem

Photolithography machines are a capacity bottleneck: lots re-enter the stage
multiple times, priorities shift (hot lots), and conditions change continuously.
Static rules or one-shot optimization struggle to keep up with this dynamic,
reentrant flow.

### The approach

- **Graph representation** — the current scheduling state (lots, machines, and
  their relationships) is encoded as a graph, so the model can reason about
  structure rather than a fixed-length feature vector.
- **Reinforcement learning** — a policy (trained over a GNN encoding of the state)
  learns dispatching decisions that adapt online to arrivals and priority changes,
  targeting objectives such as throughput and on-time delivery.

### Why it matters

A learned, graph-aware dispatcher can react to a changing FAB in real time and
generalize across states better than fixed dispatching rules — validated in a
setting motivated by real display manufacturing with Samsung Display.

---

### My Role

I contributed to this work as a **co-author**, in collaboration with Samsung
Display.

> ✍️ Feel free to refine this summary with the exact problem setup, the RL/GNN
> design, results, and the specific part you contributed.
