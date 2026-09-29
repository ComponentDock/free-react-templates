# Template: Railgate (Sidebar Navigation)

## Purpose

Railgate is a sidebar navigation template in the free-react-templates monorepo.
It is an original React recreation of the ColorLib "Bootstrap Sidebar 09" free
template (source: https://colorlib.com/wp/template/bootstrap-sidebar-09/),
built under a DIFFERENT name (**Railgate**), with the monorepo stack:
Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a two-panel layout: a fixed left sidebar (~300px wide, full
viewport height, dark charcoal background) containing a profile photo with
background image overlay, a user name, icon-prefixed vertical navigation links,
and a sidebar toggle button that collapses/expands the sidebar; plus a main
content area (white background) with a heading and body text paragraphs.

## Naming

The ColorLib source name "Bootstrap Sidebar 09" is FORBIDDEN as the app name.
**Railgate** is the new, original name — single lowercase word, kebab-case
`railgate`, no collision with `apps/`, `openspec/specs/`, `docs/templates/`,
or any TEMPLATES.md name (verified: zero hits for `railgate` in ls apps/ or
ls openspec/specs/). Source slug: `bootstrap-sidebar-09`. Preview URL:
https://colorlib.com/etc/bootstrap-sidebar/sidebar-09/

## Design reference (replication findings)

- **Original:** ColorLib "Bootstrap Sidebar 09" (page title: "Sidebar 09").
  Listed in TEMPLATES.md under **Sidebar** (section header line ~2790; the row
  at line 2800 — `wp/template/bootstrap-sidebar-09/`). Sibling templates in the
  family: Bootstrap Sidebar 01–10 + Colorlib Sidebar V01–V10.
- **Live preview — REACHABLE (verified 2026-09-30):** The URL
  https://colorlib.com/etc/bootstrap-sidebar/sidebar-09/ served the full HTML
  with linked CSS (css/style.css). CSS tokens extracted directly from the live
  preview stylesheet (14,950 bytes).
- **Live CSS downloaded:** https://colorlib.com/etc/bootstrap-sidebar/sidebar-09/css/style.css
- **Screenshot analyzed:** `bootstrap-sidebar-170718.jpg` (from TEMPLATES.md).
  Confirms the two-panel layout with dark sidebar, profile photo section, nav
  items, and blue toggle button. Layout matches the CSS exactly.

### Section structure (from live HTML)

1. **Wrapper** (`.wrapper.cl-d-flex.cl-align-items-stretch`) — flexbox row
   holding sidebar + content.
2. **Sidebar** (`#sidebar`) — 300px wide, dark charcoal background, contains:
   - **Toggle button** (`.custom-menu > #sidebarCollapse`) — 30×30px blue
     square button positioned at top-right of sidebar (extending outside with
     margin-right: -35px). Shows FontAwesome right-arrow (▶). Clicking
     collapses sidebar (margin-left: -300px) and button content changes to
     left-arrow (◀).
   - **Profile section** (`.bg-wrap`) — background-image banner (mountain
     landscape) with black overlay (opacity 0.3), centered content:
     - **Avatar** (`.user-logo > .img`) — 100×100px circular image (border-radius 50%)
     - **Name** (`h3`) — "Catriona Henderson" in white, 18px
   - **Navigation** (`ul.components.cl-list-unstyled`) — 7 items, each:
     - `<a>` with FontAwesome/SVG icon + text label
     - Padding: 15px 30px
     - Border-bottom: 1px solid rgba(255,255,255,0.05)
     - Default text: rgba(255,255,255,0.6)
     - Hover: color #fff, background #2f89fc, border-bottom #2f89fc
     - Active item: background transparent, color #fff
     - Items: Home, Download (with red notification badge "5"), Gift Code,
       Top Review, Settings, Support, Sign Out
3. **Content** (`#content`) — white background, min-height 100vh, padding
   1.5rem (mobile) / 3rem (desktop), contains:
   - `<h2>` "Sidebar #09" in black, font-weight 400
   - Two `<p>` lorem ipsum paragraphs in gray

### Responsive behavior

- Below 992px: sidebar is hidden off-screen (margin-left: -300px).
  Toggle button moves to top:10px, right:-60px.
- Toggle button shows/hides sidebar with 0.3s CSS transition.

## Design tokens (extracted from live CSS)

| Token                        | Value                          | Notes                                                  |
| ---------------------------- | ------------------------------ | ------------------------------------------------------ |
| `--color-sidebar`            | `#32373d`                      | Dark charcoal sidebar background                       |
| `--color-accent`             | `#2f89fc`                      | Blue — links, hover bg, toggle button, focus rings     |
| `--color-accent-hover`       | `#0069d9`                      | Darker blue for button hover                           |
| `--color-text`               | `#212529`                      | Body text color (Bootstrap default)                    |
| `--color-heading`            | `#000`                         | Headings (h2, h3)                                      |
| `--color-body-text`          | `gray`                         | Paragraph/body text                                    |
| `--color-link`               | `#2f89fc`                      | Link color                                             |
| `--color-page`               | `#fff`                         | Page/body background                                   |
| `--color-sidebar-text`       | `rgba(255,255,255,0.6)`        | Default sidebar nav link text                          |
| `--color-sidebar-text-hover` | `#fff`                         | Hover/active sidebar nav link text                     |
| `--color-nav-border`         | `rgba(255,255,255,0.05)`       | Divider between nav items                              |
| `--color-overlay`            | `rgba(0,0,0,0.3)`              | Dark overlay on profile banner background              |
| `--color-badge`              | `red`                          | Notification badge background                          |
| `--font-family`              | `"Poppins", Arial, sans-serif` | Primary font — loaded via Google Fonts (400, 500, 700) |
| `--sidebar-width`            | `300px`                        | Sidebar width (min and max)                            |
| `--sidebar-transition`       | `all 0.3s`                     | Smooth collapse/expand transition                      |
| `--avatar-size`              | `100px`                        | Circular profile image width/height                    |
| `--avatar-radius`            | `50%`                          | Circular shape                                         |
| `--toggle-size`              | `30px × 30px`                  | Sidebar collapse/expand toggle button                  |
| `--nav-padding`              | `15px 30px`                    | Nav item padding                                       |
| `--nav-font-size`            | `16px`                         | Nav item font size                                     |
| `--profile-name-size`        | `18px`                         | Profile name (h3) font size                            |
| `--body-font-size`           | `14px`                         | Base body font size                                    |
| `--body-line-height`         | `1.8`                          | Line height for paragraphs                             |
| `--heading-font-weight`      | `400`                          | Headings use regular weight, not bold                  |

## Gherkin requirements

### Feature: Sidebar Navigation

#### Scenario: Page renders with sidebar visible

Given the user loads the page on a desktop viewport (>= 992px)
When the page renders
Then the sidebar is visible on the left side
And the sidebar width is approximately 300px
And the sidebar background is dark charcoal (#32373d)
And the main content area is visible on the right
And the main content background is white

#### Scenario: Profile section displays correctly

Given the sidebar is visible
When the user looks at the top of the sidebar
Then a profile banner with a background image is displayed
And a dark overlay (30% opacity) covers the background image
And a circular avatar image (100×100px) is centered
And the profile name "Catriona Henderson" appears below the avatar in white

#### Scenario: Navigation items are rendered

Given the sidebar is visible
When the user looks at the navigation list
Then 7 navigation items are displayed vertically
And each item has an icon (lucide-react) and a text label
And the items are: Home, Download, Gift Code, Top Review, Settings, Support, Sign Out
And each item has a subtle bottom border (rgba white 5% opacity)
And the text color is semi-transparent white (rgba white 60%)

#### Scenario: Navigation item hover state

Given the sidebar is visible
When the user hovers over a navigation item
Then the item background becomes blue (#2f89fc)
And the item text becomes full white
And the bottom border becomes blue (#2f89fc)

#### Scenario: Active navigation item styling

Given the sidebar is visible
When the Home item is the active item
Then the Home item text is full white
And the Home item background is transparent (not blue)
And hovering the active item still shows the blue background

#### Scenario: Download notification badge

Given the sidebar is visible
When the user looks at the Download nav item
Then a red circular badge with the number "5" is displayed next to the icon

#### Scenario: Sidebar toggle button visible

Given the sidebar is visible on desktop
When the user looks at the toggle button area
Then a 30×30px blue square button is positioned at the top-right of the sidebar
And the button extends slightly outside the sidebar (right side)
And the button displays a white right-arrow icon

#### Scenario: Sidebar collapses when toggle is clicked

Given the sidebar is visible and expanded
When the user clicks the toggle button
Then the sidebar collapses (slides left, off-screen) with a 0.3s transition
And the toggle button icon changes to a left-arrow
And the main content area expands to fill the full width

#### Scenario: Sidebar expands when toggle is clicked again

Given the sidebar is collapsed
When the user clicks the toggle button
Then the sidebar expands back to 300px width with a 0.3s transition
And the toggle button icon changes back to a right-arrow

#### Scenario: Mobile responsive layout

Given the user loads the page on a mobile viewport (< 992px)
When the page renders
Then the sidebar is hidden off-screen (collapsed by default)
And the toggle button is positioned at top:10px, right:-60px
And the main content fills the full viewport width

#### Scenario: Mobile sidebar toggle

Given the user is on mobile and the sidebar is hidden
When the user clicks the toggle button
Then the sidebar slides in from the left to full 300px width
And the main content is pushed to the right or overlaid

#### Scenario: Content section displays correctly

Given the page has loaded
When the user looks at the main content area
Then a heading "Sidebar #09" (replaced with template name) is displayed
And two paragraphs of body text are shown below the heading
And the content has generous padding (1.5rem mobile, 3rem desktop)

#### Scenario: Typography matches reference

Given the page renders
When the user inspects the typography
Then the font family is "Poppins" with Arial fallback
And the base font size is 14px
And the line height is 1.8
And headings use font-weight 400 (regular, not bold)

#### Scenario: Footer with Component Dock link

Given the page has loaded
When the user scrolls to the bottom of the main content
Then a footer section is present
And the footer links to https://www.componentdock.com/
And the footer text mentions "Component Dock"

## Verification checklist

- [ ] Sidebar renders at 300px width with dark charcoal (#32373d) background
- [ ] Profile banner shows background image with 30% black overlay
- [ ] Circular avatar (100×100, border-radius 50%) centered in profile area
- [ ] Profile name in white, 18px, Poppins font
- [ ] 7 navigation items with lucide-react icons and text labels
- [ ] Nav items: 15px 30px padding, 16px font, subtle border-bottom
- [ ] Nav text: rgba(255,255,255,0.6) default, #fff on hover
- [ ] Nav hover: blue (#2f89fc) background, blue bottom border
- [ ] Active item: transparent background, white text
- [ ] Download item shows red notification badge with count
- [ ] Toggle button: 30×30px, blue (#2f89fc), positioned outside sidebar right edge
- [ ] Toggle shows right-arrow (▶) when expanded, left-arrow (◀) when collapsed
- [ ] Sidebar collapse: margin-left -300px, 0.3s transition
- [ ] Sidebar expand: margin-left 0, 0.3s transition
- [ ] Mobile (< 992px): sidebar hidden by default, toggle at top:10px right:-60px
- [ ] Content area: white background, padding 1.5rem mobile / 3rem desktop
- [ ] Heading: "Sidebar #09" in black, font-weight 400, Poppins
- [ ] Body text: gray color, 14px, 1.8 line height, two paragraphs
- [ ] Font: Poppins loaded from Google Fonts (weights 400, 500, 700)
- [ ] Footer links to https://www.componentdock.com/
- [ ] No ColorLib references in app code (only in spec/TEMPLATES.md)
- [ ] `vite.config.ts` has `injectUiSource()`
- [ ] Tests: 100% lines/functions/branches/statements coverage
- [ ] Build passes: typecheck + lint + test:coverage + build
