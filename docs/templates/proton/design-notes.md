# Proton — Design Notes & Task Outline

Source: ColorLib Atomic — https://preview.colorlib.com/theme/atomic/
New name: proton (apps/proton, @free-react-templates/proton)

## Structure Order (top to bottom)

1. Navbar
2. Hero / Cover
3. Features Overlap
4. About / Text
5. Image Carousel
6. Services Grid
7. Portfolio Thumbnails
8. Stats Counter
9. Testimonials
10. Footer

## Section-by-Section Fidelity Notes

### 1. Navbar
- Transparent background over hero, turns solid on scroll (or just stays transparent for simplicity).
- Logo left ("Proton"), nav links right: Home, About, Services, Gallery, Blog, Contact.
- Mobile: hamburger toggle, slide-down menu.
- Use lucide-react icons instead of Ionicons.

### 2. Hero / Cover
- Full-viewport height (min-h-screen or similar) with background image (use picsum.photos/seed/proton-hero/1920/1080).
- Left column: h1 headline "Design a better website", lead paragraph, "Free Download" primary button.
- Right column: circular play button (border circle + play icon). Links to nowhere (placeholder).
- Primary button: square corners (rounded-none), uppercase, tracking-widest, bg #0389FF, hover #0075dc.

### 3. Features Overlap
- White card with negative top margin (-mt-32 or similar) overlapping the hero.
- Border-radius 7px, box-shadow.
- 3-column grid: each has a large icon (use lucide-react: Lightbulb, Carrot/Leaf, Infinity), h5 title, paragraph.

### 4. About / Text
- Centered h2 heading "Good Design is a Good Start".
- Two-column layout below: left side lead paragraph, right side two body paragraphs.

### 5. Image Carousel
- Full-width section (container-fluid max-w-[1800px]).
- 3 images in a row/carousel. Use Embla or simple CSS scroll-snap.
- Images: picsum.photos/seed/proton-slide-{1,2,3}/1800/600.

### 6. Services Grid
- Light background (#f8f9fa).
- 3x2 grid of 6 icon cards: Regular Update, Infinite Possibilities, Good Security, Orange for Carrots, Intuitive Thinking, Play Video.
- Each card: centered large icon (lucide-react), h5 title, paragraph.
- "More Features" button centered below grid: black bg, white text, square corners.

### 7. Portfolio Thumbnails
- 2 rows, each a flex row.
- Row 1: 1/3 width + 2/3 width image cards.
- Row 2: 2/3 width + 1/3 width image cards.
- Each card: min-h-[500px], bg-cover, dark overlay (opacity-10, hover to opacity-50).
- Text: h2 title + post-meta. Hidden by default, slides in on hover (opacity + translate).
- Images: picsum.photos/seed/proton-port-{1,2,3,4}/800/500.

### 8. Stats Counter
- Blue background (#0389FF), full width.
- 3 columns: Lines of Code (99,399), Number of Projects (99), Number of Clients (124).
- Numbers white, 50px font. Labels uppercase, white, opacity 50%.
- Animated count-up on scroll into view (use useEffect + IntersectionObserver or framer-motion).

### 9. Testimonials
- White background, centered.
- Large quotation mark (text-[100px] text-black).
- Blockquote carousel (Embla or CSS) with 3 testimonials.
- 18px text, black color, centered, generous line-height.

### 10. Footer
- Light background.
- 4 columns: About (text), Learn More (links), Support (links), About Us (links + download CTA + social).
- Download button: primary blue.
- Social: Facebook, Twitter, GitHub icons (lucide-react).
- Copyright line at bottom with "Component Dock" link (https://www.componentdock.com/).

## Shared UI Opportunities
- Button component (from packages/ui) with variant for primary (blue) and black.
- cn() utility for class merging.
- Consider reusing existing Card patterns if applicable.

## Placeholder Images
- Hero: https://picsum.photos/seed/proton-hero/1920/1080
- Slides: https://picsum.photos/seed/proton-slide-{1,2,3}/1800/600
- Portfolio: https://picsum.photos/seed/proton-port-{1,2,3,4}/800/500
