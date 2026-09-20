# LearnSpark — Implementation Outline

Source: ColorLib "Educrown" — https://preview.colorlib.com/theme/educrown/
New name: learnspark

## Tasks

- [ ] Initialize app: copy simplest existing app, rename package to @free-react-templates/learnspark, set CNAME + homepage
- [ ] Add Google Fonts link to index.html (Montserrat or Open Sans — confirm from preview)
- [ ] Create theme tokens in index.css: primary=#3ee792, navy=#171932, light=#d3ffea
- [ ] Build Navbar component (sticky, hamburger, logo, nav links, Enroll CTA)
- [ ] Build WelcomeSlider hero (full-width, dark overlay, headline, CTA, dots)
- [ ] Build Features section (4 cards: Certificate, Instructors, Learn from anywhere, Quality Service + trust counter)
- [ ] Build FunFact section (parallax bg image, animated counters, dark overlay)
- [ ] Build TrendingCourses section (grid of 4+ course cards with enroll button)
- [ ] Build About section (split layout: text left + video popup right + Read More)
- [ ] Build Testimonials section (green bg, slider with avatars/arrows/dots)
- [ ] Build BlogFeed section (3-column blog cards with date/author)
- [ ] Build FAQs section (accordion expand/collapse, 3+ questions)
- [ ] Build Contact section (form + contact info on sky-gray bg)
- [ ] Build AdmissionNewsletter section (green bg, email input, subscribe button)
- [ ] Build Footer (dark navy, multi-column, Component Dock link)
- [ ] Write App.tsx composing all sections
- [ ] Write tests for every component (100% coverage)
- [ ] Run verify-app.sh learnspark — typecheck, lint, tests, build
- [ ] Update TEMPLATES.md status to [x]
- [ ] Commit and open PR

## Design Fidelity Notes

### Section Order (from preview DOM)
1. Navbar (sticky)
2. Welcome Slider (hero with dark overlay, carousel dots)
3. Features Top (4-column feature cards + trust counter)
4. Fun Fact (parallax image bg, 60% black overlay, animated counters)
5. Trending Courses (grid of course cards)
6. About (split: text + video popup)
7. Testimonials (green theme bg, owl-carousel style slider)
8. Blog Feed (3-column cards)
9. FAQs (accordion)
10. Contact (form + info on sky-gray bg)
11. Admission/Newsletter (green theme, email subscribe)
12. Footer (dark navy, multi-column)

### Key Design Details
- Primary green: #3ee792 (testimonials bg, newsletter bg, accent)
- Navy dark: #171932 (footer, hero overlay, button hover states)
- Light green tint: #d3ffea (nav button idle bg, contact bg)
- Enroll buttons: pill-shaped (border-radius 50px), green bg → navy on hover
- Hero: dark overlay over slider images, white text
- Fun fact: parallax background image with 60% black overlay
- Testimonials: green background section, carousel with arrows + dots
- Footer: dark navy, multiple column layout
- Font: likely Montserrat (confirm from preview head)
- Icons: FontAwesome or replace with lucide-react
