# Appli (ColorLib Appli) — Tasks & Design Notes

> Implementation ships on `feat/template-appli`. Spec written on the branch
> with fetched preview DOM/CSS findings (2026-08-05).

## Design notes

- **Original:** ColorLib "Appli" — free app landing template
  (source: https://colorlib.com/wp/template/appli/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/appli/`
  (HTTP 200) + stylesheet `assets/css/style.css` (HTTP 200, 55KB).
- **Structure observed (1:1, section order):**
  1. Header — transparent nav (Home, Features, About, FAQ, Blog, Contact) +
     ghost "Log in" pill.
  2. Hero (slider) — "Stay connected together in your own business network",
     "Get Started Now" big pill CTA (2 identical carousel slides → 1 hero).
  3. Project screen — dashboard mockup overlapping the hero.
  4. Brand area — bordered logo strip (8 logos → 6 text wordmarks).
  5. Services — "Finally focus on my marketing strategy and delegate" + 6
     icon cards (80px icon circle, title, blurb).
  6. About 1 (light) — "You have the power to personalize your website
     coding." + "See how it work" link + image.
  7. About 2 (white, reversed) — "Personalized experiences are proven to
     increase conversions" + link + image.
  8. Video band — background image + centered round gradient play button.
  9. Testimonials — "Amazing customer review" + quote slides (Robart Brown,
     Creative designer).
  10. CTA — rounded wrapper "Start finding your dream job" + pink "Browse
      Job" button.
  11. Footer — dark navy #1d2547; blurb + social circles (Twitter, Facebook,
      Pinterest); "Our solutions" / "Company" / "Support" columns; copyright.
- **Design tokens (from `assets/css/style.css` + sampled hero/bg images):**
  - Primary **#404DFF** (`.btn`, links, sticky header); hero/gradient band
    **#c054ff → #5274ff**; CTA **#F067FF** (radius 30px); play gradient
    **#c054ff → #5274ff**; about icon badge **#CC51FF**.
  - Headings **#1D2547**; muted **#717b9b** / **#999999** / **#A5A7C5**;
    light sections **#f9f9ff** / **#f0e9ff**; footer **#1d2547**.
  - Fonts: **Raleway** (headings/buttons) + **Muli** (body) via Google Fonts.
  - Buttons: `.btn` bg #404DFF radius 30px padding 25px 38px (hero 30px 62px);
    `.border-btn` ghost white pill; `.all-btn` underlined blue link.
- **Recreation name:** Appli (keeps the original name — already a distinct
  working name). App folder `apps/appli`, package
  `@free-react-templates/appli`, homepage
  `https://free-react-templates-appli.surge.sh`.
- **Design approach:** indigo `#404dff` brand scale in `@theme`
  (`--color-primary-600`), purple/blue gradient stops + pink CTA + navy
  headings + Muli/Raleway fonts; seeded picsum placeholders
  `https://picsum.photos/seed/appli-<n>/<w>/<h>`; lucide-react icons;
  brand socials (X, Facebook, Pinterest) inline SVG; repo-standard Navbar
  (dark-mode toggle); reuse `packages/ui` (ButtonLink, cn) — do NOT
  duplicate components.
- Base implementation on `apps/applab` (multi-section landing architecture
  with navbar/hero/services/testimonials/footer).

## Tasks

- [x] Fetch preview DOM + `assets/css/style.css`; extract structure + tokens.
- [x] Write `openspec/specs/template-appli/spec.md` (Gherkin requirements +
      scenarios + replication findings).
- [x] Validate spec: `npm run spec:validate`.
- [x] Create `apps/appli` (copy `apps/applab`; rename package to
      `@free-react-templates/appli`; `npm install` at root for lockfile).
- [x] TDD: tests first for Navbar, Hero, Brands, Services, About (×2),
      Video, Testimonials, Cta, Footer, App composition.
- [x] Implement components (green) at 100% coverage.
- [x] Full gate: typecheck → lint → test:coverage (100/100/100/100) →
      build → knip → fallow → spec:validate — all pass.
- [ ] Update TEMPLATES.md status `[~]` → `[x]` (all Appli lines) + live URL
      after merge (bookkeeping on main, state D).
- [ ] Set `"homepage"` in `apps/appli/package.json` after merge (bookkeeping
      on main, state D).
