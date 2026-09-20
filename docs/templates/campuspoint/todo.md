# Campuspoint — Implementation Todo

Source: ColorLib University (https://colorlib.com/wp/template/university/)
Preview: https://preview.colorlib.com/theme/university/
New name: campuspoint

## Section order (matches source 1:1)

1. **Navbar** — sticky white, uppercase brand "Campuspoint", nav links with 2 dropdowns, Login/Register right
2. **Hero** — full-viewport, background image + overlay, search form (keyword + category + difficulty + Search button), "Register Now" CTA
3. **Video/Content** — 2-col: left = video thumbnail with play button, right = heading (teal) + text + "Enroll Now" button
4. **Features** — 4-col grid: icon + number + label (Students 12921, Schools 51, Books 3902, Graduates 1921)
5. **Counter/Image** — 2-col on light bg: left = image, right = heading "Education is Life" + text + 4 counter stats
6. **Popular Courses** — heading + carousel of course cards (image, title, description, enrollment, price)
7. **Teachers** — 3 flip cards: front = photo + name + role, back = quote + author
8. **Blog** — 2-col: left = 1 featured post, right = 4 sidebar posts
9. **Newsletter** — teal bg, heading + email subscribe form
10. **Footer** — 4-col: brand, quick links, blog posts, contact info, copyright + social icons + Component Dock link

## Component breakdown

| Component     | Props needed                           | Notes                                    |
|---------------|----------------------------------------|------------------------------------------|
| Navbar        | brand, links[], dropdowns[]            | Sticky, mobile collapse                  |
| Hero          | backgroundImage, heading, searchFields | Full-screen, overlay                     |
| VideoSection  | videoThumbnail, heading, text, cta     | 2-column layout                          |
| Features      | stats[]                                | 4 items, teal numbers                    |
| CounterSection| image, heading, text, stats[]          | Light bg, 2-column                       |
| CourseCarousel| courses[]                              | Card grid with carousel                  |
| TeacherCards  | teachers[]                             | Flip animation (3D transform)            |
| BlogSection   | featured, posts[]                      | 2-column layout                          |
| Newsletter    | heading, description                   | Teal bg, inline form                     |
| Footer        | brand, links[], blogPosts[], contact   | 4-column, social icons                   |

## Design fidelity notes

- Font: Rubik via Google Fonts (weights 300, 400, 500)
- Brand color: #11cbd7 — used in buttons, headings, counters, newsletter bg
- Button radius: 4px (small, not fully rounded)
- Hero: dark overlay rgba(0,0,0,0.1), 100vh height
- Search form: 3 equal-width fields + submit button (flexbox row on desktop, stacked on mobile)
- Course cards: white bg, subtle shadow, hover lift effect
- Teacher cards: CSS 3D flip animation (rotateY), front/back
- Newsletter: teal bg, white text, email input with white bg
- Footer: 4 equal columns, copyright left, social icons right

## Implementation order

1. Set up app folder + workspace registration
2. Navbar component
3. Hero component (full-screen + search form)
4. VideoSection component
5. Features component (4 stats)
6. CounterSection component (image + stats)
7. CourseCarousel component (cards + carousel)
8. TeacherCards component (flip animation)
9. BlogSection component (featured + sidebar)
10. Newsletter component
11. Footer component
12. Tests (100% coverage)
13. Build + typecheck + lint verification
