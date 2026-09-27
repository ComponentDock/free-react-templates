# Regfest — Implementation Tasks & Design Notes

Source: ColorLib Regform 21
Preview: https://preview.colorlib.com/theme/colorlib-regform-21/ (unreachable; screenshot used)

## Section Order (top to bottom)

1. **Full-viewport gradient background** — covers entire page
2. **Centered card** — two-column layout (form left, image right)
3. **Left column: Form**
   - Title "Set The Event" (coral serif)
   - Price display ($270, non-editable text)
   - People dropdown (default "1")
   - Name text input
   - Mail text input
   - Phone text input
   - Comment textarea
   - "Send your booking" submit button
4. **Right column: Image + Contact**
   - Full-height event/performer image
   - Contact details (address, phone, email) in coral below image
5. **Footer** — links to ComponentDock

## Component Structure

```
src/
  App.tsx              — Root layout: gradient bg + centered card
  components/
    BookingCard.tsx    — Two-column card container
    BookingForm.tsx    — Left column: title + form fields + button
    EventInfo.tsx      — Right column: image + contact details
```

## Design Notes

- The gradient runs at ~135deg from deep purple (#5b2d8e) to mauve/pink (#c56b8a).
- The card has no visible border or shadow; dark navy left panel creates contrast.
- Form inputs use underline-only borders (no full input box backgrounds).
- Price field is a text display, not an editable input.
- People field is a select/dropdown, not a number input.
- Button has slight rounded corners (~4px radius).
- Contact text is the same coral accent color as the title.
- No parallax, no navbar, no sections beyond the single card layout.

## Implementation Tips

- Use `bg-gradient-to-br from-[#5b2d8e] via-[#8b4494] to-[#c56b8a]` for gradient.
- Card: `max-w-[700px]` centered with `mx-auto`.
- Left panel: `bg-[#1a1040]` with padding.
- Inputs: `border-b border-white/20 bg-transparent` for underline style.
- Button: `bg-[#e8836b] text-white px-6 py-3 rounded`.
- Use picsum.photos for placeholder image: `https://picsum.photos/seed/regfest/500/600`.
- Responsive: `flex flex-col sm:flex-row` on the card.
