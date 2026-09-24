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

Extracted from the ColorLib listing page CSS and screenshot visual analysis:

### Colors

| Token         | Value   | Usage                                   |
| ------------- | ------- | --------------------------------------- |
| brand-primary | #1a73e8 | Top bar background, links, hover states |
| body-text     | #26282b | Primary body copy                       |
| heading-color | #26282b | Headings (dark)                         |
| bg-white      | #ffffff | Page background                         |
| bg-light      | #f8f9fa | Section alternating background          |
| tag-color     | #e74c3c | "TRENDING" / category badge text        |
| nav-text      | #333333 | Navigation link text                    |
| border-color  | #eeeeee | Section dividers, card borders          |

### Typography

| Token            | Value / Font                                |
| ---------------- | ------------------------------------------- |
| heading-font     | "Playfair Display", serif                   |
| body-font        | "Poppins", sans-serif                       |
| body-font-size   | 16px                                        |
| body-line-height | 1.8em                                       |
| nav-font-weight  | 500 (medium), uppercase, letter-spacing 1px |

### Spacing & Layout

| Token             | Value  |
| ----------------- | ------ |
| container-max-w   | 1140px |
| section-padding-y | 60px   |
| grid-gap          | 30px   |
| card-image-ratio  | 16:10  |

### Button / Badge Styles

- Category badges: uppercase, small font, colored text (#e74c3c), no background
- Nav links: uppercase, medium weight, letter-spacing, no underlines, hover
  color transitions to brand-primary (#1a73e8)
- Rounded corners: none (editorial/flat aesthetic)

## Requirements

### Requirement: Top bar with search and social icons

Users SHALL see a top bar with a blue (#1a73e8) background containing a search input on the left and social media icons (Twitter, Facebook, Pinterest) on the right.

#### Scenario: Top bar renders with search input

- **WHEN** a user loads the page
- **THEN** the top bar displays a search input with placeholder "Search Your Interest..."
- **AND** the search input is labeled for accessibility

#### Scenario: Social media icons render

- **WHEN** a user loads the page
- **THEN** Twitter, Facebook, and Pinterest icon links are visible in the top bar

### Requirement: Header with site title and navigation

Users SHALL see a centered site title "Headliner" in Playfair Display serif font with navigation links (About, Contact, Log In Or Sign Up) right-aligned.

#### Scenario: Header renders the site title

- **WHEN** a user loads the page
- **THEN** the heading "Awesome Magazine" is visible in the header area

#### Scenario: Header navigation links render

- **WHEN** a user loads the page
- **THEN** About, Contact, and Log In Or Sign Up links are visible

### Requirement: Category navigation bar

Users SHALL see a horizontal category navigation bar with links: Lifestyle, Business, Fashion, Design, Health, Harmful, Technology, Travel, Food, Creative. Links are uppercase with medium font weight.

#### Scenario: Category nav renders all categories

- **WHEN** a user loads the page
- **THEN** all 10 category links are visible and uppercase

#### Scenario: Mobile category toggle

- **WHEN** a user clicks the hamburger menu button on mobile
- **THEN** the category list expands/collapses

### Requirement: Trending articles grid

Users SHALL see a 4-column grid of trending article cards, each with a large image, a "TRENDING" badge, and a headline.

#### Scenario: Trending grid renders 4 cards

- **WHEN** a user loads the page
- **THEN** 4 trending article cards are displayed in a single row

#### Scenario: Each card has image, badge, and headline

- **WHEN** a trending card renders
- **THEN** it shows a picsum.photos placeholder image, a "TRENDING" label, and a headline

### Requirement: Latest posts section

Users SHALL see a "LATEST POSTS" section with a featured post on the left and two smaller posts on the right.

#### Scenario: Latest posts heading and layout

- **WHEN** a user scrolls to the latest posts section
- **THEN** the "LATEST POSTS" heading is visible
- **AND** a featured post with a large image is shown on the left
- **AND** two smaller posts with category badges and excerpts are shown on the right

#### Scenario: All images use placeholders

- **WHEN** any image renders in the latest posts section
- **THEN** it uses a deterministic picsum.photos placeholder URL

### Requirement: Footer with Component Dock link

Users SHALL see a dark footer with a copyright line and a link to https://www.componentdock.com/ branded as "Component Dock".

#### Scenario: Footer renders Component Dock link

- **WHEN** a user scrolls to the footer
- **THEN** a link to "https://www.componentdock.com/" with text "Component Dock" is visible

#### Scenario: Footer renders copyright

- **WHEN** a user scrolls to the footer
- **THEN** copyright text with the current year and "Headliner Magazine" is visible

### Requirement: Responsive layout on mobile

Users SHALL see a responsive layout where category nav collapses to a hamburger menu, trending cards stack vertically, and latest posts stack vertically.

#### Scenario: Mobile viewport layout

- **WHEN** a user loads the page on a viewport width of 375px
- **THEN** the category navigation shows a hamburger menu toggle
- **AND** trending article cards stack vertically

### Requirement: No ColorLib references in app code

The application SHALL NOT contain any references to "colorlib" in source files, comments, or data. Provenance lives only in the spec and TEMPLATES.md.

#### Scenario: Clean app source

- **WHEN** any file under apps/headliner/ is inspected
- **THEN** no strings contain "colorlib" (case-insensitive)

### Requirement: Tailwind theme tokens

The application SHALL define design tokens in @theme matching the original design: brand accent (#1a73e8), body text (#26282b), trending badge (#e74c3c), border (#eeeeee), Playfair Display for headings, Poppins for body.

#### Scenario: Theme tokens are defined

- **WHEN** the index.css is compiled
- **THEN** brand, ink, accent, border, and font tokens are available
