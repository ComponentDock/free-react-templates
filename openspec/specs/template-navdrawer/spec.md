# Template: Navdrawer (Sidebar Navigation)

## Purpose

Recreation of **ColorLib Bootstrap Sidebar 09** (`bootstrap-sidebar-09`).
Preview: https://preview.colorlib.com/theme/bootstrap-sidebar-09/ (currently 404 — screenshot used as reference).
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/bootstrap-sidebar-170718.jpg

Stack: React 19 · Vite · Tailwind CSS 4 · TypeScript.
This is a **sidebar navigation** template: a fixed left sidebar with profile header and nav links, paired with a main content area.

## Design tokens

Extracted from screenshot analysis (preview unreachable):

| Token | Value | Notes |
|---|---|---|
| `sidebar-bg` | `#343a40` | Dark charcoal/slate — Bootstrap secondary |
| `sidebar-text` | `#ffffff` | White text on dark sidebar |
| `sidebar-divider` | `rgba(255,255,255,0.1)` | Subtle horizontal lines between nav items |
| `sidebar-hover-bg` | `rgba(255,255,255,0.08)` | Hover highlight on nav items |
| `accent-blue` | `#007bff` | Toggle button accent — Bootstrap primary |
| `content-bg` | `#ffffff` | White main content area |
| `content-heading` | `#212529` | Dark heading text |
| `content-text` | `#6c757d` | Muted body text |
| `font-family` | `system-ui, -apple-system, "Segoe UI", sans-serif` | Clean sans-serif (Bootstrap default) |
| `sidebar-width` | `250px` | Fixed left sidebar width |
| `profile-img-size` | `~80px` | Circular profile avatar |
| `sidebar-radius` | `0` | No rounded corners on sidebar |
| `button-radius` | `0.25rem` | Small radius on toggle button |

### Color palette

- Primary dark: `#343a40` (sidebar background)
- Primary accent: `#007bff` (toggle button, active states)
- White: `#ffffff` (sidebar text, content background)
- Muted: `#6c757d` (body text, secondary info)
- Heading: `#212529` (main content headings)

## Section structure

1. **Sidebar** (fixed left, full height)
   - Profile header: circular avatar + name + mountain background image
   - Navigation list: icon + label per item
   - Items: Home, Download, Gift Code, Top Review, Settings, Support, Sign Out
   - Subtle dividers between nav groups
2. **Main content area** (scrollable, fills remaining width)
   - Toggle button (blue chevron, top-left) to collapse/expand sidebar
   - Page heading: "Sidebar #09"
   - Body text: lorem ipsum paragraphs
3. **No footer** — this is a sidebar component demo, not a full page

## Gherkin scenarios

```gherkin
Feature: Navdrawer sidebar navigation

  Background:
    Given the user loads the Navdrawer template
    Then the sidebar is visible on the left side

  Scenario: Sidebar displays profile header
    Given the sidebar is visible
    Then a circular profile avatar is displayed at the top
    And a profile name "Catríona Henderson" is displayed below the avatar
    And the profile area has a mountain background image

  Scenario: Sidebar navigation items
    Given the sidebar is visible
    Then the following navigation items are displayed in order:
      | icon       | label       |
      | home       | Home        |
      | download   | Download    |
      | gift       | Gift Code   |
      | star       | Top Review  |
      | settings   | Settings    |
      | life-buoy  | Support     |
      | log-out    | Sign Out    |
    And each item shows an icon on the left and a text label on the right
    And items are separated by subtle divider lines

  Scenario: Sidebar hover interaction
    Given the sidebar is visible
    When the user hovers over a navigation item
    Then the item background changes to a subtle highlight
    And the text remains white

  Scenario: Toggle button visibility
    Given the sidebar is visible
    Then a blue toggle button is displayed in the top-left of the content area
    And the button shows a right-pointing chevron icon

  Scenario: Main content area
    Given the sidebar is visible
    Then the main content area fills the remaining width to the right of the sidebar
    And the content area has a white background
    And a heading "Sidebar #09" is displayed
    And body text paragraphs are displayed below the heading

  Scenario: Sidebar collapse toggle
    Given the sidebar is visible
    When the user clicks the toggle button
    Then the sidebar collapses or expands
    And the main content area adjusts its width accordingly

  Scenario: Responsive layout
    Given the user is on a mobile viewport
    Then the sidebar may be hidden by default
    And the toggle button is accessible to reveal the sidebar
```

## Verification checklist

- [ ] Sidebar renders at 250px width, fixed position, full viewport height
- [ ] Profile section shows circular avatar (80px) with name
- [ ] Mountain background image in profile area
- [ ] 7 navigation items with icons (lucide-react) and labels
- [ ] Dividers between nav item groups
- [ ] Hover state on nav items (subtle bg highlight)
- [ ] Blue toggle button in content area top-left
- [ ] Main content area fills remaining space
- [ ] Heading and body text styled correctly
- [ ] Sidebar collapses/expands on toggle click
- [ ] No ColorLib references in app code
- [ ] Footer links to Component Dock
- [ ] All tests pass at 100% coverage
