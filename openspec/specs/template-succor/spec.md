# Template: Succor (Charity / Nonprofit Landing)

## Purpose

Succor is a single-page charity/nonprofit landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Aid" design (see TEMPLATES.md, Bootstrap (216) category),
built under the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

The original is a bold, emotional nonprofit landing page: a transparent
navbar floating over a full-bleed black-and-white photo hero ("We can help
to save the world" + "How Can I Help" button + a vertical "Play video"
link), a volunteer/donation split section (photo panel with "We need
volunteers in Africa" + a black "Donation so far $380,000" animated counter
panel), a light 4-column services band, a circular-avatar causes carousel
("Let's build the world without child abuse and neglect"), a purple
"Success Stories" testimonial section, and a dark 4-widget footer. Succor
recreates that structure section-for-section with matching layout, colors,
typography, and content types (no ColorLib assets copied).

> NAMING NOTE: the ColorLib source name "Aid" is FORBIDDEN as the app name.
> **Succor** (help or relief given in time of need — the charity theme) is
> the new, original name — single lowercase word, no collision with
> `apps/`, `openspec/specs/`, `docs/templates/` or TEMPLATES.md (verified
> 2026-08-09). Source slug + preview URL are recorded below.

## Design reference (replication findings)

- **Original:** ColorLib "Aid" — free Bootstrap 4 charity website template
  (source: https://colorlib.com/wp/template/aid/; page title "Aid - Free
  Bootstrap 4 Template by Colorlib"). TEMPLATES.md lists it under
  **Bootstrap (216)** (line 329). The recreation brands itself **Succor**.
- **Live preview DOM analyzed (verified 2026-08-09):**
  `https://preview.colorlib.com/theme/aid/` — HTTP 200, 27.5 KB HTML +
  `css/style.css` 69.5 KB (Bootstrap 4 + owl.carousel + magnific-popup +
  AOS + flaticon/icomoon icon fonts + Nunito Sans). URL confirmed via
  `preview.colorlib.com/assets/js/products.js` (`["aid","Aid","Business",...]`
  → `U[1] + 'aid/'`). Screenshot `aid-free-template.jpg` (1200×946,
  browser-verified 2026-08-09) matches the live render 1:1: monochrome
  photo hero with white uppercase headline, black CTA button, vertical
  "PLAY VIDEO" text on the left; below the fold a smiling volunteer photo +
  black "Donation so far $380,000" panel.
- **Section order (1:1, verified from live DOM):**
  1. **Navbar** (`nav.navbar.ftco_navbar.bg-dark.ftco-navbar-light`,
     absolute over hero, top 20px, transparent, z-index 3): brand
     `Aid<span>.</span>` (white text + `#ffb400` dot; mobile: solid black
     bg, static) + hamburger (`.navbar-toggler` "Menu", `oi oi-menu` icon,
     `aria-label="Toggle navigation"`) + `.navbar-nav.ml-auto` links:
     Home (active) · Who we are · Causes · Stories · Contact — 18px w700
     white, hover `#ffb400`, padding 1.8rem 20px.
  2. **Hero** (`div.hero-wrap`, `background-image: url('images/bg_1.jpg')`,
     height 800px, cover, top center, `data-stellar-background-ratio="0.5"`):
     `.overlay` (white, opacity .1) → `.container` → `.row.no-gutters.
slider-text.align-items-center.justify-content-end`: left col
     `.play-video` (vertical-lr text rotated 180°, uppercase 16px ls 2px
     "Play video" + black 3px-radius play icon box, link to Vimeo modal)
     and right col (`.col-md-6.order-md-last`): `<h1 class="mb-4">` "We can
     help to save the world" (54px w900 white uppercase ls 5px) + `<p>` CTA
     `a.btn.btn-black.py-3.px-4` "How Can I Help".
  3. **Volunteer / donation split** (`section.ftco-section.ftco-no-pt.
ftco-no-pb.ftco-volunteer`): `.row` — left `.col-md-7.img-volunteer`
     (bg image `images/about.jpg`, `margin-top: -70px` desktop, overlap
     hero) with an inner `.col-lg-7` white text block on the photo
     (`.text.py-5.pl-md-4.pr-md-3`): `<h2 class="mb-4">` "We need volunteers
     in Africa" (50px w900 black) + paragraph (lorem) + `a.btn.btn-primary
.py-3.px-4` "Join now" (`#ffb400` bg); right `.col-md-5.bg-black`
     (`#1e1e1e`, `d-flex align-items-center`) `.about-text.py-5.pl-md-5`:
     `<h2>` "Donation so far <span>$</span><strong class="number"
     data-number="380000">0</strong>" — animated counter 0→380,000
     (`jquery.animateNumber`; span/strong `rgba(255,255,255,0.2)`) +
     paragraph + `a.btn.btn-black.py-3.px-4` "Donate now".
  4. **Services band** (`section.services-section.py-5.py-md-0.bg-light`,
     Bootstrap `#f8f9fa`): `.row.no-gutters` of 4 `.col-md-6.col-lg-3` cards
     (`.media.block-6.services.d-block`, padding 40px 25px; 3rd card
     `.active` → bg `#ffb400` on desktop): 60px icon
     (`flaticon-charity`, `flaticon-adoption`, `flaticon-volunteer`,
     `flaticon-open-book`; color `rgba(0,0,0,0.2)`) + `<h3 class="heading
mb-3">` (22px w900) + `<p>`. Cards: **Help & Support** (text is the
     203 Fake St. address) · **Adoption** · **Volunteering** (active) ·
     **Education** (last two share the "A small river named Duden…" lorem).
  5. **Causes** (`section.ftco-section.ftco-causes`, padding 7em 0):
     centered heading block (`.heading-section.text-center`): `<h2
class="mb-4">` "Let's build the world without child abuse and neglect"
     (50px w900) + paragraph; then `.carousel-causes.owl-carousel` of 5
     `.item` → `a.causes.text-center`: 200px circular image
     (`border-radius: 50%`, bg `images/causes-1..5.jpg`, margin 0 auto 20px;
     hover: card `margin-top: -10px`, circular img overlay opacity .8) +
     `<h2>` (20px w900): "Adoption, Fostering & Children Care" ·
     "Disadvantages Young People" · "Meditation & Crisis Services" ·
     "Providing Children Care and Education" · "Safeguarding &
     Consultancy Services".
  6. **Testimonials** (`section.testimony-section`, bg `#6b76ff`, overlay
     `#232931` opacity .7): `.row` — left `.col-md-6` `.testimony-img` (bg
     `images/testimony-img.png`, `margin-top: -150px` desktop) + right
     `.col-md-6.py-5` `.heading-section.heading-section-white`: `<h2
class="mb-0">` "Success Stories" (40px w900 white) + `.carousel-
testimony.owl-carousel` of 5 `.item` → `.testimony-wrap.pb-4`:
     quote `<p class="mb-4">` (20px, `rgba(255,255,255,0.8)`) + author row:
     80px round `.user-img` (bg `images/person_1.jpg`) + `.pos.ml-3`:
     `<p class="name">` "Jeff Nucci" (20px w800 white) + `<span
class="position">` "Businessman".
  7. **Footer** (`footer.ftco-footer.ftco-section`, bg `#1e1e1e`, padding
     7em 0, font-size 16px): `.row.mb-5` of 4 `.col-md` widgets —
     a) `.ftco-footer-widget`: brand `Aid.` (24px w900 white) + blurb +
     `.ftco-footer-social` (Twitter / Facebook / Instagram icon links);
     b) "Information" (17px w400 white heading): links Donation · Privacy ·
     Terms Condition; c) "Links": Home · Who we are · Causes · Blog ·
     Contact; d) "Have a Questions?" `.block-23`: address row
     (icon-map-marker + "203 Fake St. Mountain View, San Francisco,
     California, USA"), phone row (+2 392 3929 210), email row
     (info@yourdomain.com) — text `rgba(255,255,255,0.4)`, icons/labels
     white. Bottom `.row` `.col-md-12.text-center` © line: "Copyright ©
     [year] All rights reserved | This template is made with ♥ by Colorlib"
     → reword the credit (Component Dock), keep © line.
- **JS behaviors (original):** jQuery owl.carousel (causes + testimonials
  sliders), `jquery.animateNumber` count-up (0 → 380,000 on the donation
  strong), magnific-popup Vimeo modal ("Play video"), AOS + scrollax
  (subtle parallax/scroll animations), Bootstrap collapse (mobile nav).
  Recreate as React: a count-up hook (IntersectionObserver-triggered when
  the counter scrolls into view, per repo conventions), carousels as
  horizontal scroll/auto-advance or a simple index-based slider already
  used in sibling apps, mobile nav toggle with `aria-expanded`, Vimeo link
  as a modal or plain external link.

## Design tokens (from `css/style.css`, verified 2026-08-09)

- **Font:** Nunito Sans (Google Fonts, weights 200–900; body weight 600,
  size 16px, line-height 1.8; headings w900). Load via Google Fonts
  `<link>` in `index.html`.
- **Brand colors:**
  - `#ffb400` — golden yellow: navbar brand dot, nav-link hover, primary
    button bg ("Join now"), active services card bg (desktop). Hover:
    transparent bg + `#ffb400` text on the primary button.
  - `#000000` — black buttons ("How Can I Help", "Donate now"), hero play
    icon box, mobile navbar bg.
  - `#1e1e1e` — near-black: donation panel (`.bg-black`), footer bg.
  - `#6b76ff` — purple-blue testimonial section bg (overlay `#232931` at
    opacity .7).
  - `#f8f9fa` — light gray services band bg (Bootstrap `bg-light`).
  - `#fff` — text/headings on dark; hero overlay at opacity .1.
  - `rgba(255,255,255,0.2)` — donation counter `$`/number,
    `rgba(0,0,0,0.2)` — services icons, `rgba(255,255,255,0.4)` — footer
    link text, `rgba(255,255,255,0.7)` — footer paragraph text,
    `rgba(255,255,255,0.8)` — hero subtext + testimonial quote.
- **Radii:** 3px (all buttons + play icon box), 50% (causes circular
  images, testimonial/user avatars).
- **Spacing:** hero height 800px; navbar padding-top 1.8rem links;
  `.ftco-section` padding 7em 0 (6em ≤768px); services cards padding
  40px 25px (10px 0 ≤992px); footer padding 7em 0; causes image 200px
  circle, margin-bottom 20px; testimonial quote padding-top 6em (overlap
  trick `margin-top: -65px` on `.text`); play-video vertical text with
  16px ls 2px uppercase.
- **Responsive:** ≤992px navbar becomes solid black + static (relative),
  brand stays white; ≤768px hero h1 40px, heading h2 28px; services band
  stacks 1-col (mobile); footer widgets stack.
- **Placeholder images (never copy ColorLib assets):** hero →
  `https://picsum.photos/seed/succor-hero/1920/1080` (B&W treatment
  optional via CSS `grayscale`), volunteer →
  `https://picsum.photos/seed/succor-nature/1200/900` (screened 2026-08-11:
  the original `succor-volunteer` seed resolved to a coffee scene and was
  rejected; `succor-nature` is a bright boardwalk that sits well behind the
  white text block), causes 1–5 →
  `https://picsum.photos/seed/succor-cause-<n>/400/400` (circle), testimonial
  side → `https://picsum.photos/seed/succor-story/800/900`, avatar →
  `https://picsum.photos/seed/succor-person/160/160`.

## Requirements

### Requirement: Transparent navbar over hero

The system SHALL render a fixed-position transparent navbar at the top of
the page (absolute, top 20px, z-index 3) with the brand "Succor." on the
left (white text, `#ffb400` dot) and right-aligned nav links (Home active,
Who we are, Causes, Stories, Contact) in 18px white weight-700 that turn
`#ffb400` on hover, plus a mobile hamburger ("Menu" + icon,
`aria-label="Toggle navigation"`).

#### Scenario: Desktop navbar

- **GIVEN** the Succor page is rendered on a desktop viewport
- **WHEN** the navbar is displayed
- **THEN** the navbar SHALL be transparent and positioned over the hero
- **AND** the brand SHALL read "Succor." with the trailing dot in `#ffb400`
- **AND** the nav links SHALL read Home · Who we are · Causes · Stories ·
  Contact in white weight-700
- **AND** hovering a nav link SHALL turn it `#ffb400`

#### Scenario: Mobile navbar

- **GIVEN** the Succor page is rendered on a viewport ≤992px
- **WHEN** the navbar is displayed
- **THEN** the navbar SHALL have a solid black background and be static
- **AND** a hamburger toggle SHALL be shown with aria-expanded state
- **AND** activating it SHALL expand/collapse the nav links

### Requirement: Full-bleed photo hero with headline and CTAs

The system SHALL render a full-width 800px-tall hero with a cover photo
background (white overlay at 10% opacity), the headline "We can help to
save the world" (54px w900 white uppercase, letter-spacing 5px) aligned to
the right half, a black "How Can I Help" button below it, and a vertical
"Play video" link on the left side.

#### Scenario: Hero layout

- **GIVEN** the Succor page is rendered
- **WHEN** the hero section is displayed
- **THEN** the hero SHALL have a full-bleed cover background photo
  (`background-size: cover`, top-center) and height 800px on desktop
- **AND** a 10%-opacity white overlay SHALL cover the hero
- **AND** the h1 SHALL read "We can help to save the world" in white
  uppercase weight-900, 54px, letter-spacing 5px (40px ≤768px)
- **AND** a black button reading "How Can I Help" SHALL be shown below the
  headline (white text, 3px radius, padding ~0.75rem 1.5rem)

#### Scenario: Play video link

- **GIVEN** the Succor page is rendered on a desktop viewport
- **WHEN** the hero section is displayed
- **THEN** a "Play video" link SHALL be shown on the left side of the hero
  with vertical (rotated) uppercase text, 16px, letter-spacing 2px
- **AND** a black play icon in a 3px-radius box SHALL accompany the text
- **AND** activating the link SHALL open the video (modal or external
  Vimeo link — no copied media)

### Requirement: Volunteer / donation split section

The system SHALL render a two-column section that overlaps the hero: a
photo panel (left, 7/12 width, pulled up -70px on desktop) with a white
text block on the photo ("We need volunteers in Africa" 50px w900 + lorem
paragraph + yellow "Join now" button), and a black panel (right, 5/12,
`#1e1e1e`) with a white 50px w900 heading "Donation so far $380,000", a
lorem paragraph, and a black "Donate now" button.

#### Scenario: Volunteer panel

- **GIVEN** the Succor page is rendered
- **WHEN** the volunteer/donation section is displayed
- **THEN** a photo panel SHALL be shown on the left with a white text
  block overlaid on its right side
- **AND** the text block SHALL contain the heading "We need volunteers in
  Africa" (weight-900) and a paragraph
- **AND** a `#ffb400` button reading "Join now" SHALL be shown (white
  text, 3px radius)

#### Scenario: Donation counter panel

- **GIVEN** the Succor page is rendered
- **WHEN** the volunteer/donation section is displayed
- **THEN** a `#1e1e1e` panel SHALL be shown on the right
- **AND** the panel SHALL contain the heading "Donation so far $380,000"
  with the "$" and digits rendered in `rgba(255,255,255,0.2)`
- **AND** the number SHALL count up from 0 to 380,000 when scrolled into
  view (client-side animation — no backend)
- **AND** a black button reading "Donate now" SHALL be shown

### Requirement: Services band

The system SHALL render a light-gray (`#f8f9fa`) band of four equal
service cards (icon + heading + blurb), each with a 60px icon in
`rgba(0,0,0,0.2)`, a 22px weight-900 heading, and the third card
("Volunteering") highlighted with a `#ffb400` background on desktop.

#### Scenario: Four service cards

- **GIVEN** the Succor page is rendered
- **WHEN** the services band is displayed
- **THEN** four cards SHALL be shown in a 4-column row on desktop
  (2-col tablet, 1-col mobile)
- **AND** the cards SHALL read "Help & Support" (with the address text
  "203 Fake St. Mountain View, San Francisco, California, USA"),
  "Adoption", "Volunteering", and "Education" with short blurbs
- **AND** each card SHALL show a 60px icon (lucide equivalents: `HandHeart`
  / `Users` / `HeartHandshake` / `BookOpen`) above the heading
- **AND** on desktop the "Volunteering" card SHALL have a `#ffb400`
  background

### Requirement: Causes carousel

The system SHALL render a centered section headed "Let's build the world
without child abuse and neglect" (50px w900) with a horizontal carousel of
five cause items, each a 200px circular photo with a 20px weight-900 title
below, that lifts -10px on hover.

#### Scenario: Cause items

- **GIVEN** the Succor page is rendered
- **WHEN** the causes section is displayed
- **THEN** a centered heading "Let's build the world without child abuse
  and neglect" SHALL be shown with a short paragraph below
- **AND** five cause items SHALL be shown in a carousel row, each with a
  200px circular image (`border-radius: 50%`) and the titles: "Adoption,
  Fostering & Children Care" · "Disadvantages Young People" · "Meditation
  & Crisis Services" · "Providing Children Care and Education" ·
  "Safeguarding & Consultancy Services"
- **AND** hovering a cause item SHALL lift it up 10px (with a photo
  overlay at 80% opacity)

### Requirement: Success Stories testimonials

The system SHALL render a purple (`#6b76ff`) section with a dark overlay
(`#232931` at 70%), a side photo panel (overlapping up -150px on desktop),
a white "Success Stories" heading, and a carousel of testimonial cards
(quote, 80px round avatar, name, position).

#### Scenario: Testimonial cards

- **GIVEN** the Succor page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** the section SHALL have a `#6b76ff` background with a `#232931`
  overlay at 70% opacity
- **AND** the heading "Success Stories" SHALL be shown in white 40px
  weight-900
- **AND** at least one testimonial card SHALL be shown with a quote
  (20px, `rgba(255,255,255,0.8)`), an 80px round avatar, the name "Jeff
  Nucci" (20px weight-800 white), and the position "Businessman"
- **AND** the carousel SHALL support navigating between items

### Requirement: Dark footer with four widgets

The system SHALL render a `#1e1e1e` footer with four widgets in a row —
brand + blurb + social icons, "Information" links (Donation · Privacy ·
Terms Condition), "Links" (Home · Who we are · Causes · Blog · Contact),
and "Have a Questions?" contact rows (address, phone, email) — plus a
centered bottom bar with the © line and a reworded credit (no Colorlib
link-back requirement).

#### Scenario: Footer layout

- **GIVEN** the Succor page is rendered
- **WHEN** the footer is displayed
- **THEN** the footer SHALL have a `#1e1e1e` background with four widgets
  in a row on desktop (stacking on mobile)
- **AND** the first widget SHALL show the brand "Succor.", a short blurb,
  and three social icon links (Twitter/Facebook/Instagram — inline SVG
  brand icons, NOT lucide brand icons)
- **AND** the "Information" and "Links" widgets SHALL list their links
  (text `rgba(255,255,255,0.4)`)
- **AND** the "Have a Questions?" widget SHALL show address, phone, and
  email rows with icons
- **AND** a centered bottom bar SHALL show "Copyright © [current year] All
  rights reserved | This template is made with ♥ by Component Dock"
  (reworded credit, keeping the © line and heart)

### Requirement: Responsive behavior

The system SHALL stack all multi-column sections to single columns on
mobile: navbar solid black, hero height reduced and headline 40px,
services 1-col, causes items margin-bottom 30px, testimonial/footer
widgets stacked, and section padding reduced to 6em.

#### Scenario: Mobile layout (≤768px)

- **GIVEN** the Succor page is rendered on a viewport ≤768px
- **WHEN** the page is displayed
- **THEN** the navbar SHALL be solid black and static
- **AND** the hero h1 SHALL be 40px and the hero SHALL fit the viewport
- **AND** the volunteer/donation split, services, causes, testimonials,
  and footer widgets SHALL stack vertically
- **AND** `.ftco-section` padding SHALL be 6em

## Verification checklist

- [ ] `npm run spec:validate` passes for `template-succor`
- [ ] `scripts/verify-app.sh succor` passes (typecheck + lint + vitest 100%
      coverage + build)
- [ ] Sections in order (1:1 with source): transparent navbar (brand
      "Succor." + Home/Who we are/Causes/Stories/Contact, hover `#ffb400`)
      → 800px photo hero (white 10% overlay, h1 "We can help to save the
      world" uppercase ls 5px, black "How Can I Help" btn, vertical "Play
      video" left) → volunteer/donation split (`img-volunteer` -70px
      overlap + "We need volunteers in Africa" + `#ffb400` "Join now";
      `#1e1e1e` panel + animated "Donation so far $380,000" + "Donate now")
      → services band `#f8f9fa` (4 cards, 3rd active `#ffb400` desktop) →
      causes carousel (5 circular 200px items, hover lift) → purple
      testimonials (`#6b76ff` + `#232931` overlay, "Success Stories",
      avatar + name + position) → footer `#1e1e1e` (4 widgets + © bar)
- [ ] Brand colors in `@theme`, used via Tailwind classes: `#ffb400`
      (brand), `#000000`, `#1e1e1e` (donation panel + footer),
      `#6b76ff` (testimonials bg), `#232931` (testimonial overlay),
      `#f8f9fa` (services bg); radii 3px buttons / 50% circles
- [ ] Font: Nunito Sans 200–900 via Google Fonts `<link>` in `index.html`,
      title "Succor — Charity & Nonprofit Template"
- [ ] All imagery via picsum seeds (succor-hero / -nature / -cause-1..5
      / -story / -person) — NEVER copy ColorLib images; icons from
      `lucide-react` (brand social icons as inline SVG)
- [ ] Interactions: mobile nav toggle (`aria-expanded`), animated donation
      counter (0 → 380,000, scroll-triggered), causes + testimonials
      carousels, "Play video" opens modal/external link; `aria-label`s on
      icon-only controls
- [ ] Mobile (≤768px): navbar black + static, hero h1 40px, all sections
      stack 1-col, section padding 6em
- [ ] Copy kinds kept: "We can help to save the world", "How Can I Help",
      "Play video", "We need volunteers in Africa", "Join now", "Donation
      so far $380,000", "Donate now", "Help & Support", "Adoption",
      "Volunteering", "Education", "Let's build the world without child
      abuse and neglect", "Success Stories", "Jeff Nucci — Businessman",
      footer widgets (Information/Links/Have a Questions?) + reworded
      credit
