# Template: Dirly (Directory & Listing)

> Recreation of ColorLib **Listingo** (https://colorlib.com/wp/template/listingo/)

## Purpose

Dirly is a directory & listing template with a navbar, hero, popular categories and footer. It recreates the ColorLib **Listingo** design (https://colorlib.com/wp/template/listingo/, preview: https://preview.colorlib.com/theme/listingo/) as a Vite + React 19 + Tailwind CSS 4 + TypeScript template.

## Overview

Dirly is a directory and local attraction finder landing page. It features a
dark hero with cityscape background, search bar, category tags, and a popular
categories section with image cards.

## Design tokens (from source analysis)

- **Primary brand**: `#e8491d` (vivid red-orange)
- **Dark bg**: `#1a1a2e` (deep navy-charcoal)
- **Hero overlay**: dark semi-transparent over cityscape photo
- **Heading font**: `'Playfair Display', serif` (cursive serif for hero)
- **Body font**: `'Poppins', sans-serif`
- **Tag pills**: `rgba(0,0,0,0.5)` dark semi-transparent, rounded-full
- **Search bar**: white bg, red search button
- **Cards**: rounded corners, image bg, white text overlay with badge
- **Navbar**: dark bg, white text, red accent button

## Sections (top to bottom)

1. **Navbar** — dark bg, logo (pin icon + "Dirly"), nav links (Home, Listings ▾, Pages ▾, About, Blog ▾, Contact), Sign In button (red)
2. **Hero** — full-width cityscape bg with dark overlay, subtitle "Find Nearby Attraction" (red), main heading in serif cursive font, search bar (what input + location input + red Search button), category tag pills below
3. **Popular Categories** — "Discover" subtitle (red), "Most Popular Categories" heading (serif cursive), 4 image cards (Amazing Places, Concerts, Travel Guide, Music Festival) with dark overlay text and listing count badge
4. **Footer** — dark bg, 3-column layout (logo + info, quick links, newsletter), bottom bar with copyright + "More templates at Component Dock" link

## Requirements

### Navbar

#### Scenario: Navbar

- **GIVEN** the page loads, Then the navbar is visible with logo, nav links, and Sign In button
- **GIVEN** the user clicks a nav link, Then the page scrolls to the corresponding section

### Hero

#### Scenario: Hero

- **GIVEN** the page loads, Then the hero section shows a background image with search bar
- **GIVEN** the user types in the "What" input, Then the input value updates
- **GIVEN** the user types in the "Location" input, Then the input value updates
- **GIVEN** the user clicks Search, Then the form submits (preventDefault)
- **GIVEN** category tags are displayed, Then clicking a tag is a no-op link

### Popular Categories

#### Scenario: Popular Categories

- **GIVEN** the page loads, Then 4 category cards are displayed with images and names
- Each card shows the category name and a listing count badge

### Footer

#### Scenario: Footer

- **GIVEN** the page loads, Then the footer shows logo, quick links, newsletter form
- The footer links to https://www.componentdock.com/

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/dirly/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/dirly/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Files

```
apps/dirly/
├── public/CNAME               # dirly.free.componentdock.com
├── index.html                 # Google Fonts: Playfair Display + Poppins
├── package.json               # @free-react-templates/dirly, homepage set
├── tsconfig.json
├── vite.config.ts             # injectUiSource() pattern
├── vitest.config.ts
└── src/
    ├── main.tsx
    ├── App.tsx                # Composes all sections
    ├── index.css              # Tailwind + theme tokens
    ├── test/setup.ts
    └── components/
        ├── Navbar.tsx + test
        ├── Hero.tsx + test
        ├── PopularCategories.tsx + test
        └── Footer.tsx + test
```

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [ ] Navbar — GIVEN** the page loads, Then the navbar is visible with logo, nav links, and Sign In button
- [ ] Hero — GIVEN** the page loads, Then the hero section shows a background image with search bar
- [ ] Popular Categories — GIVEN** the page loads, Then 4 category cards are displayed with images and names
