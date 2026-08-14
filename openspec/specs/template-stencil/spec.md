# Template: Stencil (Button / UI Kit Showcase)

## Purpose

Stencil is a single-page button/UI-kit showcase template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Bootstrap Buttons 13" free template (source:
https://colorlib.com/wp/template/bootstrap-buttons-13/), built under a
DIFFERENT name (**Stencil** — a stencil is a template for stamped lettering;
the template's signature is its ALL-CAPS stenciled button labels
(`text-transform: uppercase`), its flat 2px-bordered buttons with a barely-
rounded 2px radius, and its four-color palette — royal blue, lilac, violet,
mint — on a dark `#222` surface, with block-level (full-width) buttons
throughout the first half of the page; per the monorepo naming mandate —
never reuse the ColorLib source name), with the monorepo stack: Vite + React
19 + Tailwind CSS 4 + TypeScript.

The original is a **dark** (`#222` background), single-column Bootstrap 4
UI-kit page: a 32px white heading "Button #03" at the top, then **nine**
showcase blocks. Unlike the Capsule/BB12 sibling, there are NO per-block
captions for the first four blocks (they flow directly under the title);
captioned blocks use a 16px white `<small>` inside `h2.heading-section`.
Every button is **flat** (computed `box-shadow: none` — the author's
soft-shadow declarations are dead code overridden by `box-shadow: none
!important`), **13px**, weight **500**, padding `14px 18px`, `border-width:
2px` solid in the button's own color, `border-radius: 2px`, and
**`text-transform: uppercase`** (the signature). The custom palette replaces
Bootstrap's defaults entirely: primary is ROYAL BLUE `#3e64ff`, secondary is
LILAC `#bd83ce` (NOT Bootstrap gray), tertiary is VIOLET `#8105d8`,
quarternary is MINT `#52de97`; each solid has a darker `:hover/:focus` shade.
`btn-round` is a pill (`border-radius: 40px`); `btn-outline` is a
translucent-white ghost (`2px solid rgba(255,255,255,0.1)`, white text).
Social brand buttons (Facebook `#4f69a2`, Twitter `#69b6f0`, Linkedin
`#2884ba`, Pinterest `#d03940`, Dribbble `#ea6294`) come in solid / outline
/ link variants with Ionicons logos. The page also showcases full-width
brand buttons, Bootstrap dropdowns, joined button groups, custom colored
checkboxes/radios, and a closing row of round action buttons (including
icon-only ones and a "Like" button with a small count badge). There is NO
navbar, NO hero, NO images, and NO footer in the original — the whole page
is the kit showcase itself. Stencil recreates the structure section-for-
section with matching layout, tokens, typography, and content kinds (no
ColorLib assets copied; Ionicons replaced by `lucide-react` equivalents).

> NAMING NOTE: the ColorLib source name "Bootstrap Buttons 13" is FORBIDDEN
> as the app name. **Stencil** is the new, original name — single lowercase
> word, no collision with `apps/`, `openspec/specs/`, `docs/templates/` or
> TEMPLATES.md (verified 2026-08-14). Source slug + preview URL are recorded
> below.

> PREVIEW URL QUIRK: the default preview URL
> `https://preview.colorlib.com/theme/bootstrap-buttons-13/` returns **404**;
> the REAL preview URL is
> `https://preview.colorlib.com/theme/bb/bootstrap-buttons-13/` (HTTP 200 —
> the same nested `/bb/` subpath pattern as "Bootstrap Buttons 01"–12). The
> page `<title>` is "Button 03".

> ⚠ HEADING NUMBER ARTIFACT: the live `h2` renders **"Button #03"** (with a
> leading space in the source: `<h2 class="heading-section"> Button #03</h2>`;
> the `<title>` is likewise "Button 03") — the number was copy-pasted from
> the "Bootstrap Buttons 03" sibling and never updated (same kind of
> artifact as Capsule/12's "Button #02" and Buoy/11's "#01 — Bootstrap 4
> Buttons"). Fidelity mandate = render the heading exactly as the reference
> renders it: **"Button #03"**. Do NOT "fix" it to "Button #13" — that would
> deviate from the reference. (The leading source whitespace is a text node
> and is invisible in the render; it does not need to be reproduced.)

> ⚠ CAPTION TYPO: the radio column caption reads **"Radios Buttons"**
> (plural "Radios") in the source — keep as authored.

## Design reference (replication findings)

- **Original:** ColorLib "Bootstrap Buttons 13". Listed in TEMPLATES.md
  under **Bootstrap Buttons (20)** (line 674). Free UI-kit button-component
  template. The `bootstrap-buttons-13` slug appears exactly once in
  TEMPLATES.md (no duplicate rows to mark).
- **Live preview DOM — REACHABLE (verified 2026-08-14):** the default
  preview URL `https://preview.colorlib.com/theme/bootstrap-buttons-13/`
  returns 404; the REAL preview URL is
  `https://preview.colorlib.com/theme/bb/bootstrap-buttons-13/` (HTTP 200,
  27.3KB HTML, `<title>Button 03</title>`, heading `Button #03` — the
  "#03" copy-paste artifact, see above). Stylesheets: `css/style.css`
  (227KB — Bootstrap 4 base + the custom dark theme; the token source),
  `css/ionicons.min.css` (46.8KB glyph font — used by the heart + social
  logos + checkbox glyphs). JS: jQuery + Popper + Bootstrap bundle +
  `js/main.js` — only the Bootstrap dropdown behavior is actually used on
  this page (four dropdown toggles). Structure, copy, and tokens below are
  from the live DOM + both stylesheets + browser-verified computed styles
  (2026-08-14).
- **Screenshot (TEMPLATES.md `bootstrap-buttons-13.jpg`, 1200×972, AVIF) —**
  viewed 2026-08-14: CONSISTENT with the live page — dark `≈#222`
  background, white "Button #03" heading, the four-color palette (royal
  blue / lilac / violet / mint), ALL-CAPS labels ("DEFAULT", "DEFAULT WITH
  ICON", "TWITTER", "FIND US ON DRIBBBLE", "SHARE - 8.2K", "CONNECT WITH
  TWITTER"), flat rounded buttons, pill round variants, same section order.
  Both references AGREE, so no screenshot-vs-live discrepancy to warn
  implementers about.
- **Visual design (live DOM + computed styles):** dark `#222` page
  background (`body { background: #222; font-family: "Poppins", Arial,
sans-serif; font-size: 15px; line-height: 1.8; font-weight: normal; }` —
  Poppins is the theme family). One `section.ftco-section#buttons`
  (padding `7em 0` = 105px top/bottom, transparent bg) > `div.container`.
  Title row (`div.row.mb-4`): `h2.heading-section` "Button #03" — **32px,
  `#fff`, weight 400**. The first FOUR blocks (Default, Round, Icon,
  full-width Social) have NO captions — they sit directly under the title
  as `div.row.mb-5` blocks; the remaining blocks each start with `h2.heading-section
  > small`— **16px`#fff`** caption. Button anatomy: `<button type="button"
  > class="btn … btn-<color>">Label</button>`— label is a DIRECT text node
rendered ALL-CAPS via`text-transform: uppercase`; icons are `<i
  > class="ion-*"></i>`(Ionicons glyph font) placed before (with`mr-1`/`mr-2`) or after (with `ml-1`/`ml-2`) the label. Buttons are FLAT —
computed `box-shadow: none`on every button (the custom`.btn`rule's`0px 10px 20px -6px rgba(0,0,0,0.12)`and the`:hover`
`0px 12px 20px -6px rgba(0,0,0,0.21)`shadow declarations are DEAD CODE:
the same rule declares`box-shadow: none !important`which wins at
computed-value time;`button:hover, button:focus`also force`box-shadow: none !important`; hover changes NO shadow and NO background
fill except the per-color `:hover/:focus`darken rules). This is the
same flat treatment as Capsule/12 — NOT the Buoy/11 floating-shadow
signature. The template's identity: **uppercase stenciled labels + flat
2px-bordered buttons with 2px radius + the blue/lilac/violet/mint
palette on`#222`**.
- **Section order (1:1 from live DOM):**
  1. **Title** — `div.row.mb-4` > `h2.heading-section` **"Button #03"**
     (32px white, weight 400, left-aligned).
  2. **Default** (NO caption) — `div.row.mb-5`; row 1: four SOLID
     block-level buttons (`col-md-3` each, `btn-block` = `display: block;
width: 100%`) — `btn-primary`, `btn-secondary`, `btn-tertiary`,
     `btn-quarternary` — all labelled "Default"; row 2: four `btn-outline`
     block buttons, all labelled "Default" — all four are the SAME
     translucent-white ghost class (`btn-outline`); the source did not
     author per-color outlines here (keep the 4× identical outline row as
     authored — it is part of the reference).
  3. **Round** (NO caption) — `div.row.mb-5`; row 1: four `btn-round`
     solid buttons (`btn-round btn-{primary,secondary,tertiary,quarternary}`,
     pill); row 2: four `btn-round btn-outline` pills.
  4. **Icon buttons** (NO caption) — `div.row.mb-5` > one nested row of
     EIGHT `col-md-3` buttons (wraps 4+4): "Default with icon" — heart
     icon BEFORE label (`ion-ios-heart mr-1`) on solid primary / solid
     tertiary / outline 1 / outline 3, heart AFTER label (`ml-1`) on solid
     secondary / solid quarternary / outline 2 / outline 4 (alternating).
  5. **Full-width social** (NO caption) — `div.row.mb-5` > `col-md-12` >
     nested row of FOUR `col-md-3` columns; each column stacks THREE
     buttons vertically (`mb-3`, `text-left`, `w-100` = full width, left-
     aligned): `Twitter` (`ion-logo-twitter mr-2`), `Facebook`
     (`ion-logo-facebook mr-2`), `Find us on Dribbble` (`ion-logo-dribbble
mr-2`). Column 1 = solid brand (`btn-twitter` / `btn-fb` /
     `btn-dribbble`); column 2 = `btn-outline btn-<brand>`; column 3 =
     `btn-round btn-<brand>`; column 4 = `btn-round btn-outline
btn-<brand>`.
  6. **Social Buttons** — `h2 > small` caption; FIVE `col-md-12 mb-4` rows
     (one per brand), each with SEVEN buttons: four icon-only (`btn-<brand>`
     solid, `btn-round btn-<brand>`, `btn-outline`, `btn-outline btn-round`)
     followed by three labelled buttons (solid `btn-<brand>`, `btn-outline`,
     `btn-link ml-2`): Facebook (`Share - 8.2k` / `Share - 8.5k` / `Share -
8k`), Twitter (`Connect with Twitter` ×3), Linkedin (`Connect with
Linkedin` ×3), Pinterest (`Pin it - 1k` ×3), Dribbble (`Find us on
Dribbble` ×3). NOTE: the labelled link variant is a PLAIN `btn-link`
     (no brand class) → computed = white text, no border, transparent bg,
     padding KEPT at `14px 18px` (the custom `.btn.btn-link` rule does not
     zero padding, unlike Capsule's links).
  7. **Dropdown Buttons** — `h2 > small` caption; nested row of FOUR
     `col-md-3` dropdowns (`div.dropdown.d-block`): toggles `Dropdown
button` in `btn-primary` / `btn-secondary` / `btn-tertiary` /
     `btn-quarternary` (all `btn-block dropdown-toggle`, `aria-haspopup`,
     `aria-expanded`), each with a `dropdown-menu dropdown-menu-left` of
     three items (`Action`, `Another action`, `Something else here`).
  8. **Group Buttons** — `h2 > small` caption; nested row of TWO
     `col-md-6` joined groups (`div.btn-group.btn-block`): group 1 =
     `btn-primary` "Button 1", `btn-outline-primary` "Outline Button",
     `btn-primary` "Button 1"; group 2 = `btn-secondary` "Button 2",
     `btn-outline-secondary` "Outline Button", `btn-secondary` "Button 2".
     Members are joined (Bootstrap `-1px` margin trick; first member
     radius `2px 0 0 2px`, inner members radius 0).
  9. **Checkboxes** — `div.row.mb-5` > `col-md-4`; the `h2 > small`
     caption "Checkboxes" sits INSIDE the column; FIVE custom checkboxes
     (all checked): `checkbox-primary` "Primary", `checkbox-secondary`
     "Success", `checkbox-tertiary` "Danger", `checkbox-quarternary`
     "Warning", `checkbox-dark` "Disabled" (checked AND disabled). NOTE the
     labels do NOT match the color variants (secondary→"Success",
     tertiary→"Danger", quarternary→"Warning", dark→"Disabled") — that is
     source copy, keep as authored. Custom style: native input hidden
     (`visibility: hidden`, absolutely positioned), a large Ionicons glyph
     "box" `\f15c` (37px, `rgba(0,0,0,0.2)`) unchecked / "check" `\f148`
     (30px, variant color) checked, label `<span>` with `margin-left: 35px`.
  10. **Radios Buttons** — same row, `col-md-4` beside Checkboxes; the
      `h2 > small` caption **"Radios Buttons"** (typo, keep) sits INSIDE
      the column; FIVE custom radios: `radio-primary` "Primary",
      `radio-secondary` "Success", `radio-tertiary` "Danger",
      `radio-quarternary` "Warning" (all checked), `radio-dark` "Disabled"
      (disabled, unchecked; source skips radio5 → name/id `radio6`).
      Custom style: native input off-screen (`left: -9999px`), `label {
padding-left: 28px; line-height: 20px }`, an 18px circle (border
      `2px solid rgba(255,255,255,0.1)`, bg `#222`) whose ring border-color
      turns the variant color when checked, and a 12px inner dot in the
      variant color that scales in when checked (`transition: all 0.2s
ease`).
  11. **Action row** — `div.row` (no `mb-5`) > `col-md-12`: SEVEN round
      buttons, six `btn-round btn-outline` + one `btn-round btn-primary`
      "Create Account": `Watch Photos` (`ion-ios-images mr-1`), `Download`
      (`ion-ios-download mr-1`), icon-only `Download` (download icon, NO
      label), `Add Comment` (NO icon — source quirk, keep), icon-only
      chatboxes (NO label), `Like` + `small.ml-4.rounded` "2" (heart icon;
      the badge renders `background: #333333; padding: 2px 8px`), `Create
Account` (primary, no icon).
  12. **Footer** — the original has NO footer; per monorepo convention add
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

  | Token                | Value                                   | Usage                                               |
  | -------------------- | --------------------------------------- | --------------------------------------------------- |
  | Page background      | `#222` (dark gray)                      | `body` — dark theme page (NOT `#111` like Capsule)  |
  | Body font            | **Poppins**, Arial, sans-serif          | body + headings (`"Poppins", Arial, sans-serif`)    |
  | Body text            | 15px, `line-height: 1.8`, weight normal | body                                                |
  | Link color           | `#3e64ff`                               | `a` (unused on this page)                           |
  | Section padding      | `7em 0` (105px top/bottom)              | `.ftco-section`                                     |
  | Title heading        | 32px, `#fff`, weight **400**            | `h2.heading-section` "Button #03"                   |
  | Block captions       | 16px, `#fff`                            | `h2.heading-section small` (Social Buttons, …)      |
  | Button base          | 13px, weight **500**, `14px 18px`,      | `.btn` — `border-width: 2px` solid = button color,  |
  |                      | `border-radius: 2px`,                   | **`text-transform: uppercase`** (signature),        |
  |                      | `cursor: pointer`, `overflow: hidden`,  | **NO box-shadow (FLAT — computed `none`;            |
  |                      |                                         | author's soft-shadow rules are dead code)**,        |
  |                      |                                         | no transition                                       |
  | Round variant        | `border-radius: 40px` (PILL)            | `.btn-round`                                        |
  | Block button         | `display: block; width: 100%`           | `.btn-block` (Bootstrap) — used in blocks 2–4, 6, 7 |
  | Small button (`sm`)  | 12px, padding `5px 20px`                | `.btn-sm` (unused on this page)                     |
  | Large button (`lg`)  | 16px, padding `17px 24px`, PILL 40px    | `.btn-lg` (unused on this page)                     |
  | Link buttons         | transparent bg, `border: none`,         | `.btn.btn-link` — WHITE text, `box-shadow: none`,   |
  |                      | `box-shadow: none`, **padding KEPT**    | padding stays `14px 18px` (unlike Capsule's `0`)    |
  | Primary (royal blue) | bg `#3e64ff`, text `#fff`; hover/focus  | `btn-primary` — NOT Bootstrap blue                  |
  |                      | `#0b3bff`                               |                                                     |
  | Secondary (lilac)    | `#bd83ce` / white; hover `#aa5ec0`      | `btn-secondary` — NOT Bootstrap gray                |
  | Tertiary (violet)    | `#8105d8` / white; hover `#6304a6`      | `btn-tertiary` (custom class)                       |
  | Quarternary (mint)   | `#52de97` / white; hover `#29d47d`      | `btn-quarternary` (custom class)                    |
  | Outline (plain)      | transparent bg, **white text**,         | `btn-outline` — `2px solid rgba(255,255,255,0.1)`;  |
  |                      |                                         | hover: text `rgba(255,255,255,0.5)`, border         |
  |                      |                                         | `rgba(255,255,255,0.05)`                            |
  | Outline-primary      | transparent bg, **white text**,         | `btn-outline-primary` (Group block only) — border   |
  |                      | 2px solid **`#007bff`** (Bootstrap      | stays Bootstrap blue: the custom rule               |
  |                      | blue — NOT `#3e64ff`)                   | `.btn.btn-outline-primary { color: #fff }` only     |
  |                      |                                         | flips the text color                                |
  | Outline-secondary    | transparent bg, white text, 2px solid   | `btn-outline-secondary` (Group block only) —        |
  |                      | `#bd83ce`                               | custom rule sets color + border                     |
  | Disabled             | `opacity: 0.65`                         | `.disabled` / `:disabled` (Bootstrap)               |
  | Social Facebook      | `#4f69a2` / white                       | `btn-fb`, `btn-outline btn-fb`, link variant        |
  | Social Twitter       | `#69b6f0` / white                       | `btn-twitter`, `btn-outline btn-twitter`            |
  | Social Linkedin      | `#2884ba` / white                       | `btn-linkedin`, `btn-outline btn-linkedin`          |
  | Social Pinterest     | `#d03940` / white                       | `btn-pinterest`, `btn-outline btn-pinterest`        |
  | Social Dribbble      | `#ea6294` / white                       | `btn-dribbble`, `btn-outline btn-dribbble`          |
  | Like badge           | bg `#333333`, `padding: 2px 8px`        | `.btn small` — the "2" count badge                  |
  | Checkbox color       | per variant (same palette)              | `.checkbox-<color>` — checked glyph colored;        |
  |                      |                                         | disabled `opacity: 0.65`                            |
  | Radio color          | per variant (same palette)              | `.radio-<color>` — 18px ring `2px solid             |
  |                      |                                         | rgba(255,255,255,0.1)`on`#222` fill; ring border    |
  |                      |                                         | + 12px dot turn variant color when checked          |
  | Dropdown menu        | white bg, `border: none`, shadow        | `0px 10px 34px -20px rgba(0,0,0,0.41)`; items       |
  |                      |                                         | 13px `rgba(0,0,0,0.7)`, hover `#000`                |
  | Group join           | Bootstrap joined treatment              | first member radius `2px 0 0 2px`, inner members    |
  |                      |                                         | radius 0 (touching, no gap)                         |
  | Button spacing       | `mb-2 mb-md-0` (0.5rem bottom below md) | kit rows; `mb-3` on full-width social; `mb-4`       |
  |                      |                                         | on social brand rows                                |
  | Row spacing          | `mb-5` (3rem) between blocks            | `div.row.mb-5` (title row `mb-4`; action row none)  |

- **Fonts:** **Poppins** is the theme family (body + headings). Load
  Poppins via Google Fonts `<link>` in `index.html`. Icons: the original
  uses the Ionicons glyph font (`ion-ios-heart`, `ion-ios-images`,
  `ion-ios-download`, `ion-ios-chatboxes`, `ion-logo-facebook`,
  `ion-logo-twitter`, `ion-logo-linkedin`, `ion-logo-pinterest`,
  `ion-logo-dribbble`) — replace with `lucide-react` equivalents (`Heart`,
  `Image`/`Images`, `Download`, `MessageCircle`/`MessagesSquare`,
  `Facebook`, `Twitter`, `Linkedin`, `Pinterest`, `Dribbble`); NO icon font
  files copied.

## Requirements

### Requirement: Page structure

The system SHALL render the Stencil page as a single-column, centered
document on a dark background, in this order: the "Button #03" title, the
eleven showcase blocks (Default, Round, Icon buttons, Full-width social,
Social Buttons, Dropdown Buttons, Group Buttons, Checkboxes, Radios
Buttons, Action row), and a minimal footer.

#### Scenario: Default render

- **GIVEN** the Stencil page is rendered
- **WHEN** the user views the page
- **THEN** the page background SHALL be dark gray (`#222`)
- **AND** a left-aligned title SHALL read "Button #03" (32px, white; the
  "#03" number is a reference artifact and MUST be kept as-is — do NOT
  "fix" it to "#13")
- **AND** the page SHALL contain, in order, the blocks listed above
- **AND** a footer SHALL render at the bottom (see "Footer" requirement)

#### Scenario: Block captions

- **GIVEN** the captioned showcase blocks are displayed
- **WHEN** the user inspects a block
- **THEN** each captioned block SHALL be labelled by a 16px white caption
  reading `Social Buttons`, `Dropdown Buttons`, `Group Buttons`,
  `Checkboxes`, or `Radios Buttons` respectively
- **AND** the first four blocks (Default, Round, Icon buttons, Full-width
  social) SHALL have NO caption — they flow directly under the title

### Requirement: Uppercase stenciled labels

The system SHALL render every button label in uppercase letters, matching
the reference's `text-transform: uppercase` signature.

#### Scenario: All-caps labels

- **GIVEN** any button is displayed
- **WHEN** the user reads its label
- **THEN** the label SHALL render in uppercase (e.g. "DEFAULT", "DEFAULT
  WITH ICON", "TWITTER", "SHARE - 8.2K", "CREATE ACCOUNT") via
  `text-transform: uppercase` (author the source text in sentence case and
  uppercase it in CSS, exactly like the reference)

### Requirement: Default buttons

The system SHALL render the first showcase block with two rows of four
block-level buttons labelled "Default".

#### Scenario: Solid row

- **GIVEN** the Default block is displayed
- **WHEN** the user views the first row
- **THEN** four solid buttons SHALL render full-width within their column
  (`display: block; width: 100%`), reading `Default`
- **AND** the four SHALL use the Stencil palette in order: Primary royal
  blue `#3e64ff`, Secondary lilac `#bd83ce`, Tertiary violet `#8105d8`,
  Quarternary mint `#52de97`, all with white text
- **AND** each SHALL be 13px, weight 500, padding `14px 18px`, 2px solid
  border in its own color, `border-radius: 2px`, flat (no box-shadow)

#### Scenario: Outline row

- **GIVEN** the Default block is displayed
- **WHEN** the user views the second row
- **THEN** four buttons SHALL render labelled `Default` with a translucent
  white outline — `2px solid rgba(255,255,255,0.1)`, transparent
  background, white text
- **AND** all four SHALL be identical (the source authored the same
  `btn-outline` class four times — reproduce the 4× identical row as-is)

### Requirement: Round buttons

The system SHALL render the Round block with two rows of four pill-shaped
block-level buttons labelled "Default".

#### Scenario: Round rows

- **GIVEN** the Round block is displayed
- **WHEN** the user views the rows
- **THEN** a first row SHALL contain four solid pills (`border-radius:
40px`) in the four-color palette order (primary, secondary, tertiary,
  quarternary)
- **AND** a second row SHALL contain four `btn-outline` pills with the
  translucent white outline
- **AND** every button SHALL be block-level, uppercase, flat, 13px weight
  500

### Requirement: Icon buttons

The system SHALL render the Icon block with eight block-level buttons
labelled "Default with icon", alternating the heart icon before/after the
label.

#### Scenario: Icon row

- **GIVEN** the Icon block is displayed
- **WHEN** the user views the eight buttons
- **THEN** buttons 1–4 SHALL be solid (primary, secondary, tertiary,
  quarternary) and buttons 5–8 SHALL be `btn-outline`
- **AND** buttons 1, 3, 5, 7 SHALL place the heart icon BEFORE the label
  (≈0.25rem gap)
- **AND** buttons 2, 4, 6, 8 SHALL place the heart icon AFTER the label
- **AND** every button SHALL read `Default with icon` and SHALL be
  block-level, uppercase, flat

### Requirement: Full-width social buttons

The system SHALL render the full-width social block as four columns
(solid, outline, round, round+outline), each stacking three full-width
left-aligned brand buttons (Twitter, Facebook, Find us on Dribbble).

#### Scenario: Social grid

- **GIVEN** the full-width social block is displayed
- **WHEN** the user views the grid
- **THEN** each column SHALL contain three stacked buttons (`w-100`,
  `text-left`, 0.5rem bottom gap) reading `Twitter`, `Facebook`, `Find us
on Dribbble`, each with its brand icon before the label (≈0.5rem gap)
- **AND** column 1 SHALL be solid brand fills (`#69b6f0` / `#4f69a2` /
  `#ea6294`)
- **AND** column 2 SHALL be `btn-outline` ghosts with brand icons
- **AND** column 3 SHALL be solid pills (`border-radius: 40px`)
- **AND** column 4 SHALL be outline pills

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
  outline buttons SHALL be the translucent-white ghost (`2px solid
rgba(255,255,255,0.1)`); link buttons SHALL be borderless with WHITE
  text and padding kept at `14px 18px` (no brand color — the reference's
  link variant carries no brand class)
- **AND** the round icon-only buttons SHALL be pills; all others SHALL
  have the 2px base radius

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
  Bootstrap `-1px` margin trick; first member radius `2px 0 0 2px`, inner
  members radius 0)
- **AND** the outline-primary member SHALL render with WHITE text and a
  2px solid `#007bff` border (Bootstrap blue — the reference's custom rule
  only flips the text color; do NOT substitute `#3e64ff`), and
  outline-secondary SHALL render with white text and a 2px `#bd83ce`
  border
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
  (Primary `#3e64ff`, Success → Secondary lilac `#bd83ce`, Danger →
  Tertiary violet `#8105d8`, Warning → Quarternary mint `#52de97`,
  Disabled `#343a40`)
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
- **AND** each SHALL show an 18px circle (2px ring `rgba(255,255,255,0.1)`
  on a `#222` fill) with a 12px inner dot in the variant color
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
  `#333333`, `padding: 2px 8px`, small text), and `Create Account`
- **AND** all SHALL be pills (`border-radius: 40px`); the first six SHALL
  be `btn-outline` ghosts and `Create Account` SHALL be solid primary
  `#3e64ff`

### Requirement: Flat styling

The system SHALL render every button flat — no drop shadows — matching
the reference's computed styles.

#### Scenario: No shadows

- **GIVEN** any button is displayed
- **WHEN** the user inspects it
- **THEN** the button SHALL have `box-shadow: none` at rest, on hover, and
  on focus (the template's flat signature, same family as Capsule/12 — do
  NOT add shadows; this is the opposite of the Buoy/11 floating-shadow
  sibling)

### Requirement: Responsive behavior

The system SHALL keep the single-column kit layout usable at all viewport
widths.

#### Scenario: Mobile layout

- **GIVEN** the Stencil page is rendered on a viewport ≤768px
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

- **GIVEN** the Stencil page is rendered
- **WHEN** the user scrolls to the bottom
- **THEN** a footer SHALL link to `https://www.componentdock.com/` branded
  as "Component Dock" (e.g. "More templates at Component Dock")
- **AND** the footer SHALL be visually unobtrusive (small muted text) so
  it does not disturb the dark kit-page reference design

## Verification checklist

- [ ] `npm run spec:validate` passes for `template-stencil`
- [ ] `scripts/verify-app.sh stencil` passes (typecheck + lint + vitest
      100% coverage + build)
- [ ] Sections in order (1:1 with reference): "Button #03" title → Default
      (2×4 block buttons, no caption) → Round (2×4 pills, no caption) →
      Icon buttons (8, no caption) → Full-width social (4×3 grid, no
      caption) → Social Buttons → Dropdown Buttons → Group Buttons →
      Checkboxes → Radios Buttons → Action row → minimal Component Dock
      footer; dark `#222` page, no navbar/hero/images
- [ ] Brand tokens in `@theme`, used via Tailwind classes: primary
      `#3e64ff` (hover `#0b3bff`), secondary `#bd83ce` (`#aa5ec0`),
      tertiary `#8105d8` (`#6304a6`), quarternary `#52de97` (`#29d47d`),
      outline border `rgba(255,255,255,0.1)`, social fb `#4f69a2` /
      twitter `#69b6f0` / linkedin `#2884ba` / pinterest `#d03940` /
      dribbble `#ea6294`
- [ ] Font: Poppins via Google Fonts `<link>` in `index.html`; title
      "Stencil — Button Showcase"
- [ ] Buttons: base 13px weight 500 `14px 18px`, 2px solid border in
      button color, `border-radius: 2px`, **`text-transform: uppercase`**,
      FLAT (`box-shadow: none` — do NOT add shadows; unlike Buoy/11);
      `btn-round` = pill 40px; `btn-block` = full width; plain `btn-outline`
      = white text + `2px solid rgba(255,255,255,0.1)` ghost; group
      outline-primary = white text + `#007bff` border; link variant =
      borderless white text with padding kept
- [ ] Interactions: four dropdowns open/close on click (React state,
      aria-expanded/haspopup, close on outside click/Escape); everything
      else static CSS (hover/focus only) — NO jQuery/Bootstrap JS
- [ ] Icons from `lucide-react` (Heart, Image, Download,
      MessageCircle/MessagesSquare, Facebook, Twitter, Linkedin, Pinterest,
      Dribbble) — NO Ionicons font, NO copied glyph CSS
- [ ] Checkboxes/radios: custom colored variants with the Stencil palette
      (native inputs visually hidden per reference), Disabled variant with
      `opacity: 0.65`; labels "Primary/Success/Danger/Warning/Disabled" as
      authored
- [ ] Reference artifacts preserved: heading "Button #03" (NOT "#13"),
      caption "Radios Buttons", "Add Comment" with no icon, icon-only
      buttons with no label, the 4× identical `btn-outline` Default row
- [ ] Apps MUST import Button/ButtonLink/cn from `packages/ui` (knip gate)
- [ ] TEMPLATES.md `[~]` → `[x]` + surge URL + `npm run readme:status`
      done by implementer at ship time (mark the "Bootstrap Buttons 13"
      row, line 674 — Bootstrap Buttons category; slug appears exactly
      once, no dup rows)
