# Template: Thrust (Startup / Agency — Bootstrap)

## Purpose

Thrust is a single-page startup/creative-agency website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Startup" website template design (see TEMPLATES.md, Bootstrap
category, line 503 — duplicate rows at lines 2089 and 2861, same template,
one app only), built under a different name with the monorepo stack:
Vite + React 19 + Tailwind CSS 4 + TypeScript (strict). No ColorLib
references in app code — provenance lives in this spec, TEMPLATES.md, and the
PR.

## Design reference (replication findings)

- **Original:** ColorLib "StartUp" — free startup / digital-agency website
  HTML template (page title "StartUp"; source:
  https://colorlib.com/wp/template/startup-2/). Single page: transparent
  header over a full-screen dark hero, services, dark about band, portfolio
  grid, how-we-work split, team, photo-background testimonial carousel,
  contact form, dark footer.
- **Live preview REACHABLE (HTTP 200):**
  `https://preview.colorlib.com/theme/startup-2/` returns HTTP 404, but the
  slug without the hyphen works — `https://preview.colorlib.com/theme/startup2/`
  returns HTTP 200. Fetched (`/tmp/startup2.html`, 32,498 bytes) plus the main
  stylesheet `css/style.css` (`/tmp/startup2.css`, 144,147 bytes) and analyzed
  for structure + tokens. Screenshot `startup2-free-template.jpg` (1200×946,
  TEMPLATES.md) viewed in the browser and cross-verified with the live DOM:
  dark workspace-photo hero with rocket-logo wordmark "Startup", white nav,
  "Say Hello" CTA, 78px white headline, violet pill "Visit Our Works" button,
  then a white services block ("Services" eyebrow + 3 icon cards). Both
  sources agree on section order and palette.
- **Visual design (screenshot + live DOM + browser):** dark/light alternation.
  Hero is a full-width 900px-tall dark workspace photo (monitor with wavy
  orange/yellow lines, purple desk lamp, smartphone) under a `#1F1F1F` overlay
  at 0.8 opacity, with left-aligned white 78px Roboto headline and a violet
  pill CTA. Below: white services section, then a dark `#1F1F1F` about band
  with a left-half photo (person typing on laptop), a white portfolio grid
  (1 large + 4 small tiles), a split how-we-work (left text + right rounded
  photo of a person in a VR headset), a 4-column team row, a photo-background
  testimonial (brick wall + blue sofa) with dark overlay, a light contact
  form, and a dark footer. Signature accent: periwinkle violet `#615CFD`
  (buttons, eyebrows, play button, social circles, service-card hover border,
  "Say Hello" underline).

## Design tokens (from `css/style.css` of the live preview)

- **Brand violet (primary):** `#615CFD` — `.boxed-btn3` (pill buttons: hero
  "Visit Our Works", about "About Us", portfolio "View", contact submit),
  `.boxed-btn` border + hover bg, `.section_title span` eyebrow color, play
  button circle, `.say_hi:before` 3px underline, team-hover social circles,
  service-card hover border, footer social hover bg. Hover state of pills:
  transparent bg + violet border + violet text.
- **Dark ink:** `#1F1F1F` — about band bg, footer bg, sticky header bg,
  slider overlay (`opacity: .8` via `.overlay::before`), testimonial overlay
  (`opacity: .6`), headings (`#1F1F1F` 40px section h3).
- **Light neutrals:** `#fff` page bg; `#E8E8E8` service-card borders (2px);
  `#C9C9C9` form input borders + about mid/last text; `#727272` section
  intro paragraphs + service card paragraphs; `#707070` team roles + form
  placeholders; `#999999` / `#888888` muted text.
- **Footer dividers:** `#363636` (copyright top border), `#E7F9F9` (footer
  social circle borders).
- **Fonts:** headings `h1`–`h6` → `"Roboto", sans-serif`; body `p` → `"Muli",
sans-serif` (Google Fonts import in style.css: Muli 200–800 + Roboto). Nav
  links + buttons use Muli; slider h3, team names, section titles use Roboto.
  Load both via Google Fonts `<link>` in `index.html`.
- **Buttons (`.boxed-btn3` pill):** bg `#615CFD`, white text, `padding: 12px
33px`, Muli 16px weight 500, `border-radius: 30px`, `text-transform:
capitalize`, transition 0.5s. Hover: transparent bg, 1px violet border,
  violet text.
- **Header:** absolute over hero, transparent; nav links white 16px Muli 600
  capitalize, `padding: 40px 0`; "Say Hello" white 16px 600 Muli with a 3px
  violet bottom underline (`::before`). Sticky state (on scroll): `.sticky`
  class → `position: fixed`, bg `#1F1F1F`, shadow `0 3px 16px rgba(0,0,0,.1)`,
  slide-down transition. Mobile: slicknav full-width dark panel.
- **Hero (`.slider_area .single_slider`):** height 900px (500px mobile),
  cover background image, dark overlay; `.slider_text h3` 78px white Roboto
  weight 400, line-height 84px, margin-bottom 54px (50px/62px at 992px,
  30px/35px at 767px); left-aligned in a `col-lg-10`.
- **Section titles (`.section_title`):** eyebrow `span` 14px weight 500
  `#615CFD` capitalize, block, margin-bottom 19px; `h3` 40px (30px mobile)
  weight 400 `#1F1F1F`; intro `p` 16px `#727272` line-height 28px. Dark
  variant `.white_text`: h3 + span white.
- **Service cards (`.single_service`):** centered, `padding: 48px 35px`,
  `border: 2px solid #E8E8E8`, `border-radius: 5px`; inline SVG icon
  (purple-outline line art), `h3` 24px `#1F1F1F`, `p` 16px `#727272`
  line-height 30px. Hover: border → 2px `#615CFD`.
- **About band:** bg `#1F1F1F`; left 50% = cover photo (`::before`), right =
  `col-lg-5 offset-lg-1` white-text block (eyebrow "About Us", h3 "Empowering
  individuals", `mid_text` 16px `#C9C9C9`, `last_text` 18px `#C9C9C9`,
  violet pill "About Us").
- **Portfolio (`.single_Portfolio`):** grid `col-lg-8` (first tile) + 4×
  `col-lg-4`; tile = cover image, `border-radius: 5px`, overflow hidden.
  Hover reveals a white panel (`background: #fff`, scale 0.9 → 1) with a 14px
  `#615CFD` category span, 24px bold `#1F1F1F` title, and a violet "View"
  pill.
- **How we work:** left `col-lg-5` section title ("How we work") + two
  paragraphs + play row: 60px violet circle (`border-radius: 50%`, white
  play icon) + "Watch Video" span 20px `#1F1F1F` Roboto, margin-left 20px;
  right 50% = cover photo with `border-radius: 20px 0 0 20px` (`::before`).
- **Team:** 4 × `col-lg-3` cards: square photo (radius 0), hover overlay with
  three 40px violet circles (facebook/twitter/instagram icons, 1px violet
  border, white glyphs) sliding up from the bottom (`translateY(10%)` →
  `translateY(0)`, opacity 0 → 1); below: `team_title` h3 20px Roboto
  `#1F1F1F` + role p 16px Muli `#707070`.
- **Testimonials (`.testimonial_area`):** full-width cover photo (brick wall
  - blue sofa) + `#1F1F1F` overlay 0.6, padding 160px 0; centered carousel
    (owl) of 3 slides: quote `p` 24px white line-height 32px, then author:
    42px round photo, name h3 16px white Roboto, role span 14px white.
- **Contact (`.get_in_tauch_area`):** padding 146px/160px; centered title
  "Get in Touch" + intro; `touch_form` in `col-lg-8`: row of `col-md-6`
  inputs (Your Name, Email) + full-width Subject input + Message textarea +
  full-width submit. Inputs/textarea: `width: 100%`, `height: 50px`,
  `border: 1px solid #C9C9C9`, `border-radius: 30px`, padding `20px 16px`,
  Roboto 14px, placeholder `#707070`. Submit = `.boxed-btn3` pill, `width:
100%`, "Send Message".
- **Footer:** `footer_top` bg `#1F1F1F`, padding 100px/160px: left logo,
  center inline links (About, Services, Portfolio, Pages, Blog, Contact —
  `display: inline-block`, margin-right 46px), right social circles (40px,
  `border: 1px solid #E7F9F9`, white glyphs; hover bg + border `#615CFD`).
  Copyright bar: bg `#1F1F1F`, `border-top: 1px solid #363636`, 15px
  `#C9C9C9` — MUST link https://www.componentdock.com/ ("Component Dock"),
  replacing the source's "This template is made with ♥ by ColorLib" credit.

## Requirements

### Requirement: Header and navbar

The system SHALL render a full-width header absolutely positioned over the
hero (transparent over the dark hero): the brand wordmark "Thrust" (white,
with a rocket glyph) on the left and nav links Home, Services, Portfolio,
Pages, Blog, Contact on the right (white, Muli 600, capitalize), plus a "Say
Hello" CTA link on the far right with a 3px brand-violet underline. On
scroll the header SHALL become fixed with a dark `#1F1F1F` background and a
soft shadow. On mobile the nav SHALL collapse to a hamburger that opens a
full-width dark panel.

#### Scenario: Navbar content

- **GIVEN** the page is rendered
- **WHEN** the header is inspected
- **THEN** it shows the brand wordmark "Thrust" and the nav links
  Home/Services/Portfolio/Pages/Blog/Contact plus a "Say Hello" link with a
  violet underline

#### Scenario: Sticky header

- **GIVEN** the page is scrolled down
- **WHEN** the header passes the top of the viewport
- **THEN** the header becomes fixed with a dark `#1F1F1F` background and a
  shadow, keeping white nav links

#### Scenario: Mobile menu

- **GIVEN** a viewport below the desktop breakpoint
- **WHEN** the nav is collapsed
- **THEN** a mobile menu toggle is shown, and activating it expands the nav
  links on a full-width dark panel

### Requirement: Hero section

The system SHALL render a full-width 900px-tall hero with a dark cover
background image (placeholder — the source uses a workspace photo with a
`#1F1F1F` overlay at 0.8 opacity; use a dark picsum image + overlay) and
left-aligned content in a 10/12 column: an `h1`-equivalent headline "Startup
you can build a website online using the Bootstrap builder."-style copy
(78px, white, Roboto, weight 400 — paraphrase the copy but keep the same
kind: startup pitch headline) and a violet pill "Visit Our Works" button
(`#615CFD` bg, white text, radius 30px, capitalize; hover inverts to
transparent/violet).

#### Scenario: Hero content

- **GIVEN** the hero section is rendered
- **WHEN** it is inspected
- **THEN** it shows the headline, a supporting CTA pill button reading
  "Visit Our Works" in brand violet with white text on the dark background

### Requirement: Services

The system SHALL render a white section with the eyebrow "Services", heading
"With more than 20 years of experience we can deliver the best product
design.", and an intro paragraph, followed by a 3-column grid of service
cards (Graphic design, Web design, Mobile app). Each card SHALL have a
purple-outline line icon, a 24px `#1F1F1F` heading, and a muted paragraph,
with a 2px `#E8E8E8` border and 5px radius. On hover the card border SHALL
turn brand violet.

#### Scenario: Service cards

- **GIVEN** the services section is rendered
- **WHEN** it is inspected
- **THEN** it shows the eyebrow "Services" and three cards titled "Graphic
  design", "Web design", "Mobile app", each with a violet-outline icon,
  heading, and muted paragraph, in a 3-column grid

#### Scenario: Service card hover

- **GIVEN** a service card is rendered
- **WHEN** the pointer hovers over it
- **THEN** the card border becomes brand violet

### Requirement: About band

The system SHALL render a dark `#1F1F1F` full-width band with a cover photo
on the left half (placeholder) and a right-aligned text column: white
eyebrow "About Us", white 40px heading "Empowering individuals", two muted
`#C9C9C9` paragraphs, and a violet pill "About Us" button.

#### Scenario: About content

- **GIVEN** the about band is rendered
- **WHEN** it is inspected
- **THEN** it shows the eyebrow "About Us", the heading "Empowering
  individuals", two paragraphs, and an "About Us" pill button in brand
  violet on the dark background, with the photo on the left half

### Requirement: Portfolio grid

The system SHALL render a section with the centered heading "Featured Works"
and an intro paragraph, followed by a responsive portfolio grid (1 large
tile `col-lg-8` + 4 small tiles `col-lg-4`). Each tile SHALL have a cover
image; on hover a white panel SHALL reveal (scale 0.9 → 1) containing a 14px
brand-violet category span, a 24px bold title, and a violet "View" pill
button. Use placeholder images and paraphrase titles (source repeats "App
Design" / "Colorlib Mobile App" on all five tiles).

#### Scenario: Portfolio tiles

- **GIVEN** the portfolio section is rendered
- **WHEN** it is inspected
- **THEN** it shows five portfolio tiles (one large, four small), each with
  an image and a hover panel with category, title, and a "View" button

#### Scenario: Portfolio hover

- **GIVEN** a portfolio tile is rendered
- **WHEN** the pointer hovers over it
- **THEN** a white panel scales in showing the category span, the title, and
  the "View" pill button

### Requirement: How we work

The system SHALL render a split section: left column with the heading "How
we work", two paragraphs, and a play row (60px violet circle with a white
play icon + "Watch Video" label), and the right half a cover photo rounded
on its left edge (border-radius 20px 0 0 20px). The play control SHALL be a
link with `aria-label` (the source links to a YouTube video; use a
placeholder `#` link).

#### Scenario: How we work content

- **GIVEN** the how-we-work section is rendered
- **WHEN** it is inspected
- **THEN** it shows the heading "How we work", two paragraphs, a violet play
  button with "Watch Video", and the rounded photo on the right

### Requirement: Team

The system SHALL render a section with the heading "Our Creative Team" and
an intro paragraph, followed by a 4-column grid of team cards. Each card
SHALL have a square photo; on hover three 40px violet social circles
(facebook/twitter/instagram icons) SHALL slide up over the photo. Below the
photo: a 20px name (Brandon Yeald — Founder & CEO, Calvin Anderson —
Graphics Designer, Roman Solo — Wordpress Developer, Yeald Kin — Software
Engineer) and a muted role line.

#### Scenario: Team cards

- **GIVEN** the team section is rendered
- **WHEN** it is inspected
- **THEN** it shows four team cards, each with a photo, name, and role, in a
  4-column grid

#### Scenario: Team card hover

- **GIVEN** a team card is rendered
- **WHEN** the pointer hovers over the photo
- **THEN** three violet social icon circles appear over the photo

### Requirement: Testimonials

The system SHALL render a full-width section with a cover background photo
and a dark overlay, containing a centered carousel of three quote slides.
Each slide SHALL show a quote paragraph (white, 24px), a 42px round author
photo, the author name "Robert Thomson", and the role "Business Owner".

#### Scenario: Testimonial slides

- **GIVEN** the testimonial section is rendered
- **WHEN** it is inspected
- **THEN** it shows three quote slides, each with a quote, a round author
  photo, the name "Robert Thomson", and the role "Business Owner", on a dark
  photo background

#### Scenario: Testimonial navigation

- **GIVEN** the testimonial carousel is rendered
- **WHEN** the next/prev control is activated
- **THEN** the visible slide changes to the next/previous quote

### Requirement: Contact form

The system SHALL render a light section with the centered heading "Get in
Touch" and an intro paragraph, followed by a centered form (`col-lg-8`):
Your Name + Email in a two-column row, a full-width Subject input, a
full-width Message textarea, and a full-width "Send Message" submit button
(violet pill). Inputs SHALL be 50px tall, radius 30px, with a 1px `#C9C9C9`
border and `#707070` placeholders.

#### Scenario: Contact form fields

- **GIVEN** the contact section is rendered
- **WHEN** the form is inspected
- **THEN** it shows Your Name, Email, Subject, and Message inputs plus a
  full-width "Send Message" pill button in brand violet

#### Scenario: Required-field validation

- **GIVEN** the contact form is rendered
- **WHEN** the submit button is activated with empty fields
- **THEN** the form blocks submission and shows per-field validation errors

### Requirement: Footer

The system SHALL render a dark `#1F1F1F` footer: the "Thrust" logo on the
left, inline links About, Services, Portfolio, Pages, Blog, Contact in the
center, and three circular social icon links on the right (40px, `#E7F9F9`
border; hover turns violet). The copyright bar (top border `#363636`) SHALL
read "Copyright © <year> All rights reserved | Made with ♥ by Component
Dock" and the "Component Dock" text MUST link
https://www.componentdock.com/ (replacing the source's Colorlib credit).

#### Scenario: Footer columns

- **GIVEN** the footer is rendered
- **WHEN** it is inspected
- **THEN** it shows the logo, the six inline links, and three circular
  social links, and the copyright bar contains a link to
  https://www.componentdock.com/

## Verification checklist

- [ ] `openspec/specs/template-thrust/spec.md` validated (`npm run spec:validate`)
- [ ] App folder `apps/thrust`, package `@free-react-templates/thrust`, no
      ColorLib references in app code (grep for colorlib/Startup in apps/thrust)
- [ ] Footer links https://www.componentdock.com/
- [ ] Tests first, 100% coverage (Vitest + RTL) — `bash scripts/verify-app.sh thrust`
- [ ] Section order matches the source: header → hero → services → about →
      portfolio → how we work → team → testimonials → contact → footer
- [ ] Tokens in `src/index.css` `@theme`: `--color-brand: #615CFD`,
      `--color-ink: #1F1F1F`, muted grays `#727272`/`#707070`/`#C9C9C9`;
      Roboto + Muli Google Fonts links in `index.html`
- [ ] Pill buttons: `#615CFD` bg, white text, radius 30px, capitalize, hover
      inverts to transparent/violet; inputs 50px radius 30px border `#C9C9C9`
- [ ] Dark bands use `#1F1F1F` (about, footer, sticky header, overlays at
      0.8 hero / 0.6 testimonial)
- [ ] Placeholder images via `https://picsum.photos/seed/thrust-<n>/<w>/<h>`;
      icons from `lucide-react`
- [ ] PR description: source template, preview URL, design tokens, diffs
      (name, placeholder images, no YouTube video link)
