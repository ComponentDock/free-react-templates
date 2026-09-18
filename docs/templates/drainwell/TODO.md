# Drainwell — Implementation TODO

## Design Notes

- **Source:** ColorLib "Plumber" → https://colorlib.com/wp/template/plumber/
- **Preview:** https://preview.colorlib.com/theme/plumber/
- **Name mapping:** Plumber → Drainwell (new original name, no reuse)
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript

## Section Order & Fidelity Notes

### 1. Navbar (Header)
- Fixed position, transparent → dark on scroll (JS scroll listener)
- Logo left (text-based logo in React version), nav links right
- Links: Home, Services, Features, Testimonial, Contact
- Mobile: hamburger toggle with slide-in menu
- Use `position: fixed`, `z-index: 997`, transition on scroll

### 2. Hero Banner
- Full viewport height (`100vh`), background image with `rgba(4,9,30,0.9)` overlay
- Left-aligned white text: h1 (72px bold) "We're your plumber"
- Paragraph lorem text (white)
- CTA pill button: `#f53f51` bg, 50px radius, white text, uppercase
- Use `https://picsum.photos/seed/drainwell-hero/1920/1080` for placeholder

### 3. Quote/Split Section
- Two columns: left 5/12, right 7/12
- Left: h2 with span-highlighted words in brand color
- Right: paragraph text
- No background (white), `pt-100` padding

### 4. Services (3 Cards)
- `id="service"`, `section-gap` padding
- 3 equal columns, each with:
  - Hexagon icon container (use lucide-react icon in a styled wrapper)
  - h4 title (Maintenance, Residential Service, Commercial Service)
  - Paragraph description
- Icon hover: fill with `#f53f51`, text white
- Centered text alignment per card

### 5. Features
- `id="feature"`, split layout: left image, right content
- Left: full-height image (`https://picsum.photos/seed/drainwell-feat/800/600`)
- Right: section title + 4 feature cards
- Cards: white bg, padding 30px, margin-bottom 30px
- Hover: box-shadow `rgba(157,157,157,0.2)`
- Titles: Multiple Layouts, Clean Coding, Endless Features, Fully Customizable

### 6. Counter Stats
- `id="counter"`, `section-gap` padding
- 4-column grid of rounded white cards (radius 10px)
- Each card: large red number (`#f53f51`, 60px font), label below
- Box-shadow: `rgba(245,63,81,0.3)`
- Stats: 2536 Happy Clients, 6784 Total Projects, 1059 Cups Coffee, 12239 Tickets Submitted

### 7. Video Section
- Background image + `rgba(4,9,30,0.75)` overlay
- Centered white text: heading, paragraph
- Play button icon (lucide-react Play)
- "Watch Video" link

### 8. Call to Action
- Dark navy bg (`#04091e`), white text, centered
- Heading: "Got Impressed to our features"
- Paragraph + white pill CTA button
- CTA button: white bg, dark text, hover → transparent + white border

### 9. Testimonials
- `id="testimonail"` (note: original has typo, keep for fidelity)
- Carousel with cards (use simple React state for dot navigation)
- Cards: white bg, border `1px solid #eee`, radius 10px, padding 30px
- Card content: quote icon, text, horizontal divider, author name + role
- Active dot: `#f53f51`

### 10. Contact
- `id="contact"`, dark navy bg
- Left: map placeholder (div with background color)
- Right: form with Name, Email, Subject inputs + Message textarea
- Inputs: transparent bg, `1px solid rgba(111,117,152,0.3)` border
- Submit button: "Send Message"

### 11. Footer
- Dark navy bg (`#04091e`), `section-gap` padding
- 3 columns: About Us text, Newsletter (email input + button), Follow Us (social icons)
- Copyright bar at bottom
- MUST include link to `https://www.componentdock.com/` (branded "Component Dock")

## Component Map

- `App.tsx` → composes all sections in order
- `components/Navbar.tsx`
- `components/Hero.tsx`
- `components/QuoteSection.tsx`
- `components/Services.tsx`
- `components/Features.tsx`
- `components/Counters.tsx`
- `components/VideoSection.tsx`
- `components/CallToAction.tsx`
- `components/Testimonials.tsx`
- `components/Contact.tsx`
- `components/Footer.tsx`

## Testing Notes

- Each section component needs its own test file
- Test section renders with correct content
- Test navbar scroll behavior (mock scroll event)
- Test testimonial carousel dot navigation
- Test contact form validation
- 100% line/function/branch/statement coverage required
