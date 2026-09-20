# Promoter — Implementation Tasks & Design Notes

## Source
- ColorLib: https://colorlib.com/wp/template/eventro/
- Preview: https://preview.colorlib.com/theme/eventro/

## Section implementation order

### 1. Navbar
- Fixed/absolute positioning over hero
- Logo left, nav links center (Home, About, Programs, Speakers, Blog, Contact)
- "Buy Ticket" button right (deep purple #302072 background)
- Responsive: hamburger on mobile
- Transparent/semi-transparent background over hero

### 2. Hero
- Full-width image slider (owl-carousel or simple state-based slider)
- Date range badge/label ("12 Jan – 20 Jan 2025")
- Headline "Business Conference" in Oswald, white text
- Subtitle description paragraph
- "Join Now" CTA button (yellow #FDE449 bg, purple #302072 text, border-radius 5px)
- "Watch Video" text link/icon beside CTA
- Prev/next arrow navigation

### 3. About
- Two-column layout: text left, images right
- Heading "About the Conference" in Oswald
- Description paragraph
- Two images (about.jpg, about2.jpg) via picsum.photos
- Light background

### 4. Highlights
- "The New Era of Tech Companies" heading
- Description text
- Feature highlights (icon/image + text)
- Light background

### 5. Subscribe
- Background image section (use picsum.photos as bg)
- Heading "We have top executive & start up here"
- Description paragraph
- Email input + "Subscribe" button
- Overlay dark tint on background image

### 6. ProgramSchedule
- "Program Details" heading
- 4 tabbed day tabs (Day 1 through Day 4)
- Tab content: schedule items with time, title, description
- Use state-based tab switching (no jQuery)
- Light background

### 7. Speakers
- "Our Speakers" heading
- 3-column responsive grid
- Each card: speaker image (picsum.photos), name, role
- Light lavender (#F6F7FF) section background
- Card hover effect (overlay with social links or info)

### 8. ContactCTA
- "Book your seat" centered heading (white on dark)
- Description paragraph (white text)
- "Buy Ticket" button (yellow #FDE449 bg)
- Dark background with background image (picsum.photos)
- Centered layout

### 9. Footer
- Logo on left
- Nav links (Home, About, Programs, Speakers, Contact)
- Social icons (use lucide-react)
- "Made with Component Dock" link (replacing Colorlib attribution)
- Dark background

## Design fidelity notes
- **Color palette:** Yellow primary (#FDE449), deep purple (#302072), light lavender (#F6F7FF), blue accent (#0154F7), dark navy (#140C40)
- **Typography:** Oswald for headings (bold, 60px hero), Roboto for body text
- **Buttons:** 5px border-radius, text-transform uppercase for boxed-btn, yellow primary CTA with purple text
- **Cards:** Speaker cards with image + overlay on hover
- **Spacing:** Section-padding class, generous vertical padding
- **Dark sections:** Contact CTA uses dark bg with bg image + overlay
- **Slider:** Owl-carousel style with dot indicators and arrows
