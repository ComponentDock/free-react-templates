# Pawly (ColorLib Petcare) — Tasks & Design Notes

> Prep artifacts kept for reference. The template shipped in `apps/pawly`;
> `openspec/specs/template-pawly/spec.md` holds the delivered contract.

## Design notes

- **Original:** ColorLib "Petcare" — free pet care services website template
  (source: https://colorlib.com/wp/template/petcare/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/petcare/`
  (HTTP 200) + stylesheet `assets/css/style.css` (HTTP 200).
- **Structure observed (1:1, section order):**
  1. Header — nav (Home, About, Services, Blog, Contact) + phone button
     "01654.066.456".
  2. Hero — h1 "We Care Your Pets." (slider), copy, CTA.
  3. Services — "Best Pet Care Services": Pet Boarding, Pet Treatment,
     Vaccinations (icon + copy + "Read More").
  4. Counters — stat strip (354+ etc.).
  5. Commitment — "We are commited for better service" (image + copy).
  6. Gallery — "Pets Photo Gallery" grid.
  7. Call CTA band — "Any time you can call us!" + phone + "Contact Us"
     (original band heading is recycled ColorLib copy — paraphrase).
  8. Team — "Our Team Mambers" (sic); three doctor cards.
  9. Blog — "Our Recent Blog"; three posts.
  10. Footer — about, Company / Services / Get in Touch columns, bottom bar.
- **Design tokens:** brand red **#ff2121** + navy **#1f2b7b**; multi-color
  icon palette **#4cd3e3**/**#f4e700**/**#38a4ff**/**#f44a40**; headings
  **#415094**/**#1f2b7b**, muted **#999999**/**#a3a3a3**, light sections
  **#f9f9ff**/**#f0e9ff**; fonts **Muli** (+ **Roboto**) via Google Fonts;
  filled rounded red buttons.
- **Recreation name:** Pawly — a new, original single lowercase word (the
  app first shipped as `petcare`, reusing the source name, which rule 5
  forbids). App folder `apps/pawly`, package `@free-react-templates/pawly`,
  deploy host `pawly.free.componentdock.com`; the source name survives only in
  this provenance line.
- **Design approach:** red brand tokens in `@theme`
  (`--color-brand: #ff2121`, navy `#1f2b7b` accent); seeded picsum
  placeholders `https://picsum.photos/seed/pawly-<n>/<w>/<h>`; lucide-react
  icons (Home, Stethoscope, Syringe for services); stat counters as static
  numbers; repo-standard Navbar (dark-mode toggle) and Footer chrome; social
  icons (GitHub, X, LinkedIn) inline SVG.
- Reuse `packages/ui` (Button, ButtonLink, Card, Badge, cn) — do NOT
  duplicate components.
- Delivered app: `apps/pawly` — multi-section landing architecture with
  navbar/hero/services/counters/commitment/gallery/CTA/team/blog/footer.

## Tasks

- [x] `openspec/specs/template-pawly/spec.md` (Gherkin requirements +
      scenarios + replication findings).
- [x] `npm run spec:validate`.
- [x] `apps/pawly` with package `@free-react-templates/pawly` (renamed from
      the source-name folder `petcare`).
- [x] TDD: tests first for Navbar, Hero, Services, Counters, Commitment,
      Gallery, Call CTA, Team, Blog, Footer, App composition; run red.
- [x] Components implemented (green) at 100% coverage.
- [x] Per-app gate: typecheck → lint → 100% coverage tests → build;
      `npm run spec:validate`.
- [x] TEMPLATES.md row `[x]` with its deploy link; README structure
      regenerated (`npm run readme:status`).

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/pawly/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/pawly/public/CNAME` = `pawly.free.componentdock.com`
  and the package `homepage` = `https://pawly.free.componentdock.com`.
