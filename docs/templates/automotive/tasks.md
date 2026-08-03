# Automotive (Colorlib Automotive) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Cloud PR (#7) awaits review.
> Implementation ships later on `feat/template-automotive`.

## Design notes (replication findings)

- **Original:** ColorLib "Automotive" — auto garage / car service website
  template (source: https://colorlib.com/wp/template/automotive/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/automotive/
  (HTTP 200, full rendered DOM + `css/style.css` (43KB, minified)
  extracted; this non-Astro template is served directly by the preview
  portal — NOT in `preview.colorlib.com/assets/js/products.js`).
- **Visual design (from DOM + CSS tokens):** classic auto-garage landing —
  **indigo** brand color (`#5F67FF`) for buttons/accents, dark-gray
  (`#353535`) headings, "Public Sans" typography, flat icon-bubble service
  cards, image-backed hero/counter/footer sections.
- **Structure (1:1, section order):**
  1. Header: "Auto-Motive" logo + nav (Home, Services, Shop, Pages, About
     Us, Services Details, Shop Details, Blog Details, Contact, Blog) +
     "Find us on map".
  2. Hero (image bg): "Welcome To Auto-Motive Garage" + blurb + "Our
     Services".
  3. Services: "What We Do?" — 4 cards (Engine Overhaul, Power Steering,
     Oil change, Upgrades Car).
  4. Choose us: "We Have 20 Years Of Experience In Auto Car" + "About Us".
  5. Products: "Our Products" — 4 cards (High Flow Fuel, Revolution Wheels,
     Tone Interior Kit, Matte Gunmetal) + "+Add To Cart".
  6. Counter band (image bg): "About Our Statistics" — 560 All Project /
     Project Completed / Customers Action / Awards Winner.
  7. Latest news: "Latest News" — 3 posts (Benjamin Franlin Method) +
     "Continue Reading".
  8. Footer (image bg): "Booking Repair" appointment form; "Contact Us
     Now!" 123-4567-7890; Location + Contact Us; Quick Link / News / My
     Office + copyright.
- **Design tokens extracted from the DOM + CSS:**
  - Brand colors: **indigo** #5F67FF (primary) + #353535/#323232 headings +
    #727171 body; white section backgrounds.
  - Fonts: **"Public Sans"** (Public Sans, sans-serif) via Google Fonts.
  - Shapes: flat icon-bubble cards, filled rounded buttons; image-backed
    hero/counter/footer (→ seeded picsum placeholders).
- **Recreation name:** Automotive (kept — matches ColorLib name; garage
  brand "Auto-Motive" per demo). App folder `apps/automotive`, package
  `@free-react-templates/automotive`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/automotive-<n>/<w>/<h>`); lucide-react icons
  (Wrench, Settings, Droplet, Gauge, Fuel, Cog, Gift, Star, Phone, Mail,
  MapPin, Clock, CalendarCheck, ShoppingCart, ChevronRight, Newspaper);
  Public Sans via Google Fonts; repo-standard Navbar (dark-mode toggle) +
  Footer chrome.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Tasks

- [x] Write `openspec/specs/template-automotive/spec.md` (Gherkin
      requirements + scenarios reflecting the REAL sections above).
- [ ] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/automotive` (copy the section-rich landing app pattern —
      Aurora; rename package to `@free-react-templates/automotive`).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Push `feat/template-automotive`, open PR (source template, preview
      URL, design tokens, what differs).
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main, state D).
