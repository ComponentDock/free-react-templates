# SidebarNook — Design Notes & Task Outline

## Source Mapping
- **ColorLib source**: Colorlib Sidebar V08
- **Source slug**: `colorlib-sidebar-v08`
- **Preview URL**: https://preview.colorlib.com/theme/sidebar/colorlib-sidebar-v08/
- **Template page**: https://colorlib.com/wp/template/colorlib-sidebar-v08/
- **New name**: `sidebarnook`

## Structure Order (top to bottom)

### Sidebar (fixed, left, 300px)
1. Burger toggle — positioned absolute top-right of sidebar, 3-line hamburger
2. Profile section — centered
   - Round avatar image (80px, border-radius 50%)
   - Name heading (18px, Roboto)
   - Role subtitle (14px, color #cfcfcf)
3. Navigation menu — list of items, some with accordion submenus
   - Feed (collapsible): News, Sport, Health
   - Explore (collapsible): Interior, Food, Travel
   - Notifications (icon + text)
   - Direct (icon + text)
   - Stats (icon + text)
   - Sign out (icon + text)

### Main Content (full width, shifts right on sidebar open)
1. Site section (7rem padding)
   - Container (max-width responsive)
     - Row (centered, 9-col on md)
       - Post grid (2 columns on md+, each: 80px thumbnail + title + meta)

## Design Fidelity Notes

- **Sidebar slide**: uses CSS transform translateX with cubic-bezier(0.23, 1, 0.32, 1) over 1s
- **Overlay**: body::before pseudo-element, rgba(0,0,0,0.05), toggled via .show-sidebar class on body
- **Burger animation**: 3 bars transform to X via rotation when .cl-active class added
- **Accordion**: uses aria-expanded attribute, .cl-collapse class toggles display, chevron rotates 90deg
- **Active indicator**: 4px left border on .cl-active, color #ff7315
- **Nav hover**: background #fcfcfc, text #000, left border grows from 0 to 4px
- **Icons**: SVG inline icons (home, search, bell, location-arrow, pie-chart, sign-out) — use lucide-react equivalents
- **Post entries**: flex layout, 80px thumbnail with margin-right 30px, title 18px, meta 15px color #ccc

## Component Breakdown

1. `Sidebar.tsx` — the fixed left sidebar container
   - Props: `isOpen: boolean`, `onToggle: () => void`
2. `Profile.tsx` — avatar + name + role
3. `NavMenu.tsx` — navigation list
   - Props: `items: NavItem[]`
4. `AccordionItem.tsx` — collapsible menu item
   - Props: `label: string`, `icon: ReactNode`, `children: ReactNode`, `defaultOpen?: boolean`
5. `MainContent.tsx` — the content area
   - Props: `isSidebarOpen: boolean`
6. `PostGrid.tsx` — 2-column grid of posts
7. `PostEntry.tsx` — single post card
   - Props: `thumbnail: string`, `title: string`, `date: string`
8. `BurgerToggle.tsx` — animated hamburger icon
   - Props: `isOpen: boolean`, `onClick: () => void`

## Implementation Notes

- Use `lucide-react` for icons: Home, Search, Bell, Navigation, PieChart, LogOut
- Sidebar state managed in App.tsx with useState
- Body gets `.show-sidebar` class toggled via useEffect
- Burger animation: CSS classes .cl-active on burger element
- Accordion: controlled state with aria-expanded
- Post data: hardcoded array of 8 items with picsum.photos thumbnails
- No external dependencies beyond React, Tailwind, lucide-react
