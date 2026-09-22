# Fortitude — Implementation Tasks & Design Notes

## Template Info
- **New name:** fortitude
- **Source:** ColorLib Robust (https://colorlib.com/wp/template/robust/)
- **Preview:** https://preview.colorlib.com/theme/robust/
- **Category:** Health Fitness

## Section Build Order

1. **Navbar** — Fixed/absolute over hero. Logo "Fortitude" left. Nav links right (Home, Classes [dropdown], Schedule, Trainers, Events, Blog, Contact). CTA pill button with gradient (red→purple) + cart icon.
2. **Hero** — Full-width slider with 4 slides. Each: background image (picsum.photos/seed/fortitude-hero-{1..4}/1920/1080), dark overlay (rgba(0,0,0,0.3)), centered motivational headline, "Join Classes" dark button. Use a state-managed slider (manual or auto-rotate).
3. **Intro Cards** — 3 equal-width cards in a row. Each: background image (picsum.photos/seed/fortitude-intro-{1..3}/600/400), overlay with title + description + price badge ("$25.00 /month"). Hover reveals description.
4. **Services** — Centered heading "Being fit is attractive" with description. 4 icon cards: Cardio Program, Body Building, Karate Classes, Boxing Program. Use lucide-react icons (Heart, Dumbbell, Swords, HandMetal or similar).
5. **Schedule** — Centered heading. 7-day week tab bar. 2 rows × 4 entries: icon + time + class name + trainer. Use state for active day. 8 classes total: Cardio Program, Loose Weight, Yoga Classes, Boxing Program, Karate Classes, Body Building, Swimming Program, Basic Exercise.
6. **Testimonials** — Background image + dark overlay. Heading "What People Says" / "Success Stories". Carousel with 3 testimonials: quote text, author name, circular photo (picsum.photos/seed/fortitude-person-{1..3}/200/200). Auto-rotate or manual navigation.
7. **Trainers** — 4 trainer cards in a row. Each: large photo (picsum.photos/seed/fortitude-trainer-{1..4}/400/500), name, specialty title ("Body Building Trainer"). Use alternate background image style.
8. **Classes** — Light gray bg. 3 class cards. Each: image with price overlay badge, title, description, "Learn More →" link. Images: picsum.photos/seed/fortitude-class-{1..3}/400/300.
9. **Events** — 3 event cards. Each: date badge (day + month), organizer, event title, location with map icon.
10. **Blog** — Light gray bg. 3 blog cards. Each: image with date overlay, author, title, excerpt.
11. **Newsletter** — Background image + overlay. Heading "Subscribe Newsletter". Email input + "Subscribe Now" button.
12. **Footer** — 4-column: About (text + social icons), Quick Links (check-icon list), Recent Posts (3 mini blog cards with images), Contact Info (address, phone, email, website). Copyright bar below.

## Fidelity Notes

### Colors
- Primary: #DC2F2F (dark red) — buttons, active nav, accents
- Accent: #9870FC (purple) — gradient end, cart badge
- Gradient: linear-gradient(45deg, #DC2F2F, #9870FC) — CTA pill
- Dark: #000000 — hero overlays, dropdown bg
- Body text: gray (CSS keyword)
- Headings: #000000
- Nav muted: rgba(255,255,255,0.7)
- Dropdown text: #999999

### Typography
- Font: Poppins (import from Google Fonts), weights 300, 400, 500, 700, 900
- Icon font: icomoon (replace with lucide-react equivalents)

### Buttons
- Primary: #DC2F2F bg, white text, Bootstrap-style rounded
- CTA pill: gradient #DC2F2F → #9870FC, border-radius 100px, white icon
- Learn More: text link with arrow icon, no background
- Subscribe: primary button style

### Layout
- Bootstrap 12-column grid (use Tailwind grid/flex)
- Section headings: centered, with description paragraph below
- Light gray sections: alternate white/light-gray backgrounds
- Overlays: rgba(0,0,0,0.3) default, 0.7 on hover

### Images
- Hero slides: picsum.photos/seed/fortitude-hero-{1,2,3,4}/1920/1080
- Intro cards: picsum.photos/seed/fortitude-intro-{1,2,3}/600/400
- Testimonial bg: picsum.photos/seed/fortitude-testimony/1920/800
- Person photos: picsum.photos/seed/fortitude-person-{1,2,3}/200/200
- Trainer photos: picsum.photos/seed/fortitude-trainer-{1,2,3,4}/400/500
- Class images: picsum.photos/seed/fortitude-class-{1,2,3}/400/300
- Blog images: picsum.photos/seed/fortitude-blog-{1,2,3}/400/300
- Newsletter bg: picsum.photos/seed/fortitude-newsletter/1920/600
- Event locations: no map embed needed (just icon + text)

### Key Differences from Reference
- No actual slider library (use CSS transitions or simple state-based rotation)
- No actual video playback
- No actual blog detail pages (single-page template)
- Placeholder images replace original gym photography
- Colorlib attribution replaced with ComponentDock link
- icomoon icons replaced with lucide-react equivalents
- No actual shopping cart (CTA pill is decorative)
