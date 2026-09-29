# NavPanel — Design Notes & Task Outline

**Source:** ColorLib Bootstrap Sidebar V04
**Preview:** https://preview.colorlib.com/downloads/free/bootstrap-sidebar-04.zip
**Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/bootstrap-sidebar-170630.jpg

## Task Outline

1. Scaffold app from existing template (copy simplest sidebar app or bare template)
2. Implement Sidebar component
3. Implement ContentArea component
4. Implement hamburger toggle with state management
5. Add responsive breakpoint logic (< 992px sidebar hidden)
6. Wire up App.tsx layout (flex container)
7. Add Poppins font via Google Fonts link in index.html
8. Set up Tailwind theme tokens (brand blue, sidebar dark, etc.)
9. Write component tests (Vitest + RTL)
10. Write App-level integration tests
11. Verify 100% coverage
12. Add footer with Component Dock link
13. Configure vite.config.ts, package.json, CNAME, homepage
14. Final verification: typecheck + lint + test + build

## Section-by-Section Fidelity Notes

### Sidebar (nav#sidebar)
- Fixed 250px width, dark #212121 background
- Top: logo bar with #2f89fc background, white "Project Name" text, padding 10px 30px, font-weight 700, font-size 20px
- Navigation list: unstyled, each item has 15px 30px padding, 16px font, semi-transparent white text (rgba(255,255,255,0.6)), bottom border rgba(255,255,255,0.1)
- Active item: white text, no background (transparent)
- Hover: background becomes #2f89fc, text white, bottom border matches
- Icons: inline SVG or lucide-react equivalents (home, user, note/sticky, plane)
- Sub-items (if any): 10px left margin, 14px font

### Toggle Button (.custom-menu)
- Positioned absolute, top-right of sidebar, offset margin-right: -50px
- On desktop: positioned at top-right edge of sidebar
- On mobile (<992px): repositioned, top: 10px
- Button is transparent background, hamburger icon (3 bars), black color
- Click toggles sidebar via class "cl-active" (adds margin-left: -250px)

### Content Area (div#content)
- White background, min-height 100vh
- Padding: 1.5rem mobile, 3rem desktop (768px+)
- Transition: all 0.3s ease
- Heading: "Sidebar #04", margin-bottom 1.5rem, font-weight 500, font-size 2rem
- Body text: 14px Poppins, color gray, line-height 1.8

### Responsive Breakpoints
- >= 992px: sidebar visible (margin-left: 0)
- < 992px: sidebar hidden (margin-left: -250px), toggle visible
- Sidebar transition: 0.3s ease on all properties

## Design Token Mapping (Tailwind)

```css
@theme {
  --color-brand: #2f89fc;
  --color-brand-hover: #0069d9;
  --color-sidebar-bg: #212121;
  --color-sidebar-text: rgba(255, 255, 255, 0.6);
  --color-sidebar-border: rgba(255, 255, 255, 0.1);
  --font-family-body: "Poppins", Arial, sans-serif;
}
```
