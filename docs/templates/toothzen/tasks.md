# Toothzen — Design Notes & Tasks

Source: ColorLib "Dentamax" (https://colorlib.com/wp/template/dentamax/)
Preview: https://preview.colorlib.com/theme/dentamax/

## Section order (1:1 with original)

1. **Navbar** — Transparent overlay on hero (desktop), dark on mobile. Logo "Toothzen" with dark blue text + teal accent span. Nav: Home, About, Services, Pages, Blog, Contact.
2. **Hero parallax** — Full-width background image with gradient overlay (peach→tan→teal). Two slides: "Achieve Desired Perfect Smile" and "Dentist Services that You Can Trust". White centered text.
3. **Services strip** — 4-column row of service cards. Each has a teal circular icon (90px, overlapping hero by -80px), white bg, heading, description. Services: Emergency Service, Qualified Dentist, General Treatment, Online Appointment.
4. **Features row** — 4 items: Easy Booking, Experience, Flexible Schedule, Best Price Guarantee. Flex layout with icon + text.
5. **Appointment form** — Gradient bg (peach→tan→teal). Heading "Appointment Form" in dark blue (#0f4883), uppercase, letter-spacing 3px. Form fields.
6. **About section** — "We Are Dentamax A Dental Clinic" heading, image + text split layout.
7. **Team** — "Our Qualified Dentist" heading, 4-column grid of dentist cards (4 × John Doe). Photo + name.
8. **Footer** — Light bg with gradient overlay (0.2 opacity). Dark blue headings, muted blue text. 4 columns: About, Services, Quick Links, Newsletter. Copyright.

## Fidelity notes

- **Signature gradient** — The peach→tan→teal gradient (`rgba(255,207,148,0.35)` → `rgba(227,209,163,0.35)` → `#65d8ea`) is used on hero, appointment form, and footer overlay. This is the most distinctive design element.
- **Teal accent #65d8ea** — Used for service icons, logo accent span, and gradient endpoint. Very calming, dental-appropriate.
- **Dark blue #0f4883** — Used for headings in footer and appointment form. Professional, trustworthy.
- **Service icons** — Teal circular bg (#e1f9fb), 90px diameter, positioned with -80px margin-top to overlap the hero section. Very distinctive visual treatment.
- **Parallax hero** — Background image with `background-attachment: fixed` for parallax scroll effect.
- **Roboto font** — Clean, modern sans-serif (different from other dental templates that use Work Sans).
- **Appointment form** — Gradient background, dark blue uppercase heading with wide letter-spacing (3px).
- **Footer** — Light background with subtle gradient overlay (0.2 opacity). Muted blue (#6c8faf) text, dark blue headings.
- Use `picsum.photos/seed/toothzen-<n>/800/600` for placeholder images (deterministic).

## Implementation tasks

- [ ] Scaffold `apps/toothzen` from simplest existing app
- [ ] Set up package.json, vite.config.ts, index.html with Google Fonts (Roboto)
- [ ] Create index.css with Tailwind + custom tokens (@theme for brand teal #65d8ea, blue #007bff)
- [ ] Implement Navbar component (transparent overlay, mobile dark, hamburger)
- [ ] Implement HeroParallax component (background image, gradient overlay, white text, 2 slides)
- [ ] Implement ServicesStrip component (4-column, teal circular icons, overlapping hero)
- [ ] Implement FeaturesRow component (4 items, flex layout)
- [ ] Implement AppointmentForm component (gradient bg, dark blue heading, form fields)
- [ ] Implement AboutSection component (image + text split)
- [ ] Implement TeamGrid component (4-column dentist cards)
- [ ] Implement Footer component (light bg, gradient overlay, columns, Component Dock link)
- [ ] Compose App.tsx with all sections in order
- [ ] Write tests (Vitest + RTL) for all components
- [ ] Verify 100% coverage, typecheck, lint, build
- [ ] Set public/CNAME, package name @free-react-templates/toothzen
