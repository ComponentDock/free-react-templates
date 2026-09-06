# Template: FooterLume (Footer)

## Purpose

Recreation of ColorLib's **Bootstrap Footer 17** — a simple, modern, minimal dark footer with navigation menu links and social icons. Clean two-section layout: white content area above, dark footer below.

- **Source slug:** `bootstrap-footer-17`
- **ColorLib page:** https://colorlib.com/wp/template/bootstrap-footer-17/
- **Preview URL:** https://preview.colorlib.com/theme/bootstrap-footer-17/ (404 at time of research — design tokens derived from screenshot analysis)
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript (strict)
- **Category:** Footer

## Design Tokens

Extracted from screenshot analysis (preview unreachable). Tokens are inferred from the rendered screenshot and ColorLib page description ("modern and minimal with menu and social icons").

| Token | Value | Source |
|---|---|---|
| Font family | `"Poppins", sans-serif` | Consistent with ColorLib footer series |
| Page background | `#ffffff` (white) | Screenshot top section dominant color |
| Footer background | `#121212` (near-black) | Screenshot bottom section dominant color |
| Footer text color | `rgba(255, 255, 255, 0.5)` | Muted white for body text |
| Footer link color | `rgba(255, 255, 255, 0.7)` | Slightly brighter white for links |
| Footer heading color | `#ffffff` (pure white) | Column headings |
| Footer heading style | 14px, uppercase, 2px letter-spacing | Standard footer heading convention |
| Social icon color | `rgba(255, 255, 255, 0.5)` | Default state |
| Social icon hover | `#ffffff` | Bright on hover |
| Social icon shape | Circle, 40px diameter | Standard icon circle pattern |
| Social icon background | transparent | Minimal design — no background fill |
| Copyright text color | `rgba(255, 255, 255, 0.3)` | Muted for copyright line |
| Copyright border-top | `1px solid rgba(255, 255, 255, 0.1)` | Subtle separator above copyright |
| Content area padding | `50vh` equivalent (large blank space) | Screenshot shows white space above footer |
| Footer padding | `4em 0` | Standard footer padding |
| Menu link color | `rgba(255, 255, 255, 0.5)` | Same as body text |
| Menu link hover | `#ffffff` | Bright on hover |

## Visual Design Notes (from screenshot)

- The screenshot (1200×972) shows a large white area occupying roughly the top 55–60% of the viewport, with a dark footer occupying the bottom 40–45%.
- The white area is essentially blank — this is a demo page showing the footer in isolation.
- The footer background is very dark (#121212), nearly black.
- The footer appears to have a simple layout: navigation menu links on the left, social media icons (Facebook, Twitter/X, Instagram, LinkedIn, etc.) on the right or in a row.
- No newsletter form, no multi-column product links, no images — this is the simplest footer in the Bootstrap Footer series.
- The design is minimal and clean, relying on typography and spacing rather than color accents.

## Gherkin Requirements

### Feature: FooterLume Template

```gherkin
Feature: FooterLume — simple dark footer with menu links and social icons
  As a visitor
  I want a clean, minimal footer with navigation and social links
  So that I can find site information and connect on social media

  Background:
    Given the FooterLume page is loaded

  Scenario: Content area renders above footer
    Given the white content area is visible
    Then the content area uses a white background
    And the content area occupies the upper portion of the viewport

  Scenario: Page heading is displayed
    Then a centered heading "Footer #17" is visible in the content area

  Scenario: Footer section renders with dark background
    Then the footer section has a dark background (#121212)
    And the footer occupies the lower portion of the viewport

  Scenario: Navigation menu links are present
    Then the footer displays navigation menu links
    And the menu links include items like "Home", "About", "Services", "Portfolio", "Blog", "Contact"
    And the links use muted white text color

  Scenario: Social media icons are present
    Then the footer displays social media icons
    And the icons include Facebook, Twitter, Instagram, LinkedIn, and YouTube
    And the icons are circular with a 40px diameter
    And the icons use muted white color

  Scenario: Social icon hover state
    When a social icon is hovered
    Then the icon color changes to pure white
    And the icon remains circular

  Scenario: Copyright bar is displayed
    Then a copyright bar is visible at the bottom of the footer
    And the copyright text reads "Copyright ©2026 All rights reserved"
    And the copyright text uses a muted color
    And the copyright bar has a subtle top border separator

  Scenario: Footer heading styling
    Then footer column headings are uppercase
    And footer column headings use 14px font size
    And footer column headings have 2px letter-spacing
    And footer column headings are pure white

  Scenario: Responsive layout
    Given the viewport width is less than 768px
    Then the footer menu links stack vertically
    And the social icons remain visible

  Scenario: Component Dock footer link
    Then the footer includes a link to "https://www.componentdock.com/"
    And the link text reads "Component Dock"
```

## Verification Checklist

- [ ] Footer renders with dark background (#121212)
- [ ] Navigation menu links are present and styled with muted white
- [ ] Social media icons render as 40px circles
- [ ] Social icon hover changes color to white
- [ ] Copyright bar with subtle top border
- [ ] Footer heading uses uppercase, 14px, 2px letter-spacing
- [ ] Responsive: menu stacks vertically on mobile
- [ ] Footer includes Component Dock link
- [ ] No ColorLib references in app code
- [ ] All text uses Poppins font family
- [ ] `npm run test:coverage` passes at 100%
- [ ] `npm run build` succeeds
- [ ] Spec folder exists: `openspec/specs/template-footer-lume/`
- [ ] Docs folder exists: `docs/templates/footer-lume/`
