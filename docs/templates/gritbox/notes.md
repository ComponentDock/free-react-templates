# GritBox — Design Notes & Task Outline

**Source:** ColorLib Crossfits (https://colorlib.com/wp/template/crossfits/)
**Preview:** https://preview.colorlib.com/theme/crossfits/
**New name:** `gritbox`

## Structure Order (top to bottom)

1. **Navbar** — sticky white bar, logo left, nav links right, dropdown for Program
2. **Hero Slider** — 2-slide carousel with parallax bg images + dark overlay + white centered text
3. **Popular Program** — owl-carousel of 6 image+overlay cards
4. **The Club** — split layout (image left, text right + CTA)
5. **Featured Trainer** — full-width parallax bg, circular photo, quote, CTA
6. **Crossfit Exercises** — 3×2 grid of bordered icon cards
7. **Testimonies** — light gray bg, carousel of testimonial blocks
8. **Footer** — dark bg, 3-column layout, social icons, copyright

## Section-by-Section Fidelity Notes

### Navbar
- White background, sticky on scroll
- Logo: "Grit" regular + "Box" bold (matching original "Cross" + "**fits**" pattern)
- Dropdown menu with nested sub-menu (4th level: Swimming, Boxing, Running, Jogging)
- Mobile: hamburger icon opens black overlay slide-in menu
- Active link color: `#fd7e14` orange

### Hero Slider
- Use a carousel library (e.g. Embla or Swiper) to replicate OwlCarousel behavior
- 2 slides, auto-rotation with fade transition
- Full-viewport height with background image + dark overlay (`rgba(0,0,0,0.6)`)
- Centered white text: large heading + small caption below
- Slide 1: "Welcome To GritBox" / "Find The Healthy Way"
- Slide 2: "Optimize Your Health" / "Effective Program"

### Popular Program
- Section heading: "Popular Program" with orange underline bar (`:before` pseudo)
- Horizontal carousel of 6 cards
- Each card: background image with gradient/text overlay from bottom
- Overlay contains: title (h2), description (p), orange pill "Learn More" button
- Cards: Body Building, Body Combat, Push Up, Weight Lifting, Body Combat, Body Combat
- Placeholder images: `https://picsum.photos/seed/gritbox-prog-N/600/400`

### The Club
- Split layout: image col-lg-6, text col-lg-5 with ml-auto
- Heading: "The Club" with orange underline
- Two paragraphs of lorem ipsum
- "Join Our Club" button: `btn-outline-primary` (outlined orange, pill shape)
- Placeholder image: `https://picsum.photos/seed/gritbox-club/800/600`

### Featured Trainer
- Full-width section with parallax background image + dark overlay
- `background-attachment: fixed` for parallax effect
- Centered content: circular photo (25% width), name, quote, CTA
- "Make Me Your Trainer" orange pill button
- Placeholder photo: `https://picsum.photos/seed/gritbox-trainer/400/400`
- Placeholder bg: `https://picsum.photos/seed/gritbox-bg/1920/1080`

### Crossfit Exercises
- 3-column grid (2 rows = 6 cards)
- Each card: bordered box with padding, centered content
- Orange icon (use lucide-react equivalents), title (h5), description, "Learn More" link
- Titles: Weight Lifting, Walking Exercise, Belly Crunches, Weight Lifting Partner, Exercise Rolling, Lunge Plunk

### Testimonies
- Light gray background (`#f4f4f4`)
- Carousel of testimonial blocks
- Each block: flex row with circular avatar (left) + name + blockquote (right)
- 4 testimonials: Katie Johnson, Jane Mars, Shane Holmes, Mark Johnson
- Placeholder avatars: `https://picsum.photos/seed/gritbox-test-N/200/200`

### Footer
- Dark background `#1e1e1c`
- 3 columns: About (col-md-4), Quick Menu + Program (col-md-5), Social Icons (col-md-2)
- About: description + "Read More" orange pill button
- Quick Menu: Home, About, Our Trainers, News, Contacts, The Club, Privacy
- Program: Body Building, Morning Energy, Stretching, Weight Lifting
- Social: Facebook, Twitter, Instagram, Vimeo icons (lucide-react equivalents)
- Copyright: current year + "Component Dock" link (NOT Colorlib)
- Footer link color: `rgba(255,255,255,0.3)`, hover white

## Implementation Tasks

1. Scaffold `apps/gritbox` (copy minimal app, rename package)
2. Create `src/components/Navbar.tsx` with dropdown + mobile menu
3. Create `src/components/HeroSlider.tsx` with carousel + parallax
4. Create `src/components/PopularProgram.tsx` with horizontal card carousel
5. Create `src/components/TheClub.tsx` split layout
6. Create `src/components/FeaturedTrainer.tsx` with parallax bg
7. Create `src/components/CrossfitExercises.tsx` 3×2 icon grid
8. Create `src/components/Testimonies.tsx` carousel
9. Create `src/components/Footer.tsx` with 3-column layout
10. Compose all in `src/App.tsx`
11. Add theme tokens in `src/index.css` (`@theme` block with `#fd7e14`, fonts)
12. Write tests (Vitest + RTL) for each component
13. Verify 100% coverage, typecheck, lint, build
