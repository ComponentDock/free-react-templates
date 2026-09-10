# Canape — Implementation TODO

Recreation of ColorLib Caviar (restaurant template).
Source: https://colorlib.com/wp/template/caviar/
Preview: https://preview.colorlib.com/theme/caviar/

## Section implementation order

1. **Header** (`Header.tsx`)
   - Fixed top nav, white background, 100px height
   - Logo "Canape" left, nav links center, search icon right
   - Smooth scroll to section anchors on click
   - Transition effect on scroll (sticky appearance)

2. **Hero** (`Hero.tsx`)
   - Full-width image slider (use `picsum.photos/seed/canape-1/1920/1080` and `canape-2/1920/1080`)
   - Dark overlay on each slide for text contrast
   - Each slide: headline + subtext + "Reservation" CTA button
   - Left/right navigation arrows at bottom
   - Could use a simple React state-based slider (no external dep needed)

3. **AboutUs** (`AboutUs.tsx`)
   - Two-column layout (col-6 + col-6 on md+)
   - Left: two stacked food/chef images (`picsum.photos/seed/canape-about-1/600/400`, `canape-about-2/600/400`)
   - Right: heading "About Us" + subtitle "restaurant style" + paragraphs
   - Sub-heading "our chef" with description
   - CTA "View The Menu" → scrolls to menu
   - Section padding: 150px top/bottom

4. **SpecialMenu** (`SpecialMenu.tsx`)
   - Heading "Special" centered
   - Grid of 3 dish cards (col-4 each on md+)
   - Each card: food image (`picsum.photos/seed/canape-dish-N/400/400`), name, price
   - Dark hover overlay effect on cards
   - White section background

5. **Awards** (`Awards.tsx`)
   - Heading "Awards" centered
   - Row of 5 award badge placeholders (use lucide icons or placeholder SVGs)
   - Light gray background (#fafafa)

6. **Testimonials** (`Testimonials.tsx`)
   - Heading "Testimonials" centered
   - Carousel with testimonial cards
   - Each card: circular author photo (`picsum.photos/seed/canape-author-N/100/100`), name, text
   - Authors: Robert Jonson, Clara Hudson, Jane Black

7. **Reservation** (`Reservation.tsx`)
   - Two-column layout: heading + form
   - Left: "Reservation" heading + "Reserve Your Desk" subtext
   - Right: form with "Select Persons" dropdown + "Last Name" input + submit
   - CTA button styled as per design tokens

8. **Footer** (`Footer.tsx`)
   - Dark background (#333333)
   - Centered: "Canape" logo + copyright + "Component Dock" link
   - Simple single-row layout

## Design fidelity notes

- **Square buttons (border-radius: 0)** — this is a distinctive design choice. All CTAs must be flat rectangles with thin gray borders.
- **Two font families**: Open Sans for body, Work Sans for UI elements (nav, buttons, headings).
- **Red accent (#ff0000)** appears in hero CTA buttons and potentially section highlights.
- **Fixed header** with scroll transition — standard pattern, implement with `position: sticky` or `fixed` + scroll listener.
- **Image slider** — keep it simple with React state (no owl-carousel dependency). Two slides with auto-advance optional.
- **Dark footer** (#333333) is a single row, not multi-column.
- **Award badges** — use lucide-react icons (Trophy, Medal, Star, Award, Crown) as placeholders instead of images.

## Placeholder images

| Slot          | URL                                                 |
| ------------- | --------------------------------------------------- |
| Hero slide 1  | `https://picsum.photos/seed/canape-hero1/1920/1080` |
| Hero slide 2  | `https://picsum.photos/seed/canape-hero2/1920/1080` |
| About image 1 | `https://picsum.photos/seed/canape-about1/600/400`  |
| About image 2 | `https://picsum.photos/seed/canape-about2/600/400`  |
| Dish 1        | `https://picsum.photos/seed/canape-dish1/400/400`   |
| Dish 2        | `https://picsum.photos/seed/canape-dish2/400/400`   |
| Dish 3        | `https://picsum.photos/seed/canape-dish3/400/400`   |
| Author 1      | `https://picsum.photos/seed/canape-author1/100/100` |
| Author 2      | `https://picsum.photos/seed/canape-author2/100/100` |
| Author 3      | `https://picsum.photos/seed/canape-author3/100/100` |
