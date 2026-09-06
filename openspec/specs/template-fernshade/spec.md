# Template: Fernshade (Bootstrap Footer 17)

## Purpose

Recreation of ColorLib "Bootstrap Footer 17" (slug: `bootstrap-footer-17`).

- **Source**: https://colorlib.com/wp/template/bootstrap-footer-17/
- **Preview**: https://preview.colorlib.com/theme/bft/bootstrap-footer-17/
- **Screenshot**: https://colorlib.com/wp/wp-content/uploads/sites/2/bootstrap-footer-17.jpg
- **Stack**: Vite + React 19 + Tailwind CSS 4 + TypeScript
- **Package**: `@free-react-templates/fernshade`
- **Deploy**: `https://fernshade.free.componentdock.com`

## Design tokens

Extracted from the live preview CSS (`css/style.css`) and HTML:

| Token              | Value                      | Notes                                      |
|--------------------|----------------------------|--------------------------------------------|
| `--bg`             | `#121212`                  | Very dark gray/charcoal footer background  |
| `--accent`         | `#a3de83`                  | Bright lime green — links, icon borders    |
| `--heading`        | `#ffffff`                  | White heading text                         |
| `--text-secondary` | `rgba(255, 255, 255, 0.6)` | Menu link text (semi-transparent white)    |
| `--text-muted`     | `rgba(255, 255, 255, 0.3)` | Paragraph / copyright text                 |
| `--icon-border`    | `#a3de83`                  | Social icon circle border color            |
| `--icon-size`      | `40px × 40px`              | Social icon circle dimensions              |
| `--icon-radius`    | `50%`                      | Full circle (round)                        |
| `--font-family`    | `Poppins, sans-serif`      | Google Fonts — weights 300–900             |
| `--footer-padding` | `7em 0`                    | Vertical footer padding                    |
| `--heading-size`   | `30px`                     | Footer heading font size                   |
| `--letter-spacing` | `1px`                      | Menu link letter-spacing                   |

## Visual design notes (from screenshot)

The original screenshot shows:
- A dark charcoal (#121212) centered footer on a white body background.
- Centered "Colorlib.com" brand text in white (h2, bold, Poppins).
- Horizontal menu links: Home · Agent · About · Listing · Blog · Contact — uppercase, letter-spaced, semi-transparent white, hover → lime green.
- Three social icons (Twitter, Facebook, Instagram) in circles with lime green (#a3de83) 1px border, transparent background.
- Copyright line in muted text with a heart icon.

## Section structure (top → bottom)

1. **Hero spacer** — White section with centered heading (title only; no content). Serves as the visible page body above the footer.
2. **Footer** — Dark (#121212) background:
   - Brand logo text (h2, white, bold, Poppins)
   - Navigation menu (horizontal, uppercase, semi-transparent white links)
   - Social icons row (Twitter, Facebook, Instagram — lucide-react icons in circles)
   - Copyright / attribution line

## Gherkin requirements

```gherkin
Feature: Fernshade footer template
  As a visitor I see a centered dark footer with green accents

  Background:
    Given the Fernshade page is loaded

  Scenario: Hero section displays
    Then a white hero section is visible
    And the hero contains a centered heading

  Scenario: Footer background
    Then the footer background is dark charcoal (#121212)

  Scenario: Brand logo
    Then the footer displays the brand name in white bold text
    And the brand name font is Poppins

  Scenario: Navigation menu
    Then the footer shows navigation links horizontally centered
    And the links include "Home", "Agent", "About", "Listing", "Blog", "Contact"
    And the link text is uppercase with letter-spacing
    And the link color is semi-transparent white
    And hovering a link changes its color to lime green (#a3de83)

  Scenario: Social icons
    Then three social icons are displayed (Twitter, Facebook, Instagram)
    And each icon is inside a 40px circle
    And each circle has a 1px lime green (#a3de83) border
    And each circle has a transparent background
    And hovering an icon fills the circle with lime green

  Scenario: Copyright line
    Then a copyright line is displayed below the social icons
    And the copyright text is in muted white (rgba 255,255,255,0.3)
    And the copyright includes the current year

  Scenario: Component Dock footer link
    Then the footer includes a link to https://www.componentdock.com/
    And the link text references "Component Dock"
```

## Verification checklist

- [ ] Brand name text is white, bold, Poppins font
- [ ] Navigation links are uppercase, letter-spaced, horizontal, centered
- [ ] Nav link hover color transitions to #a3de83 (lime green)
- [ ] Social icons are circular (40px, border-radius 50%)
- [ ] Social icon border color is #a3de83
- [ ] Social icon hover fills circle with green, text turns white
- [ ] Footer background is #121212
- [ ] Copyright text is muted white (rgba 255,255,255,0.3)
- [ ] Copyright includes dynamic current year
- [ ] Footer links to https://www.componentdock.com/
- [ ] No ColorLib references in app code (comments, strings, URLs)
- [ ] No copied assets (images, fonts, CSS files) — use picsum.photos, Google Fonts, lucide-react
- [ ] Screenshot matches visual fidelity of original
