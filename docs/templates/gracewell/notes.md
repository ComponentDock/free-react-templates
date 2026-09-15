# GraceWell — Implementation Notes

## Source mapping

- **ColorLib source:** Kindity (kindity)
- **Preview URL:** https://preview.colorlib.com/theme/kindity/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/kindity-free-template.jpg

## Section order (top to bottom)

1. **Navbar** — Fixed white, logo left, nav links center/right, "Donate Now" CTA button (brand pink `#ea2c58`)
2. **Hero Banner** — Full-width parallax image with dark overlay, centered heading + CTA
3. **Donation Stats** — 3 stat cards in a row (yellow, pink, green accents) with icons and values
4. **Welcome** — Two-column: text left (heading + paragraph + 3 counters), image right
5. **Causes** — "Our Major Causes" heading, 3 image cards with hover overlay effect
6. **Features** — Dark navy (`#04091e`) background, white text, feature grid
7. **Events** — Light background, event items with date/title/description
8. **Testimonials** — Light bg (`#f9f9ff`), quote cards with client photos
9. **Clients Logos** — Logo row/carousel of partner logos
10. **Footer** — Dark navy, 4-column layout (about, links, newsletter, social + Instagram feed), copyright

## Design token notes for implementer

- Primary CTA: bg `#ea2c58`, text white, uppercase, Poppins 600, sharp corners (border-radius 0)
- Secondary button: bg `#f9f9ff`, border `#eee`, text `#777`, Poppins 500
- Dark sections: `#04091e` background
- Light sections: `#f9f9ff` background
- Heading font: Poppins 600–700, color `#04091e`
- Body font: Poppins 400–500, color `#777777`
- Section vertical padding: ~120px (use Tailwind `py-24` or `py-32`)
- Banner uses `background-attachment: fixed` for parallax effect
- Stats cards have colored left borders or accent backgrounds (yellow, pink, green)

## Component breakdown (suggested)

- `Navbar.tsx` — fixed position, logo, nav links, donate button
- `HeroBanner.tsx` — parallax bg, overlay, heading, CTA
- `DonationStats.tsx` — 3 stat cards (map over array)
- `WelcomeSection.tsx` — two-column, stats counters
- `CausesSection.tsx` — heading + 3 image cards with hover
- `FeaturesSection.tsx` — dark bg, feature items
- `EventsSection.tsx` — event listings
- `TestimonialsSection.tsx` — testimonial carousel/cards
- `ClientsLogos.tsx` — logo row
- `Footer.tsx` — multi-column dark footer

## Fidelity notes

- Match section order exactly as listed above
- Banner must have parallax (CSS `background-attachment: fixed`)
- Donation stats cards must have distinct color accents per card
- Causes cards need hover overlay effect (icon appears on hover)
- Dark sections (#04091e) for Features and Footer
- Light sections (#f9f9ff) for Causes and Testimonials
- All buttons use Poppins font, uppercase for primary CTA
- Footer must include newsletter signup input
- Replace ColorLib references with Component Dock branding
- Use placeholder images from picsum.photos for banner, welcome, causes, testimonials
