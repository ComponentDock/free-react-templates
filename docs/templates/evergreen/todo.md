# Evergreen — Implementation Tasks & Design Notes

Source: ColorLib Classic (https://colorlib.com/wp/template/classic/)
Preview: https://preview.colorlib.com/theme/classic/
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/classic-free-template.jpg

## Section order (implement top to bottom)

1. Navbar
2. Header/Hero
3. About
4. Video + Why Choose Us (tabs)
5. Services
6. Skills
7. Portfolio (filter tabs)
8. Team (hover overlays)
9. Pricing (Monthly/Yearly toggle)
10. Blog (featured + list)
11. Counter/Stats
12. Contact (form + info)
13. Footer

## Design token notes

- Use `@theme` in index.css to define:
  - `--color-brand-start: #a1c4fd` and `--color-brand-end: #c2e9fb` for gradient
  - `--color-heading: #f4f4f4` → actually #4f4f4f
  - `--color-body: #898989`
  - `--color-gray-bg: #f9f9f9`
  - `--color-accent: #f7c336` (yellow dot in hero)
  - `--color-border: #bdbdbd`
- Fonts: Montserrat via Google Fonts link in index.html, Roboto, Satisfy
- Primary button: gradient bg `bg-gradient-to-r from-[#a1c4fd] to-[#c2e9fb]`, rounded-full, white text, shadow
- Card border-radius: 5px (pricing cards)
- Section padding: py-24 (100px)
- Gray sections: `bg-[#f9f9f9]`

## Section-by-section fidelity notes

### Navbar
- Sticky on scroll (use IntersectionObserver or scroll event)
- Logo left, utility icons (user, search) + primary nav right
- Scroll-spy: highlight active section in nav based on scroll position
- Search toggle: collapse/expand a search input overlay
- Language dropdown (ENG/BEN/ARA/ARG/CHV) — can simplify to a single label
- Mobile: hamburger menu

### Header/Hero
- Full-width background image with dark overlay (rgba(0,0,0,0.4))
- Vertically centered content (absolute + translateY(-50%))
- Headline: "We Are Provide Creative Business" + yellow dot
- Blockquote below
- "Contact Now" pill button → scrolls to #contact-area

### About
- Two columns: text left, image right (hidden on mobile)
- Heading: "We Offer Quick & Powerful Business Solution"
- Paragraph + "Learn More" button

### Video + Why Choose Us
- Gray bg (#f9f9f9)
- Left: video thumbnail image with circular play button overlay
- Right: tabbed content (3 tabs: Mission, Vision, Support)
- Each tab: uppercase heading, sub-heading, paragraph, "View More" button
- Tab switching: Bootstrap pills style (border-bottom on active)

### Services
- White bg, 6 feature boxes in 3×2 grid
- Each: circular icon, h4 title, paragraph, "Read More" link
- Icons: use lucide-react equivalents (Lightbulb, Code, Monitor, BarChart3, FileText, Banknote)

### Skills
- Gray bg
- Left: heading + paragraph + 6 circular progress indicators
- Circular charts: use SVG circle with stroke-dasharray animation
- Skills: WebDesign 95%, Coding 85%, Developing 90%, JavaScript 95%

### Portfolio
- White bg, full-width container
- Centered heading + subtitle
- Filter tabs: All, Graphics, UI/UX, Web Design, Coding, Developing, Photography
- 8 portfolio items in 4-column grid
- Hover overlay: title + lightbox icon
- Filter logic: state-based show/hide

### Team
- White bg
- 4 member cards (responsive: 2-col mobile, 4-col desktop)
- Each: photo, hover overlay with name, role, skill bars, social icons
- Skill bars: animated progress bars with percentage

### Pricing
- Gray bg
- Monthly/Yearly tab toggle (state-managed)
- 4 pricing cards: Basic $10, Premium $50 (active/highlighted), Business $80, Ultimate $100
- Each: name, price, feature list, "Purchase Now" button
- Premium card: gradient border or bg highlight

### Blog
- White bg
- 2-column: left = large featured post (image + heading + paragraph)
- Right = 3 list items (thumbnail + heading + date + paragraph)

### Counter/Stats
- Gray bg
- 4 stat columns: icon + label + number
- Numbers: 1172, 1000, 1200, 1172
- Animate count-up on scroll into view

### Contact
- White bg with inner container
- Section title with bar underline (80px line below)
- Left: form (Name, Phone, Email, Subject, Message, "Send Now")
- Right: info (address, phone, email) + social icons
- Form: use react-hook-form + zod for validation

### Footer
- Dark bg (use a dark color like #2a2a2a)
- Top: 4 columns (Brand + social, News, Company, Resources, Solutions)
- Bottom: copyright with Component Dock link
- Replace Colorlib attribution with "Made with Component Dock"

## Image placeholders

Use `https://picsum.photos/seed/evergreen-<n>/<w>/<h>` for:
- hero-bg.jpg (1920x1080)
- about-image.png (600x400)
- video-image.png (600x400)
- work-1..8.jpg (400x300)
- team-1..4.jpg (400x500)
- blog-md-1.jpg (600x400)
- blog-th-1..3.jpg (200x150)
