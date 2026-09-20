# Rostrum — Implementation TODO

Source: ColorLib Eventalk (https://preview.colorlib.com/theme/eventalk/)
New name: rostrum
Category: Event / Conference

## Section implementation order

1. **Navbar** — Dark bg, brand "Rostrum" (span accent), nav links, "Buy Ticket" CTA
2. **Hero** — Full-height parallax bg, overlay, headline + date + countdown timer
3. **Services** — 4-column: Venue, Transport, Hotel, Restaurant (icon + heading + description), light bg
4. **Counter / Fun Facts** — Split: image left, 4 stat cards right (30 Speakers, 200 Sponsor, 2500 Seats, 40 Topics)
5. **Speakers** — Carousel: speaker cards with photo, name, role, social icons
6. **Schedule** — Tabbed days (01–04), each with session rows (speaker img, time, title, desc, name)
7. **Testimonials** — Carousel: avatar + quote icon + text + name + role
8. **Pricing** — 3 cards: Personal $85, Small Team $200, Family Pack $499 + feature list + CTA
9. **Blog** — 3 cards: date overlay (day/month/year), title, excerpt
10. **Newsletter** — Parallax bg, heading + description + email form
11. **Gallery** — 4-col grid images with Instagram icon overlay on hover
12. **Footer** — Dark bg, 4-col: brand + social, Useful Links, Privacy, Contact + copyright + Component Dock link

## Design notes

- **Font**: Work Sans (Google Fonts, weights 400–900)
- **Brand color**: #78d5ef (sky blue) — buttons, links, accents
- **Subscribe button**: #3847ff (indigo)
- **Dark sections**: Bootstrap dark (#343a40) for navbar + footer
- **Light sections**: #f8f9fa for services, schedule, pricing
- **Button style**: Rectangular (no border-radius) for primary buttons
- **Subscribe form**: White input (5px left-radius) + indigo submit (5px right-radius)
- **Section padding**: 7em 0
- **Heading style**: 40px bold, with subheading 18px uppercase
- **Gallery items**: 350px height
- **Timer**: Countdown to event date (days, hours, minutes, seconds)
- **Schedule**: Tab pills for day selection, session rows with speaker images
- **All images**: Use picsum.photos/seed/rostrum-N/W/H for placeholders
- **Icons**: lucide-react equivalents for flaticon icons

## Fidelity notes

- Hero parallax is key visual — use CSS background-attachment: fixed or Tailwind bg-fixed
- Countdown timer needs client-side JS (useState + useEffect with setInterval)
- Schedule tabs need React state for day selection (no jQuery needed)
- Speaker/testimonial carousels — consider simple CSS scroll-snap or lightweight carousel
- Gallery hover overlay: absolute positioned icon on image cards
- Subscribe form: inline flex layout with input + button side by side
- Counter stats: animated numbers on scroll (intersection observer)
