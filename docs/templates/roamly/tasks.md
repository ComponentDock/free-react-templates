# Roamly (ColorLib Wanderlust) — Tasks & Design Notes

> Prep artifacts committed on `main` (prep stream). Implementation ships
> later on `feat/template-roamly` (implementer stream).

## Design notes (replication findings)

- **Original:** ColorLib "Wanderlust" — free travel agency website template
  (source: https://colorlib.com/wp/template/wanderlust/, slug `wanderlust`;
  category Travel; official description: "destination guides, tour packages
  with itineraries, booking forms, traveler reviews, and photo galleries").
- **Preview:** `https://preview.colorlib.com/theme/wanderlust/` → 404 "Not
  Found". The ColorLib preview hub
  (`preview.colorlib.com/assets/js/products.js`) maps the slug to the
  REACHABLE official Cloudflare Pages demo
  **`https://wanderlust-colorlib.pages.dev/`** (Astro rebuild). ALL
  structure/copy/tokens below are from that live demo + its
  `/_astro/Base.CY7cTYTJ.css`, cross-checked against the TEMPLATES.md
  screenshot (`wanderlust-template-1770211435145.jpg`, AVIF 2400×1892):
  above-the-fold matches 1:1 (sticky white header + mountain logo mark, hero
  lake photo with rowboat, badge, gradient "Adventure" word, Explore Tours /
  Watch Our Story CTAs, 4-stat row, floating search card).
- **Visual design:** modern clean travel-agency landing. Teal `#0d9488`
  brand on white/gray; hero = alpine-lake photo darkened; headline
  "Discover Your Next Adventure" with "Adventure" clipped to a
  teal→yellow (`#0d9488 → #eab308`) gradient; pill badge "Top-Rated Travel
  Agency 2025"; glass "Watch Our Story" CTA; stats 50+ / 200+ / 15k+ / 98%;
  white rounded search widget (Destination / Check In / Check Out /
  Travelers + Search Tours); gray-50 "Explore the World" (6 destination
  cards, 4:3 images, rating • tour count, blurb, View all destinations);
  white "Unforgettable Experiences" (eyebrow "Featured Tours", 4 tour cards:
  country chip, title, duration, star + count, 2 highlight tags, From price
  - strikethrough, View); gray-50 "Travel with Confidence" (6 icon
    features); white "What Our Travelers Say" (stars, quote, avatar initial,
    name, role, "Traveled to X"); photo CTA "Ready for Your Next Adventure?"
    (Contact Us white button); dark gray-900 footer (brand, Destinations /
    Company / Support / Travel Inspiration w/ newsletter, © 2026 + Privacy +
    Terms). **Dark mode supported** (header toggle, `dark:` variants,
    localStorage `theme`).
- **Section order (1:1):**
  1. Header (sticky, `bg-white/80 backdrop-blur-lg border-b`, container
     `h-16 lg:h-20`): mountain/layers SVG logo mark (`text-primary-600`) +
     "Roamly" wordmark bold; nav Destinations / Tours / About / Resources▾
     (dropdown: Travel Blog, Travel Guides, FAQ — chevron rotates on hover,
     panel `min-w-48 rounded-xl border bg-white p-2 shadow-lg`) / Contact;
     Book Now (`rounded-lg bg-primary-600 px-5 py-2.5 text-sm` hover
     primary-700); dark toggle (Moon `dark:hidden` / Sun `hidden dark:block`,
     `aria-label="Toggle dark mode"`); mobile button (`aria-label="Open
menu"`, `aria-expanded`).
  2. Hero (`relative min-h-screen pb-20 lg:pb-32`): lake photo + dark
     overlay; badge pill "Top-Rated Travel Agency 2025" (MapPin icon); H1
     "Discover Your Next<br>Adventure" (`.text-gradient` on "Adventure");
     sub "Explore breathtaking destinations around the world with our
     expertly curated tours. From ancient wonders to tropical paradises,
     your dream vacation awaits."; CTAs "Explore Tours" (`rounded-lg
bg-primary-600 px-8 py-4 shadow-primary-600/25 hover:bg-primary-700` +
     arrow) and "Watch Our Story" (glass `border-white/30 bg-white/10
backdrop-blur-sm` + Play); stats grid 4: 50+ Destinations / 200+ Tour
     Packages / 15k+ Happy Travelers / 98% Satisfaction Rate; search card
     `rounded-2xl bg-white p-6 shadow-2xl` form `grid gap-4 sm:grid-cols-2
lg:grid-cols-5`: Destination (text, "Where to?", MapPin), Check In /
     Check Out (date, Calendar), Travelers (select, "1 Traveler", Users),
     submit "Search Tours" (`w-full rounded-lg bg-primary-600 py-3`, spans
     1 col on lg).
  3. Explore the World (`bg-gray-50 py-20 lg:py-28`): h2 + sub; grid
     `sm:grid-cols-2 lg:grid-cols-3 gap-6`; 6 `destination-card group`
     cards (`aspect-[4/3] overflow-hidden` image, "4.9 • 24 tours" rating,
     name, blurb): Bali 4.9/24, Santorini 4.8/18, Machu Picchu 4.9/12,
     Tokyo 4.7/32, Maldives 4.9/15, Swiss Alps 4.8/20; "View all
     destinations" link.
  4. Unforgettable Experiences (`bg-white py-20 lg:py-28`): eyebrow
     "Featured Tours", h2 "Unforgettable Experiences", sub "Handpicked tours
     designed to immerse you in local cultures…"; 4 tour cards (image +
     country chip overlay, title, "N days", star + "(count)", 2 highlight
     tags, "From $X" + strikethrough, View):
     Bali Cultural Journey 7d 4.9(128) [Temple visits, Rice terraces]
     $1299→$1599 · Greek Island Hopping 10d 4.8(96) [Santorini sunset,
     Mykonos beaches] $2199→$2499 · Peru Discovery 8d 4.9(74) [Machu
     Picchu, Sacred Valley] $1899 · Japan Explorer 12d 4.7(156) [Tokyo
     nightlife, Kyoto temples] $3499→$3999.
  5. Travel with Confidence (`bg-gray-50 py-20 lg:py-28`): h2 + sub; 6
     features (icon + title + desc): Safe & Secure Travel, Expert Local
     Guides, Curated Experiences, Best Price Guarantee, Flexible Booking,
     24/7 Support (full copy in spec).
  6. What Our Travelers Say (`bg-white py-20 lg:py-28`): h2 + intro "Real
     stories from adventurers who trusted us with their dream vacations.";
     cards: 5 stars, quote, avatar initial, name, role, "Traveled to X" —
     e.g. Sarah Mitchell · Adventure Traveler · Traveled to Bali, Indonesia.
  7. Ready for Your Next Adventure? (`relative overflow-hidden py-20
lg:py-28`): beach photo 1920×600 + dark overlay + `bg-accent-500/20
blur-3xl` glow blobs; centered max-w-3xl: white h2, sub "Join thousands
     of travelers who have discovered the world with Wanderlust. Your
     journey of a lifetime starts here.", CTA "Contact Us" (`rounded-lg
bg-white px-8 py-4 text-primary-700 hover:bg-gray-100 shadow-lg`).
  8. Footer (`bg-gray-900 pt-16 lg:pt-24 text-gray-300`): brand col (mark +
     "Roamly" + blurb); Destinations: Bali, Greece, Japan, Peru; Company:
     About Us, Our Team, Careers, Contact; Support: intro + contact; Travel
     Inspiration: newsletter "Subscribe for exclusive deals, travel tips,
     and destination guides." + email input "Enter your email" + Subscribe;
     bottom bar "© 2026 Roamly. All rights reserved." + Privacy Policy +
     Terms of Service.
- **Design tokens (real values from the demo CSS):**
  - Primary teal: 600 `#0d9488` (buttons, logo, gradient start), 500
    `#14b8a6`, 700 `#0f766e` (hover), 400 `#2dd4bf`, 300 `#5eead4`, 100
    `#ccfbf1`.
  - Accent yellow: 500 `#eab308` (gradient end, glow blobs).
  - Gradient: `linear-gradient(to right,#0d9488,#eab308)` — hero accent
    word via `.text-gradient` (bg-clip:text, transparent fill).
  - Neutrals: gray-50 `#f9fafb`, 100 `#f3f4f6`, 200 `#e5e7eb`, 300
    `#d1d5db`, 400 `#9ca3af`, 500 `#6b7280`, 600 `#4b5563`, 700 `#374151`,
    800 `#1f2937`, 900 `#111827`, 950 `#030712`.
  - Font: **Inter 300–800** only (Google Fonts link), sans-serif.
  - Buttons: `rounded-lg` (all CTAs — screenshot shows pill, live rebuild
    is rounded-lg; follow live rebuild per Moda precedent); shadow on
    primary CTAs `shadow-lg shadow-primary-600/25`.
  - Radii: search card `rounded-2xl`, dropdown `rounded-xl`, inputs
    `rounded-lg`.
  - Rhythm: sections `py-20 lg:py-28`, container `mx-auto px-4 lg:px-8`,
    destination images `aspect-[4/3]`, alternating gray-50/white, footer
    gray-900.
  - Dark mode: `.dark` class on `<html>`, persisted localStorage `theme`.
- **Recreation name:** Roamly (single lowercase word; evokes "roam" — fits
  the travel brand; NO collision with `apps/` or existing spec folders; not a
  ColorLib source name). App folder `apps/roamly`, package
  `@free-react-templates/roamly`. The stale FORBIDDEN source-name prep
  (`template-wanderlust` + `docs/templates/wanderlust`) was deleted in the
  prep commit.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/roamly-<n>/<w>/<h>`; hero 1920×1080, destinations
  800×600, tours 800×600, CTA 1920×600); lucide-react icons (Mountain or
  Layers for the logo mark, MapPin, Calendar, Users, Moon, Sun, Menu, X,
  Star, ArrowRight, Play, ChevronDown, ShieldCheck, Compass, Sparkles,
  BadgePercent, CalendarCheck, Headphones — VERIFY exports); Inter via Google
  Fonts; dark mode with `window.localStorage` persistence (Keyhaven pattern —
  jsdom 30 needs the in-memory Storage polyfill in `src/test/setup.ts`);
  search + newsletter forms client-side validated with inline feedback; date
  inputs `type="date"`; repo standard extras (skip link, back-to-top,
  cookie banner, scroll-reveal).
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn). Fidelity
  decisions for the PR: single-page landing only (source demo is a SPA with
  /blog, /guides, /faq, /contact, /destinations/* routes — out of scope;
  nav links anchor to section ids `/#destinations`, `/#tours`, `/#about` or
  inert `#`), logo recreated as an SVG mark (never the source logo asset),
  "View all destinations"/"View" links anchor to `#` placeholders, Resources
  dropdown is hover-revealed (mouse only; add keyboard focus-within support).

## Tasks

- [x] Write `openspec/specs/template-roamly/spec.md` (Gherkin requirements +
      scenarios reflecting the sections above).
- [x] Delete stale FORBIDDEN source-name prep `openspec/specs/template-wanderlust` + `docs/templates/wanderlust` (per naming mandate).
- [x] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/roamly` (copy a simple card-grid app — e.g. Moda/Coverly-
      style; rename package to `@free-react-templates/roamly`).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Gate: `scripts/verify-app.sh roamly` (typecheck → lint → 100% coverage
      tests → build) + `npm run spec:validate`.
- [ ] Push `feat/template-roamly`, open PR (source template, preview URL,
      design tokens, what differs, pages.dev-reference note), merge
      immediately.
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main), `npm run readme:status`.
