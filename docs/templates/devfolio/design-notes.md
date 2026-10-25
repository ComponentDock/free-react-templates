# Devfolio — design notes

Prep research for `apps/devfolio`, recreating the ColorLib **Trace Developer** design (`trace-developer`).
Live preview: https://preview.colorlib.com/theme/trace-developer/ (200, 7,638 B, read 2026-10-25 with `curl -4` —
this host resolves IPv6 first and hangs). Spec: `openspec/specs/template-devfolio/spec.md`.
Tasks: `docs/templates/devfolio/tasks.md`.

## The thesis, in one paragraph

The page is a **claim about how you work**, printed in 90 px type, and everything after it is evidence: a fake
`about-me.json` editor instead of a headshot, two project cards that promise *a case study, a live demo and source*
rather than a screenshot, three principles that read like rules of engagement (*"Make the next step obvious."*,
*"Build for more than the happy path."*, *"Leave a clear trail."*), and a tools band that separates *In the browser*
from *In the workflow* from *What I'm exploring* — a portfolio that admits what it is still learning. The contact
band prints a sample address and immediately says so. There is no gallery, no logo wall, no testimonial, no
pricing, **no motion at all** — not one keyframe, not one observer, not one reveal. Six bands, four colours, one
typeface: the restraint *is* the argument, so a recreation that adds a hover lift or a gradient has already got the
template wrong.

## Structure order (measured at 1440 × 900)

| #  | band            | height | ground                             | device                                                              |
| -- | --------------- | -----: | ---------------------------------- | ------------------------------------------------------------------- |
| 0  | skip link       |      — | white pill on focus                | first focusable                                                      |
| 1  | header          |  **87**| transparent + 1 px `#dbe1e8`       | mono glyph brand, 4 links, boxed *Get in touch ↗*                    |
| 2  | hero            | **768**| **`#15243a`** navy                  | 3-line `h1` (lime middle), 2 CTAs, **JSON editor card**, 3-item foot  |
| 3  | `#work`         |**1,269**| `#f9fafc`                          | eyebrow + `h2` + 330 px lede, then two 6/6 project cards             |
| 4  | `#about`        |  **688**| **`#edf1f7`** + `border-block`       | 5/7 split, two paragraphs, 3 principles on rules                     |
| 5  | tools           |  **371**| `#f9fafc`                          | 5/7 split, 2 × 2 cell grid                                           |
| 6  | `#contact`      |  **385**| **`#2459d3`** panel, radius 8        | 64 px `h2`, one white `mailto:` button, demo-address note            |
| 7  | footer          |  **104**| transparent + 1 px top rule         | brand line · guide + Component Dock · sample-data note                |

Document **3,732 px** at 1440 / 3,696 at 1280 / 3,491 at 1024 / 3,942 at 768 / 5,148 at 390 / 5,619 at 320.
Container `max-width: 1232px`. Section padding **72 px**; hero **84 / 62**; contact panel **50**; header **24**;
footer **26**.

## DOM skeleton

```
<a class="skip">
<header class="site-header">
  <div class="container header-row">
    <a class="brand"><span aria-hidden="true">&lt;am/&gt;</span>Ari Morgan</a>
    <button class="menu-toggle" aria-controls="site-nav" aria-expanded="false">Menu</button>
    <nav id="site-nav" aria-label="Main navigation">
      Selected work · About · Résumé · [Get in touch ↗]
<main id="main">
  <section class="hero">
    <div class="container"><div class="row g-4 g-lg-5 align-items-center">
      <div class="col-lg-7"> eyebrow · h1 · p.intro · .actions(2) </div>
      <div class="col-lg-5">
        <aside class="editor" aria-label="A short developer introduction">
          .editor-head ( ● ● ● , about-me.json )
          <pre> JSON with .key / .string spans </pre>
          .editor-foot ( Small details… , UTF-8 )
      <div class="hero-foot"> 01 · 02 · 03 </div>
  <div class="container">
    <section class="section" id="work">
      .section-top ( eyebrow + h2 | 330 px lede )
      article.project × 2 ( .project-visual {.warm} + .project-copy )
  <section class="section about" id="about">          ← note: outside the .container
    5/7 row → h2 | 2 paragraphs + .principles × 3
  <div class="container">
    <section class="section">                          ← tools, no id
      5/7 row → h2 + link | .stack-grid × 4
    <section class="contact-panel" id="contact"> … </section>
<footer class="site-footer"> .footer-row + .sample-note </footer>
```

Two containers are nested around `#work` and the tools band, and `#about` sits between them — an artefact of hand
editing. Flatten it.

## Design tokens

```
--ink   #18212f   --muted #5d6776   --line #dbe1e8   --blue #2459d3
--navy  #15243a   --paper #f9fafc   --lime #d9f77c
#edf1f7 about ground · #c9d2df principle rules · #a44711 focus ring
editor: #0e1c30 ground · #53657e border · #30435c rules · #8093ae dots · #98aeca foot
        #8cb8ff keys · #d9f77c strings · #c7d1e0 text
cards:  #e4eafa well 1 · #e6eddf well 2 · #c0cde0 image border · #4c5b6d tag text
```

Type: **Inter** (self-hosted variable woff2, `100 900`), headings **650 / `-0.05em` / `1.08`**, body 16 / 28.
`h1 clamp(3rem,6.3vw,5.6rem)` → 89.6 px at 1440; `h2 clamp(2rem,4vw,3.3rem)` → 52.8; contact `h2`
`clamp(2.5rem,5vw,4rem)` → 64. Mono is the **system** stack, used for eyebrows (11.2 px / 0.09em uppercase),
tags (10.6 px) and the editor.

Radii: **3** tag · **5** button + nav pill · **6** image · **8** project card + contact panel · **9** editor.
Shadows: two only — `0 20px 35px #08111c40` (editor), `0 16px 28px #17283c1a` (project images).

## Section-by-section fidelity notes

**Header.** 87 px, `padding: 24px 0`, a single `#dbe1e8` rule — no sticky, no blur, no shadow. The brand glyph is
mono in `--blue` and reads like a tag (`<am/>`); the name is 16 px/700/−0.04em. Four links at **12.8 px** in the
reference; bump to 14 px (the header has room). The last link is boxed, not filled — that is the only button in the
header and it is 1 px, radius 5, `padding: 7px 13px`.

**Hero.** Two-thirds claim, one-third code. The `h1` is capped at 780 px so the three `<br>` lines hold at every
width down to ~900 px; the lime line is the *middle* one, so the eye lands on *"Clear thinking"* rather than the
first or last phrase — keep that order. The right column is a **fake editor**: dark `#0e1c30`, radius 9, a
`#30435c` head with three `● ● ●` and the filename, a `<pre>` at 13.44 px with `line-height: 2` (double spacing is
what makes it look like code), keys blue, strings lime, `pre-wrap` so it never scrolls. Below the row, a `1px
#42516a` rule and three numbered promises. The 84 / 62 px padding — not 72 / 72 — is why the band breathes upward.

**`#work`.** A `.section-top` with the heading left and a **330 px** lede right, `align-items: end`, so the lede's
baseline sits on the `h2`'s second line. Each card is a 6/6 split: a tinted well (`#e4eafa` cool, `#e6eddf` warm)
holding a browser-shaped screenshot, and a copy column with a mono eyebrow that numbers the project
(`01 / INTERNAL TOOL INTERFACE`), a 32 px `h3`, a 14.4 px blurb, three square-ish tags, and two actions — a filled
ink button and a plain text link. The well is `min-height: 360px` with the shot vertically centred, which is what
keeps the two cards the same height despite different copy lengths.

**`#about`.** The one band that inverts the 7/5 split: headline on the **left (5)**, argument on the **right (7)**,
on a cool grey ground with hairlines top and bottom. The `.principles` list is three rules, not three cards —
`padding: 23px 0` and a `#c9d2df` border under each, titles at 17.3 px (deliberately smaller than an `h3` would
normally be; they are rules, not sections).

**Tools.** Same 5/7 split, but the right column is a plain 2 × 2 grid with no borders at all — four 16 px titles
with 13.9 px bodies and 25 px gaps. The link *Experience and résumé →* is the only way to the résumé page, which is
why the résumé view must exist in the recreation (or the link must go).

**Contact.** A **panel**, not a band: `padding: 50px`, radius 8, `margin-bottom: 60px`, so `#f9fafc` shows around
it and the footer rule sits 60 px lower. 64 px `h2` — the largest type on the page — one white button with a
`mailto:`, and the honesty note underneath.

**Footer.** 104 px, 11.2 px type, `space-between`: brand line left, *Setup & publishing guide* + credit right, and
a sample-data paragraph below in the same muted colour. The credit is the one thing that **must** change: the
Component Dock link replaces it.

## Interactions (all of `assets/app.js`, 803 B)

1. `document.documentElement.classList.add('js')` — the menu button only exists with JS.
2. Menu button toggles `#site-nav.open` and `aria-expanded`; a click on any nav link closes it; `Escape` closes it
   **and moves focus back to the button** (the reference gets this right — keep it).
3. `[data-print]` is `hidden` in markup and un-hidden by JS, then calls `window.print()` — résumé only.
4. `html { scroll-behavior: smooth; scroll-padding-top: 30px }` — under-scrolls against an 87 px header.
5. `prefers-reduced-motion: reduce` kills smooth scroll and all transitions/animations — the reference is the only
   template in this fleet that already ships that guard.

Filtering lives in `assets/demo.js` on the two demo pages (not in `app.js`): text query × `data-category`, a count
line, an empty state, URL sync, *Clear filters* restoring focus to search, and unknown categories falling back to
*All*. That is the behaviour worth porting — as a pure `filterRecords()` used by both project demos.

## Screenshot

`trace-developer-featured.jpg` — 2,400 × 1,892, 81,436 B, **actually an AVIF container** served with a `.jpg`
extension (convert before viewing). A browser-chrome mock at ~1,520 px logical width: hero + the top of `#work`,
with two floating thumbnails of the *Issue Lens* case study and demo at the right. It confirms the four-colour
palette (navy, paper, ink, lime), the lime middle headline line, the lime primary button beside the outlined
secondary, the dark editor card with lime strings, and the `01 / 02 / 03` hairline foot. Nothing below the `#work`
heading is shown, so the live page is the authority for every later band.

## Reference defects (do not port)

1. **12 px horizontal overflow at exactly 1024 px** — Bootstrap `.row`'s `-12px` margins against a
   `max-width: 1232px` container with no padding override (`scrollWidth 1036` vs `clientWidth 1024`). Only width
   that overflows; the recreation must have none.
2. **The footer credits ColorLib** — replace with `https://www.componentdock.com/` (repo rule, and the only
   provenance allowed in an app is none).
3. **The focus ring disappears on dark grounds** — one global `outline: 3px solid #a44711` gives ~1.9:1 on
   `#15243a` and ~2.0:1 on `#2459d3`.
4. **`scroll-padding-top: 30px` vs an 87 px header** — anchor targets land under the top edge.
5. **`aria-current="page"` on *Selected work* on the home view**, where that link is a `#work` anchor.
6. **The print button is JS-only**, so the carefully written `@media print` sheet (11 pt, chrome hidden) is
   unreachable without JS.
7. **The editor is a `<pre>` of styled text** — one long run for a screen reader; the chrome (`● ● ●`, `UTF-8`)
   needs `aria-hidden` and the block needs a label (or an equivalent `<dl>`).
8. **Nav labels at 12.8 px** — below the fleet's 14 px floor.
9. **`.section-top` only stacks below 576 px**, so a 330 px lede crowds the `h2` between 992 and 1100.
10. **Nested `.container`s** around `#work` and the tools band.
11. **`mailto:ari@example.com`** is a demo address — keep the shape *and* the note, never a plausible-looking
    replacement without it.

## Fidelity budget (what "close to identical" means here)

Because the design has no motion, no gradients and no photography, fidelity is almost entirely **type and rules**:

- `font-weight: 650` (variable Inter), `-0.05em` tracking, `line-height: 1.08` on headings, `1.75` on body.
- `h1` 89.6 px, `h2` 52.8 px, contact `h2` 64 px, project `h3` 32 px, principle `h3` 17.3 px, tool `h3` 16 px.
- Every separator 1 px `#dbe1e8` (`#c9d2df` inside `.principles`); no shadows except the two named.
- Radii 3 / 5 / 6 / 8 / 9, used exactly as listed — nothing at 16 px or above anywhere.
- Band heights within 5 % at 1440 (87 / 768 / 1,269 / 688 / 371 / 385 / 104) and no overflow at any width.

Anything else (a hover lift, a scroll reveal, a gradient, a second accent, a rounded-2xl card) is off-template.
