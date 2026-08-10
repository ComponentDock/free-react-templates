# Wedlock (ColorLib Wordpress Wedding Themes) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-wedlock`.

## Design notes (replication findings)

- **Original:** ColorLib "Wordpress Wedding Themes" — a category/roundup
  item, NOT a demo-hosting template. TEMPLATES.md lines **235** (Fashion
  section) and **3107** (Wedding section) — mark BOTH `[x]` when done.
  Recreation uses the NEW name **Wedlock** (single word, no collision with
  `ls apps/` or spec folders; wedding-related names already taken: altar,
  groom, nuptia, nuptials, vows).
- **Source link behavior:** `https://colorlib.com/wp/template/wordpress-wedding-themes/`
  301-redirects → `https://colorlib.com/wp/wedding-planning-wordpress-themes/`
  (roundup "10+ Best Wedding WordPress Themes for Planning & Photography
  2026" by Julia Starlark, 2026-03-24). Featured (first) theme in the
  roundup = **Veil – Wedding Event & Photographer WordPress Theme**
  (ThemeForest 45924539) — the design in the TEMPLATES.md screenshot.
- **Preview URL:** `https://preview.colorlib.com/theme/wordpress-wedding-themes/`
  → HTTP 404; slug absent from `preview.colorlib.com/assets/js/products.js`
  (only weddingdreams / weddingofficiant / wedding2 exist). Per
  docs/replication.md fallback rule: **screenshot is the primary visual
  reference**.
- **Screenshot** (`wedding-wordpress-themes.jpg`, 1200×892 AVIF→PNG,
  verified via browser vision; address bar in the capture reads
  `theme.pixflow.net`): full-screen photo of bride (cream lace dress) +
  groom (grey suit) on stone steps, guests throwing pink/blue/gold
  confetti; transparent overlay nav (left white sans links **Our story /
  Photos / When & Where / Events**, right circular monogram logo — white
  circle + dark glyph); centered large white serif headline **"Wedding
  WordPress Themes"** + small white sans subline **"Getting married!"**.
- **Live demo analyzed for structure + tokens:** featured theme demo at
  `https://veil.ancorathemes.com/` (HTTP 200, 334 KB — mirror of the Veil
  demo; screenshot's pixflow.net host 403/404, ThemeForest preview
  Cloudflare-gated). Elementor + RevSlider + trx_addons + WooCommerce +
  mc4wp. Theme CSS: `skins/default/css/style.css` (592 KB),
  `__custom.css` (79 KB). Fonts: Adobe Typekit `use.typekit.net/mdw1mbk.css`
  (custom serif **"span"**, 10 weights) + Google **DM Sans**.
- **Visual design (DOM + CSS tokens + screenshot):**
  - Accents: **#E74923** (orange-red, primary) + **#D60058** (deep magenta,
    secondary); hovers #C9320E / #BD004D. Text darks #0E0D0E / #3C3B3B /
    #3f3d47; dark sections #040817 / #000912; neutrals #E3D7CC (cream),
    #DED4D9 (light mauve), #FCFCFC / #FDFDFD, greys #A5A6AA / #575757 /
    #797C7F / #91888D.
  - Fonts: body **DM Sans** (Google); headings/menu/logo/buttons elegant
    high-contrast serif ("span" ≈ Playfair Display — use **Playfair
    Display** 400/600/700 from Google Fonts).
  - Buttons: sharp, radius 2–6px (4px dominant), solid accent fill, white
    text, darker accent on hover.
  - Hero: full-bleed photo + dark overlay + white serif headline + sans
    subline; transparent nav over photo.
  - Sections alternate near-white / cream / dark bands; `scheme_dark`
    newsletter band.
- **Section order (1:1, demo "Wedding Home"):**
  1. Header: compact top row + logo/menu row (Home / Wedding Home /
     Wedding Photographer / Wedding Planner / Wedding Atelier /
     Announcement / Wedding Shop / Photogallery / Horizontal Scroll /
     Pages [About Us, Our Story, RSVP Page, Location, Services, Our Team,
     FAQ, Pricing, Contacts] / Tools); fixed header on scroll; mobile
     variant with hamburger.
  2. Hero (RevSlider): "We believe that love is a celebration to be
     cherished, and we are honored to create your dream wedding." + label
     "Creative director" + buttons **About Us / View More / PLAY**.
  3. Services intro: H3 "We make any idea and wish come true".
  4. Services: H1 "We arrange the perfect weddings" + lorem paragraph.
  5. Gallery (full-width): H1 "Your memories".
  6. Preparation strip: H1 "Get ready with us" + six short lorem items.
  7. Testimonials: H1 "Feedback from our happy couples" + 3 quotes.
  8. Wedding stories: H1 "Wedding stories".
  9. Newsletter (`scheme_dark`): H2 "Subscribe for the updates!" (mc4wp
     email form).
  10. Footer: Office — "Germany — 785 15h Street, Office 478 Berlin, De
      81566", `[email protected]`, "+1 840 841 25 69"; Links (Home /
      Services / About Us / Portfolio / Contacts); newsletter widget;
      bottom copyright strip.
- **Screenshot anchors vs demo:** nav anchors (Our story / Photos / When &
  Where / Events) map to the demo's H1 sections — implement the one-pager
  with those four anchors.

## Tasks (implementation order)

- [ ] `apps/wedlock` scaffold (copy simplest existing app; package
      `@free-react-templates/wedlock`; `injectUiSource()` in vite.config;
      register workspace + `npm install` at root so package-lock.json
      updates)
- [ ] `src/index.css` theme tokens: `--color-accent: #E74923`,
      `--color-accent-2: #D60058`, darks #040817/#000912, cream #E3D7CC,
      mauve #DED4D9, greys; font-sans = "DM Sans", font-serif = "Playfair
      Display" (Google Fonts `<link>` in index.html)
- [ ] `Navbar` — transparent-over-hero → fixed on scroll; logo (circular
      monogram + wordmark), full menu, Pages dropdown, mobile hamburger
      (aria-expanded, keyboard operable); top contact/social row
- [ ] `Hero` — full-bleed photo (picsum seed wedlock-1), dark overlay,
      serif headline, subline, About Us / View More / PLAY buttons
- [ ] `ServicesIntro` + `Services` — H3 teaser, H1, service cards
      (icon + title + blurb, accent hovers)
- [ ] `Gallery` — "Your memories" photo grid with hover/lightbox
- [ ] `GetReady` — "Get ready with us" + 6 items
- [ ] `Testimonials` — 3 quote cards
- [ ] `Stories` — "Wedding stories" card row
- [ ] `Newsletter` — dark band, H2, email form (zod validation, error +
      success states)
- [ ] `Footer` — office block, Links column, newsletter input, copyright
      strip
- [ ] `App.tsx` composition + document title "Wedlock — Wedding & Event
      Planner"
- [ ] Tests (red→green) for every section; 100% coverage via
      `npm run verify:app -- wedlock`
- [ ] PR: source (roundup → featured Veil theme), preview-404 fallback
      noted, tokens, renames; after merge mark TEMPLATES.md lines 235 AND
      3107 `[x]` + surge URL
