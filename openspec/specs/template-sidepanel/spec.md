# Template: Sidepanel (Sidebar Layout)

## Purpose

Sidepanel is a fixed-sidebar layout template in the free-react-templates monorepo.
It is a React recreation of the ColorLib "Bootstrap Sidebar 01" free template
(source: https://colorlib.com/wp/template/bootstrap-sidebar-01/), built under a
DIFFERENT name (**Sidepanel**), with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

The original is a Bootstrap 4 sidebar template with a fixed dark left sidebar
containing a circular profile image and vertical navigation, plus a main content
area with a top navbar (hamburger toggle + horizontal links), page heading, and
body text. The sidebar is always visible on desktop and toggleable on mobile.

**Preview URL:** https://preview.colorlib.com/theme/bootstrap-sidebar-01/
(Note: preview may return 404; design captured from screenshot + ColorLib page.)

## Design tokens (from screenshot + ColorLib page analysis)

| Token            | Value                    | Where                                                           |
| ---------------- | ------------------------ | --------------------------------------------------------------- |
| Sidebar bg       | `#222222` (dark charcoal)| Sidebar panel background                                        |
| Accent orange    | `#f5a623` (amber/orange) | Active nav item text, hamburger button bg, footer link color     |
| Content bg       | `#ffffff` (white)        | Main content area background                                    |
| Heading text     | `#222222` (dark)         | Page title "Sidebar #01"                                        |
| Body text        | `#666666` (medium gray)  | Paragraph/body copy                                             |
| Nav text         | `#cccccc` (light gray)   | Sidebar nav link text (inactive)                                |
| Nav separator    | `#333333` (subtle gray)  | Horizontal lines between nav items in sidebar                   |
| Sidebar footer   | `#999999` (muted gray)   | Copyright text in sidebar footer                                |
| Font family      | `'Open Sans', sans-serif`| Body and nav text (Bootstrap 4 default stack)                   |
| Heading font     | system / inherited       | Page title — bold, large (~36px)                                |
| Hamburger button | `#f5a623` bg, white icon | Orange square button with 3-line white hamburger icon            |
| Nav item padding | ~15px vertical           | Spacing between sidebar navigation links                        |
| Profile image    | circular, ~120px         | User avatar at top of sidebar                                   |
| Top navbar bg    | `#ffffff`                | Horizontal bar above content (holds hamburger + nav links)      |

## Structure (1:1 section order)

1. **Sidebar** (fixed left, ~250px wide, full viewport height)
   - Profile image (circular, centered, ~120px diameter)
   - Vertical nav links: Home (active, orange text + dropdown arrow), About, Pages (dropdown arrow), Portfolio, Contact
   - Separator lines between items (thin, dark gray)
   - Footer: copyright text + "Colorlib.com" link (replaced with ComponentDock link)
2. **Main content area** (remaining width, white background)
   - **Top navbar**: hamburger button (orange square) on left + horizontal nav links (Home, About, Portfolio, Contact) on right
   - **Page heading**: large bold "Sidebar #01" (replaced with template-appropriate heading)
   - **Body content**: paragraphs of text (placeholder lorem ipsum)

## Gherkin requirements

### Requirement: Fixed Sidebar Navigation

- The system SHALL render a fixed left sidebar occupying ~250px width and full viewport height.
- The sidebar SHALL contain a circular profile image at the top.
- The sidebar SHALL display vertical navigation links: Home, About, Pages, Portfolio, Contact.
- The "Home" link SHALL be visually highlighted with the accent orange color (`#f5a623`).
- Navigation items SHALL have subtle separator lines between them.
- The sidebar footer SHALL display copyright text and a link to https://www.componentdock.com/ ("Component Dock").

### Requirement: Main Content Area

- The system SHALL render a main content area to the right of the sidebar.
- The main content area SHALL have a white (`#ffffff`) background.
- The top of the main content area SHALL display a horizontal navbar with a hamburger button on the left and navigation links (Home, About, Portfolio, Contact) on the right.
- The hamburger button SHALL have an orange (`#f5a623`) background with a white hamburger icon.
- Below the navbar, the page SHALL display a large bold heading.
- Below the heading, the page SHALL display body text content.

### Requirement: Responsive Behavior

- On viewports below the sidebar breakpoint (e.g. < 768px), the sidebar SHALL collapse or become toggleable.
- The hamburger button SHALL be visible on mobile viewports to toggle the sidebar.
- The horizontal nav links in the top navbar SHALL be hidden or simplified on mobile.

### Requirement: Footer Attribution

- The sidebar footer SHALL link to https://www.componentdock.com/ with branded text "More templates at Component Dock" or similar, replacing any ColorLib attribution.
- No ColorLib references SHALL appear in any app source files, comments, or data.

## Verification checklist

- [ ] Sidebar is fixed-position, ~250px wide, full height, dark background
- [ ] Circular profile image renders in sidebar top
- [ ] Nav links (Home, About, Pages, Portfolio, Contact) render vertically
- [ ] Home link highlighted in accent orange
- [ ] Separator lines between nav items
- [ ] Sidebar footer has ComponentDock link (no ColorLib reference)
- [ ] Main content area has white background
- [ ] Top navbar has orange hamburger button + horizontal nav links
- [ ] Page heading renders large and bold
- [ ] Body text renders in medium gray
- [ ] Responsive: sidebar collapses on mobile, hamburger toggles it
- [ ] No ColorLib references in app code (spec + TEMPLATES.md + PR only)
- [ ] Footer links to https://www.componentdock.com/
- [ ] `npm run spec:validate` passes
