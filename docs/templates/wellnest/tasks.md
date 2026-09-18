# Wellnest — Implementation Notes

Source: ColorLib Drcare (https://colorlib.com/wp/template/drcare/)
Preview: https://preview.colorlib.com/theme/drcare/

## Section order

1. TopBar — contact info strip
2. Navbar — dark bg, logo + 6 nav links
3. HeroSlider — 2-slide carousel with dark overlay
4. Services — 4-column card grid
5. About — split layout with text + stats
6. Stats — counter section with parallax bg
7. Departments — tabbed carousel, 5+ department tabs
8. ConsultationCTA — banner CTA
9. ClinicDepartments — icon list per department
10. Doctors — 4 doctor cards with social links
11. Testimonials — quotes on light bg
12. ConsultationForm — CTA form
13. Facts — counter section with bg image
14. Pricing — 4-tier card grid
15. Blog — 3 post cards
16. Footer — 6-column dark bg footer

## Fidelity notes

- **Navbar:** Bootstrap-style dark bg (#000). Logo on left, nav links right. Hamburger on mobile.
- **HeroSlider:** Use a simple CSS-based slider or Swiper.js (avoid owl-carousel dependency). Two slides with dark overlay (rgba(0,0,0,0.5)). Large heading + subtext + CTA button (pill-shaped, #2f89fc).
- **Services:** 4 equal columns, each with a lucide-react icon, h3 title, and short paragraph. White card bg on light gray section.
- **About:** Two-column layout. Left: paragraph text. Right: image or stat block.
- **Stats:** Full-width parallax bg (picsum.photos), 4 counters (patients, doctors, staff, awards) with orange (#ff8000) number color.
- **Departments:** Horizontal tabs. 5 tabs (Neurological, Surgical, Dental, Ophthalmology, Cardiology). Each tab content: 4 sub-items in a 2x2 grid.
- **Doctors:** 4 cards. Each: image (picsum), h3 name, specialty text, row of social icon links.
- **Testimonials:** bg-light section, quote blocks with text.
- **Pricing:** 4 cards (Basic, Standard, Premium, Platinum). Standard is highlighted/featured.
- **Blog:** 3 cards with image, date, title, short excerpt.
- **Footer:** Dark bg (#000), 6 columns. Last column is a subscribe form. Must include "Component Dock" attribution link.

## Component mapping

- TopBar.tsx
- Navbar.tsx (with mobile toggle state)
- HeroSlider.tsx (CSS transitions or simple state-based slider)
- Services.tsx (4 ServiceCard children)
- About.tsx
- Stats.tsx (counter animation on scroll)
- Departments.tsx (tab state management)
- ConsultationCTA.tsx
- Doctors.tsx (4 DoctorCard children)
- Testimonials.tsx
- Pricing.tsx (4 PricingCard children)
- Blog.tsx (3 BlogCard children)
- Footer.tsx (6-column grid)
