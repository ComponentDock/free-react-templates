# Template: Praxis (Education / University)

## Purpose

Recreation of ColorLib's **University** template.
- **Source slug:** `university`
- **ColorLib page:** https://colorlib.com/wp/template/university/
- **Preview URL:** https://preview.colorlib.com/theme/university/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/university-free-template.jpg
- **New name:** `praxis`
- **Deploy URL:** https://praxis.free.componentdock.com
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript (strict)

## Design Tokens (extracted from preview CSS)

| Token | Value | Usage |
|---|---|---|
| Font family | `"Rubik", sans-serif` | All text (weights 300/400/500) |
| Brand color | `#11cbd7` | Buttons, links, primary accents |
| Background (page) | `#fff` | Body background |
| Text color | `gray` | Body text / paragraphs |
| Heading color | `#000` | h1-h4 |
| Hero overlay | `rgba(0,0,0,0.4)` implied by `.overlay` | Dark overlay on hero background |
| Section bg (alt) | `bg-light` (#f8f9fa via Bootstrap) | Stats section, courses section, newsletter |
| Button radius | `4px` | `.btn` border-radius |
| Navbar bg | `#fff` | White header with box-shadow |
| Card border-radius | `0` | Most cards/sections use sharp corners |
| Play button | `border-radius: 50%`, brand color bg | Video play button overlay |
| Dropdown hover | `#11cbd7` bg, `#fff` text | Nav dropdown items |

## Section Structure (from live preview DOM)

1. **Navbar** — White bg, uppercase "Praxis" logo with letter-spacing, nav links (Home, Courses [dropdown], Categories [dropdown], Blog, About, Contact), Login/Register right-aligned
2. **Hero** — Full viewport height, background image with dark overlay, search form (keyword input + category select + difficulty select), "Register Now" CTA button, subtitle "We have more than 500 courses to improve your skills"
3. **Welcome** — Two-column: video image with play button overlay (left on md+, reversed order on mobile), "Welcome to Praxis" heading + body text + "Read More" button
4. **Features** — 4-column grid: icon cards (Knowledge, Senior High School, College of Arts & Sciences, Unmatched Professor), each with heading + description + "Read More" link
5. **Stats/Counter** — Light bg, two-column: left image, right "Education is Life" heading + animated counters (Students: 12921, Schools: 51, Books: 3902, Graduates: 1921) with icons
6. **Popular Courses** — Light bg, centered heading + subtitle + "Enroll Now" button, horizontal carousel of course cards (image + title + description + price/enrolled count)
7. **Teachers** — Centered heading, 3-column grid of flip cards (front: background image + name + role; back: quote + author info)
8. **Blog** — Two-column: left "Recent Posts" heading + 4 blog cards (thumbnail + title + meta: date, author, comments), right "Blog" heading + 3 sidebar post cards
9. **Newsletter/CTA** — Dark brand bg, "Create cool websites" heading + description + email subscribe form
10. **Footer** — 4-column: brand name + description, Quick Links (2-col), Blog posts (3 items), Contact Information (address, phone, email, hours). Copyright row with social icons.

## Gherkin Requirements

### Feature: Navbar

Scenario: Navbar displays brand and navigation links
  Given the page loads
  Then the navbar shows "Praxis" as the brand text (uppercase, letter-spaced)
  And nav links include Home, Courses, Categories, Blog, About, Contact
  And Login/Register links appear right-aligned

Scenario: Navbar is sticky/shadowed on scroll
  Given the user scrolls down
  Then the navbar has a box-shadow effect
  And the navbar remains at the top of the viewport

### Feature: Hero Section

Scenario: Hero displays full-viewport search area
  Given the hero section renders
  Then it covers the full viewport height
  And it shows a background image with a dark overlay
  And a heading "Find Online Courses That Suits You" is centered
  And a search form has keyword input, category dropdown, difficulty dropdown, and Search button
  And a "Register Now" button is displayed below the form
  And a subtitle shows "We have more than 500 courses to improve your skills"

### Feature: Welcome Section

Scenario: Welcome section shows video and text side-by-side
  Given the welcome section renders
  Then a video thumbnail with play button appears on one side
  And "Welcome to Praxis" heading with body text appears on the other side
  And a "Read More" button in brand color is shown

### Feature: Features Section

Scenario: Features section displays four icon cards in a row
  Given the features section renders
  Then 4 cards are shown in a grid (col-md-6 col-lg-3)
  And each card has an icon, heading, description, and "Read More" link
  And the four items are Knowledge, Senior High School, College of Arts & Sciences, Unmatched Professor

### Feature: Stats/Counter Section

Scenario: Stats section displays animated counters on light background
  Given the stats section renders
  Then it has a light (#f8f9fa) background
  And an image appears on one side
  And "Education is Life" heading with description appears on the other side
  And 4 counter items are displayed: Students (12921), Schools (51), Books (3902), Graduates (1921)
  And each counter has an icon and animates on scroll into view

### Feature: Popular Courses

Scenario: Courses section shows a carousel of course cards
  Given the courses section renders
  Then it has a light background
  And "Popular Courses" heading is centered with an "Enroll Now" button
  And a horizontal carousel displays course cards
  And each card has an image, title, description, enrolled count, and price (or "Free")

### Feature: Teachers Section

Scenario: Teachers section shows flip cards for faculty
  Given the teachers section renders
  Then "Teachers" heading is centered
  And 3 flip cards are displayed in a row
  And each card's front shows a background image with name and role
  And each card's back shows a testimonial quote and author info

### Feature: Blog Section

Scenario: Blog section shows recent posts with sidebar
  Given the blog section renders
  Then "Recent Posts" heading appears on the left column
  And 4 blog post cards are listed (thumbnail, title, date, author, comment count)
  And a "Blog" sidebar on the right shows 3 additional post cards

### Feature: Newsletter/CTA

Scenario: Newsletter section invites email subscription
  Given the newsletter section renders
  Then it has a dark brand-colored background (#11cbd7)
  And "Create cool websites" heading appears on the left
  And an email input + Subscribe button appear on the right

### Feature: Footer

Scenario: Footer shows brand info, links, blog, and contact
  Given the footer renders
  Then it has 4 columns: brand description, Quick Links, Blog posts, Contact Information
  And Quick Links include Home, About Us, Courses, Pages, News, Support, Contact, Privacy
  And Contact Information shows address, phone, email, and business hours
  And a copyright row appears with social media icon links
  And the footer links to https://www.componentdock.com/ ("Component Dock")

## Verification Checklist

- [ ] Navbar: white bg, uppercase brand, nav links, Login/Register
- [ ] Hero: full viewport, background image + overlay, search form, CTA
- [ ] Welcome: video thumbnail + play button, text + Read More
- [ ] Features: 4 icon cards in grid
- [ ] Stats: light bg, image + animated counters (4 items)
- [ ] Courses: carousel of course cards with price info
- [ ] Teachers: 3 flip cards (front/back)
- [ ] Blog: recent posts + sidebar
- [ ] Newsletter: brand bg, email subscribe form
- [ ] Footer: 4-col layout, Quick Links, Blog, Contact, copyright + social
- [ ] All colors match tokens (#11cbd7 brand, Rubik font, etc.)
- [ ] Footer links to componentdock.com
- [ ] No ColorLib references in app code
- [ ] 100% test coverage
- [ ] Spec validation passes (`npm run spec:validate`)
