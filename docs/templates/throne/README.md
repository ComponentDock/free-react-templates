# Throne — Design Notes & Task Outline

## Source
- ColorLib "Monarchy": https://colorlib.com/wp/template/monarchy/
- Preview: https://preview.colorlib.com/theme/monarchy/
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/monarchy-free-template.jpg

## Section Order (1:1 with original)

1. **Navbar** — Transparent, absolute-positioned over hero. Logo left, nav links right. Sticky with white bg + shadow on scroll. Mobile hamburger menu.
2. **Hero / Cover** — Full viewport cream (#f5ecdb) bg. Centered "Do What You Love" in 4rem orange. Subtitle text. 70px circular orange play button.
3. **Services** — 3 columns. Icon (4rem, orange) + heading + description. Interface Design, Product Design, Quality Results.
4. **Portfolio** — "Portfolio" heading. 6 items in 3-column grid (col-sm-6 col-lg-4). Hover: scale 1.05 + dark overlay.
5. **Testimonials** — "Testimonials" heading. 4 cards on cream bg. Each: circular photo, name (orange, bold), "Customer" role, quote text.
6. **Blog** — "Blog Updates" heading + subtitle. Horizontal carousel of post cards: image, date, title, author (circular avatar + name + role).
7. **Client Logos** — 4 logos in a row on light bg (#f7f7f7 or similar).
8. **Footer** — Cream bg. 4 cols: logo + description | contact links | nav links | nav links. Links: Contact Us, email, phone, Support, Home, Blog, Services, About Us.
9. **Copyright** — Cream bg. Social icons (FB, Twitter, LinkedIn, Instagram). Copyright line with year + "Component Dock" link.

## Fidelity Notes

- **Font:** Jost from Google Fonts (weights 300, 700, 900). Body 300, headings 700/900.
- **Colors:** Primary orange #f26200. Body text #757575. Headings #000. Cream sections #f5ecdb.
- **Buttons:** Pill shape (border-radius 30px). Play button is 70px circle.
- **Layout:** Bootstrap-style grid (convert to Tailwind). Max container width standard.
- **Sticky navbar:** Starts transparent over hero, becomes white with shadow on scroll.
- **Portfolio hover:** Image scales 1.05 + semi-transparent black overlay (opacity 0.2).
- **Testimonials:** Cards on cream bg with 30px padding. Circular avatars (border-radius 50%).
- **Blog carousel:** Horizontal scroll/carousel with post cards. Can use CSS scroll-snap or a simple flex overflow.
- **Client logos:** Simple img tags in a 4-column row.
- **Footer:** 4-column layout on cream bg. Copyright bar below with social icons.
- **No parallax** in this template (unlike some ColorLib templates).
- **Video play button** in hero — implement as a styled anchor/button, not an actual video embed.

## Task Outline

- [ ] Scaffold apps/throne from a minimal existing template
- [ ] Add Jost Google Font to index.html
- [ ] Create src/index.css with Tailwind @theme tokens (#f26200, #f5ecdb, #757575)
- [ ] Build Navbar component (sticky, mobile menu)
- [ ] Build Hero component (cream bg, headline, play button)
- [ ] Build Services component (3 cards with icons)
- [ ] Build Portfolio component (6-item grid with hover)
- [ ] Build Testimonials component (4 cards, cream bg)
- [ ] Build Blog component (carousel of post cards)
- [ ] Build ClientLogos component (4 logos)
- [ ] Build Footer component (4 columns, cream bg)
- [ ] Build Copyright component (social icons, year, Component Dock link)
- [ ] Compose all sections in App.tsx
- [ ] Write tests for each component (100% coverage)
- [ ] Run typecheck + lint + test:coverage + build
- [ ] Update TEMPLATES.md status
