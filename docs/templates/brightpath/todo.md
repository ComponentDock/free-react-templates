# BrightPath — Implementation Todo & Design Notes

## Template info
- **New name:** BrightPath
- **ColorLib source:** Clever
- **Source URL:** https://colorlib.com/wp/template/clever/
- **Preview URL:** https://preview.colorlib.com/theme/clever/
- **Category:** Education / Courses

## Section implementation order

1. **TopHeaderBar** — gray bar, phone + email left, social icons right. Simple flex layout.
2. **Navbar** — white sticky navbar: logo left, nav links center (Home, Courses, Instructors, Blog, Contact), search + Register/Login right. Mobile hamburger.
3. **Hero** — full-width bg image + dark overlay, centered h1 "Let's Study Together", blue CTA button. Use `bg-img bg-overlay` pattern.
4. **CoolFacts** — 4-column stat counters: icon + number + label. Use lucide-react icons. Numbers: 1912, 123, 89, 56.
5. **PopularCourses** — section heading + 3-column card grid. Each card: image, title, instructor + category meta, description, bottom bar with seat count + star rating + price. One card is "Free".
6. **BestTutors** — horizontal carousel (CSS scroll-snap or simple flex). Circular tutor thumbnails, name, role, blurb, social row. 5 cards.
7. **RegisterNow** — split layout: left white form card (Name, Email, Phone, Site + "Send Message" button), right "Register Now" heading + paragraph + countdown timer. Translucent blue overlay bg.
8. **UpcomingEvents** — 3-column event cards: image + date badge overlay, event title, date/time, price badge. 3 events.
9. **Blog** — 2-column blog cards: image, headline, author + category meta, description. 2 posts.
10. **Footer** — two-part: top dark (#252525) with logo + copyright; bottom darker (#1f1f1f) with contact info + social icons. Must link Component Dock.

## Design notes

### Color palette
- Brand blue: #3762f0 (buttons, active states, "Free" badges)
- Brand hover: #2c56df
- Star rating yellow: #e3d21b
- Register button hover: #d7e0fc
- Body bg: #f7f7f7
- Cards/form: #ffffff
- Footer top: #252525
- Footer bottom: #1f1f1f
- Hero overlay: rgba(0,0,0,0.6)
- Register section overlay: rgba(214,223,251,0.7)

### Typography
- Headings + nav: Raleway (Google Fonts)
- Body + meta: Open Sans (Google Fonts)

### Spacing & shapes
- Section padding: 100px top/bottom
- Border radius: 6px (buttons, inputs, form card)
- Card shadows: subtle box-shadow on course and event cards

### Image strategy
- Hero bg: placeholder via `https://picsum.photos/seed/brightpath-hero/1920/800`
- Course images: `https://picsum.photos/seed/brightpath-course-<n>/400/250`
- Tutor thumbnails: `https://picsum.photos/seed/brightpath-tutor-<n>/150/150`
- Event images: `https://picsum.photos/seed/brightpath-event-<n>/400/250`
- Blog images: `https://picsum.photos/seed/brightpath-blog-<n>/600/400`

### Component patterns to reuse from packages/ui
- Button / ButtonLink for CTAs
- cn() for class composition
- Card compound component for course/event cards if applicable

### Fidelity pitfalls
- The hero overlay uses `bg-overlay-2by5` (a specific gradient) — match with Tailwind gradient overlay
- Course card bottom bar has a flex row with seat count + rating left, price right
- Tutor carousel needs horizontal scroll with snap, or a simple overflow-x scroll
- Register Now section uses a translucent blue pseudo-element overlay behind both the form and the countdown
- Event cards have a date badge absolutely positioned on the image
- The "Free" badge uses the brand blue bg, while price uses plain text
