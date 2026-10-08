---
title: 'The One Bullet Job'
status: 'In Development'
publishDate: '2026-10-08'
featured: true
studio: true
img: '/assets/the-one-bullet-job.webp'
img_alt: 'The One Bullet Job key art: the robber in a vault beside the game logo.'
description: |
  A turn based heist puzzle for Android, built in Godot as a Ki10 Games side project. I handle design, programming and QA, including the solver tooling that checks all 120 jobs can be beaten.
tags:
  - 'Director'
  - 'Game Design'
  - 'Programming'
  - 'Godot'
  - 'Test Tooling'
  - 'In Development'
summary:
  - 'Designing a grid based, turn based heist puzzle around one bullet per job.'
  - 'Built a shared rules engine used by the game, solver, hints and replays.'
  - 'Every job is proven solvable and cross-checked by an independent solver.'
---

**Company:** Ki10 Games · **Platform:** Android · **Status:** In development, coming soon

_The One Bullet Job_ is a turn based heist puzzle for phones. Each job is a small room on a grid: steal the cash, avoid the guards and escape with the loot before your moves run out. Players can dash, wait or shoot, then the guards take their turn. You usually have exactly one bullet, so a lot of the puzzle is deciding who gets it.

The game has 120 jobs across 20 chapters, each chapter introducing one new mechanic, plus a daily heist and cosmetic masks and outfits earned by playing. It is my current side project at Ki10 Games, running alongside _Boop n Burn_.

### What I do

- Design: the core turn structure, the one bullet rule, the three star goals, and a chapter structure that introduces relays, directional guards, turning sentries, laser gates, air vents and keycards one at a time.
- Programming: built the game in Godot, including the rules engine, campaign and save systems, the daily heist, menus, the cosmetic shop and the presentation layer.
- Test tooling: the solver, the in-editor level generator and the automated checks that keep every job valid.
- QA: test planning, regression suites and device and playtest passes.

### The quality problem

Every level in a puzzle campaign has to be beatable, and has to stay beatable when the rules change. With 120 jobs and new mechanics being added chapter by chapter, checking that by hand after every change isn't realistic.

A level can be solvable and still not be fun, so the tooling also had to help me find the good ones.

### How I handled it

- Shared rules: The game, the solver, hints, replays and the level generator all use the same rules code, so the solver and the game can't disagree about what a move does.
- A second solver: A separate Python version of the rules solves the levels again, and the two results are compared.
- Every job checked: On each run, every job in the campaign is solved, its escape and three star routes are replayed through the game's rules, and the results are compared with the Python solver. Each job's par comes from a solved route.
- Level generator: A Godot editor plugin generates candidate rooms. In one test it made 1,000 distinct rooms in about two and a half minutes. It rejects rotated or mirrored duplicates and rooms where the chapter's new mechanic isn't needed. Nothing it makes goes into the game until I've reviewed it.
- Fixed level data: Published levels are saved as versioned data files, so a level doesn't change for players after release.
- CI: GitHub Actions run the campaign, level catalog, animation and menu checks whenever the relevant files change.

### Where it's at

- A 120 job campaign across 20 chapters, with every job checked as beatable.
- Store art and screenshots captured from real gameplay with an in-game capture tool.
- A repeatable process for adding levels: generate, solve, review, then publish.

### Screenshots

<div class="screenshot-grid">
  <img src="/assets/the-one-bullet-job-vault.webp" alt="Planning a move, with reachable tiles highlighted in cyan" width="720" height="1280" loading="lazy" />
  <img src="/assets/the-one-bullet-job-shot.webp" alt="Taking the one shot and downing a guard" width="720" height="1280" loading="lazy" />
  <img src="/assets/the-one-bullet-job-lasers.webp" alt="A gallery job with laser gates and guards" width="720" height="1280" loading="lazy" />
  <img src="/assets/the-one-bullet-job-result.webp" alt="An escaped result screen with three stars and a first clear" width="720" height="1280" loading="lazy" />
</div>

### Tools

Godot (GDScript), Python for the second solver, a custom Godot editor plugin for level generation and review, GitHub Actions for automated checks, and the Android build pipeline.
