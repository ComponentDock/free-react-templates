# Smilecraft — Design Notes & Tasks

Source: ColorLib "Dentacare" (https://colorlib.com/wp/template/dentacare/)
Preview: https://preview.colorlib.com/theme/dentacare/

## Section order (1:1 with original)

1. **Navbar** — Transparent overlay on hero (desktop), black bg on mobile. Logo "Smilecraft" white, nav: Home, About, Services, Doctors, Pricing, Blog, Contact.
2. **Hero carousel** — Owl Carousel, 700px height, background images with light dark overlay (0.2). White text: breadcrumbs + 40px heading + 20px paragraph. Two slides: "Modern Dentistry in a Calm and Relaxed Environment" and "Achieve Your Desired Perfect Smile".
3. **Emergency/Hours strip** — Dark brown (#3c312e) bg. Two columns: Emergency Cases (phone: +1 234 567 890) + Opening Hours (Mon-Fri schedule).
4. **Appointment form** — Dark bg, heading "Make an Appointment". Fields: Name, Phone, Date, Time, Service dropdown. White text, bottom-border inputs.
5. **Services** — "Our Service Keeps you Smile" heading, 4-column grid: Teeth Whitening, Teeth Cleaning, Quality Brackets, Modern Anesthetic. Each with icon + heading + description.
6. **About** — "Dentacare with a personal touch" heading. Left: image. Right: text + 3 feature cards (Well Experience Dentist, High Technology Facilities, Comfortable Clinics).
7. **Team** — "Meet Our Experience Dentist" heading, 4-column grid: Tom Smith, Mark Wilson, Patrick Jacobson, Ivan Dorchsner. Each with photo + name + title.
8. **Achievements** — Gradient section (#2f89fc → #2cbcbc), counter stats (years of experience, happy patients, etc.).
9. **Pricing** — "Our Best Pricing" heading, 4 cards: Basic, Standard, Premium, Platinum. Light border, blue price (#2f89fc). Premium has gradient overlay (blue→teal).
10. **Newsletter** — "Subscribe to our Newsletter" heading. Gradient bg (#2f89fc → #00dc94). Email input + subscribe button.
11. **Testimonials** — "Testimony" heading, carousel of review cards with avatar, name, quote.
12. **Blog** — "Latest Blog" heading, 3-column grid of blog cards with image + title + excerpt.
13. **Footer** — Dark bg (#191919), 4 columns: About, Quick Links, Services, Newsletter. Copyright bar.

## Fidelity notes

- **Primary blue #78d5ef** — Used for buttons, links, and interactive elements.
- **Price blue #2f89fc** — Used specifically for pricing amounts and as gradient start color.
- **Gradient theme** — Blue→Teal (#2f89fc → #2cbcbc) for achievements and premium pricing. Blue→Green (#2f89fc → #00dc94) for newsletter section.
- **Dark brown #3c312e** — Used for the emergency/hours strip and other dark sections.
- **Work Sans font** — Clean, modern sans-serif used throughout.
- **Hero** — 700px height carousel with very light overlay (0.2 opacity). Text is white with breadcrumbs above heading.
- **Appointment form** — Dark background, form inputs are transparent with white bottom borders. Very clean, minimal style.
- **Pricing cards** — Light border (#f0f0f0), standard cards plain white, Premium card has gradient overlay (blue→teal) making it stand out.
- **Footer** — Charcoal (#191919) background, white headings, semi-transparent white text and links.
- Use `picsum.photos/seed/smilecraft-<n>/800/600` for placeholder images (deterministic).

## Implementation tasks

- [ ] Scaffold `apps/smilecraft` from simplest existing app
- [ ] Set up package.json, vite.config.ts, index.html with Google Fonts (Work Sans)
- [ ] Create index.css with Tailwind + custom tokens (@theme for brand blue #78d5ef, #2f89fc)
- [ ] Implement Navbar component (transparent overlay, mobile black, hamburger)
- [ ] Implement HeroCarousel component (background images, light overlay, white text)
- [ ] Implement EmergencyStrip component (dark brown bg, emergency + hours)
- [ ] Implement AppointmentForm component (dark bg, form fields, bottom-border inputs)
- [ ] Implement ServicesGrid component (4-column, icons + headings)
- [ ] Implement AboutSection component (image left, text + feature cards right)
- [ ] Implement TeamGrid component (4-column dentist cards)
- [ ] Implement AchievementsCounter component (gradient bg, counters)
- [ ] Implement PricingCards component (4 cards, gradient premium)
- [ ] Implement NewsletterSection component (gradient bg, email input)
- [ ] Implement TestimonialsCarousel component (reviews)
- [ ] Implement BlogGrid component (3-column blog cards)
- [ ] Implement Footer component (dark bg, columns, Component Dock link)
- [ ] Compose App.tsx with all sections in order
- [ ] Write tests (Vitest + RTL) for all components
- [ ] Verify 100% coverage, typecheck, lint, build
- [ ] Set public/CNAME, package name @free-react-templates/smilecraft
