# Navdrawer — Implementation Notes

Source: ColorLib Bootstrap Sidebar 09
Preview: https://preview.colorlib.com/theme/bootstrap-sidebar-09/ (404 at prep time)
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/bootstrap-sidebar-170718.jpg

## Structure order (top to bottom)

1. Sidebar (fixed left, full height)
   - Profile header area (avatar + name + background image)
   - Nav list (icon + label items with dividers)
2. Main content area (scrollable, fills remaining width)
   - Toggle button (top-left corner)
   - Page heading
   - Body text

## Fidelity notes

- **Sidebar background**: dark charcoal `#343a40` — Bootstrap's secondary color
- **Profile area**: circular avatar (~80px), white name text, mountain landscape background behind the entire profile section at the top of the sidebar
- **Nav items**: each has a lucide-react icon + text label, separated by subtle `rgba(255,255,255,0.1)` dividers
- **Nav item groups**: Home is separate at top; Download, Gift Code, Top Review are grouped; Settings, Support, Sign Out are grouped — separated by dividers
- **Toggle button**: blue `#007bff` chevron button in the content area's top-left, used to collapse/expand the sidebar
- **Content area**: white background, heading "Sidebar #09" in dark text, muted gray body text
- **No footer**: this is a sidebar component demo; the footer should still link to Component Dock per project rules
- **Typography**: system font stack (Bootstrap default), no custom fonts needed
- **Responsive**: on mobile, sidebar should be hidden by default with toggle to reveal

## Component breakdown

- `Sidebar.tsx` — the fixed left sidebar container
  - `ProfileHeader.tsx` — avatar + name + background
  - `NavList.tsx` — navigation items with dividers
  - `NavItem.tsx` — single icon + label item
- `MainContent.tsx` — the content area wrapper
  - `ToggleButton.tsx` — sidebar collapse/expand control
- `App.tsx` — composes Sidebar + MainContent, manages collapse state

## Dependencies

- lucide-react for icons (Home, Download, Gift, Star, Settings, LifeBuoy, LogOut, ChevronRight)
- No additional npm packages needed
