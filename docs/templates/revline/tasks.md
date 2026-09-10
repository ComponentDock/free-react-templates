# Revline — ColorLib Automotive replication

## Template mapping

| Field | Value |
|-------|-------|
| New name | `revline` |
| ColorLib source | `automotive` |
| Source URL | https://colorlib.com/wp/template/automotive/ |
| Preview URL | https://preview.colorlib.com/theme/automotive/ |

## Design notes

### Section order (matches original 1:1)

1. HeaderTopBar — charcoal bar, phone + hours + social
2. Navbar — logo, nav links, search/cart icons
3. Hero — background image, "Welcome To" span, headline, subtext, blue CTA
4. Services — "What We Do?", 4 items alternating icon+text / image
5. ChooseUs — split layout, image + checklist + CTA
6. Products — "Our Products", 4-card grid, hover overlay
7. Testimonials — carousel, quotation icon, dot nav
8. CounterStats — parallax bg, 4 stat columns with icons
9. LatestNews — light gray bg, 3 blog cards
10. Footer — CTA bar, 4-column text, copyright bar

### Key fidelity notes

- **Two-tier header**: top bar (dark, utility info) + main nav (white, links). The active nav link gets a blue underline. Mobile gets hamburger + offcanvas menu.
- **Hero**: The "Welcome To" text is in a smaller `<span>` inside the h2, regular weight, 40px. Main headline is 60px bold. Blue button uses `#5F67FF` with `border-radius: 2px`.
- **Services grid**: This is a mixed layout — 4 items arranged in a 4-column grid where each row alternates icon+text card and image card. Use CSS grid with explicit ordering to replicate the alternating pattern.
- **ChooseUs**: The image is full-height on the left. Content is on the right with an offset. The checklist uses blue check icons. Button is slightly wider padding.
- **Products**: The hover overlay slides in from bottom with 3 circular action icons (heart, eye, exchange). Price shown prominently.
- **Testimonials**: Simple carousel (use a lightweight solution). Dot indicators. Quotation icon is large, blue.
- **CounterStats**: Background image with dark overlay. Numbers are large and bold. The section overlaps the content above by `-120px` margin-top.
- **Footer**: The CTA bar uses image backgrounds per item. Main text area has a 1px white border-top divider. Copyright bar is a solid dark strip.

### Component breakdown

```
src/
  main.tsx
  App.tsx
  index.css            — Tailwind entry + @theme tokens
  components/
    HeaderTopBar.tsx   — dark utility bar
    Navbar.tsx         — logo + nav + icons
    Hero.tsx           — bg image, heading, CTA
    Services.tsx       — "What We Do?" grid
    ChooseUs.tsx       — split layout
    Products.tsx       — product card grid
    Testimonials.tsx   — carousel
    CounterStats.tsx   — stat counters
    LatestNews.tsx     — blog cards
    Footer.tsx         — CTA bar + text + copyright
```

### Design tokens for @theme

```css
@theme {
  --color-primary: #5F67FF;
  --color-primary-hover: #4971FF;
  --color-charcoal: #25282C;
  --color-dark: #353535;
  --color-body: #727171;
  --color-light: #f7f7f7;
}
```

## TODO

- [ ] Scaffold app folder from template starter
- [ ] Install dependencies + register workspace
- [ ] Create index.css with @theme tokens (Public Sans via Google Fonts link in index.html)
- [ ] Build HeaderTopBar component (dark bar, phone, hours, social icons)
- [ ] Build Navbar component (logo, nav links, Pages dropdown, search/cart)
- [ ] Build Hero component (bg image placeholder, heading hierarchy, CTA button)
- [ ] Build Services component (4 alternating icon/image cards)
- [ ] Build ChooseUs component (split layout, checklist, CTA)
- [ ] Build Products component (4-card grid, hover overlay)
- [ ] Build Testimonials component (carousel, quote cards)
- [ ] Build CounterStats component (parallax bg, 4 stat items)
- [ ] Build LatestNews component (3 blog cards)
- [ ] Build Footer component (CTA bar, text columns, copyright)
- [ ] Compose all sections in App.tsx
- [ ] Write tests for each component (100% coverage)
- [ ] Run verify-app.sh, fix any issues
- [ ] Self-review + commit
