# Teaser (ColorLib 08 Comming Soon) — Tasks & Design Notes

## Design notes

- **Original:** ColorLib "08 Comming Soon" — free coming soon website
  template (source: https://colorlib.com/wp/template/08-comming-soon/).
- **Live preview DOM:** `https://preview.colorlib.com/theme/08-comming-soon/`
  returned HTTP 404 — preview unreachable. Screenshot is sole reference.
- **Screenshot analyzed:** `coming-soon-23.jpg` (1200×972 px). Pixel-level
  color sampling performed across full image.
- **Structure observed (1:1 from screenshot):** header (light warm gray
  background, logo text) → hero (dark purple/navy background, centered
  headline + subtext, likely background image with dark overlay) → CTA row
  (horizontal pink/rose bar with email input + subscribe button, brand
  color #e15e88 with lighter pink band #ffd3f1) → dark continuation area
  → footer (warm brown/terra cotta background #422527–#7e4e41, red accent
  #b63841, navigation links, copyright) → copyright strip (light gray
  #f5f5f5).
- **Design tokens:** dark backgrounds **#1d161d** / **#282432** / **#3e3842**;
  pink brand **#e15e88** + red accent **#b63841**; light pink tint
  **#ffd3f1**; footer browns **#422527**–**#7e4e41**; neutrals **#ffffff**
  / **#f5f5f5** / **#d6d6d8**; font **Lato** (sans-serif) via Google Fonts;
  pink filled rounded buttons.
- **Recreation name:** Teaser (branch `feat/template-teaser`). App folder
  `apps/teaser`, package `@free-react-templates/teaser`.
- **Design approach:** dark theme with pink/rose accents; hero = seeded
  picsum photo + dark overlay + headline + countdown timer; email signup
  form with pink CTA; dark warm-brown footer with nav links + Component
  Dock link + copyright; all images picsum-seeded
  (`picsum.photos/seed/teaser-N/w/h`); Google Fonts via `<link>`.

## Task checklist

### Phase 1: Setup
- [ ] Copy simplest existing app (e.g. `apps/abjure`) to `apps/teaser`
- [ ] Rename package to `@free-react-templates/teaser`
- [ ] Update `vite.config.ts` with `injectUiSource()`
- [ ] Run `npm install` at repo root to register workspace
- [ ] Verify `grep -c "free-react-templates/teaser" package-lock.json`

### Phase 2: Structure & Styling
- [ ] `src/index.css` — Tailwind entry + theme tokens:
      - `--color-brand: #e15e88` (pink rose)
      - `--color-brand-red: #b63841` (red accent)
      - `--color-dark: #1d161d` (darkest bg)
      - `--color-dark-surface: #282432` (dark surface)
      - `--color-footer: #422527` (warm brown footer)
- [ ] `index.html` — add Google Fonts `<link>` for Lato
- [ ] Create components in `src/components/`:
      - `Header.tsx` — light header with brand name "Teaser"
      - `Hero.tsx` — dark bg + headline + subtext + countdown timer
      - `Countdown.tsx` — countdown timer component (days/hours/min/sec)
      - `EmailSignup.tsx` — email input + pink subscribe button
      - `Footer.tsx` — warm brown footer with nav links + Component Dock
      - `Copyright.tsx` — bottom copyright strip

### Phase 3: Implementation
- [ ] Implement Header with responsive nav
- [ ] Implement Hero with seeded picsum background + dark overlay
- [ ] Implement Countdown timer (JS countdown to future date)
- [ ] Implement EmailSignup with zod validation
- [ ] Implement Footer with navigation + Component Dock link
- [ ] Implement Copyright strip
- [ ] Compose all sections in `src/App.tsx`

### Phase 4: Testing (TDD — write tests first)
- [ ] `Header.test.tsx` — renders brand, responsive
- [ ] `Hero.test.tsx` — renders heading, dark background
- [ ] `Countdown.test.tsx` — displays days/hours/min/sec, counts down
- [ ] `EmailSignup.test.tsx` — validates email, shows errors, submits
- [ ] `Footer.test.tsx` — renders nav links, Component Dock link
- [ ] `Copyright.test.tsx` — renders copyright text
- [ ] `App.test.tsx` — composes all sections
- [ ] Coverage at 100% lines/functions/branches/statements

### Phase 5: Verification
- [ ] `npm run verify:app teaser` passes
- [ ] No ColorLib references in app code
- [ ] Footer links to https://www.componentdock.com/
- [ ] All images use picsum.photos seeds
- [ ] CNAME: `teaser.free.componentdock.com`
- [ ] Homepage: `https://teaser.free.componentdock.com`
