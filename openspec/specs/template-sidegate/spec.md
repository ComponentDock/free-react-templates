# Sidegate — Template Spec

## Overview

Sidegate is a minimal sidebar navigation template recreating ColorLib Sidebar V08. It features a clean white sidebar with profile info and navigation items, paired with a 2-column blog post grid on a light gray background.

## Requirements

### Sidebar

- White background sidebar, 288px wide (w-72)
- Profile section: circular photo, name "Craig David", title "Web Designer"
- Navigation items: Feed (Home, with chevron), Explore (Search, with chevron), Notifications (Bell), Direct (Send), Stats (BarChart3), Sign out (LogOut)
- Active item highlighted with left border accent (#6c757d)
- Mobile: overlay-style with hamburger toggle and X close button
- Desktop: always visible, main content offset by sidebar width
- Footer: "Made with Component Dock" linking to componentdock.com

### Main Content

- Light gray (#f5f5f5) background
- 2-column responsive grid of post cards
- 8 post cards with profile photo thumbnail, title, and date "Posted: Dec 17, 2019"

### Design

- Poppins font from Google Fonts
- Neutral color scheme with blue-gray accent (#6c757d)
- picsum.photos for placeholder images with deterministic seeds
- lucide-react for icons

### Testing

- Sidebar: profile rendering, nav items, active state switching, mobile toggle, overlay close, desktop visibility, footer link
- PostCard: title, date, image, custom className
- App: rendering, heading, grid composition, toggle, navigation landmark
