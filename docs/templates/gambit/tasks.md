# Gambit (ColorLib Comodo) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-gambit` by an implementer stream.

## Design notes (replication findings)

- **Original:** ColorLib "Comodo" (Comodo Games) — free Bootstrap 4 gaming /
  game-community website template. Listed in TEMPLATES.md under Bootstrap
  (line 362) with duplicate rows at line 1816 (Gaming) and line 2029
  (Landing Page) — one recreation covers all three rows
  (source: https://colorlib.com/wp/template/comodo/).
- **Live preview REACHABLE:** `https://preview.colorlib.com/theme/comodo/`
  (HTTP 200, ~28.5KB HTML; title "Comodo Games"). DOM + `css/style.css`
  (~93.5KB) extracted and analyzed. Screenshot `comodo-free-template.jpg`
  (1200×946) viewed in browser: dark purple background with a subtle
  geometric grid/mesh pattern, "COMODO GAMES" white uppercase logo +
  play-button mark top-left, white uppercase nav with a neon mint-green
  pill "JOIN US" button top-right, split hero with a large isometric 3D
  illustration (neon-cyan outlined tower + floating wireframe cubes on a
  white isometric platform) LEFT and headline text + circular play button
  ("WATCH THE VIDEO") RIGHT. Screenshot only shows the top; rest specified
  from DOM/CSS.
- **Copy caveat (IMPORTANT):** this is a repurposed salon design — the hero
  headline ("For All Occasion HairStyle is a Must Try Fashion") and pricing
  features ("Basic hair Cut") are hair-salon placeholders, while section
  names are gaming ("Upcoming Games", "Screens Gallery"). Paraphrase to
  gaming-appropriate copy of the same kinds — do NOT render "HairStyle" or
  "hair Cut" text.
- **Brand gradient `#3fcaff → #a4ffb0`** (cyan → mint) — `.primary_btn`
  (gradient bg, `background-size: 200% auto`, hover `background-position:
right center`, text `#22195e`), newsletter band bg, tab active/hover bg,
  2px gradient border-image on tab pills. **Purple base:** `#231a60`
  (darkest), `#2c2172` (navbar bg), `#342b7e` (price block), `#3b328b`,
  `#3c338d` (gradient end), `#22195e` (newsletter h1 / button hover text).
  Pricing cards + footer: `linear-gradient(to right, #231a60 0%, #3c338d
51%, #231a60 100%)`. Card overlay `rgba(44,37,93,0.8)`; star yellow
  `#f8b600`.
- **Font:** Rajdhani 600/700 (headings) + Roboto 400/500/500i (body) via
  Google Fonts — the source CSS `@import`s
  `family=Rajdhani:600,700|Roboto:400,500,500i`; in the recreation put the
  `<link>` in `index.html`. Rajdhani: section titles, tab pills (18px/600),
  game card titles, pricing names. Roboto: nav links (500, 12px, uppercase,
  /100px line-height), buttons (gradient_btn 500 12px uppercase
  letter-spacing 1px), body, blog meta 13px, testimonial quote 18px italic.
- **Signature shapes:** `.gradient_btn` — `border-radius: 10px`, `border:
double 2px transparent`, `background-image: linear-gradient(#342b7e,
#3b328b), radial-gradient(circle at top left, #3fcaff, #a4ffb0)`,
  `line-height: 46px`; hover text `#22195e` + `box-shadow: 0 10px 30px
rgba(130,82,250,0.2)`. Newsletter input pill `border-radius: 45px`, bg
  `#3fcaff`, white text, Subscribe button absolutely positioned inside
  (`right: 20px`, vertically centered). Video play button: 60px circle with
  `pulse-border` 2000ms infinite animation + black play triangle.
- **Ghost titles:** `.main_title` (centered, `margin-bottom: 80px`): `h2`
  72px `#3fcaff` `opacity: 0.1` (line-height 60px) + `h1` solid `#222222`
  with `margin-top: -40px` — the overlapping double-title treatment used in
  EVERY section header.
- **Sections (1:1):** navbar (`#2c2172`, absolute) → hero (dark bg +
  split art/text + video button) → about (heading + text + Learn More +
  right image) → Upcoming Games (4 overlay-title cards) → Recent Update
  (3 gradient-active tabs + image/text panes) → Screens Gallery (4 imgs +
  lightbox) → testimonials (3 slides, stars) → pricing (3 gradient cards,
  middle `active`) → FAQ (6 items) → Latest Blog Posts (3 cards) →
  newsletter (gradient band) → footer (purple gradient, 4 columns).
- **Icons:** original uses Font Awesome (stars, calendar, heart, comments)
  - Linearicons (eye) + flaticon. Recreation: lucide-react for UI icons
    (Star, Calendar, Heart, MessageCircle, Eye, Play, ChevronDown, Menu);
    inline SVG for the logo mark.
- **Placeholders:** `https://picsum.photos/seed/gambit-<n>/<w>/<h>` — 4
  game-card images (e.g. 400×300), 4 gallery screenshots (e.g. 600×450),
  about image (600×450), 3 recent-update images, 3 blog images (600×400).
  Hero game art: inline SVG (isometric tower / floating cubes with cyan
  outlines) — do NOT copy the original PNG.

## Implementation tasks (for the implementer stream)

1. **Scaffold:** copy the simplest existing app (e.g. `apps/onepage`),
   rename to `@free-react-templates/gambit`; run `npm install` at root so
   `package-lock.json` registers the workspace; keep `injectUiSource()` in
   `vite.config.ts` (see `docs/conventions.md`).
2. **Theme tokens** (`src/index.css` `@theme`): `--color-brand: #3fcaff`
   (cyan), `--color-brand-2: #a4ffb0` (mint), `--color-purple-deep:
#231a60`, `--color-purple-nav: #2c2172`, `--color-purple-price: #342b7e`,
   `--color-purple-mid: #3b328b`, `--color-purple-end: #3c338d`,
   `--color-purple-ink: #22195e`, `--color-ink: #222222`, `--color-star:
#f8b600`; Rajdhani 600/700 + Roboto 400/500 Google Fonts `<link>` in
   `index.html`; `.dark` variants per repo conventions.
3. **Navbar** (`components/Navbar.tsx`): absolute, bg `#2c2172`, z-50;
   logo wordmark "Gambit Games" (inline SVG play-button mark + text);
   links Home About Gallery Pages Pricing Games Elements Blog Blog Details
   Contact (uppercase, 12px Roboto 500, white, hover full white); "join us"
   `primary_btn` gradient (hover sweep + `#22195e` text); hamburger mobile
   toggle with `aria-expanded`.
4. **Hero** (`components/Hero.tsx`): dark section (purple base + subtle CSS
   grid pattern, e.g. repeating-linear-gradient lines at low opacity),
   grid split: inline-SVG isometric art left, text right — h2 60px/72px
   bold white gaming headline, 16px white paragraph, pulsing circular
   video-play button (animate-ping style) + "watch the video" 12px
   uppercase.
5. **About** (`components/About.tsx`): `section_gap_top`; left: white
   heading (line-height 45px), paragraph, "Learn More" `primary_btn`;
   right: image (picsum), hidden on mobile.
6. **UpcomingGames** (`components/UpcomingGames.tsx`): `main_title` ghost
   - solid "Upcoming Games"; 4 cards `lg:grid-cols-4 md:grid-cols-2` —
     image + absolute centered overlay band `bg-[rgba(44,37,93,0.8)]` with
     Rajdhani 18px title link (Best Ps4 Games, World Dart 2019, New XBox
     Games, Amarican Football).
7. **RecentUpdate** (`components/RecentUpdate.tsx`): 3 tabs (Live
   Streaming / Upcoming Challanges / Recent Famous Games) — Rajdhani 600
   18px white 50px tall; active + hover = cyan→mint gradient bg + 2px
   gradient border; 3 panes: image + white h1 (45px lh) + p + "Learn
   More"; one pane at a time (useState).
8. **Gallery** (`components/Gallery.tsx`): "Screens Gallery" title; 4
   images with hover Eye icon; click opens a lightbox (modal with large
   image + close).
9. **Testimonials** (`components/Testimonials.tsx`): dark band; 3 slides —
   quote icon, name h4 18px white, 5 yellow Star icons, italic 18px white
   quote (max-w ~555px centered); prev/next + dots carousel.
10. **Pricing** (`components/Pricing.tsx`): 3 cards `lg:grid-cols-3` with
    purple gradient bg (`#231a60→#3c338d→#231a60`); Silver / Golden
    (active highlight) / Platinum; `$69.00` on `#342b7e` block; 3 feature
    list items (gaming features — NOT "hair Cut"); "Order Now"
    `gradient_btn` (double-border gradient outline, 10px radius).
11. **Faq** (`components/Faq.tsx`): "Frequently Asked Questions" title; 6
    accordion rows, one open at a time, chevron icon.
12. **Blog** (`components/Blog.tsx`): "Latest Blog Posts"; 3 cards —
    image, title link, `#ddd` excerpt, meta row (Calendar date, Heart
    count, MessageCircle comments) 13px `#ddd`.
13. **Newsletter** (`components/Newsletter.tsx`): gradient band
    (`#3fcaff→#a4ffb0`), h1 `#22195e` "Subscribe Our Newsletter" + no-spam
    blurb; cyan pill email input with Subscribe button inside (absolute
    right); success state on submit.
14. **Footer** (`components/Footer.tsx`): purple gradient bg; 4 columns —
    About Gambit (brand links: For Business, Premium Plans, Reviews, How
    it Works, Gambit Blog), Company (Product Tour, Pricing, Founding
    Members, Case Studies, Product Updates), Support (Documentation, Data
    Security, Site Performance, Action Plan, Resources), Legal (Terms and
    conditions, Privacy Policy, Cookie Information, Opt-Out); h4 18px 600
    white; links semi-transparent white → white hover; copyright row
    paraphrased ("made with by Free React Templates").
15. **App composition** (`App.tsx`): Navbar → Hero → About → UpcomingGames
    → RecentUpdate → Gallery → Testimonials → Pricing → Faq → Blog →
    Newsletter → Footer.
16. **Tests:** one `describe` per component, scenario-style `it` blocks
    mirroring the spec; 100% coverage required.
17. **Verify:** `npm run verify:app gambit` (typecheck + lint + vitest 100%
    - build) → PR `feat/template-gambit` → merge immediately → mark ALL
      THREE TEMPLATES.md rows (lines 362, 1816, 2029) `[x]` with surge URL +
      `npm run readme:status` on main.

## Fidelity pitfalls

- Do NOT reuse the source name "Comodo" anywhere as the app/package name
  (new name: gambit).
- Do NOT render the salon placeholder copy — hero headline and pricing
  features must be paraphrased to gaming content of the same kinds.
- The source `@import`s Google Fonts inside style.css — in the Vite
  recreation put the fonts `<link>` in `index.html` instead.
- `.gradient_btn` uses a `double 2px transparent` border + layered
  background-image (solid purple gradient UNDER a radial cyan→mint
  gradient) — replicate with a wrapper or border-image; the visible effect
  is a gradient-outlined button with purple fill.
- `.primary_btn` gradient hover is a background-position sweep
  (`background-size: 200% auto`) — implement with `bg-[length:200%_auto]`
  - `transition` + `hover:bg-right`.
- Ghost titles: the 72px cyan `opacity-10` h2 and the solid h1 overlap via
  `-mt-10`-ish negative margin — keep both elements in the DOM for the
  effect and for tests.
- Hero background: original is a JPG photo; recreate as purple base +
  CSS grid pattern (no image asset).
- Recent-update + testimonial sections use background images in the source
  — recreate with solid/gradient backgrounds (dark purple) instead; do not
  copy the PNGs.
- The middle pricing card carries `.pricing_item.active` — keep the
  highlighted treatment (e.g. slight scale or brighter gradient).
- FAQ questions in the source are all identical placeholder boilerplate —
  write six distinct gaming/community questions.
- Original copy is lorem ipsum + repeated blog headlines — paraphrase
  lightly, keep the same content kinds (headline + blurb, plan features,
  date/heart/comment meta).
- The video-play button pulses (`pulse-border` keyframes, 2000ms infinite)
  — keep a subtle pulse animation; it is a distinctive hero element.
