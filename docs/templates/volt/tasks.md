# Volt (ColorLib Ionize) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-volt`.

## Design notes (replication findings)

- **Original:** ColorLib "Ionize" — travel/lifestyle blog template with a
  fixed-sidebar layout (source: https://colorlib.com/wp/template/ionize/).
  TEMPLATES.md has TWO copies of this item (lines 265 and 1713) — mark BOTH
  `[x]` when done.
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/ionize/ (HTTP 200,
  full rendered DOM; main stylesheet `css/style.css`, 59KB, plus bootstrap,
  owl.carousel, magnific-popup, aos, ionicons, flaticon, icomoon, etc.).
  Google Fonts **Poppins** (body/UI) + **Abril Fatface** (logo/display).
  Cross-checked against the TEMPLATES.md screenshot
  (`ionize-free-template.jpg`, viewed in browser) — designs match. The demo
  brands itself "ionize"; recreation uses the NEW name **Volt**.
- **Visual design (from DOM + CSS tokens + screenshot):** split-screen blog —
  fixed royal-blue (`#0028ff` @ 60% over a photo) left sidebar (25% width)
  with a large white Abril-Fatface logo, vertical white nav (Home active /
  Travel / Lifestyle / About / Contact) with animated underlines, a
  "Subscribe for newsletter" transparent input with a paper-plane icon, and
  a copyright credit line at the bottom; right side is a light `#f8f9fa`
  masonry blog grid: a featured card with a 3-image carousel and a solid
  blue content block, wide horizontal image+text cards (one per pair
  right-aligned), and rows of three vertical photo cards (340px images, white
  content blocks). Cards flip to solid blue with white text on hover (image
  gets a 70% blue overlay); Read More links are blue, white on hover.
- **Structure (1:1, index page):**
  1. Sidebar `#colorlib-aside` (fixed, 25% ≥992px, full height, padding
     3em 2em 40px; bg photo `cover` + `:after` overlay `#0028ff` opacity .6,
     `z-index: -1`):
     - `#colorlib-logo` h1 mb-4 — "Volt", Abril Fatface 74px (62px ≤1199px),
       lh .8, white, left-aligned.
     - `#colorlib-main-menu` — Home (active, weight 600) / Travel /
       Lifestyle / About / Contact; Poppins 18px 500, white, li mb 10px,
       padding 10px 0; `:after` underline `scaleX(0)→1` (white, 2px) on
       hover/active.
     - `.colorlib-footer` (absolute bottom 20px, padding 0 2em, 17px,
       rgba(255,255,255,0.7)): h3 "Subscribe for newsletter" +
       `.colorlib-subscribe-form` (`.form-group.d-flex`: `.icon` paper-plane
       - `input.form-control` — transparent, border 1px
         rgba(255,255,255,0.2), text/placeholder rgba(255,255,255,0.8), 14px,
         padding-right 40px) + `p.pfooter` credit "Copyright © <year> All
         rights reserved | This template is made with <heart> by Volt".
  2. Mobile (≤991px): sidebar → 320px off-canvas drawer `translateX(-320px)`,
     bg rgba(0,0,0,0.04); fixed hamburger `.colorlib-nav-toggle` (white bars
     → `#000` when active); main + toggle translateX(270px) while open.
  3. Main `#colorlib-main` (float right, 75% ≥992px) → one
     `.ftco-section.ftco-no-pt.ftco-no-pb.bg-light` (`#f8f9fa`),
     `.container.px-0` → `.row.no-gutters` masonry grid of 12 cards:
     - Featured: `.col-md-4.d-flex` `.blog-entry.active` = `.carousel-blog`
       owl-carousel (3 `.item` bg-photo slides) + `.text.p-4`; card bg
       `#0028ff`, text rgba(255,255,255,0.8).
     - Wide rows: `.col-md-8.d-flex` × 2 stacked `col-md-12`
       `.blog-entry.d-md-flex.align-items-center` — `.img` 50% +
       `.text.text-2.p-4` 50%; second entry `.text-2.text-md-right`.
     - 3-up rows: 3 × `.col-md-4.d-flex` vertical `.blog-entry` — `.img`
       340px + `.text.p-4`; one variant `.flex-column-reverse`.
  4. Card `.blog-entry` (bg #fff, transition .3s): `.img` (100% width, 340px,
     `:after` `#0028ff` overlay opacity 0 → .7 hover); `.text.p-4`: h3.mb-2
     (Poppins 20px 400 `#000`) · `.meta-wrap > p.meta` (13px `#bfbfbf`,
     spans mr 10px: calendar+date, folder+category link `#000`,
     comment+count) · excerpt `p.mb-4` · "Read More" `.btn-custom` + arrow
     (blue, white on hover/active). Hover/active: bg `#0028ff`, white text.
  5. Demo sub-pages (travel/lifestyle/about/contact/single.html) NOT
     recreated — index only.
- **Design tokens extracted from the preview CSS (`css/style.css`):**
  - Brand **`#0028ff`** (16 uses): sidebar overlay .6, btn-primary bg/border,
    card hover/active bg, image hover overlay .7, Read More link, meta link
    hover.
  - Ink `#000000` (card h3, meta category links, btn-white text); body
    `#212529`; secondary `#6c757d`; meta `#bfbfbf` 13px.
  - Surfaces: `#fff` page/cards; `#f8f9fa` blog section; sidebar whites
    rgba(255,255,255,0.7/.8).
  - Fonts: **Poppins** (nav 18px 500, h3 20px 400, body 400 1rem lh 1.5);
    **Abril Fatface** (logo 74px lh .8).
  - Buttons: `.btn.btn-primary` `#0028ff`/white, square; `.btn.btn-white`
    white/black; Read More = plain text link + arrow.
  - Radii: none (square cards/buttons); nav underline bar; loader circle
    `#F96D00` not recreated.
  - Spacing: sidebar 3em/2em/40px; card `.text` p-4 (1.5rem); `.img` 340px;
    meta spans mr 10px; nav li mb 10px; logo mb-4. Grid: `.row.no-gutters`
    → use a ~24px gap.
  - Newsletter input: 52px, transparent, 1px rgba(255,255,255,0.2) border,
    white 80% text 14px.

## Implementation tasks

- [ ] Spec-first: `openspec/specs/template-volt/spec.md` already on main
      (prep). Open a `feat/template-volt` branch.
- [ ] Copy the simplest existing blog-style app (e.g. `apps/` blog template
      such as crumb/savor/pawcare or the nearest one), rename package to
      `@free-react-templates/volt`, run `npm install` at root so
      `package-lock.json` registers the workspace (grep
      `free-react-templates/volt`).
- [ ] Ensure `vite.config.ts` registers `injectUiSource()` (see
      docs/conventions.md) and app imports Button/ButtonLink/cn from
      `packages/ui` (knip trap — see repo memory notes).
- [ ] TDD: write tests first per spec requirement, then implement: 1. `Sidebar` — logo (Abril Fatface 74px), vertical nav with active
      underline + hover underline, newsletter form (submit preventDefault + confirmation replaces form), credit line. Desktop fixed 25%. 2. `MobileNav` — off-canvas drawer + hamburger toggle (aria-expanded,
      aria-labels), slide in/out, close affordance. 3. `BlogGrid` — masonry arrangement: featured carousel card (3 slides,
      prev/next aria-labelled controls, blue bg), wide horizontal cards
      (image 50% + text 50%, second-of-pair right-aligned), 3-up vertical
      cards (340px images). 4. `BlogCard` — title/meta (calendar, folder, comment icons)/excerpt/
      Read More; hover flips bg to `#0028ff` with white text and 70% blue
      image overlay (use group + group-hover utilities).
- [ ] Theme tokens in `@theme`: `--color-brand: #0028ff`, ink `#000`, meta
      `#bfbfbf`, section `#f8f9fa`.
- [ ] Poppins + Abril Fatface Google Fonts `<link>` in index.html.
- [ ] Placeholders: `picsum.photos/seed/volt-<n>/<w>/<h>`; lucide-react icons
      (Calendar, Folder, MessageCircle, Send, ArrowRight, Menu, X); sidebar
      bg photo also a seeded placeholder.
- [ ] Paraphrase demo copy: travel/lifestyle post titles instead of the
      single placeholder "A Loving Heart is the Truest Wisdom"; keep the
      meta pattern (Sept. 10, 2019 · Travel · 5 Comment) and excerpt length.
- [ ] Verify: `scripts/verify-app.sh volt` (typecheck + lint + 100% coverage + build). Then push branch, open PR, squash-merge immediately
      (`gh pr merge --squash --delete-branch`).
- [ ] After merge: mark TEMPLATES.md Ionize **BOTH copies** (lines 265 AND 1713) `[x]` with Surge URL `https://free-react-templates-volt.surge.sh` + homepage, run `npm run readme:status`, commit + push. Verify
      `npx knip` + curl the Surge URL.
