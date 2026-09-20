# Template: Teachly (Education)

## Purpose

Recreation of ColorLib's **Edusmart** education template as a React 19 + Vite + Tailwind CSS 4 + TypeScript single-page site.

- **Source template:** Edusmart — https://colorlib.com/wp/template/edusmart/
- **Preview URL:** https://preview.colorlib.com/theme/edusmart/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/edusmart-free-template-1.jpg
- **New name:** `teachly` (apps/teachly, package `@free-react-templates/teachly`)
- **Deploy target:** https://teachly.free.componentdock.com

## Design Tokens

Extracted from the live preview CSS (`css/style.css`):

| Token | Value | Notes |
|-------|-------|-------|
| Primary gradient | `linear-gradient(90deg, #00aee0 0%, #00fedc 100%)` | Cyan-to-teal gradient used on buttons, CTA areas, registration |
| Secondary accent | `#f8b600` | Golden yellow — price tags, hover states |
| Tertiary accent | `#4dbf1c` | Green — minor accents |
| Body text | `#222222` | Primary text color |
| Muted text | `#777777` | Secondary/body paragraphs |
| Light muted | `#999999` | Captions, meta info |
| Section background | `#f9f9ff` | Light blue-white tint on alternating sections |
| White | `#ffffff` | Card backgrounds, feature cards |
| Footer background | `#000000` | Solid black footer |
| Overlay | `#000` at 20% opacity | Banner and fact area dark overlays |
| Heading font | `"Montserrat", sans-serif` | Uppercase nav, headings |
| Body font | `"Crimson Text", serif` | Body copy, descriptions |
| Button radius | `45px` (pill) | Search button, CTA buttons |
| Card radius | `5px` | Course cards, feature cards |
| Section radius | `20px` | Fact area stat cards |
| Image radius | `50%` | Testimonial avatars |
| Nav link weight | `600` | 12px Montserrat uppercase |

## Section Order

1. **Navbar** — transparent background, Montserrat uppercase links (Home, About, Courses, Course Details, Elements, Blog, Blog Details, Contact), logo left
2. **Home Banner** — full-width background image with dark overlay, left-aligned heading "We Rank the Best Courses on the Web", paragraph, search form (input + gradient button)
3. **Feature Area** — 3-column icon cards overlapping the banner (negative margin -37em): New Classes, Top Courses, Full E-Books
4. **Department Area** — grid of course category cards with image + overlay, category name, course count, student count
5. **Popular Courses** — 4-column course cards: image with overlay + price badge (golden yellow), course title, description, rating stars, student count
6. **Facts Area** — dark overlay background, 6 stat cards in 3x2 grid: Expert Mentors, 25000+ Courses, Student Membership, Lifetime Access, Source File Included, Live Support
7. **Testimonials** — carousel with quote icon, name, 5-star rating, testimonial text, thumbnail navigation
8. **Registration Area** — gradient background, countdown timer (Days/Hours/Mins/Secs), registration form on right
9. **Events Area** — 2-column layout, event cards with thumbnail image, date, title, description
10. **Footer** — black background, 5-column layout: Top Products, Quick Links, Features, Resources, Newsletter (email input), bottom bar with copyright + social icons

## Gherkin Requirements

### Navbar
```gherkin
Scenario: Navbar displays navigation links
  Given the page is loaded
  When I look at the navigation bar
  Then I see links: Home, About, Courses, Course Details, Elements, Blog, Blog Details, Contact
  And the navbar has a transparent background
  And the logo is displayed on the left

Scenario: Navbar is responsive
  Given the viewport is mobile width
  When I tap the hamburger menu
  Then the navigation links expand in a dropdown
```

### Home Banner
```gherkin
Scenario: Banner shows headline and search
  Given the page is loaded
  When I look at the hero banner
  Then I see the heading "We Rank the Best Courses on the Web"
  And I see a paragraph description
  And I see a search input with placeholder "Search Courses"
  And I see a "Search" button with gradient background

Scenario: Banner has background image with overlay
  Given the page is loaded
  When I look at the banner section
  Then it has a background image
  And a dark semi-transparent overlay covers the image
```

### Feature Area
```gherkin
Scenario: Feature cards display three items
  Given the page is loaded
  When I scroll to the feature area
  Then I see three feature cards: New Classes, Top Courses, Full E-Books
  And each card has an icon, title, and description
  And the cards overlap the banner section

Scenario: Third feature card has gradient background
  Given the page is loaded
  When I look at the third feature card
  Then its background uses the brand gradient (cyan to teal)
```

### Department Area
```gherkin
Scenario: Department grid shows course categories
  Given the page is loaded
  When I scroll to the department area
  Then I see a grid of course category cards
  And each card has a background image with overlay
  And each card shows category name, course count, and student count
```

### Popular Courses
```gherkin
Scenario: Course cards display course information
  Given the page is loaded
  When I scroll to the popular courses section
  Then I see 4 course cards
  And each card has an image with a price badge
  And each card shows course title, description, star rating, and student count

Scenario: Price badge uses golden yellow
  Given the page is loaded
  When I look at a course price badge
  Then the background color is #f8b600 (golden yellow)
  And the text is white
```

### Facts Area
```gherkin
Scenario: Facts section shows six stats
  Given the page is loaded
  When I scroll to the facts area
  Then I see 6 stat cards: Expert Mentors, 25000+ Courses, Student Membership, Lifetime Access, Source File Included, Live Support
  And each card has an icon, title, and description
  And the section has a dark overlay background

Scenario: Fact cards have rounded corners
  Given the page is loaded
  When I look at the fact cards
  Then each card has border-radius of 20px
```

### Testimonials
```gherkin
Scenario: Testimonials display in a carousel
  Given the page is loaded
  When I scroll to the testimonials section
  Then I see a carousel with testimonial cards
  And each card has a quote icon, person name, 5-star rating, and testimonial text
  And carousel navigation thumbnails are shown below

Scenario: Testimonials are auto-rotating
  Given the page is loaded
  When I wait 5 seconds
  Then the testimonial carousel advances to the next slide
```

### Registration Area
```gherkin
Scenario: Registration shows countdown and form
  Given the page is loaded
  When I scroll to the registration area
  Then I see "Register Now" heading
  And a countdown timer showing Days, Hours, Mins, Secs
  And a registration form on the right side
  And the section has a gradient background (cyan to teal)

Scenario: Registration form accepts input
  Given the registration form is visible
  When I fill in the name, email, and phone fields
  And I click the submit button
  Then the form validates the inputs
```

### Events Area
```gherkin
Scenario: Events section shows upcoming events
  Given the page is loaded
  When I scroll to the events area
  Then I see "Upcoming Events" heading
  And I see event cards in a 2-column layout
  And each card has a thumbnail image, date, title, and description
```

### Footer
```gherkin
Scenario: Footer has five columns
  Given the page is loaded
  When I scroll to the footer
  Then I see columns: Top Products, Quick Links, Features, Resources, Newsletter
  And the Newsletter column has an email input and subscribe button
  And the footer background is black (#000000)

Scenario: Footer links and social icons
  Given the page is loaded
  When I look at the footer
  Then I see social media icons
  And a copyright line
  And a link to https://www.componentdock.com/ branded as "Component Dock"
```

## Verification Checklist

- [ ] Navbar renders with correct links and transparent background
- [ ] Banner displays heading, paragraph, and search form
- [ ] Banner has background image with dark overlay
- [ ] Feature area shows 3 cards overlapping the banner
- [ ] Department grid displays course categories with images
- [ ] Course cards show image, price badge, title, rating, student count
- [ ] Price badge uses golden yellow (#f8b600)
- [ ] Facts area shows 6 stat cards on dark overlay background
- [ ] Fact cards have 20px border-radius
- [ ] Testimonials carousel auto-rotates with thumbnails
- [ ] Registration area has countdown timer and form on gradient background
- [ ] Events area shows event cards with thumbnails
- [ ] Footer has 5 columns, black background, social icons
- [ ] Footer links to Component Dock
- [ ] Brand gradient (#00aee0 → #00fedc) used on buttons and CTA areas
- [ ] Montserrat font for headings, Crimson Text for body
- [ ] All placeholder images use picsum.photos/seed/teachly-*
- [ ] No ColorLib references in app code
