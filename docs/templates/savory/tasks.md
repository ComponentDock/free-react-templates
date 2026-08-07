# Savory (ColorLib "Bueno") — Tasks & Design Notes

> Prep artifact for the PREP stream. Implementation ships later on
> `feat/template-savory` by an implementer stream.

## Design notes (replication findings)

- **Original:** ColorLib "Bueno" — Food Blog HTML Template
  (source: https://colorlib.com/wp/template/bueno/). Listed in
  TEMPLATES.md under **Beauty (28)** despite being a food blog.
- **Preview REACHABLE (HTTP 200):**
  `https://preview.colorlib.com/theme/bueno/`. DOM fetched
  (`/tmp/bueno_preview.html`, 38 KB) + stylesheet
  (`/tmp/bueno_style.css`, 50 KB) + screenshot (`bueno-free-template.jpg`,
  1200×946, viewed in browser). All references verified live.
- **Visual design:** clean minimalist food blog on white. Dark
  semi-transparent top bar over a food photo (grapes/cheese) with social
  icons left + search right; centered script wordmark logo ("Bueno") with
  "Food Blog" tagline; hero slides with a thin-bordered centered white
  overlay card (tag/title/meta); 3 category cards with centered white
  boxes that flip sage-green on hover; alternating big posts with square
  green Read More buttons; 3-col post grid + right sidebar (ad + recent
  posts); 10-tile Instagram strip; minimal footer. Accent = pale
  sage/pistachio green `#b0c364`.
- **Structure (1:1 from the preview DOM):**
  1. Preloader — full-screen `#b0c364` cover, "Cooking in progress.." +
     animated pot/bubbles; removed after load.
  2. Top header bar (`top-header-area bg-img bg-overlay`, 95px): socials
     left, search right, dark overlay over `header.jpg`.
  3. Main navbar (`classy-navbar`, 70px): logo left (image → recreate as
     script text "Savory" + "Food Blog"), nav center (Home, About Us,
     Pages ▾, Recipes ▾ mega menu: Recipe, Bread, Breakfast, Meat,
     Fastfood, Salad, Soup; Blog, Contact), Login / Register right,
     hamburger `#toggler` (opens the trending panel — confirmed in
     `js/active.js`: `$('#toggler').on('click' → treadingPost.toggleClass('on')`)).
  4. Trending panel (`treading-post-area`): fixed right, 480px, bg
     `#dadfe5`, `.on` → `right: 0`. Heading "Treading Post" (source typo —
     paraphrase to "Trending Posts"), 6 compact posts (thumb + "The Best"
     tag + title + meta), close-icon (×).
  5. Hero carousel (`hero-post-slides owl-carousel`, `hero-area` padding
     0 30px): 4 slides — full-width image + centered white box
     (`blog-content-bg` 320×360; hover → `#b0c364` bg + white title) with
     "Healthy Food" tag, "Chicken Salad" title, "July 11, 2018 / By Julia
     Stiles" meta; PREV/NEXT arrows bottom corners; auto-advance.
  6. Category area (`post-catagory section-padding-100-0 mb-70`): 3 cards
     (col-lg-4) — image + centered white box (height 128px, width
     `calc(100% - 60px)`) + tag "The Best" + title (Healthy Food / Organic
     Cuisine / Vegetarian Food); hover → green box, white title.
  7. Big posts (`big-posts-area mb-50`): 2 alternating rows (col-md-6) —
     image ↔ centered content: tag ("Healthy" / "The Best"), title
     ("Friend eggs with ham" / "Steak with boiled vegetables"), meta,
     lorem excerpt, "Read More" `.bueno-btn`.
  8. Posts area: main = 3-col grid, 9 small posts (thumb + "The Best" tag
     - title + meta); sidebar = `add-widget` ad image + `post-widget`
       recent posts (5 rows: small thumb + title + meta).
  9. Instagram feed (`instagram-feed-area d-flex flex-wrap`): 10 square
     tiles (insta1–10).
  10. Footer (`footer-area`, padding 50px 0): copyright line 12px
      `#666666` ("© <year> All rights reserved | This template is made
      with <heart> by ColorLib") + footer nav (Home, Recipes, About Us,
      Blog, Contact; hover → `#b0c364` + 3px `#b0c364` underline).
- **Design tokens (extracted from style.css):**
  - Brand: **`#b0c364`** sage/pistachio green (40 usages) · darker
    `#a3b65a` · button hover bg `#000000`.
  - Font: **Montserrat** 300/400/500/600/700 (Google Fonts @import in
    style.css), body 14px — ONLY font in the stylesheet. The screenshot's
    script logo is an image (`logo.png`) → recreate the wordmark in a
    script font (Dancing Script / Great Vibes) or elegant serif; the rest
    stays Montserrat.
  - Nav links `#404040` 15px w600, hover `#b0c364`; `.post-tag` 12px w600
    UPPERCASE `#b0c364`; `.post-title` 30/24/18/14px (white on green
    boxes); `.post-meta` 12px w600 UPPERCASE `#7a7a7a`; `.bueno-btn` —
    square (border-radius 0), min-width 160px, height 50px, padding 0
    30px, 14px w500, white on `#b0c364`, hover black; trending panel
    `#dadfe5`; footer text `#666666`; section top padding 100px.
- **Recreation name:** Savory (NEW name, differs from ColorLib "Bueno").
  App folder `apps/savory`, package `@free-react-templates/savory`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/savory-<n>/<w>/<h>`: hero slides 1200×700,
  category 600×500, big posts 700×600, grid 400×300, recent 100×100,
  insta 300×300); lucide-react icons (Search, Menu, X, ArrowLeft,
  ArrowRight, Heart, Clock; socials/Instagram as inline SVG brand icons);
  Montserrat + script font via Google Fonts `<link>`; hero carousel as a
  small custom component (auto-advance interval + prev/next + index
  state); trending panel as a fixed slide-in toggled by the hamburger.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn). Remember:
  `vite.config.ts` MUST register `injectUiSource()`.

## Tasks

- [x] Write `openspec/specs/template-savory/spec.md` (Gherkin
      requirements + scenarios reflecting the REAL sections above).
- [x] Validate spec: `npm run spec:validate` (see notes — run in repo
      with node_modules; p3 clone may lack them, main tree has them).
- [ ] Create `apps/savory` (copy a section-rich landing app pattern,
      e.g. Aurora; rename package to `@free-react-templates/savory`;
      run `npm install` at root so `package-lock.json` registers it).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage: Preloader, TopBar
      (socials + search), Navbar (logo wordmark + links + Recipes mega
      menu + Login/Register + hamburger), TrendingPanel, HeroCarousel,
      CategoryCards, BigPosts, PostGrid + Sidebar, InstagramFeed, Footer.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip →
      fallow → spec:validate (or `scripts/verify-app.sh savory` in
      FAST_MODE).
- [ ] Push `feat/template-savory`, open PR (source template ColorLib
      "Bueno", preview URL reachable, design tokens, what differs: name,
      placeholder images, script logo as text, "Treading Post" typo →
      "Trending Posts"), merge immediately.
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL
      (https://free-react-templates-savory.surge.sh) + homepage; run
      `npm run readme:status`; push. TEMPLATES.md lists Bueno TWICE
      (lines 250 and 2851) — mark BOTH copies.
