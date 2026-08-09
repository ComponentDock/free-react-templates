# Stylely (ColorLib Hipstyle) — Tasks & Design Notes

> Recreation of ColorLib "Hipstyle" (https://colorlib.com/wp/template/hipstyle/)
> under the NEW original name **Stylely**. Prep artifacts were written on
> `main` under the original slug; the implementer renamed the folders to
> `template-stylely` / `stylely` in the PR (repo convention).

## Design notes

- **Original:** ColorLib "Hipstyle" — free barber shop website template.
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/hipstyle/`
  (HTTP 200, 38.8KB) + stylesheet `css/style.css` (198.2KB). Full rendered
  DOM extracted; structure below is from the DOM + CSS tokens.
- **Structure observed (1:1):** navbar (Home/About/Service/Blog/team/price/
  Contact) → coral-red hero ("Feel Like Home" / "Good Look Guaranteed" +
  "Book Now" / "Contact Us" CTAs + photo) → about us split ("Connect with
  your dream style") → service expectation (Stylish Hair Cut, Wedding Hair,
  Color & Hair Wash) → offers (Best Equipment, Best Price, Fitness
  Equipment, Fitness Training) → pricing plan (8 rows — $10.00) →
  testimonials (Mosan Cameron, Executive of fedex) → meet our artist (Adam
  Billiard, Fred Macyard, Justin Stuard) → make an appointment form
  (Name/Email/Service/Phone/Date/Time/Note) → latest style news (3 blog
  cards) → footer (About Us + Contact us: Los angeles, United States ·
  +44 6532 986 652 + Newsletter form + social).
- **Design tokens:** brand red **#f81c1c** + coral **#f44a40**; light bgs
  **#f9f9ff** / lavender **#f0e9ff**; footer dark **#30383b**; headings
  **Rufina** (serif) + body **Roboto** (sans) via Google Fonts; red filled
  uppercase buttons (hero "Book Now" is white filled).
- **Recreation name:** Stylely. App folder `apps/stylely`, package
  `@free-react-templates/stylely`, homepage
  `https://free-react-templates-stylely.surge.sh`.
- **Design approach:** light theme with red accents; hero = coral-red section
  with seeded picsum photo; about split; services with lucide icons; offers +
  blog with seeded photos; pricing as priced rows; testimonials with
  prev/next slider; team cards with portraits + inline SVG brand icons;
  appointment + newsletter forms with inline validation and success states;
  all images picsum-seeded (`picsum.photos/seed/stylely-N/w/h`); Google Fonts
  via `<link>`.
- Reuse `packages/ui` (Button, ButtonLink, cn) — do NOT duplicate components.
- Base implementation: `apps/snip` (barber shop landing with
  Navbar/Hero/About/Services/Pricing/Team/Footer structure) — the closest
  existing app; extended with Offers, Testimonials, Appointment, and Blog
  sections matching the Hipstyle DOM.

## Tasks

- [x] Write `openspec/specs/template-hipstyle/spec.md` (Gherkin requirements + scenarios + replication findings) — DONE on main (prep).
- [x] Rename prep folders to the new name: `template-stylely` spec + `docs/templates/stylely` (implementer, in PR).
- [x] Create `apps/stylely` (copy `apps/snip`; rename package to
      `@free-react-templates/stylely`).
- [x] TDD: tests first for Navbar, Hero, About, Services, Offers, Pricing,
      Testimonials, Team, Appointment, Blog, Footer, App composition.
- [x] Implement components (green) at 100% coverage.
- [x] Per-app gate: `scripts/verify-app.sh stylely` + `npm run spec:validate`.
- [ ] Update TEMPLATES.md status `[~]` → `[x]` after merge (bookkeeping on
      main, state D).
- [ ] Update README structure + `docs/ai-context.md` app list (via
      `npm run readme:status`).
