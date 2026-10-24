# Captura — Design Notes

- **Source slug:** `halen`
- **ColorLib name:** Halen (`Halen - Free Photography Portfolio Template`)
- **Listing:** https://colorlib.com/wp/template/halen/
- **Preview:** https://preview.colorlib.com/theme/halen/ (HTTP 200, the slug-only path is the demo — no alias)
- **New name:** captura · **Category:** Photography portfolio
- **Spec:** `openspec/specs/template-captura/spec.md`
- **App:** `apps/captura/` (Navbar · Hero · PhotographySkills · WildlifePhoto · Gallery · Testimonials · Team · ContactInfo · InstagramFeed · Footer)

Rewrite status: this brief replaced a Bato (photography, Playfair/Karla/`#F9CE00`)
description on 2026-10-24 — docs-source drift caught by `verify-docs-source.py`
(the spec, the `TEMPLATES.md` row and the shipped app all describe Halen; only
this file was the stale layer). Every value below was re-measured from the live
reference that day.

## Reference identity (measured 2026-10-24)

| Artefact | Bytes | sha256 (head) |
| --- | --- | --- |
| `theme/halen/index.html` | 63,889 | `8ef7d518426d5a30…` |
| `theme/halen/css/style.css` | 137,291 | `3f0bb2d8f02d5779…` |
| `theme/halen/css/bootstrap.min.css` | 40,525 | `8a80039f5a153f50…` (vendor) |
| `theme/halen/css/responsive.css` | — | **HTTP 404** (the page links it; the file does not exist) |

The sheet identity matches the spec's recorded identity byte-for-byte, so the
live preview **is** the reference. The page holds **54** anchors — **31** of them
dead `href="#"`. The 23 live ones point at real inner pages, all HTTP 200 and all
multi-page siblings worth reading for anything the one-pager has to invent:

| page | bytes | holds |
| --- | --- | --- |
| `about.html` | 55,015 | about split + skills + team |
| `album.html` | 55,048 | album grid |
| `baby_gallery.html` | 50,113 | the album the landing gallery links to |
| `blog.html` | 27,279 | post list |
| `contact.html` | 45,346 | contact form + map |
| `elements.html` | 34,375 | the style guide the `#ff5e13` palette lives in |
| `single-blog.html` | 30,958 | article layout |

`index.html` is byte-identical to the directory URL (a no-op link, never a 404).
The dead `css/responsive.css` link is a source defect, not a reason to skip the
responsive grammar: the breakpoints below are from the `@media` blocks inside
`style.css` itself.

## Design tokens (from `css/style.css`, canonical over the screenshot)

| Role | Value | Evidence in the sheet |
| --- | --- | --- |
| Action / link blue | `#48B6FB` | 7 declarations — `.boxed-btn` 1px border and its hover fill, `.blog_item_img .blog_item_date` chip |
| Ink | `#2C2C2C` | 9 — `.section_title h3` colour, sticky header bed, `.black_overlay::before` (40 % scrim) |
| Paper | `#f9f9ff` | 27 — `.genric-btn.default` bed, cards |
| Hairline | `#f0e9ff` | 12 — sidebar / form-control / pagination borders |
| Muted | `#999999` (11) · `#707070` / `#727272` | `.section_title p` body copy, meta lines |
| Elements accent (orange) | `#ff5e13` | 20 — `.genric-btn.primary`, `del`, blockquote rules, list bullets, switch states: the **shared elements-page** palette, not a landing-section colour |
| Secondary hues | `#415094`, `#4cd3e3`, `#38a4ff`, `#f4e700`, `#f44a40` | link-button text, table percentages, info/success/danger buttons |
| Typeface | **Poppins** | 8 `font-family` declarations (`"Poppins", sans-serif`) |
| Button (`.boxed-btn`) | `padding:18px 44px`, 14px, **`letter-spacing:3px`**, `border:1px solid #48B6FB`, **`border-radius:0`**, white bed; hover fills `#48B6FB` + white text | `.boxed-btn`, `.boxed-btn:hover` |
| Radii vocabulary | `50%` (21 — avatars, social discs, slider dots), `0px` (13 — buttons, cards, inputs), `3px` (7), `8px` (6) | — |
| Hero slide | `.single_slider` `height:900px` (100vh on tall viewports, 620px small); `.slider_text h3` 50px/82px **weight 300** white, `span` weight 700; `p` 20px white | `.slider_area .single_slider …` |
| Gallery tile hover | `.single_photography .hover` = `linear-gradient(top, rgba(0,0,0,.08) 0%, #000 100%)` sliding up; title 24px weight 300 white, category 13px *italic* `#D5D5D5` | `.gallery_area .single_photography …` |
| Footer | photo band + `.copy-right_text` bed **`#000000`**, 60px padding, copy `#C7C7C7` 16px, links `#5DB2FF` | `.footer …` |

`#6c757d`, `#007bff`, `#212529`, `#dc3545` in `bootstrap.min.css` are the bundled
Bootstrap vendor block — not Halen's palette; never put them in `@theme`.

## Section order (as shipped)

1. **Navbar** — transparent over the hero, white 15px links (Home · About · Albums · Blog · Pages · Contact), social glyphs right, sticky state `#2C2C2C` + shadow
2. **Hero** — 3-slide carousel, each: kicker “Hi, This is Halen, a professional Photographer” + headline “I Captured Moments” + “Explore Work”
3. **PhotographySkills** — centred “World class photography skills” + paragraph
4. **WildlifePhoto** — image/text split, “Wildlife photography”, paragraph, “Explore Work”
5. **Gallery** — “My world class photography” + 3 × 3 tiles, each “Baby album” / “Photography / Baby” on hover
6. **Testimonials** — “Our Customers Say” carousel, quote + “- Robert Thomson”
7. **Team** — Milani Mou · Jasmine Pinky · Piya Zosoldos, each “Photographer”
8. **ContactInfo** — “Contact Us”, Address `200/D, Green lane, Kings street, New York`, `+10 787 367 2567`, `contact08@halen.com`, `#map` panel
9. **InstagramFeed** — 6-up image strip, no headings, icon overlay on hover
10. **Footer** — photo band + social row + `#000000` copyright strip

## Section-by-section fidelity notes

**Navbar.** `.header-area` + `#sticky-header` — the bar is `background:transparent`
over the hero with white 15px Capitalised links, so on load it reads as part of
the photograph; `.sticky` turns it `#2C2C2C` with `0 3px 16px rgba(0,0,0,.1)` and
slides it in (`transform:translateY(70px)`). Drop-down “Pages” holds
elements/single-blog. Recreation: sticky bar that swaps to the dark bed after
scroll, links as anchors, social glyphs decorative.

**Hero.** `.slider_area` with three `.single_slider` backgrounds at 900px (100vh).
Text is left-aligned over a `.black_overlay::before` scrim (`#2C2C2C` at 40 %),
headline 50px/82px **light weight** with the surname in weight 700, and one
`.boxed-btn`. Autoplay ~5 s; the source uses owl-carousel dots — the recreation
uses two arrow/dot controls.

**PhotographySkills.** `.photography_skill_area` — a centred `.section_title`
(h3 42px/54px weight 300 `#2C2C2C`, p 16px `#707070`). Pure typography, no card.
The source copy accidentally mentions a *different* theme name (“Blacksilver”) —
paraphrase it, never copy that string into the app.

**WildlifePhoto.** Two-column split (`col-lg-6`): photograph one side, text the
other, same `.section_title` grammar plus a `.boxed-btn`. This is the page's only
asymmetric band.

**Gallery.** `.gallery_area` — centred title + 3 × 3 grid of `.single_photography`
tiles; the hover panel is the gradient scrim described above with the album title
and an italic `Photography / Baby` meta line. Nine tiles, all the same album in
the source; keep the count and the hover behaviour.

**Testimonials.** `.testimonial_area` — one quote per slide, avatar above, name as
`- Robert Thomson`, centred, auto-rotating. Keep 3 slides.

**Team.** `.team_area` — three cards, square photo, name 24px, role “Photographer”,
social glyphs. No card border in the source; the photo is the card.

**ContactInfo.** `.contact_info_area` + `#map` — a two-part band: heading block
(“Contact Us” + paragraph) then three stacked details (Address / phone / email)
beside a Google-maps panel. The source map fails to authenticate and prints
“This page can't load Google Maps correctly.” — do **not** reproduce that error;
ship a static map-styled placeholder panel.

**InstagramFeed.** `.instragram_area` — six square photos in one row, no copy at
all, Instagram glyph revealed on hover. Keep it text-free.

**Footer.** `.footer` is a background photo band with a right-aligned social row;
`.copy-right_text` is the `#000000` strip with `#C7C7C7` 16px copy and `#5DB2FF`
links, reading “Copyright © All rights reserved · This template is made with ♥ by
Colorlib”. Per AGENTS.md rule 5 the recreation replaces that credit with a link to
https://www.componentdock.com/ and never names ColorLib in `apps/captura/`.

## Source → React adaptation

| Source | Source element | React equivalent |
| --- | --- | --- |
| `.header-area` | transparent bar, white links, sticky swap | `Navbar` — scroll listener, `bg-[#2C2C2C]` when stuck |
| `.slider_area` | owl carousel, 3 slides | `Hero` — index state, 900px band, `.boxed-btn` clone |
| `.photography_skill_area` | centred title block | `PhotographySkills` — title + paragraph |
| split `.section_title` | image/text two-up | `WildlifePhoto` — 2-col grid + CTA |
| `.gallery_area` | 3 × 3 `.single_photography` | `Gallery` — 9 tiles, gradient hover panel |
| `.testimonial_area` | quote carousel | `Testimonials` — 3 quotes, `- Name` |
| `.team_area` | 3 photographer cards | `Team` — 3-up grid |
| `.contact_info_area` | details + `#map` | `ContactInfo` — 3 detail rows + map placeholder |
| `.instragram_area` | 6-up photo row | `InstagramFeed` — 6 tiles, icon on hover |
| `.footer` | photo band + black strip | `Footer` — social row + Component Dock credit |

## Placeholder images

`https://picsum.photos/seed/captura-hero-<1..3>/1600/900`,
`https://picsum.photos/seed/captura-skill/1200/800`,
`https://picsum.photos/seed/captura-wildlife/900/700`,
`https://picsum.photos/seed/captura-gallery-<1..9>/500/500`,
`https://picsum.photos/seed/captura-team-<1..3>/600/700`,
`https://picsum.photos/seed/captura-insta-<1..6>/400/400`,
`https://picsum.photos/seed/captura-footer/1600/500`. Poppins comes from Google
Fonts via `<link>`; no ColorLib asset (image, icon font, CSS) is copied.

## App deltas (as shipped in `apps/captura/`)

- The app's `--color-brand-500` is `#21a0f5` — a blue reading of the sheet's
  action blue `#48B6FB`, while the sheet's **elements** accent is the orange
  `#ff5e13` (spec table row 1). Both are measured reference values; painting the
  blue as the brand is an app-side choice, not a prep error.
- Email and phone are re-branded (`contact08@captura.com`) — the source prints its
  own theme name, which the app must not carry.
- The hero is one image with a CSS scrim rather than a 3-slide carousel, and the
  gallery hover uses a `from-black/0 to-black` gradient rather than the exact
  8 %-to-black ramp; the section order matches the source 1:1.
- The Google map is a static placeholder (no API key), and the Instagram row is a
  six-tile photo strip with a lucide icon overlay.
