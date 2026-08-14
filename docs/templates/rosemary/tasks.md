# Rosemary (ColorLib Accordion 14) — Tasks & Design Notes

> Prep artifacts prepared on `main`. Recreation name: **Rosemary** (NEW name —
> the ColorLib source keeps its name "Accordion 14"). Implementation ships on
> `feat/template-rosemary` per the standard PR flow.

## Design notes

- **Original:** ColorLib "Accordion 14" — free single-page accordion / FAQ
  component template (source:
  https://colorlib.com/wp/template/accordion-14/). TEMPLATES.md row: line 652
  (**Bootstrap Accordions (20)**). The `accordion-14` slug appears exactly
  once (no dup rows to mark).
- **Live preview DOM analyzed (REACHABLE, verified 2026-08-14):** the default
  `https://preview.colorlib.com/theme/accordion-14/` returns **404** — the
  REAL preview is `https://preview.colorlib.com/theme/bac/accordion-14/`
  (HTTP 200, 19.4KB HTML, `<title>Accordion #4</title>`; the `/bac/` subpath
  is the bootstrap-accordions demo index — same pattern as accordion-13 →
  Anise). Stylesheet: `css/style.css` (2.7KB custom tokens on top of
  Bootstrap; the only non-vendor stylesheet) + `fonts/icomoon/style.css` for
  the toggle chevrons. Screenshot (`accordion-14.jpg`, 1200×972)
  browser-verified 2026-08-14: very light gray page, centered "Bootstrap
  Accordion #4" heading, three accordion rows — first expanded with a purple
  left edge bar + up chevron, the other two collapsed with gray down chevrons;
  no navbar, no footer, no imagery.
- **Structure observed (1:1):** `div.content` (padding `7rem 0`, page bg
  `#efefef`) → `div.container` → centered `h2.my-5.text-center` "Bootstrap
  Accordion #4" (20px Roboto, dark gray, 3rem vertical margins) →
  `div.container` → `div.custom-accordion#accordion_1` → three
  `div.accordion-item` (bg `#f8f8fa`; NO card wrapper, NO intro block, rows
  stacked tight — use a small ≤10px gap so rows stay separated). Each item:
  `h2.mb-0` → full-width `button.btn.btn-link` (block, `width: 100%`,
  `border-radius: 0`, `padding: 15px` + `padding-left: 40px`, text-left,
  color `#999`, bg `#fff`, `.3s all ease` transition, NO border) with an
  icomoon chevron absolutely at `left: 15px` (`\e313` keyboard_arrow_down
  when collapsed; `\e316` keyboard_arrow_up + `color: #743beb` when
  `[aria-expanded="true"]`; the active item also gets a 2px `#743beb` left
  bar via `.accordion-item.active:before` and its toggle gets `color: #743beb`
  - `background: #f8f8fa`); body `div.accordion-body` (padding 20px, color
    `#888`) with placeholder copy ("Anim pariatur cliche reprehenderit…").
    Panels: **How to download and register?** open by default (`collapse show`),
    **How to create your paypal account?** and **How to link your paypal and
    bank account?** closed; `data-parent="#accordion_1"` = only one open at a
    time. NO footer in the original — add the mandatory Component Dock
    attribution footer (repo convention).
- **KEY DIFFERENCE from Anise (accordion-13):** this variant uses a purple
  accent `#743beb` (Anise: green `#72c02c`), page bg `#efefef` (Anise: `#fff`),
  item bg `#f8f8fa` (Anise: `#fff`), and the active treatment is a 2px LEFT
  BAR + label/chevron color + `#f8f8fa` toggle bg (Anise: full
  `1px solid` border around the active row). Anise's toggles had
  `1px solid #efefef` borders and a 4px item radius — THIS template has NO
  borders and NO radius (flat). Do not copy Anise's tokens.
- **Design tokens:** active accent `#743beb` (only color on the page); page
  bg `#efefef`; item + active toggle bg `#f8f8fa`; collapsed toggle bg `#fff`;
  collapsed label `#999`; body copy `#888`; paragraph mute `#b3b3b3` (weight
  300); font **Roboto** (body + headings, body weight 300, heading 20px); no
  radius, no borders, no shadows (flat); section padding 7rem 0; toggle
  padding 15px/40px; body padding 20px.
- **Design approach:** ultra-minimal typography-driven FAQ page. The whole
  template is ONE accordion surface — fidelity is about the exact spacing,
  the flat corners, the `#999` vs `#743beb` label states, the 2px purple left
  bar, and the left-side chevron swap. Default `openIndex = 0`. No images, no
  sliders, no forms. Keep the footer tiny and muted so the minimal aesthetic
  survives.
- **Placeholders:** none needed (no imagery in the reference).
- **Icons:** lucide-react `ChevronDown` (collapsed, default color) /
  `ChevronUp` (expanded, `#743beb`), ~24px, LEFT of the label — do NOT copy
  the icomoon icon font.
- **Copy:** keep the original content kinds — three FAQ questions (download &
  register / create paypal account / link paypal + bank account) with
  short answer-style placeholder paragraphs. Paraphrase the lorem freely.

## Implementation tasks

1. **Scaffold** — `apps/rosemary` from the simplest existing app; rename
   package to `@free-react-templates/rosemary`; register in root
   `package.json` workspaces + lockfile (implementer handles lockfile, prep
   never touches it). `public/CNAME` = `rosemary.free.componentdock.com`,
   `"homepage"` = `https://rosemary.free.componentdock.com`.
2. **Theme tokens** — add `#743beb` / `#efefef` / `#f8f8fa` / `#ffffff` /
   `#999` / `#888` / `#b3b3b3` to `@theme`; Roboto Google Fonts `<link>` in
   `index.html`; flat corners (no radius tokens needed).
3. **Components** (per section, TDD — tests first):
   - `FaqAccordion` (or `RosemaryAccordion`) — the core component: takes panel
     data, holds `openIndex` state (default 0, only one open), renders
     header buttons (full width, 15px padding + 40px left gutter, text-left,
     `#999` → `#743beb` active, `ChevronDown`/`ChevronUp` icon swap at left,
     `aria-expanded`/`aria-controls`) + bodies (`role="region"`,
     `aria-labelledby`, `#888` copy, 20px padding). Active item gets the 2px
     `#743beb` left bar + `#f8f8fa` toggle bg.
   - `PageHeading` (or inline in App) — centered `h2` "Bootstrap Accordion
     #4" with `my-5`-equivalent margins; NOTE: per conventions the heading
     text can be adapted to the new name context, but the reference text
     kind (a simple page title) must stay.
   - `Footer` — minimal Component Dock attribution line (repo convention;
     absent in the original).
4. **App composition** — heading → accordion → footer, all inside a
   `main` with the `7rem 0` (desktop) / reduced (mobile) vertical padding.
5. **Tests** (Vitest + Testing Library, 100% coverage): default states (1
   open, 2 closed), single-open toggle behavior, icon + color swap, 2px
   purple left bar on the active item, `aria-expanded`/`aria-controls`/
   `role="region"`, keyboard activation, footer link, responsive paddings.
6. **Verify + ship** — `scripts/verify-app.sh rosemary` (typecheck + lint +
   vitest 100% + build), then PR `feat/template-rosemary` → squash-merge →
   bookkeeping: TEMPLATES.md line 652 `[~]` → `[x]` with
   `https://rosemary.free.componentdock.com`, `npm run readme:status`, push.
