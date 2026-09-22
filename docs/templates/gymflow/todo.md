# GymFlow — Implementation Todo & Design Notes

## Template Identity

- **New name:** GymFlow
- **ColorLib source:** Gymlife (slug: `gymlife`)
- **Preview URL:** https://preview.colorlib.com/theme/gymlife/
- **Source URL:** https://colorlib.com/wp/template/gymlife/
- **Category:** Fitness / Gym

## Section Order (top to bottom)

1. Header (sticky nav — logo left, links center, hamburger mobile)
2. Hero Section (full-width dark bg image, centered white text + orange CTA)
3. Why Choose Us (4-item feature grid, white bg, icons)
4. Classes Section (card grid with images, hover overlays, white bg)
5. Banner / CTA (dark full-width image bg, headline + orange button)
6. Pricing Section (3-column cards, highlighted middle, white bg)
7. Gallery (masonry image grid, dark bg)
8. Team Section (member cards with photo/name/role/social, white bg)
9. Get In Touch (contact form + info side by side)
10. Footer (dark, multi-column: about, links, newsletter, social, copyright)

## Design Token Reference

| Token          | Value                              |
| -------------- | ---------------------------------- |
| Brand orange   | `#f36100`                          |
| Text primary   | `#111111`                          |
| Text muted     | `#a9a9a9`                          |
| Dark bg        | `#0a0a0a` / `#252525`             |
| Heading font   | Oswald (Google Fonts)              |
| Body font      | Muli (Google Fonts)                |
| Button radius  | 60px (pill shape)                  |
| Button bg      | #f36100, white text                |

## Section-by-Section Fidelity Notes

### Header
- Sticky nav with logo image on the left (use placeholder)
- 7 nav links: Home, About, Classes, Schedule, Pricing, Team, Contact
- Hamburger menu on mobile (off-canvas sidebar with social icons)
- Oswald font for nav links

### Hero
- Full-width dark background image with dark overlay
- Centered large white text heading + subtext
- Orange pill-shaped CTA button (#f36100, border-radius: 60px)
- Use picsum.photos/seed/gymflow-hero/1920x800 for background

### Why Choose Us
- 4 items in a row (2x2 on tablet, stacked on mobile)
- Each item: icon (Flaticon-style, use lucide-react), title, description
- White background, `spad` padding (top/bottom ~80px)
- Section title: large Oswald uppercase with thin orange underline

### Classes
- 4 class cards in a grid
- Each card: image with dark hover overlay, class name, short description
- Images: picsum.photos/seed/gymflow-class-{1-4}/380x270
- Hover effect: slight scale + overlay text reveal
- White background

### Banner / CTA
- Full-width dark background image with overlay
- Centered headline + orange CTA button
- Use picsum.photos/seed/gymflow-banner/1920x400

### Pricing
- 3 pricing cards side by side
- Each: plan name, price, feature list, "Join Now" button
- Middle card highlighted: orange top border, slightly elevated
- White background

### Gallery
- Masonry-style grid of gym photos
- 6 images: picsum.photos/seed/gymflow-gallery-{1-6}/various
- Dark background (#0a0a0a)
- Hover: slight zoom + overlay

### Team
- 3-4 team member cards
- Each: circular photo, name, role, 4 social icons (FA-style → lucide-react)
- Use picsum.photos/seed/gymflow-team-{1-4}/300x300
- White background

### Contact (Get In Touch)
- Left column: contact info (address, phone, email with icons)
- Right column: form with name, email, subject, message textarea
- Orange "Send Message" button (pill shape)
- Split layout (6/6 or 4/8)

### Footer
- Dark background (#000 or #0a0a0a)
- 4 columns: About blurb, Quick Links, Newsletter form, Social icons
- Copyright line at bottom: "© 2026 All rights reserved | Component Dock"
- Social: Facebook, Twitter, Instagram, YouTube (lucide-react icons)
