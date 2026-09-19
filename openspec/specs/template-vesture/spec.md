# Template: Vesture (E-Commerce / Fashion)

## Purpose

Recreation of ColorLib "Fashe" — a modern fashion e-commerce template.
- **Source slug:** `fashe`
- **Preview URL:** https://preview.colorlib.com/theme/fashe/
- **ColorLib page:** https://colorlib.com/wp/template/fashe/
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript
- **New name:** `vesture` (different from source; "vesture" = clothing/attire)

## Design tokens

Extracted from `https://preview.colorlib.com/theme/fashe/assets/css/style.css`:

### Colors

| Token | Scheme 1 (main) | Scheme 2 (warm bg) | Scheme 3 (dark) | Scheme 4 (accent) |
|---|---|---|---|---|
| Background | `#FFFFFF` (255 255 255) | `#F4F2EE` (244 242 238) | `#141414` (20 20 20) | `#C8553D` (200 85 61) |
| Text | `#141414` (20 20 20) | `#141414` | `#F4F2EE` | `#FFFFFF` |
| Button | `#141414` (black) | `#141414` | `#F4F2EE` | `#FFFFFF` |
| Button Label | `#FFFFFF` | `#F4F2EE` | `#141414` | `#C8553D` |
| Outline Button | `#141414` | `#141414` | `#F4F2EE` | `#FFFFFF` |
| Accent | `#C8553D` (200 85 61) | `#C8553D` | `#E2A087` (226 160 135) | `#FFFFFF` |
| Border | `#E4E4E4` (228 228 228) | `#DCD8D0` (220 216 208) | `#333333` | `#D97C68` (217 124 104) |

**Primary brand color:** `#C8553D` (terracotta/rust) — used as accent in schemes 1–2, background in scheme 4.
**Neutral warm:** `#F4F2EE` — secondary section background (scheme 2).
**Dark:** `#141414` — dark sections (scheme 3).

### Typography

- **Font family:** `Assistant` (Google Fonts), fallback `ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif`
- **Body weight:** 400
- **Heading weight:** 700
- **Heading style:** normal

### Borders & Radii

- `--radius-base: 0px` (square corners)
- `--radius-media: 0px`
- Buttons use 0px radius (sharp edges)
- Newsletter input has small radius (2px–3px)

### Layout

- Sections alternate between color schemes 1 (white), 2 (warm beige), 3 (dark)
- Product grid: 3 columns
- Category cards: large image with text overlay
- Sticky top announcement bar (dark background)

## Section structure (from live preview)

1. **Announcement bar** — scrolling marquee: "Free shipping over $100 · 30 day returns · Carbon neutral delivery · Natural fibres only" — color scheme 3 (dark)
2. **Navbar** — logo left, nav links center (Shop, Collections, Journal, About), cart icon right — color scheme 1
3. **Hero / Banner** — large hero image with overlay text "New season essentials" and shop now CTA — color scheme 1
4. **Shop by category** — 3 cards (Clothing, Jewellery, Bags) with image + title — color scheme 1
5. **New arrivals** — product grid (6 products) with image, title, price, "Quick add" button — color scheme 1
6. **Made to last** — editorial split (text left, image right) — color scheme 2 (warm beige)
7. **Why shop with us** — 3 feature cards (Free shipping, 30 day returns, Made responsibly) — color scheme 1
8. **Journal / Blog** — 2-3 blog cards with image, date, category tag, title, excerpt — color scheme 1
9. **Footer** — 4 columns (Brand/Shop/Help/Newsletter), bottom bar with copyright — color scheme 3 (dark)

## Gherkin requirements

### Scenario: Announcement bar displays correctly
- **Given** the user visits the homepage
- **Then** an announcement bar is visible at the top of the page
- **And** it displays scrolling text with shipping, returns, delivery, and material info

### Scenario: Navbar navigation
- **Given** the user is on any page
- **Then** the navbar displays the brand name on the left
- **And** navigation links are present: Shop, Collections, Journal, About
- **And** a cart icon is displayed on the right

### Scenario: Hero section
- **Given** the user views the homepage
- **Then** a hero banner is displayed with a large background image
- **And** the text "New season essentials" is displayed
- **And** a "Shop Now" call-to-action button is present

### Scenario: Shop by category section
- **Given** the user scrolls to the category section
- **Then** 3 category cards are displayed (Clothing, Jewellery, Bags)
- **And** each card has an image and a title
- **And** clicking a category navigates to the shop page

### Scenario: New arrivals product grid
- **Given** the user scrolls to the new arrivals section
- **Then** "New arrivals" heading is displayed
- **And** a "View all" link is present
- **And** at least 6 product cards are shown
- **And** each product card shows an image, title, price, and "Quick add" button
- **And** sale items show both original and discounted prices

### Scenario: Made to last editorial section
- **Given** the user scrolls to the editorial section
- **Then** the heading "Made to last" is displayed
- **And** descriptive text about natural fibres and construction is shown
- **And** an image is displayed alongside the text
- **And** a "Our story" CTA link is present

### Scenario: Why shop with us features
- **Given** the user scrolls to the features section
- **Then** "Why shop with us" heading is displayed
- **And** 3 feature cards are shown: Free shipping, 30 day returns, Made responsibly
- **And** each card has a title and description

### Scenario: Journal section
- **Given** the user scrolls to the blog section
- **Then** "Journal" heading is displayed
- **And** "All posts" link is present
- **And** at least 2 blog post cards are shown
- **And** each card displays an image, date, category, title, and excerpt

### Scenario: Footer
- **Given** the user scrolls to the bottom of the page
- **Then** the footer displays 4 columns: Brand, Shop, Help, Newsletter
- **And** the newsletter section has an email input and submit button
- **And** copyright text is displayed at the bottom
- **And** a link to `https://www.componentdock.com/` is present

### Scenario: Responsive design
- **Given** the user views the page on a mobile device (viewport < 768px)
- **Then** the navbar collapses to a hamburger menu
- **And** the product grid switches to a single-column layout
- **And** category cards stack vertically

## Verification checklist

- [ ] Announcement bar renders with marquee/scrolling text
- [ ] Navbar with brand, nav links, and cart icon
- [ ] Hero section with background image and CTA
- [ ] Shop by category: 3 category cards with images
- [ ] New arrivals: product grid with cards, prices, Quick add
- [ ] Made to last: editorial split layout
- [ ] Why shop with us: 3 feature cards
- [ ] Journal: blog post cards with metadata
- [ ] Footer: 4 columns, newsletter, copyright, Component Dock link
- [ ] Responsive: mobile hamburger, single-column grid
- [ ] Brand color #C8553D used as accent
- [ ] Font: Assistant (Google Fonts)
- [ ] Sharp corners (0px radius) matching original
- [ ] Color scheme alternation (white / warm beige / dark)
- [ ] 100% test coverage
- [ ] No ColorLib references in app code
