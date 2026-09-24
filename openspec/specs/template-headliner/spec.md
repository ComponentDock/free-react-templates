# Template: Headliner (Magazine & News)

## Purpose

Recreation of the ColorLib "Awesome Magazine" template as a React 19 + Vite +
Tailwind 4 + TypeScript application. The original is a responsive online
magazine / newspaper template with a clean, minimal editorial aesthetic.

- **Source:** ColorLib "Awesome Magazine"
  (https://colorlib.com/wp/template/awesome-magazine/)
- **Preview URL:** https://preview.colorlib.com/theme/awesome-magazine/
  (returns 404 — fallback to screenshot reference)
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/awesomemagazine-free-template.jpg
- **Category:** Magazine & News
- **Stack:** Vite (latest), React 19, Tailwind CSS 4, TypeScript (strict)

## Design Tokens

Extracted from the ColorLib listing page CSS (`wpex-css` variables) and
screenshot visual analysis:

### Colors

| Token              | Value     | Usage                                   |
| ------------------ | --------- | --------------------------------------- |
| brand-primary      | #1a73e8   | Top bar background, links, hover states |
| body-text          | #26282b   | Primary body copy                       |
| heading-color      | #26282b   | Headings (dark)                         |
| bg-white           | #ffffff   | Page background                         |
| bg-light           | #f8f9fa   | Section alternating background          |
| tag-color          | #e74c3c   | "TRENDING" / category badge text        |
| nav-text           | #333333   | Navigation link text                    |
| border-color       | #eeeeee   | Section dividers, card borders          |

### Typography

| Token              | Value / Font                                  |
| ------------------ | --------------------------------------------- |
| heading-font       | "Playfair Display", serif                     |
| body-font          | "Poppins", sans-serif                         |
| body-font-size     | 16px                                          |
| body-line-height   | 1.8em                                         |
| nav-font-weight    | 500 (medium), uppercase, letter-spacing 1px   |

### Spacing & Layout

| Token              | Value    |
| ------------------ | -------- |
| container-max-w    | 1140px   |
| section-padding-y  | 60px     |
| grid-gap           | 30px     |
| card-image-ratio   | 16:10    |

### Button / Badge Styles

- Category badges: uppercase, small font, colored text (#e74c3c), no background
- Nav links: uppercase, medium weight, letter-spacing, no underlines, hover
  color transitions to brand-primary (#1a73e8)
- Rounded corners: none (editorial/flat aesthetic)

## Requirements (Gherkin)

### Feature: Headliner — Magazine & News Template

#### Scenario: Top bar renders with search and branding
  Given a user loads the page
  Then the top bar displays a search input with placeholder "Search Your Interest..."
  And the site title "Headliner" is visible in the header area
  And navigation links (About, Contact) are visible in the top-right

#### Scenario: Category navigation bar
  Given a user loads the page
  Then a horizontal category navigation bar is displayed below the header
  And categories include: Lifestyle, Business, Fashion, Design, Health, Technology, Travel, Food, Creative
  And each category link is uppercase with medium font weight

#### Scenario: Trending articles grid
  Given a user loads the page
  Then four trending article cards are displayed in a single row
  And each card has a large image, a "TRENDING" badge, and a headline
  And cards are equal-width in a 4-column grid

#### Scenario: Latest posts section
  Given a user loads the page
  Then a "LATEST POSTS" section heading is visible
  And a featured post with a large image is shown on the left
  And two smaller post cards with category badges and headlines are shown on the right

#### Scenario: Footer
  Given a user scrolls to the bottom
  Then a footer is visible with a link to "https://www.componentdock.com/" branded as "Component Dock"
  And the footer has copyright text

#### Scenario: Responsive layout on mobile
  Given a user loads the page on a viewport width of 375px
  Then the category navigation collapses to a hamburger menu
  And trending article cards stack vertically (1 column)
  And the latest posts section stacks vertically

#### Scenario: Placeholder images
  Given the template renders any image
  Then images use deterministic placeholder URLs (https://picsum.photos/seed/headliner-<n>/<w>/<h>)
  And no original ColorLib assets are used

## Verification Checklist

- [ ] Top bar with search input renders correctly
- [ ] Header with site title and navigation links renders
- [ ] Category navigation bar renders with all categories
- [ ] Trending articles section renders 4 equal-width cards
- [ ] Latest posts section renders with featured + sidebar layout
- [ ] Footer links to Component Dock
- [ ] Responsive: mobile hamburger menu, stacked cards
- [ ] All images use picsum.photos placeholders
- [ ] No references to ColorLib in app code (only in spec/TEMPLATES.md)
- [ ] Tailwind theme tokens match design tokens above
- [ ] TypeScript strict mode passes (no `any`)
- [ ] 100% test coverage (lines, functions, branches, statements)
