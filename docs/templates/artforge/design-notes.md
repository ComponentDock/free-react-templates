# ArtForge — Design Notes & Task Outline

Source: ColorLib "Grunt" — https://preview.colorlib.com/theme/grunt/
New name: artforge (apps/artforge)

## Design Notes

### Visual Style
- Clean, professional creative agency aesthetic
- Large bold typography (h1 at 8rem/900 weight) for dramatic hero
- Red accent (#bd1220) against white/gray backgrounds
- Light body text (gray, font-weight 300) for readability
- Pill-shaped buttons (border-radius 30px, 2px border)
- Dark footer (#333333) as contrast anchor

### Color Palette
- Primary: #bd1220 (crimson red) — CTAs, active indicators
- Body text: gray (#808080)
- Headings: #000 (black)
- Backgrounds: #fff (sections), #ebeef0 (scrolled navbar), #f6f6f6 (form inputs)
- Footer: #333333

### Typography
- Font: "Roboto" (Google Fonts)
- h1: 8rem, weight 900, line-height 1
- h2: weight 700+
- Body: 1rem, weight 300, line-height 1.7

### Layout
- Bootstrap-style grid (12-col, container-based)
- Sections are full-width with centered content containers
- 3-column grid for services and portfolio
- Masonry-style for studio gallery

## Section-by-Section Fidelity Notes

### 1. Navbar
- Fixed/sticky top, white bg, shifts to #ebeef0 on scroll
- Logo: text "ArtForge" (left-aligned)
- Links: Home, What We Do, About Us, Portfolio, Gallery, Contact
- Mobile: hamburger toggle → slide-in drawer
- Use IntersectionObserver or scroll listener for bg change

### 2. Hero Slider
- Full viewport height (min-vh or h-screen)
- Owl Carousel → replace with CSS-only or lightweight JS carousel
- 3 slides with cover background images (picsum.photos/seed/artforge-hero-N)
- Overlay: large "ArtForge" heading, subtitle paragraph, "Start a project" pill button
- Active dot indicator (red #bd1220)
- Auto-advance with dot navigation

### 3. Services (What We Do)
- Section header: "What We Do" h2 + subtitle paragraph
- 6 cards in 3-col responsive grid (col-lg-4)
- Each: icon (lucide-react), h3 title, p description, "Learn more" link
- Services: Design, Development, eCommerce, Mobile Apps, CopyWriting, SEO
- Cards: white bg, subtle shadow/border, padding

### 4. About
- Full-width bg image (parallax or cover)
- Left: "Acquaint Us" label → "About us" h2 → description text → "Watch the video" button
- Right: skill bars with labels and percentage fills
- Skills: Design, Development, eCommerce, Mobile Apps, Copywriting, SEO
- Progress bars: animated fill, percentage text

### 5. Team
- "Meet The Team" h2 + "We are talented people." subtitle
- 2 member cards (centered row)
- Each: portrait photo (picsum.photos), name (h3), role (p), bio (p), social links
- Members: Jacob Spencer (CEO, Co-Founder), Chris Peters (CTO, Co-Founder)
- Social icons: lucide-react

### 6. Portfolio
- "We love what we do, check out some of our latest works" h2
- 3-column grid with image thumbnails
- Hover overlay: project title + "Visit website" link
- Images: picsum.photos/seed/artforge-portfolio-N
- Overlay transition on hover

### 7. Testimonials
- "Our Client Sayings" h2
- Carousel/slider with client quote, photo, name
- Auto-advance or manual navigation
- Quote in large text, client name below

### 8. Studio Gallery
- "Studio Gallery" h2 + "Photos" label
- Masonry-style grid (no gutter, mixed sizes)
- 6+ images: picsum.photos/seed/artforge-gallery-N
- Full-width section

### 9. Contact
- "Get In Touch" label + "Contact Us" h2
- Form: name, email, subject, message (textarea), "Send Message" button
- Inputs: #f6f6f6 background, rounded
- Form validation with zod/react-hook-form patterns

### 10. Footer
- Dark bg (#333333)
- 3 columns: About text | Navigation links | Newsletter signup
- Newsletter: email input + "Subscribe" button
- Bottom: copyright "All rights reserved"
- MUST include Component Dock link (https://www.componentdock.com/)

## Task Order

1. Scaffold app (copy simplest existing app, rename, configure vite/tailwind)
2. Implement Navbar component
3. Implement HeroSlider component
4. Implement Services section
5. Implement About section (with skill bars)
6. Implement Team section
7. Implement Portfolio section
8. Implement Testimonials section
9. Implement StudioGallery section
10. Implement Contact form
11. Implement Footer
12. Compose all in App.tsx
13. Add responsive breakpoints
14. Write tests (100% coverage)
15. Run verification gate
