# Template: Sudsy (Car Service / Car Wash)

## Purpose

Recreation of the ColorLib **Carwash** template — a car wash and detailing service landing page.

- **Source slug:** `carwash`
- **Source URL:** https://colorlib.com/wp/template/carwash/
- **Preview URL:** https://preview.colorlib.com/theme/carwash/
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript

## Design tokens (extracted from live preview)

### Colors
| Token | Hex | Usage |
|---|---|---|
| Primary blue | `#0BC6FF` | Gradient start of `.btn` |
| Primary blue-dark | `#0d80f3` | Gradient end of `.btn` |
| Accent cyan | `#007AFF` | Outline buttons, text accents |
| Section bg light | `#f7f7f7` | Pricing card area background |
| Section bg off-white | `#fbf9ff` | Testimonial area background |
| Section bg dark (footer) | `#010A44` / `#101A31` | Footer and video overlay area |
| White | `#fff` | Card backgrounds, button text |
| Dark text | `#222` / `#080808` | Body text |
| Gradient colors | `#73fbaf` (green), `#a367e7` (purple), `#e66686` (pink), `#f09359` (orange) | Category cards (secondary buttons) |

### Typography
- **Primary font:** "Work Sans", sans-serif
- **Secondary font:** "Poppins", sans-serif

### Buttons
- **Primary CTA:** rounded-full (`border-radius: 30px`), gradient background `linear-gradient(to left, #0BC6FF, #0d80f3, #0BC6FF)`, white text, uppercase, `padding: 13px 33px`, `box-shadow: 0px 7px 21px 0px rgba(0,0,0,0.12)`
- **Outline button:** border `1px solid #007AFF`, `border-radius: 30px`, white bg, `#007AFF` text, uppercase
- **Header button:** phone icon + phone number, same gradient style

### Sections (structure from preview)
1. **Header/Navbar** — Logo left, nav links (Home, About, Services, Blog with dropdown, Contact), phone number CTA button right
2. **Hero slider** — Full-width background image slider with overlay, headline "Car Wash & Detailing", subtext, two CTA buttons ("Our Services" primary + "About Us" outline)
3. **Services (Office Environments)** — Section heading "We have the latest equipment", feature cards with icon + title + description (Car cleaning, Washing & vacuuming, Engine washing, etc.)
4. **Pricing cards** — 3 tiers: Car wash ($50), Detailing ($100), Wash & Detailing ($200) — each with icon, title, price, features list, CTA button
5. **Testimonials** — Slider with customer quotes, avatar images, names
6. **Categories** — Colored buttons/labels linking to service categories (green, purple, pink, orange)
7. **Video CTA** — Dark section with headline "Why take our services?", feature list, popup video button
8. **Footer** — Dark background, logo, about text, opening hours, navigation links, social icons, copyright with "Component Dock"

## Gherkin requirements

### Hero Section
```gherkin
Scenario: Hero displays headline and CTAs
  Given the user visits the homepage
  Then the hero section shows "Car Wash & Detailing" headline
  And there are two CTA buttons: "Our Services" and "About Us"
  And the hero has a background image with dark overlay
```

### Services Section
```gherkin
Scenario: Services section shows equipment features
  Given the user scrolls to the services section
  Then 4+ service items are displayed in a grid
  And each service has an icon, title, and description
```

### Pricing Section
```gherkin
Scenario: Pricing cards display correct tiers
  Given the user scrolls to the pricing section
  Then 3 pricing cards are visible
  And they show "Car wash" at $50.00, "Detailing" at $100.00, "Wash & Detailing" at $200.00
  And each card has a feature list and a CTA button
```

### Testimonial Section
```gherkin
Scenario: Testimonials carousel works
  Given the user scrolls to the testimonials section
  Then testimonial cards are displayed with avatar, quote, and name
  And the carousel can be navigated (dots or arrows)
```

### Categories Section
```gherkin
Scenario: Category buttons display with distinct colors
  Given the user scrolls to the categories section
  Then colored category buttons are visible
  And each button links to a service category
```

### Footer
```gherkin
Scenario: Footer shows contact info and Component Dock link
  Given the user scrolls to the footer
  Then opening hours are displayed
  And navigation links are present
  And the footer links to Component Dock
```

## Verification checklist
- [ ] Hero slider with background images and overlay
- [ ] Header with logo, nav links, and phone CTA
- [ ] Services grid with 4+ feature cards
- [ ] Pricing cards (3 tiers) with correct prices
- [ ] Testimonials carousel with avatars
- [ ] Category buttons with distinct colors
- [ ] Video CTA section with feature list
- [ ] Footer with opening hours, navigation, social, Component Dock link
- [ ] Mobile responsive (hamburger menu, stacked layout)
- [ ] Design tokens: Work Sans + Poppins fonts, blue gradient buttons, rounded-full CTAs
