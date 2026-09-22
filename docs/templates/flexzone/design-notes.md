# FlexZone — Design Notes

**Source:** ColorLib Fitnezz (https://colorlib.com/wp/template/fitnezz/)
**Preview:** https://preview.colorlib.com/theme/fitnezz/
**New name:** flexzone

## Component structure

```
App.tsx
├── Navbar.tsx
│   ├── Logo ("FlexZone")
│   ├── NavLinks (Home, About, News, Contact)
│   └── CTA ("Become a member")
├── HeroSlider.tsx
│   └── 2-slide carousel with dark overlay + headline + CTAs
├── FeaturedClasses.tsx
│   └── Section heading + ClassCard[] (carousel, 4 items)
├── Schedule.tsx
│   └── Section heading + 2-column grid, ScheduleItem[] (4 items)
├── Trainers.tsx
│   └── Section heading + TrainerCard[] (carousel, 3 items)
├── Testimonials.tsx
│   └── Section heading + TestimonialCard[] (3 items, row)
├── Blog.tsx
│   └── Section heading + BlogCard[] (2 items)
└── Footer.tsx
    ├── About Us column (text + social icons)
    ├── Contact Info column
    └── Quick Links column
```

## Section-by-section fidelity notes

### Navbar
- Dark background (Bootstrap `bg-dark` → `#343a40`)
- Logo: "Flex<span>Zone</span>" with pink accent on "Zone"
- Nav links: Home, About, News, Contact
- "Become a member" link on right
- Responsive: hamburger toggle on mobile

### Hero Slider
- Full-width owl-carousel with 2 slides
- Dark overlay on background images
- Centered text: h1 headline + 2 CTA buttons
- "Get Started" (white outline) and "Download" (white link)
- Auto-transition between slides

### Featured Classes
- Section heading: "Featured Classes" with decorative back-text "Featured Classes" in light gray
- Pink underline on heading (`#f73471`)
- 4 class cards in carousel: square image + title + "Join from $15" pink button

### Schedule
- Section heading: "Our Schedule" with decorative back-text
- 2-column layout (no gutters), 4 items total
- Each item: image (alternating left/right) + text (title, description, time, date)
- Time with clock icon, date with calendar icon
- Light gray background (`#f7f7f7`)

### Expert Trainers
- Section heading: "Expert Trainers" with decorative back-text
- 3 trainer cards: photo, name, role ("Gym Trainer")
- Carousel behavior

### Testimonial
- Section heading: "Testimonial" with decorative back-text
- 3 testimonial cards in a row
- Each: blockquote text + author photo + name + role ("CEO, XYZ Company")

### Blog
- Section heading: "Blog" with decorative back-text
- 2 blog post cards: image (left) + text (title, date, excerpt, "Read More" button)

### Footer
- Dark background (`#262626`)
- 3 columns: About Us, Contact Info, Quick Links
- Social icons: Twitter, Facebook, LinkedIn, Instagram
- Copyright + "Made with Component Dock" attribution
