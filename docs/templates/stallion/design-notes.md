# Stallion — Design Notes

- **Source slug:** `fitness`
- **ColorLib name:** Fitness ("3 FITNESS" in the demo masthead)
- **Listing:** https://colorlib.com/wp/template/fitness/
- **Preview:** https://preview.colorlib.com/theme/fitness/ — HTTP 200, 32,185 B,
  sha256 `66c25d784babe97f…` (measured 2026-10-24)
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/fitness-free-template.jpg
  (1,200 × 946)
- **New name:** stallion · **Category:** Gym / fitness landing
- **Spec:** `openspec/specs/template-stallion/spec.md`
- **App:** `apps/stallion/` (Header · Hero · TopCourses · CtaBanner · Features ·
  BmiCalculator · Gallery · Testimonials · Brands · FinalCta · Footer)

Rewrite status: this brief replaced a **Durg** description on 2026-10-24 —
Durg is a different ColorLib theme (a services agency with a slider hero), not
this gym page. Docs-source drift caught it
(`scripts/verify-docs-source.py`, `DOCS-STALE` `brief=durg`); the spec, the
`TEMPLATES.md` row (`line 1844`) and the shipped app all recreate `fitness`.
Values below re-measured from the live reference that day.

## Reference identity (measured 2026-10-24)

| Artefact | Bytes | sha256 (head) |
| --- | --- | --- |
| `/theme/fitness/` (index) | 32,185 | `66c25d784babe97f…` |
| `theme/fitness/css/main.css` | 66,862 | `3ee635d8a8d0fb2b…` |

The sheet is a single 66 KB `main.css` (no Bootstrap import in the file itself —
it is a hand-rolled float/flex grid with its own `.genric-btn` family and
FontAwesome for glyphs). The home page holds **65** anchors, **34** `<img>` tags,
**1** `<form>` with **5** inputs, and no inline `background-image` (all photo
bands are CSS). Sibling pages: `about.html`, `services.html`,
`trainers.html`, `blog-home.html`, `blog-single.html`, `contact.html`,
`elements.html`. Stallion recreates the **home page only**.

## Design tokens (from `css/main.css`, canonical over the screenshot)

| Role | Value | Evidence in the sheet |
| --- | --- | --- |
| Brand red/pink | `#f6214b` (74) | buttons, nav strip, active states, price tags |
| Ink | `#222222` (13) · `#222` (16) | headings, bodies of dark bands |
| Body text | `#777777` (11), 14px, weight **300**, `line-height: 1.625em` | `body{…}` |
| Surface | `#fff` (124) · `#f9f9ff` (22) · `#eee` (13) · `#ccc` (7) | page, alternating bands, rules |
| Secondary hues | `#4cd3e3` ×7, `#38a4ff` ×6, `#f44a40` ×6 | `.genric-btn.success/info/danger` — unused by the home page |
| Typeface | `"Poppins", sans-serif` | 3 declarations incl. `body` and `h1` |
| Headings | `h1` weight **600**, `line-height 1.2em`, `#222222`; `h2` 30px | `h1{…}`, `h2{font-size:30px}` |
| Radii | `3px` (buttons) · `8px` · `8.5px` · `50%` | 7 + 6 + 5 + 4 declarations |
| Hero | `.banner-area{background:url(../img/banner-bg.jpg) right; background-size:cover}` | photo aligned right, text column on the left |

Palette census, most-used first: `#fff` ×124, `#f6214b` ×74, `#222222`/`#222`,
`#f9f9ff` ×22, `#777777`, `#ccc` ×7.

## Visual design (from the TEMPLATES.md screenshot)

White top bar: envelope glyph + `SUPPORT@COLORLIB.COM` on the left, a bold red
`3` mark with `3 FITNESS` wordmark centre, phone number and a phone button on the
right. Under it a **full-width `#f6214b` nav strip** with white uppercase,
tracked links (`HOME ABOUT SERVICES TRAINERS BLOG PAGES ELEMENTS CONTACT`).
Hero: a dark gym photograph (sampled `#1e1013`, `#56363d`) with the text column
on the left — two-line heavy uppercase white headline `SHAPE YOUR PERFECT BODY`,
a muted paragraph, and a **rectangular red** `Become a Member` button. The next
band is white with a centred bold heading `Top Courses That are being Offered`,
a small muted subtitle, and a row of photo cards. The whole page repeats that
rhythm: white bands, red buttons, dark photo bands.

## Section order (as the reference renders)

1. **Top bar + header** — `.header`: e-mail left, logo centre, phone right;
   below it the red nav strip.
2. **Hero** — `.banner-area`: `h1` "Shape your Perfect body", paragraph,
   `Become a Member`.
3. **Top courses** — `.top-course-area.section-gap`: `h1` "Top Courses That are
   being Offered" + subtitle, carousel of course cards (`h4` name + price, e.g.
   *Target Specific Muscle — $275*, *Weightlifting — $200*,
   *Flex your muscle — $225*).
4. **CTA pair** — `.cta-area`: two photo halves, both `h1` "Get into shape now".
5. **Features** — `.feature-area.section-gap`: `h1` "Our Topnotch Features" +
   three icon cards (`Smart Security`, `Unlimited Colors`, `Endless Support`).
6. **BMI calculator** — `.aclculation-area`: `h1` "Calculate Your Body Mass
   Index", rows `Your Height(inches)` / `Your Weight(Ibs)` with inputs and a
   `Calculate Your BMI` button (the source duplicates `name="height"` on both
   inputs — a template bug, not a design intent).
7. **Gallery** — `.image-gallery-area`: `h1` "Image Gallery that we like to
   share" + a photo grid.
8. **Testimonials** — `.testomial-area`: `h1` "Testimonial from our Clients" +
   three named quotes (Helena Phillips, Cordelia Barton, Carrie Reese).
9. **Brands** — `.brands-area`: monochrome logo strip.
10. **Final CTA** — `.callto-area`: `h1` "It's never late to start, join us
    today!".
11. **Footer** — `.footer-area.section-gap`: `About Us`, `Contact Us`,
    `Newsletter` (form), then a bottom row with copyright + social icons.

## Section-by-section fidelity notes

**Header.** Two stacked bars: a white utility bar (e-mail, centred logo, phone)
and a solid red nav strip with white uppercase links. The logo is a red mark plus
a bold wordmark. Nothing is sticky in the source.

**Hero.** Photo on the right, text on the left, **no dark overlay class** — the
photo is already dark. Headline is uppercase, very heavy, two lines, white. One
red rectangular button. Copy is placeholder gym text.

**Top courses.** Centred section heading (`h1` at section-title scale) plus a
one-line muted subtitle, then cards in a carousel: photo, `h4` course name,
price under it, small meta. Duplicate slides repeat the same three courses —
that is Owl's loop, not extra content.

**CTA pair.** Two equal halves, each a photo with a white `h1` overlay and a thin
divider between them. Both read "Get into shape now".

**Features.** Three centred cards: small red icon above a bold title and a short
blurb. White ground, no borders.

**BMI calculator.** Dark photo band with white text; label left, input middle,
button right — two rows. Inputs are white with no radius; the button is the red
`primary-btn`. In React the calculation is local state: `703 × lb / in²`, with a
category label; the source's duplicated input is not reproduced.

**Gallery.** Section heading + an asymmetric photo mosaic (mixed tile widths);
no captions, no lightbox chrome beyond the shared magnific-popup init.

**Testimonials.** Three quotes with names on a white ground; italic copy and a
small red quote glyph.

**Brands.** A single row of grey logo marks on white with generous padding.

**Final CTA.** Full-width dark photo band with a centred white `h1` and a red
button — the page's closing call to action.

**Footer.** White ground (`.footer-area{background-color:#fff}`), three widget
columns with bold `h4` headings, a newsletter input + red submit, then a bottom
row with the copyright and circular social icons. Replace the source credit with
the Component Dock line.

## Source → React adaptation

| Source | Source element | React equivalent |
| --- | --- | --- |
| `.header` | utility bar + red nav strip | `Header` |
| `.banner-area` | photo hero, uppercase `h1`, red CTA | `Hero` |
| `.top-course-area` | 3-course carousel with prices | `TopCourses` |
| `.cta-area` | two photo halves | `CtaBanner` |
| `.feature-area` | three icon cards | `Features` |
| `.aclculation-area` | height/weight inputs + button | `BmiCalculator` (local state) |
| `.image-gallery-area` | photo mosaic | `Gallery` |
| `.testomial-area` | three quotes | `Testimonials` |
| `.brands-area` | logo strip | `Brands` (text marks) |
| `.callto-area` | closing photo band + CTA | `FinalCta` |
| `.footer-area` | 3 widgets + newsletter + bottom row | `Footer` (Component Dock credit) |

## Placeholder images / fonts

`https://picsum.photos/seed/stallion-<n>/<w>/<h>` for the hero, course cards, CTA
halves, gallery tiles and the BMI band. **Poppins** (300–600) from Google Fonts
via `<link>`, matching the sheet's only family. Icons from `lucide-react`; the
source's Font Awesome glyphs and its `img/` photography are not copied.

## App deltas (as shipped in `apps/stallion/`)

- Brand token `--color-brand: #f6214b` matches the sheet, with an app-added hover
  `#d91a3e` and ink `#222222` / muted `#777777` — all sheet literals except the
  hover shade.
- Top Courses ships as a static grid of three cards (the source is an Owl
  carousel with repeated slides); names and prices are preserved in kind.
- The BMI calculator is client-side and prints a category; the source only shows
  the two inputs and the button.
- Brands render as typographic marks rather than grey logo images; all
  photography is picsum placeholders.

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer SHALL link
  [Component Dock](https://www.componentdock.com/). That is the only attribution
  line the recreation carries.
- **Provenance ban.** No file under `apps/stallion/` may name the source
  designer, carry a `colorlib.com` URL, or reuse the source template's name —
  code, comments, CSS, markup, metadata and filenames included (AGENTS.md
  rule 5).
- **Deploy identity.** `apps/stallion/public/CNAME` =
  `stallion.free.componentdock.com` and the package `homepage` =
  `https://stallion.free.componentdock.com`.
