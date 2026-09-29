# Template: SearchFind (Search Form Bar)

## Purpose

SearchFind is a single-page SEARCH FORM BAR component in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Search Form/Bar V01" free template (source:
https://colorlib.com/wp/template/search-form-bar-01/), built under a
DIFFERENT name (**SearchFind**), with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

**Preview URL:** https://preview.colorlib.com/theme/search-form-bar-01/
(reachable: HTTP 200, minimal page with title + centered search input)
**Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/search-form-bar-01.jpg

The original is a single-page search form bar: a page title "Search Form/Bar
#01" centered above a single pill-shaped search input with a magnifying-glass
icon. The design is minimal — one section, one component, clean and modern.

## Design reference (replication findings)

### Screenshot visual analysis (2026-09-29)

The screenshot shows an extremely minimal design on a light gray background:
- **Background:** Light gray (`#f5f5f5` or similar) full-page
- **Title:** "Search Form/Bar #01" — centered, large, dark gray/black text,
  sans-serif font, appears to be a regular-weight heading (~36px)
- **Search bar:** Centered below the title, pill-shaped (large border-radius),
  white background, subtle drop shadow, with a gray magnifying-glass icon on
  the left side and "Search..." placeholder text in light gray
- **Layout:** Everything is centered horizontally and positioned in the upper
  third of the viewport
- **No footer, no nav, no additional sections** — this is a single-component
  template

### Live preview DOM analysis

The preview URL (https://preview.colorlib.com/theme/search-form-bar-01/)
returned HTTP 200 with a minimal page. The page contains:
- An `<h1>` heading with the template title
- A `<form>` element with a text `<input>` and a submit button
- Minimal CSS for centering and styling

### Design tokens (derived from screenshot — preview CSS not extractable)

| Token | Value | Usage |
|-------|-------|-------|
| **Page background** | `#f5f5f5` (light gray) | Full page background |
| **Card/bar background** | `#ffffff` (white) | Search input background |
| **Title text** | `#333333` (dark gray) | Heading text color |
| **Placeholder text** | `#999999` (medium gray) | Input placeholder |
| **Icon color** | `#999999` (medium gray) | Magnifying glass icon |
| **Font family** | System sans-serif or similar clean font | Heading and body |
| **Border radius** | ~50px (pill-shaped) | Search input corners |
| **Box shadow** | `0 2px 8px rgba(0,0,0,0.1)` (subtle) | Search bar elevation |
| **Input padding** | ~12px 20px horizontal, ~10px vertical | Search input inner spacing |
| **Search bar width** | ~450px max, centered | Responsive width |

## Requirements

### Requirement: Full-page centered layout

The page SHALL display a light gray background covering the full viewport with content centered both horizontally and vertically (upper-third positioning).

#### Scenario: Page background renders

- **WHEN** the user navigates to SearchFind
- **THEN** the page body SHALL have a light gray background (`#f5f5f5` or equivalent)
- **AND** all content SHALL be centered horizontally

### Requirement: Page title

The page SHALL display a large heading text centered above the search bar.

#### Scenario: Title is visible

- **WHEN** the page loads
- **THEN** a heading element SHALL be visible with text "Search Form Bar"
- **AND** the heading SHALL be centered horizontally
- **AND** the heading SHALL use a dark text color (`#333` or similar)

### Requirement: Search input bar

The page SHALL display a single search input bar centered below the title.

#### Scenario: Search bar renders

- **WHEN** the page loads
- **THEN** a search input element SHALL be visible
- **AND** the input SHALL have a white background
- **AND** the input SHALL have pill-shaped rounded corners (border-radius ≥ 40px)
- **AND** the input SHALL have a subtle box-shadow

#### Scenario: Search icon is visible

- **WHEN** the page loads
- **THEN** a magnifying-glass icon SHALL be visible inside or adjacent to the search input
- **AND** the icon SHALL be positioned to the left of the input text area
- **AND** the icon SHALL use a gray color (`#999` or similar)

#### Scenario: Placeholder text

- **WHEN** the input is empty
- **THEN** the input SHALL display placeholder text "Search..."
- **AND** the placeholder SHALL use a light gray color

#### Scenario: Typing in search bar

- **WHEN** the user clicks into the search input
- **THEN** the input SHALL accept keyboard input
- **AND** the placeholder text SHALL disappear when typing begins

#### Scenario: Focus styling

- **WHEN** the user focuses the search input
- **THEN** the input SHALL show a focus indicator (border color change or outline)
- **AND** the input SHALL remain pill-shaped

### Requirement: Responsive behavior

The search bar SHALL adapt to smaller viewports.

#### Scenario: Mobile viewport

- **WHEN** the viewport width is ≤ 600px
- **THEN** the search bar SHALL scale down in width (max-width: 90% of viewport)
- **AND** the title SHALL remain readable and centered

### Requirement: Footer attribution

The page footer SHALL include a link to Component Dock.

#### Scenario: Footer link visible

- **WHEN** the user scrolls to the bottom of the page
- **THEN** a link to `https://www.componentdock.com/` SHALL be visible
- **AND** the link text SHALL reference "Component Dock"

## Verification checklist

- [ ] Page has light gray background covering full viewport
- [ ] Title heading is centered and readable
- [ ] Search input has pill-shaped rounded corners
- [ ] Magnifying-glass icon is visible to the left of the input
- [ ] Placeholder text shows "Search..."
- [ ] Input accepts keyboard focus and typing
- [ ] Focus state shows visual indicator
- [ ] Search bar is responsive (scales on mobile)
- [ ] Footer links to Component Dock
- [ ] No ColorLib references in any app source files
- [ ] Package name is `@free-react-templates/searchfind`
- [ ] `public/CNAME` contains `searchfind.free.componentdock.com`
- [ ] `homepage` in package.json is `https://searchfind.free.componentdock.com`
