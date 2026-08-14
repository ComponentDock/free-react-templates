# Chunky (ColorLib Bootstrap Buttons 15) — Tasks & Design Notes

> Prep artifacts prepared on `main`. Recreation name: **Chunky** (NEW name
> — the ColorLib source keeps its name "Bootstrap Buttons 15").
> Implementation ships on `feat/template-chunky` per the standard PR flow.

## Design notes

- **Original:** ColorLib "Bootstrap Buttons 15" — free UI-kit button
  component template (source:
  https://colorlib.com/wp/template/bootstrap-buttons-15/). TEMPLATES.md
  row: line 676 (**Bootstrap Buttons (20)**). The `bootstrap-buttons-15`
  slug appears exactly once (no dup rows to mark).
- **Live preview DOM analyzed (REACHABLE, verified 2026-08-14):** the
  default `https://preview.colorlib.com/theme/bootstrap-buttons-15/`
  returns **404** — the REAL preview is
  `https://preview.colorlib.com/theme/bb/bootstrap-buttons-15/` (HTTP 200,
  27.3KB HTML, `<title>Button 05</title>`; the nested `/bb/` subpath was
  discovered by scraping the ColorLib template page — same pattern as
  Buttons 01–14). Stylesheets: `css/style.css` (232KB — Bootstrap 4 base +
  the custom light theme; token source) and `css/ionicons.min.css` (glyph
  font used by the heart/social/checkbox icons). JS bundle
  (jquery/popper/bootstrap + `js/main.js`) is only needed for the FOUR
  dropdown toggles; everything else is static. Computed styles read from
  the live stylesheet (2026-08-14) — see key values below.
- **⚠ Preview URL quirk:** the default preview URL 404s; the REAL one
  lives under `/theme/bb/bootstrap-buttons-15/`. Mention this in the PR
  description.
- **⚠ Heading-number artifact:** the `h2` renders **"Button #05"** (source
  has a leading space: `<h2 class="heading-section"> Button #05</h2>`) and
  the `<title>` is "Button 05" — the number was copy-pasted from the
  "Bootstrap Buttons 05" sibling and never updated (same kind of artifact
  as Levitate/14's "Button #04", Stencil/13's "Button #03", Capsule/12's
  "Button #02" and Buoy/11's "#01 — Bootstrap 4 Buttons"). Render the h2
  EXACTLY as the reference: **"Button #05"**. Do NOT "fix" it to "#15".
  Use the app's own `<title>` (e.g. "Chunky — Button Showcase") per repo
  convention.
- **⚠ Caption typo:** the radio column caption reads **"Radios Buttons"**
  (plural "Radios") — keep as authored (same typo as Levitate/BB14).
- **⚠ Slide Button copy quirk:** switch #1 = unchecked, blue "ON" knob
  left, description **"Toggle is on"**; switch #2 = CHECKED (per CSS the
  knob turns red and reads "OFF" — the HTML span says "ON" but renders
  gray while the `:after` "OFF" turns white), description **"Toggle is
  Off"**. Replicate the VISIBLE result: switch 1 = ON state + "Toggle is
  on", switch 2 = OFF state + "Toggle is Off" (descriptions as authored,
  mismatched with the states is a source quirk — keep).
- **Screenshot (TEMPLATES.md `bootstrap-buttons-15.jpg`, 1200×972) viewed
  2026-08-14:** CONSISTENT with the live page — white background, bold
  dark "Button #05" heading, blue/teal/green/pink palette, icon buttons
  with a "slight 3D effect" (the chunky hard shadow), outline + round
  rows, social grid, dropdown + group sections. The static screenshot
  reads slightly flatter than the live page (hard offset shadows are
  subtle in the image) — the LIVE stylesheet is AUTHORITATIVE for the
  shadow (same situation as the Levitate/BB14 sibling). Structure + colors
  agree between both references.
- **Signature (name source):** CHUNKY — every button rests on a **hard,
  unblurred 3D "press" shadow** (`box-shadow: 3px 5px 0px 0px
<darker-shade>` for solid variants; base `.btn` = `0px 5px 0px 0px
#ebebeb`; outline variants use a LIGHTER shade), and the shadow is KEPT
  on hover/focus (only the fill deepens via `!important` per-color rules)
  — the opposite of the Buoy/BB11 + Levitate/BB14 siblings' soft floating
  shadow that lifts off on hover, and NOT the flat Stencil/Capsule
  treatment either. Combined with the **light `#fff` page**, the custom
  **steel-blue/teal/green/pink** palette, 5px-radius 1px borders, and
  title-case labels.
- **Light theme:** `body` keeps Bootstrap's default — the custom rule only
  sets `font-family: "Poppins", Arial, sans-serif; font-size: 15px;
line-height: 1.8; font-weight: normal;` (NO background override → page
  stays `#fff`). Heading `h2.heading-section` = **32px, `#212529` (near
  black, inherited), weight 400** (the custom `.heading-section` rule sets
  only font-size). Block captions = `h2 > small` **16px `#212529`**, NO
  uppercase. `.ftco-section { padding: 7em 0 }` (105px).
- **Custom palette (replaces Bootstrap defaults):**
  - primary `#4f81c7` STEEL BLUE, white text, shadow `3px 5px 0px
#3d73c0`, hover/focus `#3768ac` — NOT Bootstrap blue
  - secondary `#40bfc1` TEAL, white text, shadow `3px 5px 0px #39adaf`,
    hover/focus `#329a9c` — NOT Bootstrap gray
  - tertiary `#48da79` GREEN, white text, shadow `3px 5px 0px #33d669`,
    hover/focus `#28c75d` — custom class
  - quarternary `#ff78ae` PINK, white text, shadow `3px 5px 0px #ff5f9f`,
    hover/focus `#ff458f` — custom class (NOT a gradient — unlike BB14)
  - outline-<color>: white bg, colored text + 1px solid border, lighter
    shadow `#769dd3` / `#67cccd` / `#72e398` / `#ffabcd`; hover fills with
    the base color + white text
  - plain `btn-outline`: transparent/white bg, **BLACK text**, 1px solid
    `rgba(0,0,0,0.1)` — LIGHT ghost (NOT the translucent-white ghost of
    the dark-theme siblings)
  - Social: facebook `#4f69a2`, twitter `#69b6f0`, linkedin `#2884ba`,
    pinterest `#d03940`, dribbble `#ea6294` (same 5 as the rest of the
    series)
- **Button anatomy:** `.btn` = **14px, weight 500, padding `12px 16px`,
  `border-radius: 5px`, `border-width: 1px`** solid in the button's own
  color, `cursor: pointer`, **title-case labels (NO `text-transform`)**,
  `transition: all .3s ease`, `overflow: hidden`, `position: relative`,
  and **chunky hard shadow AT REST** (`3px 5px 0px 0px <shade>`).
  `.btn-round` = `border-radius: 40px` (PILL). `.btn-block` = `display:
block; width: 100%`. `.btn.btn-link` = transparent bg, `border: none`,
  `box-shadow: none`, **BLACK text, padding KEPT at `12px 16px`**.
  Disabled = `opacity: 0.65` (Bootstrap).
- **⚠ Shadow — the KEY fidelity point (verified 2026-08-14):** unlike
  Levitate/BB14 and Buoy/BB11, THIS template has NO shadow-removal rule —
  there is no `button:hover { box-shadow: none }` override. The shadow is
  a hard offset (no blur radius): solid variants `3px 5px 0px 0px
<darker>`, base/plain `0px 5px 0px 0px #ebebeb`, outline variants
  lighter (`#769dd3` etc.). Hover/focus: per-color `!important` rules
  darken background + border ONLY — the shadow persists. Implement that:
  rest shadow = chunky hard shadow; hover/focus = darker fill, shadow
  unchanged. Do NOT implement a shadow lift-off or a soft floating shadow.
- **Structure observed (1:1):** `section.ftco-section#buttons` →
  `div.container` → `div.row.mb-4` > `col-md-12` > `h2.heading-section`
  **"Button #05"** → then these blocks (row classes in parentheses):
  1. **Block A** (`row mb-5`, UNCAPPED) —
     a. `col-md-12 mb-3` > nested `row` of 4 × `col-md-3`: solid
     `btn-block` icon buttons, each with a **right-side icon strip**
     (`div.icon` = absolute `top:0 right:0 width:50px bottom:0`,
     bg `rgba(0,0,0,0.1)`): **Like** (primary, heart), **Delete**
     (secondary, trash), **Send** (tertiary, paper-plane),
     **Download** (quarternary, cloud-download).
     b. `col-md-12 mb-2` > nested `row` of 4 × `col-md-3`: **"Default"**
     ×4 outline (`btn-outline-primary/secondary/tertiary/quarternary`).
  2. **Block B** (`row mb-5`, UNCAPPED) —
     a. `col-md-12 mb-3`: **"Default"** ×4 round solid
     (`btn-round btn-primary/secondary/tertiary/quarternary`).
     b. `col-md-12 mb-2`: **"Default"** ×4 round outline
     (`btn-round btn-outline`).
  3. **Full-width social grid** (`div.row`, UNCAPPED) — nested row of 4
     `col-md-3` columns; each stacks 3 buttons (`mb-3 text-left w-100`):
     "Twitter" / "Facebook" / "Find us on Dribbble" with brand icon
     `mr-2`. Columns: solid, `btn-outline`, `btn-round`,
     `btn-round btn-outline` (12 buttons).
  4. **Dropdown Buttons** (`row mb-5`, caption) — nested row of 4
     `col-md-3` dropdowns (`div.dropdown.d-block`), toggles **"Dropdown
     button"** in primary / secondary / tertiary / quarternary
     (`btn-block dropdown-toggle`), menu items Action / Another action /
     Something else here.
  5. **Group Buttons** (`row mb-5`, caption) — nested row of 2
     `col-md-6` joined groups (`btn-group mb-2 mb-md-0 btn-block`):
     group 1 primary **"Button 1"** / outline-primary **"Outline
     Button"** / **"Button 1"**; group 2 secondary **"Button 2"** /
     outline-secondary **"Outline Button"** / **"Button 2"**.
  6. **Checkboxes + Radios Buttons + Slide Button** (`row mb-5`,
     captions INSIDE the columns) — 3 × `col-md-4`:
     a. Checkboxes column = 5 checked checkboxes
     `checkbox-{primary,secondary,tertiary,quarternary,dark}`, labels
     Primary / Success / Danger / Warning / Disabled (label-variant
     mismatch is source copy, keep); Disabled also disabled.
     b. Radios Buttons column = 5 radios
     `radio-{primary,secondary,tertiary,quarternary,dark}`, labels
     Primary / Success / Danger / Warning / Disabled; first 4
     checked, Disabled disabled.
     c. Slide Button column = 2 iOS toggles (`slide-button` > 2 ×
     `toggle-button-cover` > `button-cover d-flex align-items-center`
     > `.button.r` 74×36px with hidden checkbox + `.knobs` + `.layer`
     - `ml-2` description): switch #1 unchecked (blue ON knob left,
       "Toggle is on"), switch #2 checked (red OFF knob right, "Toggle
       is Off").
  7. **Social Buttons** (`row mb-5`, caption) — `col-md-12` caption,
     then 5 rows (`col-md-12 mb-4`), each 7 buttons: 4 icon-only (solid,
     round solid, outline, round outline) + 3 labeled (solid
     `btn-<brand>`, `btn-outline`, **`btn-link ml-2`** — link variant
     has NO brand class → BLACK text): FB "Share - 8.2k / 8.5k / 8k",
     Twitter "Connect with Twitter" ×3, Linkedin "Connect with Linkedin"
     ×3, Pinterest "Pin it - 1k" ×3, Dribbble "Find us on Dribbble" ×3.
  8. **Action row** — `div.row` (NO mb-5) > col-md-12: 7 round buttons,
     6 `btn-round btn-outline` + 1 `btn-round btn-primary` **"Create
     Account"**: "Watch Photos" (images icon), "Download" (download
     icon), icon-only download (NO label), "Add Comment" (NO icon —
     quirk), icon-only chat (NO label), "Like" + `small.ml-4.rounded`
     "2" badge (heart), "Create Account" (primary, no icon).
  - Footer: NONE in original → add minimal Component Dock footer.
- **KEY structural differences vs BB14/Levitate:** (1) NO "Pick Your
  Style/Size/Color" captions at all — Block A and Block B are UNCAPPED;
  (2) the full-width social grid (Twitter/FB/Dribbble ×4 variants) sits
  right after Block B, BEFORE Dropdown Buttons; (3) a NEW **Slide Button**
  block (iOS toggles) that BB14 does not have; (4) the custom palette is
  steel-blue/teal/green/pink (NOT purple/sky/green/gradient); (5) the
  quarternary CHECKBOX/RADIO color MATCHES the quarternary button pink
  `#ff78ae` here (BB14 had the mint `#52de97` quirk — NOT present in
  BB15); (6) the shadow is a hard chunky press (KEPT on hover), not a
  soft floating shadow (lifted on hover); (7) no `.btn-sm`/`.btn-lg` size
  block, no "Default with icon"/"Gradient Regular" copy.
- **Checkbox details (custom, from CSS):** native input hidden
  (`visibility: hidden`, absolute), replaced by a large Ionicons glyph —
  unchecked `\f15c` (square outline, 37px, `rgba(0,0,0,0.2)`), checked
  `\f148` (checkmark, 30px, variant color); label `<span>` `margin-left:
35px`. Variants: `.checkbox-<color>` sets the checked glyph color —
  primary `#4f81c7`, secondary `#40bfc1`, tertiary `#48da79`,
  quarternary `#ff78ae`, dark `#343a40`. Disabled: `opacity: 0.65`.
  Recreate with a visually-hidden native checkbox + a custom box/check
  element (lucide `Square`/`Check` or CSS) — same visual result, no
  Ionicons font.
- **Radio details (custom, from CSS):** native input off-screen (`left:
-9999px`); label `padding-left` ~28px; `::before` = 18px circle,
  `border: 2px solid rgba(0,0,0,0.1)`, `background: #fff` (WHITE fill —
  light theme); `::after` = 12px dot in variant color, hidden (opacity 0,
  scale 0) until `:checked` (opacity 1, scale 1, `transition: all 0.2s
ease`); when checked the ring `border-color` also turns the variant
  color. Variants: `.radio-<color>` sets dot + ring color (same five
  values as checkboxes).
- **Slide Button details (from CSS):** `.slide-button .button` = 74×36px,
  overflow hidden; `.layer` track = `background: #ebf7fc` (light blue),
  `border-radius: 100px`; knob = 28px circle `#03A9F4` blue, white bold
  10px text ("ON"/"OFF"), `border-radius: 50%`, top 4px, left 4px
  unchecked; CHECKED: knob `left: 42px`, bg `#F44336` red, "OFF" white,
  track `#fcebeb` (pink). Transition 0.3s ease all. Recreate with a
  hidden checkbox + sliding knob (React state + Tailwind transitions).
- **Dropdown details (from CSS):** `.dropdown .dropdown-menu` = white bg,
  `border: none`, `box-shadow: 0px 10px 34px -20px rgba(0,0,0,0.41)`;
  items 13px `rgba(0,0,0,0.7)`, hover bg `rgba(0,0,0,0.05)` + `#000`.
  Toggle caret is Bootstrap's `::after` triangle. Recreate with React
  state.
- **Group join:** Bootstrap `-1px` margin trick — members touch; first
  member radius `5px 0 0 5px`, inner members radius 0, last `0 5px 5px 0`.
- **Spacing:** kit-row buttons `mb-2 mb-md-0` (0.5rem bottom below md);
  Block A/B nested col wrappers `mb-3` / `mb-2`; full-width social grid
  buttons `mb-3`; social brand rows `mb-4`; icon gap `mr-1` (0.25rem),
  social icon gap `mr-2` (0.5rem), link variant `ml-2`; block rows
  `mb-5` (3rem), title row `mb-4`; social grid + action rows NO bottom
  margin.
- **Recreation notes:**
  - Tailwind v4 tokens in `@theme`: `--color-primary: #4f81c7;` etc. —
    the 4 solid colors + hover shades + 4 outline shades + the black
    ghost border + 5 social colors + toggle blue `#03A9F4` / red
    `#F44336` / tracks `#ebf7fc` / `#fcebeb`; use via Tailwind classes.
  - ONE reusable `KitButton`/`ShowcaseButton` component with a `variant`
    prop (solid | outline | link) + `color` prop (primary | secondary |
    tertiary | quarternary | fb | twitter | linkedin | pinterest |
    dribbble) + optional `round`, `block`, `icon` props — the page is a
    big button catalog; a single parameterized component keeps it DRY.
    Buttons are `<button>` elements (the reference uses `<button>`
    everywhere); use `packages/ui` Button/ButtonLink where they fit,
    they must be imported for knip.
  - KEY fidelity points vs siblings: (1) LIGHT `#fff` page — NOT dark
    `#222`/`#111` (Stencil/Capsule); (2) **chunky HARD offset shadow
    `3px 5px 0px 0px <shade>`** — the signature (opposite of
    Levitate/Buoy's soft floating shadow AND of Stencil's flat
    treatment); (3) hover/focus: fill darkens ONLY, shadow KEPT — do
    NOT implement a shadow lift-off; (4) **5px radius + 1px border +
    14px/500 + `12px 16px`** (same anatomy as Levitate/BB14); (5) the
    custom palette — steel blue `#4f81c7` primary (NOT Bootstrap blue),
    teal `#40bfc1` secondary (NOT gray), green `#48da79` tertiary, pink
    `#ff78ae` quarternary (NOT a gradient — BB14's quarternary was
    purple→lilac gradient); (6) title-case labels — NO `text-transform`
    (opposite of Stencil's uppercase); (7) plain `btn-outline` = BLACK
    text + `1px solid rgba(0,0,0,0.1)` light ghost; (8) group
    outline-primary = `#4f81c7` (NOT Bootstrap blue `#007bff`); (9)
    social link variant = black text with padding KEPT; (10) Like badge
    = LIGHT (`#e6e6e6` bg, dark text) not dark; (11) radio ring fill =
    white `#fff` not `#222`; (12) checkbox/radio quarternary = PINK
    `#ff78ae` (NO mint quirk — that was BB14 only); (13) NO
    "Pick Your …" captions anywhere; (14) Slide Button block with iOS
    toggles is UNIQUE to BB15.
  - Captioned vs not: Block A, Block B, the full-width social grid and
    the action row are UNCAPPED; Dropdown Buttons, Group Buttons,
    Checkboxes, Radios Buttons, Slide Button and Social Buttons are
    captioned (checkbox/radio/slide captions sit INSIDE their col-md-4
    columns).
  - Focus behavior: the reference's per-color interaction is a darker
    `:hover/:focus` fill (shadow stays). Keep a `focus-visible` ring per
    repo a11y convention on top.
  - Dropdowns: implement with React state — one open at a time, close on
    outside click + Escape, `aria-expanded` / `aria-haspopup="menu"`,
    menu items as `<a>` (or buttons) per repo conventions. No Bootstrap
    JS.
  - Icons: `lucide-react` — Heart (Like + Block A), Trash2 (Delete),
    Send, CloudDownload (Download), Image (Watch Photos), Download,
    MessageCircle (chat), Facebook, Twitter, Linkedin, Pinterest,
    Dribbble (social), Check/Square for the custom checkboxes. NO
    Ionicons font, NO copied glyph CSS.
  - Icon-only buttons: the reference has NO sr-only labels on the
    icon-only download/chat action buttons — give them `aria-label` per
    repo a11y convention (visual result identical).
  - Mobile: `7em` section padding is tall on phones — reduce
    (`py-16`/`py-12`-ish); rows wrap with the reference's bottom margins;
    the Checkboxes/Radios/Slide three-column row stacks below md; the
    full-width social grid stacks to one column below md.
  - Footer: minimal muted "More templates at Component Dock" linking
    https://www.componentdock.com/.
  - Do NOT copy the CSS/HTML — re-implement with Tailwind tokens. No
    Bootstrap dependency, no jquery.
  - Source-sloppiness to NOT reproduce (invisible only): the stray
    leading space in the title h2, duplicate whitespace text nodes, the
    `mb-m-0` typo in button classes (Bootstrap ignores it; use the
    intended `mb-md-0`). Fidelity-relevant copy to KEEP as authored:
    "Button #05", "Radios Buttons", "Dropdown button", "Default" ×16,
    "Button 1"/"Button 2"/"Outline Button", Primary/Success/Danger/
    Warning/Disabled, "Toggle is on"/"Toggle is Off", "Share -
    8.2k/8.5k/8k", "Connect with Twitter / Linkedin", "Pin it - 1k",
    "Find us on Dribbble", "Watch Photos", "Download", "Add Comment"
    with no icon, the two icon-only action buttons, "Like" + "2" badge,
    "Create Account".

## Tasks (implementer checklist)

1. [ ] `feat/template-chunky` branch from latest main
2. [ ] Scaffold app `apps/chunky` (copy simplest existing app; rename
       package to `@free-react-templates/chunky`; `npm install` at root
       BEFORE committing so `package-lock.json` registers the workspace;
       `public/CNAME` = `chunky.free.componentdock.com`; `"homepage"` =
       `https://chunky.free.componentdock.com`; vite.config.ts keeps
       `injectUiSource()`)
3. [ ] Write spec-driven tests first (TDD, 100% coverage required): page
       structure (title + 8 blocks in order), "Button #05" heading
       (artifact — do NOT fix to "#15"), "Radios Buttons" caption typo,
       title-case labels (NO uppercase), Block A (4 solid icon buttons
       with RIGHT icon strip + 4 outline Default), Block B (4 round
       solid + 4 round outline Default), full-width social grid (4×3,
       NO caption), Dropdown Buttons (open/close, aria-expanded,
       outside click/Escape, one at a time), Group Buttons (joined,
       outline-primary `#4f81c7` border), Checkboxes (5, colored,
       Disabled), Radios (5, colored, Disabled), Slide Button (2
       toggles, ON/OFF states + "Toggle is on"/"Toggle is Off"),
       Social Buttons (5 brands × 7, black link variant), action row
       (7, icon-only quirks, Like badge), **chunky hard shadow kept on
       hover/focus**, responsive, footer
4. [ ] Implement `src/App.tsx` + `src/components/` (e.g. `KitButton.tsx`,
       `KitSection.tsx`, `DropdownMenu.tsx`, `CheckboxItem.tsx`,
       `RadioItem.tsx`, `ToggleSwitch.tsx`; no Navbar/Hero — none in
       reference; add the muted Component Dock footer)
5. [ ] Tokens in `src/index.css` `@theme` (see design tokens list — 4
       solid colors + hover shades + 4 outline shades + black ghost
       border + 5 social colors + toggle blue/red/track colors; white
       page; Poppins font)
6. [ ] `scripts/verify-app.sh chunky` green (typecheck + lint + vitest
       100% + build); `npm run spec:validate` for `template-chunky`
7. [ ] PR: "feat: add Chunky (ColorLib Bootstrap Buttons 15 recreation)"
       — description MUST include: source template + preview URL (note
       the `/bb/` quirk and the "Button #05" heading artifact +
       "Radios Buttons" typo + Slide Button copy quirk), design tokens
       used, what differs (renames, placeholders, lucide icons, React
       dropdowns)
8. [ ] Merge immediately (`gh pr merge --squash --delete-branch`)
9. [ ] After merge: TEMPLATES.md "Bootstrap Buttons 15" row (line 676)
       `[~]` → `[x]` + `https://chunky.free.componentdock.com` + `npm
    run readme:status`; push
