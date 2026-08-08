# Helios (ColorLib Solarshift) — Tasks & Design Notes

> Recreation of ColorLib "Solarshift"
> (https://colorlib.com/wp/template/solarshift/) under the NEW name
> **Helios** (the Greek sun god), per the monorepo naming mandate (never
> reuse the ColorLib source name).

## Design notes (replication findings)

- **Original:** ColorLib "Solarshift" — solar energy company website
  template (Astro / Tailwind CSS category; "savings calculator, product
  showcases, ROI charts, and financing comparisons").
- **Demo DOM analyzed:** `https://solarshift-colorlib.pages.dev/` (HTTP
  200, ~85 KB HTML + `/_astro/Base.DGIjEtFT.css` ~59 KB parsed for
  tokens; the official `https://preview.colorlib.com/theme/solarshift/`
  returns 404 — demo hosted on Cloudflare Pages, same pattern as
  Saasify→Zenith / Serenite→Sooth / Shieldnet→Aegis).
- **Visual design (screenshot `solarshift-template.jpg`, 2400×1892):**
  light, flat, minimal corporate solar landing — white body with a very
  subtle light-green gradient wash behind the split hero (left copy /
  right calculator card), vibrant fresh green (#16a34a-ish) for the logo
  mark, primary CTAs ("Get Free Quote", "Get Free Assessment"), headline
  accent and key text highlights; dark grey/black headings; Manrope
  typography; rounded corners on cards/buttons; stats row (10K+ / $50M+ /
  98% / 50); services grid below. No photos in the hero — icon-based flat
  style. (Screenshot hero copy is an older variant — "Power Your Home
  With Savings", micro-stats "25,000+ Team Jobs" / "8,500+ Solar Panels",
  nav About/Products/Services/Pricing/Blog/Contact — the live demo DOM is
  authoritative for structure and current copy.)
- **Structure (1:1, section order):**
  1. Navbar: "SolarShift" logo (sun icon + wordmark), links About,
     Products, Services (dropdown: Residential Solar, Commercial Solar,
     Battery Storage), Pricing, Blog, Contact; "Get Free Quote" green
     button; mobile hamburger.
  2. Hero (light, green-tinted gradient + floating blurred blobs): pill
     badge "Go Solar Today" (leaf icon), H1 "Power Your Home With Clean
     Energy" (accent word in green), subtext, buttons "Get Free Quote" +
     phone link "Call (555) 123-4567", social proof "Join 10,000+
     homeowners who switched to solar". Right: **savings calculator
     card** — "Estimate Your Savings" / "See how much you could save
     with solar"; state dropdown; monthly-bill slider ($50–$500, step
     10, default $150); 4 result boxes (Annual Savings, CO2 Offset,
     Payback Period, Total Cost); wide green "Get Free Assessment".
  3. Stats bar (gray-50): 10K+ Installations · $50M+ Saved for Customers
     · 98% Customer Satisfaction · 50 States Served.
  4. Services: badge "Services", H2 "Complete Solar Solutions" — 6 cards
     (icon tile `h-12 w-12 rounded-xl bg-primary-100 text-primary-600` +
     title + blurb): Residential Solar, Commercial Solar, Battery
     Storage, Solar Maintenance, Energy Audit, Roof Assessment.
  5. Products: badge "Products", H2 "Premium Solar Equipment" — 3 cards
     (image `aspect-[3/2]` with solar-shine overlay, title, blurb, 3
     mini-spec cells): SunPower Maxeon 6, LG NeON H+, Canadian Solar
     HiKu7.
  6. Impact: badge "Impact", H2 "Our Environmental Impact" on solid
     `bg-primary-600` — 4 white counters with `bg-white/10` icon tiles
     (Tons CO2 Offset, Trees Equivalent, kWh Generated, Homes Powered).
  7. Financing: badge "Financing", H2 "Flexible Payment Options" — 3
     cards with corner badge (Best Value / Most Popular / Zero Risk),
     blurb, 4 check bullets, "Learn More": Cash Purchase, Solar Lease,
     Power Purchase Agreement.
  8. Process: badge "Process", H2 "How It Works" — 4 steps, numbered
     green circles (`rounded-full bg-primary-600 text-white`) connected
     by a horizontal line: Free Consultation, Design & Permits,
     Professional Installation, Activation & Monitoring.
  9. Testimonials: badge "Testimonials", H2 "What Our Customers Say" —
     carousel, 6 quote cards (5 green stars + quote + name + role, e.g.
     "Homeowner in Austin", "Business Owner"), dot indicators +
     prev/next.
  10. CTA (solid primary-600): H2 "Ready to Go Solar?" + subtext +
      white "Get Free Quote" button + phone link.
  11. FAQ: badge "FAQ", H2 "Frequently Asked Questions" — 5 accordion
      items (cost, install time, cloudy days, outages, maintenance).
  12. Quote form: badge "Contact", H2 "Get Your Free Quote" — labeled
      Name / Email / Service select / Message + "Submit Request"; right
      sidebar card (Office Hours, contact info).
  13. Footer (gray-900): brand + blurb + socials, columns Solutions
      (Residential Solar, Commercial Solar, Battery Storage, EV
      Charging, Savings Calculator, Incentives & Rebates) / Resources
      (Blog, FAQ) / Company (About, Products, Pricing, Contact) /
      Contact Us (890 Solar Way, Austin, TX 78701 · (555) 763-2748 ·
      hello@solarshift.com); "© 2026 SolarShift. All rights reserved."
      - Privacy Policy / Terms of Service.
  - Extras: cookie-consent bar (Decline / Accept All), scroll-reveal,
    dark mode (class-based `.dark`), mobile sticky bottom bar.

## Design tokens (from `Base.DGIjEtFT.css` + DOM)

| Token        | Value(s)                                                                                                                             |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| Primary      | #16a34a (green-600); scale 50 #f0fdf4, 100 #dcfce7, 200 #bbf7d0, 400 #4ade80, 500 #22c55e, 600 #16a34a, 700 #15803d                  |
| Accent       | #f59e0b (amber-500) — "Best Value" corner badges                                                                                     |
| Neutrals     | #fff, #f9fafb, #f3f4f6, #e5e7eb, #d1d5db, #9ca3af, #6b7280, #4b5563, #374151, #1f2937, #111827                                       |
| Dark bg/text | bg gray-900/950, cards gray-800, text gray-100/gray-400 (`.dark` class on root, localStorage "theme")                                |
| Light bg     | #fff, text #111827; hero green-tinted gradient (#f0fdf4-ish) + blurred blobs                                                         |
| Fonts        | Manrope (300–800) via Google Fonts; system-ui fallback                                                                               |
| Radii        | lg 0.5rem (buttons/inputs), xl 0.75rem (icon tiles), 2xl 1rem (cards), full (badge pills, step circles)                              |
| Buttons      | primary `bg-primary-600 text-white` hover primary-700, rounded, px-5/6 py-3; white button on green bands; phone = text link          |
| Icon tiles   | `h-12 w-12 rounded-xl bg-primary-100 text-primary-600`; on green bands `bg-white/10 text-white` (h-16 w-16 rounded-2xl for counters) |
| Stars        | `text-primary-500` filled stars (5 per testimonial)                                                                                  |
| Cards        | `rounded-2xl bg-white p-6/p-8 shadow-sm`, hover `shadow-lg`; dark: `bg-gray-800`                                                     |

## Implementation notes (for the implementer)

- Tailwind `@theme`: `--color-primary-*` = green scale; `--color-accent-*`
  = amber. Use `bg-primary-600`, `text-primary-600` etc. per conventions.
- Google Fonts `<link>` in `index.html`: Manrope (weights 300–800).
- Interactive pieces (each a small hook, no deps):
  - Savings calculator: `useState` for state dropdown + monthly-bill
    slider (`min=50 max=500 step=10 value=150`); compute the four
    estimates client-side (e.g. annual savings ≈ bill × 12 × factor,
    CO2 offset, payback period, total cost) so values change with the
    slider; "Get Free Assessment" button links to the quote form.
  - FAQ accordion: expand/collapse with `aria-expanded`, one open at a
    time (or independent — match demo behavior).
  - Testimonial carousel: track index, prev/next + dot indicators,
    auto-advance optional.
  - Mobile menu: hamburger with `aria-expanded`.
  - Dark-mode toggle: `.dark` on `document.documentElement`, persist to
    localStorage ("theme"), same pattern as other apps.
  - Scroll reveal: fade-in-up on `[data-animate]` elements.
  - Cookie bar: dismissible (Decline / Accept All) — optional, include
    if easy, matches demo.
- Product images: `picsum.photos/seed/helios-<n>/<w>/<h>` with
  `aspect-[3/2]`; testimonial avatars seeded too.
- Icons: lucide-react (sun logo mark, leaf badge, service tiles,
  checkmarks, stars via `Star` filled, socials, arrows).
- Copy: paraphrase the demo's text, keep the same _kind_ of content
  (badge + headline + subtext + CTAs; card title + blurb; tier name +
  4 bullets + link; FAQ Q/A pairs).
- Keep the repo-standard Navbar (with dark-mode toggle) + Footer chrome
  patterns used by other apps.

## TODO (prep stream does NOT implement)

- [ ] Implementer: copy simplest existing app → `apps/helios`
- [ ] Implementer: write tests (red) per spec scenarios, then
      implementation (green) — 100% coverage
- [ ] Implementer: `scripts/verify-app.sh helios` until green
- [ ] Implementer: mark `[~]` → `[x]` in TEMPLATES.md + surge URL,
      `npm run readme:status`, PR + immediate squash merge
