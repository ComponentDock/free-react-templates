# Petcare (Colorlib Petcare) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Scarlet PR awaits review.
> Implementation ships later on `feat/template-petcare`.

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
- **Recreation name:** Petcare (keeps the original name — it is already a
  distinct working name, not a ColorLib brand). App folder `apps/petcare`,
  package `@free-react-templates/petcare`.
- **Design approach:** red brand tokens in `@theme`
  (`--color-brand: #ff2121`, navy `#1f2b7b` accent); seeded picsum
  placeholders `https://picsum.photos/seed/petcare-<n>/<w>/<h>`; lucide-react
  icons (Home, Stethoscope, Syringe for services); stat counters as static
  numbers; repo-standard Navbar (dark-mode toggle) and Footer chrome; social
  icons (GitHub, X, LinkedIn) inline SVG.
- Reuse `packages/ui` (Button, ButtonLink, Card, Badge, cn) — do NOT
  duplicate components.
- Base implementation on `apps/farmie` (multi-section landing architecture with
  navbar/hero/services/counters/commitment/gallery/CTA/team/blog/footer).

## Tasks

- [ ] Write `openspec/specs/template-petcare/spec.md` (Gherkin requirements +
      scenarios + replication findings) — DONE on main (this prep).
- [ ] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/petcare` (copy `apps/sage`; rename package to
      `@free-react-templates/petcare`).
- [ ] TDD: tests first for Navbar, Hero, Services, Counters, Commitment,
      Gallery, Call CTA, Team, Blog, Footer, App composition; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Update TEMPLATES.md status `[~]` → `[x]` after merge (bookkeeping on
      main, state D).
- [ ] Update README structure + `docs/ai-context.md` app list.
