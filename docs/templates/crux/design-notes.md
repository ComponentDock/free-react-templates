# Crux — Design Notes

- **Source slug:** `bbs`
- **ColorLib name:** Bbs (`Bbs - Free Creative Agency Website Template`)
- **Listing:** https://colorlib.com/wp/template/bbs/
- **Preview:** https://preview.colorlib.com/theme/bbs/ (HTTP 200, the slug-only path is the demo — no alias)
- **New name:** crux · **Category:** Creative agency / small business
- **Spec:** `openspec/specs/template-crux/spec.md`
- **App:** `apps/crux/` (Navbar · Hero · Features · About · VideoCallout · BlogCards · Story · Newsletter · Footer)

Rewrite status: this brief replaced an **Olla** (dark-navy agency) description on
2026-10-24 — docs-source drift caught by `verify-docs-source.py`: the spec, the
row and the app all build Bbs (purple banner, pink→yellow gradient CTA), only this
file named another design. Every value below was re-measured from the live
reference that day; `tasks.md` was already correct and is unchanged.

## Reference identity (measured 2026-10-24)

| Artefact | Bytes | sha256 (head) |
| --- | --- | --- |
| `theme/bbs/index.html` | 15,797 | `483d4588c8baf713…` |
| `theme/bbs/css/main.css` | 32,491 | `7d110e90fc67908e…` |
| `theme/bbs/css/bootstrap.css` | 7,616 | `a850c4faf657bf52…` (vendor) |
| `theme/bbs/css/linearicons.css` | 901 | `beed369c3a95cd79…` (icon face) |

The sheet identity matches the spec's recorded identity byte-for-byte, so the
live preview **is** the reference. The page is deliberately thin: **16** anchors,
**8** of them dead `href="#"`; the 8 live ones are the nav (Home · Generic ·
Elements) and the logo. Two live inner pages are worth reading before inventing
anything:

| page | bytes | holds |
| --- | --- | --- |
| `elements.html` | 35,748 | the full `.genric-btn` palette (`primary` pink, `success` yellow, `info` blue, `danger` red), form + list grammar |
| `generic.html` | 16,056 | the generic content page the nav points at |

`index.html` is byte-identical to the directory URL (a no-op link, never a 404).

## Design tokens (from `css/main.css`, canonical over the screenshot)

| Role | Value | Evidence in the sheet |
| --- | --- | --- |
| Brand purple (banner) | `#7034db` | 7 declarations — `.banner-area:after` and `.video-area .overlay-bg` radial-gradient stop, `.story-area` bed |
| Brand radial (banner/video) | `radial-gradient(50% 50%, circle closest-side, #7539dd 0%, #7034db 100%)` | `.banner-area:after`, `.video-area .overlay-bg` |
| Gradient CTA (pink → yellow) | `linear-gradient(0deg, #f58e9a 0%, #fbe44c 100%)` | `.primary-btn:after`, `.ilene-tabs .nav-item:hover/.active` |
| Accent pink | `#f58e9a` | 25 — `b, i, sup, sub, u, del`, `.genric-btn.primary` |
| Accent yellow | `#fbde51` | 7 — `.genric-btn.success` |
| Info / danger | `#38a4ff` (6) · `#f44a40` (6) | `.genric-btn.info`, `.genric-btn.danger` |
| Paper | `#f9f9ff` | 31 — `.about-area`, `.subscription-area`, `.genric-btn.default` |
| Ink | `#222222` | 14 — headings and body |
| Muted | `#777777` (6) | body copy, meta |
| Footer bed | `#333333` | `.footer-area` |
| Typeface | **Poppins** | 3 `font-family` declarations (`"Poppins", sans-serif`) |
| Button (`.primary-btn`) | `line-height:40px`, `padding:0 30px`, **`border-radius:20px`**, transparent bed, `1px solid #fff`, white `span`; hover = gradient `:after` at opacity 1 + `#222` label | `.primary-btn`, `.primary-btn:hover` |
| Tabs (`.ilene-tabs .nav-item`) | pill, `border-radius:25px`, `1px solid #eee`, `line-height:40px`, `padding:0 25px`; active/hover = gradient bed + white label | `.ilene-tabs …` |
| Radii vocabulary | `20px`/`25px` (buttons, tabs), `3px` (`.about-thumb`), `8px`, `0px`, `50%` | — |
| Banner band | `.banner-area` `600px` (`.generic-height` 400px), background image `banner.png` right/contain **under** the purple radial | `.banner-area`, `.banner-area .height` |

`#6c757d`, `#007bff`, `#212529`, `#e83e8c` inside `bootstrap.css` are the bundled
Bootstrap vendor block — not Bbs's palette; never put them in `@theme`.

## Section order (as shipped)

1. **Navbar** — logo left, pill nav right, transparent over the purple banner
2. **Hero** — purple radial banner, “we’re **Creative**” + “Get Started”
3. **Features** — 4 white cards: Unlimited Colors · Smart Security · Endless Support · Smart Security (the source repeats the title)
4. **About** — `#f9f9ff` band, “About Our Company” + image, pill tabs **History** / **Mission & Vision**
5. **VideoCallout** — photo band under the purple radial overlay, “New Features that open the door of future” + play affordance
6. **BlogCards** — 3 cards: Ultimate pet lover · Upcoming role model · Colors of Life
7. **Story** — `#7034db` half-band on the left, photo on the right, “Crafting Our Experiences”
8. **Newsletter** — `#f9f9ff`, “Subscribe Newsletter” + inline pill input/button
9. **Footer** — `#333333`, menu (Home · Generic · Elements), social row, copyright

## Section-by-section fidelity notes

**Navbar.** Transparent over the banner, links white 15px; the logo sits left and
the menu right. Nothing sticky in the source — keep it non-sticky so the banner
stays edge-to-edge.

**Hero.** `.banner-area` is 600px tall with a decorative `banner.png` anchored
right on a **purple radial** (`#7539dd → #7034db`) that fades to transparent
toward the centre. Headline “we’re **Creative**” (weight 700 on the second word),
one `.primary-btn` whose pill is a white hairline that fills with the
pink→yellow gradient on hover. This gradient button is the design's signature —
a flat purple button loses the identity.

**Features.** `.featured-area` white, `padding:60px 0 100px`, `4 × col-lg-3`
cards: icon above, `h4` 20px title, two lines of body copy. Cards have no border
or shadow — whitespace separates them. The source's fourth card repeats “Smart
Security”; the recreation renames it (e.g. “Fast Delivery”) rather than shipping a
duplicated label.

**About.** `.about-area` on `#f9f9ff`, `padding:100px 0`, image left
(`.about-thumb`, `border-radius:3px`), text right with an “About · Our Company”
two-tone `h2`; below it two **pill tabs** (25px radius) — History / Mission &
Vision — swapping one paragraph each. Active tab = gradient bed, white label.

**VideoCallout.** `.video-area` is a full-bleed photo (`video-area-bg.jpg`) with
`.overlay-bg` painting the same purple radial over it, `padding:100px 0`, centred
white copy and a circular play affordance. In React: a static band with a
decorative play button, no modal video required.

**BlogCards.** `.blog-area` white, `70px 0 100px`, three `.single-blog` cards —
215px thumb, `20px` title, two lines of copy, no date/author meta. Titles carry
the source's phrasing; paraphrase.

**Story.** `.story-area` `padding:100px 0`, `background-color:#7034db`, with a
`50%`-wide background image pinned to the **right half** (`:after`), so the band
reads as purple copy on the left and a photo on the right. `h2` 36px white. On
small screens the right-half image is hidden (`display:none`) and the band is flat
purple.

**Newsletter.** `.subscription-area` `#f9f9ff`, `100px 0`, centred “Subscribe
Newsletter” + one-line pitch, then a `.subscription` field with the pill button
absolutely positioned inside the input (`top:50%`, `translateY(-50%)`,
`right:5px`). The source posts to a Mailchimp embed (`#mc_embed_signup`) — the
recreation keeps the layout and drops the vendor.

**Footer.** `.footer-area` `#333333`, `padding:100px 0`, with a
`margin-bottom:6rem` offset in the source (the page leaves a light strip below the
footer). Centred stack: menu line (Home · Generic · Elements), social row, then
“Copyright © 2018 All rights reserved · This template is made with ♥ by Colorlib”.
Per AGENTS.md rule 5 the recreation replaces that credit with a link to
https://www.componentdock.com/ and never names ColorLib in `apps/crux/`.

## Source → React adaptation

| Source | Source element | React equivalent |
| --- | --- | --- |
| nav over banner | transparent links | `Navbar` — absolute bar, white links |
| `.banner-area` | purple radial + banner art | `Hero` — `radial-gradient(circle at 50% 50%, #7539dd 0%, #7034db 100%)` |
| `.featured-area` | 4 icon cards | `Features` — 4-up grid |
| `.about-area` | image + pill tabs | `About` — 2-col split, `useState` tab switch |
| `.video-area` | photo + radial overlay | `VideoCallout` — band + decorative play button |
| `.blog-area` | 3 blog cards | `BlogCards` — 3-up grid |
| `.story-area` | purple half + right-half photo | `Story` — 2-col, `bg-ink`/purple left, photo right |
| `.subscription-area` | inline pill newsletter | `Newsletter` — input + absolutely-placed pill button |
| `.footer-area` | `#333` stack | `Footer` — menu, social, Component Dock credit |

## Placeholder images

`https://picsum.photos/seed/crux-about/400/500`,
`https://picsum.photos/seed/crux-blog<1..3>/600/400`,
`https://picsum.photos/seed/crux-story/800/900`,
`https://picsum.photos/seed/crux-video/1600/900`,
`https://picsum.photos/seed/crux-banner/1200/600`. Poppins comes from Google
Fonts via `<link>`; no ColorLib asset is copied.

## App deltas (as shipped in `apps/crux/`)

- `--color-brand: #7034db` (sheet), with the pink→yellow gradient
  (`#f58e9a → #fbe44c`) reproduced inline on the hero CTA, the active tab and the
  newsletter button — the three places the sheet paints it.
- The banner's decorative `banner.png` is omitted; the radial purple alone carries
  the band. The `#f58e9a` pink therefore survives only as a gradient stop and as
  the shared `b`/`i` emphasis colour, which is what the rendered page shows.
- The fourth feature card is renamed instead of repeating “Smart Security”.
- **Story band:** the app ships `bg-ink` (`#222222`) full-width with the copy
  centred, not the sheet's `#7034db` left half + right-half photo. This is an
  app-side simplification — the purple is carried by the hero radial and the
  video overlay only, so a future fidelity pass should repaint this band
  `#7034db` and add the right-half image.
- The Mailchimp form is a local, non-submitting newsletter form; the footer's
  copyright credit is replaced with the Component Dock line.
