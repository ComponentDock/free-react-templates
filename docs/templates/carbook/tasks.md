# Carbook (Colorlib Carbook) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Cloud PR (#7) awaits review.
> Implementation ships later on `feat/template-carbook`.

## Design notes (replication findings)

- **Original:** ColorLib "Carbook" — car rental website template
  (source: https://colorlib.com/wp/template/carbook/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/carbook/ (HTTP
  200, full rendered DOM + `css/style.css` (268KB, minified) extracted;
  this non-Astro template is served directly by the preview portal — NOT in
  `preview.colorlib.com/assets/js/products.js`).
- **Visual design (from DOM + CSS tokens):** modern car-rental landing —
  **blue** brand color (`#1089ff`) with **green** (`#01d28e`) accents,
  "Poppins" typography, flat icon cards, image-backed hero section.
- **Structure (1:1, section order):**
  1. Navbar (dark): "CarBook" logo + Home, About, Services, Pricing, Cars,
     Blog, Contact.
  2. Hero (image bg): "Fast & Easy Way To Rent A Car".
  3. Booking steps (bg-light): 4 steps (Better Way to Rent, Choose Your
     Pickup Location, Select the Best Deal, Reserve Your Rental Car) +
     "Reserve Your Perfect Car".
  4. Featured vehicles: Mercedes Grand Sedan cards ($500/day) + "Book now"
     / "Details".
  5. About: "Welcome to Carbook" + "Search Vehicle".
  6. Services: "Our Latest Services" — 4 cards (Wedding Ceremony, City
     Transfer, Airport Transfer, Whole City Tour).
  7. Earn band: "Do You Want To Earn With Us? So Don't Be Late." +
     "Become A Driver".
  8. Testimonials: "Happy Clients" (Roger Scott).
  9. Blog: "Recent Blog" — 3 posts + "Read more".
  10. Footer (dark): "Carbook" + Information / Customer Support / "Have a
      Questions?" + copyright.
- **Design tokens extracted from the DOM + CSS:**
  - Brand colors: **blue** #1089ff + **green** #01d28e + dark #212529;
    white/light (#f8f9fa) sections.
  - Fonts: **"Poppins"** (Poppins, Arial, sans-serif) via Google Fonts.
  - Shapes: flat icon cards, filled rounded buttons; image-backed hero (→
    seeded picsum placeholders).
- **Recreation name:** Carbook (kept — matches ColorLib name). App folder
  `apps/carbook`, package `@free-react-templates/carbook`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/carbook-<n>/<w>/<h>`); lucide-react icons (Car,
  MapPin, BadgeDollarSign, CalendarCheck, KeyRound, Heart, Star, Phone,
  Mail, Clock, ChevronRight, Search, Quote, Gift, Plane, Building2, Map);
  Poppins via Google Fonts; repo-standard Navbar (dark-mode toggle) + Footer
  chrome.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Tasks

- [x] Write `openspec/specs/template-carbook/spec.md` (Gherkin requirements + scenarios reflecting the REAL sections above).
- [ ] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/carbook` (copy the section-rich landing app pattern —
      Aurora; rename package to `@free-react-templates/carbook`).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Push `feat/template-carbook`, open PR (source template, preview URL,
      design tokens, what differs).
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main, state D).
