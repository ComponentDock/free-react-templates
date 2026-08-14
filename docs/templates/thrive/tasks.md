# Thrive (ColorLib Startright) — Tasks & Design Notes

> Recreation of ColorLib "Startright" — free Bootstrap 5 startup / SaaS
> landing-page website template
> (https://colorlib.com/wp/template/startright/) under the NEW name **Thrive**
> (a single word evoking growth, fitting a startup whose hero says "A big
> business starts small"; single lowercase word, no collision with `apps/`,
> `openspec/specs/` or `docs/templates/` — verified 2026-08-14), per the
> monorepo naming mandate (never reuse the ColorLib source name). Full spec:
> `openspec/specs/template-thrive/spec.md`.

## Design notes (replication findings)

- **Original:** ColorLib "Startright" — modern startup / SaaS landing page:
  dark-teal hero (#10495c) + bold white headline + flat vector illustration
  on an orange (#f2ad5f) panel, "As seen on" press-logos strip, split
  section with a dark-teal right panel, light "Productive with" section
  with an inline testimonial, dark Stats counter band, 6 feature cards,
  light 4-widget footer with a Subscribe form. Bootstrap 5 based (bootstrap
  bundle + tiny-slider + aos + navbar + glightbox + counter + custom.js) +
  custom `css/style.css` (~62 KB) + icomoon icon font. Brand name used in
  the source copy: "Startright". TEMPLATES.md category: **Bootstrap 5 (89)**,
  first occurrence at line 627 (`- [ ]`, source NOT shipped anywhere).
  DUP-ROW TRAP: the `startright` slug ALSO appears at line 1181
  (**Business (365)**) — BOTH `- [ ]` rows of the SAME template; ONE
  implementation covers both rows (mark all `[x]` with the same surge URL at
  bookkeeping).
- **Live preview DOM analyzed (verified 2026-08-14):**
  `https://preview.colorlib.com/theme/startright/` — HTTP 200, ~14 KB HTML
  (REACHABLE). The index page carries the FULL single-page layout (navbar →
  hero → logos strip → "better way" split → "Productive with" → Stats →
  Features → footer — all parsed from the live DOM). Subpages exist
  (solutions.html, plans.html, whyus.html, contact.html) but are OUT OF
  SCOPE for the single-page recreation. Custom CSS `css/style.css` (~62 KB,
  fully extracted for tokens). Screenshot `startright-free-template.jpg`
  (1200×946 AVIF, viewed in browser): dark-teal hero, big bold WHITE
  sans-serif headline "A big business starts small" + orange "Get started"
  button; right — flat vector illustration (woman sitting cross-legged
  working on a laptop, floating business icons: rocket, gears, clock, bar
  charts, browser windows, plants) on a warm orange panel. Below: white "As
  seen on" strip (NYT/Forbes/FOX/BI/NBC greyed logos) → white section with a
  dark-teal right 70% panel carrying a WHITE h2 "A better way to run your
  business" + orange checkmark list → light-grey "Productive with Startright"
  (white quote card w/ round avatar + orange illustration panel) → dark teal
  Stats band (3 big white numbers) → white Features (2×3 cards, circular
  grey icons) → light footer (4 columns, teal Subscribe button). Screenshot
  cuts off the footer bottom bar — that comes from the live DOM.
- **Visual design:** **Poppins** (400/700) everywhere — no serif. Brand
  colors: **orange `#f2ad5f`** (`--bs-primary`: logo, nav hover/active,
  buttons, img-wrap panels, checkmarks, icon-circle hover glyph) + **deep
  teal `#10495c`** (`--bs-secondary`: hero bg, split panel, counter band,
  text-secondary headings, feature hover, Subscribe btn). Neutrals: `#fff`,
  `#212529` body, `#f8f9fa` light bg, `#252837` feature p, `#efefef` icon
  circles + input bg, `rgba(0,0,0,0.5)` / `rgba(255,255,255,0.5)` muted
  text, nav links `rgba(255,255,255,0.7)`. Buttons are **SQUARE**
  (border-radius 0!), padding 12px 20px, orange bg + white text; hover →
  white bg + orange text + shadow 0 15px 30px rgba(0,0,0,0.2). Hero is 100vh
  SOLID teal (not a photo). `.section` 7rem 0; `.logos` mt 100px; footer
  padding 100px 0 70px, 14px. Form inputs radius 7px, height 52px, bg
  `#efefef`.
- **Section order (1:1, verified from live DOM):**
  1. **Navbar** (`nav.site-nav`, absolute top 0 z-9, transparent over the
     teal hero, padding 20px 0): brand **"Startright"** left (orange 20px/
     700 + white "."); links right (14px, padding 10px 15px,
     `rgba(255,255,255,0.7)`, hover/active `#f2ad5f`): **Home** (active) ·
     **Solutions** (dropdown: Sub Menu One, Sub Menu Two, Dropdown → Sub
     Menu One/Two/Three; white bg, shadow, min-width 180px, links #000
     hover #f2ad5f) · **Plans & Pricing** · **Why Us** · **Contact Us**;
     burger (28×32, d-lg-none) + off-canvas mobile menu. Recreation: brand
     "Thrive", same links (nested dropdown may simplify to one level — note
     in PR).
  2. **Hero** (`div.hero`, bg #10495c, 100vh, padding-top 12rem; mobile
     auto/10rem): `div.intro` (z-2, pt 50px): h1.heading "A big business
     starts small" (700 #fff 60px max-w 600px; 40px mobile) + orange
     **"Get started"** button; right `col-lg-8.ms-auto` → `div.img-wrap`
     (orange #f2ad5f, padding 40px, margin-top -400px — overlaps UP over
     the intro; mobile mt 0, mb -5rem) + flat illustration.
  3. **Logos strip** (`div.section.logos`, mt 100px): centered h5 **"As
     seen on"**; 5 greyed press logos (NYT 200px / Forbes 100 / FOX 100 /
     BI 100 / NBC 50). NO brand assets in recreation → 5 grey text
     wordmarks with invented press names (same kind of content).
  4. **"A better way" split** (`div.section.secion-1` — source TYPO "secion",
     rename in recreation): white bg + `:after` teal panel right 70% (top
     50px; 100% mobile): left `col-lg-6` orange img-wrap + illustration;
     right `col-lg-5` `div.contents` (z-2, color #fff): h2 "A better way to
     run your business" (white 40px/700) + p.text-white-50 + `ul.ul-check.
primary` 3 items (orange checkmarks, padding-left 30px) + Get started.
  5. **"Productive with"** (`div.section.section-2.bg-light`): left
     `col-lg-7` white card `.contents` (padding 30px radius 4px) >
     `.contents-inner` (80% ml-auto): h2.text-secondary "Productive with
     Startright" (→ **Thrive**) 40px/700 + 2 p.text-black-50 +
     `div.testimonial-horizontal` (avatar col 80px, img 50px round;
     blockquote italic + author **John Doe / XYZ Inc.**); right `col-lg-5`
     orange img-wrap h-100 + illustration.
  6. **Stats band** (`div.section.bg-secondary.section-counter`): h2
     "Stats" (text-white fw-bold); 3 × `col-md-6 col-lg-4`:
     `span.countup.display-5.text-white` (3rem/300) 244982 · 2488938 ·
     1335 + `span.text-white-50.d-block` Reviews · Downloads · Employees.
     Count-up on view (counter.js) — recreation: count-up on mount/in-view
     with fake timers in tests.
  7. **Features** (white): centered h2 "Features" (fw-bold text-secondary);
     6 feature cards (`col-md-6 col-lg-4`): `a.feature-link` (padding 30px,
     radius 4px, border 2px rgba(0,0,0,0.05), mb 30px; hover border
     #10495c): `span.icon-*` (30px glyph in 80px circle, bg #efefef, #000;
     hover → bg #10495c + glyph #f2ad5f) + h3 16px/700 #000 (hover
     #10495c) + p #252837. Icons: toggle-off · fingerprint · send-o ·
     filter_none · phonelink · code2 → lucide ToggleLeft/Fingerprint/Send/
     Filter/Smartphone/Code2 (probe exports). Titles repeat ×2 in source
     (Easy to use / Fast and Secure / Robust and Intuitive) — VARY to 6
     distinct titles.
  8. **Footer** (`div.site-footer.bg-light`, 14px, padding 100px 0 70px):
     4 widgets — Help (Contact us · Bootstrap 5 · Web Design · Pricing ·
     FAQ), About (About us · Services · Solutions · Team · FAQ), Support
     (Knowledge base · Forum · Contact), Subscribe (email input placeholder
     "Email address", radius 7px 52px bg #efefef + teal "Subscribe"
     submit); widget links rgba(0,0,0,0.5) hover #000; bottom bar copyright
     "© <year> All rights reserved | This template is made with ♥ by
     Colorlib" → **Component Dock link (mandatory)**
     `https://www.componentdock.com/`.
- **Design tokens (from `css/style.css`, verified 2026-08-14):**
  - Brand: **`#f2ad5f`** (orange — logo, buttons, img-wrap panels,
    checkmarks, nav hover/active, feature hover glyph) + **`#10495c`**
    (teal — hero bg, split panel, counter band, text-secondary, feature
    hover border/icon/h3, Subscribe btn). Hover orange `#f4b977`/`#f3b56f`.
  - Neutrals: `#fff`, `#212529` body, `#f8f9fa` light, `#252837` feature p,
    `#efefef` icon circles + input bg, `#000` headings on cards.
  - Font: **Poppins 400/700** (Google Fonts), body AND headings.
  - Buttons: **square (border-radius 0)**, padding 12px 20px, orange bg +
    white text; hover → white bg + orange text + shadow
    0 15px 30px rgba(0,0,0,0.2); `btn-primary-to-outline` hover →
    transparent bg + orange border.
  - Sections: hero solid teal 100vh; split teal panel 70% right (100%
    mobile); counter band teal; light sections #f8f9fa; feature cards
    bordered rgba(0,0,0,0.05) w/ 80px icon circles.
  - Spacing: `.section` 7rem 0; `.logos` mt 100px; footer 100px 0 70px;
    card grid 3-col (2-col md, 1-col mobile).
  - Radius family: 0 (buttons) · 4px (feature cards, contents card) · 50%
    (icon circles, avatar) · 7px (form inputs).
  - Icons: icomoon glyphs → lucide-react equivalents (ToggleLeft,
    Fingerprint, Send, Filter, Smartphone, Code2, Check — probe exports;
    press logos = text wordmarks).
- **Recreation decisions:** Tailwind re-implementation (NO Bootstrap/aos/
  tiny-slider/glightbox deps); transparent navbar over teal hero; hero as a
  static 100vh block (source has no carousel — illustration is a single
  image); split-section teal panel via an absolutely-positioned div
  (right-0 top-12 bottom-0 w-[70%] bg-brand-teal, w-full on mobile) with
  content z-10; counters count-up on view (jsdom-safe: fake timers inside
  `act()`); feature cards as links (dead-end `href="#"` — hover states
  needed); testimonial inline (avatar + italic blockquote); subscribe form
  shows success state (assert input gone); Poppins via Google Fonts `<link>`
  in index.html; doc title "Thrive — Startup Template"; brand "Startright"
  → "Thrive" everywhere. Placeholder images
  `https://picsum.photos/seed/thrive-<n>/<w>/<h>` (3 illustration slots +
  1 avatar; verify the hero seed suggests a working/office scene —
  seed-screening method; person picsum IDs 1027/64/823/996 before pinning).
  Press logos → 5 grey text wordmarks (invented names). Source copy kept
  verbatim (headlines, checkmark items, counter labels, testimonial names,
  nav links, footer link lists, placeholder).

## Tasks (implementation order)

- [ ] Scaffold `apps/thrive` (copy simplest existing app, rename package to
      `@free-react-templates/thrive`; NOT `apps/startright`)
- [ ] `@theme` tokens: `--color-brand: #f2ad5f` (orange), `--color-teal:
  #10495c`, ink `#212529`, muted `#6c757d`-ish, light `#f8f9fa`,
      icon-bg `#efefef`, feature-ink `#252837`; radius family 0/4/50%/7px
- [ ] `index.html`: Poppins Google Fonts `<link>` (400;700), title
      "Thrive — Startup Template"
- [ ] Navbar: TRANSPARENT over hero, brand "Thrive" orange + white dot,
      links Home/Solutions (dropdown)/Plans & Pricing/Why Us/Contact Us,
      Home active; hamburger + mobile menu
- [ ] Hero: 100vh solid `#10495c`, h1 "A big business starts small"
      (60px/700 white, 40px mobile), orange square "Get started" button,
      right orange illustration panel overlapping up (desktop `-mt-400px`
      → tailwind `-mt-[400px]`; mobile mt-0 mb-[-5rem])
- [ ] Logos strip: "As seen on" + 5 grey text wordmarks (invented press
      names), responsive row
- [ ] "A better way" split: white bg + absolute teal panel right 70%
      (mobile 100%), white h2 + muted p + 3 orange-checkmark items +
      "Get started"; orange illustration panel left
- [ ] "Productive with Thrive": bg-light, white card (radius 4px) with 2
      paragraphs + inline testimonial (round avatar, italic quote, John
      Doe / XYZ Inc.); orange illustration right
- [ ] Stats band: teal bg, "Stats" + 3 counters (244982 Reviews ·
      2488938 Downloads · 1335 Employees), count-up on view (fake timers
      in act())
- [ ] Features: "Features" heading + 6 cards (80px grey circle icons,
      title, blurb) with hover states (teal border + teal circle + orange
      glyph); 6 DISTINCT titles (source repeats ×2)
- [ ] Footer: bg-light, 4 widgets (Help / About / Support / Subscribe),
      bottom bar with Component Dock link (mandatory, no Colorlib credit)
- [ ] Subscribe form: email validation, success state replaces input
      (assert input absent via queryByLabelText)
- [ ] Tests first (red) → implementation (green); 100% coverage; watch the
      duplicate-nav-links query pitfall (getAllByRole, index mobile last)
- [ ] `scripts/verify-app.sh thrive` passes; `npm run spec:validate`
- [ ] PR: source template (ColorLib Startright), preview URL, tokens, what
      differs; merge immediately; mark BOTH `[~]`→`[x]` rows (line 627 + 1181) with surge URL `https://thrive.free.componentdock.com` +
      `npm run readme:status`
