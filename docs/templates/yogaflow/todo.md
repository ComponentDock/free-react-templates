# YogaFlow — Implementation Todo

## Template info
- **Name:** yogaflow
- **Source:** ColorLib Regform 22
- **Preview:** https://colorlib.com/etc/regform/colorlib-regform-22/
- **Description:** Yoga class registration form with split layout (image + form card)

## Structure order (section-by-section)

1. **App.tsx** — Full-viewport wrapper with background image, centered card container
2. **Card.tsx** — White card with rounded corners, shadow, flex row layout
3. **ImagePanel.tsx** — Left side image with rounded corners (yoga class placeholder)
4. **FormPanel.tsx** — Right side form with heading, inputs, textarea, button
5. **Footer.tsx** — Component Dock attribution

## Component breakdown

### App.tsx
- Full viewport height (`min-h-screen`)
- Background: picsum yoga image, cover, center
- Flexbox centered content
- Card: white bg, rounded-2xl, shadow-lg, flex row

### Card.tsx (or inline in App)
- Min-width on desktop (~861px), max-width on tablet
- Flex row: image left (~36%), form right (~64%)
- Responsive: stacks vertically on mobile

### ImagePanel.tsx
- Rounded-xl image
- Slightly offset with negative margin/transform on desktop
- Full width on mobile

### FormPanel.tsx
- Heading: "Make An Appointment" — El Messiri font, uppercase, centered, text-gray-700
- Row 1: Name input + Email input (flex, gap-5)
- Row 2: Phone input + Class select (flex, gap-5)
- Select: custom chevron icon (lucide ChevronDown), appearance-none
- Textarea: Message, ~130px height
- Button: "Book Now" with ArrowRight icon, centered, bg-teal-300 (#84cde1), hover:bg-cyan-400, uppercase, medium weight, rounded, pulse animation on hover

### Footer.tsx
- "Made with Component Dock" linking to https://www.componentdock.com/

## Design fidelity notes

- **Font mapping:** Montserrat → Google Fonts `Montserrat` (400, 500). El Messiri → Google Fonts `El Messiri` (600).
- **Button color:** #84cde1 → Tailwind `bg-[#84cde1]` or custom token. Hover: #17c8f8 → `hover:bg-[#17c8f8]`.
- **Input styling:** Border #e6e6e6, focus border #f4d5cc (peach). Placeholder #999. Rounded-lg (5px).
- **Card shadow:** `shadow-[0_0_10px_0_rgba(0,0,0,0.2)]`
- **Background image:** Use `https://picsum.photos/seed/yogaflow-bg/1920/1080` for deterministic placeholder.
- **Image offset:** On desktop, the image panel slightly overlaps the card via `transform: translateX(-94px)` in original — approximate with negative margin.
- **Select dropdown:** Custom chevron via lucide ChevronDown, positioned absolute right, `appearance-none` on select.
- **Hover animation:** Button uses pulse animation on hover (original uses hvr-back-pulse). Implement with Tailwind `hover:animate-pulse` or custom keyframes.
- **Responsive:** Below 767px, card becomes column, image full width, form rows stack, no shadow/border-radius.
- **No ColorLib references** in any app file — provenance only in spec and TEMPLATES.md.

## Dependencies
- lucide-react: ArrowRight, ChevronDown icons
- Google Fonts: Montserrat (400, 500), El Messiri (600)
- No other external dependencies needed
