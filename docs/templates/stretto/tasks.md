# Stretto (ColorLib Bootstrap Footer 08) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-stretto`.

## Design notes (replication findings)

- **Original:** ColorLib "Bootstrap Footer 08" — a free footer-only component
  demo from the "Bootstrap Footer" series (source:
  https://colorlib.com/wp/template/bootstrap-footer-08/). The page body is a
  70vh light-gray filler strip; the deliverable is the footer. TEMPLATES.md
  has ONE copy (line 784, `- [ ]` unchecked — bookkeep `[x]` + surge URL when
  done). This prep: Bootstrap Footer 08 → **Stretto** (a musical term for the
  concluding passage of a fugue — continues the series' ending-themed names
  Colophon → Envoi → Epilogue → Coda → Outro → Finale → Postlude; no collision
  with `apps/`, `openspec/specs/`, `docs/templates/` — verified 2026-08-16).
- **PREVIEW PATH QUIRK (series-wide — see the colophon prep):**
  `https://preview.colorlib.com/theme/bootstrap-footer-08/` returns **HTTP
  404**. The live preview is served under the `/theme/bft/` prefix:
  **`https://preview.colorlib.com/theme/bft/bootstrap-footer-08/`**.
- **Preview DOM analyzed (LIVE, fetched via curl):**
  `https://preview.colorlib.com/theme/bft/bootstrap-footer-08/` (HTTP 200,
  18,104 bytes, `<title>Footer 08</title>`). Stylesheets:
  `fonts/icomoon/style.css` (icon font — FontAwesome codepoints: instagram
  `\f16d`, twitter `\f099`, facebook `\f09a`, pinterest `\f0d2`, dribbble
  `\f17d`), `css/bootstrap.min.css` (Bootstrap **v4.5.3**), `css/style.css`
  (1,866 bytes — a **DEDICATED** sheet containing ONLY `.footer-99382` rules;
  verified no other `footer-\d+` class in HTML or sheet). No JS behavior
  (jquery/popper/bootstrap.min.js load but the footer is static — none needed
  in the recreation). No Google Fonts `<link>` — cf-fonts inline `@font-face`
  blocks load **Roboto** (body), **Poppins** (footer) and **Source Serif
  Pro**; Source Serif Pro is NEVER used in this footer's CSS (theme leftover)
  — the recreation adds Google Fonts `<link>`s for Roboto + Poppins only.
- **Screenshot:** `bootstrap-footer-08.jpg` (viewed in browser, 1200×972) —
  light-gray demo area with "Footer #8" centered; below it a DARK footer
  band reading as solid dark gray (photo + 70% black overlay); brand column
  left (white logo + gray blurb), then Discover / About / Help link columns
  with bold white headings and gray links, then Follow Us with five faint
  gray social icons; thin centered copyright bar at the bottom. **NO variance
  between screenshot and live DOM.** No brand color visible at rest — the
  design is monochrome dark; `#e42c64` (pink) exists only in the UNUSED
  `.btn.btn-tertiary` rule; hovers brighten to `#fff`.
- **Design rhythm:** COMPONENT template, not a landing page — no navbar, no
  hero, no text buttons, no subscribe form. Page = light filler (70vh) +
  dark photo-background footer. Closest cousin is Postlude (footer 07) but
  this variant is the DARK one: background photo + overlay, white headings,
  `#999` links (hover `#fff` — NO brand color hover like footer-06's
  `#4200ff`), and a brand column with logo + blurb.
- **Footer band:** `.footer-99382` — inline `background-image:
url('images/hero_1.jpg')` (→ picsum `seed/stretto-1/1600/900` placeholder;
  NEVER copy the asset), `background-size: cover; background-position:
center center; background-repeat: no-repeat`, `padding: 7rem 0`,
  `color: #777`, `font-family: "Poppins", sans-serif`, `position: relative`;
  `:before` overlay **`rgba(0, 0, 0, 0.7)`** spanning the whole footer
  (recreation: absolutely-positioned overlay div or Tailwind `bg-black/70`).
- **Brand accent:** `#e42c64` (raspberry pink) on `.btn.btn-tertiary`
  (`border-radius: 30px`, `padding: 10px 20px`) — **declared but NOT present
  in the DOM** (no buttons). The rendered footer shows NO pink. Keep the
  token optional; the visible design is monochrome dark.
- **Brand column:** `div.col-md-4.pr-md-5` — `a.footer-site-logo.d-block.mb-4`
  (1.5rem, `#fff`, block, 1.5rem bottom margin; source text "Colorlib" →
  recreation **"Stretto"**) + `p` gray `#777` blurb paragraph (lorem-ipsum
  style; paraphrase OK).
- **Link columns (3):** each `div.col-md` with `h3` (16px bold **`#fff`**,
  `margin-bottom: 30px`) + `ul.list-unstyled.nav-links` (`li`
  `margin-bottom: 10px`; `a` **`#999999`**, hover **`#fff`**):
  1. **Discover** — Home, About Us, Portfolio, Services, Contact
  2. **About** — Clients, Team, Career, Testimonials, Journal
  3. **Help** — Privacy Policy, Terms & Conditions, Partners
- **Follow Us column:** `div.col-md` — `h3` "Follow Us" + `ul.social.list-unstyled`:
  FIVE icon-only links (`li` inline-block; `a` `color: gray`, `padding: 7px`,
  hover `#fff`; FIRST link class `pl-0` → `padding-left: 0`): Instagram,
  Twitter, Facebook, Pinterest, Dribbble. **lucide-react REMOVED brand icons**
  (probe with `typeof`) → inline SVG brand glyphs (simple-icons paths) +
  `aria-label`s.
- **Copyright bar:** `div.row` → `div.col-12.text-center` →
  `div.copyright.mt-5.pt-5` (top border **1px solid `#595959`**, 3rem margin
  above + 3rem padding below) → `p > small` "© 2019—2020 All Rights Reserved."
  (no "Colorlib" brand inside) → recreation **"© <current year> Stretto"** +
  Component Dock link.
- **Grid (Bootstrap 4.5.3, reproduce responsively):** top row = `col-md-4`
  (brand, `pr-md-5` = 3rem right padding on md+) + 4× `col-md` (equal share
  of remaining 8/12). md+ (≥768): all five side-by-side; BELOW md: ALL
  full-width stacked — **NO `col-sm-6` here** (unlike footer-06, this
  variant has NO 2-up sm wrap). Copyright row `col-12` always centered. No
  order flips.
- **Images:** ONE — the footer background photo placeholder only
  (`https://picsum.photos/seed/stretto-1/1600/900`); no other images.
- **A11y:** semantic `<footer>` + main landmark; accessible names for the 5
  icon-only social links (source has bare spans — recreation adds them);
  focus-visible rings on all interactive elements.

## Structure order (1:1)

1. `main` → filler `.content` (`#f8f9fa`, ~70vh, centered demo label —
   source: "Footer #8").
2. `footer.footer-99382` (photo bg + `rgba(0,0,0,0.7)` overlay, `padding:
7rem 0`, Poppins) → `div.container`:
   a. `div.row`:
   - `col-md-4.pr-md-5` — brand: "Stretto" logo link (1.5rem `#fff`, block,
     mb 1.5rem) + gray blurb paragraph
   - `col-md` — Discover (Home, About Us, Portfolio, Services, Contact)
   - `col-md` — About (Clients, Team, Career, Testimonials, Journal)
   - `col-md` — Help (Privacy Policy, Terms & Conditions, Partners)
   - `col-md` — Follow Us (Instagram `pl-0`, Twitter, Facebook, Pinterest,
     Dribbble — icon-only links)
     b. `div.row` → `col-12.text-center` → `div.copyright.mt-5.pt-5` — small
     "© <year> Stretto" + Component Dock link, `#595959` top border

## Implementation tasks

- [ ] Scaffold `apps/stretto` (copy simplest existing app; package
      `@free-react-templates/stretto`; `public/CNAME` =
      `stretto.free.componentdock.com`; homepage =
      `https://stretto.free.componentdock.com`); register the workspace in
      `package-lock.json`
- [ ] `index.html`: title "Stretto — Footer", Google Fonts `<link>`s for
      Roboto + Poppins (NOT Source Serif Pro)
- [ ] `src/index.css` tokens: `#e42c64` (brand accent — unused at rest,
      optional), `#999999` (nav links), `gray` (social glyphs), `#fff`
      (headings/hovers/logo), `#777` (blurb/copyright), `#f8f9fa` (filler
      bg), `#595959` (copyright border); `a` transition `.3s all ease`
- [ ] Components: `Filler` (light ~70vh demo strip), `Footer` (photo band +
      overlay, brand column, three link columns, Follow Us socials,
      copyright bar + Component Dock link)
- [ ] Footer band: picsum `seed/stretto-1/1600/900` bg, `cover`/center/
      no-repeat + `rgba(0,0,0,0.7)` overlay spanning the band; `padding:
    7rem 0`; semantic `<footer>`
- [ ] Brand column: white "Stretto" logo link (1.5rem, block, mb 1.5rem) +
      gray `#777` blurb; `col-md-4` + `pr-md-5`
- [ ] Link columns: exact headings + copy (Discover 5 / About 5 / Help 3);
      bold 16px WHITE headings (`mb 30px`); stacked `#999999` links (li
      10px bottom margin), hover `#fff`
- [ ] Socials: Instagram (`padding-left: 0`) + Twitter + Facebook +
      Pinterest + Dribbble icon-only links — `gray`, padding 7px,
      inline-block, hover `#fff`; inline SVG brand icons (lucide removed
      them — probe exports with `typeof`); `aria-label` each
- [ ] Copyright bar: `1px solid #595959` top border, ~3rem vertical spacing;
      "© <year> Stretto" small text centered + Component Dock link
      `https://www.componentdock.com/`; NO ColorLib references in app code
- [ ] Responsive grid: brand 4/12 + 4 equal `col-md` side-by-side on md+;
      ALL stacked full-width below md (NO 2-up sm wrap); copyright row
      `col-12` always centered; no horizontal overflow
- [ ] Tests: 100% coverage (filler label, photo band + overlay, brand logo +
      blurb, three columns exact headings+copy, five social links with
      aria-labels, copyright + Component Dock link, responsive classes
      present)
- [ ] `npm run verify:app stretto` passes; commit `feat: add stretto …`; PR +
      immediate squash merge; then TEMPLATES.md bookkeeping — line 784
      (Bootstrap Footer 08) → `[x]` + surge URL +
      `npm run readme:status`

## Verification checklist (from spec)

- [ ] Filler: `#f8f9fa` ~70vh + centered demo label
- [ ] Footer dark band: picsum `seed/stretto-1` bg (`cover`, center,
      no-repeat) + `rgba(0,0,0,0.7)` overlay; `padding: 7rem 0`, Poppins;
      semantic footer + main landmark
- [ ] Brand column: white "Stretto" logo link (1.5rem, block, mb 1.5rem) +
      gray `#777` blurb; `col-md-4` + `pr-md-5`
- [ ] Three link columns (Discover 5 / About 5 / Help 3) — exact copy, bold
      16px white headings (`mb 30px`), stacked `#999999` links, hover `#fff`
- [ ] Follow Us: five icon-only social links (Instagram first `pl-0`,
      Twitter, Facebook, Pinterest, Dribbble) — `gray` glyphs, 7px padding,
      inline-block, hover `#fff`, inline SVG brand icons, aria-labels
- [ ] Copyright bar: `1px solid #595959` border, ~3rem spacing; "© <year>
      Stretto" centered + Component Dock link
      (`https://www.componentdock.com/`)
- [ ] Responsive: 5-across on md+ (brand 4/12 + 4 equal) / stacked
      full-width below md (NO 2-up sm wrap); copyright row always centered;
      no horizontal overflow
- [ ] Roboto + Poppins Google Fonts links (no Source Serif Pro); exactly ONE
      image (bg placeholder); no ColorLib anywhere in `apps/stretto`
- [ ] `npm run verify:app stretto` green; TEMPLATES.md line 784 bookkept `[x]`
