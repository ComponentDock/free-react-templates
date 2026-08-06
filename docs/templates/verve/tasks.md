# Verve (ColorLib Racks) — Tasks & Design Notes

> Prep artifacts originally prepared on `main` under the working name
> "Racks"; renamed to **Verve** (the ColorLib source slug may not be reused
> as the new template name). Implementation ships on
> `feat/template-verve`.

## Design notes (replication findings)

- **Original:** ColorLib "Racks" — Free Bootstrap 4 services template
  (source: https://colorlib.com/wp/template/racks/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/racks/
  (HTTP 200, full rendered DOM + `css/style.css` (68KB) extracted).
- **Visual design (from DOM + CSS tokens):** services site with a **cyan**
  brand (`#78d5ef`) + **pink** accent (`#ee76ad`), a blue `#448ef6` hero
  overlay, Work Sans font, a text-centered hero, 4 tinted circular service
  icons, a cyan CTA band, a works grid, testimonials, a pink achievements
  band, and a blog grid.
- **Structure (1:1, section order):**
  1. Navbar: logo + Home, About, Solution, Portfolio, Blog, Contact.
  2. Hero: h1 "I love to" + blurb + **Watch Video**.
  3. Services: "Our Services — fully featured text services platform!" +
     4 cards — **Unlimited Features, Multiple Functions, Advanced
     Visualizations, Community & Supports** (icon + title + blurb).
  4. CTA: "Turn every channel into a revenue channel and drive business
     growth" + **View more details** (cyan band, image + overlay).
  5. Works: "Recent Works" + **Illustration, Application, Web Design**
     project cards.
  6. Testimonials: "Customer Says — Our satisfied customer says" + quotes +
     **Dennis Green** (Marketing Manager / Interface Designer / UI
     Designer).
  7. Counter: "Our achievements" + 3 stats (customers satisfied, preset
     options, response time) — pink `#ee76ad` band.
  8. Blog: "Recent Blog" + 3 posts (July 12, 2018 · Admin · 3 Comments).
  9. Footer: Company, Quick Links, Contact Information, Newsletter +
     copyright.
- **Design tokens extracted from `style.css`:**
  - Primary **cyan `#78d5ef`** (buttons, CTA band); button text dark
    `#212529`; hover `#56caeb`.
  - **Pink `#ee76ad`** (counter band) + `#79efb4` mint + `#efac78` peach
    (service icon tints).
  - Hero overlay **blue `#448ef6`** at ~.99 opacity over a cover image.
  - Dark `#404044`, `#212529`; muted `#6c757d`.
  - Font: **"Work Sans"** (Google Fonts `<link>`).
  - Subheadings: 12px uppercase, letterspaced.
- **Recreation name:** Verve (NEW name — different from ColorLib "Racks").
  App folder `apps/verve`, package `@free-react-templates/verve`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/verve-<n>/<w>/<h>`); lucide-react icons; static
  counter values; no assets copied.

## Tasks

- [x] Replication: fetch preview DOM + `css/style.css`, extract tokens.
- [x] Spec: `openspec/specs/template-verve/spec.md` (Gherkin scenarios).
- [x] Scaffold `apps/verve` (copy of `apps/appdeck`, renamed).
- [x] Components: Navbar, Hero, Services, CtaBand, Works, Testimonials,
      Counter, Blog, Footer, SocialLinks.
- [x] Tests for every component + App composition (100% coverage).
- [ ] `npm install` at root (lockfile registers `@free-react-templates/verve`).
- [ ] Full gate: typecheck, lint, test:coverage, build, knip, fallow,
      spec:validate.
- [ ] Push branch, open PR ("feat: Verve — ... (ColorLib Racks)"), merge.
- [ ] Bookkeeping: TEMPLATES.md `[x]` + surge URL, homepage, README status.
