# Basil (ColorLib Accordion 11) — Tasks & Design Notes

> Prep artifacts (spec + research) prepared on `main` by the prep stream.
> Implementation ships later on `feat/template-basil` by an implementer
> stream — this folder is the handoff.

## Design notes

- **Original:** ColorLib "Accordion 11" — free single-page FAQ-style
  accordion component template (source:
  https://colorlib.com/wp/template/accordion-11/). TEMPLATES.md row: line
  649 (**Bootstrap Accordions (20)**). The `accordion-11` slug appears
  exactly once (no dup rows to mark).
- **Recreation name:** Basil (the culinary herb — same botanical family as
  Thyme 10, Sprig 09, Clover 06, Kelp 05, Mentha 03; the other accordion
  names are Pleat 01, Forkful 02, Stash 04, Gusset 07, Crimp 08). App
  folder `apps/basil`, package `@free-react-templates/basil`,
  `public/CNAME` = `basil.free.componentdock.com`, `"homepage"` =
  `https://basil.free.componentdock.com`.
- **Live preview DOM analyzed (REACHABLE, verified 2026-08-14):** the
  default `https://preview.colorlib.com/theme/accordion-11/` returns 404 —
  the REAL preview is `https://preview.colorlib.com/theme/bac/accordion-11/`
  (HTTP 200, 19,415 bytes HTML; same `/bac/` subpath pattern as Accordion
  01–10). Stylesheets: `css/style.css` (1.5KB — all the accordion tokens)
  - `css/bootstrap.min.css` (160KB base) + `fonts/icomoon/style.css`
    (loaded but UNUSED — no icons in the markup). Screenshot
    (`accordion-11.jpg`, 1200×972 JPG) browser-verified 2026-08-14 AND
    cross-checked with browser-computed styles on the live page (exact
    colors below).
- **LIGHT THEME — do NOT copy Thyme's dark navy/slate styling.** This
  template is the visual OPPOSITE of Accordion 10: `#efefef` page, white
  cards, blue open-state. Fidelity is about the light palette + the
  color/shadow state signal (NO icons).
- **Heading:** the `h2` says "Bootstrap Accordion #1" (WITH "Bootstrap ");
  the source `<title>` is "Accordion #1". Recreate the h2 VERBATIM as
  "Bootstrap Accordion #1". App `<title>` = "Basil — FAQ Accordion".
- **Computed-style-verified rendering (live page, 2026-08-14):** page bg
  `rgb(239,239,239)` = `#efefef`; heading 20px/500 `#212529`, centered,
  margins `48px 0` (`my-5`); `.content` padding `7rem 0` (112px);
  accordion in a plain `.container` (max-width 1140px at ≥1200px — FULL
  width, NO `col-*` narrowing like Thyme's `col-xl-5`). Cards
  (`.accordion-item`): bg `#fff`, `border-radius: 4px`, `margin-bottom:
10px` (gap), `position: relative`. Header button: `display: block`,
  `width: 100%`, `padding: 15px`, `text-align: left`, `border-radius:
4px`, color `#999` (closed) / `#007bff` (open) / `#000` (hover), Roboto
  16px/400, no text-decoration. Body: padding `0 20px 20px`, color `#888`
  (the sheet's `p { color: #b3b3b3 }` does NOT apply — body copy is bare
  text, not a `<p>`).
- **Structure observed (1:1):** `div.content` (padding 7rem 0) →
  `div.container` → `h2.my-5.text-center` "Bootstrap Accordion #1" →
  second `div.container` → `div.custom-accordion#accordion_1` → 3
  `.accordion-item` cards:
  1. **"How to download and register?"** — `h2.mb-0` → `button.btn.btn-link`
     (`data-toggle="collapse"`, `data-target="#collapseOne"`,
     `aria-expanded="true"`, `aria-controls="collapseOne"`, NO `.collapsed`)
     → body `#collapseOne.collapse.show` → `.accordion-body` → single
     602-char placeholder paragraph.
  2. **"How to create your paypal account?"** — `.collapsed`,
     `aria-expanded="false"`; body `#collapseTwo.collapse` (closed) →
     `.accordion-body` → SAME placeholder paragraph.
  3. **"How to link your paypal and bank account?"** — same as card 2,
     closed; IDENTICAL body paragraph (all three bodies are the same
     602-char "Anim pariatur cliche reprehenderit…" Bootstrap example
     copy — paraphrase it, keep ~2 short generic support paragraphs).
     NO footer in the original — add the mandatory Component Dock
     attribution footer.
- **State CSS (recreate via `aria-expanded`-driven Tailwind / React
  `openIndex` state):**
  - `js/main.js` toggles `.active` on the `.accordion-item` whose collapse
    is showing (initial = the `aria-expanded="true"` one).
  - `.custom-accordion .accordion-item.active`: `z-index: 2`, `box-shadow:
0 15px 30px 0 rgba(0,0,0,0.2)` — computed confirms closed cards have
    `box-shadow: none`; the OPEN card is the ONLY one with a shadow.
  - `.active .btn-link`: `color: #007bff` (computed `rgb(0,123,255)` on
    the open card vs `rgb(153,153,153)` = `#999` on closed cards).
  - Hover on any header: `color: #000`.
  - NO icon/glyph swap (unlike Thyme) — state is pure text color +
    shadow.
- **Copy (verbatim, all 3 bodies):** "Anim pariatur cliche reprehenderit,
  enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon
  officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa
  nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a
  bird on it squid single-origin coffee nulla assumenda shoreditch et.
  Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
  nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo.
  Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth
  nesciunt you probably haven't heard of them accusamus labore sustainable
  VHS." — paraphrase per replication rules.

## Tasks

1. [ ] Scaffold `apps/basil` (copy the simplest existing app; rename
       package to `@free-react-templates/basil`; `public/CNAME` =
       `basil.free.componentdock.com`; `"homepage"` =
       `https://basil.free.componentdock.com`; register
       `injectUiSource()` in `vite.config.ts`; copy the MemoryStorage
       polyfill from `apps/cura/src/test/setup.ts` into
       `src/test/setup.ts`).
2. [ ] Root `npm install` so `package-lock.json` registers
       `@free-react-templates/basil` (deploy Action runs `npm ci`).
3. [ ] `index.html`: title "Basil — FAQ Accordion"; Google Fonts `<link>`
       for Roboto (300/400/500).
4. [ ] `src/index.css`: `@theme` tokens — `#efefef` page, `#fff` cards,
       `#007bff` accent, `#999`/`#000` question colors, `#212529`
       heading, `#888` body, open shadow `0 15px 30px 0 rgba(0,0,0,0.2)`;
       Poppins NOT used — Roboto only.
5. [ ] Components (TDD, 100% coverage): - `Navbar` — NOT in the reference; skip (no nav in the original). - `Heading` — centered h2 "Bootstrap Accordion #1" (20px/500
       `#212529`, my-5 margins). - `Accordion` / `FaqItem` — 3 cards, `openIndex` state (default 0),
       one panel open at a time; active card = blue question + shadow;
       `aria-expanded`/`aria-controls`/`role="region"`; keyboard
       operable. Text-only headers (NO icons). - `Footer` — minimal Component Dock link
       (`https://www.componentdock.com/`).
6. [ ] `App.tsx` composes: Heading → Accordion → Footer.
7. [ ] Tests mirror the spec's Gherkin scenarios (heading layout, three
       cards + default states, single-open, closed/open styling, toggle,
       keyboard, body padding, footer link).
8. [ ] `scripts/verify-app.sh basil` green (typecheck + lint + vitest
       100% + build).
9. [ ] Commit `feat: add Basil (FAQ accordion) template`, PR +
       immediate squash merge, then TEMPLATES.md line 649 `[~]` → `[x]` +
       surge URL + homepage + `npm run readme:status`.
10. [ ] PR description: real preview URL
        (`preview.colorlib.com/theme/bac/accordion-11/`), design tokens,
        LIGHT theme (opposite of Thyme), paraphrased copy.

## Fidelity traps

- **Don't use Thyme's palette** — `#efefef`/white/`#007bff`, not
  `#4e5e6c`/`#1c2938`/`#38ade0`. Same source series, completely different
  visual.
- **No icons** on the headers — the reference has zero icon elements; the
  state signal is blue text + shadow. Do not add chevrons.
- **Full-width container** — no `col-md-7 col-lg-6 col-xl-5` narrowing
  (that was Thyme's layout); the accordion spans the whole `.container`
  (max 1140px).
- **Body copy is bare text** — `#888`, padding `0 20px 20px`; the
  `#b3b3b3` `p` rule never applies.
- **Shadow only on the open card** — closed cards compute `none`.
- **Three cards, not four** — Accordion 11 has 3 FAQ items (vs Thyme's 4
  steps); all three bodies carry the same placeholder paragraph.
