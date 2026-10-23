# Template: TinyBrights (Education / Kindergarten)

## Purpose

A children's education & kindergarten website template. Recreation of ColorLib "Kiddos".

- **Source:** https://colorlib.com/wp/template/kiddos/
- **Preview:** https://preview.colorlib.com/theme/kiddos/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/kiddos-free-template.jpg
- **Stack:** React 19 + Vite + Tailwind CSS 4 + TypeScript
- **App name:** `tinybrights` (apps/tinybrights)

## Design Tokens (extracted from preview CSS)

### Colors

| Token          | Hex        | Usage                                  |
| -------------- | ---------- | -------------------------------------- |
| brand-blue     | #1eaaf1    | primary accent, links, buttons, navbar active |
| brand-orange   | #fda638    | secondary accent, CTA buttons, headings |
| brand-green    | #8cc152    | tertiary — services column bg          |
| brand-red      | #f1453d    | quarternary — services column bg, overlay tint |
| brand-purple   | #5d50c6    | fifth — services column bg, subscribe submit btn |
| body-bg        | #ffffff    | page background                       |
| light-bg       | #fafafa    | alternate section background           |
| footer-bg      | #232323    | footer dark background                 |
| body-text      | rgba(0,0,0,0.5) | default paragraph text             |
| heading-text   | rgba(0,0,0,0.8) | headings, h1-h6                    |
| white-70       | rgba(255,255,255,0.7) | text on dark bg               |
| dark-bg        | #212529    | dark surface                           |

### Typography

- **Body font:** "Work Sans" (weights 300–900, loaded via Google Fonts)
- **Display / hero font:** "Fredericka the Great" (weight 400, used for decorative headings)
- **Base size:** 16px, line-height 1.8, weight 400
- **Headings:** weight 400–600, line-height 1.5, color rgba(0,0,0,0.8)

### Buttons

- **Border-radius:** 40px (pill shape)
- **Primary:** bg #1eaaf1, border #1eaaf1, text #fff; hover: transparent bg, blue border
- **Secondary (CTA):** bg #fda638, border #fda638, text #fff
- **White outline:** bg transparent, border rgba(255,255,255,0.8), text #fff

### Section Backgrounds

- Services bar: 4 columns each with solid color bg (primary/tertiary/fifth/quarternary)
- Intro section: parallax background image (#f1453d red overlay at 40% opacity)
- Counter/stats: parallax background image
- Testimonials: #fafafa (light) background
- Consult/appointment: parallax background image, dark overlay
- Footer: #232323 dark background

## Requirements

### Feature: Navbar

#### Scenario: Top info bar displays contact details

- **GIVEN** the page loads
- **THEN** a top bar shows address, email, and phone with colored circular icons

#### Scenario: Navigation links

- **GIVEN** the page loads
- **WHEN** I view the navbar
- **THEN** I see links for Home, About, Teacher, Courses, Pricing, Blog, Contact

#### Scenario: Navbar scroll behavior

- **GIVEN** the page loads
- **WHEN** I scroll past the hero
- **THEN** the navbar becomes fixed with a white background and shadow
- **AND** the active link is highlighted in brand-blue

### Feature: Hero Slider

#### Scenario: Hero slider displays slides

- **GIVEN** the page loads
- **THEN** a full-width slider shows with background images
- **AND** each slide has a large heading and a "Read More" CTA button

#### Scenario: Slider navigation

- **GIVEN** the slider is visible
- **WHEN** I view the slider
- **THEN** pagination dots appear at the bottom
- **AND** the active dot is highlighted in brand-blue

### Feature: Services Bar

#### Scenario: Four service columns

- **GIVEN** the page loads
- **THEN** four equal-width columns display below the hero
- **AND** each column has a circular icon, title, and description
- **AND** the columns use backgrounds: primary, tertiary, fifth, quarternary
- **AND** the text color is white with 70% opacity for descriptions

#### Scenario: Icon circles

- **GIVEN** the services bar is visible
- **THEN** each icon sits in a white circle centered above the text

### Feature: Welcome / About Section

#### Scenario: Two-column about layout

- **GIVEN** the page loads
- **THEN** a two-column section displays
- **AND** the left column (5/12) has "Welcome to Kiddos Learning School" heading and paragraphs
- **AND** the right column (7/12) has "What We Offer" heading with a 2x2 grid of features

#### Scenario: Feature icons

- **GIVEN** the about section is visible
- **THEN** each feature has a circular blue icon and a title with description

### Feature: Intro Banner (Parallax)

#### Scenario: Parallax intro section

- **GIVEN** the page loads
- **THEN** a full-width section with a parallax background image appears
- **AND** it has a dark overlay and centered heading text

### Feature: Staff / Teachers Section

#### Scenario: Teacher cards

- **GIVEN** the page loads
- **THEN** a section displays 4 staff cards in a grid
- **AND** each card has an image, name, position, and social links
- **AND** hovering reveals the social links bar above the card

#### Scenario: Section heading

- **GIVEN** the staff section is visible
- **THEN** the heading section shows "Meet Our Teachers"

### Feature: Courses Section

#### Scenario: Course cards

- **GIVEN** the page loads
- **THEN** a section displays course items in a grid
- **AND** each course has a thumbnail, category tag, title, and short description
- **AND** the category tag uses brand-orange color

### Feature: Counter / Stats Section

#### Scenario: Statistics counters

- **GIVEN** the page loads
- **THEN** a parallax section displays 4 statistic counters
- **AND** each counter has a large number, label, and icon
- **AND** the background uses a parallax image

### Feature: Testimonials

#### Scenario: Testimonial carousel

- **GIVEN** the page loads
- **THEN** a carousel shows testimonial cards
- **AND** each card has a quote, user image, name, and position
- **AND** pagination dots are shown below

### Feature: Consult / Appointment Section

#### Scenario: Appointment form

- **GIVEN** the page loads
- **THEN** a dark parallax section displays a consultation form
- **AND** the form has input fields and a submit button
- **AND** the background uses a parallax image with dark overlay

### Feature: Footer

#### Scenario: Footer layout

- **GIVEN** the page loads
- **THEN** a dark footer (#232323) displays
- **AND** it contains logo, about text, newsletter subscribe, and social links
- **AND** the footer links to https://www.componentdock.com/ ("Component Dock")

#### Scenario: Newsletter form

- **GIVEN** the footer is visible
- **THEN** a newsletter input with a purple submit button is shown

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/tinybrights/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/tinybrights/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] All sections render in correct order matching the ColorLib preview
- [ ] Brand colors match: blue #1eaaf1, orange #fda638, green #8cc152, red #f1453d, purple #5d50c6
- [ ] "Work Sans" font is loaded and applied as body font
- [ ] Buttons use pill shape (border-radius: 40px)
- [ ] Services bar shows 4 colored columns with white icon circles
- [ ] Parallax sections use background images with overlays
- [ ] Hero slider functions with pagination dots
- [ ] Testimonials carousel works with navigation
- [ ] Navbar scrolls to fixed with white background
- [ ] Footer links to Component Dock
- [ ] No ColorLib references in any app code
- [ ] 100% test coverage (Vitest + Testing Library)
- [ ] Typecheck and lint pass
- [ ] Build succeeds
- [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
