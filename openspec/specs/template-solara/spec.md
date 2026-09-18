# Template: Solara (Portfolio)

## Purpose

Recreation of ColorLib's "Sun" template as a React 19 + Vite + Tailwind 4 + TypeScript single-page portfolio site.

- **Source**: ColorLib "Sun" — https://colorlib.com/wp/template/sun/
- **Preview**: https://preview.colorlib.com/theme/sun/
- **Stack**: Vite (latest) · React 19 · Tailwind CSS 4 · TypeScript (strict)
- **Category**: Portfolio / Creative

## Design tokens

Extracted from the live preview's stylesheets (`style.css`, `css/common.css`, `css/clear.css`).

### Fonts

| Role        | Font family           | Weights  |
| ----------- | --------------------- | -------- |
| Body / nav  | Montserrat, sans-serif | 400, 700 |
| Blog prose  | PT Serif, serif        | 400, 700 |

Use Google Fonts `<link>` for both families.

### Colors

| Token               | Hex       | Usage                                     |
| ------------------- | --------- | ----------------------------------------- |
| brand / accent      | `#FD3137` | Links, active filter, button border/fill, blockquote border, heart icon |
| background          | `#E2E0E0` | Page background, header search overlay    |
| body                | `#FFFFFF` | `.body-wrapper` main content area         |
| text primary        | `#191919` | Body text                                 |
| text muted          | `#a1a1a1` | Navigation links                          |
| text light          | `#b5b5b5` | Blockquote text, secondary text           |
| portfolio hover bg  | `#FAF6F6` | Portfolio item hover overlay background   |
| filter separator    | `#e2dfd9` | Bullet between filter buttons             |
| brand hover fill    | `#FD3137` | Button hover fills entire background      |

### Buttons

- **Filter buttons** (inline text, no border): text color `#191919`, active/hover → `#FD3137`. Separator bullet `·` between items (color `#e2dfd9`).
- **CTA button** (`a.button`): 3px solid `#FD3137` border, text `#FD3137`, padding `15px 40px`, no border-radius (square corners). Hover → background `#FD3137`, text white. No transition on background.

### Spacing / Layout

- Content max-width: 1330px (`.content-1330`), centered.
- Header padding: 150px top/bottom (desktop), 85px (mobile).
- Portfolio grid: 3-column masonry-style (Isotope), items ~443px wide.
- Portfolio filter buttons: right-aligned, inline-block, separated by `·`.
- Portfolio item hover overlay: white background, absolute-positioned (30px inset), title text centered, hidden by default.
- Two-column text section: `.one_half` at 46% width with 8% right margin.
- Footer: top margin 260px, bottom padding 170px, three-column layout (40% | 20% | 40%).
- Footer social links: inline text links (Twitter, Linkedin, Dribbble, Instagram).

### Section backgrounds

| Section          | Background            |
| ---------------- | --------------------- |
| Page / body      | `#E2E0E0`            |
| Body wrapper     | `#FFFFFF` (white)     |
| Portfolio items  | white with image     |
| Portfolio hover  | `#FAF6F6`            |
| Footer           | white / transparent  |

## Gherkin requirements

```gherkin
Feature: Solara portfolio template

  Background:
    Given the user loads the Solara page

  Scenario: Header displays logo and navigation
    Then the header shows the "Solara" logo
    And the navigation contains links: Home, About, Portfolio, Blog, Contact
    And "Home" has a dropdown with sub-items

  Scenario: Search toggle opens search overlay
    When the user clicks the search icon in the header
    Then a search input field appears in an overlay
    And the overlay background is gray

  Scenario: Portfolio filter buttons are displayed
    Then five filter buttons appear: All, Post, Image, Video, Extern
    And the buttons are right-aligned
    And buttons are separated by bullet separators

  Scenario: Active filter highlights in brand color
    Given "All" is the active filter
    Then the "All" button text is red (#FD3137)

  Scenario: Portfolio grid shows items
    Then a 3-column grid of portfolio items is displayed
    And each item shows an image
    And each item has a title overlay that appears on hover

  Scenario: Portfolio hover overlay appears on mouse over
    When the user hovers over a portfolio item
    Then a white overlay appears with the item title centered

  Scenario: Two-column text section
    Then a two-column section displays "The Story" and "Dreamers"
    And each column contains a heading and paragraph text
    And the right column has a "More…" CTA button

  Scenario: CTA button styling
    Then the "More…" button has a 3px solid red border
    And on hover the button background fills red with white text

  Scenario: Footer displays copyright and social links
    Then the footer shows a copyright notice
    And the footer shows the Solara logo centered
    And the footer shows social links: Twitter, Linkedin, Dribbble, Instagram

  Scenario: Responsive layout
    When the viewport is below 1024px
    Then the two-column section stacks to single column
    And the portfolio grid adjusts columns
```

## Verification checklist

- [ ] Header with logo + nav (Home dropdown, About, Portfolio, Blog, Contact)
- [ ] Search toggle overlay
- [ ] Filter buttons (All / Post / Image / Video / Extern) right-aligned with separators
- [ ] Active filter in brand red
- [ ] 3-column portfolio grid with images + hover overlays
- [ ] Two-column text section ("The Story" / "Dreamers") with CTA button
- [ ] CTA button: 3px solid red border, hover fills red bg
- [ ] Footer: copyright, centered logo, social links (Twitter, Linkedin, Dribbble, Instagram)
- [ ] Footer links to Component Dock
- [ ] Brand color #FD3137 used consistently
- [ ] Montserrat font for body/nav, system serif fallback for prose
- [ ] Responsive breakpoints at 1020px
- [ ] No ColorLib references in app code
