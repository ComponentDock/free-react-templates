# Barstone (ColorLib Ariclaw) — Tasks & Design Notes

> Prep artifacts written on `main` by the prep stream. Implementation ships
> later on `feat/template-barstone`. This folder + the spec are the claim
> marker: the implementer starts from here, no research needed.
> Full measured evidence: `openspec/specs/template-barstone/spec.md` and
> `docs/templates/barstone/design-notes.md`.

## Identity

| Thing | Value |
|---|---|
| New name | **Barstone** (one word: "bar" + "stone"; `git grep -il barstone origin/main` = 0 hits, absent from `TEMPLATES.md`, not a ColorLib slug — `template/barstone/`, `theme/barstone/` and `theme/bootstrap/barstone/` all 404) |
| App / package | `apps/barstone` · `@free-react-templates/barstone` |
| Deploy target | `barstone.free.componentdock.com` |
| Source | ColorLib **Ariclaw** — https://colorlib.com/wp/template/ariclaw/ |
| Preview | https://preview.colorlib.com/theme/ariclaw/ (HTTP 200, **35,140 B** HTML, sha256 `84c1225…`; `css/style.css` **192,377 B**, sha256 `24c5724…`; Bootstrap 4.3 grid + jQuery 1.12.1 + Popper + Owl Carousel + Slick + Magnific Popup + Gijgo + Nice Select + Themify Icons + Flaticon; `<title>` = "ariclaw"; `/downloads/free/ariclaw.zip` **404**, `js/main.js` **404** — the live bootstrap is `js/custom.js`, 2,619 B) |
| Screenshot | https://colorlib.com/wp/wp-content/uploads/sites/2/ariclaw-free-template.jpg (AVIF 1200×946, 45,094 B — top fold) |
| Category | Law firm / attorney (multi-page theme, home page in scope) |
| TEMPLATES.md rows | lines **896** and **2116** (`grep -c 'wp/template/ariclaw/'` = 2) — both `[x]`, wrongly credited to `counsel` |
| Why no app exists | `docs/row-multiplicity.md` §2 APP-WRONG-DESIGN: `counsel`'s spec names ColorLib **Whisper** (`row-excl / spec-excl` = 1 / 28) |

## Structure (1:1, DOM order from the live preview, 1440×1000, doc 7,146px)

1. `header.main_menu.home_menu` — **absolute**, **88px**, transparent,
   `z-index: 999`, over the hero; wordmark left (gold scales + gold serif
   "Ariclaw" → recreates as "Barstone"), six 16px Cardo items right
   (`padding: 38px 25px`, colour `#000`), Blog dropdown, and a
   **151×44** white pill "Let's Talk" (`1px #dde0e3`, radius 50px, gold label).
2. `section.banner_part` — **1,000px** (700 ≤1200/≤991, 650 ≤575), fill
   **`#F5EFE8`** from `img/banner_bg_1.png` (1,919×914 RGBA, `left bottom`,
   `background-size: auto`; the **alpha channel carries the diagonal** — white
   above, cream below), plus faint gavel + cap watermarks, plus the portrait
   `::after` (`img/banner_bg.png`, **766×926** cut-out, `top right`,
   `background-size: 46%`, `right: 10%`, `bottom: -74px`, hidden ≤991). Text in
   a 6-of-12 column: `h1` **50px Rufina 400 / 1.273 / #161d22** (555×191,
   three lines), 15px Roboto subline (`1.8`, `margin-bottom: 45px`), and the
   **square gold-gradient** `.btn_1` (186×50, `padding: 13.5px 45px`,
   `background-size: 200% auto`).
3. `section.about_part` — **994px**, white, `padding: 130px 0`. Centred `h2`
   **36px/700 Cardo**, `.section_tittle` `margin-bottom: 81px`; then a **7/5**
   two-image collage (second hidden ≤575); then a centred 15px paragraph in an
   8-col measure at `margin-top: 60px`.
4. `section.service_part` — **590px**, cream **`#f3f1ef`** via `::after`, four
   `col-lg-3` cards, **330px** tall, white, centred: **90px** gradient disc
   `linear-gradient(0deg, #ab7636, #d7af7e)` + 40px white glyph (`flaticon-law`,
   `-scale`, `-siren`, `-policeman` → lucide gavel/scale/siren/shield), `h2`
   **18px UPPERCASE #161d22** at `margin-top: 34px`, description hidden
   (`display: none`). Hover: card fills `-117deg` gold gradient, disc → 72px
   white with a 30px gold glyph, `h2` → 22px capitalize white, description
   shown white.
5. `section.our_offer.case_study` — **971px**, `container-fluid`, three
   `col-lg-4` cards with 7.5px half-gutters (first flush left, last right);
   hover/focus overlay = gold frame inset 22px + caption at 40% height
   (`h2` 30px white, `p` 15px white).
6. `section.team_part.section_bg` — **964px**, cream `#f3f1ef`, three portrait
   cards; hover/focus overlay = e-mail + three 15px white social glyphs; below
   the image a centred `h4` **22px** at `margin-top: 26px` and a role line.
7. `section.cta_area` — **423px**, solid **`#ab7636`**, `padding: 115.5px 0`,
   centred white `h2` **36px**; white **0-radius** `.cta_btn` **278×53**
   (`padding: 14.5px 50px`, 16px Cardo `#161d22`, hover label gold).
8. `section.review_part.section_bg` — **747px**, cream; quotation mark
   115×100 of `#d7af7e` at **20% opacity**, `top: 160px`, centred; quote
   **18px Roboto italic #666** (`margin: 95px 0 30px`), name **22px Cardo 500**
   (`margin-top: 50px`), role 14px; thumbnail rail 3-visible with **55×55**
   arrows framed `5px #dde0e3`; `custom.js`: `slidesToShow 1`, `speed 1000`,
   `autoplay true`, `pauseOnHover` + 3-visible nav rail with `centerMode`.
9. `section.blog_part` — **912px**, white; three cards, 10px white gutters;
   gold category + date + `h5` **22px Cardo 500** + 15px excerpt + like/comment
   meta; hover = white 90% wash with category and title.
10. `footer.footer-area` — **545px**, **`#162b45`**, `padding: 130px 0 20px`;
    four columns (wordmark + 14px `#999` blurb + four `#ccc` socials / six-link
    "Our Service" / "Contact Info" with glyphs / six-tile Instagram grid);
    `#45556a` 1px rule at `margin-top: 95px`; 15px copyright (13 ≤767) with the
    current year + four-item menu right.

## Tasks

- [ ] Scaffold `apps/barstone` from the simplest shipped app; rename the
      package, set `public/CNAME` and `homepage`, register `injectUiSource()`
      in `vite.config.ts`.
- [ ] `src/index.css`: `@theme` tokens `--color-gold #ab7636`,
      `--color-gold-soft #d7af7e`, `--color-ink #161d22`,
      `--color-cream #f3f1ef`, `--color-hero-cream #F5EFE8`,
      `--color-navy #162b45`; Cardo + Rufina + Roboto via one Google Fonts
      `<link>`.
- [ ] `Header`: absolute 88px shell, gold scales + "Barstone" wordmark, six
      16px Cardo items with `padding: 38px 25px`, Blog dropdown (hover **and**
      focus), 151×44 white pill with `#dde0e3` border, 40px mobile bar with a
      33×33 hamburger and `aria-expanded`.
- [ ] `Hero`: 1,000px `#F5EFE8` band with the **CSS `clip-path` diagonal**
      (do not ship the bitmap), gavel/cap watermarks under 10% opacity,
      46%-wide portrait anchored right (hidden ≤991), 50px/400 Rufina `h1`,
      15px/1.8 subline, square gold-gradient CTA.
- [ ] `About`: centred 36px/700 statement, 7/5 collage, centred paragraph at
      `margin-top: 60px`.
- [ ] `Services`: four 330px cards, 90px gradient discs, 18px UPPERCASE
      headings, and the full hover state (gradient card, 72px white disc,
      22px white heading, revealed white description) reachable by
      `focus-within`.
- [ ] `CaseStudy`: three distinct practice-area captions, gold frame inset
      22px on hover/focus, dark scrim under the white caption.
- [ ] `Attorneys`: three unique people + e-mails, hover/focus overlay with
      three named social links, 22px names.
- [ ] `ConsultationCta`: gold band, white 0-radius button, hover label gold,
      anchored to the contact section.
- [ ] `Testimonials`: four quotes/four thumbnails, decorative 20%-opacity
      quote mark, 55px framed arrows (hidden ≤767), autoplay ≈2s with
      pause-on-hover/focus, disabled under `prefers-reduced-motion`.
- [ ] `Blog`: three cards (gold category, date, 22px title, excerpt,
      like/comment meta), white 90% hover wash, 10px gutters.
- [ ] `Footer`: navy four columns, six-tile Instagram grid, `#45556a` rule,
      current year, four-item menu, **Component Dock** link
      (`https://www.componentdock.com/`).
- [ ] Placeholders: `https://picsum.photos/seed/barstone-<n>/<w>/<h>` for the
      portrait, two about images, three case images, three attorney portraits,
      four avatars, three blog images and six footer tiles; `lucide-react`
      icons.
- [ ] Tests (TDD, 100% coverage): header/mobile menu, hero, services hover,
      case captions, attorneys overlay, CTA link, testimonial advance +
      pause + reduced motion, blog cards, footer attribution, no `#` dead
      nav links.
- [ ] `scripts/verify-app.sh barstone` green (typecheck · lint · 100% coverage
      · build); desktop 1440 + mobile 390 renders compared with the reference;
      no horizontal overflow at 390.
- [ ] Implementer bookkeeping (NOT the prep stream): re-open rows **896** and
      **2116** `[x]` → `[ ]` on the branch, then `[x]` + surge URL after merge;
      run root `npm install` so the lockfile registers the workspace.

## Risks / things that look wrong in the source

- Hero content is 700px tall inside a 650px band at ≤575px — the band cuts the
  column. Fix by fitting content (spec, deltas §1).
- The case-study band repeats one caption three times and the attorney band
  repeats one e-mail three times — both are placeholder laziness, not design.
- The testimonial rail has six thumbnails over four quotes, each thumbnail
  embedding a full copy of the quote block. Ship four of each.
- `style.css` carries the Elements-page kit (`#f9f9ff`, `#f0e9ff`, `#415094`,
  `#4cd3e3`, `#38a4ff`, `#f4e700`, `#f44a40`); none of it is on the home page.
- `.cta_area .cta_btn { font-family: 400 }` is invalid CSS — the button
  inherits Cardo by accident. Keep Cardo on purpose.
