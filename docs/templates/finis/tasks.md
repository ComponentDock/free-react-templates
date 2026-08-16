# Finis (ColorLib Bootstrap Footer 10) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-finis`.

## Design notes (replication findings)

- **Original:** ColorLib "Bootstrap Footer 10" — a free footer-only component
  demo from the "Bootstrap Footer" series (source:
  https://colorlib.com/wp/template/bootstrap-footer-10/). The page body is a
  70vh light-gray filler strip; the deliverable is the footer. TEMPLATES.md
  has ONE copy (line 786, `- [ ]` unchecked — bookkeep `[x]` + surge URL when
  done). This prep: Bootstrap Footer 10 → **Finis** (Latin for "the end" —
  the classic closing word of books and films; continues the series'
  ending-themed names Colophon → Envoi → Epilogue → Coda → Outro → Finale →
  Postlude → Stretto → Fermata; no collision with `apps/`,
  `openspec/specs/`, `docs/templates/` — verified 2026-08-16).
- **PREVIEW PATH QUIRK (series-wide — see the colophon prep):**
  `https://preview.colorlib.com/theme/bootstrap-footer-10/` returns **HTTP
  404**. The live preview is served under the `/theme/bft/` prefix:
  **`https://preview.colorlib.com/theme/bft/bootstrap-footer-10/`**.
- **Preview DOM analyzed (LIVE, fetched via curl):**
  `https://preview.colorlib.com/theme/bft/bootstrap-footer-10/` (HTTP 200,
  18,448 bytes, `<title>Footer 10</title>`). Stylesheets:
  `fonts/icomoon/style.css` (icon font — FontAwesome 4 codepoints verified:
  facebook `\f09a`, twitter `\f099`, pinterest `\f0d2`, instagram `\f16d`,
  behance `\f1b4`), `css/bootstrap.min.css` (Bootstrap **v4.5.3**),
  `css/style.css` (2,578 bytes — a **DEDICATED** sheet containing ONLY
  `.footer-39201` rules; verified no other `footer-\d+` class in HTML or
  sheet). No JS behavior (jquery/popper/bootstrap.min.js load but the footer
  is static — none needed in the recreation). No Google Fonts `<link>` —
  cf-fonts inline `@font-face` blocks load **Roboto**, **Poppins** and
  **Source Serif Pro**; the footer sets NO font-family override, so it
  inherits Roboto — **Poppins + Source Serif Pro are loaded but NEVER used**
  (theme leftovers) — the recreation adds a Google Fonts `<link>` for
  **Roboto ONLY** (do NOT add Poppins like footer-09/Fermata).
- **Screenshot:** `bootstrap-footer-10.jpg` (viewed in browser, 1200×972,
  AVIF-encoded despite the .jpg name) — light-gray demo area with "Footer
  #10" centered; below it a WHITE footer band: a FOUR-column grid (Store /
  About / Legal / Subscribe — gray stacked links under bold black 16px
  headings; the Subscribe column has a blurb, a light-gray pill email input
  "Enter your e-mail" and a violet/periwinkle rounded "Send" button), then a
  thin horizontal divider, then a bottom bar with small gray "© 2019 All
  Rights Reserved." on the left and five small gray social icons (Facebook,
  Twitter, Pinterest, Instagram, Behance) on the right. **NO variance
  between screenshot and live DOM.** Light + minimal with generous
  whitespace; the ONLY accent is the violet `#614ad3` (button + hovers).
- **Design rhythm:** COMPONENT template, not a landing page — no navbar, no
  hero, no logo, no cards, no images. Page = light filler (70vh) + LIGHT
  white footer. It is the STORE variant of the series: the first with
  STACKED (block) nav links, the first with a SUBSCRIBE FORM (pill
  input + absolute violet pill button), and the first with a right-aligned
  monochrome social bar. Closest cousin: Fermata (footer 09 — same violet
  accent family and `7rem` padding) but Footer 10 replaces the single
  centered column with a 4-column grid + bottom bar, uses Roboto (not
  Poppins), stacks its links, adds the form, and swaps Dribbble for Behance.
- **Footer band:** `.footer-39201` — `padding: 7rem 0`, `color: #9d9d9d`;
  **NO background color, NO image, NO overlay** — the white page shows
  through (LIGHT variant; do NOT copy Stretto's `rgba(0,0,0,0.7)` photo
  band). Content wrapper: `div.container` → two rows.
- **Brand accent:** `#614ad3` (violet/periwinkle) — submit-button background
  AND the hover color for nav links and social icons; the only non-neutral
  color at rest.
- **Column headings:** `h3` — `font-size: 16px`, `font-weight: 900`,
  `color: #000`, `margin-bottom: 20px` (all four headings: Store, About,
  Legal, Subscribe).
- **Nav links (Store/About/Legal):** `ul.list-unstyled.nav-links` — STACKED
  (`li` `display: block`, `margin-bottom: 10px`; `a` `color: #9d9d9d`, hover
  **`#614ad3`**). Exact copy: Store → Men, Women, Children, New Arrivals,
  Top Brands, Special Offers; About → About us, Clients, Services, Best
  sellers, Blog, Contact; Legal → Terms & Conditions, Privacy Policy,
  Legality, Author License.
- **Subscribe form:** `form.subscribe` (`position: relative`) →
  `input.form-control` placeholder "Enter your e-mail" (bg `#e6e6e6`,
  radius 30px, height 50px, `padding-left: 30px`, `padding-right: 130px`,
  `border: none`, text `#000`, placeholder `#b3b3b3` italic 14px) +
  `input.btn.btn-submit` `value="Send"` (bg `#614ad3`, height 40px, radius
  30px, padding `0 30px`, `#fff`, bold, `position: absolute; top: 5px;
right: 5px`, shadow `0 2px 2px 0 rgba(0,0,0,0.2)`). The input's
  `padding-right: 130px` reserves room for the overlaid button. Above the
  form: `p.mb-4` lorem-ipsum blurb (inherits `#9d9d9d`).
- **Bottom bar:** `div.col-12` → `div.border-top.my-5` (divider, Bootstrap
  `#dee2e6`, 3rem vertical margin) → `div.col-md-6` `p > small` "© 2019 All
  Rights Reserved." (80% size, `#9d9d9d`) → `div.col-md-6.text-md-right`
  `ul.social.list-unstyled` — FIVE icon-only links (`li` `display:
inline-block`; `a` `display: inline-block`, `padding: 10px`,
  `color: #9d9d9d`, hover **`#614ad3`**): Facebook, Twitter, Pinterest,
  Instagram, **Behance** (NOT Dribbble — unlike footer-09/Fermata).
  **lucide-react REMOVED brand icons** (probe with `typeof`) → inline SVG
  brand glyphs (simple-icons paths) + `aria-label`s.
- **Copyright:** source has NO brand name — "© 2019 All Rights Reserved." →
  recreation **"© <current year> Finis. All Rights Reserved."** + Component
  Dock link `https://www.componentdock.com/`.
- **Grid (Bootstrap 4.5.3, reproduce responsively):** Row 1 = three equal
  auto-width `col-md` + one `col-md-4` (Subscribe) — 4 across on md+
  (≥768px), stacked full-width with `mb-4` gaps below md (`mb-md-0` removes
  them on md+). Row 2 = `col-md-6` + `col-md-6.text-md-right` — copyright
  left / social right on md+; stacked below md, social left-aligned. No
  order flips, no horizontal scroll.
- **Images:** ZERO — this variant has no images at all (no background photo,
  no cards, nothing).
- **A11y:** semantic `<footer>` + main landmark; accessible names for the 5
  icon-only social links (source has bare spans — recreation adds them);
  accessible label for the subscribe input (placeholder alone is not
  sufficient); focus-visible rings on all interactive elements.

## Structure order (1:1)

1. `main` → filler `.content` (`#f8f9fa`, ~70vh, centered demo label —
   source: "Footer #10").
2. `footer.footer-39201` (white/transparent bg, `padding: 7rem 0`, base
   color `#9d9d9d`, Roboto) → `div.container`:
   - `div.row` (top grid, 4 columns on md+):
     a. `div.col-md.mb-4.mb-md-0` — h3 "Store" + 6 stacked links (Men,
     Women, Children, New Arrivals, Top Brands, Special Offers)
     b. `div.col-md.mb-4.mb-md-0` — h3 "About" + 6 stacked links (About us,
     Clients, Services, Best sellers, Blog, Contact)
     c. `div.col-md.mb-4.mb-md-0` — h3 "Legal" + 4 stacked links (Terms &
     Conditions, Privacy Policy, Legality, Author License)
     d. `div.col-md-4.mb-4.mb-md-0` — h3 "Subscribe" + blurb `p` +
     `form.subscribe` (pill input "Enter your e-mail" + absolute violet
     pill button "Send")
   - `div.row.align-items-center` (bottom bar):
     e. `div.col-12` → `div.border-top.my-5` divider
     f. `div.col-md-6` → `p > small` "© <year> Finis. All Rights
     Reserved." + Component Dock link
     g. `div.col-md-6.text-md-right` → `ul.social` — 5 icon-only links
     (Facebook, Twitter, Pinterest, Instagram, Behance)

## Implementation tasks

- [ ] Scaffold `apps/finis` (copy simplest existing app; package
      `@free-react-templates/finis`; `public/CNAME` =
      `finis.free.componentdock.com`; homepage =
      `https://finis.free.componentdock.com`); register the workspace in
      `package-lock.json` (root `npm install` before commit)
- [ ] `index.html`: title "Finis — Footer", Google Fonts `<link>` for
      Roboto ONLY (NOT Poppins, NOT Source Serif Pro)
- [ ] `src/index.css`: `@theme` token — brand accent `--color-brand:
    #614ad3`; base footer text `#9d9d9d`; column-heading `#000`
- [ ] Components: `Filler.tsx` (light-gray ~70vh area + centered demo
      label), `Footer.tsx` (semantic `<footer>` + both rows),
      `NavColumn.tsx` (heading + stacked links, reused ×3),
      `SubscribeForm.tsx` (pill input + absolute pill button),
      `SocialIcons.tsx` (5 inline-SVG brand icons + aria-labels)
- [ ] Tests (TDD, 100% coverage): title/landmarks; filler; footer band
      tokens; column headings + exact link copy + hover colors; subscribe
      form (input placeholder/pill styles, button label, overlay
      positioning); bottom bar (divider, copyright text + Component Dock
      link, 5 social aria-labels); responsive stacking (md+/below md);
      a11y focus-visible
- [ ] `npm run verify:app finis` → full per-app gate green
- [ ] Open PR `feat/template-finis` → merge immediately
      (`gh pr merge --squash --delete-branch`)
- [ ] Bookkeep TEMPLATES.md line 786 `[x]` + surge URL
      `https://finis.free.componentdock.com` (implementer's job — prep
      stream never touches markers)
