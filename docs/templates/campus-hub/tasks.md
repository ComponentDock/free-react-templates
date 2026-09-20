# CampusHub — Implementation Task Outline

**Source:** ColorLib University (https://colorlib.com/wp/template/university/)
**Preview:** https://preview.colorlib.com/theme/university/
**New name:** campus-hub

## Section-by-Section Implementation Order

### 1. Navbar
- Sticky top, light bg (#f8f9fa)
- Brand "CampusHub" left, nav links center, Login/Register right
- Two dropdowns: Courses (HTML/WordPress/Laravel/JavaScript/Python), Categories (same items)
- Use `packages/ui` Button for Login/Register if applicable
- Mobile: hamburger toggle with collapse

### 2. Hero
- Full-width, background image via `picsum.photos/seed/campus-hub-hero/1920/800`
- Very subtle overlay: `bg-black/10` (rgba(0,0,0,0.1))
- Centered content: heading "Find Online Courses That Suit You"
- Search form (block-17): text input + 2 select dropdowns + search button
- Search button: primary teal, sharp corners (rounded-none)

### 3. Welcome
- Two-column: left = image placeholder, right = heading + text + CTA
- Heading: "Welcome to CampusHub"
- CTA: "Read More" button, primary teal, reversed style
- `picsum.photos/seed/campus-hub-welcome/600/400`

### 4. Four Info Cards
- 4-column grid (col-md-6 col-lg-3 pattern)
- Each: icon (use lucide-react equivalents) + heading + short text + "Read More" link
- Cards: Knowledge is Power, Senior High School, College of Arts & Sciences, Unmatched Professor
- "Read More" link with arrow icon, primary color

### 5. Education Stats
- Light bg (#f8f9fa)
- Two-column: left = image, right = heading + text + 2x2 stat grid
- Heading: "Education is Life"
- Stats: Students (12,921), Schools (51), Books (3,902), Graduates (1,921)
- Each stat: icon (lucide) + animated counter number + label
- Counter animation on scroll (intersection observer + requestAnimationFrame)

### 6. Popular Courses Carousel
- Light bg (#f8f9fa)
- Heading "Popular Courses" + "Enroll Now" button (primary teal)
- Carousel of 6 course cards: image + title + description + enrollment count + price
- Use CSS scroll-snap or simple flex overflow for carousel (avoid owl-carousel dependency)
- Course card images: `picsum.photos/seed/campus-hub-course-N/400/300`

### 7. Teachers
- White bg
- Heading "Teachers"
- 3-column grid of flip cards
- Front: background image + name + role overlay (semi-transparent dark)
- Back: blockquote testimonial + small author photo + name + role
- CSS flip on hover (perspective + rotateY transform)
- Teacher images: `picsum.photos/seed/campus-hub-teacher-N/400/400`

### 8. Blog
- Light bg (#f8f9fa)
- Heading "Blog"
- Two-column: left = 1 large featured card, right = 4 smaller horizontal cards
- Featured: image + title + meta (date, author, comments count)
- Small cards: thumbnail + title + meta row
- Blog images: `picsum.photos/seed/campus-hub-blog-N/800/500` (featured), `/400/300` (small)

### 9. CTA Band
- "Create cool websites" heading with description
- Social/link icons below

### 10. Footer
- Dark bg (use `bg-gray-900` or similar)
- 4 columns: brand + description, Quick Links (2 sub-columns), Blog posts, Contact
- Bottom: Component Dock attribution link to https://www.componentdock.com/

## Design Notes

### Fidelity Priorities
- **Section order** must match the original 1:1
- **Color:** Primary #11cbd7 (teal/cyan) throughout — buttons, links, section headings, active states
- **Font:** Rubik (Google Fonts, weights 300/400/500) — the single font family for everything
- **Button shape:** 4px radius (not pill, not sharp) for standard buttons; sharp (0px) for hero search button
- **Hero overlay:** Very subtle (10% black) — almost invisible, just darkens the image slightly
- **Alternating sections:** White → white (welcome) → white (cards) → light (stats) → light (courses) → white (teachers) → light (blog) → white (CTA) → dark (footer)
- **Teacher flip cards:** CSS 3D flip on hover — front shows photo + name/role, back shows testimonial

### Component Mapping
- Use `packages/ui` Button/ButtonLink for all buttons
- Use `cn()` utility for conditional class composition
- Icons: lucide-react (replace flaticon/ionicons with closest equivalents)
  - flaticon-book → BookOpen
  - flaticon-student → GraduationCap
  - flaticon-diploma → Award
  - flaticon-professor → User
  - flaticon-mortarboard → GraduationCap
  - flaticon-university → Building2
  - flaticon-books → Books
  - ion-ios-arrow-down → ChevronDown
  - ion-arrow-right-c → ArrowRight
  - ion-android-calendar → Calendar
  - ion-android-person → User
  - ion-chatbubble → MessageCircle

### Placeholder Images
All images use picsum.photos with deterministic seeds:
- Hero: `https://picsum.photos/seed/campus-hub-hero/1920/800`
- Welcome: `https://picsum.photos/seed/campus-hub-welcome/600/400`
- Course N: `https://picsum.photos/seed/campus-hub-course-N/400/300`
- Teacher N: `https://picsum.photos/seed/campus-hub-teacher-N/400/400`
- Blog featured: `https://picsum.photos/seed/campus-hub-blog-featured/800/500`
- Blog small N: `https://picsum.photos/seed/campus-hub-blog-N/400/300`
- Stats image: `https://picsum.photos/seed/campus-hub-stats/600/500`

### Tailwind Theme Config
```css
@theme {
  --color-primary: #11cbd7;
  --color-primary-hover: #0eaab4;
  --color-primary-dark: #0d9ea8;
}
```
