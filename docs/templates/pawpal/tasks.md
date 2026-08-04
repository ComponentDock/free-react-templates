# Pawpal (Colorlib PawPal) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Scarlet PR awaits review.
> Implementation ships later on `feat/template-pawpal`.

## Design notes

- **Original:** ColorLib "PawPal" — free pet grooming/boarding website
  template (source: https://colorlib.com/wp/template/pawpal/).
- **Live demo DOM analyzed:** `https://pawpal-colorlib.pages.dev/` (HTTP
  200). The classic preview portal (`preview.colorlib.com/theme/pawpal/`
  and variants) 404s — the portal's `products.js` manifest maps `#pawpal` to
  this Cloudflare Pages demo, which is the reference. Stylesheet:
  `/_astro/Base.BfUsFLRD.css` (Tailwind-based).
- **Structure observed (1:1, section order):**
  1. Header — fixed top nav (transparent → solid): Services, About, Gallery,
     Team, Contact + "Book Now".
  2. Hero — h1 "Where Every Pet Gets the Royal Treatment", copy, "Book an
     Appointment" + "View Services", stats (10K+ Happy Pets, 8+ Years
     Experience, 4.9), pink gradient bg.
  3. Services — "Our Services": Full Grooming, Bath & Brush, Daycare,
     Overnight Boarding, Nail Trim, Puppy Package + "View All Services".
  4. Why Us — "A Place Where Pets Come First": Certified Staff, Fear-Free
     Certified, Premium Products, Climate Controlled.
  5. Gallery — "Happy Pets Gallery" image grid.
  6. Testimonials — "What Pet Parents Say" quote cards (Sarah Mitchell,
     Jessica Thompson, Michael Park, David Martinez).
  7. CTA band — "Ready to Pamper Your Pet?" on pink gradient.
  8. Footer (dark) — brand + blurb (Austin, TX · since 2015), Services /
     Company / Support columns, Hours / Contact / Location.
- **Design tokens:** brand pink **#db2777** (primary), hover **#be185d**,
  tints **#f472b6**/**#fbcfe8**/**#fce7f3**; dark text **#111827**/**#1f2937**,
  muted **#9ca3af**/**#4b5563**; fonts **Poppins** + **Lora** (serif
  headings) via Google Fonts; filled rounded pink pill buttons.
- **Recreation name:** Pawpal (keeps the original name — it is already a
  distinct working name, not a ColorLib brand). App folder `apps/pawpal`,
  package `@free-react-templates/pawpal`.
- **Design approach:** pink primary scale in `@theme`
  (`--color-primary-600: #db2777` — drives shared ui Button/ButtonLink);
  light/pink section alternation; seeded picsum placeholders
  `https://picsum.photos/seed/pawpal-<n>/<w>/<h>`; lucide-react icons
  (Scissors, Bath, Dog, Moon, Hand, Baby, BadgeCheck, Heart, Sparkles,
  Snowflake, Quote); repo-standard Navbar (dark-mode toggle) and Footer
  chrome; social icons (GitHub, X, LinkedIn) inline SVG.
- Reuse `packages/ui` (Button, ButtonLink, Card, Badge, cn) — do NOT
  duplicate components.
- Base implementation on `apps/horse-club` (most recent full multi-section
  landing architecture — `apps/sage` referenced in early prep never existed
  in git history) — the demo itself is Tailwind-native, so the recreation
  maps 1:1 onto the monorepo stack.

## Tasks

- [x] Write `openspec/specs/template-pawpal/spec.md` (Gherkin requirements +
      scenarios + replication findings) — DONE on main (this prep); refined
      on `feat/template-pawpal` with fetched demo DOM/CSS findings
      (2026-08-04).
- [x] Validate spec: `npm run spec:validate` (221 specs pass).
- [x] Create `apps/pawpal` (copy `apps/horse-club`; rename package to
      `@free-react-templates/pawpal`; drop unused zod dep).
- [x] TDD: tests first for Navbar, Hero, Services, WhyUs, Gallery,
      Testimonials, Cta, Footer, App composition; 11 tests, all green.
- [x] Implement components (green) at 100% coverage.
- [x] Full gate: typecheck → lint → test:coverage (100/100/100/100) →
      build → knip → fallow → spec:validate — all pass.
- [ ] Update TEMPLATES.md status `[~]` → `[x]` after merge (bookkeeping on
      main, state D).
- [ ] Update README structure + `docs/ai-context.md` app list (bookkeeping
      on main, per Horse Club precedent shared docs are not touched on the
      feature branch).
