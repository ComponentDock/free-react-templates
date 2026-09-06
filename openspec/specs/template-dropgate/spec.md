# Template: DropGate (Dropdown Component Snippet)

## Purpose

DropGate is a single-page DROPDOWN MENU COMPONENT SNIPPET in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Dropdown V20" free template (source:
https://colorlib.com/wp/template/dropdown-20/), built under a
DIFFERENT name (**DropGate**), with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

The original is a Bootstrap-based dropdown component: a centered "Menu"
trigger link with a rotating chevron arrow that opens a white dropdown
panel containing two grouped sections ("Help & Feedback" and "About")
with icon-labeled navigation items and an orange notification badge.
The dropdown animates in with opacity + margin-top transitions. The page
is minimal — a single component demo centered on a light grey background.

**Preview URL:** https://preview.colorlib.com/theme/bootstrap/dropdown-20/
(reachable, HTTP 200). The `<title>` reads "Dropdown #8" but the ColorLib
listing page names it "Dropdown V20". The naive URL
`https://preview.colorlib.com/theme/dropdown-20/` returns 404 — the
actual path includes `bootstrap/` segment.

**Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/dropdown-20.jpg
(1200×972 JPEG — fetched for visual reference).

## Design tokens (extracted from live CSS + DOM, verified 2026-09-06)

| Token         | Value                                       | Use                                                                   |
| ------------- | ------------------------------------------- | --------------------------------------------------------------------- |
| Page bg       | `#efefef` (light grey)                      | Solid full-page background; no gradient/photo                         |
| Font family   | 'Roboto' 300/400/700                        | Body + headings (source loads Roboto, Poppins, Source Serif Pro; only Roboto is visibly used) |
| Font base     | 14px, weight 300                             | Body default                                                           |
| Text ink      | `#000`                                      | Menu trigger link, dropdown item text                                  |
| Text muted    | `#b3b3b3`                                   | Section headings ("Help & Feedback", "About"), `<p>` text              |
| Dropdown trigger | "Menu" text + `keyboard_arrow_down` icon | Centered, black text, arrow rotates -180deg on open                   |
| Dropdown menu | `#fff` bg, `border-radius: 0` (sharp corners) | Shadow `0 15px 30px 0 rgba(0,0,0,0.2)`, padding `20px 0`         |
| Menu items    | 14px, padding `8px 20px`, color `#000`     | Each item has a left icon (15px margin-right)                         |
| Item hover    | bg `#f8f9fa`                                | Subtle grey highlight on hover                                        |
| Badge         | bg `#fd7e14` (orange), radius 4px, white text | 11px font, `padding: 2px 6px`, absolute right 15px, vertically centered |
| Divider       | 1px solid `#e9ecef`                         | `<hr>` between sections                                               |
| Section heading | 14px, `#b3b3b3`, `padding-left: 20px`     | Uppercase-style group labels                                          |
| Trigger arrow | `icon-keyboard_arrow_down`                  | Inline-block, rotates -180deg when `.show` (transition 0.3s ease)    |
| Animation     | opacity 0→1, margin-top -10px→0, visibility hidden→visible | 300ms ease transition on open/close                         |
| Layout        | Bootstrap grid: `col-md-5`, centered        | `row justify-content-center text-center`                              |
| Content area  | 7rem top/bottom padding                     | `.content` class                                                       |

## Visual design (from screenshot, 2026-09-06)

The screenshot shows a clean, minimal component demo page:
- Light grey `#efefef` full-page background
- Centered page title "Dropdown #8" in dark text (medium weight)
- Below: a centered "Menu" trigger with a downward arrow
- When the dropdown opens (visible in the screenshot as expanded):
  - White rectangular panel with a pronounced drop shadow
  - Two sections separated by a thin grey divider:
    - "Help & Feedback" heading (muted grey) followed by three items:
      - Dashboard icon + "Getting started"
      - Mail icon + "Help center" + orange badge "3" on the right
      - People icon + "Contact us"
    - "About" heading (muted grey) followed by four items:
      - Comment icon + "Blog"
      - Lock icon + "Privacy"
      - Shield icon + "Security"
      - Playlist icon + "Terms of service"
  - All items have small material-style icons on the left
  - Sharp corners (no border-radius), clean white background
  - Orange badge is positioned absolutely at the right edge
- Aesthetic: clean, utilitarian, Bootstrap-influenced, no imagery or photos

## Gherkin requirements

### Feature: DropGate Dropdown Component

  Background:
    Given the app is loaded at the root URL
    And the document title is "DropGate — Dropdown Component Snippet"

  Scenario: Page renders with centered trigger
    Given the page is visible
    Then a heading "Dropdown #8" is displayed centered on the page
    And a "Menu" trigger link is visible below the heading
    And the trigger has a downward-pointing arrow icon

  Scenario: Dropdown opens on trigger click
    Given the dropdown is closed
    When the user clicks the "Menu" trigger
    Then the dropdown panel becomes visible
    And the trigger arrow rotates upward (180deg)
    And the dropdown panel has a white background and drop shadow

  Scenario: Dropdown closes on trigger click when open
    Given the dropdown is open
    When the user clicks the "Menu" trigger
    Then the dropdown panel becomes hidden
    And the trigger arrow rotates back to pointing down

  Scenario: Dropdown closes when clicking outside
    Given the dropdown is open
    When the user clicks outside the dropdown area
    Then the dropdown panel becomes hidden

  Scenario: Section headings are displayed
    Given the dropdown is open
    Then a "Help & Feedback" section heading is visible
    And an "About" section heading is visible
    And a divider line separates the two sections

  Scenario: Help & Feedback items are displayed
    Given the dropdown is open
    Then the following items are visible in order:
      | icon        | label            | badge |
      | dashboard   | Getting started  |       |
      | mail        | Help center      | 3     |
      | people      | Contact us       |       |

  Scenario: About items are displayed
    Given the dropdown is open
    Then the following items are visible in order:
      | icon        | label              |
      | comment     | Blog               |
      | lock        | Privacy            |
      | security    | Security           |
      | playlist    | Terms of service   |

  Scenario: Badge displays notification count
    Given the dropdown is open
    Then the "Help center" item shows an orange badge with text "3"
    And the badge has an orange background and white text

  Scenario: Items have hover highlight
    Given the dropdown is open
    When the user hovers over a dropdown item
    Then the item background changes to a light grey highlight

  Scenario: Animation on open/close
    Given the dropdown is closed
    When the user clicks the "Menu" trigger
    Then the dropdown fades in over 300ms
    And the dropdown slides up from -10px margin to 0

  Scenario: Responsive layout
    Given the viewport is narrow (below md breakpoint)
    Then the dropdown trigger and menu remain centered
    And all items remain readable

  Scenario: Footer with Component Dock link
    Given the page is visible
    Then a footer is displayed
    And the footer contains a link to https://www.componentdock.com/
    And the link text mentions "Component Dock"

## Verification checklist

- [ ] Page background is solid `#efefef` (light grey)
- [ ] Font is Roboto 300 (body), with Roboto 400/700 for headings
- [ ] "Dropdown #8" heading is centered
- [ ] "Menu" trigger with downward arrow is centered below heading
- [ ] Clicking trigger opens dropdown with 300ms fade animation
- [ ] Clicking trigger again closes dropdown
- [ ] Clicking outside closes dropdown
- [ ] Dropdown menu has white bg, sharp corners (radius 0), drop shadow
- [ ] "Help & Feedback" section with three items is visible
- [ ] "About" section with four items is visible
- [ ] Divider separates the two sections (1px solid `#e9ecef`)
- [ ] Each item has an icon on the left
- [ ] "Help center" has an orange badge "3" on the right
- [ ] Item hover shows `#f8f9fa` background
- [ ] Arrow rotates 180deg when dropdown is open
- [ ] Footer links to Component Dock
- [ ] No reference to ColorLib anywhere in the app code
- [ ] `public/CNAME` = `dropgate.free.componentdock.com`
- [ ] `"homepage"` = `https://dropgate.free.componentdock.com`
- [ ] `npm run verify:app -- dropgate` passes (typecheck + lint + 100% coverage + build)
