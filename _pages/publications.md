---
layout: page
permalink: /publications/
title: Publications
description: Papers, talks, and posters. Click a title's <b>Website</b> button to open its page with a summary and my role.
nav: true
nav_order: 1
---

<!-- _pages/publications.md -->

<!-- Badge colours by publication type. "paper" keeps the theme default;
     the three conference types get their own colours. -->
<style>
  .pub-conf-proc .badge { background-color: #2563eb !important; } /* conference (international, with proceedings) */
  .pub-pres-intl .badge { background-color: #0d9488 !important; } /* conference (international, presentation only) */
  .pub-pres-dom .badge  { background-color: #64748b !important; } /* conference (domestic) */
</style>

<!-- Bibsearch Feature -->

{% include bib_search.liquid %}

<div class="publications">

<h2>Working Papers</h2>
{% bibliography --group_by none --query @*[pcat=working]* %}

<h2>Under Review</h2>
{% bibliography --group_by none --query @*[pcat=review]* %}

<h2>Journal Papers</h2>
{% bibliography --group_by none --query @*[pcat=journal]* %}

<div class="pub-conf-proc">
<h2>Conference Papers</h2>
{% bibliography --group_by none --query @*[pcat=conf]* %}
</div>

<div class="pub-pres-intl">
<h2>Conference Presentations — International</h2>
{% bibliography --group_by none --query @*[pcat=pres_intl]* %}
</div>

<div class="pub-pres-dom">
<h2>Conference Presentations — Domestic</h2>
{% bibliography --group_by none --query @*[pcat=pres_dom]* %}
</div>

</div>

<!-- Publication buttons: add a "Paper" link and set button order for specific papers.
     Edit PUB_BUTTONS below — the key is the citation key in _bibliography/papers.bib:
       paper: "URL"  → adds a Paper button linking to that URL
       order: [...]  → left-to-right order (labels: Paper, Website, Code, PDF, HTML, DOI, ...) -->
<script>
  (function () {
    const PUB_BUTTONS = {
      jp_multiview_ctsp: { paper: "https://ieeexplore.ieee.org/document/11248888", order: ["Paper", "Website", "Code"] },
      ur_mars: { order: ["Website", "Code"] },
    };
    function applyPubButtons() {
      Object.keys(PUB_BUTTONS).forEach(function (key) {
        var cfg = PUB_BUTTONS[key];
        var entry = document.getElementById(key);
        if (!entry) return;
        var links = entry.querySelector(".links");
        if (!links) return;
        if (cfg.paper && !Array.prototype.some.call(links.querySelectorAll("a"), function (a) { return a.textContent.trim() === "Paper"; })) {
          var a = document.createElement("a");
          a.className = "btn btn-sm z-depth-0";
          a.setAttribute("role", "button");
          a.href = cfg.paper;
          a.target = "_blank";
          a.rel = "external nofollow noopener";
          a.textContent = "Paper";
          links.appendChild(a);
        }
        if (cfg.order) {
          var byLabel = {};
          Array.prototype.forEach.call(links.querySelectorAll("a"), function (b) { byLabel[b.textContent.trim()] = b; });
          cfg.order.forEach(function (label) { if (byLabel[label]) links.appendChild(byLabel[label]); });
        }
      });
    }
    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", applyPubButtons);
    else applyPubButtons();
  })();
</script>
