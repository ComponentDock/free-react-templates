# Vessel — Design Notes

## Source Mapping

- ColorLib source: Carries (https://colorlib.com/wp/template/carries/)
- Preview: https://preview.colorlib.com/theme/carries/
- New name: `vessel`
- Category: Logistics / Freight business

## Visual Design (from screenshot + DOM analysis)

Professional logistics/freight company template. Dark navbar, full-width hero
slider with parallax background images, service cards with orange icon badges,
a stats section, hexagon-icon service list, promo features, testimonials
carousel, and a dark footer with newsletter signup. The aesthetic is corporate
and reliable with warm orange accents on a neutral gray/blue palette.

## Section-by-Section Fidelity Notes

### 1. Navbar

- Dark bg `#212121`, logo with icon + brand text left
- Multi-level dropdown menus (Home, About with 6 subs, Service with 4 subs, etc.)
- Utility bar right: user icon, search toggle, cart, language selector (ENG/ARA/CHI)
- Sticky on scroll via JS
- Mobile: hamburger collapse

### 2. Hero Slider

- Full-width background images with dark overlay
- Centered text: uppercase h1, subtitle paragraph, two CTA buttons
- Buttons: outlined style with white border, orange hover
- Multiple slides (at least 2 in the source) — we'll implement single hero or simple carousel
- Parallax effect via `data-stellar-background-ratio`

### 3. Service Cards (gray-bg section)

- 3 equal-width cards on `#F7F9FC` background
- Each card: image with overlaid orange circle icon (fa-ship, fa-plane, fa-truck)
- Card: bold title, description, no explicit button (icon overlap is the visual hook)
- Fade-in animations on scroll

### 4. About / Stats (gray-bg section)

- Two-column layout: form left, text + stats right
- Form: email-style input + "Send" button in `#EEF1F5` background
- Stats: 3 counters in orange-background boxes (120, 100, 30 "Project Done")
- Text: heading about 25 years experience, lorem ipsum paragraphs

### 5. Service Catalog

- White bg, split layout
- Left: "Our Service" heading + description + "Learn More" link
- Right: dark-bg (`#5D6B82`) catalog area with "Why Choose Us?" checklist
- Checklist items with blue checkmark icons

### 6. Service List (hexagon icons)

- Dark parallax background `#5D6B82` with image overlay
- Right-aligned list of 4 services
- Each: hex-shaped icon container (`border-radius: 1em / 3.5em`) + title + description + link
- Services: Ware House, Road Freight, Sea Freight, Air Freight

### 7. Promo Features

- White background, 2x2 grid
- 4 blocks: Our Location, Latest News, 24/7 Support, Fast Delivery
- Each: orange circle icon (`#F4F7F9` bg) + h3 title + description

### 8. Promo CTA

- Parallax background image with dark overlay
- Centered headline about international freight
- "Get a Quote" button (orange accent)

### 9. Testimonials

- White background, centered
- "What Client's Say" heading
- Circular client photos in carousel with prev/next arrows
- Quote text + client name (h3) + role (p)

### 10. Footer

- Dark bg `#5D6B82` (`dark-bg` class)
- Top: newsletter signup (h2 "Weekly Newsletter" + email input + subscribe button)
- Divider line
- Bottom: 4 columns (About Us info, Latest Tweets, Customer Service links, Instafeed images)
- Copyright bar → replace Colorlib with Component Dock link

## Key Design Tokens for Tailwind @theme

```css
@theme {
  --color-brand-primary: #0083ff; /* blue-bg */
  --color-brand-accent: #f39c12; /* orange — buttons, icons, highlights */
  --color-brand-dark: #5d6b82; /* dark-bg — footer, service icons */
  --color-brand-nav: #212121; /* navbar background */
  --color-brand-heading: #1a1a1a; /* near-black headings */
  --color-brand-body: #687284; /* body text */
  --color-brand-light: #f7f9fc; /* gray-bg sections */
  --color-brand-quote: #eef1f5; /* quote form area */
}
```

## Component Breakdown

| Component      | Sections used in | Notes                                     |
| -------------- | ---------------- | ----------------------------------------- |
| Navbar         | 1                | Sticky, multi-level dropdown, utility bar |
| HeroSlider     | 2                | Background images, parallax, CTA buttons  |
| ServiceCards   | 3                | 3-column grid, icon badges                |
| AboutStats     | 4                | Form + stat counters                      |
| ServiceCatalog | 5                | Split layout, checklist                   |
| ServiceList    | 6                | Hexagon icons, dark parallax bg           |
| PromoFeatures  | 7                | 2x2 icon grid                             |
| PromoCTA       | 8                | Parallax CTA banner                       |
| Testimonials   | 9                | Carousel with photos and quotes           |
| Footer         | 10               | Newsletter, 4-column, dark bg             |
