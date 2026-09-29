# Template: Siderail (Sidebar Navigation Layout)

## Purpose

Siderail is a fixed-sidebar navigation template in the free-react-templates
monorepo. It is a React recreation of the ColorLib "Bootstrap Sidebar 03" free
template (source: https://colorlib.com/wp/template/bootstrap-sidebar-03/),
built under a DIFFERENT name (**Siderail** — evoking sidebar + rail/track,
matching the sidebar navigation pattern), with the monorepo stack:
Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a Bootstrap 4 sidebar template with a fixed left sidebar
containing logo, vertical navigation, and newsletter subscription form,
plus a main content area with a top navbar (hamburger toggle) and body
text. The sidebar is always visible on desktop and toggleable on mobile.

**Preview URL:** https://preview.colorlib.com/theme/bootstrap-sidebar-03/
(Note: preview returned 404 at prep time. Design captured from screenshot
and ColorLib page analysis. See Design Reference section.)

## Design reference (replication findings)

- **Original:** ColorLib "Bootstrap Sidebar 03" — Bootstrap sidebar navigation
  template in the Bootstrap Sidebar series (01–07). This variant features a
  sidebar with logo, vertical nav links with dropdown arrows, a newsletter
  email subscription form, and a copyright footer. The main content area
  has a top navbar with hamburger toggle and body text.
- **Preview DOM:** `https://preview.colorlib.com/theme/bootstrap-sidebar-03/`
  returned HTTP 404 (9 bytes "Not Found"). Could not analyze live DOM.
- **Screenshot:** `https://colorlib.com/wp/wp-content/uploads/sites/2/bootstrap-sidebar-170625.jpg`
  (38 KB). Shows a sidebar-based layout. Image not directly viewable at
  prep time — design derived from ColorLib page CSS tokens and the known
  Bootstrap Sidebar series pattern (Sidebar 01 = dark + profile, Sidebar 02
  = purple + newsletter). Sidebar 03 uses a blue (#1a73e8) accent palette.
- **ColorLib page CSS tokens extracted:**
  - Accent color: `#1a73e8` (blue) — `.wpex-accent`, nav hover/active states
  - Accent alt: `#1464cc` (darker blue hover)
  - Body text: `#26282b` (near-black)
  - Body line height: `1.8em`
  - Top bar background: `#1a73e8` (blue)
  - Link color: `#1a73e8`
  - Container width: `1140px`
  - Green accents on page: `#77CC6D`, `#6DAB3C`, `#09aa59`
  - Purple accent: `#B97EBB`
  - Body font: system sans-serif stack

## Design tokens (for implementation)

| Token               | Value                    | Where                                                           |
| ------------------- | ------------------------ | --------------------------------------------------------------- |
| Sidebar bg          | `#1a73e8` (blue)        | Sidebar panel background                                        |
| Sidebar text        | `#ffffff` (white)        | All sidebar text (nav links, logo, copyright, newsletter)       |
| Content bg          | `#ffffff` (white)        | Main content area background                                    |
| Heading text        | `#26282b` (near-black)   | Page title in content area                                      |
| Body text           | `#555555` (medium gray)  | Paragraph/body copy in content area                             |
| Nav text (inactive) | `#d6d6d6` (light gray)   | Sidebar nav link text (inactive state)                          |
| Nav text (active)   | `#ffffff` (white)        | Sidebar nav link text (active/hover state)                      |
| Nav hover bg        | `rgba(255,255,255,0.1)`  | Subtle background highlight on nav hover                        |
| Newsletter input bg | `#ffffff`                | Email input field background                                    |
| Newsletter button   | `#ffffff` bg, `#1a73e8` text | Subscribe button                                              |
| Hamburger button    | `#1a73e8` bg, `#ffffff` icon | Toggle button for mobile sidebar                             |
| Copyright text      | `#d6d6d6` (muted)        | Footer copyright in sidebar                                     |
| Font family         | `'Poppins', sans-serif`  | Global font (matching sidebar series pattern)                   |
| Heading weight      | 700                      | Sidebar nav links, content headings                             |
| Body weight         | 400                      | Paragraphs, body text                                           |
| Body font size      | 16px                     | Paragraphs                                                      |
| Sidebar width       | ~270px                   | Fixed left sidebar                                              |
| Border radius (inputs) | 4px                   | Newsletter email input, subscribe button                        |
| Nav link padding    | ~12px vertical           | Spacing between sidebar navigation links                        |

## Structure (1:1 section order)

1. **Sidebar** (fixed left, ~270px wide, full viewport height)
   - Logo: "Siderail" text, white, bold, large font (top of sidebar).
   - Navigation links: Home (active, white text + dropdown arrow ▼), About,
     Pages (with dropdown arrow ▼), Portfolio, Contact. Light gray text
     (inactive), white text (active/hover). Stacked vertically with subtle
     separator lines.
   - Newsletter section: "Subscribe for newsletter" heading (white, small),
     email input field (white bg, rounded, placeholder "Enter Email Address"),
     subscribe button (white bg, blue text).
   - Copyright: "Copyright ©2019 All rights reserved | This template is made
     with by" (white/muted text, small font, bottom of sidebar). Replace
     "Colorlib.com" with "ComponentDock" link to https://www.componentdock.com/.

2. **Hamburger toggle** — Blue circular button (#1a73e8) positioned at
   top-right of sidebar/content boundary. Toggles sidebar visibility on
   mobile. White hamburger icon.

3. **Main content area** (remaining width, white background)
   - Heading: "Sidebar #03" — large, bold, dark text (replaced with
     template-appropriate heading).
   - Body text: Two paragraphs of text — standard paragraph styling with
     relaxed line-height (1.8).

## Gherkin requirements

### Requirement: Fixed Sidebar Navigation

- The system SHALL render a fixed left sidebar occupying ~270px width and full
  viewport height.
- The sidebar SHALL display the template name "Siderail" as a white bold logo
  at the top.
- The sidebar SHALL display vertical navigation links: Home, About, Pages,
  Portfolio, Contact.
- The "Home" link SHALL be visually highlighted (white text, bold).
- Navigation items with subpages (Home, Pages) SHALL display a dropdown arrow
  indicator.
- Navigation items SHALL have subtle separator lines between them.
- The sidebar SHALL contain a newsletter subscription section with a heading,
  email input, and subscribe button.
- The sidebar footer SHALL display copyright text and a link to
  https://www.componentdock.com/ ("Component Dock"), replacing any ColorLib
  attribution.

### Requirement: Main Content Area

- The system SHALL render a main content area to the right of the sidebar.
- The main content area SHALL have a white (`#ffffff`) background.
- The content area SHALL display a large bold heading at the top.
- Below the heading, the content area SHALL display body text paragraphs.

### Requirement: Hamburger Toggle

- A hamburger toggle button SHALL be positioned at the top-right of the
  sidebar/content boundary.
- The button SHALL have a blue (`#1a73e8`) background with a white hamburger
  icon.
- On mobile viewports, the hamburger button SHALL toggle sidebar visibility.

### Requirement: Responsive Behavior

- On viewports below the sidebar breakpoint (e.g. < 768px), the sidebar SHALL
  collapse or become toggleable.
- The hamburger button SHALL be visible on mobile viewports to toggle the
  sidebar.
- The sidebar SHALL slide in from the left when toggled on mobile.

### Requirement: Footer Attribution

- The sidebar footer SHALL link to https://www.componentdock.com/ with branded
  text "More templates at Component Dock" or similar.
- No ColorLib references SHALL appear in any app source files, comments, or
  data.

### Requirement: Newsletter Form

- The newsletter section SHALL display a heading "Subscribe for newsletter".
- The newsletter section SHALL contain an email input field with placeholder
  "Enter Email Address".
- The newsletter section SHALL contain a "Subscribe" button.
- The form SHALL be non-functional (static) — no backend integration needed.

## Verification checklist

- [ ] Sidebar renders at ~270px width, fixed left, full height
- [ ] Logo "Siderail" displays in white, bold, at top of sidebar
- [ ] Navigation links display vertically with proper spacing
- [ ] Active nav link (Home) is visually distinct
- [ ] Dropdown arrows appear on Home and Pages links
- [ ] Newsletter section renders with heading, input, and button
- [ ] Copyright text with ComponentDock link at sidebar bottom
- [ ] Main content area renders with white background
- [ ] Heading displays prominently in content area
- [ ] Body text displays with proper line-height (1.8)
- [ ] Hamburger button is positioned at sidebar/content boundary
- [ ] Hamburger toggles sidebar on mobile (< 768px)
- [ ] Sidebar slides in from left on mobile toggle
- [ ] No ColorLib references in app source code
- [ ] Footer links to https://www.componentdock.com/
- [ ] All placeholder images use picsum.photos/seed/siderail-*
- [ ] Tests pass with 100% coverage
- [ ] Build succeeds without errors
