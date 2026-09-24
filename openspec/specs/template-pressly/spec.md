# Template: Pressly (Magazine / News Template)

## Purpose

Pressly is a single-page magazine / news website template in the
free-react-templates monorepo. It is a React recreation of the
ColorLib "Magaznpro" magazine template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference

- **Original:** ColorLib "Magaznpro" — free responsive magazine template
  (source: https://colorlib.com/wp/template/magaznpro/).
- **Live preview:** https://preview.colorlib.com/theme/magaznpro/
- **Font:** DM Sans (Google Fonts, weights 400/500/700)
- **Brand pink/magenta:** `#f0d` (primary accent — buttons, nav bg, links)
- **Heading color:** `#000`
- **Body text:** `#646464`
- **Slider caption date:** `#5E5E5E`
- **Social icon grey:** `#D4D4E1`
- **Section title border:** `#E8E9FF`
- **Light section bg:** `#FFF6FE` (Technology section)
- **Card borders:** `#f0e9ff`
- **Category badges:** teal `#00CEB2`, blue `#0154F7`, orange-red `#F04506`, yellow `#FBCE0F`, purple `#DD00FF`

## Structure (section order, 1:1 from original)

1. **HEADER (top):** Social icons left (Facebook, Instagram, Twitter, LinkedIn, Tumblr as inline SVGs), center logo "Pressly" wordmark, right: search icon + "Page" dropdown + "Sign in" button
2. **HEADER (bottom/sticky):** Nav bar with pink `#f0d` background, white text. Links: Home, Lifestyle, Food, Review, Sports, Movie, Fitness, Fashion
3. **HERO CAROUSEL:** Full-width slider with large image, white overlay card at bottom with rounded corners, category badge pill, headline, date+author
4. **TRENDING NOW:** "TRENDING NOW" heading with "View All" link. Left: large trending card with image + overlay + category badge. Right: grid of 5 smaller article cards
5. **WHAT'S NEW:** "What's New" heading with tab row (All, Lifestyle, Travel, Fashion, Photography). Active tab has pink underline. Left: large featured article with image overlay. Right: 3 stacked smaller articles.
6. **TECHNOLOGY:** Light pink `#FFF6FE` bg. "Technology" heading with "View All". 3-column: left 2 small articles, center large slider with video play icon, right 2 small articles.
7. **INSTAGRAM STRIP:** Row of 6 square images with hover overlay icon
8. **FOOTER:** Dark background. 4 columns: Logo+blurb+social icons, Useful links, Top Categories, Subscribe Newsletter form. Bottom: Copyright line with Component Dock credit.
9. **Back-to-top button:** Floating pink circle

## Recreation decisions

- Photos → seeded picsum placeholders (`picsum.photos/seed/pressly-<n>/<w>/<h>`)
- Icons → lucide-react + inline SVGs for social icons (brand icons removed from lucide)
- Fonts → Google Fonts DM Sans via `<link>` in `index.html`
- Logo → bold text wordmark "Pressly" in brand pink
- Footer links Component Dock (`https://www.componentdock.com/`)

Pressly lives in `apps/pressly` and uses shared components from
`packages/ui` (Button, ButtonLink, cn).

## Requirements

### Requirement: Header with social icons, logo, and controls

The system SHALL render a top header with social icon links on the left,
a centered "Pressly" wordmark, and search + dropdown + sign-in on the right.

#### Scenario: Top header layout

- **GIVEN** the Pressly page is rendered
- **WHEN** the page loads
- **THEN** the header SHALL show five social icon links (Facebook, Instagram, Twitter, LinkedIn, Tumblr) on the left
- **AND** the centered wordmark "Pressly" SHALL be displayed
- **AND** a search icon, "Page" dropdown, and "Sign in" button SHALL appear on the right

### Requirement: Sticky navigation bar

The system SHALL render a pink navigation bar below the header with white nav links.

#### Scenario: Navigation links

- **GIVEN** the navigation bar is rendered
- **WHEN** the page loads
- **THEN** the nav bar SHALL have a pink `#f0d` background
- **AND** eight nav links SHALL be shown: Home, Lifestyle, Food, Review, Sports, Movie, Fitness, Fashion
- **AND** all nav links SHALL have white text

### Requirement: Hero carousel

The system SHALL render a full-width hero carousel with large images and white overlay cards.

#### Scenario: Hero slide display

- **GIVEN** the hero carousel is rendered
- **WHEN** the page loads
- **THEN** a full-width image SHALL be displayed
- **AND** a white overlay card SHALL appear at the bottom with a category badge, headline, date, and author

#### Scenario: Hero carousel navigation

- **GIVEN** the hero carousel is displayed
- **WHEN** the user clicks next/previous controls
- **THEN** the displayed slide SHALL change

### Requirement: Trending Now section

The system SHALL render a "TRENDING NOW" section with a large card and a grid of 5 smaller cards.

#### Scenario: Trending layout

- **GIVEN** the trending section is rendered
- **WHEN** the page loads
- **THEN** a "TRENDING NOW" heading SHALL appear with a "View All" link
- **AND** a large trending card with image, overlay, and category badge SHALL be shown on the left
- **AND** 5 smaller article cards SHALL be shown in a grid on the right

### Requirement: What's New section

The system SHALL render a tabbed "What's New" section with tabs and articles.

#### Scenario: Tab switching

- **GIVEN** the What's New section is displayed
- **WHEN** the page loads
- **THEN** tabs for All, Lifestyle, Travel, Fashion, Photography SHALL be shown
- **AND** the "All" tab SHALL be active with a pink underline

#### Scenario: Featured and side articles

- **GIVEN** the What's New section is displayed
- **WHEN** the page loads
- **THEN** a large featured article with image overlay SHALL be shown on the left
- **AND** 3 stacked smaller articles SHALL be shown on the right

### Requirement: Technology section

The system SHALL render a Technology section on a light pink background with a 3-column layout.

#### Scenario: Technology layout

- **GIVEN** the Technology section is rendered
- **WHEN** the page loads
- **THEN** the section SHALL have a `#FFF6FE` background
- **AND** a "Technology" heading with "View All" link SHALL appear
- **AND** 2 small articles SHALL appear on the left, a large slider with video play icon in the center, and 2 small articles on the right

### Requirement: Instagram strip

The system SHALL render a row of 6 square images with hover overlay.

#### Scenario: Instagram grid

- **GIVEN** the Instagram strip is rendered
- **WHEN** the page loads
- **THEN** 6 square images SHALL be displayed in a row

### Requirement: Footer

The system SHALL render a dark footer with 4 columns and a copyright line.

#### Scenario: Footer content

- **GIVEN** the footer is displayed
- **WHEN** the page loads
- **THEN** a dark-background footer SHALL show 4 columns: logo+blurb+social icons, Useful links, Top Categories, Subscribe Newsletter
- **AND** the bottom copyright line SHALL link to https://www.componentdock.com/ branded as "Component Dock"

### Requirement: Back-to-top button

The system SHALL render a floating back-to-top button.

#### Scenario: Back-to-top visibility

- **GIVEN** the page is rendered
- **WHEN** the user scrolls down
- **THEN** a floating pink circular back-to-top button SHALL appear

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark and a document title.

#### Scenario: Full page render

- **GIVEN** the Pressly app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose header, nav, hero, trending, what's new, technology, instagram, and footer in order
- **AND** the document title SHALL be "Pressly — Magazine Template"

## Verification checklist

- [ ] `npm run spec:validate` passes
- [ ] App typechecks
- [ ] Tests at 100% coverage
- [ ] Build succeeds
- [ ] Section order matches reference 1:1
- [ ] Design tokens in `@theme`
- [ ] Footer links Component Dock
- [ ] No references to 'colorlib' or 'magaznpro' in app source
