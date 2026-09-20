# Smokeshade — Implementation Tasks & Design Notes

## Source
- ColorLib: Hazze → https://preview.colorlib.com/theme/hazze/
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/haze-free-template.jpg

## Structure Order (section-by-section)

1. **Header** — `Navbar.tsx`
   - Logo left, nav right (Home, About Us, Blog, Gallery w/dropdown, Contact)
   - Mobile: hamburger toggle → SlickNav-style slide-down menu
   - Sticky positioning with dark bg

2. **Hero** — `Hero.tsx`
   - Full-width bg image (picsum.photos/seed/smokeshade-hero/1920/900)
   - Overlay: subtitle span, h2 heading, p description, pill CTA button
   - Dark overlay on image for text readability

3. **About Us** — `About.tsx`
   - Two-column: left = image (picsum.photos/seed/smokeshade-about/600/500), right = text
   - Section title "About us", heading "About Story"
   - Two paragraphs, CTA "Read More" pill button
   - Light background (white or near-white)

4. **Services** — `Services.tsx`
   - Section title centered
   - 3-column grid: icon + h4 + p per card
   - Use lucide-react icons (replace chain icon)
   - Light background

5. **Portfolio** — `Portfolio.tsx`
   - Section title centered
   - CSS Grid: 3 small items + 1 large (3:1 area ratio)
   - Each item: bg image + hover overlay with heart icon
   - Images: picsum.photos/seed/smokeshade-port-{1..4}/

6. **Counter** — `Counter.tsx`
   - Two-column flex: left (title + CTA), right (counter items)
   - Counter items: icon circle, animated count, label, description
   - Use requestAnimationFrame or IntersectionObserver for count-up

7. **Testimonials** — `Testimonials.tsx`
   - Carousel/slider component (CSS-only or minimal JS)
   - Each slide: circular author photo left, text right (name, role, quote)
   - 4 slides: Travis Crawford, Noah Padilla (x3 in reference — vary names)

8. **CTA** — `Cta.tsx`
   - Full-width bg image (picsum.photos/seed/smokeshade-cta/1920/600)
   - Centered text: h2 heading + p description + pill CTA button
   - Dark overlay

9. **Team** — `Team.tsx`
   - Section title centered
   - 3-column grid of member cards
   - Each: circular photo, social icons row (4 icons), name, description
   - Images: picsum.photos/seed/smokeshade-member-{1..3}/300/300

10. **Blog** — `Blog.tsx`
    - Section title centered
    - 2-column grid of blog cards
    - Each: featured image, h4 title link, p excerpt, h5 author name
    - Images: picsum.photos/seed/smokeshade-blog-{1,2}/

11. **Footer** — `Footer.tsx`
    - Dark bg (#111111)
    - 4-column widget grid: logo+desc, Useful Links, Newsletter form, Instagram grid
    - Copyright bar at bottom
    - Footer links to componentdock.com

## Design Notes

- **Color palette:** Dark theme — `#191919` body, `#222222` cards, `#e32879` magenta accent
- **Typography:** Libre Franklin via Google Fonts (400–900 weights)
- **Buttons:** Pill shape (`rounded-full`), magenta bg, white text, hover darkens
- **Icons:** Replace Font Awesome/Themify with lucide-react
- **Images:** All via picsum.photos with deterministic seeds
- **Layout:** Bootstrap-like 12-col grid → Tailwind `grid-cols-12` or `container mx-auto`
- **Sections with bg images:** Use `bg-cover bg-center` with dark overlay div
- **Carousel:** Can use CSS scroll-snap or simple React state for testimonials
- **Spacing:** Sections use `py-16` or `py-20` vertical padding (matches `.spad` class)
- **No ColorLib references** in app code — provenance lives in spec only
