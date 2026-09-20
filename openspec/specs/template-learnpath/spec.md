# Template: LearnPath (Education / Online Learning)

## Purpose

Recreation of the ColorLib **Ezuca** template as a React 19 + Vite + Tailwind 4 + TypeScript template.

- **Source:** https://colorlib.com/wp/template/ezuca/
- **Preview:** https://preview.colorlib.com/theme/ezuca/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/ezuca-free-template.jpg
- **Stack:** React 19, Vite, Tailwind CSS 4, TypeScript

## Design Tokens (extracted from preview stylesheet)

| Token            | Value                         | Usage                                                                      |
| ---------------- | ----------------------------- | -------------------------------------------------------------------------- |
| Brand color      | `#19c880`                     | Icons, search button bg, accent text, star highlights, icon-box highlights |
| Brand hover      | `#34d986`                     | Button hover bg, button border                                             |
| Text primary     | `#383749`                     | Body text, links                                                           |
| Text secondary   | `#757686`                     | Muted text, placeholders, visited links                                    |
| Border color     | `#ebebeb`                     | Card borders, header dividers                                              |
| Background light | `#f7f7f7`                     | Course card bg, view-all button bg                                         |
| Background input | `#f3f3f3`                     | Search input bg                                                            |
| Star rating      | `#f3a90b`                     | Filled star color                                                          |
| Font family      | `Roboto` (300, 400, 500, 700) | Body + headings                                                            |
| Button radius    | `0` (square)                  | Sharp rectangular buttons                                                  |
| Button border    | `2px solid #34d986`           | Outlined CTA buttons                                                       |
| Hero overlay     | `rgba(21,20,33,.5)`           | Dark overlay on hero background image                                      |

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

## Requirements

### Requirement: Top header bar displays contact info and search

The template SHALL display a top header bar with email and phone contact info on the left, and a search input with Register/Login links on the right.

#### Scenario: Contact info visible

- **WHEN** the page loads
- **THEN** I should see an email address and phone number
- **AND** I should see a search input
- **AND** I should see Register and Login links

### Requirement: Navigation bar shows all sections

The template SHALL display a navigation bar with the LearnPath logo, nav links (Home, About, Courses, Blog, Contact), and a cart icon.

#### Scenario: Nav links visible

- **WHEN** the page loads
- **THEN** I should see the LearnPath logo
- **AND** I should see nav links for Home, About, Courses, Blog, Contact
- **AND** I should see a cart icon

### Requirement: Hero section displays headline and CTA

The template SHALL display a hero section with a background image, dark overlay, heading, subtitle, and a read more CTA button.

#### Scenario: Hero content visible

- **WHEN** the page loads
- **THEN** I should see the heading "best online Learning system"
- **AND** I should see a subtitle paragraph
- **AND** I should see a "read more" button

### Requirement: Icon boxes show four feature highlights

The template SHALL display 4 icon boxes in a row, each with an icon, title, description, and read more link.

#### Scenario: Feature highlights visible

- **WHEN** the page loads
- **THEN** I should see 4 feature boxes
- **AND** each box should have an icon, title, description, and "read more" link

### Requirement: Featured courses horizontal section

The template SHALL display 2 horizontal course cards with thumbnails, star ratings, titles, authors, dates, and prices.

#### Scenario: Horizontal course cards visible

- **WHEN** the page loads
- **THEN** I should see the heading "Featured Courses"
- **AND** I should see 2 course cards in a horizontal layout
- **AND** I should see a "view all" button

### Requirement: About section shows stats and video

The template SHALL display an about section with a heading, description, 4 stat counters, and a video placeholder.

#### Scenario: About content visible

- **WHEN** the page loads
- **THEN** I should see the heading "About LearnPath"
- **AND** I should see 4 stat counters with labels
- **AND** I should see a video placeholder

### Requirement: Testimonials slider shows quotes

The template SHALL display a testimonial slider with avatar, quote, name, and university for each slide, with navigation dots.

#### Scenario: Testimonials visible

- **WHEN** the page loads
- **THEN** I should see a testimonial slider
- **AND** each slide should have an avatar, quote text, user name, and university

### Requirement: Featured courses grid with filter tabs

The template SHALL display a 3-column grid of 6 course cards with category filter tabs (All, Business, Design, Web Development, Photography).

#### Scenario: Course grid visible

- **WHEN** the page loads
- **THEN** I should see category filter tabs
- **AND** I should see 6 course cards in a 3-column grid
- **AND** I should see a "view all courses" button

### Requirement: Latest news and events section

The template SHALL display a news/events section with a featured event (image, date badge, title, location, duration) and 2 blog post cards.

#### Scenario: News and events visible

- **WHEN** the page loads
- **THEN** I should see a featured event with date badge, title, location, and duration
- **AND** I should see 2 blog post cards

### Requirement: Gallery mosaic grid

The template SHALL display a full-width mosaic image grid with mixed aspect ratios.

#### Scenario: Gallery visible

- **WHEN** the page loads
- **THEN** I should see a mosaic image grid with images of mixed aspect ratios

### Requirement: Client logos row

The template SHALL display 5 partner/brand logos in a centered row.

#### Scenario: Client logos visible

- **WHEN** the page loads
- **THEN** I should see 5 client/partner logos in a row

### Requirement: Footer shows contact and links

The template SHALL display a 4-column footer (About, Contact Us, Quick Links, Follow Us) with a bottom bar linking to componentdock.com.

#### Scenario: Footer visible

- **WHEN** the page loads
- **THEN** I should see 4 footer columns
- **AND** the footer should link to https://www.componentdock.com/

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
