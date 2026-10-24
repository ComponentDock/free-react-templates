# Keynote (Colorlib Ai Summit) — Tasks & Design Notes

> **SHIPPED** — this prep's design shipped as `apps/keynote`
> (<https://keynote.free.componentdock.com>). The unchecked items below are
> prep history, not outstanding work.

> Prep artifacts prepared on `main`; implementation ships on
> `feat/template-keynote`.

## Design notes (replication findings)

- **Original:** ColorLib "Ai Summit" — AI conference template
  (source: https://colorlib.com/wp/template/ai-summit/).
- **Demo DOM analyzed:** https://aisummit-colorlib.pages.dev/
  (HTTP 200 at prep time; `preview.colorlib.com/theme/ai-summit/` returned 404 at prep time — demo
  hosted on Cloudflare Pages per the ColorLib preview portal).

✅ **Pointer status — live reference re-probed 2026-10-13d (bot wall
lifted):** the demo is served by the ColorLib preview host —
`https://preview.colorlib.com/theme/aisummit/` answers **HTTP 200**, 110,070
B `text/html; charset=utf-8` (110,070 B, sha256 `88ad882723a5…` after
stripping the injected print-media `@font-face` block and the Insights
beacon); its stylesheet
`https://preview.colorlib.com/theme/aisummit/_astro/index.Dbq_dtys.css` is
44,737 B sha256 `ea44ccd13c7c…` (Space Grotesk, JetBrains Mono, Outfit). The
Cloudflare Pages mirror `https://aisummit-colorlib.pages.dev` is still
**NXDOMAIN** (re-checked 2026-10-13d). ⚠️ `apps/keynote` was built from the
mirror's tokens before the migration, so it follows the mirror, not today's
preview host.
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

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/keynote/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/keynote/public/CNAME` = `keynote.free.componentdock.com`
  and the package `homepage` = `https://keynote.free.componentdock.com`.
