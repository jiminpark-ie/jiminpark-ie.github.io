---
layout: about
title: About
permalink: /
subtitle: Ph.D. Candidate in Industrial and Systems Engineering · MSSLAB, KAIST

profile:
  align: right
  image: profile.jpg # served from assets/img/profile.jpg
  image_circular: true # crops the image to make it circular
  more_info: >
    <p>🎓 MSSLAB, Dept. of Industrial and Systems Engineering, KAIST</p>
    <p>🏢 Room 4206, E2-1, 291 Daehak-ro, Yuseong-gu, Daejeon 34141</p>
    <p>✉️ jiminpark@kaist.ac.kr</p>

selected_papers: true # includes a list of papers marked as "selected={true}"
social: true # includes social icons at the bottom of the page

announcements:
  enabled: true # includes a list of news items
  scrollable: true # adds a vertical scroll bar if there are more than 3 news items
  limit: 5 # leave blank to include all the news in the `_news` folder

latest_posts:
  enabled: true
  scrollable: true
  limit: 3
---

<!-- Capitalize the built-in home-page section headers (news / latest posts / selected publications) -->
<style>
  .post h2 {
    text-transform: capitalize;
  }

  /* Profile info under the photo: use the site font instead of the theme's monospace default */
  .profile .more-info {
    font-family: inherit;
  }

  {% comment %} Interactive scheduling demo styles disabled — delete this comment tag and its matching endcomment below to re-enable.
  .research-lab {
    --lab-accent: var(--global-theme-color);
    --lab-coral: #ef8354;
    --lab-blue: #3977c5;
    --lab-mint: #2f9c82;
    position: relative;
    isolation: isolate;
    margin: 2.75rem 0 2.25rem;
    padding: clamp(1.25rem, 3vw, 2rem);
    overflow: hidden;
    border: 1px solid color-mix(in srgb, var(--global-divider-color) 78%, transparent);
    border-radius: 1.25rem;
    background:
      radial-gradient(circle at 96% 0%, color-mix(in srgb, var(--lab-accent) 14%, transparent), transparent 35%),
      linear-gradient(145deg, color-mix(in srgb, var(--global-card-bg-color) 96%, transparent), var(--global-bg-color));
    box-shadow: 0 18px 55px rgb(18 31 52 / 8%);
  }

  .research-lab::before {
    position: absolute;
    z-index: -1;
    top: -4.5rem;
    right: -4rem;
    width: 13rem;
    height: 13rem;
    border: 1px solid color-mix(in srgb, var(--lab-accent) 22%, transparent);
    border-radius: 50%;
    content: "";
  }

  .research-lab__eyebrow,
  .research-story__kicker,
  .research-sandbox__eyebrow {
    margin: 0 0 0.4rem;
    color: var(--lab-accent);
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0.13em;
    text-transform: uppercase;
  }

  .research-lab__heading {
    max-width: 43rem;
    margin-bottom: 1.35rem;
  }

  .research-lab__heading h2 {
    margin: 0 0 0.55rem;
    font-family: "Roboto Slab", serif;
    font-size: clamp(1.65rem, 4vw, 2.45rem);
    line-height: 1.12;
    text-transform: none;
  }

  .research-lab__heading > p:last-child {
    max-width: 39rem;
    margin: 0;
    color: color-mix(in srgb, var(--global-text-color) 76%, transparent);
  }

  .research-tabs {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 0.55rem;
    margin-bottom: 1rem;
  }

  .research-tab {
    display: flex;
    gap: 0.65rem;
    align-items: center;
    min-height: 3.15rem;
    padding: 0.65rem 0.8rem;
    border: 1px solid var(--global-divider-color);
    border-radius: 0.8rem;
    background: color-mix(in srgb, var(--global-bg-color) 82%, transparent);
    color: var(--global-text-color);
    font: inherit;
    font-size: 0.8rem;
    font-weight: 600;
    line-height: 1.2;
    text-align: left;
    transition:
      border-color 180ms ease,
      background 180ms ease,
      transform 180ms ease;
  }

  .research-tab:hover {
    border-color: color-mix(in srgb, var(--lab-accent) 55%, var(--global-divider-color));
    transform: translateY(-2px);
  }

  .research-tab[aria-selected="true"] {
    border-color: color-mix(in srgb, var(--lab-accent) 65%, transparent);
    background: color-mix(in srgb, var(--lab-accent) 12%, var(--global-bg-color));
    color: var(--lab-accent);
    box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--lab-accent) 14%, transparent);
  }

  .research-tab:focus-visible,
  .research-disruption:focus-visible,
  .research-range:focus-visible {
    outline: 3px solid color-mix(in srgb, var(--lab-accent) 38%, transparent);
    outline-offset: 2px;
  }

  .research-tab__number {
    display: grid;
    flex: 0 0 auto;
    width: 1.7rem;
    height: 1.7rem;
    place-items: center;
    border-radius: 50%;
    background: color-mix(in srgb, var(--global-divider-color) 42%, transparent);
    font-size: 0.68rem;
  }

  .research-tab[aria-selected="true"] .research-tab__number {
    background: var(--lab-accent);
    color: var(--global-bg-color);
  }

  .research-stage {
    display: grid;
    grid-template-columns: minmax(0, 0.78fr) minmax(0, 1.52fr);
    gap: clamp(1rem, 3vw, 1.65rem);
    align-items: stretch;
  }

  .research-story,
  .research-sandbox {
    border: 1px solid color-mix(in srgb, var(--global-divider-color) 82%, transparent);
    border-radius: 1rem;
    background: color-mix(in srgb, var(--global-bg-color) 88%, transparent);
  }

  .research-story {
    display: flex;
    flex-direction: column;
    padding: clamp(1rem, 2.5vw, 1.4rem);
  }

  .research-story h3 {
    margin: 0 0 0.55rem;
    font-family: "Roboto Slab", serif;
    font-size: clamp(1.25rem, 2.5vw, 1.65rem);
    line-height: 1.2;
  }

  .research-story__copy {
    min-height: 6.3rem;
    margin: 0;
    color: color-mix(in srgb, var(--global-text-color) 76%, transparent);
    font-size: 0.9rem;
  }

  .research-flow {
    display: grid;
    gap: 0.65rem;
    margin: 1.1rem 0 1.25rem;
    padding: 0;
    list-style: none;
  }

  .research-flow li {
    display: grid;
    grid-template-columns: 1.7rem 1fr;
    gap: 0.6rem;
    align-items: center;
    margin: 0;
    font-size: 0.82rem;
    font-weight: 500;
  }

  .research-flow__dot {
    display: grid;
    width: 1.7rem;
    height: 1.7rem;
    place-items: center;
    border: 1px solid color-mix(in srgb, var(--lab-accent) 35%, transparent);
    border-radius: 0.45rem;
    color: var(--lab-accent);
    font-size: 0.66rem;
    font-weight: 700;
  }

  .research-story__link {
    width: fit-content;
    margin-top: auto;
    color: var(--lab-accent);
    font-size: 0.82rem;
    font-weight: 700;
  }

  .research-story__link::after {
    display: inline-block;
    margin-left: 0.3rem;
    content: "↗";
    transition: transform 180ms ease;
  }

  .research-story__link:hover::after {
    transform: translate(2px, -2px);
  }

  .research-sandbox {
    padding: clamp(1rem, 2.5vw, 1.35rem);
  }

  .research-sandbox__header,
  .research-control__header,
  .research-metrics {
    display: flex;
    justify-content: space-between;
    gap: 0.75rem;
    align-items: center;
  }

  .research-sandbox__header h3 {
    margin: 0;
    font-size: 1rem;
  }

  .research-status-chip {
    display: inline-flex;
    gap: 0.38rem;
    align-items: center;
    padding: 0.3rem 0.55rem;
    border-radius: 999px;
    background: color-mix(in srgb, var(--lab-mint) 13%, transparent);
    color: var(--lab-mint);
    font-size: 0.68rem;
    font-weight: 700;
  }

  .research-status-chip::before {
    width: 0.42rem;
    height: 0.42rem;
    border-radius: 50%;
    background: currentcolor;
    box-shadow: 0 0 0 0.2rem color-mix(in srgb, currentcolor 15%, transparent);
    content: "";
  }

  .research-metrics {
    margin: 1rem 0 0.85rem;
  }

  .research-metric {
    flex: 1;
    min-width: 0;
    padding: 0.58rem 0.65rem;
    border: 1px solid color-mix(in srgb, var(--global-divider-color) 70%, transparent);
    border-radius: 0.65rem;
    background: color-mix(in srgb, var(--global-card-bg-color) 80%, transparent);
  }

  .research-metric span,
  .research-metric strong {
    display: block;
  }

  .research-metric span {
    margin-bottom: 0.16rem;
    color: color-mix(in srgb, var(--global-text-color) 58%, transparent);
    font-size: 0.64rem;
    letter-spacing: 0.04em;
    text-transform: uppercase;
  }

  .research-metric strong {
    font-family: "Roboto Slab", serif;
    font-size: 1rem;
    line-height: 1.1;
  }

  .research-schedule {
    display: grid;
    grid-template-columns: 2.5rem minmax(0, 1fr);
    row-gap: 0.42rem;
    align-items: center;
    padding: 0.75rem;
    border: 1px solid color-mix(in srgb, var(--global-divider-color) 75%, transparent);
    border-radius: 0.75rem;
    background: color-mix(in srgb, var(--global-bg-color) 94%, transparent);
  }

  .research-schedule__axis {
    display: grid;
    grid-column: 2;
    grid-template-columns: repeat(6, 1fr);
    color: color-mix(in srgb, var(--global-text-color) 45%, transparent);
    font-size: 0.58rem;
  }

  .research-schedule__axis span:last-child {
    text-align: right;
  }

  .research-machine {
    color: color-mix(in srgb, var(--global-text-color) 58%, transparent);
    font-size: 0.65rem;
    font-weight: 700;
  }

  .research-track {
    position: relative;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    min-height: 1.75rem;
    overflow: hidden;
    border-radius: 0.4rem;
    background-image: linear-gradient(to right, var(--global-divider-color) 1px, transparent 1px);
    background-size: calc(100% / 12) 100%;
  }

  .research-job {
    z-index: 1;
    display: flex;
    grid-column: var(--job-start) / span var(--job-duration);
    align-items: center;
    justify-content: center;
    min-width: 0;
    margin: 0.17rem 0.08rem;
    overflow: hidden;
    border-radius: 0.3rem;
    color: #fff;
    font-size: 0.62rem;
    font-weight: 700;
    white-space: nowrap;
    transition:
      grid-column 300ms ease,
      opacity 180ms ease;
  }

  .research-job--coral {
    background: var(--lab-coral);
  }

  .research-job--blue {
    background: var(--lab-blue);
  }

  .research-job--mint {
    background: var(--lab-mint);
  }

  .research-job--ink {
    background: #5b5f78;
  }

  .research-job--urgent {
    background: #c93c56;
    box-shadow: 0 0 0 2px color-mix(in srgb, #c93c56 20%, transparent);
  }

  .research-controls {
    display: grid;
    grid-template-columns: minmax(0, 1fr) auto;
    gap: 0.85rem;
    align-items: end;
    margin-top: 0.9rem;
  }

  .research-control__header {
    margin-bottom: 0.25rem;
    font-size: 0.72rem;
    font-weight: 600;
  }

  .research-control__value {
    color: var(--lab-accent);
  }

  .research-range {
    width: 100%;
    height: 0.3rem;
    margin: 0.38rem 0;
    border-radius: 999px;
    accent-color: var(--lab-accent);
    cursor: pointer;
  }

  .research-range__labels {
    display: flex;
    justify-content: space-between;
    color: color-mix(in srgb, var(--global-text-color) 50%, transparent);
    font-size: 0.61rem;
  }

  .research-disruption {
    min-height: 2.55rem;
    padding: 0.55rem 0.75rem;
    border: 1px solid color-mix(in srgb, var(--lab-coral) 45%, var(--global-divider-color));
    border-radius: 0.65rem;
    background: color-mix(in srgb, var(--lab-coral) 9%, var(--global-bg-color));
    color: var(--global-text-color);
    font: inherit;
    font-size: 0.72rem;
    font-weight: 700;
    white-space: nowrap;
  }

  .research-disruption[aria-pressed="true"] {
    border-color: color-mix(in srgb, var(--lab-mint) 55%, var(--global-divider-color));
    background: color-mix(in srgb, var(--lab-mint) 10%, var(--global-bg-color));
  }

  .research-live {
    min-height: 1.2rem;
    margin: 0.7rem 0 0;
    color: color-mix(in srgb, var(--global-text-color) 62%, transparent);
    font-size: 0.67rem;
  }

  @media (max-width: 760px) {
    .research-stage {
      grid-template-columns: 1fr;
    }

    .research-story__copy {
      min-height: 0;
    }

    .research-flow {
      grid-template-columns: repeat(3, 1fr);
    }

    .research-flow li {
      grid-template-columns: 1fr;
      align-items: start;
    }
  }

  @media (max-width: 520px) {
    .research-lab {
      margin-inline: -0.35rem;
      border-radius: 1rem;
    }

    .research-tabs {
      grid-template-columns: 1fr;
    }

    .research-tab {
      min-height: 2.7rem;
    }

    .research-metrics {
      align-items: stretch;
    }

    .research-metric {
      padding-inline: 0.45rem;
    }

    .research-metric strong {
      font-size: 0.85rem;
    }

    .research-controls {
      grid-template-columns: 1fr;
    }

    .research-disruption {
      width: 100%;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .research-tab,
    .research-job,
    .research-story__link::after {
      transition: none;
    }
  }
  {% endcomment %}
</style>

I am **Jimin Park**, a Ph.D. Candidate in Industrial and Systems Engineering at
MSSLAB, KAIST, advised by Prof. Hyun-Jung Kim. I am passionate about technology
and engineering that connects with people, which eventually led me to this
beautiful world of industrial engineering.
My research interests include **interactive scheduling**, **multi-objective scheduling**, and **LLMs for scheduling**,
especially in manufacturing, though not limited to it.

{% comment %} Interactive scheduling demo disabled — delete this comment tag and its matching endcomment below to re-enable.
<section class="research-lab" aria-labelledby="research-lab-title">
  <header class="research-lab__heading">
    <p class="research-lab__eyebrow">Decision lab · Interactive demo</p>
    <h2 id="research-lab-title">Explore how decisions become schedules</h2>
    <p>
      Switch research lenses, tune the human preference, and introduce a disruption. The tiny factory below shows the central question behind my work:
      how can an intelligent system adapt without taking control away from people?
    </p>
  </header>

  <div class="research-tabs" role="tablist" aria-label="Research directions">
    <button
      class="research-tab"
      id="research-tab-human"
      type="button"
      role="tab"
      aria-selected="true"
      aria-controls="research-panel"
      tabindex="0"
      data-research-mode="human"
    >
      <span class="research-tab__number">01</span>
      <span>Interactive scheduling</span>
    </button>
    <button
      class="research-tab"
      id="research-tab-multi"
      type="button"
      role="tab"
      aria-selected="false"
      aria-controls="research-panel"
      tabindex="-1"
      data-research-mode="multi"
    >
      <span class="research-tab__number">02</span>
      <span>Multi-objective decisions</span>
    </button>
    <button
      class="research-tab"
      id="research-tab-llm"
      type="button"
      role="tab"
      aria-selected="false"
      aria-controls="research-panel"
      tabindex="-1"
      data-research-mode="llm"
    >
      <span class="research-tab__number">03</span>
      <span>LLMs for scheduling</span>
    </button>
  </div>

  <div class="research-stage" id="research-panel" role="tabpanel" aria-labelledby="research-tab-human">
    <article class="research-story">
      <p class="research-story__kicker" id="research-mode-kicker">01 · Human in the loop</p>
      <h3 id="research-mode-title">Interactive scheduling</h3>
      <p class="research-story__copy" id="research-mode-copy">
        A planner does not simply accept or reject an answer. The system exposes alternatives, learns from revisions, and keeps the human decision-maker in the loop.
      </p>
      <ol class="research-flow" id="research-flow" aria-label="Research process">
        <li><span class="research-flow__dot">1</span><span>Observe context</span></li>
        <li><span class="research-flow__dot">2</span><span>Propose options</span></li>
        <li><span class="research-flow__dot">3</span><span>Learn from edits</span></li>
      </ol>
      <a class="research-story__link" href="{{ '/publications/' | relative_url }}">See related publications</a>
    </article>

    <div class="research-sandbox">
      <header class="research-sandbox__header">
        <div>
          <p class="research-sandbox__eyebrow">Live schedule</p>
          <h3>A tiny scheduling sandbox</h3>
        </div>
        <span class="research-status-chip">Adaptive plan</span>
      </header>

      <div class="research-metrics" aria-label="Schedule metrics">
        <div class="research-metric">
          <span>Makespan</span>
          <strong id="research-makespan">11.8 h</strong>
        </div>
        <div class="research-metric">
          <span>Late jobs</span>
          <strong id="research-tardiness">3</strong>
        </div>
        <div class="research-metric">
          <span>Plan changes</span>
          <strong id="research-changes">3</strong>
        </div>
      </div>

      <div class="research-schedule" id="research-schedule" role="img" aria-label="Three-machine schedule from hour zero to twelve">
        <div class="research-schedule__axis" aria-hidden="true">
          <span>0h</span><span>2</span><span>4</span><span>6</span><span>8</span><span>12h</span>
        </div>
        <span class="research-machine">M1</span><div class="research-track" data-machine="0"></div>
        <span class="research-machine">M2</span><div class="research-track" data-machine="1"></div>
        <span class="research-machine">M3</span><div class="research-track" data-machine="2"></div>
      </div>

      <div class="research-controls">
        <div class="research-control">
          <div class="research-control__header">
            <label for="research-preference">Planner preference</label>
            <span class="research-control__value" id="research-preference-value">Balanced · 48%</span>
          </div>
          <input class="research-range" id="research-preference" type="range" min="0" max="100" value="48" step="1" />
          <div class="research-range__labels" aria-hidden="true"><span>Stability</span><span>Responsiveness</span></div>
        </div>
        <button class="research-disruption" id="research-disruption" type="button" aria-pressed="false">+ Urgent order</button>
      </div>

      <p class="research-live" id="research-live" aria-live="polite">Balanced plan: 11.8 hour makespan, 3 late jobs, and 3 changes.</p>
    </div>

  </div>
</section>

<script>
  (() => {
    const lab = document.querySelector(".research-lab");
    if (!lab) return;

    const modes = {
      human: {
        kicker: "01 · Human in the loop",
        title: "Interactive scheduling",
        copy: "A planner does not simply accept or reject an answer. The system exposes alternatives, learns from revisions, and keeps the human decision-maker in the loop.",
        steps: ["Observe context", "Propose options", "Learn from edits"],
        accent: "var(--global-theme-color)",
      },
      multi: {
        kicker: "02 · Navigate trade-offs",
        title: "Multi-objective decisions",
        copy: "Real factories optimize more than speed. I model the tension between throughput, tardiness, stability, and human priorities so that trade-offs become visible and actionable.",
        steps: ["Frame objectives", "Trace the frontier", "Choose with intent"],
        accent: "#ef8354",
      },
      llm: {
        kicker: "03 · Language to action",
        title: "LLMs for scheduling",
        copy: "Large language models translate rich requests into structured constraints, explain alternatives, and coordinate specialized agents around a verified optimization core.",
        steps: ["Interpret intent", "Formalize rules", "Verify the plan"],
        accent: "#2f9c82",
      },
    };

    const schedules = {
      human: [
        [
          ["A", 1, 3, "coral"],
          ["D", 5, 3, "blue"],
          ["G", 9, 3, "mint"],
        ],
        [
          ["B", 2, 4, "blue"],
          ["E", 7, 2, "ink"],
          ["H", 10, 2, "coral"],
        ],
        [
          ["C", 1, 2, "mint"],
          ["F", 4, 4, "coral"],
          ["I", 9, 2, "blue"],
        ],
      ],
      multi: [
        [
          ["A", 1, 2, "coral"],
          ["F", 4, 4, "mint"],
          ["H", 9, 2, "blue"],
        ],
        [
          ["B", 1, 4, "blue"],
          ["D", 6, 3, "coral"],
          ["I", 10, 2, "ink"],
        ],
        [
          ["C", 2, 2, "mint"],
          ["E", 5, 2, "ink"],
          ["G", 8, 4, "coral"],
        ],
      ],
      llm: [
        [
          ["A", 1, 3, "mint"],
          ["E", 5, 2, "coral"],
          ["I", 8, 4, "blue"],
        ],
        [
          ["C", 1, 2, "blue"],
          ["D", 4, 4, "ink"],
          ["H", 9, 2, "mint"],
        ],
        [
          ["B", 2, 3, "coral"],
          ["F", 6, 2, "mint"],
          ["G", 9, 3, "blue"],
        ],
      ],
    };

    const tabs = [...lab.querySelectorAll("[data-research-mode]")];
    const panel = lab.querySelector("[role='tabpanel']");
    const kicker = lab.querySelector("#research-mode-kicker");
    const title = lab.querySelector("#research-mode-title");
    const copy = lab.querySelector("#research-mode-copy");
    const flow = lab.querySelector("#research-flow");
    const tracks = [...lab.querySelectorAll(".research-track")];
    const preference = lab.querySelector("#research-preference");
    const preferenceValue = lab.querySelector("#research-preference-value");
    const disruptionButton = lab.querySelector("#research-disruption");
    const makespan = lab.querySelector("#research-makespan");
    const tardiness = lab.querySelector("#research-tardiness");
    const changes = lab.querySelector("#research-changes");
    const live = lab.querySelector("#research-live");
    let activeMode = "human";
    let disrupted = false;

    const preferenceLabel = (value) => {
      if (value < 34) return "Stability first";
      if (value > 66) return "Response first";
      return "Balanced";
    };

    const renderSchedule = () => {
      const value = Number(preference.value);
      const responseShift = value > 66 ? -1 : value < 34 ? 1 : 0;
      const modeIndex = activeMode === "human" ? 0 : activeMode === "multi" ? 1 : 2;

      tracks.forEach((track, machineIndex) => {
        track.replaceChildren();
        schedules[activeMode][machineIndex].forEach(([label, start, duration, color], jobIndex) => {
          const job = document.createElement("span");
          const adjustedStart = Math.max(1, Math.min(12 - duration + 1, start + (jobIndex > 0 ? responseShift : 0)));
          job.className = `research-job research-job--${color}`;
          job.textContent = label;
          job.style.setProperty("--job-start", adjustedStart);
          job.style.setProperty("--job-duration", duration);
          track.appendChild(job);
        });

        if (disrupted && machineIndex === (modeIndex + 1) % 3) {
          const urgent = document.createElement("span");
          urgent.className = "research-job research-job--urgent";
          urgent.textContent = "Rush";
          urgent.style.setProperty("--job-start", value > 58 ? 2 : 5);
          urgent.style.setProperty("--job-duration", 2);
          track.appendChild(urgent);
        }
      });

      const modeOffset = [0, 0.3, -0.2][modeIndex];
      const makespanValue = Math.max(9.4, 12.7 - value * 0.019 + modeOffset + (disrupted ? 0.8 : 0));
      const lateValue = Math.max(0, Math.round(7 - value * 0.075 + modeIndex * 0.4 + (disrupted ? 2 : 0)));
      const changeValue = Math.max(1, Math.round(1 + value * 0.045 + modeIndex * 0.5 + (disrupted ? 2 : 0)));
      const label = preferenceLabel(value);

      preferenceValue.textContent = `${label} · ${value}%`;
      makespan.textContent = `${makespanValue.toFixed(1)} h`;
      tardiness.textContent = lateValue;
      changes.textContent = changeValue;
      live.textContent = `${disrupted ? "Disruption absorbed" : `${label} plan`}: ${makespanValue.toFixed(1)} hour makespan, ${lateValue} late ${lateValue === 1 ? "job" : "jobs"}, and ${changeValue} ${changeValue === 1 ? "change" : "changes"}.`;
    };

    const selectMode = (mode, moveFocus = false) => {
      activeMode = mode;
      const details = modes[mode];
      lab.style.setProperty("--lab-accent", details.accent);
      kicker.textContent = details.kicker;
      title.textContent = details.title;
      copy.textContent = details.copy;
      flow.querySelectorAll("li span:last-child").forEach((item, index) => {
        item.textContent = details.steps[index];
      });

      tabs.forEach((tab) => {
        const selected = tab.dataset.researchMode === mode;
        tab.setAttribute("aria-selected", selected);
        tab.tabIndex = selected ? 0 : -1;
        if (selected) {
          panel.setAttribute("aria-labelledby", tab.id);
          if (moveFocus) tab.focus();
        }
      });

      renderSchedule();
    };

    tabs.forEach((tab, index) => {
      tab.addEventListener("click", () => selectMode(tab.dataset.researchMode));
      tab.addEventListener("keydown", (event) => {
        if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
        event.preventDefault();
        let targetIndex = index;
        if (event.key === "ArrowRight") targetIndex = (index + 1) % tabs.length;
        if (event.key === "ArrowLeft") targetIndex = (index - 1 + tabs.length) % tabs.length;
        if (event.key === "Home") targetIndex = 0;
        if (event.key === "End") targetIndex = tabs.length - 1;
        selectMode(tabs[targetIndex].dataset.researchMode, true);
      });
    });

    preference.addEventListener("input", renderSchedule);
    disruptionButton.addEventListener("click", () => {
      disrupted = !disrupted;
      disruptionButton.setAttribute("aria-pressed", disrupted);
      disruptionButton.textContent = disrupted ? "Reset scenario" : "+ Urgent order";
      renderSchedule();
    });

    renderSchedule();
  })();
</script>
{% endcomment %}

### Explore

See my [publications](/publications/) for papers and talks, and the
[projects](/projects/) page for the industrial projects I worked on and the role
I played in each. A full record of education, awards, teaching, talks, and
service is on my [CV](/cv/). Please feel free to reach out to me if you have any interests.
