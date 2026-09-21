# Template: GritBox (Health & Fitness — Crossfit/Gym)

## Purpose

Recreation of ColorLib **Crossfits** — a crossfit/gym landing page with hero slider, program carousel, trainer spotlight, exercise grid, testimonials, and footer.

- **Source slug:** `crossfits`
- **ColorLib URL:** https://colorlib.com/wp/template/crossfits/
- **Preview URL:** https://preview.colorlib.com/theme/crossfits/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/crossfits-free-template.jpg
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript
- **New name:** `gritbox` (no collision with existing apps or specs)

## Requirements

### Requirement: Navbar

The template SHALL display a sticky white navigation bar with the brand "GritBox" on the left and desktop nav links on the right.

#### Scenario: Desktop navigation

- **WHEN** the page loads on a desktop viewport
- **THEN** a white navbar appears with "GritBox" brand logo and links: Program (dropdown), Our Trainers, News, About, Contact

#### Scenario: Program dropdown

- **WHEN** the user hovers over the "Program" link
- **THEN** a dropdown menu appears with: Body Building, Morning Energy, Stretching (with sub-menu: Swimming, Boxing, Running, Jogging)

#### Scenario: Mobile hamburger

- **WHEN** the viewport is mobile
- **THEN** a hamburger icon appears that opens a slide-in mobile menu with black overlay

### Requirement: Hero Slider

The template SHALL display a full-viewport hero slider with two slides and auto-rotation.

#### Scenario: First slide

- **WHEN** the page loads
- **THEN** slide 1 shows heading "Welcome To GritBox" with caption "Find The Healthy Way" in white centered text

#### Scenario: Second slide

- **WHEN** the slider advances to slide 2
- **THEN** the heading reads "Optimize Your Health" with caption "Effective Program"

#### Scenario: Auto-rotation

- **WHEN** 5 seconds elapse
- **THEN** the slider advances to the next slide with a fade transition

### Requirement: Popular Program

The template SHALL display a section with 6 program cards in a grid layout.

#### Scenario: Program cards

- **WHEN** the user scrolls to the programs section
- **THEN** 6 cards appear: Body Building, Body Combat, Push Up, Weight Lifting, Cardio Blast, Core Strength

#### Scenario: Card content

- **WHEN** each program card renders
- **THEN** it shows a background image with gradient overlay, title, description, and orange "Learn More" pill button

### Requirement: The Club

The template SHALL display a split layout section with gym image and description.

#### Scenario: Split layout

- **WHEN** the user scrolls to the club section
- **THEN** a split layout appears: image on the left, text on the right with heading "The Club", two paragraphs, and "Join Our Club" outline button

### Requirement: Featured Trainer

The template SHALL display a full-width parallax section with trainer spotlight.

#### Scenario: Trainer content

- **WHEN** the user scrolls to the trainer section
- **THEN** a circular trainer photo, name "Shane Green", blockquote, and "Make Me Your Trainer" button appear centered over a parallax background

### Requirement: Crossfit Exercises

The template SHALL display a 3x2 grid of exercise cards.

#### Scenario: Exercise grid

- **WHEN** the user scrolls to the exercises section
- **THEN** a 3x2 grid of bordered cards appears with icons, titles, descriptions, and "Learn More" links

### Requirement: Testimonies

The template SHALL display testimonials on a light gray background.

#### Scenario: Testimonial cards

- **WHEN** the user scrolls to the testimonials section
- **THEN** 4 testimonial blocks appear with circular avatars, names, and quotes on a #f4f4f4 background

### Requirement: Footer

The template SHALL display a dark footer with 3 columns and Component Dock attribution.

#### Scenario: Footer layout

- **WHEN** the user scrolls to the footer
- **THEN** a dark (#1e1e1c) footer appears with 3 columns: About, Quick Menu + Program, Social Icons

#### Scenario: Copyright

- **WHEN** the copyright line renders
- **THEN** it shows the current year and a "Component Dock" link (no ColorLib attribution)

## Verification Checklist

- [x] Navbar renders with brand, dropdown, and mobile hamburger
- [x] Hero slider auto-rotates between 2 slides with fade transition
- [x] Popular Program shows 6 program cards with image overlays
- [x] The Club section renders split layout (image + text + CTA)
- [x] Featured Trainer shows parallax bg, circular photo, quote, CTA
- [x] Exercises grid shows 3x2 bordered icon cards
- [x] Testimonials shows 4 items with circular avatars
- [x] Footer has 3 columns, social icons, copyright with Component Dock link
- [x] All sections use orange #fd7e14 brand color consistently
- [x] Buttons are pill-shaped (border-radius: 30px)
- [x] Section headings have orange underline bar decoration
- [x] Parallax backgrounds render with dark overlays
- [x] No ColorLib references in app code
- [x] public/CNAME contains gritbox.free.componentdock.com
- [x] homepage in package.json set correctly
