# Chalkline — design notes (replication of ColorLib "Cairn")

Prep research, 2026-10-25. Everything below was measured on the live preview and
the catalog screenshot; nothing is inferred from the name. Spec:
`openspec/specs/template-chalkline/spec.md`. Tasks:
`docs/templates/chalkline/tasks.md`.

## What the reference is

| | |
| --- | --- |
| Source slug | `cairn` (ColorLib catalogue title: **"Cairn - LMS Website Template 2026"**) |
| Preview | https://preview.colorlib.com/theme/cairn/ — HTTP 200, **110,581 B**, `<title>` **"Home \| Cairn"** |
| Meta description | "An open learning management system for schools, universities and training providers. Self-host it or let us run it." |
| Build | **Astro** + Tailwind 4; one stylesheet `_astro/Base.5bEd7vXR.css` (**64,383 B**), two small island scripts, view transitions enabled |
| Screenshot | `cairn-template.jpg`, HTTP 200, **356,223 B** JPEG, decoded **2400×1892** |
| Host quirk | `colorlib.com` and `preview.colorlib.com` resolve IPv6-first and hang on this host — every fetch used `curl -4` |

The design is a **marketing page for an open-source LMS** — the commercial
register is unusual for this catalogue (procurement lists, migration honesty,
per-learner pricing), and that is what makes the *content* structure worth
reproducing: it is an argument, not a brochure.

## Screenshot analysis (TEMPLATES.md card image)

The catalog card is a browser-framed top-fold shot:

- mint→white vertical gradient ground, generous white space, everything centred
- a small mono pill at the top with a green status dot: "Open source · AGPL-3.0"
- two-line headline, 60 px semibold: line 1 dark grey, line 2 **teal with a
  gradient** ("institution actually owns") — this is the design's signature move
- one-sentence lead, then three affordances on one line: a dark-teal filled
  button with an arrow, a white outlined button, and a round teal play button
  with a text label beside it
- a hairline rule with four stats (90 / 400 / 12 / 99) sitting on it, numerals
  semibold, labels small grey
- finally a photograph in a rounded-rectangle frame with a ring and a deep
  shadow — the only full-colour element above the fold

Below the fold the card shows nothing, so bands 2–10 were read from the live DOM
and a Playwright full-page render (1440×10,776).

## DOM skeleton (live preview, 1440×900)

```
<header> sticky top-0 z-50, bg-white/80 backdrop-blur-lg, border-b gray-200  81px
<main id="main-content">
  <section> hero: gradient primary-50/70 → white                       1405px
  <section> counters: bg-gray-50, border-y                             238px
  <section id="roles">      bg-white                                  1516px
  <section id="gradebook">  bg-gray-50, border-y                      1068px
  <section id="standards">  bg-white                                  1990px
  <section id="migration">  bg-gray-50, border-y                      1476px
  <section id="pricing">    bg-white                                  1110px
  <section id="faq">        bg-white                                   929px
  <section id="contact">    gradient primary-600 → primary-800          452px
<footer> bg-gray-900, pt-16 lg:pt-24                                   511px
```

Shell extras the source ships: `#preloader` (full-screen spinner),
`#scroll-progress` (2 px teal bar), a "Skip to content" link,
`astro-view-transitions`, and a cookie-consent bar. See *Deltas*.

## Colour: teal for structure, coral for trouble

Both ramps are hand-authored (not Tailwind defaults); neutrals are Tailwind greys.

```
primary  #eefbfa #d3f4f2 #ace9e7 ... #3bbcbc #20a0a1 #188082 #186769 #195356 #194648
                                50    100    200       400     500     600     700     800     900
accent   #ffe6e0 ...        #fd8163 #f45c38 #e2411a #be3314 #9d2d15 #822b18
            100               400     500     600     700     800     900
```

Usage, verified in the CSS:

- `#188082` (primary-600) — big counters, check marks, solid CTAs, the CTA band's
  gradient start, the ring on the middle pricing card
- `#186769` (primary-700) — **the hero's filled CTA**, in-table "good" scores
- `#3bbcbc` (primary-400) — the gradient end of the headline, the ping halo
- `#f45c38` (accent-500) — the "Most chosen" ribbon
- `#e2411a` (accent-600) — scores below 50, stage numbers, the roles-band meta
  labels, "Rebuild" in the migration table

Two gradients carry the page: the hero headline (`to right, #188082 → #3bbcbc`,
`background-clip: text`) and the closing band (`to bottom right, #188082 →
#195356`, plus `bg-white/10 blur-3xl` orbs and a 40 px white dot grid at
`opacity-10`).

## Type

**Outfit** for everything readable, **JetBrains Mono** for anything that is a
label, a number or a duration. The source self-hosts both; the recreation loads
them from Google Fonts (delta, same families).

Measured desk / mobile:

| | 1440 | 390 |
| --- | --- | --- |
| `h1` | 60 / 60, 600, −1.5 px | 36 / 40, 600, −0.9 px |
| `h2` | 36 / 40, 600, −0.75 px | 30 / 36, 600 |
| lead | 18 / 28 (20 px at `sm`) | 18 / 28 |
| body | 16 / 24 | 16 / 24 |
| eyebrow chip | mono 12 / 16, 500, `.05em` | same |
| table label / score | mono 12 / 16, `tabular-nums` | same |
| button | 16 / 24, 500 | 14 / 20, 500 |

That mono-label habit is what makes the page read as *institutional*: it is the
page's entire texture, and dropping it (e.g. using Outfit for the chips) makes the
recreation look like a different design.

## Band-by-band visual notes

### 1. Hero (1,405 px)

Centre-aligned, `max-w-7xl` container. Badge: 6 px-radius `primary-100` pill,
mono 12 px uppercase `primary-900`, with an 8 px `primary-500` dot and a pinging
`primary-400` halo. Headline wraps after "your"; the second line uses the teal
text gradient and **cycles three phrases** via `data-typewriter`
(`institution actually owns` / `registry can talk to` / `staff will use in week
one`). Lead is 18–20 px `gray-600`, `max-w-2xl`. Affordances in a centred row:
filled `#186769` + arrow (56 px tall), white outlined `gray-300`, then a 48 px
round play button + "Watch the 4-minute tour" label. Stats: four equal columns
above a `border-t gray-200`, `pt-10`, numerals 30/36 600 `gray-900`, labels 14
`gray-600` — note these four are **static** (the counters band animates its own).
Photograph: `max-w-5xl`, `rounded-2xl`, `shadow-2xl`, `ring-1 ring-gray-200`,
`mt-16 lg:mt-24`.

### 2. Counter band (238 px)

`gray-50`, `border-y`, `py-16 lg:py-20`. 2×2 → 4-up grid, centred. Numerals
36/48 700 `primary-600`; labels 14 500 `gray-600`. Values **90 / 400 / 31 / 99**
with labels "Institutions running …", "Thousand active learners", "Countries",
"Percent uptime, rolling year". They count up from 0 on first intersection.

### 3. Roles (1,516 px)

Left-aligned head block (`max-w-3xl`): mono chip "Roles", `h2` "Four roles, and a
permission model you can explain to a committee", lead. Then four
`rounded-xl border border-gray-200 bg-gray-50 p-5` cards in one row — each with a
**coral** mono meta label ("Default", "Assigned per course", "Assigned per
programme", "Institution-wide"), an 18 px 600 title and a 14 px `gray-600` blurb.
Then the matrix (`mt-10`, `overflow-x-auto`, `min-w-[46rem]`): header row mono
12 px uppercase `gray-500` under a `border-b gray-300`; three group rows in mono
uppercase; cells are 16 px teal checks with `sr-only` "Full access", inline scoped
labels ("own courses", "logged, with reason") in 12 px `gray-500`, or an em dash
in `gray-300` for "No access". Legend + a one-line footnote about roles being
config, not classes.

### 4. Gradebook (1,068 px)

The best band in the design, and the one most likely to be rebuilt as a picture.
It is a real table: white `rounded-xl border shadow-soft` card, toolbar with the
course name (14/600) over a mono meta line, two `bg-gray-100 rounded-md` chips
("7 learners", "Weighted mean"), then a `min-w-[52rem]` table with a
**`sticky left-0` learner column**.

Columns: Learner | LAB-1 15% | LAB-2 15% | QUIZ 10% | MID 20% | PROJ 20% |
EXAM 20% | Final. Rows (name 14/500 + group in mono 12 `gray-400`), each score in
mono `tabular-nums`, then a Final pill.

Colour rule, read off the markup cell by cell: **≥ 70 → `primary-700` 500**,
50–69 → `gray-700` 400, **< 50 → `accent-600` 500**, missing → em dash in
`gray-300`. The pills are four distinct colourways: Distinction
`bg-primary-100 text-primary-900`, Merit `bg-primary-50 text-primary-800`, Pass
`bg-gray-100 text-gray-700`, At risk `bg-accent-100 text-accent-900`, plus
Incomplete on a **transparent** pill with `ring-1 ring-gray-200` and
`text-gray-400`. That fifth style is easy to miss and it is the one that carries
the band's argument ("a row with anything outstanding stays Incomplete whatever
the mean says").

Fixture rows (copy verbatim; they are the test data):

| learner | group | LAB-1 | LAB-2 | QUIZ | MID | PROJ | EXAM | final |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | --- |
| Ines Halvorsen | A | 88 | 91 | 84 | 79 | 93 | 87 | 87.0 Distinction |
| Tomasz Wierzbicki | A | 74 | 68 | 92 | 71 | 80 | 76 | 75.9 Merit |
| Amara Boateng | B | 95 | 89 | 88 | 90 | 91 | 94 | 91.4 Distinction |
| Callum Reid | B | 61 | 47 | 70 | 55 | 66 | 58 | 59.0 Pass |
| Priya Raghavan | C | 82 | 78 | 81 | 84 | 88 | 80 | 82.5 Merit |
| Dorian Ferreira | C | 42 | 38 | 55 | 44 | 61 | 41 | 46.7 At risk |
| Hana Yoshida | C | 79 | 85 | 90 | — | 87 | 83 | 67.6 Incomplete |

Legend below the card (three `accent-400` bullets): thresholds ("Distinction from
85, merit from 70, pass from 50"), the missing-submission rule, and learner
visibility. Below `lg`, a "Scroll the table sideways →" hint.

### 5. Standards (1,990 px)

`max-w-3xl` head, then a 12-column grid: **4** for each group block (bold 14 px
title + `gray-500` blurb), **8** for its rows. A row is
`border-t gray-200 py-4`: fixed 112 px mono code, then name (14/600) over
description (14 `gray-600`), then a status chip at the right. Four chip styles:
Certified = solid `primary-600` white; Supported = `primary-100` +
`primary-800`; Partial = `accent-100` + `accent-800`; On the roadmap = white with
`ring-1 ring-gray-200`, `gray-500`. Groups: Content and activity (5), Roster and
identity (5), Accessibility and data (4) — **14 rows**. Closing note on a
`border-t` rule.

### 6. Migration (1,476 px)

This band's eyebrow is the **accent** colourway (`bg-accent-100 text-accent-800`)
— the only band that does that, and a useful signal that this is the
"pain" section. Then a 10-column comparison table (Item + three vendors), nine
rows, cells `Automatic` / `Mapped` / **`Rebuild` in `accent-600`**, mono caption
above ("What comes across") and a legend paragraph under it. Then "How a migration
runs": four `rounded-xl border bg-white p-6` cards in one row, each with "Stage N"
in mono `accent-600`, a right-aligned mono duration, a 16/600 title, a blurb that
flexes, and a `border-t` "who does it" line. Footnote: median eleven weeks.

### 7. Pricing (1,110 px)

Centred head (chip is `rounded-full` + `primary-700` here, not `rounded-md`), then
three `rounded-2xl p-8 shadow-soft` cards. Sides are `bg-gray-50`; the middle is
white with `ring-2 ring-primary-600` and a `rounded-full bg-accent-500` "Most
chosen" ribbon straddling the top edge (`-top-4`, centred). Price: 48 px 600, unit
in mono 14 `gray-600`; a two-line note under it. Feature lists mix `primary-600`
checks and `gray-300` crosses — the cross style is what makes the tiers legible,
so do not render excluded features in the same style. CTAs: middle solid
`primary-600`, sides `bg-gray-200 text-gray-900`.

### 8. FAQ (929 px)

Centred head, chip again `rounded-full`. Six rows in a `divide-y gray-200`
column; each row is a full-width `<button>` with an 18 px 600 question and a
32 px `rounded-full bg-gray-100` control holding a plus. Expanding swaps the glyph
to a minus and reveals the answer over 300 ms (`max-height` + opacity), so the
icon is a `rotate-45`-style transform in the source and a swap is fine.
**Independent toggles** — two rows can be open.

### 9. Closing CTA (452 px)

Full-bleed gradient, two blurred orbs (`-right-20 -top-20`, `-bottom-20 -left-20`,
64 px, `bg-white/10 blur-3xl`), dot grid overlay. 36 px 600 white headline,
white/90 subline capped at `max-w-2xl`, then a white filled CTA with a
`primary-800` label + arrow, and a transparent CTA with a `white/40` border and an
icon.

### 10. Footer (511 px)

`#111827` (`gray-900`), `text-gray-300`, `pt-16 lg:pt-24`. 12-column grid: brand 4,
Platform 2, Cooperative 2, Legal 2, Stay Updated 3. Brand: white wordmark
(the source uses `logo-light.svg`), 2-line blurb, three 40 px
`bg-gray-800 rounded-lg` social buttons, an email link in mono, an AGPL line.
Column heads mono 12 uppercase white, links 14 `gray-400` with `hover:text-white`.
Newsletter: `bg-gray-800 border-gray-700 rounded-lg` input + `primary-600`
Subscribe; the source's `data-newsletter-form` has no backend. Bottom bar:
`border-t gray-800`, "© 2026 …" left, Privacy · Terms · Style guide right.

## Interaction inventory (what the source's scripts actually do)

1. typewriter on the hero's second line (3 phrases, ~2 s dwell)
2. count-up on the four counters (IntersectionObserver)
3. fade-in-up reveals on nearly every block, staggered `data-delay` 0→500 ms
4. `data-faq-toggle` accordion (independent rows, animated max-height)
5. `data-video-modal` — opens a YouTube embed dialog
6. sticky header + `#scroll-progress` bar
7. mobile nav drawer below `lg`
8. `data-parallax` on two hero decorations
9. newsletter form (client-side only)
10. cookie banner (Decline / Accept All)

Recreate 1–3, 4, 6, 7, 9, 8 (as a very small translate on scroll, or drop it and
note the delta). Drop 5 as an embed, and 10 entirely.

## Source defects and documented deltas

| observed in the source | decision |
| --- | --- |
| dark-mode variants for every band, no toggle in the header | light theme only; no dark branch (delta #1) |
| full-screen preloader on every navigation | drop (Vite SPA paints immediately) (delta #2) |
| cookie banner with no consent storage | drop (nothing is tracked) (delta #3) |
| nav links to `/about`, `/blog`, `/pricing`, `/contact`, `/privacy`, `/terms`, `/elements` | single page: five labels → anchors, About/Notes dropped (delta #4) |
| video modal points at a YouTube embed (placeholder id) | keep the affordance, no third-party embed (delta #5) |
| self-hosted webfonts, SVG logo, Unsplash photograph, inline SVG social icons | Google Fonts, text wordmark, picsum placeholders, `lucide-react` (delta #6) |
| in-table scores carry colour but no legend for the *cell* rule (only the band rule) | document the ≥70/50–69/<50 rule in the spec so the build is testable |
| the four hero stats are static while the counter band animates | keep both behaviours; they read as deliberate |

## Name check (receipts, 2026-10-25)

```
git grep -il chalkline origin/main          → 0 hits
ls apps/chalkline openspec/specs/template-chalkline docs/templates/chalkline
                                            → none existed before this prep
colorlib.com/wp/template/chalkline/         → 404
preview.colorlib.com/theme/chalkline/       → 404
preview.colorlib.com/theme/bootstrap/chalkline/ → 404
```

`chalkline` was chosen over `cohort` (real word in shipped app copy: `apps/lingo`,
`apps/showcase`) and `gradepath` (reads like a product feature, not a template
name). It keeps the house habit of a single concrete noun (`thermly`, `manorly`,
`paperline`) while pointing at the blackboard rather than the source's stone
marker.

## Loose ends for the implementer

- **No row exists** (`grep -c 'wp/template/cairn/' TEMPLATES.md` = 0). If the
  maintainer's batch decision lands first, paste the row from `tasks.md`; if not,
  ship the app and PR without a row, as `thermly`/`flowcert` did.
- **Do not touch `apps/cairn`** — it recreates ColorLib *Bootstrap Footer 05*.
  Same for `openspec/specs/template-cairn/`.
- Re-measure the four tables after building: they are the only bands whose
  heights drift more than a few percent when the mono label size changes.
