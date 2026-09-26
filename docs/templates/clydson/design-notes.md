# Clydson — Implementation Todo & Design Notes

## Source
- **ColorLib:** Clyde — https://colorlib.com/wp/template/clyde/
- **Preview:** https://preview.colorlib.com/theme/clyde/
- **New name:** clydson

## Section Order (top → bottom)

1. Navbar (dark, transparent → solid on scroll)
2. Hero (full-viewport slider, 2 slides)
3. Counter Stats (light bg, 4 columns)
4. About (image left, info right)
5. Skills (light bg, circular progress cards)
6. Services (white bg, 2×4 card grid)
7. CTA "Hire Me" (dark/primary bg)
8. Projects (4×2 gallery grid)
9. Testimonials (primary blue bg, carousel)
10. Blog (light bg, 3-column cards)
11. Contact (form + info)
12. Footer (dark, 4-column)

## Fidelity Notes

### Navbar
- Bootstrap dark navbar, transparent bg on desktop
- Logo text "Clyde." with dot accent
- Nav links: Home, About, Skills, Services, Projects, Blog, Contact
- Smooth scroll to section IDs (#home-section, #about-section, etc.)
- Mobile: hamburger toggler

### Hero
- Full viewport height slider (owl carousel)
- 2 slides with different background images and text
- Each slide: right side = background image with overlay, left side = text
- Slide 1: "Hello! This is Clyde" / "Creative UI/UX Designer & Developer"
- Slide 2: "We Design & Build Brands" / "Hi, I am Clyde This is my favorite work."
- CTAs: "Hire me" (primary) + "Download CV" (outline primary)

### Counter Stats
- Light bg (#f8f9fa)
- 4 columns: suitcase icon (750 projects), loyalty (568 clients), coffee (478 cups), calendar (780 years — template error, keep as-is)
- Use animated number counters on scroll

### About
- No padding section (ftco-no-pt ftco-no-pb)
- Left: background image with overlay (5/12 cols)
- Right: "My Intro" subheading, "About Me" heading, paragraphs
- About info list: Name, DOB, Address, Zip, Email, Phone (flex rows)
- Interests row: Music, Travel, Movie, Sports with flaticon icons

### Skills
- Light bg, centered heading "My Skills"
- 3-column grid, 2 rows = 6 circular progress cards
- Each card: white bg with shadow, skill name, circular progress ring (CSS-only), percentage in center
- Below each ring: "Last week" and "Last month" sub-stats
- Skills: CSS 95%, HTML 98%, jQuery 68%, Photoshop 92%, WordPress 83%, SEO 95%
- Use CSS `conic-gradient` or SVG circles for progress rings

### Services
- White bg, centered heading
- 2 rows × 4 columns = 8 service cards
- Each: white card with shadow, circular icon bg, title, short description
- Services: Web Design, Web Application, Web Development, Banner Design, Branding, Icon Design, Graphic Design, SEO

### CTA "Hire Me"
- Full-width dark/primary bg section
- Left: "Have a project on your mind." heading + paragraph + "Contact me" white button
- Right: person illustration image

### Projects
- "Our Projects" heading centered
- 4 columns × 2 rows = 8 project items
- Each: background image with dark overlay, centered text (title + category) on hover
- Use CSS grid or flex with overlay transition

### Testimonials
- Primary blue bg (#007bff)
- "What client says about?" heading (white)
- Owl carousel of testimonial cards
- Each: quote text with quote-left icon, author avatar (circle), name, title
- Use horizontal scroll or simple carousel

### Blog
- Light bg (#f8f9fa)
- "Our Blog" heading centered
- 3-column blog cards
- Each: image with hover effect, date + author + comment count, title link, excerpt

### Contact
- "Have a Project?" heading centered
- Left: form (Name, Email, Subject, Message textarea, Send Message button)
- Right: Google Maps embed placeholder + address/phone/email

### Footer
- Dark bg, 4 columns
- Col 1: "Lets talk about" + text + "Learn more" button
- Col 2: Links (Home, About, Services, Projects, Contact)
- Col 3: Services list
- Col 4: "Have a Questions?" + address, phone, email + social icons (Twitter, Facebook, Instagram)
- Bottom: copyright + Component Dock link

## Design Tokens Summary
- Font: Poppins (Google Fonts, weights 100–900)
- Brand accent: #b1b493 (olive/sage green — links, nav)
- Primary button: #007bff (Bootstrap blue)
- Body text: #999999
- Headings: rgba(0,0,0,0.9)
- Body bg: #fff
- Light sections: #f8f9fa
- Testimonials: #007bff
- Footer: #000
- Button radius: 4px
- Circle radius: 50%

## Implementation Notes
- Use picsum.photos/seed/clydson-<n> for all placeholder images
- Circular progress: use SVG circle with stroke-dasharray/dashoffset
- Counters: animate on scroll intersection observer
- Hero slider: keep simple — one slide with two background images cycling, or static single slide
- Projects: CSS grid 4-col with hover overlay
- Testimonials: static single card or simple horizontal scroll
- Blog: 3-column grid with image top, text bottom
- Contact form: controlled inputs with basic validation
