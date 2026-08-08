# Zine (ColorLib Katt) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-zine`.

## Design notes (replication findings)

- **Original:** ColorLib "Katt" — creative blog template
  (source: https://colorlib.com/wp/template/katt/). TEMPLATES.md has THREE
  copies of this item (lines 267, 1472 and 2523 — mark ALL when done).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/katt/ (HTTP 200,
  full rendered DOM, 19.8 KB; page title "Katt - Tasty Blog Html Template",
  `<body class="home blog">`). Stylesheets: `css/clear.css`, `css/common.css`,
  `css/font-awesome.min.css`, `css/carouFredSel.css`, `css/sm-clean.css` +
  `style.css` (main, 25.4 KB). Fonts: Google Fonts **Montserrat** (main sans,
  body 20px/35px weight 400) + **PT Serif** (sparingly).
- **Screenshot:** `katt-free-creative-blog-website-template.jpg`
  (1200×993, viewed in browser) — dark charcoal design: `#2f2f2b` page,
  white/cream text, pale-yellow accents; hamburger top-left + square logo;
  hero photo of a creative workspace with white overlay text and 3 slider
  dots (one yellow); text-only poetic post; mixed image/text rows; uppercase
  spaced category labels; yellow zig-zag graphic. The demo brands itself
  "katt"; recreation uses the NEW name **Zine**.
- **Visual design (from DOM + CSS tokens + screenshot):** dark minimal
  editorial creative-blog aesthetic. Fixed header (logo left, hamburger
  right) → full-screen `#3a3a37` overlay menu with huge white links (45px,
  hover/current `#f5de87`) → single-column blog holder (max-width 1170px)
  of 7 alternating posts → block "Load more articles" button → footer with
  inline columns + pulsing heart.
- **Structure (1:1, section order):**
  1. `.doc-loader` (white preloader — optional).
  2. Header `.header-holder` (`padding-top: 115px; height: 85px`):
     - `.header-logo.left` (`margin-left: 100px`): square logo image.
     - `#toggle` hamburger (29×30, three 5px bars `#555750`; `.on` → X,
       bars white, position fixed) in `.toggle-holder.relative`
       (`margin-left: 30px; margin-top: 25px`).
  3. Full-screen menu `nav#header-main-menu.big-menu` (fixed, bg `#3a3a37`,
     opacity .95, z-index 10): `.main-menu.sm-clean` (`margin-top: 220px`)
     — links white 45px/65px; sub-menu 22px/30px; hover + `.current`
     `#f5de87`. Items: Home (current), About, About 2, About 3, Contact
     (submenu: Contact + Map).
  4. Blog holder `.blog-holder` (`.block.content-1170.center-relative`) —
     7 posts (alternating variants, see spec for exact copy):
     - post-1: hero slider — `.thumb-html.one_thumb.relative` +
       carouFredSel `#slider1` (3 images) + `.slider1_pagination
.carousel_pagination.left` dots (white; selected/hover `#f5de87`);
       overlay `.post-title-holder.one_title.absolute` (transparent):
       `h2.entry-title.excerpt` 36px/40px weight 700 ("We are design &
       digital studio based in New York. This is our showcase of crafted
       awesomeness.") + cat Design.
     - post-2: `.only-post-title-holder` text-only (24px/30px) + cat
       Handmade; zigzag `bottom: 30px; left: -90px`.
     - post-3: image left `.two_third_thumb.left` (770px) + title right
       `.one_third_title.right` (400px) + cat Interior; zigzag
       `bottom: 40px; right: 331px`.
     - post-4: image right + title left + cat Packaging; zigzag
       `bottom: 110px; left: -83px`.
     - post-5: image left `.one_third_thumb.left` (400px) + title right
       `.two_third_title.right` (770px) + cat Handmade; zigzag
       `bottom: 50px; right: -92px`.
     - post-6: `.only-post-title-holder` text-only + cat Handmade; zigzag
       `bottom: 25px; left: -80px`.
     - post-7: image right + title left (`margin-top: 305px`) + cat
       Lifestyle; zigzag `bottom: 120px; left: 310px`.
     - `.cat-links`: 11px uppercase `letter-spacing: 5px`, comma-separated,
       `padding: 40px 100px 20px` (`.one_title`/`.only-post-title-holder`:
       `padding-top: 75px`, commas `#faf8f3`). `.entry-title`:
       `padding: 0 100px`, max-width 870px. `.post-title-holder` bg white
       (`.one_title` transparent, absolute).
  5. More posts: `a.more-posts` (block; `#faf8f3` on `#3a3a37`,
     `padding: 25px 10px`, `font-size: 22px`, hover `#464642`):
     "Load more articles".
  6. Footer `.footer` (`margin-top: 170px; padding-bottom: 70px; color:
#50504c`): `ul` with `.left-footer-content` (40%, Colorlib link),
     `.center-footer-content` (footer logo), `.right-footer-contnet` (40%,
     social links); `.fa-heart` `#e76f7d` pulsing. Mobile: stack, hide left,
     center logo `margin-bottom: 45px`.
  7. `.fixed.scroll-top` (65×85 back-to-top, shown on scroll).
- **Design tokens extracted from `style.css`:**
  - Page bg **`#2f2f2b`**; overlay/more-posts bg **`#3a3a37`** (hover
    `#464642`).
  - Accent pale yellow **`#f5de87`** (menu hover/current, dot selected);
    caption bg **`#f5e083`**; blockquote quote mark `#F5E083`.
  - Text: links `#121212`, hover `#aaa6a0`; cream `#faf8f3`; muted
    `#aaa6a0`/`#cdc8c1`/`#cec8bf`/`#b5b5b5`/`#7b7976`; footer `#50504c`;
    hamburger bars `#555750`; heart `#e76f7d`.
  - Fonts: **Montserrat** + **PT Serif** (Google Fonts).
  - Buttons: `.more-posts` — `#3a3a37` bg, `#faf8f3` text, `padding: 25px
10px`, 22px, hover `#464642`, no radius.
  - Spacing: header `padding-top: 115px; height: 85px`; content max-width
    1170px; footer `margin-top: 170px; padding-bottom: 70px`; title padding
    `0 100px`; cat-links `40px 100px 20px`.
  - Blockquote: Montserrat 24px/47px `#b5b5b5`, `margin: 100px 0 60px 100px`.

## Implementation tasks

- [ ] Spec-first: `openspec/specs/template-zine/spec.md` already on main
      (prep). Open a `feat/template-zine` branch.
- [ ] Copy the simplest existing blog-style app (e.g. `apps/crumb` or
      `apps/petal`), rename package to `@free-react-templates/zine`, run
      `npm install` at root so `package-lock.json` registers the workspace
      (grep `free-react-templates/zine`).
- [ ] Ensure `vite.config.ts` registers `injectUiSource()` (see
      docs/conventions.md) and app imports Button/ButtonLink/cn from
      `packages/ui` (knip trap — see repo memory notes).
- [ ] TDD: write tests first per spec requirement, then implement: 1. `Navbar` — square logo + hamburger toggle + full-screen overlay
      menu (Home/About/Contact, current state) + repo-standard dark-mode
      toggle. Desktop + mobile variants render duplicate links — use
      `getAllByRole` and index appropriately. 2. `HeroSlider` — 3+ slides, overlaid title + Design tag, pagination
      dots (aria-labels), next/prev behavior. 3. `BlogList` — 7 posts with layout variants (image-left, image-right,
      text-only), each with title + uppercase category tag. 4. `LoadMore` — "Load more articles" block button on dark bg. 5. `Footer` — link column, centered logo, social icons, copyright;
      pulsing heart accent.
- [ ] Theme tokens in `@theme`: `--color-brand: #f5de87`, page bg `#2f2f2b`,
      overlay `#3a3a37`, cream `#faf8f3`, footer text `#50504c`, heart
      `#e76f7d`.
- [ ] Montserrat + PT Serif Google Fonts `<link>` in index.html.
- [ ] Placeholders: `picsum.photos/seed/zine-<n>/<w>/<h>`; lucide-react
      icons; inline SVG brand icons. Zigzag decoration: inline SVG or styled
      line (never copy `images/zigzag.png`).
- [ ] Paraphrase demo copy where needed but keep the same kind of content
      (hero studio statement, poetic text-only posts, short post titles,
      categories Design/Handmade/Interior/Packaging/Lifestyle).
- [ ] Verify: `scripts/verify-app.sh zine` (typecheck + lint + 100% coverage + build). Then push branch, open PR, squash-merge immediately
      (`gh pr merge --squash --delete-branch`).
- [ ] After merge: mark ALL THREE TEMPLATES.md Katt copies (lines 267, 1472, 2523) `[x]` with Surge URL `https://free-react-templates-zine.surge.sh` + homepage, run `npm run readme:status`, commit + push. Verify
      `npx knip` + curl the Surge URL.
