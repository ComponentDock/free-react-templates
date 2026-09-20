# GigFest — Design Notes & Implementation Outline

## Source

ColorLib Eventcon: https://preview.colorlib.com/theme/eventcon/
Dark concert/event landing page.

## Implementation order (section-by-section)

### 1. index.html — Fonts + Setup

- Import Google Fonts: Anton, Muli (400,500,600), Monoton.
- Set `<title>GigFest</title>`.
- No external CSS frameworks (Tailwind replaces Bootstrap).

### 2. src/index.css — Theme tokens

```css
@theme {
  --color-brand: #FF4533;
  --color-navy: #001D38;
  --color-dark: #000000;
  --color-body-text: #AAB1B7;
  --color-light-gray: #707070;
  --font-heading: "Anton", sans-serif;
  --font-body: "Muli", sans-serif;
}
```

### 3. Navbar.tsx

- Transparent background, fixed/sticky at top.
- Logo on left (text "GigFest" or SVG).
- Nav links center: Home, Performer, Program, Sponsors, Contact.
- "Buy Tickets" CTA button right — brand bg, white text, sharp corners, Anton.
- Mobile: hamburger toggle, slide-in menu.

### 4. Hero.tsx

- Full-screen height (100vh), background image from picsum.
- Dark overlay gradient (linear-gradient rgba(0,0,0,0.3) to black).
- Centered text: date span, h1 title, p subtitle.
- Decorative SVG shapes (can approximate with Tailwind-positioned divs).

### 5. Performers.tsx

- Black bg section.
- Section heading "Performers" — Anton, white, left-aligned.
- 2-column grid on desktop (col-6), 1-column on mobile.
- 4 performer cards: image (picsum, square crop), name (h4), role (span).
- Hover: subtle scale/tilt effect (CSS transform).

### 6. AboutProgram.tsx

- Black bg section.
- Centered heading "About Program" + paragraph.
- Split layout: left = image with decorative SVG, right = text + CTA.
- CTA: boxed-btn3 style (brand bg, white text, sharp corners, Anton).

### 7. ProgramDetails.tsx

- Background image with dark overlay2 gradient.
- Centered heading "Program Details".
- Vertical timeline: 4 items, each with time, date, image, name.
- Circle indicators on timeline (CSS ::before pseudo-elements).
- Alternating fade-in animations.

### 8. Sponsors.tsx

- Black bg section.
- Heading "Sponsor Logos" centered.
- Carousel of brand logos (use picsum or simple placeholder SVGs).
- Prev/next arrows with circular style (50% border-radius, transparent bg).

### 9. Footer.tsx

- Two parts:
  - footer_top: centered event info (date, venue, description, CTA button).
  - copyright bar: centered text with Component Dock link.
- Must link to https://www.componentdock.com/.

### 10. App.tsx

Compose all sections in order:
Navbar → Hero → Performers → AboutProgram → ProgramDetails → Sponsors → Footer.

## Fidelity notes

- Original uses Bootstrap grid → replace with Tailwind grid/flex.
- Original uses owl-carousel for sponsors → use CSS scroll-snap or simple carousel.
- Original uses WOW.js animations → use Tailwind animate or framer-motion if needed.
- Original uses tilt.js on performer images → CSS transform on hover.
- Original uses Google Maps embed → placeholder div with "Map" label or static map image.
- All images: picsum.photos with seed "gigfest-N".
- Colors, fonts, spacing, section order must match original exactly.
- Dark theme throughout — never use light backgrounds.

## Key pitfalls

- Anton font is all-caps by nature — use `text-transform: capitalize` for nav items.
- Muli is now "Mulish" on Google Fonts — use the updated name.
- Sharp button corners (border-radius: 0) — do NOT round them.
- Letter-spacing 2px on CTA buttons.
- Performer grid is 2x2 centered (col-lg-8 wrapping col-lg-6 items).
