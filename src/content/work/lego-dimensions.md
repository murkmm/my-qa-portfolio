---
title: 'LEGO Dimensions - Year 2 DLC'
publishDate: '2016-11-18'
featured: true
img: '/assets/lego-dimensions.jpg'
img_alt: 'Gameplay from the LEGO Dimensions Battle Arenas and DLC packs.'
description: |
  My first industry role, at T.T. Games, testing the year two DLC packs for LEGO Dimensions. I logged 200+ bugs in the Battle Arenas and found an AI bug that broke lesser used characters.
tags:
  - 'QA Testing'
  - 'Game Testing'
  - 'Jira'
  - 'Multiplayer'
summary:
  - 'Logged 200+ bugs in the multiplayer Battle Arenas.'
  - 'Found an AI pathing bug affecting lesser used characters.'
  - 'Tested DLC packs including Sonic and Fantastic Beasts.'
---

**Company:** T.T. Games

_LEGO Dimensions_ was T.T. Games' toys to life game, and in its second year it kept getting new content packs based on big films and franchises. This was one of my first jobs in the industry, and our team tested those new packs.

### What I did

- Tested the Story Packs (_Fantastic Beasts_, _Ghostbusters_, _The LEGO Batman Movie_) and Level Packs (_Sonic the Hedgehog_, _Adventure Time_, _Mission: Impossible_), with exploratory, functional and regression testing. Some of them took up to five hours to play through.
- Tested the new multiplayer Battle Arenas on PS3, PS4, Xbox 360, Xbox One and Wii U, with as many character combinations as I could.
- Wrote bug reports in Jira with repro steps and video, and checked fixes with the developers.
- Ran multiplayer test sessions to track down hard to reproduce bugs.

The toys to life side made it a big job. Every new character, vehicle and gadget could be combined with everything that already existed, and the packs had fixed release dates, often tied to a film coming out.

<video class="centered-image" poster="/assets/lego-dimensions.jpg" controls playsinline preload="none" aria-label="A scene from the LEGO Dimensions Battle Arenas">
  <source src="/videos/lego-dimensions-highlight.mp4" type="video/mp4" />
  <source src="/videos/lego-dimensions-highlight.webm" type="video/webm" />
</video>

### The Battle Arenas

I logged over 200 bugs in the Battle Arenas, including game-breaking ones. One investigation changed how we covered the characters afterwards.

<aside class="qa-example" aria-labelledby="pathing-bug-title">
<p class="eyebrow">A bug I investigated</p>
<h3 id="pathing-bug-title">The characters walking into walls</h3>
<dl>
<dt>What I noticed</dt>
<dd>Some of the less commonly used characters had broken AI pathing in the Battle Arenas and would walk into walls.</dd>
<dt>How I found it</dt>
<dd>I made a point of trying every character instead of spending all my time with the main heroes. That exposed problems the usual character choices hadn’t shown.</dd>
<dt>What changed</dt>
<dd>I wrote a test plan specifically for AI-controlled characters so every character would get checked in future passes.</dd>
</dl>
</aside>

Outside the arenas I found everything from graphical glitches to progression blockers in the story and level packs. I also became known for getting through big regression lists quickly. A lot of people found them tedious, but I actually enjoyed them.

### Tools

Jira, Excel for test cases and playthrough documents, PS3, PS4, Xbox 360, Xbox One and Wii U dev kits, and T.T. Games' own engine and debug tools.
