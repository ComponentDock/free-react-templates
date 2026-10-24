# Template: TagCache (Multiselect Form Component)
<!-- prep-status: shipped-as=optselect -->
> **SHIPPED-UNDER** — the ColorLib `multiselect-06` design this prep describes already
> ships as `apps/optselect` (<https://optselect.free.componentdock.com>).
> Do not scaffold `apps/tagcache`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-optselect/spec.md`.

## Purpose

Recreation of ColorLib's **Multiselect 06** template — a modern, tag-style multi-select dropdown where selected items appear as removable chips inside the trigger area.

- **Source**: https://colorlib.com/wp/template/multiselect-06/
- **Preview**: https://preview.colorlib.com/theme/bootstrap/multiselect-06/
- **Screenshot**: https://colorlib.com/wp/wp-content/uploads/sites/2/multiselect-06.jpg
- **Stack**: Vite + React 19 + Tailwind CSS 4 + TypeScript (strict)

## Design Tokens

Extracted from the live preview CSS (`css/style.css`) at `https://preview.colorlib.com/theme/bootstrap/multiselect-06/`:

| Token                  | Value                                             | Usage                                     |
| ---------------------- | ------------------------------------------------- | ----------------------------------------- |
| Font family            | `"Lato", Arial, sans-serif`                       | Body and headings; weights 300, 400, 700  |
| Brand color            | `#f16821`                                         | Links, close icon, hover states, accent   |
| Page background        | `#fafafa`                                         | Page/section background (very light gray) |
| Text color             | `gray`                                            | Body text, labels                         |
| Heading color          | `#000`                                            | h1–h5, strong text                        |
| Border radius          | `8px`                                             | Dropdown container, dropdown list items   |
| Shadow (closed)        | `0 4px 16px 0 rgba(22, 42, 90, 0.12)`             | Dropdown trigger card                     |
| Shadow (hover)         | `0 4px 24px -1px rgba(22, 42, 90, 0.16)`          | Dropdown trigger on hover                 |
| Shadow (open)          | `0 4px 20px -1px rgba(22, 42, 90, 0.12)`          | Dropdown trigger when open                |
| Shadow (list)          | `drop-shadow(0 12px 20px rgba(22, 42, 90, 0.08))` | Dropdown list panel                       |
| Shadow (list open)     | `drop-shadow(0 16px 24px rgba(22, 42, 90, 0.16))` | Dropdown list when open                   |
| Section padding        | `7em 0`                                           | Main section vertical spacing             |
| Heading size           | `28px`                                            | `.heading-section` title                  |
| Trigger width          | `240px`                                           | Dropdown trigger container                |
| Trigger min-height     | `44px`                                            | Minimum height of trigger area            |
| Trigger background     | `#fff`                                            | White card for trigger                    |
| Trigger font size      | `14px`                                            | Tag text inside trigger                   |
| Placeholder color      | `#99A3BA`                                         | Placeholder text and arrow color          |
| Tag background         | `rgba(228, 236, 250, 0.7)`                        | Light blue tint behind selected tags      |
| Tag text color         | `#000`                                            | Tag label text                            |
| Tag close icon color   | `#f16821`                                         | X icon on removable tags                  |
| List item text         | `#000`                                            | Dropdown option text                      |
| List item background   | `#fff`                                            | Dropdown option background                |
| List item padding      | `12px 16px`                                       | Dropdown option spacing                   |
| List item hover bg     | `#f16821`                                         | Option hover background (brand orange)    |
| List item hover text   | `#fff`                                            | Option hover text (white)                 |
| Dropdown border-radius | `8px`                                             | Top/bottom corners of list                |
| Arrow color            | `#99A3BA`                                         | Expand/collapse indicator                 |

## Requirements

### Background

#### Scenario: Background

- **GIVEN** the page loads at the root URL
- **THEN** the page background is `#fafafa`
- **AND** the font family is "Lato" (with Arial fallback)

### Section: Main

#### Scenario: Page heading renders

- **GIVEN** the page is loaded
- **THEN** a centered heading "Multiselect #06" (replaced with template name) is visible
- **AND** the heading font size is approximately 28px
- **AND** the heading color is black (#000)

#### Scenario: Dropdown trigger renders with placeholder

- **GIVEN** the page is loaded
- **THEN** a dropdown trigger container is visible
- **AND** the container has a white background (#fff)
- **AND** the container has a border-radius of 8px
- **AND** the container has a box-shadow of `0 4px 16px 0 rgba(22, 42, 90, 0.12)`
- **AND** the container min-height is 44px
- **AND** the container width is 240px
- **AND** the placeholder text "Add Language" is visible in color #99A3BA
- **AND** an arrow indicator (chevron) is visible on the right side

#### Scenario: Dropdown opens on click

- **GIVEN** the dropdown trigger is displayed
- **WHEN** the user clicks the dropdown trigger
- **THEN** a dropdown list panel appears below the trigger
- **AND** the dropdown list has a border-radius of 8px
- **AND** the dropdown list has a drop-shadow filter
- **AND** the dropdown list displays a list of language options
- **AND** the trigger shadow changes to `0 4px 20px -1px rgba(22, 42, 90, 0.12)`
- **AND** the arrow indicator rotates to point upward

#### Scenario: Dropdown shows language options

- **GIVEN** the dropdown is open
- **THEN** the following options are visible: Javascript, jQuery, HTML, Wordpress, PHP
- **AND** each option has padding of 12px 16px
- **AND** each option has a white background

#### Scenario: Selecting an option adds a tag

- **GIVEN** the dropdown is open
- **WHEN** the user clicks the "Javascript" option
- **THEN** a tag/chip appears inside the trigger area
- **AND** the tag displays the text "Javascript"
- **AND** the tag has a light blue background `rgba(228, 236, 250, 0.7)`
- **AND** the tag has a close (X) icon in color #f16821
- **AND** the placeholder text "Add Language" is hidden
- **AND** the "Javascript" option disappears from the dropdown list

#### Scenario: Multiple selections create multiple tags

- **GIVEN** the dropdown is open
- **WHEN** the user selects "Javascript"
- **AND** the user selects "jQuery"
- **THEN** two tags appear inside the trigger area
- **AND** both tags are displayed inline

#### Scenario: Removing a tag deselects the option

- **GIVEN** "Javascript" is selected and displayed as a tag
- **WHEN** the user clicks the X icon on the "Javascript" tag
- **THEN** the "Javascript" tag disappears from the trigger area
- **AND** the "Javascript" option reappears in the dropdown list
- **AND** the placeholder text "Add Language" reappears when no tags remain

#### Scenario: Hovering a dropdown option highlights it

- **GIVEN** the dropdown is open
- **WHEN** the user hovers over the "PHP" option
- **THEN** the option background changes to #f16821 (brand orange)
- **AND** the option text color changes to #fff (white)

#### Scenario: Dropdown closes on outside click

- **GIVEN** the dropdown is open
- **WHEN** the user clicks outside the dropdown area
- **THEN** the dropdown panel closes with a fade-out animation

#### Scenario: Dropdown closes on second trigger click

- **GIVEN** the dropdown is open
- **WHEN** the user clicks the dropdown trigger again
- **THEN** the dropdown panel closes

#### Scenario: Dropdown list animates on open

- **GIVEN** the dropdown is closed
- **WHEN** the user clicks the dropdown trigger
- **THEN** the dropdown list transitions from `translate(0, 20px) scale(0.8) opacity: 0` to `translate(0, 12px) scale(1) opacity: 1`
- **AND** the transition uses a cubic-bezier easing curve

### Accessibility

#### Scenario: Dropdown trigger is keyboard accessible

- **GIVEN** the page is loaded
- **WHEN** the user presses Tab to focus the dropdown trigger
- **THEN** the trigger receives visible focus indication
- **AND** pressing Enter or Space opens the dropdown

#### Scenario: Options are navigable by keyboard

- **GIVEN** the dropdown is open
- **WHEN** the user presses ArrowDown
- **THEN** focus moves to the next option
- **AND** pressing ArrowUp moves focus to the previous option

#### Scenario: Selection works with keyboard

- **GIVEN** the dropdown is open and an option is focused
- **WHEN** the user presses Space or Enter
- **THEN** the focused option is selected and a tag appears

#### Scenario: Tags are removable by keyboard

- **GIVEN** a tag is displayed in the trigger
- **WHEN** the user focuses the tag's close button and presses Enter
- **THEN** the tag is removed

## Verification checklist

- [ ] Page renders with correct background (#fafafa) and Lato font
- [ ] Centered heading renders at ~28px, black color
- [ ] Dropdown trigger has white bg, 8px radius, shadow, 44px min-height, 240px width
- [ ] Placeholder text "Add Language" renders in #99A3BA
- [ ] Arrow indicator visible on right side of trigger
- [ ] Dropdown opens/closes on click with animation
- [ ] Five language options display (Javascript, jQuery, HTML, Wordpress, PHP)
- [ ] Selecting an option creates a tag chip with light blue background
- [ ] Tags display with close (X) icon in orange (#f16821)
- [ ] Placeholder hides when tags are present
- [ ] Removing a tag via X icon deselects the option
- [ ] Hovering dropdown options shows orange (#f16821) background with white text
- [ ] Dropdown list animates (scale + translate + opacity)
- [ ] Dropdown closes on outside click
- [ ] Keyboard navigation works (Tab, Arrow keys, Space/Enter)
- [ ] No ColorLib references in app code
- [ ] Footer links to Component Dock (https://www.componentdock.com/)
