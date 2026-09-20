# Gatherly — Implementation Tasks & Design Notes

## Source
- ColorLib: https://colorlib.com/wp/template/agenda/
- Preview: https://preview.colorlib.com/theme/agenda/

## Section implementation order

### 1. Navbar
- Fixed/absolute positioning over hero
- Logo on left, nav links center, Buy Tickets button right
- Responsive: hamburger on mobile
- Use gradient-bg for Buy Tickets button

### 2. Hero
- Full-width swiper/slider (3 slides)
- Countdown timer component (Days/Hours/Minutes/Seconds)
- Background images via picsum.photos
- Gradient CTA button "Order here"
- Slider prev/next arrow buttons

### 3. Info
- Two-column layout: logo left, text right
- Heading + paragraph + 2 CTA buttons (gradient + dark)
- Light background (#f3f8f9)

### 4. FeaturedEvents
- Masonry-style grid of event cards
- Mix of full-width and half-width cards
- Each card: image, title, date
- Use picsum.photos for event images

### 5. NextEvents
- Section header with title + description
- 3-column responsive grid
- Each card: image, circular rating badge (absolute positioned), title, date, description, "Buy Tickets" link
- Rating badge: 50% border-radius, white text on gradient bg

### 6. RegionalEvents
- Location dropdown/select
- Horizontal carousel/slider of event cards
- Each slide: image, overlay link ("+"), title, date
- Partners logo strip below carousel

### 7. Newsletter
- Centered form with 3 fields: name, email, submit
- Submit button uses gradient-bg class
- Dark background (#08011e)

### 8. Footer
- Logo, nav links, social icons, copyright
- Component Dock link (replacing Colorlib attribution)
- Social icons: Pinterest, LinkedIn, Instagram, Facebook, Twitter (use lucide-react)

## Design fidelity notes

- **Color palette:** Purple gradient primary (#AA00FF → #581687), near-black backgrounds (#08011e, #232127), light sections (#f3f8f9)
- **Typography:** Calibri — use system Calibri font or closest Google alternative (e.g., Inter or Noto Sans)
- **Buttons:** Pill-shaped (border-radius 50px), 18px bold text, gradient-bg for primary, solid dark for secondary
- **Cards:** border-radius 6px for event cards, 10px for featured images
- **Spacing:** Generous padding (18px+ vertical), section-based rhythm
- **Dark theme:** Near-black base, white text, purple accents throughout
