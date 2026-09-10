# Brushmark — Implementation Tasks

Source: ColorLib "Breed2" (https://colorlib.com/wp/template/breed2/)
Preview: https://preview.colorlib.com/theme/breed2/
New name: Brushmark (creative art director portfolio)

## Component breakdown (section order)

1. **Navbar** — Transparent, absolute-positioned top navbar
   - Logo (text or image placeholder)
   - Nav links: Home, About, Portfolio, Services, Blog, Contact
   - Mobile hamburger toggle
   - Fixed on scroll with white background + shadow
   - Active/hover link color: #efb6df

2. **Hero** — Full-width banner with image background
   - Greeting text ("Hey There!")
   - Name heading (paraphrased, NOT "jo Breed")
   - Role subtitle ("Creative Art Director & Designer")
   - Social icon row (Twitter, Skype, Instagram, Dribbble, Vimeo) → lucide-react
   - "See My Work" CTA button (gradient: #1345e6 → #ed239f)
   - Decorative hero image on right (hidden on mobile)
   - Background: image-based (use picsum for placeholder)

3. **Statistics** — 3 stat cards overlapping hero (negative margin top)
   - 15k+ Happy Customers
   - 12k+ Ticket Solved
   - 9/10 Average Rating
   - Numbers use gradient text effect
   - Background: #f8faff cards

4. **About** — Two-column layout
   - Left: portrait image (hidden on mobile)
   - Right: "About me" top label with pink blur accent, heading, paragraph, "Download CV" button
   - Top label uses uppercase + letter-spacing 2px + blur span

5. **Services** — 3-column cards
   - Section label "Our Service" + heading
   - 3 cards: Web Development, UX/UI Design, WP Developing
   - Each: icon image, title, description, "Learn More" link
   - Hover: background → #5f30ff, text → white

6. **Testimonials** — Carousel/slider
   - Section label "Our Testimonial" + heading
   - Each item: portrait image (left), name + role + text + star rating (right)
   - 4 filled gold stars + 1 disabled star
   - Use a simple carousel or CSS scroll snap

7. **Portfolio** — Grid with filter tabs
   - Section label "Our Portfolio" + heading
   - Filter tabs: all, popular, latest, following, upcoming
   - 6 portfolio items in a responsive grid
   - Hover: blue overlay with project title + category
   - Use useState for filter switching

8. **Blog** — 3-column cards
   - Section label "Our Blog" + heading
   - 3 cards: thumbnail, meta (author + date), title, excerpt, "Learn More" link
   - Hover: box-shadow + image scale(1.1)
   - Date badge: #1345e6 bg, white text, border-radius 5px

9. **Brands** — Logo carousel row
   - Horizontal scrolling row of partner logos
   - Use picsum or simple text placeholders

10. **Footer** — Dark background
    - Background: #021017
    - Centered logo
    - Navigation links row (Home, About, Portfolio, Blog, Services)
    - Social icons: white circles with gradient hover (Facebook, Twitter, Skype, Pinterest)
    - Copyright line linking Component Dock

## Design notes

- All section headings follow the pattern: top_text (uppercase label) + h2 heading
- Top text accent: a span with background blur(4px) in pink rgba(237,35,159,0.6)
- Primary CTA: gradient button with 5px radius, 50px line-height
- Text link CTA (primary_btn2): dark text with animated underline pseudo-element
- Section gap: 140px vertical padding (80px on <=1199px)
- Main title margin-bottom: 80px (40px on <=1199px)
- Responsive breakpoints: 767px, 991px, 1199px, 1480px
