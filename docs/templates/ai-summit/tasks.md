# Keynote (Colorlib Ai Summit) — Tasks & Design Notes

> Prep artifacts prepared on `main`; implementation ships on
> `feat/template-keynote`.

## Design notes (replication findings)

- **Original:** ColorLib "Ai Summit" — AI conference template
  (source: https://colorlib.com/wp/template/ai-summit/).
- **Demo DOM analyzed:** https://aisummit-colorlib.pages.dev/
  (HTTP 200; `preview.colorlib.com/theme/ai-summit/` returns 404 — demo
  hosted on Cloudflare Pages per the ColorLib preview portal).
- **Visual design (from DOM + bundled CSS + screenshot):** dark
  (`gray-950/900`) hero/schedule/sponsors/footer with **green** accents
  (`green-300/400/500`, CSS primary `oklch(60% .2 195)` ≈ emerald), light
  speaker/track/ticket sections; Space Grotesk (display) + Outfit (body);
  pill buttons; rounded cards.
- **Structure (1:1, section order):**
  1. Navbar: Speakers, Tracks, Schedule, Tickets, Venue + Get Your Ticket.
  2. Hero: H1 "The Future of AI is Here" + blurb + Get Your Ticket / View
     Schedule + countdown (Days/Hours/Mins/Secs) + stats (5,000+ Attendees,
     80+ Speakers, 3 Days, 30+ Workshops).
  3. Speakers: "Learn from the Best" — 8 cards (Dr. Maya Patel, Andrej
     Kovalenko, Dr. Sophia Chen, Marcus Thompson, Dr. Yuki Tanaka, James
     Okonkwo, Dr. Elena Rossi, Kevin Park).
  4. Tracks: "Three Distinct Paths" — Research, Industry, Hands-on Labs.
  5. Schedule: "Three Days of Innovation" — per-day session lists.
  6. Tickets: "Secure Your Spot" — Early Access (sold out, $599→$999),
     Builder (popular, $999), Researcher, Enterprise.
  7. Sponsors: "Backed by Leaders" — Diamond / Platinum / Gold / Silver
     partners + Become a Sponsor CTA.
  8. Venue: "The Armory" — 1800 Mission Street, San Francisco, CA 94103 +
     Get Directions + feature list + nearby hotels.
  9. FAQ: "Got Questions?" — six accordion Q&As (ticket inclusions, virtual
     pass, refunds, hackathon, meals, talk/poster CFP).
  10. Footer: "Join Us at Keynote" — Sep 18–20 2026, San Francisco; stats;
      attendee logos; Event / Resources / Connect columns.
- **Design tokens extracted from the DOM + CSS:**
  - Green primary (Tailwind green-500 `#22c55e` / green-400 `#4ade80` /
    green-300 `#86efac`; dark `gray-950 #030712`, `gray-900 #111827`).
  - Fonts: "Space Grotesk" (display) + "Outfit" (body), Google Fonts.
  - Buttons: pill-shaped solid green / bordered outline; rounded-2xl cards.
- **Recreation name:** Keynote (NEW name — never reuse "Ai Summit").
  App folder `apps/keynote`, package `@free-react-templates/keynote`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/keynote-<n>/<w>/<h>`); lucide-react icons; sponsor
  names as styled text logos; live ticking countdown; green primary in
  `@theme` (shared Button/ButtonLink `primary` variants resolve to the
  brand green); repo-standard Navbar (dark-mode toggle) + Footer chrome.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Tasks

- [x] Write `openspec/specs/template-keynote/spec.md` (Gherkin requirements + scenarios reflecting the REAL sections above).
- [x] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/keynote` (copy the section-rich landing app pattern —
      Cortex; rename package to `@free-react-templates/keynote`).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Per-app gate: `bash scripts/verify-app.sh keynote` (typecheck + lint +
      coverage + build) + `npm run spec:validate`.
- [ ] Push `feat/template-keynote`, open PR (source template, preview URL,
      design tokens, what differs), merge immediately.
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main, state D).
