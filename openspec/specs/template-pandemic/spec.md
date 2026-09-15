# Template: Pandemic (Health / Information)

## Purpose

Pandemic is a single-page health information template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Covid" design (see TEMPLATES.md), built under the
monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a coronavirus information page with purple (#6f42c1)
accents: a hero ("Stay Safe. Stay Home."), statistics bar, "What is
Coronavirus?" info cards, prevention tips, do/avoid protection lists,
symptoms guide, news articles, an about section, and a dark 4-column
footer. Pandemic recreates that structure section-for-section with
matching layout, colors, typography, and content types (no ColorLib
assets copied).

- **Source**: [ColorLib Covid](https://colorlib.com/wp/template/covid/)
- **Preview**: https://preview.colorlib.com/theme/covid/
- **Screenshot**: https://colorlib.com/wp/wp-content/uploads/sites/2/covid-free-template.jpg
- **Stack**: Vite · React 19 · Tailwind CSS 4 · TypeScript
- **New name**: `pandemic` (apps/pandemic, `@free-react-templates/pandemic`)

## Design reference (replication findings)

- **Original:** ColorLib "Covid" — coronavirus information website template
  (source: https://colorlib.com/wp/template/covid/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/covid/`
- **Section order (1:1):**
  1. Nav — Sticky top nav with logo ("Pandemic"), nav links (Home, Prevention, Protect Yourself, Symptoms, News, About, Contact), hamburger menu for mobile
  2. Hero — Purple-tinted background (rgba(111,66,193,0.1)), curved bottom-right corner (border-bottom-right-radius: 50%). Heading "Stay Safe. Stay Home." (h1, purple, weight 900), subtitle, "How to prevent" CTA button (purple pill), shield icon
  3. Statistics — Dark background with 3 stat cards: Total Cases (14,112,077), Deaths (595,685), Recovered (8,397,665). Each with icon + number + label
  4. What is Coronavirus? — Light bg, heading + description paragraph, 4 prevention tip cards with icons (Protection, Prevention, Treatments, Symptoms)
  5. How to Prevent — White bg, heading + 4 prevention items with icons (Stay at home, Wear facemask, Keep social distancing, Wash your hands). Each: icon + title + description
  6. How To Protect Yourself — Light purple bg, 2-column layout: "You should do" (5 items) + "You should avoid" (5 items)
  7. Symptoms — White bg, heading + 4 symptom cards with icons (High Fever, Cough, Sore Throat, Headache)
  8. News & Articles — Light purple bg, 3 blog post cards with images, title, excerpt, "Read more" link
  9. About — Description paragraph about the template
  10. Footer — Dark bg, 4-column layout: About text, Quick Links, Helpful Links, Resources. Copyright + Component Dock link
- **Design tokens extracted:**
  - Brand primary: **#6f42c1** (purple) — headings, buttons, accents
  - Brand light: **rgba(111,66,193,0.1)** — hero background
  - Brand lighter: **rgba(111,66,193,0.05)** — light purple sections
  - Danger/accent: **#e84a5f** (red) — symptoms icons
  - Success: **#a8df65** (green) — do list indicators
  - Font: **Mulish** (sans-serif) via Google Fonts
  - Buttons: pill-shaped (30px border-radius)
  - Hero: curved bottom-right corner (50% border-radius)
- **Recreation decisions:** 10-section layout matching original; navbar uses `<nav>` with hamburger for mobile; hero uses curved corner and shield icon; stats use lucide-react icons; do/avoid lists use Check/X icons; all images are picsum.photos seeded; Google Fonts via `<link>`.

Pandemic lives in `apps/pandemic` and uses shared components from
`packages/ui` (Button, ButtonLink, Card, Badge, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a sticky top navigation bar with the site name "Pandemic" and links to all major sections, with a hamburger toggle for mobile viewports.

#### Scenario: Navbar content on desktop

- **GIVEN** the page is loaded on a desktop viewport
- **THEN** the nav shows the logo text "Pandemic"
- **AND** navigation links are visible: "Home", "Prevention", "Protect Yourself", "Symptoms", "News", "About", "Contact"

#### Scenario: Mobile hamburger menu toggle

- **GIVEN** the viewport is narrow (mobile)
- **WHEN** the user taps the hamburger icon (aria-label "Open menu")
- **THEN** a mobile menu opens with all navigation links
- **AND** the hamburger icon changes to "Close menu"

#### Scenario: Mobile menu closes on link click

- **GIVEN** the mobile menu is open
- **WHEN** the user taps a navigation link
- **THEN** the mobile menu closes

### Requirement: Hero section

The system SHALL render a hero section with a purple-tinted background, curved bottom-right corner, heading, subtitle, and CTA button.

#### Scenario: Hero content

- **GIVEN** the user is on the homepage
- **THEN** the hero shows heading "Stay Safe. Stay Home."
- **AND** a subtitle is visible below the heading
- **AND** a "How to prevent" purple pill button is visible

#### Scenario: Hero has curved bottom-right shape

- **GIVEN** the hero section is visible
- **THEN** the bottom-right corner has a curved border-radius (50%)

### Requirement: Statistics section

The system SHALL render a dark-background section with 3 stat cards showing pandemic statistics.

#### Scenario: Statistics display 3 key numbers

- **GIVEN** the user scrolls to the statistics section
- **THEN** 3 stat cards are visible
- **AND** each card shows an icon, a number, and a label
- **AND** the numbers are: 14,112,077 (Total Cases), 595,685 (Deaths), 8,397,665 (Recovered)

### Requirement: What is Coronavirus section

The system SHALL render an information section with 4 tip cards about coronavirus.

#### Scenario: Info section shows prevention tips

- **GIVEN** the user scrolls to the "What is Coronavirus?" section
- **THEN** 4 tip cards are visible with icons
- **AND** the tips are: Protection, Prevention, Treatments, Symptoms

### Requirement: How to Prevent section

The system SHALL render a prevention section with 4 prevention items.

#### Scenario: Prevention section shows 4 tips

- **GIVEN** the user scrolls to the prevention section
- **THEN** 4 prevention items are displayed with icons
- **AND** the items are: Stay at home, Wear facemask, Keep social distancing, Wash your hands

### Requirement: How To Protect Yourself section

The system SHALL render a two-column do/avoid list section.

#### Scenario: Protection section shows do/avoid lists

- **GIVEN** the user scrolls to the protection section
- **THEN** two lists are visible: "You should do" and "You should avoid"
- **AND** the "do" list includes: Stay at home, Wear a mask in public, Use hand sanitizer, Disinfect your home regularly, Wash your hands frequently
- **AND** the "avoid" list includes: Avoid infected people, Avoid touching animals, Avoid handshaking, Avoid contaminated surfaces, Don't touch your face

### Requirement: Symptoms section

The system SHALL render a symptoms section with 4 symptom cards.

#### Scenario: Symptoms section shows 4 cards

- **GIVEN** the user scrolls to the symptoms section
- **THEN** 4 symptom cards are visible with icons
- **AND** the symptoms are: High Fever, Cough, Sore Throat, Headache

### Requirement: News & Articles section

The system SHALL render a news section with 3 blog post cards.

#### Scenario: Blog section displays 3 article cards

- **GIVEN** the user scrolls to the news section
- **THEN** 3 blog post cards are visible
- **AND** each card has an image, title, excerpt, and "Read more" link

### Requirement: Footer

The system SHALL render a dark 4-column footer with a Component Dock attribution link.

#### Scenario: Footer displays 4-column layout

- **GIVEN** the user scrolls to the footer
- **THEN** 4 columns are visible: About, Quick Links, Helpful Links, Resources
- **AND** the copyright line includes a link to Component Dock (https://www.componentdock.com/)

### Requirement: App structure

The system SHALL render all sections in order within semantic landmarks.

#### Scenario: App composes all sections

- **GIVEN** the page loads
- **THEN** the document title is "Pandemic — Health Information Template"
- **AND** a navigation landmark is present
- **AND** a main landmark contains all content sections
- **AND** a contentinfo landmark (footer) is present
