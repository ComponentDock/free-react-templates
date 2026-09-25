# Curelink — tasks

## Implementation checklist

- [x] Spec written (`openspec/specs/template-curelink/spec.md`)
- [x] Screenshot analyzed
- [x] Design tokens extracted (primary #167ce9, purple #39345a, teal #79efb4, light blue #78d5ef, Work Sans)
- [x] App scaffold created (`apps/curelink/`)
- [x] Tests written (100% coverage)
- [x] Components implemented
- [x] Per-app gate passed
- [x] PR created and merged
- [x] Bookkeeping (TEMPLATES.md [x], surge URL, homepage, readme:status)

## Sections (10)

1. Navbar — dark purple mobile, white desktop, pharmacy icon + Curelink wordmark, nav links, Make an Appointment CTA
2. Hero — bg image + blue overlay, white headline "The most valuable thing is your Health" + subtitle
3. Departments — vertical pill tabs (Cardiology, Neurology, Diagnostic, Dental, Ophthalmology, Emergency), tab content panels
4. Services BG — bg image, 2x2 grid of service cards
5. Doctors — 4 flip cards with photo/name/specialty on front, quote on back
6. Counter — bg image, 4 stats (60 Hospital, 200 Doctors, 100 Clinics, 200 Reviews)
7. Testimonials — carousel of circular user photos + quotes
8. Blog — 2-column grid of 4 blog cards
9. Newsletter — blue→teal diagonal gradient, email form
10. Footer — dark purple, 4 widget columns, Component Dock link

## Design notes

- Source: ColorLib "Remedic" (https://colorlib.com/wp/template/remedic/)
- Preview: https://preview.colorlib.com/theme/remedic/
- Font: Work Sans (300-700)
- Bootstrap 4 grid (recreated with Tailwind)
- Flip cards use CSS 3D transform (perspective + rotateY)
- Newsletter gradient: blue #167ce9 → teal #79efb4 diagonal
- Hero overlay: blue #167ce9 opacity 0.7
