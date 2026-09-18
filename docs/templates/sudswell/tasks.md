# Sudswell — Implementation Tasks & Design Notes

## Source
- ColorLib: "Cleanex" — https://colorlib.com/wp/template/cleanex/
- Preview: https://preview.colorlib.com/theme/cleanex/
- Stack: Bootstrap 4 + jQuery + Font Awesome 4 + Flaticon icons

## Component Structure (section order)

| # | Component | Notes |
|---|---|---|
| 1 | TopBar | Yellow `#fedd32` bg, email + phone + hours + social icons. Hidden mobile. |
| 2 | Navbar | Transparent overlay → white on scroll. Logo + 6 nav links + CTA button. |
| 3 | Hero | Full-height bg image, overlay, heading + subtext + CTA. |
| 4 | AppointmentForm | Left: form (6 fields + submit). Right: about text. |
| 5 | WhyChooseUs | 4 feature cards with icons. |
| 6 | Counter | Bg image + overlay, 4 animated stat counters. |
| 7 | IndustriesWeServe | Left: image. Right: 8-item checklist. |
| 8 | OurServices | 6 service cards with images, titles, prices, hover arrow. |
| 9 | HowItWorks | 3 steps on dark bg image, numbered icons. |
| 10 | Testimonials | Carousel of 5 cards with avatars. |
| 11 | Pricing | 4 plans (Basic/Standard/Premium/Ultimate), Premium active. |
| 12 | CTA | Bg image, heading + phone/email buttons. |
| 13 | Blog | 3 post cards with images, meta, title, excerpt. |
| 14 | Footer | Logo + recent posts + explore links + contact info + copyright. |

## Design Token Notes

- **Primary blue `#225ae1`**: links, btn-primary, service icons, navbar active.
- **Secondary yellow `#fedd32`**: top bar, btn-secondary, step badges.
- **Heading navy `#161655`**: all headings, navbar brand, nav links.
- **Body gray `#999`**: paragraph text.
- **Font**: Roboto (Google Fonts), weights 300/400/500/700.
- **Buttons**: 4px radius, box-shadow `0px 24px 36px -11px rgba(0,0,0,0.09)`, 13px font, letter-spacing 1px.
- **Cards**: 5px radius, subtle box-shadow, hover lift.
- **Section backgrounds**: white (default), `#f4f5f0` (bg-light for testimonials, blog), bg images with dark overlay (hero, counter, how-it-works, CTA, footer).

## Implementation Notes

1. **Images**: Use `https://picsum.photos/seed/sudswell-<n>/<w>/<h>` for all placeholder images. Deterministic seeds per slot.
2. **Icons**: Use `lucide-react` instead of Font Awesome/Flaticon. Map icons:
   - Staff → `Users`, Equipment → `Wrench`, Warranty → `ShieldCheck`, Fast → `Zap`
   - Steps: Checklist → `ClipboardList`, Calendar → `Calendar`, Clean → `Sparkles`
   - Counter: Projects → `Briefcase`, Employees → `Users`, Clients → `Star`, Awards → `Award`
3. **Testimonials**: Use a simple CSS-only carousel or manual state, not Owl Carousel.
4. **Counter**: Implement animated counting on scroll into view using `IntersectionObserver`.
5. **Navbar scroll**: Track scroll position, toggle fixed + white bg class.
6. **Form**: Static form (no real submission). Include date/time inputs as native HTML.
7. **Footer**: Replace Colorlib attribution with Component Dock link.
8. **Pricing active state**: Premium plan gets highlighted border/background.

## Fidelity Priorities

- Section order: 1:1 match
- Color palette: exact match (#225ae1, #fedd32, #161655)
- Layout: 12-column grid, matching column splits
- Button styling: match radius, shadow, hover behavior
- Top bar: yellow, hidden mobile
- Hero: full-height, background image, overlay
- Service cards: hover lift + shadow increase
- Pricing: 4 columns, active state on Premium
