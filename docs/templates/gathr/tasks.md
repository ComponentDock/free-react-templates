# Gathr — Task Outline

## Template

- **Name:** Gathr
- **Source:** ColorLib Evento (https://colorlib.com/wp/template/evento/)
- **Preview:** https://preview.colorlib.com/theme/evento/

## Status

- [x] Spec written
- [x] App scaffolded
- [x] Components implemented (13 sections)
- [x] Tests written (70 tests, 13 test files)
- [x] 100% coverage (statements, branches, functions, lines)
- [x] Per-app gate passed (typecheck + lint + tests + build)
- [x] No ColorLib references in source
- [x] CNAME + homepage configured
- [x] package-lock.json registered

## Components

1. Navbar — Fixed top, mobile hamburger toggle
2. Hero — Full-screen dark bg, headline, date, CTA
3. EventInfo — 4-column info cards (Date, Location, Speakers, Tickets)
4. Countdown — Timer with days/hours/min/sec
5. About — 2-column descriptive text
6. Features — 4 icon cards
7. Speakers — 8 speaker cards (4x2 grid)
8. Pricing — 3 tiers (Early Bird highlighted)
9. Calendar — Event table with 3 rows
10. Partners — Logo grid on gray bg
11. CtaBanner — Full-width dark CTA
12. Footer — 3-column footer with newsletter, social, instagram grid

## Design Tokens

- Brand primary: #f50136 (vivid red)
- Dark bg: #18181c
- Body text: #838383
- Font: Montserrat (Google Fonts)
- Buttons: rounded (50px radius), primary bg, white text

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/gathr/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/gathr/public/CNAME` = `gathr.free.componentdock.com`
  and the package `homepage` = `https://gathr.free.componentdock.com`.
