# BuildWell — Design Notes

- **Source slug:** `celt` — ColorLib "Celt" (`https://colorlib.com/wp/template/celt/`, HTTP 200,
  109,359 B).
- **Preview URL:** `https://preview.colorlib.com/theme/celt/` — HTTP 200, 31,820 B,
  `<title>` "Celt - HTML Construction Website Template" (re-read 2026-10-24).
- **Theme stylesheet:** `css/style.css` — 28,799 B, sha256
  `2f934fdfad5f782de6cea2a69acd4c04a01bd4b4aa2762cc320448669019ff84`. The vendor sheets
  beside it (`bootstrap.min.css` 23,729 B, `font-awesome.min.css`, `magnific-popup.css`,
  `owl.carousel.css`, `owl.theme.default.css`) hold no design tokens.
- **Scripts:** `js/main.js` 2,298 B carries every behaviour (sticky nav, three sliders,
  lightbox, accordion, preloader); `js/snippet.js` is **404**.
- **Archive:** `downloads/free/celt.zip` → **404**. The live preview is the only reference.
- **Category:** Construction / Corporate, single-page recreation (the theme ships one page
  plus one blog-single page).

> **Prep status (2026-10-24): this brief was WRONG and is rewritten.** It described
> ColorLib **Balay** (fixed left sidebar, hero slider, Quicksand, `#ffc300` on black) over a
> spec — and an app — built for **Celt** (navy `#001232` + yellow `#FFD626`, Poppins,
> top-navbar + white navbar). `scripts/verify-docs-source.py` bucketed it `DOCS-STALE`;
> `scripts/verify-app-fidelity.py --slug buildwell` returns `COVERED`, i.e. the app paints
> the spec's colour and the brief was the stale layer. Everything below is measured from the
> live Celt preview this run.

## Source map

| page | status | bytes | notes |
| --- | --- | --- | --- |
| `index.html` | 200 | 31,820 | directory URL serves the same page — an `index.html` nav link is a no-op, not a 404 |
| `blog.html` | 200 | 18,229 | a **blog-single** page: "Blog Single Post", "3 Comments", "Leave a reply", sidebar Category / Populare Posts / Tags |
| `about.html`, `contact.html`, `blog-single.html`, `project.html`, `projects.html`, `services.html`, `service.html`, `elements.html`, `about-us.html`, `contact-us.html`, `blog-post.html`, `project-single.html` | 404 | 9 | the theme is genuinely two pages |
| `downloads/free/celt.zip` | 404 | 9 | no archive to cross-check against |

- **Bands, in order:** `#header` (`#top-navbar` → `#main-navbar`) → `#home.banner-area` →
  `#about` (band 1 `md-section` = 3 cards; band 2 `md-section bg-grey` + half background
  image) → `#numbers.sm-section.bg-main` → `#portfolio.md-section` (`padding-bottom: 0`) →
  `#service.md-section` (the `#accordion` "Why Choose Us" block lives **inside** this band) →
  `#cta-1.md-section.bg-main` → `#clients` (a background-image wrapper with no content of its
  own; it hosts the testimonial) → `#testimonial.sm-section` → `#partners.sm-section` →
  `#blog.md-section` → `#cta-2.xs-section.bg-main` → `#footer.bg-dark` (`#top-footer`,
  `#bottom-footer`) → `#preloader`.
- **Anchors: 75** — **65 dead `href="#"`** (the entire nav: Home · Home version 01/02/03 ·
  About · Projects · Single Project · Project Detail · Services ▾ · Blog · Blog page · Blog
  post page · Contact), 2 × `index.html`, 4 × `./img/projectN.jpg` (magnific-popup lightbox
  targets), 3 × `#collapse-1|2|3` (accordion toggles), 1 external `https://colorlib.com`.
  There is no live inner-page set to mirror: the nav is decorative.
- **Section paddings:** `.md-section` 90px · `.sm-section` 60px · `.xs-section` 30px, top and
  bottom.

## Design tokens (from the live stylesheet)

The sheet's own header comment is the canonical block: `Body: #64728A` · `Headers: #004` ·
`Primary: #FFD626` · `Dark: #001232` · `Grey: #F8F8F8 #EEE` · `Fonts: Poppins`.

| token | value | where it comes from |
| --- | --- | --- |
| Brand dark | `#001232` | 8 hits — `#main-navbar`/top bar, `.main-button`, `.bg-dark` footer |
| Brand accent | `#FFD626` | 31 hits — `.bg-main` (three bands), `.secondary-button`, `.service i`, `.about > img` + `.blog-img` 4px rules |
| Heading | `#004` = `#000044` | 28 hits — every `h1..h4`, links, `.number h3/span` |
| Body | `#64728A` | 10 hits — `body`, `.sub-title`, input borders |
| White | `#FFF` | 14 hits — card bands, `.bg-img.overlay` wash, `.main-button` text |
| Light grey | `#F8F8F8` / `#EEE` | 2 / 19 hits — `.bg-grey` About band; hairlines and the `.service:hover` shadow |
| Typeface | `Poppins` | the sheet's only `font-family` (plus FontAwesome glyphs); `body` 16px/24px, `letter-spacing: .3px` |
| Heading scale | 35 / 28 / 20 / 16 px, weight 700 | `h1..h4` — headings never go lighter |
| Radii | `0px` ×4 (buttons/inputs), `50%` ×2 (slider dots) | square buttons are a signature; do not round them |
| Buttons | `10px 30px`, `border: 1px solid transparent` | `.main-button` navy/white · `.secondary-button` yellow/`#004` |
| Button hover | `:after` fill grows `height 0%→100%` in `.2s` | main→`#FFD626` + `#004` text; secondary→`#001232` + `#FFF` text |
| Icon block | `60×60`, `line-height: 60px`, `font-size: 35px` | `.number i` (`#004`) · `.service i` (`#FFD626`, at `left:0; top:20px`) |
| Card hover | `box-shadow: 0 0 10px 3px #EEE` | `.service:hover` |
| Image rule | `border-bottom: 4px solid #FFD626` | `.about > img`, `.blog .blog-img` |

Poppins on Google Fonts (checked 2026-10-24): `css2?family=Poppins:wght@300;400;500;600;700&display=swap`
→ **200**; legacy `css?family=Poppins:300,400,500,600,700` → 200. Load 300–700.

## Visual design (TEMPLATES.md screenshot + live preview)

Screenshot = top fold only (1,200 × 960): navy top bar with three contact items, white navbar
with a yellow circular mark + navy "Company" wordmark, dropdown carets and a magnifier, then a
full-bleed construction photo **washed almost white** with a **navy** headline "We Build Your
Dream", a grey lead paragraph, and a single yellow "Learn more" button. No dark scrim anywhere
— the pale overlay is the design's signature and the CSS proves it
(`.bg-img.overlay:after { background-color:#FFF; opacity:.9 }`). The rest of the page follows
from the sheets/DOM above: yellow stats band, 4-up portfolio carousel, 6 services with the FAQ
tucked into the same band, two yellow CTA bands, testimonials over a washed photo, logo
carousel, 3 blog cards, navy footer.

## Section-by-section fidelity notes

1. **Top navbar** — `#001232`, height driven by content (~46px), three items right-aligned:
   `1673 Marietta Street` · `120 875 4578` · `company@support.com`, each with a **circular
   outline** FontAwesome glyph. White 14px text. Recreation: lucide icons in a `rounded-full`
   border ring, `#FFD626` stroke.
2. **Main navbar** — white, ~70px, logo left (yellow circle + navy bold wordmark), nav right:
   Home ▾ · About · Projects ▾ · Services ▾ · Blog ▾ · Contact, magnifier last. `main.js` adds
   `fixed-navbar` once `scrollTop > #top-navbar.height()`; mobile gets a hamburger
   (`main-navbar-collapsed`) and a search toggle (`navbar-search-collapsed`). All nav hrefs are
   `#` in the source.
3. **Hero** — `#home` height is set in JS to `window.height - #header.height()`, content
   centred via `.home-wrapper` (`top:50%`, translateY −50%). `h1` 35px `#004`, `p.lead`,
   **one** `.secondary-button` "Learn more". Background = `img/background1.jpg` under the white
   0.9 wash. Recreation: `min-h-[calc(100vh-*)]` band, `picsum` photo, `bg-white/90` overlay,
   navy heading, yellow button.
4. **About band 1** — three `.col-md-4 .about` cards: full-width photo with a **4px yellow
   bottom border**, `h3` title ("Certified Experience", "The Great Teamwork", **"Modern
   Thechnology"** — the source's spelling), one-sentence blurb, `.text-link` "Read more" whose
   yellow underline grows from 0 to 100% height on hover.
5. **About band 2** — `bg-grey` `#F8F8F8`, half-width background photo pinned left
   (`.bg-img.bg-half`, `background-attachment: scroll`, white 0.9 overlay that switches to
   full width below 992px), content in `col-md-offset-7 col-md-6`: kicker "Subtitle", `h2`
   "About Us", `p.lead` + `p`.
6. **Stats** — `bg-main` yellow, `sm-section` (60px). Four `.number` blocks in `col-xs-6
   col-md-3` (2×2 on mobile): 60px `#004` glyph at `left:0`, `h3` 28px number, `span` label.
   Values 20 / 154 / 785 / 14 with labels Year Of Experience / Project Completed / Happy
   Client / Award Won.
7. **Portfolio** — kicker + `h2` "Featured Works" centred, then `#portfolio-slider` owl
   carousel (1 / 2 / 4 items at 0 / 480 / 992px, `loop`, arrows `fa-angle-left|right`, no
   dots, no autoplay). Cards: `h3` "Project Title" + "Category" over a photo; `.lightbox`
   anchors open the four `img/projectN.jpg` in magnific-popup. "View All" text-link below.
   Band has `padding-bottom: 0` (it butts against the services band).
8. **Services + FAQ (one band)** — `h2` "Our Services", six `.service` cards in 3 columns;
   each has a 35px yellow glyph at `left:0; top:20px` and content padded `15px 15px 15px 70px`
   (title + one line), hover `0 0 10px 3px #EEE`. Below them, in the same `md-section`:
   kicker "Subtitle", `h2` "Why Choose Us", a lead paragraph, then `#accordion` with three
   panels (`Certified Experience` / `The Great Teamwork` / `Modern Thechnology`), `#collapse-1`
   open (`class="in"`). `main.js` deliberately stops propagation on the open panel's header, so
   a panel only swaps when you click a *different* one.
9. **CTA 1** — `md-section bg-main`, centred `col-md-10 col-md-offset-1`: `h2` (lorem), `h4`
   sub-line, navy `.main-button` "Contact Us".
10. **Testimonial** — wrapped in `#clients` whose child `.bg-img.overlay` paints
    `img/background2.jpg` with the white 0.9 wash. Inside: kicker "Subtitle", `h2` "Happy
    Clients", `#testimonial-slider` (1 item, `margin:15`, dots, `autoplay:true`), slides =
    quote paragraph + `h3` "John Doe" + "CEO Company".
11. **Partners** — `sm-section`, `#partners-slider` owl: 2 / 4 / 6 items, arrows, autoplay,
    margin 15, logos only (`.partner > img`), no heading.
12. **Blog** — kicker "Subtitle" + `h2` **"Lastest News"** (typo in the source; the recreation
    ships "Latest News" and this line records why they differ), three cards: photo with 4px
    yellow rule, meta "10 November 2017 , By John Doe", `h3` title, blurb, "Read more".
13. **CTA 2** — `xs-section bg-main` (30px): `col-md-9` `h3` + `col-md-3` navy `.main-button`
    "Contact Us".
14. **Footer** — `bg-dark` `#001232`, `sm-section`. Widget 1 (`col-md-4`): `logo-alt.png` +
    blurb + `.footer-contact` list (map / phone / envelope, `.text-link`). Widget 2: "Quick
    Links" title over **two identical** `col-xs-6` lists (Home · About Us · Services ·
    Projects · News · Contact Us) — the duplicate is in the source markup. Widget 3: "Keep in
    touch" + blurb + `.footer-subscribe` form (`input[type=email]` "Enter your email" +
    `<button>Subscribe</button>`) + four social glyphs (facebook, twitter, google-plus,
    linkedin). `#bottom-footer`: "© Copyright 2017. All Rights Reserved, Created by Colorlib"
    → replaced by the Component Dock credit.
15. **Preloader** — `#preloader` fades 600 ms after `load`; no other page chrome.

## Source → React adaptation

| source | React |
| --- | --- |
| `#top-navbar` three `<a class="text-link">` with FA glyphs | `TopBar` (inside `Navbar`): icon + text rows, `lucide-react` `MapPin`/`Phone`/`Mail` in a `rounded-full border` ring |
| `#main-navbar` + `fixed-navbar` class on scroll | `Navbar`: `useEffect` scroll listener toggling `sticky top-0`, hamburger below `md` |
| `#home` with JS-computed height + `.bg-img.overlay` | `Hero`: `min-h-[calc(100vh-7rem)]`, `picsum` background, `bg-white/90` overlay, `h1` in `text-heading`, one `bg-accent` button |
| `.about` cards (img + 4px rule + link) | `About`: 3-col grid, `border-b-4 border-accent` on the image wrapper |
| `bg-img.bg-half` About band | `AboutUs` band: `grid md:grid-cols-2`, image left, copy right, `bg-light` |
| `.number` icon-left blocks | `Stats`: `bg-accent`, icon + number in a flex row (not a centred badge) |
| owl carousels (portfolio / testimonial / partners) | embla-free: index state + prev/next buttons for portfolio and partners, dots + `setInterval` autoplay for testimonials |
| `magnificPopup` lightbox | `<a target="_blank">` per card or a dialog with the `picsum` image — keep a real activation path for tests |
| `#accordion` + `data-toggle="collapse"` | `Faq`: `useState<number | null>`, first panel open, one open at a time |
| footer subscribe `<form>` | `useState` email + regex validation, inline error, success message |
| `.text-link` hover underline | `relative` span with an `after:` pseudo bar animating `h-0 → h-full` |

## Deltas from the app as shipped (`apps/buildwell`)

The app is **not** changed by this prep. It follows the pre-2026-10-24 spec, which had three
factual errors about the source; they are recorded here so a later fidelity pass knows what to
compare against:

1. **Hero overlay inverted** — app: `bg-brand/80` + white `h1` + two buttons; source: white 0.9
   wash + `#000044` headline + one yellow "Learn more".
2. **Newsletter band invented** — app renders a standalone yellow "Subscribe to Our Newsletter"
   section; the source has no such band (the footer "Keep in touch" widget is the only form,
   and the yellow pre-footer strip is a Contact-Us CTA).
3. **Stats badges centred** — app: circular navy icon badges above each number; source: 60px
   `#004` glyph to the left of the number.
4. **Quick Links** — app lists one link set; source duplicates it.

Palette, typeface, band order and section copy are faithful (`verify-app-fidelity.py --slug
buildwell` → `COVERED`).

## Placeholder images

`https://picsum.photos/seed/buildwell-<n>/<w>/<h>` — hero `buildwell-hero/1920/1080`,
about cards `buildwell-about-1..3/600/400`, about band `buildwell-about-wide/1200/900`,
portfolio `buildwell-work-1..4/600/480`, testimonial band `buildwell-clients/1920/800`,
partners `buildwell-partner-1..6/200/80`, blog `buildwell-blog-1..3/600/400`.

## Testing notes

- Navbar: nav labels render, scroll listener adds the fixed class, hamburger toggles.
- Hero: single CTA present, headline colour token applied.
- About: three card titles, `border-b-4` rule class, band with "About Us".
- Stats: four values + labels.
- Portfolio: 4 cards, next/prev advance the index, lightbox activation is reachable.
- Services: six titles; FAQ: first open, click swaps, clicking the open panel keeps it open.
- CTAs: two bands, each with a "Contact Us" button.
- Testimonial: one quote at a time, dots switch slides.
- Blog: three cards with date + author meta.
- Subscribe: invalid e-mail shows an error, valid one shows success, no navigation.
- Footer: Component Dock anchor.
