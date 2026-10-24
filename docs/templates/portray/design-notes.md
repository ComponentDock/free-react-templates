# Portray — design notes (replication of ColorLib Jackco)

Brief for the implementer. Source design: **Jackco**
(`https://colorlib.com/wp/template/jackco/`,
preview `https://preview.colorlib.com/theme/jackco/`). New app name:
**Portray** (`apps/portray`, package `@free-react-templates/portray`, deploy
`portray.free.componentdock.com`). Spec:
`openspec/specs/template-portray/spec.md`.

Prep status: this design has **no app**. Rows **593**, **2398** and **2523** of
`TEMPLATES.md` say `[x]` but credit `dossier`, which recreates ColorLib
**Alias** — a false `[x]` (`docs/row-multiplicity.md` §2). The implementer
re-opens all three rows on its branch and re-marks them after merge. Do not
touch `dossier`.

## What the reference is

A single-page personal résumé / CV theme for a creative director
(Bootstrap 5.0.0-beta1 grid + jQuery 1.12.4 plugin stack: Owl Carousel, Slick,
SlickNav, Magnific Popup, Nice Select, CounterUp, `jquery.validate`,
`ajaxchimp`; animate.css + WOW for reveals). **6,017px tall at 1440×1000,
6,203px at 390×844.** Five `<section>` + header + footer, 15 `<img>`, 32
anchors (17 of them dead `#`). It is a *multi-page* theme: `about.html`,
`portfolio.html`, `blog.html`, `blog_details.html`, `elements.html` and
`contact.html` are all live (see the spec's inner-page table) — **only the home
page is in scope for the recreation**; the other pages exist so you can check
what each nav item was meant to become, not to be built.

The whole character comes from three devices, in this order of importance:

1. **Two greens layered on near-black ink.** The hero band is `#5AFF80`; the
   disc behind the portrait and every accent (eyebrow, bar fill, expertise box,
   quote band, footer) is the hotter `#01FF56`. Ink is `#150303` — a black with
   a red cast, which is why the greens read warm rather than acid. Grays are
   warm too (`#656565`, `#928888`, `#E2E2E2`).
2. **Serif display over sans body.** Shippori Mincho (a Japanese-designed
   Mincho revival) carries every heading and the wordmark; Chivo carries body,
   sublines, nav, quotes and labels. The 80px/400 hero headline with −2px
   tracking against a 40px/300 subline is the single most recognisable thing on
   the page.
3. **Square geometry, hairline structure.** Buttons, inputs and cards are
   `border-radius: 0`; structure is drawn with 1px rules — the header's bottom
   border, the divider before each nav item, the timeline's single first-row
   hairline, the footer inputs' underlines — never with shadows or card
   borders. Only the 50px social circles, the 40px back-to-top and the hero
   disc are round. The one piece of ornament is the **27px white square rotated
   45°** notched into the expertise box's right edge.

## Section-by-section fidelity notes

Order and measured geometry at 1440×1000 are in the spec's table. Per band:

1. **Header** — 99px, `position: absolute`, transparent, `z-index: 9`,
   `padding: 0 88px`, `1px solid rgba(21,3,3,.2)` bottom rule. The green hero
   runs from y=0 *behind* it, so the nav appears to float on the band. Nav
   links are **20px Chivo 400 ink**, `padding: 34px 42px`, each with a
   `border-left: 1px solid rgba(21,3,3,.2)` divider — the dividers, not gaps,
   are what separate them. Hover fills `#00E64D` (the only darkened green in the
   system). The last item, "Fire me an email", is a plain **underlined** 20px
   link, not a button. Blog owns a **190px `#01FF56` submenu** (`padding: 17px
   0`, 18px ink items) — hover-only in the source; give it focus support. After
   the hero the source pins the header with `#5AFF80` and
   `0 10px 15px rgba(25,25,25,.1)`.
2. **Hero** — fixed **900px**, `#5AFF80`, content in a 5-of-12 column.
   `h1` 80px/400, line-height 96px, letter-spacing −2px, `#150303`; subline
   40px/300 Chivo `margin-bottom: 42px`; CTA is `border-btn hero-btn` —
   **224×69**, 1px ink border, UPPERCASE **18px/500 Chivo**, `letter-spacing:
   1px`, `padding: 20px 70px`, hover = ink fill + white label via a
   `scaleX(0→1)` sweep. Right side is a **938×900 cut-out PNG** whose own
   artwork includes the `#01FF56` circle behind the head (measured: band
   `(90,255,128)`, disc `(1,255,86)`) — reproduce the two-tone silhouette with a
   wrapper div (or an image that carries the disc) rather than painting the
   whole band neon. Hidden ≤767px. The source instantiates Slick with **one**
   slide: ship a static block, no carousel.
3. **About** — 1,072px total: `120px` section padding around a cover photo
   (desk / laptop / hands), and a **white card** `max-width: 1076px`,
   `padding: 100px`. Centred: eyebrow "About myself" (16px UPPERCASE,
   `letter-spacing: 1.6px`, `#01FF56`), the 3-line statement at 40px/400
   (`margin-bottom: 40px`), the `#01FF56` CTA with **ink** text (269×61,
   UPPERCASE 18px, `padding: 16px 44px`, 0 radius — hover = transparent + 1px
   ink border). Then a `border-top` row, two columns of two **skill bars**:
   label 20px/400 UPPERCASE ink with the value trailing, 8px track
   `rgba(1,255,86,.1)` radius 4px, fill `#01FF56` radius 7px, widths
   **60 / 89 / 60 / 89 %**. A centred paragraph closes the card. The bars are
   the page's only animation besides reveals (`animate.css slideInLeft`); a
   `width` transition on first intersection is enough, and must degrade to the
   final width when `IntersectionObserver` is absent (jsdom).
4. **Expertise** — 684px, white. Centred `h2` "My expertise" 40px/400. Then a
   split: left is a solid **`#01FF56` box** (636×347, `padding: 60px 65px 20px
   65px`) stacking three **40px/400** headings — first `#150303`, then
   `rgba(21,3,3,.3)` and `rgba(21,3,3,.3)` — `margin-bottom: 37px`. Its
   `::before` is the **27px white square, `transform: rotate(45deg)`,
   `right: -15px; top: 80px`** (a tab notched into the box's edge). Right
   column: two paragraphs, **18px/400/1.5 `#656565`**, `padding-left: 30px`.
   The dimmed second and third headings are the design's way of listing a
   practice order — keep them dimmed; promoting the middle one to full ink
   flattens the block.
5. **Experience** — 1,056px, bottom padding only. `h2` "Experience" at
   **60px/400** sits full width; the rows live in a **9-col column offset by
   2**. Row grammar: role **30px/400/1.3 ink** + period **16px/300**, then
   right-aligned **"at <company>"** ("at" 20px `#928888`, company 20px/400 ink,
   `letter-spacing: .2px`, trailing external-link glyph), then a full-width
   description at **16px/300 ink**. Rows are
   `display:flex; justify-content:space-between; align-items:center;
   flex-wrap:wrap` with `padding: 15px 0 10px`, and **only the first row** gets
   the `1px solid #E2E2E2` top border — one hairline under the heading, no
   dividers between rows. Four source roles: User Experience Designer, UI
   Designer, Illustration Artist, Graphic Designer.
6. **Quote band** — a **662px** full-bleed flex row, `#01FF56`. Left **56%** is
   a cover photo (person at a laptop by a window) at the band's full height;
   right **35%** holds the quote at **40px/300 Chivo ink**,
   `padding: 20px 40px 20px 80px`, opening quotation mark included. No heading,
   no attribution — the quote *is* the band. Stacks photo-first ≤767px (photo
   100% wide / 300px tall, quote 100% at 22px).
7. **Education** — 767px, same grammar as Experience with the heading at
   60px/400 and **two** rows (Dalian University, School of California). Reuse
   one `Timeline` component for both bands; that is the whole reason they look
   identical.
8. **Gallery** — the source's Owl strip of five tiles (`gallery1`–`gallery4`
   plus one repeat), full-bleed, no gaps. Its hover state is fully specified: a
   `#150303` wash at **0.3** plus a **white 30px zoom glyph** rising from
   `top: 45%` to `48%` over 0.4s. **In the live preview the band collapses to
   1px** (`.instagram-area` top 5,141, height 1; footer starts 5,137; slides
   measure 0px), so no gallery is visible at all — a plugin sizing defect, not
   a design decision. Render the strip: five equal tiles, the hover state above,
   a keyboard-operable lightbox, and no overflow at 390px. This is the only
   visual element in the recreation that is not directly visible on the live
   page, so call it out in the PR as a deliberate delta.
9. **Footer** — **880px** of `#01FF56` with `padding-top: 99px`. A centred
   statement `h2` at **40px/400** (the source reuses the section-title
   component), then a `border-top` row: left 6-col "Drop a line" (20px/400
   **Chivo** UPPERCASE ink) over a form of **three 50px inputs** (no fill, no
   side/top border, `border-bottom: 1px solid rgba(21,3,3,.4)`, ink text and
   placeholder, `text-transform: capitalize`) and a **76px textarea**, closed by
   a right-aligned dark **`.btn`** (238×64, `padding: 32px 58px`, 18px Shippori
   700, 0 radius, white label, white sweep on hover). Right 4-col "Contact me":
   three **underlined** ink links (street, `tel:`, `mailto:`), an outlined
   `DOWNLOAD RESUME` (`border-btn`), and **three 50px circles** at
   `rgba(21,3,3,.1)` with white glyphs, `margin-right: 10px`, hover `#150303`
   with a glyph flip. The bottom band pads 26px and carries the 15px/300
   copyright — replace the source credit with **Component Dock** linking
   `https://www.componentdock.com/`.

## Source → React adaptation

| Source mechanism | Recreation |
|---|---|
| Slick on a **single** hero slide | static hero block (no carousel, no client JS) |
| Owl Carousel gallery (broken: 1px) | CSS grid of five tiles + `<dialog>` lightbox |
| SlickNav duplicate mobile menu | one controlled `MENU +` button, `aria-expanded` / `aria-controls`, panel closes on selection |
| Blog submenu on hover only | hover **and** focus-within, Escape closes |
| Magnific Popup image zoom | native `<dialog>` with Escape/backdrop close and focus return |
| animate.css + WOW reveals | `IntersectionObserver` class toggle; no `set-state-in-effect` — derive the revealed value during render when the API is missing |
| `jquery.validate` + `ajaxchimp` | controlled form with per-field validation and an inline success state (no network call) |
| CounterUp (loaded, unused on the home page) | not implemented |
| Nice Select (loaded, unused on the home page) | not implemented; use a native control if a select is ever needed |
| `logo.png` image wordmark | text wordmark in Shippori Mincho (image assets do not ship; the screenshot shows the logotype as lettering) |
| CSS `background-image` band photos | `picsum.photos/seed/portray-<n>/<w>/<h>` (deterministic) on `bg-cover bg-center` divs; the portrait is the one `<img>` with `object-cover` |
| jQuery sticky header (`sticky-bar` class) | scroll listener with a `data-stuck` attribute, CSS transition |
| jQuery back-to-top | anchor to `#top` + `scroll-behavior: smooth`, honouring `prefers-reduced-motion` |

## Sibling comparison (why this is not the app it is credited to)

`dossier` recreates ColorLib **Alias**: accent `#57d131`, headings `#2c3e50`,
`100px` pill buttons, and twelve bands (navbar, hero, about, skills,
testimonials, services, benefits, portfolio, résumé, blog, contact, footer).
Portray is a different design in every one of those axes: **`#01FF56` on
`#5AFF80` with `#150303` ink**, **0 radius everywhere**, a two-family
serif/sans pairing, nine bands, and three signature objects Alias does not have
(the disc portrait, the rotated-notch green expertise box, the 662px quote
band). Copy evidence agrees: the two bodies share one boilerplate phrase and
Alias-only copy scores 25 (`row-excl / spec-excl` = 1 / 25), which is exactly
why the rows are false `[x]` for this slug.

## Assets observed in the source (for crop/aspect guidance only)

`assets/img/logo/logo.png` (wordmark), `hero/hero_right.png` (938×900 cut-out
portrait with its own `#01FF56` disc), `gallery/section-bg.jpg` (about band),
`gallery/visit.jpg` (quote band), `gallery/gallery1..4.jpg` (strip + the
portfolio page grid). None of these may be referenced from `apps/portray` — use
deterministic placeholders with the same crops (portrait anchored
`right center`, quote photo `center`, gallery tiles square).
