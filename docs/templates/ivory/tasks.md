# Ivory (ColorLib Blanca) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-ivory` by an implementer stream.

## Design notes (replication findings)

- **Original:** ColorLib "Blanca" — minimalist elegant personal blog: slim
  top bar (greeting + email left, social icons + search right), giant script
  wordmark logo ("Blanca") with tiny right-aligned uppercase tagline
  ("Personal Blog"), centered uppercase nav with 2px underline hover/current,
  full-width 3-slide hero slider (square outline dots bottom-left, white
  square arrows), circular lime-green "Subscribe to my Youtube Channel" badge
  overlapping hero bottom-right, col-lg-9 blog list (3 centered posts: date →
  title → tags → featured image → excerpt → share/read-more/comments) +
  col-lg-3 sidebar (about-me bio, 4 recent posts, black tag pills, ad
  banner), square numbered pagination (01. 02. 03.), footer with 4
  recent-post columns + 7-image Instagram strip + dark bottom bar (source:
  https://colorlib.com/wp/template/blanca/). Listed in TEMPLATES.md under
  Blog (line 245) — one recreation covers that single checklist row.
- **Live preview REACHABLE:** `https://preview.colorlib.com/theme/blanca/`
  (HTTP 200, ~31.8KB HTML). DOM + `style.css` (23.2KB) + bootstrap/swiper
  extracted and analyzed. Screenshot `blanca-free-template.jpg` viewed in
  browser: confirms top bar, flowing script logo + "PERSONAL BLOG" tagline,
  small uppercase menu, full-width golden-hour photo hero with white square
  arrows + square dots bottom-left, circular lime-green "Subscribe" badge
  overlapping bottom-right, centered first post (uppercase gray date, dark
  title, gray tags), "I'm Amelia Smith" bio start in the sidebar. Footer
  below the fold; fully specified from the DOM/CSS.
- **Palette is monochrome** — ink `#2f2f2f`, grays `#afafaf` / `#9d9d9d` /
  `#b8b8b8` / `#bec4c9` / `#74797e`, surfaces `#fff` / `#f5f5f5` / `#f0f0f0`
  / `#d5d5d5` / `#d8d8d8`. The ONLY color is the lime-green in the subscribe
  badge PHOTO (woman on bright lime-green background). Reproduce the pop of
  color with a circular `limegreen` (`#9acd32`) disc + avatar photo on top.
- **Fonts:** the original bundles custom @font-face files (HelveticaNeueLTPro-
  Md + BeyondTheMountains) — DO NOT copy them. Substitute with Google Fonts:
  **Montserrat** (400/500/600) for body/sans, **Dancing Script** (400/700)
  for the logo + "Subscribe" script. Load both via `<link>` in `index.html`.
- **Signature shapes:** EVERYTHING square (`border-radius: 0`) — slider
  bullets 12×12px (2px white border, active filled white), slider arrows
  54×54px white squares (arrows `#3a3a3a`, visible ≥768px, hidden below),
  read-more 200px-wide block button (padding 20px 0), pagination 40×40px
  squares (`#f0f0f0` bg, active/hover inverted), tag pills `padding: 14px
25px` black bg white text, search input borderless except `border-bottom:
2px solid #d5d5d5`.
- **Hero slider:** original uses Swiper with 3 slides of the SAME image.
  Recreation: state-based slider (auto-advance + prev/next + dots) with
  picsum slides; dots bottom-LEFT (left 38px, bottom 30px), arrows 42px from
  edges, centered vertically.
- **Subscribe badge:** absolutely positioned (`right: 15px; bottom: -200px`)
  relative to the hero container so it straddles the hero's bottom edge;
  circular disc (160px) + "Subscribe" (36px Dancing Script, `#2f2f2f`) +
  "To my Youtube Channel" (12px uppercase letterspaced `#afafaf`). Offset
  values can be tuned responsively.
- **Section structure (1:1):** top bar → site branding (logo + tagline) →
  nav (hamburger mobile) → hero slider (3 slides + dots + arrows) →
  subscribe badge (overlapping hero) → `.single-page` container: main
  col-lg-9 (3 content-wraps → pagination) + sidebar col-lg-3 (about-me →
  recent posts → tags-list → ads) → footer: 4 recent-post columns →
  Instagram strip (7 images) → footer bar (copyright + social).
- **Sidebar alignment quirk:** `.single-page .sidebar { margin-top: 290px }`
  on ≥992px so the sidebar's about-me starts level with the first post's
  content block; 110px below lg. Reproduce with `mt-[290px] lg:mt-[110px]`
  or similar.
- **Icons:** original uses Font Awesome. Recreation: lucide-react for UI
  icons (search, share, chevron/arrow for slider, calendar, message-circle
  for comments); inline SVG for social brands (pinterest, facebook, twitter,
  dribbble, behance, linkedin in header; pinterest, linkedin, instagram,
  facebook, twitter in post share) — lucide-react removed brand icons (see
  replication skill pitfall).
- **Placeholders:** `https://picsum.photos/seed/ivory-<n>/<w>/<h>` — 3 hero
  slides (e.g. 1400×800), 1 subscribe avatar (200×200), 3 post featured
  images (900×600), 4 sidebar recent thumbs (600×400), 4 footer post thumbs
  (185×140), 7 Instagram images (400×400), 1 ad banner (600×400).

## Implementation tasks (for the implementer stream)

1. **Scaffold:** copy the simplest existing app (e.g. `apps/onepage`), rename
   to `@free-react-templates/ivory`; run `npm install` at root so
   `package-lock.json` registers the workspace; keep `injectUiSource()` in
   `vite.config.ts` (see `docs/conventions.md`).
2. **Theme tokens** (`src/index.css` `@theme`): `--color-ink: #2f2f2f`,
   `--color-meta: #afafaf`, `--color-desc: #9d9d9d`, `--color-copy:
#b8b8b8`, `--color-social: #bec4c9`, `--color-foot-social: #74797e`,
   `--color-surface: #f5f5f5`, `--color-pagination: #f0f0f0`,
   `--color-search-line: #d5d5d5`, `--color-foot-line: #d8d8d8`,
   `--color-lime: #9acd32`; Montserrat 400/500/600 + Dancing Script 400/700
   Google Fonts `<link>` in `index.html`.
3. **TopBar** (`components/TopBar.tsx`): greeting + email left (uppercase
   12px letterspaced `#afafaf`, hidden below lg), social icons (24px,
   `#bec4c9` → `#2f2f2f` hover, hidden below md), search input right
   (`#f5f5f5`, bottom border 2px `#d5d5d5`, italic, 300px on md+,
   `aria-label`).
4. **Branding** (`components/Branding.tsx`): centered script wordmark "Ivory"
   (Dancing Script, 72px → 112px ≥576px, `#2f2f2f`) + tagline "Personal
   Blog" (10px uppercase `letter-spacing: .26rem`, `#9d9d9d`, right-aligned
   under the logo).
5. **Navbar** (`components/Navbar.tsx`): centered uppercase 12px links (Home
   current, Features, Portfolio, Blog, About Me, Contact); current/hover 2px
   bottom border `#2f2f2f`; hamburger (4 spans) below lg with `aria-expanded`
   toggling the menu.
6. **HeroSlider** (`components/HeroSlider.tsx`): 3 full-width photo slides
   (state-based carousel, auto-advance + prev/next), square outline dots
   bottom-left (active filled white), 54px white square arrows visible md+;
   slide data with picsum seeds `ivory-1..3`.
7. **SubscribeBadge** (`components/SubscribeBadge.tsx`): absolute
   bottom-right of the hero (`right-4`, negative bottom), circular lime disc
   (bg `#9acd32`, rounded-full, ~160px) with avatar photo, "Subscribe" in
   Dancing Script 36px + "To my Youtube Channel" 12px uppercase letterspaced;
   wrapped in an `<a>` (href "#").
8. **BlogList** (`components/BlogList.tsx`): 3 posts, each: centered
   entry-header (12px uppercase date → 30px title → 16px gray hashtag tags),
   full-width featured image, left-aligned excerpt (14px/2rem), entry-footer
   (Share label + 5 icons, 200px black "Read more" block button, "2
   Comments" link right on lg).
9. **Pagination** (`components/Pagination.tsx`): 01. (active) / 02. / 03. as
   40px squares (`#f0f0f0` bg; active + hover inverted).
10. **Sidebar** (`components/Sidebar.tsx`): `mt-[290px]` on lg; about-me
    (heading 30px + 14px/1.85rem gray blurb, centered), Recent Posts (4
    entries: image, 11px uppercase date, 18px title, small tags), Tags
    (`padding: 14px 25px` black pills, 11px uppercase white text), Ad banner
    (placeholder image).
11. **Footer** (`components/Footer.tsx`): border-top `#d8d8d8`, 100px top
    padding; 4 recent-post columns (185px thumb + date + 18px title + tags +
    underlined "read more"), Instagram strip (7 images, flex-wrap → nowrap),
    footer bar (`#2f2f2f`, 22px padding): copyright left 13px `#b8b8b8` +
    social right (`#74797e` → white hover).
12. **App composition** (`App.tsx`): TopBar → Branding → Navbar → HeroSlider
    → SubscribeBadge → main grid (BlogList + Pagination in col-lg-9,
    Sidebar in col-lg-3) → Footer; dark-mode `.dark` variants per
    conventions.
13. **Tests:** one `describe` per component, scenario-style `it` blocks
    mirroring the spec; 100% coverage required.
14. **Verify:** `npm run verify:app ivory` (typecheck + lint + vitest 100%
    coverage + build) → PR `feat/template-ivory` → merge immediately →
    `[x]` + surge URL + `npm run readme:status` on main.

## Fidelity pitfalls

- Do NOT reuse the source name "Blanca" anywhere as the app/package name.
- Do NOT copy original images/fonts/CSS — picsum + Google Fonts only. The
  original's @font-face files are bundled in the preview; substitute
  Montserrat + Dancing Script.
- Everything is SQUARE — do not round the slider dots/arrows, read-more
  button, pagination, or tag pills; the square shapes are the signature.
- The subscribe badge is the ONLY colored element — reproduce it as a lime
  disc; keep the rest of the page monochrome.
- Sidebar aligns with the first post via a large `margin-top` on lg (290px)
  — replicate, don't flatten the sidebar to the top.
- The hero nav is a 22px-tall strip (links sit on a single line); the
  hamburger expands the menu on mobile (`.site-navigation.show` height:auto).
- Header social icons are hidden below md; the greeting/email hidden below
  lg; the mobile menu carries its own social row + search — mirror the
  responsive visibility.
- Nav link hover and `current-menu-item` both use the 2px bottom border;
  there is no background highlight.
- The slider shows the SAME image 3× in the original — feel free to use
  three distinct picsum images instead (still faithful to the slider
  behavior), but keep dots bottom-left and square arrows.
- Footer Instagram figures collapse 33.3% → 25% → 20% → auto width across
  breakpoints; use a flex-wrap row of 7 squares.
- Original copy is lorem ipsum + repeated titles — paraphrase lightly but
  keep the same kinds of content (greeting + email, post dates/titles/tags,
  "Share"/"Read more"/"N Comments", about-me blurb, tag list, footer titles).
