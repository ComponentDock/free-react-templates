# Carouseldash — Implementation Tasks & Design Notes

## Source Mapping

- **ColorLib source:** Carousel 18 (`carousel-18`)
- **Preview URL:** https://preview.colorlib.com/theme/bootstrap/carousel-18/
- **New name:** `carouseldash` (apps/carouseldash, @free-react-templates/carouseldash)

## Section Order (1:1 with preview)

1. **Page wrapper** — `7rem` vertical padding, centered container
2. **Title** — "Carousel #8" (h2, centered, 20px, Roboto)
3. **Tab Navigation** — 3 tabs (First/Second/Third Tab), first active, bottom border underline on active
4. **Carousel** — Owl Carousel with 3 slides, each 50/50 image+text on desktop
5. **Footer** — "Made with Component Dock" link

## Design Fidelity Notes (per section)

### Tab Navigation

- **Structure:** `<div class="carousel-nav d-flex">` → three `<a class="col">` links
- **Active state:** `color: #000` + `::before` pseudo-element: `border-bottom: 1px solid #000` at `bottom: -1px`, full width
- **Inactive:** `color: #999`, no underline
- **Hover (inactive):** `color: #000`
- **Spacing:** 20px vertical padding, text-center, inline-block
- **Border:** 1px solid `#ccc` bottom border on `.carousel-nav` container, 40px margin-bottom

### Carousel Slides (3 total)

Each slide (`.media-29101`):

- **Desktop (md+):** `d-md-flex w-100` — image 50% (`flex: 0 0 50%`), text 50% with 50px padding
- **Mobile (≤991px):** stacked, text padding 20px, width 100%
- **Image:** `<img class="img-fluid">` — placeholder via picsum.photos
- **Text container:**
  - Category: `<a class="category d-block mb-4">` — uppercase, `#adb5bd`, 12px, bold, letter-spacing 0.2rem, text-transform uppercase
  - Heading: `<h2><a>` — Playfair Display, 2rem, line-height 1.3, margin-bottom 30px, color `#000`
  - Paragraph: `<p>` — Roboto 300, `#999999`

### Carousel Controls

- **Arrows:** `.owl-nav .owl-prev` (left: 20px) / `.owl-nav .owl-next` (right: 20px), top: 50%, `transform: translateY(-50%)`, 40px icons, colored circles (styleable)
- **Dots:** `.owl-dots` centered bottom: 40px, dots 7px circles, inactive `rgba(255,255,255,0.5)`, active `#fff`

### Typography

- **Body/UI:** Roboto (300, 400, 500, 700) — Google Fonts
- **Slide headings:** Playfair Display (400, 900) — Google Fonts
- **Category labels:** Roboto 700, 12px, uppercase, letter-spacing 0.2rem

### Colors (Tailwind @theme)

```js
colors: {
  bg: '#ffffff',
  'text-primary': '#000000',
  'text-muted': '#999999',
  'text-dim': '#adb5bd',
  'border-light': '#cccccc',
  'border-accent': '#000000',
  'dot-inactive': 'rgba(255,255,255,0.5)',
  'dot-active': '#ffffff',
}
```

### Fonts (index.html)

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;900&family=Roboto:wght@300;400;500;700&display=swap"
  rel="stylesheet"
/>
```

## Component Breakdown

```
src/
├── components/
│   ├── CarouselDashTabs.tsx      # Tab navigation (3 tabs, controlled)
│   ├── CarouselDashSlide.tsx     # Single slide: image + text content
│   ├── CarouselDashContent.tsx   # Carousel wrapper (Embla/Owl) + dots/arrows
│   └── Footer.tsx                # Component Dock link
├── App.tsx                       # Composes: Title → Tabs → Carousel → Footer
├── index.css                     # Tailwind @theme + imports
└── main.tsx                      # Entry
```

## Implementation Checklist

- [ ] Scaffold app: copy simplest existing app, rename to `carouseldash`, package `@free-react-templates/carouseldash`
- [ ] Add `public/CNAME` → `carouseldash.free.componentdock.com`
- [ ] Add `homepage` in package.json → `https://carouseldash.free.componentdock.com`
- [ ] Run `npm install` at repo root (registers workspace in lockfile)
- [ ] Configure `vite.config.ts` with `injectUiSource()`
- [ ] Add Google Fonts to `index.html`
- [ ] Define Tailwind `@theme` tokens in `src/index.css`
- [ ] Implement `CarouselDashTabs` with active state + click handler
- [ ] Implement `CarouselDashSlide` (responsive 50/50 split)
- [ ] Implement `CarouselDashContent` with Embla Carousel (arrows + dots)
- [ ] Wire tab state → carousel scroll (controlled sync)
- [ ] Add Footer with Component Dock link
- [ ] Write tests (100% coverage): tab switching, slide content, responsive, carousel controls
- [ ] Run `npm run verify:app carouseldash` (per-app gate)
- [ ] Commit: `feat: carouseldash template (ColorLib carousel-18)`
- [ ] PR → immediate squash merge
- [ ] Post-merge: update TEMPLATES.md `[x]` + surge URL + `npm run readme:status`

## Placeholder Images (picsum.photos, deterministic)

- Slide 1: `https://picsum.photos/seed/carouseldash-1/800/600`
- Slide 2: `https://picsum.photos/seed/carouseldash-2/800/600`
- Slide 3: `https://picsum.photos/seed/carouseldash-3/800/600`

## Category Labels per Tab

| Tab        | Category Label        |
| ---------- | --------------------- |
| First Tab  | `TRAVEL — FIRST TAB`  |
| Second Tab | `TRAVEL — SECOND TAB` |
| Third Tab  | `TRAVEL — THIRD TAB`  |

## Heading Text (all slides same)

> Take your mobile photography to the next level

## Paragraph Text (all slides same)

> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae fuga optio dolorem, fugit voluptates sint ducimus praesentium iste!

## Responsive Breakpoints

- **md (992px+):** 50/50 flex split, 50px text padding
- **≤991px:** stacked, 20px text padding
- **Tab bar:** always horizontal, 20px padding per tab

## No-Go (Provenance Rules)

- ❌ No `colorlib.com` or `preview.colorlib.com` strings in app code
- ❌ No ColorLib attribution in footer
- ✅ Provenance only in spec, TEMPLATES.md, PR description
