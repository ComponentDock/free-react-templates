# Template: ClosetCraft (Fashion House)
<!-- prep-status: shipped-as=silkhouse -->
> **SHIPPED-UNDER** — the ColorLib `shionhouse` design this prep describes already
> ships as `apps/silkhouse` (<https://silkhouse.free.componentdock.com>).
> Do not scaffold `apps/closetcraft`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-silkhouse/spec.md`.

## Purpose

Recreation of the ColorLib "Shionhouse" template as a React 19 + Vite + Tailwind 4 + TypeScript single-page application.

- **Source:** https://colorlib.com/wp/template/shionhouse/
- **Preview:** https://preview.colorlib.com/theme/shionhouse/
- **New name:** `closetcraft` (app folder `apps/closetcraft`, package `@free-react-templates/closetcraft`)
- **Surge target:** `closetcraft.free.componentdock.com`
- **Category:** Fashion / Clothing House

## Design tokens

| Token | Value | Usage |
|-------|-------|-------|
| Accent / purple | `#9F78FF` | Buttons, borders, highlights, preloader |
| Dark navy | `#140C40` | Headings color |
| Body text | `#646D77` | Paragraph text |
| Heading font | `"Cinzel", serif` | h1–h6, section titles |
| Body font | `"Poppins", sans-serif` | Body text, nav, buttons |
| Button bg | `#9F78FF` | Primary CTA buttons |
| Button radius | `4px` | Slightly rounded |
| Border button | `#9F78FF` border, transparent bg | Secondary CTA |
| Hero text | `#ffffff` | White text on dark overlay |
| Surface (measured) | `#1f2b7b` | paints it ×20 — `background` on `.genric-btn.primary`; style.css (62,397 B, sha256 346c8a82037e) · <https://preview.colorlib.com/theme/shionhouse/> |

## Section structure (page order)

1. **Nav** — Logo left, centered nav links (Home, Shop, Pages dropdown, About, Blog, Contact), search + cart icons right. Sticky on scroll.
2. **Hero** — 3-slide carousel, background images with dark overlay. Each slide: large heading "fashion changing always" (white, Cinzel serif, 120px), "Shop Now" purple button.
3. **PopularItems** — "new arrival" section title, 4 product cards in a row. Each: product image, hover overlay with icons, title (e.g. "Knitted Jumper"), price.
4. **Collection** — "collection houses our first-ever" heading, background image with dark overlay, description text, "Shop Now" button.
5. **Footer** — Logo, about text, quick links, contact info, social icons (Pinterest, Twitter, Facebook), copyright with Component Dock link.

## Requirements

### Nav

Feature: ClosetCraft Navigation

#### Scenario: Nav displays logo and links

- **GIVEN** the user is on the ClosetCraft page
- **THEN** the logo is visible
- **AND** navigation links are visible: Home, Shop, Pages, About, Blog, Contact
- **AND** search and cart icons are on the right
- **AND** the header is sticky on scroll

#### Scenario: Mobile menu opens offcanvas

- **GIVEN** the user is on a mobile viewport
- **WHEN** the hamburger menu is clicked
- **THEN** an offcanvas menu slides in with navigation links

### Hero

Feature: ClosetCraft Hero

#### Scenario: Hero carousel displays slides

- **GIVEN** the user is on the ClosetCraft page
- **THEN** a full-width hero carousel is visible with 3 slides
- **AND** each slide has a dark overlay on background image
- **AND** each slide shows the heading "fashion changing always" in white serif font
- **AND** each slide contains a "Shop Now" purple button

### PopularItems

Feature: ClosetCraft Popular Items

#### Scenario: New arrival section displays products

- **GIVEN** the user scrolls to the popular items section
- **THEN** a "new arrival" section title is displayed
- **AND** 4 product cards are shown in a row
- **AND** each card has an image with hover overlay
- **AND** each card shows a product title and price

### Collection

Feature: ClosetCraft Collection

#### Scenario: Collection section renders

- **GIVEN** the user scrolls to the collection section
- **THEN** a "collection houses our first-ever" heading is displayed
- **AND** a background image with dark overlay is shown
- **AND** description text is present
- **AND** a "Shop Now" purple button is available

### Footer

Feature: ClosetCraft Footer

#### Scenario: Footer displays widgets

- **GIVEN** the user scrolls to the footer
- **THEN** the footer has a logo and about text
- **AND** quick links are displayed
- **AND** contact info is shown
- **AND** social icons (Pinterest, Twitter, Facebook) are present
- **AND** a copyright bar is at the bottom

#### Scenario: Footer links to Component Dock

- **GIVEN** the footer is rendered
- **THEN** the copyright includes a link to "Component Dock" (https://www.componentdock.com/)
- **AND** no ColorLib references appear in the app code

## Verification checklist

- [ ] All 5 sections present in correct order
- [ ] Design tokens match: #9F78FF accent, Cinzel headings, Poppins body
- [ ] Hero carousel with 3 slides, dark overlay, white serif heading
- [ ] 4 product cards in new arrival section
- [ ] Collection section with dark overlay background
- [ ] Footer with logo, links, social, copyright
- [ ] Footer links to Component Dock
- [ ] No ColorLib references in app code
