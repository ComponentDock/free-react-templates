# Indiglow — Implementation TODO + Design Notes

**Source:** ColorLib Blueline (https://colorlib.com/wp/template/blueline/)
**Preview:** https://preview.colorlib.com/theme/blueline/
**New name:** indiglow

## Section Order (from live preview DOM)

1. **Navbar** — absolute positioned, transparent over hero, logo + 3 nav links + hamburger
2. **Hero Banner** — full-screen background image, "Introducing" subtitle, large title (124px desktop, 20px mobile)
3. **Features** — 3-column numbered cards (01, 02, 03), gradient text numbers, white bg
4. **Video** — embedded video thumbnail with play button, thick light border, text below
5. **Services** — split: left black panel with white text + right 4 service cards (2x2 grid)
6. **Latest Works** — image carousel/slider with prev/next arrows
7. **Newsletter** — centered heading, email input (rounded), gradient CTA button
8. **Contact** — split: left image + right form (name, email, message, send button)
9. **Footer** — black bg, copyright, social icons

## Design Notes

### Colors / Tokens

- Brand: #2954c9 (solid), gradient #3c50ca → #77d5f7
- Body bg: #f9f9ff (light lavender)
- Headings: #222, body: #777
- Service area + footer: #000

### Typography

- Font: Poppins (Google Fonts, weights 200/300/400/500/600)
- Hero h1: 124px desktop, weight 300, letter-spacing 25px, text-shadow
- Feature numbers: 48px, gradient text via background-clip
- Light section headings (video, services, latest-work, subscription): weight 200 with bold spans at 600

### Button Style

- Pill shape (border-radius 20px)
- Gradient background: linear-gradient(0deg, #3c50ca, #77d5f7)
- Uppercase text, white color, weight 500

### Section-Specific Notes

#### Hero

- Background image covers full area, centered
- Height: 735px desktop, 600px mobile
- Text centered vertically and horizontally

#### Features

- Large gradient number on left, title + description on right
- Bottom padding 200px to push video section down

#### Video

- Video thumbnail with 20px solid #f3f3f3 border
- Dark overlay (rgba(0,0,0,0.5))
- Play button centered on overlay

#### Services

- Left: black bg, white text, "Services" with bold "We Offered"
- Right: white bg, 4 cards in 2x2 grid
- Each card: icon + uppercase title + description
- Cards have subtle border (#eeeeee80)

#### Latest Works

- Heading with bold "Latest Works" span
- Owl-carousel style slider
- Active item: full opacity + 20px white border
- Inactive: 50% opacity
- Prev/next arrows with gradient hover

#### Newsletter

- Centered heading, light weight + bold "Newsletter" span
- Email input: rounded (border-radius 25px), line-height 50px
- Gradient button positioned absolute right inside input container

#### Contact

- Left column: contact image
- Right column: white form with name, email, textarea, send button
- Send button: gradient pill, float-left

#### Footer

- Black bg, copyright text
- Social icons: dark boxes (#1e1e1e), gray icons, white on hover
- Footer links use accent blue #77d5f7

## Implementation Checklist

- [ ] Scaffold app from simplest existing template
- [ ] Set up package.json, CNAME, homepage
- [ ] Create src/main.tsx, src/App.tsx
- [ ] Implement Navbar component
- [ ] Implement Hero section (background image, text)
- [ ] Implement Features section (3-column numbered cards)
- [ ] Implement Video section (embed + text)
- [ ] Implement Services section (split layout)
- [ ] Implement Latest Works section (carousel)
- [ ] Implement Newsletter section (form + CTA)
- [ ] Implement Contact section (split form)
- [ ] Implement Footer (copyright + social)
- [ ] Add responsive breakpoints
- [ ] Write component tests (Vitest + RTL)
- [ ] Achieve 100% coverage
- [ ] Run npm install at repo root
- [ ] Verify build succeeds
