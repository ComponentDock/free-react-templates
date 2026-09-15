# RoomHaus — Implementation Notes

Source: ColorLib "Theinterior" — https://preview.colorlib.com/theme/theinterior/
New name: roomhaus (replaces ColorLib source name per naming rules)

## Section order (matches reference 1:1)

1. **Header** — transparent nav, sticky on scroll, logo left, nav links right, "Contact Us" CTA button
2. **Hero/Slider** — full-width image slides with dark overlay `rgba(1,10,28,0.3)`, white heading "Modern Interior & Design", subtext, gold CTA, dot navigation
3. **Our Info** — 4-column stats row with icons, numbers, descriptions (section-bg light)
4. **Professional Services** — intro heading "Best Interior Services" + paragraph, left-aligned
5. **Services** — 3 service cards in a row (Lighting, Interior Design, Office Decoration), each with image + title + description
6. **Gallery** — image grid with hover overlays
7. **Team** — team member cards with photo, name, social links (3 across)
8. **Testimonials** — dot-style slider, centered quote, founder name + designation
9. **Brand/Partner** — horizontal row of partner logos
10. **WantToWork CTA** — gold `#c6a16e` banner, heading, dark "Contact Us" button
11. **Blog** — 2 recent blog cards with image, date badge, title, excerpt, "Read more" link
12. **Footer** — dark `#010b1d` background, 3-column layout (logo+text, links, Instagram+contact), Component Dock link, social icons

## Fidelity notes

- Hero overlay: use absolute-positioned div with `bg-black/30` (Tailwind) or `rgba(1,10,28,0.3)` to match reference exactly
- Section backgrounds alternate: white/light `#f7f7f7` and light gray for visual rhythm
- CTA buttons: primary = gold `#c6a16e` with white text, 5px radius; secondary = dark `#16161a`
- Team images: use `picsum.photos/seed/roomhaus-team-N/` for deterministic placeholders
- Gallery images: use `picsum.photos/seed/roomhaus-gallery-N/` deterministic seeds
- Blog images: use `picsum.photos/seed/roomhaus-blog-N/`
- Hero background: use `picsum.photos/seed/roomhaus-hero/1920/1080`
- Footer Instagram feed: show 4 thumbnail placeholders (static, no actual Instagram integration)

## Component plan

| Component | Section | Notes |
|-----------|---------|-------|
| Navbar | 1 | Transparent → solid on scroll, hamburger on mobile |
| Hero | 2 | Slider dot navigation, overlay, centered text |
| InfoStats | 3 | 4-column grid with icon + number + label |
| ServicesIntro | 4 | Heading + paragraph, left-aligned |
| ServiceCards | 5 | 3-card grid, image + title + description |
| Gallery | 6 | Image grid with hover overlay |
| Team | 7 | 3-column card grid |
| Testimonials | 8 | Dot slider, centered content |
| BrandLogos | 9 | Horizontal row, partner logos |
| WantToWork | 10 | Gold banner, heading + button |
| Blog | 11 | 2-column card grid |
| Footer | 12 | 3-column, dark bg, social icons |

## Design token CSS (for index.css @theme)

```
--color-brand-gold: #c6a16e;
--color-dark-navy: #16161a;
--color-footer-dark: #010b1d;
--color-red-accent: #e6373d;
--color-gold-alt: #dca73a;
--color-light-bg: #f7f7f7;
--color-gray-text: #506172;
```
