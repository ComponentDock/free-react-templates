# Highwayx — Design Notes

Source: ColorLib "Autoroad" (https://preview.colorlib.com/theme/autoroad/)

## Section Order

1. Navbar — white/transparent, brand "AUTO" dark + "ROAD" orange, nav links (Home active orange)
2. Hero — full-width bg image (desert truck, golden hour), left text + play button, right white booking form card
3. SecondarySearch — white bg, 4 dropdown filters + orange Search button
4. Services — "Our Services" orange heading, 4 service cards with icons
5. ChooseYourCar — "Choose Your Car" heading, car card grid (image, name, price)
6. HowItWorks — "How it works" heading, 4 step cards with icons
7. Testimonials — "Happy Clients" heading, owl-carousel with client quotes
8. CarShowcase — "Choose A Perfect Car" heading, bg image section
9. Blog — "Recent Blog" heading, blog cards
10. Footer — dark bg (#16181b), 4 widgets (About, Info, Support, Questions), copyright + ComponentDock

## Design Token Notes

- Brand accent: #fd7e14 (orange) — the dominant visual accent, used on CTAs, active nav link, section headings, brand name "ROAD" portion
- Bootstrap base: #007bff defined in CSS but overridden by orange for brand identity
- Font: "Poppins" via Google Fonts — clean geometric sans-serif
- Buttons: border-radius 0.25rem (4px), hero CTA uses more rounded style
- Hero: full-width bg image with white booking form overlay card (shadow + rounded corners)
- Section bg: alternating white / #f8f9fa
- Dark surfaces: #1a1a1a (navbar), #16181b (footer)

## Fidelity Notes

- Hero is the key differentiator: a split layout with text+play button on left and a floating booking form card on right. Use Tailwind absolute positioning or grid for the overlay.
- Booking form fields: pick-up/drop-off locations (text inputs), pick-up/drop-off dates (date inputs), pick-up time (time input), "Search Vehicle" CTA.
- Secondary search filter below hero: 4 dropdown selects + Search button.
- Service icons: use lucide-react (Headphones for 24/7, MapPin for Location, CalendarCheck for Reservation, Car for Rental Cars).
- Car cards should show vehicle image, name, and daily price.
- How It Works: 4 numbered step cards with icons.
- Testimonials use owl-carousel; use CSS-based slider or simple React carousel.
- Use picsum.photos/seed/highwayx-hero/1920/900 for hero bg image.
- Use picsum.photos/seed/highwayx-car-1/400/300 for car cards.
