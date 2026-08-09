# Crewcut (Colorlib Barber) — Tasks & Design Notes

> Prep artifacts renamed from the pre-naming-rule `template-barber` prep
> (2026-08-09): the ColorLib source name "Barber" is FORBIDDEN as the app
> name — the recreation is **Crewcut** (barber theme). Spec rewritten
> against the live preview on 2026-08-09.

## Design notes

- **Original:** ColorLib "Barber" — free barber shop website template
  (source: https://colorlib.com/wp/template/barber/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/barber/`
  (HTTP 200, 32.4KB) + stylesheet `css/main.css` (34.9KB). Full rendered DOM
  extracted; structure below is from the DOM + CSS tokens.
- **Structure observed (1:1):** header (transparent over gradient, logo +
  Home/Service/Team/Price/Contact) → banner (gradient bg `#f61daf`→`#691cff`,
  "HairStyle is a Must try Fashion for all Occasion" + View More Changes
  white pill) → services ("What We Can Do for You", 4 icon rows: Beard
  Trimming, Quality Gel Shave, Effective Body Massage, Stylish Hair Cutting)
  → gallery (6-photo strip, "Upper Cutting" hover captions) → features
  ("Some Features that Made us Unique", 6 cards) → about ("We Believe that
  Interior beautifies…" + See Details + play photo) → team ("Experienced
  Mentor Team", 4 members) → price ("Choose the Perfect Plan for you",
  Standard £199 / Business £399 / Ultimate £499 + Purchase Plan) → contact
  ("If you need, Just drop us a line", 4 info columns + name/email/subject/
  message form) → footer `#222222` (About Us + Newsletter + Follow Us + © bar).
- **Design tokens:** brand pink→purple gradient **#f61daf → #691cff**
  (header, banner, primary buttons, hover); headings **#222222**, body
  **#777777** on light **#f9f9ff**; font **Poppins** via Google Fonts; pill
  buttons (radius 25px) with gradient + arrow; header-btn white radius 20px;
  service icon hues `#4cd3e3` / `#38a4ff` / `#f4e700` / `#f44a40`.
- **Recreation name:** Crewcut. App folder `apps/crewcut`, package
  `@free-react-templates/crewcut`.
- **Design approach:** light theme with gradient accents (defined in `@theme`
  as `--color-brand` stops with a gradient utility); banner = gradient bg +
  headline + seeded picsum hero photo + "View More Changes" white pill;
  services/features with lucide icons; gallery photo strip with hover
  captions; team picsum avatars; pricing with gradient hover; contact form
  client-side with zod; newsletter input in footer; all images
  picsum-seeded (`picsum.photos/seed/crewcut-N/w/h`); Google Fonts via
  `<link>`.
- Reuse `packages/ui` (Button, ButtonLink, Card, Badge, cn) — do NOT duplicate
  components.
- Base implementation on `apps/aurora` (multi-section landing with
  Navbar/Hero/Sections/Footer structure) or `apps/clipper` (barber-shop
  landing, newest similar app) — adapt patterns from the 404 apps'
  Navbar/SocialLinks.

## Tasks

- [x] Write `openspec/specs/template-crewcut/spec.md` (Gherkin requirements +
      scenarios + replication findings) — rewritten on the
      `feat/template-crewcut` branch.
- [ ] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/crewcut` (copy `apps/aurora`/`apps/clipper`; rename
      package to `@free-react-templates/crewcut`).
- [ ] TDD: tests first for Navbar, Banner, Services, Features, Team, Pricing,
      ContactForm, Footer, App composition; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Per-app gate: `scripts/verify-app.sh crewcut` (typecheck → lint →
      100% coverage tests → build) + `npm run spec:validate`.
- [ ] PR `feat: Crewcut — Barber Shop template (ColorLib Barber)` → merge
      immediately.
- [ ] Update TEMPLATES.md status `[~]` → `[x]` after merge (bookkeeping on
      main, state D) + surge URL + homepage.
- [ ] Update README structure + `docs/ai-context.md` app list.
