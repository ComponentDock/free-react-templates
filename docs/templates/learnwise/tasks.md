# Learnwise — Implementation Notes

Source: ColorLib "Clever" — https://preview.colorlib.com/theme/clever/

## Structure order (top to bottom)

1. TopHeader — contact bar (phone, email) + social icons
2. Navbar — logo, nav links (Home, Pages dropdown, Courses, Instructors, Blog, Contact), search, register/login
3. Hero — parallax bg image + dark overlay + "Let's Study Together" h2 + CTA button
4. CoolFacts — 4-column counter grid (Success Stories: 1912, Dedicated Tutors: 123, Scheduled Events: 89, Available Courses: 56)
5. PopularCourses — 3-column course cards (image, title, author•category, description, price)
6. BestTutors — carousel of tutor slides (photo, name, role, bio, social icons)
7. RegisterNow — split: left form (name, email, select, textarea, submit) | right CTA text with light blue overlay
8. UpcomingEvents — 3-column event cards (image+date badge, title, time, fee)
9. Blog — 2-column blog cards (image, headline, author•category, excerpt)
10. Footer — top: logo + copyright | bottom: contact info + social links (Component Dock)

## Fidelity notes

- Hero is 400px tall with parallax (background-attachment: fixed) + overlay
- Cool facts icons: use lucide-react equivalents (BookOpen, Star, Calendar, Globe)
- Course cards: white bg, image top, content below, price tag styled as CTA
- Tutors: implement as horizontal scroll carousel (no owl-carousel dependency)
- Register Now: left form + right text side by side; bg has light blue tint overlay
- Events: image with absolute-positioned date badge (blue bg `#3762f0`), fee as outlined button
- Blog: 2-column layout, image top, content below with headline link
- Footer: dark bg `#252525` top, `#1f1f1f` bottom; must include Component Dock link
- All interactive elements need focus-visible rings for accessibility
- Use picsum.photos for all placeholder images (seeded deterministically)
