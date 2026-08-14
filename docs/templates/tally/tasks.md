# Tally (ColorLib Bootstrap Buttons 16) — Tasks & Design Notes

> Prep artifacts prepared on `main`. Recreation name: **Tally** (NEW name —
> the ColorLib source keeps its name "Bootstrap Buttons 16"). Implementation
> ships on `feat/template-tally` per the standard PR flow.

## Design notes

- **Original:** ColorLib "Bootstrap Buttons 16" — free UI-kit button
  component template (source:
  https://colorlib.com/wp/template/bootstrap-buttons-16/). TEMPLATES.md
  row: line 677 (**Bootstrap Buttons (20)**). The `bootstrap-buttons-16`
  slug appears exactly once (no dup rows to mark).
- **Live preview DOM analyzed (REACHABLE, verified 2026-08-14):** the
  default `https://preview.colorlib.com/theme/bootstrap-buttons-16/`
  returns **404** — the REAL preview is
  `https://preview.colorlib.com/theme/bb/bootstrap-buttons-16/` (HTTP 200,
  13.9KB HTML, `<title>Button 06</title>`; the nested `/bb/` subpath was
  discovered by scraping the ColorLib template page — same pattern as
  Palette/Buttons 01, Toggle/02, Float/03, Swell/04, Slant/05 and
  Bezel/10). Stylesheets: `css/ionicons.min.css` (icon font) +
  `css/style.css` (224KB = Bootstrap 4.3.1 minified + the ftco custom
  section at the END — the custom rules are the token source). JS bundle
  (jquery/popper/bootstrap + `js/main.js`) is inert on this page — pure
  static showcase; hover is CSS-only. Computed styles verified in a live
  browser (2026-08-14): `.btn` `border-radius: 2px`, `padding: 15px 30px`,
  14px/500, shadow `0 7px 15px -13px rgba(0,0,0,0.17)`, `overflow: hidden`;
  `.icon` 60px wide, `bottom: 0`; `.text` `calc(100% - 60px)`; h4 22px
  `margin-bottom: 0`; heading 32px Poppins; `.ftco-section` padding
  `7em 0`.
- **⚠ Preview URL quirk:** the default preview URL 404s; the REAL one lives
  under `/theme/bb/bootstrap-buttons-16/`. Mention this in the PR
  description.
- **✅ Heading-number ARTIFACT (keep it):** the slug is
  `bootstrap-buttons-16` but the `h2` renders **"Button #06"** and the
  `<title>` is "Button 06" — a copy-paste artifact from an earlier
  sibling. Fidelity mandate = render the heading EXACTLY as the reference
  renders it ("Button #06"); do NOT "fix" it to #16. (Same artifact class
  as the 05 sibling's "#02" heading, documented in the Bezel prep.)
- **✅ Screenshot matches live:** the TEMPLATES.md screenshot
  (`bootstrap-buttons-16.jpg`, 1200×972) shows the SAME 4×4 stat-card grid
  as the live render (white cards on top, colored cards below, "Button
  #06" heading) — no screenshot-vs-live discrepancy (unlike Bezel).
- **Signature:** 16 dashboard-style STAT BUTTONS (not bare-label buttons):
  every button is a full-width flex card — 60px icon box on one side +
  `h4` number over `span` label on the other. Two rows of 8 in a 4-column
  grid: row 1 white (`btn-white`, tinted icon boxes), row 2 solid
  (`btn-primary/secondary/tertiary/quarternary`, white icons). Icon-left +
  text-right for the first 4 of each row, text-left + icon-right for the
  last 4. The ONLY Bootstrap-Buttons sibling with a drop shadow.
- **Custom 4-color palette (NOT Bootstrap defaults):**
  primary `#1fbbd3` (cyan) / secondary `#fb582f` (orange) / tertiary
  `#159688` (teal) / quarternary `#e92465` (magenta); hovers `#1894a7` /
  `#f23405` / `#0f695f` / `#c6144f`.
- **Icons (ionicons → lucide-react):** `ion-ios-brush` → `Paintbrush`,
  `ion-ios-chatboxes` → `MessageSquare`, `ion-ios-pulse` → `Activity`,
  `ion-ios-people` → `Users`, `ion-ios-briefcase` → `Briefcase`,
  `ion-ios-pricetag` → `Tag` — 30px, tinted accent on white rows, white on
  colored rows.
- **Exact copy matrix (16 buttons):**
  - Row 1 white icon-left: cyan brush `275` New Posts; orange chat `109`
    New Comment; teal pulse `68 %` Bounce Rate; magenta users `343` Total
    Visits.
  - Row 1 white icon-right: `275` New Projects magenta brush; `109` New
    Clients cyan chat; `68 %` Conversion Rate orange pulse; `343` Support
    Tickets teal tag.
  - Row 2 solid icon-left: cyan `275` New Posts; orange `109` New
    Comment; teal `68 %` Bounce Rate; magenta `343` Total Visits.
  - Row 2 solid icon-right: magenta briefcase `275` New Projects; cyan
    users `109` New Clients; orange pulse `68 %` Conversion Rate; teal
    tag `343` Support Tickets.
  - NOTE: reference copy is "68 %" (space before %). Keep the reference
    copy verbatim.
- **Heading:** 32px Poppins (h1–h5 are Poppins weight 400 line-height 1.5;
  body/buttons use the Bootstrap system stack — Roboto-first). Load
  Poppins via Google Fonts `<link>` in `index.html`.
- **No uppercase, no transforms:** labels render title-case as written;
  NO skew/bezel/white-wash signatures of the sibling button templates.
- **Buttons are `<button type="button">` elements** (not links) in the
  reference. They are presentational stat cards — no actions. Keep them as
  `<button>`s (or semantic equivalents) per the spec; they must not
  navigate anywhere.
- **Implementation pointers (Tailwind v4):**
  - One section component (e.g. `StatButtonsSection` / `KitSection`); a
    single `StatButton` component with props: `variant` (`white` |
    `primary` | `secondary` | `tertiary` | `quarternary`), `icon` (lucide
    element), `iconSide` (`left` | `right`), `value` (string, e.g. "275",
    "68 %"), `label` (e.g. "New Posts").
  - Palette in `src/index.css` `@theme`: `--color-primary: #1fbbd3`,
    `--color-secondary: #fb582f`, `--color-tertiary: #159688`,
    `--color-quarternary: #e92465` + hover shades (e.g.
    `--color-primary-dark: #1894a7`, etc.).
  - Button base classes: `w-full flex items-stretch rounded-[2px] px-[30px]
py-[15px] text-sm font-medium shadow-[0_7px_15px_-13px_rgba(0,0,0,0.17)]
transition-all duration-300 ease-in-out` (mirrors `.3s all ease`).
  - Icon box: `w-[60px] flex items-center justify-center` + the lucide
    icon at 30px (`size-[30px]`); icon color = accent on white rows
    (`text-primary` etc.), `text-white` on colored rows.
  - Text block: `flex-1` (≈ calc(100% − 60px)); `h4` → 22px `font-normal`
    (Poppins) `mb-0`; label → muted (`text-black/30` on white,
    `text-white/80` on colored).
  - White button: `bg-white text-black border border-white`; colored:
    `bg-<color> text-white border border-<color>`; hover:
    `hover:bg-<color-dark> hover:border-<color-dark>`.
  - Grid: `grid grid-cols-1 md:grid-cols-4 gap-3` (col-md-3 + mb-3 → 4
    columns at md+, 1rem gaps); heading row `mb-4` (1.5rem).
  - `focus-visible` ring per repo convention (reference darkens bg on
    `:focus` only — insufficient as an a11y focus indicator).
  - Mobile: `7em` section padding is tall on phones — reduce to
    `py-16`/`py-12`-ish on small screens; grid stacks to 1 column.
  - Footer: minimal muted "More templates at Component Dock" linking
    https://www.componentdock.com/.
  - Do NOT copy the CSS/HTML — re-implement with Tailwind tokens. No
    Bootstrap dependency; no jquery; no ionicons font (use lucide-react).

## Tasks (implementer checklist)

1. [ ] `feat/template-tally` branch from latest main
2. [ ] Scaffold app `apps/tally` (copy simplest existing app; rename
       package to `@free-react-templates/tally`; `npm install` at root
       BEFORE committing so `package-lock.json` registers the workspace;
       `public/CNAME` = `tally.free.componentdock.com`; `"homepage"` =
       `https://tally.free.componentdock.com`; vite.config.ts keeps
       `injectUiSource()`)
3. [ ] Write spec-driven tests first (TDD, 100% coverage required): page
       structure, heading text ("Button #06" — artifact, exact), 16 stat
       buttons with the exact copy + order matrix, icon side/alignment
       matrix, tinted vs white icons, hover darkening (4 colors), 60px
       icon box / 22px number / muted label anatomy, signature shadow,
       focus-visible, responsive (4-col → 1-col), footer
4. [ ] Implement `src/App.tsx` + `src/components/` (e.g. `StatButton.tsx`,
       `StatButtonsSection.tsx`; `Navbar`/`Hero` not needed — none in
       reference; add the muted Component Dock footer)
5. [ ] Tokens in `src/index.css` `@theme` (see design tokens list — 4
       accents + 4 hovers; white; label opacities)
6. [ ] `scripts/verify-app.sh tally` green (typecheck + lint + vitest 100% + build); `npm run spec:validate` for `template-tally`
7. [ ] PR: "feat: add Tally (ColorLib Bootstrap Buttons 16 recreation)" —
       description MUST include: source template + preview URL (note the
       `/bb/` quirk AND the "Button #06" heading-number artifact), design
       tokens used, what differs (renames, placeholders, lucide icons)
8. [ ] Merge immediately (`gh pr merge --squash --delete-branch`)
9. [ ] After merge: TEMPLATES.md "Bootstrap Buttons 16" row (line 677)
       `[~]` → `[x]` + `https://tally.free.componentdock.com` + `npm run
    readme:status`; push
