# Template: CourseKit (Education / Online Courses)

## Purpose

Recreation of ColorLib "Course" — an education/online-courses template with
hero slider, hero boxes, popular course cards, register CTA + search form,
services grid, testimonials slider, events list, newsletter, and footer.

- **Source**: [ColorLib Course](https://colorlib.com/wp/template/course/)
- **Preview**: https://preview.colorlib.com/theme/course/
- **Screenshot**: https://colorlib.com/wp/wp-content/uploads/sites/2/course-free-template.jpg
- **Stack**: Vite · React 19 · Tailwind CSS 4 · TypeScript
- **New name**: `coursekit` (apps/coursekit, `@free-react-templates/coursekit`)

## Design tokens (extracted from preview CSS)

| Token            | Value                            | Source                         |
| ---------------- | -------------------------------- | ------------------------------ |
| Brand primary    | `#ffb606` (golden yellow)        | `.register_section`, buttons   |
| Brand dark       | `#1a1a1a` (near-black)           | header, hero boxes, testimonials, footer |
| Brand accent     | `#db5246` (muted red)            | form-control color             |
| Text primary     | `#3a3a3a`                        | headings on light bg           |
| Text muted       | `#a5a5a5`                        | body text, paragraphs          |
| Border           | `#4d4e4e`                        | newsletter separator           |
| Light bg         | `#f8f9fb`                        | page background                |
| Alt light        | `#eaebec` / `#ececec`            | subtle section tints           |
| White            | `#FFFFFF`                        | section backgrounds            |
| Font headings    | `'Open Sans', sans-serif`        | h1–h6, nav, buttons            |
| Font body        | `'Roboto', sans-serif`           | body text, paragraphs          |
| Button radius    | `0` (rectangular, no rounding)   | `.button`                      |
| Button hover     | box-shadow `0px 10px 20px rgba(0,0,0,0.2)` | `.button:hover`      |
| Hero box         | dark bg `#1a1a1a`, hover → `#ffb606` | `.hero_box`              |
| Event date       | 131×131px, border `2px solid #ffb606` | `.event_date`            |
| Testimonials bg  | `#1a1a1a` + parallax image at 27% opacity | `.testimonials`    |
| Newsletter btn   | `#ffb606` bg, white text         | `.newsletter_submit_btn`        |
| Register section | `#ffb606` bg, white text         | `.register_section`            |

## Sections (in order, from preview DOM)

1. **Header** — flex row: logo left (image + "course" text), main nav right (home, about us, courses, elements, news, contact), phone icon + number in header_side, hamburger for mobile (fullscreen overlay)
2. **Hero Slider** — OwlCarousel 3 slides, each: full-width background image, centered h1 "Get your <span>Education</span> today!" with fade animations, prev/next arrow navigation
3. **Hero Boxes** — 3 columns overlaying hero bottom: "Online Courses", "Our Library", "Our Teachers" — each with SVG icon, title, "view more" link. Dark bg `#1a1a1a`, hover transitions to gold `#ffb606`
4. **Popular Courses** — Section title "Popular Courses". 3-column grid of course cards: image top, card body with title (linked) + description, bottom bar with author avatar + author name + price badge
5. **Register + Search** — Split 50/50 layout. Left: gold `#ffb606` background, centered register CTA "Register now and get a discount 50% discount until 1 January" + paragraph + dark "register now" button. Right: search form over background image — inputs for Course Name, Category, Degree + "search course" submit button
6. **Services** — Section title "Our Services". 3×2 grid of service items, each: SVG icon container + h3 heading + paragraph. Items: Online Courses, Indoor Courses, Amazing Library, Exceptional Professors, Top Programs, Graduate Diploma
7. **Testimonials** — Dark `#1a1a1a` background with parallax image (27% opacity). Section title "What our students say" (white). OwlCarousel slider: quote mark, paragraph text, user avatar, name, title
8. **Events** — Section title "Upcoming Events". 3 event items, each: date box (day number + month, gold border), event content (name link, location, paragraph), event image. Alternating image-left/image-right layout
9. **Footer** — Dark `#1a1a1a` background. Newsletter section at top (title "Subscribe to newsletter", email input + gold "Subscribe" button, bottom border). 4-column footer content: About (logo + paragraph), Menu links, Useful Links, Contact (address, phone, email with icons). Copyright bar at bottom + social icons

## Gherkin requirements

### Feature: Header Navigation

```gherkin
Scenario: Header displays logo and navigation
  Given the user loads the page
  Then the header shows the logo text "coursekit"
  And the navigation links are visible: "home", "about us", "courses", "elements", "news", "contact"
  And a phone number is displayed in the header side area

Scenario: Mobile hamburger menu opens overlay
  Given the viewport is narrow (mobile)
  When the user taps the hamburger icon
  Then a menu overlay opens with navigation links and social icons
  And closing the overlay returns to the normal view
```

### Feature: Hero Slider

```gherkin
Scenario: Hero displays heading
  Given the user is on the homepage
  Then the hero section shows a headline containing "Education"
  And the word "Education" is visually accented (colored/highlighted)

Scenario: Hero slider supports arrow navigation
  Given the hero slider is visible
  When the user clicks the right arrow
  Then the next slide is shown
  When the user clicks the left arrow
  Then the previous slide is shown
```

### Feature: Hero Boxes

```gherkin
Scenario: Hero boxes display three items
  Given the hero section is visible
  Then three hero boxes are displayed below the slider
  And the boxes are "Online Courses", "Our Library", "Our Teachers"
  And each box has an SVG icon and a "view more" link

Scenario: Hero boxes change color on hover
  Given a hero box is visible
  When the user hovers over a hero box
  Then the background changes from dark (#1a1a1a) to gold (#ffb606)
```

### Feature: Popular Courses

```gherkin
Scenario: Popular courses section shows 3 course cards
  Given the user scrolls to the popular courses section
  Then the section title reads "Popular Courses"
  And three course cards are displayed in a row
  And each card has an image, title, description, author info, and price

Scenario: Course card displays price badge
  Given a course card is visible
  Then a price badge (e.g. "$29") is shown in the card footer area
```

### Feature: Register + Search

```gherkin
Scenario: Register section displays CTA on gold background
  Given the user scrolls to the register section
  Then the left half has a gold (#ffb606) background
  And the title reads "Register now and get a discount 50% discount until 1 January"
  And a dark "register now" button is centered below

Scenario: Search section displays course search form
  Given the user scrolls to the search section
  Then the right half shows a background image
  And the title reads "Search for your course"
  And a form with inputs for "Course Name", "Category", "Degree" is shown
  And a "search course" submit button is visible
```

### Feature: Services

```gherkin
Scenario: Services section displays 6 items
  Given the user scrolls to the services section
  Then the section title reads "Our Services"
  And six service items are shown in a 3-column grid
  And the headings are: "Online Courses", "Indoor Courses", "Amazing Library", "Exceptional Professors", "Top Programs", "Graduate Diploma"
  And each item has an SVG icon, heading, and paragraph
```

### Feature: Testimonials

```gherkin
Scenario: Testimonials section displays on dark background
  Given the user scrolls to the testimonials section
  Then the background is dark (#1a1a1a) with a parallax image
  And the section title reads "What our students say" in white

Scenario: Testimonials slider shows review cards
  Given the testimonials slider is visible
  Then testimonial cards show a quote mark, paragraph, user avatar, name, and title
  And left/right navigation arrows are available
```

### Feature: Events

```gherkin
Scenario: Events section shows upcoming events
  Given the user scrolls to the events section
  Then the section title reads "Upcoming Events"
  And three event items are displayed
  And each event has a date box (day + month with gold border), event name, location, description, and image

Scenario: Event date box has gold border
  Given an event item is visible
  Then the date box is 131×131px with a 2px solid gold (#ffb606) border
```

### Feature: Newsletter + Footer

```gherkin
Scenario: Newsletter section accepts email subscription
  Given the user scrolls to the newsletter section
  Then the title reads "Subscribe to newsletter"
  And an email input field is shown
  And a gold "Subscribe" button is visible

Scenario: Footer displays content columns
  Given the user scrolls to the footer
  Then a dark (#1a1a1a) footer is displayed
  And four columns are shown: About, Menu, Useful Links, Contact
  And the About column has a logo and paragraph text
  And the Contact column has address, phone, and email with icons
  And a copyright bar with social icons is at the bottom
  And a "Component Dock" attribution link is present
```

## Verification checklist

- [ ] All 9 sections rendered in correct order
- [ ] Header with logo, nav links, phone number, hamburger for mobile
- [ ] Hero slider with 3 slides, fade animations, prev/next arrows
- [ ] Hero boxes: 3 columns (Online Courses, Our Library, Our Teachers), dark→gold hover
- [ ] Popular Courses: 3 course cards with image, title, description, author, price
- [ ] Register: gold bg left half, CTA title + dark button; Search: bg image right half, form
- [ ] Services: 3×2 grid of 6 service items with icons
- [ ] Testimonials: dark bg + parallax, slider with quote/avatar/name
- [ ] Events: 3 items with gold-bordered date boxes, images, alternating layout
- [ ] Newsletter: email input + gold subscribe button
- [ ] Footer: 4-column layout, copyright bar, social icons, Component Dock link
- [ ] Brand color `#ffb606` used for register section, newsletter button, event borders, hero box hover
- [ ] Font: Open Sans for headings/nav, Roboto for body text
- [ ] Button style: rectangular (no border-radius), dark bg on register, gold bg on newsletter
- [ ] Hero boxes: dark bg #1a1a1a, hover transitions to gold
- [ ] Testimonials section: dark bg with parallax background image
- [ ] Mobile responsive (hamburger menu, stacked layouts)
- [ ] No ColorLib references in app code
