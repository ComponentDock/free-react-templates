# Hipstyle (Colorlib Hipstyle) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Cove PR awaits review.
> Implementation ships later on `feat/template-hipstyle`.

## Design notes

- **Original:** ColorLib "Hipstyle" — free barber shop website template
  (source: https://colorlib.com/wp/template/hipstyle/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/hipstyle/`
  (HTTP 200, 38.8KB) + stylesheet `css/style.css` (198.2KB). Full rendered
  DOM extracted; structure below is from the DOM + CSS tokens.
- **Structure observed (1:1):** navbar (Home/About/Service/Blog/blog
  Single/blog pages/team/price/Elements/Contact) → hero slider ("Feel like
  home" / "Good Look Guaranteed" + "Connect with your dream style" + About
  us CTA) → about us split → service expectation (Stylish Hair Cut, Wedding
  Hair, Color & Hair Wash) → features (Best Equipment, Best Price, Fitness
  Equipment, Fitness Training) → pricing plan (Hair Cut / Hair Color / Hair
  Straight / Shampoo / Hair Wash / Hair Shave / Men's Facial / Wedding Style
  — $10.00) → testimonials (Mosan Cameron, Executive of fedex) → meet our
  artist (Adam Billiard, Fred Macyard, Justin Stuard) → latest style news (3
  blog cards) → footer (About Us + Contact us: Los angeles, United States ·
  +44 6532 986 652 + Newsletter form + social).
- **Design tokens:** brand red **#f81c1c** + coral **#f44a40**; light bgs
  **#f9f9ff** / lavender **#f0e9ff**; footer dark **#30383b**; headings
  **Rufina** (serif) + body **Roboto** (sans) via Google Fonts; red filled
  uppercase buttons.
- **Recreation name:** Hipstyle. App folder `apps/hipstyle`, package
  `@free-react-templates/hipstyle`.
- **Design approach:** light theme with red accents; hero = seeded picsum
  photo + headline; about split; services/features with lucide icons;
  pricing as priced rows; testimonials with initials avatar; team cards with
  initials avatars; blog cards with seeded photos; footer with newsletter
  form; all images picsum-seeded (`picsum.photos/seed/hipstyle-N/w/h`);
  Google Fonts via `<link>`.
- Reuse `packages/ui` (Button, ButtonLink, Card, Badge, cn) — do NOT
  duplicate components.
- Base implementation on `apps/aurora` (multi-section landing with
  Navbar/Hero/Sections/Footer structure) — the closest existing multi-section
  app; adapt patterns from the 404 apps' Navbar/SocialLinks.

## Tasks

- [x] Write `openspec/specs/template-hipstyle/spec.md` (Gherkin requirements + scenarios + replication findings) — DONE on main (this prep).
- [ ] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/hipstyle` (copy `apps/aurora`; rename package to
      `@free-react-templates/hipstyle`).
- [ ] TDD: tests first for Navbar, Hero, About, Services, Features,
      Pricing, Testimonials, Team, Blog, Footer, App composition; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Update TEMPLATES.md status `[~]` → `[x]` after merge (bookkeeping on
      main, state D).
- [ ] Update README structure + `docs/ai-context.md` app list.
