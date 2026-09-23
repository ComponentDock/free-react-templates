# PageLeaf — Design Notes & Implementation Outline

## Source
- ColorLib template: Book
- Preview: https://preview.colorlib.com/theme/book/
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/book-free-template.jpg

## Section Order (top to bottom)

1. Navbar — sticky nav, brand + 5 links + gradient CTA pill
2. Hero Banner — full-width gradient (#f45622 → #f53e54), author info + CTA
3. About — split: author image left, bio + signature right
4. Features — heading on dark overlay background image
5. Counter — 4 animated stat counters
6. Pricing — 3 pricing cards (PDF, E-Book, Print Copy)
7. Courses — carousel of 3 course cards with images
8. CTA — gradient bg, app download buttons
9. Testimonials — carousel with avatars and quotes
10. Footer — 3 columns (About, Newsletter, Social)

## Fidelity Notes

### Navbar
- Fixed/sticky position
- Brand "PageLeaf." (text, no icon)
- Links: Home (#home), About (#about), Fact (#fact), Price (#price), Course (#course)
- CTA button: "Buy Now for $9.99", gradient pill shape
- Mobile: hamburger toggle

### Hero Banner
- Full-width gradient background: linear-gradient(90deg, #f45622, #f53e54)
- Centered text: "Author: Travor James" (white, uppercase, small)
- "Buy Now for $9.99" pill CTA button
- Full viewport height (fullscreen class)

### About
- Split layout: image left (col-lg-6), text right (col-lg-6)
- Heading: "Dr. Travor James"
- Two bio paragraphs with placeholder text
- Signature image below bio

### Features
- Dark overlay background image (fact-bg.jpg)
- Centered heading: "Some Features that Made us Unique"
- Subtitle: "Who are in extremely love with eco friendly system."
- Note: The original template has this as a heading-only section (no feature items listed in the HTML)

### Counter
- 4 counters in a row (col-lg-3 col-md-6 each)
- Happy Clients: 2536
- Total Projects: 6784
- Cups Coffee: 1059
- Tickets Submitted: 12239
- Animated count-up on scroll

### Pricing
- Heading: "Purchase whatever you want"
- 3 cards (col-lg-4 each):
  - PDF: $79.99
  - E-Book: $99.99
  - Print Copy: $59.99
- Each card: format name, description, price, "Purchase Now" gradient pill button
- Hover: price-bottom section gets gradient background

### Courses
- Heading: "Top Courses That are open for Students"
- Carousel (owl-carousel style) with 3 course cards
- Each card: image, "For Sale" badge, title "Breakthrough Thinking", price "$25", description
- Placeholder images: picsum.photos/seed/pageleaf-course-n/

### CTA
- Gradient background (#f45622 → #f53e54)
- White heading: "Download Our App for all Platforms"
- Description paragraph
- Two download buttons: App Store (Apple icon) + Google Play (Android icon)
- Buttons in a horizontal flex row

### Testimonials
- Heading: "What our Reader's Say about us"
- Carousel of testimonial cards
- Each card: circular avatar image, quote text, name "Mark Alviro Wiens", position "CEO at Google"
- Owl-carousel dots navigation

### Footer
- Light background with section gap
- 3 columns:
  1. About Us: brand blurb + copyright with Component Dock attribution
  2. Newsletter: email subscription form with arrow button
  3. Follow Us: social icons (Facebook, Twitter, etc.)
- Social icon hover: gradient background

## Component Plan

```
src/
  App.tsx              — compose all sections
  components/
    Navbar.tsx         — sticky nav with mobile toggle + CTA
    Hero.tsx           — gradient banner with author info
    About.tsx          — split image + bio
    Features.tsx       — heading on overlay background
    Counter.tsx        — 4 animated stat counters
    Pricing.tsx        — 3 pricing cards
    Courses.tsx        — course carousel
    CallToAction.tsx   — gradient CTA with app buttons
    Testimonials.tsx   — testimonial carousel
    Footer.tsx         — 3-column footer
  index.css            — Tailwind + @theme tokens
```

## Key Decisions

- Replace Bootstrap 4 with Tailwind utilities
- Use lucide-react for icons (replacing font-awesome)
- Animated counters: IntersectionObserver + requestAnimationFrame
- Carousels: implement with CSS scroll-snap or lightweight carousel (no jQuery)
- Gradient: use Tailwind bg-gradient-to-r with custom colors
- Pill buttons: rounded-full with appropriate padding
- Placeholder images: picsum.photos/seed/pageleaf-<n>/
