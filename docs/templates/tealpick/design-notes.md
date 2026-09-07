# TealPick — Design Notes

Source: ColorLib Multiselect 13
Preview: https://preview.colorlib.com/theme/bootstrap/multiselect-13/

## Structure Order

1. Page wrapper (full viewport, centered, #efefef bg)
2. Heading ("Multi-Select #3", centered)
3. Instruction text ("Names separate with comma ','")
4. Dropdown container (7-col centered)
   - Select2-style multiselect with search
   - Tag pills for selected items
   - Option list with teal green highlight
5. Footer ("Made with Component Dock")

## Section-by-Section Fidelity Notes

### Page Wrapper

- Background: #efefef (light gray)
- Content padding: 7rem top/bottom
- Centered vertically and horizontally

### Heading

- Text: "Multi-Select #3"
- Font: Roboto, 20px, weight 400
- Color: #212529 (Bootstrap default)
- Centered

### Instruction Text

- Text: "Names separate with comma ','"
- Font: Roboto, weight 300
- Color: #b3b3b3 (muted gray)
- Centered below heading

### Dropdown Container

- Bootstrap col-7, centered
- Uses Select2-style multiselect pattern
- Options: Joefrey, Robert, Jorge, Mark, Luke, John, James, Ryan, Ronnie

### Dropdown Panel

- Border: none
- Border-radius: 0px (square corners — key difference from Multiselect 12)
- Shadow: 0 15px 30px 0 rgba(0,0,0,0.2)
- Overflow: hidden

### Tag Pills (Selected Items)

- Background: #29c7ac (teal green — key difference from Multiselect 12)
- Border: none
- Text: #fff (white)
- Font-size: 14px
- Padding: 2px 10px
- Border-radius: 0 (square corners)
- Remove button: rgba(255,255,255,0.5), hover #fff

### Option List

- Highlighted option: #29c7ac bg, white text (teal green)
- Selected option (in list): #f4f4f4 bg
- Hover on selected: #ddd bg, #000 text
- Border-radius: 0 (square corners)

### Form Control

- Border-radius: 0 !important (square corners)

### Footer

- Standard "Made with Component Dock" link
- Links to https://www.componentdock.com/

## Key Differences from Multiselect 12 (Zinnia)

1. Accent color: #29c7ac (teal green) vs #f67280 (coral pink)
2. Border-radius: 0px (square) vs 7px (rounded)
3. Options: Names (Joefrey, Robert, etc.) vs US States (Alaska, Hawaii, etc.)
4. Heading: "Multi-Select #3" vs "Multi-Select #2"
5. Instruction: "Names separate..." vs "State separate..."

## Implementation Notes

- Use React state for selected items array
- Implement live search by filtering options against input
- Tag pills: teal green bg, white text, square corners, remove button with × icon
- Dropdown: positioned below input, square corners, shadow
- Accessibility: keyboard navigation, aria-expanded, role="listbox"
- Placeholder images: not needed (text-only component)
- No external dependencies beyond Tailwind and Lucide icons
