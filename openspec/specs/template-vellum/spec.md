# Template: Vellum (Blog / magazine listing)

## Purpose

A hot-pink-to-amber magazine landing page. A transparent navbar floats 20px over a full-viewport
photograph of a woman in a straw hat, washed in a `45deg #f200ff → #ffba42` gradient at 80%
opacity; the hero stack is a white 18px eyebrow ("Hello! Welcome to"), a 10vw/700 white headline,
an 18px `rgba(255,255,255,.9)` blurb and a circular scroll cue. The white body holds nine
magazine rows — an `xl` 8/12 photograph beside a 4/12 text column carrying a 14px/500 uppercase
`rgba(0,0,0,.2)` category, a 40px/700 black headline, three 50px share chips that fade in on
hover and a 12px `rgba(0,0,0,.2)` "date | read time" meta line — followed by a centred
`1 … 5` pagination of 40px circles (the active one filled gold). The page closes on a four-column
`#222831` footer: wordmark + blurb + three 50px social circles, "latest News" with two thumbnail
items, "Information" with four arrow links, "Have a Questions?" with address / phone / e-mail, and
the copyright line.

Recreation of the ColorLib **"Readit"** template
(https://colorlib.com/wp/template/readit/) as a React 19 + Vite + Tailwind CSS 4 + TypeScript
single-page application.

- **Source slug:** `readit`
- **ColorLib page:** https://colorlib.com/wp/template/readit/ (HTTP 200, 111,994 B)
- **Live preview:** https://preview.colorlib.com/theme/readit/ (HTTP 200, 25,803 B, page title
  `Readit - Free Bootstrap 4 Template by Colorlib`). The slug-only ladder resolves this one — no
  `bootstrap/`, `bb/`, `bac/` or `etc/cs/` prefix is needed. `index.html` is byte-identical to the
  directory URL (25,803 B both), so the wordmark's `index.html` link is a no-op, never a 404.
- **New name:** `vellum` (apps/vellum, `@free-react-templates/vellum`) — a single lowercase word
  that differs from the source name, with no collision in `apps/` or `openspec/specs/`. The name was
  inherited from this folder's earlier prep; the rewrite keeps it (`vellum` ≠ `readit`, so rule 5 is
  satisfied and no rename is needed).
- **Deploy target:** https://vellum.free.componentdock.com (`apps/vellum/public/CNAME`, `homepage`
  in `apps/vellum/package.json`)
- **Category:** TEMPLATES.md `## Blog (60)`, row **282** — that row links `readit` and `vellum`,
  which is what this spec now records. `readit` appears on exactly one row, so there is no
  competing claim about provenance.
- **Screenshot reference:**
  https://colorlib.com/wp/wp-content/uploads/sites/2/readit-free-template.jpg — **63,283 B**,
  served as **AVIF** (1200 × 946). It captures the hero and the first magazine row: the white
  `Readit.` wordmark with a gold `it`, the four white nav links, the pink→orange wash over the
  straw-hat photograph, the 96px-class white headline, and the blue cracked-wall car illustration
  beside "Build a website in minutes with Adobe Templates".

### Why this spec was rewritten

`apps/vellum` shipped recreating this design, but the spec it shipped with named a different one —
ColorLib **"Accordion 16"** (`https://preview.colorlib.com/theme/bac/accordion-16/`, lime
`#72c02c` on `#efefef`, Poppins, a single-band Bootstrap accordion demo) — and described a
marketing/FAQ page the app does not contain: a three-column features grid, an expanding FAQ list
with chevron rotation, a dark CTA banner with a newsletter field. None of those bands exist under
`apps/vellum`; its components are `Navbar`, `Hero`, `BlogList`, `Pagination`, `Footer`.

The spec ↔ row census (`docs/spec-row-mismatch.md`, `scripts/verify-spec-row-mismatch.py`) flagged
the disagreement (`spec=accordion-16 rows=readit`); its copy adjudication searched the app's own
strings in both candidates and found them **exclusively** in the `readit` body — `Hello! Welcome to`
(readit 1 / accordion-16 0), `Build a website in minutes with Adobe Templates` (9 / 0), `latest News`
(1 / 0), `Have a Questions?` (1 / 0), `203 Fake St. Mountain View, San Francisco, California, USA`
(1 / 0) — verdict **`SPEC-STALE`**. This spec is the measured `readit` reference and its Requirements
describe what `apps/vellum` actually ships; `docs/templates/vellum/` was rewritten with it, because a
corrected spec carrying a stale brief still misdirects the next implementer.

## Reference readings (2026-10-24, `curl -4`)

`preview.colorlib.com` answers IPv4 only from this host — every probe below passes `-4`.

| artefact | bytes | sha256 |
| --- | ---: | --- |
| `theme/readit/` page (DOM authority) | 25,803 | `cefd37f89821e45425065dc5d0a0888678d15f1b0b4c07298e1ac5dab25abe7a` (page bodies are request-unstable — quoted for this fetch only; `index.html` is byte-identical, so it is the same page, not a second one) |
| `theme/readit/css/style.css` (token authority) | 65,873 | `925bebf2b747422c3152b6ca0b9231ddca7f39c3b587ce18ac03757128ba4991` |
| `theme/readit/js/main.js` (full-height hero, nav scroll state, loader, carousel boot) | 6,101 | `62bfa4888d835f3e19a1fd57525b90a37da75200f5dc0f191a52f761a16f4c39` |
| `images/bg_1.jpg` … `images/bg_4.jpg`, `images/image_1.jpg` … `images/image_9.jpg` | — | — (assets — **never copied**; the recreation uses seeded placeholders) |
| screenshot (above) | 63,283 | — (AVIF 1200 × 946) |
| `downloads/free/readit.zip` | — | **404** (9 B) — the archive families are the `bootstrap-*` demo families; business themes have no zip, so there is no un-versioned twin to hash against |

- **`measure-reference-tokens.py --slug readit` reports `rebuilt: False`** — the demo is the original
  build, so any mismatch with the shipped app is DRIFT, not a redesign. Aggregate palette:
  `#fff` 57, `#ffd369` 33, `#000000` 20, `#007bff` 11, `#6c757d` 10, `#f200ff` 8, `#ffba42` 7,
  `#212529` 6. The `#007bff` / `#6c757d` / `#212529` literals are Bootstrap's own defaults; the
  theme palette is gold `#ffd369` plus the two gradient stops.
- **Anchor census: the page holds 94 anchors — 70 dead `href="#"`, 18 `blog-single.html` (nine card
  images + nine card headlines), 2 `index.html` (wordmark + "Home" nav link), 1 `blog.html`
  ("Articles"), 1 `about.html` ("Team"), 1 `contact.html` ("Contact"), and 1 external
  `https://colorlib.com` (the source's own credit line).** Counted: 70 + 18 + 2 + 1 + 1 + 1 + 1 = 94.
  The 70 dead anchors break down as 27 card share chips (9 × Twitter/Facebook/Instagram),
  18 card meta links (9 × date + read time), 1 hero scroll cue, 6 pagination entries, 3 footer
  socials, 2 footer news headlines, 6 footer news meta links, 4 footer "Information" links and
  2 footer contact rows — plus the footer wordmark.
- **Inner pages are LIVE** — this is a four-page theme, and they are the authoritative reference for
  the bands a single-page recreation has to drop or invent: `blog.html` (25,854 B — the archive
  listing, same hero, nine rows headed "All you want to know about industrial laws"),
  `about.html` (21,668 B — h1 "About", h2 "We give you the best articles you want.", a "Happy
  Clients" band), `contact.html` (16,759 B — h1 "Contact us", "Contact Information", **1 form with
  4 inputs**), `blog-single.html` (30,009 B — h1 "Blog Single", article body, six comments,
  "Leave a comment", Categories / Recent Blog / Tag Cloud sidebar, **2 forms, 5 inputs**). All four
  answer HTTP 200; the nav's dead-end risk is the recreation's choice, not the source's.
- **Markup census on the landing page: 1 `h1`, 14 `h2`, 2 `h3`, 0 forms, 0 inputs, 0 `<img>`
  elements, 9 `.case` rows, 6 pagination entries, 3 footer socials, 4 footer columns.** Every
  photograph is a CSS `background-image` on an empty `<a class="img">`, so the recreation must carry
  the image in an `<img>`/background with an accessible name — the source has none.
- **Font delivery: the stylesheet ships 0 `@font-face` blocks and the page carries no Google Fonts
  link.** The faces arrive from the preview host's injected `/cf-fonts/` block — **Poppins** at
  weights 300, 400, 500, 600, 700, 800 and 900 in `latin` / `latin-ext` / `devanagari` subsets,
  `display:swap`. The sheet itself declares `"Poppins", Arial, sans-serif` on `body`, `.navbar-brand`,
  `.slider-text h1` and `.slider-text .subheading`, so loading Poppins from Google Fonts restores
  the declared intent rather than inventing a face. Google Fonts publishes it
  (`css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap` → **200**; the legacy
  `css?family=Poppins:300,400,…&display=swap` → 200 as well).
- **JavaScript:** `js/main.js` sets `.js-fullheight` to `$(window).height()` on load and on resize
  (the hero is exactly one viewport tall), adds `.scrolled` past 80px and `.awake` past 350px to
  `#ftco-navbar` (the white sliding bar), hides the `#ftco-loader` overlay, and boots Stellar
  parallax on the hero background (`data-stellar-background-ratio="0.5"`), the owl testimonial
  carousel and `animateNumber` counters — none of the last three have an element on the landing page.
  In React the height and scroll state become CSS plus a scroll listener, not a jQuery port.

## Design tokens

Measured from `theme/readit/css/style.css` (65,873 B) and confirmed against the served markup.

| role | value | where the sheet sets it |
| --- | --- | --- |
| Brand gold | `#ffd369` | 33 literals: `a` (and `:hover`/`:focus`), `.navbar-brand i`, the nav link hover, `.btn.btn-primary` fill + border, `.case .text .media-social li a:hover`, `.block-27 li.active a/span`, `.blog-entry .text .topper` (+ triangle tail), `.icon-video`, `.ftco-footer .logo a span`, `.ftco-footer a:hover`, `.ftco-footer .block-21 .meta > div a` |
| Hero gradient | `linear-gradient(45deg, #f200ff 0%, #ffba42 100%)` at `opacity: .8` | `.hero-wrap .overlay` — the only place either stop appears (`#f200ff` 8 literals, `#ffba42` 7, all vendor-prefixed duplicates of that one rule) |
| Footer ground | `#222831` | `.ftco-footer` (line 2111). ⚠️ `.ftco-bg-dark` sets `#3c312e` (line 2101) and the footer element carries **both** classes, but `.ftco-footer` comes later at equal specificity, so `#222831` is what paints |
| Nav ground | transparent over the hero; `#ffffff` when scrolled; `#000000` only ≤991.98px | `.ftco-navbar-light` (`background: transparent !important; position: absolute; top: 20px`), `.scrolled` (`background: #fff !important; box-shadow: 0 0 10px 0 rgba(0,0,0,.1)`), the ≤991.98 block |
| Wordmark | 26px / 900, Poppins, `#fff`; the `i` span (the "it" of Readit) is `#ffd369`; `#000000` once scrolled | `.navbar-brand` (26px/900) + `.navbar-brand i` + `.scrolled .navbar-brand` |
| Nav link | 18px / 400, `rgba(255,255,255,.8)`, 20px side padding, `.9rem` vertical; hover gold; `#000000` when scrolled | `.ftco-navbar-light .navbar-nav > .nav-item > .nav-link` |
| Hero eyebrow | 18px / 400, `#ffffff`, no bottom margin | `.slider-text .subheading` |
| Hero headline | `10vw` (`14vw` ≤1199.98), weight 700, `line-height: 1.2`, `#ffffff`, Poppins | `.slider-text h1` |
| Hero blurb | 18px / 1.5, `rgba(255,255,255,.9)` | `.slider-text p` |
| Body ink | `gray` (`#808080`), 16px, `line-height: 1.8`, weight 400 | `body` |
| Heading ink | `rgba(0,0,0,.8)`, `line-height: 1.3`, weight 400 | `h1, h2, h3, .h1, .h2, .h3` |
| Card category | 14px / 500, uppercase, `rgba(0,0,0,.2)`, 10px under-gap | `.case .text .subheading` |
| Card headline | 40px / 700, 30px under-gap; link `#000000`, `rgba(0,0,0,.5)` on row hover | `.case .text h2`, `.case .text h2 a`, `.case:hover .text h2 a` |
| Card meta | 12px, `rgba(0,0,0,.2)`; links `#000000` on row hover | `.case .text .meta p` |
| Card share chips | 50 × 50, `rgba(0,0,0,.05)` ground, `border-radius: 4px`, 20px glyph, `#000000`; hover ground gold; row opacity `0 → 1` on hover above 1199.98px | `.case .text .media-social` |
| Card photograph | 400px tall, `background-size: cover`, `center center`; columns 8/12 image + 4/12 text at `xl`, 6/6 at `md`; 50px row spacing | `.case .img`, `.img`, `.case` |
| Pagination | 40 × 40, `border-radius: 50%`, `1px solid #e6e6e6`, colour `gray`; active `background: #ffd369`, white text, transparent border | `.block-27 ul li a, span` |
| Section rhythm | `padding: 7em 0` (`6em` ≤767.98) | `.ftco-section` |
| Footer | `padding: 5em 0 3em 0`, 16px, ground `#222831`; headings 20px / 400 `#ffffff`, 40px under-gap; paragraphs and links `rgba(255,255,255,.7)` → `#fff` on hover; news meta `11px #ffd369`; socials 50px circles `rgba(255,255,255,.05)` | `.ftco-footer`, `.ftco-footer-widget h2`, `.ftco-footer-social` |
| Container | `max-width: 1210px` | `.container` |
| Button shape | `border-radius: 3px`, no shadow (no button is rendered on this page — the rule is cited for parity if one is added) | `.btn` |

Two sheet quirks worth recording, because a naive token grep gets them wrong: `.ftco-footer
.ftco-heading-2 { color: #000000 }` is **dead** on the footer headings (`.ftco-footer
.ftco-footer-widget h2` is one element selector more specific and paints them white), and the footer
element's `ftco-bg-dark` class loses to `.ftco-footer` for the ground colour.

## Sections (reference order)

1. **Navbar** — `nav#ftco-navbar.ftco-navbar-light`, transparent and absolutely positioned 20px from
   the top over the hero; wordmark `Read<i>it</i>.` linking `index.html`; four links — Home, Articles
   (`blog.html`), Team (`about.html`), Contact (`contact.html`); becomes a fixed white bar with a
   shadow after 80px of scroll.
2. **Hero** — `.hero-wrap.js-fullheight` on `images/bg_1.jpg` with the 45° magenta→amber overlay at
   `.8`; eyebrow, `h1`, blurb, infinite `wheel-up-down` scroll cue (`.mouse-icon` → dead `#`).
3. **Magazine list** — one `.ftco-section` holding nine `.case` rows: image link left, text column
   right (category, 40px headline link, three share chips, `date | read time`).
4. **Pagination** — `.block-27` inside the same section: `‹ 1 2 3 4 5 ›`, page 1 active.
5. **Footer** — `.ftco-footer.ftco-bg-dark.ftco-section` over `#222831`: (a) wordmark `Read<span>it</span>.`
   + blurb + three social circles; (b) "latest News" with two 80px thumbnails, each a 16px headline
   and a three-part `Oct. 16, 2019 / Admin / 19` meta; (c) "Information" — Home, About, Articles,
   Contact, each with a forward-arrow glyph; (d) "Have a Questions?" — address, `+2 392 3929 210`,
   `info@yourdomain.com`; then the centred copyright line crediting the source site (the recreation
   credits Component Dock instead).
6. **Preloader** — `#ftco-loader.show.fullscreen` overlay removed by `js/main.js` on load; the
   recreation omits it (a blank-until-load flash is not worth the fidelity).

## Requirements

### Feature: Navbar

The system SHALL render a banner navbar with the site wordmark and four links, and SHALL switch it
to a white ground with dark links once the page is scrolled past 80px.

#### Scenario: Navbar content

- **GIVEN** the Vellum application is loaded
- **WHEN** the navbar is displayed
- **THEN** it SHALL show the wordmark "Vellum."
- **AND** it SHALL show the links "Home", "Articles", "Team" and "Contact"

#### Scenario: Scrolled navbar

- **GIVEN** the page is at the top
- **WHEN** the visitor scrolls past 80px
- **THEN** the navbar SHALL paint a white ground with dark links and a soft shadow
- **AND** scrolling back to the top SHALL restore the dark ground with light links

#### Scenario: Mobile menu

- **GIVEN** the viewport is narrower than the `md` breakpoint
- **WHEN** the visitor activates the menu control
- **THEN** the four links SHALL be revealed
- **AND** the control SHALL report `aria-expanded="true"`

### Feature: Hero

The system SHALL render a full-viewport hero over a photograph, washed in the brand gradient, with an
eyebrow, a headline, a blurb and a scroll cue.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL show the eyebrow "Hello! Welcome to"
- **AND** it SHALL show the headline "Vellum blog" as the page's only `h1`
- **AND** it SHALL show a blurb of at least one sentence
- **AND** it SHALL show a scroll cue whose accessible name names the blog section

#### Scenario: Hero ground

- **GIVEN** the hero is painted
- **WHEN** its layers are inspected
- **THEN** it SHALL show a photograph covered by a `45deg` linear gradient from `#f200ff` to `#ffba42`
- **AND** the gradient layer SHALL be `aria-hidden` with `opacity: .8`
- **AND** the hero SHALL be at least one viewport tall

### Feature: Magazine list

The system SHALL render nine magazine rows, each an image link beside a text column with a category,
a linked headline, three share links and a date/read-time meta line.

#### Scenario: Row count and structure

- **GIVEN** the blog section is displayed
- **WHEN** its rows are counted
- **THEN** there SHALL be nine rows
- **AND** each row SHALL contain exactly one image, one category label, one headline link, three
  share links and one meta line
- **AND** every category label SHALL be uppercase

#### Scenario: Row categories

- **GIVEN** the nine rows are rendered
- **WHEN** their categories are read
- **THEN** the set SHALL include "Illustration", "Application" and "Design"

#### Scenario: Meta format

- **GIVEN** a row's meta line is read
- **WHEN** it is displayed
- **THEN** it SHALL read as `<date> | <n> min read`

### Feature: Pagination

The system SHALL render a five-page pagination control with previous and next entries.

#### Scenario: Pagination content

- **GIVEN** the blog list is displayed
- **WHEN** the pagination is read
- **THEN** it SHALL expose the pages 1 through 5
- **AND** it SHALL expose a previous and a next control, each with an accessible name

#### Scenario: Current page

- **GIVEN** the pagination is displayed
- **WHEN** it is inspected
- **THEN** exactly one page entry SHALL be marked as the current page
- **AND** that entry SHALL be painted gold

### Feature: Footer

The system SHALL render a dark four-column footer with the wordmark, a blurb, three social links, a
two-item latest-news column, four information links and a three-row contact column, closed by a
copyright line.

#### Scenario: Footer columns

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the column headings "latest News", "Information" and "Have a Questions?"
- **AND** it SHALL show the wordmark "Vellum." with a blurb and three social links
- **AND** "latest News" SHALL list exactly two items, each with a headline and a meta line
- **AND** "Information" SHALL list Home, About, Articles and Contact
- **AND** "Have a Questions?" SHALL show an address, a telephone number and an e-mail address

#### Scenario: Contact actions

- **GIVEN** the footer contact column is displayed
- **WHEN** the telephone and e-mail rows are inspected
- **THEN** the telephone row SHALL be a `tel:` link
- **AND** the e-mail row SHALL be a `mailto:` link

### Feature: Page composition

The system SHALL compose the bands in reference order inside one page with a banner, a main and a
contentinfo landmark, and set the document title.

#### Scenario: Full page render

- **GIVEN** the Vellum app is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL be in the banner landmark, the hero, list and pagination SHALL be in the
  main landmark, and the footer SHALL be in the contentinfo landmark
- **AND** the bands SHALL appear in the order navbar, hero, list, pagination, footer
- **AND** the first tab stop SHALL be a skip link to the main landmark
- **AND** the document title SHALL be "Vellum — Blog Template"

### Feature: Component Dock attribution

The system SHALL credit Component Dock — the marketplace that publishes this template — with a
visible link to `https://www.componentdock.com/` in the site footer (AGENTS.md rule 5). The credit
replaces the source's own "made with … by" line and SHALL NOT change the footer's layout otherwise.

#### Scenario: Footer attribution

- **GIVEN** any page of the template is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL contain an anchor whose `href` is `https://www.componentdock.com/`
- **AND** the anchor's text SHALL name Component Dock

### Feature: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under `apps/vellum/` may
contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments,
CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and
the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock
(`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/vellum/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Known app delta — fidelity debt for the next implementer pass

`apps/vellum` reproduces the reference's **bands, copy and list arithmetic** (transparent-or-dark
navbar, gradient hero, nine rows, five-page pagination, four-column footer, credit) but not every
surface of its **skin**. These deltas are recorded, not claimed:

| axis | reference (measured) | shipped `apps/vellum` | note |
| --- | --- | --- | --- |
| Navbar ground | transparent, `position: absolute; top: 20px`, floating over the hero; white only when scrolled | opaque `#343a40` bar from the first pixel | largest visual departure — the hero's top 80px lose the gradient |
| Wordmark accent | `Read<i>it</i>.` — the middle two letters gold | plain "Vellum." in white | a rename may accent the middle letters (`Vell` + gold `um`) |
| Hero headline size | `10vw` (`14vw` ≤1199.98) → 120px at 1200 wide | `text-5xl` → `lg:text-8xl` (96px) | | 
| Row photograph | CSS background, no transform on hover | `<img>` with `group-hover:scale-105` | the source does not zoom the image |
| Share chips | 50 × 50, `rgba(0,0,0,.05)`, 4px radius, 20px glyph, gold fill on hover | bare 20px glyphs, no chip ground | |
| Pagination shape | 40px **circles**, `1px #e6e6e6`, active gold with white text | 40px **squares**, `border`, no radius | |
| Footer ground | `#222831` | `--color-cocoa: #3c312e` (`ftco-bg-dark`, the losing rule) | token is measured-wrong, not a taste call |
| Footer socials | 50px circles, `rgba(255,255,255,.05)` | bare glyphs at 20px | |
| Footer headings | 20px / **400** white | 20px / heading default (700) | |
| Footer news meta | 11px `#ffd369` | `text-sm text-white/40` | |
| Card meta hover | links flip `rgba(0,0,0,.2)` → `#000000` on row hover | static | |
| Preloader | `#ftco-loader` overlay removed on load | none | deliberate omission |
| Typeface | Poppins 300–900 injected by the host's `/cf-fonts/` block | Poppins from Google Fonts (`index.html`) | restores the declared face — not a divergence |

Closing this delta is an implementer change (tests + per-app gate), not a prep one — it is not part
of this rewrite.

## Verification checklist

- [x] App exists and ships from `apps/vellum` (deploy target https://vellum.free.componentdock.com)
- [x] Footer links `https://www.componentdock.com/`
- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, `docs/templates/vellum/`, `TEMPLATES.md` and the PR
- [x] Requirements describe what `apps/vellum` renders (navbar, hero, nine rows, pagination, footer, credit)
- [x] Tokens re-measured from the reference sheet (`theme/readit/css/style.css`, 65,873 B)
- [x] Reference recorded per `docs/replication.md`: live DOM, stylesheet, anchor census, font delivery, screenshot
- [x] Spec ↔ row agreement: row 282 links `readit` and `vellum` (`docs/spec-row-mismatch.md` drift case retired)
- [x] `npm run spec:validate` passes for `template-vellum` (validated 2026-10-24 with the main tree's `openspec` binary: "Specification 'template-vellum' is valid")
- [ ] Typecheck / lint / 100% coverage / build — per-app gate, run by the implementer on any app change
- [ ] Skin parity with the reference (see "Known app delta"): transparent navbar over the gradient hero, gold middle letters in the wordmark, 50px share chips, circular pagination, `#222831` footer
