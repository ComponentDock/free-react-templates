# Propylaeum (ColorLib Modal 18) — Tasks & Design Notes

> Prep artifacts prepared on `main`. Recreation name: **Propylaeum** (NEW
> name — the ColorLib source keeps its name "Modal 18"). Implementation
> ships on `feat/template-propylaeum` per the standard PR flow.

## Design notes

- **Original:** ColorLib "Modal 18" — free single-page promo/onboarding-modal
  component template (source: https://colorlib.com/wp/template/modal-18/).
  TEMPLATES.md row: line 817 (**Bootstrap Modals (20)**, header line 798).
  The `modal-18` slug appears exactly once (no dup rows to mark).
- **Live preview DOM analyzed (REACHABLE, verified 2026-08-16):** the default
  `https://preview.colorlib.com/theme/modal-18/` returns **404** — the REAL
  preview is `https://preview.colorlib.com/theme/bootstrap/modal-18/`
  (HTTP 200, 18.2KB HTML; the Bootstrap UI-component series is hosted under
  the `/theme/bootstrap/` prefix — same as Parvis/Modal 17). Stylesheets:
  `css/style.css` (2.9KB — the demo's custom styles, token source) and
  `css/bootstrap.min.css` (178KB — Bootstrap 4.3.1 **customized:
  `.btn-primary` = `#3e64ff`** royal blue, NOT the default `#007bff` and NOT
  Parvis/Modal 17's burnt orange `#ed5107`; **`.btn-link` = `#3e64ff`**,
  weight 400; `.btn-secondary` standard `#6c757d`).
  `fonts/icomoon/style.css` is linked but UNUSED in the body. Webfonts via
  cf-fonts @font-face: **Roboto 300/400** (page) AND **Poppins 300/400/500/900**
  (modal — the custom `.modal { font-family: "Poppins", sans-serif }` rule).
  Screenshot (`modal-18.jpg`, 1200×972, AVIF) browser-verified 2026-08-16:
  the page shown with the modal OPEN — white rounded card centered on a
  light-gray page: top half is a flat vector illustration (dark-haired woman
  on a purple rocky landscape under a cyan gradient sky, floating checkmark
  speech bubbles, dark-blue top strip with a checkmark) on the light-cyan
  `#b2fcff` band; bottom half is the bold dark heading "Introducing Work
  from Anywhere", a small gray paragraph, and the right-aligned row of a
  muted royal-blue "No thanks" text link and a solid royal-blue rectangular
  "Get the app" button with white text. (The screenshot's browser chrome
  reads "preview.carrd.co" — a capture-tool artifact; the content matches
  the modal-18 DOM exactly.)
- **Structure observed (1:1):**
  - `div.container.content` (height 100vh via `.content` — recreate with
    `min-h-screen`) → `div.row.align-items-center.content` →
    `div.col-12.text-center`: `h3.mb-4` "Modal #8" +
    `button.btn.btn-secondary.px-4.py-3` "Launch modal" (gray `#6c757d`
    fill, white text, 4px radius).
  - `div.modal.fade#exampleModalCenter` (tabindex -1, role dialog,
    aria-hidden true; `display:none` until toggled; custom:
    `font-family: Poppins`, `border-radius: 7px`, `overflow: hidden`, bg
    transparent; dark backdrop) → `div.modal-dialog.modal-md.modal-dialog-centered`
    (**`modal-md` has NO rule in Bootstrap 4.3.1 → default max-width 500px**)
    → `div.modal-content.rounded-0` (bg transparent, border none — the
    radius-0 `!important` wrapper is invisible) → `div.modal-body.py-0`
    (custom: bg **`#fff`**, `border-radius: 7px`, `overflow: hidden`,
    `box-shadow: 0 10px 50px -10px rgba(0,0,0,0.9)`):
    - `div.d-block.main-content` (BLOCK column — image stacked ABOVE text):
      - `img.img-fluid[src="images/undraw_updated_rr85.svg"][alt="Image"]`
        with inline `style="background-color: #b2fcff;"` (full-width flat
        illustration on the light-cyan band).
      - `div.content-text.p-4`:
        - `h3.mb-4` "Introducing Work from Anywhere" (Poppins, weight 900,
          **#000**, 22px).
        - `p.mb-4` "All their equipment and instruments are alive. The sky
          was this is cloudless and of a deep dark blue. A shining crescent
          far beneath the flying vessel." (#777, 14px — generic filler;
          paraphrase as the same kind of intro line).
        - `div.d-flex` → `div.ml-auto` (right-aligned row):
          `a.btn.btn-link` "No thanks" (`data-dismiss="modal"`; **#3e64ff**,
          weight 400, NO underline) + `a.btn.btn-primary.px-4` "Get the
          app" (**#3e64ff** fill, white text, 4px radius, 10px vertical
          padding via `.modal .btn-primary { padding-top/bottom: 10px }`).
  - NO modal-header, NO close ×, NO icons, NO form — dismiss via "No
    thanks"/backdrop/Escape only. `js/main.js` auto-open is COMMENTED OUT.
  - NO navbar, NO other sections. NO footer in the original — add the
    mandatory Component Dock attribution footer (repo convention).
- **Design tokens:** royal blue **#3e64ff** (btn-primary fill + border AND
  btn-link text — the ONLY accent); cyan band **#b2fcff** (inline bg on the
  illustration image); launch gray **#6c757d** (btn-secondary); card
  **#fff** (white, 7px radius — NOT Parvis's `#efefef` square); page
  **#fff**; modal h3 **#000** (22px, weight 900, Poppins); modal p **#777**
  (14px); global p **#b3b3b3** (weight 300); modal shadow
  `0 10px 50px -10px rgba(0,0,0,0.9)`; fonts **Poppins 300/400/500/900**
  (ALL dialog text) + **Roboto 300/400** (page); ALL buttons radius **4px**
  (no pills); dialog max-width 500px.
- **Design approach:** one interactive surface. White full-viewport centered
  launch page (h3 "Propylaeum" + gray button) → state-driven modal overlay
  (no Bootstrap): dark backdrop fade, centered 500px WHITE 7px-rounded card
  with the heavy shadow, full-width illustration band on the `#b2fcff`
  cyan strip, "Introducing Work from Anywhere" heading + gray intro line,
  right-aligned royal-blue "Get the app" button + "No thanks" dismiss link,
  minimal Component Dock footer. One picsum placeholder image (under the
  cyan band), no icons (skip lucide entirely).

## Implementation tasks

1. **Scaffold** `apps/propylaeum` from the simplest existing app (e.g.
   `apps/pleat` or `apps/vesper`): rename package to
   `@free-react-templates/propylaeum`, `public/CNAME` =
   `propylaeum.free.componentdock.com`, homepage
   `https://propylaeum.free.componentdock.com`. Run `npm install` at root so
   `package-lock.json` registers the workspace (grep
   `free-react-templates/propylaeum` to verify).
2. **Theme (index.css)** — `@theme` tokens:
   `--color-brand: #3e64ff` (royal blue), `--color-band: #b2fcff` (cyan
   illustration strip), `--color-ink: #000`, `--color-para: #777`,
   `--color-launch: #6c757d`, `--color-body: #b3b3b3`; Google Fonts
   `<link>`s in index.html: **Roboto (300/400)** AND **Poppins
   (300/400/500/900)**. Body stack = Roboto; dialog stack = Poppins.
3. **Data (src/data.ts)** — copy strings: brand "Propylaeum", button
   "Launch modal", heading "Introducing Work from Anywhere", intro line
   (paraphrased two-sentence filler), dismiss "No thanks", CTA "Get the
   app", and the picsum image URL
   (`https://picsum.photos/seed/propylaeum-1/800/450` — ideally a
   work/travel/laptop-ish subject; screen the seed per the picsum-seed
   pitfall before committing).
4. **Components (src/components/)**:
   - `LaunchPage.tsx` — full-viewport (`min-h-screen`) white section,
     centered column: h3 "Propylaeum" + gray button (bg `#6c757d`, white
     text, `rounded-[4px]`, px-4 py-3). Button opens the modal (state lifted
     to App or context).
   - `PromoModal.tsx` — `role="dialog"` `aria-modal="true"`, visible only
     when open (conditional render; backdrop + Escape + "No thanks" close;
     focus the modal heading on open, restore to launch button on close —
     use a ref + useEffect). 500px card (`max-w-[500px]`), `rounded-[7px]`,
     bg white (`shadow-[0_10px_50px_-10px_rgba(0,0,0,0.9)]`). NO close
     button — matching the source.
   - Illustration band: full-width `<img>` (picsum seed) with the
     `#b2fcff` background band on the image element (source puts
     `background-color: #b2fcff` inline on the `<img>` — recreate it as an
     inline style or a Tailwind `bg-[#b2fcff]` class on the img). Decorative
     alt ("" or "Image"-equivalent) — the source alt is "Image".
   - `Footer.tsx` — minimal muted line linking
     `https://www.componentdock.com/` ("More templates at Component Dock").
5. **App.tsx** — compose `LaunchPage` (in `<main>`) + `Footer` (in
   `<footer>`), hold `isOpen` state, render `PromoModal` when open.
   `main.tsx` sets document title "Propylaeum — Promo Modal".
6. **Tests (TDD, 100% coverage)** — one `describe` per component mirroring
   the spec's Gherkin scenarios:
   - LaunchPage: heading + gray button render; button opens the modal.
   - PromoModal: dialog role/aria-modal; open shows backdrop + 500px white
     7px-rounded card; close via backdrop click, Escape, AND the "No thanks"
     link; NO close × button rendered (queryByRole('button', { name:
     /close/i }) absent); focus management (heading focused on open, launch
     btn refocused on close).
   - Promo content: illustration img present with the `#b2fcff` band + the
     picsum src; heading + intro paragraph render (heading Poppins 900
     token applied via class); action row: "No thanks" link (`#3e64ff`,
     no underline) + "Get the app" button (royal blue, white text, 4px
     radius, px-4) present; "Get the app" does NOT navigate (client-side
     demo).
   - Footer: Component Dock link with correct href.
   - App: full composition — main landmark contains launch section,
     contentinfo contains footer.
   - jsdom note: if a `MemoryStorage` polyfill pattern is needed (jsdom 30
     removed localStorage), copy it from `apps/cura/src/test/setup.ts` —
     only if the app uses localStorage (this template likely doesn't).
7. **Gate + ship** — `scripts/verify-app.sh propylaeum` (typecheck + lint +
   100% coverage tests + build), `npm run spec:validate`, then the standard
   PR → immediate squash merge flow; bookkeeping marks the single
   TEMPLATES.md row (line 817) `[x]` with
   `https://propylaeum.free.componentdock.com` + `npm run readme:status`.

## Pitfalls / notes for the implementer

- **ROYAL BLUE accent `#3e64ff`, NOT orange.** Modal 18's customized
  Bootstrap bundle uses `#3e64ff` for BOTH `.btn-primary` and `.btn-link`.
  Do NOT copy Parvis/Modal 17's burnt orange `#ed5107` or Portico/Modal 01's
  rose `#fb8691`. The blue is the ONLY accent (button + link share it).
- **White card, 7px radius — no top bar.** The modal-body is `#fff` with
  `border-radius: 7px`, heavy shadow, and NO border-top accent (unlike
  Parvis's `#efefef` square card with the 4px `#ed5107` bar).
- **Dialog width 500px** — `modal-md` has no Bootstrap rule; the default
  `.modal-dialog` max-width 500px applies. Not 450px (Modal 01), not 800px
  (Modal 16).
- **Illustration band is BLOCK-stacked, not side-by-side.** `.main-content`
  is `d-block`: image on top (full dialog width), text below. The
  `.promo-img { flex: 0 0 50% }` rule in the bundle is DEAD CODE for this
  demo (that was Peristyle/Modal 16's 50/50 layout) — do not recreate it.
- **The `#b2fcff` band belongs ON the image element** (the source styles the
  `<img>` itself with inline `background-color: #b2fcff`). Keep the band on
  the img so the strip visually matches.
- **Fonts: two families.** Modal text = Poppins (weight 900 heading),
  page = Roboto. Load BOTH via Google Fonts. The h3 22px/900 rule only
  reads right with Poppins 900 actually loaded.
- **No close button, no header, no icons, no form** — the dismiss paths are
  "No thanks", backdrop click, and Escape. Don't add a decorative ×. Don't
  import lucide (grep the bundle: zero icon glyphs in the body).
- **No ColorLib asset may be copied** — the undraw SVG illustration is
  replaced by a picsum placeholder under the same cyan band. Screen the
  seed's subject first (picsum seeds are arbitrary — a "work from
  anywhere" vibe isn't guaranteed; prefer a descriptive seed that provably
  renders a fitting scene, per the seed-screening pitfall).
- Tailwind v4: `shadow-[...]` arbitrary values with commas work but
  underscores are safer (`shadow-[0_10px_50px_-10px_rgba(0,0,0,0.9)]`).
- **"Get the app" is a plain `<a href="#">`** in the source (inert). Keep it
  a non-navigating button-style link or a benign success state — matching
  the rest of the family.
- Modal a11y in tests: conditional rendering (dialog not in DOM when closed)
  keeps role queries unambiguous — avoid the `aria-hidden` dance entirely.
