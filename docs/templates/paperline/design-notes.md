# Paperline — Design Notes (ColorLib `resume`)

Research run **2026-10-25** (prep stream). Everything below was measured on the
live preview, not inferred from the screenshot. Reproduce the measurements, not
the adjectives.

## Evidence

| artifact | URL / value |
|---|---|
| Live preview | `https://preview.colorlib.com/theme/resume/` — **200**, **28,886 B**, sha256 `cc2e8ddfff3763a87274c2bfcca3b5f2fef1e98a4e06f98c09a8f0fad9c9e76a` |
| Stylesheet | `…/css/main.css` — **200**, **32,634 B**, sha256 `3c52be276033537b90b959a9f14a1db2168f503c486efc1cf2d1d06b1f53fe1e` |
| Page script | `…/js/main.js` — **200**, **3,246 B**, sha256 `fc730b44d6c9817893b331594db3ee01d9f30d10bed8e81fec13b6b066ce2a39` |
| Partial Bootstrap | `…/css/bootstrap.css` — **200**, **13,070 B**, banner `Bootstrap v4.0.0-beta`, file starts at the `@media print` block (utility/grid layers only) |
| Other sheets | `linearicons.css`, `font-awesome.min.css`, `magnific-popup.css`, `owl.carousel.css` |
| Scripts | jQuery 2.2.4, Popper 1.11.0, Bootstrap, `jquery.ajaxchimp`, `jquery.magnific-popup`, `parallax.min.js`, `owl.carousel.min.js`, `jquery.sticky`, `js/main.js` |
| Alias paths | `theme/bootstrap/resume/` **404**, `theme/bb/resume/` **404** — the slug-only path is the live design |
| Archive | `downloads/free/resume.zip` **404** (9 B `text/plain`) — **no archive**, live render is the only DOM/CSS reference |
| Inner pages | `generic.html` **200 / 23,696 B**, `elements.html` **200 / 41,786 B**; `about|services|contact|projects|blog|single.html` all **404** (9 B) |
| Screenshot | `colorlib.com/wp/wp-content/uploads/sites/2/resume-free-website-template.jpg` — served **AVIF**, decoded **1200×935**, analysed with PIL + vision |
| Fonts | theme declares only `"Poppins", sans-serif`; **no Google Fonts link** — the preview host injects `/cf-fonts/s/poppins/5.2.7/{latin,latin-ext,devanagari}/{100…700}/normal.woff2` via a `<style>` block. `document.fonts` reports **Poppins 100/300/400/500/600/700 loaded** (200 never declared). Ship `css2?family=Poppins:wght@100;300;400;500;600;700&display=swap` → **200** |

## CSS token reference (verbatim from `css/main.css`)

```css
body{color:#777;font-family:"Poppins",sans-serif;font-size:14px;font-weight:300;line-height:1.625em}
h1,h2,h3,h4,h5,h6{font-family:"Poppins",sans-serif;color:#222222;line-height:1.2em!important;font-weight:600}
h1{36px} h2{30px} h3{24px} h4{18px} h6{18px}
.section-gap{padding:120px 0}
/* one group rule paints every gradient surface */
.primary-btn,.default-header,.dropdown-menu,.banner-area,.myself-wrap .desc .talk-btn,
.skillbar-bar,.single-feature:hover,.single-footer-widget .click-btn,.generic-banner{
  background-image:linear-gradient(0deg,#62bdfc 0%,#8490ff 100%)}
.single-service a:hover,.footer-social a:hover i,.single-footer-widget .bb-btn{same gradient on background}
.primary-btn{line-height:42px;padding:1px 60px 1px 30px;border-radius:25px;color:#fff;font-weight:500;position:relative}
.primary-btn span{position:absolute;top:50%;transform:translateY(-60%);right:30px}   /* hover → right:20px */
.header-btn{background:#fff;padding:8px 40px;font-weight:600;color:#000;border-radius:20px;
  box-shadow:0 20px 20px 0 rgba(0,0,0,.1)}                    /* the page's ONLY shadow */
.default-header{position:absolute;top:0;left:0;width:100%;z-index:9}
.is-sticky .default-header{background-color:#fff}              /* colour only — the gradient IMAGE still paints */
.banner-left h1{color:#000;font-size:36px;font-weight:100;line-height:1em;margin-bottom:40px}
.banner-left h1 span{text-transform:uppercase;font-weight:700}
.banner-area .fullscreen{height:700px!important}               /* no .fullscreen element on the page */
.single-service .icon{margin-right:40px}.single-service a{color:#000}
.skillwrap{background:#fff;border-radius:10px;border:1px solid #bababa;padding:2px}
.skillbar-bar{height:10px;border-radius:10px;transition-property:width,background-color}
.skill-bar-percent{color:#777;font-size:14px;margin-bottom:10px;font-weight:400;text-align:right}
.myself-wrap{background:#fff;display:inline-block}
.myself-wrap .desc{padding:35px;text-align:center}
.myself-wrap .desc .talk-btn{padding:12px 70px;border-radius:25px;font-weight:400;color:#fff}
.single-qly{text-align:center;padding:30px 0}.single-qly b{color:#000;font-weight:600}
.btm-border{background:#ddd;width:70%;height:1px}
.single-project img{transition:all .3s ease}.single-project img:hover{transform:scale(.9);cursor:pointer}
.single-project a{color:#000}
.single-feature:hover a,.single-feature:hover .title .lnr{color:#fff}
.single-feature .title .lnr{color:#000;font-size:20px;margin-right:12px}
.form-area input{padding:15px}.form-area input,.form-area textarea{border-radius:0;font-size:12px}
.form-area textarea{height:180px}
.footer-area{padding-top:100px;background-color:#222222}
.footer-area h6{color:#fff}.footer-text{padding-top:20px}.footer-text a,.footer-text i{color:#8490ff}
.single-footer-widget input{border:none;background:#191919;color:#777;padding-left:20px;border-radius:0}
.click-btn{padding:8px 12px;border-radius:0;border:0}
.footer-social i{color:#cccccc}
.dropdown-menu{border-radius:0;margin-top:15px;border:none}   /* + the gradient group */
/* breakpoints: hero h1 36 → ≤1199 45 → ≤991 36 (text-align:center, <br> hidden) → ≤414 40
   ≤800  portrait img 40% ; ≤991 nav collapses ; ≤767 .generic-banner .height 400 */
```

## Measured geometry (Playwright, Chromium, DPR 1, page scrolled to settle lazies)

### Bands

| band | 1440 | 390 |
|---|---|---|
| banner | 0 / 915 | 0 / 745 |
| services | 915 / 864 | 745 / 1,482 |
| about | 1,779 / 1,012 | 2,227 / 1,622 |
| qualifications | 2,790 / 735 | 3,849 / 1,242 |
| projects | 3,525 / 1,633 | 5,091 / 2,643 |
| features | 5,159 / 634 | 7,734 / 1,443 |
| contact | 5,792 / 672 | 9,177 / 955 |
| footer | 6,464 / 432 | 10,132 / 767 |
| document | **6,897** | **10,898** |
| scrollWidth / clientWidth | 1,440 / 1,440 | 390 / 390 |

### Elements at 1440 (x, y, w×h)

| element | rect | type | note |
|---|---|---|---|
| `.banner-right img` | 150, 148, 546×767 | — | RGBA cut-out, alpha 0–255 |
| `.banner-left` | 720, 331, 570 (content 540) | — | 15 px gutters |
| `.banner-left h1` | 735, 331, 540×130 | Poppins 36/43.2 **100** `#fff` | `span` 280×51 at 735,370 **700** |
| `.banner-left p` | 735, 501, 540×68 | 14/22.75 300 `#fff` | |
| `.header-btn` | 735, 601, **165×38** | 14/22.75 **600** `#000` on `#fff` | pad 8/40, radius **20** |
| `.default-header` | 0, 0, 1440×**56** | — | absolute, z 9 |
| `.navbar-brand img` | 165, 13, 127×30 | — | |
| `.navbar-nav a` | 678, −2, 82×60 | 14/22.75 **600** `#fff` | pad 20, uppercase |
| `.title h1` | 355, 1,035, 730×43 | 36/43.2 **600** `#222` | |
| `.title p` | 355, 1,088, 730×23 | 14/22.75 300 `#777` | 10 px under the h1 |
| `.single-service` | 150, 1,197, 570×216 | — | 4 in 2 cols; y 1,197 / 1,533 |
| `.single-service .icon` | 165, 1,197, 500×60 | — | illustration 73×60 / 60×60 / 64×60 / 68×60 |
| `.about-left p` | 165, 2,061, 540×91 | 14/22.75 300 | |
| `.skillwrap` | 165, 2,262, 540×16 | — | white, 1 px `#bababa`, r 10, pad 2 |
| `.skillbar-bar` | 168, 2,265, **454×10** | gradient | 85 % of 534 |
| `.myself-wrap` | 817, 2,061, **458×610** | `#fff` | photo 458×340 + `.desc` 458×270 |
| `.talk-btn` | 950, 2,586, **192×49** | 14/22.75 **400** `#fff` | gradient, r 25, pad 12/70 |
| `.qty-* h3` | 165, 3,032, 540×29 | 24/28.8 **600** | uppercase companies |
| `.qty-* h4` | 165, 3,084, 540×62 | 18/21.6 **600** | pad 20/0 |
| `.single-project` (1st) | 165, 3,807, 540×666 | — | img 540×330, pad-bottom 100 |
| `.single-project img` (right col) | 735, …, 540×345 | — | image BELOW the text |
| `.single-feature` | 165, 5,421, **350×171** | `#f9f9ff` | pad 30/30/15; rows at 5,421 / 5,621 / 5,821 |
| `.single-feature .lnr` | 195, 5,451, 20×22 | Linearicons 20 | `#000` → white on hover |
| `.form-area` | 165, 6,084, 1,110×260 | — | two 540 columns |
| `.common-input` | 165, 6,084, **540×47** | 12/15 **400** `#495057` | pad 15, r 0, 1 px `rgba(0,0,0,.15)` |
| `.common-textarea` | 735, 6,084, **540×180** | 12/15 400 | |
| `.primary-btn` | 735, 6,284, **193×44** | 14/**42** 500 `#fff` | pad 1/60/1/30, r 25; arrow at right 30 |
| `.footer-area` | 0, 6,464, 1440×432 | `#222` | pad 100/0/120 |
| `.footer-area h6` | 165, 6,564, 445×22 | 18/21.6 600 `#fff` | |
| footer input | 640, 6,650, **304×37** | 14/17.5 300 `#777` | `#191919`, pad-left 20 |
| `.click-btn` | 944, 6,650, **40×37** | — | gradient, r 0 |
| `.footer-social i` | 1,115, 6,654 | FontAwesome 14 | `#ccc` |

### Header states

| scrollY | position | height | background-color | background-image | nav colour |
|---|---|---|---|---|---|
| 0 | `absolute` | 56 | transparent | gradient | `#fff` |
| 900 | `fixed` | 56 | `rgb(255,255,255)` | **gradient (paints over)** | `#fff` |
| 2,000 | `fixed` | 56 | `rgb(255,255,255)` | **gradient** | `#fff` |

`jquery.sticky` wraps the header in `.sticky-wrapper.is-sticky` (measured at
both 900 and 2,000). A screenshot at `scrollY = 1400` shows a **gradient bar**
with white labels — reproduce that, not a white bar with invisible text.

At 390 px the toggle is a 46×32 control at x 328; opening it expands
`#navbarSupportedContent` to **327 px** (`collapse show`), links still white,
item padding `15px 0`. The panel has no background of its own — it reads over
the hero gradient, and would be unreadable over the page body; the recreation
should give it a solid or blurred backdrop when opened below the hero.

## Fingerprinted interactive states

| state | measured |
|---|---|
| `.single-feature` idle → hover | `background-image:none` → `linear-gradient(0deg,#62bdfc,#8490ff)`; title/icon `rgb(0,0,0)` → `rgb(255,255,255)`; 0.3 s |
| `.single-service a:hover` | gradient band behind the black title |
| `.talk-btn:hover` | gradient → `transparent`, 1 px black border, black label |
| `.header-btn:hover` | white → transparent, 1 px white border, white label |
| `.single-project img:hover` | `scale(.9)` (shrinks) in 0.3 s |
| `.primary-btn:hover span` | `right:30px → 20px` |
| `.footer-social a:hover i` | `#ccc` → gradient fill |
| skill bars | **static** inline widths; no JS animation anywhere |
| footer year | `document.write(new Date().getFullYear())` at parse time |

## Screenshot analysis (`resume-free-website-template.jpg`, 1200×935, AVIF)

- Top fold only: the 915 px hero at 1200 wide plus the first ~30 px of the
  services heading.
- Gradient reads **left-sky → right-periwinkle** in the rendered card even
  though the CSS angle is `0deg` (bottom → top): the card is a browser-free
  crop, so trust the live `getComputedStyle` value
  (`linear-gradient(0deg, rgb(98,189,252), rgb(132,144,255))`) and the live
  band width, not the card's proportions.
- The portrait in the card has **no rectangle**: its own backdrop has been
  graded to the same gradient, which is exactly the effect a masked placeholder
  has to survive (delta #1 in the spec).
- Type tiers are clearly three: thin "Hi, I'm", bold uppercase
  "ETTA JENNINGS", thin "Art Director" — one `h1`, three visual weights. Do not
  build three headings.
- The card's CTA reads "LET US TALK" with wide tracking; the live DOM applies
  `text-transform:uppercase` on a `14 px/600` label — the tracking is Poppins'
  natural fit, not a `letter-spacing` token (measured `normal`).
- Below the fold the services marks are **flat multicolour illustrations**, not
  line icons — the card is the only place that shows them, so keep the
  multi-colour treatment (or document a monochrome substitute).

No copy drift was found between the card and the live hero ("Hi, I'm Etta
Jennings / Art Director", the same lorem paragraph, the same CTA). Unlike the
`villa`/`amplify` cards, this screenshot is current.

## Source → React adaptation table

| source construct | React implementation |
|---|---|
| `.default-header` + `jquery.sticky` | `Header.tsx`: absolute at `scrollY = 0`, `fixed` + gradient once scrolled (`useEffect` scroll listener, cleaned up); mobile panel with focus trap |
| `linear-gradient(0deg,#62bdfc,#8490ff)` group rule | one `@theme` pair `--color-brand-from/--color-brand-to` + a `bg-linear-to-t from-brand-from to-brand-to` utility used by hero, header, buttons, bars, hovers |
| `img/header-img.png` (RGBA cut-out) | `Hero.tsx`: `picsum.photos/seed/paperline-hero/546/767` with `mask-image: radial-gradient(120% 100% at 50% 40%, #000 55%, transparent 100%)` |
| `.single-service` icon PNGs | `lucide-react` `Monitor`, `Type` (or `Keyboard`), `Palette`, `ThumbsUp` at 60 px |
| `.skillbar` inline widths | `SkillBar` component with a `role="progressbar"` + `aria-valuenow`, width from a data array (85/80/40/70/75) |
| `.single-qly` + `.btm-border` | `Qualifications.tsx`: two `<ul>`s, `divide-y`-style 1 px `#ddd` at 70 % width, `text-center` |
| `.single-project` alternating order | `Projects.tsx`: data-driven `imageFirst` flag per item, `group-hover:scale-90` |
| `.single-feature:hover` gradient | `Features.tsx`: `hover:bg-linear-to-t hover:from-brand-from hover:to-brand-to hover:text-white` on the card |
| `form#myForm` → `mail.php` | `Contact.tsx`: controlled form, native `required` + `pattern`, local success state in the alert slot |
| `#mc_embed_signup` + `ajaxChimp` | `Footer.tsx`: local subscribe handler, inline success/error line, no network |
| `document.write(year)` | `new Date().getFullYear()` computed at render |
| ColorLib credit | `https://www.componentdock.com/` "Component Dock" link |

## Fidelity traps (found during this research)

1. **The stuck header is not white.** `.is-sticky .default-header` sets
   `background-color:#fff`, but the gradient `background-image` from the group
   rule still paints. Computed `background-color` alone will mislead you; check
   `background-image` or take a screenshot.
2. **The hero is 915 px, not `100vh` and not 700 px.** `main.js` resizes
   `.fullscreen`, but no such element exists; `.banner-area .fullscreen` is dead
   CSS. Height comes from the 767 px portrait + its 148 px offset + padding.
3. **`h1` weight 100 on a Poppins schedule.** Poppins 100 is delivered
   (`document.fonts` → loaded); loading only 300/400/700 will synthesise and
   the hero's thin tiers will look wrong.
4. **The only shadow on the page is the hero CTA's**
   `0 20px 20px rgba(0,0,0,.1)`. Cards, the résumé card and the footer carry
   none — adding "modern" shadows breaks the flat look.
5. **Two `h1`s' worth of visual size, one semantic level.** Section titles are
   `h1` in the source at 36 px/600; the recreation keeps one page `h1` and maps
   sections to `h2` at the same 36 px/600 size.
6. **`scale(.9)` shrinks** project images on hover — the opposite direction of
   the usual zoom-in reflex.
7. **Skill bars do not animate.** Animated count-ups would be an invention.
8. **The mobile nav panel is transparent** in the source (it reads over the
   hero gradient). If the panel can be opened after scrolling, it needs a
   backdrop — document it as a delta rather than copying an unreadable state.

## Sibling / family comparison

- Same-generated-family neighbours (`gym`, `agency`, `consulting`-style ColorLib
  one-pagers of the same era) share the vendor set — jQuery, Owl, magnificPopup,
  parallax, `jquery.sticky`, linearicons + Font Awesome — but **this page ships
  no carousel and no parallax element**, so most of that vendor code is dead
  weight: the recreation should add none of it.
- The gradient + `#f9f9ff` + Poppins-300 combination is the family signature;
  the accent hex `#8490ff` is the one value to reuse verbatim.
- `apps/resume` is the same *name* as this slug but a different design
  (Personalportfolio: coral `#ec5b53`, Rufina, navy `#000a2d`, #080827 footer).
  Do not open it as a reference, and do not copy its components.
