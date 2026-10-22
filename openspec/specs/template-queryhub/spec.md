# Template: QueryHub (Search Form)
<!-- prep-status: shipped-as=searchpad -->
> **SHIPPED-UNDER** — the ColorLib `colorlib-search-21` design this prep describes already
> ships as `apps/searchpad` (<https://searchpad.free.componentdock.com>).
> Do not scaffold `apps/queryhub`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-searchpad/spec.md`.

## Purpose

Recreation of ColorLib "Colorlib Search Form V21" — a minimalistic expandable
search bar with two toggle icons (round and square) that expand to reveal a
search input on click.

- **Source slug:** `colorlib-search-21`
- **Source URL:** https://colorlib.com/wp/template/colorlib-search-21/
- **Preview URL:** https://preview.colorlib.com/theme/colorlib-search-21/ (404 at prep time — falling back to screenshot)
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-search-form-21.jpg
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript (strict)

## Design tokens (from screenshot)

| Token                      | Value                                                |
| -------------------------- | ---------------------------------------------------- |
| Page background            | Light ice blue (`#daedf7` or `#d4eaf7`)             |
| Button background          | White (`#ffffff`)                                    |
| Round button border-radius | 50% (fully circular)                                 |
| Square button border-radius | 0px (sharp corners)                                 |
| Icon color                 | Light gray (`#bbbbbb` / `#cccccc`)                  |
| Icon size                  | ~24px                                                |
| Button size                | ~48–56px (square aspect ratio)                       |
| Button shadow              | None (flat, no shadow)                               |
| Button border              | None visible (clean flat style)                      |
| Input background (expanded)| White (`#ffffff`)                                    |
| Input border               | None or very subtle light gray                       |
| Input text color           | Dark (`#333333`)                                    |
| Font family                | System sans-serif (minimal text in this template)    |
| Heading                    | None (no text in static state)                       |

## Visual description (from screenshot)

A full-viewport section with a solid light ice-blue background. Two small
white search icons are centered horizontally on the page:

1. **Round toggle** — a white circle (~50px) with a gray magnifying glass
   icon centered inside. Positioned slightly above center.
2. **Square toggle** — a white square (~48px) with a gray magnifying glass
   icon centered inside. Positioned slightly below the round toggle, with
   small vertical gap.

Both are toggle buttons that expand into a search input field when clicked
(the expandable behavior is the template's key feature). The design is
extremely minimal — no text, no headings, no other UI elements. The
background is a single solid color with no gradient or pattern.

## Sections (order)

1. **Background** — full-viewport container with solid light ice-blue fill
2. **RoundSearchToggle** — circular white button with magnifying glass icon,
   expands to search input on click
3. **SquareSearchToggle** — square white button with magnifying glass icon,
   expands to search input on click
4. **Footer** — standard ComponentDock footer

## Requirements

### Feature: QueryHub template behaviour

#### Scenario: Page renders with light blue background

- **GIVEN** I visit the QueryHub page
- **THEN** the page background should be light ice-blue (#daedf7)
- **AND** the page should fill the full viewport

#### Scenario: Round search toggle is visible

- **GIVEN** I visit the QueryHub page
- **THEN** I should see a circular white button with a magnifying glass icon
- **AND** the button should be centered horizontally on the page
- **AND** the button should be positioned slightly above vertical center

#### Scenario: Square search toggle is visible

- **GIVEN** I visit the QueryHub page
- **THEN** I should see a square white button with a magnifying glass icon
- **AND** the button should be centered horizontally on the page
- **AND** the button should be positioned slightly below the round toggle

#### Scenario: Round toggle expands to search input

- **GIVEN** I visit the QueryHub page
- **WHEN** I click the round search toggle
- **THEN** a search input field should appear
- **AND** the search input should have a white background
- **AND** the search input should have a placeholder text
- **AND** the search input should be focused automatically

#### Scenario: Square toggle expands to search input

- **GIVEN** I visit the QueryHub page
- **WHEN** I click the square search toggle
- **THEN** a search input field should appear
- **AND** the search input should have a white background
- **AND** the search input should have a placeholder text
- **AND** the search input should be focused automatically

#### Scenario: Search input can be dismissed

- **GIVEN** I have expanded a search toggle
- **WHEN** I press the Escape key
- **THEN** the search input should collapse back to the toggle icon

#### Scenario: Search input accepts text

- **GIVEN** I have expanded a search toggle
- **WHEN** I type "hello" into the search input
- **THEN** the search input should display "hello"

#### Scenario: Responsive layout on mobile

- **GIVEN** I visit the QueryHub page on a mobile device
- **THEN** both search toggles should be visible and centered
- **AND** the toggles should be appropriately sized for touch targets

#### Scenario: Footer is present

- **GIVEN** I visit the QueryHub page
- **THEN** I should see a footer
- **AND** the footer should contain a link to https://www.componentdock.com/

## Verification checklist

- [ ] Spec follows OpenSpec format
- [ ] Design tokens extracted from screenshot (preview unreachable)
- [ ] All sections from original covered in Gherkin scenarios
- [ ] No ColorLib references in planned app code
- [ ] Footer links to https://www.componentdock.com/
- [ ] Name "queryhub" is unique (no collision with apps/ or openspec/specs/)
