# Capturelab — Photography Studio Template
<!-- prep-status: shipped-as=reflexly -->
> **SHIPPED-UNDER** — the ColorLib `phozogy` design this prep describes already
> ships as `apps/reflexly` (<https://reflexly.free.componentdock.com>).
> Do not scaffold `apps/capturelab`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-reflexly/spec.md`.

> Recreation of ColorLib "Phozogy" (https://colorlib.com/wp/template/phozogy/)

## Purpose

Capturelab is a photography studio landing page with a hero slider, service cards, a category carousel and a filterable masonry portfolio grid.

It recreates the ColorLib **Phozogy** design (https://colorlib.com/wp/template/phozogy/, preview: https://preview.colorlib.com/theme/phozogy/) as a Vite + React 19 + Tailwind CSS 4 + TypeScript template.

## Design tokens (from preview DOM + CSS analysis)

- **Primary/accent color:** `#009603` (green) — buttons, active nav, hover states
- **Text:** `#111111` (headings), `#666666` (body/paragraphs)
- **Footer background:** `#000606` (near-black)
- **Background:** `#ffffff` (white page), hero images with overlay
- **Fonts:** **Quantico** (headings, buttons — Google Fonts), **Open Sans** (body — Google Fonts)
- **Buttons:** Green `#009603`, uppercase, bold, Quantico font, `padding: 14px 30px`, no border-radius (square)
- **Layout:** Full-width hero slider, 3-column service cards, category carousel, masonry portfolio grid with filter tabs, 4-column footer
- **Footer:** Dark `#000606` background, logo + social icons (Facebook, Twitter, YouTube, Instagram), Instagram thumbnails, quick links, email subscribe form

## Sections (in order)

1. **Header/Navbar** — Sticky top header with logo image, navigation links (Home, About, Services, Pricing, Portfolio, Blog, Pages dropdown, Contact), search icon, mobile hamburger menu
2. **Hero** — Full-width image slider (owl-carousel), two slides each with "Photography Studio" heading, lorem ipsum description, "Contact us" green CTA button
3. **Services** — 3-column cards (Shooting, Videos, Editing) each with image, heading, description text. Cards overlap the hero by `-70px` margin-top with `z-index: 99`
4. **Categories** — Section title "Categories" + "View all" button, owl-carousel of category items (Animal, Natural, Portrait, etc.) each with background image, category name, and picture count
5. **Portfolio** — "Our latest works" title, filter tabs (All, Fashion, Lifestyle, Natural, Wedding, Videos), masonry grid of portfolio items with image overlay, magnific-popup lightbox, and hover text ("COLORS SPEAK" + category). Some items have `large-width` or `large-height` classes for varied sizes
6. **Footer** — 4-column: (1) logo + description + social icons, (2) Instagram thumbnail grid (3 images), (3) quick links (Home, About, Contact, Gallery, Portfolio, Services), (4) subscribe form with email input + send button. Copyright bar at bottom with Component Dock link

## Requirements

### Gherkin requirements

Feature: Capturelab Photography Studio

#### Scenario: Navbar renders all navigation links

- **GIVEN** I visit the Capturelab page
- **THEN** I see the logo
- **AND** I see links: Home, About, Services, Pricing, Portfolio, Blog, Contact
- **AND** I see a "Pages" dropdown menu
- **AND** I see a search icon

#### Scenario: Mobile menu opens and closes

- **GIVEN** I visit the Capturelab page on mobile
- **WHEN** I click the hamburger menu icon
- **THEN** I see the mobile navigation links
- **WHEN** I click "Close menu"
- **THEN** the mobile navigation is hidden

#### Scenario: Hero slider auto-advances

- **GIVEN** I visit the Capturelab page
- **THEN** I see "Photography Studio" heading on slide 1
- **WHEN** I wait for the slider to advance
- **THEN** I see "Photography Studio" heading on slide 2

#### Scenario: Hero slider has Contact us CTA

- **GIVEN** I visit the Capturelab page
- **THEN** I see a "Contact us" button on the hero

#### Scenario: Services section shows 3 service cards

- **GIVEN** I visit the Capturelab page
- **THEN** I see 3 service cards: Shooting, Videos, Editing
- **AND** each card has an image and description

#### Scenario: Categories section shows category carousel

- **GIVEN** I visit the Capturelab page
- **THEN** I see a "Categories" heading
- **AND** I see category items with names and picture counts
- **AND** I see a "View all" button

#### Scenario: Portfolio section shows filterable grid

- **GIVEN** I visit the Capturelab page
- **THEN** I see "Our latest works" heading
- **AND** I see filter tabs: All, Fashion, Lifestyle, Natural, Wedding, Videos
- **AND** I see portfolio grid items with images and overlay text
- **AND** clicking a filter tab shows only matching items

#### Scenario: Portfolio items show hover overlay

- **GIVEN** I visit the Capturelab page
- **WHEN** I hover over a portfolio item
- **THEN** I see a "+" icon and text overlay with title and category

#### Scenario: Footer renders all columns

- **GIVEN** I visit the Capturelab page
- **THEN** I see 4 footer columns
- **AND** I see social media icons (Facebook, Twitter, YouTube, Instagram)
- **AND** I see an email subscribe form
- **AND** I see quick links (Home, About, Contact, Gallery, Portfolio, Services)
- **AND** I see a "Component Dock" link in the copyright area

## Preview analysis notes

- Preview URL: `https://preview.colorlib.com/theme/phozogy/` (HTTP 200, full rendered DOM)
- Page title: "Phozogy | Template"
- Body structure: preloader → header → hero slider → services → categories → portfolio → footer
- Stylesheets: `css/bootstrap.min.css`, `css/font-awesome.min.css`, `css/elegant-icons.css`, `css/owl.carousel.min.css`, `css/magnific-popup.css`, `css/slicknav.min.css`, `css/style.css`
- Fonts loaded: Quantico (400, 700) + Open Sans (400, 600, 700) via Cloudflare Fonts
- Services section overlaps hero by `-70px` margin-top creating a floating card effect
- Portfolio uses masonry-style grid with varied item sizes (large-width, large-height classes)
- Footer: near-black `#000606` background, 4-column layout, Instagram thumbnail grid
- Copyright: "All rights reserved | This template is made with ♥ by Colorlib" → replaced with Component Dock link

## Verification checklist

- [ ] Header with logo, nav links (Home, About, Services, Pricing, Portfolio, Blog, Pages dropdown, Contact), search icon
- [ ] Hero slider with 2+ slides, "Photography Studio" heading, description text, "Contact us" CTA
- [ ] Services section: 3 cards (Shooting, Videos, Editing) with images and descriptions
- [ ] Categories section: title, "View all" button, carousel of category items with images + counts
- [ ] Portfolio section: "Our latest works" heading, filter tabs (All, Fashion, Lifestyle, Natural, Wedding, Videos), masonry grid with hover overlays
- [ ] Footer: 4 columns (logo+social, Instagram grid, quick links, subscribe form), copyright with Component Dock link
- [ ] Theme tokens in `@theme`: brand `#009603`, text `#111111`/`#666666`, footer bg `#000606`
- [ ] Quantico + Open Sans Google Fonts in index.html
- [ ] Placeholder images via `picsum.photos/seed/capturelab-<n>/<w>/<h>`
- [ ] No ColorLib references in app code (provenance only in spec + TEMPLATES.md)
- [ ] Footer links to `https://www.componentdock.com/` (Component Dock)
