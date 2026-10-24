# Bistro — Design Notes

Reference: **Allfood** — `https://colorlib.com/wp/template/allfood/`
Live preview: `https://preview.colorlib.com/theme/allfood/` (HTTP 200, 48,989 B, read 2026-10-24)
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/allfood-free-template.jpg (57,957 B, AVIF 1200 × 946)
Token authority: `theme/allfood/assets/css/style.css` (58,090 B, sha256 `8e1b11a8bb1ed4284c3b144bf92af51141f2640bbe6c5d2fd236be10e9206e21`)
Shipped: https://bistro.free.componentdock.com

A one-page restaurant site on white space and one hot-orange accent: transparent header over
a light food photograph, an 87px display hero with cut-out plates bleeding in from the right,
an about block with three icon captions, a menu mosaic under a dark hover overlay, a mirrored
second about block, a "Book A Table" card floating on a photo band, three service cards, a
pill-shaped subscribe row over another photo band, three blog cards whose caption boxes
overhang their images, and a photo-backed footer.

Provenance note: this brief and `openspec/specs/template-bistro/spec.md` were rewritten on
2026-10-24. The earlier pair recorded ColorLib "Accordion 02" (warm-cream `#fcf8f2` / amber
`#d4a373`, an "Our Specialties" Breakfast–Lunch–Dinner–Drink–Wine accordion) — a design
`apps/bistro` does not render. The spec ↔ row census listed
`bistro spec=accordion-02 rows=allfood`, and its copy adjudication found the app's own
strings (`About Our Restaurant`, `Delicious Food`, `Best Chef`, `Quality Food`) in the
Allfood body and in no accordion demo — verdict `SPEC-STALE` in `docs/spec-row-mismatch.md`.
The tokens below are re-measured from the Allfood sheet. `TEMPLATES.md` lists the design
twice (row **2666** under `## Restaurant (41)`, row **330** under `## Bootstrap (216)`); both
rows link `bistro`, so this is one app for one design listed twice (`ROW-MULTI`) — no row
pointer to move and no rename (`bistro` ≠ `allfood`, rule 5 holds).

## Typography

The reference `@import`s
`https://fonts.googleapis.com/css?family=Josefin+Sans:300,400,500,600,700|Poppins:300,400,600,700&display=swap`.

| role | face | reference sizes |
| --- | --- | --- |
| display / headings | Josefin Sans | `h1…h6` (500, `#212025`); hero `h1` 87px / 700 collapsing to 60 · 50 · 35 · 27; `.section-tittle h2` 49px / 600; `.g-caption h4` 50px / 700; `.blog-cap h4` 20px / 500; nav 16px; footer title `h4` 18px |
| body | Poppins | body 14px; `p` 16px / 30px; `.about-area2 .pera-top` 16px / 500; caption text 14px; blog meta 14px uppercase |

The default paragraph colour is navy `#10285d`, not ink — headings are the near-black
`#212025`. That split is why the app keeps both `--color-ink` and `--color-navy`.

## Design tokens (`apps/bistro/src/index.css` `@theme`)

| token | value | role against the reference |
| --- | --- | --- |
| `--color-brand` | `#ff5600` | 30 declarations: `.btn` fill, kicker spans, nav hover, active tab, `.g-caption span`, blog hover fill |
| `--color-brand-dark` | `#e74d00` | `.btn::before` hover sweep fill |
| `--color-ink` | `#212025` | `h1…h6`, section titles, caption paragraphs |
| `--color-navy` | `#10285d` | default paragraph colour |
| `--color-meta` | `#828fa3` | blog caption date (14px uppercase) |
| `--color-mist` | `#f7f9f8` | blog caption box |
| `--color-foot` | `#848493` | footer social links |
| `--font-display` | `Josefin Sans` | headings, nav, footer titles, subscribe button |
| `--font-sans` | `Poppins` | body and paragraphs |
| radii | 6px button · 5px caption/select · 10px booking card · 50px subscribe pill | `.btn`, `.blog-cap` / `.nice-select`, `.booking-wrap`, `.about-area3 form.search-box` |

Reference-only values that the app deliberately does not paint: `#1f2b7b` (20 declarations —
generic `.genric-btn.primary`, switches, ordered lists, blockquote rule), `#f0e9ff` (12 —
sidebar hairlines), `#415094` (7 — generic button text), and the generic-chromatic set
`#4cd3e3` / `#38a4ff` / `#f4e700` / `#f44a40`. None of them appears on this page's bands;
importing them would be palette noise.

## Section-by-section fidelity notes

1. **Header** (`.header-area.header-transparent` → `.main-header`, `.header-sticky`) — logo
   left, nav `Home · About · Menu · Blog▾ · Element · Contact` (nav links `#091a23`, 16px
   Josefin, 39px 24px padding, hover `#ff5600`), submenu 170px white with
   `box-shadow 0 0 10px 3px rgba(0,0,0,.05)`, right-hand outlined CTA
   (`.border-btn`: `1px solid #ff5600`, 5px radius, 19px 47px, bottom-up fill on hover).
   The bar is `position: absolute` over the hero and `.sticky-bar` white + shadow once
   scrolled.
2. **Hero** (`.slider-area .hero__caption`) — eyebrow 16px / 500 orange, `h1` 87px / 700 on a
   1.2 line height, paragraph inset `padding-right: 257px` so it clears the photograph, then
   the solid `.btn` (`27px 44px`, 6px radius) with the `#e74d00` sweep. Band height is
   `min-height: 1080px` (cover/center) — the photograph is light, so text stays ink.
3. **About (low)** (`.about-low-area.section-padding30`, 195/140 padding) — photograph +
   eyebrow `#ff5600` + `h2` 49px / 600 + paragraph (16px, 1.6, `padding-right: 50px`) + three
   icon captions (icon 45px `#212025`, caption 14px).
4. **Menu mosaic** (`.gallery-top.section-bg.pt-90.pb-40`) — photo band, eyebrow, white 49px
   heading, centred tabs (active pill `#ff5600` + 15px diamond marker at `bottom: -8px`),
   then tiles at `big-img` 730px / `smoll-img` 365px. Hover paints
   `rgba(11,14,13,0.702)` and slides in `.g-caption` (orange 30px eyebrow, white 50px / 700
   title, "Order Now"). The app reproduces the overlay as `bg-black/70` on the figcaption and
   exposes it on `group-focus-within` as well as hover.
5. **About 2** (`.about-area2`) — mirrored; caption inset 50px, `.pera-top` 16px / 500 ink,
   `.pera-bottom` 16px / 300.
6. **Booking** (`.booking-area.section-bg.pt-120.pb-130` → `.booking-wrap`) — white card,
   `padding 70px 60px 40px`, `radius 10px`, `box-shadow 0 8px 79px rgba(0,0,0,.08)`; selects
   `#f9f9f9`, 5px radius, 65px tall, 49px left inset for the icon, label colour `#9d9d9d`.
   Each field is `width: 23%` on the desktop row, which is why the reference reads as four
   controls + submit.
7. **Services** (`.our-services .single-services`) — cards `padding: 79px 23px`, `.services-cap`
   inset 16px, hover `box-shadow 0 10px 30px rgba(133,66,189,.1)` (a violet-tinted lift, kept
   as a neutral shadow in the app).
8. **Subscribe** (`.about-area3.pt-180.pb-170.section-bg`) — photo band, then
   `form.search-box` at `border-radius: 50px`: input 73% wide / 60px tall / borderless /
   placeholder `#616875`, button 27% wide / 60px tall / `#ff5600` / Josefin.
9. **Blog** (`.blogs-area .single-blogs .blog-cap`) — caption box `#f7f9f8`, 5px radius,
   `padding 29px 20px 20px 31px`, 94% wide, `bottom: -63px`, `right: 0`; date `#828fa3`
   14px uppercase; title 20px / 500 `#212025`. Hover flips the box to `#ff5600` and the text
   to white — the app carries both states.
10. **Footer** (`.footer-area.section-bg`, `.footer-padding` 150/136) — logo + blurb,
    Navigation (Home, Events, Testimonial, Categories, Contacts), Useful Links
    (Registration, Login, Policy, Terms & Conditions), six-image Instagram grid; links
    `#012f5f` that shift `#ff5600` with a 5px left nudge on hover; bottom row copyright +
    "Follow Us" socials (`#848493`, 14px). The reference's own credit line is replaced by the
    Component Dock link.

## Band backgrounds

The photographs are not in the stylesheet — each band carries `data-background` and the
bundle's JS paints it; `.section-bg` only sets `cover` / `center center` / `no-repeat`.

| band | hook |
| --- | --- |
| hero | `.slider-height` → `../img/hero/h1_hero.png`, `min-height: 1080px` |
| menu | `.gallery-top` → `assets/img/gallery/section_bg01.png` |
| booking | `.booking-area` → `assets/img/gallery/section_bg04.png` |
| subscribe | `.about-area3` → `assets/img/gallery/section_bg03.png` |
| footer | `.footer-area` → `assets/img/gallery/section_bg02.png` |
| tiles | inline `background-image` over `gallery1…4.png`, 730px / 365px tall |

No reference asset may be copied: the app uses deterministic
`https://picsum.photos/seed/bistro-<slug>/<w>/<h>` placeholders, keeping the tonal role (a
light hero photograph; darker scrims behind the menu, booking, subscribe and footer bands).

## Pitfalls

- **The demo lives at `assets/`**, not `css/` — `theme/allfood/css/style.css` is a 404 while
  `theme/allfood/assets/css/style.css` is the real 58,090 B sheet. Prefix-only ladders
  (`/theme/bootstrap/allfood/`) all 404; the slug-only path is the demo.
- **Vendor sheets lie about the palette.** Bootstrap ships `#007bff` ×10 and `#6c757d` ×20,
  gijgo `#2196f3` ×6. Censusing the aggregate instead of `style.css` turns Allfood into a
  blue theme; the orange is only visible in the theme sheet.
- **Only the hero heading is `#212025` at 87px** — section headings drop to 49px, and the
  gallery overlay title is 50px white. Copying the hero scale into section titles breaks the
  rhythm the screenshot shows.
- **The gallery overlay is `rgba(11,14,13,0.702)`**, not pure black; a solid `black/50` reads
  washed out over the light plates.
- **The blog caption overhangs** (`bottom: -63px`) — it is not a card under the image, so
  the band needs extra bottom padding (the reference's `.section-padding30` is 195/140).
- **`downloads/free/allfood.zip` is 404**, so there is no offline bundle to fall back on;
  the live page and sheet are the only reference. `measure-reference-tokens.py` reports
  `rebuilt: False`, so a mismatch with the app is DRIFT, never "the demo was redesigned".
