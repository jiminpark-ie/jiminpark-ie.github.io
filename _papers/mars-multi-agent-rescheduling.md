---
layout: page
title: "MARS: Multi-Agent Rescheduling Framework with Large Language Models for Human-Centric Manufacturing"
description: Accepted at the Journal of Manufacturing Systems (JMS), 2026
---

{% include figure.liquid loading="eager" path="assets/img/mars_workflow_comparison.png" class="img-fluid rounded z-depth-1" zoomable=true title="Workflow comparison between traditional spreadsheet/Gantt-based modification and MARS" %}

<div class="caption">
  Figure&nbsp;4 — Traditional spreadsheet/Gantt-chart editing (left) forces the operator to hand-decompose an intent and manually trace its ripple effects; MARS (right) takes the same intent in natural language and returns a candidate schedule <em>plus</em> a plain-language explanation.
</div>

**Authors:** Jimin Park, Karen Seojin Kim, Zuhdi Faturrahman, and Hyun-Jung Kim
**Venue:** Journal of Manufacturing Systems (JMS), 2026 — **Accepted** (volume/DOI to follow)

---

### TL;DR

On the shop floor, operators constantly tweak algorithm-generated schedules using
tacit knowledge — but doing it through Gantt charts and spreadsheets is slow and
error-prone. **MARS** lets an operator just _say_ what they want in natural
language; it edits the schedule with code and explains what changed and why,
using lightweight open-source LLMs that run on-premise.

### The problem: two hidden gaps

Manually adjusting a schedule runs into two gaps:

- **Intent–execution gap** — one high-level intent (_"what if J3 on M3 is swapped
  with J6 on M4?"_) has to be broken down into many low-level edits: find the jobs,
  drag them, fix affected jobs, re-run a repair.
- **Change–comprehension gap** — after the edit, a single change cascades through
  the schedule, and the operator must manually compare the old and new schedules to
  understand the downstream effects.

### What MARS does

MARS is a **multi-agent framework** with two cooperating LLM agents:

- **Schedule Modifier** — turns the natural-language request into executable Python
  that directly updates the scheduling parameters _or_ the schedule itself. Because
  it edits parameters/schedules rather than rewriting the problem as solver
  constraints, it stays **compatible with any scheduling algorithm** (heuristics,
  metaheuristics, learning-based — not just exact solvers). Internally it uses a
  scheduler re-run classifier, a modification-type classifier, and a modification
  code generator, built on a **parameter-efficient multi-adapter (QLoRA)**
  architecture with a **level-wise asymmetric in-context-learning (ICL)** strategy.
- **Explainer** — builds a **tree-based causal chain** by comparing the original and
  modified schedules, then verbalizes a faithful, step-by-step natural-language
  explanation of the cascading changes.

### Why it's different

- **One natural-language interface** that bridges _both_ gaps at once.
- **Lightweight & deployable** — runs on small open-source models, avoiding the
  cost, latency, and data-privacy problems of large closed-source APIs in
  computationally constrained factory environments.
- **Algorithm-agnostic** — modifies parameters/schedules directly instead of forcing
  changes into rigid solver constraints.

### Results

Evaluated on the **unrelated parallel machine scheduling problem (UPMSP)** with
comprehensive constraints, MARS accurately executes user requests, produces
transparent explanations of schedule changes, and generalizes to larger problem
sizes.

---

### My Role

I am the **first author** of this work and led it end to end — problem
formulation, the multi-agent framework design (schedule modifier and explainer),
implementation, experiments, and manuscript writing.
