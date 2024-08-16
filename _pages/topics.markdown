---
layout: page
title: Topics
permalink: topics
---

<ul>
{% for category in site.categories %}
    <li>
        <a href="/categories/{{ category | first }}"> 
            <strong>{{ category | first | capitalize }}</strong>
        </a>
    </li>
{% endfor %}
</ul>

