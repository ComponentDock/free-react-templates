# Template: SidebarNook (Sidebar)

## Purpose

Recreation of [ColorLib Sidebar V08](https://colorlib.com/wp/template/colorlib-sidebar-v08/).
Preview: https://preview.colorlib.com/theme/sidebar/colorlib-sidebar-v08/
Stack: Vite · React 19 · Tailwind CSS 4 · TypeScript (strict).
Tests: Vitest + Testing Library with 100% coverage.

A left fixed sidebar with a profile section (avatar, name, role) and an
accordion navigation menu. The main content area shows a 2-column grid of
post entries (thumbnail + title + meta). The sidebar slides in/out via a
burger toggle with smooth CSS transitions.

## Design Tokens

Extracted from the original CSS (`css/style.css`):

- **Font family**: `"Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif`
- **Body background**: `#fcfcfc`
- **Body text color**: `#212529`
- **Link color**: `#007bff` (Bootstrap blue)
- **Link hover color**: `#0056b3`
- **Sidebar background**: `#fff`
- **Sidebar width**: `300px`
- **Sidebar shadow** (when open): `10px 0 30px 0 rgba(0,0,0,0.1)`
- **Profile avatar**: `80px` diameter, `border-radius: 50%`
- **Profile name font-size**: `18px`
- **Profile role font-size**: `14px`, color `#cfcfcf`
- **Nav menu text color**: `#8b8b8b`
- **Nav menu hover background**: `#fcfcfc`, text `#000`
- **Active indicator**: `4px` left border, color `#ff7315` (orange)
- **Post title font-size**: `18px`
- **Post meta font-size**: `15px`, color `#ccc`
- **Burger icon**: `28×32px`, `2px` bars, color `#000`
- **Section padding**: `7rem 0` (main content area)
- **Transition timing**: `1s cubic-bezier(0.23, 1, 0.32, 1)` for sidebar slide

## Section Structure

1. **Sidebar (`<aside>`)** — fixed left, 300px, slides in from left
   - Burger toggle (3-line hamburger, top-right of sidebar)
   - Profile section: round avatar (80px), name, role subtitle
   - Navigation menu:
     - Feed (accordion: News, Sport, Health)
     - Explore (accordion: Interior, Food, Travel)
     - Notifications
     - Direct
     - Stats
     - Sign out
2. **Main content (`<main>`)** — full width, shifts right 300px when sidebar open
   - Post grid (2 columns on md+, 1 column on mobile)
   - Each post entry: 80px thumbnail + title + "Posted: <date>" meta
   - 8 sample posts

## Gherkin Scenarios

### Sidebar

```gherkin
Feature: Sidebar
  Scenario: Sidebar is hidden by default
    Given the page loads
    Then the sidebar is off-screen (translateX -100%)

  Scenario: Burger toggle opens sidebar
    Given the page loads
    When the user clicks the burger icon
    Then the sidebar slides in (translateX 0)
    And the main content shifts right by 300px
    And a semi-transparent overlay appears behind

  Scenario: Burger toggle closes sidebar
    Given the sidebar is open
    When the user clicks the burger icon
    Then the sidebar slides out (translateX -100%)
    And the main content returns to full width

  Scenario: Overlay click closes sidebar
    Given the sidebar is open
    When the user clicks the dark overlay
    Then the sidebar closes
```

### Profile Section

```gherkin
Feature: Profile
  Scenario: Profile displays avatar, name, and role
    Given the sidebar is visible
    Then a round avatar image is displayed (80px)
    And the name "Craig David" is shown
    And the role "Web Designer" is shown below the name
```

### Navigation Menu

```gherkin
Feature: Navigation Menu
  Scenario: Feed accordion expands
    Given the sidebar is open
    When the user clicks "Feed"
    Then sub-items "News", "Sport", "Health" are revealed

  Scenario: Feed accordion collapses
    Given the Feed accordion is expanded
    When the user clicks "Feed"
    Then the sub-items are hidden

  Scenario: Explore accordion expands
    Given the sidebar is open
    When the user clicks "Explore"
    Then sub-items "Interior", "Food", "Travel" are revealed

  Scenario: Explore accordion collapses
    Given the Explore accordion is expanded
    When the user clicks "Explore"
    Then the sub-items are hidden

  Scenario: Active nav item has orange left border
    Given the sidebar is open
    When a nav item is active
    Then it shows a 4px left border in #ff7315

  Scenario: Nav items show hover state
    Given the sidebar is open
    When the user hovers over a nav item
    Then the background becomes #fcfcfc
    And the text color becomes #000
```

### Main Content

```gherkin
Feature: Main Content
  Scenario: Post grid displays entries
    Given the page loads
    Then 8 post entries are visible in a 2-column grid
    And each entry has a thumbnail (80px), title, and date

  Scenario: Responsive layout
    Given the viewport is below 768px
    Then the post grid switches to 1 column

  Scenario: Sidebar open shifts main content
    Given the sidebar is open
    Then the main content area is shifted 300px to the right
```

## Verification Checklist

- [ ] Sidebar slides in/out with smooth 1s cubic-bezier transition
- [ ] Burger icon animates to X when sidebar is open
- [ ] Profile shows round avatar, name, and role
- [ ] Feed and Explore accordions expand/collapse
- [ ] Accordion chevron rotates 90° when expanded
- [ ] Active nav item shows 4px orange (#ff7315) left border
- [ ] Nav items show hover state (bg #fcfcfc, text #000)
- [ ] Post grid is 2 columns on desktop, 1 column on mobile
- [ ] Each post entry has thumbnail, title, and meta date
- [ ] Semi-transparent overlay appears when sidebar is open
- [ ] Clicking overlay closes sidebar
- [ ] No ColorLib references in app code
- [ ] Footer links to Component Dock
- [ ] 100% test coverage
