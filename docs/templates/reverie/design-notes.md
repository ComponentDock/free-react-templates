# design notes — Reverie (ColorLib Weddingdreams)

Prep research, 2026-10-12. Source slug `weddingdreams` · preview
`https://preview.colorlib.com/theme/weddingdreams/` (HTTP 200, 32,645 B,
sha256 `1d447eb2…`). Live preview is the **sole** DOM/CSS reference — the
slug-only path is the only one alive (`theme/bootstrap/<slug>/` 404,
`/downloads/free/<slug>.zip` 404, `colorlib.com/etc/cs/<slug>/` 404).

## DOM skeleton (source)

```
header.header
  .container-fluid > .row
    .col-lg-2  .header__logo      → a > img logo.svg (131×23)
    .col-lg-8  nav.header__menu   → ul: Home(.active) · Services · Portfolio ·
                                    Pages(.dropdown: About/Team/Blog Details) ·
                                    News · Contact
    .col-lg-2  .header__right     → .header__right__social (4 links)
                                    .header__right__search > button.search-switch
  #mobile-menu-wrap > .slicknav_menu > button.slicknav_btn  (mobile only)
section.hero.set-bg               (style bg = img/hero.avif|png)
  .hero__text → picture(img/icon/hi.png 66×51) · h5 · h1 · p
section.services.spad
  .section-title → h2 + picture(img/icon/ti.png 50×15)
  6 × .col-lg-4 > .services__item → picture(img/icon/si-N.png) · h4 · p
section.features.spad
  .section-title → h2
  .filter__controls → 6 × button (All/Couple/Event/Music Live/Honeymoon/Photography)
  .feature__gallery → 6 × .fg__item[.category][.large_item|.mid_item].set-bg
                        → .fg__item__text → span + h2
  .load__more a → "View more"
div.counter.spad.set-bg           (style bg = img/counter-bg.avif|jpg)
  4 × .col-lg-3 > .counter__item → picture(img/icon/ci-N.png) · h2.counter_num · p
section.request
  .request__form
    .section-title (green) → span + h2 + p
    form → 4 fields (2×2) + button.site-btn
section.latest.spad
  .section-title → h2
  3 × .col-lg-4 > .latest__item → img · ul(3 li) · h4 a
div.logo
  .logo__carousel.owl-carousel → 10 × .logo__item
footer.footer
  .footer__top → .footer___subscribe (h4+p+form) | .footer__social (4 a)
  .row → 4 × .col-lg-3 (footer__logo / 3 × .footer__widget)
  .footer__copyright → p.footer__copyright__text | ul.footer__copyright__widget
div#search-overlay.search-model → close button + form.search-model-form
```

## CSS token reference block (from `css/style.min.css`)

```
:root  --bs-* Bootstrap 5 breakpoints (sm 576 md 768 lg 992 xl 1200 xxl 1400)

body            { font-family: Raleway, sans-serif }         /* + Cormorant Garamond display */
.header         { position:absolute; left:0; top:0; width:100%; background:#fff;
                  box-shadow:0 5px 10px #9a57571a }           /* rose-tinted shadow */
.header__menu ul li a      { font-size:14px; color:#0d0d0d; text-transform:uppercase;
                             letter-spacing:2px }
.header__menu ul li a:after{ width:5px; height:5px; background:#0d0d0d; border-radius:50%;
                             bottom:-9px; margin:0 auto; opacity:0 }
.header__menu ul li.active a:after / :hover a:after { opacity:1 }
.header__menu ul li .dropdown      { position:absolute; left:0; top:50px; width:140px;
                                     background:#111; padding:2px 0; transition:all .5s }
.header__menu ul li .dropdown li a { font-size:12px; color:#fff; font-weight:500;
                                     padding:8px 20px; text-transform:capitalize }
.header__right__social a   { font-size:16px; color:#444; margin-right:20px }
.hero           { height:866px; padding-top:330px }
.hero__text h5  { color:#fff; text-transform:uppercase; letter-spacing:2px }
.hero__text h1  { font-size:48px; color:#fff; text-transform:uppercase }
.set-bg         { background-repeat:no-repeat; background-size:cover; background-position:top center }
.spad           { padding-top:100px; padding-bottom:100px }
.section-title      { margin-bottom:45px; text-align:center }
.section-title h2   { color:#111; letter-spacing:4px; text-transform:uppercase }
.services           { padding-bottom:30px }
.services__item     { text-align:center; padding:40px 30px 30px; background:#fff;
                      transition:all .5s; margin-bottom:30px }
.services__item:hover { border-radius:10px; box-shadow:0 5px 39px #9a57571a }
.services__item h4  { font-size:22px; letter-spacing:2px; text-transform:uppercase }
.filter__controls   { text-align:center; margin-bottom:40px }
.filter__controls button { font-size:18px; color:#0d0d0d; text-transform:uppercase;
                           margin-right:40px; background:transparent; border:0 }
.feature__gallery   { display:grid; grid-template-columns:repeat(3,minmax(0,1fr));
                      grid-auto-rows:1px; column-gap:15px }
.fg__item           { height:253px; margin-bottom:15px; grid-row-end:span 268;
                      display:flex; align-items:center; justify-content:center; z-index:1 }
.fg__item.mid_item  { height:380px; grid-row-end:span 395 }
.fg__item.large_item{ height:505px; grid-row-end:span 520 }
.fg__item:after     { position:absolute; inset:0; background:#000000b3; opacity:0;
                      transition:all .4s; z-index:-1 }
.fg__item__text h2  { color:#fff; position:relative; right:-40px; opacity:0; transition:all .6s }
.fg__item__text span{ color:#fff; font-size:15px; text-transform:uppercase; left:-40px;
                      opacity:0; transition:all .6s }
.counter            { padding-bottom:300px }
.counter__item h2   { font-size:48px; color:#111; letter-spacing:2px }
.request            { margin-top:-235px }
.request__form .section-title      { background:#5e6350; padding:60px 145px 40px;
                                     border-radius:10px 10px 0 0; margin-bottom:0 }
.request__form .section-title span { color:#fff; font-size:15px; text-transform:uppercase;
                                     letter-spacing:4px; font-family:Cormorant Garamond,serif }
.request__form .section-title h2   { color:#fff }
.request__form form { padding:60px 55px 50px; box-shadow:0 5px 10px #9a57571a;
                      border-radius:0 0 10px 10px; background:#fff }
.request__form form input { height:50px; width:100%; font-size:14px; color:#666;
                            padding-left:20px; border:1px solid #e1e1e1; margin-bottom:20px }
.site-btn           { font-size:14px; font-family:Cormorant Garamond,serif; color:#111;
                      background:#a3a698; font-weight:600; text-transform:uppercase;
                      letter-spacing:2px; padding:14px 34px 12px; border:none } /* square */
.primary-btn        { ...letter-spacing:4px; background:#a3a698 }
.latest__item ul li { font-size:17px; color:#6b705d; font-style:italic;
                      font-family:Cormorant Garamond,serif; margin-right:25px }
.latest__item h4 a  { color:#111; font-size:26px; line-height:36px }
.logo               { background:#f7f8f3; padding:35px 0 }
.footer             { background:#3b3e33; padding-top:65px }
.footer__widget h5  { color:#fff; text-transform:uppercase; margin-bottom:28px }
.footer__subscribe__form form input { height:50px; color:#fff; background:#ffffff1a; border:none;
                                      padding-left:22px; font-size:14px }
.footer__subscribe__form form button{ color:#767b67; position:absolute; right:0; height:100%;
                                      padding:0 15px; border:none; font-size:18px }
.footer__social a   { font-size:18px; color:#fff; height:50px; width:50px; background:#ffffff1a;
                      border-radius:50%; text-align:center; line-height:50px; margin-right:6px }
.footer__copyright__text { color:#fff; font-size:14px; letter-spacing:.5px }
```

## Live-verified geometry (2026-10-12, viewport 780 × 780, page ≈ 5,678 px)

| section | class | top (px) | height (px) |
| --- | --- | --- | --- |
| hero | `section.hero.set-bg` | 0 | 866 |
| services | `section.services.spad` | 866 | 1,186 |
| features | `section.features.spad` | 2,052 | 1,143 |
| counter | `div.counter.spad.set-bg` | 3,196 | 667 |
| request | `section.request` | 3,628 | 683 |
| blog | `section.latest.spad` | 4,311 | 623 |
| logo strip | `div.logo` | 4,934 | 139 |
| footer | `footer.footer` | 5,073 | 605 |

Computed-style spot checks in the same pass: `body{font-family:Raleway, sans-serif}`,
`body{background-color:rgb(255,255,255)}`, `.hero{height:866px}`,
`.hero__text h1{font-size:48px}`, `.site-btn{background-color:rgb(163,166,152)}`,
`.footer{background-color:rgb(59,62,51)}`, `.logo{background-color:rgb(247,248,243)}`,
`.request__form form{background-color:#fff; border-radius:0 0 10px 10px}`,
`.counter{background-image: image-set(url(...counter-bg.avif/jpg))}`.

## Screenshot analysis (1200×946 JPEG → PNG)

Browser-chrome mock of the top of the page: white header with the serif `DREAMS`
wordmark; uppercase letter-spaced nav with a dot under HOME and a magnifier at the
right; a full-bleed bridal-bouquet photo hero with a pinecone ornament above
"WELCOME TO DREAMS" and a large serif uppercase "PLAN THE PERFECT WEDDING", the
hero's bottom edge curving into white; then "OUR SERVICES" over a small squiggle
ornament, and the first row of three line-art service cards (Photos & Video,
Wedding Makeup, Restaurant). Palette impression: white/neutral page, sage-green
section text, warm rose-tinted shadows, serif display type.

## Section-by-section fidelity notes

1. **Header** — absolute, floats over the hero. White bar, rose-tinted shadow.
   Serif wordmark left, centred caps nav (14 px, ls 2 px), current-item dot, dark
   `#111` dropdown. Right cluster carries socials + a magnifier that opens a
   full-screen search modal. Mobile = slicknav in the source → replace with a
   lucide Menu toggle + in-flow panel.
2. **Hero** — 866 px band, `padding-top:330px`, cover/top-center. **The wave is
   baked into `hero.png` (1923×866 RGBA, transparent bottom corners), not a CSS
   shape** — reproduce with an SVG mask/`clip-path` or a curved divider over a
   picsum placeholder. Three type registers, no CTA.
3. **Services** — white `spad`, ornamented centred title, 6 cards (3×2). Hover
   lift `radius 10px` + `0 5px 39px rgba(154,87,87,.102)`. Icons → lucide.
4. **Features** — filter row (6 text buttons, 18 px caps, 40 px gaps, active
   underlined) + **CSS-grid masonry** (`repeat(3,minmax(0,1fr))`, `auto-rows:1px`,
   `column-gap:15px`; spans 253/380/505). Hover = `rgba(0,0,0,.7)` veil + text
   sliding in from ±40 px. "View more" link.
5. **Counter** — photo band with `padding-bottom:300px` so the request card can
   ride up over it. Four icon + number + label items; numbers animate once on
   scroll (reduced-motion → static).
6. **Request** — `margin-top:-235px` pulls the card onto the counter band. Green
   `#5e6350` header (radius top 10 px) + white panel (radius bottom 10 px, rose
   shadow) with a 2×2 field grid and a square `SEND A REQUEST` button. Source
   posts to `php/subscribe.php`; recreation validates client-side.
7. **Blog** — three cards, italic Cormorant Garamond `#6b705d` meta row, `#111`
   26 px titles.
8. **Logo strip** — `#f7f8f3` band, ten monochrome vendor wordmarks (placeholders).
9. **Footer** — `#3b3e33`. Newsletter pill (translucent input + flush-right send)
   + four 50 px social discs; four columns; copyright bar. The source's Colorlib
   credit is replaced by the required **Component Dock** link, same shape.
10. **Search overlay** — full-screen modal with a close control and a Search field.

## Source → React adaptation table

| Source | Recreation |
| --- | --- |
| `img/hero.avif|png`, `features/feature-N.*`, `counter-bg.*`, blog/logo images | `https://picsum.photos/seed/reverie-<n>/<w>/<h>` placeholders |
| `img/logo.svg`, `img/footer-logo.svg` (`DREAMS`) | an original serif `REVERIE` wordmark (no image) |
| `img/icon/{hi,ti,si-N,ci-N}.png` line-art icons | `lucide-react` icons |
| Font Awesome 7 socials + inline SVG sprite (`#i-send`, `#i-heart`) | **inline-SVG brand marks** for `Facebook`, `Twitter`, `Instagram`, `Dribbble` (lucide-react exports no brand icons) + `lucide-react` `Send`, `Heart` |
| self-hosted Cormorant Garamond + Raleway `.woff2` | Google Fonts `<link>` (both faces verified 200) |
| Bootstrap 5 grid + custom classes | Tailwind 4 utilities + `cn()` |
| Swiper/owl carousel | small CSS/JS marquee or Swiper only if already a dependency |
| `js/main.min.js` (mobile menu, search, counter, filter) | React state + `IntersectionObserver` |
| `php/subscribe.php` post | client-side validation + inline success state |

## Deltas (documented improvements over the source)

- **Curved hero** implemented with a mask/divider rather than copying the RGBA
  hero image.
- **Dropdown + mobile panel + search overlay** get click/keyboard/`Escape` paths
  and `aria-expanded` (source binds hover only).
- **Gallery tiles** become focusable links with accessible names (source tiles are
  non-focusable `div`s).
- **Counter roll-up** respects `prefers-reduced-motion`; hover transitions
  reduced-motion safe.
- **Form validation** is client-side with per-field messages (source posts to PHP).
- **Footer credit** is the required Component Dock link (source credits Colorlib).

## Sibling comparison (Wedding family)

Nearest siblings on main: `aisle` (ColorLib **Wedding2**) and `celebrant`
(ColorLib **Wedding Officiant**). Both are older jQuery/Bootstrap-4 designs with
script/serif type, rose or mint accents and photo-driven one-pagers. This slug is a
**newer, different generation**: Bootstrap 5 bundles, **Swiper 14**, **Font
Awesome 7**, self-hosted **Cormorant Garamond + Raleway**, a **sage-green/olive**
accent (`#6b705d` / `#a3a698` / `#5e6350`) with rose-tinted shadows
(`#9a5757 @ 10%`) — do not copy `aisle`'s rose or `celebrant`'s mint tokens.
Also unique here: a **filterable masonry gallery**, a **photo counter band**, and
a **green request card that overlaps the counter band**. Verify every token against
this slug's live stylesheet.

## Open items for the implementer

- Choose the exact hero curve technique (SVG mask vs `clip-path` vs divider band).
- Decide whether the logo strip uses a minimal marquee or Swiper if already present.
- Keep the source's generic copy (service/blog labels, contact lines) or lightly
  paraphrase; never reuse the source name/wordmark.
