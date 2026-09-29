# Sidepanel (ColorLib Bootstrap Sidebar 01) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-sidepanel`.

## Design notes (replication findings)

- **Original:** ColorLib "Bootstrap Sidebar 01"
  (source: https://colorlib.com/wp/template/bootstrap-sidebar-01/).
- **Preview URL:** https://preview.colorlib.com/theme/bootstrap-sidebar-01/
  (returns 404 at time of prep — design captured from screenshot + ColorLib page.)
- **Screenshot analyzed:** `bootstrap-sidebar-170612.jpg` — a fixed dark left sidebar
  layout with circular profile image, vertical nav (Home active in orange, About,
  Pages, Portfolio, Contact), separator lines, and a footer with copyright + Colorlib
  link. Main content area has a top navbar (orange hamburger + horizontal nav links),
  a large bold heading, and body text paragraphs.
- **Description (from ColorLib page):** "Bootstrap sidebar template made by Colorlib,
  now rebuilt so it no longer needs Bootstrap's files to work. Works with Bootstrap 4,
  5 and 6, or on its own."

## Design tokens (from screenshot analysis)

| Token            | Value                    | Notes                                                          |
| ---------------- | ------------------------ | -------------------------------------------------------------- |
| Sidebar bg       | `#222222`                | Dark charcoal, full-height fixed panel                         |
| Accent orange    | `#f5a623`                | Active nav text, hamburger button bg, footer link              |
| Content bg       | `#ffffff`                | White main area                                                |
| Heading text     | `#222222`                | Dark, bold, ~36px                                              |
| Body text        | `#666666`                | Medium gray paragraphs                                         |
| Nav text         | `#cccccc`                | Light gray inactive sidebar links                              |
| Nav separator    | `#333333`                | Thin horizontal lines between sidebar items                    |
| Footer text      | `#999999`                | Muted gray copyright                                           |
| Font             | `Open Sans, sans-serif`  | Bootstrap 4 default stack                                      |
| Hamburger        | `#f5a623` bg, white icon | Square button, 3 horizontal lines                             |
| Profile image    | circular, ~120px         | Top of sidebar, centered                                       |

## Structure (section order, 1:1 with original)

1. **Sidebar** (fixed left, dark bg)
   - Profile image (circular)
   - Vertical nav: Home (active/orange), About, Pages (dropdown), Portfolio, Contact
   - Separator lines between items
   - Footer: copyright + ComponentDock link
2. **Main content** (white bg)
   - Top navbar: hamburger button (left) + horizontal nav links (right)
   - Page heading (large, bold)
   - Body text paragraphs

## Implementation tasks

1. Copy simplest existing app as scaffold (e.g. `apps/abjure` or similar minimal app)
2. Rename package to `@free-react-templates/sidepanel`
3. Create `Sidebar.tsx` component:
   - Fixed left panel, dark bg `#222222`, full height, ~250px width
   - Circular profile image (use picsum.photos placeholder)
   - Vertical nav links with separator lines
   - Active state highlight in orange `#f5a623`
   - Footer with ComponentDock link
4. Create `TopNavbar.tsx` component:
   - White bg, flex row
   - Orange hamburger button (left)
   - Horizontal nav links (right): Home, About, Portfolio, Contact
5. Create `MainContent.tsx` component:
   - Page heading + body text
6. Compose in `App.tsx`: Sidebar + (TopNavbar + MainContent)
7. Style with Tailwind CSS 4 + theme tokens in `index.css`
8. Add responsive behavior: sidebar collapses on mobile, hamburger toggles it
9. Write tests (Vitest + RTL) for all components
10. Ensure 100% coverage, typecheck, lint pass
11. Update `public/CNAME` to `sidepanel.free.componentdock.com`
12. Update `package.json` homepage to `https://sidepanel.free.componentdock.com`
