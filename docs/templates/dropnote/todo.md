# DropNote — Implementation Notes

Recreation of ColorLib "Contact Form V19"
Source: https://colorlib.com/wp/template/contact-form-v19/
Preview: https://preview.colorlib.com/theme/contact-form-v19/ (404 — screenshot used)

## Section structure (top to bottom)

1. **Map background** — Full-viewport interactive map (Google Maps or Leaflet with
   OpenStreetMap tiles). Covers the entire viewport behind the form card.
2. **Contact form card** — Centered white card overlaid on the map with:
   - Heading: "Send Us A Message"
   - Email input with envelope icon + placeholder "Your Email Address"
   - Textarea with placeholder "How Can We Help?"
   - Blue "SEND MESSAGE" button (uppercase)

## Design notes

- The template is extremely minimal — single section, single component.
- The map is the dominant visual element; the form card floats over it.
- Card uses white background, subtle box-shadow, slight border-radius (~4px).
- Button color: brand blue (#3b82f6 approx), uppercase white text, rounded.
- Input fields: light gray borders, system font, no heavy styling.
- Overall aesthetic: clean, modern, utilitarian — nothing ornate.

## Implementation approach

- Use Leaflet + OpenStreetMap for the map (avoids Google Maps API key requirement).
- The map fills `100vh` and is positioned behind the card with `z-index`.
- Card is absolutely centered with flexbox or `absolute inset-0 flex items-center justify-center`.
- Form state managed with React state; validate email + message on submit.
- Responsive: card width adapts (max-width on desktop, full-width on mobile with padding).

## Fidelity priorities

1. Map fills full viewport behind card (most distinctive feature)
2. Centered white card with shadow
3. Email input with icon
4. Blue uppercase "SEND MESSAGE" button
5. Responsive behavior on mobile
