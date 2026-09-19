# Solecraft — Design & Implementation Notes

Source: ColorLib "Solestyle" (https://preview.colorlib.com/theme/solestyle/)
New name: `solecraft`

## Section Order (from preview HTML)

1. **AnnouncementBar** — full-width gradient bar (primary-600→primary-500), white text, promo code
2. **Header** — sticky, blur backdrop, logo (gradient box + lightning SVG + "Solecraft"), desktop nav (Shop, Categories, New Arrivals, Sale, About), action buttons (search, theme toggle, wishlist, cart with badge count), mobile hamburger
3. **MobileMenu** — hidden by default, full-width dropdown from header, same nav links + Wishlist + My Account
4. **SearchModal** — fixed overlay, rounded search input, popular tags, Esc/backdrop close
5. **Hero** — `min-h-[90vh]`, `bg-gray-950`, gradient mesh (`from-gray-900 via-gray-950 to-primary-950`), decorative blurred circles, heading "Step Into Your Next Adventure", subtext, primary CTA button (`rounded-full`), secondary link
6. **FeaturedProducts** — `bg-white`, section header with badge "Curated Selection", 4 product cards in grid
   - Each card: rounded-2xl image, overlay with Add to Cart + Wishlist buttons, category label, product name, star rating (yellow-400 SVG stars), price, color swatches (rounded-full circles), size count
7. **Testimonials** — `bg-gray-950`, section header with badge "Customer Love", 3 testimonial cards (`rounded-2xl bg-gray-900 p-8`)
   - Each: 5-star row, blockquote text, author avatar (Unsplash), author name, role
   - Below: trust stats row — 50K+ Customers, 4.9/5 Rating, 15K+ 5-Star Reviews, 98% Recommend
8. **CTA/Newsletter** — `bg-primary-600`, grid pattern overlay, heading, subtext, email form (`rounded-full` input + `rounded-full` white button), App Store + Google Play badge links
9. **FooterNewsletter** — `bg-gray-50`, "Join the Solecraft Club" heading, email + Subscribe button
10. **Footer** — 4-column grid: Brand (logo + social icons), Shop (6 links), Help (5 links), About (5 links)
11. **FooterBottom** — copyright, Privacy/Terms, payment icons (Visa, Mastercard, Amex, Apple Pay)

## Key Design Details

- **Color palette:** Orange primary (#f97316/#ea580c), neutral grays for backgrounds and text
- **Typography:** Inter for body (400-700), Outfit for display/headings (400-800) — loaded from Google Fonts
- **Buttons:** Pill-shaped (`rounded-full`) for CTAs, `rounded-lg` for nav icons
- **Dark mode:** Class-based toggle, localStorage persistence, affects header, hero, product grid, testimonials, footer
- **Animations:** Product card hover overlay, add-to-cart scale animation, toast slide-in, skeleton loading placeholder
- **Product images:** Use `picsum.photos/seed/solecraft-<n>/<w>/<h>` placeholders
- **Avatars:** Use Unsplash `?w=200&h=200&fit=crop` for testimonial avatars
- **No ColorLib references** in any app source code — provenance only in spec and TEMPLATES.md

## Implementation Priority

1. Core layout: App.tsx shell + index.css theme tokens + index.html (fonts)
2. AnnouncementBar component
3. Header + MobileMenu + SearchModal (sticky, dark mode aware)
4. Hero section (gradient mesh, decorative circles)
5. FeaturedProducts grid (product card component with hover overlay)
6. Testimonials + trust stats
7. CTA/Newsletter section
8. Footer (newsletter + 4-col grid + bottom bar)
9. Dark mode toggle + localStorage persistence
10. Responsive polish + accessibility pass
11. Tests (Vitest + RTL, 100% coverage)
12. Verification: `scripts/verify-app.sh solecraft`
