# PaintBox — Implementation Notes

## Source
- ColorLib: Five Star (https://colorlib.com/wp/template/five-star/)
- Preview: https://preview.colorlib.com/theme/five-star/
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/five-star-art-crafting-website-template.jpg
- Category: Art / Crafting Website

## Section Order (fidelity reference)

1. **Header** — Transparent sticky nav. Logo left, nav links (Home, Generic, Elements) center-right. Hamburger menu icon on mobile.
2. **Hero Banner** — Full-width background image with dark overlay (rgba(0,0,0,0.75)). Heading "Crafting Best Experience" in brand red (#f5204b) at 60px. Subtitle "Art and Crafting / Acting and Philosophy" in white. Vertically centered, fullscreen height.
3. **Experience Section** — Two image thumbnails (col-lg-3) on left, text content on right (col-lg-6). Heading "From the root of experience We dig out the best talent", sub-heading, paragraph, "View Details" primary-btn. Section padding 120px 0.
4. **Service Carousel** — Dark image background with light overlay (rgba(0,0,0,0.25)). White card carousel (col-lg-6) with heading in brand red and paragraph. Prev/next arrow triggers on right side. 3 carousel items.
5. **Services Grid** — 4 service cards in a row (col-lg-3 col-sm-6). Each: 130×130 white square icon container, Linearicons icon in brand red (#f5204b), title, description. Light background (#f9faff). Padding 90px top, 120px bottom.
6. **Video Section** — Two-column layout. Left: video thumbnail (col-lg-6) with background image, dark overlay, centered play button. Right: heading + paragraph text (col-lg-6). Section has background image with dark overlay.
7. **Projects Gallery** — Grid of gallery images (col-lg-3 col-md-4 or similar). Background images with cover sizing, 200px height.
8. **Contact Area** — Two-column layout. Left (col-lg-6): contact address items with white square icon containers (60×60, 3px radius), address/email/phone details. Right (col-lg-6): dark (#222222) contact form with name, email, subject, message, "Send Message" button. Background: #f9faff.
9. **Footer** — Dark (#222222) background. Four-column layout:
   - Column 1: Navigation links (white text, hover → brand red)
   - Column 2: Social links (Facebook, Twitter, Dribbble, Behance)
   - Column 3: Newsletter subscription (input + "Get Started" button)
   - Column 4: Instagram feed grid (4 images in 2×2)
   - Footer bottom: Copyright "© 2017 All rights reserved" with Component Dock link

## Key Fidelity Notes

- **Font:** Poppins (weights 300, 400, 500, 600) — load via Google Fonts link
- **Brand red:** #f5204b — used for headings, buttons, icons, links, accents, selection color
- **Body text color:** #777777 — paragraphs and body copy
- **Heading color:** #222222 — all h1–h6
- **Section gaps:** 120px vertical padding on section-gap sections
- **Service area:** 90px top, 120px bottom padding, #f9faff background
- **Buttons:** Pill shape (20px border-radius), transparent bg, brand red text, hover fills brand red
- **Carousel:** White card on dark image background, 100px internal padding, prev/next arrows stacked vertically on right
- **Video area:** Background image, dark overlay, play button centered in thumbnail
- **Contact form:** Dark (#222222) background, transparent inputs with light borders
- **Address icons:** 60×60 white square, 3px radius, hover → brand red bg + white icon
- **Footer:** Dark bg, white text, brand red hover on links, newsletter subscription with input + button

## Component Breakdown

```
src/
  App.tsx              — composes all sections
  components/
    Header.tsx         — transparent sticky nav + logo + hamburger
    Hero.tsx           — full-width banner with dark overlay
    Experience.tsx     — image thumbnails + text content
    ServiceCarousel.tsx — dark bg carousel with white cards
    ServicesGrid.tsx   — 4-column service icon cards
    VideoSection.tsx   — two-column video thumbnail + text
    Gallery.tsx        — project image grid
    ContactArea.tsx    — address info + dark contact form
    Footer.tsx         — nav + social + newsletter + Instagram + copyright
  index.css            — Tailwind + theme tokens
```

## Placeholder Images

- Hero background: `https://picsum.photos/seed/paintbox-hero/1920/950`
- Experience thumbnails: `https://picsum.photos/seed/paintbox-exp-1/400/400` and `https://picsum.photos/seed/paintbox-exp-2/400/400`
- Carousel background: `https://picsum.photos/seed/paintbox-carousel-bg/1920/800`
- Video thumbnail: `https://picsum.photos/seed/paintbox-video/800/500`
- Gallery images: `https://picsum.photos/seed/paintbox-gallery-1/400/200` (etc.)
- Instagram feed: `https://picsum.photos/seed/paintbox-insta-1/200/200` (etc.)

## Implementation Priority

1. Set up app scaffold (copy simplest existing app, rename to paintbox)
2. Install Google Fonts (Poppins) in index.html
3. Define theme tokens in index.css (@theme block with brand red)
4. Build Header + Hero (above-fold)
5. Build Experience section
6. Build Service Carousel
7. Build Services Grid
8. Build Video Section
9. Build Gallery
10. Build Contact Area
11. Build Footer
12. Tests (TDD: write tests before each component)
