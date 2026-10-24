# Template: CivicPulse (Political/Party Landing)

Recreation of ColorLib Politics (https://colorlib.com/wp/template/politics/)

## Purpose

Civicpulse is a political/party landing template with a top bar, navbar, hero, countdown, services, about band, gallery, stat counters and feedback. It recreates the ColorLib "Politics" design (https://colorlib.com/wp/template/politics/, preview: https://preview.colorlib.com/theme/politics/) as a Vite + React 19 + Tailwind CSS 4 + TypeScript template.

## Design Tokens (from preview CSS)

- **Primary brand color:** #3898f8 (blue)
- **Background light:** #f9f9ff (very light blue-gray)
- **Background dark/footer:** #04091e (near-black navy)
- **Heading color:** #222222
- **Body text:** #777777
- **Font family:** Poppins (Google Fonts), weights 300–700
- **Button style:** rounded pill (border-radius: 25px), primary: #3898f8 bg, white text
- **Header top bar:** #222222 bg, white text
- **Counter overlay:** rgba(0,0,0,0.7) over background image
- **Section padding:** 120px vertical (section-gap)
- **Accordion active:** #3898f8 bg, white text
- **Blog date badge:** #000 bg, white text
- **Footer social hover:** #3898f8
- **Surface (measured):** `#4cd3e3` — paints it ×7 — `background` on `.genric-btn.success`; main.css (49,840 B, sha256 ad5d47ac497c) · <https://preview.colorlib.com/theme/politics/>

## Section Structure (in order)

1. **TopBar** — dark bar (#222) with social icons (Facebook, Twitter, Dribbble, Behance) left, phone + email right
2. **Navbar** — logo left, nav links right (Home, About, Service, Team, Blog dropdown, Elements, Contact), sticky white bg on scroll
3. **Hero** — full-screen background image with dark overlay, centered text: "Don't look further, This is our Leader" subtitle + "Support Our Party" heading + lorem paragraph + "Get Started" CTA button
4. **Countdown** — split layout: left "Election is knocking at door" + subtitle, right blue (#3898f8) countdown timer area with days/hours/minutes/seconds
5. **Services** — centered heading "What we Offer to our Supporters", 3 image cards with titles (Conduct Campaign, Generate Member, Energy Saving Policy) + descriptions
6. **About** — split: left background image, right content "Who we are to Serve the nation" + description + 2 feature items (Expert Services with diamond icon, Great Support with phone icon)
7. **Gallery** — centered heading "Our Gallery Archive", 4 images in masonry grid (8+4 cols, then 6+6 cols)
8. **Counter** — dark overlay background, 4 circular stat counters (2K+ Projects, 5.5K Employees, 959 Clients, 367 Tickets)
9. **Feedback** — split: left accordion (Success, Info, Danger, Warning items), right video play button with dark overlay
10. **Brands** — logo carousel strip on light bg
11. **Blog** — centered heading "Latest From Our Blog", 4 blog cards (image, date, title, excerpt, likes/comments)
12. **Footer** — dark bg (#04091e), 3 columns: Top Products links, Newsletter with email input + subscribe, Instagram feed grid; bottom: copyright + social icons

## Requirements

### Feature: Navbar

#### Scenario: Renders all nav links (Home, About, Service, Team, Blog, Elements,…

- **Given** the page is rendered
- **When** the Navbar is inspected
- **Then** it renders all nav links (Home, About, Service, Team, Blog, Elements, Contact)

#### Scenario: Logo is visible and links to home

- **Given** the page is rendered
- **When** the Navbar is inspected
- **Then** Logo is visible and links to home

#### Scenario: Top bar shows phone and email

- **Given** the page is rendered
- **When** the Navbar is inspected
- **Then** Top bar shows phone and email

### Feature: Hero

#### Scenario: Displays heading "Support Our Party"

- **Given** the page is rendered
- **When** the Hero is inspected
- **Then** it displays heading "Support Our Party"

#### Scenario: Displays CTA button "Get Started"

- **Given** the page is rendered
- **When** the Hero is inspected
- **Then** it displays CTA button "Get Started"

#### Scenario: Background image with dark overlay

- **Given** the page is rendered
- **When** the Hero is inspected
- **Then** Background image with dark overlay

### Feature: Countdown

#### Scenario: Shows "Election is knocking at door" heading

- **Given** the page is rendered
- **When** the Countdown is inspected
- **Then** it shows "Election is knocking at door" heading

#### Scenario: Displays countdown timer values

- **Given** the page is rendered
- **When** the Countdown is inspected
- **Then** it displays countdown timer values

### Feature: Services

#### Scenario: Renders 3 service cards with images, titles, descriptions

- **Given** the page is rendered
- **When** the Services is inspected
- **Then** it renders 3 service cards with images, titles, descriptions

#### Scenario: Cards are responsive (stack on mobile)

- **Given** the page is rendered
- **When** the Services is inspected
- **Then** Cards are responsive (stack on mobile)

### Feature: About

#### Scenario: Shows "Who we are to Serve the nation" heading

- **Given** the page is rendered
- **When** the About is inspected
- **Then** it shows "Who we are to Serve the nation" heading

#### Scenario: Displays 2 feature items with icons

- **Given** the page is rendered
- **When** the About is inspected
- **Then** it displays 2 feature items with icons

### Feature: Gallery

#### Scenario: Renders 4 gallery images in grid layout

- **Given** the page is rendered
- **When** the Gallery is inspected
- **Then** it renders 4 gallery images in grid layout

#### Scenario: Images have hover opacity effect

- **Given** the page is rendered
- **When** the Gallery is inspected
- **Then** Images have hover opacity effect

### Feature: Counter

#### Scenario: Shows 4 stat counters with values and labels

- **Given** the page is rendered
- **When** the Counter is inspected
- **Then** it shows 4 stat counters with values and labels

#### Scenario: Circular design with blue accent

- **Given** the page is rendered
- **When** the Counter is inspected
- **Then** Circular design with blue accent

### Feature: Feedback

#### Scenario: Accordion with 4 items (Success, Info, Danger, Warning)

- **Given** the page is rendered
- **When** the Feedback is inspected
- **Then** Accordion with 4 items (Success, Info, Danger, Warning)

#### Scenario: Clicking an item expands its content

- **Given** the page is rendered
- **When** the Feedback is inspected
- **Then** clicking an item expands its content

#### Scenario: Only one item open at a time

- **Given** the page is rendered
- **When** the Feedback is inspected
- **Then** Only one item open at a time

#### Scenario: Video play button on right side

- **Given** the page is rendered
- **When** the Feedback is inspected
- **Then** Video play button on right side

### Feature: Blog

#### Scenario: Renders 4 blog cards with image, date, title, excerpt

- **Given** the page is rendered
- **When** the Blog is inspected
- **Then** it renders 4 blog cards with image, date, title, excerpt

#### Scenario: Shows likes and comments count

- **Given** the page is rendered
- **When** the Blog is inspected
- **Then** it shows likes and comments count

### Feature: Footer

#### Scenario: Links to Component Dock (https://www.componentdock.com/)

- **Given** the page is rendered
- **When** the Footer is inspected
- **Then** it links to Component Dock (https://www.componentdock.com/)

#### Scenario: Newsletter email input

- **Given** the page is rendered
- **When** the Footer is inspected
- **Then** Newsletter email input

#### Scenario: Social media icons

- **Given** the page is rendered
- **When** the Footer is inspected
- **Then** Social media icons

#### Scenario: Copyright text

- **Given** the page is rendered
- **When** the Footer is inspected
- **Then** Copyright text

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/civicpulse/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/civicpulse/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [ ] Navbar — Given** the page is rendered
- [ ] Hero — Given** the page is rendered
- [ ] Countdown — Given** the page is rendered
- [ ] Services — Given** the page is rendered
- [ ] About — Given** the page is rendered
- [ ] Gallery — Given** the page is rendered
- [ ] Counter — Given** the page is rendered
- [ ] Feedback — Given** the page is rendered
- [ ] Blog — Given** the page is rendered
