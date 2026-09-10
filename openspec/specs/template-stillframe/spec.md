# Template: Stillframe (Photography Portfolio)

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

## Gherkin requirements

### Feature: Navigation

Scenario: Side nav toggle
  When the user clicks the hamburger icon in the header
  Then a side navigation panel slides in from the right
  And it displays a search input, page links, and a gallery preview
  When the user clicks outside the panel or the toggle again
  Then the side navigation panel slides out

Scenario: Nav links
  Given the side nav is open
  Then it shows links for Home, Work, Blog, About, Contact
  And the active link is highlighted in yellow (#F9CE00)

Scenario: Nav gallery preview
  Given the side nav is open
  Then a 2x2 grid of gallery thumbnail images is displayed
  And each thumbnail shows a search icon on hover

### Feature: Hero Carousel

Scenario: Fullscreen hero slides
  When the page loads
  Then a full-viewport-height hero carousel is displayed
  And the first slide shows a large background image on the left (60% width)
  And the right panel (40% width) shows a tag label, heading, description, and CTA button

Scenario: Slide content
  Given a hero slide is visible
  Then it displays a tag in uppercase (e.g. "Welcome", "Photography", "Discover")
  And a large heading in Playfair Display font
  And a description paragraph
  And a "View Galleries" CTA button with arrow icon

Scenario: Slide navigation
  Given the hero carousel is displayed
  Then prev/next navigation buttons are shown at the bottom
  And clicking next advances to the next slide
  And clicking prev goes to the previous slide

Scenario: Slide numbers
  Given a hero slide is visible
  Then a large slide counter (e.g. "01/03") is displayed at the bottom of the text panel
  And the number uses a large font (220px) in light gray (#f2f2f2)

### Feature: Branding

Scenario: Brand logo
  When the page loads
  Then the brand name "Stillframe" is displayed in the header
  And it uses the Playfair Display font

### Feature: Responsive layout

Scenario: Mobile view
  When the viewport is below 768px
  Then the hero split layout stacks vertically
  And the hero text panel gets a white background for readability
  And the slide number is hidden
  And the CTA button letter-spacing is reduced

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
