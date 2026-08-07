# Postie (ColorLib Standout) — Tasks & Design Notes

> Prep artifacts originally on `main` under the name "standout"; **renamed to
> Postie** on `feat/template-postie` because the mandatory naming rule
> requires a NEW name different from the ColorLib source slug ("Standout").
> Implementation ships via the `feat/template-postie` PR.

## Design notes (replication findings)

- **Original:** ColorLib "Standout" — mail-app landing page template
  (source: https://colorlib.com/wp/template/standout/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/standout/
  (HTTP 200, 27 KB rendered DOM) + `css/main.css` (89 KB) extracted.
  The TEMPLATES.md screenshot (`standout-free-template.jpg`) is the visual
  reference.
- **Visual design:** mail-app landing with a **green** brand (`#00a650`),
  dark green `#006933`, near-black `#121619` on white; IBM Plex Sans +
  IBM Plex Serif fonts; "An Amazing App That Does It All." hero with a
  Get The App button; about points (Smart., User-Friendly., Powerful.,
  Secure.); a 4-step process; a features grid; testimonials; 3 pricing
  plans; footer.
- **Structure (1:1, section order from the live DOM):**
  1. Navbar: logo + Intro, About, Features, Pricing, Blog links + App
     Store / Play Store badges.
  2. Hero (`#home`): "An Amazing App That Does It All." + blurb + Get The
     App + Scroll Down.
  3. About (`#about`): "The Most Popular And Number 1 Mail App." + 4 points
     — Smart., User-Friendly., Powerful., Secure.
  4. How The App Works? (`#process`): 4 steps — Sign Up, Create, Compose,
     Send.
  5. Features (`#features`): "Loaded With Features You Would Surely Love." +
     5 cards — Cloud Based, Voice & Video, Always Secure, Play Games,
     Group Chat.
  6. Testimonials: "1 Million+ Users Can't Be Wrong." + 3 quotes.
  7. Pricing (`#pricing`): Basic (Free), Pro Plan ($10), Ultimate Plan
     ($20) + Get Started buttons.
  8. Footer: link columns + social + copyright.
- **Design tokens extracted from `css/main.css`:**
  - Primary **green `#00a650`**; dark green `#006933`; near-black `#121619`;
    white background; muted grays.
  - Fonts: **"IBM Plex Sans"** (body) + **"IBM Plex Serif"** (headings) via
    Google Fonts `<link>`.
  - Buttons: solid green with white text.
- **Recreation name:** **Postie** (NEW name — mail-app evocation; the
  ColorLib source name "Standout" is NOT reused). App folder `apps/postie`,
  package `@free-react-templates/postie`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/postie-<n>/<w>/<h>`); lucide-react icons; IBM Plex
  Sans + IBM Plex Serif via Google Fonts; green primary in `@theme`;
  repo-standard Navbar (dark-mode toggle) + Footer chrome; testimonial
  names paraphrased.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Tasks

- [x] Replication: fetch Standout preview DOM + `css/main.css`; extract 1:1
      section structure and design tokens (recorded above).
- [x] Write `openspec/specs/template-postie/spec.md` (Gherkin requirements +
      scenarios reflecting the REAL sections above), renamed from the
      stale `template-standout` prep.
- [ ] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/postie` (copy the violet landing app pattern; rename
      package to `@free-react-templates/postie`).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Per-app gate (FAST_MODE): typecheck → lint → vitest 100% → build;
      full gate runs in CI on merge.
- [ ] Push `feat/template-postie`, open PR (source template, preview URL,
      design tokens, what differs).
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main, state D).
