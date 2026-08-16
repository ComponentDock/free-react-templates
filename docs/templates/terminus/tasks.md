# Terminus (ColorLib Bootstrap Footer 12) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-terminus`.

## Design notes (replication findings)

- **Original:** ColorLib "Bootstrap Footer 12" — a footer-only component demo
  (source: https://colorlib.com/wp/template/bootstrap-footer-12/). TEMPLATES.md
  has ONE copy (line 788, `- [ ]` unchecked — bookkeep `[x]` + surge URL when
  done). This prep: Bootstrap Footer 12 → **Terminus** ("the end point of a
  journey" — the twelfth entry in the footer series' ending-themed naming:
  Colophon → Envoi → Epilogue → Coda → Outro → Finale → Postlude → Stretto →
  Fermata → Finis → Tailpiece → Terminus; no collision with `apps/`,
  `openspec/specs/`, `docs/templates/`, `origin/main` — verified 2026-08-16).
- **Preview DOM analyzed (LIVE, fetched via curl):**
  `https://preview.colorlib.com/theme/bft/bootstrap-footer-12/` (HTTP 200,
  12,139 bytes, `<title>Footer 02</title>` — variant label "Footer #02").
  **QUIRK:** the naive path `https://preview.colorlib.com/theme/bootstrap-footer-12/`
  returns HTTP 404 (9-byte "Not Found"); the whole footer series lives under
  the `/theme/bft/` prefix. Stylesheets: `css/ionicons.min.css` (glyphs
  `ion-logo-ionic`, `ion-ios-arrow-round-forward`, `ion-ios-heart`) +
  `css/style.css` (223,345 bytes, shared FTCO sheet — only the `.footer-02`
  block applies). Poppins via cf-fonts `@font-face` (weights 300–900); body
  15px/1.8. No JS behavior needed.
- **Screenshot:** `bootstrap-footer-12.jpg` (1200×972 AVIF, viewed in
  browser) — **matches the live DOM, no variance.** White filler with
  centered "Footer #02"; very dark charcoal footer (`#131719`); a white
  newsletter pill straddling the filler/footer boundary (transparent email
  input + tan uppercase "SUBSCRIBE"); five content columns — uppercase brand
  wordmark + lorem + tan "read more →", then Discover / About / Resources /
  Social link columns with faint hairlines; partner row "Our Partner:
  Company 01–06 · See All →"; bottom bar with copyright + ♥ Colorlib credit
  (left) and Terms / Privacy / Compliances (right).
- **Brand system:** footer bg **`#131719`**; accent **`#bba387`** (all
  links); subscribe button **`#bfa88e`** (deeper tan); headings 19px
  `rgba(255,255,255,.9)`; brand wordmark `#fff` uppercase; body copy
  `rgba(255,255,255,.3)`; column links `rgba(255,255,255,.4)` → hover
  `#fff`; partner/copyright text `rgba(255,255,255,.4)`; hairlines
  `rgba(255,255,255,.05)`; filler `#f8f8f8` (12em padding); footer
  `padding: 5em 0`.
- **Newsletter (signature detail):** `.subscribe { margin-top: -105px; }` —
  the white pill (`border-radius: 40px`, `padding: 3px`, shadow
  `0 -12px 21px -15px rgba(0,0,0,.1)`) is pulled UP so it overhangs the
  boundary between the light filler and the dark footer. Input: transparent,
  borderless, 16px, `height: 56px`, `color: rgba(0,0,0,.3)`. Submit:
  `width: 150px; height: 56px; background: #bfa88e; color: #fff; uppercase;
letter-spacing: 1px; border-radius: 40px`.
- **Icons (lucide-react):** `ArrowRight` (read more + See All),
  `Heart` (`aria-hidden`, copyright), partner glyphs — lucide REMOVED brand
  icons and Ionic is a brand mark, so render the six "Company 01–06" marks
  as tiny inline SVGs or neutral lucide glyphs (e.g. `Hexagon` / `Circle` /
  `Zap`) with `aria-hidden`, or plain text wordmarks. Probe every import
  with `typeof`. NO circular social buttons in this variant — Social is a
  plain text-link column.
- **Grid:** newsletter `col-10 col-lg-6` centered; main grid brand
  `col-md-4 col-lg-5` → inner `col-md-12 col-lg-8`, links wrapper
  `col-md-8 col-lg-7` → 4× `col-md-3` (side by side on md+); `.border-left`
  is set to a faint hairline then overridden `border: none` (render at most
  a subtle divider); partner `col` + `col-md-9` + `col.text-md-right`;
  bottom `col-md-6 col-lg-8` + `col-md-6 col-lg-4 text-md-right`. Stacked
  full-width with `mb-4` gaps below md. No horizontal scroll.
- **Images:** NONE — this variant has no photos, thumbnails, or background
  images (unlike Tailpiece/footer-11's news thumbnails). No picsum seeds.
- **A11y:** main/footer landmarks; the bare-placeholder email input needs a
  visually-hidden `<label>` or `aria-label`; heart + partner glyphs
  `aria-hidden`; focus-visible rings everywhere.

## Structure order (1:1)

1. `section.ftco-section` (filler: `padding: 12em 0`, `background: #f8f8f8`,
   centered h2 "Footer #02") — recreation may label with its own name
2. `footer.footer-02` (`background: #131719`, `padding: 5em 0`):
   a. Newsletter — `row justify-content-center` → `col-10 col-lg-6` →
   `div.subscribe.mb-5` (`margin-top: -105px`) → white pill
   `form.subscribe-form` → `form-group.d-flex`: email input
   (placeholder "Enter email address") + "Subscribe" tan pill button
   b. Main grid — brand column (`col-md-4 col-lg-5`): uppercase wordmark
   (own brand) + lorem paragraph + "read more →"; then `col-md-8 col-lg-7`
   → 4× `col-md-3` link columns: **Discover** (Buy & Sell, Merchant,
   Giving back, Help & Support) · **About** (Staff, Team, Careers, Blog) ·
   **Resources** (Security, Global, Charts, Privacy) · **Social**
   (Facebook, Twitter, Instagram, Googleplus)
   c. Partner bar — `row.partner-wrap.mt-5` (hairlines, `padding: 1em 0`):
   "Our Partner:" + Company 01–06 wordmarks + "See All →"
   d. Bottom bar — `row.mt-5`: left copyright "© <year> Terminus. All rights
   reserved. Made with ♥ by Component Dock" (heart aria-hidden); right
   Terms / Privacy / Compliances
3. Footer MUST link `https://www.componentdock.com/`; ColorLib must NOT
   appear anywhere in `apps/terminus`.

## Implementation tasks

- [ ] Scaffold `apps/terminus` (copy simplest existing app; package
      `@free-react-templates/terminus`; `public/CNAME` =
      `terminus.free.componentdock.com`; homepage =
      `https://terminus.free.componentdock.com`); register the workspace in
      `package-lock.json` (root `npm install` before commit)
- [ ] `index.html`: title "Terminus — Footer", Google Fonts `<link>` for
      Poppins (400 + 700)
- [ ] `src/index.css`: `@theme` tokens — `--color-brand: #bba387`;
      `--color-submit: #bfa88e`; footer `#131719`; text layers
      `rgba(255,255,255,.9/.4/.3)`; hairline `rgba(255,255,255,.05)`;
      filler `#f8f8f8`; pill shadow token
- [ ] Components: `Filler.tsx` (light-gray demo strip + centered label),
      `Newsletter.tsx` (white pill form, -105px overhang, labeled input +
      submit), `FooterColumns.tsx` (brand column + 4 link columns),
      `PartnerBar.tsx` ("Our Partner:" + 6 company marks + "See All"),
      `BottomBar.tsx` (copyright + Component Dock link + Terms/Privacy/
      Compliances)
- [ ] Tests (TDD, 100% coverage): title/landmarks; filler; newsletter (form
      semantics, input label, submit button, -105px overhang class, pill
      styling tokens); brand column (wordmark, paragraph, read-more +
      ArrowRight); 4 link columns (exact link lists, hover color class);
      partner bar (6 marks, See All); bottom bar (copyright text + year,
      Component Dock link, NO ColorLib string, legal links); responsive
      stacking classes; a11y focus-visible + aria-hidden
- [ ] `npm run verify:app terminus` → full per-app gate green
- [ ] Open PR `feat/template-terminus` → merge immediately
      (`gh pr merge --squash --delete-branch`)
- [ ] Bookkeep TEMPLATES.md line 788 `[x]` + surge URL
      `https://terminus.free.componentdock.com` (implementer's job — prep
      stream never touches markers)
