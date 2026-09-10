# Supperly — Implementation Notes

Source: ColorLib "Caviar" (https://colorlib.com/wp/template/caviar/)
Preview: https://preview.colorlib.com/theme/caviar/
New name: `supperly` (apps/supperly, @free-react-templates/supperly)

## Section order (top to bottom)

1. Navbar
2. Hero (full-width slider)
3. About Us (2-part: image/text + text/image)
4. Dish Menu (3-column grid)
5. Awards (horizontal badge row)
6. Testimonials (carousel)
7. Reservation (split: image left, form right)
8. Footer

## Design notes

- Dark/moody food photography on hero. Use picsum.photos seeds for
  atmospheric restaurant images.
- Red accent (#ff0000) on CTA buttons, subheadings, hover states.
- CTA buttons: white bg, 1px #b2b2b2 border, square corners (radius 0),
  small red dot circle (8px) before label text.
- Section padding: generous 150px top/bottom for editorial feel.
- About Us has two sub-blocks: "restaurant style" and "our chef" —
  each with a red uppercase subheading + body text + photo.
- Dish Menu uses a large rotated "Special" watermark text in the background.
  Each dish card: image on top, name below, price right-aligned.
- Testimonials: carousel with circular avatar, name, tagline, quote text.
  Card has subtle box-shadow.
- Reservation: split layout. Left side is a dark background image.
  Right side has a form with transparent-input fields (border-bottom only).
  Fields: date, time, persons, last name, message textarea.
- Footer: dark charcoal (#333333) bg, centered logo, subtle white copyright.
- Fonts: Work Sans (headings/buttons), Open Sans (body).

## Component breakdown

```
App.tsx
├── Navbar.tsx
│   ├── Logo
│   ├── NavLinks
│   └── SearchButton
├── Hero.tsx
│   ├── SlideContent (heading, text, CTA)
│   ├── SocialSidebar
│   └── SliderControls
├── AboutUs.tsx
│   ├── AboutBlockA (image left, text right)
│   └── AboutBlockB (text left, image right)
├── DishMenu.tsx
│   ├── SectionHeading
│   ├── ViewMenuButton
│   └── DishCard (×3 in grid)
├── Awards.tsx
│   ├── SectionHeading
│   └── AwardBadge (×5 in row)
├── Testimonials.tsx
│   ├── SectionHeading
│   └── TestimonialCard (×3 carousel)
├── Reservation.tsx
│   ├── ReservationForm (fields + submit)
│   └── ReservationImage
└── Footer.tsx
    ├── Logo
    ├── Copyright
    └── ComponentDockLink
```

## Asset mapping

| Original | Replacement |
|---|---|
| img/bg-img/hero-1.jpg | picsum.photos/seed/supperly-hero-1/1920/1080 |
| img/bg-img/hero-2.jpg | picsum.photos/seed/supperly-hero-2/1920/1080 |
| img/bg-img/hero-3.jpg | picsum.photos/seed/supperly-reserve/1920/1080 |
| img/bg-img/about-1.jpg | picsum.photos/seed/supperly-about-1/800/600 |
| img/bg-img/about-2.jpg | picsum.photos/seed/supperly-about-2/800/600 |
| img/menu-img/dish-{1,2,3}.png | picsum.photos/seed/supperly-dish-{1,2,3}/400/400 |
| img/awards-img/a-{1..5}.png | lucide-react icons (Award, Trophy, Star, Medal, Crown) |
| img/testimonial-img/{1,2,3}.jpg | picsum.photos/seed/supperly-test-{1,2,3}/100/100 |
| Google Fonts link | Open Sans + Work Sans via index.html |

## Tailwind theme tokens (index.css @theme)

```css
@theme {
  --color-brand: #ff0000;
  --color-primary: #333333;
  --color-light-bg: #fafafa;
  --color-footer-bg: #333333;
  --color-btn-border: #b2b2b2;
}
```
