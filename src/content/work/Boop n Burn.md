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
  - 'Designing shove based combat around a stamina economy and readable player intent.'
  - 'Targeting a playable demo for Steam Next Fest across PC, Switch and Xbox Series.'
---

**Company:** Ki10 Games · **Platforms:** PC, Nintendo Switch, Xbox Series X|S · **Status:** In development

### Project Overview

_Boop n Burn_ is a floor is lava party brawler and Ki10 Games' current project. A lobby of up to sixteen players drops into an arena with one rule: don't touch the lava. There is no health bar and nothing to chip away at. You shove people in, and the last one standing takes the round.

It supports free for all and team modes, runs across five themed arenas, and is built in Godot for PC, Nintendo Switch and Xbox Series. A playable demo is planned for Steam Next Fest in February 2027.

### The Challenge

Party games live or die on a single question: **is the core interaction fun the fiftieth time?** There is no story to carry a weak loop and no progression that can rescue a boring minute to minute.

The design problem is making one verb, the shove, deep enough to sustain a full session without adding complexity that locks out the person picking up a controller for the first time. On top of that sits the hardest technical constraint on anything I've built: **sixteen player networked physics**, where every client needs to agree on who pushed whom and in which direction, with results readable enough that losing feels fair and funny rather than arbitrary.

### My Role & Responsibilities

- **Game Design:** Leading design on the core shove mechanic, the stamina economy that governs it, match structure and round flow, the progression and unlock system, and arena layout.
- **Programming:** Building gameplay systems in Godot, with a focus on the physics interactions and networked multiplayer that the whole game rests on.
- **Technical Direction:** Setting the multiplayer architecture and platform targets, and scoping features against what two people can realistically deliver by a fixed demo date.
- **Quality Assurance:** Running playtests, defining the test approach for a multiplayer title, and owning platform certification planning for Switch and Xbox Series.

### My Approach & Actions

- Designed the moveset around **momentum rather than a combo string**, so the skill ceiling comes from reading other players and positioning, not from memorising inputs.
- Introduced a **stamina cost on shoving** so committing to a push is a genuine decision with a downside, rather than a button players mash continuously.
- Built in a **kill feed** that names who shoved whom, turning every elimination into a social moment and giving players a reason to seek out a rematch.
- Layered **XP and gear unlocks** on top of the core loop to give sessions a longer arc, without letting unlocks affect competitive balance.
- Built **five distinct arenas** so the same core rule reads differently across a session, from an open shipping yard to a cramped warehouse interior.
- Scoped the entire project deliberately against a **fixed public deadline**, applying the lesson Skill Check taught us about picking a target we can actually hit.

### Gameplay Highlights

<img src="/assets/boop-n-burn-ruins.webp" alt="The ruined temple arena in Boop n Burn, with the current leader wearing a crown" class="centered-image" />

<img src="/assets/boop-n-burn-arcade.webp" alt="The arcade arena in Boop n Burn, with pink lava" class="centered-image" />

### Impact & Results

- **(Project is in development)** The core loop is playable end to end with full lobbies, five arenas, progression and unlocks in place.
- The technical foundation, networked multiplayer physics at sixteen players, is the most demanding system I have built and directly extends the multiplayer and platform experience I gained testing titles like _Fall Guys_ on mobile.
- Scope is being held against a public demo date rather than allowed to drift, which is a direct result of what shipping Skill Check taught us.

### Technologies & Tools Used

- **Godot Engine** (GDScript)
- **Networked multiplayer** and server authoritative physics
- **Jira & Confluence** for tracking and design documentation
- **PC, Nintendo Switch & Xbox Series** development targets
