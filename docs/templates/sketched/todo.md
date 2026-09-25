# Sketched (ColorLib Calvin) — Implementation Notes

## Source
- ColorLib: https://colorlib.com/wp/template/calvin/
- Preview: https://preview.colorlib.com/theme/calvin/
- Category: Personal / Portfolio / Designer

## Structure order

1. **Navbar** (sticky, transparent overlay)
   - Logo (image-based, swap for text or componentdock logo)
   - Links: Home, Work, Service, Blog (dropdown), Contact
   - "Let's Talk" CTA button (border-btn, rounded pill)
   - Mobile hamburger

2. **Hero** (full-height slider area)
   - Background image with dark overlay (rgba 0,0,0,0.3)
   - Left: person/employee image (use picsum portrait)
   - Right: h1 "My name is [Name]. [Role]", subtitle
   - No slide controls visible — single slide (not carousel)

3. **About Info Bar** (absolute positioned at hero bottom)
   - 3-column layout on desktop
   - "Design For: Web & Mobile" | Phone | Email + icon
   - Semi-transparent dark background

4. **Services ("My Experties")** — `section-padding40`
   - 2×2 grid (col-lg-6, no gutters)
   - Each card: icon (SVG) + title + description + browse link
   - Light section background

5. **Gallery ("My Works")** — `section-padding40`
   - 2×2 grid (col-md-6)
   - Each item: background-image with overlay on hover
   - Hover shows "Strategy & Direction" link text
   - "More Work" button (border-btn2, centered)

6. **About + Skills** — `section-padding40`
   - 2-column: left text, right progress bars
   - 3 skills: UI Design 60%, UX 89%, Illustration 95%
   - Progress bar color: #FF8553, border-radius: 7px

7. **Brand Logos** (inside About section)
   - Horizontal carousel of brand images
   - Border-top separator

8. **Testimonials**
   - Centered heading "Client Testimonial"
   - Slider with quote + founder image + name + role
   - No visible nav dots/arrows in original

9. **Blog ("Latest News")** — `section-padding40`
   - Carousel of 3 blog cards
   - Each: image + tag button + date/byline + title link

10. **Footer** (dark bg `#000000`)
    - Left: logo + description + social icons (twitter, fb, pinterest, globe, instagram)
    - Right: "Let's Talk" button + "Download CV" button
    - Bottom: copyright + componentdock.com link

## Key design decisions

- **Fonts**: Google Fonts — DM Sans (body) + Roboto Condensed (headings)
  - Import: `@import url("https://fonts.googleapis.com/css2?family=DM+Sans:wght@500;700&family=Roboto+Condensed:wght@300;400;700&display=swap")`
- **Primary color**: `#FF8553` (warm orange) — used for buttons, progress bars, accents
- **Button style**: Pill-shaped (`border-radius: 25-30px`) — `.border-btn` and `.btn`
- **Layout**: Bootstrap grid, `section-padding40` (~40px sections, generous whitespace)
- **Hero**: Full-height with absolute-positioned info bar at bottom
- **Progress bars**: Animated fill, orange color, 7px border-radius
- **Gallery**: Background-image based with hover overlay effect
- **No parallax** — static background images with overlay
- **Slider**: owl-carousel for blog and testimonials (or use embla/swiper)

## Component breakdown

```
src/
  App.tsx                    — main composition
  components/
    Navbar.tsx               — transparent sticky nav + mobile menu
    Hero.tsx                 — full-height hero with person image + heading
    AboutInfoBar.tsx         — 3-column contact info below hero
    Services.tsx             — 2×2 expertise grid
    Gallery.tsx              — 2×2 portfolio grid with hover overlay
    AboutSkills.tsx          — about text + progress bars
    BrandLogos.tsx           — logo carousel
    Testimonials.tsx         — testimonial slider
    Blog.tsx                 — blog card carousel
    Footer.tsx               — dark footer with CTA + social + copyright
```

## Fidelity notes

- Match section order exactly: hero → info bar → services → gallery → about → brands → testimonials → blog → footer
- Hero height: full viewport (100vh or equivalent)
- Info bar: absolute positioned within hero, not a separate section
- Service cards: no gutters between them (`.no-gutters`)
- Gallery hover: dark overlay with centered text link
- Progress bars: percentage labels beside the skill name
- Footer "Let's Talk" button: same pill style as hero CTA
- Brand logos: horizontal auto-scrolling carousel
- All section paddings: `section-padding40` (~40px top/bottom on mobile, more on desktop)
