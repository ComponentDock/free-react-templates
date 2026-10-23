# Highway (Colorlib Autoroad) — Tasks & Design Notes

## Design notes

- **Original:** ColorLib "Autoroad" — free car rental website template
  (source: https://colorlib.com/wp/template/autoroad/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/autoroad/`
  (HTTP 200, 41.2KB) + stylesheet `css/style.css` (78.7KB). Full rendered
  DOM extracted; structure below is from the DOM + CSS tokens.
- **Structure observed (1:1):** navbar (dark bg, brand "Autoroad" with
  orange span, Home/About/Pricing/Our Car/Blog/Contact) → hero
  ("Now It's easy for you rent a car" + booking form "Make your trip") →
  secondary search filter (car type, condition, car model, price range
  selects + search button) → services ("Our Services" + 4 cards: 24/7
  Car Support, Lots of location, Reservation, Rental Cars) → choose your
  car (carousel of vehicle cards: Mercedes Grand Sedan, image, price,
  features) → how it works (parallax bg + overlay, 4 steps: Pick
  Destination, Select Term, Choose A Car, Enjoy The Ride) → testimonials
  ("Happy Clients" owl carousel) → about ("Choose A Perfect Car" split
  layout) → recent blog (3 cards) → footer (dark bg, 4 columns: About
  Autoroad + social, Information links, Customer Support links, Have a
  Questions newsletter form + copyright).
- **Design tokens:** brand orange **#fc983c** + bootstrap primary
  **#007bff**; hero overlay **#000** 40% opacity; counter/parallax sections
  **#000**, dark brown **#3c312e**; footer **#000**; request form white bg
  with **5px border-radius** and box-shadow; form inputs height 40px,
  border-radius 0px, transparent bg; play icon orange **#fc983c** circle
  70x70px border-radius 50%; font **Poppins** (weights 200-800) via Google
  Fonts; headings 60px weight 200 on hero, dark on content sections.
- **Recreation name:** Highway (new name, no collision with existing
  apps/ or specs). App folder `apps/highway`,
  package `@free-react-templates/highway`.
- **Design approach:** dark-accented car rental theme with orange
  highlights; hero = seeded picsum photo + booking form card; secondary
  search filter with select dropdowns; services with lucide icons; vehicle
  cards in CSS grid; parallax "How it works" section; testimonials with
  avatar circles; about split layout; blog cards; dark footer with
  newsletter; all images picsum-seeded (`picsum.photos/seed/highway-N/w/h`);
  Google Fonts via `<link>`.

## Implementation tasks

- [ ] Scaffold app: copy simplest existing app, rename package to
      `@free-react-templates/highway`, create `public/CNAME` with
      `highway.free.componentdock.com`, set `homepage` in package.json
- [ ] Add `injectUiSource()` to vite.config.ts
- [ ] Set up Tailwind 4 theme tokens in index.css (#fc983c brand color,
      Poppins font family)
- [ ] Add Poppins Google Font link to index.html
- [ ] Implement Navbar component: dark bg, brand "Highway" (orange "way"),
      nav links, dark-mode toggle, mobile hamburger
- [ ] Implement Hero component: background image with 40% overlay, split
      layout — left headline + description + play button, right booking form
      card (white, rounded, shadow, inputs, "Search Vehicle" button)
- [ ] Implement SearchFilter component: horizontal row of select dropdowns
      (car type, condition, car model, price range) + orange search button
- [ ] Implement Services component: "Our Services" heading + 4 icon cards
      (lucide icons: Headphones, MapPin, CalendarCheck, Car)
- [ ] Implement VehicleCarousel component: "Choose Your Car" heading +
      horizontal scroll of vehicle cards (image, name, price, features)
- [ ] Implement HowItWorks component: dark parallax bg, overlay, heading,
      4 step cards (icons + titles + descriptions)
- [ ] Implement Testimonials component: "Happy Clients" heading + carousel
      of testimonial cards (avatar, name, role, quote)
- [ ] Implement About component: split layout with text + vehicle image
- [ ] Implement Blog component: "Recent Blog" heading + 3 blog cards
      (image, date badge, title, description)
- [ ] Implement Footer component: dark bg, 4 columns (About + social,
      Information, Customer Support, newsletter form), copyright with
      Component Dock link
- [ ] Compose all sections in App.tsx in correct order
- [ ] Implement dark mode (toggle in navbar, .dark class on html root,
      dark: utilities in Tailwind)
- [ ] Write tests for all components (Vitest + RTL, 100% coverage)
- [ ] Run `npm run spec:validate` to verify spec
- [ ] Run `scripts/verify-app.sh highway` to pass local gate
- [ ] Commit as `feat: add Highway template (ColorLib Autoroad)`
