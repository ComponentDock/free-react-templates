# Template: Marginote (Sidebar Blog)

## Purpose

Recreation of ColorLib's **Sidebar V10** as a React 19 + Vite + Tailwind 4 + TypeScript template.

- **Source slug:** `colorlib-sidebar-v10`
- **Source URL:** https://colorlib.com/wp/template/colorlib-sidebar-v10/
- **Preview URL:** https://preview.colorlib.com/theme/colorlib-sidebar-v10/ (unreachable — 404; design derived from screenshot)
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript · Vitest + Testing Library
- **Package:** `@free-react-templates/marginote`
- **Surge target:** `marginote.free.componentdock.com`

## Design tokens

Extracted from screenshot analysis (preview unavailable):

| Token | Value | Source |
|---|---|---|
| Sidebar background | `#00d4ff` (bright cyan) | Screenshot sidebar overlay |
| Sidebar overlay gradient | Cyan-to-blue over background image | Screenshot |
| Body background | `#ffffff` (white) | Screenshot main content area |
| Text on sidebar | `#ffffff` (white) | Screenshot nav/heading text |
| Text primary (content) | `#333333` (dark gray) | Screenshot card titles |
| Text secondary (dates) | `#999999` (medium gray) | Screenshot "Posted:" dates |
| Social icon circles | `rgba(255,255,255,0.25)` on white outline | Screenshot social buttons |
| Social icon color | `#ffffff` | Screenshot |
| Font family | `Poppins` (or similar geometric sans-serif) | Screenshot |
| Button radius (social) | `50%` (circular) | Screenshot |
| Card layout | 2-column grid, equal width | Screenshot main content |

## Layout structure

Two-panel layout:

1. **Fixed sidebar** (left, ~320px width, full height)
   - Brand name "Journal" — large bold heading
   - Subtitle paragraph
   - Navigation links: Latest, Projects, About
   - Social media icon row (Facebook, Twitter, Instagram, Pinterest, LinkedIn)
   - Background: person photo with bright cyan (`#00d4ff`) duotone/gradient overlay

2. **Main content area** (right, fills remaining width)
   - Toggle button (hamburger/X) at top-left corner for sidebar open/close
   - Blog post grid: 2-column layout of post cards
   - Each card: avatar thumbnail (left) + post title + date (right)
   - Cards repeat with sample content

## Gherkin requirements

### Sidebar

```gherkin
Feature: Sidebar

  Scenario: Sidebar displays brand name and tagline
    Given the page loads
    Then the sidebar shows the brand name "Journal" as a prominent heading
    And the sidebar displays a tagline paragraph below the heading

  Scenario: Sidebar shows navigation links
    Given the sidebar is visible
    Then navigation links "Latest", "Projects", and "About" are displayed
    And each link is styled as white text on the cyan background

  Scenario: Sidebar shows social media icons
    Given the sidebar is visible
    Then five circular social media icons are shown (Facebook, Twitter, Instagram, Pinterest, LinkedIn)
    And each icon has a semi-transparent white circular background

  Scenario: Sidebar has a background image with cyan overlay
    Given the sidebar is visible
    Then the sidebar background shows a person photo
    And a bright cyan (#00d4ff) gradient overlay covers the background image
```

### Sidebar toggle

```gherkin
Feature: Sidebar toggle

  Scenario: Toggle button is visible when sidebar is open
    Given the sidebar is open
    Then a toggle button (X icon) is visible at the top-left of the main content area

  Scenario: Clicking toggle closes the sidebar
    Given the sidebar is open
    When the user clicks the toggle button
    Then the sidebar slides out of view
    And the toggle button changes to a hamburger icon

  Scenario: Clicking toggle opens the sidebar
    Given the sidebar is closed
    When the user clicks the hamburger toggle button
    Then the sidebar slides into view
    And the toggle button changes to an X icon
```

### Blog post grid

```gherkin
Feature: Blog post grid

  Scenario: Posts are displayed in a 2-column grid
    Given the page loads with blog content
    Then posts are arranged in a 2-column grid layout

  Scenario: Each post card shows avatar, title, and date
    Given the blog grid is visible
    Then each post card displays an author avatar thumbnail
    And each card shows a post title
    And each card shows a posted date (e.g. "Posted: Dec 17, 2019")

  Scenario: Post cards have consistent spacing
    Given the blog grid is visible
    Then all post cards have equal horizontal and vertical spacing
```

### Responsive behavior

```gherkin
Feature: Responsive layout

  Scenario: Sidebar collapses on mobile
    Given the viewport width is less than 768px
    Then the sidebar is hidden by default
    And the toggle button is visible to open the sidebar

  Scenario: Grid adjusts on smaller screens
    Given the viewport width is less than 768px
    Then the blog post grid displays in a single column
```

## Verification checklist

- [ ] Sidebar renders with brand name, tagline, nav links, and social icons
- [ ] Sidebar background uses cyan (#00d4ff) overlay on a background image
- [ ] Toggle button switches between hamburger and X icons
- [ ] Sidebar slides in/out on toggle click
- [ ] Blog posts render in a 2-column grid
- [ ] Each post card shows avatar, title, and date
- [ ] Responsive: single-column on mobile, sidebar hidden by default
- [ ] Footer links to https://www.componentdock.com/
- [ ] No ColorLib references in app code
- [ ] 100% test coverage (lines, functions, branches, statements)
- [ ] `npm run verify:app marginote` passes
