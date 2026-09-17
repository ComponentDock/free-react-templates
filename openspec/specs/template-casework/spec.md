# Template: CaseWork (SaaS / App Showcase)

## Purpose

Recreation of ColorLib **Ca App** (`ca-app`).
- Source: https://colorlib.com/wp/template/ca-app/
- Preview: https://preview.colorlib.com/theme/ca-app/ (UNREACHABLE — 404; spec
  based on TEMPLATES.md screenshot at
  https://colorlib.com/wp/wp-content/uploads/sites/2/ca-app-showcase-website-template.jpg)
- Stack: React 19 · Vite · Tailwind CSS 4 · TypeScript
- Package: `@free-react-templates/casework`
- Deploy: `casework.free.componentdock.com`

## Design Tokens

Extracted from the screenshot (preview unavailable):

| Token              | Value                                  | Notes                                  |
| ------------------ | -------------------------------------- | -------------------------------------- |
| Brand gradient     | `linear-gradient(135deg, #7c3aed, #6366f1, #a78bfa)` | Purple→indigo→lavender, diagonal |
| Accent / CTA       | `#ff6b8a` (pink-coral)                | "Get Started" button, footer CTA       |
| Accent hover       | `#e5557a`                              | Darker pink on hover                   |
| Background (page)  | `#ffffff`                              | White                                  |
| Card background    | `#f8f9fa`                              | Very light gray for feature cards      |
| Text on gradient   | `#ffffff`                              | White                                  |
| Text primary       | `#333333`                              | Dark gray on white sections            |
| Text secondary     | `#666666`                              | Lighter gray for descriptions          |
| Divider / accent   | `#6366f1`                              | Small underline below section headings |
| Font family        | `"Poppins", sans-serif`                | Clean geometric sans-serif             |
| Button radius      | `9999px` (pill)                        | Fully rounded CTA buttons              |
| Card radius        | `8px`                                  | Slight rounding on feature cards       |
| Card shadow        | `0 2px 15px rgba(0,0,0,0.08)`         | Subtle shadow on cards                 |

## Section Structure (from screenshot)

1. **Navbar** — Fixed/sticky, white text on gradient. Logo "Ca." (left), nav links
   (Home, About, Features, Screenshot, Pricing, Testimonials, Team, Contact),
   "Sign Up Free" outlined pill button (right).
2. **Hero** — Full-width gradient background. Left: headline "Showcase your app"
   + subtext + email input + "Get Started" pink CTA button. Right: tilted phone
   mockup showing a dashboard/analytics screen (use picsum placeholder).
3. **Features ("Why Is It Special")** — White background. Centered heading with
   pink underline. 3-column card grid: each card has icon (lucide-react), title,
   description. Cards have light gray bg + shadow + rounded corners.
4. **Screenshot showcase** — Dark/purple gradient background. Centered heading.
   Phone mockup or carousel of app screenshots (use picsum placeholders).
5. **Pricing** — White background. 3 pricing tier cards (Basic / Pro / Enterprise)
   with price, feature list, CTA button. Middle card highlighted as "Popular".
6. **Testimonials** — Light gray background. 2–3 testimonial cards with avatar,
   name, role, quote text.
7. **Team** — White background. 3 team member cards with photo, name, role,
   social icon links.
8. **CTA / Download** — Gradient background. Headline + subtext + "Get Started"
   button.
9. **Footer** — Dark background (#2d2d2d). 3-column layout: logo + description,
   quick links, contact info. Bottom bar with copyright + "Made with Component Dock".

## Gherkin Requirements

```gherkin
Feature: CaseWork — SaaS App Showcase Template

  Background:
    Given the user visits "https://casework.free.componentdock.com"
    Then the page loads without errors

  # --- Navbar ---
  Scenario: Navbar displays correctly
    Given the navbar is visible
    Then the logo "Ca." is displayed on the left
    And navigation links are visible: Home, About, Features, Screenshot, Pricing, Testimonials, Team, Contact
    And a "Sign Up Free" outlined button is visible on the right

  Scenario: Navbar sticks on scroll
    Given the user scrolls down past the hero
    Then the navbar remains fixed at the top of the viewport

  # --- Hero ---
  Scenario: Hero section renders with gradient
    Given the hero section is in view
    Then a purple-to-indigo diagonal gradient background is visible
    And a headline is displayed on the left side
    And a subtext paragraph is displayed below the headline
    And an email input field with placeholder "name@company.com" is visible
    And a "Get Started" pink button is visible next to the input

  Scenario: Hero phone mockup is displayed
    Given the hero section is in view
    Then a phone/device mockup image is displayed on the right side

  # --- Features ---
  Scenario: Features section shows three feature cards
    Given the user scrolls to the "Why Is It Special" section
    Then a centered heading "Why Is It Special" is displayed
    And a small accent underline is visible below the heading
    And exactly 3 feature cards are displayed in a row
    And each card contains an icon, a title, and a description paragraph

  # --- Screenshot Showcase ---
  Scenario: Screenshot section renders
    Given the user scrolls to the screenshot section
    Then a dark/gradient background section is visible
    And a centered heading is displayed
    And at least one phone/device mockup or screenshot image is visible

  # --- Pricing ---
  Scenario: Pricing section shows three tiers
    Given the user scrolls to the pricing section
    Then 3 pricing cards are displayed
    And each card shows a tier name, price, and feature list
    And each card has a CTA button
    And the middle card is visually highlighted as recommended

  # --- Testimonials ---
  Scenario: Testimonials section renders
    Given the user scrolls to the testimonials section
    Then at least 2 testimonial entries are displayed
    And each entry shows an avatar, name, role, and quote text

  # --- Team ---
  Scenario: Team section shows members
    Given the user scrolls to the team section
    Then at least 3 team member cards are displayed
    And each card shows a photo, name, role, and social icon links

  # --- CTA / Download ---
  Scenario: CTA download section renders
    Given the user scrolls to the download CTA section
    Then a gradient background is visible
    And a headline and subtext are displayed
    And a "Get Started" button is visible

  # --- Footer ---
  Scenario: Footer renders correctly
    Given the user scrolls to the footer
    Then the footer has a dark background
    And the footer contains a logo/description column
    And the footer contains a quick links column
    And the footer contains a contact info column
    And the footer bottom bar shows copyright text
    And the footer links to "https://www.componentdock.com/"

  # --- Responsive ---
  Scenario: Mobile responsive layout
    Given the user views the page on a 375px-wide viewport
    Then the navbar collapses into a hamburger menu
    And the hero stacks vertically (text above, image below)
    And feature cards stack vertically (one per row)
    And pricing cards stack vertically
    And team cards stack vertically
    And the footer columns stack vertically

  # --- Accessibility ---
  Scenario: Keyboard navigation works
    Given the user tabs through the page
    Then all interactive elements receive visible focus
    And the tab order follows the visual reading order

  Scenario: Images have alt text
    Given the page is rendered
    Then all img elements have non-empty alt attributes
```

## Verification Checklist

- [ ] Navbar: sticky, all links present, logo renders, "Sign Up Free" outlined button
- [ ] Hero: gradient background, headline, subtext, email input, "Get Started" CTA, phone mockup
- [ ] Features: heading with accent underline, 3 cards with icons, titles, descriptions
- [ ] Screenshot showcase: dark/gradient bg, heading, device mockup(s)
- [ ] Pricing: 3 tier cards, middle highlighted, prices, feature lists, CTA buttons
- [ ] Testimonials: 2+ entries with avatar, name, role, quote
- [ ] Team: 3+ member cards with photo, name, role, social links
- [ ] CTA: gradient bg, headline, subtext, "Get Started" button
- [ ] Footer: dark bg, 3 columns, copyright, links to componentdock.com
- [ ] Responsive: hamburger menu on mobile, stacked layouts
- [ ] Accessibility: focus-visible, alt text, semantic HTML, aria labels
- [ ] No ColorLib references in app code (only in this spec + TEMPLATES.md)
- [ ] Uses `cn()` from packages/ui for class composition
- [ ] 100% test coverage (lines, functions, branches, statements)
