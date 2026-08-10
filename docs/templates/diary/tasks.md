# Diary (ColorLib Andrea) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-diary`.

## Design notes (replication findings)

- **Original:** ColorLib "Andrea" —
  `https://colorlib.com/wp/template/andrea/` (Blog category). TEMPLATES.md
  lines **240**, **332**, **1696** — THREE duplicate rows, all `- [ ]`;
  mark ALL `[x]` when done. Recreation uses the NEW name **Diary** (single
  word, no collision with `ls apps/` or spec folders; "folio" was taken by
  an existing spec).
- **Preview URL:** `https://preview.colorlib.com/theme/andrea/` — **HTTP 200**
  (43 KB, 0.12 s), analyzed live. Stylesheet: `css/style.css` (56.7 KB).
  Full Bootstrap-based ftco stack (owl, aos, magnific, ionicons, flaticon,
  icomoon, bootstrap-datepicker, jquery.timepicker).
- **Screenshot** (`andrea-free-template.jpg`, 1200×946 AVIF→PNG, verified
  via browser vision): three-column blog on light-grey; left menu (Home
  active, blue underline) + big two-line serif logo "Andrea Moore" over a
  faint floral watermark + newsletter input + Colorlib credit; center blog
  cards with circular photos, serif titles, grey meta, blue "Read More >";
  right sidebar with Search, Categories (counts), Popular Articles (square
  thumbs), pill Tag Cloud. Clean, minimalist, editorial.
- **Visual design (DOM + CSS tokens + screenshot):**
  - Accent: **#1eafed** (light sky blue — links, active nav, nav underline,
    primary button fill, pagination active, h2 highlights).
  - Fonts: body **Poppins** 15px/1.8 `#666666` on `#fff`; headings
    **Lora** serif `rgba(0,0,0,0.8)` weight 400; logo **Abril Fatface**
    cursive 74px/0.8 (`#colorlib-logo`); h2 = Poppins 600 50px #000.
  - Buttons: **pill** (`border-radius: 30px`); `.btn-primary` solid
    `#1eafed`/white, hover transparent + accent text; `.btn-white` white
    border variant (sidebar newsletter "Subscribe").
  - Nav: Poppins, padding 10px 0, 2px accent underline on hover/after;
    active item `#1eafed`.
  - Blog card: thumbnail **150×150 circle** (`border-radius: 50%`), h3 30px
    Lora weight 400, meta 14px `#bfbfbf` (links #000), excerpt #666,
    "Read More" accent link + arrow icon.
  - Sidebar: `#f8f9fa` bg; `.sidebar-box` mb 40px; `.sidebar-heading`
    20px **italic**; category/archive lists w/ counts.
  - Newsletter widget (`.subs-wrap.img`): bg image + black overlay
    opacity .6, text `rgba(255,255,255,0.7)`.
  - Pagination (`.block-27`): 40×40px squares, 1px solid #1eafed, active
    filled #1eafed white.
- **Section order (1:1, index page):**
  1. `aside#colorlib-aside` (fixed left, 320px, white, full-height):
     logo "Andrea Moore" (Abril Fatface, "Moore" block span) → menu Home
     (active) / Fashion / Travel / About / Contact → "Subscribe for
     newsletter" (paper-plane icon + input) → `p.pfooter` credit.
  2. Main blog feed (`col-xl-8 py-5 px-md-5`): 12 `blog-entry d-md-flex`
     cards — circular `a.img.img-2` (150×150) + `div.text` with h3 title,
     `p.meta` (date · category · comments), excerpt, `a.btn-custom`
     "Read More" + arrow; then `ul.block-27` pagination `‹ 1 2 3 4 5 ›`.
     Real titles to reuse: "A Loving Heart is the Truest Wisdom" (Travel,
     June 28, 2019, 5 Comment), "Great Things Never Came from Comfort
     Zone", "Paths Are Made by Walking", "The Secret of Getting Ahead is
     Getting Started".
  3. Right sidebar (`col-xl-4 sidebar bg-light pt-5`): Search (icon +
     "Type a keyword and hit enter") → Categories (Fashion 6, Technology
     8, Travel 2, Food 2, Photography 7) → Popular Articles (3 rows:
     square thumb + title + date/author/comments) → Tag Cloud (animals
     human people cat dog nature leaves food) → Newsletter (subs-wrap:
     blurb + Email Address + Subscribe) → Archives (Decob14 2018 (10),
     September 2018 (6), August 2018 (8), July 2018 (2), June 2018 (7),
     May 2018 (5)) → Paragraph (lorem).
- **Behavior:** aside is fixed on desktop; off-canvas
  (`translateX(-320px)`) + hamburger toggle on mobile. Original is
  multi-page (index/fashion/travel/about/contact/single) — the recreation
  is a ONE-page blog listing; nav links are in-page anchors/placeholders.

## Tasks (implementation order)

- [ ] `apps/diary` scaffold (copy simplest existing app; package
      `@free-react-templates/diary`; `injectUiSource()` in vite.config;
      register workspace + `npm install` at root so package-lock.json
      updates)
- [ ] `src/index.css` theme tokens: `--color-accent: #1eafed`, body
      Poppins 15px/1.8 `#666`, headings Lora, logo Abril Fatface (Google
      Fonts `<link>` in index.html: Poppins + Lora + Abril Fatface);
      sidebar bg `#f8f9fa`, meta `#bfbfbf`
- [ ] `Sidebar` — fixed left (~320px): logo (Abril Fatface, wordmark
      treatment), vertical menu (Home active, accent underline hover),
      newsletter mini-form (paper-plane icon + email input + validation),
      credit line; off-canvas + hamburger toggle on mobile (aria-expanded,
      Escape/backdrop close)
- [ ] `BlogFeed` — post cards: circular 150×150 thumbnail (picsum seed
      diary-N), Lora 30px title, meta row (date · category · comments),
      excerpt, accent "Read More" + arrow link
- [ ] `Pagination` — 40px square cells `‹ 1 2 3 4 5 ›`, active filled
      accent
- [ ] `SearchWidget` — search icon + "Type a keyword and hit enter" input
- [ ] `CategoriesWidget` — list with counts
- [ ] `PopularArticles` — 3 rows: small square thumb + title + meta
- [ ] `TagCloud` — pill links (animals human people cat dog nature leaves
      food)
- [ ] `NewsletterWidget` — subs-wrap: image + dark overlay, heading, blurb,
      Email Address input + Subscribe button (zod validation, error +
      success states)
- [ ] `ArchivesWidget` — month list with counts
- [ ] `ParagraphWidget` — lorem text block
- [ ] `App.tsx` composition (sidebar + feed + right sidebar, main landmark) + document title "Diary — Personal Blog"
- [ ] Tests (red→green) for every section; 100% coverage via
      `npm run verify:app -- diary`
- [ ] PR: source (ColorLib Andrea), preview URL (HTTP 200), tokens,
      renames; after merge mark TEMPLATES.md lines 240, 332 AND 1696
      `[x]` + surge URL
