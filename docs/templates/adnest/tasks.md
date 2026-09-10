# Adnest — Implementation Tasks & Design Notes

Source: ColorLib "Classy Ads" (https://colorlib.com/wp/template/classy-ads/)
Preview: https://preview.colorlib.com/theme/classy-ads/ (404 — screenshot-only)
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/classyads-free-template.jpg
New name: **adnest** (apps/adnest)

---

## Structure Order (top to bottom)

1. Navbar
2. Hero
3. Category Strip
4. Featured Ads Grid
5. Footer

---

## Section-by-Section Fidelity Notes

### 1. Navbar
- White background bar, max-width ~1200px centered container
- Logo "CLASSYADS" — bold black text, no image
- Center nav: Home, Ads, About (with chevron/dropdown), Blog, Contact
- Right: "Log In" text link, "Register" text link, teal "+ Post an Ad" button
- Flexbox space-between layout, 16px vertical / 32px horizontal padding
- Active nav link uses teal color (#00C9B7)

### 2. Hero
- Full-width section, ~65vh height
- Background image (use picsum.photos/seed/adnest-hero/1920/1080)
- Dark semi-transparent overlay: rgba(0,0,0,0.5)
- Centered content: large bold headline, lighter subtext, horizontal search bar
- Search bar: 3 inputs (text "What are you looking for?", location with pin icon, category dropdown) + teal Search button
- Inputs have 4px radius, light gray borders, white backgrounds
- Search button: teal (#00C9B7), white text, 4px radius, bold
- On mobile: inputs stack vertically

### 3. Category Strip
- White elevated bar with box-shadow: 0 2px 4px rgba(0,0,0,0.1)
- 6 categories in a row (use lucide-react icons): Jobs, Real Estate, Cars, Electronics, Services, Fashion
- Each item: teal icon, category label (dark gray #212121), count (gray #757575)
- Flexbox equal-width columns, vertically centered
- On mobile: horizontal scroll or wrap

### 4. Featured Ads Grid
- Light off-white background (#F8F9FA) for the section
- Heading: "Featured Ads" in dark gray, semibold 600 weight, ~1.5rem
- 4-column CSS grid with gap between cards
- Each card: white bg, 4px border-radius, subtle shadow
  - Image at top (use picsum.photos/seed/adnest-ad-N/400/300)
  - Text content below: ad title, price, location, category tag
- On mobile: 1-column grid

### 5. Footer
- Dark navy background (#1a1a2e)
- Links: About, Contact, Terms, Privacy
- "Made with Component Dock" attribution linking to https://www.componentdock.com/
- Social icons (use lucide-react)
- Responsive: stacks on mobile

---

## Component Map

- `src/App.tsx` — composes all sections
- `src/components/Navbar.tsx` — header with logo, nav, auth links, CTA
- `src/components/Hero.tsx` — hero with overlay, heading, search bar
- `src/components/CategoryStrip.tsx` — 6-category icons bar
- `src/components/FeaturedAds.tsx` — grid of ad cards
- `src/components/AdCard.tsx` — individual ad card
- `src/components/Footer.tsx` — dark footer with links + attribution

---

## Design Token Summary

- Primary: #00C9B7 (teal)
- Background: #F8F9FA
- Text: #212121
- Muted text: #757575
- Cards: #FFFFFF with 4px radius
- Buttons: #00C9B7 bg, white text, 4px radius
- Font: Inter / Open Sans
- Shadows: 0 2px 4px rgba(0,0,0,0.1)

---

## Replication Notes

- Preview URL (https://preview.colorlib.com/theme/classy-ads/) returns 404.
  All design data extracted from screenshot only.
- Screenshot shows: navbar, hero with search, category strip, featured ads
  grid (partial view). Footer not visible in screenshot — inferred from
  similar ColorLib classified ads templates and project conventions.
- No Bootstrap classes to replicate — this is a custom clean layout.
- Category icons: use lucide-react equivalents (Briefcase for Jobs,
  Building for Real Estate, Car for Cars, Cpu for Electronics,
  Wrench for Services, ShoppingBag for Fashion).
