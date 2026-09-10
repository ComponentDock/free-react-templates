# Template: WashBox (Car Wash / Automotive Services)

## Purpose

Recreation of [ColorLib Carwash](https://colorlib.com/wp/template/carwash/) for the ComponentDock free React template marketplace.

- **Preview URL:** https://preview.colorlib.com/theme/carwash/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/carwash-free-template.jpg
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript (strict)
- **New app folder:** `apps/washbox`
- **Package name:** `@free-react-templates/washbox`
- **Surge target:** `washbox.free.componentdock.com`

## Design Tokens (extracted from preview CSS)

| Token | Value | Source |
|---|---|---|
| Primary (brand) | `#007AFF` | `.btn` gradient, links, footer headings, scroll-top bg |
| Button gradient | `linear-gradient(to left, #0BC6FF, #0d80f3, #0BC6FF)` | `.btn` |
| Accent green | `#70D76A` | `.section-tittle span` |
| Accent orange | `#ff3500` | Owl carousel hover |
| Heading color | `#010A44` | `h1-h6` |
| Body text | `#10285d` | `p` |
| Nav link | `#072366` | `.main-menu ul li a` |
| Pricing price | `#4C1E51` | `.card-mid h4` |
| Card border | `#E7E6EB` | `.single-card` |
| Card background | `#FFFFFF` | `.single-card` |
| Border-btn | outlined `#007AFF`, border-radius 30px | `.borders-btn` |
| Button border-radius | 30px (pill) | `.btn` |
| Font — body | Poppins (300-800) | `body` |
| Font — headings | Work Sans (300-800) | `h1-h6`, `.btn` |
| Hero headline | 124px weight-800 Poppins, white | `.hero__caption h1` |
| Animated stock text | 120px uppercase, stroke + fill | `.stock-text h2` |

## Section Structure (from live preview DOM)

1. **Navbar** — sticky header, logo left, nav links (Home, About, Services, Blog, Contact), phone CTA button right. White background when sticky.
2. **Hero Slider** — full-width hero with background image (`hero/h1_hero1.png`), dark overlay, large "Car Wash" headline, animated "& Detailing" text with stroke effect, description paragraph, "Our Services" CTA pill button (blue gradient).
3. **Office / Equipment** — offset layout (left image area, right text), section-bg02 background image, heading "We have the latest equipment", paragraph, "About Us" CTA button. Uses `section-bg02` background.
4. **Pricing Cards** — 3-column grid (Car Wash $50, Detailing $100, Wash & Detailing $200), each with icon, title, price, feature list (5 items), "Get Started" outlined button. White cards with subtle border.
5. **Testimonials** — dark background with decorative right-side image, slider of quotes with avatar, founder name + role, quote-sign icon. Dot navigation.
6. **Services / Categories** — "Why take our services?" heading, 4-column icon grid (wash without detergents, efficient drying, application, lacquer protection), each with SVG icon + heading + description.
7. **Video CTA** — dark background image, centered play button (green gradient, circular), heading "Your car will look as your new one", description text.
8. **Maps / Contact** — two images side-by-side (map + contact info graphic).
9. **Footer** — dark background image, 4-column layout: logo + contact info + opening hours + navigation links + social icons. Bottom bar with copyright.
10. **Scroll-to-top** — fixed blue circle button, bottom-right.

## Gherkin Requirements

### Navbar
```gherkin
Feature: WashBox Navbar

  Scenario: Renders all navigation links
    Given the page is loaded
    Then the navbar displays links for "Home", "About", "Services", "Blog", "Contact"

  Scenario: Sticky header on scroll
    Given the page is loaded
    When the user scrolls past the hero
    Then the navbar becomes sticky with a white background and subtle shadow

  Scenario: Phone CTA button visible on desktop
    Given the viewport width is ≥ 1024px
    Then a phone number CTA button is visible in the header
```

### Hero
```gherkin
Feature: WashBox Hero

  Scenario: Displays headline and animated text
    Given the hero section is visible
    Then the headline "Car Wash" is displayed at large size
    And the animated text "& Detailing" is displayed with a stroke effect

  Scenario: CTA button navigates to services
    Given the hero section is visible
    When the user clicks "Our Services"
    Then the page scrolls to the services section

  Scenario: Hero uses full-width background image
    Given the hero section is visible
    Then a full-width background image is displayed with a dark overlay
```

### Office / Equipment
```gherkin
Feature: WashBox Equipment Section

  Scenario: Section renders heading and CTA
    Given the equipment section is visible
    Then the heading "We have the latest equipment" is displayed
    And an "About Us" CTA button is present

  Scenario: Section uses offset layout
    Given the equipment section is visible
    Then the text content is offset to the right
    And a decorative background image is displayed
```

### Pricing Cards
```gherkin
Feature: WashBox Pricing Cards

  Scenario: Three pricing cards displayed
    Given the pricing section is visible
    Then three pricing cards are rendered

  Scenario: Each card shows service name, price, and features
    Given the pricing section is visible
    Then each card displays a service name, price, and 5 feature items

  Scenario: Get Started button has outlined style
    Given the pricing section is visible
    Then each card has a "Get Started" button with outlined blue pill style

  Scenario: Card hover highlights button
    Given the pricing section is visible
    When the user hovers over a card
    Then the "Get Started" button fills with the primary color
```

### Testimonials
```gherkin
Feature: WashBox Testimonials

  Scenario: Testimonial slider renders quotes
    Given the testimonial section is visible
    Then at least one testimonial quote is displayed

  Scenario: Each testimonial shows founder info
    Given the testimonial section is visible
    Then each testimonial displays a founder name and role

  Scenario: Dot navigation for slides
    Given the testimonial section is visible
    Then dot navigation indicators are present
```

### Services / Categories
```gherkin
Feature: WashBox Services

  Scenario: Four service items rendered
    Given the services section is visible
    Then four service items are displayed in a grid

  Scenario: Each service has icon, heading, and description
    Given the services section is visible
    Then each service item displays an icon, heading, and description text
```

### Video CTA
```gherkin
Feature: WashBox Video CTA

  Scenario: Video section renders play button
    Given the video CTA section is visible
    Then a circular play button is displayed with green gradient

  Scenario: Section uses dark background
    Given the video CTA section is visible
    Then a dark background image is displayed behind the content
```

### Footer
```gherkin
Feature: WashBox Footer

  Scenario: Footer displays contact info and hours
    Given the footer is visible
    Then contact phone and email are displayed
    And opening hours are listed (Mon-Fri, Sat, Sun)

  Scenario: Footer displays navigation links
    Given the footer is visible
    Then navigation links for Home, About, Services, Blog, Contact are present

  Scenario: Footer social icons
    Given the footer is visible
    Then social media icon links are displayed

  Scenario: Footer links to Component Dock
    Given the footer is visible
    Then a "Component Dock" attribution link is present

  Scenario: Copyright bar
    Given the footer is visible
    Then a copyright bar is displayed at the bottom
```

### Scroll-to-top
```gherkin
Feature: WashBox Scroll-to-top

  Scenario: Scroll-to-top button appears after scrolling
    Given the user scrolls past the hero
    Then a scroll-to-top button is visible at bottom-right

  Scenario: Clicking scrolls to top
    Given the scroll-to-top button is visible
    When the user clicks the button
    Then the page scrolls to the top
```

## Verification Checklist

- [ ] All 10 sections present and in correct order
- [ ] Navbar sticky behavior works
- [ ] Hero background image + dark overlay rendering
- [ ] Animated text effect on "& Detailing" (stroke + fill toggle)
- [ ] Pricing cards: 3 cards, correct prices, outlined buttons
- [ ] Testimonial slider with dot navigation
- [ ] Services grid: 4 items with icons
- [ ] Video CTA with play button and dark background
- [ ] Footer: Component Dock link, contact info, hours, nav, social
- [ ] Scroll-to-top button visibility + functionality
- [ ] Mobile responsive: hamburger menu, stacked cards, adjusted font sizes
- [ ] Design tokens match reference: #007AFF brand, Poppins/Work Sans fonts, 30px pill buttons, gradient buttons
- [ ] No ColorLib references in app code (provenance only in spec)
- [ ] Placeholder images via picsum.photos
- [ ] `npm run verify:app washbox` passes
