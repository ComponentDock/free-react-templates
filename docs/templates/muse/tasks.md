# Muse (ColorLib Andrea) — Tasks & Design Notes

> Prep artifacts for the PREP stream. Implementation ships later on
> `feat/template-muse` by an implementer stream.

## Design notes

- **Original:** ColorLib "Andrea" — free blog website template (fashion /
  lifestyle / personal blog). Source:
  https://colorlib.com/wp/template/andrea/.
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/andrea/`
  (HTTP 200, 43.1KB) + stylesheet `css/style.css` (56.7KB). Full rendered
  DOM extracted; structure below is from the DOM + CSS tokens. Screenshot
  `andrea-free-template.jpg` (1200×946) confirms: "clean chic" editorial
  blog — fixed left sidebar with "Andrea Moore" logo in a high-contrast
  serif over a faint floral watercolor, vertical nav (Home active /
  Fashion / Travel / About / Contact), newsletter input + blue arrow
  submit, small copyright; center column = blog feed with LARGE CIRCULAR
  photos, serif headlines, grey meta, blue "Read More »" links; right
  sidebar (light grey) = search, categories w/ counts, popular articles,
  tag cloud pills; accent = soft periwinkle/sky blue; headings serif
  (editorial), body/nav sans-serif.
- **Structure observed (1:1):**
  1. `#colorlib-aside` (fixed left, 25%, white, `border-right: 1px solid
#e6e6e6`, padding 5em 2em 40px): `#colorlib-logo` "Andrea" —
     Abril Fatface 74px, line-height .8, glyphs filled with a background
     image via `background-clip: text` / `-webkit-text-fill-color:
transparent`; `#colorlib-main-menu` vertical ul — Home (active:
     #1eafed, weight 600, animated blue `:after` underline scaleX),
     Fashion, Travel, About, Contact; `.colorlib-footer` (absolute bottom
     20px): h3 "Subscribe for newsletter" (18px/600) + `subscribe-form`
     (email input + icon submit, `background-color: #1eafed`) +
     `.pfooter` (14px, rgba(0,0,0,0.6)).
  2. Main feed: 12 × `blog-entry ftco-animate d-md-flex` — circular `a.img
.img-2` 150×150 `border-radius: 50%` + `.text.text-2.pl-md-4`: h3.mb-2
     title (30px/400/#000) + `.meta-wrap .meta` spans (icon-calendar "June
     28, 2019", icon-folder-o category link, icon-comment2 "5 Comment",
     #bfbfbf 14px) + excerpt `p.mb-4` ("A small river named Duden flows by
     their place and supplies it with the necessary regelialia.") + `<a
class="btn-custom">Read More <span ion-ios-arrow-forward>`.
  3. Right sidebar `col-xl-4.sidebar.bg-light.pt-5` (`#f8f9fa`):
     - Search: `form.search-form` icon + input "Type a keyword and hit
       enter".
     - Categories: `h3.sidebar-heading` (20px italic) — Fashion (6),
       Technology (8), Travel (2), Food (2), Photography (7).
     - Popular Articles: 3 × `block-21.mb-4.d-flex` — square `a.blog-img
.mr-4` + `h3.heading` "Even the all-powerful Pointing has no
       control" + `.meta` (icon-calendar date, icon-person "Dave Lewis",
       icon-chat "19").
     - Tag Cloud: `ul.tagcloud` pills — animals, human, people, cat, dog,
       nature, leaves, food.
     - Newsletter: `sidebar-box.subs-wrap.img.py-4` photo bg + `.overlay`
       - h3 "Newsletter" + copy "Far far away, behind the word mountains…
         Vokalia" + `subscribe-form` (input "Email Address" +
         `input.btn.btn-white.submit` "Subscribe").
     - Archives: `ul.categories` — Decob14 2018 (10), September 2018 (6),
       August 2018 (8), July 2018 (2), June 2018 (7), May 2018 (5).
     - Paragraph: heading "Paragraph" + lorem.
  4. Pagination `ul.pagination`: ‹ 1 (active) 2 3 4 5 ›.
- **Design tokens:** Google Fonts **Abril Fatface** (cursive — logo/display)
  - **Lora** (serif) + **Poppins** (sans-serif — nav/meta/buttons/body).
    Brand **#1eafed** (sky/periwinkle blue) — active nav, underline hover
    animation, `.btn-primary`, subscribe button bg, link hovers. Buttons
    pill `border-radius: 30px` (`.btn-primary` #1eafed/#fff, hover
    transparent + blue text; `.btn-white` #fff/#000, hover blue text;
    `.btn-custom` = blue text link + arrow). Blog images circular 50% 150×150.
    Sidebar headings 20px italic. Meta #bfbfbf/#b3b3b3 14px; headings #000.
    Aside white + border-right #e6e6e6; right sidebar `bg-light` #f8f9fa;
    newsletter widget photo bg + overlay; below 992px aside → off-canvas
    320px with hamburger toggle (`.js-colorlib-nav-toggle`).
- **Recreation decisions:** fixed left sidebar (desktop) → off-canvas
  drawer + repo-standard toggle (mobile); logo "Muse" Abril Fatface with
  clip-text effect (or plain serif with subtle image tint); nav Home active
  with blue underline; newsletter form (validated, success state); blog
  feed 6–12 posts with circular picsum images; right sidebar widgets on
  light-grey bg; newsletter card photo bg + overlay; pagination with
  active first page; picsum seeds `muse-N`; Google Fonts via `<link>`;
  lucide-react icons (Calendar, Folder, MessageCircle, User, Search,
  ArrowRight).

## Tasks / todo outline

1. Scaffold `apps/muse` (copy simplest existing app; package
   `@free-react-templates/muse`; `npm install` at root to register the
   workspace in package-lock.json; `injectUiSource()` in vite.config.ts).
2. `src/index.css`: `@theme` tokens — brand blue #1eafed, font families
   `display: "Abril Fatface", cursive` / `serif: Lora` / `sans: Poppins`;
   circular-image utility.
3. `Sidebar.tsx` (fixed left aside): logo "Muse", nav (Home active,
   Fashion, Travel, About, Contact), newsletter form (validated, success
   state), copyright line; off-canvas + toggle on mobile.
4. `BlogFeed.tsx`: 6–12 entries — circular image, serif title, meta
   (date/category/comments), excerpt, "Read More" link w/ arrow.
5. `SidebarWidgets.tsx` (right column, bg-light): Search (input
   "Type a keyword and hit enter"), Categories w/ counts, Popular
   Articles (thumb + title + meta), Tag Cloud pills, Newsletter card
   (photo bg + overlay + Subscribe btn), Archives w/ counts, Paragraph.
6. `Pagination.tsx`: ‹ 1 (active) 2 3 4 5 ›.
7. `App.tsx` composition (order 1:1), document title
   "Muse — Fashion & Lifestyle Blog".
8. Tests per component (scenario-style), 100% coverage; run
   `npm run verify:app -- muse`.
9. Commit `feat: muse — fashion/lifestyle blog template (ColorLib Andrea)`,
   push `feat/template-muse`, open + immediately squash-merge PR,
   re-dispatch `Deploy to Surge.sh -f app=muse` if needed, mark `[x]` in
   TEMPLATES.md with surge URL, `npm run readme:status`.
