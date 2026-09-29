# Template: Sideboard (Sidebar Navigation)

## Purpose

Sideboard is a sidebar navigation layout template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib "Bootstrap Sidebar
07" free template (source:
https://colorlib.com/wp/template/bootstrap-sidebar-07/), built under a
DIFFERENT name (**Sideboard**), with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

The original is a two-panel layout: a fixed left sidebar (royal blue
background, narrow icon-only width ~90px at desktop, full viewport height)
containing a logo and vertical navigation with icon prefixes; plus a main
content area (light gray background) with a top bar (hamburger toggle +
horizontal nav links), a page heading, and lorem ipsum body text.

**WHAT MAKES SIDEBOARD DISTINCT (signature behaviors):**

1. **Fixed full-height left sidebar on royal blue.** The sidebar occupies
   the full viewport height with a solid royal-blue background (~#4361ee).
   It displays only icons (no text labels) at the default desktop width,
   ~90px wide. This is NOT a floating panel — it is always visible.
2. **Logo at sidebar top.** A large white "M." bold wordmark sits at the
   top of the sidebar, centered. The recreation should use a similar
   brand mark (the "M." is a ColorLib artifact).
3. **Vertical icon-only navigation.** Five nav items stacked vertically:
   Home (house icon), About (user icon), Blog (file/document icon),
   Services (puzzle piece icon), Contacts (paper plane icon). White icons
   on the blue background with vertical spacing. Hover state should
   highlight or brighten.
4. **Hamburger toggle for mobile sidebar.** A blue circular button with
   a white hamburger icon sits at the top-left of the main content area.
   This toggles sidebar visibility on mobile/tablet viewports.
5. **Top navigation bar.** A horizontal nav bar at the top-right of the
   main content area with links: Home, About, Portfolio, Contact. Dark
   text on the light gray background. Visible on desktop; may collapse on
   mobile.
6. **Main content area with clean light-gray background.** The content
   area sits to the right of the sidebar, with a large bold heading
   ("Sidebar #07" is the ColorLib artifact) and two paragraphs of lorem
   ipsum body text. Clean, minimal, generous padding.

## Naming

The ColorLib source name "Bootstrap Sidebar 07" is FORBIDDEN as the app
name. **Sideboard** is the new, original name — single lowercase word,
kebab-case `sideboard`, no collision with `apps/`, `openspec/specs/`,
`docs/templates/`, or any TEMPLATES.md name (verified: zero hits for
`sideboard` in ls apps/ or ls openspec/specs/). Source slug:
`bootstrap-sidebar-07`. Preview URL:
https://preview.colorlib.com/theme/bootstrap-sidebar-07/ (returns 404 at
time of prep — 2026-09-30 — reference is the TEMPLATES.md screenshot).

## Design reference (replication findings)

- **Original:** ColorLib "Bootstrap Sidebar 07" (page title: "Sidebar
  #07"). Listed in TEMPLATES.md under **Bootstrap Sidebars** (section
  header line ~2798). Sibling templates in the family: Bootstrap Sidebar
  01–10 + Colorlib Sidebar V01–V10.
- **Live preview — UNREACHABLE (404, verified 2026-09-30):** The naive
  `https://preview.colorlib.com/theme/bootstrap-sidebar-07/` returns HTTP
  404 ("Not Found"). Fallback: TEMPLATES.md screenshot
  (`bootstrap-sidebar-170658.jpg`). No CSS tokens could be extracted from
  the live preview; all tokens are derived from the screenshot analysis.
- **Screenshot analysis (viewed 2026-09-30 via vision):**
  - Two-panel layout: fixed left sidebar + scrollable main content.
  - Sidebar: solid royal-blue background (~#4361ee), full viewport height,
    ~90px wide (icon-only mode at the captured viewport width).
  - Logo area: "M." in large white bold sans-serif text at sidebar top,
    centered horizontally.
  - Navigation: 5 items vertically stacked — Home (house icon), About
    (user icon), Blog (document/page icon), Services (puzzle piece icon),
    Contacts (paper plane icon). White icons, no text labels visible at
    desktop width, ~24px icon size, generous vertical spacing (~40px gaps).
  - Hamburger button: circular, blue background (#4361ee), white hamburger
    icon, positioned at top-left of main content area, ~40px diameter.
  - Top nav: horizontal links right-aligned — Home, About, Portfolio,
    Contact. Dark text (#333), ~14px font, spaced ~24px apart. Bottom
    border separating from content.
  - Content area background: light gray (~#f5f5f5).
  - Heading: "Sidebar #07" in dark bold text (~28px), left-aligned.
  - Body text: two paragraphs of lorem ipsum, dark gray text (~14px,
    line-height ~1.6).
  - Overall aesthetic: clean, minimal, professional. No shadows, no
    rounded corners, no gradients — flat design throughout.

## Design tokens

| Token | Value | Source |
|-------|-------|--------|
| Brand blue | #4361ee | Sidebar background, hamburger button |
| Content background | #f5f5f5 | Main content area |
| Text color (primary) | #333333 | Headings, nav links |
| Text color (secondary) | #555555 | Body text |
| White | #ffffff | Sidebar logo, nav icons, hamburger icon |
| Sidebar width | ~90px (icon-only) | Desktop layout |
| Sidebar height | 100vh | Full viewport |
| Font family | System sans-serif stack | Headings + body (e.g. system-ui, -apple-system, sans-serif) |
| Border color | #e0e0e0 | Divider below top nav |

## Gherkin requirements

```gherkin
Feature: Sideboard sidebar navigation layout

  Background:
    Given the Sideboard template is loaded

  Scenario: Sidebar visibility on desktop
    Then the sidebar is visible on the left side
    And the sidebar background is royal blue
    And the sidebar spans the full viewport height
    And the sidebar width is approximately 90px

  Scenario: Logo display in sidebar
    Then a logo wordmark is displayed at the top of the sidebar
    And the logo text color is white
    And the logo is bold and large

  Scenario: Vertical navigation in sidebar
    Then five navigation items are displayed vertically
    And each navigation item has an icon
    And the navigation text is white
    And the navigation items are evenly spaced

  Scenario: Navigation hover state
    When I hover over a navigation item
    Then the item highlights or brightens

  Scenario: Hamburger toggle button
    Then a circular hamburger button is visible
    And the button is at the top-left of the main content area
    And the button has a blue background

  Scenario: Hamburger toggle on mobile
    When the viewport is mobile width
    And I click the hamburger button
    Then the sidebar becomes visible
    And clicking again hides the sidebar

  Scenario: Top navigation bar
    Then horizontal navigation links are displayed at the top-right
    And the links are: Home, About, Portfolio, Contact
    And the link text is dark colored
    And a bottom border separates the nav from content

  Scenario: Main content area
    Then the main content area has a light gray background
    And a heading is displayed in bold dark text
    And body text paragraphs are displayed below the heading
    And the content has generous padding

  Scenario: Responsive layout
    When the viewport is tablet width
    Then the sidebar may collapse to hidden
    And the hamburger button toggles the sidebar

  Scenario: Footer
    Then a footer section links to https://www.componentdock.com/
    And the footer is branded "Component Dock"
```

## Verification checklist

- [ ] Sidebar renders as fixed, full-height, royal-blue panel on the left
- [ ] Logo displays at the top of the sidebar in white
- [ ] 5 navigation items render vertically with icons (Home, About, Blog, Services, Contacts)
- [ ] Navigation items have hover highlight
- [ ] Hamburger button is circular, blue, with white icon
- [ ] Hamburger toggles sidebar on mobile viewports
- [ ] Top nav bar renders horizontally with Home, About, Portfolio, Contact links
- [ ] Top nav has bottom border divider
- [ ] Main content area has light gray background
- [ ] Heading renders bold and dark
- [ ] Body text paragraphs render with appropriate spacing
- [ ] No ColorLib references in app code (spec/docs only)
- [ ] Footer links to Component Dock
- [ ] All tests pass with 100% coverage
- [ ] TypeScript strict mode — no errors
- [ ] Builds successfully with Vite
