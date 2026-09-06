# Template: DropFold (Dropdown Mega-Menu)

## Purpose

DropFold is a single-page dropdown mega-menu showcase in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Dropdown 16" free template (source:
https://colorlib.com/wp/template/dropdown-16/), built under a
DIFFERENT name (**DropFold**), with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

The original is a Bootstrap 4 dropdown component demo (Bootstrap 4.1.3 +
jQuery 3.3.1 + Popper.js + Owl Carousel — though Owl Carousel is loaded
but unused in this particular demo). It renders a centered page title
"Dropdown #6" and a single dropdown trigger that opens a wide mega-menu
panel with a 3-column layout: a hero image with caption on the left, and
two columns of category link lists on the right. The mega-menu animates
in with opacity + margin-top transitions and is centered below the trigger.

**WHAT MAKES DROPFOLD DISTINCT (signature behaviors):**

1. **Centered dropdown trigger with rotating chevron.** The trigger is a
   simple text link "Dropdown" with a Material Design
   `icon-keyboard_arrow_down` chevron (Replace with lucide `ChevronDown`).
   On open, the chevron rotates 180° via CSS transform; on close, it
   rotates back. The link color is `#888` (grey) turning `#000` (black)
   when `.show` is active.

2. **Wide mega-menu panel (min-width 680px) with 3-column grid.** The
   dropdown menu is NOT a standard Bootstrap dropdown — it's a custom
   `.custom-dropdown` with a `.mega-menu` container using `display: flex`
   and three equal `33.333%` columns. The panel has:
   - Left column: hero image (`images/hero_1.jpg` → picsum placeholder)
     + caption "PSD Mockups" with "View All Here" subtitle
   - Middle column: unordered list of 6 categories (Code, Fonts, HTML
     Templates, Mockups, Logo, PSD Mockups) with counts
   - Right column: unordered list of 6 categories (Sketch App, User
     Interface, WordPress, User Experience, WebGL, Mockups) with counts

3. **Slide-down + fade animation (no Bootstrap default).** The menu uses
   custom CSS transitions: `opacity 0→1`, `visibility hidden→visible`,
   and `margin-top 0→10px`, all 300ms ease. It is positioned with
   `left: 50%; transform: translate(-50%, 0)` to center below the
   trigger, and starts at `top: 100%`.

4. **Deep box-shadow and transparent border.** The panel has a prominent
   shadow `0 15px 30px 0 rgba(0,0,0,0.2)` and a `1px solid transparent`
   border (for sizing without visible border). The panel padding is 10px
   with the inner `.mega-menu` having 20px padding.

5. **Link hover color: pink/magenta `#e83e8c`.** Category links inside
   the mega-menu are `#000` by default and turn `#e83e8c` on hover.
   The `.title` elements (not rendered in this particular demo but defined
   in CSS) are 12px, bold, uppercase.

6. **Lightweight page shell.** The page has 7rem vertical padding
   (`.content { padding: 7rem 0 }`), body font Roboto 300, paragraph
   text `#b3b3b3`, heading font Roboto (same stack). The page background
   is white. No footer beyond the Component Dock credit.

## Source mapping

- **ColorLib item:** "Dropdown 16" (TEMPLATES.md line 771; section
  "## Dropdown Menus (10)" at line 769 — note: the TEMPLATES.md heading
  says "Dropdown Menus" but there are actually only 5 dropdown entries
  visible: Dropdown 16–20).
- **Source URL:** https://colorlib.com/wp/template/dropdown-16/
- **Preview URL — REACHABLE (verified 2026-09-06 by direct fetch):**
  **`https://preview.colorlib.com/theme/bootstrap/dropdown-16/`**
  (HTTP 200, 22,095 bytes). The naive URL without `/bootstrap/` returns
  404 — the dropdown family lives under `/theme/bootstrap/dropdown-<n>/`.
- **Preview CSS:** `css/style.css` (3,474 bytes — hand-written custom
  styles on top of Bootstrap 4). Also loads: `css/bootstrap.min.css`,
  `css/owl.carousel.min.css`, `fonts/icomoon/style.css` (icon font —
  REPLACE with lucide), `js/main.js` (minimal: just Bootstrap dropdown
  toggle). Fonts loaded via Cloudflare Fonts: Roboto 300/400/700,
  Poppins 300/400/500, Source Serif Pro 400/600 (only Roboto is used
  in the actual CSS; Poppins and Source Serif Pro are loaded but unused
  in this demo's styles).

## Design tokens (live stylesheet + rendered page, verified 2026-09-06)

| Token           | Value                                  | Use                                                                        |
| --------------- | -------------------------------------- | -------------------------------------------------------------------------- |
| Body font       | 'Roboto' 300/400/700                   | Google Fonts `<link>` (400, 700 — 300 is body weight); base font stack    |
| Heading font    | Same Roboto stack as body              | `h1-h6` use the same family                                                |
| Body text       | default black                          | paragraphs are `#b3b3b3` (light grey)                                     |
| Paragraph color | `#b3b3b3`                              | `p { color: #b3b3b3 }` — used for descriptive text                         |
| Link grey       | `#888`                                 | dropdown trigger link color (inactive state)                               |
| Link black      | `#000`                                 | dropdown trigger when `.show` is active; mega-menu links default           |
| Hover pink      | `#e83e8c`                              | mega-menu link hover color (magenta/pink)                                  |
| Badge blue      | `#007bff`                              | Bootstrap primary blue (notification badge on dropdown icons, not rendered |
|                 |                                        | in this demo but defined in CSS)                                           |
| Border light    | `#efefef`                              | `.btn-custom` border (not rendered in this demo)                           |
| Panel shadow    | `0 15px 30px 0 rgba(0,0,0,0.2)`        | mega-menu box-shadow — prominent deep shadow                               |
| Panel border    | `1px solid transparent`                | invisible border for sizing                                                |
| Page bg         | white (default)                        | no explicit background set on body                                         |
| Content padding | `7rem 0`                               | `.content` vertical padding                                                |
| Title style     | 12px, bold 700, uppercase              | `.title` class (defined but not rendered in this demo)                     |
| Mega-menu min-w | 680px                                  | `.dropdown-menu { min-width: 680px }`                                      |
| Mega-menu cols  | 3 × 33.333%                           | `.mega-menu > div { width: 33.3333% }`                                     |
| Mega-menu pad   | 20px inner, 10px outer                 | `.mega-menu { padding: 20px }`, `.dropdown-menu { padding: 10px }`          |
| Animation       | 300ms ease (opacity, margin-top,       | `.dropdown-menu` transition: opacity + margin-top + visibility             |
|                 | visibility)                            |                                                                            |
| Chevron rotate  | 180° transform on `.show`              | `.custom-dropdown.show a span { transform: rotate(180deg) }`               |
| Link transition | 0.3s all ease                           | `a { transition: .3s all ease }`                                           |

## Requirements

### Requirement: Page shell

The system SHALL render a white page with centered content, 7rem vertical
padding, Roboto font, and a centered heading.

#### Scenario: Page layout

- **GIVEN** the DropFold app is rendered on a desktop viewport
- **THEN** the page background SHALL be white (default)
- **AND** the content SHALL be centered horizontally with 7rem vertical
  padding
- **AND** the font family SHALL be Roboto (400/700 from Google Fonts)
- **AND** a heading SHALL render centered reading "Dropdown Menu" (or
  equivalent — the source shows "Dropdown #6")

### Requirement: Dropdown trigger

The system SHALL render a centered dropdown trigger link that toggles the
mega-menu panel on click.

#### Scenario: Trigger rendering

- **GIVEN** the page is rendered
- **THEN** a centered trigger link SHALL be visible reading "Dropdown"
  with a downward chevron icon
- **AND** the link color SHALL be `#888` (grey)
- **AND** the chevron SHALL be a lucide `ChevronDown` icon

#### Scenario: Trigger hover/focus

- **GIVEN** the trigger is rendered
- **WHEN** the user hovers or focuses the trigger
- **THEN** the link SHALL transition to `#000` (black) within 0.3s

### Requirement: Mega-menu panel

The system SHALL render a wide 3-column mega-menu panel that appears below
the trigger with a slide-down + fade animation.

#### Scenario: Panel structure

- **GIVEN** the dropdown is open
- **THEN** a panel SHALL be visible below the trigger with:
  - A 3-column layout (each column ~33.33% width)
  - Left column: a hero image + caption "PSD Mockups" with "View All Here"
  - Middle column: a list of 6 category links (Code, Fonts, HTML Templates,
    Mockups, Logo, PSD Mockups)
  - Right column: a list of 6 category links (Sketch App, User Interface,
    WordPress, User Experience, WebGL, Mockups)
- **AND** the panel minimum width SHALL be 680px
- **AND** the panel SHALL be centered below the trigger (left: 50%,
  transform: translateX(-50%))

#### Scenario: Panel animation

- **GIVEN** the dropdown is closed
- **WHEN** the user clicks the trigger
- **THEN** the panel SHALL animate in with opacity 0→1, visibility
  hidden→visible, and margin-top 0→10px over 300ms ease
- **AND** the chevron SHALL rotate 180° simultaneously

#### Scenario: Panel shadow and border

- **GIVEN** the panel is visible
- **THEN** the panel SHALL have a box-shadow of `0 15px 30px 0 rgba(0,0,0,0.2)`
- **AND** the panel SHALL have a `1px solid transparent` border
- **AND** the panel padding SHALL be 10px (outer) with 20px inner padding
  on the mega-menu content

### Requirement: Mega-menu links

Links inside the mega-menu SHALL be styled with the correct colors and
hover effects.

#### Scenario: Link default and hover colors

- **GIVEN** a mega-menu link is rendered
- **THEN** the default color SHALL be `#000` (black)
- **AND** the font weight SHALL be 400
- **AND** the link SHALL have no underline (text-decoration: none)
- **WHEN** the user hovers the link
- **THEN** the color SHALL transition to `#e83e8c` (pink/magenta) within 0.3s

#### Scenario: Category list structure

- **GIVEN** a category list column is rendered
- **THEN** it SHALL be an unordered list with no bullets (list-unstyled)
- **AND** each item SHALL display the category name followed by a count
  in parentheses (e.g. "Code(5)")
- **AND** each item SHALL be a block-level link with 5px vertical padding

### Requirement: Toggle state management

The system SHALL manage open/closed state of the mega-menu via click
toggling.

#### Scenario: Open/close toggle

- **GIVEN** the dropdown is closed
- **WHEN** the user clicks the trigger
- **THEN** the panel SHALL appear with the `.show`-equivalent state
- **AND** the trigger link color SHALL change to `#000`
- **AND** the chevron SHALL rotate 180°
- **WHEN** the user clicks the trigger again
- **THEN** the panel SHALL disappear (reverse animation)
- **AND** the trigger link color SHALL return to `#888`
- **AND** the chevron SHALL rotate back to 0°

#### Scenario: Click outside to close

- **GIVEN** the dropdown is open
- **WHEN** the user clicks outside the dropdown area
- **THEN** the panel SHALL close (reverse animation)

### Requirement: Responsive behavior

The system SHALL handle narrow viewports gracefully.

#### Scenario: Narrow viewport

- **GIVEN** the viewport is narrower than 680px
- **THEN** the mega-menu panel SHALL remain at min-width 680px
  (the source has no mobile-specific rules for the dropdown)
- **AND** the page content SHALL not cause horizontal overflow
  (the panel may scroll or the page may accommodate it)

### Requirement: Footer

The system SHALL render a footer with the Component Dock credit.

#### Scenario: Component Dock credit

- **GIVEN** the DropFold app is rendered
- **THEN** the footer SHALL link to https://www.componentdock.com/
  branded as "Component Dock"

## Verification checklist

- [ ] `npm run verify:app -- dropfold` green: typecheck → lint → vitest
      (100% coverage) → build (per-app gate).
- [ ] Visual diff vs the live preview at
      https://preview.colorlib.com/theme/bootstrap/dropdown-16/:
      white page, Roboto font, centered "Dropdown" trigger with
      ChevronDown, 680px-wide 3-column mega-menu panel with hero image
      + caption + two category lists, pink hover, deep shadow.
- [ ] Behavior check: click trigger opens panel with 300ms animation,
      chevron rotates 180°, trigger turns black; click again closes with
      reverse animation; click outside closes; mega-menu links turn
      pink on hover.
- [ ] Responsive check at 680px (panel min-width maintained, no
      horizontal overflow on page).
- [ ] No ColorLib references in any app file; footer links
      https://www.componentdock.com/.
