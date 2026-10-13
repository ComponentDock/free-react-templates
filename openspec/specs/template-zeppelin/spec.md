# Template: Zeppelin (Creative / Agency)

## Purpose

Recreation of ColorLib "Zeta" — a creative/agency one-page template with
parallax sections, geometric shape overlays, progress bars, testimonials
slider, and a services grid.

- **Source**: [ColorLib Zeta](https://colorlib.com/wp/template/zeta/)
- **Preview**: https://preview.colorlib.com/theme/zeta/
- **Screenshot**: https://colorlib.com/wp/wp-content/uploads/sites/2/zeta-free-template.jpg
- **Stack**: Vite · React 19 · Tailwind CSS 4 · TypeScript
- **New name**: `zeppelin` (apps/zeppelin, `@free-react-templates/zeppelin`)

## Design tokens (extracted from preview CSS)

| Token            | Value                            | Source                     |
| ---------------- | -------------------------------- | -------------------------- |
| Brand primary    | `#ff4200` (red-orange)           | `.button` background       |
| Brand secondary  | `#db5246` (muted red)            | hover/accent               |
| Brand tertiary   | `#ff6347` (tomato)               | section accents            |
| Light salmon     | `#fde0db`                        | subtle accent              |
| Body dark        | `#0b1033`                        | headings                   |
| Text primary     | `#1c1c1c`                        | body text on light         |
| Text secondary   | `#6e6e6e`                        | body text, muted           |
| Text tertiary    | `#777777`                        | captions, footnotes        |
| White            | `#FFFFFF`                        | section backgrounds        |
| Dark bg          | `#111111`                        | footer                     |
| Darker bg        | `#171717`                        | secondary dark             |
| Font primary     | `'Montserrat', sans-serif`       | headings, buttons, nav     |
| Font body        | `'Open Sans', sans-serif`        | paragraphs, body text      |
| Button radius    | `0` (rectangular, no rounding)   | `.button`                  |
| Button height    | `66px` / width `187px`           | fixed-size CTA buttons     |
| Button hover     | sweep animation (left→right)     | `::after` pseudo-element   |
| Section title    | uppercase, `letter-spacing: 0.2em`, font-weight 600 | `.section_title h2` |
| Section accent   | short colored line below title   | `h2::before` pseudo        |
| Decorative       | geometric shape PNG overlays on parallax sections | `.main_slider_shapes`, `.about_shapes`, etc. |

## Sections (in order, from preview DOM)

1. **Header** — Fixed/absolute top bar, flex row: logo left ("z zeta."), nav right (home, services, elements, blog, contact), hamburger menu for mobile (fullscreen overlay with nav + social links)
2. **Hero Slider** — OwlCarousel 3 slides, each: full-width background image, geometric shapes overlay, headline "Do you need a modern website?" (h1 with `<span>modern</span>` accent), lorem paragraph, "discover" CTA button (orange-red, arrow icon). Numbered dots (01. 02. 03.) bottom-left, chevron arrows for navigation.
3. **Social Sidebar** — Vertical fixed sidebar on right: pinterest, facebook, twitter, dribbble, behance, linkedin icons
4. **Features** — 3-column grid (col-lg-4 each). Icon container (SVG icon) + heading + paragraph. Items: "modern design", "easy to use", "well documented". White background.
5. **About** — Parallax background image + geometric shapes overlay. Centered section title "about our project" (with decorative "z"). Two columns: left = paragraph text + signature image; right = progress bars (management 85%, design 100%, projects 75%, inspiration 95%) with animated fill.
6. **Testimonials** — White background. Centered section title "testimonials". OwlCarousel slider: user avatar, name, title, quote mark, paragraph. Left/right chevron navigation.
7. **Services** — Parallax background image + geometric shapes overlay. 3×2 grid of service items (icon + heading + paragraph): "modern design", "easy to use", "well documented", "smart structure", "elements", "bold colors". Centered "discover" button at bottom.
8. **Clients** — White background. Centered section title "our clients". Two-column intro text. OwlCarousel of client logos (5 logo images).
9. **Contact** — Parallax background + shape overlay. Centered section title "let's work together". Intro paragraph + centered "contact" button (orange-red).
10. **Footer** — Dark background (#111111). Copyright line (left), social icons (right).

## Requirements

### Feature: Header Navigation

#### Scenario: Header displays logo and navigation

- **GIVEN** the user loads the page
- **THEN** the header shows the logo text "zeppelin."
- **AND** the navigation links are visible: "home", "services", "work", "blog", "contact"

#### Scenario: Mobile hamburger menu opens fullscreen overlay

- **GIVEN** the viewport is narrow (mobile)
- **WHEN** the user taps the hamburger icon
- **THEN** a fullscreen menu overlay opens
- **AND** the overlay shows navigation links and social icons
- **AND** closing the overlay returns to the normal view

### Feature: Hero Slider

#### Scenario: Hero displays heading and CTA

- **GIVEN** the user is on the homepage
- **THEN** the hero section shows a headline "Do you need a modern website?"
- **AND** the word "modern" is visually accented (colored)
- **AND** a "discover" button with arrow icon is visible

#### Scenario: Hero slider shows numbered dots

- **GIVEN** the hero slider is visible
- **THEN** numbered dots "01.", "02.", "03." are displayed at the bottom left
- **AND** the active slide's dot is highlighted

#### Scenario: Hero slider supports arrow navigation

- **GIVEN** the hero slider is visible
- **WHEN** the user clicks the right arrow
- **THEN** the next slide is shown
- **WHEN** the user clicks the left arrow
- **THEN** the previous slide is shown

### Feature: Social Sidebar

#### Scenario: Social sidebar displays on desktop

- **GIVEN** the user is on a desktop viewport
- **THEN** a vertical sidebar with social icons is visible on the right
- **AND** the icons link to pinterest, facebook, twitter, dribbble, behance, linkedin

### Feature: Features Section

#### Scenario: Features displays three items

- **GIVEN** the user scrolls to the features section
- **THEN** three feature cards are displayed in a row
- **AND** each card has an icon, a heading, and a paragraph
- **AND** the headings are "modern design", "easy to use", "well documented"

### Feature: About Section

#### Scenario: About section displays with parallax background

- **GIVEN** the user scrolls to the about section
- **THEN** a parallax background image is visible
- **AND** the section title reads "about our project"
- **AND** a paragraph of text is shown on the left
- **AND** a signature image appears below the text

#### Scenario: About section shows animated progress bars

- **GIVEN** the user scrolls to the about section
- **THEN** four progress bars are displayed: "management", "design", "projects", "inspiration"
- **AND** the bars animate to fill to their respective percentages (85%, 100%, 75%, 95%)

### Feature: Testimonials

#### Scenario: Testimonials slider shows review cards

- **GIVEN** the user scrolls to the testimonials section
- **THEN** a slider with testimonial cards is displayed
- **AND** each card shows a user avatar, name, title, quote, and paragraph
- **AND** left/right chevron navigation arrows are available

#### Scenario: Testimonials slider is navigable

- **GIVEN** the testimonials slider is visible
- **WHEN** the user clicks the right arrow
- **THEN** the next testimonial card slides in

### Feature: Services Section

#### Scenario: Services section displays 6 items in a grid

- **GIVEN** the user scrolls to the services section
- **THEN** six service items are shown in a 3-column grid
- **AND** each item has an icon, heading, and paragraph
- **AND** the headings are: "modern design", "easy to use", "well documented", "smart structure", "elements", "bold colors"

#### Scenario: Services section has parallax background

- **GIVEN** the user scrolls to the services section
- **THEN** a parallax background image is visible behind the service items
- **AND** a "discover" button is centered at the bottom

### Feature: Clients Section

#### Scenario: Clients section shows logos carousel

- **GIVEN** the user scrolls to the clients section
- **THEN** a centered section title "our clients" is displayed
- **AND** two paragraphs of introductory text are shown
- **AND** a carousel of client logos is visible below

### Feature: Contact Section

#### Scenario: Contact section displays CTA

- **GIVEN** the user scrolls to the contact section
- **THEN** a parallax background image is visible
- **AND** the section title reads "let's work together"
- **AND** a paragraph of text is shown
- **AND** a "contact" button (orange-red) is centered below

### Feature: Footer

#### Scenario: Footer shows copyright and social links

- **GIVEN** the user scrolls to the footer
- **THEN** a dark background footer is displayed
- **AND** a copyright line is shown on the left
- **AND** social media icons are shown on the right
- **AND** a "Component Dock" attribution link is present

## Verification checklist

- [ ] All 10 sections rendered in correct order
- [ ] Header with logo and nav links
- [ ] Hero slider with 3 slides, dots, and arrow navigation
- [ ] Social sidebar (desktop only)
- [ ] Features: 3-column grid with icons and text
- [ ] About: parallax bg, text + signature, progress bars with animation
- [ ] Testimonials: slider with avatar, name, quote
- [ ] Services: 3×2 grid on parallax bg, "discover" button
- [   ] Clients: intro text + logo carousel
- [ ] Contact: parallax bg, title, text, CTA button
- [ ] Footer: copyright + social + Component Dock link
- [ ] Brand color `#ff4200` used for buttons and accents
- [ ] Font: Montserrat for headings, Open Sans for body
- [ ] Button style: rectangular (no border-radius), orange-red bg, white text, sweep hover
- [ ] Section titles: uppercase, wide letter-spacing, decorative accent line
- [ ] Parallax backgrounds on about, services, contact sections
- [ ] Mobile responsive (hamburger menu, stacked layouts)
- [ ] No ColorLib references in app code
