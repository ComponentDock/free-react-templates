# Roadline — Design Notes

**Source:** ColorLib "Carries" — https://colorlib.com/wp/template/carries/
**Preview:** https://preview.colorlib.com/theme/carries/
**New name:** roadline (apps/roadline, @free-react-templates/roadline)

## Structure order (top → bottom)

1. Navbar (fixed, semi-transparent → solid)
2. Hero Slider (2+ slides, centered text, 2 CTA buttons)
3. Freight Services (3 cards, gray bg)
4. About + Quote Form (2-col, gray bg)
5. Service Area (cards grid + Why Choose Us + 4 stat boxes on dark bg)
6. Promo Features (icon grid + parallax CTA bar)
7. Testimonials (carousel)
8. Footer (newsletter bar + 4-col info + copyright)

## Section-by-section fidelity notes

### Navbar

- Fixed position, transparent dark bg → solid on scroll
- Logo left, nav links center-right
- Utility bar (user, search, bag, language select) on far right
- Mobile: hamburger toggle with orange border (#f39c12)

### Hero

- Full-viewport height, dark overlay (#3c4147 at 90% opacity) on background image
- Headline: large, white, uppercase, centered
- Subtitle: white, centered
- Two CTA buttons: white border, border-radius 3px, uppercase, letter-spacing 2px
  - Hover: bg becomes #f39c12, border becomes #f39c12
- Slider has owl-carousel transitions between slides

### Freight Services

- Gray background (#f7f9fc)
- 3-column responsive grid
- Each card: image on top, icon in circle below image, title, description, "Read More" link
- Cards animate in (fadeInUp with delay staggering)

### About + Quote Form

- Gray background (#f7f9fc)
- Left column (4 cols): "Get A Quote" form
  - Fields: name, email, phone (half-width pair), type, quantity (half-width pair), destination, message textarea
  - Submit button: solid background
- Right column (7 cols, offset 1): "25 years experience" heading, paragraph, "Read More" link
  - 3 stat counters with icons: 120 Projects, 100 Happy Clients, 30 Team Members

### Service Area

- Top: white bg, centered "Our Service" section title with decorative underline (orange bar)
- 3-column service cards (icon + title + description)
- Middle: 2-col — left: "Why Choose Us?" list; right: large image
- Bottom: dark overlay background, 4 stat boxes (Warehouse, Road Freight, Sea Freight, Air Freight)

### Promo Features

- White/light background
- 3-col grid, each col has 2 feature items
- Each item: circular icon (light bg #f4f7f9, orange icon #f39c12, border-radius 50%), title, description
- Below grid: parallax CTA bar — dark bg with background image, centered white headline about international freight, two CTA buttons

### Testimonials

- Section title with orange underline decoration
- Carousel/slider of testimonials
- Each: client name (uppercase, h3), testimonial text, star rating, avatar image
- Smooth slide transitions

### Footer

- Dark background (#5d6b82), white text
- Top area: newsletter — "Weekly Newsletter" heading, email input + "subscribe" button (orange bg on hover)
- Separator border line
- Bottom area: 4 columns — About Us (text + phone + email + address), Latest Tweets, Customer Service links (6 items), Instagram feed (6 images in grid)
- Bottom separator, copyright bar with Component Dock link

## Design tokens (quick reference)

- Font: Roboto (Google Fonts)
- Accent: #f39c12 (orange)
- Headings: #3c4a62
- Body: #687284
- Dark: #5d6b82
- Gray bg: #f7f9fc
- Hero overlay: #3c4147
- Buttons: 2px border, border-radius 3px, uppercase
- Icons: border-radius 50%, padding 21px center on 65px circle
