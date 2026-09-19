# Cellarhouse — Implementation Tasks & Design Notes

Source: ColorLib "Liquor Store" template
Preview: https://preview.colorlib.com/theme/liquorstore/
Name: cellarhouse (new, never "liquorstore")
Category: E-Commerce / Liquor Store

## Section order (from live DOM)

1. **TopBar** — terracotta bar (phone, email, social icons, Sign Up/Log In)
2. **Navbar** — dark transparent (logo, nav links, cart with dropdown badge)
3. **HeroWrap** — full-screen bg photo + overlay, italic headline, 2 buttons
4. **IntroStrip** — 3 terracotta columns (Support, Money Back, Free Shipping)
5. **AboutSection** — image left, heading + year counter right
6. **CategoryGrid** — 6 liquor types with circular images
7. **ProductsSection** — "Tastefully Yours" heading + 8 product cards + CTA
8. **Testimonials** — dark bg photo, "Happy Clients", carousel
9. **BlogSection** — "Recent Blog" + 2 side-by-side entries
10. **Footer** — dark 5-column layout + copyright bar

## Component structure

```
src/
  App.tsx               — compose all sections in order
  components/
    TopBar.tsx          — terracotta bar (contact info, social icons, auth links)
    Navbar.tsx          — transparent dark navbar (logo, nav links, cart dropdown)
    HeroWrap.tsx        — hero with bg photo overlay, headline, CTA buttons
    IntroStrip.tsx      — 3 intro feature cards on terracotta bg
    AboutSection.tsx    — split layout (image + text + animated counter)
    CategoryGrid.tsx    — 6 category cards with circular images
    ProductsSection.tsx — heading + 4×2 product grid + "View All" button
    Testimonials.tsx    — carousel on dark bg photo
    BlogSection.tsx     — 2 blog entries side by side
    Footer.tsx          — 5-column dark footer + copyright bar
```

## Design token mapping (CSS → Tailwind @theme)

| Token | CSS value | Tailwind usage |
|-------|-----------|----------------|
| brand-terracotta | `#a23f25` | Top bar bg |
| brand-burnt | `#b7472a` | Intro bg, buttons, social hover |
| footer-bg | `#1a1a1a` | `bg-neutral-900` |
| hero-overlay | dark semi-transparent | `bg-black/60` or similar |
| body-dark | `#212529` | `text-neutral-900` |
| body-light | `rgba(255,255,255,0.7)` | `text-white/70` |
| heading-font | Spectral (italic) | Google Fonts, `font-style: italic` |
| body-font | System stack | Default Tailwind sans |
| btn-radius | 0.25rem | `rounded` |
| hero-heading | 80px, italic, bold | `text-8xl italic font-bold` |

## Fidelity notes

- The hero heading uses italic serif font (Spectral via Cloudflare preload)
  — load Spectral from Google Fonts in `index.html`.
- Top bar is a solid terracotta `#a23f25` strip; navbar is absolutely
  positioned over the hero (top 35px, transparent bg).
- Product images use `background-image` CSS property (cover, centered) —
  recreate with `<img>` tags and `object-cover`.
- Product hover overlay: slide-up action icons (bag, heart, eye) in
  60×60 white-bordered squares. Use lucide-react equivalents.
- Category grid uses circular background images — recreate with `rounded-full`
  image containers.
- The year counter (115) uses `data-number` attribute with JS animation —
  implement with `useEffect` + `IntersectionObserver` for scroll-triggered
  count-up.
- Testimonial carousel: implement with lightweight React carousel or CSS-only.
- Blog entries: image left + text right in a flex row, with `.bg-light` text
  area.
- Footer columns: Logo + socials, My Accounts, Information, Quick Link,
  Have a Questions? (with address, phone, email using lucide-react icons).
- Replace all Colorlib credit in footer with "Component Dock" link.

## Potential issues

- Navbar transparency over hero requires careful z-index management.
- Product hover overlay needs `position: absolute` inside a `position: relative`
  container.
- Counter animation needs client-side only rendering (no SSR mismatch).
- Cart dropdown mini-cart is decorative only (no real state management needed).
