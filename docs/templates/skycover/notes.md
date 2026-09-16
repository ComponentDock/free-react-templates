# Skycover — Implementation Notes

**Source:** ColorLib "Roofing" — https://colorlib.com/wp/template/roofing/
**Preview:** https://preview.colorlib.com/theme/roofing/
**Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript

## Section order (top → bottom)

1. **TopSocialBar** — Thin bar with logo (roof icon + "Skycover") + social icons (FB, TW, IG, DR)
2. **Navbar** — Dark bg (`#343a40`), Bootstrap-style responsive nav with hamburger
3. **Hero** — Full-height carousel (700px), 2 slides with background images, overlay, centered text (gold tagline h2 + white h1 + CTA button)
4. **AboutQuote** — Two-column: left = heading + paragraph + 3-tab pill nav (Mission/Vision/Value); right = "Get a Quote" form card (gold header, service dropdown, name, email, date, time, message, submit)
5. **CounterBand** — Full-width gold bg (`#d9ba2b`), 4 animated counters in white circles (45 years, 8500 projects, 2342 clients, 30 partners)
6. **Services** — Heading + vertical pill tabs left (6 services) + content right (heading, paragraphs, check-icon list) + side image (lg:3)
7. **Projects** — Full-width 4-column gallery (8 items, 270px tall), hover overlay with title/category, modal lightbox on click
8. **Testimonials** — Light bg (`#ebecf1`), carousel with quote cards (quote icon, text, avatar, name, position)
9. **Blog** — 3 blog cards (image, author info, title)
10. **Pricing** — Light bg, 4-tier cards ($49/$79/$109/$149), second card highlighted gold
11. **Footer** — Dark bg (`#252525`), 4 columns (logo+social, services, hours, contact) + Component Dock credit

## Design notes

- **Brand color:** `#d9ba2b` (gold/yellow) — use in `@theme` as `--color-brand`
- **Font:** Poppins from Google Fonts (weights 400, 500, 600, 700)
- **Button style:** 4px radius, uppercase, 11px, letter-spacing 1px, weight 600, gold bg, white text; hover: transparent bg + gold border + gold text
- **Nav:** Dark `#343a40` bg, white text; responsive hamburger below 992px
- **Hero:** 700px height, bg images via `picsum.photos/seed/skycover-N/W/H`, dark overlay `rgba(0,0,0,0.2)`, nav arrows on hover
- **About tabs:** Pill-shaped with shadow, active = gold bg + white text
- **Quote form:** White card, gold header bar, inputs with 4px radius, border `rgba(0,0,0,0.1)`
- **Counter:** Gold full-width band, 80px white circles with gold icons, animated count-up
- **Services tabs:** Vertical pills, gold active accent, check-icon bullets
- **Projects:** 270px height items, hover overlay (black 0→0.8 opacity), modal lightbox (NOT magnific-popup)
- **Testimonials:** Light bg, owl-carousel style, quote icon, circular avatar
- **Blog:** 3-column, background image, author avatar + info + title
- **Pricing:** 4 cards, shadow `0px 24px 48px -13px rgba(0,0,0,0.05)`, hover shadow increases, active card gets gold price bar
- **Footer:** Dark `#252525`, gold headings, white text, social icons as circular buttons

## Component file map (suggested)

```
apps/skycover/src/
  App.tsx              — Compose all sections
  components/
    TopSocialBar.tsx   — Logo + social icons
    Navbar.tsx         — Responsive dark navbar
    Hero.tsx           — Full-height carousel (2 slides)
    AboutQuote.tsx     — Tab pills + quote form (2-column)
    CounterBand.tsx    — Gold counter section (4 counters)
    Services.tsx       — Tabbed services + side image
    Projects.tsx       — 8-item gallery grid
    Testimonials.tsx   — Carousel testimonial cards
    Blog.tsx           — 3 blog cards
    Pricing.tsx        — 4-tier pricing grid
    Footer.tsx         — Dark 4-column footer
  index.css            — Tailwind entry + @theme tokens
```

## Source references (live DOM)

- Hero tagline text: "We are best Roofing Services" / "Dedicated to providing the highest quality roofing services"
- Hero slide 2: "We care about your home" / "Quality roofing at a affordable price"
- About: "We help more than 45 years installing your roof"
- Counter values: 45, 8500, 2342, 30
- Services: Skylights, Waterproofing, Industrial Roofing, Residential Roofing, Gutter Cleaning, Commercial Roofing
- Pricing: Standard $49, Basic $79, Standard $109, Professional $149
- Footer: 203 Fake St. Mountain View, San Francisco, California, USA / +2 392 3929 210 / info@yourdomain.com
