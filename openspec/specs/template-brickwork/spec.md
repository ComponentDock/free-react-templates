# Template: Brickwork (Construction Company Landing)

## Purpose

Brickwork is a single-page construction-company landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Construct" free template (source:
https://colorlib.com/wp/template/construct/), built under a DIFFERENT name
(**Brickwork**), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

The original is a Bootstrap 4 one-page construction company site with an
Owl Carousel hero slider, overlapping CTA bar, feature-card services,
image-grid portfolio, blog carousel, testimonials, and a grey footer. The
design uses an amber-gold brand color (#f4b214) on white, with Open Sans
typeface and a clean corporate construction aesthetic.

**Source mapping:**
- ColorLib slug: `construct`
- Source URL: https://colorlib.com/wp/template/construct/
- Preview URL: https://preview.colorlib.com/theme/construct/
- Recreation name: **Brickwork** (NEW — never reuse "construct")

## Design tokens (captured from live preview CSS)

- **Brand / primary color:** `#f4b214` (amber gold) — used for CTA buttons,
  active nav links, section heading underlines, feature card icons, footer
  links, hover states, CTA overlap bar background
- **Secondary accent:** `#f6c245` (slightly lighter gold, used on button
  hover/active states)
- **Body text:** `#868e96` (medium grey)
- **Headings:** `#000` (black)
- **Meta text:** `#ced4da` (light grey for dates, comment counts)
- **Page background:** `#fff` (white)
- **Footer background:** `#f2f2f2` (light grey)
- **Section divider:** `1px solid #f8f9fa` (`.border-t`)
- **Font family:** "Open Sans", Arial, sans-serif — weights 300, 400, 700, 800
  (loaded via Google Fonts or Cloudflare Fonts)
- **Button radius:** Default Bootstrap (no custom radius on primary buttons);
  social footer icons are `border-radius: 50%` circles
- **Feature card radius:** `4px` with `border-bottom: 10px solid` transparent
  → turns `#f4b214` on hover; shadow on hover
- **Section padding:** `7em 0`
- **Heading decoration:** centered 50px × 2px `#f4b214` underline bar
  (positioned absolute under `border-bottom` text)
- **CTA overlap bar:** `#f4b214` background, white text, negative top margin
  (`margin-top: -4em`), shadow

## Requirements

### Requirement: Navigation bar

The system SHALL render a white sticky navbar with the brand name "Brickwork",
navigation links (Home, Services, Works, News, About, Contact), a Services
dropdown, and a golden "Get A Quote" CTA button on the right.

#### Scenario: Desktop navigation

- **GIVEN** the page is rendered
- **WHEN** the navbar is displayed
- **THEN** it SHALL show the brand name "Brickwork" in uppercase with letter spacing
- **AND** it SHALL show links to Home, Services, Works, News, About, and Contact
- **AND** it SHALL show a golden "Get A Quote" button on the right

#### Scenario: Services dropdown

- **GIVEN** the navbar is displayed on desktop
- **WHEN** the user hovers over or clicks "Services"
- **THEN** a dropdown menu SHALL appear with items: Metal Roofing, General Contracting, House Renovation, Laminate Flooring, Construction Consultant

#### Scenario: Mobile menu toggle

- **GIVEN** the page is rendered on a small screen
- **WHEN** the hamburger toggle is pressed
- **THEN** the mobile menu SHALL expand and the toggle SHALL report `aria-expanded="true"`
- **AND** pressing the toggle again SHALL collapse the menu

### Requirement: Hero slider

The system SHALL render a full-viewport-height hero section with a carousel
of slides, each containing a background image, a headline, a paragraph, and
optionally a CTA button.

#### Scenario: Hero slide content

- **GIVEN** the page is rendered
- **WHEN** the hero slider is visible
- **THEN** it SHALL display a slide with the headline "Creating A Brighter Future"
  and a paragraph, plus a "Download Now!" primary button
- **AND** it SHALL display a second slide with "Trusted Construction & Development Since 1889"

#### Scenario: Slide navigation dots

- **GIVEN** the hero slider is visible
- **WHEN** slides are present
- **THEN** navigation dots SHALL be visible at the bottom of the slider

### Requirement: CTA overlap bar

The system SHALL render a golden (#f4b214) overlapping call-to-action bar
below the hero slider with the text "Trusted Construction & Development Since
1889" and a "Get A Quote" outline-white button.

#### Scenario: CTA bar content

- **GIVEN** the page is rendered
- **WHEN** the CTA overlap bar is displayed
- **THEN** it SHALL show the heading text in white on a gold background
- **AND** it SHALL show a white-bordered "Get A Quote" button

### Requirement: Services section

The system SHALL render a white "Services" section with a centered heading,
three service feature cards in a 3-column grid, and a "View All Services"
button.

#### Scenario: Service cards

- **GIVEN** the page is rendered
- **WHEN** the services section is displayed
- **THEN** it SHALL show three cards titled "House Renovation",
  "Construction Consultant", and "General Contracting"
- **AND** each card SHALL have an icon, a description paragraph, and a
  "Learn More" outline-primary button

#### Scenario: Service card hover

- **GIVEN** the services section is displayed
- **WHEN** the user hovers over a service card
- **THEN** the card SHALL scale up slightly and gain a golden bottom border

### Requirement: Recent Works section

The system SHALL render a "Recent Works" section with a centered heading,
introductory paragraph, "View All Works" button, and a 3-column image grid
with hover overlay effects.

#### Scenario: Works grid items

- **GIVEN** the page is rendered
- **WHEN** the recent works section is displayed
- **THEN** it SHALL show three work items: "Wood Polishing", "General Construction Building", and "House Renovation"
- **AND** each item SHALL display an image with a hover overlay showing the title and a plus icon

#### Scenario: Works hover effect

- **GIVEN** the works grid is displayed
- **WHEN** the user hovers over a work thumbnail
- **THEN** a dark overlay SHALL appear with the title and icon fading in

### Requirement: Company News section

The system SHALL render a light-background "Company News" section with a
carousel of blog post cards, each containing an image, a date, a title,
a description, a "Read more" link, and a comment count.

#### Scenario: News cards

- **GIVEN** the page is rendered
- **WHEN** the news section is displayed
- **THEN** it SHALL show blog cards with images, dates, titles, descriptions
- **AND** each card SHALL have a "Read more" link and a comment count icon

#### Scenario: News carousel navigation

- **GIVEN** the news section is displayed
- **WHEN** multiple cards are present
- **THEN** carousel navigation arrows SHALL be available to browse cards

### Requirement: Testimonial section

The system SHALL render a white "Testimonial" section with two side-by-side
testimonial cards, each showing a circular person image, name, company
attribution, and a blockquote.

#### Scenario: Testimonial content

- **GIVEN** the page is rendered
- **WHEN** the testimonial section is displayed
- **THEN** it SHALL show two testimonials with person images, names, company links
- **AND** each testimonial SHALL contain a blockquote with testimonial text

### Requirement: Footer

The system SHALL render a grey (#f2f2f2) footer with four columns: copyright
text, address/contact info, quick links, and social media icons.

#### Scenario: Footer layout

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show copyright text with "Component Dock" link (not ColorLib)
- **AND** it SHALL show address, phone, and email contact details
- **AND** it SHALL show quick links: About, Services, Works, Contact
- **AND** it SHALL show social icons (Twitter, Facebook, LinkedIn, Instagram) as circles

#### Scenario: Footer links

- **GIVEN** the footer is displayed
- **WHEN** the user hovers over a social icon
- **THEN** the icon background SHALL turn golden (#f4b214)

## Verification checklist

- [ ] All sections render in correct order: Navbar → Hero → CTA → Services → Works → News → Testimonial → Footer
- [ ] Brand color #f4b214 used consistently for CTA, active states, icons, underlines
- [ ] Open Sans font loaded via Google Fonts (weights 400, 700, 800)
- [ ] Hero slider has navigation dots and full-viewport height
- [ ] CTA overlap bar overlaps hero with negative margin
- [ ] Service cards have hover scale + golden border effect
- [ ] Works grid has hover overlay with dark background, title, and icon
- [ ] News carousel scrolls through cards
- [ ] Testimonials show circular person images
- [ ] Footer has 4 columns with correct content
- [ ] Footer links to Component Dock (not ColorLib)
- [ ] Responsive: mobile menu toggle, stacked columns on small screens
- [ ] No ColorLib references in app code (provenance in spec only)
- [ ] Footer: "Made with Component Dock" or similar branding
