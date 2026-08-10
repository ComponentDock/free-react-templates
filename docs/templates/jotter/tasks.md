# Jotter (ColorLib Elen) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-jotter`.

## Design notes (replication findings)

- **Original:** ColorLib "Elen" — personal blog / lifestyle magazine
  template (source: https://colorlib.com/wp/template/elen/).
  TEMPLATES.md has THREE copies (lines 384, 2390, 2713 — mark ALL `[x]`
  when done; Blog / Personal / Magazine categories). Live preview
  title "Elen - Free Bootstrap 4 Template by Colorlib".
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/elen/
  (HTTP 200, 36.1 KB). Stylesheet `css/style.css` (65.1 KB — Bootstrap
  v4.1.0 bundle + custom ftco-style theme from ~line 1463) + plugin
  libs (owl.carousel, animate, aos, magnific-popup, ionicons,
  flaticon, icomoon). Google Fonts via cf-fonts: Montserrat
  300/400/500/700 + Poppins 300–700.
- **Screenshot:** `elen-free-template.jpg` — verified live in a
  browser (vision, 1200×946): split-screen personal blog — fixed
  narrow white left sidebar ("elen." logo, vertical menu Home /
  Photography / Travel / Fashion / About / Contact, copyright +
  socials at the bottom); main area = full-height hero with a
  heavily washed-out snowy-mountain photo, circular portrait, "Hello
  I'm" small grey text, "Elen Henderson" big bold dark headline, "I am
  A Blogger …" paragraph, subtle outline "More About Me" button, faint
  wavy divider; then a centered "Articles" heading + intro and blog
  cards. Minimal, airy, personal-blog aesthetic; accent orange/red on
  links/icons. (Screenshot's article cards look like flat color blocks
  — the LIVE DOM uses alternating image/text rows, DOM wins.)
- **Visual design:** fixed light sidebar (25%, `rgba(0,0,0,0.04)`) +
  scrollable main; full-height washed photo hero w/ white overlay
  (opacity .7) + parallax 0.5; circular portrait; "Hello I'm" 24px 300
  `#bfbfbf`; name 900 letter-spacing 1px; text-style CTA (`#b3b3b3`,
  2px bottom border); 12 alternating blog rows (uppercase 12px
  category, 28px/700 title, blurb, 80px round avatar + "Written by
  Dave Lewis, Nov. 28, 2018", heart 3 / eye 100 / comment 5 counts,
  "Continue Reading" arrow link); dark navy `#132238` footer with 3
  widget columns (Category, Archives, Have a Questions?); accent
  orange `#f05d23` (btn-primary fill, pagination, hovers).

## Design tokens (from css/style.css, theme section)

| Token            | Value                                                                                                                              | Where                                                                            |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| Accent orange    | `#f05d23`                                                                                                                          | `.btn.btn-primary` fill (white text), `.block-27` pagination, link/social hovers |
| Sidebar bg       | `rgba(0,0,0,0.04)`                                                                                                                 | `#colorlib-aside` (fixed, width 25%, padding 3em, overflow-y scroll)             |
| Logo             | black 34px 900 + grey dot `#cccccc`                                                                                                | `#colorlib-logo` wordmark (mb 2.5em)                                             |
| Nav links        | 16px 700 Montserrat `rgba(0,0,0,.4)`                                                                                               | `#colorlib-main-menu` (hover → black + animated underline, active black)         |
| Aside footer     | 14px `rgba(0,0,0,.6)`                                                                                                              | `.colorlib-footer` absolute bottom 40px; socials `rgba(0,0,0,.7)` → orange hover |
| Hero subheading  | 24px 300 `#bfbfbf`                                                                                                                 | `.subheading` ("Hello I'm")                                                      |
| Hero headline    | 900 weight, `letter-spacing: 1px`, black                                                                                           | `.hero-wrap .text h1` (name)                                                     |
| Hero CTA         | `#b3b3b3`, `border-bottom: 2px solid #b3b3b3`                                                                                      | `.btn-custom` ("More About Me") — text-style button, no fill                     |
| Hero overlay     | white, opacity .7                                                                                                                  | `.hero-wrap .overlay` over `images/bg_1.jpg` (washed photo)                      |
| Blog title       | 28px 700 black                                                                                                                     | `.blog-entry .text h3`                                                           |
| Blog category    | uppercase 12px, `letter-spacing: 1px`                                                                                              | `.category` tag                                                                  |
| Blog meta        | `#b3b3b3`                                                                                                                          | `.meta span` (heart/eye/comment counts, icons mr 10px)                           |
| Author avatar    | 80px circle (radius 50%)                                                                                                           | `.blog-entry .author .img`; name black underline                                 |
| Continue Reading | uppercase 13px, `letter-spacing: 2px`                                                                                              | `.blog-entry .text .btn` + arrow icon                                            |
| Footer bg        | `#132238`                                                                                                                          | `.ftco-footer` (dark navy, padding 6em 0, font-size 14px)                        |
| Footer headings  | white 17px 700, `letter-spacing: 1px`, mb 40px                                                                                     | `.ftco-footer-widget h2`                                                         |
| Footer links     | `rgba(255,255,255,.5)` → white hover                                                                                               | widget links; `.categories li` border-bottom `rgba(255,255,255,0.1)`             |
| Buttons (pill)   | radius **30px**, uppercase 13px, letter-spacing 2px                                                                                | `.btn`; `.btn-primary` orange fill → hover inverts (transparent + orange text)   |
| Pagination       | 40px circles, `border: 1px solid #f05d23`, active = orange fill                                                                    | `.block-27` (styles exist; NOT on the home DOM)                                  |
| Fonts            | **"Work Sans"** body (base) + **"Poppins"** headings (`h1–h4`, `rgba(0,0,0,.8)`) + **"Montserrat"** sidebar menu                   | cf-fonts Google Fonts: Montserrat 300–700, Poppins 300–700                       |
| Icons (icomoon)  | → lucide: heart, eye, message-circle (meta), arrow-right (Continue Reading), map-pin / phone / mail (footer); socials → inline SVG | blog meta, footer questions, aside socials                                       |

## Tasks (implementation order)

1. Scaffold `apps/jotter` (copy simplest existing app; package
   `@free-react-templates/jotter`; `vite.config.ts` with
   `injectUiSource()`).
2. `npm install` at repo root (registers workspace in package-lock.json;
   verify `grep -c "free-react-templates/jotter" package-lock.json`).
3. `index.css` `@theme` tokens: `--color-accent: #f05d23`,
   `--color-sidebar: rgba(0,0,0,0.04)`, `--color-ink: #000000`,
   `--color-meta: #b3b3b3`, `--color-subheading: #bfbfbf`,
   `--color-footer: #132238`, `--font-sans: 'Work Sans', sans-serif`,
   `--font-heading: 'Poppins', sans-serif`, `--font-menu:
'Montserrat', sans-serif`. Add Work Sans + Poppins + Montserrat
   Google Fonts `<link>` to `index.html`.
4. `Sidebar.tsx` — fixed left column (w-[25%], min-w-[270px],
   `bg-[rgba(0,0,0,0.04)]`, p-12, overflow-y-auto, z-50); wordmark
   "jotter" (34px 900 black + grey dot); vertical nav Home (active) /
   Photography / Travel / Fashion / About / Contact (Montserrat 700,
   `text-black/40`, hover → black + animated underline via
   `after:` scaleX, active → black); aside footer (mt-auto/bottom):
   copyright line "Copyright ©2024 All rights reserved | This
   template is made with ❤ by Colorlib" + 4 social icons (inline SVG
   Facebook/Twitter/Instagram/LinkedIn, hover → accent). Mobile:
   off-canvas (translate-x-[-100%], hamburger toggle with
   aria-expanded).
5. `Hero.tsx` — full-height section (`min-h-screen` or `h-full`
   equivalent), background image (seeded picsum landscape,
   `seed/jotter-hero/1600/900`) + white overlay (`bg-white/70`) +
   optional subtle parallax; centered column: circular portrait
   (`seed/jotter-portrait/200/200`, `rounded-full`), h2 "Hello I'm"
   (24px 300 `#bfbfbf`), h1 name (900, tracking-wide, black — use a
   fictional persona, NOT "Elen Henderson"; e.g. "Jude Marlowe"),
   paragraph ("I am A Blogger Far far away, behind the word
   mountains…" — keep the same kind of copy), `.btn-custom`-style
   "More About Me" (text `#b3b3b3` + border-b-2).
6. `Articles.tsx` — section `py-24 px-8`; header h2 "Articles" (mb-4)
   - intro paragraph; `ArticleCard` data array of 12 items (category,
     title, blurb, author, date, heart/eye/comment counts, seed) →
     alternating rows (even rows: image right via `md:order-last`):
     image (`seed/jotter-article-<n>/600/400`, rounded, ~h-[330px] cover
     — use a real `<img>` or a div with bg; `<img>` is easier to
     test/query), category tag (uppercase text-xs tracking-widest),
     h3 title (28px 700 black), p blurb, author row (80px round avatar
     `seed/jotter-author-<n>/80/80` + "Written by" + name + ", date"),
     meta row (lucide `Heart` 3, `Eye` 100, `MessageCircle` 5) +
     "Continue Reading" link (uppercase text-[13px] tracking-[2px] +
     lucide `ArrowRight`).
7. `Footer.tsx` — `bg-[#132238]` py-24 text-sm; grid of 3 columns:
   Category (Photography (6), Fashion (8), Technology (2), Travel (2)
   — rows with `border-b border-white/10`), Archives (October 2018
   (6), September 2018 (6), August 2018 (8), July 2018 (2), June 2018
   (7)), Have a Questions? (lucide `MapPin` + "203 Fake St. Mountain
   View, San Francisco, California, USA", `Phone` + "+2 392 3929 210",
   `Mail` + "info@yourdomain.com"); headings white 17px 700 tracking
   wide mb-10; links `text-white/50` → white hover; bottom bar:
   "Copyright ©2024 All rights reserved | This template is made with
   ❤ by Colorlib" + social icons.
8. `App.tsx` — compose Sidebar + (main wrapper: Hero + Articles +
   Footer); document title "Jotter — Personal Blog Template".
9. Tests: one describe per component, Gherkin-mirroring scenarios from
   spec.md; 100% coverage lines/functions/branches/statements. NOTE:
   mobile + desktop navs render duplicate links in the DOM — use
   `getAllByRole` and index the mobile one last.
10. Run `scripts/verify-app.sh jotter` (typecheck + lint + coverage
    tests + build) until green.
11. Update TEMPLATES.md lines 384 AND 2390 AND 2713 `[ ]` → `[x]` (ALL
    THREE copies) with surge URL + homepage after deploy;
    `npm run readme:status`; commit `feat: Jotter — personal blog
template (ColorLib Elen)`; PR → main → merge immediately.

## Fidelity gotchas

- **Three TEMPLATES.md copies** (384, 2390, 2713): ALL must be marked
  `[x]` — the item repeats across the Blog / Personal / Magazine
  categories.
- The layout is a **fixed sidebar + scrollable main** (not a top
  navbar). Sidebar width 25% (min 270px), off-canvas on mobile.
- The hero CTA is a **text-style button** (grey text + 2px bottom
  border, `.btn-custom`) — NOT a filled pill. The filled pill buttons
  (`btn-primary`, orange fill, radius 30px) exist in the theme CSS for
  other pages but do not appear on the home hero.
- Hero name: the template's persona is "Elen Henderson" — use a
  DIFFERENT fictional name in the recreation (never reuse the source
  name; the template is already renamed to Jotter).
- The hero overlay is **white at ~70% opacity** over a washed photo —
  text sits directly on the faded photo, no dark scrim.
- Blog rows alternate image/text sides (`order-md-last` on even rows);
  the category tag is uppercase 12px with wide tracking; article
  titles are 28px 700.
- The author avatar is a **80px circle**; meta counts are grey with
  icons (heart/eye/comment — lucide `Heart`, `Eye`,
  `MessageCircle`).
- **No pagination on the home DOM** (`.block-27` styles exist but no
  pagination element is rendered) — render the 12 article rows as a
  static list; do NOT invent a pagination control.
- The footer has **three** widget columns (Category, Archives, Have a
  Questions?) — NOT the 4–5 columns of other ftco templates.
- icomoon `icon-*` / ionicons `ion-*` are icon fonts — swap to
  lucide-react (heart, eye, comment, arrow-forward, map-marker,
  phone, envelope); brand socials must be inline SVG (lucide-react
  removed brand glyphs).
- Sidebar logo is a text wordmark (black "elen" + grey dot) — recreate
  as "jotter" + grey dot; never copy the asset.
- Google Fonts: body Work Sans, headings Poppins, sidebar menu
  Montserrat — three families via `<link>` in index.html.
- The screenshot shows flat color-block cards for articles; the live
  DOM uses alternating image/text rows — follow the DOM.
