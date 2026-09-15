# Typecraft — Design Notes

Source: ColorLib "Typo" — https://colorlib.com/wp/template/typo/
Preview: https://preview.colorlib.com/theme/typo/

## Section Order (top to bottom)

1. **Header** — sticky navbar: logo left, nav links right (Home, Generic, Elements), hamburger on mobile
2. **Hero / Banner** — full-width, gradient overlay (#f76268→#fce08a @ 0.9 opacity), centered title image + paragraph + "Get Started" pill CTA
3. **About Top** — split: image left (with gradient fade-to-#f9f9ff overlay), two feature cards right (icon + heading + paragraph)
4. **Features** — 3-column: two text columns + one image column, white bg
5. **Offer** — dark overlay (#000 @ 0.8) over bg image, 3-column: large heading left, device image center, description right
6. **About Bottom** — reversed split: text left (icon + heading + paragraph + "Learn More" CTA), image right (with fade overlay)
7. **Process** — 3×3 grid of icon cards, each with a red-pink (#f5204b) line icon, heading, paragraph
8. **Newsletter** — black bg, centered "Subscribe" heading + email input + "Get Started" button
9. **Footer** — light bg (#f9f9ff), 4-column links (Top Products, Navigation, Compare, About), bottom bar with copyright + social icons

## Fidelity Notes

### Header
- Logo on left, nav on right. Hamburger icon (lnr-menu) for mobile.
- Nav items: Home, Generic, Elements — replace with template-appropriate links.
- Header sits inside the hero-area wrapper (not fixed/sticky in the original, but the wrapper has top margin 6rem).

### Hero
- Coral-to-yellow gradient overlay is the defining visual element.
- Title is an image (`title-img.png`) — replace with a text heading or SVG.
- Pill button: transparent bg, white border, border-radius 20px. Gradient fill on hover.
- Background image behind overlay.

### About Top
- Full-width container-fluid, image left with gradient fade overlay, text right.
- Two stacked feature cards with circular icons (Linearicons: rocket, sun).
- Background: #f9f9ff (very light blue-gray).

### Features
- Simple 3-column layout on white background.
- Right column is an image; left two are text.

### Offer
- Background image with dark overlay (#000 @ 0.8).
- Left: large multi-line heading. Center: device/screen image. Right: sub-heading + paragraph.
- All text is white.

### About Bottom
- Mirror of About Top: text on left, image on right.
- Gradient fade overlay on image (right-to-left, fading to #f9f9ff).
- "Learn More" pill button.

### Process
- 3×3 grid of cards, each with:
  - Red-pink (#f5204b) line icon (30px)
  - Uppercase heading with letter-spacing 2px
  - Light-weight paragraph (14px, weight 300)
- White background.

### Newsletter
- Black background, white text.
- Centered layout.
- Email input + "Get Started" pill button.
- Form uses Mailchimp-style action (replace with local handler).

### Footer
- Light bg (#f9f9ff).
- 4 columns: Top Products (4 links), Navigation (4 links), Compare (3 links), About (paragraph).
- Bottom bar: white bg, copyright left, social icons right (Facebook, Twitter, Dribbble, Behance).
- Footer links colored #f67590 (pink).
- MUST include Component Dock link.

## Component Mapping

| Section       | Component file        | Notes                                    |
|---------------|-----------------------|------------------------------------------|
| Header        | Navbar.tsx            | Logo + nav + hamburger toggle            |
| Hero          | Hero.tsx              | Gradient overlay, title, CTA             |
| About Top     | AboutTop.tsx          | Split layout with feature cards          |
| Features      | Features.tsx          | 3-column text + image                    |
| Offer         | Offer.tsx             | Dark overlay, 3-column                   |
| About Bottom  | AboutBottom.tsx       | Reversed split with CTA                  |
| Process       | Process.tsx           | 3×3 icon card grid                       |
| Newsletter    | Newsletter.tsx        | Email subscription form                  |
| Footer        | Footer.tsx            | 4-column links + bottom bar              |

## Responsive Breakpoints

- Desktop: ≥992px (3-column layouts)
- Tablet: 768px–991px (2-column or stacked)
- Mobile: <768px (single column, hamburger nav)

## Design Token Extraction Source

All tokens from `https://preview.colorlib.com/theme/typo/css/main.css`:
- Brand gradient: #f76268 → #fce08a
- Primary text: #222222
- Section backgrounds: #f9f9ff (about/offer/footer), #000 (newsletter/offer overlay)
- Accent: #f5204b (process icons), #f67590 (footer links)
- Font: Poppins (300, 500, 600)
- Button: pill shape (border-radius 20px), transparent + white border
