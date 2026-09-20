# Template: Brainwave (Education / Online Courses)

## Purpose

Recreation of the ColorLib **StudyLab** template — a modern education platform
with dark navbar, gradient accents (purple-to-blue), Poppins typography,
registration form, course categories grid, course cards, counters, testimonials,
and blog section.

- **Source:** https://colorlib.com/wp/template/studylab/
- **Preview:** https://preview.colorlib.com/theme/studylab/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/studylab-free-template.jpg
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript

## Design tokens

| Token           | Value                              | Notes                              |
| --------------- | ---------------------------------- | ---------------------------------- |
| primary-blue    | `#007bff`                          | Buttons, links                     |
| accent-blue     | `#4986fc`                          | Hover states, form labels          |
| gradient-start  | `#ce4be8`                          | Purple end of gradient             |
| gradient-end    | `#207ce5`                          | Blue end of gradient               |
| teal-accent     | `#24d2c8`                          | Icon accents                       |
| loader-orange   | `#F96D00`                          | Loading spinner                    |
| tag-pink        | `#e449ad`                          | Tag cloud background               |
| heading-black   | `#000000`                          | h1, h2, h3                         |
| body-dark       | `#212529`                          | Body text                          |

### Fonts

| Role      | Font      | Weights                |
| --------- | --------- | ---------------------- |
| All text  | `Poppins` | 300, 400, 500, 600, 700, 800, 900 |

### Button styles

- **Primary:** bg `#007bff`, text white, Bootstrap rounded.
- **White:** bg white, text dark, used as secondary CTA on hero.
- **Secondary:** bg `#6c757d`, text white.

### Section backgrounds

- Hero: background image + dark overlay
- Register: white (no bg)
- Course categories: white
- Pick your course: light gray `#f8f9fa`
- Counter stats: background image + dark overlay
- About: white
- Testimonials: light bg with overlay image
- Services: white
- Blog: light gray `#f8f9fa`
- Footer: dark

## Section structure (HTML order)

1. **Navbar** — Dark bg, brand "Brainwave", nav: Home, About, Course, Instructor, Blog, Contact
2. **Hero** — Bg image + overlay, "Welcome to Brainwave" subheading, "We Are Online Platform For Make Learn" h1, two buttons: "Our Course" (primary) + "Learn More" (white)
3. **Register Form** — Right-aligned form: Full Name, Email, Password, Confirm Password, submit icon, "Already have an account? Sign In"
4. **Course Categories** — 6 cards with bg images: IT & Software, Music, Photography, Marketing, Health, Audio Video. "See All Courses" button
5. **Pick Your Course** — 6 course cards: bg image, category tag, title, advisor, student count, price. Light bg
6. **Counter Stats** — Bg image + overlay, 4 counters: 400 Online Courses, 4500 Students, 1200 Instructors, 300 Hours
7. **About** — Two images left, text right: "Enhanced Your Skills", "Learn Anything You Want Today", CTA button
8. **Testimonials** — Carousel: star ratings, quotes, user images, names. Light bg + overlay
9. **Services** — 4 items: Additional Courses, Certified Teachers, Skilled Instructor, World Class Quiz
10. **Blog** — 3 recent posts: image, date, admin, comments, title, description, "Read more". Light bg
11. **Footer** — About + social, Help Desk, Recent Courses, Contact info. Copyright with Component Dock

## Gherkin scenarios

```gherkin
Scenario: Navbar displays navigation links
  Given I visit the Brainwave homepage
  Then I see a dark navbar with brand "Brainwave"
  And I see nav links: Home, About, Course, Instructor, Blog, Contact

Scenario: Hero shows headline and dual CTAs
  Given I visit the Brainwave homepage
  Then I see a hero section with background image and dark overlay
  And I see "We Are Online Platform For Make Learn" heading
  And I see "Our Course" primary button and "Learn More" white button

Scenario: Registration form accepts user input
  Given I visit the Brainwave homepage
  When I scroll to the register section
  Then I see a form with Full Name, Email, Password, Confirm Password fields
  And I see a submit button and "Already have an account? Sign In" link

Scenario: Course categories display 6 options
  Given I visit the Brainwave homepage
  When I scroll to the categories section
  Then I see 6 category cards with background images
  And I see categories: IT & Software, Music, Photography, Marketing, Health, Audio Video

Scenario: Course cards show details and pricing
  Given I visit the Brainwave homepage
  When I scroll to the Pick Your Course section
  Then I see 6 course cards with images, titles, advisors, student counts, and prices

Scenario: Counter stats animate on scroll
  Given I visit the Brainwave homepage
  When I scroll to the counter section
  Then I see 4 stats: 400 Online Courses, 4500 Students, 1200 Instructors, 300 Hours

Scenario: About section shows description and CTA
  Given I visit the Brainwave homepage
  When I scroll to the About section
  Then I see "Learn Anything You Want Today" heading
  And I see a "Get in touch with us" primary button

Scenario: Testimonials carousel displays reviews
  Given I visit the Brainwave homepage
  When I scroll to the Testimonials section
  Then I see testimonial cards with star ratings, quotes, and user info

Scenario: Services section shows 4 items
  Given I visit the Brainwave homepage
  When I scroll to the Services section
  Then I see 4 service items with icons and descriptions

Scenario: Blog section shows recent posts
  Given I visit the Brainwave homepage
  When I scroll to the Blog section
  Then I see 3 blog cards with images, dates, titles, and "Read more" buttons

Scenario: Footer shows links and copyright
  Given I visit the Brainwave homepage
  When I scroll to the footer
  Then I see About, Help Desk, Recent Courses, and Contact columns
  And I see a copyright notice with a "Component Dock" link
```

## Verification checklist

- [ ] Primary blue `#007bff` used for buttons
- [ ] Gradient accent `#ce4be8` to `#207ce5` used for interactive highlights
- [ ] Font is `Poppins` (Google Fonts)
- [ ] Dark navbar with brand name
- [ ] Hero has background image + dark overlay
- [ ] Registration form with 4 fields
- [ ] 6 course category cards with bg images
- [ ] 6 course cards with pricing
- [ ] Counter stats section with 4 metrics
- [ ] About section with two images + text
- [ ] Testimonials carousel with star ratings
- [ ] 4 service items with icons
- [ ] 3 blog cards
- [ ] Footer links to Component Dock
- [ ] No ColorLib references in app code
- [ ] Placeholder images use `picsum.photos/seed/brainwave-<n>/`
- [ ] Google Fonts loaded in `index.html`
