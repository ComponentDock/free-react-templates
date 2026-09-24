# MedCore — Implementation Notes

**Source:** ColorLib Medica (https://preview.colorlib.com/theme/medica/)
**New name:** medcore
**Category:** Health & Medical

## Section-by-Section Design Notes

### 1. Header
- **Top bar:** Full-width gradient background (linear-gradient right: #3de6fa → #243eff). Contains social icons (left) and utility nav links (right). Dark text on gradient. Padding: ~12px vertical.
- **Main nav:** White background, sticky on scroll. Logo left, menu items center/right, "Make an Appointment" solid blue (#2f88fd) pill button right. Menu has "Pages" dropdown.
- **Component structure:** `Navbar.tsx` (top bar + main nav combined, or separate TopBar + Navbar)

### 2. Hero
- **Layout:** Full-width section with background image (use picsum placeholder). Height ~800px.
- **Content:** Left-aligned: h2 "We provide top medical services" (white, bold, large), h5 subtitle "More than 30 professionals" (white, lighter weight), two CTA buttons in a flex row.
- **Buttons:** Solid pill (#2f88fd bg, white text) + Outline pill (transparent bg, white border, white text). Both pill-shaped.
- **Implementation:** Single static slide (no carousel needed — one hero is sufficient for the template recreation).

### 3. Contact Info
- **Layout:** 3-column grid, light gray (#f2f4f8) background. Each item: icon (use lucide-react Clock, Mail, MapPin) + text block.
- **Content:** Hours, phone/email, address.
- **Component:** `ContactInfo.tsx`

### 4. About Us
- **Part A — 3 Cards:** Row of 3 cards. Emergency card (dark background #172538, white text, phone number). Doctors card (white bg, text). Appointment card (gradient background, mini form with 3 inputs + submit).
- **Part B — Welcome Text:** 7/5 column split. Left: heading with blue span, paragraph, 2-column specialty list (8 items), outline button. Right: doctor illustration (use picsum).
- **Component:** `AboutUs.tsx` with sub-components or sections.

### 5. Services
- **Layout:** 3-column grid (6 items). Background image with gradient overlay (opacity 0.8).
- **Each service:** Icon (use lucide-react icons), h5 title, paragraph description.
- **Heading:** White, centered, with small icon above.
- **CTA:** "See All Services" solid button at bottom center.
- **Component:** `Services.tsx`

### 6. Doctors
- **Layout:** 4-column grid. White background. Section heading centered.
- **Each doctor card:** Photo (rounded or square), h5 name, h6 specialty, 3 social icon links (Twitter, Facebook, LinkedIn — use lucide-react).
- **Component:** `Doctors.tsx`

### 7. Testimonials
- **Layout:** Carousel/slider. Background image with dark overlay (opacity ~0.8).
- **Each slide:** Large quote text (white), author info: photo + name + "Pacient" label.
- **Heading:** White, centered, with small icon above.
- **Implementation:** Simple static testimonial (or carousel if desired, but static is fine for recreation).
- **Component:** `Testimonials.tsx`

### 8. CTA / Counters
- **Layout:** 4-column row on gradient background (linear-gradient right: #3de6fa → #243eff).
- **Each counter:** Large number (use counter animation or static), h6 label.
- **Component:** `CTACounters.tsx`

### 9. Appointment
- **Layout:** 2-column split. Left: form on blue gradient card. Right: medical illustration.
- **Form fields:** Name (text), Speciality (select dropdown), Phone (text), Doctor (select dropdown), Email (email), Date (date picker), Submit button (solid pill).
- **Component:** `Appointment.tsx`

### 10. Partners
- **Layout:** Flex row of 5 partner logos, space-between. Light gray (#f2f4f8) background.
- **Component:** `Partners.tsx` — use placeholder SVGs or text logos.

### 11. Footer
- **Main footer:** 4-column grid on white/light bg. Col 1: logo + description + social icons. Col 2: "Latest News" — 3 mini blog posts (thumbnail + title + date). Col 3: "Useful Links" — list of 8 links. Col 4: "Contact us" — hours, address, phone/email with icons.
- **Bottom bar:** Copyright text left, nav links right (Home, About Us, Doctors, Services, News, Contact).
- **Mandatory:** Footer must link to Component Dock.
- **Component:** `Footer.tsx`

## Implementation Order

1. App shell + theme tokens (index.css with @theme)
2. Navbar (top bar + main nav)
3. Hero
4. ContactInfo
5. AboutUs (cards + welcome text)
6. Services
7. Doctors
8. Testimonials
9. CTACounters
10. Appointment
11. Partners
12. Footer
13. Tests (100% coverage)

## Key Fidelity Notes

- The gradient is the signature design element — must match exactly (#3de6fa → #243eff).
- Buttons are pill-shaped (border-radius: 50% or 9999px in Tailwind).
- Cards in About Us section have sharp corners (no border-radius).
- Services and Testimonials use background images with gradient overlays.
- Font is Montserrat — load from Google Fonts in index.html.
- Dark navy (#172538) is used only in the top header bar and the emergency card.
