# Furnly (ColorLib "Tangre") — Tasks & Design Notes

> Prep artifact for the PREP stream. Implementation ships later on
> `feat/template-furnly` by an implementer stream.

## Design notes (replication findings)

- **Original:** ColorLib "Tangre" — free furniture/interior website template
  (page `<title>` "Tangre Furniture"; source:
  https://colorlib.com/wp/template/tangre/). Listed in TEMPLATES.md under
  **Bootstrap (216)** (line 508; duplicate row at line 1194 under Business
  (365) — same template, one app only).
- **Preview REACHABLE (HTTP 200):** `https://preview.colorlib.com/theme/tangre/`.
  DOM fetched (`/tmp/tangre.html`, 30,383 bytes) + stylesheet `css/main.css`
  (`/tmp/tangre.css`, 67,761 bytes) + TEMPLATES.md screenshot
  (`tangre-free-template.jpg`, 1200×946 AVIF, viewed in browser). Screenshot
  cross-checks the DOM: white utility bar (phone + socials + "GET FREE
  QUOTE"), white header with "Tangre" logo + uppercase nav, full-width hero
  photo of a light-cyan interior (cabinet, picture frame, floor lamp) with
  "Creativity Beyond Life" + blue "Hire Us Now!" button, white content
  sections with light-grey weight-100 centered headings.
- **Aesthetic:** clean / modern / minimalist flat design, creative-agency
  vibe. Brand accent light blue `#3face4`, dark `#222222` offer + footer
  sections, white cards everywhere else, Poppins with light weights (100/200).
- **Note:** the hero `h1` "Creativity Beyond Life" reads as a 3-line stack
  (Creativity / Beyond / Life) via `<br>`s. Source phone differs between
  screenshot ("02-6613-558-746") and live DOM ("012-6532-568-9746") — use the
  live DOM value.

## Structure (top → bottom, single page)

1. **Header** — `.header-top` (60px, 12px): left phone link
   "012-6532-568-9746" (icon `#3face4`) in a `border-right: 1px solid #ccc`
   box; right: 4 social icon links (Facebook/Twitter/Dribbble/Behance, icons
   `#cccccc` → hover `#3face4`) + "Get free Quote" link (13px uppercase 500
   `#222`), each `ul` bordered right. `<hr>` `rgba(204,204,204,0.54)` below.
   `.main-menu` (100px): "Furnly" wordmark logo left (no asset copy), nav
   right: home / portfolio / about / blog ▾ (Blog Home, Blog Single) / pages
   ▾ (Portfolio Details, Elements) / contact. Links 12px uppercase 500
   `#222222`, padding 38.5px 8px, hover + `.menu-active` `#3face4`; dropdowns
   white `box-shadow: 0 6px 16px rgba(127,137,161,0.25)`, li min-width 180px,
   12px `#333` links, hover `#3face4`, open on hover. **Scroll:** hide top
   bar + `<hr>` (`#header.header-scrolled`). **Mobile:** hamburger →
   responsive menu (implement simple collapsible; source uses
   superfish/slicknav).
2. **Hero** (`.home-banner-area`, id="home") — cover bg photo (furniture
   interior; use `picsum.photos/seed/furnly-1`), `.fullscreen` 740px (600px
   md / 400px sm), `.banner-content` col-lg-9: h1 "Creativity Beyond Life"
   (72px, weight 100, `line-height: 77px`, white, 3 lines) + `.primary-btn
.header-btn` "hire us now!" (bg `#3face4`, radius 5px, 42px line-height,
   padding 0 30px; hover: transparent bg + 1px white border).
3. **Latest News** (`.latest-news-area .section-gap`, 120px padding) —
   `.main-title.text-center` (mb 80px): h1 "Latest News from all categories"
   (weight 100) + 16px subtitle (max-width 630px). 3 `.single-news.card`
   (col-lg-4 col-md-6, mb-30): top image + `.card-body` (1px
   `rgba(0,0,0,0.125)` border, padding 40px 28px): `.card-title` 20px weight
   200 link `#222` (titles: Addiction Whit Gambling / Headset No Longer Wired
   / Life Advice Looking At Window) + 16px text. Hover: card shadow
   `0 12px 32px rgba(26,26,26,0.12)`, border transparent, title `#3face4`.
4. **Our Offer** (`.our-offer-area .section-gap`, **bg `#222`**) — left
   col-lg-6: 2×2 `.single-circle` grid (mb-30): `.single-item` 150px →
   `.progressBar` SVG ring 170×170 (track white 4px round; circle stroke
   `#3face4` 4px round; source `data-progress="75"`; animate on view —
   recreate as static 75% arc or CSS-animated) + `.progressBar-percentage`
   center pill (100px circle, bg `#3face4`, white 24px value, padding
   40px 25px) + h4 label (white 20px weight 100, mt 35px): **1.5K Happy
   Clients / 10 Years of Experience / 250 Professionals / 369 On Going Job**.
   Right col-lg-5 (offset-lg-1): `.main-title.text-left`: h1 "We can be your
   digital Problems Solution Partner" + paragraph + `.primary-btn.offer-btn`
   "What we Offer" (1px white border, hover: white bg + `#222` text) +
   `.primary-btn.quote-btn` "Get a free Quote" (white bg, `#222222` text, 1px
   white border).
5. **Recent Completed Projects** (`.recent-completed-project .section-gap`) —
   `.main-title.text-center` "Our Recent Completed Projects" + subtitle.
   `.filters.project-filter` ul (center, mb 30px): All Categories (active) /
   Branding / Image Manipulation / Creative Work / Web Design / Print
   Material; `li` inline-block mr 30px. `.projects_inner` row: **6**
   `.col-lg-4.col-sm-6` cells (filter tags in HTML: `web all`, `brand all
creative`, `brand`, `img-man all`, `brand work img-man all`, `brand`):
   `.projects_item` (radius 5px, overflow hidden) img + `:before` overlay
   `rgba(63,172,228,0.68)` opacity 0→1 + `.icon` center (source `icon.png` →
   lucide Plus/Eye/Expand icon, opacity 0→1). Below `.projects_text`
   (text-center, mt 15px): h4 gradient title
   `linear-gradient(to right, #8490ff 0%, #62bdfc 70%)` bg-clip:text
   (3D Helmet Design / 2D Vinyl Design / Creative Poster Design / Embosed
   Logo Design / 3D Disposable Bottle / 3D Logo Design) + p "Client Project"
   (14px mb 0). Cells are lightgallery anchors → implement simple accessible
   lightbox (note in PR).
6. **Testimonial** (`.testimonial-area .section-gap`) — cover bg photo +
   `:before` `rgba(63,172,228,0.68)` overlay. `.active-testimonial-carusel`
   (owl carousel): 4 slides = 2 unique people ×2 ("Mark Alviro Wiens", "Lina
   Harrington", both "CEO at Google"). `.single-testimonial` white card
   (d-flex flex-row, padding 25px 30px, margin 15px, 1px `#eeeeee` border,
   hover shadow `-10px 10px 20px rgba(221,221,221,0.62)`): `.thumb` circular
   portrait (mr 30px) + `.desc`: quote p + h4 name (weight 200, hover
   `#3face4`, mb 5px) + p "CEO at Google" (mb 0). Implement with a simple
   auto/click carousel (arrows or dots) — note in PR.
7. **Latest Blog** (`.latest-blog-area .section-gap`) — `.main-title` "Latest
   From Our Blog" + subtitle. 4 `.single-blog` (col-lg-3 col-md-6): `.thumb`
   img (overflow hidden), `.date` pill (bg `#000`, white, weight 100, padding
   2px 15px, width 115px, center, mt 20px) "10 Jan 2018", h4 link (weight
   100, mb 12px, hover `#3face4`): Cooking Perfect Fried Rice in minutes /
   Secret of making Heart Shaped eggs / How to check steak if it is tender or
   not / Addiction When Gambling Becomes A Problem; excerpt p; `.meta-bottom`
   (justify-between): "15 Likes" (lucide Heart) + "02 Comments" (lucide
   MessageCircle).
8. **Footer** (`.footer-area .section-gap`, **bg `#222222`**) — col-lg-3
   `.single-footer-widget`: h6 "Top Products" (white 18px weight 200 mb 25px)
   - `.footer-nav` links `#777` (mt 8px, hover `#3face4`): Managed Website /
     Manage Reputation / Power Tools / Marketing Service. col-lg-6
     `.newsletter`: h6 "Newsletter" + p "You can trust us. we only send promo
     offers, not a single spam." + email input (white pill, radius 20px,
     line-height 38px, pl 20px, placeholder "Your Email Address") + Subscribe
     `.primary-btn` (pill radius 23px, bg `#3face4`, arrow icon lucide
     ArrowRight; **no backend** → validate + success state, note in PR).
     col-lg-3 `.mail-chimp`: h6 "Instragram Feed" + `.instafeed` 8-square grid
     (25% cells, 5px margins). `.footer-bottom` (pt 80px, justify-between):
     `.footer-text` "Copyright © <year> All rights reserved | This template is
     made with ♥ by **Component Dock**" — Component Dock links
     https://www.componentdock.com/ (replaces Colorlib credit; heart = lucide)
   - `.footer-social` 4 square links (bg `#111111`, 45px, white icons
     `#cccccc`, hover bg `#3face4`).

## Implementation tasks (implementer)

1. Scaffold `apps/furnly` from the simplest existing app (e.g. `apps/coinly`),
   rename package to `@free-react-templates/furnly`, CNAME
   `furnly.free.componentdock.com`, homepage
   `https://furnly.free.componentdock.com`.
2. `src/index.css` `@theme`: `--color-brand: #3face4`, `--color-body:
#777777`, `--color-ink: #222222`, `--color-dark: #111111`; Poppins Google
   Fonts `<link>` in `index.html`.
3. Components (one per section, TDD 100%): `Header` (utility bar + main
   menu + dropdowns + scroll-hide + mobile menu), `Hero`, `News`, `Offer`
   (SVG rings + counters + CTAs), `Projects` (filters + grid + lightbox),
   `Testimonials` (carousel), `Blog`, `Footer` (newsletter form
   validation/success + instagram grid + Component Dock link).
4. Section order: header → hero → news → offer → projects → testimonials →
   blog → footer. Images: `https://picsum.photos/seed/furnly-<n>/<w>/<h>`.
5. Run `bash scripts/verify-app.sh furnly`; PR with source slug + preview URL
   - tokens + deviations (carousel, lightbox, newsletter no backend,
     placeholder images, logo wordmark).
