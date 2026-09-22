# IronForge — Implementation Outline

Source: ColorLib Robust (https://colorlib.com/wp/template/robust/)
Preview: https://preview.colorlib.com/theme/robust/
New name: ironforge (apps/ironforge)

## Implementation Tasks

1. Copy simplest existing app (e.g. apps/gymcore) → apps/ironforge
2. Rename package to @free-react-templates/ironforge
3. Set public/CNAME to ironforge.free.componentdock.com
4. Set homepage to https://ironforge.free.componentdock.com
5. npm install at repo root to register workspace in lockfile
6. Create Tailwind @theme tokens: --color-brand: #DC2F2F, --color-accent: #9870FC, --color-accent-gold: #F7AF1D, --color-dark: #25282a, --color-light-bg: #f2f3f7
7. Build components in order:
   - Navbar.tsx (logo + nav links + cart icon, responsive hamburger)
   - HeroSlider.tsx (4 slides, dark overlay, centered headline + CTA pill button)
   - IntroCards.tsx (3 class cards with bg images, price badges)
   - Services.tsx (heading + 4 icon feature cards)
   - Schedule.tsx (weekly timetable grid)
   - Testimonials.tsx (carousel with success stories)
   - Trainers.tsx (3 trainer cards with photos)
   - Classes.tsx (3 class cards with bg images)
   - Events.tsx (3 event cards)
   - Blog.tsx (3 blog post teasers)
   - Newsletter.tsx (email input + subscribe button)
   - Footer.tsx (4 columns + Component Dock link)
8. Compose all sections in App.tsx
9. Add Poppins font link to index.html
10. Write Vitest tests for each component (100% coverage)
11. Run scripts/verify-app.sh ironforge
12. Commit + push

## Section-by-Section Fidelity Notes

### Navbar
- Left: logo text "IronForge" (link to #)
- Right: menu items with dropdown on "Classes"
- Cart icon at end (icon-cart from icomoon → use lucide-react ShoppingCart)
- Sticky on scroll with dark background

### Hero Slider
- Full-width, full-height slider
- Background images: use picsum.photos/seed/ironforge-hero-1/1920/1080 etc.
- Dark overlay (rgba(0,0,0,0.5))
- Centered white text: large headline, pill CTA button "Join Classes"
- Button: red bg, white text, border-radius 100px, padding 14px 30px

### Intro/Class Cards
- 3 equal-width cards in a row
- Each has a full background image (picsum), dark overlay at bottom
- White title, short description, price in large red text + "/month" small text
- Cards: Body Building ($25/mo), Yoga Program ($25/mo), Aerobics Classes ($25/mo)
- border-radius: 4px

### Services
- Centered heading "Being fit is attractive" + subtext paragraph
- 4 circular icon cards in a row
- Icons: Lucide equivalents (Heart, Dumbbell, Swords/Boxing, Shield)
- Cardio Program, Body Building, Karate Classes, Boxing Program
- Red accent on icon hover

### Schedule
- Heading "Our Class Schedule"
- Responsive table/grid showing classes across days and time slots
- Days as columns, time slots as rows
- Class names: Cardio, Loose Weight, Yoga, Boxing, Karate, Body Building, Swimming, Basic Exercise
- Light gray (#f2f3f7) background

### Testimonials
- Heading "What People Says" + subheading "Success Stories"
- Carousel/slider of testimonial cards
- Each: quote text, author name, role
- Use Swiper or simple state-based carousel

### Trainers
- Heading "Our Experienced Trainers"
- 3 trainer cards in a row
- Each: photo (picsum), name (Diego Carter, Lea Young, Alysha Reed), specialty
- Red bottom accent bar
- Names: PascalCase matching design

### Classes
- Heading "Our Classes"
- 3 cards with bg images, overlay, title
- Fitness Gym & Cardio, Strength Training, Yoga Program
- Light gray section background

### Events
- Heading "Upcoming Events"
- 3 event cards with images
- Special Training for Karate, World Yoga Day, 1st Anniversary

### Blog
- Heading "Recent Blog"
- 3 blog post cards with images, title, date
- Light gray section background

### Newsletter
- Heading "Subscribe Newsletter" + subtext
- Email input (3/4 width) + "Subscribe Now" button (1/4 width)
- Red pill button

### Footer
- Dark bg (#25282a), white text
- 4 columns: About (social icons), Quick Links (list with check icons), Recent Posts (3 blog teasers), Contact Info (address, phone, email, website)
- Copyright bar at bottom with Component Dock link
- "Made with ❤ by Component Dock" attribution
