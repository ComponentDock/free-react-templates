# Template: ScholarNest (Education)

## Purpose

Recreation of the ColorLib **Educature** template as a React 19 + Vite + Tailwind 4 + TypeScript single-page application.

- **Source:** https://colorlib.com/wp/template/educature/
- **Preview:** https://preview.colorlib.com/theme/educature/
- **Stack:** Vite (latest) · React 19 · Tailwind CSS 4 · TypeScript (strict)
- **Screenshots:** ![preview](https://colorlib.com/wp/wp-content/uploads/sites/2/educature-free-template.jpeg)

## Design Tokens

Extracted from the live preview CSS (`css/main.css`):

| Token | Value | Notes |
|---|---|---|
| Heading font | `"Montserrat", sans-serif` | Google Fonts, weights 300–600 |
| Body font | `"Roboto", sans-serif` | Google Fonts, weights 300–500 |
| Brand gradient | `linear-gradient(90deg, #39cfca 0%, #3279bb 100%)` | Teal (#39cfca) → Blue (#3279bb). Used on primary buttons, search btn, course list hover, testimonial overlay, footer newsletter btn, footer social hover |
| Footer background | `#283367` | Dark navy |
| Feature card background | `#f1f9ff` | Very light blue |
| Section background (alt) | `#f9f9ff` | Near-white with blue tint |
| Body background | `#fff` | White |
| Primary button | border-radius 5px, padding 0 36px, line-height 42px, color #fff, gradient bg | Transparent variant: border 1px solid #fff, border-radius 0px, bg transparent → hover white |
| Search button | Same gradient as primary-btn, used in hero form |
| Feature item card | Padding 50px 40px, background #f1f9ff, hover transitions |
| Testimonial overlay | Gradient overlay on avatar thumbnails, active state opacity 0.8 |
| Footer columns | 4 x link-column (2-col) + 1 x newsletter (4-col) |
| Border radius general | 5px (buttons), 3px (inputs), 50% (avatars), 0 (transparent btns) |
| Accent colors (from CSS) | `#6382e6` blue, `#e66686` pink, `#f09359` orange, `#73fbaf` green, `#a367e7` purple — used on feature-item colored accents |

## Section Structure (order)

1. **Navbar** — Logo left, nav links right: Home, About, Courses, Pages (dropdown), Blog (dropdown), Contact. Fixed header.
2. **Hero (Banner)** — Fullscreen height (~900px), background image with dark gradient overlay (`overlay overlay-grad`). Heading: "We Rank the Best Courses on the Web". Search form with text input + "Search" button. "Top courses" subtitle + horizontal row of transparent pill-tags (Ruby on Rails, Python, Marketing, etc.).
3. **About** — Two-column: left = image, right = heading "Over 2500 Courses from 5 Platform" + paragraph + "Explore Courses" primary button. Light background (`#f9f9ff`).
4. **Courses** — Two-column (reversed): left = heading "This is Why We have Solid Idea" + paragraph + "Explore Courses" white button (`.primary-btn.white`), right = 2-column list of course categories with book icons (Development, IT & Software, Photography, Language, Life Science, Business, Social Science, Data Science, Design, Training, Humanities, Marketing).
5. **Features** — Centered section title "Features That Make Us Hero" + 3x2 grid of feature cards with icons (crown, briefcase, medal, key, files, headphone) and titles (Architecture, Interior Design, Concept Design, Lifetime Access, Source File Included, Live Support). Cards have `#f1f9ff` background.
6. **Faculty** — Centered section title "Faculty Members" + 4-column grid of faculty cards: avatar photo (rounded), name, designation "Sr. Faculty Data Science", bio paragraph, social icons (Facebook, Twitter, LinkedIn).
7. **Testimonials** — Carousel of testimonial items: quote icon, author name "Fanny Spencer", 5-star rating, testimonial text. Below: row of avatar thumbnails with gradient overlay (acts as carousel nav dots).
8. **Footer** — Dark navy (#283367) background. 5 columns: Top Products, Quick Links, Features, Resources, Newsletter (email input + arrow button). Footer bottom: copyright + social icons (Facebook, Twitter, Dribbble, Behance). Replace Colorlib attribution with "Made with Component Dock" + link to https://www.componentdock.com/.

## Gherkin Requirements

### Feature: Navbar
```
Scenario: Logo and nav links are visible
  Given the page loads
  Then a logo image is displayed on the left
  And nav links "Home", "About", "Courses", "Pages", "Blog", "Contact" are visible
  And "Pages" and "Blog" have dropdown sub-menus

Scenario: Navbar is fixed on scroll
  Given the user scrolls down
  Then the navbar remains sticky at the top of the viewport
```

### Feature: Hero Banner
```
Scenario: Hero section displays with background and search
  Given the page loads
  Then a fullscreen hero section is visible
  And the heading reads "We Rank the Best Courses on the Web"
  And a search input with placeholder "Search Courses" is visible
  And a "Search" button is visible next to the input

Scenario: Course tags are shown below search
  Given the hero section is visible
  Then transparent pill-shaped tags are displayed for "Ruby on Rails", "Python", "Marketing", and other courses
  And hovering a tag fills it with white background

Scenario: Search form is interactive
  Given the hero section is visible
  When the user types in the search input
  Then the text appears in the input field
  When the user clicks "Search"
  Then the form submits (default behavior)
```

### Feature: About Section
```
Scenario: About section displays image and text
  Given the user scrolls to the about section
  Then an image is displayed on the left column
  And the heading reads "Over 2500 Courses from 5 Platform"
  And a descriptive paragraph is visible
  And an "Explore Courses" button with gradient background is displayed
```

### Feature: Courses Section
```
Scenario: Courses section displays category list
  Given the user scrolls to the courses section
  Then a heading "This is Why We have Solid Idea" is visible on the left
  And a "Explore Courses" button with white style is displayed
  And a 2-column list of course categories is shown on the right
  And each category has a book icon and label

Scenario: Course category items have hover effect
  Given the courses list is visible
  When the user hovers over a category item
  Then the item background changes to the brand gradient
```

### Feature: Features Section
```
Scenario: Features section shows 6 feature cards in a grid
  Given the user scrolls to the features section
  Then a centered heading "Features That Make Us Hero" is displayed
  And a paragraph description is shown below the heading
  And 6 feature cards are displayed in a 3-column grid
  And each card has an icon, title, and description paragraph

Scenario: Feature cards have light blue background
  Given the features section is visible
  Then each feature card has a #f1f9ff background
```

### Feature: Faculty Section
```
Scenario: Faculty section shows 4 faculty members
  Given the user scrolls to the faculty section
  Then a centered heading "Faculty Members" is displayed
  And 4 faculty cards are shown in a row
  And each card has a circular avatar image
  And each card displays a name, designation, bio, and social icons (Facebook, Twitter, LinkedIn)
```

### Feature: Testimonials Section
```
Scenario: Testimonials carousel displays with avatars
  Given the user scrolls to the testimonials section
  Then a carousel of testimonial items is visible
  And each item has a quote icon, author name, 5-star rating, and testimonial text
  And a row of avatar thumbnails is shown below as carousel navigation

Scenario: Avatar thumbnails act as carousel controls
  Given the testimonials section is visible
  When the user clicks an avatar thumbnail
  Then the corresponding testimonial is displayed
  And the active avatar has a gradient overlay with higher opacity
```

### Feature: Footer
```
Scenario: Footer displays columns and newsletter
  Given the user scrolls to the footer
  Then a dark navy (#283367) background is visible
  And 4 link columns are displayed: "Top Products", "Quick Links", "Features", "Resources"
  And a Newsletter column shows an email input with placeholder "Your Email Address" and an arrow submit button

Scenario: Footer bottom shows copyright and social links
  Given the footer is visible
  Then a copyright line is displayed in the footer bottom
  And social icons (Facebook, Twitter, Dribbble, Behance) are visible
  And the footer links to Component Dock (https://www.componentdock.com/)
```

## Verification Checklist

- [ ] All sections render in the correct order: Navbar → Hero → About → Courses → Features → Faculty → Testimonials → Footer
- [ ] Brand gradient (#39cfca → #3279bb) is applied to primary buttons, search button, course hover, testimonial overlay, footer newsletter button
- [ ] Montserrat is used for headings; Roboto for body text
- [ ] Hero is fullscreen height with dark gradient overlay on background image
- [ ] Search form with input + button is functional
- [ ] Course tags render as transparent bordered pills, hover fills white
- [ ] About section: image left, text + CTA button right
- [ ] Courses section: text + white button left, category list right with book icons
- [ ] Features: 6 cards in 3x2 grid with #f1f9ff background
- [ ] Faculty: 4 member cards with circular avatars, names, roles, bios, social links
- [ ] Testimonials: carousel with quote icon, name, stars, text + avatar nav thumbnails
- [ ] Footer: dark navy bg, 5 columns (4 link cols + newsletter), copyright, social icons
- [ ] Footer attributes Component Dock (no ColorLib reference in app code)
- [ ] All placeholder images use picsum.photos with deterministic seeds
- [ ] Icons from lucide-react (crown, briefcase, medal, key, files, headphone, book, star, social)
- [ ] 100% test coverage for all components
- [ ] No ColorLib references in any app source file (comments, strings, imports)
