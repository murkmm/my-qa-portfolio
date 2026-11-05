---
title: 'Save File 0'
status: 'In Development'
publishDate: '2026-10-31'
featured: true
studio: true
img: '/assets/save-file-0.webp'
img_alt: 'Save File 0 key art: the Occupant standing in a dark office corridor.'
description: |
  A first-person survival horror game for the Game Boy Color, coming to a real cartridge. I handle design, programming and QA, including a raycaster that runs at 30fps on the original hardware.
tags:
  - 'Director'
  - 'Game Design'
  - 'Programming'
  - 'C and Assembly'
  - 'Game Boy Color'
  - 'Test Tooling'
  - 'In Development'
summary:
  - 'Real-time first-person horror running at 30fps on a real Game Boy Color.'
  - 'Two save files, one office: switch between them to get through.'
  - 'Automated test suites, a hardware-timing test build and blind playtests on every version.'
---

**Company:** Ki10 Games · **Platform:** Game Boy Color (physical cartridge) · **Status:** In development, Floor 3 demo complete

_Save File 0_ is a first-person survival horror game for the Game Boy Color. You're a relief QA tester covering the night shift at a small games studio, and your job is to make a save and load it back. Then a second save appears that nobody made. Loading it puts you in the same office, in the dark, with something that can't be killed.

The whole game is built around those two saves. Each one is its own copy of the building, and you switch between them at the office computers. A door open in one can be locked in the other, a copier dead in one prints in the other, and anything you pick up comes back with you.

It was announced on Halloween 2026. The Floor 3 demo is finished, runs on real hardware, and there's a full physical prototype with a printed box, manual and labelled cartridge.

<video class="centered-image" poster="/assets/save-file-0-trailer-poster.webp" controls playsinline preload="none" aria-label="Save File 0 teaser trailer">
  <source src="/videos/save-file-0-teaser.mp4" type="video/mp4" />
</video>

### What I do

- Design: the two-save structure, the Occupant's rules, the cross-save puzzles, the story and the full four-floor plan.
- Programming: the game in C with GBDK-2020, with the raycaster's inner loops in SM83 assembly, plus the Python tools that build the maps, art and tables.
- QA: automated test suites, hardware-timing checks, real-hardware runs and blind playtests.
- Physical edition: the box, manual and cartridge label, and a working prototype.

### The technical problem

A first-person game on the Game Boy Color shouldn't really work. There's no multiply instruction, no framebuffer, and only about ten scanlines of vertical blank each frame to get new graphics onto the screen.

- The raycaster casts 40 rays a frame across a grid map, using lookup tables for distances, wall heights and even multiplication.
- The frame is drawn as background tiles in work RAM. Only the top half is drawn, and the bottom half reuses it with the GBC's vertical tile flip.
- Finished frames are copied into the hidden VRAM bank over two vertical blanks and then flipped in, and a scheduler decides what fits into each blank so nothing ever corrupts the screen.
- It runs in double-speed mode at 30fps, measured at 29.9–30.0fps across the busiest scenes.

### How I test it

Coming from QA, I wanted testing built in from the start rather than bolted on at the end.

- Automated suites play through the whole demo in an emulator: every escape route with no ammo, saving, dying, the power cutting out mid-save, and every interactive object from 2,820 positions.
- Emulators copy data to VRAM instantly, but real hardware pauses the CPU while it copies. I built a separate test ROM that adds the real pause, so the timing tests match the hardware.
- Saves are checksummed with a commit marker written last, and the tests cut the power mid-save to prove it always falls back to the last good save.
- Every build is archived with its source, ROM and screenshots, and each round of blind playtest feedback goes straight into the next version.

### Screenshots

<div class="screenshot-grid">
  <img src="/assets/save-file-0-player.webp" alt="A computer in the office corridor in the player's own save" width="640" height="576" loading="lazy" />
  <img src="/assets/save-file-0-file0.webp" alt="The same spot in FILE 0: dark, with server racks in the way" width="640" height="576" loading="lazy" />
  <img src="/assets/save-file-0-occupant.webp" alt="The Occupant standing in a doorway in FILE 0" width="640" height="576" loading="lazy" />
  <img src="/assets/save-file-0-locker.webp" alt="The Occupant seen through the vents of a locker" width="640" height="576" loading="lazy" />
  <img src="/assets/save-file-0-save-index.webp" alt="The save index showing a second file nobody made" width="640" height="576" loading="lazy" />
  <img src="/assets/save-file-0-call.webp" alt="An incoming call at 03:12 on one of the office computers" width="640" height="576" loading="lazy" />
</div>

<img src="/assets/save-file-0-prototype.webp" alt="The Save File 0 prototype: printed box, cartridge and instruction booklet" class="centered-image" loading="lazy" />

### Where it's at

The Floor 3 demo is complete and has been through several rounds of blind playtesting. The full game is planned across four areas, Floors 3, 2 and 1 and a basement vault, at about three to four hours on a first play.

[See Save File 0 on the Ki10 Games website](https://ki10games.com/projects/save-file-0) · [Watch the trailer](https://youtu.be/nbiv6W50Lho)

### Tools

C with GBDK-2020, SM83 assembly, Python build and asset tools, PyBoy for automated tests, Emulicious for debugging, and a real Game Boy Color.
