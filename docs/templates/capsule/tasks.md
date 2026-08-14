# Capsule (ColorLib Bootstrap Buttons 12) — Tasks & Design Notes

> Prep artifacts prepared on `main`. Recreation name: **Capsule** (NEW name
> — the ColorLib source keeps its name "Bootstrap Buttons 12").
> Implementation ships on `feat/template-capsule` per the standard PR flow.

## Design notes

- **Original:** ColorLib "Bootstrap Buttons 12" — free UI-kit button
  component template (source:
  https://colorlib.com/wp/template/bootstrap-buttons-12/). TEMPLATES.md
  row: line 673 (**Bootstrap Buttons (20)**). The `bootstrap-buttons-12`
  slug appears exactly once (no dup rows to mark).
- **Live preview DOM analyzed (REACHABLE, verified 2026-08-14):** the
  default `https://preview.colorlib.com/theme/bootstrap-buttons-12/`
  returns **404** — the REAL preview is
  `https://preview.colorlib.com/theme/bb/bootstrap-buttons-12/` (HTTP 200,
  25.9KB HTML, `<title>Button 02</title>`; the nested `/bb/` subpath was
  discovered by scraping the ColorLib template page — same pattern as
  Buttons 01–11). Stylesheets: `css/style.css` (230KB — Bootstrap 4 base +
  the custom dark theme; token source) and `css/ionicons.min.css` (glyph
  font used by the heart + social logos). JS bundle (jquery/popper/
  bootstrap + `js/main.js`) is only needed for the THREE dropdown toggles;
  everything else is static. Computed styles verified in a live browser
  (2026-08-14) — see key values below.
- **⚠ Preview URL quirk:** the default preview URL 404s; the REAL one
  lives under `/theme/bb/bootstrap-buttons-12/`. Mention this in the PR
  description.
- **⚠ Heading-number artifact:** the `h2` renders **"Button #02"** (source
  has a leading space: `<h2 class="heading-section"> Button #02</h2>`) and
  the `<title>` is "Button 02" — the number was copy-pasted from the
  "Bootstrap Buttons 02" sibling and never updated (same kind of artifact
  as Buoy/11's "#01 — Bootstrap 4 Buttons"). Render the h2 EXACTLY as the
  reference: **"Button #02"**. Do NOT "fix" it to "#12". Use the app's own
  `<title>` (e.g. "Capsule — Button Showcase") per repo convention.
- **Screenshot (TEMPLATES.md, 1200×972) viewed 2026-08-14:** CONSISTENT
  with the live page — dark `≈#111` background, white headings, flat
  buttons, indigo primary, pill Large buttons, same section order. Unlike
  Buoy/BB11's outdated screenshot, both references AGREE here, so no
  screenshot-vs-live discrepancy to warn implementers about.
- **Signature (name source):** the PILL buttons. `btn-round` AND every
  `btn-lg` button render `border-radius: 40px` (capsule-shaped) while
  base/sm buttons stay perfectly SQUARE (`border-radius: 0px`) — the
  capsule/square contrast on a near-black surface is the template's
  identity. The page is FLAT: computed `box-shadow: none` on every button
  (see dead-code note below). This is the OPPOSITE of the Buoy/11
  floating-shadow signature.
- **FLAT — dead-code warning:** the custom `.btn` rule declares BOTH
  `box-shadow: none !important` AND (later, non-important)
  `0px 10px 20px -6px rgba(0,0,0,0.12)` (hover `0px 12px 20px -6px
rgba(0,0,0,0.21)`). The `!important` wins — computed style is `none` at
  rest, hover, AND focus. The shadow rules are dead code; DO NOT implement
  any button shadows (the vision check of the live page confirms flat).
- **Dark theme:** `body { background: #111; font-family: "Poppins",
Arial, sans-serif; font-size: 15px; line-height: 1.8; }`. Heading `h2
.heading-section` = 32px `#fff` weight 400; block captions = `h2 >
small` 16px `#fff`. `.ftco-section { padding: 7em 0 }` (105px).
- **Custom palette (replaces Bootstrap defaults):**
  - primary `#494ca2` INDIGO (focus `#414490`) — NOT Bootstrap blue
  - secondary `#6c757d` (focus `#60686f`)
  - success `#94aa2a` OLIVE (focus `#829625`) — NOT Bootstrap green
  - danger `#f0134d` PINK-RED (focus `#dc0e44`)
  - warning `#f1bc31` AMBER, **white text** (focus `#efb419`) — NOT
    Bootstrap's dark warning text
  - info `#64c4ed` SKY (focus `#4dbbea`)
  - light `#f8f9fa` with DARK text `#212529` (Bootstrap default, kept)
  - dark `#343a40` (focus `#292d32`)
  - Social: facebook `#4f69a2`, twitter `#69b6f0`, linkedin `#2884ba`,
    pinterest `#d03940`, dribbble `#ea6294` — each with solid / outline /
    link variants.
- **Button anatomy (computed):** `.btn` = 14px, weight 400, padding
  `11px 16px`, `border-radius: 0px` (SQUARE), `border-width: 1px` solid in
  the button's own color (e.g. primary `border: 1px solid #494ca2`),
  `cursor: pointer`, `overflow: hidden`, NO transition, NO shadow.
  `.btn-round` = `border-radius: 40px` (PILL). `.btn-sm` = 12px / `5px
10px` / square. `.btn-lg` = 16px / `17px 24px` / **PILL (40px)** —
  large buttons are capsules even without `btn-round`. `.btn-block` =
  `display: block; width: 100%`. `.btn-link` = transparent bg, `border:
none`, `box-shadow: none`, `padding: 0`, colored text. Disabled =
  `opacity: 0.65` (Bootstrap).
- **Outline behavior:** transparent bg + 1px colored border + colored
  text; hover/focus fills solid with white text (Light keeps Bootstrap's
  dark-text fill).
- **Structure observed (1:1):** `section.ftco-section#buttons` →
  `div.container` → `div.row.mb-4` > `col-md-12` > `h2.heading-section`
  **"Button #02"** → twelve `div.row.mb-5` blocks:
  1. **Pick your style** — 4 buttons: Default (solid), Default Outline,
     Default Round (pill), Outline Round (pill).
  2. **Pick your size** — solid row: Small Size / Regular Size / Large
     Size; outline row: same three labels.
  3. **Pick your color** — solid row: Primary / Success / Danger / Warning
     / Info / Light / Dark; outline row: same labels.
  4. **Buttons with icons** — heart icon: Primary (leading), Outline
     primary (leading), Success (trailing), Outline Success (trailing),
     Danger (leading), Outline danger (leading).
  5. **Social Buttons** — 5 brand rows; each = 4 icon-only (solid, solid
     round, outline, outline round) + 3 labelled (solid / outline / link):
     FB "Share - 8.2k / 8.5k / 8k", Twitter "Connect with Twitter" ×3,
     Linkedin "Connect with Linkedin" ×3, Pinterest "Pin it - 1k" ×3,
     Dribbble "Find us on Dribbble" ×3.
  6. **Links** — 7 `a.btn-link`: Primary link, Secondary link, Success
     link, Danger link, Warning link, Info link, Dark link.
  7. **Disabled Buttons** — 2 disabled `btn-lg` anchors: "Primary link"
     (primary), "Secondary Link" (dark — capital "L" typo, keep).
  8. **Buttons with Dropdown** — 3 dropdowns (primary / success / danger),
     toggle "Dropdown button", menu items Action / Another action /
     Something else here.
  9. **Buttons Groups** — 5 groups: primary (lg: Primary / Outline Primary
     / Large), success (Success / Outline Success / Medium), danger
     (Danger / Outline Danger / Medium), warning (Warning / Outline
     Warning / Medium), info (Info / Outline Info / Medium).
  10. **Checkboxes (Colors)** — `col-md-4`: Primary, Success, Danger,
      Warning, Info (checked), Disabled (dark, checked, disabled).
  11. **Radio Buttons (Colors)** — `col-md-4`: same six labels, radios.
  12. **Block Level Buttons** — `col-md-6`: 2 `btn-lg btn-block`:
      "Block Level info" (warning), "Block Level Success" (info) — labels
      are mismatched source copy, keep as authored.
  - Footer: NONE in original → add minimal Component Dock footer.
- **Checkbox details (custom, from CSS):** native input hidden
  (`visibility: hidden`, absolute), replaced by a large Ionicons glyph —
  unchecked `\f15c` (square outline, 37px, `rgba(0,0,0,0.2)`), checked
  `\f148` (checkmark, 30px, variant color); label `<span>` `margin-left:
35px`. Variants: `.checkbox-<color>` sets the checked glyph color.
  Disabled: `opacity: 0.65`, `cursor: not-allowed`. Recreate with a
  visually-hidden native checkbox + a custom box/check element (lucide
  `Square`/`Check` or a CSS box) — same visual result, no Ionicons font.
- **Radio details (custom, from CSS):** native input off-screen
  (`left: -9999px`); label `padding-left: 28px; line-height: 20px`;
  `::before` = 18px circle, `border: 2px solid rgba(255,255,255,0.2)`,
  `background: #000`; `::after` = 12px dot in variant color, hidden
  (opacity 0, scale 0) until `:checked` (opacity 1, scale 1, `transition:
all 0.2s ease`). Variants: `.radio-<color>` sets dot + ring color.
- **Dropdown details (from CSS):** `.dropdown .dropdown-menu` = white bg,
  `border: none`, `box-shadow: 0px 10px 34px -20px rgba(0,0,0,0.41)`;
  items 13px `rgba(0,0,0,0.7)`, hover → `#000`. Toggle caret is
  Bootstrap's `::after` triangle. Recreate with React state.
- **Spacing:** buttons `mr-md-2 mb-md-0 mb-2` (0.5rem right on md+, 0.5rem
  bottom below md); block rows `mb-5` (3rem); icon gap `mr-1`/`ml-1`
  (0.25rem); social rows `mb-4`; links row `mb-2`.
- **Recreation notes:**
  - Tailwind v4 tokens in `@theme`: `--color-primary: #494ca2;` etc. — all
    7 semantic + 5 social + focus shades; use via Tailwind classes.
  - ONE reusable `KitButton`/`ShowcaseButton` component with a `variant`
    prop (solid | outline | link) + `color` prop + optional `round` /
    `size` (sm | base | lg) — the page is a big button catalog; a single
    parameterized component keeps it DRY. Buttons are `<button>` elements
    (the reference uses `<button>` except the Links and Disabled rows,
    which are `<a role="button">` — keep anchors as `<a>` for those two
    rows; use `packages/ui` Button/ButtonLink where they fit, they must be
    imported for knip).
  - KEY fidelity points vs siblings: (1) DARK `#111` page — this is the
    first of the button series on a dark background; (2) FLAT buttons —
    NO shadows at all (opposite of Buoy/11); (3) square base vs PILL
    large/round — the capsule signature; (4) custom palette — indigo
    `#494ca2` primary (NOT Bootstrap blue), olive `#94aa2a` success
    (NOT green), amber `#f1bc31` warning with WHITE text (NOT dark);
    (5) 1px solid border matching each button's fill; (6) weight 400.
  - Warning solid text is WHITE (`#fff`) — unlike Bootstrap's dark
    warning text; Light solid text is `#212529`.
  - Focus behavior: the reference's only per-color interaction is a
    darker `:focus` fill (e.g. primary `#414490`). Keep a
    `focus-visible` ring per repo a11y convention on top.
  - Dropdowns: implement with React state — one open at a time, close on
    outside click + Escape, `aria-expanded` / `aria-haspopup="menu"`,
    menu items as `<a>` (or buttons) per repo conventions. No Bootstrap JS.
  - Icons: `lucide-react` — Heart (buttons with icons), Facebook, Twitter,
    Linkedin, Pinterest, Dribbble (social buttons), Check/Square for the
    custom checkboxes. NO Ionicons font, NO copied glyph CSS.
  - Mobile: `7em` section padding is tall on phones — reduce
    (`py-16`/`py-12`-ish); rows wrap with the reference's bottom margins;
    the Checkboxes/Radio two-column row stacks below md.
  - Footer: minimal muted "More templates at Component Dock" linking
    https://www.componentdock.com/.
  - Do NOT copy the CSS/HTML — re-implement with Tailwind tokens. No
    Bootstrap dependency, no jquery.
  - The three disabled/dropdown/group edge cases (duplicate `id`
    `dropdownMenuButton` in the source, stray `<br>` in the "Pick your
    size" h2, leading space in the title h2) are source sloppiness — do
    NOT reproduce them; only the visible copy ("Button #02", "Secondary
    Link", "Block Level info"/"Block Level Success") is fidelity-relevant.

## Tasks (implementer checklist)

1. [ ] `feat/template-capsule` branch from latest main
2. [ ] Scaffold app `apps/capsule` (copy simplest existing app; rename
       package to `@free-react-templates/capsule`; `npm install` at root
       BEFORE committing so `package-lock.json` registers the workspace;
       `public/CNAME` = `capsule.free.componentdock.com`; `"homepage"` =
       `https://capsule.free.componentdock.com`; vite.config.ts keeps
       `injectUiSource()`)
3. [ ] Write spec-driven tests first (TDD, 100% coverage required): page
       structure (12 blocks in order), "Button #02" heading (artifact —
       do NOT fix to "#12"), style/size/color rows, icon buttons (icon
       side per variant), social rows (5 brands × 7 buttons, copy + round
       icon-only), links row, disabled row (opacity, aria-disabled),
       dropdown open/close (aria-expanded, outside click/Escape), groups
       (joined), checkboxes (6, colored, Disabled), radios (6, colored,
       Disabled), block buttons, flat (no shadow), responsive, footer
4. [ ] Implement `src/App.tsx` + `src/components/` (e.g. `KitButton.tsx`,
       `KitSection.tsx`, `DropdownMenu.tsx`, `CheckboxItem.tsx`,
       `RadioItem.tsx`; no Navbar/Hero — none in reference; add the muted
       Component Dock footer)
5. [ ] Tokens in `src/index.css` `@theme` (see design tokens list — 7
       semantic colors + focus shades + 5 social colors; dark page `#111`;
       Poppins font)
6. [ ] `scripts/verify-app.sh capsule` green (typecheck + lint + vitest
       100% + build); `npm run spec:validate` for `template-capsule`
7. [ ] PR: "feat: add Capsule (ColorLib Bootstrap Buttons 12 recreation)"
       — description MUST include: source template + preview URL (note
       the `/bb/` quirk and the "Button #02" heading artifact), design
       tokens used, what differs (renames, placeholders, lucide icons,
       React dropdowns)
8. [ ] Merge immediately (`gh pr merge --squash --delete-branch`)
9. [ ] After merge: TEMPLATES.md "Bootstrap Buttons 12" row (line 673)
       `[~]` → `[x]` + `https://capsule.free.componentdock.com` + `npm
    run readme:status`; push
