---
layout: page
title: Graph-based Reinforcement Learning for Dynamic Photolithography Scheduling
description: WSC 2025, Seattle, USA · Collaborative work with Samsung Display
---

**Authors:** Sang-Hyun Cho, Sohyun Jeong, Jimin Park, Boyoon Choi, Paul Han, and Hyun-Jung Kim
**Venue:** Proceedings of the 2025 Winter Simulation Conference (WSC), Seattle, USA
**Collaboration:** Samsung Display

---

### TL;DR

**Photolithography** is the tightest bottleneck in display and semiconductor
production, and it is a **dual-resource** problem: a job needs both an eligible
**machine** _and_ the right **mask** (with transfer and setup times) at the same
time. We propose a **graph-based reinforcement learning** framework that schedules
photolithography operations **in real time**, explicitly tracking mask locations,
machine statuses, and transfer times.

### The problem

As OLED/TFT panels add more deposited layers, reentrant flows (jobs revisiting the
same equipment) make photolithography scheduling increasingly complex. Jobs arrive
dynamically with priorities, machine-eligibility constraints, and a required mask
per machine. Prior RL approaches (e.g. deep Q-networks) must be **retrained
whenever mask counts or product types change**, limiting them in highly dynamic
lines.

### The approach

- **Graph state** — the scheduling state is a graph of **job nodes** and
  **machine-mask (pair) nodes**, connected by four edge types: job ↔ eligible
  machine-mask, jobs of the same lot type, machine-mask pairs on the same machine,
  and pairs sharing the same mask. Node/edge features encode priorities, remaining
  step targets, mask/machine availability, and transfer/setup times.
- **GNN policy** — a GATv2 graph encoder feeds a policy that assigns probabilities
  to **job–machine–mask** actions, trained end-to-end with policy gradients.
- **Size-agnostic** — because the state is a graph, the same model handles varying
  numbers of machines, masks, and lot types **without architectural changes or
  retraining**, adapting to real-time changes on the floor.
- **Objective** — a weighted combination of three KPIs: throughput, step-target
  fulfillment, and weighted priority.

### Results

Across varied scenarios, the method delivers **consistent and robust** scheduling
performance, making it a practical solution for real display-manufacturing lines.

---

### My Role

I contributed to this work as a **co-author**, in collaboration with Samsung
Display.
