# Signal — Prep Notes

## Source mapping
- ColorLib name: "07 Comming Soon" / "Coming Soon V22"
- Source slug: `07-comming-soon`
- Category: Coming Soon Page Template (Gradient overlay + email form)
- Preview URL: https://colorlib.com/etc/cs/07-comming-soon.html
- Product page: https://colorlib.com/wp/template/07-comming-soon/
- Screenshot: coming-soon-22.jpg (1200×972)

## Architecture overview
Single-page app, single route, no routing needed.

### Component tree
```
App
├── SignalPage (full-viewport, gradient overlay)
│   ├── EmailSignup (pill input + integrated submit)
│   ├── CountdownTimer (4 glowing circular units)
│   └── SocialLinks (icon row with label)
└── Footer (Component Dock attribution)
```

### Key differences from Debut (05) / Overture (06)
Signal has THREE structural differences that make it distinct:

1. **No wrapper div** — Background image on `.main-area` directly (no
   `.main-area-wrapper`). Full edge-to-edge viewport background.
2. **Gradient overlay** — Blue-to-pink gradient (`#6a82fb` → `#fc5c7d`)
   at 0.7 opacity instead of plain black at 0.4 opacity.
3. **Email input form** — Pill-shaped email input with integrated submit
   button instead of a standalone "NOTIFY US" button.
4. **Content order** — Email form comes BEFORE the countdown timer
   (05/06 have button AFTER countdown).
5. **Glowing countdown circles** — White glow ring via box-shadow on
   each circle.

### Section-by-section fidelity notes

1. **Main area (no wrapper)** — `div.main-area`: height 100%, padding
   0 20px, background-size cover, box-shadow 2px 5px 30px rgba(0,0,0,0.3),
   color #fff, position relative, z-index 1.
   The `::after` pseudo-element: opacity 0.7, background
   `linear-gradient(-9deg, #6a82fb 0%, #6a82fb 40%, #fc5c7d 100%)`.

2. **Content centering** — Use flexbox (Tailwind `flex items-center
   justify-center h-full`).

3. **Heading** — h1 "Comming Soon" (keep original typo). Poppins bold,
   white, 3.5em.

4. **Description** — p below heading, white, max-width 500px, mx-auto,
   margin 20px auto.

5. **Email signup form** — `div.email-input-area`: width 450px, height
   53px, margin 40px auto, position relative.
   - Input: full-width pill (border-radius 40px), bg #F1F2F3, padding
     0 140px 0 25px, box-shadow: inset 0 0 1px rgba(0,0,0,0.1),
     0px 0px 0px 5px rgba(255,255,255,0.3), border 1px solid transparent.
     Focus: border-color #f89fbc.
   - Submit button: absolute, 120px wide, top 5px, bottom 5px, right 5px,
     border-radius 40px, bg #F84982, color #fff, font-size 0.9em,
     "NOTIFY US". Hover: bg #e40b52.

6. **Countdown timer** — Four white circles (90×90px, border-radius 100px,
   bg #fff, box-shadow 0px 0px 0px 5px rgba(255,255,255,0.5), margin 12px).
   Main-time: color #F84982, font-size 2em, font-weight 500, line-height 70px.
   Label: position absolute bottom 20px, font-size 0.9em, font-weight 600.
   Responsive: 70×70px at 767px, 60×60px at 479px.

7. **Social links** — Same pattern as 05/06: absolute bottom 30px,
   "Follow us for update" heading, five 35×35px circles with brand colors.
   Use lucide-react icons.

8. **Footer** — Minimal Component Dock attribution.

### Design tokens to set in @theme
```css
@theme {
  --color-brand: #F84982;
  --color-brand-hover: #e40b52;
  --color-focus-border: #f89fbc;
  --color-input-bg: #F1F2F3;
  --color-gradient-start: #6a82fb;
  --color-gradient-end: #fc5c7d;
  --color-gradient-opacity: 0.7;
  --color-countdown-glow: rgba(255, 255, 255, 0.5);
  --font-heading: 'Poppins', sans-serif;
  --font-body: 'Open Sans', sans-serif;
}
```

### Implementation checklist
- [ ] Create `apps/signal/` by copying simplest existing app
- [ ] Rename package to `@free-react-templates/signal`
- [ ] Set up index.html with Google Fonts (Open Sans + Poppins)
- [ ] Create `src/components/SignalPage.tsx` (full-viewport, gradient)
- [ ] Create `src/components/EmailSignup.tsx` (pill input + submit)
- [ ] Create `src/components/CountdownTimer.tsx` (glowing circles)
- [ ] Create `src/components/SocialLinks.tsx` (icon row)
- [ ] Write App.tsx composing sections
- [ ] Set up index.css with Tailwind + theme tokens
- [ ] Write tests for each component (100% coverage)
- [ ] Run `npm run verify:app -- signal`
- [ ] Set `public/CNAME` to `signal.free.componentdock.com`
- [ ] Set `homepage` in package.json
- [ ] Run `npm install` at repo root to update lockfile
- [ ] Commit, push, open PR, merge
