# Template: Pranayama (Yoga/Wellness Template)

## Purpose

Pranayama is a single-page yoga/wellness website template in the free-react-templates
monorepo. It is a React recreation of the ColorLib free "Yoga Studio" website template
design (source: https://colorlib.com/wp/template/yoga-studio/), built under a DIFFERENT
name (**Pranayama** — a yogic breathing practice, matching the source's yoga studio theme)
per the monorepo naming mandate, with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Yoga Studio" — classic Colorlib Bootstrap 4 single-page yoga
  studio template with a muted purple/lavender (`#9482AC`) brand accent, a parallax
  hero slider ("Find Your Zen"), yoga class cards (Yoga, Pilates, Hatha), a different
  yoga section with quotes, a yoga name section with 3 columns, client testimonials,
  a call-to-action band, and a dark footer with contact form. Demo brands itself "Yoga
  Studio"; the recreation uses the NEW name **Pranayama**.
- **Preview DOM analyzed:** `https://preview.colorlib.com/theme/yogastudio/`
  (HTTP 200, 31,174 bytes HTML). The `<title>` is "Yoga Studio | Template". Master
  stylesheet `css/style.css` (~32 KB, fully extracted for tokens); libs: Bootstrap 4,
  Owl Carousel, SlickNav, Font Awesome, Flaticon, jQuery. Google Fonts: Montserrat +
  Playfair Display.
- **CSS tokens (from style.css):**
  - Brand: `#9482AC` (muted purple/lavender) — `.primary-btn` background, links,
    accents, active states, footer contact section.
  - Secondary accent: `#FFDD8D` (warm yellow) — used for secondary button backgrounds.
  - Dark text: `#111111` (headings), `#464646` (body text).
  - Light gray text: `#939393` (muted text).
  - White text: `#fff` (on dark/colored backgrounds).
  - Buttons: `.primary-btn` — background `#9482AC`, **border-radius: 50px** (pill
    shape), padding `15px 30px`, white text, `font-size: 14px`, `font-weight: 600`,
    uppercase. Secondary button `.primary-btn` with `background: #FFDD8D` (yellow).
    Black button variant with `background: #000`, `border-radius: 60px`.
  - Fonts: body `font-family: "Montserrat", sans-serif`; headings/accents
    `font-family: "Playfair Display", serif`.
  - Section rhythm: `.spad` padding `60px 0`. `.section-title` centered, h2 weight 700.
  - Hero: `.hero-slider` — full-width slider with parallax background images, h1
    "Find Your Zen" in white, centered. `.home-title` large heading style.
  - Classes: `.yoga-classes-section` — white background, 3-column grid of class cards
    (`.single-classes`), each with icon, title, and description.
  - Different Yoga: `.different-yoga` — parallax background image (`img/yoga-bg.jpg`),
    `.different-yoga-content` with quote text and stats/numbers.
  - Yoga Name: `.yoga-name-section` — white background, 3-column grid of yoga style
    names with h4 headings.
  - Client: `.client-section` — white background, left image (`.client-left-img`),
    right carousel (`.client-items.owl-carousel`) with testimonials, each with h5
    name + span role, paragraph text.
  - CTA: `.callto-section` — parallax background image (`img/callto-bg.jpg`),
    `.callto-text` centered with h2 "Take a free class now" and a `.primary-btn`.
  - Footer: `.footer-section` — dark background image (`img/footer-bg.jpg`),
    `.contact-inner` with 2-column layout: left = contact form with h2 "Contact us",
    right = contact info/social links. `.copyright` bar at bottom.

## Sections (top to bottom)

1. **Header/Nav** — Fixed top, dark parallax background (`img/header-bg.png`), logo
   left, nav links (Home, Classes, About us, Shop) right, mobile menu toggle.
2. **Hero Slider** — Full-width Owl Carousel with 3 slides, each with a parallax
   background image. Overlay text: h1 "Find Your Zen", subtitle, CTA button.
3. **Yoga Classes** — White background section, centered h2 title, subtitle paragraph,
   3-column grid of class cards: Yoga (flaticon-001-meditation), Pilates
   (flaticon-002-yin-yang), Hatha (flaticon-021-yoga-mat). Each card has icon,
   title, description text.
4. **Different Yoga** — Parallax background section, quote text overlay, stats/numbers
   in a 3-column layout (e.g., 40+ Classes, 100+ Students, 15+ Trainers).
5. **Yoga Name** — White background section, 3-column grid with yoga style titles
   (h4 headings) and brief descriptions.
6. **Client Testimonials** — White background, 2-column layout: left = client image,
   right = Owl Carousel with testimonial cards (name, role, quote text).
7. **Call-to-Action** — Parallax background section, centered h2 "Take a free class
   now", primary CTA button (`.primary-btn`).
8. **Footer** — Dark background image, 2-column layout: left = contact form
   (name, email, message, submit button), right = contact info (address, phone,
   email) + social links. Copyright bar at bottom with "Made with Component Dock".

## Gherkin requirements

Feature: Pranayama Yoga Studio Template
  As a visitor to the Pranayama yoga studio website
  I want to see a professional yoga studio landing page
  So that I can learn about classes and get in touch

  Scenario: Header navigation
    Given the page has loaded
    Then the header displays the logo on the left
    And the navigation links "Home", "Classes", "About us", "Shop" are visible
    And the header has a dark parallax background
    And on mobile the hamburger menu toggle is visible

  Scenario: Hero slider
    Given the page has loaded
    Then a full-width hero slider is displayed
    And each slide shows the heading "Find Your Zen"
    And each slide has a CTA button
    And the slider auto-plays between slides

  Scenario: Yoga classes section
    Given I scroll to the classes section
    Then I see a section title and subtitle
    And three class cards are displayed in a row: Yoga, Pilates, Hatha
    And each card has an icon, title, and description

  Scenario: Different yoga section
    Given I scroll to the different yoga section
    Then a parallax background image is visible
    And a quote or motivational text is displayed
    And statistics or numbers are shown in a 3-column layout

  Scenario: Yoga name section
    Given I scroll to the yoga name section
    Then three yoga style titles are displayed in a column grid
    And each title has a brief description

  Scenario: Client testimonials
    Given I scroll to the client section
    Then a client image is displayed on the left
    And a testimonial carousel is displayed on the right
    And each testimonial shows a name, role, and quote text
    And the carousel can be navigated with dots/arrows

  Scenario: Call to action
    Given I scroll to the call-to-action section
    Then a parallax background is visible
    And the heading "Take a free class now" is displayed
    And a primary button is visible and clickable

  Scenario: Footer contact form
    Given I scroll to the footer
    Then a contact form with name, email, message fields is displayed
    And a submit button is visible
    And contact information (address, phone, email) is shown
    And social media links are displayed
    And the copyright bar reads "Made with Component Dock"

  Scenario: Responsive layout
    Given the viewport width is less than 768px
    Then the navigation collapses to a hamburger menu
    And class cards stack vertically
    And the footer contact form stacks vertically
    And all sections remain readable and accessible

## Verification checklist

- [ ] All 8 sections render in correct top-to-bottom order
- [ ] Hero slider auto-plays and can be navigated
- [ ] Class cards display with correct icons, titles, descriptions
- [ ] Parallax backgrounds load and scroll correctly
- [ ] Testimonial carousel navigates between slides
- [ ] Contact form has all required fields
- [ ] Footer links to ComponentDock
- [ ] Mobile responsive at all breakpoints
- [ ] No ColorLib references in app code
- [ ] All placeholder images use picsum.photos with deterministic seeds
- [ ] Fonts loaded: Montserrat (body) + Playfair Display (headings)
- [ ] Brand color `#9482AC` used consistently for primary buttons
- [ ] Pill-shaped buttons with `border-radius: 50px`
- [ ] 100% test coverage
- [ ] CNAME set to `pranayama.free.componentdock.com`
