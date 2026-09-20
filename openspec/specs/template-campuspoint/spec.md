# Template: Campuspoint (Education)

## Purpose

Recreation of ColorLib **University** template.
- Source slug: `university`
- Preview URL: https://preview.colorlib.com/theme/university/
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/university-free-template.jpg
- Stack: Vite + React 19 + Tailwind CSS 4 + TypeScript
- Deploy target: `campuspoint.free.componentdock.com`

## Design tokens

| Token            | Value                                  | Source                        |
|------------------|----------------------------------------|-------------------------------|
| Brand color      | `#11cbd7` (teal/cyan)                 | `.btn-primary`, `.block-22`, `.block-15 h2`, `.episodes .meta` |
| Body background  | `#fff`                                 | `body`                        |
| Body text        | `gray`                                 | `body`                        |
| Headings         | `#000`                                 | `h1, h2, h3, h4`              |
| Font family      | `"Rubik", arial, sans-serif`          | `body`                        |
| Font weights     | 300 (body, hero h1), 400 (nav, brand) | CSS                           |
| Button radius    | `4px`                                  | `.btn`, `.box`                |
| Hero overlay     | `rgba(0,0,0,0.1)`                     | `.site-hero.overlay:before`   |
| Section padding  | `5em 0`                               | `.site-section`               |
| Card border-radius | `4px`                                | `.block-19`, `.box`          |
| Newsletter bg    | `#11cbd7`                             | `.block-22`                   |
| Newsletter input | white bg, `border-radius: 4px`, height 50px | `.subscribe .email`     |
| Card shadow      | `0 2px 20px -5px rgba(0,0,0,0.07)`   | `.block-19`                   |
| Card hover shadow | `0 2px 90px -5px rgba(0,0,0,0.2)`   | `.block-19:hover`             |
| Counter number   | `40px, color: #11cbd7`               | `.block-18 .text strong`      |
| Counter label    | `uppercase, letter-spacing: .1em, color: #ccc` | `.block-18 .text span` |

## Gherkin requirements

### Navbar

Scenario: Navbar renders with brand and navigation links
  Given the user loads the page
  Then a sticky white navbar is visible at the top
  And the brand text "Campuspoint" is uppercase with letter-spacing 0.2em
  And nav links include: Home, Courses (dropdown), Categories (dropdown), Blog, About, Contact
  And a "Login / Register" link group is right-aligned

Scenario: Navbar collapses on mobile
  Given the user resizes to mobile viewport
  Then a hamburger toggle button appears
  And clicking it expands the nav links vertically

Scenario: Dropdown menus open on click
  Given the user clicks "Courses" or "Categories"
  Then a dropdown menu appears with course/category options
  And each item has hover color #11cbd7

### Hero section

Scenario: Hero displays full-screen with background image and overlay
  Given the user loads the page
  Then a full-viewport hero section covers the screen
  And a background image fills the section
  And a semi-transparent dark overlay sits on top

Scenario: Hero shows search form with filters
  Given the user sees the hero
  Then a heading "Find Online Courses That Suits You" is centered
  And a search form contains: keyword text input, category dropdown, difficulty dropdown
  And a "Search" button with brand color background is right of the form

Scenario: Hero shows CTA button
  Given the user sees the hero
  Then a "Register Now" button with teal background and white text is centered below the form
  And hover removes background, shows white border

### Video/Content section

Scenario: Two-column layout with video and text
  Given the user scrolls to the content section
  Then a left column shows a video player thumbnail with a circular play button (#11cbd7)
  And a right column shows heading "Create cool websites" in #11cbd7
  And descriptive text below the heading
  And an "Enroll Now" button with teal background

### Features section

Scenario: Four feature stats displayed in a row
  Given the user scrolls to the features section
  Then 4 stat items are displayed in a grid row
  And each has an icon, a large number, and a label
  And numbers are: 12921 Students, 51 Schools, 3902 Books, 1921 Graduates
  And number color is #11cbd7, font-size 40px

### Counter/Image section

Scenario: Image and counter stats on light background
  Given the user scrolls to the counter section
  Then a light gray background section is visible
  And left column shows an image
  And right column shows heading "Education is Life"
  And descriptive paragraph text
  And 4 counter stats in 2x2 grid (Students, Schools, Books, Graduates)

### Popular Courses

Scenario: Course carousel with cards
  Given the user scrolls to the courses section
  Then a heading "Popular Courses" with teal color is centered
  And a carousel of course cards is shown
  And each card has: image, title, description, enrollment count, price
  And cards have white background with subtle shadow
  And cards lift on hover with increased shadow
  And "Free" price badge has teal background with white text

### Teachers section

Scenario: Teacher flip cards
  Given the user scrolls to the teachers section
  Then a heading "Teachers" is centered
  And 3 teacher cards are shown in a row
  And front side shows: background photo, teacher name, role
  And hovering flips the card to show a back side with a quote and author info
  And flip animation uses rotateY 3D transform

### Blog section

Scenario: Blog posts on light background
  Given the user scrolls to the blog section
  Then a heading "Blog" with teal color is centered
  And left column shows one large featured post with image, title, date, author, comments
  And right column shows 4 smaller posts with thumbnail, title, metadata
  And post titles link on hover to brand color

### Newsletter section

Scenario: Newsletter signup with teal background
  Given the user scrolls to the newsletter section
  Then a full-width teal (#11cbd7) background section appears
  And heading "Create cool websites" in white
  And descriptive text in white/translucent
  And an email input with white background
  And a "Subscribe" button positioned inside the input

### Footer

Scenario: Four-column footer
  Given the user scrolls to the footer
  Then column 1 shows site name and description
  And column 2 shows "Quick Links" in two sub-columns
  And column 3 shows recent "Blog" posts with metadata
  And column 4 shows "Contact Information" with address, phone, email, hours

Scenario: Footer bottom bar
  Given the user sees the footer bottom
  Then a copyright line is left-aligned
  And social media icon links (Facebook, Twitter, LinkedIn, Instagram) are right-aligned
  And a "Component Dock" attribution link replaces Colorlib branding

## Verification checklist

- [ ] Navbar: sticky, white bg, uppercase brand, dropdowns work, mobile collapse
- [ ] Hero: full-screen, background image, overlay, search form with 3 fields + button, "Register Now" CTA
- [ ] Video section: 2-column, video thumbnail with play button, heading + text + button
- [ ] Features: 4 stats with icons, correct numbers, teal color
- [ ] Counter: image left, heading + 4 stats right, light bg
- [ ] Courses: heading, carousel/cards, enrollment counts, prices, hover effects
- [ ] Teachers: 3 flip cards, front photo + info, back quote, 3D flip animation
- [ ] Blog: heading, 1 featured + 4 sidebar posts, metadata
- [ ] Newsletter: teal bg, heading, email input + subscribe button
- [ ] Footer: 4 columns, quick links, blog posts, contact info, copyright + social
- [ ] Footer links to Component Dock
- [ ] No ColorLib references in app code
- [ ] All images use picsum.photos placeholders
- [ ] Rubik font loaded via Google Fonts
- [ ] 100% test coverage
- [ ] Typecheck + lint pass
- [ ] Build succeeds
