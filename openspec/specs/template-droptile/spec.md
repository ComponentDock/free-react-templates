# Template: Droptile (UI Snippet — Mega Menu Dropdown)

## Purpose

Recreation of ColorLib "Dropdown V16" — a mega menu dropdown navigation snippet
with an image hero area and category columns.

- **Source:** [ColorLib Dropdown 16](https://colorlib.com/wp/template/dropdown-16/)
- **Preview:** https://preview.colorlib.com/theme/bootstrap/dropdown-16/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/dropdown-16.jpg
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript (strict)

## Design tokens (from live preview CSS)

| Token                | Value                            | Source                         |
| -------------------- | -------------------------------- | ------------------------------ |
| Body font            | "Roboto", sans-serif, weight 300 | `css/style.css` body           |
| Body text color      | `#b3b3b3`                        | `css/style.css` p              |
| Heading color        | `#000`                           | `css/style.css` h1-h6          |
| Dropdown link color  | `#888`                           | `.dropdown-link`               |
| Dropdown link hover  | `#000`                           | `.custom-dropdown.show a`      |
| Mega menu link color | `#000`                           | `.mega-menu a`                 |
| Mega menu link hover | `#e83e8c` (pink)                 | `.mega-menu a:hover`           |
| Notification bg      | `#fff` (white)                   | `.dropdown-menu`               |
| Dropdown shadow      | `0 15px 30px 0 rgba(0,0,0,0.2)`  | `.dropdown-menu`               |
| Dropdown min-width   | 680 px                           | `.dropdown-menu`               |
| Dropdown border      | 1px solid transparent            | `.dropdown-menu`               |
| Dropdown padding     | 10 px                            | `.dropdown-menu`               |
| Mega menu padding    | 20 px                            | `.mega-menu`                   |
| Mega menu columns    | 3 × 33.3333%, flex               | `.mega-menu > div`             |
| Column padding       | 10 px each side                  | `.mega-menu > div`             |
| Content padding      | 7rem 0                           | `.content`                     |
| Arrow rotation       | 180deg when open                 | `.custom-dropdown.show a span` |
| Transition           | 0.3s all ease                    | `a` element                    |
| Hover accent         | `#e83e8c` (pink)                 | `.mega-menu a:hover`           |

## Visual design (from screenshot)

Clean white background. Centered "Dropdown #6" heading at the top. Below is a
centered dropdown trigger link ("Dropdown" + down-arrow icon) in gray (#888).
Clicking the link reveals a white card (shadow, no visible border, 680px min-width)
that fades in with opacity transition. The mega menu has three equal columns:

- **Left column:** A hero image (landscape, ~300px wide) at the top, below it a
  "PSD Mockups" link in bold and "View All Here" in muted text.
- **Middle column:** A vertical list of 6 category links (Code, Fonts, HTML
  Templates, Mockups, Logo, PSD Mockups) each with a count in parentheses.
- **Right column:** A second vertical list of 6 category links (Sketch App,
  User Interface, WordPress, User Experience, WebGL, Mockups) with counts.

The whole component sits in a centered `col-md-5` column with generous vertical
padding (7rem top/bottom). Links are black (#000), weight 400, with a pink
(#e83e8c) hover color.

## Requirements

### Requirement: Dropdown trigger renders

The component SHALL display a clickable trigger labeled "Dropdown" with a down-arrow icon.

#### Scenario: Trigger renders with default label

- **WHEN** the component is mounted
- **THEN** I see "Dropdown" text in gray (#888)
- **AND** I see a down-arrow icon next to it

### Requirement: Dropdown opens on trigger click

The mega menu panel SHALL appear when the trigger is clicked.

#### Scenario: Dropdown opens on click

- **WHEN** I click the "Dropdown" trigger
- **THEN** the mega menu panel appears with opacity transition
- **AND** the trigger text turns black (#000)
- **AND** the arrow icon rotates 180 degrees

### Requirement: Dropdown closes on trigger click again

The mega menu panel SHALL disappear when the trigger is clicked while open.

#### Scenario: Dropdown closes on second click

- **WHEN** I click the "Dropdown" trigger while open
- **THEN** the mega menu panel disappears
- **AND** the arrow icon rotates back to 0 degrees

### Requirement: Dropdown closes on outside click

The mega menu panel SHALL close when clicking outside the dropdown area.

#### Scenario: Dropdown closes on outside click

- **WHEN** I click outside the dropdown area while open
- **THEN** the mega menu panel disappears

### Requirement: Dropdown closes on Escape key

The mega menu panel SHALL close when the Escape key is pressed.

#### Scenario: Dropdown closes on Escape

- **WHEN** I press Escape while the dropdown is open
- **THEN** the mega menu panel disappears

### Requirement: Mega menu has three columns

The mega menu panel SHALL display three equal-width columns in a flex row.

#### Scenario: Three columns render

- **WHEN** the dropdown is open
- **THEN** I see three columns of equal width (33.33%)
- **AND** the columns are laid out in a flex row

### Requirement: Left column has image and link

The first column SHALL display a hero image and a PSD Mockups link.

#### Scenario: Left column content

- **WHEN** the dropdown is open and I look at the first column
- **THEN** I see a hero image at the top
- **AND** I see a bold "PSD Mockups" link below the image
- **AND** I see "View All Here" in muted text

### Requirement: Middle column has category list

The second column SHALL display a vertical list of 6 category links with counts.

#### Scenario: Middle column content

- **WHEN** the dropdown is open and I look at the second column
- **THEN** I see a vertical list of 6 category links
- **AND** each link shows a category name followed by a count in parentheses

### Requirement: Right column has category list

The third column SHALL display a vertical list of 6 category links with counts.

#### Scenario: Right column content

- **WHEN** the dropdown is open and I look at the third column
- **THEN** I see a vertical list of 6 category links
- **AND** each link shows a category name followed by a count in parentheses

### Requirement: Category link hover state

Category links SHALL change to pink (#e83e8c) on hover.

#### Scenario: Category link hover

- **WHEN** I hover over a category link
- **THEN** the link color changes to #e83e8c (pink)

### Requirement: Dropdown styling

The dropdown panel SHALL have the correct visual styling.

#### Scenario: Dropdown panel styling

- **WHEN** the dropdown is open
- **THEN** the panel has a white background (#fff)
- **AND** it has a box shadow of 0 15px 30px 0 rgba(0,0,0,0.2)
- **AND** its minimum width is 680px
- **AND** it has 10px padding

### Requirement: Mega menu internal spacing

The mega menu SHALL have correct internal spacing.

#### Scenario: Mega menu spacing

- **WHEN** the dropdown is open
- **THEN** the mega menu has 20px padding
- **AND** each column has 10px left/right padding

### Requirement: Accessibility — ARIA attributes

The trigger element SHALL have proper ARIA attributes.

#### Scenario: ARIA on trigger

- **WHEN** the component is mounted
- **THEN** the trigger has role="button"
- **AND** it has aria-expanded attribute
- **AND** it has aria-haspopup="true"

## Verification checklist

- [ ] Dropdown trigger renders with "Dropdown" text and arrow icon
- [ ] Trigger text is #888, turns #000 when open
- [ ] Arrow rotates 180deg when open
- [ ] Dropdown opens/closes on trigger click with opacity animation
- [ ] Dropdown closes on outside click
- [ ] Dropdown closes on Escape key
- [ ] Three equal-width columns in flex row
- [ ] Left column: hero image + "PSD Mockups" bold link + "View All Here" muted text
- [ ] Middle column: 6 category links with counts
- [ ] Right column: 6 category links with counts
- [ ] Category links are #000, hover to #e83e8c
- [ ] Dropdown panel: white bg, shadow, 680px min-width, 10px padding
- [ ] Mega menu: 20px padding, 33.33% columns
- [ ] Transition: 0.3s all ease on links
- [ ] ARIA: aria-expanded, aria-haspopup on trigger
- [ ] No references to ColorLib in source code
