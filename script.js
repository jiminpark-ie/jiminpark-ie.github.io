const topics = [
  {
    id: "scheduling",
    label: "Scheduling",
    color: "var(--blue)",
    center: [250, 245],
    labelAt: [250, 210],
    blob:
      "M205,-120 C250,-70 235,45 185,100 C135,155 20,165 -45,130 C-110,95 -205,80 -220,0 C-235,-80 -165,-155 -85,-165 C-5,-175 160,-170 205,-120 Z",
  },
  {
    id: "multi-objective",
    label: "Multi-Objective",
    color: "var(--coral)",
    center: [690, 230],
    labelAt: [710, 170],
    blob:
      "M190,-130 C255,-72 260,35 198,98 C135,160 22,178 -58,140 C-138,102 -235,55 -220,-32 C-205,-120 -112,-175 -18,-178 C76,-181 125,-188 190,-130 Z",
  },
  {
    id: "reinforcement-learning",
    label: "Reinforcement Learning",
    color: "var(--gold)",
    center: [395, 435],
    labelAt: [370, 540],
    blob:
      "M180,-93 C230,-27 222,75 150,115 C78,155 -48,145 -135,95 C-222,45 -230,-78 -155,-125 C-80,-172 130,-160 180,-93 Z",
  },
  {
    id: "llm",
    label: "LLM Systems",
    color: "var(--green)",
    center: [800, 425],
    labelAt: [870, 295],
    blob:
      "M198,-112 C255,-54 245,70 185,125 C125,180 15,164 -70,138 C-155,112 -225,30 -205,-58 C-185,-146 -78,-184 20,-170 C118,-156 142,-170 198,-112 Z",
  },
  {
    id: "manufacturing",
    label: "Human-Centric Mfg.",
    color: "var(--teal)",
    center: [620, 385],
    labelAt: [610, 388],
    blob:
      "M150,-88 C206,-34 196,65 126,108 C56,151 -78,145 -142,82 C-206,19 -170,-88 -90,-124 C-10,-160 94,-142 150,-88 Z",
  },
  {
    id: "supply-chain",
    label: "Supply Chain & Routing",
    color: "var(--violet)",
    center: [535, 310],
    labelAt: [438, 345],
    blob:
      "M145,-78 C196,-20 185,68 116,112 C47,156 -67,142 -130,82 C-193,22 -166,-80 -88,-118 C-10,-156 92,-138 145,-78 Z",
  },
];

const projects = [
  {
    id: "mars-rescheduling",
    title: "MARS: Multi-Agent Rescheduling Framework",
    shortTitle: "MARS",
    status: "Under review",
    color: "var(--blue)",
    x: 555,
    y: 300,
    topics: ["scheduling", "llm", "manufacturing"],
    summary:
      "A human-centric manufacturing rescheduling framework that uses large language models in a multi-agent setting.",
    question: "How can LLM-based agents support rescheduling when shop-floor conditions change?",
    methods: "Large language models, multi-agent systems, human-centered manufacturing",
    output: "Under review in Journal of Manufacturing Systems, submitted in 2026",
  },
  {
    id: "preference-elicitation",
    title: "LLM-Assisted Rich Preference Elicitation",
    shortTitle: "Preference Elicitation",
    status: "Under review",
    color: "var(--coral)",
    x: 735,
    y: 430,
    topics: ["multi-objective", "llm", "scheduling"],
    summary:
      "A preference elicitation approach for multi-objective parallel machine scheduling, assisted by LLM interaction.",
    question: "How can users express richer scheduling preferences without translating them into rigid objective weights?",
    methods: "Preference elicitation, large language models, multi-objective scheduling",
    output: "Under review in APMS 2026",
  },
  {
    id: "photolithography-rl",
    title: "Graph-Based RL for Dynamic Photolithography Scheduling",
    shortTitle: "Dynamic Photolithography",
    status: "Conference paper",
    color: "var(--teal)",
    x: 360,
    y: 420,
    topics: ["scheduling", "reinforcement-learning", "manufacturing"],
    summary:
      "A graph-based reinforcement learning approach for dynamic scheduling in photolithography processes.",
    question: "How can scheduling policies adapt to dynamic semiconductor manufacturing environments?",
    methods: "Graph representation learning, reinforcement learning, dynamic scheduling",
    output: "Winter Simulation Conference, Seattle, USA, 2025",
  },
  {
    id: "batching-dispatching",
    title: "Multi-Objective Batching-Dispatching Framework",
    shortTitle: "Batching-Dispatching",
    status: "Under review",
    color: "var(--green)",
    x: 710,
    y: 250,
    topics: ["scheduling", "multi-objective", "manufacturing"],
    summary:
      "A framework for batching and dispatching in parallel machine scheduling with job families.",
    question: "How can batching and dispatching decisions balance multiple production objectives?",
    methods: "Parallel machine scheduling, job families, multi-objective optimization",
    output: "Under review in Computers and Industrial Engineering, submitted in 2025",
  },
  {
    id: "clustered-tsp",
    title: "Multi-View Attention Encoder-Decoder for Clustered TSP",
    shortTitle: "Clustered TSP",
    status: "Journal article",
    color: "var(--gold)",
    x: 445,
    y: 505,
    topics: ["reinforcement-learning", "supply-chain"],
    summary:
      "An attention-based encoder-decoder framework for solving clustered traveling salesman problems.",
    question: "How can neural combinatorial optimization represent clustered routing structure?",
    methods: "Attention models, encoder-decoder architecture, routing optimization",
    output: "IEEE Robotics and Automation Letters, vol. 11, no. 1, pp. 137-144, 2026",
  },
  {
    id: "rag-query-disambiguation",
    title: "RAG-Enhanced Query Disambiguation",
    shortTitle: "RAG Query Disambiguation",
    status: "Exploratory",
    color: "var(--violet)",
    x: 805,
    y: 360,
    topics: ["llm", "supply-chain", "manufacturing"],
    summary:
      "A retrieval-augmented query disambiguation project for spreadsheet-based semiconductor supply chain management.",
    question: "How can RAG systems clarify ambiguous operational queries in complex spreadsheets?",
    methods: "Retrieval-augmented generation, query disambiguation, supply chain analytics",
    output: "Under review in Winter Simulation Conference 2026",
  },
];

const topicControls = document.querySelector("#topicControls");
const blobLayer = document.querySelector("#blobLayer");
const lineLayer = document.querySelector("#lineLayer");
const topicLayer = document.querySelector("#topicLayer");
const nodeLayer = document.querySelector("#nodeLayer");
const projectPanel = document.querySelector("#projectPanel");
const publicationList = document.querySelector("#publicationList");

let activeProject = projects[0].id;
let activeTopic = "all";

function topicById(id) {
  return topics.find((topic) => topic.id === id);
}

function projectById(id) {
  return projects.find((project) => project.id === id);
}

function pointForTopic(topicId) {
  return topicById(topicId).labelAt;
}

function curvePath(from, to) {
  const dx = to[0] - from[0];
  const controlA = [from[0] + dx * 0.4, from[1] - 45];
  const controlB = [from[0] + dx * 0.65, to[1] + 45];
  return `M ${from[0]} ${from[1]} C ${controlA[0]} ${controlA[1]}, ${controlB[0]} ${controlB[1]}, ${to[0]} ${to[1]}`;
}

function createSvgElement(name, attributes) {
  const element = document.createElementNS("http://www.w3.org/2000/svg", name);
  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });
  return element;
}

function renderTopicControls() {
  const allButton = document.createElement("button");
  allButton.className = "topic-filter is-active";
  allButton.type = "button";
  allButton.dataset.topic = "all";
  allButton.textContent = "All";
  topicControls.append(allButton);

  topics.forEach((topic) => {
    const button = document.createElement("button");
    button.className = "topic-filter";
    button.type = "button";
    button.dataset.topic = topic.id;
    button.textContent = topic.label;
    topicControls.append(button);
  });

  topicControls.addEventListener("click", (event) => {
    const button = event.target.closest(".topic-filter");
    if (!button) return;
    activeTopic = button.dataset.topic;
    activeProject = projects.find((project) => projectMatchesTopic(project))?.id || projects[0].id;
    updateView();
  });
}

function renderMap() {
  topics.forEach((topic) => {
    const group = createSvgElement("g", {
      transform: `translate(${topic.center[0]} ${topic.center[1]})`,
      "data-topic": topic.id,
    });

    const path = createSvgElement("path", {
      d: topic.blob,
      fill: colorMix(topic.color, 0.1),
      stroke: colorMix(topic.color, 0.44),
      class: "cluster-blob",
    });
    group.append(path);
    blobLayer.append(group);

    const [labelX, labelY] = topic.labelAt;
    const labelGroup = createSvgElement("g", {
      class: "topic-chip",
      "data-topic": topic.id,
      transform: `translate(${labelX} ${labelY})`,
    });
    const labelWidth = Math.max(116, topic.label.length * 9 + 34);
    labelGroup.append(
      createSvgElement("rect", {
        x: -labelWidth / 2,
        y: -18,
        width: labelWidth,
        height: 36,
        rx: 18,
        class: "topic-label",
      }),
    );
    const label = createSvgElement("text", {
      class: "topic-text",
    });
    label.textContent = topic.label;
    labelGroup.append(label);
    topicLayer.append(labelGroup);
  });

  projects.forEach((project) => {
    project.topics.forEach((topicId) => {
      const path = createSvgElement("path", {
        d: curvePath(pointForTopic(topicId), [project.x, project.y]),
        class: "connector",
        "data-project": project.id,
        "data-topic": topicId,
      });
      lineLayer.append(path);
    });

    const button = document.createElement("button");
    button.className = "project-node";
    button.type = "button";
    button.dataset.project = project.id;
    button.style.setProperty("--x", project.x);
    button.style.setProperty("--y", project.y);
    button.style.setProperty("--node-color", project.color);
    button.textContent = project.shortTitle;
    button.addEventListener("mouseenter", () => {
      activeProject = project.id;
      updateView({ keepTopic: true });
    });
    button.addEventListener("focus", () => {
      activeProject = project.id;
      updateView({ keepTopic: true });
    });
    button.addEventListener("click", () => {
      activeProject = project.id;
      updateView({ keepTopic: true });
    });
    nodeLayer.append(button);
  });
}

function colorMix(cssColor, alpha) {
  const namedColors = {
    "var(--blue)": "57 120 184",
    "var(--coral)": "201 95 101",
    "var(--green)": "78 154 113",
    "var(--gold)": "187 139 47",
    "var(--teal)": "67 141 145",
    "var(--violet)": "124 110 167",
  };
  return `rgb(${namedColors[cssColor]} / ${alpha})`;
}

function projectMatchesTopic(project) {
  return activeTopic === "all" || project.topics.includes(activeTopic);
}

function updateView(options = {}) {
  if (!options.keepTopic && activeTopic !== "all") {
    const active = projectById(activeProject);
    if (!active.topics.includes(activeTopic)) activeTopic = "all";
  }

  const currentProject = projectById(activeProject);
  const highlightedTopics = new Set(currentProject.topics);

  document.querySelectorAll(".topic-filter").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.topic === activeTopic);
  });

  document.querySelectorAll(".project-node").forEach((node) => {
    const project = projectById(node.dataset.project);
    const isCurrent = project.id === activeProject;
    const matches = projectMatchesTopic(project);
    node.classList.toggle("is-active", isCurrent);
    node.classList.toggle("is-muted", !matches);
    node.setAttribute("aria-pressed", String(isCurrent));
  });

  document.querySelectorAll(".connector").forEach((connector) => {
    const projectId = connector.dataset.project;
    const topicId = connector.dataset.topic;
    const project = projectById(projectId);
    const active = projectId === activeProject || topicId === activeTopic;
    connector.classList.toggle("is-active", active);
    connector.classList.toggle("is-muted", !projectMatchesTopic(project));
  });

  document.querySelectorAll(".topic-chip").forEach((chip) => {
    const related = highlightedTopics.has(chip.dataset.topic) || chip.dataset.topic === activeTopic;
    chip.classList.toggle("is-muted", !related && activeTopic !== "all");
  });

  renderPanel(currentProject);
}

function renderPanel(project) {
  const topicNames = project.topics.map((topicId) => topicById(topicId).label).join(", ");

  projectPanel.innerHTML = `
    <p class="panel-kicker">${project.status}</p>
    <h3>${project.title}</h3>
    <p>${project.summary}</p>
    <ul class="meta-list">
      <li>
        <strong>Question</strong>
        <span>${project.question}</span>
      </li>
      <li>
        <strong>Methods</strong>
        <span>${project.methods}</span>
      </li>
      <li>
        <strong>Output</strong>
        <span>${project.output}</span>
      </li>
      <li>
        <strong>Connected Areas</strong>
        <span>${topicNames}</span>
      </li>
    </ul>
  `;
}

function renderPublications() {
  publicationList.innerHTML = projects
    .map((project) => {
      const tags = project.topics
        .map((topicId) => `<span class="tag">${topicById(topicId).label}</span>`)
        .join("");
      return `
        <article class="publication-card" id="${project.id}">
          <div>
            <p class="panel-kicker">${project.status}</p>
            <h3>${project.title}</h3>
          </div>
          <p>${project.summary}</p>
          <div class="tag-row">${tags}</div>
        </article>
      `;
    })
    .join("");
}

renderTopicControls();
renderMap();
renderPublications();
updateView();

document.querySelector("#year").textContent = new Date().getFullYear();
