# Nuptials (ColorLib Wordpress Wedding Themes / Wedding) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream (stream 3). The spec
> folder is the claim marker; implementation ships later on
> `feat/template-nuptials` by an implementer stream.

## Design notes

- **Original:** TEMPLATES.md item "Wordpress Wedding Themes" — the ColorLib
  page is a roundup ("Best Wedding WordPress Themes 2026",
  https://colorlib.com/wp/template/wordpress-wedding-themes/). The item's
  preview slug 404s; the concrete single-theme reference is ColorLib
  "Wedding" (https://colorlib.com/wp/template/wedding/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/wedding/`
  (HTTP 200, 22.6KB) + stylesheet `css/main.css` (33.0KB). Structure below is
  from the rendered DOM + CSS tokens.
- **Screenshot note:** `wedding-wordpress-themes.jpg` is the roundup banner —
  elegant serif headline over a full-bleed wedding photo with a white
  transparent nav (Our story / Photos / When & Where / Events). Use it for
  hero mood (large, romantic, photo-forward); the section map comes from the
  live Wedding preview.
- **Structure observed (1:1):** navbar (Home / About us / Gallery / Pages ▾
  [Generic, Elements]) → hero full-screen photo + centered white H1 "James &
  Julie are Getting Married" (overlay #7f3f3b @ 0.3) → about ("About the
  Sweet Cute Bride", two framed photos + lead copy) → date strip ("Wedding
  Day : 20 March 2018 at 19.00 pm") → gallery ("Our Pre Wedding Photo
  Gallery", filterable grid, 6 photos) → countdown (29 Days / 22 Hours / 23
  Minutes / 52 Seconds) → info (bg #f9f9ff: "Wedding Information" paragraph
  - "Main Ceremony" + "Wedding Party" cards with Date: Friday, 20 March 2018
    / Time: 19.00 / Address: 56/8, West Panthapath) → reservation (photo bg:
    "Reservation Form", Meal Preferences select Meal 1/2/3, Number of guests,
    name/email/message) → footer (Home / About us / gallery / reservations +
    copyright).
- **Design tokens:** brand purple **#c931ff**; primary button gradient
  **#ca2fff → #8e96f8 → #53fff0**; light section bg **#f9f9ff**; hero overlay
  **#7f3f3b** @ 0.3; reservation input border **#656463** on transparent
  fields; font **Poppins** (sans) via Google Fonts; hero H1 72px/700 white;
  pill buttons (radius 25px), white text, gradient fill, line-height 42px,
  padding 0 30px; form inputs radius 0, textarea 150px.
- **Recreation name:** Nuptials. App folder `apps/nuptials`, package
  `@free-react-templates/nuptials` (new name, no collision; never reuse the
  ColorLib source name "wedding"/"wordpress-wedding-themes").
- **Design approach:** light theme with purple accents; hero = seeded picsum
  photo + centered headline; about split with framed photos; date strip as
  centered highlight bar; gallery = filterable grid of seeded picsum photos;
  countdown as live timer (static/test-safe values in tests); info cards with
  lucide icons + Date/Time/Address meta; reservation form client-side only
  (select, number, text inputs; no backend); all images
  picsum-seeded (`picsum.photos/seed/nuptials-N/w/h`); Google Fonts Poppins
  via `<link>`.
- Reuse `packages/ui` (Button, ButtonLink, Card, Badge, cn) — do NOT
  duplicate components.
- Base implementation on `apps/aurora` (multi-section landing with
  Navbar/Hero/Sections/Footer structure) — the closest existing multi-section
  app; adapt patterns from the 404 apps' Navbar/SocialLinks.

## Tasks

- [x] Write `openspec/specs/template-nuptials/spec.md` (Gherkin requirements + scenarios + replication findings) — DONE on main (this prep).
- [ ] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/nuptials` (copy `apps/aurora`; rename package to
      `@free-react-templates/nuptials`).
- [ ] TDD: tests first for Navbar, Hero, About, DateStrip, Gallery,
      Countdown, InfoCards, Reservation, Footer, App composition; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Update TEMPLATES.md line 235 status `[~]` → `[x]` after merge
      (bookkeeping on main, state D).
- [ ] Update README structure + `docs/ai-context.md` app list.
