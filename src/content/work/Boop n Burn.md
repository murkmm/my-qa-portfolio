---
title: 'Boop n Burn'
status: 'In Development'
publishDate: '2026-06-01'
featured: true
studio: true
img: '/assets/boop-n-burn.webp'
img_alt: 'Players scrambling across the shipping yard arena in Boop n Burn.'
description: |
  Ki10 Games' main project: a sixteen player floor is lava party brawler built in Godot for PC, Switch and Xbox Series. I lead design and programming, and we're aiming for a Steam Next Fest demo.
tags:
  - 'Director'
  - 'Game Design'
  - 'Programming'
  - 'Godot'
  - 'Multiplayer'
  - 'In Development'
summary:
  - 'Lead design and programming on a sixteen player online party brawler.'
  - 'Shove based combat, with stamina so every push is a decision.'
  - 'Getting multiplayer ready for a Steam Next Fest demo.'
---

**Company:** Ki10 Games · **Platforms:** PC, Nintendo Switch, Xbox Series X|S · **Status:** In development

_Boop n Burn_ is a floor is lava party brawler and Ki10 Games' main project. Up to sixteen players drop into an arena with one rule: don't touch the lava. There's no health bar. You shove people in, and the last one standing wins the round.

It has free for all and team modes and five arenas so far, and it's built in Godot for PC, Nintendo Switch and Xbox Series. We’re aiming for a playable PC demo at Steam Next Fest in February 2027. Switch and Xbox Series are planned for the game.

### The design problem

A party game only works if the main action is still fun the fiftieth time, and in Boop n Burn that action is the shove. It needs enough depth to keep people playing all night without getting so complicated that someone picking up a controller for the first time is lost.

The technical side is the hardest thing I've built: physics with sixteen players online, where everyone's game has to agree on who pushed who, and in which direction. If it doesn't, losing feels random instead of funny.

### What I do

- Design: the shove, the stamina that limits it, how matches and rounds flow, progression and unlocks, and the arenas.
- Programming: gameplay in Godot, especially the physics and the online multiplayer.
- Technical direction: how the multiplayer works, which platforms we target, and what two people can realistically get done by the demo.
- QA: playtests, network testing, the test approach for an online game, and planning certification for Switch and Xbox.

### Design choices so far

- Movement is built on momentum rather than combos, so the skill is in reading other players and positioning, not memorising buttons.
- Shoving costs stamina, so every push is a decision and you can't just mash it.
- A kill feed says who shoved who, which makes every knockout a moment and gets people wanting a rematch.
- XP and gear unlocks give longer sessions something to work towards, without affecting balance.
- Five arenas, from an open shipping yard to a cramped warehouse, so the same rule plays differently each round.
- The whole project is scoped to a fixed public date, which is something we learned from Skill Check.

<img src="/assets/boop-n-burn-ruins.webp" alt="The ruined temple arena in Boop n Burn, with the current leader wearing a crown" class="centered-image" />

<img src="/assets/boop-n-burn-arcade.webp" alt="The arcade arena in Boop n Burn, with pink lava" class="centered-image" />

### Where it's at

You can play it start to finish with full lobbies, five arenas, progression and unlocks. Right now most of my time is going into getting the multiplayer ready and running network tests ahead of Next Fest. A lot of what I learned about multiplayer and platforms testing games like _Fall Guys_ on mobile feeds straight into it.

### Tools

Godot (GDScript), networked multiplayer with server authoritative physics, Jira and Confluence, and PC, Switch and Xbox Series as targets.
