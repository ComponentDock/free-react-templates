# Newsstand (ColorLib Webmag) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-newsstand`.

## Source mapping

- **ColorLib item:** "Webmag" (TEMPLATES.md — TWO copies, lines 294, 2221;
  mark ALL `[x]` when done).
- **Source URL:** https://colorlib.com/wp/template/webmag/
- **Preview URL:** https://preview.colorlib.com/theme/webmag/ — **HTTP 200,
  live** (confirmed 2026-08-08, ~36.5 KB HTML). The ColorLib preview portal
  serves this slug directly — no pages.dev fallback. Do not redo this lookup.
- **Preview CSS:** https://preview.colorlib.com/theme/webmag/assets/css/style.css
  (custom ~180 KB, Bootstrap-var-based, NOT Tailwind) +
  `assets/fontawesome/css/all.min.css` (Font Awesome 7.1 icons).

## Reference research (done — do not redo)

### Screenshot (`webmag-free-template.jpg`, 1200×946; verified via browser vision)

Light, minimalist tech-magazine design. Bold uppercase "WEBMAG" logo top-left;
nav items with category-colored underline accents (green/orange/purple);
hamburger + search icons right. Below the header: two large side-by-side post
cards (image + bottom overlay: colored uppercase category tag + date + bold
dark title), then "Recent Posts" heading + a 3-column grid of smaller image
cards with the same overlay pattern. Accent colors used for category tags:
orange (JavaScript), purple (jQuery), green (Web Design/CSS). Clean modern
sans typography (Nunito Sans/Nunito). The screenshot shows an older nav
variant ("Jquery" item); the LIVE preview is the primary reference.

### Live DOM (primary reference — matches the screenshot 1:1)

Section order: fixed white header (logo; nav News/Popular/Web Design
`li.cat-1`/JavaScript `li.cat-2`/CSS `li.cat-3`/TypeScript `li.cat-4` with
`-1px 0 0 #dfe3eb inset` dividers and 25px 20px padding; search button +
overlay search form `input.search-input` "Enter Your Search ..."; aside
button opening `#nav-aside` drawer with links + "Recent Posts" widget list +
"Follow us" socials + close) → Section 1 white (`col-md-8` main: section-title
h2 "Recent Posts" 28px + six `.post` cards 3×2 with `a.post-img` + absolute
bottom `.post-body` overlay — `.post-meta` category badge `cat-N` + date +
`h3.post-title` 18px link; `col-md-4` sidebar: aside-widget "Most Read" +
`.post.post-widget` thumbnail/title rows, flex gap 16px) → Section 2
`section-grey` (#f8f9fb + 1px #dfe3eb top/bottom borders; centered
section-title "Featured Posts" + two large `col-md-6 .post.post-thumb` cards,
radius 10px, overflow hidden) → Section 3 white (`col-md-8`: "Featured Posts"

- four `.post` cards + ad box; `col-md-4` sidebar: "Most Read" widget list,
  `.category-widget` — Web Design 340 / JavaScript 74 / TypeScript 41 / CSS 35
  with cat-colored links and count spans, `.tags-widget` pills — Chrome, CSS,
  Tutorial, Backend, TypeScript, Design, Development, JavaScript, Website) →
  footer (`margin-top: 40px; padding-bottom: 40px`, light; col-md-5 logo +
  footer-nav Privacy Policy/Advertisement + copyright `#5c6a7d` 13px; col-md-4
  split "About Us" (About Us, Join Us, Contacts) + "Categories" links; col-md-3
  "Join our Newsletter" — label "Email address", `input.input[type=email]`
  placeholder "Enter your email", 48px square `#ff8700` `border-radius: 6px`
  paper-plane button `aria-label="Subscribe"` — + `.footer-social` Facebook/X/
  Pinterest/YouTube/TikTok).

### Design tokens (from `assets/css/style.css`)

- **Brand orange** `#ff8700`: newsletter button, cat-2 badge/nav hover,
  post-title hover, reply link, author-social hover, focus ring
  `0 0 0 3px rgba(255,135,0,.15)`.
- **Category accents:** cat-1 `#4BB92F` green · cat-2 `#ff8700` orange ·
  cat-3 `#8d00ff` purple · cat-4 `#0078ff` blue.
- **Neutrals:** ink `#212631` (headings, input text) · body `#3d455c`
  (paragraphs) · muted `#5c6a7d` (copyright) · hairline `#dfe3eb` (nav
  dividers, borders, dates on images) · grey band `#f8f9fb`.
- **Fonts:** Nunito 300/600 (body) + Nunito Sans 700 (headings) — Google
  Fonts `<link>` in `index.html` (preview uses Cloudflare cf-fonts @font-face
  of the same families).
- **Radii:** 10px post cards · 8px inputs/author box · 6px newsletter button
  · 4px category badges.
- **Header:** fixed 70px, white, inset bottom hairline `#dfe3eb`, z-90; logo
  height 70px; nav links 25px 20px padding, capitalize.
- **Sections:** white ↔ grey band `#f8f9fb` (1px `#dfe3eb` top/bottom); image
  cards rely on a dark bottom overlay for meta/title legibility.
- **Container:** Bootstrap `container` → Tailwind `mx-auto max-w-7xl px-4`.

## Implementation todo

- [ ] Scaffold `apps/newsstand` from the simplest existing app; package
      `@free-react-templates/newsstand`; `npm install` at root + verify
      lockfile registers the workspace (`grep -c free-react-templates/newsstand
    package-lock.json`); `vite.config.ts` MUST keep `injectUiSource()`.
- [ ] `src/index.css` `@theme`: brand orange scale (primary) + cat colors
      (green/purple/blue) + ink/body/muted/hairline/grey-band neutrals; Nunito + Nunito Sans via Google Fonts `<link>` in `index.html`.
- [ ] Spec → tests (red) → components (green), 100% coverage, mirroring the
      spec's Gherkin scenarios 1:1.
- [ ] `Navbar.tsx`: fixed white 70px bar, "Newsstand" wordmark logo, nav
      links with dividers + per-category hover colors, search button, aside
      button (aria-expanded), mobile drawer with links + widgets.
- [ ] `SearchOverlay.tsx`: covers the nav, input "Enter Your Search ...",
      orange focus ring, Esc/close handling.
- [ ] `AsideDrawer.tsx`: stacked links, "Recent Posts" widget rows, "Follow
      us" social links, close control.
- [ ] `PostCard.tsx` (shared): image + bottom overlay (category badge in cat
      color, date, 18px title link); `PostWidget.tsx`: thumbnail + 15px title
      row. Reuse across sections via props (variant/size).
- [ ] `RecentPosts.tsx`: "Recent Posts" heading + 6 cards (3×2 grid) +
      sidebar "Most Read" widget (col-md-8/col-md-4 layout).
- [ ] `FeaturedGrey.tsx`: grey band (hairlines), centered "Featured Posts", 2
      large rounded cards.
- [ ] `PostsSidebar.tsx`: "Featured Posts" + 4 cards + ad box; sidebar:
      "Most Read" list, Categories widget (colored links + count spans), Tags
      widget (pills).
- [ ] `Footer.tsx`: light footer, logo + Privacy/Advertisement + copyright,
      About/Categories columns, newsletter form (label + email input + 48px
      orange send button with confirmation state) + social icons.
- [ ] `App.tsx` composition: banner/main/contentinfo landmarks, title
      "Newsstand — Magazine & Blog Template".
- [ ] `scripts/verify-app.sh newsstand` → full `npm run gate` green.
- [ ] PR `feat/template-newsstand` → docs + merge immediately; then
      `[~]`→`[x]` on BOTH Webmag lines (294, 2221), surge URL + homepage,
      `npm run readme:status`, push.

## Fidelity notes

- The source is a multi-page site (category.html, blog-post.html, about.html,
  contact.html). Our recreation is single-page: nav links anchor to on-page
  sections (`#recent`, `#featured`, ...) or `#` placeholders; blog/category
  card links point to `#` (they are non-functional in a single-page demo —
  keep the same _kind_ of link affordance).
- Copy: keep article-style titles (e.g. "Pagedraw UI Builder Turns Your
  Website Design Mockup Into Code Automatically") — paraphrase if desired but
  keep title + badge + date structure. Rebrand footer credit to
  "made with <heart> by free-react-templates" style, never Colorlib.
- Never copy assets — use seeded picsum: post cards `seed/newsstand-1..6`
  (800×500), featured `seed/newsstand-7..8` (1200×675), widget thumbs
  `seed/newsstand-9..14` (150×100), ad box `seed/newsstand-15` (300×250).
- Font Awesome → lucide-react equivalents: Search, Menu, X, Send, Facebook,
  Twitter, Youtube, Pinterest (Pinterest icon may need inline SVG — check
  lucide availability), plus TikTok as inline SVG (not in lucide).
- Bootstrap grid (`col-md-8`/`col-md-4`, `col-md-6`) → Tailwind responsive
  classes (`md:grid-cols-3`, `lg:grid-cols-[2fr_1fr]`, etc.).
- The grey band is a signature — alternate white / `#f8f9fb` sections with
  the exact hairlines (`border-y border-[#dfe3eb]`).
- Post cards MUST overlay meta+title on the image bottom (absolute overlay
  with a dark gradient), not below the image — this is the template's look.
- Brand orange `#ff8700` and the four category colors go in `@theme`; use
  Tailwind classes, never inline hex.
