# Template: Bloom (Flower Shop)

## Purpose

Recreation of ColorLib **Florist** (flower shop template).
- **Source slug:** `florist`
- **Source URL:** https://colorlib.com/wp/template/florist/
- **Preview URL:** https://preview.colorlib.com/theme/florist/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/florist-free-template.jpg
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript

## Design tokens

Extracted from `https://preview.colorlib.com/theme/florist/css/style.css`:

| Token | Value | Usage |
|-------|-------|-------|
| Primary pink | `#f45d96` | Section title color, accents, active filter |
| Dark heading | `#111111` | Buttons, headings |
| Body text | `#444444` | Paragraphs |
| Light gray text | `#888888` / `#999` | Secondary text |
| Page background | `#f7f5fa` | Very light lavender-pink tint |
| Card/surface bg | `#ffffff` | Product cards, blog cards |
| Accent gold | `#ECBA0B` | Optional accent |
| Button primary | bg `#111111`, color `#fff`, `padding: 14px 30px`, `letter-spacing: 4px`, `text-transform: uppercase`, `font-weight: 700` | `.site-btn` — rectangular, no border-radius |
| Font (script/display) | `"Hello Santtiny"` | Decorative hero text (fallback: use a Google script font) |
| Font (serif) | `"Libre Baskerville", serif` | Body text |
| Font (sans heading) | `"Oswald", sans-serif` | Headings / nav |
| Font (sans body) | `"Quicksand", sans-serif` | Body / descriptions |
| Section padding | `100px 0` top/bottom | `.spad` — generous section spacing |
| Product hover | overlay with search/heart/bag icons | Dark semi-transparent overlay on product image hover |
| Category card | image bg + white box overlay with name + item count | Categories displayed as image cards |
| Testimonial bg | Decorative left-aligned PNG image | Testimonial section has floral decoration on left |
| Footer | Dark bg with 4 widget columns | Newsletter + address + links |

## Section order (from preview DOM)

1. **Navbar** — Logo left, nav links (Home, Shop, About, Blog, Contact) center, search + cart icons right; Oswald font
2. **Hero Slider** — owl-carousel, 2+ slides: script-font subtitle "Fresh Flower & Gift Shop", large serif heading "Making beautiful flowers a part of your life.", dark "Shop now" CTA button; hero images as background
3. **Categories** — 4 category cards in a row: "Fresh Flower (25 items)", "Succulent plants (162 items)", "Cactus plants (58 items)", "Furniture tree (25 items)"; each card: image bg + white bottom box with name + count
4. **About** — 2-column: left text (heading "We provide all kinds of fresh flower services" + paragraph about the business), right video placeholder with "Dried flowers are having a renaissance" subtitle; below: 3 feature boxes (100% Freshness, Made by artist, Own courier) each with icon + title + short description; "Contact us" button
5. **New Arrivals (Products)** — filter tabs (All, Bouquet, Flower box, Flower shelf, Basket of flower, Gift combos) + grid of 10 product cards; each card: image + hover overlay (search, heart, bag icons) + name ("Fly Me To The Moon") + price ($27.50); section heading "New Arrivals"
6. **Blog** — "Florist tricks" heading, 3 blog cards in a row; each: image + category tag + title + description + read-more link
7. **Testimonials** — owl-carousel, customer quotes with decorative floral background on left; each: quote text, author name ("Alejandro Houston"), role ("Businessman")
8. **Footer** — dark bg; 4 columns: Company (About us, Services, Contact us), Account (My cart, Wishlist, Login/Register), Newsletter (email input + Subscribe), Get in touch (address, phone, email); copyright line at bottom; Component Dock link

## Gherkin scenarios

### Navbar
```gherkin
Scenario: Logo and navigation links visible
  Given I load the Bloom template
  Then the logo is visible on the left
  And navigation links are displayed: Home, Shop, About, Blog, Contact
  And search and cart icons are visible on the right

Scenario: Mobile menu toggle works
  Given I view the template on a mobile viewport
  When I tap the hamburger menu icon
  Then the mobile navigation menu opens
  And all navigation links are accessible
```

### Hero Slider
```gherkin
Scenario: Hero displays flower shop headline
  Given I load the Bloom template
  Then a slider section is visible
  And a script-font subtitle reads "Fresh Flower & Gift Shop"
  And a serif heading reads "Making beautiful flowers a part of your life."
  And a "Shop now" button is visible

Scenario: Hero slider auto-rotates
  Given the hero slider is visible
  When 5 seconds pass
  Then the slider transitions to the next slide
```

### Categories
```gherkin
Scenario: Four category cards displayed
  Given I scroll to the categories section
  Then 4 category cards are visible in a row
  And each card shows a category name and item count
  And categories include: Fresh Flower, Succulent plants, Cactus plants, Furniture tree

Scenario: Category cards have image backgrounds
  Given the categories section is visible
  Then each category card has a background image
  And a white overlay box shows the category name and count
```

### About
```gherkin
Scenario: About section with features
  Given I scroll to the about section
  Then a heading reads "We provide all kinds of fresh flower services"
  And a description paragraph is present
  And 3 feature boxes are displayed: 100% Freshness, Made by artist, Own courier
  And each feature has an icon, title, and short description

Scenario: Contact button in about section
  Given the about section is visible
  Then a "Contact us" button is present
```

### New Arrivals (Products)
```gherkin
Scenario: Product grid with filter tabs
  Given I scroll to the New Arrivals section
  Then the heading "New Arrivals" is visible
  And filter tabs are displayed: All, Bouquet, Flower box, Flower shelf, Basket of flower, Gift combos
  And at least 8 product cards are shown in a grid

Scenario: Product card interactions
  Given a product card is visible
  Then hovering over the card shows an overlay with search, heart, and cart icons
  And each card displays a product name and price

Scenario: Filter tabs work
  Given the product section is visible
  When I click the "Bouquet" filter tab
  Then only bouquet products are displayed
  And the active tab is highlighted in pink
```

### Blog
```gherkin
Scenario: Blog posts displayed
  Given I scroll to the blog section
  Then the heading "Florist tricks" is visible
  And 3 blog cards are displayed in a row
  And each card has an image, category tag, title, and description

Scenario: Blog card layout
  Given the blog section is visible
  Then each blog card has a category label at the top
  And a post title below the image
  And a short description text
```

### Testimonials
```gherkin
Scenario: Customer testimonials carousel
  Given I scroll to the testimonials section
  Then customer testimonials are displayed
  And each testimonial has a quote, author name, and role
  And a decorative floral background is visible on the left side

Scenario: Testimonial carousel auto-rotates
  Given the testimonials section is visible
  When 5 seconds pass
  Then the carousel shows the next testimonial
```

### Footer
```gherkin
Scenario: Footer with multiple columns
  Given I scroll to the footer
  Then 4 columns are visible: Company, Account, Newsletter, Get in touch
  And a newsletter email input and Subscribe button are present
  And an address, phone number, and email are displayed
  And a copyright line is at the bottom

Scenario: Footer newsletter signup
  Given the footer newsletter is visible
  When I enter an email address and click Subscribe
  Then the form submits (or shows validation)
```

## Verification checklist

- [ ] All 8 sections present in correct order
- [ ] 4 font families loaded (Hello Santtiny, Libre Baskerville, Oswald, Quicksand) via Google Fonts
- [ ] Primary pink (#f45d96) used on section titles and active filters
- [ ] Dark buttons (#111111) with uppercase text and letter-spacing
- [ ] Hero slider auto-rotates between slides
- [ ] Categories section shows 4 cards with image backgrounds
- [ ] About section has 3 feature boxes with icons
- [ ] Products section has filter tabs and 8+ product cards
- [ ] Blog section shows 3 post cards
- [ ] Testimonials on decorative background
- [ ] Footer has 4 columns + newsletter + address
- [ ] Component Dock footer link present
- [ ] No ColorLib references in app code
- [ ] Responsive: mobile menu, stacking grids, filter tabs
- [ ] `public/CNAME` contains `bloom.free.componentdock.com`
- [ ] `homepage` in package.json set to `https://bloom.free.componentdock.com`
