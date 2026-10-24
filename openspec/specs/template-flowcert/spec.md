# Template: Flowcert (Home services — trade compliance / backflow testing landing)

## Purpose

A single-trade local-service page whose whole argument is *"this is short, it is priced, and the
paperwork is our problem"*. A licence strip and a blurred sticky header sit over a split hero that
pairs a two-tone headline with a three-field quick-book card, then four numbered explainer steps, a
**published price list** rendered as one hairline-divided block of six cells, a two-column "why this
exists" band with a diagram figure, a second hairline grid of six services, a twelve-town coverage
list, a three-review carousel, a five-row exclusive FAQ accordion, and a full-bleed blue closing
call-out over a near-black four-block footer with a newsletter field.

Recreation of the ColorLib "Backstop" design (https://colorlib.com/wp/template/backstop/, live
preview https://preview.colorlib.com/theme/backstop/) as a React 19 + Vite + Tailwind CSS 4 +
TypeScript single-page application.

* **Source slug:** `backstop`
* **ColorLib page:** https://colorlib.com/wp/template/backstop/ — HTTP 200, 111,533 B,
  `<title>` **"Backstop - Backflow Testing Website Template 2026 - Colorlib"**
* **Live preview:** https://preview.colorlib.com/theme/backstop/ — HTTP 200, 74,502 B, page
  `<title>` **"Backflow testing in Omaha, fixed price and filed the same day | Backstop Backflow"**
  (read 2026-10-24 with `curl -4`; this host resolves an IPv6 address that is banned, so every fetch
  needs `-4`)
* **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/backstop-template.jpg
  (served as **JPEG**, 333,718 B, 2400×1892 — a macOS-window-framed capture of the licence strip,
  the header, the hero and the first three-and-a-half explainer steps; no band below that is shown)
* **New name:** `flowcert` (apps/flowcert, `@free-react-templates/flowcert`) — one lowercase word
  from *flow* + *certification*, which is the trade's own vocabulary; differs from the source slug
  and has **zero** substring hits repo-wide (`git grep -i flowcert origin/main` → empty), no
  `apps/flowcert`, no `openspec/specs/template-flowcert/`, no `docs/templates/flowcert/`
* **Deploy target:** https://flowcert.free.componentdock.com (`apps/flowcert/public/CNAME`,
  `homepage` in `apps/flowcert/package.json`)
* **Category:** **no `TEMPLATES.md` row exists yet** — see *Why this design has no row* below.
  Suggested home: `## Business (365)` (line 879), the section that already holds the trades designs
  (`hvacompany` → `frostguard`, `hvac` → `clutch`/`aeroworks`).

### Why this design has no row (catalogue gap, measured 2026-10-24)

`TEMPLATES.md` is exhausted — 0 `- [ ]`, 2,857 `[x]`, every row resolving to an app and a spec — but
the **catalogue is not complete**: all 40 pages of https://colorlib.com/wp/templates/ were crawled
and compared with the 1,631 slugs the checklist cites, and **256 designs are on the listing that the
checklist never recorded** (42 standalone + 214 snippet variants). The census, its commands, the
open decision and both buckets are recorded in `docs/catalog-coverage.md`.

`backstop` is the **second** of the 42 standalone designs to be prepped (the first was `airwise` →
`thermly`, whose spec established the hand-off pattern): the standalone bucket is walked in listing
order, so the pump of prepped specs continues past the end of `TEMPLATES.md`. No spec on main names
`template/backstop` (`git grep -l 'wp/template/backstop/' origin/main -- openspec/specs` → empty), so
this prep is not a duplicate and nothing was shipped under another name.

**Implementer note:** because there is no row yet, add one **before** the PR title claims a row —
paste this line under `## Business (365)`, then flip it to `[x]` with the same bookkeeping commit that
writes the surge URL:

```
- [~] **Backstop** — [colorlib](https://colorlib.com/wp/template/backstop/) · ![preview](https://colorlib.com/wp/wp-content/uploads/sites/2/backstop-template.jpg) · [flowcert](https://flowcert.free.componentdock.com)
```

Do not invent a second row for the same slug.

## Reference readings (2026-10-24, `curl -4`)

| artefact | bytes | sha256 |
| --- | ---: | --- |
| `theme/backstop/` page (DOM authority) | 74,502 | `1ae59b2d67e67c37e070de7d56670ed9e55dc6df8775d4a811896ba5b96cc7aa` |
| `theme/backstop/_astro/Base.DGmaIQ3L.css` (token authority) | 54,746 | `669d475db003541d6c08b9ba020bac226120a5b14ed12ce9b1593da7499a7453` |
| `theme/backstop/_astro/Base.astro_astro_type_script_index_0_lang.BLoalVWc.js` | 16,233 | `e26cc055dec23e63fafecd3386a2edaa4132534a9c945f6210adec2fd90a92f2` |
| `theme/backstop/_astro/ClientRouter.astro…CYDbzu1r.js` | 16,357 | `69eb3ac5c16a8d9a…` (view-transition router; no design content) |
| inline `<style>` in the page (12,360 B — the **only** font source) | — | Inter 400/500/600/700/800 + JetBrains Mono 500/700, `@font-face` pointing at the preview's own `/cf-fonts/v/inter/5.2.8/…` and `/cf-fonts/v/jetbrains-mono/5.2.8/…` (6 unicode subsets each, `font-display: swap`) |
| catalog screenshot `backstop-template.jpg` | 333,718 | — (real JPEG, 2400×1892 — see §Screenshot analysis) |
| `colorlib.com/wp/template/backstop/` (catalog entry) | 111,533 | — |
| `assets/img/logo.svg` / `logo-light.svg` | 788 / 788 | `c491b07c319c0858…` / same geometry, light fills |
| `assets/img/valve-panel.svg` (the "photograph" figure) | 1,708 | `2e6615fc8adde1dd…` |
| `downloads/free/backstop.zip` | — | **HTTP 404** — there is no archive twin |

The preview is an **Astro** build with Tailwind 4 output: one CSS file, no framework bundle, and one
deferred kit script that wires `astro:page-load`. It ships `dark:` variants for every band
(`gray-950`/`gray-900` grounds, `primary-300/400` accents) — the recreation is **light-only**, a
recorded deviation. The only images are the two logo SVGs and one vector diagram; **none** of those
files, and no CSS, font file or icon path, is copied.

**Fonts load in the source** (verified — the `@font-face` rules live in an inline `<style>` block, not
in the CSS file, so grepping the sheet alone looks like a missing face). Inter is the whole UI;
JetBrains Mono appears **only inside the wordmark lockup** (the 8 px `BACKFLOW` sub-label in
`logo.svg`) — no home-page element carries a `font-mono` class. The recreation loads Inter
(400/500/600/700/800) and JetBrains Mono (500/700) from Google Fonts via `<link>` in `index.html`;
both `css2` URLs return **HTTP 200** with a browser UA (probed 2026-10-24).

## Design tokens (measured from `_astro/Base.DGmaIQ3L.css`, 54,746 B)

### Brand ramp — `primary` (indigo-blue)

| token | hex | where the reference uses it |
| --- | --- | --- |
| `primary-50` | `#eef4ff` | hover wash on the white closing CTA; gradient start |
| `primary-100` | `#dce7fd` | badge pills (`Reviews`, `Questions`), reviewer avatar discs |
| `primary-200` | `#bfd3fc` | dark-mode borders |
| `primary-300` | `#94b5f9` | dark-mode text accent, dark prose link hover |
| `primary-400` | `#628ef3` | **review stars**, dark-mode accents |
| `primary-500` | `#3f6be8` | **focus ring** (`:focus-visible` outline), input focus border, `bg-primary-500` |
| `primary-600` | `#2d4fd0` | **brand** — `.btn-primary`, quick-book submit, step ordinals, prose links, ring/shadow `/25` |
| `primary-700` | `#263fa8` | **closing call-out ground** (`bg-primary-700`), eyebrow text, price lines, `.btn-primary:hover` |
| `primary-800` | `#243785` | dark-mode tint |
| `primary-900` | `#22326a` | dark-mode tint |

The headline's second clause is `text-primary-600`; every eyebrow is `text-primary-700`; every price
and micro-link is `text-primary-700`. No gradient is used on any ground — this design is flat.

### Ink ramp (cool slate) and the default grays

| token | hex | where |
| --- | --- | --- |
| `ink-50` | `#f6f7f9` | **hero band and why-us band ground** |
| `ink-100` | `#eceef2` | header bottom border, step hairlines, hairline-grid dividers, town-list dividers |
| `ink-200` | `#d8dce4` | input borders, header city pill border |
| `ink-300` | `#b0b7c6` | input placeholders |
| `ink-400` | `#818b9f` | fine print (form footing note) |
| `ink-500` | `#606a7e` | body copy, section ledes |
| `ink-600` | `#475061` | nav links, illustration stroke |
| `ink-700` | `#373e4b` | form labels, benefit ticks, town names |
| `ink-800` | `#242932` | **headline colour**, `bg-ink-800` licence strip, logo plate |
| `ink-900` | `#161a20` | deepest ground (`bg-ink-900`), illustration backdrop |

The lower bands switch to the stock Tailwind grays rather than the ink ramp: `#f9fafb` (`gray-50`,
testimonials ground), `#f3f4f6` (`gray-100`, FAQ icon discs), `#e5e7eb` (`gray-200`, FAQ dividers),
`#d1d5db` (`gray-300`, secondary/cookie button borders), `#9ca3af` (`gray-400`), `#6b7280`
(`gray-500`), `#4b5563` (`gray-600`, body on gray bands), `#374151` (`gray-700`), `#1f2937`
(`gray-800`, footer social tiles, newsletter field), `#111827` (`gray-900`, **footer ground**),
`#030712` (`gray-950`, dark ground), plus `#ffffff`.

One non-palette accent: the licence strip's single star is `amber-400`, kept in the sheet as
`oklch(82.8% .189 84.429)` ≈ `#ffb900` (computed). It is the only warm hue on the page.

### Typography

* **Family:** `Inter, system-ui, sans-serif` for all UI text (weights 400/500/600/700/800);
  `"JetBrains Mono", Consolas, monospace` only in the logo lockup (500/700).
* **h1:** `text-4xl sm:text-5xl lg:text-6xl` (2.25 → 3 → 3.75 rem), `font-bold`, `leading-[1.1]`,
  `tracking-tight` (−0.025em), `ink-800`, with the second sentence in `primary-600`.
* **h2 (band heads):** `text-3xl sm:text-4xl` (1.875 → 2.25 rem), `font-bold`, `tracking-tight`;
  `ink-800` on white/ink-50 bands, `gray-900` on the gray-50 testimonials band, `white` in the CTA.
* **h3 (card / step titles):** `text-lg` (1.125 rem), `font-bold`, `ink-800`.
* **Card h2 (quick-book card):** `text-xl lg:text-2xl`, `font-bold`.
* **Body:** ledes `text-lg` in `ink-500` / `gray-600`; card copy `text-base` or default (`ink-500`);
  fine print `text-xs` in `ink-400`.
* **Eyebrow:** `text-sm font-bold uppercase tracking-wide text-primary-700` — a bare line, **not** a
  pill (unlike the testimonial/FAQ badges, which are `primary-100` pills).
* **Ordinals:** `text-sm font-bold tabular-nums text-primary-600`, followed by a 1 px `ink-100` rule
  that fills the remaining row (`h-px flex-1`).
* **Licence strip:** `text-xs`, `ink-100` on `ink-800`, labels at `opacity-70`, values
  `font-semibold`.

### Buttons, forms, cards

| element | measured |
| --- | --- |
| `.btn-primary` | `inline-flex`, `border-radius: 0.5rem` (`--radius-lg`), padding `0.625rem 1.25rem`, `font-size: 0.875rem`, weight 500, white text, `background: #2d4fd0`, shadow `0 10px 15px -3px #2d4fd040, 0 4px 6px -4px #2d4fd040`; hover `#263fa8` + deeper shadow; focus ring 2 px `#3f6be8` |
| quick-book submit | full width, `rounded-lg`, `bg-primary-600`, `px-6 py-3.5`, `text-base font-bold`, hover `primary-700`, focus ring 2 px `primary-500` + offset |
| `.btn-secondary` | white ground, `border: 1px solid #d1d5db`, text `#374151`, same padding/radius; hover `#f9fafb` |
| closing CTA pair | white solid (`#fff` on `primary-700`, hover `primary-50`) + **2 px** `border-white/40` outline tel button, both `px-8 py-4 text-base font-bold`, `rounded-lg` |
| header city pill | `rounded-full`, 1 px `ink-200`, `text-sm`, `px-3 py-1.5` |
| inputs / select | `rounded-lg`, 1 px `ink-200`, `px-4 py-3`, `text-base`, `ink-800`, placeholder `ink-300`; focus `border-primary-500` + `ring-2 primary-500/20` |
| quick-book card | `rounded-2xl`, 1 px `ink-100`, `bg-white`, `p-6 lg:p-8`, `shadow-md` |
| hairline grids (pricing, services) | one `rounded-2xl` block with a 1 px `ink-100` border and `bg-ink-100`, `gap: 1px` so the ground shows as the divider; each cell is `bg-white p-6 lg:p-8` |
| testimonial card | `rounded-2xl bg-white p-8`, shadow `0 4px 16px -4px #0000001a` |
| FAQ control | 32 px `rounded-full bg-gray-100` circle holding a `+` glyph that rotates 45° when open |
| cookie strip | fixed bottom, `bg-white`, top border `gray-200`, `py-4 sm:py-6`, `role="dialog"` |

Radii: `--radius-lg .5rem`, `--radius-xl .75rem`, `--radius-2xl 1rem`, pills `9999px`.
Shadows: `0 4px 16px -4px #0000001a` (card), `0 10px 15px -3px #0000001a` (button), `0 1px 2px`
+ `shadow-lg` on the scrolled header and the back-to-top button.

### Rhythm

* `.section` = `padding-block: 5rem`, `lg: 7rem` (`py-20 lg:py-28`); the hero is not a `.section` —
  its container carries `py-14 lg:py-20` (3.5 → 5 rem) and the copy column `lg:pt-6`; the closing CTA
  is `py-20 lg:py-28`; the footer `pt-16 lg:pt-24` with an `mt-16` legal bar.
* Container: `mx-auto px-4 lg:px-8`, content `max-w-7xl` for grids, `max-w-2xl`/`max-w-3xl` for
  heads and the FAQ column, `max-w-xl` for ledes.
* Band grounds alternate: `ink-50` hero → white → white → `ink-50` → white → white → `gray-50` →
  white → `primary-700` → `gray-900` footer.
* Header: `sticky top-0 z-50`, `bg-white/90 backdrop-blur-lg`, 1 px `ink-100` bottom border, 64 px
  tall (`lg: 80 px`), and the licence strip above it is `h-9` (36 px) `bg-ink-800`.
* Grid: hero `lg:grid-cols-12` (copy 7 / card 5), process `sm:grid-cols-3` (step 04 wraps to row 2),
  pricing & services `sm:grid-cols-2 lg:grid-cols-3`, why-us `lg:grid-cols-2`, areas `lg:grid-cols-12`
  (5 / 7) with the town list `grid-cols-2 sm:grid-cols-3`, footer `lg:grid-cols-12` (4 / 5 / 3).

## Reference document order (header, nine bands, footer)

| # | id | ground | content |
| --- | --- | --- | --- |
| 0 | licence strip (`data-licence-bar`) | `ink-800` `#242932` | `h-9`, `text-xs`: `Certified tester` + `NE #00000` · `Results filed for you` (hidden `<sm`) · `Serving` + `Douglas & Sarpy counties`; right: amber star, `4.9`, `380+ reviews on Google (sample)` |
| — | `header` | white/90, blurred | logo lockup (plate + `Backstop` + mono `BACKFLOW`); nav `Got a letter?`, `Pricing`, `Services`, `Service areas`, `About`, `Contact`; city pill `Omaha, NE` → `#service-areas`; `tel:` pill `(555) 150-1500`; solid `Book a test`; mobile disclosure below `xl` |
| 1 | hero (`main > section`, holds `#quote`) | `ink-50` | 12-col split. Left: eyebrow `Omaha · Certified backflow tester`; h1 `You got the letter.` + `This takes twenty minutes.` (blue); lede; rating `4.9` + `380+ reviews on Google · sample data`; four ticks — *Fixed price, published, no survey first* / *Results filed with the authority for you* / *Reminder before next year's deadline* / *Repairs quoted at the test, not on a second visit*. Right: quick-book card |
| 2 | quick-book card (`#quote`) | white card | h2 `Book a test`; lede `Three fields. Most tests are booked within three working days.`; `Your name`, `Phone`, `What is it for?` (select: placeholder `Choose the closest match` + 6 options); full-width `Book the test`; fine print `Fixed price. If the device fails you pay the test fee and nothing else until you approve a repair.` |
| 3 | `process` | white | eyebrow `The letter`; h2 `What it actually means, in plain terms`; lede; `<ol>` of four steps, each `01`–`04` + hairline + h3 + body + a blue micro-link (`You may not know where`, `Annual, by a certified tester`, `We file it`, `Usually a small repair`) |
| 4 | `pricing` | white | eyebrow `Pricing`; h2 `The price is on the website, which should not be unusual`; lede; **six** hairline cells — `Residential irrigation device $85`, `Each additional device $45`, `Commercial device, up to 2 inch $135`, `Commercial device, over 2 inch From $195`, `Repair kit and retest From $165`, `Device replacement Quoted at the test`; footnote `Sample pricing for demonstration…` |
| 5 | `why-us` | `ink-50` | two columns: left `figure` — `valve-panel.svg` (`rounded-2xl`, 4:3) + caption `Replace with a photograph of your own tester and gauges before launch.`; right eyebrow `Why anyone bothers`, h2 `Three reasons this exists, and one of them is real`, lede, then a `<dl>` of **four** items, each `border-l-2 border-primary-600 pl-5` |
| 6 | `services` | white | eyebrow `What we do`; h2 `Testing, repairs and the paperwork`; lede; six hairline cells — `Annual certification testing From $85`, `Repairs and rebuild kits From $165`, `Device replacement Quoted at the test`, `New installation certification From $145`, `Property portfolios Quoted per portfolio`, `Annual reminders Free`; footnote `Sample content for demonstration…` |
| 7 | `areas` | white | 12-col: left (5) h2 `Where we work` + copy about fitting twenty-minute jobs into a day; right (7) **twelve** towns in a bordered 2/3-column list — `Omaha`, `Bellevue`, `Papillion`, `La Vista`, `Ralston`, `Elkhorn`, `Gretna`, `Bennington`, `Springfield`, `Waterloo`, `Valley`, `Boys Town`; footnote `Replace this list with your own towns…` |
| 8 | `testimonials` | `gray-50` | pill badge `Reviews`; h2 `What people say afterwards`; footnote `Sample reviews for demonstration…`; **carousel** of three `rounded-2xl` cards — five `primary-400` stars, quoted review, initial avatar (`primary-100` circle) + name + town (`Reggie N. · Papillion`, `Annika L. · Elkhorn`, `Hugo D. · Property manager, Omaha`); prev/next round buttons (≥ `lg`), dot row, 5 s autoplay, pause on hover |
| 9 | `faq` | white | pill badge `Questions`; h2 `Before you book`; lede; **five** hairline-divided rows (`divide-y divide-gray-200`), each a button + `+` circle and a `max-height`/opacity panel; **exclusive** — opening one closes the rest |
| 10 | `contact` | `primary-700` `#263fa8` | centred h2 `Letter on the counter?`, one line `Fixed price, twenty minutes, filed the same day.`, white solid `Book a test` + 2 px white/40 outline `Call (555) 150-1500` |
| — | `footer` | `gray-900` | `lg:grid-cols-12`: brand block (4) — logo-light, blurb, three `bg-gray-800` social tiles, address `4410 South 84th Street, Omaha, NE 68127`, phone, email; three link columns (5) — `Services` (4), `Company` (4), `Support` (3); newsletter (3) — `Stay Updated`, blurb, email field + `Subscribe`; legal bar (`mt-16`, `border-t gray-800`) — `© 2026 Backstop Backflow. All rights reserved.` + `Privacy Policy` / `Terms of Service` |
| — | page chrome | — | preloader (white overlay + 40 px spinner ring), 2 px scroll-progress bar at `primary-600`, skip link `#main-content`, `aria` cookie strip (`Decline` / `Accept All`), `#back-to-top` 48 px `primary-600` circle appearing past 300 px |

## Link and destination census (LT axis)

The live page holds **41 anchors**:

| target | count | verdict |
| --- | ---: | --- |
| `/theme/backstop/services` | 6 | live — 200 (nav, footer, cards) |
| `/theme/backstop/contact` | 6 | live — 200 |
| `/theme/backstop/` (home) | 2 | live — 200, the wordmark and the footer logo |
| `/theme/backstop/the-letter` | 3 | live — 200 |
| `/theme/backstop/pricing` | 3 | live — 200 |
| `/theme/backstop/service-areas` | 3 | live — 200 |
| `/theme/backstop/about` | 3 | live — 200 |
| `/theme/backstop/privacy` / `/terms` | 2 + 2 | live — 200 |
| `tel:5551501500` | 3 | live |
| `#service-areas` | 2 | **dead fragment** — no element has that id (the band is `id="areas"`); header city pill, desktop + mobile |
| `#` | 3 | **dead** — the footer's Twitter / Instagram / LinkedIn tiles |
| `#main-content` | 1 | live — the skip link |
| `tel:(555) 150-1500` | 1 | **malformed** tel URI (spaces and a parenthesis inside the number) |
| `mailto:testing@backstopbackflow.example` | 1 | live (`.example` demo mailbox) |

Every one of the eight inner routes was probed: `/services`, `/contact`, `/the-letter`, `/pricing`,
`/service-areas`, `/about`, `/privacy`, `/terms` all answer **308 → 200** (trailing-slash canonical)
with 40–47 KB DOMs and their own `<title>`. They are the authoritative reference for any band the
single page compresses — e.g. `/pricing` carries the full price table with filing-fee notes,
`/contact` the booking form and opening hours, `/the-letter` the annotated letter itself. A
single-page recreation is a deliberate compression (deviation 1), not a "single-page source" claim.

## Screenshot analysis (2400 × 1892, macOS-window framed)

A cool, editorial trade page with **no photography** and no decorative gradients: a dark licence
strip (`#242932`, 12 px), a white blurred header, then an `#f6f7f9` hero split 7/5. The headline is
two-tone — `ink-800` for *"You got the letter."* and `primary-600` for *"This takes twenty minutes."* —
set tight (`leading-[1.1]`) at 60 px at this width, with a 12 px blue eyebrow above and a single
paragraph of `ink-500` body copy below. Under it: a 4.9 rating line with amber glyphs and four
checkmarks in two columns, each tick a small blue check plus a `ink-700` label. The right column is a
white `rounded-2xl` card with a soft shadow: bold `Book a test`, small grey lede, three labelled
fields (two text, one select), one full-width blue button and a centred 12 px disclaimer.

The first band below the hero ("THE LETTER") is white with a left-aligned eyebrow, a 36 px `ink-800`
h2, a grey lede and a three-column row of steps whose tops are marked by a blue ordinal and a thin
rule that runs to the cell's edge — the same hairline device the pricing and services blocks use
between their cells, which is the page's single structural motif. Everything is squared: 8 px radii
on controls, 16 px on cards, 1 px `#eceef2`/`#e5e7eb` hairlines, blue reserved for one action per band.

## Requirements

### Requirement 1: Licence strip, header and navigation

The app SHALL render a non-sticky `ink-800` licence strip above a sticky blurred white header. The
strip SHALL carry three label/value pairs (certification, filing promise, service area) and a rating
with one amber star. The header SHALL carry the Flowcert lockup, six navigation links, a location
pill, a `tel:` link and one solid CTA, collapsing to a disclosure below `xl`.

#### Scenario: Visitor reads the licence strip

- **GIVEN** the page has loaded
- **WHEN** the strip is inspected
- **THEN** it is a `contentinfo`-free decorative region of text (`banner` stays on the header) with
  three label/value pairs and a rating of `4.9`
- **AND** the star glyph is `aria-hidden` and the rating is announced as text

#### Scenario: Visitor navigates from the header

- **GIVEN** the header is rendered at a desktop viewport
- **WHEN** the header is inspected
- **THEN** it is a `banner` landmark containing a navigation landmark with the six links
- **AND** each link targets an in-page section id that exists (`#process`, `#pricing`, `#services`,
  `#areas`, `#why-us`, `#contact`) — **not** the reference's dead `#service-areas`
- **AND** the phone control is a well-formed `href="tel:"` link (digits only) and the CTA is a link

#### Scenario: Visitor opens the mobile navigation

- **GIVEN** the header is rendered below `xl`
- **WHEN** the visitor activates the menu control
- **THEN** the control reports `aria-expanded="true"` and the panel lists the same six links plus the
  phone and CTA
- **AND** activating it again, or following any link, closes the panel and restores
  `aria-expanded="false"`

### Requirement 2: Hero

The app SHALL render a split hero on the `ink-50` ground whose left column holds an uppercase eyebrow,
exactly one `h1` whose second sentence is wrapped in a `primary-600` span, one lede paragraph, a
rating line (`4.9`, `380+ reviews`) and a list of four benefit ticks; the right column holds the
quick-book card at `lg` and stacks beneath the copy below it.

#### Scenario: Visitor lands on the page

- **GIVEN** the page has loaded
- **WHEN** the hero is in view
- **THEN** the `h1` is the only level-1 heading on the page and reads `You got the letter. This
  takes twenty minutes.` across two spans
- **AND** the four ticks are a list of four items, each with an `aria-hidden` icon
- **AND** the rating renders `4.9` beside a five-star control whose accessible name reports the score

### Requirement 3: Quick-book card

The app SHALL render a quick-book card with two required text fields (`name`, `phone`) and one
required select (`What is it for?`, a placeholder plus six options), a full-width submit control and a
fine-print line. Submitting a valid card SHALL show an inline confirmation without navigating;
submitting an empty card SHALL be blocked by validation.

#### Scenario: Visitor submits a complete request

- **GIVEN** a name, a phone and one of the six reasons are provided
- **WHEN** the visitor submits the card
- **THEN** a confirmation region appears that names itself as a demo confirmation
- **AND** the page does not navigate away and no network request is made

#### Scenario: Visitor submits an incomplete request

- **GIVEN** the reason select is left on its placeholder
- **WHEN** the visitor submits the card
- **THEN** native validation blocks the submit and no confirmation region appears

### Requirement 4: Explainer steps

The app SHALL render an ordered list of four steps in a one-column stack that becomes three columns at
`sm` (the fourth step wrapping onto a second row), each step marked by a two-digit ordinal and a
1 px rule, with a bold title, a body paragraph and a blue micro-link.

#### Scenario: Visitor reads the explainer

- **GIVEN** the explainer band is in view
- **WHEN** the visitor reads it
- **THEN** it is an `<ol>` of exactly four `<li>` items numbered `01`–`04` in DOM order
- **AND** each ordinal is followed by a rule element that is `aria-hidden`

### Requirement 5: Published price list

The app SHALL render six price cells as one hairline-divided `rounded-2xl` block (one column, two at
`sm`, three at `lg`), each cell a bold title, a blurb and a blue price line, followed by a
`Sample pricing` footnote. The six prices SHALL be `$85`, `$45`, `$135`, `From $195`, `From $165` and
`Quoted at the test`, in that order.

#### Scenario: Visitor reads the prices

- **GIVEN** the pricing band is in view
- **WHEN** the visitor scans the block
- **THEN** six cells render in the reference order and each price line uses the brand blue
- **AND** the dividers are the block's own `ink-100` ground showing through 1 px gaps, not per-cell
  borders

### Requirement 6: Why-this-exists band

The app SHALL render a two-column band on `ink-50`: a 4:3 figure with a caption on the left, and on
the right an eyebrow, an `h2`, a lede and a description list of four items, each item carrying a 2 px
`primary-600` left border.

#### Scenario: Visitor reads the rationale

- **GIVEN** the band is in view
- **WHEN** the visitor reads the right column
- **THEN** the four items are `<dt>`/`<dd>` pairs inside a `<dl>`, so the pairing is exposed to
  assistive technology rather than implied by styling
- **AND** the figure's image has descriptive alternative text and a visible caption

### Requirement 7: Services grid

The app SHALL render six service cells in the same hairline block as the price list, each with a
title, a blurb and a price line, followed by a `Sample content` footnote.

#### Scenario: Visitor reads the services

- **GIVEN** the services band is in view
- **WHEN** the visitor counts the cells
- **THEN** six render at `lg` in three columns and two rows, in the reference order
- **AND** the sixth cell's price reads `Free` (the annual-reminder service)

### Requirement 8: Coverage list

The app SHALL render a two-column band whose right column lists twelve towns in a bordered
2-column (3 at `sm`) list, each row separated by a 1 px `ink-100` bottom border, followed by a note
about replacing the list.

#### Scenario: Visitor checks their town

- **GIVEN** the coverage band is in view
- **WHEN** the visitor reads the list
- **THEN** it is a `<ul>` of twelve `<li>` items in the reference order
- **AND** the town names are plain text, not links

### Requirement 9: Reviews carousel

The app SHALL render a review carousel of three cards showing three slides at `lg`, two at `sm` and
one below it, with a dot control per reachable position, prev/next buttons that appear at `lg`, an
autoplay interval of five seconds and pause-on-hover. Each card SHALL render a five-star rating, the
quoted review, an initial avatar and the reviewer's name and location.

#### Scenario: Visitor moves the carousel

- **GIVEN** the carousel is rendered with three slides
- **WHEN** the visitor activates the next control at `lg`
- **THEN** the track does not move (three slides fill the viewport, so the last position is the first)
- **AND** below `lg` the same control advances the track by one slide and the active dot moves with it

#### Scenario: Visitor reads a review with assistive technology

- **GIVEN** a review card is in view
- **WHEN** it is read
- **THEN** the five stars are one labelled rating, not five unlabelled glyphs
- **AND** the avatar initial is `aria-hidden` and the name and location are text

### Requirement 10: FAQ accordion (exclusive)

The app SHALL render five question rows divided by hairlines. Each row SHALL be a button that reports
its expanded state, starts collapsed, and **closes any other open row** when activated — the
reference's script is exclusive, not independent.

#### Scenario: Visitor opens a second question

- **GIVEN** all five rows are collapsed
- **WHEN** the visitor activates the second row
- **THEN** that row reports `aria-expanded="true"`, its answer is visible and its glyph rotates to an
  `×`
- **AND** activating a third row collapses the second and expands the third

#### Scenario: Visitor closes a question

- **GIVEN** the first row is expanded
- **WHEN** the visitor activates it again
- **THEN** it collapses, its panel is hidden from assistive technology and `aria-expanded` is `false`
- **AND** every row remains keyboard reachable with a visible focus ring

### Requirement 11: Closing call-out and footer

The app SHALL render a full-bleed call-out on `#263fa8` with a white heading, one line of copy, a
white solid CTA and a 2 px white/40 outline phone CTA, followed by a near-black footer with a brand
block (blurb, three social tiles, address, phone, email), three link columns (`Services`, `Company`,
`Support`), a `Stay Updated` newsletter field, a legal bar and a dismissible cookie strip. The footer
SHALL link `https://www.componentdock.com/` labelled "Component Dock".

#### Scenario: Visitor follows the closing call-out

- **GIVEN** the call-out is in view
- **WHEN** the visitor reads it
- **THEN** the solid CTA is white on `#263fa8` and the secondary control is a well-formed `tel:` link
- **AND** both meet a 4.5:1 contrast ratio against `#263fa8`

#### Scenario: Visitor subscribes to the newsletter

- **GIVEN** the footer is in view
- **WHEN** the visitor submits an empty newsletter field
- **THEN** native validation blocks the submit
- **AND** submitting a valid address shows an inline confirmation without a page reload

#### Scenario: Visitor dismisses the cookie strip

- **GIVEN** the cookie strip is visible
- **WHEN** the visitor activates `Decline` or `Accept All`
- **THEN** the strip is removed from the document and does not return during the session
- **AND** the choice is kept in component state, not invented storage

#### Scenario: Visitor follows the marketplace credit

- **GIVEN** the footer is in view
- **WHEN** the visitor reads the legal bar
- **THEN** it renders the copyright line, a privacy link, a terms link and the `Component Dock` link
  to `https://www.componentdock.com/`
- **AND** no app file mentions the source design or ColorLib (provenance lives in this spec only)

### Requirement 12: Page chrome

The app SHALL render a skip link as the first focusable element, a scroll-progress bar driven by
scroll position, and a back-to-top control that appears past 300 px. Reveal animations SHALL be
opt-in per band and SHALL resolve to visible content when the browser lacks `IntersectionObserver` or
the visitor prefers reduced motion.

#### Scenario: Visitor scrolls the page

- **GIVEN** the page is at the top
- **WHEN** the visitor scrolls past 300 px
- **THEN** the progress bar width equals scrolled pixels over scrollable height as a percentage
- **AND** the back-to-top control becomes visible and returns the page to the top when activated

#### Scenario: Reduced-motion visitor loads the page

- **GIVEN** `prefers-reduced-motion: reduce` matches
- **WHEN** the page renders
- **THEN** no band is left at `opacity: 0` and no element is translated for a reveal
- **AND** the carousel does not autoplay

### Requirement 13: Accessibility and provenance

The app SHALL provide one `main`, one `h1`, sequential heading levels, labelled form controls, visible
focus rings (`2px #3f6be8`) on every interactive element, and `aria-expanded` / `aria-checked` states
that mirror what is visible. No app file SHALL name the source design, and no asset SHALL be copied.

#### Scenario: Assistive technology reads the page

- **GIVEN** the page is loaded
- **WHEN** the landmark and heading structure is read
- **THEN** exactly one `banner`, one `main`, one `contentinfo` and one `h1` exist
- **AND** the skip link is the first focusable element and targets `main`

## Verification checklist

- [ ] `npx tsc --noEmit` and `npm run lint` clean for `apps/flowcert`
- [ ] `npm run test:coverage --workspace @free-react-templates/flowcert` at 100% lines/functions/
      branches/statements; no `/* v8 ignore */` added to dodge a branch
- [ ] `npm run build --workspace @free-react-templates/flowcert` clean; `scripts/verify-app.sh
      flowcert` passes
- [ ] Tokens in `apps/flowcert/src/index.css` `@theme`: `primary-50/100/200/300/400/500/600/700`
      (`#eef4ff`, `#dce7fd`, `#bfd3fc`, `#94b5f9`, `#628ef3`, `#3f6be8`, `#2d4fd0`, `#263fa8`) and
      `ink-50/100/200/300/400/500/600/700/800/900` (`#f6f7f9`, `#eceef2`, `#d8dce4`, `#b0b7c6`,
      `#818b9f`, `#606a7e`, `#475061`, `#373e4b`, `#242932`, `#161a20`) — identical to §Design tokens
- [ ] Ten bands present in the order of §Reference document order, grounds alternating `ink-50` →
      white → white → `ink-50` → white → white → `gray-50` → white → `primary-700` → `gray-900`
- [ ] Licence strip: three label/value pairs, `4.9`, `380+ reviews`, single amber star
- [ ] Hero: one `h1` with the blue second span, `4.9` rating, four ticks, card in the right column
      at `lg` and stacked below it
- [ ] Quick-book: three required controls (select with placeholder + 6 options), inline demo
      confirmation, no network call
- [ ] Pricing: six cells, prices `$85` / `$45` / `$135` / `From $195` / `From $165` / `Quoted at the
      test`, hairline dividers from the block ground, footnote present
- [ ] Services: six cells, `Free` on the annual-reminder cell, footnote present
- [ ] Why-us: `<dl>` of four items with 2 px `primary-600` left borders; figure with alt text + caption
- [ ] Areas: twelve towns in DOM order, plain text, bordered rows, replace-the-list note
- [ ] Reviews: three cards, five labelled stars each, initials hidden, carousel dots + `lg` arrows,
      5 s autoplay that pauses on hover and is disabled under reduced motion
- [ ] FAQ: five rows, **exclusive** expansion, `aria-expanded` toggles, glyph rotates 45°
- [ ] Closing call-out on `#263fa8` with white solid + 2 px white/40 outline CTAs; footer links
      `https://www.componentdock.com/` as "Component Dock"
- [ ] `public/CNAME` = `flowcert.free.componentdock.com`; `homepage` =
      `https://flowcert.free.componentdock.com`
- [ ] No ColorLib / "Backstop" / "backstopbackflow" string in any file under `apps/flowcert`; no
      copied SVG, font file or stylesheet; placeholder images (if any) from
      `https://picsum.photos/seed/flowcert-<n>/...`
- [ ] `grep -ril "colorlib\|backstop" apps/flowcert` → empty
- [ ] Row added for the design under `## Business (365)` and flipped to `[x]` with the bookkeeping
      commit (the exact line is in §Purpose)

## Deliberate deviations from the reference

1. **Multi-page → one page.** The preview is an eight-route Astro site (`/services`, `/contact`,
   `/the-letter`, `/pricing`, `/service-areas`, `/about`, `/privacy`, `/terms`, all live). The
   recreation is the single landing page described here; those nav items point at the matching
   in-page bands, and the quick-book card stands in for `/contact`.
2. **Dark mode dropped.** The source ships `dark:` variants for every band and a working theme
   toggle; the recreation is light-only (house convention, keeps coverage honest). The dark values
   are recorded in §Design tokens (`primary-800/900`, `gray-950` ground) so the decision is
   reversible.
3. **Copy and identity re-branded.** Flowcert replaces Backstop Backflow: the Omaha address, the
   `NE #00000` certification line, the `(555) 150-1500` number, the `testing@…example` mailbox, the
   Douglas/Sarpy county list and the twelve Nebraska towns become Flowcert equivalents in an
   invented demo city/county, with twelve invented town names. Item counts, price shape, band
   order and the exclusive accordion are kept 1:1.
4. **Logo not copied.** `logo.svg` is not used; the mark is drawn inline (a rounded ink plate with two
   pipe strokes in `#628ef3` / `#475061` and a `#94b5f9` divider) beside the wordmark `Flow` +
   `cert`, with an optional mono sub-label, matching the source lockup's geometry.
5. **Figure not copied.** `valve-panel.svg` is a vector diagram; the recreation uses a deterministic
   photo placeholder (`picsum.photos/seed/flowcert-1/800/600`) with the reference's own
   "replace with a photograph" caption, because the source itself asks for a photograph there.
6. **Icons.** Inline SVG paths (stars, checks, phone, chevron, plus) become `lucide-react` icons; the
   brand's five-star rating is one labelled control, not five glyph copies.
7. **Reference defects not reproduced.** The live page links its city pill to a fragment that does
   not exist (`#service-areas` while the band is `id="areas"`), renders one malformed
   `tel:(555) 150-1500` URI, and points three social tiles at `href="#"`. The recreation targets
   `#areas`, uses digits-only `tel:` links and gives the social tiles real external hrefs with
   `rel="noreferrer"`.
8. **Inert form made functional.** The source's quick-book form has **no** handler (`data-form` is
   referenced by no script — the submit would POST to `#`). The recreation validates and confirms in
   place, so the card is testable and never navigates.
9. **Cookie strip persistence.** The source stores `cookie-consent` in `localStorage`; the recreation
   keeps the dismissed state in component state (house precedent) so no test depends on a made-up
   storage key.
10. **Preloader.** The source hides its overlay on `astro:page-load` plus a 300 ms fade; the
    recreation derives `hidden` from `document.readyState === 'complete'` as well as the `load`
    event, so an already-complete document never traps the overlay.
