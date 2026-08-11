# Fortis (ColorLib Mighty) — Tasks & Design Notes

> Recreation of ColorLib "Mighty" — free Bootstrap web-design-agency
> template (https://colorlib.com/wp/template/mighty/) under the NEW name
> **Fortis** (Latin for "strong/mighty" — a semantic echo of the source
> name without reusing it; single lowercase word, no collision with
> `apps/`, `openspec/specs/` or `docs/templates/` — verified 2026-08-11),
> per the monorepo naming mandate (never reuse the ColorLib source name).

## Design notes (replication findings)

- **Original:** ColorLib "Mighty" — page title "Mighty &mdash; Website
  Template by Colorlib". TEMPLATES.md category: **Bootstrap (216)**, item at
  line 452 (`- [ ]`, source NOT shipped anywhere). The recreation brands
  itself **Fortis**.
- **Live preview DOM analyzed (verified 2026-08-11):**
  `https://preview.colorlib.com/theme/mighty/` (HTTP 200, ~21 KB HTML +
  `css/style.css` ~23 KB + customized `css/bootstrap.min.css`; the preview
  is REACHABLE). Screenshot `mighty-free-template.jpg` (1200×946, viewed in
  browser) matches the live DOM 1:1.
- **Visual design:** clean modern agency landing. Dark photo hero
  (workspace with laptop + monitor + coffee cup, `rgba(0,0,0,0.7)` overlay),
  centered bold white headline "Mighty Web Design Agency", lorem line,
  ghost "Contact Us" pill (transparent, white border, white text; hover →
  white bg + black text). **Hamburger-only navigation** (no inline desktop
  link bar) — white logo left, white hamburger right; on scroll the navbar
  turns solid white with shadow, logo turns green, links black. Below: white
  About row (3 columns: "About Us" text + solid green "Our works" pill +
  vertical desk photo + "Our expertise and skills" with green progress
  bars), light `#f6f5f5` services row (4 white icon cards), white 6-tile
  portfolio grid (hover → dark overlay + white plus), light counters band,
  white "See Our Studio" block (centered image + 70px circular play
  button), light testimonials row (3 circular headshots + italic quotes),
  white blog row (3 post cards), light `#efefef` footer. Signature
  **seafoam green `#01d28e`** accent on white/light-grey neutrals; Muli
  sans-serif (300/400/700).
- **Section order (1:1, verified from live DOM):**
  1. Off-canvas mobile menu (`div.site-mobile-menu`): close toggler +
     body filled by JS cloning `ul.js-clone-nav` — Home / About / Work /
     Journal / Contact.
  2. Navbar (`header.site-navbar`, absolute top, transparent): brand
     "Fortis." left (white bold 1.7rem), hamburger toggler right; sticky
     (`is-sticky`) → `background: #fff`, shadow `4px 0 20px -5px
rgba(0,0,0,0.2)`, logo `#01d28e`, links `#000`.
  3. Hero (`div.site-section-cover.overlay`, bg hero_1.jpg + overlay
     `rgba(0,0,0,0.7)`; height `calc(100vh - 196px)` min 677px, ≤991px
     `calc(70vh - 196px)` min 600px): centered col-md-7 — h1 "Mighty Web
     Design Agency" (3rem / 2rem mobile, white, weight 300, line-height 1),
     lorem p (18px white), "Contact Us" ghost pill
     (`btn.btn-outline-white.py-3.px-5`).
  4. About (`div.site-section`, 3 cols): col-md-4 "About Us" (h2.h4) + 2
     paragraphs + "Our works" solid green pill (`btn-primary.text-white
.px-5`); col-md-4 `about_1.jpg` image; col-md-4 "Our expertise and
     skills" + 4 progress bars (Writing 55% / WordPress 85% / Bootstrap
     93% / jQuery 83%; `.progress.rounded-0` height 7px, `.progress-bar`
     bg `#01d28e`, label + percent on one line).
  5. Services (`div.site-section.bg-light` **`#f6f5f5`**): heading-29190
     "Our Services" + 4 `service-29128` cards (col-md-6 col-lg-3): icon
     (source repeats `icon-desktop_mac` for ALL four — recreation uses one
     distinct lucide icon per service), h3 18px (Web Design / Graphic
     Design / Web Apps / Ecommerce), lorem; white bg padding 20px, hover
     shadow `0 4px 30px -5px rgba(0,0,0,0.2)`.
  6. Works (`div.site-section`): heading-29190 "Our Works" + 6 `item.web`
     tiles (col-md-6 col-lg-4): `a.item-wrap` (radius 4px) + `span.icon-add`
     - img (img_1..6.jpg); hover → overlay `rgba(0,0,0,0.4)` + white plus
       scales in. (fancybox lightbox NOT recreated.)
  7. Counters (`div.site-section.bg-light`): 4 `fact-39281` (col-md-6
     col-lg-3): 40px icon + number + label — 83 Happy Clients, 3892 Cup of
     Coffee, 3,923,892 Line of Codes, 3892 Project Finish.
  8. See Our Studio (`div.site-section`): heading-29190 + col-md-8
     `a.btn-video_38929` (fancybox → vimeo): img_1.jpg + 70px circular play
     button (2px white border, white icon) + overlay `rgba(0,0,0,0.2)`.
  9. Testimonials (`div.site-section.bg-light`): heading-29190 + 3 columns
     (col-lg-4 col-md-6): 70px circular photo (person_1..3.jpg),
     `blockquote.quote_39823` (18px italic), "&mdash; Chris Smith".
  10. Blog (`div.site-section.bg-white`): heading-29190 "Blog" + 3
      `post-entry-1` cards (col-lg-4 col-md-6): image (img_1..3.jpg) +
      contents (white bg, padding 20px): h2 22px title link, meta "July
      17, 2019 by Admin" (`#ccc`), excerpt.
  11. Footer (`footer.site-footer`, bg **`#efefef`**, padding 4em/8em):
      col-lg-3 "About Me" + paragraph (`#777`); col-lg-8 → col-lg-6 "Quick
      Links" (About Us / Testimonials / Terms of Service / Privacy /
      Contact Us, links `#01d28e` hover black) + col-lg-6 "Connect"
      (social_29128: 50px circles bg `rgba(1,210,142,0.2)`, facebook /
      instagram / twitter) + "Newsletter" (email input height 55px + green
      "Send" pill); bottom `border-top` copyright bar (own credit line, no
      Colorlib link).
- **Design tokens (from `css/style.css` + `css/bootstrap.min.css`,
  verified 2026-08-11):**
  - Brand green **`#01d28e`**: `.btn-primary` bg (customized Bootstrap —
    "Our works" / newsletter "Send"), `.progress-bar` bg, nav link hover +
    active, sticky logo, footer links, social circle tint
    `rgba(1,210,142,0.2)`, post title hover.
  - Buttons: `.btn` pill **radius 30px**, padding 10px 20px, bold; ghost
    variant `.btn-outline-white` (white border/text, hover white bg +
    black text).
  - Section bgs: `bg-light` **`#f6f5f5`** (custom, NOT `#f8f9fa`); blog
    `bg-white`; footer `#efefef`; hero overlay `rgba(0,0,0,0.7)`.
  - Font **Muli** (400/700 Google Fonts link; body 300 weight, 1.7
    line-height, `#364d59`). `.serif` (Hepta Slab) utility exists but is
    unused on index — headings are Muli.
  - heading-29190: centered, double underline — 80px×2px black bar at
    bottom:-6px + 50px×2px black bar at bottom:0, both centered.
  - Hero h1 3rem (2rem ≤991px) weight 300 white; hero p 18px white; hero
    container `calc(100vh - 196px)` min 677px.
  - Navbar absolute top padding 1rem (3rem ≤991px), logo 1.7rem bold.
  - Cards: service white padding 20px hover shadow; post contents white
    padding 20px h2 22px; item radius 4px + hover overlay `rgba(0,0,0,0.4)`
    - white plus scale-in; studio play 70px circle 2px white border +
      overlay `rgba(0,0,0,0.2)`; person pics 70px radius 50%; quote 18px
      italic; meta `#ccc`; fact icon 40px; form-control height 55px.
  - Footer `#efefef` padding 4em/8em, links `#01d28e` hover black,
    paragraphs `#777`, headings 16px black, social circles 50px.
  - Section padding: `.site-section` 7rem 0 (3rem ≤991.98px).
- **Recreation decisions:** Tailwind grid (NO Bootstrap/owl/fancybox);
  navbar fixed top with hamburger-only nav → off-canvas/full-screen menu;
  sticky white + green logo on scroll; hero photo + overlay + ghost pill;
  progress bars static widths (optional animation fake-timer-safe); works
  tiles with hover overlay + plus (no lightbox — tiles may be inert
  buttons/links); studio play button inert/placeholder (no Vimeo embed);
  testimonials static 3 cols (no carousel); placeholder images
  `picsum.photos/seed/fortis-<n>/<w>/<h>`; distinct lucide icons per
  service; inline SVG brand social icons; title "Fortis — Web Design
  Agency Template"; "Mighty" → "Fortis" everywhere.

## Tasks (implementation order, TDD)

1. Scaffold `apps/fortis` (copy simplest existing app, rename package to
   `@free-react-templates/fortis`); `npm install` at root to register the
   workspace in `package-lock.json` (implementer's job — prep stream never
   touches the lockfile); verify `grep -c "free-react-templates/fortis"
package-lock.json`.
2. `index.html`: title "Fortis — Web Design Agency Template", Google Fonts
   `<link>` Muli (300;400;700).
3. `src/index.css`: `@theme` tokens — brand `#01d28e`, light section
   `#f6f5f5`, footer bg `#efefef`, hero overlay `rgba(0,0,0,0.7)`, body
   text `#364d59`; Muli font-family.
4. Tests (red) → `App.tsx` + components:
   - `Navbar.tsx` — brand "Fortis.", hamburger-only nav, off-canvas menu
     (Home/About/Work/Journal/Contact) with close control, sticky →
     white bg + shadow + green logo (test scroll state via a small hook or
     by asserting class on a scroll event; house pattern: `scrollTo` +
     `fireEvent.scroll` in `act()`).
   - `Hero.tsx` — photo bg + `rgba(0,0,0,0.7)` overlay, centered h1
     "Fortis Web Design Agency", lorem line, ghost "Contact Us" pill
     (white border/text, hover inversion via Tailwind classes).
   - `About.tsx` — 3 columns: "About Us" + 2 paragraphs + solid green
     "Our works" pill; centered photo; "Our expertise and skills" + 4
     progress bars (label + percent + green fill width — assert
     `style.width` or role="progressbar" attributes).
   - `Services.tsx` — `#f6f5f5` bg, heading "Our Services" (double
     underline), 4 cards (icon + title + description; one lucide icon per
     service — e.g. Monitor/LayoutGrid/AppWindow/ShoppingCart or similar).
   - `Works.tsx` — "Our Works" heading, 6 photo tiles, hover overlay +
     plus icon (group-hover utilities; assert images via
     `container.querySelectorAll('img')`).
   - `Counters.tsx` — `#f6f5f5` bg, 4 stats (icon + number + label).
   - `Studio.tsx` — "See Our Studio" heading, centered image, 70px
     circular play button (`aria-label="Play video"`) with dark veil.
   - `Testimonials.tsx` — `#f6f5f5` bg, heading, 3 columns (circular
     headshot, italic quote, "— Chris Smith").
   - `Blog.tsx` — white bg, heading, 3 post cards (image, 22px title
     link, meta "July 17, 2019 by Admin", excerpt).
   - `Footer.tsx` — `#efefef`, "About Me" + paragraph, "Quick Links"
     (5 links), "Connect" social circles (inline SVG brand icons),
     "Newsletter" email input + green "Send" pill, copyright bar.
   - Decorative photo strips have NO `img` role in the a11y tree — query
     with `container.querySelectorAll('img')`.
5. `scripts/verify-app.sh fortis` → green; `npm run spec:validate`.
6. PR description must include: source template (ColorLib Mighty,
   `https://colorlib.com/wp/template/mighty/`), live preview URL analyzed
   (`https://preview.colorlib.com/theme/mighty/`), design tokens
   (`#01d28e`, `#f6f5f5`, `#efefef`, `#364d59`, Muli), what differs
   (Fortis name, picsum placeholders, distinct lucide service icons vs the
   source's repeated desktop_mac, no fancybox lightbox / vimeo embed /
   owl carousel, reworded copy).
7. Ship: TEMPLATES.md `[~]` → `[x]` + surge URL + `npm run readme:status`;
   deploy URL `https://free-react-templates-fortis.surge.sh/`.
