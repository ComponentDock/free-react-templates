# Missive — Design Notes

## Source

- **ColorLib template:** Contact Form V12
- **ColorLib slug:** `contact-form-v12`
- **Preview URL:** https://preview.colorlib.com/theme/contact-form-v12/ (404 at prep time)
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/ContactFrom_v12.jpg

## Structure Order

1. **Full-page background** — purple gradient overlay on a cityscape photograph
2. **Centered card** — white, rounded corners, two-column layout
3. **Left column: Illustration** — envelope/mail icon with abstract decorative elements (green triangle, yellow triangle, red circle, green circle, dotted elements, small rectangular shapes)
4. **Right column: Contact form**
   - Heading: "Get in touch" (bold, dark)
   - Name input (user icon prefix, light gray bg, rounded)
   - Email input (email icon prefix, light gray bg, rounded)
   - Message textarea (light gray bg, rounded, taller)
   - "Send" button (purple bg, white text, full-width, pill-shaped)

## Fidelity Notes

### Background
- The original uses a full-viewport photo (cityscape) with a purple gradient
  overlay. For the recreation, use a `picsum.photos` cityscape image as
  `background-image` with a CSS gradient overlay (`linear-gradient` in purple).

### Card
- White background, centered vertically and horizontally, rounded corners
  (~12px), subtle box-shadow for depth.
- Two-column flex layout: illustration ~40%, form ~60%.

### Illustration
- The original shows an envelope icon with abstract decorative shapes around it.
- For recreation: use lucide-react `Mail` icon enlarged, with decorative
  floating elements (small colored triangles, circles) positioned absolutely
  around it. Match the purple primary color for the envelope.

### Form Fields
- All inputs have light gray (`#f0f0f0`) backgrounds, no visible borders,
  rounded corners (~8px), generous padding (~12px 16px).
- Name field: user icon (lucide-react `User`) prefix.
- Email field: email icon (lucide-react `Mail`) prefix.
- Message textarea: same styling, taller (~120px min-height).

### Button
- Full-width, purple (`#7c3aed`), white text, heavily rounded (pill shape,
  border-radius ~25px).
- Hover: slightly darker purple or subtle lift.

### Typography
- Google Fonts Poppins: bold for heading, regular for body/inputs.
- Heading: "Get in touch" — centered above the form fields within the right column.

### Footer
- Minimal footer with "Component Dock" branding linking to
  https://www.componentdock.com/
- Should blend with the purple gradient background.

## Component Breakdown

| Component       | Description                                      |
| --------------- | ------------------------------------------------ |
| `MissivePage`   | Root: full-page bg + centered card               |
| `ContactCard`   | The white card container (flex two-column)       |
| `Illustration`  | Left panel: envelope icon + decorative shapes    |
| `ContactForm`   | Right panel: heading + inputs + button           |
| `FormField`     | Reusable input with icon prefix (Name, Email)    |
| `MessageArea`   | Textarea for message field                       |
| `SendButton`    | Purple pill button                               |
| `Footer`        | Component Dock branded footer                    |
