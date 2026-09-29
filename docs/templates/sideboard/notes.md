# Sideboard — Implementation Notes

Source: ColorLib Bootstrap Sidebar 07
Preview: https://preview.colorlib.com/theme/bootstrap-sidebar-07/ (404)
Screenshot: bootstrap-sidebar-170658.jpg

## Section order (top to bottom, left to right)

1. Sidebar (left, fixed, full-height)
   - Logo / brand mark at top
   - Vertical icon navigation (5 items)
2. Main content area (right, scrollable)
   - Hamburger toggle button (top-left)
   - Top navigation bar (top-right, horizontal links)
   - Page heading
   - Body text paragraphs
3. Footer (Component Dock link)

## Structure notes

- The sidebar is the primary layout element — everything else sits to its right.
- Sidebar width ~90px at desktop (icon-only mode). On mobile, sidebar is
  hidden by default and toggled via hamburger.
- The hamburger button is a circular blue button with a white icon, positioned
  at the top-left of the main content area (not inside the sidebar).
- The top nav bar is a thin strip with horizontal links right-aligned. It has
  a bottom border separating it from the content below.
- Content area is minimal: one heading + lorem ipsum paragraphs.

## Fidelity notes

- Match sidebar width (~90px icon-only at desktop).
- Match the royal blue (#4361ee) exactly.
- Match the circular hamburger button (not a square or flat button).
- Match 5 nav icons: house, user, document, puzzle, paper plane (use lucide-react).
- Match the horizontal top nav placement (top-right, right of hamburger).
- Match the light gray (#f5f5f5) content background.
- No shadows, no rounded corners, no gradients — flat design throughout.

## Component breakdown

- `Sidebar.tsx` — fixed left panel with logo + nav
- `TopNav.tsx` — horizontal navigation links
- `HamburgerButton.tsx` — circular toggle button
- `ContentArea.tsx` — heading + body text
- `App.tsx` — composes all sections
