# Yogawell — Prep Notes

Source: ColorLib Doyoga (https://colorlib.com/wp/template/doyoga/)
Preview: https://preview.colorlib.com/theme/doyoga/
New name: yogawell (apps/yogawell)

## Section order (fidelity)

1. **Navbar** — Sticky, logo left, nav links right, hamburger mobile
2. **Hero** — Full-width dark overlay, "A Yoga Studio" heading, paragraph, "Watch the video" CTA button
3. **Featured Classes** — Carousel (owl-carousel style), 4 cards with image + name + price + button. Prev/next arrows
4. **Schedule** — Heading + intro text, list of 4 schedule items (name, desc, time, date, price CTA)
5. **About Us** — Split: text left, images right
6. **Events** — 2 cards side by side, each with name, date, desc, "Read More"
7. **Gallery** — Filterable grid (tabs: All/Classes/Intern/Training), 8+ images
8. **Contact** — Form left (Name, Phone, Email, Message), Contact Details right (address, phone, email)
9. **Footer** — 4 columns: About blurb, Quick Links, Newsletter + Send, Follow Us. Copyright line with Component Dock link

## Design tokens (from CSS)

- Brand: #6610f2 (indigo/violet)
- Page bg: #fff
- Alt section bg: #f8f9fa
- Card/input bg: #ebeef0
- Text: #212529 / #333
- Muted text: #8c8c8c / #b3b3b3
- Border: #dee2e6
- Hero overlay: rgba(0,0,0,0.6) on black
- Font: Quicksand (Google Fonts, rounded geometric)
- Button radius: 4px
- Icon circles: 50% radius

## Key implementation notes

- Use a simple CSS carousel or splide for featured classes (no heavy dep)
- Schedule items: vertical list with time/date metadata
- Gallery: implement with a simple filter state (useState) + grid
- Contact form: basic form fields, no backend needed
- Footer newsletter: just a form UI, no submission logic
- All placeholder images via picsum.photos with deterministic seeds
- No ColorLib references anywhere in app code

## Components to create

1. `Navbar.tsx` — sticky nav, hamburger toggle
2. `Hero.tsx` — banner with overlay
3. `FeaturedClasses.tsx` — carousel of class cards
4. `Schedule.tsx` — class schedule list
5. `About.tsx` — split layout about section
6. `Events.tsx` — two event cards
7. `Gallery.tsx` — filterable image grid
8. `Contact.tsx` — form + contact details
9. `Footer.tsx` — multi-column footer
10. `App.tsx` — compose all sections
