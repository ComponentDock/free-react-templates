# Template: KnowHub (Education / Online Learning)

## Purpose

Recreation of the ColorLib "Knowledge" template as a modern React 19 + Vite + Tailwind CSS 4 + TypeScript single-page application.

- **Source**: ColorLib Knowledge — https://colorlib.com/wp/template/knowledge/
- **Preview**: https://preview.colorlib.com/theme/knowledge/
- **New name**: `knowhub` (apps/knowhub, @free-react-templates/knowhub)
- **Stack**: React 19, Vite (latest), Tailwind CSS 4, TypeScript (strict)
- **Design tokens extracted from preview CSS**: see below

## Design tokens

### Colors

| Token              | Value     | Usage                                      |
| ------------------ | --------- | ------------------------------------------ |
| brand-primary      | `#4586ff` | Links, buttons, accent highlights          |
| brand-secondary    | `#5f97ff` | Button hover, border accents               |
| brand-accent       | `#F7AF1D` | Gold/yellow accent (some headings, icons)  |
| bg-dark            | `#302a39` | Search bar background, dark overlays       |
| bg-dark-2          | `#1a1a1a` | Footer background                          |
| bg-dark-3          | `#252525` | Secondary dark background                  |
| bg-light           | `#f2f3f7` | Light grey section backgrounds             |
| bg-white           | `#ffffff` | Default page background                    |
| text-body          | `#555555` | Body paragraph text                        |
| text-heading       | `#000000` | Heading text                               |
| text-muted         | `#999999` | Secondary/muted text                       |
| text-dark          | `#252525` | Dark text variant                          |

### Typography

- **Font family**: `"Rubik", Arial, sans-serif` (Google Font)
- **Body weight**: 300 (light)
- **Heading weight**: 400 (regular)
- **Base font size**: 17px
- **Line height**: 1.5

### Buttons

- **Primary**: `#4586ff` background, white text, no border-radius (sharp/square edges), padding ~12px 30px, uppercase text
- **Outline variant**: transparent background, `#4586ff` border, `#4586ff` text, hover fills
- **CTA / Discover**: larger padding, outline style
- **Hover**: background darkens or transitions to `#5f97ff`

### Section backgrounds

- Hero slider: full-screen background images (`img_bg_1.jpg` etc.) with dark overlay
- Search bar: `#302a39` dark background, floating over hero
- Classes/Courses: white background
- Counters: parallax background image with dark overlay
- Trainers/Instructors: white background
- Events: white background
- Blog: `#f2f3f7` light grey background
- Footer: `#1a1a1a` dark background

## Sections (in order)

### 1. Navbar

Fixed top navigation bar. Logo "Knowledge" on left. Nav links on right: Home, Courses, Teachers, Events, News, Contact. Transparent on hero, becomes solid on scroll. Hamburger menu for mobile.

### 2. Hero Slider (FlexSlider)

Full-viewport image slider with 4 slides. Each slide has:
- Full-width background image with dark overlay
- Large heading: "You only have to know one thing"
- Subheading with description text
- "Discover" button (outline style, plays Vimeo video on click — for React, just link or modal)

### 3. Search / Course Categories

Floating search bar with dark `#302a39` background, positioned over bottom of hero (`margin-top: -8em`). Contains category icons/tiles in a grid:
- Web Development
- Mobile Development
- Science Data
- Graphic Design
- Media Courses
- User Interface

Each category has an icon and label.

### 4. Popular Online Courses (Carousel)

Heading: "Popular Online Courses". Owl Carousel of course cards. Each card:
- Course image (top)
- Category label
- Course title (e.g. "Developing Mobile Apps Using Ruby on Rails")
- Duration/sessions info
- Price or "Free" badge

### 5. Counters / Statistics

Parallax background section with dark overlay. Contains:
- Animated counters (e.g. "Who are we" section with stats)
- Testimonial quote from "Dave Henderson"
- Number counters: students, courses, instructors, etc.

### 6. Instructors / Teachers

Heading: "Our Instructor". Grid of instructor cards. Each card:
- Instructor photo (circular or rounded)
- Name (e.g. "Olivia Young", "Daniel Anderson", "David Brook")
- Role/specialty
- Social media links

### 7. Our Courses (Detail list)

Heading: "Our Courses". List of detailed course cards (similar to section 4 but with more detail). Course cards with images, descriptions, and CTA buttons.

### 8. Events

Heading: "Upcoming Events". Event listing cards with:
- Date display
- Event title (e.g. "We Held Free Training for Basic Programming")
- Description text
- Read more link

### 9. Blog / News

Heading section on `#f2f3f7` light grey background. Blog post cards with:
- Post image
- Title
- Date
- Author
- Excerpt

### 10. Footer

Dark `#1a1a1a` background. Multi-column layout:
- Column 1: About / description
- Column 2: Course links
- Column 3: Quick links
- Column 4: Contact info
- Bottom: Copyright + "Made with Component Dock" link

## Gherkin scenarios

### Hero Slider
```gherkin
Feature: Hero Slider

  Scenario: Displays full-screen hero with heading and CTA
    Given the user loads the page
    Then a full-viewport hero section is visible
    And the heading "You only have to know one thing" is displayed
    And a "Discover" button is present

  Scenario: Hero slider transitions between slides
    Given the user is on the hero section
    When 5 seconds elapse
    Then the slide transitions to the next one
    And the heading and description update accordingly

  Scenario: Mobile responsive hero
    Given the user views on a 375px viewport
    Then the hero text is readable and centered
    And the CTA button is full-width
```

### Navbar
```gherkin
Feature: Navigation

  Scenario: Nav links are present
    Given the user loads the page
    Then the navbar displays links: Home, Courses, Teachers, Events, News, Contact

  Scenario: Navbar becomes solid on scroll
    Given the user scrolls past the hero
    Then the navbar background becomes opaque

  Scenario: Mobile hamburger menu
    Given the user views on a 375px viewport
    Then a hamburger menu icon is displayed
    And clicking it opens the mobile nav drawer
```

### Search / Categories
```gherkin
Feature: Course Categories Search

  Scenario: Category tiles are displayed
    Given the user views the search section
    Then 6 category tiles are shown: Web Development, Mobile Development, Science Data, Graphic Design, Media Courses, User Interface

  Scenario: Each category has an icon and label
    Given the user views a category tile
    Then it displays an icon and the category name
```

### Popular Courses Carousel
```gherkin
Feature: Popular Courses

  Scenario: Course cards are displayed in carousel
    Given the user views the Popular Online Courses section
    Then multiple course cards are visible

  Scenario: Course card contains required fields
    Given a course card is displayed
    Then it shows an image, category label, title, and session info
```

### Counters / Testimonials
```gherkin
Feature: Counters and Testimonials

  Scenario: Animated counters are displayed
    Given the user scrolls to the counters section
    Then numerical counters animate from 0 to their target values

  Scenario: Testimonial is shown
    Given the user views the counters section
    Then a testimonial quote from "Dave Henderson" is displayed
```

### Instructors
```gherkin
Feature: Instructors Section

  Scenario: Instructor cards are displayed
    Given the user views the Our Instructor section
    Then at least 3 instructor cards are shown

  Scenario: Instructor card contains required fields
    Given an instructor card is displayed
    Then it shows a photo, name, and role
```

### Events
```gherkin
Feature: Events Section

  Scenario: Upcoming events are listed
    Given the user views the Events section
    Then event cards are displayed with date, title, and description

  Scenario: Event card has read more link
    Given an event card is displayed
    Then a "Read more" or similar link is present
```

### Blog
```gherkin
Feature: Blog Section

  Scenario: Blog posts are displayed on light background
    Given the user views the blog section
    Then the section has a light grey (#f2f3f7) background
    And blog post cards show image, title, date, and excerpt
```

### Footer
```gherkin
Feature: Footer

  Scenario: Footer has multi-column layout
    Given the user scrolls to the footer
    Then a dark background footer is displayed
    And it contains at least 3 content columns

  Scenario: Footer links to Component Dock
    Given the user views the footer
    Then a link to "https://www.componentdock.com/" is present
    And the link text references "Component Dock"
```

## Verification checklist

- [ ] All 10 sections rendered in correct order
- [ ] Hero slider with 4 slides, auto-transition
- [ ] Floating search bar over hero with 6 category tiles
- [ ] Course carousel with cards (image + title + category)
- [ ] Counter section with animated numbers and testimonial
- [ ] Instructor grid (3+ cards with photo, name, role)
- [ ] Events section with date + title + description
- [ ] Blog section on light grey background
- [ ] Footer with dark background, multi-column, Component Dock link
- [ ] Brand color #4586ff used for buttons and links
- [ ] Font: Rubik loaded via Google Fonts
- [ ] Responsive: hamburger nav on mobile, stacked layout
- [ ] No ColorLib references in app code (provenance in spec only)
- [ ] `public/CNAME` = `knowhub.free.componentdock.com`
- [ ] `homepage` in package.json = `https://knowhub.free.componentdock.com`
- [ ] Footer links `https://www.componentdock.com/`
