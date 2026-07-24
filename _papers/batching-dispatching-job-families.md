---
layout: page
title: Multi-Objective Batching-Dispatching Framework for Parallel Machine Scheduling with Job Families
description: Under review · Computers and Industrial Engineering (C&IE), submitted 2025
---

**Authors:** Karen Seojin Kim†, Minju Jang†, Sang-Wook Lee, Jimin Park, and Hyun-Jung Kim &nbsp;(†&nbsp;Co-first authors)
**Status:** Under review in Computers and Industrial Engineering (C&IE), submitted in 2025

---

### TL;DR

When jobs belong to **families** that share a common setup, processing them in
**batches** can save a lot of machine time — but only if batching and machine
assignment are decided together. We propose a **framework that couples batching
and dispatching** for parallel machine scheduling and optimizes several
objectives at once.

### The problem

In parallel machine scheduling with job families, switching a machine from one
family to another incurs a setup. Grouping same-family jobs into a batch avoids
repeated setups, but larger batches can delay individual jobs. The scheduler must
therefore trade off **setup efficiency, throughput, and lateness** — and do so
across multiple machines simultaneously.

### The approach

- **Batching + dispatching, jointly** — instead of forming batches first and
  assigning them later, the framework decides _how_ to batch and _where/when_ to
  dispatch in a coordinated way.
- **Multi-objective** — it balances competing goals (e.g. makespan, tardiness, and
  setup count) rather than optimizing a single metric.

### Why it matters

Family setups dominate cost in many real lines (semiconductor, electronics,
process industries). A coordinated batching–dispatching policy gives planners a
practical way to cut setup time without sacrificing due-date performance.

---

### My Role

I contributed to this work as a **co-author**.

> ✍️ Feel free to refine this summary with the exact abstract, objectives,
> solution method, and results, and to describe the specific part you contributed.
