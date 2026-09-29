# Template: Rightpane (Sidebar Navigation)

## Purpose

Recreation of **ColorLib Bootstrap Sidebar 10** (`bootstrap-sidebar-10`).
Preview: https://preview.colorlib.com/theme/bootstrap-sidebar-10/ (currently 404 — screenshot used as reference).
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/bootstrap-sidebar-170724.jpg

Stack: React 19 · Vite · Tailwind CSS 4 · TypeScript.
This is a **right-side sidebar navigation** template with a mountain landscape background, brand header, nav links, newsletter signup, and footer.

## Design tokens

Extracted from screenshot analysis (preview unreachable):

| Token | Value | Notes |
|---|---|---|
| `sidebar-bg` | gradient overlay on mountain image | Blue-teal gradient over landscape photo |
| `sidebar-gradient-start` | `rgba(0, 180, 216, 0.85)` | Light cyan-blue overlay |
| `sidebar-gradient-end` | `rgba(0, 119, 182, 0.9)` | Deeper blue overlay |
| `sidebar-text` | `#ffffff` | White text on gradient |
| `sidebar-width` | `~300px` | Fixed right sidebar width |
| `accent-blue` | `#00b4d8` | Primary cyan-blue accent |
| `content-bg` | `#ffffff` | White main content area |
| `content-heading` | `#212529` | Dark heading text |
| `content-text` | `#6c757d` | Muted body text |
| `font-family` | `system-ui, -apple-system, "Segoe UI", sans-serif` | Clean sans-serif |
| `brand-font-weight` | `700` | Bold brand name |
| `input-bg` | `#ffffff` | White newsletter input |
| `input-border` | `#dee2e6` | Light gray border |
| `button-radius` | `0.25rem` | Small radius on toggle button |
| `toggle-btn-bg` | `#007bff` | Bootstrap primary blue for toggle |

### Color palette

- Primary blue: `#00b4d8` (sidebar gradient, accents)
- Deep blue: `#0077b6` (sidebar gradient end)
- White: `#ffffff` (sidebar text, content background)
- Muted: `#6c757d` (body text)
- Heading: `#212529` (content headings)
- Toggle: `#007bff` (chevron button)

## Section structure

1. **Main content area** (left side, scrollable, white background)
   - Toggle button (blue chevron, top-right corner)
   - Page heading: "Sidebar #04"
   - Body text: lorem ipsum paragraphs
2. **Right sidebar** (fixed right, full height)
   - Brand header: "Kenitic" bold white text + "Blog Agency" subtitle
   - Navigation list: icon + label per item
   - Items: Home, About, Blog, Services, Contacts
   - Newsletter section: "Subscribe for newsletter" heading + email input
   - Footer: "Copyright ©2019 All rights reserved |" + attribution
3. **No page footer** — footer content is inside the sidebar

## Gherkin scenarios

```gherkin
Feature: Rightpane right-side sidebar navigation

  Background:
    Given the user loads the Rightpane template
    Then the right sidebar is visible on the right side
    And the main content area is on the left

  Scenario: Sidebar displays brand header
    Given the right sidebar is visible
    Then a brand name "Kenitic" is displayed in bold white text at the top
    And a subtitle "Blog Agency" is displayed below the brand name
    And the sidebar has a mountain landscape background with blue gradient overlay

  Scenario: Sidebar navigation items
    Given the right sidebar is visible
    Then the following navigation items are displayed in order:
      | icon    | label    |
      | home    | Home     |
      | user    | About    |
      | file    | Blog     |
      | gear    | Services |
      | send    | Contacts |
    And each item shows an icon on the left and a text label on the right
    And all items have white text

  Scenario: Sidebar newsletter section
    Given the right sidebar is visible
    And the navigation items are displayed
    Then a "Subscribe for newsletter" heading is displayed below the nav
    And an email input field with placeholder "Enter Email Address" is shown

  Scenario: Sidebar footer
    Given the right sidebar is visible
    Then a copyright line "Copyright ©2019 All rights reserved |" is displayed
    And an attribution line is displayed below

  Scenario: Toggle button visibility
    Given the right sidebar is visible
    Then a blue toggle button is displayed in the top-right of the content area
    And the button shows a right-pointing chevron icon

  Scenario: Main content area
    Given the right sidebar is visible
    Then the main content area fills the remaining width to the left of the sidebar
    And the content area has a white background
    And a heading "Sidebar #04" is displayed
    And body text paragraphs are displayed below the heading

  Scenario: Sidebar collapse toggle
    Given the right sidebar is visible
    When the user clicks the toggle button
    Then the sidebar collapses or expands
    And the main content area adjusts its width accordingly

  Scenario: Responsive layout
    Given the user is on a mobile viewport
    Then the sidebar may be hidden by default
    And the toggle button is accessible to reveal the sidebar
```

## Verification checklist

- [ ] Right sidebar renders at ~300px width, fixed position, full viewport height
- [ ] Mountain landscape background with blue gradient overlay
- [ ] Brand header: "Kenitic" bold + "Blog Agency" subtitle in white
- [ ] 5 navigation items with lucide-react icons and white labels
- [ ] Newsletter section with heading + email input
- [ ] Footer with copyright and attribution text
- [ ] Blue toggle button in content area top-right
- [ ] Main content area fills remaining space on the left
- [ ] Heading and body text styled correctly
- [ ] Sidebar collapses/expands on toggle click
- [ ] No ColorLib references in app code
- [ ] Footer links to Component Dock
- [ ] All tests pass at 100% coverage
