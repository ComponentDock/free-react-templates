# Template: Dialpad (Call Center Landing — Features, Testimonials, Services, Stats)

## Purpose

Dialpad is a single-page call-center landing template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Callcenter"
website template design (see TEMPLATES.md), built under a different name with the
monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript (strict). No
ColorLib references in app code — provenance lives in this spec, TEMPLATES.md,
and the PR.

The original is a professional call-center / customer-support landing: a
full-height hero with dark overlay ("Efficiency Booster"), a features row
(headset, clock, shield), a testimonials section, an offered-services grid
with icon grid and description, animated stat counters, a services showcase,
an about info split layout, an about-video split layout with play button, a
brand-logos strip, a contact form, and a dark footer. Dialpad recreates that
structure section-for-section with matching layout, colors, typography, and
content types (no ColorLib assets copied).

## Design reference (replication findings)

- **Original:** ColorLib "Callcenter" — call center website template
  (source: https://colorlib.com/wp/template/callcenter/).
- **Live demo DOM analyzed:** `https://preview.colorlib.com/theme/callcenter/`
  (HTTP 200; full rendered DOM extracted). The design below is reconstructed
  from the DOM structure and CSS tokens.
- **Section order (1:1):**
  1. Navbar — Logo text "Dialpad" on the left, nav links: Home, Features,
     We Offer, About, Contact. Sticky header, white/light background.
  2. Hero — Full-width dark overlay background image, subtitle
     "Discover the Colorful World", heading "Efficiency Booster" (large,
     white), descriptive paragraph (muted white), "Discover Now" CTA button
     (gradient pill).
  3. Features — Three feature cards in a row on light background (#f9f9ff):
     Online Support (headset icon), 24/7 Round the Clock (clock icon),
     Handling All Issues (shield icon). Each card has an icon circle, title,
     and short description.
  4. Testimonials — Dark overlay background section, heading "Why Choose Us
     Your Trusted Partner", 2 testimonial cards with avatar images, person
     name, role, and a quote block.
  5. Offered Services — Dark overlay background, heading "Our Offered
     Services", 6 service icons in a 2×3 grid on the left side, and a
     "Content Synchronization" description with "View Details" CTA button
     on the right side.
  6. Stats — 5 stat counters in a row on light background: 2536 Projects
     Completed, 6784 Happy Clients, 1059 Tasks Completed, 2239 Cups of
     Coffee, 435 In-House Professionals. Numbers use gradient text
     (blue-to-purple).
  7. Services — Dark overlay background section, heading "Some Awesomeness
     that should share", 6 service cards in a 3×2 grid: Expert
     Technicians, Professional Service, Great Support, Technical Skills,
     Highly Recommended, Positive Reviews. Each card has an icon, title,
     and short description.
  8. AboutInfo — Split layout: left side has an image, right side has
     "Responsible Customer Support" heading, a description paragraph, and
     a "Learn More" CTA button.
  9. AboutVideo — Split layout: left side has "We Believe that Interior
     beautifies the Total Architecture" heading, description paragraph, and
     a "See Details" CTA button; right side has a video background area with
     a centered play button overlay.
  10. BrandLogos — 5 partner/client logos in a horizontal row with a
      grayscale-to-color hover transition effect.
  11. ContactForm — Heading "If you need, Just drop us a line", form with
      name input, email input, subject input, message textarea, and a
      "Send Message" CTA button (gradient pill).
  12. Footer — Dark background (#222), 3 columns: About Us (short blurb),
      Contact Us (phone numbers + address), Newsletter (email input +
      subscribe button). Below the columns: a row of social icons, and a
      copyright line with "Component Dock" attribution link.

## Design tokens

- **Font:** Poppins (Google Fonts, weights 300–700). `font-family: "Poppins",
sans-serif` for body and headings.
- **Primary brand color:** `#8490ff` (blue-purple) — used for accent text,
  icon circles, link hover states.
- **Gradient:** `linear-gradient(0deg, #62bdfc 0%, #8490ff 100%)` — applied
  to CTA buttons, overlay backgrounds on hero/testimonials/services/about-video
  sections, and stat counter number text.
- **Body text color:** `#777` — paragraphs and muted content.
- **Heading color:** `#222` — h1, h2, h3 on light backgrounds.
- **Light section background:** `#f9f9ff` — features section, stats section,
  about-info section.
- **Dark background:** `#222` — footer background; gradient overlays
  (rgba-based) on hero, testimonials, services, about-video sections.
- **Buttons:** Gradient background (`linear-gradient(0deg, #62bdfc, #8490ff)`),
  `border-radius: 25px` (pill shape), white text, uppercase, font-weight 600,
  padding ~12px 36px, letter-spacing 0.5px.
- **Section padding:** `120px` vertical (`py-[120px]` equivalent).
- **Icon circles:** `#8490ff` background, white icon, circular shape (~60px).
- **Overlay sections:** Background image with a dark gradient overlay
  (`rgba(34,34,34,0.85)` approx) for hero, testimonials, services,
  about-video.

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Dialpad"
and links to the page's sections, plus a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Dialpad page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the logo text "Dialpad"
- **AND** the navbar SHALL show navigation links: Home, Features, We Offer,
  About, Contact
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Navbar sticky behavior

- **GIVEN** the Dialpad page is rendered
- **WHEN** the user scrolls down past the navbar
- **THEN** the navbar SHALL remain fixed at the top of the viewport

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero section

The system SHALL render a full-width hero section with a dark overlay
background, a subtitle, a main heading, a description paragraph, and a
call-to-action button.

#### Scenario: Hero content

- **GIVEN** the hero section is rendered
- **WHEN** the page loads
- **THEN** the hero SHALL display the subtitle "Discover the Colorful World"
- **AND** it SHALL display the heading "Efficiency Booster"
- **AND** it SHALL display a descriptive paragraph below the heading
- **AND** it SHALL display a "Discover Now" CTA button styled as a gradient
  pill

#### Scenario: Hero overlay

- **GIVEN** the hero section is rendered
- **WHEN** the hero is inspected
- **THEN** the hero background SHALL have a dark gradient overlay
- **AND** the text content SHALL be white/light colored for contrast

### Requirement: Features section

The system SHALL render a features section on a light background with three
feature cards in a horizontal row, each containing an icon, a title, and a
short description.

#### Scenario: Features content

- **GIVEN** the features section is rendered
- **WHEN** it is inspected
- **THEN** it SHALL display three feature cards: "Online Support" (headset
  icon), "24/7 Round the Clock" (clock icon), and "Handling All Issues"
  (shield icon)
- **AND** each card SHALL have a circular icon with the brand accent color

#### Scenario: Features layout

- **GIVEN** the features section is rendered on a wide viewport
- **WHEN** the feature cards are laid out
- **THEN** the three cards SHALL appear in a single horizontal row

### Requirement: Testimonials section

The system SHALL render a testimonials section with a dark overlay background
and a heading "Why Choose Us Your Trusted Partner", containing two
testimonial cards with avatar images, names, roles, and quotes.

#### Scenario: Testimonials content

- **GIVEN** the testimonials section is rendered
- **WHEN** it is inspected
- **THEN** it SHALL display the heading "Why Choose Us Your Trusted Partner"
- **AND** it SHALL display two testimonial cards, each with an avatar image,
  a person name, a role, and a quote

#### Scenario: Testimonials overlay

- **GIVEN** the testimonials section is rendered
- **WHEN** the section background is inspected
- **THEN** the section SHALL have a dark gradient overlay background
- **AND** the text content SHALL be light-colored for readability

### Requirement: Offered services section

The system SHALL render an offered-services section with a dark overlay
background, a heading "Our Offered Services", a grid of six service icons
on the left, and a "Content Synchronization" description with a "View
Details" CTA button on the right.

#### Scenario: Offered services layout

- **GIVEN** the offered services section is rendered
- **WHEN** it is inspected
- **THEN** it SHALL display the heading "Our Offered Services"
- **AND** it SHALL show six service icons in a 2×3 grid on the left side
- **AND** it SHALL show the "Content Synchronization" description with a
  "View Details" button on the right side

#### Scenario: Offered services icons

- **GIVEN** the offered services section is rendered
- **WHEN** the icon grid is inspected
- **THEN** the six icons SHALL each be in a circular container with the
  brand accent color background

### Requirement: Stats section

The system SHALL render a stats section on a light background with five
stat counters in a row. Each counter SHALL display a number with gradient
text and a label below it.

#### Scenario: Stats content

- **GIVEN** the stats section is rendered
- **WHEN** it is inspected
- **THEN** it SHALL display five stat items: "2536 Projects Completed",
  "6784 Happy Clients", "1059 Tasks Completed", "2239 Cups of Coffee",
  "435 In-House Professionals"

#### Scenario: Stats styling

- **GIVEN** the stats section is rendered
- **WHEN** the stat numbers are inspected
- **THEN** each number SHALL use gradient text styling
  (linear-gradient blue-to-purple)
- **AND** the stat labels SHALL appear below the numbers in muted text

### Requirement: Services section

The system SHALL render a services section with a dark overlay background,
a heading "Some Awesomeness that should share", and six service cards in a
3×2 grid. Each card SHALL have an icon, a title, and a short description.

#### Scenario: Services content

- **GIVEN** the services section is rendered
- **WHEN** it is inspected
- **THEN** it SHALL display the heading "Some Awesomeness that should share"
- **AND** it SHALL show six service cards: "Expert Technicians", "Professional
  Service", "Great Support", "Technical Skills", "Highly Recommended",
  "Positive Reviews"

#### Scenario: Services layout

- **GIVEN** the services section is rendered on a wide viewport
- **WHEN** the service cards are laid out
- **THEN** the six cards SHALL be arranged in a 3-column × 2-row grid

### Requirement: About info section

The system SHALL render an about-info section on a light background with a
split layout: an image on the left and text content on the right including
a heading, a description paragraph, and a "Learn More" CTA button.

#### Scenario: About info content

- **GIVEN** the about-info section is rendered
- **WHEN** it is inspected
- **THEN** it SHALL display the heading "Responsible Customer Support"
  on the right side
- **AND** it SHALL display a descriptive paragraph below the heading
- **AND** it SHALL display a "Learn More" CTA button
- **AND** it SHALL display an image on the left side

### Requirement: About video section

The system SHALL render an about-video section with a split layout: text
content on the left (heading, description, "See Details" CTA button) and
a video background area with a play button overlay on the right.

#### Scenario: About video content

- **GIVEN** the about-video section is rendered
- **WHEN** it is inspected
- **THEN** it SHALL display the heading "We Believe that Interior beautifies
  the Total Architecture" on the left side
- **AND** it SHALL display a description paragraph and a "See Details" CTA
  button

#### Scenario: About video play button

- **GIVEN** the about-video section is rendered
- **WHEN** the right side video area is inspected
- **THEN** it SHALL display a play button overlay centered on the video
  background

### Requirement: Brand logos section

The system SHALL render a brand-logos section displaying five partner/client
logos in a horizontal row. The logos SHALL transition from grayscale to
full color on hover.

#### Scenario: Brand logos content

- **GIVEN** the brand-logos section is rendered
- **WHEN** it is inspected
- **THEN** it SHALL display five partner logos in a horizontal row

#### Scenario: Brand logos hover effect

- **GIVEN** the brand-logos section is rendered
- **WHEN** the user hovers over a logo
- **THEN** the logo SHALL transition from grayscale to full color

### Requirement: Contact form section

The system SHALL render a contact form section with the heading "If you
need, Just drop us a line", containing a form with name, email, and
subject inputs, a message textarea, and a "Send Message" CTA button.

#### Scenario: Contact form fields

- **GIVEN** the contact form section is rendered
- **WHEN** it is inspected
- **THEN** it SHALL display the heading "If you need, Just drop us a line"
- **AND** the form SHALL contain a name input, an email input, a subject
  input, and a message textarea
- **AND** the form SHALL have a "Send Message" button styled as a gradient
  pill

#### Scenario: Contact form submission

- **GIVEN** the contact form is rendered with all fields filled
- **WHEN** the user clicks "Send Message"
- **THEN** the form SHALL handle the submit event (prevent default, no
  page reload)

### Requirement: Footer

The system SHALL render a dark footer with three columns (About Us, Contact
Us, Newsletter), a social icons row, and a copyright line with Component
Dock attribution.

#### Scenario: Footer content

- **GIVEN** the footer is rendered
- **WHEN** it is inspected
- **THEN** it SHALL display an "About Us" column with a short blurb
- **AND** it SHALL display a "Contact Us" column with phone numbers and
  address
- **AND** it SHALL display a "Newsletter" column with an email input and
  subscribe button

#### Scenario: Footer social icons

- **GIVEN** the footer is rendered
- **WHEN** the social icons row is inspected
- **THEN** it SHALL display a row of social media icon links

#### Scenario: Footer copyright attribution

- **GIVEN** the footer copyright bar is rendered
- **WHEN** it is inspected
- **THEN** it SHALL include a link to `https://www.componentdock.com/`
  branded as "Component Dock"
- **AND** it SHALL NOT include any ColorLib attribution

### Requirement: Page composition

The system SHALL compose the full page in this order: navbar → hero →
features → testimonials → offered services → stats → services → about info
→ about video → brand logos → contact form → footer, with no unimplemented
sections.

#### Scenario: Full page render

- **GIVEN** the Dialpad app is rendered
- **WHEN** the page is inspected
- **THEN** all twelve sections appear in the source order
- **AND** the page has no console errors

#### Scenario: Document title

- **GIVEN** the Dialpad app is rendered
- **WHEN** the page loads
- **THEN** the document title SHALL be "Dialpad — Call Center Template"

## Verification checklist

- [ ] Spec validated: `npm run spec:validate` passes for
      `template-dialpad`.
- [ ] App `apps/dialpad` created on branch `feat/template-dialpad` by an
      implementer stream (NOT this prep stream).
- [ ] All Gherkin scenarios above covered by Vitest + Testing Library tests
      at 100% coverage (lines/functions/branches/statements).
- [ ] `npm run verify:app dialpad` passes: typecheck, lint, knip, fallow,
      test:coverage, build.
- [ ] Design tokens match the reference: `#8490ff` primary, gradient
      `linear-gradient(0deg, #62bdfc, #8490ff)`, `#f9f9ff` light bg,
      `#222` dark bg, `#777` body text, `#222` headings, Poppins font,
      25px pill buttons, 120px section padding.
- [ ] Footer links `https://www.componentdock.com/`; no ColorLib references
      anywhere in `apps/dialpad`.
- [ ] `public/CNAME` = `dialpad.free.componentdock.com`; `homepage` =
      `https://dialpad.free.componentdock.com`; `npm install` run at root and
      `@free-react-templates/dialpad` registered in `package-lock.json`.
- [ ] `npm run readme:status` regenerates README status; TEMPLATES.md row
      marked `[x]` with the live URL on merge.
