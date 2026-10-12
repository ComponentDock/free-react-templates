# Nuptials (ColorLib Wordpress Wedding Themes / Wedding) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream (stream 3). The spec
> folder is the claim marker; implementation ships later on
> `feat/template-nuptials` by an implementer stream.

## Design notes

- **Original (corrected 2026-10-12):** TEMPLATES.md line 3105 **"Wedding"**
  (https://colorlib.com/wp/template/wedding/; preview
  https://preview.colorlib.com/theme/wedding/ → HTTP 200). The "Wordpress
  Wedding Themes" roundup entry (lines 235 / 3109) is a DIFFERENT item and is
  already shipped as `wedlock` — its own preview slug 404s. Earlier revisions
  of this prep conflated the two.
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/wedding/`
  (HTTP 200, 22.6KB) + stylesheet `css/main.css` (33.0KB). Structure below is
  from the rendered DOM + CSS tokens.
- **Screenshot note (this item):**
  `wedding-free-wedding-website-template.jpg` (1200x935 AVIF, converted to PNG
  for inspection): white contact topbar (+880 1234 654 953 ·
  support@colorlib.com), centered logo, uppercase nav HOME / ABOUT US /
  GALLERY / PAGES ▾; full-bleed bride-and-groom hero with a purple gradient
  wash over the right half and a centered white bold headline; white "About
  the Handsome Groom" section (thin heading, last word bold) with a groom
  photo right and square prev/next slider arrows. Matches the live DOM.
- **Structure observed (1:1):** header = contact topbar (+880 1234 654 953 ·
  support@colorlib.com) + centered logo + nav (Home / About us / Gallery /
  Pages ▾ [Generic, Elements]) → hero full-screen photo + centered white H1
  "James & Julie are Getting Married" (overlay #7f3f3b @ 0.3) → about
  owl-carousel, two slides ("About the Sweet Cute Bride" / "About the
  Handsome Groom") with 40px white prev/next triggers → date strip ("Wedding
  Day : 20 March 2018 at 19.00 pm") → gallery ("Our Pre Wedding Photo
  Gallery", owl-carousel slider of 6 photos g1–g6, NO filter links) →
  countdown (29 Days / 22 Hours / 23 Minutes / 52 Seconds; static values in
  the reference DOM, live timer is our enhancement) → info (bg #f9f9ff:
  "Wedding Information" paragraph
  - "Main Ceremony" + "Wedding Party" cards with Date: Friday, 20 March 2018
    / Time: 19.00 / Address: 56/8, West Panthapath) → reservation (photo bg:
    "Reservation Form", Meal Preferences select Meal 1/2/3, Number of guests,
    name/email/message) → footer (Home / About us / gallery / reservations +
    copyright).
- **Design tokens:** brand purple **#c931ff**; primary button gradient
  **#ca2fff → #8e96f8 → #53fff0**; light section bg **#f9f9ff**; hero overlay
  **#7f3f3b** @ 0.3; reservation input border **#656463** on transparent
  fields; font **Poppins** (sans) via Google Fonts (axes `100;200;300;400;500;600;700`
  — the 100/200 rules are the thin About heading and reservation fields); hero H1 72px/700 white;
  pill buttons (radius 25px), white text, gradient fill, line-height 42px,
  padding 0 30px; form inputs radius 0, textarea 150px.
- **Recreation name:** Nuptials. App folder `apps/nuptials`, package
  `@free-react-templates/nuptials` (new name, no collision; never reuse the
  ColorLib source name "wedding"/"wordpress-wedding-themes").
- **Design approach:** light theme with purple accents; hero = seeded picsum
  photo + centered headline; about slider (two slides + prev/next); date strip
  as centered highlight bar; gallery = slider of six seeded picsum photos
  (no filters);
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
- [ ] Google Fonts `<link>` in `index.html` — load the **whole Poppins set the
      reference serves** (`100;200;300;400;500;600;700`, exactly the weights the
      preview host's injected `Poppins` `@font-face` block declares):
      `https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700&display=swap`
      The thin axes are load-bearing: `.About-area h1{font-weight:100}` (with a
      `span{font-weight:600}`) and `.reservation-area input, textarea` +
      `.nice-select span{font-weight:200}` are the design's light treatments — a
      default `400;500;700` link would snap them to 400. Verified on Google
      Fonts (HTTP 200).
- [ ] Create `apps/nuptials` (copy `apps/aurora`; rename package to
      `@free-react-templates/nuptials`).
- [ ] TDD: tests first for Navbar, Hero, About, DateStrip, Gallery,
      Countdown, InfoCards, Reservation, Footer, App composition; run red.
- [ ] Accessibility (delta — the reference ships none of it): accessible names
      on icon-only controls (theme toggle) with the icon `aria-hidden`;
      `aria-expanded` (+ `aria-controls` where a target exists) on any
      disclosure control; keyboard-only operation incl. `Escape` to close open
      overlays; visible `focus-visible` rings on every interactive element
      (`main.css` suppresses outlines page-wide); the countdown NOT in an
      `aria-live` region (label it, keep ticks off the a11y tree); decorative
      glyphs/ornaments `aria-hidden` with non-empty `alt` on meaningful
      photos. Reference evidence: the live page's only aria attribute is
      `aria-hidden="true"` on a decorative `<i class="fa fa-heart-o">`, and its
      toggler `<button class="navbar-toggler" data-toggle="collapse"
      data-target="#collapsibleNavbar">` has no accessible name at all.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Update TEMPLATES.md **line 3105 (Wedding)** status `[~]` → `[x]` after
      merge (bookkeeping on main, state D). Do NOT touch lines 235 / 3109
      (`wedlock`, already shipped).
- [ ] Update README structure + `docs/ai-context.md` app list.
