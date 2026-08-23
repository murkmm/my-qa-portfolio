# Mark McManus — QA & Game Development Portfolio

Personal portfolio site. Built with [Astro](https://astro.build/).

## Structure

| Path                    | What's in it                                                              |
| :---------------------- | :------------------------------------------------------------------------ |
| `src/content/work/`     | One Markdown file per project. All the case studies live here.            |
| `src/pages/`            | Home, About, Portfolio index, and the `[...slug]` route for case studies. |
| `src/components/`       | Shared UI: nav, footer, hero, portfolio cards, skills grid, theme toggle. |
| `src/styles/global.css` | Design tokens (colours, type scale, spacing) and global styles.           |
| `public/assets/`        | Images, gameplay clips, company logos and the CV PDF.                     |

## Adding a project

Create a new `.md` file in `src/content/work/`. The filename becomes the URL slug,
so `Skill Check.md` becomes `/work/skill-check`.

```yaml
---
title: 'Game Title'
publishDate: '2026-05-18' # drives the year markers on the portfolio timeline
featured: true # surfaces it on the home page
studio: true # only for Ki10 Games titles, which get their own home page section
img: '/assets/game-title.webp' # card image
img_alt: 'Describe the image for screen readers'
description: |
  One paragraph, shown on the card and as the page description.
tags:
  - 'Game Design'
  - 'Released'
summary:
  - 'Bullet points shown when hovering the card on the home page.'
---
Markdown body: the full case study.
```

`featured` and `studio` are both optional and default to false.

- **`studio: true`** puts the project in the "Games I've Made" section on the home page.
- **`featured: true`** on a QA credit gives it priority in "Games I've Tested".

## Images

Assets live in `public/assets/` and are served as-is, so **Astro does not optimise
them**. Compress before committing:

- **Screenshots and photos:** max 1600px wide, JPEG quality ~82 or WebP ~85.
- **Gameplay clips:** animated WebP, quality ~52. Keep the frame size as exported.
  Resizing an animated WebP breaks the frame strip.
- **Logos:** max 400px wide.

Anything over ~1MB is worth a second look. A 15MB hero image makes the site feel
broken on mobile.

## The CV

The downloadable CV at `/mark-mcmanus-cv.pdf` is generated from `cv/mark-mcmanus-cv.html`.
Edit the HTML, then regenerate:

```sh
chrome --headless=new --no-pdf-header-footer   --print-to-pdf="public/mark-mcmanus-cv.pdf"   "file:///<absolute-path>/cv/mark-mcmanus-cv.html"
```

On Windows, `chrome` is usually `C:\Program Files\Google\Chrome\Application\chrome.exe`.
Keeping the source in the repo means the PDF stays editable and the download URL never changes.

## Commands

| Command           | Action                         |
| :---------------- | :----------------------------- |
| `npm install`     | Install dependencies           |
| `npm run dev`     | Dev server at `localhost:4321` |
| `npm run build`   | Build to `./dist/`             |
| `npm run preview` | Preview the built site locally |
