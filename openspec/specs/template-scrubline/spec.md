# Template: Scrubline (Car-Wash Service)

## Purpose

Recreation of ColorLib **Carwash** template.
- **Source slug:** `carwash`
- **Preview URL:** https://preview.colorlib.com/theme/carwash/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/carwash-free-template.jpg
- **Stack:** React 19 + Vite + Tailwind CSS 4 + TypeScript

## Design tokens (extracted from preview CSS)

| Token | Value | Notes |
|---|---|---|
| brand-blue | `#007AFF` | Primary CTA, scroll-to-top, nav hover, pricing border |
| brand-gradient | `linear-gradient(to left, #0BC6FF, #0d80f3, #0BC6FF)` | Main `.btn` background |
| navy-dark | `#010A44` | Headings color (h1-h6) |
| navy-deep | `#1f2b7b` | Primary button variant, bold accent |
| heading-font | "Work Sans", sans-serif | h1-h6 via `font-family` |
| body-font | "Poppins", sans-serif | Body, hero h1 |
| light-bg | `#EEF6FF` | Office/environments section background |
| testimonial-gradient | `linear-gradient(to bottom, #1592e6, #007aff 1%, #10cafc 100%)` | Testimonial area bg |
| green-accent | `#70D76A` | Section title span color |
| card-border | `#E7E6EB` | Pricing card border |
| card-price-color | `#4C1E51` | Pricing figure text |
| body-text | `#10285d` | Paragraph text color |
| nav-text | `#072366` | Nav link color |
| button-radius | `30px` | Pill-shaped buttons (`.btn`) |
| button-box-shadow | `0px 7px 21px 0px rgba(0,0,0,0.12)` | Primary CTA shadow |
| outlined-btn-radius | `0px` | `.borders-btn` for pricing cards |

## Section structure (from live DOM)

Order extracted from `https://preview.colorlib.com/theme/carwash/`:

1. **Navbar** — sticky white bar, logo left, nav links (Home, About, Services, Blog, Contact), phone CTA button right (pill, blue gradient)
2. **Hero** — full-width slider, dark blue-to-blue gradient overlay (`rgba(1,10,68,0.8)` → `rgba(0,42,255,0.5)`), large headline "Car Wash", animated outline text "& Detailing", subtext, "Our Services" pill CTA
3. **Equipment/About** — split layout: left image of technician, right white card on `#EEF6FF` background with heading "We have the latest equipment", paragraph, "About Us" outlined button
4. **Pricing** — 3-column card grid on white bg. Cards: Car wash ($50), Detailing ($100), Wash & Detailing ($200). Each card has icon, heading, "Starting at" label, price in `#4C1E51`, feature list, "Get Started" outlined blue button
5. **Testimonials** — blue gradient background, carousel with quote marks, testimonial text, author avatar + name + title. Right side: decorative image
6. **Services/Why Choose Us** — heading "Why take our services?", 4 service cards in a row: each with SVG icon, heading, paragraph. Items: "Car wash 100% without detergents", "Efficient surface drying machines", "We have an application", "Safe lacquer protection"
7. **Video** — dark background image section, centered play button (green gradient `#6fd66c` → `#48c1b9`), heading "Your car will look as your new one", subtext
8. **Map** — embedded map image (placeholder: no actual map interaction needed; use static image or omit)
9. **Footer** — dark background image, 4-column layout: logo + description + contact info, opening hours, navigation links, social icons (Twitter, Facebook, Pinterest). Bottom bar with Component Dock attribution.

## Gherkin scenarios

### Navbar
```gherkin
Scenario: Navbar renders with logo and navigation links
  Given the user loads the page
  Then a sticky white navbar is visible
  And the navbar contains links: Home, About, Services, Blog, Contact
  And a phone-number CTA button is displayed on the right

Scenario: Phone CTA button has pill shape and blue gradient
  Given the user views the phone CTA
  Then the button has border-radius 30px
  And the background is a blue gradient
```

### Hero
```gherkin
Scenario: Hero section displays headline and CTA
  Given the user scrolls to the hero
  Then a large headline "Car Wash" is visible in white
  And animated outline text "& Detailing" is shown
  And a subtext paragraph is present
  And an "Our Services" pill button is displayed

Scenario: Hero has dark gradient overlay
  Given the user views the hero
  Then a gradient overlay from dark navy to blue covers the hero image
```

### Equipment / About
```gherkin
Scenario: Equipment section shows image and text card
  Given the user scrolls to the equipment section
  Then a section with light blue background (#EEF6FF) is visible
  And a white content card is positioned on the right
  And the card contains heading "We have the latest equipment"
  And an "About Us" outlined button is present
```

### Pricing
```gherkin
Scenario: Pricing section shows three service cards
  Given the user scrolls to pricing
  Then three pricing cards are displayed in a row
  And each card has a service name, price, feature list, and CTA
  And the prices are $50.00, $100.00, $200.00

Scenario: Pricing cards have outlined blue buttons
  Given the user views a pricing card
  Then the "Get Started" button has a blue outline border
  And on hover the button fills with a blue gradient
```

### Testimonials
```gherkin
Scenario: Testimonial section has blue gradient background
  Given the user scrolls to testimonials
  Then a section with blue gradient background is visible
  And a quote is displayed with quote-mark decoration
  And the author name and title are shown below the quote
```

### Services
```gherkin
Scenario: Services section shows four service items
  Given the user scrolls to services
  Then a heading "Why take our services?" is displayed
  And four service cards are shown in a row
  And each card has an SVG icon, heading, and paragraph
```

### Video
```gherkin
Scenario: Video section displays play button and heading
  Given the user scrolls to the video section
  Then a dark background image section is visible
  And a green-gradient circular play button is centered
  And heading "Your car will look as your new one" is shown
```

### Footer
```gherkin
Scenario: Footer shows contact info, hours, nav, and social links
  Given the user scrolls to the footer
  Then the footer has logo and description
  And phone number and email are displayed
  And opening hours are listed
  And navigation links are present
  And social icons are shown
  And the bottom bar credits Component Dock
```

## Verification checklist

- [ ] `npm run typecheck` passes
- [ ] `npm run lint` passes
- [ ] `npm run test:coverage` — 100% lines/functions/branches/statements
- [ ] `npm run build` succeeds
- [ ] All sections match the original section order
- [ ] Design tokens (colors, fonts, radii) match the extracted values
- [ ] No ColorLib references in any `apps/` file (comments, text, data)
- [ ] Footer links to `https://www.componentdock.com/`
- [ ] `public/CNAME` contains `scrubline.free.componentdock.com`
- [ ] `package.json` homepage is `https://scrubline.free.componentdock.com`
- [ ] Placeholder images use `picsum.photos/seed/scrubline-*`
- [ ] Google Fonts loaded: Poppins + Work Sans
