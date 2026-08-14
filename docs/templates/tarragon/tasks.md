# Tarragon (ColorLib Accordion 16) — Tasks & Design Notes

> Prep artifacts prepared on `main`. Recreation name: **Tarragon** (NEW name —
> the ColorLib source keeps its name "Accordion 16"). Implementation ships on
> `feat/template-tarragon` per the standard PR flow.

## Design notes

- **Original:** ColorLib "Accordion 16" — free single-page accordion / FAQ
  component template (source: https://colorlib.com/wp/template/accordion-16/).
  TEMPLATES.md row: line 654 (**Bootstrap Accordions (20)**). The
  `accordion-16` slug appears exactly once (no dup rows to mark).
- **Live preview DOM analyzed (REACHABLE, verified 2026-08-14):** the default
  `https://preview.colorlib.com/theme/accordion-16/` returns **404** — the
  REAL preview is `https://preview.colorlib.com/theme/bac/accordion-16/`
  (HTTP 200, 19.4KB HTML, `<title>Accordion #6</title>`; the `/bac/` subpath
  is the bootstrap-accordions demo index — same pattern as accordion-13 →
  Anise, accordion-14 → Rosemary, accordion-15 → Dill). Stylesheet:
  `css/style.css` (2.1KB custom tokens on top of Bootstrap; the only
  non-vendor stylesheet) + `fonts/icomoon/style.css` for the toggle glyphs.
  Screenshot (`accordion-16.jpg`, 1200×972) browser-verified 2026-08-14:
  light-gray page, centered "Bootstrap Accordion #6" heading, THREE
  pill-shaped accordion rows — first ("How to download and register?")
  expanded showing a green minus icon + body text, the other two collapsed
  with plus icons; white headers; no navbar, no footer, no imagery.
- **Structure observed (1:1):** `div.content` (padding `7rem 0`, page bg
  `#efefef`) → `div.container` → centered `h2.my-5.text-center` "Bootstrap
  Accordion #6" (20px Roboto, dark gray, `my-5` = 3rem vertical margins) →
  `div.container` → `div.custom-accordion#accordion_1` → THREE
  `div.accordion-item` stacked with `margin-bottom: 10px` (item bg `#f9f9f9`,
  `border-radius: 40px`, `overflow: hidden`; NO border, NO shadow). Each
  item: `h2.mb-0` → full-width `button.btn.btn-link` (`display: block`,
  `width: 100%`, `padding: 15px` + `padding-left: 40px`, text-left,
  `color: #999`, `background: #fff`, `border: none`, `border-radius: 0`,
  `.3s all ease` transition) with a plus icon (`:before`, icomoon `\f067` =
  `icon-plus`) at `left: 15px`, vertically centered. Panel 1 "How to
  download and register?" OPEN by default (`collapse show`,
  `aria-expanded="true"`); panels 2 "How to create your paypal account?" and
  3 "How to link your paypal and bank account?" CLOSED (`.collapsed`,
  `aria-expanded="false"`). Body `div.accordion-body` (padding 20px,
  `color: #888`) with the same "Anim pariatur cliche reprehenderit…"
  placeholder copy in ALL THREE panels. `data-parent="#accordion_1"` =
  single-open accordion. NO footer in the original — add the mandatory
  Component Dock attribution footer (repo convention), kept tiny and muted.
- **KEY DIFFERENCES from Anise (accordion-13) — do NOT copy Anise tokens:**
  (a) page bg `#efefef` (Anise: `#fff`); (b) PILL-shaped items —
  `border-radius: 40px`, `#f9f9f9` bg, NO 1px `#efefef` border (Anise: 4px
  radius, white bg, 1px border); (c) toggle icon is a PLUS/MINUS pair
  (`\f067`/`\f068` = icon-plus/icon-minus), NOT chevrons
  (keyboard_arrow_down/up); (d) active state colors label + minus icon
  `#72c02c` but NO green border (Anise adds `border: 1px solid #72c02c`);
  (e) header button bg `#fff` on the `#f9f9f9` pill; (f) same three FAQ
  questions + same placeholder body copy as Anise; heading number "#6" vs
  Anise's "#3".
- **Design tokens:** accent green `#72c02c` (active label + minus icon);
  page bg `#efefef`; pill bg `#f9f9f9`; header bg `#fff`; collapsed label +
  plus icon `#999`; body copy `#888`; paragraph mute `#b3b3b3` (weight 300,
  latent — no `<p>` on the page); font **Roboto** (body weight 300; heading
  20px); pill radius 40px; section padding `7rem 0`; heading `my-5` (3rem);
  item gap 10px; toggle padding 15px (left 40px icon gutter); body padding
  20px; icon at left 15px vertically centered; NO shadows, NO borders, NO
  images.
- **Icons → lucide-react:** `\f067` plus → **Plus** (collapsed, `#999`);
  `\f068` minus → **Minus** (expanded, `#72c02c`), ~16–20px. Probe both
  exports with the typeof check before committing (lucide-react has
  renamed/removed icons silently before).
- **Copy fidelity:** keep the three FAQ questions exactly (How to download
  and register? / How to create your paypal account? / How to link your
  paypal and bank account?) and a block of muted placeholder copy in each
  body (same kind; paraphrasing fine). No images needed — pure text + one
  accordion.
- **Recreation decisions:** all photos → none (no imagery); icomoon icons →
  lucide-react (Plus/Minus); Roboto via Google Fonts `<link>`; Bootstrap
  collapse → React state accordion (single `openIndex`, default 0); plus↔minus
  swap + `#72c02c` active accent → Tailwind classes; pill shape → rounded
  utilities (e.g. `rounded-[40px]`) with `overflow-hidden`; no assets copied.

## Implementation tasks (for the implementer stream)

1. [ ] Copy the simplest existing accordion app (e.g. `apps/dill`) as
       `apps/tarragon`; rename package to `@free-react-templates/tarragon` in
       package.json + vite config; `npm install` at root to register the
       workspace; set `public/CNAME` = `tarragon.free.componentdock.com` and
       `homepage` accordingly.
2. [ ] `src/index.css` — `@theme` tokens: accent `#72c02c`, page `#efefef`,
       pill `#f9f9f9`, surface `#fff`, label `#999`, body `#888`, mute `#b3b3b3`;
       Roboto Google Fonts `<link>` in index.html (weights 300/400).
3. [ ] Components: `Navbar` NOT needed (the original has none) — page starts
       with the heading; `PageHeading`/inline heading (20px, centered, my-5) →
       `Accordion` (three pills) → `Footer` (Component Dock attribution).
4. [ ] Accordion behavior: single `openIndex` state (default 0), buttons with
       `aria-expanded`/`aria-controls`, panels `role="region"` labelled by their
       header button; icon swaps Plus→Minus on the open item; open label + minus
       icon `#72c02c`; NO border change on the active pill.
5. [ ] Tests (TDD, 100% coverage): heading, three pill items + labels,
       default open state (panel 1), single-open switching + collapse-on-click,
       icon swap, active accent, body copy, footer link, document title, main
       landmark.
6. [ ] Gate: `npm run verify:app tarragon` (typecheck + lint + knip + fallow
   - 100% coverage tests + build), then PR `feat/template-tarragon` →
     squash-merge immediately, then bookkeeping (`[x]` row + surge URL
     `https://tarragon.free.componentdock.com` + `npm run readme:status`).
