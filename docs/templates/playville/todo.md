# Playville — Implementation TODO

Source: ColorLib Kiddos (https://colorlib.com/wp/template/kiddos/)
Preview: https://preview.colorlib.com/theme/kiddos/

## Section build order

1. [ ] Scaffold app (copy simplest existing app, rename to playville)
2. [ ] index.css: Tailwind v4 theme tokens (primary, secondary, tertiary, quaternary, fifth, dark)
3. [ ] index.html: Google Fonts link for Work Sans + decorative font
4. [ ] TopInfoBar — simple flex row, primary bg, 3 columns (address, email, phone) with icon circles
5. [ ] Navbar — transparent bg, sticky on scroll (JS scroll listener → add bg-white class), brand + 7 nav links, mobile hamburger
6. [ ] HeroSlider — Swiper.js integration, 2 slides with background images (picsum), overlay div, centered h1 + secondary CTA btn
7. [ ] ServicesStrip — 4-column grid, each with different bg color class, circular white icon container, heading + paragraph
8. [ ] WelcomeAbout — split layout (5/7 cols), left bg-light with heading + text + CTA, right with heading + 2×2 feature grid (icon circle + heading + text)
9. [ ] IntroBanner — full-width section with bg image (picsum), dark overlay (opacity 0.4), centered white heading + description
10. [ ] StaffSection — heading + 3–4 staff cards, each with image + name + position, hover reveals social icons overlay
11. [ ] CounterSection — parallax bg, 4 stat blocks with large number + label, animate on intersection observer
12. [ ] Testimonials — bg-light, Swiper carousel, testimonial cards with circular user image + quote + name + position
13. [ ] AppointmentForm — parallax bg, heading + form with transparent inputs (border-bottom white), submit button
14. [ ] BlogSection — heading + 3 blog cards with date badge (purple bg), image, title, meta
15. [ ] GallerySection — image grid with hover zoom icon overlay
16. [ ] Footer — dark bg (#232323), 5 columns (About, Categories, Recent, Newsletter, Contact), social icons, Component Dock attribution
17. [ ] App.tsx — compose all sections in order
18. [ ] Tests (TDD): one describe per component, 100% coverage
19. [ ] Verification: typecheck, lint, test:coverage, build

## Design notes

- **Color palette is playful/childlike**: sky blue primary, amber secondary, green + red + purple accents — all used as full-width column backgrounds in the services strip
- **Buttons are pill-shaped** (border-radius: 40px) throughout
- **Parallax sections** use CSS background-attachment: fixed with dark overlays (opacity 0.2–0.4)
- **Staff hover effect**: social icons slide in from below with opacity transition
- **Counter numbers**: large (50px) in primary blue, animate counting up via IntersectionObserver
- **Testimonials carousel**: Swiper with pagination dots, active slide at full opacity, others dimmed
- **Blog date badges**: purple (#5d50c6) background block positioned over the image
- **Footer subscribe form**: purple submit button, transparent input with white border
- **Icons**: use lucide-react equivalents (flaticon icons in original → lucide replacements)
- **Images**: all placeholder via picsum.photos/seed/playville-N/W/H
