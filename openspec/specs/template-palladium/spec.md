# Template: Palladium (Business / SaaS)

## Purpose

Palladium is a single-page business/SaaS company website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Whitespace" design (see TEMPLATES.md, line 2578), built under
a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript. "Palladium" is a NEW original name — the ColorLib source name is
never reused in app code.

The original is a business-agency landing page: a dark navbar (logo left, nav
links right: Home, About, Work, Pricing, Blog, Contact); a split hero — dark
left half with white "We Help to Build You the Product" headline, "Business
Solution" subtext, and yellow "Get in touch" CTA button, right half showing a
full-height team-photo/video background; a white "What We Can Do for You"
about section with right-aligned image and a list of four services (Market
Research, Financial Services, Online Marketing, 24/7 Support) with circle icons;
a 4-column services grid (Business Strategy, Data Analysis, Graphic Design,
Creative) on white; a parallax counter/stats section with background image
showing 4 stat blocks (2000+ Done Works, etc.) and "Interesting Facts" heading;
a 2×3 project portfolio grid with hover overlay and arrow-CTA buttons; a
testimonials carousel with circular user photos, quote marks, name + role;
a 3-column blog/case-study card grid with image, meta, and title; a 4-tier
pricing section on light gray (Free $0, Startup $19, Premium $49, Enterprise
$99); a partner logo strip (5 logos); and a dark footer (brand column with
social icons, Useful Links, Quick Links, Contact Us columns, copyright bar).
Palladium recreates that structure section-for-section with matching layout,
colors, typography, and content types (no ColorLib assets copied).

## Design reference (replication findings)

- **Original:** ColorLib "Whitespace" — free business website template
  (source: https://colorlib.com/wp/template/whitespace/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/whitespace/`
  (HTTP 200, ~38.6KB; `<title>` "Whitespace - Free Bootstrap 4 Template by
  Colorlib") + stylesheet `css/style.css` (~73.6KB, SCSS-compiled) plus
  Bootstrap 4, owl-carousel, animate.css, AOS, magnific-popup, flaticon,
  icomoon. The page was rendered in a browser and inspected visually via
  screenshots (computed styles verified: hero bg, header, footer, buttons).
  The TEMPLATES.md screenshot (`whitespace-free-template.jpg`, 1200×946,
  includes browser chrome at the very top) confirms the design: split hero
  with dark left panel and team-photo right, dark navbar, white content
  sections, light gray pricing bg, dark footer. Overall aesthetic: clean,
  corporate, high-contrast — dark charcoal `#1d2124` + white `#fff` + bright
  yellow accent `#ecc503`, Poppins type, mix of rectangular and pill shapes.
- **Section order (1:1, from the live DOM):**
  1. `nav#ftco-navbar.navbar-dark.bg-dark`: dark bg, brand "Whitespace" left,
     nav links right (Home, About, Work, Pricing, Blog, Contact). Sticky
     navbar, toggler for mobile.
  2. `section.hero-wrap.d-flex`: split layout — `.forth` (dark bg, white text:
     "WELCOME" subheading with yellow underline, h1 "We Help to Build You the
     Product", h2 "Business Solution", "Get in touch" yellow button) + `.third`
     (full-height background image/video area).
  3. `section.ftco-section.ftco-no-pt.ftco-no-pb`: "PROVIDING" subheading +
     "What We Can Do for You" heading, right-aligned photo, 4 service items
     (Market Research, Financial Services, Online Marketing, 24/7 Support)
     each with a circle icon, text-right layout.
  4. `section.ftco-section.ftco-services`: 4-column grid on white — Business
     Strategy, Data Analysis, Graphic Design, Creative — each with circle icon
     and center-aligned text.
  5. `section.ftco-counter#section-counter`: parallax background image,
     "SOME" subheading + "Interesting Facts" heading left, 4 stat counters
     right (2000 Done Works, etc.).
  6. `section.ftco-section.ftco-project#projects-section`: "PROJECTS" subheading
     + "Recents Projects" heading, 2×3 grid of project cards with background
     image, dark overlay, arrow-CTA button, title + category label.
  7. `section.testimony-section`: testimonial carousel — circular user photo,
     quote icon, testimonial text, name + role.
  8. `section.ftco-section` (white bg): "OUR LATEST UPDATE" subheading +
     "Case Study" heading, 3-column blog cards with background image, meta
     (date, author, comments), title.
  9. `section.ftco-section.bg-light`: "PRICING PLANS" subheading + "Our Best
     Pricing" heading, 4 pricing cards — Free ($0), Startup ($19), Premium
     ($49), Enterprise ($99) — each with feature list and CTA button.
  10. `section.ftco-section.ftco-partner`: 5 partner logos in a row.
  11. `footer.ftco-footer.ftco-bg-dark`: dark bg, 4 columns (brand + social
      icons, Useful Links, Quick Links, Contact Us with address/phone/email),
      copyright bar at bottom.

## Design tokens

| Token | Value | Notes |
|-------|-------|-------|
| **Primary font** | `Poppins`, Arial, sans-serif | Headings + body |
| **Secondary font** | `Work Sans` | Alt/complementary (used in some elements) |
| **Brand accent** | `#ecc503` | Yellow — CTA buttons, subheading underlines, active nav |
| **Dark bg** | `#1d2124` | Hero left panel, footer, navbar |
| **Dark alt** | `#343a40` | Counter section overlay |
| **Light bg** | `#f8f9fa` | Pricing section bg |
| **White** | `#ffffff` | Main content bg |
| **Text dark** | `#212529` | Body text |
| **Text muted** | `#6c757d` | Secondary text |
| **Blue accent** | `#4ac7ea` | Logo/brand blue (nav, footer) |
| **Button radius** | `0` (rectangular) | Hero CTA — rectangular with yellow pseudo-block |
| **Pill radius** | `30px` | Some pricing/CTA buttons |
| **Card radius** | `5px` | Project cards, blog cards |
| **Section spacing** | ~80px vertical padding | `ftco-section` class pattern |
| **Parallax** | `data-stellar-background-ratio="0.5"` | Counter/stats section |

## Gherkin requirements

### Navbar
- Scenario: Dark navbar renders with brand and navigation links
  - Given the user loads the homepage
  - Then a dark-background navbar is visible with brand text "Palladium"
  - And navigation links include Home, About, Work, Pricing, Blog, Contact
  - And the navbar is sticky on scroll
  - And a mobile hamburger toggler is visible on small viewports

### Hero
- Scenario: Split hero displays headline and CTA
  - Given the user loads the homepage
  - Then a split hero section is visible
  - And the left side has dark background with white text
  - And a "WELCOME" subheading with yellow underline is visible
  - And h1 "We Help to Build You the Product" is displayed
  - And h2 "Business Solution" subtext is displayed
  - And a "Get in touch" button with yellow accent is visible
  - And the right side shows a full-height background image

### About / Services List
- Scenario: "What We Can Do for You" section renders with service items
  - Given the user scrolls to the about section
  - Then "PROVIDING" subheading and "What We Can Do for You" heading are visible
  - And a right-aligned image is displayed
  - And 4 service items are listed (Market Research, Financial Services, Online Marketing, 24/7 Support)
  - And each service item has an icon and description text

### Services Grid
- Scenario: 4-column services grid renders correctly
  - Given the user scrolls to the services grid
  - Then 4 service cards are displayed in a row
  - And each card has a circle icon, title, and description
  - And the services are: Business Strategy, Data Analysis, Graphic Design, Creative

### Counter / Stats
- Scenario: Parallax stats section displays counters
  - Given the user scrolls to the stats section
  - Then a parallax background image is visible
  - And "SOME" subheading and "Interesting Facts" heading are displayed
  - And 4 stat counters are shown with numbers and labels

### Projects
- Scenario: Project portfolio grid displays work samples
  - Given the user scrolls to the projects section
  - Then "PROJECTS" subheading and "Recents Projects" heading are visible
  - And 6 project cards are displayed in a 2×3 grid
  - And each card has a background image, dark overlay, arrow button, title, and category

### Testimonials
- Scenario: Testimonials carousel renders with user quotes
  - Given the user scrolls to the testimonials section
  - Then a carousel of testimonial cards is visible
  - And each card has a circular user photo, quote icon, testimonial text, name, and role

### Blog / Case Study
- Scenario: Blog cards display latest updates
  - Given the user scrolls to the blog section
  - Then "OUR LATEST UPDATE" subheading and "Case Study" heading are visible
  - And 3 blog cards are displayed in a row
  - And each card has a background image, date, author, comment count, and title

### Pricing
- Scenario: Pricing section displays 4 tiers
  - Given the user scrolls to the pricing section
  - Then "PRICING PLANS" subheading and "Our Best Pricing" heading are visible
  - And 4 pricing cards are displayed: Free ($0), Startup ($19), Premium ($49), Enterprise ($99)
  - And each card has a feature list and CTA button
  - And the section has a light gray background

### Partners
- Scenario: Partner logos displayed in a strip
  - Given the user scrolls to the partners section
  - Then 5 partner logo images are displayed in a horizontal row

### Footer
- Scenario: Dark footer renders with columns and copyright
  - Given the user scrolls to the footer
  - Then a dark-background footer is visible
  - And it contains 4 columns: brand + social, Useful Links, Quick Links, Contact Us
  - And social icons (Twitter, Facebook, Instagram) are present
  - And a copyright bar is at the bottom
  - And a "Component Dock" link is included per monorepo convention

## Verification checklist

- [ ] All sections render in correct order (1:1 with original)
- [ ] Navbar is sticky on scroll, dark background, brand + 6 nav links
- [ ] Hero is split layout: dark left with headline/CTA, image right
- [ ] Yellow accent (#ecc503) used on CTA buttons and subheading underlines
- [ ] Poppins font applied globally
- [ ] About section has right-aligned image + 4 service items with icons
- [ ] Services grid is 4-column on desktop, responsive on mobile
- [ ] Counter section has parallax background + 4 stat blocks
- [ ] Projects section has 2×3 grid with hover overlay
- [ ] Testimonials carousel works with circular photos + quotes
- [ ] Blog section has 3 cards with image, meta, and title
- [ ] Pricing section has 4 tiers on light gray background
- [ ] Partner logos displayed in horizontal strip
- [ ] Dark footer with 4 columns + copyright
- [ ] Footer includes Component Dock link
- [ ] No ColorLib references in app code (provenance in spec only)
- [ ] Mobile responsive (hamburger menu, stacked layouts)
- [ ] Placeholder images use picsum.photos with deterministic seeds
