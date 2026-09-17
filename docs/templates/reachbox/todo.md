# Reachbox — Prep Notes

## Template overview

- **New name:** reachbox
- **Source:** ColorLib Contact Form V11
- **Source slug:** contact-form-v11
- **Preview:** https://colorlib.com/etc/cf/ContactFrom_v11/index.html
- **Category:** Contact Form

## Section order (top to bottom)

1. Full-viewport background image cover
2. Centered white form card (max-width 960px)
3. Form title: "Get in Touch" (uppercase, Raleway-Black, 30px)
4. Two-column row: Name input + Email input
5. Full-width: Website input (optional, no validation)
6. Full-width: Message textarea
7. Centered Submit button with gradient animation
8. Below card: Phone number callout ("Call us on +001 345 6178")

## Design fidelity notes

### Background
- Full-viewport background image with `background-size: cover`, centered
- Use `picsum.photos/seed/reachbox-bg/1920/1080` as placeholder image
- Alternative: use a solid gradient or solid color if image not suitable

### Form card
- White (#ffffff) background, 2px border-radius
- Max-width 960px, centered with flexbox (100vh flex container)
- Padding varies by breakpoint: 115px → 80px → 15px horizontal

### Typography
- Raleway Google Font: Black (title), SemiBold (labels, inputs, body),
  Bold (button)
- Title: uppercase, 30px, #333333, left-aligned
- Labels: 14px, #555555, Semibold
- Inputs: 20px, #686868, Semibold
- Button: 16px, white, Bold, uppercase

### Form fields
- Inputs: #f2f2f2 background, 62px height, 2px border-radius, 28px
  horizontal padding, 10px top margin
- Focus: background transitions to #e6e6e6 over 0.4s
- Placeholder: #adadad
- Name + Email side by side on desktop (50% width each with 30px gap),
  full width on mobile
- Textarea: min-height 162px, top padding 19px, bottom 13px

### Submit button
- Centered with `justify-content: center`
- Height 62px, min-width 150px, 2px border-radius
- Default: transparent background, white text
- Hover: gradient slides in from left (linear-gradient right: #2f91ff,
  #00c513, #2f91ff, #00c513) over 0.4s
- Implementation: use a pseudo-element (absolute, 300% width) that
  translates from left: -100% to left: 0 on hover

### Validation
- Tooltip-style error messages with white bg, #c80000 text/border
- Positioned above input, 2px border-radius, 13px font
- On desktop: visible on hover; on tablet/mobile: always visible
- Uses FontAwesome warning icon (use lucide-react AlertTriangle instead)
- z-index layering for tooltip visibility

### Phone callout
- Below the form card, white text, 20px, centered
- Max-width 960px matching card width

## Component breakdown

| Component | File | Notes |
|-----------|------|-------|
| App shell | `App.tsx` | Full viewport flex container with bg image |
| Form card | `FormCard.tsx` | White card wrapper |
| Form title | `FormTitle.tsx` | "Get in Touch" heading |
| Input field | `InputField.tsx` | Reusable labeled input |
| Textarea field | `TextareaField.tsx` | Reusable labeled textarea |
| Submit button | `SubmitButton.tsx` | Gradient animation on hover |
| Validation tooltip | `ValidationTooltip.tsx` | Error bubble component |
| Contact info | `ContactInfo.tsx` | Phone number callout |
| Form | `ContactForm.tsx` | Orchestrates all fields + validation |

## Implementation reminders

- Footer must link https://www.componentdock.com/ (branded "Component Dock")
- No ColorLib references in app code (provenance only in spec + TEMPLATES.md)
- Use `picsum.photos/seed/reachbox-N/W/H` for any placeholder images
- Icons from lucide-react (replace FontAwesome icon references)
- Use cn() from packages/ui for class merging
- Raleway via Google Fonts link in index.html
- 100% test coverage enforced
