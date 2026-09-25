# Gustable — Prep Notes

## Source mapping

| Field | Value |
|---|---|
| ColorLib source | Eatwell |
| Source slug | `eatwell` |
| Preview URL | https://preview.colorlib.com/theme/eatwell/ |
| Screenshot | https://colorlib.com/wp/wp-content/uploads/sites/2/eatwell-free-template.jpg |
| New name | `gustable` |
| Deploy URL | https://gustable.free.componentdock.com |

## Implementation todo

### Phase 1 — Scaffold
- [ ] Copy simplest existing app (e.g. `apps/aurora`) to `apps/gustable`
- [ ] Rename package to `@free-react-templates/gustable`
- [ ] Update `vite.config.ts`, `package.json`, `public/CNAME`
- [ ] Run `npm install` at repo root to register workspace
- [ ] Set up `index.css` with Tailwind + `@theme` tokens (brand color `#FDA403`, fonts)

### Phase 2 — Components (TDD order)
- [ ] `Navbar.tsx` — transparent-to-black scroll effect, 7 nav links, uppercase 13px Raleway
- [ ] `Hero.tsx` — full-viewport, background image placeholder (`picsum.photos/seed/gustable-hero/1920/1080`), dark overlay, heading, subtitle, outlined "Reservation" CTA
- [ ] `About.tsx` — "OUR STORY" small-caps subtitle, "Welcome" serif heading, body text, circular chef photo (`picsum.photos/seed/gustable-chef/400/400`)
- [ ] `Offers.tsx` — light bg, heading, grid of food cards (image, title, gold price, description), 6 items
- [ ] `Menu.tsx` — white bg, "Delicious Menu" heading, two-column layout, food items with gold prices, food photos
- [ ] `News.tsx` — light bg, heading, 3 blog cards (image + title + excerpt)
- [ ] `Gallery.tsx` — white bg, heading, image grid with 16px rounded corners, 6 food images
- [ ] `Contact.tsx` — light bg, "Get In Touch" heading, form (Name, Email, Message), address info, map placeholder
- [ ] `Footer.tsx` — dark bg, brand name, copyright, social icons, Component Dock link

### Phase 3 — Integration
- [ ] `App.tsx` — compose all sections in order: Navbar → Hero → About → Offers → Menu → News → Gallery → Contact → Footer
- [ ] Smooth scroll behavior for nav links
- [ ] Responsive breakpoints (mobile hamburger menu)

### Phase 4 — Verification
- [ ] `npm run test:coverage` — 100% lines/functions/branches/statements
- [ ] Visual comparison with screenshot
- [ ] No ColorLib references in app code

## Section order (from preview DOM)

1. `#section-home` — Hero (full-viewport bg image)
2. `#section-about` — Our Story / Welcome
3. `#section-offer` — Our Offers (light bg)
4. `#section-menu` — Delicious Menu
5. `#section-news` — News (light bg)
6. `#section-gallery` — Gallery
7. `#section-contact` — Get In Touch / Contact (light bg)
8. Footer

## Fidelity notes

- **Hero:** Must be 100vh with a dark semi-transparent overlay on the background image. The heading is large serif (Playfair Display), white. The "Reservation" button has a white border, no fill, white text, and navigates to the contact section.
- **Navbar:** Transparent over hero, becomes solid black (`#000`) on scroll. Links are uppercase, 13px, 0.2em letter-spacing, Raleway font.
- **About:** Two-column layout. Left: "OUR STORY" in small caps/uppercase tracking, large serif "Welcome" heading, paragraph text. Right: circular chef photo (50% border-radius).
- **Offers:** Light gray background (`bg-gray-50`). Grid of food items, each with image, title (h5), price in gold (`#FDA403`), and description paragraph.
- **Menu:** White background. Two-column list of food items. Each item has name (h5) and price (h6, gold color). Food photos on the left column.
- **News:** Light gray background. Three cards in a row, each with image, title, and brief text. Cards have white background.
- **Gallery:** White background. Grid of food images with 16px border-radius. Images are clickable.
- **Contact:** Light gray background. Two-column: left has form (Name, Email, Message textarea + Submit button), right has address info and a map placeholder div.
- **Footer:** Dark/black background. Brand name centered, copyright text, social media icon links.
- **Color palette:** Primary `#FDA403` (amber/gold), dark `#000`, text `#222`, muted `#999`, borders `#ccc`.
- **Fonts:** Playfair Display (serif) for headings, Raleway (sans-serif) for body/nav/buttons.
