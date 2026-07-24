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
