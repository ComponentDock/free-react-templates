# Template: Rosenook (Feminine Footer)

## Purpose

Recreation of ColorLib **Bootstrap Footer 13** (`bootstrap-footer-13`), a feminine multi-column footer template targeting fashion/lifestyle sites.

- **Source**: https://colorlib.com/wp/template/bootstrap-footer-13/
- **Preview**: https://preview.colorlib.com/theme/bft/bootstrap-footer-13/
- **Stack**: Vite + React 19 + Tailwind CSS 4 + TypeScript (strict)
- **Category**: Footer — feminine aesthetic, multi-column layout with social icons and newsletter subscription

## Design Tokens

Extracted from the live preview stylesheet (`css/style.css`) and inline `<style>`.

### Colors

| Token | Value | Usage |
|-------|-------|-------|
| `--color-footer-bg` | `#f8f1f1` | Footer section background (very light pink) |
| `--color-accent` | `#f17e7e` | Links, social icon color, subscribe button background (salmon/coral pink) |
| `--color-text-primary` | `rgba(0,0,0,0.4)` | Copyright text |
| `--color-text-link` | `rgba(0,0,0,0.3)` | Footer list link color |
| `--color-input-bg` | `rgba(0,0,0,0.05)` | Input field background, social icon background |
| `--color-border-top` | `rgba(0,0,0,0.1)` | Top border separator above copyright row |
| `--color-white` | `#fff` | Subscribe button text |

### Typography

| Token | Value |
|-------|-------|
| Font family | `Poppins` (300–900, Google Fonts) |
| Footer base font-size | `14px` |
| Footer heading font-size | `14px` |
| Footer heading text-transform | `uppercase` |
| Footer heading letter-spacing | `2px` |
| Footer heading font-weight | `500` |
| Subscribe input font-size | `16px` |
| Subscribe button font-size | `16px` |

### Shapes

| Element | Border-radius |
|---------|---------------|
| Social icon circles | `50%` (40×40px circles) |
| Subscribe input | `0` (square corners) |
| Subscribe button | `0` (square corners) |
| Input group | `0` |

### Spacing

| Element | Value |
|---------|-------|
| Footer padding | `7em 0` |
| Section padding (above footer) | `12em 0` |
| Footer heading margin-bottom | `30px` |
| Social icon margin-right | `10px` |
| Subscribe button width | `130px` |
| Subscribe button height | `52px` |
| Form input height | `52px` |

### Button Styles

- Subscribe button: `background: #f17e7e`, `color: #fff`, `border: none`, `border-radius: 0`, `width: 130px`, `height: 52px`
- Hover/focus: text-decoration: none, outline: none (no visible change beyond default)

## HTML Structure (from preview)

```
ftco-section (demo page header — NOT part of footer template)
  └─ container > row > col-md-6 > h2 "Footer #03"

footer.footer-03
  └─ container
       ├─ row (main content)
       │    ├─ col-md-6 (left — 3 link columns)
       │    │    └─ row
       │    │         ├─ col-md-4: "Men" heading + ul.list-unstyled (Jeans, Jumpers, Leather, Shorts, Boots, Watches)
       │    │         ├─ col-md-4: "Women" heading + ul.list-unstyled (Dresses, Jumpsuits, Shirts, T-shirts, Sweatshirts, Jackets, Coats)
       │    │         └─ col-md-4: "Kids" heading + ul.list-unstyled (Shirts, T-shirts, Polos, Sweaters, Sweatshirts, Jackets, Watches)
       │    └─ col-md-6 (right — social + subscribe)
       │         └─ row > col-md-12.col-lg-11
       │              ├─ "Follow Us" heading
       │              ├─ ftco-footer-social (Twitter, Facebook, Instagram, LinkedIn icons)
       │              ├─ "Subscribe Us" heading (mt-5)
       │              └─ subscribe-form > form-group > input(email) + input(submit "Subscribe")
       └─ row.mt-5.pt-4.border-top (bottom bar)
            ├─ col-md-6.col-lg-8: copyright text
            └─ col-md-6.col-lg-4.text-md-right: Terms & Conditions | Privacy links
```

## Gherkin Requirements

### Scenario: Footer section renders with correct background
```
GIVEN the user loads the page
WHEN the footer section is visible
THEN the footer background is #f8f1f1 (light pink)
AND the footer has padding of approximately 7em top/bottom
```

### Scenario: Three-column link section (left side)
```
GIVEN the user views the footer
WHEN looking at the left half of the footer
THEN there are three columns: "Men", "Women", "Kids"
AND each column has a heading styled uppercase with 2px letter-spacing
AND "Men" contains links: Jeans, Jumpers, Leather, Shorts, Boots, Watches
AND "Women" contains links: Dresses, Jumpsuits, Shirts, T-shirts, Sweatshirts, Jackets, Coats
AND "Kids" contains links: Shirts, T-shirts, Polos, Sweaters, Sweatshirts, Jackets, Watches
```

### Scenario: Social icons (right side)
```
GIVEN the user views the right side of the footer
WHEN the "Follow Us" section is visible
THEN there are 4 circular social icons: Twitter, Facebook, Instagram, LinkedIn
AND each icon circle is 40x40px with 50% border-radius
AND the icon color is #f17e7e (salmon pink)
AND hovering an icon turns the color to white
```

### Scenario: Newsletter subscription form
```
GIVEN the user views the subscribe section
WHEN the "Subscribe Us" form is visible
THEN there is an email input with placeholder "Enter email address"
AND a "Subscribe" button with background #f17e7e and white text
AND the input has a subtle rgba(0,0,0,0.05) background
AND both input and button are 52px tall with square corners (border-radius: 0)
```

### Scenario: Copyright and legal links (bottom bar)
```
GIVEN the user views the bottom of the footer
WHEN the copyright row is visible
THEN it is separated from the main content by a thin top border
AND the left side shows copyright text with current year
AND the right side shows "Terms & Conditions" and "Privacy" links
```

### Scenario: Responsive layout
```
GIVEN the user views the footer on a mobile viewport (col-md breakpoint)
WHEN the layout stacks
THEN the left link columns stack vertically
AND the right social/subscribe section stacks below
AND the copyright row stacks with left/right becoming full-width
```

### Scenario: Typography and link colors
```
GIVEN the user views the footer
WHEN inspecting text styles
THEN headings use Poppins font, 14px, uppercase, 2px letter-spacing, weight 500
AND list links use color rgba(0,0,0,0.3)
AND all interactive elements (links, buttons) use the accent color #f17e7e
```

## Verification Checklist

- [ ] Footer background is `#f8f1f1`
- [ ] Font family is Poppins (Google Fonts, weights 300–900)
- [ ] Three link columns: Men, Women, Kids — correct items in each
- [ ] Social icons: 4 circular icons (Twitter, Facebook, Instagram, LinkedIn)
- [ ] Social icons: 40x40px, 50% radius, accent color #f17e7e, white on hover
- [ ] Subscribe form: email input + "Subscribe" button
- [ ] Subscribe button: #f17e7e background, white text, 52px height, square corners
- [ ] Input background: rgba(0,0,0,0.05), no border, square corners
- [ ] Footer heading: 14px, uppercase, 2px letter-spacing, weight 500
- [ ] List link color: rgba(0,0,0,0.3)
- [ ] Copyright text: rgba(0,0,0,0.4), includes current year
- [ ] Bottom bar: thin top border separator
- [ ] Terms & Conditions and Privacy links in bottom-right
- [ ] Responsive: stacks on mobile (col-md breakpoint)
- [ ] Footer links to https://www.componentdock.com/ (Component Dock branding)
- [ ] No ColorLib references in app code
- [ ] Uses picsum.photos for placeholder images (if any)
- [ ] All tests pass with 100% coverage
