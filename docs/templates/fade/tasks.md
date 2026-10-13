# Fade (ColorLib Barberkraft) — Tasks & Design Notes

> Recreation of https://colorlib.com/wp/template/barberkraft/ under the new
> name **Fade** (barbershop skin-fade; evokes the craft). Implemented on
> `feat/template-fade`.

## Design notes (replication findings)

- **Original:** ColorLib "Barberkraft" — barbershop template
  (source: https://colorlib.com/wp/template/barberkraft/).
- **Demo DOM analyzed:** https://barberkraft-colorlib.pages.dev/
  (HTTP 200; preview.colorlib.com 404 — Cloudflare Pages demo).

⚠️ **Pointer status (re-verified 2026-10-13c):** the Cloudflare Pages mirror
`https://barberkraft-colorlib.pages.dev/` **no longer resolves** — DNS
**NXDOMAIN** (`EAI_NONAME`), re-checked 2026-10-13c; all 48
`<slug>-colorlib.pages.dev` hosts this family of preps cites are gone. The
DOM/CSS evidence below was measured from that mirror at prep time and stays
the fidelity reference. The demo family now answers from the ColorLib preview
host `https://preview.colorlib.com/theme/barberkraft/` (this prep recorded a
**404** on that path at prep time — the move onto the preview host happened
after it, so treat the path as unverified). The host answered the provider's
bot wall (**403**, 17 B `text/plain`, Cloudflare error 1106) while this note
was written, so its own reading could not be re-taken this run — re-probe it
before relying on it. ⚠️ `apps/fade` was built from the mirror's tokens before
this migration, so the app follows the mirror, not today's preview host.
- **Visual design (DOM + stylesheet):** dark barbershop landing — amber
  accents, Space Grotesk font, dark hero/CTA/footer, light-gray section
  bands, filterable service menu, barber team cards, before/after results,
  testimonial quotes, FAQ accordion, contact form.
- **Structure (1:1, section order):**
  1. Navbar: About, Services, Barbers, Pricing, Blog, Contact + Book Now.
  2. Hero: "Crafting Style, Building Confidence" + Book Appointment / Call.
  3. Services: "Our Service Menu" — filter pills (All/Haircuts/Beard/
     Coloring/Kids) + grouped service cards (name, duration, blurb, price).
  4. Team: "Meet Your Barbers" — Marcus Johnson, Jake Rivera, Tony Chen.
  5. Why Us: "The BarberKraft Difference" — 4 feature cards.
  6. Results: "See the Difference" — before/after transformation cards.
  7. Testimonials: "What Our Clients Say" — quote cards.
  8. CTA: "Ready for Your Best Cut Yet?" + Book Now / Call.
  9. FAQ: "Frequently Asked Questions" — accordion (5 items).
  10. Contact: "Get In Touch" — form (name/email/phone/service/message) +
      Visit/Call/Email/Shop Hours cards.
  11. Footer: Services/Info/Shop/Contact columns + socials + copyright.
- **Design tokens:**
  - Accent: amber scale — 400 #fbbf24, 500 #f59e0b, 600 #d97706,
    700 #b45309, 100 #fef3c7, 300 #fcd34d.
  - Surfaces: gray-950/900/800/700 dark; white + gray-50 light.
  - Font: "Space Grotesk" (300–700) via Google Fonts `<link>`.
  - Buttons: rounded-lg; amber solid (dark text) primary, outline secondary;
    rounded-full filter pills.
- **Recreation name:** Fade (NEW — never reuse ColorLib "Barberkraft").
  App folder `apps/fade`, package `@free-react-templates/fade`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/fade-<n>/<w>/<h>`); lucide-react icons; inline SVG
  BrandIcon for socials; Space Grotesk via Google Fonts; repo-standard
  Navbar (dark-mode toggle) + Footer chrome.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Tasks

- [x] Write `openspec/specs/template-fade/spec.md` (Gherkin requirements +
      scenarios reflecting the REAL 11-section structure above).
- [x] Validate spec: `npm run spec:validate`.
- [x] Create `apps/fade` (copy the Endpoint landing app pattern; rename
      package to `@free-react-templates/fade`).
- [x] TDD: tests first for each section component; run red.
- [x] Implement components (green) at 100% coverage.
- [x] Per-app gate: `bash scripts/verify-app.sh fade` (typecheck → lint →
      100% coverage → build) + spec:validate.
- [x] Push `feat/template-fade`, open PR (source template, preview URL,
      design tokens, what differs), merge immediately.
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage +
      readme:status (bookkeeping on main, state D).
