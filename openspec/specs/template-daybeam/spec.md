# Template: Daybeam (Portfolio)

## Purpose

Recreation of the ColorLib "Sun" template as a React 19 + Vite + Tailwind 4 + TypeScript single-page portfolio template.

- **Source:** ColorLib Sun — https://colorlib.com/wp/template/sun/
- **Preview:** https://preview.colorlib.com/theme/sun/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/sun-free-template.jpg (AVIF format)
- **Stack:** React 19, Vite (latest), Tailwind CSS 4, TypeScript (strict)
- **Category:** Portfolio
- **New name:** daybeam (never reuse ColorLib source name "sun")

## Design tokens

Extracted from the live preview CSS (`style.css`) at https://preview.colorlib.com/theme/sun/.

### Colors

| Token             | Value     | Usage                                      |
| ----------------- | --------- | ------------------------------------------ |
| brand             | `#FD3137` | Primary accent: links, buttons, hovers, filter active state, portfolio text overlays |
| bg-body           | `#E2E0E0` | Page background, header search bg          |
| bg-portfolio      | `#FAF6F6` | Portfolio grid section background          |
| bg-content        | `#FFFFFF` | Content/article area                       |
| text-primary      | `#191919` | Body text, headings                        |
| text-menu         | `#a1a1a1` | Navigation menu items                      |
| text-secondary    | `#b5b5b5` | Footer text, secondary content             |
| text-subtle       | `#adadad` | Subtle labels                              |
| filter-border     | `#e2dfd9` | Filter button separator line               |

### Typography

| Element      | Font family                | Weight |
| ------------ | -------------------------- | ------ |
| Body / nav   | Montserrat, sans-serif     | 400, 700 |
| Content serif | PT Serif, serif           | 400, 700 |

- Load via Google Fonts: `https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=PT+Serif:wght@400;700&display=swap`

### Layout

- Max content width: 1330px (centered)
- Header: logo left, horizontal nav right, with search toggle icon
- Portfolio grid: 3-column masonry/isotope-style with filter buttons (All, Post, Image, Video, Extern)
- Two-column text section below portfolio ("The Story" / "Dreamers")
- Footer: 3-part — copyright left, logo center, social links right
- Button style: `.button` class, brand color text, no border-radius observed (sharp corners), padding 15px 20px

### Section order (from preview DOM)

1. Header (logo + nav + search toggle)
2. Portfolio section (intro text + filter buttons + masonry grid)
3. Two-column text section ("The Story" / "Dreamers" with "More…" CTA)
4. Footer (copyright + logo + social links)

## Gherkin requirements

### Feature: Daybeam Portfolio Template

  Background:
    Given the user visits the Daybeam portfolio page
    Then the page loads with a light gray (#E2E0E0) background

  Scenario: Header renders with logo and navigation
    Given the page is loaded
    Then the header displays a logo image on the left
    And the navigation menu shows links: Home, About, Portfolio, Blog, Contact
    And a search toggle icon is visible on the right side of the nav
    And the nav items use Montserrat font with color #a1a1a1

  Scenario: Search toggle opens search overlay
    Given the header is visible
    When the user clicks the search toggle icon
    Then a search input field appears with placeholder "Search ..."
    And the search overlay has background #E2E0E0

  Scenario: Portfolio filter buttons render
    Given the portfolio section is visible
    Then filter buttons are displayed: All, Post, Image, Video, Extern
    And the "All" button is active by default with brand color #FD3137
    And inactive buttons have color #191919
    And a thin separator border (#e2dfd9) appears between filter buttons

  Scenario: Portfolio grid displays items
    Given the filter buttons are visible
    Then a 3-column masonry grid displays portfolio items
    And each item shows an image placeholder with a text overlay (e.g. "CLOCK", "BAG")
    And the overlay text uses brand color #FD3137
    And the portfolio section has background #FAF6F6

  Scenario: Filter buttons filter portfolio items
    Given the portfolio grid shows all items
    When the user clicks "Post" filter button
    Then only post-type items are visible
    And the "Post" button becomes active (brand color #FD3137)
    And the "All" button returns to inactive state

  Scenario: Two-column text section renders
    Given the portfolio grid is visible
    Then a two-column layout appears below the grid
    And the left column shows "The Story" heading with paragraph text
    And the right column shows "Dreamers" heading with paragraph text
    And the right column contains a "More…" button/link

  Scenario: Footer renders with three sections
    Given the page is scrolled to the bottom
    Then the footer displays copyright text on the left
    And a logo image is centered in the footer
    And social links (Twitter, Linkedin, Dribbble, Instagram) appear on the right
    And the footer links to Component Dock (https://www.componentdock.com/)

  Scenario: Responsive layout adapts to mobile
    Given the user views the page on a 375px wide viewport
    Then the navigation menu collapses into a hamburger menu
    And the portfolio grid switches to a single-column layout
    And the two-column text section stacks vertically

## Verification checklist

- [ ] Header: logo left, nav right, search toggle, Montserrat font, correct colors
- [ ] Search overlay: opens on toggle click, search input, gray background
- [ ] Portfolio filters: 5 buttons, active state brand color, separator borders
- [ ] Portfolio grid: 3-column masonry layout, image placeholders, text overlays
- [ ] Filter functionality: clicking filter shows matching items, inactive items hidden
- [ ] Two-column text: "The Story" + "Dreamers" headings, "More…" CTA
- [ ] Footer: copyright left, logo center, social links right, Component Dock link
- [ ] Typography: Montserrat (body/nav), PT Serif (content serif elements)
- [ ] Colors: brand #FD3137, bg #E2E0E0, portfolio bg #FAF6F6, text #191919
- [ ] Responsive: mobile hamburger, single-column grid, stacked text columns
- [ ] No ColorLib references in app code (provenance only in spec + TEMPLATES.md + PR)
- [ ] Placeholder images via picsum.photos with deterministic seeds
- [ ] All tests pass at 100% coverage (lines, functions, branches, statements)
