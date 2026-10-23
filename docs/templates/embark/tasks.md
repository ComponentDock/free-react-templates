# Embark (ColorLib Launch) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Tears PR (#5) awaited review.
> Implemented as `apps/embark`; this doc travels with the app rename.

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
- **Recreation name:** **Embark** (start-of-journey evocation for a product
  launch; no collision with any existing app). App folder `apps/embark`,
  package `@free-react-templates/embark`. The app first shipped as
  `apps/launch`, which reused the source design's name (AGENTS.md rule 5
  violation) and was renamed in the Launch → Embark PR.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/embark-<n>/<w>/<h>`); lucide-react icons; Nunito via
  Google Fonts; auth forms prevent default (no backend); blue primary in
  `@theme`; repo-standard Navbar (dark-mode toggle) + Footer chrome.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Tasks

- [x] Write `openspec/specs/template-embark/spec.md` (Gherkin requirements +
      scenarios reflecting the REAL sections above).
- [x] Validate spec: `npm run spec:validate`.
- [x] Create `apps/embark` (copied the section-rich landing app pattern;
      package `@free-react-templates/embark`).
- [x] TDD: tests first for each section component; ran red.
- [x] Implement components (green) at 100% coverage (21 tests, 11 files).
- [x] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [x] Push `feat/template-embark`, open PR (source template, preview URL,
      design tokens, what differs).
- [x] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main, state D).

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/embark/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/embark/public/CNAME` = `embark.free.componentdock.com`
  and the package `homepage` = `https://embark.free.componentdock.com`.
