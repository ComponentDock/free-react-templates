# Tokenly — Tasks & Design Notes

## ColorLib Source
- Template: Cryptian
- Slug: `cryptian`
- URL: https://colorlib.com/wp/template/cryptian/
- Preview: https://preview.colorlib.com/theme/cryptian/

## Section Order (top to bottom)

1. **Header** — Floating/absolute nav, logo left, centered nav links, "login" gradient btn right. Transparent → solid dark navy on scroll.
2. **Hero / Welcome** — Particles.js canvas bg. Two-col: left headline + 2 gradient CTAs; right crypto illustration.
3. **Featured Logos** — "We are featured in" heading, auto-scrolling logo carousel.
4. **About** — Two-col: left illustration, right heading + text + gradient "join us on telegraph" btn.
5. **Feature Cards** — 3-col grid of icon+title+description cards on darker blue bg (#1938a2), hover lift.
6. **ICO Live** — Deeper blue bg (#031b69). Stats row (tokens sold, rates, countdown), progress bar (gradient fill ~80%), "Buy Tokens" btn.
7. **White Paper** — "Download Documentation" heading, 5 flag+language buttons.
8. **Token Distribution** — Two pie chart illustrations with legend lists.
9. **Roadmap** — Timeline carousel, alternating left/right milestone cards.
10. **Core Team** — 4-member grid with photo, name, role, 3 social links.
11. **Advisory Team** — 4-member grid, same card style.
12. **Mobile App** — Two-col: left text + Play Store / App Store btns; right phone mockup.
13. **FAQ** — 4 pill tabs (General, ICO, Token, Cryptocurrency), carousel of FAQ cards per tab.
14. **Community** — Masonry-style grid of social icons (8 platforms).
15. **Footer** — Logo, two link columns, newsletter subscribe form.
16. **Copyright** — Component Dock attribution.

## Design Token Notes (for Tailwind @theme)

```css
@theme {
  --color-brand-blue: #062489;
  --color-brand-dark: #000D47;
  --color-brand-mid: #1938a2;
  --color-brand-mid-hover: #122e91;
  --color-brand-deep: #031b69;
  --color-accent-pink: #f9748f;
  --color-accent-pink-light: #FB9A8C;
  --color-accent-gold: #F6D266;
  --color-text-body: #cbe5ff;
  --color-text-heading: #ffffff;
  --color-progress-track: #004cff;
  --color-dropdown-bg: #001763;
  --font-family-sans: "Montserrat", sans-serif;
  --border-radius-card: 5px;
  --border-radius-pill: 50px;
}
```

## Component Notes

### Navbar
- Use `<nav>` with flex layout: logo left, links center, login right
- Sticky on scroll: detect scroll position, toggle solid bg class
- Mobile: hamburger menu with slide-down nav

### Gradient Button
- CSS: `background: linear-gradient(to right, #fe998b, #fa768d, #f78ca0)`
- Hover: pseudo-element slides from 0% to 100% width (transition 0.3s)
- Variants: default, v2 (taller 55px), apps-btn (with icon)

### Feature Cards
- Background #1938a2, hover → #122e91 + translateY(-5px)
- Transition 0.3s all
- Icon above, title, paragraph text

### Progress Bar
- Track: #004cff, rounded pill (50px radius)
- Fill: gradient gold→orange, rounded left half
- Callout bubble: positioned at fill end, shows dollar amount

### FAQ Tabs
- Pill-style tab buttons (rounded, filled bg when active)
- Carousel (owl-carousel or similar) for FAQ cards per tab
- "readmore" link with arrow icon on each card

### Community Grid
- Masonry layout: varying card sizes (some full width, some half)
- Each icon in a circle/link with brand color hover

### Team Cards
- Photo (square or slightly rounded), name (h3), role (h6 uppercase)
- 3 social icons in a row below

## Implementation Priority

1. Scaffold: create `apps/tokenly/`, copy simplest existing app, rename package
2. Install dependencies, configure vite.config.ts with injectUiSource
3. Build components top-down: Header → Hero → ... → Footer
4. For each section: write tests first (TDD), then implement
5. Use `packages/ui` components (Button, ButtonLink, cn) where possible
6. Replace placeholder images with `picsum.photos/seed/tokenly-<n>/<w>/<h>`
7. Verify 100% test coverage, typecheck, lint, build
8. Run `scripts/verify-app.sh tokenly`
