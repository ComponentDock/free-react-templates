# Tally — Accounting & Business Consulting Template

Recreation of ColorLib **Accounting** (https://colorlib.com/wp/template/accounting/).

## Purpose

Tally is an accounting & business consulting template with a top bar, navbar, hero, about band, services, stat counters, testimonials and blog. It recreates the ColorLib **Accounting** design (https://colorlib.com/wp/template/accounting/, preview: https://preview.colorlib.com/theme/accounting/) as a Vite + React 19 + Tailwind CSS 4 + TypeScript template.

## Design Tokens

- **Font:** Montserrat (Google Fonts, weights 300-800)
- **Primary color:** #F96D00 (orange — used for CTAs, loader spinner)
- **Dark overlay:** rgba(0,0,0,0.5) on hero slides
- **Background palette:** white (#fff), light gray (#f8f9fa / bg-light), dark (#666666 / bg-secondary)
- **Section rhythm:** alternating white / light-gray backgrounds
- **Button style:** `.btn` 4 px rounding for hero CTA ("Connect with us"), standard rounded for pricing/subscribe
- **Layout:** Bootstrap 4 grid (12-col), container-based

## Page Structure (sections in order)

1. **TopBar** — phone number + email (left), social icons (right), dark background
2. **Navbar** — brand "Tally", nav links (Home, About, Services, Case Study, Blog, Contact), search form, sticky on scroll, dark bg
3. **Hero** — carousel/slider with 3 slides, each: background image + dark overlay, centered heading + subheading + CTA button ("Connect with us")
4. **About** — split: left image, right text + 4 service items with icons (Market Analysis, Accounting Advisor, General Consultancy, Structured Assessment)
5. **Services** — 4-column grid: Accounting, Tax/Compliance/Payroll, Financial Services, Growth & Funding Access (each with icon + heading + description)
6. **StatsCounter** — 4 counters: 50 Years Experience, 8500 Cases Completed, 20 Awards Won, 50 Expert Consultants (animated count-up)
7. **Testimonials** — carousel with quote cards: icon, quote text, avatar, name, position
8. **FAQ** — split: left images, right accordion with 4 questions (expandable/collapsible)
9. **Blog** — 3-column blog cards: image thumbnail, date + author + comments, heading
10. **Newsletter** — dark banner: heading left, email subscribe form right
11. **Pricing** — 4 pricing tiers: Personal ($49), Business ($79), Ultimate ($109), Premium ($149), each with feature list + CTA button
12. **Footer** — dark bg: About column + social, Services column, Discover column, Resources column, Free Consultation form, copyright with Component Dock link

## Requirements

### TopBar

#### Scenario: TopBar

- **GIVEN** the page loads, Then the top bar displays phone number and email address
- **GIVEN** the page loads, Then social media icons are visible in the top bar

### Navbar

#### Scenario: Navbar

- **GIVEN** the page loads, Then the navbar shows brand "Tally"
- **GIVEN** the page loads, Then navigation links for Home, About, Services, Case Study, Blog, Contact are visible
- **GIVEN** the user scrolls down, Then the navbar becomes sticky

### Hero

#### Scenario: Hero

- **GIVEN** the page loads, Then a carousel displays the first slide with heading and CTA
- **GIVEN** the user waits, Then slides auto-rotate
- **GIVEN** a slide is active, Then it shows a background image with dark overlay and centered text

### About

#### Scenario: About

- **GIVEN** the page loads, Then an image appears on the left and text content on the right
- **GIVEN** the about section loads, Then 4 service items are displayed (Market Analysis, Accounting Advisor, General Consultancy, Structured Assessment)

### Services

#### Scenario: Services

- **GIVEN** the page loads, Then 4 service cards are displayed in a grid
- **GIVEN** a service card renders, Then it shows an icon, heading, and description

### StatsCounter

#### Scenario: StatsCounter

- **GIVEN** the page loads, Then 4 stat counters are displayed
- **GIVEN** a counter enters viewport, Then the number animates from 0 to target value

### Testimonials

#### Scenario: Testimonials

- **GIVEN** the page loads, Then a testimonials carousel is displayed
- **GIVEN** a testimonial card renders, Then it shows a quote, avatar, name, and position

### FAQ

#### Scenario: FAQ

- **GIVEN** the page loads, Then 4 FAQ items are displayed
- **GIVEN** the user clicks an FAQ header, Then the answer expands/collapses

### Blog

#### Scenario: Blog

- **GIVEN** the page loads, Then 3 blog cards are displayed
- **GIVEN** a blog card renders, Then it shows an image, date, author, comment count, and heading

### Newsletter

#### Scenario: Newsletter

- **GIVEN** the page loads, Then a newsletter banner with email input and subscribe button is displayed

### Pricing

#### Scenario: Pricing

- **GIVEN** the page loads, Then 4 pricing tiers are displayed
- **GIVEN** a pricing tier renders, Then it shows tier name, price, feature list, and CTA button

### Footer

#### Scenario: Footer

- **GIVEN** the page loads, Then the footer shows About, Services, Discover, Resources columns
- **GIVEN** the page loads, Then a consultation form is visible in the footer
- **GIVEN** the page loads, Then the copyright links to Component Dock (https://www.componentdock.com/)

## Verification

- TypeCheck: PASS
- Lint: PASS
- Test Coverage: 100% lines/functions/branches/statements
- Build: PASS

## Shape re-verification (live sheet, 2026-10-22)

- `accounting`: `.btn{border-radius:4px}` — no `.rounded-pill` rule is loaded on this page, so that utility is inert and the hero CTA renders 4 px rounded.
