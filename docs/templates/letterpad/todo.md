# Letterpad — Prep Notes

Source: ColorLib Contact Form V18 (`contact-form-v18`)
New name: `letterpad`
Preview: https://preview.colorlib.com/theme/contact-form-v18/ (404; screenshot used)
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/ContactFrom_v18.jpg

## Structure order

1. Split viewport layout (no navbar)
2. Left panel — decorative background image
3. Right panel — contact form
4. Footer (Component Dock link)

## Section-by-section fidelity notes

### Split layout
- Two equal-width halves, full viewport height
- Left: decorative dark desk photo (use picsum or similar placeholder)
- Right: white background, vertically centered form content

### Contact form
- Heading: serif font (Playfair Display via Google Fonts), centered, dark color
- Fields stacked vertically with consistent spacing
- Labels: uppercase, small, dark gray
- Inputs: white background, light gray border, rounded corners
- Dropdown: native select or custom, same styling as inputs
- Send button: full-width, brand blue-purple (#5B6BF5), white text, subtle radius

### Social icons
- Row of 3 circular icons below the button
- Facebook (#3B5998), Twitter (#1DA1F2), Instagram (#E4405F)
- Use lucide-react or similar for icons; wrap in colored circles

### Responsive
- Mobile: stack vertically — image on top, form below
- Maintain form field widths and button sizing

## Design tokens for Tailwind @theme

```
--color-brand: #5B6BF5;
--color-facebook: #3B5998;
--color-twitter: #1DA1F2;
--color-instagram: #E4405F;
--font-heading: "Playfair Display", serif;
```
