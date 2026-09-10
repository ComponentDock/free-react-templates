# Template: Sudsy (Car Wash / Detailing)

## Purpose

Recreation of ColorLib **Carwash** template.

- **Source:** https://colorlib.com/wp/template/carwash/
- **Preview:** https://preview.colorlib.com/theme/carwash/
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript
- **App folder:** `apps/sudsy`
- **Package:** `@free-react-templates/sudsy`

## Replication Reference

### Design Tokens (extracted from preview CSS)

| Token                   | Value                                                              | Usage                                                  |
| ----------------------- | ------------------------------------------------------------------ | ------------------------------------------------------ |
| Primary blue            | `#007AFF`                                                          | CTA buttons, links, interactive elements, back-to-top  |
| Dark navy               | `#010A44` / `#072366`                                              | Headings, nav links, primary text                      |
| Blue gradient           | `linear-gradient(to left, #0BC6FF, #0d80f3, #0BC6FF)`              | `.btn` background, submenu background                  |
| Body text               | `#10285d`                                                          | Paragraph text                                         |
| Section subtitle accent | `#70D76A`                                                          | `.section-tittle span` — small uppercase subtitle text |
| Card/widget bg          | `#f9f9ff`                                                          | Pricing card backgrounds, widget backgrounds           |
| Section bg light        | `#EEF6FF`                                                          | Office environments section background                 |
| White                   | `#fff`                                                             | Card surfaces, hero text                               |
| Hero overlay            | `linear-gradient(to right, rgba(1,10,68,0.8), rgba(0,42,255,0.5))` | Semi-transparent dark overlay on hero image            |
| Footer/CTA bg           | Dark image (`footer-bg.png`) + `#0BC6FF` / `#0d80f3`               | Footer wrapper background, video area background       |
| Button border radius    | `30px`                                                             | All `.btn` elements — fully rounded pill buttons       |
| Button box-shadow       | `0px 7px 21px 0px rgba(0,0,0,0.12)`                                | Drop shadow on CTA buttons                             |
| Card border             | `1px solid #E7E6EB`                                                | Pricing card outer border                              |

### Fonts

| Font      | Weights                      | Usage                                                  |
| --------- | ---------------------------- | ------------------------------------------------------ |
| Poppins   | 300, 400, 500, 600, 700, 800 | Body text, hero heading (800), forms                   |
| Work Sans | 300, 400, 500, 600, 700, 800 | Section headings h1-h6 (500), nav links, boxed buttons |

### Screenshot Analysis

The screenshot shows a professional car wash/detailing business site with:

- **Header:** White sticky bar with logo (car icon + "Car Wash" text), nav links (HOME, ABOUT, SERVICES, BLOG, CONTACT), and a blue rounded phone CTA button.
- **Hero:** Full-width car wash background image with dark navy-blue semi-transparent overlay. Large white "Car Wash & DETAILING" heading in bold sans-serif. Subtext lorem ipsum. Blue pill CTA button "OUR SERVICES".
- **About section:** Light blue (#EEF6FF) background. Left side: technician photo. Right side: overlapping white card with heading "We have the latest equipment", description text, and blue "ABOUT US" button. Subtle blue accent shape at bottom of photo.
- **Overall aesthetic:** Professional, clean, trustworthy automotive service feel. Blue + neutral palette. Layered overlapping layout adds depth.

## Section Structure (from preview DOM)

1. **Navbar** — Sticky header with logo, nav links, phone CTA button
2. **Hero** — Full-width bg image, dark overlay, large heading + subtitle + CTA
3. **About / Office Environments** — Light blue bg (#EEF6FF), overlapping image + white card
4. **Pricing Cards** — 3-column grid: Car wash ($50), Detailing ($100), Wash & Detailing ($200)
5. **Testimonials** — Slider with avatar, quote text, author name
6. **Services / Features** — 4 items: icon + title + description (no-detergent wash, drying machines, app, lacquer protection)
7. **Video / CTA** — Dark bg section with heading "Your car will look as your new one" + description
8. **Footer** — Dark bg, 4 columns (logo+contact, hours, nav links, social icons), copyright bottom bar

## Gherkin Requirements

```gherkin
Feature: Sudsy — Car Wash & Detailing Template

  Background:
    Given the Sudsy template is loaded in a browser

  # --- Navbar ---
  Scenario: Navbar displays logo, navigation links, and phone CTA
    Then a sticky navbar is visible at the top
    And the navbar contains a logo on the left
    And navigation links are present: Home, About, Services, Blog, Contact
    And a blue pill-shaped phone CTA button is visible on the right

  Scenario: Navbar becomes sticky on scroll
    When the user scrolls past the hero section
    Then the navbar sticks to the top of the viewport
    And the navbar has a white background with subtle shadow

  # --- Hero ---
  Scenario: Hero section renders with background image and overlay
    Then a full-width hero section is displayed
    And the hero has a car wash background image
    And a dark navy-blue semi-transparent overlay is applied
    And the heading "Car Wash & Detailing" is displayed in large white bold text
    And a subtitle paragraph is shown below the heading
    And a blue pill CTA button labeled "Our Services" is present

  Scenario: Hero text is responsive
    When viewed on mobile viewport
    Then the heading scales down proportionally
    And the CTA button remains fully visible

  # --- About / Office Environments ---
  Scenario: About section displays overlapping layout
    Then the about section has a light blue (#EEF6FF) background
    And an image of car wash equipment is shown on the left
    And a white card overlaps the image on the right
    And the card contains heading "We have the latest equipment"
    And the card contains a description paragraph
    And the card contains a blue "About Us" CTA button

  # --- Pricing Cards ---
  Scenario: Three pricing cards are displayed
    Then 3 pricing cards are shown in a row
    And card 1 shows "Car wash" with price "$50.00"
    And card 2 shows "Detailing" with price "$100.00"
    And card 3 shows "Wash & Detailing" with price "$200.00"

  Scenario: Pricing cards have correct structure
    Each pricing card contains:
      | Element | Content |
      | Top     | Service name + icon |
      | Middle  | Price display |
      | Bottom  | Feature list (5 items) + "Get Started" button |

  Scenario: Pricing cards have outlined buttons
    Then each card has a blue outlined "Get Started" button
    And on hover the button fills with a blue gradient

  # --- Testimonials ---
  Scenario: Testimonial slider displays customer quotes
    Then a testimonial slider is present
    And each slide contains a customer quote
    And each slide shows the author name and role
    And each slide has a circular avatar image

  # --- Services / Features ---
  Scenario: Four service features are displayed
    Then 4 service items are shown
    And item 1: "Car wash 100% without detergents" with description
    And item 2: "Efficient surface drying machines" with description
    And item 3: "We have an application" with description
    And item 4: "Safe lacquer protection" with description

  # --- Video / CTA ---
  Scenario: Video CTA section has dark background
    Then a dark background CTA section is displayed
    And the heading reads "Your car will look as your new one"
    And a description paragraph is shown below the heading

  # --- Footer ---
  Scenario: Footer displays contact info, hours, navigation, social
    Then the footer has a dark background
    And the footer contains 4 columns:
      | Column | Content |
      | 1      | Logo + description + phone number + email |
      | 2      | Opening hours (Mon-Fri, Sat, Sun) |
      | 3      | Navigation links (Home, About, Services, Blog, Contact) |
      | 4      | Social media icons (Twitter, Facebook, Pinterest) |
    And a copyright bar is at the bottom

  Scenario: Footer links to Component Dock
    Then the footer contains a link to https://www.componentdock.com/
    And the link text references "Component Dock"
```

## Verification Checklist

- [ ] App folder `apps/sudsy` created with correct package name
- [ ] `npm install` run at root to register workspace in lockfile
- [ ] Section order matches preview 1:1 (navbar → hero → about → pricing → testimonials → services → video CTA → footer)
- [ ] Brand color `#007AFF` used via Tailwind `@theme` for primary elements
- [ ] Fonts: Poppins (body/hero) + Work Sans (headings/nav) loaded via Google Fonts
- [ ] Buttons: pill shape (border-radius: 30px), blue gradient background, uppercase, box-shadow
- [ ] Hero: dark navy overlay on bg image, large heading, subtitle, CTA
- [ ] About: light blue (#EEF6FF) bg, overlapping image + white card layout
- [ ] Pricing: 3 cards with service name, price, feature list, outlined button
- [ ] Testimonials: slider with avatar, quote, author
- [ ] Services: 4 items with icon + title + description
      [ ] Video CTA: dark bg with heading + description
- [ ] Footer: dark bg, 4-column layout, copyright bar, Component Dock link
- [ ] Footer links `https://www.componentdock.com/` branded as "Component Dock"
- [ ] No ColorLib references in app code
- [ ] Placeholder images via `https://picsum.photos/seed/sudsy-<n>/<w>/<h>`
- [ ] Tests: 100% coverage (lines, functions, branches, statements)
- [ ] Build passes (`npm run build`)
- [ ] Commit: `docs: prep Sudsy (ColorLib Carwash) spec + research`
