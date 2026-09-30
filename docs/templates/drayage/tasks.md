# Drayage (ColorLib "Freightbroker") — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation
> ships later on `feat/template-drayage`. Recreation name:
> **Drayage** (NEW name — the ColorLib source keeps its own name
> "Freightbroker"; "drayage" = short-haul freight trucking).
>
> Full replication research (preview DOM, CSS tokens, screenshot
> analysis, section-by-section fidelity notes) lives in
> `design-notes.md` in this folder — read it first. The OpenSpec
> requirements are in `openspec/specs/template-drayage/spec.md`.

## Quick facts

- **ColorLib item:** "Freightbroker" (TEMPLATES.md line 2961,
  "## Transportation (22)" at line 2947). Slug `freightbroker`
  appears exactly ONCE.
- **Preview URL:** ✅ reachable at the standard path (verified
  2026-10-01): https://preview.colorlib.com/theme/freightbroker/ —
  HTTP 200, 49,140 B. CSS:
  https://preview.colorlib.com/theme/freightbroker/css/style.css —
  HTTP 200, 46,390 B (canonical token source; captured in
  design-notes.md — implementers do NOT need to re-fetch).
- **Design category:** Transportation — freight-broker / courier
  marketing one-pager.
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript (strict),
  100% coverage, vitest + Testing Library.
- **Name:** **Drayage** — 0 collisions in apps/, spec folders (3,149
  on origin/main), docs/templates/, TEMPLATES.md names.

## Core tokens (summary — details in design-notes.md)

- Orange `#ff5f2a` · navy `#03123b` · footer navy `#09122b`
- Oswald (headings/buttons, uppercase) + Quicksand (body), Google
  Fonts `<link>`
- Skewed parallelogram CTAs: outer `skew(-30deg)`, label
  counter-skewed; chips `skew(-32deg)`
- Section pattern: orange 14px/ls4px eyebrow + navy Oswald h2
  (line-height 48px); `spad` = 100px top padding
- Square corners everywhere; shape comes from skew, not radius

## Implementation todo (spec-first: write tests RED → implement GREEN)

- [ ] Scaffold app from the simplest existing app; package
      `@free-react-templates/drayage`; run `npm install` at root and
      verify lockfile registration; set `homepage` + `public/CNAME`
      to `drayage.free.componentdock.com`; register `injectUiSource()`
      in `vite.config.ts`
- [ ] `index.html`: Google Fonts links (Oswald + Quicksand)
- [ ] `src/index.css`: Tailwind entry + `@theme` tokens
      (orange/navy/fonts)
- [ ] Navbar: navy topbar (phone · address · Register or Sign In · 4
      social icons) + white header (orange skewed logo block
      two-tone "DRAYAGE", nav HOME(orange) SERVICES ABOUT PAGES▾ BLOG
      CONTACTS, search icon; dropdown `aria-expanded`)
- [ ] Hero: picsum bg `drayage-hero` + dark overlay, eyebrow, white
      uppercase h2, skewed "View services" CTA (anchor scroll)
- [ ] Services: eyebrow "What We do?" + navy h2 + right intro
      paragraph; 2×2 cards (photo + lucide icon + orange h5 + blurb):
      Air Freight, Ship Freight, Railway Logistics, Ware Housing
- [ ] Counters: "ABOUT US"/"OUR CLIENTS & COUNTERS"; 4 count-up
      items (9123 · 70102 km · 1254 · 20254) with final-value static
      fallback; partner logo strip (placeholder grayscale logos)
- [ ] ChooseUs: navy band, "Our Benefit"/"Why People Choose Us?",
      2×2 benefits (Warehouse Storage, Security Cargo, Easy Payment,
      Fast Delivery), right image bleeding -50px over the top edge
- [ ] Projects: "Our Projects"/"What We Have Done!" + skewed "View
      All Projects" btn; 4 cards (Freight Carrier, Freight Forwarder,
      Import-Export, Agricultural Truck) — navy panel + skewed orange
      title chip overlapping top-left
- [ ] Testimonial + Request (ONE dark section): "Testimonials"/"Our
      Customer Reviews" + 2-slide quote slider (Eric Carson, Steve
      Smith — neutral roles, NO Colorlib) with chevron arrows; "Contacts
      Us"/"Request A Call Back" form — Your Name · Your Email · Your
      Phone · Services select · Message textarea + skewed "Submit
      Now"; dark translucent inputs; zod + react-hook-form
      validation, success state on valid submit
- [ ] Latest news: "Insight and Trends"/"Latest news company"; 3
      cards — photo + skewed "Guides" chip + overlaid white title +
      meta (by Ryan Casey · date · comments) + excerpt + Read More
- [ ] Footer (bg `#09122b`): blurb + Quick links (History, Our Staff,
      Our Partners, Blog) · Services (Air Shipping, Expert Staff,
      Ground Shipping, Logistic Services) · Contacts (address, phone,
      placeholder email); bottom bar: current-year copyright +
      "Made with Component Dock" → https://www.componentdock.com/
      + Client Login / Join Team
- [ ] Tests: one describe per component mirroring spec scenarios;
      100% coverage gate via `scripts/verify-app.sh drayage`
- [ ] Provenance sweep: `grep -ri colorlib apps/drayage` → zero hits;
      README/`npm run readme:status` + TEMPLATES.md `[x]` bookkeeping
      at merge time (implementer's step, not prep)

## Out of scope for prep (implementer/PR steps)

Copying any asset from ColorLib; new dependencies (owl-carousel,
nice-select, slicknav — replace with state/CSS/lucide); touching
shared files other than the new app's own workspace + lockfile
registration; setting TEMPLATES.md markers (implementer does `[~]`/
`[x]`).
