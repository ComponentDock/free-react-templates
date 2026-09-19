# Fragrance (ColorLib Aroma) — Tasks & Design Notes

> Prep artifacts prepared on `main` by stream 3 (prep).
> Implementation ships later on `feat/template-fragrance`.

## Design notes

- **Original:** ColorLib "Aroma" — Aroma Shop (fashion e-commerce)
  (source: https://colorlib.com/wp/template/aroma/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/aroma/`
  (HTTP 200, 30,851 bytes HTML) + stylesheet `css/style.css` (56,623 bytes).
  Full rendered DOM extracted; structure below is from the DOM + CSS tokens.
- **Structure observed (1:1):**
  1. Top navbar — logo, nav (Home, Shop dropdown, Blog dropdown, Pages dropdown, Contact), search icon, cart badge "3", Buy Now button
  2. Hero banner — product image left (hidden mobile), "Shop is fun" + "Browse Our Premium Product" + "Browse Now" CTA right; blue accent stripe on left; light #F1F6F7 bg
  3. Hero carousel — 3 slides (product images + hover overlay: "Wireless Headphone" / "Accessories Item")
  4. Trending Product — 8-card grid (4-col), hover overlay with search/cart/heart icons; category + name + $150.00 price
  5. Offer/Parallax — "Up To 50% Off" / "Winter Sale" + "Shop Now" button on parallax bg
  6. Best Sellers — carousel of 8+ product cards (same structure as trending)
  7. Latest News (Blog) — 3 blog cards with image, author, comments, title, excerpt, "Read More"
  8. Subscribe — "Get Update From Anywhere" heading, email input, "Subscribe Now" button; white card with blue shadow
  9. Footer (4-col, dark navy #002347) — Our Mission, Quick Links, Gallery (6 thumbnails), Contact Us; copyright + Component Dock
- **Design tokens:** brand blue-purple **#384aeb**; dark navy **#002347**; heading color **#222**;
  body text **#777**; light bg **#F1F6F7**; red accent **#c5322d** (register button);
  Oswald (headings) + Roboto (body) via Google Fonts; pill buttons (border-radius: 30px);
  button hover inverts to transparent + blue border; blue-tinted shadows.
- **Recreation name:** Fragrance. App folder `apps/fragrance`, package
  `@free-react-templates/fragrance`.
- **Design approach:** standard top navbar layout (not sidebar); hero with image + text;
  product carousels with hover overlays; parallax offer section; blog cards; newsletter;
  4-col dark footer with gallery thumbnails.
- Reuse `packages/ui` (Button, ButtonLink, Card, cn) — do NOT duplicate components.
- Base implementation on an existing multi-section landing app with navbar + hero + products.

## Tasks

- [x] Fetch + analyze ColorLib Aroma preview DOM + CSS tokens
- [x] Write openspec/specs/template-fragrance/spec.md
- [x] Write docs/templates/fragrance/tasks.md (this file)
- [ ] Create branch `feat/template-fragrance` from latest origin/main
- [ ] Scaffold `apps/fragrance` (copy simplest multi-section app, rename package to `@free-react-templates/fragrance`)
- [ ] Write tests first (TDD, red phase): Navbar, Hero, Carousel, Trending, Offer, BestSellers, Blog, Subscribe, Footer + responsive
- [ ] Implement components using `packages/ui` + `cn()`, picsum-seeded images, Google Fonts (Oswald + Roboto)
- [ ] Run verification gate: typecheck → lint → test:coverage (100%) → build
- [ ] Self-review, update TEMPLATES.md docs, commit conventionally, push branch, open PR
