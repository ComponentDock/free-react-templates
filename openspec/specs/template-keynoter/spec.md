# Template: Keynoter (Event / Conference)

## Purpose

Keynoter is a conference / event landing page in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free **"Summit"**
design, built under a DIFFERENT name (**Keynoter** — one lowercase word: the
person who delivers a keynote, the register the source itself is written in,
since its whole page is built around keynote speakers; single word,
kebab-case-safe, no collision with `apps/`, `openspec/specs/template-*`,
`docs/templates/`, any bold name in `TEMPLATES.md`, or any substring in the
repository: `git grep -il keynoter origin/main` = **0 hits**;
`git grep -ci keynoter origin/main` = **0**; and the name is not a ColorLib slug
— `colorlib.com/wp/template/keynoter/`, `preview.colorlib.com/theme/keynoter/`
and `preview.colorlib.com/theme/bootstrap/keynoter/` all return **404**) per the
monorepo naming mandate (never reuse the ColorLib source name), with the
monorepo stack: Vite (latest) · React 19 · Tailwind CSS 4 · TypeScript (strict).

- **Source slug**: `summit`
- **ColorLib page**: https://colorlib.com/wp/template/summit/
- **Live preview**: https://preview.colorlib.com/theme/summit/
  (HTTP 200, **22,465 B** HTML, sha256
  `f1d4f1ddb291be89e8e75bbd151c4fda3f0b7a2c67d86482c6a382017a912c09`; theme
  sheet `css/style.css` **33,880 B**, sha256
  `84fb598da79019a76e88432cf80ebb25c8e8e1d419c58460b440069fae00c0cf`; page
  script `js/main.js` **4,113 B**, sha256
  `cf62540b373c162d02d35e5b8f67da80feca7fefd40f2e8a4502bf103301af04`;
  `<title>` = **"The Summit Confference | Template"**, with the source's own
  "Confference" typo; Bootstrap 4 grid + jQuery 3.3.1 + Owl Carousel 2 +
  slicknav + `jquery.countdown` + `circle-progress`; **no `js/snippet.js`**).
  The slug-only path IS the live design: `theme/bootstrap/summit/` is **404**
  (9-byte body) and `theme/bb/summit/` is **404**, so there is no alias twin.
  `/downloads/free/summit.zip` is **404** (a 9-byte `text/plain` body), so the
  live preview is the only DOM/CSS reference and **there is no archive to
  cross-check** — every token below is measured from the live render.
- **Screenshot**:
  https://colorlib.com/wp/wp-content/uploads/sites/2/summit-free-template.jpg
  (served **AVIF** — a **58,772-byte** body behind a `.jpg` name, 1200×946
  decoded, converted with PIL and inspected: **top fold only** — the
  transparent absolute header over the magenta→indigo hero, the white 36px date
  kicker, the white 100px three-line "SUMMIT / CONFERENCE / 2019" headline, the
  venue line, the vertical dot rail at the right edge, and the first ~100px of
  the navy "Next Event" band. It does **not** show the speakers, workshop,
  "We will speak about", subscribe or footer bands — those were measured from
  the live render, which is why this spec carries a band table with geometry.)
- **Package**: `@free-react-templates/keynoter`
- **Deploy target**: `keynoter.free.componentdock.com`

### Why this row needs a fresh build (prep-stream context)

`grep -c 'wp/template/summit/' TEMPLATES.md` = **2** (line **1193** under
`## Business (365)` and line **1688** under `## Event (27)`, both
`- [x] **Summit**`) and both credit the **`summit`** app. But the `summit` app
recreates a DIFFERENT ColorLib design: its spec names **"Confer"**
(`https://colorlib.com/wp/template/confer/`, preview
`https://preview.colorlib.com/theme/confer/`), which owns its own three rows
(363, 949, 1671). So both Summit rows are a false `[x]` (bucket 2,
**APP-WRONG-DESIGN**, in `docs/row-multiplicity.md` §2; measured exclusive-copy
evidence `row-excl / spec-excl` = **1 / 52**, i.e. the shipped app's copy
matches Confer 52-to-1 and shares a single boilerplate phrase with Summit).
No spec in `openspec/specs/` names this slug today
(`git grep -l 'wp/template/summit/' origin/main -- openspec/specs` = **0**).

The prep stream writes documentation only: the implementer re-opens BOTH rows
`[x]` → `[ ]` on its `feat/template-keynoter` branch before building, then
marks them `[x]` with `https://keynoter.free.componentdock.com` after merge.
**Do not touch `apps/summit`** — it keeps recreating the design its own spec
names (Confer).

### Why the name is not the source name

"Summit" is the ColorLib wordmark: it is the `<title>` subject, the hero `h1`,
the logo image (`img/logo.png`, a 160×39 "The Summit / Conference" lockup) and
the copyright subject — and it is ALSO the folder name of an existing shipped
app in this monorepo, so it cannot be reused on either count (AGENTS.md rule 5).
The recreation renames the brand to **Keynoter** everywhere: header wordmark,
hero headline, footer, copyright line, `document.title`, meta description,
picsum seeds and the contact address. The word "summit" SHALL NOT appear in any
file under `apps/keynoter` (`git grep -i summit apps/keynoter` = 0 hits).

## Design reference (replication findings)

- **Original:** ColorLib "Summit" — a **conference / event** theme, one page
  plus four live inner pages (speakers, tickets, blog, contact) and a component
  sheet (`elements.html`). Signature look: a **transparent absolute header**
  floating on the hero with a **`linear-gradient(to right, #ff1a6b, #2a34d0)`
  at `opacity: .75`** wash behind it, a **976px full-bleed hero carousel** of
  four crowd photographs that are **pre-graded magenta→indigo** (the tint is
  baked into the JPEGs — corners of `img/slider/bg-1.jpg` measure `#D11053`
  left and `#323BBE` right, so there is **no CSS overlay on the hero itself**),
  a **white 36px date kicker**, a **100px / 100px-line-height / weight-900
  UPPERCASE white `h1`** over three lines, a 36px/700 venue line, and a
  **vertical rail of 11px ring dots** at `right: 65px`. Below it: a **241px navy
  (`#201D6D`) countdown band** with a 60px "Next Event" and four 60px/900
  countdown numerals; a white **speaker band** with three 362×412
  magenta/indigo-duotone portraits (radius 6px) and a 231×67 indigo button; a
  **784px split workshop band** (`#f3f3f3`) with a flush-left 612px photo and
  the text column starting at x = 720; a **six-card "We will speak about"
  grid** of 362×520 `#f5f5f5` cards (radius 6px) that flood with a
  `#FB3ABE → #F149E3` gradient on hover; a **519px photo subscribe band** with
  an 830×62 transparent bordered field and a 200×62 **green (`#4ACA59`)**
  button pinned `right: 63px`; and a **528px navy footer** of four 25% columns
  (headings 24px/900, list items 18px/400 at `opacity: .5`) over a copyright
  bar separated by a **1px `#F21E7D` rule**. Every surface is rounded to
  **6px** (buttons, cards, images, fields); the only fully round ring is the
  hero dot.
- **Preview DOM analyzed:** `https://preview.colorlib.com/theme/summit/` — the
  page has **6 `<section>` elements** (`search-bar-wrap`, `event-counter`,
  `speaker-section`, `workshop-section`, `speak-about`, `subscribe-form`) plus
  `header.header-section`, the non-semantic `div.hero-section` (the carousel),
  `footer.footer-section`, and the preloader `#preloder`; **6 `<img>`**
  (`logo.png`, `speaker-1..3.jpg`, `phone.png`, `envelop.png` — every band
  background is a `data-setbg` CSS background, not an `<img>`), **2 `<form>`**
  (search overlay + subscribe), **2 `<input>`**, **8 `<button>`**, **1 real
  `h1`** (the DOM shows 8 because Owl clones each of the 4 slides once),
  **3 `h3`** (the speaker names), **12 `h4`**, **5 `h2`** on the page proper.
- **Anchor census (measured on the live DOM, every `href` attributed):** the
  authored page holds **21** anchors — **2 `./index.html`** (the logo lockup
  and the "Home" item; `index.html` is byte-identical to the directory URL, so
  it is a no-op link, never a 404), **4 real in-theme pages**
  (`speakers.html`, `tickets.html`, `blog.html`, `contact.html`), **14 dead
  `href="#"`** (the **five header social glyphs** pinterest/facebook/twitter/
  dribbble/behance **plus the 55×55 search trigger**, the three band CTAs
  **ALL SPEAKERS**, **More Info**, **Buy Tickets**, and the **five footer
  social glyphs**) and **1 `https://colorlib.com`** credit in the copyright
  line. The live DOM reports **33** because slicknav clones the header
  (1 `slicknav_btn` + 5 nav + 5 social + 1 search = 12 unmeasurable 0×0
  clones). Nothing 404s.
- **Nav → destination map (measured):** Home → `index.html`; Speakers →
  `speakers.html`; Tickets → `tickets.html`; Blog → `blog.html`; Contact →
  `contact.html`. On a single-page build these become in-page anchors
  (delta 3 below), because the source's real sections live on other pages.
- **Inner-page probe (all statuses measured for this spec):**
  `index.html` **200** (22,465 B, byte-identical to the directory URL),
  `speakers.html` **200** (20,309 B — `hero-area` page banner + a "Special
  Guests" band of three cards + `call-to-area` "Save your spot today!" +
  `.speaker-section.speaker-all` "All Speakers" with **six** cards),
  `tickets.html` **200** (18,481 B — `hero-area` + `.tickets-table` with
  **three pricing tiers: One Day Pass `$190`, Full Pass `$290`, Investor Pack
  `$590`** + a `.hurry-up` band "Hurry up, save your spot!" carrying the
  second countdown `#countdown-2` in W/D/H/M/S), `blog.html` **200** (19,344 B
  — one featured article + five list items), `contact.html` **200** (14,334 B —
  `.contact-section` "Get in Touch" form + "Contact Info" block) and
  `elements.html` **200** (27,543 B — the component sheet: buttons, accordions,
  tabs, loaders, milestones). `about.html`, `single.html`, `services.html`,
  `gallery.html`, `pricing.html`, `schedule.html`, `speakers-grid.html` are all
  **404** (9-byte bodies). **A single-page recreation therefore has to convert
  four page links into in-page anchors — recorded as delta 3, and each inner
  page's content is inventoried in `docs/templates/keynoter/design-notes.md`
  so nothing is invented if a later multi-page pass wants it.**
- **Section order and measured geometry** (1440×900, all `data-setbg`
  backgrounds and lazy images forced, `document.documentElement.scrollHeight`
  **5,441px**; the height is stable across reloads — the only motion on the
  page is the hero fade and the countdown numerals, so these numbers are
  solid, not ±2%):

  | # | band (source class) | top | height | fill |
  |---|---|---|---|---|
  | 1 | `header.header-section` (absolute, overlays the hero) | 0 | **101** | transparent + `linear-gradient(to right, #ff1a6b, #2a34d0)` @ .75 behind the bar |
  | 2 | `div.hero-section` | 0 | **976** | pre-graded crowd photo per slide (`img/slider/bg-1..4.jpg`, `cover`, top centre) |
  | 3 | `section.event-counter` | 976 | **241** | `#201D6D`, `padding: 55px 0` |
  | 4 | `section.speaker-section.spad` | 1,217 | **978** | `#fff`, `padding: 85px 0 100px` |
  | 5 | `section.workshop-section` | 2,195 | **784** | `#f3f3f3`, `margin-bottom: 85px` |
  | 6 | `section.speak-about.spad` | 3,064 | **1,330** | `#fff`, `padding: 0 0 70px` |
  | 7 | `section.subscribe-form.set-bg.spad` | 4,394 | **519** | purple photo `img/subs-bg.jpg` (1920×525, flat `#5F5EDC`-ish), `padding: 85px 0 100px` |
  | 8 | `footer.footer-section` | 4,913 | **528** | `#201D6D`, `padding-top: 80px` (includes the 95px `copyright-area`) |

  Responsive heights (same order): at **390×844** — 101 / 702 / 526 / 2,147 /
  1,185 / 3,573 / 646 / 1,367, with `document.documentElement.scrollHeight`
  **10,232px** and `scrollWidth === clientWidth` (390), so **the source has no
  horizontal-overflow defect to inherit**.
- **Band geometry, measured (1440):**
  - **Header**: absolute, full width, **101px** tall (`padding: 30px 0 17px`),
    transparent content over the hero. Logo **160×39** at **x = 15** (a
    `container-fluid` 15px gutter), nav `<ul>` **541×54** at **x = 353**
    (logo + `margin-right: 178px`), five items **16px/900 UPPERCASE white**,
    `padding: 15px 24px`, `margin-right: -5px` (items butt together), the
    active item painted `#6063ED` with `border-radius: 4px` (hover uses the
    same fill via a `:after` fade, 0.2s). Social rail **383×55** at
    **x = 1,042**: five glyph links 18px white at `margin-left: 42px`, then the
    **55×55 `#6063ED` square** (`border-radius: 4px`) carrying the magnifier at
    **x = 1,370**, 15px from the edge.
  - **Hero**: carousel item **1440×976**, `padding-top: 320px`; the active
    slide's content column is 1,146 wide at **x = 147**; the date kicker
    (`span`) sits at **y = 320**, 36px/400 white, `margin-bottom: 10px`, with
    `sup` ordinals ("February 9<sup>TH</sup> - 15<sup>TH</sup> 2019"); the `h1`
    at **y = 384**, **100px / 100px / 900 / UPPERCASE white**,
    `margin-bottom: 12px`, three lines ("Summit / Conference / 2019"); the venue
    `h2` at **y = 696**, 36px/700 white. Dot rail **11×84** at
    **(1,364, 522)**: dots **11px** with a **3px ring**, `margin-bottom: 10px`,
    stacking vertically (`display: block`), white normally and
    **`#ff1a6b`** when active. Slide transition is Owl `fadeIn`/`fadeOut` with
    `smartSpeed: 1200`, `loop: true`, `autoplay: true`.
  - **Event counter**: 241px `#201D6D`, `padding: 55px 0`. Left 6-of-12:
    "Next Event" **60px/900 white** at y = 1,031 (`h2`), then the date
    **24px/400 white** at y = 1,114 whose time is a **16px white label on a
    `#F21E7D` fill**, `padding: 9px 11px 9px 15px`, `margin-left: 12px` (it
    wraps to a second line at 1440 and reads "August 25, 2019 / Starting @
    09:00 AM"). Right 6-of-12: four `.cd-item` inline-blocks starting at
    **x = 735**, `margin-right: 60px`, numeral **60px/900 white** over an
    **18px/400 white** unit label.
  - **Speakers**: `padding: 85px 0 100px` white. `.section-title` 72px tall with
    **88px** bottom margin; `h2` "Keynote Speakers" **60px/900 `#272727`**.
    Three `.speakers-about` cards **362 wide × 501 tall** at y = 1,462,
    `margin-bottom: 65px`: photo **362×412** (`border-radius: 6px`,
    `margin-bottom: 22px`) whose JPEG is **already duotone-graded** (corners of
    `speaker-1.jpg` measure `#F77AB4` left / `#8D8DE3` right — the tint is in
    the asset, not in CSS), then `h3` name **30px/900 `#272727`** with the role
    as a block `span` **18px/400**, `margin-top: 10px`. The band closes with a
    centred **231×67** indigo `.primary-btn` "ALL SPEAKERS".
  - **Workshop**: 784px `#f3f3f3`, `margin-bottom: 85px`. The photo is
    **absolute**, `left: 0; top: 0; height: 100%;
    width: calc(50% - 108px)` = **612×784** flush to the viewport edge; the text
    column is 6-of-12 **offset-lg-6** at **x = 720, 588 wide** with
    `padding-top: 185px` / `padding-bottom: 155px`, `margin-left/right: -15px`
    so it bleeds into the gutters. Content: `h4` "Workshops" **24px/700**, `h2`
    "Learn from the most talented people." **60px/700, line-height 72px**
    (measured two lines, 144px), body **18px/400 `#484848`**, then
    **More Info** (`.primary-btn`, `padding: 20px 43px`, `margin-right: 27px`,
    **200×67** indigo) and **Buy Tickets** (`padding: 20px 38px`, **206×67**,
    **`#4ACA59`** green).
  - **"We will speak about"**: `padding: 0 0 70px`, white. Section title 60px/900
    at y = 3,105. Six `.speak-text` cards in 3 columns: **362×520**,
    `background: #f5f5f5`, `padding: 34px 18px 40px 35px`,
    `border-radius: 6px`, `margin-bottom: 30px`; topic `h2` **36px/900,
    line-height 50px**, `margin-bottom: 198px` (it reserves the card's lower
    third for the byline); the byline `.speaker-name` is absolute at
    `left: 35px; bottom: 36px` — `h4` **24px/900 `#272727`** with the role as a
    block `span` at **18px/400**, `margin-top: 10px`. On hover a `::after`
    overlay fills the card with **`linear-gradient(to right, #FB3ABE,
    #F149E3)`** (`opacity: 0 → 1`, 0.4s) and every text turns white.
  - **Subscribe**: 519px, `img/subs-bg.jpg` cover (a purple office photo graded
    to ~`#5F5EDC`), `padding: 85px 0 100px`. The title `h2` "Never miss another
    seminar" **60px/900 white** but with **`margin-bottom: -60px`** (it sits on
    the paragraph's own top margin — the source's own negative-margin trick);
    body **18px white** at y = 4,579 with an **82px** bottom margin; the field
    is **830×62** at x = 147 — `border: 2px solid #F1F1F1`, `border-radius:
    6px`, transparent fill, **18px white** text, `padding-left: 35px`,
    placeholder **"Your E-main Address"** (the source's own typo) in white
    italic at `opacity: .35`; the **200×62** green (`.submit-btn`, `#4ACA59`)
    "subscribe" button is `position: absolute; top: 0; right: 63px` — it
    overlaps the field's right end (measured x = 1,030 against a field ending at
    977, i.e. a 53px gap).
  - **Footer**: 528px `#201D6D`, `padding-top: 80px`; four `col-lg-3` columns
    **294 wide** starting at x = 147, `padding-bottom: 70px`. Headings company /
    our events / "Usefull Links" (source typo) / contact are **24px/900 white**
    with **50px** bottom margin; list items **18px/400 white at `opacity: .5`**,
    `margin-bottom: 24px`. The contact column uses a pink (**`#D51E7B`**)
    placeholder glyph before the address and pink-tinted `phone.png` (11×20) and
    `envelop.png` (15×13) icons before the phone and mail lines, with the value
    in a 33px-indented **16px white `.5`** span. The `copyright-area` is 95px
    (`padding: 25px 0`) separated from the columns by a `::after`
    **`1px solid #F21E7D`** top rule; the line is **14px white at `opacity:
    .5`** with the social rail (five glyphs, `margin-right: 25px`) at
    x = 914–1,171 and "Terms and Conditions" floated right at x = 1,157.
- **Type rhythm (source, before section overrides):** `h1` 70px, `h2` 36px,
  `h3` 30px, `h4` 24px, all **`#111111` at weight 600**; `p` **16px/30px
  `#484848` weight 400**, `margin-bottom: 15px`. Section titles then override
  the `h2` to **60px/900 `#272727`** with 88px of bottom margin. The hero
  overrides the `h1` to **100px/100px/900 uppercase white**.
- **Font delivery (measured, not assumed):** the sheet declares
  `font-family: "Lato", sans-serif` once (line 16) and there is **no
  `<link rel="stylesheet" href="fonts.googleapis…">` and no `@font-face` in any
  of the theme's own CSS files**. The preview HOST injects a `<style>` with
  self-hosted **Lato 100/300/400/700/900** faces (`/cf-fonts/s/lato/5.2.7/…`),
  which `[...document.fonts]` confirms (`Lato:400`, `Lato:700`, `Lato:900`
  loaded; 100/300 unloaded). A machine without either (this container has no
  Lato in fontconfig) would fall back to the UA sans. The recreation SHALL ship
  **Lato** itself: `https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&display=swap`
  → **HTTP 200** with a browser UA (the bare `css2?family=Lato` family URL is
  also 200, verified).
- **Sibling comparison:** the conference/event neighbours in ColorLib are
  **Confer** (`theme/confer/`, the design `apps/summit` actually builds — a
  different, lighter palette), the `event`/`conference` family, and this design.
  Summit is the *duotone* one: it is the only sibling whose hero, portraits and
  subscribe photo are all colour-graded magenta→indigo, which is the single
  visual signature to protect. Its icon set is Font Awesome 4 + Flaticon (via
  `flaticon.css`), not an SVG library.

### Source defects and documented deltas (do not copy these)

1. **The countdown renders `00`.** `js/main.js` targets
   `$("#countdown").countdown("2019/12/25", …)` — a date in the past — so the
   live page shows **00 Days / 00 Hours / 00 Minutes / 00 Seconds** even though
   the static markup carries 56/12/40/52. The recreation SHALL render a real
   ticking countdown to a future date (fixed target > 1 day ahead at build
   time, e.g. derived from a constant `NEXT_EVENT` date), not a frozen zero —
   and the spec's units SHALL stay Days/Hours/Minutes/Seconds.
2. **The date kicker and the "Next Event" date disagree** ("February 9–15,
   2019" in the hero vs "August 25, 2019" in the counter). The recreation keeps
   both bands but aligns them on one event identity (hero: "February 9–15,
   2027", counter: the same range) so the page does not contradict itself.
3. **Four nav items point at separate pages** that a single-page build does not
   have. The recreation SHALL convert them into in-page anchors with real
   targets (`#speakers`, `#workshop`, `#talks`, `#contact`) — no `href="#"` and
   no 404 — and the newsletter/footer CTA links likewise resolve to sections.
4. **Fourteen dead `href="#"` anchors** (the ten social glyphs, the search
   trigger, and the three CTAs). The recreation turns the social glyphs into
   labelled `aria-label` links to `#`-free placeholders (or `<button>`s for the
   search trigger) and the three CTAs into real in-page targets.
5. **The subscribe button overlaps the field** (`right: 63px`, field ends 53px
   earlier) — at 1440 that is a 53px gap, but at 992–1199 the field shrinks to
   650px while the button stays pinned, and below 767 the button drops under
   the field. The recreation SHALL lay the pair out with flex (`gap`) so the
   field and the button never overlap or clip at any width.
6. **The hero photos and the speaker portraits are pre-graded** in the source
   JPEGs (magenta left → indigo right). The recreation must NOT copy them; it
   SHALL use neutral picsum photos under a
   `linear-gradient(to right, #ff1a6b, #2a34d0)` overlay at ~`.75` (the same
   token the header uses) so the duotone reads the same on every slide.
7. **`Usefull Links` / `E-main Address` / "The Summit Confference"** are the
   source's own typos. The recreation fixes the copy ("Usefull Links" → "Useful
   Links", "Your E-main Address" → "Your E-mail Address", a clean `<title>`),
   which is a deliberate, documented
   improvement, not a fidelity gap.
8. **The `h4` inside the footer/contact widgets is the only heading level for
   column titles**, and the page's single real `h1` is inside a cloned carousel
   item. The recreation SHALL keep exactly **one `h1`** (the hero headline in
   the active slide) and render every other slide's headline as a non-heading
   element (`p`/`span`) so the outline is valid.
9. **Section titles are `h2` at 60px while the talk cards' topic titles are also
   `h2` at 36px** — 6 sibling `h2`s under one section heading. The recreation
   SHALL demote the talk topics to `h3` (visual size unchanged) to keep a
   coherent outline.
10. **The preloader is a full-screen black overlay** with a 40px red
    (`#f44336`) spinner that fades 400ms after `load`. The recreation keeps the
    look but MUST NOT trap the page when assets have already loaded (no black
    flash for a hydrated document, no `position: fixed` blocker left behind).

## Design tokens (from preview `css/style.css` + live computed styles)

- **Fonts:** **Lato** only, 3 weights used — body **400**, workshop heading and
  venue **700**, everything emphatic (hero `h1`, section `h2`, nav items,
  buttons, countdown numerals, speaker names, footer headings) **900**. The
  source sheet declares the family once and ships no faces; the preview host
  injects self-hosted Lato from `/cf-fonts/`. The app SHALL load Lato
  **400/700/900** from Google Fonts with the verified URL
  `https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&display=swap`
  (HTTP 200) and declare `font-family: "Lato", system-ui, sans-serif`.
- **Brand indigo (primary):** **`#6063ED`** — **14** declarations: every
  `.primary-btn` fill, the active/hover nav pill, the search square, the mobile
  drawer accents. Measured on the live bar as `rgb(96, 99, 237)`.
- **Navy (band):** **`#201D6D`** — 2 declarations, the `event-counter` and the
  `footer-section`; the page's two dark anchors.
- **Green (action):** **`#4ACA59`** — 8 declarations: the subscribe
  `.submit-btn`, the workshop "Buy Tickets", the "green" element-page button.
- **Hot pink (accent):** **`#F21E7D`** — 4 declarations: the counter's time
  pill, the footer copyright rule, the ticket-table accents.
- **Gradient stops:** hero/header wash **`#ff1a6b` → `#2a34d0`** (3 + 2
  declarations, `to right`, `.75` on the header); card hover flood
  **`#FB3ABE` → `#F149E3`** (6 + 6 declarations, `to right`, 0.4s).
- **Text:** headings **`#111111`** (base) and **`#272727`** (all themed
  headings, 17 declarations); body **`#484848`** (9 declarations, 16px/30px);
  white on dark bands.
- **Surfaces:** **`#fff`** (53 declarations — page, section titles, cards'
  parent), **`#f5f5f5`** (4 — the talk cards), **`#f3f3f3`** (3 — the workshop
  band), **`#F1F1F1`** (the subscribe field's 2px border).
- **Chrome-only neutrals (not `@theme` material):** **`#073B4C`** (search
  overlay), **`#233EDE`** (search submit), **`#D51E7B`** (contact glyphs),
  **`#f44336`** (preloader spinner), **`#6467ED`**, **`#060a0f`**, **`#111`**,
  **`#333`**, **`#ddd`**, **`#000`** (preloader). The landing page paints no
  `#f44336`/`#6467ED`/`#060a0f` surface, so they SHALL NOT enter `@theme`.
- **Radii:** **`border-radius: 6px`** on `.primary-btn`, `.submit-btn`, the
  speaker photo, `.speak-text` and the subscribe field; **`4px`** on the nav
  pill and the search square; **`50%`** only on the 11px hero dot; the
  `slicknav` mobile bar is square. No card shadows anywhere (the sheet's only
  shadow is the source's own mobile drawer).
- **Buttons:** `.primary-btn` = `font-size: 18px`, `font-weight: 900`,
  `padding: 20px 45px`, `letter-spacing: 1.5px`, `text-transform: uppercase`,
  white on `#6063ED`, radius 6px (measured 231×67 for "ALL SPEAKERS", 200×67 /
  206×67 in the workshop); `.submit-btn` = **200×62**, 18px/900, 1.6px
  letterspacing, uppercase, white on `#4ACA59`, radius 6px.
- **Spacing rhythm:** `.spad` = `padding: 100px 0`; speaker band
  `85px 0 100px`; workshop `margin-bottom: 85px` with text `185px 0 155px`;
  speak band `0 0 70px`; subscribe `85px 0 100px`; footer `80px` top +
  `70px` column bottom + `25px 0` copyright; container **1,140px** with two
  deliberately full-bleed blocks (hero, workshop photo).
- **Motion:** hero fade **1.2s** (`smartSpeed`) with 0.5s in/out; nav hover
  pill **0.2s**; speak-card flood **0.4s**; search overlay **0.3s**;
  preloader **400ms** fade-out after `load`; countdown ticks at 1s. No AOS,
  no parallax, no scroll-reveal on this design.

## Requirements

### Requirement: Page shell, preloader and document head

The app SHALL render a single-page conference site whose bands appear in the
source's order — header (absolute, over the hero), hero carousel, event
counter, keynote speakers, workshop, "we will speak about", subscribe, footer
(with its copyright bar) — inside a document whose `<title>` is a Keynoter
string ("Keynoter — Conference Template") and whose meta description is a
Keynoter sentence. A full-screen preloader painted **`#000`** with a **40px**
spinner SHALL cover the document until the assets are ready and fade out within
**400ms**, and it SHALL never survive a completed document.

#### Scenario: Bands render in source order

- **GIVEN** Keynoter is rendered at 1440px
- **WHEN** the page loads
- **THEN** the bands SHALL appear in the order header → hero → counter → speakers → workshop → talks → subscribe → footer
- **AND** the header SHALL be absolutely positioned over the hero, not stacked above it
- **AND** the document height SHALL be close to the reference's 5,441px (accept ±3% for placeholder aspect differences)

#### Scenario: Preloader never traps the page

- **GIVEN** the document has already finished loading
- **WHEN** the app mounts
- **THEN** the preloader SHALL be absent (or removed) on the first painted frame
- **AND** the hero headline SHALL be readable without waiting for a timer

### Requirement: Gradient header over the hero

A **101px** transparent header SHALL float on the hero (`position: absolute`,
full width, `padding: 30px 0 17px`) carrying a `linear-gradient(to right,
#ff1a6b, #2a34d0)` wash at **`opacity: .75`** behind its own bar, and on one row:
a **160×39** wordmark at the left gutter (15px), five **16px / weight 900
UPPERCASE white** nav items (Home, Speakers, Tickets, Blog, Contact) at
`padding: 15px 24px` with the active item painted **`#6063ED`** at
`border-radius: 4px`, and at the right a rail of **five 18px white social
glyphs** followed by a **55×55 `#6063ED` square** (radius 4px) holding the
search control.

#### Scenario: Bar composition at 1440

- **GIVEN** the page is rendered at 1440px
- **WHEN** the header is measured
- **THEN** the bar SHALL be 101px tall with the wordmark at x = 15 and the nav list beginning at x ≈ 353
- **AND** the five nav items SHALL measure ≈ 97–128px each and total ≈ 541px
- **AND** the search square SHALL measure 55×55 and sit ≈ 15px from the right edge
- **AND** the active item SHALL be the only one with the `#6063ED` fill

#### Scenario: Nav becomes in-page anchors

- **GIVEN** the single-page build
- **WHEN** a nav item is activated
- **THEN** it SHALL scroll to a real section (`#speakers`, `#workshops`, `#talks`, `#contact`)
- **AND** no nav item SHALL carry `href="#"` or point at a non-existent route

### Requirement: Mobile header with a drawer

At **≤767px** the nav row SHALL be replaced by a bar with the wordmark and a
labelled menu button (the source's slicknav "MENU ☰" pattern) that opens a
full-width drawer listing the five nav items and the five social glyphs, and
the header SHALL remain readable over the hero.

#### Scenario: Drawer behaviour at 390

- **GIVEN** a 390×844 viewport
- **WHEN** the menu button is pressed
- **THEN** the drawer SHALL open with the five nav items as full-width rows
- **AND** the button SHALL expose `aria-expanded` and the drawer SHALL close on Escape and on item activation
- **AND** the page SHALL NOT scroll horizontally while the drawer is open

### Requirement: Search overlay

A fixed full-screen overlay painted **`#073B4C`** SHALL stay hidden until the
search control is activated, then fade in over **0.3s** with a centred
`max-width: 500px` panel holding an uppercase "Search" heading, a text field
(≈ 399px wide at desktop, `1px solid #ddd`, white fill, dark text) and a
**100×50** `#233EDE` submit button, plus a close control at the top-right
corner.

#### Scenario: Open, type, close

- **GIVEN** the page is rendered
- **WHEN** the search trigger is activated
- **THEN** the overlay SHALL become visible (`opacity: 1`, `visibility: visible`) and the field SHALL receive focus
- **AND** submitting an empty query SHALL do nothing harmful (no navigation, no error state)
- **AND** the close control SHALL hide the overlay and clear the field

### Requirement: Hero carousel (976px duotone band, 100px headline, vertical dots)

A **976px** full-bleed carousel SHALL cycle four slides, each a neutral photo
under a `linear-gradient(to right, #ff1a6b, #2a34d0)` wash at ≈`.75`, and each
carrying, in a 1,146px column inset 147px from the left and starting 320px from
the top: a **36px / weight 400 white** date kicker with superscript ordinals, the
page's single `h1` at **100px / 100px line-height / weight 900 UPPERCASE white**
over three lines, and a **36px / weight 700 white** venue line. A vertical rail
of **11px ring dots** (3px border, white / `#ff1a6b` active, 10px apart) SHALL sit
at `right: 65px`, vertically centred in the hero.

#### Scenario: Hero composition at 1440

- **GIVEN** the page is rendered at 1440px
- **WHEN** the hero is measured
- **THEN** the band SHALL be 976px tall with the kicker at y ≈ 320, the `h1` at y ≈ 384 (300px tall) and the venue line at y ≈ 696
- **AND** the kicker, `h1` and venue line SHALL all be left-aligned at x ≈ 147
- **AND** there SHALL be exactly one `h1` in the document

#### Scenario: Slides advance without stealing focus

- **GIVEN** the carousel is autoplaying
- **WHEN** 1.2s elapse per slide
- **THEN** the four slides SHALL rotate in order with a fade and the active dot SHALL track the slide
- **AND** the carousel SHALL pause on hover and under `prefers-reduced-motion`, offering dot controls to change slides manually

#### Scenario: Non-active slides are not headings

- **GIVEN** four slides rendered in the DOM
- **WHEN** the accessibility tree is inspected
- **THEN** only the active slide's headline SHALL be a heading element
- **AND** the inactive slides SHALL expose their copy as plain text (hidden from the tree) so the outline stays valid

### Requirement: Next Event countdown band

A **241px** band painted **`#201D6D`** (`padding: 55px 0`) SHALL hold, on the
left, the `h2` "Next Event" at **60px / weight 900 white** over the event date
at **24px / weight 400 white** whose start time is a **16px white label on a
`#F21E7D` fill** (`padding: 9px 11px 9px 15px`, `margin-left: 12px`), and on the
right four countdown cells (Days, Hours, Minutes, Seconds) with **60px / weight
900 white** numerals over **18px / weight 400 white** labels, 60px apart.

#### Scenario: Counter renders live values

- **GIVEN** the band is rendered
- **WHEN** the visitor loads the page
- **THEN** the four cells SHALL show a real time remaining to a future event date, not zeros
- **AND** the Seconds cell SHALL decrease every second without a layout shift

#### Scenario: Counter steps down on small screens

- **GIVEN** a 390px viewport
- **WHEN** the band is measured
- **THEN** the event name and the counter SHALL be centred and stacked
- **AND** the `h2` SHALL step to 55px and the four cells SHALL remain on one row without overflowing

### Requirement: Keynote speakers band

A white band (`padding: 85px 0 100px`) SHALL open with the `h2` "Keynote
Speakers" at **60px / weight 900 `#272727`** with **88px** of bottom margin, then
show **three** speaker cards **362** wide with a **362×412** portrait graded
magenta→indigo (`border-radius: 6px`, 22px bottom margin) and the name at
**30px / weight 900 `#272727`** over a role at **18px / weight 400**
(`margin-top: 10px`), and close with a centred **231×67** indigo `.primary-btn`
reading "ALL SPEAKERS" that links to the talk section.

#### Scenario: Three cards, distinct people

- **GIVEN** the band is rendered at 1440px
- **WHEN** the cards are counted
- **THEN** there SHALL be exactly three cards in one row, each ≈ 362px wide with a 412px portrait
- **AND** the three names AND the three roles SHALL be distinct (the source repeats "Jessica Doe" twice — fix that)
- **AND** the portraits SHALL carry the duotone wash, not the source JPEGs

### Requirement: Workshop split band

A **784px** band (`#f3f3f3`, 85px bottom margin) SHALL place a photo flush to
the left viewport edge at **`calc(50% - 108px)`** wide (612px at 1440) and full
band height, and a text column at **x = 720** (588px wide, inset `185px` top /
`155px` bottom) containing the `h4` "Workshops" at **24px / weight 700**, the
`h2` "Learn from the most talented people." at **60px / weight 700 / 72px
line-height**, an 18px paragraph, and two buttons: **More Info** (indigo,
`padding: 20px 43px`, 27px gap) and **Buy Tickets** (**`#4ACA59`**, `padding:
20px 38px`).

#### Scenario: Split geometry at 1440

- **GIVEN** the page is rendered at 1440px
- **WHEN** the band is measured
- **THEN** the band SHALL be 784px tall with the photo 612px wide starting at x = 0
- **AND** the text column SHALL start at x = 720 and be 588px wide
- **AND** the two buttons SHALL be 67px tall and 27px apart

#### Scenario: Split collapses on small screens

- **GIVEN** a ≤767px viewport
- **WHEN** the band is rendered
- **THEN** the photo SHALL stack above the text at full width (≈500px tall)
- **AND** the text padding SHALL reduce to 100px top and the `h2` SHALL step to 53px (35px at ≤479)

### Requirement: "We will speak about" talk grid

A white band (`padding: 0 0 70px`) SHALL show the `h2` "We will speak about" at
**60px / weight 900** and then **six** talk cards in a 3-column grid — each
**362×520**, `#f5f5f5`, `padding: 34px 18px 40px 35px`,
`border-radius: 6px`, 30px bottom margin — with the topic at **36px / weight
900 / 50px line-height** (198px bottom margin) and a byline pinned
`left: 35px; bottom: 36px` (name **24px / weight 900**, role **18px / weight
400**). On hover or keyboard focus the card SHALL flood with a
`linear-gradient(to right, #FB3ABE, #F149E3)` overlay in **0.4s** and every
text inside SHALL turn white.

#### Scenario: Six cards, three columns

- **GIVEN** the band is rendered at 1440px
- **WHEN** the cards are counted
- **THEN** there SHALL be six cards in two rows of three, each 520px tall
- **AND** each card SHALL show a distinct topic and a speaker byline

#### Scenario: Hover and focus flood

- **GIVEN** a talk card
- **WHEN** the pointer enters it or it receives keyboard focus
- **THEN** the pink→violet gradient overlay SHALL fade to full opacity over 0.4s
- **AND** the topic and byline SHALL render white, reverting on leave/blur

#### Scenario: Grid reflows

- **GIVEN** a ≤991px viewport
- **WHEN** the grid is rendered
- **THEN** it SHALL drop to two columns, and to one column at ≤767 with each card keeping its 520px height

### Requirement: Subscribe band

A **519px** band over a purple photo (`cover`) SHALL carry the `h2` "Never miss
another seminar" at **60px / weight 900 white**, an 18px white paragraph with an
**82px** bottom margin, and a form row of an **830×62** transparent field
(`2px solid #F1F1F1`, radius 6px, 18px white text, 35px left padding, white
italic placeholder at `opacity: .35`) and a **200×62** `#4ACA59` uppercase
submit button, the two laid out without overlap.

#### Scenario: Valid submission

- **GIVEN** the form is rendered
- **WHEN** a valid address is submitted
- **THEN** the field SHALL clear and an `aria-live` region SHALL announce success
- **AND** no network request SHALL be made

#### Scenario: Invalid address

- **GIVEN** the form is rendered
- **WHEN** an invalid or empty address is submitted
- **THEN** the field SHALL be marked `aria-invalid` with an inline error and the focus SHALL stay in the field
- **AND** the layout SHALL keep the field and the button side by side at ≥768px and stacked below that

### Requirement: Footer with the Component Dock attribution

A **528px** footer painted **`#201D6D`** (`padding-top: 80px`) SHALL show four
equal columns — Company, Our Events, Useful Links, Contact — with headings at
**24px / weight 900 white** (50px bottom margin) and items at **18px / weight
400 white at `opacity: .5`** (24px apart), the Contact column using pink
(`#D51E7B`) glyphs and a 33px indent for its values. A **1px `#F21E7D`** rule
SHALL separate the columns from a **95px** copyright bar (`padding: 25px 0`)
whose line is **14px white at `opacity: .5`** with a rendered year, a centred
social rail of five glyphs (25px apart) and "Terms and Conditions" at the right.

#### Scenario: Footer composition

- **GIVEN** the page is rendered at 1440px
- **WHEN** the footer is measured
- **THEN** four columns ≈ 294px wide SHALL start at x ≈ 147 with 50px between heading and list
- **AND** the copyright bar SHALL sit behind a 1px `#F21E7D` top rule with the social rail preceding the terms line
- **AND** the copyright region SHALL link https://www.componentdock.com/ as "Component Dock"

#### Scenario: No source-brand leakage

- **GIVEN** the built app
- **WHEN** `git grep -i colorlib apps/keynoter` and `git grep -i summit apps/keynoter` run
- **THEN** both SHALL return zero hits
- **AND** the deploy target SHALL be `keynoter.free.componentdock.com` in `public/CNAME` and `homepage`

## Verification checklist

- [x] `openspec/specs/template-keynoter/spec.md` is this file; `npm run spec:validate` passes.
- [x] `apps/keynoter` exists with `package.json` name `@free-react-templates/keynoter`, `react`/`react-dom` set to `latest` (no exact pin), `public/CNAME` = `keynoter.free.componentdock.com`, `homepage` = `https://keynoter.free.componentdock.com`.
- [x] `vite.config.ts` registers `injectUiSource()`; `src/index.css` puts the palette in `@theme` (`--color-brand: #6063ed`, `--color-navy: #201d6d`, `--color-action: #4aca59`, `--color-pink: #f21e7d`, `--color-hero-start: #ff1a6b`, `--color-hero-end: #2a34d0`, `--color-card: #f5f5f5`, `--color-band: #f3f3f3`, `--color-ink: #272727`, `--color-body: #484848`, `--color-page: #ffffff`).
- [x] Lato 400/700/900 loaded through one Google Fonts `<link>` (`css2?family=Lato:wght@400;700;900&display=swap`, verified HTTP 200); the source ships no webfont of its own.
- [x] Section order and measured 1440 heights match the eight-row band table (101 / 976 / 241 / 978 / 784 / 1,330 / 519 / 528; document ≈5,441px ±3%).
- [x] Header: 101px, absolute over the hero, `linear-gradient(to right, #ff1a6b, #2a34d0)` at .75 behind the bar, 160×39 wordmark at x = 15, five 16px/900 uppercase nav items with the active pill `#6063ED` at 4px radius, five social glyphs and a 55×55 `#6063ED` search square 15px from the right edge.
- [x] All four nav items are in-page anchors with real targets (`#speakers`, `#workshops`, `#talks`, `#contact`); no `href="#"` anywhere in the app and no link to a missing route.
- [x] Mobile ≤767: wordmark + labelled menu button with `aria-expanded`, full-width drawer of the five items and five social glyphs, Escape closes it, no horizontal scroll.
- [x] Search overlay: fixed `#073B4C`, 0.3s fade, centred 500px panel, ~399px `1px #ddd` field, 100×50 `#233EDE` submit, close control at the top-right, focus moved in and returned on close.
- [x] Hero: 976px band, four distinct photos each under a `#ff1a6b → #2a34d0` wash at ≈.75, kicker at y ≈ 320 (36px/400 white with superscript ordinals), the page's single `h1` at 100px/100/900 uppercase white, venue line 36px/700, vertical 11px dot rail (3px ring, white / `#ff1a6b`) at `right: 65px`.
- [x] Hero autoplay 1.2s per slide, pause on hover, dot controls switch slides, inactive slide copy is not exposed as headings, `prefers-reduced-motion` stops the rotation.
- [x] Hero steps down: 60px/66 at ≤767 with `padding: 200px 0 150px`, 40px/50 at ≤479, dots move to `right: 35px` (20px at ≤479).
- [x] Counter band: 241px `#201D6D`, 60px/900 "Next Event", date 24px/400 with a 16px white-on-`#F21E7D` time pill, four 60px/900 numerals with 18px labels 60px apart.
- [x] Counter shows a REAL countdown to a future date and ticks every second (the source's 2019 target renders 00 — do not copy that).
- [x] Speakers: 60px/900 section title with 88px bottom margin, three 362px cards with 362×412 duotone portraits (6px radius), 30px/900 names with 18px/400 roles, three DISTINCT names and roles, centred 231×67 "ALL SPEAKERS" indigo button.
- [x] Workshop: 784px `#f3f3f3`, flush-left photo 612px wide (full band height), text column 588px at x = 720 with 24px/700 `h4`, 60px/700/72 `h2`, 18px paragraph, indigo More Info (200×67) + green Buy Tickets (206×67) 27px apart.
- [x] Workshop stacks ≤767 with a 500px photo, 100px text top padding and a 53px/35px heading; buttons keep 67px height and do not overflow at 390.
- [x] Talks: six 362×520 `#f5f5f5` cards (6px radius, 34/18/40/35 padding), topics 36px/900/50 with 198px bottom margin, bylines pinned at the card's bottom-left, hover/focus flood `#FB3ABE → #F149E3` in 0.4s with white text.
- [x] Talks reflow to two columns at ≤991 and one at ≤767; card heights stay 520px and no card clips its topic (the longest topic is 5 lines).
- [x] Subscribe: 519px photo band, 60px/900 white title with the source's negative-bottom-margin rhythm, 18px white paragraph, 830×62 transparent `2px #F1F1F1` field (6px radius, 18px white, italic .35 placeholder) + 200×62 `#4ACA59` button, flex `gap` layout that never overlaps at 1440/1024/768/390.
- [x] Subscribe validates client-side (`aria-invalid` + inline error), announces success via `aria-live`, makes no network call; stacks the button under the field ≤767.
- [x] Footer: 528px `#201D6D`, four 294px columns (24px/900 headings, 18px/400 white .5 items 24px apart), pink `#D51E7B` contact glyphs with 33px indent, 1px `#F21E7D` rule, 95px copyright bar (14px white .5, rendered year, five social glyphs 25px apart, terms at the right).
- [x] Footer links https://www.componentdock.com/ as "Component Dock"; `git grep -i colorlib apps/keynoter` = 0 hits; `git grep -i summit apps/keynoter` = 0 hits.
- [x] 6px radius on buttons, cards, portraits and the subscribe field; 4px on the nav pill and search square; 50% only on the hero dots; no card shadows.
- [x] Placeholder imagery uses `https://picsum.photos/seed/keynoter-<n>/<w>/<h>` (four hero slides, three speaker portraits, one workshop photo, one subscribe backdrop) and the duotone comes from CSS, never from a copied source JPEG; icons come from `lucide-react`.
- [x] No horizontal overflow at 390px (`document.documentElement.scrollWidth === document.documentElement.clientWidth`).
- [x] `scripts/verify-app.sh keynoter` passes: typecheck, lint, 100% coverage tests, build.
- [x] Desktop (1440) and mobile (390) renders compared band-by-band against the reference; deviations listed in the PR.
- [x] `npm install` run at the repo root so `package-lock.json` registers the workspace; `grep -c "@free-react-templates/keynoter" package-lock.json` ≥ 1.
- [x] TEMPLATES.md rows **1193** and **1688** were re-opened `[x]` → `[ ]` on the branch, then marked `[x]` with `https://keynoter.free.componentdock.com` after merge (prep stream does none of this); `apps/summit` untouched.

## Implementation record (shipped)

**App:** `apps/keynoter` · `@free-react-templates/keynoter` · deploy
`keynoter.free.componentdock.com`. Built from the prep research above; the live
preview was re-fetched at implementation time (`22,465 B` HTML, `css/style.css`
`33,880 B` / sha256 `84fb598d…` — the sheet hash matches the prep's, the HTML
hash differs only because the host injects a rotating request id).

### Files

`src/App.tsx` (band order) · `src/content.ts` (every string) ·
`src/index.css` (`@theme` tokens + `.shell` / `.duotone` / `.band`) ·
`src/components/{Chrome,Header,SearchOverlay,Hero,Counter,Speakers,Workshop,Talks,Subscribe,Footer,ui}.tsx` ·
`src/lib/{countdown,forms,motion}.ts` · 14 test files (48 tests).

### Documented deltas as built

1. **No preloader element at all** — the source's `#preloder` is a black
   full-screen overlay that survives a failed `load` event. The requirement's
   scenario ("absent on the first painted frame") is met by not rendering it;
   nothing is trapped and no timer is needed.
2. **Live countdown** to `NEXT_EVENT.iso = 2027-02-09T09:00:00+01:00` through
   `remainingParts()` (floors at zero), ticking once a second and clearing its
   interval on unmount. The source renders `00` because its target is in 2019.
3. **Both dates agree** — hero kicker and counter label are both February 9–15,
   2027 (the source contradicts itself: 9–15 Feb 2019 vs 25 Aug 2019).
4. **Nav → in-page anchors:** Home `#top`, Speakers `#speakers`, Tickets
   `#workshops`, Blog `#talks`, Contact `#contact`. Zero `href="#"` in the app;
   social glyphs and "Terms and Conditions" point at
   `https://www.componentdock.com/`, "All Speakers" → `#talks`, "More Info" →
   `#talks`, "Buy Tickets" → `#contact`.
5. **Duotone is CSS, not JPEG:** one
   `linear-gradient(to right, #ff1a6b, #2a34d0)` at `.75` (`.duotone::after`)
   over grayscale picsum placeholders — hero ×4, portraits ×3, workshop photo,
   subscribe backdrop. The subscribe band adds a `bg-navy/30` veil so the white
   body copy keeps its contrast over a bright placeholder.
6. **Subscribe layout is a flex row with a gap** (field `max-w-[830px]`, button
   `200×62`), never the source's absolute overlap; it stacks under `md`.
7. **Typos fixed:** "Useful Links", "Your E-mail Address", clean `<title>`
   (`Keynoter — Conference 2027`).
8. **Outline:** exactly one `h1` (active hero slide); the three inactive slides
   render their headline as a `<p>` and the slide is `aria-hidden`; talk topics
   are `h3`, not a seventh `h2`.
9. **Mobile step-downs tuned to the 390 render** rather than copied verbatim:
   hero `h1` 48px (source 40px), hero top padding 180px, workshop photo 320px
   tall, speaker portraits 330px. Nothing overflows and the document reads at
   the reference's proportions (see the table) — these are the only places the
   recreation departs from the source's px ladder.

### Measured verification (Playwright, `prefers-reduced-motion` to freeze slide 0)

| band        | reference 1440 | keynoter 1440 |        Δ |
| ----------- | -------------: | ------------: | -------: |
| header      |            101 |           101 |        0 |
| hero        |            976 |           976 |        0 |
| counter     |            241 |           229 |    −5.0% |
| speakers    |            978 |           975 |    −0.3% |
| workshop    |            784 |           784 |        0 |
| talks       |          1,330 |         1,300 |    −2.3% |
| subscribe   |            519 |           510 |    −1.7% |
| footer      |            528 |           521 |    −1.3% |
| **document**|      **5,441** |     **5,380** | **−1.1%** |

Hero `h1` = **100px / `rgb(255,255,255)`** at 1440 and 48px at 390, three lines
(kicker at y = 384, venue at y ≈ 696 — the reference's own offsets); body 16px /
1.875; `document.fonts` reports **Lato 400, 700, 900** loaded (no synthesis);
`scrollWidth − clientWidth` = **0** at 1440 and 390.

### Gate results

- `bash scripts/verify-app.sh keynoter` — typecheck ✓, lint ✓, **48 tests**,
  coverage **100% statements / 100% branches / 100% functions / 100% lines**,
  build ✓ (`dist/index-*.js` 276 kB / 86 kB gzip).
- `npm run spec:validate` — **3,292 passed, 0 failed**.
- `git grep -i colorlib apps/keynoter` = **0** and `git grep -i summit
  apps/keynoter` = **0**.
- `npm install` at the root registered the workspace
  (`grep -c "@free-react-templates/keynoter" package-lock.json` = 2).
