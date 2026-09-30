# Sidebarix — Design Notes & Task Outline

**Source:** ColorLib Sidebar V02 (https://colorlib.com/wp/template/colorlib-sidebar-v02/)
**Preview:** Unreachable (404). Design from TEMPLATES.md screenshot only.
**New name:** sidebarix

## Layout structure

Two-panel layout: fixed left sidebar (~300px) + flexible right content area.

### Section order (left to right, top to bottom)

1. **Sidebar Profile Panel** (fixed left, ~300px)
   - Profile photo (large, square-ish, ~200px)
   - Name + verified badge (inline)
   - Stats row: "{N} Photos · {N}k Followers"
   - Bio paragraph (3-4 lines, lorem ipsum)
   - "Favourite Tags" heading + comma-separated tags
   - "Activity" heading + occupation text
   - "Location" heading + location text
   - "Fav Profiles" heading + row of 4-5 small circular avatars

2. **Main Content Area** (right, fills remaining width)
   - Close (X) button at top-left
   - Blog post grid: 2 columns
   - Each card: small square thumbnail (left, ~60px) + title (bold) + "Posted: date" (gray)
   - Cards are separated by horizontal lines or spacing (no visible borders/shadows)
   - 8 sample posts shown

## Fidelity notes

- **No strong brand color** — this is a clean white/minimal template
- **Typography:** system sans-serif, no custom font needed
- **Sidebar is fixed-position** on desktop, becomes slide-in drawer or top panel on mobile
- **Verified badge:** small green/teal circle with checkmark icon
- **Post cards:** no borders, no shadows — just spacing between rows
- **Close button:** thin X icon, likely positioned absolute at top-left of content area
- **Fav profiles:** small circular avatars (~32px), possibly with subtle border

## Tasks

1. Create `apps/sidebarix/` workspace from simplest existing app
2. Build `Sidebar.tsx` — profile panel component
3. Build `PostCard.tsx` — individual blog post card
4. Build `PostGrid.tsx` — 2-column grid container
5. Build `CloseButton.tsx` — X close icon
6. Compose in `App.tsx` — sidebar + content layout
7. Add responsive breakpoints (mobile sidebar collapse)
8. Write tests (100% coverage)
9. Verify: `scripts/verify-app.sh sidebarix`
