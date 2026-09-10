# Craver — Design Notes & Tasks

Source: ColorLib "Buri" — https://colorlib.com/wp/template/buri/
Preview: https://preview.colorlib.com/theme/buri/

## Section order (fidelity order)

1. **Navbar** — transparent overlay, logo left, nav center-right, social right
2. **Hero Banner** — full-width dark food photo bg, tagline + heading + CTA
3. **About Us** — two-column: text left (label, heading, paragraphs, CTA), image right
4. **Popular Menu** — centered title, 2-col x 3-row grid of food items
5. **Video Intro** — dark strip with centered play button, YouTube popup
6. **Testimonials** — centered title, owl-carousel of cards (quote, avatar, name, stars)
7. **Contact Info** — left-aligned: address, hours, reservation phone/email
8. **Footer** — 3-col: logo+contact, quick links, newsletter form; copyright with Component Dock

## Key design decisions

- **Fonts**: "Playfair Display" (serif) for headings gives upscale restaurant feel; "Montserrat" (sans) for body/nav/buttons
- **Color palette**: warm tan/gold (#d6ad86) as primary accent against dark charcoal headings (#2c3033) — classic upscale restaurant aesthetic
- **Button style**: pill-shaped (border-radius ~20px), tan bg for primary CTA, black bg for secondary
- **Hero**: dark moody food photography fills the entire hero; text is white on left side
- **Food menu**: thumbnail images are small square crops alongside text
- **Testimonials**: carousel (owl-carousel in original; use a React carousel library or custom implementation)

## Component breakdown

| Component       | Description                                      |
| --------------- | ------------------------------------------------ |
| Navbar          | Transparent overlay, sticky on scroll, hamburger |
| Hero            | Full-width bg image, text overlay, CTA button    |
| About           | Two-col grid, image placeholder, text content    |
| MenuGrid        | 2-col grid, 6 FoodItem sub-components            |
| FoodItem        | Thumbnail, name, description, price              |
| VideoIntro      | Dark bg section, play button, YouTube popup      |
| Testimonials    | Carousel of TestimonialCard components           |
| TestimonialCard | Quote text, avatar image, name, star rating      |
| ContactInfo     | Address, hours, reservation blocks               |
| Footer          | 3-col grid, newsletter form, copyright           |

## Placeholder images

- Hero banner: `https://picsum.photos/seed/craver-hero/1920/1080`
- About image: `https://picsum.photos/seed/craver-about/600/700`
- Food items: `https://picsum.photos/seed/craver-food-1/120/120` through `-6`
- Client avatars: `https://picsum.photos/seed/craver-client-1/80/80` through `-3`
- Footer logo: text-based or SVG placeholder

## Tasks

- [ ] Create `apps/craver/` workspace (copy minimal app, rename package)
- [ ] Set up `src/index.css` with Tailwind + custom theme tokens (colors, fonts)
- [ ] Implement Navbar component (transparent, sticky, hamburger)
- [ ] Implement Hero component (bg image, text overlay, CTA)
- [ ] Implement About component (two-column, image, text, CTA)
- [ ] Implement MenuGrid + FoodItem components (2x3 grid)
- [ ] Implement VideoIntro component (play button, YouTube popup)
- [ ] Implement Testimonials + TestimonialCard (carousel)
- [ ] Implement ContactInfo component (address, hours, reservation)
- [ ] Implement Footer (3-col, newsletter form, Component Dock link)
- [ ] Write App.tsx composing all sections
- [ ] Write tests for each component (100% coverage)
- [ ] Run `scripts/verify-app.sh craver`
- [ ] Commit and push
