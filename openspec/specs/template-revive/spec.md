# Template: Revive (Creative Portfolio / Blog)

## Purpose

Recreation of ColorLib's **Rea** template — a creative portfolio and blog
template with a masonry grid layout, animated typing headline, and clean
pink-accent aesthetic.

- **Source:** https://colorlib.com/wp/template/rea/
- **Preview:** https://preview.colorlib.com/theme/rea/
- **New name:** `revive`
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript

## Design Tokens

| Token              | Value                                     | Notes                                      |
| ------------------ | ----------------------------------------- | ------------------------------------------ |
| Brand color        | `#f271ab` (pink)                          | Primary accent — links, hover, selection, hearts |
| Text color         | `#2f2f2f` / `#222222` (dark gray)        | Body and headings                          |
| Background         | `#fff` (white)                            | Page and card backgrounds                  |
| Blog section bg    | `#F5F5F5` (light gray)                    | Behind the masonry grid                    |
| Footer text        | `#7e7e7e` (medium gray)                   | Footer links and paragraphs                |
| Category text      | `#a5a5a5` (gray)                          | Uppercase category labels, like counts     |
| Secondary text     | `#8d8d8d`                                 | Metadata, secondary info                   |
| Error/link color   | `#FD3137`                                 | Rare accent, link pages                    |
| Font family        | `Lato` (Google Fonts) — weights 300,400,700 | Primary and only font family            |
| Body font size     | 20px, line-height 35px                    | Base reading                               |
| Heading font size  | 38px (h1), 34px (h2), 32px (h3)          | Headings in content area                   |
| Button style       | Border 2px solid `#f271ab`, color `#f271ab`, padding 18px 50px, no border-radius, 700 weight | Outline buttons |
| Button hover       | Background `#f271ab`, color `#fff`        | Fill on hover                              |
| Card image radius  | 2px top corners                           | Rounded top on grid images                 |
| Card content radius| 2px bottom corners                        | Rounded bottom on content area             |
| Card border        | 15px solid transparent (spacing)          | Grid items have transparent border for gap |
| Content width      | 1170px max                                | Main content container                     |
| Grid width         | 1200px max                                | Masonry grid container                     |
| Grid item sizes    | 300px (1/4), 600px (1/2), 1200px (full)  | Responsive masonry columns                 |
| Card overlay       | `rgba(22,31,50, 0.5)`                    | Semi-transparent dark overlay on images    |
| Social icons       | Font Awesome (twitter, behance, dribbble, facebook, rss) | 26px, color #CACACA |
| Menu overlay       | Full-screen white overlay, 100% height    | Slide-in nav from hamburger                |
| Hamburger lines    | 4 lines, black (#000), 4px height         | Animated toggle                            |
| Search field       | Lato 700, 35px, centered, transparent bg  | In full-screen menu overlay                |
| Footer layout      | 3-column (categories, nav, social+copy)   | Columns ~30.6% each, 4% margin            |

## Section Structure

1. **Header / Hero** — Logo (80×95px) + animated typing headline ("pixel precise web resources / psd files / mockups to suit all your needs.") + hamburger toggle
2. **Portfolio Grid (Masonry)** — Isotope-style masonry grid with mixed column sizes (full, half, quarter), hover image swap, view/download counts, category tags, post titles, heart/like interaction
3. **Load More** — Arrow-down button to load additional items
4. **Footer** — 3-column: categories list, navigation links (About, Features, Contact), social icons + copyright with heart animation

## Gherkin Requirements

### Scenario: Header renders with logo and animated headline
  Given the user loads the page
  Then the header displays a logo image
  And the headline shows "pixel precise" with an animated word cycling through "web resources", "psd files", "mockups"
  And the subline reads "to suit all your needs."

### Scenario: Hamburger menu opens full-screen overlay
  Given the user is on the page
  When the user clicks the hamburger toggle icon
  Then a full-screen white overlay appears
  And navigation links (Home, About, Contact, Features) are displayed centered
  And social media icons (Twitter, Behance, Dribbble, Facebook, RSS) appear below the nav
  And a search input is available

### Scenario: Portfolio grid displays masonry layout
  Given the user views the portfolio section
  Then items are displayed in a masonry grid layout
  And items have varying widths (full, half, quarter)
  And each item has an image with hover swap effect
  And each item shows view count, download count, category, title, and like count

### Scenario: Grid item hover reveals overlay and secondary image
  Given the user hovers over a grid item
  Then a semi-transparent dark overlay appears on the image
  And the hover image fades in
  And view/download count badges become visible

### Scenario: Like heart interaction
  Given the user views a grid item
  When the user clicks the heart icon
  Then the like count increments
  And the heart fills with the brand pink color
  And a pulse animation plays

### Scenario: Load more button triggers additional items
  Given the user scrolls to the bottom of the grid
  When the user clicks the load-more arrow
  Then additional portfolio items load into the grid

### Scenario: Footer displays three columns
  Given the user reaches the footer
  Then categories are listed (Branding, Fonts, Icons, Misc, Mockup, Play, Vectors, Video)
  And navigation links are shown (About, Features, Contact)
  And social icons appear with copyright text
  And the footer links to Component Dock

### Scenario: Footer social icons are interactive
  Given the user is in the footer
  When the user hovers over a social icon
  Then the icon color transitions to the brand pink

## Verification Checklist

- [ ] Header: logo + animated typing headline render correctly
- [ ] Header: hamburger toggle opens/closes full-screen menu overlay
- [ ] Menu overlay: nav links, social icons, search input present
- [ ] Portfolio grid: masonry layout with mixed column sizes
- [ ] Grid items: hover image swap, overlay, view/download counts
- [ ] Grid items: category labels (uppercase, letter-spaced)
- [ ] Grid items: post titles with correct typography
- [ ] Like heart: click interaction, count increment, pulse animation
- [ ] Load more: arrow button visible, triggers additional items
- [ ] Footer: 3-column layout with categories, nav, social+copyright
- [ ] Footer: Component Dock link present
- [ ] Typography: Lato font family (300/400/700) applied throughout
- [ ] Colors: brand pink (#f271ab) used for accents, hovers, selection
- [ ] Colors: text (#2f2f2f), bg (#fff), blog bg (#F5F5F5) match source
- [ ] Buttons: outline style with 2px pink border, fill on hover
- [ ] Responsive: grid collapses appropriately on smaller screens
