# SkyLens — Implementation Notes

Source: ColorLib Drone Photography (https://colorlib.com/wp/template/dronephotography/)
Preview: https://preview.colorlib.com/theme/dronephotography/

## Section Order (top to bottom)

1. **Navbar** — Transparent, overlays hero. Logo left, nav links right. Becomes sticky with orange bg (#FF7B47) on scroll.
2. **Hero Slider** — Full-width, min-height ~1000px, dark overlay (rgba(7,17,18,0.2)). Centered heading "Drone Photography & Videography", subtext, "Explore services" hero-btn (white border, fills white on hover).
3. **About Section** — Two-column. Left: green section label, heading "Hassle-Free Drone Photography", two paragraphs, black "Explore services" button. Right: drone image with circular "20 Years of experience" badge overlay.
4. **Services Grid (3-col)** — Three cards each with icon image, title (linked), description. Services: Residential Real Estate Photography, Commercial Real Estate Photography, Construction Site Monitoring.
5. **Video / How We Work** — Dark background image section. Left: heading "How we work?", two paragraphs, "Start a Project" black button. Right: 3 numbered steps (Tell Us, Schedule a Flight, Schedule a Flight [sic]). Centered play button (popup video).
6. **Recent Projects** — Split layout. Left: project gallery/image area. Right: heading "Recent projects", two paragraphs.
7. **Additional Services (3-col)** — Three icon-only cards (image + title, no description text).
8. **Testimonials** — Dark background image, parallax-style. Quote icon (open quotes PNG), testimonial text in white, founder avatar (circle), founder name, role. Dot navigation. Carousel with 2 slides.
9. **Contact Form (Get a Quote)** — Left side: heading "Get a Quote", subtext, form with Name, Email, Phone, Topic (select), Message (textarea), full-width orange "Send Message" button. Right side: decorative image.
10. **Footer** — Dark background image. 4 columns: (1) Logo + description + phone/email, (2) Navigation links, (3) Services links, (4) Social icons (Twitter, Facebook, Pinterest) in orange circles. Bottom: copyright with Component Dock link.

## Design Fidelity Notes

### Colors

- Primary brand: #FF5F21 (orange) — used on ALL CTAs, form submit, social icons, footer links, sticky header, back-to-top
- Sticky header: #FF7B47 (lighter orange)
- Heading color: #071112 (near-black teal)
- Body text: #10285d (deep navy blue)
- Section label: #70D76A (bright green, uppercase text above headings)
- Hero accent: #31ff7a (bright green, for span in hero)
- Footer text: #DBDBDB (light gray)
- Footer background: dark image with overlay

### Typography

- Headings + Nav + Buttons: Oswald (Google Fonts), 500 weight, sometimes uppercase
- Body + Paragraphs: Montserrat (Google Fonts), 400 weight, 16px, line-height 30px
- Button letter-spacing: 1–3px

### Buttons

- `.btn` (primary CTA): gradient orange, border-radius 0, uppercase, box-shadow
- `.hero-btn`: transparent, 2px white border, border-radius 0, uppercase. White fill slides in on hover.
- `.black-btn`: solid black, padding 14px 35px, border-radius 0
- `.submit-btn2`: Oswald, full-width, 60px height, solid #FF5F21, uppercase, border-radius 0

### Layout

- Sections use Bootstrap-like grid (col-xl-_, col-lg-_, etc.) — in React use Tailwind grid/flex
- Section padding: 120px top/bottom typical
- Hero: min-height 1008px, background-size cover
- Video section: dark bg image, flex layout
- Testimonials: dark bg image with background-attachment:fixed
- Contact: white bg, form left (5 cols), image right

### Assets to Replace

- Logo: use text/SVG placeholder
- Hero bg: use picsum.photos/seed/skylens-hero/1920/1008
- About image: picsum.photos/seed/skylens-about/600/600
- Service icons: use lucide-react icons
- Video bg: picsum.photos/seed/skylens-video/1920/800
- Projects image: picsum.photos/seed/skylens-projects/800/500
- Testimonial bg: picsum.photos/seed/skylens-testimonial/1920/600
- Contact image: picsum.photos/seed/skylens-contact/600/600
- Footer bg: picsum.photos/seed/skylens-footer/1920/400
- Founder avatar: picsum.photos/seed/skylens-founder/80/80

### Sections That Need Special Attention

- Hero slider: implement as single slide (no carousel needed for template)
- Testimonial carousel: use simple state-based slide transition
- Video popup: skip YouTube embed, show play button only (or link out)
- Sticky header: use IntersectionObserver or scroll event for sticky class
- "20 Years of experience" badge: absolute-positioned circle overlapping the about image
- Contact form: use react-hook-form with zod validation per conventions.md
- Footer social icons: lucide-react equivalents for Twitter, Facebook, Pinterest
