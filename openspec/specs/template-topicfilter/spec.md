# Template: TopicFilter (Multiselect Dropdown)
<!-- prep-status: shipped-as=topicpick -->
> **SHIPPED-UNDER** — the ColorLib `multiselect-02` design this prep describes already
> ships as `apps/topicpick` (<https://topicpick.free.componentdock.com>).
> Do not scaffold `apps/topicfilter`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-topicpick/spec.md`.

## Purpose

Recreation of ColorLib "Multiselect 02" — a minimalist Bootstrap 4 multiselect
dropdown snippet. The original uses Semantic UI for a clean, centered dropdown
component.

- **Source slug:** `multiselect-02`
- **Preview URL:** https://preview.colorlib.com/theme/bootstrap/multiselect-02/
- **ColorLib page:** https://colorlib.com/wp/template/multiselect-02/
- **Stack:** React 19, Tailwind CSS 4, TypeScript (strict), Vite

## Design tokens

| Token          | Value                          | Notes                                       |
| -------------- | ------------------------------ | ------------------------------------------- |
| brand-color    | `#e8647c`                      | Coral/pink — labels, dropdown hover, accents |
| text-color     | `#000000`                      | Headings and body text                      |
| bg-color       | `#ffffff`                      | Section and page background                 |
| border-color   | `#e6e6e6`                      | Dropdown borders                            |
| font-family    | `"Lato", Arial, sans-serif`    | Loaded via Google Fonts (weights 300/400/700)|
| font-size-base | `16px`                         | Body text                                   |
| line-height    | `1.8`                          | Body line height                            |
| heading-size   | `28px`                         | Section heading                             |
| dropdown-shadow| `0px 3px 19px -15px rgba(0,0,0,0.41)` | Active dropdown menu shadow         |
| section-padding| `7em 0`                        | Top/bottom section padding                  |

## Requirements

### Feature: TopicFilter template behaviour

#### Scenario: Section renders with centered heading

- **GIVEN** the page loads
- **THEN** the section heading "Multiselect #02" is visible
- **AND** the heading is centered horizontally
- **AND** the heading text is 28px and black (#000)

#### Scenario: Multiselect dropdown renders with topic options

- **GIVEN** the page loads
- **THEN** a multiselect dropdown is visible
- **AND** the dropdown label reads "Select Topics"
- **AND** the dropdown contains options "All", "Topic 1" through "Topic 11"
- **AND** the dropdown supports multiple selection

#### Scenario: Dropdown opens on click

- **GIVEN** the multiselect dropdown is closed
- **WHEN** the user clicks the dropdown
- **THEN** the dropdown menu expands
- **AND** all topic options are visible
- **AND** the menu has a shadow (`0px 3px 19px -15px rgba(0,0,0,0.41)`)

#### Scenario: Option selection and tag rendering

- **GIVEN** the dropdown is open
- **WHEN** the user selects "Topic 1"
- **THEN** a coral/pink (#e8647c) label tag appears for "Topic 1"
- **AND** the tag has white text
- **AND** clicking the tag's remove icon deselects the option

#### Scenario: Multiple selections

- **GIVEN** "Topic 1" is selected
- **WHEN** the user selects "Topic 3" and "Topic 5"
- **THEN** three label tags are visible
- **AND** each tag is coral/pink with white text

#### Scenario: All option behavior

- **GIVEN** the dropdown is open
- **WHEN** the user selects "All"
- **THEN** all topic options are selected
- **AND** tags appear for every topic

#### Scenario: Responsive layout

- **GIVEN** the viewport is less than 768px wide
- **THEN** the dropdown takes full width
- **AND** the section heading remains centered

#### Scenario: Section spacing

- **GIVEN** the page loads
- **THEN** the section has 7em padding on top and bottom
- **AND** the heading and dropdown are centered in the container

## Verification checklist

- [ ] Section renders with centered heading at 28px
- [ ] Multiselect dropdown with label "Select Topics"
- [ ] Options: All, Topic 1–11 (11 topic options)
- [ ] Dropdown supports multiple selection
- [ ] Selected options render as coral/pink (#e8647c) label tags
- [ ] Tags have white text and remove icon
- [ ] Dropdown menu has correct shadow on open
- [ ] Hover state on dropdown items highlights in coral/pink
- [ ] Responsive: full-width dropdown on mobile
- [ ] Section padding matches original (7em top/bottom)
- [ ] Uses Lato font family (300/400/700 weights)
- [ ] No ColorLib references in app code
- [ ] Footer links to https://www.componentdock.com/
- [ ] 100% test coverage (lines, functions, branches, statements)
