# Template: FooterWoven (Footer)

## Purpose

Recreation of ColorLib's **Bootstrap Footer 17** — a dark, minimal footer with a centered brand heading, horizontal navigation menu, circular social icon buttons with green accent borders, and a copyright line. The design is clean, modern, and spacious with Poppins typography throughout.

- **Source slug:** `bootstrap-footer-17`
- **ColorLib page:** https://colorlib.com/wp/template/bootstrap-footer-17/
- **Preview URL:** https://preview.colorlib.com/theme/bft/bootstrap-footer-17/
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript (strict)
- **Category:** Footer

## Design Tokens

Extracted from the live preview CSS (`css/style.css`):

| Token | Value | Source |
|---|---|---|
| Font family | `"Poppins", Arial, sans-serif` | `body { font-family: "Poppins", Arial, sans-serif }` |
| Font weights loaded | 300, 400, 500, 600, 700, 800, 900 | `@font-face` declarations in preview `<style>` |
| Body font size | `15px` | `body { font-size: 15px }` |
| Body line height | `1.8` | `body { line-height: 1.8 }` |
| Footer background | `#121212` (near-black) | `.footer-07 { background: #121212 }` |
| Footer link color | `#a3de83` (green) | `.footer-07 a { color: #a3de83 }` |
| Footer paragraph color | `rgba(255, 255, 255, 0.3)` | `.footer-07 p { color: rgba(255,255,255,0.3) }` |
| Footer heading size | `30px` | `.footer-07 .footer-heading { font-size: 30px }` |
| Footer heading color | `#ffffff` | `.footer-07 .footer-heading { color: #fff }` |
| Footer heading weight | `700` | `.footer-07 .footer-heading { font-weight: 700 }` |
| Footer heading margin-bottom | `30px` | `.footer-07 .footer-heading { margin-bottom: 30px }` |
| Logo color | `#ffffff` | `.footer-07 .footer-heading .logo { color: #fff }` |
| Menu margin-bottom | `30px` | `.footer-07 .menu { margin-bottom: 30px }` |
| Menu link color | `rgba(255, 255, 255, 0.6)` | `.footer-07 .menu a { color: rgba(255,255,255,0.6) }` |
| Menu link style | uppercase, letter-spacing: 1px | `.footer-07 .menu a { text-transform: uppercase; letter-spacing: 1px }` |
| Menu link margin | `0 10px` | `.footer-07 .menu a { margin: 0 10px }` |
| Social icon size | `40px × 40px` | `.ftco-footer-social li a { height: 40px; width: 40px }` |
| Social icon shape | circle | `.ftco-footer-social li a { border-radius: 50% }` |
| Social icon border | `1px solid #a3de83` | `.footer-07 .ftco-footer-social li a { border: 1px solid #a3de83 }` |
| Social icon bg | transparent | `.footer-07 .ftco-footer-social li a { background: transparent }` |
| Social icon hover color | `#ffffff` | `.ftco-footer-social li a:hover { color: #fff }` |
| Social icon font size | `20px` | `.ftco-footer-social li a span { font-size: 20px }` |
| Social list item margin | `0 10px 0 0` | `.ftco-footer-social li { margin: 0 10px 0 0 }` |
| Footer padding | `7em 0` | `footer { padding: 7em 0 }` |
| Preview section padding | `12em 0` | `.ftco-section { padding: 12em 0 }` |
| Link transition | `0.3s all ease` | `a { transition: .3s all ease }` |

## Requirements

### Requirement: Preview content area

The application SHALL display a centered heading "Footer #07" on a light background with generous vertical padding.

#### Scenario: Preview content area renders

- **WHEN** the page loads
- **THEN** a centered heading "Footer #07" is visible
- **AND** the content area uses a light background
- **AND** the section has generous vertical padding (~12em)

### Requirement: Footer container

The footer SHALL render as a full-width dark section with the brand heading, navigation menu, social icons, and copyright, all centered.

#### Scenario: Footer renders with dark background

- **WHEN** the footer section is visible
- **THEN** the footer has background color `#121212`
- **AND** the footer has vertical padding of approximately `7em`

### Requirement: Brand heading

The footer SHALL display a centered brand heading as a link.

#### Scenario: Brand heading renders

- **WHEN** the footer is visible
- **THEN** a heading link is displayed centered
- **AND** the heading text is white (`#ffffff`)
- **AND** the heading font size is `30px`
- **AND** the heading font weight is `700`
- **AND** the heading has a bottom margin of `30px`

### Requirement: Navigation menu

The footer SHALL display a horizontal navigation menu with uppercase, letter-spaced links below the brand heading.

#### Scenario: Navigation menu renders

- **WHEN** the footer is visible
- **THEN** a horizontal row of navigation links is displayed centered below the heading
- **AND** the links are: Home, Agent, About, Listing, Blog, Contact
- **AND** each link has color `rgba(255, 255, 255, 0.6)`
- **AND** each link is uppercase with `letter-spacing: 1px`
- **AND** each link has horizontal margin of `10px`
- **AND** the menu has a bottom margin of `30px`

### Requirement: Social icons

The footer SHALL display circular social media icon buttons with green accent borders below the navigation menu.

#### Scenario: Social icons render

- **WHEN** the footer is visible
- **THEN** three social icon buttons are displayed centered below the menu
- **AND** the icons represent Twitter, Facebook, and Instagram
- **AND** each icon button is `40px × 40px` with `border-radius: 50%` (circle)
- **AND** each icon button has a `1px solid #a3de83` green border
- **AND** each icon button has a transparent background
- **AND** each icon button has a `0.3s` color transition on hover
- **AND** on hover the icon color changes to `#ffffff`

### Requirement: Copyright line

The footer SHALL display a copyright line at the bottom with a heart icon and a link to Component Dock.

#### Scenario: Copyright line renders

- **WHEN** the footer is visible
- **THEN** a copyright line is displayed centered at the bottom
- **AND** the copyright text has color `rgba(255, 255, 255, 0.3)`
- **AND** the copyright includes a heart icon
- **AND** the attribution links to Component Dock (`https://www.componentdock.com/`)

### Requirement: Accessibility

The footer SHALL be accessible with semantic HTML and proper ARIA attributes.

#### Scenario: Semantic structure

- **WHEN** the footer is rendered
- **THEN** the footer uses a `<footer>` element
- **AND** the brand heading uses an `<h2>` element
- **AND** navigation links use `<a>` elements with `href`
- **AND** social icon links have descriptive `aria-label` attributes
- **AND** all interactive elements are keyboard-focusable

### Requirement: Responsive behavior

The footer SHALL be responsive and display correctly on mobile, tablet, and desktop viewports.

#### Scenario: Mobile layout

- **WHEN** the viewport width is less than `768px`
- **THEN** the navigation links wrap or stack vertically
- **AND** the social icons remain centered
- **AND** all content remains readable

#### Scenario: Desktop layout

- **WHEN** the viewport width is `768px` or greater
- **THEN** the navigation links display in a single horizontal row
- **AND** the social icons display in a horizontal row

## Verification checklist

- [ ] Footer background is `#121212`
- [ ] Brand heading is white, 30px, bold, centered
- [ ] Navigation links are uppercase, letter-spaced, `rgba(255,255,255,0.6)`
- [ ] Social icons are 40x40 circles with `#a3de83` green border
- [ ] Social icons hover to white
- [ ] Copyright line uses `rgba(255,255,255,0.3)`
- [ ] Footer links to Component Dock (not ColorLib)
- [ ] Poppins font family loaded (weights 300-900)
- [ ] Responsive layout works on mobile/tablet/desktop
- [ ] 100% test coverage (lines, functions, branches, statements)
