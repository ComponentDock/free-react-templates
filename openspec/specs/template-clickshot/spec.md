# Template: ClickShot (Photography Studio / Business)

## Purpose

Recreation of ColorLib **Shotgear** — a photography studio / creative agency template.
- **Source slug:** `shotgear`
- **Preview URL:** https://preview.colorlib.com/theme/shotgear/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/shotgear-free-template.jpg
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript
- **Category:** Business (photography / creative studio)

## Design Tokens (extracted from live preview CSS)

### Fonts
- **Headings:** `"Oswald", sans-serif` — used for h1–h6, buttons
- **Body:** `"Roboto", sans-serif` — used for paragraphs, nav, general text

### Colors
| Token | Hex | Usage |
|-------|-----|-------|
| Brand accent | `#ff4800` | Buttons hover, links hover, accent highlights |
| Dark primary | `#182028` | Headings, button backgrounds, dark UI elements |
| Body text | `#888888` | Paragraph text |
| Muted text | `#999999` | Secondary labels, button2 default text |
| Section subtitle | `#1e2528` | Section title `p` elements |
| Light heading | `#dddfdf` | Gallery/service section title `h2` (decorative) |
| Review label | `#a7a8a9` | Review section `h5` labels |
| Copyright text | `#777777` | Footer copyright |
| White | `#fff` | Banner text, card backgrounds, pricing cards |
| Footer bg | `#1e2528` | Footer area background |
| Copyright bar | `#2d3032` | Copyright strip below footer |

### Buttons
- **btn_1 (primary CTA):** transparent background, white text (`#fff`), Oswald font, uppercase, `letter-spacing: 2px`, hover → `#ff4800` text + background accents. Border-radius: none (sharp).
- **btn_2 (secondary):** `#182028` background, `#999` text, `border-radius: 50px` (pill), Oswald font, uppercase, `padding: 12px 44px`, `border: 2px solid #182028`. Hover → `#ff4800` background + white text.

### Section Backgrounds
- **Banner:** background-image (photography-based, full-width cover)
- **About Us:** white/light
- **Gallery:** light (filterable grid overlay on images)
- **Services:** light
- **Reviews:** image-based (review_bg.png)
- **Pricing:** white cards on light background
- **Blog:** light
- **Footer:** `#1e2528` (dark)
- **Copyright strip:** `#2d3032`

### Layout
- Bootstrap-style grid (`container` / `container-fluid`)
- Section padding: `140px` top/bottom (responsive: 100px / 70px)
- Gallery: masonry-style filterable grid (6 images, categories: All, Wedding, Fashion, Portrait, Magazine)
- Services: 2-column asymmetric (Wedding photography + Nature photography with images)
- Pricing: 3-column cards (all show Standard $50/mo)
- Blog: 3-column cards
- Footer: 4-column (Our Service links, Contact Info, Instagram grid, Newsletter + social icons)

## Gherkin Requirements

### Navbar
- **Scenario: Navbar renders with all navigation links**
  - Given the user loads the page
  - Then the navbar displays links: Home, About, Services, Portfolio, Blog, Pages, Contact
  - And a cart/bag icon is visible
  - And the navbar is responsive (collapses on mobile)

### Banner / Hero
- **Scenario: Hero banner displays headline and CTA**
  - Given the user is on the homepage
  - Then a full-width hero banner is displayed with a background image
  - And the text reads "Model Photography" (subtitle) and "Creative Studio" (headline)
  - And a "view work" CTA button is visible

### About Us
- **Scenario: About section displays studio description**
  - Given the user scrolls to the About section
  - Then the heading reads "About our studio"
  - And a subheading quote about photography is displayed
  - And body text describes the studio
  - And a "read more" button is visible

### Gallery (Portfolio)
- **Scenario: Gallery displays filterable portfolio grid**
  - Given the user scrolls to the Gallery section
  - Then a section title "Check latest work" is displayed
  - And filter tabs are shown: All photos, Wedding, Fashion, Portrait, Magazine
  - And 6 gallery items are displayed in a masonry grid
  - And each gallery item shows a category label and title on hover

### Services
- **Scenario: Services section displays photography offerings**
  - Given the user scrolls to the Services section
  - Then the heading reads "what we offer"
  - And two service cards are shown: Wedding photography and Nature photography
  - And each card has an icon, title, description, and "read more" button
  - And each card has an accompanying image

### Reviews / Testimonials
- **Scenario: Reviews section displays testimonial slider**
  - Given the user scrolls to the Reviews section
  - Then a testimonial slider is displayed
  - And each slide shows a heading, quote text, and author name with title
  - And a decorative image is shown alongside the slider

### Pricing
- **Scenario: Pricing section displays three plans**
  - Given the user scrolls to the Pricing section
  - Then the heading reads "pricing plan"
  - And 3 pricing cards are displayed in a row
  - And each card shows a plan name, price ($50.00/mo), feature list, and "book Now" button
  - And cards have white backgrounds with transparent borders

### Blog
- **Scenario: Blog section displays latest posts**
  - Given the user scrolls to the Blog section
  - Then the heading reads "Latest story"
  - And 3 blog post cards are displayed
  - And each card shows an image, author/date, title, and excerpt

### Footer
- **Scenario: Footer displays contact info and newsletter**
  - Given the user scrolls to the footer
  - Then 4 columns are displayed: Our Service links, Contact Info, Instagram grid, Newsletter
  - And social media icons (Facebook, Twitter, Instagram, Skype) are visible
  - And a newsletter email input with submit button is present
  - And a copyright bar is displayed at the bottom
  - And the footer links to Component Dock (`https://www.componentdock.com/`)

## Verification Checklist

- [ ] All sections render with correct headings and content
- [ ] Navbar is responsive with hamburger menu on mobile
- [ ] Hero banner has background image and centered text
- [ ] Gallery filter tabs work (show/hide items by category)
- [ ] Testimonial slider auto-advances or has navigation
- [ ] Pricing cards display consistently
- [ ] Blog cards show images, titles, and excerpts
- [ ] Footer has 4 columns with newsletter form
- [ ] Footer links to Component Dock
- [ ] Brand color `#ff4800` is used for hover states and accents
- [ ] Oswald font is used for headings and buttons
- [ ] Roboto font is used for body text
- [ ] Pill-shaped buttons (border-radius 50px) on secondary CTAs
- [ ] No ColorLib references in app code
- [ ] CNAME file present with `clickshot.free.componentdock.com`
- [ ] Tests pass with 100% coverage
- [ ] Typecheck passes
- [ ] Lint passes
- [ ] Build succeeds
