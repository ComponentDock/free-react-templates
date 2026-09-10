# Celerate — Implementation Todo

Source: ColorLib "CellOn" (https://colorlib.com/wp/template/cellon/)
Preview: https://preview.colorlib.com/theme/cellon/
New name: celerate (apps/celerate, @free-react-templates/celerate)

## Design Notes

### Section Order (fidelity reference)

1. Header/Navbar — absolute positioned, logo + nav links + hamburger
2. Banner/Hero — split layout: illustration image left, heading + CTA right
3. Video Area — background image, green overlay, play button, text
4. About Section — split layout: text left, image right, white bg
5. Features Section — background image, green overlay, 7 feature cards in grid
6. Stats Counter + FAQ — 4 counters left, 3 FAQ items right
7. Contact Area — background image, green overlay, form
8. Footer — 4-column links, social icons, copyright

### Color Palette

- Primary accent: #6cbb23 (vibrant green) — buttons, icons, highlights, links, overlays
- Page background: #f6f6fc (light grayish-blue)
- Heading text: #222
- Body text: #777
- Feature icon bg: #f0f8e9 (light green)
- Contact input border: #a6d477 (muted green)
- Overlay: rgba(108,187,35,0.85) — video, features, contact sections
- Card/section backgrounds: #fff

### Typography

- All text: Poppins (100–600 weights from Google Fonts)
- Headings: font-weight 500–600
- Body: font-weight 300
- Uppercase on feature headings, section labels, navigation

### Button Styles

- Primary: #6cbb23 bg, white text, border-radius 20px (circle), no border
- Primary hover: white bg, #6cbb23 text, #6cbb23 border
- Border variant: white bg, #6cbb23 text, #6cbb23 1px border, border-radius 20px
- Border hover: #6cbb23 bg, white text
- Contact send: white bg, #6cbb23 text, #eee border, border-radius 20px
- All buttons use `.arrow` inline-flex with right arrow icon

### Layout Notes

- Page wrapper (.oz-body-wrap): 50px margin, 50px box shadow, relative positioning
- Banner: `.fullscreen` with `align-items-center`, split col-lg-6/col-lg-6
- Features: 3-col grid (col-lg-4 col-sm-6), 7 cards total (4+3 layout)
- Stats/FAQ: col-lg-3 left (counters), col-lg-9 right (FAQ)
- Contact form: centered (col-lg-6 col-md-8 heading, col-lg-5 + col-lg-5 inputs, col-lg-10 textarea + button)

### Component Breakdown

- `Navbar.tsx` — absolute positioned header, logo, nav links, hamburger icon
- `Hero.tsx` — split layout banner, illustration image, heading with accent spans, CTA button
- `VideoArea.tsx` — background image, green overlay, play button, heading text
- `About.tsx` — two-column layout, heading, paragraph, border CTA, image
- `Features.tsx` — grid of FeatureCard components, green overlay bg, 7 cards
- `FeatureCard.tsx` — white card, green icon, uppercase heading, description
- `StatsCounter.tsx` — 4 counter items with animated numbers
- `FaqSection.tsx` — 3 FAQ items with question headings and answers
- `ContactForm.tsx` — green overlay bg, heading, name/email/message fields, send button
- `Footer.tsx` — 4-column link grid, social icons, copyright with Component Dock

### Images

- Hero illustration: `https://picsum.photos/seed/celerate-hero/800/800`
- About image: `https://picsum.photos/seed/celerate-about/600/400`
- Video background: `https://picsum.photos/seed/celerate-video/1920/1080`
- Features background: `https://picsum.photos/seed/celerate-features/1920/1080`
- Contact background: `https://picsum.photos/seed/celerate-contact/1920/1080`

### Key Fidelity Points

- Green overlay on video, features, and contact sections (rgba(108,187,35,0.85))
- White shadow wrapper card on gray body background
- Feature cards: white bg, green Linearicon icons, hover to green bg + white icon
- Counter numbers in green (#6cbb23), lightweight font-weight
- Uppercase headings with letter-spacing on feature cards and FAQ
- All buttons use circle border-radius (20px) with arrow icon
