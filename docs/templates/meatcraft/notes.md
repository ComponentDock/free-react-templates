# Meatcraft — Implementation Notes

Source: ColorLib SteakShop (https://colorlib.com/wp/template/steakshop/)

## Section order (from preview DOM)

1. Navbar (fixed side menu with icon+text links)
2. Hero banner (full-screen background image, dark overlay)
3. Banner bottom (overlapping bar: video icon + headline + CTA)
4. Breakfast section (left text, right overlapping food images)
5. Lunch section (right text with chef attribution, left overlapping food images)
6. Reservation form (dark bg, red-accent form fields)
7. Chef section (large image + text + signature + 4 food thumbnails)
8. Food gallery carousel (full-width horizontal image carousel)
9. Brand partners carousel (grayscale logos, centered)
10. Footer (dark image overlay, 5 columns: Top Products / Quick Links / Features / Resources / Newsletter, social icons, copyright)

## Fidelity notes

- **Side menu:** The original uses a slide-in side menu (hamburger trigger → fixed panel). In React, implement as a mobile hamburger toggle + overlay drawer. Desktop may use a top horizontal navbar for simplicity, but a slide-in drawer is more faithful.
- **Banner bottom overlap:** Uses `margin-top: -340px` to pull over the hero. Replicate with negative margin or relative positioning.
- **Overlapping food images:** The `.right-img` and `.left-img` containers use absolute positioning to stack two images with a slight offset. Key visual detail — the smaller image overlaps the larger one.
- **Reservation form:** Full-width section with dark background. Form fields have red (#f42f2c) border on focus. Uses selects for "Number of people" and "Select event" (location).
- **Chef section:** Large hero image of chef on left, text + signature image on right, then a row of 4 small food item thumbnails with lightbox popup links.
- **Gallery carousel:** Full-width horizontal scroll/carousel of food images. Use a simple CSS-based or lightweight carousel.
- **Brand carousel:** Grayscale logo images in a horizontal slider. 6 logos total.
- **Footer:** Dark background image with 75% black overlay. White text. 4 link columns + newsletter signup. Social icons: Facebook, Twitter, Dribbble, Behance. Copyright line.
- **Fonts:** Roboto (body), Pacifico (logo/accent). Load via Google Fonts.
- **Colors:** Primary red #f42f2c, gradient to #f48464, dark text #222222, muted text #777, borders #eee.

## Component breakdown

| Component        | File                   | Notes                                      |
| ---------------- | ---------------------- | ------------------------------------------ |
| Navbar           | `Navbar.tsx`           | Mobile slide-in drawer, icon+text links     |
| Hero             | `Hero.tsx`             | Full-viewport bg image + dark overlay       |
| BannerBottom     | `BannerBottom.tsx`     | Overlapping bar with video + headline + CTA |
| FoodCourse       | `FoodCourse.tsx`       | Reusable: text-left + images-right OR flipped|
| ReservationForm  | `ReservationForm.tsx`  | 6-field form with red accents               |
| ChefSection      | `ChefSection.tsx`      | Large image + text + signature + 4 thumbs   |
| FoodGallery      | `FoodGallery.tsx`      | Horizontal carousel of food images          |
| BrandCarousel    | `BrandCarousel.tsx`    | Grayscale logo carousel                     |
| Footer           | `Footer.tsx`           | 5-col dark footer with newsletter           |
| App              | `App.tsx`              | Composes all sections in order              |
