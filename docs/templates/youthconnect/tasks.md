# Youthconnect (Colorlib Youthconnect) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Cloud PR (#7) awaits review.
> Implementation ships later on `feat/template-youthconnect`.

## Design notes (replication findings)

- **Original:** ColorLib "Youthconnect" — youth ministry / church youth
  group landing template
  (source: https://colorlib.com/wp/template/youthconnect/).
- **Demo DOM analyzed:** https://youthconnect-colorlib.pages.dev/ (HTTP 200,
  full rendered DOM + `/_astro/Base.*.css` (64KB, minified) extracted;
  `https://preview.colorlib.com/theme/youthconnect/` returns 404 — preview
  portal loads demos from `<slug>-colorlib.pages.dev`, confirmed via
  `preview.colorlib.com/assets/js/products.js`).
- **Visual design (from DOM + CSS tokens):** bold youth-ministry landing on
  a dark navy hero, **cyan** brand color (`#06b6d4` cyan-500 scale) with
  orange accent, Bebas Neue display + Plus Jakarta Sans body fonts, rounded
  cards, pill buttons, dark navy (`#080716`/`#1e1b4b`) sections alternating
  with gray-50/white, full dark mode.
- **Structure (1:1, section order):**
  1. Fixed navbar (blur): "ELEVATE YOUTH" logo + Events, Groups, Watch,
     About, Parents + "I'm New".
  2. Hero (`bg-navy-950`): "RISE HIGHER" + "Join Us Wednesday" / "Watch
     Latest Message".
  3. Events: "UPCOMING EVENTS" — Elevate Night, Summer Camp 2025, City
     Serve Day, Spring Retreat, Worship Night.
  4. Small Groups: "SMALL GROUPS" — 4 cards (The Forge, Bloom, Foundation,
     Band of Brothers) + "Find Your Group".
  5. Content: "LATEST CONTENT" — 5 media cards (videos, podcast,
     devotional) with type/duration.
  6. Leaders: "OUR LEADERS" — 4 cards (Tyler Reed, Jessica Reed, Marcus
     Johnson, Sofia Martinez) + volunteer CTA.
  7. Testimonials: "WHAT STUDENTS SAY" — 3 quotes.
  8. CTA (`bg-navy-950`): "DON'T MISS OUT" + "Plan Your Visit" / "Contact
     Us".
  9. Footer (`bg-navy-950`): service times (Elevate Night 6:30 PM, MS
     Hangout 9:00 AM, HS Connect 11:00 AM) + Get Involved / Resources /
     Connect / Location + copyright.
- **Design tokens extracted from the DOM + CSS:**
  - Brand colors: **cyan scale** — #06b6d4 primary (dark: #0891b2,
    #0e7490; light: #22d3ee, #67e8f9, #a5f3fc, #cffafe, #ecfeff); navy
    backgrounds #1e1b4b / #080716; orange accent #f97316.
  - Neutrals: gray scale — #f3f4f6 → #1f2937.
  - Fonts: **"Bebas Neue"** (display) + **"Plus Jakarta Sans"** (body) via
    Google Fonts.
  - Shapes: rounded cards, pill buttons; section padding `py-20 lg:py-28`.
- **Recreation name:** Youthconnect (kept — matches ColorLib name; ministry
  brand "Elevate Youth" per demo). App folder `apps/youthconnect`, package
  `@free-react-templates/youthconnect`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/youthconnect-<n>/<w>/<h>`); lucide-react icons
  (Flame, Sprout, Anchor, Users, Play, Mic, BookOpen, Star, ChevronDown,
  MapPin, Clock, CalendarDays, Heart, ArrowRight, Video); Bebas Neue + Plus
  Jakarta Sans via Google Fonts; repo-standard Navbar (dark-mode toggle) +
  Footer chrome.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Tasks

- [x] Write `openspec/specs/template-youthconnect/spec.md` (Gherkin
      requirements + scenarios reflecting the REAL sections above).
- [ ] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/youthconnect` (copy the section-rich landing app pattern —
      Aurora; rename package to `@free-react-templates/youthconnect`).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Push `feat/template-youthconnect`, open PR (source template, preview
      URL, design tokens, what differs).
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main, state D).
