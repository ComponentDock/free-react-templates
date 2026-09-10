# Atolite — Task Outline + Design Notes

Source: ColorLib "Atomic" — https://preview.colorlib.com/theme/atomic/
New name: atolite
Stack: React 19 + Vite + Tailwind 4 + TypeScript

## Section order (top to bottom)

1. Navbar
2. Hero/Cover
3. Overlap Features (3-col)
4. About Text (2-col)
5. Image Carousel
6. Features Grid (6 blocks, bg-light)
7. Portfolio Thumbnails (2-row masonry)
8. Counter Stats (bg-primary)
9. Testimonial
10. Footer

## Component plan

| Component       | File                                 | Notes                                                                   |
| --------------- | ------------------------------------ | ----------------------------------------------------------------------- |
| Navbar          | `src/components/Navbar.tsx`          | Logo left, links right. Transparent desktop, blue mobile. Dark variant. |
| Hero            | `src/components/Hero.tsx`            | Full-width bg image, two-col layout, play button circle                 |
| OverlapFeatures | `src/components/OverlapFeatures.tsx` | White card with shadow, 3 icon blocks                                   |
| AboutText       | `src/components/AboutText.tsx`       | Two-col text, lead paragraph                                            |
| ImageCarousel   | `src/components/ImageCarousel.tsx`   | Full-width slider, 3+ images. Use CSS scroll snap or simple carousel    |
| FeaturesGrid    | `src/components/FeaturesGrid.tsx`    | 6 icon blocks in 2x3 grid on light bg                                   |
| PortfolioThumbs | `src/components/PortfolioThumbs.tsx` | Two rows, 1/3 + 2/3 split, hover overlay                                |
| CounterStats    | `src/components/CounterStats.tsx`    | Blue bg, 3 columns, animated count-up                                   |
| Testimonial     | `src/components/Testimonial.tsx`     | Large quote mark, blockquote text                                       |
| Footer          | `src/components/Footer.tsx`          | 4 columns, download btn, social icons, copyright                        |

## Design notes

### Navbar

- Desktop: transparent background, dark text (#000), uppercase 13px links with letter-spacing 0.1em
- Mobile: #0389FF background, white text
- Hamburger toggle on mobile (slide-down menu with dark bg #595959)
- Services link has dropdown (multi-level in original — simplify to single-level dropdown)

### Hero

- Full-width background image (use picsum.photos/seed/atolite-hero/1920/800)
- Two-column: left = heading (30px mobile, 50px desktop) + lead text + primary button; right = play button
- Play button: 80px circle, 2px border rgba(0,0,0,0.1), centered play icon
- Heading color: #000, lead color: #999

### Overlap Features

- White card, border-radius 7px, shadow 0 10px 20px -8px rgba(0,0,0,0.2)
- Negative margin-top: -13em to overlap hero
- Padding: 50px (responsive)
- Three columns, each with large gray icon (80px font-size, color #d6dadd) + h5 heading + paragraph

### About Text

- Simple two-column layout
- Left: lead paragraph (18px, font-weight 300)
- Right: two body paragraphs

### Image Carousel

- Full-width, container-fluid
- Use CSS scroll-snap for simple horizontal scroll (no heavy carousel library)
- Images at full width with img-fluid

### Features Grid

- Background: #f8f9fa (light gray)
- Six blocks in 2x3 grid (3 cols on md+)
- Each block: centered icon (80px, #d6dadd) + h5 heading + paragraph
- "More Features" button: black bg, white text, square corners, uppercase

### Portfolio Thumbnails

- Two rows, each row is a flex container
- Row 1: one-third (33.3%) + two-third (66.6%)
- Row 2: two-third (66.6%) + one-third (33.3%)
- Each card: height 500px, bg-size cover, dark overlay (opacity 0.1)
- Hover: overlay opacity 0.5, content slides in from top
- Content: h2 title + category subtitle

### Counter Stats

- Background: #0389FF (primary)
- Three columns, centered
- Large number (50px, white, count-up animation on scroll)
- Uppercase label (white, opacity 0.5)

### Testimonial

- Large quotation mark: 100px, black, centered
- Blockquote text: 18px, black, line-height 2
- Centered in 8-col wrapper

### Footer

- Background: #f8f9fa
- Left column: About heading + paragraph
- Three link columns: Learn More, Support, About Us
- Fifth column: "Download for free" button + "Connect With Us" + social icons
- Bottom row: copyright with Component Dock link (replace Colorlib attribution)
- All text color: body #999, headings uppercase 15px #ccc

## Token map for Tailwind @theme

```
--color-primary: #0389FF;
--color-primary-hover: #36a1ff;
--color-body: #999999;
--color-heading: #000000;
--color-icon-gray: #d6dadd;
--font-family-sans: "Work Sans", sans-serif;
```

## Tasks

- [ ] Scaffold app from simplest existing template
- [ ] Install Work Sans via Google Fonts link in index.html
- [ ] Build Navbar component
- [ ] Build Hero component
- [ ] Build OverlapFeatures component
- [ ] Build AboutText component
- [ ] Build ImageCarousel component
- [ ] Build FeaturesGrid component
- [ ] Build PortfolioThumbs component
- [ ] Build CounterStats component
- [ ] Build Testimonial component
- [ ] Build Footer component
- [ ] Compose all sections in App.tsx
- [ ] Write tests for each component (100% coverage)
- [ ] Update public/CNAME and package.json homepage
- [ ] Run verify-app.sh and fix any issues
