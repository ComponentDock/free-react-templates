# Workhub (Colorlib Workhub) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Cloud PR (#7) awaits review.
> Implementation ships later on `feat/template-workhub`.

## Design notes (replication findings)

- **Original:** ColorLib "Workhub" — coworking space / shared office landing
  template (source: https://colorlib.com/wp/template/workhub/).
- **Demo DOM analyzed:** https://workhub-colorlib.pages.dev/ (HTTP 200, full
  rendered DOM + `/_astro/Base.*.css` (62KB, minified) extracted;
  `https://preview.colorlib.com/theme/workhub/` returns 404 — preview portal
  loads demos from `<slug>-colorlib.pages.dev`, confirmed via
  `preview.colorlib.com/assets/js/products.js`).
- **Visual design (from DOM + CSS tokens):** warm modern coworking landing
  on a light amber-white gradient hero, **amber** brand color (`#d97706`
  amber-600 scale), Plus Jakarta Sans typography, rounded cards, pill
  buttons, alternating gray-50/white sections, amber CTA band, dark-gray
  (`#111827`) footer, full dark mode.
- **Structure (1:1, section order):**
  1. Sticky navbar (white/80 blur): "WorkHub" logo + About, Spaces,
     Amenities, Community, Pricing, Partners, Blog, Spaces & Plans, Contact
     - "Book a Tour".
  2. Hero (gradient primary-50 → white): "Where Great Work Happens
     Together" + "Book a Free Tour" / "View Plans" / "Watch Demo".
  3. Spaces: "Find Your Perfect Workspace" — 4 cards (Hot Desk, Dedicated
     Desk, Private Office, Meeting Rooms) + "Reserve".
  4. Amenities: "Everything You Need" — 8 cards (WiFi, Coffee & Snacks,
     24/7 Access, Phone Booths, Event Space, Bike Storage, Showers,
     Printing).
  5. Community: "Join a Thriving Community" — Upcoming Events (Startup
     Pitch Night, Web Dev Meetup, Networking Lunch) + "RSVP".
  6. Pricing: "Flexible Plans for Every Team" — Hot Desk / Dedicated /
     Office with billing toggle.
  7. Testimonials: "What Our Members Say".
  8. FAQ: "Frequently Asked Questions" — 5 accordions (trial, meeting
     rooms, 24/7 access, mail, cancellation).
  9. CTA band (gradient primary-600 → 800): "See It for Yourself" +
     "Schedule a Tour" / "Call Us".
  10. Footer (`bg-gray-900`): blurb + address/phone/email + Spaces /
      Company / Support + "Stay Updated" + copyright.
- **Design tokens extracted from the DOM + CSS:**
  - Brand colors: **amber scale** — #d97706 primary (dark: #b45309,
    #92400e; light: #f59e0b, #fbbf24, #fcd34d, #fde68a, #fef3c7, #fffbeb);
    hero gradient primary-50 → white; CTA gradient primary-600 → 800.
  - Neutrals: gray scale — #f3f4f6 → #111827 (footer bg).
  - Fonts: **"Plus Jakarta Sans"** via Google Fonts.
  - Shapes: rounded cards, pill buttons; section padding `py-20 lg:py-28`.
- **Recreation name:** Workhub (kept — matches ColorLib name; product brand
  "WorkHub" per demo). App folder `apps/workhub`, package
  `@free-react-templates/workhub`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/workhub-<n>/<w>/<h>`); lucide-react icons (Wifi,
  Coffee, Clock, Phone, CalendarDays, Bike, ShowerHead, Printer, Users, Zap,
  Star, ChevronDown, MapPin, Phone, Mail, Play, ArrowRight, PartyPopper);
  Plus Jakarta Sans via Google Fonts; repo-standard Navbar (dark-mode toggle)
  - Footer chrome.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Tasks

- [x] Write `openspec/specs/template-workhub/spec.md` (Gherkin requirements + scenarios reflecting the REAL sections above).
- [ ] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/workhub` (copy the section-rich landing app pattern —
      Aurora; rename package to `@free-react-templates/workhub`).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Push `feat/template-workhub`, open PR (source template, preview URL,
      design tokens, what differs).
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main, state D).
