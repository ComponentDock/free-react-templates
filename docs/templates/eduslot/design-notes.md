# EduSlot — Implementation Tasks

## Overview
Education appointment form template. Full-viewport background image with dark overlay, left-aligned white card containing a multi-section form. Clean, minimal design.

## Component Structure (in order)

1. **App.tsx** — Root layout: full-viewport container with background image + overlay + card
2. **Background.tsx** — Full-bleed background image (picsum.photos/seed/eduslot-classroom/1920/1080) with dark overlay (rgba(0,0,0,0.45))
3. **FormCard.tsx** — Left-aligned white card container (max-width ~55%, no border-radius, 40-48px padding)
4. **AppointmentForm.tsx** — Main form component containing all sections
5. **Header.tsx** (minimal) — Branding/ComponentDock link in top area (or footer)

## Section-by-Section Design Notes

### Background + Overlay
- Full viewport: `min-h-screen w-full`
- Background image: `bg-cover bg-center` with picsum seed
- Overlay: absolute div with `bg-black/45` (rgba(0,0,0,0.45))
- Image URL: `https://picsum.photos/seed/eduslot-classroom/1920/1080`

### Form Card
- Left-aligned: `ml-0` with `w-full max-w-[55%]` on desktop
- White background: `bg-white`
- No border-radius (sharp corners)
- Padding: `p-12` (48px)
- No shadow, no border
- Mobile: expands to near-full width

### Form Title
- Text: "EDUCATION APPOINTMENT FORM"
- Style: `text-xl font-bold uppercase tracking-wide text-gray-800`
- Font: Clean sans-serif (system/Roboto)

### Text Inputs (4 fields)
- Fields in order: Title, Your Name, Email, Phone number
- Each: bottom border only `border-b border-gray-300`
- No top/left/right borders
- Placeholder text: light gray `placeholder-gray-400`
- Padding: `py-3` vertical
- Spacing: `mb-4` between fields

### Course Type Dropdown
- Styled `<select>` element
- Right-aligned chevron icon (lucide ChevronDown)
- Bottom border only, same as text inputs
- Default option: "Course Type"

### Contact Preference Section
- Bold heading: "How would you like to be located?" — `font-bold text-gray-800`
- Two styled `<select>` dropdowns:
  1. Contact method: "By phone" (options: By phone, By email, In person)
  2. Hours: "Hours : 8am 10pm" (options: various time slots)
- Same bottom-border styling as other inputs

### Terms & Conditions
- Standard checkbox input
- Label: "I agree to the" + link "Terms and Conditions"
- Link color: `text-blue-600 underline`
- Checkbox: small, inline

### Submit Button
- Text: "Request an appointment"
- Background: `bg-[#6c63ff]` (purple/periwinkle)
- Text: white, bold
- Padding: `px-7 py-3.5`
- Border-radius: `rounded` (~4px)
- Hover: `hover:bg-[#5a52d5]`
- Left-aligned (not full-width)
- Uppercase: no (title case in original)

### Footer (minimal)
- White space below card extends to bottom
- "Made with Component Dock" link at bottom
- Link to https://www.componentdock.com/

## Design Token Mapping to Tailwind

| Original         | Tailwind class            |
|------------------|---------------------------|
| White card       | `bg-white`                |
| Dark overlay     | `bg-black/45`             |
| Purple button    | `bg-[#6c63ff]`            |
| Button hover     | `hover:bg-[#5a52d5]`      |
| Field borders    | `border-b border-gray-300`|
| Placeholder text | `placeholder-gray-400`    |
| Heading text     | `text-gray-800 font-bold` |
| Link blue        | `text-blue-600 underline` |

## Fidelity Notes
- Original has NO border-radius on card — keep sharp corners
- Original uses thin horizontal lines between fields (bottom border only)
- Original has generous vertical spacing between sections (~24px)
- Button is NOT full-width — left-aligned, moderate width
- "Request an appointment" is title case (NOT uppercase) in original
- Background image shows students in a classroom setting
- The right ~45% of viewport shows only background image (no overlay fade)
