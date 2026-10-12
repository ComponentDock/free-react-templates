# design notes — Reverie (ColorLib Weddingdreams)

Prep research, 2026-10-12. Source slug `weddingdreams` · preview
`https://preview.colorlib.com/theme/weddingdreams/` (HTTP 200, 32,645 B,
sha256 `1d447eb2…`). Live preview is the **sole** DOM/CSS reference — the
slug-only path is the only one alive (`theme/bootstrap/<slug>/` 404,
`/downloads/free/<slug>.zip` 404, `colorlib.com/etc/cs/<slug>/` 404).

## DOM skeleton (source)

```
a.skip-link[href="#main"]            → "Skip to content" (text node, NOT an image)
                                       hidden at top:-100px, drops to top:10px on :focus
header.header
  .container-fluid > .row
    .col-lg-2  .header__logo      → a > img logo.svg (131×23)
    .col-lg-8  nav.header__menu   → ul: Home(.active) · Services · Portfolio ·
                                    Pages(.dropdown: About/Team/Blog Details) ·
                                    News · Contact
    .col-lg-2  .header__right     → .header__right__social (4 links)
                                    .header__right__search > button.search-switch
  #mobile-menu-wrap > .slicknav_menu > button.slicknav_btn  (mobile only)
main#main[tabindex="-1"]          → landmark opens after the header, closes after the logo strip
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
  3 × .col-lg-4 > .latest__item → picture(img/blog/latest-N.avif|jpg 360×240, lazy) · ul(3 li) · h4 a
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
.skip-link      { position:absolute; top:-100px; left:15px; z-index:100000;
                  padding:10px 18px; background:#111; color:#fff;
                  font-size:14px; font-weight:600 }           /* off-screen skip link */
.skip-link:focus{ top:10px; color:#fff }                      /* slides in on focus */
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

## Responsive-format image layer (source-only; measured 2026-10-12, `curl -sS` basis)

The source ships a **format** switch, not a resolution one: no width descriptor
(`600w`) and no density descriptor (`2x`) appears anywhere on the page, there is
no `sizes` attribute, and no `<source>` carries a `media=` condition (so there is
no art direction either). The format is carried by `type=` / `type()`.

| Where | Form | Count | Fallback / notes |
| --- | --- | --- | --- |
| Line-art icons + blog cards | `<picture><source srcset="img/…avif" type="image/avif"><img src="img/…png\|jpg" width=… height=… alt="" loading="lazy" decoding="async"></picture>` | **17** blocks — 14 icon wrappers (hero `hi`, both `ti` squiggles, six `si-N`, four `ci-N`) + **3** blog cards (`latest-1..3`, `360×240`) | raster PNG/JPG, `alt=""`, sized + lazy; the hero ornament is the eager one (`fetchpriority="high" decoding="sync"`, no `loading`) |
| Hero, six feature tiles, counter band | inline `style="background-image: image-set(url('img/hero.avif') type('image/avif'), url('img/hero.png') type('image/png'))"` on the `.set-bg` element | **8 occurrences / 16 entries** | no `1x`/`2x` descriptor — the entries are `url(...) type(...)` pairs |
| `css/style.min.css` (decorative PNG ornaments) | `…:before{background:url(../img/icon/form-left.png); background-image:image-set(url(../img/icon/form-left.avif) type("image/avif"),url(../img/icon/form-left.png) type("image/png"))}` | **3 rules** — `.request.request--services .request__form:before`, `…:after`, `.pricing__item:after` | plain PNG declared first in the same rule (a real fallback, unlike the inline bands) |
| Head | `<link rel="preload" as="image" href="img/hero.avif" type="image/avif" fetchpriority="high">` | **1** | an AVIF-only preload — nothing else in the head preloads an image |

The `.counter` computed `background-image` recorded above is therefore the
**inline** `image-set()` on `div.counter.set-bg`, and this layer is **source-only
infrastructure**: the recreation replaces every photograph with a seeded
`picsum.photos` URL and every line-art icon with a `lucide-react` glyph, so each
image is a single element with one URL — no `<picture>`, `<source>`, `srcset`,
`sizes`, `type=` or `image-set()` in app code, no `.avif` request to a ColorLib
host, and no image preload hint in our `<head>`. Only the delivery attributes are
kept: explicit `width`/`height`, `loading="lazy"` below the fold, eager hero,
`alt=""` on decorative imagery.

## Screenshot analysis (1200×946 JPEG → PNG)

Browser-chrome mock of the top of the page: white header with the serif `DREAMS`
wordmark; uppercase letter-spaced nav with a dot under HOME and a magnifier at the
right; a full-bleed bridal-bouquet photo hero with a pinecone ornament above
"WELCOME TO DREAMS" and a large serif uppercase "PLAN THE PERFECT WEDDING", the
hero's bottom edge curving into white; then "OUR SERVICES" over a small squiggle
ornament, and the first row of three line-art service cards (Photos & Video,
Wedding Makeup, Restaurant). Palette impression: white/neutral page, sage-green
section text, warm rose-tinted shadows, serif display type.

## Source inner pages (live, curl-probed 2026-10-12)

The landing page is the design of record, but the same theme ships **seven**
further live pages at `https://preview.colorlib.com/theme/weddingdreams/<page>`
(all **HTTP 200**, `curl -sS` basis) — the authoritative reference for the
sections this one-pager must invent.

| Page | Live (`curl -sS`) | What it holds → what it informs |
| --- | --- | --- |
| `services.html` | **200**, 26,315 B | "Services" cards + a "Pricing Plans" table ($195 / $235 / $335) → the services grid and any pricing band |
| `portfolio.html` | **200**, 20,585 B | "Portfolio" → the gallery/portfolio vocabulary |
| `team.html` | **200**, 27,642 B | "OUR PHOTOGRAPHY TEAM" + "Join us" → the team card grid |
| `about.html` | **200**, 34,416 B | "About" + "Wedding Vendors & Venues We Love!" + the 8365 / 568 / 849 counters → the counter strip's real figures |
| `blog.html` · `blog-details.html` | **200**, 30,733 B · 33,498 B | "Our blog" trio + post shell |
| `contact.html` | **200**, 19,993 B | the enquiry/contact shell → the request card's field set |

None of them is copied; they are read for structure, copy kind and figures.

## Document head + source-only third-party layer (measured 2026-10-12, `curl -sS` basis)

The landing page is the **only** page in this open set that ships a metadata
layer, and it is entirely **placeholder** data plus its own analytics — nothing
here is reproduced. The recreation writes its own head facts and its own success
copy.

| Where | Live value (verbatim) | What the recreation does |
| --- | --- | --- |
| `<title>` | `Dreams \| Wedding Planning and Events` | own title (`Reverie — Wedding Planning and Events`-style, **no** "Dreams") |
| `meta name=description` | "Dreams plans your wedding from the first idea to the last dance: photos and video, makeup, catering, live music, the cak…" | own description, same kind of copy, never the source's brand name |
| `og:*` set (**5** props) | `og:type=website` · `og:site_name=Dreams` · `og:title` · `og:description` (= the meta description) · `og:image=img/og-image.jpg` | own OG `title`/`description` (+ own placeholder image or none); the source's `img/og-image.jpg` is never referenced or fetched |
| `twitter:*` set (**4** props) | `twitter:card=summary_large_image` · `twitter:title` · `twitter:description` · `twitter:image=img/og-image.jpg` | same treatment as the `og:*` set |
| `link rel=canonical` | **`https://your-domain.com/`** (an unrendered placeholder) | own canonical for `https://reverie.free.componentdock.com/` — never the source's placeholder host |
| `application/ld+json` | a `LocalBusiness` block: name `Dreams Wedding Planner`, description "Wedding planning, photography, catering, music and honeymoon arrangements.", `hello@example.com`, `+1-503-555-0142`, 203 Fake St., Portland | if structured data ships at all it is **our own** (our name, our URL, no `Dreams`, no `hello@example.com`) |
| `meta name=generator` | `Wedding Dreams 3.0.2` (the same `3.0.2` the asset URLs carry as `?v=`) | not reproduced |
| `link rel=icon` | `img/favicon.svg` (`type=image/svg+xml`) | an own SVG favicon |
| analytics | `<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX">` + the inline `dataLayer`/`gtag()` bootstrap — a **placeholder measurement id** | **never reproduced**: no `gtag`, no `dataLayer`, no `G-…` id anywhere in `apps/reverie` |
| form endpoints (**2**, distinct) | the enquiry card's form `action="php/send-email.php"` (+ `data-kit-form`, `data-success="Thank you! We will reply within one working day."`); the footer pill form `action="php/subscribe.php"` (+ `data-success="Thank you! You are on the list."`); the search overlay form is `action="#"` | both replaced by client-side validation with **two distinct** inline success states, keyed to which form was submitted — the two destinations are not interchangeable |

`curl -sS https://preview.colorlib.com/theme/weddingdreams/` is the basis of
every value above (the page ships no archive twin and no `/etc/cs/` demo).

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
   shadow) with a 2×2 field grid and a square `SEND A REQUEST` button. Source's
   enquiry form posts to `php/send-email.php` (its footer pill posts to
   `php/subscribe.php` — two different destinations); recreation validates
   client-side and confirms in place.
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
| the format layer (17 `<picture>`/`<source type="image/avif">` pairs + 8 inline `image-set()` bands + the `<link rel="preload" as="image">` hero hint) | **flattened** — one URL per image; no `<picture>`/`srcset`/`sizes`/`image-set()` in app code, no `.avif` request, no image preload |
| `img/logo.svg`, `img/footer-logo.svg` (`DREAMS`) | an original serif `REVERIE` wordmark (no image) |
| `img/icon/{hi,ti,si-N,ci-N}.png` line-art icons | `lucide-react` icons |
| Font Awesome 7 socials + inline SVG sprite (`#i-send`, `#i-heart`) | **inline-SVG brand marks** for `Facebook`, `Twitter`, `Instagram`, `Dribbble` (lucide-react exports no brand icons) + `lucide-react` `Send`, `Heart` |
| self-hosted Cormorant Garamond + Raleway `.woff2` | Google Fonts `<link>` (both faces verified 200) |
| Bootstrap 5 grid + custom classes | Tailwind 4 utilities + `cn()` |
| Swiper/owl carousel | small CSS/JS marquee or Swiper only if already a dependency |
| `js/main.min.js` (mobile menu, search, counter, filter) | React state + `IntersectionObserver` |
| `php/send-email.php` post (enquiry card form — `data-kit-form`) | client-side validation + an inline "We will reply within one working day" success state |
| `php/subscribe.php` post (footer pill form) | client-side validation + an inline "You are on the list" success state (a **separate** state from the enquiry card's) |
| head metadata (`og:*` ×5, `twitter:*` ×4, `rel=canonical` → `https://your-domain.com/`, `LocalBusiness` JSON-LD, `meta name=generator "Wedding Dreams 3.0.2"`, `img/og-image.jpg`, `img/favicon.svg`) | own head facts only: own title/description/canonical (the app's `*.free.componentdock.com` URL), own SVG favicon, OG/Twitter/JSON-LD written from our own copy or omitted — **no source value, host or image is reused** |
| Google Analytics (`gtag.js?id=G-XXXXXXXXXX` + `dataLayer` bootstrap) | nothing — no third-party tag ships; the guard asserts no `gtag`/`dataLayer`/`G-…` id in `apps/reverie` |

## Deltas (documented improvements over the source)

- **Curved hero** implemented with a mask/divider rather than copying the RGBA
  hero image.
- **Dropdown + mobile panel + search overlay** get click/keyboard/`Escape` paths
  and `aria-expanded` (source binds hover only).
- **Gallery tiles** become focusable links with accessible names (source tiles are
  non-focusable `div`s).
- **Counter roll-up** respects `prefers-reduced-motion`; hover transitions
  reduced-motion safe.
- **Form validation** is client-side with per-field messages; the source's two
  posts (`php/send-email.php` from the enquiry card, `php/subscribe.php` from the
  footer pill) become two distinct inline success states.
- **Head facts are ours, not the source's** — the source ships placeholder
  metadata (`rel=canonical` → `https://your-domain.com/`, `og:image` →
  `img/og-image.jpg`, a `Dreams Wedding Planner` JSON-LD block, `generator
  "Wedding Dreams 3.0.2"`) plus its own analytics (`gtag.js?id=G-XXXXXXXXXX`).
  The recreation writes its own title/description/canonical/favicon and ships no
  third-party tag at all.
- **Skip link** — the source already ships `<a class="skip-link" href="#main">Skip to
  content</a>` (hidden at `top:-100px`, sliding to `top:10px` on `:focus`) pointing
  at `<main id="main" tabindex="-1">`; keep it and keep the `tabindex="-1"` focus
  target, but note the source's `</main>` closes **before** `<footer>`, so the
  footer landmark sits outside `main` — reproduce that landmark split.
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

## Prep status (re-verified 2026-10-12)

Audited with the new **RESPONSIVE-GRAMMAR** axis
(`scripts/verify-responsive-grammar.py`, 18 controls). Two gaps were found and
closed here:

1. **COVERAGE — the format layer was unnamed.** The prep named `avif` only inside
   filenames (`hero.avif|png`) and the wrapper only as `picture(...)` in the DOM
   skeleton, so nothing in the spec/tasks/design-notes told the implementer that
   the page carries **17 `<picture>` + `<source srcset=… type="image/avif">`**
   pairs, **8 inline `image-set(… type(…))`** bands, **3** sheet `image-set()`
   rules and an **AVIF image preload** in the head — or what to do with them. The
   new "Responsive-format image layer" section above + the spec's
   `### Feature: Image delivery and the source-only format layer` +
   the fidelity-rule and checklist lines carry the census and the **flatten**
   instruction.
2. **PIC-MISS — the blog skeleton understated the wrapper.** The DOM skeleton
   said `.latest__item → img`, but each of the three blog cards is a
   `<picture>` pair with a `360×240` lazy `img` fallback; the skeleton line now
   reads `picture(img/blog/latest-N.avif|jpg 360×240, lazy)`.

Re-audited the same day with the new **HEAD + THIRD-PARTY** axis
(`scripts/verify-head-layer.py`, 20 controls). Six gaps were found and closed
here:

3. **COVERAGE — the head metadata layer was unnamed (5 flags).** The page is the
   only item in the open set with a metadata layer: a **5-property `og:*`** set
   (`og:image img/og-image.jpg`), a **4-property `twitter:*`** set,
   `rel=canonical` → **`https://your-domain.com/`** (a placeholder),
   an `application/ld+json` **`LocalBusiness`** block and
   `meta name=generator "Wedding Dreams 3.0.2"` — and the prep named none of
   them. Every value is source-side placeholder data, so the implementer had no
   way to know a head layer exists, let alone that it must not be reused. Closed
   with the "Document head + source-only third-party layer" section above, the
   spec's `### Feature: Document head metadata and the two source-only form
   endpoints`, the fidelity-rule and checklist lines.
4. **ENDPOINT — the wrong endpoint was attributed (1 flag).** The request section
   said "Source posts to `php/subscribe.php`", but the page has **two** distinct
   POST destinations: the enquiry card posts to `php/send-email.php`
   (`data-success="Thank you! We will reply within one working day."`) and only
   the **footer pill** posts to `php/subscribe.php`
   (`data-success="Thank you! You are on the list."`); the search overlay's form
   is `action="#"`. Corrected in the spec scenario, the section notes, the
   adaptation table and the deltas.
5. **SILENT (note, not a flag) — the analytics is a placeholder id.** The page
   loads `gtag.js?id=G-XXXXXXXXXX` (unlike its six siblings' `UA-23581568-13`);
   the prep never mentions it. It is now named in the head section as
   never-reproduced, so the app's guard can assert `gtag`/`dataLayer`/`G-…`
   absence.

Everything else the axis reads re-verified exact on this pass: 17/17 bare
`srcset` descriptors (no width/density descriptor, no `media=`), zero `sizes`
attributes on the page, `image/avif` on all 17 sources, and the 8+3 `image-set()`
loci with `type()` descriptors.
