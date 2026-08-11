# Paprika (ColorLib Marco) — Tasks & Design Notes

> Recreation of ColorLib "Marco" — free Bootstrap 4 restaurant website
> template (https://colorlib.com/wp/template/marco/) under the NEW name
> **Paprika** (the red spice — matches the red `#f42f2c` brand accent and
> the food/restaurant theme; single lowercase word, no collision with
> `apps/`, `openspec/specs/`, `docs/templates/` or TEMPLATES.md — verified
> 2026-08-11), per the monorepo naming mandate (never reuse the ColorLib
> source name). Full spec: `openspec/specs/template-paprika/spec.md`.

## Design notes (replication findings)

- **Original:** ColorLib "Marco" — free Bootstrap 4 restaurant website
  template (page `<title>` in the preview reads **"Macro"** — a ColorLib
  typo; the template page + screenshot say "Marco"). Listed in TEMPLATES.md
  under **Bootstrap (216)** line 444 with an IDENTICAL dup row in **Food
  Drinks (31)** line 2686 (both `- [ ]`, nothing shipped) — when shipped,
  mark BOTH rows `[x]` with the paprika surge URL. The recreation brands
  itself **Paprika**.
- **Preview DOM analyzed (verified 2026-08-11):**
  `https://preview.colorlib.com/theme/marco/` — HTTP 200, 31.2 KB HTML +
  `css/main.css` 47.4 KB (Bootstrap 4, linearicons, font-awesome,
  magnific-popup, jquery-ui datepicker, nice-select, owl.carousel,
  animate; Google Fonts **Poppins only** — cf-fonts @font-face blocks,
  weights 100–700, NO display/serif font; the "serif" look in the
  screenshot is Poppins 700 at 60px). Screenshot `marco-free-template.jpg`
  (1200×946) browser-verified: dark hero with fresh-food photo cluster
  right, circular red "MARCO / RESTAURANT." logo top-center, white
  uppercase nav, red "CHECK OUR MENU" button, white "About Our Story"
  split with burger photo right.
- **Section order (1:1, verified from live DOM):**
  1. `header#header` (fixed, transparent) — `.header-top` centered logo
     img + `.container.main-menu` (1px `rgba(255,255,255,0.2)` top/bottom
     borders) with `ul.nav-menu`: Home, About, Menu, Gallery, Blog ▾
     (Blog Home, Blog Single), Pages ▾ (Elements, Level 2), Contact.
     `.header-scrolled`: bg `rgba(34,34,34,0.9)`, logo strip hidden.
  2. `section.banner-area` — height 767px, `hero-bg.jpg` cover;
     `.banner-content` (margin-top 240px): h6 "Wide Options of Choice"
     (uppercase w300 ls 2px) + h1 "Delicious Recipes" (60px w700, 40px
     mobile) + p (max-width 515px) + `.primary-btn` "Check Our Menu"
     (hover → `background: #222`).
  3. `section.home-about-area.section-gap` — white; left `.home-about-left`
     (h1 "About Our Story" + p max-width 490px + "view full menu"
     primary-btn, hover shadow `0 20px 20px 0 rgba(245,63,81,0.2)`); right
     photo.
  4. `section.menu-area.section-gap#menu` — bg `#f9f9ff`; title "What kind
     of Foods we serve for you" + subtitle; `.filters` tabs (12px w500
     `#222`, active = white on red `#f42f2c`): All Menu / Breakfast /
     Lunch / Dinner / Budget Meal / Buffet; 6 `.single-menu` white cards
     (radius 10px, padding 30px, margin-top 20px): h4 name + `.price`
     `$49` red + p (max-width 392px); centered "view full menu" button.
  5. `section.reservation-area.section-gap.relative` — `reservation-bg.jpg`
     cover + overlay `rgba(17,22,24,0.75)`; left h1 "Reserve Your Seats to
     Confirm if You Come with Your Family" + p; right `.form-wrap` WHITE
     (padding 100px 40px): Your Name, Your Email Address, Phone Number,
     Select Date & time (date-picker), select Select Event (Event One–
     Four), button "Make Reservation" (primary-btn uppercase, mt-20).
     Fields: radius 0, border `#eeeeee`, 13px w300, `#999999`, mb 10px,
     no focus shadow.
  6. `section.gallery-area.section-gap#gallery` — bg `#f9f9ff`; title "Food
     and Customer Gallery" + subtitle; same filters; 6 `.single-gallery`
     imgs (no captions).
  7. `section.review-area.section-gap` — `review-bg.jpg` cover, NO overlay,
     NO heading; owl carousel, 4 identical `.single-review` slides
     (centered): img avatar + h4 "Hulda Sutton" + `.star` (checked
     `#ffc000` gold) + italic p (max-width 555px); dots 10×10 idle
     `rgba(244,47,44,0.2)`, active `#f42f2c`, margin-top 50px.
  8. `section.blog-area.section-gap#blog` — white; title "Latest From Our
     Blog" + subtitle; 4 `.single-blog` cards: `.thumb` img (scale 1.1
     hover), `.date` black badge (`#000` white w100 text, padding 2px
     15px, width 115px) "10 Jan 2018", h4 (hover `#f42f2c`), p excerpt,
     "15 Likes / 02 Comments".
  9. `footer.footer-area` — `.footer-widget-wrap` RED `#f42f2c` white
     text: 3 widgets — Opening Hours (Mon–Fri / Sat / Sun 08.00 am –
     10.00 pm), Contact Us (address + two `.number` 24px w600 phone
     lines), Newsletter (promo text + email input + red pill button
     radius 57px height 36px); `.footer-bottom-wrap` `#222` white
     copyright strip ("made with ♥ by Colorlib" → re-brand to Paprika).
- **Design tokens (from `css/main.css`):**
  - Brand red `#f42f2c` (buttons, active filter, prices, blog hover,
    owl active dot, footer band); lighter `#f44a40`; hover shadow
    `rgba(245,63,81,0.2)`.
  - Dark `#222` (headings color, footer strip, button hover bg,
    scrolled header `rgba(34,34,34,0.9)`).
  - Light sections `#f9f9ff` / `#fafaff`; white cards/forms.
  - Gold stars `#ffc000`; form border `#eeeeee`, field text `#999999`.
  - Overlay `rgba(17,22,24,0.75)`; menu card radius 10px padding 30px;
    section padding 120px 0; banner 767px.
  - Font: Poppins 100–700 everywhere (headings 600, banner h1 700,
    eyebrow 300 ls 2px uppercase, fields 300 13px).
  - Button: red bg, line-height 42px, padding 0 30px, uppercase 14px
    w500 white, 0.3s transition, arrow span slides right: 30px → 20px on
    hover; `.primary-btn.white` outline variant for dark bgs;
    reservation submit capitalize.
- **⚠ KEY TRAPS:**
  - TEMPLATES.md has TWO Marco rows (Bootstrap line 444 + Food Drinks
    line 2686) — mark BOTH `[x]` at ship time or the nightly dup-row
    scan will flag an orphan.
  - Page title in the preview is "Macro" (source typo) — use "Marco" in
    docs/PR text, never copy the typo.
  - The review section has NO heading in the source — do not invent one;
    the carousel sits directly under the section top.
  - The review carousel reuses the SAME quote 4× in the source — vary
    quotes slightly for realism, keep structure + gold stars.
  - No forms on the page except the reservation form — the newsletter
    input in the footer is a static field + button (no backend).
  - Menu/gallery filter tabs are static in the source — client-side
    filtering is a fine recreation (no backend).
  - Nav links point to out-of-scope sibling pages (about.html, menu.html,
    gallery.html, blog-home.html, blog-single.html, elements.html,
    contact) — recreate as anchors/placeholders, NEVER build the pages.
  - All imagery is either CSS `background-image` (banner, reservation,
    review) or `<img>` (logo, about, menu cards, gallery, blog thumbs,
    review avatars) — use seeded picsum for everything, `cover`/`center`
    for the three background sections.
  - Footer band is RED (not dark) — the `#222` strip is only the bottom
    copyright row. Don't invert them.
- **Recreation decisions:** Tailwind grid (no Bootstrap); logo = inline
  SVG/typographic red circle badge "Paprika / RESTAURANT."; date input =
  native `<input type="date">` (or styled text input) — keep sharp
  `#eeeeee` 13px/300/`#999999` look; "Select Event" = native `<select>`;
  carousel = all slides visible on desktop or lightweight auto-rotate —
  no owl.carousel; "Make Reservation" validates (name, valid email,
  phone, date, event) → summary line (pure exported function for tests);
  Poppins 400/500/600/700 Google Fonts `<link>` in index.html; document
  title "Paprika — Restaurant Template".

## Task outline

- [ ] Scaffold `apps/paprika` (copy the simplest existing app, rename
      package to `@free-react-templates/paprika`, register workspace in
      root package.json — lockfile via `npm install` at the root)
- [ ] `@theme` tokens: `brand` `#f42f2c`, `ink` `#222`, `light-bg`
      `#f9f9ff`, `gold` `#ffc000`, `field-border` `#eeeeee`, `field-text`
      `#999999`, `overlay` `rgba(17,22,24,0.75)`
- [ ] Poppins `<link>` in `index.html`; document title
- [ ] Header (fixed; logo badge; uppercase nav; scrolled dark state;
      dropdowns)
- [ ] Banner hero (767px; eyebrow / h1 / p / red CTA; hover `#222`)
- [ ] About split (text + photo + "view full menu" button + red hover
      shadow)
- [ ] Menu section (`#f9f9ff`; title; 6 filter tabs; 6 white rounded
      cards with red prices; centered button)
- [ ] Reservation section (photo bg + overlay; left copy; white form
      card; 4 fields + event select + "Make Reservation" with validation + summary)
- [ ] Gallery section (`#f9f9ff`; title; filters; 6 photos)
- [ ] Review carousel (photo bg; avatar + name + gold stars + italic
      quote; red dots)
- [ ] Blog section (title + 4 cards: zoom thumb, black date badge,
      red-hover title, excerpt, Likes/Comments)
- [ ] Footer (red widget band: Opening Hours / Contact Us / Newsletter +
      pill button; `#222` copyright strip)
- [ ] Mobile stacking (single column <768px; banner h1 40px)
- [ ] Tests for every section (100% coverage, TDD), verify with
      `scripts/verify-app.sh paprika`
- [ ] PR: source template + preview URL + tokens + diffs (renames,
      picsum placeholders, re-brand to Paprika); mark BOTH TEMPLATES.md
      rows `[x]` + surge URL + `npm run readme:status`
