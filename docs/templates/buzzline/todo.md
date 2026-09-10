# Buzzline — Implementation TODO + Design Notes

## Source
- **ColorLib original:** Callcenter — https://colorlib.com/wp/template/callcenter/
- **Preview:** https://preview.colorlib.com/theme/callcenter/
- **New name:** Buzzline (apps/buzzline, @free-react-templates/buzzline)

## Section order (top → bottom)

1. Navbar
2. Hero/Banner
3. Features (3-column)
4. Testimonials (carousel)
5. Offered Services (icon grid + text)
6. Facts/Stats (5 counters)
7. Services (6 cards, dark bg)
8. Info/About (split image + text)
9. About/Video (split text + video bg)
10. Brand Logos (5 grayscale)
11. Contact (form)
12. Footer (4 columns)

## Section-by-section fidelity notes

### Navbar
- Fixed position, white background
- Logo: blue four-point star icon + "Buzzline" text (replace ColorLib logo)
- Nav links: Home, Feature, We Offer, About, Contact (drop Pages dropdown — simplify for single-page)
- Scroll shadow effect on scroll (box-shadow transition)
- Mobile: hamburger toggle, slide-in dark nav panel

### Hero/Banner
- Full-viewport height with background image + dark overlay (rgba(0,0,0,0.9))
- Right-aligned text content in a 7-col Bootstrap-like grid
- Subtitle: "DISCOVER THE COLORFUL WORLD" — uppercase, letter-spacing 3px, font-weight 400
- Headline: "Efficiency Booster" — 60px, font-weight 700, line-height 1em
- Paragraph: 2-line lorem ipsum
- CTA: "Discover Now" — pill-shaped (border-radius 25px), gradient bg (#62bdfc → #8490ff), white text, uppercase
- Use picsum.photos for hero bg image: `https://picsum.photos/seed/buzzline-hero/1920/1080`

### Features
- 3-column grid on white background, standard section-gap padding (120px 0)
- Each column: colored line-art icon (use lucide-react equivalents: Headphones, Clock, Wrench), title (h4, 18px, weight 600), paragraph text
- Icons should have touches of color (yellow, blue, orange) — use distinct icon colors per feature

### Testimonials
- Background image with gradient overlay (linear-gradient #62bdfc → #8490ff, opacity 0.9)
- Heading: "Why Choose Us Your Fitness Builder" — white, centered
- Subtitle: "Who are in extremely love with eco friendly system." — white
- Carousel/slider of testimonial cards: user photo (circle), quote text, author name, role
- Cards have white background, padding 25px 30px

### Offered Services
- Heading: "Our Offered Services" — white text on gradient/colored bg area
- Split layout: left 6-col has 3×2 grid of icon boxes, right 5-col has text + CTA
- Icon boxes: white bg, 30px padding, box-shadow with blue tint (rgba(132,144,255,0.2)), centered icon
- Hover: blue border appears
- Right side: "Content Synchronization" h4, paragraph, "View Details" pill CTA

### Facts/Stats
- White background, 5-column row
- Each stat: large number (48px, bold) with gradient text fill (#62bdfc → #8490ff via background-clip: text), label below
- Stats: 2536 Projects Completed, 6784 Really Happy Clients, 1059 Total Tasks Completed, 2239 Cups of Coffee Taken, 435 In House Professionals
- Use counter animation on scroll (or static for simplicity)

### Services
- Dark background image with rgba(0,0,0,0.7) overlay
- Centered heading: "Some Awesomeness that should share" — white
- Subtitle: "Who are in extremely love with eco friendly system." — white
- 6 cards in 3×2 grid: each card has Linearicons icon (use lucide-react), h4 title, paragraph
- All text white. Cards transparent bg, padding 30px, hover shadow effect

### Info/About
- Full-width fluid container, split layout
- Left: info image (use picsum.photos)
- Right: padding 20%, heading "Responsible Customer Support", paragraph, "Learn More" pill CTA with arrow icon

### About/Video
- Full-width fluid container, split layout
- Left (offset 20%): heading "We Believe that Interior beautifies the Total Architecture", long paragraph, "See Details" pill CTA with arrow
- Right: video background image with dark overlay (opacity 0.84), centered play button

### Brand Logos
- Light bg (#f9f9ff), 5 grayscale logo images in a row
- Each logo: grayscale by default, colorize on hover (filter: grayscale(0%))
- Use placeholder logos or simple SVG shapes

### Contact
- White bg, centered heading: "If you need, Just drop us a line"
- Subtitle: "Who are in extremely love with eco friendly system."
- Form: name, email, subject (left col), message textarea + "Send Message" CTA (right col)
- Inputs: 15px padding, no border-radius, 12px font-size, #f9f9ff bg

### Footer
- Dark bg (#222), 4 columns: About Us (3-col), Contact Us (4-col) with phone numbers in primary color (#8490ff, 24px), Newsletter (5-col) with email input + arrow submit button, Social icons
- Copyright bar: "Made with ❤ by Component Dock" + social icon buttons (#111 bg, hover #8490ff)
- Footer newsletter input: rounded (border-radius 20px), white bg, submit button with arrow icon

## Key design tokens for Tailwind @theme

```
--color-primary: #8490ff;
--color-primary-start: #62bdfc;
--color-primary-end: #8490ff;
--color-dark: #222;
--color-body: #777;
--color-light-bg: #f9f9ff;
--color-social-btn: #111111;
```

## Implementation notes

- Replace all ColorLib images with picsum.photos placeholders (seeded per section)
- Replace Linearicons with lucide-react icons
- Replace Font Awesome social icons with lucide-react equivalents
- Footer must link https://www.componentdock.com/ as "Component Dock"
- No ColorLib references anywhere in app code
- Use cn() from packages/ui for class composition
- Poppins font via Google Fonts link in index.html
