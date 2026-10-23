# Template: WodBox (Fitness / CrossFit Gym)

## Purpose

Recreation of the ColorLib "Crossfit" template as a React 19 + Vite + Tailwind CSS 4 + TypeScript single-page template.

- **Source slug:** `crossfit`
- **Source URL:** https://colorlib.com/wp/template/crossfit/
- **Preview URL:** https://preview.colorlib.com/theme/crossfit/
- **Stack:** React 19 · Vite (latest) · Tailwind CSS 4 · TypeScript (strict)
- **Package:** `@free-react-templates/wodbox`
- **Surge target:** `wodbox.free.componentdock.com`

## Design Tokens

Extracted from the live preview CSS (`styles/main_styles.css`) at https://preview.colorlib.com/theme/crossfit/

| Token | Value | Usage |
|-------|-------|-------|
| Brand primary | `#ff9908` | Buttons, logo text, header border, prices, CTA background, social hover |
| Brand accent | `#ff5408` | Button hover fill, plan border, portfolio overlay border, dark orange |
| Brand green | `#639906` | Logo "x" accent color |
| Dark bg | `#1d1f2a` | Header, plan center card, portfolio overlay |
| Darker bg | `#0d0e15` | Footer background |
| Body bg | `#FFFFFF` | Main content, testimonials, plan cards |
| Heading text | `#1d1f2a` | All headings (h1–h6) |
| Body text | `#64677c` | Paragraphs, list items, footer links |
| Muted text | `#a5a5a5` | Body fallback text |
| White text | `#FFFFFF` | On dark backgrounds, buttons, footer social |
| Copyright text | `#46495a` | Footer copyright |
| Link hover bg | `#ffa07f` | Paragraph link hover background |
| Selection bg | `rgba(255,153,8,0.8)` | Text selection highlight |
| Font primary | `Roboto`, sans-serif | All text (headings + body) |
| Button shape | Square (no border-radius) | CTA buttons, 188×63px fixed |
| Button bg | `#ff9908` | All CTA buttons |
| Button hover | `#ff5408` | Bottom-fill animation on hover |
| Button text | `#FFFFFF` | White on brand |
| Plan card border | `#ff5408` (10px solid) | Pricing cards |
| Plan center bg | `#1d1f2a` | Center (featured) pricing card |
| CTA banner bg | `#ff9908` | Full-width CTA section |
| Footer bg | `#0d0e15` | Dark footer |

## Section Structure (in page order)

### 1. Header (Fixed)
- Logo: "crossfit x" (brand name) + tagline "the next level" (left-aligned, 124px height)
- Navigation links: Home, About us, Classes, News, Contact (centered)
- Search icon (right) + "Get in touch" CTA button (right)
- Hamburger menu (mobile) → full-screen overlay with nav list
- Fixed position, black background with orange bottom border (2px `#ff9908`)
- Scrolls down to 90px height on scroll

### 2. Hero Slider
- Full-width background image with parallax-style cover
- OwlCarousel-style slider with 3 slides (numbered 01. 02. 03.)
- Headline: "Don't stop when you're tired. Stop when you're done" (with "done" in accent span)
- "Get Started" CTA button (brand orange, square)
- Custom numbered dot indicators (left-aligned)

### 3. Features
- 4-column grid (equal width, col-lg-3)
- Each feature: icon (SVG) + heading + description paragraph
- All headings: "Award winning Gym" (placeholder)
- Centered layout, white background
- Icons: medal, dumbbell, water, weightlifting

### 4. Subscription
- Two-column layout (text left, image right)
- Heading: "Get your subscription"
- Description paragraph
- Checklist with checkmark icons (4 items)
- "Get Started" CTA button
- Background image on right half

### 5. Portfolio
- Full-width image slider (OwlCarousel)
- 4 portfolio images in a carousel
- Hover overlay with dark background + orange border + "View More" text
- Hover animation: overlay fades in

### 6. Testimonials
- Section heading: "Testimonials" (centered)
- OwlCarousel slider with 3 testimonial items
- Each: italic quote text + circular author photo + author name + title ("Crossfit Coach")
- White background

### 7. Plans (Pricing)
- Parallax background image with dark overlay (`rgba(29,31,42,0.91)`)
- Section heading: "Choose a plan" (white text, centered)
- 3 pricing cards in a row (col-lg-4):
  - Card 1: $0 "Free Crossfit Trial" (white bg, orange border)
  - Card 2: $30 "Free Crossfit Trial" (dark bg `#1d1f2a`, featured/center)
  - Card 3: $55 "Unlimited Sub" (white bg, orange border)
- Each card: price, name, feature list, "Get it now" CTA button

### 8. CTA Banner
- Full-width orange background (`#ff9908`)
- Large text: "Get your subscription now!" (with "subscription" as a link)
- White text on orange

### 9. Footer
- Dark background (`#0d0e15`)
- Logo repeated (left column)
- Description paragraph
- Social icons: Pinterest, Facebook, Twitter, Dribbble, Behance (circular, hover = orange)
- 3 footer columns: "Useful Links", "Features", "About us" (each with 4 links)
- Copyright bar at bottom

## Requirements

### Feature: WodBox template behaviour

Feature: WodBox — Fitness / CrossFit Gym Template

Background:
- **GIVEN** the template is loaded at the root URL
- **THEN** the page title contains "WodBox"
- **AND** the Component Dock footer link is visible

#### Scenario: Header renders correctly

- **GIVEN** the user is on any viewport
- **THEN** the logo "WodBox" is visible in the top-left
- **AND** navigation links "Home", "About us", "Classes", "News", "Contact" are visible
- **AND** a "Get in touch" button is visible in the header
- **AND** on mobile viewports a hamburger menu button is visible

#### Scenario: Header shrinks on scroll

- **GIVEN** the header is at its default height
- **WHEN** the user scrolls down the page
- **THEN** the header height reduces (sticky compact mode)

#### Scenario: Hero slider displays with background image

- **GIVEN** the hero section is in the viewport
- **THEN** a full-width background image is visible
- **AND** the headline "Don't stop when you're tired. Stop when you're done" is displayed
- **AND** a "Get Started" button with brand orange background is visible
- **AND** numbered dot indicators (01, 02, 03) are present

#### Scenario: Features section shows 4 items

- **GIVEN** the features section is scrolled into view
- **THEN** 4 feature cards are visible in a row
- **AND** each card has an icon, heading, and description

#### Scenario: Subscription section renders

- **GIVEN** the subscription section is scrolled into view
- **THEN** the heading "Get your subscription" is visible
- **AND** a description paragraph is shown
- **AND** a checklist with 4 checkmark items is displayed
- **AND** a "Get Started" CTA button is visible
- **AND** a background image is visible on the right half

#### Scenario: Portfolio slider shows images

- **GIVEN** the portfolio section is scrolled into view
- **THEN** a carousel of portfolio images is displayed
- **AND** hovering an image shows a "View More" overlay

#### Scenario: Testimonials carousel works

- **GIVEN** the testimonials section is scrolled into view
- **THEN** the heading "Testimonials" is visible
- **AND** at least one testimonial with photo, name, title, and quote is shown
- **AND** carousel navigation is present

#### Scenario: Plans section displays 3 pricing cards

- **GIVEN** the plans section is scrolled into view
- **THEN** the heading "Choose a plan" is visible
- **AND** 3 pricing cards are displayed in a row
- **AND** each card shows a price, plan name, feature list, and a CTA button
- **AND** the center card has a dark background (featured)

#### Scenario: CTA banner renders

- **GIVEN** the CTA section is scrolled into view
- **THEN** the text "Get your subscription now!" is visible
- **AND** the background is brand orange (`#ff9908`)

#### Scenario: Footer renders correctly

- **GIVEN** the footer is in the viewport
- **THEN** the logo is displayed
- **AND** social media icon links are visible (Pinterest, Facebook, Twitter, Dribbble, Behance)
- **AND** 3 footer link columns are present ("Useful Links", "Features", "About us")
- **AND** a copyright notice is displayed
- **AND** a link to "https://www.componentdock.com/" is present

#### Scenario: Responsive layout adapts

- **GIVEN** the user is on a mobile viewport (width < 768px)
- **THEN** the navbar collapses to a hamburger menu
- **AND** feature columns stack vertically
- **AND** pricing cards stack vertically
- **AND** the footer columns stack vertically

## Verification checklist

- [ ] All 9 sections render in correct page order
- [ ] Brand color `#ff9908` used for buttons, header border, prices, CTA
- [ ] Accent color `#ff5408` used for hover states, plan borders
- [ ] Roboto font loaded for all text
- [ ] Fixed header with orange bottom border, shrinks on scroll
- [ ] Hero slider with background image and numbered dot indicators
- [ ] Features section shows 4 items in a row
- [ ] Subscription section with checklist and background image
- [ ] Portfolio slider with hover overlay effect
- [ ] Testimonials carousel with author photos
- [ ] Plans section with 3 cards (center featured with dark bg)
- [ ] CTA banner with orange background
- [ ] Footer links to `https://www.componentdock.com/`
- [ ] No ColorLib references in app code (provenance only in spec)
- [ ] Responsive: hamburger menu on mobile, stacked columns
- [ ] Square CTA buttons (no border-radius) with brand orange
- [ ] Placeholder images via `picsum.photos/seed/wodbox-<n>/...`
