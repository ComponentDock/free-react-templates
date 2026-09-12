# Ecobloom (ColorLib Ecoland) — Tasks & Design Notes

> Prep artifacts prepared on `main` for implementer consumption.
> Implementation ships later on `feat/template-ecobloom`.

## Design notes (replication findings)

- **Original:** ColorLib "Ecoland" — travel / destination landing page
  (source: https://colorlib.com/wp/template/ecoland/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/ecoland/
  (HTTP 200, full rendered DOM + `css/style.css` (3,420 lines) extracted).
- **Visual design (from DOM + CSS tokens):** Travel/destination landing
  with a **muted tan/blush** brand (`#e2c0bb`), Poppins + Cormorant
  Garamond fonts, hero with SVG blobs, owl-carousel slider, parallax CTA
  banners, card grids for destinations/hotels/restaurants, blue-gray
  testimonial section (`#b2bbc9`), Instagram gallery, and 4-column footer.
- **Structure (1:1, section order):**
  1. Navbar: brand "Ecobloom" + Home, Services, About, Destination, Hotel,
     Restaurant, Blog, Contact + mobile hamburger.
  2. Hero slider: 2-slide carousel — "Discover Greece" + "Discover Africa".
     Split: text left, image right with SVG blob. CTA: "Discover" primary.
  3. Search form: "Where do you want to go?" — Destination, Check-in,
     Check-out, Price Limit (select), Search button.
  4. Services: 4-column — Activities, Travel Arrangement, Private Guide,
     Location Manager (icon + title + blurb).
  5. About: 6/6 split — travel image left, "Get Best Travel Deals" +
     blurb + "Book now" + "Contact us" right.
  6. CTA banner: parallax bg, "Choose the Perfect Destination" +
     "Search Places" white button.
  7. Destinations grid: 3x2 cards — image, price (some with sale badge),
     duration, location, stars, reviews.
  8. CTA banner: parallax bg, "Choose at $99 Per Night Only" +
     "Book a room now" white button.
  9. Hotels grid: 3 cards — same pattern as destinations.
  10. Rooms: featured room (7/5 split) + 4 thumbnails. "Greece Best
      Rooms Offer". Price/night, "Details" + "Book now".
  11. Testimonials: owl-carousel on #b2bbc9 bg, blob SVGs, user images,
      quotes. "What Client Says".
  12. Restaurant: 3 cards — image, "menu start at $4.00", location, name,
      stars. "Near Resturant" (sic).
  13. Blog: bg-light, 3 cards — background image, date overlay, heading,
      blurb, "Read More" primary, author + comments.
  14. Contact: 7/5 split — form (name, email, subject, message,
      "Send Message") + info cards (Address, Phone, Email, Website).
  15. Map placeholder section.
  16. Instagram gallery: 6 images, hover icon overlay.
  17. Footer: 4 columns — About (brand + social), Information (links),
      Experience (links), Have a Questions? (contact). Copyright links
      to Component Dock.
- **Design tokens from `css/style.css`:**
  - Primary: **`#e2c0bb`** (tan/blush) — buttons, `.bg-primary`.
  - Testimony bg: **`#b2bbc9`** (blue-gray).
  - Fonts: **Poppins** (300–900) + **Cormorant Garamond** (300–700).
  - Buttons: primary `#e2c0bb` white text; white `#fff` black text.
  - Border-radius: `0.25rem` (Bootstrap default).
  - Dark overlay: semi-transparent on hero images + parallax.
  - Star ratings: gold/yellow ionicons stars.

## Implementation tasks

1. **Scaffold** — copy simplest existing app, rename to `ecobloom`,
   update package name, CNAME, homepage.
2. **Theme tokens** — add `#e2c0bb` brand, `#b2bbc9` testimony bg,
   Poppins + Cormorant Garamond Google Fonts to `index.html` + theme.
3. **Navbar** — dark sticky nav, brand "Ecobloom", 8 anchor links,
   hamburger for mobile, dark-mode toggle.
4. **Hero** — 2-slide carousel with split layout (text left, image right
   + SVG blob), auto-play + dot navigation.
5. **Search form** — heading + 5-field form row (Destination text,
   Check-in, Check-out, Price Limit select, Search primary button).
6. **Services** — 4-column grid with lucide-react icons, titles, blurbs.
7. **About** — 6/6 split: image left, darkened panel right with heading,
   paragraphs, "Book now" primary + "Contact us" white buttons.
8. **CTA banner 1** — parallax bg image + overlay + heading + white
   button.
9. **Destinations grid** — 3x2 card grid with images, prices, badges,
   stars, reviews.
10. **CTA banner 2** — parallax bg + overlay + heading + white button.
11. **Hotels grid** — 3-column card grid (same pattern).
12. **Rooms** — featured room (7/5 split) + 4 thumbnail links.
13. **Testimonials** — carousel on #b2bbc9 bg, blob SVGs, user images,
    quotes, names, positions.
14. **Restaurant** — 3-column card grid.
15. **Blog** — bg-light section, 3 cards with date overlay, "Read More"
    button, meta.
16. **Contact** — 7/5 split: form + info cards with icons.
17. **Gallery** — 6-column image grid with hover overlay.
18. **Footer** — 4 columns, social icons, Component Dock copyright link.
19. **Dark mode** — Tailwind `.dark` class toggle, `dark:` utilities on
    all sections.
20. **Responsive** — ensure all grids collapse properly on mobile.
21. **Tests** — Vitest + RTL, 100% coverage, Gherkin scenarios from spec.
22. **Build & verify** — `scripts/verify-app.sh ecobloom` passes.

## Fidelity notes

- Hero slider: replace owl-carousel with React state-based carousel or
  CSS-only approach (no jQuery).
- Parallax: use `bg-fixed` on Tailwind (equivalent to
  `background-attachment: fixed`).
- SVG blobs: inline SVGs as React components (replace
  `blob-shape-2.svg`/`blob-shape-3.svg`).
- Flaticon/ionicons icons → lucide-react equivalents.
- Star ratings → lucide-react Star icons in gold color.
- Date overlay in blog → styled div with day/month/year.
- Google Fonts via `<link>` in `index.html` (Poppins + Cormorant
  Garamond).
- No ColorLib references in app code — provenance only in spec +
  TEMPLATES.md.
- Footer link: `https://www.componentdock.com/` branded "Component Dock".
