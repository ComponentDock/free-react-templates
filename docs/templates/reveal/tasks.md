# Reveal — Implementation Notes

## Source
- ColorLib: "Coming Soon V19" (`04-comming-soon`)
- Preview: https://preview.colorlib.com/theme/04-comming-soon/ (404 — unreachable)
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/coming-soon-19.jpg
- Design: Dark coming-soon page with split-screen layout

## Section order (single-section template)
1. Split-screen layout: hero image (left) + content panel (right)

## Component structure
```
src/
  main.tsx           — entry
  App.tsx            — renders <Hero />
  components/
    Hero.tsx         — full-screen split-screen coming-soon view
  index.css          — Tailwind entry + @theme tokens
```

## Fidelity notes

### Split-screen layout
- Full viewport height (`100vh`), flex row layout
- Left panel (~55% width): full-height hero image
- Right panel (~45% width): dark/black (#000000) content area
- On mobile (≤767px): stack vertically — image on top, content below

### Hero image (left panel)
- Full-height, `object-fit: cover`, takes entire left panel
- Black-and-white aesthetic photograph
- Use `https://picsum.photos/seed/reveal-hero/1200/1080` as placeholder
- No overlay needed — the image itself is dark/moody

### Content panel (right panel)
- Background: solid black (#000000)
- Padding: ~60px horizontal, vertically centered content
- Content order (top to bottom):
  1. Logo text — white, Poppins, weight 600, top-right area
  2. h1 "Under Construction" — white, bold, ~3rem
  3. Description paragraph — light gray (#b3b3b3), normal weight
  4. Email form row — input + button side by side
  5. Subtext — light gray, small
  6. Social links row — "Stay in touch :" + 5 icons

### Email form
- Row layout: input field (flex-1) + button (auto width)
- Input: white background, gray placeholder, no border, slight rounding (4px)
- Button: warm pink (#ff6b81) bg, white uppercase text, 4px radius
- Button hover: darken to ~#e55a6e

### Social links
- "Stay in touch :" label in white, small text
- 5 icons inline: Facebook, Twitter, Google+, Instagram, Pinterest
- Use `lucide-react` icons where available; fallback to SVG for Google+
- White color, small size (~16-18px)

### Fonts (loaded via Google Fonts)
- Poppins 400, 500, 600, 700 (all text — headings and body)

### Tailwind @theme tokens to define
```
--color-brand: #ff6b81;
--color-brand-hover: #e55a6e;
--color-surface: #000000;
--color-text-primary: #ffffff;
--color-text-secondary: #b3b3b3;
--font-heading: 'Poppins', sans-serif;
--font-body: 'Poppins', sans-serif;
```

### Implementation tasks
1. Create `apps/reveal/` from simplest existing coming-soon app (e.g. `apps/dawn/`)
2. Rename package to `@free-react-templates/reveal`
3. Implement `Hero.tsx` with split-screen layout
4. Add email form with input + CTA button
5. Add social links footer row
6. Set up `@theme` tokens in `index.css`
7. Load Poppins via Google Fonts `<link>` in `index.html`
8. Add responsive breakpoint: stack on mobile
9. Write tests (Vitest + RTL) — cover all Gherkin scenarios
10. Verify 100% coverage
11. Set `public/CNAME` = `reveal.free.componentdock.com`
12. Set `"homepage"` in `package.json`
13. Add Component Dock footer link
