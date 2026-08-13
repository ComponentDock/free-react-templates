# Vanguard (ColorLib Pageone) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-vanguard`.

## Design notes (replication findings)

- **Original:** ColorLib "Pageone" — clean light web-agency one-pager (page
  title "Pageone — Free Bootstrap 5 Website Template by Colorlib"; source:
  https://colorlib.com/wp/template/pageone/, appears 3× in TEMPLATES.md —
  line 614 Bootstrap 5 (89) + line 1122 Business (365) + line 2350 One
  Page (91); mark ALL THREE `[x]` when done). The app name MUST differ from
  the source — hence **Vanguard** (the leading edge; single lowercase
  word, no collision with `apps/`, `openspec/specs/`, or
  `docs/templates/` — verified 2026-08-13).
- **Preview DOM analyzed:** https://preview.colorlib.com/theme/pageone/
  (HTTP 200, ~30 KB HTML; `css/style.css` ~55 KB parsed for tokens;
  screenshot `pageone-free-template-1.jpg` 1200×946 viewed in browser +
  live render sampled in-browser — screenshot matches the live DOM
  section-for-section). Stack: Bootstrap 5 + AOS + glightbox +
  tiny-slider + icomoon/flaticon icons — recreate ALL interactivity
  client-side in React (lightbox, smooth scroll, mobile menu, scroll-aware
  navbar; no jQuery libs).
- **Screenshot visual design:** clean flat modern agency one-pager on
  white with generous whitespace. Hot-pink `#ec1e64` accents ONLY: the
  logo's period, the 50×4px heading rule, the Get In Touch button, step
  card borders on hover, icon glyphs, link underlines. Huge 80px bold
  dark headline; Poppins throughout. Light grey `#f8f9fa` bands for
  services + features, ONE dark `#1d1d1d` band for clients. Service cards
  carry photos (glightbox), process cards are bordered number chips, team
  cards have portraits + social circles.
- **Design tokens (CSS-verified):** body Poppins 14px/400 `#252837`;
  brand `#ec1e64` (hover `#ef407b`, active `#f04b83`, focus ring
  `rgba(201,26,85,.5)`); light band `#f8f9fa`; dark band `#1d1d1d`; step
  border `#efefef` → active/hover `#ec1e64`; muted `#6c757d`, grey `#888`,
  `text-black-50`; hero bg `#fff` padding 12rem; h1 80px/700 (50px
  mobile); sections `padding: 7rem 0`; `.heading-wrap .heading` 50px/700
  with `::before` 50×4px pink bar (`padding-left: 100px`); `.btn-primary`
  pink bg, `border-radius: 0` (sharp), RENDERED text white (style.css
  declares `color: #000` but Bootstrap's rule wins — match the live
  render); `.step` padding 30px border 3px, number 12px/700 ls .2rem
  `#999`, h3 18px/700 pink; service/team h3 20px underlined → pink hover;
  thumb hover `box-shadow: 15px 15px 0 0 #ec1e64`; client cards white
  padding 30px, img 40px, h3 18px/700 pink, hover
  `0 15px 30px rgba(0,0,0,.1)`; service-2 glyph 80px pink, h3 a pink
  underline; quick-contact icon 80px circle `border: 2px solid #f8f9fa`,
  text 20px; `#map` 400px; footer 14px `#888`, inner bg `#f8f9fa`, first
  pt 80px, social circles 40px hover pink.
- **Source quirks to handle (note in PR):** clients repeat "Goldline"
  (cards 1 & 6); team repeats "Bradley Costa" (cards 1 & 4); contact
  email "@info@mydomain.com" (stray "@"); "Fundrising" spelling; dead
  `href="#"` buttons (Get In Touch → `#contact-section`); footer Contact
  widget shows untree.co details (swap per policy); `.inner.dark` bottom
  bar is NOT dark (no CSS rule — computed `#f8f9fa`; keep it light, do
  NOT invent a dark bar); navbar Services has a hover dropdown (may
  simplify to a static link); counter.js loaded but unused.
- **Icons (source → lucide/inline SVG):** flaticon-vector → PenTool
  (Illustration); flaticon-chat → MessageCircle (24/7 Support);
  flaticon-settings → Settings (Easy to use); flaticon-monitor → Monitor
  (Web development); flaticon-paper-plane → Send (Intuitive);
  flaticon-book → BookOpen (Documentation); icon-home → MapPin; icon-phone
  → Phone; icon-envelope → Mail. Brand social glyphs (twitter/instagram/
  facebook/linkedin) → inline SVG brand icons (lucide-react REMOVED brand
  icons — `typeof` probe every import; Facebook/Instagram/Twitter/Linkedin
  are `undefined`).
- **Images (never copy assets):** service thumbs + office photo via
  `https://picsum.photos/seed/vanguard-<n>/<w>/<h>`; team portraits prefer
  verified picsum person IDs **1027, 64, 823, 996** (probe each seed's
  actual image before pinning — picsum seeds are arbitrary; see skill
  note); client "logos" are fake-brand placeholder PNGs in the source —
  render the client NAME as styled text (h3) only, no images needed.

## Suggested component order (structure)

Navbar (brand "Vanguard." + 6 links + mobile overlay) → Hero (h1 only) →
Intro (paragraph + 2 link lists) → Services (4 photo cards + lightbox) →
Process (6 numbered step cards) → Clients (dark band, 6 white cards) →
Features (6 icon items) → OfficeAndTeam (office split + 4 team cards) →
Contact (form + quick contact rows) → Map (iframe) → Footer (4 widgets +
copyright bar). Layout grid copy: services/features `md:grid-cols-2`,
process `md:grid-cols-3`, clients `md:grid-cols-2`, team `lg:grid-cols-4`.

## Tasks (implementation checklist)

- [ ] Scaffold `apps/vanguard` from the simplest existing app; rename
      package to `@free-react-templates/vanguard`; `public/CNAME`
      `vanguard.free.componentdock.com`; homepage
      `https://vanguard.free.componentdock.com`; `npm install` at root so
      the lockfile registers the workspace (deploy Action runs `npm ci`)
- [ ] `vite.config.ts` with `injectUiSource()` (copy pattern from any
      existing app); Tailwind 4 tokens in `index.css` `@theme` (brand
      `#ec1e64` + hover/active shades, ink `#252837`, band `#f8f9fa`,
      dark `#1d1d1d`, muted `#6c757d`, grey `#888`, border `#efefef`)
- [ ] Poppins 400/500/600/700 `<link>` in `index.html`; document title
      "Vanguard — Web Agency Template"
- [ ] Components: `Navbar` (scroll-aware + mobile menu overlay),
      `Hero`, `Intro`, `Services` (glightbox-style lightbox on images),
      `Process`, `Clients`, `Features`, `OfficeTeam`, `Contact` (form
      success state), `Map`, `Footer`
- [ ] Buttons: sharp corners (`rounded-none`), pink bg, white text
      (match live render), hover `#ef407b`
- [ ] Heading rule component: 50×4px brand-pink bar left of every
      section heading (padding-left ~100px pattern)
- [ ] Hover offset shadow `15px 15px 0 0 #ec1e64` on service/team image
      thumbs
- [ ] Clients band: dark `#1d1d1d` bg, white heading, white cards with
      pink h3 + hover shadow
- [ ] TDD: tests per section mirroring the spec's Gherkin scenarios;
      100% coverage; `scripts/verify-app.sh vanguard` green
- [ ] Footer credit → "Component Dock" linking
      https://www.componentdock.com/; NO colorlib/pageone strings in app
      code (provenance only in this spec + TEMPLATES.md + PR)
- [ ] PR: `feat/template-vanguard` → merge immediately (`gh pr merge
    --squash --delete-branch`); description includes source template,
      preview URL, design tokens, renames/placeholder notes, and the
      source quirks handled (duplicate client/team names, stray "@",
      dead button hrefs, unstyled `.inner.dark`, simplified Services
      dropdown)
- [ ] Bookkeeping (implementer): mark ALL THREE TEMPLATES.md rows (614,
      1122, 2350) `[x]` with `vanguard.free.componentdock.com` + `npm run
    readme:status`, push
