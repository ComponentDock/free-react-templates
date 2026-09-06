# Template: Optbox (Form — Multiselect Dropdown)

## Purpose

Recreation of ColorLib "Multiselect 05" — a fully mobile-ready free simple multiselect dropdown snippet.

- **Source slug**: `multiselect-05`
- **Source URL**: https://colorlib.com/wp/template/multiselect-05/
- **Preview URL**: https://preview.colorlib.com/theme/bootstrap/multiselect-05/
- **Description**: A fully mobile-ready free simple multiselect dropdown snippet that displays different options in a distraction-free way. Uses Select2 jQuery plugin with custom checkbox styling.
- **Stack**: React 19 + Tailwind CSS 4 + TypeScript (Vite)

## Design tokens

Extracted from the preview stylesheet (`css/style.css`):

| Token | Value | Usage |
|-------|-------|-------|
| Font family | `"Lato", Arial, sans-serif` | Body, headings |
| Font weights | 300 (light), 400 (normal), 700 (bold) | Via Google Fonts |
| Body font size | 16px, line-height 1.8 | Base typography |
| Brand color | `#fd5f00` (orange) | Checkmark fill, focus border, clear button |
| Heading color | `#000` (black) | Section headings |
| Body text color | `gray` | Body text, option tags |
| Section padding | `7em 0` vertical | ftco-section |
| Heading font size | 28px | `.heading-section` |
| Background | `#fff` (white) | Page background |
| Checkbox size | 20x20px | Custom checkbox indicators |
| Checkbox border-radius | 4px | Rounded corners on checkboxes |
| Dropdown border-radius | 4px | Dropdown and select field |
| Tag background | `rgba(0, 0, 0, 0.1)` | Selected option pills |
| Tag font size | 15px | Selected option pills |
| Box shadow | `0px 3px 22px -15px rgba(0, 0, 0, 0.63)` | Select field and dropdown |
| Focus border | `2px solid #fd5f00` | Select2 focus state |
| Option highlight bg | `#fff` | Hovered/highlighted option |
| Option highlight text | `#000` | Hovered/highlighted option text |
| Checkmark icon | Font Awesome `\f00c` (check) | Selected option indicator |

### Visual design (from TEMPLATES.md screenshot reference)

The original template shows a clean, minimalist centered layout on a white background:
- A bold heading "Multiselect #05" centered at the top
- Below it, a wide select2 multiselect widget with a borderless input field
- Selected options appear as grey pill tags with × remove buttons
- Dropdown opens with a list of options, each showing a custom checkbox (unchecked = outlined square, checked = orange filled square with white checkmark)
- 13 options labeled Option1 through Option13
- Generous vertical padding (7em top and bottom)
- No navigation, no images, no footer in the original

## Requirements

### Requirement: Page renders with correct layout and content

The page SHALL render a centered layout with a heading, label, multi-select dropdown, and footer.

#### Scenario: Heading is displayed

- **WHEN** the page loads
- **THEN** the heading "Optbox" is visible and centered

#### Scenario: Dropdown shows placeholder when nothing is selected

- **WHEN** the page loads with no selections
- **THEN** the dropdown button shows "Select options"

#### Scenario: Footer renders Component Dock link

- **WHEN** the page loads
- **THEN** the footer contains a link to https://www.componentdock.com/

### Requirement: Dropdown opens and closes correctly

The dropdown SHALL open when the trigger is clicked and close when clicking outside or pressing Escape.

#### Scenario: Click opens dropdown

- **WHEN** the user clicks the dropdown trigger
- **THEN** the option list becomes visible

#### Scenario: Click outside closes dropdown

- **WHEN** the dropdown is open and the user clicks outside
- **THEN** the option list is hidden

#### Scenario: Escape closes dropdown

- **WHEN** the dropdown is open and the user presses Escape
- **THEN** the option list is hidden

### Requirement: Options can be selected and deselected

The dropdown SHALL allow selecting and deselecting individual options with visible checkmarks.

#### Scenario: Click selects an option

- **WHEN** the dropdown is open and the user clicks "Option1"
- **THEN** Option1 is marked as selected with an orange checkmark

#### Scenario: Click deselects a selected option

- **WHEN** Option1 is selected and the user clicks "Option1" again
- **THEN** Option1 is deselected

#### Scenario: Selected option appears as a tag pill

- **WHEN** Option1 is selected
- **THEN** a grey pill tag labeled "Option1" appears in the select field

#### Scenario: Tag pill has remove button

- **WHEN** Option1 is selected
- **THEN** the Option1 pill tag has an × remove button

#### Scenario: Remove button deselects the option

- **WHEN** Option1 is selected and the user clicks the × on its pill
- **THEN** Option1 is deselected and the pill is removed

### Requirement: Multiple options can be selected simultaneously

The dropdown SHALL support selecting multiple options at once.

#### Scenario: Multiple selections are supported

- **WHEN** the user selects "Option1" and "Option2"
- **THEN** both options are marked as selected
- **AND** two pill tags appear in the select field

### Requirement: All 13 options are available

The dropdown SHALL display all 13 original options.

#### Scenario: Options are listed

- **WHEN** the user opens the dropdown
- **THEN** the following options are visible: Option1, Option2, Option3, Option4, Option5, Option6, Option7, Option8, Option9, Option10, Option11, Option12, Option13

### Requirement: Design tokens are applied correctly

The template SHALL use the extracted design tokens for visual fidelity.

#### Scenario: Brand color is applied to checkmarks

- **WHEN** an option is selected
- **THEN** the checkmark background uses `#fd5f00`

#### Scenario: Focus state uses brand color

- **WHEN** the select field receives focus
- **THEN** the border is `2px solid #fd5f00`

#### Scenario: Lato font is used

- **WHEN** the page renders
- **THEN** the body font is "Lato", Arial, sans-serif

### Requirement: Responsive behavior

The dropdown SHALL be fully responsive and mobile-friendly.

#### Scenario: Desktop layout

- **WHEN** the viewport is wider than 992px
- **THEN** the select container has a minimum width of 600px

#### Scenario: Mobile layout

- **WHEN** the viewport is 992px or narrower
- **THEN** the select container fills the available width

## Verification checklist

- [ ] Heading rendered with Lato font, 28px, black, centered
- [ ] Dropdown opens/closes on click and outside click
- [ ] Escape key closes dropdown
- [ ] 13 options displayed (Option1–Option13)
- [ ] Options selectable/deselectable with orange checkmarks
- [ ] Selected options appear as grey pill tags with × remove
- [ ] Multiple selections supported simultaneously
- [ ] Focus border is 2px solid #fd5f00
- [ ] Box shadows on select field and dropdown
- [ ] 7em vertical section padding
- [ ] Responsive: 600px min-width on desktop, full-width on mobile
- [ ] Footer links to https://www.componentdock.com/
- [ ] No ColorLib references in app code
- [ ] 100% test coverage
- [ ] `npm run verify:app optbox` passes
