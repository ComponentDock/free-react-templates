# Endpoint (Colorlib Apiforge) — Tasks & Design Notes

> Prep artifacts renamed to the NEW original name "Endpoint" by the
> implementer (the ColorLib source name "Apiforge" is never reused).

## Design notes (replication findings)

- **Original:** ColorLib "Apiforge" — API platform template
  (source: https://colorlib.com/wp/template/apiforge/).
- **Demo DOM analyzed:** https://apiforge-colorlib.pages.dev/
  (HTTP 200; `https://preview.colorlib.com/theme/apiforge/` returns 404 —
  demo hosted on Cloudflare Pages per the ColorLib preview portal).
- **Visual design (from DOM + Tailwind classes + screenshot):** modern SaaS
  API-platform landing, LIGHT default with full dark mode (toggle in
  navbar), **orange** accents (`#f97316` orange-500 / `#ea580c` orange-600
  / `#fb923c` orange-400) on gray-50/white surfaces and `#030712`/`#111827`
  dark surfaces, Outfit font, pill buttons, rounded cards, dark terminal
  window in the hero with traffic-light dots + CLI walkthrough.
- **Structure (1:1, section order from the live demo):**
  1. Header: logo, Products / Pricing / About / Blog / Contact, Get API
     Key pill, dark-mode toggle (sticky, backdrop-blur).
  2. Hero: eyebrow "Trusted by 1M+ developers worldwide", H1 "Ship Better
     APIs Faster" (orange word), blurb, Get Free API Key + View
     Documentation CTAs, stats row (1M+ Developers · 50B+ API Calls/mo ·
     99.999% Uptime · 200+ SDKs), terminal window.
  3. Stats band: repeated metrics.
  4. Features (#services): "Everything You Need to Ship APIs" — 6 cards
     (API Gateway, Rate Limiting, Authentication, Analytics Dashboard,
     Webhook Management, SDK Generation).
  5. Testimonials (#testimonials): "Trusted by Engineering Teams" +
     carousel (prev/next) of developer quotes.
  6. Contact (#contact): "Start Building Today" — form (Full Name, Email,
     Phone, Project Type select, Details, Send Message) + contact info
     cards (Phone, Email, Address, Office Hours).
  7. FAQ (#faq): "Frequently Asked Questions" accordion (5 items).
  8. CTA band: "Ready to Ship Better APIs?" + Get Free API Key / Talk to
     Sales.
  9. Footer: blurb + contact, Products / Developers / Company columns,
     social (GitHub, X, LinkedIn), copyright bar.
- **Design tokens extracted from the demo CSS (`_astro/Base.*.css`):**
  - Primary brand orange (Tailwind orange scale): `#f97316` (500),
    `#ea580c` (600), `#fb923c` (400), `#c2410c` (700), `#fed7aa` (200),
    `#ffedd5` (100).
  - Dark surfaces: `#030712` (950), `#111827` (900), `#1f2937` (800),
    `#374151` (700). Light surfaces: `#f9fafb` (50), `#f3f4f6` (100),
    `#e5e7eb` (200).
  - Text: `#111827` headings, `#4b5563`/`#6b7280` body, `#9ca3af` muted.
  - Font: **"Outfit"** via Google Fonts `<link>`; mono stack for the
    terminal.
  - Buttons: pill (rounded-full), solid orange primary, white/gray-border
    secondary. Cards rounded 0.5–0.75rem with 1px hairlines.
- **Recreation name:** **Endpoint** (NEW name — ColorLib "Apiforge" is
  never reused). App folder `apps/endpoint`, package
  `@free-react-templates/endpoint`, homepage
  `https://free-react-templates-endpoint.surge.sh`.
- **Recreation approach:** no asset copying — lucide-react icons (brand
  icons GitHub/X/LinkedIn as inline SVG), Outfit via Google Fonts, orange
  scale in `@theme`, terminal recreated with Tailwind (traffic-light dots),
  maps embed replaced by a styled placeholder card, seeded picsum images
  only if needed; repo-standard Navbar (dark-mode toggle) pattern; shared
  Button/ButtonLink/Badge/Card/cn from `packages/ui`.

## Tasks

- [x] Write `openspec/specs/template-endpoint/spec.md` (Gherkin
      requirements + scenarios reflecting the REAL sections above).
- [x] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/endpoint` (copy the section-rich landing app pattern —
      ecobit; rename package to `@free-react-templates/endpoint`).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Per-app gate: `bash scripts/verify-app.sh endpoint` (typecheck →
      lint → test:coverage → build) + `npm run spec:validate`.
- [ ] Push `feat/template-endpoint`, open PR (source template, preview
      URL, design tokens, what differs).
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main, state D).
