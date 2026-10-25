# Template: Quarto (Portfolio — a student portfolio laid out like a printed field notebook)

## Purpose

A one-page portfolio for a **design student**, built to look like a page out of a printed field
notebook rather than a "creative agency" site: warm paper ground (`#f7f5ef`), deep ink-green brand
(`#244b3b`), hairline rules instead of cards-with-shadows, and — the signature move — a **tilted sage
notebook card taped into the hero's right column**, carrying the student's one-line thesis in Georgia
italic (`Always asking “what if?”`) over three ruled note lines and a circular rubber stamp.

The page then argues in five beats: two **project cards** introduced by a numbered eyebrow
(`01 / SELECTED PROJECTS`) with a right-aligned two-line lede, a **5/7 about band** whose only
decorations are five bordered skill chips, an **experience timeline** of three hairline-separated rows
(`2024–2027 · EXPECTED`, `SUMMER 2026`, `2025–PRESENT`), and a single **highlighter-yellow contact
panel** (`#e7ed92`, 4 px radius, inset in the container, *not* full-bleed) that is the only saturated
surface on the page. There is no photography, no icon set, no carousel, no parallax, no dark mode:
every arrow on the page is a **text glyph** (`↗`, `↓`, `→`, `↳`, `✳`), which is what makes the design
read as stationery.

Recreation of the ColorLib "Fieldnotes Student" design
(https://colorlib.com/wp/template/fieldnotes-student/, live preview
https://preview.colorlib.com/theme/fieldnotes-student/) as a React 19 + Vite + Tailwind CSS 4 +
TypeScript single-page application.

* **Source slug:** `fieldnotes-student`
* **ColorLib page:** https://colorlib.com/wp/template/fieldnotes-student/ — HTTP 200, 114,006 B,
  `<title>` **"Fieldnotes Student — Student Portfolio Template - Colorlib"**. Its
  `<meta name="description">` states the design's own scope: *"Present student projects with two case
  studies, coursework, a printable résumé and setup guidance. Explore the Fieldnotes Student Bootstrap 5
  template."* — i.e. **Bootstrap 5**, which the markup confirms (`bootstrap.min.css` v5.3.8, grid
  classes only).
* **Live preview:** https://preview.colorlib.com/theme/fieldnotes-student/ — **HTTP 200, 7,216 B**,
  page `<title>` **"Avery Chen \| Student portfolio — Fieldnotes Student"**, read 2026-10-25 with
  `curl -4` (this host resolves an IPv6 address that is blocked, so every fetch needs `-4`). A
  **hand-written static site** — one 10,112 B stylesheet, one 1,494 B vanilla script, Bootstrap 5.3.8
  used *only* for the 12-column grid + `.visually-hidden`. **Not** an Astro build, so the twelve
  catalogue-gap siblings' house kit does not apply here (see *Sibling comparison* in the design notes).
  The small byte count is real, not a stub: the page has six bands and 61 distinct classes.
* **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/**fieldnotes-student-featured.jpg**
  — HTTP 200, 87,898 B, served as **AVIF behind a `.jpg` name** (convert before analysis: PIL or
  `ffmpeg`; `vision_analyze` rejects the raw file), **2400×1892**. Unlike the sibling preps' captures
  (a macOS browser window framing the page), this one is a **marketing composition on a sage ground**
  (`rgb(232,235,224)` = `#e8ebe0`): the words `COLORLIB · STUDENT PORTFOLIO TEMPLATE`, the design name
  `Fieldnotes Student` and the line *"Case studies, coursework, a résumé and a writing guide."*, plus
  **three** framed screenshots — the landing page (large, left), a project case-study page (top right)
  and the printable résumé (bottom right). It is the only reference that shows the two inner pages as
  they are actually rendered, which is why it is recorded here despite the live DOM being the authority.
* **New name:** `quarto` (`apps/quarto`, `@free-react-templates/quarto`) — one lowercase word: a
  *quarto* is a book/page size, the stationery vocabulary this design is drawn from, and it names the
  format rather than the person, the way the reference names itself after the notebook in its hero.
  It differs from the source slug; there is **no** `apps/quarto`, **no**
  `openspec/specs/template-quarto/`, **no** `docs/templates/quarto/`, and
  `git grep -il quarto origin/main` prints **nothing** (checked 2026-10-25). All three ColorLib URL
  forms — `wp/template/quarto/`, `preview.colorlib.com/theme/quarto/`,
  `preview.colorlib.com/theme/bootstrap/quarto/` — return **404**. Rejected on the same checks and
  recorded so the next auditor does not retry them: `jotter` (an existing `apps/jotter` **and**
  `template-jotter`), `quire` (7090 hits — it is a substring of `require`), `feint` (1 hit),
  `folio`/`margin`/`grid` (substrings of `portfolio`/`margin-*`/the whole grid system).
  Do not rename without re-running the four checks (folder, spec folder, `git grep`, ColorLib 404).
* **Deploy target:** https://quarto.free.componentdock.com (`apps/quarto/public/CNAME`, `homepage` in
  `apps/quarto/package.json`)
* **Category:** **no `TEMPLATES.md` row exists yet** — see *Why this design has no row* below.
  Suggested home: **`## Portfolio (89)`** (line 2496 on `origin/main` `d089ec83e`), the section that
  already holds the sibling portfolio/creative-personality designs. It is ordered by **ColorLib source
  name**, so this row belongs **between `Evans` and `Fplus`** (`Ev-` < `Fi-` < `Fp-`).

### Why this design has no row (catalogue gap, measured 2026-10-24/25)

`TEMPLATES.md` is exhausted — **0** `- [ ]`, every row `[x]` — but the **catalogue is not complete**:
all 40 pages of https://colorlib.com/wp/templates/ were crawled and compared with the 1,631 slugs the
checklist cites, and **256 designs are on the listing that the checklist never recorded** (42
standalone + 214 snippet variants). The census and both buckets are in `docs/catalog-coverage.md`,
whose standalone table already carries this design's line: `fieldnotes-student` — *preview 200, 7216 B*
(the byte count matches this run's fetch exactly).

**Twelve** of the 42 standalone designs were prepped before this run — six shipped (Thermly,
Plantroom, Veranda, Aquifer, Smallpaw and Flowcert) and six pending (Kettle, Chalkline, Closeknit,
Stoke, Percline, Emberly) — and they established the hand-off pattern this spec follows. This is the
**thirteenth**. No spec on main names `theme/fieldnotes-student` (`git grep -l
'theme/fieldnotes-student/' origin/main -- openspec/specs docs` → nothing), no app named
`fieldnotes-student` or `quarto` exists, so this prep is not a duplicate.

**Implementer note:** because there is no row yet, add one **before** the PR claims a row — paste this
line into `## Portfolio` **in source-name alphabetical order** (between **Evans** and **Fplus**) and
bump the heading count:

```
- [x] **Fieldnotes Student** — [colorlib](https://colorlib.com/wp/template/fieldnotes-student/) · ![preview](https://colorlib.com/wp/wp-content/uploads/sites/2/fieldnotes-student-featured.jpg) · [quarto](https://quarto.free.componentdock.com)
```

⚠️ **Re-measure the count before you write it.** On `origin/main` `d089ec83e` the section reads
`## Portfolio (89)` over **89** rows (line 2496). Adding Fieldnotes Student makes **90**. Count the
rows; do not copy this number.

Do not invent a second row for the same slug.

## Reference readings (2026-10-25, `curl -4`)

| artefact | bytes | sha256 |
| --- | ---: | --- |
| `theme/fieldnotes-student/` page (DOM authority) | 7,216 | `e202abae71e0694588e6bd97e2eed0c202aa9a400b61398fffbc5c44bb6500f3` |
| `assets/style.css` (token authority) | 10,112 | `667e2fec4a9a48fed607d07937d67e7bf81b09babeff49132b658675837359a2` |
| `assets/app.js` (behaviour authority) | 1,494 | `7c89692c8e461d845ed805b008baa05f86bf072549a6d1c843db235f9015f570` |
| `assets/vendor/bootstrap.min.css` (**Bootstrap v5.3.8**, grid + `.visually-hidden` only) | 232,111 | `d85327d99c7a3ee1f9b5d0500d1370acea3ad2db39c163c2f51f232baedbdede` |
| `assets/fonts/inter.woff2` (**Inter** variable, `font-weight: 100 900`) | 48,256 | `3100e775e8616cd2611beecfa23a4263d7037586789b43f035236a2e6fbd4c62` |
| `assets/mark.svg` (64×64 favicon: `#244b3b` disc + `#e7ed92` Georgia italic `a`) | 225 | `78ea57e46399207e13c4f76f8b5f9bac8859b1a8422558c72930bafdb79443dd` |
| `assets/wayfinding.svg` (card 1 concept art, 900×590, sage `#e2e7dc` ground) | 2,054 | `0bf83388c6fa5d6c6170b10caab171d13f4f8cdb7add0d01df9777926eae2194` |
| `assets/pantry.svg` (card 2 concept art, 900×590, clay `#eedfcd` ground) | 2,301 | `d4ebef2445c08bf527fed5659017b33aee3ef0e4ea1c4f59c30df2b49bdbad18` |
| `resume.html` (inner page, **not built**) | 4,228 | `78769e7c1b39dedfa8e0574b08ae2dc206a2b68f5656149634d34a4a78433a1a` |
| `campus-path.html` (inner page, **not built**) | 5,510 | `4b09b63e6a282bef0645b12748157c355bd0361ff0558b55a3861beec3bc4274` |
| `pantry-notes.html` (inner page, **not built**) | 5,407 | `fc7dc0110b59aa1bb1bd961b9234cdf7d31745c6b48bd6d3fdbda1195993f9c4` |
| `setup.html` (inner page, **not built** — the writing guide) | 7,792 | `1b3b8764fbb34fd267a07a04c7d93b751f104f974063ffb826def3ec1bf17ed2` |
| `avery-chen-resume.txt` (the résumé's downloadable twin) | 1,332 | HTTP 200 — not rebuilt |
| catalog screenshot `fieldnotes-student-featured.jpg` (real **AVIF**, 2400×1892) | 87,898 | `48e5672e0592765f2bea4f9418b3b766d795a9f8ffbc1cce1a3f698c4c6d4ca7` |
| `colorlib.com/wp/template/fieldnotes-student/` (catalog entry) | 114,006 | `31dc458b37181c09b04dae53f04a1b386a6d1e6c1c5237625c27ea29e5798f2f` |
| `theme/bootstrap/fieldnotes-student/`, `theme/bb/fieldnotes-student/`, `etc/cs/fieldnotes-student/index.html`, `downloads/free/fieldnotes-student.zip` | 9 | **HTTP 404** on all four (`text/plain` "not found") — this design is **not** a Bootstrap-family demo, so the plain `theme/<slug>/` path *is* the live preview and there is no archive to diff against |

The preview host is the sole reference: no archive exists (`downloads/free/…zip` 404), so unlike the
Astro siblings there is no "the archive is its un-versioned twin" claim to make. The page carries
`<meta name="robots" content="noindex,nofollow">` in the head and a second `noindex,follow` — host
chrome for a demo, not a design feature (Deviation 10).

## Design tokens (measured from `assets/style.css`, 10,112 B, and the live render)

The stylesheet declares **seven** custom properties on `:root` and then uses them everywhere; three of
the colours it reacts with (the link hover, the button hover and the focus ring) are **literals, not
variables** — keep that shape, it is why the palette cannot be re-themed by editing one block. Every
value below was read from the sheet and confirmed against `getComputedStyle` at 1440 px.

### Paper, ink and hairlines

| token | hex | where the reference uses it |
| --- | --- | --- |
| `--paper` | `#f7f5ef` | **body ground** (measured `rgb(247,245,239)`), the **header** ground, `.site-header`'s own `background` |
| `--ink` | `#262923` | body text (measured `rgb(38,41,35)`), every heading, the brand wordmark, the **active filter pill's ground**, the `.brand-mark` ring |
| `--muted` | `#62675d` | hero intro, section ledes, `.section-number`, eyebrows, project meta + blurbs, timeline dates and bodies, footer, sample notices |
| `--line` | `#d8dbcf` | **every hairline on the page**: header bottom, section tops, timeline row rules, skill-chip borders, filter-pill borders, footer top |
| `--green` | `#244b3b` | **brand**: solid button ground + border, all links (`--bs-link-color`), availability dot + text, the secondary button's border/text, notebook focus |
| `--yellow` | `#e7ed92` | **the contact panel's ground** (measured `rgb(231,237,146)`) — the only large saturated surface |
| `--cream` | `#fffef8` | **declared and never used** on the landing page (0 rules reference it; see Deviation 12) |

### Reacting colours (literals in the sheet — do not fold them into the ramp)

| token | value | where |
| --- | --- | --- |
| link hover | `#0e3020` | `a:hover` — one step darker than `--green` |
| button hover | `#163a2a` | `.button:hover` ground (also sets `color: white`) |
| **focus ring** | `#9d461d` | `:focus-visible` on `a`, `button`, `summary` — **3 px outline, 5 px offset**. This burnt sienna is *the only warm-orange pixel in the design*: do not spread it, do not "normalise" it to green |

### Notebook card (the design's signature surface)

| token | value | where |
| --- | --- | --- |
| card ground | `#e5e8dc` | `.notebook` (measured `rgb(229,232,220)`), 3 px radius, `padding: 42px 30px`, `min-height: 430px`, `transform: rotate(2deg)`, `margin-left: 15px` |
| washi tape | `#e6cf99b0` | `.notebook:before` — 130×28 px, `top: -12px`, `left: calc(50% - 65px)`, `rotate(-6deg)` (72 % alpha tape) |
| ruled line | `#b3baa7` | the `.notebook-top` bottom rule and each `.note-lines span` bottom rule |
| stamp ring | `#65785f` | `.notebook .stamp` — 62 px circle, 1 px border, `rotate(-14deg)`, `margin: 18px 0 0 auto` (right-aligned) |

### Image mats and the two concept illustrations

| token | value | where |
| --- | --- | --- |
| image mat | `#e9e8df` | `.project-card .project-image` ground (measured `rgb(233,232,223)`) — visible for a moment while the 900×590 art loads, and behind it at any rounding |
| card-1 ground | `#e2e7dc` | `wayfinding.svg`'s full-bleed rect (**sage**) |
| card-2 ground | `#eedfcd` | `pantry.svg`'s full-bleed rect (**clay/peach**) — the two cards are deliberately *not* the same tint |
| window chrome | `#f5f4ed` | the illustration's 27 px title bar; three 3 px dots at `#c6cbbb` |
| route accent | `#527f61` | the dashed path inside card 1 (`stroke-width: 5`, `stroke-dasharray: 9 6`) |
| chart greens | `#244b3b`, `#e7ed92` | the bars inside card 2 (brand + highlighter) |

### Inner-page-only colours (recorded because the catalogue screenshot shows them, not used in the app)

`#e6eadb` (`.pull-note` ground + 3 px `--green` left rule), `#4d5349` (`.case-body` copy),
`#e9ecdf` (`.docs pre` ground). Kept here so a future "add the case-study pages" decision does not need
a second research pass.

### Typography

Two faces, and only one of them is loaded:

* **Inter** — the whole page. Delivered by the preview as a **single variable woff2**
  (`assets/fonts/inter.woff2`, 48,256 B, `font-weight: 100 900`, `font-display: swap`,
  `font-family: Inter`) and declared as `--bs-body-font-family: Inter, Arial, sans-serif`.
  For the recreation load it from Google Fonts (`css2?family=Inter:wght@100..900` → HTTP 200,
  verified) via `<link>`; never copy the woff2.
* **Georgia italic** — the design's *voice*. Used in exactly four places: the `em` inside `h1`
  (`in progress.`), the `em` inside every `.section-title` (`worked on.`, `making things.`,
  `outside class.`, `start.`), the `.brand-mark` monogram, and `.notebook h2` (`Always asking “what if?”`).
  Georgia ships with macOS/Windows but **not** with most Linux images (CI, screenshots), so specify
  `font-family: Georgia, "Gelasio", "Times New Roman", serif` and load **Gelasio** from Google Fonts
  (`css2?family=Gelasio:ital,wght@0,400..700;1,400..700` → HTTP 200, verified) as the metric-compatible
  fallback. `em` is `font-weight: 400` (the serif is not bolded), `letter-spacing` inherits.

Measured type scale (`body` 16 px / 28 px = 1.75):

| role | reference rule | 1440 px | 1024 px | 992 px | 768 px | 390 px |
| --- | --- | ---: | ---: | ---: | ---: | ---: |
| `h1` (hero) | `clamp(3rem, 6.7vw, 6.1rem)`, 1.06, `-0.055em`, 600 | **96.48** | 68.61 | 66.46 | 51.46 | **53.6** (`3.35rem` override ≤575) |
| `h2` (`.section-title`) | `clamp(2rem, 4vw, 3.65rem)`, 1.06, `-0.055em`, 600 | **57.6** | 40.96 | 39.68 | 32 (min) | 32 (min) |
| `h2` (contact panel) | `clamp(2.5rem, 5vw, 4.3rem)`, max-width 650 | **68.8** | 51.2 | 49.6 | 40 (min) | 40 (min) |
| `h2` (`.notebook`) | `3rem` Georgia italic, 1.06, `-0.05em`, 400; `2.7rem` ≤991; `2.4rem` ≤575 | **48** | 48 | 43.2 | 43.2 | 38.4 |
| `h3` (project card) | `1.6rem` → measured **25.6**, 600, `-0.055em` | 25.6 | 25.6 | 25.6 | 25.6 | 25.6 |
| `h3` (timeline row) | `1.15rem`, 600, `-0.02em` | **18.4** | 18.4 | 18.4 | 18.4 | 18.4 |
| `p` (hero intro) | `1.08rem` muted, max 440 | **17.28** | 17.28 | 17.28 | 17.28 | 17.28 |
| `p` (`.about-copy`) | `1.12rem`, max 640 | **17.92** | 17.92 | 17.92 | 17.92 | 17.92 |
| project meta | `.69rem` **overridden to `.9rem`** by `.project-card p` → **14.4**, uppercase, `0.06em`, muted | 14.4 | 14.4 | 14.4 | 14.4 | 14.4 |
| project blurb | `.9rem` muted, max 490 | 14.4 | 14.4 | 14.4 | 14.4 | 14.4 |
| `.section-head p` | `.9rem` muted, max 320 | 14.4 | 14.4 | 14.4 | 14.4 | 14.4 |
| `.section-number` | `.74rem`, `0.04em`, muted (Inter 400) | **11.84** | 11.84 | 11.84 | 11.84 | 11.84 |
| `.eyebrow` (and the contact panel's) | `.72rem`, 600, `0.12em`, **uppercase**, muted | 11.52 | 11.52 | 11.52 | 11.52 | 11.52 |
| `.availability` | `.75rem`, `--green`, 8 px gap to a 7 px dot | **12** | 12 | 12 | 12 | 12 |
| nav link | `.88rem`, ink, no underline | **14.08** | 14.08 | 14.08 | 14.08 | 14.08 |
| brand | `1.13rem`, 700, `-0.045em`, ink | **18.08** | 18.08 | 18.08 | 18.08 | 18.08 |
| `.notebook-top` | `.63rem`, `0.12em`, uppercase pairs | **10.08** | 10.08 | 10.08 | 10.08 | 10.08 |
| `.note-lines span` | `.8rem`, 10 px block padding, 1 px bottom rule | **12.8** | 12.8 | 12.8 | 12.8 | 12.8 |
| `.stamp` | `.62rem`, 1.4 line-height, centred | **9.92** | 9.92 | 9.92 | 9.92 | 9.92 |
| `.timeline .date` | `.72rem` muted | **11.52** | 11.52 | 11.52 | 11.52 | 11.52 |
| `.timeline p` | `.86rem` muted | **13.76** | 13.76 | 13.76 | 13.76 | 13.76 |
| `.skill-list li` | `.75rem`, `5px 12px`, 1 px line, 4 px radius | **12** | 12 | 12 | 12 | 12 |
| footer | `.7rem` muted | **11.2** | 11.2 | 11.2 | 11.2 | 11.2 |
| `.sample-notice` | `.72rem` muted | **11.52** | 11.52 | 11.52 | 11.52 | 11.52 |
| `.button` | `.85rem`, 600 | **13.6** | 13.6 | 13.6 | 13.6 | 13.6 |
| `.filters button` | `.76rem` | **12.16** | 12.16 | 12.16 | 12.16 | 12.16 |

Letter-spacing is the design's tell: **`-0.055em`** on every `h1`/`h2`/`h3` (measured `-5.3064px` on the
96.48 px `h1`, `-3.168px` on the 57.6 px `h2`), `-0.045em` on the brand, `-0.02em` on timeline titles,
and **positive** tracking (`0.04em`, `0.06em`, `0.12em`) on every uppercase micro-label. Get this pair
wrong and the page looks like a different design even with the right colours.

### Buttons, pills, radii

| element | measured | notes |
| --- | --- | --- |
| `.button` (solid) | 187 × 52 at 1440 (390: 177 × 52) | `1px solid #244b3b`, bg `#244b3b`, **white** text, `13.6px/600`, `padding: 13px 21px`, **`border-radius: 3px`**, `min-height: 48px`, `display: inline-flex` with **24 px gap** between the label and its glyph |
| `.button.secondary` | 244 × 52 | transparent ground, **`--green`** text, same 1 px green border, same radius |
| `.button:hover` | — | ground `#163a2a`, text stays white |
| `.filters button` | 82 × 42 (each pill), 12.16 px | `1px solid #d8dbcf`, `border-radius: 30px`, `padding: 8px 17px`, `min-height: 42px`, ink text |
| `.filters button[aria-pressed="true"]` | — | **ink ground, white text, ink border** — the "All work" pill |
| radius inventory | — | **3 px** (buttons, notebook) · **4 px** (contact panel, project image, skill chips) · **30 px** (filter pills) · **50 %** (brand monogram, stamp). There is **no 8/12/16 px step and no `shadow-*` anywhere on the page** — the design separates with hairlines, not elevation |
| glyphs | — | every arrow is a character: `↗` ×5 (nav CTA, hero secondary CTA, both card titles, the contact email button), `↓` ×1 (hero primary CTA), `→` ×1 (résumé link), `↳` ×3 (note lines), `✳` ×1 (stamp), plus `·` ×10 and `—` ×3. **No icon package is needed**; do not substitute lucide arrows |

### Rhythm, containers, measured heights

* `.container` — `max-width: 1256px`, 12 px inline padding (Bootstrap). At 1440 that is a **92 px page
  gutter, 1232 px of content** (measured `.container` x = 92, w = 1256 with padding).
  Below 576 px the padding becomes **22 px** (content 346 px at a 390 px viewport).
* `.site-header` — `padding: 22px 0`, 1 px `--line` bottom border, **static (not sticky)**, **78 px**
  tall at 1440; `17px` padding below 575.
* `.hero` — `padding: 85px 0 70px` (→ `55px 0` ≤991, `padding-top: 40px` ≤575); `h1` max-width **760**;
  `.hero-intro` max-width **440**; `.hero-actions` `margin-top: 30px`, `gap: 12px`, wraps;
  `.availability` `margin-bottom: 32px`.
* `.section` — `padding: 74px 0` (→ **55px** ≤991) with a **1 px `--line` top border**; `.section-head`
  `display: flex`, `justify-content: space-between`, `align-items: end`, `margin-bottom: 36px`
  (→ `display: block` ≤575, lede `margin-top: 18px`).
* 5/7 splits — `#about` and `#experience` are `col-lg-5` / `col-lg-7`: **533 / 747 px** at 1440,
  423/593 at 992, stacked full width ≤991. The hero is `col-lg-8` / `col-lg-4`: **853 / 427** at 1440,
  699/349 at 1024, 677/339 at 992, stacked ≤991.
* Project grid — `col-md-6` + `g-4`: **628 × 559** cards (604 px art) at 1440, 512 at 1024, 384 at 768,
  **one per row ≤767** (576 at 576, 370 at 390). Card art keeps the source's **900:590 = 1.525** ratio
  (604 × 396 measured).
* `.contact-panel` — **1232 × 467** at 1440, `background: #e7ed92`, `border-radius: 4px`,
  `padding: 55px` (→ 35px ≤991, `30px 24px` ≤575), `margin-bottom: 65px`, **inset in the container**
  (it starts at x = 104, 55 px padding puts the copy at 159). Its `h2` max-width 650, lede max 520.
* `.site-footer` — 1 px `--line` top border, `padding: 25px 0 30px`, `.7rem` muted, **106 px**;
  `.footer-row` is `space-between` with 18 px gap and wraps.
* **Document height** (measured, live): **3,336 px at 1440** · 3,314 at 1280 · 3,307 at 1024 · 3,340 at
  992 · 3,594 at 768 · 4,265 at 576 · **4,670 at 390** · 4,812 at 360.
  Band heights at 1440: header 78 · hero **643** · work **991** · about **416** · experience **571** ·
  contact **467** · footer 106.
* `html { scroll-behavior: smooth; scroll-padding-top: 95px }` — in-page anchors stop 95 px down.

## Reference document order (one page: five bands + header + footer)

```
a.skip                              "Skip to content" → #main
header.site-header                  brand (monogram + name) · menu-toggle (≤575) · nav (Work / About / Résumé / Let's talk ↗)
main#main > .container
  1  section.hero                   col-lg-8 copy (availability · h1 · intro · 2 CTAs) + col-lg-4 aside.notebook
  2  section#work.section           section-head (01 / SELECTED PROJECTS + h2 + 2-line lede) · .filters (3 pills) · live status · 2 × article.project-card
  3  section#about.section          col-lg-5 h2 · col-lg-7 (2 paragraphs + ul.skill-list ×5)
  4  section#experience.section     col-lg-5 (h2 + résumé link) · col-lg-7 ol.timeline ×3
  5  section#contact.contact-panel  eyebrow · h2 · lede · email CTA · sample notice
footer.site-footer                  brand line · (setup link + attribution) · sample notice
```

There are **no** hidden/off-canvas pieces, no cookie strip, no preloader, no back-to-top, no scroll
progress, no dark toggle, no modal and no lightbox in the source. Anything of that kind in the
recreation would be an invention and is explicitly out of scope.

## Content inventory (verbatim roles — paraphrase freely, keep the kind)

**Header** — brand `a` monogram + `Avery Chen` (with a visually-hidden `— home`), nav `Work`, `About`,
`Résumé`, and a `.contact-link` `Let’s talk ↗`; `Menu` toggle button (`aria-controls="site-nav"`,
`aria-expanded="false"`).

**Hero** — `.availability` `Open to summer 2027 internships` (dot before it) · `h1` `Curious mind.` `<br>`
`Work <em>in progress.</em>` · `.hero-intro` `Hi, I’m Avery — a design student who likes turning everyday
questions into useful, thoughtful things.` · primary CTA `Explore my work ↓` (→ `#work`) · secondary CTA
`Meet the person behind it ↗` (→ the résumé page, out of scope).

**Notebook card** (`aside.notebook`, `aria-label="A few things about me"`) — `.notebook-top` `FIELD NOTES`
/ `VOL. 01 / 2026` · `h2` `Always asking` `<br>` `“what if?”` · three `.note-lines` rows:
`↳ Currently: studying interaction design`, `↳ Learning: to ask better questions`,
`↳ Outside class: sketchbooks & long walks` · `.stamp` `MADE WITH` `CURIOSITY` `✳`.

**Work** — `.section-number` `01 / SELECTED PROJECTS` · `h2` `A few things` `<br>` `I’ve <em>worked on.</em>`
· lede `Small projects, real questions.` `<br>` `Here’s the thinking behind the final screen.` ·
pills `All work` / `Coursework` / `Personal project` (`aria-pressed` true/false/false) · a visually hidden
`role="status" aria-live="polite"` line (`#project-status`).
Card 1 — `data-project="coursework"`, art alt *"Campus Path concept with a campus map and step-free route
screen"*, meta `Coursework · Interaction design · 2026`, `h3` `Finding your way, minus the guesswork ↗`,
blurb `A campus wayfinding concept that puts the next decision first. From field observations to a focused
mobile prototype.`
Card 2 — `data-project="personal"`, art alt *"Pantry Notes concept with a food-waste chart and a pantry item
card"*, meta `Personal project · Data storytelling · 2026`, `h3` `Making everyday waste visible ↗`,
blurb `A small data journal exploring what gets forgotten in the fridge, and what a gentler reminder could
look like.`

**About** — `.section-number` `02 / A LITTLE CONTEXT` · `h2` `Learning by` `<br>` `<em>making things.</em>` ·
`.about-copy` *"I’m a third-year interaction design student at Northbridge College. I’m drawn to the quiet
problems: confusing signs, overlooked details, and small moments that could be easier."* · a second
paragraph *"I like research that leaves the desk, prototypes that start a conversation, and teams where it’s
okay to say “I don’t know yet.” …"* · `ul.skill-list` (**5** chips): `Interview planning`, `Prototyping`,
`HTML & CSS`, `Figma`, `Data visualization`.

**Experience** — `.section-number` `03 / ALONG THE WAY` · `h2` `Inside &` `<br>` `<em>outside class.</em>` ·
link `Read my full résumé →` (pushed down with Bootstrap's `mt-4`) · `ol.timeline` (**3** rows, each
`.date` + `h3` + `p`): `2024–2027 · EXPECTED` / `BA, Interaction Design · Northbridge College` ·
`SUMMER 2026` / `Design intern · Common Ground Studio` · `2025–PRESENT` / `Volunteer · Student Design
Society`.

**Contact panel** — `.eyebrow` `04 / SAY HELLO` · `h2` `A good conversation` `<br>` `is a good <em>start.</em>`
· lede *"I’d love to hear about thoughtful teams, interesting projects and opportunities to learn."* ·
`.button.secondary` `avery@example.com ↗` (`mailto:`) · `.sample-notice` `Demo email address. Replace it
with your own before publishing.`

**Footer** — `Fieldnotes Student · A portfolio in progress.` · right side `Setup & writing guide` ·
`Template by Colorlib` · `.sample-notice` `Template demo: Avery Chen, education, experience and project
results are fictional sample content.`

## Behaviour the recreation must reproduce

Read from `assets/app.js` (1,494 B) — **five behaviours, no libraries, no observers, no timers**:

1. `document.documentElement.classList.add('js')` on load — the mobile menu's CSS is gated on `.js`
   (`.js .menu-toggle{display:block}`, `.js .site-nav:not(.open){display:none}`). *React does not need
   the class* (Deviation 13): render the toggle from the breakpoint alone.
2. **Menu toggle** — click toggles `.open` on `#site-nav` and mirrors `aria-expanded` (`"true"`/`"false"`);
   clicking any link inside closes it; **`Escape`** closes it *and returns focus to the toggle*.
3. **Filter pills** — the markup ships `.filters` with the **`hidden` attribute** and the script removes
   it (so a no-JS visitor never sees dead controls). A click sets `aria-pressed` on all three pills, hides
   every `[data-project]` card whose `data-project` does not match, and writes **`"N projects shown"`**
   (singular `"1 project shown"`) into `#project-status`. Measured: pressing `Personal project` leaves
   card 2 visible, card 1 `hidden`, status `1 project shown`.
4. **Print button** (`[data-print hidden]`, résumé page only) — revealed by the script; **out of scope**.
5. Nothing else: no reveal-on-scroll, no counters, no autoplay, no sticky header, no scroll spy, no
   `localStorage`.

CSS-level behaviour that must survive: `html { scroll-behavior: smooth; scroll-padding-top: 95px }` and
`@media (prefers-reduced-motion: reduce)` which forces `scroll-behavior: auto` and kills every transition
and animation.

## Data-attribute inventory (measured on the live page)

| attribute | element(s) | values |
| --- | --- | --- |
| `data-project` | the two `article.project-card` | `coursework`, `personal` |
| `data-filter` | the three filter buttons | `all`, `coursework`, `personal` |
| `aria-pressed` | the three filter buttons | `true` on `All work`, `false` on the other two |
| `aria-live="polite"` + `role="status"` | `#project-status` | empty until a pill is pressed |
| `aria-current="page"` | the nav item for the current page | `Résumé` on `resume.html` only |
| `aria-controls` / `aria-expanded` | `.menu-toggle` | `site-nav` / `false` → `true` |
| `hidden` | `.filters`, the two project cards when filtered out | — |
| `aria-hidden="true"` | every glyph `<span>` (`↗`, `↓`, `↳`, `✳`) and the brand monogram | — |
| `aria-label` | `aside.notebook` (`A few things about me`), `nav#site-nav` (`Main navigation`), `ul.skill-list` (`Skills and tools`), `.filters` (`Filter projects`) | — |

## Link and destination census (LT axis, measured 2026-10-25)

The preview is **five live pages**. Anchor arithmetic per page (all probed, all internal targets 200):

| page | anchors | dead `#` | notes |
| --- | ---: | ---: | --- |
| `index.html` | **16** | **0** | `#main` (skip) · `index.html` (brand) · `index.html#work` · `index.html#about` · `index.html#contact` · `#work` (hero CTA) · `resume.html` ×**3** · `campus-path.html` ×2 · `pantry-notes.html` ×2 · `setup.html` · `mailto:avery@example.com` · `https://colorlib.com/` |
| `resume.html` | 13 | 0 | + `avery-chen-resume.txt` (`download`, HTTP 200, 1,332 B) |
| `campus-path.html` | 11 | 0 | + `setup.html#case-study` |
| `pantry-notes.html` | 11 | 0 | + `setup.html#case-study`, `campus-path.html` |
| `setup.html` | 11 | 0 | + `https://colorlib.com/wp/student-portfolios/` and `https://colorlib.com/wp/cat/portfolio/` |
| **total** | **62** | **0** | every fragment resolves: `index.html` holds ids `main, site-nav, work, about, experience, contact, project-status`; `setup.html` holds `main, site-nav, case-study` |

**Zero dead `#` anywhere in this theme** — unusual for the corpus and worth preserving: every nav item
points at a real section (`index.html#work|#about|#contact`) or a real page (`resume.html`).

## Inner-page inventory (the four pages the recreation does **not** build)

The reference is a real multi-page site. Per the house precedent for portfolio/venue detail pages
("do not build the detail pages"), the recreation is one page; these pages are recorded because they are
the authority for copy the landing page abbreviates, and because the catalogue screenshot shows two of
them. All four answer 200.

* `resume.html` — `Résumé | Avery Chen` — `h1` `Avery Chen`, `.role` `Interaction design student ·
  Expected graduation 2027`, then `h2` **Education** / **Experience** (intern bullets ×3, volunteer) /
  **Selected projects** (both case studies, linked) / **Skills** / **Outside the studio**; a
  `Download sample résumé (.txt)` button and a `Print / Save as PDF` button revealed by JS. This is the
  page the landing page's `Résumé` nav item and "Read my full résumé →" link point to.
* `campus-path.html` — `Finding your way, minus the guesswork.` — `.case-hero` (back link, eyebrow,
  `h1`, lead, 4-cell `dl.case-facts`: *My role / Collaboration / Timeframe / Status*), the 900×590 art,
  then `h2` 01 **The question** · 02 **My part in the team** · 03 **What we noticed** ·
  `blockquote.pull-note` · 04 **From map-first to next-step-first** · 05 **What I would test next** ·
  06 **What I learned** · **Inside the project notebook** (2 cards) · `.next-project` strip.
* `pantry-notes.html` — same skeleton, six different `h2` (`02. A deliberately small dataset`,
  `03. My process`, `04. The design decision`, `05. What remains unresolved`, …), one `.pull-note`,
  and a `.next-project` pointing back at the wayfinding case.
* `setup.html` — the writing guide: `h1` *"Make the work your own."*, `h2` 1 **Start with the files** ·
  2 **Replace the sample identity** · 3 **Turn a project into a case study** · 4 **Add your own visuals** ·
  5 **Publish the portfolio** · **Before sharing your URL** · **License & credits** (the `#case-study`
  anchor lives in §3).

## Screenshot analysis (2400×1892 AVIF — a marketing composition, not a browser capture)

Sage ground `#e8ebe0`. Top-left, in the header type of the *catalogue*, the words
`COLORLIB · STUDENT PORTFOLIO TEMPLATE` (letterspaced, `#62675d`), the design name `Fieldnotes Student`
in ~64 px ink 600, and one line of positioning: *"Case studies, coursework, a résumé and a writing guide."*
Below, three rounded-corner "browser" windows with paper grounds (`#f6f5f0`) and a thin ink frame:

1. **The landing page** (large, left, from the header down to the work band's title) — confirms the tilt
   of the notebook card, the tape, the three note lines (`Currently: studying interaction design`,
   `Learning: to ask better questions`, `Outside class: sketchbooks & long walks`), the stamp
   `MADE WITH CURIOSITY`, the `01 / SELECTED PROJECTS` eyebrow, the italic `worked on.` and the
   right-aligned two-line lede.
2. **Project case study** (top right) — confirms `.case-hero` + the four `case-facts` cells in a row
   above the art.
3. **Printable résumé** (bottom right) — confirms the résumé's `h2`-per-section rhythm and the two
   stacked action buttons.

Because the ground is a marketing frame, **do not** adopt `#e8ebe0`, the letterspaced catalogue kicker or
the window frames into the app. They are the capture's chrome; the design is the paper inside.

## Class census (no phantom-class delta)

**61 distinct classes** across the five pages; **0** of them lack a rule (every class is either styled in
`style.css` or is one of **11 Bootstrap grid/utility classes**: `row`, `col-lg-8`, `col-lg-4`, `col-lg-5`,
`col-lg-7`, `col-md-6`, `g-4`, `g-lg-5`, `align-items-center`, `mt-4`, `visually-hidden`). The
stylesheet's own 50 local classes have **0 dead selectors**; only `js` and `open` are state classes toggled
by the script, and `woff2` is a false positive from the `@font-face` url. Practical consequence for the
recreation: the Tailwind port is a **1:1 rename**, not a redesign — anything you cannot map back to one of
those 61 classes is invented.

## Requirements

### Requirement 1: Page chrome and scrolling

The app SHALL render a skip link as the first focusable element, a single `.container` (max 1256 px, 12 px
inline padding → 22 px below 576) holding every band, and smooth in-page scrolling with a 95 px
scroll-padding so a jumped-to heading is never hidden under the viewport edge. It SHALL NOT mount a
preloader, cookie strip, scroll-progress bar, back-to-top control or sticky header — the reference has none.

#### Scenario: Visitor loads the page

- **GIVEN** a 1440 px viewport
- **WHEN** the document renders
- **THEN** the first `Tab` press focuses a white `Skip to content` link that is off-screen until focused
  (`top: -100px` → `10px`, `padding: 12px`, `z-index: 100`) and points at `#main`
- **AND** no overlay, spinner or transition covers the content at any point
- **AND** the page is fully readable with JavaScript disabled (filters excepted)

#### Scenario: In-page navigation

- **GIVEN** any viewport
- **WHEN** the visitor presses `Explore my work ↓` / a nav item
- **THEN** the document scrolls **smoothly** to `#work` / `#about` / `#experience` / `#contact`
- **AND** the target heading lands **95 px** below the top edge (`scroll-padding-top`)
- **AND** with `prefers-reduced-motion: reduce` the jump is instant

### Requirement 2: Header and mobile disclosure

The app SHALL render a **static** 78 px header (`padding: 22px 0`, 1 px `#d8dbcf` bottom border, paper
ground) with a circular 33 px monogram, the wordmark, and four nav items; below **576 px** it SHALL show a
`Menu` toggle that opens the nav in flow.

#### Scenario: Desktop header

- **GIVEN** a 1440 px viewport
- **WHEN** the header renders
- **THEN** the brand reads `‹a› Rowan Ellis` — the monogram is a **33 px circle, 1 px ink border, Georgia
  italic `r`, 18.08 px** — at `18.08px/700/-0.045em`
- **AND** the items `Work`, `About`, `Résumé` sit at `14.08px` ink with **34 px** gaps, no underline except
  the current page, and `Let’s talk ↗` carries a 1 px bottom border (`padding-bottom: 3px`)
- **AND** the header is `78 px` tall, `position: static`, and never overlaps content on scroll

#### Scenario: Header between 576 and 991 px

- **GIVEN** a 768 px viewport
- **WHEN** the header renders
- **THEN** all four nav items are still visible in one row (the reference only collapses at **575**)
- **AND** no item wraps or clips

#### Scenario: Mobile menu

- **GIVEN** a 390 px viewport
- **WHEN** the visitor presses `Menu`
- **THEN** the nav expands **in flow** under the header row as a 346 × 40 px strip (`gap: 22px`, links
  `min-height: 40px`, `flex-wrap: wrap`) and the toggle reports `aria-expanded="true"`
- **AND** pressing `Escape` closes it and moves focus back to the toggle
- **AND** choosing any link closes it
- **AND** the document width stays 390 px (no horizontal scroll)

### Requirement 3: Hero copy column

The app SHALL render the hero's left eight columns with an availability line, one `h1` (exactly one on the
page) whose second line is partly Georgia italic, a muted intro of max 440 px and two CTAs.

#### Scenario: Desktop hero (1440 px)

- **GIVEN** a 1440 px viewport
- **WHEN** the hero renders
- **THEN** `● Open to summer 2027 internships` is 12 px `#244b3b` with a **7 px dot**, 8 px gap, and
  32 px of space below it
- **AND** the `h1` reads `Curious mind.` / `Work in progress.` at **96.48 px / 102.27 px / −5.31 px,
  weight 600**, ink, max-width **760 px**, with **only** `in progress.` in Georgia italic 400
- **AND** the intro is `17.28px/30.24px` `#62675d`, max-width 440
- **AND** `Explore my work ↓` is a solid `#244b3b` 187 × 52 px button (white label, 3 px radius, 24 px
  label-to-glyph gap) and `Meet the person behind it ↗` is its outlined twin (green text, transparent)
- **AND** the pair sits 30 px below the intro with a 12 px gap and does not wrap at 1440

#### Scenario: Hero at 768 px

- **GIVEN** a 768 px viewport
- **WHEN** the hero renders
- **THEN** the `h1` is **51.46 px** and the intro may run to 600 px wide
- **AND** the copy column occupies the full row and the notebook card drops **below** it (Bootstrap's
  `lg` = 992 breakpoint), never beside it

#### Scenario: Hero at 390 px

- **GIVEN** a 390 px viewport
- **WHEN** the hero renders
- **THEN** the `h1` is **53.6 px** (the reference *raises* it from the 48 px clamp minimum) and wraps to
  three lines inside 346 px
- **AND** the two CTAs stack (two rows, 116 px total) and the hero's top padding is 40 px

### Requirement 4: The notebook card

The app SHALL render the hero's right four columns as a **tilted paper card**: sage ground, 3 px radius,
42/30 px padding, `rotate(2deg)`, a washi-tape strip straddling its top edge, a two-part micro-label, a
Georgia italic `h2`, three ruled note rows, and a circular stamp aligned right.

#### Scenario: Card rendering (1440 px)

- **GIVEN** a 1440 px viewport
- **WHEN** the hero renders
- **THEN** the aside measures **380 × 500 px** at x = 964 on a `#e5e8dc` ground, rotated `2deg`
  (measured matrix `0.999391 / 0.0348995`), with a 15 px left offset
- **AND** the tape is **130 × 28 px**, `#e6cf99` at **72 % alpha**, rotated `−6deg`, centred on the top
  edge (`top: -12px`) and overhanging the card
- **AND** the top row reads `FIELD NOTES` / `VOL. 01 / 2026` at 10.08 px, `0.12em`, uppercase, over a
  1 px `#b3baa7` rule with 15 px below it
- **AND** the `h2` is **48 px Georgia italic 400**, `-0.05em`, on two lines
- **AND** three note rows follow, each 12.8 px with 10 px block padding and a 1 px `#b3baa7` bottom rule,
  starting with the `↳` glyph
- **AND** the stamp is a **62 px** circle (bounding box 74 px because of the `−14deg` rotation), 1 px
  `#65785f` border, 9.92 px centred text on three lines, `margin-left: auto`

#### Scenario: Card on small screens

- **GIVEN** a 390 px viewport
- **WHEN** the card renders
- **THEN** it sits 35 px below the hero CTAs, **350 px** wide, rotated **1deg** (the tilt is softened),
  padded `30px 22px`, `min-height: 350px`, and the `h2` is 38.4 px
- **AND** it never overflows the 390 px viewport (`overflow-x: hidden` is **not** how this is achieved —
  the rotation is inside the container's padding)

### Requirement 5: Work band head

The app SHALL open the work band with the reference's split head: a counted eyebrow and a two-line `h2`
with an italic tail on the left, a right-aligned two-line lede on the right, baseline-aligned at the
bottom.

#### Scenario: Desktop head (1440 px)

- **GIVEN** a 1440 px viewport
- **WHEN** the band renders
- **THEN** `01 / SELECTED PROJECTS` is 11.84 px, `0.04em`, `#62675d`, 14 px above the `h2`
- **AND** the `h2` reads `A few things` / `I’ve worked on.` at **57.6 px / 61.06 px / −3.17 px, 600**,
  with only `worked on.` in Georgia italic
- **AND** the lede sits hard right, **max-width 320 px**, `14.4px/25.2px`, muted, its last line aligned
  to the `h2`'s last line (`align-items: end`)
- **AND** the head block is 36 px above the filter row

#### Scenario: Head at 390 px

- **GIVEN** a 390 px viewport
- **WHEN** the band renders
- **THEN** the head stacks (`display: block`): the `h2` at **32 px** first, then the lede 18 px below it,
  left-aligned
- **AND** the ruled top border of the band is visible at full container width

### Requirement 6: Filter pills and the live status

The app SHALL render three pills (`All work`, `Coursework`, `Personal project`) with `aria-pressed`
state, and SHALL filter the two project cards on press, announcing the result in a visually hidden
`role="status"` region.

#### Scenario: Default state

- **GIVEN** the work band has rendered
- **WHEN** the visitor looks at the pill row
- **THEN** three 42 px pills sit with an 8 px gap, 30 px radius, 1 px `#d8dbcf` border, 12.16 px ink text
- **AND** `All work` is the **only** filled pill (`#262923` ground, white text, ink border)
- **AND** both project cards are visible and the status region is empty
- **AND** in the recreation the row is **always visible** (the reference hides it until its script runs —
  Deviation 4)

#### Scenario: Filtering

- **GIVEN** both cards are visible
- **WHEN** the visitor presses `Personal project`
- **THEN** `aria-pressed` becomes `true` on that pill and `false` on the other two
- **AND** the coursework card unmounts/hides and only `Making everyday waste visible` remains
- **AND** the status region reads **`1 project shown`** (singular) and `2 projects shown` when `All work`
  is pressed again
- **AND** the press is keyboard-operable (`<button>`, visible focus ring)

### Requirement 7: Project cards

The app SHALL render the two project cards as a `md` two-up grid (one-up below 768), each with a
**900:590** art frame on a `#e9e8df` mat, an uppercase meta line, an `h3` with a right-aligned `↗`, and a
muted blurb.

#### Scenario: Desktop cards (1440 px)

- **GIVEN** a 1440 px viewport
- **WHEN** the work band renders
- **THEN** the cards are **628 px** wide in two columns with a 24 px gutter (`g-4`), art **604 × 396**
  (ratio **1.525**) with a 4 px radius
- **AND** the meta line is `14.4px/25.2px`, `0.06em`, uppercase, muted (`COURSEWORK · INTERACTION DESIGN ·
  2026`), 20 px below the art
- **AND** the `h3` is **25.6 px, 600, −1.408 px** ink, with the `↗` at the far right of the same 604 px
  measure (`display: flex; justify-content: space-between`)
- **AND** the blurb is `14.4px/25.2px` muted, max-width 490, 15 px below the title
- **AND** hovering the art scales it `1.025` over 0.25 s inside the clipped frame

#### Scenario: Cards at 390 px

- **GIVEN** a 390 px viewport
- **WHEN** the band renders
- **THEN** the cards are **370 px** wide, one per row, art **346 × 227**
- **AND** the `↗` stays on the title's line (it may wrap the title, never the glyph alone)

#### Scenario: The art itself

- **GIVEN** the cards have rendered
- **WHEN** the visitor inspects the artwork
- **THEN** each frame holds a **concept mockup, not a photograph**: card 1 on a sage `#e2e7dc` ground, card
  2 on a clay `#eedfcd` ground, both with a light `#f5f4ed` window bar, three `#c6cbbb` dots, and a phone
  mockup — card 1's route dashed `#527f61` (`5px`, `9 6`), card 2's bars `#244b3b` / `#e7ed92`
- **AND** both are **original inline SVG drawn from these tokens** (Deviation 6) with `role="img"` and an
  `aria-label`; no binary asset is added to the repo
- **AND** the two grounds differ — do not unify them into one tint

### Requirement 8: About band

The app SHALL render the about band as a 5/7 split: the counted eyebrow + two-line `h2` in the left five
columns, two paragraphs and five skill chips in the right seven.

#### Scenario: Desktop about (1440 px)

- **GIVEN** a 1440 px viewport
- **WHEN** the band renders
- **THEN** the left column is **533 px** and the right **747 px**, both starting at the band's 74 px top
  padding
- **AND** the `h2` reads `Learning by` / `making things.` at 57.6 px with `making things.` in Georgia italic
- **AND** the first paragraph is **17.92 px / 31.36 px**, ink, max-width 640; the second is 16 px muted-free
  body copy (see the sheet: only `.about-copy` is enlarged)
- **AND** five chips follow, each `5px 12px`, 12 px, 1 px `#d8dbcf`, 4 px radius, 8 px gap, wrapping

#### Scenario: About at 390 px

- **GIVEN** a 390 px viewport
- **WHEN** the band renders
- **THEN** the `h2` sits above the copy, full width
- **AND** the chips wrap to at least two rows with no chip clipped

### Requirement 9: Experience timeline

The app SHALL render the experience band as a 5/7 split whose right column is a `<ol>` of three rows,
each separated by a hairline, with a micro-caps date above a compact title and a muted body.

#### Scenario: Desktop timeline (1440 px)

- **GIVEN** a 1440 px viewport
- **WHEN** the band renders
- **THEN** the left column carries `03 / ALONG THE WAY`, the `h2` `Inside &` / `outside class.` (italic tail)
  and the link `Read my full résumé →` (green, underlined on hover) 24 px below
- **AND** each `li` has `padding: 23px 0` and a 1 px `#d8dbcf` **top** border (the first one included)
- **AND** the date is 11.52 px muted, the title **18.4 px / 600 / −0.02em** ink, the body 13.76 px muted
- **AND** the three rows read exactly as the reference's roles: degree (2024–2027, expected), internship
  (summer 2026), volunteer (2025–present)

#### Scenario: Timeline at 390 px

- **GIVEN** a 390 px viewport
- **WHEN** the band renders
- **THEN** the timeline is full width under the heading, rows keep their hairline separators and 23 px
  padding, and no date/title pair overlaps

### Requirement 10: Contact panel

The app SHALL render the contact band as a **highlighter-yellow inset panel** (not full-bleed) that is the
page's only saturated surface, with an eyebrow, a two-line `h2` (italic tail), a short lede, an outlined
email button and a sample notice.

#### Scenario: Desktop panel (1440 px)

- **GIVEN** a 1440 px viewport
- **WHEN** the panel renders
- **THEN** it measures **1232 × 467 px** at x = 104, ground **`#e7ed92`**, **4 px** radius, **55 px**
  padding, **65 px** bottom margin, and it has **no border and no shadow**
- **AND** `04 / SAY HELLO` is 11.52 px, `0.12em`, uppercase, `#62675d`, 25 px above the heading
- **AND** the `h2` reads `A good conversation` / `is a good start.` at **68.8 px / 72.93 px / −3.78 px**
  with `start.` in Georgia italic, max-width 650
- **AND** the lede is max-width 520 on the panel's own yellow
- **AND** the CTA is the **outlined** button (`transparent`, 1 px `#244b3b`, **green** label — the
  `.contact-panel a` ink colour loses to `.button.secondary`'s specificity, measured) carrying the email
  and a `↗`, wrapped in `mailto:`
- **AND** the sample notice reads as a 11.52 px muted line 19 px under the CTA

#### Scenario: Panel at 390 px

- **GIVEN** a 390 px viewport
- **WHEN** the panel renders
- **THEN** it is **346 px** wide with `30px 24px` padding, 4 px radius and a 40 px bottom margin
- **AND** the `h2` drops to **40 px** and the email button shrinks to 177 px, still on one line
- **AND** the panel's yellow does not bleed to the viewport edges (it keeps the 22 px container gutter)

### Requirement 11: Footer and attribution

The app SHALL render a hairline-topped footer with a left brand line, a right link row, and a sample-notice
line — and its attribution SHALL be **Component Dock**, not the source's.

#### Scenario: Footer rendering

- **GIVEN** any viewport
- **WHEN** the footer renders
- **THEN** it measures 106 px at 1440 (`padding: 25px 0 30px`, 1 px `#d8dbcf` top border) at 11.2 px
  `#62675d`
- **AND** the left line reads `<NewName> · A portfolio in progress.` and the right row holds a
  **`https://www.componentdock.com/`** link labelled for Component Dock
- **AND** the sample-notice line below states that the person, college, studio and projects are fictional
- **AND** no `colorlib` string, no "Template by Colorlib", no "Setup & writing guide" link survives in
  `apps/quarto` (source files, comments and data included)

#### Scenario: Footer at 390 px

- **GIVEN** a 390 px viewport
- **WHEN** the footer renders
- **THEN** the two rows wrap to two lines with an 18 px gap and nothing overflows

### Requirement 12: Responsive behaviour

The app SHALL reproduce the reference's three layout regimes — **≥992 px** (hero and both 5/7 splits side
by side), **576–991 px** (everything stacked, section padding 55 px, contact padding 35 px, nav still
inline), **≤575 px** (mobile menu, hero `h1` 53.6 px, section head block, one-up cards, 22 px gutters).

#### Scenario: Breakpoint table

- **GIVEN** the listed widths
- **WHEN** the page renders
- **THEN** these measured values hold (±2 px):

| viewport | `h1` | section `h2` | contact `h2` | hero columns | cards | header |
| --- | ---: | ---: | ---: | --- | --- | --- |
| 1440 | 96.48 | 57.6 | 68.8 | 853 / 427 | 628 × 2 | inline nav |
| 1280 | 85.76 | 51.2 | 64 | 853 / 427 | 628 × 2 | inline nav |
| 1024 | 68.61 | 40.96 | 51.2 | 699 / 349 | 512 × 2 | inline nav |
| 992 | 66.46 | 39.68 | 49.6 | 677 / 339 | 496 × 2 | inline nav |
| 768 | 51.46 | 32 | 40 | stacked | 384 × 2 | inline nav |
| 576 | 48 | 32 | 40 | stacked | 576 × 1 | inline nav |
| 390 | 53.6 | 32 | 40 | stacked | 370 × 1 | menu toggle |
| 360 | 53.6 | 32 | 40 | stacked | 340 × 1 | menu toggle |

#### Scenario: No horizontal scroll at any width

- **GIVEN** the 8 widths above
- **WHEN** the page renders
- **THEN** `document.documentElement.scrollWidth === clientWidth` at every one
- **AND** the tilted notebook card is the element most likely to break this — verify 360 and 390 first

### Requirement 13: Accessibility, motion and semantics

The app SHALL use semantic landmarks (`header`, `nav`, `main`, `section`, `aside`, `footer`), one `h1`, a
logical heading order, visible focus rings on every interactive element, and SHALL honour
`prefers-reduced-motion`.

#### Scenario: Focus visibility

- **GIVEN** any interactive element
- **WHEN** it is focused with `Tab`
- **THEN** a **3 px `#9d461d` outline at 5 px offset** appears (the reference's own ring, including on
  `<summary>`)
- **AND** no element suppresses the ring (`outline: none` without a replacement is a defect)

#### Scenario: Reduced motion

- **GIVEN** `prefers-reduced-motion: reduce`
- **WHEN** the page renders
- **THEN** `scroll-behavior` is `auto`, the art's hover scale is dropped and no transition or animation runs
- **AND** the filter press still works (state, not motion)

#### Scenario: Assistive-technology shape

- **GIVEN** a screen reader
- **WHEN** it walks the page
- **THEN** the notebook aside is announced as *"A few things about me"*, the skill list as *"Skills and
  tools"*, the pill row as *"Filter projects"*, and every decorative glyph is `aria-hidden`
- **AND** the filter result is announced through the polite live region, not by moving focus

### Requirement 14: Provenance isolation

The app SHALL contain no `colorlib` string (source, comments, data, README, CSS notes), SHALL carry the
new name in its package/CNAME/homepage, and SHALL put the source mapping only in this spec, `TEMPLATES.md`
and the PR.

#### Scenario: Provenance check

- **GIVEN** `apps/quarto` is complete
- **WHEN** `grep -ri 'colorlib\|fieldnotes' apps/quarto` runs
- **THEN** it prints nothing
- **AND** `apps/quarto/public/CNAME` and `package.json#homepage` are `quarto.free.componentdock.com`
- **AND** the footer links `https://www.componentdock.com/`

## Deliberate deviations from the reference

1. **Multi-page → single page.** The reference ships **five** live pages; the recreation builds the
   landing page only and folds nothing into it (the landing page is already content-complete). Nav maps
   `Work`→`#work`, `About`→`#about`, **`Résumé`→`#experience`**, `Let’s talk ↗`→`#contact`; the hero's
   "Meet the person behind it" and both project-card titles become **non-navigating** links (the
   destination pages are out of scope — house precedent for portfolio/detail pages). Their `↗` glyphs
   stay, because they are the design's typographic voice; make the anchors `href="#"` with the default
   prevented, or a `<button>` styled identically. Record the choice in the PR.
2. **The persona is replaced.** `Avery Chen` → a new fictional student, `Northbridge College` → a new
   fictional college, `Common Ground Studio` → a new fictional studio, `avery@example.com` →
   `rowan@example.com`. All sample notices stay, re-voiced, so a licensee still knows what to replace.
   This is the one place the recreation *must* differ in words: the name is a real person's demo identity.
3. **The résumé download and print button are not rebuilt.** `avery-chen-resume.txt` (1,332 B) and
   `[data-print]` belong to `resume.html`; neither exists in a one-page recreation. Do not ship a fake
   download.
4. **The filters are always visible.** The reference ships `.filters[hidden]` and removes the attribute in
   JS, so a no-JS visitor sees no dead controls. React renders the pills from the first paint — same
   visual result, one less flash.
5. **Inter is loaded from Google Fonts, not the preview's woff2.** The reference self-hosts one 48 KB
   variable file; the recreation links `Inter:wght@100..900` (verified 200) so no binary asset is copied.
6. **The two concept illustrations are redrawn, not copied.** They are 900×590 SVG mockups; the recreation
   authors **original inline SVG** from the recorded tokens (`#e2e7dc` / `#eedfcd` grounds, `#f5f4ed`
   chrome, `#c6cbbb` dots, `#527f61` route, `#244b3b` + `#e7ed92` bars) and labels them with `role="img"`.
   This is the "no copied assets" rule applied to *artwork*, not a licence to reuse the files; picsum
   photographs would destroy the design's diagrammatic character, so they are **not** used here.
7. **Georgia gets a fallback.** The reference names `Georgia, serif` only; Linux CI has no Georgia. Ship
   `Georgia, "Gelasio", "Times New Roman", serif` and load **Gelasio** (metric-compatible, Google Fonts
   200) so the italic tail keeps its width. Do not swap it for Inter italic.
8. **Attribution is replaced.** `Template by Colorlib` + the `Setup & writing guide` link become a
   **Component Dock** link (AGENTS.md rule 5). The `setup.html` page itself is not built, so its footer
   link goes with it.
9. **Light-only.** The reference has no dark mode, no `prefers-color-scheme` block and no `dark:` rule —
   unlike twelve of its Astro siblings. Do not add one; there are no dark tokens to record.
10. **Host chrome is dropped.** `<meta name="robots" content="noindex,nofollow">` (twice), the
    `dns-prefetch` to `cdnjs.cloudflare.com` (nothing is loaded from it) and the two
    `colorlib.com` round-up links on `setup.html` are demo-host furniture, not design.
11. **`html.js` gating is unnecessary.** The reference hides the mobile nav until `app.js` adds `.js`
    (anti-FOUC for a static site). React's CSS breakpoints do the same job with no class.
12. **`--cream` stays declared and unused.** It is in the reference's `:root` and referenced by zero
    rules; keep it in the token block to stay 1:1 (or drop it and note it — do not start using it).
13. **The `#work` hero anchor is preserved.** The reference's primary CTA is an in-page jump, so no
    scroll-spy or active state is needed; do not add one.

## Verification checklist

- [ ] `npm run spec:validate` passes for `openspec/specs/template-quarto/`
- [ ] `scripts/verify-app.sh quarto` green: typecheck, lint, 100 % coverage tests, build
- [ ] `npm install` at the repo root so `package-lock.json` registers the workspace
      (`grep -c "free-react-templates/quarto" package-lock.json` ≥ 1)
- [ ] `apps/quarto/public/CNAME` and `package.json#homepage` are `quarto.free.componentdock.com`
- [ ] `vite.config.ts` registers `injectUiSource()`; `react`/`react-dom` are `latest`
- [ ] No `colorlib` / `fieldnotes` / `avery` strings under `apps/quarto` (`grep -ri`, comments included)
- [ ] Footer links `https://www.componentdock.com/`
- [ ] **Exactly one `h1`**, 96.48 px at 1440 / 53.6 px at 390, weight **600**, letter-spacing `−0.055em`,
      with only the `in progress.` run in Georgia italic
- [ ] Palette is the seven-value sheet: paper `#f7f5ef`, ink `#262923`, muted `#62675d`, line `#d8dbcf`,
      green `#244b3b`, yellow `#e7ed92` (**contact panel only**), cream `#fffef8` (declared); hovers
      `#0e3020` / `#163a2a`; focus ring **`#9d461d` 3 px @ 5 px**
- [ ] Radii are 3 / 4 / 30 px + 50 % and **no element carries a box-shadow**
- [ ] Notebook card: `#e5e8dc`, 380 × 500 at 1440, `rotate(2deg)` (1deg at 390), tape `#e6cf99` @72 %
      −6deg 130 × 28, rules `#b3baa7`, stamp 62 px `#65785f` −14deg right-aligned
- [ ] Work band: counted eyebrow, italic-tail `h2`, right-aligned 320 px lede, **3 pills** with the ink
      active state, live status reading `1 project shown` / `2 projects shown`
- [ ] Two cards, art ratio **1.525**, mat `#e9e8df`, media `14.4px/0.06em/uppercase`, `h3` 25.6 px with the
      `↗` pushed right, blurbs max 490, hover scale 1.025
- [ ] About: 5/7 split, two paragraphs, **five** chips (12 px, 1 px `#d8dbcf`, 4 px radius)
- [ ] Experience: **three** hairline rows with 11.52 px dates / 18.4 px titles / 13.76 px bodies
- [ ] Contact panel: **inset** 1232 × 467, `#e7ed92`, 4 px radius, 55 px pad (30/24 at 390), `h2` 68.8 px,
      **outlined** button with green label, notice line
- [ ] Breakpoint table in Requirement 12 reproduced (±2 px) at 1440 / 1280 / 1024 / 992 / 768 / 576 /
      390 / 360, with `scrollWidth === clientWidth` at every width
- [ ] Nav collapses to the `Menu` toggle at **575**, not 767; Escape closes it and restores focus
- [ ] `scroll-behavior: smooth` + `scroll-padding-top: 95px`; reduced motion kills both
- [ ] Filter press is keyboard-operable and announced by the polite live region; glyphs `aria-hidden`
- [ ] The two concept illustrations are **original inline SVG** (no new binary assets in `apps/quarto/public`)
- [ ] `TEMPLATES.md` row added under `## Portfolio` between **Evans** and **Fplus**, heading re-counted
      (89 → 90), marker `[x]` set in the bookkeeping commit
- [ ] Deploy via `gh workflow run deploy-surge.yml -f app="quarto"`; then
      `curl -sI https://quarto.free.componentdock.com` returns 200
