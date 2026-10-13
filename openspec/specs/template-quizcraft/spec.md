# Template: QuizCraft (Creative Multiselect Box)

## Purpose

QuizCraft is a single-page creative multiselect box template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Multiselect V07" free template (source:
https://colorlib.com/wp/template/multiselect-07/), built under a DIFFERENT
name (**QuizCraft**), with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

The original is a Bootstrap 4.3.1 page with Semantic UI 2.2.13 dropdown:
a clean white page with a centered heading "Multiselect #07" and a single
full-width multiselect dropdown component letting users pick multiple
topics from a list (Family, Family Law, Friends, Co-workers, Startup,
Work, Basketball, Baseball, Investors, US Embassy). The dropdown uses
Semantic UI's `.ui.selection.fluid.dropdown` with `.multiple` behavior:
selected items appear as pink (#e8647c) label chips inside the field,
each with a white × remove icon. The dropdown menu opens below the field
with a pink (#e8647c) background, white text, and thin lighter-pink
(#ef90a2) borders between items. Font Awesome 4.7.0 circle-radio icons
appear left of each menu item. The dropdown border transitions to
#e8647c on hover/active. Body uses Lato font (300/400/700), text is
gray, headings are black #000.

**WHAT MAKES QUIZCRAFT DISTINCT (signature behaviors):**

1. **Single centered multiselect component — no hero, no nav, no footer.**
   The entire page is one `section.ftco-section` with vertical padding
   (7em 0), a centered row containing the heading, and a single centered
   row containing the dropdown. There is NO navbar, NO hero, NO features,
   NO footer, NO newsletter — this is a focused form-component demo page,
   not a full landing page. This makes it one of the simplest templates
   in the backlog.

2. **Semantic UI styled multiselect with pink chip labels.** The
   `<select multiple>` is enhanced by Semantic UI into a clickable field
   that opens a custom dropdown menu. Selected items render as inline
   label chips with background #e8647c, white text, and a × delete icon.
   The dropdown menu has a solid #e8647c background, white item text,
   1px #ef90a2 separator borders, and FontAwesome circle-radio icons
   (content: '\f192') absolutely positioned left of each item. Menu item
   hover inverts to white background with #e8647c text.

3. **Pink (#e8647c) brand accent throughout.** The brand color #e8647c
   is the ONLY accent — used for: links (a { color }), active dropdown
   border, dropdown menu background, label chips, dropdown item hover
   text, and focus states. There is no secondary color. The page is
   otherwise monochrome (white background, gray body text, black headings).

4. **Lato font family with three weights.** The page loads Lato 300/400/700
   via Google Fonts (served through Cloudflare CDN in the original).
   Body text is 16px Lato normal weight, line-height 1.8, color gray.
   Headings are Lato 400 weight, #000, 28px for the section title.

5. **Responsive centered column layout.** The dropdown sits in a
   `col-lg-4 col-md-6` column, centered with `d-flex justify-content-center
   align-items-center`. On mobile the dropdown stretches full width. The
   heading row uses `col-md-6` centered. Bootstrap 4.3.1 grid handles
   responsiveness.

## Design reference (replication findings)

- **Original:** ColorLib "Multiselect V07" — creative multiselect box
  component demo (source: https://colorlib.com/wp/template/multiselect-07/).
- **Live preview analyzed:** https://preview.colorlib.com/theme/bootstrap/multiselect-07/
  (HTTP 200, 4 KB, title "Multiselect 07"). Preview uses Bootstrap 4.3.1
  (`stackpath.bootstrapcdn.com`), Semantic UI 2.2.13 (`cdn.jsdelivr.net`),
  Font Awesome 4.7.0 (`cdnjs.cloudflare.com`), Google Fonts Lato (via
  Cloudflare `cf-fonts`), and a custom `css/style.css` (222 KB, mostly
  Bootstrap + Semantic UI compiled CSS + ~200 lines of custom styles).
- **Screenshot:** `multiselect-07.jpg` (TEMPLATES.md line 831) — could not
  be rendered via vision tool (unsupported image source). Visual description
  inferred from DOM and CSS: clean white page, centered pink-accent
  multiselect dropdown, minimal layout.
- **Visual design (from DOM + CSS tokens):** Single-component demo page —
  white background, centered column layout, pink **#e8647c** primary
  accent (links, active states, dropdown menu bg, label chips), light
  pink **#ef90a2** menu separator borders, **Lato** font family (300/400/700),
  body text **gray**, headings **#000** at 28px, 16px body at line-height
  1.8. Dropdown: Semantic UI `.ui.selection.fluid.dropdown.multiple`,
  4px radius, 1px border (default #e6e6e6, active/hover #e8647c),
  box-shadow on open. Menu: solid #e8647c background, white text,
  1px #ef90a2 item borders, FontAwesome circle-radio icons. Labels:
  #e8647c background, white text, × delete icon. No hero, no nav, no
  footer — focused form-component showcase.

## Design tokens

| Token              | Value                    | Usage                                      |
| ------------------ | ------------------------ | ------------------------------------------ |
| Brand primary      | `#e8647c` (pink/coral)  | Links, active border, menu bg, label chips |
| Menu separator     | `#ef90a2` (light pink)  | Dropdown item borders                      |
| Heading color      | `#000` (black)           | Section heading                            |
| Body text          | `gray`                   | Body paragraphs, muted text               |
| Background         | `#fff` (white)           | Page background                            |
| Font family        | `Lato` (300/400/700)     | All text — body + headings                |
| Font size          | `16px`                   | Body text                                  |
| Line height        | `1.8`                    | Body text                                  |
| Heading size       | `28px`                   | Section heading (.heading-section)         |
| Border radius      | `4px`                    | Dropdown field + menu                      |
| Dropdown border    | `#e6e6e6` (default)      | Inactive dropdown border                   |
| Dropdown active    | `#e8647c`                | Active/hover dropdown border               |
| Label background   | `#e8647c`                | Selected item chip labels                  |
| Label text         | `#fff`                   | Selected item chip text                    |
| Menu item text     | `#fff`                   | Dropdown menu item text                    |
| Menu item hover bg | `#fff`                   | Menu item hover background                 |
| Menu item hover    | `#e8647c`                | Menu item hover text color                 |

## Requirements

### Feature: Page shell

#### Scenario: Clean white centered layout

- **GIVEN** the user visits the QuizCraft page
- **THEN** a white (#fff) background fills the viewport
- **AND** a single section with vertical padding (7em 0) is centered
- **AND** there is NO navbar, NO hero section, NO footer, NO newsletter

#### Scenario: Responsive centered column

- **GIVEN** the viewport is desktop (≥992px)
- **THEN** the heading occupies a col-md-6 centered row
- **AND** the dropdown occupies a col-lg-4 col-md-6 centered row

- **GIVEN** the viewport is mobile (<768px)
- **THEN** the dropdown stretches to full width

### Feature: Section heading

#### Scenario: Centered heading text

- **GIVEN** the page is loaded
- **THEN** a centered h2 with class "heading-section" displays "Multiselect #07"
- **AND** the heading is 28px Lato 400 weight, color #000
- **AND** there is 3rem (mb-5) bottom margin below the heading row

### Feature: Multiselect dropdown

#### Scenario: Dropdown renders with topic options

- **GIVEN** the page is loaded
- **THEN** a multiselect dropdown field is visible in the center column
- **AND** the dropdown label reads "Select Topics"
- **AND** the dropdown contains 10 options:
  | value | label        |
  | 1     | Family       |
  | 2     | Family Law   |
  | 3     | Friends      |
  | 4     | Co-workers   |
  | 5     | Startup      |
  | 6     | Work         |
  | 7     | Basketball   |
  | 8     | Baseball     |
  | 9     | Investors    |
  | 10    | US Embassy   |

#### Scenario: Dropdown opens on click

- **GIVEN** the dropdown is closed
- **WHEN** the user clicks the dropdown field
- **THEN** a dropdown menu appears below the field
- **AND** the menu has a solid #e8647c background
- **AND** the menu items have white (#fff) text
- **AND** each menu item has a 1px #ef90a2 top border separator
- **AND** each menu item has a FontAwesome circle-radio icon (\f192) on the left
- **AND** hovering a menu item changes its background to white and text to #e8647c

#### Scenario: Multiple selection with chip labels

- **GIVEN** the dropdown menu is open
- **WHEN** the user clicks "Family"
- **THEN** a label chip appears in the dropdown field with text "Family"
- **AND** the chip has background #e8647c and white text
- **AND** a × delete icon is visible on the chip
- **WHEN** the user clicks "Work"
- **THEN** a second chip "Work" appears next to the first

#### Scenario: Remove selection via chip delete

- **GIVEN** "Family" and "Work" are selected (chips visible)
- **WHEN** the user clicks the × on the "Family" chip
- **THEN** the "Family" chip is removed from the field
- **AND** the "Work" chip remains visible
- **AND** the dropdown field still shows remaining selections

#### Scenario: Dropdown border styling

- **GIVEN** the dropdown is inactive
- **THEN** the dropdown border is #e6e6e6 (default)

- **WHEN** the user hovers the dropdown
- **THEN** the border transitions to #e8647c

- **WHEN** the dropdown is open (active)
- **THEN** the border is #e8647c
- **AND** the border-radius is 4px
- **AND** a subtle box-shadow appears

### Feature: Typography and colors

#### Scenario: Lato font family

- **GIVEN** the page is loaded
- **THEN** all text uses the Lato font family
- **AND** body text is 16px, line-height 1.8, color gray
- **AND** headings are Lato 400 weight, color #000

#### Scenario: Link color

- **GIVEN** the page contains any anchor elements
- **THEN** links use color #e8647c
- **AND** link hover transitions with 0.3s ease

### Feature: Accessibility

#### Scenario: Semantic HTML structure

- **GIVEN** the page is loaded
- **THEN** the main content is inside a <section> element
- **AND** the dropdown uses a <label> element for "Select Topics"
- **AND** the <select> element has the `multiple` attribute

#### Scenario: Keyboard interaction

- **GIVEN** the dropdown is focused
- **WHEN** the user presses Enter or Space
- **THEN** the dropdown menu opens
- **AND** arrow keys navigate menu items
- **AND** Enter selects the focused item
- **AND** Escape closes the menu

### Feature: Footer attribution

#### Scenario: Component Dock link in footer

- **GIVEN** the page is loaded
- **THEN** a footer area contains a link to https://www.componentdock.com/
- **AND** the link text mentions "Component Dock"

## Verification checklist

- [ ] Page renders white background, centered layout, no nav/hero/footer
- [ ] Heading "Multiselect #07" centered, 28px Lato #000
- [ ] Multiselect dropdown with 10 topic options renders correctly
- [ ] Dropdown opens on click with #e8647c menu background
- [ ] Menu items have white text, #ef90a2 separators, FA circle icons
- [ ] Menu item hover: white bg, #e8647c text
- [ ] Selected items render as #e8647c chip labels with × delete
- [ ] Chips can be removed by clicking ×
- [ ] Dropdown border transitions: default #e6e6e6 → active #e8647c
- [ ] Dropdown border-radius 4px, subtle shadow when open
- [ ] Lato font loaded (300/400/700), body 16px/1.8 gray
- [ ] Links colored #e8647c with 0.3s transition
- [ ] Keyboard accessible: Enter/Space open, arrows navigate, Escape closes
- [ ] Footer includes Component Dock link
- [ ] No references to ColorLib in app code (provenance in spec only)
- [ ] `npm run test:coverage` passes at 100%
- [ ] `npm run typecheck` passes
- [ ] `npm run lint` passes
- [ ] Build succeeds
