# Rightpane — Implementation Notes

Source: ColorLib Bootstrap Sidebar 10
Preview: https://preview.colorlib.com/theme/bootstrap-sidebar-10/ (404 at prep time)
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/bootstrap-sidebar-170724.jpg

## Structure order (top to bottom)

1. Main content area (left side, scrollable)
   - Toggle button (top-right corner of content area)
   - Page heading
   - Body text
2. Right sidebar (fixed right, full height)
   - Brand header (bold name + subtitle)
   - Navigation list (icon + label items)
   - Newsletter section (heading + email input)
   - Footer (copyright + attribution)

## Fidelity notes

- **Sidebar position**: RIGHT side (not left) — this is the key differentiator from Bootstrap Sidebar 09
- **Sidebar background**: mountain landscape photo with blue/teal gradient overlay (semi-transparent)
- **Gradient colors**: cyan-blue `#00b4d8` to deeper blue `#0077b6`, semi-transparent over the image
- **Brand header**: "Kenitic" in bold white, "Blog Agency" as smaller subtitle below
- **Nav items**: Home, About, Blog, Services, Contacts — each with lucide-react icon + white text
- **No dividers** between nav items (unlike Sidebar 09 which has dividers)
- **Newsletter section**: below nav, "Subscribe for newsletter" heading, white email input with placeholder
- **Footer**: inside the sidebar, "Copyright ©2019 All rights reserved |" + attribution
- **Toggle button**: blue `#007bff` chevron, positioned at top-right of the content area (opposite side from Sidebar 09)
- **Content area**: white background, heading "Sidebar #04", muted gray body text
- **Typography**: system font stack, no custom fonts
- **Responsive**: on mobile, sidebar should be hidden by default with toggle to reveal

## Component breakdown

- `RightSidebar.tsx` — the fixed right sidebar container
  - `BrandHeader.tsx` — brand name + subtitle
  - `NavList.tsx` — navigation items
  - `NavItem.tsx` — single icon + label item
  - `Newsletter.tsx` — heading + email input
  - `SidebarFooter.tsx` — copyright + attribution
- `MainContent.tsx` — the content area wrapper
  - `ToggleButton.tsx` — sidebar collapse/expand control (positioned top-right)
- `App.tsx` — composes MainContent + RightSidebar, manages collapse state

## Dependencies

- lucide-react for icons (Home, User, FileText, Settings, Send)
- No additional npm packages needed
