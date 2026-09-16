# Template: Elevate (Coaching / Consulting)

## Purpose

Recreation of the ColorLib **Life Coaching** template for a coaching/consulting landing page.

- **Source template:** [Life Coaching](https://colorlib.com/wp/template/life-coaching/)
- **Preview URL:** https://preview.colorlib.com/theme/life-coaching/ (404 — unreachable; fallback to screenshot analysis)
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/lifecoaching-free-template.jpg
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript
- **Category:** Coaching / Consulting landing page

## Reference notes (screenshot-only — preview unreachable)

The live preview returned 404. All design tokens below are extracted from:
1. The screenshot image pixel analysis
2. The ColorLib template page metadata and description
3. The CSS color variable found in the ColorLib page: `#81d742` (green accent)

## Design tokens

| Token | Value | Notes |
|---|---|---|
| Brand primary | `#81d742` | Green — from CSS variable `--wpex-term-63032-color`; buttons, accents |
| Accent alt | `#d6de5e` | Lime/chartreuse — from screenshot hero area |
| Body bg | `#ffffff` | Predominantly white/light design |
| Light section bg | `#f7f7f7` | Light gray for alternating sections |
| Text color | `#5f5f5f` | Medium gray — body text |
| Heading color | `#333333` | Dark gray/near-black — headings |
| Font: headings | Likely a sans-serif (clean, modern) | Screenshot shows clean typography |
| Font: body | Sans-serif | Standard web font |
| Button style | Rounded/soft — green accent bg | Pill-shaped or rounded corners |
| Overall aesthetic | Clean, minimal, white-dominant | Professional coaching vibe |

## Features (from ColorLib description)

- Slider (hero carousel)
- Call-to-action sections
- Animated statistics / counters
- Content loading on scroll
- Pricing plans
- Social media icons
- Integrated contact form
- Google Maps
- Blog pages

## Section structure (inferred from description + screenshot analysis)

1. **Navbar** — logo + navigation links, transparent/white bg
2. **HeroSlider** — full-width carousel with heading + CTA button
3. **About** — brief intro with image + text
4. **Services** — coaching services cards (3-4 columns)
5. **Statistics** — animated counter bar with key metrics
6. **Pricing** — pricing plans table/cards (3 tiers)
7. **Testimonials** — client quotes carousel
8. **CTA** — call-to-action banner
9. **Blog** — recent blog posts grid
10. **Contact** — contact form + Google Maps embed
11. **Footer** — links, newsletter, social icons, copyright

## Gherkin requirements

```gherkin
Feature: Elevate — Coaching landing page

  Background:
    Given the user opens the Elevate homepage

  Scenario: Navbar navigation
    Then the navbar shows logo and navigation links
    And the background is white or transparent

  Scenario: Hero slider
    Then a full-width hero carousel is displayed
    And each slide has a heading and CTA button
    And slides auto-advance or have navigation controls

  Scenario: About section
    Then an introductory section with image and text is visible
    And a "Learn More" or similar CTA button is present

  Scenario: Services section
    Then 3-4 service cards are displayed in a grid
    And each card has an icon, title, and description

  Scenario: Statistics counters
    Then animated number counters are displayed
    And each counter shows a metric and label

  Scenario: Pricing plans
    Then 3 pricing tier cards are shown
    And each shows plan name, price, features list, and CTA button
    And one plan is highlighted as recommended

  Scenario: Testimonials
    Then a carousel of client testimonials is displayed
    And each shows a quote, name, and optional avatar

  Scenario: Call-to-action
    Then a CTA banner section is visible
    And it contains a heading and action button

  Scenario: Blog section
    Then 3 blog post cards are displayed
    And each shows an image, title, excerpt, and read more link

  Scenario: Contact form
    Then a contact form with name, email, and message fields is visible
    And a submit button is present

  Scenario: Footer
    Then a footer with links, newsletter signup, and social icons is visible
    And a "Component Dock" link is in the footer
```

## Verification checklist

- [ ] All sections present in correct order
- [ ] Green accent color `#81d742` used for buttons, active states
- [ ] Clean white/light design throughout
- [ ] Hero slider with auto-advance
- [ ] Animated statistics counters
- [ ] Pricing cards (3 tiers)
- [ ] Testimonials carousel
- [ ] Contact form with validation
- [ ] Footer links to `https://www.componentdock.com/`
- [ ] No ColorLib references in app code
- [ ] Placeholder images via `picsum.photos`
- [ ] Icons via `lucide-react`
