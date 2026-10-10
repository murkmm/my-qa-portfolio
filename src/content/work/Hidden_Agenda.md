---
title: 'Hidden Agenda (PlayLink)'
publishDate: '2017-10-24'
img: '/assets/Hidden Agenda.jpg'
img_alt: 'A promotional image for the PlayLink game Hidden Agenda.'
description: |
  I tested Hidden Agenda at Supermassive Games, covering its branching story, six-player PlayLink sessions and E3 demo.
tags:
  - 'QA Testing'
  - 'Game Testing'
  - 'PlayLink'
  - 'Unreal Engine 4'
  - 'Multiplayer'
  
summary:
  - "Tested phones as controllers through PlayLink."
  - "Covered story choices in cooperative and competitive modes."
  - "Tracked a disappearing-character bug in the E3 demo to save data."
---

**Company:** Supermassive Games / Sony Interactive Entertainment

### Six players and a lot of possible choices

Hidden Agenda uses phones as controllers. I tested both the cooperative story and competitive mode, with up to six people making decisions that changed what happened next.

I mapped and tested story branches, checked changes caused by character deaths and player choices, and reported problems with connectivity and the mobile app. I was working across two other titles at the same time, so knowing the paths well helped me focus each session.

### The disappearing character

During E3 demo testing, I investigated a bug where a character disappeared from every scene after restarting on the same save. I traced it to corrupted save data and found that clearing the save between playthroughs avoided the issue. That gave the team a practical workaround for the demo while they dealt with the bug.

### From the game

<img src="/assets/Hidden_Agenda__highlight.webp" alt="A scene from Hidden Agenda's E3 Demo" class="centered-image" loading="lazy" />

### Tools

* **DevTrack** (for bug reporting and tracking)
* **Confluence** (for test plans and QA knowledge base)
* **Unreal Engine 4**
* **iOS & Android mobile devices**
* **Proprietary Supermassive Games debug tools**
