# Template: Levitate (Button / UI Kit Showcase)

## Purpose

Levitate is a single-page button/UI-kit showcase template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Bootstrap Buttons 14" free template (source:
https://colorlib.com/wp/template/bootstrap-buttons-14/), built under a
DIFFERENT name (**Levitate** — the template's signature is its soft floating
drop shadow at rest (`box-shadow: 0px 10px 20px -6px rgba(0,0,0,0.12)`) that
makes every button appear to LEVITATE above the white page, lifting off
(→ `none`) on hover/focus while the fill deepens to a darker shade — the same
family as the Buoy/BB11 recreation, but with a DIFFERENT custom palette
(purple `#5735ea` / sky blue `#32c5f6` / green `#48da79` / purple-to-lilac
GRADIENT `#5635ea → #a15bf0` quarternary, 5px radius, 1px borders) and
title-case labels (NO `text-transform`); per the monorepo naming mandate —
never reuse the ColorLib source name), with the monorepo stack: Vite + React
19 + Tailwind CSS 4 + TypeScript.

The original is a **LIGHT** (white `#fff` background), single-column
Bootstrap 4 UI-kit page: a 32px near-black heading "Button #04" at the top
(see the heading-number artifact note below), then **eight captioned
blocks** (`Pick Your Style`, `Pick Your Size`, `Pick Your Color`, `Social
Buttons`, `Dropdown Buttons`, `Group Buttons`, `Checkboxes`, `Radios
Buttons`) plus an UNCAPTIONED full-width social grid between `Pick Your
Color` and `Social Buttons`, and a closing action row. Unlike the Stencil/
BB13 sibling, EVERY block carries a caption except the social grid and the
action row (Stencil's first four blocks had no captions). Every button is
**rounded-5px**, `border-width: 1px` solid in the button's own color,
**14px / weight 500 / padding `12px 16px`**, title-case text, and rests on a
**soft floating shadow** `0px 10px 20px -6px rgba(0,0,0,0.12)` (the
signature — LIVE, browser-verified) that is REMOVED (`none`) on hover/focus
via `button:hover, button:focus { box-shadow: none !important }` while each
color's `:hover/:focus` rule applies a fixed DARKER fill. The custom palette
replaces Bootstrap's defaults entirely: primary is PURPLE `#5735ea` (hover
`#3a16d6`), secondary is SKY BLUE `#32c5f6` (hover `#0ab3eb`), tertiary is
GREEN `#48da79` (hover `#28c75d`), quarternary is a 45° PURPLE→LILAC
GRADIENT `#5635ea → #a15bf0` with a transparent border (hover keeps the same
gradient). `btn-round` is a pill (`border-radius: 40px`); `btn-outline` is a
light ghost — `1px solid rgba(0,0,0,0.1)` with **BLACK text** (light theme,
NOT the translucent-white ghost of the dark-theme siblings); `btn-link` is
borderless with black text and padding KEPT at `12px 16px`. Social brand
buttons (Facebook `#4f69a2`, Twitter `#69b6f0`, Linkedin `#2884ba`,
Pinterest `#d03940`, Dribbble `#ea6294`) come in solid / outline / round /
link variants with Ionicons logos. The page also showcases the four color
variants incl. the gradient "Default Gradient" button, Bootstrap dropdowns,
joined button groups, custom colored checkboxes/radios (the quarternary
checkbox/radio use MINT `#52de97` even though the quarternary BUTTON is a
purple gradient — reference quirk, keep), and a closing row of round action
buttons (including icon-only ones and a "Like" button with a small count
badge). There is NO navbar, NO hero, NO images, and NO footer in the
original — the whole page is the kit showcase itself. Levitate recreates the
structure section-for-section with matching layout, tokens, typography, and
content kinds (no ColorLib assets copied; Ionicons replaced by
`lucide-react` equivalents).

> NAMING NOTE: the ColorLib source name "Bootstrap Buttons 14" is FORBIDDEN
> as the app name. **Levitate** is the new, original name — single lowercase
> word, no collision with `apps/`, `openspec/specs/`, `docs/templates/` or
> TEMPLATES.md (verified 2026-08-14). Source slug + preview URL are recorded
> below.

> PREVIEW URL QUIRK: the default preview URL
> `https://preview.colorlib.com/theme/bootstrap-buttons-14/` returns **404**;
> the REAL preview URL is
> `https://preview.colorlib.com/theme/bb/bootstrap-buttons-14/` (HTTP 200 —
> the same nested `/bb/` subpath pattern as "Bootstrap Buttons 01"–13). The
> page `<title>` is "Button 04".

> ⚠ HEADING NUMBER ARTIFACT: the live `h2` renders **"Button #04"** (with a
> leading space in the source: `<h2 class="heading-section"> Button #04</h2>`;
> the `<title>` is likewise "Button 04") — the number was copy-pasted from
> the "Bootstrap Buttons 04" sibling and never updated (same kind of
> artifact as Stencil/13's "Button #03", Capsule/12's "Button #02" and
> Buoy/11's "#01 — Bootstrap 4 Buttons"). Fidelity mandate = render the
> heading exactly as the reference renders it: **"Button #04"**. Do NOT
> "fix" it to "Button #14" — that would deviate from the reference. (The
> leading source whitespace is a text node and is invisible in the render;
> it does not need to be reproduced.)

> ⚠ CAPTION TYPO: the radio column caption reads **"Radios Buttons"**
> (plural "Radios") in the source — keep as authored.

## Design reference (replication findings)

- **Original:** ColorLib "Bootstrap Buttons 14". Listed in TEMPLATES.md
  under **Bootstrap Buttons (20)** (line 675). Free UI-kit button-component
  template. The `bootstrap-buttons-14` slug appears exactly once in
  TEMPLATES.md (no duplicate rows to mark).
- **Live preview DOM — REACHABLE (verified 2026-08-14):** the default
  preview URL `https://preview.colorlib.com/theme/bootstrap-buttons-14/`
  returns 404; the REAL preview URL is
  `https://preview.colorlib.com/theme/bb/bootstrap-buttons-14/` (HTTP 200,
  25.2KB HTML, `<title>Button 04</title>`, heading `Button #04` — the
  "#04" copy-paste artifact, see above). Stylesheets: `css/style.css`
  (228KB — Bootstrap 4 base + the custom light theme; the token source),
  `css/ionicons.min.css` (46.8KB glyph font — used by the heart + social
  logos + checkbox glyphs). JS: jQuery + Popper + Bootstrap bundle +
  `js/main.js` — only the Bootstrap dropdown behavior is actually used on
  this page (four dropdown toggles). Structure, copy, and tokens below are
  from the live DOM + both stylesheets + browser-verified computed styles
  (2026-08-14).
- **Screenshot (TEMPLATES.md `bootstrap-buttons-14.jpg`, 1200×972) —**
  viewed 2026-08-14: CONSISTENT with the live page — white background,
  "Button #04" heading, "Pick Your Style / Pick Your Size / Pick Your
  Color / Social Buttons" captions, the purple/sky-blue/green/gradient
  palette, "Default Gradient" gradient button, social brand buttons.
  The screenshot shows the flat-ish look (the soft rest shadow is subtle
  in the static image); the live computed styles are AUTHORITATIVE for
  the shadow (same situation as the Buoy/BB11 sibling — the live DOM +
  CSS wins). Both references AGREE on structure and colors.
- **Visual design (live DOM + computed styles):** LIGHT `#fff` page
  background (Bootstrap default — the custom rule only sets
  `font-family: "Poppins", Arial, sans-serif; font-size: 15px;
line-height: 1.8; font-weight: normal;` — NO background override, so the
  page stays white). One `section.ftco-section#buttons` (padding `7em 0` =
  105px top/bottom, transparent bg) > `div.container`. Title row
  (`div.row.mb-4`): `h2.heading-section` "Button #04" — **32px,
  near-black `#212529`, weight 400** (color inherited from Bootstrap's body
  color — the custom `.heading-section` rule only sets font-size). Captions
  = `h2.heading-section > small` — **16px `#212529`**, weight 400, NO
  uppercase. Button anatomy: `<button type="button" class="btn mb-md-0 mb-2
btn-<color>">Label</button>` — labels are DIRECT text nodes in
  **title-case** (NO `text-transform`); icons are `<i class="ion-*"></i>`
  (Ionicons glyph font) placed before (with `mr-1`/`mr-2`) or after (with
  `ml-1`) the label; some icon-only buttons carry `<span class="sr-only">`
  accessible labels (Like, Play) and some have NO sr-only span at all
  (arrow-back, arrow-forward — reference quirks, see structure below).
  Buttons are **NOT flat**: computed `box-shadow` at rest =
  `rgba(0,0,0,0.12) 0px 10px 20px -6px` (the LIVE floating signature —
  browser-verified). On hover/focus the custom
  `button:hover, button:focus { box-shadow: none !important }` rule wins
  over the (non-important) `.btn:hover, .btn:active, .btn:focus`
  `0px 12px 20px -6px rgba(0,0,0,0.21)` declaration → computed shadow is
  **`none` when focused** (verified by clicking a button in the browser),
  while the per-color hover rules apply a fixed DARKER background. The
  `@media print` universal `box-shadow: none !important` reset does NOT
  apply on screen. This is the same family as Buoy/BB11 (floating shadow at
  rest, lifted on hover) — NOT the flat Stencil/Capsule treatment. The
  template's identity: **soft floating shadow at rest + white page +
  purple/sky-blue/green/gradient palette + 5px-radius 1px-border buttons +
  title-case labels**.
- **Section order (1:1 from live DOM):** (row classes in parentheses)
  1. **Title** — `div.row.mb-4` > `col-md-12` > `h2.heading-section`
     **"Button #04"** (32px `#212529`, weight 400, left-aligned).
  2. **Pick Your Style** (caption, `row mb-5`) — `col-md-12`, EIGHT
     buttons in one row (wraps 2 lines of 4 on desktop), each
     `mb-md-0 mb-2`:
     a. `btn-primary` **"Default"**
     b. `btn-outline` **"Default"**
     c. `btn-primary btn-round` — heart icon BEFORE label (`ion-ios-heart
   mr-1`) + **"Default with icon"**
     d. `btn-primary` — heart icon ONLY + `<span class="sr-only">Like</span>`
     (accessible label; renders as an icon-only button)
     e. `btn-outline` — heart icon BEFORE label (`mr-1`) + **"Default with
     icon"**
     f. `btn-primary` — play icon ONLY + `<span class="sr-only">Play</span>`
     g. `btn-primary` — arrow-back icon ONLY, NO sr-only span (quirk, keep)
     h. `btn-primary` — arrow-forward icon ONLY, NO sr-only span (quirk,
     keep)
  3. **Pick Your Size** (caption, `row mb-5`) — `col-md-12`, TWO stacked
     rows (`div.d-block.mb-3` each), three buttons per row:
     a. Row 1 (solid): `btn-primary btn-sm` **"Default Small"**,
     `btn-quarternary` **"Gradient Regular"** (the gradient button!),
     `btn-primary btn-lg` **"Default Large"**
     b. Row 2 (outline): `btn-outline btn-sm` **"Default Small"**,
     `btn-outline` **"Gradient Regular"**, `btn-outline btn-lg`
     **"Default Large"**
     (NOTE: the label "Gradient Regular" refers to the quarternary
     gradient variant even in the outline row — keep the copy as authored.)
  4. **Pick Your Color** (caption, `row mb-5`) — `col-md-12`, FOUR
     buttons: `btn-primary` **"Default Primary"**, `btn-secondary`
     **"Default Secondary"**, `btn-tertiary` **"Default Tertiary"**,
     `btn-quarternary` **"Default Gradient"** (gradient bg, transparent
     border).
  5. **Empty spacer row** — `row mb-5` > bare `<div class="col-md-12">`
     with NO content. INVISIBLE in the render — do NOT reproduce (invisible
     source sloppiness; there is no visual gap beyond the normal row
     margins).
  6. **Full-width social grid (NO caption)** — `div.row` > nested row of
     FOUR `col-md-3` columns; each column stacks THREE buttons vertically
     (`mb-3`, `text-left`, `w-100` = full width, left-aligned): **"Twitter"**
     (`ion-logo-twitter mr-2`), **"Facebook"** (`ion-logo-facebook mr-2`),
     **"Find us on Dribbble"** (`ion-logo-dribbble mr-2`). Column 1 = solid
     brand (`btn-twitter` / `btn-fb` / `btn-dribbble`); column 2 =
     `btn-outline btn-<brand>`; column 3 = `btn-round btn-<brand>`; column
     4 = `btn-round btn-outline btn-<brand>`. (Same grid as Stencil/BB13
     but with NO caption above it.)
  7. **Social Buttons** (caption, `row mb-5`) — `col-md-12` caption, then
     FIVE `col-md-12 mb-4` rows (one per brand), each with SEVEN buttons:
     four icon-only (`btn-<brand>` solid, `btn-round btn-<brand>`,
     `btn-outline`, `btn-outline btn-round`) followed by three labelled
     buttons (solid `btn-<brand>`, `btn-outline`, `btn-link ml-2`):
     Facebook (`Share - 8.2k` / `Share - 8.5k` / `Share - 8k`), Twitter
     (`Connect with Twitter` ×3), Linkedin (`Connect with Linkedin` ×3),
     Pinterest (`Pin it - 1k` ×3), Dribbble (`Find us on Dribbble` ×3).
     NOTE: the labelled link variant is a PLAIN `btn-link` (no brand class)
     → computed = BLACK text, no border, transparent bg, padding KEPT at
     `12px 16px` (the custom `.btn.btn-link` rule does not zero padding).
  8. **Dropdown Buttons** (caption, `row mb-5`) — nested row of FOUR
     `col-md-3` dropdowns (`div.dropdown.d-block`): toggles **"Dropdown
     button"** in `btn-primary` / `btn-secondary` / `btn-tertiary` /
     `btn-quarternary` (all `btn-block dropdown-toggle`, `aria-haspopup`,
     `aria-expanded`), each with a `dropdown-menu dropdown-menu-left` of
     three items (`Action`, `Another action`, `Something else here`).
  9. **Group Buttons** (caption, `div.row` — NO mb-5) — nested row of TWO
     `col-md-6` joined groups (`div.btn-group mb-2 mb-md-0 btn-block`):
     group 1 = `btn-primary` "Button 1", `btn-outline-primary` "Outline
     Button", `btn-primary` "Button 1"; group 2 = `btn-secondary` "Button
     2", `btn-outline-secondary` "Outline Button", `btn-secondary` "Button
     2". Members are joined (Bootstrap `-1px` margin trick; first member
     radius `5px 0 0 5px`, inner members radius 0).
  10. **Checkboxes** (caption, `row mb-5`) — `col-md-4`; the `h2 > small`
      caption "Checkboxes" sits INSIDE the column; FIVE custom checkboxes
      (all checked): `checkbox-primary` "Primary", `checkbox-secondary`
      "Success", `checkbox-tertiary` "Danger", `checkbox-quarternary`
      "Warning", `checkbox-dark` "Disabled" (checked AND disabled). NOTE
      the labels do NOT match the color variants (secondary→"Success",
      tertiary→"Danger", quarternary→"Warning", dark→"Disabled") — that is
      source copy, keep as authored. Custom style: native input hidden
      (`visibility: hidden`, absolutely positioned), a large Ionicons glyph
      "box" `\f15c` (37px, `rgba(0,0,0,0.2)`) unchecked / "check" `\f148`
      (30px, variant color) checked, label `<span>` with `margin-left:
35px`. The quarternary checkbox color is MINT `#52de97` (NOT the
      gradient — reference quirk, keep).
  11. **Radios Buttons** (caption, same `row mb-5`) — `col-md-4` beside
      Checkboxes; the `h2 > small` caption **"Radios Buttons"** (typo,
      keep) sits INSIDE the column; FIVE custom radios: `radio-primary`
      "Primary", `radio-secondary` "Success", `radio-tertiary` "Danger",
      `radio-quarternary` "Warning" (all checked), `radio-dark` "Disabled"
      (disabled, unchecked; source skips radio5 → name/id `radio6`).
      Custom style: native input off-screen (`left: -9999px`), `label {
padding-left: 28px; line-height: 20px }`, an 18px circle (border
      `2px solid rgba(0,0,0,0.1)`, bg `#fff` — white fill, light theme)
      whose ring border-color turns the variant color when checked, and a
      12px inner dot in the variant color that scales in when checked
      (`transition: all 0.2s ease`). Quarternary radio = mint `#52de97`.
  12. **Action row** — `div.row` (no mb-5) > `col-md-12`: SEVEN round
      buttons, six `btn-round btn-outline` + one `btn-round btn-primary`
      "Create Account": `Watch Photos` (`ion-ios-images mr-1`), `Download`
      (`ion-ios-download mr-1`), icon-only `Download` (download icon, NO
      label), `Add Comment` (NO icon — source quirk, keep), icon-only
      chatboxes (NO label), `Like` + `small.ml-4.rounded` "2" (heart icon;
      the badge renders `background: #e6e6e6; padding: 2px 8px; color:
rgba(0,0,0,0.3)` — LIGHT badge, unlike the dark-theme siblings'),
      `Create Account` (primary, no icon).
  13. **Footer** — the original has NO footer; per monorepo convention add
      a minimal attribution footer linking
      `https://www.componentdock.com/` ("Component Dock").
- **JS behaviors (original):** only Bootstrap's dropdown toggle — clicking
  a `Dropdown button` opens its menu; clicking again (or outside) closes
  it; menus are `position: absolute` white panels. Recreate with React
  state (one open dropdown at a time, `aria-expanded` on the toggle,
  `aria-haspopup="menu"`, close on outside click or Escape per repo
  conventions). Everything else is static — hover/focus effects via CSS
  only (no jQuery).
- **Design tokens (from `style.css` custom overrides + Bootstrap defaults +
  browser-verified computed styles):**

  | Token                | Value                                   | Usage                                                                             |
  | -------------------- | --------------------------------------- | --------------------------------------------------------------------------------- |
  | Page background      | `#ffffff` (white)                       | `body` — LIGHT theme (Bootstrap default; the custom body rule sets NO background) |
  | Body font            | **Poppins**, Arial, sans-serif          | body + headings (`"Poppins", Arial, sans-serif`)                                  |
  | Body text            | 15px, `line-height: 1.8`, weight normal | body; color `#212529` (Bootstrap default)                                         |
  | Section padding      | `7em 0` (105px top/bottom)              | `.ftco-section`                                                                   |
  | Title heading        | 32px, `#212529`, weight **400**         | `h2.heading-section` "Button #04" (color inherited — no custom color rule)        |
  | Block captions       | 16px, `#212529`, weight 400             | `h2.heading-section small` (Pick Your Style, …) — NO uppercase                    |
  | Button base          | 14px, weight **500**, `12px 16px`,      | `.btn` — `border-width: 1px` solid = button color,                                |
  |                      | `border-radius: 5px`,                   | **title-case labels (NO `text-transform`)**,                                      |
  |                      | `cursor: pointer`,                      | **REST SHADOW `0px 10px 20px -6px`                                                |
  |                      |                                         | `rgba(0,0,0,0.12)` (LIVE, browser-verified)**,                                    |
  |                      |                                         | `transition: .3s all ease` on `button`                                            |
  | Hover/focus shadow   | **`none`**                              | `button:hover, button:focus { box-shadow: none                                    |
  |                      |                                         | !important }`— shadow LIFTS OFF (the`.btn:hover`                                  |
  |                      |                                         | `0px 12px 20px -6px rgba(0,0,0,0.21)` is DEAD                                     |
  |                      |                                         | code — the `!important` wins; verified live)                                      |
  | Round variant        | `border-radius: 40px` (PILL)            | `.btn-round`                                                                      |
  | Block button         | `display: block; width: 100%`           | `.btn-block` (Bootstrap) — used in dropdowns                                      |
  | Small button (`sm`)  | 12px, padding `5px 20px`                | `.btn-sm` — used in Pick Your Size                                                |
  | Large button (`lg`)  | 16px, padding `17px 24px`               | `.btn-lg` — used in Pick Your Size                                                |
  | Link buttons         | transparent bg, `border: none`,         | `.btn.btn-link` — **BLACK text**, `box-shadow:                                    |
  |                      | `box-shadow: none`, **padding KEPT**    | none`, padding stays `12px 16px`; social link                                     |
  |                      |                                         | variant carries NO brand class (plain btn-link)                                   |
  | Primary (purple)     | bg `#5735ea`, text `#fff`; hover/focus  | `btn-primary` — NOT Bootstrap blue                                                |
  |                      | `#3a16d6`                               |                                                                                   |
  | Secondary (sky blue) | `#32c5f6` / white; hover `#0ab3eb`      | `btn-secondary` — NOT Bootstrap gray                                              |
  | Tertiary (green)     | `#48da79` / white; hover `#28c75d`      | `btn-tertiary` (custom class)                                                     |
  | Quarternary          | **45° GRADIENT** `#5635ea → #a15bf0`,   | `btn-quarternary` — white text, `border-color:                                    |
  | (gradient)           | white text, `border-color: transparent` | transparent !important`; hover KEEPS the same                                     |
  |                      | `!important`                            | gradient (no darken)                                                              |
  | Outline (plain)      | transparent bg, **BLACK text**,         | `btn-outline` — `1px solid rgba(0,0,0,0.1)` (light                                |
  |                      |                                         | ghost — NOT the white ghost of dark siblings);                                    |
  |                      |                                         | hover: text `rgba(0,0,0,0.5)`, border                                             |
  |                      |                                         | `rgba(0,0,0,0.05)`                                                                |
  | Outline-primary      | transparent bg, **`#5735ea` text**,     | `btn-outline-primary` (Group block only) — border                                 |
  |                      | 1px solid `#5735ea`; hover: bg          | `#5735ea` (matches the custom primary — NOT                                       |
  |                      | `#6a4cec`, white text                   | Bootstrap blue); custom rule sets color + border                                  |
  | Outline-secondary    | transparent bg, `#32c5f6` text, 1px     | `btn-outline-secondary` (Group block only) —                                      |
  |                      | solid `#32c5f6`; hover: bg `#4accf7`,   | custom rule sets color + border                                                   |
  |                      | white text                              |                                                                                   |
  | Disabled             | `opacity: 0.65`                         | `.disabled` / `:disabled` (Bootstrap)                                             |
  | Social Facebook      | `#4f69a2` / white                       | `btn-fb`, `btn-outline btn-fb`, link variant                                      |
  | Social Twitter       | `#69b6f0` / white                       | `btn-twitter`, `btn-outline btn-twitter`                                          |
  | Social Linkedin      | `#2884ba` / white                       | `btn-linkedin`, `btn-outline btn-linkedin`                                        |
  | Social Pinterest     | `#d03940` / white                       | `btn-pinterest`, `btn-outline btn-pinterest`                                      |
  | Social Dribbble      | `#ea6294` / white                       | `btn-dribbble`, `btn-outline btn-dribbble`                                        |
  | Like badge           | bg `#e6e6e6`, `padding: 2px 8px`,       | `.btn small` — the "2" count badge; color                                         |
  |                      | color `rgba(0,0,0,0.3)`                 | `rgba(0,0,0,0.3)` (LIGHT badge — dark siblings use                                |
  |                      |                                         | `#333` bg)                                                                        |
  | Checkbox color       | per variant (same palette)              | `.checkbox-<color>` — checked glyph colored;                                      |
  |                      |                                         | quarternary = MINT `#52de97` (NOT the gradient —                                  |
  |                      |                                         | quirk); disabled `opacity: 0.65`                                                  |
  | Radio color          | per variant (same palette)              | `.radio-<color>` — 18px ring `2px solid                                           |
  |                      |                                         | rgba(0,0,0,0.1)`on`#fff` fill (LIGHT — dark                                       |
  |                      |                                         | siblings use `#222` fill); ring border + 12px dot                                 |
  |                      |                                         | turn variant color when checked; quarternary mint                                 |
  | Dropdown menu        | white bg, `border: none`, shadow        | `0px 10px 34px -20px rgba(0,0,0,0.41)`; items                                     |
  |                      |                                         | 13px `rgba(0,0,0,0.7)`, hover bg `rgba(0,0,0,0.05)`                               |
  |                      |                                         | + `#000`                                                                          |
  | Group join           | Bootstrap joined treatment              | first member radius `5px 0 0 5px`, inner members                                  |
  |                      |                                         | radius 0 (touching, no gap)                                                       |
  | Button spacing       | `mb-2 mb-md-0` (0.5rem bottom below md) | kit rows; `mb-3` on full-width social + size rows;                                |
  |                      |                                         | `mb-4` on social brand rows                                                       |
  | Row spacing          | `mb-5` (3rem) between blocks            | `div.row.mb-5` (title row `mb-4`; social grid,                                    |
  |                      |                                         | groups + action rows have NO mb-5)                                                |

- **Fonts:** **Poppins** is the theme family (body + headings; weights
  300/400/500 load on the preview page). Load Poppins via Google Fonts
  `<link>` in `index.html`. Icons: the original uses the Ionicons glyph
  font (`ion-ios-heart`, `ion-ios-play`, `ion-ios-arrow-back`,
  `ion-ios-arrow-forward`, `ion-ios-images`, `ion-ios-download`,
  `ion-ios-chatboxes`, `ion-logo-facebook`, `ion-logo-twitter`,
  `ion-logo-linkedin`, `ion-logo-pinterest`, `ion-logo-dribbble`) —
  replace with `lucide-react` equivalents (`Heart`, `Play`, `ArrowLeft`,
  `ArrowRight`, `Image`/`Images`, `Download`, `MessageCircle`/
  `MessagesSquare`, `Facebook`, `Twitter`, `Linkedin`, `Pinterest`,
  `Dribbble`); NO icon font files copied.

## Requirements

### Requirement: Page structure

The system SHALL render the Levitate page as a single-column, centered
document on a white background, in this order: the "Button #04" title, the
nine showcase blocks (Pick Your Style, Pick Your Size, Pick Your Color,
full-width social grid [uncaptioned], Social Buttons, Dropdown Buttons,
Group Buttons, Checkboxes, Radios Buttons), the action row, and a minimal
footer.

#### Scenario: Default render

- **GIVEN** the Levitate page is rendered
- **WHEN** the user views the page
- **THEN** the page background SHALL be white (`#ffffff`)
- **AND** a left-aligned title SHALL read "Button #04" (32px, near-black
  `#212529`; the "#04" number is a reference artifact and MUST be kept
  as-is — do NOT "fix" it to "#14")
- **AND** the page SHALL contain, in order, the blocks listed above
- **AND** a footer SHALL render at the bottom (see "Footer" requirement)

#### Scenario: Block captions

- **GIVEN** the captioned showcase blocks are displayed
- **WHEN** the user inspects a block
- **THEN** each captioned block SHALL be labelled by a 16px caption
  reading `Pick Your Style`, `Pick Your Size`, `Pick Your Color`,
  `Social Buttons`, `Dropdown Buttons`, `Group Buttons`, `Checkboxes`,
  or `Radios Buttons` respectively
- **AND** the full-width social grid and the action row SHALL have NO
  caption (the grid flows directly under Pick Your Color)

### Requirement: Floating shadow signature

The system SHALL render every button with the Levitate floating-shadow
signature: a soft drop shadow at rest that lifts off on hover/focus.

#### Scenario: Rest shadow

- **GIVEN** any button is displayed (not hovered/focused)
- **WHEN** the user inspects it
- **THEN** the button SHALL render `box-shadow: 0px 10px 20px -6px
rgba(0,0,0,0.12)` (the signature — same family as the Buoy/BB11
  recreation, NOT the flat Stencil/Capsule treatment)

#### Scenario: Shadow lifts on hover/focus

- **GIVEN** a button is hovered or focused
- **WHEN** the user inspects it
- **THEN** the button SHALL render `box-shadow: none` (the reference's
  `button:hover, button:focus { box-shadow: none !important }` wins over
  the dead `.btn:hover` shadow declaration — verified in the live browser;
  do NOT implement a hover shadow)
- **AND** the fill SHALL darken to the button color's hover shade (e.g.
  primary `#3a16d6`) — except the quarternary gradient, whose hover keeps
  the same gradient

### Requirement: Title-case labels

The system SHALL render every button label in title case (sentence case)
as authored — matching the reference's plain text nodes.

#### Scenario: No uppercase transform

- **GIVEN** any button is displayed
- **WHEN** the user reads its label
- **THEN** the label SHALL render as authored ("Default", "Default with
  icon", "Default Small", "Gradient Regular", "Default Primary", "Default
  Gradient", "Create Account") with NO `text-transform` (unlike the
  Stencil/BB13 sibling's uppercase stencil signature)

### Requirement: Pick Your Style block

The system SHALL render the "Pick Your Style" block with eight buttons.

#### Scenario: Style row

- **GIVEN** the Pick Your Style block is displayed
- **WHEN** the user views the eight buttons
- **THEN** the row SHALL contain, in order: `Default` (solid primary),
  `Default` (outline), `Default with icon` (primary round pill, heart icon
  before label), an icon-only primary button with a heart icon and
  accessible label "Like" (sr-only), `Default with icon` (outline, heart
  before label), an icon-only primary button with a play icon and
  accessible label "Play" (sr-only), an icon-only primary button with an
  arrow-back icon and NO label, and an icon-only primary button with an
  arrow-forward icon and NO label
- **AND** every button SHALL be 14px, weight 500, `12px 16px`, 1px border
  in its own color, 5px radius, with the rest shadow

### Requirement: Pick Your Size block

The system SHALL render the "Pick Your Size" block with two rows of three
buttons (small, regular, large).

#### Scenario: Size rows

- **GIVEN** the Pick Your Size block is displayed
- **WHEN** the user views the two rows
- **THEN** a first (solid) row SHALL contain `Default Small`
  (primary, `btn-sm`: 12px, `5px 20px`), `Gradient Regular`
  (quarternary gradient), and `Default Large` (primary, `btn-lg`: 16px,
  `17px 24px`)
- **AND** a second (outline) row SHALL contain `Default Small`,
  `Gradient Regular`, and `Default Large` — all `btn-outline`
- **AND** the label "Gradient Regular" SHALL appear in BOTH rows (keep
  the copy as authored even though the outline row has no gradient)

### Requirement: Pick Your Color block

The system SHALL render the "Pick Your Color" block with the four color
variants.

#### Scenario: Color row

- **GIVEN** the Pick Your Color block is displayed
- **WHEN** the user views the four buttons
- **THEN** the row SHALL contain `Default Primary` (purple `#5735ea`),
  `Default Secondary` (sky blue `#32c5f6`), `Default Tertiary` (green
  `#48da79`), and `Default Gradient` (45° gradient `#5635ea → #a15bf0`,
  transparent border) — all with white text

### Requirement: Full-width social grid

The system SHALL render the uncaptioned full-width social grid as four
columns (solid, outline, round, round+outline), each stacking three
full-width left-aligned brand buttons (Twitter, Facebook, Find us on
Dribbble).

#### Scenario: Social grid

- **GIVEN** the full-width social grid is displayed
- **WHEN** the user views the grid
- **THEN** each column SHALL contain three stacked buttons (`w-100`,
  `text-left`, 0.5rem bottom gap) reading `Twitter`, `Facebook`, `Find us
on Dribbble`, each with its brand icon before the label (≈0.5rem gap)
- **AND** column 1 SHALL be solid brand fills (`#69b6f0` / `#4f69a2` /
  `#ea6294`)
- **AND** column 2 SHALL be `btn-outline` light ghosts with brand icons
- **AND** column 3 SHALL be solid pills (`border-radius: 40px`)
- **AND** column 4 SHALL be outline pills
- **AND** the grid SHALL have NO caption

### Requirement: Social buttons

The system SHALL render the "Social Buttons" block with five brand rows —
Facebook, Twitter, Linkedin, Pinterest, Dribbble — each with four icon-only
buttons and three labelled buttons (solid, outline, link).

#### Scenario: Brand rows

- **GIVEN** the Social Buttons block is displayed
- **WHEN** the user views each brand row
- **THEN** each row SHALL contain four icon-only buttons (solid, solid
  round, outline, outline round) using the brand icon
- **AND** three labelled buttons (solid, outline, link) with the brand's
  copy: Facebook `Share - 8.2k` / `Share - 8.5k` / `Share - 8k`, Twitter
  `Connect with Twitter` ×3, Linkedin `Connect with Linkedin` ×3,
  Pinterest `Pin it - 1k` ×3, Dribbble `Find us on Dribbble` ×3
- **AND** each brand SHALL use its reference color (Facebook `#4f69a2`,
  Twitter `#69b6f0`, Linkedin `#2884ba`, Pinterest `#d03940`, Dribbble
  `#ea6294`)
- **AND** solid buttons SHALL be filled with the brand color + white text;
  outline buttons SHALL be the light ghost (`1px solid
rgba(0,0,0,0.1)`, black text); link buttons SHALL be borderless with
  BLACK text and padding kept at `12px 16px` (no brand color — the
  reference's link variant carries no brand class)
- **AND** the round icon-only buttons SHALL be pills; all others SHALL
  have the 5px base radius

### Requirement: Dropdown buttons

The system SHALL render the "Dropdown Buttons" block with four dropdown
toggles (primary, secondary, tertiary, quarternary) whose menus open on
click.

#### Scenario: Opening a dropdown

- **GIVEN** the Dropdown Buttons block is displayed
- **WHEN** the user clicks a `Dropdown button` toggle
- **THEN** a white menu SHALL open below the toggle with items `Action`,
  `Another action`, and `Something else here` (13px, `rgba(0,0,0,0.7)`,
  soft shadow `0px 10px 34px -20px rgba(0,0,0,0.41)`)
- **AND** the toggle SHALL carry `aria-expanded="true"` and
  `aria-haspopup="menu"`

#### Scenario: Closing a dropdown

- **GIVEN** a dropdown menu is open
- **WHEN** the user clicks the toggle again, clicks outside, or presses
  Escape
- **THEN** the menu SHALL close and `aria-expanded` SHALL return to
  `false`

### Requirement: Button groups

The system SHALL render the "Group Buttons" block with two joined groups.

#### Scenario: Group rows

- **GIVEN** the Group Buttons block is displayed
- **WHEN** the user views the two groups
- **THEN** a first group SHALL contain `Button 1` (primary), `Outline
Button` (outline-primary), `Button 1` (primary)
- **AND** a second group SHALL contain `Button 2` (secondary), `Outline
Button` (outline-secondary), `Button 2` (secondary)
- **AND** the buttons in each group SHALL be joined (touching, no gap —
  Bootstrap `-1px` margin trick; first member radius `5px 0 0 5px`, inner
  members radius 0)
- **AND** the outline-primary member SHALL render with `#5735ea` text and
  a 1px solid `#5735ea` border (the reference's custom rule — NOT
  Bootstrap blue `#007bff`), and outline-secondary SHALL render with
  `#32c5f6` text and a 1px `#32c5f6` border
- **AND** the groups SHALL be block-level (`width: 100%`)

### Requirement: Checkboxes

The system SHALL render the "Checkboxes" column with five custom
color-coded checkboxes.

#### Scenario: Checkbox list

- **GIVEN** the Checkboxes column is displayed
- **WHEN** the user views the list
- **THEN** checkboxes SHALL be labelled `Primary`, `Success`, `Danger`,
  `Warning`, and `Disabled` (labels are reference copy — they do NOT match
  the color variants; keep as authored)
- **AND** each SHALL show a colored check glyph in its variant color
  (Primary `#5735ea`, Success → Secondary sky blue `#32c5f6`, Danger →
  Tertiary green `#48da79`, Warning → Quarternary MINT `#52de97` — NOT the
  gradient; Disabled `#343a40`)
- **AND** all five SHALL be checked; `Disabled` SHALL also be disabled
  with `opacity: 0.65`
- **AND** the label SHALL sit ≈35px to the right of the check glyph

### Requirement: Radio buttons

The system SHALL render the "Radios Buttons" column with five custom
color-coded radios (caption typo "Radios" is reference copy — keep).

#### Scenario: Radio list

- **GIVEN** the Radios Buttons column is displayed
- **WHEN** the user views the list
- **THEN** radios SHALL be labelled `Primary`, `Success`, `Danger`,
  `Warning`, and `Disabled` (same label/variant mismatch as checkboxes —
  keep as authored)
- **AND** each SHALL show an 18px circle (2px ring `rgba(0,0,0,0.1)`
  on a `#fff` fill — LIGHT theme) with a 12px inner dot in the variant
  color
- **AND** the first four SHALL be checked (dot visible + ring border in
  the variant color); `Disabled` SHALL be disabled with `opacity: 0.65`
- **AND** the label SHALL sit ≈28px to the right of the circle

### Requirement: Action row

The system SHALL render the closing action row with seven round buttons,
including icon-only buttons and a count badge.

#### Scenario: Action buttons

- **GIVEN** the action row is displayed
- **WHEN** the user views the seven buttons
- **THEN** the row SHALL contain, in order: `Watch Photos` (image icon
  before label), `Download` (download icon before label), an icon-only
  button with the download icon and NO label, `Add Comment` with NO icon
  (reference quirk — keep), an icon-only button with a chat icon and NO
  label, `Like` with a heart icon and a small `2` count badge (bg
  `#e6e6e6`, `padding: 2px 8px`, color `rgba(0,0,0,0.3)`, small text), and
  `Create Account`
- **AND** all SHALL be pills (`border-radius: 40px`); the first six SHALL
  be `btn-outline` light ghosts and `Create Account` SHALL be solid
  primary `#5735ea`

### Requirement: Responsive behavior

The system SHALL keep the single-column kit layout usable at all viewport
widths.

#### Scenario: Mobile layout

- **GIVEN** the Levitate page is rendered on a viewport ≤768px
- **WHEN** the page is displayed
- **THEN** button rows SHALL wrap without horizontal overflow (the
  reference's `mb-2` bottom margin on small screens)
- **AND** the Checkboxes and Radios Buttons columns SHALL stack
  (full width each)
- **AND** the full-width social columns SHALL stack (brands one under the
  other, each button still full-width)
- **AND** the section padding SHALL scale down sensibly (the reference's
  `7em 0` is tall; reduce for small screens per repo conventions)

### Requirement: Footer

The system SHALL render a minimal footer linking
`https://www.componentdock.com/` ("Component Dock") — required by repo
convention on every template (the original has no footer).

#### Scenario: Component Dock attribution

- **GIVEN** the Levitate page is rendered
- **WHEN** the user scrolls to the bottom
- **THEN** a footer SHALL link to `https://www.componentdock.com/` branded
  as "Component Dock" (e.g. "More templates at Component Dock")
- **AND** the footer SHALL be visually unobtrusive (small muted text) so
  it does not disturb the white kit-page reference design

## Verification checklist

- [ ] `npm run spec:validate` passes for `template-levitate`
- [ ] `scripts/verify-app.sh levitate` passes (typecheck + lint + vitest
      100% coverage + build)
- [ ] Sections in order (1:1 with reference): "Button #04" title →
      Pick Your Style (8 buttons) → Pick Your Size (2×3) → Pick Your
      Color (4) → full-width social grid (4×3, NO caption — the source's
      empty spacer row is invisible and NOT reproduced) → Social Buttons →
      Dropdown Buttons → Group Buttons → Checkboxes → Radios Buttons →
      Action row → minimal Component Dock footer; WHITE page, no
      navbar/hero/images
- [ ] Brand tokens in `@theme`, used via Tailwind classes: primary
      `#5735ea` (hover `#3a16d6`), secondary `#32c5f6` (`#0ab3eb`),
      tertiary `#48da79` (`#28c75d`), quarternary gradient `#5635ea →
    #a15bf0` (45°, transparent border, hover keeps gradient),
      outline border `rgba(0,0,0,0.1)` + black text, social fb `#4f69a2` /
      twitter `#69b6f0` / linkedin `#2884ba` / pinterest `#d03940` /
      dribbble `#ea6294`, checkbox/radio quarternary mint `#52de97`
- [ ] Font: Poppins via Google Fonts `<link>` in `index.html`; title
      "Levitate — Button Showcase"
- [ ] Buttons: base 14px weight 500 `12px 16px`, 1px solid border in
      button color, `border-radius: 5px`, **title-case labels (NO
      text-transform)**, **REST SHADOW `0px 10px 20px -6px
    rgba(0,0,0,0.12)`**; `btn-round` = pill 40px; `btn-block` = full
      width; `btn-sm` = 12px/`5px 20px`; `btn-lg` = 16px/`17px 24px`;
      plain `btn-outline` = BLACK text + `1px solid rgba(0,0,0,0.1)`
      ghost; group outline-primary = `#5735ea` text + border (NOT
      Bootstrap blue); link variant = borderless black text with padding
      kept
- [ ] **Hover/focus: `box-shadow: none` (shadow LIFTS OFF — verified live;
      the `.btn:hover` `0px 12px 20px` shadow is dead code) + per-color
      darker fill** (quarternary keeps its gradient); `transition: .3s all
    ease`; keep a `focus-visible` ring per repo a11y convention
- [ ] Interactions: four dropdowns open/close on click (React state,
      aria-expanded/haspopup, close on outside click/Escape); everything
      else static CSS (hover/focus only) — NO jQuery/Bootstrap JS
- [ ] Icons from `lucide-react` (Heart, Play, ArrowLeft, ArrowRight,
      Image, Download, MessageCircle/MessagesSquare, Facebook, Twitter,
      Linkedin, Pinterest, Dribbble) — NO Ionicons font, NO copied glyph
      CSS
- [ ] Checkboxes/radios: custom colored variants with the Levitate palette
      (native inputs visually hidden per reference; radio ring `#fff`
      fill — LIGHT theme), Disabled variant with `opacity: 0.65`; labels
      "Primary/Success/Danger/Warning/Disabled" as authored
- [ ] Reference artifacts preserved: heading "Button #04" (NOT "#14"),
      caption "Radios Buttons", "Add Comment" with no icon, icon-only
      buttons with no label (arrow-back/arrow-forward; download; chat),
      sr-only labels "Like"/"Play" on the Pick Your Style icon buttons,
      "Gradient Regular" label in the outline size row, quarternary
      checkbox/radio mint `#52de97`, the 4× solid/outline/round social
      grid with NO caption
- [ ] Apps MUST import Button/ButtonLink/cn from `packages/ui` (knip gate)
- [ ] TEMPLATES.md `[~]` → `[x]` + surge URL + `npm run readme:status`
      done by implementer at ship time (mark the "Bootstrap Buttons 14"
      row, line 675 — Bootstrap Buttons category; slug appears exactly
      once, no dup rows)
