# Template: Orbiter (Corporate / Business Agency)

## Purpose

Recreation of ColorLib "Stodeo" — a modern corporate business agency template.

- **Source**: https://colorlib.com/wp/template/stodeo/
- **Preview**: https://preview.colorlib.com/theme/stodeo/
- **Stack**: Vite + React 19 + Tailwind CSS 4 + TypeScript
- **Package**: `@free-react-templates/orbiter`

## Design tokens

| Token               | Value              | Usage                         |
| ------------------- | ------------------ | ----------------------------- |
| Brand primary       | `#3369e7`          | Buttons, links, active states |
| Brand secondary     | `#00aaff`          | Subheading text accent        |
| Heading color       | `#081b46`          | All h1–h3 headings            |
| Body text           | `#212529`          | Default body color            |
| Footer background   | `#efefef`          | Light gray site footer        |
| Footer text         | `#888`             | Footer paragraph text         |
| Footer heading      | `#000`             | Footer widget headings        |
| Service bg (sec-3)  | Dark (image-based) | Services section split layout |
| Button radius       | none (sharp)       | `border-radius: 0`            |
| Font family         | `Noto Sans`        | All text                      |
| Font size subhead   | 14px               | `.subheading` accent labels   |
| Font weight heading | 700                | `.heading` bold weight        |

## Section structure (top → bottom)

1. **Navbar** — Sticky top nav; logo text left ("Orbiter"), horizontal nav links right (Home, Why Orbiter, Our Services, Gallery, About, Contact Us). Mobile hamburger menu. Links: Home (active), Why Orbiter (dropdown with 3 items), Our Services, Gallery, About, Contact Us.

2. **Hero** — Full-width white background, centered text. Subheading: "Welcome To Our Site". Heading: "We have the best solution for your business to grow." Paragraph: placeholder copy. Single CTA button: "Get started" (btn-primary).

3. **Welcome (sec-welcome)** — Split 2-col, no gap (`g-0`). Left col: full-height image. Right col: aligned bottom, text paragraph + "About us →" button (outline dark bg with arrow icon).

4. **Why Choose Us (sec-why-choose-us)** — Asymmetric layout: right aside-box (col-lg-3) with paragraph, 2 counters (12 "Years of experience", 34 "Team members"), and "Why Orbiter →" outline button. Left main box (col-lg-9): centered subheading "Why Orbiter?", heading "You still thinking about why you should choose us?", paragraph. Below: 4 feature cards in a row (col-lg-3 each): Web Design, Web Development, Branding & Identity, Graphic Design — each with icon, title, and arrow.

5. **Services (sec-3)** — Split 2-col, no gap. Left: full image. Right: dark background box-wrap, white heading "Grow your business", muted paragraph, 2 service items (icon + title + description each), and "Our services →" outline button.

6. **Blog (sec-posts)** — Asymmetric: left col-lg-3 empty, right col-lg-9 with box. Inside: subheading "Our Blogs", heading "Recent Blog Posts", then 3 post cards in a row (col-lg-4 each). Each card: date badge, title link, short paragraph excerpt, "Read more" link.

7. **Testimonials** — Centered: heading "Happy Clients". Testimonial slider with 4 items. Each: circular person image, blockquote with quote, strong name, position span. Navigation arrows and dot indicators.

8. **Footer (site-footer)** — Light gray background (`#efefef`). 4-col layout: Col 1 — "About Orbiter." widget + social icons. Col 2 — "Navigation" links. Col 3 — "Services" links. Col 4 — "Contact" address + phone + email. Bottom row: copyright line with Component Dock link.

## Requirements

### Requirement: Navbar renders with logo and navigation links

The navbar SHALL display the logo "Orbiter" and navigation links including Home, Why Orbiter, Our Services, Gallery, About, and Contact Us.

#### Scenario: Navbar displays all navigation elements

- **GIVEN** the page is loaded
- **THEN** the navbar displays the logo "Orbiter"
- **AND** navigation links include "Home", "Why Orbiter", "Our Services", "Gallery", "About", "Contact Us"
- **AND** the "Home" link is marked active

#### Scenario: Why Orbiter dropdown shows on hover

- **GIVEN** the page is loaded
- **WHEN** the user hovers over "Why Orbiter"
- **THEN** a dropdown appears with "Web Design", "Web Development", "SEO Marketing"

#### Scenario: Mobile hamburger menu opens and closes

- **GIVEN** the page is loaded on mobile viewport
- **WHEN** the user clicks the hamburger button
- **THEN** the mobile menu opens with all navigation links
- **WHEN** the user clicks the close button
- **THEN** the mobile menu closes

### Requirement: Hero section displays heading and CTA

The hero section SHALL display a subheading, main heading, description, and "Get started" CTA button.

#### Scenario: Hero renders heading and button

- **GIVEN** the page is loaded
- **THEN** the hero shows subheading "Welcome To Our Site"
- **AND** the hero heading reads "We have the best solution for your business to grow."
- **AND** a "Get started" button is visible

### Requirement: Welcome section shows image and about button

The welcome section SHALL display a split layout with a left image and right text area with an "About us" button.

#### Scenario: Welcome renders split layout

- **GIVEN** the page is loaded
- **THEN** the welcome section displays a left image and right text area
- **AND** an "About us" button with arrow icon is visible

### Requirement: Why Choose Us shows counters and features

The why-choose-us section SHALL display stats, a heading, and four feature cards.

#### Scenario: Why Choose Us renders all elements

- **GIVEN** the page is loaded
- **THEN** the section displays the heading "You still thinking about why you should choose us?"
- **AND** two stat counters are shown: "12" Years and "34" Team members
- **AND** four feature cards are visible: Web Design, Web Development, Branding & Identity, Graphic Design

### Requirement: Services section shows split layout with dark background

The services section SHALL display a left image and right dark content area with service items.

#### Scenario: Services renders split layout

- **GIVEN** the page is loaded
- **THEN** the services section has a left image and right dark content area
- **AND** the heading reads "Grow your business"
- **AND** two service items are displayed with icons

### Requirement: Blog section shows recent posts

The blog section SHALL display three blog post cards with dates and excerpts.

#### Scenario: Blog renders post cards

- **GIVEN** the page is loaded
- **THEN** the blog section heading reads "Recent Blog Posts"
- **AND** three blog post cards are displayed with dates and excerpts

### Requirement: Testimonials section shows client quotes

The testimonials section SHALL display a slider with client photos, quotes, names, and positions.

#### Scenario: Testimonials renders slider

- **GIVEN** the page is loaded
- **THEN** the testimonials heading reads "Happy Clients"
- **AND** a testimonial slider is visible with person images, quotes, and names

#### Scenario: Testimonials navigation works

- **GIVEN** the page is loaded
- **WHEN** the user clicks the next arrow
- **THEN** the next testimonial is displayed
- **WHEN** the user clicks a dot indicator
- **THEN** the corresponding testimonial is displayed

### Requirement: Footer displays company info and links

The footer SHALL display four widget columns, social icons, copyright, and a Component Dock link.

#### Scenario: Footer renders all widgets

- **GIVEN** the page is loaded
- **THEN** the footer contains widgets for About, Navigation, Services, and Contact
- **AND** social media icons are visible (Instagram, Twitter, Facebook, LinkedIn, Pinterest, Dribbble)
- **AND** a copyright line is present at the bottom

#### Scenario: Footer links to Component Dock

- **GIVEN** the page is loaded
- **THEN** the footer contains a link to https://www.componentdock.com/
- **AND** the link opens in a new tab

## Verification checklist

- [ ] All 8 sections render in correct top-to-bottom order
- [ ] Navbar is sticky with logo and all nav links including dropdown
- [ ] Hero text and button match original layout
- [ ] Welcome section is 2-col no-gap with image and about button
- [ ] Why Choose Us shows counter stats and 4 feature cards
- [ ] Services section has dark split layout with 2 service items
- [ ] Blog section shows 3 post cards
- [ ] Testimonials slider renders with person images and quotes
- [ ] Footer has 4 widget columns + social icons + copyright
- [ ] Footer links to https://www.componentdock.com/
- [ ] Color tokens match: primary #3369e7, secondary #00aaff, heading #081b46, footer bg #efefef
- [ ] Font: Noto Sans Google Font loaded in index.html
- [ ] Mobile responsive (navbar collapses, columns stack)
- [ ] No ColorLib references in app code (provenance only in spec + TEMPLATES.md)
- [ ] 100% test coverage on all components
