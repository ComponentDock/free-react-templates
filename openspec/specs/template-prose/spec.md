# Template: Prose (Author / book landing)

## Purpose

A one-page launch site for a novel, painted almost entirely white and mint: a transparent navbar
floating over a 750px hero that splits into a 60%-wide free illustration on the right and a
40%-wide text column on the left (green uppercase eyebrow "Best Seller Book Of The Week", a
60px/900 navy headline, an 18px blurb, and a 40px-radius green pill reading "Buy Now For $22.78").
Below it: five publisher logos, an "About The Book" split (a book photograph beside a heading, a
blurb and three h4 features), a band of four `#f5f4fb` counter cards over `1100 / 1200 / 340 /
12000`, a chapter reader with a sticky eight-item index (`#page-1` … `#page-8`) beside eight light
panels, three `#f5f4fb` service cards that turn green on hover, a five-slide testimonial carousel on
a photograph washed in `#17b978`, an eight-cover "My Other Books" grid with a hover overlay, an
author biography with a 120-book pill over the portrait, and a contact band (four light info cards,
the form on the right, a Google map panel on the left) over a black four-column footer.

Recreation of the ColorLib "Author" one-page template
(https://colorlib.com/wp/template/author/) as a React 19 + Vite + Tailwind CSS 4 + TypeScript
single-page application.

- **Source slug:** `author`
- **ColorLib page:** https://colorlib.com/wp/template/author/ (HTTP 200, 112,066 B)
- **Live preview:** https://preview.colorlib.com/theme/author/ (HTTP 200, 56,567 B, page title
  `Author - Free Bootstrap 4 Template by Colorlib`). The slug-only ladder resolves this one —
  no `bootstrap/`, `bb/`, `bac/` or `etc/cs/` prefix is needed. `index.html` is byte-identical to
  the directory URL (56,567 B both), so the wordmark's `index.html` link is a no-op, never a 404.
- **New name:** `prose` (apps/prose, `@free-react-templates/prose`) — a single lowercase word that
  differs from the source name, has no collision in `apps/` and none in `openspec/specs/`. The name
  was inherited from the earlier prep of this folder; this rewrite keeps it (`prose` ≠ `author`, so
  rule 5 is satisfied and no rename is needed).
- **Deploy target:** https://prose.free.componentdock.com (`apps/prose/public/CNAME`, `homepage`
  in `apps/prose/package.json`)
- **Category:** TEMPLATES.md `## One Page (91)`, row **2291** — the row links `author` and `prose`,
  which is what this spec now records. (`author` is a multi-app design: rows 2014 `pageturn`,
  2291 `prose` and 2380 `penman` all credit it. That is row multiplicity across *apps*, not a
  competing claim about provenance.)
- **Screenshot reference:**
  https://colorlib.com/wp/wp-content/uploads/sites/2/author-free-template.jpg — **68,682 B**,
  served as **AVIF** (1200 × 946). It shows the same light composition the live DOM renders:
  white ground, dark nav links over the hero, the purple-leaf book illustration on the right, the
  green pill CTA, the publisher strip, and "About The Book" starting the second screen.

### Why this spec was rewritten

`apps/prose` shipped recreating this design, but the spec it shipped with named a different one —
ColorLib **"Blogger"** (`https://preview.colorlib.com/theme/blogger/`, `css/main.css`, Poppins,
`#69B4FD` light blue plus a `45deg #62bdfc → #8490ff` gradient) — and described a blog/magazine
landing the app does not contain: a hero with a likes/comments meta bar, a "Latest News from all
categories" card carousel, a "Hot topics from Travel Section" grid, a "Fashion News This Week"
grid with Load More, an "About Blogger Team" carousel and a newsletter footer with an Instagram
grid. None of those bands exist under `apps/prose`, and the section copy the old spec prescribed is
in neither page (``"Latest News from all categories"`` is 0 hits in the blogger demo as served
today, ``"Blogger Team"`` 0).

The spec ↔ row census (`docs/spec-row-mismatch.md`, `scripts/verify-spec-row-mismatch.py`) flagged
the disagreement (`spec=blogger rows=author`); its copy adjudication searched the app's own strings
in both candidates and found them **exclusively** in the author body — `Best Seller Book Of The
Week` (author 1 / blogger 0), `About The Book` (1 / 0), `What's Inside The Book` (1 / 0),
`Kinds Words From Customers` (1 / 0), `My Other Books` (1 / 0), `Clue Of The Wooden Cottage` (1 / 0),
`Franklin Henderson` (2 / 0) — seven exclusive hits, verdict **`SPEC-STALE`**. This spec is the
measured author reference and its Requirements describe what `apps/prose` actually ships;
`docs/templates/prose/` was rewritten with it, because a corrected spec carrying a stale brief still
misdirects the next implementer.

## Reference readings (2026-10-24, `curl -4`)

`preview.colorlib.com` answers IPv4 only from this host — every probe below passes `-4`.

| artefact | bytes | sha256 |
| --- | ---: | --- |
| `theme/author/` page (DOM authority) | 56,567 | `58309318f494b9da90ee480596855da45c33d19d7383dc355d48d2ad04d0e7b5` (page bodies are request-unstable — quoted for this fetch only; `index.html` is byte-identical, so it is the same page, not a second one) |
| `theme/author/css/style.css` (token authority) | 62,455 | `a39d750657789f6f091b4aab8bd952e46cefaf4fd55d62a25c16d96ec8ae7794` |
| `theme/author/js/main.js` (counters, sticky nav, carousel boot) | 7,796 | `8b50a64575df5b6218cf50f89e4a517d8032783c273725709739d693ea95eebc` |
| `images/undraw_book_lover_mkck.svg` (hero illustration — an SVG, not a photograph) | — | — (asset — **never copied**; the recreation uses a seeded placeholder) |
| `images/bg_1.jpg`, `images/about.jpg`, `images/bg_4.jpg`, `images/book-1…8.jpg`, `images/person_1…3.jpg` | — | — (assets — never copied) |
| screenshot (above) | 68,682 | — (AVIF 1200 × 946) |
| `downloads/free/author.zip` | — | **404** (9 B) — the archive families are the `bootstrap-*` demo families; business themes have no zip, so there is no un-versioned twin to hash against |

- **`measure-reference-tokens.py --url …/theme/author/` reports `rebuilt: False`** — the demo is
  the original build, so any mismatch with the shipped app is DRIFT, not a redesign.
- **Anchor census: the page holds 47 anchors — 28 dead `href="#"` (partner logos, hero CTA, service
  links, book cards, footer socials/links), 7 in-page nav links (`#home-section`, `#about-section`,
  `#chapter-section`, `#testimonial-section`, `#projects-section`, `#author-section`,
  `#contact-section`), 8 chapter deep links (`#page-1` … `#page-8`), 1 `index.html` wordmark, 1
  `tel://1234567920`, 1 `mailto:info@yoursite.com`, and 1 external `https://colorlib.com` (the
  source's own credit line).** Counted: 28 + 7 + 8 + 1 + 1 + 1 + 1 = 47.
- **No inner pages.** Only in-page anchors are used; `theme/author/about.html` answers **404** (9 B).
  This is a genuine single-page theme, not a multi-page one with a hidden second reference.
- **Markup census: 1 `h1`, 19 `h2`, 15 `h3`, 3 `h4`, 1 form, 4 inputs (3 text + 1 submit), 1
  textarea, 0 `<label>`, 5 testimonial slides, 8 book covers, 5 publisher logos, 4 counters.**
  Field names are carried by `placeholder` only, exactly as the sheet ships them.
- **Font delivery: the stylesheet ships 0 `@font-face` blocks and the page loads no Google Fonts
  link.** The faces arrive from the preview host's injected `/cf-fonts/` block — **Raleway**
  (400/500/600/700/800/900) and **Open Sans** (400/600/700), `display:swap`. Both families are
  declared by the sheet itself (`.h1`–`.h5` / `.navbar-brand` → `"Raleway", sans-serif`; `body` →
  `"Open Sans", sans-serif`), so the recreation loading the same two faces from Google Fonts
  restores the declared intent rather than inventing a face. Google Fonts publishes both
  (`css2?family=Raleway` → 200, `css2?family=Open+Sans` → 200).
- **JavaScript:** `js/main.js` boots the owl carousel, the jQuery animate-number counters
  (`data-number` → count up on scroll), the sticky `#navi` index (`current` class), and the
  scroll-triggered navbar. In React these become `IntersectionObserver` + state, not a jQuery port.

## Design tokens

Measured from `theme/author/css/style.css` (62,455 B).

| role | value | where the sheet sets it |
| --- | --- | --- |
| Brand green | `#17b978` | 29 literals: the `a` link colour, `.subheading`, `.btn.btn-primary` fill + border, `#navi li a.current`, `.owl-dots .owl-dot.active`, `.services-1:hover`, `.testimony-wrap .icon`, and the testimonial wash (opacity `.8`) |
| Green button hover label | `#000000` | `.btn.btn-primary:hover` keeps the green fill and flips the label from white to black |
| Heading ink | `#263b5e` | `.h1`–`.h5`, `.navbar-brand`, `#navi li a`, `.ftco-counter .number` |
| Body ink | `#6a7695` | `body` — 16px, line-height 1.8, weight 400 |
| Light surface | `#f5f4fb` | `.bg-light` — counter cards, chapter panels, contact cards, the form card, service cards |
| Page ground | `#ffffff` | `body` background; `.hero-wrap .overlay` is a white wash at opacity `0` desktop / `.5` ≤991.98px |
| Dark ground | `#000000` | `.ftco-footer`, `.project .overlay`, the mobile `.ftco-navbar-light`, `.testimony-wrap .name` |
| Display face | `"Raleway", sans-serif` | `.h1`–`.h5` (weight 400, `line-height:1.5`), `.navbar-brand` (26px/900) |
| Body face | `"Open Sans", sans-serif` | `body` |
| Button shape | 40px radius, 12px/600, uppercase, `letter-spacing:2px`, shadow `0 24px 36px -11px rgba(0,0,0,.09)` | `.btn`; the CTA adds `py-3 px-4`, the submit `py-3 px-5` |
| Section rhythm | `padding: 7em 0` | `.ftco-section`; `.ftco-no-pt` / `.ftco-no-pb` strip one side |
| Section heading | `h2` 50px/700 (38px ≤767.98), `.subheading` 16px/700 green, 5px gap | `.heading-section` |
| Hero | 750px tall (600px ≤991.98), illustration 60% right, text column `max-width:40%` + `padding-left:45px`, `h1` 60px/900 (40px ≤767.98), eyebrow 14px/700 uppercase 2px tracking, body copy 18px/1.5 | `.hero-wrap .slider-text` |
| Navbar | transparent + absolute at the top (dark links on the white hero); on scroll `.scrolled` = fixed white bar, `box-shadow: 0 0 10px rgba(0,0,0,.1)`, black links, green active; mobile bar `#000000` | `.ftco-navbar-light` |
| Publisher strip | `padding: 4em 0`, five logos on one row | `.ftco-partner` |
| Counter card | `.block-18` `padding: 30px 20px`, number 34px/700 navy, label 16px | `.ftco-counter` |
| Chapter index | sticky `top:180px`, 700 weight, 15px row gap; `.current` = green + 20px right indent + a 20px rule at `left:-24px` | `#navi` |
| Chapter panel | `padding:30px`, `border-radius:5px`, `margin-bottom:7em`, heading 30px/700 | `.page` |
| Testimonial band | the top 400px is a photograph under `#17b978` at opacity `.8`; white heading; cards white, radius 4px, 40px round green quote chip, 80px round avatars, name 20px/500 | `.testimony-section`, `.testimony-wrap` |
| Book card | 330px tall, photo cover, overlay `#000000` at `.5` on hover, title 24px/700 white, category 12px/600 uppercase 2px tracking | `.project` |
| Author pill | `#17b978` fill, `padding:10px 15px`, 40px radius, number + "View All Books" | `.ftco-about .counter-wrap .btn-custom` |
| Contact field | 52px tall, `#fff`, 5px radius, 18px text, focus border `#000000`, placeholder `#6c757d` | `.form-control` |
| Footer | `#000000`, `7em 0`, four columns, `.block-23` rows with a 40px icon cell, socials as three round chips | `.ftco-footer` |

## Requirements

### Feature: Navigation bar

The system SHALL render a fixed top navigation bar carrying the wordmark "Prose" with a green full
stop, seven in-page links (Home, About, Chapters, Services, Reviews, Author, Contact), and a
collapsible menu below the `lg` breakpoint that exposes `aria-expanded`.

#### Scenario: Navbar content

- **GIVEN** the Prose page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the wordmark "Prose" followed by a green full stop
- **AND** it SHALL show the links Home, About, Chapters, Services, Reviews, Author and Contact

#### Scenario: Navbar links reach their sections

- **GIVEN** the navbar is rendered
- **WHEN** a visitor activates the "Reviews" link
- **THEN** the document SHALL scroll to the section whose `id` is `reviews`

#### Scenario: Mobile menu

- **GIVEN** the viewport is narrower than the `lg` breakpoint
- **WHEN** the visitor presses the menu button
- **THEN** the button SHALL report `aria-expanded="true"`
- **AND** the link list SHALL be visible
- **AND** activating a link SHALL close the list

### Feature: Hero banner

The system SHALL render a full-height hero with a green uppercase eyebrow, a level-1 headline, a
blurb, a green pill CTA and a book-cover image.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL show the eyebrow "Best Seller Book Of The Week"
- **AND** it SHALL contain a level-1 heading "Clue Of The Wooden Cottage"
- **AND** it SHALL show the CTA "Buy Now For $22.78" as a link styled as a pill
- **AND** it SHALL show a cover image with alternative text

### Feature: Publisher strip

The system SHALL render a single-row strip of five publisher marks between the hero and the book
section.

#### Scenario: Publisher marks

- **GIVEN** the page is rendered
- **WHEN** the strip is displayed
- **THEN** it SHALL show five publisher names (the reference ships five logo images; the recreation
  substitutes text marks)

### Feature: About the book

The system SHALL render an "About The Book" split band: a book photograph beside a heading, a blurb
and three feature blocks.

#### Scenario: Book band content

- **GIVEN** the page is rendered
- **WHEN** the section whose `id` is `about` is displayed
- **THEN** it SHALL contain the heading "About The Book"
- **AND** it SHALL show the features "Award Achievements", "Read On Any Devices" and "Very High
  Resolution", each with its own paragraph

### Feature: Statistics band

The system SHALL render four counters that animate from zero to their target once the band is 30%
visible, and stay at the target afterwards.

#### Scenario: Counters animate once

- **GIVEN** the statistics band is below the fold
- **WHEN** it scrolls into view
- **THEN** each counter SHALL run from 0 to its target value
- **AND** scrolling away and back SHALL NOT restart the animation

#### Scenario: Counter labels

- **GIVEN** the counters have finished
- **WHEN** the band is read
- **THEN** the four labels SHALL be "Copies Sold", "Copies Released", "Cups Of Coffee" and
  "Happy Readers"

### Feature: Chapter reader

The system SHALL render a chapter index beside a panel that swaps its content when an index entry
is activated.

#### Scenario: Chapter list

- **GIVEN** the page is rendered
- **WHEN** the section whose `id` is `chapters` is displayed
- **THEN** it SHALL show the heading "What's Inside The Book"
- **AND** the index SHALL list Title Page, Copyright, Table Of Contents, Dedication, Foreword,
  Prologue and Epilogue

#### Scenario: Selecting a chapter

- **GIVEN** the chapter reader is displayed with "Title Page" selected
- **WHEN** the visitor activates "Prologue"
- **THEN** the panel SHALL show the Prologue heading and its paragraph
- **AND** the "Prologue" index entry SHALL be marked as the current one

### Feature: Services

The system SHALL render three service cards on the light surface, each with an icon, a title and a
paragraph.

#### Scenario: Service cards

- **GIVEN** the page is rendered
- **WHEN** the section whose `id` is `services` is displayed
- **THEN** it SHALL show the heading "Services"
- **AND** it SHALL show the cards "Experience", "Marketing Goals" and "Targeting Vision"

### Feature: Testimonials

The system SHALL render a review band with an eyebrow, a heading and three quoted reviews, each
carrying the reviewer's name, role and avatar.

#### Scenario: Review cards

- **GIVEN** the page is rendered
- **WHEN** the section whose `id` is `reviews` is displayed
- **THEN** it SHALL show the heading "Kind Words From Readers"
- **AND** it SHALL show three reviews, each with quote text, a name, a role and an avatar image

### Feature: Author biography

The system SHALL render an author band with a portrait, an eyebrow, the author's name, two
paragraphs of biography and three contact rows.

#### Scenario: Author band content

- **GIVEN** the page is rendered
- **WHEN** the section whose `id` is `author` is displayed
- **THEN** it SHALL show the eyebrow "About The Author" and the name "Eleanor Quinn"
- **AND** it SHALL show a location, a phone number and an email address, each with an icon

### Feature: Contact

The system SHALL render a contact band with a heading, four information cards and a form that
confirms submission without leaving the page.

#### Scenario: Contact information

- **GIVEN** the page is rendered
- **WHEN** the section whose `id` is `contact` is displayed
- **THEN** it SHALL show the heading "Contact Me"
- **AND** it SHALL show four cards labelled "Address", "Contact Number", "Email Address" and
  "Website"

#### Scenario: Form fields

- **GIVEN** the contact form is displayed
- **WHEN** it is rendered
- **THEN** it SHALL offer the fields Your Name, Your Email, Subject and Message
- **AND** the email field SHALL be of type `email`

#### Scenario: Submitting the form

- **GIVEN** the contact form is filled in
- **WHEN** the visitor submits it
- **THEN** the page SHALL NOT navigate away
- **AND** it SHALL show a confirmation message

### Feature: Footer

The system SHALL render a dark four-column footer with About, Links, Services and contact columns,
three social links, a copyright line and the Component Dock credit.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the column headings "About", "Links", "Services" and "Have a Question?"
- **AND** it SHALL show three social links
- **AND** it SHALL show a copyright line

### Feature: Page composition

The system SHALL compose the bands in reference order inside one page with a banner landmark, a
main landmark and a content-info landmark, and set the document title.

#### Scenario: Full page render

- **GIVEN** the Prose app is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL be in the banner landmark, the bands SHALL be in the main landmark and
  the footer SHALL be in the contentinfo landmark
- **AND** the bands SHALL appear in the order hero, publishers, about, statistics, chapters,
  services, reviews, author, contact
- **AND** the document title SHALL be "Prose — Author & Book Template"

### Feature: Component Dock attribution

The system SHALL credit Component Dock — the marketplace that publishes this template — with a
visible link to `https://www.componentdock.com/` in the site footer (AGENTS.md rule 5). The credit
is chrome, not source content: it SHALL NOT change the footer's own layout or copy beyond the
credit line.

#### Scenario: Footer attribution

- **GIVEN** any page of the template is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL contain an anchor whose `href` is `https://www.componentdock.com/`
- **AND** the anchor's text SHALL name Component Dock

### Feature: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under `apps/prose/` may
contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments,
CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and
the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock
(`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/prose/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Known app delta — fidelity debt for the next implementer pass

`apps/prose` reproduces the reference's **bands and copy** (hero eyebrow + headline + CTA, publisher
strip, about + three features, four counters, chapter reader, three services, reviews, author bio,
contact cards + form, four-column footer) but not its **skin**, and it ships one band short. These
deltas are recorded, not claimed:

| axis | reference (measured) | shipped `apps/prose` | note |
| --- | --- | --- | --- |
| Navbar | absolute + transparent over the white hero, dark links, white fixed bar with `0 0 10px rgba(0,0,0,.1)` on scroll | fixed navy bar (`bg-navy`), white links | the reference's hero is light; a navy bar is the largest visual departure |
| Hero ground | white page, SVG book illustration at 60% width on the right, text column capped at 40% | navy gradient ground with a placeholder cover image | reference is an illustration on white, not a dark hero |
| Hero CTA | 40px radius, 12px/600 uppercase, 2px tracking, shadow `0 24px 36px -11px rgba(0,0,0,.09)` | `rounded` (4px), normal case, no tracking, no shadow | |
| Publisher strip | five logo images (Microsoft, Colorado, Java, Google, Adobe) in `4em 0` padding | five publisher names as text | assets are never copied; text marks are the documented substitution |
| Counter label | "Cup Of Coffee" | "Cups Of Coffee" | |
| Chapter count | eight panels — Title Page, Copyright, Table Of Contents, Dedication, Foreword, Prologue, Epilogue, **Epigraph** | seven panels (Epigraph missing) | reference index is `#page-1` … `#page-8` |
| Testimonials | five-slide owl carousel with dots on a photograph under a `#17b978` wash | three static cards on navy with the photo at 20% opacity | carousel behaviour is not reproduced |
| Books band | "My Other Books" — eight 330px covers, hover overlay at `.5`, title + "Romance" category | **not shipped** | the band and its nav entry are both absent; the largest structural delta |
| Author bio | six-row info list (Name, Date of birth, Address, Zip code, Email, Phone) + a 120-book pill over the portrait | three contact rows with lucide icons, no pill, no info grid | |
| Contact | four light cards, then form on the right and a Google **map panel** on the left | four cards, then a full-width form; no map | map `iframe` is a third-party dependency, legitimately dropped — record it |
| Footer | `#000000`, `7em 0`, Services rendered as links, source credit line | `bg-navy-dark` (#1a2a42), Services as plain text, Component Dock credit | the credit replacement is required; the ground colour is drift |
| Typefaces | Raleway + Open Sans delivered by the host's `/cf-fonts/` block | Raleway 400–900 + Open Sans 400/600/700 from Google Fonts | restores the declared faces — not a divergence |
| Dark mode | none — the reference is light only | `@custom-variant dark` plus a handful of `dark:` utilities, no toggle control | dead surface, not a feature |

Closing this delta is an implementer change (tests + per-app gate), not a prep one — it is not part
of this rewrite.

## Verification checklist

- [x] App exists and ships from `apps/prose` (deploy target https://prose.free.componentdock.com)
- [x] Footer links `https://www.componentdock.com/`
- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, `docs/templates/prose/`, `TEMPLATES.md` and the PR
- [x] Requirements describe what `apps/prose` renders (nine bands + navbar + footer + credit)
- [x] Tokens re-measured from the reference sheet (`theme/author/css/style.css`, 62,455 B)
- [x] Reference recorded per `docs/replication.md`: live DOM, stylesheet, anchor census, font delivery, screenshot
- [ ] `npm run spec:validate` passes for `template-prose`
- [ ] Typecheck / lint / 100% coverage / build — per-app gate, run by the implementer on any app change
- [ ] Skin parity with the reference (see "Known app delta"): light navbar over a white hero, the illustration split, the 40px pill CTA, the black footer
- [ ] Structural parity: the "My Other Books" band and the eighth chapter (Epigraph)
