# Revault — Prep Tasks & Design Notes

**Source:** ColorLib AutoMotive (slug: `automotive`)
**Preview:** https://preview.colorlib.com/theme/automotive/
**New name:** `revault` (apps/revault, @free-react-templates/revault)

---

## Section Order (1:1 with original)

1. **Header Top Bar** — dark bg, phone, hours, map link, social icons
2. **Header Nav** — logo, main nav (Home/Services/Shop/Pages/Blog), search + cart
3. **Hero** — full-width bg image, centered welcome headline + CTA
4. **Services** — 4 items in alternating text/image grid layout
5. **Choose Us** — split: image left, checklist + CTA right
6. **Products** — 4-column product card grid with hover overlays
7. **Testimonials** — carousel with quotes
8. **Counter/Statistics** — bg image, 4 stat counters
9. **Latest News** — 3 blog cards with image overlay
10. **Footer Top** — 3 CTA items (Booking, Phone, Map)
11. **Footer Main** — 4 columns (About, Links, News, Address)
12. **Footer Copyright** — dark bar, copyright + social icons

## Design Token Map

```
font-family: "Public Sans", sans-serif (Google Fonts, weights 400-900)
brand-primary: #5F67FF
dark-bg: #25282C
heading-color: #353535
body-text: #727171
light-bg: #f7f7f7
button-flat: bg #5F67FF, color white, no radius, padding 14px 25px 12px
button-site: same + border-radius 2px
section-padding: 100px top/bottom
```

## Component Breakdown

| Component         | Notes                                                            |
| ----------------- | ---------------------------------------------------------------- |
| `TopBar`          | Dark header strip, flex row, icon + text items, social links     |
| `Navbar`          | Logo left, nav center, icons right. Pages has dropdown submenu   |
| `Hero`            | Full-width bg image via Tailwind bg-cover, centered text block   |
| `Services`        | 4 items alternating layout. Each: icon img + title + description |
| `ChooseUs`        | Split 50/50: image left, text right with checkmark list          |
| `Products`        | 4-col grid. Card: image with hover overlay, name, price, CTA     |
| `Testimonial`     | Carousel (use simple CSS scroll-snap or state-based slider)      |
| `Counter`         | Bg image section, 4 stat items with icon + number + label        |
| `Blog`            | 3-col grid. Card: image with date overlay, title, excerpt, link  |
| `FooterTop`       | 3-col CTA row with icons                                         |
| `FooterMain`      | 4-col: About, Quick Links, News, Address                         |
| `FooterCopyright` | Dark bar, text + social icons                                    |

## Fidelity Notes

- Services section uses a specific alternating layout: col-lg-3 with order
  classes to swap image/text positions. Implementer should match this pattern.
- Product hover overlay: 3 icons (heart, eye, exchange) appear on image hover.
- Testimonials: original uses OwlCarousel — implementer can use simple CSS
  or a lightweight React carousel solution.
- Counter: original uses a jQuery counter animation — implementer should
  implement a number counter effect (e.g. useInView + requestAnimationFrame).
- Footer top has 3 icon-based CTA items with dark background images.
- All images should use picsum.photos with deterministic seeds matching
  the template name.

## Placeholder Image Seeds

- Hero bg: `picsum.photos/seed/revault-hero/1920/1080`
- Services 1-4: `picsum.photos/seed/revault-svc-1/400/300` through svc-4
- Choose Us: `picsum.photos/seed/revault-choose/960/600`
- Products 1-4: `picsum.photos/seed/revault-prod-1/400/400` through prod-4
- Blog 1-3: `picsum.photos/seed/revault-blog-1/400/300` through blog-3
- Counter bg: `picsum.photos/seed/revault-counter/1920/600`
- Footer bg: `picsum.photos/seed/revault-footer/1920/400`

## Open Items for Implementer

- [ ] Decide carousel approach for Testimonials (CSS scroll-snap vs. component)
- [ ] Decide counter animation approach (useInView + rAF recommended)
- [ ] Ensure Services alternating layout uses Tailwind order utilities
