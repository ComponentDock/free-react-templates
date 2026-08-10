# Saffron (ColorLib Juli) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-saffron`.

## Design notes (replication findings)

- **Original:** ColorLib "Juli" — lifestyle / fashion blog template (source:
  https://colorlib.com/wp/template/juli/). TEMPLATES.md has TWO copies of
  this item (lines 266 and 2400 — mark EVERY copy `[x]` when done).
- **Demo DOM analyzed:** `https://preview.colorlib.com/theme/juli/` 404s (this
  template's demo is at a numbered path) — the real demo is
  **https://preview.colorlib.com/theme/juli/01-homepage.html** (HTTP 200,
  36 KB; found via the colorlib.com Live Preview button →
  `preview.colorlib.com/#juli` → iframe `01-homepage.html`; title "TITLE" is
  the demo's placeholder). Master stylesheet `01-homepage/css/styles.css`
  (~11.5 KB, fully extracted) + `responsive.css`; libs: bootstrap,
  ionicons (icons), layerslider (hero). Fonts: **Roboto (300/400/500)**
  inlined via Cloudflare `@font-face` + **Maven Pro** for paragraphs — load
  both via Google Fonts `<link>` in the recreation. Cross-checked against
  the TEMPLATES.md screenshot (`juli-free-lifestyle-blog-website-template.jpg`
  viewed in browser 1200×908) and a live browser render of `01-homepage.html`
  — all match. The demo brands itself "Juli"; recreation uses the NEW name
  **Saffron** (brand orange #FFAD4D = saffron spice).
- **Visual design (from DOM + CSS tokens + screenshot):** clean white
  feminine lifestyle blog — italic top bar ("Hello nice people, welcome to
  my blog" + email left; search + 5 outline social icons right), centered
  script-style wordmark logo with "PERSONAL BLOG" tagline, centered
  uppercase nav (HOME▾ / FEATURED / ABOUT / CATEGORIES / CONTACT); full-width
  flat-lay hero photo (open book, strawberry toast, tea mugs on dark blue)
  with a dark translucent card (orange TRAVEL chip, white "Travel, Love,
  Live", date) + chevrons + pagination dots; white blog list (1000×600
  full-width posts, 500×400 paired grid, split card) with orange chips,
  Share/03/06 meta, italic gray dates, dark bold titles (orange hover),
  white READ MORE buttons (orange border + soft shadow); sidebar with
  floating about-author card (portrait pulled up 30px), underline search,
  dark `#29333C` newsletter box (orange SUBSCRIBE outline), image categories
  with orange name bars, latest posts (80px thumbs), DISCOVER ad, 3×2
  Instagram grid, tag pills; 7-image "Follow me © instagram" strip; dark
  footer with copyright + right-aligned social icons. Demo copy is
  placeholder lorem — paraphrase into travel/lifestyle copy.
- **Structure (1:1, section order):**
  1. Header (`header`; absolute top, z-1000, white, shadow `0 2px 10px
rgba(0,0,0,.3)`): (a) `.top-menu` 45px italic: left welcome li
     "Hello nice people, welcome to my blog" + mailto
     `contact@juliblog.com` (li `border-left: 1px solid #ddd`); right
     `.src-area` 250px search (`.src-input` placeholder "Search" +
     `.src-btn` icon, `border-left/right: 1px solid #ddd`) +
     `ul.social-icons` (#aaa, 5 outline: facebook/twitter/instagram/
     vimeo/pinterest); (b) `.middle-menu.center-text`: centered logo
     (padding 30px 0, 160px tall; `border-top/bottom: 1px solid #ddd`);
     (c) `.bottom-area`: hamburger `.menu-nav-icon` (hidden desktop) +
     `ul.main-menu` w500: HOME▾ (`.drop-down-menu` min-width 200px, white,
     shadow `0 3px 10px`, li `border-top: 1px solid #ddd`: FEATURED / ABOUT
     / CATEGORIES▸ → nested `.drop-down-inner` `left: 100%`: FEATURED /
     ABOUT / CATEGORIES), FEATURED, ABOUT, CATEGORIES, CONTACT (links 60px
     tall, hover bg #eee; dropdown hover #F2F3F4).
  2. Hero (`div.main-slider`, **margin-top 265px**, height `calc(100vh -
265px)` min 550px): `#slider` LayerSlider, **2 `div.ls-slide`** (cover
     bg): `img.ls-bg` 1600×800 (`slider-1`, `slider-2`) + `.slider-content`
     (top 60% / left 30%; **padding 25px 60px 25px 40px; radius 3px; bg
     rgba(0,0,0,.6)**): `a.btn` chip TRAVEL (padding 7px 15px) + `h3.title`
     bold "Travel, Love, Live" (letter-spacing 3px) + `h6` "29 October,
     2017". BOTH slides repeat identical demo copy — paraphrase slide 2.
     Chevron arrows + bottom pagination bullets.
  3. Blog area (`section.blog-area`, padding 70px 0 40px; col-lg-8 left):
     posts 1-2 full width (1000×600), posts 3-6 in two `col-lg-6` rows
     (500×400), post 7 `.post-style-2` split (image `width-50` left +
     `.post-details width-50` right, 500×400). Each card: `.icons` row
     (margin 30px 0 10px, lh 30px) — `a.btn.caegory-btn` TRAVEL (padding
     0 20px, h/lh 30px, solid orange) + `ul.social-icons` #666: Share /
     03 / 06 → date `<em>` (post 1 `p.date`, others `h6.date`; #999) →
     `h3.title` a b.light-color (#444; hover #FFAD4D; margin 20px 0 15px)
     → excerpt p (Maven Pro #555 lh 1.6) → `a.btn.read-more-btn` READ
     MORE (white bg, 1px solid #FFAD4D, orange text, shadow `1px 10px
15px rgba(0,0,0,.15)`; hover orange bg + white) → `a.btn.load-more-btn`
     LOAD OLDER POSTS (margin 70px 0 30px).
     Titles: "This is post about travel, adventure and fun" · "This is post
     for the ones that love to travel" · "How to paint the wall and street"
     · "One more night in the local clubs" · "A new festival in your town" ·
     "How to make your home modern" · "How to throw the best engagement
     party" (fix demo typo "througn").
  4. Sidebar (col-lg-4, `.sidebar-section` mb 50px, `.title` mb 30px):
     (1) `.about-author.center-text` (mt 30px, padding 0 30px 30px, shadow
     `0 10px 40px rgba(0,0,0,.2)`): `.author-image` 150px,
     **translateY(-30px)** overlap, radius 3px, 5 social icons #888 +
     `h4.author-name` "Cristine Smith" + bio + `.signature-image` 120px +
     `a.read-more-link` orange READ MORE (underline slides out on hover);
     (2) `.src-area` search (input `border-bottom: 1px solid #bbb`);
     (3) `.newsletter-area` **bg #29333C, padding 30px**: h5 white
     "Subscribe to our newsletter" + `.email-input` (white, padding
     10px 20px, margin 15px 0) + `button.btn.btn-2` SUBSCRIBE (outline;
     hover fill orange); (4) `.category-area`: 4 `a.category` (img 400×150
     - `h6.name` absolute bottom, **bg #FFAD4D**, white): TRAVEL / FASHION /
       LIFESTYLE / DESIGN; (5) `.latest-post-area`: 4 `.latest-post` (thumb
       80px float left + `.post-info` ml 100px: chip TRAVEL + h5 + h6 date
       #888): "One more night in the clubs" / "Travel lights in winter" /
       "How to travel with no money" / "Smile 10 times a day"; (6)
       `.advertisement-area`: img 400×500 + `.discover-btn` (white border,
       200px wide, bottom 30px centered, white text, hover orange border)
       DISCOVER; (7) `.instagram-area`: 6 tiles 150×150 (30% width grid);
       (8) `.tags-area`: design, fasinon→**fashion**, travel, music, video,
       photography, adventure.
  5. Instagram strip (`section.footer-instagram-area`, `border-top: 1px
solid #ccc`): centered h5 "Follow me © instagram" (padding 20px 0) +
     `ul.instagram` **7** imgs (width 14.285% each, 300×400).
  6. Footer (`footer`, **bg #29333C**, color #ddd): `.footer-section`
     (margin 30px 0): left `p.copyright` "Saffron © <year>. All rights
     reserved. | This template is made with <heart> by Colorlib" + right
     `ul.social-icons` (5 outline icons, right-aligned).
- **Design tokens extracted from the preview CSS (`styles.css`):**
- Brand **orange `#FFAD4D`**: `.btn` bg + border + hover text; read-more
  text/border; category chips + name bars; about read-more-link + underline;
  link hover (`a b.light-color:hover`); discover hover border.
- Dark slate **`#29333C`**: newsletter box bg + footer bg (text #ddd).
- Text: body `#000` (Roboto 15px w400); `b.light-color` **#444** (w500);
  p `#555` (Maven Pro 1.05em lh 1.6); dates `#999` (posts) / `#888`
  (latest); icons `#666`; top social `#aaa`; footer `#ddd`.
- Borders: `#ddd` (top-menu, middle-menu, dropdown rows), `#bbb` (search
  underline), `#ccc` (instagram strip top), `#eee` (nav hover),
  `#F2F3F4` (dropdown hover).
- Buttons: `.btn` .9em, **padding 15px 30px, radius 1px**, letter-spacing
  2px, 1px solid #FFAD4D, orange bg + white text; hover transparent +
  orange. `.btn-2` outline; hover fill orange + white. read-more: white +
  orange border/text, shadow `1px 10px 15px rgba(0,0,0,.15)`; hover orange
  bg + white. chips: 30px tall (`caegory-btn` padding 0 20px; latest-post
  `category-btn` padding 5px 10px).
- Headings: h1 4em / h2 2.8em / h3 1.8em / h4 1.5em / h5 1.2em / h6 .9em
  ls 1px; `<b>` w500. Slider title ls 3px.
- Slider card: `rgba(0,0,0,.6)` bg, radius 3px, padding 25px 60px 25px
  40px, at ~top 60% / left 30%.
- Radii: **1px** buttons; **3px** slider card + author portrait.
- Spacing: `.section` 70px 0 40px; header 45px bar / 160px logo / 60px
  nav; slider mt 265px; post mb 60px; icons 30px 0 10px; title 20px 0
  15px; read-more mt 30px; load-more 70px 0 30px; sidebar-section mb
  50px / title mb 30px; newsletter padding 30px; category mb 20px;
  latest-post mb 20px (info ml 100px); footer-section margin 30px 0.

## Implementation tasks

- [ ] Spec-first: `openspec/specs/template-saffron/spec.md` already on main
      (prep). Open a `feat/template-saffron` branch.
- [ ] Copy the simplest existing blog app (e.g. `apps/volt` or another blog
      template), rename package to `@free-react-templates/saffron`, run
      `npm install` at root so `package-lock.json` registers the workspace
      (grep `free-react-templates/saffron`).
- [ ] Ensure `vite.config.ts` registers `injectUiSource()` (see
      docs/conventions.md) and app imports Button/ButtonLink/cn from
      `packages/ui` (knip trap — see repo memory notes).
- [ ] TDD: tests first per spec requirement, then implement:

1. `TopBar` — italic welcome bar: greeting + email left (with `#ddd`
   separators), search input + button and 5 social icon links right.
2. `Header` — centered Saffron wordmark + "PERSONAL BLOG" tagline (text
   logo) between `#ddd` rules; centered uppercase nav HOME▾ (dropdown:
   FEATURED / ABOUT / CATEGORIES▸ nested) · FEATURED · ABOUT · CATEGORIES ·
   CONTACT; mobile hamburger toggles menu (desktop + mobile variants render
   duplicate links — use `getAllByRole`).
3. `HeroSlider` — 2 full-bleed slides (1600×800 picsum) with
   `rgba(0,0,0,0.6)` card: orange TRAVEL chip + bold letter-spaced headline
   ("Travel, Love, Live" / paraphrased slide 2) + date; accessible
   prev/next + slide indicators.
4. `PostCard` — image, category chip TRAVEL, Share/03/06 meta, italic
   date, title (orange hover), excerpt, white READ MORE (orange border,
   soft shadow). Variants: full-width (1000×600), grid (500×400),
   split `post-style-2` (image left 50% / details right 50%).
5. `BlogList` — 2 full-width + 4 in 2-col grid + 1 split card (7 posts,
   titles from spec) + LOAD OLDER POSTS button.
6. `AboutAuthor` — portrait card with upward-overlap (translateY(-30px)),
   5 social icons, name "Cristine Smith" (or a new author name), bio,
   signature placeholder, orange READ MORE with sliding underline.
7. `SidebarSearch` — underline input + search button.
8. `Newsletter` — dark `#29333C` box, white heading "Subscribe to our
   newsletter", email input, orange outline SUBSCRIBE (fills on hover),
   confirm on submit.
9. `Categories` — 4 image rows (400×150) with orange bottom name bars
   TRAVEL / FASHION / LIFESTYLE / DESIGN.
10. `LatestPosts` — 4 rows: 80px thumb + chip + title + date ("One more
    night in the clubs" / "Travel lights in winter" / "How to travel with
    no money" / "Smile 10 times a day").
11. `Advertisement` — 400×500 image + centered white-outline DISCOVER
    button (bottom 30px).
12. `InstagramGrid` — 3×2 tile grid (150×150).
13. `Tags` — pill links: design, fashion, travel, music, video,
    photography, adventure.
14. `InstagramStrip` — centered "Follow me © instagram" + 7 equal-width
    images (14.285% each) above the footer.
15. `Footer` — dark `#29333C`: copyright line (year + heart + Colorlib
    credit → credit Saffron's author) + right-aligned 5 social icons.

- [ ] Theme tokens in `@theme`: `--color-brand: #FFAD4D`, `--color-ink:
    #29333C` (dark slate), title `#444`, body `#555`, date grays
      `#888/#999`, border `#ddd`/`#bbb`/`#ccc`.
- [ ] Roboto (300,400,500) + Maven Pro Google Fonts `<link>` in index.html.
- [ ] Placeholders: `picsum.photos/seed/saffron-<n>/<w>/<h>`; lucide-react
      icons (search, share-2, heart, message-circle, chevron-left/right,
      menu; inline SVG social brand icons — lucide-react has no brand
      icons).
- [ ] Paraphrase demo copy: hero headlines, post titles/excerpts, about
      bio, newsletter heading; fix demo typos ("througn" → "throw",
      "fasinon" → "fashion"); slide-2 headline distinct from slide 1.
- [ ] Verify: `scripts/verify-app.sh saffron` (typecheck + lint + 100%
      coverage + build). Then push branch, open PR, squash-merge
      immediately (`gh pr merge --squash --delete-branch`).
- [ ] After merge: mark TEMPLATES.md Juli lines 266 and 2400
      `[~]`→`[x]` with Surge URL
      `https://free-react-templates-saffron.surge.sh` + homepage, run
      `npm run readme:status`, commit + push. Verify `npx knip` + curl the
      Surge URL.
