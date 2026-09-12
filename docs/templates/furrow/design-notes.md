# Furrow — Design Notes

**Source**: ColorLib Farmland (https://preview.colorlib.com/theme/farmland/)
**Category**: Agriculture / Farming landing page
**New name**: furrow

## Structure order

| #   | Component      | DOM section class                   | Notes                                               |
| --- | -------------- | ----------------------------------- | --------------------------------------------------- |
| 1   | TopBar         | `.top`                              | Gold `#ecdc67` bg, email + social icons (circular)  |
| 2   | InfoBar        | (inside `.top > .container > .row`) | Brand logo + phone + address, 3-column flex         |
| 3   | Navbar         | `#ftco-navbar`                      | Green `#5d8c55`, sticky, rounded 5px container      |
| 4   | Hero           | `.hero-wrap`                        | Full-height slider, dark overlay, CTA buttons       |
| 5   | Services       | `.ftco-services`                    | 4-column cards with bg images                       |
| 6   | About          | `.ftco-about`                       | Split: image collage + text/features                |
| 7   | Counter        | `.ftco-counter`                     | Parallax bg, 4 stat blocks                          |
| 8   | Projects       | `.ftco-section` (after counter)     | 4-column image grid with titles                     |
| 9   | VideoSection   | `.video-image`                      | Parallax bg with play button overlay                |
| 10  | Testimonials   | `.testimony-section`                | Carousel + nav dots, split layout                   |
| 11  | FAQ + Quote    | `.services-section` + accordion     | 2-column: form left, FAQ accordion right            |
| 12  | Footer         | footer                              | Newsletter, social links, copyright                 |

## Fidelity notes

### TopBar + InfoBar
- TopBar background is a golden yellow `#ecdc67` (not the Bootstrap light gray)
- Social icons: circular (50% border-radius), green `#5d8c55` icon color
- InfoBar: 3-column row (brand | phone | address) — brand has flaticon agriculture icon
- Phone and address text in the topper component: small text (12px), light weight

### Navbar
- Absolutely positioned at top: 140px (overlaying the hero)
- On scroll: becomes fixed at top
- Container: max-width 1110px, border-radius 5px, green `#5d8c55`
- Nav links: uppercase, letter-spacing 2px, font-size 14px, white text
- Active nav link: green color, no background decoration
- "Get A Quote" button: translucent white bg, uppercase, small
- Mobile: navbar becomes relative positioned, full green bg

### Hero
- Full-height (900px) slider with owl-carousel
- Two background images (bg_1.jpg, bg_2.jpg) cycling with parallax
- Two overlays: `.overlay` (darker) + `.overlay-2` (secondary)
- Centered text: subheading in "Covered By Your Grace" font, heading in Roboto
- Two CTAs: "Our Services" (btn-primary blue) + "Request A Quote" (btn-secondary gray)

### Services
- 4-column grid, each card has:
  - Top: heading + paragraph text on white bg
  - Bottom: background image with dark overlay + green circular button on hover
- Sections: Fresh Vegetables, Agricultural Products, Organic Products, Dairy Products

### About
- Split layout (image left 50%, text right 50%)
- Left: stacked images with a "42 Years" badge (flaticon calendar icon)
- Right: subheading "About Farmland", heading, paragraph, 2 feature items, "Learn More" button
- Feature items: green icon + heading text (Growing Fruits, Tips for Ripening)

### Counter
- Full-width with parallax background image (bg_2.jpg) + dark overlay
- 4 stat blocks in a row: icon + number + label
- Numbers: 4800 (Projects), 14000 (Products), 200 (Services), 71650 (Customers)
- Counter animation: numbers count up from 0

### Projects
- Full-width section, 4-column grid (fluid container)
- Each card: background image + bottom title + arrow link
- Overlay on hover reveals card

### VideoSection
- Full-width parallax background (bg_3.jpg) + double overlay
- Centered play button (circular)

### Testimonials
- Split layout: carousel (60%) + heading (40%)
- Carousel: quote icon, testimonial text, author image, author name
- Navigation dots below text

### FAQ + Quote
- 2-column: form (left), accordion (right)
- Form: name, email, date, subject/message textarea, submit button
- Accordion: 4 items with expand/collapse, green active color
- Bootstrap 4 accordion pattern (collapse + card-header)

### Footer
- Dark background
- Newsletter: email input + subscribe button
- Social media links
- Copyright: "Component Dock" link to componentdock.com

## Implementation notes

- Use Roboto (300,400,500,700,900) + "Covered By Your Grace" (400) via Google Fonts link in index.html
- Hero slider: implement as a simple image carousel (no owl-carousel dependency)
- Parallax effects: use `background-attachment: fixed` or CSS scroll-driven animations
- Counter animation: use Intersection Observer + requestAnimationFrame for number counting
- FAQ accordion: use React state toggle (no Bootstrap JS dependency)
- Form: basic controlled inputs, no external form library needed for static display
- Social media links: lucide-react icons (Facebook, Twitter, Instagram, Dribbble mapped to appropriate icons)
- Placeholder images: `https://picsum.photos/seed/furrow-<n>/<w>/<h>` with deterministic seeds
- Footer MUST link https://www.componentdock.com/ (branded as "Component Dock")
