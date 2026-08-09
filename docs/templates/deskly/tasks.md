# Deskly (ColorLib Workhub) — Tasks & Design Notes

> Recreation of ColorLib "Workhub"
> (https://colorlib.com/wp/template/workhub/) under the NEW name **Deskly**
> (coworking desks, single lowercase word), per the monorepo naming mandate
> (never reuse the ColorLib source name — the stale prep at
> `openspec/specs/template-workhub/` was deleted, see spec NAMING NOTE).

## Design notes (replication findings)

- **Original:** ColorLib "Workhub" — coworking space / shared office
  landing template (Astro category). Demo's internal brand is "WorkHub";
  the recreation brands itself **Deskly**.
- **Demo DOM analyzed (verified 2026-08-09):**
  `https://workhub-colorlib.pages.dev/` (HTTP 200, ~91 KB HTML +
  `/_astro/Base.DgxC-Pxf.css` ~62 KB parsed for tokens; the official
  `https://preview.colorlib.com/theme/workhub/` returns 404 — demo hosted
  on Cloudflare Pages, same pattern as Serenite→Sooth / Saasify→Zenith /
  Swiftmove→Haulio, confirmed via `preview.colorlib.com/assets/js/products.js`).
  The TEMPLATES.md screenshot (`workhub-template-1771943925457.jpg`, HTTP
  200, viewed in browser) matches the live demo.
- **Visual design (screenshot + live render):** modern, minimalist,
  professional coworking landing on a warm cream hero (gradient
  from-primary-50 to white); **amber/orange** brand accents (`#d97706`
  primary-600 — headline highlight, primary buttons, pill badge "Austin's
  Premier Coworking Space"); muted sage-green secondary outline button
  ("View Plans"); dark charcoal text; sticky white navbar with centered
  links + "Book a Tour" CTA; hero stats row (500+ Members, 3 Locations,
  95% Occupancy, 4.9 Google Rating) above a large coworking-interior
  photo; light alternating sections (gray-50/white); dark gray-900 footer.
- **Structure (1:1, section order, verified live):**
  1. Sticky navbar (white/80 blur, border-b): "WorkHub" logo + links
     About, Spaces, Amenities, Community, Pricing, Partners, Blog, Spaces
     & Plans, Contact + "Book a Tour"; mobile hamburger.
  2. Hero (from-primary-50 to-white): pill badge, H1 "Where Great Work
     Happens Together" (amber on "Happens Together"), blurb, buttons
     "Book a Free Tour" (amber) + "View Plans" (green outline) + "Watch
     Demo" (play icon); stats row (500+ / 3 / 95% / 4.9); interior photo.
  3. Spaces: "Find Your Perfect Workspace" — 4 cards (Hot Desk, Dedicated
     Desk, Private Office, Meeting Rooms) + "Reserve" each.
  4. Amenities: "Everything You Need" — 8 cards (High-Speed WiFi, Free
     Coffee & Snacks, 24/7 Access, Phone Booths, Event Space, Bike
     Storage, Showers, Printing).
  5. Community: "Join a Thriving Community" — Upcoming Events (Startup
     Pitch Night, Web Dev Meetup, Networking Lunch) + "RSVP".
  6. Pricing: "Flexible Plans for Every Team" — 3 plans (Hot Desk,
     Dedicated, Office) with monthly/annually billing + "Get started".
  7. Testimonials: "What Our Members Say" — member quotes.
  8. FAQ: "Frequently Asked Questions" — 5 accordion items (trial,
     meeting rooms, 24/7 access, mail, cancellation).
  9. CTA (from-primary-600 to-primary-800): "See It for Yourself" +
     "Schedule a Tour" / "Call Us".
  10. Footer (bg-gray-900): "Deskly" blurb + address/phone/email + Spaces
      / Company / Support columns + "Stay Updated" + copyright.
- **Design tokens extracted from the live CSS + DOM (verified
  2026-08-09):**
  - Brand colors: **amber/orange scale** — #fffbeb (50), #fef3c7 (100),
    #fde68a (200), #fbbf24 (400), #f59e0b (500), **#d97706 (600 primary)**,
    #b45309 (700), #92400e (800). Hero gradient from-primary-50 to white;
    CTA gradient from-primary-600 to-primary-800.
  - Neutrals: gray scale — #f3f4f6, #e5e7eb, #d1d5db, #9ca3af, #6b7280,
    #4b5563, #374151, #1f2937, #111827 (footer bg).
  - Secondary accent: muted sage green/teal outline (View Plans button) —
    green-700 outline (e.g. #15803d) per screenshot.
  - Font: **"Plus Jakarta Sans"** (`Plus Jakarta Sans, system-ui,
sans-serif`) via Google Fonts.
  - Shapes: rounded cards (`--radius-lg`, `--radius-2xl`, .75rem), pill
    buttons (rounded-full), pill badge; sections alternate `bg-gray-50` /
    white with `py-20 lg:py-28`; dark mode `.dark` on root,
    dark:bg-gray-900 / dark:bg-gray-950.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/deskly-<n>/<w>/<h>`); lucide-react icons (Wifi,
  Coffee, Clock, Phone, CalendarDays, Bike, ShowerHead, Printer, Users,
  Zap, Star, ChevronDown, MapPin, Mail, Play, ArrowRight, PartyPopper);
  Plus Jakarta Sans via Google Fonts; repo-standard Navbar (dark-mode
  toggle) + Footer chrome.
- Rename demo brand "WorkHub" → "Deskly" everywhere (logo wordmark,
  headings keep same kind of copy; text may be paraphrased).
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn) — apps MUST
  import these from `packages/ui` or knip/CI deploy fails.

## Tasks

- [ ] Implementer: copy the simplest existing app → `apps/deskly`
      (package `@free-react-templates/deskly`), wire the Tailwind v4
      theme tokens per the spec.
- [ ] Implementer: write tests (red) per spec scenarios, then
      implementation (green) — 100% coverage (vitest + Testing Library).
- [ ] Sections in order: navbar, hero (badge + stats + photo), spaces,
      amenities, community, pricing, testimonials, FAQ, CTA, footer.
- [ ] Hero: from-primary-50 to-white gradient, pill badge, headline with
      amber highlight, three CTAs (amber solid / green outline / play),
      stats row, interior photo (picsum seed).
- [ ] Spaces: 4 cards with "Reserve". Amenities: 8 icon cards. Community:
      3 events + RSVP. Pricing: 3 plans + billing toggle + "Get started".
- [ ] Testimonials: 3 quote cards. FAQ: 5 accordion items (expand on
      activation). CTA: primary-600→800 gradient band, 2 buttons.
- [ ] Footer: 3 link columns + contact + "Stay Updated" + copyright;
      landmarks banner/main/contentinfo; document title "Deskly —
      Coworking Template".
- [ ] `scripts/verify-app.sh deskly` until green (typecheck + lint +
      vitest 100% + build).
- [ ] Implementer: mark `[~]` → `[x]` in TEMPLATES.md + surge URL,
      `npm run readme:status`, PR + immediate squash merge.
