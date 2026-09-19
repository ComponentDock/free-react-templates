# Fervor — Implementation Todo

Source: ColorLib "Karma" (https://preview.colorlib.com/theme/karma/)
New name: Fervor
Stack: Vite + React 19 + Tailwind CSS 4 + TypeScript

## Section order (match 1:1 with original)

1. Navbar (sticky, white, logo + nav + cart + search)
2. Hero banner (full-width bg image, 2-col: text left, product image right)
3. Features bar (4-col: icons + titles)
4. Category deals grid (asymmetric 5-card layout)
5. Latest Products (section title + product card row)
6. Exclusive Deal countdown (split: timer left, product carousel right)
7. Brand logos (5 logos in row)
8. Deals of the Week (9 related products grid + sidebar promo)
9. Footer (4-col: About, Newsletter, Instagram, Social)

## Design notes

### Colors
- Primary gradient: `linear-gradient(90deg, #ffba00 0%, #ff6c00 100%)`
- Gold solid: `#ffba00` (used on hover states, active nav, pricing)
- Orange solid: `#ff6c00`
- Product hover accents: `#4cd3e3` (cyan), `#38a4ff` (blue), `#f4e700` (yellow), `#f44a40` (red)
- Text dark: `#222222`
- Text grey: `#777777`
- Background alt: `#f9f9ff` (very light blue-tinted white)
- Background white: `#ffffff`

### Typography
- Headings: Poppins (Google Fonts)
- Body: Roboto (Google Fonts) — used in original for body text

### Buttons
- Primary: pill shape (`border-radius: 50px`), gradient background, white text
- Add-to-bag circle: `border-radius: 50%`, gradient, white icon
- Newsletter submit: solid color arrow button

### Section backgrounds
- Hero: background image (use picsum.photos placeholder)
- Features, Products, Brand, Deals: white `#ffffff`
- Exclusive Deal: dark gradient overlay on left side
- Footer: white
- Alt sections: `#f9f9ff`

### Assets (DO NOT copy — use placeholders)
- Hero banner: `https://picsum.photos/seed/fervor-hero/1920/800`
- Product images: `https://picsum.photos/seed/fervor-prod-{1..7}/300/300`
- Category images: `https://picsum.photos/seed/fervor-cat-{1..5}/600/400`
- Brand logos: text-based or SVG placeholders
- Instagram feed: `https://picsum.photos/seed/fervor-insta-{1..8}/150/150`
- Related products: `https://picsum.photos/seed/fervor-rel-{1..9}/150/150`

### Layout specifics
- Hero: Bootstrap-style grid, left col-5 text, right col-7 image
- Features: 4 equal columns (col-lg-3)
- Category deals: asymmetric — col-lg-8 (2-col inner) + col-lg-4
- Products: row of col-lg-3 cards
- Exclusive deal: full-width, col-lg-6 left (timer), col-lg-6 right (carousel)
- Brand logos: 5 equal cols
- Deals of the Week: col-lg-9 (3x3 grid) + col-lg-3 (sidebar image)
- Footer: col-lg-3 + col-lg-4 + col-lg-3 + col-lg-2

### Component reuse from packages/ui
- Button / ButtonLink for CTAs
- cn() for class composition
- Consider: ProductCard, CountdownTimer, NewsletterForm as internal components
