# Breatha — Implementation Tasks

## Source
- **ColorLib original:** Yogalife
- **Preview URL:** https://preview.colorlib.com/theme/yogalife/
- **Source slug:** yogalife

## Design Notes

### Visual Style
- Clean, serene yoga studio aesthetic
- Large hero images with dark overlay (40% black)
- Playfair Display serif for all headings (400/700)
- Work Sans sans-serif for body text (300/400/700)
- Brand teal: #87e5da — used as primary accent throughout
- Minimal, airy layout with generous padding (3em mobile, 7em desktop)

### Section-by-Section Fidelity Notes

#### 1. Navbar
- Fixed position, transparent over hero, white bg on scroll
- Logo: "Breatha" in Playfair Display, font-weight 200
- Right-aligned nav links: Home, Yoga Classes (with dropdown), Events, About Studio, Contact
- Dropdown: black bg, white text, active item in #87e5da, arrow-top indicator
- Mobile: hamburger → 300px slide-in from right

#### 2. Hero Slider
- Full viewport height, background image with rgba(0,0,0,0.4) overlay
- Auto-rotating carousel (2 slides)
- Center-aligned white text
- Small uppercase caption above large Playfair Display heading
- Slide 1: "Yoga for everybody" / "Welcome To Breatha"
- Slide 2: "Enjoy With Us" / "Yoga & Meditation"

#### 3. Welcome Split
- 50/50 split on desktop (image left, text right)
- Image: full-height bg-image with cover
- Text: "Welcome To Breatha" in Playfair Display
- Teal caption: "Hello there!"
- Body text + pill CTA button "See The Yoga Pricing"

#### 4. Our Programs
- Light bg (#f8f9fa)
- Centered section heading with black underline bar
- 3-col grid, 6 cards (2 rows)
- Each card: thumbnail image, title link, category + instructor, duration + level
- Icons from lucide-react for schedule/signal

#### 5. Watch Video
- Split layout: left = video thumbnail + play button overlay + small image below
- Right: "Watch Video" heading, body text, text link "Watch Video →"
- Play button: centered circle with play icon

#### 6. Yoga Pricing
- 4-col grid of pricing cards
- Dashed border (#ccc)
- First card: bg-image with dark overlay, white text, outline-white pill button
- Remaining cards: white bg, primary pill button
- Each card: plan name, price (large), feature list, CTA

#### 7. Yoga Features
- 4-col grid of feature items
- Each: teal lucide icon (display-3 size), title, short description
- Icons: Spa, Flower2, Brain, Heart (representing peace, mindfulness, meditation, yoga carpet)

#### 8. Our Gallery
- Full-width, no-gutter 4-col grid (2 rows of 4)
- Lightbox popup on click (image overlay effect)
- Hover: opacity reduction on images

#### 9. Upcoming Events
- Carousel of event cards
- Each: image with play overlay, title, date + author, description

#### 10. Testimonials
- Light bg (#f8f9fa)
- Carousel of testimonial cards
- Each: circular avatar, name, blockquote text

#### 11. Footer
- Dark bg with rgba(0,0,0,0.8) overlay
- 3-col layout: About (text + CTA), Quick Menu + Ministries (link lists), Social Icons
- Copyright line with Component Dock link

## Tasks

1. [ ] Scaffold app folder `apps/breacha` (copy simplest app, rename package)
2. [ ] Add Google Fonts (Playfair Display + Work Sans) to index.html
3. [ ] Create theme tokens in index.css (@theme with brand colors)
4. [ ] Implement Navbar component (fixed, transparent→white scroll)
5. [ ] Implement HeroSlider component (2 slides, auto-rotate)
6. [ ] Implement WelcomeSplit component (image-text split)
7. [ ] Implement Programs section (6 cards in 3-col grid)
8. [ ] Implement WatchVideo component (split with play overlay)
9. [ ] Implement Pricing section (4 cards, dashed borders)
10. [ ] Implement Features section (4 icon items)
11. [ ] Implement Gallery section (4-col image grid)
12. [ ] Implement Events carousel section
13. [ ] Implement Testimonials carousel section
14. [ ] Implement Footer (dark, 3-col, Component Dock link)
15. [ ] Wire up App.tsx with all sections in order
16. [ ] Add placeholder images (picsum.photos with seed)
17. [ ] Write tests (100% coverage)
18. [ ] Run verification gate
