# Sidenote — Task Outline

**Template:** Sidenote (recreation of ColorLib Sidebar V03)
**Preview:** https://preview.colorlib.com/theme/colorlib-sidebar-v03/
**Status:** In progress

## Components

1. `NewsletterSidebar` — right sidebar panel (blue bg, heading, description, email form)
2. `PostCard` — individual blog post card (thumbnail, title, date)
3. `PostGrid` — grid/list of PostCards
4. `CloseButton` — X button to toggle sidebar on mobile
5. `Footer` — simple footer with Component Dock link

## Files

- `src/App.tsx` — layout composition
- `src/components/NewsletterSidebar.tsx` — sidebar
- `src/components/PostCard.tsx` — post card
- `src/components/PostGrid.tsx` — post grid
- `src/components/CloseButton.tsx` — close toggle
- `src/components/Footer.tsx` — footer
- `src/index.css` — theme tokens
- `src/test/setup.ts` — test setup

## Design notes

- Bright blue-indigo sidebar (#4361ee) with white text
- Large heading "Share Your Article to the World"
- Email input + SIGN UP button (white bg, dark text)
- 4 blog post cards with thumbnail + title + date
- Close button (X) toggles sidebar on mobile
- Responsive: side-by-side on desktop, stacked on mobile
