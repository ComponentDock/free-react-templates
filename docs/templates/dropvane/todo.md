# DropVane — Implementation Notes

## Source
- ColorLib: Dropdown V10
- URL: https://colorlib.com/wp/template/dropdown-10/
- Preview: https://preview.colorlib.com/theme/bootstrap/dropdown-10/

## Structure order
1. Full-page section with centered container
2. Heading row: "Dropdown #10" (28px, black, centered)
3. Button group row: "Request A Quote" trigger button
4. Dropdown panel: green header bar + consultation form

## Section-by-section fidelity notes

### Page container
- `.ftco-section` padding 3em 0
- Container max-width 1140px centered
- Background: #fafafa (body background)

### Heading
- `<h2>` with class `heading-section`
- Font-size 28px, color #000, font-weight 400
- Margin bottom 1rem, text-center

### Dropdown trigger button
- Bootstrap btn-group wrapper (centered, d-flex justify-content-center)
- Button: "Request A Quote" label
- Background: #94aa2a (olive green)
- Text: #ffffff
- Border-radius: 5px
- Box-shadow: 0px 10px 20px -6px rgba(0,0,0,0.12)
- Hover: background #708120

### Dropdown form panel
- White background (#ffffff)
- Box-shadow: 0px 10px 34px -20px rgba(0,0,0,0.41)
- Min-width: 20rem
- Margin-top: 20px (relative to button)
- Left-aligned on desktop, centered on mobile (< 768px)
- Arrow decoration: CSS pseudo-elements pointing up toward button (border trick)
  - After arrow: border-bottom-color #94aa2a
  - Before arrow (shadow): border-bottom-color rgba(0,0,0,0.02)

### Form header bar
- Background: #94aa2a (matches brand)
- Padding: 1.5rem (py-4 px-4)
- Text: "Consultation" — h3, font-size 20px, font-weight 700, color #fff
- Border-radius: 4px 4px 0 0 (top corners only)

### Form fields
- Padding: 1.5rem horizontal (px-4)
- Each field: form-group with margin-bottom
- Input height: 48px
- Border: 2px solid rgba(0,0,0,0.05)
- Border-radius: 4px
- Font-size: 16px
- Placeholder color: rgba(0,0,0,0.4)
- Focus: border-color rgba(0,0,0,0.1), no box-shadow
- Fields: Full Name, Email Address, Subject, Message (textarea, rows=3)

### Submit button
- "Send A Message" button inside the form
- Same styling as trigger: #94aa2a background, white text, 5px radius
- Margin-bottom: 20px
- Box-shadow same as trigger

### Component library notes
- Use lucide-react icons if needed (no icons in original, but consider envelope for form)
- Implement dropdown toggle with useState + useClickOutside hook
- Form fields are display-only (no actual submission logic needed)
- Use `cn()` from packages/ui for class composition

### Testing considerations
- Toggle open/close state on button click
- Close on outside click (useClickOutside hook)
- Verify all 4 form fields render with correct placeholders
- Verify "Consultation" heading in form header
- Verify "Send A Message" button is present
- Accessibility: aria-expanded on trigger button, aria-haspopup on dropdown
- Form inputs should accept user input (controlled or uncontrolled)
