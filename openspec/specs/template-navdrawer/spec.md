# Template: NavDrawer (Collapsible Sidebar Navigation)

## Purpose

NavDrawer is a single-page sidebar navigation template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Bootstrap Sidebar 08" free template (source:
https://colorlib.com/wp/template/bootstrap-sidebar-08/), built under a
DIFFERENT name (**NavDrawer**), with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

The original is a two-panel layout: a main content area (white background)
on the left with heading and body text, plus a collapsible sidebar on the
right (~270px wide) containing hierarchical category navigation with
dropdown submenus, a tag cloud, and a newsletter subscription form. The
sidebar uses a clean white design with black text and pink (#fc7fb2)
accent color.

**WHAT MAKES NAVDRAWER DISTINCT (signature behaviors):**

1. **Right-side collapsible sidebar.** Unlike most sidebar templates that
   place navigation on the left, Sidebar 08 places the sidebar on the
   RIGHT side of the viewport. The sidebar is 270px wide at desktop and
   collapses off-screen on mobile (<768px). The main content area fills
   the remaining width.
2. **Hierarchical dropdown category navigation.** The sidebar contains
   top-level categories (Mens Shoes, Accessories, Clothes) that expand
   into sub-item lists (Casual, Football, Jordan, etc.) via a collapsible
   accordion pattern. Each category has a dropdown toggle chevron.
3. **Tag cloud widget.** A section of uppercase pill-shaped tags (e.g.
   "dish", "menu", "food", "sweet") with 1px gray borders and 4px border
   radius. Tags highlight pink on hover.
4. **Newsletter subscription form in sidebar.** An email input with
   "Enter Email Address" placeholder at the bottom of the sidebar, styled
   with a transparent border and 44px height.
5. **Minimal white aesthetic.** The entire template is white-background
   with black text, pink accent links, and subtle gray borders — no hero
   images, no parallax, no heavy styling. Purely structural layout.

## Naming

The ColorLib source name "Bootstrap Sidebar 08" is FORBIDDEN as the app
name (and "bootstrap" must not be reused). **NavDrawer** is the new,
original name — single lowercase word, kebab-case `navdrawer`, no
collision with `apps/`, `openspec/specs/`, `docs/templates/`, or any
TEMPLATES.md name (verified: zero hits for `navdrawer` in ls apps/ or
ls openspec/specs/). Source slug: `bootstrap-sidebar-08`. Preview URL:
https://colorlib.com/etc/bootstrap-sidebar/sidebar-08/ (live, verified
2026-09-30). Screenshot URL:
https://colorlib.com/wp/wp-content/uploads/sites/2/bootstrap-sidebar-170710.jpg

## Design reference (replication findings)

- **Original:** ColorLib "Bootstrap Sidebar 08" (page title: "Sidebar
  #08"). Listed in TEMPLATES.md under **Bootstrap Sidebars** (section
  header line ~2790; the row at line 2799 —
  `wp/template/bootstrap-sidebar-08/`). Sibling templates in the family:
  Bootstrap Sidebar 01–10 + Colorlib Sidebar V01–V10.
- **Live preview — REACHABLE (verified 2026-09-30):** The live preview at
  https://colorlib.com/etc/bootstrap-sidebar/sidebar-08/ returns the full
  template HTML. The CSS was extracted from
  `https://colorlib.com/etc/bootstrap-sidebar/sidebar-08/css/style.css`
  (13,264 bytes). Full design tokens extracted below.
- **Screenshot analysis (viewed 2026-09-30):** The preview image
  (bootstrap-sidebar-170710.jpg) is an AVIF image served with a .jpg
  extension — confirms the two-panel layout with right-side sidebar.

### Design tokens (extracted from live CSS)

| Token | Value | Usage |
|---|---|---|
| Font family | `"Poppins", Arial, sans-serif` | Body and headings (weights 400, 500, 700) |
| Body font size | `14px` | Base text |
| Body line-height | `1.8` | Base text |
| Body text color | `gray` | Paragraph text |
| Heading color | `#000` | h2, h5 headings |
| Link/accent color | `#fc7fb2` | Links, active states, hover highlights |
| Background | `#fff` | Page background |
| Sidebar width | `270px` (min/max) | Right sidebar |
| Sidebar border-left | `1px solid rgba(0,0,0,0.05)` | Subtle separator |
| Sidebar item border | `1px solid rgba(0,0,0,0.05)` | Between nav links |
| Sidebar active color | `#fc7fb2` | Active menu item text |
| Tag cloud text | `#000` uppercase | Tag pill text, 11px font |
| Tag cloud border | `1px solid #ccc` | Pill outline, 4px radius |
| Tag cloud hover | `background: #fc7fb2; color: #fff; border-color: #fc7fb2` | Pink fill on hover |
| Form input height | `44px` | Newsletter input |
| Form input border | `transparent` default, `#000` on focus | Clean look |
| Form input border-radius | `4px` | Slight rounding |
| Dropdown chevron | Absolute positioned, `::after` pseudo-element | Right-aligned toggle arrow |
| Transition | `0.3s all ease` | Links and sidebar toggle |
| Sub-item indentation | `margin-left: 10px` | Nested list items |
| Sub-item font size | `13px` | Smaller than parent (14px) |
| Mobile breakpoint | `767.98px` | Sidebar collapses to 180px max-width |

## Gherkin requirements

```gherkin
Feature: NavDrawer Template
  As a visitor to the NavDrawer template page
  I want to see a two-panel layout with a right-side sidebar
  So that I can browse categories and subscribe to a newsletter

  Background:
    Given the page is loaded at "/" 

  Scenario: Page layout structure
    Then I should see a main content area on the left
    And I should see a sidebar on the right
    And the sidebar should be 270px wide on desktop viewports

  Scenario: Main content area
    Then I should see a heading "Sidebar #08" (or replacement heading)
    And I should see two paragraphs of body text below the heading
    And the content area should have white background with generous padding

  Scenario: Sidebar category navigation
    Then I should see a "Categories" heading in the sidebar
    And I should see top-level category links: "Mens Shoes" (x2), "Accessories", "Clothes"
    And each category should have a dropdown toggle chevron
    When I click a category toggle
    Then its sub-items should expand/collapse with animation
    And sub-items should include sport/lifestyle links (Casual, Football, Jordan, etc.)

  Scenario: Sidebar sub-items are indented
    Then sub-items should be indented ~10px from their parent
    And sub-item font size should be 13px (vs 14px parent)
    And each sub-item link should have a chevron-right icon prefix

  Scenario: Tag cloud widget
    Then I should see a "Tag Cloud" heading in the sidebar
    And I should see tag pills: "dish", "menu", "food", "sweet", "tasty", "delicious", "desserts", "drinks"
    And each tag should have uppercase text, 1px gray border, 4px border-radius
    When I hover a tag
    Then it should fill with pink (#fc7fb2) background and white text

  Scenario: Newsletter subscription form
    Then I should see a "Newsletter" heading in the sidebar
    And I should see an email input with placeholder "Enter Email Address"
    And the input should be 44px tall with 4px border-radius
    And the input border should be transparent by default
    When I focus the input
    Then the border should turn black (#000)

  Scenario: Color scheme consistency
    Then all links should be pink (#fc7fb2)
    And all headings should be black (#000)
    And body text should be gray
    And the page background should be white (#fff)
    And sidebar text should be black

  Scenario: Responsive behavior
    When the viewport width is less than 768px
    Then the sidebar should collapse to max-width 180px
    And the sidebar should have no left border

  Scenario: Accessibility
    Then all navigation links should be keyboard-focusable
    And the sidebar should have appropriate ARIA roles
    And form inputs should have associated labels or placeholders
    And color contrast should meet WCAG AA standards
```

## Verification checklist

- [ ] Layout: two-panel, right-side sidebar at 270px on desktop
- [ ] Sidebar collapses on mobile (<768px) to 180px
- [ ] Category dropdowns expand/collapse with animation
- [ ] Tag cloud with 8 uppercase pill-style tags
- [ ] Tag hover fills pink (#fc7fb2)
- [ ] Newsletter form with 44px input, transparent border, focus state
- [ ] Poppins font loaded (weights 400, 500, 700)
- [ ] All links are pink (#fc7fb2), headings black, body gray
- [ ] Footer links to https://www.componentdock.com/ ("Component Dock")
- [ ] No references to "ColorLib" in app code (only in spec/TEMPLATES.md)
- [ ] public/CNAME: navdrawer.free.componentdock.com
- [ ] package.json homepage: https://navdrawer.free.componentdock.com
- [ ] 100% test coverage (lines, functions, branches, statements)
- [ ] Tests cover: layout structure, sidebar toggle, dropdown expand/collapse, tag cloud, form interaction, responsive breakpoint, accessibility
