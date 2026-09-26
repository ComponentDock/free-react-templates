# Lensflow — Implementation Todo

Source: ColorLib Pemodule
Preview: https://preview.colorlib.com/theme/pemodule/

## Tasks

1. [ ] Create `apps/lensflow/` from base template scaffold
2. [ ] Set up `package.json` with `@free-react-templates/lensflow`
3. [ ] Configure `vite.config.ts` with `injectUiSource()`
4. [ ] Add Poppins font to `index.html`
5. [ ] Define Tailwind theme tokens in `src/index.css`:
   - brand-green: #6cbb23
   - deep-purple: #3224b0
   - magenta: #be5ede
   - cyan: #4cd3e3
   - light-bg: #f9f9ff
6. [ ] Build `Navbar.tsx` — logo "Lensflow", nav links, mobile hamburger
7. [ ] Build `Hero.tsx` — gradient background (purple→magenta), subtext, heading, CTA
8. [ ] Build `Featured.tsx` — "Reasons To Choose" heading, feature cards
9. [ ] Build `Parallax.tsx` — background-attachment:fixed image, overlay heading + CTA
10. [ ] Build `Services.tsx` — 4-col grid, service cards with hover overlay (cyan accent)
11. [ ] Build `Contact.tsx` — dark gradient bg, "Send Us Message", contact form
12. [ ] Build `Newsletter.tsx` — heading + email input + subscribe button
13. [ ] Build `Footer.tsx` — multi-column links, copyright, Component Dock link
14. [ ] Compose all sections in `src/App.tsx`
15. [ ] Write tests (Vitest + RTL) → 100% coverage
16. [ ] Run `npm run gate` to verify
17. [ ] Commit + push

## Design Notes

### Color palette
- Primary: #6cbb23 (green) — buttons, accents
- Gradient: #3224b0 → #be5ede (purple→magenta) — hero bg, parallax overlay, contact bg
- Accent: #4cd3e3 (cyan) — service hover overlays
- Background: #f9f9ff (light lavender-blue) — alternating sections
- Text: #222222 (headings), #777777 (body)

### Typography
- Font: Poppins (Google Fonts)
- Headings: bold, various sizes
- Body: regular weight

### Button style
- Rectangular (border-radius: 0px)
- Primary bg: green gradient
- White text
- Padding generous

### Section order (from preview)
1. Navbar (sticky)
2. Hero — full-width gradient, centered text, CTA button
3. Featured — white/light bg, heading + feature grid
4. Parallax — fixed bg image, overlay content
5. Services — 4 cards, hover reveals overlay with cyan bg
6. Contact — dark gradient bg, form inputs
7. Newsletter — light bg, email input + button
8. Footer — dark bg, multi-column
