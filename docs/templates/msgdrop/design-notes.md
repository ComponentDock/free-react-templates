# MsgDrop — Design Notes & Task Outline

## Source
- ColorLib: Contact Form V13
- URL: https://colorlib.com/wp/template/contact-form-v13/
- Preview: https://preview.colorlib.com/theme/contact-form-v13/ (404 at research time)

## Screenshot Analysis
The template is a two-column split-screen contact form:
- **Left column** (~50%): Dark-themed map image (NYC area streets/satellite) with a green phone badge overlay
- **Right column** (~50%): Clean white panel with the contact form

### Left Panel (Map)
- Full-height dark map background
- Green pill-shaped badge positioned mid-left area
- Badge contains phone icon + number "(+00) 345 6389"
- Badge has rounded corners, solid green background, white text

### Right Panel (Form)
- White background, padded content area
- Heading: "Contact Us" — large, bold, dark text (~32-36px)
- Four form fields stacked vertically:
  1. **Name** — label + text input, bottom border only (no full outline)
  2. **Email** — label + text input, bottom border only
  3. **Phone** — label + text input, placeholder "Phone Number..."
  4. **Message** — label + textarea, placeholder "Questions/Comments..."
- Each field has a thin bottom border (gray normally, coral/red on focus)
- Validated fields show a green checkmark icon on the right side
- Send button: full-width, coral-to-pink gradient (#FF6B6B → #FF3CAC), pill-shaped, white "Send" text

### Color Tokens
| Element | Color |
|---|---|
| Map background | Dark satellite image (use placeholder) |
| Phone badge | #4CAF50 green, white text |
| Form background | #FFFFFF |
| Heading | #222222 |
| Labels | #333333 |
| Input text | #333333 |
| Placeholder | #999999 |
| Focus underline | #FF6B6B (coral) |
| Button gradient start | #FF6B6B (coral) |
| Button gradient end | #FF3CAC (pink/magenta) |
| Checkmark | #4CAF50 (green) |

### Typography
- Clean sans-serif (Roboto-like) — use Inter or system font
- Heading: bold, ~32-36px
- Labels: normal weight, ~14px
- Input text: normal weight, ~16px
- Button: medium/semibold, ~16px

### Button Styling
- Full-width within form container
- Linear gradient left-to-right: coral to pink
- Fully rounded (pill shape, border-radius ~50px)
- Padding: ~14px vertical, ~32px horizontal
- White text, no border

## Section Order (for implementation)
1. Split-screen layout container (flex, two equal columns)
2. Map panel (left) — background image + phone badge overlay
3. Form panel (right) — heading + form fields + button
4. Footer (Component Dock attribution)

## Component Outline
- `App.tsx` — compose layout
- `components/MapPanel.tsx` — left panel with map bg + PhoneBadge
- `components/PhoneBadge.tsx` — green pill badge with icon + number
- `components/ContactForm.tsx` — right panel with form
- `components/FormField.tsx` — reusable labeled input with focus underline + validation
- `components/SendButton.tsx` — gradient pill button
- `components/Footer.tsx` — Component Dock link

## Implementation Notes
- Use `picsum.photos/seed/msgdrop-map/960/939` for map placeholder
- Use lucide-react for Phone, Check, User, Mail, MessageSquare icons
- Tailwind classes: `bg-gradient-to-r from-[#FF6B6B] to-[#FF3CAC]` for button
- Phone badge: `bg-[#4CAF50] text-white rounded-full px-4 py-2 inline-flex items-center gap-2`
- Form fields: border-b-2 with transition, focus state changes border color
- Responsive: `flex-col md:flex-row` for the split layout
