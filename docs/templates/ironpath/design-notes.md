# IronPath — Design Notes

Source: ColorLib Gym — https://preview.colorlib.com/theme/gym/

## Section order (1:1 with original)

1. Header (top bar + nav)
2. Banner/Hero (full-width image + overlay)
3. Offer (3 service cards)
4. BMI Calculator (crimson section)
5. Top Courses (6 course cards)
6. Feature (dark bg, alternating blocks)
7. Schedule (weekly table)
8. Trainer (4 team cards + hover)
9. Pricing (3 tier cards)
10. Brand Logos (grayscale row)
11. CTA (bg image + overlay)
12. Footer (3 columns + newsletter)

## Design tokens

- Brand: #f6214b (crimson red) — used on buttons, convert-bg, price hover, selection
- Font: Poppins 300–700 via Google Fonts
- Body: #777777
- Headings: #222222, weight 600
- Light bg: #f9f9ff (cards, team bg, price cards)
- Dark bg: #222222 (feature area)
- White bg: #ffffff (footer)
- Overlay: rgba(0,0,0,0.5) on banner + CTA

## Fidelity notes

- Banner: full-height background image with dark overlay. Heading is uppercase, large.
- Offer: 3 equal-width cards, each with circular icon image + heading + paragraph.
- BMI Calculator: full crimson background, white text, 2 text inputs + primary button.
- Courses: 3x2 grid of cards, each with top image, "Course Available" badge, name with price in parentheses.
- Feature: dark background, alternating image + text blocks in a 4-column layout (image | text | image | text).
- Schedule: full-width bordered table, light thead, course names as row headers, time slots in cells.
- Trainer: 4 cards in a row, image with hover overlay showing social icons (Facebook, Twitter, LinkedIn), name + role below.
- Pricing: 3 cards, each with top-sec (name + price), bottom-sec (description), end-sec (feature list + button). Hover turns bottom+end sections crimson. Price button is dark bg, turns white on hover.
- Brand logos: grayscale filter on images, horizontal row of 5 logos.
- CTA: background image with dark overlay, centered white heading + button. Button hover: transparent bg, white border.
- Footer: white bg, 3 columns (About Us, Contact Us, Newsletter). Newsletter has email input + arrow button (border-radius 57px). Copyright + social icons at bottom.

## Component breakdown

| Component    | Sections              | Notes                                      |
|--------------|-----------------------|--------------------------------------------|
| Header       | 1                     | TopBar + NavMenu sub-components            |
| Banner       | 2                     | Background image, overlay, text            |
| Offer        | 3                     | 3x OfferCard (icon + heading + text)       |
| BMICalculator| 4                     | Full crimson bg, inputs + button           |
| TopCourses   | 5                     | 3x2 grid of CourseCard                     |
| Feature      | 6                     | Dark bg, alternating image+text blocks     |
| Schedule     | 7                     | Bordered table component                   |
| Trainer      | 8                     | 4x TrainerCard with hover overlay          |
| Pricing      | 9                     | 3x PriceCard with hover effect             |
| BrandLogos   | 10                    | Grayscale logo row                         |
| CTA          | 11                    | Background image, overlay, CTA button      |
| Footer       | 12                    | 3-column footer with newsletter form       |

## Placeholder images

- Banner bg: https://picsum.photos/seed/ironpath-banner/1920/700
- Offer icons: https://picsum.photos/seed/ironpath-offer-1/100/100 (circular)
- Course images: https://picsum.photos/seed/ironpath-course-1/360/240
- Feature images: https://picsum.photos/seed/ironpath-feat-1/640/400
- Trainer photos: https://picsum.photos/seed/ironpath-trainer-1/400/400
- CTA bg: https://picsum.photos/seed/ironpath-cta/1920/500
- Brand logos: https://picsum.photos/seed/ironpath-brand-1/120/60 (grayscale via CSS filter)
