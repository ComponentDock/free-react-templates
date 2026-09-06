# Template: Baseplate (Footer)

## Purpose

Recreation of ColorLib "Bootstrap Footer 03"
(https://colorlib.com/wp/template/bootstrap-footer-03/).
Preview: https://preview.colorlib.com/theme/bft/bootstrap-footer-03/

Stack: React 19, Vite, Tailwind CSS 4, TypeScript (strict). Vitest + Testing
Library with 100% coverage enforced.

## Source Reference

- **ColorLib slug:** bootstrap-footer-03
- **Preview URL:** https://preview.colorlib.com/theme/bft/bootstrap-footer-03/
- **ColorLib page:** https://colorlib.com/wp/template/bootstrap-footer-03/
- **Description:** A clean, minimal white footer template with a logo, colorful
  social icon circles (Facebook, Twitter, Instagram, Behance, Dribbble, YouTube),
  two columns of navigation links, and a centered copyright line separated by a
  top border.

## Design Tokens (extracted from live preview CSS)

### Colors

| Token             | Value     | Usage                                  |
| ----------------- | --------- | -------------------------------------- |
| Footer background | `#fff`    | White — main footer section bg         |
| Border top        | `#efefef` | Light gray — separator above footer    |
| Copyright border  | `#efefef` | Light gray — separator above copyright |
| Logo text         | `#000`    | Black — site logo                      |
| Nav link text     | `#777`    | Muted gray — nav link default color    |
| Copyright text    | `#777`    | Muted gray                             |
| Social FB         | `#3b579b` | Facebook brand blue                    |
| Social TW         | `#00a0fb` | Twitter brand blue                     |
| Social IG         | `#c31574` | Instagram brand pink                   |
| Social BE         | `#394cff` | Behance brand blue                     |
| Social DR         | `#ff2e6e` | Dribbble brand pink-red                |
| Social YT         | `#fa2614` | YouTube brand red                      |
| Social icon glyph | `#fff`    | White — icon color inside circles      |

### Typography

| Element     | Font family                                        |
| ----------- | -------------------------------------------------- |
| Footer body | `"Poppins", sans-serif`                            |
| Body (page) | `"Roboto", -apple-system, BlinkMacSystemFont, ...` |

### Spacing & Shapes

| Token            | Value                                           |
| ---------------- | ----------------------------------------------- |
| Footer padding   | `4rem 0` (vertical)                             |
| Logo size        | 30px, font-weight 900                           |
| Social buttons   | 40x40px, `border-radius: 50%` (perfect circles) |
| Nav link size    | 14px                                            |
| Nav link pad     | `10px`                                          |
| Copyright pad    | `padding-top: 50px`, centered                   |
| Copyright border | `border-top: 1px solid #efefef`                 |

## Component Structure

```
App.tsx
  └── Footer.tsx
        ├── Logo row (col-4 logo + col-8 social icons)
        ├── Nav row (col-6 left nav + col-6 right nav)
        └── Copyright row (centered, bordered)
```

## Gherkin Scenarios

### Scenario: Footer renders with logo

Given the Baseplate page loads
Then a logo "Baseplate" is visible in the footer
And the logo is styled bold and black

### Scenario: Social icons are visible

Given the Baseplate page loads
Then 6 social icon circles are rendered
And each circle has a distinct brand color
And the icons are white on colored backgrounds

### Scenario: Navigation links render

Given the Baseplate page loads
Then left navigation shows "Privacy" and "Policy"
And right navigation shows "Home", "Our works", "About", "Blog", "Contact"

### Scenario: Copyright renders

Given the Baseplate page loads
Then a copyright line is visible
And it contains a link to https://www.componentdock.com/

### Scenario: Responsive layout

Given the Baseplate page loads on mobile
Then the logo and social icons stack vertically
And the nav links wrap appropriately

### Scenario: Footer links have hover transition

Given the Baseplate page loads
When hovering over a nav link
Then the link transitions smoothly
