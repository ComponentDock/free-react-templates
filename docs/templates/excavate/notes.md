# Excavate — Implementation Notes

Source: ColorLib Unearth
Preview: https://preview.colorlib.com/theme/unearth/

## Section order (fidelity to original)

1. Navbar (sticky, hamburger mobile)
2. Hero carousel (2 slides, overlay images, CTA)
3. Services (2-column with bg images)
4. Feature grid (6 items, light bg)
5. About (dark bg, overlay image)
6. Team (6 members, 2 rows of 3)
7. Pricing (3 tier cards, light bg)
8. FAQ (accordion)
9. Press (logos)
10. Testimonials (carousel, light bg)
11. Blog (3 post cards)
12. Contact (form, light bg)
13. Footer (dark, 4 columns)

## Design tokens to apply

- Brand primary: #ff8b00 (orange) — buttons, links, accents
- Secondary: #7a5e86 (purple) — sparingly
- Fonts: Oswald (headings, uppercase), Rubik (body)
- Buttons: square/rectangular (minimal radius), 2px borders on outline variants
- Dark sections: black bg with overlay images
- Light sections: #f8f9fa

## Component mapping

| Section      | Component file        | Notes                                    |
| ------------ | --------------------- | ---------------------------------------- |
| Navbar       | Navbar.tsx            | Sticky, hamburger on mobile, smooth scroll|
| Hero         | HeroCarousel.tsx      | Use simple auto-advancing carousel       |
| Services     | Services.tsx          | 2-col grid, bg images via picsum         |
| Features     | FeatureGrid.tsx       | 6 items, icon + title + text             |
| About        | About.tsx             | Dark bg, overlay image                   |
| Team         | Team.tsx              | 6 members, social icons (lucide)         |
| Pricing      | Pricing.tsx           | 3 cards, price + features + CTA          |
| FAQ          | FAQ.tsx               | Accordion (useState toggle)              |
| Press        | Press.tsx             | Logo images in row                       |
| Testimonials | Testimonials.tsx      | Carousel of testimonials                 |
| Blog         | Blog.tsx              | 3 post cards                             |
| Contact      | Contact.tsx           | Form with validation                     |
| Footer       | Footer.tsx            | 4 columns, newsletter, social, CD link   |

## Fidelity notes

- The hero uses owl-carousel; in React we'll use a simple CSS/JS carousel
- Team members have social icon buttons with rounded borders
- Pricing cards have a highlighted/premium tier
- The about section has a dark bg with parallax-style background image
- Press section is minimal — just logos in a row
- Footer newsletter has a form with subscribe button
- All placeholder images → picsum.photos/seed/excavate-N/W/H
- No ColorLib references in any app file

## Implementation priority

1. App.tsx scaffold + index.css tokens
2. Navbar (sticky + responsive)
3. Hero carousel
4. Services + Feature grid
5. About + Team
6. Pricing + FAQ
7. Press + Testimonials + Blog
8. Contact form
9. Footer
10. Tests (100% coverage)
