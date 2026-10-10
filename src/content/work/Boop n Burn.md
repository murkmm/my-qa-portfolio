---
title: 'Boop n Burn'
status: 'In Development'
publishDate: '2026-06-01'
featured: true
studio: true
img: '/assets/boop-n-burn.webp'
img_alt: 'Players scrambling across the shipping yard arena in Boop n Burn.'
description: |
  Ki10 Games' current title. A sixteen player floor is lava party brawler built in Godot for PC, Switch and Xbox Series, where I lead design and programming ahead of a Steam Next Fest demo.
tags:
  - 'Director'
  - 'Game Design'
  - 'Programming'
  - 'Godot'
  - 'Multiplayer'
  - 'In Development'
summary:
  - 'Leading design and programming on a sixteen player online party brawler.'
  - 'Building the shove mechanics, stamina system and networked physics.'
  - 'Preparing a PC demo for Steam Next Fest, with consoles planned for the game.'
---

**Ki10 Games · PC, Nintendo Switch and Xbox Series X|S · In development**

### Don’t touch the lava

Boop n Burn is a party brawler for up to sixteen players. You shove each other into lava, and the last one standing wins the round. There’s no health bar to work through. One well-timed push can do it.

We’re building it in Godot, with free-for-all and team modes across five arenas. We’re working towards a PC demo for Steam Next Fest in February 2027, with Switch and Xbox Series also planned for the game.

### What I’m working on

I lead the design and programming. That covers the shove mechanic, stamina, round flow, progression, arena layouts and the multiplayer systems underneath it all. I also run playtests and plan the QA and platform certification work.

Most of the work lately has been on multiplayer. A shove needs to happen properly for everyone in the match, otherwise it stops being funny fairly quickly. Getting the physics and networking to agree is the hardest part of the project.

### Keeping it simple to play

The moves are built around momentum and positioning. Shoving costs stamina, so you have to pick your moment rather than keep pressing the button. A kill feed shows who pushed whom, which helps settle the argument afterwards.

There are XP and gear unlocks, but they don’t change the competitive balance. The arenas change the way a round plays, from the open shipping yard to a tighter warehouse.

### From the current build

<img src="/assets/boop-n-burn-ruins.webp" alt="The ruined temple arena in Boop n Burn, with the current leader wearing a crown" loading="lazy" />

<img src="/assets/boop-n-burn-arcade.webp" alt="The arcade arena in Boop n Burn, with pink lava" loading="lazy" />

The core game, five arenas, progression and unlocks are playable. There’s still work to do before the demo, especially on making online matches reliable. Having an actual demo date helps us decide what needs doing now and what can wait.

### Tools

Godot and GDScript, networked multiplayer with server-authoritative physics, Jira and Confluence.
