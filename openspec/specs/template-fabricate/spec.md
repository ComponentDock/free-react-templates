# Template: Fabricate (Industrial Business)

## Purpose

Recreation of ColorLib **Industry** template.
- Source slug: `industry`
- Preview URL: https://preview.colorlib.com/theme/industry/
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/industry-free-template.jpg
- Stack: React 19 · Vite · Tailwind CSS 4 · TypeScript
- New name: `fabricate` (apps/fabricate, @free-react-templates/fabricate)
- Deploy target: https://fabricate.free.componentdock.com

## Design tokens (extracted from live preview)

| Token | Value | Source |
|---|---|---|
| Brand primary | `#fab700` (amber gold) | `.primary-btn`, accent text, hover states |
| Header top bg | `#222222` (dark charcoal) | `.header-top` |
| Body text | `#777777` | Global body color |
| Heading text | `#222222` | h1-h6 defaults |
| About section bg | `#f9f9ff` (very light blue-grey) | `.home-about-area` |
| Footer bg | `#04091e` (very dark navy) | `.footer-area` |
| Overlay | `rgba(0,0,0,0.5)` on banner/stats/feedback | `.overlay-bg` |
| Font family | `Poppins` (weights 300, 400, 500, 600, 700) | Inline `@font-face` |
| Button radius | `25px` (pill shape) | `.primary-btn` border-radius |
| Button bg | `#fab700`, text `#fff` | `.primary-btn` |
| Button hover | transparent bg, `#fab700` border + text | `.primary-btn:hover` |
| Form panel bg | `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8))` over image | `.home-about-right` |
| Counter circle | white inner ring on dark overlay bg | `.single-faq .circle` |

## Visual design notes (from screenshot)

The template has a dark industrial aesthetic with a prominent amber/yellow accent.
The hero is a full-bleed background image with dark overlay. The about section
splits into text + a dark quote-request form panel. Services are image cards.
Stats use animated counters on a dark strip. Projects displayed in an asymmetric
gallery grid. Testimonials combine a video play button with a star-rated
carousel. Blog uses standard 3-column cards. Footer is very dark navy with
newsletter email input.

## Section order (from live DOM)

1. Header (top bar + nav)
2. Banner/Hero (fullscreen bg image, dark overlay, heading, CTA)
3. Features (3 hexagon icon cards: Maintenance, Residential, Commercial)
4. About (split: text left + quote form right)
5. Services (3 image cards: Automotive, Construction, Industrial)
6. Stats/Counter (4 animated counters on dark overlay)
7. Projects (asymmetric image gallery)
8. Feedback/Testimonials (video play + review carousel on dark overlay)
9. Blog (3-column cards with author/date)
10. Footer (About Us, Newsletter, Follow Us social icons)

## Requirements

### Header

Feature: Header

#### Scenario: Top bar displays social icons, phone, and email

- **GIVEN** the page loads
- **THEN** a dark top bar shows social icons (Facebook, Twitter, Dribbble, Behance)
- **AND** a phone number "+880 012 3654 896" is displayed
- **AND** an email "support@colorlib.com" is displayed

#### Scenario: Navigation menu renders all links

- **GIVEN** the page loads
- **THEN** a navigation bar shows logo and links: Home, About, Service, Projects, Blog, Contact
- **AND** "Blog" has a dropdown with Blog Home and Blog Single
- **AND** the currently active page link is highlighted

### Banner/Hero

Feature: Banner/Hero

#### Scenario: Hero section shows heading and CTA

- **GIVEN** the banner is visible
- **THEN** a subtitle "Don't look further, here is the key" appears
- **AND** heading "We're Industrial solution" is displayed
- **AND** a paragraph of descriptive text is shown
- **AND** a "Get Started" button with pill shape and amber background is present

#### Scenario: Hero has a background image with dark overlay

- **GIVEN** the banner is visible
- **THEN** a background image covers the hero area
- **AND** a semi-transparent dark overlay sits on top of the image

### Features

Feature: Features (Hexagon Icons)

#### Scenario: Three feature cards are displayed

- **GIVEN** the features section is visible
- **THEN** 3 hexagon icon cards are shown in a row
- **AND** each card has a title: "Maintenance", "Residential Service", "Commercial Service"
- **AND** each card has a descriptive paragraph

### About

Feature: About Section

#### Scenario: About section shows text and quote form

- **GIVEN** the about section is visible
- **THEN** left side displays an accent subtitle "Brand new app to blow your mind"
- **AND** heading "We've made a life that will change you"
- **AND** descriptive paragraphs and a "Get Started Now" button
- **AND** right side displays a dark-background "Request a Quote" form
- **AND** the form has a service dropdown, name, phone, email inputs, textarea, and submit button

#### Scenario: Quote form is interactive

- **GIVEN** the quote form is visible
- **WHEN** user selects a service from the dropdown
- **AND** fills in name, phone, email, and message
- **AND** clicks "Request Free Quote"
- **THEN** the form should validate required fields

### Services

Feature: Services Section

#### Scenario: Three service cards with images

- **GIVEN** the services section is visible
- **THEN** heading "Our Capturing Market Sectors" is displayed
- **AND** 3 image cards are shown: "Automotive Engineering", "Construction & Engineering", "Industrial Engineering"
- **AND** each card has an image, title, and descriptive paragraph

### Stats/Counter

Feature: Stats Counter

#### Scenario: Four statistics are displayed

- **GIVEN** the stats section is visible
- **THEN** 4 counters are shown: "2K+ Projects Completed", "5.5K Total Employees", "959 Happy Clients", "367 Tickets Submitted"
- **AND** each has a circular ring decoration
- **AND** the section has a dark overlay background

### Projects

Feature: Projects Gallery

#### Scenario: Asymmetric project grid

- **GIVEN** the projects section is visible
- **THEN** heading "Latest Finished Projects" is displayed
- **AND** 4 project images are shown in an asymmetric grid
- **AND** the grid has one large image, one medium, and two equal-width images

### Feedback/Testimonials

Feature: Feedback/Testimonials

#### Scenario: Testimonial carousel with video

- **GIVEN** the feedback section is visible
- **THEN** heading "Enjoy our Client's Feedback" is shown
- **AND** a video play button is displayed on the left
- **AND** a review carousel on the right shows reviewer name, star rating, and testimonial text
- **AND** the section has a dark overlay background

#### Scenario: Carousel cycles through reviews

- **GIVEN** the feedback section is visible
- **WHEN** the carousel advances
- **THEN** the next review slides in with name, stars, and text

### Blog

Feature: Blog Section

#### Scenario: Three blog cards

- **GIVEN** the blog section is visible
- **THEN** heading "Latest posts from our Blog" is displayed
- **AND** 3 blog cards are shown in a row
- **AND** each card has a thumbnail image, author avatar + name, date, like count, comment count, title, and excerpt

### Footer

Feature: Footer

#### Scenario: Footer has three columns

- **GIVEN** the footer is visible
- **THEN** a dark navy background (#04091e) is applied
- **AND** column 1 shows "About Us" with description and copyright
- **AND** column 2 shows "Newsletter" with email input and submit arrow
- **AND** column 3 shows "Follow Us" with social icons (Facebook, Twitter, Dribbble, Behance)
- **AND** the copyright includes a link to Component Dock

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/fabricate/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/fabricate/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] Header top bar: dark bg, social icons, phone, email
- [ ] Navigation: logo, all links, Blog dropdown, active state
- [ ] Hero: bg image, dark overlay, heading, subtext, pill CTA button (#fab700)
- [ ] Features: 3 hexagon icon cards with titles and descriptions
- [ ] About: split layout, accent subtitle (#fab700), quote form with dark bg panel
- [ ] Services: 3 image cards with titles and descriptions
- [ ] Stats: 4 animated counters with circular ring decoration, dark overlay
- [ ] Projects: asymmetric image gallery grid
- [ ] Feedback: video play button + testimonial carousel, dark overlay
- [ ] Blog: 3 cards with image, author, date, stats, title, excerpt
- [ ] Footer: dark navy (#04091e), About Us + Newsletter + Follow Us columns
- [ ] Footer links to https://www.componentdock.com/
- [ ] No ColorLib references in app code (only in spec and TEMPLATES.md)
- [ ] Brand color #fab700 used via Tailwind @theme token
- [ ] Font: Poppins loaded via Google Fonts in index.html
- [ ] All placeholder images use picsum.photos/seed/fabricate-N/
- [ ] Package name: @free-react-templates/fabricate
- [ ] CNAME: fabricate.free.componentdock.com
- [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
