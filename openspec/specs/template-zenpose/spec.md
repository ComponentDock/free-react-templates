# Template: Zenpose (Yoga/Wellness Landing Page)

## Purpose

Zenpose is a single-page yoga/wellness website template in the free-react-templates
monorepo. It is a React recreation of the ColorLib free "YogaFun" website template
design (source: https://colorlib.com/wp/template/yogafun/), built under a DIFFERENT
name (**Zenpose** — evoking yoga zen + pose, matching the source's yoga studio theme)
per the monorepo naming mandate, with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "YogaFun" — Bootstrap 4 single-page yoga studio template
  with an olive/moss green (`#71774b`) brand accent, a full-width hero with video
  play button, a features grid (4 yoga concept cards flanking a center image),
  two alternating about sections, a 2x3 yoga classes thumbnail grid, owl carousel
  testimonials, a 3-column CTA band, a 2-column blog section, an email subscribe
  form, and a multi-column footer with social links. Demo brands itself "YogaFun";
  the recreation uses the NEW name **Zenpose**.
- **Preview DOM analyzed:** `https://preview.colorlib.com/theme/yogafun/`
  (HTTP 200). The `<title>` is "YogaFun — Website Template by Colorlib". Master
  stylesheet `css/style.css` (Bootstrap 4 + custom); libs: Bootstrap 4,
  Owl Carousel, jQuery Fancybox, Waypoints, Font Awesome, Flaticon. Google Fonts:
  Montserrat (headings, weight 900) + Oxygen (body).
- **Screenshot noted:** `https://colorlib.com/wp/wp-content/uploads/sites/2/yogafudn-free-template.jpg`
  (URL contains typo "yogafudn"). Shows a dark-themed yoga landing page with green
  accent, hero with video play button, and content sections below.

## Design tokens (from style.css)

- **Brand color:** `#71774b` (olive/moss green) — `.bg-primary`, `.btn-primary`,
  links, accents, active states. Hover: `#5b603c`. Active: `#535837`.
- **Dark:** `#343a40` (Bootstrap dark).
- **Body text:** `#212529` (near-black).
- **Light backgrounds:** `#f8f9fa` (`.bg-light`).
- **White:** `#fff`.
- **Heading color:** `#000` (`.heading` class).
- **Fonts:**
  - Body: `"Oxygen", sans-serif` (400, 700 weights).
  - Headings/accent: `"Montserrat", sans-serif` (weight 900).
- **Buttons:** `.btn-primary` — background `#71774b`, border-radius `0.2rem`
  (small/slightly rounded), white text. Hover darkens to `#5b603c`.
- **Video play button:** `.btn-play` — white circle `60px × 60px`,
  border-radius `50%`, centered play icon.
- **Navbar:** `.navbar-dark` — dark background, white brand text, translucent
  white nav links. Collapses to hamburger on mobile.
- **Features:** `.feature-1` — `padding: 30px`, `background: #f8f9fa`,
  icon in `text-primary` (#71774b), 3-column layout with center image.
- **Class thumbnails:** `.link-thumbnail` — overlay with icon + h3 text,
  hover reveals image zoom.
- **Testimonials:** `.block-33` — Owl Carousel, avatar image + name/role
  + blockquote text. `.nonloop-block-11` auto-loops.
- **CTA band:** `.bg-primary` (#71774b), 3-column icons with white text.
- **Blog:** 2-column layout with thumbnail + date + title + excerpt + readmore.
- **Readmore link:** `.readmore` — uppercase, `font-size: 0.9rem`,
  arrow icon on right, slides right on hover.
- **Subscribe:** Light background, centered form with email input + primary button.
- **Footer:** `.site-footer` — `padding: 7em 0`, dark background, 4-column
  layout (About, Contact Info, Quick Links, empty), social icons (Twitter,
  Facebook, LinkedIn, Instagram), copyright bar.

## Sections (top to bottom)

1. **Header/Nav** — Dark navbar with "Zenpose" brand left, nav links (Home,
   About, Classes dropdown, Blog, Contact) right, search icon. Collapses
   to hamburger on mobile.
2. **Hero** — Full-width background image (`picsum.photos/seed/zenpose-hero`),
   centered text: h1 "Lose Yourself In Ambience & Atmosphere", circular white
   play button (links to YouTube), "Watch Video" label below.
3. **Features** — 3-column layout: left column = 2 feature cards (Chakra, Lotus),
   center = large image, right column = 2 feature cards (Chakra 2, Yoga).
   Each card has a Flaticon icon (use lucide-react equivalents), h3 title,
   short description. Cards have `#f8f9fa` background.
4. **About 1** — Two-column: left = text with h2 "Do Yoga Today For Better
   Tomorrow", paragraph, readmore link; right = scaled image with frame border.
5. **About 2** (bg-light) — Two-column reversed: left = image, right = text
   with h2 "Perfect Yoga Style", paragraph, readmore link.
6. **Yoga Classes** — Centered h2 "Yoga Classes" + subtitle. 2×3 grid of
   thumbnail link cards (Yoga Barre, Yoga Core, Yoga For Health, Yoga For
   Beginners, Yoga for All, Yoga Restore). Each card overlays an icon +
   title on a background image; hover reveals the image.
7. **Testimonials** (bg-light) — Centered h2 "Testimonial". Owl Carousel with
   testimonial cards: avatar image, h2 name, role label, blockquote text.
   Auto-loops through 3–4 testimonials.
8. **CTA Band** (bg-primary #71774b) — 3-column icons: Chat With Us,
   Happy Customers, Fast Support. Each has icon + h3 + description, all
   white text on green background.
9. **Blog** — Centered h2 "Our Blog" + subtitle. 2-column layout of blog
   post cards: thumbnail image + date + h3 title + excerpt + readmore link.
10. **Subscribe** (bg-light) — Centered h2 "Subscribe", subtitle text,
    email input + primary "Subscribe" button in a form.
11. **Footer** — 4-column: About (description + social icons), Contact Info
    (address, phone, email), Quick Links (About, Terms, Disclaimers, Contact).
    Copyright bar at bottom with "Made with Component Dock" link.

## Requirements

### Feature: Zenpose template behaviour

Feature: Zenpose Yoga Studio Template
  As a visitor to the Zenpose yoga studio website
  I want to see a professional yoga studio landing page
  So that I can learn about classes and get in touch

#### Scenario: Header navigation

- **GIVEN** the page has loaded
- **THEN** the header displays the "Zenpose" brand on the left
- **AND** the navigation links "Home", "About", "Classes", "Blog", "Contact" are visible
- **AND** the navbar has a dark background with white text
- **AND** on mobile the hamburger menu toggle is visible

#### Scenario: Hero section

- **GIVEN** the page has loaded
- **THEN** a full-width hero background image is displayed
- **AND** the heading "Lose Yourself In Ambience & Atmosphere" is centered
- **AND** a circular white play button is visible
- **AND** the text "Watch Video" appears below the play button

#### Scenario: Features section

- **GIVEN** I scroll to the features section
- **THEN** a 3-column layout is displayed
- **AND** four feature cards are shown: Chakra, Lotus, Chakra 2, Yoga
- **AND** each card has an icon, title, and description
- **AND** a center image is displayed between the feature columns
- **AND** feature cards have a light gray (#f8f9fa) background

#### Scenario: About section 1

- **GIVEN** I scroll to the first about section
- **THEN** the heading "Do Yoga Today For Better Tomorrow" is displayed
- **AND** a descriptive paragraph is shown
- **AND** a "Read More" link with arrow icon is visible
- **AND** an image with frame border is displayed on the right

#### Scenario: About section 2

- **GIVEN** I scroll to the second about section
- **THEN** the section has a light gray background
- **AND** the heading "Perfect Yoga Style" is displayed
- **AND** an image is displayed on the left
- **AND** a "Read More" link with arrow icon is visible

#### Scenario: Yoga classes section

- **GIVEN** I scroll to the yoga classes section
- **THEN** the heading "Yoga Classes" is centered
- **AND** a subtitle paragraph is displayed
- **AND** a 2x3 grid of 6 class thumbnail cards is shown
- **AND** each card has a title: Yoga Barre, Yoga Core, Yoga For Health, Yoga For Beginners, Yoga for All, Yoga Restore
- **AND** each card has an overlay icon and background image
- **AND** hovering a card reveals the full image

#### Scenario: Testimonials section

- **GIVEN** I scroll to the testimonials section
- **THEN** the heading "Testimonial" is centered
- **AND** a carousel of testimonial cards is displayed
- **AND** each card shows an avatar image, name, role, and blockquote
- **AND** the carousel auto-loops through testimonials

#### Scenario: CTA band

- **GIVEN** I scroll to the CTA band
- **THEN** the section has an olive green (#71774b) background
- **AND** three columns are displayed: Chat With Us, Happy Customers, Fast Support
- **AND** each column has an icon, heading, and description in white text

#### Scenario: Blog section

- **GIVEN** I scroll to the blog section
- **THEN** the heading "Our Blog" is centered
- **AND** a subtitle paragraph is displayed
- **AND** two blog post cards are shown in a 2-column layout
- **AND** each card has a thumbnail, date, title, excerpt, and readmore link

#### Scenario: Subscribe section

- **GIVEN** I scroll to the subscribe section
- **THEN** the heading "Subscribe" is centered
- **AND** an email input field is displayed
- **AND** a "Subscribe" button is visible and clickable

#### Scenario: Footer

- **GIVEN** I scroll to the footer
- **THEN** an About section with description and social icons is displayed
- **AND** contact information (address, phone, email) is shown
- **AND** quick links (About, Terms, Disclaimers, Contact) are listed
- **AND** the copyright bar contains a link to Component Dock

#### Scenario: Responsive layout

- **GIVEN** the viewport width is less than 768px
- **THEN** the navigation collapses to a hamburger menu
- **AND** feature cards stack vertically
- **AND** the 2x3 class grid becomes a single column
- **AND** the footer columns stack vertically
- **AND** all sections remain readable and accessible

## Verification checklist

- [ ] All 11 sections render in correct top-to-bottom order
- [ ] Hero background image loads with centered text and play button
- [ ] Feature cards display with correct icons, titles, descriptions in 3-column layout
- [ ] Two about sections alternate layout (text-left/image-right, then reversed)
- [ ] Yoga classes 2x3 grid renders with overlay effect on hover
- [ ] Testimonial carousel auto-loops between cards
- [ ] CTA band shows 3 columns on olive green background
- [ ] Blog section displays 2 post cards
- [ ] Subscribe form has email input and button
- [ ] Footer links to ComponentDock
- [ ] Mobile responsive at all breakpoints
- [ ] No ColorLib references in app code
- [ ] All placeholder images use picsum.photos with deterministic seeds
- [ ] Fonts loaded: Montserrat (headings) + Oxygen (body)
- [ ] Brand color `#71774b` used consistently for primary buttons and accents
- [ ] Small rounded buttons with `border-radius: 0.2rem`
- [ ] 100% test coverage
- [ ] CNAME set to `zenpose.free.componentdock.com`
