# Template: Navdeck (Sidebar Profile Navigation)

## Purpose

Recreation of ColorLib **Sidebar V01** — a left profile sidebar with social media navigation and a content feed grid.

- **Source slug:** `colorlib-sidebar-v01`
- **Preview URL:** `https://preview.colorlib.com/theme/colorlib-sidebar-v01/` (returns 404 at time of prep — design captured from screenshot)
- **Template page:** `https://colorlib.com/wp/template/colorlib-sidebar-v01/`
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript
- **Description:** A left profile sidebar with an avatar, name and location, post/follower/following counts, and an icon menu for Feed, Explore, Notifications, Direct messages, Stats, and Sign out. The main content area is a 2-column grid of social media post cards.

## Design Tokens

| Token | Value | Source |
|-------|-------|--------|
| Sidebar background | `#ffffff` (white) | Screenshot — left panel is solid white |
| Main content background | `#f5f5f5` (light gray) | Screenshot — right panel is light gray |
| Sidebar text | `#333333` (dark gray) | Screenshot — name, nav items are dark |
| Secondary text | `#999999` (medium gray) | Screenshot — location, post dates, stat labels |
| Active nav accent | `#e8a038` (amber/orange) | Screenshot — left border on active "Feed" item |
| Avatar border | `#e0e0e0` (light gray) | Screenshot — thin circular border around avatar |
| Stat numbers | `#333333` (dark, bold) | Screenshot — "892", "22.5k", "150" |
| Post card background | `#ffffff` (white) | Screenshot — cards appear white against gray bg |
| Font family | System sans-serif (system-ui, -apple-system, sans-serif) | Screenshot — clean sans-serif throughout |
| Font size (name) | ~1.125rem / 18px | Screenshot — slightly larger than body |
| Font size (location) | ~0.75rem / 12px | Screenshot — small gray text |
| Avatar size | ~80px diameter | Screenshot — circular profile image |
| Sidebar width | ~280px | Screenshot — fixed left column |
| Nav icon size | ~16px | Screenshot — small lucide-style icons |
| Active nav indicator | 3px left border, amber | Screenshot — vertical bar on active item |
| Border radius (avatar) | 50% (circle) | Screenshot — fully round |
| Section divider | 1px `#e0e0e0` horizontal line | Screenshot — separates stats from nav |

## Layout Structure

Two-column layout:
1. **Sidebar (left, fixed ~280px):**
   - Profile section: circular avatar, name (bold), location (gray, small)
   - Stats row: three columns (Posts / Followers / Following) with bold numbers and gray labels
   - Horizontal divider (1px line)
   - Navigation menu: vertical list of icon+label items (Feed [active], Explore, Notifications, Direct, Stats, Sign out)
   - Active item has amber left border accent

2. **Main content (right, fluid):**
   - Close/hamburger button (top-left of main area)
   - 2-column masonry-style grid of post cards
   - Each card: title text (bold, dark), thumbnail image, date (gray, small)
   - Cards have consistent vertical spacing

## Gherkin Requirements

### Sidebar Profile Section

```gherkin
Feature: Sidebar Profile
  As a visitor, I see a profile sidebar so I can navigate the social feed.

  Scenario: Sidebar displays avatar
    Given the page loads
    Then a circular avatar image is visible in the sidebar
    And the avatar is approximately 80px in diameter

  Scenario: Sidebar displays user name
    Given the page loads
    Then the user name is displayed below the avatar in bold text

  Scenario: Sidebar displays user location
    Given the page loads
    Then the user location is displayed below the name in small gray text

  Scenario: Sidebar displays stats
    Given the page loads
    Then three stats are shown: Posts, Followers, Following
    And each stat has a bold number and a gray label below it
```

### Sidebar Navigation

```gherkin
Feature: Sidebar Navigation
  As a visitor, I can navigate between sections using the sidebar menu.

  Scenario: Navigation items are displayed
    Given the page loads
    Then the sidebar shows navigation items: Feed, Explore, Notifications, Direct, Stats, Sign out
    And each item has an icon to the left of its label

  Scenario: Active item has accent indicator
    Given the Feed item is the active section
    Then the Feed item has a 3px amber left border
    And the Feed item text is bold/dark

  Scenario: Clicking a nav item changes active state
    Given I click the "Explore" navigation item
    Then the Explore item becomes active with the amber left border
    And the Feed item loses its active indicator
```

### Main Content Feed

```gherkin
Feature: Content Feed Grid
  As a visitor, I see a grid of posts in the main content area.

  Scenario: Posts display in 2-column grid
    Given the page loads
    Then posts are arranged in a 2-column grid layout
    And each post card has a title, thumbnail, and date

  Scenario: Post cards have consistent styling
    Given the page loads
    Then each post card has a white background
    And each post card shows a bold title
    And each post card shows a date in gray text
    And each post card shows a thumbnail image

  Scenario: Close button is visible
    Given the page loads
    Then a close/X button is visible in the top-left of the main content area
```

### Responsive Behavior

```gherkin
Feature: Responsive Layout
  As a mobile visitor, the layout adapts to smaller screens.

  Scenario: Sidebar collapses on mobile
    Given the viewport is less than 768px wide
    Then the sidebar is hidden or collapsed
    And a hamburger menu button is visible

  Scenario: Sidebar opens on hamburger click
    Given the sidebar is collapsed
    And I click the hamburger menu button
    Then the sidebar slides in from the left
    And the main content is partially visible or overlaid
```

## Verification Checklist

- [ ] Sidebar width ~280px, white background
- [ ] Circular avatar with gray border
- [ ] User name bold, location small gray
- [ ] Three stats (Posts/Followers/Following) with numbers and labels
- [ ] Divider line between stats and nav
- [ ] Six nav items with icons (Feed, Explore, Notifications, Direct, Stats, Sign out)
- [ ] Active nav item has 3px amber/orange left border
- [ ] Main content area has light gray background
- [ ] 2-column post card grid
- [ ] Each card: title, thumbnail, date
- [ ] Close/X button in main content area
- [ ] Responsive: sidebar collapses on mobile
- [ ] No ColorLib references in app code
- [ ] Footer links to Component Dock
- [ ] Placeholder images use picsum.photos
- [ ] All tests pass, 100% coverage
