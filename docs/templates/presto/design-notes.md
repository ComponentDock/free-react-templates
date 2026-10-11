# Presto — design notes (section-by-section fidelity)

Recreation of ColorLib **"Fastes"** (source slug `fastes`,
https://colorlib.com/wp/template/fastes/) under the NEW name **presto**
(`apps/presto`, `@free-react-templates/presto`).

Reference used (research date 2026-10-11):
- Live preview DOM: `https://preview.colorlib.com/theme/fastes/` — HTTP 200,
  38,486 B, `text/html; charset=utf-8` → saved `/tmp/fastes/index.html`
  (page title `Hosting | Teamplate`, empty meta description).
- Main stylesheet: `https://preview.colorlib.com/theme/fastes/assets/css/style.css`
  — HTTP 200, 55,037 B → saved `/tmp/fastes/style.css`. (The page also loads
  bootstrap/slick/owl/themify/flaticon/fontawesome — none of which the recreation
  copies.)
- Screenshot: `https://colorlib.com/wp/wp-content/uploads/sites/2/fastes-free-template.jpg`
  — HTTP 200, 37,536 B, served as **AVIF**, decoded and reviewed visually
  (renders 1200×946 + browser chrome).

The live preview was reachable, so no fallback was needed; the screenshot was
used to corroborate the above-the-fold visual design (violet wave hero, coloured
TLD row, overlapping pricing triple). The screenshot covers only the top of the
page — everything below the pricing cards was read from the preview DOM.

## Global tokens (from the source stylesheet)

- **Brand coral:** `#FA8F77` — filled buttons, link hover, back-to-top, price
  emphasis. Deep hover fill `#ee7b61` (the sliding `::before` inside `.btn`).
- **Outline coral:** `#FD8F5F` — every outline button (`.borders-btn`,
  `.border-btn`) and the pricing price `h4`. Peach `#FFBF81` for the hero's
  circular search button.
- **Violet:** hero gradient `#73469F` → `#3B2774` with darker wave layers;
  separators/hairlines in the hero `#73469F`; sticky header `#3B2774`; secondary
  violet text `#1F2B7B` / `#415094`.
- **Lilac:** `#C57EFC` — the two support contact chips.
- **Text:** headings `#140C40`; body `p` `#646D77`; muted card copy `#3B4855`,
  `#717081`, `#7a8290`, `#838a9b`; on dark bands `#fff` and
  `rgba(255,255,255,.6)`; footer links `#C2C5DB`.
- **Surfaces:** `#fff` (page + cards), `#F8FCFF` (help CTA band), `#f9f9ff` /
  `#fbf9ff` (element tints). Divider `#E7E6EB`; footer input border `#695CAE`;
  light hairlines `#f0e9ff`.
- **Shadow:** cards `0 8px 26px rgba(67,40,124,.08)`.
- **Font:** `Poppins, sans-serif` everywhere (`@import` of
  `Poppins:wght@200;300;400;500;600;700;800` from Google Fonts). Weights: body
  400, headings 500 (section `h2`/card titles 600, hero `h1` and help `h2` 700),
  muted/footer 300.
- **Buttons:** 30px pills. `.btn` = `background:#FA8F77; color:#fff;
  font-size:15px; font-weight:600; letter-spacing:1px; padding:27px 44px;
  border-radius:30px; overflow:hidden` with a `#ee7b61` fill wiping across on
  hover (`::before` `scaleX(0)` → `scaleX(1)`). `.borders-btn` = transparent,
  `1px solid #FD8F5F`, `#FD8F5F` text, `border-radius:30px; padding:10px 64px`.
  `.border-btn` = same colours, `padding:13px 48px`, hover fills `#FD8F5F`/white.
  `.boxed-btn` = white bg, coral text + border, uppercase, `letter-spacing:3px`.
- **Section rhythm:** `.section-padding` 120/120 · `.section-padding30` 195/180
  (150/140 at lg, 100/70 at md, 65/70 at sm) · `.section-padding40` 140/130
  (100/70 at md) · `.pt-top` 160px (70px at md/sm) · `.pt-130`/`.pb-130` ·
  `.w-padding2` 80px 30px · `.footer-padding` 160/50 (80/70 at sm) ·
  title blocks `mb-90` (`margin-bottom:90px`).
- **Section titles:** `.section-tittle` → `h2` 35px/600 `#140C40`, `p #7a8290`;
  on dark bands the `section-tittle2` variant forces `h2 #fff` and
  `p rgba(255,255,255,.6)`.
- **Link behaviour:** `a` transitions `0.3s`; footer links shift
  `padding-left:5px` and turn coral on hover.

## Section-by-section notes (order matters — match 1:1)

### 1. Header (`div.header-area.header-transparent`)
`position:absolute; left:0; top:0; width:100%; z-index:9` → floats over the hero
(no own background on the home page). One `.main-header.header-sticky` row in a
fluid container (`padding:0 85px` desktop → `0 60px`/`0 20px` at smaller
breakpoints):
- **Logo** left (source `img/logo/logo.png`) — the recreation builds its OWN
  wordmark (text or its own SVG); never the source artwork.
- **Menu** (`.main-menu`, hidden below `lg`): Home · About · Services · Help ·
  **Blog ▸** · Contact, links `16px`, `font-weight:400`, `padding:39px 19px`,
  `text-transform:capitalize`, white, hover coral `#FA8F77`. The Blog item opens
  a `.submenu` panel (`width:170px; background:#FD8F5F`, white links) on hover —
  recreate it as a keyboard-operable dropdown with `aria-expanded`.
- **Header buttons** (`.header-btns`): phone number (`margin-right:40px`, white)
  and a filled coral pill `.btn` labelled "Sign In". The number must be the
  app's own (never `+880 156 278 256`).
- Below `lg` the menu collapses into `.mobile_menu` — recreate as an accessible
  toggle + keyboard-closable panel.

### 2. Hero (`div.slider-area` → `.single-slider.slider-height`)
- Full-width band, `min-height:890px` (680px at lg, 600px at md/sm, 640px at
  ≤575px), background `cover`/`center`. The source uses
  `img/hero/h1_hero.png` (a violet gradient with layered wave silhouettes); the
  recreation renders its OWN violet `#73469F`→`#3B2774` gradient plus its own
  layered wave SVGs — never that image.
- **Centred caption** (`.hero__caption`, `text-align:center`, lifted `-40px` at
  sm): eyebrow `p` (14px, white — source "Best Domain & hosting service provider
  in the area", paraphrase) above an `h1` ("Fast & Secure web hosting", 45px /
  700 / uppercase / white / `line-height:1.3`, 29px at sm, 19px at ≤575px).
  (The stylesheet also defines a 60px `#31ff7a` `span` style inside
  `.hero__caption`, unused on this page — do not add it.)
- **Search form** (`.search-box`): pill input (`height:65px; width:100%;
  border:none; border-radius:30px; font-size:18px; color:#777777;
  padding:9px 33px 9px 76px; placeholder #616875`) with a globe glyph inside the
  left edge (`#c4c4c4`, 32px) and a circular submit button inside the right edge
  (`50×50; border-radius:50%; background:#FFBF81; color:#fff; font-size:21px`).
  Label the input (visually hidden label is fine), give the icon-only button an
  `aria-label`, and handle submit without navigating.
- **TLD row** (`.single-domain.pt-30.pb-30`): four `li` (`font-size:20px;
  font-weight:400`) — source `.com $15.99 · .net $10.99 · .rog $10.99 · .me
  $10.99`, with the TLD coloured by position (`#ff7474`, `#ffdd74`, `#74ff9f`,
  `#748bff`) and the price `p` white, plus `1px #73469F` separators between
  items. **Deliberate deviation:** the source's `.rog` is a typo — use `.org`,
  keeping the layout, colours and four-item count.
- **Cloud-scallop divider:** the hero's lower edge is a white scalloped wave
  (source: a background image edge). Reproduce as the app's own SVG spanning the
  full width, stacked above the pricing overlap.

### 3. Pricing triple (`section.pricing-card-area`)
- The area carries `margin-top:-138px` (`-78px` at md, `0` at ≤575px) so the
  cards overlap the hero's bottom edge; the source renders the **same card three
  times** (three identical `col-xl-4` columns) — keep three cards, and vary the
  plan copy sensibly (same *kind* of content, paraphrased).
- Card `.single-card`: `background:#fff; padding:70px 0; text-align:center;
  border-radius:8px; box-shadow:0 8px 26px rgba(67,40,124,.08)`.
  - `.card-top` (`padding:0 26px`): icon image (source `price1.png` — use an own
    coral `lucide-react` server glyph), `h4` plan name (25px/600, e.g. "Shared
    Hosting"), `p` "Starting at" (`15px #3B4855`).
  - `.card-mid`: price `h4` `#FD8F5F` 32px/600 (e.g. `$4.67`) with a `span`
    period suffix (`12px #838a9b`), `border-bottom:1px solid #E7E6EB`,
    `padding-bottom:26px`.
  - `.card-bottom`: five `li` (`16px`, `font-weight:300`, `#717081`,
    `margin-bottom:23px` — storage space, unlimited bandwidth, full backup
    systems, free domain, unlimited databases) then an outline pill
    `.borders-btn` "Get Started". On card hover the pill fills `#FA8F77` with
    white text.

### 4. Features band (`section.load-balancing.pt-top.section-bg2`)
- `data-background` light cover-image band + `padding-top:160px` (70px at
  md/sm). Recreation supplies its own light placeholder/gradient.
- Centred title block (`.section-tittle.text-center.mb-90`): `h2` "Cloud Load
  Balancing" (35px/600 `#140C40`) + blurb `p` (`#7a8290`).
- **Six** `.single-features.mb-40` items in `col-xl-4/col-lg-4/col-md-6` (3 per
  row → 2 at md): `display:flex`, icon (source reuses one shared
  `right-icon.png`; use an own coral `lucide-react` glyph) + `.features-caption`
  (`padding-left:19px`) with `h3` (25px/`#140C40`/400) and `p` (15px/`#646D77`,
  `line-height:1.8`). Source topics: Instant Activation, Fully Redundant,
  Powerful Automation (repeated), High Performance, Dedicated Support — keep six
  *distinct* paraphrased topics (do not reproduce the source duplicate).

### 5. Support band (`section.support-area.section-bg2.pt-130.pb-130`)
- Dark cover-image band, own background. `.support-caption` (`col-lg-5`):
  `h2` white two-line title ("24 Hour Expert Support", `.section-tittle2` — white
  `h2`, translucent `p`) + `.support-details` blurb (white,
  `padding:30px 10px 30px 0`).
- `.support-number` (`col-lg-6`): exactly **two** `.single-contact` chips —
  `background:#C57EFC; border-radius:10px; padding:35px 20px`, flex row of an
  icon (`36px #fff`, source `fa-phone-volume` / `fa-comment` → lucide
  `phone-volume` / `message-square`) and a line of text (`20px/500 #fff`): the
  app's own support phone number and a "Chat with experts" action.

### 6. Map band (`div.map-are.section-padding40`)
- **Duplicates the features title:** the source uses "Cloud Load Balancing" again
  here. Keep the duplication 1:1 (it is the reference's own quirk), with the same
  centred `.section-tittle.text-center.mb-90` treatment.
- Below it, a full-width `<iframe>` map, `height:600px`, `border:0`,
  `loading:lazy`, inside `col-xl-12`. Use an embed of the app's own choosing with
  a `title` attribute — never the source's Burj Khalifa coordinates.
- `section-padding40` rhythm (140/130 → 100/70 at md).

### 7. Testimonials (`div.testimonial-area.testimonial-padding.section-bg2`)
- Dark cover-image band (own background), `padding-top:190px;
  padding-bottom:90px` (100/60 at lg, 60/99 at md/sm).
- Left `col-lg-4`: `.support-caption` with a white two-line `h2` ("Customer' s
  story" in the source — paraphrase) + blurb.
- Right `col-xl-6`: a **2-slide** slick slider (`.h1-testimonial-active`, dots,
  `dot-style`). Each `.single-testimonial` → `.testimonial-caption` with a
  portrait (`gallery/testimonial.png` → own picsum placeholder
  `https://picsum.photos/seed/presto-testimonial-<n>/120/120`), a quote `p`
  (20px/400, white) and a founder block (`span` name 21px/500 + `p` role, source
  "Mark Jonson" / "@creative director" → paraphrase).
- Dots are ~10px circles with the active dot `#fff`; make them labelled buttons
  with `aria-current`/`aria-selected`, support arrow keys while focused inside
  the slider, and pause autoplay on hover/focus / under
  `prefers-reduced-motion`.

### 8. Brand strip (`div.brand-area`)
- `.brand-active.brand-border.pt-50.pb-40`: a bordered row of **seven**
  `.single-brand` marks (source `brand1..6.png`, one repeated). Recreate as the
  app's own muted text/SVG marks in a bordered strip — never the source images.

### 9. FAQ (`section.ask-questions.section-bg2.section-padding30`)
- Dark cover-image band (own background), `section-padding30` rhythm.
- Centred title block (`.section-tittle.section-tittle2.text-center.mb-90`):
  `h2` "Frequently ask questions" (white) + translucent blurb.
- **Four** `.single-question.d-flex.mb-50` items in two `col-lg-6` columns: a
  white `Q.` `span` (20px) + `.pera` (`padding-left:28px`) with `h2` (20px,
  white) and `p` (15px, `rgba(255,255,255,.6)`). Source questions: server
  connectivity, choosing a domain name, `www.` prefix, IIS password prompt —
  paraphrase. (The stylesheet also defines a light `.single-question2` variant
  used on sub-pages; not needed here.)

### 10. Split band (`div.about-area2.section-padding30`)
- 6/6 row: `col-lg-6` own illustration (`gallery/about1.png` → own illustration
  or picsum placeholder, full width inside the column) beside `col-lg-4`
  `.about-caption` with `h2` ("Commitment to Security" → paraphrase), a `p`
  (`margin-bottom:40px`) and a coral **outline pill** `a.border-btn` "Learn
  More" (`padding:13px 48px; border:1px solid #FD8F5F; color:#FD8F5F;
  border-radius:30px`, hover fills `#FD8F5F`/white).
- Stacks at md and below (illustration above caption); caption
  `padding-left:50px` only on wide viewports.

### 11. Help CTA (`section.wantToWork-area`)
- Background `#F8FCFF`; inner `.wants-wrapper.w-padding2` (`padding:80px 30px` →
  `70px 20px` at ≤575px).
- Left `col-xl-6`: `.wantToWork-caption.wantToWork-caption2` with `h2` (35px/700,
  "Need any help?" → paraphrase) + `p` (18px).
- Right `col-xl-6`: `.double-btn` two CTAs — filled coral `.btn` "Contact Us"
  (`margin-right:20px`) and outline `.border-btn` "Live Chat". Stacks
  left-aligned at small widths.

### 12. Footer (`footer > .footer-wrappr.section-bg`)
- `data-background` purple cover-image band (`section-bg` also sets
  `background-attachment:fixed`); recreation supplies its own purple
  placeholder/gradient. `footer-padding` 160/50 (80/0 at ≤575px).
- Four columns in a `justify-content-between` row:
  - **Company** (`col-xl-2`): why choose us, review, customers, blog, careers.
  - **Products** (`col-xl-2`): same kinds as the source.
  - **Support** (`col-xl-3`): technology, products, customers, quality, sales
    geography.
    Each column: `h4` (`22px/400 #C2C5DB`) + five `li` links (`#C2C5DB`,
    `font-weight:300`, hover `#FA8F77` + `padding-left:5px`, `margin-bottom:15px`).
  - **Logo + newsletter + socials** (`col-xl-3`): own logo, a "Subscribe our
    newsletter to get updates about our services" line (`#C2C5DB`), an e-mail
    input (`height:43px; width:100%; padding:10px 20px; border:1px solid
    #695CAE; border-radius:14px; color:#fff; text-align:center`) and a full-width
    coral "Subscribe" button (`background:#FA8F77; border-radius:10px;
    padding:13px 22px; margin-top:24px`, invalid-state text `#FA8F77`), then three
    round social links (`40×40; border:1px solid #fff; border-radius:50%`, icons
    rotate `rotateY(180deg)` on hover, hover fills `#FA8F77`).
- `.footer-bottom-area > .footer-border` (`padding:33px 0 20px`) with a centred
  copyright line (`18px/300 #C2C5DB`, `#fff` links). Replace the source's
  "This template is made with ♥ by Colorlib" credit with the **Component Dock**
  link (`https://www.componentdock.com/`).
- The newsletter form must be labelled, validate the e-mail locally, show an
  inline coral error for invalid input and confirm success in a polite live
  region (source posts to a Mailchimp endpoint — do not replicate it; no
  navigation).

### Page chrome
- `#back-top`: fixed `50×50` coral `#FA8F77` circle, white glyph,
  `border-radius:50%; right:31px; bottom:18px; box-shadow:0 0 10px 3px
  rgba(108,98,98,.2)`, appears on scroll and returns to the top. Label it and
  keep it keyboard reachable.
- Sticky header: `.sticky-bar` becomes `position:fixed; top:0; width:100%;
  background:#fff` (with the source's `#3B2774` tint when the violet variant is
  used) plus `box-shadow:0 10px 15px rgba(25,25,25,.1)` — only apply the solid
  treatment once the page is scrolled.

## Responsive notes
- Bootstrap grid equivalents: `col-lg-*` ≥992px, `col-md-*` ≥768px, `col-sm-*`
  ≥576px. Features 3 → 2 per row; pricing 3 → 2 → 1; FAQ two columns → one;
  support and testimonial bands stack (caption above chips / title above
  slider); split band stacks illustration above caption; help-CTA buttons stack;
  nav collapses to an accessible toggle.
- Scale type as the source does: hero `h1` 45 → 29 → 19px, section `h2` 35 → 31
  → 24px.
- Reduce the `-138px` pricing overlap (`-78px` at md, `0` at sm) and the
  `pt-top` 160px (→70px) so nothing clips; keep vertical rhythm consistent; no
  horizontal scroll at 320px.

## Copy & asset rules
- Paraphrase all copy — keep the same *kind* of content (eyebrow + headline +
  search + prices, plan name + price + feature list + CTA, question + answer,
  column heading + link list), never the source strings verbatim in app files.
- No ColorLib / "Fastes" / `fastes` string anywhere in `apps/presto` (comments
  included).
- No copied assets: photos from `https://picsum.photos/seed/presto-<n>/<w>/<h>`,
  icons from `lucide-react`, own logo / wave shapes / scallop divider /
  illustrations; never the source's `img/**`, `h1_hero.png`, `section_bg0*.png`,
  `price1.png`, `right-icon.png`, `brand*.png`, `testimonial.png`,
  `about1.png`, `footer_bg.png`, `logo*.png`, favicon or CSS.
- Own contact details: never `+880 156 278 256` (header) or `+10 367 456 3678`
  (support band); use the app's own numbers.
