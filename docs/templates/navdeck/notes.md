# Navdeck — Design & Implementation Notes

## Source
- ColorLib template: Sidebar V01
- Slug: `colorlib-sidebar-v01`
- Preview: `https://preview.colorlib.com/theme/colorlib-sidebar-v01/` (404 — design captured from screenshot)
- Template page: `https://colorlib.com/wp/template/colorlib-sidebar-v01/`

## Design Overview
Social media sidebar profile template. Left sidebar with profile info and navigation; right content area with a 2-column post feed grid. Clean, minimal, modern aesthetic.

## Section Order (left to right)
1. Sidebar (left, fixed width)
   - Profile area (avatar, name, location)
   - Stats row (Posts, Followers, Following)
   - Divider
   - Navigation menu (Feed, Explore, Notifications, Direct, Stats, Sign out)
2. Main content (right, fluid)
   - Close/hamburger button
   - 2-column post card grid

## Component Breakdown
- `App.tsx` — Two-column flex layout
- `Sidebar.tsx` — Fixed-width sidebar container
  - `ProfileHeader.tsx` — Avatar + name + location
  - `StatsRow.tsx` — Three stat columns
  - `NavMenu.tsx` — Vertical icon+label navigation list
- `FeedGrid.tsx` — 2-column CSS grid
  - `PostCard.tsx` — Individual post card (title, thumbnail, date)
- `CloseButton.tsx` — X button in main content area

## Fidelity Notes
- Active nav item uses a 3px left border in amber (#e8a038), not a background highlight
- Avatar is fully circular (50% radius), ~80px, with subtle gray border
- Stats are laid out as three equal columns with bold number on top, gray label below
- Post cards are in a clean 2-column grid, not masonry — rows align
- Close button is a simple X icon in the top-left of the main content area
- Overall palette: white sidebar, light gray main, dark gray text, amber accent

## Implementation Notes
- Use `picsum.photos/seed/navdeck-<n>` for placeholder images (avatar + post thumbnails)
- Lucide-react icons for nav menu (Home, Search, Bell, Send, BarChart3, LogOut)
- Sidebar: use `sticky top-0 h-screen` for fixed scroll behavior
- Stats row: use CSS grid or flex with `gap` for equal spacing
- Feed grid: `grid grid-cols-2 gap-4` on desktop, `grid-cols-1` on mobile
- Mobile: sidebar slides in as overlay with hamburger toggle
- No external dependencies beyond lucide-react
