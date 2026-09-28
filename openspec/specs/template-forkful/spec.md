# Template: Forkful (Restaurant Landing Page)

## Purpose

Forkful is a multi-section restaurant landing page template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Foodfun" design (see TEMPLATES.md), built under a different
name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original design is a golden-yellow and dark-navy restaurant landing page:
floating white navbar, full-bleed hero, welcome section, food menu grid,
reservation CTA, special dishes with large numbering, customer testimonials,
and a multi-column footer with Component Dock branding. Forkful follows the
same structure and adds the repo's standard patterns. All imagery is recreated
with seeded placeholder images (no assets copied).

## Design reference (replication findings)

- **Original:** ColorLib "Foodfun" — free restaurant website template
  (source: https://colorlib.com/wp/template/foodfun/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/foodfun/`
- **Structure (1:1, section order):**
  1. Navbar — floating white card, logo left, nav links right (Home, About,
     Menu, Blog, Contact).
  2. Hero — full-width background image, centered text: h6 "THE MOST
     INTERESTING FOOD IN THE WORLD", h1 "Discover the flavors of foodfun".
  3. Welcome — split layout: image left, text right with heading, two
     paragraphs, "book a table" gold button.
  4. Food Menu — section heading "we serve delicious food", 6 food cards in
     3-col grid (image + name/price + description), hover turns card gold.
  5. Reservation CTA — dark background image section: heading + subtext +
     "reservation" button.
  6. Special Dishes — "Our special dishes" heading, 2 featured dishes with
     large numbers (01., 02.), images, descriptions, prices, "book a table"
     arrow buttons.
  7. Testimonials — dark background image, "Customer says" heading, 3
     testimonial cards with customer image, name, title, quote, star ratings.
  8. Footer — dark bg (#131230): 3 columns (logo+description, contact info
     with icons, opening hours), then copyright bar (#0d0d27) with
     Component Dock link.
- **Design tokens extracted:**
  - Brand color: **#ffb606** (golden-yellow — buttons, accents).
  - Dark navy: **#131230** (footer, dark sections); **#0d0d27** (copyright bar).
  - Text/background: **#777** (body), **#f9f9ff** (light sections), **#131230**
    (headings).
  - Fonts: **"Playfair Display"** (display headings, italic) + **"Roboto"**
    (body) via Google Fonts.
  - Buttons: uppercase, gold bg, dark text, transparent border, hover flips.
- **Recreation decisions:** the repo-standard floating Navbar wraps the header;
  sections recreated with Tailwind tokens (`--color-brand` = `#ffb606`, navy
  scale in `@theme`); placeholder images via
  `https://picsum.photos/seed/forkful-<n>/<w>/<h>`; icons from lucide-react;
  no assets copied.

Forkful lives in `apps/forkful` and uses shared components from `packages/ui`
(Button, ButtonLink, Card, Badge, cn).

## Requirements

### Requirement: Navigation bar

The navigation bar displays the Forkful brand name and links to all major
sections.

#### Scenario: Renders brand and links

```gherkin
Given the page is loaded
Then the navbar shows "Forkful" as the brand name
And the navbar has links for Home, About, Menu, Blog, and Contact
```

#### Scenario: Mobile menu toggle

```gherkin
Given the navbar is rendered on a mobile viewport
When the user taps the hamburger button
Then the mobile navigation menu expands
And the hamburger icon changes to a close icon
```

### Requirement: Hero section

The hero section displays a large background image with a headline and
supporting text.

#### Scenario: Renders hero content

```gherkin
Given the page is loaded
Then the hero shows "THE MOST INTERESTING FOOD IN THE WORLD" as a tagline
And the hero shows "Discover the flavors of forkful" as the main heading
```

### Requirement: Welcome section

The welcome section uses a split layout with an image on the left and text
on the right.

#### Scenario: Renders welcome content

```gherkin
Given the page is loaded
Then the welcome section shows "Welcome to forkful" heading
And there are two descriptive paragraphs
And a "Book a Table" link points to the contact section
```

### Requirement: Food menu

The food menu displays 6 food cards in a responsive grid.

#### Scenario: Renders all menu items

```gherkin
Given the page is loaded
Then the food menu shows 6 dish cards
And each card displays a dish name, price, and description
```

### Requirement: Reservation CTA

A call-to-action section with a dark background encourages visitors to
make a reservation.

#### Scenario: Renders CTA content

```gherkin
Given the page is loaded
Then the reservation CTA shows "Natural ingredients and tasty food"
And a "Reservation" link points to the contact section
```

### Requirement: Special dishes

Two featured dishes are displayed with large numbering, descriptions,
and prices.

#### Scenario: Renders special dishes

```gherkin
Given the page is loaded
Then the special dishes section shows "Our special dishes" heading
And there are 2 featured dish cards
And each card shows a number, name, description, and price
And each card has a "Book a Table" link
```

### Requirement: Testimonials

Customer testimonials are displayed on a dark background with star ratings.

#### Scenario: Renders testimonials

```gherkin
Given the page is loaded
Then the testimonials section shows "Customer says" heading
And there are 3 testimonial cards
And each card has a customer name, title, quote, and star rating
```

### Requirement: Footer

The footer displays brand info, contact details, opening hours, and a
Component Dock link.

#### Scenario: Renders footer columns

```gherkin
Given the page is loaded
Then the footer shows "Forkful" brand name
And the footer has Contact and Opening Hours headings
And the footer shows address, phone, and email information
And the copyright bar includes a "Component Dock" link to componentdock.com
```
