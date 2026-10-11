# Template: Harbor (Web Hosting)

## Purpose

Harbor is a full multi-section **web-hosting marketing site** in the
free-react-templates monorepo. It is an original React recreation of the ColorLib
free **"Deerhost"** template (source slug `deerhost` — the hosting family's
**navy/periwinkle isometric** page: a dark `#120851` shell whose hero carries a
light-on-dark headline beside a large isometric city-server illustration, then a
long light body of domain-search, service cards, a Monthly/Yearly pricing grid, a
photo counter band, an overlapping "how to build" band, a discount CTA and a
two-tone navy footer).

It is built under a different name with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript. The recreation matches section structure, order,
copy kind and design tokens 1:1 but copies no asset (no images, no fonts, no CSS
files, no icon paths) and never reuses the source name or copy verbatim.

- **Source:** https://colorlib.com/wp/template/deerhost/
  (HTTP 200; page title "DeerHost - Bootstrap Hosting Website Template 2026 -
  Colorlib"; description "DeerHost is the best responsive Bootstrap hosting
  website template that will help establish a business-driven online presence."
  — verified 2026-10-11)
- **Preview:** `https://preview.colorlib.com/theme/deerhost/` returns
  **HTTP 200**, `text/html; charset=utf-8`, **42,673 B** (verified 2026-10-11).
  Its DOM was fetched and parsed and its main stylesheet
  `https://preview.colorlib.com/theme/deerhost/css/style.min.css?v=3.0.0`
  (HTTP 200, **59,190 B**) was tokenized. Live preview is the primary reference;
  no fallback was needed.
- **Screenshot:**
  https://colorlib.com/wp/wp-content/uploads/sites/2/deerhost-free-template.jpg
  (HTTP 200, 105,827 B, **1200×946** JPEG, reviewed visually 2026-10-11).
- **New name:** `harbor` (apps/harbor, `@free-react-templates/harbor`) — the
  source demo name "Deerhost", its logo artwork, its hero/footer SVGs, its
  `img/**` photographs and its copy are never reused. `harbor` collides with no
  `apps/` folder and no `openspec/specs/` folder (only `harborly` exists).
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript

## Design reference (replication findings)

- **Original:** ColorLib "Deerhost" (source:
  https://colorlib.com/wp/template/deerhost/). Listed in TEMPLATES.md
  `## Web Hosting (20)` at line 3055 (`- [ ] **Deerhost**`), slug `deerhost`
  appears exactly once (no duplicate `- [ ]` line). No implementation or spec
  existed for this item on main before this one.
- **Preview URL:** `https://preview.colorlib.com/theme/deerhost/` → **HTTP 200**
  (42,673 B, `text/html; charset=utf-8`). Main stylesheet
  `css/style.min.css?v=3.0.0` → HTTP 200, 59,190 B. Reference artifacts (research
  date 2026-10-11): `/tmp/deerhost/index.html`, `/tmp/deerhost/style.min.css`,
  `/tmp/deerhost/shot.jpg` (1200×946). Preview HTML/CSS are authoritative for
  section structure, copy kind and tokens.
- **Screenshot (1200×946):** a browser-chrome mock-up of the top of the page.
  Dark indigo/navy field (`#120851`) fills the viewport. A thin top info strip
  carries a phone number and an email on the left and "Live chat" + "Login /
  Register" on the right, over a hairline divider. Below it a white **DEERHOST**
  wordmark sits left and a horizontal uppercase menu (Home, About, Hosting,
  Pages, News, Contact) sits right; "Home" is underlined in white. The left half
  of the hero holds a small white eyebrow "Starting At Only $2.8/month", a large
  bold white uppercase H1 "WELCOME TO THE BEST HOSTING COMPANY", and a periwinkle
  **pill** button "GET STARTED NOW". The right half holds a large **isometric
  city-server illustration** (three blue/violet towers, clouds, circuit traces,
  a glowing base) floating on a faint cyan circuit-board line pattern. A
  three-dot carousel indicator sits centred at the bottom of the hero. The hero's
  lower edge is closed by a **white cloud-scallop** wave. Beneath it the page is
  white: a centered bold uppercase title "REGISTER YOUR DOMAIN NOW!" with a small
  periwinkle zig-zag underline, a wide **pill domain-search bar** (rounded input
  with a periwinkle 2px border, a ".com ▾" extension control, and a periwinkle
  pill "SEARCH" button), a centered row of five TLD prices (".com $1.95  .net
  $1.95  .org $1.95  .us $1.95  .in $1.95" — TLD token in periwinkle, price in
  black), and a short centered grey paragraph.
- **Section order (measured from the preview DOM, top to bottom):**
  1. `header-section` — top info bar + logo/nav, absolutely positioned over the
     hero (transparent), i.e. the hero's navy shows through.
  2. `section.hero-section` — 2-slide carousel (`hero__item` set-bg slides) over
     the navy, each a 6/6 split: text column (eyebrow `h5`, big `h1`/`h2`, pill
     CTA) + illustration column.
  3. `section.register-domain.spad` — domain search form + TLD price row.
  4. `section.services-section.spad` — 6 service cards on `#eeeffb`.
  5. `section.pricing-section.spad` — Monthly/Yearly toggle + 4 tier cards.
  6. `section.achievement-section.spad.set-bg` — 4 photo-backed counters.
  7. `section.work-section.spad` — overlapping band with 2 "how to build" items.
  8. `section.choose-plan-section.spad` — image + discount checklist CTA.
  9. `footer.footer-section` — two-tone navy footer (call/join banner, widget
     columns, socials, copyright).
- **Hero carousel:** the source is a 1-item loop carousel (`owl-carousel` data
  attr, `dots:true, animateOut:fadeOut, animateIn:fadeIn, smartSpeed:1200,
  autoplay:true`) with two indistinguishable-background slides. Slide 1:
  eyebrow `h5` "Starting At Only $2.80/month", `h1` "Welcome to the best hosting
  company", CTA "Get started now" → pricing. Slide 2: eyebrow `h5` "Free Domain
  For The First Year", `h2` "Fast, secure cloud hosting for every site", CTA
  "Compare plans" → hosting. Both slides share one background image and one
  right-column illustration (`img/hero/hero-right.svg`, 590×618). The recreation
  may keep it as a 2-slide carousel with dots.
- **Active-nav underline:** the current item ("Home") is underlined — a thin
  white underline under the active menu link.
- **Sibling comparison (why this slug is its own design):** Harbor is the
  hosting family's **navy + isometric-illustration** page with a cloud-scallop
  hero divider and a periwinkle `#4c57d6` accent throughout. Other hosting
  recreations in this repo are lighter/typographic; none uses this exact navy
  `#120851` + periwinkle pill + isometric-city hero + scalloped divider
  combination. Do not borrow a sibling's palette or hero treatment.

## Design tokens

| Token               | Value                                                                                                       | Where                                              |
| ------------------- | ----------------------------------------------------------------------------------------------------------- | -------------------------------------------------- |
| brand (primary)     | `#4c57d6` (periwinkle indigo)                                                                                | buttons, links, icon accents, eyebrow/section accents |
| brand hover/darker  | `#3d47c4`                                                                                                    | button/link hover                                   |
| navy (dark)         | `#120851`                                                                                                    | hero base, normal header bg, price band, shadows base |
| navy shades         | `#0b052f` (footer top-left half) · `#0e0739` (footer top-right half) · `#130a5c` · `#252163` (header divider) | footer two-tone band, header hairline               |
| text dark           | `#111` (headings/body on light) · `#444` (secondary) · `#666` (muted) · `#c4c4c4` (footer muted)             | typography                                          |
| surfaces (light)    | `#fff` (cards/page) · `#eeeffb` (services bg) · `#f5f5f5` / `#f2f2f2` (alt/secondary button)                 | section + card backgrounds                          |
| border              | `#e1e1e1` (light) · `1px solid #252163` (header info divider)                                                 | dividers                                            |
| font family         | `Montserrat, sans-serif`                                                                                     | whole page (`body`)                                 |
| font weights        | `400` (body) · `500` (price/eyebrow emphasis) · `700` (headings, buttons, prices)                            | typography                                          |
| base type           | `body` 16px, `-webkit-font-smoothing:antialiased`                                                            | page                                               |
| primary button      | `display:inline-block; font-size:15px; padding:14px 30px 12px; background:#4c57d6; color:#fff; text-transform:uppercase; font-weight:700; border-radius:50px` | all CTAs          |
| search button       | `.site-btn` `font-size:14px; padding:13px 30px 12px; background:#4c57d6; color:#fff; font-weight:700; text-transform:uppercase; border-radius:50px` | domain search      |
| secondary button    | `background:#f2f2f2; color:#111` (pricing "Choose plan" default state)                                        | pricing cards                                       |
| button radii        | `50px` (pill) on every button; `10px` on cards                                                                | shapes                                              |
| section title       | `font-weight:700; text-transform:uppercase; color:#111` (white inside the dark work band), centered, `margin-bottom:70px`, with a small centered ~83px underline accent below | every section heading |
| `.spad` rhythm      | `padding-top:100px; padding-bottom:100px`                                                                     | all body sections                                   |
| service card        | `background:#fff; padding:40px 45px 20px 40px; border-radius:10px; box-shadow:0 0 10px #12085126; transition:all .3s`; hover `box-shadow:0 8px 30px #12085133` | services section  |
| service title/price | `h5` `20px/#111/700`; `span` `15px/#4c57d6/500`                                                               | service cards                                       |
| pricing card        | `background:#fff; padding:22px 20px 20px; box-shadow:0 0 10px #1208511a`; hover shadow `0 8px 30px #12085133` | pricing section                                     |
| price band          | `h3` `background:#120851; color:#fff; font-weight:700; padding:24px 0 20px; border-radius:10px; margin:0 -30px`; on hover → `#4c57d6`; `span` `16px/400` | pricing cards            |
| pricing list        | `li` `14px/#444; line-height:40px`                                                                            | pricing cards                                       |
| pricing toggle      | `border:1px solid #4c57d6; border-radius:50px; height:52px; width:266px`; active label `background:#4c57d6; color:#fff`; label `15px/#444/700 uppercase`; hidden radio + focus ring | pricing section        |
| domain input        | `height:54px; border:2px solid #4c57d6; border-radius:50px; font-size:14px; color:#111; padding-left:20px`    | register-domain                                     |
| TLD price row       | `li` `#4c57d6/700/20px`; `span` price `#111`                                                                  | register-domain                                     |
| counters            | icon `40px #4c57d6`; number `h2 #fff/700`; label `p 16px #fff uppercase`; item `text-align:center`            | achievement band                                    |
| achievement band    | one set-bg cover photograph (`background-position:top center`), `padding-bottom:450px`                        | achievement section                                 |
| work band overlap   | `margin-top:-405px; position:relative; z-index:9; border-top:1px solid #62677d`                               | work section pulls up into the achievement band     |
| work item           | icon `53px #4c57d6`; eyebrow `span 14px #4c57d6`; `h3 700`; `p` + pill "Read More"                            | work section                                        |
| plan CTA list       | `li` `16px/500/#111`, `line-height:40px`, periwinkle check glyph with `margin-right:5px`                      | choose-plan section                                 |
| footer top band     | left half `#0b052f`, right half `#0e0739` (two `::before/::after` halves); heading `20px #fff/700`; phone `#4c57d6/700` | footer        |
| footer widgets      | muted `#c4c4c4` links; hover → `#fff` + underline; info `li` `14px`, periwinkle icon                             | footer                                              |
| social icons        | Facebook, X, YouTube, Instagram — source uses FontAwesome brand glyphs; recreation uses `lucide-react`        | footer                                              |
| radii               | `50px` buttons/pills/inputs · `10px` cards & price band · nothing else rounded                                | shapes                                              |
| Google Fonts map    | `Montserrat:wght@400;500;700` via `<link>` in `index.html`; icons from `lucide-react` (no icon font)          | `index.html`                                        |
| transitions         | `all .3s` (cards, buttons) · `all .9s ease-out` (hero element entrances)                                      | interaction                                         |
| attribution         | footer links `https://www.componentdock.com/` ("Component Dock") replacing the source's Colorlib credit       | ADDED vs the reference                              |

## Requirements

### Feature: Header (info strip + transparent nav over the hero)

A thin dark info strip (contact + auth) sits above a logo/nav row, absolutely
positioned so the hero's navy shows through.

#### Scenario: Info strip renders contact and auth links

- **Given** the page loads
- **When** the header renders
- **Then** a top strip sits on the dark shell with a bottom hairline
  (`border-bottom:1px solid #252163`, `padding:10px 0`)
- **And** the left side shows a phone number and an email with icon glyphs
  (`13px #fff`, `margin-right:25px`), and the right side shows "Live chat" and
  "Login / Register" links
- **And** the strip carries the app's OWN contact details (never the source's
  `+1 (555) 014-2290` / `support@deerhost.example`)

#### Scenario: Nav row renders the brand and menu

- **Given** the header renders
- **When** the nav row is inspected
- **Then** a wordmark sits left (the app's own — never the source's logo
  artwork) and a horizontal uppercase menu sits right
- **And** the menu contains the same link set as the source (Home, About,
  Hosting, Pages ▸, News, Contact) with a dropdown on the "Pages" item exposing
  the secondary links (Pricing, Blog Details, 404)
- **And** the current item is highlighted with a thin underline
- **And** the whole header is `position:absolute; left:0; top:0; width:100%;
  z-index:9` so it overlays the hero rather than pushing it down

### Feature: Hero (2-slide navy carousel with isometric illustration)

A dark hero split 6/6 into a text column and an illustration column, over a
navy background, with carousel dots and a white cloud-scallop divider at the
bottom edge.

#### Scenario: Hero shows the primary slide

- **Given** the page loads
- **When** the hero renders
- **Then** it is a full-width band with the navy `#120851` background (a set-bg
  cover image plus the navy base) and the header floats over it
- **And** the left column holds an eyebrow `h5` (e.g. a starting-price line), a
  large bold white uppercase heading (`h1`, ~2 lines), and a periwinkle pill CTA
  button
- **And** the right column holds a large illustration standing in for the
  source's isometric city-server SVG (a designer-made SVG/asset of the app's
  own, or a curated placeholder — never the source `hero-right.svg`)

#### Scenario: Hero carousel advances between two slides

- **Given** the hero renders with two slides
- **When** autoplay or the dots are used
- **Then** slide 2 shows a second eyebrow + heading + CTA pair (a "free domain"
  / "compare plans" pairing matching the source's kinds of content)
- **And** three dot indicators sit centred near the bottom of the hero, the
  active dot distinguishable, and each dot is a labelled button
- **And** slides cross-fade (source `animateIn:fadeIn / animateOut:fadeOut`,
  `smartSpeed:1200`) or otherwise transition without layout shift

#### Scenario: Cloud-scallop divider closes the hero

- **Given** the hero renders
- **When** its bottom edge is inspected
- **Then** a white scalloped wave (SVG) transitions the navy hero into the
  white page below, spanning the full width
- **And** it is the app's own shape (never a copied source image)

### Feature: Register-domain section

#### Scenario: Domain search form renders as a pill row

- **Given** the page renders
- **When** the register-domain section is inspected
- **Then** a centered uppercase section title (e.g. "Register your domain now")
  sits above a pill form
- **And** the form holds a text input (`height:54px`, `border:2px solid
  #4c57d6`, `border-radius:50px`, `padding-left:20px`), an extension control
  (a `.com ▾` style TLD selector offering `.com/.net/.org/.us/.in`), and a
  periwinkle pill submit button labelled "Search"
- **And** the input is associated with a real `<label>` and the TLD control has
  an accessible name

#### Scenario: TLD price row and blurb render

- **Given** the section renders
- **When** the area under the form is inspected
- **Then** a centered inline row of five TLD prices renders (TLD token in
  `#4c57d6`, `20px/700`, price in `#111`), spaced ~62px apart
- **And** a short centered paragraph explains registration (paraphrased, never
  the source string verbatim)

#### Scenario: Searching a domain is handled without navigation

- **Given** the form is rendered
- **When** the user submits a domain
- **Then** the component validates the input (source `pattern`
  `[A-Za-z0-9][A-Za-z0-9-]{0,62}(\.[A-Za-z]{2,})?`) and, on success, shows a
  result message in a polite live region (source `aria-live="polite"`
  `#domain-results`)
- **And** an invalid/empty submission shows an inline error and does not
  navigate away

### Feature: Services section (6 cards on a tinted band)

#### Scenario: Six hosting-service cards render in a 3-column grid

- **Given** the page renders
- **When** the services section is inspected
- **Then** the section has background `#eeeffb` and a centered uppercase title
  (e.g. "Choose the right hosting solution")
- **And** exactly six white cards render (`border-radius:10px`, `padding:40px
  45px 20px 40px`, `box-shadow:0 0 10px #12085126`), three per row on desktop
  (`col-lg-4`), two per row at `md`/`sm`
- **And** each card holds an `h5` title (`20px/#111/700`), a periwinkle price
  line (`span` `15px/#4c57d6/500`), and a short blurb
- **And** the card set covers the source's six offerings: Shared Hosting,
  WordPress Hosting, Dedicated Hosting, SSL Certificate, Web Hosting, Cloud
  Server (prices/copy paraphrased)

#### Scenario: Service cards lift on hover

- **Given** a service card is rendered
- **When** it is hovered or focused
- **Then** its shadow deepens to `0 8px 30px #12085133` over `all .3s`
- **And** focus-visible shows a visible ring

### Feature: Pricing section (Monthly/Yearly toggle + 4 tiers)

#### Scenario: Billing toggle switches the plan set

- **Given** the pricing section renders
- **When** the toggle is inspected
- **Then** a pill toggle (`border:1px solid #4c57d6`, `border-radius:50px`,
  `height:52px`, `width:266px`) offers "Monthly" and "Yearly", with the active
  label filled `#4c57d6`/white
- **And** the toggle is a real radio group (`role="radiogroup"`,
  `aria-label="Billing period"`) with an accessible focus ring
- **And** switching to Yearly swaps the displayed prices (the source has a
  separate `.yearly__plans` set: `$150 / $250 / $350 / $450`)

#### Scenario: Four tier cards render with price bands

- **Given** the Monthly plans render
- **When** the cards are inspected
- **Then** four white pricing cards render (`padding:22px 20px 20px`,
  `box-shadow:0 0 10px #1208511a`), one per column on desktop
- **And** each holds a tier name (`h4 #111/700`), a **navy price band**
  (`h3 background:#120851; color:#fff; border-radius:10px; padding:24px 0
  20px`, with a `/ month` suffix in `16px/400`), a feature list (`li 14px/#444;
  line-height:40px`), and a secondary "Choose plan" button
- **And** the tiers are Started `$15.90`, Business `$25.90`, Premium `$35.90`,
  Dedicated `$45.90` (paraphrased copy, source list kinds preserved: web space,
  site tools, free domain, 24/7 support, marketing tool, uptime, money-back)

#### Scenario: Pricing card hover promotes the accent

- **Given** a pricing card is rendered
- **When** it is hovered
- **Then** its shadow deepens to `0 8px 30px #12085133`, its price band fills
  `#4c57d6`, and its "Choose plan" button fills `#4c57d6`/white, over `all .3s`

### Feature: Achievement band (photo-backed counters)

#### Scenario: Four counters render over a photo

- **Given** the page renders
- **When** the achievement section is inspected
- **Then** it is a set-bg cover band (`background-position:top center`,
  `padding-bottom:450px`) using the app's own placeholder image
  (`https://picsum.photos/seed/harbor-achievement/1920/900`), never a source
  photo
- **And** four centred items render (`col-lg-3`), each an icon (`40px #4c57d6`,
  `lucide-react` equivalents of users / square-pen / copy / settings), a large
  white bold number, and an uppercase white label
- **And** the labels read the source's kinds: Clients, Domains, Server, Installs

#### Scenario: Counters animate up on view

- **Given** the achievement band scrolls into view
- **When** the animation runs
- **Then** each number counts up over ~4s (source `data-countup
  data-duration="4"`) to its target and stops, never re-triggering on scroll-back

### Feature: Work band (overlapping "how to build" section)

#### Scenario: The work band overlaps the achievement band

- **Given** both sections render
- **When** their geometry is inspected
- **Then** the work section is pulled up over the achievement band
  (`margin-top:-405px; position:relative; z-index:9`) and separated by a top
  hairline (`1px solid #62677d`)
- **And** its title is forced white (dark-band treatment) with a large
  `margin-bottom`, matching the source's overlapping composition

#### Scenario: Two "how to build" items render

- **Given** the work band renders
- **When** its content is inspected
- **Then** a centered uppercase title (e.g. "How to build your website online
  today?") sits above two `col-lg-6` items
- **And** each item holds a large accent icon (`53px #4c57d6`), a small
  periwinkle uppercase eyebrow (e.g. "Create your own website with our"), a bold
  `h3` (e.g. "Web site builder"), a paragraph, and a pill "Read More" CTA
- **And** the two items pair a website-builder and an online-store topic,
  matching the source's kinds

### Feature: Choose-plan CTA section

#### Scenario: Image + discount checklist render side by side

- **Given** the page renders
- **When** the choose-plan section is inspected
- **Then** a `col-lg-6` illustration (the app's own, ~570×501) sits beside a
  text block
- **And** the text block holds a bold `h3` (e.g. an "up to 70% discount with
  free domain registration" line), a six-item checklist with periwinkle check
  glyphs (`li 16px/500/#111; line-height:40px`), and a periwinkle pill CTA
- **And** the checklist items mirror the source's kinds (free domain, free
  email, disk space, free site builder, free marketing tools, 1-click WordPress)

### Feature: Footer (two-tone navy + widget columns)

#### Scenario: Footer top band splits into two navy halves

- **Given** the page renders
- **When** the footer top is inspected
- **Then** it is a two-tone band — left half `#0b052f`, right half `#0e0739`
  (`::before` / `::after`) — with a left "Need help? Call us" block (heading
  `20px #fff/700`, phone number `#4c57d6/700`) and a right "Join now…" block
  with "Log in" / "Sign Up" pill buttons

#### Scenario: Footer widget columns and socials render

- **Given** the footer text area renders
- **When** it is inspected
- **Then** it shows the app's wordmark + a short blurb, a row of four social
  icons (Facebook, X, YouTube, Instagram — `lucide-react` equivalents with
  `aria-label`s, source uses FontAwesome), and link columns (Company: Our
  Company / About Us / Press & Media / News & Blogs / Careers; Hosting: Web
  Hosting / Reseller Hosting / VPS Hosting / Dedicated Servers / Cloud Hosting;
  Contact: address + two phones + email)
- **And** footer muted links are `#c4c4c4`, turning `#fff` with underline on
  hover

#### Scenario: Copyright line credits Component Dock

- **Given** the footer renders
- **When** the bottom line is inspected
- **Then** it shows a copyright line and links
  `https://www.componentdock.com/` branded "Component Dock"
- **And** it never carries the source's Colorlib credit text

### Feature: Responsive behaviour

#### Scenario: Grids reflow on smaller screens

- **Given** the page renders at `md` (≤ ~991px) and `sm` (≤ ~767px) widths
- **When** the grids are measured
- **Then** service cards go 3 → 2 per row, pricing cards stack, the hero splits
  to a single column with the illustration below the text, and the nav collapses
  to an accessible toggle (mobile menu) with a focus-trapped, keyboard-closable
  panel

#### Scenario: Spacing and overlap collapse gracefully

- **Given** a narrow viewport
- **When** the dark bands are inspected
- **Then** the work band's negative overlap is reduced/removed so content is not
  clipped, and `.spad` vertical rhythm stays consistent (no horizontal scroll at
  320px)

### Feature: Component Dock attribution

#### Scenario: Footer links Component Dock

- **Given** the page renders
- **When** the footer is inspected
- **Then** exactly one clear link points to `https://www.componentdock.com/`
  branded "Component Dock"
- **And** no `colorlib` / "Deerhost" / `deerhost` string appears anywhere in
  `apps/harbor`

## Verification checklist

- [ ] `npm run spec:validate` passes for `template-harbor`
- [ ] `scripts/verify-app.sh harbor` passes: typecheck + lint + knip + fallow +
      vitest at 100% coverage + build (~2–3 min)
- [ ] Every scenario above has at least one matching test (scenario-style `it`
      blocks), with 100% lines/functions/branches/statements on the app
- [ ] Screenshot match against `deerhost-free-template.jpg` (1200×946): navy
      `#120851` hero; thin info strip + white wordmark + uppercase nav with an
      underlined active item; eyebrow + big white uppercase H1 + periwinkle pill
      CTA on the left and an isometric city-server illustration on the right;
      three carousel dots; white cloud-scallop divider; white register-domain
      band with a periwinkle pill search bar, a TLD row and a centered blurb
- [ ] Section order at desktop matches the reference: header (overlay) → hero →
      register-domain → services (`#eeeffb`) → pricing → achievement (photo) →
      work (overlap) → choose-plan → footer
- [ ] Tokens present in `@theme` / components: brand `#4c57d6`, hover `#3d47c4`,
      navy `#120851` (+ `#0b052f`, `#0e0739`, `#252163`), text `#111/#444/#666`,
      surfaces `#fff/#eeeffb/#f5f5f5/#f2f2f2`, border `#e1e1e1`, Montserrat
      400/500/700, radii `50px` (buttons/inputs) and `10px` (cards/price band),
      `.spad` `100px/100px`, card/pricing shadows and hovers
- [ ] Hero: 2 slides with eyebrow + heading + CTA pairs, autoplay/fade, labelled
      dot buttons, white scallop divider, own illustration (no source SVG)
- [ ] Register domain: pill input with 2px `#4c57d6` border, TLD selector,
      "Search" submit, `role`-correct labels, live-region result, no navigation
- [ ] Pricing: functional Monthly/Yearly radiogroup swapping the plan set; four
      navy price-band cards with feature lists and hover promotion
- [ ] Achievement: photo band with `padding-bottom:450px`; four counters whose
      numbers count up on view; icons from `lucide-react`
- [ ] Work band overlaps via `margin-top:-405px`, top hairline, two items with
      icon + eyebrow + h3 + paragraph + "Read More"
- [ ] Footer: two-tone navy halves, call/join banner, widget columns, four
      labelled social links, copyright; one Component Dock link
- [ ] Responsive: nav collapses to an accessible toggle; grids reflow (services
      3→2, hero to one column); no horizontal scroll at 320px
- [ ] Accessibility: semantic landmarks (`header`/`nav`/`main`/`footer`), real
      labels on form controls, `aria-label`s on icon-only controls, focus-visible
      rings, keyboard-operable carousel, toggle and mobile menu
- [ ] `public/CNAME` = `harbor.free.componentdock.com`; `"homepage"` matches;
      `npm install` run at the repo root so the lockfile registers
      `@free-react-templates/harbor`
- [ ] Zero `colorlib` / "Deerhost" / `deerhost` references anywhere in
      `apps/harbor` (comments included — record the palette as design notes, not
      provenance)
- [ ] No copied assets: no `img/**` photos or SVGs, no logo artwork, no
      `hero-right.svg` / `choose-plan.svg` / `footer-bg.svg`, no CSS files, no
      FontAwesome; photos come from picsum and icons from `lucide-react`
- [ ] PR description includes: source template (ColorLib Deerhost), preview URL
      (`https://preview.colorlib.com/theme/deerhost/` → HTTP 200, stylesheet
      `css/style.min.css?v=3.0.0`), the design tokens used (`#4c57d6` brand,
      `#120851` navy, Montserrat, `50px` pills / `10px` cards, `#eeeffb`
      services band), the measured section order/overlap
      (`padding-bottom:450px` / `margin-top:-405px`) and what differs (new name,
      picsum placeholders, own logo/illustrations/copy, lucide icons, added
      keyboard/aria states and the Component Dock attribution)
