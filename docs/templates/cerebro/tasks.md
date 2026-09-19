# Cerebro — Prep Notes

Source: ColorLib "Clever" (https://preview.colorlib.com/theme/clever/)
New name: Cerebro
App path: apps/cerebro
Package: @free-react-templates/cerebro

## Section order (top to bottom)

1. TopHeader — slim bar: phone + email left, social icons right
2. Navbar — logo, nav links (Home, Pages, Courses, Instructors, Blog, Contact),
   search toggle, Register/Login buttons; hamburger on mobile
3. Hero — full-width bg image + dark overlay, centered headline, blue CTA button
4. CoolFacts — 4-column stat cards (icon, number, label)
5. PopularCourses — 3 course cards (image, title, meta, desc, seats, rating, price)
6. BestTutors — horizontal carousel/grid of tutor cards (portrait, name, role, bio, social)
7. RegisterNow — 2-column: contact form left, countdown text right; blue overlay bg
8. UpcomingEvents — 3 event cards (image, date badge, title, time, fee)
9. Blog — 2 blog cards (image, headline, meta, excerpt)
10. Footer — dark two-part: top (logo + copyright), bottom (contact + social + Component Dock link)

## Design tokens (from CSS extraction)

| Token              | Value              | Notes                              |
|--------------------|--------------------|------------------------------------|
| brand-blue         | #3762f0            | Buttons, links, accents            |
| brand-blue-hover   | #2c56df            | Hover state                        |
| accent-yellow      | #e3d21b            | Event date badges, star ratings    |
| body-text          | #5a5a5a            | Paragraphs (Raleway)               |
| headings           | rgba(0,0,0,0.8)    | All headings (Open Sans bold)      |
| bg-light           | #f7f7f7            | Section backgrounds                |
| register-overlay   | rgba(214,223,251,0.7) | Blue tint over texture bg      |
| footer-top         | #252525            | Dark background                    |
| footer-bottom      | #1f1f1f            | Darker strip                       |
| footer-border      | #4c4c4c            | Dividers                           |
| border-radius      | 6px                | Buttons, cards, inputs             |
| font-heading       | Open Sans          | Headings, nav, UI elements         |
| font-body          | Raleway            | Paragraph text                     |

## Fidelity notes

- Original uses a "clever-main-menu" custom nav (classy-nav). Recreate with
  standard responsive nav pattern.
- Hero bg is a full-bleed image with `bg-overlay-2by5` class (dark gradient).
  Use picsum.photos seed + overlay div.
- CoolFacts section uses counter animation (JS). Use static numbers or
  a simple count-up effect.
- PopularCourses has a subtle texture background (`texture.png`). Skip texture,
  use bg-light instead.
- BestTutors uses Owl Carousel. Replace with a CSS grid or flex layout.
  On desktop show 3-4 cards; on mobile stack or horizontal scroll.
- RegisterNow has a two-column layout with a blue-tinted overlay on texture bg.
  Left: white card with form. Right: text + countdown.
  Use bg-light with a blue-tinted overlay div.
- UpcomingEvents cards have a date badge overlay on the image (yellow bg).
  Use absolute positioning for the badge.
- Footer has two tiers: dark #252525 top (logo + copyright), darker #1f1f1f
  bottom (contact + social). Add "Made with Component Dock" link.
- All images: use picsum.photos seeded placeholders
  (e.g. `https://picsum.photos/seed/cerebro-course1/600/400`).
- Icons: use lucide-react (BookOpen, Users, Calendar, Star, etc.)

## Implementation checklist

- [ ] Create apps/cerebro workspace (copy simplest existing app)
- [ ] Set up Tailwind theme tokens in index.css (@theme block)
- [ ] Build TopHeader component
- [ ] Build Navbar component (responsive with mobile toggle)
- [ ] Build Hero component
- [ ] Build CoolFacts component (4 stat cards)
- [ ] Build PopularCourses component (3 course cards)
- [ ] Build BestTutors component (tutor cards)
- [ ] Build RegisterNow component (form + countdown text)
- [ ] Build UpcomingEvents component (3 event cards)
- [ ] Build Blog component (2 blog cards)
- [ ] Build Footer component (two-tier dark footer)
- [ ] Compose App.tsx with all sections
- [ ] Write tests for every component
- [ ] Run verify-app.sh and confirm 100% coverage
