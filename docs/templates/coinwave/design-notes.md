# CoinWave — Implementation Notes

Source: ColorLib "Bitcoin" (https://colorlib.com/wp/template/bitcoin/)
Preview: https://preview.colorlib.com/theme/bitcoin/
New name: coinwave

## Section Order (top to bottom)

1. **Header** — fixed, transparent → dark on scroll, logo left, nav links right (Home, Convert, Feature, Price, Blog, Pages with dropdown), hamburger on mobile
2. **Banner / Hero** — fullscreen, dark bg image with navy overlay (rgba(4,9,30,0.85)), "Currently Purchase Rate" label, "$12,356" large price, description, "Buy Bitcoin" CTA (square corners)
3. **Convert Area** — orange gradient bg (#f3c400 → #f88845), overlaps banner by -105px, heading "The Currency Converter", bitcoin icon, form inputs, "Calculate" button (white bg)
4. **Simple Services** — 3-column row with icon images, linked titles, descriptions
5. **About Us** — full-width dark bg (#222), split 50/50: image carousel left + bitcoin icon + heading + description right
6. **Service Features** — heading "Why choose us during purchase bitcoin", 6 items in 3×2 grid (linear icons + titles + descriptions), hover turns title orange
7. **Stats** — light bg (#f9f9ff), split 50/50: chart image left + heading + description + "View Details" CTA right
8. **Call to Action** — orange gradient bg, white heading "Huge Transaction in last Week" + description + "Buy Bitcoin Now!" button
9. **Pricing** — heading "Purchase whatever you want", 3 bordered cards (Ripple $7999, Ethereum $9999, Bitcoin $5999), each with description + "Get Started" button
10. **Blog** — heading "Latest Posts from our Blog", 3 cards with thumbnails, titles, descriptions, author rows (avatar + name + date)
11. **Footer** — very dark bg (#04091e), 3 columns: About Us + Top Products list + Newsletter (email input + arrow button), social icons in bottom bar + copyright + Component Dock link

## Design Token Notes

- Brand orange: #f78f3d (primary accent, selection color, footer links)
- Brand gradient: #f3c400 → #f88845 (primary buttons, convert area, CTA section)
- Banner overlay: rgba(4,9,30,0.85) — dark navy
- Footer bg: #04091e — very dark navy
- About bg: #222 — dark
- Light bg: #f9f9ff — stat area, form inputs
- Footer input bg: #1e2235
- Social icon bg: #111111
- Font: Poppins (300, 400, 500, 600, 700)
- Primary button: border-radius 25px, gradient
- Banner button: border-radius 3px (square)
- Pricing card button: dark #222 bg, hover → gold #ca9814
- Footer newsletter button: orange, border-radius 57px (pill)
- Convert area input borders: gold #f9c065

## Fidelity Notes

- Convert area uses negative margin (-105px) to overlap the banner — implement with relative positioning + negative margin
- About Us uses container-fluid (full-width), not the centered container
- Header becomes fixed on scroll with background change — use IntersectionObserver or scroll listener
- Mobile nav: slide-in panel from left with dark overlay
- Banner heading "$12,356" is 100px font size — scale down on smaller screens
- Pricing cards have border: 1px solid #eee, with a top section (price-top) and bottom section (price-bottom)
- Blog cards have author rows with avatar images, names, and dates
- Footer newsletter input has border-radius 20px, dark bg #1e2235
- Social icons in footer are square with #111111 bg, hover → #f78f3d

## Component Breakdown

| Component | File | Notes |
|-----------|------|-------|
| Header | `Header.tsx` | Fixed header, scroll effect, nav with dropdown, mobile hamburger |
| Hero | `Hero.tsx` | Fullscreen bg image + overlay, price display, CTA |
| ConvertArea | `ConvertArea.tsx` | Orange gradient, form inputs, overlaps banner |
| SimpleServices | `SimpleServices.tsx` | 3-column service cards with icons |
| AboutUs | `AboutUs.tsx` | Dark bg, image carousel (left) + text (right) |
| ServiceFeatures | `ServiceFeatures.tsx` | 6-item grid with linear icons, hover effect |
| Stats | `Stats.tsx` | Chart image + text + CTA on light bg |
| CallToAction | `CallToAction.tsx` | Orange gradient CTA banner |
| Pricing | `Pricing.tsx` | 3 pricing cards with hover effects |
| Blog | `Blog.tsx` | 3 blog cards with author info |
| Footer | `Footer.tsx` | 3-column footer + social icons + copyright + Component Dock |
