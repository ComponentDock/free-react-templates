# SideLane — Design Notes

Source: ColorLib "Bootstrap Sidebar 02"
Preview: https://preview.colorlib.com/theme/bootstrap-sidebar-02/ (404 — screenshot only)
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/bootstrap-sidebar-170618.jpg

## Section order (top to bottom)

1. **Sidebar (fixed left, ~280px)**
   - Brand/logo text ("SideLane") — white, bold, large
   - Hamburger toggle — circular button, top-right of sidebar
   - Navigation links — vertical list, white text, separated by thin dividers
     - Home
     - About
     - Pages (with dropdown chevron)
     - Portfolio
     - Contact
   - Newsletter section — "Subscribe for newsletter" heading + email input
   - Copyright footer — small light text

2. **Main content area (right, fills remaining width)**
   - Page heading ("Sidebar #02" equivalent)
   - Body text paragraphs (lorem ipsum → replace with real copy)

## Fidelity notes

- Sidebar has a **purple gradient** background (lighter purple at top → darker purple at bottom)
- Navigation items separated by **semi-transparent white horizontal lines**
- Hamburger button is a **circle** with three horizontal white lines
- Newsletter input has a **white/light background** with subtle border
- Overall layout is **fixed sidebar + scrollable main content**
- Typography: Poppins (Google Fonts), clean and modern
- No parallax, no hero image — pure sidebar navigation pattern
- Responsive: sidebar collapses to hamburger toggle on smaller viewports

## Implementation approach

1. Create `apps/sidelane/` by copying simplest existing app as skeleton
2. Rename package to `@free-react-templates/sidelane`
3. Build `Sidebar.tsx` with gradient background using Tailwind `bg-gradient-to-b`
4. Build `NavItem.tsx` with optional dropdown chevron (lucide-react `ChevronDown`)
5. Build `NewsletterForm.tsx` with email input
6. Build `MainContent.tsx` as simple content area
7. Compose in `App.tsx` with flex layout
8. Add responsive hamburger toggle with state management
9. TDD: write tests first, then implement
10. Verify: `npm run verify:app sidelane`
