---
title: 'LEGO City Undercover - Current Gen Ports'
publishDate: '2017-04-04'
img: '/assets/lego-city-undercover.jpg'
img_alt: 'A gameplay screenshot from LEGO City Undercover showing the open world city.'
description: |
  QA at T.T. Games on the ports of LEGO City Undercover to PC, PS4, Xbox One and Nintendo Switch. I planned the testing of the open world, tested the new co-op mode, and checked old Wii U content had been removed.
tags:
  - 'QA Testing'
  - 'Game Testing'
  - 'Jira'
  - 'Nintendo Switch'
summary:
  - 'Planned each day’s testing of the open world hub.'
  - 'Tested the new two player co-op mode from start to finish.'
  - 'Checked leftover Wii U content had been taken out.'
---

**Company:** T.T. Games

My second project at T.T. Games was porting _LEGO City Undercover_ from the Wii U to PC, Xbox One, PlayStation 4 and the Nintendo Switch, which hadn't launched yet. The ports added a two player co-op mode, and anything tied to the Wii U had to come out.

### What I did

- Full playthroughs on all four platforms. I was one of the first testers to get hands on with the Switch.
- Tested every collectible (achievements, police shields, character and vehicle unlocks) to make sure 100% completion was possible.
- Led the testing of the open world hub, with its super builds, challenges, races and hidden collectibles.
- Tested the new co-op mode from start to finish, working with another tester every day.
- Regression tested everything that used to rely on the Wii U GamePad, to make sure the new controls and UI worked.
- Logged bugs in Jira, from collectible tracking errors to co-op problems to Wii U content that hadn't been removed, and checked fixes with the porting team.

### Two problems to solve

The first was the Wii U content. GamePad features and Wii U exclusive Easter eggs all had to go, and anything left behind could cause legal problems. I found several bits that had been missed before the game went for certification.

The second was the size of the open world. To cover it without people testing the same streets twice, I split the map into sections and gave each tester their own areas in the daily plan, for both single player and co-op.

<video class="centered-image" autoplay loop muted playsinline preload="metadata" aria-label="A scene from LEGO City Undercover's open world">
  <source src="/videos/lego-city-undercover-highlight.mp4" type="video/mp4" />
  <source src="/videos/lego-city-undercover-highlight.webm" type="video/webm" />
</video>

### Tools

Jira, Excel for coverage tracking and checklists, PlayStation 4, Xbox One and Switch dev kits, and T.T. Games' own engine and debug tools.
