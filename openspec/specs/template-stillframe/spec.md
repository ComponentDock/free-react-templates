# Template: Stillframe (Photography Portfolio)
<!-- prep-status: shipped-as=focal -->
> **SHIPPED-UNDER** — the ColorLib `bato` design this prep describes already
> ships as `apps/focal` (<https://focal.free.componentdock.com>).
> Do not scaffold `apps/stillframe`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-focal/spec.md`.

## Purpose

Recreation of the ColorLib "Bato" template — a fullscreen photography
portfolio/agency site with a slide-out side navigation and a full-height
hero carousel featuring a 60/40 image-to-text split layout.

- **Source**: https://colorlib.com/wp/template/bato/
- **Preview**: https://preview.colorlib.com/theme/bato/
- **Stack**: Vite + React 19 + Tailwind CSS 4 + TypeScript
- **New name**: `stillframe` (apps/stillframe, @free-react-templates/stillframe)

## Design tokens (extracted from preview)

| Token              | Value                                              |
| ------------------ | -------------------------------------------------- |
| Font (body)        | "Karla", Arial, sans-serif (400, 700)              |
| Font (headings)    | "Playfair Display", Georgia, serif (400, 700)      |
| Accent / link      | #F9CE00 (yellow-gold)                              |
| Body background    | #ffffff                                            |
| Body text          | gray                                               |
| Headings text      | rgba(0, 0, 0, 0.8)                                |
| Nav background     | #ffffff                                            |
| Selection bg       | #b7c2c2                                            |
| Slide number       | 220px, color #f2f2f2, font-weight 700             |
| Hero heading       | 58px, font-weight 700, letter-spacing 2px          |
| Hero tag           | 13px, letter-spacing 7px, uppercase, block         |
| Button (CTA)       | 13px, letter-spacing 7px, uppercase, border 1px solid #000, color #000, no radius, padding 7px |
| Carousel nav       | border-radius 0, bg #fff, hover #F9CE00            |
| Mobile desc        | padding 1em, bg #fff                               |

## Visual design notes (from screenshot + DOM)

- Clean, minimal photography portfolio aesthetic
- White background with large hero images occupying ~60% of viewport width
- Right panel (~40%) shows tag label, heading, description paragraph, and CTA link
- Large ghost slide numbers (01/03, 02/03, 03/03) at bottom-right of text panel
- Slide-out side navigation from right: search input, page links (Home, Work, Blog, About, Contact), and a 2x2 gallery preview grid
- Square-cornered buttons, wide letter-spacing, uppercase text
- No parallax, no dark sections — very clean white + image + accent scheme
- Hero carousel with owl-carousel style prev/next navigation at bottom

## Requirements

### Feature: Navigation

#### Scenario: Side nav toggle

- **WHEN** the user clicks the hamburger icon in the header
- **THEN** a side navigation panel slides in from the right
- **AND** it displays a search input, page links, and a gallery preview
- **WHEN** the user clicks outside the panel or the toggle again
- **THEN** the side navigation panel slides out

#### Scenario: Nav links

- **GIVEN** the side nav is open
- **THEN** it shows links for Home, Work, Blog, About, Contact
- **AND** the active link is highlighted in yellow (#F9CE00)

#### Scenario: Nav gallery preview

- **GIVEN** the side nav is open
- **THEN** a 2x2 grid of gallery thumbnail images is displayed
- **AND** each thumbnail shows a search icon on hover

### Feature: Hero Carousel

#### Scenario: Fullscreen hero slides

- **WHEN** the page loads
- **THEN** a full-viewport-height hero carousel is displayed
- **AND** the first slide shows a large background image on the left (60% width)
- **AND** the right panel (40% width) shows a tag label, heading, description, and CTA button

#### Scenario: Slide content

- **GIVEN** a hero slide is visible
- **THEN** it displays a tag in uppercase (e.g. "Welcome", "Photography", "Discover")
- **AND** a large heading in Playfair Display font
- **AND** a description paragraph
- **AND** a "View Galleries" CTA button with arrow icon

#### Scenario: Slide navigation

- **GIVEN** the hero carousel is displayed
- **THEN** prev/next navigation buttons are shown at the bottom
- **AND** clicking next advances to the next slide
- **AND** clicking prev goes to the previous slide

#### Scenario: Slide numbers

- **GIVEN** a hero slide is visible
- **THEN** a large slide counter (e.g. "01/03") is displayed at the bottom of the text panel
- **AND** the number uses a large font (220px) in light gray (#f2f2f2)

### Feature: Branding

#### Scenario: Brand logo

- **WHEN** the page loads
- **THEN** the brand name "Stillframe" is displayed in the header
- **AND** it uses the Playfair Display font

### Feature: Responsive layout

#### Scenario: Mobile view

- **WHEN** the viewport is below 768px
- **THEN** the hero split layout stacks vertically
- **AND** the hero text panel gets a white background for readability
- **AND** the slide number is hidden
- **AND** the CTA button letter-spacing is reduced

## Verification checklist

- [ ] Fonts load: Karla (body) + Playfair Display (headings) via Google Fonts link
- [ ] Hero carousel renders 3 slides with 60/40 split layout
- [ ] Tag labels are uppercase, small, wide letter-spacing
- [ ] CTA buttons have square corners, 1px black border, uppercase text
- [ ] Side navigation slides in from right with search, links, gallery preview
- [ ] Active nav link is yellow (#F9CE00)
- [ ] Carousel prev/next buttons render with yellow hover state
- [ ] Large slide counter numbers render at bottom of text panel
- [ ] Mobile responsive: stacks vertically, hides slide numbers
- [ ] Footer links to Component Dock (https://www.componentdock.com/)
- [ ] No ColorLib references anywhere in app code
- [ ] CNAME file contains stillframe.free.componentdock.com
- [ ] Placeholder images use picsum.photos with deterministic seeds
- [ ] All TypeScript strict mode passes
- [ ] Tests achieve 100% coverage
