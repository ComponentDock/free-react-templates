# Template: Fstop (Bootstrap / Photography Template)

> **SUPERSEDED** — ColorLib "Snapshot" shipped as **Focus** (PR #436,
> https://focus.free.componentdock.com, 2026-08-15). Do not implement —
> delete this spec on next cleanup. The four TEMPLATES.md Snapshot rows
> (lines 499/1168/2359/2473) are marked `[x]` with the focus URL.

## Purpose

Fstop is a single-page photography-agency template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Snapshot"
design (see TEMPLATES.md — Bootstrap category, line 499; the same source is
DUPLICATED at lines 1168 (Business), 2359 (One Page) and 2473 (Photography) —
ALL FOUR rows must be marked `[x]` when done), built under a NEW name with the
monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a **dark, cinematic photography-agency landing page**: a
**fixed right-side vertical dot navigation** (6 links, active dot in taupe)
over a full-bleed **hero** (darkened background photo, centered camera-shutter
logo box "Snapshot / Photographer / San Francisco", huge white uppercase
headline "We Make Something Great" and an outlined uppercase "Contact us"
button); an **About** section (video-thumb image with a circular play button +
agency copy, a "120 Project complete" counter and a Noto Serif italic client
quote); a **Photography Services** section (three video-production cards +
three taupe **circular progress bars**: Creation 90% / Development 80% /
Production 75%); a **Selected Projects** grid of twelve 600px photo tiles with
a white expand icon on hover; a **Testimony** carousel (dark cards with an
overlapping circular avatar and a Noto Serif italic quote, "Garreth Smith");
a **Contact** section (four dark info boxes + a message form with a taupe pill
submit + a map placeholder); and a **minimal centered footer** with copyright
and social icons. Brand colors: near-black `#191a1c` page background, gray
`#9da1a5` body text, taupe `#9d8f8f` accents, dark card `#202224`. Fonts:
**Noto Sans** (body/headings) + **Noto Serif** (italic quotes).

## Design reference (replication findings)

- **Original:** ColorLib "Snapshot" — `https://colorlib.com/wp/template/snapshot/`
  (Photography Template). TEMPLATES.md has **FOUR copies** of this item
  (lines 499, 1168, 2359, 2473 — all `- [ ]`); mark ALL FOUR `[x]` when done.
  No other spec folder references `wp/template/snapshot/` (verified).
- **Preview URL:** `https://preview.colorlib.com/theme/snapshot/` — **HTTP 200**
  (50 KB HTML), reachable and analyzed live in a browser (structure +
  computed styles; page title "Snapshot - Free Bootstrap 4 Template by
  Colorlib"). Stylesheet: `css/style.css` (58 KB: bootstrap 4 + custom
  theme). Fonts **"Noto Sans"** (400/700) + **"Noto Serif"** (400/700) loaded
  via inline cf-fonts `@font-face` blocks in the head — recreate with Google
  Fonts `<link>`s in `index.html`.
- **Screenshot:** `snapshot-free-template.jpg` (1200×946, AVIF; verified via
  browser vision): dark cinematic hero — full-width behind-the-scenes photo of
  two people (darkened with a black overlay) with a centered logo (camera
  aperture icon + "SNAPSHOT" bold white + "Photographer / San Francisco"
  tagline), huge white uppercase "WE MAKE SOMETHING GREAT", a gray lorem
  paragraph and a rectangular **outlined** "CONTACT US" button (thin white
  border); below, the About section shows a photo of a man with glasses and a
  beanie on the left and agency copy on the right. Overall aesthetic: minimal
  dark photography portfolio, white/taupe on near-black.
- **Section structure (from the live DOM, in order):**
  1. `nav#navbar.navbar` — **fixed right-side vertical dot navigation**:
     `position: fixed; top: 50%; right: 50px; transform: translateY(-50%)`
     (mobile ≤767.98px: `right: 20px`). `ul.nav-menu` of 6 links, each
     `li { min-width: 200px; text-align: right }` with an `a.dot`
     (`data-scroll` target, white text, `padding: 5px 0`): **Home** (`#home`,
     active), **About** (`#about`), **Services** (`#services`), **Gallery**
     (`#work`), **Testimony** (`#testimonial`), **Contact** (`#contact`).
     Each dot has a 5px `::before` circle (1px border
     `rgba(255,255,255,0.5)`, `right: 0`, vertically centered);
     `.dot.active::before` is filled taupe `#9d8f8f`; a small
     `span::before` triangle (`rgba(157,143,143,0.2)`) points at the label.
     No hamburger — the dot rail is always visible.
  2. `section#home.hero-wrap.js-fullheight` — **hero**: full-height, inline
     `background-image: url(images/bg-1.jpg)` (cover, top center) +
     `div.overlay` (black, opacity 0.5); centered column
     (`col-lg-7 text-center`):
     - `h1.logo` — `a` with `flaticon-camera-shutter` icon + **"Snapshot"**
       - `small` tagline **"Photographer / San Francisco"** (white 14px);
         logo `a`: 40px, white, `border: 1px solid rgba(255,255,255,0.2)`
         (border-top: none), `padding: 0 15px`.
     - `h1.mb-4` — **"We Make Something Great"** — computed **62px, Noto
       Sans 700, uppercase, white**, line-height 1.2 (HTML has a `<br>`
       after "We Make").
     - `p.mb-4` — lorem paragraph (gray `#9da1a5`).
     - `p.mt-5` + `a.btn-custom` **"Contact us →"** — **outlined button**:
       `border: 1px solid rgba(255,255,255,0.2)`, `padding: 15px 20px`,
       **10px, weight 700, uppercase, letter-spacing 1px, color #9da1a5**;
       `ion-ios-arrow-round-forward` arrow icon after the label.
  3. `section#about.ftco-about.img.ftco-section` — **About**: left
     `col-md-6`: `div.img-about` (overlay) + `div.img.img-video`
     (`images/about-2.jpg`, ~600px) with centered `a.icon-video` play button
     (80px circle, `rgba(255,255,255,0.2)`, white 30px play icon; links to
     `https://vimeo.com/45830194`). Right `col-md-6.pl-md-5`:
     `div.heading-section` with `h2` **"Snapshot is A Creative Direction,
     Photography Agency"** (16px, weight 700, uppercase, letter-spacing 2px,
     color `#9da1a5` — section h2s are SMALL GRAY caps, not white), two lorem
     paragraphs, `div.counter-wrap` (`.number` `data-number="120"`, white
     bold, animated 0→120 by jquery counter + label **"Project complete"** —
     both rendered at **10px uppercase letter-spacing 2px**), a row of two
     small photos (`img.img-about-2`: `images/about.jpg`, `images/about-3.jpg`,
     300px high), and a Noto Serif italic quote paragraph (18px, white):
     "Far far away, behind the word mountains…" with attribution
     **"— Lucy Lee"** (13px Noto Serif italic).
  4. `section#services.ftco-section` — **Photography Services**: `h2`
     **"Photography Services"** + intro paragraph; then 3 service cards
     (`col-md-4`, `.media.block-6.services`): `div.icon` (flaticon
     video-camera / video-player / video-player-1, gray `#9da1a5`) + `h3`
     (white 16px) **"Movies & Advertising Videos"**, **"Clip & Music
     Videos"**, **"Short Film Productions"** + lorem text; plus a `col-md-3`
     photo (`images/about.jpg`). Below, `.row.progress-circle.pt-md-5`:
     **3 circular progress bars** (`col-md-4`, 150px circles, taupe
     `#9d8f8f` border via `.border-primary`, value % in the center):
     **Creation 90%**, **Development 80%**, **Production 75%** (white 16px
     uppercase labels). Then a row with a `col-md-8` lorem paragraph and a
     `col-md-5` photo (`images/about-2.jpg`).
  5. `section#work.ftco-section` — **Selected Projects**: centered `h2`
     **"Selected Projects"** + intro; `container-fluid.px-md-0` →
     `row.no-gutters` of **12 project tiles** (`col-md-4`, 4 rows of 3):
     `div.model.img` (**600px high**, `images/model-1..12.jpg`, top-center
     crop, hover overlay), `a.icon.image-popup` (70px white circle with an
     expand glyph, centered, `opacity: 0` → 1 on hover), `div.desc`:
     `span` category (e.g. **"Nature"**, `rgba(255,255,255,0.9)` 14px) +
     `h2` **"Beautiful Work"** (white 18px) linking to `work-single.html`
     (recreation: non-navigating link).
  6. `section#testimonial.ftco-section.testimony-section` — **Testimony**:
     `span.subheading` **"Testimony"** (12px, weight 600, uppercase,
     letter-spacing 4px, taupe `#9d8f8f`) + `h2` **"Our satisfied customer
     says"** + intro; **owl carousel of 5 items**: `.testimony-wrap.p-4.pb-5`
     (dark card bg `#202224`) with `.user-img` **100px circle**
     (`images/person_1..3.jpg`, `margin-top: -75px` — overlaps the card
     top), `.quote` 40px white circle (bottom right), a **Noto Serif italic
     18px white** quote paragraph, `.name` **"Garreth Smith"** (white 16px)
     and `.position` (taupe `#9d8f8f` 14px): "CEO Founder of Commercial
     Building" / "CEO Founder of Interior Design" / "Exterior Designer" /
     "Landscape Designer" / "System Analyst".
  7. `section#contact.ftco-section.contact-section` — **Contact Me**:
     centered `h2` **"Contact Me"** + intro; row of **4 contact boxes**
     (`col-md-3`, `.box.text-center.p-4`, bg `#202224`, icon circle + `h3`
     white 16px + value): **Address** — 198 West 21th Street, Suite 721 New
     York NY 10016 (icon-map-signs) · **Contact Number** — + 1235 2355 98
     (`tel://1234567920`, icon-phone2) · **Email Address** —
     info@yoursite.com (`mailto:`, icon-paper-plane) · **Website** —
     yoursite.com (`#`, icon-globe); then `.row.block-9`: `col-md-6` **form**
     (inputs **Your Name**, **Your Email**, **Subject**, **Message** textarea
     `rows=7` + submit **"Send Message"** `btn.btn-primary.py-3.px-5` — taupe
     `#9d8f8f` pill, radius 30px) and `col-md-6` **`#map`** (Google Maps
     embed in the original, `height: 300px` — recreation renders a
     placeholder block; fidelity call).
  8. `footer.ftco-footer.py-5` — **minimal centered footer**: copyright
     "Copyright © <year> All rights reserved | This template is made with ❤
     by Colorlib" → recreation: "…made with ❤ by Component Dock" linking
     `https://www.componentdock.com/`; below, 3 round social icons (twitter,
     facebook, instagram — `#` links).
- **Behavior notes:** the nav dots highlight the section in view
  (`data-scroll` + `.dot.active` via scrollspy JS — recreate with React
  state on click/scroll; fidelity call); the counter animates 0 → 120 on
  load (jquery.animateNumber — recreation renders 120); the testimony
  carousel is an owl slider (5 items — recreation renders all or an
  auto-advancing carousel; fidelity call); project tiles open a lightbox
  (magnific-popup) and link to `work-single.html` (a second page in the
  original — recreation is single-page, links non-navigating); the About
  play button opens a Vimeo embed (recreation: non-navigating button or
  modal placeholder); the hero has `data-stellar-background-ratio="0.5"`
  parallax (optional, fidelity call); the contact form has no backend
  (preventDefault + client-side success message). Section rhythm: `.ftco-section`
  padding `7em 0`. **The whole site is DARK** — page background `#191a1c`;
  do NOT build white sections.

## Design tokens (extracted from `css/style.css` + live computed styles)

- Page: `body { font-family: "Noto Sans", Arial, sans-serif; font-size: 14px;
line-height: 1.8; font-weight: 400; color: #9da1a5; background: #191a1c; }`
  — **dark theme**: near-black `#191a1c` page, gray `#9da1a5` body text.
- Fonts: **"Noto Sans"** (400/700) for body/headings/nav; **"Noto Serif"**
  (400/700) for italic quote paragraphs. Recreation: Google Fonts `<link>`s.
- Taupe accent **#9d8f8f** — `.subheading` color, `.dot.active::before` fill,
  `.progress-circle .border-primary` (circular bars), `.btn.btn-primary`
  background, `.testimony-wrap .position` color, hover triangle arrows.
- Dark card **#202224** — `.box` (contact boxes), `.testimony-wrap`.
- White `#fff` — hero h1, logo, `h3` service titles, `.number`, `.name`,
  `.progress-circle h2` (16px white uppercase), `.model h2` titles.
- Borders `rgba(255,255,255,0.2)` — logo box, `.btn-custom` outline,
  `.icon-video` circle; `rgba(255,255,255,0.05)` — footer top border.
- Section headings (`h2`): **16px, weight 700, uppercase, letter-spacing 2px,
  color #9da1a5** (small gray caps — the signature look).
- Hero `h1`: **62px, Noto Sans 700, uppercase, white**, line-height 1.2.
- Logo: 40px white; bordered box (1px `rgba(255,255,255,0.2)`, no top
  border); `small` tagline 14px white.
- Buttons: `.btn { border-radius: 30px }` (pill). `.btn-custom` (hero CTA) =
  **outlined**: 1px `rgba(255,255,255,0.2)` border, `padding: 15px 20px`,
  10px/700 uppercase, letter-spacing 1px, color `#9da1a5`, transparent bg.
  `.btn.btn-primary` (Send Message) = **taupe pill**: bg `#9d8f8f`, 1px
  `#9d8f8f` border, white text; hover: transparent bg + taupe text.
- Nav: fixed right rail (`top: 50%; right: 50px`, translateY(-50%); mobile
  `right: 20px`), `li` min-width 200px right-aligned, dots 5px circle
  (1px `rgba(255,255,255,0.5)` border), active dot filled taupe, white links.
- Sections: `.ftco-section` padding `7em 0`; hero full-height
  (`js-fullheight` ~780px+ via `.slider-text { height: 780px }`).
- About: video thumb with 80px circular play button; counter `120` + "Project
  complete" at **10px uppercase letter-spacing 2px** (white bold number);
  small photos 300px high; quote Noto Serif italic 18px white + 13px
  attribution.
- Services: 3 icon cards (icons gray 14px+), circular progress bars 150px
  with taupe `#9d8f8f` border and centered % value, white 16px uppercase
  labels.
- Projects: 12 tiles, 600px high, hover overlay + 70px white expand circle
  (`opacity 0 → 1`), category span `rgba(255,255,255,0.9)` 14px, title white
  18px.
- Testimony: cards bg `#202224`, avatar 100px circle overlapping the card
  top (`margin-top: -75px`), 40px white quote circle bottom right, quote
  Noto Serif italic 18px white, name white 16px, position taupe 14px.
- Contact: boxes bg `#202224` with icon circle + white h3 16px + value;
  form inputs standard bordered white; submit = taupe pill; map 300px.
- Footer: transparent on the dark page, centered text, `rgba(255,255,255,0.7)`
  links, social icon circles.
- Imagery: all photos are placeholders in the recreation —
  `https://picsum.photos/seed/fstop-<n>/<w>/<h>` (deterministic per
  template): hero bg (seed `fstop-hero`, 1920×1080 — must read as a moody
  behind-the-scenes/photo-shoot subject), about video thumb
  (`fstop-about2`), about small pair (`fstop-about`, `fstop-about3`),
  services side photos, 12 project tiles (`fstop-model-1..12`, 800×600 —
  photography subjects), testimony avatars (`fstop-person-1..3`, 200×200
  portraits). **Picsum seeds are arbitrary — verify the seeds render
  suitable subjects before shipping and pin verified seeds (see
  `docs/templates/fstop/tasks.md`).** Icons from `lucide-react` (camera,
  video, clapperboard, play, expand, map-pin, phone, mail, globe, arrow-right,
  quote); no ColorLib assets. Note: lucide-react removed brand icons
  (Facebook/Twitter/Instagram) — use inline SVG brand paths for the footer
  social icons.

## Requirements

### Requirement: Dot navigation

The system SHALL render the fixed right-side vertical dot navigation with six
links and an active-state dot.

#### Scenario: Dot nav renders

- **GIVEN** the Fstop app is rendered at a desktop viewport
- **WHEN** the page is displayed
- **THEN** a fixed navigation rail SHALL sit vertically centered on the right
  edge listing Home, About, Services, Gallery, Testimony and Contact as white
  links with a small circular dot before each
- **AND** the dot of the section currently in view SHALL be filled with the
  taupe accent color

#### Scenario: Dot nav on mobile

- **GIVEN** the Fstop app is rendered at a mobile viewport
- **WHEN** the page is displayed
- **THEN** the same dot navigation SHALL render, shifted closer to the right
  edge, and the links SHALL remain accessible

### Requirement: Hero

The system SHALL render the full-height hero with the logo box, headline,
copy and outlined CTA over a darkened background photo.

#### Scenario: Hero renders

- **GIVEN** the Fstop app is rendered
- **WHEN** the hero section is displayed
- **THEN** a full-height hero SHALL render with a background photo darkened by
  a black overlay
- **AND** a centered logo box SHALL render with a camera icon, the white
  wordmark "Fstop", and the small tagline "Photographer / San Francisco"
- **AND** the 62px white uppercase headline "We Make Something Great" and a
  gray paragraph SHALL render below
- **AND** an outlined uppercase button "Contact us" with an arrow icon SHALL
  render and scroll to the contact section when clicked

### Requirement: About

The system SHALL render the about section with the video thumb, agency copy,
project counter and client quote.

#### Scenario: About renders

- **GIVEN** the Fstop app is rendered
- **WHEN** the About section is displayed
- **THEN** a photo with a centered circular play button SHALL render on the
  left
- **AND** the section heading "Fstop is A Creative Direction, Photography
  Agency" SHALL render as small gray uppercase text with two paragraphs of
  agency copy
- **AND** the counter SHALL render the number 120 (white, bold) with the
  uppercase label "Project complete"
- **AND** a row of two small photos and an italic Noto Serif client quote
  with the attribution "— Lucy Lee" SHALL render

#### Scenario: Play button

- **GIVEN** the Fstop app is rendered
- **WHEN** the user activates the play button
- **THEN** the page SHALL NOT navigate away (no video backend) and the button
  SHALL remain in place

### Requirement: Photography Services

The system SHALL render the services section with three video-production
cards and three circular progress bars.

#### Scenario: Services render

- **GIVEN** the Fstop app is rendered
- **WHEN** the Services section is displayed
- **THEN** the heading "Photography Services" SHALL render with an intro
  paragraph
- **AND** three service cards SHALL render (Movies & Advertising Videos, Clip
  & Music Videos, Short Film Productions), each with an icon, a white title
  and a short text

#### Scenario: Progress circles render

- **GIVEN** the Fstop app is rendered
- **WHEN** the Services section is scrolled into view
- **THEN** three circular progress bars SHALL render with taupe borders and
  centered values: Creation 90%, Development 80%, Production 75%, each with
  a white uppercase label

### Requirement: Selected Projects

The system SHALL render the project grid with twelve photo tiles.

#### Scenario: Project grid renders

- **GIVEN** the Fstop app is rendered
- **WHEN** the Selected Projects section is displayed
- **THEN** the heading "Selected Projects" SHALL render with an intro
  paragraph
- **AND** a 3-column grid of twelve photo tiles SHALL render (4 rows), each
  with a category label and the white title "Beautiful Work"

#### Scenario: Project tile hover

- **GIVEN** the Fstop app is rendered
- **WHEN** the user hovers a project tile
- **THEN** a white circular expand icon SHALL fade in over the tile

### Requirement: Testimony

The system SHALL render the testimony carousel with dark quote cards.

#### Scenario: Testimony renders

- **GIVEN** the Fstop app is rendered
- **WHEN** the Testimony section is displayed
- **THEN** the taupe uppercase subheading "Testimony" and the heading "Our
  satisfied customer says" SHALL render
- **AND** at least one dark card SHALL render with an overlapping circular
  avatar, an italic Noto Serif quote, the white name "Garreth Smith" and a
  taupe position (e.g. "CEO Founder of Commercial Building")
- **AND** a way to advance between the five quote slides SHALL be available

### Requirement: Contact

The system SHALL render the contact section with the four info boxes, the
message form and the map placeholder.

#### Scenario: Contact renders

- **GIVEN** the Fstop app is rendered
- **WHEN** the Contact section is displayed
- **THEN** the heading "Contact Me" SHALL render with an intro paragraph
- **AND** four dark info boxes SHALL render: Address (198 West 21th Street,
  Suite 721 New York NY 10016), Contact Number (+ 1235 2355 98), Email
  Address (info@yoursite.com) and Website (yoursite.com), each with an icon
- **AND** the form SHALL render inputs "Your Name", "Your Email", "Subject",
  a "Message" textarea and a taupe pill "Send Message" submit button
- **AND** a 300px map placeholder SHALL render beside the form

#### Scenario: Form submit

- **GIVEN** the Fstop app is rendered
- **WHEN** the user fills the form and submits it
- **THEN** the page SHALL NOT navigate (no backend) and a client-side success
  message SHALL appear

### Requirement: Footer

The system SHALL render the minimal centered footer with the copyright/credit
row and social icons.

#### Scenario: Footer renders

- **GIVEN** the Fstop app is rendered
- **WHEN** the page is scrolled to the bottom
- **THEN** a centered footer SHALL render with "Copyright © <year> All rights
  reserved" and a credit line linking to `https://www.componentdock.com/`
  ("Component Dock")
- **AND** three round social icons (Twitter, Facebook, Instagram) SHALL
  render

### Requirement: Page composition

The system SHALL compose all sections in the original's order in a single
page.

#### Scenario: Full page render

- **GIVEN** the Fstop app is rendered
- **WHEN** the page loads
- **THEN** the sections SHALL appear in order: dot navigation → hero → about →
  services → selected projects → testimony → contact → footer
- **AND** the document title SHALL be "Fstop — Photography"

## Verification checklist

- [ ] `npm run spec:validate` passes.
- [ ] `npm run verify:app -- fstop` passes: typecheck → lint → vitest
      (100% coverage) → build.
- [ ] Layout matches the original 1:1: fixed right dot nav (active dot
      taupe), full-height dark hero (logo box + 62px headline + outlined
      CTA), about (video thumb + play circle, counter 120, small photo pair,
      italic quote), services (3 cards + 3 taupe circular progress bars),
      12-tile project grid with hover expand icons, testimony carousel (dark
      cards, overlapping circular avatar, italic quote), contact (4 dark
      boxes + form + map placeholder), minimal centered footer with
      Component Dock credit.
- [ ] Design tokens applied: page bg `#191a1c`, body text `#9da1a5` (Noto
      Sans 14px), taupe `#9d8f8f` (dots, subheading, progress bars, primary
      button), dark cards `#202224`, white headings, pill buttons (radius
      30px), outlined hero CTA, small gray uppercase section h2s (16px).
- [ ] Fonts: Noto Sans (400/700) + Noto Serif (400/700) via Google Fonts
      `<link>`; Noto Serif used for italic quotes only.
- [ ] No ColorLib references in any app file; footer links
      `https://www.componentdock.com/`.
- [ ] TEMPLATES.md rows 499, 1168, 2359 and 2473 all marked `[x]` with the
      surge URL after shipping.
- [ ] Picsum seeds screened for suitable subjects (moody hero photo,
      photography project tiles, portrait avatars) and pinned in the spec +
      PR.
