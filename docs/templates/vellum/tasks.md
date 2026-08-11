# Vellum (ColorLib Readit) — Tasks & Design Notes

> Recreation of ColorLib "Readit"
> (https://colorlib.com/wp/template/readit/) under the NEW name **Vellum**
> (a fine writing/publishing surface — the reading/writing spirit of
> "Readit" without reusing the source name), per the monorepo naming
> mandate.

## Design notes (replication findings)

- **Original:** ColorLib "Readit" — blog website template
  (source: https://colorlib.com/wp/template/readit/, category "Blog (60)").
- **Preview DOM analyzed:** `https://preview.colorlib.com/theme/readit/`
  (HTTP 200, ~25 KB HTML + `css/style.css` ~66 KB + Bootstrap 4 CSS parsed
  for tokens). The live preview is the authoritative reference.
- **Screenshot:** `readit-free-template.jpg` in TEMPLATES.md matches the
  live design (magenta→orange diagonal gradient hero over a photo of a
  woman with a hat, huge white "Readit blog" headline, scroll arrow, then
  white blog list with image-left/text-right entries). One discrepancy: the
  screenshot's navbar logo renders warm-toned, but the live CSS styles the
  navbar `bg-dark` #343A40 with a WHITE brand + links — follow the live
  preview.
- **Visual design (from live preview + screenshot):** bold, contemporary
  blog aesthetic — near-black navbar, a full-viewport hero dominated by a
  vivid magenta→orange diagonal gradient over photography, huge Poppins
  display type, and a clean white content area of alternating
  image/text blog rows. Warm gold #FFD369 is the single accent for
  buttons, hover states, and the active pagination page.
- **Structure (1:1, section order):**
  1. Navbar (`ftco_navbar bg-dark navbar-dark`): brand "Readit." (white) +
     links Home · Articles · Team · Contact (18px,
     rgba(255,255,255,.8), hover #FFD369). `.scrolled` → fixed, WHITE bg +
     shadow (margin-top -130px slide-in). Mobile hamburger.
  2. Hero (`hero-wrap js-fullheight`, bg image + parallax): `.overlay` =
     `linear-gradient(45deg, #F200FF 0%, #FFBA42 100%)`, opacity .8.
     Left-aligned content: `h2.subheading` "Hello! Welcome to" (18px
     white), `h1` "Readit blog" (10vw white Poppins 700 lh 1.2), lorem
     paragraph (col-md-7), `mouse` scroll indicator (80px; 30px rounded
     wheel + arrow-down).
  3. Blog list (`ftco-section`, col-md-12): NINE `.case` rows — image link
     left (`col-xl-8`, `<a class="img">` background-image, height 400px) +
     text right (`col-xl-4`, pl-md-3): `span.subheading` category tag
     (uppercase 14px rgba(0,0,0,.2); demo: Illustration / Application /
     Design), `h2` title link (40px 700 #000), `.media-social`
     twitter/facebook/instagram (opacity 0 → hover reveal; always visible
     ≤1199px), `.meta` "11/13/2019 | 12 min read" (gray). Mobile: image
     stacks (mb-3 mb-md-0).
  4. Pagination (`block-27`, centered, mt-5): `« 1 2 3 4 5 »` — 40px items,
     `li.active` bg #FFD369 + white text.
  5. Footer (`ftco-footer ftco-bg-dark`, bg #3C312E): 4 widgets — About
     (brand + blurb + socials) · "latest News" (2 items: headline + meta
     "Oct. 16, 2019 · Admin · 19") · "Information" (Home/About/Articles/
     Contact) · "Have a Questions?" (203 Fake St. Mountain View, San
     Francisco, California, USA / +2 392 3929 210 / info@yourdomain.com).
     Bottom: "Copyright © All rights reserved | This template is made with
     ♥ by Colorlib".

## Design tokens (from `css/style.css` + preview DOM)

| Token         | Value(s)                                                                                                              |
| ------------- | --------------------------------------------------------------------------------------------------------------------- |
| Brand         | #FFD369 (warm gold) — btn-primary bg/border, nav-link hover, active pagination item                                   |
| Hero gradient | linear-gradient(45deg, #F200FF 0%, #FFBA42 100%) over hero image, opacity .8                                          |
| Headings      | #000 (case h2, 40px 700); hero h1 #FFF 10vw 700 Poppins lh 1.2; category tag rgba(0,0,0,.2) uppercase 14px            |
| Navbar        | bg #343A40; links rgba(255,255,255,.8) 18px → #FFD369 hover; brand #FFF; scrolled: bg #FFF + shadow                   |
| Footer        | bg #3C312E; widget h2 #FFF 20px normal weight, mb 40px                                                                |
| Font          | "Poppins", Arial, sans-serif everywhere — Google Fonts `<link>` (400, 500, 700)                                       |
| Buttons       | Bootstrap .btn: radius 3px, no shadow; .btn-primary bg/border #FFD369 white text; hover transparent bg + #FFD369 text |
| Card image    | 400px tall, cover (implement `<img class="h-[400px] w-full object-cover">`)                                           |
| Pagination    | block-27: 40px square centered items; active bg #FFD369 white text                                                    |
| Mouse scroll  | 80px tall, 30px wide rounded wheel with arrow-down icon; animates                                                     |

## Implementation notes (for the implementer)

- Tailwind `@theme`: `--color-brand` = #FFD369, `--color-flare` = #F200FF,
  `--color-ember` = #FFBA42, `--color-ink` = #000, `--color-coal` = #343A40,
  `--color-cocoa` = #3C312E. Use via Tailwind classes per conventions.
- Google Fonts `<link>` in `index.html`: Poppins 400, 500, 700.
- The only dynamic pieces: navbar scroll state (sticky/fixed swap to white
  after passing the hero) and the mobile menu toggle. Both are simple React
  state; the scroll listener must clean up on unmount.
- Blog list: 9 entries from an array (title, category, date, readTime,
  picsum seed). Render as alternating full-width rows (image col-xl-8 /
  text col-xl-4 — NOT a masonry grid). Group hover: reveal the social
  icons (lucide: Twitter/X?, Facebook, Instagram) — `group-hover:opacity-100`
  with `opacity-0` at rest; force visible on mobile via
  `max-lg:opacity-100` (or equivalent).
- Blog titles: use the demo's generic title or the kind-of-content
  paraphrase ("Build a website in minutes with Adobe Templates" is fine to
  paraphrase per replication rules — keep headline + blurb + meta shape).
- Pagination: render « 1 2 3 4 5 » as links; page 1 active (gold). No real
  routing needed — `href="#"`-style links are acceptable, or a `button`
  with aria-labels for the arrows.
- Footer: 4-widget grid (lg:grid-cols-4 or the reference's col widths),
  latest-news items with small date/author/comment meta, contact column
  with MapPin/Phone/Mail lucide icons. Copyright line verbatim-ish.
- Hero scroll indicator: an 80px mouse-shaped element with a rounded wheel
  - ChevronDown icon; give it `aria-label="Scroll to blog list"` and make
    it an `<a href="#blog">` anchor to the blog section.
- Placeholders: `picsum.photos/seed/vellum-<n>/<w>/<h>` — blog images
  1200×400 (reference aspect: 400px tall), hero 1920×1080.
- Do NOT copy the demo's images, fonts files, or CSS — recreate tokens in
  Tailwind. No icon fonts (icomoon/flaticon) — lucide only.
- The hero overlay is a gradient, NOT a solid color — 45deg, ~80% opacity
  (reference uses `.overlay { opacity: .8; background: linear-gradient(...) }`).

## TODO (prep stream does NOT implement)

- [ ] Implementer: copy simplest existing app → `apps/vellum`
- [ ] Implementer: write tests (red) per spec scenarios, then
      implementation (green) — 100% coverage
- [ ] Implementer: `scripts/verify-app.sh vellum` until green
- [ ] Implementer: mark `[~]` → `[x]` in TEMPLATES.md + surge URL,
      `npm run readme:status`, PR + immediate squash merge
