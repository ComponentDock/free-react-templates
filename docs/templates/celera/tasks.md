# Celera — Implementation Tasks & Design Notes

**Source:** ColorLib CellOn → https://colorlib.com/wp/template/cellon/
**Preview:** https://preview.colorlib.com/theme/cellon/
**New Name:** celera
**Package:** @free-react-templates/celera

## Section Order (matching original 1:1)

1. Header (Navbar)
2. Banner / Hero
3. Video Area
4. About
5. Features (3×2 grid)
6. Stats / FAQ
7. Contact
8. Footer

## Component Breakdown

| #   | Component | File          | Notes                                                                                                                                                                                     |
| --- | --------- | ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | Navbar    | Navbar.tsx    | Logo left, hamburger right. Transparent/absolute positioning. Nav links hidden by default on mobile, toggled on click.                                                                    |
| 2   | Hero      | Hero.tsx      | Split: decorative image left (6-col), text + CTA right (6-col). Headline "Behind Every **Success** There is a **Cactus**" with green-highlighted words. Pill-shaped "Get Started" button. |
| 3   | VideoArea | VideoArea.tsx | Background image with green overlay (rgba(108,187,35,0.85)). Centered play button. Heading below. Full-width.                                                                             |
| 4   | About     | About.tsx     | White background. Left: heading "Brief Information About" + paragraph + "View More" outlined button. Right: image.                                                                        |
| 5   | Features  | Features.tsx  | Green overlay background. 3×2 grid of white feature cards. Each: large icon (use lucide-react), uppercase heading, description. 6 cards total.                                            |
| 6   | StatsFaq  | StatsFaq.tsx  | White background. Left column: 4 stat counters (number + label). Right column: 3 FAQ items (heading + paragraph).                                                                         |
| 7   | Contact   | Contact.tsx   | Green overlay background. Centered heading "Send Us Message". Two-column inputs (name, email), full-width textarea, "Send Message" button.                                                |
| 8   | Footer    | Footer.tsx    | White background. 4 columns: Top Product, Navigation, Compare, Quick About (with phone/email + social icons). Bottom bar: copyright + Component Dock link.                                |

## Design Notes

### Colors

- Brand green: `#6cbb23` — used for button fills, text highlights, icon colors,
  section overlays, footer link hovers, form input borders
- Feature icon hover background: same brand green
- Feature icon default background: `#f0f8e9` (light green)
- Page background (outside box): `#f6f6fc`
- Section backgrounds: white for banner, about, stats/faq, footer
- Green overlay on video, features, and contact: `rgba(108,187,35,0.85)`

### Typography

- Font: Poppins (weights: 100, 300, 400, 500, 600)
- Hero headline: weight 100 (ultra-light), 48px
- Feature/FAQ headings: weight 600, 18px, letter-spacing 2.5-3px
- Body text: weight 300, 14px, color #777
- Headings: color #222

### Buttons

- Primary: bg #6cbb23, color white, border-radius 20px (pill)
- Primary-border: border #6cbb23, color #6cbb23, transparent bg
- Hover: swap fill/color

### Outer Box

- Body has a box-shadow: 0 0 50px rgba(0,0,0,0.2)
- Margin: 50px all around (30px on tablet, 10px on mobile)
- This creates a "framed" appearance — consider replicating

### Images

- Hero: use picsum.photos/seed/celera-hero/600/600 (cactus placeholder)
- About: use picsum.photos/seed/celera-about/600/500
- Video bg: use picsum.photos/seed/celera-video/1920/1080
- Feature bg: reuse video bg image
- Contact bg: use picsum.photos/seed/celera-contact/1920/1080

## Implementation Order

1. Scaffold app folder, copy simplest existing app, rename package
2. Write tests per component (TDD red phase)
3. Implement components in section order (1→8)
4. Add Poppins font link to index.html
5. Set up Tailwind theme tokens in index.css (@theme block)
6. Run full coverage, ensure 100%
7. Commit + push

## Fidelity Notes

- The original uses Bootstrap grid — we use Tailwind's grid/flex utilities
- Original nav is hidden by default (`nav.hide`) — our mobile-first approach
  uses a hamburger toggle with React state
- Counter stats in original use jQuery counterup — use static numbers or
  a lightweight React counter
- Contact form posts to mail.php — ours will be a static form with validation
- Original footer has Colorlib attribution — replaced with Component Dock
