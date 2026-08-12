# Slate (ColorLib Wordpress Business Themes) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream (stream 3). The spec
> folder `openspec/specs/template-slate/` is the claim marker — implementers
> start here.

## Design notes (replication findings)

- **Original:** ColorLib "Wordpress Business Themes" — a business-themes
  ROUNDUP/listicle page, not a single free template
  (source: https://colorlib.com/wp/template/wordpress-business-themes/; the
  article is "19 Free WordPress Themes for Business 2026" — 19 third-party
  picks: Shapely, Illdy, Pixova Lite, Activello, Sparkling, Astra Business,
  Hello Elementor, Kadence, Neve, Travelify, Dazzling, Smallbiz Startup,
  Agencyup, BusinessFocus, Rynobiz, Businessbiz, Customizr, Vantage, Pet
  Business; all demo links are third-party). Listed FOUR times in
  TEMPLATES.md — line 535, line 1232, line 1497, line 2101, all `- [ ]`,
  same slug → implement ONE app, mark ALL FOUR rows `[x]` at bookkeeping.
- **Preview UNREACHABLE:** https://preview.colorlib.com/theme/wordpress-business-themes/
  → HTTP 404, absent from preview.colorlib.com/assets/js/products.js.
  Screenshot `wordpress-business-themes1.jpg` (1100×739, AVIF) converted to
  PNG, viewed in the browser, tokens pixel-sampled with PIL.
- **Visual design:** full-bleed SPLIT HERO on a solid **slate blue-grey**
  `#6A6F82` ground (dominant pixel `(106,111,130)`; edges `(105,110,129)` —
  flat, no letterboxing). Left ~40%: left-aligned bold white headline
  "Business Themes" (heavy display sans) with a thinner white question
  sub-line "Fed up with puzzling frameworks?" below it. Right ~60%: chest-up
  professional portrait (man, reddish beard, black-rimmed glasses, navy
  beanie + navy blazer ≈ `#14263D`–`#293A4E`, white tee, right hand "OK"
  gesture). Bottom-left: thin lowercase rounded white wordmark (capture brand
  "corpus"). Bottom-right: hamburger icon — three short white lines. NO top
  navbar, NO desktop link row, NO CTA in the capture.
- **Palette (screenshot-sampled, no stylesheet):** slate `#6A6F82` (hero
  ground, reused for dark bands/footer/buttons); white `#FFFFFF` (all hero
  text + nav lines); reconstructed light surfaces white `#FFFFFF` + soft gray
  `#F4F5F7`; hover/dark slate `#5A6270`; optional deep navy `#14263D`.
- **Fonts:** bold geometric sans (Montserrat/Open Sans-like) — load
  **Montserrat 300/400/700** via Google Fonts `<link>`; wordmark weight
  300, thin lowercase.
- **Buttons (reconstructed):** slate `#6A6F82` fill + white text,
  `rounded-lg` (~8px), hover `#5A6270`; no reference shape exists.
- **Hero composition:** text block sits in the lower-middle of the left 40%;
  portrait is chest-up, subject slightly right of center in its column;
  wordmark ~bottom-left, hamburger ~bottom-right of the viewport.

## Section order (hero 1:1 as captured; remainder reconstructed)

1. **Hero** — full-viewport split: slate `#6A6F82` ground; left ~40% text
   (h1 bold white, paraphrase "Business Websites, Simplified"; sub-line
   weight 300–400, paraphrase "Tired of puzzling frameworks?"); right ~60%
   portrait (`picsum.photos/seed/slate-hero/…` portrait crop, object-cover);
   bottom-left thin wordmark "Slate"; bottom-right hamburger (white, three
   lines, `aria-label="Open menu"`). NO top navbar, NO CTA button — the
   hamburger is the only nav control in the hero.
2. **Mobile menu** — full-screen slate overlay opened by the hero hamburger:
   links Home / Features / About / Testimonials / Contact, close (X)
   control, click-to-scroll + close, `aria-expanded` managed.
3. **Features** (reconstructed) — white bg; section heading + sub-line; six
   cards in a 3-column grid (2 tablet / 1 mobile) using shared `Card`:
   icon (lucide, slate accent) + title + blurb. Suggested: Reliable
   Infrastructure, Lightning Performance, Modern Design, Secure by Default,
   Easy Setup, 24/7 Support.
4. **Stats band** (reconstructed) — slate `#6A6F82` bg, white text; four
   stats: bold white numbers + lighter labels (Projects Completed, Happy
   Clients, Team Members, Years of Experience).
5. **Testimonials** (reconstructed) — `#F4F5F7` bg; heading + three cards:
   quote, name, role.
6. **Contact** (reconstructed) — white bg; heading + contact details (mail /
   phone / map-pin icons) + form (Name, Email, Message; zod validation;
   slate "Send Message" button).
7. **Footer** (reconstructed, repo standard) — slate `#6A6F82` bg, white
   text; brand + blurb + link columns + copyright bar linking
   https://www.componentdock.com/.

## Implementation tasks (TDD, 100% coverage)

- [ ] Scaffold `apps/slate` (copy simplest existing app; rename package to
      `@free-react-templates/slate`; `npm install` at root so
      package-lock.json registers it; set `public/CNAME` +
      `homepage`)
- [ ] `index.css` `@theme`: `--color-slate` `#6A6F82`, `--color-slate-dark`
      `#5A6270`, `--color-mist` `#F4F5F7`; Montserrat font link in
      `index.html`; `injectUiSource()` in vite.config.ts (see
      docs/conventions.md)
- [ ] `Hero.test.tsx` + `Hero.tsx` — split layout, headline + sub-line,
      portrait, bottom wordmark + hamburger, no top navbar/CTA
- [ ] `MobileMenu.test.tsx` + `MobileMenu.tsx` — overlay open/close,
      links, scroll + close, aria-expanded, focus-visible
- [ ] `Features.test.tsx` + `Features.tsx` — 3-col grid, 6 cards, icons
- [ ] `Stats.test.tsx` + `Stats.tsx` — 4 stats on slate band
- [ ] `Testimonials.test.tsx` + `Testimonials.tsx` — 3 quote cards
- [ ] `Contact.test.tsx` + `Contact.tsx` — details + validated form
- [ ] `Footer.test.tsx` + `Footer.tsx` — slate footer, link columns,
      Component Dock link
- [ ] `App.tsx` composes sections in the order above
- [ ] `scripts/verify-app.sh slate` green (typecheck + lint + 100% coverage + build)
- [ ] Bookkeeping: mark TEMPLATES.md lines 535, 1232, 1497, 2101 `[x]` +
      surge URL + homepage + `npm run readme:status`
