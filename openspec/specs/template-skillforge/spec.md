# Template: SkillForge (Education / Online Course Platform)

## Purpose

Recreation of the ColorLib "Ezuca" template as a React 19 + Vite + Tailwind 4 + TypeScript single-page application.

- **Source:** ColorLib Ezuca — https://colorlib.com/wp/template/ezuca/
- **Preview:** https://preview.colorlib.com/theme/ezuca/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/ezuca-free-template.jpg
- **Stack:** Vite latest, React 19, Tailwind CSS 4, TypeScript strict
- **New name:** `skillforge` (apps/skillforge, @free-react-templates/skillforge)
- **Deploy target:** https://skillforge.free.componentdock.com

## Design Tokens

Extracted from the live preview's style.css and HTML:

### Colors
| Token | Hex | Usage |
|-------|-----|-------|
| brand-green | #19c880 | Primary CTA buttons, icon accents, hero overlay accent |
| brand-green-light | #34d986 | Gradient variant, hover states |
| brand-gold | #f3a90b | Star ratings, secondary accent |
| brand-blue | #49a7f3 | Secondary button accent (about section) |
| brand-blue-deep | #4b6cd0 | Testimonial section overlay |
| bg-light | #f3f3f3 | Section backgrounds (featured courses, about) |
| bg-lighter | #f7f7f7 | Alternate section bg |
| text-dark | #383749 | Primary text, headings |
| text-medium | #595959 | Body text |
| text-muted | #757686 | Secondary text, meta |
| text-border | #c0c1cd | Borders, dividers |
| white | #fff | Card backgrounds, footer widgets bg |
| event-red | #f03b3b | Event date badge |
| event-yellow | #f0c605 | Event month badge |

### Typography
- **Primary font:** Roboto, sans-serif (Google Fonts)
- **Icon fonts:** FontAwesome, Elegant Icons, Themify Icons
- **Headings:** Bold, dark (#383749)

### Spacing & Shape
- **Border radius:** 0 (cards, buttons default), 2px (small elements), 10px (rounded elements), 50% (avatars, rating stars)
- **Button style:** Bootstrap `.btn` — flat, no radius by default, border outline or solid fill
- **Section padding:** generous vertical padding (Bootstrap py-* classes)
- **Grid:** Bootstrap 12-col grid, container-fluid for icon boxes, container for others

### Hero
- Full-width dark overlay (semi-transparent black) on a background image
- Left-aligned content: subtitle (h4), headline (h1), description paragraph, "read more" link
- Green accent on subtitle text

## Gherkin Requirements

### Section 1: Navbar
Feature: Navigation bar

  Scenario: Desktop navbar displays site logo and nav links
    Given the user is on desktop viewport
    Then a top info bar shows email and phone
    And a sticky navbar shows the "SkillForge" logo on the left
    And nav links "Home, About, Courses, Events, Blog, Pages, Contact" are visible on the right
    And a cart icon is present

  Scenario: Mobile hamburger menu toggles nav
    Given the user is on mobile viewport
    When the user taps the hamburger icon
    Then the nav links menu expands/collapses

### Section 2: Hero
Feature: Hero banner

  Scenario: Hero displays headline and CTA
    Given the hero section is visible
    Then the subtitle reads "Get started with online courses"
    And the headline reads "best online Learning system"
    And a description paragraph is shown
    And a "read more" link is visible
    And the background is a dark overlay on an image

### Section 3: Icon Boxes
Feature: Feature icon boxes

  Scenario: Four icon boxes display in a row
    Given the icon boxes section is visible
    Then 4 icon boxes are displayed side by side
    Each box has an icon (Themify), a title, a description, and a "read more" arrow link

### Section 4: Featured Courses Horizontal
Feature: Horizontal featured courses

  Scenario: Two course cards display side by side
    Given the horizontal featured courses section is visible
    Then a "Featured Courses" heading is shown with a "view all" button
    And 2 course cards are displayed in a 2-column grid
    Each card has a thumbnail image, star rating (4/5), title, author, date, and price

### Section 5: About Section
Feature: About with stats and video

  Scenario: About section shows stats and video
    Given the about section is visible
    Then "About SkillForge" heading is shown
    And 4 stat counters are displayed: 50M+ Students, 30K+ Courses, 340M+ Instructors, 20+ Countries
    And a video thumbnail with a play button overlay is shown on the right

### Section 6: Testimonials
Feature: Testimonial slider

  Scenario: Testimonials carousel shows user quotes
    Given the testimonial section is visible
    Then a Swiper carousel displays 3 testimonial slides
    Each slide shows a user avatar on the left, quote text, and user name with university affiliation
    And pagination dots are visible below

### Section 7: Featured Courses Vertical
Feature: Vertical featured courses grid

  Scenario: Course grid with filter tabs
    Given the vertical featured courses section is visible
    Then a "Featured Courses" heading is shown
    And filter tabs "All, Business, Design, Web Development, Photography" are displayed
    And 6 course cards are shown in a 3-column grid (2 rows)
    Each card has thumbnail, title, author, date, price, and star rating
    And a "view all courses" button is centered below

### Section 8: Latest News & Events
Feature: News and events

  Scenario: Events section with featured event and event list
    Given the latest news events section is visible
    Then a "Latest News & Events" heading is shown
    And a featured event with large image, date badge, title, location, and duration is on the left
    And 2-3 smaller event items with thumbnails, dates, titles are on the right

### Section 9: Gallery
Feature: Photo gallery

  Scenario: Masonry-style gallery grid
    Given the gallery section is visible
    Then a grid of 14 images is displayed in a masonry layout
    And grid items use 1x1, 2x2, 2x1, 3x1 size classes

### Section 10: Client Logos
Feature: Client/partner logos

  Scenario: Logo row displays 5 partner logos
    Given the client logos section is visible
    Then 5 grayscale partner logos are shown in a horizontal row

### Section 11: Footer
Feature: Site footer

  Scenario: Footer has 4 columns and bottom bar
    Given the footer is visible
    Then the footer widgets area has 4 columns: About with logo, Contact Us, Quick Links (2-col), Follow Us (social icons)
    And a footer bar shows app store badges and bottom nav links (DPA, Terms, Privacy)
    And the footer links to https://www.componentdock.com/

## Verification Checklist

- [ ] All 11 sections render in correct order
- [ ] Design tokens (colors, fonts, radii) match extracted values
- [ ] Responsive: 1-col mobile, 2-col tablet, multi-col desktop
- [ ] Testimonials use Swiper (or equivalent carousel)
- [ ] Gallery uses masonry layout
- [ ] Footer links to Component Dock
- [ ] No ColorLib references in app code
- [ ] Placeholder images via picsum.photos with deterministic seeds
- [ ] Google Fonts (Roboto) loaded in index.html
- [ ] lucide-react icons used (not FontAwesome)
