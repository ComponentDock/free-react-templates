# Template: Cantina (Restaurant Landing)
<!-- prep-status: shipped-as=pieslice -->
> **SHIPPED-UNDER** — the ColorLib `luigis` design this prep describes already
> ships as `apps/pieslice` (<https://pieslice.free.componentdock.com>).
> Do not scaffold `apps/cantina`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-pieslice/spec.md`.

## Purpose

Recreation of ColorLib **Luigis** — a pizza/pasta restaurant landing page.

- **ColorLib source:** https://colorlib.com/wp/template/luigis/
- **Live preview:** https://preview.colorlib.com/theme/luigis/
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript
- **New name:** Cantina (avoids reusing "Luigis")
- **Package:** `@free-react-templates/cantina`

## Design tokens (extracted from preview CSS)

| Token | Value | Usage |
|-------|-------|-------|
| brand-red | `#EF0031` | Primary buttons, accents, hover states |
| green-accent | `#1F8330` | Secondary buttons (`.btn-primaryc.secondary`), speciality ribbon |
| white | `#FFFFFF` | Text on dark backgrounds, button text |
| black | `#111111` | Body text, dark backgrounds |
| gray-light | `#EEEEEE` | Subtle backgrounds, borders |
| heading-font | `Beyond the Mountains` (Google Fonts fallback: `Playfair Display`) | Display headings, hero text |
| body-font | `Open Sans` (Google Fonts) | Body copy, navigation, menu items |
| btn-border-radius | `2px` | Border-style buttons (`.btn-brdr-primary`) |
| btn-filled-radius | `3px` | Filled primary buttons (`.btn-primaryc`) |
| btn-height | `45px` (border) / `55px` (filled) | Consistent vertical rhythm |

## Section structure (from preview DOM)

1. **Navbar** — Logo text "Luigi's" (→ "Cantina"), phone number CTA, horizontal nav (Home, About Us, Services, News, Contact). Fixed/sticky, dark background.
2. **Hero** — Full-width background image (pizza/pasta hero shot), centered overlay text: subtitle "BEST IN TOWN", heading "Pizza & Pasta", CTA button "SEE TODAYS MENU". Bottom triangle-up decoration.
3. **Our Story** — Two-column layout. Left: text with heading "Our Story" + two paragraphs. Right: image. Side decorative image panels (bg-2, bg-3) visible on large screens only.
4. **Best Sellers** — Dark full-width section with parallax food background image. 4-column grid of product cards (8 total in 2 rows). Each card: circular product image, label ribbon (OFFER / SPECIALITY / PLUS SIZE), product name, price, "Order Now" border button. Triangle decorations at top and bottom.
5. **Our Menu** — Tab-filtered menu (ALL / PIZZA / PASTA / SALADS / DESERTS). Grid of menu items, each with: small product image, item name, price, short description. "SEE TODAYS MENU" CTA button at bottom.
6. **Footer** — Dark background. Address, phone, email in columns. Copyright line with "Made with Component Dock" link.

## Requirements

### Feature: Cantina Restaurant Landing Template

  Background:
- **GIVEN** the Cantina template is loaded in a browser
- **AND** the viewport is 1440px wide

#### Scenario: Navbar displays logo and navigation links

- **THEN** the navbar shows the "Cantina" logo text
- **AND** the navbar shows a phone number CTA
- **AND** the navbar contains links: Home, About Us, Services, News, Contact

#### Scenario: Hero section displays restaurant headline

- **GIVEN** the hero section is visible
- **THEN** the hero shows the subtitle "BEST IN TOWN"
- **AND** the hero shows the heading "Pizza & Pasta"
- **AND** the hero shows a "SEE TODAYS MENU" button
- **AND** the hero has a full-width background image

#### Scenario: Our Story section shows two-column layout

- **GIVEN** the Our Story section is visible
- **THEN** the heading reads "Our Story"
- **AND** there are two text paragraphs in the left column
- **AND** the right column shows a food/restaurant image
- **AND** decorative side panels are visible on large screens

#### Scenario: Best Sellers section displays product cards on dark background

- **GIVEN** the Best Sellers section is visible
- **THEN** the section heading reads "Best Sellers"
- **AND** the background is dark with a food image
- **AND** there are 8 product cards in a 4-column grid
- **AND** each card shows a circular product image
- **AND** each card shows a ribbon label (OFFER, SPECIALITY, or PLUS SIZE)
- **AND** each card shows the product name and price
- **AND** each card has an "Order Now" border button

#### Scenario: Our Menu section has tab-filtered menu items

- **GIVEN** the Our Menu section is visible
- **THEN** the heading reads "Our Menu"
- **AND** there are tabs: ALL, PIZZA, PASTA, SALADS, DESERTS
- **AND** the ALL tab is active by default
- **AND** menu items show an image, name, price, and description
- **AND** clicking a tab filters the visible items

#### Scenario: Footer shows contact information

- **GIVEN** the footer is visible
- **THEN** it shows an address
- **AND** it shows a phone number
- **AND** it shows an email address
- **AND** it shows a copyright line
- **AND** it links to https://www.componentdock.com/

#### Scenario: Responsive layout adapts to mobile

- **GIVEN** the viewport is 375px wide
- **THEN** the navbar collapses to a hamburger menu
- **AND** the hero text is stacked vertically
- **AND** product cards are single-column
- **AND** menu items are stacked vertically

## Verification checklist

- [ ] `npm run verify:app -- cantina` green: typecheck → lint → vitest
      (100% coverage) → build (per-app gate).
- [ ] All 7 scenarios above are covered by colocated tests
      (query by role/label; test names mirror the scenario names):
      - Cantina Restaurant Landing Template
- [ ] Sections render in the order listed in the requirements above,
      with no console errors on load.
- [ ] Responsive check at 375 / 768 / 1280px: no horizontal overflow,
      nav collapses to the mobile toggle, grids reflow.
- [ ] Design tokens from the reference are applied via the Tailwind
      theme (brand color, font, radii) — no hard-coded hex in sections.
- [ ] No ColorLib name, domain or URL in any app file or filename —
      provenance stays in this spec, TEMPLATES.md and the PR.
- [ ] Footer links https://www.componentdock.com/ ("Component Dock").
