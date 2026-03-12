---
layout: page
title: photography
permalink: /photography/
description: Travel and landscape photography
nav: true
nav_order: 4
images:
  lightbox2: true
---

## Huangshan & Hongcun

The [Yellow Mountains (Huangshan)](https://en.wikipedia.org/wiki/Huangshan) are famous for their granite peaks, twisted pine trees, hot springs, and seas of clouds. Nearby [Hongcun](https://en.wikipedia.org/wiki/Hongcun) is a UNESCO World Heritage village known for its well-preserved Ming and Qing dynasty architecture.

<div class="row mt-3">
{% for i in (1..9) %}
<div class="col-sm-4 mt-3 mt-md-3">
  <a href="{{ '/assets/img/photography/huangshan/' | append: i | append: '.jpg' | relative_url }}" data-lightbox="huangshan">
    <img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/photography/huangshan/' | append: i | append: '.jpg' | relative_url }}" alt="Huangshan photo {{ i }}" loading="lazy" />
  </a>
</div>
{% endfor %}
{% assign huangshan_extra = "s2,s3,s4,sssssss,v1,v2,v3" | split: "," %}
{% for name in huangshan_extra %}
<div class="col-sm-4 mt-3 mt-md-3">
  <a href="{{ '/assets/img/photography/huangshan/' | append: name | append: '.jpg' | relative_url }}" data-lightbox="huangshan">
    <img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/photography/huangshan/' | append: name | append: '.jpg' | relative_url }}" alt="Huangshan photo" loading="lazy" />
  </a>
</div>
{% endfor %}
</div>

---

## Nanjing

[Nanjing](https://en.wikipedia.org/wiki/Nanjing), my hometown, is a city rich in history — ancient capital of six dynasties, home to the Ming Dynasty city wall, Confucius Temple, and beautiful cherry blossoms at Jiming Temple.

<div class="row mt-3">
{% for i in (1..13) %}
<div class="col-sm-4 mt-3 mt-md-3">
  <a href="{{ '/assets/img/photography/nanjing/' | append: i | append: '.jpg' | relative_url }}" data-lightbox="nanjing">
    <img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/photography/nanjing/' | append: i | append: '.jpg' | relative_url }}" alt="Nanjing photo {{ i }}" loading="lazy" />
  </a>
</div>
{% endfor %}
</div>
