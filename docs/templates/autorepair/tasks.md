# Autorepair (Colorlib Autorepair) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Cloud PR (#7) awaits review.
> Implementation ships later on `feat/template-autorepair`.

## Design notes (replication findings)

- **Original:** ColorLib "Autorepair" — car repair services website template
  (source: https://colorlib.com/wp/template/autorepair/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/autorepair/
  (HTTP 200, full rendered DOM + `css/style.css` (86KB, minified)
  extracted; this non-Astro template is served directly by the preview
  portal — NOT in `preview.colorlib.com/assets/js/products.js`).
- **Visual design (from DOM + CSS tokens):** classic car-repair landing —
  **orange** brand color (`#f79f24`) with **blue** (`#064acb`) accents,
  "Poppins" typography, flat icon service cards, image-backed
  hero/consultation sections.
- **Structure (1:1, section order):**
  1. Header: "Autorepair." logo + nav (Home, About, Services, Project,
     Blog, Contact) + social icons.
  2. Hero (image bg): "We are best car repair services" + h1 "Make your
     car last longer" + "Book an appointment".
  3. Intro strip: "It's time to come to repair your car" + "Book an
     Appointment".
  4. Services: "Our car services" — 6 cards (Oil change, Tire Change,
     Batteries, Engine Repair, Tow Truck, Car Maintenance) + "Read more".
  5. About: "We help more than 45 years serving customer car" — Mission /
     Vision / Value.
  6. Free consultation band (image bg).
  7. Testimonials: "Happy Clients & Feedbacks" (Roger Scott).
  8. Blog: "Latest news from our blog" — 3 posts.
  9. Pricing: plans + "Get Started".
  10. Projects: "Done Projects" — 4 cards (Engine Testing, Change Oil,
      Diagnostics, Tire Change).
  11. Footer: "Autorepair." + Services / Contact information (+2 392 3929
      210, info@yourdomain.com) / Business Hours + copyright.
- **Design tokens extracted from the DOM + CSS:**
  - Brand colors: **orange** #f79f24 + **blue** #064acb + dark #212529;
    white/light (#f8f9fa) sections.
  - Fonts: **"Poppins"** (Poppins, Arial, sans-serif) via Google Fonts.
  - Shapes: flat icon cards, filled rounded buttons; image-backed sections
    (→ seeded picsum placeholders).
- **Recreation name:** Autorepair (kept — matches ColorLib name). App folder
  `apps/autorepair`, package `@free-react-templates/autorepair`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/autorepair-<n>/<w>/<h>`); lucide-react icons
  (Droplet, CircleDot, BatteryCharging, Cog, Truck, Wrench, Phone, Mail,
  Clock, CalendarCheck, Star, ChevronRight, Quote, MapPin, Facebook,
  Twitter, Instagram); Poppins via Google Fonts; repo-standard Navbar
  (dark-mode toggle) + Footer chrome.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Tasks

- [x] Write `openspec/specs/template-autorepair/spec.md` (Gherkin
      requirements + scenarios reflecting the REAL sections above).
- [ ] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/autorepair` (copy the section-rich landing app pattern —
      Aurora; rename package to `@free-react-templates/autorepair`).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Push `feat/template-autorepair`, open PR (source template, preview
      URL, design tokens, what differs).
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main, state D).
