# Curricula (ColorLib Dropdown 19) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-curricula`.

## Design notes (replication findings)

- **Original:** ColorLib "Dropdown 19" — nineteenth of the "Bootstrap
  Dropdowns (20)" series (source: https://colorlib.com/wp/template/dropdown-19/).
  TEMPLATES.md has ONE copy (line 772). Series siblings: Dropdown 01 was
  prepped as **Menubar**, Dropdown 02 as **Popmenu**, Dropdown 03 as
  **Skycast**, Dropdown 04 as **Chime**, Dropdown 05 as **Trolley**,
  Dropdown 06 as **Passkey**, Dropdown 07 as **Onboard**, Dropdown 08 as
  **Marquee**, Dropdown 09 as **Glimpse**, Dropdown 10 as **Inquire**,
  Dropdown 11 as **Privy**, Dropdown 12 as **Lilac**, Dropdown 13 as
  **Docket**, Dropdown 14 as **Fount**, Dropdown 15 as **Notifly**,
  Dropdown 16 as **Sitemap**, Dropdown 17 as **Console**, Dropdown 18 as
  **Identity** (see `docs/templates/menubar/` … `docs/templates/identity/`).
  This prep: Dropdown 19 → **Curricula** (a course-catalog mega menu —
  "Courses" trigger opening a 680px 3-column subject panel; no collision
  with `apps/`, `openspec/specs/`, `docs/templates/` — verified 2026-08-16).
- **Demo DOM analyzed (LIVE, fetched via curl AND browser-verified):**
  `https://preview.colorlib.com/theme/bootstrap/dropdown-19/`
  (HTTP 200, 22,623 bytes). IMPORTANT: the naive
  `https://preview.colorlib.com/theme/dropdown-19/` returns 404 — the
  dropdown demos live under the `/theme/bootstrap/` subpath. The page uses
  a **SLIM ~131-line `css/style.css`** (4,000 bytes) — same slim builder as
  dropdown-11/12/13/14/15/18 (Privy/Lilac/Docket/Fount/Notifly/Identity),
  NOT the 222 KB ftco stylesheet that dropdown-09/10 load. Other assets:
  `fonts/icomoon/style.css` (icon font — exactly TWO glyphs consumed:
  `icon-layers`, `icon-keyboard_arrow_down`), `css/bootstrap.min.css` (BS4
  base), `css/owl.carousel.min.css` + `js/owl.carousel.min.js` (loaded but
  UNUSED), jquery/popper/bootstrap.min.js, `js/main.js` (adds `.active` to
  `.dropdown-menu` 100 ms after `show.bs.dropdown`, removes on hide —
  identical to the other slim-builder demos). Google Fonts via inline
  cf-fonts `@font-face` blocks: Roboto (300/400/700) — only Roboto is used.
- **HEADING BUG (documented in the spec — reproduce faithfully):** the page
  renders "Dropdown #9", not "Dropdown #19" (cloned from the #9 page, never
  renumbered — same bug as Identity "#8" / Notifly "#5" / Lilac "#2" /
  Docket "#3" / Fount "#4"). The TEMPLATES.md screenshot and the live
  `<title>` show the same text. Spec mandates the reference text
  "Dropdown #9" — mention the discrepancy in the PR description.
- **"Percalculus" TYPO (documented in the spec — reproduce faithfully):**
  the Math column's sixth link is **"Percalculus(16)"** in the live DOM
  (missing "r"). The screenshot appears to read "Precalculus(16)" — live
  DOM is authoritative per the Identity precedent. Do NOT "fix" it.
- **COUNT VARIANCES (live DOM authoritative):** "Early math(5)" (DOM) vs
  "Early math(3)" (screenshot); "Accounting(93)" (DOM) vs "Accounting(10)"
  (screenshot). Use the live DOM values; note in PR.
- **DANGLING ARIA BUG (documented — do NOT reproduce):** the menu's
  `aria-labelledby="dropdownMenuButton"` points at a NONEXISTENT id (same
  as Identity/Notifly/Fount/Lilac/Docket). Pair trigger + menu via
  `aria-controls`/id.
- **Screenshot:** `dropdown-19.jpg` (1200×972, viewed in browser) — white
  page, centered heading "Dropdown #9", trigger (gray "Courses" with small
  gray diamond/layers glyph + downward chevron, NO border) with the menu
  OPEN beneath: wide white card, soft diffuse shadow, three equal columns
  (MATH blue / COMPUTING amber / ECONOMIC red headings with matching 2px
  left rules), each with six dark-gray category links (lighter counts in
  parens). Matches DOM + CSS + live preview EXCEPT the two count cells and
  the Percalculus spelling noted above. URL bar shows `preview.codyfol.io`
  (older host; current live preview is
  `https://preview.colorlib.com/theme/bootstrap/dropdown-19/`).

## Implementation tasks (in order)

1. Scaffold `apps/curricula` (copy the simplest existing app, e.g.
   `apps/identity` — the previous slim-builder dropdown; rename the package
   to `@free-react-templates/curricula`; run `npm install` at the repo root
   so `package-lock.json` registers the workspace; set `public/CNAME` to
   `curricula.free.componentdock.com` and `"homepage"` to
   `https://curricula.free.componentdock.com`).
2. `src/index.css` — Tailwind entry + `@theme` tokens: page background
   `#fff`, trigger gray `#888`/open black `#000`, column accent colors
   (`--color-primary` `#007bff`, `--color-warning` `#ffc107`,
   `--color-danger` `#dc3545`), link gray `#808080`/hover black; Roboto via
   Google Fonts `<link>` in `index.html`; body `font-weight: 300`.
3. `src/components/Navbar.tsx` — monorepo-standard top bar (matches the
   other dropdown demos' minimal navbar, if the sibling apps ship one; the
   source has no navbar — check what Identity did and mirror it).
4. `src/components/Hero.tsx` (or equivalent section) — the demo block:
   `.content` 7rem 0 padding; centered `h2` "Dropdown #9" (20px, `#212529`,
   3rem top/bottom margins); centered `col-md-5`-equivalent column.
5. `src/components/MegaMenu.tsx` (the core) — trigger + menu:
   - Trigger: `<button aria-haspopup="menu" aria-expanded>` with lucide
     `Layers` (0.25rem right margin) + "Courses" + lucide `ChevronDown`
     arrow; gray `#888`, no bg/border; open → `#000` + chevron rotates 180°.
   - Menu: white card, `border-radius: 4px`, shadow
     `0 15px 30px 0 rgba(0,0,0,.2)`, `padding: 10px`, **min-width 680px**,
     anchored `top: 100%; left: 50%; transform: translateX(-50%)` relative
     to the trigger wrapper; fade + 10px slide-DOWN (margin-top 0→10px).
   - Panel: flex row, 20px padding, three equal columns (33.33%, 10px
     horizontal padding), each: `h3` heading 14px uppercase weight 500 in
     the column color + `ul` with 2px solid colored left border and 20px
     left padding + six `<a>` links.
   - Column data (use the live-DOM text EXACTLY, typos included):
     - Math (`#007bff`): Early math(5) / Pre-Algebra(22) / Algebra 1(12) /
       Geometry(81) / Trigonometry(9) / Percalculus(16)
     - Computing (`#ffc107`): Computer Programming(5) / Computer Science(12)
       / Hour of Code(81) / Computer Animation(9) / Graphic Design(16) /
       Logo Design(22)
     - Economic (`#dc3545`): Microeconomics(32) / Macroeconomics(61) /
       Finance(73) / Capital Markets(88) / World Economy(19) / Accounting(93)
   - Links: 14px, gray `#808080`, weight 400, block, 5px vertical padding,
     hover/focus black `#000`.
   - Behavior: open on click; close on outside click / Escape / trigger
     re-click; `aria-controls`/id pairing (NOT the source's dangling
     `aria-labelledby`).
6. `src/components/Footer.tsx` — monorepo mandatory footer linking
   `https://www.componentdock.com/` ("Component Dock").
7. Tests: TDD, scenario-style per the spec's Gherkin; 100% coverage
   (lines/functions/branches/statements). MemoryStorage polyfill from
   `apps/cura/src/test/setup.ts` if jsdom 30 lacks localStorage.
8. Gate: `npm run verify:app curricula` → green; then PR
   `feat/template-curricula` → merge immediately; post-merge bookkeeping
   (`[~]`→`[x]` + surge URL + homepage + `npm run readme:status`).
9. PR description MUST include: source template
   (https://colorlib.com/wp/template/dropdown-19/), preview URL
   (https://preview.colorlib.com/theme/bootstrap/dropdown-19/), design
   tokens used, and what differs (renames, "Dropdown #9" heading bug,
   "Percalculus" typo, count variances, no images, no carousel).

## Fidelity pitfalls (from the live analysis)

- The demo is on a **WHITE** background — NOT gray (do not copy Identity's
  `#efefef`).
- The trigger HAS a visible open state here (black + 180° chevron) — unlike
  Identity's trigger (no open-state change). Do not omit it.
- The menu **slides DOWN 10px** (margin-top 0→10px) — Identity slides UP
  into place (-10px→0). Direction matters; get it right.
- The menu is **`border-radius: 4px`** (BS4 default) — Identity's was 0.
- The menu is **min-width 680px** and centered via `left:50%` +
  `translateX(-50%)` — it overflows the narrow column AND overflows narrow
  viewports. Reproduce; add no responsive handling (source has zero media
  queries).
- No images anywhere in the demo — no picsum assets needed.
- Exactly TWO lucide icons: `Layers` + `ChevronDown`.
