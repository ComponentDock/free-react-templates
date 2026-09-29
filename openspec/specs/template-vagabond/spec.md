# Template: Vagabond (Sidebar Layout)

## Purpose

Recreation of ColorLib "Bootstrap Sidebar V06" — a two-column sidebar layout
template designed for a travel agency site. Fixed left sidebar with gradient
background, icon-based navigation, newsletter signup, and a clean white
content area.

- **Source:** [ColorLib Bootstrap Sidebar V06](https://colorlib.com/wp/template/bootstrap-sidebar-06/)
- **Preview URL:** https://preview.colorlib.com/theme/bootstrap-sidebar-06/ (404 at prep time — design captured from screenshot)
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/bootstrap-sidebar-170649.jpg
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript

## Design tokens

Extracted from screenshot analysis (preview unreachable):

| Token              | Value                                      | Notes                                      |
| ------------------ | ------------------------------------------ | ------------------------------------------ |
| Brand color        | `#9b59b6` (purple) / `#e84393` (pink)     | Gradient overlay on sidebar background     |
| Sidebar background | Gradient overlay (purple → pink → magenta) | Applied over a landscape/mountain photo     |
| Text color (side)  | `#ffffff`                                  | All sidebar text is white                  |
| Text color (body)  | `#333333`                                  | Dark gray body text in content area        |
| Content background | `#ffffff`                                  | Clean white content area                   |
| Font family        | `"Poppins", sans-serif`                    | Sans-serif, rounded, modern                |
| Sidebar width      | ~300px                                     | Fixed left column                          |
| Nav item style     | Icon + label, semi-transparent hover       | White icons (Lucide), white text           |
| Newsletter input   | White background, rounded                  | "Enter Email Address" placeholder          |
| Border radius      | 0 (sidebar edges are straight)             | No rounding on sidebar or content cards    |

## Gherkin requirements

### Sidebar component

Scenario: Sidebar renders with brand identity
  Given the user loads the page
  Then a fixed left sidebar is visible
  And the sidebar displays "Travel" as the brand name in bold white text
  And the sidebar displays "Travel Agency" as a subtitle below the brand

Scenario: Sidebar navigation items
  Given the sidebar is visible
  Then the sidebar contains navigation links: Home, About, Destination, Blog, Services, Contacts
  And each nav item has an icon to its left
  And all nav items are white text on the gradient background

Scenario: Sidebar newsletter section
  Given the sidebar is visible
  Then a "Subscribe for newsletter" heading is displayed below the nav
  And an email input with placeholder "Enter Email Address" is shown
  And a submit button is present

Scenario: Sidebar footer
  Given the sidebar is visible
  Then a copyright notice is displayed at the bottom of the sidebar
  And a link to Component Dock is present in the footer

Scenario: Sidebar gradient background
  Given the sidebar is visible
  Then the sidebar has a purple-to-pink gradient overlay
  And a landscape/mountain image is visible behind the gradient

### Content area

Scenario: Content area layout
  Given the user loads the page
  Then a right content area fills the remaining viewport width
  And the content area has a white background

Scenario: Content heading
  Given the content area is visible
  Then a heading "Sidebar #06" (or equivalent) is displayed at the top
  And the heading uses a dark color and large font size

Scenario: Content body text
  Given the content area is visible
  Then body text paragraphs are displayed below the heading
  And the body text is dark gray on white background

### Responsive behavior

Scenario: Mobile sidebar toggle
  Given the viewport is narrower than 768px
  Then the sidebar collapses or becomes a toggleable overlay
  And a hamburger menu icon appears to toggle the sidebar

### Footer / attribution

Scenario: Component Dock link in sidebar footer
  Given the sidebar footer is visible
  Then a "Component Dock" link is present pointing to https://www.componentdock.com/
  And no reference to ColorLib appears in the app code or UI

## Verification checklist

- [ ] Sidebar renders with gradient background and landscape image overlay
- [ ] Brand name "Travel" and subtitle "Travel Agency" display in white
- [ ] All 6 nav items (Home, About, Destination, Blog, Services, Contacts) render with icons
- [ ] Newsletter signup section with email input renders
- [ ] Copyright and Component Dock link in sidebar footer
- [ ] Content area is white with heading and body paragraphs
- [ ] Responsive: sidebar collapses on mobile (<768px)
- [ ] No ColorLib references in app code (provenance only in spec)
- [ ] Footer links to https://www.componentdock.com/
- [ ] Tailwind `@theme` defines brand gradient tokens
- [ ] Tests: 100% coverage (lines, functions, branches, statements)
- [ ] Build passes: typecheck + lint + vitest + vite build
