# Stencil (ColorLib Bootstrap Buttons 13) — Tasks & Design Notes

> Prep artifacts prepared on `main`. Recreation name: **Stencil** (NEW name
> — the ColorLib source keeps its name "Bootstrap Buttons 13").
> Implementation ships on `feat/template-stencil` per the standard PR flow.

## Design notes

- **Original:** ColorLib "Bootstrap Buttons 13" — free UI-kit button
  component template (source:
  https://colorlib.com/wp/template/bootstrap-buttons-13/). TEMPLATES.md
  row: line 674 (**Bootstrap Buttons (20)**). The `bootstrap-buttons-13`
  slug appears exactly once (no dup rows to mark).
- **Live preview DOM analyzed (REACHABLE, verified 2026-08-14):** the
  default `https://preview.colorlib.com/theme/bootstrap-buttons-13/`
  returns **404** — the REAL preview is
  `https://preview.colorlib.com/theme/bb/bootstrap-buttons-13/` (HTTP 200,
  27.3KB HTML, `<title>Button 03</title>`; the nested `/bb/` subpath was
  discovered by scraping the ColorLib template page — same pattern as
  Buttons 01–12). Stylesheets: `css/style.css` (227KB — Bootstrap 4 base +
  the custom dark theme; token source) and `css/ionicons.min.css` (glyph
  font used by the heart/social/checkbox/radio icons). JS bundle
  (jquery/popper/bootstrap + `js/main.js`) is only needed for the FOUR
  dropdown toggles; everything else is static. Computed styles verified in
  a live browser (2026-08-14) — see key values below.
- **⚠ Preview URL quirk:** the default preview URL 404s; the REAL one
  lives under `/theme/bb/bootstrap-buttons-13/`. Mention this in the PR
  description.
- **⚠ Heading-number artifact:** the `h2` renders **"Button #03"** (source
  has a leading space: `<h2 class="heading-section"> Button #03</h2>`) and
  the `<title>` is "Button 03" — the number was copy-pasted from the
  "Bootstrap Buttons 03" sibling and never updated (same kind of artifact
  as Capsule/12's "Button #02" and Buoy/11's "#01 — Bootstrap 4 Buttons").
  Render the h2 EXACTLY as the reference: **"Button #03"**. Do NOT "fix"
  it to "#13". Use the app's own `<title>` (e.g. "Stencil — Button
  Showcase") per repo convention.
- **⚠ Caption typo:** the radio column caption reads **"Radios Buttons"**
  (plural "Radios") — keep as authored.
- **Screenshot (TEMPLATES.md, 1200×972 AVIF) viewed 2026-08-14:**
  CONSISTENT with the live page — dark `≈#222` background, white
  "Button #03" heading, the four-color palette (royal blue / lilac /
  violet / mint), ALL-CAPS labels, flat rounded buttons, pill round
  variants, same section order. Both references AGREE, so no
  screenshot-vs-live discrepancy to warn implementers about.
- **Signature (name source):** the STENCILED ALL-CAPS labels
  (`text-transform: uppercase` on every `.btn`) + flat 2px-bordered
  buttons with a barely-rounded 2px radius + the blue/lilac/violet/mint
  palette on dark `#222`. The page is FLAT: computed `box-shadow: none`
  on every button (same dead-code pattern as Capsule/12 — the custom
  `.btn` declares BOTH `box-shadow: none !important` AND (later,
  non-important) `0px 10px 20px -6px rgba(0,0,0,0.12)` (hover `0px 12px
20px -6px rgba(0,0,0,0.21)`); the `!important` wins — computed style is
  `none` at rest, hover, AND focus; `button:hover, button:focus` also
  force `box-shadow: none !important`). DO NOT implement any button
  shadows. NOT the Buoy/11 floating-shadow signature.
- **Dark theme:** `body { background: #222; font-family: "Poppins",
Arial, sans-serif; font-size: 15px; line-height: 1.8; font-weight:
normal; }`. Heading `h2.heading-section` = 32px `#fff` weight 400; block
  captions = `h2 > small` 16px `#fff`. `.ftco-section { padding: 7em 0 }`
  (105px). Link color `#3e64ff`.
- **Custom palette (replaces Bootstrap defaults):**
  - primary `#3e64ff` ROYAL BLUE (hover/focus `#0b3bff`) — NOT Bootstrap
    blue
  - secondary `#bd83ce` LILAC (hover `#aa5ec0`) — NOT Bootstrap gray
  - tertiary `#8105d8` VIOLET (hover `#6304a6`) — custom class
  - quarternary `#52de97` MINT (hover `#29d47d`) — custom class
  - outline (plain `btn-outline`): transparent bg, WHITE text, 2px solid
    `rgba(255,255,255,0.1)`; hover text `rgba(255,255,255,0.5)` + border
    `rgba(255,255,255,0.05)`
  - outline-primary (Group block only): white text + 2px solid
    **`#007bff`** (Bootstrap blue — the custom `.btn.btn-outline-primary
{ color: #fff }` rule ONLY flips the text color; the border stays
    Bootstrap's blue. Do NOT substitute `#3e64ff`.)
  - outline-secondary (Group block only): white text + 2px solid `#bd83ce`
  - Social: facebook `#4f69a2`, twitter `#69b6f0`, linkedin `#2884ba`,
    pinterest `#d03940`, dribbble `#ea6294` (same 5 as the rest of the
    series)
- **Button anatomy (computed):** `.btn` = **13px, weight 500, padding
  `14px 18px`, `border-radius: 2px`, `border-width: 2px`** solid in the
  button's own color, `cursor: pointer`, `overflow: hidden`, NO
  transition, NO shadow, **`text-transform: uppercase`**. `.btn-round` =
  `border-radius: 40px` (PILL). `.btn-block` = `display: block; width:
100%`. `.btn-sm` = 12px / `5px 20px` (unused on this page). `.btn-lg` =
  16px / `17px 24px` / pill (unused). `.btn.btn-link` = transparent bg,
  `border: none`, `box-shadow: none`, **WHITE text, padding KEPT at
  `14px 18px`** (unlike Capsule's links with `padding: 0`). Disabled =
  `opacity: 0.65` (Bootstrap). `.btn small` (the Like count badge) = bg
  `#333333`, `padding: 2px 8px`.
- **Structure observed (1:1):** `section.ftco-section#buttons` →
  `div.container` → `div.row.mb-4` > `col-md-12` > `h2.heading-section`
  **"Button #03"** → then NINE `div.row.mb-5` blocks (the first four have
  NO captions):
  1. **Default** — row 1: 4 solid block buttons (col-md-3 each,
     `btn-block`): primary / secondary / tertiary / quarternary, all
     "Default"; row 2: 4 × plain `btn-outline` block buttons, all
     "Default" (4× IDENTICAL ghosts — source quirk, keep as authored).
  2. **Round** — row 1: 4 solid pills (`btn-round btn-{primary,secondary,
tertiary,quarternary}`); row 2: 4 `btn-round btn-outline` pills.
  3. **Icon buttons** — one nested row of EIGHT col-md-3 block buttons
     (wraps 4+4), all "Default with icon": heart BEFORE label (`mr-1`) on
     solid primary / solid tertiary / outline 1 / outline 3; heart AFTER
     (`ml-1`) on solid secondary / solid quarternary / outline 2 /
     outline 4 (alternating).
  4. **Full-width social** — nested row of 4 col-md-3 columns; each
     stacks 3 buttons (`mb-3 text-left w-100`): "Twitter" /
     "Facebook" / "Find us on Dribbble" with brand icon `mr-2`. Columns:
     solid, `btn-outline`, `btn-round`, `btn-round btn-outline`.
  5. **Social Buttons** (caption) — 5 rows (`col-md-12 mb-4`), each 7
     buttons: 4 icon-only (solid, round solid, outline, round outline) +
     3 labelled (solid `btn-<brand>`, `btn-outline`, **`btn-link ml-2`** —
     note: the link variant has NO brand class → WHITE text): FB
     "Share - 8.2k / 8.5k / 8k", Twitter "Connect with Twitter" ×3,
     Linkedin "Connect with Linkedin" ×3, Pinterest "Pin it - 1k" ×3,
     Dribbble "Find us on Dribbble" ×3.
  6. **Dropdown Buttons** (caption) — nested row of 4 col-md-3 dropdowns
     (`div.dropdown.d-block`), toggles "Dropdown button" in primary /
     secondary / tertiary / quarternary (`btn-block dropdown-toggle`),
     menu items Action / Another action / Something else here.
  7. **Group Buttons** (caption) — nested row of 2 col-md-6 joined
     groups (`btn-group btn-block`): group 1 primary "Button 1" /
     outline-primary "Outline Button" / "Button 1"; group 2 secondary
     "Button 2" / outline-secondary "Outline Button" / "Button 2".
  8. **Checkboxes + Radios Buttons** (captions INSIDE the columns) —
     `row mb-5` with 2 × `col-md-4`: Checkboxes column = 5 checked
     checkboxes `checkbox-{primary,secondary,tertiary,quarternary,dark}`,
     labels Primary / Success / Danger / Warning / Disabled (label-variant
     mismatch is source copy, keep); Disabled also disabled. Radios
     Buttons column = 5 radios `radio-{...same}`, same labels; first 4
     checked, Disabled disabled (source id/name "radio6" — skip radio5).
  9. **Action row** — `div.row` (NO mb-5) > col-md-12: 7 round buttons,
     6 `btn-round btn-outline` + 1 `btn-round btn-primary` "Create
     Account": "Watch Photos" (image icon), "Download" (download icon),
     icon-only download (NO label), "Add Comment" (NO icon — quirk),
     icon-only chat (NO label), "Like" + `small.ml-4.rounded` "2" badge
     (heart), "Create Account" (primary, no icon).
  - Footer: NONE in original → add minimal Component Dock footer.
- **Checkbox details (custom, from CSS):** native input hidden
  (`visibility: hidden`, absolute), replaced by a large Ionicons glyph —
  unchecked `\f15c` (square outline, 37px, `rgba(0,0,0,0.2)`), checked
  `\f148` (checkmark, 30px, variant color); label `<span>` `margin-left:
35px`. Variants: `.checkbox-<color>` sets the checked glyph color.
  Disabled: `opacity: 0.65`. Recreate with a visually-hidden native
  checkbox + a custom box/check element (lucide `Square`/`Check` or CSS)
  — same visual result, no Ionicons font.
- **Radio details (custom, from CSS):** native input off-screen
  (`left: -9999px`); label `padding-left: 28px; line-height: 20px`;
  `::before` = 18px circle, `border: 2px solid rgba(255,255,255,0.1)`,
  `background: #222` (note `#222`, NOT `#000` like Capsule); `::after` =
  12px dot in variant color, hidden (opacity 0, scale 0) until `:checked`
  (opacity 1, scale 1, `transition: all 0.2s ease`); when checked the
  ring `border-color` also turns the variant color
  (`.radio-<color> input:checked + label:before`). Variants:
  `.radio-<color>` sets dot + ring color.
- **Dropdown details (from CSS):** `.dropdown .dropdown-menu` = white bg,
  `border: none`, `box-shadow: 0px 10px 34px -20px rgba(0,0,0,0.41)`;
  items 13px `rgba(0,0,0,0.7)`, hover → `#000`. Toggle caret is
  Bootstrap's `::after` triangle. Recreate with React state.
- **Group join:** Bootstrap `-1px` margin trick — members touch; first
  member radius `2px 0 0 2px`, inner members radius 0 (computed).
- **Spacing:** kit-row buttons `mb-2 mb-md-0` (0.5rem bottom below md);
  full-width social `mb-3`; social brand rows `mb-4`; icon gap `mr-1` /
  `ml-1` (0.25rem), social icon gap `mr-2` (0.5rem), link variant
  `ml-2`; block rows `mb-5` (3rem), title row `mb-4`; action row NO
  bottom margin.
- **Recreation notes:**
  - Tailwind v4 tokens in `@theme`: `--color-primary: #3e64ff;` etc. —
    the 4 semantic colors + hover shades + 5 social colors + the outline
    ghost border; use via Tailwind classes.
  - ONE reusable `KitButton`/`ShowcaseButton` component with a `variant`
    prop (solid | outline | link) + `color` prop (primary | secondary |
    tertiary | quarternary | fb | twitter | linkedin | pinterest |
    dribbble) + optional `round`, `block`, `icon` (before/after), and
    label props — the page is a big button catalog; a single
    parameterized component keeps it DRY. Buttons are `<button>` elements
    (the reference uses `<button>` everywhere); use `packages/ui`
    Button/ButtonLink where they fit, they must be imported for knip.
  - KEY fidelity points vs siblings: (1) DARK `#222` page — NOT `#111`
    (Capsule); (2) FLAT buttons — NO shadows at all (like Capsule,
    opposite of Buoy/11); (3) **`text-transform: uppercase`** on every
    label — the stencil signature, and 13px/weight 500 (NOT Capsule's
    14px/400); (4) **2px border + 2px radius** (NOT Capsule's 1px/square);
    (5) the four-color palette — royal blue `#3e64ff` primary (NOT
    Bootstrap blue), lilac `#bd83ce` secondary (NOT gray), violet
    `#8105d8` tertiary, mint `#52de97` quarternary; (6) plain `btn-outline`
    = WHITE text + translucent-white 2px border (NOT per-color outlines);
    (7) group outline-primary keeps Bootstrap blue `#007bff` border;
    (8) social link variant = white text with padding KEPT (NOT brand
    colored, NOT `padding: 0`).
  - The first four blocks have NO captions (unlike Capsule's "Pick your
    style" captions) — the blocks flow directly under the "Button #03"
    title. The checkbox/radio captions sit INSIDE their `col-md-4`
    columns (not full-width).
  - Focus behavior: the reference's only per-color interaction is a
    darker `:hover/:focus` fill (e.g. primary `#0b3bff`); outline hover
    dims text/border. Keep a `focus-visible` ring per repo a11y
    convention on top.
  - Dropdowns: implement with React state — one open at a time, close on
    outside click + Escape, `aria-expanded` / `aria-haspopup="menu"`,
    menu items as `<a>` (or buttons) per repo conventions. No Bootstrap
    JS.
  - Icons: `lucide-react` — Heart (icon buttons + Like), Image (Watch
    Photos), Download, MessageCircle/MessagesSquare (chat icon), Facebook,
    Twitter, Linkedin, Pinterest, Dribbble (social), Check/Square for the
    custom checkboxes. NO Ionicons font, NO copied glyph CSS.
  - Mobile: `7em` section padding is tall on phones — reduce
    (`py-16`/`py-12`-ish); rows wrap with the reference's bottom margins;
    the Checkboxes/Radios two-column row stacks below md; the full-width
    social grid stacks to one column below md.
  - Footer: minimal muted "More templates at Component Dock" linking
    https://www.componentdock.com/.
  - Do NOT copy the CSS/HTML — re-implement with Tailwind tokens. No
    Bootstrap dependency, no jquery.
  - Source-sloppiness to NOT reproduce (invisible only): duplicate
    `id="dropdownMenuButton"` on the first dropdown (the other three use
    `...2/3/4`), the stray leading space in the title h2, `radio5` skipped
    (ids jump `radio4` → `radio6`), whitespace text nodes. Fidelity-
    relevant copy to KEEP as authored: "Button #03", "Radios Buttons",
    "Default with icon", "Share - 8.2k/8.5k/8k", "Connect with Twitter /
    Linkedin", "Pin it - 1k", "Find us on Dribbble", the 4× identical
    outline "Default" row, "Add Comment" with no icon, the two icon-only
    buttons with no label, "Like" + "2" badge, "Create Account".

## Tasks (implementer checklist)

1. [ ] `feat/template-stencil` branch from latest main
2. [ ] Scaffold app `apps/stencil` (copy simplest existing app; rename
       package to `@free-react-templates/stencil`; `npm install` at root
       BEFORE committing so `package-lock.json` registers the workspace;
       `public/CNAME` = `stencil.free.componentdock.com`; `"homepage"` =
       `https://stencil.free.componentdock.com`; vite.config.ts keeps
       `injectUiSource()`)
3. [ ] Write spec-driven tests first (TDD, 100% coverage required): page
       structure (title + 9 blocks in order), "Button #03" heading
       (artifact — do NOT fix to "#13"), "Radios Buttons" caption typo,
       uppercase labels, Default rows (4 solid + 4 identical outline),
       Round rows, icon buttons (8, heart side per variant), full-width
       social grid (4×3), social brand rows (5 brands × 7 buttons, copy +
       round icon-only + white link variant), dropdown open/close
       (aria-expanded, outside click/Escape), groups (joined, outline-
       primary `#007bff` border), checkboxes (5, colored, Disabled),
       radios (5, colored, Disabled), action row (7, icon-only quirks,
       Like badge), flat (no shadow), responsive, footer
4. [ ] Implement `src/App.tsx` + `src/components/` (e.g. `KitButton.tsx`,
       `KitSection.tsx`, `DropdownMenu.tsx`, `CheckboxItem.tsx`,
       `RadioItem.tsx`; no Navbar/Hero — none in reference; add the muted
       Component Dock footer)
5. [ ] Tokens in `src/index.css` `@theme` (see design tokens list — 4
       semantic colors + hover shades + 5 social colors; dark page `#222`;
       Poppins font)
6. [ ] `scripts/verify-app.sh stencil` green (typecheck + lint + vitest
       100% + build); `npm run spec:validate` for `template-stencil`
7. [ ] PR: "feat: add Stencil (ColorLib Bootstrap Buttons 13 recreation)"
       — description MUST include: source template + preview URL (note
       the `/bb/` quirk and the "Button #03" heading artifact + "Radios
       Buttons" typo), design tokens used, what differs (renames,
       placeholders, lucide icons, React dropdowns)
8. [ ] Merge immediately (`gh pr merge --squash --delete-branch`)
9. [ ] After merge: TEMPLATES.md "Bootstrap Buttons 13" row (line 674)
       `[~]` → `[x]` + `https://stencil.free.componentdock.com` + `npm
 run readme:status`; push
