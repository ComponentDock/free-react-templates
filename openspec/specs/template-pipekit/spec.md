# Template: Pipekit (Creative Agency Landing)

## Purpose

Recreation of ColorLib **Pexman** (`https://colorlib.com/wp/template/pexman/`).
Preview: `https://preview.colorlib.com/theme/pexman/`

**Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript (strict).
**Package:** `@free-react-templates/pipekit`

## Design Tokens (from live preview CSS analysis)

| Token              | Value                                         |
| ------------------ | --------------------------------------------- |
| Brand / primary    | `#000000` (black)                             |
| Accent / gold      | `#d9bf77`                                     |
| Primary CTA        | `#0062cc` → Tailwind blue `#007bff`           |
| Body background    | `#ffffff` (white)                             |
| Section alt bg     | `#f7f7f7` (light gray)                        |
| Counter overlay bg | `#1d2124` (dark charcoal)                     |
| Navbar bg          | `#000` dark with semi-transparent variant     |
| Font family        | **Montserrat**, Arial, sans-serif             |
| Button radius      | `0` (square / sharp corners)                  |
| Card radius        | `0` to `5px` (very subtle rounding)           |
| Star rating color  | Gold via `#d9bf77` / `#f6c23e`               |

### Tailwind Theme Map

```css
@theme {
  --color-brand: #000000;
  --color-accent: #d9bf77;
  --color-cta: #007bff;
  --font-heading: "Montserrat", sans-serif;
  --font-body: "Montserrat", sans-serif;
}
```

## Section Order (from live preview DOM)

### 1. Navbar
- Dark background (`bg-dark`), transparent-on-scroll
- Brand text "Pipekit" (left)
- Nav links: Home, About, Works, Blog, Contact
- Hamburger on mobile

### 2. Hero Slider (full-height)
- Full-viewport carousel (3 slides), each with:
  - Background image (dark overlay)
  - Left-aligned heading + paragraph + "View Portfolio" CTA button
  - Dot pagination below
- Headings: "Build Stunning Websites Design", "Make Creative Website", "We Are Pipekit Creative Agency"
- CTA: `btn btn-primary px-5 py-3` — blue rounded button

### 3. About (split layout)
- Two-column: image (left) + text block (right) or reversed
- Heading: "We Are Creative Agency That Create Beautiful Websites"
- Two paragraphs of body text
- CTA button: "Start A Project"

### 4. Counter Stats
- Dark overlay background (`#1d2124`)
- 4 columns: Achievements (K+), Project Completed (K+), Years of Experience, Team Members
- Animated number counters

### 5. Services ("What We Offer")
- White background
- Section heading + intro paragraph
- 4 service cards in a row: Research, Design, Development, Testing
  - Each card: icon + heading + short description
- CTA button: "Start A Project"

### 6. Portfolio Gallery ("Our Stunning Works")
- Filter tabs: All, Branding, Web Design, Illustration, Application
- Grid of project cards (3 columns)
  - Each card: background image + hover overlay with link icon + project title
- Filterable (click tab shows/hides)

### 7. Testimonials
- White background
- "What Are Clients Say" heading with star rating (5 stars)
- Testimonial text + client name + position
- Carousel / slider of 2+ testimonials

### 8. Blog ("Our Latest Blog")
- Light gray background (`#f7f7f7`)
- 3 blog post cards in a row
  - Each card: background image, date (calendar icon), title, excerpt
- Cards have image bg with overlay

### 9. Footer
- Light gray background
- 3-column layout:
  - Column 1: Brand "Pipekit" + description + social icons (Facebook, Twitter, Instagram)
  - Column 2: "Navigation" — links list (Home, Services, Work, About, Blog, Press, Contact, Support, Privacy)
  - Column 3: "Have a Question?" — contact info + CTA
- Footer link: `https://www.componentdock.com/` ("Component Dock")

## Requirements

### Navbar

#### Scenario: Navbar renders with correct links

- **GIVEN** the page loads
- **THEN** a navigation bar is visible at the top
- **AND** it contains links: Home, About, Works, Blog, Contact
- **AND** the brand name "Pipekit" is displayed

#### Scenario: Navbar is responsive

- **GIVEN** the viewport is mobile width
- **THEN** a hamburger menu button is visible
- **AND** clicking it toggles the navigation links

### Hero Slider

#### Scenario: Hero slider displays 3 slides

- **GIVEN** the page loads
- **THEN** the hero section is visible
- **AND** it contains 3 carousel slides
- **AND** each slide has a heading, paragraph, and CTA button

#### Scenario: Hero slider auto-advances

- **GIVEN** the hero slider is on slide 1
- **WHEN** 5 seconds elapse
- **THEN** the slider advances to slide 2

#### Scenario: Hero slider navigation

- **GIVEN** the hero slider is on slide 1
- **WHEN** the user clicks dot 2
- **THEN** slide 2 becomes active

### About Section

#### Scenario: About section renders split layout

- **GIVEN** the user scrolls to the about section
- **THEN** a heading "We Are Creative Agency..." is visible
- **AND** two columns are displayed: image and text
- **AND** a "Start A Project" CTA button is present

### Counter Stats

#### Scenario: Counter stats display 4 metrics

- **GIVEN** the counter section is in view
- **THEN** 4 stat columns are visible
- **AND** each shows a number with a label (Achievements, Projects, Years, Team)

### Services

#### Scenario: Services section displays 4 services

- **GIVEN** the user scrolls to the services section
- **THEN** a heading "What We Offer" is visible
- **AND** 4 service cards are rendered: Research, Design, Development, Testing
- **AND** each card has an icon, title, and description

### Portfolio Gallery

#### Scenario: Portfolio shows all projects

- **GIVEN** the portfolio section is visible
- **THEN** filter tabs are displayed: All, Branding, Web Design, Illustration, Application
- **AND** project cards are shown in a grid

#### Scenario: Portfolio filters by category

- **GIVEN** the portfolio is showing all projects
- **WHEN** the user clicks "Branding"
- **THEN** only branding projects are visible

### Testimonials

#### Scenario: Testimonial section shows client feedback

- **GIVEN** the testimonials section is visible
- **THEN** a heading "What Are Clients Say" is displayed
- **AND** a star rating (5 stars) is shown
- **AND** testimonial text with client name and position is visible

### Blog

#### Scenario: Blog section displays 3 posts

- **GIVEN** the blog section is visible
- **THEN** a heading "Our Latest Blog" is shown
- **AND** 3 blog cards are rendered
- **AND** each card has a background image, date, title, and excerpt

### Footer

#### Scenario: Footer renders with all columns

- **GIVEN** the footer is visible
- **THEN** brand name "Pipekit" and description are shown
- **AND** social media icons are present
- **AND** navigation links are listed
- **AND** contact section is displayed
- **AND** a link to Component Dock is present

### Requirement: Component Dock attribution

The system SHALL credit Component Dock — the marketplace that publishes this
template — with a visible link to `https://www.componentdock.com/` in the site
footer (AGENTS.md rule 5). The credit is chrome, not source content: it SHALL NOT
change the footer's own layout or copy beyond the credit line.

#### Scenario: Footer attribution

- **GIVEN** any page of the template is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL contain an anchor whose `href` is
  `https://www.componentdock.com/`
- **AND** the anchor's text SHALL name Component Dock

## Verification Checklist

- [ ] Navbar: dark bg, brand, 5 nav links, hamburger on mobile
- [ ] Hero: full-height, 3-slide carousel, dark overlay, headings, CTA buttons
- [ ] About: split layout (image + text), heading, 2 paragraphs, CTA
- [ ] Counter: dark overlay, 4 stat columns, animated numbers
- [ ] Services: white bg, 4 service cards with icons, CTA
- [ ] Portfolio: filter tabs, 3-column grid, hover effects
- [ ] Testimonials: star rating, testimonial text, client info
- [ ] Blog: 3 post cards, background images, date/title/excerpt
- [ ] Footer: 3 columns, brand + social, navigation, contact, Component Dock link
- [ ] Design tokens: black brand, gold accent, Montserrat font, square buttons
- [ ] No ColorLib references in app code (provenance only in spec/TEMPLATES.md)
- [ ] Footer links to Component Dock

## Verification checklist

- [ ] Footer credits Component Dock with a link to https://www.componentdock.com/
