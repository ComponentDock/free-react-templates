# Template: LookCraft (Photography Portfolio)

## Purpose

Recreation of the ColorLib "Thelook" template as a React 19 + Vite +
Tailwind CSS 4 + TypeScript single-page photography/artist portfolio landing
page.

- Source slug: `thelook`
- Source URL: https://colorlib.com/wp/template/thelook/
- Preview URL: https://preview.colorlib.com/theme/thelook/
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/thelook-free-template.jpg
- Package: `@free-react-templates/lookcraft`
- Deploy target: `lookcraft.free.componentdock.com`

## Design tokens (from reference CSS analysis)

### Brand colors

| Token         | Hex                   | Usage                                 |
| ------------- | --------------------- | ------------------------------------- |
| Dark navy     | `#081624`             | Primary text, button text, dark tones |
| Red accent    | `#f44336`             | Accent/CTA hover                      |
| Purple accent | `#673ab7`             | Secondary accent                      |
| Light gray bg | `#f6f7f9`             | Blog section background               |
| Medium gray   | `#5c5c5c` / `#656565` | Secondary text                        |
| Dark gray     | `#222222`             | Footer background                     |
| Body gray     | `#333` / `#515151`    | Body text                             |
| Light border  | `#c1c1c1` / `#e0e0e0` | Dividers, borders                     |
| White         | `#fff`                | Overlays (opacity 0.4), text on dark  |

### Typography

| Role     | Font | Fallback   |
| -------- | ---- | ---------- |
| All text | Lato | sans-serif |

### Shape / spacing

- Button radius: `60px` (pill-shaped)
- Section radius: `0` (sharp edges)
- Buttons: transparent bg, uppercase text, font-weight 700, min-width 167px
- Hero heading: 160px font-size, line-height 0.9
- White overlay on hero images: `opacity: 0.4`

### Section structure (order from reference)

1. **Header** — transparent, logo left, nav right (Home, Gallery, Artists, Shop, News, Contact)
2. **Hero slider** — 3 slides, each with background image + white semi-transparent overlay (`#fff` at 0.4), large heading ("The Look"), exhibition date/artist info, "Read More" CTA (pill button)
3. **Gallery section** — split 2-column layout:
   - Left column: gallery text (quote), 3 gallery items with thumbnails + "View Gallery" buttons
   - Right column: 3 gallery items with thumbnails + "View Gallery" buttons
   - "See All Galleries" CTA at bottom
4. **Blog section** — light gray `#f6f7f9` background, 2-column layout:
   - Left column: section title "Latest from the blog"
   - Right column: 2 blog items (thumbnail + title + date + excerpt)
5. **Footer** — dark `#222222` background, 4-column layout:
   - Logo + description text
   - Useful links
   - Instagram/contact info
   - Copyright bar

## Requirements

### Requirement: Transparent header with navigation

Users SHALL see a transparent header with the LookCraft logo on the left and navigation links (Home, Gallery, Artists, Shop, News, Contact) on the right.

#### Scenario: Header displays correctly

- **WHEN** the page loads
- **THEN** the header should be transparent and overlay the hero
- **AND** the logo "LookCraft" should be visible on the left
- **AND** six navigation links should be visible: Home, Gallery, Artists, Shop, News, Contact
- **AND** each link should point to the correct section anchor

#### Scenario: Mobile hamburger menu

- **WHEN** the viewport is 375px wide
- **THEN** a hamburger menu button should be visible
- **AND** clicking it should expand a mobile navigation menu
- **AND** clicking a nav link should close the mobile menu

### Requirement: Hero slider with three slides

Users SHALL see a full-width hero slider with 3 slides, each containing a background image, white semi-transparent overlay, heading, exhibition info, and a CTA button.

#### Scenario: Hero displays first slide

- **WHEN** the page loads
- **THEN** a full-width hero section should be visible
- **AND** the first slide should show the heading "The Look"
- **AND** exhibition date and artist info should be displayed
- **AND** a "Read More" pill-shaped button should be present
- **AND** dot navigation with 3 dots should be visible

#### Scenario: Slide navigation via dots

- **WHEN** the user clicks a dot indicator
- **THEN** the corresponding slide should become active
- **AND** the clicked dot should be highlighted

#### Scenario: Slide navigation via arrows

- **WHEN** the user clicks the previous/next arrow
- **THEN** the slider should move to the adjacent slide
- **AND** wrapping should occur at boundaries

#### Scenario: Auto-advance

- **WHEN** 5 seconds pass without user interaction
- **THEN** the slider should automatically advance to the next slide

### Requirement: Gallery section with split layout

Users SHALL see a 2-column gallery section with 6 gallery items, each with a thumbnail and "View Gallery" button, plus a "See All Galleries" CTA.

#### Scenario: Gallery displays correctly

- **WHEN** the user scrolls to the gallery section
- **THEN** a 2-column layout should be visible
- **AND** the left column should display a photography quote
- **AND** 3 gallery items should appear in the left column
- **AND** 3 gallery items should appear in the right column
- **AND** each item should have a thumbnail image and "View Gallery" button
- **AND** a "See All Galleries" link should be at the bottom

### Requirement: Blog section on light background

Users SHALL see a blog section with a light gray background, a section title on the left, and 2 blog items on the right.

#### Scenario: Blog displays correctly

- **WHEN** the user scrolls to the blog section
- **THEN** the section should have a light gray (#f6f7f9) background
- **AND** the heading "Latest from the blog" should be visible on the left
- **AND** 2 blog items should appear on the right
- **AND** each item should have a thumbnail, title, date, and excerpt

### Requirement: Dark footer with multiple columns

Users SHALL see a dark footer with 4 columns: logo + description, useful links, contact info, and a Component Dock link, plus a copyright bar.

#### Scenario: Footer displays correctly

- **WHEN** the user scrolls to the footer
- **THEN** the footer should have a dark (#222222) background
- **AND** the LookCraft logo should be visible
- **AND** useful links should be listed
- **AND** contact information should be displayed
- **AND** a link to https://www.componentdock.com/ should be present (branded "Component Dock")
- **AND** a copyright bar should be visible at the bottom

### Requirement: Pill-shaped buttons throughout

Users SHALL see pill-shaped (border-radius: 60px) transparent buttons with uppercase text throughout the template.

#### Scenario: Button styling

- **WHEN** CTA buttons are rendered
- **THEN** they should have a pill shape (border-radius: 60px)
- **AND** they should have transparent background
- **AND** they should display uppercase text
- **AND** they should have font-weight 700

### Requirement: Mobile responsive design

Users SHALL see a responsive layout that adapts to mobile viewports.

#### Scenario: Mobile layout

- **WHEN** the viewport is 375px wide
- **THEN** a hamburger menu icon should be visible
- **AND** the hero slider should display a single slide
- **AND** gallery columns should stack vertically
- **AND** blog columns should stack vertically
- **AND** footer columns should stack vertically

### Requirement: Typography consistency

Users SHALL see the Lato font family used throughout the template.

#### Scenario: Font rendering

- **WHEN** the page loads
- **THEN** all text should use the Lato font family
- **AND** the hero heading should be displayed at very large scale

## Verification checklist

- [ ] Header: transparent, sticky, logo + 6 nav links
- [ ] Hero: 3-slide slider with white overlay, large heading, date info, pill CTA, dots
- [ ] Gallery: 2-column split, 6 items total, "View Gallery" buttons, "See All" CTA
- [ ] Blog: light gray bg, 2-column, section title left, 2 blog items right
- [ ] Footer: dark bg, 4-column, Component Dock link, copyright
- [ ] Buttons: pill shape (60px radius), transparent, uppercase
- [ ] Mobile: hamburger, stacked layouts
- [ ] Colors match tokens: #081624 dark, #f44336 red, #673ab7 purple, #f6f7f9 light bg, #222222 footer
- [ ] Font: Lato throughout
- [ ] 100% test coverage (lines, functions, branches, statements)
