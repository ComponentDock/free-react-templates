# Sidelane — Bootstrap Sidebar 05 Recreation

## Overview

A clean sidebar navigation template with a fixed left sidebar, main content area, newsletter subscribe section, and responsive mobile toggle.

## Source

- ColorLib: Bootstrap Sidebar 05
- Preview: https://preview.colorlib.com/theme/bootstrap-sidebar-05/
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/bootstrap-sidebar-170635.jpg

## Design Tokens

- Sidebar background: `#4a6cf7` (vibrant blue/indigo)
- Sidebar text: `#ffffff` (white)
- Sidebar hover: `rgba(255,255,255,0.1)`
- Active nav accent: `#ffffff` with left border
- Page background: `#ffffff` (white)
- Heading text: `#333333`
- Body text: `#666666`
- Font: Poppins (Google Fonts)
- Newsletter input bg: `rgba(255,255,255,0.2)`

## Layout

- Fixed left sidebar (w-64), full height, blue background
- Main content area with `lg:ml-64` offset
- Mobile: sidebar hidden by default, toggle via hamburger button
- Desktop: sidebar always visible

## Sections

1. **Sidebar**
   - Brand header: "Sidelane" title + "Portfolio Agency" subtitle
   - Navigation: Home, About, Works, Blog, Gallery, Services, Contacts (with lucide-react icons)
   - Newsletter subscribe: heading + email input
   - Footer: copyright + Component Dock link

2. **Topbar**
   - Hamburger menu button (mobile only)
   - No desktop nav links (sidebar handles navigation)

3. **MainContent**
   - Page heading matching original ("Sidebar #05" → "Sidelane")
   - Descriptive paragraphs

## Scenarios (Gherkin)

### Sidebar

- renders sidebar with brand header
- renders all navigation items
- has newsletter subscribe section
- footer links to Component Dock
- is hidden on mobile by default
- toggles open via hamburger button
- closes when overlay clicked
- always visible on desktop

### Topbar

- renders hamburger menu button
- calls onMenuClick when clicked
- is hidden on desktop

### MainContent

- renders page heading
- renders descriptive paragraphs
- has white background
