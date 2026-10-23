# Template: Ember (Business)

## Purpose

Ember is a restaurant landing template that recreates the ColorLib "Dingo" design (https://colorlib.com/wp/template/dingo/) as a React 19 + Vite + Tailwind CSS 4 + TypeScript application. The template showcases a restaurant website with a hero section, popular dishes gallery, restaurant history, video highlight, tabbed food menu, chef team, reservation form, customer testimonials, blog section, and a dark footer with newsletter and Component Dock branding.

## Design tokens

<!-- design-tokens-backfill:2026-10-23 -->
Measured from the live reference, not sampled off the screenshot:
https://preview.colorlib.com/theme/dingo/ (HTTP 200, 55,822 B, fetched 2026-10-23) and its theme stylesheet `theme/dingo/css/style.css` (205,598 B, sha256 `a3803389e868…`).
CSS values are canonical over any screenshot sample.

| Token | Value | Evidence in the reference |
| --- | --- | --- |
| Accent (most-used chromatic) | `#ff6426` | 73 declarations — `.btn_1`, `a:hover` |
| Other chromatic values | `#415094`, `#4cd3e3`, `#38a4ff` | `#415094` × 14 (.genric-btn.default); `#4cd3e3` × 14 (.genric-btn.success); `#38a4ff` × 12 (.genric-btn.info) |
| Surface | `#ffffff` | 94 declarations — `.btn_1`, `.single_page_btn` |
| Ink / dark surface | `#2c3033` | 12 declarations — `h1`, `h2` |
| Typeface | `"Lora", serif` (8 rules — p)<br>`"Cardo", serif` (3 rules — h1) | `font-family` declarations in the theme sheet |
| Radii | `50%`, `3px`, `8px` | `50%` (.btn_2:after); `3px` (.genric-btn.radius); `8px` (.primary-radio) |

Palette in order of use: `#ffffff` ×94, `#ff6426` ×73, `#f9f9ff` ×54, `#415094` ×14, `#4cd3e3` ×14, `#999999` ×13.

- Put the accent, surface and ink in `@theme` (`--color-brand`, `--color-surface`, `--color-ink`) and use them through utilities / `cn()`.
- Do not invent shades: the full census above is the sheet's own vocabulary; hovers reuse the listed values.
- Reuse the exact radii above for buttons, cards and dots — no unspecified rounding.

## Requirements

### Requirement: Navbar with navigation and brand

The template SHALL display a sticky navbar with the "Ember" brand logo, navigation links (Home, About, Menu, Chefs, Blog, Contact), a "Book a Table" CTA button, a dark mode toggle, and a mobile hamburger menu.

#### Scenario: Desktop navigation renders all links

- **WHEN** the page loads on a desktop viewport
- **THEN** the navbar displays the Ember logo, all six navigation links, and the "Book a Table" button

#### Scenario: Mobile hamburger menu opens and closes

- **WHEN** the user clicks the mobile menu button
- **THEN** a mobile navigation panel appears with all links
- **AND** clicking a link closes the mobile menu

#### Scenario: Dark mode toggle

- **WHEN** the user clicks the dark mode toggle button
- **THEN** the dark class is toggled on the document root element

### Requirement: Hero section with headline and CTAs

The template SHALL display a full-width hero section with a background image, the tagline "Expensive but the best", the headline "Deliciousness jumping into the mouth", descriptive body text, and two call-to-action buttons: "Reservation" and "Watch our story".

#### Scenario: Hero renders headline and buttons

- **WHEN** the page loads
- **THEN** the hero section displays the headline, tagline, and both CTA buttons

### Requirement: Popular Dishes section

The template SHALL display a "Popular Dishes" section with an "Our Exclusive Items" heading and four food cards, each with a placeholder image, dish name, description, and a "Read More" link.

#### Scenario: All four dish cards render

- **WHEN** the Popular Dishes section is visible
- **THEN** four dish cards are displayed with images, names, descriptions, and "Read More" links

### Requirement: History section

The template SHALL display a two-column history section with a background image on the left and the heading "Where The Food's As Good As The Root Beer." with descriptive text and a "Read More" button on the right.

#### Scenario: History section renders content

- **WHEN** the History section is visible
- **THEN** the heading, body text, background image, and "Read More" button are displayed

### Requirement: Expect The Best video section

The template SHALL display a dark overlay section with the heading "Expect The Best", descriptive text, and a circular play button linking to a YouTube video.

#### Scenario: Video section renders play button

- **WHEN** the Expect The Best section is visible
- **THEN** the heading and a play button link are displayed

### Requirement: Popular Menu with tabbed interface

The template SHALL display a tabbed menu section with tabs for Special, Breakfast, Lunch, Dinner, and Snacks. Each tab shows six menu items with an image, name, description, and price. Clicking a tab switches the displayed items.

#### Scenario: Default tab shows Special items

- **WHEN** the Popular Menu section loads
- **THEN** the Special tab is active and six Special menu items are displayed

#### Scenario: Tab switching

- **WHEN** the user clicks a different tab
- **THEN** that tab becomes active and its menu items are displayed

### Requirement: Team section with chef cards

The template SHALL display a "Team Member" section with an "Our Experience Chefs" heading and four chef cards, each with a circular image, name, and role.

#### Scenario: Chef cards render

- **WHEN** the Team section is visible
- **THEN** four chef cards with images, names, and roles are displayed

### Requirement: Reservation form

The template SHALL display a reservation form with fields for email (required), number of guests (select), time slot (select), and optional notes. Form validation requires a valid email address. On successful submission, a confirmation message is displayed.

#### Scenario: Form renders all fields

- **WHEN** the Reservation section is visible
- **THEN** the email input, guests select, time select, notes textarea, and submit button are displayed

#### Scenario: Validation error on invalid email

- **WHEN** the user submits the form without a valid email
- **THEN** a validation error message is displayed

#### Scenario: Successful submission

- **WHEN** the user enters a valid email and submits the form
- **THEN** a confirmation message is displayed

### Requirement: Testimonials section

The template SHALL display a "Testimonials" section with an "Customers Feedback" heading and three testimonial cards, each with a star rating, quoted text, author name, and role.

#### Scenario: Testimonials render

- **WHEN** the Testimonials section is visible
- **THEN** three testimonial cards with star ratings, quotes, and author information are displayed

### Requirement: Blog section

The template SHALL display a "Recent News" section with an "Latest From Blog" heading and four blog post cards, each with a placeholder image, date, category tag, title, and "Read More" link.

#### Scenario: Blog posts render

- **WHEN** the Blog section is visible
- **THEN** four blog post cards with images, dates, categories, titles, and "Read More" links are displayed

### Requirement: Footer with Component Dock branding

The template SHALL display a dark footer with four columns: About Us (brand description and social links), Important Links (navigation), Contact Us (address, phone, email), and Newsletter (email subscription form). The copyright bar MUST link to https://www.componentdock.com/ as "Component Dock".

#### Scenario: Footer renders all columns

- **WHEN** the Footer is visible
- **THEN** all four columns and the copyright bar with the Component Dock link are displayed

#### Scenario: Newsletter subscription

- **WHEN** the user enters a valid email and clicks Subscribe
- **THEN** a thank-you message is displayed

### Requirement: Responsive design

The template SHALL be fully responsive, adapting the layout for mobile, tablet, and desktop viewports.

#### Scenario: Mobile layout

- **WHEN** the viewport is narrower than 640px
- **THEN** sections stack vertically and the mobile navigation is available

### Requirement: Dark mode support

The template SHALL support dark mode via a class-based toggle on the document root element.

#### Scenario: Dark mode toggling

- **WHEN** the user toggles dark mode
- **THEN** all sections adapt their colors for dark mode

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/ember/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/ember/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [x] Navbar with navigation and brand — the navbar displays the Ember logo, all six navigation links, and the "Book a Table" button
- [ ] Hero section with headline and CTAs — the hero section displays the headline, tagline, and both CTA buttons
- [x] Popular Dishes section — four dish cards are displayed with images, names, descriptions, and "Read More" links
- [x] History section — the heading, body text, background image, and "Read More" button are displayed
- [ ] Expect The Best video section — the heading and a play button link are displayed
- [ ] Popular Menu with tabbed interface — the Special tab is active and six Special menu items are displayed
- [ ] Team section with chef cards — four chef cards with images, names, and roles are displayed
- [ ] Reservation form — the email input, guests select, time select, notes textarea, and submit button are displayed
- [ ] Testimonials section — three testimonial cards with star ratings, quotes, and author information are displayed
- [x] Blog section — four blog post cards with images, dates, categories, titles, and "Read More" links are displayed
- [ ] Responsive design — sections stack vertically and the mobile navigation is available
- [ ] Dark mode support — all sections adapt their colors for dark mode
