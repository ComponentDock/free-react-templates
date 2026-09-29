# Template: SideLane (Sidebar Layout)

## Purpose

Recreation of ColorLib "Bootstrap Sidebar 02" as a React 19 + Vite + Tailwind 4 + TypeScript template.

- **Source**: https://colorlib.com/wp/template/bootstrap-sidebar-02/
- **Preview**: https://preview.colorlib.com/theme/bootstrap-sidebar-02/ (404 at time of prep — screenshot used as sole reference)
- **Screenshot**: https://colorlib.com/wp/wp-content/uploads/sites/2/bootstrap-sidebar-170618.jpg
- **New name**: `sidelane`
- **App path**: `apps/sidelane`
- **Package**: `@free-react-templates/sidelane`
- **Deploy target**: `sidelane.free.componentdock.com`

## Design tokens

Extracted from screenshot analysis (preview unreachable):

| Token | Value | Notes |
|---|---|---|
| Brand color (primary) | `#7c4dff` (vibrant purple) | Sidebar background — appears as a purple gradient from lighter top to darker bottom |
| Brand color dark | `#5c2dbd` (deep purple) | Lower portion of sidebar gradient |
| Sidebar text | `#ffffff` | White text on purple background |
| Sidebar text secondary | `#d1b3e8` (light lavender) | Placeholder text, copyright |
| Main background | `#ffffff` | White content area |
| Heading color | `#333333` | Dark gray for headings |
| Body text | `#666666` | Medium gray for paragraph text |
| Divider | `rgba(255,255,255,0.2)` | Subtle white lines between nav items |
| Font family | `"Poppins", sans-serif` | Clean sans-serif, used throughout |
| Sidebar width | ~280px | Fixed left sidebar |
| Border radius (hamburger) | `50%` | Circular hamburger button |
| Input border | `#ddd` light gray | Newsletter email input |

## Design notes from screenshot

The template is a **sidebar navigation layout** with:

1. **Fixed left sidebar** (~280px wide) with a purple gradient background
2. **Logo/brand** ("Splash") in white bold text at top of sidebar
3. **Navigation links** vertically stacked: Home, About, Pages (with dropdown chevron), Portfolio, Contact — separated by thin semi-transparent white dividers
4. **Newsletter subscription** section near bottom of sidebar with email input
5. **Copyright footer** at very bottom of sidebar
6. **Hamburger toggle** — circular button at top-right corner of sidebar for responsive/mobile toggle
7. **Main content area** — white background, heading "Sidebar #02", lorem ipsum body text
8. Overall aesthetic: clean, minimal, sidebar-focused navigation pattern

## Gherkin requirements

### Feature: SideLane — Sidebar Navigation Layout

```gherkin
Feature: SideLane sidebar navigation template
  As a visitor
  I want to navigate the site via a fixed sidebar
  So that I can access all sections easily

  Scenario: Page loads with sidebar visible
    Given I open the SideLane template
    Then the sidebar should be visible on the left
    And the sidebar should display the brand name "SideLane"
    And the main content area should be visible on the right

  Scenario: Sidebar navigation links are present
    Given I open the SideLane template
    Then the sidebar should contain navigation links for "Home", "About", "Pages", "Portfolio", and "Contact"
    And each navigation link should be clickable

  Scenario: Sidebar has newsletter subscription
    Given I open the SideLane template
    Then the sidebar should display a "Subscribe for newsletter" section
    And there should be an email input field with placeholder "Enter Email Address"

  Scenario: Sidebar has copyright footer
    Given I open the SideLane template
    Then the sidebar should display a copyright notice at the bottom

  Scenario: Hamburger menu toggle exists
    Given I open the SideLane template
    Then there should be a hamburger menu toggle button
    And the toggle should be a circular icon

  Scenario: Responsive sidebar behavior
    Given I open the SideLane template on a mobile viewport
    Then the sidebar should be collapsible/hidden by default
    And clicking the hamburger toggle should show/hide the sidebar

  Scenario: Design tokens applied correctly
    Given I open the SideLane template
    Then the sidebar background should use the purple gradient
    And the sidebar text should be white
    And the main content area should have a white background
    And the font family should be Poppins or a suitable sans-serif

  Scenario: Navigation links have dividers
    Given I open the SideLane template
    Then navigation items should be separated by subtle divider lines

  Scenario: Footer links to Component Dock
    Given I open the SideLane template
    Then the footer should contain a link to "https://www.componentdock.com/" branded as "Component Dock"
```

## Component structure

| Component | Description |
|---|---|
| `Sidebar.tsx` | Fixed left sidebar with gradient background, nav links, newsletter, copyright |
| `SidebarToggle.tsx` | Circular hamburger button for mobile responsive toggle |
| `NavItem.tsx` | Individual navigation link with optional dropdown chevron |
| `NewsletterForm.tsx` | Email subscription input section |
| `MainContent.tsx` | Right-side content area with heading and body text |
| `App.tsx` | Root layout composing Sidebar + MainContent |

## Verification checklist

- [ ] Sidebar renders with purple gradient background
- [ ] Brand name displayed in white bold text
- [ ] All 5 navigation links present and clickable
- [ ] Dropdown chevron on "Pages" link
- [ ] Newsletter email input with correct placeholder
- [ ] Copyright text at sidebar bottom
- [ ] Hamburger toggle button present (circular)
- [ ] Responsive: sidebar collapses on mobile, toggle shows/hides
- [ ] Main content area has white background
- [ ] Font family is Poppins (or system sans-serif fallback)
- [ ] Footer links to Component Dock
- [ ] No ColorLib references in app code
- [ ] 100% test coverage
- [ ] `npm run verify:app sidelane` passes
