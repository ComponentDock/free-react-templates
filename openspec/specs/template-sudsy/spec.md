# Template: Sudsy (Car Wash & Detailing)

## Purpose

A Car Wash & Detailing template with hero, about, pricing, services and video/cta sections. Recreation of ColorLib "Carwash" template as a car wash and detailing business landing page.

- **Source:** https://colorlib.com/wp/template/carwash/
- **Preview:** https://preview.colorlib.com/theme/carwash/
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript
- **App folder:** `apps/sudsy`
- **Package:** `@free-react-templates/sudsy`

## Design tokens

<!-- design-tokens-backfill:2026-10-23 -->
Measured from the live reference, not sampled off the screenshot:
https://preview.colorlib.com/theme/carwash/ (HTTP 200, 28,957 B, sha256 `465736ac1670…`, fetched 2026-10-23) and its design stylesheet(s) `style.css`, `gijgo.css`. CSS values are canonical over any screenshot sample.

| Token | Value | Evidence in the reference |
| --- | --- | --- |
| Accent (most-used chromatic) | `#007aff` | 27 declarations — `#back-top`, `.boxed-btn` |
| Other chromatic values | `#1f2b7b` (15), `#1592e6` (7), `#415094` (7) | secondary hues in the same sheet |
| Surface | `#ffffff` | 88 declarations — `.boxed-btn`, `.boxed-btn:hover` |
| Ink / dark surface | `#000000` | 10 declarations — `.categories-area .single-cat:hover .cat-cap h5`, `.slider-area .video-icon a::after` |
| Typeface | `Poppins` (5 rules — `.slider-area .hero__caption h1`)<br>`Work Sans` (2 rules — `.boxed-btn`) | `font-family` declarations in the design sheet |
| Radii | `50%`, `3px`, `8px`, `4px` | `50%` (`#back-top`); `3px` (`.genric-btn.radius`); `8px` (`.confirm-radio`); `4px` (`.gj-picker-bootstrap`) |
| Gradients | 10 declarations | `.blog_area a:hover,.blog_area a :hover`, `.blog_details a:hover` |

Palette in order of use: `#ffffff` ×88, `#007aff` ×27, `#f9f9ff` ×23, `#1f2b7b` ×15, `#000000` ×10, `#999999` ×10, `#888888` ×8, `#eeeeee` ×8.

- Put the accent, surface and ink in `@theme` (`--color-brand`, `--color-surface`, `--color-ink`) and use them through utilities / `cn()`.
- Do not invent shades: the census above is the sheet's own vocabulary; hovers reuse the listed values.
- Reuse the exact radii above for buttons, cards and dots — no unspecified rounding.

## Requirements

### Requirement: Navbar displays logo, navigation, and phone CTA

The navbar MUST display a logo with site name, navigation links (Home, About, Services, Pricing, Contact), and a pill-shaped phone CTA button.

#### Scenario: Navbar renders all elements

- **GIVEN** the Sudsy template is loaded
- **THEN** a sticky navbar is visible at the top
- **AND** the navbar contains a logo on the left
- **AND** navigation links are present: Home, About, Services, Pricing, Contact
- **AND** a blue pill-shaped phone CTA button is visible on the right

#### Scenario: Navbar becomes sticky on scroll

- **WHEN** the user scrolls past the hero section
- **THEN** the navbar sticks to the top of the viewport
- **AND** the navbar has a white background with subtle shadow

#### Scenario: Mobile menu opens and closes

- **WHEN** the user clicks the hamburger menu button on mobile
- **THEN** the mobile navigation menu opens
- **AND** clicking a link closes the menu

### Requirement: Hero section renders with background image and overlay

The hero section MUST display a full-width background image with a dark navy-blue overlay, large heading, subtitle, and blue CTA button.

#### Scenario: Hero displays content

- **GIVEN** the template is loaded
- **THEN** a full-width hero section is displayed
- **AND** the heading "Car Wash & Detailing" is in large white bold text
- **AND** a subtitle paragraph describes the services
- **AND** a blue pill CTA button labeled "Our Services" links to services

### Requirement: About section displays overlapping layout

The about section MUST show a light blue background with an equipment image and overlapping white card with heading, description, and CTA button.

#### Scenario: About section renders correctly

- **GIVEN** the template is loaded
- **WHEN** viewing the about section
- **THEN** the about section has a light blue (#EEF6FF) background
- **AND** an image of car wash equipment is shown
- **AND** a white card overlaps with heading "We have the latest equipment"
- **AND** a blue "About Us" CTA button links to contact

### Requirement: Pricing cards display services and prices

The pricing section MUST show three cards: Car Wash ($50.00), Detailing ($100.00), and Wash & Detailing ($200.00), each with a feature list and Get Started button.

#### Scenario: Three pricing cards are displayed

- **GIVEN** the template is loaded
- **WHEN** viewing the pricing section
- **THEN** 3 pricing cards are shown in a row
- **AND** card 1 shows "Car Wash" with price "$50.00"
- **AND** card 2 shows "Detailing" with price "$100.00"
- **AND** card 3 shows "Wash & Detailing" with price "$200.00"
- **AND** each card has a blue outlined "Get Started" button

### Requirement: Testimonials slider displays customer quotes

The testimonials section MUST show customer quotes in a slider with avatar, quote, author name, and role, with prev/next navigation.

#### Scenario: Testimonials display with navigation

- **GIVEN** the template is loaded
- **WHEN** viewing the testimonials section
- **THEN** a testimonial slider is present
- **AND** each slide shows author name, role, and avatar
- **AND** prev/next buttons navigate between testimonials
- **AND** dot indicators allow direct navigation

### Requirement: Services section displays four features

The services section MUST show four service items with icons, titles, and descriptions.

#### Scenario: Four service features are displayed

- **GIVEN** the template is loaded
- **WHEN** viewing the services section
- **THEN** 4 service items are shown
- **AND** each item has an icon, title, and description

### Requirement: Video/CTA section has dark background

The video/CTA section MUST display a dark background with heading and description.

#### Scenario: Video CTA renders correctly

- **GIVEN** the template is loaded
- **WHEN** viewing the CTA section
- **THEN** a dark background section is displayed
- **AND** the heading reads "Your car will look as your new one"
- **AND** a description paragraph is shown below the heading

### Requirement: Footer displays contact info and links to Component Dock

The footer MUST have a dark background with 4 columns (logo+contact, hours, navigation, social), a copyright bar, and a link to https://www.componentdock.com/ branded as "Component Dock".

#### Scenario: Footer layout and content

- **GIVEN** the template is loaded
- **WHEN** viewing the footer
- **THEN** the footer has a dark background
- **AND** the footer contains 4 columns with logo, hours, navigation links, and social icons
- **AND** a copyright bar is at the bottom
- **AND** a link to https://www.componentdock.com/ is present with text "Component Dock"
- **AND** no ColorLib references appear in the app source code

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/sudsy/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/sudsy/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [ ] Navbar displays logo, navigation, and phone CTA — a sticky navbar is visible at the top
- [ ] Hero section renders with background image and overlay — a full-width hero section is displayed
- [ ] About section displays overlapping layout — the about section has a light blue (#EEF6FF) background
- [ ] Pricing cards display services and prices — 3 pricing cards are shown in a row
- [ ] Testimonials slider displays customer quotes — a testimonial slider is present
- [ ] Services section displays four features — 4 service items are shown
- [ ] Video/CTA section has dark background — a dark background section is displayed
