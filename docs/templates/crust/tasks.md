# Crust — Implementation Tasks

Recreation of ColorLib Bakery
(https://colorlib.com/wp/template/bakery/).

## Design notes

- **Warm bakery aesthetic** — gold/tan accent (#d1ab7f) on white/blue-gray
- **Font:** Poppins (300/400/500/600/700) via Google Fonts `<link>` in index.html
- **Hero:** full-screen with background image (use picsum.photos), dark overlay,
  white heading with gold top/bottom borders
- **Categories:** 4 circular food images (use picsum.photos with seeds)
- **Footer:** dark navy #04091e with multiple columns
- **Buttons:** primary gold (#d1ab7f), 25px radius (default) or 0 (squire)
- **Section padding:** 120px vertical
- **No images shipped** — all images via picsum.photos placeholders

## Structure order (1:1 from live DOM)

1. **App.tsx** — page composition: Header → Hero → About → Categories →
   AboutVideo → Reviews → Blog → Footer
2. **Header.tsx** — fixed top bar with logo, nav links, social icons, contact
3. **Hero.tsx** — full-screen banner with overlay, heading, description, CTA button
4. **About.tsx** — two-column: text left, floating image right
5. **Categories.tsx** — 4-column grid of circular category items
6. **AboutVideo.tsx** — two-column: text left, video placeholder right
7. **Reviews.tsx** — dark background with review cards/carousel
8. **Blog.tsx** — 3-column blog post cards
9. **Footer.tsx** — dark navy, multiple columns, newsletter, social, Component Dock link

## Tasks

- [ ] Create `apps/crust/` from simplest existing app scaffold
- [ ] Write tests for Header component
- [ ] Write tests for Hero component
- [ ] Write tests for About component
- [ ] Write tests for Categories component
- [ ] Write tests for AboutVideo component
- [ ] Write tests for Reviews component
- [ ] Write tests for Blog component
- [ ] Write tests for Footer component
- [ ] Write tests for App component (renders all sections, title)
- [ ] Implement all components
- [ ] Add Poppins font via Google Fonts `<link>` in index.html
- [ ] Configure Tailwind theme tokens (#d1ab7f accent)
- [ ] Run 100% coverage tests
- [ ] Verify build passes
- [ ] Push and open PR
