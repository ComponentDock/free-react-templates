# Sideloom — Implementation Tasks & Design Notes

Source: ColorLib Sidebar V05
Preview: https://preview.colorlib.com/theme/sidebar/colorlib-sidebar-v05/
Spec: openspec/specs/template-sideloom/spec.md

## Tasks

1. [ ] Scaffold app from simplest existing sidebar template
2. [ ] Create Sidebar component with logo, nav menu, featured users
3. [ ] Create HamburgerToggle component with animated X state
4. [ ] Create BlogPostCard component (thumbnail + title + date)
5. [ ] Create PostGrid component (2-column flex grid)
6. [ ] Compose App.tsx with sidebar + main layout
7. [ ] Set up Tailwind theme tokens (brand blue #007bff, font Roboto)
8. [ ] Write tests for Sidebar (render, nav items, active state)
9. [ ] Write tests for HamburgerToggle (toggle, animation class)
10. [ ] Write tests for BlogPostCard (render props)
11. [ ] Write tests for PostGrid (column layout)
12. [ ] Write tests for App (sidebar + content integration)
13. [ ] Add Component Dock footer link
14. [ ] Run verify-app.sh — 100% coverage
15. [ ] Commit and push

## Section-by-Section Fidelity Notes

### Sidebar (`<aside>`)
- Fixed left, 300px wide, white (#fff) background
- Box-shadow: 10px 0 30px 0 rgba(0,0,0,0.1)
- Internal scroll: overflow-y scroll, hide scrollbar with CSS
- Transition: 1s cubic-bezier(0.23, 1, 0.32, 1) for slide transform

### Logo
- 50×50px circle, brand blue (#007bff) background
- White "C" letter, 2rem font, centered via absolute positioning
- Positioned with margin-left: 40px from sidebar edge

### Navigation Menu
- Vertical list, no bullets
- Links: block display, 40px left padding, 10px top/bottom padding
- Inactive: #b1b1b1 (light gray) text
- Active/hover: #000 (black) text
- Left indicator bar: pseudo-element, 2px height, #007bff blue
  - Width animates from 0 to 30px on active/hover
  - Positioned at vertical center of link
- Menu has 50px bottom margin before Featured Users

### Featured Users
- Section heading: "FEATURED USERS" — 13px, uppercase, bold, 0.2rem letter-spacing, #000
- Heading margin: 0 0 30px 40px
- User list: 8 entries, each 40px left margin, 15px bottom margin
- Each entry: flex layout, 45px circular avatar (border-radius: 50%) + 14px name text
- Avatar: flex: 0 0 45px, margin-right not needed (gap from flex)

### Main Content
- Offset: transform: translateX(300px) to account for fixed sidebar
- Container: max-width 960px (75% of viewport via col-md-9), centered
- 2-column grid: each column 50% width (col-md-6)
- Each blog post card: flex row, 30px bottom margin
  - Thumbnail: flex: 0 0 80px, margin-right: 30px
  - Content: title (h3, 18px) + meta (15px, #ccc)

### Hamburger Toggle
- Positioned at top-right of sidebar (absolute, right:0, translateX(100%))
- 28×32px area, three horizontal bars (2px height each)
- Bars: #000 color, border-radius: 2px
- Bar positions: top 4px, middle 15px, bottom 26px
- On hover: top bar at 7px, bottom at 23px (squeeze animation)
- Active state (cl-active): middle bar hidden, top/bottom rotate to X
- When sidebar is open: bars turn white (#fff) — uses .show-sidebar class

### Footer
- Original has no footer — add minimal Component Dock attribution
- "Made with Component Dock" link, centered, subtle styling
