# DriveGo — Implementation Notes

## Source
- ColorLib template: Carrentals (https://colorlib.com/wp/template/carrentals/)
- Preview: https://preview.colorlib.com/theme/carrentals/
- New name: DriveGo

## Section order (fidelity)
1. Navbar — sticky white, logo left, nav right, hamburger mobile
2. Hero — full-viewport bg image, headline, search form overlay
3. How It Works — 3 steps with blue numbers, video link
4. Promo — split text + image, CTA
5. Car Listings — 3-col grid, 6 car cards with specs
6. Features — 3x2 grid, 6 service cards with circle icons
7. Testimonials — 3 cards, quote + avatar + name/role
8. CTA Banner — blue bg, headline, button
9. Footer — 5-column layout, social icons, copyright

## Design tokens
- Brand: #0779e4 (blue)
- Font: Roboto (Google Fonts), weights 400/700/900
- Border radius: 7px (cards, forms)
- Hero heading: 50px, 900 weight, #000
- CTA: bg-primary blue with white text; button white with blue text
- Service icons: 50% border-radius (circles)

## Implementation notes
- Use Tailwind `@theme` to define brand color as `--color-brand: #0779e4`
- Hero: use picsum.photos/seed/drivego-hero/1920/1080 as bg image
- Car images: picsum.photos/seed/drivego-car-1/600/400 through car-6
- Testimonial avatars: picsum.photos/seed/drivego-person-1/80/80 through person-3
- Car listing specs: use lucide-react icons (Luggage, DoorOpen, Users) or keep as text
- Service icons: use lucide-react (Home, Settings, Clock, Shield, Video, Key)
- Search form: use native select + input[type=date] — no date picker library needed
- Form is decorative (no backend), but buttons should be accessible `<button>` elements
- Footer social links: lucide-react icons (Facebook, Instagram, Twitter, Linkedin)

## Component breakdown
- Navbar.tsx — logo, nav links array, hamburger toggle (useState)
- Hero.tsx — bg image div, headline, SearchForm component
- SearchForm.tsx — select + 2 date inputs + submit button
- HowItWorks.tsx — 3 step cards + video link
- PromoSection.tsx — split layout with text and image
- CarListings.tsx — 6 car data objects, rendered in 3-col grid
- CarCard.tsx — single car card with image, name, price, specs, description, CTA
- Features.tsx — 6 service data objects, 3x2 grid
- ServiceCard.tsx — circle icon, title, description, learn more link
- Testimonials.tsx — 3 testimonial data objects
- TestimonialCard.tsx — quote, avatar, name, role
- CTABanner.tsx — blue bg, headline, button
- Footer.tsx — about, 4 link columns, social icons, copyright, Component Dock link
