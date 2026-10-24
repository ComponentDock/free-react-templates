# SpinWheel — Design Notes

- **Source slug:** `carousel-17`
- **ColorLib name:** Carousel 17 (Bootstrap carousel set; demo heading "Carousel #7")
- **Listing:** https://colorlib.com/wp/template/carousel-17/
- **Preview:** https://preview.colorlib.com/theme/bootstrap/carousel-17/ — HTTP 200,
  1,782 B, sha256 `7c85a14b3f74545b…` (measured 2026-10-24); page title
  `Carousel #7`. Note the extra `/bootstrap/` path segment: this family has no
  `/theme/carousel-17/` demo, only the Bootstrap sub-folder.
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/carousel-17.jpg
  (1,200 × 972)
- **New name:** spinwheel · **Category:** Bootstrap carousels / component demo
- **Spec:** `openspec/specs/template-spinwheel/spec.md`
- **App:** `apps/spinwheel/` (TestimonialCarousel · TestimonialCard · Footer)

Rewrite status: this brief replaced a **Carousel 04** description on 2026-10-24 —
the wrong sibling of the same family. Docs-source drift caught it
(`scripts/verify-docs-source.py`, `DOCS-STALE` `brief=carousel-04`); the spec, the
`TEMPLATES.md` row (`line 726`) and the shipped app all recreate `carousel-17`.
Values below re-measured from the live reference that day.

## Reference identity (measured 2026-10-24)

| Artefact | Bytes | sha256 (head) |
| --- | --- | --- |
| `/theme/bootstrap/carousel-17/` (index) | 1,782 | `7c85a14b3f74545b…` |
| `theme/bootstrap/carousel-17/css/style.css?v=4dfeeb9a` | 13,883 | `77c73cac3f9b0af7…` |

This is a **component demo**, not a full theme: the whole page is
`div.content > div.cl-container` holding one `h2` (`Carousel #7`) and one
`div.owl-carousel.owl-1` with **3** slides (`images/hero_1.jpg`,
`hero_2.jpg`, `hero_3.jpg`). There are **0 anchors**, no `<form>`, no navbar, no
footer, and **3** `<img>` tags. Navigation chrome is injected by
`js/snippet.js?v=2ecf2eaf` from two `<template class="cl-owl-nav">` blocks —
inline SVG arrow glyphs (left / right). It is the smallest reference in the
repository: one carousel on a blank page.

## Design tokens (from `css/style.css`, canonical over the screenshot)

| Role | Value | Evidence in the sheet |
| --- | --- | --- |
| Ground | `#fff` (2) | `body`, nav-arrow span beds |
| Ink | `#000` · `#212529` | text / default heading colour |
| Link accent | `#0056b3` | `a:hover` — the sheet's only brand-ish literal |
| Bootstrap primary | `#007bff` | `.owl-dots` active dot (Bootstrap 5 defaults) |
| Muted | `#b3b3b3` | inactive dots |
| Typeface | **Roboto** (`"Roboto", -apple-system, …`) | 4 declarations + body stack |
| Dot radius | `50%` | `.owl-1 .owl-dots .owl-dot > span` |
| Other radii | none declared (`border-radius: 0`) | the sheet rounds nothing but dots |
| Page rhythm | `h2` with `margin-top: 0; margin-bottom: .5rem`; `cl-my-5` (≈ 3rem) vertical spacing on the heading | `h2`, `.cl-my-5` |

Palette census: `#fff` ×2, `#000`, `#0056b3`, `#007bff`, `#212529`, `#b3b3b3` —
one each. **There is no brand fill to reproduce**; the design's colour comes
entirely from the photographs.

## Visual design (from the TEMPLATES.md screenshot)

An essentially empty white page with a single wide photograph carousel sitting
in the middle third: one landscape photo visible at a time (`#8d6f5b` warm
browns in the sampled screenshot), a centred black `Carousel #7` heading above
it, and nothing else — no header, no copy, no footer. Screenshot samples:
`#ffffff` (4,871 px), `#8d6f5b` (3,414 px photo), `#f9f9f9`, `#d0c3bc`.
Rounded corners: none. The impression is a neutral demo canvas, which is exactly
what the file is.

## Section order (as the reference renders)

1. **Page** — white, vertical rhythm from the container padding.
2. **Heading** — `h2.cl-my-5.cl-text-center` "Carousel #7".
3. **Carousel** — `.owl-carousel.owl-1`, three image slides, arrow controls and
   dots (dots centred under the slides).
4. **Footer** — the reference has none; the app appends the Component Dock
   footer.

## Section-by-section fidelity notes

**Page.** Do not invent a navbar or hero: the source has neither. The page is the
carousel.

**Heading.** Centred, bold, `#212529`-ish black, roughly 2rem, with generous
margin above and below (`.cl-my-5`). It is a demo label, not a brand wordmark —
in the recreation it becomes the component's own title.

**Carousel.** One slide visible, images butted edge to edge with **no radius, no
shadow, no overlay**. Arrows sit at the vertical centre over the slide edges as
small white circles carrying dark chevrons; dots are small `#b3b3b3` circles
that turn `#007bff` when active. Slide changes are a horizontal translate
(Owl's default), not a fade.

**Footer.** The source ends the page after the carousel. The recreation's footer
is added by repo rule and is the only band the sheet does not describe.

## Source → React adaptation

| Source | Source element | React equivalent |
| --- | --- | --- |
| `.cl-container` | centred container, horizontal page padding | `section` with `mx-auto max-w-*` |
| `h2.cl-my-5.cl-text-center` | demo heading | carousel section title |
| `.owl-carousel.owl-1` | 3-image Owl carousel | `TestimonialCarousel` (state-driven slide window) |
| `template.cl-owl-nav` SVGs | prev / next arrows | `lucide-react` `ChevronLeft` / `ChevronRight` buttons |
| Owl dots | `#b3b3b3` → `#007bff` bullets | button dots styled from the same two literals |
| — | no footer | `Footer` with Component Dock credit |

## Placeholder images / fonts

`https://picsum.photos/seed/spinwheel-<n>/1200/800` for slides (the testimonials'
avatars use `…/seed/<name>/80/80` in the shipped app). **Roboto** from Google
Fonts via `<link>`, matching the sheet's stack.

## App deltas (as shipped in `apps/spinwheel/`)

- The source is a 3-slide **image** carousel; the shipped app renders a
  **testimonial** carousel (six quotes, avatar + name + text) as its spec
  requires. Layout chrome is faithful: one row of cards at a time (3 at `md+`,
  1 below), round arrow buttons at the edges, dot indicators underneath.
- Surfaces use `--color-dark: #212529`, `--color-muted: #999999`,
  `--color-bg-left: #f8f9fa`; the sheet's `#0056b3`/`#007bff` pair is not used
  as a fill anywhere in the app.
- Slides are picsum placeholders; avatars are picsum portraits.
- The page has no navbar, no hero and no content bands — matching the source.

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer SHALL link
  [Component Dock](https://www.componentdock.com/). That is the only attribution
  line the recreation carries.
- **Provenance ban.** No file under `apps/spinwheel/` may name the source
  designer, carry a `colorlib.com` URL, or reuse the source template's name —
  code, comments, CSS, markup, metadata and filenames included (AGENTS.md
  rule 5).
- **Deploy identity.** `apps/spinwheel/public/CNAME` =
  `spinwheel.free.componentdock.com` and the package `homepage` =
  `https://spinwheel.free.componentdock.com`.
