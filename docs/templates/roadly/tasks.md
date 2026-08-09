# Roadly (Colorlib Autoroad) — Tasks & Design Notes

> Recreation of ColorLib "Autoroad"
> (https://colorlib.com/wp/template/autoroad/) under the NEW name **Roadly**
> (per the naming rule: never reuse the source name). Implementation ships on
> `feat/template-roadly`.

## Design notes (replication findings)

- **Original:** ColorLib "Autoroad" — car rental website template
  (source: https://colorlib.com/wp/template/autoroad/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/autoroad/ (HTTP
  200, full rendered DOM + `css/style.css` (79KB, minified) extracted; this
  non-Astro template is served directly by the preview portal — NOT in
  `preview.colorlib.com/assets/js/products.js`).
- **Visual design (from DOM + CSS tokens + screenshot):** classic car-rental
  landing — **orange** brand color (`#fc983c`) with **yellow** (`#f7b71d`)
  accents, "Poppins" typography, flat icon service cards, image-backed
  hero/how-it-works sections, dark navbar + dark footer (`#212529`).
- **Structure (1:1, section order):**
  1. Navbar (dark): "Roadly" logo + Home, About, Pricing, Our Car, Blog,
     Contact.
  2. Hero (image bg): "Now It's easy for you rent a car" + play button
     "Easy steps for renting a car" + "Make your trip" booking card
     (Pick-up/Drop-off location, dates, time) + "Search Vehicle".
  3. Search strip: "Choose A Perfect Car" + Select Model / Select Brand /
     Year Model / Price Limit + "Search".
  4. Services: "Our Services" — 4 cards (24/7 Car Support, Lots of
     location, Reservation, Rental Cars).
  5. Cars: "Choose Your Car" — 8 × "Mercedes Grand Sedan" cards, "$25
     /Day", "Book now" / "Details".
  6. How it works (image bg): "Work flow" — Pick Destination, Select Term,
     Choose A Car, Enjoy The Ride.
  7. Testimonials: "Testimonial" — "Happy Clients" (4 × Roger Scott).
  8. Search CTA: "About us" — "Choose A Perfect Car" + "Search Vehicle".
  9. Blog: "Recent Blog" — 3 posts ("Why Lead Generation is Key for
     Business Growth", "July. 24, 2019").
  10. Footer (dark): "About Roadly" + Information / Customer Support /
      "Have a Questions?" + copyright.
- **Design tokens extracted from the DOM + CSS:**
  - Brand colors: **orange** #fc983c + **yellow** #f7b71d + dark #212529;
    white sections.
  - Fonts: **"Poppins"** (Poppins, Arial, sans-serif) via Google Fonts.
  - Shapes: flat icon cards, filled rounded buttons; image-backed sections
    (→ seeded picsum placeholders).
- **Recreation name:** **Roadly** (NEW name — the ColorLib source name
  "Autoroad" is never reused). App folder `apps/roadly`, package
  `@free-react-templates/roadly`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/roadly-<n>/<w>/<h>`); lucide-react icons
  (Headphones, MapPin, CalendarCheck, Car, Map, ClipboardList, KeyRound,
  Star, Phone, Mail, Play, Search, Quote, Fuel, Gauge); Poppins via Google
  Fonts; repo-standard Navbar (dark-mode toggle + mobile menu) + Footer
  chrome.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Tasks

- [x] Write `openspec/specs/template-roadly/spec.md` (Gherkin requirements + scenarios reflecting the REAL sections above).
- [x] Validate spec: `npm run spec:validate`.
- [x] Scaffold `apps/roadly` (copy the section-rich landing app pattern —
      Torquely/Aurora; rename package to `@free-react-templates/roadly`).
- [x] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Per-app gate: `bash scripts/verify-app.sh roadly` (typecheck → lint →
      vitest 100% coverage → build) + spec:validate.
- [ ] Push `feat/template-roadly`, open PR (source template, preview URL,
      design tokens, what differs), merge immediately.
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main, state D) + `npm run readme:status`.
