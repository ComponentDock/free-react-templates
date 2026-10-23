# Fixcraft — Design Notes

Source: ColorLib "Autorepair" (https://preview.colorlib.com/theme/autorepair/)

## Section Order

1. TopBar — dark bg (#171a1d), phone/hours left, social icons right
2. Navbar — dark bg, navbar-dark, logo + nav links + search + appointment CTA
3. HeroSlider — owl-carousel, 2 slides, full-width bg images + black overlay, white Poppins text, CTAs
4. Intro — white bg, "We care about your car", icon + text blocks, phone CTA
5. Services — white bg, "Our car services" heading, 3-col grid, 6 cards with flaticon icons
6. Counter — dark bg with bg image overlay, "45+ years" heading, 4 stat counters
7. Appointment — bg image section, "Free Consultation" form (name, date, time, phone, message)
8. Testimonials — bg-light, "Happy Clients & Feedbacks", client quotes
9. Blog — white bg, "Latest news from our blog", 3 blog cards
10. Pricing — bg-light, "Pricing" heading, pricing tier cards
11. Footer — dark bg (#16181b), 4 widgets (Services, Done Projects, Contact, Business Hours), copyright + ComponentDock

## Design Token Notes

- Primary brand: #007bff (Bootstrap blue) — buttons, links, active states
- Hover: #0069d9 — slightly darker blue
- Dark surfaces: #171a1d (top bar), #1a1a1a/#202020 (navbar), #16181b (footer)
- Font: "Poppins" via Google Fonts — clean geometric sans-serif
- Buttons: border-radius 0.25rem (4px), Bootstrap default sizing
- Hero: full-width bg images with black overlay, white Poppins headings
- Section bg: alternating white / #f8f9fa (bg-light pattern)
- Counter section uses a background image with dark overlay

## Fidelity Notes

- Hero uses a 2-slide carousel (owl-carousel in original). Use a simple React carousel (CSS-based or useState+useEffect).
- Service icons use flaticon-car-service classes. Use lucide-react equivalents (Wrench, CircleDot, Battery, Settings, Truck, Car).
- Counter numbers animate on scroll. Use IntersectionObserver + requestAnimationFrame.
- Appointment form has date/time pickers. Use native HTML date/time inputs for simplicity.
- Blog cards have hover effects (image zoom). Use Tailwind group-hover for scale.
- Pricing section has tiered cards. Keep 3 tiers for visual balance.
- Footer is dense with 4 widget columns. Match the column layout faithfully.
- Logo: gear/wrench icon (lucide Wrench) + "Fixcraft" text.
- Use picsum.photos/seed/fixcraft-hero-1/1920/900 for hero slides.
