# Dwell (ColorLib Apart) — Tasks & Design Notes

> Recreation of ColorLib "Apart" — free Bootstrap real-estate/apartment
> template (https://colorlib.com/wp/template/apart/) under the NEW name
> **Dwell** (to dwell = to live/reside — single lowercase word, no collision
> with `apps/`, `openspec/specs/`, `docs/templates/` or TEMPLATES.md —
> verified 2026-08-09), per the monorepo naming mandate (never reuse the
> ColorLib source name).

## Design notes (replication findings)

- **Original:** ColorLib "Apart" — real-estate landing page. Listed in
  TEMPLATES.md under **Bootstrap (216)** (line 333). The recreation brands
  itself **Dwell**.
- **Preview URL (verified 2026-08-09):** `https://preview.colorlib.com/theme/apart/`
  is LIVE (HTTP 200, title "Apart — Colorlib Website Template"). No fallback
  needed. CSS: `css/style.css` (22,968 bytes) + Bootstrap 4 `css/bootstrap.min.css`
  with `--primary:#e3c4a8` override.
- **Visual design (live render + screenshot `apart-free-template.jpg`,
  1200×946, browser-verified — match 1:1):** modern minimalist real-estate.
  White + dark grey + muted beige/tan (`#E3C4A8`). Full-viewport hero photo
  (loft interior) under `rgba(0,0,0,.4)` overlay; white uppercase condensed
  headline (Oswald, letter-spacing .1em); square tan buttons everywhere.
  White "Property Information" split panel overlaps the hero by 100px.
  Apartment cards: 300px photo with title on a tan highlight + price on a
  black highlight, bottom-left. Testimonials: white cards, round avatars,
  italic quotes. News on light `#EDF0F5` bg. Full-width tan social strip.
  White footer, black uppercase headings with tan 2px underline.
- **⚠ KEY TRAPS:**
  - The navbar is TRANSPARENT (absolute over the hero, z-index 99, NO
    background bar). Nav links are `rgba(255,255,255,.6)` idle, `#fff`
    hover/active.
  - The brand logo is "Dwell**.**" — the trailing PERIOD is the tan accent
    (`text-primary`). Keep it.
  - unit-9 labels use the box-shadow "gutter" trick: `background:#e3c4a8`
    (or `#000` for price) + `box-shadow: 10px 0 0 <same color>` so the
    highlight extends 10px past the text end. Match it with inline-block +
    padding + shadow, or a `w-max` bg span.
  - Buttons are SQUARE (`.btn { border-radius: 0px }` overrides Bootstrap)
    with `#e3c4a8` bg and white text — but note the footer subscribe button
    is `rounded-top-right-0` (only top-right square) in the source; the
    visible render is a plain square tan button. Keep square.
  - Source typos to FIX: "482 Square Feets" → "Square Feet"; "Lunch Date"
    → "Launch Date" (the property-list-details items).
  - Section headings: uppercase Oswald 2rem, letter-spacing .2em, with a
    centered 70×2px tan underline (`site-section-heading.w-border`). Footer
    headings: 1.3rem uppercase letter-spacing .1em with a 40×2px tan
    underline on the left.
  - Testimonials: the owl carousel shows ONE slide at a time on desktop with
    centered dots + arrows. Implement as a state carousel (no jQuery).
  - The footer bottom line "made with ♥ by Colorlib" must be REPLACED with
    "© Dwell. All rights reserved." (re-brand, no Colorlib credit).
  - `body h3 { color: #fff }` in the source CSS would make testimonial names
    white — ignore that quirk; testimonial names are rendered dark on the
    white cards (`.font-weight-light` over white card). Use dark text.
  - Footer headings are BLACK on the WHITE footer (`.footer-heading` color
    #000 beats the h3 white rule by specificity) — do NOT make the footer
    dark.
- **Section order (1:1, verified from live DOM):**
  1. **Navbar** (`div.site-navbar.mt-4`, transparent/absolute): logo
     "Apart." (→ "Dwell.") left; right menu: Home (active) / About /
     Apartments (dropdown: Apartments, Rooms, Suites, Sub Menu → Menu One/
     Two/Three) / News / Contact. Mobile: hamburger opens 300px white panel
     sliding from the right (shadow `-10px 0 20px -10px rgba(0,0,0,.1)`).
  2. **Hero** (`div.site-blocks-cover.overlay` — 100vh, min 600px, bg photo
     `hero_bg_2.jpg` cover, `:before` `rgba(0,0,0,.4)`): centered h1
     "Excellent Space For Your Next Home" (white Oswald 4rem uppercase
     letter-spacing .1em), p "1105 Madison Plaza Suite 120 Chesapeake, CA,
     California" (white 1.5rem), `a.btn.btn-primary.px-5.py-3` "Take a Tour".
  3. **Property Information** (`div.featured-property-half.d-flex` inside
     `container` — white, `margin-top:-100px`, shadow
     `0 0 20px -5px rgba(0,0,0,.1)`, 2× 50% cols): image left
     (`hero_bg_1.jpg`); right `.text` (padding 100px): h2 "Property
     Information", lorem p (mb-5), `ul.property-list-details` (mb-5, `#777`,
     li mb 10px) — Property Name: **Marga Luxury Suite** · Room: **2** ·
     Total Area: **482 Square Feet** · Category: **Modern House** · Launch
     Date: Jan 20, 2019 — then `a.btn.btn-primary.px-4.py-3` "Get Details".
  4. **Browse Apartments** (`div.site-section`, padding 7em 0): centered
     w-border heading + lorem; row of 4 `a.unit-9` cards (300px cover,
     `img_1..4.jpg`; title+price labels bottom-left, tan/black highlights):
     Nashville `$130/night` · Baltimore `$230/night` · Austin `$130/night` ·
     Atlanta `$150/night`; centered "Browse All Apartments" button (mt-5).
  5. **Featured Apartments** (`div.site-block-retro.d-block.d-md-flex`):
     col1 (48%) tall card "Baltimore Apartment" `$600/night` (img_2); col2
     (48% ml-auto) two stacked 300px cards "Austin Apartment" `$290/night`
     (img_3) + "Atlanta Apartment" `$1,290/night` (img_1), 8% gutter.
  6. **Love By Our Customers** (`div.site-section.block-13`): w-border
     heading; `nonloop-block-13 owl-carousel` — 6 slides
     (`text-center p-3 p-md-5 bg-white`): round avatar (`person_1..6.jpg`),
     name h3 light-weight, italic quote. One visible at a time + dots +
     prev/next. Names: Megan Smith, Brooke Cagle, Philip Martin, Steven
     Ericson, Nathan Dumlao, Brook Smith.
  7. **News & Events** (`div.site-section.bg-light` — `#EDF0F5` family):
     w-border heading; 3 cards (`col-md-6 col-lg-4`, mb-4): image
     (`img_4/img_2/img_3.jpg`) + `div.p-4.bg-white`: "Jan 20th, 2019"
     (secondary, small, uppercase) + h5 black headline link (paraphrase
     "Fugit nam obcaecati fuga itaque").
  8. **Social strip** (`div.bg-primary` — full-width `#e3c4a8` band): 6
     equal `col-2 text-center py-4` links, white 20px icons: facebook,
     twitter, instagram, linkedin, pinterest, youtube. Hover: `#eec60a` on
     `#ddb795`.
  9. **Footer** (`footer.site-footer`, white, padding 7em 0): 3 cols —
     (1) "About Dwell" lorem (`#737373`) + "Subscribe" form (60px input,
     transparent, border-secondary, placeholder "Enter your email", square
     tan "Subscribe" button); (2) "Navigations" 2×2 links (`#999999`, hover
     white) + "Follow Us" 4 icons; (3) "Watch Live Streaming" — image +
     70×70px white circular play button (absolute center) linking to a Vimeo
     video (use a placeholder `#` link). Bottom bar: "© Dwell. All rights
     reserved."
- **CSS details worth matching:** body Nunito Sans 1rem `#333` lh 1.7; h1-h5
  Oswald; section headings uppercase 2rem ls .2em; hero h1 4rem ls .1em
  uppercase; `.btn` radius 0, padding 20px sides (px-5 py-3 hero / px-4 py-3
  panel); `.form-control` height 60px in footer (font-weight 300);
  unit-9 image height 300px + hover transition .3s; `.text-black` `#000`.
- **Responsive:** ≤991px — 4-up grids → 2-up, navbar → hamburger + slide-in
  panel; ≤767px — grids stack 1-up, retro collage 100% cols (col1 300px +
  8% mb), panel stacks.
- **Icon mapping (icomoon → lucide-react):** icon-menu → `Menu` · icon-play
  → `Play` · icon-facebook → `Facebook` · icon-twitter → `Twitter` ·
  icon-instagram → `Instagram` · icon-linkedin → `Linkedin` · icon-pinterest
  → `Pinterest` (fallback `Link`) · icon-youtube → `Youtube` · dropdown
  chevron → `ChevronDown`.
- **Neighbor check (2026-08-09):** no other spec/app uses the `dwell` name
  (apps/, openspec/specs/, docs/templates/, TEMPLATES.md all clear). The
  brand tan `#e3c4a8` is distinct from sibling real-estate/booking preps
  (e.g. Innkeep `#3e91f7` blue; Voyagely `#f8ba0f` yellow). Keep it exact.

## Tasks (implementation order)

- [ ] Scaffold `apps/dwell` (copy simplest existing app, rename package to
      `@free-react-templates/dwell`; NOT `apps/apart`); `npm install` at
      root so package-lock.json registers the workspace
- [ ] `@theme` tokens: `--color-brand: #e3c4a8`, `--color-brand-dark:
  #ddb795`, `--color-brand-hover: #eec60a`, `--color-ink: #333`,
      `--color-soft: #edf0f5`, `--color-muted: #737373` (per spec)
- [ ] `index.html`: Oswald 400/500/700 + Nunito Sans 400/600/700 Google
      Fonts `<link>`, title "Dwell — Apartment & Real Estate Template"
- [ ] Navbar: transparent/absolute over hero, logo "Dwell." (tan dot),
      links Home/About/Apartments/News/Contact, `rgba(255,255,255,.6)`→`#fff`,
      Apartments dropdown (4+3 items, hover), hamburger + 300px right
      slide-in mobile panel
- [ ] Hero: 100vh (min 600px), seeded picsum bg (`dwell-hero`), overlay
      `rgba(0,0,0,.4)`, h1 "Excellent Space For Your Next Home" (Oswald
      white uppercase 4rem ls .1em), address line, square tan "Take a Tour"
- [ ] Property Information panel: white, `-mt-100px` overlap, shadow
      `0 0 20px -5px rgba(0,0,0,.1)`, image left (`dwell-property`) + text
      right (padding 100px), spec list (fix "Feets"→"Feet", "Lunch"→
      "Launch"), "Get Details" button
- [ ] Browse Apartments: w-border heading (70×2px tan underline), 4 ×
      300px unit-9 cards (Nashville/Baltimore/Austin/Atlanta + prices) with
      tan/black highlight labels (box-shadow gutter trick), "Browse All
      Apartments" button
- [ ] Featured Apartments collage: col1 tall "Baltimore Apartment"
      $600/night + col2 stacked "Austin Apartment" $290/night / "Atlanta
      Apartment" $1,290/night (48%/48%, 8% gutter, stack ≤767px)
- [ ] Testimonial carousel: 6 white slides (round avatar, name, italic
      quote), one visible at a time, dots + prev/next, wraps; seeded
      avatars `dwell-t1..6`
- [ ] News & Events on `#edf0f5` bg: 3 cards (image `dwell-n1..3`, date
      "Jan 20th, 2019" uppercase small, paraphrased headline link)
- [ ] Social strip: full-width `#e3c4a8` band, 6 white lucide social icons,
      hover `#eec60a`/`#ddb795`
- [ ] Footer (white, 7em padding): About Dwell + Subscribe form (email
      validation → confirmation), Navigations 2×2 + Follow Us 4 icons,
      Watch Live Streaming (thumb + 70px white circular play button),
      bottom bar "© Dwell. All rights reserved."
- [ ] Tests first (red) → implementation (green); 100% coverage
- [ ] `scripts/verify-app.sh dwell` passes; `npm run spec:validate`
- [ ] PR: source template, preview URL, tokens, what differs (placeholder
      images, lucide icons, typos fixed, rebranded logo/copyright, React
      carousel instead of Owl); merge immediately; mark TEMPLATES.md "Apart"
      row (Bootstrap, line 333) `[x]` + surge URL + `npm run readme:status`
