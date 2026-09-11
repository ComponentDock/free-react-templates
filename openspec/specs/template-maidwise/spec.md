# Template: Maidwise (Cleaning Services)

## Purpose

Maidwise is a single-page cleaning company website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Cleaning Company" free template (source:
https://colorlib.com/wp/template/cleaning-company/), built under a
DIFFERENT name (**Maidwise**), with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

The original is a Bootstrap-based business template for cleaning service
companies. It features a full-width hero section with parallax background,
service cards, animated statistics, a pricing/packages section, a contact
form with Google Maps integration, and a blog preview. The template uses a
clean, professional aesthetic with green (`#81d742`) as the primary accent
and white/light backgrounds.

**WHAT MAKES MAIDWISE DISTINCT (signature behaviors):**

1. **Green-accented professional cleaning aesthetic.** The template uses
   green (`#81d742`) as the primary brand color against clean white and
   light grey backgrounds, conveying freshness and cleanliness. The overall
   feel is modern, trustworthy, and service-oriented.

2. **Full-width hero with parallax background.** A large hero section with
   a parallax scrolling effect, overlay text, and a prominent CTA button.
   The hero showcases a cleaning-related background image with semi-transparent
   overlay.

3. **Service cards grid.** A section displaying cleaning services (e.g.,
   residential cleaning, commercial cleaning, deep cleaning) as cards
   with icons, titles, and descriptions in a responsive grid layout.

4. **Animated statistics counter.** Numbers that animate/count up when
   scrolled into view (e.g., projects completed, happy clients, years
   experience). Uses intersection observer for scroll-triggered animation.

5. **Pricing/packages section.** Display of cleaning service packages
   (e.g., Basic, Standard, Premium) with pricing, features list, and
   CTA buttons.

6. **Contact form with Google Maps.** A functional contact form alongside
   an embedded Google Map showing the company location.

7. **On-scroll content loading.** Elements animate in as the user scrolls
   down the page, creating a dynamic, engaging experience.

## Design tokens (from reference research)

| Token         | Value                         | Use                                                       |
| ------------- | ----------------------------- | --------------------------------------------------------- |
| Brand green   | `#81d742`                     | Primary accent, buttons, highlights, icons                |
| Dark green    | `#5a9e2f`                     | Button hover state, darker accent                         |
| Text dark     | `#333333`                     | Headings and body text                                    |
| Text medium   | `#666666`                     | Secondary text, descriptions                              |
| Text light    | `#999999`                     | Captions, subtle text                                     |
| Background    | `#ffffff`                     | Main page background                                      |
| Section alt   | `#f8f9fa`                     | Alternating section backgrounds (light grey)              |
| Border        | `#e9ecef`                     | Card borders, dividers                                   |
| White         | `#ffffff`                     | Card backgrounds, overlays                                |
| Font family   | 'Poppins', sans-serif         | Primary font (Google Fonts)                               |
| Font family 2 | 'Playfair Display', serif     | Heading accent font (Google Fonts)                        |
| Button radius | 4px                           | Rounded corners on buttons                                |
| Card radius   | 8px                           | Rounded corners on cards                                  |
| Shadow        | 0 2px 15px rgba(0,0,0,0.08)  | Card shadow                                               |
| Hero overlay  | rgba(0,0,0,0.5)              | Semi-transparent overlay on hero image                    |

## Requirements

### Requirement: Page shell

The system SHALL render the full-page cleaning services website with a
navigation bar, hero section, and Component Dock footer.

#### Scenario: Page structure

- **GIVEN** the Maidwise app is rendered on a desktop viewport
- **THEN** the page SHALL display a fixed/sticky navigation bar at the top
  with the brand name "Maidwise" and navigation links
- **AND** the page SHALL have a full-width hero section below the navbar
- **AND** the page SHALL end with a minimal footer linking
  https://www.componentdock.com/

#### Scenario: Responsive layout

- **GIVEN** a viewport at or below 768px
- **THEN** the navigation SHALL collapse into a hamburger menu
- **AND** all section layouts SHALL stack vertically without horizontal
  overflow

### Requirement: Navigation bar

The system SHALL render a fixed navigation bar with brand logo and links.

#### Scenario: Desktop navigation

- **GIVEN** the viewport is wider than 768px
- **THEN** the navbar SHALL display the brand name "Maidwise" on the left
- **AND** navigation links SHALL appear horizontally: Home, About, Services,
  Pricing, Contact
- **AND** a "Get a Quote" CTA button SHALL appear on the right side
- **AND** the navbar SHALL have a white background with subtle bottom border
  or shadow

#### Scenario: Mobile hamburger menu

- **GIVEN** the viewport is at or below 768px
- **THEN** a hamburger menu icon SHALL appear on the right of the navbar
- **WHEN** the user clicks the hamburger icon
- **THEN** a vertical slide-out menu SHALL appear with all navigation links
- **AND** the hamburger icon SHALL toggle to an X icon

### Requirement: Hero section

The system SHALL render a full-width hero section with parallax background,
overlay text, and CTA.

#### Scenario: Hero content

- **GIVEN** the hero section is rendered
- **THEN** it SHALL display a background image (parallax scrolling effect)
  with a semi-transparent dark overlay
- **AND** a large heading SHALL appear (e.g., "Professional Cleaning
  Services")
- **AND** a subheading/description text SHALL appear below the heading
- **AND** a CTA button ("Get a Quote" / "Our Services") SHALL appear with
  the brand green `#81d742` background and white text
- **AND** the text SHALL be white and centered on the overlay

#### Scenario: Parallax effect

- **GIVEN** the user scrolls the page
- **THEN** the hero background image SHALL scroll at a different rate than
  the foreground content (parallax effect)
- **AND** the parallax SHALL be smooth and performant (using CSS
  `background-attachment: fixed` or equivalent)

### Requirement: About section

The system SHALL render an "About Us" section describing the cleaning company.

#### Scenario: About content

- **GIVEN** the about section is rendered
- **THEN** it SHALL display a heading ("About Us" or similar)
- **AND** a paragraph of descriptive text about the cleaning services
- **AND** optionally an image or illustration alongside the text
- **AND** the section SHALL have a white or light grey background

### Requirement: Services section

The system SHALL render a grid of cleaning service cards.

#### Scenario: Service cards

- **GIVEN** the services section is rendered
- **THEN** it SHALL display a heading ("Our Services" or similar)
- **AND** at least 3 service cards SHALL appear in a responsive grid
- **AND** each card SHALL contain an icon (from lucide-react), a title,
  and a short description
- **AND** cards SHALL have a white background, subtle shadow
  (`0 2px 15px rgba(0,0,0,0.08)`), and `8px` border radius
- **AND** service types SHALL include: Residential Cleaning, Commercial
  Cleaning, Deep Cleaning (or similar cleaning service categories)

#### Scenario: Service card hover

- **GIVEN** a service card is rendered
- **WHEN** the user hovers over the card
- **THEN** the card SHALL show a subtle elevation/shadow increase effect

### Requirement: Statistics section

The system SHALL render animated statistics counters.

#### Scenario: Statistics display

- **GIVEN** the statistics section is rendered
- **THEN** it SHALL display at least 3 statistics with numbers and labels
  (e.g., "500+ Projects Completed", "200+ Happy Clients", "10+ Years
  Experience")
- **AND** the numbers SHALL animate/count up from 0 to their target value
  when scrolled into view
- **AND** the section SHALL have a distinct background (dark or brand
  green `#81d742`)

#### Scenario: Scroll-triggered animation

- **GIVEN** the statistics section is below the fold
- **WHEN** the user scrolls until the section enters the viewport
- **THEN** the counter animation SHALL begin
- **AND** the animation SHALL run once (not restart on re-scroll)

### Requirement: Pricing section

The system SHALL render a pricing/packages section.

#### Scenario: Pricing cards

- **GIVEN** the pricing section is rendered
- **THEN** it SHALL display a heading ("Pricing" or "Our Packages")
- **AND** at least 3 pricing cards SHALL appear in a row/grid
- **AND** each card SHALL contain: package name, price, list of included
  services/features, and a CTA button
- **AND** the middle/popular card SHALL be visually highlighted (larger,
  different border, or brand green accent)

#### Scenario: Pricing card structure

- **GIVEN** a pricing card is rendered
- **THEN** it SHALL show the package name at the top
- **AND** the price SHALL be prominently displayed (large font)
- **AND** a list of features/services with checkmarks SHALL appear
- **AND** a "Get Started" or "Book Now" button SHALL appear at the bottom

### Requirement: Contact section

The system SHALL render a contact form alongside a map placeholder.

#### Scenario: Contact form

- **GIVEN** the contact section is rendered
- **THEN** it SHALL display a heading ("Contact Us" or "Get in Touch")
- **AND** a form with fields: Name, Email, Phone (optional), Service
  selection (dropdown), Message/Description
- **AND** a submit button with brand green styling
- **AND** form submission SHALL show a success state (no real backend)

#### Scenario: Map placeholder

- **GIVEN** the contact section is rendered
- **THEN** a map placeholder SHALL appear alongside the form (static image
  or embedded map placeholder — no real Google Maps API key needed)

### Requirement: Footer

The system SHALL render a footer with company info and Component Dock link.

#### Scenario: Footer content

- **GIVEN** the footer is rendered
- **THEN** it SHALL display the brand name "Maidwise"
- **AND** quick links (Home, About, Services, Pricing, Contact)
- **AND** contact info (address, phone, email — placeholder content)
- **AND** social media icon links (placeholder)
- **AND** a "Made with Component Dock" credit linking
  https://www.componentdock.com/
- **AND** the footer SHALL have a dark background (dark grey or near-black)

## Verification checklist

- [ ] Navigation bar renders with all links and CTA button
- [ ] Mobile hamburger menu toggles correctly
- [ ] Hero section displays with parallax background effect
- [ ] About section renders with heading and description
- [ ] Service cards render in responsive grid with icons
- [ ] Service cards have hover elevation effect
- [ ] Statistics counters animate on scroll into view
- [ ] Pricing cards display with features and CTA buttons
- [ ] Popular pricing card is visually highlighted
- [ ] Contact form renders all fields with validation
- [ ] Contact form shows success state on submit
- [ ] Map placeholder renders alongside contact form
- [ ] Footer displays with Component Dock link
- [ ] Page is responsive at 768px and 480px breakpoints
- [ ] No ColorLib references in app code (provenance in spec only)
- [ ] Brand color `#81d742` used consistently for CTAs and accents
- [ ] Google Fonts (Poppins) loaded via `<link>` in index.html
- [ ] `public/CNAME` = `maidwise.free.componentdock.com`
- [ ] `"homepage"` = `https://maidwise.free.componentdock.com`
