# Template: FooterBreeze (Footer)

## Purpose

Recreation of ColorLib's **Bootstrap Footer 07** — a dark-themed footer with a black background, four-column layout (brand description, two nav link columns, social + CTA), and a centered copyright bar with a top border.

- **Source:** Bootstrap Footer 07 — https://colorlib.com/wp/template/bootstrap-footer-07/
- **Preview:** https://preview.colorlib.com/theme/bft/bootstrap-footer-07/
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript
- **Category:** Footer
- **Note:** Research conducted via live preview DOM at `/theme/bft/bootstrap-footer-07/` and CSS file `css/style.css`. The direct slug `/theme/bootstrap-footer-07/` returns 404.

## Design Tokens

| Token | Value | Source |
|---|---|---|
| Font family | `"Poppins", sans-serif` | `.footer-48201` via global body fallback |
| Footer background | `#000000` (black) | `.footer-48201 { background-color: #000 }` |
| Footer text color | `#777777` | `.footer-48201 { color: #777 }` |
| Logo color | `#ffffff` | `.footer-site-logo { color: #fff }` |
| Logo font size | `1.5rem` | `.footer-site-logo { font-size: 1.5rem }` |
| Nav link color | `gray` (#808080) | `.nav-links li a { color: gray }` |
| Nav link hover | `#ffffff` | `.nav-links li a:hover { color: #fff }` |
| Social icon color | `gray` (#808080) | `.social li a { color: gray }` |
| Social icon hover | `#ffffff` | `.social li a:hover { color: #fff }` |
| CTA button bg | `#e42c64` (pink/red) | `.btn.btn-tertiary { background-color: #e42c64 }` |
| CTA button color | `#ffffff` | `.btn.btn-tertiary { color: #fff }` |
| CTA button radius | `30px` (pill) | `.btn.btn-tertiary { border-radius: 30px }` |
| CTA button padding | `10px 20px` | `.btn.btn-tertiary { padding: 10px 20px }` |
| Copyright border-top | `1px solid #404040` | `.copyright { border-top: 1px solid #404040 }` |
| Footer padding | `7rem 0` | `.footer-48201 { padding: 7rem 0 }` |
| Nav link spacing | `margin-bottom: 10px` | `.nav-links li { margin-bottom: 10px }` |

## Gherkin Requirements

### Section: Preview Content Area

The page must show a centered heading "Footer #7" on a light background, filling 70vh.

```gherkin
Scenario: Preview content area renders
  Given the page loads
  Then a centered heading "Footer #7" is visible
  And the content area uses a light background
```

### Section: Footer — Main Content (Dark Background)

The footer has a black (#000) background with 7rem vertical padding. Four columns:

1. **Column 1 (Brand):** Logo text "FooterBreeze" in white, 1.5rem, bold. Below: paragraph with gray (#777) descriptive text.
2. **Column 2 (Primary Nav):** Vertical list of links — Home, About Us, Portfolio, Services, Contact — gray, hover white, 10px bottom margin each.
3. **Column 3 (Secondary Nav):** Vertical list — Clients, Team, Career, Testimonials, Journal — same styling.
4. **Column 4 (Legal + Social + CTA):** Vertical list — Privacy Policy, Terms & Conditions, Partners. Below: horizontal social icons (Instagram, Twitter, Facebook, Pinterest, Dribbble) in gray, hover white. Below: "Contact Us" pill button with pink (#e42c64) background.

```gherkin
Scenario: Footer displays dark background
  Given the footer renders
  Then the footer background is black (#000)
  And the footer has 7rem vertical padding

Scenario: Brand column shows logo and description
  Given the footer renders
  Then a brand logo text is displayed in white, 1.5rem
  And a description paragraph in gray text appears below the logo

Scenario: Primary navigation links
  Given the footer renders
  Then 5 navigation links are displayed vertically: Home, About Us, Portfolio, Services, Contact
  And each link is gray (#808080) with 10px bottom margin
  And hovering a link changes its color to white

Scenario: Secondary navigation links
  Given the footer renders
  Then 5 navigation links are displayed vertically: Clients, Team, Career, Testimonials, Journal
  And each link follows the same styling as primary nav

Scenario: Legal navigation links
  Given the footer renders
  Then 3 navigation links are displayed vertically: Privacy Policy, Terms & Conditions, Partners
  And each link follows the same styling as primary nav

Scenario: Social icons
  Given the footer renders
  Then 5 social icons are displayed horizontally: Instagram, Twitter, Facebook, Pinterest, Dribbble
  And each icon is gray (#808080) and changes to white on hover

Scenario: Contact Us CTA button
  Given the footer renders
  Then a "Contact Us" button is displayed below the social icons
  And the button has a pink (#e42c64) background with white text
  And the button is pill-shaped (border-radius 30px)
```

### Section: Footer — Copyright Bar

A full-width centered copyright row with a top border (#404040), extra padding.

```gherkin
Scenario: Copyright bar
  Given the footer renders
  Then a copyright row is centered at the bottom
  And the row has a top border (#404040)
  And the text reads "© 2019-2020 All Rights Reserved." in small muted text
```

### Accessibility

```gherkin
Scenario: Social link accessibility
  Given the footer renders
  Then each social icon link has a descriptive aria-label (e.g. "Instagram", "Twitter")

Scenario: CTA button accessibility
  Given the footer renders
  Then the Contact Us button has an accessible name
```

### Responsive Behavior

```gherkin
Scenario: Mobile layout stacks vertically
  Given the viewport width is below 768px
  Then all footer columns stack vertically
  And social icons center-align

Scenario: Desktop layout uses four columns
  Given the viewport width is 768px or above
  Then the footer displays in a four-column grid
  And the social icons and CTA center-align in the fourth column
```

## Verification Checklist

- [ ] Poppins font loaded via Google Fonts link in `index.html`
- [ ] Footer uses black background, 7rem vertical padding
- [ ] Logo text in white, 1.5rem font size
- [ ] Nav links vertical, gray, hover white, 10px bottom margin
- [ ] Social icons horizontal, gray, hover white
- [ ] CTA button: pink (#e42c64), white text, pill shape (30px radius)
- [ ] Copyright bar: centered, top border #404040, small muted text
- [ ] Responsive: single-column stack below 768px
- [ ] Footer links to https://www.componentdock.com/ (Component Dock)
- [ ] No ColorLib references in app code
- [ ] 100% test coverage
