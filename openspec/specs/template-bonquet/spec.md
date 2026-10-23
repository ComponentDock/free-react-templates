# Template: Bonquet (Food & Restaurant)

## Purpose

Recreation of ColorLib Restauco (`https://preview.colorlib.com/theme/restauco/`, source: `https://colorlib.com/wp/template/restauco/`). A modern, warm food and restaurant landing page featuring a hero section, healthy meal features, tabbed dishes menu, table reservation booking form, customer testimonials, and a comprehensive footer linking to Component Dock. Built with Vite, React 19, Tailwind CSS 4, and TypeScript.

## Design tokens

<!-- design-tokens-backfill:2026-10-23 -->
Measured from the live reference, not sampled off the screenshot:
https://preview.colorlib.com/theme/restauco/ (HTTP 200, 46,507 B, fetched 2026-10-23) and its theme stylesheet `theme/restauco/assets/css/style.css` (80,346 B, sha256 `82af3cf541cb…`).
CSS values are canonical over any screenshot sample.

| Token | Value | Evidence in the reference |
| --- | --- | --- |
| Accent (most-used chromatic) | `#fe5f41` | 53 declarations — `.btn`, `.browse-btn` |
| Other chromatic values | `#1f2b7b`, `#415094`, `#4cd3e3` | `#1f2b7b` × 19 (.contact-info .media-body h3 a:hover); `#415094` × 7 (.genric-btn.default); `#4cd3e3` × 7 (.genric-btn.success) |
| Surface | `#ffffff` | 73 declarations — `a`, `button` |
| Ink / dark surface | `#000000` | 9 declarations — `.our-client .single-cat .cat-cap h5>a`, `.our-client .single-cat:hover .cat-cap h5` |
| Typeface | `"Mitr", sans-serif` (11 rules — h1)<br>`"Raleway", sans-serif` (4 rules — p) | `font-family` declarations in the theme sheet |
| Radii | `50%`, `3px`, `8px` | `50%` (#back-top); `3px` (.genric-btn.radius); `8px` (.primary-radio) |

Palette in order of use: `#ffffff` ×73, `#fe5f41` ×53, `#f9f9ff` ×27, `#1f2b7b` ×19, `#999999` ×10, `#000000` ×9.

- Put the accent, surface and ink in `@theme` (`--color-brand`, `--color-surface`, `--color-ink`) and use them through utilities / `cn()`.
- Do not invent shades: the full census above is the sheet's own vocabulary; hovers reuse the listed values.
- Reuse the exact radii above for buttons, cards and dots — no unspecified rounding.

## Requirements

### Requirement: Header Navigation

Users SHALL see a sticky header with logo, navigation links (Home, Menu, About, Blog, Contact), phone number, and "Book a Table" button.

#### Scenario: Desktop header renders

- **WHEN** the user loads the Bonquet page
- **THEN** the header displays the logo, navigation links, phone number, and "Book a Table" button

#### Scenario: Mobile menu toggle

- **WHEN** the user clicks the hamburger menu icon on mobile
- **THEN** the mobile navigation menu opens

#### Scenario: Mobile menu closes on link click

- **WHEN** the mobile menu is open and the user clicks a navigation link
- **THEN** the mobile menu closes

### Requirement: Hero Section

Users SHALL see a hero banner with headline, subtitle, "Our Menu" button, and "Watch Video" action.

#### Scenario: Hero renders

- **WHEN** the user is on the home page
- **THEN** the hero section displays the headline "Meet, Eat & Enjoy the true test", descriptive subtitle, "Our Menu" button, and "Watch Video" action

### Requirement: Features and Services

Users SHALL see 3 feature cards: Healthy Meal, Fast Food, and Delicious Coffee.

#### Scenario: Feature cards render

- **WHEN** the user scrolls past the hero
- **THEN** 3 feature cards are displayed with titles and descriptions

### Requirement: Most Popular Dishes Menu

Users SHALL see a tabbed menu with 5 categories (Breakfast, Lunches, Dinner, Drinks, Fastfood) and dish items with "Order Now" actions.

#### Scenario: Default tab

- **WHEN** the menu section renders
- **THEN** the Breakfast tab is selected and breakfast dishes are shown

#### Scenario: Tab switching

- **WHEN** the user clicks a different tab
- **THEN** the corresponding dishes are displayed

### Requirement: Table Reservation Booking

Users SHALL see a reservation form with guests, date, time, phone, message fields and a "Sent Request" button.

#### Scenario: Form renders

- **WHEN** the user views the reservation section
- **THEN** all form fields and the submit button are displayed

#### Scenario: Form submission

- **WHEN** the user fills out the form and clicks "Sent Request"
- **THEN** a success confirmation message is displayed

### Requirement: Customer Testimonials

Users SHALL see customer testimonials with star ratings and quotes.

#### Scenario: Testimonials render

- **WHEN** the testimonials section is visible
- **THEN** customer names, quotes, and star ratings are displayed

### Requirement: Footer and Attribution

Users SHALL see a footer with quick links, contact information, and a required link to `https://www.componentdock.com/` (branded "Component Dock").

#### Scenario: Footer renders

- **WHEN** the user scrolls to the bottom
- **THEN** the footer displays quick links, cakes links, contact info, and the Component Dock attribution link

#### Scenario: Go to top button

- **WHEN** the user clicks the go-to-top button
- **THEN** the page scrolls smoothly to the top

## Verification checklist

- [ ] TypeScript compilation (`npm run typecheck`)
- [ ] Linting (`npm run lint`)
- [ ] Vitest unit tests with 100% coverage (`npm run test:coverage`)
- [ ] Production build (`npm run build`)
- [ ] Footer links Component Dock correctly
- [x] No mention of ColorLib in app code
- [x] Header Navigation — the header displays the logo, navigation links, phone number, and "Book a Table" button
- [x] Hero Section — the hero section displays the headline "Meet, Eat & Enjoy the true test", descriptive subtitle, "Our Menu" button, and "Watch Video" action
- [ ] Features and Services — 3 feature cards are displayed with titles and descriptions
- [ ] Most Popular Dishes Menu — the Breakfast tab is selected and breakfast dishes are shown
- [ ] Table Reservation Booking — all form fields and the submit button are displayed
- [ ] Customer Testimonials — customer names, quotes, and star ratings are displayed
