# Zenbloom — Design Notes & Task Outline

## Source mapping

| Field        | Value                                         |
| ------------ | --------------------------------------------- |
| ColorLib     | Yogafun                                       |
| Slug         | yogafun                                       |
| Preview      | https://preview.colorlib.com/theme/yogafun/   |
| Source page  | https://colorlib.com/wp/template/yogafun/     |
| New name     | zenbloom                                      |
| App path     | apps/zenbloom                                 |
| Package      | @free-react-templates/zenbloom                |

## Visual design (from screenshot + DOM analysis)

Yoga/wellness template with a dark olive-green color scheme (#71774b as
brand). Clean, modern layout with generous whitespace. Hero section uses
a full-bleed background image with dark overlay and large centered heading.
Feature sections alternate between text-left/image-right and light
backgrounds. The olive green gives it an earthy, organic feel appropriate
for a yoga studio. Cards have no border-radius (sharp edges), buttons
use Bootstrap-style 0.25rem radius. Testimonials use a horizontal
carousel. Counter section is the only colored background (olive green).

## Section implementation order

### 1. App shell + Navbar
- Create apps/zenbloom from simplest existing app (copy + rename)
- Register workspace, npm install
- Navbar: dark bg, logo "Zenbloom" (Montserrat bold), nav links
- Dropdown for Classes on desktop, hamburger on mobile
- Use packages/ui components where possible (Button, etc.)

### 2. Hero Section
- Full-viewport background image via picsum.photos placeholder
- Dark overlay (bg-black/60 or similar)
- Centered heading: "Lose Yourself In Ambience & Atmosphere" (Montserrat)
- "Watch Video" button with play icon (lucide-react PlayCircle)
- Animate entrance with CSS animation

### 3. Features Grid
- 3-column layout (col-lg-4 each)
- Center column: scaled image with frame overlay
- Left/right columns: 2 feature items each (icon + h3 + description)
- Items: Chakra, Lotus, Chakra 2, Yoga
- Responsive: stack on mobile, image above/below text

### 4. Do Yoga Today
- Two-column section
- Left: heading "Do Yoga Today For Better Tomorrow", paragraph, "Read More" link
- Right: scaled image with frame overlay (parallax-style)
- Responsive: stack on mobile

### 5. Perfect Yoga Style
- Full-width, light background section
- Heading + description text
- Simple text section, centered

### 6. Yoga Classes
- 6-card grid (3x2 on desktop, 2x3 on tablet, 1x6 on mobile)
- Each card: image (picsum placeholder) + h3 heading
- Class names: Yoga Barre, Yoga Core, Yoga For Health,
  Yoga For Beginners, Yoga For All, Yoga Restore
- Hover: image zoom effect

### 7. Testimonials
- Horizontal carousel/slider
- Each slide: avatar (picsum), name, role, quote
- Navigation arrows (left/right)
- People: John Smith (XYZ Inc. Client), Joshua Darren, etc.

### 8. Counter Section
- Olive green background (#71774b)
- 3-column layout with icons (lucide-react)
- Items: Chat With Us (MessageCircle), Happy Customers (Heart),
  Fast Support (Zap)
- Each: icon + heading + short description

### 9. Blog
- Heading: "Our Blog"
- 2-column grid of blog post cards
- Each: image, date, title, excerpt, "Read More" link
- Responsive: stack on mobile

### 10. Subscribe
- Light background section
- Heading: "Subscribe"
- Email input + submit button
- Description text above form

### 11. Footer
- Dark background (#212529)
- 4-column grid: About, Contact Info, Quick Links, (empty or social)
- Bottom: copyright + "Made with Component Dock" link
- Responsive: stack on mobile

## Design token notes (for index.css @theme)

```css
@theme {
  --color-brand: #71774b;
  --color-brand-dark: #535837;
  --color-brand-darker: #44482d;
  --color-brand-light: #b0b68b;
  --color-brand-muted: #8f965f;
}
```

Fonts loaded via Google Fonts link in index.html:
- Montserrat (700) — headings, logo
- Oxygen (400) — body text

## Fidelity notes

- Original uses Bootstrap grid (col-lg-4, col-md-6). Recreate with
  Tailwind grid/flex utilities.
- Original slider uses Owl Carousel. Replace with simple React state
  carousel or CSS-only approach.
- Original uses Font Awesome + Ionicons. Replace with lucide-react.
- Original images: images/img_1.jpg etc. Use picsum.photos placeholders.
- Original testimonial avatars: images/person_1.jpg etc. Use picsum with
  seed for determinism.
- Original "Watch Video" button wraps a play icon in a rounded border.
  Recreate with a circular border + PlayCircle icon.
- Original feature items use `.feature-1` class with icon + text.
  Recreate as flex column with lucide icon + heading + paragraph.
