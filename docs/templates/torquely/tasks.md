# Torquely (ColorLib Autorepair) — Tasks & Design Notes

> Recreation of https://colorlib.com/wp/template/autorepair/ under the new
> name **Torquely** (brand: **Torquely Auto Repair**). Full spec:
> `openspec/specs/template-torquely/spec.md`.

## Design notes (replication findings, 2026-08-09)

- **Original:** ColorLib "Autorepair" — car repair services website template
  (source: https://colorlib.com/wp/template/autorepair/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/autorepair/
  (HTTP 200, full rendered DOM + `css/style.css` (86KB, minified)
  extracted; this non-Astro template is served directly by the preview
  portal — NOT in `preview.colorlib.com/assets/js/products.js`).
- **Visual design (screenshot + DOM + CSS tokens):** classic car-repair
  landing — **orange** brand color (`#f79f24`) for CTAs/active nav with
  **blue** (`#064acb`) accents (intro strip, service icons), dark
  (`#212529`) top bar + headings, "Poppins" typography, flat icon service
  cards, image-backed hero/counter/appointment sections.
- **Structure (1:1, section order):**
  1. Header: dark top bar (logo "Torquely.", address "721 New York NY
     10016", call us "(+01) 123 456 7890", socials Facebook/Twitter/
     Instagram/Dribbble) + white nav (logo + menu Home/About/Services/
     Project/Blog/Contact).
  2. Hero (image bg, 2-slide carousel): "We are best car repair services" +
     "Make your car last longer" | "We care about your car" + "It's time to
     come to repair your car"; orange "Book an appointment" button.
  3. Intro strip (blue band): wrench icon + "Are you ready? Let's repair it
     now!" + white "Book an Appointment".
  4. Services: "We offer Services / Our car services" — 6 icon cards (Oil
     change, Tire Change, Batteries, Engine Repair, Tow Truck, Car
     Maintenance) + "Read more".
  5. About (bg-light): "Welcome to Torquely / We help more than 45 years
     serving customer car" + paragraph + Our Mission / Our Vision / Our
     Value + image.
  6. Counter band (image bg): 45 Years of Experienced / 8500 Project
     completed / 2342 Happy Customers / 30 Award Winning.
  7. Appointment (image bg): "Booking an Appointment / Free Consultation" +
     form (select service, name, vehicle number, date, time, message, "Send
     message").
  8. Testimonials (bg-light): "Testimonies / Happy Clients & Feedbacks" —
     carousel, quote + "Roger Scott" / "Marketing Manager", 3 avatar
     slides.
  9. Blog: "News & Blog / Latest news from our blog" — 3 posts (Posted by
     John doe · 24 February 2020 · "Best wheel alignment & air
     conditioning").
  10. Pricing (bg-light): "Price & Plans / Pricing" — 4 plans (First PMS
      $78.98, Engine Diagnostics $83.75, Tow Truck $85.00, Car Wash
      $30.50) + "Get Started".
  11. Projects: "Done Projects" — 4 image cards (Engine Testing Complated,
      Change Oil Completed, Engine Diagnostics, Tire Change).
  12. Footer: "Torquely." + blurb; Services links; Contact information (203
      Fake St. Mountain View, San Francisco, California, USA, +2 392 3929
      210, info@yourdomain.com); Business Hours (Opening Days: Monday –
      Friday 9am to 20pm, Saturday 9am to 17pm; Vacations: All Sunday Days,
      All Official Holidays) + copyright.
- **Design tokens extracted from the DOM + CSS:**
  - Brand colors: **orange** #f79f24 (primary) + **blue** #064acb
    (secondary) + dark #212529/#343a40; white/light (#f8f9fa) alternating
    sections.
  - Font: **"Poppins"** (Poppins, Arial, sans-serif) via Google Fonts.
  - Shapes: flat icon cards (blue circular icon + text), filled rounded
    buttons (orange primary / dark secondary), `.subheading` blue kickers,
    image-backed sections (→ seeded picsum placeholders).
- **Recreation name:** Torquely (torque + "-ly" family: Motorly, Nestly,
  Drivly, Wingly). App folder `apps/torquely`, package
  `@free-react-templates/torquely`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/torquely-<n>/<w>/<h>`); lucide-react icons (MapPin,
  Phone, Menu, X, Wrench, Droplet, Disc, BatteryCharging, Cog, Truck,
  Quote, CalendarCheck, Send, ChevronRight, Clock, Mail); brand icons →
  inline SVG (BrandIcon: facebook, x, instagram, dribbble); Poppins via
  Google Fonts; repo-standard Navbar (dark-mode toggle) + Footer chrome;
  dependency-free carousel (index + dots) for hero/testimonials.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Tasks

- [x] Replication research: preview DOM + CSS tokens + screenshot.
- [x] Write `openspec/specs/template-torquely/spec.md` (Gherkin
      requirements + scenarios reflecting the REAL sections above).
- [ ] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/torquely` (copy the motorly pattern — closest car theme;
      rename package to `@free-react-templates/torquely`).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Per-app gate: `bash scripts/verify-app.sh torquely` (typecheck → lint
      → 100% coverage tests → build) + `npm run spec:validate`.
- [ ] Push `feat/template-torquely`, open PR (source template, preview URL,
      design tokens, what differs).
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main, state D).
