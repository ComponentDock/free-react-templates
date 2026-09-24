# Techpulse — Implementation Notes

Source: ColorLib Techmag (https://preview.colorlib.com/theme/techmag/)

## Section Order (top to bottom)

1. HeaderBar — top bar: subscribe button (black bg, white text, 3 colored dots) + social icons (right)
2. HeaderContent — logo ("Tech" purple highlight + "mag"), subtitle "Innovation & Technology Magazine", promo card image
3. Navbar — sticky: logo + nav links (Home, Tech, Innovation, Videos, World, Contact) + search icon
4. MobileMenu — slide-in overlay: search, nav, subscribe, social, close button
5. HeroSlider — full-width carousel: bg image + purple overlay, category pill, headline, description, "READ MORE" button (mint), left/right arrows
6. IntroCards — 3 equal cards: image + category label on hover, transition 200ms
7. FeaturedPosts — title "Featured Posts" + subtitle + section bar; main: 1 large post (8-col) + 2 small posts (4-col sidebar)
8. TechnologyPosts — title "Technology" + subtitle; 3 horizontal posts (5-col image + 7-col content each)
9. WorldPosts — title "From the World" + subtitle; 2 medium posts (6-col each)
10. LoadMore — centered "load more" button
11. Sidebar (3-col) — Newsletter form, 2 Ad cards, Latest Posts (4 items), Most Viewed (3 numbered), Tags cloud
12. Footer — social icons bar (dark purple #191231, circular buttons, pink hover), parallax content (logo, nav, copyright), Component Dock link

## Design Token Notes

- Primary purple: #624693 — used on: header logo highlight, technology category badge, subscribe dots, footer logo span
- Accent mint: #61e49b — used on: read more button, world category badge, link hover, selection highlight
- Pink: #ff4b75 — used on: video category badge, footer social hover
- Orange: #f8a64f — used on: party category badge
- Dark: #0d0d0d — used on: subscribe button, nav active state
- Footer social bg: #191231
- Header bar bg: #f7f9f9
- Section bar: #ebeded
- Body text: #878787 (Open Sans 14px)
- Headings: Open Sans, black
- Font stack: replace HelveticaNeueLTPro with Inter or system sans-serif

## Component Plan

- `src/components/HeaderBar.tsx` — subscribe button + social icons row
- `src/components/HeaderContent.tsx` — logo + subtitle + promo card
- `src/components/Navbar.tsx` — sticky nav with logo, links, search
- `src/components/MobileMenu.tsx` — slide-in overlay menu
- `src/components/HeroSlider.tsx` — full-width carousel with content + arrows
- `src/components/IntroCards.tsx` — 3 category image cards
- `src/components/FeaturedPosts.tsx` — section title + mixed post layout
- `src/components/TechnologyPosts.tsx` — section title + 3 horizontal posts
- `src/components/WorldPosts.tsx` — section title + 2 medium posts
- `src/components/LoadMore.tsx` — centered button
- `src/components/Sidebar.tsx` — newsletter, ads, latest, most viewed, tags
- `src/components/Footer.tsx` — social bar + parallax content
- `src/components/PostCard.tsx` — reusable post card (variants: vLarge, vSmall, hLarge, vMed)
- `src/components/CategoryBadge.tsx` — colored pill badge

## Fidelity Notes

- Hero slider: use CSS-based carousel or lightweight lib (embla, splide) instead of Owl Carousel
- Parallax in footer: use CSS background-attachment or a lightweight parallax lib
- Mobile menu: implement as fixed overlay with transition, no external lib needed
- Category badge colors must match exactly: technology=#624693, world=#61e49b, video=#ff4b75, party=#f8a64f
- Subscribe button has 3 small colored dots (purple, pink, green) — decorative, can use small divs
- Post author images: use 30px round placeholder images from picsum.photos
- Section bar is a simple 26px tall gray (#ebeded) horizontal bar
- Section title uses bold 36px with line-height 0.75 (tight), subtitle is 16px bold gray
