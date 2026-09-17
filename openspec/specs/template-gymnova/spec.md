# Template: GymNova (Health Fitness — Gym)

## Purpose

GymNova is a single-page gym / fitness club template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Fitzone" fitness
HTML template design (see TEMPLATES.md, line 1468 under **Health Fitness (72)**),
built under a different name ("GymNova" — gym = fitness facility, nova = new/bright,
matching the source's vibrant fitness-club positioning) with the monorepo stack:
Vite + React 19 + Tailwind CSS 4 + TypeScript (strict). No ColorLib references in
app code — provenance lives in this spec, TEMPLATES.md, and the PR.

## Design reference (replication findings)

- **Original:** ColorLib "Fitzone" — free gym / fitness club HTML template
  (source: https://colorlib.com/wp/template/fitzone/). Single page: a white
  rounded header (logo left, right-aligned nav Home / About Us / Schedule /
  Trainers / Blog (dropdown) / Contact / Pages (dropdown), "Book Now" button),
  a full-width hero banner with a background gym photo and right-aligned text
  "feel good / breath" + "Become a Member" button, a white About section
  ("welcome to our best fitness club" + image), a gray Featured Classes section
  (3 cards with hover overlay: cycling training / tone muscle / meditation work),
  a photo-background Services section ("our service" with 3 items: personal
  training / boxing training / fitness training), a Coaches section ("our fitness
  coaches" — 4 cards with social icon hover overlay), a Discount/Newsletter
  section ("25% discount — Subscribe to our newsletter and get a coupon code!"),
  a BMI Calculator section ("calculate your bmi" — 3 inputs + calculate button),
  a Client Testimonials carousel ("happy client says" — 3 testimonial cards),
  a Friend CTA section ("bring all your friends. get 50% discount!"), and a
  Footer (3 columns: about us / contact us / newsletter + copyright bar with
  social icons).
- **Live preview REACHABLE (HTTP 200):**
  `https://preview.colorlib.com/theme/fitzone/`. DOM fetched
  (`/tmp/fitzone-preview.html`, 25,166 bytes) + stylesheet `css/style.css`
  (`/tmp/fitzone-style.css`, 43,120 bytes) + TEMPLATES.md screenshot
  (`fitzone-free-template.jpg`).
- **Visual design (live DOM + CSS):** Bright, clean fitness-club aesthetic —
  white header with rounded corners overlapping the hero; large hero with a
  darkened gym photo and bold white "feel good / breath" text on the right;
  gray `#f5f5f5` alternating sections (features, BMI, client testimonials,
  footer); photo-background sections (services, discount, friend CTA) with
  blue-tinted overlays; the ONLY accent color is a vibrant red/magenta
  `#f61b55` used for every CTA button, hamburger menu, spinner, discount
  text highlights, and social icon hovers. Fonts are dual-family: "Roboto"
  for body and hero headings, "Rubik" for section headings and buttons.
  Buttons are small, rounded (`border-radius: 3px`), uppercase, compact
  padding. Overall feel is energetic but clean — the red accent against
  white/gray surfaces and darkened photo sections.

## Design tokens (from `css/style.css` of the live preview)

- **Brand red/magenta:** `#f61b55` — `.template-btn` background (THE primary
  CTA color), `.custom-navbar` hamburger background, `.discount-area span`
  accent text, `.coaches-footer h5` hover color, `.single-coaches .hover-state
  ul li a i:hover` background, `.footer-copyright .color` span, footer social
  icon hover background, `.schedule-area .thead-light th` background, blog
  sidebar accent, blockquote border. Used ~25 times — THE accent of the whole
  template.
- **Body text:** `#777` — paragraphs, h6 headings, `font-family: "Roboto",
  sans-serif`, `font-weight: 400`, `font-size: 14px`.
- **Heading text:** `#222` — h1 (banner, 150px white), h3 (section headings,
  36px uppercase `"Rubik"` 500), h5 (card titles, 18px uppercase `"Rubik"` 500),
  nav links (14px uppercase `"Roboto"` 600).
- **Light surfaces:** `#f5f5f5` — feature-area background, BMI-area background,
  single-slide (testimonial card) background, coaches-footer background,
  friend-area (photo overlay), footer-area background, mobile menu dropdown
  background.
- **Font families (dual):** `"Roboto", sans-serif` — body text, paragraphs, h1,
  h2, h4, nav links (Google-imported, weights 400/500/700); `"Rubik", sans-serif`
  — h3 section headings, h5 card titles, `.template-btn` buttons (Google-imported,
  weights 400/500/700).
- **Buttons (`.template-btn`):** `background: #f61b55`, `color: #fff`,
  `border: 1px solid transparent`, `border-radius: 3px`, `padding: 13px 24px`,
  `font-family: "Rubik"`, `text-transform: uppercase`, `font-size: 14px`,
  `font-weight: 500`. Hover: `background: transparent`, `color: #222`,
  `border: 1px solid #f61b55`.
- **Header (`.header-area.main-header`):** White `#fff`, `padding: 24px 0`,
  `border-radius: 5px`, `margin: 0 5%` (overlaps the hero below), `position:
  relative`, `z-index: 2`. Nav links: `#222`, 14px uppercase, `font-weight: 600`,
  `font-family: "Roboto"`. "Book Now" button at the right with margin-left 60px.
- **Hero (`.banner-area.banner-bg`):** `background-image: url(banner-bg.jpg)`,
  fallback `background-color: #b0b0b0`, `padding: 200px 0 180px`, text aligned
  right (`.banner-text` with `padding-left: 100px`): h1 "feel good" (white,
  150px uppercase Roboto 700, line-height 120px), h2 "breath" (white, 90px
  uppercase Roboto 700), CTA button below.
- **About (`.about-area.section-padding`):** White background, `padding: 130px
  0`. Left: h3 "welcome to our best fitness club" (36px Rubik 500 uppercase) +
  2 paragraphs + "Learn More" button. Right: an image.
- **Featured Classes (`.feature-area`, bg `#f5f5f5`):** 3 `.single-feature`
  columns. Each: photo (full-width) + hover overlay (`background:
  rgba(1,2,12,0.7)`, opacity 0→1 on hover) with centered "Details" button
  (white semi-transparent bg, dark text, turns white-on-transparent on hover).
  Below photo: `.feature-footer` (white bg, `padding: 30px 40px`, h5 title
  uppercase + paragraph). On hover the footer gets a box-shadow.
  Titles: "Cycling Training" / "Tone Muscle" / "Meditation Work".
- **Services (`.service-area`, bg image + fallback `#b0b0b0`):** `::after`
  pseudo-element adds a blue tint overlay (`rgba(108,174,255,0.2)`) on the
  right 50% of the section. Right-aligned text (`.col-xl-5 offset-xl-7`):
  h3 "Our Service" (white) + 3 `.single-service` items (icon image + h5 title
  + paragraph, flex row): "Personal Training" / "Boxing Training" / "Fitness
  Training".
- **Coaches (`.coaches-area.section-padding`):** 4 `.single-coaches` columns.
  Each: `.coaches-img` (photo, full-width) + hover overlay (`rgba(1,2,12,0.7)`)
  with social icon list (4 icons: FB, Twitter, LinkedIn, Instagram — circular,
  `rgba(255,255,255,0.3)` bg, white icons, hover turns `#f61b55`). Below:
  `.coaches-footer` (`#f5f5f5`, `margin: -50px 10% 0`, `z-index: 2`) with h5
  name + h6 role. On hover: footer bg white + box-shadow, h5 turns `#f61b55`.
  Coaches: David Williams (Fitness Trainer) / Jacob Bare (Weight Loss) /
  Senioer Fall (Gym Fitness) [typo in source — fix to "Senior Fall" or
  replace with clean names].
- **Discount / Newsletter (`.discount-area`, bg image + fallback `#b0b0b0`):**
  Centered, white text. h3 "25%" + span "discount" (span in `#f61b55`). h4
  "Subscribe to our newsletter and get a coupon code!" (white 20px). Email
  input (360px, no border, `border-radius: 3px`) + "Subscribe" button.
- **BMI Calculator (`.bmi-area`, bg `#f5f5f5`):** h3 "Calculate Your BMI"
  (36px Rubik 500). Left side: image. Right side (`.bmi-text` with
  `padding-left: 30%`): 3 `.form-group` inputs (30% width each, float left,
  margin-right 3%) — "Height" / "Weight" / "Age" (labels uppercase 500) +
  input (no border, padding 13px 20px) + "Calculate" button below.
- **Client Testimonials (`.client-area.section-padding`):** 3 `.single-slide`
  cards in a carousel (owl-carousel in source). Each: circular photo (70px,
  `border-radius: 50%`) + h5 name + h6 role + paragraph. Background `#f5f5f5`,
  hover: white bg + box-shadow.
- **Friend CTA (`.friend-area`, bg image + fallback `#f61b55`):** Centered,
  white text. h3 "Bring all your friends. Get 50% discount!" h4 (white 20px)
  + "Join With Us" button.
- **Footer (`.footer-area.section-padding`, bg `#f5f5f5`):** 3 columns:
  - About Us: h5 + paragraph
  - Contact Us: h5 + address + 2 phone spans (`#f61b55`, 24px bold)
  - Newsletter: h5 + paragraph + email form (input `border-radius: 5px`,
    padding 14px 70px 14px 20px + "Subscribe" button absolute right)
  Footer copyright bar: copyright text + "Made with ♥" heart icon (span
  `.color` in `#f61b55`) + "by Component Dock" (link to
  https://www.componentdock.com/) + 4 social icon circles (40px,
  `#222` bg `#fff`, hover `#f61b55` bg `#fff` → `#fff` icon).
- **Section padding:** `130px 0` (`.section-padding`).
- **Mobile menu:** hamburger icon (`.custom-navbar`) — 3 white bars on `#f61b55`
  background, `border-radius: 3px`, absolute top-right. Shows on screens below
  `992px`. In source uses jQuery show/hide — implement with React state.
- **Placeholder images:** `https://picsum.photos/seed/gymnova-<n>/<w>/<h>`.
  Subject-critical photos: hero banner, about section, 3 feature cards, service
  bg, 4 coach photos, discount bg, BMI image, testimonial photos, friend bg.
  Icons from `lucide-react`.
- **Slider:** owl-carousel in source for testimonials — implement as a
  CSS-based or React state carousel with dot/arrow navigation.

## Requirements

### Requirement: Header — white rounded bar with nav + "Book Now" CTA

#### Scenario: Header content
- GIVEN the page loads
- WHEN the header is rendered
- THEN it displays a logo (image or text) on the left
- AND navigation links: Home, About Us, Schedule, Trainers, Blog, Contact
- AND a "Book Now" button at the right end of the nav

#### Scenario: Header styling
- GIVEN the header is rendered
- WHEN viewed on desktop
- THEN it has a white background with 5px border-radius
- AND centered content with 5% horizontal margin
- AND position relative with z-index 2 (overlapping the hero)

#### Scenario: Mobile menu
- GIVEN the viewport is below 992px
- WHEN the page is rendered
- THEN a hamburger icon (3 bars on red background) appears at top-right
- AND clicking it toggles a dropdown menu with all nav links

### Requirement: Hero banner — full-width photo with right-aligned text

#### Scenario: Hero content
- GIVEN the hero section is rendered
- WHEN viewed
- THEN it displays a large heading "feel good" and subheading "breath"
- AND a "Become a Member" CTA button below

#### Scenario: Hero styling
- GIVEN the hero section is rendered
- WHEN viewed
- THEN it has a darkened background gym photo (cover, centered)
- AND text is right-aligned (offset to the right 50%+ of the viewport)
- AND h1 is 150px white uppercase Roboto, h2 is 90px white uppercase Roboto
- AND padding is 200px top / 180px bottom

### Requirement: About section — welcome text + image

#### Scenario: About content
- GIVEN the about section is rendered
- WHEN viewed
- THEN it displays heading "Welcome to Our Best Fitness Club"
- AND two paragraphs of descriptive text
- AND a "Learn More" button
- AND an image on the right side

#### Scenario: About layout
- GIVEN the about section is rendered
- WHEN viewed on desktop
- THEN it uses a 2-column layout (6 + 5 offset-1 columns)
- AND white background with 130px section padding

### Requirement: Featured Classes — 3 cards with hover overlay

#### Scenario: Featured classes content
- GIVEN the featured classes section is rendered
- WHEN viewed
- THEN it displays heading "Featured Classes"
- AND 3 cards in a row: Cycling Training, Tone Muscle, Meditation Work
- AND each card has a photo, title, and description paragraph

#### Scenario: Featured classes hover
- GIVEN a feature card is rendered
- WHEN the user hovers over the card image
- THEN a dark overlay (`rgba(1,2,12,0.7)`) fades in
- AND a "Details" button appears centered in the overlay

#### Scenario: Featured classes layout
- GIVEN the featured classes section is rendered
- WHEN viewed
- THEN background is `#f5f5f5`
- AND 3 columns (4 + 4 + 4), responsive to single column on mobile

### Requirement: Services — photo-background section with 3 items

#### Scenario: Services content
- GIVEN the services section is rendered
- WHEN viewed
- THEN it displays heading "Our Service"
- AND 3 service items: Personal Training, Boxing Training, Fitness Training
- AND each item has an icon image, title, and description paragraph

#### Scenario: Services layout
- GIVEN the services section is rendered
- WHEN viewed
- THEN it has a background gym photo with a blue-tinted overlay on the right half
- AND text content is right-aligned (offset to the right 50%+ of the viewport)
- AND headings and text are white

### Requirement: Coaches — 4 cards with social hover overlay

#### Scenario: Coaches content
- GIVEN the coaches section is rendered
- WHEN viewed
- THEN it displays heading "Our Fitness Coaches"
- AND 4 coach cards: each with photo, name, and role
- AND coach names and roles from the source (paraphrased)

#### Scenario: Coaches hover
- GIVEN a coach card is rendered
- WHEN the user hovers over the card image
- THEN a dark overlay (`rgba(1,2,12,0.7)`) fades in
- AND 4 social icons appear (Facebook, Twitter, LinkedIn, Instagram) vertically on the right

#### Scenario: Coaches layout
- GIVEN the coaches section is rendered
- WHEN viewed
- THEN cards use a 4-column grid (responsive to 2/1 columns on mobile)
- AND the coaches-footer overlaps the image by -50px margin-top
- AND footer has `#f5f5f5` background with name h5 and role h6

### Requirement: Discount / Newsletter — photo-background with email signup

#### Scenario: Discount content
- GIVEN the discount section is rendered
- WHEN viewed
- THEN it displays "25%" in white and "discount" in red (`#f61b55`)
- AND a subtitle "Subscribe to our newsletter and get a coupon code!"
- AND an email input + "Subscribe" button

#### Scenario: Discount layout
- GIVEN the discount section is rendered
- WHEN viewed
- THEN it has a darkened background photo
- AND all text is white and centered
- AND the email input is 360px wide with `border-radius: 3px`

### Requirement: BMI Calculator — form with 3 inputs

#### Scenario: BMI content
- GIVEN the BMI section is rendered
- WHEN viewed
- THEN it displays heading "Calculate Your BMI"
- AND 3 labeled inputs: Height, Weight, Age
- AND a "Calculate" button

#### Scenario: BMI layout
- GIVEN the BMI section is rendered
- WHEN viewed on desktop
- THEN the form fields are positioned on the right (30% padding-left)
- AND background is `#f5f5f5`
- AND inputs have no border, padding 13px 20px

### Requirement: Client Testimonials — 3 cards in a carousel

#### Scenario: Testimonials content
- GIVEN the client testimonials section is rendered
- WHEN viewed
- THEN it displays heading "Happy Client Says"
- AND 3 testimonial cards, each with a circular photo (70px), name, role, and quote paragraph

#### Scenario: Testimonials layout
- GIVEN the testimonials section is rendered
- WHEN viewed
- THEN cards are displayed in a carousel (3 visible, or stacked on mobile)
- AND card background is `#f5f5f5`, hover turns white with box-shadow

### Requirement: Friend CTA — photo-background with discount offer

#### Scenario: Friend CTA content
- GIVEN the friend CTA section is rendered
- WHEN viewed
- THEN it displays "Bring All Your Friends. Get 50% Discount!"
- AND a descriptive subtitle paragraph
- AND a "Join With Us" button

#### Scenario: Friend CTA layout
- GIVEN the friend CTA section is rendered
- WHEN viewed
- THEN it has a darkened background photo
- AND all text is white and centered
- AND padding matches `section-padding` (130px)

### Requirement: Footer — 3-column widget area + copyright bar

#### Scenario: Footer content
- GIVEN the footer is rendered
- WHEN viewed
- THEN it has 3 columns: About Us (heading + paragraph), Contact Us (heading + address + phone numbers), Newsletter (heading + email form)
- AND the email form has an input + "Subscribe" button
- AND a copyright bar below with social icons (4 circular icons) and credit

#### Scenario: Footer credit
- GIVEN the footer copyright bar is rendered
- WHEN viewed
- THEN it displays "Copyright © <year> All rights reserved" with a heart icon
- AND a credit link to https://www.componentdock.com/ ("Component Dock")

#### Scenario: Footer styling
- GIVEN the footer is rendered
- WHEN viewed
- THEN background is `#f5f5f5`
- AND phone numbers are in `#f61b55` (24px bold)
- AND social icons are 40px circles, `#222` on `#fff`, hover `#f61b55` on `#fff`
- AND the email input has `border-radius: 5px`

## Verification checklist

- [ ] `openspec/specs/template-gymnova/spec.md` validated (`npm run spec:validate`)
- [ ] App folder `apps/gymnova`, package `@free-react-templates/gymnova`,
      no ColorLib references in app code (grep for colorlib/fitzone in
      apps/gymnova)
- [ ] Footer links https://www.componentdock.com/
- [ ] Tests first, 100% coverage (Vitest + RTL) — `bash scripts/verify-app.sh gymnova`
- [ ] Section order matches the source: header → hero banner → about →
      featured classes → services → coaches → discount/newsletter → BMI
      calculator → client testimonials → friend CTA → footer
- [ ] Tokens in `src/index.css` `@theme`: `--color-brand: #f61b55`,
      `--color-body: #777`, `--color-heading: #222`, `--color-surface: #f5f5f5`;
      Google Fonts `<link>` in `index.html`: Roboto (400/500/700) +
      Rubik (400/500/700)
- [ ] Header: white bg, 5px border-radius, 5% horizontal margin, logo + 6
      nav links + "Book Now" button; mobile hamburger on `#f61b55` bg
- [ ] Hero: background photo with fallback `#b0b0b0`, right-aligned text
      "feel good / breath" in 150px/90px white uppercase, "Become a Member"
      button
- [ ] About: white bg, 2-column layout, heading + 2 paragraphs + "Learn More"
      button + image
- [ ] Featured Classes: `#f5f5f5` bg, 3 cards with dark hover overlay + "Details"
      button, white footer with title + paragraph
- [ ] Services: background photo with blue-tinted right overlay, right-aligned
      text, 3 service items with icons
- [ ] Coaches: 4 cards with dark hover overlay + 4 social icons, overlapping
      footer (`-50px` margin), name h5 + role h6
- [ ] Discount: background photo, "25%" white + "discount" red, email input +
      "Subscribe" button, centered white text
- [ ] BMI: `#f5f5f5` bg, "Calculate Your BMI" heading, 3 inputs (Height/
      Weight/Age) + "Calculate" button
- [ ] Testimonials: carousel with 3 cards, circular photo (70px), name + role
      + quote, `#f5f5f5` bg hover white
- [ ] Friend CTA: background photo, "Bring All Your Friends. Get 50% Discount!"
      + "Join With Us" button, centered white text
- [ ] Footer: `#f5f5f5` bg, 3-column widget area (About/Contact/Newsletter)
      + copyright bar with Component Dock link + 4 social icon circles
- [ ] Placeholder images via `https://picsum.photos/seed/gymnova-<n>/<w>/<h>`,
      subject-screened (hero, about, 3 features, service bg, 4 coach photos,
      discount bg, BMI image, testimonial photos, friend bg); icons from
      `lucide-react`
- [ ] PR description: source template, preview URL
      (`preview.colorlib.com/theme/fitzone/`), design tokens, diffs (name,
      placeholder images, React carousel instead of owl-carousel, React
      hamburger instead of jQuery, Component Dock footer credit)
