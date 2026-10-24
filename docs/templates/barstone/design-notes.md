# Barstone — design notes (replication of ColorLib Ariclaw)

Brief for the implementer. Source design: **Ariclaw**
(`https://colorlib.com/wp/template/ariclaw/`,
preview `https://preview.colorlib.com/theme/ariclaw/`). New app name:
**Barstone** (`apps/barstone`, package `@free-react-templates/barstone`, deploy
`barstone.free.componentdock.com`). Spec:
`openspec/specs/template-barstone/spec.md`.

Prep status: this design has **no app**. Rows **896** and **2116** of
`TEMPLATES.md` say `[x]` but credit `counsel`, which recreates ColorLib
**Whisper** — a false `[x]` (`docs/row-multiplicity.md` §2, `row-excl /
spec-excl` = 1 / 28). The implementer re-opens both rows on its branch and
re-marks them after merge. Do not touch `counsel`.

## What the reference is

A **multi-page law-firm theme** (Bootstrap 4.3 grid + jQuery 1.12.1: Slick,
Owl Carousel, Magnific Popup, Gijgo, Nice Select, Themify Icons, Flaticon,
`animate.css`). Seven inner pages are live — `about.html` (22,724 B),
`service.html` (21,892), `attorneys.html` (25,957), `blog.html` (30,448),
`single-blog.html` (33,181), `elements.html` (37,348), `contact.html`
(14,468) — plus `index.html` (35,140 B, byte-identical to the directory URL).
**Only the home page is in scope**; the inner pages exist so each nav item's
intent is checked, not built.

**7,146px tall at 1440×1000; 9,934px at 390×844.** Seven `<section>` + header
+ footer, 25 `<img>`, 53 anchors (35 dead `#`), 1 `h1`.

The whole character comes from three devices, in this order of importance:

1. **Warm gold on cool-black ink over cream.** The brand `#ab7636` is a bronze
   gold, never a yellow; it appears as a **gradient** (`#ab7636 → #d7af7e →
   #ab7636`) on buttons and icon discs rather than as a flat fill. Headings are
   `#161d22` — a blue-cast near-black — and the two cream bands
   (`#f3f1ef`, hero `#F5EFE8`) are warm greys, so the page reads like paper
   with brass foil, not like a generic "law firm blue" site.
2. **Serif everywhere, with two serifs doing different jobs.** Cardo (an
   old-style serif) carries headings, nav, wordmark, buttons and body base;
   **Rufina** — a high-contrast display serif — is used for the hero `h1`
   alone, which is why the headline looks more editorial than the rest of the
   page. Body copy switches to **Roboto** at 15px/1.8, so paragraphs read
   modern against the serif chrome.
3. **A diagonal cream field, not a boxed hero.** The hero's cream is an image
   whose alpha cuts a straight diagonal: white above-left, cream below-right,
   with the attorney's cut-out portrait standing on it at 46% width. Nothing
   is boxed, bordered or shadowed — the only frame in the whole page is the
   1px gold outline that appears **inset 22px** over a case-study image on
   hover.

## DOM skeleton (live home page, trimmed)

```
header.main_menu.home_menu            (absolute, 88px, z-999)
  .container > .row > nav.navbar
    a.navbar-brand > img (gold scales + "Ariclaw")
    .collapse.main-menu-item
      ul.navbar-nav: Home · About · Service · Attorneys · Blog▾ · Contact
      a.menu_btn  "Let's Talk"        (151×44, radius 50px)
section.banner_part                   (1000px, #F5EFE8 + diagonal alpha)
  .container > .row > .col-lg-6
    .banner_text > .banner_text_iner
      h1  "Finest And Strongest Law Firm Win The World"
      p   subline (15px Roboto)
      .banner_btn > a.btn_1 "More About Us"   (square, gold gradient)
  ::after → portrait img/banner_bg.png (766×926, 46%, top right)
section.about_part.section_padding
  .col-lg-8 > .section_tittle > h2 (36px/700)
  .row: .col-lg-7 (about_1) + .col-lg-5 (about_2)
  .col-lg-8 > .about_text > p
section.service_part.section_padding  (cream via ::after)
  .row: ×4 .col-lg-3 > .single_service_part (330px white)
        .single_service_text: span.icon-disc · h2 (18px UPPER) · p (hidden)
section.our_offer.case_study.section_padding
  .container-fluid
    .col-lg-5 > .section_tittle > h2 + p
    .row: ×3 .col-lg-4 > .single_offer_part > .single_offer
          img + .hover_text (h2 30px + p)
section.team_part.our_offer.section_bg.section_padding   (#f3f1ef)
  .col-lg-7 > .section_tittle > h2 + p
  .row: ×3 .col-lg-4 > .single_offer_part
        .single_offer: img + .hover_text (p email + .team_social_icon ×3)
        .team_member_info: h4 (22px) + p role
section.cta_area                       (423px, #ab7636)
  .col-lg-10 > .cta_text: h2 (36px white) + a.cta_btn (white, radius 0)
section.review_part.section_padding.section_bg        (#f3f1ef, 747px)
  ::after → quotation mark 115×100 (#d7af7e @ 0.2)
  .col-lg-9 > .slider: ×4 .client_review_text (quote · h3 · h5)
  .col-lg-6 > .slider-nav-thumbnails > ×6 .slider-thumbnails (img)
  arrows: i.slick_left / i.slick_right (55×55, 5px #dde0e3)
section.blog_part.section_padding       (912px)
  .col-lg-7 > .section_tittle > h2
  .row: ×3 .col-lg-4 > .single_offer_part > .single_offer
        img + .hover_text (white 90% wash + title)
        .single-home-blog: a category · a.time · a h5 · p · ul meta
footer.footer-area                      (545px, #162b45)
  .row: 4 × .single-footer-widget
        brand + p + .social_icon ×4 | "Our Service" ×6 | "Contact Info" ×3 |
        "Instagram" 6 × .single_footer_img
  .copyright_part_text (1px #45556a, margin-top 95px) + .footer_menu ×4
```

## Token reference (verbatim from `css/style.css`)

```css
@import url("https://fonts.googleapis.com/css?family=Cardo|Roboto:400,400i|Rufina");
body            { font-family: "Cardo", serif; font-size: 14px; }
h1,h2,h3,h4,h5,h6 { color: #161d22; font-family: "Cardo", serif; line-height: 1.2em; }
p               { font-family: "Roboto", sans-serif; font-size: 15px; line-height: 1.8; color: #777777; }

.section_padding { padding: 130px 0; }        /* 80px 991–1200, 70px ≤991 */
.section_bg      { background-color: #f3f1ef; }
.section_tittle  { margin-bottom: 81px; text-align: center; }
.section_tittle h2 { font-size: 36px; font-weight: 700; line-height: 1.25; color: #161d22; margin-bottom: 27px; }
.section_tittle p  { color: #666666; font-size: 15px; margin-bottom: 7px; }

.btn_1        { background-image: linear-gradient(to left, #ab7636 0%, #d7af7e 49%, #ab7636 100%);
                background-size: 200% auto; padding: 13.5px 45px; border-radius: 50px;
                color: #fff; font-size: 14px; border: 1px solid transparent; }
.btn_1:hover  { background-position: right center; color: #fff !important; }

.main_menu               { position: absolute; left: 0; top: 0; width: 100%; z-index: 999; }
.main_menu .nav-link     { color: #000; font-size: 16px; padding: 38px 25px; font-family: "Cardo", serif; }
.main_menu .menu_btn     { border: 1px solid #dde0e3; color: #ab7636; font-size: 16px;
                           padding: 9px 41px; border-radius: 50px; background-color: #fff; }
.main_menu .menu_btn:hover { background-color: #ab7636; border-color: #ab7636; color: #fff; }

.banner_part            { height: 1000px; position: relative; z-index: 2;
                          background: url(../img/banner_bg_1.png) left bottom no-repeat; }
.banner_part:after      { content: ""; position: absolute; width: 100%; height: 100%;
                          right: 10%; bottom: -74px; z-index: -1;
                          background: url(../img/banner_bg.png) top right no-repeat; background-size: 46%; }
.banner_part .banner_text h1 { font-size: 50px; font-family: "Rufina", serif; font-weight: 400;
                               line-height: 1.273; color: #161d22; margin: 34px 0 27px; }
.banner_part .banner_text h1 span { color: #ab7636; }   /* used on about.html, not home */
.banner_part .banner_text p  { margin-bottom: 45px; line-height: 1.8; }
.banner_part .banner_text .btn_1 { border-radius: 0; }  /* the hero button is SQUARE */

.service_part:after            { background-color: #f3f1ef; }
.single_service_part           { height: 330px; background-color: #fff; text-align: center; }
.single_service_text span      { width: 90px; height: 90px; line-height: 90px; font-size: 40px;
                                 border-radius: 50%; color: #fff;
                                 background: linear-gradient(0deg, #ab7636 0%, #d7af7e 100%); }
.single_service_text h2        { font-size: 18px; text-transform: uppercase; margin-top: 34px; }
.single_service_text p         { display: none; }
.single_service_part:hover     { background: linear-gradient(-117deg, #ab7636 0%, #d7af7e 100%); }
.single_service_part:hover span{ width: 72px; height: 72px; line-height: 72px; font-size: 30px;
                                 background: #fff; color: #ab7636; }
.single_service_part:hover h2  { font-size: 22px; text-transform: capitalize; color: #fff; margin-top: 32px; }
.single_service_part:hover p   { display: block; color: #fff; margin-top: 20px; }

.case_study                    { overflow: hidden; }                 /* 7.5px half-gutters */
.our_offer .single_offer:after { position: absolute; inset: 0; content: "";
                                 background: url(../img/offer_overlay.png); opacity: 0; transition: .5s; }
.our_offer .single_offer_part:hover .single_offer:after { left: 22px; top: 22px; opacity: 1; }
.our_offer .hover_text         { position: absolute; top: 40%; left: 0; right: 0; text-align: center;
                                 opacity: 0; transition: .5s; z-index: 100; }
.our_offer .hover_text h2      { color: #fff; font-size: 30px; }
.our_offer .hover_text p       { color: #fff; }

.team_part .team_member_info h4 { font-size: 22px; margin-top: 26px; }
.team_part .team_social_icon a  { font-size: 15px; color: #fff; margin: 7px; }

.cta_area        { background-color: #ab7636; padding: 115.5px 0; text-align: center; }
.cta_area h2     { color: #fff; font-size: 36px; }
.cta_area .cta_btn { padding: 14.5px 50px; background-color: #fff; color: #161d22;
                     font-size: 16px; margin-top: 45px; }              /* font-family: 400 — invalid */
.cta_area .cta_btn:hover { color: #ab7636; }

.review_part:after      { content: ""; position: absolute; left: 0; right: 0; margin: 0 auto;
                          top: 160px; width: 115px; height: 100px;
                          background: url(../img/icon/quate.svg) center/cover no-repeat; }
.client_review_text p   { font-size: 18px; color: #666666; font-style: italic; margin: 95px 0 30px; }
.client_review_text h3  { font-size: 22px; font-weight: 500; font-family: "Cardo", serif; margin-top: 50px; }
.client_review_text h5  { font-size: 14px; font-weight: 400; }
.review_part .slick_left,.slick_right { width: 55px; height: 55px; border: 5px solid #dde0e3;
                          position: absolute; top: 28%; color: #dde0e3; }
.review_part .slick_left { left: -250px; }  .review_part .slick_right { right: -250px; }

.blog_part .single_offer_part   { border-right: 10px solid #fff; }
.blog_part .single-home-blog a  { color: #ab7636; }
.blog_part .single-home-blog a h5 { font-size: 22px; margin: 30px 0 20px; }
.blog_part .single-home-blog p  { color: #666666; }
.blog_part .hover_text          { position: absolute; inset: 0; padding: 65px 30px; opacity: 0; visibility: hidden; }
.blog_part .hover_text:after    { content: ""; position: absolute; inset: 0; background: #fff; opacity: .9; }

.footer-area                { background-color: #162b45; padding: 130px 0 20px; }
.single-footer-widget p     { color: #999999; font-size: 14px; line-height: 1.8; }
.single-footer-widget h4    { margin-bottom: 23px; font-weight: 700; font-size: 24px; color: #fff; }
.single-footer-widget ul li a { color: #999; font-size: 15px; }
.social_icon a              { color: #cccccc; font-size: 14px; margin-right: 20px; }
.social_icon a:hover        { color: #ab7636; }
.copyright_part_text        { border-top: 1px solid #45556a; padding-top: 20px; margin-top: 95px; }
.copyright_part_text p      { color: #777777; text-align: left; }
.copyright_part_text a      { color: #ab7636; }
```

Colour census (home page only): `#ab7636` ×62, `#fff` ×65, `#161d22` ×5,
`#666666` ×4, `#777777` ×5, `#999999` ×14, `#f3f1ef` ×3, `#162b45` ×1,
`#45556a` ×3, `#dde0e3` ×3, `#d7af7e` ×7 (gradient stops + the quote glyph).
The Elements-page kit (`#f9f9ff` ×27, `#f0e9ff` ×13, `#415094` ×7, `#4cd3e3`
×6, `#38a4ff` ×6, `#f4e700` ×6, `#f44a40` ×6) is **not** part of the brand.

## Screenshot analysis (TEMPLATES.md image, AVIF 1200×946)

Top fold only, and it matches the live render pixel-for-pixel in structure:

- White strip at the very top holding **gold scales + gold serif "Ariclaw"** at
  the left and the nav row at the centre-right, ending in the **white pill
  "Let's Talk"** — because the header is absolute, this strip *is* the white
  wedge of the hero's diagonal, not a separate header bar.
- The cream field begins under a **straight diagonal** that runs from the
  top-left down to the right, leaving white above the line at the right.
- A faint **gavel line-art watermark** at the left of the band (and a
  graduation cap lower down, only visible on the live page).
- Headline **"Finest And Strongest Law Firm Win The World"** on three lines,
  Roman-serif, ink, ~50px, hugging the left column; a two-line 15px grey
  subline under it; then the **gold gradient button with square corners**
  ("More About Us").
- The **attorney portrait** — grey-haired man, navy suit, tablet in hand —
  cropped by the band's right edge.
- Below the fold line the cream band continues to 1000px; nothing else is
  visible in the screenshot, so all other bands were reconstructed from the
  live DOM + CSS (documented above).

## Section-by-section fidelity notes

1. **Header** — absolute, 88px, no fill. The wordmark is an **image** in the
   source; recreate it as a `lucide` scale icon + Cardo text in `#ab7636`
   (no bitmap, no ColorLib wordmark). Nav items are 16px Cardo `#000` with
   `padding: 38px 25px` — the padding is what separates them, there are no
   dividers. The pill is the only rounded control on the page. The dropdown
   panel is white with an 8px radius; in the source it opens on hover only —
   add focus support. Below 992px everything collapses into a 33×33 hamburger
   and the pill disappears (`d-none d-sm-block`).
2. **Hero** — the single most important band. Reproduce the diagonal with
   `clip-path: polygon(...)` on a `#F5EFE8` panel (the source's own alpha-cut
   bitmap changes angle with viewport width, and AGENTS.md forbids copying
   assets). The portrait is a **transparent cut-out**; use a picsum portrait in
   a `figure` with `mask-image`/`clip-path` and accept the difference (a real
   cut-out needs an asset). Keep the portrait's feet cropped by the band
   (`bottom: -74px` in the source) and hide it at ≤991. The h1 must be Rufina,
   not Cardo — that contrast with the rest of the page is deliberate.
3. **About** — statement first (8-col, centred, 36px/700), then the collage:
   **7/5**, images flush with each other (the source uses the Bootstrap gutter,
   so there is a 30px gap), no radius, no captions. Paragraph centred below at
   `margin-top: 60px`. Nothing else in the band — it is a text band with
   pictures, not an "about us with feature list" block; resist adding stats.
4. **Services** — four cards, equal 330px height, **no** card border and **no**
   radius: the white panel only reads because the band behind it is cream. The
   icon disc is a **0deg** gradient (top→bottom), while the card's hover fill
   is **−117deg** — two different gradient angles in one component; keep both.
   The description is `display: none` in the source (not opacity), so the card
   is a fixed 330px whether or not it is hovered — that is why the row height
   never moves.
5. **Case study** — `container-fluid` with 7.5px half-gutters, so the row is
   nearly full-bleed; the outer cards lose their outer padding. The hover
   frame is an **image** (`offer_overlay.png`, 627×678) — recreate as a
   `border: 1px solid #d7af7e` box inset 22px. Caption sits at **40%** of the
   card's height, not centred. All three source captions are identical; give
   three distinct practice areas.
6. **Attorneys** — same card component as the case study (`.single_offer`), but
   on cream and with an info block *under* the image instead of a caption over
   it. The overlay carries the e-mail plus three social glyphs (Twitter, Skype,
   Instagram in the source → use `lucide` equivalents). Names at 22px, roles
   below, both centred.
7. **CTA** — the page's only flat gold fill, and the only place white text sits
   on gold at 36px. The button is white **and square** (contrast with the
   header pill). Hover only changes the label colour; do not add a fill
   transition.
8. **Testimonials** — the decorative quote mark is **20% opacity gold**, 115×100
   at `top: 160px`, centred — it sits *behind* the quote text, which starts
   95px down. The quote is Roboto italic (the only italic on the page). The
   rail's arrows are **outside** the slider (`left: -250px` / `right: -250px`),
   which is why they appear in the wide margins; below 768px they are hidden by
   the plugin's own responsive config. Ship 4 quotes / 4 thumbnails.
9. **Blog** — the three cards are joined by `border-right: 10px solid #fff` on
   the first two, i.e. a **10px white gutter**, not a gap. The hover wash is
   `::after` at 90% white with the category + title on top, and the title is
   *always* visible below the image — the wash does not replace it. Meta is
   gold-glyphed `0 Like` / `2 Comments`.
10. **Footer** — navy, four columns, no radius anywhere. The Instagram grid is
    six tiles at 33.33% (3-up, two rows); the source reuses two images, so pick
    six distinct placeholders. The copyright row is a single line in the
    source; it must carry the **current year** and the **Component Dock** link
    instead of the ColorLib credit.

## Source → React adaptation table

| Source | Barstone (React 19 + Tailwind 4) |
|---|---|
| `header.main_menu.home_menu` (Bootstrap collapse + jQuery) | `Header` with `useState` drawer, `aria-expanded`, CSS-only dropdown via `group`/`focus-within` |
| `.banner_part` + `banner_bg_1.png` alpha diagonal | `<section>` with `bg-[#F5EFE8]` and `[clip-path:polygon(0_0,100%_0,...)]`, watermark SVGs at 8% opacity |
| `.banner_part:after` portrait bitmap | `<img>` cut-out placeholder, `object-cover`, anchored right, `hidden lg:block` |
| `.btn_1` gradient + `background-position` hover | `bg-[linear-gradient(to_left,#ab7636,#d7af7e_49%,#ab7636)] bg-[length:200%_auto] hover:bg-right transition-[background-position]` |
| `.single_service_part` `display:none` description | `hidden group-hover:block group-focus-within:block`, fixed `h-[330px]` |
| `offer_overlay.png` hover frame | `ring-1 ring-[#d7af7e] ring-offset-[-22px]` or an absolute `inset-[22px] border` div |
| `quate.svg` (20% gold) | inline SVG or `Quote` from `lucide-react` at `text-[#d7af7e]/20` |
| Slick slider (autoplay, asNavFor) | `Testimonials` with `useState` index + `useEffect` interval, pause on hover/focus, `useReducedMotion` guard |
| Themify / Flaticon glyphs | `lucide-react` (`Scale`, `Gavel`, `Siren`, `ShieldCheck`, `Twitter`, `Instagram`, `Phone`, `Mail`, `Globe`) |
| `document.write(new Date().getFullYear())` | `new Date().getFullYear()` in the copyright component |
| ColorLib credit link | `https://www.componentdock.com/` labelled **Component Dock** |

## Sibling comparison (same category, different design)

- **`counsel`** (ColorLib Whisper) is the near neighbour — also a law firm, but
  a **dark-blue** aesthetic with Poppins + Lora, a newsletter band and a
  different section order. Do not borrow its palette, its type pairing or its
  band order: this design is **cream + gold + Cardo/Rufina/Roboto** with a
  diagonal hero.
- **`barrister`** and **`advocat`** are separate apps built from *other*
  ColorLib slugs; their token tables are irrelevant here and must not be
  copied. Ariclaw's distinguishing features — the square hero button against a
  pill header CTA, the −117deg card hover gradient, the 22px-inset gold frame,
  the 20%-opacity quote mark — exist in none of them.

## Responsive measurements (measured, not estimated)

| band | 1440×1000 | 390×844 |
|---|---|---|
| header | 88 | 40 |
| hero | 1,000 | 650 |
| about | 994 | 717 |
| services | 590 | 1,400 |
| case study | 971 | 1,509 |
| attorneys | 964 | 1,833 |
| CTA | 423 | 397 |
| testimonials | 747 | 582 |
| blog | 912 | 1,715 |
| footer | 545 | 1,130 |
| **document** | **7,146** | **9,934** |

No horizontal overflow at 390px in the source (`scrollWidth` = `clientWidth` =
390) — keep it that way. The only source overflow defect is the hero content
column being 700px tall inside the 650px mobile band; fit the content instead.
