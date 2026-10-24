# Freightly (ColorLib Logitrans) — Tasks & Design Notes

> **SHIPPED** — this prep's design shipped as `apps/freightly`
> (<https://freightly.free.componentdock.com>). The unchecked items below are
> prep history, not outstanding work.

> Recreation of ColorLib "Logitrans"
> (https://colorlib.com/wp/template/logitrans/) under the NEW name
> **Freightly** (freight + -ly), per the monorepo naming mandate (never
> reuse the ColorLib source name).

## Design notes (replication findings)

- **Original:** ColorLib "Logitrans" — logistics / freight / shipping
  company Astro template.
- **Demo DOM analyzed:** https://logitrans-colorlib.pages.dev/ (HTTP 200 at prep time,
  ~94 KB HTML + `/_astro/index@_@astro.CUkGMIAf.css` ~47.7 KB parsed for
  tokens; the official `https://preview.colorlib.com/theme/logitrans/`
  returned 404 at prep time — demo was hosted on Cloudflare Pages per the ColorLib preview
  portal, same pattern as Ironforge→Forgefit).

✅ **Pointer status — live reference re-probed 2026-10-13d (bot wall
lifted):** the demo is served by the ColorLib preview host —
`https://preview.colorlib.com/theme/logitrans/` answers **HTTP 200**,
102,656 B `text/html; charset=utf-8` (93,647 B, sha256 `0d7e59613924…` after
stripping the injected print-media `@font-face` block and the Insights
beacon); its stylesheet
`https://preview.colorlib.com/theme/logitrans/_astro/index.ika66l9V.css` is
47,444 B sha256 `616fb20396dc…`; 28 of the 30 hex tokens recorded below are
present in it (Inter) and the remaining 2 are absent from both the live
sheet and the live page — re-check the token table before reusing them. The
Cloudflare Pages mirror `https://logitrans-colorlib.pages.dev` is still
**NXDOMAIN** (re-checked 2026-10-13d). ⚠️ `apps/freightly` was built from
the mirror's tokens before the migration, so it follows the mirror, not
today's preview host.
- **Visual design (screenshot `logitrans-template-1770211309698.jpg`):**
  logistics landing — dark navy-blue hero (blue gradient + faint grid
  pattern) with a shipment-tracking widget, blue (#3b82f6) primary CTAs,
  amber (#f59e0b) accent badges, light gray sections below, Inter
  typography, pill buttons.
- **Structure (1:1, section order):**
  1. Navbar: "SwiftCargo" logo, Services, Why Us, Calculator,
     Testimonials, Contact, phone 1-800-SWIFT-GO, "Get a Quote" pill CTA;
     sticky header → white/95 blur + shadow on scroll.
  2. Hero (dark blue gradient + grid): H1 "Ship Anywhere, Anytime",
     subtext, "Explore Services" button, tracking widget (input + "Track
     Package" button, status "In Transit — Est. delivery: Tomorrow, 2:00
     PM"), trust badges (Free tracking, Insured shipments, 24/7 support).
  3. Services: "Complete Logistics Solutions" — 6 cards (icon + blurb +
     bullets + "Get Quote"): Air Freight, Ocean Freight, Ground Transport,
     Warehousing, Customs Brokerage, Express Delivery.
  4. Why Us: "Shipping Made Simple" — 4 cards: On-Time Delivery (98.5%),
     Global Network (150+ countries), Cargo Insurance, 24/7 Support;
     stats row (Active Routes 2,847 / Deliveries Today 3,247).
  5. Calculator: "Calculate Your Shipping Cost" — destination select, 4
     options (Economy 7–10 days, Standard 3–5 days "Most Popular", Express
     1–2 days, Same Day), "Calculate Shipping Cost" button, "Estimated
     Total" readout.
  6. Testimonials: "Trusted by Industry Leaders" — 3 quotes: Michael Chen
     (VP of Operations, TechFlow Inc.), Sarah Martinez, David Okonkwo
     (CEO, AfriTrade Exports); certifications row (ISO 9001 Certified,
     IATA Member, C-TPAT, WCA Member).
  7. CTA: "Ready to Ship?" — "Get started with SwiftCargo" + bullets (Call
     1-800-SWIFT-GO, Free tracking, No hidden fees, Cancel anytime).
  8. Contact: "Let's Discuss Your Shipping Needs" — 4 cards (Phone, Email,
     Headquarters: 1250 Logistics Way, Suite 500, Chicago, IL 60601,
     Business Hours: Monday–Friday) + "Send us a message" form + "Send
     Message" button.
  9. Footer: brand + blurb + socials, columns Services (6 links) / Quick
     Links (Get a Quote, Track Shipment, Why Choose Us, Testimonials,
     Contact Us) / Contact (phone, email, address), "© 2026 SwiftCargo.
     All rights reserved." + Privacy Policy + Terms of Service.

## Design tokens (from index@_@astro.CUkGMIAf.css)

- Brand: `#3b82f6` (blue-500), scale `#2563eb` `#60a5fa` `#93c5fd`
  `#bfdbfe` `#dbeafe` `#eff6ff` `#1e40af` `#1e3a8a` `#172554`
- Accent: `#f59e0b` (amber-500), scale `#fbbf24` `#fde68a` `#fffbeb`
  `#b45309` `#d97706` `#92400e` `#78350f`
- Status green: `#00c758` (In Transit chip)
- Neutrals: `#f9fafb` `#f3f4f6` `#e5e7eb` `#d1d5db` `#9ca3af` `#6b7280`
  `#4b5563` `#374151` `#1f2937` `#111827` `#030712` `#fff`
- Fonts: Inter (400–800), Google Fonts
- Buttons: pill (rounded-full), blue primary / white; hover shadow
  primary-500/10 + border-primary-200 on cards
- Sections: dark hero `from-primary-900/90 via-primary-950 to-gray-950`
  gradient + 64px grid (white 3% lines); white/gray-50 light sections;
  dark footer; scroll-reveal fadeInUp on `[data-animate]`

## Tasks (implementer order)

- [ ] Copy simplest existing app (e.g. apps/stratos) → `apps/freightly`,
      rename package to `@free-react-templates/freightly` (register in
      workspace + lockfile)
- [ ] `@theme` tokens: freightly blue scale + amber + green + gray
      neutrals + Inter
- [ ] `index.html`: title "Freightly — Logistics Template", Google Fonts
      link (Inter)
- [ ] Navbar (site name, anchor links, phone, Get a Quote, dark-mode
      toggle, sticky scroll style)
- [ ] Hero (dark gradient + grid bg, H1, Explore Services, tracking widget
      with input + button + status chip, trust badges)
- [ ] Services (6 cards with icon + bullets + Get Quote)
- [ ] Why Us (4 cards + stats row: 2,847 Active Routes / 3,247 Deliveries
      Today)
- [ ] Calculator (destination select, 4 shipping options, calculate button,
      estimated total)
- [ ] Testimonials (3 quotes + certifications row)
- [ ] CTA (Ready to Ship? + bullets)
- [ ] Contact (4 info cards + message form)
- [ ] Footer (3 columns + copyright + legal links)
- [ ] Tests first (red) per spec scenarios → implement (green) → 100%
      coverage
- [ ] `scripts/verify-app.sh freightly` green; open PR, squash-merge
      immediately
- [ ] TEMPLATES.md: mark Logitrans line(s) `[x]` + surge URL; README status
      regen (`npm run readme:status`)

## Fidelity notes

- Match section order 1:1; paraphrase copy but keep content kinds (headline
  - subtext + CTAs + tracking widget + trust badges, card title + blurb +
    bullets, calculator options + estimated total, testimonial + name + role,
    footer columns).
- Never copy assets: seeded picsum `freightly-<n>` placeholders, lucide-react
  icons, Google Fonts only.
- The demo copy is real (SwiftCargo, 1-800-SWIFT-GO, Chicago address) —
  rename the brand to Freightly but keep the same content kinds.
- Stale prep `openspec/specs/template-logitrans/` + `docs/templates/logitrans/`
  were deleted 2026-08-08 (forbidden source name) — do NOT recreate them.

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/freightly/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/freightly/public/CNAME` = `freightly.free.componentdock.com`
  and the package `homepage` = `https://freightly.free.componentdock.com`.
