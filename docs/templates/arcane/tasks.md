# Arcane — Implementation Tasks & Design Notes

## Template Overview

- **Source**: ColorLib Wizard 22 (split-screen form wizard)
- **Source slug**: `colorlib-wizard-22`
- **Preview URL**: `https://preview.colorlib.com/theme/colorlib-wizard-22/` (404 at prep time — fallback to ColorLib listing page CSS + screenshot)
- **Screenshot**: `https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-free-wizard-22.jpg`
- **Category**: Forms / Multi-step Wizard
- **Description**: Responsive split-screen form wizard for bookings and appointments

## Structure Order (section-by-section)

### 1. SplitScreenLayout (container)

- Full viewport height (`min-h-screen`)
- Flexbox row on desktop: `flex-row`
- Flexbox column on mobile: `flex-col`
- Left panel: 50% width, background image/illustration area
- Right panel: 50% width, white background, centered form

### 2. VisualPanel (left side)

- Decorative background: use `picsum.photos/seed/arcane-visual/1200/800` as placeholder
- Overlay with subtle gradient or opacity
- May include branding text or logo overlay
- Hidden on mobile, visible on desktop (`hidden md:block`)

### 3. ProgressIndicator (top of form panel)

- Horizontal bar with 3 numbered circles connected by lines
- Circle states:
  - Active: bg `#77CC6D`, text white, scale up slightly
  - Completed: bg `#77CC6D`, white checkmark icon
  - Future: border `#eee`, text gray
- Connecting lines: green when completed, gray when future
- Labels below each circle: "Personal Info", "Booking Details", "Confirmation"

### 4. Step1-PersonalInfo

- Heading: "Personal Information"
- Fields:
  - Full Name (text input, required)
  - Email (email input, required)
  - Phone (tel input, required)
- Validation: inline errors below each field
- Button: "Next" (right-aligned)

### 5. Step2-BookingDetails

- Heading: "Booking Details"
- Fields:
  - Date (date input or custom date picker, required)
  - Time Slot (select: Morning, Afternoon, Evening, required)
  - Service Type (select: Consultation, Follow-up, Assessment, Other)
  - Notes (textarea, optional)
- Validation: inline errors for required fields
- Buttons: "Back" (left) + "Next" (right)

### 6. Step3-Confirmation

- Heading: "Confirm Your Booking"
- Summary card showing all entered data in a read-only format
- Terms and Conditions checkbox (required)
- Buttons: "Back" (left) + "Submit" (right, green accent)

### 7. SuccessScreen

- Large checkmark icon (green, animated)
- Heading: "Booking Confirmed!"
- Subtext: "Thank you for your booking. We'll be in touch shortly."
- "Start Over" button (outlined style)

## Design Notes

### Color Palette

- Primary: `#1a73e8` (blue) — buttons, links, top bar
- Accent: `#77CC6D` (green) — step indicators, success states, active elements
- Body text: `#26282b` (near-black)
- Border: `#eee` (light gray)
- Background: `#ffffff` (white) for form panel
- Hover: `rgba(0,0,0,0.03)` for subtle hover states

### Typography

- Font: system sans-serif stack
- Body size: 16px, line-height: 1.8em
- Headings: 600 weight, slightly larger

### Component Patterns

- Use `cn()` from `packages/ui` for all class composition
- Form validation: inline error messages below each field
- Buttons: primary (blue) for Next/Submit, outlined for Back/Start Over
- Success icon: use `lucide-react` CheckCircle2

### Responsive Breakpoints

- Mobile (< 768px): single column, visual panel hidden
- Desktop (>= 768px): split-screen, 50/50 layout

### Accessibility

- Semantic `<form>`, `<fieldset>`, `<legend>` for form groups
- `aria-label` on progress indicator steps
- `aria-invalid` and `aria-describedby` for validation errors
- Focus management: focus moves to new step heading on navigation
- Keyboard: Enter to advance, Tab through fields

### Fidelity Notes

- The preview URL was 404 at prep time — design tokens extracted from ColorLib listing page CSS
- Section order matches the described "split-screen form wizard" pattern
- The split-screen visual panel is decorative (background image via picsum.photos)
- Step count (3) is based on typical ColorLib Wizard series patterns for booking forms
