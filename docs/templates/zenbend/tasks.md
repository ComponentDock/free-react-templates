# Zenbend (ColorLib Yogafun) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-zenbend`. Recreation name: **Zenbend** (NEW name —
> the ColorLib source keeps its name "Yogafun").

## Source mapping

- **ColorLib item:** "Yogafun" (TEMPLATES.md line 1241).
- **Source URL:** https://colorlib.com/wp/template/yogafun/
- **Preview URL — REACHABLE (verified 2026-09-15):**
  `https://preview.colorlib.com/theme/yogafun/` (HTTP 200, 26,646 bytes).
- **Preview CSS:** `css/style.css` (57,656 bytes) — Bootstrap 4 base +
  custom styles. Fonts: Oxygen (Google Fonts). Icons: Font Awesome 4,
  Ionicons, Flaticon (chakra/lotus/yoga) → REPLACE with lucide-react.

## Reference research (done — do not redo)

### Screenshot (`yogafun-free-template.jpg`)

Browsed visually 2026-09-15. The screenshot shows:
- Dark navbar with "YOGAFUN" brand, nav links, search icon
- Full-bleed hero: yoga practitioner doing arm balance on blocks, wooden
  floor, warm lighting, large white heading "LOSE YOURSELF IN AMBIENCE &
  ATMOSPHERE", white circular play button with "Watch Video"
- Below hero: 3-column feature area with chakra/lotus icons (olive-sage
  colored) and yoga photo, light grey card backgrounds
- Overall aesthetic: warm, earthy, calm — olive-sage brand on white/light
  grey with dark overlays

### Live DOM analysis

Sections identified from HTML parsing (in order):
1. `nav.navbar.navbar-dark.bg-dark` — dark navbar
2. `div.section.element-animate` — hero with video overlay
3. `div.section.element-animate.bg-light` — about/features with icons
4. `div.section.border-t` — yoga classes grid (6 cards)
5. `div.section.bg-light.block-11` — testimonials (owl-carousel)
6. `div.section.bg-primary` — green stats/CTA banner
7. `div.section.blog` — blog posts
8. `div.subscribe.bg-light` — newsletter form
9. `footer.site-footer` — dark footer

### CSS token extraction

- Brand primary: `#71774b` (olive-sage green) — used for `.bg-primary`,
  `.text-primary`, `.btn-primary`, and chakra/lotus icons
- Darker variant: `#535837` (hover states)
- Navbar: Bootstrap dark `#343a40`
- Footer bg: `#1d2124`
- Section light: `#f7f7f7` / `#f8f9fa`
- Body text: `#212529`, muted: `#6c757d`
- Font: `"Oxygen", sans-serif` (Google Fonts)
- Hero heading: 50px, line-height 1.2, white on dark overlay
- Buttons: `border-radius: 0.25rem`, 2px border, brand bg, white text
- Play button: 60px white circle (`border-radius: 50%`)
- Testimonial card: white, 40px padding, max-width 700px, centered,
  50% border-radius circular avatars
- Feature cards: `#f8f9fa` bg, 30px padding

## Implementation task outline

### Phase 1: Scaffold (copy existing app, rename)
- [ ] Copy simplest existing app (e.g. `apps/abode`) to `apps/zenbend`
- [ ] Rename package to `@free-react-templates/zenbend`
- [ ] Update `public/CNAME` to `zenbend.free.componentdock.com`
- [ ] Update `package.json` homepage to `https://zenbend.free.componentdock.com`
- [ ] Run `npm install` at repo root to register workspace

### Phase 2: Design tokens in index.css
- [ ] Add `@theme` block with `--color-brand: #71774b` (and darker/lighter variants)
- [ ] Add Google Fonts `<link>` for Oxygen (400, 700) in `index.html`
- [ ] Set body font to `font-sans` with Oxygen fallback

### Phase 3: Section components (in order)
- [ ] `Navbar.tsx` — dark bg, brand "ZENBEND", nav links with Classes dropdown
- [ ] `Hero.tsx` — full-bleed bg image, overlay, heading, play button
- [ ] `FeatureIcons.tsx` — 4-column grid, lucide icons (Replace chakra/lotus
  with Sunrise, Flower2, Circle, Dumbbell or similar)
- [ ] `AboutSection.tsx` — two-column, "Do Yoga Today" heading, Read More
- [ ] `YogaClasses.tsx` — 6 cards, 3×2 grid, picsum bg images, overlay text
- [ ] `Testimonials.tsx` — carousel with avatars, names, quotes (simple
  auto-advancing, no owl-carousel dependency)
- [ ] `StatsBanner.tsx` — green (#71774b) bg, 3 items: Chat, Customers, Support
- [ ] `BlogPosts.tsx` — 2 cards, media layout, dates, excerpts
- [ ] `Newsletter.tsx` — email input + subscribe button, centered
- [ ] `Footer.tsx` — dark bg, 3 columns, social icons, Component Dock link

### Phase 4: App composition
- [ ] `App.tsx` — compose all sections in order
- [ ] Verify responsive behavior (hamburger nav, stacked columns)

### Phase 5: Tests + coverage
- [ ] Write tests for each component (Vitest + Testing Library)
- [ ] Achieve 100% line/function/branch/statement coverage
- [ ] Run `npm run verify:app zenbend`

### Phase 6: Deploy
- [ ] Commit as `feat: add Zenbend (ColorLib Yogafun) template`
- [ ] Push to `feat/template-zenbend` branch
- [ ] Open PR, merge immediately (squash)
- [ ] Verify Surge deploy at `zenbend.free.componentdock.com`

## Fidelity notes

- **Hero video → static image**: The original uses a video background.
  Replace with a high-quality static image from picsum (yoga-themed seed).
  The play button can remain as a decorative element or link to a placeholder.
- **Owl-carousel → simple carousel**: Replace jQuery owl-carousel with a
  simple React auto-advancing testimonial carousel (CSS transitions).
- **Icons**: Replace Font Awesome, Ionicons, Flaticon with lucide-react:
  - Chakra icon → `Sun` or `Sparkles`
  - Lotus icon → `Flower2` or `Leaf`
  - Yoga icon → `Dumbbell` or `Heart`
  - Play icon → `Play`
  - Social icons → `Facebook`, `Twitter`, `Instagram`, `Linkedin`
- **Images**: All via `https://picsum.photos/seed/zenbend-<n>/<w>/<h>`
  (deterministic, no external asset downloads)
- **Footer**: Replace Colorlib copyright with "Made with Component Dock"
  linking to `https://www.componentdock.com/`
- **No ColorLib references**: All provenance lives only in this spec and
  the PR — zero mentions in app source code
