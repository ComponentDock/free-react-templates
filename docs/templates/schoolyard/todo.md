# SchoolYard — Implementation Todo

Recreation of ColorLib Kindergarten (https://colorlib.com/wp/template/kindergarten/)

## Section order (from live preview DOM)

1. Header — top info bar (pink) + sticky nav (white) with logo, menu, CTA
2. Hero — background image, white rounded caption bubble (90px radius)
3. About — "Welcome to our Kindergarten" + text + image
4. Features — 3-column: Inter School Sports, Friendly Environment, Multimedia Class
5. Classes We Offer — card grid with age group, class count, price
6. Upcoming Events — event card + countdown timer
7. Team — "Expert Teachers" profile cards (4 members)
8. Testimonials — carousel of quote cards
9. Instagram — image grid
10. Footer — 3-column (description, Quick Links, About Us) + copyright

## Design tokens recap

- Brand: #ED078B (hot pink)
- CTA: #12D9DF (cyan)
- Accent: #FBCE0F (yellow)
- Heading: #423F8D (dark purple)
- Footer: #4255A4 (blue-purple)
- Fonts: Fredoka One (headings), DM Sans (body), Concert One (nav/CTA)
- Buttons: border-radius 30px, font "Concert One"

## Component breakdown

| Component | Notes |
|-----------|-------|
| Navbar.tsx | Top info bar + sticky nav + mobile hamburger |
| Hero.tsx | Background image, rounded white caption bubble, heading, span, CTA |
| About.tsx | Section title, text + image side-by-side |
| Features.tsx | 3-column feature cards with icons, headings, descriptions |
| ClassOffers.tsx | Card carousel/grid with class name, age, count, price |
| UpcomingEvents.tsx | Event card + countdown timer (Days/Hours/Minutes/Seconds) |
| Team.tsx | Teacher profile cards with hover overlay |
| Testimonials.tsx | Quote carousel/slider |
| Instagram.tsx | Image grid |
| Footer.tsx | 3-column footer + social icons + copyright + Component Dock link |

## Implementation notes

- Use `https://picsum.photos/seed/schoolyard-<n>/<w>/<h>` for all placeholder images
- Countdown timer: simple React interval component with days/hours/min/sec state
- Hero caption bubble: `border-radius: 90px` on desktop, reduce to ~19px on mobile
- Section backgrounds with overlay: use `bg-cover bg-center` with a semi-transparent overlay div
- Team hover effect: `bg-ED078B/20` overlay on hover with transition
- Social icons: use `lucide-react` icons
- All images via `<img>` or `<div>` with background-image, no external asset imports
