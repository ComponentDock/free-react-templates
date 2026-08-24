# Template: Pedagogy (Education / Online Courses)

## Purpose

Recreation of ColorLib **Onedu** — an education / online course platform template.

- **Source slug:** `onedu`
- **Preview URL:** https://preview.colorlib.com/theme/onedu/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/onedu-free-template.jpg
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript (strict)
- **New name:** `pedagogy` (app folder: `apps/pedagogy`, package: `@free-react-templates/pedagogy`)

## Design Tokens

Extracted from `https://preview.colorlib.com/theme/onedu/assets/css/style.css`:

| Token            | Value                | Usage                                     |
| ---------------- | -------------------- | ----------------------------------------- |
| font-family      | `"Jost", sans-serif` | All text (Google Fonts: weights 200–800)  |
| brand-primary    | `#FF6F00` (orange)   | Primary CTA buttons, links, accents       |
| brand-secondary  | `#EA5252` (red)      | Search button, nav hover, cart badge      |
| dark-navy        | `#1A213D`            | Button hover state background             |
| purple           | `#5A4E8C`            | Default button bg, search icon, cart icon |
| heading-color    | `#3C3B37`            | All headings (h1–h6)                      |
| body-text        | `#6A6A6A`            | Paragraphs, body copy                     |
| section-bg-light | `#f9f9ff`            | Light section backgrounds                 |
| section-bg-alt   | `#fbf9ff`            | Alternate section backgrounds             |
| section-bg-about | `#EFFDFF`            | About section background (.section-bg)    |
| white            | `#fff`               | Card backgrounds, footer background       |
| border-color     | `#f0e9ff`            | Subtle borders, dividers                  |

**Button styles:**

- `.btn`: bg `#5A4E8C`, padding `30px 35px`, border-radius `4px`, text white, hover dark-navy `#1A213D` via scaleX transition
- `.submit-btn`: bg `#FF6F00`, border-radius `0px`, width `100%`
- `.hero-btn`: padding `29px 31px`, same as `.btn` style
- `.boxed-btn`: bg white, border `1px solid #EA5252`, text `#EA5252`, uppercase, hover fills red

**Input styles:**

- Header search: border-radius `30px` (pill), height `48px`, border `1px solid #B9B9B9`
- Hero search: height `80px`, no border, search icon `80x80px` square, bg `#EA5252`

**Section padding:** `padding-top: 100px; padding-bottom: 90px` (`.section-padding`)

## Section Structure (page order)

1. **Navbar** — Sticky header: logo left, search input (pill-shaped), nav links (Home, Browse Courses, About, Blog dropdown, Contact), cart icon with badge, "Sign In" button
2. **Hero** — Full-width background image, two-column: left headline + subtext + search form, right hero image. Headline: "Learn new skills online with top educators"
3. **About** — Two-column: left image, right text block with heading "The world's largest selection of online courses" + description + "Browse Courses" CTA button. Background: `#EFFDFF`
4. **Popular Courses** — Heading "Students are viewing", carousel of 4+ course cards (image, price badge overlay, title, author name, 5-star rating)
5. **Featured Courses** — Heading "The world's largest selection of courses" + subtext, carousel of course cards (same card layout)
6. **Become an Instructor** — Two-column: left text with checkmark feature list + "Become a Instructor" CTA + "Watch Video" link, right side video/image. Background: `#EFFDFF`
7. **Testimonials** — Heading "Student says about us", carousel with avatar image, quote text, student name + role
8. **Explore Categories** — Heading "Explore top categories", grid of 4–6 category cards (image, title, "View Courses" link)
9. **Footer** — Dark footer with 4 columns: logo + description + social icons, Subjects links, Community links, Company links, newsletter subscribe form
10. **Footer Bottom** — Copyright line

## Gherkin Requirements

### Feature: Pedagogy — Education Landing Page

Scenario: Navbar renders with logo, search, navigation, and sign-in
Given the page loads
Then a sticky header is visible at the top
And the logo is displayed on the left
And a pill-shaped search input is present with placeholder "Search courses.."
And nav links "Home", "Browse Courses", "About", "Blog", "Contact" are visible
And a cart icon with badge is visible
And a "Sign In" button is visible

Scenario: Hero section displays headline and search
Given the page loads
Then the hero section shows a background image
And the heading "Learn new skills online with top educators" is visible
And subtext "Learn 100% online with world-class universities and industry experts" is visible
And a search form with an orange search button is visible

Scenario: About section shows course description
Given the page loads
Then the about section has a light blue background (#EFFDFF)
And an image is displayed on the left
And the heading "The world's largest selection of online courses" is visible
And a description paragraph is displayed
And a "Browse Courses" CTA button is visible

Scenario: Popular courses carousel displays course cards
Given the page loads
Then the "Students are viewing" section is visible
And at least 4 course cards are rendered
And each card shows a course image with a price badge
And each card shows a course title and author name
And each card shows a 5-star rating with review count

Scenario: Featured courses section displays course cards
Given the page loads
Then the "The world's largest selection of courses" section is visible
And a subtitle "Choose from 130,000 online video courses..." is visible
And course cards are rendered in a carousel

Scenario: Become an Instructor section displays features
Given the page loads
Then the "Become an Instructor" section is visible
And at least 3 feature items with checkmark icons are displayed
And a "Become a Instructor" CTA button is visible
And a "Watch Video" link with play icon is visible

Scenario: Testimonials section shows student feedback
Given the page loads
Then the "Student says about us" heading is visible
And at least 2 testimonial slides are present
And each slide shows a student avatar, quote text, name, and role

Scenario: Categories grid shows course categories
Given the page loads
Then the "Explore top categories" heading is visible
And at least 4 category cards are displayed
And each card shows an image, category title, and "View Courses" link

Scenario: Footer renders with columns and newsletter
Given the page loads
Then the footer is visible with a dark background
And a logo and description are shown in the first column
And social media icons (Twitter, Facebook, Pinterest) are visible
And "Subjects", "Community", "Company" link columns are displayed
And a newsletter subscribe form with email input and "Subscribe" button is present
And a footer bottom copyright line is visible

Scenario: Footer links to Component Dock
Given the page loads
Then the footer contains a link to https://www.componentdock.com/
And the link text references "Component Dock"

Scenario: Responsive layout adapts to mobile
Given the page is viewed on a viewport width of 375px
Then the navbar collapses to a hamburger menu
And the hero section stacks vertically
And course cards stack in a single column
And the footer columns stack vertically

## Verification Checklist

- [ ] Navbar: sticky, logo, search, nav links, cart, sign-in button
- [ ] Hero: background image, headline, subtext, search form with orange button
- [ ] About: two-column layout, image left, text right, #EFFDFF background, CTA
- [ ] Popular Courses: section heading, carousel with 4+ cards, price badges, ratings
- [ ] Featured Courses: section heading + subtitle, carousel with cards
- [ ] Become an Instructor: two-column, feature list with checkmarks, CTA + video link
- [ ] Testimonials: carousel with avatar, quote, name, role
- [ ] Categories: grid of 4+ cards with image, title, "View Courses" link
- [ ] Footer: 4 columns, social icons, newsletter form, copyright
- [ ] Footer links to https://www.componentdock.com/
- [ ] Design tokens: Jost font, #FF6F00 primary, #EA5252 secondary, #5A4E8C button bg
- [ ] Button radius: 4px (rectangular), search input radius: 30px (pill)
- [ ] Section padding: 100px top / 90px bottom
- [ ] No ColorLib references in app code (provenance only in spec + TEMPLATES.md)
- [ ] Placeholder images via picsum.photos with deterministic seeds
- [ ] Responsive: mobile hamburger menu, stacked layouts on small viewports
- [ ] Tests: 100% coverage (lines, functions, branches, statements)
- [ ] Build passes without errors
