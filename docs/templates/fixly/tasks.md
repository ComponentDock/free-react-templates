# Fixly (ColorLib Carepair) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Cloud PR (#7) awaits review.
> Implementation ships later on `feat/template-fixly`.

## Design notes (replication findings)

- **Original:** ColorLib "Carepair" — auto repair shop website template
  (source: https://colorlib.com/wp/template/carepair/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/carepair/ (HTTP
  200, full rendered DOM + `css/style.css` (84KB, minified) extracted; this
  non-Astro template is served directly by the preview portal — NOT in
  `preview.colorlib.com/assets/js/products.js`).
- **Visual design (from DOM + CSS tokens):** auto-repair-shop landing —
  **red** brand color (`#e02f33`) with **navy blue** (`#1a508b`) accents,
  "Roboto" typography, flat icon cards, image-backed
  hero/appointment/stats/footer sections.
- **Structure (1:1, section order):**
  1. Top bar (hours, Call Us +2 392 3929 210, Location) + header:
     "Fixly Auto Repair Shop" + Home, About, Services, Gallery, Blog,
     Contact + "Make An Appointment".
  2. Hero (image bg): "Looking for the Right Vehicle Repair Service?" +
     "Make An Appointment" / "See Services"; slide 2 "Best Auto Repair
     Shop and Maintenance Services".
  3. Intro: Contact Details card + "Make An Appointment" / "Maintenance
     Services" / "More Services".
  4. Why Choose Us: 4 cards (Expert Mechanics, Convenient Place, Modern
     Equipments, Fast Service Delivery).
  5. Appointment band (image bg): "Schedule Your Appointment Today!".
  6. Services: 12 items (General Auto Repair, Brake Repair, A/C Repair,
     Tire Repair, Fuel System, Exhaust System, Engine Cooling, Electrical
     Diagnostics, Oil Change, Tune Up, Wheel Alignment, Computer
     Diagnostic).
  7. Steps (bg-light): "Get Car Repair In Easy Steps" — Get A Free Quote /
     Book Car Inspection / Get Your Car Fixed.
  8. Stats (image bg): "Technical Statistics" — 20/3200/98/100.
  9. Mechanics: "Expert Mechanics" — Jason Smith, Jeffrey Rockenson.
  10. Testimonials: "Happy Customers" (Roger Scott).
  11. Blog: "Recent From Blog" — 3 posts (Tips on How to Maintain Your
      Brand New Car).
  12. Footer (image bg): "Fixly Auto Repair Shop" + Services + Recent
      Posts + "Have a Questions?" + copyright.
- **Design tokens extracted from the DOM + CSS:**
  - Brand colors: **red** #e02f33 + **navy** #1a508b + dark #212529;
    white/light sections.
  - Fonts: **"Roboto"** (Roboto, Arial, sans-serif) via Google Fonts.
  - Shapes: flat icon cards, filled rounded buttons; image-backed sections
    (→ seeded picsum placeholders).
- **Recreation name:** Fixly ("fix" + the `-ly` family: Motorly, Roadly,
  Torquely, Rently — the ColorLib source name "Carepair" is never reused).
  App folder `apps/fixly`, package `@free-react-templates/fixly`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/fixly-<n>/<w>/<h>`); lucide-react icons (Wrench,
  MapPin, Clock, Phone, Mail, Cog, Car, Users, Zap, CalendarCheck, Star,
  ChevronRight, Quote, Droplet, Gauge, Thermometer, Cpu, Battery); Roboto
  via Google Fonts; repo-standard Navbar (dark-mode toggle) + Footer chrome.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Tasks

- [x] Write `openspec/specs/template-fixly/spec.md` (Gherkin
      requirements + scenarios reflecting the REAL sections above).
- [x] Validate spec: `npm run spec:validate`.
- [x] Create `apps/fixly` (copy the section-rich landing app pattern —
      torquely; rename package to `@free-react-templates/fixly`).
- [x] TDD: tests first for each section component; run red.
- [x] Implement components (green) at 100% coverage.
- [x] Per-app gate: typecheck → lint → test:coverage (100%) → build →
      spec:validate (scripts/verify-app.sh fixly).
- [x] Push `feat/template-fixly`, open PR (source template, preview URL,
      design tokens, what differs).
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main, state D).
