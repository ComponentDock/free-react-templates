# Symposium — Implementation Notes

Source: ColorLib "Convention" — https://colorlib.com/wp/template/convention/
Preview: https://preview.colorlib.com/theme/convention/
New name: Symposium (apps/symposium)

## Section order (top → bottom)

1. **TopBar** — phone + email left, social icons + "Buy Ticket" button right
2. **Navbar** — dark bg, "Symposium" brand, 7 nav links (Home, About, Pricing, Schedule, Speakers, Blog, Contact), sticky
3. **Hero** — full-width bg image, dark overlay, countdown timer, outline-text heading
4. **About** — split 2-col: left image, right text + magenta "20 Year" badge
5. **Counter** — dark bg with image, 4 stat blocks (Places/Events/Photos/Speakers)
6. **Schedule** — "Event Schedule" heading, 4-day pill tabs, speaker cards per day
7. **Speakers** — gradient header bg, 5 speaker cards with hover overlay
8. **Gallery** — "Photos of Our Events", 4-col grid, 8 images, hover overlay
9. **Testimonials** — "People Say About Our Conference", carousel cards
10. **BookingForm** — "Book Your Tickets Now", gradient overlay bg, multi-field form
11. **Blog** — 3 blog cards (image + meta + title + excerpt)
12. **Footer** — dark bg, 4 columns (logo+social, Explore, Info, Get Your Seat)
13. **BottomBar** — copyright + Component Dock link

## Component breakdown

| Section       | Component file        | Notes                                       |
|---------------|-----------------------|---------------------------------------------|
| TopBar        | TopBar.tsx            | Flex row, phone/email left, social+btn right|
| Navbar        | Navbar.tsx            | Dark bg, sticky, mobile hamburger           |
| Hero          | Hero.tsx              | Bg image + overlay, countdown, outline text |
| About         | About.tsx             | 2-col split, badge with calendar icon       |
| Counter       | Counter.tsx           | 4 stat cards, dark bg with image            |
| Schedule      | Schedule.tsx          | Tab state, day switching, speaker cards     |
| Speakers      | Speakers.tsx          | Gradient header, 5 cards, hover reveal      |
| Gallery       | Gallery.tsx           | 4-col grid, hover overlay with search icon  |
| Testimonials  | Testimonials.tsx      | Carousel (manual or CSS), quote cards       |
| BookingForm   | BookingForm.tsx       | Gradient bg, form fields, submit            |
| Blog          | Blog.tsx              | 3 blog entry cards                          |
| Footer        | Footer.tsx            | 4-col dark footer, social, nav links        |
| BottomBar     | BottomBar.tsx         | Copyright + Component Dock                  |

## Key design decisions

- **Countdown timer**: Use `useState` + `useEffect` with `setInterval` for a static demo countdown (set a future date for visual effect).
- **Schedule tabs**: Local state for active day index; no router needed.
- **Testimonial carousel**: Either a simple CSS-only carousel or manual prev/next with state — avoid heavy carousel libs.
- **Gallery hover**: CSS `::after` overlay + opacity transition on hover; no lightbox needed.
- **Outline text**: Use `-webkit-text-stroke` CSS property for the outline effect on key heading words.
- **Gradient overlays**: CSS `linear-gradient(45deg, #423ead, #ed03be)` with opacity for speakers header and booking form.
- **Images**: Use `https://picsum.photos/seed/symposium-<n>/<w>/<h>` for all placeholder images.

## Fidelity notes

- Match the exact section order from the original
- The original uses Bootstrap 4 grid; recreate with Tailwind's grid/flex utilities
- The original has scrollax animations (`ftco-animate`); use simple CSS fade-in or intersection observer
- The original uses Owl Carousel for testimonials; implement with state-based carousel
- Social icons: use lucide-react equivalents
- Flaticon icons: replace with lucide-react (MapPin, Calendar, Camera, Users, etc.)
- Form inputs: use Tailwind styles matching the original transparent-bg + white-border look
