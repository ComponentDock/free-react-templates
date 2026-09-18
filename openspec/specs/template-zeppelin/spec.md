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

## Gherkin requirements

### Feature: Header Navigation

```gherkin
Scenario: Header displays logo and navigation
  Given the user loads the page
  Then the header shows the logo text "zeppelin."
  And the navigation links are visible: "home", "services", "work", "blog", "contact"

Scenario: Mobile hamburger menu opens fullscreen overlay
  Given the viewport is narrow (mobile)
  When the user taps the hamburger icon
  Then a fullscreen menu overlay opens
  And the overlay shows navigation links and social icons
  And closing the overlay returns to the normal view
```

### Feature: Hero Slider

```gherkin
Scenario: Hero displays heading and CTA
  Given the user is on the homepage
  Then the hero section shows a headline "Do you need a modern website?"
  And the word "modern" is visually accented (colored)
  And a "discover" button with arrow icon is visible

Scenario: Hero slider shows numbered dots
  Given the hero slider is visible
  Then numbered dots "01.", "02.", "03." are displayed at the bottom left
  And the active slide's dot is highlighted

Scenario: Hero slider supports arrow navigation
  Given the hero slider is visible
  When the user clicks the right arrow
  Then the next slide is shown
  When the user clicks the left arrow
  Then the previous slide is shown
```

### Feature: Social Sidebar

```gherkin
Scenario: Social sidebar displays on desktop
  Given the user is on a desktop viewport
  Then a vertical sidebar with social icons is visible on the right
  And the icons link to pinterest, facebook, twitter, dribbble, behance, linkedin
```

### Feature: Features Section

```gherkin
Scenario: Features displays three items
  Given the user scrolls to the features section
  Then three feature cards are displayed in a row
  And each card has an icon, a heading, and a paragraph
  And the headings are "modern design", "easy to use", "well documented"
```

### Feature: About Section

```gherkin
Scenario: About section displays with parallax background
  Given the user scrolls to the about section
  Then a parallax background image is visible
  And the section title reads "about our project"
  And a paragraph of text is shown on the left
  And a signature image appears below the text

Scenario: About section shows animated progress bars
  Given the user scrolls to the about section
  Then four progress bars are displayed: "management", "design", "projects", "inspiration"
  And the bars animate to fill to their respective percentages (85%, 100%, 75%, 95%)
```

### Feature: Testimonials

```gherkin
Scenario: Testimonials slider shows review cards
  Given the user scrolls to the testimonials section
  Then a slider with testimonial cards is displayed
  And each card shows a user avatar, name, title, quote, and paragraph
  And left/right chevron navigation arrows are available

Scenario: Testimonials slider is navigable
  Given the testimonials slider is visible
  When the user clicks the right arrow
  Then the next testimonial card slides in
```

### Feature: Services Section

```gherkin
Scenario: Services section displays 6 items in a grid
  Given the user scrolls to the services section
  Then six service items are shown in a 3-column grid
  And each item has an icon, heading, and paragraph
  And the headings are: "modern design", "easy to use", "well documented", "smart structure", "elements", "bold colors"

Scenario: Services section has parallax background
  Given the user scrolls to the services section
  Then a parallax background image is visible behind the service items
  And a "discover" button is centered at the bottom
```

### Feature: Clients Section

```gherkin
Scenario: Clients section shows logos carousel
  Given the user scrolls to the clients section
  Then a centered section title "our clients" is displayed
  And two paragraphs of introductory text are shown
  And a carousel of client logos is visible below
```

### Feature: Contact Section

```gherkin
Scenario: Contact section displays CTA
  Given the user scrolls to the contact section
  Then a parallax background image is visible
  And the section title reads "let's work together"
  And a paragraph of text is shown
  And a "contact" button (orange-red) is centered below
```

### Feature: Footer

```gherkin
Scenario: Footer shows copyright and social links
  Given the user scrolls to the footer
  Then a dark background footer is displayed
  And a copyright line is shown on the left
  And social media icons are shown on the right
  And a "Component Dock" attribution link is present
```

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
