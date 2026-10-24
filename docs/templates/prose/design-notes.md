# Prose — Design Notes

Recreation of ColorLib **"Author"** (`https://colorlib.com/wp/template/author/`, live demo
`https://preview.colorlib.com/theme/author/`) as **Prose** — a one-page book-launch site.
**Source slug:** `author`

Shipped: https://prose.free.componentdock.com
Spec: `openspec/specs/template-prose/spec.md` (rewritten 2026-10-24; it previously recorded
ColorLib "Blogger" and its bands — see `docs/spec-row-mismatch.md`).

Row note: `TEMPLATES.md` line **2291** (`## One Page (91)`) links `author` and `prose`; the spec now
records the same slug, so row and spec agree. Two other apps recreate this same design
(`pageturn` on row 2014, `penman` on row 2380) — row multiplicity across apps, not a provenance
dispute.

## Reference measurements (2026-10-24, `curl -4`)

| artefact | bytes | sha256 |
| --- | ---: | --- |
| `theme/author/` page | 56,567 | `58309318f494b9da90ee480596855da45c33d19d7383dc355d48d2ad04d0e7b5` (page bodies are request-unstable; `index.html` is byte-identical to the directory URL) |
| `theme/author/css/style.css` | 62,455 | `a39d750657789f6f091b4aab8bd952e46cefaf4fd55d62a25c16d96ec8ae7794` |
| `theme/author/js/main.js` | 7,796 | `8b50a64575df5b6218cf50f89e4a517d8032783c273725709739d693ea95eebc` |

- Page title as served: `Author - Free Bootstrap 4 Template by Colorlib`; template `rebuilt: False`
  (`measure-reference-tokens.py`), so mismatches are drift, not a redesign.
- **47 anchors**: 28 dead `#`, 7 in-page nav links, 8 chapter deep links (`#page-1`…`#page-8`),
  1 `index.html` wordmark, 1 `tel:`, 1 `mailto:`, 1 external `colorlib.com`.
- **0 labels, 4 inputs (3 text + 1 submit), 1 textarea** — every field is `placeholder`-only.
- **0 `@font-face` in the sheet**; the host injects `/cf-fonts/` for Raleway 400–900 and Open Sans
  400/600/700. No Google Fonts link on the page.
- No inner pages: `about.html` is **404**; the words are in-page only.
- No archive: `downloads/free/author.zip` is **404** (business themes ship none).
- Screenshot: `https://colorlib.com/wp/wp-content/uploads/sites/2/author-free-template.jpg` —
  68,682 B, AVIF 1200 × 946, same light composition the DOM renders.

## Visual design (screenshot + live DOM)

White page wherever it can be. A transparent navbar floats over a 750px hero: the right 60% is a
free **SVG illustration** (a woman reading, seated on a stack of three books, purple leaves), the
left 40% is the text column — a 14px/700 green uppercase eyebrow, a 60px/900 navy headline, an 18px
grey blurb and a 40px-radius green pill. Then five publisher logos on one row, and "About The Book":
a book photograph on the left, heading + blurb + three h4 features on the right. Four `#f5f4fb`
counter cards over `1100 / 1200 / 340 / 12000`, a chapter reader with a sticky green-active index,
three light service cards that flood green on hover, a testimonial carousel on a photograph washed
`#17b978` at 80%, an eight-cover books grid whose covers darken on hover, the author's portrait with
a green 120-book pill, a contact band (four light cards; form right, map left) and a black footer.

## Design tokens (reference sheet → app `@theme`)

| role | reference value | source | `apps/prose` token |
| --- | --- | --- | --- |
| Brand green | `#17b978` (29 literals) | `.a`, `.subheading`, `.btn.btn-primary`, `#navi .current`, `.owl-dots .active`, `.services-1:hover`, `.testimony-wrap .icon`, testimonial wash `.8` | `--color-accent-400: #17b978` |
| Green hover | label flips to `#000000`, fill stays `#17b978` | `.btn.btn-primary:hover` | `--color-accent-500: #13a065` (a darker green instead — delta) |
| Heading ink | `#263b5e` | `.h1`–`.h5`, `.navbar-brand`, `#navi li a`, counter numerals | `--color-navy: #263b5e` |
| Body ink | `#6a7695` | `body`, 16px/1.8 | not tokenised (app uses `text-gray-500/600`) |
| Light surface | `#f5f4fb` | `.bg-light`: counter cards, chapter panels, contact cards, form card, services | not tokenised (app uses `bg-gray-50`) |
| Page ground | `#ffffff` | `body` | `bg-white` |
| Dark ground | `#000000` | `.ftco-footer`, `.project .overlay`, mobile navbar | `--color-navy-dark: #1a2a42` used for the footer (delta) |
| Display face | `"Raleway", sans-serif` | `.h1`–`.h5`, `.navbar-brand` | `--font-display` + Google Fonts 400–900 |
| Body face | `"Open Sans", sans-serif` | `body` | `--font-body` + Google Fonts 400/600/700 |
| Button shape | 40px radius, 12px/600 uppercase, 2px tracking, `0 24px 36px -11px rgba(0,0,0,.09)` | `.btn` | `rounded` (4px), no tracking (delta) |
| Section rhythm | `7em 0` | `.ftco-section` | `py-20` (80px) |
| Section heading | `h2` 50px/700 (38px ≤767.98), eyebrow 16px/700 green | `.heading-section` | `text-3xl/4xl font-bold` |
| Hero | 750px (600px ≤991.98), illustration 60% right, text `max-width:40%` `padding-left:45px`, h1 60px/900 (40px ≤767.98) | `.hero-wrap .slider-text` | `min-h-screen`, 2-col grid, navy ground (delta) |
| Chapter index | sticky `top:180px`, 700 weight, 15px gap, `.current` green + 20px indent + 20px rule | `#navi` | vertical button list, green active |
| Chapter panel | `padding:30px`, 5px radius, `margin-bottom:7em`, heading 30px/700 | `.page` | card with heading + paragraph |
| Testimonial band | top 400px = photo under `#17b978` at `.8`; white heading; cards radius 4px, 40px green quote chip, 80px avatars | `.testimony-section`, `.testimony-wrap` | navy band, photo at 20%, `white/10` cards (delta) |
| Book card | 330px tall, overlay `#000000` at `.5` on hover, title 24px/700, category 12px/600 uppercase 2px | `.project` | **not shipped** |
| Author pill | `#17b978`, `padding:10px 15px`, 40px radius, number + "View All Books" | `.ftco-about .counter-wrap .btn-custom` | **not shipped** |
| Contact field | 52px, `#fff`, 5px radius, 18px text, focus border `#000000` | `.form-control` | `rounded-lg border-gray-200` (delta) |
| Footer | `#000000`, `7em 0`, 4 columns, `.block-23` 40px icon cells | `.ftco-footer` | `bg-navy-dark` (delta) |

## Document order

Reference order, and the component that ships it:

| # | band | reference hook | `apps/prose` file | status |
| --- | --- | --- | --- | --- |
| 0 | navbar | `.ftco-navbar-light` + `.scrolled` | `components/Navbar.tsx` | [x] |
| 1 | hero | `.hero-wrap .slider-text` | `components/Hero.tsx` | [x] |
| 2 | publisher strip | `.ftco-partner` (5 logos) | `components/Partners.tsx` | [x] |
| 3 | about the book | `.ftco-about` + `h4` features | `components/AboutBook.tsx` | [x] |
| 4 | counters | `.ftco-counter .block-18` | `components/Stats.tsx` | [x] |
| 5 | chapter reader | `#navi` + `.page` × 8 | `components/Chapters.tsx` (7) | [x] |
| 6 | services | `.services-1` × 3 | `components/Services.tsx` | [x] |
| 7 | testimonials | `.testimony-section` (5 slides) | `components/Testimonials.tsx` (3 cards) | [x] |
| 8 | **my other books** | `.ftco-project` × 8 | — | [ ] missing |
| 9 | author bio | `.ftco-about` + 120 pill | `components/AuthorBio.tsx` | [x] |
| 10 | contact | 4 cards + form + map | `components/Contact.tsx` | [x] |
| 11 | footer | `.ftco-footer` (#000) | `components/Footer.tsx` | [x] |

## Section-by-section fidelity notes

- **Navbar.** Reference: absolutely positioned and transparent over the white hero, dark 16px links,
  the wordmark "Author**.**" in black with a green full stop; on scroll `.scrolled` gives a fixed
  white bar with `0 0 10px rgba(0,0,0,.1)` and black links. App ships a navy bar with white links and
  a green dot. Fidelity fix: light bar over the hero, white on scroll — or drop the fixed styling
  and keep it simple, but the navy ground is the visible departure.
- **Hero.** Two things define it: the ground is **white**, and the art is a line illustration
  (`.svg`) occupying 60% of the row, not a photo. The text column is capped at 40% with a 45px left
  pad, so the headline wraps to three lines. h1 60px/900, line-height 1.3; eyebrow green 14px/700
  with 2px tracking; body copy 18px/1.5. CTA is a `#17b978` 40px-radius pill, 12px/600 uppercase.
- **Publisher strip.** Five `<a>`-wrapped logo images in a 5-col row, `4em 0` padding, 40px tall.
  Placeholders must not reproduce brand marks — the app's five text names are the documented
  substitution.
- **About the book.** The image column is a CSS background (`bg_1.jpg`) that stretches the section's
  height; the right column holds the h2, one paragraph, then three `h4` (20px/700) features, each
  followed by its own paragraph. No icons, no cards — the h4s sit in the flow.
- **Counters.** `.block-18` cards (`#f5f4fb`, `padding:30px 20px`), number 34px/700 navy, label
  16px. `js/main.js` drives `jQuery.animateNumber` from `data-number`, once per page. In React:
  `IntersectionObserver` at `threshold: 0.3` + a guard ref so a re-entry does not replay (the app
  already does this).
- **Chapter reader.** Left `col-md-3` is `#navi`: `position: sticky; top: 180px`, list items 700
  weight, 15px apart, `.current` = green, `margin-left: 20px`, plus a 20px × 2px green rule at
  `left: -24px`. Right `col-md-9` holds eight `.page.bg-light` panels, each `padding:30px`,
  `border-radius:5px`, `margin-bottom:7em`, heading 30px/700. Panel ids are `page-1`…`page-8` and the
  index links to them, so the reference works with JavaScript off; the app swaps panels by state
  (7 panels, no Epigraph).
- **Services.** Three `col-md-4` cards with `rgba(255,255,255,.1)` ground on white, a 60px green icon
  glyph, an h3 20px/700 with a 30px green underline rule 15px below, and a paragraph. Hover floods
  the whole card `#17b978` and turns text white — a hover state the app currently lacks.
- **Testimonials.** The band's top 400px is `bg_4.jpg` with a `#17b978` overlay at `.8`; heading sits
  on that wash in white. Cards are white, radius 4px, `padding: 0 20px` + `py-4`, a 40px round green
  quote chip at `top:-20px; left:20px`, an 80px round avatar, name 20px/500 `#000`. Five slides,
  owl carousel, dots 10px (`rgba(0,0,0,.1)`, active green), arrows appear on band hover at
  `left/right: 50%`.
- **My other books.** Eight 330px `.project` cards in a 4-col grid, cover as a CSS background, overlay
  `#000000` going `0 → .5` on hover with the title + "Romance" category fading in. **The app does not
  ship this band** (nor its nav entry). Both siblings do: `apps/pageturn/src/components/MyBooks.tsx`
  and `apps/penman/src/components/MyBooks.tsx` — the delta is closable in-house.
- **Author bio.** Left half is `about.jpg` as a background with a `.btn-custom` pill at the bottom:
  `120` + "View All Books", `#17b978`, 40px radius. Right half: eyebrow "Know More About The Author",
  h2 "Franklin Henderson", one paragraph, then `ul.about-info` with six label/value rows
  (Name, Date of birth, Address, Zip code, Email, Phone) where the label is 130px wide, 600 weight,
  black. The app ships three icon rows instead.
- **Contact.** Heading block (`col-md-7`, centred) then four `col-lg-3` light cards: round icon,
  h3 16px/700, one line of text — the phone is `tel:` and the email is `mailto:` (the only live
  destinations besides the nav). Below: `row.no-gutters.block-9`, form in the **right** `col-md-6`
  (`bg-light p-4 p-md-5`), `#map` in the left. Fields 52px tall, `#fff`, 5px radius, 18px text;
  submit is a green pill. React replaces the map with nothing (recorded delta) and must keep
  `preventDefault` + a confirmation state.
- **Footer.** `#000000`, `7em 0`, four equal columns: About (blurb + 3 social chips), Links (Home,
  About, Chapter, Reviews, Contact), Services (Experience, Marketing Goals, Targetting Vission — as
  links), "Have a Questions?" (`.block-23` rows with 40px icon cells). Then a centred copyright line
  naming the source — replaced by the Component Dock credit.

## Source → React adaptation

| source pattern | React equivalent |
| --- | --- |
| Bootstrap 4 grid (`container`, `row`, `col-md-*`) | Tailwind flex/grid with `max-w-7xl` + `px-4 sm:px-6 lg:px-8` |
| `.ftco-animate` fade-in on scroll | dropped (opacity-0 markup would hide content without the JS) |
| jQuery `animateNumber` counters | `IntersectionObserver` + `setInterval`, one-shot guard ref |
| owl carousel (testimonials) | static grid this pass; a carousel is a follow-up |
| `#navi` sticky index + anchor links | state-driven panel swap + `aria-current` |
| `data-spy="scroll"` navbar | `scroll` listener toggling a scrolled style |
| Font Awesome / flaticon glyphs | `lucide-react` icons |
| Photos and logos | `picsum.photos/seed/prose-*` placeholders; text marks for publishers |

## Deltas from the reference

- Photographs and the hero illustration are deterministic placeholders; no source asset is copied.
- Icon glyphs come from `lucide-react`, not the source's icon font.
- Copy is rewritten to the same kind of content, except the reference's own literary sample text
  ("Clue Of The Wooden Cottage", "Best Seller Book Of The Week", "What's Inside The Book"), which is
  kept because it is the design's identity.
- The source's credit line is replaced by the Component Dock credit.
- Dark mode exists in the app's CSS (`@custom-variant dark`, a few `dark:` utilities) with no toggle
  control; the reference has no dark mode at all.

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** The footer's "made with … by Colorlib" line is replaced by
  the Component Dock credit.
- **Provenance ban.** No file under `apps/prose/` may name the source designer, carry a `colorlib.com`
  URL, or reuse the source template's name — code, comments, CSS, markup, metadata and filenames
  included (AGENTS.md rule 5).
- **Deploy identity.** `apps/prose/public/CNAME` = `prose.free.componentdock.com` and the package
  `homepage` = `https://prose.free.componentdock.com`.
