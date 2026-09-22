# Template: VitalBlend (Health & Wellness)

## Purpose

VitalBlend is a single-page health & wellness landing page in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Healthcouch" free template (source:
https://colorlib.com/wp/template/healthcouch/, preview:
https://preview.colorlib.com/theme/healthcouch/), built under a DIFFERENT name
(**VitalBlend**), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

The original is a Bootstrap 4 health/wellness template using Poppins Google
Font and Font Awesome icons. It has a clean, nature-inspired aesthetic with a
green (`#5AAC4E`) primary accent, dark green (`#234821`) secondary accent, and
dark headings (`#0D210B`) on a white/light background. The page features a
sticky navbar with logo and "Make an Appointment" CTA button, a full-width hero
slider with large headline and video play icon, an about section with image and
text, a green CTA banner, a three-column services grid with icons, a
testimonial slider, a video background section, a blog cards section, a
satisfaction/about section with green background and "Make an Appointment"
button, and a footer with newsletter form and social icons.

## Design Tokens

| Token           | Value                                   | Source                                   |
| --------------- | --------------------------------------- | ---------------------------------------- |
| Brand primary   | `#5AAC4E` (green)                       | Buttons, video icon, preloader, footer   |
| Brand secondary | `#234821` (dark green)                  | `.btn` background, text accents          |
| Text primary    | `#0D210B` (near-black green)            | All headings (h1–h6)                     |
| Text body       | `#635c5c` (warm gray)                   | Links, body text defaults                |
| Accent red      | `#f04e3c` (coral red)                   | Section title `<span>` labels            |
| Font heading    | `"Poppins", sans-serif` weight 300–500  | All headings, hero h1 (300 weight)       |
| Font body       | `"Poppins", sans-serif` weight 300–400  | Paragraphs, nav links, buttons           |
| Button primary  | bg `#234821`, hover `#5AAC4E`           | `.btn` — radius `0 0 0 17px` (L-shaped)  |
| Button header   | bg `#5AAC4E`, hover `#234821`           | `.header-btn` — CTA in navbar            |
| Card radius     | `50px` (blog images)                    | `.home-blog-single .blog-img`            |
| Video icon      | `60px circle`, bg `#5AAC4E`             | `.video-icon a.btn-icon`                 |
| Hero height     | `920px` desktop, `600px` mobile         | `.slider-height`                         |
| Section padding | `120px` top/bottom (`.section-padding`) | `.section-padding`, `.section-padding40` |

## Requirements

### Requirement: Sticky navbar with logo, nav links, and CTA button

The page SHALL display a sticky navbar at the top with a logo on the left,
navigation links (Home, About, Services, Blog, Contact) displayed
horizontally, and a green "Make an Appointment" CTA button on the right. On
mobile, a hamburger menu icon SHALL replace the horizontal nav.

#### Scenario: Desktop navbar renders correctly

- **WHEN** the user loads the VitalBlend page
- **THEN** a sticky navbar is visible at the top with a logo on the left
- **AND** navigation links "Home", "About", "Services", "Blog", "Contact" are displayed horizontally
- **AND** a green "Make an Appointment" CTA button appears on the right

#### Scenario: Mobile hamburger menu toggles

- **WHEN** the user clicks the hamburger menu icon on mobile
- **THEN** a mobile navigation menu opens with all navigation links
- **AND** clicking a link closes the mobile menu

### Requirement: Hero section with headline, subtitle, CTA, and video icon

The page SHALL display a full-width hero area with a background image, a large
heading "Health is wealth keep it healthy", a subtitle paragraph, a dark green
"Take a Service" CTA button, and a green circular video play icon with pulsing
animation.

#### Scenario: Hero section renders all elements

- **WHEN** the user loads the VitalBlend page
- **THEN** a full-width hero area is visible with a background image
- **AND** a large heading "Health is wealth keep it healthy" is displayed
- **AND** a subtitle paragraph appears below the heading
- **AND** a dark green "Take a Service" CTA button is present
- **AND** a green circular video play icon with pulsing animation is shown

### Requirement: About section with image and text

The page SHALL display a two-column about section with an image on the left and
text on the right, including a heading "Create a healthy life you love!", a
subtitle paragraph, a description paragraph, and trust/feature icons.

#### Scenario: About section displays correctly

- **WHEN** the user scrolls to the about section
- **THEN** a two-column layout is displayed with image on the left and text on the right
- **AND** a heading "Create a healthy life you love!" is shown
- **AND** subtitle and description paragraphs are visible
- **AND** trust/feature icon labels appear below the text

### Requirement: Green CTA banner between sections

The page SHALL display a full-width green background banner with the heading
"Happy mind healthy life", a subtitle paragraph, and a white-bordered "Take a
Service" button positioned on the right.

#### Scenario: CTA banner renders correctly

- **WHEN** the user scrolls past the about section
- **THEN** a full-width green background banner is visible
- **AND** it displays the heading "Happy mind healthy life"
- **AND** a white-bordered "Take a Service" button is positioned on the right

### Requirement: Three-column services section with icons

The page SHALL display a three-column centered grid of service cards. Each card
SHALL have a large icon, a heading, a short description, and a green plus-icon
link.

#### Scenario: Services section displays three cards

- **WHEN** the user scrolls to the services section
- **THEN** three service cards are displayed in a centered row
- **AND** each card has a large icon, a heading, and a short description
- **AND** each card has a green plus-icon link below the description

### Requirement: Testimonial carousel with quote, avatar, and name

The page SHALL display a testimonial section with a carousel of testimonials.
Each testimonial SHALL show a quote icon, paragraph text, a circular avatar, a
name, and a role. Dot navigation indicators SHALL be visible below.

#### Scenario: Testimonial displays and switches

- **WHEN** the user scrolls to the testimonial section
- **THEN** a testimonial is displayed with quote text, avatar, name, and role
- **AND** dot navigation buttons are visible
- **AND** clicking a different dot switches the displayed testimonial

### Requirement: Video background section with play button

The page SHALL display a full-width dark background area with a centered green
circular play button.

#### Scenario: Video section renders play button

- **WHEN** the user scrolls to the video section
- **THEN** a full-width background area is displayed
- **AND** a green circular play button is centered in the section

### Requirement: Blog section with rounded image cards

The page SHALL display a "Latest Blog" heading centered above three blog cards.
Each card SHALL show a large image with rounded corners (50px radius), a heading
link, and a short paragraph description.

#### Scenario: Blog section displays three cards

- **WHEN** the user scrolls to the blog section
- **THEN** a heading "Latest Blog" is displayed centered above three cards
- **AND** each blog card shows a large image with rounded corners
- **AND** each card has a heading link and a short paragraph description

### Requirement: Satisfaction section overlapping the blog area

The page SHALL display a satisfaction section with a green background shape on
the left containing the heading "100% satisfaction guaranteed." in white, a
white-bordered "Make an Appointment" button, and an image on the right side.

#### Scenario: Satisfaction section renders correctly

- **WHEN** the user scrolls to the satisfaction section
- **THEN** a green background shape appears on the left side
- **AND** the heading "100% satisfaction guaranteed." is displayed in white
- **AND** a white-bordered "Make an Appointment" button is shown
- **AND** an image is displayed on the right side

### Requirement: Footer with navigation, newsletter, social links, and Component Dock

The page SHALL display a dark background footer with a white logo on the left,
horizontal navigation links, social media icon links, a "Subscribe newsletter"
heading with email input and green Subscribe button on the right, a copyright
line, and a link to Component Dock (https://www.componentdock.com/).

#### Scenario: Footer renders all elements

- **WHEN** the user scrolls to the footer
- **THEN** a dark background footer is visible
- **AND** a white logo is displayed on the left
- **AND** horizontal navigation links are shown
- **AND** social media icon links appear below the navigation
- **AND** a "Subscribe newsletter" heading with email input and green Subscribe button is on the right
- **AND** a copyright line appears at the very bottom
- **AND** the footer contains a link to "Component Dock" (https://www.componentdock.com/)

#### Scenario: Newsletter form accepts email and resets on submit

- **WHEN** the user types an email address and clicks Subscribe
- **THEN** the email input field is cleared
