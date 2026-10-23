# Template: Sunflux (Solar Energy Business)

## Purpose

A Solar Energy Business template with hero, stats bar, services, roi calculator, installation timeline and cta banner sections. Recreation of the ColorLib **SolarShift** template as a React 19 + Vite + Tailwind CSS 4 + TypeScript single-page template.

- **Source name:** SolarShift
- **ColorLib slug:** `solarshift`
- **ColorLib page:** https://colorlib.com/wp/template/solarshift/
- **Preview URL (live):** https://solarshift-colorlib.pages.dev/

✅ **Pointer status — live reference re-probed 2026-10-13d (bot wall
lifted):** the demo is served by the ColorLib preview host —
`https://preview.colorlib.com/theme/solarshift/` answers **HTTP 200**,
95,843 B `text/html; charset=utf-8` (85,938 B, sha256 `2ffd94b4ab94…` after
stripping the injected print-media `@font-face` block and the Insights
beacon); its stylesheet
`https://preview.colorlib.com/theme/solarshift/_astro/Base.KUABgugQ.css` is
59,355 B sha256 `089af0126b89…` and carries all 6 hex tokens recorded below
(Manrope), so the live build matches the design the mirror served (the
sheet's Astro hash differs from the mirror's prep-time `Base.KUABgugQ.css` —
a rebuild). The Cloudflare Pages mirror
`https://solarshift-colorlib.pages.dev` is still **NXDOMAIN** (re-checked
2026-10-13d). ⚠️ `apps/sunflux` was built from the mirror's tokens before
the migration, so it follows the mirror, not today's preview host.
- **Original stack:** Astro 7 + Tailwind CSS 4.x
- **Our stack:** React 19 + Vite (latest) + Tailwind CSS 4 + TypeScript (strict)

## Design Tokens

Extracted from the live preview CSS (`/_astro/Base.KUABgugQ.css`) and HTML:

| Token                | Value                                         | Notes                                    |
| -------------------- | --------------------------------------------- | ---------------------------------------- |
| Font family          | Manrope (Google Fonts), system-ui, sans-serif | Weights 300–800                          |
| Primary brand color  | `#16a34a` (green-600)                         | Used for CTA buttons, accents, gradients |
| Primary hover        | `#15803d` (green-700)                         | Button hover states                      |
| Accent color         | `#f59e0b` (amber-500)                         | Star ratings, text-gradient endpoint     |
| Gradient             | `from #16a34a to #f59e0b`                     | `.text-gradient` class on hero headline  |
| Hero background      | `from-primary-50 to-white` (gradient)         | With decorative blurred circles          |
| Stats section bg     | `gray-50` (`#f9fafb`)                         | Full-width stat counters                 |
| Card border radius   | `1rem` (`rounded-2xl`)                        | Service cards, testimonial cards         |
| Button border radius | `0.5rem` (`rounded-lg`)                       | Primary + secondary buttons              |
| Button shadow        | `shadow-lg shadow-primary-600/25`             | Green shadow on CTA buttons              |
| Dark mode            | Class-based (`.dark`)                         | Toggle via `document.documentElement`    |
| Body bg (dark)       | `#030712` (gray-950)                          |                                          |
| Footer bg            | `#111827` (gray-900)                          | Dark footer with gray-400 text           |

## Section Structure (in order)

1. **Navbar** — Sticky header, logo (left), nav links (About, Products, Services dropdown, Pricing, Blog, Contact), dark mode toggle, "Get Free Quote" CTA button, mobile hamburger menu
2. **Hero** — Two-column layout: left = badge "Go Solar Today" + headline with text-gradient ("Power Your Home / With Clean Energy") + description + CTA buttons + social proof stats (25,000+ Trees Saved, 8,500+ Tons CO2 Offset); right = Savings Calculator widget (state select, bill slider, 4 result cards: Annual Savings, CO2 Offset, Payback Period, Federal Tax Credit)
3. **Stats Bar** — Full-width gray-50 section, 4 stat counters (10K+ Installations, $50M+ Saved, 98% Satisfaction, 50 States)
4. **Services** — Section heading with "Services" badge + "Complete Solar Solutions" + 3 service cards (Residential Solar, Commercial Solar, Battery Storage) in a responsive grid
5. **ROI Calculator** — Comparison section: solar vs. traditional energy, ROI chart/bar visualization
6. **Installation Timeline** — Step-by-step process timeline with visual indicators
7. **Testimonials** — Carousel/slider with 3+ customer review cards (star rating, quote, name, location)
8. **CTA Banner** — Full-width primary-600 background, "Ready to Go Solar?" heading + description + CTA buttons
9. **FAQ** — Accordion-style FAQ section with 5 questions and expand/collapse
10. **Contact Form** — Form with Full Name, Email, Service Interest dropdown, Message textarea + Office Hours info card
11. **Footer** — Dark (gray-900) footer: brand column + link columns (Solutions, Resources, Company) + Contact info (address, phone, email) + social icons + copyright + bottom bar

## Requirements

### Requirement: Navbar renders all navigation links

Users SHALL see a sticky header with the Sunflux brand, navigation links, dark mode toggle, and a "Get Free Quote" CTA button.

#### Scenario: Navbar renders all navigation links

- **GIVEN** the page loads
- **THEN** the navbar displays links: About, Products, Services, Pricing, Blog, Contact
- **AND** the navbar displays a "Get Free Quote" button
- **AND** the navbar displays a dark mode toggle button

### Requirement: Dark mode toggle

Users SHALL be able to toggle dark mode and have the preference persist via localStorage.

#### Scenario: Dark mode toggle

- **GIVEN** the page loads in light mode
- **WHEN** the user clicks the dark mode toggle
- **THEN** the page switches to dark mode
- **AND** the toggle icon changes to sun
- **WHEN** the user clicks the toggle again
- **THEN** the page switches back to light mode

### Requirement: Hero section displays savings calculator

The hero section SHALL display a headline, description, CTA buttons, social proof stats, and a savings calculator widget.

#### Scenario: Hero section displays savings calculator

- **GIVEN** the hero section is visible
- **THEN** the hero shows the headline "Power Your Home With Clean Energy"
- **AND** the hero shows a savings calculator widget
- **AND** the calculator has a state dropdown selector
- **AND** the calculator has a monthly bill slider ($50-$500)
- **AND** the calculator shows 4 result cards

### Requirement: Savings calculator computes results

The savings calculator SHALL compute annual savings, CO2 offset, payback period, and federal tax credit based on state and bill inputs.

#### Scenario: Savings calculator computes results

- **GIVEN** the calculator is visible
- **WHEN** the user selects "California" from the state dropdown
- **AND** the user sets the monthly bill to $200
- **THEN** the Annual Savings card updates to a non-zero dollar amount
- **AND** the CO2 Offset card shows a tons value
- **AND** the Payback Period card shows a years value
- **AND** the Federal Tax Credit card shows a dollar amount

### Requirement: Stats bar displays counters

The stats section SHALL display 4 key metrics.

#### Scenario: Stats bar displays counters

- **GIVEN** the stats section is visible
- **THEN** it shows 4 stat items: Installations, Saved for Customers, Customer Satisfaction, States Served
- **AND** each stat displays its numeric value

### Requirement: Services section displays cards

The services section SHALL display 3 service cards with titles, icons, and descriptions.

#### Scenario: Services section displays cards

- **GIVEN** the services section is visible
- **THEN** it shows a heading "Complete Solar Solutions"
- **AND** it displays 3 service cards: Residential Solar, Commercial Solar, Battery Storage
- **AND** each card has a title, icon, and description paragraph

### Requirement: ROI calculator displays comparison

The ROI calculator SHALL show a comparison table between solar and traditional energy costs, plus a cumulative savings bar chart.

#### Scenario: ROI calculator displays comparison

- **GIVEN** the ROI calculator section is visible
- **THEN** it shows a heading "Solar vs. Traditional Energy"
- **AND** it shows a cost comparison table with Solar and Grid columns
- **AND** it shows cumulative savings bars for Year 1, Year 5, Year 10, and Year 25

### Requirement: Installation timeline displays steps

The installation timeline SHALL show a 4-step process with visual indicators.

#### Scenario: Installation timeline displays steps

- **GIVEN** the installation timeline section is visible
- **THEN** it shows a heading "How It Works"
- **AND** it displays 4 steps: Free Consultation, Design & Permits, Professional Installation, Activation & Monitoring
- **AND** each step has a number, icon, title, and description

### Requirement: Testimonials carousel navigates

The testimonials section SHALL display customer reviews in a carousel with navigation controls.

#### Scenario: Testimonials carousel navigates

- **GIVEN** the testimonials section is visible
- **THEN** it shows at least 3 testimonial cards
- **AND** each card has a star rating, quote text, customer name, and location
- **AND** prev/next navigation buttons are present
- **WHEN** the user clicks the next button
- **THEN** the carousel advances to the next slide

### Requirement: CTA banner displays

The CTA banner SHALL display a call-to-action heading and buttons.

#### Scenario: CTA banner displays

- **GIVEN** the CTA banner section is visible
- **THEN** it shows "Ready to Go Solar?" heading
- **AND** it shows "Get Free Quote" and phone number buttons

### Requirement: FAQ accordion expands and collapses

The FAQ section SHALL display at least 5 questions with expand/collapse behavior.

#### Scenario: FAQ accordion expands and collapses

- **GIVEN** the FAQ section is visible
- **THEN** it displays at least 5 FAQ questions
- **WHEN** the user clicks a FAQ question
- **THEN** the answer expands into view
- **WHEN** the user clicks the same question again
- **THEN** the answer collapses

### Requirement: Contact form validates inputs

The contact form SHALL validate required fields and show error messages for invalid input.

#### Scenario: Contact form validates inputs

- **GIVEN** the contact form is visible
- **WHEN** the user submits the form with empty required fields
- **THEN** validation errors appear for Full Name, Email, and Message
- **WHEN** the user fills in valid data and submits
- **THEN** the form submission handler fires

### Requirement: Footer renders correctly

The footer SHALL display brand info, link columns, contact details, social icons, copyright, and a link to Component Dock.

#### Scenario: Footer renders correctly

- **GIVEN** the footer is visible
- **THEN** it shows the brand logo and tagline
- **AND** it shows link columns: Solutions, Resources, Company
- **AND** it shows contact info: address, phone, email
- **AND** it shows social media icons
- **AND** it shows copyright text
- **AND** it links to https://www.componentdock.com/

### Requirement: Mobile responsive layout

The template SHALL be responsive and adapt to mobile viewports.

#### Scenario: Mobile responsive layout

- **GIVEN** the viewport width is less than 768px
- **THEN** the navbar collapses to a hamburger menu
- **AND** the hero section stacks vertically
- **AND** the services grid becomes single column

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/sunflux/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/sunflux/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [ ] Navbar renders all navigation links — the navbar displays links: About, Products, Services, Pricing, Blog, Contact
- [ ] Dark mode toggle — the page switches to dark mode
- [ ] Hero section displays savings calculator — the hero shows the headline "Power Your Home With Clean Energy"
- [ ] Savings calculator computes results — the Annual Savings card updates to a non-zero dollar amount
- [ ] Stats bar displays counters — it shows 4 stat items: Installations, Saved for Customers, Customer Satisfaction, States Served
- [x] Services section displays cards — it shows a heading "Complete Solar Solutions"
- [x] ROI calculator displays comparison — it shows a heading "Solar vs. Traditional Energy"
- [x] Installation timeline displays steps — it shows a heading "How It Works"
- [ ] Testimonials carousel navigates — it shows at least 3 testimonial cards
- [x] CTA banner displays — it shows "Ready to Go Solar?" heading
- [ ] FAQ accordion expands and collapses — it displays at least 5 FAQ questions
- [ ] Contact form validates inputs — validation errors appear for Full Name, Email, and Message
- [ ] Mobile responsive layout — the navbar collapses to a hamburger menu
