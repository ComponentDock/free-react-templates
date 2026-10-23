---
name: threadcraft
description: Fashion eCommerce website template — recreation of ColorLib Fashi
source: https://colorlib.com/wp/template/fashi/
preview: https://preview.colorlib.com/theme/fashi/
---

# Template: Threadcraft (Ecommerce)

## Purpose

Threadcraft is a fashion eCommerce landing page template. It recreates the ColorLib Fashi design under a different name, providing a complete storefront with hero promotions, product grids, deal countdown, collection gallery, blog teasers, and footer.

## Requirements

### Requirement: TopBar displays contact information

The template SHALL display a top bar with contact email, phone number, language selector, cart icon with count, and login link.

#### Scenario: TopBar renders on page load

- **WHEN** the page loads
- **THEN** the top bar shows "hello@threadcraft.com" and "+1 555 123 4567"
- **AND** a Login link is visible

### Requirement: Navbar displays logo and navigation

The template SHALL display a navigation bar with the "Threadcraft" logo and links to Home, Shop, Collection, Men's, Women's, Kid's, Blog, and Contact.

#### Scenario: Navbar renders on page load

- **WHEN** the page loads
- **THEN** the logo "Threadcraft" is displayed
- **AND** all navigation links are present

### Requirement: HeroSlider displays promotional slides

The template SHALL display a hero slider with promotional content, sale badges, and Shop Now CTAs.

#### Scenario: HeroSlider renders initial slide

- **WHEN** the page loads
- **THEN** the first slide with "Summer Collection" heading is visible
- **AND** a "Shop Now" button is present

#### Scenario: HeroSlider navigates between slides

- **WHEN** user clicks the Next slide button
- **THEN** the next slide is displayed
- **WHEN** user clicks the Previous slide button
- **THEN** the previous slide is displayed

### Requirement: CategoryTabs switch product categories

The template SHALL display category tabs (Men's, Women's, Kid's) that switch the active category.

#### Scenario: CategoryTabs switch on click

- **WHEN** user clicks a category tab
- **THEN** that tab becomes visually active

### Requirement: TrendingProducts displays and filters products

The template SHALL display a product grid with category filter pills.

#### Scenario: TrendingProducts filters by category

- **WHEN** user clicks a category filter pill
- **THEN** products matching that category are shown

### Requirement: DealOfTheWeek displays countdown timer

The template SHALL display a deal section with a countdown timer showing Days, Hrs, Mins, Secs.

#### Scenario: DealOfTheWeek renders countdown

- **WHEN** the page loads
- **THEN** the countdown timer shows Days, Hrs, Mins, Secs values

### Requirement: FeaturedProducts displays tabbed products

The template SHALL display featured products with tabbed navigation.

#### Scenario: FeaturedProducts switches tabs

- **WHEN** user clicks a tab
- **THEN** that tab becomes active

### Requirement: CollectionGallery displays image grid

The template SHALL display a 6-image collection grid.

#### Scenario: CollectionGallery renders images

- **WHEN** the page loads
- **THEN** 6 collection images are displayed

### Requirement: BlogSection displays blog posts

The template SHALL display 3 blog cards with dates and titles.

#### Scenario: BlogSection renders posts

- **WHEN** the page loads
- **THEN** 3 blog cards with dates and titles are shown

### Requirement: FeaturesBar displays feature highlights

The template SHALL display 3 feature items: Free Shipping, Delivery On Time, Secure Payment.

#### Scenario: FeaturesBar renders features

- **WHEN** the page loads
- **THEN** all 3 feature items are displayed

### Requirement: Footer links to Component Dock

The template SHALL display a footer with address, newsletter signup, and a link to Component Dock.

#### Scenario: Footer renders Component Dock link

- **WHEN** the page loads
- **THEN** a "More templates at Component Dock" link points to https://www.componentdock.com/

### Requirement: No ColorLib references in app code

The template SHALL NOT contain any references to "colorlib" in application source files.

#### Scenario: No colorlib strings

- **WHEN** searching app source files for "colorlib"
- **THEN** no matches are found

## Verification checklist

- [ ] `npm run verify:app -- threadcraft` green: typecheck → lint → vitest
      (100% coverage) → build (per-app gate).
- [ ] All 13 scenarios above are covered by colocated tests
      (query by role/label; test names mirror the scenario names):
      - TopBar displays contact information
      - Navbar displays logo and navigation
      - HeroSlider displays promotional slides
      - CategoryTabs switch product categories
      - TrendingProducts displays and filters products
      - DealOfTheWeek displays countdown timer
      - FeaturedProducts displays tabbed products
      - CollectionGallery displays image grid
      - BlogSection displays blog posts
      - FeaturesBar displays feature highlights
      - Footer links to Component Dock
- [ ] Sections render in the order listed in the requirements above,
      with no console errors on load.
- [ ] Responsive check at 375 / 768 / 1280px: no horizontal overflow,
      nav collapses to the mobile toggle, grids reflow.
- [ ] Design tokens from the reference are applied via the Tailwind
      theme (brand color, font, radii) — no hard-coded hex in sections.
- [x] No ColorLib name, domain or URL in any app file or filename —
      provenance stays in this spec, TEMPLATES.md and the PR.
- [x] Footer links https://www.componentdock.com/ ("Component Dock").
- [x] TopBar displays contact information — the top bar shows "hello@threadcraft.com" and "+1 555 123 4567"
- [x] Navbar displays logo and navigation — the logo "Threadcraft" is displayed
- [x] HeroSlider displays promotional slides — the first slide with "Summer Collection" heading is visible
- [ ] CategoryTabs switch product categories — that tab becomes visually active
- [ ] TrendingProducts displays and filters products — products matching that category are shown
- [ ] DealOfTheWeek displays countdown timer — the countdown timer shows Days, Hrs, Mins, Secs values
- [ ] FeaturedProducts displays tabbed products — that tab becomes active
- [ ] CollectionGallery displays image grid — 6 collection images are displayed
- [ ] BlogSection displays blog posts — 3 blog cards with dates and titles are shown
- [ ] FeaturesBar displays feature highlights — all 3 feature items are displayed
