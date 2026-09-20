# ConfPeak — Implementation TODO & Design Notes

**Source:** ColorLib Eventalk (https://colorlib.com/wp/template/eventalk/)
**Preview:** https://preview.colorlib.com/theme/eventalk/
**New name:** confpeak
**Package:** @free-react-templates/confpeak
**Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript

## Design tokens (from live preview CSS)

- Primary brand: #6b75ff (indigo-purple)
- Secondary brand: #59b7ff (light blue)
- Button accent: #78d5ef (light cyan)
- CTA button: bg #6b76ff, text white, border-radius 2px
- Hero overlay: 45deg gradient #6b75ff → #59b7ff at 8% opacity
- Footer bg: #222831 (dark charcoal)
- Footer text: white
- Section bg-light: #f8f9fa
- Navbar: bg-dark (#343a40)
- Font: Work Sans (Google Fonts, weights 100-900)
- Button radius: 0.25rem (default), 2px (CTA)
- Heading color: #212529

## Section order (1:1 from original)

| # | Section | Component | Notes |
|---|---------|-----------|-------|
| 1 | Navbar | Navbar.tsx | Dark bg, brand "ConfPeak." with accent span on second word. Nav: Home, About, Speakers, Schedule, Blog, Contact. CTA "Buy ticket" button (#6b76ff bg). Scrolled state: solid dark bg. |
| 2 | Hero | Hero.tsx | Full-height bg-image, gradient overlay (8% opacity, 45deg #6b75ff→#59b7ff). Headline "Developer Conference 2019". Date subtext. Countdown timer (days/hours/minutes/seconds). Use JS interval for countdown. |
| 3 | Services | Services.tsx | bg-light. 4-column grid. Items: Venue, Transport, Hotel, Restaurant. Each: icon (use lucide-react: MapPin, Globe, Hotel, UtensilsCrossed) + title + description. |
| 4 | Counter | Counter.tsx | Background image with dark overlay. 4 stat counters: 850 Happy Delegates, 150 Our Speakers, 340 Hours Events, 2500 Our Sponsor. Each has icon + number + label. Animate on scroll (countUp). |
| 5 | Speakers | Speakers.tsx | Carousel/slider. 5 speakers: John Adams, Paul George, James Smith, Angelie Crawford, Jackie Spears. Each: photo (picsum), name, role, social links (Twitter, FB, Instagram icons). |
| 6 | Schedule | Schedule.tsx | Tabbed interface: About, Speakers, Schedule, Blog, Contact. Each tab: 3 items with speaker photo, talk title, speaker name. Use state for active tab. |
| 7 | Testimonials | Testimonials.tsx | Carousel. Testimonial cards: user photo, quote text, user name. Auto-rotate or manual navigation. |
| 8 | Pricing | Pricing.tsx | bg-light. 3-column: Personal ($85), Small Team ($200), Family Pack ($499). Each: price, "Enjoy All Features", Buy Ticket button. Highlight middle card. |
| 9 | Blog | Blog.tsx | bg-light. 3-column blog cards: image, title "Why Lead Generation is Key for Business Growth", date, share count. |
| 10 | Newsletter | Newsletter.tsx | Parallax bg (solid #6b76ff fallback). Heading "Subscribe to our Newsletter". Email input + submit button. |
| 11 | Gallery | Gallery.tsx | 4-column icon grid with image backgrounds: Camera, MapPin, Gift, Music icons. |
| 12 | Footer | Footer.tsx | Dark bg (#222831). 4 widgets: Brand + desc, Useful Links, Privacy, Questions + address. Component Dock link required. |

## Implementation notes

- Copy simplest existing app (e.g. apps/aurora or similar) as base
- Replace all content with Eventalk content adapted to ConfPeak branding
- Use picsum.photos for all placeholder images
- Work Sans via Google Fonts `<link>` in index.html
- Countdown timer: simple useEffect + setInterval
- Tabs: local state with React (no external lib needed)
- Carousel: implement with CSS scroll-snap or simple prev/next state (avoid heavy deps)
- Parallax: CSS background-attachment: fixed
- No references to ColorLib anywhere in app code

## Fidelity checklist

- [ ] Match section order exactly
- [ ] Match colors: #6b75ff primary, #222831 footer, #f8f9fa light bg
- [ ] Match Work Sans font
- [ ] Match CTA button: #6b76ff bg, 2px radius
- [ ] Match hero: full-height, gradient overlay, countdown timer
- [ ] Match 4 services, 4 counters, 5 speakers, 3 pricing tiers, 3 blog entries
- [ ] Match tabbed schedule interface
- [ ] Match dark footer with 4 widget columns
- [ ] Footer links to componentdock.com
- [ ] Responsive: mobile hamburger nav, stacked columns
