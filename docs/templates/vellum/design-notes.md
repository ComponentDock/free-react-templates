# Vellum — Design Notes

Recreation of ColorLib **"Readit"** (`https://colorlib.com/wp/template/readit/`, live demo
`https://preview.colorlib.com/theme/readit/`) as **Vellum** — a four-page blog theme shipped as one
landing page.
**Source slug:** `readit`

Shipped: https://vellum.free.componentdock.com
Spec: `openspec/specs/template-vellum/spec.md` (rewritten 2026-10-24; it previously recorded a
ColorLib accordion demo and that demo's bands — see `docs/spec-row-mismatch.md`).

Row note: `TEMPLATES.md` line **282** (`## Blog (60)`) links `readit` and `vellum`; the spec now records
the same slug, so row and spec agree. `readit` appears on exactly one row — no competing claim.

## Reference measurements (2026-10-24, `curl -4`)

| artefact | bytes | sha256 |
| --- | ---: | --- |
| `theme/readit/` page | 25,803 | `cefd37f89821e45425065dc5d0a0888678d15f1b0b4c07298e1ac5dab25abe7a` (page bodies are request-unstable; `index.html` is byte-identical to the directory URL) |
| `theme/readit/css/style.css` | 65,873 | `925bebf2b747422c3152b6ca0b9231ddca7f39c3b587ce18ac03757128ba4991` |
| `theme/readit/js/main.js` | 6,101 | `62bfa4888d835f3e19a1fd57525b90a37da75200f5dc0f191a52f761a16f4c39` |

- Page title as served: `Readit - Free Bootstrap 4 Template by Colorlib`; `rebuilt: False`
  (`measure-reference-tokens.py --slug readit`), so mismatches are drift, not a redesign.
- **94 anchors**: 70 dead `#`, 18 `blog-single.html` (9 card images + 9 card headlines), 2
  `index.html` (wordmark + Home), 1 each `blog.html`, `about.html`, `contact.html`, 1 external
  `colorlib.com` credit.
- **Inner pages are LIVE**: `blog.html` 25,854 B, `about.html` 21,668 B, `contact.html` 16,759 B
  (1 form, 4 inputs), `blog-single.html` 30,009 B (2 forms, 5 inputs, comment list, sidebar). The
  single-page recreation keeps only the landing bands; the other three pages are the reference for
  anything the implementer wants to add later.
- **Markup on the landing page**: 1 `h1`, 14 `h2`, 2 `h3`, 9 `.case` rows, 6 pagination entries,
  3 footer socials, 4 footer columns — and **0 `<img>`, 0 forms, 0 inputs**: every photograph is a
  CSS `background-image` on an empty `<a>`.
- **0 `@font-face` in the sheet**; the host injects `/cf-fonts/` for **Poppins 300–900**
  (latin / latin-ext / devanagari, `display:swap`). No Google Fonts `<link>` on the page. Google
  Fonts serves the same face (`css2?family=Poppins:wght@300;400;500;600;700;800;900` → 200).
- **No archive**: `downloads/free/readit.zip` is **404** (business themes ship none).
- Screenshot: `https://colorlib.com/wp/wp-content/uploads/sites/2/readit-free-template.jpg` —
  63,283 B, AVIF 1200 × 946, hero + first row only.

## Visual design (screenshot + live DOM)

The loudest surface is the hero: a photograph of a woman in a straw hat, shot from above, with a
`45deg` magenta→amber gradient (`#f200ff → #ffba42`) laid on it at 80% so the whole band reads
hot pink on the left and apricot on the right. A white 26px/900 wordmark (`Readit.`, the middle two
letters gold) sits 20px from the top with four 18px white links at the far right — no bar, no
shadow, nothing behind them until the visitor scrolls, when the nav slides in as a fixed white strip.
The headline is `10vw` — it fills the band — set above a two-column split: a 7/12 paragraph on the
left and a circular scroll cue beneath it.

Below the fold the page goes plain white and quiet, which is the point: nine magazine rows, each an
800×400 photograph on the left two-thirds and a narrow text column on the right. The category is the
quietest thing on the row (14px uppercase at 20% black), the headline the loudest (40px/700), the
three share chips invisible until the row is hovered, and the meta line at 12px/20% black. Rows are
separated by 50px of nothing. The pagination is six 40px circles, the active one solid gold.

The footer is the only dark surface: `#222831`, four columns on a 1210px container, headings a plain
400 weight white, body copy at 70% white, the two latest-news thumbnails 80px square, and the small
news meta in gold.

## Design tokens (reference sheet → app `@theme`)

| role | reference value | source | `apps/vellum` token |
| --- | --- | --- | --- |
| Brand gold | `#ffd369` (33 literals) | `a`, `.navbar-brand i`, nav hover, `.btn-primary`, share-chip hover, `.block-27 li.active`, footer logo span + link hover, footer news meta | `--color-brand: #ffd369` |
| Gradient start | `#f200ff` | `.hero-wrap .overlay` (gradient only) | `--color-flare: #f200ff` |
| Gradient end | `#ffba42` | `.hero-wrap .overlay` | `--color-ember: #ffba42` |
| Hero wash | `linear-gradient(45deg, …)` at `opacity: .8` | `.hero-wrap .overlay` | inline style on the `Hero` overlay div |
| Footer ground | `#222831` | `.ftco-footer` (line 2111 — wins over `.ftco-bg-dark` `#3c312e` at line 2101) | `--color-cocoa: #3c312e` (**delta** — the losing rule) |
| Nav ground | transparent → `#fff` scrolled → `#000000` ≤991.98px | `.ftco-navbar-light`, `.scrolled` | `--color-coal: #343a40` (**delta** — opaque from the start) |
| Wordmark | 26px / 900 Poppins, white, `i` span gold | `.navbar-brand`, `.navbar-brand i` | `text-xl font-bold` (**delta**) |
| Heading ink | `rgba(0,0,0,.8)` | `h1,h2,h3` | not tokenised (`text-ink` is `#000`) |
| Body ink | `gray` = `#808080`, 16px/1.8 | `body` | not tokenised |
| Card category | 14px/500 uppercase `rgba(0,0,0,.2)` | `.case .text .subheading` | `text-black/30` (close) |
| Card headline | 40px/700 `#000`, hover `rgba(0,0,0,.5)` | `.case .text h2 a` | `text-[40px] font-bold` + `hover:text-brand` (**delta** — hover paints gold, not grey) |
| Card meta | 12px `rgba(0,0,0,.2)` | `.case .text .meta p` | `text-sm text-black/40` |
| Share chips | 50×50 `rgba(0,0,0,.05)` radius 4px, gold on hover | `.case .text .media-social li a` | bare glyphs (**delta**) |
| Pagination | 40×40 circle, `1px #e6e6e6`, active gold | `.block-27` | 40×40 square, `border-black/10` (**delta**) |
| Footer socials | 50px circles `rgba(255,255,255,.05)` | `.ftco-footer-social li a` | bare glyphs (**delta**) |
| Footer headings | 20px/400 white, 40px under-gap | `.ftco-footer .ftco-footer-widget h2` (0,2,1) | `text-xl` (**delta** — weight 700) |
| Section rhythm | `7em 0` (`6em` ≤767.98) | `.ftco-section` | `py-16` |
| Container | `1210px` | `.container` | `max-w-7xl` (1280px) |
| Typeface | Poppins 300–900 | sheet declares `"Poppins", Arial, sans-serif`; host injects the files | `--font-sans: 'Poppins', …` + Google Fonts link |

Two sheet traps a token grep walks into: `.ftco-footer .ftco-heading-2 { color: #000000 }` never
paints (the more specific `.ftco-footer .ftco-footer-widget h2` sets white), and the footer element's
`ftco-bg-dark` class (`.ftco-bg-dark { background: #3c312e }`) is overridden by `.ftco-footer
{ background: #222831 }` declared later at equal specificity.

## DOM skeleton (reference)

```
nav#ftco-navbar.ftco-navbar-light            (transparent, absolute, top:20px)
  .container > a.navbar-brand[href=index.html]   "Read<i>it</i>."
  #ftco-nav.collapse.navbar-collapse > ul.navbar-nav
      li > a.nav-link[href=index.html]           Home
      li > a.nav-link[href=blog.html]            Articles
      li > a.nav-link[href=about.html]           Team
      li > a.nav-link[href=contact.html]         Contact
div.hero-wrap.js-fullheight[background-image: images/bg_1.jpg]
  div.overlay                                 (45deg gradient, .8)
  .container > .row.slider-text.js-fullheight
      h2.subheading                           Hello! Welcome to
      h1.mb-4                                 Readit blog
      .row > .col-md-7 > .text
          p                                   (one long blurb)
          .mouse > a.mouse-icon[href=#] > .mouse-wheel
section.ftco-section > .container > .row > .col-md-12
  9 × .case
      .row
        .col-md-6.col-lg-6.col-xl-8  > a.img[w-100][background-image: images/image_N.jpg]
        .col-md-6.col-lg-6.col-xl-4  > .text.w-100.pl-md-3
            span.subheading                   Illustration | Application | Design
            h2 > a[href=blog-single.html]     headline
            ul.media-social > li × 3 > a[href=#]   twitter / facebook / instagram
            .meta > p > a(11/13/2019) | a(12 min read)
  .row.mt-5 > .col.text-center > .block-27
      ul > li(a ‹) , li.active(span 1) , li(a 2..5) , li(a ›)
footer.ftco-footer.ftco-bg-dark.ftco-section
  .container > .row.mb-5
      .col-md  h2.logo > a  "Read<span>it</span>."  | p blurb | ul.ftco-footer-social(3)
      .col-md  h2 "latest News" | 2 × .block-21 (80px img + h3.heading + .meta 3 links)
      .col-md  h2 "Information" | ul > li × 4 (arrow glyph + link)
      .col-md  h2 "Have a Questions?" | .block-23 > address / phone / e-mail
  .row > .col-md-12.text-center > p  copyright + credit
#ftco-loader.show.fullscreen            (removed by js/main.js)
```

## Section-by-section fidelity notes

1. **Navbar.** Transparent and `position: absolute; top: 20px`, so it sits *inside* the hero image
   rather than above it. `.scrolled` flips it to `position: fixed`, white, `0 0 10px
   rgba(0,0,0,.1)`; `.awake` (added past 350px) animates `margin-top: -130px → 0`. Nav links are
   18px with 20px side padding; the active item is pure white, the rest 80% white, hover gold. The
   mobile bar is `#000000` (not the desktop gradient). The wordmark's only coloured part is the `i`
   span.
2. **Hero.** Height comes from JS (`$('.js-fullheight').height(window.height)`), so a CSS
   `min-height: 100vh` is the faithful equivalent. The image is `background-size: cover;
   background-position: top center`, with `center center` below 1200px; Stellar moves it at ratio
   `0.5` — optional parallax, dropped in the app. The overlay is a plain div with opacity `.8`, not
   a blended `background-blend-mode`, which is why the photograph still reads through the pink.
   The scroll cue is an 80px transparent box with a 30px circle and an infinite `wheel-up-down`
   keyframe; it links to `#` in the source, and the recreation points it at the blog section.
3. **Magazine rows.** `.case { margin-bottom: 50px }`; image column `xl-8`, text `xl-4` (6/6 at
   `md`). Category 14px/500 uppercase at 20% black; headline 40px/700 with a 30px under-gap; share
   chips hidden above 1199.98px until row hover (`opacity 0 → 1`, `.3s`); meta 12px at 20% black,
   its two links darkening to solid black on hover. The live demo repeats **one** placeholder
   headline for all nine rows and dates them all `11/13/2019 | 12 min read` — the recreation's
   varied headlines/dates/read-times are a paraphrase, not a fidelity break.
4. **Pagination.** `.block-27` circles: 40×40, `border-radius: 50%`, `1px solid #e6e6e6`, `gray`
   text; the active entry keeps its 40px box but drops the border and fills gold with white text.
   Entries are `‹`, pages 1–5, `›`; page 1 carries `.active`. No JavaScript — every entry is a dead
   `#`.
5. **Footer.** Four `col-md` columns on the 1210px container, `5em 0 3em 0` padding, ground
   `#222831`. Headings are 20px/400 white (see the cascade note above); body copy and links 70%
   white → white on hover; news-article meta 11px gold. The contact column's phone/e-mail rows are
   dead `#` links in the source — the recreation upgrades them to `tel:` / `mailto:`. The copyright
   line credits the source site; the recreation credits Component Dock, as rule 5 requires.

## Source → React adaptation

| reference construct | recreation |
| --- | --- |
| `.js-fullheight` jQuery height | `min-h-screen` on the hero section |
| `.scrolled` / `.awake` class toggling | `scrolled` state from a `scroll` listener (`window.scrollY > 80`) |
| Bootstrap collapse + `.navbar-toggler` | `open` state, `aria-expanded`, lucide `Menu`/`X` |
| empty `<a>` with `background-image` | `<img>` with `alt` = the row headline, `object-cover` |
| `.media-social` opacity on row hover | `group` + `lg:group-hover:opacity-100`, `hoverReveal` prop on `SocialIcons` |
| flaticon / ionicons glyphs | `lucide-react` (`ChevronLeft`, `ChevronRight`, `ChevronDown`, `MapPin`, `Phone`, `Mail`) + inline simple-icons paths for the brand marks |
| owl carousel / animateNumber / Stellar | not used — the landing page has no carousel, counter or parallax element |
| `#ftco-loader` overlay | omitted |
| source photography and wordmark | seeded `picsum.photos` placeholders (`vellum-hero`, `vellum-1…9`) and the new name |

## Sibling note

This theme is built on the same `ftco` component framework as the already-prepped **Prose**
(`.ftco-section` rhythm, `.ftco-navbar-light` transparent→white navbar, `.ftco-footer` four columns
with `.block-21` news items, `.ftco-footer-social` circles). Compare the two when tuning the navbar
and footer: the mechanics are identical, only the palette and the type scale differ — so a fix to one
worth porting should be checked against the other.

## Open fidelity debt

Recorded in the spec's "Known app delta" table (navbar transparency, wordmark accent, 50px share
chips, circular pagination, `#222831` footer, footer socials/heading weight/meta colour, hero
headline `10vw`). Closing it is an implementer pass: tests first, then `bash scripts/verify-app.sh
vellum`.
