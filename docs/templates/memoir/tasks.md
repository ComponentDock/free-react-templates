# Memoir (ColorLib Andrea) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-memoir` by an implementer stream.

## Design notes (replication findings)

- **Original:** ColorLib "Andrea" — free Bootstrap 4 personal / lifestyle
  blog template. Listed in TEMPLATES.md under Blog (line 240) with
  duplicate rows at line 332 (Bootstrap) and line 1696 (Fashion) — one
  recreation covers all three rows
  (source: https://colorlib.com/wp/template/andrea/).
- **Live preview REACHABLE:** `https://preview.colorlib.com/theme/andrea/`
  (HTTP 200, ~43KB HTML; title "Andrea - Free Bootstrap 4 Template by
  Colorlib"). DOM + `css/style.css` (~57KB: Bootstrap 4.3.1 base + custom
  theme from ~line 1450) extracted and analyzed. Screenshot
  `andrea-free-template.jpg` (1200×946) viewed in browser; live render also
  verified in browser at desktop width.
- **Layout:** fixed white LEFT sidebar (`aside#colorlib-aside`, width 25% ≈
  320px, `border-right: 1px solid #e6e6e6`, off-canvas on mobile) with nav
  (Home active / Fashion / Travel / About / Contact, 18px/500, blue 2px
  underline on active), big Abril Fatface "Andrea Moore" logo over a
  watercolor photo (`bg_1.jpg`), "Subscribe for newsletter" form
  (paper-plane icon + borderless input), copyright at bottom. Beside it the
  main column (75%): 12 blog entries then a circular pagination bar. Right:
  light-grey widget sidebar (`bg-light` = `#f8f9fa`): Search → Categories →
  Popular Articles → Tag Cloud → Newsletter (dark card) → Archives →
  Paragraph. **No separate full-width footer on the index page** — the
  copyright bar lives inside the fixed sidebar; do not invent one.
- **Post thumbnails are CIRCULAR** (150×150, `border-radius: 50%`) —
  verified visually in the live preview at desktop width. (The source also
  has an `.img-2 { height: 300px }` rule that could produce ovals at other
  breakpoints; the rendered preview and screenshot show circles — match the
  circles.)
- **Copy caveat (IMPORTANT):** the source repeats one placeholder title
  EIGHT times in the post list ("You Can't Blame Gravity for Falling in
  Love") and ONE title three times in Popular Articles ("Even the
  all-powerful Pointing has no control"). Write 12 DISTINCT blog entries
  and 3 distinct popular articles of the same kind (motivational
  lifestyle/travel headlines + "small river named Duden" excerpt style).
  Archive "Decob14 2018" is a typo → "December 2018".
- **Brand blue `#1eafed`** — links, active nav underline (2px scaleX
  transition), `.btn-primary` (fill, hover → transparent + blue text),
  pagination circle border + active fill, `.btn-white` hover text.
- **Fonts (Google Fonts):** **Abril Fatface** (cursive) — logo wordmark
  ONLY (`#colorlib-logo`: 74px → 62px responsive, line-height 0.8);
  **Lora** (serif) — ALL headings (h1–h6, `color: rgba(0,0,0,0.8)`,
  weight normal, line-height 1.5; `.sidebar-heading` 20px italic); body =
  **Poppins** (nav 18px/500, meta 14px `#bfbfbf`, buttons, inputs). Put
  the fonts `<link>` in `index.html` (source `@import`s them in CSS —
  invalid in Tailwind 4).
- **Neutrals:** heading ink `rgba(0,0,0,0.8)`, body `#212529`, black
  `#000000` (post titles, tag text), meta gray `#bfbfbf`, sidebar footer
  text `rgba(0,0,0,0.6)`; page top border `2px solid #dee2e6` on `body`;
  aside right border `#e6e6e6`; category/archive dividers `#dee2e6`;
  tag border `#ccc` → hover `#000`.
- **Surfaces:** page + aside `#fff`; widget sidebar `#f8f9fa`; search box
  `#fafafa` (padding 10px, right magnifier icon); newsletter card = photo
  `bg_1.jpg` + black overlay `opacity: 0.6` → recreate as a dark slate
  gradient or dark picsum photo + overlay; card text
  `rgba(255,255,255,0.7)`.
- **Shapes:** post thumbs 150px circles; popular-article thumbs 80px
  squares; pagination 40px circles; buttons pill `border-radius: 30px`
  (`.btn`, `.btn-white`); tag pills 11px uppercase, `padding: 4px 10px`,
  radius 4px; "Read More" = plain blue text link + arrow icon (no button
  styling in source CSS).
- **Blog entry structure:** `d-md-flex` row — `a.img` (circle, 150px) +
  `div.text` (`width: calc(100% - 150px)`, `pl-4`): `h3` 24px/600 black
  title link → `div.meta-wrap` `p.meta` (spans 14px `#bfbfbf`: Calendar
  "June 28, 2019" · Folder "Travel" · MessageCircle "5 Comment") → excerpt
  `p.mb-4` → `a.btn-custom` "Read More" + ArrowRight. `margin-bottom:
3em`. Mobile: stacked + centered.
- **Pagination:** `block-27` — `‹` 1 2 3 4 5 `›`, each a 40px circle
  (`1px solid #1eafed`, radius 50%, line-height 40px); `.active` = filled
  `#1eafed` + white.
- **Widgets:** Categories (Fashion 6, Technology 8, Travel 2, Food 2,
  Photography 7 — counts in `span`, `li` bottom border `#dee2e6`); Popular
  Articles (3× `block-21`: 80px square `blog-img` + `text` width
  calc(100% - 100px), `h3.heading` 16px, meta row Calendar date · User
  author "Dave Lewis" · chat "19"); Tag Cloud (8 pills: animals, human,
  people, cat, dog, nature, leaves, food); Newsletter (heading + blurb +
  transparent input + white pill Subscribe btn, hover blue text, success
  state); Archives (December 2018 (10), September 2018 (6), August 2018
  (8), July 2018 (2), June 2018 (7), May 2018 (5)); Paragraph (lorem).
  `.sidebar-box` `margin-bottom: 40px`, `.sidebar-heading` 20px italic
  Lora `margin-bottom: 30px`.
- **Icons:** source = icomoon (icon-calendar, icon-folder-o, icon-comment2,
  icon-search, icon-paper-plane, icon-person, icon-chat, icon-heart) +
  ionicons arrow. Recreation: lucide-react — Calendar, Folder,
  MessageCircle, Search, Send, User, Heart, ArrowRight, Menu/X.
- **Placeholders:** `https://picsum.photos/seed/memoir-<n>/<w>/<h>` — 12
  circular post thumbs (150×150, e.g. lifestyle/travel scenes), 3
  popular-article thumbs (80×80), newsletter card background (dark-ish
  photo, e.g. 400×300) + overlay. Logo background: subtle CSS gradient/
  texture instead of the watercolor photo.

## Implementation tasks (for the implementer stream)

1. **Scaffold:** copy the simplest existing app (e.g. `apps/onepage`),
   rename to `@free-react-templates/memoir`; run `npm install` at root so
   `package-lock.json` registers the workspace; keep `injectUiSource()` in
   `vite.config.ts` (see `docs/conventions.md`).
2. **Theme tokens** (`src/index.css` `@theme`): `--color-brand: #1eafed`,
   `--color-ink-heading: rgba(0,0,0,0.8)`, `--color-ink-body: #212529`,
   `--color-meta: #bfbfbf`, `--color-border: #dee2e6`, `--color-border-
aside: #e6e6e6`, `--color-border-tag: #ccc`, `--color-surface-widget:
#f8f9fa`, `--color-surface-search: #fafafa`, `--color-on-dark:
rgba(255,255,255,0.7)`; Abril Fatface + Lora + Poppins Google Fonts
   `<link>` in `index.html`; `.dark` variants per repo conventions.
3. **Sidebar** (`components/Sidebar.tsx`): fixed left, `w-1/4` (min 320px)
   on desktop, off-canvas (`-translate-x-full`) on mobile + when toggled;
   white bg, right border `#e6e6e6`, padding `5em 2em 40px`; Nav (Home
   active w/ 2px blue underline, Fashion, Travel, About, Contact — 18px 500) → wordmark (Abril Fatface ~74px/0.8, subtle gradient bg) →
   Subscribe (Send icon + input, success on submit) → copyright.
4. **NavToggle** (`components/NavToggle.tsx`): fixed top-left hamburger
   (3 bars: `i` + `::before`/`::after`, hover spreads outer bars); toggles
   sidebar via state; `aria-expanded`.
5. **BlogList** (`components/BlogList.tsx`): 12 entries — circular 150px
   picsum image link + text: h3 title (Lora 24px/600), meta row (Calendar
   date · Folder category · MessageCircle "5 Comment", 14px `#bfbfbf`),
   excerpt, "Read More" blue link + ArrowRight; stacked/centered on mobile.
   Write 12 DISTINCT paraphrased titles (start from: "A Loving Heart is
   the Truest Wisdom", "Great Things Never Came from Comfort Zone", "Paths
   Are Made by Walking", "The Secret of Getting Ahead is Getting Started").
6. **Pagination** (`components/Pagination.tsx`): `‹` 1–5 `›` as 40px
   circles (1px `#1eafed` border, radius-full); page 1 active = filled
   `#1eafed` white text.
7. **WidgetSidebar** (`components/WidgetSidebar.tsx`, `bg-[#f8f9fa]`):
   Search (`#fafafa` box, Search icon, "Type a keyword and hit enter") →
   Categories (Fashion 6, Technology 8, Travel 2, Food 2, Photography 7,
   `#dee2e6` dividers) → PopularArticles (3 distinct, 80px square thumb +
   title 16px + meta date/User author/MessageCircle count) → TagCloud (8
   uppercase pills, `border #ccc` → hover `#000`) → Newsletter card (dark
   bg + overlay, white heading, blurb, transparent input, white pill
   Subscribe → hover blue text, success state) → Archives (6 months w/
   counts, "December 2018" not "Decob14") → Paragraph (lorem).
8. **App composition** (`App.tsx`): NavToggle → Sidebar → main layout
   (`lg:pl-[25%]` or flex): BlogList → Pagination + WidgetSidebar in a
   `lg:grid-cols-[2fr_1fr]`-ish row; body top border `2px solid #dee2e6`.
   NO full-width footer.
9. **Tests:** one `describe` per component, scenario-style `it` blocks
   mirroring the spec; 100% coverage required (assert 12 distinct titles,
   sidebar off-canvas toggle, pagination active state, etc.).
10. **Verify:** `npm run verify:app memoir` (typecheck + lint + vitest
    100% + build) → PR `feat/template-memoir` → merge immediately → mark
    ALL THREE TEMPLATES.md rows (lines 240, 332, 1696) `[x]` with surge
    URL + `npm run readme:status` on main.

## Fidelity pitfalls

- Do NOT reuse the source name "Andrea" anywhere as the app/package name
  (new name: memoir).
- Do NOT render repeated placeholder titles — 12 distinct posts, 3
  distinct popular articles.
- Post thumbnails must LOOK circular (match screenshot/live preview), not
  oval — keep 150×150 with `rounded-full` and `object-cover`.
- The source `@import`s Google Fonts inside style.css — put the fonts
  `<link>` in `index.html` instead.
- The newsletter card is a photo + black 0.6 overlay (renders as a dark
  slate-blue card) — recreate with a dark picsum image or gradient +
  overlay; text `rgba(255,255,255,0.7)`.
- There is NO full-width footer on the index page — the copyright bar is
  inside the fixed sidebar. Don't invent one.
- "Read More" is a plain blue text link with an arrow (no button pill) —
  `btn-custom` has no custom styling in the source CSS.
- Active nav item = blue 2px underline (scaleX transition), not a
  background highlight.
- Buttons are pills (`border-radius: 30px`): white Subscribe button on the
  dark newsletter card hovers to blue text; blue `btn-primary` (if used)
  hovers to transparent bg + blue text.
- On mobile the sidebar is hidden by default and slides in via the
  hamburger (off-canvas); on desktop it is visible by default and the
  hamburger can still hide it.
