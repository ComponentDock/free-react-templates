# Template: Selectkit (Form — Multiselect Dropdown)

## Purpose

Recreation of ColorLib "Multiselect 07" — a Semantic UI-styled multi-select topic picker with colored label tags.

- **Source slug**: `multiselect-07`
- **Source URL**: https://colorlib.com/wp/template/multiselect-07/
- **Preview URL**: https://preview.colorlib.com/theme/bootstrap/multiselect-07/
- **Description**: A full-width multi-select dropdown using Semantic UI's `selection fluid dropdown` with label tags. Selecting an option adds a colored tag pill inside the dropdown trigger; deselecting removes it. The dropdown uses Semantic UI's label-based multi-select pattern where labels are rendered inline in the trigger. The dropdown menu has a pinkish-red brand color (`#e8647c`) for active states, menu backgrounds, and tag pills. Options in the dropdown list have custom circle checkboxes (FontAwesome `\f192`) and white text on the colored background.
- **Stack**: React 19 + Tailwind CSS 4 + TypeScript (Vite)

## Design tokens

Extracted from the preview stylesheet (`css/style.css`):

| Token | Value | Usage |
|-------|-------|-------|
| Font family | `"Lato", Arial, sans-serif` | Body, headings |
| Font weights | 300 (light), 400 (normal), 700 (bold) | Via Google Fonts |
| Body font size | 16px, line-height 1.8 | Base typography |
| Brand color | `#e8647c` (pinkish-red) | Links, active dropdown border, menu background, tag labels, hover text |
| Menu item border color | `#ef90a2` (lighter pink) | Separator between dropdown items |
| Heading color | `#000` (black) | Section headings |
| Body text color | `gray` | Body text |
| Section background | `#fff` (white) | Page body background |
| Section padding | `7em 0` | `.ftco-section` |
| Heading font size | 28px | `.heading-section` |
| Dropdown border-radius | 4px | Selection dropdown and menu |
| Dropdown box-shadow | `0px 3px 19px -15px rgba(0, 0, 0, 0.41)` | Default state |
| Active dropdown border | `#e8647c` | Active/focused state |
| Active menu background | `#e8647c` | Open dropdown menu background |
| Menu item font size | 16px | Dropdown option text |
| Menu item padding | `15px 15px 15px 35px` | Option spacing (35px left for checkbox) |
| Label background | `#e8647c` | Tag pills in trigger |
| Label text color | `#fff` (white) | Tag pill text |
| Label padding | `6px 8px` | Tag pill internal spacing |
| Trigger text font size | 14px | Placeholder / selected text |
| Dropdown focus | `border-color: #e8647c`, `box-shadow: none` | Focus state |
| Hover menu item bg | `#fff` (white) | Hovered option background |
| Hover menu item text | `#e8647c` | Hovered option text |
| Checkbox icon | FontAwesome `\f192` (circle-o) | Custom checkbox per option |
| Checkbox size | 12px × 12px | Position: left:15px, centered vertically |

### Visual design (from TEMPLATES.md screenshot reference)

The original template shows a centered layout with:
- A heading "Multiselect #07" at the top
- A full-width Semantic UI selection dropdown (within a col-lg-4 / col-md-6 container)
- Label "Select Topics" above the dropdown
- The dropdown trigger shows "Select Topics" as placeholder text (14px, gray)
- When open, the menu has a pinkish-red (`#e8647c`) background
- Options are listed in white text with custom circle checkboxes (FontAwesome) on the left
- Separator lines between options in a lighter pink (`#ef90a2`)
- When an option is selected, a colored label pill appears in the trigger area
- The label pill has a pinkish-red background with white text
- Dropdown border turns pinkish-red on active/hover states
- 10 topic options: Family, Family Law, Friends, Co-workers, Startup, Work, Basketball, Baseball, Investors, US Embassy
- Generous vertical padding (7em top and bottom)
- No navigation, no images, no footer in the original

### Key differences from other Multiselect templates

| Aspect | Multiselect 05 (Optbox) | Multiselect 06 (Pickbox) | Multiselect 07 (Selectkit) |
|--------|------------------------|--------------------------|----------------------------|
| UI framework | Select2 | Custom `.selectMultiple` | Semantic UI |
| Options | 13 generic | 5 languages | 10 topics |
| Tag style | Grey pills with × | Orange × remove | Pinkish-red labels |
| Checkbox style | Orange squares | None (inline tags) | Circle-o (FontAwesome) |
| Brand color | `#fd5f00` | `#f16821` | `#e8647c` |
| Dropdown bg | White | White | Pinkish-red |
| Dropdown text | Black | Black | White |
| Widget width | 600px min | 240px | Full-width |

## Requirements

### Requirement: Page renders with correct layout and content

The page SHALL render a centered layout with a heading, a label, a multi-select topic picker, and a footer.

#### Scenario: Heading is displayed

- **WHEN** the page loads
- **THEN** the heading "Selectkit" is visible and centered

#### Scenario: Label is displayed

- **WHEN** the page loads
- **THEN** the label "Select Topics" is visible above the dropdown

#### Scenario: Widget shows placeholder when nothing is selected

- **WHEN** the page loads with no selections
- **THEN** the dropdown trigger shows "Select Topics"

#### Scenario: Footer renders Component Dock link

- **WHEN** the page loads
- **THEN** the footer contains a link to https://www.componentdock.com/

### Requirement: Dropdown opens and closes correctly

The dropdown SHALL open when clicked and close when clicking outside or pressing Escape.

#### Scenario: Click opens dropdown

- **WHEN** the user clicks the dropdown trigger
- **THEN** the option list becomes visible with a pinkish-red background

#### Scenario: Click outside closes dropdown

- **WHEN** the dropdown is open and the user clicks outside
- **THEN** the option list is hidden

#### Scenario: Escape closes dropdown

- **WHEN** the dropdown is open and the user presses Escape
- **THEN** the option list is hidden

### Requirement: Options can be selected and deselected

The dropdown SHALL support selecting and deselecting individual options with visible label tags.

#### Scenario: Click selects an option

- **WHEN** the dropdown is open and the user clicks "Family"
- **THEN** "Family" is marked as selected and a label pill appears in the trigger

#### Scenario: Click deselects a selected option

- **WHEN** "Family" is selected and the user clicks "Family" again
- **THEN** "Family" is deselected and the label pill is removed

#### Scenario: Selected option appears as a label pill

- **WHEN** "Family" is selected
- **THEN** a label pill with pinkish-red background and white text labeled "Family" appears in the trigger

#### Scenario: Label pill has delete interaction

- **WHEN** "Family" is selected
- **THEN** the label pill has a delete/close interaction

### Requirement: Multiple options can be selected simultaneously

The dropdown SHALL support selecting multiple options at once.

#### Scenario: Multiple selections are supported

- **WHEN** the user selects "Family" and "Work"
- **THEN** both options are marked as selected
- **AND** two label pills appear in the trigger

### Requirement: All 10 topic options are available

The dropdown SHALL display all 10 original options.

#### Scenario: Options are listed

- **WHEN** the user opens the dropdown
- **THEN** the following options are visible: Family, Family Law, Friends, Co-workers, Startup, Work, Basketball, Baseball, Investors, US Embassy

### Requirement: Design tokens are applied correctly

The template SHALL use the extracted design tokens for visual fidelity.

#### Scenario: Brand color is applied to active states

- **WHEN** the dropdown is active/open
- **THEN** the border and menu background use `#e8647c`

#### Scenario: Widget has correct border-radius

- **WHEN** the page renders
- **THEN** the dropdown has 4px border-radius

#### Scenario: Lato font is used

- **WHEN** the page renders
- **THEN** the body font is "Lato", Arial, sans-serif

### Requirement: Responsive behavior

The dropdown SHALL be responsive and usable on mobile.

#### Scenario: Desktop layout

- **WHEN** the viewport is wider than 992px
- **THEN** the dropdown container is centered with appropriate max-width

#### Scenario: Mobile layout

- **WHEN** the viewport is 992px or narrower
- **THEN** the dropdown fills available width up to a maximum

## Verification checklist

- [ ] Heading rendered with Lato font, 28px, black, centered
- [ ] Label "Select Topics" displayed above dropdown
- [ ] Dropdown has 4px border-radius and box-shadow
- [ ] Dropdown opens/closes on click and outside click
- [ ] Escape key closes dropdown
- [ ] 10 topic options displayed (Family, Family Law, Friends, Co-workers, Startup, Work, Basketball, Baseball, Investors, US Embassy)
- [ ] Options selectable/deselectable with circle checkboxes
- [ ] Selected options appear as label pills (pinkish-red background, white text)
- [ ] Multiple selections supported simultaneously
- [ ] Menu background is `#e8647c` when open
- [ ] Menu items have white text with lighter pink separator lines
- [ ] Hovered menu item shows white bg with pinkish-red text
- [ ] 7em vertical section padding
- [ ] Responsive: dropdown centers on desktop, fits on mobile
- [ ] Footer links to https://www.componentdock.com/
- [ ] No ColorLib references in app code
- [ ] 100% test coverage
- [ ] `npm run verify:app selectkit` passes
