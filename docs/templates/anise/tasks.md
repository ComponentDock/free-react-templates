# Anise (ColorLib Accordion 13) — Tasks & Design Notes

> Prep artifacts prepared on `main`. Recreation name: **Anise** (NEW name —
> the ColorLib source keeps its name "Accordion 13"). Implementation ships on
> `feat/template-anise` per the standard PR flow.

## Design notes

- **Original:** ColorLib "Accordion 13" — free single-page accordion / FAQ
  component template (source:
  https://colorlib.com/wp/template/accordion-13/). TEMPLATES.md row: line 651
  (**Bootstrap Accordions (20)**). The `accordion-13` slug appears exactly
  once (no dup rows to mark).
- **Live preview DOM analyzed (REACHABLE, verified 2026-08-14):** the default
  `https://preview.colorlib.com/theme/accordion-13/` returns **404** — the
  REAL preview is `https://preview.colorlib.com/theme/bac/accordion-13/`
  (HTTP 200, 19.4KB HTML; found by scraping the ColorLib template page for its
  preview link — the `/bac/` subpath is the bootstrap-accordions demo index).
  Stylesheet: `css/style.css` (2KB custom tokens on top of Bootstrap; the
  only non-vendor stylesheet) + `fonts/icomoon/style.css` for the toggle
  chevrons. Screenshot (`accordion-13.jpg`, 1200×972) browser-verified
  2026-08-14: light page, centered "Bootstrap Accordion #3" heading, three
  accordion rows — first expanded with a light-green border framing header +
  content, the other two with faint gray borders, chevron icons on the left;
  no navbar, no footer, no imagery.
- **Structure observed (1:1):** `div.content` (padding `7rem 0`, page bg
  `#fff`) → `div.container` → centered `h2.my-5.text-center` "Bootstrap
  Accordion #3" (20px Roboto, dark gray, 3rem vertical margins) →
  `div.container` → `div.custom-accordion#accordion_1` → three
  `div.accordion-item` (white bg, `border-radius: 4px`, stacked
  `margin-bottom: 10px`; NO card wrapper, NO intro block — items sit directly
  on the page). Each item: `h2.mb-0` → full-width `button.btn.btn-link`
  (block, `width: 100%`, `padding: 15px` + `padding-left: 40px`, text-left,
  color `#999`, `border: 1px solid #efefef`, `.3s all ease` transition) with
  an icomoon chevron absolutely at `left: 15px` (`\e313`
  keyboard_arrow_down when collapsed; `\e316` keyboard_arrow_up +
  `color: #72c02c` when `[aria-expanded="true"]`; the active item also gets
  `border: 1px solid #72c02c` + `color: #72c02c`); body
  `div.accordion-body` (padding 20px, color `#888`) with placeholder copy
  ("Anim pariatur cliche reprehenderit…"). Panels: **How to download and
  register?** open by default (`collapse show`), **How to create your paypal
  account?** and **How to link your paypal and bank account?** closed;
  `data-parent="#accordion_1"` = only one open at a time. NO footer in the
  original — add the mandatory Component Dock attribution footer (repo
  convention).
- **Design tokens:** active accent `#72c02c` (only color on the page);
  page + item bg `#fff`; collapsed label `#999`; collapsed border `#efefef`;
  body copy `#888`; paragraph mute `#b3b3b3` (weight 300); font **Roboto**
  (body + headings, body weight 300, heading 20px); item radius 4px; NO
  shadows (flat); section padding 7rem 0; item gap 10px; toggle padding
  15px/40px; body padding 20px.
- **Design approach:** ultra-minimal typography-driven FAQ page. The whole
  template is ONE accordion surface — fidelity is about the exact spacing,
  the 4px radius, the `#efefef` vs `#72c02c` border/label states, and the
  left-side chevron swap. Default `openIndex = 0`. No images, no sliders, no
  forms. Keep the footer tiny and muted so the minimal aesthetic survives.
- **Placeholders:** none needed (no imagery in the reference).
- **Icons:** lucide-react `ChevronDown` (collapsed, default color) /
  `ChevronUp` (expanded, `#72c02c`), ~24px, LEFT of the label — do NOT copy
  the icomoon icon font.
- **Copy:** keep the original content kinds — three FAQ questions (download &
  register / create paypal account / link paypal + bank account) with
  short answer-style placeholder paragraphs. Paraphrase the lorem freely.

## Implementation tasks

1. **Scaffold** — `apps/anise` from the simplest existing app; rename
   package to `@free-react-templates/anise`; register in root
   `package.json` workspaces + lockfile (implementer handles lockfile, prep
   never touches it). `public/CNAME` = `anise.free.componentdock.com`,
   `"homepage"` = `https://anise.free.componentdock.com`.
2. **Theme tokens** — add `#72c02c` / `#ffffff` / `#999` / `#efefef` /
   `#888` / `#b3b3b3` to `@theme`; Roboto Google Fonts `<link>` in
   `index.html`; item radius 4px via token.
3. **Components** (per section, TDD — tests first):
   - `FaqAccordion` (or `AniseAccordion`) — the core component: takes panel
     data, holds `openIndex` state (default 0, only one open), renders
     header buttons (full width, 15px padding + 40px left gutter, text-left,
     `#999` → `#72c02c` active, `ChevronDown`/`ChevronUp` icon swap at left,
     `aria-expanded`/`aria-controls`) + bodies (`role="region"`,
     `aria-labelledby`, `#888` copy, 20px padding).
   - `PageHeading` (or inline in App) — centered `h2` "Bootstrap Accordion
     #3" with `my-5`-equivalent margins; NOTE: per conventions the heading
     text can be adapted to the new name context, but the reference text
     kind (a simple page title) must stay.
   - `Footer` — minimal Component Dock attribution line (repo convention;
     absent in the original).
4. **App composition** — heading → accordion → footer, all inside a
   `main` with the `7rem 0` (desktop) / reduced (mobile) vertical padding.
5. **Tests** (Vitest + Testing Library, 100% coverage): default states (1
   open, 2 closed), single-open toggle behavior, icon + color swap,
   `aria-expanded`/`aria-controls`/`role="region"`, keyboard activation,
   footer link, responsive paddings.
6. **Verify + ship** — `scripts/verify-app.sh anise` (typecheck + lint +
   vitest 100% + build), then PR `feat/template-anise` → squash-merge →
   bookkeeping: TEMPLATES.md line 651 `[~]` → `[x]` with
   `https://anise.free.componentdock.com`, `npm run readme:status`, push.
