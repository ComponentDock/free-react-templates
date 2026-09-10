# OilSmith — Design Notes

**Source**: ColorLib "Autorepair" (https://colorlib.com/wp/template/autorepair/)
**Preview**: https://preview.colorlib.com/theme/autorepair/
**New name**: oilsmith

## Section Order (fidelity reference)

1. **Top bar** — Brand logo ("Autorepair.") + address + phone + social icons (Facebook, Twitter, Instagram, Dribbble) in a dark top strip
2. **Navbar** — White background, links: Home, About, Services, Project, Blog, Contact + search bar
3. **Hero Slider** — Full-width carousel (2 slides), dark image overlay (0.4 opacity), white text, amber accent words, "Book an appointment" CTA
4. **Intro CTA Banner** — Wrench icon + "Are you ready? Let's repair it now!" + amber "Book an Appointment" button (full-width bar)
5. **Services** — 3-column grid, 6 service cards (Oil Change, Tire Change, Batteries, Engine Repair, Tow Truck, +1), each with flaticon icon, title, description, "Read more" link
6. **About** — Light bg (#f8f9fd), "Welcome to OilSmith" heading, descriptive text, checkmark feature list, side image
7. **Stats Counter** — Dark bg (#202020), 4 counters: Years of Experience, Projects Completed, Happy Customers, Awards Winning — amber (#f79f24) numbers, uppercase white labels
8. **Appointment Form** — Split layout: left = hero image, right = amber (#f79f24) overlay with white form, "Free Consultation" heading, service dropdown, contact fields
9. **Testimonials** — Light bg, carousel with user images, quotes, names (Roger Scott, etc.), prev/next arrows
10. **Blog** — 3-card grid: image + "Posted by John doe" + date + article title
11. **Pricing** — 3 pricing cards: First PMS ($78.98), Engine Diagnostics ($83.75), Tow Truck ($85.00) — each with description, feature checkmarks, "Get Started" button
12. **Projects Gallery** — Grid of completed work images with overlay labels (Done Projects, Engine Testing, Oil Change, etc.)
13. **Footer** — Dark (#252525) bg, 4-column: logo + description + social links, services list, contact info, business hours

## Key Design Decisions

- **Brand color**: #f79f24 (amber/orange) — used for accents, CTA buttons, counter numbers, hover states, appointment overlay
- **Dark palette**: #202020 (counter), #252525 (footer), #000000 (hero overlay)
- **Light sections**: #f8f9fd or #f8f9fa for alternating backgrounds
- **Font**: Poppins (300–900 weights via Google Fonts)
- **Buttons**: Bootstrap-style rectangular (no border-radius), `.btn-primary` in blue (#007bff), `.btn-custom` links with amber underlines
- **Icons**: Originally flaticon — use lucide-react equivalents (Wrench, Car, Battery, Truck, Settings, etc.)
- **Hero**: Owl Carousel slider — implement as React carousel (embla, swiper, or custom)
- **Testimonials**: Owl Carousel — React carousel with prev/next nav
- **Counter**: Animated number counters (use a counting hook or library)
- **Appointment form**: Form with service dropdown, name, email, date, time, phone, message
- **Images**: Use https://picsum.photos/seed/oilsmith-N/W/H for deterministic placeholders

## Fidelity Notes

- Match section order exactly as listed above
- Match the split-layout appointment section (image left, form right with amber overlay)
- Match the dark counter strip with amber numbers
- Match the 4-column footer layout
- Match the intro CTA bar style (icon + text + CTA button in a row)
- The "About" section should have the checkmark list on one side and an image on the other
- Pricing cards: 3 columns, centered layout, featured pricing style
- Keep the amber (#f79f24) as the dominant accent throughout

## Component Outline

```
apps/oilsmith/src/
├── main.tsx
├── App.tsx              — Composes all sections
├── index.css            — Tailwind entry + theme tokens (@theme)
├── components/
│   ├── TopBar.tsx       — Address + phone + social links strip
│   ├── Navbar.tsx       — White navbar with search, links, mobile toggle
│   ├── HeroSlider.tsx   — Carousel with overlay, text, CTA
│   ├── IntroBanner.tsx  — Wrench icon + heading + CTA button
│   ├── Services.tsx     — 3-column grid of service cards
│   ├── ServiceCard.tsx  — Single service card (icon + title + desc + link)
│   ├── About.tsx        — Welcome text + feature list + image
│   ├── StatsCounter.tsx — Dark strip with 4 animated counters
│   ├── AppointmentForm.tsx — Split layout with form
│   ├── Testimonials.tsx — Carousel of client testimonials
│   ├── BlogSection.tsx  — 3-card blog grid
│   ├── BlogCard.tsx     — Single blog card
│   ├── Pricing.tsx      — 3 pricing cards
│   ├── PricingCard.tsx  — Single pricing card
│   ├── ProjectsGallery.tsx — Image grid with overlays
│   └── Footer.tsx       — 4-column dark footer
```
