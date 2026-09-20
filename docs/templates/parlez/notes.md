# Parlez — Implementation Notes

Source: ColorLib Lingua → https://preview.colorlib.com/theme/lingua/
New name: parlez (French "speak")
Category: Language School / Education

## Section Build Order

1. **Header** — TopBar (phone, language selector dropdown, social icons) + MainNav (6 links) + SearchInput + Hamburger (mobile)
2. **Hero** — Full-width background image, centered h1 + CTA button
3. **LanguageSlider** — Horizontal scrollable row of flag+name items (9 languages). Use a simple CSS horizontal scroll or a lightweight carousel. Each item: flag image + language name text.
4. **Courses** — 3-column grid. Each card: image top, body with title, instructor link, language tag, description, footer with student count, rating, price/free badge.
5. **Instructors** — 3-column grid. Each card: circular image container, name link, title, bio paragraph, social icon row. Warm brown (#937c6f) background overlay on section.
6. **Register** — Split 2-col: left = form (Name, Email, Phone, Site + submit), right = countdown timer (days/hours/minutes/seconds). Timer can be static display (no real countdown needed for a template).
7. **Events** — 3-column grid. Each card: image with date badge overlay (day + month), body with title link + "Free" tag.
8. **Blog** — Split 2-col: left = "From Our Blog" heading + description + 6 category grid (3x2), right = featured post (bg image, category label, title, excerpt, read more link).
9. **Footer** — 4-col: newsletter (logo + email + arrow button), About Us links, Help & Support links, Privacy & Terms links. Copyright bar below.

## Fidelity Notes

- **Color palette:** Primary brand is indigo #2e21df. The warm brown #937c6f is used as an overlay on the instructors section. White backgrounds for most content sections; #f1f1f1 for alternating sections.
- **Typography:** Poppins for body/headings, Montserrat for buttons and small labels. Google Fonts via `<link>`.
- **Buttons:** Small (12px Montserrat, 600 weight), indigo bg, white text, 3px border-radius. Hero button is different — appears as outlined/transparent with text.
- **Language slider:** Originally OwlCarousel. Replace with a CSS horizontal scroll or simple flex row with overflow-x. Flag images are SVGs — use placeholder circles with country flag emoji or simple colored circles.
- **Instructor images:** Circular with a subtle border/container. Use picsum with seed for consistency.
- **Event date badge:** Overlaid on the event image, centered, showing day number and month abbreviation.
- **Register section:** Split layout with form on left, countdown on right. The countdown is decorative — use static placeholder values (00 days, 00 hours, etc.) or a simple CSS-only animation.
- **Blog categories:** 6 items in a 3x2 grid of image + title overlays.
- **Footer newsletter:** Logo text + email input + arrow submit button.
- **No ColorLib references** in app code — provenance lives only in spec + TEMPLATES.md.

## Component Map

| Section | Component | Notes |
|---|---|---|
| Header | `Header.tsx` | TopBar + MainNav + Search + Hamburger |
| Hero | `Hero.tsx` | Background image, h1, CTA |
| Language Slider | `LanguageSlider.tsx` | Horizontal scroll, 9 flag items |
| Courses | `Courses.tsx` + `CourseCard.tsx` | 3-col grid, card sub-component |
| Instructors | `Instructors.tsx` + `InstructorCard.tsx` | 3-col grid, circular images |
| Register | `Register.tsx` | Split: form + timer |
| Events | `Events.tsx` + `EventCard.tsx` | 3-col grid, date badge |
| Blog | `Blog.tsx` | Split: categories + featured |
| Footer | `Footer.tsx` | 4-col + copyright bar |

## Placeholder Assets

- Hero background: `https://picsum.photos/seed/parlez-hero/1920/1080`
- Course images: `https://picsum.photos/seed/parlez-course-1/400/250` (etc.)
- Instructor images: `https://picsum.photos/seed/parlez-instructor-1/300/300` (etc.)
- Event images: `https://picsum.photos/seed/parlez-event-1/400/250` (etc.)
- Blog images: `https://picsum.photos/seed/parlez-blog-1/400/250` (etc.)
- Language flags: Use emoji flags or simple colored circles (no external SVG assets)
