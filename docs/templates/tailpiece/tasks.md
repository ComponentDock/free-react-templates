# Tailpiece (ColorLib Bootstrap Footer 11) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-tailpiece`.

## Design notes (replication findings)

- **Original:** ColorLib "Bootstrap Footer 11" — a free footer-only component
  demo from the "Bootstrap Footer" series (source:
  https://colorlib.com/wp/template/bootstrap-footer-11/). The page body is a
  light-gray filler strip; the deliverable is the footer. TEMPLATES.md has
  ONE copy (line 787, `- [ ]` unchecked — bookkeep `[x]` + surge URL when
  done). This prep: Bootstrap Footer 11 → **Tailpiece** ("a decorative design
  printed at the end of a chapter or book" — continues the series'
  ending-themed names Colophon → Envoi → Epilogue → Coda → Outro → Finale →
  Postlude → Stretto → Fermata → Finis; no collision with `apps/`,
  `openspec/specs/`, `docs/templates/` — verified 2026-08-16).
- **PREVIEW PATH QUIRK (series-wide — see the colophon prep):**
  `https://preview.colorlib.com/theme/bootstrap-footer-11/` returns **HTTP
  404**. The live preview is served under the `/theme/bft/` prefix:
  **`https://preview.colorlib.com/theme/bft/bootstrap-footer-11/`**.
- **Preview DOM analyzed (LIVE, fetched via curl):**
  `https://preview.colorlib.com/theme/bft/bootstrap-footer-11/` (HTTP 200,
  11,477 bytes, `<title>Footer 01</title>` — the title is the variant label,
  not the series number). Stylesheets: `css/ionicons.min.css` (icon font:
  brand `ion-logo-twitter/facebook/instagram`, UI `ion-ios-pin/call/send/heart`,
  meta `icon-calendar/person/chat`) and `css/style.css` (222,134 bytes — a
  FULL shared FTCO sheet; only the `.footer-01` block ~lines 8246–8297 plus
  the `.ftco-footer-social` / `.block-21` / `.block-23` helpers apply here).
  No Google Fonts `<link>` — cf-fonts inline `@font-face` loads **Poppins**
  300–900; `body { font-family: "Poppins", Arial, sans-serif; font-size:
15px; line-height: 1.8; }`, headings Poppins lh 1.5 weight 400. No JS
  behavior (jquery/popper/bootstrap.min.js load but the footer is static —
  none needed in the recreation).
- **Screenshot:** `bootstrap-footer-11.jpg` (viewed in browser, 1200×972) —
  light-gray demo area with "Footer #01" centered; below it a DARK navy-blue
  footer band with FOUR columns: brand wordmark + lorem paragraph + three
  circular violet social buttons (Twitter, Facebook, Instagram); "Latest
  News" with two rounded-thumbnail rows (title + small meta line); "Quick
  Links" stacked white links; "Have a Questions?" with three icon+text
  contact rows; bottom centered thin copyright bar with a purple heart "made
  with ♥ by Colorlib.com". **NO variance between screenshot and live DOM.**
- **Design rhythm:** COMPONENT template, not a landing page — no navbar, no
  hero, no forms, no logo image. Page = light filler + DARK navy footer with
  violet accents. It is the BRAND/NEWS variant of the series: first with a
  brand column + circular violet social buttons + news thumbnails, second
  dark treatment (after Stretto/footer-08, but violet not gold, blob
  watermark not photo band). Closest cousin: Finis (footer 10 — same violet
  accent family `#7f72e4`-vs-`#614ad3`) but Footer 11 is DARK, uses a 4×
  `col-lg-3` grid (not 3 auto + col-md-4), has a brand + news layout (not
  store links + subscribe form), and Poppins (not Roboto).
- **Footer band:** `.footer-01` — `background: #0d1824`, `position: relative`,
  `z-index: 0`, `overflow: hidden`; footer global `padding: 7em 0`. Base
  link color `#7f72e4`, paragraphs `rgba(255,255,255,.6)`, nav/news links
  `rgba(255,255,255,.7)`, copyright `#999999`.
- **Blob watermark:** `.footer-01:after` — `url(../images/blob-shape.svg)`,
  800×800px at `top: -300px; left: -100px`, `opacity: .05`, `z-index: -1`.
  NEVER copy the SVG asset — approximate with an inline SVG blob or a
  radial-gradient at the same position/size/opacity (subtle, behind
  everything).
- **Brand accent:** `#7f72e4` (soft violet) — link color, heading underline,
  news meta links, social icon-button backgrounds, copyright heart.
- **Column headings:** `.footer-heading` — `font-size: 18px`,
  `margin-bottom: 30px`, `color: #fff`; `:after` underline 40×2px `#7f72e4`
  at `bottom: -4px; left: 0`.
- **Social buttons:** `ul.ftco-footer-social` — `li` inline-block,
  `margin: 0 10px 0 0`; `a` 40×40px `border-radius: 50%`,
  `background: #7f72e4`, `color: #fff`, glyph 20px absolutely centered.
  Icons: **Twitter, Facebook, Instagram** (ion-logo-*) — lucide REMOVED
  brand icons → inline SVG (simple-icons paths) + `aria-label`s.
- **News blocks:** `.block-21.mb-4.d-flex` — `a.img.mr-4.rounded` 80×80px
  (radius .25rem, picsum placeholders `seed/tailpiece-1|2/80/80`) + `.text`
  (`width: calc(100% - 100px)`): `h3.heading` 16px/400/lh 1.4 title link
  `rgba(255,255,255,.7)` + `div.meta` (12px inline items, 5px spacing, links
  `#7f72e4`): "Oct. 16, 2019" / "Admin" / "19". SAME title copy in both
  blocks (source repeats it — fine to keep or vary slightly).
- **Quick Links:** `ul.list-unstyled` — six `li > a.py-2.d-block` links
  `rgba(255,255,255,.7)`: Home, About, Services, Works, Blog, Contact.
  Column carries `pl-lg-5` (lg+ only).
- **Contact rows:** `.block-23` — `li` display table, lh 1.5, `margin-bottom:
15px`; `span.icon` 40px wide / 18px / `padding-top: 2px` /
  `rgba(255,255,255,.4)`; `span.text` `rgba(255,255,255,.6)`. Rows:
  pin + "203 Fake St. Mountain View, San Francisco, California, USA";
  call + "+2 392 3929 210"; send + "info@yourdomain.com". MapPin / Phone /
  Send exist in lucide-react (probe with `typeof`).
- **Copyright:** source: "Copyright © <year> All rights reserved | This
  template is made with ♥ by Colorlib.com" (heart violet) → recreation
  **"© <current year> Tailpiece. All rights reserved. Made with ♥ by
  Component Dock"** with the Component Dock link
  `https://www.componentdock.com/` — ColorLib must NOT appear in
  `apps/tailpiece`.
- **Grid (Bootstrap 4.5.3, reproduce responsively):** Row 1 = `col-md-6
col-lg-3` ×4 — TWO columns on md (≥768px), FOUR on lg (≥992px), stacked
  full-width with `mb-4` gaps below md (`mb-md-0` removes on md+). Row 2 =
  single centered `col-md-12.text-center` with `mt-5`. No order flips, no
  horizontal scroll.
- **Images:** TWO news thumbnails only (80×80) → picsum. No other assets.
- **A11y:** semantic `<footer>` + main landmark; accessible names for the 3
  icon-only social links (source has bare spans with title tooltips);
  `aria-hidden` on decorative contact icons; focus-visible rings on all
  interactive elements.

## Structure order (1:1)

1. `main` → filler `section.ftco-section` (`#f8f8f8`, source `padding:
12em 0`, centered demo label — source: "Footer #01").
2. `footer.footer-01` (dark `#0d1824`, `padding: 7em 0`, relative/overflow
   hidden + blob watermark) → `div.container`:
   - `div.row` (top grid, 4 columns on lg / 2 on md):
     a. `div.col-md-6.col-lg-3.mb-4.mb-md-0` — brand wordmark heading +
     lorem paragraph + `ul.ftco-footer-social` — 3 circular violet
     buttons (Twitter, Facebook, Instagram)
     b. `div.col-md-6.col-lg-3.mb-4.mb-md-0` — "Latest News" heading + 2×
     `.block-21` rows (80×80 rounded thumb + title link + meta
     date/Admin/19)
     c. `div.col-md-6.col-lg-3.pl-lg-5.mb-4.mb-md-0` — "Quick Links"
     heading + 6 stacked links (Home, About, Services, Works, Blog,
     Contact)
     d. `div.col-md-6.col-lg-3.mb-4.mb-md-0` — "Have a Questions?" heading
     - 3 contact rows (pin/address, call/phone, send/email)
   - `div.row.mt-5` → `div.col-md-12.text-center` → `p.copyright` —
     "© <year> Tailpiece. All rights reserved. Made with ♥ by Component
     Dock" (violet heart, Component Dock link)

## Implementation tasks

- [ ] Scaffold `apps/tailpiece` (copy simplest existing app; package
      `@free-react-templates/tailpiece`; `public/CNAME` =
      `tailpiece.free.componentdock.com`; homepage =
      `https://tailpiece.free.componentdock.com`); register the workspace in
      `package-lock.json` (root `npm install` before commit)
- [ ] `index.html`: title "Tailpiece — Footer", Google Fonts `<link>` for
      Poppins (weights 400 + 700; the source loads 300–900 but only 400/700
      are exercised by the footer)
- [ ] `src/index.css`: `@theme` tokens — `--color-brand: #7f72e4`; footer bg
      `#0d1824`; muted text `rgba(255,255,255,.6)`; link text
      `rgba(255,255,255,.7)`; copyright `#999`
- [ ] Components: `Filler.tsx` (light-gray ~full-viewport area + centered
      demo label), `Footer.tsx` (semantic `<footer>` + dark band + blob
      watermark + both rows), `BrandColumn.tsx` (wordmark + blurb +
      `SocialButtons.tsx` — 3 inline-SVG brand icons with aria-labels),
      `NewsColumn.tsx` (heading + 2 news rows: picsum thumb + title + meta),
      `LinksColumn.tsx` (heading + stacked links), `ContactColumn.tsx`
      (heading + 3 icon/text rows), `CopyrightBar.tsx` (year + brand + heart + Component Dock link)
- [ ] Tests (TDD, 100% coverage): title/landmarks; filler; footer band tokens
      (dark bg, padding, blob presence); brand column (wordmark, blurb, 3
      social buttons with aria-labels); news blocks (thumbnails, titles, meta
      row); quick links exact copy; contact rows (icons + text); copyright
      (year, heart, Component Dock link, NO ColorLib string); responsive
      stacking (md 2-across / lg 4-across / below-md stacked); a11y
      focus-visible
- [ ] `npm run verify:app tailpiece` → full per-app gate green
- [ ] Open PR `feat/template-tailpiece` → merge immediately
      (`gh pr merge --squash --delete-branch`)
- [ ] Bookkeep TEMPLATES.md line 787 `[x]` + surge URL
      `https://tailpiece.free.componentdock.com` (implementer's job — prep
      stream never touches markers)
