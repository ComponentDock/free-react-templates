# Studium — Implementation Notes

Source: ColorLib Studylab (https://colorlib.com/wp/template/studylab/)
Preview: https://preview.colorlib.com/theme/studylab/
New name: studium (apps/studium, @free-react-templates/studium)

## Section order (top to bottom)

1. **Navbar** — dark bg, brand "Studium", links: Home, About, Course, Instructor, Blog, Contact
2. **Hero** — full-height bg image, left text + CTAs, right registration form card
3. **Categories** — "Browse Online Course Category", 6 circular thumbnails, "See All Courses" button
4. **Courses** — "Pick Your Course", grid of course cards, "See All Courses" button
5. **Features** — "Learn Anything You Want Today", 4 icon+title+desc cards
6. **Testimonials** — "What Are Students Says", student review cards with avatars
7. **About** — "We Are StudyLab An Online Learning Center", description + stats
8. **Services** — 4 benefit cards (Top Quality Content, Skilled Instructor, World Class Quiz, Get Certified)
9. **Blog** — "Recent Post", 3 blog post cards with "Read more" links
10. **Footer** — dark bg, 4 columns (About, Help Desk, Recent Courses, Questions/newsletter), Component Dock link

## Fidelity notes

- Hero: background image with semi-transparent overlay; registration form is a white card with rounded corners on the right side. "Register Now" heading is magenta (#ce4be8). Submit button is blue (#0062cc). "Sign In" link is blue.
- Categories: circles are round thumbnails with white text overlay on dark gradient. Each shows "100+ courses" below the category name.
- Buttons: pill-shaped (border-radius 40px). Primary = blue (#0062cc), secondary = orange (#fc9927), outline variants.
- Sections alternate white and light backgrounds (#f9faff / #f7f7f7).
- Font: Poppins throughout (headings + body).
- Footer: dark (#1a1a1a) background, four widget columns. Copyright bar at bottom.
- All images use picsum.photos placeholders with deterministic seeds.
- No ColorLib references in app code.

## Implementation tasks

- [ ] Scaffold app folder (copy simplest existing app, rename package)
- [ ] Set up index.css with Tailwind theme tokens (brand colors, Poppins font)
- [ ] Build Navbar component (dark theme, brand, nav links)
- [ ] Build Hero component (bg image, overlay, text+CTAs, registration form)
- [ ] Build Categories component (circular thumbnails, course counts)
- [ ] Build CourseCards component (grid, card items)
- [ ] Build Features component (4 icon+title+desc cards)
- [ ] Build Testimonials component (student review cards)
- [ ] Build About component (heading, description)
- [ ] Build Services component (4 benefit cards)
- [ ] Build Blog component (3 post cards)
- [ ] Build Footer component (4 columns, dark bg, Component Dock link)
- [ ] Compose App.tsx with all sections in order
- [ ] Write tests for each component (100% coverage)
- [ ] Run verify-app.sh and ensure all checks pass
- [ ] Update TEMPLATES.md status
