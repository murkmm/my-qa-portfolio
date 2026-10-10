---
title: 'Skill Check'
status: 'Released'
publishDate: '2026-05-18'
featured: true
studio: true
img: '/assets/skillcheck-card.webp'
hero: '/assets/skillcheck-hero.webp'
img_alt: 'The Skill Check daily trivia game running on mobile.'
description: |
  My first released game, and the first for Ki10. I built this daily gaming trivia game in Godot and handled everything from the design and backend to QA and getting it onto Google Play and the web.
tags:
  - 'Director'
  - 'Game Design'
  - 'Programming'
  - 'Godot'
  - 'Released'
summary:
  - 'Built and released the game on Google Play and the web.'
  - 'Designed and built the daily content pipeline, progression and a 1,594 card collection.'
  - 'Handled store submission, updates and crash monitoring after release.'
---

**Ki10 Games · Android and web · Released**

### A game we could actually finish

Skill Check is a daily trivia game about gaming history. You get a fresh set of questions every day, with nearly 1,600 cartridges to collect along the way. It’s free on Android and in your browser.

KIT was our first project, but it had become a lot for two people with day jobs. I wanted to take something smaller all the way through release. Skill Check was that game, and it became the first one we shipped at Ki10.

- [Play Skill Check in your browser](https://skillcheckgame.com/)
- [Get it on Google Play](https://play.google.com/store/apps/details?id=com.ki10games.skillcheck)

### What I worked on

I designed and programmed the game in Godot. The cards you draw decide how difficult a run is and how many points you can earn, so choosing harder cards is a bit of a gamble.

I also built the daily content pipeline, authentication, cloud saves and leaderboards. The questions need to turn up each day without me manually feeding them in every morning.

Getting it out meant handling the Google Play submission, store images, builds and web hosting. My QA work covered test plans, device testing and crash reporting, so I could see what was going wrong once people were playing on their own phones.

### What I learnt

Having worked in QA for years, I was used to testing games before release. Being responsible for the whole thing myself was different. Store submission, updates and keeping a backend running were all part of the job this time.

Keeping the scope small enough to finish was the useful lesson. There was still plenty to do after the game itself worked. We now have a release process to build on for the next Ki10 game.

### How it looks now

The newer artwork gives the cartridges much more character. These are the current menu, card selection, question and collection screens.

<div class="game-screens">
<figure><img src="/assets/skillcheck-menu.webp" width="720" height="1278" alt="Skill Check daily run menu with illustrated game cartridges" loading="lazy" decoding="async" /><figcaption>The daily run.</figcaption></figure>
<figure><img src="/assets/skillcheck-card-select.webp" width="720" height="1294" alt="Choosing a cartridge before a Skill Check question" loading="lazy" decoding="async" /><figcaption>Picking the next cartridge.</figcaption></figure>
<figure><img src="/assets/skillcheck-question.webp" width="720" height="1272" alt="A trivia question in the updated Skill Check interface" loading="lazy" decoding="async" /><figcaption>A question in play.</figcaption></figure>
<figure><img src="/assets/skillcheck-collection.webp" width="720" height="1308" alt="The Skill Check collection with the new cartridge artwork" loading="lazy" decoding="async" /><figcaption>The cartridge collection.</figcaption></figure>
</div>

### Tools

Godot and GDScript, Google Play Console, backend services for accounts and leaderboards, crash reporting, Jira and Confluence.
