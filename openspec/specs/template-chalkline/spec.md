# Template: Chalkline (Education — Learning-management-system marketing landing)

## Purpose

Chalkline is a single-page marketing site for an open-source learning management
system: a sticky translucent header, a soft mint-gradient hero that ends in a
framed photograph and four hard counters, a four-role band whose second half is a
capability matrix, a gradebook mock that colour-codes every learner's weighted
mean, a procurement-style interoperability list with status chips, a
Moodle/Canvas/Blackboard migration comparison plus a four-stage timeline, three
tiered pricing cards with one ribboned middle card, a six-row FAQ accordion, a
teal-gradient closing call-to-action, and a near-black five-column footer with a
newsletter field.

It is an original React recreation of the ColorLib free **"Cairn"** design, built
under a DIFFERENT name (**Chalkline** — one lowercase word, the dust line a
chalkboard leaves on a sleeve, the register this design sells: a paper-white,
hairline-ruled institutional site in **teal `#188082` over white**, mono eyebrow
chips, and tables that look like a printed prospectus; single word,
kebab-case-safe, no collision with `apps/`, `openspec/specs/template-*`,
`docs/templates/`, any bold name in `TEMPLATES.md`, or any substring in the
repository — `git grep -il chalkline origin/main` = **0 hits**, and the name is
not a ColorLib slug: `colorlib.com/wp/template/chalkline/`,
`preview.colorlib.com/theme/chalkline/` and
`preview.colorlib.com/theme/bootstrap/chalkline/` all return **404**), with the
monorepo stack: Vite (latest) · React 19 · Tailwind CSS 4 · TypeScript (strict).

- **Source slug**: `cairn`
- **ColorLib page**: https://colorlib.com/wp/template/cairn/ — HTTP 200,
  111,585 B, `<title>` = **"Cairn - LMS Website Template 2026 - Colorlib"**
- **Live preview**: https://preview.colorlib.com/theme/cairn/ — HTTP 200,
  **110,581 B** HTML, sha256
  `993bcc126d2815f7a982d4b08dd9be40d4dcd6381f4a65df6bc08a1291c698f7`, served
  `<title>` = **"Home | Cairn"**. Its only stylesheet is
  `_astro/Base.5bEd7vXR.css` (**64,383 B**, sha256
  `f430857b31a0e2f6f0f1dfd536ed3249954690ab352819e7dbba02f290c1167e`) — an
  **Astro + Tailwind 4** build; scripts are
  `ClientRouter...js` (view transitions) and `Base...js` (the page's own
  behaviour). The host is IPv4-only, so every fetch uses `curl -4`.
- **Screenshot**:
  https://colorlib.com/wp/wp-content/uploads/sites/2/cairn-template.jpg
  (HTTP 200, 356,223 B, **2400×1892** decoded; catalog card also serves
  `cairn-template-1024x807.jpg` and `cairn-template.avif`). It is a
  browser-framed top-fold shot: mint-to-white hero, mono badge pill, two-line
  headline whose second line is teal, teal CTA + outlined CTA + a round play
  button, a hairline-separated four-stat row, and a rounded, ringed hero
  photograph. Everything below the fold was measured in the live DOM (see
  *Band table*), not read off the card.
- **Package**: `@free-react-templates/chalkline`
- **Deploy target**: `chalkline.free.componentdock.com`
- **Design category**: Education / LMS — SaaS marketing landing (single page)

### Why this design has no row in `TEMPLATES.md` (catalogue gap, measured 2026-10-24)

`TEMPLATES.md` is **exhausted**: 0 `- [ ]`, 0 `[~]`, 2,857 `[x]`, and every one of
those rows resolves to an existing `apps/<host>` folder **and** an
`openspec/specs/template-<host>/` spec (re-verified for this run: 2,857/2,857
rows carry a `.free.componentdock.com` host, 0 missing app dirs, 0 missing spec
dirs). What the checklist never held is the whole catalogue — `cairn` is one of
the **42 standalone designs** that ColorLib lists at
https://colorlib.com/wp/templates/ but that `TEMPLATES.md` never recorded
(256 unlisted slugs: 42 standalone + 214 snippet variants). The crawl, the
counts and the still-open decision (batch-add rows vs treat the catalogue as
out of scope) are recorded in `docs/catalog-coverage.md`; this prep does **not**
touch that shared file, and does not invent a row.

**Suggested home when the batch decision lands:** a `## Education (…)`-style
section next to the existing LMS/school rows. The exact line to paste:

`- [~] **Cairn** — [colorlib](https://colorlib.com/wp/template/cairn/) · ![preview](https://colorlib.com/wp/wp-content/uploads/sites/2/cairn-template.jpg) · [chalkline](https://chalkline.free.componentdock.com)`

then flip it to `[x]` with the other bookkeeping after the merge. One row only —
`grep -c 'wp/template/cairn/' TEMPLATES.md` = **0** today.

### Why the name is not `cairn` (and not `nova`-style reuse)

`cairn` is already spent twice in this repo on **other** designs: `apps/cairn`
and `openspec/specs/template-cairn/spec.md` both recreate ColorLib **"Bootstrap
Footer 05"** (`preview.colorlib.com/theme/bootstrap-footer-05/`), and the third
prep in that stem is an orphan. So the ColorLib *Cairn* design needs a name that
has nothing to do with the stone-marker word, exactly as `summit→keynoter`,
`vigor→brawn`, `villa→tideline`, `amplify→uptempo` and `resume→paperline`
needed. `chalkline` is that name; it is checked in *Name check* below.

## Reference readings (2026-10-25, `curl -4`)

| artefact | bytes | sha256 |
| --- | ---: | --- |
| `theme/cairn/` page (DOM authority) | 110,581 | `993bcc126d2815f7a982d4b08dd9be40d4dcd6381f4a65df6bc08a1291c698f7` |
| `theme/cairn/_astro/Base.5bEd7vXR.css` (token authority) | 64,383 | `f430857b31a0e2f6f0f1dfd536ed3249954690ab352819e7dbba02f290c1167e` |
| catalog screenshot `cairn-template.jpg` (JPEG, decoded **2400×1892**) | 356,223 | — (top fold only) |
| `colorlib.com/wp/template/cairn/` (catalog entry) | 111,585 | — |
| Playwright full-page render, 1440 × 10,776 px | — | used to read bands 4–10 and to measure the band table |
| Playwright full-page render, 390 × 16,612 px | — | mobile band table |

The preview ships **no framework JS bundle** (Astro islands, ~2 small scripts),
**one** stylesheet, and every image is remote (one Unsplash hero photograph plus
an inline SVG logo). **No asset, CSS file, font file or icon is copied.** The
recreation uses `packages/ui` primitives, `lucide-react` icons and
`https://picsum.photos/seed/chalkline-<n>/<w>/<h>` placeholders.

### Band table — measured live (chromium 1440×900, `getBoundingClientRect`)

| # | band | anchor | y | height |
| ---: | --- | --- | ---: | ---: |
| 0 | header (sticky) | — | 0 | 81 |
| 1 | hero + stats + photo | — | 81 | 1,405 |
| 2 | counter band | — | 1,486 | 238 |
| 3 | roles + capability matrix | `#roles` | 1,724 | 1,516 |
| 4 | gradebook mock | `#gradebook` | 3,240 | 1,068 |
| 5 | interoperability list | `#standards` | 4,308 | 1,990 |
| 6 | migration comparison + stages | `#migration` | 6,298 | 1,476 |
| 7 | pricing | `#pricing` | 7,774 | 1,110 |
| 8 | FAQ accordion | `#faq` | 8,884 | 929 |
| 9 | gradient CTA | `#contact` | 9,813 | 452 |
| 10 | footer | — | 10,265 | 511 |
| | **document** | | | **10,776** |

Mobile (390×844): document **16,612** px; hero 1,216, counters 318, roles 2,190,
gradebook 1,292, standards 3,846, migration 2,317, pricing 2,482, FAQ 1,025, CTA
512, footer 1,349. The four tables (matrix, gradebook, migration, standards rows)
are `overflow-x-auto` with `min-w-[46rem]` / `min-w-[52rem]` inner tables — they
scroll sideways, they do not collapse.

## Design tokens (from `Base.5bEd7vXR.css` + live computed styles)

### Colours

Two brand ramps, both hand-picked (not Tailwind defaults); everything else is
Tailwind's neutral grey ramp.

| token | value | where it is used |
| --- | --- | --- |
| `primary-50` | `#eefbfa` | hero gradient start (`from-primary-50/70`), Merit pill bg |
| `primary-100` | `#d3f4f2` | eyebrow chips, Distinction pill, Supported chip |
| `primary-200` | `#ace9e7` | borders on chips/rings |
| `primary-400` | `#3bbcbc` | gradient end of the hero headline, ping dot |
| `primary-500` | `#20a0a1` | Subscribe button hover base, solid dot |
| `primary-600` | `#188082` | **brand**: big counters, check icons, Primary CTA, gradient start of the CTA band, ring on the middle pricing card |
| `primary-700` | `#186769` | **hero CTA fill**, in-table scores ≥ 70, hover of solid buttons |
| `primary-800` | `#195356` | CTA gradient end, eyebrow chip text, Merit pill text |
| `primary-900` | `#194648` | Distinction pill text |
| `accent-100` | `#ffe6e0` | "At risk" pill bg, Switching chip bg |
| `accent-400` | `#fd8163` | bullet dots, ping dot |
| `accent-500` | `#f45c38` | **"Most chosen" ribbon**, eyebrow text in the roles band |
| `accent-600` | `#e2411a` | scores < 50, stage numbers |
| `accent-800` / `accent-900` | `#9d2d15` / `#822b18` | chip text, "At risk" pill text |
| `gray-900` | `#111827` | body text default, footer ground |
| `gray-700` | `#374151` | secondary button label, pass-band text |
| `gray-600` | `#4b5563` | lead paragraphs |
| `gray-500` | `#6b7280` | small captions, table header labels |
| `gray-400` | `#9ca3af` | footer links, group labels, "Incomplete" pill |
| `gray-300` | `#d1d5db` | outlined button border, matrix header rule |
| `gray-200` | `#e5e7eb` | card borders, band separators, table hairlines |
| `gray-100` | `#f3f4f6` | Pass pill bg, muted button bg |
| `gray-50` | `#f9fafb` | alternating band ground, side pricing cards |
| `white` | `#ffffff` | page ground, cards on tinted bands |

The CTA band is `linear-gradient(to bottom right, #188082, #195356)` plus two
`bg-white/10 blur-3xl` orbs and a `radial-gradient(circle at 1px 1px, white 1px,
transparent 0) / 40px` dot grid at `opacity-10`. The hero headline's second line
is `.text-gradient` = `linear-gradient(to right, #188082, #3bbcbc)` with
`background-clip: text; color: transparent`.

### Typography

| role | family | metrics (desktop / mobile) |
| --- | --- | --- |
| display + body | **Outfit** (`Outfit, system-ui, sans-serif`) | body 16 / 24, 400 |
| `h1` | Outfit | **60 / 60, 600, −1.5 px** / 36 / 40, −0.9 px |
| `h2` | Outfit | **36 / 40, 600, −0.75 px** (`tracking-tight`) / 30 / 36 |
| `h3` (role/card titles) | Outfit | 18 / 28, 600 |
| lead paragraph | Outfit | 18 / 28 (`text-lg`), `gray-600`, `max-w-2xl` |
| eyebrow chip | **JetBrains Mono** | 12 / 16, 500, `uppercase`, `tracking-wider` (0.05em) |
| table labels, scores, prices | JetBrains Mono | 12 / 16 and 14 / 20, `tabular-nums` for every number |
| buttons | Outfit | 16 / 24 or 14 / 20, 500 |

Font delivery: the source **self-hosts** Outfit + JetBrains Mono (no Google
`<link>`); the recreation loads both from Google Fonts via `<link>` in
`index.html` (documented delta — same families, no files copied).

### Buttons, chips, radii, shadows

- **Primary (hero)**: `bg-primary-700` `#186769`, white, `rounded-lg` (8 px),
  `px-6 py-3`, `text-base font-medium`, `shadow-lg shadow-primary-900/20`,
  hover `bg-primary-800 hover:shadow-xl`, arrow glyph after the label.
- **Secondary (hero)**: white ground, `border-gray-300`, `text-gray-700`,
  same box, hover `bg-gray-50`.
- **Play button**: 48 px circle, `bg-primary-700`, white triangle, label
  "Watch the 4-minute tour" at 14 / 20, 500.
- **Solid (pricing middle card)**: `bg-primary-600`, full width, `rounded-lg`,
  `py-3`, `font-medium`, hover `primary-700`.
- **Muted (pricing side cards)**: `bg-gray-200 text-gray-900`, same box, hover
  `bg-gray-300`. (Source uses `bg-gray-200`, not the `gray-100` seen in the
  screenshot's card footers.)
- **Ghost on gradient**: white ground + `text-primary-800` + arrow, and an
  outlined white/40 variant with an icon.
- **Eyebrow chip**: `rounded-md`, `bg-primary-100`, `px-3 py-1`, mono 12 px
  uppercase, `text-primary-800`; two bands (FAQ, and the pricing band's centred
  variant) use `rounded-full` + `text-primary-700` instead. The migration band's
  chip is the **accent** colourway (`bg-accent-100 text-accent-800`).
- **Status chip**: `rounded-md px-2.5 py-1`, mono 11.2 px uppercase,
  `tracking-wider` — Certified = `bg-primary-600 text-white`; Supported =
  `bg-primary-100 text-primary-800`; Partial = `bg-accent-100 text-accent-800`;
  On the roadmap = white with `ring-1 ring-gray-200`, `text-gray-500`.
- **Radii**: buttons/inputs/chips `0.5rem` (8 px) and `0.375rem` (6 px) for
  chips; cards `rounded-xl` (12 px); pricing cards and the hero photo
  `rounded-2xl` (16 px); pills/ribbon `full`.
- **Shadows**: `shadow-soft` = `0 4px 16px -4px rgba(0,0,0,.10)` on pricing
  cards and the gradebook card; `shadow-2xl` + `ring-1 ring-gray-200` on the
  hero photograph; `shadow-lg shadow-primary-900/20` on filled CTAs.

### Section grounds (alternating white / `gray-50`, hairlines between)

| band | ground | border |
| --- | --- | --- |
| header | `bg-white/80` + `backdrop-blur-lg` | `border-b gray-200` |
| hero | `bg-gradient-to-b from-primary-50/70 to-white` | — |
| counters | `bg-gray-50` | `border-y gray-200` |
| roles | `bg-white` | — |
| gradebook | `bg-gray-50` | `border-y gray-200` |
| standards | `bg-white` | — |
| migration | `bg-gray-50` | `border-y gray-200` |
| pricing | `bg-white` | — |
| FAQ | `bg-white` | — |
| CTA | `primary-600 → primary-800` gradient | — |
| footer | `bg-gray-900` (`#111827`), `text-gray-300` | — |

Band padding is uniform: `py-20 lg:py-28` (80 / 112 px); the counter band is the
exception at `py-16 lg:py-20` (64 / 80 px).

## Requirements

### Requirement: Page shell and document head

Chalkline SHALL render **one page** whose bands appear in the source's order —
header, hero, counters, roles, gradebook, standards, migration, pricing, FAQ,
contact CTA, footer — inside a document with `<html lang="en">`, a `<title>` and
a meta description written for **Chalkline**, and it SHALL carry no ColorLib
provenance in any app file.

#### Scenario: Bands render in the source order at 1440

- **GIVEN** Chalkline is rendered at 1440×900
- **WHEN** the page has loaded
- **THEN** the eleven elements SHALL appear in the order header → hero → counters → roles → gradebook → standards → migration → pricing → FAQ → CTA → footer
- **AND** the document height SHALL be within ±10 % of the reference's 10,776 px at a 900 px viewport
- **AND** exactly one `h1` SHALL exist on the page (the hero headline)
- **AND** the header SHALL be `sticky top-0` and participate in flow (81 px tall at 1440)

#### Scenario: No ColorLib provenance in app files

- **GIVEN** the built app's source and bundle
- **WHEN** either is searched (case-insensitive) for `colorlib`, `cairn`, `chalkline`'s source slug or `preview.colorlib.com`
- **THEN** no match SHALL be found anywhere in `apps/chalkline`, except the required `chalkline` self-references (package name, `CNAME`, footer wordmark)
- **AND** the footer SHALL link `https://www.componentdock.com/` reading "Component Dock"

#### Scenario: Shell affordances behave

- **GIVEN** the page is loaded
- **WHEN** the user presses `Tab` from the document start
- **THEN** a "Skip to content" link SHALL appear and move focus to `#main-content`
- **AND** a 2 px `primary-600` scroll-progress bar SHALL track `scrollY / (scrollHeight − innerHeight)` at the very top of the viewport
- **AND** the document SHALL NOT show a blocking preloader after first paint

### Requirement: Sticky header with translucent ground and a phone-width drawer

The header SHALL be a sticky, 81 px (65 px mobile) bar with a `white/80`
translucent ground and `backdrop-blur-lg`, a wordmark at the left, eight nav
labels in the middle, and a single filled "Book a walkthrough" CTA at the right;
below `lg` the labels SHALL collapse into a drawer.

#### Scenario: Header composition at 1440

- **GIVEN** a 1440 px viewport
- **WHEN** the header renders
- **THEN** the wordmark SHALL sit at the left of a `max-w-7xl` container
- **AND** the nav SHALL read Platform, Gradebook, Standards, Migration, Pricing, About, Notes, Contact in that order
- **AND** the CTA SHALL be `bg-primary-600` white text `rounded-lg` 14 px/500 with ≥ 40 px hit height
- **AND** the bar SHALL be `position: sticky` at `top: 0` with `z-50`

#### Scenario: Nav labels land on their bands

- **GIVEN** the single-page build
- **WHEN** Platform, Gradebook, Standards, Migration, Pricing or Contact is activated
- **THEN** `#roles`, `#gradebook`, `#standards`, `#migration`, `#pricing` or `#contact` respectively SHALL be scrolled into view
- **AND** the anchor SHALL account for the sticky header (no heading hidden under the bar)
- **AND** "About" and "Notes" SHALL NOT point at routes that do not exist (documented delta: the source links `/about` and `/blog` inner pages that this single-page build does not ship)

#### Scenario: Drawer at phone widths

- **GIVEN** a 390 px viewport
- **WHEN** the hamburger is activated
- **THEN** a panel SHALL open with the same eight labels stacked, `border-t gray-200`, on a white ground
- **AND** the trigger SHALL expose `aria-expanded` and the panel `aria-hidden` accordingly
- **AND** `Escape` SHALL close it and return focus to the trigger

### Requirement: Hero — mint gradient, two-line gradient headline, framed photograph

The hero SHALL open on `bg-gradient-to-b from-primary-50/70 to-white`, carry a
mono "Open source · AGPL-3.0" badge with a pulsing dot, a two-line `h1` whose
second line is a `#188082 → #3bbcbc` text gradient, a lead paragraph, three
affordances (filled CTA, outlined CTA, round play button), a hairline-separated
row of four stats, and a `rounded-2xl` ringed photograph.

#### Scenario: Hero composition at 1440

- **GIVEN** a 1440 px viewport
- **WHEN** the hero renders
- **THEN** the badge SHALL be a 6 px-radius pill, mono 12 px uppercase, `text-primary-900`, preceded by a 8 px `primary-500` dot with a pinging `primary-400` halo
- **AND** the `h1` SHALL be 60 px / 600 / 60 px line-height / −1.5 px tracking, centred, wrapping after "your"
- **AND** the second line SHALL be painted with the teal text gradient (not a solid colour) and SHALL cycle through three phrases on a typewriter cadence, ending on "institution actually owns", with the full text present in the DOM for assistive tech
- **AND** the paragraph SHALL be 18–20 px, `gray-600`, capped at `max-w-2xl`
- **AND** the filled CTA SHALL use `#186769` (not `primary-600`) with `shadow-lg shadow-primary-900/20`
- **AND** the stats row SHALL be four equal columns above a `border-t gray-200`, numerals 30/36 px 600 `gray-900`, labels 14 px `gray-600`

#### Scenario: The photograph is framed, not full-bleed

- **GIVEN** the hero at 1440
- **WHEN** the photograph renders
- **THEN** it SHALL sit in a `max-w-5xl` `rounded-2xl` frame with `shadow-2xl` and `ring-1 ring-gray-200`
- **AND** it SHALL be a placeholder (`picsum.photos/seed/chalkline-1/1200/600`), never the source image
- **AND** the frame SHALL be centred with `mt-16 lg:mt-24` below the stats row

#### Scenario: Hero stacks at 390

- **GIVEN** a 390 px viewport
- **WHEN** the hero renders
- **THEN** the badge, headline (36 px), paragraph, CTAs and the 2×2 stats grid SHALL stack without horizontal overflow
- **AND** `document.documentElement.scrollWidth` SHALL equal `clientWidth`

### Requirement: Counter band with four counted-up figures

Directly under the hero SHALL sit a hairline-bounded `gray-50` band of four
centred counters in `primary-600`.

#### Scenario: Counters and their labels

- **GIVEN** the counter band is scrolled into view
- **WHEN** the count-up animation completes
- **THEN** the four figures SHALL read **90**, **400**, **31**, **99**
- **AND** the labels SHALL read "Institutions running Chalkline", "Thousand active learners", "Countries", "Percent uptime, rolling year"
- **AND** the numerals SHALL be 36/48 px 700 `primary-600`, labels 14 px 500 `gray-600`
- **AND** the grid SHALL be 2 columns at 390 and 4 from `sm`

#### Scenario: Reduced motion

- **GIVEN** `prefers-reduced-motion: reduce`
- **WHEN** the band enters the viewport
- **THEN** the counters SHALL render their final values immediately with no tween and no ping halo

### Requirement: Roles band with four cards and a capability matrix

The roles band SHALL pair a mono "Roles" chip, an `h2` and a lead with four
role cards, then a full-width capability matrix whose cells are teal checks,
scoped labels or em dashes, with a three-item legend underneath.

#### Scenario: Four role cards

- **GIVEN** a 1440 px viewport
- **WHEN** the roles band renders
- **THEN** four cards SHALL sit in one row (`rounded-xl`, `border-gray-200`, `bg-gray-50`, `p-5`)
- **AND** each card SHALL carry a mono uppercase meta label, a 18 px 600 title and a 14 px `gray-600` blurb
- **AND** the cards SHALL read Learner ("Default"), Instructor ("Assigned per course"), Programme lead ("Assigned per programme"), Administrator ("Institution-wide")
- **AND** the meta labels SHALL use the accent colour (`#e2411a`) — the only warm accent in this band

#### Scenario: Capability matrix

- **GIVEN** the matrix renders
- **WHEN** its header row is read
- **THEN** the columns SHALL be Capability | Learner | Instructor | Programme lead | Administrator, mono 12 px uppercase `gray-500`, on a `border-b gray-300` rule
- **AND** rows SHALL be grouped under "Courses and content", "Assessment", "People and data" (mono 12 px uppercase)
- **AND** a full grant SHALL be a 16 px `primary-600` check mark with an `sr-only` "Full access"
- **AND** a scoped grant SHALL be the inline label ("own courses", "logged, with reason") in 12 px `gray-500`, not a check
- **AND** a denial SHALL be "No access" (`sr-only`) rendered as an em dash in `gray-300`
- **AND** the wrapper SHALL be `overflow-x-auto` with a `min-w-[46rem]` table and a `<caption class="sr-only">`

#### Scenario: Matrix legend and footnote

- **GIVEN** the matrix is visible
- **WHEN** the legend is read
- **THEN** it SHALL define all three cell states (check / scoped label / em dash)
- **AND** a one-line footnote SHALL state that roles are config definitions, not hard-coded classes

### Requirement: Gradebook mock — a real table with banded outcomes

The gradebook band SHALL render a white `rounded-xl border shadow-soft` card
whose toolbar names the course and cohort and whose body is a seven-row table of
six weighted assessments plus a final band.

#### Scenario: Toolbar and columns

- **GIVEN** the gradebook card renders
- **WHEN** its toolbar is read
- **THEN** it SHALL show "BSc Environmental Science · Hydrology II" (14 px 600) over "Cohort 2026-A · 6 assessments · weighted mean" (mono 12 px `gray-500`)
- **AND** two `rounded-md bg-gray-100` chips SHALL read "7 learners" and "Weighted mean"
- **AND** the columns SHALL be Learner | LAB-1 (15%) | LAB-2 (15%) | QUIZ (10%) | MID (20%) | PROJ (20%) | EXAM (20%) | Final, each weight on a second line in mono 12 px
- **AND** the learner column SHALL be `sticky left-0` with a white ground so it survives horizontal scroll

#### Scenario: Cell colour encodes trouble

- **GIVEN** a score cell
- **WHEN** its value is rendered
- **THEN** a value ≥ 70 SHALL be `primary-700` 500
- **AND** a value 50–69 SHALL be `gray-700` 400
- **AND** a value < 50 SHALL be `accent-600` 500
- **AND** a missing submission SHALL be an em dash in `gray-300`, never a blank cell
- **AND** every numeric cell SHALL use mono `tabular-nums`

#### Scenario: Final column bands match the documented scale

- **GIVEN** the seven learners (87.0, 75.9, 91.4, 59.0, 82.5, 46.7, 67.6)
- **WHEN** the Final pills render
- **THEN** Distinction (≥ 85) SHALL be `bg-primary-100 text-primary-900`
- **AND** Merit (≥ 70) SHALL be `bg-primary-50 text-primary-800`
- **AND** Pass (≥ 50) SHALL be `bg-gray-100 text-gray-700`
- **AND** At risk (< 50) SHALL be `bg-accent-100 text-accent-900`
- **AND** a row with an outstanding component SHALL read "Incomplete" on a transparent pill with `ring-1 ring-gray-200` and `text-gray-400`, whatever its mean
- **AND** the card SHALL carry a three-item legend below it (thresholds, missing-submission rule, learner visibility) with `accent-400` bullets
- **AND** below `lg` an "Scroll the table sideways" hint SHALL appear

### Requirement: Interoperability list with three groups and status chips

The standards band SHALL present fourteen standards in three labelled groups as a
two-column layout: group name + blurb at the left, hairline-separated rows at the
right, each row ending in a status chip.

#### Scenario: Group structure

- **GIVEN** the standards band renders at 1440
- **WHEN** the groups are read
- **THEN** they SHALL be "Content and activity", "Roster and identity" and "Accessibility and data", each with a 14 px `gray-500` blurb
- **AND** the group column SHALL occupy 4 of 12 grid columns and the rows 8
- **AND** each row SHALL lead with a fixed 112 px mono standard code, then a 14 px 600 name over a 14 px `gray-600` description

#### Scenario: Fourteen rows and their chips

- **GIVEN** the rows render
- **WHEN** counted
- **THEN** there SHALL be 14: SCORM 1.2, SCORM 2004, xAPI, cmi5, QTI 3.0, LTI 1.3, OneRoster 1.2, SAML 2.0, OIDC, SCIM 2.0, WCAG 2.2, EN 301 549, GDPR, VPAT 2.5
- **AND** chips SHALL read Certified (5), Supported (7), Partial (1: cmi5), On the roadmap (1: VPAT 2.5) with the colourways in *Design tokens*
- **AND** no row SHALL claim a status the copy contradicts

#### Scenario: Closing note

- **GIVEN** the last group ends
- **WHEN** the footnote renders
- **THEN** it SHALL sit on a `border-t gray-200` rule in 14 px `gray-500`

### Requirement: Migration band — comparison table plus four-stage timeline

The migration band SHALL pair a nine-row Item × Moodle/Canvas/Blackboard table
with a four-stage horizontal timeline.

#### Scenario: Comparison table

- **GIVEN** the table renders
- **WHEN** its cells are read
- **THEN** the columns SHALL be Item | Moodle | Canvas | Blackboard
- **AND** nine rows SHALL cover course structure, assignments, question banks, historical grades, rubrics, discussion history, proprietary page-builder content and third-party tool links
- **AND** cells SHALL hold one of "Automatic" / "Mapped" / "Rebuild", with "Rebuild" in `accent-600`
- **AND** a legend paragraph SHALL define the three words

#### Scenario: Four stages

- **GIVEN** the timeline renders at 1440
- **WHEN** the stages are counted
- **THEN** there SHALL be four `rounded-xl border bg-white p-6` cards in one row
- **AND** each SHALL show "Stage N" in mono `accent-600`, a right-aligned duration in mono 12 px `gray-400`, a 16 px 600 title, a blurb, and a `border-t` "who does it" line in mono 12 px
- **AND** the stages SHALL read Sample import (1 week), Roster and sign-on (2–3 weeks), Bulk import and sign-off (2–4 weeks), Cutover (1 weekend)
- **AND** a median-time footnote SHALL close the band
- **AND** the sequence SHALL be an `<ol>` so assistive tech reads the order

### Requirement: Pricing — three tiers, one ribboned middle card

The pricing band SHALL centre on a mono chip, `h2` and lead, then three
`rounded-2xl p-8` cards whose middle card is white with a 2 px `primary-600` ring
and an accent "Most chosen" ribbon.

#### Scenario: Three cards and their prices

- **GIVEN** the pricing band renders at 1440
- **WHEN** the cards are read left to right
- **THEN** they SHALL be Self-hosted (Free, "forever"), Operated (€3.40, "per learner / year", "Most chosen"), Consortium ("Talk to us")
- **AND** side cards SHALL be `bg-gray-50` without a ring and the middle card `bg-white` with `ring-2 ring-primary-600`
- **AND** the price SHALL be 48 px 600 with its unit in mono 14 px `gray-600`
- **AND** the ribbon SHALL be a `rounded-full` accent-500 pill straddling the card's top edge

#### Scenario: Feature lists and CTAs

- **GIVEN** a card's list
- **WHEN** it renders
- **THEN** included features SHALL carry a `primary-600` check and excluded ones a `gray-300` cross
- **AND** the middle card's CTA SHALL be solid `primary-600` and the side cards' CTAs `bg-gray-200 text-gray-900`
- **AND** no card SHALL have a different height from its siblings (lists flex to equalise)

### Requirement: FAQ accordion with six rows

The FAQ band SHALL be a centred column of six hairline-separated rows, each a
question button with a circular +/− control and a collapsible answer.

#### Scenario: Collapsed and expanded states

- **GIVEN** the accordion renders
- **WHEN** no row is open
- **THEN** six question rows SHALL show, each with a 32 px `rounded-full bg-gray-100` control holding a plus glyph
- **AND** activating a row SHALL expand its answer (300 ms, `max-height` + opacity) and swap the glyph for a minus
- **AND** `aria-expanded` SHALL track the state and the answer SHALL be reachable by keyboard
- **AND** any number of rows MAY be open at once (source behaviour: independent toggles, not a single-open accordion)

#### Scenario: Question set

- **GIVEN** the six rows
- **WHEN** read
- **THEN** the questions SHALL cover leaving/export, "same code as the paid version", per-learner counting, piloting alongside an incumbent, ownership/acquisition, and "the worst thing about it"
- **AND** answers SHALL be paraphrased at the same length (2–4 sentences), keeping the plain, candid register

### Requirement: Gradient closing CTA

The band before the footer SHALL be a full-bleed
`from-primary-600 to-primary-800` gradient with two blurred white orbs and a dot
grid, white centred type, a white filled CTA and an outlined CTA.

#### Scenario: CTA composition

- **GIVEN** the band renders at 1440
- **WHEN** it is measured
- **THEN** it SHALL be 452 px tall (`py-20 lg:py-28`) with a 36 px 600 white `h2`
- **AND** the paragraph SHALL be white at 90 % opacity, capped at `max-w-2xl`
- **AND** the filled CTA SHALL be white with `text-primary-800` and an arrow glyph; the outlined one SHALL be transparent with a `white/40` border and an icon
- **AND** both SHALL measure ≥ 44 px tall

### Requirement: Footer with five columns, newsletter and a Component Dock credit

The footer SHALL be a `#111827` ground with `gray-300` text: brand block, three
link columns, a newsletter column, a hairline bottom bar and the Component Dock
credit.

#### Scenario: Column layout

- **GIVEN** the footer renders at 1440
- **WHEN** the grid is read
- **THEN** it SHALL be 12 columns: brand 4, Platform 2, Cooperative 2, Legal 2, Stay Updated 3
- **AND** the brand block SHALL carry the wordmark, a 2-line blurb, three 40 px social buttons (`bg-gray-800 rounded-lg`), an email address and a licence line
- **AND** the column headings SHALL be mono 12 px uppercase white

#### Scenario: Newsletter field

- **GIVEN** the Stay Updated column
- **WHEN** an email is submitted
- **THEN** the input SHALL be `bg-gray-800 border-gray-700 rounded-lg px-4 py-2.5` with a `gray-500` placeholder and a `primary-500` focus ring
- **AND** the submit SHALL be a `primary-600` "Subscribe" button with a success message on submit and no network call

#### Scenario: Bottom bar

- **GIVEN** the footer ends
- **WHEN** the bottom bar renders
- **THEN** it SHALL show "© 2026 Chalkline" at the left and Privacy · Terms · Style guide at the right on a `border-t gray-800` rule
- **AND** it SHALL include a "Component Dock" link to `https://www.componentdock.com/`

### Requirement: Responsiveness, motion and accessibility

The build SHALL be usable from 390 px to 1440 px, animate only what the source
animates, and honour reduced-motion.

#### Scenario: No horizontal overflow

- **GIVEN** viewports of 1440, 991, 767 and 390 px
- **WHEN** each is rendered
- **THEN** `scrollWidth === clientWidth` at every width outside the documented `overflow-x-auto` table wrappers
- **AND** the pricing cards SHALL stack 1-up below `lg` and the stage cards 1-up below `md`

#### Scenario: Motion budget

- **GIVEN** `prefers-reduced-motion: no-preference`
- **WHEN** bands enter the viewport
- **THEN** reveals SHALL be a 12 px fade-in-up over ~500 ms with the source's 100 ms stagger
- **AND** the typewriter SHALL cycle three phrases, pausing ~2 s on each
- **AND** with `reduce`, the typewriter SHALL render its final phrase statically, reveals SHALL be instant and no element SHALL loop

#### Scenario: Accessible names and contrast

- **GIVEN** the rendered page
- **WHEN** it is audited
- **THEN** every icon-only control SHALL have an accessible name
- **AND** every table SHALL carry a `caption` (visible or `sr-only`) and `scope` on its header cells
- **AND** white-on-`primary-600` text SHALL meet 4.5:1 at body sizes (it does: `#188082` on white = 4.72:1) and `gray-600` on `white` SHALL meet 4.5:1 (7.56:1)

## Verification checklist

- [ ] `apps/chalkline` exists, package `@free-react-templates/chalkline`,
      `homepage` and `public/CNAME` = `chalkline.free.componentdock.com`
- [ ] Eleven bands in source order; exactly one `h1`
- [ ] Document height within ±10 % of 10,776 px at 1440×900
- [ ] Header sticky at 81 px, `white/80` + `backdrop-blur-lg`, eight labels +
      filled `primary-600` CTA, drawer at 390 px with focus return
- [ ] Hero gradient `primary-50/70 → white`, mono badge with ping dot, 60 px
      two-line `h1` with the teal text gradient and three-phrase typewriter
- [ ] Hero CTA `#186769` + `shadow-lg shadow-primary-900/20`; outlined secondary;
      48 px play button
- [ ] Four hero stats (90 / 400 / 12 / 99) above a hairline; framed hero photo
      `max-w-5xl rounded-2xl shadow-2xl ring-1`
- [ ] Counter band 90 / 400 / 31 / 99 in `primary-600`, 2-up → 4-up
- [ ] Four role cards (`rounded-xl border bg-gray-50 p-5`, accent meta labels)
- [ ] Capability matrix: 3 groups, teal checks, scoped labels, em dashes,
      `sr-only` caption and "Full access"/"No access" text, sideways scroll
- [ ] Gradebook: toolbar + 2 chips, 7 columns + Final, sticky learner column,
      colour rule ≥70 / 50–69 / <50, five band pills + Incomplete, 3-item legend
- [ ] Standards: 14 rows in 3 groups, chips Certified 5 / Supported 7 / Partial 1
      / On the roadmap 1, colourways per tokens
- [ ] Migration: 9-row comparison with Rebuild in `accent-600`, 4 stage cards in
      an `<ol>`, median footnote
- [ ] Pricing: 3 cards, middle ringed + accent ribbon, checks/crosses, equal
      heights, muted vs solid CTAs
- [ ] FAQ: 6 rows, independent toggles, +/− control, `aria-expanded`, keyboard
- [ ] Gradient CTA: orbs + dot grid, white type, two CTAs ≥ 44 px
- [ ] Footer: 5 columns (4/2/2/2/3), social buttons, newsletter with local
      success state, bottom bar, Component Dock link
- [ ] `scrollWidth === clientWidth` at 1440 / 991 / 767 / 390
- [ ] `prefers-reduced-motion` disables counters, typewriter and reveals
- [ ] No `colorlib` / `cairn` string in `apps/chalkline` (source or bundle)
- [ ] `openspec validate template-chalkline --type spec` passes
- [ ] `scripts/verify-app.sh chalkline` green (typecheck, lint, 100 % coverage,
      build)
- [ ] If a `TEMPLATES.md` row was added before the PR: flipped to `[x]` with the
      `chalkline.free.componentdock.com` link **after** merge (implementer's job,
      and only one row for `wp/template/cairn/`)
