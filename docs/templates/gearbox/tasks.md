# Gearbox — Implementation Tasks & Design Notes

## Template Identity

- **New name:** gearbox
- **Source:** ColorLib AutoMotive (https://colorlib.com/wp/template/automotive/)
- **Preview:** https://preview.colorlib.com/theme/automotive/
- **Package:** @free-react-templates/gearbox
- **Deploy:** gearbox.free.componentdock.com

## Section Order (implement in this order)

### 1. Navbar
- **Structure:** Two-tier header
  - Top bar: dark bg (#25282C), phone + hours on left, "Find us on map" + social icons on right
  - Main bar: logo left, nav links center (Home, Services, Shop, Pages dropdown, Blog), search + cart icons right
- **Fidelity notes:** Offcanvas mobile menu on small screens. Dropdown under "Pages" with sub-links.
- **Components:** `Navbar.tsx` (top bar + main nav + mobile toggle)

### 2. Hero
- **Structure:** Full-width section with background image (picsum.photos/seed/gearbox-hero/1920/800)
- **Content:** "Welcome To" small span (40px, weight 400) + "Gearbox Garage" main heading (60px, 700, white), subtitle paragraph, "Our Services" primary button (#5F67FF)
- **Fidelity notes:** Text is white, overlay on dark background image. Button is square (no border-radius).
- **Components:** `Hero.tsx`

### 3. Services
- **Structure:** Section title "What We Do?" centered, then 4 service cards in alternating image/text grid
- **Layout:** Each service = icon image + title + description, alternating with a photo on desktop. 2-column on mobile.
- **Services:** Engine Overhaul, Power Steering, Oil Change, Upgrades Car
- **Fidelity notes:** Icons from lucide-react. Alternating left-right layout on desktop.
- **Components:** `Services.tsx`

### 4. Choose Us
- **Structure:** Split layout — left half is background image, right half has content
- **Content:** "20 Years Experience" heading, description, 4 checklist items with checkmark icons, "About Us" CTA button
- **Fidelity notes:** The image side takes the left, text/content takes offset-right. Background image via picsum.photos.
- **Components:** `ChooseUs.tsx`

### 5. Products
- **Structure:** Section title "Our Products" centered, then 4 product cards in a 4-column grid
- **Product card:** Image with hover overlay (heart, eye, exchange icons), product name, price, "Add To Cart" link
- **Fidelity notes:** Hover effect reveals action icons over image. Price shown, cart link styled as small button.
- **Components:** `Products.tsx`, `ProductCard.tsx`

### 6. Testimonial
- **Structure:** Full-width section with carousel/slider
- **Content:** 3 testimonial items, each with quotation icon + quote text
- **Fidelity notes:** Use a simple CSS-based carousel or manual state. Dots navigation at bottom.
- **Components:** `Testimonial.tsx`

### 7. Counter/Statistics
- **Structure:** Background image section, overlapping previous section slightly (margin-top: -120px)
- **Content:** "About Our Statistics" title, 4 stat items with icon + number + label
- **Stats:** All Projects (560+), Project Completed (560+), Customers Action (560+), Awards Winner (560+)
- **Fidelity notes:** Use animated counter on scroll (intersection observer). Background image via picsum.photos.
- **Components:** `Counter.tsx`

### 8. Latest News
- **Structure:** Section title "Latest News" centered, then 3 blog cards in a 3-column grid
- **Blog card:** Background image with date overlay, article title, excerpt, "Continue Reading" link
- **Fidelity notes:** Date overlaid on the image. "Continue Reading" styled as a small link/button.
- **Components:** `LatestNews.tsx`, `NewsCard.tsx`

### 9. Footer
- **Structure:** Three parts:
  - **Top row:** 3 contact cards (Appointment, Phone, Hours) on dark background image
  - **Bottom columns:** About text, Useful Links list, Recent News mini-cards, Instagram-style photo grid
  - **Copyright bar:** Bottom line with copyright + Component Dock link
- **Fidelity notes:** Footer must link to componentdock.com. Dark background with image.
- **Components:** `Footer.tsx`

## Design Token Summary for index.css

```css
@theme {
  --color-brand: #5F67FF;
  --color-brand-dark: #4a52cc;
  --color-header-top: #25282C;
  --color-heading: #353535;
  --color-heading-dark: #111111;
  --color-body-text: #727171;
  --color-white: #ffffff;
  --color-black: #000000;
}
```

## Image Strategy

All images via picsum.photos with deterministic seeds:
- Hero: `https://picsum.photos/seed/gearbox-hero/1920/800`
- Services: `https://picsum.photos/seed/gearbox-svc-1/400/300` through `svc-4`
- Choose Us: `https://picsum.photos/seed/gearbox-choose/960/600`
- Products: `https://picsum.photos/seed/gearbox-prod-1/400/400` through `prod-4`
- Blog: `https://picsum.photos/seed/gearbox-blog-1/400/300` through `blog-3`
- Counter bg: `https://picsum.photos/seed/gearbox-counter/1920/600`
- Footer bg: `https://picsum.photos/seed/gearbox-footer/1920/400`

## Fidelity Priority

1. Section order must match 1:1
2. Color tokens must match (#5F67FF primary)
3. Font: Public Sans via Google Fonts
4. Button style: square (no border-radius), #5F67FF background
5. Layout: alternating service cards, split choose-us, 4-col products, 3-col news
6. Testimonial carousel with dots navigation
7. Counter section overlapping previous section
