# Template: Backplate (Footer)

## Purpose

Recreation of ColorLib's **Bootstrap Footer V08** template as a modern React component.

- **Source:** [colorlib.com/wp/template/bootstrap-footer-08/](https://colorlib.com/wp/template/bootstrap-footer-08/)
- **Preview:** [preview.colorlib.com/theme/bft/bootstrap-footer-08/](https://preview.colorlib.com/theme/bft/bootstrap-footer-08/)
- **Source slug:** `bootstrap-footer-08`
- **New name:** `backplate` (never reuse ColorLib source name)
- **Package:** `@free-react-templates/backplate`
- **Deploy URL:** `https://backplate.free.componentdock.com`
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript (strict)
- **Category:** Footer

## Design tokens (extracted from live preview CSS)

| Token | Value | Source |
|---|---|---|
| Footer font family | `"Poppins", sans-serif` | `.footer-99382` |
| Body font family | `"Roboto", sans-serif` | `body` |
| Footer text color | `#777` | `.footer-99382` |
| Footer heading color | `#fff` (white) | `.footer-99382 h3` |
| Footer heading size | `16px`, bold | `.footer-99382 h3` |
| Footer link color | `#999999` | `.footer-99382 .nav-links li a` |
| Footer link hover | `#fff` (white) | `.footer-99382 .nav-links li a:hover` |
| Footer site logo color | `#fff`, 1.5rem | `.footer-99382 .footer-site-logo` |
| Footer background | `background-image: url('images/hero_1.jpg')` with `rgba(0,0,0,0.7)` overlay | `.footer-99382` and `::before` |
| Social icon color | `gray` | `.footer-99382 .social li a` |
| Social icon hover | `#fff` | `.footer-99382 .social li a:hover` |
| Copyright border-top | `1px solid #595959` | `.footer-99382 .copyright` |
| Content area bg | `bg-light` (light gray) | `.content` class |
| Content area height | `70vh` | `.content` class |

## Visual design notes (from screenshot analysis)

The template is a **standalone footer section** with a **dark photo background** (grayscale urban/architectural scene) overlaid with a semi-transparent black layer. The footer is divided into 5 columns:

1. **Column 1 (logo + about):** Site name "Colorlib" in large white text, followed by a short gray paragraph describing the company.
2. **Column 2 (Discover):** Heading "Discover" in white bold 16px, with vertical link list: Home, About Us, Portfolio, Services, Contact.
3. **Column 3 (About):** Heading "About" in white bold 16px, with vertical link list: Clients, Team, Career, Testimonials, Journal.
4. **Column 4 (Help):** Heading "Help" in white bold 16px, with vertical link list: Privacy Policy, Terms & Conditions, Partners.
5. **Column 5 (Follow Us):** Heading "Follow Us" in white bold 16px, with inline social icons: Instagram, Twitter, Facebook, Pinterest, Dribbble.

Below the columns: a **copyright line** centered with a subtle top border (`1px solid #595959`): "© 2019—2020 All Rights Reserved."

Above the footer: a **content area** with `bg-light` background, centered "Footer #8" heading (this is the demo area — our React version should just show the footer itself, not the demo content area).

**Buttons:** The CSS defines a `.btn.btn-tertiary` with `background-color: #e42c64` (hot pink), `border-radius: 30px` (pill shape), but no buttons appear in the actual footer HTML. Include this token in case it's needed.

## Gherkin requirements

### Scenario: Footer renders with background image overlay

```gherkin
Given the footer component is mounted
Then the footer has a dark background image overlay (rgba(0,0,0,0.7) over a photo)
And the footer text is readable against the dark background
```

### Scenario: Site logo and about text

```gherkin
Given the footer is rendered
Then the site logo is displayed in large white text (1.5rem)
And a brief "about" paragraph is shown below the logo in gray (#777) text
```

### Scenario: Navigation link columns

```gherkin
Given the footer is rendered
Then there are three link columns: "Discover", "About", "Help"
And each column has a white bold heading (16px)
And each column has a vertical list of navigation links
And links are gray (#999999) by default
And links turn white on hover
```

### Scenario: Social media links

```gherkin
Given the footer is rendered
Then a "Follow Us" column displays social media icons
And icons are inline-block (horizontal row)
And icons are gray by default
And icons turn white on hover
```

### Scenario: Copyright bar

```gherkin
Given the footer is rendered
Then a copyright line is centered at the bottom
And the copyright has a top border of 1px solid #595959
And the copyright text shows the current year range
```

### Scenario: Responsive layout

```gherkin
Given the footer is rendered on a mobile device
Then columns stack vertically (single column layout)
And the footer remains readable on small screens
```

### Scenario: Accessibility

```gherkin
Given the footer is rendered
Then all links are keyboard-focusable
And interactive elements have visible focus indicators
And color contrast meets WCAG AA standards for text on the dark background
```

## Verification checklist

- [ ] Footer renders with dark background image overlay
- [ ] Site logo displayed in white at 1.5rem
- [ ] About paragraph in gray (#777)
- [ ] Three link columns (Discover, About, Help) with correct headings
- [ ] Link color #999999, hover to white
- [ ] Social icons (Instagram, Twitter, Facebook, Pinterest, Dribbble) inline
- [ ] Social icon hover to white
- [ ] Copyright bar with top border
- [ ] Responsive: columns stack on mobile
- [ ] Font: Poppins for footer, Roboto for body
- [ ] No reference to ColorLib in app code
- [ ] Footer links to componentdock.com
- [ ] Vitest coverage 100%
- [ ] No existing apps/ or openspec/specs/ conflicts
