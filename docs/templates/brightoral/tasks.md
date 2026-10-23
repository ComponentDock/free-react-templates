# Brightoral — Design Notes & Tasks

Source: ColorLib "Dente" (https://colorlib.com/wp/template/dente/)
Preview: https://preview.colorlib.com/theme/dente/

## Section order (1:1 with original)

1. **Navbar** — White bg, logo "Brightoral" left, nav right (Home, About, Services, Appointment, Testimonial, Blog, Contact). Mobile hamburger.
2. **Hero** — Full-viewport cover image with dark overlay (0.4). White text: "Your **New Smile**" (900 weight on bold part). Uppercase sub-text with letter-spacing 0.2em.
3. **Services intro** — 3-column feature cards: Periontodology, Tooth Whitening, Preventative Care. Each with icon, heading, description.
4. **Equipment strip** — 4 items with icons: Tooth Whitening, Stethoscope, First Aid Kit, Tooth Pliers.
5. **Appointment form** — Cream bg (#ece8d9). Heading "Online **Appointment** Request Form" (uppercase, bold on "Appointment"). Form with box shadow. Fields: Name, Phone, Date, Time, Message.
6. **Services grid** — "Our **Services**" heading, 6 items: Tooth Whitening, Stethoscope, Dentist Chair, Tooth Pliers, First Aid Kit, Dentist Tools. Each with icon + heading.
7. **Success stories** — "Success **Stories**" heading, testimonial cards on light gray (#f4f5f9) bg.
8. **Testimonials** — "People **Says**" heading, carousel of review cards.
9. **Footer** — Dark gray (#333333) bg. 4 columns: About, Navigation, Recent News, Subscribe Newsletter + Follow Us. White headings, muted gray text. Copyright.

## Fidelity notes

- **Cream appointment section** — The #ece8d9 cream background on the appointment form is distinctive. It's also used on `.bg-light` sections.
- **Red accent #f23a2e** — Used sparingly: button hover border, possibly small accents. Not a dominant color.
- **Nunito Sans font** — Rounded, friendly sans-serif. 900 weight for bold emphasis in headings (e.g., "New **Smile**", "Online **Appointment**").
- **Site heading style** — Uppercase, 300 weight (light), 2rem/3rem. Bold parts use 900 weight. This creates an elegant contrast.
- **Dark hero** — Full-viewport with 0.4 opacity black overlay. White text with heavy 900 weight emphasis words.
- **Feature cards** — White bg with hover shadow effect (box-shadow: 0 5px 20px -2px rgba(0,0,0,0.1)).
- **Footer** — Simple dark gray (#333333) with white headings, muted gray (#737373) text, lighter gray (#999999) links.
- Use `picsum.photos/seed/brightoral-<n>/800/600` for placeholder images (deterministic).

## Implementation tasks

- [ ] Scaffold `apps/brightoral` from simplest existing app
- [ ] Set up package.json, vite.config.ts, index.html with Google Fonts (Nunito Sans)
- [ ] Create index.css with Tailwind + custom tokens (@theme for cream #ece8d9, red #f23a2e)
- [ ] Implement Navbar component (white bg, logo, nav links, mobile hamburger)
- [ ] Implement HeroCover component (full-viewport, dark overlay, white text with 900 weight emphasis)
- [ ] Implement ServicesIntro component (3-column feature cards with icons)
- [ ] Implement EquipmentStrip component (4 icon items)
- [ ] Implement AppointmentForm component (cream bg, uppercase heading, form with shadow)
- [ ] Implement ServicesGrid component (6-column grid, icons + headings)
- [ ] Implement SuccessStories component (testimonial cards on light gray)
- [ ] Implement TestimonialsCarousel component (review carousel)
- [ ] Implement Footer component (dark gray bg, columns, Component Dock link)
- [ ] Compose App.tsx with all sections in order
- [ ] Write tests (Vitest + RTL) for all components
- [ ] Verify 100% coverage, typecheck, lint, build
- [ ] Set public/CNAME, package name @free-react-templates/brightoral
