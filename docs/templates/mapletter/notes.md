# MapLetter — Design & Implementation Notes

Source: ColorLib Contact Form V20
Preview: https://preview.colorlib.com/theme/contact-form-v20/ (404 at prep time)
Reference: Screenshot only (see spec for URL)

## Structure (top to bottom)

1. **Map background** — Full-viewport embedded map (greyscale/desaturated).
   Use an `<iframe>` or a static map image from a placeholder service.
   The original uses Google Maps; recreate with a greyscale map embed or
   a static map image styled with CSS `filter: grayscale(100%)`.

2. **Contact form card** — Centered white card floating over the map.
   - Max-width ~520 px, centered with `mx-auto` and vertical centering
   - Rounded corners (~10-12 px), subtle `shadow-lg` or similar
   - Generous padding (2-3rem)

3. **Envelope icon** — Outline-style mail icon at card top center.
   Use `lucide-react` `Mail` icon, ~40 px, dark gray.

4. **Heading** — "Drop Us A Message", centered, dark sans-serif (~28 px).
   Use Poppins from Google Fonts.

5. **Input row** — Two fields side by side:
   - Name (text input, placeholder "Name")
   - Email Address (email input, placeholder "Email Address")
   - Use a flex row with gap, light gray borders (#ddd), white background

6. **Textarea** — Full width, "Write Us A Message" placeholder.
   Same border treatment as inputs, min-height ~120 px.

7. **Send button** — Red/coral (#ff4b4b or #e74c3c), white text,
   compact size, positioned bottom-right of the form card.
   Use `self-end` or absolute positioning within the card.

8. **Footer** — Minimal; must link to https://www.componentdock.com/
   ("Component Dock").

## Fidelity notes

- The original is a single-page form with NO navbar, NO additional sections.
- The map background is the dominant visual element — the form card floats on top.
- The map should be greyscale/desaturated to not compete with the form.
- Input fields have no visible labels — placeholders serve as labels.
- The "Send" button is the only colored element (red/coral) — it's the visual anchor.
- Card shadow should be subtle but enough to separate from the map.
- The form is not functional in the original — just visual; keep it visual-only.
- Responsive: card should remain centered and readable on mobile; inputs
  may stack vertically on small screens.

## Component plan

- `App.tsx` — composes MapBackground + ContactCard
- `components/MapBackground.tsx` — full-viewport map embed/image
- `components/ContactCard.tsx` — the white card container
- `components/ContactForm.tsx` — icon, heading, inputs, textarea, button

## Assets

- Map: Use a static map image from `https://picsum.photos/seed/mapletter-map/1920/1080`
  styled with `grayscale(100%)` CSS filter, OR an iframe embed to OpenStreetMap
- Icon: `lucide-react` `Mail` icon
- Font: Poppins via Google Fonts `<link>` in index.html
- No other external assets needed
