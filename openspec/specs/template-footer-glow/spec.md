# Template: FooterGlow (Footer)

## Purpose

Recreation of ColorLib's **Bootstrap Footer 16** — a dark-themed footer with a newsletter subscription form, three-column link layout, and a subtle radial gradient glow effect.

- **Source slug:** `bootstrap-footer-16`
- **Preview URL:** `https://preview.colorlib.com/theme/bft/bootstrap-footer-16/`
- **ColorLib page:** `https://colorlib.com/wp/template/bootstrap-footer-16/`
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript (strict)

## Design tokens

Extracted from the live preview CSS (`css/style.css`):

| Token | Value | Usage |
|---|---|---|
| Font family | Poppins (300–900) | All text |
| Primary background | `#302939` | `.footer-06` dark purple-gray |
| Radial glow overlay | `radial-gradient(ellipse at center, #d7b8ff 0%, rgba(255,255,255,0) 100%)` at 0.2 opacity | Decorative glow on footer |
| Aside left bg | `#322b3c` | Newsletter label column |
| Aside right bg | `#372f42` | Newsletter form column |
| Form pill bg | `#fff`, `border-radius: 40px` | Subscribe form wrapper |
| Submit button bg | `#352d3f` | Submit button |
| Submit button text | `#fff`, 14px, uppercase, `letter-spacing: 1px` | Submit button |
| Submit button radius | `40px` (pill) | Submit button |
| Submit button size | 150×56px | Submit button |
| Heading text | `#fff`, 30px, uppercase | Section heading |
| Subheading text | `rgba(255,255,255,0.3)`, 2px letter-spacing, uppercase | "Subscribe to our" |
| Footer heading | `#fff`, 20px | Column headings |
| Footer links | `rgba(255,255,255,0.5)` | Link items |
| Paragraph text | `rgba(255,255,255,0.3)` | Copyright / body |
| Section padding | `12em 0` (heading), `7em 0` (footer) | Top spacing |
| Icon | ion-ios-checkmark-circle-outline | Link list items |

## Visual design notes

- The page has a centered heading "Footer #06" above the footer.
- The footer itself is a dark block (`#302939`) with a subtle radial purple glow (`#d7b8ff`) emanating from center.
- Newsletter area: two columns (4:8 split) — left has "Subscribe to our" subheading + "Newsletter" heading on `#322b3c`; right has a white pill-shaped form (`border-radius: 40px`, 3px padding) with transparent input + dark pill submit button (`#352d3f`).
- Link area: three columns (Information, Application, API) on the left; logo + copyright text right-aligned on the right.
- All text is white/light gray on the dark background; links are muted white.
- No images — pure CSS + Ionicons icon font.

## Gherkin requirements

### Feature: FooterGlow Template

```gherkin
Feature: FooterGlow — dark footer with newsletter subscription and multi-column links
  As a visitor
  I want a styled footer with newsletter signup and organized links
  So that I can subscribe and navigate the site

  Background:
    Given the FooterGlow page is loaded

  Scenario: Page heading is displayed
    Then a heading "Footer #06" is visible centered on the page

  Scenario: Newsletter subheading text
    Then the text "Subscribe to our" is displayed in the newsletter section

  Scenario: Newsletter heading text
    Then the text "Newsletter" is displayed as a section heading

  Scenario: Newsletter form input is present
    Then an email input with placeholder "Enter email address" is visible

  Scenario: Newsletter submit button
    Then a "Submit" button is visible inside the newsletter form

  Scenario: Newsletter form has pill shape
    Then the newsletter form wrapper has rounded corners (pill shape)

  Scenario: Footer link columns exist
    Then three link columns are displayed: "Information", "Application", "API"

  Scenario: Information column has links
    Then the "Information" column contains links: "Our Company", "Data", "Pricing", "Contact Us", "Support"

  Scenario: Application column has links
    Then the "Application" column contains links: "Download", "Bike Provider", "How to Used"

  Scenario: API column has links
    Then the "API" column contains links: "Documentation", "Credential", "Developer info"

  Scenario: Link items have icons
    Then each link in the columns has a checkmark circle icon

  Scenario: Footer logo and copyright
    Then a logo link "Colorlib" is displayed in the right column
    And a copyright notice with dynamic year is displayed

  Scenario: Footer links point to Component Dock
    Then the footer contains a link to "https://www.componentdock.com/"

  Scenario: Dark background
    Then the footer section has a dark purple-gray background

  Scenario: Radial glow effect
    Then the footer section has a subtle radial gradient glow overlay

  Scenario: Responsive layout
    When the viewport is mobile
    Then the newsletter columns stack vertically
    And the link columns stack vertically
```

## Verification checklist

- [ ] Spec matches the section order and structure from the live preview HTML
- [ ] Design tokens (colors, font, radii) match the extracted CSS values
- [ ] Newsletter form has pill shape (border-radius: 40px on wrapper, submit button)
- [ ] Submit button: 150×56px, #352d3f bg, uppercase, 1px letter-spacing
- [ ] Footer background: #302939 with radial #d7b8ff glow at 20% opacity
- [ ] Three link columns: Information (5 items), Application (3 items), API (3 items)
- [ ] Checkmark circle icons on all link items
- [ ] Dynamic year in copyright
- [ ] Footer links to Component Dock
- [ ] No ColorLib references in app code
- [ ] `public/CNAME` contains `footer-glow.free.componentdock.com`
- [ ] `package.json` homepage is `https://footer-glow.free.componentdock.com`
