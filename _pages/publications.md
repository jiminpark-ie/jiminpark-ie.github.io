---
layout: page
permalink: /publications/
title: Publications
description: Papers, talks, and posters. Click a title's <b>Website</b> button to open its page with a summary and my role.
nav: true
nav_order: 1
---

<!-- _pages/publications.md -->

<!-- Bibsearch Feature -->

{% include bib_search.liquid %}

<div class="publications">

<h2>Working Papers</h2>
{% bibliography --group_by none --query @*[pcat=working]* %}

<h2>Under Review</h2>
{% bibliography --group_by none --query @*[pcat=review]* %}

<h2>Journal Papers</h2>
{% bibliography --group_by none --query @*[pcat=journal]* %}

<h2>Conference Papers</h2>
{% bibliography --group_by none --query @*[pcat=conf]* %}

<h2>Conference Presentations — International</h2>
{% bibliography --group_by none --query @*[pcat=pres_intl]* %}

<h2>Conference Presentations — Domestic</h2>
{% bibliography --group_by none --query @*[pcat=pres_dom]* %}

</div>
