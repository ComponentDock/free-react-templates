# Framely (ColorLib Boto) — Tasks & Design Notes

> Prep artifacts for the PREP stream. Implementation ships later on
> `feat/template-framely` by an implementer stream.

## Design notes

- **Original:** ColorLib "Boto" — free photography studio website template.
  Source: https://colorlib.com/wp/template/boto/. New name: **framely**
  (photography "frames"; no collision with `ls apps/` or existing specs).
  Boto appears once in TEMPLATES.md (line 350, Bootstrap section, first
  unchecked — the claim).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/boto/`
  (HTTP 200, 6.5KB) + stylesheet `css/style.css` (15.9KB). Full rendered DOM
  extracted; structure below is from the DOM + CSS tokens. Screenshot
  `boto-photography-website-template.jpeg` (1200×946) confirms: pure white
  bg, black/grey text, green #8DB952 accent (active HOME link, buttons),
  centered logo "#Boto" in bold black sans, uppercase nav, big coverflow
  photo carousel with "Nature" / "Photography" caption below, minimal
  centered copyright footer.
- **Structure observed (1:1):**
  1. `header.header` (container-fluid, padding 40px 45px 0):
     - `header__social` (left col): `fa-facebook`, `fa-twitter`,
       `fa-instagram` icon links.
     - `site-logo` (center col, text-center): `img/logo.png` → text logo
       "Framely".
     - `header__switches` (right col): `search-switch` (`fa-search`),
       `nav-switch` (`fa-bars`), `fa-shopping-cart`.
     - `nav.main__menu > ul.nav__menu`: Home (`menu--active`), About,
       Gallery, Blog (▾ sub-menu: "Blog Single"), Contact. Links 16px 700
       uppercase #7E858B, padding 5px 2px, margin-right 40px; active/hover →
       #222222 + 6px #8DB952 underline bar (`:after` width 0→100%, bottom
       8px, z-index -1, 0.3s); sub-menu dropdown (top 100%, margin-top
       15px). Mobile <576px: nav hidden, slicknav hamburger.
  2. `section.hero__section` (padding-top 120px, margin-bottom 90px; mobile
     pt 30px):
     - `div.hero-slider` (slick: centerMode + variableWidth coverflow,
       slidesToShow 1, autoplay 3000ms, pauseOnHover false, arrows false,
       infinite, wheel = prev/next): 7 `div.slide-item` (padding 0 5px,
       cursor pointer) each `a.fresco` (data-fresco-group="projects") with
       `img/hero-slider/N.jpg` (N=1..7). Click → Fresco fullscreen lightbox.
     - `div.hero-text-slider` (asNavFor-synced to hero, text-align center,
       padding-top 50px, max-width 800px, margin 0 auto): 7 `div.text-item`
       — `h2` title (36px 700 #222222, line-height 1.4) + `p` "Photography"
       (16px #7E858B, line-height 1.8). Titles: "Nature", "Red Heartbeat",
       "Blue Dreem", "Christian Church", "Red Darkness", "Beauty with
       Brain", "Remarkable".
  3. `footer.footer__section` (container): `footer__copyright__text`
     (text-center, padding-bottom 5px): p 16px "Copyright © <year> All
     rights reserved | This template is made with ♥ by Colorlib" — heart
     `#d32a2a`, link `#7E858B` underline, hover `#8DB952` → repo-standard
     footer credit.
  4. `div.search-model` (fixed fullscreen, bg #ffffff, z-index 99999,
     display none by default; toggled by `.search-switch`): centered
     `.search-close-switch` "+" + `form.search-model-form` with
     `input#search-input` placeholder "Search here.....".
  - Other pages exist (about/gallery/blog/blog-single/contact) sharing
    style.css — not recreated; nav links become dead anchors or stubs.
- **Design tokens:**
  - Font: **Arimo** (body + headings; Google Fonts `@import` in style.css),
    **Raleway** for small tags/labels (12px 700). Load both via `<link>`.
  - Brand green **#8DB952** (site-btn bg, nav underline bar, footer link
    hover); dark ink **#222222** (headings, nav active/hover); body grey
    **#7E858B** (p text, nav links, footer link); heart red **#d32a2a**.
  - Neutrals: #f3f3f3 (post-tag pill bg), #e8e8e8 (borders), #ffffff (search
    overlay).
  - Buttons `.site-btn`: bg #8DB952, white 16px 700, padding 16px 15px,
    min-width 180px, line-height 1, border none, **border-radius 2px**,
    optional 24px icon (top 5px, margin-left 4px).
  - Nav underline: 6px #8DB952 bar under active/hover link (width
    animation 0.3s).
  - Spacing: header 40px 45px 0; hero pt 120px / mb 90px (mobile pt 30px);
    text slider pt 50px max-width 800px; slide-item padding 0 5px; footer
    copyright pb 5px.

## Implementation tasks (for the implementer stream)

- [ ] Scaffold `apps/framely` (copy simplest existing app; package
      `@free-react-templates/framely`), wire into workspace + lockfile.
- [ ] Spec tests (red) per `openspec/specs/template-framely/spec.md`
      requirements: header, hero slider, footer, search overlay,
      composition.
- [ ] Implement (green) with 100% coverage: - Header: white bar — lucide social icons left (Facebook, Twitter,
      Instagram), centered "Framely" bold text logo, right switches
      (Search, Menu, ShoppingCart; hamburger on mobile), centered
      uppercase nav (Home active, About, Gallery, Blog, Contact) with
      green underline on active/hover, mobile collapsible menu. - Hero: center-mode coverflow photo carousel (7 picsum slides,
      autoplay ~3s, side slides peeking), click → lightbox (fullscreen
      image overlay), synced caption slider below (title + "Photography"
      label). - Footer: centered copyright bar with repo-standard credit + red
      heart icon. - Search overlay: fullscreen white modal, "+" close, input
      placeholder "Search here.....".
- [ ] Images: `https://picsum.photos/seed/framely-<n>/<w>/<h>` for the 7
      hero slides (e.g. 800×600) — keep them photo-like (landscape shots).
- [ ] Fonts: Arimo + Raleway via `<link>` in `index.html`.
- [ ] Icons: lucide-react (Facebook, Twitter, Instagram, Search, Menu,
      ShoppingCart, Heart, X/Plus).
- [ ] Verify: `npm run verify:app -- framely` (typecheck + lint + 100%
      coverage + build); run full `npm run gate` once before PR.
- [ ] PR: `feat: framely — photography studio template (ColorLib Boto)`,
      squash merge immediately; then mark Boto row (line 350) `[x]` + surge
      URL in TEMPLATES.md + `npm run readme:status`.
