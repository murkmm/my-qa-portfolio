---
title: 'The One Bullet Job'
status: 'Released'
publishDate: '2026-10-16'
featured: true
studio: true
img: '/assets/the-one-bullet-job.webp'
img_alt: 'The One Bullet Job key art: the robber in a vault beside the game logo.'
description: |
  My second released game at Ki10 Games: a turn based heist puzzle for Android built in Godot. I handled design, programming and QA, including the solver tooling that proves all 120 campaign jobs can be beaten.
tags:
  - 'Director'
  - 'Game Design'
  - 'Programming'
  - 'Godot'
  - 'Test Tooling'
  - 'Released'
summary:
  - 'Designed and shipped a grid based heist puzzle built around one bullet per job.'
  - 'Built a shared rules engine used by the game, solver, hints and replays.'
  - 'Every campaign job is proven solvable and cross-checked by an independent solver.'
---

**Company:** Ki10 Games · **Platform:** Android · **Status:** Released

_The One Bullet Job_ is a turn based heist puzzle for phones. Each job is a small room on a grid: steal the cash, avoid the guards and escape with the loot before your moves run out. Players can dash, wait or shoot, then the guards take their turn. You usually have exactly one bullet, so a lot of the puzzle is deciding who gets it.

It shipped with 120 jobs across 20 chapters, each chapter introducing one new mechanic, plus more jobs generated after the campaign and cosmetic masks and outfits earned by playing. It became my second released game at Ki10 Games, built as a side project alongside _Boop n Burn_.

### What I did

- Design: the core turn structure, the one bullet rule, the three star goals, and a chapter structure that introduces relays, directional guards, turning sentries, laser gates, air vents and keycards one at a time.
- Programming: built the game in Godot, including the rules engine, campaign and save systems, procedural post-campaign jobs, menus, cosmetics and the presentation layer.
- Test tooling: built the solver, the in-editor Level Lab generator and the automated checks that keep every job valid.
- QA and release: test planning, regression suites, Android device passes, store preparation and release validation.

### The quality problem

Every level in a puzzle campaign has to be beatable, and has to stay beatable when the rules change. With 120 jobs and new mechanics being added chapter by chapter, checking that by hand after every change wasn't realistic.

A level can be solvable and still not be fun, so the tooling also had to help me find the good ones.

### How I handled it

- Shared rules: the game, solver, hints, replays and level generator all use the same rules code, so the solver and the game can't disagree about what a move does.
- A second solver: a separate Python version of the rules solves the levels again, and the two results are compared.
- Every job checked: every campaign job is solved, its escape and three star routes are replayed through the game's rules, and the results are compared with the Python solver. Each job's par comes from a solved route.
- Level Lab: a Godot editor plugin generates candidate rooms. In one test it made 1,000 distinct rooms in about two and a half minutes. It rejects impossible rooms, duplicates and rooms where the chapter's new mechanic doesn't actually matter. Nothing it makes goes into the campaign until I've played it myself.
- Fixed level data: campaign levels are saved as versioned data files, so a level can't quietly change for players because I tweaked a rule later.
- CI: GitHub Actions run campaign, level catalog, animation and menu checks whenever the relevant files change.

### Shipped result

- A released Android game with a 120 job campaign across 20 chapters.
- Every campaign job checked as beatable, with solver-backed par targets for three stars.
- Procedurally generated jobs continue after the handcrafted campaign using the same rules and solver checks.
- Store art, screenshots and trailers captured from the real game.
- A repeatable level pipeline: generate, solve, review, then publish.

### Play the game

[Download The One Bullet Job free on Google Play](https://play.google.com/store/apps/details?id=com.ki10games.onebulletjob)

### Press coverage

- [Pocket Gamer — The One Bullet Job](https://www.pocketgamer.com/the-one-bullet-job/coming-to-android/)
- [GamingonPhone — The One Bullet Job launches on Android](https://gamingonphone.com/news/the-one-bullet-job-is-a-turn-based-heist-puzzle-game-launching-on-android-this-october-16/)

### Screenshots

<div class="screenshot-grid">
  <img src="/assets/the-one-bullet-job-vault.webp" alt="Planning a move, with reachable tiles highlighted in cyan" width="720" height="1280" loading="lazy" />
  <img src="/assets/the-one-bullet-job-shot.webp" alt="Taking the one shot and downing a guard" width="720" height="1280" loading="lazy" />
  <img src="/assets/the-one-bullet-job-lasers.webp" alt="A gallery job with laser gates and guards" width="720" height="1280" loading="lazy" />
  <img src="/assets/the-one-bullet-job-result.webp" alt="An escaped result screen with three stars and a first clear" width="720" height="1280" loading="lazy" />
</div>

### Tools

Godot (GDScript), Python for the second solver, a custom Godot editor plugin for level generation and review, GitHub Actions for automated checks, and the Android build pipeline.
