# Template: BuildWell (Construction Company)

## Purpose

Recreation of ColorLib's **Celt** construction company website template.

- **Source:** https://colorlib.com/wp/template/celt/
- **Preview:** https://preview.colorlib.com/theme/celt/
- **New name:** `buildwell`
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript
- **Category:** Construction / Corporate

## Design tokens

Extracted from the live preview CSS (`css/style.css`):

| Token            | Value                                   | Usage                                        |
| ---------------- | --------------------------------------- | -------------------------------------------- |
| `--brand-dark`   | `#001232`                               | Primary background, navbar, main buttons     |
| `--brand-accent` | `#FFD626`                               | Highlight sections, secondary buttons, icons |
| `--text-heading` | `#000044` (mapped as `#004`)            | Headings, body text emphasis                 |
| `--text-body`    | `#64728A`                               | Body copy, muted text                        |
| `--bg-white`     | `#FFFFFF`                               | Content backgrounds                          |
| `--bg-light`     | `#F8F8F8`                               | Alternate section backgrounds                |
| `font-family`    | `"Poppins", sans-serif`                 | Global font                                  |
| `border-radius`  | `0px` (buttons)                         | Square/rectangular buttons                   |
| `icon-radius`    | `50%` (number icons)                    | Circular stat icons                          |
| Button padding   | `10px 30px`                             | Both button variants                         |
| Button hover     | slide-fill animation (underline → full) | Accent-colored fill on hover                 |

### Color palette summary

- **Dark navy** `#001232` — dominant brand color, used on navbar, hero overlay, main buttons, footer
- **Yellow accent** `#FFD626` — highlight color for CTA sections, number stats band, secondary buttons, icon circles
- **Neutral grey** `#64728A` — body text
- **Dark heading** `#004` — headings and emphasis text

## Visual design notes (from TEMPLATES.md screenshot + preview)

- Dark navy hero with background image + semi-transparent overlay, large white headline "We Build Your Dream", two buttons (dark primary + yellow secondary).
- Clean white sections with 3-column icon feature blocks.
- Yellow stats band with 4 circular icon counters.
- Grey parallax portfolio grid (4 projects, hover overlay with links).
- 3-column services with icon + title + description.
- Accordion FAQ section (Bootstrap-style collapsible panels).
- Yellow testimonial/quote section with client meta.
- Partner logos slider.
- 3-column blog cards with images.
- Footer: dark navy with logo, quick links, social icons, newsletter subscribe.
- Bottom footer with copyright and Component Dock link.

## Requirements

### Requirement: Header navigation

The page SHALL display a top info bar with contact details and a main navbar with logo, navigation links, and search icon.

#### Scenario: Top navbar shows contact info

- **WHEN** the page loads
- **THEN** I see an address, phone number, and email in the top bar
- **AND** the top bar has a dark navy background

#### Scenario: Main navbar displays logo and navigation links

- **WHEN** the page loads
- **THEN** I see the BuildWell logo on the left
- **AND** I see nav links: Home, About, Services, Portfolio, Blog, Contact
- **AND** a search icon is present in the navbar

### Requirement: Hero section

The page SHALL display a hero section with headline, description, and two CTA buttons.

#### Scenario: Hero displays headline and CTAs

- **WHEN** the page loads
- **THEN** I see a large headline "We Build Your Dream"
- **AND** I see two buttons: a dark "Contact Us" button and a yellow "Learn more" button

#### Scenario: Hero has background image with overlay

- **WHEN** the page loads
- **THEN** the hero has a dark background image with semi-transparent overlay

### Requirement: About section

The page SHALL display three feature cards and an About Us text block.

#### Scenario: About section shows three feature cards

- **WHEN** I scroll to the About section
- **THEN** I see three columns: Certified Experience, Great Teamwork, Modern Technology
- **AND** each card has an icon, title, and description

### Requirement: Stats section

The page SHALL display a yellow stats band with four counters.

#### Scenario: Yellow stats band shows four counters

- **WHEN** I scroll to the Numbers section
- **THEN** I see a yellow background band
- **AND** four stat counters are displayed (Years, Projects, Clients, Awards)
- **AND** each counter has a circular yellow icon above it

### Requirement: Portfolio section

The page SHALL display a featured works grid with hover overlays.

#### Scenario: Featured Works grid

- **WHEN** I scroll to the Portfolio section
- **THEN** I see the heading "Featured Works"
- **AND** four project cards are displayed in a grid
- **AND** hovering a card shows an overlay with view and link icons

### Requirement: Services section

The page SHALL display six service cards with icons and descriptions.

#### Scenario: Six service cards

- **WHEN** I scroll to the Services section
- **THEN** I see the heading "Our Services"
- **AND** six service cards are displayed: Construction, Renovation, Architecture, Painting, Decorating, Consulting
- **AND** each card has an icon, title, and short description

### Requirement: FAQ section

The page SHALL display an interactive accordion FAQ with three items.

#### Scenario: Accordion FAQ with three items

- **WHEN** I scroll to the Why Choose Us section
- **THEN** I see three collapsible accordion panels
- **AND** clicking a panel header expands it to show content
- **AND** clicking another panel collapses the previously open one

### Requirement: Testimonial section

The page SHALL display client testimonials.

#### Scenario: Testimonial section

- **WHEN** I scroll to the Testimonial section
- **THEN** I see client quotes with quotation mark styling
- **AND** client name and role are shown below each quote

### Requirement: Partners section

The page SHALL display partner logos.

#### Scenario: Partner logos row

- **WHEN** I scroll to the Partners section
- **THEN** I see a row of partner/client logos

### Requirement: Blog section

The page SHALL display latest news blog cards.

#### Scenario: Latest News with three blog cards

- **WHEN** I scroll to the Blog section
- **THEN** I see the heading "Latest News"
- **AND** three blog cards are displayed with image, title, and excerpt

### Requirement: Newsletter section

The page SHALL display a newsletter subscription form.

#### Scenario: Newsletter subscribe bar

- **WHEN** I scroll to the Newsletter section
- **THEN** I see a yellow background section
- **AND** I see a newsletter subscription form with email input and Subscribe button

### Requirement: Footer

The page SHALL display a dark footer with widgets and Component Dock link.

#### Scenario: Dark footer with widgets

- **WHEN** I scroll to the footer
- **THEN** I see a dark navy background
- **AND** it contains the BuildWell logo, Quick Links, and Keep in Touch sections
- **AND** a newsletter subscribe form is present
- **AND** social media icons are displayed

#### Scenario: Bottom footer copyright

- **WHEN** I scroll to the very bottom
- **THEN** I see a copyright notice
- **AND** a "Component Dock" link is present

## Verification checklist

- [ ] All 12 sections rendered in correct order: Header → Hero → About → Stats → Portfolio → Services → FAQ → Testimonial → Partners → Blog → Newsletter → Footer
- [ ] Design tokens match: `#001232` dark navy, `#FFD626` yellow, Poppins font
- [ ] Circular yellow icon badges on stat counters (border-radius 50%)
- [ ] Accordion FAQ is interactive (expand/collapse)
- [ ] Newsletter form in Newsletter section
- [ ] Footer links to Component Dock
- [ ] No references to ColorLib in any app source files
- [ ] Placeholder images via `picsum.photos/seed/buildwell-<n>/`
- [ ] Tests at 100% coverage (lines, functions, branches, statements)
- [ ] `npm run verify:app buildwell` passes
