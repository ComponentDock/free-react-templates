# Template: CurateLab (Portfolio / Design Resources Gallery)

## Purpose

Recreation of the ColorLib "Reopen" template as a React 19 + Vite + Tailwind CSS 4 + TypeScript single-page template.

- **Source slug:** `reopen`
- **Source URL:** https://colorlib.com/wp/template/reopen/
- **Live preview:** https://preview.colorlib.com/theme/reopen/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/reopen-free-template.jpg
- **New name:** `curatelab`
- **Package:** `@free-react-templates/curatelab`
- **Deploy target:** `curatelab.free.componentdock.com`

## Design Tokens (extracted from preview CSS)

| Token | Value | Usage |
|-------|-------|-------|
| Font family | `'Roboto', sans-serif` | Body, headings, all text |
| Font weights | 300 (body), 400 (normal), 700 (bold) | Body 300, bold text 700 |
| Body font-size | 24px (scaled to responsive) | Base body text |
| Body line-height | 43px | Base body text |
| Body color | `#222222` | Primary text |
| Body background | `#ECECEC` | Page background (light gray) |
| Wrapper background | `#FFFFFF` | `.body-wrapper` white card |
| Link hover | `#f277ae` | Pink accent on hover |
| Toggle lines | `#c2c2c2` (inactive), `#000000` (active) | Hamburger menu |
| Portfolio overlay bg | `#FFFFFF` | Hover card overlay |
| Portfolio type text | `#9a9a9a` | Subtitle on hover card |
| Footer text | `#7e7e7e` | Footer copyright |
| Footer border | `#cccccc` | Divider line |
| Grid item border | `15px solid #FFFFFF` | Image card spacing |
| Image border-radius | `2px` | Very slight rounding |
| Grid cell width | `400px` (1/3), `800px` (2/3), `1200px` (full) | Masonry-like grid |

### Fonts to load via Google Fonts

- `Roboto:300,400,700`
- `Montserrat:400,700` (used for logo/heading weight contrast — secondary)
- `PT Serif:400` (used for decorative text — optional)

## Sections (in order)

### 1. Navbar (sticky / fixed header)
- Centered logo image (the "R" with underline mark)
- Hamburger toggle (3 bars: `.first-menu-line`, `.second-menu-line`, `.third-menu-line`) top-right
- On click, full-screen overlay menu with links: Home, About, Story, Blog, Contact, More
- The menu slides in; toggle animates to X (CSS transform rotate 45deg/−45deg)

### 2. Hero
- Centered text block: "Handpicked **design resources** crafted with much ❤ and care for every detail"
- Subtitle: "free downloads only on fridays"
- White background (part of body-wrapper)

### 3. Portfolio Grid
- CSS Grid / masonry-like layout using explicit widths (400px / 800px columns)
- Items have 15px white border spacing
- Each item is an `<a>` wrapping an `<img>` with an overlay div
- Overlay shows on hover: white background, centered title + subtitle (category/type)
- Grid items (9 total, example categories): Smartphone/Gallery, Book/Video, Doodle/Video, Foster/Gallery (2/3 width), Starlight/Article, Open Book/Video, Burger/Video, Printscreen/Article, Bottle/Article
- Uses placeholder images via `https://picsum.photos/seed/<name>/<w>/<h>`

### 4. Load More
- Centered arrow image (down-arrow) with hover scale animation (0.9)
- 100x100px

### 5. Footer
- Copyright line: "© [year] All rights reserved | Made with ❤ by Component Dock"
- Social icons row: Twitter, Behance, Dribbble, Facebook, RSS
- Links to `https://www.componentdock.com/`
- Footer links color: `#7e7e7e`, hover: `#f277ae`

## Gherkin Requirements

### Background
  Given the app is loaded at the root URL
  And the viewport is desktop-sized (1200px+)

### Scenario: Navbar renders with logo and hamburger
  Given the page is loaded
  Then the navbar should display a centered logo image
  And a hamburger toggle with three bars should be visible top-right

### Scenario: Hamburger toggle opens menu overlay
  Given the page is loaded
  When the user clicks the hamburger toggle
  Then a full-screen menu overlay should appear
  And it should list links: Home, About, Story, Blog, Contact, More
  And the hamburger bars should animate into an X shape

### Scenario: Menu overlay closes on toggle or link click
  Given the menu overlay is open
  When the user clicks the toggle or a menu link
  Then the menu overlay should close
  And the toggle should animate back to three bars

### Scenario: Hero section displays headline and subtitle
  Given the page is loaded
  Then the hero section should show the headline "Handpicked design resources crafted with much ❤ and care for every detail"
  And the subtitle "free downloads only on fridays" should be visible below

### Scenario: Portfolio grid renders items
  Given the page is loaded
  Then a portfolio grid should display 9 items
  And each item should show an image
  And one item should span 2/3 width (the Foster item)
  And the remaining items should span 1/3 width

### Scenario: Portfolio item hover overlay
  Given the page is loaded
  When the user hovers over a portfolio item
  Then a white overlay should appear over the image
  And it should display the item title (e.g. "SMARTPHONE")
  And it should display the item category (e.g. "GALLERY")

### Scenario: Load more button renders
  Given the page is loaded
  Then a centered load-more arrow image should be visible below the grid
  And it should have a hover scale animation (scale 0.9)

### Scenario: Footer renders with copyright and social icons
  Given the page is loaded
  Then the footer should show a copyright line with the current year
  And it should include social icons: Twitter, Behance, Dribbble, Facebook, RSS
  And the footer should link to Component Dock

### Scenario: Page has correct background treatment
  Given the page is loaded
  Then the outer page background should be light gray (#ECECEC)
  And the body wrapper should have a white (#FFFFFF) background
  And there should be a 30px margin around the wrapper

### Scenario: Responsive grid collapses
  Given the viewport is below 768px
  Then all grid items should display full-width
  And the portfolio overlay text should use smaller font (14px)

## Verification Checklist

- [ ] Spec validated with `npm run spec:validate`
- [ ] All Gherkin scenarios have corresponding Vitest tests
- [ ] 100% line/function/branch/statement coverage
- [ ] No ColorLib references in app code (only spec + TEMPLATES.md)
- [ ] Footer links to `https://www.componentdock.com/`
- [ ] Public CNAME: `curatelab.free.componentdock.com`
- [ ] Package name: `@free-react-templates/curatelab`
- [ ] Vite config registers `injectUiSource()`
- [ ] Uses Roboto font via Google Fonts link in index.html
- [ ] Uses `cn()` from packages/ui for class composition
- [ ] Placeholder images via picsum.photos with deterministic seeds
- [ ] Grid layout matches: 400px cells, 15px white borders, 2/3 span for featured
- [ ] Hover overlay: white background, title + category, absolute positioning
- [ ] Hamburger toggle: CSS animation (bars → X), overlay menu
- [ ] Page background #ECECEC, wrapper background #FFFFFF, 30px margin
