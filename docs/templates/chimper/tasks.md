# Chimper (Colorlib Chimper) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Tears PR (#5) awaits review.
> Implementation ships later on `feat/template-chimper`.

## Design notes (replication findings)

- **Original:** ColorLib "Chimper" — web agency website template
  (source: https://colorlib.com/wp/template/chimper/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/chimper/
  (HTTP 200, full rendered DOM + `css/style.css` (22KB) extracted).
- **Visual design (from DOM + CSS tokens):** agency site with an
  **indigo/navy** brand (`#0d0cb5`), Quicksand font, light (`#edf0f5`)
  sections, top contact bar, 4 service cards, numbered values, a projects
  grid, testimonials, and a blog strip.
- **Structure (1:1, section order):**
  1. Top bar: **Phone: +1 292 3293 4238 · Email: info@yourdomain.com**.
  2. Navbar: logo "Chimper" + Home, Work, Services (Web Applications,
     WordPress Dev, Mobile Applications, eCommerce), About, Blog, Contact.
  3. Hero: "We Are Expert in" / "We Make Beautiful Things" + **Hire Us**.
  4. Services (`ft-feature-1`): "Welcome To Chimper An Awward Winning Web
     Agency" + 4 cards — **Web Design, Branding & Identity, Art Direction,
     Copywriting** (icon + blurb + **Read More**).
  5. Values: **01. Our Values / 02. Our Mission / 03. Our Philosophy**
     (numbered + blurb).
  6. Featured Projects: "Featured Projects" + **Project Name 1 (Web
     Application), Project Name 2 (Branding), Project Name 3 (Website)** +
     **Show All Works**.
  7. Testimonials (`testimonial-wrap`): 4 quotes — **John Smith, Christine
     Aguilar, Robert Spears, Bruce Rogers**.
  8. Blog (`bg-light`): "Create Beautiful Website In Less Than An Hour" —
     **Ham Brook** and **James Phelps** + **Continue Reading...**.
  9. CTA band (`bg-primary`): full-width "Hire Us & Let's Get Started".
  10. Footer (`#333333`): About Us blurb, Features links (About Us,
      Services, Testimonials, Contact Us), Follow Us socials, Subscribe
      Newsletter form (email + Send), copyright.
- **Design tokens extracted from `style.css`:**
  - Primary **indigo `#0d0cb5`** (buttons, accents).
  - Light bgs `#edf0f5`, `#f4f5f9`; dark text `#25262a`.
  - Font: **"Quicksand"** (Google Fonts `<link>`).
  - Rounded indigo buttons with white text.
- **Recreation name:** Chimper (kept — matches ColorLib name, distinct from
  existing names). App folder `apps/chimper`, package
  `@free-react-templates/chimper`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/chimper-<n>/<w>/<h>`); lucide-react icons; Quicksand
  via Google Fonts; indigo primary in `@theme`; repo-standard Navbar
  (dark-mode toggle) + Footer chrome.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Tasks

- [x] Write `openspec/specs/template-chimper/spec.md` (Gherkin requirements +
      scenarios reflecting the REAL sections above).
- [x] Validate spec: `npm run spec:validate`.
- [x] Refine spec on `feat/template-chimper` with full replication pass
      (preview DOM + `css/style.css` + Bootstrap theme CSS; CTA band, top
      bar, typed words, carousel controls recorded).
- [ ] Create `apps/chimper` (copy the section-rich landing app pattern —
      Aurora; rename package to `@free-react-templates/chimper`).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Push `feat/template-chimper`, open PR (source template, preview URL,
      design tokens, what differs).
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main, state D).
