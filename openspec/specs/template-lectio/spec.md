# Template: Lectio (Education — University / Online Course Platform)

## Purpose

Lectio is a single-page education/university template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib "Academica" template
design (preview: https://preview.colorlib.com/theme/academica/), built under a
different name ("Lectio" — Latin for reading/study, evoking an academic atmosphere)
with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript (strict).
No ColorLib references in app code — provenance lives in this spec, TEMPLATES.md,
and the PR.

## Design reference (replication findings)

- **Original:** ColorLib "Academica" — a free education/university WordPress theme
  designed for colleges, online courses, and training centers.
  Source: https://colorlib.com/wp/template/academica/
  Preview: https://preview.colorlib.com/theme/academica/ (LIVE, HTTP 200).
  Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/academica-free-template.jpg
- **Live preview ANALYZED:** Full HTML + CSS fetched and parsed (css/style.css,
  bootstrap.min.css, font-awesome.min.css, flaticon.css, owl.carousel.css).
  Section structure and design tokens extracted from live CSS.
- **Visual design (screenshot + live preview):** A university/online-course
  platform template with a professional, clean, trustworthy aesthetic. Features
  a dark navy header bar, a full-width hero with a study/reading lifestyle image,
  dark overlay, white headline text, author attribution, and a blue CTA button.
  Below the hero: a white multi-field course search form overlapping the hero
  section. A 3x2 grid of "Training Center" service cards with blue icons. A
  testimonials slider on a blue gradient background. A course carousel with
  course cards (image, title, teacher, "Enroll Now" button). A stats/fun-facts
  section with large numbers. A newsletter subscription section with a dark
  background. A 4-column dark footer with category links and copyright.

## Design tokens (from live preview CSS — style.css)

| Token              | Value                                  | Notes                                                          |
| ------------------ | -------------------------------------- | -------------------------------------------------------------- |
| Brand color        | `#185dd0`                              | Deep blue — buttons, links, active states, course card accents |
| Brand gradient     | `linear-gradient(to right, #185dd0, #7076fc)` | Blue-to-purple gradient — course cards, CTA button bg    |
| Accent yellow      | `#fbb710`                              | Gold/yellow — navbar underline, author link highlight          |
| Accent yellow alt  | `#f3e830`                              | Bright yellow — secondary highlight                            |
| Dark navy          | `#0e2040`                              | Very dark navy — header bar background                         |
| Dark bg            | `#1d1d1d`                              | Near-black — footer background                                 |
| Light gray bg      | `#f8fafc`                              | Off-white — alternating section backgrounds                    |
| Border gray        | `#dbe0e2`                              | Light gray borders on cards and dividers                       |
| Heading text       | `#1d1d1d`                              | Dark near-black for headings                                   |
| Body text          | `#333333`                              | Dark gray for paragraphs                                       |
| Muted text         | `#838383`                              | Medium gray for secondary text                                 |
| Light text         | `#9c9c9c`                              | Light gray for captions/meta                                   |
| White              | `#ffffff`                              | Text on dark backgrounds, card backgrounds                     |
| Button radius      | `25px` (site-btn)                      | Rounded/pill-shaped buttons                                    |
| Card radius        | `15px`                                 | Rounded card corners                                           |
| Avatar radius      | `50%`                                  | Circular author avatars                                        |
| Font family        | `'Raleway', sans-serif`                | Clean geometric sans-serif (Google Fonts)                      |
| Font weights       | 300, 400, 500, 600, 700               | Light through bold                                              |

## Sections (in order)

### 1. Navbar
Dark navy (`#0e2040`) background, fixed-width container. Left: book icon + brand
wordmark "Lectio" in white. Center: horizontal nav links — Home, About Us, Courses
(dropdown with subcategories), News, Contact. Right: "Login / Register" link.
Mobile: hamburger menu. Bottom border: thin yellow/gold (`#fbb710`) accent line.

### 2. Hero
Full-width section with a lifestyle/study background image (person reading/studying)
and a dark semi-transparent overlay. Content (left-aligned within container):
- Large white headline: "Literature Course" (or similar course title)
- Paragraph description text in white
- Author info: circular avatar + "By [Name], [Title]" with name in yellow/gold
- Blue CTA button: "See Details >" — rounded (`border-radius: 25px`), blue bg
  (`#185dd0`), white text, right-arrow icon

### 3. Course Search
White card/form section overlapping the bottom of the hero. Dark header bar with
"Search your Course" heading. Below: horizontal form with 5 fields (Course, Level,
Date, Teacher, Price) as text inputs/selects, and a blue "Search >" button with
gradient. Box-shadow on the card.

### 4. Services / Training Centers
Section heading (centered). 3x2 grid of "Training Center" service cards, each with:
- Blue circular icon (from Flaticon)
- "Training Center" heading
- Short description paragraph
6 items total covering: Applied Studies, Computer Engineering, Software Engineering,
Information Engineering, System Engineering, Graphic Design (or similar categories).

### 5. Testimonials
Blue gradient background section (`linear-gradient(to bottom, #7076fc, #185dd0)`).
Carousel/slider of testimonial items. Each item:
- Quote text ("It helped me so much" or similar)
- Author info: circular avatar + name + "Student" role
Navigation arrows for the carousel.

### 6. Courses (Carousel)
White background section with centered heading "Our Courses". Owl-carousel style
slider of course cards. Each card:
- Course image (top)
- Course title (e.g. "Italian for Beginners & Advanced Course")
- Teacher name with avatar ("By Sebastian Smith, Italian Teacher")
- Blue "Enroll Now" button (rounded, gradient bg)
6 courses total shown in the slider (3 visible at a time on desktop).

### 7. Fun Facts / Stats
Full-width section (possibly with background image or pattern). 4-column stat items:
- "2500" — Total Students
- "14k" — Graduates
- "129" — Courses
- "1490" — Events (or similar)
Large bold numbers, small label text beneath each.

### 8. Newsletter
Dark/image background section. Centered content:
- "Stay updated" heading
- Email input field + subscribe button
Optional: small social media icons or decorative elements.

### 9. Footer
Dark near-black (`#1d1d1d`) background. 4-column layout:
- Col 1: "Engineering" — list of engineering program links
- Col 2: "Business School" — list of business program links
- Col 3: "Art & Design" — list of art/design program links
- Col 4: "Higher Education" — list of higher-ed links
Footer bottom bar: copyright text ("© 2026 Lectio. All rights reserved.")
with a link to Component Dock (https://www.componentdock.com/).

## Verification checklist

- [ ] All 9 sections present and in correct order
- [ ] Navbar: dark navy bg, yellow bottom border, logo + nav + login
- [ ] Hero: background image, dark overlay, white text, blue CTA, author info
- [ ] Search form: white card overlapping hero, 5 fields, blue Search button
- [ ] Services: 3x2 grid, blue icons, correct headings
- [ ] Testimonials: blue gradient bg, carousel with avatar + quote
- [ ] Courses: carousel of 6 cards with image, title, teacher, Enroll Now
- [ ] Stats: 4 large numbers with labels
- [ ] Newsletter: dark bg, "Stay updated" heading, email input
- [ ] Footer: 4 columns with category links, copyright + Component Dock link
- [ ] Design tokens match: brand blue #185dd0, yellow #fbb710, Raleway font
- [ ] Buttons: rounded 25px radius, blue gradient background
- [ ] No ColorLib references in any app code
- [ ] Footer links to https://www.componentdock.com/
- [ ] Images use picsum.photos placeholder with deterministic seeds
- [ ] `npm install` run at repo root (lockfile updated)
- [ ] `public/CNAME` contains `lectio.free.componentdock.com`
- [ ] `homepage` in package.json is `https://lectio.free.componentdock.com`
