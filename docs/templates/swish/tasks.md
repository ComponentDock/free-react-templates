# Swish (ColorLib "Basketball") — Tasks & Design Notes

> Implementer artifact. Implemented on `feat/template-swish` by an
> implementer stream. Recreates ColorLib "Basketball".

## Design notes (replication findings)

- **Original:** ColorLib "Basketball" — basketball school/club landing
  (source: https://colorlib.com/wp/template/basketball/). Listed in
  TEMPLATES.md line 345 (Basketball).
- **Preview URL:** https://preview.colorlib.com/theme/basketball/ — reachable.
  Fetched: `/tmp/basketball.html` (43 KB), `css/style.css` (135 KB).
  Screenshot `basketball-free-template.jpg` (1200×946, viewed in browser).
  Preview DOM and screenshot agree — sporty club aesthetic: cream/beige hero
  with a black-and-orange split headline, white header, orange CTAs, light
  sections on `#f9f9ff`.
- **Visual design:** bright, energetic. Hero is flat cream `#fdf8f3`-ish with
  "DEFEND &" in orange `#ff8b23` and "DOMINATE" in black (Open Sans 900,
  uppercase, 80px); right side has a basketball illustration (road/hoop/sky —
  recreated with a seeded picsum image). Orange `#ff8b23` is THE accent
  (52 uses): headline span, buttons, icons, hover states; `#fdcb9e` light
  peach for button bottom borders; headings `#2a2a2a` (Playfair Display
  serif); body `#666666` Roboto 14px; light section bg `#f9f9ff`; footer
  dark `#2a2a2a`.
- **Fonts:** Roboto (body 300/400/500) + Playfair Display (headings
  400/900) + Open Sans 800 (hero h1). Google Fonts via `<link>` in
  `index.html`.
- **Buttons:** `.btn_1` = orange bg, white 12px uppercase + right-angle icon,
  padding 13px 35px, hover inverts (white bg + orange text + orange border).
  `.btn_2` = orange bg, 4px `#fdcb9e` bottom border, padding 13px 47px, hover
  `#f5790b`. Newsletter submit = full-width orange.
- **Structure (1:1 from the preview DOM):**
  1. Header top bar: phone `+02 213 - 256 (365)` (orange icon) + REGISTER.
  2. Navbar (white): logo "Swish" + Home · About us · team · gallery · Pages
     ▾ (Elements, Single blog) · blog · Contact. Mobile hamburger.
  3. Hero `.banner_part`: h1 `<span>Defend &</span><br>Dominate` (span
     orange), gray paragraph, `learn more →` btn_1, right illustration.
  4. About `.about_part` (bg `#f9f9ff`): image left; overline "About us",
     h2 "Welcome to Basketball School", 2 paragraphs, `read more`.
  5. Upcoming Event: centered tittle (overline "Upcoming Event" + h2 "Land
     Morning Blessed"); 2 cards: orange date block (15 jun), time
     "12:00 AM - 12:30 AM", "Sandis peter", description, `View Details`.
  6. Learn About Basketball: overline "free tutorial", h2, paragraph, play
     button over video image.
  7. Recreational Program (image right): overline, h2 "Deep which above
     behold an woter set a herb dry days.", 2 paragraphs, read more.
  8. Player info: 3 player cards (photo, "Jequline Dodge", bio, "Swords
     Club").
  9. Gallery: overline "Our Gallery", h2 "Latest Player Showcase", 6-tile
     grid, hover captions "Swords Club vs Uknights Club".
  10. Blog: overline "From The Blog", h2 "Latest News & Update", 4 cards
      (date "12 march, 2019", title, "Sports news", "2 Comments").
  11. Social: overline "Social Media", h2 "Follow Us Instagram", 6-square
      grid with instagram icons.
  12. Footer (dark `#2a2a2a`): Top Products · Quick Links · Features ·
      Resources · Newsletter (email + orange subscribe) + copyright bar.

## Tasks outline

- [x] Replication: preview DOM + CSS tokens + screenshot analyzed.
- [x] Spec written: `openspec/specs/template-swish/spec.md`.
- [x] Claim: TEMPLATES.md line 345 marked `[~]` on `feat/template-swish`
      (commit 33355a9a, pushed).
- [ ] Scaffold `apps/swish` (copy simplest multi-section app, e.g. nomad;
      rename package `@free-react-templates/swish`; keep `injectUiSource()`).
- [ ] TDD: tests first (components + App), then implementation.
- [ ] Tokens in `@theme` (orange `#ff8b23`, peach `#fdcb9e`, hover
      `#f5790b`, dark `#2a2a2a`, body `#666666`, muted `#999999`, light
      `#f9f9ff`, cream hero) + Google Fonts links in `index.html`.
- [ ] `npm install` at worktree root (lockfile registers swish workspace).
- [ ] `bash scripts/verify-app.sh swish` + `npm run spec:validate` pass.
- [ ] Push, PR "feat: Swish — basketball school template (ColorLib
      Basketball)", merge immediately.
- [ ] Bookkeeping on main: TEMPLATES.md line 345 `[~]` → `[x]` + surge URL,
      `"homepage"` set, `npm run readme:status`, commit + push.
