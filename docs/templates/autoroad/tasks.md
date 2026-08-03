# Autoroad (Colorlib Autoroad) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Cloud PR (#7) awaits review.
> Implementation ships later on `feat/template-autoroad`.

## Design notes (replication findings)

- **Original:** ColorLib "Autoroad" — car rental website template
  (source: https://colorlib.com/wp/template/autoroad/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/autoroad/ (HTTP
  200, full rendered DOM + `css/style.css` (79KB, minified) extracted; this
  non-Astro template is served directly by the preview portal — NOT in
  `preview.colorlib.com/assets/js/products.js`).
- **Visual design (from DOM + CSS tokens):** classic car-rental landing —
  **orange** brand color (`#fc983c`) with **yellow** (`#f7b71d`) accents,
  "Poppins" typography, flat icon service cards, image-backed
  hero/how-it-works sections.
- **Structure (1:1, section order):**
  1. Navbar (dark): "Autoroad" logo + Home, About, Pricing, Our Car, Blog,
     Contact.
  2. Hero (image bg): "Now It's easy for you rent a car" + "Make your
     trip".
  3. Services: "Our Services" — 4 cards (24/7 Car Support, Lots of
     location, Reservation, Rental Cars).
  4. Cars: "Choose Your Car" — Mercedes Grand Sedan cards + "From .../Day"
     - "Book now" / "Details".
  5. How it works (image bg): 4 steps (Pick Destination, Select Term,
     Choose A Car, Enjoy The Ride).
  6. Testimonials: "Happy Clients" (Roger Scott).
  7. Search: "Choose A Perfect Car" + "Search Vehicle".
  8. Blog: "Recent Blog" — 3 posts (Why Lead Generation is Key for
     Business Growth).
  9. Footer (dark): "About Autoroad" + Information / Customer Support /
     "Have a Questions?" + copyright.
- **Design tokens extracted from the DOM + CSS:**
  - Brand colors: **orange** #fc983c + **yellow** #f7b71d + dark #212529;
    white sections.
  - Fonts: **"Poppins"** (Poppins, Arial, sans-serif) via Google Fonts.
  - Shapes: flat icon cards, filled rounded buttons; image-backed sections
    (→ seeded picsum placeholders).
- **Recreation name:** Autoroad (kept — matches ColorLib name). App folder
  `apps/autoroad`, package `@free-react-templates/autoroad`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/autoroad-<n>/<w>/<h>`); lucide-react icons
  (Headphones, MapPin, CalendarCheck, Car, Map, ClipboardList, KeyRound,
  Star, Phone, Mail, Clock, ChevronRight, Search, Quote, Fuel, Gauge);
  Poppins via Google Fonts; repo-standard Navbar (dark-mode toggle) + Footer
  chrome.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Tasks

- [x] Write `openspec/specs/template-autoroad/spec.md` (Gherkin requirements + scenarios reflecting the REAL sections above).
- [ ] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/autoroad` (copy the section-rich landing app pattern —
      Aurora; rename package to `@free-react-templates/autoroad`).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Push `feat/template-autoroad`, open PR (source template, preview URL,
      design tokens, what differs).
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main, state D).
