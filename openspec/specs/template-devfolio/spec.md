# Template: Devfolio (Portfolio — developer portfolio whose argument is two technical case studies)

## Purpose

A **developer's portfolio that shows the reasoning, not the screenshots**. The `h1` is a three-line claim —
*"Good interfaces." / "Clear thinking." / "Useful code."* — and beside it sits a fake editor window
(`about-me.json`) holding the whole introduction as JSON. The second band is not a gallery: it is **two project
cards that each promise a case study, a live demo and source**, and every word below them is about *decisions* —
an approach band that starts *"Understand it. Build it. Make it clearer."*, three principles (*"Make the next step
obvious."*, *"Build for more than the happy path."*, *"Leave a clear trail."*), and a tools band that separates
*In the browser* from *In the workflow* from *What I'm exploring*. There is no image gallery, no logo wall, no
testimonial, no pricing — six bands and a footer, and the page's honesty is its design: the contact band prints
`ari@example.com` and immediately says *"Demo contact address. Replace it with your own before publishing."*

The palette is **near-black ink on paper white with one navy hero, one periwinkle-blue panel and one lime
accent**: `ink #18212f` (all headings and the primary button), `muted #5d6776`, `line #dbe1e8` (every hairline),
`blue #2459d3` (links, the brand glyph, and the whole closing contact panel), `navy #15243a` (the hero ground),
`paper #f9fafc` (body), `lime #d9f77c` (exactly three jobs: the middle hero line, the JSON string literals in the
editor, and the hero's primary button). **One typeface** — Inter, self-hosted as a variable woff2 — at weight
**650** for headings with **−0.05em** tracking, plus a system-mono stack for the eyebrows, tags and the editor.
Radii are small and mechanical: **5 px** on buttons and the nav's contact pill, **6 px** on project images,
**8–9 px** on project cards and the editor/contact panels, **3 px** on tags.

Recreation of the ColorLib "Trace Developer" design (https://colorlib.com/wp/template/trace-developer/, live
preview https://preview.colorlib.com/theme/trace-developer/) as a React 19 + Vite + Tailwind CSS 4 + TypeScript
application. Invented name: **Devfolio** → `apps/devfolio`, `@free-react-templates/devfolio`,
`https://devfolio.free.componentdock.com`.

- **Source slug:** `trace-developer`
- **ColorLib category (breadcrumb):** *Portfolio Website Templates* → `https://colorlib.com/wp/cat/portfolio/`
- **New name rationale:** `devfolio` is a single lowercase word, zero repo hits (`ls apps/`, `openspec/specs/`,
  `docs/templates/`, and a full-tree grep all empty), and it names what the design is — a developer portfolio. It
  never appears on the reference, which calls itself *Trace Developer* / *Ari Morgan*.

## Why this design has no row in `TEMPLATES.md` (catalogue gap, measured 2026-10-25)

Every row of `TEMPLATES.md` is `[x]` (2,857 rows, open `- [ ]` **0**, `[~]` **0**) and every row already owns a
spec, so the prep queue comes from `docs/catalog-coverage.md` — the **42 standalone designs** on ColorLib's own
listing that the checklist never recorded. This is row **`trace-developer`** of 42 (*preview 200, 7,638 B*), the
row **immediately after `toolbelt`** and **before `upright`** in that table, and the first of the three remaining
unprepped slugs (`trace-developer`, `upright`, `voltway`).

The implementer appends this line when it claims the template — under **`## Portfolio`** (currently
`## Portfolio (90)`, bump to **91**), alphabetically **after **Tough*** (`tough` → `bastion`) and **before
**Transcend*** (`transcend` → `chroma`), i.e. **line 2597 on `53f08209e`**. Re-read the section before pasting; a
concurrent stream may have inserted rows above it.

```markdown
- [x] **Trace Developer** — [colorlib](https://colorlib.com/wp/template/trace-developer/) · ![preview](https://colorlib.com/wp/wp-content/uploads/sites/2/trace-developer-featured.jpg) · [devfolio](https://devfolio.free.componentdock.com)
```

**Screenshot URL note:** this design does **not** follow the `<slug>-free-template.jpg` / `<slug>-template.jpg`
pattern — both are **404** (`trace-developer.jpg` → 404, `trace-developer-free-template.jpg` → 404). The only
listing image is `…/sites/2/trace-developer-featured.jpg` (and its `-1024x807` derivative). Use that URL above.

## Reference readings (2026-10-25, `curl -4` + Playwright/Chromium)

| what                                                   | value                                                                                                        |
| ------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| preview HTML                                           | **200**, **7,638 B**, `text/html; charset=utf-8`                                                              |
| `<title>` / `<meta description>`                        | *"Ari Morgan \| Frontend developer — Trace Developer"* / *"Developer portfolio with working demos, technical case studies and source downloads."* |
| `<meta name="robots">`                                  | `noindex, nofollow`                                                                                            |
| stylesheet `assets/style.css`                           | **200**, **11,873 B**, sha256 `135f5684afc9e311…` — hand-written, **no Tailwind, no `@theme`, no CSS vars beyond `:root`** |
| vendor `assets/vendor/bootstrap.min.css`                | **200**, **232,111 B**, `Bootstrap v5.3.8` — grid + utilities only (`.row`, `.col-lg-*`, `.g-*`, `.mt-4`)       |
| behaviour `assets/app.js`                               | **200**, **803 B**, sha256 `a2768cb38701dd1a…` — menu toggle + `Escape` + an optional `[data-print]` button    |
| font `assets/fonts/inter.woff2`                         | **200**, **48,256 B**, `font/woff2`, declared `font-weight: 100 900` (variable Inter; **no Google Fonts link**) |
| images                                                  | **2** `<img>`: `assets/issue-lens-preview.jpg` (70,960 B) and `assets/release-log-preview.jpg` (61,523 B); plus `assets/mark.svg` (213 B, the favicon) |
| official archive                                        | `https://preview.colorlib.com/downloads/free/trace-developer.zip` → **404** — no archive, the live preview is the sole DOM/CSS reference |
| `theme/bootstrap/trace-developer/`, `theme/bb/trace-developer/` | **404** — the slug-only path is the only live demo                                                    |
| inner routes (all **200**)                              | `/`, `/resume.html` (4,118 B), `/issue-lens.html` (6,097 B), `/release-log.html` (6,158 B), `/setup.html` (7,805 B), `/demos/issue-lens.html` (4,099 B), `/demos/release-log.html` (4,169 B) |
| listing page                                            | **200**, 112,127 B; `<h1>` *"Trace Developer"*; breadcrumb *Home » HTML & CSS Website Templates » Portfolio Website Templates » Trace Developer* |
| listing `og:image` / description                        | `…/sites/2/trace-developer-featured.jpg` / *"Show your code and decisions with two technical case studies, working demos and source downloads. Explore the Trace Developer Bootstrap 5 portfolio template."* |
| document height                                         | **3,732** px at 1440 · 3,696 at 1280 · 3,491 at 1024 · 3,942 at 768 · 5,148 at 390 · 5,619 at 320           |
| structure (home)                                        | **5** `<section>`, **1** `<h1>`, **4** `<h2>`, **9** `<h3>`, **18** `a[href]` (14 distinct), **2** `<img>`, **1** `<button>` (the menu toggle), **0** `<form>`, **0** `<input>`, **0** `<svg>` |
| horizontal overflow                                     | **none** at 320 / 390 / 768 / 1280 / 1440 — but **12 px at 1024** (`scrollWidth 1036` vs `clientWidth 1024`), see §Reference defects 1 |
| motion                                                  | **no keyframes, no transitions, no observers** — the only motion in the whole theme is `a:hover`, the `:focus-visible` ring, and `html { scroll-behavior: smooth }` |

This is **not** the 2026 Astro house kit the last dozen preps covered (no `_astro/` bundle, no `data-animate`, no
dark mode, no cookie strip, no preloader): it is a **hand-written static mini-site** — one `style.css`, one 800-byte
`app.js`, Bootstrap only for the grid, and seven real `.html` pages.

## Page structure (measured with `getBoundingClientRect`, Playwright/Chromium)

| #  | band            | element                | ground                            | top  | 1440 | 1280 | 1024 | 768 | 390 | 320  |
| -- | --------------- | ---------------------- | --------------------------------- | ---: | ---: | ---: | ---: | --: | --: | ---: |
| 0  | skip link       | `a.skip` → `#main`      | white pill on focus                |    — |    — |    — |    — |   — |   — |    — |
| 1  | header          | `header.site-header`    | transparent, 1 px `--line` bottom  |    0 | **87** | 87 | 87 | 87 | **79** | 79 |
| 2  | hero            | `section.hero`          | **`--navy #15243a`**               |   87 | **768** | 739 | 687 | 1,009 | 1,142 | 1,321 |
| 3  | `#work`         | `section.section#work`  | `--paper`                          |  856 | **1,269** | 1,265 | 1,099 | 1,016 | 1,614 | 1,711 |
| 4  | `#about`        | `section.about`         | **`#edf1f7`** + `border-block` `--line` | 2,124 | **688** | 688 | 688 | 831 | 964 | 1,091 |
| 5  | tools           | `section.section` (no id) | `--paper`                        | 2,812 | **371** | 367 | 408 | 531 | 772 | 820 |
| 6  | `#contact`      | `section.contact-panel` | **`--blue #2459d3`**, radius 8     | 3,183 | **385** | 385 | 358 | 304 | 356 | 356 |
| 7  | footer          | `footer.site-footer`    | transparent, 1 px `--line` top     | 3,628 | **104** | 104 | 104 | 104 | **161** | 181 |

Document **3,732 / 3,696 / 3,491 / 3,942 / 5,148 / 5,619** px at 1440 / 1280 / 1024 / 768 / 390 / 320.
Container is `.container { max-width: 1232px }` (Bootstrap's own padding: 12 px per side, 22 px below 576 via
`.container { padding-inline: 22px }`). Section padding is **72 px** top and bottom on `#work` / `#about` / tools,
**84 px / 62 px** on the hero, **50 px** inside the contact panel, **24 px** on the header and **26 px** on the
footer. `#contact` also carries `margin-bottom: 60px`, so the footer's top rule sits 60 px under the blue panel.

Band widths: hero and the two-column bands use `row g-4 g-lg-5` with `align-items-center` and a **7/5** or **5/7**
`col-lg-*` split; `#work` and the tools band sit inside an extra `<div class="container">`, so they are two
containers deep in the reference (an artefact to drop, not reproduce).

## Design tokens (`assets/style.css`, 11,873 B — verbatim custom properties)

```css
:root {
  --ink:   #18212f;  /* rgb(24,33,47)  — every heading, the primary button, the brand */
  --muted: #5d6776;  /* rgb(93,103,118) — ledes, body copy inside cards, eyebrows, footer */
  --line:  #dbe1e8;  /* every hairline: header rule, card border, tag border, footer rule */
  --blue:  #2459d3;  /* rgb(36,89,211) — links, the brand glyph, the contact panel ground */
  --navy:  #15243a;  /* rgb(21,36,58)  — the hero ground */
  --paper: #f9fafc;  /* rgb(249,250,252) — body background */
  --lime:  #d9f77c;  /* rgb(217,247,124) — hero middle line, JSON strings, hero CTA */
}
```

Three further colours live outside `:root` and matter as much:

| hex       | where                                                                                       |
| --------- | ------------------------------------------------------------------------------------------- |
| `#edf1f7` | the `#about` band ground, `border-block: 1 px var(--line)`                                   |
| `#c9d2df` | the `.principles` rules (top rule + one per article)                                          |
| `#a44711` | **the global `:focus-visible` ring** — `outline: 3px solid #a44711; outline-offset: 4px` on links, buttons, inputs, selects and `<summary>` |

Navy-family tints used inside the hero: `#f9fbff` (hero text), `#b9c7d9` (hero eyebrow), `#c7d1e0` (intro +
editor body + hero-foot), `#6b7e98` (hero secondary button border), `#42516a` (hero-foot top rule).

Editor-family tints: `#0e1c30` (editor ground), `#53657e` (editor border), `#30435c` (editor header/footer rules),
`#8093ae` (window chrome dots), `#98aeca` (editor footer text), `#8cb8ff` (JSON keys), `#d9f77c` (JSON strings).

Project-card tints: `#e4eafa` (blue-ish visual well, card 01), `#e6eddf` (green-ish visual well, card 02),
`#c0cde0` (image border), `#17283c1a` (image shadow), `#4c5b6d` (tag text), `#ffffff` (card ground).

### Type

| role                | reference declaration                                   | computed at 1440        | notes                                                        |
| ------------------- | ------------------------------------------------------- | ----------------------- | ------------------------------------------------------------ |
| body                | `font-family: Inter, Arial, sans-serif; font-size:16px; line-height:1.75` | 16 / **28** `#18212f` | Inter is **self-hosted variable**, `font-weight: 100 900`     |
| `h1`                | `font-size: clamp(3rem,6.3vw,5.6rem); line-height:1.08; letter-spacing:-.05em; font-weight:650` | **89.6 / 96.8**, −4.48 px | `max-width: 780px`, three `<br>` lines                 |
| `h2`                | `clamp(2rem,4vw,3.3rem)`, same tracking/weight           | **52.8 / 57.0**, −2.64 px | `#work` heading; `.section-top h2 { margin: 0 }`             |
| `h2` (contact)      | `.contact-panel h2 { font-size: clamp(2.5rem,5vw,4rem) }` | **64 / 69.1**, −3.2 px  | the biggest line on the page, inside the blue panel           |
| `h3` (project)      | `.project-copy h3 { font-size: 2rem }`                  | **32 / 34.6**, −1.6 px  | project titles                                                |
| `h3` (principle)    | `.principles h3 { font-size:1.08rem; letter-spacing:-.025em }` | **17.3 / 18.7**, −0.43 px | keep small — these are rules, not section titles        |
| `h3` (tool cell)    | `.stack-grid h3 { font-size:1rem; letter-spacing:-.02em }` | 16 px                  |                                                               |
| hero intro          | `.hero .intro { font-size:1.08rem; max-width:480px }`   | **17.3 / 30.2** `#c7d1e0` | the only lede-sized paragraph on the page                    |
| eyebrow             | `.eyebrow { font-size:.7rem; text-transform:uppercase; letter-spacing:.09em; color:var(--muted); display:block; margin-bottom:22px }` | **11.2 / 19.6**, 1.01 px tracking | **system mono** (`.mono,.eyebrow,.tag,.date`) |
| section-top lede    | `.section-top p { max-width:330px; color:var(--muted); font-size:.88rem }` | 14.1 / 24.6           | sits right-aligned against the `h2`                          |
| card copy           | `.project-copy p { font-size:.9rem; color:var(--muted) }` | 14.4 px                |                                                               |
| tag                 | `.tag { font-size:.66rem; color:#4c5b6d }`               | **10.6 / 18.5** mono   | `1px var(--line)` border, radius **3**, `padding: 3px 8px`   |
| button              | `.button { font-size:.8rem; font-weight:600; min-height:47px }` | **12.8 / 17.9**  | `padding: 12px 19px`, `gap: 25px` between label and glyph     |
| brand               | `.brand { font-size:1rem; font-weight:700; letter-spacing:-.04em }` | 16 / 28       | glyph `span` is **mono 1.1rem, `--blue`**, 12 px right margin |
| nav link            | `.site-nav a { font-size:.8rem; color:var(--ink) }`      | **12.8 / 22.4**        | `gap: 30px`                                                   |
| footer              | `.site-footer { font-size:.7rem; color:var(--muted) }`   | 11.2 / 19.6            | plus `.sample-note { font-size:.7rem }`                       |

**Font substitution for the recreation:** load Inter from Google Fonts as a variable range —
`https://fonts.googleapis.com/css2?family=Inter:wght@400..700&display=swap` (verified **200**, 2026-10-25) — and
set headings to `font-weight: 650` (Inter is variable, so 650 is a real instance). Never ship the source's
`inter.woff2`. The mono stack is the **system** stack
(`ui-monospace, SFMono-Regular, Consolas, monospace`) — do not add a second webfont.

### Shape, shadow, rhythm

- **Radius:** 3 px tags · 5 px every button and the nav contact pill · 6 px project images · 7 px demo table/toolbar (inner pages) · 8 px project cards + the contact panel · 9 px the editor card.
- **Shadow:** only two. `0 20px 35px #08111c40` on the editor, `0 16px 28px #17283c1a` on project images. No card shadows, no hover lift, no glass, no gradients anywhere on the home page.
- **Rhythm:** section padding 72 px; heading block → content 32 px (`.section-top { margin-bottom: 32px }`); project cards separated by 26 px (`margin: 0 0 26px`); card padding 38 px (copy) / 35 px (visual well, `min-height: 360px`); tag row `margin-top: 20px`; hero buttons row `margin-top: 27px`.
- **Grids:** hero and the two split bands are Bootstrap `row g-4 g-lg-5` (gutter 16 → 24 px on `lg`), split **7/5** (hero, about, tools) with the copy on the left except in `#about`, where the **headline is left (5)** and the body is **right (7)**. `.stack-grid` is a plain 2-column CSS grid, `gap: 25px`, collapsing to 1 column below `sm`.
- **Borders, not fills:** almost every separation is a 1 px `--line` rule (header, tags, cards, footer), which is why the page reads as a document rather than a landing page.

## Content inventory (verbatim; paraphrase the person, keep the structure)

### Header (87 px)

- **Brand:** mono glyph `<am/>` in `--blue`, `aria-hidden="true"`, then `Ari Morgan`, then a visually-hidden
  ` — home`. (In the recreation the glyph is yours — `<dv/>`, `{…}`, `/>` — and the name is the template's persona.)
- **Nav:** *Selected work* → `#work` · *About* → `#about` · *Résumé* → `resume.html` · **Get in touch ↗** →
  `#contact`, boxed: `1px var(--line)`, radius 5, `padding: 7px 13px`.
- *Selected work* carries `aria-current="page"` in the reference (wrong page, harmless — fix it: the current-page
  marker belongs on nothing, or on `#work` only while it is scrolled into view).
- **Mobile:** one `<button class="menu-toggle" aria-controls="site-nav" aria-expanded="false">Menu</button>`,
  shown only when `.js` is present; the nav itself is `<nav id="site-nav" aria-label="Main navigation">`.

### Hero (768 px, `#15243a`)

- **Eyebrow:** `ARI MORGAN / FRONTEND DEVELOPER` (`#b9c7d9`).
- **`h1`:** `Good interfaces.` / **`Clear thinking.`** (lime) / `Useful code.` — white except the middle line.
- **Intro:** *"I build for the person on the other side of the screen. Here's the work, the decisions behind it,
  and the code you can explore."*
- **Actions:** *Explore the projects ↓* (`--lime` fill, `--navy` text, radius 5) · *Read my résumé ↗*
  (transparent, 1 px `#6b7e98`, white).
- **Editor card** (`<aside aria-label="A short developer introduction">`), ground `#0e1c30`, radius 9:
  - head: `● ● ●` (`aria-hidden`) + `about-me.json` (mono, right-aligned) on a `1px #30435c` rule;
  - body, a `<pre>` at 13.44 px / line-height 2:
    ```
    {
      "name": "Ari Morgan",
      "focus": [
        "frontend development",
        "clear interactions",
        "maintainable code"
      ],
      "currently": "open to conversations"
    }
    ```
    keys `#8cb8ff`, strings `#d9f77c`, punctuation `#c7d1e0`, `white-space: pre-wrap`;
  - foot: *Small details. Better experiences.* · *UTF-8*, on a `1px #30435c` rule.
- **Hero foot:** a `1px #42516a` rule, three cells `gap: 24px`, 0.7rem `#c7d1e0`: `01` **Working demos** ·
  `02` **Technical case studies** · `03` **Source you can read** (numerals white, weight 500, 6 px gap).

### `#work` — "From a problem to a working thing." (1,269 px)

- `.section-top`: eyebrow `SELECTED WORK / 2026` · `h2` *"From a problem<br>to a working thing."* · right-hand
  lede *"Two small frontend projects. Each comes with the reasoning, a live demo and a source download."*
- **Two project cards**, each `1px var(--line)`, radius 8, white, `row g-0` split **6/6**:

| # | visual well | eyebrow                        | `h3`         | blurb                                                                                                                              | tags                                                     | actions                                  |
| - | ----------- | ------------------------------ | ------------ | ---------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------- | ---------------------------------------- |
| 1 | `#e4eafa`   | `01 / INTERNAL TOOL INTERFACE` | **Issue Lens** | *"Making a long issue list easier to scan. Search, status filters and a shareable view, without hiding the work behind an account screen."* | JavaScript · URL state · Progressive enhancement          | *Read the case study ↗* · *Try the demo* |
| 2 | `#e6eddf`   | `02 / PRODUCT COMMUNICATION`   | **Release Log** | *"A changelog built around finding an answer. Filter by change type, search the details and share the view with a teammate."*          | Semantic HTML · Search · Content structure                | *Read the case study ↗* · *Try the demo* |

  The visual well is `padding: 35px`, `min-height: 360px`, centred; the screenshot image inside is
  `border: 1px #c0cde0; radius: 6px; box-shadow: 0 16px 28px #17283c1a`. Card copy is `padding: 38px`, `h3` 2rem
  with 12 px above / 18 px below. Card 1's picture is a filtered issue table, card 2's a release list — **replace
  both with authored placeholder/DOM-built previews** (`https://picsum.photos/seed/devfolio-1/1200/833`), never the
  source's screenshots.

### `#about` — "Understand it. Build it. Make it clearer." (688 px, `#edf1f7`)

- Left (5 cols): eyebrow `HOW I APPROACH THE WORK`, `h2` three lines.
- Right (7 cols): two paragraphs —
  *"I'm Ari, a frontend developer interested in tools that help people get something done. I like reducing a
  complicated flow to a few understandable choices, then checking the details that make it usable."* and
  *"My work starts with the HTML and the task. I add JavaScript where it helps, keep state predictable, and write
  down the decisions someone else will need to understand later."*
- `.principles`: `border-top: 1px #c9d2df`, `margin-top: 35px`, three `<article>`s each `padding: 23px 0` +
  `border-bottom: 1px #c9d2df` (zeros out the last margin):
  1. **Make the next step obvious.** — *"A readable label and a useful empty state often matter more than another animation."*
  2. **Build for more than the happy path.** — *"Try long text, zero results, narrow screens and keyboard-only interaction before calling it finished."*
  3. **Leave a clear trail.** — *"Document the setup, the trade-offs and what the project does not do yet."*

### Tools / experience (371 px, no id)

- Left (5): eyebrow `TOOLS / EXPERIENCE`, `h2` *"A practical<br>starting point."*, then a `mt-4` link
  *Experience and résumé →*.
- Right (7) `.stack-grid`, 2 × 2, `gap: 25px`:
  1. **In the browser** — *"HTML, CSS, JavaScript, responsive layouts, forms and browser APIs."*
  2. **In the workflow** — *"Git, code review, browser debugging, written decisions and small reproducible tests."*
  3. **What I'm exploring** — *"Component boundaries, state management and clearer documentation for the next person."*
  4. **What I value** — *"Thoughtful feedback, readable code and teams that explain the "why."*"

### `#contact` (385 px, `--blue`, radius 8)

- Eyebrow `HAVE SOMETHING IN MIND?` in `#dbe7ff` · `h2` *"Let's build something<br>worth using."* at
  `clamp(2.5rem,5vw,4rem)` · one button, **white fill / `--blue` text**: `ari@example.com ↗` (a `mailto:`) ·
  `.sample-note` in `#e1e9ff`: *"Demo contact address. Replace it with your own before publishing."*

### Footer (104 px)

- Left: *Trace Developer · Thoughtfully built.* · Right: *Setup & publishing guide* · *Template by Colorlib*.
- Then a `.sample-note`: *"Portfolio demo: Ari Morgan and the career history are fictional. Project demos use local
  sample records."*
- **Recreation:** the ColorLib link must become **`https://www.componentdock.com/`** ("Component Dock") and the
  brand string becomes the new template name; keep the sample-data note — it is part of the design's honesty.

## Inner-page inventory (the reference is a seven-page site; the recreation is one app)

| route                    | `<title>`                                       | what it holds (authoritative for…)                                                                 |
| ------------------------ | ----------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `/resume.html`           | `Résumé \| Ari Morgan — Trace Developer`         | `h1` person + role line, `Download sample résumé (.txt)` + `Print / Save as PDF` (`[data-print]`, hidden until JS), then **Experience** (*Frontend developer · Northline Studio, 2025–present*, 3 bullets; *Junior web developer · Common Loop, 2023–2025*, 3 bullets), **Selected projects** (the two), **Tools and skills**, **Education** (*BSc, Computing · Eastmere College, 2020–2023*) |
| `/issue-lens.html`       | `Issue Lens \| Technical case study — Trace Developer` | back link, eyebrow `Internal tool interface / Issue Lens`, `h1` *"Less searching. More signal."*, lead, two actions (*Try the working demo ↗*, *Download source ZIP ↓*), a **facts `dl`** (`Role · Stack · Data · Status`), and six `<section>`s: **01 The problem and scope**, **02 My contribution**, **03 The implementation** (+ a `.architecture` mono flow `HTML issue rows ↓ URL query + selected status ↓ Combined predicate ↓ Visible rows + count + empty state`), **04 The decision that mattered** (+ `.decision` callout *"One derived view, not two competing copies of state."*), **05 What the demo demonstrates**, **06 Checks and next steps**, then *Run it and read the source* and a `.next-project` link |
| `/release-log.html`      | `Release Log \| Technical case study — Trace Developer` | same skeleton: `h1` *"The right update. Without the digging."*, facts `dl`, six sections, flow `Semantic release articles ↓ Text query + change type ↓ Shared filter controller ↓ Matching articles + shareable URL`, decision *"Keep the content useful before adding the interaction."* |
| `/demos/issue-lens.html` | `Issue Lens demo — Trace Developer`              | eyebrow `TRACE / WORKING PROJECT DEMO`, `h1` *Issue Lens*, `p` *"A focused view of what needs attention."*, a `.demo-toolbar` with **Search issues** + **Filter by status** (`All statuses / Open / In progress / Done`) + **Clear filters**, a `.demo-status` line (`All sample issues shown.` / *count*), an **empty state** (*"No matching issues. Try a different search or clear the filters."*), and an 8-row table `Issue · Title · Status · Priority` with `badge-status` chips — rows `ISS-101`…`ISS-108` |
| `/demos/release-log.html`| `Release Log demo — Trace Developer`             | same toolbar with **Search releases** + **Filter by type** (`All types / Feature / Fix / Maintenance`), 5 `.release-item` articles: `v1.3.0 2026-09-24 Feature "A faster route to the right update"`, `v1.2.2 2026-09-12 Fix "Small fixes, clearer feedback"`, `v1.2.1 2026-09-04 Fix "Keyboard details that matter"`, `v1.2.0 2026-08-27 Feature "Release history, in one place"`, `v1.1.0 2026-08-10 Maintenance "A smaller starting point"`, each with 2 `<li>` notes |
| `/setup.html`            | `Setup & publishing guide — Trace Developer`     | the owner's guide (four numbered sections + `<details>` blocks) — **inventory only, do not recreate**   |

**Adaptation rule for a single-page app (required):** the two case studies become one accessible
`CaseStudyDialog` opened from each card's *Read the case study* action (facts `dl` + the six numbered sections +
the decision callout), and *Try the demo* opens the same dialog on its **working demo** block — the filter toolbar,
the count line, the empty state and the sample records for that project (8 issues / 5 releases). The
`/resume.html` content is a **second view** at `#/resume` (hash route, no new dependency) reached from the nav.
Nothing may be a dead link: no `href="#"`, no `#`-anchors to ids that do not exist.

## Interaction inventory (the whole of `assets/app.js`, 803 B)

| device        | reference behaviour                                                                                                | recreation                                                                                     |
| ------------- | ------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------- |
| menu toggle   | `.js` class on `<html>`; button toggles `nav.open`, writes `aria-expanded`; a click on any nav link closes it; `Escape` closes **and returns focus to the button** | same, in React state (test: open → `aria-expanded=true` → `Escape` → closed + focus on button) |
| print         | `[data-print]` button is `hidden` in markup and un-hidden by JS, then calls `window.print()`                        | only on the résumé view; same guard so it never shows without JS                                |
| filtering     | **not in `app.js`** — it is `assets/demo.js` on the two demo pages: text query + `data-category`, combined predicate, visible count, `history.replaceState`-style URL sync, "Clear filters" restores focus to the search input, unknown category → *All* | rebuild as one `useFilter` hook over static records; **derive** the visible list during render (no `setState` in an effect), announce the count via `aria-live="polite"`, keep the empty state, restore focus to search on clear |
| smooth scroll | `html { scroll-behavior: smooth; scroll-padding-top: 30px }`                                                        | keep (30 px offset clears the 87 px header incompletely — see defects 4)                        |
| reduced motion| `@media (prefers-reduced-motion: reduce) { html { scroll-behavior: auto } * { transition: none!important; animation: none!important } }` | keep — it is the only motion guard in the theme, and it already does the right thing   |

## Screenshot analysis (ColorLib product shot, 2,400 × 1,892, 81,436 B)

The listing image is **served as `.jpg` but is an AVIF container** (`file` → `ISO Media, AVIF Image`) — convert it
before viewing. It is a **browser-chrome mock at ~1,520 px logical width** showing the hero and the top of `#work`
only, plus two floating page thumbnails at the right (the *Issue Lens* case study and its working demo). It agrees
with the live render: navy hero with the three-line headline whose **middle line is lime**, the lime primary button
and the outlined secondary, the dark editor card with lime strings and blue keys at the right, the hairline
three-item *01 / 02 / 03* foot, then the paper-white `#work` band with its eyebrow and the start of the *"From a
problem"* heading. Palette read straight off it: four colours — navy `#15243a`, paper `#f9fafc`/white, ink
`#18212f`, lime `#d9f77c` — plus the blue only as the brand glyph. **No gradient, no shadow above 9 px radius, no
second typeface.** Treat it as confirmation that the hero's *air* is deliberate: a 780 px headline column inside
1,232 px, 84 px of top padding, and the editor occupying 5 of 12 columns.

## Reference defects (fix in the recreation; do not reproduce)

1. **12 px of horizontal overflow at exactly 1024 px.** Bootstrap `.row` uses `margin-inline: -12px`, and the
   reference's `.container` is `max-width: 1232px` with no `padding` override at that breakpoint, so rows measure
   `left: -12, right: 1036` inside a 1024 px viewport (`scrollWidth 1036`). No other width overflows. Ship a grid
   that cannot overflow (Tailwind `max-w-[1232px] px-5` + `gap-6`, no negative margins).
2. **The footer credits ColorLib.** *"Template by Colorlib"* links to `https://colorlib.com/` — **forbidden** in
   `apps/*`. Replace with the Component Dock link (`https://www.componentdock.com/`), which is also a repo rule.
3. **The focus ring is invisible on the hero and the contact panel.** A single global
   `outline: 3px solid #a44711` gives ≈ **1.9:1** against `--navy #15243a` and ≈ **2.0:1** against `--blue
   #2459d3`. Ship a two-tone ring (e.g. `outline: 3px solid #a44711; outline-offset: 2px;` plus a white
   `box-shadow` on dark grounds) or a per-ground ring colour, and check every interactive element on both dark
   bands.
4. **`scroll-padding-top: 30px` under-scrolls every anchor.** The header is **87 px** tall when sticky-adjacent
   (it is not sticky, but the anchor target still lands under the top edge on a short scroll). Use ≥ 87 px (or
   make the header sticky and pad by its height).
5. **`aria-current="page"` is on *Selected work* while the document is the home page** and that link points to
   `#work`. Either drop it or mark it on the `#work` band's trigger only.
6. **The résumé's print button is `[data-print]` + JS-only.** Without JS there is no way to trigger printing, and
   the `@media print` sheet (11 pt, chrome hidden) exists but is unreachable. Ship a real `<button>` that is hidden
   only until hydrate — or simply leave printing to the browser and drop the control.
7. **The editor is a `<pre>` of text with styled spans.** Screen readers announce `{"name":…` as one run, and the
   window chrome (`● ● ●`, `UTF-8`) is decoration. Keep the card visually, but mark the chrome
   `aria-hidden="true"` and give the JSON block an `aria-label` (e.g. *"Developer profile summary"`) — or expose
   the same facts as a `<dl>` beside it.
8. **The nav is a `<nav>` with four links and one of them is a `mailto:`-free `#contact` anchor while another is a
   separate page**; the labels (12.8 px) are below the 14 px floor the rest of the fleet uses. Bump to 14 px
   (`text-sm`) in the recreation — the header has room at every width ≥ 360.
9. **Eyebrows carry 11.2 px uppercase with 1.01 px tracking** on a `#f9fafc` ground (`--muted` `#5d6776` ≈ 5.4:1)
   — fine for contrast, but at that size the mono tracking is the only thing keeping it legible. Keep the size,
   keep the tracking, do not shrink it further.
10. **`.section-top` uses `align-items: end` with a 330 px lede**, so at 992–1100 px the lede column crowds the
    two-line `h2`; the reference switches to `display: block` only below 576 px. Stack at `lg` instead of `sm`.
11. **Two containers nested** (`<div class="container"><div class="container">…`) around `#work` and the tools
    band — harmless but it halves the gutters at 1232 px. Flatten.
12. **`mailto:ari@example.com`** is a demo address, and the note under it says so. Keep the shape, keep the note;
    do **not** substitute a real-looking address without the note.

## Requirements

### Feature: Page shell and chrome

#### Scenario: Landmarks and skip link

- **GIVEN** the page is loaded
- **THEN** the first focusable element is `Skip to content` targeting `#main`, visually hidden until focused and
  then a white pill at `left: 20px; top: 10px; z-index: 100`
- **AND** the document has exactly one `<h1>`, one `<main id="main">`, one `<header>` and one `<footer>`
- **AND** the `h1` lives in the hero band and nowhere else

#### Scenario: Band order and grounds at 1440

- **THEN** the bands appear in this order: **header (87) → hero (768, `#15243a`) → `#work` (1,269, paper) →
  `#about` (688, `#edf1f7`, `border-block` 1 px `#dbe1e8`) → tools (371, paper) → `#contact` (385, `#2459d3`,
  radius 8, 60 px below it) → footer (104)**
- **AND** the document height is **3,732 px ± 5 %** and the heights are within 5 % of the table in §Page structure
- **AND** exactly **three** grounds are coloured (navy hero, `#edf1f7` about, blue contact); everything else is
  `#f9fafc`/white — **no gradients anywhere**

#### Scenario: No horizontal overflow anywhere

- **GIVEN** widths 320 / 390 / 768 / 1024 / 1280 / 1440
- **THEN** `body.scrollWidth === documentElement.clientWidth` at every width, **including 1024 px**, where the
  reference overflows by 12 px (§Reference defects 1)

#### Scenario: Reduced motion

- **THEN** under `prefers-reduced-motion: reduce` smooth scrolling is off and there is no transition or animation
- **AND** there is **no** other motion to disable: the reference ships no keyframes and no observers, and the
  recreation must not add any (no count-ups, no scroll reveals, no parallax)

### Feature: Header

#### Scenario: Header at 1440

- **THEN** the header is **87 px** — `padding: 24px 0` plus a 1 px `#dbe1e8` bottom rule — not sticky, with the
  brand and nav on one row, `justify-content: space-between`, `gap: 20px`
- **AND** the brand is `<glyph/>` in mono `#2459d3` (16–17 px) then the name at 16 px /**700** / `-0.04em`
- **AND** the nav is a list of four links `gap: 30px` at **14 px** `#18212f`, the last one boxed
  (`1px #dbe1e8`, radius 5, `padding: 7px 13px`) and suffixed `↗`
- **AND** no link is marked `aria-current` on the home view

#### Scenario: Nav collapses below `sm`

- **GIVEN** a 390 px viewport
- **THEN** the nav is hidden, a `Menu` button is visible (`aria-controls`, `aria-expanded="false"`, min touch
  height 44 px), and the header is **79 px**
- **AND** activating the button sets `aria-expanded="true"`, lays the four links out as a wrapped row
  (`gap: 20px`, each ≥ 40 px tall), and closes on a link activation or `Escape` (returning focus to the button)

#### Scenario: Progressive enhancement

- **GIVEN** JavaScript is disabled
- **THEN** all four nav links are visible at every width (the reference hides them only via `.js .site-nav`)
- **AND** no content on the page depends on JS to be readable

### Feature: Hero

#### Scenario: Hero at 1440

- **THEN** the band is **768 px** on `#15243a`, `padding: 84px 0 62px`, split **7 / 5** with `align-items: center`
  and a 24 px gutter
- **AND** the left column carries the eyebrow (`#b9c7d9`, mono, uppercase, 0.09em), the `h1` at **89.6 px / 1.08 /
  650 / −0.05em** in `#f9fbff` with **the second line in `#d9f77c`**, a 480 px intro at 17.3 px `#c7d1e0`, and
  two buttons 27 px below it
- **AND** the primary button is `#d9f77c` fill with `#15243a` text; the secondary is transparent with a 1 px
  `#6b7e98` border and white text; both are radius **5**, `padding: 12px 19px`, `min-height: 47px`, 12.8 px/600,
  and keep the **25 px gap** between label and `↓` / `↗` glyph
- **AND** the `h1` is capped at **780 px** so it breaks on the three authored `<br>` lines and never re-flows into
  a fourth

#### Scenario: The editor card

- **THEN** the right column holds a card with ground `#0e1c30`, 1 px `#53657e` border, radius **9**,
  `box-shadow: 0 20px 35px #08111c40`, `margin-left: 5px`
- **AND** its head is a `1px #30435c` rule with `● ● ●` (`aria-hidden`) and `about-me.json` (mono, `#c7d1e0`,
  right-aligned), 14 px padding
- **AND** the body is a `<pre>` at **13.44 px / line-height 2**, `white-space: pre-wrap`, punctuation `#c7d1e0`,
  keys `#8cb8ff`, strings `#d9f77c`, containing exactly the JSON in §Content inventory
- **AND** its foot is a `1px #30435c` rule with *Small details. Better experiences.* and *UTF-8* in 0.65rem mono
  `#98aeca`
- **AND** the card is announced with an accessible name and its decorative chrome is `aria-hidden`

#### Scenario: Hero foot

- **THEN** a `1px #42516a` rule sits 54 px below the row, with three cells at 0.7rem `#c7d1e0` —
  `01 Working demos`, `02 Technical case studies`, `03 Source you can read` — numerals in white/500

#### Scenario: Hero on small screens

- **GIVEN** 390 px
- **THEN** the columns stack (copy above the editor), the editor gets `margin: 35px 0 0`, the `h1` falls to
  **52 px** (`3.25rem`) and the band grows to **1,142 px**
- **AND** at 320 the hero is **1,321 px** and the buttons wrap without clipping

### Feature: `#work` — two projects

#### Scenario: The band at 1440

- **THEN** the band is **1,269 px** on paper with `padding: 72px 0`
- **AND** `.section-top` puts the eyebrow `SELECTED WORK / 2026` and the two-line `h2` (52.8 px, 650, −0.05em)
  on the left and a **330 px** muted lede on the right, `align-items: end`, `gap: 30px`, 32 px below the block
- **AND** below 1024 the lede stacks **under** the `h2` instead of staying beside it (§Reference defects 10)

#### Scenario: Project cards

- **THEN** each card is `1px #dbe1e8`, radius **8**, white, `row` split **6 / 6**, 26 px apart
- **AND** the visual well is `padding: 35px`, `min-height: 360px`, centred, ground **`#e4eafa`** for card 1 and
  **`#e6eddf`** for card 2, holding an image with `1px #c0cde0`, radius 6, `0 16px 28px #17283c1a`
- **AND** the copy column is `padding: 38px`: mono eyebrow (`01 / INTERNAL TOOL INTERFACE`, `02 / PRODUCT
  COMMUNICATION`), `h3` **32 px / 650 / −0.05em**, a 14.4 px muted blurb, a tag row 20 px below, and an actions row
- **AND** each tag is `1px #dbe1e8`, radius **3**, `padding: 3px 8px`, 10.6 px mono `#4c5b6d`, and the sets are
  *JavaScript · URL state · Progressive enhancement* and *Semantic HTML · Search · Content structure*
- **AND** the two cards' copy matches §Content inventory verbatim, and both images are authored placeholders
  (`https://picsum.photos/seed/devfolio-1/1200/833`, `…-2…`), never the source screenshots

#### Scenario: Card actions open the case study, not a dead link

- **GIVEN** a project card
- **THEN** *Read the case study ↗* and *Try the demo* both resolve to real interaction: the first opens the
  `CaseStudyDialog` with that project's facts and six sections, the second opens the same dialog scrolled to its
  working demo
- **AND** no anchor on the page has `href="#"` or targets an id that does not exist

### Feature: `#about` — the approach band

#### Scenario: Two-column band at 1440

- **THEN** the band is **688 px** on `#edf1f7` with 1 px `#dbe1e8` top and bottom rules, `padding: 72px 0`, split
  **5 / 7** — heading left, body right
- **AND** the left column is the eyebrow `HOW I APPROACH THE WORK` and the three-line `h2`
  *"Understand it. / Build it. / Make it clearer."*
- **AND** the right column is the two paragraphs of §Content inventory at ≤ 600 px, then `.principles`

#### Scenario: Principles list

- **THEN** the list starts on a `border-top: 1px #c9d2df` 35 px below the paragraphs
- **AND** each of the three `<article>`s is `padding: 23px 0` with a `border-bottom: 1px #c9d2df`, `h3` at
  **17.3 px / 650 / −0.025em**, and a 13.9 px `#5d6776` paragraph with no bottom margin
- **AND** the three titles and bodies are *Make the next step obvious.* / *Build for more than the happy path.* /
  *Leave a clear trail.* with the copy in §Content inventory

### Feature: Tools / experience band

#### Scenario: Four cells at 1440

- **THEN** the band is **371 px** on paper, `padding: 72px 0`, split **5 / 7**
- **AND** the left column is the eyebrow `TOOLS / EXPERIENCE`, the two-line `h2` *"A practical<br>starting point."*,
  and a 16 px link *Experience and résumé →* 24 px below it
- **AND** the right column is a **2 × 2** grid, `gap: 25px`, each cell an `h3` at 16 px / 650 / −0.02em with a
  13.9 px `#5d6776` paragraph (*In the browser*, *In the workflow*, *What I'm exploring*, *What I value*)
- **AND** below `sm` the grid is 1 column and the band grows to **772 px** at 390

### Feature: `#contact` — the blue panel

#### Scenario: Panel at 1440

- **THEN** the panel is **385 px** tall, ground **`#2459d3`**, radius **8**, `padding: 50px`, `margin-bottom: 60px`
  inside the container — it is a **panel, not a full-bleed band**, so paper shows at both sides
- **AND** the eyebrow is `#dbe7ff`, the `h2` is **64 px** (`clamp(2.5rem,5vw,4rem)`), and the single action is a
  **white** button with `#2459d3` text and a white border, label `<address> ↗`
- **AND** `.sample-note` under it is `#e1e9ff`: *"Demo contact address. Replace it with your own before publishing."*
- **AND** there is **no form** in this band — the reference's contact is a `mailto:`, and the recreation keeps that
  (a labelled form is not required and adding one is a scope change)

#### Scenario: Panel on small screens

- **GIVEN** 390 px
- **THEN** the panel is **356 px** with `padding: 30px 22px`, the `h2` falls to ~40 px and wraps to two lines, and
  the email button does not overflow the panel

### Feature: Footer

#### Scenario: Footer at 1440

- **THEN** it is **104 px**, `border-top: 1px #dbe1e8`, `padding: 26px 0`, 11.2 px `#5d6776`, with a
  `space-between` row of brand line and link line plus the sample-note paragraph below
- **AND** the link line reads *Setup & publishing guide* · **Component Dock** (`https://www.componentdock.com/`),
  and **no ColorLib string** appears anywhere in the app (§Reference defects 2)
- **AND** at 390 the rows wrap and the footer is **161 px**

### Feature: `CaseStudyDialog` and the working demo (single-page adaptation)

#### Scenario: Opening a case study

- **GIVEN** the *Read the case study* action on either project card
- **THEN** a `role="dialog"` `aria-modal="true"` sheet opens with an accessible name (the project name), focus
  moving to its close button, and `Escape` / backdrop / the close button all dismiss it and return focus to the
  trigger
- **AND** the sheet contains the project's `dl` (**Role / Stack / Data / Status**), the six numbered sections and
  the `.decision` callout from §Inner-page inventory, for the clicked project only

#### Scenario: The working demo filters

- **GIVEN** the *Try the demo* action
- **THEN** the same dialog is shown with its demo block in view: a **Search** field with a visible `<label>`, a
  **Filter by status** / **Filter by type** `<select>`, a **Clear filters** button, a count line
  (`aria-live="polite"`) and the sample records — 8 issues (`ISS-101`…`ISS-108`) or 5 releases (`v1.1.0`…`v1.3.0`)
- **AND** the visible rows are **derived during render** from `(query, category)` — no `setState` inside an effect
  — and text matching is case-insensitive across title and notes
- **AND** no match renders the authored empty state (*"No matching issues…"* / *"No matching releases…"*) and a
  count of `0`
- **AND** *Clear filters* resets both controls **and returns focus to the search input**
- **AND** an unknown category value falls back to *All*, exactly as the reference does

### Feature: Responsive parity

#### Scenario: Measured heights per width

- **THEN** the document is **3,696 / 3,491 / 3,942 / 5,148 / 5,619** px at 1280 / 1024 / 768 / 390 / 320 (±5 %)
- **AND** the header stays 87 px down to 768 and 79 px below, the contact panel shrinks 385 → 356 → 356, and the
  footer grows 104 → 161 → 181

### Feature: Content and brand parity

#### Scenario: The rename

- **THEN** the app never says *Ari Morgan*, *Trace Developer*, *Issue Lens*, *Release Log*, *Northline Studio*,
  *Common Loop* or *Eastmere College* — those are the reference's fictional identity; the recreation invents its own
  person, studios, projects and dates while keeping **the same copy shapes** (three-line claim, JSON editor,
  eyebrow + blurb + tags per project, three principles, four tool cells)
- **AND** the app never says *ColorLib* anywhere (source, data, comments, `index.css` notes, README)
- **AND** `apps/devfolio` declares `@free-react-templates/devfolio`, `"homepage":
  "https://devfolio.free.componentdock.com"` and `public/CNAME` with the same host
- **AND** the footer links `https://www.componentdock.com/` branded *Component Dock*

#### Scenario: One typeface, four colours

- **THEN** every heading, paragraph, button and label uses Inter (Google Fonts variable 400–700); the only other
  family is the **system mono** stack for eyebrows, tags and the editor
- **AND** the palette is exactly `#18212f`, `#5d6776`, `#dbe1e8`, `#2459d3`, `#15243a`, `#f9fafc`, `#d9f77c`
  plus the three band/editor tints named in §Design tokens — no gradient, no fifth accent
- **AND** `#d9f77c` appears in **three places only** (hero middle line, JSON strings, hero primary button)

#### Scenario: Accessibility floor

- **THEN** every band is a landmark, every control has an accessible name, the search field and the select have
  visible labels, and the skip link is first in tab order
- **AND** a visible `:focus-visible` ring clears **3:1** on *both* the light grounds and the navy/blue bands
  (§Reference defects 3)
- **AND** text contrast: `#5d6776` on `#f9fafc` ≈ 5.4:1, `#c7d1e0` on `#15243a` ≈ 8.7:1, `#dbe7ff` on `#2459d3`
  ≈ 4.6:1, white on `#2459d3` ≈ 5.9:1 — all pass at their sizes
- **AND** the dialog traps focus while open and restores it on close

## Verification checklist

- [ ] `apps/devfolio` exists, `@free-react-templates/devfolio` in `package.json`, `public/CNAME` =
      `devfolio.free.componentdock.com`, `homepage` the same
- [ ] footer links `https://www.componentdock.com/`; **no** ColorLib string in any app file (comments included);
      the app never says "Trace Developer" or "Ari Morgan"
- [ ] bands in this order: **header (87) → hero (768, `#15243a`) → `#work` (1,269) → `#about` (688, `#edf1f7`) →
      tools (371) → `#contact` (385, `#2459d3` panel, radius 8) → footer (104)**; document **3,732 px** at 1440
- [ ] header 87 px, 1 px `#dbe1e8` rule, brand glyph mono `#2459d3` + 16/700 name, four links at **14 px**
      `gap: 30px`, last one boxed (radius 5, `7px 13px`), menu button below `sm` with `aria-controls` /
      `aria-expanded`, `Escape` closes and restores focus
- [ ] hero: 7/5 split, 780 px `h1` at **89.6 px / 650 / −0.05em**, middle line `#d9f77c`, 480 px intro, two
      buttons (lime fill / `#6b7e98` outline) at radius 5 with `min-height: 47px` and a 25 px label→glyph gap
- [ ] editor card: `#0e1c30`, 1 px `#53657e`, radius 9, shadow `0 20px 35px #08111c40`, `● ● ●` + `about-me.json`
      head, `<pre>` 13.44 px with `#8cb8ff` keys / `#d9f77c` strings, foot rule and `UTF-8`
- [ ] hero foot: `1px #42516a` rule 54 px below, `01 Working demos · 02 Technical case studies · 03 Source you can
      read`, numerals white/500
- [ ] `#work`: `.section-top` with right-hand 330 px lede that **stacks at `lg`**, two **6/6** cards (radius 8,
      1 px `#dbe1e8`, 26 px apart), visual wells `#e4eafa` / `#e6eddf` at `min-height: 360px` / `padding: 35px`,
      copy `padding: 38px`, 32 px `h3`, three tags each at radius 3, both images authored placeholders
- [ ] `#about`: `#edf1f7` with `border-block`, **5/7** split, three principles on `#c9d2df` rules with 17.3 px
      titles
- [ ] tools: **5/7** split, 2 × 2 grid `gap: 25px`, four cells with 16 px titles
- [ ] `#contact`: blue **panel** (not full-bleed) radius 8, `padding: 50px`, 60 px bottom margin, 64 px `h2`, white
      button, demo-address note, **no form**
- [ ] footer 104 px, `border-top` hairline, Component Dock link, sample-data note kept
- [ ] `CaseStudyDialog`: `role="dialog"`, `aria-modal`, named, focus moved and restored, `Escape` closes, six
      sections + facts `dl` + decision callout per project
- [ ] working demo: labelled search + select + *Clear filters*, derived visible list, `aria-live` count, authored
      empty state, 8 issues / 5 releases, focus restored on clear, unknown category → *All*
- [ ] **zero** `href="#"`, zero dead anchors; hash route `#/resume` renders the résumé view (or the nav's *Résumé*
      is documented as omitted — never a dead link)
- [ ] `body.scrollWidth === clientWidth` and `scrollX 0` at **320 / 390 / 768 / 1024 / 1280 / 1440** (the 1024 px
      reference overflow is gone)
- [ ] focus ring clears 3:1 on paper, `#15243a` **and** `#2459d3`; every icon-only control named; dialog focus
      trapped
- [ ] no motion beyond hover + smooth scroll; `prefers-reduced-motion: reduce` disables both
- [ ] one typeface (Inter variable) + system mono only; `#d9f77c` in exactly three places
- [ ] 100 % coverage on the new app; `scripts/verify-app.sh devfolio` green

## Implementation notes for the port (not requirements)

- **The JSON editor is the hero.** Build it as a styled `<pre>` from a typed object (`{ name, focus[], currently }`)
  rendered with per-token spans — not a hand-typed blob — so the fixture can change without the layout drifting.
  Keep `white-space: pre-wrap` and the 2.0 line-height; that card is what makes the design read *developer* rather
  than *designer*.
- **Type is the whole personality.** Inter at **650** with **−0.05em** tracking and `line-height: 1.08` on
  headings is the only "design" on the page. If you use the static 600/700 weights instead, the hero looks like a
  different template; load the variable range (`wght@400..700`) and use `font-weight: 650`.
- **Hairlines are the layout.** Header rule, card border, tag border, principles rules, footer rule — all 1 px
  `#dbe1e8` (principles `#c9d2df`). Adding shadows or 2 px borders breaks the document feel.
- **Lime is a scalpel.** Three uses, listed above. A fourth (a link, a tag, an icon) turns the page into a "dark
  mode landing page" cliché.
- **No motion.** This design ships none — no reveals, no counters, no parallax, no carousel, no preloader. That is
  a feature of the reference and it means the app has almost nothing to test for timing.
- **The demo filter is the one real behaviour.** Implement it as a pure function `filterRecords(records, query,
  category)` in its own module: trivially testable, used by both project demos, and the direct descendant of the
  reference's shared controller.
- **Placeholder imagery:** `https://picsum.photos/seed/devfolio-<n>/1200/833` (both cards are 1200 × 833 in the
  reference). Do not copy `issue-lens-preview.jpg` / `release-log-preview.jpg`.
- **Icons:** `lucide-react` if any are needed (`ArrowDown`, `ArrowUpRight`, `Menu`, `X`, `Search`, `Printer`) —
  the reference uses text glyphs (`↓ ↗ ● ● ●`) exclusively, so text is also acceptable if it is `aria-hidden`.
- **Copy discipline.** Keep the first-person, plain-spoken voice and the admission of limits (*"It does not connect
  to GitHub"*, *"demo contact address"*); invent a new persona, projects and studios. The tone — a developer who
  names trade-offs — is the template.
- **Scope guard.** Do not build the setup guide, the source ZIPs, the demo pages as separate routes, or a contact
  form. Home page + `#/resume` + the case-study dialog is the whole deliverable.
