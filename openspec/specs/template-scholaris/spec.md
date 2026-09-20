# Template: Scholaris (Education / University)

## Purpose

Recreation of the ColorLib **Unica** template — a university/education website
with orange brand accent, dark navy navigation, Rubik typography, hero slider,
countdown timer, course cards, gallery masonry, and blog section.

- **Source:** https://colorlib.com/wp/template/unica/
- **Preview:** https://preview.colorlib.com/theme/unica/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/unica-free-template.jpg
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript

## Design tokens

| Token         | Value          | Notes                              |
| ------------- | -------------- | ---------------------------------- |
| primary-orange| `#f6783a`      | Buttons, accents, icons            |
| dark-navy     | `#020031`      | Nav bg, counter bg, headings       |
| heading-dark  | `#111111`      | Body headings                      |
| body-gray     | `#636363`      | Paragraph text                     |
| white         | `#ffffff`      | Button text, card bg               |

### Fonts

| Role      | Font    | Weights       |
| --------- | ------- | ------------- |
| All text  | `Rubik` | 400, 500, 700 |

### Button styles

- **Primary (`.site-btn`):** bg `#f6783a`, text white, `border-radius: 50px` (pill), uppercase.
- **White outline:** bg white, text dark, used on dark backgrounds.

### Section backgrounds

- Header: white
- Nav: dark navy `#020031`
- Hero: slider with background images
- Counter: dark navy `#020031`
- Services: white
- Enrollment: background image
- Courses: white
- Facts: background image
- Events: white
- Gallery: masonry images
- Blog: white
- Newsletter: light/accent
- Footer: dark

## Section structure (HTML order)

1. **Header** — Logo left, working time + address info right, hamburger nav switch
2. **Nav** — Dark navy `#020031` bg, links: Home, About Us, Event, Courses, Blog, Contact. Search + cart icons right
3. **Hero Slider** — Owl carousel with bg images, "Award Winning UNIVERSITY" subtitle, "An investment in knowledge pays the best interest." h2, description, "GET STARTED" pill button
4. **Counter/Next Course** — Dark navy bg, graduation cap icon, "NEXT COURSE: Sales & Marketing Alignment", countdown timer (Days, Hrs, Mins, secs)
5. **Services** — 6 items with icons: Art Studio, Great Facility, Activity Hub, Fully Qualified, Flexible Schedule, Chemistry Lab
6. **Enrollment** — Bg image, "ENROLLMENT" heading, 3-step numbered process (Contact, Consulting, Register) + enrollment image
7. **Courses** — 6 course cards: image, category tag, date, title, price ($100-$250/month)
8. **Facts** — Bg image, 4 stats: 50 Years, 80 Teachers, 500 Students, 800+ Lessons
9. **Events** — Event items with images, dates, titles, descriptions
10. **Gallery** — Masonry grid of 7 images with popup zoom
11. **Blog** — 4 items: image, date, author, title, description
12. **Newsletter** — Email input + "SUBSCRIBE" pill button
13. **Footer** — Logo + description + social, Useful Links, Recent Posts, Contact. Copyright with Component Dock

## Gherkin scenarios

```gherkin
Scenario: Header shows logo and info
  Given I visit the Scholaris homepage
  Then I see a logo on the left
  And I see working time and address info on the right

Scenario: Navigation bar displays links
  Given I visit the Scholaris homepage
  Then I see a dark navy navigation bar
  And I see links: Home, About Us, Event, Courses, Blog, Contact
  And I see search and cart icons

Scenario: Hero slider shows slides
  Given I visit the Scholaris homepage
  Then I see a hero slider with background images
  And I see "Award Winning UNIVERSITY" subtitle
  And I see "An investment in knowledge pays the best interest." heading
  And I see a "GET STARTED" pill button

Scenario: Counter shows next course countdown
  Given I visit the Scholaris homepage
  When I scroll to the counter section
  Then I see a dark navy section with graduation cap icon
  And I see "NEXT COURSE: Sales & Marketing Alignment"
  And I see a countdown timer with Days, Hours, Minutes, Seconds

Scenario: Services section shows 6 items
  Given I visit the Scholaris homepage
  When I scroll to the Services section
  Then I see "OUR SERVICES" heading
  And I see 6 service items with icons and descriptions

Scenario: Enrollment section shows 3-step process
  Given I visit the Scholaris homepage
  When I scroll to the Enrollment section
  Then I see "ENROLLMENT" heading
  And I see 3 numbered steps: Contact, Consulting, Register
  And I see an enrollment image

Scenario: Courses section shows 6 course cards
  Given I visit the Scholaris homepage
  When I scroll to the Courses section
  Then I see "OUR COURSES" heading
  And I see 6 course cards with images, categories, dates, titles, and prices

Scenario: Facts section shows 4 stats
  Given I visit the Scholaris homepage
  When I scroll to the Facts section
  Then I see 4 stats: 50 Years, 80 Teachers, 500 Students, 800+ Lessons

Scenario: Blog section shows 4 posts
  Given I visit the Scholaris homepage
  When I scroll to the Blog section
  Then I see "LATEST NEWS" heading
  And I see 4 blog items with images, dates, authors, titles

Scenario: Newsletter accepts email subscription
  Given I visit the Scholaris homepage
  When I scroll to the Newsletter section
  Then I see "NEWSLETTER" heading
  And I see an email input and "SUBSCRIBE" button

Scenario: Footer shows links and contact
  Given I visit the Scholaris homepage
  When I scroll to the footer
  Then I see About, Useful Links, Recent Posts, and Contact columns
  And I see a copyright notice with a "Component Dock" link
```

## Verification checklist

- [ ] Orange `#f6783a` used for primary buttons and accents
- [ ] Dark navy `#020031` used for nav and counter backgrounds
- [ ] Font is `Rubik` (Google Fonts)
- [ ] Hero has owl carousel slider with multiple slides
- [ ] Countdown timer in counter section
- [ ] 6 service items with icons
- [ ] 3-step enrollment process with numbered list
- [ ] 6 course cards with pricing
- [ ] 4 fact/stats with icons
- [ ] Masonry gallery with popup zoom
- [ ] 4 blog items
- [ ] Newsletter email form
- [ ] Footer links to Component Dock
- [ ] No ColorLib references in app code
- [ ] Placeholder images use `picsum.photos/seed/scholaris-<n>/`
- [ ] Google Fonts loaded in `index.html`
