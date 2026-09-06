# AutoDock — Design Notes

Source: ColorLib Cardoor (https://preview.colorlib.com/theme/cardoor/)

## Section Order (from preview DOM)

1. Header Top Bar — dark #1e2228, address/phone/hours/social icons, golden accents
2. Header Bottom — transparent-over-hero, logo left, nav links right, sticky on scroll
3. Hero Slider — dark overlay, booking form (left), headline (right)
4. About Us — text + video, section title with golden car icon accent line
5. Partner Logos — horizontal strip of partner brand logos
6. Our Services — 3x2 grid of icon + title + description cards
7. Fun Facts — dark overlay, 3 counters (clients/cars/offices)
8. Choose Car — tabbed interface (Popular/Newest/Office Map)
9. Pricing — dark overlay, 3 pricing cards (Business/Trial/Standard)
10. Testimonials — carousel with quote, name, photo
11. Mobile App — dark bg, "SAVE 30%" headline, store download buttons
12. Tips & Articles — horizontal blog cards with thumbnail + meta
13. Footer — 3 columns (About+newsletter, Recent Posts, Contact), dark #1e2228
14. Copyright Bar — bottom bar with Component Dock link

## Color Palette

| Role | Hex | Usage |
|------|-----|-------|
| Brand yellow | #ffd000 | Accents, buttons, hover states, borders, icon color |
| Dark charcoal | #1e2228 | Header top, footer, service backgrounds |
| White | #fff | Body bg, text on dark, form bg |
| Dark text | #333 | Headings on white, section title lines |
| Overlay | rgba(0,0,0,0.8) | Hero, fun facts, pricing overlays |
| Black | #000 | Menu button bg, text on dropdown |

## Typography

- Body: 'Open Sans', sans-serif
- Section titles: uppercase, 15px base, font-weight 300
- Nav links: uppercase, font-weight 700
- Footer widget titles: 22px, uppercase, font-weight 600
- Accent font: 'Monoton' (decorative, for logo if used)

## Button Styles

- Book Now (hero): golden #ffd000 bg, dark text, sharp corners (0 radius)
- About buttons: outlined or golden, sharp corners
- Newsletter submit: pill-shaped (border-radius 50px), golden
- Mobile app buttons: outlined with icons, golden accent
- Nav hamburger: golden #ffd000 bg, 2px radius

## Layout Notes

- Max-width container (Bootstrap 1140px default)
- Section padding: 100px vertical
- Grid: Bootstrap 12-col, mostly col-lg-4 and col-lg-6 splits
- Fun facts: col-lg-4 col-md-6 (2-column on tablet)
- Pricing: col-lg-4 col-md-6
- Articles: full-width row per article with 5/7 thumbnail/content split

## Fidelity Priorities

1. Match section order exactly (14 sections in order)
2. Match color tokens (#ffd000 brand, #1e2228 dark, overlay)
3. Match the booking form layout in hero (left column)
4. Match the tabbed car selection interface
5. Match 3-column footer with newsletter form
6. Use picsum.photos for all placeholder images
7. Use lucide-react icons (replace FontAwesome equivalents)
8. Footer must link to Component Dock
