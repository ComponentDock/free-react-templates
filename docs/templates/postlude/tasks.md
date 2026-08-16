# Postlude (ColorLib Bootstrap Footer 07) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-postlude`.

## Design notes (replication findings)

- **Original:** ColorLib "Bootstrap Footer 07" — a free footer-only component
  demo from the "Bootstrap Footer" series (source:
  https://colorlib.com/wp/template/bootstrap-footer-07/). The page body is a
  70vh light-gray filler strip; the deliverable is the footer. TEMPLATES.md
  has ONE copy (line 783, `- [ ]` unchecked — bookkeep `[x]` + surge URL when
  done). This prep: Bootstrap Footer 07 → **Postlude** (a piece of music
  played at the end of a performance or service — continues the series'
  ending-themed names Colophon (01) → Epilogue (02) → Envoi (03) → Coda (04)
  → Outro (05) → Finale (06) → **Postlude** (07); no collision with `apps/`,
  `openspec/specs/`, `docs/templates/` — verified 2026-08-16).
- **PREVIEW PATH QUIRK (series-wide — see the colophon prep):**
  `https://preview.colorlib.com/theme/bootstrap-footer-07/` returns **HTTP
  404**. The live preview is served under the `/theme/bft/` prefix:
  **`https://preview.colorlib.com/theme/bft/bootstrap-footer-07/`**.
- **Preview DOM analyzed (LIVE, fetched via curl):**
  `https://preview.colorlib.com/theme/bft/bootstrap-footer-07/` (HTTP 200,
  18,009 bytes, `<title>Footer 07</title>`). Stylesheets:
  `fonts/icomoon/style.css` (icon font), `css/bootstrap.min.css` (Bootstrap
  **v4.5.3**), `css/style.css` (1,425 bytes — a **DEDICATED** sheet
  containing ONLY the `.footer-48201` rules, unlike footer-05's shared
  multi-footer sheet; verified: no other `footer-\d+` class in the HTML or
  the sheet). No JS behavior (jquery/popper/bootstrap.min.js load but the
  footer is static — none needed in the recreation). No Google Fonts link —
  the page declares `"Roboto", sans-serif` on `body` (system fallback in the
  preview); add the Google Fonts Roboto `<link>` in the recreation's
  index.html. **NOTE: this design uses ROBOTO, NOT Poppins** (footer-05/06
  used Poppins; footer-07 declares no footer font and inherits body Roboto).
- **Screenshot:** `bootstrap-footer-07.jpg` (viewed in browser, 1200×972) —
  light-gray demo area with "Footer #7" centered; below it a SOLID BLACK
  footer: bold WHITE "Colorlib" logo + gray lorem paragraph top-left; three
  columns of stacked gray links (no headings); five small gray social icons
  - a VIVID PINK PILL "Contact Us" button top-right; thin `#404040` divider
    above a centered small copyright. **NO variance between screenshot and
    live DOM.** Sleek high-contrast creative-agency aesthetic.
- **Design rhythm:** COMPONENT template, not a landing page — no navbar, no
  hero, no images, no forms, no headings in the link columns. Page = light
  filler (70vh) + BLACK footer. DARK footer — the first dark band in the
  series since Coda (footer 04).
- **Footer band:** `.footer-48201` — bg **`#000`**, `color: #777`,
  `padding: 7rem 0`, NO border-top on the footer itself.
- **Brand color: `#e42c64`** (vivid pink/magenta) — used for the tertiary
  "Contact Us" button ONLY; nothing else is branded.
- **Brand:** `.footer-site-logo` — **1.5rem, `#fff`, `display: block`,
  `margin-bottom: 1.5rem` (mb-4)**; source brand "Colorlib" → recreation
  brand **"Postlude"**; Component Dock link mandatory (NO ColorLib in app
  code).
- **Row 1 (single `div.container` → `div.row`):**
  1. **Brand column** (`col-md-4 pr-md-5`): `a.footer-site-logo.d-block.mb-4`
     "Postlude" (1.5rem `#fff`) + `p` blurb (Lorem ipsum → short company
     description, `#777`).
  2. **Nav column 1** (`col-md`): `ul.list-unstyled.nav-links` — **Home,
     About Us, Portfolio, Services, Contact** (5 links, NO heading).
  3. **Nav column 2** (`col-md`): **Clients, Team, Career, Testimonials,
     Journal** (5 links, NO heading).
  4. **Nav column 3** (`col-md`): **Privacy Policy, Terms & Conditions,
     Partners** (3 links, NO heading).
  5. **Socials + CTA** (`col-md text-md-center`): `ul.social.list-unstyled`
     — FIVE icon-only links (Instagram, Twitter, Facebook, Pinterest,
     Dribbble) + `p` → `a.btn.btn-tertiary` "Contact Us".
- **Nav/social link styling:** `li` block (nav) / inline-block (social), 10px
  bottom margin (nav only); `a` **`color: gray`** (≈#808080), social padding
  `7px`, hover → **`#fff`** (both). NO circle backgrounds on socials (unlike
  footer-05's 40px circles — plain glyphs here).
- **Tertiary button:** `.btn.btn-tertiary` — **`background: #e42c64`,
  `color: #fff`, `border-radius: 30px` (PILL), `border: none`,
  `padding: 10px 20px`**; no box-shadow.
- **Copyright row (second `div.row`):** `div.col-12.text-center` →
  `div.copyright.mt-5.pt-5` (Bootstrap `mt-5` = 3rem top margin, `pt-5` =
  3rem top padding) → `p > small` "© 2019-2020 All Rights Reserved." →
  recreation **"© <current year> Postlude"** + Component Dock link. The
  `.copyright` div has **`border-top: 1px solid #404040`**.
- **Grid (Bootstrap 4.5.3, reproduce responsively):** Row 1 =
  `col-md-4` (33.33%, `pr-md-5` right padding on md+) + `col-md` ×3 (equal
  widths) + `col-md text-md-center` — all five side by side on md+ (≥768px),
  stacked FULL-WIDTH below md in DOM order (brand → nav1 → nav2 → nav3 →
  socials+CTA). Row 2 always full-width centered. NO order flips.
- **Images:** NONE — the template is image-free; no picsum placeholders
  needed.
- **A11y:** semantic `<footer>` + main landmark; accessible names for the 5
  social links (source has bare icon spans — recreation adds `aria-label`s
  per monorepo conventions); focus-visible rings on all interactive elements.

## Structure order (1:1)

1. `main` → filler `.content` (`#f8f9fa`, ~70vh, centered demo label —
   source: "Footer #7").
2. `footer.footer-48201` (`#000`, `color: #777`, `padding: 7rem 0`, Roboto)
   → `div.container` → `div.row`:
   - `col-md-4.pr-md-5` — brand "Postlude" (1.5rem `#fff`, block, mb-4) +
     blurb `p`
   - `col-md` — nav links: Home, About Us, Portfolio, Services, Contact
   - `col-md` — nav links: Clients, Team, Career, Testimonials, Journal
   - `col-md` — nav links: Privacy Policy, Terms & Conditions, Partners
   - `col-md.text-md-center` — socials (Instagram, Twitter, Facebook,
     Pinterest, Dribbble) + pink pill "Contact Us" button
   - second `div.row` → `col-12.text-center` → `div.copyright.mt-5.pt-5`
     (border-top `#404040`) → "© <year> Postlude" + Component Dock link

## Implementation tasks

- [ ] Scaffold `apps/postlude` (copy simplest existing app; package
      `@free-react-templates/postlude`; `public/CNAME` =
      `postlude.free.componentdock.com`; homepage =
      `https://postlude.free.componentdock.com`); register the workspace in
      `package-lock.json`
- [ ] `index.html`: title "Postlude — Footer", Roboto Google Fonts `<link>`
- [ ] `src/index.css` tokens: `#000` (footer bg), `#e42c64` (brand/button),
      `#fff` (logo, link/social hover, button text), `#777` (footer text,
      links, socials), `#404040` (copyright divider), `#f8f9fa` (filler bg);
      `a` transition `.3s all ease`
- [ ] Components: `Filler` (light ~70vh demo strip), `Footer` (brand column,
      three nav link columns, socials + pill CTA, copyright + Component
      Dock link)
- [ ] Brand "Postlude" 1.5rem `#fff` block + mb-4; blurb `#777`; copyright
      "© <year> Postlude"; Component Dock link `https://www.componentdock.com/`;
      NO ColorLib references in app code
- [ ] Nav columns (NO headings): (Home, About Us, Portfolio, Services,
      Contact) / (Clients, Team, Career, Testimonials, Journal) / (Privacy
      Policy, Terms & Conditions, Partners) — `block` li, 10px bottom
      margin, `gray` links, hover `#fff`
- [ ] Socials: 5 icon-only links (Instagram, Twitter, Facebook, Pinterest,
      Dribbble) — inline `gray`, padding 7px, hover `#fff`, NO circles;
      inline SVG brand icons (lucide removed them — probe exports with
      `typeof`); `aria-label` each; centered on md+
- [ ] CTA: pink PILL button "Contact Us" — `bg #e42c64`, white text,
      `border-radius: 30px`, `padding: 10px 20px`, no border
- [ ] Copyright row: 1px `#404040` border-top with `mt-5 pt-5` spacing;
      "© <year> Postlude" small centered + Component Dock link
- [ ] Responsive grid: 5 columns side by side on md+ (brand 33% with
      `pr-md-5`, links equal, socials+CTA centered), stacked full-width
      below md; no horizontal overflow
- [ ] Tests: 100% coverage (filler label, brand + blurb, 3 nav columns exact
      copy + no headings, 5 social links with aria-labels, pill button,
      copyright + Component Dock link, responsive classes present)
- [ ] `npm run verify:app postlude` passes; commit `feat: add postlude …`;
      PR + immediate squash merge; then TEMPLATES.md bookkeeping — line 783
      (Bootstrap Footer 07) → `[x]` + surge URL + `npm run readme:status`

## Verification checklist (from spec)

- [ ] Filler: `#f8f9fa` ~70vh + centered demo label
- [ ] Footer BLACK `#000`, `color: #777`, `padding: 7rem 0`, no border-top;
      semantic footer + main landmark
- [ ] Brand column: "Postlude" 1.5rem `#fff` block + mb-4; `#777` blurb
- [ ] Nav columns (NO headings): exact copy — (Home, About Us, Portfolio,
      Services, Contact) / (Clients, Team, Career, Testimonials, Journal) /
      (Privacy Policy, Terms & Conditions, Partners); block li 10px margin,
      `gray` hover `#fff`
- [ ] Socials: 5 plain glyph links (Instagram, Twitter, Facebook, Pinterest,
      Dribbble) — `gray` padding 7px hover `#fff`, no circles, inline SVG
      brand icons, aria-labels
- [ ] CTA: pink PILL "Contact Us" — `bg #e42c64`, white, radius 30px,
      padding 10px 20px
- [ ] Copyright: 1px `#404040` border-top + `mt-5 pt-5`; "© <year> Postlude"
      small centered + Component Dock link (`https://www.componentdock.com/`)
- [ ] Responsive: 5 columns on md+ (33% + 3×equal + centered last), stacked
      full-width below md; no horizontal overflow
- [ ] Roboto Google Fonts link; no images; no ColorLib anywhere in
      `apps/postlude`
- [ ] `npm run verify:app postlude` green; TEMPLATES.md line 783 bookkept
      `[x]`
