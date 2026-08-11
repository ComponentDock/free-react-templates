# Template: Solo (Personal Portfolio / Resume)

## Purpose

Solo is a single-page personal-portfolio / resume template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Personal" website template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Personal" — personal portfolio / CV site for a
  freelancer (source: https://colorlib.com/wp/template/personal/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/personal/
  (HTTP 200, full rendered DOM + `css/main.css` (67KB) + `css/linearicons.css`
  extracted 2026-08-12 during prep). The TEMPLATES.md screenshot
  (`personal-free-template.jpg`, 1200×946) was also viewed (browser) and
  confirms the design: a clean, minimal, high-whitespace personal site —
  white/very-light-grey background, bold uppercase Poppins headlines, and a
  single bright blue-violet accent (#8490ff) plus the signature
  #8490ff → #62bdfc gradient used on buttons, the stats band, the client
  logo band, and pricing-card hover.
- **Section order (1:1):**
  1. Header (`#header`, `position: fixed`, bg #fff, `.main-menu` padding
     20px 0; `.header-scrolled` adds shadow
     `-21.213px 21.213px 30px 0px rgba(0,0,0,0.2)`): logo "Personal" →
     **Solo** (blue diamond/square icon + wordmark, uppercase) + links Home,
     About, Services, Portfolio, Pricing, Blog (dropdown), Pages (dropdown),
     Contact — the landing page shows the flat links plus the two dropdowns
     (Blog: Blog Home, Blog Single; Pages: Elements, Level 2 → Item One,
     Item Two).
  2. Banner hero (`banner-area`, bg #f9f9ff, `.fullscreen` height 750px,
     `row align-items-center justify-content-between`): left
     `.banner-left` — h6 "This is me" (uppercase, weight 400,
     letter-spacing 2px), h1 "Philip Gilbert" (60px, uppercase; 30px <992px;
     margin 20px 0), p (Dickens Pattern copy), `<a class="primary-btn
text-uppercase">discover now</a>`; right `.banner-right` — portrait
     photo (`img/hero-img.png`) framed by a light-blue square border behind
     the subject (screenshot-verified).
  3. About (`home-about-area pt-120`): left `.home-about-left` photo
     (`img/about-img.png`), right `.home-about-right` — h6 "About Me"
     (uppercase, weight 400, margin-bottom 30px), h1 "Personal Details"
     (margin-bottom 40px), two paragraphs (Coca Cola copy), `primary-btn
text-uppercase` "view full details".
  4. Services (`services-area section-gap`): centered title
     `.title.text-center` — h1 "My Offered Services" + p; 3 columns
     `.single-services` (text-center, margin-top 60px): linearicons icon
     (35px, color #222; hover → gradient bg + white icon), h4 title (margin
     30px 0 20px), p. Titles: **Web Design**, **Web Development**,
     **Photography**.
  5. Facts (`facts-area section-gap`, **gradient bg
     #8490ff→#62bdfc**): 4 counters — **2536** Projects Completed,
     **6784** Happy Clients, **2239** Cups of Coffee, **435** Real
     Professionals (white numerals + labels).
  6. Portfolio (`portfolio-area section-gap`): centered title "Our Latest
     Featured Projects" + p; `.filters` buttons All / Vector / Raster /
     UI/UX / Printing (active = gradient); 6 image items (p1–p6, each with
     hover overlay + centered preview icon, opens in a lightbox) with
     category labels ("2D Vinyl Design", "Vector", "Creative Poster
     Design", "Agency", "Embosed Logo Design", "Portal", "3D Helmet
     Design", "Raster"); centered `primary-btn` "View More".
  7. Testimonials (`testimonial-area section-gap`, bg #f9f9ff): centered
     title "Client's Feedback About Me" + p; carousel of white cards
     `.single-testimonial` (padding 25px 30px 12px): quote p + author row —
     round avatar (`img/elements/user1.png` / user2.png), name
     **Harriet Maxwell**, role "CEO at Google" (second: **Carolyn Craig** /
     "CEO at Facebook").
  8. Pricing (`price-area section-gap`): centered title "Choose Your Plan"
     - p; 3 cards `.single-price` (bg #f9f9ff, padding 40px 20px,
       text-center): `.package-no` "01" + h4 "Economy", 3 feature rows
       (Secure Online Transfer, Unlimited Styles for interface, Reliable
       Customer Service), price "£199.00", `primary-btn` "Buy Now"; cards 02
       **Business** £299.00 and 03 **Premium** £399.00; hover → gradient bg +
       white text + button turns white.
  9. Recent blog (`recent-blog-area section-gap`, bg #f9f9ff): header
     `col-md-8 pb-30 header-text` — h1 "Latest posts from our blog" + p; 3
     cards `.single-recent-blog col-lg-4`: thumb image (b1–b3.jpg) →
     author row (`.bottom` flex: `img/user.png` avatar + "Mark Wiens" +
     meta "13th Dec ♥ 15 💬 04") → h4 title → p excerpt → `primary-btn`
     "View More". Titles: "Break Through Self Doubt And Fear", "Portable
     Fashion for young women", "Do Dreams Serve As A Premonition".
  10. Brands (`brands-area`, **gradient bg**): carousel
      `active-brand-carusel` of 6 logo images (l1–l6) in `.col
single-brand` cells.
  11. Footer (`footer-area section-gap`, bg **#04091e**): 3 widgets —
      **About Me** (h4 white + p + copyright "Copyright © All rights
      reserved | This template is made with ♥ by ColorLib"), **Newsletter**
      ("Stay updated with our latest trends": email input + send button),
      **Follow Me** ("Let us be social": 5 circular social icons). Below:
      `.footer-social` row.
- **Design tokens extracted from `main.css` + computed styles:**
  - Primary **#8490ff** (soft periwinkle blue-violet) — solid buttons,
    active filter, hover state of `.single-price .primary-btn`.
  - Brand gradient **`linear-gradient(0deg, #8490ff 0%, #62bdfc 100%)`** —
    banner + about buttons, `.facts-area` background, `.brands-area`
    background, `.single-price:hover` background, service-icon hover
    background, portfolio overlay.
  - Light section band **#f9f9ff** — banner, testimonials, pricing cards,
    recent-blog.
  - Body text **#777777**, font **"Poppins", sans-serif**, 14px, weight 300,
    line-height 1.625em.
  - Headings **#222222** Poppins: h1 36px, h2 30px, h3 24px, h4 18px, h5
    16px, h6 14px. Hero h1 60px uppercase (30px <992px); hero h6 uppercase
    weight 400 letter-spacing 2px.
  - Buttons `.primary-btn`: bg #8490ff (banner/about variants: gradient),
    line-height 42px, padding 0 30px, border none, white, weight 500,
    uppercase, subtle rounding (radius 0–3px), hover slightly darker.
  - Footer bg **#04091e** (near-black navy), widget h4 white weight 500.
  - Section rhythm: `.section-gap { padding: 120px 0 }`; header fixed white
    with scrolled shadow `-21.213px 21.213px 30px 0px rgba(0,0,0,0.2)`.
  - Portfolio hover overlay: gradient + white preview icon (magnific-popup
    lightbox on the original → SPA modal or dead link).
- **Visual design (screenshot `personal-free-template.jpg`):** clean,
  minimalist personal-portfolio aesthetic — white background, generous
  whitespace, split hero (text left / cutout portrait right framed by a
  light-blue square border), uppercase extra-bold name headline, flat
  blue-violet rectangular CTA with white text; below, the About section
  mirrors the layout (photo left / text right). Bright single-accent palette
  on white + #f9f9ff bands; the gradient bands (facts, brands) and dark
  #04091e footer provide the contrast rhythm.
- **Recreation decisions:** hero/about portraits → seeded picsum placeholders
  (`picsum.photos/seed/solo-<n>/<w>/<h>`); linearicons → lucide-react
  (Code/Globe for Web Development, Monitor/PenTool for Web Design, Camera for
  Photography; Heart, MessageCircle for blog meta; ArrowRight for buttons;
  social icons Facebook, Twitter, Instagram, Linkedin for Follow Me); client
  logos → styled text wordmarks (bold, uppercase, white/translucent) since
  logo assets must not be copied; Poppins 300/400/500/600 via Google Fonts
  `<link>` in `index.html`; counters animate up on scroll (simple
  count-up hook) to mirror the original's counter-up script; the two nav
  dropdowns become disclosure menus or simple link groups (Blog → Blog Home,
  Blog Single; Pages → Elements, Level 2); owl-carousels (testimonials,
  brands) → lightweight auto-advancing carousels / scroll-snap strips;
  portfolio filter buttons filter the 6 items client-side; original Lorem
  Ipsum copy paraphrased keeping the same content kinds; footer keeps the
  "made with ♥ by ColorLib" credit; no assets copied.

Solo lives in `apps/solo` and uses shared components from `packages/ui`
(Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Header navigation

The system SHALL render a fixed white header with the site name "Solo" and
navigation links, gaining a shadow once the page is scrolled.

#### Scenario: Header content

- **GIVEN** the Solo page is rendered
- **WHEN** the page loads
- **THEN** the header SHALL show the site name "Solo" (uppercase wordmark
  with a small primary-color square/diamond icon) and links to Home, About,
  Services, Portfolio, Pricing, Blog, and Contact
- **AND** the header SHALL be fixed to the top with a white background

#### Scenario: Header on scroll

- **GIVEN** the page is rendered
- **WHEN** the user scrolls down the page
- **THEN** the header SHALL display a soft drop shadow

#### Scenario: Blog and Pages dropdowns

- **GIVEN** the header is rendered
- **WHEN** the user activates the Blog or Pages link
- **THEN** a dropdown SHALL show its sub-links (Blog: Blog Home, Blog
  Single; Pages: Elements, Level 2)

### Requirement: Banner hero

The system SHALL render a split hero on a #f9f9ff background with an
eyebrow line, a large uppercase name headline, an intro paragraph, a CTA
button, and a framed portrait photo on the right.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero section is displayed
- **THEN** it SHALL show the eyebrow "This is me" in uppercase letters with
  wide letter spacing
- **AND** it SHALL show the headline "Solo" (placeholder name, 60px
  uppercase, bold) — or an equivalent personal name — with an intro
  paragraph and a "Discover Now" button
- **AND** it SHALL show a portrait image on the right framed by a
  light-blue square border behind the subject

#### Scenario: Hero CTA

- **GIVEN** the hero section is displayed
- **WHEN** the user activates the "Discover Now" button
- **THEN** the page SHALL scroll to the About section (or the button SHALL
  link to a section anchor)

### Requirement: About section

The system SHALL render an about section with a photo on the left and an
"About Me" / "Personal Details" heading, two paragraphs, and a "View Full
Details" button on the right.

#### Scenario: About content

- **GIVEN** the page is rendered
- **WHEN** the about section is displayed
- **THEN** it SHALL show the eyebrow "About Me" and the heading "Personal
  Details" in uppercase
- **AND** it SHALL show a photo on the left and two descriptive paragraphs
  with a "View Full Details" button

### Requirement: Services

The system SHALL render a white services section with a centered title and
three columns, each with an icon, a bold title, and a description; the icon
SHALL invert to a gradient background on hover.

#### Scenario: Services content

- **GIVEN** the page is rendered
- **WHEN** the services section is displayed
- **THEN** it SHALL show the heading "My Offered Services" with a lead
  paragraph
- **AND** it SHALL show three cards titled "Web Design", "Web Development",
  and "Photography", each with a dark icon, a bold title, and a description

#### Scenario: Service icon hover

- **GIVEN** a service card is displayed
- **WHEN** the user hovers over its icon
- **THEN** the icon SHALL fill with the brand gradient and turn white

### Requirement: Facts counter band

The system SHALL render a band with the brand gradient background and four
statistics with large numerals and labels.

#### Scenario: Facts content

- **GIVEN** the page is rendered
- **WHEN** the facts band is displayed
- **THEN** it SHALL show four statistics: Projects Completed, Happy
  Clients, Cups of Coffee, and Real Professionals with numeric values on
  the gradient background
- **AND** the numerals SHALL count up when scrolled into view

### Requirement: Portfolio

The system SHALL render a portfolio section with filter buttons and six
image items that show an overlay with a preview icon on hover.

#### Scenario: Portfolio content

- **GIVEN** the page is rendered
- **WHEN** the portfolio section is displayed
- **THEN** it SHALL show the heading "Our Latest Featured Projects" with a
  lead paragraph
- **AND** it SHALL show filter buttons (All, Vector, Raster, UI/UX,
  Printing) and six project images with category labels
- **AND** hovering an item SHALL show a gradient overlay with a centered
  preview icon

#### Scenario: Portfolio filtering

- **GIVEN** the portfolio section is displayed
- **WHEN** the user activates a filter button
- **THEN** only items of that category SHALL remain visible (or the items
  SHALL visibly re-sort), with the active filter highlighted

### Requirement: Testimonials

The system SHALL render a #f9f9ff testimonials section with a centered
title and a carousel of white quote cards, each with an avatar, name, and
role.

#### Scenario: Testimonial content

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL show the heading "Client's Feedback About Me" with a
  lead paragraph
- **AND** it SHALL show a carousel of at least two cards, each with a
  quote, a round avatar, a name, and a role (e.g. "Harriet Maxwell",
  "CEO at Google")

### Requirement: Pricing

The system SHALL render a pricing section with three cards (Economy,
Business, Premium) that each list features and a price, and SHALL invert to
the brand gradient on hover.

#### Scenario: Pricing content

- **GIVEN** the page is rendered
- **WHEN** the pricing section is displayed
- **THEN** it SHALL show the heading "Choose Your Plan" with a lead
  paragraph
- **AND** it SHALL show three cards numbered 01, 02, 03 titled "Economy",
  "Business", and "Premium" with three feature rows, a price (£199.00 /
  £299.00 / £399.00), and a "Buy Now" button

#### Scenario: Pricing card hover

- **GIVEN** a pricing card is displayed
- **WHEN** the user hovers over it
- **THEN** the card SHALL fill with the brand gradient and its text and
  button SHALL turn white

### Requirement: Recent blog

The system SHALL render a #f9f9ff blog section with a title and three post
cards, each with an image, an author row, a title, an excerpt, and a "View
More" button.

#### Scenario: Blog content

- **GIVEN** the page is rendered
- **WHEN** the blog section is displayed
- **THEN** it SHALL show the heading "Latest posts from our blog" with a
  lead paragraph
- **AND** it SHALL show three cards, each with an image, an author row
  (avatar + name + meta with heart and comment counts), a bold title, an
  excerpt, and a "View More" button

### Requirement: Client brands band

The system SHALL render a band with the brand gradient background showing a
row of client logo placeholders.

#### Scenario: Brands content

- **GIVEN** the page is rendered
- **WHEN** the brands band is displayed
- **THEN** it SHALL show six equal-width client logo placeholders on the
  gradient background

### Requirement: Footer

The system SHALL render a dark #04091e footer with three widgets: About Me
(text + copyright crediting ColorLib), Newsletter (email input + send
button), and Follow Me (social icon links).

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the "About Me" widget with a short description and
  a copyright line crediting the template source with a heart icon
- **AND** it SHALL show a "Newsletter" widget with an email input and a
  send button
- **AND** it SHALL show a "Follow Me" widget with social icon links

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Solo app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the header, hero, about, services, facts,
  portfolio, testimonials, pricing, blog, brands, and footer in order
- **AND** the document title SHALL be "Solo — Personal Portfolio Template"

## Verification checklist

- [ ] `npm run spec:validate` passes for this spec
- [ ] App typechecks (`npm run typecheck -w @free-react-templates/solo`)
- [ ] Tests at 100% coverage (lines/functions/branches/statements) for the app
- [ ] Build succeeds (`npm run build -w @free-react-templates/solo`)
- [ ] Section order matches the reference 1:1 (header → hero → about → services → facts → portfolio → testimonials → pricing → blog → brands → footer)
- [ ] Design tokens from the reference used in `@theme` (primary #8490ff, gradient #8490ff→#62bdfc, light band #f9f9ff, body #777777, headings #222222, footer #04091e; Poppins Google Font)
- [ ] Header: fixed white, scrolled shadow, "Solo" wordmark with primary-color icon, links + Blog/Pages dropdowns
- [ ] Hero: #f9f9ff split hero, uppercase "This is me" eyebrow, 60px uppercase headline, intro paragraph, gradient "Discover Now" button, framed portrait on the right
- [ ] About: photo left, "About Me"/"Personal Details" right, two paragraphs + "View Full Details" button
- [ ] Services: centered "My Offered Services" title, 3 cards (Web Design, Web Development, Photography) with dark icons that invert to gradient on hover
- [ ] Facts: gradient band with 4 count-up statistics
- [ ] Portfolio: filters (All/Vector/Raster/UI/UX/Printing), 6 items with gradient hover overlay + preview icon, "View More" button
- [ ] Testimonials: #f9f9ff bg, carousel of white quote cards with avatar + name + role
- [ ] Pricing: 3 cards (01 Economy £199 / 02 Business £299 / 03 Premium £399), hover → gradient + white
- [ ] Blog: #f9f9ff bg, 3 post cards with author row + meta + "View More"
- [ ] Brands: gradient band with 6 logo placeholders
- [ ] Footer: #04091e, About Me + Newsletter + Follow Me widgets, heart-credit to ColorLib
