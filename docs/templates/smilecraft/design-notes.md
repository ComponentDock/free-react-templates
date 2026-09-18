# Smilecraft — Design Notes

## Source

- ColorLib "Dentacare" — https://colorlib.com/wp/template/dentacare/
- Preview: https://preview.colorlib.com/theme/dentacare/
- Category: Medical / Dental Clinic

## Design Tokens

### Fonts

| Role    | Font family | Weights       |
| ------- | ----------- | ------------- |
| Body/UI | Work Sans   | 300, 400, 700 |

### Colors

| Token          | Hex     | Usage                           |
| -------------- | ------- | ------------------------------- |
| primary        | #78d5ef | Buttons, links, section accents |
| price-blue     | #2f89fc | Pricing amounts, gradient start |
| gradient-teal  | #2cbcbc | Gradient end, secondary accent  |
| gradient-green | #00dc94 | Newsletter gradient end         |
| dark-brown     | #3c312e | Emergency/hours strip bg        |
| footer-bg      | #191919 | Footer background               |
| text-primary   | #212529 | Body text                       |
| text-muted     | #6c757d | Secondary text                  |
| light-bg       | #f8f9fa | Light section backgrounds       |

### Section Order

1. Navbar (transparent over hero)
2. Hero (image + overlay, white text)
3. Emergency/Hours strip (dark brown)
4. Appointment Form (dark bg)
5. Services (4-column grid)
6. About (image + feature cards)
7. Team (4-column dentist grid)
8. Achievements (gradient counter)
9. Pricing (4 cards, premium highlighted)
10. Newsletter (gradient bg)
11. Testimonials
12. Blog (3-column grid)
13. Footer (dark, 4 columns + Component Dock link)

## Verification

- [ ] Transparent navbar over hero (desktop), black navbar (mobile)
- [ ] Hero carousel with background images, light overlay, white text
- [ ] Emergency/Hours dark brown strip
- [ ] Appointment form with dark bg, white text inputs
- [ ] Services 4-column grid
- [ ] About section with image + feature cards
- [ ] Team 4-column dentist grid
- [ ] Achievements gradient counter section
- [ ] Pricing 4 cards
- [ ] Newsletter gradient section
- [ ] Testimonials carousel
- [ ] Blog 3-column grid
- [ ] Dark footer with Component Dock link
- [ ] Work Sans font loaded
- [ ] Responsive at 992px breakpoint
