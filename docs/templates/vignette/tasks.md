# Vignette — Task Outline

> **SHIPPED** — this prep's design shipped as `apps/vignette`
> (<https://vignette.free.componentdock.com>). The unchecked items below are
> prep history, not outstanding work.

Source: ColorLib **Karl** (https://preview.colorlib.com/theme/karl/ — HTTP 200,
51,776 B, `css/core-style.min.css?v=3.0.0` 235,452 B sha256 `88f8c2fa2f6c…`,
re-read 2026-10-24) · new name **vignette** · fashion e-commerce, multi-page source
consolidated to one page.

Companion research: `docs/templates/vignette/design-notes.md`; contract:
`openspec/specs/template-vignette/spec.md`.

> The brief was rewritten 2026-10-24 (it had described ColorLib Bato, and its token
> list prescribed `#F9CE00` / Playfair Display / Karla — none of which the reference
> uses). Tokens below are measured from the live Karl sheet: hot pink `#d6003a`
> dominant, `#ff084e` hover accent, Open Sans.

## Section order (top → bottom)

1. **Header** — wordmark, nav (Home · Pages · Shop · Product Details · Cart · Checkout · Help & Contact), category strip, cart badge “2 · Your Bag · $114.80”, promo line “Karl fashion store / Free Shipping & Returns / +1 (202) 555-0142”
2. **DiscountBanner** — 3 equal cells; `#b8b8b8` · **`#d6003a`** (middle) · `#b8b8b8`; codes on line 2
3. **HeroSlider** — 3 full-bleed photo slides (Fashion Trends / Summer Collection / Women Fashion), 14px uppercase kicker, ~92px uppercase headline, `.karl-btn`, vertical 9px dot rail at `left:1%`
4. **TopCategories** — 2 half-width tiles (“Sale 30%”, “Designer bags”) with a `#ff084e` hover wash
5. **NewArrivals** — centred “New Arrivals”, filter tabs ALL · WOMAN · MAN · ACCESSORIES · SHOES · KIDS, 6-product grid + promo tile, empty-state copy
6. **OfferSection** — `.offer_area` `height:700px` background photo band, one CTA
7. **Testimonials** — quote cards with `50%` initials avatars
8. **Footer** — 7 link columns + newsletter (“Subscribe to our newsletter”), `2px #e5e5e5` top border, Component Dock line

## Component file plan

```
src/
  App.tsx
  index.css            (Tailwind + @theme tokens)
  main.tsx
  components/
    Header.tsx
    DiscountBanner.tsx
    HeroSlider.tsx
    TopCategories.tsx
    NewArrivals.tsx
    OfferSection.tsx
    Testimonials.tsx
    Footer.tsx
```

## Fidelity notes

- **Colors:** `#d6003a` accent · `#ff084e` hover accent · `#ffffff` surface · `#000`/`#3a3a3a` ink · `#6b6b6b` muted · `#f4f2f8` grey bed · `#e5e5e5` divider · `#b8b8b8` promo cells. Nothing from the Bootstrap vendor block.
- **Font:** Open Sans (Google Fonts), 400/600/700; body ~14–15px, slide headline ~92px uppercase.
- **Buttons:** `.karl-btn` — `min-width:170px`, `height:55px`, **3px solid white border**, `border-radius:2px`, 14px/700 uppercase, `line-height:49px`; hover/focus fills `#d6003a` (bg + border).
- **Discount band:** three equal cells, middle `#d6003a`, outer `#b8b8b8`; white text, code line smaller and uppercase.
- **Hero dots:** vertical rail, 9px white circles, 2px white border, `50%` radius, active dot `#ff084e`.
- **Category tiles:** 92px uppercase white headline over the photo, hover overlay `#ff084e`; no card chrome or radius.
- **Product cards:** white card, name + price, “Add to cart” affordance on hover, `Hot` badge on the promo tile, struck-through “Was $25.90 now $15.90”.
- **Footer:** white with a 2px `#e5e5e5` top border and `100px 0 50px` padding; newsletter form (email + Subscribe) lives here, not in a standalone band.

## Implementation tasks

- [ ] Scaffold `apps/vignette/` from the simplest shipped app, rename package to `@free-react-templates/vignette`
- [ ] `public/CNAME` = `vignette.free.componentdock.com`; `package.json` homepage to match
- [ ] `@theme` tokens in `index.css` (accent, hover accent, surface, ink, muted, grey bed, divider)
- [ ] Google Fonts `<link>` for Open Sans in `index.html`
- [ ] Create `Header` (sticky bar, nav, category strip, static cart badge)
- [ ] Create `DiscountBanner` (3 cells, middle `bg-brand`)
- [ ] Create `HeroSlider` (3 slides, interval + manual dots, vertical rail)
- [ ] Create `TopCategories` (2 tiles, `#ff084e` hover wash)
- [ ] Create `NewArrivals` (filter state, 6 cards + promo tile, empty state)
- [ ] Create `OfferSection` (700px background band, single CTA)
- [ ] Create `Testimonials` (initials avatars, 3 quotes)
- [ ] Create `Footer` (link columns, newsletter form, Component Dock link)
- [ ] Compose `App.tsx` in source order
- [ ] Write tests for every component (100% coverage)
- [ ] Run `scripts/verify-app.sh vignette`
- [ ] Commit and open PR
