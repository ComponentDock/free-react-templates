# Nucleus — Design Notes & Implementation Tasks

**Source:** ColorLib "Atomic" — https://colorlib.com/wp/template/atomic/
**Preview:** https://preview.colorlib.com/theme/atomic/
**New name:** nucleus
**Category:** Business Website (multi-section, full-page)

## Section order (from original)

1. **Navbar** — Dark bg (#000), logo left ("Nucleus"), nav links right, hamburger mobile
2. **Hero/Cover** — Full-width bg image, centered video play icon, h1 headline, lead subtext, CTA button
3. **Features** — 3-column cards (icon + h3 + paragraph), white bg
4. **Portfolio** — Centered h2, 4-image responsive grid with hover overlay
5. **Services** — 6-item grid on #f8f9fa bg (icon + title)
6. **Blog** — 4 article cards (image + date + title + excerpt), responsive grid
7. **Counter Strip** — Full-width #0389FF bg, 3 animated counters (scroll-triggered)
8. **Footer** — #f8f9fa bg, 3 columns (brand, links, subscribe)

## Design tokens (for Tailwind @theme)

```
--color-primary: #0389FF;
--color-primary-hover: #006ecf;
--color-bg: #ffffff;
--color-bg-light: #f8f9fa;
--color-text: #212529;
--color-text-muted: #6c757d;
--color-heading: #000000;
--color-border: #dee2e6;
--color-dark: #000000;
--font-family-body: 'Work Sans', sans-serif;
```

## Implementation tasks

### Phase 1: Scaffold

- [ ] Copy simplest existing app, rename to `nucleus`
- [ ] Set package name `@free-react-templates/nucleus`
- [ ] Update `public/CNAME` to `nucleus.free.componentdock.com`
- [ ] Update `package.json` homepage to `https://nucleus.free.componentdock.com`
- [ ] Run `npm install` at repo root for lockfile registration
- [ ] Set up `vite.config.ts` with `injectUiSource()`
- [ ] Set up `src/index.css` with Tailwind + theme tokens
- [ ] Create `src/test/setup.ts`

### Phase 2: Components

- [ ] `Navbar.tsx` — Dark bg, logo, nav links, hamburger toggle (mobile)
- [ ] `Hero.tsx` — Bg image, play icon, h1, lead, CTA button
- [ ] `Features.tsx` — 3 feature cards (icon + heading + description)
- [ ] `Portfolio.tsx` — Centered heading, 4-image grid with hover overlay
- [ ] `Services.tsx` — 6-item grid on light gray bg
- [ ] `Blog.tsx` — 4 article cards in responsive grid
- [ ] `CounterStrip.tsx` — Full-width blue bg, 3 animated counters (scroll-triggered)
- [ ] `Footer.tsx` — 3-column footer with Component Dock link

### Phase 3: Tests (RED)

- [ ] Navbar: renders links, hamburger toggles mobile menu
- [ ] Hero: renders heading, subtext, CTA button
- [ ] Features: renders 3 cards
- [ ] Portfolio: renders 4 images with hover state
- [ ] Services: renders 6 items
- [ ] Blog: renders 4 article cards
- [ ] CounterStrip: renders 3 counters, animation triggers on scroll
- [ ] Footer: renders 3 columns, Component Dock link
- [ ] App: composes all sections in correct order

### Phase 4: Verify

- [ ] `npm run verify:app nucleus` passes (typecheck + lint + 100% coverage + build)
- [ ] All images use `picsum.photos/seed/nucleus-<n>` placeholders
- [ ] Footer links to `https://www.componentdock.com/`
- [ ] No ColorLib references in app code
- [ ] Work Sans loaded via Google Fonts in index.html

## Fidelity notes

- The original uses AOS (Animate On Scroll) for fade-in effects. In React, implement with IntersectionObserver or a lightweight alternative; do not add the AOS npm package.
- The original uses Bootstrap 4 grid. Recreate with Tailwind responsive utilities.
- The original uses Ionicons and IcoMoon fonts. Replace with `lucide-react` icons.
- The original video play button links to a Vimeo video. Use a placeholder or make it a decorative element.
- The counter animation can be implemented with `useEffect` + `IntersectionObserver` to trigger counting on scroll.
- The original navbar uses a `dark` class. Implement with bg-black text-white.
- The hamburger menu uses Bootstrap collapse. Implement with React state + conditional class.
