---
title: 'KIT - Knight In Training'
status: 'In Development'
publishDate: '2025-08-29'
featured: false
studio: true
img: '/assets/kit-godot-card.webp'
img_alt: 'Briarwatch, the first level of KIT, rebuilt in Godot.'
description: |
  Ki10 Games' first project, a 3D action adventure where I lead design, programming and QA. We paused it in Unity when it got too big for us, and I'm now rebuilding it in Godot.
tags:
  - 'Director'
  - 'Game Design'
  - 'Programming'
  - 'Unity'
  - 'Godot'
  - 'In Development'
summary:
  - 'Lead design, programming and QA on Ki10 Games’ first project.'
  - 'Built a camera system that moves between 3D exploration and 2D side on sections.'
  - 'Paused when the scope outgrew the team, now being rebuilt in Godot.'
---

**Company:** Ki10 Games · **Platform:** PC · **Status:** In development (Godot port)

_KIT - Knight in Training_ is a 3D action adventure inspired by the mascot platformers I grew up with: a colourful world, a camera that switches between 3D exploring and 2D side on sections, and a small cat with a very large sword.

It was Ki10 Games' first project and the subject of our first nine devlogs. We paused it, and now it's back, and I'm porting it from Unity to Godot.

### My role

As Director I've had a hand in almost everything:

- Game design: the core gameplay, the story, and a map and quest system for tracking collectibles across the world.
- Programming: in Unity I built the camera manager, save system, NPC dialogue, content gating and the shop.
- QA: I wrote and ran the test plans and kept a QA knowledge base for the project.

### What we built in Unity

Before we paused it, a lot of the game worked:

- A camera system mixing dolly paths, player controlled cameras and 2D side on sections, with transitions you shouldn't notice.
- The map and quest system for tracking collectibles.
- Player movement with a double jump, coyote time and a spin attack.
- Breakable objects, hazards and button operated parts of the level.
- A level select hub with content gating and checkpoints.
- Saving, NPC dialogue, a shop and cosmetics, and music and sound effects.
- A creature companion system, where creatures you meet in the world come home with you.

### Why we paused it

The problem was scope. A 3D action adventure is huge. Every system we finished showed us two more we hadn't started, and it became clear it was more than two people with day jobs could get over the finish line. I'd spent years testing games at studios big enough to make projects like this, and I'd underestimated how much of the work those bigger teams were actually covering.

So I paused KIT and we made something we could finish. That became _Skill Check_, our first released game, and it's also why _Boop n Burn_ has had a fixed public deadline from the start. Spotting that a project has got too big for the team, and doing something about it early, is probably the most useful thing I've learned as a director.

### Back in development in Godot

Now that _Skill Check_ is out and our other games are built in Godot, I've brought KIT back and I'm porting it across. Having everything in one engine makes it much easier to move between projects and reuse what I learn on each one.

The core mechanics are working in Godot and I'm fine tuning them, and I've started building the first level, Briarwatch.

### Screenshots

The Godot version, in Briarwatch (the models are placeholders for now):

<img src="/assets/kit-godot-vista.webp" alt="A wide view of Briarwatch in the Godot version of KIT" class="centered-image" />

<img src="/assets/kit-godot-village.webp" alt="KIT on Briarwatch Green, under the oath tree" class="centered-image" />

The original Unity version:

<video class="centered-image" controls playsinline preload="none" aria-label="Gameplay from the Unity version of KIT - Knight In Training">
  <source src="/videos/kit-highlight.mp4" type="video/mp4" />
  <source src="/videos/kit-highlight.webm" type="video/webm" />
</video>

### Tools

Unity (C#) for the original version, Godot (GDScript) for the port, Jira for tasks and bugs, and Confluence for design docs and the QA knowledge base.
