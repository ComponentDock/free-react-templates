# Sideline (ColorLib Sportz) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-sideline`. Recreation name: **Sideline** (NEW
> name — the ColorLib source keeps its name "Sportz").
>
> Full replication research (preview DOM skeleton, CSS tokens, screenshot
> analysis, section-by-section fidelity notes) lives in `design-notes.md`
> in this folder — read it first. The OpenSpec requirements are in
> `openspec/specs/template-sideline/spec.md`.

## Quick facts

- **ColorLib item:** "Sportz" (TEMPLATES.md line 2845, "## Sports (9)").
  Slug `sportz` appears exactly ONCE in TEMPLATES.md.
- **Preview URL — REACHABLE (verified 2026-09-30):**
  `https://preview.colorlib.com/theme/sportz/`
  (HTTP 200, 55,944 bytes, `<title>Sportz &mdash; Colorlib Sports Team
  Template</title>`).
- **Preview CSS:** `css/bootstrap.min.css` (customized — btn-primary/
  bg-primary = `#f23a2e`) + `css/style.css` (23,032 bytes).
- **Key tokens:** Mukta (300/400/700), brand red `#f23a2e`, yellow accent
  `#eec60a` (rgba(238,198,10,0.9)), light section `#f8f9fa`, dropdown
  `#edf0f5`/`#25262a`/`#f4f5f9`, footer `#333333` (links `#999999`),
  hero overlay rgba(0,0,0,0.4), red band overlay rgba(242,58,46,0.9);
  square uppercase buttons (weight 300, letter-spacing .2em).
- **Sections in DOM order:** white utility bar + black navbar (shield logo,
  dropdowns) → ~800px hero photo slider (translucent black headline box +
  red READ MORE + white chevrons) → 3 hover-reveal feature cards
  overlapping hero (-70px) → light-gray matches section (next-match
  countdown panel + pill tabs Match 1/2/3 fixture lists + yellow-overlay
  promo banner) → red parallax highlights band (play button + dated
  white-box cards) → white latest-news grid (3 post cards) → dark footer
  (About / Recent Blog / Quick Menu / Follow Us + Watch Video + Subscribe
  Newsletter) with Component Dock attribution.
- **Naming check:** "sideline" collides with nothing in `apps/` or
  `openspec/specs/` (verified 2026-09-30).

## Task outline (for the implementer)

- [ ] Scaffold `apps/sideline` from the simplest existing app; package
      `@free-react-templates/sideline`; CNAME
      `sideline.free.componentdock.com`; homepage set; `npm install` at
      repo root (lockfile registration); `injectUiSource()` in
      `vite.config.ts`.
- [ ] `@theme` tokens in `src/index.css`: brand `#f23a2e`, accent
      `#eec60a`, ink `#333333`, mist `#f8f9fa`, panel `#edf0f5`, footer
      `#333333`; Mukta via Google Fonts link in `index.html`.
- [ ] TDD per section (colocated `*.test.tsx`, 100% coverage): Header
      (utility bar + navbar + dropdowns + mobile menu) → HeroSlider →
      FeatureCards → NextMatch (countdown) → LatestMatches (ARIA tabs) →
      PromoBanner → HighlightsBand (carousel + play button) → NewsGrid →
      Footer (newsletter form + Component Dock link).
- [ ] Placeholders: `picsum.photos/seed/sideline-*`; icons lucide-react;
      shield logo as inline SVG (own design, NOT the source PNG); no
      jQuery/owl/magnific/stellar — React state, `useEffect` countdown,
      CSS `background-attachment: fixed` for parallax bands.
- [ ] Zero ColorLib references in app files (comments included); footer
      links `https://www.componentdock.com/` branded "Component Dock".
- [ ] `scripts/verify-app.sh sideline` green; PR `feat/template-sideline`
      with source slug + preview URL + tokens in the description; squash
      merge immediately; then `[~]`→`[x]` bookkeeping in TEMPLATES.md +
      `npm run readme:status` (implementer's flow — prep never sets
      markers).
