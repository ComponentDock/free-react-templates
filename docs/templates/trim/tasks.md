# Trim (Colorlib Trim) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Cove PR awaits review.
> Implementation ships later on `feat/template-trim`.

## Design notes

- **Original:** ColorLib "Trim" — free hair salon website template
  (source: https://colorlib.com/wp/template/trim/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/trim/`
  (HTTP 200, 42.7KB) + stylesheet `css/style.css` (66.9KB). Full rendered
  DOM extracted; structure below is from the DOM + CSS tokens.
- **Structure observed (1:1):** navbar (Trim. + Home/About/Services &
  Pricing/Gallery/Blog/Contact) → hero ("We will make you stylish" + phone/
  address/hours strip) → welcome ("Welcome to Trim A Hair Salon") →
  services ("Our Services": Haircuts & Styling, Beard Treatment, Coloring
  Services, Beard Waxing) → what we do (ftco-bg-dark: Hair Style, Trimming,
  Traditional Haircuts Mens, Hair Style for Womens) → plan & pricing (Men's
  Haircut, Children Haircut, Beard Cut, Women's Haircut) → discount band
  ("Save up to 25% Off", All Services Discount) → hair stylist (Tom Smith,
  Mark Wilson, Patrick Jacobson, Ivan Dorchsner) → our shop (ftco-bg-dark
  photo tiles "Shaves 01") → gallery ("Our Gallery") → blog ("Recent from
  blog": "Men's hairstyle for all face shapes") → footer (Appointments +
  About Us + Recent Blog + Services + "Have a Questions?" + social).
- **Design tokens:** brand tan/gold **#ce9c6b** + brown **#785028**; dark
  bands **#1b1b1b**; display script **Cookie** + body **Poppins** via Google
  Fonts; light sections; tan filled uppercase buttons.
- **Recreation name:** Trim. App folder `apps/trim`, package
  `@free-react-templates/trim`.
- **Design approach:** light theme with tan/gold accents; hero = seeded
  picsum photo + headline + contact strip; services with lucide icons; dark
  "What We Do" band; pricing as priced rows; discount band; team cards with
  initials avatars; shop/gallery with seeded photo tiles; blog cards with
  seeded photos; footer with appointment links + social icons; all images
  picsum-seeded (`picsum.photos/seed/trim-N/w/h`); Google Fonts via
  `<link>`.
- Reuse `packages/ui` (Button, ButtonLink, Card, Badge, cn) — do NOT
  duplicate components.
- Base implementation on `apps/aurora` (multi-section landing with
  Navbar/Hero/Sections/Footer structure) — the closest existing multi-section
  app; adapt patterns from the 404 apps' Navbar/SocialLinks.

## Tasks

- [x] Write `openspec/specs/template-trim/spec.md` (Gherkin requirements +
      scenarios + replication findings) — DONE on main (this prep).
- [ ] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/trim` (copy `apps/aurora`; rename package to
      `@free-react-templates/trim`).
- [ ] TDD: tests first for Navbar, Hero, Services, WhatWeDo, Pricing,
      Team, Shop, Gallery, Blog, Footer, App composition; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Update TEMPLATES.md status `[~]` → `[x]` after merge (bookkeeping on
      main, state D).
- [ ] Update README structure + `docs/ai-context.md` app list.
