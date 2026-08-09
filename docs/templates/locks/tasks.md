# Locks (ColorLib Trim) — Tasks & Design Notes

> Implementer tasks. Claimed on `feat/template-locks` (2026-08-09) — the
> ColorLib source is "Trim"; the recreation is named **Locks** per the
> new-original-name rule.

## Design notes

- **Original:** ColorLib "Trim" — free hair salon website template
  (source: https://colorlib.com/wp/template/trim/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/trim/`
  (HTTP 200, 42.7KB) + stylesheet `css/style.css` (66.9KB). Full rendered
  DOM extracted; structure below is from the DOM + CSS tokens + the
  TEMPLATES.md screenshot (`trim-free-template.jpg`).
- **Structure observed (1:1):** navbar (Locks. script logo +
  Home/About/Services & Pricing/Gallery/Blog/Contact) → hero ("We will make
  you stylish" + "Book an Appointment" pill + circular play button) → black
  info bar (phone/address/hours) + tan social strip (X/Facebook/Instagram)
  → welcome ("Welcome to Locks A Hair Salon") → services ("Our Services":
  Haircuts & Styling, Beard Treatment, Coloring Services, Beard Waxing) →
  what we do (black band: Hair Style, Trimming, Traditional Haircuts Mens,
  Hair Style for Womens) → plan & pricing (Men's Haircut $20, Children
  Haircut $29, Beard Cut $20, Women's Haircut $49.91) → discount band
  (photo bg: "Save up to 25% Off", "All Services Discount") → hair stylist
  (Tom Smith, Mark Wilson, Patrick Jacobson, Ivan Dorchsner) → our shop
  (black band photo tiles "Shaves 01" $150 "Add to cart") → gallery ("Our
  Gallery") → counter band (dark photo bg: Creative Makeup, Number of
  Awards, Happy Clients, Piercing Done) → blog ("Recent from blog": "Men's
  hairstyle for all face shapes") → footer (About Us + Recent Blog +
  Services + "Have a Questions?" + social + copyright).
- **Design tokens:** brand tan/gold **#ce9c6b** (`--color-brand`); dark
  bands **#000** (`--color-ink`-style); brown **#785028**; display script
  **Cookie** (`--font-display`) + body **Poppins** (`--font-sans`) via
  Google Fonts; white sections; tan filled pill buttons (`#ce9c6b`, white
  text, hover inverts).
- **Recreation name:** Locks. App folder `apps/locks`, package
  `@free-react-templates/locks`, homepage
  `https://free-react-templates-locks.surge.sh`.
- **Design approach:** dark photo hero with tan accents; hero = seeded
  picsum photo + headline + pill CTA + play button; black info bar with
  tan social strip; services with lucide icons; black "What We Do" band;
  pricing as priced rows; photo discount band; team cards with initials
  avatars; black shop band; gallery photo grid; dark stats band; blog
  cards with seeded photos; footer with widget columns + social icons; all
  images picsum-seeded (`picsum.photos/seed/locks-N/w/h`); Google Fonts
  via `<link>`.
- Reuse `packages/ui` (Button, ButtonLink, Card, Badge, cn) — do NOT
  duplicate components.
- Base implementation on `apps/amber` (most recent multi-section landing
  with Navbar/Hero/Sections/Footer + dark-mode toggle + BrandIcon inline
  SVG pattern); keep the `injectUiSource()` vite plugin and lockfile rule.

## Tasks

- [x] Write `openspec/specs/template-locks/spec.md` (Gherkin requirements +
      scenarios + replication findings) — renamed from the pre-Settle
      `template-trim` prep and updated with the Locks name + live findings.
- [x] Claim Trim as in-progress in TEMPLATES.md (`[~]`) on
      `feat/template-locks`, pushed.
- [ ] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/locks` (copy `apps/amber`; rename package to
      `@free-react-templates/locks`; run `npm install` at root so the
      lockfile registers the workspace).
- [ ] TDD: tests first for Navbar, Hero, InfoBar, Welcome, Services,
      WhatWeDo, Pricing, Discount, Team, Shop, Gallery, Counter, Blog,
      Footer, App composition; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Per-app gate: `bash scripts/verify-app.sh locks` + `npm run
    spec:validate`.
- [ ] PR → immediate squash merge → bookkeeping on main: TEMPLATES.md
      `[~]` → `[x]` + surge link, `npm run readme:status`, push.
