# Clamor (ColorLib Shout) — Tasks & Design Notes

> Prep artifacts prepared on `main`; implementation ships on
> `feat/template-clamor`.

## Design notes (replication findings)

- **Original:** ColorLib "Shout" — personal blog / creative-agency hybrid
  (source: https://colorlib.com/wp/template/shout/).
- **Preview analyzed:** https://preview.colorlib.com/theme/shout/ (HTTP 200,
  "Shout — Blog"). Live DOM + `css/style.css` (complete, readable) parsed for
  structure and tokens; screenshot `shout-free-template.jpg` (1200x946)
  reviewed visually (left hot-pink `#FF63B5` branding panel with "SHOUT."
  logo + "We Are Functional & Creative Agency" white serif headline + tiny
  uppercase colorlib sub-line, three lifestyle image panels with white text
  overlays, centered "Most popular post" / "What's hot" heading, three-column
  white blog card grid, hamburger menu top-right).
- **Visual design:** clean modern blog with a single hot-pink brand accent.
  `#FF63B5` is the brand color (intro panel bg, active nav link, footer
  socials, `btn-primary` bg/border, search button, pagination active/hover);
  hover shade `#ff7dc1`. Whitesmoke page background, white cards/footer,
  `#fafafa` quote + input surfaces. Headings + quote + author name in Tenor
  Sans (serif, editorial feel), body/meta in Open Sans (300). Buttons are
  30px-radius pink pills with a 2px border. Featured area = 30% pink intro
  panel + 70% 5-slide image carousel (600px tall, dark overlay, bottom-pinned
  white title + uppercase meta).
- **Structure (1:1, section order, home page):**
  1. Header `header` (absolute top, padding 2em 0): left `colorlib-logo`
     "Shout." (20px uppercase `#fff` letter-spacing 5px) + right hamburger
     `colorlib-nav-toggle` (44px radius-2, bg `rgba(0,0,0,0.05)`, hover
     black; bars animate to X when open).
  2. Featured flex `#colorlib-featured-flex` (flex, 100%):
     a. `one-forth` 30%: bg `#FF63B5`, height 600px, table-centered: h1
     "We Are Functional & Creative Agency" (Tenor Sans 40px `#fff`),
     h2 sub-line "html5 bootstrap template by colorlib.com" (Open Sans
     12px uppercase letter-spacing 2px `rgba(255,255,255,0.7)`).
     b. `three-forth` 70%: `owl-carousel1` with 5 slides, each
     `featured-img` (600px, bg image, overlay `rgba(0,0,0,0.3)` →
     `0.5` + inset shadow on hover; `.desc` pinned bottom 60px: h2 20px
     `#fff` + meta "Feb 08, 2018 | Web Design | 4" uppercase 14px
     `rgba(255,255,255,0.7)` + arrow icon). Titles: "Make website from
     scratch", "20 Modern Inspirational UI Examples", "Support for
     Legacy Browsers", "An Unobstrusive 'Dashboard' Link" (typo → fix),
     "Fixing Jagged Google Fonts in Chrome".
  3. Blog `#colorlib-blog` (padding 7em 0): centered `intro-heading` — span
     "Most popular post" (10px uppercase `#bfbfbf` w600) + h2 "What's hot"
     (Tenor Sans 34px `#000`). Grid `col-md-4 col-sm-6` (3/2/1 cols) of
     `blog-entry` cards (white, radius 2px, mb 3em, text-center):
     a. Image post: `blog-img` (scale 1 → 1.1 on hover) + `.desc` (padding
     40px 30px): h3 24px `#000`, meta 14px `rgba(0,0,0,0.5)` (date |
     category | comment count), excerpt, `btn btn-primary` "Read More"
     - arrow. Demo titles: "How to become a fashionist?", "30 Places
       you want to visits" (typo → fix), "New Arrival Jeans Original For
       Fashion", "Tips For A Long Travel", "Food For Your Taste".
       b. Video post: `blog-image .video.colorlib-video` (300px, overlay
       `rgba(0,0,0,0.5)` → `0.7`, centered 90px white circle play btn
       with shadow, scale 1.1). "Video Post - Traveler".
       c. Quote post: `blockquote` (bg `#fafafa`, padding 20px, Tenor Sans
       20px gray, no left border) + "— John Doe" + meta + Read More.
       d. Audio post: `blog-audio` (padding-top 30px). "horse Auio Post -
       Sample" (typo → "Audio Post - Sample").
       e. Gallery post: `gallery-post` with 2 `gallery-img` (50% each,
       400px desktop / 250px mobile).
       Optional `.first-letra` drop cap: first letter 110px `#000`.
  4. Instagram `#colorlib-instagram` (padding 7em 0, padding-bottom 0): h2
     span "Instagram" (16px uppercase letter-spacing 1px Tenor Sans `#000`);
     `instagram-entry`: 8 tiles (12.5% / 25% / 50%, height 200px).
  5. Footer `#footer` (padding 6em 0, bg `#fff`): About Me (h2 18px
     uppercase letter-spacing 1px `#000`, portrait, `author-name` "Vanessa
     Morgan" Tenor Sans 18px `#000`, blurb, socials 24px `#FF63B5`) ·
     Latest Blog (h2 + 4 `f-entry` rows: 80x80 absolute thumb + `.desc`
     padding-left 100px: date 13px `#999999` + h3 18px `#4d4d4d`) ·
     Newsletter (h2 + blurb + subscribe form: input bg `#fafafa` border 2px
     `rgba(0,0,0,0.01)` radius 30px, focus `rgba(255,99,181,0.8)` +
     `btn-custom` "Subscribe" width 100% padding 10px 0 16px). Centered
     copyright bar (`span.block`, monorepo credit).
  6. Off-canvas nav `#colorlib-main-nav` (right slide-in, 360px (300px
     mobile), bg `#fff`, z-index 1002): search form (input bg `#fafafa`
     border 2px `#f2f2f2` + pink radius-0 search button padding 16px) ·
     menu ul (uppercase 16px `#000`, Blog active → `#FF63B5`, Single Blog,
     About me, Contact me) · About Me block (head-title 18px uppercase
     letter-spacing 1px, portrait, name, blurb, socials) · Instagram
     head-title + 4 gallery tiles (50% width, 150px, hover overlay +
     white icon).
- **Design tokens extracted from the preview CSS:**
  - Brand pink `#FF63B5` (hover `#ff7dc1`).
  - Text: `#000` / `rgba(0,0,0,0.8)` headings, `#666666` body,
    `rgba(0,0,0,0.5)` meta, `#999999` dates, `#bfbfbf` label, `#4d4d4d`
    latest-blog titles, `#333333` placeholder, `#1a1a1a` copyright.
  - Surfaces: `whitesmoke` body, `#fff` cards/footer/nav, `#fafafa`
    quote/inputs/author, `#f2f2f2` search border/tags.
  - Fonts: "Tenor Sans" (headings, quote, author-name, footer h2,
    instagram h2 span, head-title) + "Open Sans" (body 14px 300 lh 1.8)
    via Google Fonts.
  - Buttons `.btn`: radius 30px, 13px, padding 8px 20px; `.btn-primary`:
    bg `#FF63B5`, `#fff`, 2px border; hover `#ff7dc1`.
  - Cards: radius 2px; `.desc` padding 40px 30px; h3 24px; img zoom 1.1.
  - Featured slides 600px; overlay `rgba(0,0,0,0.3)` → `0.5` + inset
    shadow; desc bottom 60px; h2 20px white.
  - Rhythm: 7em section padding (blog, instagram), 6em footer, 3em card
    margins.
  - Video play: 90px white circle, shadow `0 14px 30px -15px
rgba(0,0,0,0.7)`, 40px icon.
  - Quote: bg `#fafafa`, padding 20px, Tenor Sans 20px gray.
  - Drop cap: 110px `#000` first letter.
- **Recreation name:** Clamor (NEW name — never reuse "Shout"). App folder
  `apps/clamor`, package `@free-react-templates/clamor`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/clamor-<n>/<w>/<h>`); lucide-react icons (Menu,
  Search, Play, MessageCircle, ArrowRight, Calendar, Heart, Facebook,
  Twitter, Dribbble, Instagram); Tenor Sans + Open Sans via Google Fonts
  `<link>` in `index.html`; pink primary `#FF63B5` in `@theme` so shared
  Button/ButtonLink `primary` variants resolve to pink with 30px radius.
  Featured 5-slide carousel renders as a simple auto-advancing slider with
  prev/next arrows. Paraphrase demo copy (same kinds); fix demo typos
  ("Unobstrusive", "places to visits", "Auio Post").
- Reuse `packages/ui` (Button, ButtonLink, Card, cn); adapt the repo
  chrome: this template uses an absolute top-left logo + hamburger with an
  off-canvas menu, NOT the standard Navbar (see docs/conventions.md for the
  chrome contract).

## Tasks

- [x] Write `openspec/specs/template-clamor/spec.md` (Gherkin requirements +
      scenarios reflecting the REAL sections above).
- [x] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/clamor` (copy the closest existing blog app — e.g.
      Edition/Sojourn if merged, else a landing app; rename package to
      `@free-react-templates/clamor`; run `npm install` at root + verify
      `grep -c free-react-templates/clamor package-lock.json` before
      commit).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage: Header (absolute
      logo + hamburger toggle), Featured flex (pink intro panel 30% +
      5-slide image carousel 70% with overlay + meta), Blog grid
      (intro-heading + image / video / quote / audio / gallery cards +
      Read More buttons), Instagram strip (8 tiles), Footer (About Me /
      Latest Blog / Newsletter + copyright), Off-canvas menu (search,
      links, About Me, Instagram tiles).
- [ ] Per-app gate: `bash scripts/verify-app.sh clamor` (typecheck + lint +
      coverage + build) + `npm run spec:validate`.
- [ ] Push `feat/template-clamor`, open PR (source template, preview URL,
      design tokens, what differs), merge immediately.
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main, state D).
