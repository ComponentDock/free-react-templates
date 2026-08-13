# Meadow (ColorLib Ecogreen) — Tasks & Design Notes

> Prep artifacts prepared on `main`; implementation ships on
> `feat/template-meadow`. Source: ColorLib "Ecogreen" — environment /
> wildlife-charity NGO landing page
> (https://colorlib.com/wp/template/ecogreen/).
> Preview: https://preview.colorlib.com/theme/ecogreen/ (HTTP 200;
> 49,115-byte HTML, `css/style.css` ~80 KB parsed; screenshot
> `ecogreen-colorlib-template.jpg` 1200×946 viewed in the browser).

## Design notes (replication findings)

- **Original:** ColorLib "Ecogreen" — green/environment NGO landing
  (Bootstrap 5 + tiny-slider + aos + glightbox; flaticon icon font;
  Poppins for body AND headings).
- **Screenshot vs live DOM:** they MATCH (no drift) — dark charcoal top
  info bar (white ECOGREEN wordmark + leaf accent, contact items, white
  DONATE NOW!) above a bright lime-green navbar (white links + white
  "DONATE NOW" pill); hero = elephant-on-savanna photo, green "SAVE THE
  WORLD" tag, white centered headline, green "GET STARTED" button, 2
  slider dots. Screenshot cuts off after the services row (5 green-blob
  icon cards under "Over 40K+ People Working with us") — every section
  below the fold was confirmed from the live DOM + CSS.
- **Visual design:** brand green `#73b925` over near-white `#f9faf7`;
  dark charcoal `#1c1c1c` top bar; photo bands with green overlays (stats
  .9, newsletter .8) and black overlays (hero .5, footer .8); Poppins;
  signature "blob" icon `border-radius: 0 50% 50% 50%`; green primary
  buttons that invert to outline on hover; light-green tints
  `#d7f1b9`/`#effae4`/`#f4f6f1`/`#f9faf7` for chips, icon borders, blog
  link buttons, alternate bands. Aesthetic: bright, clean, eco-charity.
- **Signature motifs to preserve:**
  - TOP BAR (`#1c1c1c`, padding 1.5em 0): brand wordmark "Meadow" (source
    "Eco<small>Green</small>") + tagline "Environment theme"; 3 contact
    columns (green icons): "Email: @info@email.com" / "Call Us +2 392
    3929 210" / "Location San Francisco, California, USA" (values
    `#b5b5b5`, labels green).
  - NAVBAR: GREEN bar (`.container-xl` bg `#73b925`); white 15px/500
    links Home About Services Projects Blog Contact (padding ~25px);
    white skewed "Donate Now!" btn-custom (heart icon, uppercase 13px,
    `#1c1c1c`, `skewX(-35deg)` pseudo, width 250px); mobile "Menu"
    hamburger → slide-down drawer; scrolled bg `#7bc628`.
  - HERO SLIDER (650px, 2 slides): bg photo + black overlay .5 + shadow
    `0px 20px 35px -30px rgba(0,0,0,0.26)`; centered col: uppercase
    eyebrow "Save the World" (`rgba(255,255,255,0.7)`, 14px, ls 2px) +
    white 40px/400 h1 + gray p + green "Get Started" pill (arrow icon);
    dot nav bottom-center; slides: "Make the World Green Again" / "Help
    Us to Save Animals".
  - SERVICES (white): subheading "Services" + h2 "Over 40K+ People
    Working with us" (green `<span>`); 5 cards (padding 30px, radius
    2px): 70px green blob icon + 50px white glyph + 22px/500 title +
    blurbs — Recycling / Water Refine / Ecosystem / Solar Energy / Save
    Animals; hover icon → white.
  - CAMPAIGN (bg `#f4f6f1`): subheading "Project" + h2 "Our Campaign";
    4 photo cards (312px img, glightbox, hover round search icon top-
    right `50% 50% 50% 0`): green sub chip on `#effae4` (Ecology/Water/
    Planting) + 20px title + p + green progress bar (70%, green label,
    34px square end-cap) + "Raised: $9800 / Goal: 15000" + green "Donate
    Now!" — 4 DISTINCT values (source repeats 70%/$9800/15000).
  - DONATE CTA (`.ftco-image`: photo + right 53% `#f9faf7` overlay):
    subheading "Become A Volunteer" + h2 "Join Our Event & Helping us by
    our Donation" + p + 3 `services-2` cards (white, radius 4px): 80px
    icon, 1px `#d7f1b9` border, blob radius, green 40px glyph — Donate
    Now (donation) / Project Sponsor (ecosystem) / Be A Volunteer
    (charity); hover icon → green.
  - STATISTICS (photo + GREEN `#73b925` overlay .9): white subheading
    "Great Reviews for our services" + h2 "Technical Statistics"; 4
    counters (`counter-wrap-2`: `rgba(255,255,255,0.1)` bg, radius 4px):
    white icon + 44px/500 white number (ls 2px) + caption — $60M Fund
    Raised / 9200 Completed Projects / 5800 Donation / 2750 Volunteer.
  - VOLUNTEERS (white): subheading "Meet Our Volunteer" + h2 "Our
    Volunteer"; 4 staff cards: 200px round photo + white text card (width
    93%, padding 110px 30px 30px) with name, green uppercase 14px
    "Volunteer", 34px green circle socials (twitter/fb/google/instagram),
    bio — 4 DISTINCT names (source repeats Jason Smith ×3).
  - TESTIMONIALS (bg `#f4f6f1`): subheading "Testimonial" + h2 "Happy
    Customers"; slider of white cards (radius 4px, shadow `0px 30px 33px
-41px rgba(0,0,0,0.24)`): 40px green quote circle absolute top -20px
    left 30px + quote + round avatar + name + position — 3+ DISTINCT
    (source repeats Roger Scott ×3).
  - FUND-RAISED BANNER (white): h2 "Do You Care Our Mother Earth Like We
    Do?" + 2 paragraphs + `.fund-raised` (`#f9faf7`, padding 10px 30px,
    bleed `margin-left: -48px`): 60px green heart + 40px green "$920,000"
    - "Funds raised by 1200 people".
  - BLOG (white): subheading "Our Blog" + h2 "Recent From Blog"; 4
    cards: photo + meta (Admin / Feb. 22, 2021 / 3 Comments) + 20px title
    - snippet + 30×30 `#d7f1b9` link button (hover green) — 4 DISTINCT
      eco titles (source repeats one ×4).
  - NEWSLETTER (photo + GREEN overlay .8): white subheading "Newsletter"
    - white 30px/600 h1 "Subscribe for Newsletter" + white "Subscribe
      now!" button (green text, hover transparent).
  - FOOTER (photo + black overlay .8): 4 widgets — brand (28px white
    wordmark + green accent + tagline + blurb + 30px green square socials
    radius 4px) / "Services" 8 links with arrows (fix source typo "Solar
    Enerfy") / "Recent Posts" (2 rows: 50px round thumb + date + 16px
    white title — 2 DISTINCT titles, source repeats) / "Have a
    Questions?" contact lines (address, phone, email); copyright →
    Component Dock credit.
- **Tokens (from css/style.css):** brand green `#73b925` (70 uses —
  navbar, buttons, icons, subheadings, progress, overlays), `#7bc628`
  (scrolled nav), tints `#d7f1b9` (icon borders, blog btn) / `#effae4`
  (sub chips) / `#f4f6f1` (bg-light bands) / `#f9faf7` (body bg, donate
  overlay, fund-raised bg), dark `#1c1c1c` (top bar, btn-custom text),
  black overlays (hero .5, footer .8), body text `#8c8c8c` (Poppins 16px
  / lh 1.8), top-bar values `#b5b5b5`, nav links
  `rgba(255,255,255,0.8)`/`#fff`, footer text `rgba(255,255,255,0.9)`;
  radii — blob `0 50% 50% 50%` (services 70px, services-2 80px),
  inverted `50% 50% 50% 0` (gallery hover icon), cards 2px (services) /
  4px (services-2, blog, testimony, counters, footer socials), 50% round
  (staff photos, avatars); shadows hero `0px 20px 35px -30px
rgba(0,0,0,0.26)`, testimony `0px 30px 33px -41px rgba(0,0,0,0.24)`;
  green overlays stats .9 + newsletter .8, black hero .5 + footer .8.

## Tasks (implementation order)

1. Scaffold `apps/meadow` from the simplest existing app; rename
   package to `@free-react-templates/meadow`; `public/CNAME` =
   `meadow.free.componentdock.com`; homepage
   `https://meadow.free.componentdock.com`; `npm install` at root so
   the lockfile registers the workspace (verify with
   `grep -c "free-react-templates/meadow" package-lock.json`).
2. `src/index.css` `@theme` tokens (see spec): brand `#73b925`, deep
   `#7bc628`, mint `#d7f1b9`, mint-soft `#effae4`, mist `#f4f6f1`,
   canvas `#f9faf7`, ink `#1c1c1c`, body `#8c8c8c`, faint `#b5b5b5`;
   Poppins `<link>` in `index.html`; register `injectUiSource()` in
   `vite.config.ts` (copy from any app).
3. Top bar (dark `#1c1c1c`): brand + tagline + 3 contact items (green
   icons: Mail, Phone, MapPin from lucide).
4. Navbar (green bar): white links + "Donate Now!" (heart icon, skewed
   white shape) + accessible mobile drawer (solid bg, tappable — user
   tests on phone).
5. Hero slider (state-based, dot nav + autoplay; 2 slides; picsum
   seeds `meadow-hero-1` savanna-like, `meadow-hero-2` forest/nature —
   screen before pinning; black overlay).
6. Services (5 cards, distinct blurbs) → Campaign (4 photo cards with
   green progress bars + DISTINCT raised/goal + Donate Now! buttons).
7. Donate CTA band (3 services-2 cards, right-side `#f9faf7` overlay)
   → Statistics band (green overlay, 4 counters) → Volunteers (4
   distinct staff cards, round photos, socials).
8. Testimonials slider (state-based; 3 distinct customers with generic
   roles) → Fund-raised banner (heart + $920,000) → Blog (4 distinct
   titles).
9. Newsletter band (green overlay + white Subscribe button) → Footer
   (dark, 4 widgets, Component Dock credit; inline SVG brand icons —
   lucide-react has no brand icons).
10. Picsum seeds: verify each seed renders a plausible subject before
    pinning (hero slides, campaign ×4, staff ×4, avatars ×3, blog ×4);
    avoid known-bad ids (91/177/338/65/1005/342/838); verified-good
    person ids: 1027, 64, 823, 996.
11. Tests first (TDD) mirroring the spec scenarios; 100% coverage;
    `bash scripts/verify-app.sh meadow` green; PR + immediate squash
    merge; then bookkeeping.

## Pitfalls / notes

- The source demo repeats content everywhere — recreate with DISTINCT
  values: 5 service paragraphs (same Lorem line), 4 campaign items
  (70% / $9800 / 15000 repeated on all four), 4 volunteers (Jason
  Smith ×3 — Jeffrey Rockenson is the only other name), 3+
  testimonial customers (Roger Scott ×3), 4 blog titles (one title ×4),
  2 footer recent-post titles (one title ×2). Never ship the repeated
  filler.
- The brand green `#73b925` is EVERYWHERE (navbar bg, buttons, icons,
  subheadings, progress bars, social icons, footer accents, the stats +
  newsletter band overlays). Don't substitute Bootstrap's default
  `#0d6efd` — the template's `.btn-primary` is overridden with
  `background: #73b925 !important`.
- Signature icon shape: `border-radius: 0 50% 50% 50%` (three rounded
  corners — "blob") on services (70×70, solid green, white glyph) and
  donate cards (80×80, 1px `#d7f1b9` border, green glyph). Hover flips:
  services icon → white bg; services-2 icon → green bg.
- Green overlays: stats `.9` + newsletter `.8` over photos; black
  overlays: hero `.5` + footer `.8`; donate section has an off-white
  `#f9faf7` overlay on the RIGHT 53% only (content sits on the light
  side) — recreate with a partial gradient/absolute layer.
- Source typos to fix: service card "Recyling" → "Recycling"; footer
  link "Solar Enerfy" → "Solar Energy".
- lucide-react has no brand icons (Twitter/Facebook/Instagram/Google) —
  inline SVGs; probe EVERY lucide export with the typeof check before
  importing (renamed exports throw "Element type is invalid" at
  runtime). Flaticon classes (recycle/water/ecosystem/solar-energy/save/
  donation/charity/heart) → lucide equivalents (Recycle, Droplets,
  Sprout/Globe, Sun, PawPrint/Leaf, HeartHandshake, HandHeart, Heart).
- No `[~]`/`[x]` markers were set by the prep stream — implementer
  claims via the usual `[~]` push on `feat/template-meadow`.
- No `colorlib` string anywhere in `apps/meadow/*` — provenance lives
  only here, TEMPLATES.md, and the PR. Testimonial roles must not say
  "Designer at Colorlib".
- Never write a literal `tel:+<digits>` URI in source (secret-scan
  masker rewrites it); compute from a spaced display string at runtime
  or render as plain text.
- Mobile header: past templates shipped transparent mobile menus — make
  sure the mobile drawer is solid and tappable (user tests on phone).
- jsdom 30 has no localStorage — copy the MemoryStorage polyfill from
  `apps/cura/src/test/setup.ts` into the new app if anything touches it.
- TEMPLATES.md lists "Ecogreen" TWICE (lines 577 and 1556) —
  bookkeeping must mark BOTH rows `[x]` with the same live URL.
