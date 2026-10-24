# Template: Inkspire (Author Portfolio)
<!-- prep-status: shipped-as=pageturn -->
> **SHIPPED-UNDER** — the ColorLib `author` design this prep describes already
> ships as `apps/pageturn` (<https://pageturn.free.componentdock.com>).
> Do not scaffold `apps/inkspire`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-pageturn/spec.md`.

## Purpose

Recreation of the ColorLib **Author** template
(`https://colorlib.com/wp/template/author/`).

**Live preview analyzed:** `https://preview.colorlib.com/theme/author/`
**Screenshot:** `https://colorlib.com/wp/wp-content/uploads/sites/2/author-free-template.jpg`

Stack: React 19 · Vite · Tailwind CSS 4 · TypeScript.
App folder: `apps/inkspire`
Package: `@free-react-templates/inkspire`
Surge target: `inkspire.free.componentdock.com`

---

## Design Tokens

Extracted from the ColorLib Author preview CSS (`css/style.css`).

| Token               | Value                                | Notes                                          |
| ------------------- | ------------------------------------ | ---------------------------------------------- |
| Brand / accent      | `#17b978` (green-teal)              | CTAs, icons, active nav, hover highlights      |
| Primary text        | `#212529`                            | Body text, headings                            |
| Secondary text      | `#6a7695`                            | Subtext, descriptions                          |
| Dark heading (counter) | `#263b5e`                         | Stat numbers                                   |
| White               | `#fff`                               | Page background, hero overlay, card backgrounds|
| Black               | `#000`                               | Footer background                              |
| Light card bg       | `#f8f9fa` / `rgba(255,255,255,0.1)` | Counter cards, service cards on dark sections   |
| Font – body         | `"Open Sans", sans-serif`            | Body text, descriptions                        |
| Font – headings     | `"Raleway", sans-serif`              | Headings, nav links                            |
| Button radius       | `40px` (pill)                        | Primary CTA buttons                            |
| Card radius         | `4px`                                | Minor rounded corners                          |
| Accent radius       | `50%`                                | Circular elements                              |
| Hero background     | White `#fff` overlay                 | Light, airy hero feel                          |
| Testimonial overlay | `#17b978` green solid                | Green band behind testimonial section          |
| Footer              | `#000` solid black                   | Dark footer                                    |

---

## Visual Design (from screenshot + preview DOM)

- **Hero:** Left-aligned text over white background with a right-side
  illustration (person sitting on stacked books reading). Subheading in
  green (`#17b978`), large serif-style title, description paragraph,
  pill-shaped green CTA button ("Buy Now For $22.78").
- **Partners strip:** Row of greyscale brand logos (Microsoft, Android,
  Java, Google, Adobe) on white background.
- **About the Book:** Two-column layout — left: stack of physical book
  images; right: heading "About The Book", paragraph, "Award achievements"
  list, feature icons (Read On Any Devices, Very High Resolution).
- **Counter section:** Background image with 4-column stat overlay
  (1100 Copies Sold, 1000 Happy Clients, 2500 Published Books, 5000 Active
  Readers) on light cards with dark blue number text.
- **Services section:** Dark background, 3 service cards (Experience,
  Marketing Goals, Targeting Vision) with green icons, white titles,
  light descriptions. Cards have `bg-light` with hover turning green.
- **Testimonials:** Green overlay background, carousel of testimonial
  cards (avatar, quote, client name, rating stars).
- **My Other Books:** Grid of 8 book cover images (4×2 on desktop).
- **About the Author:** Two-column — left: author portrait image;
  right: heading, bio text, social media icon links.
- **Contact:** Two-column — left: contact info boxes with green icons
  (address, phone, email, website); right: contact form (name, email,
  subject, message + send button).
- **Footer:** Black background, 4-column layout — brand + description,
  template pages links, community links, newsletter signup with input
  + button. Copyright bar at bottom.

---

## Requirements

### Feature: Inkspire template behaviour

#### Scenario: Navbar renders with correct navigation links and brand

- **GIVEN** the user visits the Inkspire page
- **THEN** a navigation bar is visible with the brand name "Inkspire."
- **AND** the nav contains links: "Home", "About", "Chapter", "Reviews", "My Books", "Author", "Contact"
- **AND** the navbar is transparent/dark over the hero section
- **AND** on scroll the navbar gains a white background with dark text

#### Scenario: Hero section displays book title and CTA

- **GIVEN** the user visits the Inkspire page
- **THEN** the hero section shows a subheading "BEST SELLER BOOK OF THE WEEK"
- **AND** the hero heading reads "Clue Of The Wooden Cottage"
- **AND** the hero paragraph describes the book
- **AND** a green pill button reads "BUY NOW FOR $22.78"
- **AND** an illustration is displayed on the right side of the hero

#### Scenario: Partners/logo strip displays brand logos

- **GIVEN** the user visits the Inkspire page
- **THEN** a row of at least 5 partner logos is visible below the hero
- **AND** the logos are displayed in greyscale

#### Scenario: About the Book section with feature list

- **GIVEN** the user visits the Inkspire page
- **THEN** the "About The Book" section is visible
- **AND** it contains a book image on the left
- **AND** it contains a heading, paragraph, and "Award achievements" list on the right
- **AND** feature items "Read On Any Devices" and "Very High Resolution" are shown with icons

#### Scenario: Counter stats section with background image

- **GIVEN** the user visits the Inkspire page
- **THEN** the counter section displays 4 stat cards
- **AND** the stats include "Copies Sold", "Happy Clients", "Published Books", "Active Readers"
- **AND** the counter numbers animate/count up on scroll into view
- **AND** the section has a background image

#### Scenario: Services section on dark background

- **GIVEN** the user visits the Inkspire page
- **THEN** the services section has a dark background
- **AND** 3 service cards are displayed: "Experience", "Marketing Goals", "Targeting Vision"
- **AND** each card has a green icon, white title, and light description text
- **AND** hovering a card highlights it in green

#### Scenario: Testimonials section with green overlay

- **GIVEN** the user visits the Inkspire page
- **THEN** the testimonials section has a green (#17b978) background overlay
- **AND** testimonial cards display a quote, client name, and star rating
- **AND** carousel navigation dots are present
- **AND** the active dot is green (#17b978)

#### Scenario: My Other Books gallery grid

- **GIVEN** the user visits the Inkspire page
- **THEN** a "My Other Books" heading is visible
- **AND** a grid of 8 book cover images is displayed
- **AND** the grid is 4 columns on desktop and 2 columns on mobile

#### Scenario: About the Author section

- **GIVEN** the user visits the Inkspire page
- **THEN** the "About the Author" section displays an author portrait on the left
- **AND** a heading, bio text, and social media links appear on the right
- **AND** social links are styled as icon circles

#### Scenario: Contact section with form and info

- **GIVEN** the user visits the Inkspire page
- **THEN** the contact section shows contact info boxes with green icons
- **AND** the contact info includes address, phone, email, and website
- **AND** a contact form is present with fields: name, email, subject, message
- **AND** a "Send Message" button is present
- **AND** the button is styled as a green pill button

#### Scenario: Footer with dark background and columns

- **GIVEN** the user visits the Inkspire page
- **THEN** the footer has a black (#000) background
- **AND** the footer contains 4 columns: brand, template pages, community, newsletter
- **AND** a copyright notice is displayed at the bottom
- **AND** the footer links to "https://www.componentdock.com/" with text "Component Dock"

#### Scenario: Responsive layout on mobile

- **GIVEN** the user visits the Inkspire page on a mobile viewport (375px wide)
- **THEN** the navbar collapses into a hamburger menu
- **AND** the hero section stacks vertically
- **AND** columns in About, Counter, Services, Contact sections collapse to single column
- **AND** the book grid displays 2 columns

---

## Verification checklist

- [ ] Navbar with brand and 7 nav links, scroll-to-section, mobile hamburger
- [ ] Hero with subheading, title, description, CTA button, illustration placeholder
- [ ] Partner logos strip (5+ greyscale logos or placeholders)
- [ ] About the Book section: image + text + feature icons + achievements list
- [ ] Counter section: 4 stat cards with count-up animation, background image
- [ ] Services section: dark bg, 3 cards with icons, hover effect
- [ ] Testimonials: green overlay bg, carousel with dots, testimonial cards
- [ ] My Other Books: 4×2 grid of book covers
- [ ] About the Author: portrait + bio + social links
- [ ] Contact: info boxes with icons + form with 4 fields + send button
- [ ] Footer: black bg, 4 columns, Component Dock link, copyright
- [ ] All colors match design tokens (#17b978 accent, #000 footer, etc.)
- [ ] Fonts: Open Sans (body) + Raleway (headings) via Google Fonts
- [ ] Buttons: pill shape (border-radius: 40px), green background, white text
- [ ] Responsive: mobile hamburger, stacked columns, 2-col book grid
- [ ] 100% test coverage (lines, functions, branches, statements)
- [ ] No ColorLib references in app code (provenance in spec only)
- [ ] Footer links to https://www.componentdock.com/
- [ ] `npm run spec:validate` passes
