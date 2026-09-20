# Template: LearnPath (Education / Online Learning)

## Purpose

Recreation of the ColorLib **Ezuca** template as a React 19 + Vite + Tailwind 4 + TypeScript template.

- **Source:** https://colorlib.com/wp/template/ezuca/
- **Preview:** https://preview.colorlib.com/theme/ezuca/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/ezuca-free-template.jpg
- **Stack:** React 19, Vite, Tailwind CSS 4, TypeScript

## Design Tokens (extracted from preview stylesheet)

| Token | Value | Usage |
|---|---|---|
| Brand color | `#19c880` | Icons, search button bg, accent text, star highlights, icon-box highlights |
| Brand hover | `#34d986` | Button hover bg, button border |
| Text primary | `#383749` | Body text, links |
| Text secondary | `#757686` | Muted text, placeholders, visited links |
| Border color | `#ebebeb` | Card borders, header dividers |
| Background light | `#f7f7f7` | Course card bg, view-all button bg |
| Background input | `#f3f3f3` | Search input bg |
| Star rating | `#f3a90b` | Filled star color |
| Font family | `Roboto` (300, 400, 500, 700) | Body + headings |
| Button radius | `0` (square) | Sharp rectangular buttons |
| Button border | `2px solid #34d986` | Outlined CTA buttons |
| Hero overlay | `rgba(21,20,33,.5)` | Dark overlay on hero background image |

## Section Structure (in DOM order)

### 1. Top Header Bar
- Email + phone contact info (left)
- Search input + Register/Login links (right)
- White background, brand-color icons

### 2. Navigation Bar
- Logo text "LearnPath" (white text with brand-color accent on last chars)
- Nav links: Home, About, Courses, Blog, Contact
- Cart icon on right
- Semi-transparent white background overlaying hero

### 3. Hero Section
- Full-width background image with dark overlay (50% opacity)
- Heading: "best online Learning system"
- Subtitle paragraph
- "read more" CTA button (outlined, square)

### 4. Icon Boxes (Feature Highlights)
- 4-column row, full-width
- Each: icon (teal/green) + title + description + "read more" link
- Items: Learn From Experts, Book Library & Store, Best Course Online, Best Industry Leaders
- Light/white background

### 5. Featured Courses (Horizontal)
- 2-column layout with horizontal course cards
- Each card: thumbnail image, star rating (5 stars), course title, author, date, price (free or discounted)
- "view all" button

### 6. About Section
- 2-column: left = heading + description + 4 stats counters; right = video placeholder
- Stats: 50M+ Students, 30K+ Active Courses, 340M+ Instructors, 20+ Countries
- Counter numbers in large brand-color font

### 7. Testimonials
- Swiper/slider with avatar + quote + user name + university
- Pagination dots at bottom
- White/light background

### 8. Featured Courses (Vertical Grid)
- Category filter tabs: All, Business, Design, Web Development, Photography
- 3-column grid of 6 course cards
- Each: thumbnail, title, author, date, price, star rating
- "view all courses" button centered below

### 9. Latest News & Events
- 2-column layout
- Left: featured event with large image + date badge overlay + title + location + duration
- Right: 2 blog post cards with thumbnail + date + title + author + comments + excerpt

### 10. Gallery
- Mosaic grid of images (mixed 1x1, 2x1, 2x2, 3x1 sizes)
- Full-width, no padding

### 11. Client Logos
- 5 partner/brand logos in a centered row
- Light/white background

### 12. Footer
- 4-column layout: About (logo + description + copyright) | Contact Us | Quick Links (2 columns) | Follow Us (social icons)
- Dark background

## Gherkin Requirements

### Feature: LearnPath Education Template

```gherkin
Feature: LearnPath template
  As a visitor to the LearnPath education site
  I want to browse courses, read news, and contact the institution
  So that I can find and enroll in online learning programs

  Background:
    Given the LearnPath template is loaded
    And the viewport is desktop (1280px+)

  Scenario: Top header bar displays contact info and search
    Then I should see an email address
    And I should see a phone number
    And I should see a search input with placeholder "What would you like to learn?"
    And I should see Register and Login links

  Scenario: Navigation bar shows all sections
    Then I should see the "LearnPath" logo
    And I should see nav links for Home, About, Courses, Blog, Contact
    And I should see a cart icon

  Scenario: Hero section displays headline and CTA
    Then I should see the heading "best online Learning system"
    And I should see a subtitle paragraph
    And I should see a "read more" button

  Scenario: Icon boxes show four feature highlights
    Then I should see 4 feature boxes
    And each box should have an icon, title, description, and "read more" link
    And the boxes should be arranged in a 4-column row

  Scenario: Featured courses horizontal section shows two course cards
    Then I should see the heading "Featured Courses"
    And I should see 2 course cards in a horizontal layout
    And each card should have a thumbnail, star rating, title, author, date, and price
    And I should see a "view all" button

  Scenario: About section shows stats and video
    Then I should see the heading "About LearnPath"
    And I should see 4 stat counters with labels
    And the counters should show numbers: 50M+, 30K+, 340M+, 20+
    And I should see a video placeholder on the right

  Scenario: Testimonials slider shows quotes
    Then I should see a testimonial slider
    And each slide should have an avatar, quote text, user name, and university

  Scenario: Featured courses grid shows filterable course cards
    Then I should see category filter tabs: All, Business, Design, Web Development, Photography
    And I should see 6 course cards in a 3-column grid
    And I should see a "view all courses" button

  Scenario: Latest news and events section
    Then I should see a featured event with date badge, title, location, and duration
    And I should see 2 blog post cards with thumbnail, date, title, author, comments count, and excerpt

  Scenario: Gallery mosaic grid
    Then I should see a mosaic image grid
    And the grid should contain images of mixed aspect ratios

  Scenario: Client logos row
    Then I should see 5 client/partner logos in a row

  Scenario: Footer shows contact and links
    Then I should see 4 footer columns: About, Contact Us, Quick Links, Follow Us
    And the About column should have logo and copyright
    And the Follow Us column should have social media icon links
    And the footer should link to https://www.componentdock.com/

  Scenario: Responsive layout
    Given the viewport is mobile (375px)
    Then the nav should collapse into a hamburger menu
    And icon boxes should stack vertically
    And course cards should stack vertically
    And footer columns should stack vertically
```

## Verification Checklist

- [ ] All 12 sections present and in correct DOM order
- [ ] Design tokens match: brand #19c880, font Roboto, square buttons, #383749 text
- [ ] Hero has background image with dark overlay
- [ ] Stats counters display correct numbers with labels
- [ ] Course cards show star ratings, prices (free or discounted), author, date
- [ ] Category filter tabs in featured courses grid
- [ ] Testimonial slider with pagination
- [ ] News/events section with date badge overlay on featured event
- [ ] Gallery mosaic with mixed aspect ratios
- [ ] Footer links to componentdock.com
- [ ] No ColorLib references in app code
- [ ] Responsive: hamburger nav, stacked cards/footer on mobile
- [ ] Placeholder images use picsum.photos/seed/learnpath-N/W/H
- [ ] Google Fonts link for Roboto in index.html
- [ ] Icons from lucide-react (replacing Font Awesome / Themify)
