# Trailhead (ColorLib Hikers) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-trailhead`.

## Design notes (replication findings)

- **Original:** ColorLib "Hikers" — blog / magazine template
  (source: https://colorlib.com/wp/template/hikers/). TEMPLATES.md has ONE
  copy of this item (line 264).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/hikers/ (HTTP 200,
  full rendered DOM; stylesheets: `css/style.css` main, plus bootstrap,
  owl.carousel, magnific-popup, jquery-ui, bootstrap-datepicker, aos,
  flaticon, icomoon). Fonts: Google Fonts **Muli 300/400/700 + Playfair
  Display 400/700/900** — Playfair is loaded but UNUSED in the main CSS (Muli
  everywhere). Cross-checked against the TEMPLATES.md screenshot
  (`hikers-free-template.jpg`, viewed in browser) — designs match. The demo
  brands itself "Hikers"; recreation uses the NEW name **Trailhead**.
- **Visual design (from DOM + CSS tokens + screenshot):** clean white
  magazine/blog aesthetic — bold black "Hikers" wordmark (weight 900, 40px)
  top-left, 3 small black circular social icons (Facebook/Twitter/Instagram)
  top-right, centered nav row under a border-top; full-width hero slider with
  dark overlay, small green NATURE chip, large white headline, circular
  author avatar + byline, circular prev/next arrows; bordered strip of 3
  small thumbnail post cards (TRAVEL red, LIFESTYLE amber, NATURE green
  chips); "retro" photo-card section (tall + medium + two small, titles
  bottom-left over gradient); "Popular Posts" (1 large card + 3 compact
  rows); 4 category columns (Sports/Travel/Lifestyle/Nature) with grey View
  All pills; dark grey `#333` footer with white headings, two quick-menu
  link columns, subscribe input + blue button, 5 social icons. All demo post
  titles are the placeholder "The 20 Biggest Fintech Companies In America
  2019" (author "Carrol Atkinson") — paraphrase into hiking/outdoor-themed
  titles.
- **Structure (1:1, section order):**
  1. Mobile menu overlay (`.site-mobile-menu`): close button; body is
     JS-populated in the demo — render a slide-in menu with the nav links and
     social icons.
  2. Header (`.site-navbar.pt-3`, white bg):
     - Row 1: logo left (`h1` "Hikers", black, weight 900, 40px) · right:
       3 social icon circles (30px, bg `#000`, white glyphs, hover
       `#666666`) + hamburger toggle (hidden ≥xl).
     - Row 2 (`border-top`, hidden <xl): centered nav — Homepage (active),
       Lifestyle, Inspiration (dropdown: Architect, Minimal, Interior,
       Furniture; `border-top: 2px solid #2f89fc`), Technology, Latest.
       Links: weight 700, `#000`, hover/active `#2f89fc`; dropdown links
       `#343a40`, hover bg `#f4f5f9` text `#25262a`, min-width 200px.
  3. Hero slider (`.slide-one-item.home-slider` owl carousel, 2 slides):
     each `.site-cover.site-cover-sm.same-height.overlay` (bg photo, padding
     7em 0, overlay rgba(0,0,0,0.6)), content col-lg-6:
     `.post-category.text-white.bg-success.mb-3` "Nature" chip · `h2.mb-4`
     white post title (3rem desktop / 2rem mobile, lh 1.2) · `.post-meta`
     white 13px: 30px circular avatar + "By Carrol Atkinson" + "&ndash;
     February 10, 2019". Arrows: 50×50 circles, white 25px glyphs, absolute
     left/right 10px, top 50%, dark translucent bg, hover bg black.
  4. Featured strip (`.py-5` + `.rounded.border.p-4`): 3 `post-sm-entry`
     links (col-md-6 col-lg-4): figure flex 110px rounded image (hover
     opacity .5) + chip (Travel `bg-danger`, Lifestyle `bg-warning`, Nature
     `bg-success`) + h2 (1rem, lh 1.4, `#000`).
  5. Retro layout (`.site-section` + `.retro-layout`):
     - Left col-md-5: hentry `.img-1.h-100.gradient` — 400px photo,
       gradient overlay (transparent → rgba(0,0,0,0.8) from 18%), chip
       top-left (Travel `bg-danger`), `.text` absolute bottom (max-width
       350px, padding 20px): h2 26px white + date
       rgba(255,255,255,0.5).
     - Right col-md-7: hentry `.img-2.v-height.mb30.gradient` — 300px,
       Nature `bg-success` chip, `.text.text-sm` (h2 18px) + `.two-col
d-block.d-md-flex`: 2 hentry `.v-height.img-2.gradient` side by side
       (Sports `bg-primary`, Lifestyle `bg-warning`), `.text.text-sm`.
     - `.hentry`: display block, radius 4px, overflow hidden.
  6. Popular Posts (`.site-section`): `.section-heading` h2 "Popular Posts"
     (weight 700, `#000`):
     - Left col-lg-6: `.entry2` — img-fluid rounded (mb 30px) · chip · h2
       24px 700 (`#000`) · `.post-meta` (author figure 30px + "By
       <a>Carrol Atkinson</a> &ndash; February 10, 2019"; meta `#b3b3b3`
       13px) · excerpt p `#666666`.
     - Right col-lg-6 pl-lg-4: 3 × `.entry3 d-block.d-sm-flex` — figure
       order-2 (flex 150px, rounded, hover opacity .5) + `.text.mr-4
order-1` (chip, h2 18px 700, date, short excerpt).
  7. Category columns ×4 (`.site-section`, col-lg-4 ×4): Sports / Travel /
     Lifestyle / Nature:
     - `.section-heading.mb-5.d-flex.align-items-center`: h2 + `.ml-auto`
       `.view-all-btn` "View All" (bg `#d9d9d9`, `#000`, 12px 700, padding
       5px 15px, radius 4px; hover bg `#bfbfbf`).
     - `.entry2.mb-5` (large card: image, chip, h2 24px, meta, excerpt) +
       3 × `.entry4 d-block.d-sm-flex` (figure flex 100px, text: chip, h2
       16px 700, date).
     - Chips: Sports `bg-primary`, Travel `bg-danger`, Lifestyle
       `bg-warning`, Nature `bg-success`.
  8. Footer (`.site-footer`, bg `#333333`, padding 4em 0 / 5em desktop):
     - About Us (col-md-4): h3 `.footer-heading` 16px white + p `#737373`.
     - Quick Menu (col-md-3 ml-auto): two `list-unstyled` columns (About Us
       / Advertise / Careers / Subscribes + Travel / Lifestyle / Sports /
       Nature); links `#999999`, hover white, li mb 10px.
     - Subscribe (col-md-4): form `.form-footer-subscribe` — `.form-group
d-flex`: text input (form-control) + submit `.btn.btn-primary
.text-white` "Subscribe" (Bootstrap `#007bff`; use brand `#2f89fc`
       in recreation). Form should prevent default + show confirmation.
     - Connect With Us: 5 icon links (facebook, twitter, instagram, rss,
       envelope).
     - Copyright bar (`border-top` rgba(255,255,255,0.1)): "Copyright
       &copy; <year> All rights reserved | This template is made with
       <heart> by Colorlib" → credit Trailhead.
- **Design tokens extracted from the preview CSS (`css/style.css`):**
  - Brand **blue `#2f89fc`** (13 uses: active nav, hover, dropdown border,
    tag hover); hover **`#046df4`**.
  - Ink **`#000`** (nav 700, headings, logo, social circles); **`#25262a`**
    (dropdown hover text); body gray 300 lh 1.7; entry text `#666666`;
    meta `#b3b3b3`; dropdown links `#343a40`.
  - Surfaces: white; `#edf0f5`/`#f4f5f9` (light blocks); `#d9d9d9`
    view-all (hover `#bfbfbf`); `#f7f7f7` search input; `#f2f2f2` tag chips.
  - Chips: Nature `#28a745`, Travel `#dc3545`, Lifestyle `#ffc107`, Sports
    `#007bff`; white text, uppercase, letter-spacing .2em, 700, .6rem,
    padding 2px 10px, radius 4px.
  - Footer: `#333333` bg; headings white; links `#999999` (hover white);
    text `#737373`; border rgba(255,255,255,0.1).
  - Fonts: **Muli** (300/400/700/900), Google Fonts link.
  - Radii: 4px (chips, hentry, view-all, rounded imgs); 50% (social 30px,
    avatars 30px, slider arrows 50px). `.btn` radius 0.
  - Spacing: site-section 2.5em/5em; footer 4em/5em; entry2 h2 24px mb 30px;
    entry3 h2 18px; entry4 h2 16px (both lh 1.5).

## Implementation tasks

- [ ] Spec-first: `openspec/specs/template-trailhead/spec.md` already on main
      (prep). Open a `feat/template-trailhead` branch.
- [ ] Copy the simplest existing blog-style app (e.g. `apps/` blog template
      such as crumb/savor/pawcare or the nearest one), rename package to
      `@free-react-templates/trailhead`, run `npm install` at root so
      `package-lock.json` registers the workspace (grep
      `free-react-templates/trailhead`).
- [ ] Ensure `vite.config.ts` registers `injectUiSource()` (see
      docs/conventions.md) and app imports Button/ButtonLink/cn from
      `packages/ui` (knip trap — see repo memory notes).
- [ ] TDD: write tests first per spec requirement, then implement: 1. `Navbar` — logo + social circles + centered nav + Inspiration
      dropdown + mobile toggle (desktop + mobile variants render
      duplicate links — use `getAllByRole`). 2. `HeroSlider` — 2+ slides, chip/title/meta overlay, prev/next
      circular controls (aria-labels), autoplay optional. 3. `FeaturedStrip` — 3 post-sm-entry links in bordered rounded strip. 4. `RetroLayout` — tall + medium + two-small photo cards with gradient
      overlay text. 5. `PopularPosts` — 1 entry2 + 3 entry3 rows. 6. `CategoryColumns` — 4 columns × (heading + View All + entry2 + 3
      entry4). 7. `Footer` — About/Quick Menu/Subscribe form (prevent default +
      confirmation, assert `queryByLabelText` absent after submit
      unmounts input)/Connect icons/copyright.
- [ ] Theme tokens in `@theme`: `--color-brand: #2f89fc`, ink `#000`, muted
      `#b3b3b3`, footer `#333333`; chip colors per category.
- [ ] Muli Google Fonts `<link>` in index.html.
- [ ] Placeholders: `picsum.photos/seed/trailhead-<n>/<w>/<h>`; lucide-react
      icons; inline SVG brand icons.
- [ ] Paraphrase demo copy: hiking/outdoor post titles instead of "The 20
      Biggest Fintech Companies In America 2019"; keep author name + dates
      pattern.
- [ ] Verify: `scripts/verify-app.sh trailhead` (typecheck + lint + 100%
      coverage + build). Then push branch, open PR, squash-merge immediately
      (`gh pr merge --squash --delete-branch`).
- [ ] After merge: mark TEMPLATES.md Hikers (line 264) `[x]` with Surge URL
      `https://free-react-templates-trailhead.surge.sh` + homepage, run
      `npm run readme:status`, commit + push. Verify `npx knip` + curl the
      Surge URL.
