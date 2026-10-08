---
title: 'The One Bullet Job'
status: 'In Development'
publishDate: '2026-10-08'
featured: true
studio: true
img: '/assets/the-one-bullet-job.webp'
img_alt: 'The One Bullet Job key art: the robber in a vault beside the game logo.'
description: |
  A turn based heist puzzle for Android, built in Godot as Ki10 Games' current side project. I own design, programming and QA, including the solver tooling that proves every one of its 120 jobs can be beaten.
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

### Project Overview

_The One Bullet Job_ is a turn based heist puzzle for phones. Each job is a small room on a grid: steal the cash, avoid the guards and escape with the loot before your moves run out. Players can dash, wait or shoot, then the guards take their turn. You usually have exactly one bullet, so deciding who gets it is the heart of the puzzle.

The game has 120 jobs across 20 chapters, each chapter introducing one new mechanic, plus a daily heist and cosmetic masks and outfits earned by playing. It is my current side project at Ki10 Games, running alongside _Boop n Burn_.

### My Role & Responsibilities

- **Game Design:** The core turn structure, the one bullet economy, three star mastery goals, and a chapter structure that introduces relays, directional guards, turning sentries, laser gates, air vents and keycards one at a time.
- **Programming:** Built the game in Godot, including the rules engine, campaign and save systems, the daily heist, menus, the cosmetic shop and the presentation layer.
- **Test Tooling:** Built the solver, the in-editor level generator and the automated checks that keep every job valid.
- **Quality Assurance:** Test planning, regression suites and the device and playtest passes that a deterministic puzzle game depends on.

### The Challenge

A puzzle game with a large numbered campaign has a very specific quality problem: **every single level has to be beatable, and must stay beatable.** One unsolvable room, or one that quietly changes after a rules tweak, breaks trust with players in a way no patch note fixes.

The second problem is subtler. A level being solvable does not make it fun. Generating content at scale is easy, generating content worth playing is not.

### My Approach & Actions

This is where my QA background shaped the architecture from the start:

- **One source of truth for the rules.** The live game, the solver, hints, best run replays and the level generator all run on the same rules engine, so there is no gap between "the solver says this works" and "the game lets you do it".
- **An independent cross-check.** A separate Python implementation of the rules re-solves the levels. If the two ever disagree, something is wrong, and I find out before players do.
- **Solver-proven levels.** Every job in the campaign is solved on each check, its escape and three star routes are replayed through the real rules, and the results must match the independent solver. Pars come from proven solutions, not guesses.
- **A generator with quality gates.** The in-editor Level Lab generated 1,000 distinct candidate rooms in about two and a half minutes in testing, rejecting rotated or mirrored duplicates and rooms where a new mechanic doesn't actually matter. Generated rooms are never published automatically. Each is reviewed before it joins the campaign.
- **Frozen, versioned level data.** Published levels are stored as versioned data, so level 48 is the same level for every player, forever.
- **Automated regression.** CI workflows replay solutions through the live game and check the level catalog, campaign, animation and menus on every relevant change.

### Impact & Results

- A complete **120 job campaign across 20 chapters**, with every job proven beatable.
- Store ready presentation: key art, feature graphic and store screenshots rendered from real gameplay by an in-game capture tool.
- A reusable **generate, prove, review, freeze** pipeline that lets the campaign grow without lowering the bar.
- Most importantly, a clear demonstration of something I have argued for throughout my QA career: quality is cheapest when it is designed into the architecture, not tested in at the end.

### Gameplay Highlights

<div class="screenshot-grid">
  <img src="/assets/the-one-bullet-job-vault.webp" alt="Planning a move, with reachable tiles highlighted in cyan" width="720" height="1280" loading="lazy" />
  <img src="/assets/the-one-bullet-job-shot.webp" alt="Taking the one shot and downing a guard" width="720" height="1280" loading="lazy" />
  <img src="/assets/the-one-bullet-job-lasers.webp" alt="A gallery job with laser gates and guards" width="720" height="1280" loading="lazy" />
  <img src="/assets/the-one-bullet-job-result.webp" alt="An escaped result screen with three stars and a first clear" width="720" height="1280" loading="lazy" />
</div>

### Technologies & Tools Used

- **Godot Engine** (GDScript)
- **Python** for the independent solver cross-check
- **Custom Godot editor plugin** for level generation and review
- **GitHub Actions** for automated regression checks
- **Android** build and export pipeline
