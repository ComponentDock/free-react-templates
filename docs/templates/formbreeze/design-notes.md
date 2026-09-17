# FormBreeze — Design Notes

## Replication of ColorLib Contact Form V1

### Source

- **ColorLib slug:** contact-form-v1
- **Preview:** https://colorlib.com/etc/cf/ContactFrom_v1/index.html
- **Description:** "A simple, versatile and easy-to-use contact form template"

### Layout

- Full-screen blue gradient background (#0072ff → #00c6ff)
- Centered white card (border-radius: 10px, max-width: 1163px)
- Two-column layout: illustration (left) + form (right)
- Card padding: 90px 130px 88px 148px (responsive adjustments)

### Typography

- Font: Montserrat (Google Fonts) — Regular, Bold, ExtraBold
- Title: "Get in touch" — Montserrat ExtraBold, 24px, #333333
- Inputs: Montserrat Bold, 15px, #666666

### Form Fields

- Name (text input)
- Email (email input)
- Subject (text input)
- Message (textarea)
- All inputs: height 50px, border-radius 25px (pill), bg #e6e6e6
- Placeholder color: #999999

### Button

- Text: "Send Email" with arrow icon (Send from lucide-react)
- Background: #57b846 (green)
- Hover: #333333 (dark)
- Border-radius: 25px (pill)
- Arrow slides right on hover (translateX)

### Illustration

- Left column: decorative chat bubble illustration with icons
- Uses lucide-react icons (MessageCircle, Mail, User)
- Gradient circles as decorative elements

### Footer

- Fixed position at bottom
- "More templates at Component Dock"
- Links to https://www.componentdock.com/

### Responsive

- Mobile (<768px): illustration hidden, form full width
- Tablet (<992px): reduced padding
- Small mobile (<576px): minimal padding

### Validation

- Original uses custom validation with alert tooltips
- React version uses native form validation + controlled state
