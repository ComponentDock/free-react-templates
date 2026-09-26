# Charcoal — Design Notes & Implementation Todo

Source: ColorLib "Calvin" — https://colorlib.com/wp/template/calvin/
Preview: https://preview.colorlib.com/theme/calvin/
Name: charcoal (NEW — not "calvin")

## Design Notes

### Overall Aesthetic
Personal portfolio / vCard for a digital product designer. Clean, modern,
artist-studio vibe. Light background (white) with bold orange accents. The
hero uses a full-bleed background image with a floating employee illustration.
Footer is solid black providing strong contrast.

### Layout Pattern
- One-page scroll layout (single `index.html` equivalent in React)
- Bootstrap-inspired 12-column grid → Tailwind grid utilities
- Sections flow top to bottom with generous vertical padding (120px standard,
  40px for tighter sections like services/gallery)

### Color System
| Token | Hex | Usage |
|-------|-----|-------|
| primary | #FF8553 | CTAs, buttons, progress bars, links, footer accent |
| primary-dark | #ec703f | Gradient endpoint for CTA buttons |
| accent-light | #FFEFAE | Submit button bg, light accent |
| black | #000000 | Headings, footer bg, body text |
| body-text | #635c5c | Link color, paragraph body |
| border-gray | #EFEFEF | Service card dividers |
| footer-icon | #FD8F5F | Social icons in footer |

### Typography
- Headings: Roboto Condensed (300, 400, 700)
- Body: DM Sans (500, 700) at 16px
- All headings black (#000000), body text black with lighter weight

### Button Styles
1. `.btn` (primary CTA): gradient bg (#FF8553 → #ec703f), border-radius 25px,
   white text, box-shadow, hover slides gradient
2. `.border-btn` (outlined): transparent bg, white border, border-radius 30px,
   white text, hover fills
3. `.browse-btn` (text link): orange text with bottom underline bar

## Section-by-Section Fidelity Notes

### 1. Header/Navbar
- Transparent background over hero, sticky on scroll
- Logo left, nav center, "Let's Talk" border-btn right
- Mobile: hamburger menu (no submenu)
- Desktop Blog nav has dropdown submenu

### 2. Hero
- Full-bleed background image (h1_hero.png) with `background-size: cover`
- Two-column: employee illustration left (col-4/5), text right (col-8/7)
- Headline: "My name is [Name]. Digital Product Designer" (h1, Roboto Condensed)
- Subtitle: "Head of design at [Company]" (p, DM Sans)
- Recreation: use picsum.photos/seed/charcoal-portrait for illustration

### 3. About Info Bar
- Absolute-positioned bar overlapping hero bottom
- Three info blocks in a flex row with `justify-content-between`
- Block 1: "Design For" → "Web & Mobile"
- Block 2: "Phone" → phone number (text-right)
- Block 3: "Drop your Message" → email (text-right) + envelope icon
- White background, clean typography

### 4. Services (Our Expertise)
- Section title: "My Expertise" (left-aligned, large, mb-80)
- 2×2 grid of service cards (no gutters via `no-gutters`)
- Each card: icon image (SVG), title (h5), description paragraph, browse-btn
- Cards separated by 1px `#EFEFEF` borders (left + bottom)
- First row has no top border, left column has no left border

### 5. Gallery (My Works)
- Section title: "My Works" (left-aligned, mb-60)
- 2-column image grid (4 items total, col-md-6)
- Each item: background image in a `.box` container
- Hover: black overlay fades in, showing project name in 26px text
- "More Work" border-btn centered below grid

### 6. About Me
- Two-column: text left (col-xl-6), skills right (col-lg-6)
- Left: "About Me" heading + 2 paragraphs + bottom quote
- Right: 3 skill bars — each has label, percentage, orange progress bar
  - User Interface Design: 60%
  - User Experience: 89%
  - Illustration: 95%
- Bars use barfiller plugin → recreate with CSS transition/animation

### 7. Brand Carousel
- Inside About section, below skill bars
- Horizontal strip of 7 brand/logo images
- Uses owl-carousel → recreate with CSS scroll snap or simple auto-scroll
- Border top + bottom: `brand-border` class

### 8. Testimonials
- Section title: "Client Testimonial" (centered, mb-50)
- Carousel of testimonial cards (owl-carousel)
- Each card: centered quote text, founder photo (circle), name, role
- Auto-advancing carousel

### 9. Blog (Latest News)
- Section title: "Latest News" (left-aligned, mb-50)
- Carousel of blog cards (owl-carousel)
- Each card: image (top), category tag button (orange), date + author line,
  article title link
- At least 3 cards visible

### 10. Footer
- Solid black background (`#000000`)
- **Want To Work CTA section** (padded):
  - Logo image (white version)
  - Description paragraph (white text)
  - Social icons row: Twitter, Facebook, Pinterest, Globe, Instagram
  - Two buttons right: "Let's Talk" (orange .btn), "Download CV" (outlined white)
- **Footer bottom** (border-top):
  - Left: copyright line with heart icon + Colorlib attribution → REPLACED
    with "Component Dock" link
  - Right: footer nav links (Home, Work, Service, Blog, Contact)

## Implementation Todo

- [ ] Scaffold app: `apps/charcoal/` from a clean template copy
- [ ] Set up `index.css` with Tailwind `@theme` tokens (primary #FF8553, etc.)
- [ ] Set up `index.html` with Google Fonts (Roboto Condensed + DM Sans)
- [ ] Build Navbar component (transparent, sticky, mobile hamburger)
- [ ] Build Hero component (bg image, two-column, headline + portrait)
- [ ] Build AboutInfoBar component (three info blocks)
- [ ] Build Services component (2×2 grid, icon cards)
- [ ] Build Gallery component (2-col grid, hover overlays)
- [ ] Build AboutMe component (text + animated skill bars)
- [ ] Build BrandCarousel component (logo strip, auto-scroll)
- [ ] Build Testimonials component (carousel with quotes)
- [ ] Build Blog component (card carousel)
- [ ] Build Footer component (CTA band + bottom bar + Component Dock link)
- [ ] Compose App.tsx with all sections in order
- [ ] Write tests for each component (100% coverage)
- [ ] Verify: typecheck, lint, test:coverage, build all pass
