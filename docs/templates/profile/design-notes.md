# Profile — Design Notes & Tasks

Source: ColorLib Schmidt (https://preview.colorlib.com/theme/schmidt/)
New name: `profile`

## Structure order (single-page SPA with anchor sections)

1. **Navbar** — Fixed/absolute transparent, brand "Profile.", 7 nav links
2. **Hero** — Full viewport, split dark/gold, portrait carousel, 2 CTAs
3. **About** — Stats counters (4), personal info grid, Download CV button
4. **Skills** — 3×3 grid of progress bars (9 skills with percentages)
5. **Testimonials** — Carousel of quote cards with avatars
6. **Services** — 4×2 grid of 8 service cards with icons
7. **Pricing** — 4-tier pricing cards with feature lists
8. **Experience** — Two-column resume timeline (education + work)
9. **Portfolio** — 3-column project grid with hover overlay
10. **Blog** — 4-column post card grid
11. **Contact** — Form (name/email/subject/message) + info boxes + map placeholder
12. **Footer** — Minimal, copyright + Component Dock link

## Section-by-section fidelity notes

### Navbar
- Transparent overlay on hero section (absolute positioned, top: 20px)
- On mobile (< 992px): dark #222222 background, relative positioning
- Brand text: "Profile." (white, bold)
- Nav links: Home, About, Services, Experiences, Works, Blog, Contact
- Active state: highlighted link

### Hero
- Full viewport height (100vh)
- Left half: dark background, white text
  - Gold (#d5c455) uppercase subheading: "UI/UX Designer & Developer"
  - Large bold heading: "I'm John Schmidt" (dark #222222 on lighter bg, or white on dark)
  - Two CTA buttons side by side:
    - "More About Me" — gold primary (#d5c455 bg, white text, 1px border)
    - "Hire Me" — white (white bg, black text, 1px border)
  - Both buttons: padding 4px 3rem, slightly rounded (4px)
- Right half: gold (#d5c455) solid overlay at full opacity
  - Portrait image carousel (tiny-slider or similar)
  - Two portrait images cycling

### About
- Breadcrumb hero banner (shorter, 300px height, no gold overlay)
- Two-column layout (50/50):
  - Left: 2×2 stat counter grid
    - Happy Clients: 5000
    - Projects Done: 1200
    - Cups of Coffee: 500
    - Working Hours: 587
    - Animated countup on scroll
  - Right: About text
    - Gold subheading "About Me"
    - Heading: "A UI/UX Designer & Web Developer Based in Philippines"
    - Description paragraph
    - 2-column info grid (Name, DOB, Address, Zip, Email, Phone)
    - "Download CV" gold primary button

### Skills (on About page)
- Gold subheading "Skills", heading "My Skills"
- 3×3 grid of progress bars (9 items):
  - Adobe Photoshop: 90%
  - Figma: 95%
  - Adobe Illustrator: 90%
  - Javascript: 85%
  - HTML5: 95%
  - CSS3: 90%
  - WordPress: 70%
  - Adobe XD: 80%
  - SEO: 80%
- Animated fill on scroll

### Testimonials (on About page)
- Light gray background (#f8f9fa)
- Gold subheading "Testimonial", heading "Happy Guests"
- Carousel of testimonial cards
- Each card: circular avatar, quote icon, name, position, quote text

### Services
- 4×2 grid of 8 service cards
- Each card: icon (flaticon), heading, description
- Services: UI/UX Design, Web Development, Graphic Design, Branding, Marketing, Mobile App Design, Visual Editor, IT Consultancy

### Pricing (on Services page)
- 4 pricing tiers in a row
- Each tier: price, plan name (Personal/Professional/Medium Business/Gigantic Business), feature list with check icons
- Features: Strategic Alliance, Growth Expansion, Business Planning, Contact Negotiation, Market Positioning

### Experience
- Two-column resume layout
- Left column: Education entries (3)
  - Master Degree of Design (2014-2015, Google Inc.)
  - Bachelor's Degree of C.A (2014-2015, Google Inc.)
  - Diploma in Computer (2014-2015, Google Inc.)
- Right column: Work entries (3)
  - Art & Creative Director
  - Wordpress Developer
  - UI/UX Designer
- Each entry: graduation cap/briefcase icon, date range, title, company

### Portfolio / Works
- 3-column grid of project cards
- Each card: background image with dark overlay
- Hover: reveal title and description
- Projects: Branding & Illustration Design (×3 with different images)

### Blog
- Light gray background
- 4-column grid of blog cards
- Each card: featured image (top), meta (author, date, comments), title, excerpt
- 4 posts with same structure

### Contact
- Light gray background
- Two-column layout:
  - Left: Contact form (Name, Email, Subject, Message, Send Message button)
  - Right: Contact info boxes (address, phone, email) + social links
- Google Map embed below (or alongside)

### Footer
- Minimal, 2em padding
- Centered copyright text
- Links to Component Dock (replacing Colorlib attribution)

## Implementation tasks

- [ ] Create app scaffold (copy from simplest existing app)
- [ ] Set up Tailwind theme tokens (brand #d5c455, dark #222222, Poppins font)
- [ ] Implement Navbar component
- [ ] Implement Hero section (split layout, carousel)
- [ ] Implement About section (stats, info, Download CV)
- [ ] Implement Skills section (progress bars)
- [ ] Implement Testimonials section (carousel)
- [ ] Implement Services section (8-card grid)
- [ ] Implement Pricing section (4-tier cards)
- [ ] Implement Experience section (resume timeline)
- [ ] Implement Portfolio section (project grid with hover)
- [ ] Implement Blog section (4-card grid)
- [ ] Implement Contact section (form + info + map)
- [ ] Implement Footer (Component Dock link)
- [ ] Write tests for all components (100% coverage)
- [ ] Run verification gate
- [ ] Update TEMPLATES.md
