# Inkline — Design Notes & Implementation Todo

**Source:** ColorLib Blueline (https://preview.colorlib.com/theme/blueline/)
**New name:** inkline
**Category:** Fullscreen Business Website

## Section Order (match 1:1)

1. Header (Navbar)
2. Hero/Banner (fullscreen)
3. Features (3-column)
4. Video (embed + text)
5. Services (split dark/light)
6. Latest Works (carousel)
7. Newsletter (subscription form)
8. Contact (image + form)
9. Footer (copyright + social)

## Fidelity Notes

### Header
- Absolute position over hero, transparent background
- Logo left, nav links right (Home, Generic, Elements)
- Hamburger menu on mobile; nav hidden with CSS transform, toggled via JS
- White text on transparent bg, #77d5f7 accent on mobile dropdown

### Hero/Banner
- Full viewport height (735px), background image with cover
- Centered text: "Introducing" (h4, uppercase, weight 200) + "inkline" (h1, 124px desktop, 34px tablet, 20px mobile, weight 300, letter-spacing 25px)
- Text shadow: -8px 15px 8px rgba(0,0,0,0.4)
- Use picsum.photos for background image

### Features
- White background, 3 equal columns
- Large number (h1, 48px, gradient text via background-clip, text-shadow)
- Title (h2, 18px, uppercase, weight 600, letter-spacing 1.25px)
- Description (p, 14px, line-height 25px)
- Bottom padding 200px to create overlap with video section

### Video
- Negative margin-top: -10% to overlap features
- Video thumbnail area: border 20px solid #f3f3f3, dark overlay
- Play button centered via absolute positioning + transform
- Below: text content (36px heading, weight 200, bold spans)
- Use picsum.photos for video thumbnail

### Services
- Full-width container-fluid, split 50/50
- Left: black background, white text, padding 100px
- Heading "Services We Offered" (36px, weight 200/600)
- Right: white background, 2×2 grid of cards
- Each card: border 1px solid rgba(238,238,238,0.5), padding 40px 50px
- Linearicons icon + title (18px, uppercase, weight 600, letter-spacing 2px) + description
- Use lucide-react icons (e.g. Palette, Code, Layout, Smartphone)

### Latest Works
- White background, centered
- Heading "Some Of our Latest Works" (36px, weight 200/600) + subtitle
- Owl Carousel → React Slick or embla-carousel
- Active item: opacity 1, white 20px border
- Inactive: opacity 0.5
- Responsive: show single-column slider on mobile
- Use picsum.photos for portfolio images

### Newsletter
- White background
- Heading "Subscribe for our Newsletter" (36px, weight 200/600) + subtext
- Email input: rounded (25px radius), #f9f9ff bg, width 100%
- "Get Started" pill button positioned absolute right of input
- Responsive: button below input on mobile

### Contact
- Light section bg (#f9f9ff), white card inside
- Left col-3: contact image (use picsum.photos)
- Right col-9: form with common-input (name, email) + common-textarea (message)
- "Send Message" pill button (gradient, rounded, arrow icon)
- Form padding: 0 70px on desktop, 0 20px on mobile

### Footer
- Black background, padding 40px
- Copyright text (white) with "inkline" link in #77d5f7
- "Made with Component Dock" attribution replacing Colorlib credit
- Social icons: Facebook, Twitter, Dribbble, Behance
- Icon squares: #1e1e1e background, gradient hover

## Tailwind @theme Tokens

```
@theme {
  --color-primary: #2954c9;
  --color-accent: #77d5f7;
  --color-gradient-start: #3c50ca;
  --color-gradient-end: #77d5f7;
  --color-surface-light: #f9f9ff;
  --color-surface-dark: #000000;
  --color-text-body: #777777;
  --color-text-heading: #222222;
  --color-border-light: #eeeeee;
  --font-family-heading: "Poppins", sans-serif;
  --font-family-body: "Poppins", sans-serif;
}
```

## Implementation Todo

- [ ] Set up apps/inkline workspace (copy from simplest existing app)
- [ ] Create index.css with Tailwind @theme tokens
- [ ] Implement Header component (Navbar with hamburger toggle)
- [ ] Implement Hero component (fullscreen bg, heading)
- [ ] Implement Features component (3-column, gradient numbers)
- [ ] Implement Video component (thumbnail + play + text)
- [ ] Implement Services component (split dark/light, 4 cards)
- [ ] Implement LatestWorks component (carousel/slider)
- [ ] Implement Newsletter component (email input + pill button)
- [ ] Implement Contact component (image + form)
- [ ] Implement Footer component (copyright + social)
- [ ] Compose all sections in App.tsx
- [ ] Write tests (100% coverage)
- [ ] Verify: typecheck, lint, build, test:coverage
- [ ] Commit + push
