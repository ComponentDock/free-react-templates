# MedLink — Implementation Notes

Source: ColorLib "Medical 2" (slug: `medical-2`)
Preview: https://preview.colorlib.com/theme/medical-2/ (404 — screenshot only)
Category: Healthcare / Medical

## Structure order

1. **TopBar** — dark bar, phone + email left, green "BOOK APPOINTMENT" right
2. **Navbar** — white, horizontal, green cross logo + "MedLink" + nav links
3. **Hero** — full-width bg image, dark overlay (~55%), centered white text + green CTA
4. **ServicingHours** — left column of split section, heading + paragraph + schedule list
5. **AppointmentForm** — right column of split section, "Book an Appointment" form
6. **(Below fold, infer from nav)**: Features, Doctors, Departments, Blog sections
7. **Footer** — multi-column with nav links, Component Dock attribution

## Section-by-section fidelity notes

### TopBar
- Background: dark charcoal (#333)
- Left side: phone icon + number, email icon + address
- Right side: green (#76b900) "BOOK APPOINTMENT" button, rounded corners
- Height: ~40px, text small (12-14px)

### Navbar
- White background, full width
- Left: green cross/plus SVG icon + "MedLink" text (bold)
- Right: horizontal nav links (Home, About, Features, Doctors, Departments, Blog, Pages, Contact)
- "Pages" has a dropdown indicator
- Sticky or fixed on scroll (verify with implementation)

### Hero
- Full-width, height ~500-600px
- Background: medical image (doctor examining patient with stethoscope)
- Dark overlay (rgba(0,0,0,0.55))
- Centered content: large white heading, smaller white subtext, green "GET STARTED" button
- Button: green bg, white text, rounded corners (~4px)

### Split Section (Servicing Hours + Appointment Form)
- Two-column layout (50/50 or 40/60)
- Left: "Servicing Hours" heading (h2), paragraph, schedule list (days + times)
- Right: "Book an Appointment" heading (h2), form with 6 fields + submit
- Form fields: Patient Name (text), Phone (text), Email Address (email), Date of Birth (date), Disease Type (select dropdown), Appointment Date (date)
- White card/section background

### Footer
- Multi-column layout with nav links
- Component Dock attribution link required

## Design tokens for Tailwind @theme

```
--color-brand: #76b900;
--color-topbar: #333333;
--color-hero-overlay: rgba(0,0,0,0.55);
--font-family-heading: 'Poppins', sans-serif;
--font-family-body: 'Poppins', sans-serif;
--radius-button: 4px;
```

## Placeholder assets

- Hero bg: `https://picsum.photos/seed/medlink-hero/1920/600`
- Doctors section: `https://picsum.photos/seed/medlink-doc-1/300/300`
- Feature icons: `lucide-react` (Stethoscope, Heart, Clock, etc.)

## Notes for implementer

- Screenshot is truncated at the split section. Infer remaining sections from nav links (Features, Doctors, Departments, Blog) using typical medical template patterns.
- Green brand color is approximate from screenshot; adjust if CSS tokens become available.
- Form should use controlled inputs with basic validation (required fields).
- Mobile: hamburger nav, stacked columns for the split section.
