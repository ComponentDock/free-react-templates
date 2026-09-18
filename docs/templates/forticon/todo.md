# Forticon — Task Outline & Design Notes

## Source
- **ColorLib template:** Complex
- **Preview URL:** https://preview.colorlib.com/theme/complex/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/complex-free-template.jpg
- **Design category:** Construction / Architecture Company

## Design Notes

### Visual Style
- Professional construction/architecture company layout
- Dark nav bar and footer (#25282a)
- Hero slider with cyan-purple gradient overlay (45deg: #43DDE6 → #9870FC)
- Clean white section backgrounds with generous padding (7em)
- Yellow accent (#F7B633) for active states and highlights
- Poppins font throughout
- Parallax background images on Counter and Team sections

### Layout Pattern
- Sticky nav with centered logo + horizontal links
- Full-width hero slider with centered text + CTA button
- Tabbed intro section (4 tabs with image + text split)
- 2×2 service grid with icons
- Full-width counter section (parallax bg) with 4 stat items
- 3-column project grid with hover overlay
- Full-width team section (parallax bg) with 3 member cards
- Testimonial carousel (centered, single slide)
- Full-width newsletter (dark overlay bg)
- Multi-column dark footer

### Color Palette
- Primary cyan: #00b7ea / #43DDE6
- Purple accent: #9870FC
- Gradient: 45deg from cyan to purple (hero overlay)
- Yellow: #F7B633 (active states, accents)
- Dark: #25282a (footer), #1E2022 (contact strip, headings)
- Body text: #333333
- Muted: #999999, #b3b3b3
- Overlay: rgba(0,0,0,0.7)

### Key Components to Build
1. Navbar — sticky, logo + 8 nav links
2. HeroSlider — flexslider replacement, 3 slides with gradient overlay + CTA
3. IntroTabs — 4 tabs with image + text content panels
4. ServicesGrid — 4 cards with icon + title + description
5. CounterSection — parallax bg, 4 animated counters with icons
6. ProjectsGrid — 3 project cards with image + hover icon + tags
7. TeamSection — parallax bg, 3 member cards with name/role overlay
8. TestimonialsCarousel — carousel with avatar, quote, name
9. Newsletter — dark overlay, email input + subscribe button
10. Footer — contact strip + 3 widget columns + social + copyright

### Parallax Implementation
- Use CSS `background-attachment: fixed` for parallax effect
- Counter and Team sections have parallax background images
- Dark overlay on top of parallax images

### Tabbed Content
- Bootstrap-style tabs (plan, general, manage, modeling)
- Each tab has image (left) + description + bullet list (right)
- Active tab has yellow accent (#F7B633)

## Task Order
1. Scaffold app (copy boilerplate, rename package, update vite.config.ts)
2. Add design tokens to index.css (@theme)
3. Build Navbar (sticky)
4. Build HeroSlider with gradient overlay + CTA
5. Build IntroTabs (tabbed service descriptions)
6. Build ServicesGrid (2×2 cards)
7. Build CounterSection with animated counters + parallax
8. Build ProjectsGrid (3 cards with hover overlay)
9. Build TeamSection with parallax + member cards
10. Build TestimonialsCarousel
11. Build Newsletter section
12. Build Footer (contact strip + widgets + social + copyright)
13. Compose App.tsx from all sections
14. Write tests for all components (100% coverage)
15. Build and verify
