# Template: Vitae (Personal CV / Portfolio Landing)

## Purpose

Vitae is a single-page personal CV/portfolio landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Me" — free Bootstrap 4 personal CV website template
(source: https://colorlib.com/wp/template/me/), built under a DIFFERENT
name per the monorepo naming mandate (never reuse the ColorLib source name),
with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

> NAMING NOTE: the ColorLib source name "Me" is FORBIDDEN as the app name.
> **Vitae** (curriculum vitae — matches the personal-CV theme of the
> template) is the new, original name — single lowercase word, no collision
> with `apps/`, `openspec/specs/`, `docs/templates/` or TEMPLATES.md
> (verified 2026-08-11). Source slug + preview URL are recorded below.

The original is a classic light-and-airy personal portfolio single-pager: a
three-part sticky header (left nav — logo — right nav), a light 100vh hero
("I'm Ben Carson" + green pill CTA + a large portrait photo bleeding off the
right edge), a 2-column "My Services" card grid with green circular icons, a
3-column "About Me" split with a photo in a light box, a 9-image "My
Portfolio" isotope grid (hover zoom + dark overlay + search icon), a DARK
"testimonials" carousel on `#343a40`, a 6-logo "Clients" row, an underline-
style "Contact Form", and a light footer with address, three link lists,
plain social icons and a copyright strip. Vitae recreates that structure
section-for-section with matching layout, colors, typography, and content
types (no ColorLib assets copied).

## Design reference (replication findings)

- **Original:** ColorLib "Me" — free Bootstrap 4 personal CV website
  template (source: https://colorlib.com/wp/template/me/; preview page
  `<title>` reads **"Me — Website Template by Colorlib"**). TEMPLATES.md
  lists it under **Bootstrap (216)** (line 446) with THREE IDENTICAL dup
  rows: **One Page (91)** line 2336, **Personal (53)** line 2405, and
  **Portfolio (89)** line 2526 — all four `- [ ]`, nothing shipped; mark
  ALL FOUR `[x]` when shipped. The recreation brands itself **Vitae**.
- **Live preview DOM analyzed (verified 2026-08-11):**
  `https://preview.colorlib.com/theme/me/` — HTTP 200, 33.2 KB HTML +
  `css/style.css` 19.0 KB + `css/bootstrap.min.css` 121 KB (plus
  jquery-ui, owl.carousel, fancybox, bootstrap-datepicker, flaticon,
  aos, icomoon). Google Fonts via cf-fonts @font-face blocks: **Arbutus
  Slab 400** + **Open Sans 300/400/700** — but Open Sans is NEVER applied
  anywhere (verified via live computed styles: body, h1, p, .btn, nav all
  resolve to **"Arbutus Slab", serif**); load Arbutus Slab 400 only.
  Browser-verified 2026-08-11: light hero with a large portrait photo of a
  smiling man (sports jersey) bleeding off the right edge on the white/light
  `#f8f9fa` background, green pill "Portfolio" button, green "Me." logo
  centered in the nav, white sections alternating with one DARK testimonial
  band, underline-style contact inputs, light footer with plain social icons.
- **Section order (1:1, verified from live DOM):**
  1. **Header** (`header.site-navbar.py-4.js-sticky-header.site-navbar-target`,
     `position: absolute; top: 0; width: 100%; z-index: 1999`) — one row,
     three parts: LEFT `nav.site-navigation` — Home, Services, About; CENTER
     `h1.site-logo` "Me." (link, 1.5rem, color `#207561`); RIGHT nav —
     Portfolio, Client, Contact + a `d-lg-none` hamburger (`icon-menu`).
     Nav links: Arbutus Slab, color `#000`, padding 5px 20px, hover
     `#207561`. Desktop nav hidden below lg (`d-none d-lg-block`). Sticky
     behavior (`.sticky-wrapper.is-sticky .site-navbar`): background `#fff`,
     `box-shadow: 4px 0 20px -5px rgba(0,0,0,0.1)`, logo + links turn `#000`
     (links are `rgba(0,0,0,0.7)` at top), `py-4` shrinks to 10px padding.
     Mobile: `.site-mobile-menu` 300px fixed right panel, white bg, slides
     in (`translateX(0)`) when `.offcanvas-menu`, close X (`icon-close2`,
     30px), links 20px.
  2. **Hero** (`div.site-blocks-cover.overlay.bg-light#home-section`) —
     `min-height: 600px; height: 100vh`, background light `#f8f9fa`;
     `.overlay:before` is `rgba(255,255,255,0)` on desktop and
     `rgba(255,255,255,0.5)` below 992px (z-index 2); `.text-intro` z-index
     2, left `col-lg-6`: `h1` "I'm Ben Carson" (3rem, Arbutus Slab,
     `#000`) + `p.lead` "I'm Web Developer Based on NY City" (1.3rem,
     Arbutus Slab, `#1a1a1a`) + `a.btn.smoothscroll.btn-primary`
     "Portfolio"; `.img-face` (z-index 1): `position: absolute; right: -5%;
bottom: 0; max-width: 950px` (right: -25% below 992px) — portrait
     photo bleeding off the right edge, blending into the light bg.
  3. **Services** (`div.site-section#services-section`) — white; centered
     `h2.section-title.text-center` "My Services"; 4 `.service.d-flex.h-100`
     cards in a 2-col grid (`col-md-6 mb-4`): `.service-number` (flex 0 0
     60px) > `span` 50×50 circle, `border-radius: 50%`, background
     `#207561`, white icomoon icon; `.service-about` h3 1.2rem (UI/UX
     Designer, Web Development, Brand & Logo Design, Web Design) + lorem p.
     Card: white, `padding: 30px`, `box-shadow: 0 1px 2px 0
rgba(0,0,0,0.1)`, `top: 0`; hover: `box-shadow: 0 8px 50px -5px
rgba(0,0,0,0.1)`, `top: -2px`.
  4. **About Me** (`div.site-section#about-section`) — white; LEFT-aligned
     `h2.section-title` "About Me" (underline at left); 3 columns:
     `col-lg-4.order-1.order-lg-2` — `.bg-light.pt-5` box containing the
     portrait `img.img-fluid`; `col-lg-4.order-2.order-lg-1` — 2 lorem
     paragraphs; `col-lg-4.order-3` — 2 paragraphs + `a.btn.smoothscroll
.btn-primary` "Contact Me".
  5. **Portfolio** (`section.site-section.block__62272#portfolio-section`)
     — white; centered `h2.section-title.text-center` "My Portfolio";
     `div#posts.row.no-gutter` — NINE `.item` cells (`col-6 col-sm-6
col-md-6 col-lg-4 col-xl-4 mb-4`) with categories **web** (5), **brand**
     (2), **design** (2): `a.item-wrap.fancybox` > `img.img-fluid`; hover:
     img `scale(1.05)`, `.item-wrap:after` overlay `rgba(0,0,0,0.4)`
     fades in, centered `span.icon-search2` (white, 1.7rem) scales 0→1.
     Radius 4px. **NO filter tab row in the DOM** (`.filters` CSS exists
     in style.css but is unused — do NOT add filter buttons).
  6. **Testimonials** (`section.site-section.bg-dark`) — background
     `#343a40`; centered `h2.section-title.text-center.text-white`
     "testimonials" (lowercase in source; underline `#fff` when centered
     on dark); `.owl-carousel.slide-one-item` with 3 `.slide`s: `blockquote`
     (max-width 700px, italic, white, 1.2rem, centered) + `cite` "— Jean
     Smith" / "— Carl Spencer" / "— Ryan Peters" (1rem,
     `rgba(255,255,255,0.5)`, margin-top 50px); white owl dots 7×7
     (idle `rgba(255,255,255,0.3)`, active `#fff`).
  7. **Clients** (`section.site-section#clients-section`) — white;
     centered `h2.section-title.text-center` "Clients"; SIX logo images in
     a grid (`col-6 col-sm-6 col-md-4 col-lg-4 text-center`,
     `img.img-fluid`).
  8. **Contact** (`section.site-section#contact-section`) — white; centered
     `h2.section-title.text-center.mb-5` "Contact Form"; `form.form` —
     row 1: First name + Last name (`form-group col-6` each), row 2: Email
     address (`col-12`), row 3: "Subject of the message" (`col-12`), row 4:
     textarea 10 rows "Type your message here.." (`col-12`), then
     `input.btn.btn-primary` value "Send Message" (`col-md-6`).
     Underline style: `.form .form-control` — `border: none;
border-radius: 0; border-bottom: 1px solid #eee`; focus `border-color:
#000`.
  9. **Footer** (`footer.site-section.bg-light.footer`) — background
     `#f8f9fa`, font-size .9rem; 4 columns: "Me Address" (footer-title 1.1rem
     mb-30px + "203 Fake St. Mountain View, San Francisco, California, USA");
     middle group (col-md-5 mx-auto → 3 × col-lg-4): "Services",
     "Resources", "Links" — each `ul.list-unstyled` with 3 links (Web App,
     Graphic, Branding); "Follow Me" — FIVE **plain** social icons
     (twitter, facebook, instagram, dribbble, linkedin — class
     `.social-circle` but NO circle styling exists in the CSS; verified
     live: transparent bg, radius 0, `#888888` color); footer links
     `#888888` → hover `#000`; bottom full-width centered copyright strip:
     "Copyright © <year> All rights reserved | This template is made with
     ♥ by Colorlib" (re-branded to Vitae).
- **Visual design (TEMPLATES.md screenshot `me-free-template.jpg`, 1200×946
  AVIF + live render, browser-verified 2026-08-11):** light and airy
  personal portfolio. White/`#f8f9fa` background with generous whitespace;
  large serif (Arbutus Slab) headings in near-black; a muted deep-green
  `#207561` accent used sparingly (logo, pill buttons, active/hover nav,
  service icon circles, section-title underlines); body text dark grey
  `#666666`. Hero = split: serif headline + green pill CTA on the left,
  big portrait photo bleeding off the right edge on the light bg. Services
  and portfolio on white with soft shadows; ONE dark `#343a40` testimonial
  band breaks the rhythm (italic white quotes, white dots); contact inputs
  are underline-only; footer light grey with plain monochrome social icons.
- **Design tokens extracted from the live CSS (`css/style.css` + computed
  styles, verified 2026-08-11):**
  - Brand color: **green `#207561`** — `.btn-primary` bg/border, `.site-logo
a`, nav link hover + dropdown `.active`, `.section-title:after` 2px×50px
    underline, `.service-number span` circle bg, `.form-control` focus
    border, dropdown `border-top`, mobile menu `.active`/hover.
  - Black **`#000`** — h1–h5 color (Arbutus Slab), `.btn-primary:hover` bg
    (button turns BLACK), `.form .form-control` focus border, footer link
    hover, `::selection` bg, `.filters .btn.active` (unused).
  - Text greys: body **`#666666`** (weight 400, line-height 1.7); hero lead
    **`#1a1a1a`**; footer links **`#888888`**; mobile menu links `#212529`;
    sticky-top nav links `rgba(0,0,0,0.7)`.
  - Section backgrounds: light **`#f8f9fa`** (`.bg-light`: hero, about
    image box, footer) ↔ white sections; dark **`#343a40`** (`.bg-dark`:
    testimonials).
  - Buttons (`.btn`): `font-size: 16px`, `border-radius: 30px` (PILL),
    `padding: 10px 30px`, no box-shadow on hover/focus; `.btn-primary`
    `#207561`/white → hover `#000`/white.
  - Form controls (`.form-control`): `height: 43px`, `border-radius: 30px`,
    font-family Arbutus Slab, focus `border-color: #207561`; CONTACT
    variant (`.form .form-control`): borderless with `border-bottom: 1px
solid #eee`, focus `border-color: #000`.
  - Section titles (`.section-title`): `padding-bottom: 20px` + `:after`
    2px underline, `background: #207561`, `width: 50px`; left-aligned by
    default, centered variant centers the underline; on dark sections the
    underline is `#fff`.
  - Section rhythm: `.site-section` `padding: 2.5em 0` (7em ≥768px).
  - Hero: `min-height: 600px` / `100vh`, bg `#f8f9fa`; `h1` 3rem Arbutus
    Slab; `.lead` 1.3rem `#1a1a1a`; `.img-face` absolute right -5% bottom 0,
    `max-width: 950px` (right -25% <992px); overlay white 0 / 0.5 <992px.
  - Service cards: white, padding 30px, shadow `0 1px 2px rgba(0,0,0,0.1)`;
    hover `0 8px 50px -5px rgba(0,0,0,0.1)` + `top: -2px`; icon circle 50×50
    `border-radius: 50%` `#207561` white icon.
  - Portfolio items: radius 4px; hover img `scale(1.05)` + overlay
    `rgba(0,0,0,0.4)` + centered white search icon 1.7rem scale 0→1.
  - Testimonials: blockquote max-width 700px italic white 1.2rem; cite 1rem
    `rgba(255,255,255,0.5)` margin-top 50px; owl dots 7×7 idle
    `rgba(255,255,255,0.3)` active `#fff`.
  - Sticky header (`.is-sticky`): white bg, shadow `4px 0 20px -5px
rgba(0,0,0,0.1)`, links `#000`.
  - Font: **'Arbutus Slab', serif (400 only)** for EVERYTHING (headings,
    body, form controls, nav links, buttons) — verified via live computed
    styles; Open Sans 300/400/700 is loaded but unused. Google Fonts:
    Arbutus Slab 400. NO sans-serif body font.
- **KEY DIFFERENCES vs other prepped personal/portfolio preps — do NOT
  copy:** memoir (Andrea) is a blog/magazine-style personal site; journal
  and newsprint are editorial layouts. Vitae's identity is the LIGHT
  `#f8f9fa`/white personal-CV single-pager with the DEEP-GREEN `#207561`
  accent (pill buttons, circular icon badges, 50px section underlines),
  Arbutus Slab serif everywhere, the big bleed-off-the-right portrait in
  the hero AND in the About light box, the 9-cell isotope portfolio grid
  WITHOUT filter tabs, the single dark testimonial band, underline-only
  contact inputs, and the light footer with plain (uncircled) social
  icons. Verify the memoir/journal specs during implementation and keep
  palettes + structures distinct.
- **Recreation decisions:** Tailwind re-implementation of the Bootstrap
  grid (NO Bootstrap dependency); the "Me." logo becomes a typographic
  "Vitae." in the brand green (Arbutus Slab, 1.5rem) — no image assets
  copied; portrait photos + portfolio images + client logos use seeded
  picsum placeholders (`picsum.photos/seed/vitae-<n>/<w>/<h>`); service
  icons from lucide-react (icon-style → PenTool or Sparkles,
  icon-business_center → Briefcase, icon-desktop_windows → Monitor,
  icon-layers → Layers) — keep the 50px `#207561` circle badge; portfolio
  hover search icon → lucide `Search`; brand social icons (twitter/
  facebook/instagram/dribbble/linkedin) as INLINE SVG simple-icons paths
  (lucide-react removed brand icons) — PLAIN icons, no circles; the
  testimonial carousel renders all 3 slides in a row (or a lightweight
  auto-rotating carousel — no owl.carousel dependency); the isotope
  filtering/order is static (no filter buttons in the source — do NOT add
  them); single-page landing only — nav links (Home/Services/About/
  Portfolio/Client/Contact) are anchor links to section ids (smooth
  scroll), never extra pages; the contact form validates (first name,
  last name, valid email, subject, message) and shows a success message
  — the original demo is static, so minimal interactive behavior is a
  documented recreation choice kept in a pure exported function for
  100%-coverage tests; sticky header via scroll listener toggling the
  `is-sticky` white bg + shadow + shrink. Document title "Vitae — Personal
  CV Template"; brand "Me"/"Colorlib" → "Vitae" everywhere. Arbutus Slab
  400 via Google Fonts `<link>` in `index.html`.

Vitae lives in `apps/vitae` and uses shared components from `packages/ui`
(Button, ButtonLink, Card, cn).

## Requirements

### Requirement: Three-part sticky header with center logo

The system SHALL render an absolute-positioned header row with a left nav
(Home, Services, About), a centered green "Vitae." logo, and a right nav
(Portfolio, Client, Contact), with a mobile hamburger below lg; on scroll
the header SHALL become sticky with a white background, soft shadow and
black links, and on mobile a slide-in white panel SHALL show the nav links.

#### Scenario: Header at top of page

- **GIVEN** the Vitae page is rendered at the top of the page
- **WHEN** the page loads
- **THEN** an absolute header SHALL span the full width at the top
- **AND** the left nav SHALL show links Home, Services, About
- **AND** the center SHALL show the "Vitae." logo in brand green
  `#207561`
- **AND** the right nav SHALL show links Portfolio, Client, Contact
- **AND** hovering any nav link SHALL color it `#207561`

#### Scenario: Sticky state after scrolling

- **GIVEN** the Vitae page is rendered
- **WHEN** the user scrolls down the page
- **THEN** the header SHALL switch to a white background with a
  `4px 0 20px -5px rgba(0,0,0,0.1)` shadow
- **AND** the logo and nav links SHALL render in black

#### Scenario: Mobile menu

- **GIVEN** the Vitae page is rendered on a viewport narrower than lg
- **WHEN** the user opens the hamburger menu
- **THEN** a white 300px panel SHALL slide in from the right listing the
  nav links
- **AND** a close button SHALL dismiss it

### Requirement: Light hero with portrait and green CTA

The system SHALL render a 100vh hero on a light `#f8f9fa` background with a
left text column ("I'm Ben Carson" 3rem headline, "I'm Web Developer Based
on NY City" lead, green pill "Portfolio" button) and a large portrait photo
bleeding off the right edge.

#### Scenario: Hero content

- **GIVEN** the Vitae page is rendered
- **WHEN** the hero section is displayed
- **THEN** the hero SHALL be at least 600px tall (100vh) on a `#f8f9fa`
  background
- **AND** the headline "I'm Ben Carson" SHALL render at 3rem in Arbutus
  Slab black
- **AND** the lead "I'm Web Developer Based on NY City" SHALL render at
  1.3rem in `#1a1a1a`
- **AND** a pill-shaped green `#207561` "Portfolio" button SHALL appear
  below the lead
- **AND** a portrait photo SHALL be absolutely positioned at the bottom
  right (right: -5%, max-width 950px), bleeding off the right edge
- **AND** hovering the button SHALL turn its background black

### Requirement: My Services card grid

The system SHALL render a white section titled "My Services" with a
2-column grid of four service cards, each with a 50px green circular icon
badge, a 1.2rem heading and a paragraph, and a hover lift with a deeper
shadow.

#### Scenario: Service cards

- **GIVEN** the Vitae page is rendered
- **WHEN** the services section is displayed
- **THEN** a centered "My Services" section title with a 50px green
  underline SHALL be shown
- **AND** four service cards SHALL be shown in a 2-column grid (UI/UX
  Designer, Web Development, Brand & Logo Design, Web Design)
- **AND** each card SHALL show a 50×50 circular icon badge with
  background `#207561` and a white icon
- **AND** each card SHALL show a 1.2rem heading and a paragraph
- **AND** hovering a card SHALL lift it 2px and deepen its shadow to
  `0 8px 50px -5px rgba(0,0,0,0.1)`

### Requirement: About Me split

The system SHALL render a white "About Me" section with a left-aligned
section title, a light-boxed portrait photo column, two text columns and a
green pill "Contact Me" button.

#### Scenario: About layout

- **GIVEN** the Vitae page is rendered
- **WHEN** the about section is displayed
- **THEN** a left-aligned "About Me" section title with a 50px green
  underline SHALL be shown
- **AND** a portrait photo in a `#f8f9fa` padded box SHALL be shown on
  the right column (reordering to first on mobile)
- **AND** two text columns SHALL contain paragraphs
- **AND** a green pill "Contact Me" button SHALL be shown in the third
  column linking to the contact section

### Requirement: My Portfolio image grid

The system SHALL render a white "My Portfolio" section with a centered
title and a grid of nine portfolio images whose categories are web, brand
and design; hovering an image SHALL zoom it to 1.05, fade in a
`rgba(0,0,0,0.4)` overlay and scale in a centered white search icon.

#### Scenario: Portfolio grid and hover

- **GIVEN** the Vitae page is rendered
- **WHEN** the portfolio section is displayed
- **THEN** a centered "My Portfolio" section title SHALL be shown
- **AND** nine portfolio images SHALL be shown in a responsive grid
  (6/4/3/3 columns by breakpoint)
- **AND** NO filter tab row SHALL be present (the source has none)
- **WHEN** the user hovers an image
- **THEN** the image SHALL scale to 1.05
- **AND** a `rgba(0,0,0,0.4)` overlay SHALL fade in
- **AND** a centered white search icon SHALL scale in

### Requirement: Dark testimonials carousel

The system SHALL render a `#343a40` dark section titled "testimonials"
with a carousel of three slides, each showing an italic white quote and a
semi-transparent attribution, with white carousel dots.

#### Scenario: Testimonial slides

- **GIVEN** the Vitae page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** the section SHALL have a `#343a40` background
- **AND** a centered white "testimonials" title with a white underline
  SHALL be shown
- **AND** three slides SHALL be shown, each with an italic white quote
  (max-width 700px) and an attribution such as "— Jean Smith" in
  `rgba(255,255,255,0.5)`
- **AND** white carousel dots SHALL be shown (idle
  `rgba(255,255,255,0.3)`, active `#fff`)

### Requirement: Clients logo row

The system SHALL render a white "Clients" section with a centered title
and a responsive grid of six client logo images.

#### Scenario: Client logos

- **GIVEN** the Vitae page is rendered
- **WHEN** the clients section is displayed
- **THEN** a centered "Clients" section title SHALL be shown
- **AND** six client logo images SHALL be shown in a grid (2/2/3/3
  columns by breakpoint), each centered

### Requirement: Underline-style contact form

The system SHALL render a white "Contact Form" section with underline-only
inputs (First name, Last name, Email address, Subject of the message,
message textarea) and a green pill "Send Message" submit button; the form
SHALL validate and show a success state on valid submit.

#### Scenario: Contact form fields

- **GIVEN** the Vitae page is rendered
- **WHEN** the contact section is displayed
- **THEN** a centered "Contact Form" section title SHALL be shown
- **AND** fields SHALL appear in order: First name + Last name (side by
  side), Email address, Subject of the message, message textarea (10 rows)
- **AND** every field SHALL be borderless with a `1px solid #eee` bottom
  border, turning `#000` on focus
- **AND** a green pill "Send Message" submit button SHALL be shown

#### Scenario: Contact submit

- **GIVEN** the contact form is displayed
- **WHEN** the user submits with a first name, last name, valid email,
  subject and message
- **THEN** the form SHALL show a success message
- **AND** submitting with missing or invalid fields SHALL show validation
  messages and no success message

### Requirement: Light footer with link lists and social icons

The system SHALL render a `#f8f9fa` footer with an address column, three
mini link lists (Services, Resources, Links), a "Follow Me" column with
five PLAIN social icons (no circles), and a centered copyright strip
re-branded to Vitae.

#### Scenario: Footer layout

- **GIVEN** the Vitae page is rendered
- **WHEN** the footer is displayed
- **THEN** the footer SHALL have a `#f8f9fa` background
- **AND** a "Me Address" column SHALL show the address text (re-branded)
- **AND** "Services", "Resources" and "Links" columns SHALL each list
  three links
- **AND** a "Follow Me" column SHALL show five plain social icons
  (Twitter, Facebook, Instagram, Dribbble, LinkedIn) in `#888888` with NO
  circle/box styling
- **AND** the bottom strip SHALL show a centered copyright line
  re-branded to Vitae

### Requirement: Mobile stacking

The system SHALL collapse the multi-column layouts (hero text, services
grid, about columns, portfolio grid, clients grid, footer columns) to
fewer/single columns on small screens, matching the source's Bootstrap
`col-*` behavior, with the hero portrait shifted further off-canvas
(right: -25%).

#### Scenario: Single column below 768px

- **GIVEN** the Vitae page is rendered on a viewport narrower than 768px
- **WHEN** the page is displayed
- **THEN** the hero text and portrait SHALL stack (portrait at
  right: -25%)
- **AND** the services grid SHALL collapse to one column
- **AND** the about photo column SHALL move above the text columns
- **AND** the portfolio and clients grids SHALL show fewer columns
- **AND** the footer columns SHALL stack vertically

## Verification checklist

- [ ] `npm run spec:validate` passes for `template-vitae`
- [ ] `scripts/verify-app.sh vitae` passes (typecheck + lint + vitest
      100% coverage + build)
- [ ] Sections in order (1:1 with source): three-part sticky header (left
      nav Home/Services/About, center green "Vitae." logo, right nav
      Portfolio/Client/Contact; sticky → white bg + shadow + black links;
      mobile slide-in panel) → 100vh light `#f8f9fa` hero ("I'm Ben Carson"
      3rem + lead `#1a1a1a` + green pill "Portfolio" button → hover black;
      portrait right -5% bottom 0 max-w 950px) → white "My Services"
      (centered title + 2-col grid of 4 cards: 50px green circle icon +
      1.2rem heading + paragraph; hover lift + deep shadow) → white "About
      Me" (left title + light-boxed portrait + 2 text cols + "Contact Me"
      pill) → white "My Portfolio" (centered title + 9-image grid, NO
      filter tabs; hover scale 1.05 + `rgba(0,0,0,0.4)` overlay + search
      icon) → dark `#343a40` "testimonials" (3 slides: italic white quote +
      `rgba(255,255,255,0.5)` cite + white dots) → white "Clients"
      (centered title + 6 logo images) → white "Contact Form" (underline
      inputs First/Last/Email/Subject/Message + green pill "Send Message")
      → `#f8f9fa` footer (address + Services/Resources/Links lists +
      "Follow Me" 5 PLAIN social icons + centered copyright strip)
- [ ] Brand color `#207561` (green) in `@theme` and used via Tailwind
      classes (logo, pill buttons, nav hover, icon circles, section-title
      underlines)
- [ ] Text `#000` (headings, button hover bg, footer link hover); body
      `#666666`; lead `#1a1a1a`; footer links `#888888`; light bg `#f8f9fa`;
      dark bg `#343a40`
- [ ] Arbutus Slab 400 via Google Fonts `<link>` in `index.html` — NO
      sans-serif body font (Open Sans is loaded but unused in the source)
- [ ] Buttons: pill `border-radius: 30px`, 16px, padding 10px 30px; green
      `#207561` → hover `#000`
- [ ] Section titles: 2px × 50px underline, `#207561` (white on dark);
      `.site-section` rhythm 2.5em / 7em padding
- [ ] Contact inputs underline-only: border-bottom `1px solid #eee`,
      focus `#000`; portfolio hover overlay `rgba(0,0,0,0.4)` + white
      search icon scale-in
- [ ] Placeholder images via `picsum.photos/seed/vitae-<n>/<w>/<h>`,
      icons from lucide-react (service icons, Search, Menu/X; brand
      social icons as inline SVG — lucide has no brand icons), no copied
      assets
- [ ] No extra pages — nav links are smooth-scroll anchors to section ids
- [ ] "Send Message" validates (first name, last name, valid email,
      subject, message) and shows success / validation messages (pure
      exported function for tests)
- [ ] Apps MUST import Button/ButtonLink/cn from `packages/ui` (knip gate)
- [ ] TEMPLATES.md: mark ALL FOUR dup rows `[x]` (Bootstrap line 446,
      One Page line 2336, Personal line 2405, Portfolio line 2526) + surge
      URL + `npm run readme:status` done by implementer at ship time
