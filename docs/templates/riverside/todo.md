# Riverside — Implementation Notes

## Source
- ColorLib template: Clyde
- Preview: https://preview.colorlib.com/theme/clyde/
- New name: riverside

## Structure Order (section components)
1. Navbar
2. Hero (slider with background images + overlay + text)
3. CounterBar (4 stat blocks with animated numbers)
4. About (split: image left, info + interests right)
5. Skills (7 circular progress cards on bg-light)
6. Services (8 service cards, 4-col grid x 2 rows)
7. HireMe (dark CTA section with heading + white button)
8. Projects (filterable portfolio grid with hover overlays)
9. Blog (post cards grid)
10. Contact (form + contact info)
11. Footer (dark bg, Component Dock link, social icons)

## Fidelity Notes

### Navbar
- Dark background (Bootstrap navbar-dark)
- Brand: "Riverside." with period accent in brand color
- Links: Home, About, Skills, Services, Projects, Blog, Contact
- Sticky/fixed on scroll, collapses to hamburger on mobile

### Hero
- Full-width, split layout: text left, image right
- Subheading above headline, two CTAs (solid + outline)
- Dark overlay on background image
- Consider: slider can be simplified to a single slide with hero carousel dots

### Counter Bar
- bg-light (#f8f9fa) background
- 4 stats in a row: icon + number + label
- Numbers animate on scroll into view (count-up animation)
- Icons: suitcase, loyalty, coffee cup, calendar (use lucide-react equivalents)

### About
- Split: image with dark overlay left, content right
- "My Intro" subheading, "About Me" heading
- Info list: Name, DOB, Address, Zip, Email, Phone
- Interests row: Music, Travel, Movie, Sports with icons

### Skills
- bg-light background
- 7 circular progress cards (CSS-based circle progress bars)
- Each card: white bg, shadow, rounded-lg, skill name, percentage, circle
- Weekly/monthly sub-stats below each circle

### Services
- White card grid, 4 columns on desktop, stacked on mobile
- Icon (top, centered, brand color), title, description
- Cards have shadow and rounded-lg

### Hire Me CTA
- Dark background section
- Left: heading "Have a project on your mind." + description + white "Contact me" button
- Right: background image with overlay (or omitted for simplicity)

### Projects
- Filter tabs: All, Web, Illustration, Branding, Application
- Grid of project thumbnails with overlay on hover showing title + category
- Images use picsum.photos placeholders

### Blog
- 2-3 post cards in a grid
- Each: image, date/author meta, title, excerpt, "Read more" link

### Contact
- Form: name, email, subject, message textarea, submit button
- Right column: address, phone, email, website info
- Form validation with error messages

### Footer
- Dark background
- Brand name, brief description
- Social media icon links
- Copyright line
- Component Dock attribution link
