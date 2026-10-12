# Trousseau — design notes (section-by-section fidelity)

Recreation of ColorLib **"Honey"** (source slug `honey`) — a bright single-page
wedding site with a hot **pink accent `#ff2f92`** and white ornate flourishes.
Every note below is taken from the **live preview**
`https://preview.colorlib.com/theme/honey/` and its stylesheet `css/style.css`,
cross-checked against the TEMPLATES.md screenshot.

## Reference files read (2026-10-12)

| Thing | URL | Result |
| --- | --- | --- |
| ColorLib page | `https://colorlib.com/wp/template/honey/` | source article for the template |
| Preview (live DOM) | `https://preview.colorlib.com/theme/honey/` | **200**, 22,117 B, `<title>Honey Wedding Multi</title>` |
| Stylesheet | `…/honey/css/style.css` | **200**, 66,582 B — brand colour, fonts, buttons, section backgrounds |
| Supporting CSS | `css/bootstrap.css`, `css/responsive.css` (9,891 B), `css/font-awesome.min.css`, `vendors/linericon/style.css`, `vendors/owl-carousel/owl.carousel.min.css`, `vendors/lightbox/simpleLightbox.css`, `vendors/nice-select/css/nice-select.css`, `vendors/animate-css/animate.css` | referenced by the preview (framework + icons + carousel + lightbox + selects + mobile nav) |
| Screenshot | `https://colorlib.com/wp/wp-content/uploads/sites/2/honey-free-template.jpg` | **200**, served **AVIF** despite the `.jpg` name, 96,550 B, 1200×946 → converted to PNG and inspected visually |

The preview HTML was fetched and parsed; there is **no Google Fonts `<link>`** —
the two families are referenced directly from the stylesheet (`@font-face` /
`font-family` only), so the recreation loads them via a Google Fonts `<link>` in
`index.html`.

## Visual design (from the screenshot + live preview)

- **Aesthetic:** bright, airy, romantic. A **clean white page** with a single
  strong **hot-pink accent `#ff2f92`** and **white ornate scroll/leaf flourish
  ornaments** as the signature decoration. Generous whitespace, centred
  composition, soft diffuse shadows on the few cards.
- **Type:** **"Playfair Display", serif** (weight 600) for all headings and the
  hero couple names; **"Roboto", sans-serif** for body copy, nav, labels and
  buttons. Paragraphs are light (`font-weight:300`) and muted `#777777`;
  headings are near-black `#222222`.
- **Signature motif:** the hero couple names are bracketed by two white
  **flourish ornament images** (`img/banner/shap-1.png` above,
  `shap-2.png` below); the same flourish idea recurs as a corner decoration on
  the journey text cards and outside the reservation card
  (`contact-shap-1.png` / `contact-shap-2.png`). The story photos are framed by
  ornate white flourishes baked into `story-1.jpg` / `story-2.jpg`.
- **Buttons:** **square (no border-radius)**. `.main_btn` —
  `background:#ff2f92; color:#fff; line-height:40px; padding:0 23px;
  font-family:"Roboto",sans-serif; font-weight:bold; text-transform:uppercase;
  border:1px solid #ff2f92`. Hover — `color:#ff2f92; background:transparent;
  border-color:#ff2f92`.
- **Header:** one slim row — a logo mark + wordmark on the left, a 12px
  uppercase nav row (with a Pages dropdown) and a search icon on the right; the
  active/current link is pink. **The header is not sticky** — `header.header_area`
  is `position:absolute` over the hero (`z-index:99`) and scrolls away. The sheet
  does carry `.header_area.navbar_fixed .main_menu{position:fixed; …
  box-shadow: 0px 3px 16px 0px rgba(0,0,0,0.1)}`, but the only code that would add
  `navbar_fixed` — `navbarFixed()` in `js/theme.js` — is **commented out**
  (`// navbarFixed();`), so the rule never fires: dead CSS, **not** a behaviour to
  reproduce. Verified live: `scrollTo(0,1500)` → header `y = -1500`,
  `position:absolute`, `class="header_area"` unchanged.
- **Cards/panels:** white with
  `box-shadow: 0px 10px 30px 0px rgba(153,153,153,0.1)` (journey text cards,
  reservation card, arrangement cards). The timer uses a translucent white
  panel `rgba(255,255,255,0.3)` over a background photo (`timer-bg.png`).

## Structure (source document order)

```
header.header_area                  (logo + wordmark left, uppercase nav + search, active link pink)
section.home_banner_area            (bg photo home-banner.jpg + scrim: "The Wedding of" + pink couple names + white flourish ornaments)
section.story_area.p_120            (3 cols: framed photo · "Cordially Invited" + date/names/venue + pink "View Our Story" btn · framed photo)
section.timer_area                  (.timer_inner bg timer-bg.png: "Until we getting married" + translucent 4-cell timer + "are remaining")
section.journey_area.p_120          ("Our Love Journey" + 3 circular photos + 4 bordered text cards + 3 circular photos)
section.moments_area                ("Special Moments Captured" + 6-across photo grid with hover overlay + expand)
section.reservation_form_area.p_120 (white card: "Reservation Form" + Name/Email/2 selects + pink "Confirm Now")
section.progress_area               ("Arrengement in progress" + 4 white cards with Date/Time/Address)
section.clients_logo_area.p_120     ("Gift Registry" + 5-logo row, muted → full on hover)
footer.footer_area                  (#f9f9ff band: logo + menu row + social row + copyright bar)
```

Source markup confirmations (from the fetched DOM):
- nav items: Home · Our Story · Accomodation · Gallery · Pages ▾ (Bridesmaid,
  Groomsmen, Elements) · Blog · Contact; plus a search icon.
- hero: `<h5>The Wedding of</h5><h3>James &amp; Julie</h3>`.
- story: `<h3>Cordially Invited</h3>` + "On the 13th of may, 2018 / Travor
  james &amp; Julia Robberts / Santa Monica Rocky Beach, USA." + `main_btn`
  "View Our Story"; the two `col-lg-4` images are `img/story/story-1.jpg` and
  `img/story/story-2.jpg`.
- timer: `.timer` holds four `.timer__section` (classes `days`, `hours`,
  `minutes`, `seconds`), each a `.timer__number` + `.timer__label`.
- journey: `journey_image_items` = Abbie Norman (Sister), Bess Wolfe (Cousine),
  Mathilda Moss (Neighbour); `journey_text_items` = Love at first sight, First
  Kissing, Living Together, Cherished Proposal; second `journey_image_items` =
  Blake Hunter (Brother), Norman Ramsey (Cousine), Tommy Phillips (Neighbour).
- moments: six `.gallery_item` (`flex: 0 0 16.66%; padding: 3px`), each an
  `.h_gallery_item` with a `.hover` overlay + `fa fa-expand` icon.
- reservation form: `<input placeholder="Name">`, `<input
  placeholder="Email address">`, `<select class="res_select">` × 2 (Meal
  Preferences, Number of guests — 3 options each), `<button
  class="btn submit_btn">Confirm Now</button>`.
- arrangement: four `.progress_item` — Wedding Ceremony, Lunch Preparations,
  Wedding Cake Cutting, Wedding Party — each with a blurb and
  "Date: Friday, 20 May 2018 / Time: 19.00 / Address: Rocky Beach, Los angeles,
  USA."
- gift registry: `.clients_slider.owl-carousel` with five `.item` logos
  (`img/clients-logo/c-logo-1..5.png`, `opacity:.5` → `1` on hover).
- footer: `footer_inner` (`background:#f9f9ff`), `f_menu` row (Home · Our Story ·
  Accomodation · Gallery · Pages · Blog · Contact), a `f_social` row
  (facebook/twitter/dribbble/behance/heart), and a copyright bar with
  `document.write(new Date().getFullYear())`.

## Source inner pages (live, curl-probed 2026-10-12)

The source's own `<title>` reads **"Honey Wedding Multi"** and the theme is
multi-page in fact: **nine** further pages of the same theme are live (**HTTP
200**, `curl -sS` basis).

| Page | Live (`curl -sS`) | What it holds → what it informs |
| --- | --- | --- |
| `our-story.html` | **200**, 14,193 B | "Our Story", "Our Love Journey", "Special Moments Captured", "Gift Registry" → the story/journey/moments bands |
| `bridesmaid.html` · `groomsmen.html` | **200**, 13,577 B · 13,583 B | the bridal-party grids → the audience cards the one-pager has to stand in for |
| `accomodation.html` | **200**, 11,830 B | "Accomodation" (the source's own spelling) → the venue/logistics copy kind |
| `gallery.html` | **200**, 12,640 B | "Image Gallery" grid |
| `blog.html` · `single-blog.html` | **200**, 32,039 B · 32,683 B | blog grid + post shell |
| `elements.html` · `contact.html` | **200**, 35,517 B · 12,237 B | style guide + contact shell |

Nothing is copied from these pages: read for structure, copy kind and section
inventory only.

## Section-by-section fidelity notes

1. **Header.** Slim single row: logo mark + wordmark on the left, uppercase 12px
   nav (`font: 500 12px/100px "Roboto"`) with a `Pages` dropdown, and a search
   icon at the right end. Active/hover link is pink `#ff2f92`; dropdown items
   hover with a pink background and white text. Collapse to an accessible mobile
   disclosure below the small breakpoint (the source uses slicknav/jQuery).
   **Keep the header in flow — it is not sticky.** The source's
   `.header_area.navbar_fixed` shadow rule is dead (`navbarFixed()` commented
   out); do not add a scroll state, and drop that shadow token.
2. **Hero.** `section.home_banner_area` (min-height 800px) with a full-bleed
   background photo (`home-banner.jpg`) and a dark scrim. Centred `banner_content`
   in white: `h5` "The Wedding of" (14px, uppercase, letter-spacing 1.4px), then
   `h3` couple names in **pink `#ff2f92`**, 48px, Playfair Display bold. Two white
   flourish ornament images bracket the names above and below. Placeholder photo:
   `picsum.photos/seed/trousseau-1/1920/1080`; ornament = inline SVG/`Ornament`
   component (`aria-hidden`). **Parallax:** the photo is the source's single
   `div.overlay.bg-parallax` and the page init runs `$('.bg-parallax').parallax()`
   — the `jquery.parallax` (odahcam) bundle dropped in as `js/stellar.js`, whose
   `parallaxTranslate` sets `transform: translateY((scrollTop − elTop) / 2)`
   (`data-stellar-ratio="0.9"` is a leftover attribute and does nothing; the
   background itself comes from CSS, not from `data-background`, which is empty).
   Measured live: `translateY` **185.9 px** at `scrollTop 400` → **253.7 px** at
   `900`. Reproduce with a scroll-linked transform on the photo layer, disabled
   under `prefers-reduced-motion: reduce` — needs no dependency (a passive
   `scroll` listener + `requestAnimationFrame`, or CSS `background-attachment:
   fixed` as the cheap stand-in for a full-bleed band).
3. **Story.** `section.story_area.p_120` → `row.story_inner` with three
   `col-lg-4`: framed photo (left), `story_text` (centre, `margin-top:88px`) and
   framed photo (right). `story_text` = `h3` "Cordially Invited" (36px display
   serif `#222222`), a small grey line with the date, the couple names and the
   venue (max-width 224px, 14px/24px light), and a `main_btn` "View Our Story".
   Reproduce the ornate frames as a decorative border/overlay on the placeholder
   photos (`picsum.photos/seed/trousseau-2` and `trousseau-3`, 700×900).
4. **Timer.** `section.timer_area` → `.timer_inner.p_120` with a background image
   (`timer-bg.png`) and white type. `h5` "Until we getting married" (36px
   Playfair bold), then a `.timer` panel — max-width 560px, centred,
   `background:rgba(255,255,255,0.3)` — holding **four cells** at flex 25%,
   each a `timer__number` (36px Playfair bold italic) over a `timer__label`
   (14px Roboto). A `p` "are remaining" (24px Playfair bold) sits beneath. A
   static render (or a small `setInterval`) is fine — no dependency.
5. **Journey.** `section.journey_area.p_120`: centred `main_title` — H2 "Our Love
   Journey" (36px Playfair bold) + intro paragraph (14px, `#777777`). Then, in
   order: `journey_image_items` (three centred `journey_item`s — a round photo
   with an `h4` name + a small muted role line, `margin-bottom:35px`),
   `journey_text_items` (**four cards**, each `padding:45px 90px`, shadow
   `0px 10px 30px 0px rgba(153,153,153,0.1)`, an `h4` title + a blurb, with a
   corner flourish added via `:before` on odd / `:after` on even children, and
   `margin-bottom:60px`), and a second `journey_image_items` (three more people).
   Own names/roles/card titles + blurbs.
6. **Moments.** `section.moments_area`: centred `main_title` — H2 "Special
   Moments Captured" + intro; then `moments_inner` (flex wrap, `margin:-3px` and
   `overflow:hidden` on the container so edge gutters bleed) with six
   `.gallery_item` at `flex: 0 0 16.66%; padding: 3px`. Each is an
   `.h_gallery_item` (position relative, overflow hidden) with a dark hover
   overlay and a centred expand icon. Placeholders
   `picsum.photos/seed/trousseau-<n>/600/600` for n = 4…9; the expand icon →
   lucide `Expand`. Use a `<dialog>`-based lightbox or an aria-labelled button —
   no lightbox dependency.
7. **Reservation.** `section.reservation_form_area.p_120`: a centred white
   `res_form_inner` (max-width 555px, `padding:75px 50px`, shadow
   `0px 10px 30px 0px rgba(153,153,153,0.1)`) with a decorative flourish
   (`contact-shap-1/2.png`) outside it on each side. Inside: `main_title` H2
   "Reservation Form" + a light paragraph, then the form — a **Name** text field,
   an **Email address** field, a **Meal Preferences** select (3 options), a
   **Number of guests** select (3 options) and a pink **"Confirm Now"** submit
   button. All fields `border:1px solid #eeeeee; border-radius:0`. Own field
   labels/options; the form must not post to an external service (the source
   posts to `contact_process.php`).
8. **Arrangement.** `section.progress_area`: centred `main_title` — H2
   "Arrengement in progress" (keep the source's intent, fix the spelling to
   "Arrangement" in the recreation's own copy) + intro; then four
   `.progress_item` cards (shadow `0px 10px 30px 0px rgba(153,153,153,0.1)`) —
   each a photo, an `h4` title (18px Playfair bold, hovers pink), a blurb, and a
   **Date / Time / Address** block (`.date a`, 14px Roboto `#222222`). Source
   items: Wedding Ceremony · Lunch Preparations · Wedding Cake Cutting · Wedding
   Party. Own titles/times/addresses.
9. **Gift Registry.** `section.clients_logo_area.p_120`: centred `main_title` —
   H2 "Gift Registry" + intro; then a row of **five registry marks** rendered
   muted (`opacity:.5`, full on hover). The source uses an auto-scrolling
   `owl-carousel`; implement as a static/wrapping flex row (or a CSS
   scroll-snap row) — **do not add a carousel dependency**. Marks: neutral
   monochrome text/lucide marks (own designs; no ColorLib logo assets).
10. **Footer.** `footer.footer_area` → `.footer_inner` (`background:#f9f9ff`,
    centred): a footer logo (`footer-logo.png`), an `f_menu` row (Home · Our
    Story · Accomodation · Gallery · Pages · Blog · Contact, 12px uppercase,
    hover pink), a small `f_social` row (facebook/twitter/dribbble/behance/heart)
    and a copyright bar ("© <year> All rights reserved | This template is made
    with ♥ by Colorlib"). The recreation drops the Colorlib credit, keeps the
    computed current year, and adds the repo-required
    `https://www.componentdock.com/` ("Component Dock") link.

## Type and colour tokens

| Token | Value | Where |
| --- | --- | --- |
| Brand accent (hot pink) | **`#ff2f92`** | hero names, active nav, buttons, links, hovers, dropdown hover bg |
| Ink | **`#222222`** | headings, nav, card titles |
| Muted text | **`#777777`** | paragraphs + intro copy |
| Placeholder | **`#999999`** | form fields |
| Soft surface | **`#f9f9ff`** | footer band |
| Borders | **`#eeeeee`** / **`#cccccc`** | inputs, selects, dividers |
| Card shadow | **`0px 10px 30px 0px rgba(153, 153, 153, 0.1)`** | journey cards, reservation card, arrangement cards |
| Timer panel | **`rgba(255, 255, 255, 0.3)`** | `.timer` (max-width 560px, cells flex 25%) |
| Dead scroll-state shadow (**do not reproduce** — its `navbarFixed()` init is commented out) | **`0px 3px 16px 0px rgba(0, 0, 0, 0.1)`** | `.header_area.navbar_fixed .main_menu` (never applied) |
| Heading font | **`"Playfair Display", serif`** (600) | h1–h6, hero names, timer numbers/labels |
| Body font | **`"Roboto", sans-serif`** | body, nav, buttons, form fields |
| Buttons | `.main_btn` filled `#ff2f92`/`#fff`, uppercase bold, line-height 40px, padding 0 23px; hover transparent bg + pink text/border; **square** | all CTAs |
| Radii | **square everywhere** — buttons, inputs, selects, cards (`border-radius:0`) | — |
| Section backgrounds | white for Story / Journey / Moments / Reservation / Arrangement; background-photo + scrim for Hero (`home-banner.jpg`, the one `bg-parallax` layer — scroll-drift, see §2); background-photo for the Timer band (`timer-bg.png`); `#f9f9ff` for the Footer | — |
| Generic-only accents | `#f8b600` (amber) and `#4cd3e3` (cyan) appear in the sheet's **elements/generic** styles only — **not** the brand colour | — |

## Deltas to record in the PR

- New name **trousseau** and own brand wordmark, couple names, dates, venue,
  nav labels, journey names/roles, journey card titles + blurbs, arrangement
  card titles/times/addresses, registry copy and footer copy (none of "Honey",
  `James & Julie`, `Travor james`/`Julia Robberts`, `Santa Monica Rocky Beach`,
  `On the 13th of may, 2018`, the source nav labels, `Abbie Norman`/`Bess
  Wolfe`/`Mathilda Moss`/`Blake Hunter`/`Norman Ramsey`/`Tommy Phillips`,
  `Love at first sight`/`First Kissing`/`Living Together`/`Cherished Proposal`,
  the `Date: Friday, 20 May 2018` block, or the placeholder blurbs reused).
- **Section headings stay the source's own strings** — including its
  `Arrengement in progress` typo, kept verbatim (the spec's Arrangement scenario
  says SHALL) — while the card titles, times and addresses inside each section
  are ours.
- Placeholder photography via `https://picsum.photos/seed/trousseau-<n>/<w>/<h>`
  for the hero, the two framed story photos, the six journey circles, the six
  moment-grid images and the four arrangement photos (no ColorLib asset copied).
- Ornaments (hero flourish, card corner flourishes, story photo frames,
  reservation side flourishes) recreated as inline SVG / decorative components
  instead of the source's `shap-1.png` / `shap-2.png` / `contact-shap-1/2.png` /
  `journey-shap-*.jpg` images.
- Replaced the source's jQuery + `owl.carousel` + `nice-select` + lightbox +
  animate.css machinery with accessible, dependency-light components (accessible
  dropdowns/labels, a static registry row, a `<dialog>`-based gallery lightbox).
- **Hero parallax reproduced without a dependency** (scroll-linked `translateY`
  ~half rate, off under `prefers-reduced-motion: reduce`) — the source's
  `js/stellar.js` bundle is not copied.
- **Dropped the source's dead scroll-state header shadow**
  (`0px 3px 16px 0px rgba(0, 0, 0, 0.1)`): it is gated on `navbar_fixed`, which
  the commented-out `navbarFixed()` never applies, and the live preview's header
  scrolls away (`position:absolute`). The recreation's header is in flow — the
  earlier prep wording that promised a "fixed-on-scroll white bar" was wrong.
- Added the repo-required `https://www.componentdock.com/` ("Component Dock")
  footer link; dropped the "made with ♥ by Colorlib" credit.
- Fixed the source's misspelling "Arrengement" → "Arrangement" in the
  recreation's own heading.

## Post-implementation deltas (2026-10-12)

- **The placeholder seeds were re-picked after the frames were actually looked
  at.** Every seed named above (and sixteen more) was downloaded to a contact
  sheet and read: the circle slots' treeline is a bleak misted avenue and the
  orchard-lunch frame is a frog on green water, neither of them right for a
  wedding page. The shipped seeds are hero `trousseau-1`, story `trousseau-2` /
  `trousseau-3`, moments `trousseau-4, 5, 6, 7, 26, 29`, circles
  `trousseau-35, 30, 22, 25, 33, 14`, arrangement `trousseau-10, 19, 8, 16` and
  the countdown band `trousseau-23` — the full table and the measured
  fidelity numbers live in the spec's Implementation notes. The moment captions
  were rewritten to match the frames they now sit under.
- **The section heading stays the design's own spelling** ("Arrengement in
  progress"), because the spec's requirement makes it a `SHALL`; the delta list
  above proposed respelling it, and the spec wins.
- The nine inner pages are folded into the one page with the `Pages` dropdown
  pointing at real in-page bands (`#attendants`, `#groomsmen`, `#registry`), and
  every nav href on the page is asserted to resolve to an id that exists.
