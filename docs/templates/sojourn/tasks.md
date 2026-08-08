# Sojourn (ColorLib Sasha) — Tasks & Design Notes

> Prep artifacts prepared on `main`; implementation ships on
> `feat/template-sojourn`.

## Design notes (replication findings)

- **Original:** ColorLib "Sasha" — travel/lifestyle blog template
  (source: https://colorlib.com/wp/template/sasha/).
- **Preview analyzed:** https://preview.colorlib.com/theme/sasha/ (HTTP 200).
  The root preview page is a demo-showcase landing; the REAL blog home is
  `index-01.html` ("Home page 01") — DOM + `assets/css/style.css`,
  `header.css`, `themes.css` parsed for structure and tokens; screenshot
  `sasha-free-template.jpg` reviewed visually (clean monochrome showcase,
  sneaker hero, "RESPONSIVE & CLEAN BLOGGING TEMPLATE WITH 05 HOME PAGES &
  02 HEADER VARIATIONS").
- **Visual design:** minimal, clean travel blog. Rust `#af7152` is the brand
  color (buttons, hover links, active nav, newsletter submit); dark `#171717`
  header-bottom bar; near-black Poppins titles on white cards; white banner
  slider with dark overlay; light gray meta (`#999`), hairline borders
  (`#e1e1e1`/`#eaeaea`). Headings in Poppins, UI/nav/buttons in Lato,
  paragraphs/footer in Raleway.
- **Structure (1:1, section order, Home 01):**
  1. Header: `header-top` (light; centered logo + hamburger trigger → fixed
     left slide-in `sidebar-menu` panel, 300px white, centered Lato links,
     active = rust) + `header-bottom` (dark `#171717` nav bar: Home, Home
     01–05, Features, Categories, About, Contact).
  2. Banner slider (`banner-slider-01`, 50vh): full-bleed image + overlay
     `rgba(0,0,0,0.25)`, centered content — white bordered category tag
     ("Lifestyle"), white uppercase Poppins title (34px), white "Read More"
     button. Slides: "Natural summer", "Cruise to Alaska".
  3. Main content `default-posts` (flex 2-col, `col-sm-6`, centered): 8 posts
     — Cruise to Alaska (full-width) · Russian River · Workout for the Road ·
     California "Tunnel Tree" · Hawaiian Prints · What to Explore in Key West
     (full-width) · ROAD TRIP TRAVEL GEAR · Cruising into Spring. Card:
     thumbnail (mb 32/44px), category, Poppins H2 title (24/32px), post-meta
     (11px `#999`: date · comments · socials), Raleway excerpt (`margin: 19px
0`), rust "Read more" button.
  4. Sidebar (right, centered): About me (avatar + bio) · Newsletter (email
     input `1px solid #e1e1e1`, radius 0 + rust submit) · Instagram (106px
     tiles, hover `rgba(0,0,0,0.5)` + `scale(1.1) skew(5deg)`) · Recent Posts
     (100px thumb + 14px title + date) · Ad widget.
  5. Section widget: full-width Instagram strip (6 tiles, hover overlay).
  6. Footer (`site-footer colophon`): Raleway, container row, social icons
     right (`footer-social pull-right`), copyright bar (monorepo credit, not
     ColorLib).
- **Design tokens extracted from the preview CSS:**
  - Primary rust `#af7152`; dark `#171717`; text `#000`/`#999`/`#aaa`/
    `#c0c0c0`; surfaces `#fff`; borders `#e1e1e1`/`#eaeaea`/`#e4e4e4`.
  - Fonts: "Poppins" (h1–h6, blockquote) + "Lato" (nav, buttons, category,
    meta, widget titles) + "Raleway" (p, footer).
  - Buttons `.btn`: `border-radius: 0`, bg `#af7152`, white 12px text,
    `padding: 0 13px`; hover → white bg + rust text. Slider variant: white
    bg + `#171717` text.
  - Newsletter submit: rust bg, uppercase, `letter-spacing: 1px`,
    `line-height: 38px`; hover → white bg + rust text.
  - Slider: `height: 50vh`, overlay `rgba(0,0,0,0.25)`, category tag 1px
    white border, title white uppercase 34px.
  - Instagram tiles 106px (sidebar) / strip tiles with `scale(1.1) skew(5deg)`
    hover + `rgba(0,0,0,0.5)` overlay.
- **Recreation name:** Sojourn (NEW name — never reuse "Sasha"). App folder
  `apps/sojourn`, package `@free-react-templates/sojourn`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/sojourn-<n>/<w>/<h>`); lucide-react icons (menu,
  search, comments, socials, chevrons); Poppins + Lato + Raleway via Google
  Fonts `<link>` in `index.html`; rust primary in `@theme` so shared
  Button/ButtonLink `primary` variants resolve to `#af7152` (sharp radius-0
  via theme tokens).
- Reuse `packages/ui` (Button, ButtonLink, Card, cn) + repo-standard
  Navbar/Footer chrome.

## Tasks

- [x] Write `openspec/specs/template-sojourn/spec.md` (Gherkin requirements +
      scenarios reflecting the REAL sections above).
- [x] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/sojourn` (copy the closest existing blog app — e.g. an
      existing blog/magazine app if present, else a landing app; rename
      package to `@free-react-templates/sojourn`).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage: Header (header-top logo + hamburger slide-in menu + dark header-bottom nav), Banner slider
      (50vh, overlay, 2 slides), Post grid (2-col centered, full-width 1st +
      6th cards), Sidebar (About / Newsletter / Instagram / Recent Posts /
      Ad), Instagram strip, Footer.
- [ ] Per-app gate: `bash scripts/verify-app.sh sojourn` (typecheck + lint +
      coverage + build) + `npm run spec:validate`.
- [ ] Push `feat/template-sojourn`, open PR (source template, preview URL,
      design tokens, what differs), merge immediately.
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main, state D).
