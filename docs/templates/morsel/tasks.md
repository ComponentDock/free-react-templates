# Morsel (ColorLib Bona) — Tasks & Design Notes

> Prep artifact for the PREP stream. Implementation ships later on
> `feat/template-morsel` by an implementer stream.

## Design notes (replication findings)

- **Original:** ColorLib "Bona" — food blog/magazine template
  (source: https://colorlib.com/wp/template/bona/).
- **Preview analyzed (HTTP 200):** https://preview.colorlib.com/theme/bona/
  — live DOM fetched, `layout-1/css/styles.css` +
  `layout-1/css/responsive.css` parsed for tokens; screenshot
  `bona-food-blog-website-template.jpg` (in TEMPLATES.md) used as visual
  cross-check.
- **Visual design:** clean light magazine/blog layout. White header with
  text-style logo ("Bōna"), 3 nav links separated by thin grey dividers,
  right-aligned search bar on a pale `#F5F7F6` field. Full-width 300px
  banner strip of abstract blue ink-marble art (no text). Blog grid of
  white cards on a very light blue-grey `#EDF3F3` background: normal
  cards (image, circular avatar overlapping the image, centered h4
  title, light-grey stats bar with heart/comments/eye), extra-big split
  cards (image 50% / info 50% with uppercase category tag, excerpt,
  author avatar + name + date), extra-small compact cards. Centered
  periwinkle `#C3D8F5` "LOAD MORE" rectangle button. White footer in 3
  columns: brand + copyright + 5 circular blue `#498BF9` social icons;
  "CATAGORIES" (sic) uppercase links; "SUBSCRIBE" email input with
  envelope submit.
- **Structure (1:1, section order):**
  1. Header: logo ("Morsel" text), links Home / Categories / Features
     (60px tall, 1px `#eee` dividers, hover bg `#eee` + blue text),
     search field right (magnifier icon + "Type of search").
  2. Slider banner: full-width 300px background image (abstract blue
     marble), no text.
  3. Blog area (`#EDF3F3`, centered, ~70px top padding): 3-col grid
     (11× `col-lg-4 col-md-6` + 2× `col-lg-8 col-md-12` wide slots):
     - post-style-1 ×5 (normal): image (max-height 200px) → circular
       avatar 70px (7px white border, -40px overlap) → centered h4
       title → meta bar (3 equal cols: ♥ 57 · 💬 6 · 👁 138,
       `#EDF3F3` bg, 45px tall).
     - post-style-2 ×3 (extra-big, wide `col-lg-8`): image 50% left,
       info 50% right (30px padding): h6 uppercase tag (HEALTH), h4
       title, lorem excerpt, avatar row (avatar + "Lora Palmer" +
       "on Sep 29, 2017 at 9:48am"), meta bar.
     - post-style-3 ×1 (extra-medium): same as style-2 but full-width
       info (no side image).
     - post-style-4 ×2 (extra-small): compact image + title cell +
       meta bar.
     - LOAD MORE button (centered, 15px 40px padding, `#C3D8F5`,
       shadow, hover lift -2px + big shadow).
  4. Footer (white, ~70px top padding): left = logo + "Morsel © 2017.
     All rights reserved." + "Designed by Colorlib" + 5 circular 40px
     social icon buttons (`#498BF9`, white icons, hover lift); middle =
     "CATEGORIES" + uppercase links Beauty / Health / Music / Sport /
     Design / Travel (2 rows of 3); right = "SUBSCRIBE" + email input
     (50px, `#F5F7F6`, "Enter your email") + envelope submit.
- **Design tokens (from `layout-1/css/styles.css`):**
  - Fonts: body **Roboto** 300/15px; paragraphs **Maven Pro** 400
    `#444` (line-height 1.6); headings 300 (h1 4em, h2 2.8em, h3 2em,
    h4 1.2em, h5 1.1em, h6 .9em + letter-spacing 1px), line-height 1.5.
  - Primary **#498BF9** (hover text, social circles); accent **#C3D8F5**
    (LOAD MORE bg); page bg **#EDF3F3** (body/blog area/meta bar);
    input bg **#F5F7F6**; card `#fff` + 1px `#ddd` border + shadow
    `0 0 5px rgba(0,0,0,.1)`; header shadow
    `0 2px 10px rgba(0,0,0,.3)`; avatar border 7px `#fff` + shadow
    `0 0 10px rgba(0,0,0,.2)`; subscribe input shadow `0 0 1px #bbb`.
  - Buttons: LOAD MORE — rectangular, `#C3D8F5`, shadow
    `0 0 2px rgba(0,0,0,.4)`, hover `translateY(-2px)` + shadow
    `5px 10px 20px rgba(0,0,0,.3)`; socials — 40px circles, hover lift.
  - Responsive (≤992px): search area shrinks to 30% width; ≤767px:
    hamburger menu (`.menu-nav-icon`, hidden by default).
- **Recreation name:** Morsel (NEW name, differs from ColorLib "Bona").
  App folder `apps/morsel`, package `@free-react-templates/morsel`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/morsel-<n>/<w>/<h>`: banner 1920×300, post images
  800×600, avatars 200×200); lucide-react icons (Search, Heart,
  MessageCircle, Eye, Mail, and 5 social icons — original set is
  Facebook/Twitter/Instagram/Vimeo/Pinterest; use the 5 closest
  available in lucide); Roboto + Maven Pro via Google Fonts `<link>` in
  `index.html`; `#498BF9`, `#C3D8F5`, `#EDF3F3`, `#F5F7F6` in `@theme`;
  repo-standard Navbar + Footer chrome.
- **Documented copy deviations:** fix footer heading typo "CATAGORIES" →
  "CATEGORIES" and author typo "Plamer" → "Palmer"; the original repeats
  the same Van Gogh title on every card — titles may be varied per card
  (same style: h4, centered).
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn). Remember:
  `vite.config.ts` MUST register `injectUiSource()`.

## Tasks

- [x] Write `openspec/specs/template-morsel/spec.md` (Gherkin requirements +
      scenarios reflecting the REAL sections above, incl. subscribe form
      validation).
- [x] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/morsel` (copy a section-rich landing app pattern, e.g.
      Aurora; rename package to `@free-react-templates/morsel`; run
      `npm install` at root so `package-lock.json` registers it).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage: Header (nav +
      search), Banner, BlogGrid (post-style-1/2/3/4 card variants +
      meta bar), LoadMore, Footer (categories + subscribe form
      validation).
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow
      → spec:validate (or `scripts/verify-app.sh morsel` in FAST_MODE).
- [ ] Push `feat/template-morsel`, open PR (source template, preview URL,
      design tokens, what differs), merge immediately.
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL
      (https://free-react-templates-morsel.surge.sh) + homepage; run
      `npm run readme:status`; push.
