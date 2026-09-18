# Cartofield — Prep Notes

**Source:** ColorLib Contact Form V19
**Preview:** https://preview.colorlib.com/theme/contact-form-v19/ (404 — screenshot used as sole reference)
**Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/ContactFrom_v19.jpg

## Structure (section order)

1. Map Background + Centered Contact Card (single full-viewport section)

## Design notes

- **Layout:** Full-viewport with a map background. A single white card is centered (both axes).
- **Map background:** Blue-gray tinted map showing a geographic area (Manhattan/NYC in original). Use a placeholder: `https://picsum.photos/seed/cartofield-map/1920/1080` or a CSS gradient to simulate the map feel.
- **Card:** White (#ffffff), max-width ~500px, centered, with subtle box-shadow.
- **Heading:** "Send Us A Message" — dark charcoal (#333333), large sans-serif.
- **Email field:** Input with an envelope icon (lucide-react `Mail`) on the left side. Placeholder: "Your Email Address". Light gray border.
- **Message textarea:** Multi-line textarea. Placeholder: "How Can We Help?". Light gray border, min-height ~120px.
- **Submit button:** "SEND MESSAGE" — blue background (#4a7ec5), white text, slightly rounded (border-radius ~4px), not full-width (auto width with padding).

## Fidelity notes

- The email field has an inline envelope icon — use `lucide-react` `Mail` icon.
- The button text is "SEND MESSAGE" (all caps).
- The map background is the key visual differentiator from other contact forms.
- On mobile: card takes near-full width, centered with horizontal padding.
- No social icons in this template (unlike V18).
