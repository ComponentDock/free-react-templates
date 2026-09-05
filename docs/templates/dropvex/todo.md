# DropVex — Implementation Notes

## Source
- ColorLib: Dropdown V08
- URL: https://colorlib.com/wp/template/dropdown-08/
- Preview: https://preview.colorlib.com/theme/bootstrap/dropdown-08/

## Structure order
1. Full-page section with centered container
2. Heading row: "Dropdown Navbar" (28px, black, centered)
3. Button group row: brand bar + hamburger + dropdown menu

## Section-by-section fidelity notes

### Page container
- `.ftco-section` padding 5em 0
- Container max-width 1140px centered
- Background: #fafafa (body background)

### Heading
- `<h2>` with class `heading-section`
- Font-size 28px, color #000, font-weight 400
- Margin bottom 1rem, padding bottom 1rem

### Navigation bar (btn-group)
- Full-width flex container
- Background: #4d80e4 (brand blue)
- Border-radius: 4px
- Left side: brand name "Splash" in white uppercase
- Right side: hamburger icon button (60×60, darker blue #2161dd)

### Dropdown menu
- White background, right-aligned
- Box shadow: 0px 10px 34px -20px rgba(0,0,0,0.41)
- Small arrow decoration pointing up toward the button
- Items: Home, About, Services, Blog, Contact
- Each item: padding 15px 20px, bottom border rgba(0,0,0,0.05)
- Hover: background #4d80e4, text white

### Component library notes
- Use lucide-react Menu icon instead of Ionicons
- Use lucide-react ChevronRight icon for arrow indicators
- Implement dropdown toggle with useState + useClickOutside
- Split button: brand bar (flex-1) + hamburger trigger (fixed 60px width)

### Testing considerations
- Toggle open/close state on hamburger click
- Close on outside click (useClickOutside hook)
- Verify all 5 menu items render with correct labels
- Verify hover states via CSS (no JS logic to test)
- Accessibility: aria-expanded on hamburger, aria-haspopup on dropdown
