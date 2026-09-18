# FormGlow — Design Notes & Task Outline

## Source
- ColorLib: Contact Form V14
- URL: https://colorlib.com/wp/template/contact-form-v14/
- Preview: https://preview.colorlib.com/theme/contact-form-v14/ (404 at research time)
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/ContactFrom_v14.jpg
- Description from Colorlib: "Bright and simple, that's what's up when it comes to Contact Form v14. Gradient background with a fully embeddable form that features autocomplete and validation."

## Screenshot Analysis
The template is a single-page centered contact form on a vibrant gradient background:

### Background
- Full-page horizontal gradient from warm pink/magenta (left) to soft purple/lavender (right)
- No texture or pattern — smooth solid gradient
- Gradient covers the entire viewport

### Center Card
- White background, rounded corners (~8px), subtle drop shadow
- Centered horizontally, positioned near-center vertically
- Width approximately 480-560px (relative to 1920px viewport)
- Generous internal padding (~32-40px)

### Heading
- "Contact Us" — bold, dark (~#222222), centered
- Font size ~28-32px, sans-serif

### Form Fields (top to bottom)
1. **First Name + Last Name** — side by side (50/50 row)
   - Labels: "YOUR NAME" uppercase, small font, letter-spacing
   - Both inputs have light borders, one shows "Matthew" with green checkmark
   - The right field shows "Medina" with green checkmark
2. **Email Address** — full width
   - Label: "EMAIL ADDRESS" uppercase
   - Shows "matthew@colorlib.com" with green checkmark
3. **Phone Number** — full width
   - Label: "PHONE NUMBER" uppercase
   - Shows "ex90" with red border and red X icon (invalid state)
4. **Message** — full width textarea
   - Label: "MESSAGE" uppercase
   - Placeholder: "Please enter your comments.."
   - Taller than single-line inputs (~100-120px)

### Submit Button
- Centered below form fields
- Dark near-black background (#222222)
- White text "Submit" + right-arrow icon
- Pill-shaped (fully rounded, border-radius ~24px)
- Padding ~12px vertical, ~32px horizontal

### Validation UX
- Valid fields: green border + green checkmark icon (✓) on right
- Invalid fields: red border + red X icon (✗) on right
- Neutral/unvisited: light gray border, no icon

### Color Tokens
| Element | Color |
|---|---|
| Gradient left | #E91E63 (pink/magenta) |
| Gradient right | #CE93D8 (light purple) |
| Card background | #FFFFFF |
| Heading | #222222 |
| Labels | #555555 (uppercase) |
| Input text | #333333 |
| Placeholder | #999999 |
| Input border (neutral) | #E0E0E0 |
| Valid border/checkmark | #4CAF50 (green) |
| Invalid border/X icon | #F44336 (red) |
| Button background | #222222 |
| Button text/icon | #FFFFFF |

### Typography
- Clean sans-serif (Roboto/System) — use Inter or system font
- Heading: bold, ~28-32px
- Labels: medium weight, ~12px, uppercase, letter-spacing ~1px
- Input text: normal, ~16px
- Placeholder: normal, ~14-16px, light gray
- Button: medium, ~16px

### Button Styling
- Fully rounded pill shape (border-radius ~24px)
- Dark near-black solid background
- White text + white arrow icon (→)
- Padding: ~12px 32px
- Hover: slight brightness increase
- Centered alignment

## Section Order (for implementation)
1. Full-page gradient background container
2. Centered white card with shadow
3. "Contact Us" heading
4. Form with fields: First Name + Last Name (row), Email, Phone, Message
5. Real-time validation (green check / red X per field)
6. Submit button (dark pill, centered)
7. Footer (Component Dock attribution)

## Component Outline
- `App.tsx` — compose layout (gradient bg + card + footer)
- `components/ContactCard.tsx` — white card container with shadow
- `components/ContactForm.tsx` — form logic + field composition
- `components/NameRow.tsx` — First Name + Last Name side by side
- `components/FormField.tsx` — reusable labeled input with validation state
- `components/MessageArea.tsx` — labeled textarea
- `components/SubmitButton.tsx` — dark pill button with arrow icon
- `components/Footer.tsx` — Component Dock attribution

## Implementation Notes
- Use `picsum.photos/seed/formglow-card/560/600` if any decorative element needed (none visible — pure CSS design)
- Use lucide-react for Check, X, ArrowRight icons
- Tailwind classes for gradient: `bg-gradient-to-r from-[#E91E63] to-[#CE93D8]`
- Card: `bg-white rounded-lg shadow-xl max-w-md mx-auto`
- Labels: `text-xs uppercase tracking-wider text-gray-600 font-medium mb-1`
- Inputs: `w-full border border-gray-300 rounded px-4 py-3 text-sm focus:outline-none focus:border-green-500`
- Valid state: `border-green-500` + Check icon in green
- Invalid state: `border-red-500` + X icon in red
- Button: `bg-gray-900 text-white rounded-full px-8 py-3 flex items-center gap-2 mx-auto`
- Name row: `grid grid-cols-2 gap-4` for side-by-side
- Responsive: name row stacks on `grid-cols-1` below 480px
- Use react-hook-form or useState for validation logic
- Zod schema for field validation (name required, email format, phone format, message required)
- Font: load Inter via Google Fonts link in index.html
