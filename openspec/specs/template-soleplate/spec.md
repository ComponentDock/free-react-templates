# Template: Soleplate (Footer)

## Purpose

Recreation of ColorLib's **Bootstrap Footer V09** template as a modern React component.

- **Source:** [colorlib.com/wp/template/bootstrap-footer-09/](https://colorlib.com/wp/template/bootstrap-footer-09/)
- **Preview:** [preview.colorlib.com/theme/bft/bootstrap-footer-09/](https://preview.colorlib.com/theme/bft/bootstrap-footer-09/)
- **Source slug:** `bootstrap-footer-09`
- **New name:** `soleplate` (never reuse ColorLib source name)
- **Package:** `@free-react-templates/soleplate`
- **Deploy URL:** `https://soleplate.free.componentdock.com`
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript (strict)
- **Category:** Footer

## Design tokens (extracted from live preview CSS)

| Token | Value | Source |
|---|---|---|
| Footer font family | `"Poppins", sans-serif` | `.footer-16371` |
| Body font family | `"Roboto", sans-serif` | `body` |
| Logo color | `#4200ff` (vibrant blue-purple) | `.footer-16371 .footer-site-logo a` |
| Logo size | `2rem`, font-weight 900 (black) | `.footer-16371 .footer-site-logo` |
| Nav link color | `#000` (black) | `.footer-16371 .nav-links li a` |
| Nav link hover | `#4200ff` (vibrant blue-purple) | `.footer-16371 .nav-links li a:hover` |
| Social heading color | `#000`, bold, 18px | `.footer-16371 .social h3` |
| Instagram icon color | `#df588a` (pink) | `.footer-16371 .social ul li.in a` |
| Twitter icon color | `#15b8ff` (sky blue) | `.footer-16371 .social ul li.tw a` |
| Facebook icon color | `#3742d0` (deep blue) | `.footer-16371 .social ul li.fb a` |
| Dribbble icon color | `#fa38c1` (magenta) | `.footer-16371 .social ul li.dr a` |
| Pinterest icon color | `#dd4d5a` (red) | `.footer-16371 .social ul li.pin a` |
| Copyright color | `#999999` (gray) | `.footer-16371 .copyright` |
| Content area bg | `bg-light` | `.content` class |
| Content area height | `70vh` | `.content` class |
| Footer padding | `7rem 0` (≈ `py-28`) | `.footer-16371` |
| Footer background | white (default, no image) | — |

## Visual design notes (from preview analysis)

The template is a **centered, clean white footer** — no background image. Everything is centered in a single column (max-width `col-md-9`).

**Section order (top to bottom):**

1. **Site logo:** "Colorlib" in large bold blue-purple (#4200ff) text, centered, 2rem, font-weight 900
2. **Horizontal navigation:** inline links — About, Services, Press, Careers, FAQ, Legal, Contact. Black text, hover to blue-purple. Each link has 10px padding.
3. **Social section:** "Stay in touch" heading (bold, 18px, black), followed by inline social icons — each with a unique brand color (Instagram pink, Twitter blue, Facebook blue, Dribbble magenta, Pinterest red). Each icon has 10px padding.
4. **Copyright:** centered gray text (#999) — "© Colorlib. All Rights Reserved."

**Key differences from Bootstrap Footer 08:**
- No dark background image — clean white footer
- Centered layout (single column, not 5-column)
- Horizontal navigation links (not vertical)
- Colored social icons (not uniform gray)
- No overlay/dark treatment

**Demo area above footer:** bg-light, centered "Footer #9" heading (70vh height). Our React version should just render the footer itself.

## Gherkin requirements

### Scenario: Footer renders with white background

```gherkin
Given the footer component is mounted
Then the footer has a white (default) background
And the footer text is readable against the white background
```

### Scenario: Site logo display

```gherkin
Given the footer is rendered
Then the site logo is centered
And the logo text is blue-purple (#4200ff)
And the logo is 2rem font size with font-weight 900
```

### Scenario: Horizontal navigation links

```gherkin
Given the footer is rendered
Then navigation links are displayed horizontally (inline)
And links include: About, Services, Press, Careers, FAQ, Legal, Contact
And link text is black (#000) by default
And links turn blue-purple (#4200ff) on hover
And each link has 10px padding
```

### Scenario: Social media icons with brand colors

```gherkin
Given the footer is rendered
Then a "Stay in touch" heading is shown (bold, 18px, black)
And social icons are displayed inline below the heading
And Instagram icon is pink (#df588a)
And Twitter icon is sky blue (#15b8ff)
And Facebook icon is deep blue (#3742d0)
And Dribbble icon is magenta (#fa38c1)
And Pinterest icon is red (#dd4d5a)
```

### Scenario: Copyright bar

```gherkin
Given the footer is rendered
Then a copyright line is centered at the bottom
And the copyright text is gray (#999999)
```

### Scenario: Responsive layout

```gherkin
Given the footer is rendered on a mobile device
Then navigation links wrap gracefully
And the footer remains centered and readable
```

### Scenario: Accessibility

```gherkin
Given the footer is rendered
Then all links are keyboard-focusable
And interactive elements have visible focus indicators
And color contrast meets WCAG AA standards
```

## Verification checklist

- [ ] Footer renders with white background
- [ ] Site logo centered, blue-purple (#4200ff), 2rem, bold
- [ ] Horizontal nav links (About, Services, Press, Careers, FAQ, Legal, Contact)
- [ ] Link color #000, hover #4200ff
- [ ] "Stay in touch" heading above social icons
- [ ] Social icons with correct brand colors
- [ ] Copyright in gray (#999)
- [ ] Responsive: links wrap on mobile
- [ ] Font: Poppins for footer, Roboto for body
- [ ] No reference to ColorLib in app code
- [ ] Footer links to componentdock.com
- [ ] Vitest coverage 100%
- [ ] No existing apps/ or openspec/specs/ conflicts
