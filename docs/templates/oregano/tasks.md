# Oregano (ColorLib Accordion 12) — Tasks & Design Notes

> Prep artifacts (spec + research) prepared on `main` by the prep stream.
> Implementation ships later on `feat/template-oregano` by an implementer
> stream — this folder is the handoff.

## Design notes

- **Original:** ColorLib "Accordion 12" — free single-page FAQ-style
  accordion component template (source:
  https://colorlib.com/wp/template/accordion-12/). TEMPLATES.md row: line
  650 (**Bootstrap Accordions (20)**). The `accordion-12` slug appears
  exactly once (no dup rows to mark).
- **Recreation name:** Oregano (the culinary herb — same botanical family
  as Basil 11, Thyme 10, Sprig 09, Clover 06, Kelp 05, Mentha 03; the other
  accordion names are Pleat 01, Forkful 02, Stash 04, Gusset 07, Crimp 08).
  App folder `apps/oregano`, package `@free-react-templates/oregano`,
  `public/CNAME` = `oregano.free.componentdock.com`, `"homepage"` =
  `https://oregano.free.componentdock.com`.
- **Live preview DOM analyzed (REACHABLE, verified 2026-08-14):** the
  default `https://preview.colorlib.com/theme/accordion-12/` returns 404 —
  the REAL preview is `https://preview.colorlib.com/theme/bac/accordion-12/`
  (HTTP 200, 19,415 bytes HTML; same `/bac/` subpath pattern as Accordion
  01–11). Stylesheets: `css/style.css` (2,091B — all the accordion tokens)
  - `css/bootstrap.min.css` (base) + `css/owl.carousel.min.css` (loaded but
    UNUSED) + `fonts/icomoon/style.css` (USED — chevron glyphs `\e313`/
    `\e316`). Screenshot (`accordion-12.jpg`, 1200×972 JPG) browser-verified
    2026-08-14 AND cross-checked with browser-computed styles on the live
    page (exact colors below). NOTE: the screenshot frame shows a
    `preview.codyhouse.co` address bar — historical artifact of the original
    capture; the rendered design matches the live page exactly.
- **GREEN-HEADER variant — do NOT copy Basil's (Accordion 11) styling.**
  This template is in the SAME source series but a DIFFERENT visual:
  WHITE `#fff` page (Basil: `#efefef`), cards bordered `1px solid
#efefef`, OPEN card = solid GREEN `#72c02c` header with WHITE text
  (Basil: blue `#007bff` text + drop shadow), chevron icons on every
  header (Basil: text-only), NO shadows anywhere (Basil: shadow on active).
  Fidelity is about the green-header + chevron state signal.
- **Heading:** the `h2` says "Bootstrap Accordion #2" (WITH "Bootstrap ");
  the source `<title>` is "Accordion #2". Recreate the h2 VERBATIM as
  "Bootstrap Accordion #2". App `<title>` = "Oregano — FAQ Accordion".
- **Computed-style-verified rendering (live page, 2026-08-14):** page bg
  `rgb(255,255,255)` = `#fff`; heading 20px/500 `#212529`, centered,
  margins `48px 0` (`my-5`); `.content` padding `7rem 0` (112px);
  accordion in a plain `.container` (max-width 1140px at ≥1200px — FULL
  width, NO `col-*` narrowing). Cards (`.accordion-item`): bg `#fff`,
  `border-radius: 4px`, `margin-bottom: 10px` (gap), `position: relative`.
  Header button: `display: block`, `width: 100%`, `padding: 15px 15px 15px
40px` (40px left gutter for the icon), `text-align: left`,
  `border-radius: 4px`, `border: 1px solid #efefef` (closed) / `1px solid
transparent` (open), color `#999` (closed) / `#fff` (open), bg
  transparent (closed) / `#72c02c` (open), Roboto 16px/400. Active item:
  `z-index: 2`, NO shadow. Body: padding `20px` all sides, color `#888`
  (the sheet's `p { color: #b3b3b3 }` does NOT apply — body copy is bare
  text, not a `<p>`).
- **Structure observed (1:1):** `div.content` (padding 7rem 0) →
  `div.container` → `h2.my-5.text-center` "Bootstrap Accordion #2" →
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
     closed; identical body paragraph.
- **Icons (the state signal):** every header button has a `::before`
  chevron at `left: 15px`, vertically centered (`top: 50%` +
  `translateY(-50%)`). CLOSED: `\e313` = icomoon `keyboard_arrow_down`,
  color `#999`. OPEN (`[aria-expanded="true"]`): `\e316` = icomoon
  `keyboard_arrow_up`, color `#fff` (white on the green header). Recreate
  with lucide-react `ChevronDown`/`ChevronUp` (exports verified present
  2026-08-14), ~16–20px, in the 40px left gutter.
- **Body copy (verbatim, all three bodies IDENTICAL — 602 chars):**
  "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
  terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
  skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
  Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid
  single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh
  helvetica, craft beer labore wes anderson cred nesciunt sapiente ea
  proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
  beer farm-to-table, raw denim aesthetic synth nesciunt you probably
  haven't heard of them accusamus labore sustainable VHS." (Paraphrase
  freely — keep the "same kind" of content: ~2 short paragraphs of generic
  support-copy placeholder.)
- **No footer in the original** — add the required minimal Component Dock
  footer (`https://www.componentdock.com/`).

## Task outline

1. [ ] Copy the simplest existing app (e.g. `apps/basil` — the closest
       sibling: same 3-card accordion structure) as `apps/oregano`; rename
       the package to `@free-react-templates/oregano`; set
       `public/CNAME` = `oregano.free.componentdock.com` and `"homepage"` =
       `https://oregano.free.componentdock.com`. Remove any ColorLib
       references from app code (provenance lives only in spec/TEMPLATES.md/
       PR). Run `npm install` at the repo root so `package-lock.json`
       registers the new workspace.
2. [ ] Check `apps/basil` for the jsdom 30 `localStorage` MemoryStorage
       polyfill in `src/test/setup.ts` (copy if present — this template has
       no persistence need, but keep setup consistent).
3. [ ] `index.html`: title "Oregano — FAQ Accordion"; Google Fonts `<link>`
       for Roboto (300/400/500).
4. [ ] `src/index.css`: `@theme` tokens — `#fff` page, `#72c02c` accent
       green, `#999` closed-question gray, `#efefef` closed border,
       `#212529` heading, `#888` body copy; NO shadow tokens (none in the
       reference); keep `injectUiSource()` in `vite.config.ts`.
5. [ ] Components (TDD, 100% coverage): - `Navbar` — NOT in the reference; skip (no nav in the original). - `Heading` — centered h2 "Bootstrap Accordion #2" (20px/500
       `#212529`, my-5 margins). - `Accordion` / `FaqItem` — 3 cards, `openIndex` state (default 0),
       one panel open at a time; active card = green `#72c02c` header +
       white text + `ChevronUp`; closed = white header + `#999` text +
       `ChevronDown`; `border: 1px solid #efefef` (closed) / transparent
       (open); `aria-expanded`/`aria-controls`/`role="region"`; keyboard
       operable. NO box shadow on any state. - `Footer` — minimal Component Dock link
       (`https://www.componentdock.com/`).
6. [ ] `App.tsx` composes: Heading → Accordion → Footer.
7. [ ] Tests mirror the spec's Gherkin scenarios (heading layout, three
       cards + default states, single-open, closed/open styling, icon
       flip, toggle, keyboard, body padding, footer link).
8. [ ] `scripts/verify-app.sh oregano` green (typecheck + lint + vitest
       100% + build).
9. [ ] Commit `feat: add Oregano (FAQ accordion) template`, PR +
       immediate squash merge, then TEMPLATES.md line 650 `[~]` → `[x]` +
       surge URL + homepage + `npm run readme:status`.
10. [ ] PR description: real preview URL
        (`preview.colorlib.com/theme/bac/accordion-12/`), design tokens,
        GREEN-HEADER variant (differs from Basil/Accordion 11: white page +
        green active header + chevrons vs gray page + blue text + shadow),
        paraphrased copy.

## Fidelity traps

- **Don't use Basil's (Accordion 11) treatment** — no `#efefef` page, no
  `#007bff` blue text, no `0 15px 30px` shadow, no text-only headers.
  Oregano = WHITE page + GREEN `#72c02c` active header + chevron icons on
  every header. Same source series, completely different visual.
- **Don't use Thyme's (Accordion 10) palette** — no dark navy/slate
  `#4e5e6c`/`#1c2938`/`#38ade0`.
- **Icons ARE present** — unlike Basil, every header button carries a
  chevron (down/closed `#999`, up/open `#fff`). Use lucide
  `ChevronDown`/`ChevronUp`; do not add text-only headers.
- **No shadows at all** — the active item's emphasis is `z-index: 2` +
  solid green background, NOT a drop shadow.
- **Full-width container** — no `col-*` narrowing; the accordion spans the
  whole `.container` (max 1140px).
- **Button padding** — `15px 15px 15px 40px` (40px left gutter for the
  chevron at `left: 15px`), not Basil's uniform 15px.
- **Body copy is bare text** — `#888`, padding `20px` ALL sides (not
  `0 20px 20px`); the `#b3b3b3` `p` rule never applies.
- **Three cards, not four** — Accordion 12 has 3 FAQ items; all three
  bodies carry the same placeholder paragraph.
- **Heading is "#2"** — "Bootstrap Accordion #2" (NOT #1, NOT #3).
