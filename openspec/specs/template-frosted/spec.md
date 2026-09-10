# Template: Frosted (Cake Shop Landing)

## Purpose

Frosted is a single-page cake-shop landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Cakes" free template (source:
https://colorlib.com/wp/template/cakes/), built under a DIFFERENT name
(**Frosted**), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

The original is a warm, bakery-themed landing page with a vivid orange-red
accent (`#F04506`), serif+cursive layered headings, product cards with
asymmetric border-radius, a video play section, testimonial carousel,
Instagram gallery strip, and a multi-column footer. Frosted recreates that
structure section-for-section with matching layout, colors, typography,
and content types (no ColorLib assets copied).

## Design reference (replication findings)

- **Original:** ColorLib "Cakes" — free cake/bakery shop website template
  (source: https://colorlib.com/wp/template/cakes/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/cakes/`
  (HTTP 200, ~30KB HTML) + stylesheet `assets/css/style.css` (~60KB).
  The rendered DOM is the reference below; the TEMPLATES.md screenshot
  (`cakes-colorlib-template.jpg`) confirms the visual design (warm peach
  tones, circular hero imagery, layered script heading).
- **Section order (1:1):**
  1. Header (`header-area`): logo + sticky nav (Home, Product, About, Blog
     submenu with Blog/Blog Details/Element, Contact) + phone number link
     - "Order Online" CTA button. Mobile hamburger menu on small screens.
  2. Hero slider (`slider-area slider-bg1`): full-width background image
     with decorative "Delicious" text in Lobster cursive (huge, faded
     orange-red at 6% opacity as watermark behind headline), main heading
     "Delicious Cake For Everyone" (Quicksand bold), paragraph copy, and
     "Explore Menu" pill button. Animated hero shape at bottom-left.
  3. Popular Items (`popular-items`): "Most Popular" subtitle (orange,
     letter-spaced), "Our Exclusive Cakes" heading, 3-column carousel of
     product cards — each card has: product image (with hover zoom-out),
     product name (h4), description paragraph, "$20 | Order Now" pill
     button. Card bg `#FFF5F2`, asymmetric border-radius `0 0 60px 0`
     (bottom-right corner rounded). Carousel has next/prev arrows.
  4. About (`support-company-area`): split 6/5 layout — left: product
     image; right: "Fresh & Delicious" subtitle, "A Simple Way to Eating
     Delicious" heading, paragraph, "Our Story" outlined button.
  5. Services/Features (`our-services`): "Our Features" subtitle, "Quality
     is Our First Priority" heading, 3-column icon cards (each: SVG icon,
     title, description paragraph). Decorative bounce-animated shape at
     bottom-right. **Note:** the original uses leftover pet-boarding copy
     for the service cards — recreation should use cake-appropriate copy.
  6. Video area (`video-area section-bg2`): full-width background image
     with centered YouTube video play button (popup video modal). Dark
     overlay treatment.
  7. Testimonials (`client-say`): "Testimonial" subtitle, "What Customers
     Say" heading, horizontal carousel of testimonial cards — each card
     has: quote text, founder image (circular), founder name, role title.
     Cards have generous padding.
  8. Instagram gallery (`instagram-area`): 6-image horizontal strip with
     hover overlay showing Instagram icon (ti-instagram). Uses
     owl-carousel with loop.
  9. Footer (`footer-wrapper`): warm off-white bg `#FFF7F3`, 4-column
     layout — logo + description + social icons (Twitter, Facebook,
     LinkedIn, Pinterest), Quick Links column, product-type column
     (Blackforest, etc.), Contact column with address and phone number.
     Footer bottom with copyright line and heart icon.
- **Design tokens extracted from `assets/css/style.css`:**
  - Brand color: **#F04506** (vivid orange-red) — used for buttons,
    underlines, hover states, section subtitles, social icons, back-to-top
    button, preloader accent, date badges, footer links.
  - Secondary brand: **#d83e06** (darker orange-red, used in button
    gradient `linear-gradient(to left, #F04506, #d83e06, #F04506)`).
  - Headings: **#000000** (pure black).
  - Body text: **#5E5E5E** (dark gray) for paragraphs, footer text,
    nav links.
  - Light card bg: **#FFF5F2** (pale peach, for product cards).
  - Footer bg: **#FFF7F3** (warm off-white).
  - Preloader bg: **#f7f7f7** (light gray).
  - Fonts via Google Fonts:
    - Body: **"DM Sans"**, sans-serif (16px, normal weight).
    - Headings: **"Quicksand"**, sans-serif (weight 300-700).
    - Decorative/watermark: **"Lobster"**, cursive (used for hero
      "Delicious" overlay text).
  - Buttons (`.btn`): border-radius **30px** (pill shape), padding
    13px 37px, white text, gradient bg `linear-gradient(to left, #F04506,
#d83e06, #F04506)`, box-shadow `0px 17px 27px rgba(240,69,6,0.27)`,
    background-size 200% with hover slide animation.
  - Outlined button (`.post-btn` / `.boxed-btn`): transparent bg, 1px
    solid `#F04506` border, `#F04506` text, letter-spacing 3px,
    uppercase; hover fills solid `#F04506` with white text.
  - Product cards (`.single-items`): bg `#FFF5F2`, padding 20px,
    border-radius `0 0 60px 0` (bottom-right 60px), image container
    border-radius `0 0 40px 0`.
  - Section padding: 110-120px top and bottom (`.section-padding40`).
  - Section subtitle: orange `#F04506`, 16px, letter-spacing 0.2em,
    DM Sans font.
  - Section heading: 44px, weight 700, Quicksand, black.
  - Testimonial founder image: circular, with name span + role p.
  - Instagram items: hover shows icon overlay + dark overlay ::before.
  - Sticky header: white bg, shadow on scroll, submenu bg `#F04506`.
  - Back-to-top: `#F04506` circle, 50px, fixed bottom-right.
  - Footer social icons: `#F04506`, 22px, hover lifts -5px.
  - Footer phone: `#F04506`, 24px, DM Sans.
- **Visual design (from screenshot analysis):** Warm, artisanal, and
  appetizing aesthetic — soft peach/cream base, high-quality food
  photography, layered Lobster cursive + Quicksand bold headings, circular
  hero imagery, pill-shaped orange-red CTA buttons, generous whitespace.
  The template feels premium but approachable, like a neighborhood bakery.
- **Recreation decisions:** repo-standard Navbar (site name "Frosted",
  Home link, dark-mode toggle) + "Order Online" CTA; hero = seeded picsum
  photo with layered Lobster cursive "Delicious" watermark + headline +
  "Explore Menu" pill button; popular items as a product card grid with
  lucide icons for cart; about section with image + blurb + outlined CTA;
  features section with lucide icons; video area with play button;
  testimonials with avatar initials; Instagram gallery with seeded photos;
  footer with newsletter-style columns; all images picsum-seeded
  (`picsum.photos/seed/frosted-N/w/h`); Google Fonts via `<link>`.

Frosted lives in `apps/frosted` and uses shared components from
`packages/ui` (Button, ButtonLink, Card, Badge, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a sticky top navigation bar with the site name
"Frosted", navigation links (Home, Product, About, Blog, Contact), a
phone number link, and an "Order Online" CTA button. On mobile, a
hamburger menu replaces the nav links.

#### Scenario: Navbar content

- **GIVEN** the Frosted page is rendered
- **WHEN** the user inspects the navigation bar
- **THEN** the bar SHALL display the site name "Frosted" as a logo link
- **AND** it SHALL show nav links: Home, Product, About, Blog, Contact
- **AND** it SHALL show a phone number link (+10 56 745 3095)
- **AND** it SHALL show an "Order Online" CTA button
- **AND** the bar SHALL become sticky (fixed at top) on scroll

#### Scenario: Mobile menu

- **GIVEN** the viewport is less than 1024px wide
- **WHEN** the page renders
- **THEN** the nav links SHALL be hidden
- **AND** a hamburger menu button SHALL be visible
- **AND** clicking it SHALL toggle a mobile menu panel

### Requirement: Hero section

The system SHALL render a full-width hero section with a background image,
a decorative cursive text overlay, a main heading, descriptive paragraph,
and a CTA button.

#### Scenario: Hero content

- **GIVEN** the Frosted page is rendered
- **WHEN** the user views the hero section
- **THEN** it SHALL display a decorative cursive "Delicious" text overlay
  (Lobster font, large, faded orange-red)
- **AND** it SHALL show the heading "Delicious Cake For Everyone"
- **AND** it SHALL show a descriptive paragraph
- **AND** it SHALL show an "Explore Menu" pill button

#### Scenario: Hero background

- **GIVEN** the Frosted page is rendered
- **WHEN** the hero section is visible
- **THEN** the background SHALL be a full-width image (seeded picsum)
- **AND** there SHALL be an animated decorative shape at the bottom-left

### Requirement: Popular items section

The system SHALL render a product showcase section with a subtitle,
heading, and a grid/carousel of product cards, each with an image,
name, description, and order button.

#### Scenario: Section heading

- **GIVEN** the Frosted page is rendered
- **WHEN** the popular items section is visible
- **THEN** it SHALL display "Most Popular" as the subtitle (orange,
  letter-spaced)
- **AND** "Our Exclusive Cakes" as the main heading

#### Scenario: Product cards

- **GIVEN** the popular items section is rendered
- **WHEN** the user views the product cards
- **THEN** there SHALL be at least 3 product cards visible
- **AND** each card SHALL have: a product image, a product name, a
  description, and a "$20 | Order Now" button
- **AND** the cards SHALL have a light peach background (`#FFF5F2`)
- **AND** the cards SHALL have an asymmetric border-radius (bottom-right
  corner rounded to 60px)

#### Scenario: Product card hover

- **GIVEN** a product card is visible
- **WHEN** the user hovers over a card
- **THEN** the product image SHALL scale slightly (zoom effect)
- **AND** the order button SHALL animate upward

### Requirement: About section

The system SHALL render a split-layout section with a product image on
the left and descriptive text + CTA on the right.

#### Scenario: About content

- **GIVEN** the Frosted page is rendered
- **WHEN** the about section is visible
- **THEN** it SHALL show "Fresh & Delicious" as the subtitle
- **AND** "A Simple Way to Eating Delicious" as the heading
- **AND** a descriptive paragraph
- **AND** an "Our Story" outlined button (transparent bg, orange border)

### Requirement: Features section

The system SHALL render a features/services section with a subtitle,
heading, and a 3-column grid of feature cards, each with an icon,
title, and description.

#### Scenario: Features content

- **GIVEN** the Frosted page is rendered
- **WHEN** the features section is visible
- **THEN** it SHALL display "Our Features" as the subtitle
- **AND** "Quality is Our First Priority" as the heading
- **AND** there SHALL be 3 feature cards in a row

#### Scenario: Feature card structure

- **GIVEN** a feature card is rendered
- **WHEN** the user views it
- **THEN** it SHALL have a centered icon (lucide-react), a title, and
  a description paragraph

### Requirement: Video section

The system SHALL render a full-width video section with a background image
and a centered play button that triggers a video popup.

#### Scenario: Video play button

- **GIVEN** the Frosted page is rendered
- **WHEN** the video section is visible
- **THEN** it SHALL display a circular play button centered on a
  background image
- **AND** clicking the play button SHALL open a video modal/embed

### Requirement: Testimonials section

The system SHALL render a testimonials section with a subtitle, heading,
and a carousel of testimonial cards.

#### Scenario: Testimonials content

- **GIVEN** the Frosted page is rendered
- **WHEN** the testimonials section is visible
- **THEN** it SHALL display "Testimonial" as the subtitle
- **AND** "What Customers Say" as the heading
- **AND** there SHALL be at least 2 testimonial cards visible

#### Scenario: Testimonial card structure

- **GIVEN** a testimonial card is rendered
- **WHEN** the user views it
- **THEN** it SHALL have a quote text, a founder avatar image, a
  founder name, and a role/title

### Requirement: Instagram gallery section

The system SHALL render a horizontal strip of images with Instagram
overlay icons on hover.

#### Scenario: Instagram gallery content

- **GIVEN** the Frosted page is rendered
- **WHEN** the Instagram gallery section is visible
- **THEN** it SHALL display at least 5 images in a horizontal row
- **AND** each image SHALL show an Instagram icon overlay on hover

### Requirement: Footer

The system SHALL render a multi-column footer with logo, description,
social links, navigation links, product links, and contact info.

#### Scenario: Footer layout

- **GIVEN** the Frosted page is rendered
- **WHEN** the footer is visible
- **THEN** it SHALL have 4 columns: logo+description+social, Quick Links,
  product types, Contact Us
- **AND** the footer background SHALL be warm off-white (`#FFF7F3`)

#### Scenario: Footer social icons

- **GIVEN** the footer is rendered
- **WHEN** the user views the social links
- **THEN** there SHALL be icons for Twitter, Facebook, LinkedIn, and
  Pinterest
- **AND** the icons SHALL be orange-red (`#F04506`)

#### Scenario: Footer bottom

- **GIVEN** the footer is rendered
- **WHEN** the user scrolls to the bottom
- **THEN** there SHALL be a copyright line with a heart icon
- **AND** the footer SHALL include a link to
  `https://www.componentdock.com/` (branded "Component Dock")

## Verification checklist

- [ ] Section order matches original 1:1 (header → hero → popular items
      → about → features → video → testimonials → instagram → footer)
- [ ] Brand color `#F04506` used for buttons, subtitles, hover states,
      social icons
- [ ] Fonts: DM Sans (body), Quicksand (headings), Lobster (decorative)
      loaded via Google Fonts `<link>`
- [ ] Product cards have `#FFF5F2` bg and `0 0 60px 0` border-radius
- [ ] Buttons are pill-shaped (border-radius 30px) with gradient bg
- [ ] Hero has Lobster cursive "Delicious" watermark overlay
- [ ] Footer includes Component Dock link
- [ ] No ColorLib references in app code (comments, URLs, names)
- [ ] All images use seeded picsum URLs
- [ ] 100% test coverage (lines, functions, branches, statements)
- [ ] `npm run spec:validate` passes
- [ ] `scripts/verify-app.sh frosted` passes (typecheck → lint →
      tests → build)
