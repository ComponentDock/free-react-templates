---
template: amethyst
original_name: Bootstrap Footer 19
original_slug: bootstrap-footer-19
preview_url: https://preview.colorlib.com/theme/bft/bootstrap-footer-19/
screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/bootstrap-footer-19.jpg
---

## Purpose

Recreation of ColorLib Bootstrap Footer 19 (https://colorlib.com/wp/template/bootstrap-footer-19/).
A purple gradient footer with 4 columns: About, Latest News, Information, and Instagram.

## Requirements

### Requirement: Footer renders semantic element with role

The footer SHALL be a semantic `<footer>` element with `role="contentinfo"`.

#### Scenario: Footer has correct semantic role

- **WHEN** the Footer component renders
- **THEN** a `<footer>` element with `role="contentinfo"` is present in the DOM

### Requirement: Purple gradient background

The footer SHALL display a purple gradient background from #2a1a5e to #5126a7 at 45 degrees.

#### Scenario: Gradient background applied

- **WHEN** the Footer component renders
- **THEN** the footer element has a linear-gradient background

### Requirement: Four-column layout on desktop

The footer SHALL display 4 columns on desktop (lg breakpoint) and stack on mobile.

#### Scenario: Grid layout present

- **WHEN** the Footer component renders
- **THEN** a CSS grid with 4 columns at lg breakpoint is applied

### Requirement: About column with contact details

The footer SHALL include an About column with address, phone, email, and a newsletter form.

#### Scenario: About heading and contact info

- **WHEN** the Footer component renders
- **THEN** an "About" heading is displayed
- **AND** address, phone, and email information are visible
- **AND** a newsletter subscription form is present

#### Scenario: Newsletter form interaction

- **WHEN** a user types an email address into the newsletter input
- **THEN** the input value updates
- **WHEN** the user submits the form
- **THEN** the default form submission is prevented

### Requirement: Latest News column with article cards

The footer SHALL include a Latest News column with 2 news cards showing thumbnail, title, date, author, and comment count.

#### Scenario: News articles displayed

- **WHEN** the Footer component renders
- **THEN** a "Latest News" heading is displayed
- **AND** 2 news articles with thumbnails, titles, dates, authors, and comment counts are visible

### Requirement: Information column with navigation links

The footer SHALL include an Information column with navigation links.

#### Scenario: Info links present

- **WHEN** the Footer component renders
- **THEN** an "Information" heading is displayed
- **AND** links for About, Products, Blog, Contact, and Help & Support are visible

### Requirement: Instagram column with photo grid

The footer SHALL include an Instagram column with a 2x3 grid of placeholder images.

#### Scenario: Instagram grid rendered

- **WHEN** the Footer component renders
- **THEN** an "Instagram" heading is displayed
- **AND** 6 Instagram photo placeholders are visible in a grid

### Requirement: Bottom bar with copyright and Component Dock attribution

The footer SHALL include a bottom bar with copyright text and a Component Dock attribution link.

#### Scenario: Copyright and attribution

- **WHEN** the Footer component renders
- **THEN** copyright text with the current year is displayed
- **AND** a "Component Dock" link pointing to https://www.componentdock.com/ is present
- **AND** a top border separator divides the bottom bar from the main content

### Requirement: Design token colors

The footer SHALL use design tokens for accent color (#fe59d7 pink), text colors, and border colors.

#### Scenario: Token classes applied

- **WHEN** the Footer component renders
- **THEN** footer text uses the footer-text token color
- **AND** headings use the footer-heading token color
- **AND** accent elements use the footer-accent token color
