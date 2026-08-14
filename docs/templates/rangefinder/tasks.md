# Rangefinder (ColorLib Photographer) — Tasks & Design Notes

> Prep artifacts prepared on `main`. Recreation name: **Rangefinder** (NEW
> name — the ColorLib source keeps its name "Photographer"). Implementation
> ships on `feat/template-rangefinder` per the standard PR flow.

## Design notes

- **Original:** ColorLib "Photographer" — free photography-portfolio template
  (source: https://colorlib.com/wp/template/photographer/). TEMPLATES.md rows:
  line 475 (Photographer category) + duplicate `- [ ]` rows at lines 1134,
  1804, 2462 — **all four rows** must be marked `[x]` with the surge URL on
  shipping.
- **Live preview DOM analyzed (REACHABLE, verified 2026-08-14):**
  `https://preview.colorlib.com/theme/photographer/` (HTTP 200, 20.1 KB,
  `<title>Photographer | HTML Template</title>`). Custom stylesheet:
  `css/style.css` (18.6 KB — token source). Vendor sheets (bootstrap.min,
  font-awesome.min, owl.carousel.min, slicknav.min, magnific-popup) NOT
  copied. Screenshot (`photographer-free-template.jpg`, 1200×946)
  browser-verified 2026-08-14: light minimalist portfolio, 3-row photo grid,
  vertical social rail on the right edge, two-column intro with dark progress
  bars — matches the DOM.
- **Structure observed (1:1):**
  1. `header.header-section`: `a.site-logo` (logo IMAGE → recreate as text
     wordmark "Rangefinder") + `div.header-controls` (hamburger
     `nav-switch-btn` + `search-btn`, transparent borderless icon buttons) +
     `ul.main-menu`: Home / About the Artist / Portfolio (▾ Portfolio 1,
     Portfolio 2, Portfolio 3) / Blog / Elements / Contact. Nav links 13px,
     weight 600, uppercase, `#121212`, `margin-right 45px`, `padding: 25px 0`.
     Dropdown: white, width 220px, shadow `0 15px 50px 1px rgba(0,0,0,0.13)`,
     slide-down on hover.
  2. `div.hero-section`: **3** `div.hero-slider.owl-carousel` × 7
     `div.hero-item` (21 tiles, height 278px, images portfolio/1.jpg…21.jpg).
     Each tile: `a.hero-link` overlay — bg `#060606`, opacity 0→1 on hover,
     centered white h2 "Take a look at my Portfolio" sliding up from
     `top: 50px` (transition 0.5s). Strips auto-scroll horizontally (owl
     autoplay). `div.hero-social-links` pinned bottom-right: white, width
     110px, padding 40px 0, 5 stacked links (pinterest, facebook, twitter,
     dribbble, behance), `#121212` icons, padding 16px 0.
  3. `section.intro-section` (padding 120px 15px 90px; `.intro-warp`
     max-width 1780px): left col — h2 "My name is Sam. I'm a photographer"
     (48px, margin-bottom 25px) + lorem p (16px `#7d7d7d` lh 1.8, margin-
     bottom 45px) + `a.sp-link` "Take a look @my portfolio" (16px, weight
     500, `#212121`, `border-bottom: 3px solid #212121`, padding-right 15px).
     Right col `.skill-warp` (padding-left 83px, padding-top 80px): 3
     `.single-progress-item` (margin-bottom 30px) = 6px bar
     (`.progress-bar-style`, `.bar-inner` fill bg `#212121`, width from
     `data-progress` = 75/100/90) + floating badge 54×40px black, white text
     (the number), `top: 22px` above the bar at the fill's right end + label
     p below (padding-top 28px): Nature / Passion / Portraits.
  4. `footer.footer-section`: bg `#212121`, padding 19px 40px. Right:
     `.footer-social-links` (white icons 17px, margin-left 40px). Left:
     `.copyright` (white 11px weight 500): "Copyright © {year} All rights
     reserved | This template is made with ♥ by Colorlib" → credit becomes
     Component Dock (`https://www.componentdock.com/`).
  5. `div.search-model`: fullscreen overlay, close `+`
     (`.search-close-switch`), `form.search-model-form` > input placeholder
     "Search here.....".
- **Design tokens (from live `css/style.css`):**
  - Font **Poppins** (300/400/500/600) via Google Fonts `<link>`.
  - Ink **#212121** (headings weight 500, sp-link text + border, bar fill +
    badge, footer bg); nav **#121212**; hero overlay **#060606**; body
    **#7d7d7d**; border **#e8e8e8**; white page/submenu/rail/footer text.
  - Type: h1 70px, h2 36px, intro h2 48px, p 16px lh 1.8.
  - NO radii anywhere; CTA = text link with 3px bottom border; borderless
    transparent header icon buttons.
  - Hero tile 278px; social rail width 110px; intro padding 120px 15px 90px;
    footer padding 19px 40px.
  - `#f44336`/`#673ab7` = preloader spinner only, NOT brand colors — do not
    use in the page design.
- **Behavior to recreate:** 3 auto-scrolling photo strips (CSS keyframes
  marquee, pause on hover) with fade-in `#060606` overlay + heading slide-up;
  hover dropdown on Portfolio; search modal open/close (`+` or Escape);
  hamburger mobile menu (slicknav equivalent). Progress bars animate to their
  width with the % badge.
- **Icons → inline SVG:** lucide-react dropped brand icons — use inline SVG
  simple-icons paths for Pinterest, Facebook, Twitter/X, Dribbble, Behance
  (hero rail + footer, 10 icons total). Header hamburger/search and modal
  close: lucide `Menu`, `Search`, `X` (or `Plus` for the modal's `+`).
- **Copy fidelity:** keep nav labels, "My name is Sam. I'm a photographer",
  "Take a look @my portfolio", "Take a look at my Portfolio" overlay, progress
  labels (Nature/Passion/Portraits) and search placeholder verbatim; lorem
  body may be paraphrased (same kind: photographer bio copy); credit line
  swaps Colorlib → Component Dock.
- **Placeholder images (no assets copied):** 21 photos —
  `https://picsum.photos/seed/rangefinder-<n>/600/400` for n=1..21 (mixed
  subjects match the original's nature/portrait/macro mix; the original photos
  are arbitrary stock too — subject-screening is optional here, unlike
  subject-critical heroes). Verify a few seeds render photos, not blank
  frames, before committing.
- **Recreation decisions:** replicate the original header/footer faithfully
  (the original HAS its own nav — do NOT replace with the repo-standard
  Navbar component; no dark-mode toggle, the original is light-only). Add
  Component Dock footer credit. Search modal is client-side state; hero
  autoplay via CSS animation (respect `prefers-reduced-motion`).

## Implementation tasks (for the implementer stream)

1. [ ] Copy the simplest existing single-page app (e.g. `apps/query`) as
       `apps/rangefinder`; rename package to `@free-react-templates/rangefinder`
       in package.json + vite config; `npm install` at root to register the
       workspace; set `public/CNAME` = `rangefinder.free.componentdock.com`
       and `homepage` accordingly.
2. [ ] `src/index.css` — `@theme` tokens: ink `#212121`, nav `#121212`,
       overlay `#060606`, body `#7d7d7d`, border `#e8e8e8`, white; Poppins
       Google Fonts `<link>` in index.html (300/400/500/600). No radii.
3. [ ] Components: `Header` (wordmark + desktop nav + Portfolio hover dropdown + hamburger/search buttons + mobile menu state) → `Hero` (3 marquee
       strips × 7 `HeroTile` with hover overlay + social rail) → `Intro`
       (biography column + `ProgressItem` × 3) → `SearchModal` → `Footer`
       (social icons + copyright + Component Dock credit).
4. [ ] Data: `portfolio` array of 21 entries (seed `rangefinder-<n>`, alt
       text), `skills` array [{label: Nature, value: 75}, {label: Passion,
       value: 100}, {label: Portraits, value: 90}], nav + social link arrays.
5. [ ] Hero autoplay: CSS `@keyframes` marquee per strip (duplicate the tile
       list for a seamless loop), `animation-play-state: paused` on hover;
       `prefers-reduced-motion` → static grid fallback.
6. [ ] Tests (TDD, 100% coverage): Header (links, dropdown hover, hamburger
       toggles mobile menu, search button opens modal), Hero (3 strips × 7
       tiles, overlay on hover, social rail links + aria-labels), Intro
       (heading, copy, sp-link href, 3 progress items with correct widths +
       badges), SearchModal (open/close via button, `+`, Escape), Footer
       (socials, credit link to componentdock.com), App composition (landmarks,
       doc title "Rangefinder — Photography Portfolio"). jsdom note: query
       decorative photos with `container.querySelectorAll('img')` (alt="" has
       no img role); hidden desktop nav links need `{ hidden: true }` if
       responsive-hiding is used.
7. [ ] Run `npm run verify:app -- rangefinder` (typecheck → lint → vitest
       100% → build) and fix until green.
8. [ ] Open PR `feat/template-rangefinder` → merge immediately
       (`gh pr merge --squash --delete-branch`); after merge, mark TEMPLATES.md
       lines 475, 1134, 1804 and 2462 all `[x]` + surge URL, `npm run
    readme:status`, push.
