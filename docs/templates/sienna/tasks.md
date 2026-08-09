# Sienna (ColorLib Remake) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Cove PR awaits review.
> Implementation ships later on `feat/template-sienna`.

## Design notes

- **Original:** ColorLib "Remake" — free barber shop website template
  (source: https://colorlib.com/wp/template/remake/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/remake/`
  (HTTP 200, 27.3KB) + stylesheet `css/style.css` (33.7KB). Full rendered
  DOM extracted; structure below is from the DOM + CSS tokens.
- **Structure observed (1:1):** navbar (Home/About/Service/Pages/Pricing/
  Blog Page/Blog Details/Team/Contact) → hero ("We Specialize In All Phase
  Of hair" + CTA) → about ("About Us" / "We Are Artist, Hair Is My Canvas")
  → advance feature ("Our Strength Is Your Smart beauty": Best Place, Best
  Equipment, Modern Style, Expert Staff) → video band ("View Our Work") →
  services (bg-soapstone, "Our Services": Stylish Hair Cut, Cut & Hair
  Style, Color & Hair Wash) → team ("Our Team" / "Experience Staff Change
  Your Look": Daniel Mateno, Julian Parsian) → pricing ("Pricing Plan" /
  "Choose Your Favorite Package": Basic Hair Cut $79.00, Standard Hair Cut
  $89.00, Ultimate Hair Cut $99.00) → testimonials (Nihare Edersen) → blog
  ("Our Blog" / "Read The Latest Hair Style News": Make The Most Of Your
  Locks, Chic They Work Any Occassion, Easy Hairstyles For GirlHair) →
  footer (Top Products, Quick Links, Features, Resources + Newsletter).
- **Design tokens:** brand rust brown **#99513a** + dark slate **#3a414e**;
  warm light bgs **#fff9f7** / soapstone; tan **#E0CAC4**; headings
  **Josefin Sans** + body **Roboto Condensed** via Google Fonts; rust-brown
  filled uppercase buttons.
- **Recreation name:** Sienna. App folder `apps/sienna`, package
  `@free-react-templates/sienna`.
- **Design approach:** light warm theme with rust accents; hero = seeded
  picsum photo + headline; about split; feature cards with lucide icons;
  video band with play button; services with lucide icons; team cards with
  initials avatars; pricing tiers with highlighted middle card; testimonial
  with initials avatar; blog cards with seeded photos; footer with
  newsletter form; all images picsum-seeded
  (`picsum.photos/seed/sienna-N/w/h`); Google Fonts via `<link>`.
- Reuse `packages/ui` (Button, ButtonLink, Card, Badge, cn) — do NOT
  duplicate components.
- Base implementation on `apps/aurora` (multi-section landing with
  Navbar/Hero/Sections/Footer structure) — the closest existing multi-section
  app; adapt patterns from the 404 apps' Navbar/SocialLinks.

## Tasks

- [x] Write `openspec/specs/template-sienna/spec.md` (Gherkin requirements + scenarios + replication findings) — DONE on main (this prep).
- [ ] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/sienna` (copy `apps/aurora`; rename package to
      `@free-react-templates/sienna`).
- [ ] TDD: tests first for Navbar, Hero, About, Features, Services, Team,
      Pricing, Testimonials, Blog, Footer, App composition; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Update TEMPLATES.md status `[~]` → `[x]` after merge (bookkeeping on
      main, state D).
- [ ] Update README structure + `docs/ai-context.md` app list.
