# Grimoire — Design Notes

## Source

- ColorLib Wizard 16: https://colorlib.com/wp/template/colorlib-wizard-16/
- Preview: https://colorlib.com/etc/bwiz/colorlib-wizard-16/index.html
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-free-wizard-16.jpg

## Design Analysis

- Three-step wizard form (Account Info → Personal Info → Payment Details)
- Clean white card on a nature/mountain background image
- Roboto Slab font (Google Fonts)
- Green accent #6DAB3C for buttons and active elements
- Rounded container (10px), rounded inputs (5px)
- Step footer shows progress ("Step X of 3")
- Form uses jQuery Steps plugin in original; we use React state

## Layout

- Full-page background image
- Centered white card (max-width ~700px)
- Step header: title text
- Step body: form fields
- Step footer: step counter

## Implementation Notes

- Use React useState for step navigation
- Conditional rendering for step content (not hidden panels)
- Use lucide-react icons for form field icons
- Use picsum.photos for background image
- Google Fonts for Roboto Slab
