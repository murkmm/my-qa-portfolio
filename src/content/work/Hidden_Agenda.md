---
title: 'Hidden Agenda (PlayLink)'
publishDate: '2017-10-24'
img: '/assets/Hidden Agenda.jpg'
img_alt: 'A promotional image for the PlayLink game Hidden Agenda.'
description: |
  A PlayLink crime thriller at Supermassive Games, where up to six players vote on the story using their phones. I tested the branching story and both modes, and tracked down a save data bug in the E3 demo.
tags:
  - 'QA Testing'
  - 'Game Testing'
  - 'PlayLink'
  - 'Unreal Engine 4'
  - 'Multiplayer'

summary:
  - 'Learned to test a game controlled from players’ phones.'
  - 'Tested a branching story and multiplayer modes for up to six players.'
  - 'Found the cause of a save data bug in the E3 demo.'
---

**Company:** Supermassive Games / Sony Interactive Entertainment

_Hidden Agenda_ was a crime thriller and one of Sony's PlayLink games, where you play using your iOS or Android phone instead of a controller. Up to six people vote on decisions, and those votes shape the story. I was on the core QA team for it while also testing two other games.

### What I did

- Learned to test with phones as controllers, which came with its own set of problems to look out for.
- Tested the co-op Story Mode and the competitive mode, where some players are secretly given their own objectives.
- Mapped out the branching story and tested the different paths, character combinations and scene changes that come from players' choices.
- Wrote bug reports in DevTrack, a lot of them about multiplayer connections and the phone app.
- Tested the E3 demo, the game's first showing to press and the public.

The number of combinations was the hard part. Every scene could play out differently depending on earlier choices and who was still alive, across two modes and up to six players. Knowing the story paths well meant I could reach the unusual situations where the harder to find bugs were.

<video class="centered-image" poster="/assets/Hidden Agenda.jpg" controls playsinline preload="none" aria-label="A scene from Hidden Agenda's E3 demo">
  <source src="/videos/hidden-agenda-highlight.mp4" type="video/mp4" />
  <source src="/videos/hidden-agenda-highlight.webm" type="video/webm" />
</video>

<aside class="qa-example" aria-labelledby="save-bug-title">
<p class="eyebrow">A bug I investigated</p>
<h3 id="save-bug-title">The disappearing character in the E3 demo</h3>
<dl>
<dt>What I noticed</dt>
<dd>A character disappeared from every scene after restarting the demo on the same save. The problem carried over into later playthroughs.</dd>
<dt>How I narrowed it down</dt>
<dd>I investigated the saved state and traced the problem to corrupted save data. Clearing it between playthroughs avoided the issue.</dd>
<dt>What I gave the team</dt>
<dd>A cause they could investigate and a practical workaround for repeat demo sessions: clear the save between playthroughs. The team could then address it before the public showing.</dd>
</dl>
</aside>

### Tools

DevTrack, Confluence, Unreal Engine 4, iOS and Android devices and Supermassive's own debug tools.
