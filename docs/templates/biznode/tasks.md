# BizNode — Replication Research & Design Notes

## Source template

- **ColorLib name:** Bbs
- **ColorLib URL:** https://colorlib.com/wp/template/bbs/
- **Preview URL:** https://preview.colorlib.com/theme/bbs/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/bbs-free-small-company-website-template.jpg
- **Category:** Small company / creative agency website

## Section order (from live preview DOM)

1. **Header** — Logo (left) + nav links (Home, Generic, Elements) + hamburger
2. **Banner/Hero** — Centered "we're Creative" headline + "Get Started" CTA, purple circle background image
3. **Featured Area** — 2×2 grid: Unlimited Colors, Smart Security, Endless Support, 4th feature
4. **Video Area** — Full-bleed background image with dark overlay, centered headline + description
5. **Blog Area** — 3 blog cards side-by-side: image thumbnail + heading + description
6. **Story Area** — Dark/colored background, "Crafting Our Experiences" heading (white), body text
7. **Subscription Area** — "Subscribe Newsletter" heading, email input + gradient "Get Started" button
8. **Footer** — Nav links, social icons (FB, Twitter, Dribbble, Behance), copyright

## Design token extraction

From `https://preview.colorlib.com/theme/bbs/css/main.css`:

### Colors
- Primary: #f58e9a (pink/rose)
- Accent gradient end: #fbe44c (yellow)
- Gradient: `linear-gradient(0deg, #f58e9a 0%, #fbe44c 100%)`
- Heading text: #222222
- Body text: #777777
- Button hover text: #222222
- Button hover bg: #fff
- Default button bg: #f9f9ff
- Page/section bg: #fff (white)

### Typography
- Font: "Poppins", sans-serif
- Weights used: 300 (body), 500, 600, 900 (headings)
- Base font-size: 14px
- Line-height: 1.5em

### Buttons
- Primary button: border-radius 20px (pill), padding 0 30px, line-height 40px
- Background: gradient #f58e9a → #fbe44c
- Text: white (#fff)
- Hover: bg white, text #222222

### Layout
- `.main-wrapper-first`: width 68.75% (75% at ≥1200px, 90% at ≤1199px, 97% at ≤767px)
- `.main-wrapper`: full-width wrapper for rest of page
- `.banner-area`: height 600px, background image (purple circles)
- `.container`: Bootstrap-like centered container

## Screenshot visual analysis

The screenshot shows:
- **Hero:** Deep violet/purple background with dark semi-transparent circular shapes. White bold "WE'RE CREATIVE" heading (slanted, uppercase). Ghost outline "Get Started" pill button (white border, white text). Stylized "aas" logo in orange/yellow.
- **Features:** Clean white background, 2×2 grid. Colorful flat icons (fan, fingerprint, lifebuoy, cube). Bold dark gray headings. Light gray body text.
- **Overall:** Two-zone design — vivid purple hero vs clean white features. Modern, minimal, creative agency aesthetic.

## Implementation notes

### Component structure
```
src/
  App.tsx              — Composes all sections in order
  components/
    Navbar.tsx         — Header with logo, nav links, hamburger menu
    Hero.tsx           — Banner area with heading + CTA button
    Features.tsx       — 2×2 feature grid (4 feature cards)
    VideoArea.tsx      — Background image section with overlay text
    Blog.tsx           — 3 blog cards in a row
    Story.tsx          — Dark section with headline + description
    Newsletter.tsx     — Subscription form with email input + gradient CTA
    Footer.tsx         — Footer links, social icons, copyright
```

### Key implementation decisions
- Hero background is an image (banner.png), NOT a CSS color. Use a placeholder image or a solid purple background with CSS circles.
- Primary button uses gradient background with `::after` pseudo-element for hover state. In React: use a div overlay or conditional class.
- The `main-wrapper-first` is a centered constrained-width container (not full-width).
- Blog card thumbnails use background-image styling (`style={{ background: url(...) }}`).
- The hamburger menu icon uses Linearicons (`lnr lnr-menu`); replace with a hamburger icon from lucide-react.
- Footer attribution must link to Component Dock, not ColorLib.

### Placeholder images
- Banner background: use a purple-toned placeholder or CSS gradient with circles
- Feature icons: use lucide-react icons (Palette, Shield, LifeBuoy, Box or similar)
- Blog thumbnails: `https://picsum.photos/seed/biznode-1/400/300`, `biznode-2`, `biznode-3`
- Video area background: `https://picsum.photos/seed/biznode-video/1920/1080`

### Responsive behavior
- Mobile (<768px): wrapper width 97%, hamburger menu active, single-column grids
- Tablet (768–1199px): wrapper width 90%
- Desktop (≥1200px): wrapper width 75%
