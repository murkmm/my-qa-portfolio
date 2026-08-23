---
title: 'Skill Check'
status: 'Released'
publishDate: '2026-05-18'
featured: true
studio: true
img: '/assets/skill-check.webp'
img_alt: 'The Skill Check daily trivia game running on mobile.'
description: |
  My first commercially released title as Director at Ki10 Games. A daily gaming trivia game built in Godot, shipped to Google Play and the web, where I owned design, programming, backend, release and QA end to end.
tags:
  - 'Director'
  - 'Game Design'
  - 'Programming'
  - 'Godot'
  - 'Released'
summary:
  - 'Shipped a complete commercial title solo, from first prototype to live on Google Play.'
  - 'Designed and built the daily content pipeline, progression and a 1,594 card collection.'
  - 'Owned the full release process including store submission, live ops and crash monitoring.'
---

**Company:** Ki10 Games · **Platforms:** Android, Web · **Status:** Released

### Project Overview

_Skill Check_ is a daily trivia game about gaming history. Players get one fresh set of questions every day, drawn from franchises, studios and deep cuts across the whole medium, with a collection of nearly 1,600 cartridges to unlock and master along the way.

It is my first commercially released title, and the first game Ki10 Games has shipped. It is free to play, live on Google Play and playable in any browser.

- **Play it in your browser:** [skillcheckgame.com](https://skillcheckgame.com/)
- **Get it on Google Play:** [Skill Check on the Play Store](https://play.google.com/store/apps/details?id=com.ki10games.skillcheck)

### The Challenge

The real challenge was not a technical one. It was **scope discipline**.

Ki10's first project was an ambitious 3D action adventure, and after a year of development it became clear that a two person team with day jobs could not carry something that size to a finish line. I had plenty of experience shipping other studios' games, but none shipping my own, and there is a long list of things you simply cannot learn from the QA side of the fence.

So I made a deliberate call: pick something small enough to actually finish, and finish it. The goal was not a prototype or a vertical slice. It was a complete, published, downloadable product, because that is the only thing that proves you can close the gap between "playable" and "released".

### My Role & Responsibilities

I owned the project end to end as Director, which in practice meant every discipline:

- **Game Design:** Designed the core daily run loop, the card based difficulty system where the cards you draw set both the challenge and the score on offer, and the progression and collection systems that give players a reason to return.
- **Programming:** Built the game in Godot, including the client, the daily content pipeline, and the systems that generate and serve a new set of questions every day.
- **Backend & Live Ops:** Implemented authentication, cloud save, leaderboards and a daily content service, then kept it running after launch.
- **Release Management:** Handled Google Play store submission, listing assets, build pipelines and versioning, plus the web build and its hosting.
- **Quality Assurance:** Wrote and executed the test plans, and set up crash reporting so I could actually see what was failing on real devices in the wild.

### My Approach & Actions

- Scoped the design deliberately around **one strong, repeatable interaction** rather than breadth, so a solo developer could realistically finish and maintain it.
- Built a **content pipeline** capable of generating and serving daily question sets without manual intervention, so the game keeps running without me feeding it every morning.
- Designed the **card system** so difficulty is a player choice rather than a fixed curve. Draw harder cards and you risk more for a bigger score.
- Applied my QA background from day one: **test plans, device coverage and crash reporting were built in from the start**, not bolted on before submission.
- Shipped to Android first to get real telemetry from a wide range of hardware, then brought the game to the web to remove the install barrier entirely.

### Impact & Results

- **The game shipped.** It is live, playable and downloadable, which is the outcome the whole project was scoped around.
- Proved out a **full solo release pipeline** for Ki10 Games, covering store submission, backend infrastructure, live content and post launch monitoring. Everything the studio's next title needs is now a known quantity rather than an unknown.
- Validated the **"finish something small"** strategy. A few months on Skill Check taught me more about shipping than another year of prototyping would have, particularly around store compliance, real device fragmentation and the difference between "works on my machine" and "works on a stranger's four year old Android phone".
- The **collection system** turned out to be the feature players engaged with most, which directly informed how progression is being designed for our next title.

### Gameplay Highlights

<img src="/assets/skill-check-question.webp" alt="A Skill Check trivia question in play, with a countdown timer" class="centered-image" />

<img src="/assets/skill-check-collection.webp" alt="The Skill Check collection screen showing cartridges to master" class="centered-image" />

### Technologies & Tools Used

- **Godot Engine** (GDScript)
- **Google Play Console** (store submission, releases, live ops)
- **Backend services** for auth, cloud save and leaderboards
- **Crash reporting** and live telemetry
- **Jira & Confluence** for tracking and documentation
- **Android & Web** build pipelines
