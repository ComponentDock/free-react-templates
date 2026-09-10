# Template: Rinsero (Car Wash & Detailing)

## Purpose

Recreation of the ColorLib **Carwash** template as a modern React 19 + Vite + Tailwind CSS 4 + TypeScript single-page app.

- **Source slug**: `carwash`
- **Preview URL**: https://preview.colorlib.com/theme/carwash/
- **Source screenshot**: https://colorlib.com/wp/wp-content/uploads/sites/2/carwash-free-template.jpg
- **Stack**: Vite (latest), React 19, Tailwind CSS 4, TypeScript (strict)
- **Deploy target**: `https://rinsero.free.componentdock.com`
- **Package**: `@free-react-templates/rinsero`

## Design tokens (extracted from live preview CSS)

| Token | Value | Usage |
|---|---|---|
| Primary blue | `#007AFF` | Buttons, links, accent elements, scroll-to-top, footer social hover |
| Button gradient | `linear-gradient(to left, #0BC6FF, #0d80f3, #0BC6FF)` | Main CTA `.btn` background |
| Heading font | `"Work Sans", sans-serif` | All h1–h6 |
| Body font | `"Poppins", sans-serif` | Body text, hero headings |
| Heading color | `#010A44` | h1–h6 default |
| Body text color | `#10285d` | Paragraph text |
| Nav link color | `#072366` | Navigation links |
| Link default | `#635c5c` | Anchor default |
| Section accent span | `#70D76A` | Green accent text in section titles |
| Office section BG | `#EEF6FF` | Light blue section background |
| Hero overlay | `linear-gradient(to right, rgba(1,10,68,0.8), rgba(0,42,255,0.5))` | Hero image overlay |
| Testimonial gradient | `linear-gradient(to bottom, #1592e6, #007aff, #10cafc)` | Testimonial area background |
| Button border-radius | `30px` | Pill-shaped buttons |
| Pricing card border | `#E7E6EB` | Card borders |
| Pricing price color | `#4C1E51` | Price heading color |
| Scroll-to-top | `#007AFF`, 50×50px circle | Back-to-top button |
| Menu dropdown gradient | `linear-gradient(to left, #0BC6FF, #0d80f3, #0BC6FF)` | Submenu background |

## Section structure (from live DOM analysis)

1. **Header/Navbar** — Sticky header with logo left, nav center (Home, About, Services, Blog, Contact), phone CTA button right (blue gradient pill)
2. **Hero slider** — Full-width hero with background image + blue gradient overlay. Large "Car Wash" heading (Poppins 124px/800), animated "& Detailing" subtitle (outline + solid text), description paragraph, "Our Services" CTA button
3. **Office environments / Equipment** — Light blue `#EEF6FF` background section. Right-offset white card with "We have the latest equipment" heading, description, "About Us" button. Left side has equipment image
4. **Pricing cards** — 3-column grid: Car Wash ($50), Detailing ($100), Full Service ($150). Each card has icon, title, price, feature list, "Get Started" outlined button
5. **Testimonials** — Blue gradient background. Carousel with quote text, avatar, name, role. Decorative right-side image
6. **Services / Why Us** — 4-column grid with icon cards: "Car wash 100% without detergents", "Efficient surface drying machines", "We have an application", "Safe lacquer protection"
7. **Video section** — Dark background image with centered video play icon + "Your car will look as your new one" heading
8. **Map / Location** — Two-column map display
9. **Footer** — Dark background image. 4 columns: logo + contact info, Opening hours, Navigation links, Social icons (Twitter, Facebook, Pinterest). Bottom bar with Component Dock attribution

## Gherkin requirements

### Feature: Header / Navigation

```gherkin
Scenario: Sticky header displays logo, nav, and phone CTA
  Given the user loads the page
  Then the header shows a logo on the left
  And navigation links "Home", "About", "Services", "Blog", "Contact" are visible
  And a phone number button with gradient background is shown on the right

Scenario: Header becomes sticky on scroll
  Given the user scrolls down past the hero
  Then the header sticks to the top with a white background and shadow
```

### Feature: Hero Section

```gherkin
Scenario: Hero displays with overlay and CTA
  Given the user loads the page
  Then a full-width hero image is visible with a blue gradient overlay
  And a large heading "Car Wash" is displayed
  And an animated "& Detailing" subtitle appears
  And a description paragraph is shown below
  And an "Our Services" pill button with gradient is visible

Scenario: Hero text is white and readable over overlay
  Given the hero section is rendered
  Then all text in the hero is white (#FFFFFF)
```

### Feature: Equipment Section

```gherkin
Scenario: Equipment section shows heading and description
  Given the user scrolls to the equipment section
  Then a light blue (#EEF6FF) background is visible
  And an image appears on the left
  And a white card on the right shows "We have the latest equipment" heading
  And an "About Us" pill button is displayed
```

### Feature: Pricing Cards

```gherkin
Scenario: Three pricing cards are displayed
  Given the user scrolls to the pricing section
  Then 3 cards are visible in a row
  And each card shows an icon, title, "Starting at" text, price, feature list, and "Get Started" button

Scenario: Pricing card buttons have outlined style
  Given the pricing cards are rendered
  Then "Get Started" buttons have a blue border and blue text on white background
  And on hover they show a blue gradient fill with white text
```

### Feature: Testimonials

```gherkin
Scenario: Testimonial carousel shows quotes
  Given the user scrolls to the testimonial section
  Then a blue gradient background is visible
  And a quote with quotation marks icon is displayed
  And a testimonial author avatar, name, and role are shown

Scenario: Testimonial area has decorative image
  Given the testimonial section is rendered
  Then a decorative image appears on the right side
```

### Feature: Services Grid

```gherkin
Scenario: Four service cards are displayed
  Given the user scrolls to the services section
  Then 4 service cards are shown in a grid
  And each card has an icon, heading, and description paragraph
  And the section heading reads "Why take our services?"
```

### Feature: Video Section

```gherkin
Scenario: Video section has play button and heading
  Given the user scrolls to the video section
  Then a dark background image is shown
  And a circular green play button icon is centered
  And "Your car will look as your new one" heading is displayed in white
```

### Feature: Footer

```gherkin
Scenario: Footer shows contact info, hours, nav, and social links
  Given the user scrolls to the footer
  Then a dark background image is shown
  And logo, phone number, and email are displayed
  And opening hours (Mon-Fri, Sat, Sun) are listed
  And navigation links match the header
  And social icons (Twitter, Facebook, Pinterest) are shown
  And "Made with ❤ by Component Dock" attribution is present
```

### Feature: Back to Top

```gherkin
Scenario: Scroll-to-top button appears after scrolling
  Given the user scrolls down the page
  Then a circular blue (#007AFF) back-to-top button appears at bottom-right
  And clicking it scrolls to the top of the page
```

## Verification checklist

- [ ] Header: sticky behavior, logo, nav links, phone CTA
- [ ] Hero: background image, gradient overlay, heading, animated subtitle, CTA button
- [ ] Equipment: light blue bg, image + white card layout, heading, button
- [ ] Pricing: 3 cards, icons, prices, feature lists, outlined buttons with hover
- [ ] Testimonials: blue gradient bg, quote carousel, author info, decorative image
- [ ] Services: 4-column grid, icons, headings, descriptions
- [ ] Video: dark bg, play button, heading
- [ ] Footer: dark bg, 4 columns, contact, hours, nav, social, Component Dock link
- [ ] Back-to-top: appears on scroll, circular blue button
- [ ] All colors match extracted tokens
- [ ] Fonts: Poppins (body/hero), Work Sans (headings)
- [ ] Buttons: pill-shaped (30px radius), gradient primary, outlined secondary
- [ ] No ColorLib references in app code
- [ ] Footer links to componentdock.com
- [ ] Tests pass with 100% coverage
