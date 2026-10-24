# Template: Corkage (Indian Restaurant Landing)

## Purpose

Recreate the ColorLib "Resta" template (https://colorlib.com/wp/template/resta/) as a React 19 + Tailwind CSS 4 + TypeScript single-page restaurant landing template named "Corkage". The design is a warm-toned Indian restaurant site with a hero carousel, about section, tabbed menu, testimonials, reservation form, and footer.

## Design tokens

<!-- design-tokens-backfill:2026-10-23 -->
Measured from the live reference, not sampled off the screenshot:
https://preview.colorlib.com/theme/resta/ (HTTP 200, 47,958 B, sha256 `171c66f3548e…`, fetched 2026-10-23) and its design stylesheet(s) `style.css`, `gijgo.css`. CSS values are canonical over any screenshot sample.

| Token | Value | Evidence in the reference |
| --- | --- | --- |
| Accent (most-used chromatic) | `#db9a64` | 25 declarations — `.boxed-btn`, `.boxed-btn3` |
| Other chromatic values | `#ff5e13` (15), `#001d38` (9), `#415094` (7) | secondary hues in the same sheet |
| Surface | `#ffffff` | 89 declarations — `*::-moz-selection`, `.owl-carousel .owl-nav div` |
| Ink / dark surface | `#000000` | 10 declarations — `.header-area .main-header-area .main-menu ul li .submenu li a`, `.header-area .main-header-area .main-menu ul li .submenu li:hover a` |
| Typeface | `Poppins` (9 rules — `.boxed-btn`)<br>`Philosopher` (4 rules — `.about_area .about_info_wrap h3`) | `font-family` declarations in the design sheet |
| Radii | `50%`, `3px`, `20px`, `8px` | `50%` (`.owl-carousel .owl-nav div`); `3px` (`.genric-btn.radius`); `20px` (`.about_area .about_img .img_1`); `8px` (`.confirm-radio`) |
| Gradients | 7 declarations | `.blog_area a:hover, .blog_area a :hover`, `.bradcam_area::before` |

Palette in order of use: `#ffffff` ×89, `#db9a64` ×25, `#f9f9ff` ×23, `#ff5e13` ×15, `#999999` ×11, `#000000` ×10, `#001d38` ×9, `#919191` ×8.

- Put the accent, surface and ink in `@theme` (`--color-brand`, `--color-surface`, `--color-ink`) and use them through utilities / `cn()`.
- Do not invent shades: the census above is the sheet's own vocabulary; hovers reuse the listed values.
- Reuse the exact radii above for buttons, cards and dots — no unspecified rounding.

Sheet identity (measured 2026-10-24): `theme/resta/css/style.css` — 150,382 B, sha256 `113b5055b0bb…`; `theme/resta/css/gijgo.css` — 55,532 B, sha256 `ae6c0a9951a2…`.

<!-- role-rule-tokens: resta/ink -->
**Role rule (measured 2026-10-25):** 5 rule(s) own ink; strongest `h5{color:#001D38}` — the design declares `#001d38`; this prep states `#000000`, which no rule that owns the heading ink declares. The sibling prep `morselry` states the measured value.
<!-- /role-rule-tokens -->

## Requirements

### Requirement: Navigation bar

The template SHALL display a sticky dark (#222222) navigation bar with brand name "Corkage" and links to Home, Menu, About, Testimonials, and Contact. The navbar SHALL include a "Book a Table" CTA button on the right side. The navbar SHALL include a mobile hamburger menu that toggles open/closed on click.

#### Scenario: Desktop navigation

- **WHEN** the page loads on a desktop viewport
- **THEN** the navbar shows the brand "Corkage" and all navigation links plus the "Book a Table" button

#### Scenario: Mobile navigation

- **WHEN** the hamburger menu button is clicked on mobile
- **THEN** a mobile navigation panel opens with all links
- **WHEN** a mobile nav link is clicked
- **THEN** the mobile navigation panel closes

### Requirement: Hero section

The template SHALL display a full-width hero section with a background image, dark overlay, heading text "Fresh And Delicious Food For Your Health", and an orange (#E8A87C) "View Menus" CTA button linking to the menu section.

#### Scenario: Hero content

- **WHEN** the page loads
- **THEN** the hero heading "Fresh And Delicious Food" is visible
- **AND** a "View Menus" button linking to #menu is present

### Requirement: About section

The template SHALL display a split-layout about section with a decorative food icon on the left, a heading "Sed ut perspiciatis unde omnis iste natus", descriptive paragraph text, and two stacked food images on the right.

#### Scenario: About content

- **WHEN** the page loads
- **THEN** the about heading containing "Sed ut perspiciatis" is visible
- **AND** descriptive paragraph text is present

### Requirement: Menu section

The template SHALL display a tabbed menu section with tabs for Starters, Main Course, and Desserts. Each tab SHALL show menu items with name, description, and price.

#### Scenario: Default tab

- **WHEN** the page loads
- **THEN** the Starters tab is active and shows starter menu items

#### Scenario: Tab switching

- **WHEN** the Main Course tab is clicked
- **THEN** the Main Course menu items are displayed

### Requirement: Testimonials section

The template SHALL display a testimonials section with customer quotes, names, and roles. The testimonials SHALL be displayed in a carousel with previous/next navigation.

#### Scenario: Testimonials display

- **WHEN** the page loads
- **THEN** at least one testimonial with a quote, name, and role is visible

#### Scenario: Testimonial navigation

- **WHEN** the next button is clicked
- **THEN** the next testimonial is displayed

### Requirement: Reservation form

The template SHALL display a "Book a Table" reservation form with fields for Name, Email, Phone, Date, Time, and Number of Guests, plus a "Book Now" submit button.

#### Scenario: Form fields

- **WHEN** the page loads
- **THEN** the reservation form has Name, Email, Phone, Date, Time, and Number of Guests fields
- **AND** a "Book Now" button is present

### Requirement: Footer

The template SHALL display a dark-background footer with About Us, Recent Blog, Services links, and Newsletter signup. The footer SHALL include a link to https://www.componentdock.com/ branded as "Component Dock".

#### Scenario: Footer content

- **WHEN** the page loads
- **THEN** the footer shows About Us, Recent Blog, Services, and Newsletter sections
- **AND** a "More templates at Component Dock" link pointing to https://www.componentdock.com/ is present

#### Scenario: Social links

- **WHEN** the page loads
- **THEN** Twitter, Facebook, and Instagram social media links are present in the footer

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/corkage/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/corkage/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [x] Navigation bar — the navbar shows the brand "Corkage" and all navigation links plus the "Book a Table" button
- [x] Hero section — the hero heading "Fresh And Delicious Food" is visible
- [x] About section — the about heading containing "Sed ut perspiciatis" is visible
- [ ] Menu section — the Starters tab is active and shows starter menu items
- [ ] Testimonials section — at least one testimonial with a quote, name, and role is visible
- [ ] Reservation form — the reservation form has Name, Email, Phone, Date, Time, and Number of Guests fields
