# Estately (ColorLib Mondy) — Tasks & Design Notes

> Recreation of ColorLib "Mondy" — real estate / property website
> template (https://colorlib.com/wp/template/mondy/ — "Mondy - Best
> Property Website Template Design") under the NEW name **Estately**
> ("estate" plus the friendly "-ly" family suffix: Wingly, Drivly, Nestly,
> Bookly, Coastly, Restly, Sleeply, Dozely, Soarly, Lodgely, Sneakly,
> Taply, Ascendly, Serverly, Framely, Cargoly; single lowercase word, no
> collision with `apps/`, `openspec/specs/` or `docs/templates/` —
> verified 2026-08-11; "keystone" was already taken), per the monorepo
> naming mandate (never reuse the ColorLib source name).

## Design notes (replication findings)

- **Original:** ColorLib "Mondy" — page title "Mondy | Real Estate HTML
  Template". TEMPLATES.md category: **Bootstrap (216)**, first occurrence
  at line 457 (`- [ ]`, source NOT shipped anywhere). DUP-ROW TRAP: the
  `mondy` slug also appears at line 1314 (Classified Ads 4), line 1546
  (Directory 33) and line 2600 (Real Estate 39) — all `- [ ]` rows of
  the same template; ONE implementation covers all four rows (mark all
  `[x]` with the same surge URL at bookkeeping).
- **Live preview DOM analyzed (verified 2026-08-11):**
  `https://preview.colorlib.com/theme/mondy/` — HTTP 200, ~42 KB HTML
  (REACHABLE, not a 404). Custom CSS in `css/style.css` (~21 KB) +
  Bootstrap 4 `css/bootstrap.min.css` + font-awesome + slicknav.
  Screenshot `mondy-free-template.jpg` (1200×946, viewed in browser)
  matches the live DOM for the visible top half (kitchen-interior hero →
  charcoal search panel → "Sell Faster. Save Thousands." intro).
- **Visual design:** professional real-estate one-pager. Full-bleed hero
  photo (modern kitchen, red cabinetry) with dark translucent overlay;
  white header row (MONDY wordmark logo left, white nav center with Home
  active red underline, "Sign in" + white-outlined "Join us" right);
  dark charcoal `rgba(34,36,43,0.83)` search panel in the hero with red
  active "Buy" tab, white italic search input and red SEARCH button,
  faint italic disclaimer below; white content below starting with the
  big bold dark heading "Sell Faster. Save Thousands.". Clean corporate
  look: red `#ff000a` accent on white + charcoal `#22242b` surfaces;
  Lato headings/nav, Roboto body.
- **Section order (1:1, verified from live DOM):**
  1. Header `header.header-section` — site-logo image left (recreation:
     text wordmark "ESTATELY" + small "REAL ESTATE"); `nav.header-nav`
     right: Home (active, 2px `#ff000a` underline) · About · Buy ·
     Pages (hover sub-menu: About Us · Search Result · Property, white
     bg, shadow `2px 7px 20px rgba(0,0,0,0.15)`) · News · Contact;
     `.user-panel`: "Sign in" plain white link + "Join us" 2px white
     outline button (min-width 130px, padding 8px 15px, margin-left
     25px).
  2. Hero `section.hero-section.set-bg` (bg image `img/hero-bg.jpg`,
     height 824px, padding-top 325px, top-center cover) — centered
     `div.hero-warp` `rgba(34,36,43,0.83)` padding 27px 48px 31px:
     - `.search-type` 5 radio tabs (hidden radios + labels): Buy
       (checked → bg `#ff000a` + white caret below) · Rent · Sell ·
       Property Value · Agents (white Lato 700 labels, padding 11px
       10px, margin-right 15px).
     - `.search-input`: white input (height 71px, padding-left 47px,
       italic, "Search by state, postcode or suburb") + `button.site-btn`
       SEARCH.
     - `p` disclaimer 12px italic `#b6b6b6` lorem.
  3. Intro `section.intro-section.spad` (white) — `.section-title` h2
     "Sell Faster. Save Thousands." (72px `#322429`); TWO rows:
     - A: image right (order-lg-2), text left: h3 "We charge 2% total.
       No hidden fees or upfront costs." + lorem + `a.readmore-btn`
       "Find out more" (18px w700 `#ff000a`, 1px bottom border).
     - B: image left, text right: h3 "How Much Can You Save? We work
       for you, not commission." + lorem + Find out more.
  4. Property `section.property-section` (white) — `.section-title` h2
     "Recently Add Homes" (mb 90px); 3 `col-lg-4 .property-item` cards:
     `div.pi-image` relative + `div.pi-badge` absolute top-left (min-w
     87px, h 50px, padding 13px 10px 0, 18px w700 white): New `#ff000a`
     · Offer `#ffba00` · New `#ff000a`; h3 price $469,000 / $369,000 /
     $560,000; h5 "3 Bedrooms Townhouse"; p lorem; Find out more. Cards
     mb 55px.
  5. Loan `section.loan-section > .loan-warp` (bg `#22242b`, padding
     95px 0 110px) — white `.section-title` h2 "See If You Qualify for a
     Mortgage" + lorem p; `form.loan-form` (flex, max-w 878px centered):
     inputs "Your income" + "Amount needed" (h 61px, padding 10px 25px,
     italic, no border, margin-right 30px) + `button.site-btn` Submit.
  6. Stories `section.stories-section.spad` (white) — col-lg-5 image
     right, col-lg-7 `.about-text` left: h2 "Seller Success Stories"
     (72px line-height 1) + lorem + Find out more.
  7. Footer `footer.footer-section` (bg `#22242b`, padding 110px 0 0) —
     col-lg-4 `.about-widget` (border-right 2px `#45484e`): logo + p +
     `a.site-btn` "WE ARE HIRING"; four col-lg-2 link columns
     (`.footer-widger` h2 18px w500; links 16px opacity 0.7):
     Company / For Buyers / For Sellers / For Renters (5 links each,
     see spec); `.copyright` bar right-aligned (centered mobile), 12px
     uppercase `#676767`: "Copyright © All rights reserved | This
     template is made with ♥ by Colorlib" → rename Estately, neutral
     credit.
- **Design tokens (from `css/style.css`, verified 2026-08-11):**
  - Brand red **`#ff000a`** — `.site-btn` bg, `.readmore-btn` text +
    underline, nav active underline (2px), checked search tab bg,
    `.pi-badge.new`, sub-menu link hover.
  - Amber **`#ffba00`** — `.pi-badge.offer`.
  - Charcoal **`#22242b`** — `.loan-warp`, footer bg; hero panel
    `rgba(34,36,43,0.83)`; divider `#45484e`.
  - Headings **`#322429`** w700; body text **`#6a6a6a`** (15px,
    line-height 2); input text `#3a3a3a`; disclaimer `#b6b6b6`;
    copyright `#676767` (12px uppercase).
  - Fonts: body **'Roboto', sans-serif**; headings/nav/buttons/forms
    **'Lato', sans-serif** (Google Fonts `<link>`s in index.html).
  - Buttons `.site-btn`: uppercase 16px, padding 21px 44px, min-width
    156px, `#ff000a` bg, white text, **square corners** (no radius),
    hover keeps white. Join us outline: 2px solid #fff, padding 8px
    15px, min-width 130px.
  - `.readmore-btn`: 18px w700 `#ff000a` + 1px bottom border (underline
    link).
  - Nav: 16px white Lato; hover/active 2px `#ff000a` underline;
    sub-menu white, shadow `2px 7px 20px rgba(0,0,0,0.15)`, 220px.
  - Search tabs: Lato 700 white; checked bg `#ff000a`, padding 11px
    30px, white caret triangle below.
  - Inputs: white, italic, no border; search h71px pl 47px; loan h61px
    p 10px 25px, margin-right 30px.
  - Headings: `.section-title h2`/`.about-text h2` 72px desktop → 38px
    mobile; h3 30px, h5 18px; `.section-title` centered mb 65px
    (property 90px); `.spad` 110px 0.
  - Badges: absolute top-left, min-w 87px, h 50px, 18px w700 white.

## Implementation tasks (for the implementer)

- [ ] `npm run spec:validate` for `template-estately` before starting
- [ ] Scaffold `apps/estately` (copy simplest existing app, rename
      package to `@free-react-templates/estately`); register workspace
      (`npm install --package-lock-only` if needed)
- [ ] `@theme` tokens: `--color-brand: #ff000a`, `--color-amber:
    #ffba00`, `--color-charcoal: #22242b`, `--color-heading: #322429`,
      `--color-body: #6a6a6a`, `--color-disclaimer: #b6b6b6`; Roboto +
      Lato Google Fonts `<link>`s in index.html; document title
      "Estately — Real Estate"
- [ ] Header component (text wordmark "ESTATELY" + "REAL ESTATE"
      subtitle; Home active / About / Buy / Pages dropdown / News /
      Contact; Sign in + outlined Join us; mobile hamburger)
- [ ] Hero (photo bg + dark overlay; charcoal search panel: 5 radio
      tabs with Buy checked, search input + SEARCH button, italic
      disclaimer; form submit prevented)
- [ ] Intro (Sell Faster. Save Thousands. + 2 alternating image/text
      rows with h3 headings + Find out more links)
- [ ] Property section (Recently Add Homes + 3 cards: New/Offer/New
      badges, prices, "3 Bedrooms Townhouse", Find out more)
- [ ] Loan section (#22242b bg, white title, Your income + Amount
      needed inputs + Submit; submit prevented)
- [ ] Stories (Seller Success Stories: image right, text left,
      Find out more)
- [ ] Footer (#22242b; about widget + WE ARE HIRING button; Company /
      For Buyers / For Sellers / For Renters link columns; copyright
      bar right-aligned, centered on mobile)
- [ ] TDD: tests first per requirement, 100% coverage via
      `scripts/verify-app.sh estately` (typecheck + lint + vitest +
      build)
- [ ] Visual QA against `https://preview.colorlib.com/theme/mondy/`
      (hero overlay panel, red active tab, 72px headings, charcoal
      loan/footer, badge colors, right-aligned copyright)
- [ ] PR description: source = ColorLib Mondy, preview URL, tokens
      (#ff000a, #ffba00, #22242b, #322429, Roboto+Lato, square
      buttons), what differs (Estately brand, text logo, picsum
      placeholders, neutral footer credit, dead links/forms)
- [ ] Bookkeeping on merge: mark lines ~457 (Bootstrap), ~1314
      (Classified Ads), ~1546 (Directory), ~2600 (Real Estate) `[x]` +
      surge URL + `npm run readme:status`

## Pitfalls (from the skill + this prep)

- **Dup rows:** FOUR TEMPLATES.md rows for mondy — ONE implementation,
  all four rows to `[x]`.
- **Name check:** "keystone" is already an app — do not reuse it.
- **Radio tabs:** source hides the radios and styles labels; keep a real
  radio group (accessible, matches source behavior); the checked tab's
  caret is a CSS triangle (`label:after`), not an icon.
- **Square buttons:** `.site-btn` has NO border-radius — don't add
  rounded corners (unlike many other preps).
- **Two fonts:** body Roboto AND headings/nav/buttons Lato — load both
  Google Fonts; mixing them is part of the design.
- **Form submits:** the search form and the loan form must not
  navigate/reload — preventDefault (test asserts no navigation).
- **Decorative images:** `<img alt="">` has no `img` role in Testing
  Library — query decorative strips with `container.querySelectorAll`.
- **Duplicate nav on mobile:** desktop + mobile nav duplicate links in
  the DOM — use `getAllByRole` and index the mobile one last.
- **Family palette check (2026-08-11):** red `#ff000a` + charcoal
  `#22242b` + amber `#ffba00` are unique among preps so far — keep them
  exact; do NOT reuse another prep's brand color.
