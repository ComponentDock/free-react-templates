# Template: Reprise (Portfolio Gallery)

## Purpose

Recreation of ColorLib **Reopen** template as a React 19 + Vite + Tailwind 4 + TypeScript single-page portfolio gallery.

- **ColorLib source:** https://colorlib.com/wp/template/reopen/
- **Live preview analyzed:** https://preview.colorlib.com/theme/reopen/
- **New name:** `reprise` (apps/reprise, @free-react-templates/reprise)
- **Surge URL:** https://reprise.free.componentdock.com
- **Package name:** @free-react-templates/reprise

## Design tokens (from live preview CSS)

| Token                      | Value                                   | Notes                                          |
| -------------------------- | --------------------------------------- | ---------------------------------------------- |
| Brand color (accent)       | `#f277ae`                               | Pink/rose — used on links, buttons, heart icon |
| Body background            | `#ECECEC`                               | Light warm gray                                |
| Content wrapper background | `#ffffff`                               | White card wrapping all content                |
| Body text color            | `#222222`                               | Dark charcoal                                  |
| Link hover color           | `#f277ae`                               | Same as brand                                  |
| Page description text      | `#7e7e7e`                               | Medium gray subtitle                           |
| Footer text                | `#7e7e7e`                               | Matches page description                       |
| Portfolio overlay text     | `#6f6f6f` / `#7e7e7e`                   | Category + type labels                         |
| Toggle hamburger lines     | `#c2c2c2`                               | Inactive, `#000` when menu open                |
| Menu overlay border        | `#cccccc`                               | 30px solid border on fullscreen menu           |
| Load more button bg        | `#eeeeee`                               | Circle, border-radius: 30px                    |
| Button style               | 1px solid `#f277ae`, border-radius 50px | Hover: fill `#f277ae`, text white              |

### Fonts

| Role                      | Family     | Weights            | Source               |
| ------------------------- | ---------- | ------------------ | -------------------- |
| Body text                 | Roboto     | 300, 400, 700, 900 | Google Fonts via CDN |
| Headings (nav, portfolio) | Montserrat | 400, 700           | Google Fonts via CDN |
| Accents                   | PT Serif   | 400                | Google Fonts via CDN |

- Body: `font-family: 'Roboto', sans-serif; font-size: 24px; line-height: 43px; font-weight: 300`
- h1: 38px/38px; h2: 34px/34px; h3: 32px/32px
- Page description: 16px, `#7e7e7e`

### Layout

- Max content width: 1170px (header, hero, grid); 970px (footer)
- Body wrapper: 30px margin on all sides, white background
- Hero: centered logo (80px top/bottom padding) + title + subtitle
- Portfolio grid: Masonry/Isotope-style 3-column (items ~400px), with `.p_one_third` (1/3) and `.p_two_third` (2/3) width classes
- Grid items have image + absolute-positioned overlay text (category + type) at top-left
- Load more: centered arrow icon in circular `#eeeeee` background

## Sections (order in HTML)

1. **Navbar/Logo** — centered logo, hamburger menu toggle (slides full-screen overlay with nav links)
2. **Hero** — title ("Handpicked design resources crafted with much ♥ and care for every detail") + subtitle ("free downloads only on fridays")
3. **Portfolio Grid** — 3-column masonry grid, 9 items total. Each item: full-bleed image + overlay text (category name + content type: GALLERY/VIDEO/ARTICLE)
4. **Load More** — centered arrow icon (cosmetic, no actual load)
5. **Footer** — copyright line with heart icon + Colorlib link (replaced by Component Dock link) + social icons (Twitter, Behance, Dribbble, Facebook, RSS)

## Requirements

### Requirement: Logo and navigation bar

The template SHALL display a centered logo with a hamburger menu toggle.

#### Scenario: Logo is visible

- **WHEN** the user visits the page
- **THEN** there is a centered logo text "Reprise"

#### Scenario: Hamburger toggle opens overlay menu

- **WHEN** the user clicks the hamburger toggle
- **THEN** a full-screen overlay menu appears with white background and 30px #cccccc border
- **AND** the menu contains links: Home, About, Story, Blog, Contact, More

#### Scenario: Toggle icon animates to X when menu is open

- **WHEN** the menu is open
- **THEN** the toggle icon changes to an X

### Requirement: Hero section

The template SHALL display a centered hero with title and subtitle.

#### Scenario: Hero title with heart icon

- **WHEN** the user is on the home page
- **THEN** there is a centered title "Handpicked design resources crafted with much ♥ and care for every detail"
- **AND** the heart icon is pink (#f277ae)

#### Scenario: Hero subtitle

- **WHEN** the user views the hero
- **THEN** there is a subtitle "free downloads only on fridays" in gray (#7e7e7e)

### Requirement: Portfolio grid

The template SHALL display a 3-column masonry grid of portfolio items.

#### Scenario: Grid items render

- **WHEN** the user scrolls below the hero
- **THEN** there is a 3-column grid with 9 items
- **AND** each item shows a full-bleed image
- **AND** each item has an overlay with category name and content type (GALLERY/VIDEO/ARTICLE)

#### Scenario: Grid item hover effect

- **WHEN** the user hovers over a grid item
- **THEN** the image displays a subtle hover effect

### Requirement: Load more button

The template SHALL display a decorative load more button.

#### Scenario: Load more arrow

- **WHEN** the user sees the bottom of the grid
- **THEN** there is a centered arrow icon inside a circular #eeeeee background
- **AND** the arrow is decorative (no pagination action)

### Requirement: Footer

The template SHALL display a footer with copyright and social icons.

#### Scenario: Footer copyright

- **WHEN** the user scrolls to the bottom
- **THEN** there is a footer with copyright text and a heart icon
- **AND** the attribution links to Component Dock

#### Scenario: Social icon links

- **WHEN** the user views the footer
- **THEN** there are social icon links: Twitter, Behance, Dribbble, Facebook, RSS
- **AND** the footer text color is #7e7e7e

### Requirement: Responsive behavior

The template SHALL be responsive on mobile devices.

#### Scenario: Mobile layout

- **WHEN** the viewport is narrow (mobile)
- **THEN** the grid collapses to a single column
- **AND** the hamburger menu is accessible

### Requirement: Font loading

The template SHALL load Google Fonts.

#### Scenario: Font families loaded

- **WHEN** the page loads
- **THEN** the body text uses Roboto at weight 300
- **AND** headings use Montserrat at weight 700
- **AND** fonts load from Google Fonts CDN

### Requirement: Brand color consistency

The template SHALL use consistent brand colors.

#### Scenario: Interactive element colors

- **WHEN** any interactive element is visible
- **THEN** link hover states use #f277ae
- **AND** the CTA button has 1px solid #f277ae border with 50px border-radius
- **AND** on hover the button fills with #f277ae and text turns white

## Verification checklist

- [ ] Fonts: Roboto (300/400/700/900), Montserrat (400/700), PT Serif (400) loaded via Google Fonts
- [ ] Brand color #f277ae used on links, buttons, heart icon, hover states
- [ ] Body background #ECECEC, wrapper background #fff
- [ ] 3-column masonry grid with image + overlay text cards
- [ ] Grid items show category + content type labels
- [ ] Hamburger menu toggle with animated X state
- [ ] Full-screen overlay menu with #cccccc border
- [ ] Hero with centered title + subtitle
- [ ] Load more decorative arrow in circular gray background
- [ ] Footer with copyright, heart icon, Component Dock link, social icons
- [ ] Responsive: single-column grid on mobile
- [ ] No references to ColorLib in app code (provenance only in spec/TEMPLATES.md)
- [ ] Footer links to https://www.componentdock.com/
- [ ] Package: @free-react-templates/reprise
- [ ] CNAME: reprise.free.componentdock.com
- [ ] Homepage: https://reprise.free.componentdock.com
