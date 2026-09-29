# NavDrawer — Implementation Tasks & Design Notes

Source: ColorLib "Bootstrap Sidebar 08"
Preview: https://colorlib.com/etc/bootstrap-sidebar/sidebar-08/
Spec: openspec/specs/template-navdrawer/spec.md

## Structure order (top to bottom)

The template is a two-panel horizontal layout:

1. **Main content area** (left, flex-grow)
   - Heading
   - Two body paragraphs (lorem ipsum)
2. **Sidebar** (right, fixed 270px)
   - Categories heading
   - 4 top-level category items with dropdown submenus:
     - Mens Shoes (7 sub-items: Casual, Football, Jordan, Lifestyle, Running, Soccer, Sports)
     - Mens Shoes (duplicate — keep as-is for fidelity, or rename second to "Womens Shoes")
     - Accessories (6 sub-items: Nicklace, Ring, Bag, Sacks, Lipstick, + one more)
     - Clothes (6 sub-items: Jeans, T-shirt, Jacket, Shoes, Sweater, + one more)
   - Tag Cloud heading + 8 tag pills
   - Newsletter heading + email form

## Section-by-section fidelity notes

### Layout container
- Desktop: `display: flex; align-items: stretch` — content and sidebar side by side
- Mobile (<768px): sidebar max-width shrinks to 180px, no left border

### Main content area
- Padding: 1.5rem mobile, 3rem on md+ screens
- Heading: h2, font-size 2rem, weight 400, color #000
- Paragraphs: gray text, 1rem, line-height 1.8

### Sidebar (#sidebar)
- Fixed width: min/max 270px
- Border-left: 1px solid rgba(0,0,0,0.05)
- White background (inherits from body)
- Transition: all 0.3s

### Category navigation
- Each top-level item is a link with `data-toggle="collapse"`
- Chevron dropdown indicator via `::after` pseudo-element (positioned absolute, right side, vertically centered)
- Sub-items indented 10px, font-size 13px
- Sub-item links have chevron-right icon prefix (SVG or lucide-react equivalent)
- Active state: text color #fc7fb2

### Tag cloud
- Tags: uppercase, 11px font, 4px 10px padding, 4px border-radius
- Default: black text, 1px solid #ccc border
- Hover: background #fc7fb2, color #fff, border-color #fc7fb2
- Layout: inline-block with margin-bottom 7px, margin-right 4px

### Newsletter form
- "Newsletter" heading (h5)
- Form with flex container
- Icon placeholder (paper plane icon — use lucide-react Send)
- Input: height 44px, border-radius 4px, border transparent, font-size 13px, color #000
- Placeholder color: rgba(0,0,0,0.7)
- Focus state: border-color #000

## Implementation steps

1. Copy simplest existing sidebar template or create from scratch in `apps/navdrawer/`
2. Set up package.json with `@free-react-templates/navdrawer`
3. Create `src/components/Sidebar.tsx` — category nav with collapsible dropdowns
4. Create `src/components/MainContent.tsx` — heading + paragraphs
5. Create `src/components/TagCloud.tsx` — tag pills with hover
6. Create `src/components/NewsletterForm.tsx` — email input
7. Compose in `src/App.tsx` with flex layout
8. Set up `src/index.css` with Tailwind @theme tokens for brand colors
9. Wire up collapse state with React useState
10. Write tests for all components (100% coverage)
11. Add footer with ComponentDock link
12. Set public/CNAME and homepage
13. Run npm install at root, verify lockfile
14. Run full verification chain
