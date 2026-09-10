# Ravida — Implementation Notes

Recreation of ColorLib Buri (fine-dining restaurant template).

## Section Order (fidelity reference)

1. **Navbar** — sticky overlay on hero, logo left, links right, hamburger mobile
2. **Hero / Banner** — full-bleed dark food photography, Playfair Display headline,
   warm taupe CTA button
3. **About** — white bg, -250px negative margin overlap, 2-col (text left, image right),
   "Learn More" link
4. **Food Menu** — "Popular Menu" / "Delicious Food Menu" heading, 2-col grid of 6 items,
   each with thumbnail, name, description, price
5. **Parallax / Intro Video** — full-width dark parallax image, centered play icon,
   ~550px height
6. **Testimonials** — "What they said" / "Testimonials", carousel of review cards
   with quote + name
7. **Contact** — dark bg image, 3-col layout: address + hours | reservation | quick links,
   newsletter subscribe
8. **Footer** — solid dark bg (#1c1a18), quick links, newsletter, copyright, Component Dock link

## Component Map

| Component      | Source section      | Notes                                      |
| -------------- | ------------------- | ------------------------------------------ |
| `Navbar.tsx`   | `header.main_menu`  | Sticky, transparent on hero, solid on scroll |
| `Hero.tsx`     | `section.banner_part` | Full-height, dark image bg, text overlay  |
| `About.tsx`    | `section.about_part` | Two-col, negative margin overlap          |
| `Menu.tsx`     | `section.food_menu`  | Section title + 2-col food item grid      |
| `Parallax.tsx` | `section.intro_video_bg` | Full-width dark parallax, centered CTA  |
| `Testimonials.tsx` | `section.review_part` | Carousel/slider of review cards       |
| `Contact.tsx`  | `section.contact_part` | Dark bg, 3-col layout, newsletter form  |
| `Footer.tsx`   | `footer.footer-area` | Dark bg, links, newsletter, copyright     |

## Design Fidelity Notes

### Hero
- Background: dark moody food photography (placeholder via picsum with dark seed)
- Headline font: Playfair Display 700, white
- Subtitle: Montserrat, lighter weight, white/cream
- CTA button: solid `#d6ad86` bg, white text, uppercase, slight border-radius (3-5px)
- Height: 100vh (approximating 1080px)

### About
- Negative margin top: -250px to overlap hero
- Left column (~60%): heading + paragraphs + "Learn More" link in brand color
- Right column (~40%): food/restaurant image with slight rounded corners
- Background: white

### Food Menu
- Section title centered, Playfair Display
- 2-column grid of food items
- Each item: horizontal layout (image left, text right)
  - Thumbnail: ~80px round or square
  - Name: Montserrat bold
  - Description: Montserrat light, muted gray
  - Price: aligned right, bold

### Parallax
- Full-width background image, parallax scroll effect
- Centered content with play icon or heading
- Dark overlay for contrast

### Testimonials
- Use a simple carousel (CSS-only or state-based, no extra dep)
- Each card: large quote text, reviewer name, subtle border
- White background

### Contact
- Dark overlay on background image
- 3-column layout:
  - Col 1: Address + "We Are Open" hours
  - Col 2: Reservation phone/email
  - Col 3: Quick links (Reservation, Breakfast, Lunch, Dinner)
- Newsletter: input + subscribe button below

### Footer
- Background: `#1c1a18` (near-black brown)
- Quick links + newsletter
- Copyright line
- "Made with Component Dock" link

## Placeholder Images

Use `https://picsum.photos/seed/ravida-<n>/<w>/<h>` for deterministic placeholders:
- Hero bg: `picsum.photos/seed/ravida-hero/1920/1080` (dark food-like image)
- About image: `picsum.photos/seed/ravida-about/600/400`
- Menu items: `picsum.photos/seed/ravida-food-1/100/100` through `ravida-food-6`
- Parallax bg: `picsum.photos/seed/ravida-parallax/1920/550`
- Contact bg: `picsum.photos/seed/ravida-contact/1920/600`

## Dependencies

- No new dependencies needed
- Reuse `packages/ui` Button, cn()
- Google Fonts: Playfair Display + Montserrat via `<link>` in index.html
- Icons: lucide-react for hamburger, play, arrows
