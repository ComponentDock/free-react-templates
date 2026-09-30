# Template: Marginote (Sidebar Blog)

## Purpose

Recreation of ColorLib's **Sidebar V10** as a React 19 + Vite + Tailwind 4 + TypeScript template.

- **Source slug:** `colorlib-sidebar-v10`
- **Source URL:** https://colorlib.com/wp/template/colorlib-sidebar-v10/
- **Preview URL:** https://preview.colorlib.com/theme/colorlib-sidebar-v10/ (unreachable — 404; design derived from screenshot)
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript · Vitest + Testing Library
- **Package:** `@free-react-templates/marginote`
- **Surge target:** `marginote.free.componentdock.com`

## Requirements

### Requirement: Sidebar displays brand name and tagline

The sidebar SHALL display the brand name "Journal" as a prominent heading and a tagline paragraph below it.

#### Scenario: Sidebar shows brand heading

- **GIVEN** the page loads
- **WHEN** the sidebar is rendered
- **THEN** the sidebar shows "Journal" as a heading element

#### Scenario: Sidebar shows tagline

- **GIVEN** the page loads
- **WHEN** the sidebar is rendered
- **THEN** a tagline paragraph is displayed below the heading

### Requirement: Sidebar shows navigation links

The sidebar SHALL display navigation links for Latest, Projects, and About.

#### Scenario: Navigation links are visible

- **GIVEN** the sidebar is open
- **WHEN** the page renders
- **THEN** links labeled "Latest", "Projects", and "About" are displayed

### Requirement: Sidebar shows social media icons

The sidebar SHALL display five circular social media icons.

#### Scenario: Social icons are rendered

- **GIVEN** the sidebar is open
- **WHEN** the page renders
- **THEN** circular icon buttons for Facebook, Twitter, Instagram, Dribbble, and LinkedIn are shown

### Requirement: Sidebar has cyan overlay background

The sidebar SHALL have a background image with a bright cyan (#00d4ff) gradient overlay.

#### Scenario: Background image with overlay

- **GIVEN** the sidebar is rendered
- **WHEN** the page loads
- **THEN** a background image is displayed with a cyan gradient overlay

### Requirement: Toggle button controls sidebar visibility

A toggle button SHALL open and close the sidebar with smooth animation.

#### Scenario: Toggle closes open sidebar

- **GIVEN** the sidebar is open
- **WHEN** the user clicks the toggle button
- **THEN** the sidebar slides out of view

#### Scenario: Toggle opens closed sidebar

- **GIVEN** the sidebar is closed
- **WHEN** the user clicks the toggle button
- **THEN** the sidebar slides into view

### Requirement: Blog posts display in grid

Blog posts SHALL be displayed in a 2-column grid with avatar, title, and date.

#### Scenario: Posts render in grid layout

- **GIVEN** the page loads with blog content
- **WHEN** the blog grid renders
- **THEN** posts are arranged in a 2-column grid layout

#### Scenario: Each post shows avatar, title, and date

- **GIVEN** a blog post card is visible
- **WHEN** the card renders
- **THEN** it displays an author avatar, post title, and posted date

### Requirement: Responsive layout

The layout SHALL be responsive with sidebar hidden on mobile and single-column grid.

#### Scenario: Sidebar collapses on mobile

- **GIVEN** the viewport width is less than 768px
- **WHEN** the page loads
- **THEN** the sidebar is hidden by default

#### Scenario: Grid adjusts on mobile

- **GIVEN** the viewport width is less than 768px
- **WHEN** the blog grid renders
- **THEN** posts display in a single column

### Requirement: Footer links to Component Dock

The footer SHALL link to https://www.componentdock.com/ with branded text.

#### Scenario: Footer shows Component Dock link

- **GIVEN** the page renders
- **WHEN** the footer is visible
- **THEN** a link to "https://www.componentdock.com/" is displayed with "Component Dock" text

### Requirement: No ColorLib references in app code

The app source code SHALL NOT contain any references to ColorLib.

#### Scenario: No ColorLib strings in source

- **GIVEN** the app is built
- **WHEN** source files are inspected
- **THEN** no "colorlib" strings appear in any app file

### Requirement: 100% test coverage

The app SHALL maintain 100% test coverage across lines, functions, branches, and statements.

#### Scenario: Coverage meets threshold

- **GIVEN** tests are run
- **WHEN** coverage is measured
- **THEN** lines, functions, branches, and statements coverage are all 100%

## Design tokens

Extracted from screenshot analysis (preview unavailable):

| Token                    | Value                                       | Source                       |
| ------------------------ | ------------------------------------------- | ---------------------------- |
| Sidebar background       | `#00d4ff` (bright cyan)                     | Screenshot sidebar overlay   |
| Sidebar overlay gradient | Cyan-to-blue over background image          | Screenshot                   |
| Body background          | `#ffffff` (white)                           | Screenshot main content area |
| Text on sidebar          | `#ffffff` (white)                           | Screenshot nav/heading text  |
| Text primary (content)   | `#333333` (dark gray)                       | Screenshot card titles       |
| Text secondary (dates)   | `#999999` (medium gray)                     | Screenshot "Posted:" dates   |
| Social icon circles      | `rgba(255,255,255,0.25)` on white outline   | Screenshot social buttons    |
| Social icon color        | `#ffffff`                                   | Screenshot                   |
| Font family              | `Poppins` (or similar geometric sans-serif) | Screenshot                   |
| Button radius (social)   | `50%` (circular)                            | Screenshot                   |
| Card layout              | 2-column grid, equal width                  | Screenshot main content      |

## Layout structure

Two-panel layout:

1. **Fixed sidebar** (left, ~320px width, full height)
   - Brand name "Journal" — large bold heading
   - Subtitle paragraph
   - Navigation links: Latest, Projects, About
   - Social media icon row (Facebook, Twitter, Instagram, Dribbble, LinkedIn)
   - Background: person photo with bright cyan (`#00d4ff`) duotone/gradient overlay

2. **Main content area** (right, fills remaining width)
   - Toggle button (hamburger/X) at top-left corner for sidebar open/close
   - Blog post grid: 2-column layout of post cards
   - Each card: avatar thumbnail (left) + post title + date (right)
   - Cards repeat with sample content

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
