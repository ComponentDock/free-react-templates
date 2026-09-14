# Veiled — Design Notes & Implementation Outline

Source: ColorLib "Sneaky Restaurant" (https://colorlib.com/wp/template/sneaky/)
Preview: https://preview.colorlib.com/theme/sneaky/
New name: veiled (apps/veiled, @free-react-templates/veiled)

## Design Tokens (from css/style.css)

- Brand: #e22104 (red-orange) — buttons, prices, intro titles, offer card, nav hover
- Headings: #2f2d4e (dark navy-purple) — h1-h5, nav, social icons
- Body: #888888 (medium gray)
- Light bg: #fff8f7 (warm off-white) — sections, cards, footer
- Stars: #ffbe0f (gold)
- Fixed navbar: #7676ff (light purple)
- Fonts: "Josefin Sans" (headings) + "Open Sans" (body) via Google Fonts
- Buttons: border-radius 30px (pill), bg #e22104, white text
- Shadows: rgba(8,6,89,0.1) cards; rgba(229,16,2,0.15) hero button
- Section spacing: 65px mobile / 130px desktop

## Section Order (implementation sequence)

1. **Navbar** — site name "Veiled", links (Home, Menu, Chef, Blog, Contact), dark-mode toggle. Fixed on scroll with purple bg.
2. **Hero** — headline "Foods the most precious things", Book Now CTA, Watch Video link, 3 feature icons (Fast Service, Fresh Food, 24/7 Support via lucide), social icons left side. Right side: food image (picsum).
3. **About** — "About Us" label with horizontal line, heading "We speak the good food language", paragraph, Learn More button. Two overlapping picsum images (img-styleBox pattern — one with a bordered frame).
4. **Featured Food** — "Featured Food" / "Fresh taste and great price". 3 cards in a row: image, name, description, 5-star rating (lucide Star), price tag. Cards have warm bg, hover shadow.
5. **Offer** — bg-lightGray. Split: food image left, red-orange card right with "Italian Pizza Offer" / "50% OFF" / Read More. Card floats over image on desktop.
6. **Food Menu** — "Food Menu" / "Delicious food". 2-column, 4 rows = 8 dish cards. Each: image + name + price + description. Hover: white bg + shadow.
7. **CTA** — Full-width background image with dark overlay (rgba(2,1,15,0.7)). "Some Trendy And Popular Courses Offerd" + headline + Reservation button.
8. **Our Chef** — "Our Chef" / "Talent & experience member". 3 chef cards: image, name, title, social overlay slides down on hover.
9. **Reservation** — bg-lightGray. Left: "Get experience from Veiled" + paragraph. Right: dark bg form "Book A Table" — Name, Email, Phone, Date, People + Make Reservation button.
10. **Blog** — "Our Blog" / "Latest food and recipe news". 3 blog cards: image, author + date, headline. Warm bg, hover shadow.
11. **Footer** — 4 columns (Top Products, Quick Links, Features, Resources) + Newsletter form + social icons (FB, Twitter, Dribbble, LinkedIn) + copyright with Component Dock link.

## Fidelity Notes

- Hero uses owl-carousel in original — replace with static image or simple fade.
- Featured Food carousel → static row of 3 cards (simpler, works everywhere).
- Offer card uses absolute positioning to float over image — use relative container + negative margin/translate on desktop.
- Chef overlay uses transform: translateY(-50%) → 0 on hover — implement with group-hover or CSS transition.
- Reservation form background: dark (rgba(2,1,15,0.5)) with white text.
- All original images replaced with picsum-seeded placeholders.
- No ColorLib references anywhere in app code.

## Implementation TODO

- [ ] Scaffold apps/veiled (copy simplest app, rename package)
- [ ] Add Google Fonts link to index.html (Josefin Sans + Open Sans)
- [ ] Configure Tailwind theme tokens in index.css
- [ ] Implement Navbar component
- [ ] Implement Hero component
- [ ] Implement About component
- [ ] Implement FeaturedFood component
- [ ] Implement Offer component
- [ ] Implement FoodMenu component
- [ ] Implement CTA component
- [ ] Implement Chef component
- [ ] Implement Reservation component
- [ ] Implement Blog component
- [ ] Implement Footer component
- [ ] Compose App.tsx from all section components
- [ ] Write tests (100% coverage)
- [ ] Run verify-app.sh veiled
- [ ] Commit + push + open PR
