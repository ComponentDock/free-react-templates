# Template: DropMenu (UI Component — Dropdown)

## Purpose

Recreation of the ColorLib **Dropdown 12** snippet as a React component.

- **Source slug:** `dropdown-12`
- **ColorLib page:** https://colorlib.com/wp/template/dropdown-12/
- **Preview URL:** https://preview.colorlib.com/theme/dropdown-12/ (returns 404; HTML was accessible via CDN fallback)
- **Stack:** React 19 + Tailwind CSS 4 + TypeScript (Vite)
- **Category:** UI component snippet — this is a standalone dropdown menu widget, not a full-page template. The original is a small Bootstrap-based dropdown component (privacy settings) with a two-column icon+text layout inside the menu.

## Reference sources

| Source | Status | Notes |
|--------|--------|-------|
| Live preview HTML | ✅ Retrieved (CDN fallback) | Full HTML structure captured; CSS/JS assets returned 404 |
| Live preview CSS | ❌ Unreachable (404) | `css/style.css` and `css/bootstrap.min.css` both 404 |
| Screenshot | ⚠️ Not analyzed (browser daemon unavailable) | Screenshot URL: `https://colorlib.com/wp/wp-content/uploads/sites/2/dropdown-12.jpg` |

**Fallback note:** The preview URL itself returns HTTP 404, but the HTML body was served from the CDN cache. CSS files were not available. Design tokens below are inferred from the HTML structure, Bootstrap conventions, and the font declarations embedded in the HTML's inline `<style>` blocks.

## Design tokens

### Fonts (from inline @font-face declarations)

| Role | Family | Weights |
|------|--------|---------|
| Body / UI text | Roboto | 300, 400 |
| Headings / UI labels | Poppins | 300, 400, 500 |
| Secondary / serif accent | Source Serif Pro | 400, 600 |

**Implementation:** Use Google Fonts `<link>` for Roboto and Poppins. Source Serif Pro is loaded but not visibly used in the dropdown content — include it for fidelity but it may be decorative.

### Colors (inferred from Bootstrap defaults + HTML structure)

| Token | Value | Usage |
|-------|-------|-------|
| `--brand-primary` | `#007bff` (Bootstrap blue) | Dropdown trigger link color, hover states |
| `--bg-page` | `#ffffff` | Page background |
| `--bg-dropdown-menu` | `#ffffff` | Dropdown menu background |
| `--text-primary` | `#212529` (Bootstrap default) | Headings, body text |
| `--text-secondary` | `#6c757d` (Bootstrap muted) | Description paragraphs |
| `--border-color` | `#dee2e6` | Dropdown menu border |
| `--icon-bg` | Light gray circle or default | Icon wrapper background |

### Layout

- Single centered column (`col-md-5`) on the page
- Dropdown menu: two-column grid (`half-col` class, flex-based)
- Each column item: icon (left) + heading + description (right)
- Trigger: icon + text link, toggles Bootstrap dropdown

### Component structure (from HTML)

```
PageContainer
  └─ Heading ("Dropdown #2")
  └─ DropdownWidget
       ├─ TriggerLink (cog icon + "Privacy Settings")
       └─ DropdownMenu (two columns)
            ├─ Column 1
            │    ├─ MenuItem(icon=cog, title="Settings", desc="Lorem ipsum...")
            │    └─ MenuItem(icon=person, title="Account", desc="Lorem ipsum...")
            └─ Column 2
                 ├─ MenuItem(icon=cog, title="Settings", desc="Lorem ipsum...")
                 └─ MenuItem(icon=person, title="Notification", desc="Lorem ipsum...")
```

## Gherkin requirements

### Feature: DropMenu — Privacy Settings Dropdown Component

```gherkin
Feature: DropMenu dropdown component
  As a developer using the DropMenu template
  I want a reusable dropdown menu with icon+text items in a two-column layout
  So that I can embed privacy/settings dropdowns in my application

  Background:
    Given the DropMenu component is rendered on the page

  Scenario: Page heading is displayed
    Then I should see the heading "Dropdown #2" centered on the page

  Scenario: Dropdown trigger is visible
    Then I should see a trigger link labeled "Privacy Settings"
    And the trigger should display a settings/gear icon

  Scenario: Dropdown opens on click
    When I click the "Privacy Settings" trigger
    Then the dropdown menu should become visible
    And the menu should contain four menu items in two columns

  Scenario: Dropdown menu items have correct structure
    When I click the "Privacy Settings" trigger
    Then each menu item should display an icon, a title, and a description
    And the first column should show "Settings" and "Account" items
    And the second column should show "Settings" and "Notification" items

  Scenario: Dropdown closes on outside click
    Given the dropdown menu is open
    When I click outside the dropdown
    Then the dropdown menu should close

  Scenario: Dropdown closes on Escape key
    Given the dropdown menu is open
    When I press the Escape key
    Then the dropdown menu should close

  Scenario: Menu items are interactive
    When I click the "Privacy Settings" trigger
    And I click a menu item
    Then the item should respond to the click (link navigation)

  Scenario: Responsive layout
    Given the viewport is narrow (mobile)
    When I open the dropdown
    Then the menu items should stack vertically in a single column

  Scenario: Accessibility — keyboard navigation
    When I focus the "Privacy Settings" trigger
    And I press Enter or Space
    Then the dropdown menu should open
    And focus should move to the first menu item

  Scenario: Component Dock footer link
    Then I should see a footer link to "https://www.componentdock.com/"
```

## Verification checklist

- [ ] Component renders with heading "Dropdown #2" (or adapted copy)
- [ ] Trigger link shows gear icon + "Privacy Settings" text
- [ ] Clicking trigger toggles dropdown open/closed
- [ ] Dropdown menu displays 4 items in two-column layout
- [ ] Each item has icon + title + description paragraph
- [ ] Clicking outside closes the dropdown
- [ ] Escape key closes the dropdown
- [ ] Keyboard navigation works (Tab, Enter, Escape)
- [ ] Responsive: stacks to single column on mobile
- [ ] Footer links to Component Dock
- [ ] No ColorLib references in app code (provenance in spec only)
- [ ] Uses `cn()` from `packages/ui` for class composition
- [ ] 100% test coverage (Vitest + Testing Library)
- [ ] Uses placeholder images via `picsum.photos` if any images needed
