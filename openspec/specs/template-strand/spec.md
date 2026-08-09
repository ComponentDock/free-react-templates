# Template: Strand (Hair Salon Landing)

## Purpose

Strand is a single-page hair-salon template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Hairsal"
design (see TEMPLATES.md — line 219, Beauty section; unchecked item whose
prep did not exist on main), built under the monorepo stack: Vite + React 19

- Tailwind CSS 4 + TypeScript.

The original is a clean, light hair-salon landing page with a lime-green
(#8bc34a) accent on white: a transparent header over a full-height hero
slider (two slides, black "Book Now!" square button), a three-column welcome
row (welcome text / photo / Opening Hours box), a "Featured Services" row of
three light-gray icon cards with green prices, a testimonial block with a
portrait photo and a white panel ("New hairstyle!" + italic quote by Stellla
Martin), a fixed-background parallax CTA band with a circular play button
("Experience Our Outstanding Services"), and a dark-gray footer with About /
Quick Menu / Subscribe Newsletter widgets. Strand recreates that structure
section-for-section with matching layout, colors, typography, and content
types (no ColorLib assets copied).

## Design reference (replication findings)

- **Original:** ColorLib "Hairsal" — free Bootstrap 4 hair-salon website
  template (source: https://colorlib.com/wp/template/hairsal/). New name:
  **strand** (a single lock of hair — a hair-salon motif; single word, no
  collision with `ls apps/` or existing spec folders).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/hairsal/`
  (HTTP 200, ~15KB; page title "HairSal — Colorlib Website Template").
  Stylesheets: `css/style.css` (~18KB — custom template styles) plus
  bootstrap.min, magnific-popup, jquery-ui, owl.carousel + theme,
  bootstrap-datepicker, flaticon (icons), icomoon, mediaelementplayer, AOS.
  JS: jquery, bootstrap, owl.carousel (hero slider), jquery.stellar
  (parallax), magnific-popup (vimeo video popup), aos, main.js. Fonts loaded
  via Google Fonts `<link>`: **Poppins** (200,300,400,700,900 — body, nav,
  buttons) and **"Display Playfair"** (Playfair Display — headings). In the
  recreation load both from Google Fonts `<link>` in index.html.
- **Screenshot:** `hairsal-free-template.jpg` (TEMPLATES.md line 219) —
  confirms the visual design: transparent header with black "Hairsal" serif
  logo + centered uppercase nav + right social icons; hero photo of a woman
  with voluminous wavy hair on a soft pink background with white "WELCOME TO
  HAIRSAL" eyebrow + large serif "Hair Salon Expert" + black rectangular
  "Book Now!" button and slider arrows; below, the three-column welcome row
  with lime-green italic serif accents on "Hair Salon" and "Opening Hours".
  Lime green #8bc34a is the dominant accent.
- **Design tokens (extracted from `css/style.css` + live computed styles):**
  - Brand accent: **#8bc34a** (lime green) — nav link hover/active, dropdown
    top border (2px), `.site-section-heading` 100px×1px underline bar,
    `.text-primary` (welcome "Hair Salon" em, "Opening Hours" heading,
    service prices, feature icons), footer newsletter **Send** button
    (`btn-primary` = green bg, white text).
  - Fonts: headings **Playfair Display** (serif — brand, hero h5/h2,
    section headings, display-1/3 classes), body/nav/buttons **Poppins**
    (sans; nav 15px uppercase, letter-spacing .05em).
  - Buttons: **square** (`border-radius: 0`); `.btn-black` = #000 bg, #fff
    text, hover inverts (white bg / black text); hero CTA is `btn-black
py-3 px-5`.
  - Header/nav: `site-navbar` transparent + absolute over hero; menu links
    #000, active/hover #8bc34a; dropdowns `min-width: 200px`, `border-top:
2px solid #8bc34a`, links #343a40, hover bg #f4f5f9.
  - Hero: `.site-blocks-cover` full-height (`min-height: 600px; height:
calc(100vh - 73px)`), bg image cover, dark overlay `rgba(0,0,0,0.4)`,
    white text; h5 eyebrow uppercase 20px; h2 display-1 ~3rem.
  - Sections: white bg; `.site-section` vertical padding 2.5em (larger on
    desktop media query); feature cards `.bg-light` (#f8f9fa) `p-4 p-lg-5`
    centered, display-3 green icon + h4 black title + lorem + green
    `$price`; testimonial block on `site-section.bg-light` with a white
    `bg-white p-md-5` panel.
  - CTA band: `site-blocks-cover.overlay.inner-page-cover` — bg image with
    `background-attachment: fixed`, dark overlay, white display-3 heading,
    circular play button `.play-single-big` (90px, 2px #fff border,
    border-radius 50%, white play icon).
  - Footer: `background: #333333`; footer headings #fff (20px), body text
    #737373, links #999999 (hover white); newsletter input transparent with
    `border-secondary`; social icons row; copyright + ColorLib credit line
    (→ repo-standard credit).
- **Section order (1:1):**
  1. `header.site-navbar.py-1` — transparent absolute bar: h1 brand
     **"Hairsal"** (text-black), centered nav `ul.site-menu`: **Home**
     (has-children, active; dropdown: Menu One / Menu Two / Menu Three /
     Sub Menu (nested dropdown: Menu One / Menu Two / Menu Three)) /
     **Haircut** (has-children; dropdown: Menu One / Menu Two / Menu Three)
     / **Services / About / Book Online / Contact**, right social icons
     (facebook / twitter / instagram / youtube-play), mobile hamburger
     `site-menu-toggle` (icon-menu). Mobile menu clone `div.site-mobile-menu`.
  2. `div.slide-one-item.home-slider.owl-carousel` — hero **slider, 2
     slides**, each `div.site-blocks-cover` (bg `images/hero_bg_1.jpg` /
     `hero_bg_2.jpg`, dark overlay, centered col-md-8):
     - Slide 1: h5 uppercase **"Welcome to Hairsal"** + h2 display-1
       **"Hair Salon Expert"** + `a.btn.btn-black.py-3.px-5` **Book Now!**
     - Slide 2: h2 display-1 **"Beautiful Hair, Healthy You!"** + Book Now!
  3. `div.site-section` — welcome row (3 cols):
     - col-lg-4 text-center: h3 two-line heading **"Welcome to"** (black)
       - em **"Hair Salon"** (text-primary, italic, bold), lorem paragraph,
         **Read More** small uppercase bold link.
     - col-lg-4: `figure.hover-bg-enlarge` bg-image (`images/img_2.jpg`).
     - col-lg-4: `div.border.p-4` **Opening Hours** box: h2 text-primary
       "Opening Hours"; rows **Mon – Fri 10:00 AM – 8:30 PM / Saturday
       Closed / Sunday 10:00 AM – 8:30 PM** (day bold d-block + hours).
  4. `div.site-section` — **Featured Services** (centered
     `site-section-heading` with green underline bar) + 3
     `site-block-feature-7` cards (`bg-light h-100 p-4 p-lg-5 text-center`):
     **Barber Razor** (flaticon-razor) $29 / **Location Pin**
     (flaticon-location-pin) $46 / **Barber Shave** (flaticon-shave) $24 —
     display-3 green icon, h4 black title, lorem, green bold price.
  5. `div.site-section.bg-light` — **testimonial block**: left photo
     (`images/person_1.jpg`, col-lg-6), right white panel (`col-lg-6
bg-white p-md-5 align-self-center`): h2 display-1 **"New hairstyle!"**
     (with green underline bar), lead italic quote "Lorem ipsum dolor sit
     amet, consectetur adipisicing elit…", attribution **"— Stellla
     Martin"** (lead, italic).
  6. `div.site-blocks-cover.overlay.inner-page-cover` — full-width CTA band
     (bg `hero_bg_2.jpg`, `background-attachment: fixed`, dark overlay,
     centered col-md-10): h2 display-3 white **"Experience Our Outstanding
     Services"** + circular `a.play-single-big.popup-vimeo` play button
     (opens Vimeo popup).
  7. `footer.site-footer` (#333333, 3 columns):
     - col-lg-4: **About Hairsal** heading + lorem paragraph.
     - col-lg-4: **Quick Menu** heading + two link columns: Home / Barbers
       / News / Team and About Us / Privacy Policy / Contact Us /
       Membership.
     - col-lg-4: **Subscribe Newsletter** heading + lorem + form
       (`input-group`): transparent email input (placeholder "Enter Email")
       - `button.btn.btn-primary.text-white` **Send** (green).
     - bottom row: 4 social icons (facebook / twitter / instagram /
       linkedin) + copyright line + ColorLib credit (→ repo-standard
       credit).

## Requirements

### Requirement: Header navigation

The system SHALL render a transparent header bar with the brand, centered
nav links, and right social icons.

#### Scenario: Header renders

- **GIVEN** the Strand app is rendered
- **WHEN** the header is displayed
- **THEN** it SHALL show the brand label "Strand"
- **AND** the nav links Home / Haircut / Services / About / Book Online /
  Contact, uppercase with the first (Home) active
- **AND** the Home and Haircut items SHALL open dropdowns (Menu One / Menu
  Two / Menu Three; Sub Menu nested under Home), with the active/hover link
  in brand green
- **AND** four social icons SHALL render on the right
- **AND** the mobile toggler SHALL have `aria-expanded` and toggle the
  mobile menu

### Requirement: Hero slider

The system SHALL render a full-height hero slider with two slides, each with
a headline and a black CTA button.

#### Scenario: Hero renders

- **GIVEN** the page is rendered
- **WHEN** the hero section is displayed
- **THEN** it SHALL cycle between slide 1 ("Welcome to Strand" eyebrow +
  "Hair Salon Expert" headline) and slide 2 ("Beautiful Hair, Healthy You!")
- **AND** each slide SHALL show a dark overlay over the background photo
- **AND** each slide SHALL show a black square **Book Now!** button
- **AND** the slider SHALL expose prev/next controls (accessible buttons)

### Requirement: Welcome row

The system SHALL render a three-column welcome section with text, a photo,
and opening hours.

#### Scenario: Welcome section renders

- **GIVEN** the page is rendered
- **WHEN** the welcome section is displayed
- **THEN** it SHALL show the two-line heading "Welcome to / Hair Salon"
  with "Hair Salon" in green italic serif, a paragraph, and a **Read More**
  link
- **AND** a photo in the middle column
- **AND** a bordered **Opening Hours** box with Mon – Fri 10:00 AM – 8:30
  PM, Saturday Closed, Sunday 10:00 AM – 8:30 PM

### Requirement: Featured services

The system SHALL render a "Featured Services" row of three icon cards with
prices.

#### Scenario: Service cards render

- **GIVEN** the page is rendered
- **WHEN** the services section is displayed
- **THEN** it SHALL show the centered heading "Featured Services" with the
  green underline bar
- **AND** three light-gray cards — Barber Razor $29 / Location Pin $46 /
  Barber Shave $24 — each with a green icon, title, blurb, and green price

### Requirement: Testimonial block

The system SHALL render a testimonial section with a photo and a white quote
panel.

#### Scenario: Testimonial renders

- **GIVEN** the page is rendered
- **WHEN** the testimonial section is displayed
- **THEN** it SHALL show a photo on the left
- **AND** a white panel with the heading "New hairstyle!" (green underline),
  an italic quote, and the attribution "— Stellla Martin"

### Requirement: CTA band

The system SHALL render a full-width parallax CTA band with a play button.

#### Scenario: CTA band renders

- **GIVEN** the page is rendered
- **WHEN** the CTA band is displayed
- **THEN** it SHALL show a fixed-background photo with a dark overlay
- **AND** the white heading "Experience Our Outstanding Services"
- **AND** a circular play button with an accessible label

### Requirement: Footer

The system SHALL render a dark-gray footer with About, Quick Menu, and
newsletter widgets.

#### Scenario: Footer renders

- **GIVEN** the page is rendered
- **WHEN** the bottom footer is displayed
- **THEN** it SHALL have a #333333 background
- **AND** it SHALL show the About widget with a paragraph
- **AND** it SHALL show the Quick Menu with two link columns (Home /
  Barbers / News / Team; About Us / Privacy Policy / Contact Us /
  Membership)
- **AND** it SHALL show the Subscribe Newsletter widget with an email input
  and a green **Send** button
- **AND** four social icons and the repo-standard footer credit line

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Strand app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose header, hero slider, welcome row, featured
  services, testimonial, CTA band, and footer inside the main landmark in
  the original's order
- **AND** the document title SHALL be "Strand — Hair Salon"

## Verification checklist

- [ ] `npm run spec:validate` passes.
- [ ] `npm run verify:app -- strand` passes: typecheck → lint → vitest
      (100% coverage) → build.
- [ ] Section order matches the original 1:1 (header → hero slider →
      welcome row → featured services → testimonial → CTA band → footer).
- [ ] Design tokens applied: brand green `#8bc34a` (nav active/hover,
      dropdown top border, section-heading underline, text-primary accents,
      service prices, footer Send button), headings in Playfair Display
      (serif, black), body/nav/buttons in Poppins, white section
      backgrounds with `#f8f9fa` (bg-light) feature cards and testimonial
      band, dark-gray `#333333` footer, square buttons (`border-radius: 0`),
      hero CTA black bg / white text.
- [ ] Header is transparent/absolute with brand, centered uppercase nav
      (Home active, Home▾ + Haircut▾ dropdowns), 4 social icons, mobile
      toggler with aria-expanded.
- [ ] Hero is a full-height 2-slide carousel (Welcome to Strand + Hair
      Salon Expert / Beautiful Hair, Healthy You!) with dark overlay, white
      serif headlines, and black square Book Now! buttons.
- [ ] Welcome row renders "Welcome to / Hair Salon" (green italic em),
      paragraph, Read More link, center photo, and the bordered Opening
      Hours box (Mon–Fri 10–8:30, Saturday Closed, Sunday 10–8:30).
- [ ] Featured Services renders "Featured Services" + three bg-light cards
      (Barber Razor $29 / Location Pin $46 / Barber Shave $24) with green
      icons and prices.
- [ ] Testimonial renders photo + white panel ("New hairstyle!", italic
      quote, "— Stellla Martin").
- [ ] CTA band renders fixed-bg photo + dark overlay + "Experience Our
      Outstanding Services" + circular play button.
- [ ] Footer is #333333 with About / Quick Menu (2×4 links) / Subscribe
      Newsletter (email input + green Send) + socials + repo-standard
      credit.
- [ ] All images are picsum-seeded placeholders (no ColorLib assets).
- [ ] PR description records source template (Hairsal), preview URL, tokens,
      and renames.
