# Motorly (ColorLib Automotive) — Tasks & Design Notes

> Recreation of https://colorlib.com/wp/template/automotive/ under the new
> name **Motorly** (brand: **Motorly Garage**). Full spec:
> `openspec/specs/template-motorly/spec.md`.

## Design notes (replication findings, 2026-08-09)

- **Original:** ColorLib "Automotive" — auto garage / car service website
  template (source: https://colorlib.com/wp/template/automotive/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/automotive/
  (HTTP 200, full rendered DOM + `css/style.css` (42.6KB, minified)
  extracted; this non-Astro template is served directly by the preview
  portal — NOT in `preview.colorlib.com/assets/js/products.js`).
- **Visual design (screenshot + DOM + CSS tokens):** classic auto-garage
  landing — **indigo** brand color (`#5F67FF`) for buttons/accents,
  dark-gray (`#353535`) headings, "Public Sans" typography, flat icon-bubble
  service cards, image-backed hero/counter/footer sections.
- **Structure (1:1, section order):**
  1. Header: dark top bar (phone (+123) 4567-7890-123, hours
     "Mon-Sat: 10:00 - 16:00 / Sunday Close", "Find us on map") + white nav
     ("Motorly" logo, menu: Home/Services/Shop/Pages/About/News/Contact).
  2. Hero (image bg): "Welcome To Motorly Garage" + blurb + "Our Services".
  3. Services: "What We Do?" — 4 cards (Engine Overhaul, Power Steering,
     Oil change, Upgrades Car).
  4. Choose us: "We Have 20 Years Of Experience In Auto Car" + "About Us" +
     image.
  5. Products: "Our Products" — 4 cards (High Flow Fuel, Revolution Wheels,
     Tone Interior Kit, Matte Gunmetal, $800.00) + "+Add To Cart".
  6. Counter band (image bg): "About Our Statistics" — 560 All Project /
     Project Completed / Customers Action / Awards Winner.
  7. Latest news: "Latest News" — 3 posts (Benjamin Franlin Method, By
     Brian Gardner on April 1, 2017) + "Continue Reading".
  8. Footer (image bg): "Booking Repair" appointment form; "Contact Us
     Now!" 123-4567-7890; Location + Contact Us; Quick Link / News / My
     Office + copyright.
- **Design tokens extracted from the DOM + CSS:**
  - Brand colors: **indigo #5F67FF** (primary) + #353535/#323232 headings +
    #727171 body; white section backgrounds, #f7f7f7 alt.
  - Fonts: **"Public Sans"** (Public Sans, sans-serif) via Google Fonts.
  - Shapes: `.site-btn` = 15px bold white on #5F67FF, padding 14px 30px,
    radius 2px; centered `.section-title`; hero h2 60px white bold.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/motorly-<n>/<w>/<h>`); icons → lucide-react (Wrench,
  Settings, Droplet, Gauge, ShoppingCart, Phone, Mail, MapPin, Clock,
  CalendarCheck, ChevronRight, Newspaper, Car, Search, User); inline SVG
  brand icons; repo-standard Navbar (dark-mode toggle) + Footer chrome.

## Tasks

- [ ] Scaffold `apps/motorly` (copy simplest app; rename package to
      `@free-react-templates/motorly`; keep `injectUiSource()` in vite.config.ts;
      `npm install` at root so package-lock.json registers the workspace)
- [ ] Theme tokens in `src/index.css` (brand #5F67FF, ink #353535, mist
      #727171, paper #f7f7f7, Public Sans)
- [ ] `Navbar` — top bar (phone/hours/find-us-on-map) + white nav + dark
      toggle + mobile menu
- [ ] `Hero` — image bg, "Welcome To Motorly Garage", "Our Services" button
- [ ] `Services` — "What We Do?" + 4 icon-bubble cards
- [ ] `ChooseUs` — 20 years experience + "About Us" + image
- [ ] `Products` — 4 product cards + "+Add To Cart"
- [ ] `Stats` — "About Our Statistics" + 4 counters
- [ ] `News` — 3 post cards + "Continue Reading"
- [ ] `Footer` — "Booking Repair" appointment form + contact + link columns
- [ ] Tests first (TDD), 100% coverage, `bash scripts/verify-app.sh motorly`
- [ ] PR + immediate merge; bookkeeping (TEMPLATES.md `[x]`, surge URL,
      homepage, readme:status)
