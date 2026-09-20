# Template: Studium (Education / Online Learning)

## Purpose

Recreation of ColorLib **Studylab** as a React 19 + Vite + Tailwind 4 + TypeScript
template. Studium is an online learning platform landing page featuring a hero with
registration form, course categories, course cards, testimonials, features, blog
posts, and a multi-column footer.

- **Source slug:** `studylab`
- **Preview URL:** https://preview.colorlib.com/theme/studylab/
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript (strict)

## Design tokens

Extracted from the live preview stylesheet (`css/style.css`) and screenshot analysis.

| Token            | Value                                      | Notes                                      |
| ---------------- | ------------------------------------------ | ------------------------------------------ |
| Brand blue       | `#0062cc` / `#007bff`                      | Primary CTA buttons, links, navbar active  |
| Accent teal      | `#24d2c8`                                  | Feature icon accents, secondary highlights |
| Accent magenta   | `#ce4be8` / `#e449ad`                      | "Register Now" heading, form accents       |
| Accent orange    | `#fc9927`                                  | "See All Courses" button, highlights       |
| Light blue       | `#4986fc`                                  | Secondary button variant                   |
| Dark bg          | `#1a1a1a` / `#1d2124`                      | Footer background, dark sections           |
| Light bg         | `#f9faff` / `#f7f7f7`                      | Section alternating backgrounds            |
| Text primary     | `#16181b`                                  | Body text                                  |
| Text muted       | `#999999` / `#b3b3b3`                      | Secondary text, placeholders               |
| Font family      | `"Poppins", Arial, sans-serif`             | Global body + headings                     |
| Button radius    | `40px` / `50%`                             | Pill-shaped CTAs and category circles      |
| Section bg-light | `#f8f9fa`                                  | Alternating section backgrounds            |
| Navbar           | Dark bg (`#1a1a1a`), transparent on scroll | `.navbar-dark` Bootstrap pattern           |

### Visual design (from screenshot)

- **Hero:** Full-height background image (student with laptop on floor). Left side:
  "WELCOME TO STUDYLAB" subtitle + "We Are Online Platform For Make Learn" headline
  - description text + two CTA buttons ("Our Course" solid blue, "Learn More" outline).
    Right side: white registration card with "Register Now" heading (magenta), form
    fields (Full Name, Email, Password, Confirm Password), blue submit button, and
    "Already have an account? Sign In" link.
- **Categories section:** White background, "START LEARNING TODAY" subtitle + "Browse
  Online Course Category" heading. Six circular image thumbnails with overlay text
  (IT & Software, Music, Photography, Marketing, Health, Audio Video) each showing
  "100+ courses". Orange "See All Courses" button centered below.
- **Course cards section:** "Pick Your Course" heading. Grid of course cards with
  image thumbnails, course titles, pricing or metadata. "See All Courses" CTA.
- **Features section:** "Learn Anything You Want Today" heading with feature items.
- **Testimonials section:** Light bg, "What Are Students Says" heading with
  testimonial cards (avatar, name, quote).
- **About section:** "We Are StudyLab An Online Learning Center" heading with
  description and stats.
- **Services/features grid:** Four icon+title+description cards (Top Quality Content,
  Highly Skilled Instructor, World Class Quiz, Get Certified).
- **Blog section:** "Recent Post" heading with three blog post cards (image, title,
  "Read more" link).
- **Footer:** Dark background, four columns (About, Help Desk, Recent Courses,
  Have a Questions? / newsletter form). Copyright bar at bottom with "Component Dock"
  link.

## Gherkin requirements

### Feature: Hero section

```gherkin
Scenario: Hero renders welcome headline and registration form
  Given the user visits the Studium landing page
  Then the hero section displays "We Are Online Platform For Make Learn" headline
  And the hero has a background image with overlay
  And a registration form is visible with fields: Full Name, Email Address, Password, Confirm Password
  And the form has a "Register Now" heading in magenta
  And two CTA buttons are present: "Our Course" (solid blue) and "Learn More" (outline)
  And a "Sign In" link is visible below the form

Scenario: Hero form has proper input types
  Given the hero registration form
  Then the Email Address field uses type "email"
  And the Password field uses type "password"
  And the Confirm Password field uses type "password"
```

### Feature: Navbar

```gherkin
Scenario: Navbar displays brand and navigation links
  Given the user visits the Studium page
  Then the navbar shows the "Studium" brand name
  And navigation links include: Home, About, Course, Instructor, Blog, Contact
  And the navbar is dark-themed with transparent background
```

### Feature: Course categories

```gherkin
Scenario: Course categories display circular thumbnails
  Given the user scrolls to the categories section
  Then the section heading reads "Browse Online Course Category"
  And six category circles are displayed: IT & Software, Music, Photography, Marketing, Health, Audio Video
  And each circle shows "100+ courses" text
  And a "See All Courses" button is centered below the categories

Scenario: Category circles are clickable
  Given the categories section
  Then each category circle is a clickable element
```

### Feature: Course cards

```gherkin
Scenario: Course cards display course information
  Given the user scrolls to the courses section
  Then the section heading reads "Pick Your Course"
  And multiple course cards are displayed in a grid
  And each card has an image, title, and description
  And a "See All Courses" button is available
```

### Feature: Features / services

```gherkin
Scenario: Features section highlights platform benefits
  Given the user scrolls to the features section
  Then four feature items are displayed: Top Quality Content, Highly Skilled Instructor, World Class Quiz, Get Certified
  And each feature has an icon, title, and description
```

### Feature: Testimonials

```gherkin
Scenario: Testimonials section shows student reviews
  Given the user scrolls to the testimonials section
  Then the section heading reads "What Are Students Says"
  And testimonial cards display student quotes
  And each card has an avatar and student name
```

### Feature: About section

```gherkin
Scenario: About section provides platform description
  Given the user scrolls to the about section
  Then the heading reads "We Are StudyLab An Online Learning Center"
  And a description paragraph is present
```

### Feature: Blog section

```gherkin
Scenario: Blog section displays recent posts
  Given the user scrolls to the blog section
  Then the heading reads "Recent Post"
  And three blog post cards are displayed
  And each card has an image, title, and "Read more" link
```

### Feature: Footer

```gherkin
Scenario: Footer has multi-column layout with Component Dock link
  Given the user scrolls to the footer
  Then the footer has a dark background
  And four columns are present: About, Help Desk, Recent Courses, Have a Questions?
  And the footer links to https://www.componentdock.com/ as "Component Dock"
  And a copyright notice is displayed
```

## Verification checklist

- [ ] Hero section renders with background image, headline, description, two CTAs, and registration form
- [ ] Navbar shows brand name + nav links with dark theme
- [ ] Course categories display six circular thumbnails with course counts
- [ ] Course cards render in a grid with images and metadata
- [ ] Features section shows four icon+title+description cards
- [ ] Testimonials display student quotes with avatars
- [ ] About section has heading and description
- [ ] Blog section shows three post cards with "Read more" links
- [ ] Footer has four columns, dark background, Component Dock link
- [ ] All buttons use pill-shaped border-radius (40px)
- [ ] Font family is Poppins throughout
- [ ] Brand colors match: blue #0062cc, teal #24d2c8, magenta #ce4be8, orange #fc9927
- [ ] Sections alternate between white and light (#f9faff / #f7f7f7) backgrounds
- [ ] No ColorLib references in app code (provenance only in spec + TEMPLATES.md)
- [ ] Footer links to https://www.componentdock.com/
