# Praxis — Design Notes

Source: ColorLib University (https://preview.colorlib.com/theme/university/)
New name: praxis | Deploy: praxis.free.componentdock.com

## Section Order (match 1:1)

1. Navbar
2. Hero (search form)
3. Welcome (video + text)
4. Features (4 icon cards)
5. Stats/Counter (animated)
6. Popular Courses (carousel)
7. Teachers (flip cards)
8. Blog (posts + sidebar)
9. Newsletter/CTA (subscribe)
10. Footer (4-col)

## Fidelity Notes

### Navbar
- White bg, box-shadow on scroll
- Brand: "PRAXIS" uppercase, letter-spacing 0.2em, weight 400
- Nav links: Home, Courses (dropdown), Categories (dropdown), Blog, About, Contact
- Right side: Login / Register links
- Dropdown items hover: brand color bg (#11cbd7)

### Hero
- Full viewport height (100vh), min-height 750px
- Background image with dark overlay (semi-transparent black)
- Search form: 3 fields side-by-side (keyword text input, category select, difficulty select) + Search button
- "Register Now" CTA button below the form (brand color, large padding)
- Subtitle text below CTA

### Welcome
- Two-column layout (col-md-6 each, reversed on mobile)
- Left: video thumbnail with circular play button overlay (brand color, 50% radius)
- Right: "Welcome to Praxis" heading + paragraph + "Read More" button (brand color, reverse style)

### Features
- 4-column grid (col-md-6 col-lg-3)
- Each card: icon (use lucide-react), heading, description, "Read More" link with arrow
- Items: Knowledge is power, Senior High School, College of Arts & Sciences, Unmatched Professor

### Stats/Counter
- Light bg (#f8f9fa)
- Left: large image. Right: "Education is Life" heading + description
- 4 counter items in 2x2 grid: Students (12921), Schools (51), Books (3902), Graduates (1921)
- Each has an icon (lucide: GraduationCap, Building, BookOpen, User) + animated count on scroll

### Popular Courses
- Light bg, centered "Popular Courses" heading + "Enroll Now" button
- Horizontal scroll/carousel of course cards
- Each card: image, title, description, meta row (enrolled count, price with strikethrough original)
- Use a simple horizontal overflow or CSS scroll-snap instead of Owl Carousel

### Teachers
- Centered "Teachers" heading
- 3-column grid of flip cards
- Front: background-image covering card, name + role overlay at bottom
- Back: testimonial quote + small author photo + name + role
- CSS perspective flip on hover

### Blog
- Two-column (col-md-8 left, col-md-4 right sidebar)
- Left: "Recent Posts" heading + 4 post cards (thumbnail, title, meta with date/author/comments)
- Right: "Blog" heading + 3 smaller post cards (no thumbnail, just title + meta)

### Newsletter/CTA
- Brand color bg (#11cbd7), dark text treatment
- Left: "Create cool websites" heading + description
- Right: email input + Subscribe button (white bg)

### Footer
- Dark background
- 4 columns: Brand + description, Quick Links (2 sub-cols), Blog posts (3 items), Contact Info
- Copyright row with social icons (facebook, twitter, linkedin, instagram via lucide-react)
- Link to componentdock.com replacing Colorlib attribution
