# Cakery (ColorLib Cakes) — Tasks & Design Notes

> Prep artifacts prepared on `main` by stream 4 (prep).
> Implementation ships later on `feat/template-cakery`.

## Design notes (replication findings)

- **Original:** ColorLib "Cakes" — bakery & cake shop landing
  (source: https://colorlib.com/wp/template/cakes/).
- **Preview DOM analyzed:** `https://preview.colorlib.com/theme/cakes/`
  (HTTP 200, full rendered DOM + `assets/css/style.css` (59KB) extracted).
  Screenshot: `cakes-colorlib-template.jpg` (1200x946, warm bakery hero).
- **Visual design (from DOM + CSS tokens):** warm bakery landing in
  **burnt orange** (`#F04506` primary, hover `#d83e06`, peach-50 `#FFF5F2`
  card backgrounds, cream footer `#FFF7F3`). Three Google Fonts: **Quicksand**
  for headings/buttons, **DM Sans** for body text, **Lobster** for decorative
  hero script overlay. Pill-shaped buttons with orange gradient + box-shadow.
  Product cards have asymmetric corner radius (`0 0 60px 0`). Hero is a
  two-column split with a warm peach left panel and a dessert image on the
  right with floating decorative tart element.

## Structure (1:1, section order)

1. **Navbar:** Sticky white bar with "Cakery" brand (cake icon + text),
   links: Home, Product, About, Blog, Contact. Right side: phone number
   "+10 (56) 745 3095" + "Order Online" pill button. Hamburger on mobile.
   Underline hover animation on links (orange #F04506).

2. **Hero:** Split two-column. Left: warm peach (`#FFF5F2`) bg, large
   Lobster-script "Delicious" text overlay at 6% opacity orange, h1
   "Delicious Cake For Everyone" (Quicksand 800), paragraph, "Explore Menu"
   pill button. Right: hero image (dessert slice on white plate) with drop
   shadow, overlapping the pink bg. Far-left floating decorative tart
   image. Parallax float animation on decorative elements.

3. **Popular Items:** "Most Popular" kicker (orange uppercase, 0.2em
   letter-spacing), h2 "Our Exclusive Cakes" (Quicksand 700). Carousel
   of 6 cards on `#FFF5F2` peach bg with bottom-right corner radius 60px.
   Each card: product image (bottom-right radius 40px, scale(1.1) → 1 on
   hover), product name (Quicksand 700), description, "Order" link.
   Slick slider arrows (orange #ff3500 on hover).

4. **About / Support:** Two-column. Left: bakery image. Right: section
   title "For the love of baking", paragraph about bakery, "Learn More"
   link in orange. Section-padding (~120px top/bottom).

5. **Services:** Centered "Our Services" kicker + heading. 4 service cards
   in 2x2 grid (col-xl-3 each): icon (lucide or font icon), service title,
   description paragraph. White bg, soft shadow, section-padding40.

6. **Testimonials:** Section with heading. 3 testimonial cards: avatar
   image, customer name, role/title, quote text. Warm background.

7. **Instagram Strip:** Full-width horizontal row of 6 square thumbnails
   with Instagram icon overlay on hover. Warm peach background.

8. **Footer:** Cream bg (`#FFF7F3`). 4 columns:
   - Col 1: Logo + about paragraph + social icons (orange)
   - Col 2: Quick Links (Home, About, Blog, Contact)
   - Col 3: Support (Terms, Privacy, Contact)
   - Col 4: Newsletter signup (email input + submit)
   Copyright bar with "Made with Component Dock" → `componentdock.com`.

## Implementation tasks

- [ ] Create `apps/cakery` workspace (copy simplest existing app, rename package)
- [ ] Set up `index.html` with Google Fonts: Quicksand, DM Sans, Lobster
- [ ] Define Tailwind @theme tokens in `src/index.css`:
      `--color-cakery-primary: #F04506`, `--color-cakery-card: #FFF5F2`,
      `--color-cakery-footer: #FFF7F3`
- [ ] Build `Navbar` component (sticky, responsive, hamburger, CTA button)
- [ ] Build `Hero` component (split layout, Lobster script overlay, parallax floats)
- [ ] Build `PopularItems` component (carousel of 6 product cards)
- [ ] Build `About` component (two-column image + text)
- [ ] Build `Services` component (4 service cards grid)
- [ ] Build `Testimonials` component (3 testimonial cards)
- [ ] Build `InstagramStrip` component (6 thumbnails with hover overlay)
- [ ] Build `Footer` component (4-column, newsletter, copyright)
- [ ] Compose `App.tsx` with all sections in order
- [ ] Add placeholder images via `picsum.photos/seed/cakery-<n>`
- [ ] Add `public/CNAME` with `cakery.free.componentdock.com`
- [ ] Set `"homepage"` in package.json
- [ ] Write tests for every component (100% coverage)
- [ ] Run `npm run spec:validate` — verify spec passes
- [ ] Commit: `feat: add cakery template (ColorLib cakes)`

## Design token summary

| Token | Value | Usage |
|-------|-------|-------|
| Primary | `#F04506` | Buttons, links, accents, brand logo |
| Hover | `#d83e06` | Button gradient stop |
| Card bg | `#FFF5F2` | Product cards, section accents |
| Footer bg | `#FFF7F3` | Footer wrapper |
| Heading font | Quicksand | All headings, buttons |
| Body font | DM Sans | Paragraphs, body text |
| Display font | Lobster | Hero decorative "Delicious" overlay |
| Heading color | `#000` | h1-h6 |
| Body text | `#5E5E5E` | Paragraphs, nav links, footer |
| Button radius | 30px | Pill shape |
| Card radius | `0 0 60px 0` | Product cards bottom-right only |
