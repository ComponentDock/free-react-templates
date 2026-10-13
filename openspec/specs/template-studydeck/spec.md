# Template: StudyDeck (Education / Online Learning Platform)

## Purpose

Recreation of the ColorLib "Studylab" template as a modern React 19 + Vite + Tailwind CSS 4 + TypeScript single-page application.

- **Source**: ColorLib Studylab — https://colorlib.com/wp/template/studylab/
- **Preview**: https://preview.colorlib.com/theme/studylab/
- **New name**: `studydeck` (apps/studydeck, @free-react-templates/studydeck)
- **Stack**: React 19, Vite (latest), Tailwind CSS 4, TypeScript (strict)
- **Design tokens extracted from preview CSS**: see below

## Design tokens

### Colors

| Token              | Value     | Usage                                          |
| ------------------ | --------- | ---------------------------------------------- |
| brand-primary      | `#4986fc` | Primary buttons, links, accent highlights      |
| brand-teal         | `#24d2c8` | Secondary accent, category icons, highlights   |
| brand-orange       | `#fc9927` | Category tile accent (Music, Photography etc.) |
| brand-purple       | `#ce4be8` | Category tile accent                            |
| brand-pink         | `#e449ad` | Category tile accent                            |
| bg-light           | `#f9faff` | Light section backgrounds                      |
| bg-white           | `#ffffff` | Default page background                        |
| bg-dark            | `#000000` | Hero overlay, dark sections                    |
| text-heading       | `#000000` | Heading text                                   |
| text-body          | `#212529` | Body paragraph text                            |
| text-muted         | `#6c757d` | Secondary/muted text                           |

### Typography

- **Font family**: `"Poppins", sans-serif` (Google Font)
- **Body weight**: 400
- **Heading weight**: 600-700
- **Base font size**: 16px (Bootstrap default)
- **Line height**: 1.5

### Buttons

- **Primary**: `#4986fc` background, white text, rounded (border-radius ~4px), padding ~12px 30px
- **Outline variant**: transparent background, `#4986fc` border, hover fills
- **CTA (Register Now)**: larger, centered
- **Hover**: darkens or transitions

### Section backgrounds

- Hero: full-screen background image with dark overlay, registration form overlay
- Course Categories: white background, colored icon tiles
- Popular Courses: white background, card grid
- Counters: background image with dark overlay
- About: white background with image
- Testimonials: `#f9faff` light background, carousel
- Services/Features: white background, icon grid
- Blog: `#f9faff` light background
- Footer: dark background

## Sections (in order)

### 1. Navbar

Fixed top navigation. Logo "Study" on left. Nav links: Home, About, Course, Instructor, Blog, Contact. Hamburger menu for mobile.

### 2. Hero Section

Full-viewport hero with background image and dark overlay. Contains:
- Heading: "Welcome to StudyLab"
- Subheading: "We Are Online Platform For Make Learn"
- Description text
- Two CTAs: "Our Course" and "Learn More"
- Registration form overlay on right side (Full Name, Email, Password, Confirm Password, Sign In link)

### 3. Course Categories

Heading: "Browse Online Course Category". Grid of category tiles with colored icons:
- IT & Software (100 courses)
- Music
- Photography
- Marketing
- Health
- Audio Video

"See All Courses" link at bottom.

### 4. Popular Courses

Heading: "Pick Your Course". Grid of course cards. Each card:
- Course image
- Category badge (e.g. "Software")
- Title (e.g. "Design for the web with adobe photoshop")
- Instructor name and avatar
- Rating/reviews count
- Price (e.g. "$199")

### 5. Counters / Stats

Background image section with dark overlay. Animated counters:
- Online Courses
- Students Enrolled
- Expert Instructors
- Hours Content

Heading: "Enhanced Your Skills"

### 6. About Section

Heading: "Learn Anything You Want Today". Two-column layout:
- Left: description text
- Right: image
- CTA: "Get in touch with us"

### 7. Testimonials

Light background (`#f9faff`). Heading: "What Are Students Says". Carousel of testimonial cards with:
- Quote text
- Name (e.g. "Roger Scott")
- Role (e.g. "Marketing Manager")

### 8. Services / Features

Heading: "We Are StudyLab An Online Learning Center". Features grid with icon cards:
- Top Quality Content
- Highly Skilled Instructor
- World Class Quiz
- Get Certified

### 9. Blog

Light background. Heading: "Our Blog" / "Recent Post". Blog post cards with:
- Image
- Date
- Author
- Title
- Excerpt
- "Read more" link

### 10. Footer

Dark background. Multi-column layout:
- Help Desk / Customer Care
- Legal Help / Services
- Privacy and Policy / Refund Policy
- Recent Courses links
- Contact info (Call Us)
- Social links

## Requirements

### Hero Section

Feature: Hero Section

#### Scenario: Displays hero with heading and registration form

- **GIVEN** the user loads the page
- **THEN** a full-viewport hero section is visible
- **AND** the heading "Welcome to StudyLab" is displayed
- **AND** a registration form with Name, Email, Password fields is shown

#### Scenario: Hero CTAs are present

- **GIVEN** the user views the hero
- **THEN** "Our Course" and "Learn More" buttons are visible

#### Scenario: Mobile responsive hero

- **GIVEN** the user views on a 375px viewport
- **THEN** the hero text is readable and centered
- **AND** the registration form stacks below the text

### Navbar

Feature: Navigation

#### Scenario: Nav links are present

- **GIVEN** the user loads the page
- **THEN** the navbar displays links: Home, About, Course, Instructor, Blog, Contact

#### Scenario: Mobile hamburger menu

- **GIVEN** the user views on a 375px viewport
- **THEN** a hamburger menu icon is displayed
- **AND** clicking it opens the mobile nav drawer

### Course Categories

Feature: Course Categories

#### Scenario: Category tiles are displayed

- **GIVEN** the user views the categories section
- **THEN** 6 category tiles are shown: IT & Software, Music, Photography, Marketing, Health, Audio Video

#### Scenario: Category tile has course count

- **GIVEN** a category tile is displayed
- **THEN** it shows an icon, name, and course count

#### Scenario: See All Courses link present

- **GIVEN** the user views the categories section
- **THEN** a "See All Courses" link is displayed

### Popular Courses

Feature: Popular Courses

#### Scenario: Course cards are displayed

- **GIVEN** the user views the courses section
- **THEN** multiple course cards are shown in a grid

#### Scenario: Course card contains required fields

- **GIVEN** a course card is displayed
- **THEN** it shows an image, category badge, title, instructor, and price

### Counters

Feature: Statistics Counters

#### Scenario: Animated counters are displayed

- **GIVEN** the user scrolls to the counters section
- **THEN** numerical counters animate from 0 to their target values
- **AND** counters show: Online Courses, Students Enrolled, Expert Instructors, Hours Content

#### Scenario: Section has background image with overlay

- **GIVEN** the user views the counters section
- **THEN** a background image with dark overlay is visible

### About

Feature: About Section

#### Scenario: About section displays with image

- **GIVEN** the user views the about section
- **THEN** the heading "Learn Anything You Want Today" is shown
- **AND** a description text and image are displayed side by side

#### Scenario: Contact CTA present

- **GIVEN** the user views the about section
- **THEN** a "Get in touch with us" button is visible

### Testimonials

Feature: Testimonials

#### Scenario: Testimonial carousel is displayed

- **GIVEN** the user views the testimonials section
- **THEN** testimonial cards with quote, name, and role are shown

#### Scenario: Section has light background

- **GIVEN** the user views the testimonials section
- **THEN** the background is light (#f9faff)

### Services

Feature: Services / Features

#### Scenario: Feature cards are displayed

- **GIVEN** the user views the services section
- **THEN** 4 feature cards are shown: Top Quality Content, Highly Skilled Instructor, World Class Quiz, Get Certified

#### Scenario: Each feature has an icon

- **GIVEN** a feature card is displayed
- **THEN** it shows an icon and title with description

### Blog

Feature: Blog Section

#### Scenario: Blog posts are displayed

- **GIVEN** the user views the blog section
- **THEN** blog post cards show image, date, author, title, and excerpt

#### Scenario: Blog section has light background

- **GIVEN** the user views the blog section
- **THEN** the background is light

### Footer

Feature: Footer

#### Scenario: Footer has multi-column layout

- **GIVEN** the user scrolls to the footer
- **THEN** a dark background footer is displayed
- **AND** it contains columns: Help Desk, Legal, Courses, Contact

#### Scenario: Footer links to Component Dock

- **GIVEN** the user views the footer
- **THEN** a link to "https://www.componentdock.com/" is present
- **AND** the link text references "Component Dock"

## Verification checklist

- [ ] All 10 sections rendered in correct order
- [ ] Hero with background image, heading, registration form
- [ ] Course categories with 6 colored icon tiles
- [ ] Course card grid with images, prices, instructors
- [ ] Counter section with animated numbers and dark overlay
- [ ] About section with text and image side-by-side
- [ ] Testimonial carousel on light background
- [ ] Services grid with 4 feature cards
- [ ] Blog section with post cards
- [ ] Footer with dark background, multi-column, Component Dock link
- [ ] Brand color #4986fc used for buttons and links
- [ ] Font: Poppins loaded via Google Fonts
- [ ] Responsive: hamburger nav on mobile, stacked layout
- [ ] No ColorLib references in app code (provenance in spec only)
- [ ] `public/CNAME` = `studydeck.free.componentdock.com`
- [ ] `homepage` in package.json = `https://studydeck.free.componentdock.com`
- [ ] Footer links `https://www.componentdock.com/`
