# Velora — Design Notes & Implementation Outline

Source: ColorLib **Satner** (slug: `satner`)
Preview: https://preview.colorlib.com/theme/satner/
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/satner-free-template.jpg

## Section Order (top → bottom)

1. **Navbar** — Transparent header, logo image left, nav links right (Home, About, Services, Portfolio, Contact)
2. **Hero / Banner** — Split layout: left = greeting "Hello" + name + subtitle + two CTA buttons (Hire Me solid + Get CV transparent); right = portrait/illustration image
3. **About** — "let's Introduce about myself" heading, two bio paragraphs, "Download CV" button, image on left
4. **Brand Logos Strip** — 3×3 grid of client brand logos + "10 Years Experience" card with phone number
5. **Services / Features** — "service offers" heading + subtitle, 4-column grid of service cards (WP Developing, UI/UX Design, Web Design, SEO Optimize)
6. **Portfolio** — "quality work Recently done project" heading, filter buttons (All/Popular/Latest/Following/Upcoming), 3-column portfolio grid with image overlays
7. **Testimonials** — "client say about me" heading + subtitle, owl-carousel slider with avatar + name + quote
8. **Newsletter** — Gradient/image background, "get update from anywhere" heading, subtitle, email input + "Get Started" button
9. **Footer** — Light purple (#fcf8ff) bg, centered logo, "Follow Me" heading, social icons (Facebook, Twitter, Dribbble, Behance), copyright + Component Dock link

## Design Tokens (from original CSS)

- Brand gradient: `linear-gradient(90deg, #4458dc 0%, #854fee 100%)`
- Primary blue: `#4458dc` (links, active states)
- Primary purple: `#854fee` (gradient end, social hover, accent)
- Body font: `"Roboto", sans-serif`
- Heading font: `"Rubik", sans-serif`
- Body text: `#777777`
- Headings: `#000000`
- Button radius: `5px`
- Transparent button: white bg + gradient border, text `#222222`
- Footer bg: `#fcf8ff`
- Newsletter bg: image overlay with gradient

## Fidelity Notes

### Navbar
- Transparent, absolute positioned over hero
- Logo image left, nav links right with `justify-content-end`
- Dropdown menus for Pages and Blog submenus (we simplify to single-page: Home, About, Services, Portfolio, Contact)
- Text: 12px uppercase, sticky on scroll with white background

### Hero
- Full-width background image (`home-banner.png`)
- Left 7-col: greeting "Hello" in Rubik, large name in Rubik uppercase, subtitle
- Right 5-col: portrait/illustration image
- Two buttons: solid gradient ("Hire Me") + transparent outline ("Get CV")
- Both buttons use the blue→purple gradient with 5px radius

### About
- Left 5-col: about image (offset left 250px on large screens)
- Right 5-col (offset): "let's Introduce about myself" heading, two paragraphs, "Download CV" button
- White background

### Brand Logos
- 3×3 grid of grayscale brand logos (left 6-col)
- "10 Years Experience" card (right 4-col): large "10" + "Years Experience Working" + phone number with icon
- Light background

### Services
- Centered heading "service offers" + subtitle
- 4-column grid: each card has icon image + title + description
- Cards have padding 45px 25px, centered text
- Subtle border or shadow on cards

### Portfolio
- Left-aligned heading "quality work Recently done project"
- Filter buttons: All (active), Popular, Latest, Following, Upcoming
- 3-column grid of portfolio items
- Each item: image + overlay (dark, opacity transition) + cross icon on hover
- Below image: title link + category tags
- Filter categories use data attributes for JS filtering

### Testimonials
- Centered heading "client say about me" + subtitle
- Owl-carousel slider
- Each slide: left 4-col avatar image, right 8-col text (name + quote)
- Multiple testimonials cycling

### Newsletter
- Full-width gradient/image background
- Centered white heading "get update from anywhere" (uppercase)
- White subtitle text
- Email input + "Get Started" button (solid purple bg)
- Padding: 150px vertical

### Footer
- Light purple `#fcf8ff` background
- Centered logo image
- "Follow Me" heading below logo
- 4 social icons (Facebook, Twitter, Dribbble, Behance)
- Copyright line with Component Dock link (replaces original Colorlib attribution)

## Implementation Notes

- Use picsum.photos seeded images for: portrait, about image, portfolio items, testimonials avatars, brand logos
- Use lucide-react for social icons (Facebook, Twitter, Dribbble/Beaker, Layout) and phone icon
- Google Fonts: Rubik + Roboto via `<link>` in index.html
- Newsletter form: simple controlled input, no actual submission
- Portfolio filter: state-based filtering (no isotope/masonry needed)
- Testimonial carousel: simple CSS snap or state-based sliding (no owl-carousel dependency)
- All CTA buttons use the gradient `from-[#4458dc] to-[#854fee]` in Tailwind
