# Levitate (ColorLib Bootstrap Buttons 14) — Tasks & Design Notes

> Prep artifacts prepared on `main`. Recreation name: **Levitate** (NEW name
> — the ColorLib source keeps its name "Bootstrap Buttons 14").
> Implementation ships on `feat/template-levitate` per the standard PR flow.

## Design notes

- **Original:** ColorLib "Bootstrap Buttons 14" — free UI-kit button
  component template (source:
  https://colorlib.com/wp/template/bootstrap-buttons-14/). TEMPLATES.md
  row: line 675 (**Bootstrap Buttons (20)**). The `bootstrap-buttons-14`
  slug appears exactly once (no dup rows to mark).
- **Live preview DOM analyzed (REACHABLE, verified 2026-08-14):** the
  default `https://preview.colorlib.com/theme/bootstrap-buttons-14/`
  returns **404** — the REAL preview is
  `https://preview.colorlib.com/theme/bb/bootstrap-buttons-14/` (HTTP 200,
  25.2KB HTML, `<title>Button 04</title>`; the nested `/bb/` subpath was
  discovered by scraping the ColorLib template page — same pattern as
  Buttons 01–13). Stylesheets: `css/style.css` (228KB — Bootstrap 4 base +
  the custom light theme; token source) and `css/ionicons.min.css` (glyph
  font used by the heart/social/checkbox/radio icons). JS bundle
  (jquery/popper/bootstrap + `js/main.js`) is only needed for the FOUR
  dropdown toggles; everything else is static. Computed styles verified in
  a live browser (2026-08-14) — see key values below.
- **⚠ Preview URL quirk:** the default preview URL 404s; the REAL one
  lives under `/theme/bb/bootstrap-buttons-14/`. Mention this in the PR
  description.
- **⚠ Heading-number artifact:** the `h2` renders **"Button #04"** (source
  has a leading space: `<h2 class="heading-section"> Button #04</h2>`) and
  the `<title>` is "Button 04" — the number was copy-pasted from the
  "Bootstrap Buttons 04" sibling and never updated (same kind of artifact
  as Stencil/13's "Button #03", Capsule/12's "Button #02" and Buoy/11's
  "#01 — Bootstrap 4 Buttons"). Render the h2 EXACTLY as the reference:
  **"Button #04"**. Do NOT "fix" it to "#14". Use the app's own `<title>`
  (e.g. "Levitate — Button Showcase") per repo convention.
- **⚠ Caption typo:** the radio column caption reads **"Radios Buttons"**
  (plural "Radios") — keep as authored.
- **Screenshot (TEMPLATES.md `bootstrap-buttons-14.jpg`, 1200×972) viewed
  2026-08-14:** CONSISTENT with the live page — white background, "Button
  #04" heading, "Pick Your Style / Pick Your Size / Pick Your Color /
  Social Buttons" captions, purple/sky-blue/green/gradient palette, social
  brand buttons. The static screenshot reads slightly flatter than the
  live page (the soft rest shadow is subtle in the image) — the LIVE
  computed styles are AUTHORITATIVE for the shadow (same situation as the
  Buoy/BB11 sibling, where the live CSS showed the floating shadow the
  screenshot didn't). Structure + colors agree between both references.
- **Signature (name source):** LEVITATION — every button rests on a soft
  floating drop shadow (`box-shadow: 0px 10px 20px -6px rgba(0,0,0,0.12)`,
  browser-verified LIVE at rest) and the shadow LIFTS OFF (`none`) on
  hover/focus while the fill deepens. Same family as Buoy/BB11 — NOT the
  flat Stencil/Capsule treatment. Combined with the **light `#fff` page**,
  the custom **purple/sky-blue/green/gradient** palette, 5px-radius 1px
  borders, and title-case labels.
- **Light theme:** `body` keeps Bootstrap's default — the custom rule only
  sets `font-family: "Poppins", Arial, sans-serif; font-size: 15px;
line-height: 1.8; font-weight: normal;` (NO background override → page
  stays `#fff`). Heading `h2.heading-section` = **32px, `#212529` (near
  black, inherited), weight 400** (the custom `.heading-section` rule sets
  only font-size). Block captions = `h2 > small` **16px `#212529`**, NO
  uppercase. `.ftco-section { padding: 7em 0 }` (105px).
- **Custom palette (replaces Bootstrap defaults):**
  - primary `#5735ea` PURPLE (hover/focus `#3a16d6`) — NOT Bootstrap blue
  - secondary `#32c5f6` SKY BLUE (hover `#0ab3eb`) — NOT Bootstrap gray
  - tertiary `#48da79` GREEN (hover `#28c75d`) — custom class
  - quarternary `#5635ea → #a15bf0` **45° PURPLE→LILAC GRADIENT** (white
    text, `border-color: transparent !important`; hover KEEPS the same
    gradient — no darken). This is the "Default Gradient" / "Gradient
    Regular" button. (The quarternary CHECKBOX/RADIO color is MINT
    `#52de97` — quirk, see below.)
  - outline (plain `btn-outline`): transparent bg, **BLACK text**, 1px
    solid `rgba(0,0,0,0.1)`; hover text `rgba(0,0,0,0.5)` + border
    `rgba(0,0,0,0.05)` — LIGHT ghost (NOT the translucent-white ghost of
    the dark-theme siblings)
  - outline-primary (Group block only): `#5735ea` text + 1px solid
    `#5735ea` (custom rule sets color + border — NOT Bootstrap blue);
    hover: bg `#6a4cec`, white text
  - outline-secondary (Group block only): `#32c5f6` text + 1px solid
    `#32c5f6`; hover: bg `#4accf7`, white text
  - Social: facebook `#4f69a2`, twitter `#69b6f0`, linkedin `#2884ba`,
    pinterest `#d03940`, dribbble `#ea6294` (same 5 as the rest of the
    series)
- **Button anatomy (computed):** `.btn` = **14px, weight 500, padding
  `12px 16px`, `border-radius: 5px`, `border-width: 1px`** solid in the
  button's own color, `cursor: pointer`, **title-case labels (NO
  `text-transform`)**, `transition: .3s all ease` (on `button`), and
  **`box-shadow: 0px 10px 20px -6px rgba(0,0,0,0.12)` AT REST (LIVE)**.
  `.btn-round` = `border-radius: 40px` (PILL). `.btn-block` = `display:
block; width: 100%`. `.btn-sm` = 12px / `5px 20px` (used in Pick Your
  Size). `.btn-lg` = 16px / `17px 24px` (used in Pick Your Size).
  `.btn.btn-link` = transparent bg, `border: none`, `box-shadow: none`,
  **BLACK text, padding KEPT at `12px 16px`**. Disabled = `opacity: 0.65`
  (Bootstrap). `.btn small` (the Like count badge) = bg `#e6e6e6`,
  `padding: 2px 8px`, color `rgba(0,0,0,0.3)` (LIGHT badge — the dark
  siblings use `#333` bg).
- **⚠ Shadow — the KEY fidelity point (browser-verified 2026-08-14):**
  - REST: computed `box-shadow: rgba(0,0,0,0.12) 0px 10px 20px -6px` —
    LIVE, implement it.
  - HOVER/FOCUS: computed **`none`**. The cascade: the custom
    `button:hover, button:focus { box-shadow: none !important }` rule
    beats the non-important `.btn:hover, .btn:active, .btn:focus { ...
box-shadow: 0px 12px 20px -6px rgba(0,0,0,0.21) }` declaration — the
    hover shadow is DEAD CODE. Verified by clicking a button in the live
    browser: focused button → `box-shadow: none` + darker fill. The
    `@media print` universal `box-shadow: none !important` reset does NOT
    apply on screen (print only).
  - Implement: rest shadow `0 10px 20px -6px rgba(0,0,0,0.12)`; on
    hover/focus remove the shadow + apply the per-color darker fill
    (quarternary keeps its gradient). Do NOT implement a hover shadow.
- **Structure observed (1:1):** `section.ftco-section#buttons` →
  `div.container` → `div.row.mb-4` > `col-md-12` > `h2.heading-section`
  **"Button #04"** → then these blocks:
  1. **Pick Your Style** (`row mb-5`, caption) — `col-md-12`, EIGHT
     buttons (each `mb-md-0 mb-2`):
     a. `btn-primary` "Default"
     b. `btn-outline` "Default"
     c. `btn-primary btn-round` — heart icon `mr-1` + "Default with icon"
     d. `btn-primary` — heart icon ONLY + `<span class="sr-only">Like</span>`
     e. `btn-outline` — heart icon `mr-1` + "Default with icon"
     f. `btn-primary` — play icon ONLY + `<span class="sr-only">Play</span>`
     g. `btn-primary` — arrow-back icon ONLY, NO sr-only (quirk, keep)
     h. `btn-primary` — arrow-forward icon ONLY, NO sr-only (quirk, keep)
  2. **Pick Your Size** (`row mb-5`, caption) — `col-md-12`, TWO
     `div.d-block.mb-3` rows × 3 buttons: row 1 (solid): `btn-primary
btn-sm` "Default Small", `btn-quarternary` "Gradient Regular",
     `btn-primary btn-lg` "Default Large"; row 2 (outline): `btn-outline
btn-sm` "Default Small", `btn-outline` "Gradient Regular",
     `btn-outline btn-lg` "Default Large". ("Gradient Regular" appears in
     BOTH rows — keep.)
  3. **Pick Your Color** (`row mb-5`, caption) — `col-md-12`, FOUR
     buttons: `btn-primary` "Default Primary", `btn-secondary` "Default
     Secondary", `btn-tertiary` "Default Tertiary", `btn-quarternary`
     "Default Gradient".
  4. **EMPTY SPACER ROW** (`row mb-5`) — bare `<div class="col-md-12">`
     with NO content. INVISIBLE in the render — do NOT reproduce (invisible
     source sloppiness; there is no visual gap beyond the normal row
     margins).
  5. **Full-width social grid** (`div.row`, NO caption) — nested row of 4
     `col-md-3` columns; each stacks 3 buttons (`mb-3 text-left w-100`):
     "Twitter" / "Facebook" / "Find us on Dribbble" with brand icon `mr-2`.
     Columns: solid, `btn-outline`, `btn-round`, `btn-round btn-outline`.
  6. **Social Buttons** (`row mb-5`, caption) — `col-md-12` caption, then
     5 rows (`col-md-12 mb-4`), each 7 buttons: 4 icon-only (solid, round
     solid, outline, round outline) + 3 labelled (solid `btn-<brand>`,
     `btn-outline`, **`btn-link ml-2`** — note: the link variant has NO
     brand class → BLACK text): FB "Share - 8.2k / 8.5k / 8k", Twitter
     "Connect with Twitter" ×3, Linkedin "Connect with Linkedin" ×3,
     Pinterest "Pin it - 1k" ×3, Dribbble "Find us on Dribbble" ×3.
  7. **Dropdown Buttons** (`row mb-5`, caption) — nested row of 4
     `col-md-3` dropdowns (`div.dropdown.d-block`), toggles "Dropdown
     button" in primary / secondary / tertiary / quarternary (`btn-block
dropdown-toggle`), menu items Action / Another action / Something
     else here.
  8. **Group Buttons** (`div.row` — NO mb-5, caption) — nested row of 2
     `col-md-6` joined groups (`btn-group mb-2 mb-md-0 btn-block`): group
     1 primary "Button 1" / outline-primary "Outline Button" / "Button 1";
     group 2 secondary "Button 2" / outline-secondary "Outline Button" /
     "Button 2".
  9. **Checkboxes + Radios Buttons** (`row mb-5`, captions INSIDE the
     columns) — 2 × `col-md-4`: Checkboxes column = 5 checked checkboxes
     `checkbox-{primary,secondary,tertiary,quarternary,dark}`, labels
     Primary / Success / Danger / Warning / Disabled (label-variant
     mismatch is source copy, keep); Disabled also disabled. Radios
     Buttons column = 5 radios `radio-{...same}`, same labels; first 4
     checked, Disabled disabled (source id/name "radio6" — skip radio5).
  10. **Action row** — `div.row` (NO mb-5) > col-md-12: 7 round buttons,
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
35px`. Variants: `.checkbox-<color>` sets the checked glyph color —
  primary `#5735ea`, secondary `#32c5f6`, tertiary `#48da79`,
  **quarternary `#52de97` MINT** (NOT the gradient — quirk), dark
  `#343a40`. Disabled: `opacity: 0.65`. Recreate with a visually-hidden
  native checkbox + a custom box/check element (lucide `Square`/`Check` or
  CSS) — same visual result, no Ionicons font.
- **Radio details (custom, from CSS):** native input off-screen
  (`left: -9999px`); label `padding-left: 28px; line-height: 20px`;
  `::before` = 18px circle, `border: 2px solid rgba(0,0,0,0.1)`,
  `background: #fff` (WHITE fill — light theme; the dark siblings use
  `#222`); `::after` = 12px dot in variant color, hidden (opacity 0,
  scale 0) until `:checked` (opacity 1, scale 1, `transition: all 0.2s
ease`); when checked the ring `border-color` also turns the variant
  color (`.radio-<color> input:checked + label:before`). Variants:
  `.radio-<color>` sets dot + ring color (quarternary = mint `#52de97`).
- **Dropdown details (from CSS):** `.dropdown .dropdown-menu` = white bg,
  `border: none`, `box-shadow: 0px 10px 34px -20px rgba(0,0,0,0.41)`;
  items 13px `rgba(0,0,0,0.7)`, hover bg `rgba(0,0,0,0.05)` + `#000`.
  Toggle caret is Bootstrap's `::after` triangle. Recreate with React
  state.
- **Group join:** Bootstrap `-1px` margin trick — members touch; first
  member radius `5px 0 0 5px`, inner members radius 0 (computed; the
  base radius is 5px for this template).
- **Spacing:** kit-row buttons `mb-2 mb-md-0` (0.5rem bottom below md);
  full-width social `mb-3`; size rows `mb-3` (d-block wrapper); social
  brand rows `mb-4`; icon gap `mr-1` (0.25rem), social icon gap `mr-2`
  (0.5rem), link variant `ml-2`; block rows `mb-5` (3rem), title row
  `mb-4`; social grid, groups + action rows NO bottom margin.
- **Recreation notes:**
  - Tailwind v4 tokens in `@theme`: `--color-primary: #5735ea;` etc. —
    the 3 solid colors + hover shades + the quarternary gradient + 5
    social colors + the outline ghost border + mint `#52de97` (for the
    quarternary checkbox/radio); use via Tailwind classes.
  - ONE reusable `KitButton`/`ShowcaseButton` component with a `variant`
    prop (solid | outline | link) + `color` prop (primary | secondary |
    tertiary | quarternary | fb | twitter | linkedin | pinterest |
    dribbble) + optional `round`, `block`, `size` (sm | lg), `icon`
    (before/after), and label props — the page is a big button catalog; a
    single parameterized component keeps it DRY. Buttons are `<button>`
    elements (the reference uses `<button>` everywhere); use
    `packages/ui` Button/ButtonLink where they fit, they must be imported
    for knip.
  - KEY fidelity points vs siblings: (1) LIGHT `#fff` page — NOT dark
    `#222`/`#111` (Stencil/Capsule); (2) **floating REST shadow
    `0 10px 20px -6px rgba(0,0,0,0.12)`** — the levitation signature
    (like Buoy, opposite of flat Stencil); (3) hover/focus: shadow →
    `none` + darker fill (quarternary keeps gradient) — do NOT implement
    a hover shadow (dead code in the reference); (4) **5px radius + 1px
    border + 14px/500 + `12px 16px`** (NOT Stencil's 2px/2px/13px, NOT
    Capsule's 1px/square); (5) the custom palette — purple `#5735ea`
    primary (NOT Bootstrap blue), sky blue `#32c5f6` secondary (NOT
    gray), green `#48da79` tertiary, quarternary = **45° GRADIENT
    `#5635ea → #a15bf0`** (the "Gradient" buttons); (6) title-case
    labels — NO `text-transform` (opposite of Stencil's uppercase); (7)
    plain `btn-outline` = BLACK text + `1px solid rgba(0,0,0,0.1)` light
    ghost (NOT the white ghost of dark siblings); (8) group
    outline-primary = `#5735ea` (NOT Bootstrap blue `#007bff`); (9)
    social link variant = black text with padding KEPT; (10) Like badge =
    LIGHT (`#e6e6e6` bg, dark text) not dark; (11) radio ring fill =
    white `#fff` not `#222`.
  - Captioned blocks: ALL blocks carry a caption except the full-width
    social grid and the action row (unlike Stencil where the first four
    blocks were uncaptioned). The checkbox/radio captions sit INSIDE
    their `col-md-4` columns.
  - Focus behavior: the reference's per-color interaction is a darker
    `:hover/:focus` fill + shadow lift-off; outline hover dims
    text/border. Keep a `focus-visible` ring per repo a11y convention on
    top.
  - Dropdowns: implement with React state — one open at a time, close on
    outside click + Escape, `aria-expanded` / `aria-haspopup="menu"`,
    menu items as `<a>` (or buttons) per repo conventions. No Bootstrap
    JS.
  - Icons: `lucide-react` — Heart (Pick Your Style icon buttons + Like),
    Play, ArrowLeft / ArrowRight (the two icon-only arrows), Image
    (Watch Photos), Download, MessageCircle/MessagesSquare (chat icon),
    Facebook, Twitter, Linkedin, Pinterest, Dribbble (social),
    Check/Square for the custom checkboxes. NO Ionicons font, NO copied
    glyph CSS.
  - Icon-only buttons: keep the reference's sr-only accessible labels on
    Like + Play (`<span class="sr-only">`); the arrow-back/arrow-forward
    icon-only buttons have NO label in the source — give them a
    `aria-label` per repo a11y convention (visual result identical).
  - Mobile: `7em` section padding is tall on phones — reduce
    (`py-16`/`py-12`-ish); rows wrap with the reference's bottom margins;
    the Checkboxes/Radios two-column row stacks below md; the full-width
    social grid stacks to one column below md.
  - Footer: minimal muted "More templates at Component Dock" linking
    https://www.componentdock.com/.
  - Do NOT copy the CSS/HTML — re-implement with Tailwind tokens. No
    Bootstrap dependency, no jquery.
  - Source-sloppiness to NOT reproduce (invisible only): the empty
    spacer `col-md-12` row between Pick Your Color and the social grid,
    duplicate `id="dropdownMenuButton"` on the first dropdown (the other
    three use `...2/3/4`), the stray leading space in the title h2,
    `radio5` skipped (ids jump `radio4` → `radio6`), whitespace text
    nodes. Fidelity-relevant copy to KEEP as authored: "Button #04",
    "Radios Buttons", "Default with icon", "Gradient Regular" (in BOTH
    size rows), "Default Primary / Secondary / Tertiary / Gradient",
    "Share - 8.2k/8.5k/8k", "Connect with Twitter / Linkedin", "Pin it -
    1k", "Find us on Dribbble", "Add Comment" with no icon, the three
    icon-only buttons with no label (arrow-back, arrow-forward, download,
    chat), "Like" + "2" badge, "Create Account", the quarternary
    checkbox/radio mint `#52de97`.

## Tasks (implementer checklist)

1. [ ] `feat/template-levitate` branch from latest main
2. [ ] Scaffold app `apps/levitate` (copy simplest existing app; rename
       package to `@free-react-templates/levitate`; `npm install` at root
       BEFORE committing so `package-lock.json` registers the workspace;
       `public/CNAME` = `levitate.free.componentdock.com`; `"homepage"` =
       `https://levitate.free.componentdock.com`; vite.config.ts keeps
       `injectUiSource()`)
3. [ ] Write spec-driven tests first (TDD, 100% coverage required): page
       structure (title + blocks in order), "Button #04" heading
       (artifact — do NOT fix to "#14"), "Radios Buttons" caption typo,
       title-case labels (NO uppercase), Pick Your Style (8 buttons incl.
       icon-only + sr-only labels), Pick Your Size (2×3, "Gradient
       Regular" in both rows), Pick Your Color (4 incl. gradient),
       full-width social grid (4×3, NO caption), social brand rows (5
       brands × 7 buttons, copy + round icon-only + black link variant),
       dropdown open/close (aria-expanded, outside click/Escape), groups
       (joined, outline-primary `#5735ea` border), checkboxes (5, colored,
       quarternary mint, Disabled), radios (5, colored, Disabled),
       action row (7, icon-only quirks, Like badge), **floating rest
       shadow + shadow lift-off on hover/focus**, responsive, footer
4. [ ] Implement `src/App.tsx` + `src/components/` (e.g. `KitButton.tsx`,
       `KitSection.tsx`, `DropdownMenu.tsx`, `CheckboxItem.tsx`,
       `RadioItem.tsx`; no Navbar/Hero — none in reference; add the muted
       Component Dock footer)
5. [ ] Tokens in `src/index.css` `@theme` (see design tokens list — 3
       solid colors + hover shades + quarternary gradient + 5 social
       colors + mint `#52de97`; white page; Poppins font)
6. [ ] `scripts/verify-app.sh levitate` green (typecheck + lint + vitest
       100% + build); `npm run spec:validate` for `template-levitate`
7. [ ] PR: "feat: add Levitate (ColorLib Bootstrap Buttons 14
       recreation)" — description MUST include: source template + preview
       URL (note the `/bb/` quirk and the "Button #04" heading artifact +
       "Radios Buttons" typo), design tokens used, what differs (renames,
       placeholders, lucide icons, React dropdowns)
8. [ ] Merge immediately (`gh pr merge --squash --delete-branch`)
9. [ ] After merge: TEMPLATES.md "Bootstrap Buttons 14" row (line 675)
       `[~]` → `[x]` + `https://levitate.free.componentdock.com` + `npm
    run readme:status`; push
