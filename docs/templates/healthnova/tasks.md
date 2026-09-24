# HealthNova — Implementation Notes

**Source**: ColorLib "Medi" (slug: `medi`)
**Preview**: https://preview.colorlib.com/theme/medi/
**New name**: `healthnova`
**Spec**: `openspec/specs/template-healthnova/spec.md`

## Section order (top to bottom)

1. **Navbar** — Sticky, logo left, nav links (Home, About, Blog, Pages, Contact) center/right, "Book Appointment" button far right. Dark navy bg `#002278`.

2. **Hero Slider** — Full-width carousel with background image + overlay gradient (`rgba(0,28,100,0.8)` → `rgba(0,53,187,0.3)`). Subtitle "the best medical center", heading "Bringing health to life for the whole family", CTA "Discover More" (transparent button, white border, white text).

3. **Welcome Section** — 2-column split. Left: decorative image with `#e0fbff` accent shape behind it, rounded corners (5px). Right: heading "Welcome To Modern Clinic", body paragraph, 3 check-icon bullet points, "About us" CTA button (gradient `#24c0f1 → #4c9afe`).

4. **Departments** — Background image section. Title "Departments" + "Learn more" link. 6 tab icons (Dentistry, Cardiology, ENT Specialists, Astrology, Neuroanatomy, Blood Screening). Active tab content: image left, text right, "Make An Appointment" CTA (white bg, blue text).

5. **Our Doctors** — White bg. Title "Our Doctors". 3-column grid of doctor cards: portrait image, name ("Jhon Smith"), specialty ("Dentist"), 3 social icons (Facebook, LinkedIn, Twitter).

6. **Book Appointment** — Background image section. Heading "Book an Appointment" with "Appointment" in accent color. Form: doctor select dropdown, name, age, phone, email, date picker, time picker, "Make an Appointment" submit button (gradient `#0181f5 → #5db2ff`).

7. **Quality Health** — White bg. Title "Quality Health". 3-column feature cards: icon + title + description. Items: Health Consultation, Find Health, Search Doctor.

8. **Emergency Contact** — Split layout. Left half: cyan-blue bg (`rgba(0,171,231,0.8)`), "We are here for you" + "Book Appointment" CTA (white bg). Right half: phone icon + number "+1-465 4545".

9. **Footer** — Dark bg `#152538`. 3-column: logo + description + social icons | "Our Departments" link list | "We're Available" hours table (Mon-Fri 8-18, Sat 8-18, Sun 8-13).

10. **Copyright** — Bottom bar, text color `#b8bdc3`, link to Component Dock.

## Fidelity notes

- **Tabs in Departments**: Use React state for tab switching (not Bootstrap JS). Each tab shows the same content structure (image + text + CTA) with different department name.
- **Hero carousel**: Can be simplified to a single slide (no carousel JS needed) or use a simple auto-rotating carousel.
- **Date/time pickers**: Use native HTML inputs or a lightweight date library. Avoid heavy dependencies.
- **Nice select dropdown**: Use a styled `<select>` or native dropdown. No jQuery plugin needed.
- **Form validation**: Add basic client-side validation (required fields, email format).
- **Emergency section**: The split background is achieved with `::before` and `::after` pseudo-elements in the original. In Tailwind, use a flex container with two halves, each with its own background color.
- **Placeholder images**: Use `https://picsum.photos/seed/healthnova-<n>/<w>/<h>` for all images (hero bg, welcome photo, department images, doctor portraits, appointment bg).
- **Icons**: Use `lucide-react` for social icons, checkmarks, phone, etc. Flaticon icons in original → map to closest lucide equivalents.
