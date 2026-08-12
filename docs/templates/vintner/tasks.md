# Vintner (ColorLib Wines) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-vintner`.

## Design notes (replication findings)

- **Original:** ColorLib "Wines" — wine shop / winery landing template
  (source: https://colorlib.com/wp/template/wines/; TEMPLATES.md has FOUR
  copies of this item — lines 533, 1229, 1611, 1793 — mark EVERY copy `[x]`
  when done).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/wines/ (HTTP
  200, 24 KB rendered DOM, title "Wines — Website Template by Colorlib").
  Main stylesheet `css/style.css` (~30 KB) plus bootstrap.min, owl.carousel
  - theme, jquery-ui, fancybox, bootstrap-datepicker, aos, flaticon,
    icomoon. **No Google Fonts `<link>` in the preview HTML** — the CSS
    assumes Cinzel/Montserrat are preloaded; the recreation must load both via
    Google Fonts `<link>`s in `index.html`. Cross-checked against the
    TEMPLATES.md screenshot (`wines-free-template.jpg`, 1200×946, AVIF —
    viewed in the browser) — header + hero match; below-the-fold sections
    confirmed from the DOM. The demo brands itself "Wines"; recreation uses
    the NEW name **Vintner**.
- **Design tokens (from `css/style.css`):**
  - Brand: `#930077` deep wine purple/magenta (nav active, mobile hover,
    `.more` links, active carousel dots, product price, sticky-nav
    underline) → `@theme` token `brand`.
  - Rating gold: `#ffbd39` (product stars).
  - Buttons: pill `border-radius: 30px`, solid black `#000`, white text
    (`.btn` base; `.btn.add` = Add to Cart + shopping-bag icon).
  - Surfaces: white `#fff` (navbar/page/card overlay/footer), light band
    `#f4f5f9`/`#edf0f5` (testimonials), product panel `#f3f4f5`, footer
    `border-top 1px #efefef`, text `#25262a`/`#212529`, struck price
    `#ccc`.
  - Hero: full-viewport slides (100vh, min-height 700px), bg image + `#222`
    overlay, centered white Cinzel headline + Cinzel 1.5rem white
    sub-title.
  - Section titles: Cinzel 2rem weight 400, centered, `margin-bottom:
50px`.
  - Navbar: white, Cinzel bold, sticky.
  - Footer: centered `.85rem`, `padding: 7rem 0`, top border.
- **Visual design (screenshot + DOM):** clean high-contrast editorial
  layout — centered serif wordmark logo ("WINES CO." + "SINCE 1985"
  tagline with short underline) above white Cinzel nav (HOME / ABOUT /
  WINES / SHOP / CONTACT, active `#930077`); full-bleed hero of hands
  holding dark grapes in green vineyard bokeh under a dark overlay with
  "ROYAL WINE" label + "GRAPE WINE" headline, arrow + dot controls (active
  dot `#930077`); white products band, light-grey testimonial carousel,
  blog band, centered minimal footer.

## Structure (1:1 section order)

1. **Header** — `header-top`: centered logo (text wordmark "Vintner",
   Cinzel, tagline + underline) → `site-navbar` (white, Cinzel bold,
   sticky, centered): Home / About / Wines / Shop / Contact; mobile
   hamburger opens slide-in menu.
2. **Hero slider** (2 slides, owl-style carousel, arrows + bottom-center
   dots):
   - Slide 1 (bg hero_1.jpg): sub-title "Royal Wine" + H1 "Grape Wine".
   - Slide 2 (bg hero_2.jpg): sub-title "Welcome" + H1 "Wines For
     Everyone".
3. **Products** (`site-section mt-5`): H2 "Our Products" + lorem sub-line +
   "View All Products →" link; 3 cards (`wine_v_1 text-center pb-4`,
   images wine_1/2/3.png): h3 name ("Trius Cabernet France 2011"), price
   `$629.00`; hover overlay `.wine-actions` (white panel fades in):
   name, `<del>$900.00</del>` grey + `$629.00` brand-colored Cinzel 20px,
   4/5 gold stars, black pill "Add to Cart".
4. **Testimonials** (`site-section bg-light` + `owl-slide-3`): sub-title
   "Welcome" + H2 "Wines For Everyone"; 4 quote slides, attribution
   "— Collin Miller / — Harley Perkins / — Levi Morris / — Allie Smith"
   with round person photos.
5. **Blog** (`site-section`): H2 "Wine's Blog" + lorem sub-line + "View
   All Products →" link; 3 post cards (`post-entry-1`): image
   (img_1/2/3.jpg), Cinzel 20px title ("What You Need To Know About
   Premium Rosecco"), lorem excerpt, meta `.8rem` ("Dave Rogers in News").
6. **Footer** (`.footer`): centered `.85rem`, `padding: 7rem 0`,
   `border-top 1px #efefef`, copyright + Component Dock link (replaces
   "made with by Colorlib").

## Implementation tasks

- [ ] Scaffold app: `cp -r apps/<simplest existing app> apps/vintner`;
      rename package to `@free-react-templates/vintner`; register workspace
      (`npm install --package-lock-only`); `public/CNAME` =
      `vintner.free.componentdock.com`; `"homepage"` =
      `https://vintner.free.componentdock.com`
- [ ] `index.html`: Google Fonts `<link>`s — Cinzel (400, 700) + Montserrat
      (300, 400, 600)
- [ ] `@theme` tokens: `brand` `#930077`, `gold` `#ffbd39`, `ink`
      `#25262a`, light band `#f4f5f9`, panel `#f3f4f5`
- [ ] Components: Header (logo + sticky nav + mobile menu), HeroSlider
      (2 slides, auto-advance, arrows/dots), Products (3 cards + hover
      overlay), Testimonials (quote carousel, 4 slides), Blog (3 posts),
      Footer (centered + Component Dock link)
- [ ] Placeholder images: picsum seeds `vintner-<n>/<w>/<h>`; SCREEN the
      hero seeds (want grape/vineyard-ish subjects) per the
      seed-screening method before pinning
- [ ] TDD: tests first per section; 100% coverage (desktop + mobile nav
      duplicate-link queries use `getAllByRole`)
- [ ] Gate: `scripts/verify-app.sh vintner` (typecheck + lint + coverage +
      build)
- [ ] Bookkeeping: mark TEMPLATES.md lines 533, 1229, 1611, 1793 `[x]` +
      surge URL; `npm run readme:status`
- [ ] PR description: source slug, preview URL, tokens, what differs
      (new name, picsum placeholders, text wordmark logo)
