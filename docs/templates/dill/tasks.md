# Dill (ColorLib Accordion 15) — Tasks & Design Notes

> Prep artifacts prepared on `main`. Recreation name: **Dill** (NEW name —
> the ColorLib source keeps its name "Accordion 15"). Implementation ships on
> `feat/template-dill` per the standard PR flow.

## Design notes

- **Original:** ColorLib "Accordion 15" — free single-page accordion /
  sidebar-menu component template (source:
  https://colorlib.com/wp/template/accordion-15/). TEMPLATES.md row: line 653
  (**Bootstrap Accordions (20)**). The `accordion-15` slug appears exactly
  once (no dup rows to mark).
- **Live preview DOM analyzed (REACHABLE, verified 2026-08-14):** the default
  `https://preview.colorlib.com/theme/accordion-15/` returns **404** — the
  REAL preview is `https://preview.colorlib.com/theme/bac/accordion-15/`
  (HTTP 200, 19.9KB HTML, `<title>Accordion #5</title>`; the `/bac/` subpath
  is the bootstrap-accordions demo index — same pattern as accordion-13 →
  Anise and accordion-14 → Rosemary). Stylesheet: `css/style.css` (2.4KB
  custom tokens on top of Bootstrap; the only non-vendor stylesheet) +
  `fonts/icomoon/style.css` for the header icons. Screenshot
  (`accordion-15.jpg`, 1200×972) browser-verified 2026-08-14: very light gray
  page, centered "Bootstrap Accordion #5" heading, ONE narrow (~300px)
  centered card with a soft drop shadow, four terracotta/orange header bars
  with white icons — first row ("Profile") expanded showing a dark-gray menu
  panel, the other three collapsed; no navbar, no footer, no imagery.
- **Structure observed (1:1):** `div.content` (padding `7rem 0`, page bg
  `#efefef`) → `div.container` → centered `h2.my-5.text-center` "Bootstrap
  Accordion #5" (20px Roboto, dark gray, `my-5` = 3rem vertical margins) →
  `div.container` → `div.accordion-wrap` (`max-width: 300px; margin: 0 auto;`
  box-shadow `0 15px 30px 0 rgba(0,0,0,.2)`) → `div.custom-accordion#accordion_1`
  → four `div.accordion-item` stacked FLUSH (item bg `#4b4142`, no gap, no
  border, no radius). Each item: `h2.mb-0` → full-width `button.btn.btn-link`
  (`width: 100%`, `border-radius: 0`, `padding: 15px`, text-left, bg
  `#f16947`, color `#fff`, `.3s all ease` transition) with `<span
class="wrap-icon mr-3">` (white icon, `mr-3` = 1rem right margin) + label.
  **Header bg is `#f16947` in BOTH active and collapsed states** (the
  `.active .btn-link` rule repeats the same values — no state color change,
  unlike Anise/Rosemary). Body `div.accordion-body` (color `#888`) →
  `ul.custom-menu` (block, `padding: 0; margin: 0`) with SIX links, IDENTICAL
  in every panel: **Profile, Messages, Settings, Sales, Marketing,
  Marketing**. Each `li a`: `display: block`, `color: rgba(255,255,255,.5)`,
  `padding: 10px 20px`, `font-size: 13px`, relative; hover →
  `padding-left: 30px`, `color: #fff` + 8px `#f16947` left bar (`a:before`,
  width 0→8px, `.3s all ease`). `data-parent="#accordion_1"` = single-open
  accordion. NO footer in the original — add the mandatory Component Dock
  attribution footer (repo convention), kept tiny and muted.
- **KEY DIFFERENCES from Anise (accordion-13) and Rosemary (accordion-14):**
  (a) FOUR panels, not three; (b) headers are coral `#f16947` on ALL items —
  no green `#72c02c` / purple `#743beb` state accent, no 2px left bar on the
  active header, no `#f8f8fa` toggle bg; (c) panel bodies are a dark MENU
  LIST, not FAQ paragraphs; (d) the whole widget is a narrow 300px centered
  CARD with a drop shadow, not full-width rows; (e) page bg `#efefef` (same
  as Rosemary, differs from Anise's `#fff`). Do not copy Anise/Rosemary
  tokens.
- **Design tokens:** accent coral `#f16947` (header bg all states + menu
  hover bar); dark `#4b4142` (item/panel bg); page bg `#efefef`; menu link
  `rgba(255,255,255,.5)` → hover `#fff`; body copy `#888`; paragraph mute
  `#b3b3b3` (weight 300, latent — no `<p>` on the page); font **Roboto**
  (body weight 300; heading 20px; menu links 13px); card shadow
  `0 15px 30px 0 rgba(0,0,0,.2)`; NO radius, NO borders (flat); section
  padding `7rem 0`; header padding 15px; menu link padding 10px 20px (hover
  10px 30px); icon margin-right 1rem.
- **Design approach:** minimal "dashboard sidebar" accordion card. Fidelity
  is about the narrow 300px card + drop shadow, the flat corners, the
  terracotta/dark-charcoal two-tone palette, the white left icons, and the
  menu-link hover slide with coral left bar. Default `openIndex = 0`
  (Profile). No images, no sliders, no forms. Keep the footer tiny and muted
  so the minimal aesthetic survives.
- **Placeholders:** none needed (no imagery in the reference).
- **Icons:** lucide-react `User` (Profile), `Mail` (Messagess), `Settings`
  (gear), `LogOut` (power/exit), ~18–20px, white, LEFT of the label with a
  1rem gap — do NOT copy the icomoon icon font. PROBE each icon with
  `node -e "console.log(typeof require('lucide-react').User)"` before
  committing the icon map (lucide-react renames/removes icons silently).
- **Copy:** keep the source content kinds — four header labels (Profile /
  Messagess / Settings / Logout) and a six-link menu (Profile, Messages,
  Settings, Sales, Marketing, Marketing) repeated in EVERY panel body.
  RECOMMENDED deviation: fix the source typo "Messagess" → "Messages" and
  optionally dedupe the double "Marketing" entry; keep the same labels/kinds
  either way and note the deviation in the PR. Do NOT turn the bodies into
  FAQ paragraphs — they are menus here.

## Implementation tasks

1. **Scaffold** — `apps/dill` from the simplest existing app; rename
   package to `@free-react-templates/dill`; register in root
   `package.json` workspaces + lockfile (implementer handles lockfile, prep
   never touches it). `public/CNAME` = `dill.free.componentdock.com`,
   `"homepage"` = `https://dill.free.componentdock.com`.
2. **Theme tokens** — add `#f16947` / `#4b4142` / `#efefef` / `#ffffff` /
   `#888` / `#b3b3b3` to `@theme`; Roboto Google Fonts `<link>` in
   `index.html`; flat corners (no radius tokens needed).
3. **Components** (per section, TDD — tests first):
   - `AccordionCard` (or `DillAccordion`) — the core component: takes the
     four header rows + shared menu data, holds `openIndex` state (default 0,
     only one open), renders header buttons (full width, 15px padding,
     text-left, `#f16947` bg + white text + white icon at left with 1rem
     gap, `aria-expanded`/`aria-controls`, keyboard activation) + bodies
     (`role="region"`, `aria-labelledby`, dark `#4b4142` bg). NO header
     color change on the active row. Collapse-on-self-click allowed
     (toggle semantics) — single-open enforced.
   - `MenuList` (or inline in the accordion body) — the six-link dark menu:
     13px `rgba(255,255,255,.5)` links, 10px/20px padding, hover → slide
     right to 30px + `#fff` + 8px `#f16947` left bar (Tailwind
     group-hover). Shared across all four panels.
   - `PageHeading` (or inline in App) — centered `h2` "Bootstrap Accordion
     #5" with `my-5`-equivalent margins; per conventions the heading text
     can be adapted to the new-name context, but the reference text kind (a
     simple page title) must stay.
   - `Footer` — minimal Component Dock attribution line (repo convention;
     absent in the original).
4. **App composition** — heading → accordion card → footer, all inside a
   `main` with the `7rem 0` (desktop) / reduced (mobile) vertical padding;
   `max-w-[300px] mx-auto` card with the drop shadow.
5. **Tests** (Vitest + Testing Library, 100% coverage): default state (1
   open = Profile, 3 closed), single-open toggle behavior, no header color
   change on active row, menu content in every panel, hover slide + coral
   bar (class assertions), `aria-expanded`/`aria-controls`/`role="region"`,
   keyboard activation, footer link, document title, responsive paddings.
6. **Verify + ship** — `scripts/verify-app.sh dill` (typecheck + lint +
   vitest 100% + build), then PR `feat/template-dill` → squash-merge →
   bookkeeping: TEMPLATES.md line 653 `[~]` → `[x]` with
   `https://dill.free.componentdock.com`, `npm run readme:status`, push.
