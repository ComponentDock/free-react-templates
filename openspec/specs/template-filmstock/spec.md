# Template: Filmstock (Photography Portfolio)

## Purpose

Recreation of ColorLib **Photosen** — a photography portfolio template with a full-bleed image grid. Each category card shows a grayscale photo that transitions to color on hover, with the category name and a "More Photos" CTA overlaid in the center.

- **Source slug:** `photosen`
- **Preview URL:** https://preview.colorlib.com/theme/photosen/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/photosen-free-template.jpg
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript

## Design tokens

### Fonts

- **Primary:** `'Josefin Sans', sans-serif` — used for headings, nav, body
- **Monospace accent:** `'Roboto Mono', monospace` — for code/accent text (minimal use)

### Colors

| Token                  | Hex                     | Usage                                   |
| ---------------------- | ----------------------- | --------------------------------------- |
| `bg-white`             | `#ffffff`               | Page background                         |
| `text-dark`            | `#212529`               | Body text                               |
| `nav-link`             | `rgba(255,255,255,0.5)` | Navbar links on dark/transparent header |
| `nav-active`           | `#0d6efd`               | Active nav link, hover color            |
| `btn-white-border`     | `#ffffff`               | "More Photos" button border and text    |
| `btn-white-hover-bg`   | `#ffffff`               | Button hover background                 |
| `btn-white-hover-text` | `#000000`               | Button hover text                       |
| `overlay-default`      | `rgba(0,0,0,0)`         | Image overlay (transparent by default)  |
| `overlay-hover`        | `rgba(0,0,0,0.4)`       | Image overlay on hover                  |
| `footer-bg`            | `#333333`               | Footer background                       |
| `footer-text`          | `rgb(115,115,115)`      | Footer paragraph text                   |
| `footer-link`          | `#999999`               | Footer links                            |
| `footer-link-hover`    | `#ffffff`               | Footer link hover                       |

### Spacing / Layout

- **Grid:** 3-column (`col-lg-4`) responsive grid, full-width container-fluid
- **Image card margin-bottom:** 30px
- **Navbar:** transparent/dark background, `py-3` padding
- **Footer:** `py-4` (mobile), `py-8` (desktop), centered text

### Button style

- `.btn-outline-white`: 2px white border, uppercase, 11px font-size, 0.1em letter-spacing
- Hover: white background, black text

### Image treatment

- Default: grayscale filter (`filter: grayscale(1)`)
- Hover: full color (`filter: none`) + slight scale (1.01)
- Overlay: transparent → rgba(0,0,0,0.4) on hover

## Requirements

### Requirement: Filmstock Photography Portfolio MUST provide a complete photography portfolio template with navbar, gallery grid, and footer

Filmstock SHALL provide a complete photography portfolio template with navbar, gallery grid, and footer.

#### Scenario: Page loads with navbar and gallery grid

Given a user visits the Filmstock homepage
Then they see a dark/transparent navbar with the logo "Filmstock"
And the navbar has navigation links: Home, Gallery, Services, About, Contact
And the navbar shows social icons (Facebook, Twitter, Instagram, YouTube)
And the main content area displays a 3-column grid of photo category cards

#### Scenario: Gallery cards show grayscale photos with overlay

Given the page is loaded
Then each gallery card displays a full-bleed photo
And the photo has a grayscale filter applied by default
And the category name is centered over the photo in white text
And a "More Photos" button is below the category name

#### Scenario: Gallery card hover reveals color photo

Given the user hovers over a gallery card
Then the grayscale filter is removed and the photo shows in full color
And a dark overlay (rgba(0,0,0,0.4)) appears over the photo
And the card image scales slightly (1.01x)

#### Scenario: Gallery categories

Given the page is loaded
Then the gallery shows 9 category cards
And the categories include: Nature, Portrait, People, Architecture, Animals, Sports, Travel

#### Scenario: Footer displays copyright

Given the user scrolls to the bottom
Then they see a dark footer (#333333 background)
And the footer shows a copyright notice with the current year
And the footer links to Component Dock

#### Scenario: Mobile responsive layout

Given a user views the page on a mobile device
Then the navbar collapses to a hamburger menu
And the gallery grid stacks to a single column
And the footer remains centered

#### Scenario: Navbar is transparent/dark

Given the page loads
Then the navbar has a dark or transparent background
And the logo text is white
And the nav links are semi-transparent white (rgba(255,255,255,0.5))
And nav links turn blue (#0d6efd) on hover

## Verification checklist

- [ ] Fonts: Josefin Sans loaded via Google Fonts
- [ ] Navbar: transparent/dark background, white logo, semi-transparent links
- [ ] Gallery: 3-column grid (col-lg-4), 9 cards
- [ ] Image cards: grayscale default, color on hover, overlay transition
- [ ] Buttons: white outline, uppercase, correct sizing
- [ ] Footer: dark background (#333333), copyright text
- [ ] Footer: links to Component Dock (not ColorLib)
- [ ] Mobile: hamburger menu, stacked grid
- [ ] No ColorLib references in app code
- [ ] 100% test coverage
