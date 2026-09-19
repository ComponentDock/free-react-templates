# Template: Propwell (Real Estate)

## Purpose

Recreation of the ColorLib **Royalestate** template.
- Source: https://colorlib.com/wp/template/royalestate/
- Preview: https://preview.colorlib.com/theme/royalestate/
- Stack: React 19 · Vite · Tailwind CSS 4 · TypeScript
- Name mapping: `propwell` (new) ← `royalestate` (ColorLib source)

## Design Tokens

Extracted from `https://preview.colorlib.com/theme/royalestate/css/style.css` and the preview DOM.

### Colors

| Token | Value | Usage |
|-------|-------|-------|
| Brand primary | `#26baee` | Navbar links, primary buttons, accents |
| Accent teal | `#78d5ef` | Button backgrounds, hover states, lighter accents |
| Accent dark teal | `#56caeb` | Button hover |
| Accent bright teal | `#4ac7ea` | Alternate teal shade |
| CTA orange | `#f05d23` | Orange accent, call-to-action highlights |
| Orange hover | `#ff8f56` | Lighter orange hover |
| Dark bg | `#252a2b` | Footer background, dark sections |
| Dark alt | `#2e3536` | Footer lighter shade |
| Light gray bg | `#f8f9fa` | Alternating section backgrounds |
| White | `#fff` | Card backgrounds, primary section bg |
| Border gray | `#dee2e6` | Borders, dividers |
| Text dark | `#000` / `#212529` | Headings, body text |
| Text muted | `#6c757d` | Secondary text |
| Gold/yellow | `#ffc107` | Star ratings |

### Typography

- Primary font: **"Work Sans"** (headings, body)
- Secondary font: **"Open Sans"** (some body text)
- System fallback: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`

### Buttons & Interactive

- Primary button: teal background (`#78d5ef`), white text, padded (`p-3 px-4`)
- Button border-radius: Bootstrap default (0.25rem)
- Search form inputs: full-width with icon overlays
- Navbar: dark background (`bg-dark`), transparent-to-dark transition on scroll

### Section Backgrounds

- Hero slider: full-bleed images with dark overlay
- Search form: white background
- Properties grid: white background
- About/features: light gray (`bg-light`)
- Counter/stats: background image with overlay
- Testimonials: light gray (`bg-light`)
- Agents: white background
- Parallax CTA: background image with overlay
- Footer: dark (`#252a2b`)

## Gherkin Requirements

### Scenario: Hero section with image carousel
- Given the user visits the page
- Then a full-width hero slider is displayed with background images
- And each slide has an overlay and text content (headline + description)
- And the carousel auto-plays and supports navigation

### Scenario: Property search form
- Given the user is on the page
- Then a search bar is visible below the hero
- And the search bar contains inputs for: Location, Property Type, Price Range, and a search button
- And the search form is centered and prominent

### Scenario: Properties listing grid
- Given the user scrolls past the search
- Then a grid of property cards is displayed
- And each card shows: image, title, location, price, and property type badge
- And cards are laid out in a responsive grid (3 columns desktop)

### Scenario: About / Features section
- Given the user scrolls to the features section
- Then a section with a light gray background is shown
- And it contains feature highlights (icon + title + description)
- And the layout uses a grid or column arrangement

### Scenario: Counter / Statistics section
- Given the user scrolls to the stats section
- Then a section with a background image and overlay is displayed
- And it shows numerical counters (e.g., properties, clients, countries)
- And the numbers animate on scroll

### Scenario: Testimonials section
- Given the user scrolls to the testimonials
- Then a section with a light gray background is shown
- And it contains testimonial cards with: quote text, author name, avatar
- And testimonials are displayed in a carousel or grid

### Scenario: Agents / Team section
- Given the user scrolls to the team section
- Then agent/team member cards are displayed
- And each card shows: photo, name, role, and social links
- And cards are in a responsive grid

### Scenario: Parallax call-to-action section
- Given the user scrolls to the CTA
- Then a parallax background section is displayed with overlay
- And it contains a headline and CTA button

### Scenario: Footer
- Given the user reaches the bottom
- Then a dark footer is displayed
- And it contains: brand info, quick links, contact info, newsletter signup
- And the footer links to https://www.componentdock.com/ as "Component Dock"
- And it does NOT reference ColorLib

## Verification Checklist

- [ ] Spec exists at `openspec/specs/template-propwell/spec.md`
- [ ] All design tokens match the ColorLib preview CSS
- [ ] Section order matches: Hero → Search → Properties → Features → Stats → Testimonials → Agents → CTA → Footer
- [ ] No ColorLib references in `apps/propwell/`
- [ ] Footer links to `https://www.componentdock.com/`
- [ ] Font family: Work Sans (primary)
- [ ] Brand colors: `#26baee` (primary), `#78d5ef` (accent), `#f05d23` (orange)
- [ ] Dark footer uses `#252a2b`
- [ ] Alternating section backgrounds (white / `#f8f9fa`)
- [ ] `public/CNAME` contains `propwell.free.componentdock.com`
- [ ] `homepage` in `package.json` set to `https://propwell.free.componentdock.com`
