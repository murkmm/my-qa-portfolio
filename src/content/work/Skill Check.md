---
title: 'Skill Check'
status: 'Released'
publishDate: '2026-05-18'
featured: true
studio: true
img: '/assets/skill-check.webp'
img_alt: 'The Skill Check daily trivia game running on mobile.'
description: |
  Ki10 Games' first released game: a daily gaming trivia game built in Godot, out on Google Play and the web. I did the design, programming, backend, release and QA.
tags:
  - 'Director'
  - 'Game Design'
  - 'Programming'
  - 'Godot'
  - 'Released'
summary:
  - 'Took it from first prototype to live on Google Play.'
  - 'Built the daily question pipeline, progression and a 1,594 cartridge collection.'
  - 'Handled store submission, live updates and crash monitoring.'
---

**Company:** Ki10 Games · **Platforms:** Android, Web · **Status:** Released

_Skill Check_ is a daily trivia game about gaming history. Every day there's a new themed run of questions on franchises, studios and deep cuts, and a collection of nearly 1,600 cartridges to unlock and master as you go. It's the first game Ki10 Games has released, and my first commercial release. It's free on Google Play and in your browser.

- **Play it in your browser:** [skillcheckgame.com](https://skillcheckgame.com/)
- **Get it on Google Play:** [Skill Check on the Play Store](https://play.google.com/store/apps/details?id=com.ki10games.skillcheck)

### Why a trivia game

Our first project, KIT, was a big 3D action adventure, and after a year it was clear two people with day jobs couldn't finish something that size. I'd helped ship plenty of other studios' games, but never my own, and there's a lot about releasing a game you can't learn from the QA side.

So I picked something small enough to finish and set out to release it properly, on a real store, not leave it as a prototype.

### What I did

I made it end to end:

- Design: the daily run, the cards that set both the difficulty and the score on offer, and the progression and collection that bring people back.
- Programming: the game itself in Godot, and the pipeline that generates and serves a new set of questions every day without me having to do it by hand.
- Backend: login, cloud saves, leaderboards and the daily content service, and keeping it all running after launch.
- Release: Google Play submission, store listing, build pipelines and versioning, plus the web build and hosting.
- QA: test plans, device coverage, and crash reporting set up from the start so I could see what was going wrong on real phones.

I released on Android first to see how the game ran on lots of different hardware, then brought it to the web so people could play without installing anything. Since launch I've done a big art update, so nearly every cartridge now has proper artwork.

### What I learned

Releasing Skill Check taught me more in a few months than another year of prototyping would have, especially about store requirements, how many different Android phones are out there, and the gap between a game working on my machine and working on a stranger's old phone. Ki10 now has a release process, backend and crash monitoring that the next game can use.

The collection turned out to be the part players got most into, and that's shaped how we're designing progression in our other games.

### Screenshots

The main menu with today's three cards, a matching set giving a big score bonus, a question in play, and the collection.

<div class="screenshot-grid">
  <img src="/assets/skill-check-menu.webp" alt="The Skill Check main menu showing today's Age of Empires II daily run, three illustrated cards and yesterday's score and rank" width="720" height="1278" loading="lazy" />
  <img src="/assets/skill-check-synergy.webp" alt="A Maid of Orléans matching set stacked on the console, raising the potential score to 4,700" width="720" height="1294" loading="lazy" />
  <img src="/assets/skill-check-question.webp" alt="A trivia question about the William Wallace campaign with three answers and a countdown bar" width="720" height="1272" loading="lazy" />
  <img src="/assets/skill-check-collection.webp" alt="The collection screen showing illustrated cartridges from The Sims, Spyro and Outer Wilds" width="720" height="1308" loading="lazy" />
</div>

### Tools

Godot (GDScript), Google Play Console, backend services for login, cloud saves and leaderboards, crash reporting, Jira and Confluence, and Android and web build pipelines.
