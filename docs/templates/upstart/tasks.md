# Upstart (ColorLib Started) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-upstart`. Recreation name: **Upstart** (NEW name —
> the ColorLib source keeps its name "Started").
>
> Full replication research (preview DOM skeleton, CSS tokens, screenshot
> analysis, section-by-section fidelity notes) lives in `design-notes.md`
> in this folder — read it first. The OpenSpec requirements are in
> `openspec/specs/template-upstart/spec.md`.

## Quick facts

- **ColorLib item:** "Started" (TEMPLATES.md line 2862). Slug `started`
  appears exactly ONCE in TEMPLATES.md — distinct from "Thestartup"
  (line 2865), which is already prepped under other names.
- **Preview URL — REACHABLE (verified 2026-09-30):**
  `https://preview.colorlib.com/theme/started/`
  (HTTP 200, 17,941 bytes, `<title>Started — Colorlib Website
  Template</title>`).
- **Preview CSS:** `css/style.css` (14,223 bytes, hand-written template
  block — both fonts + all tokens) + base `css/bootstrap.min.css`.
- **Key tokens:** Oswald (headings) + Roboto Mono (ALL body copy) via
  Google Fonts; accent indigo `#434ba4`; ink `#000` (headings, CTA
  button, cta-box 2px border); body `#999999`; case-study band `#f8f9fa`;
  nav links `rgba(0,0,0,0.6)`; square corners everywhere except 50%
  avatars.
- **Sections in DOM order:** white navbar ("Started" Oswald 700 wordmark
  left, Roboto Mono links right: Home / Portfolio / Services▾ / About /
  Contact) → hero (Oswald 3rem pull-quote + round-avatar author over a
  500px cover photo, bordered "We're Available For Work" CTA card with
  flush black "Hire Us Now" button) → 3-column services (indigo 60px
  icons: Mobile Application / E-Commerce / Web Application, each with a
  3-item black list) → 2 alternating case-study halves on the #f8f9fa
  band (kMix Design — image left; Dieter Rams — image right) → 3-up
  testimonials (80px round avatars, "Co-Founder" roles) → white footer
  (About Us / Navigation / Work / Social widgets + Component Dock
  copyright bar).
- **Naming check:** "upstart" collides with nothing in `apps/`,
  `openspec/specs/`, or `docs/templates/` (verified 2026-09-30).

## Task outline (for the implementer)

- [ ] Scaffold `apps/upstart` from the simplest existing app; package
      `@free-react-templates/upstart`; CNAME
      `upstart.free.componentdock.com`; homepage set; `npm install` at
      repo root (lockfile registration); `injectUiSource()` in
      `vite.config.ts`; copy the standard app layout
- [ ] `@theme` tokens in `src/index.css`: accent `#434ba4`, ink `#000`,
      body `#999999`, band `#f8f9fa`, nav-link `rgba(0,0,0,0.6)`,
      widget-body `rgba(0,0,0,0.5)`, social `#ccc`; Oswald 400/500/700 +
      Roboto Mono 400 via Google Fonts `<link>` in `index.html`; body
      defaults: Roboto Mono 1rem/1.7 #999999
- [ ] `Navbar.tsx` — white bar: "Started" wordmark (Oswald 700, 25px)
      left; right links Home / Portfolio / Services (ChevronDown +
      dropdown: Web Design, WP Development, Front End, Sub Menu) / About
      / Contact; rgba(0,0,0,0.6) + .05em letter-spacing; hover/active
      `#434ba4`/`#000`; mobile hamburger (lucide Menu) → off-canvas
      slide-in with close X + `aria-expanded`
- [ ] `Hero.tsx` — `.site-hero` margin-top 10rem; 500px cover band
      (`picsum.photos/seed/upstart-hero/1920/500`); absolutely positioned
      blockquote left 8% max-width 500px: `”` glyph (4rem, left −40px)
      + 3rem/1.0 quote "Design is not just what it looks like and feels
      like. Design is how it works." + author row (50px round avatar
      `upstart-person-1` + cite "Steve Jobs"); absolute cta-box right 8%
      max-width 300px: 2px solid #000 border, padding 30px 30px 70px,
      h2 "We're Available For Work" (26px), muted blurb, black
      "Hire Us Now" link-button absolute bottom-left (padding 10px 20px,
      square, white text)
- [ ] `Services.tsx` — 3 cols (stack on mobile), each `.service`
      centered: 60px lucide icon tinted `#434ba4` (Smartphone /
      ShoppingCart / MonitorCheck), h3 20px black, muted blurb, centered
      black list (Mobile Application: Android Development, iOS
      Development, React Native · E-Commerce: WooCommerce, Shopify
      Integration, BigCommerce · Web Application: React Web App, Vue JS
      Web App, Angular Web App)
- [ ] `WorkShowcase.tsx` — `#f8f9fa` band, two `.half` rows (min-height
      500px, 50/50): row 1 image LEFT (`upstart-work-1/960/700`) +
      content right — h3 40px "kMix Design", blurb, "Client: JUVINLE
      Corp." / "Date: 2020", "View Case Study" link; row 2 content left
      + image RIGHT (`upstart-work-2`) — "Dieter Rams", "Client: XYZ
      Inc." / "Date: 2019". Content padding 40px, h3 margin-bottom 30px
- [ ] `Testimonials.tsx` — 3 cols: 80px round avatar
      (`upstart-person-1..3`), h3 20px name, muted "Co-Founder" span,
      quoted blockquote — Steve Jobs / John Doe / John Smith
- [ ] `Footer.tsx` — white, padding 7rem 0, 14px; 4 widgets: About Us
      (blurb rgba(0,0,0,0.5)), Navigation (Home, Services, About,
      Contact), Work (Dieter Rams, kMix Design), Social (Facebook,
      Twitter, Instagram, Linkedin, Youtube — lucide icons `#ccc` +
      labels); centered copyright bar: "Copyright © All rights reserved"
      + "Made with Component Dock" → https://www.componentdock.com/
- [ ] Tests colocated `*.test.tsx`, one describe per component, scenario
      `it` blocks mirroring the spec's Gherkin; 100% coverage; run
      `scripts/verify-app.sh upstart` green
- [ ] Do NOT invent sliders, forms, counters, or carousels — the source
      home page has none. Nav/footer page links stay as anchors (single
      page)

## Constraints recap

- No ColorLib / preview.colorlib.com strings anywhere in `apps/upstart`
  (comments included). Provenance lives only in this spec folder,
  TEMPLATES.md, and the PR.
- No copied assets: picsum seeds `upstart-*`, Google Fonts link,
  lucide-react icons. Never ship the source CSS, flaticon SVGs, or
  icomoon fonts.
- Footer MUST link `https://www.componentdock.com/` ("Component Dock").
- Conventional commit for implementation; PR + immediate squash merge
  (implementer flow, not prep).
