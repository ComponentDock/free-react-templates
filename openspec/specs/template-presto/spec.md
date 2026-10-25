# Template: Presto (Web Hosting)

## Purpose

Presto is a full multi-section **web-hosting marketing site** in the
free-react-templates monorepo. It is an original React recreation of the ColorLib
free **"Fastes"** template (source slug `fastes` — the hosting family's
**coral-on-purple / layered-wave** page: a deep-violet `#73469F`→`#3B2774` wave
hero whose centred caption sits over a white pill domain-search bar with a
circular peach search button, followed immediately by three overlapping white
pricing cards that break out over the hero's white cloud-scallop divider, then a
light body of a 6-item feature grid, a lilac two-contact support band, a logo
strip, a dark testimonial band, a dark FAQ band, a split "Commitment to Security"
band, a light `#F8FCFF` help CTA and a purple image footer).

It is built under a different name with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript. The recreation matches section structure, order,
copy kind and design tokens 1:1 but copies no asset (no images, no fonts, no CSS
files, no icon paths, no brand marks) and never reuses the source name or copy
verbatim.

- **Source:** https://colorlib.com/wp/template/fastes/
  (page title from the live preview: `Hosting | Teamplate`; verified 2026-10-11)
- **Preview:** `https://preview.colorlib.com/theme/fastes/` returns
  **HTTP 200**, `text/html; charset=utf-8`, **38,486 B** (verified 2026-10-11).
  Its DOM was fetched and parsed and its main stylesheet
  `https://preview.colorlib.com/theme/fastes/assets/css/style.css`
  (HTTP 200, **55,037 B**) was tokenized. Live preview is the primary reference;
  no fallback was needed.
- **Screenshot:**
  https://colorlib.com/wp/wp-content/uploads/sites/2/fastes-free-template.jpg
  (HTTP 200, 37,536 B, served as **AVIF** → decoded and reviewed visually
  2026-10-11; renders 1200×946 with the browser chrome mock at the top).
- **New name:** `presto` (apps/presto, `@free-react-templates/presto`) — the
  source demo name "Fastes", its logo artwork, its hero/feature/footer images,
  its `img/**` photographs and its copy are never reused. `presto` collides with
  no `apps/` folder, no `openspec/specs/` folder, no `docs/templates/` folder and
  no other TEMPLATES.md slug.
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript

## Design reference (replication findings)

- **Original:** ColorLib "Fastes" (source:
  https://colorlib.com/wp/template/fastes/). Listed in TEMPLATES.md
  `## Web Hosting (20)` at line 3057 (`- [ ] **Fastes**`), slug `fastes` appears
  exactly once (no duplicate `- [ ]` line). No implementation and no spec existed
  for this item on main before this one.
- **Preview URL:** `https://preview.colorlib.com/theme/fastes/` → **HTTP 200**
  (38,486 B, `text/html; charset=utf-8`). Main stylesheet
  `assets/css/style.css` → HTTP 200, 55,037 B. Reference artifacts (research
  date 2026-10-11): `/tmp/fastes/index.html`, `/tmp/fastes/style.css`.
  Preview HTML/CSS are authoritative for section structure, copy kind and tokens.
- **Screenshot (1200×946, AVIF decoded):** a browser-chrome mock-up of the top of
  the page. The whole above-the-fold area is a **violet field** — a `#73469F` /
  `#3B2774` gradient whose lower-left and lower-right corners carry layered,
  darker-purple **mountain/wave silhouettes** — closed at the bottom by a white
  **cloud-scallop** divider. Across the top sit a small coral/white sun-and-wave
  **wordmark** at left, a horizontal white menu (Home · About · Services · Help ·
  Blog · Contact) centre-right and a coral **pill "Sign In"** button plus a white
  phone number at the far right; every item is white on the violet. The hero is
  centred: a small white eyebrow line, then a large bold **white uppercase H1**
  ("FAST & SECURE WEB HOSTING"), then a wide **white pill search bar** with a
  grey globe glyph at its left edge and a **circular peach `#FFBF81` search
  button** at its right edge, then a centred row of four **TLD prices** — the TLD
  token coloured (red / yellow / green / blue-violet) with the price in white,
  separated by thin violet hairlines. Below the scallop the page turns light: three
  white **pricing cards** with soft violet-tinted shadows overlap the divider, each
  carrying a small coral server icon, a bold dark **"Shared Hosting"** title, a
  small grey "Starting at", a coral `$4.67` with a tiny `/ month`, a hairline
  divider, a centred grey 5-item feature list and a **coral-outline pill "Get
  Started"** button. The screenshot covers only the above-the-fold region; the
  rest of the page was taken from the preview DOM.
- **Section order (measured from the preview DOM, top to bottom):**
  1. `header.header-area.header-transparent` — `position:absolute` overlay over
     the hero (no own background on the home page): logo wordmark, horizontal
     menu, phone number and a coral pill "Sign In".
  2. `.slider-area > .single-slider.slider-height` — the hero: centred
     `.hero__caption` (eyebrow `p` + uppercase `h1`), a `form.search-box` with a
     globe glyph, a pill input and a circular peach search button, then a
     `.single-domain` row of four TLD prices.
  3. `section.pricing-card-area` — **three** (identical in the source)
     `.single-card` white pricing cards; the area carries
     `margin-top:-138px` so the cards overlap the hero's bottom edge.
  4. `section.load-balancing.pt-top.section-bg2` — `data-background` light image
     band: centred section title "Cloud Load Balancing" + blurb, then **six**
     `.single-features` items (icon + `h3` + `p`) in a 3-column grid.
  5. `section.support-area.section-bg2.pt-130.pb-130` — `data-background` band:
     left `.support-caption` ("24 Hour Expert Support" + blurb), right
     `.support-number` with **two** lilac `#C57EFC` rounded contact cards (a
     phone number and "Chat with experts").
  6. `div.map-are.section-padding40` — a second centred "Cloud Load Balancing"
     title + blurb above a full-width embedded **map** (`<iframe>`, 600px tall).
  7. `div.testimonial-area.testimonial-padding.section-bg2` — `data-background`
     dark band: left title "Customer' s story" + blurb, right a **2-slide**
     testimonial slider (portrait, quote paragraph, "Mark Jonson" /
     "@creative director") with dot indicators.
  8. `div.brand-area` — a bordered logo strip (`.brand-active.brand-border
     .pt-50.pb-40`) holding **7** brand marks.
  9. `section.ask-questions.section-bg2.section-padding30` — `data-background`
     dark band: centred white title "Frequently ask questions" + blurb, then
     **four** Q/A items in two columns, each led by a white `Q.` glyph
     (`span`) with a white question `h2` and a translucent-white answer `p`.
  10. `div.about-area2.section-padding30` — 6/6 split: image left, right
      `.about-caption` with `h2` "Commitment to Security" + `p` + a coral
      **outline pill** `a.border-btn` "Learn More".
  11. `section.wantToWork-area` — `#F8FCFF` band (`.wants-wrapper.w-padding2`):
      left "Need any help?" `h2` + `p`, right two CTAs — a filled coral
      `a.btn` "Contact Us" and an outline `a.border-btn` "Live Chat".
  12. `footer > .footer-wrappr.section-bg` — `data-background` purple image
      footer: three link columns (Company / Products / Support), a logo, a
      "Subscribe our newsletter…" line, an e-mail pill input with a full-width
      coral "Subscribe" button, three round social buttons, a hairline rule and a
      centred copyright line.
- **Duplicated reference quirk — keep 1:1:** the string "Cloud Load Balancing"
  is used as the section title in **both** section 4 and section 6 of the
  source. The recreation reproduces the same pairing (a features band under that
  title, then a map band under the same title); paraphrase the *copy kind*, not
  the source strings.
- **Source typo — deliberate deviation:** the hero TLD row reads
  `.com $15.99  .net $10.99  .rog $10.99  .me $10.99` — `.rog` is a typo for
  `.org`. The recreation uses **`.org`** (valid TLD) and keeps the same layout,
  colours and four-item count.
- **Attribute-driven backgrounds:** sections 4, 5, 7, 9 and the footer all pass
  their image through a `data-background="assets/img/…"` attribute that the
  source JS copies onto the element (`background-size:cover;
  background-position:center`). The recreation must NOT copy those images:
  supply its own picsum placeholders (or a CSS gradient where the reference is a
  flat tint) and keep the same cover/centre treatment and section heights.
- **Sibling comparison (why this slug is its own design):** Presto is the
  hosting family's **coral `#FA8F77` + violet `#73469F`/`#3B2774` layered-wave**
  page, with a cloud-scallop hero divider, an overlapping pricing triple, lilac
  `#C57EFC` contact chips, a `#F8FCFF` help band and 30px-pill buttons
  everywhere. Other hosting recreations in this repo are navy/periwinkle
  (harbor), plum/magenta (ecohive) or typographic; none uses this coral-on-violet
  wave hero + overlapping pricing triple + lilac chips combination. Do not
  borrow a sibling's palette or hero treatment.

## Design tokens

| Token                  | Value                                                                                                                       | Where                                                  |
| ---------------------- | --------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| brand (primary coral)  | `#FA8F77`                                                                                                                    | filled buttons, link hover, back-to-top, price accents |
| brand hover (deep)     | `#ee7b61` (sliding fill inside `.btn::before`)                                                                                | filled-button hover                                     |
| accent coral (outline) | `#FD8F5F`                                                                                                                    | outline buttons (`.borders-btn`, `.border-btn`), card price |
| accent peach           | `#FFBF81`                                                                                                                    | the circular hero search button                         |
| violet hero base       | `#73469F` → `#3B2774` gradient (with darker wave layers), hero hairline/separator `#73469F`                                   | hero gradient, wave shapes                              |
| violet (dark)          | `#3B2774` (sticky header bg) · `#1F2B7B` · `#415094` (secondary violet text)                                                  | sticky nav, elements styles                             |
| lilac chip             | `#C57EFC`                                                                                                                    | the two support contact cards                           |
| text dark              | `#140C40` (headings) · `#646D77` (body `p`) · `#3B4855` / `#717081` / `#7a8290` / `#838a9b` (muted card copy)                 | typography                                              |
| text on violet         | `#fff` (headings, hero, nav) · `rgba(255,255,255,.6)` (secondary on dark bands) · `#C2C5DB` (footer links)                    | dark bands, footer                                      |
| surfaces (light)       | `#fff` (page + cards) · `#F8FCFF` (help CTA band) · `#f9f9ff` / `#fbf9ff` (element tints)                                     | section + card backgrounds                              |
| borders/rules          | `#E7E6EB` (pricing card divider) · `#695CAE` (footer input border) · `#f0e9ff` (light hairlines)                              | dividers, inputs                                        |
| card shadow            | `0 8px 26px rgba(67,40,124,.08)`                                                                                             | pricing cards                                           |
| font family            | `Poppins, sans-serif` (`body`, all headings, buttons, nav)                                                                    | whole page                                              |
| font weights           | `300` (footer/muted) · `400` (body, nav) · `500` (headings default, contact numbers) · `600` (section `h2`, card titles, prices, buttons) · `700` (hero `h1`, help-CTA `h2`) | typography |
| base type              | `body` 16px; `p` 16px / `line-height:1.4` (long copy `1.8`); hero `h1` 45px uppercase / `1.3`; section `h2` 35px / `1.4`; card title 25px; card price 32px; feature `h3` 25px                                      | typography                                              |
| primary button         | `.btn` — `background:#FA8F77; color:#fff; font-size:15px; font-weight:600; letter-spacing:1px; padding:27px 44px; border-radius:30px; overflow:hidden`; hover wipes a `#ee7b61` fill across (`::before` `scaleX(0)` → `scaleX(1)`) | all filled CTAs (Sign In, Contact Us)                   |
| outline buttons        | `.borders-btn` — transparent, `border:1px solid #FD8F5F; color:#FD8F5F; border-radius:30px; padding:10px 64px`; `.border-btn` — same colours, `padding:13px 48px`, hover fills `#FD8F5F`/white; pricing-card hover promotes "Get Started" to filled `#FA8F77` | Get Started, Learn More, Live Chat                      |
| ghost/white button     | `.boxed-btn` — `background:#fff; color:#FA8F77; border:1px solid #FA8F77; text-transform:uppercase; letter-spacing:3px; padding:18px 44px`                                                    | available variant (used on sub-pages)                   |
| hero search bar        | input `height:65px; width:100%; border:none; border-radius:30px; font-size:18px; color:#777777; padding:9px 33px 9px 76px; placeholder:#616875`; globe glyph `#c4c4c4` 32px absolute left; circular button `50×50; border-radius:50%; background:#FFBF81; color:#fff; font-size:21px` absolute right                | hero                                                    |
| hero TLD row           | `li` `font-size:20px; font-weight:400` coloured `#ff7474` / `#ffdd74` / `#74ff9f` / `#748bff` (`nth-child`), price `p #fff`, 1px `#73469F` separators between items                                                                        | hero                                                    |
| hero geometry          | `.slider-height{min-height:890px}` (600px ≤991px, 640px ≤575px); caption centred; hero background `cover` on the violet gradient                                                              | hero                                                    |
| pricing card           | `.single-card{background:#fff; padding:70px 0; border-radius:8px; box-shadow:0 8px 26px rgba(67,40,124,.08)}`; area `margin-top:-138px` (`-78px` at md, `0` at sm); card top padding `26px`; icon → `h4` 25px/600 → `p` "Starting at" `15px #3B4855`; divider `1px solid #E7E6EB`; price `h4 #FD8F5F 32px` with `span 12px #838a9b`; list `li 16px/300 #717081; margin-bottom:23px`                | pricing triple                                          |
| section rhythm         | `.section-padding` 120/120 · `.section-padding30` 195/180 (→100/70 at md) · `.section-padding40` 140/130 · `.pt-top` 160px (→70px at md/sm) · `.pt-130`/`.pb-130` · `.w-padding2` 80px 30px · `.footer-padding` 160/50                     | spacing                                                 |
| section title          | `.section-tittle` centred by default: `h2` 35px/600 `#140C40`; `p` `#7a8290`; on dark bands (`.section-tittle2`) `h2 #fff`, `p rgba(255,255,255,.6)`; `margin-bottom:90px` (`mb-90`)                | every section heading                                   |
| support chips          | `.single-contact{background:#C57EFC; border-radius:10px; padding:35px 20px}`; icon `36px #fff`; number `20px/500 #fff`                                                                          | support band                                            |
| features grid          | `.single-features{display:flex}`; icon column (source uses one shared icon image — the recreation uses a `lucide-react` glyph in `#FA8F77`); caption `padding-left:19px`, `h3` 25px/`#140C40`/400, `p` 15px/`#646D77`/1.8; 3 per row (`col-lg-4` → 2 at md)                  | features band                                           |
| testimonial band       | dark `section-bg2` image band; title block left (`section-tittle2`), 2-slide slider right: quote `p` 20px/400 white, founder `span` 21px/500 + `p` role line; slick dots ~10px circles, active `#fff`                                       | testimonial band                                        |
| FAQ band               | dark `section-bg2` image band; title white centred; items in two `col-lg-6` columns, each `.single-question.d-flex` = white `Q.` `span` (20px) + `.pera` (`padding-left:28px`) with `h2` 20px `#fff` and `p` 15px `rgba(255,255,255,.6)`; per-item `margin-bottom:50px`        | FAQ band                                                |
| brand strip            | bordered logo row (`.brand-border.pt-50.pb-40`): 7 grayscale placeholder marks, evenly spaced; recreation uses its own text/SVG marks (never the source brand images)                                        | logo strip                                              |
| split band             | `.about-area2` 6/6: own illustration left, `.about-caption` right (`h2` + `p.mb-40` + outline-pill "Learn More")                                                                                     | "Commitment to Security"                                |
| help CTA band          | background `#F8FCFF`; `.wantToWork-caption h2` 35px/700; right side filled `.btn` + outline `.border-btn` pair                                                                                        | "Need any help?"                                        |
| footer                 | `section-bg` cover image band (own placeholder/gradient); `h4` column headings 22px/400 `#C2C5DB`; links `#C2C5DB` / weight 300, hover `#FA8F77` + `padding-left:5px`; newsletter input `height:43px; border:1px solid #695CAE; border-radius:14px; text-align:center; color:#fff`; "Subscribe" `background:#FA8F77; border-radius:10px; padding:13px 22px; width:100%`; social circles `40×40; border:1px solid #fff`, hover `#FA8F77`; copyright `18px/300 #C2C5DB` with `#fff` links | footer                                                  |
| back-to-top            | fixed `50×50` circle `#FA8F77`, white glyph, `border-radius:50%`, appears on scroll                                                                                                                            | page chrome                                             |
| Google Fonts map       | `Poppins:wght@200;300;400;500;600;700;800` via `<link>` in `index.html`; icons from `lucide-react` (never FontAwesome/themify/flaticon)                                                                         | `index.html`                                            |
| transitions            | `0.3s` (links, cards) · `0.4s linear` (button label colour) · `0.5s` sliding fills                                                                                        | interaction                                             |
| attribution            | footer line links `https://www.componentdock.com/` ("Component Dock") replacing the source's Colorlib credit                                                                                             | ADDED vs the reference                                  |


<!-- heading-role-tokens: fastes/ink/template-presto -->
**Heading-ink role (measured 2026-10-25):** the `section title` row states `#7a8290`, but the page declares it only for non-heading elements (.section-tittle p) — no heading rule carries it. The rendered headings paint rgb(20, 12, 64) x14, rgb(255, 255, 255) x7, rgb(253, 143, 95) x3.
<!-- /heading-role-tokens -->

## Requirements

### Feature: Header (transparent overlay nav with a coral Sign-In pill)

A single logo/menu/action row, absolutely positioned so the hero's violet shows
through, with the source's link set and a filled coral pill for the account
action.

#### Scenario: Header overlays the hero without a background

- **Given** the page loads
- **When** the header renders
- **Then** it is `position:absolute; left:0; top:0; width:100%; z-index:9` over
  the hero (`.header-transparent`), with no own background colour on the home
  page
- **And** it uses a fluid container (`padding:0 85px` desktop → `0 20px` at
  ≤575px) so the row spans the viewport

#### Scenario: Nav row renders the brand, menu and account action

- **Given** the header renders
- **When** the nav row is inspected
- **Then** the app's own wordmark sits left (never the source logo image) and a
  horizontal, `text-transform:capitalize` menu sits right with the source's link
  set: Home, About, Services, Help, **Blog ▸**, Contact — where "Blog" exposes a
  submenu (Blog / Blog Details / Elements) rendered as a violet panel
- **And** the active menu link is highlighted in coral `#FA8F77` on hover/focus
  and the current item is distinguishable
- **And** the right side shows a phone number (white, `margin-right:40px`) and a
  filled coral pill `.btn` labelled "Sign In", which the app owns (never the
  source's `+880 156 278 256` number or its logo)
- **And** both the dropdown and the collapsed mobile menu are keyboard operable
  with `aria-expanded` and a visible focus ring

### Feature: Hero (centred violet wave band with domain search)

A tall centred hero on a violet gradient closed by a white cloud-scallop
divider, holding an eyebrow, a big white uppercase headline, a pill domain
search bar and a coloured TLD price row.

#### Scenario: Hero renders the caption over the violet gradient

- **Given** the page loads
- **When** the hero renders
- **Then** it is a full-width band (`.slider-height`, `min-height:890px`; 600px
  at ≤991px, 640px at ≤575px) whose background is the app's own violet
  `#73469F`→`#3B2774` gradient with layered wave shapes (never the source
  `hero/h1_hero.png`), covered `cover`/`center`
- **And** the header floats over it
- **And** the centred caption holds a small white eyebrow line (`p`, 14px) and a
  bold white uppercase `h1` (45px/700/`line-height:1.3`, ~2 lines, e.g. "Fast &
  secure web hosting" paraphrased)

#### Scenario: Domain search bar renders with globe and circular button

- **Given** the hero renders
- **When** the search form is inspected
- **Then** a white pill input renders (`height:65px; border-radius:30px;
  font-size:18px; color:#777777; padding:9px 33px 9px 76px`;
  `placeholder #616875`) with a globe glyph absolutely positioned inside its
  left edge (`32px #c4c4c4`) and a circular submit button absolutely positioned
  at its right edge (`50×50; border-radius:50%; background:#FFBF81; color:#fff;
  font-size:21px`)
- **And** the input is associated with a real `<label>` (visually hidden is
  fine), the icon-only submit button carries an `aria-label`, and submitting the
  form neither navigates nor reloads the page

#### Scenario: TLD price row renders four coloured extensions

- **Given** the hero renders
- **When** the area under the search bar is inspected
- **Then** a centred inline row of four TLD prices renders (`pt-30 pb-30`), the
  TLD token in `20px/400` coloured per position — `#ff7474`, `#ffdd74`,
  `#74ff9f`, `#748bff` — and the price in white
- **And** thin `1px #73469F` separators sit between items (never between the
  first and last pair's outer edges)
- **And** the TLDs are `.com`, `.net`, `.org`, `.me` (the source's `.rog` typo is
  corrected to the valid `.org`)

#### Scenario: Cloud-scallop divider closes the hero

- **Given** the hero renders
- **When** its bottom edge is inspected
- **Then** a white scalloped cloud wave (the app's own SVG) transitions the
  violet hero into the light page below, spanning the full width
- **And** it sits above the pricing cards' overlap region in stacking order

### Feature: Pricing triple (three overlapping cards)

Three white, `8px`-rounded, softly-shadowed pricing cards that overlap the
hero's bottom edge by a negative top margin.

#### Scenario: The pricing area overlaps the hero

- **Given** the hero and pricing area both render
- **When** the geometry is inspected
- **Then** the pricing area carries `margin-top:-138px` (reduced to `-78px` at
  md and `0` at sm) so the cards break out over the hero's scallop divider
- **And** the cards keep `position:relative` layering so nothing is clipped

#### Scenario: Three hosting cards render with price, list and outline CTA

- **Given** the pricing area renders
- **When** the cards are inspected
- **Then** three white cards render (`padding:70px 0; border-radius:8px;
  box-shadow:0 8px 26px rgba(67,40,124,.08)`), three per row at `lg` and two at
  `md`, centred text
- **And** each card holds an own icon glyph (coral, standing in for the source's
  server icon image), a bold `h4` plan name (25px/600, e.g. "Shared Hosting"), a
  small muted "Starting at" line (`15px #3B4855`), a coral price `h4`
  (`#FD8F5F`, 32px/600) with a `span` period suffix (`12px #838a9b`), a
  `1px solid #E7E6EB` divider, a five-item feature list (`li 16px/300 #717081;
  margin-bottom:23px`) and an outline-pill `.borders-btn` "Get Started"
- **And** the list mirrors the source's kinds (storage space, bandwidth, backup
  systems, free domain, databases) with paraphrased copy

#### Scenario: Pricing card hover promotes the outline CTA

- **Given** a pricing card is rendered
- **When** it is hovered or its CTA is focused
- **Then** the "Get Started" pill fills `#FA8F77` with white text over the
  transition, and `focus-visible` shows a visible ring

### Feature: Features band (six items under "Cloud Load Balancing")

#### Scenario: Section title and six feature items render

- **Given** the page renders
- **When** the features band (`section.load-balancing.pt-top.section-bg2`) is
  inspected
- **Then** a centred section title (`h2` 35px/600 `#140C40`) and a muted blurb
  sit at the top with `margin-bottom:90px`, on a light cover image band the app
  supplies itself (`pt-top` = `padding-top:160px`, →70px at md/sm)
- **And** exactly six feature items render in a 3-column grid (`col-lg-4` → 2 at
  md): each `.single-features` is a flex row with an icon (app's own
  `lucide-react` glyph, coral) and a caption (`padding-left:19px`) holding an
  `h3` (25px/`#140C40`/400) and a `p` (15px/`#646D77`, `line-height:1.8`)
- **And** the six topics mirror the source's kinds: instant activation,
  redundancy, automation, performance, and 24-hour support (paraphrased, no
  verbatim source strings)
- **And** the source's duplicated emphasis topic is not reproduced as a
  duplicate — the six items stay distinct

### Feature: Support band (two lilac contact chips)

#### Scenario: Support caption and two contact chips render side by side

- **Given** the page renders
- **When** the support band (`section.support-area.section-bg2.pt-130.pb-130`)
  is inspected
- **Then** it is a cover-image band the app supplies itself with `pt-130`
  /`pb-130` padding; the left `col-lg-5` holds a title block (`h2` white via
  `.section-tittle2`, ~2 lines) and a white blurb (`padding:30px 10px 30px 0`)
- **And** the right `col-lg-6` holds exactly two `.single-contact` chips with
  `background:#C57EFC; border-radius:10px; padding:35px 20px`, each an icon
  (`36px #fff`) beside a line of text (`20px/500 #fff`): a phone number and a
  "Chat with experts" line
- **And** the phone number and label are the app's own (never the source's
  `+10 367 456 3678`), and the chat line is an interactive element with an
  accessible name

### Feature: Map band (duplicate "Cloud Load Balancing" title)

#### Scenario: A map band repeats the features title above an embedded map

- **Given** the page renders
- **When** the map band (`div.map-are.section-padding40`) is inspected
- **Then** it repeats the same centred section title used by the features band
  (matching the source's duplicated title 1:1) with its blurb, `mb-90`
- **And** below it a full-width `600px`-tall embedded map renders in a
  lazy-loaded `iframe` with a title attribute (an accessible embed of the app's
  own choosing — the source's Burj Khalifa coordinates are not reused)
- **And** the band keeps `section-padding40` rhythm (140/130 → 100/70 at md)

### Feature: Testimonials band (two-slide dark slider)

#### Scenario: Title block and testimonial slider render

- **Given** the page renders
- **When** the testimonial band
  (`div.testimonial-area.testimonial-padding.section-bg2`) is inspected
- **Then** it is a dark cover-image band the app supplies itself
  (`testimonial-padding`: `padding-top:190px; padding-bottom:90px`, reduced at
  smaller breakpoints); the left `col-lg-4` holds a white two-line title and a
  translucent-white blurb, the right `col-xl-6` holds the slider
- **And** each slide carries an own portrait placeholder
  (`https://picsum.photos/seed/presto-testimonial-<n>/120/120`), a quote
  paragraph (`20px/400`, white) and a founder block (`span` 21px/500 name +
  role line, e.g. "@creative director")
- **And** exactly two slides render (matching the source's two testimonials)

#### Scenario: The testimonial slider is operable by keyboard and pointer

- **Given** the slider renders
- **When** it is interacted with
- **Then** dot indicators (small circles, active dot white) switch slides and
  are real labelled buttons with `aria-current`/`aria-selected` on the active
  dot; arrow keys move between slides while focus is inside the slider
- **And** autoplay, if enabled, is paused on hover/focus and honours
  `prefers-reduced-motion`

### Feature: Brand strip (seven logo marks)

#### Scenario: A bordered logo row renders under the testimonials

- **Given** the page renders
- **When** `div.brand-area` is inspected
- **Then** a bordered row (`.brand-border`, `padding-top:50px;
  padding-bottom:40px`) holds exactly seven brand marks, evenly spaced
- **And** the marks are the app's own text/SVG placeholders in a muted tone —
  never the source's `gallery/brand*.png` images

### Feature: FAQ band (four questions in two columns)

#### Scenario: Four Q/A items render on the dark band

- **Given** the page renders
- **When** `section.ask-questions.section-bg2.section-padding30` is inspected
- **Then** it is a dark cover-image band the app supplies itself with
  `section-padding30` rhythm (195/180 → 150/140 at lg, 100/70 at md, 65/70 at
  sm); a centred white title (`h2`) and translucent-white blurb sit at the top
  (`mb-90`)
- **And** exactly four `.single-question` items render in two `col-lg-6`
  columns (`margin-bottom:50px`), each a flex row: a white `Q.` glyph `span`
  (20px) + a `.pera` block (`padding-left:28px`) holding a white `h2` (20px) and
  a translucent-white `p` (15px)
- **And** the four questions mirror the source's kinds (server connectivity,
  domain choice, `www` prefix, server password prompts) with paraphrased wording

### Feature: Split band ("Commitment to Security")

#### Scenario: Illustration and caption render side by side

- **Given** the page renders
- **When** `div.about-area2.section-padding30` is inspected
- **Then** a 6/6 split renders: the app's own illustration (`col-lg-6`,
  full-width inside its column) beside a `col-lg-4` caption block
- **And** the caption holds an `h2` (e.g. "Commitment to security"), a `p`
  (`margin-bottom:40px`) and a coral **outline pill** `a.border-btn` labelled
  "Learn More" (`padding:13px 48px; border:1px solid #FD8F5F;
  border-radius:30px`, hover fills `#FD8F5F` with white text)
- **And** at md and below the split stacks with the illustration above the
  caption and no horizontal overflow

### Feature: Help CTA band

#### Scenario: The #F8FCFF band pairs a heading with two CTAs

- **Given** the page renders
- **When** `section.wantToWork-area` is inspected
- **Then** the band's background is `#F8FCFF` and its inner
  `.wants-wrapper.w-padding2` carries `padding:80px 30px` (→70px 20px at
  ≤575px)
- **And** the left column holds an `h2` (35px/700) e.g. "Need any help?" and a
  `p` (18px), and the right column holds two CTAs spaced `margin-right:20px`: a
  filled coral `.btn` "Contact Us" and an outline `.border-btn` "Live Chat"
- **And** on small screens the CTAs stack left-aligned without overflow

### Feature: Footer (purple image band with newsletter)

#### Scenario: Link columns, newsletter form and socials render

- **Given** the page renders
- **When** `footer > .footer-wrappr.section-bg` is inspected
- **Then** it is a cover-image band (the app's own purple placeholder or
  gradient) with `footer-padding` rhythm (160/50 → 80/0 at ≤575px)
- **And** three link columns render — headings `h4` (`22px/400 #C2C5DB`) over
  five links each (`#C2C5DB`, weight 300, hover `#FA8F77` + `padding-left:5px`):
  **Company** (why choose us, review, customers, blog, careers), **Products**
  (same kinds), **Support** (technology, products, customers, quality, sales
  geography)
- **And** a fourth column holds the app's own logo, a "Subscribe our newsletter…"
  line, an e-mail input (`height:43px; border:1px solid #695CAE;
  border-radius:14px; text-align:center; color:#fff`) and a full-width coral
  "Subscribe" button (`background:#FA8F77; border-radius:10px;
  padding:13px 22px`), then three round social links (`40×40`, `1px solid #fff`
  border, hover `#FA8F77`)
- **And** the newsletter form is labelled, validates the e-mail locally, shows an
  inline error (`#FA8F77`) for invalid input, and confirms success in a polite
  live region without navigating away

#### Scenario: Copyright line credits Component Dock

- **Given** the footer renders
- **When** the bottom line is inspected
- **Then** a centred copyright line renders (`18px/300 #C2C5DB`, links `#fff`)
  above a `1px` hairline (`.footer-border`, `padding:33px 0 20px`)
- **And** it links `https://www.componentdock.com/` branded "Component Dock" and
  never carries the source's Colorlib credit

### Feature: Page chrome

#### Scenario: Back-to-top control appears after scrolling

- **Given** the page is at the top
- **When** the user scrolls down past roughly one viewport
- **Then** a fixed `50×50` coral `#FA8F77` circular button appears at the
  bottom-right (`right:31px; bottom:18px`) with an accessible label, and
  activating it returns to the top
- **And** it is hidden again at the top of the page and is reachable by keyboard

### Feature: Responsive behaviour

#### Scenario: Grids and hero reflow on smaller screens

- **Given** the page renders at `md` (≤991px) and `sm` (≤767px)
- **When** the layout is measured
- **Then** the features grid goes 3 → 2 per row, the pricing triple goes 3 → 2 →
  1, the FAQ and help-CTA columns stack, the testimonial band stacks title above
  slider, the support band stacks caption above the chips, and the nav collapses
  into an accessible toggle with a keyboard-closable panel

#### Scenario: Overlaps and type scales without clipping

- **Given** a narrow viewport (down to 320px)
- **When** the hero and pricing area are inspected
- **Then** the `-138px` pricing overlap is reduced (`-78px` at md, `0` at sm) so
  the cards never clip the hero copy, the hero `h1` steps 45px → 29px → 19px and
  the section `h2` 35px → 31px → 24px as in the reference, and there is no
  horizontal scroll at 320px

### Feature: Component Dock attribution

#### Scenario: Footer links Component Dock exactly once

- **Given** the page renders
- **When** the footer is inspected
- **Then** exactly one clear link points to `https://www.componentdock.com/`
  branded "Component Dock"
- **And** no `colorlib` / "Fastes" / `fastes` string appears anywhere in
  `apps/presto`

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/presto/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/presto/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] `npm run spec:validate` passes for `template-presto`
- [ ] `scripts/verify-app.sh presto` passes: typecheck + lint + knip + fallow +
      vitest at 100% coverage + build (~2–3 min)
- [ ] Every scenario above has at least one matching test (scenario-style `it`
      blocks), with 100% lines/functions/branches/statements on the app
- [ ] Screenshot match against `fastes-free-template.jpg` (1200×946, AVIF): a
      violet `#73469F`/`#3B2774` gradient hero with layered wave silhouettes and
      a white cloud-scallop bottom edge; white wordmark + horizontal white menu +
      white phone number + coral pill "Sign In" overlaid; centred white eyebrow,
      bold white uppercase H1, white pill search bar with a grey globe and a
      circular peach `#FFBF81` button; a centred row of four coloured TLD prices
      with thin violet separators; below the scallop, three overlapping white
      pricing cards with coral icons, coral prices and coral-outline "Get
      Started" pills
- [ ] Section order at desktop matches the reference: header (overlay) → hero →
      pricing triple (overlap `-138px`) → features band (6 items,
      `padding-top:160px`) → support band (2 lilac chips) → map band (duplicated
      "Cloud Load Balancing" title + map) → testimonials (2 slides) → brand
      strip (7 marks) → FAQ (4 items, 2 columns) → "Commitment to Security" split
      → help CTA (`#F8FCFF`) → footer
- [ ] Tokens present in `@theme` / components: brand `#FA8F77`, deep hover
      `#ee7b61`, outline coral `#FD8F5F`, peach `#FFBF81`, violet `#73469F` /
      `#3B2774`, lilac `#C57EFC`, heading `#140C40`, body `#646D77`, muted
      `#717081/#838a9b/#3B4855`, footer `#C2C5DB` + input border `#695CAE`,
      surfaces `#fff` / `#F8FCFF`, divider `#E7E6EB`, card shadow
      `0 8px 26px rgba(67,40,124,.08)`, Poppins 300/400/500/600/700, radii `30px`
      (buttons/inputs), `8px` (cards), `10px` (chips/subscribe), `14px` (footer
      input), rhythm `120/120`, `195/180`, `140/130`, `160px` `pt-top`
- [ ] Hero: violet gradient + own wave shapes, own cloud-scallop SVG divider,
      `min-height:890px`, centred caption, pill search bar (globe left, circular
      peach button right), four-item coloured TLD row with `#73469F` separators,
      labelled controls, no navigation on submit
- [ ] Pricing: three cards with `margin-top:-138px` overlap, `8px` radius,
      `0 8px 26px rgba(67,40,124,.08)` shadow, icon + plan name + "Starting at" +
      coral price + `/ month` suffix + `#E7E6EB` divider + 5-item list + outline
      "Get Started" pill that fills `#FA8F77` on hover
- [ ] Features band: `padding-top:160px`, centred title + blurb (`mb-90`), six
      distinct items in a 3-column grid with `lucide-react` icons and 25px `h3` /
      15px `p` captions
- [ ] Support band: `pt-130`/`pb-130`, white title + blurb left, exactly two
      `#C57EFC` `10px`-rounded chips right (36px white icons, 20px/500 white text)
- [ ] Map band: repeated section title + blurb, full-width 600px accessible
      embedded map, `section-padding40` rhythm
- [ ] Testimonials: dark band, white title left / 2-slide slider right, picsum
      portraits, quote + founder name/role, labelled dots with `aria-current`,
      keyboard arrows, reduced-motion respected
- [ ] Brand strip: bordered row with exactly seven own placeholder marks
      (`padding:50px 0 40px`), no source brand images
- [ ] FAQ: dark band, white title + translucent blurb, four items in two columns
      with white `Q.` glyph, white 20px questions and rgba(255,255,255,.6)
      answers
- [x] Split band + help CTA: image/caption 6/6 with outline-pill "Learn More";
      `#F8FCFF` band with "Need any help?" and a filled + outline CTA pair
- [ ] Footer: purple image band, three `#C2C5DB` link columns with coral hover
      shift, logo + newsletter input (`43px`, `#695CAE`, `14px` radius) + coral
      "Subscribe" + three round social links, hairline + centred copyright, one
      Component Dock link
- [ ] Back-to-top: coral `50px` circle appears after scroll, keyboard reachable,
      labelled
- [ ] Accessibility: semantic landmarks (`header`/`nav`/`main`/`footer`), real
      form labels, `aria-label`s on icon-only controls (search, socials,
      back-to-top), focus-visible rings, keyboard-operable dropdown, mobile menu,
      slider and newsletter validation errors
- [x] `public/CNAME` = `presto.free.componentdock.com`; `"homepage"` matches;
      `npm install` run at the repo root so the lockfile registers
      `@free-react-templates/presto`
- [x] Zero `colorlib` / "Fastes" / `fastes` references anywhere in `apps/presto`
      (comments included — record the palette as design notes, not provenance)
- [ ] No copied assets: no `img/**` photographs or `h1_hero.png` /
      `section_bg0*.png` / `price1.png` / `right-icon.png` / `brand*.png` /
      `logo*.png` / `footer_bg.png`, no FontAwesome/themify/flaticon CSS, no
      source CSS files; photos come from picsum and icons from `lucide-react`
- [ ] PR description includes: source template (ColorLib Fastes), preview URL
      (`https://preview.colorlib.com/theme/fastes/` → HTTP 200, stylesheet
      `assets/css/style.css`), the design tokens used (brand `#FA8F77`, outline
      `#FD8F5F`, peach `#FFBF81`, violet `#73469F`/`#3B2774`, lilac `#C57EFC`,
      heading `#140C40`, `#F8FCFF` help band, Poppins, `30px` pills / `8px`
      cards), the measured section order and geometry (`min-height:890px` hero,
      `-138px` pricing overlap, `padding-top:160px` features, `mb-90` titles) and
      what differs (new name, corrected `.org` TLD, picsum placeholders, own
      logo/illustrations/waves/icons/copy, lucide icons, added keyboard/aria
      states and the Component Dock attribution)
- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
