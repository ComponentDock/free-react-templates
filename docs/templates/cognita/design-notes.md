# Cognita — Design Notes

## Design Tokens (from ColorLib Eskwela CSS)

| Token           | Value                    | Usage                                           |
| --------------- | ------------------------ | ----------------------------------------------- |
| Primary blue    | #429FFD                  | Links, CTAs, active states, selection highlight |
| Gold accent     | #F7AF1D                  | Section highlights, prices                      |
| Dark bar        | #1E2022                  | Upper menu background                           |
| Heading font    | Playfair Display (serif) | All headings (h1-h6)                            |
| Body font       | Open Sans (sans-serif)   | Body text, nav links                            |
| Body text color | gray (#808080)           | Paragraph text                                  |
| Heading color   | #000000                  | Headings                                        |
| Section alt bg  | #f2f3f7                  | Alternating section backgrounds                 |
| Button shape    | rounded-pill (100px)     | CTA buttons                                     |

## Sections (in order)

1. **UpperBar** — Dark top bar with social icons (Twitter, Facebook, LinkedIn, Dribbble) and "Apply Now" link
2. **Navbar** — Sticky white nav: "Cognita" logo (blue accent on "nita"), menu items, "Join Now" pill button, mobile hamburger
3. **Hero** — Full-width background image with dark overlay, centered heading + subtitle + "Start Learning" pill CTA
4. **IntroFeatures** — 3 cards on gray bg: Learn Courses, Library Store, 50% off — each with icon + heading + description
5. **Welcome** — Two-column: left = heading + descriptive text; right = accordion FAQ panels
6. **Features** — 4 items on gray bg: Professional Courses, Experienced Instructor, Practical Training, Validated Certificate
7. **Classes** — 6 course cards: image + category tag + title + price + "Enroll Now" link
8. **Testimonials** — 3 testimonial cards: quote + avatar + name + role
9. **Professors** — 4 instructor cards: circular photo + name + specialty + social links
10. **Events** — 3 event cards: image + date badge + title + description
11. **Footer** — 4-column dark footer: Brand + Quick Links + Courses + Contact/Newsletter; bottom bar with copyright + Component Dock link

## Replication Notes

- Original uses Bootstrap grid + Flexslider for hero (we use CSS background + Tailwind grid)
- Original uses icomoon icons (we use lucide-react)
- Original has flaticon icons for intro features (we use lucide-react equivalents)
- Original uses openweathermap-style accordion (we use controlled React state)
- Images replaced with picsum.photos seeded placeholders
- Google Fonts loaded via link tags in index.html
