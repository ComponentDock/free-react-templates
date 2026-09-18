# EduHaven — Implementation Tasks & Design Notes

Source: ColorLib "Education Wordpress Themes" — https://colorlib.com/wp/template/education-wordpress-themes/
Preview: https://preview.colorlib.com/theme/education-wordpress-themes/ (UNAVAILABLE — 404)
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/education-website-designs.jpg
New name: EduHaven
App folder: `apps/eduhaven`

## Section Order (matches original 1:1)

1. **Top Bar** — Full-width dark navy (#1B2A4A) utility bar: left = email icon (lucide: Mail) + "info@eduhaven.edu" + phone icon (lucide: Phone) + "+1-3435-2356-222"; right = "Alumni", "Calendar", "Portal" text links + green "Support EduHaven" button
2. **Navbar** — White bg, logo = graduation cap icon (lucide: GraduationCap) + "EduHaven" text (serif font); nav links: Home (green active underline), About, Academics, Admissions, Courses, Athletics, Campus Life; search icon (lucide: Search) far right; sticky on scroll with shadow
3. **Hero** — Full-width background image (`picsum.photos/seed/eduhaven-hero/1920/800`), dark overlay (navy 60%), left-aligned content: subtitle "The Best University Of The State" (white, 18px), main heading "EduHaven University" (white, 56px serif bold), "Take A Tour" button (dark bg, white text, 3px green left border)
4. **Feature Icons** — White bg, 4-column grid: icon (lucide: Building2, GraduationCap, Trophy, Users) + title + subtitle. Items: University Life "Overall in here", Graduation "Getting Diploma", Athletics "Sport Clubs", Social "Overall in here"
5. **Apply for Admission** — Two-column: left = instructor photo (`picsum.photos/seed/eduhaven-professor/600/400`), right = dark navy bg (#1B2A4A) with padding: "Apply for Admission" heading (white, serif), green accent text "Fall 2025 applications are now open" (#4CAF50), description paragraph (white/light grey)
6. **Campus Facilities** — Section heading, grid of campus facility images with overlay titles (library, labs, sports, cafeteria)
7. **Events & News** — Section heading, 3-column cards: event image + date + title + description
8. **Course Listings** — Section heading, grid of course cards: icon/emoji + course name + brief description
9. **Testimonials** — Section heading, carousel or grid of testimonial cards: avatar + name + role + quote
10. **Footer** — Dark navy bg (#1B2A4A): university logo, nav links column, contact info column, social icons (Facebook, Twitter, Instagram, LinkedIn), copyright text, **Component Dock link**

## Design Fidelity Notes

- **Color palette**: Dark navy (#1B2A4A) is the dominant brand color — used in top bar, hero overlay, admission section, footer. Green (#4CAF50) is the accent — used for active nav link, CTA buttons, and accent text. White is the primary background.
- **Typography**: Use a serif font (Playfair Display from Google Fonts) for main headings and the university name. Use a sans-serif (Open Sans) for body text, navigation, and UI elements.
- **Top bar**: Full-width, dark navy background, small text (13-14px), white/light grey text. Contact info on left, utility links + green CTA on right. Green button has white text, rounded corners.
- **Navbar**: White background, clean and minimal. Logo uses a graduation cap icon + serif university name. Active nav link has green underline/text. Becomes sticky with subtle shadow on scroll.
- **Hero**: The background image should show a student/studying scene. Dark navy overlay at ~60% opacity. Left-aligned text with generous padding. The "Take A Tour" button has a distinctive green left border accent.
- **Feature icons row**: Directly below hero, white background, 4 equal columns. Each has a dark icon (lucide-react), bold title, and grey subtitle. Simple and clean.
- **Admission section**: Split layout — photo on left (rounded or square), dark navy panel on right with white text and green accent. This is a key CTA section.
- **Spacing**: Generous padding between sections (80-100px). Clean whitespace throughout.
- **Placeholder images**: Use `picsum.photos/seed/eduhaven-<n>/<w>/<h>` for all images.
- **No carousel library needed**: Use simple CSS transitions or static display for any slider content.

## Implementation Steps

1. Copy simplest existing app as template scaffold
2. Rename package to `@free-react-templates/eduhaven`
3. Set up `public/CNAME` → `eduhaven.free.componentdock.com`
4. Add Playfair Display + Open Sans font links to `index.html`
5. Configure Tailwind theme tokens (navy #1B2A4A, green #4CAF50, body text #666, headings dark) in `index.css`
6. Build TopBar component (dark navy, contact info, utility links, green CTA)
7. Build Navbar component (logo, nav links, search icon, sticky on scroll)
8. Build Hero component (bg image, overlay, heading, subtitle, CTA button)
9. Build FeatureIcons component (4-column grid)
10. Build Admission component (two-column: photo + dark navy CTA)
11. Build CampusFacilities component (image grid with overlays)
12. Build EventsNews component (3-column cards)
13. Build CourseListings component (course cards)
14. Build Testimonials component (testimonial cards)
15. Build Footer component (dark navy, columns, social icons, Component Dock link)
16. Compose all sections in App.tsx
17. Write tests (100% coverage)
18. Run verify-app.sh
19. Commit + PR + merge + deploy
