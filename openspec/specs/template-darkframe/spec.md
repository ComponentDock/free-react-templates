# Template: DarkFrame (Photography Portfolio)

## Purpose

Recreation of ColorLib "Elit Photo" — a dark-themed photographer portfolio website with left sidebar navigation, full-bleed hero, masonry photo grid with hover overlays, testimonials, biography, blog entries, and contact form.

- **Source slug:** `elit`
- **Preview URL:** https://preview.colorlib.com/theme/elit/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/elit-free-template.jpg
- **Stack:** React 19, Vite, Tailwind CSS 4, TypeScript

## Design Tokens

Extracted from the live preview's `css/style.css`:

| Token | Value | Notes |
|-------|-------|-------|
| `--brand` | `#df0e62` | Hot pink / magenta — nav active, hover accents, slider dots, check icons |
| `--bg-dark` | `#000` | Body background, sidebar background |
| `--bg-section` | `#1a1a1a` | Darkened section backgrounds (`.darken-bg`) |
| `--text-primary` | `#fff` | Headings, nav links, button text |
| `--text-body` | `gray` | Body paragraph text |
| `--text-muted` | `#737373` | Blog meta, secondary text |
| `--overlay-dark` | `rgba(0,0,0,0.7)` | Hero overlay, background image overlays |
| `--overlay-hover` | `rgba(0,0,0,0.6)` | Photo hover overlay |
| Font — headings | `Oswald`, arial, sans-serif | All h1-h3, section headings |
| Font — body | system default (no explicit font-family on body) | |
| Button radius | `30px` (pill) | `.btn` border-radius |
| Button padding | `15px 30px` | `.btn-md` |
| Button text | uppercase, bold, letter-spacing 0.1em | |
| Section padding | `7em 0` | `.site-section` on desktop |
| Photo grid | 3-column (col-lg-4), equal height | `.photos` section, hover reveals overlay + text |
| Photo height | `300px` (200px mobile) | `object-fit: cover` |
| Sidebar width | `250px` fixed left | Collapses to top bar on mobile (70px) |
| Nav active color | `#df0e62` | Matches brand |
| Slider dots active | `#df0e62` | |
| Section accent | `#df0e62` | 4px top-left bar on `.darken-bg` via `::before` |

## Sections (in order)

1. **Sidebar (fixed left, 250px)** — Site logo "ELIT PHOTO" (→ "DARKFRAME"), nav links (Home, Photos, Biography, Blog, Contact), social icons (Facebook, Twitter, Instagram). Collapses to horizontal top bar on mobile.
2. **Hero** — Full-viewport height, background image with dark overlay, centered "WELCOME" heading (Oswald, 4rem desktop / 2.5rem mobile), subtext paragraph, pink "CONTACT ME" pill button.
3. **Photo Grid** — 3-column masonry of 12 photos, each with dark hover overlay revealing heading + meta text. Images are `object-fit: cover`, 300px height.
4. **Testimonials** — Owl Carousel slider with testimonial quotes (lorem ipsum), person name + role, dot navigation (active dot = brand color).
5. **Biography** — Darkened section (`#1a1a1a`) with 4px brand-color top-left accent bar. Photo left, heading "Hi I'm Jed" → "Hi I'm [Name]", subtitle "Photographer for 10 years", paragraph text, check-list of skills (brand-colored check icons).
6. **Blog** — Grid of 4 blog cards, each with image (left on desktop), heading "My New Photography Has Been Featured in Forbes", meta date, paragraph excerpt.
7. **Contact** — Dark section with "Contact" heading, form fields (name, email, subject, message) with bottom-border-only style, "Send Message" button, heading underline in brand color.
8. **Footer** — Copyright line, "Made with Component Dock" link.

## Gherkin Requirements

### Sidebar
```gherkin
Feature: Sidebar Navigation

  Scenario: Desktop sidebar displays logo and nav links
    Given the viewport is wider than 992px
    Then a fixed left sidebar of 250px width is visible
    And the site logo text is "DARKFRAME"
    And nav links "Home", "Photos", "Biography", "Blog", "Contact" are listed vertically
    And social media icons (Facebook, Twitter, Instagram) are below the nav

  Scenario: Active nav link is highlighted in brand color
    Given the user is viewing the Home section
    Then the "Home" nav link text color is #df0e62

  Scenario: Mobile collapses sidebar to top bar
    Given the viewport is narrower than 992px
    Then the sidebar becomes a 70px-tall top bar
    And nav links are displayed horizontally
```

### Hero
```gherkin
Feature: Hero Section

  Scenario: Full-viewport hero with background image
    Given the user is on the home page
    Then a full-viewport-height hero section is displayed
    And a dark overlay covers the background image
    And the heading "WELCOME" is centered in Oswald font at 4rem
    And a paragraph of introductory text is below the heading
    And a pill-shaped "CONTACT ME" button in brand color is centered below the text

  Scenario: Hero is responsive
    Given the viewport is narrower than 768px
    Then the hero heading font size reduces to 2.5rem
```

### Photo Grid
```gherkin
Feature: Photo Grid

  Scenario: 3-column photo grid
    Given the user scrolls to the photos section
    Then 12 photos are displayed in a 3-column grid
    And each photo has object-fit cover at 300px height

  Scenario: Photo hover overlay
    Given the user hovers over a photo
    Then a dark overlay fades in over the photo
    And a heading and meta text appear centered on the photo
```

### Testimonials
```gherkin
Feature: Testimonials Slider

  Scenario: Testimonial carousel displays quotes
    Given the user scrolls to the testimonials section
    Then at least 2 testimonial slides are present
    And each slide shows a quote, person name, and role

  Scenario: Active dot is brand-colored
    Given the testimonials slider is visible
    Then the active dot indicator is #df0e62
```

### Biography
```gherkin
Feature: Biography Section

  Scenario: Biography with accent bar
    Given the user scrolls to the biography section
    Then the section background is #1a1a1a
    And a 4px brand-color accent bar appears at the top-left

  Scenario: Biography content layout
    Given the biography section is visible
    Then a photo of the photographer is displayed
    And the heading reads "Hi I'm [Name]"
    And a subtitle reads "Photographer for 10 years"
    And a skills check-list is shown with brand-colored check icons
```

### Blog
```gherkin
Feature: Blog Section

  Scenario: Blog card grid
    Given the user scrolls to the blog section
    Then 4 blog cards are displayed
    And each card has an image, heading, date meta, and excerpt paragraph
```

### Contact
```gherkin
Feature: Contact Form

  Scenario: Contact form with styled inputs
    Given the user scrolls to the contact section
    Then a "Contact" heading is displayed with a brand-color underline
    And form fields for name, email, subject, and message are shown
    And inputs have bottom-border-only styling (no box border)
    And a "Send Message" button is below the form
```

### Footer
```gherkin
Feature: Footer

  Scenario: Footer attribution
    Given the user scrolls to the bottom
    Then a copyright line is displayed
    And a "Made with Component Dock" link points to https://www.componentdock.com/
```

## Verification Checklist

- [ ] Sidebar is fixed-left 250px on desktop, collapses to top bar on mobile
- [ ] Hero is full-viewport with dark overlay, Oswald heading, pill CTA button
- [ ] Photo grid is 3-column with hover overlays revealing text
- [ ] Testimonials use carousel with brand-colored active dot
- [ ] Biography section has #1a1a1a background with 4px brand-color accent bar
- [ ] Blog section shows 4 cards with image + text
- [ ] Contact form has bottom-border-only inputs, brand-color heading underline
- [ ] Footer links to Component Dock
- [ ] Brand color #df0e62 is used consistently for accents, active states, hovers
- [ ] All text is white on dark backgrounds
- [ ] Oswald font is loaded for headings
- [ ] No ColorLib references in app code
- [ ] Tests achieve 100% coverage
- [ ] `npm run verify:app darkframe` passes
