# Bluecrest — Design Notes & Task Outline

**Source:** ColorLib Blueline (https://colorlib.com/wp/template/blueline/)
**Preview:** https://preview.colorlib.com/theme/blueline/
**New name:** Bluecrest
**Stack:** React 19 + Vite + Tailwind CSS 4 + TypeScript

## Section order (from preview DOM)

1. Header (Navbar)
2. Hero Banner (fullscreen)
3. Features (3 numbered cards)
4. Video (embed + text)
5. Services (split dark/light)
6. Latest Works (image slider)
7. Newsletter (subscription form)
8. Contact (image + form)
9. Footer

## Fidelity notes

### Header
- Transparent background, sits over hero image
- Logo left, right-aligned nav (Home, Generic, Elements)
- Mobile: hamburger toggle (lnr-menu icon)
- nav.hide class toggled via JS for mobile

### Hero Banner
- Full-width background image, fullscreen height
- Centered content: h4 "Introducing" (uppercase, letter-spacing) + h1 "BLUELINE" (124px, light weight, text-shadow)
- Responsive: scales down to 20px on very small screens

### Features
- White background, 3-column layout
- Each card: large gradient-colored number (h1, 48px) + h2 title + p description
- Numbers use gradient text effect: #3c50ca → #77d5f7
- Left-aligned with flex space-between for number + content

### Video
- Centered video embed with dark overlay + play button
- Below: content-wrap with h2 ("Great Modern Design / Build with usability in mind") + p description
- h2 spans have font-weight 600 (gradient highlight effect)

### Services
- Split layout: fluid container
- Left half: black bg (#000), white text, h2 with span ("Services" bold / "We Offered" light) + p description
- Right half: white bg, 2×2 grid of service cards
- Each card: icon (LinearIcons, gradient text) + h2 title (uppercase, letter-spacing) + p description
- Cards have light border (#eee with opacity)

### Latest Works
- Full-width section with centered title ("Some Of our Latest Works" with "Latest Works" bold)
- Subtitle text below
- Owl Carousel slider with images
- Prev/next arrows with gradient on hover

### Newsletter
- White bg, centered layout
- h3 "Subscribe / for our Newsletter" with "Newsletter" bold
- Email input: pill-shaped (border-radius 25px), light bg #f9f9ff
- "Get Started" gradient button positioned absolutely inside input

### Contact
- White-bg card wrapping image + form
- Left: contact image (col-lg-3)
- Right: form (col-lg-9) with name, email, textarea inputs
- "Send Message" gradient button, pill-shaped
- Inputs: border 1px solid rgba(111,117,152,0.3), transparent bg

### Footer
- Black bg (#000)
- Copyright text with accent-colored heart + link
- Social icons: 30×30 dark squares (#1e1e1e) with gray icons, accent on hover

## Implementation tasks

1. Scaffold `apps/bluecrest/` from simplest existing app, rename package
2. Build Navbar component (transparent, logo + nav, mobile hamburger)
3. Build Hero section (fullscreen bg image + text)
4. Build Features section (3 numbered cards with gradient numbers)
5. Build Video section (video area + content text)
6. Build Services section (split dark/light, 4 cards)
7. Build LatestWorks section (image slider with nav)
8. Build Newsletter section (heading + email input + button)
9. Build Contact section (image + form)
10. Build Footer (dark bg, copyright, social icons)
11. Compose all sections in App.tsx
12. Add responsive styles (mobile nav, grid stacking)
13. Apply design tokens (Tailwind theme: gradient, Poppins font, pill buttons)
14. Write tests (100% coverage)
15. Verify gate passes
