# Coursegrid — Implementation Tasks & Design Notes

## Source

- **ColorLib:** Dropdown 19 — "Free Courses Dropdown Snippet"
- **URL:** https://colorlib.com/wp/template/dropdown-19/
- **Preview:** https://preview.colorlib.com/theme/bootstrap/dropdown-19/

## Structure Order

1. App shell (`App.tsx`) — centered container with heading + dropdown
2. `CoursesDropdown.tsx` — the mega-menu trigger + menu component
3. Footer — standard Component Dock link

## Section-by-Section Fidelity Notes

### Heading

- Centered `<h2>` with text "Dropdown #9"
- Font: Roboto, font-size 20px, standard Bootstrap .my-5 .text-center

### Trigger

- Inline-block anchor with layers icon (lucide-react `Layers`), text "Courses",
  and down-arrow (lucide-react `ChevronDown`)
- Badge: absolute-positioned 24px circle, Bootstrap primary blue (#007bff),
  white text, 2px white border
- Arrow rotates 180deg when menu is open (CSS transition 0.3s transform ease)
- Trigger color: #888, transitions to #000 on show

### Mega-Menu

- White background, box-shadow 0 15px 30px 0 rgba(0,0,0,0.2)
- Min-width 680px, centered below trigger (left 50%, transform translate -50%)
- Padding: 10px outer, 20px inner for mega-menu
- Hidden by default (opacity 0, visibility hidden)
- Active state: opacity 1, visibility visible, margin-top 10px
- Transition: 0.3s for margin-top, opacity, visibility

### Three Columns (Mega-Menu Content)

- Flexbox layout, 3 equal columns (33.333% each)
- Each column: padding 10px left/right

#### Column 1 — Math (Blue)
- Heading: "Math", text-primary (#007bff), font-size 14px, uppercase, weight 700
- Left border: 2px solid #007bff on the list
- Links: Early math(5), Pre-Algebra(22), Algebra 1(12), Geometry(81),
  Trigonometry(9), Precalculus(16)

#### Column 2 — Computing (Amber)
- Heading: "Computing", text-warning (#ffc107), font-size 14px, uppercase, weight 700
- Left border: 2px solid #ffc107 on the list
- Links: Computer Programming(5), Computer Science(12), Hour of Code(81),
  Computer Animation(9), Graphic Design(16), Logo Design(22)

#### Column 3 — Economic (Red)
- Heading: "Economic", text-danger (#dc3545), font-size 14px, uppercase, weight 700
- Left border: 2px solid #dc3545 on the list
- Links: Microeconomics(32), Macroeconomics(61), Finance(73),
  Capital Markets(88), World Economy(19), Accounting(93)

### Link Styling

- Font-size 14px, font-weight 400, color gray
- Hover: color #000, transition 0.3s all ease
- No text-decoration (important)
- Block display, padding 5px top/bottom

## Implementation Notes

- Use `useState` for open/close toggle
- Click outside to close: use `useRef` + `useEffect` with document click listener
- ARIA: `aria-haspopup="true"`, `aria-expanded` toggled with state
- Icons: lucide-react `Layers` for trigger icon, `ChevronDown` for arrow
- Placeholder images not needed (no images in this template)
- Footer: standard "Made with Component Dock" link
