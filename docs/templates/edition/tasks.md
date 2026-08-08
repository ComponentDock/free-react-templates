# Edition (ColorLib Sensive) — Tasks & Design Notes

> Prep artifacts prepared on `main`; implementation ships on
> `feat/template-edition`.

## Design notes (replication findings)

- **Original:** ColorLib "Sensive" — editorial/magazine-style blog template
  (source: https://colorlib.com/wp/template/sensive/).
- **Preview analyzed:** https://preview.colorlib.com/theme/sensive/ (HTTP 200,
  "Sensive Blog - Home"). Live DOM + `css/style.css` (minified, complete)
  parsed for structure and tokens; screenshot `sensive-free-template.jpg`
  reviewed visually (clean editorial blog: white bg, serif headline over a
  scenic autumn-mountain hero, three fashion/lifestyle post cards, orange
  accents on active nav + card tags, black footer).
- **Visual design:** classic editorial blog. Orange `#ff9907` is the brand
  accent (nav hover/active, slider label text, Read-More hover, widget-title
  underline, footer links); dark `#222` buttons with orange uppercase text;
  near-black `#3a414e` Lora serif headings on white; `#797979` body text;
  light `#f9f9ff` sidebar widgets; black `#000000` footer. Headings + nav in
  Lora, body/meta in Source Sans Pro.
- **Structure (1:1, section order, home page):**
  1. Header `header_area` (white): logo wordmark (serif), centered nav
     (Home, Archive, Category, Blog Details, Contact — Lora 15px `#3a414e`
     w700, hover/active `#ff9907`), right social icons + search icon;
     sticky variant flips to white + shadow.
  2. Hero banner `hero-banner`: full-width bg image, height 400px (550px
     > =1000px), overlay `rgba(1,3,15,0.2)`, centered white content — category
     > ("Tours & Travels"), serif h1 ("Amazing Places on earth", 30/45px),
     > h4 date ("December 12, 2018").
  3. Blog slider `blog-slider` (owl-carousel): 3 centered cards — image,
     label badge (uppercase 13px, bg `#222`, color `#ff9907`, padding 4px
     40px, e.g. "Fashion"), serif h3 title, meta ("2 days ago"); left/right
     arrow controls (circle buttons on `#f5f9fc` backing, hover bg `#222`).
  4. Main content `blog-post-area section-margin` (left col-lg-8): recent
     posts list `single-recent-blog-post` (mb 60px): thumb with white
     `thumb-info` overlay strip (author + date, 15px `#777`), tag list
     (`tag-list-inline`, Lora `#555`), serif h3 title (21/27px `#3a414e`),
     excerpt (`#777`), `.button` "Read More" (uppercase 13px, bg `#222`,
     color `#ff9907`, 1px solid `#222`, padding 10px 24px → 12px 42px
     desktop, radius 0; hover invert bg `#ff9907` + color `#000022`).
     `blog-pagination`: 2px `#eeeeee` borders, radius 0, color `#222`;
     active/hover border `#222` + color `#ff9907`.
     Right col-lg-4 sidebar `widget-wrap` (widgets: bg `#f9f9ff`, padding
     48px 30px, mb 30px; title 20px w700 + 4px `#ff9907` underline bar at
     bottom, width 20%):
     a. Newsletter — email input (height 50px, radius 0, border
     `rgba(112,111,135,0.2)`) + `.bbtns` (uppercase 13px, bg `#222`,
     color `#ff9907`, 1px solid `#222`, padding 12px 20px, radius 0).
     b. Category (demo "Catgory" — typo, render "Category") — white rows,
     padding 13px 20px, mb 15px; hover shadow `rgba(153,153,153,0.2)` +
     orange text.
     c. Popular Post — thumb with white overlay meta strip (max-width
     160px) + h6 title (16px w700, hover `#ff9907`) + date.
     d. Tag Clouds (demo duplicates "Popular Post" title — bug, render
     "Tag Clouds") — inline tags (white bg, padding 3px 21px, 14px
     `#777`; hover bg `#222` + orange). Demo tags: project, love,
     technology, travel, software.
  5. Footer `footer-area section-padding` (bg `#000000`): About Us (white
     h6 18px w600 + blurb) · Newsletter (input bg `#191919`, width 80%,
     radius 0 + `click-btn` bg `#ff9907`, color `#222`) · Instagram Feed
     (demo "Instragram Feed" — typo, render "Instagram Feed"; 4-col
     `instafeed` grid) · Follow Us (socials `#555555`, hover `#ff9907`).
     Bottom `footer-text` (padding-top 80px, 14px, links `#ff9907`) +
     copyright (monorepo credit).
- **Design tokens extracted from the preview CSS:**
  - Primary orange `#ff9907`; dark `#222` / `#191919` / `#000000`; headings
    `#3a414e`; body `#797979`; meta `#777777` / `#999999` / `#555555`;
    surfaces `#fff` / `#f9f9ff` / `#f5f9fc` / `#f2f3f7`; borders
    `#eeeeee` / `#ededed`.
  - Fonts: "Lora" (h1–h6, nav links; 400/700) + "Source Sans Pro" (body,
    meta) via Google Fonts.
  - Buttons `.button`: radius 0, `1px solid #222`, bg `#222`, color
    `#ff9907`, uppercase 13px w500, padding 10px 24px (12px 42px >=900px);
    hover → bg `#ff9907`, color `#000022`.
  - Newsletter `.bbtns`: padding 12px 20px; footer `.click-btn`: bg
    `#ff9907`, color `#222`.
  - Hero: 400px (550px >=1000px), overlay `rgba(1,3,15,0.2)`, centered
    white content.
  - Widget-title underline: 4px `#ff9907` bar, width 20%, at title bottom.
  - Rhythm: `.section-padding` 110px 0; `.section-margin` 50px (100px
    > =1000px); post mb 60px; widget padding 48px 30px.
- **Recreation name:** Edition (NEW name — never reuse "Sensive"). App
  folder `apps/edition`, package `@free-react-templates/edition`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/edition-<n>/<w>/<h>`); lucide-react icons (search,
  social, calendar, user, chevrons); Lora + Source Sans Pro via Google
  Fonts `<link>` in `index.html`; orange primary in `@theme` so shared
  Button/ButtonLink `primary` variants resolve to `#ff9907` (sharp radius-0
  via theme tokens). Paraphrase demo copy (same kinds); fix demo typos
  ("Catgory", "Instragram Feed", duplicated tag-cloud title).
- Reuse `packages/ui` (Button, ButtonLink, Card, cn) + repo-standard
  Navbar/Footer chrome.

## Tasks

- [x] Write `openspec/specs/template-edition/spec.md` (Gherkin requirements +
      scenarios reflecting the REAL sections above).
- [x] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/edition` (copy the closest existing blog app — Sojourn if
      merged, else a landing app; rename package to
      `@free-react-templates/edition`; run `npm install` at root + verify
      `grep -c free-react-templates/edition package-lock.json` before
      commit).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage: Header (logo + nav +
      social/search icons, sticky), Hero banner (400/550px, overlay, centered
      content), Blog slider (3 cards + arrows), Recent posts list (thumb
      overlay + tag list + title + excerpt + Read More + pagination),
      Sidebar (Newsletter / Category / Popular Post / Tag Clouds), Footer
      (About / Newsletter / Instagram Feed / Follow Us + copyright).
- [ ] Per-app gate: `bash scripts/verify-app.sh edition` (typecheck + lint +
      coverage + build) + `npm run spec:validate`.
- [ ] Push `feat/template-edition`, open PR (source template, preview URL,
      design tokens, what differs), merge immediately.
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main, state D).
