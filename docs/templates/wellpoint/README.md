# Wellpoint — Design Notes & Implementation Checklist

## Source Mapping

- **ColorLib source:** Medica
- **Preview URL:** https://preview.colorlib.com/theme/medica/
- **New name:** Wellpoint
- **Package:** `@free-react-templates/wellpoint`

## Section Order (top to bottom)

1. **TopHeader** — gradient bar with social icons + utility nav (FAQ, Book, Appointment, Contacts, email)
2. **Navbar** — sticky white navbar with logo, nav links (Home, About Us, Services, News, Contact), Pages dropdown, search toggle
3. **Hero** — full-width carousel, background image, overlay, heading + subheading + 2 CTAs
4. **ContactInfoStrip** — 3-column row (Hours, Emergency Phone, Location), light bg
5. **AboutUs** — two parts:
   - 3 cards row (Emergency, Doctors, Appointment form)
   - Two-column: welcome text + specialties list (left) / doctor illustration (right)
6. **Services** — gradient overlay background, heading + 6 service cards (3x2 grid) + "See All Services" button
7. **Doctors** — team section, heading + subtitle, team member cards
8. **Testimonials** — dark overlay background, heading, carousel of patient quotes with author info
9. **StatsCTA** — gradient background, 4 counters in a row (Patients, Doctors, Years, Pro Bono)
10. **Appointment** — form section with 6 fields (Name, Speciality, Phone, Doctor, Email, Date) + submit + contact info
11. **Footer** — 4 columns (Logo+text+social, Latest News, Quick Links, Contact) + copyright bar linking Component Dock

## Design Token Notes for Implementer

- Font: Montserrat (load via Google Fonts `<link>` in index.html)
- Primary blue: `#2f88fd` — use as Tailwind theme color
- Gradient: `linear-gradient(to right, #3de6fa, #243eff)` — for top header, services overlay, stats bar
- Dark navy: `#172538` — top header, appointment card bg
- Light blue: `#e0f3f9` — subtle section accents
- Page bg: `#f2f4f8`
- Text colors: `#262626` (dark), `#5f5f5f` (medium), `#7f7e7e` (light)
- Buttons: border-radius 0 (square), primary `#2f88fd` bg + white text
- Section padding: `100px 0` standard
- Use `lucide-react` for icons (replace PNG medical icons from original)
- Use `picsum.photos/seed/wellpoint-*` for all image placeholders

## Fidelity Notes

- The original has a hero carousel with 3 identical slides. Implement a single
  hero slide (no carousel needed — or a simple auto-rotating carousel if desired).
- The "Book an Appointment" form appears twice in the original (once in the
  About Us cards, once in the dedicated Appointment section). Implement both.
- The top header gradient matches the services section and CTA bar gradient.
- Doctor profile cards should have circular avatars and hover effects.
- The testimonials carousel should auto-rotate with dot indicators.
- The stats counters should animate on scroll into view (use a counter animation).
- Footer social icons use Font Awesome in original — replace with lucide-react.
