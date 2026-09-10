# Bizwell — Design Notes & Task Outline

**Source:** ColorLib BizPro (https://colorlib.com/wp/template/bizpro/)
**Preview:** https://preview.colorlib.com/theme/bizpro/
**New name:** Bizwell
**Stack:** React 19 + Vite + Tailwind CSS 4 + TypeScript

## Section order (from preview DOM)

1. Header (Navbar)
2. Hero Banner (slider)
3. About Us (4-column icon grid)
4. Services (dark bg, 3x2 grid)
5. Projects (filterable gallery)
6. Page Middle Banner (parallax)
7. Team (3 members)
8. Skills (progress bars)
9. Clients (testimonial slider)
10. Pricing (3 cards)
11. Blog (3 cards)
12. Partners (logo carousel)
13. Contact (info + form)
14. Footer

## Fidelity notes

### Header
- Transparent background, sits over hero image
- Logo left, right-aligned nav with one-page anchor links
- Fixed position on scroll (CSS `.theme-main-header.fixed`)
- Mobile: hamburger collapse (Bootstrap-style)

### Hero Banner
- Full-width background image (revolution slider in original; use single image or simple carousel)
- 3 slides with heading + subtext + "See Our Projects" CTA
- Button: square, transparent bg, white border, uppercase

### About Us
- Section title with centered h2 + p
- 4-column grid, each item: circular icon (130px, 2px border) + h5 title + description + "More Details" link
- Hover: icon bg fills with accent color, text turns white
- No section background (white)

### Services
- Dark background: #232a34
- Title: white text
- 3x2 grid of service cards
- Each card: icon (filled square, accent color bg) + h6 heading + p description
- Hover: card bg lightens

### Projects
- Filter tab bar: pill-like buttons, active = accent bg
- 2x3 grid of project images
- Hover overlay: semi-transparent bg with title + category tags
- Filter categories: All, Web Design, Photography, Web Development, Online Marketing, Digital Media, Support

### Page Middle Banner
- Parallax background image (use picsum)
- Dark overlay (rgba(0,0,0,0.8))
- Centered heading + "View Projects" CTA button (square, white border)

### Team
- 3-member row, each: photo + hover overlay (name, role, social icons) + name/role bar below
- Hover overlay: light bg (#e6e6e6 at 0.9), scales in from top
- Name bar: bg #e6e6e6, h6 name + p role

### Skills
- 2-column: image left, progress bars right
- 5 bars with accent-colored fill: Web Dev 89%, Online Marketing 58%, Digital Media 49%, Photography 76%, Creative Design 64%
- Animate fill on scroll/viewport entry

### Clients
- Slider with client avatar (circular), quote text, name
- Auto-advancing or manual carousel

### Pricing
- 3 cards side by side
- Each: h4 plan name, subtitle, large price with colored badge, feature list, "BUY IT NOW" CTA
- Colors: Basic=#d6973d (gold), Advanced=#375099 (blue), Premium=#179680 (teal)
- Section bg: #f3f3f3

### Blog
- 3 cards: image with hover link overlay, title, author+date, excerpt, "Read More"
- Image hover: scale + overlay link icon

### Partners
- Light bg #f9f9f9
- Auto-scrolling logo carousel (6 logo images in bordered boxes)

### Contact
- 2-column top row: left = "Contact Info" with 3 items (address, phone, email), each with circular icon; right = map placeholder
- Below: "Send Message" form — first name, last name, email, subject, textarea, submit button
- Form fields: bottom-border style, no box

### Footer
- Dark bg #1e1e1e, centered text
- Logo + social icons (circle bordered) + copyright
- MUST link https://www.componentdock.com/

## Implementation tasks

1. Scaffold `apps/bizwell/` from simplest existing app, rename package
2. Build Navbar component (transparent, fixed, mobile hamburger)
3. Build Hero section (full-width image + text + CTA)
4. Build About section (4-column icon grid)
5. Build Services section (dark bg, 6 cards)
6. Build Projects section (filter tabs + image grid + hover overlay)
7. Build MiddleBanner section (parallax bg + overlay + CTA)
8. Build Team section (3 member cards with hover)
9. Build Skills section (image + progress bars)
10. Build Clients section (testimonial slider)
11. Build Pricing section (3 cards with colored badges)
12. Build Blog section (3 cards)
13. Build Partners section (logo carousel)
14. Build Contact section (info + map + form)
15. Build Footer (dark, social icons, copyright)
16. Compose all sections in App.tsx
17. Add responsive styles (mobile nav, grid stacking)
18. Apply design tokens (Tailwind theme config)
19. Write tests (100% coverage)
20. Verify gate passes
