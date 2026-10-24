# Groomly (ColorLib PawPal) — Tasks & Design Notes

> **SHIPPED** — this prep's design shipped as `apps/groomly`
> (<https://groomly.free.componentdock.com>). The unchecked items below are
> prep history, not outstanding work.

> Prep artifacts prepared on `main` while the Scarlet PR awaits review.
> Implementation ships later on `feat/template-groomly`.

## Design notes

- **Original:** ColorLib "PawPal" — free pet grooming/boarding website
  template (source: https://colorlib.com/wp/template/pawpal/).
- **Live demo DOM analyzed:** `https://pawpal-colorlib.pages.dev/` (HTTP
  200). The classic preview portal (`preview.colorlib.com/theme/pawpal/`
  and variants) 404s — the portal's `products.js` manifest maps `#groomly` to
  this Cloudflare Pages demo, which is the reference. Stylesheet:
  `/_astro/Base.BfUsFLRD.css` (Tailwind-based).

✅ **Pointer status — live reference re-probed 2026-10-13d (bot wall
lifted):** the demo is served by the ColorLib preview host —
`https://preview.colorlib.com/theme/pawpal/` answers **HTTP 200**, 81,509 B
`text/html; charset=utf-8` (57,048 B, sha256 `d0f2ef7475bf…` after stripping
the injected print-media `@font-face` block and the Insights beacon); its
stylesheet
`https://preview.colorlib.com/theme/pawpal/_astro/Base.DR44RTSu.css` is
36,398 B sha256 `9d8f8d8ad717…` and carries all 10 hex tokens recorded below
(Poppins, Lora), so the live build matches the design the mirror served (the
sheet's Astro hash differs from the mirror's prep-time `Base.BfUsFLRD.css` —
a rebuild). The Cloudflare Pages mirror `https://pawpal-colorlib.pages.dev`
is still **NXDOMAIN** (re-checked 2026-10-13d). ⚠️ `apps/groomly` was built
from the mirror's tokens before the migration, so it follows the mirror, not
today's preview host.
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
- **Recreation name:** Groomly — a new, original name that evokes the
  design (pet grooming). Rule 5 forbids shipping under the source design's
  name; the folder was renamed from the source name so no app reuses a
  ColorLib name. App folder `apps/groomly`,
  package `@free-react-templates/groomly`.
- **Design approach:** pink primary scale in `@theme`
  (`--color-primary-600: #db2777` — drives shared ui Button/ButtonLink);
  light/pink section alternation; seeded picsum placeholders
  `https://picsum.photos/seed/groomly-<n>/<w>/<h>`; lucide-react icons
  (Scissors, Bath, Dog, Moon, Hand, Baby, BadgeCheck, Heart, Sparkles,
  Snowflake, Quote); repo-standard Navbar (dark-mode toggle) and Footer
  chrome; social icons (GitHub, X, LinkedIn) inline SVG.
- Reuse `packages/ui` (Button, ButtonLink, Card, Badge, cn) — do NOT
  duplicate components.
- Base implementation on `apps/canter` (most recent full multi-section
  landing architecture — `apps/sage` referenced in early prep never existed
  in git history) — the demo itself is Tailwind-native, so the recreation
  maps 1:1 onto the monorepo stack.

## Tasks

- [x] Write `openspec/specs/template-groomly/spec.md` (Gherkin requirements +
      scenarios + replication findings) — DONE on main (this prep); refined
      on `feat/template-groomly` with fetched demo DOM/CSS findings
      (2026-08-04).
- [x] Validate spec: `npm run spec:validate` (221 specs pass).
- [x] Create `apps/groomly` (copy `apps/canter`; rename package to
      `@free-react-templates/groomly`; drop unused zod dep).
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

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/groomly/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/groomly/public/CNAME` = `groomly.free.componentdock.com`
  and the package `homepage` = `https://groomly.free.componentdock.com`.
