# Zinnia — Design Notes

Source: ColorLib Multiselect 12
Preview: https://preview.colorlib.com/theme/bootstrap/multiselect-12/

## Structure Order

1. Page wrapper (full viewport, centered, #efefef bg)
2. Heading ("Multi-Select #2", centered)
3. Instruction text ("State separate with comma ','")
4. Dropdown container (7-col centered)
   - Select2-style multiselect with search
   - Tag pills for selected items
   - Option list with coral pink highlight
5. Footer ("Made with Component Dock")

## Section-by-Section Fidelity Notes

### Page Wrapper

- Background: #efefef (light gray)
- Content padding: 7rem top/bottom
- Centered vertically and horizontally

### Heading

- Text: "Multi-Select #2"
- Font: Roboto, 20px, weight 400
- Color: #212529 (Bootstrap default)
- Centered

### Instruction Text

- Text: "State separate with comma ','"
- Font: Roboto, weight 300
- Color: #b3b3b3 (muted gray)
- Centered below heading

### Dropdown Container

- Bootstrap col-7, centered
- Uses Select2-style multiselect pattern
- Options: Alaska, Hawaii, California, Nevada, Oregon, Washington, Alabama, Utah

### Dropdown Panel

- Border: none
- Border-radius: 7px
- Shadow: 0 15px 30px 0 rgba(0,0,0,0.2)
- Overflow: hidden

### Tag Pills (Selected Items)

- Background: #f67280 (coral pink)
- Border: none (original has border-color but overrides to none)
- Text: #fff (white)
- Font-size: 14px
- Padding: 2px 10px
- Remove button: rgba(255,255,255,0.5), hover #fff

### Option List

- Highlighted option: #f67280 bg, white text
- Selected option (in list): #f4f4f4 bg
- Hover on selected: #ddd bg, #000 text

### Footer

- Standard "Made with Component Dock" link
- Links to https://www.componentdock.com/

## Implementation Notes

- Use React state for selected items array
- Implement live search by filtering options against input
- Tag pills: coral pink bg, white text, remove button with × icon
- Dropdown: positioned below input, rounded, shadow
- Accessibility: keyboard navigation, aria-expanded, role="listbox"
- Placeholder images: not needed (text-only component)
- No external dependencies beyond Tailwind and Lucide icons
