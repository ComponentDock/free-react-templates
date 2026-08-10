# Template: Wedlock (Wedding / Event Planner)

## Purpose

Wedlock is a single-page wedding / event-planner website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Wordpress Wedding Themes" category item (see TEMPLATES.md — line
235, Fashion section, and its duplicate at line 3107, Wedding section; the
first `- [ ]` item whose prep did not exist on main), built under a NEW name
with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is an elegant, photo-driven wedding site: a full-screen hero
photo of a bride and groom with confetti (large white serif headline, sans
subline, transparent overlay nav), followed by services ("We arrange the
perfect weddings"), a photo gallery ("Your memories"), a "Get ready with us"
preparation strip, testimonials ("Feedback from our happy couples"), wedding
stories/blog, a "Subscribe for the updates!" newsletter band, and a footer
with office address, phone, and link columns. Brand accents are a warm
orange-red `#E74923` and a deep magenta `#D60058` on near-black / cream
neutrals, with an elegant high-contrast serif for headings and DM Sans for
body. Wedlock recreates that structure section-for-section with matching
layout, colors, typography, and content types (no ColorLib assets copied).

## Design reference (replication findings)

- **Original:** ColorLib "Wordpress Wedding Themes" — a _category/roundup_
  item, not a demo-hosting template. TEMPLATES.md has **TWO copies** of this
  item (lines 235 and 3107 — mark BOTH `[x]` when done).
- **Source link behavior:** `https://colorlib.com/wp/template/wordpress-wedding-themes/`
  does NOT resolve to a demo — it 301-redirects to
  `https://colorlib.com/wp/wedding-planning-wordpress-themes/` (HTTP 200,
  152 KB), the roundup article "10+ Best Wedding WordPress Themes for
  Planning & Photography 2026" by Julia Starlark (published March 24, 2026,
  category "Theme Collections", 0 comments). The roundup's **featured (first)
  theme is "Veil – Wedding Event & Photographer WordPress Theme"**
  (ThemeForest 45924539) — the design shown in the TEMPLATES.md screenshot.
- **Preview URL:** `https://preview.colorlib.com/theme/wordpress-wedding-themes/`
  returns HTTP 404 and the slug is absent from
  `preview.colorlib.com/assets/js/products.js` (preview map; only
  `weddingdreams`, `weddingofficiant`, `wedding2` exist there). Per the
  replication fallback rule, the **screenshot is the primary visual
  reference**; the live demo of the featured theme provides structure +
  tokens.
- **Screenshot:** `wedding-wordpress-themes.jpg` (1200×892, served as AVIF
  by ColorLib; converted to PNG via ffmpeg and verified via browser vision).
  It shows the hero/landing of the featured roundup theme demo (address bar
  in the capture reads `theme.pixflow.net`):
  - full-screen wedding photograph: a bride in a cream lace dress and groom
    in a grey suit walking down stone steps while guests throw colorful
    confetti (pink, blue, gold);
  - **transparent overlay navigation** across the top: left menu in white
    sans-serif — "Our story", "Photos", "When & Where", "Events"; right:
    a **circular monogram logo** (white circle, dark ring/monogram glyph);
  - centered hero text on the photo: large white **high-contrast serif**
    headline "Wedding WordPress Themes" (Playfair Display–like) with a small
    white sans-serif subline "Getting married!";
  - palette: white text on photography; dark near-black behind the logo
    glyph; no flat section backgrounds visible in the capture (photo-driven
    hero).
- **Live demo analyzed (structure + tokens):** the featured theme's own demo
  at `https://veil.ancorathemes.com/` (HTTP 200, 334 KB, title "Veil –
  Wedding Event & Photographer WordPress Theme"; the screenshot's
  pixflow.net host was unreachable/Cloudflare-blocked, the ThemeForest
  preview `preview.themeforest.net/item/veil-.../full_screen_preview/45924539`
  is Cloudflare-gated — used the ancorathemes mirror instead). Stack:
  Elementor sections, RevSlider hero, trx_addons, WooCommerce, MailChimp
  (mc4wp), Contact Form 7, The Events Calendar. Stylesheets: `skins/default/css/style.css`
  (592 KB) + `__custom.css` (79 KB) + `__plugins.css` + `__responsive.css`;
  fonts via Adobe Typekit `use.typekit.net/mdw1mbk.css` (custom serif
  "span", 10 weights 200–900) + Google DM Sans.
- **Section order (1:1, from the live demo's "Wedding Home" page):**
  1. `header` — compact top row (contact/social, `sc_layouts_row`) + main
     row with logo and menu: **Home / Wedding Home / Wedding Photographer /
     Wedding Planner / Wedding Atelier / Announcement / Wedding Shop /
     Photogallery / Horizontal Scroll / Pages** (dropdown: About Us, Our
     Story, RSVP Page, Location, Services, Our Team, FAQ, Pricing, Contacts)
     **/ Tools**; a second fixed header row appears on scroll
     (`sc_layouts_row_fixed`), plus a mobile (tablet) header variant.
  2. **Hero** (RevSlider, full-width photo slider, dark overlay): headline
     "We believe that love is a celebration to be cherished, and we are
     honored to create your dream wedding." + label "Creative director" +
     buttons **About Us / View More / PLAY**.
  3. **Services intro** (light section): H3 "We make any idea and wish come
     true" — short teaser for the services below.
  4. **Services** (`scheme_light_bright`): H1 "We arrange the perfect
     weddings" + lorem paragraph (wedding planning / event services).
  5. **Gallery** (full-width): H1 "Your memories" — photo memories/gallery
     band.
  6. **Preparation strip**: H1 "Get ready with us" + six short lorem items
     (preparation / photography offerings, e.g. dress, venue, cake, photos,
     music, honeymoon).
  7. **Testimonials** (`scheme_light_bright`): H1 "Feedback from our happy
     couples" + three quote paragraphs.
  8. **Wedding stories** (blog): H1 "Wedding stories" — latest stories /
     posts row.
  9. **Newsletter** (`scheme_dark`): H2 "Subscribe for the updates!" —
     MailChimp-style email form.
  10. `footer`: Office block — "Germany — 785 15h Street, Office 478
      Berlin, De 81566", `[email protected]`, "+1 840 841 25 69"; Links
      column (Home / Services / About Us / Portfolio / Contacts); a
      newsletter widget; bottom copyright strip.
- **Screenshot nav anchors vs demo structure:** the screenshot's nav ("Our
  story / Photos / When & Where / Events") is the classic wedding one-pager
  anchor set; the demo's H1 sections map onto it (story → "We arrange the
  perfect weddings", photos → "Your memories", when & where → "Get ready
  with us" location content, events → "Wedding stories"). Implement as a
  one-pager with these four anchor links.

## Design tokens (extracted from `skins/default/css/style.css` + `__custom.css`)

- Brand accent 1: **#E74923** (warm orange-red; 39 uses — primary accent:
  CTAs, links, highlights, hover states).
- Brand accent 2: **#D60058** (deep magenta/pink; 39 uses — secondary
  accent, e.g. alternate highlights / pricing / sale).
- Accent hover shades: **#C9320E** (darker orange-red), **#BD004D** (darker
  magenta).
- Text darks: **#0E0D0E**, **#3C3B3B**, **#3f3d47** (body text);
  near-black dark sections **#040817**, **#000912**.
- Neutrals: **#E3D7CC** (warm cream), **#DED4D9** (light mauve),
  **#FCFCFC** / **#FDFDFD** (near-whites), greys **#A5A6AA**, **#575757**,
  **#797C7F**, **#91888D**.
- Fonts: body **"DM Sans", sans-serif** (`--theme-font-p_font-family`,
  Google Fonts — load via `<link>`); headings/menu/logo/buttons use the
  custom Typekit serif **"span"** (high-contrast elegant serif, 10 weights;
  visually a Playfair Display–class face — recreate with **Playfair
  Display** from Google Fonts, weights 400/600/700).
- Buttons: sharp/geometric — `border-radius` 2–6px (4px dominant); solid
  accent fill + white text; hover flips to darker accent.
- Cards/sections: alternating near-white (`#FCFCFC`/`#FDFDFD`), cream
  (`#E3D7CC`) and dark (`#040817`/`#000912`) bands; `scheme_dark` newsletter
  band.
- Hero: full-bleed photo with dark overlay, white serif headline, white
  sans subline; transparent nav over the photo.
- Imagery: all photos are placeholders in the recreation —
  `https://picsum.photos/seed/wedlock-<n>/<w>/<h>` (deterministic per
  template); brand icons from `lucide-react` + inline SVG; no ColorLib
  assets.

## Requirements

### Requirement: Header — top row and navigation

The system SHALL render a transparent-over-photo (then fixed-on-scroll)
header with the brand logo and the full menu, plus a compact contact/social
top row.

#### Scenario: Header renders over the hero

- **GIVEN** the Wedlock app is rendered
- **WHEN** the top of the page is displayed
- **THEN** a transparent header SHALL overlay the hero photo with the brand
  logo (circular monogram mark + wordmark) on one side
- **AND** the menu SHALL show Home / Wedding Home / Wedding Photographer /
  Wedding Planner / Wedding Atelier / Announcement / Wedding Shop /
  Photogallery / Pages (dropdown with About Us, Our Story, RSVP Page,
  Location, Services, Our Team, FAQ, Pricing, Contacts) / Tools
- **AND** the header SHALL become fixed with a solid background after
  scrolling past the hero

#### Scenario: Mobile menu

- **GIVEN** the Wedlock app is rendered at a mobile viewport
- **WHEN** the hamburger toggle is activated
- **THEN** a full-screen or dropdown menu SHALL show the same items
- **AND** the toggle SHALL expose `aria-expanded` and the menu SHALL be
  keyboard-operable

### Requirement: Hero section

The system SHALL render a full-width photo hero with a serif headline,
subline, and CTA buttons over a dark overlay.

#### Scenario: Hero renders

- **GIVEN** the Wedlock app is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL show a full-bleed wedding photo (confetti couple
  placeholder) with a dark overlay
- **AND** a large white serif headline SHALL read "We believe that love is
  a celebration to be cherished, and we are honored to create your dream
  wedding."
- **AND** a white sans-serif subline and the buttons **About Us**, **View
  More**, and a **PLAY** control SHALL render over the photo
- **AND** the buttons SHALL use the `#E74923` accent (hover `#C9320E`)

### Requirement: Services section

The system SHALL render a services teaser and a "We arrange the perfect
weddings" services block.

#### Scenario: Services render

- **GIVEN** the Wedlock app is rendered
- **WHEN** the services section is displayed
- **THEN** it SHALL show the H3 teaser "We make any idea and wish come
  true"
- **AND** an H1 "We arrange the perfect weddings" with a supporting
  paragraph
- **AND** a row of wedding-planning service cards (icon + title + blurb)
  with the accent colors applied to icons/hovers

### Requirement: Gallery and preparation strip

The system SHALL render a "Your memories" photo gallery and a "Get ready
with us" preparation band.

#### Scenario: Gallery renders

- **GIVEN** the Wedlock app is rendered
- **WHEN** the gallery band is displayed
- **THEN** it SHALL show the H1 "Your memories" with a grid of wedding
  photo placeholders
- **AND** a lightbox or per-item hover treatment SHALL be implemented for
  the photos

#### Scenario: Preparation strip renders

- **GIVEN** the Wedlock app is rendered
- **WHEN** the preparation band is displayed
- **THEN** it SHALL show the H1 "Get ready with us"
- **AND** six short items (e.g. dress, venue, cake, photography, music,
  honeymoon) SHALL render with title + blurb

### Requirement: Testimonials

The system SHALL render a "Feedback from our happy couples" testimonial
section.

#### Scenario: Testimonials render

- **GIVEN** the Wedlock app is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL show the H1 "Feedback from our happy couples"
- **AND** three quote cards (couple name + quote) SHALL render with quote
  styling in the light-mauve/cream treatment

### Requirement: Wedding stories

The system SHALL render a "Wedding stories" blog row.

#### Scenario: Stories render

- **GIVEN** the Wedlock app is rendered
- **WHEN** the stories section is displayed
- **THEN** it SHALL show the H1 "Wedding stories"
- **AND** a row of story cards (photo, category, title, read-more link)
  SHALL render with serif titles

### Requirement: Newsletter band

The system SHALL render a dark "Subscribe for the updates!" newsletter
band with an email form.

#### Scenario: Newsletter renders

- **GIVEN** the Wedlock app is rendered
- **WHEN** the newsletter band is displayed
- **THEN** it SHALL show the H2 "Subscribe for the updates!" on the
  `scheme_dark` (#040817/#000912) background
- **AND** an email input with a submit button SHALL render
- **AND** submitting a valid email SHALL show a success message; an invalid
  email SHALL show a per-field error and SHALL NOT submit

### Requirement: Footer

The system SHALL render a footer with office contact info, link columns,
and a newsletter widget.

#### Scenario: Footer renders

- **GIVEN** the Wedlock app is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the office block ("Germany — 785 15h Street,
  Office 478 Berlin, De 81566", an email address, "+1 840 841 25 69")
- **AND** a Links column SHALL show Home / Services / About Us / Portfolio /
  Contacts
- **AND** a newsletter input SHALL render
- **AND** a bottom strip SHALL render the copyright/credit line

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Wedlock app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose header (with the anchor links Our story /
  Photos / When & Where / Events), hero, services, gallery, preparation
  strip, testimonials, wedding stories, newsletter, and footer inside the
  main landmark in the original's order
- **AND** the document title SHALL be "Wedlock — Wedding & Event Planner"

## Verification checklist

- [ ] `npm run spec:validate` passes.
- [ ] `npm run verify:app -- wedlock` passes: typecheck → lint → vitest
      (100% coverage) → build.
- [ ] Section order matches the original 1:1 (header → hero → services
      intro + services → gallery → get-ready strip → testimonials →
      wedding stories → newsletter → footer).
- [ ] Design tokens applied: accents `#E74923` / `#D60058` (hovers
      `#C9320E` / `#BD004D`), text darks `#0E0D0E`/`#3C3B3B`/`#3f3d47`,
      dark bands `#040817`/`#000912`, neutrals `#E3D7CC`/`#DED4D9`/greys;
      body DM Sans, headings Playfair Display (serif).
- [ ] Hero renders the full-bleed photo with dark overlay, serif headline
      ("…create your dream wedding."), subline, About Us / View More / PLAY
      buttons, transparent nav with circular monogram logo.
- [ ] Header nav matches the demo menu (10 top-level items + Pages
      dropdown), becomes fixed on scroll, and collapses to a working
      accessible mobile menu.
- [ ] Services section shows "We make any idea and wish come true" + "We
      arrange the perfect weddings" with service cards.
- [ ] Gallery ("Your memories") and preparation strip ("Get ready with us",
      6 items) render with photo placeholders.
- [ ] Testimonials ("Feedback from our happy couples", 3 quotes) and
      stories ("Wedding stories") render.
- [ ] Dark newsletter band ("Subscribe for the updates!") validates the
      email input with error/success states.
- [ ] Footer renders office address / email / phone, Links column, and
      bottom copyright strip.
- [ ] All images are picsum-seeded placeholders (no ColorLib assets); icons
      from lucide-react / inline SVG.
- [ ] PR description records source (Wordpress Wedding Themes roundup →
      featured Veil theme), preview-404 fallback, tokens, and renames;
      TEMPLATES.md marks BOTH copies (lines 235 and 3107) `[x]` when done.
