# Template: Bedrock (Footer Component)

## Purpose

Recreation of ColorLib's "Bootstrap Footer 05" — a light-themed website footer
with an email subscription form, centered navigation links, circular social
icons, a centered site logo, secondary navigation, and a copyright line. This
is a focused footer component template, not a full-page website template.

- **Source:** ColorLib Bootstrap Footer 05 (https://colorlib.com/wp/template/bootstrap-footer-05/)
- **Preview URL:** https://preview.colorlib.com/theme/bft/bootstrap-footer-05/
- **New name:** `bedrock` (foundational footer layer — extends pedestal/baseplate/groundwork naming lineage)
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript
- **ColorLib slug:** `bootstrap-footer-05`

## Design Tokens

Extracted from the live preview CSS (`css/style.css`) and HTML structure.

### Colors

| Token                     | Value              | Usage                                          |
| ------------------------- | ------------------ | ---------------------------------------------- |
| Footer background         | `#fff`             | White — main footer section background         |
| Footer border-top         | `#efefef`          | Light gray — 1px top border                    |
| Site logo color           | `#3e64ff`          | Blue — brand logo text, links to homepage      |
| Nav link color            | `#777`             | Gray — navigation link default text            |
| Nav link hover            | `#3e64ff`          | Blue — navigation link hover state             |
| Copyright text color      | `#777`             | Gray — copyright paragraph text                |
| Email input background    | `#e6e6e6`          | Light gray — email input field background      |
| Email placeholder color   | `#b3b3b3`          | Medium gray — placeholder text                 |
| Social icon background    | `#e6e6e6`          | Light gray — circular icon button background   |
| Social icon color         | `#333`             | Dark gray — social icon text inside circle     |
| Social icon hover color   | `#3e64ff`          | Blue — social icon hover state                 |
| Content area background   | `bg-light` (Bootstrap) | Light gray — demo placeholder above footer  |

### Typography

| Element             | Font family                                                    |
| ------------------- | -------------------------------------------------------------- |
| Body                | `"Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif` |
| Footer              | `"Poppins", sans-serif` (overrides body font)                 |
| Site logo           | Poppins, 30px, font-weight 900, color `#3e64ff`              |
| Nav links           | Poppins, `#777`, inline-block, 10px padding                   |
| Copyright           | Poppins, small text, `#777`                                   |
| Email input         | Roboto (inherited), 14px placeholder, `#b3b3b3`              |

### Spacing & Shapes

| Token                     | Value                                         |
| ------------------------- | --------------------------------------------- |
| Footer padding            | `4rem 0` (vertical)                           |
| Content area height       | `70vh` (demo placeholder above footer)        |
| Top border separator      | `1px solid #efefef` (below subscribe row)     |
| Bottom border             | `border-bottom pb-5 mb-4` on subscribe row   |
| Column layout             | Bootstrap grid: col-lg-3 + col-lg-6 + col-lg-3 |
| Bottom row layout         | col-lg-4 (logo, centered) + col-lg-4 (links) + col-lg-4 (copyright) |
| Nav link items            | display: inline-block, padding: 10px          |
| Social icon size          | 40px × 40px, border-radius: 50% (circle)     |
| Social icon background    | `#e6e6e6` (gray circle)                       |
| Email input height        | 45px, border: none, no box-shadow on focus    |
| Email submit button       | Absolutely positioned inside form, rotated 180° arrow icon |
| Link transition           | .3s all ease                                  |

### Icons

- Icon font: IcoMoon (`fonts/icomoon/style.css`)
- Social icons: Twitter, Instagram, Facebook, Pinterest
- Social icons rendered as 40×40px gray circles with centered icon
- Submit button: keyboard_backspace icon rotated 180° (appears as send arrow)

## Structure (section order)

1. **Content area** — light background placeholder with centered heading "Footer #5" (demo only, not part of the footer component itself)
2. **Footer main** — white background, 4rem vertical padding, 1px top border (#efefef)
   - **Row 1: Three-column top row** (border-bottom separator)
     - Col 1 (col-lg-3): Email subscription form — input with gray (#e6e6e6) background, 45px height, placeholder "Enter your email", submit button (rotated arrow icon)
     - Col 2 (col-lg-6, centered): Navigation links — inline horizontal list: Features, Blog, Pricing, Services
     - Col 3 (col-lg-3, right-aligned): Social icons — 4 circular gray buttons (40×40px, 50% radius): Twitter, Instagram, Facebook, Pinterest
   - **Row 2: Three-column bottom row**
     - Col 1 → Order 2 (col-lg-4, centered on lg): Site logo — large bold blue text (#3e64ff, 30px, weight 900), links to "#"
     - Col 2 → Order 1 (col-lg-4): Secondary navigation — inline horizontal list: Terms, About, Privacy, Contact
     - Col 3 → Order 3 (col-lg-4, right-aligned): Copyright — small muted text: "© 2019. All Rights Reserved."

## Verification Checklist

- [ ] Footer renders on white (#fff) background with top border (#efefef)
- [ ] Font family is Poppins (not Roboto — Poppins overrides body)
- [ ] Email subscription form: gray input (#e6e6e6), 45px height, placeholder text
- [ ] Submit button: absolutely positioned, rotated arrow icon, no background/border
- [ ] Navigation links: inline, horizontal, gray (#777), hover blue (#3e64ff)
- [ ] Social icons: 40×40px circles, gray (#e6e6e6) background, dark icon (#333), hover blue (#3e64ff)
- [ ] Site logo: blue (#3e64ff), 30px, font-weight 900, centered
- [ ] Bottom row: 3-column layout (links left, logo center, copyright right)
- [ ] Copyright: small gray (#777) text, right-aligned
- [ ] All links have .3s all ease transition
- [ ] No ColorLib references in app code (provenance only in spec)
- [ ] Footer links to https://www.componentdock.com/ (branded "Component Dock")
- [ ] public/CNAME contains `bedrock.free.componentdock.com`
- [ ] package.json name is `@free-react-templates/bedrock`
- [ ] homepage is `https://bedrock.free.componentdock.com`
- [ ] 100% test coverage (Vitest + Testing Library)
