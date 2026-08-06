# Launch (Colorlib Launch) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Tears PR (#5) awaits review.
> Implementation ships later on `feat/template-launch`.

## Design notes (replication findings)

- **Original:** ColorLib "Launch" — product landing page template
  (source: https://colorlib.com/wp/template/launch/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/launch/
  (HTTP 200, full rendered DOM + `css/style.css` (253KB) extracted).
- **Visual design (from DOM + CSS tokens):** product landing with a **blue**
  brand (`#407BFF`), Nunito font, white/light sections, an auth modal
  (sign in / sign up with Google/GitHub/email), a "Promote Your Products"
  hero, pricing, features, and testimonials.
- **Structure (1:1, section order):**
  1. Auth modal: "Welcome Back — Sign in to your account to continue" +
     Continue with Google / GitHub + email/password + **Sign In** + **Sign
     up** (Create Account: full name, email, password, confirm, Terms).
  2. Navbar: logo "Launch." + Home, Dropdown, Testimonials, Features,
     Pricing, About, Contact + **Sign in / Register**.
  3. Hero: h1 "Promote Your Products by Colorlib" + blurb + **See
     Features**.
  4. Pricing: "Digital Services — Selling Digital Services" + plans.
  5. Features / Testimonials sections.
  6. Footer: columns + social + copyright.
- **Design tokens extracted from `style.css`:**
  - Primary **blue `#407BFF`** (buttons, accents).
  - Dark `#212529`; muted `#6c757d`; white bgs.
  - Font: **"Nunito"** (Google Fonts `<link>`).
  - Blue rounded buttons with white text.
- **Recreation name:** Launch (kept — matches ColorLib name, distinct from
  existing names). App folder `apps/launch`, package
  `@free-react-templates/launch`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/launch-<n>/<w>/<h>`); lucide-react icons; Nunito via
  Google Fonts; auth forms prevent default (no backend); blue primary in
  `@theme`; repo-standard Navbar (dark-mode toggle) + Footer chrome.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Tasks

- [x] Write `openspec/specs/template-launch/spec.md` (Gherkin requirements +
      scenarios reflecting the REAL sections above).
- [x] Validate spec: `npm run spec:validate`.
- [x] Create `apps/launch` (copied the section-rich landing app pattern;
      package `@free-react-templates/launch`).
- [x] TDD: tests first for each section component; ran red.
- [x] Implement components (green) at 100% coverage (21 tests, 11 files).
- [x] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [x] Push `feat/template-launch`, open PR (source template, preview URL,
      design tokens, what differs).
- [x] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main, state D).
