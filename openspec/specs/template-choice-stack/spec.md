# Template: ChoiceStack (Form Component — Minimalist Multiselect Dropdown)
<!-- prep-status: shipped-as=topicpick -->
> **SHIPPED-UNDER** — the ColorLib `multiselect-02` design this prep describes already
> ships as `apps/topicpick` (<https://topicpick.free.componentdock.com>).
> Do not scaffold `apps/choice-stack`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-topicpick/spec.md`.

## Purpose

Recreation of ColorLib "Multiselect V02" — a minimalist Bootstrap 4 multiselect
dropdown snippet. A clean, stripped-down multiselect component focused on
simplicity and easy integration.

- **Source:** https://colorlib.com/wp/template/multiselect-02/
- **Preview:** https://preview.colorlib.com/theme/multiselect-02/ (unreachable —
  fallback to screenshot + page description)
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/multiselect-02.jpg
  (1200×972, AVIF format on CDN)
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript (strict)
- **New name:** `choice-stack` (apps/choice-stack, @free-react-templates/choice-stack)

## Design Tokens

Extracted from ColorLib page CSS variables (wpex theme):

| Token               | Value                | Notes                              |
| ------------------- | -------------------- | ---------------------------------- |
| Brand accent        | `#007bff`            | Primary blue — buttons, links, focus |
| Accent hover        | `#1e70bf`            | Darker blue for hover states       |
| Body text           | `#26282b`            | Dark charcoal                      |
| Body font size      | `16px`               | Base typography                    |
| Body line height    | `1.8em`              | Comfortable reading rhythm         |
| Font family         | System sans-serif stack | `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif` |
| Container width     | `1140px`             | Max content width                  |
| Button background   | `#32373c`            | Dark button default                |
| Section borders     | `#eeeeee`            | Light gray dividers                |
| Hover bg            | `rgba(0,0,0,0.03)`  | Subtle hover highlight             |

### Design notes from description + screenshot context

The original is described as "minimalist" — even cleaner than Multiselect V01:
- Ultra-clean white panel with minimal border treatment
- Simple dropdown arrow indicator
- Options list with subtle hover states
- Selected items displayed inline or as minimal tags
- Bootstrap 4 styling conventions (rounded corners, standard spacing)
- No shadows or decorative elements — pure function
- Blue accent for all interactive states

Compared to V01 (option-picker), this variant emphasizes:
- Fewer visual elements — no card shadow, thinner borders
- More compact spacing
- Bootstrap 4 default border-radius (0.25rem / 4px)
- Possibly no search/filter — just a pure dropdown

<!-- live-token-reverify:2026-10-22 -->

### Live reference restored (2026-10-22)

The prep-time note above records the preview 404. **Re-probed 2026-10-22**
the reference answers **HTTP 200**, so the live DOM and CSS are
authoritative again — CSS values are canonical over the screenshot
(`docs/replication.md`).

| artefact | URL | reading |
| --- | --- | --- |
| live page | `https://preview.colorlib.com/theme/bootstrap/multiselect-02/` | HTTP 200 · 1,687 B · title `Multiselect 02` |
| stylesheet | `https://preview.colorlib.com/theme/bootstrap/multiselect-02/css/style.css?v=89e5defb` | HTTP 200 · 58,712 B · sha256 `95fea9c6ebf6` |

**Live palette** (hex × occurrences in that sheet): `#ffffff`×25,
`#000000`×9, `#212529`×7, `#96c8da`×6, `#e6e6e6`×6, `#f8f9fa`×5,
`#e8647c`×4, `#cce2ff`×3, `#c0c1c2`×3, `#d0d0d0`×3.

**Token deltas** — the sheet, not the screenshot, decides:

- `#1a73e8` → **`#007bff`** — the sheet paints `a{color}` with it
- `#1464cc` → **`#1e70bf`** — the sheet paints `a:hover{color}` with it

**Low-chroma values the sheet actually uses** — `#212529`, `#e6e6e6`,
`#f8f9fa`, `#c0c1c2`; any sampled Tailwind grey above is an approximation of
these.

## Requirements

### Feature: Minimalist Multiselect Dropdown

Feature: ChoiceStack minimalist multiselect
As a developer embedding a form component
I want a minimalist multiselect dropdown
So that I can add multi-selection to forms with zero visual clutter

Background:
- **GIVEN** the ChoiceStack component is rendered
- **AND** the component has a list of options

#### Scenario: Collapsed state

- **WHEN** the page loads
- **THEN** a single-line input/trigger is visible
- **AND** the dropdown list is hidden
- **AND** a dropdown arrow indicator is shown

#### Scenario: Opening the dropdown

- **WHEN** I click the dropdown trigger
- **THEN** the options list appears below
- **AND** the trigger shows focus styling (blue border)

#### Scenario: Selecting one option

- **GIVEN** the dropdown is open
- **WHEN** I click an option
- **THEN** the option gets a checkmark indicator
- **AND** the selected count or label updates in the trigger

#### Scenario: Multi-selection

- **GIVEN** the dropdown is open
- **WHEN** I select "Option A"
- **AND** I select "Option B"
- **THEN** both options show checkmarks
- **AND** the trigger shows "2 selected" or similar count

#### Scenario: Deselecting by re-clicking

- **GIVEN** option "Option A" is selected
- **WHEN** I click "Option A" again
- **THEN** the checkmark is removed
- **AND** the selected count decreases

#### Scenario: Closing on outside click

- **GIVEN** the dropdown is open
- **WHEN** I click outside the component
- **THEN** the dropdown list closes
- **AND** selections are preserved

#### Scenario: Escape key closes dropdown

- **GIVEN** the dropdown is open
- **WHEN** I press Escape
- **THEN** the dropdown closes

#### Scenario: Disabled state

- **GIVEN** the component is disabled
- **WHEN** I click the trigger
- **THEN** nothing happens
- **AND** the component appears muted

#### Scenario: Responsive width

- **GIVEN** the viewport is 480px wide
- **THEN** the dropdown spans full container width

#### Scenario: Accessibility

- **THEN** the trigger has role="combobox"
- **AND** the list has role="listbox"
- **AND** options have role="option"
- **AND** aria-multiselectable="true" is set on the list

## Verification checklist

- [ ] Component renders collapsed with arrow indicator
- [ ] Dropdown opens/closes on click, outside click, and Escape
- [ ] Single and multi-selection with checkmark indicators
- [ ] Selected count/label updates in trigger
- [ ] Deselect via re-click works
- [ ] Disabled state prevents interaction
- [ ] Responsive: full-width on small screens
- [ ] ARIA: combobox, listbox, option roles, multiselectable
- [ ] Brand color #007bff for focus/active states
- [ ] Bootstrap 4 border-radius (4px)
- [ ] System sans-serif font stack
- [ ] 100% test coverage
- [ ] No ColorLib references in app code
- [ ] Footer links to https://www.componentdock.com/
- [ ] CNAME: choice-stack.free.componentdock.com
- [ ] homepage matches deploy URL
