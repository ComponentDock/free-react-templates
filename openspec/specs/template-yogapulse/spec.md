---
name: yogapulse
description: Yoga studio landing page with hero slider, about, services, choose us, courses, gallery, instructors, appointment, and testimonials
template: colorlib-zogin
source: https://preview.colorlib.com/theme/zogin/
---

## Purpose

Recreation of ColorLib Zogin (https://colorlib.com/wp/template/zogin/) — a yoga studio landing page with hero slider, about section, yoga services, "Why Choose Us" with counters, upcoming courses, gallery, instructors, appointment form, and testimonials. The new name is "Yogapulse".

### Design Tokens

- Font: DM Sans (Google Fonts) — single font family
- Primary brand color: #263246 (deep navy blue — headers, dark sections, text)
- Secondary/accent: #5768AD (medium blue — links, highlights, buttons)
- Gold accent: #F5C136 (yellow-gold — star ratings, highlights)
- Body text: #111111, #1C1C1C, #222222
- Muted text: #6E7580, #999999, #9B9EA3
- Light backgrounds: #f5f5f5, #f5f6fa
- White: #ffffff
- Button primary: #263246 bg, white text, border-radius: 50px (pill)
- Button outline: transparent with border
- Button hover: #5768AD
- Overlay: rgba(0,0,0,0.5) on hero backgrounds
- Card border-radius: 10px, 20px
- Icon circles: 50% border-radius

## Requirements

### Requirement: Header with top bar and navigation

The page SHALL render a top bar with phone number, email, and opening hours, plus a navbar with the Yogapulse logo, navigation links (Home, About, Classes, Pages, Pricing, Blog, Contact), and a "Join Us" button.

#### Scenario: Navigation links are present

- **WHEN** the page loads
- **THEN** links for Home, About, Classes, Pages, Pricing, Blog, and Contact are visible

#### Scenario: Contact info in top bar

- **WHEN** the page loads
- **THEN** phone number, email, and opening hours are visible in the top bar

#### Scenario: Join Us button

- **WHEN** the page loads
- **THEN** a "Join Us" button is visible in the header

### Requirement: Hero section with slider

The page SHALL render a full-width hero section with a carousel of slides, each containing a background image, overlay, welcome subtitle, heading, and "Discover More" CTA button.

#### Scenario: Hero heading renders

- **WHEN** the page loads
- **THEN** the heading "What hurts today makes you stronger tomorrow" is visible

#### Scenario: Welcome subtitle

- **WHEN** the page loads
- **THEN** a "Welcome to Yogapulse" subtitle is visible

#### Scenario: Discover More button

- **WHEN** the page loads
- **THEN** a "Discover More" button is visible

### Requirement: About section

The page SHALL render a split about section with a gallery of images on the left and text content with a quote, description, and "More About Us" CTA on the right.

#### Scenario: About heading renders

- **WHEN** the page loads
- **THEN** the heading "Welcome to Yogapulse" is visible in the about section

#### Scenario: Quote text

- **WHEN** the page loads
- **THEN** a quote about yoga is visible

#### Scenario: More About Us button

- **WHEN** the page loads
- **THEN** a "More About Us" button is visible

### Requirement: Services section (6 yoga practices)

The page SHALL render 6 service cards for yoga practices (Asana, Meditation, Mudra, Bandhas, Philosophy, Pranayama), each with an icon, title, and description.

#### Scenario: Six services shown

- **WHEN** the page loads
- **THEN** service titles "Asana", "Meditation", "Mudra", "Bandhas", "Philosophy", and "Pranayama" are visible

### Requirement: Why Choose Us section with counters

The page SHALL render a "Why Choose Us" section with descriptive text and animated counters showing Students (2146), Years Of Experience, Branches, and Expert Staffs.

#### Scenario: Choose Us heading

- **WHEN** the page loads
- **THEN** the heading "Why Choose Us" is visible

#### Scenario: Counters render

- **WHEN** the page loads
- **THEN** counter labels "Students", "Years Of Experience", "Branches", and "Expert Staffs" are visible with the number 2146

### Requirement: Upcoming Courses section

The page SHALL render 3 course cards, each showing a date, duration, course title, instructor name and role, and a "Join Now" button.

#### Scenario: Courses heading

- **WHEN** the page loads
- **THEN** the heading "Upcoming Courses" is visible

#### Scenario: Course cards render

- **WHEN** the page loads
- **THEN** course titles "100 Hour Yoga Course", "200 Hour Yoga Course", and "300 Hour Yoga Course" are visible with instructor "Jordan Lawson"

#### Scenario: Join Now buttons

- **WHEN** the page loads
- **THEN** "Join Now" buttons are visible on each course card

### Requirement: Gallery section

The page SHALL render a gallery grid of yoga/fitness images.

#### Scenario: Gallery heading

- **WHEN** the page loads
- **THEN** the heading "Our Gallery" is visible

### Requirement: Instructors section

The page SHALL render 4 instructor cards, each with a photo, name, and "Yoga Trainer" subtitle.

#### Scenario: Instructors heading

- **WHEN** the page loads
- **THEN** the heading "Meet Our Instructors" is visible

#### Scenario: Instructor cards render

- **WHEN** the page loads
- **THEN** instructor names "Emma Hale", "Rebecca James", "Melissa Smith", and "Emily Walker" are visible

### Requirement: Appointment section

The page SHALL render an appointment/booking section with a heading and a submit button.

#### Scenario: Appointment heading

- **WHEN** the page loads
- **THEN** the heading "Make An Appointment" is visible

### Requirement: Testimonials section

The page SHALL render a testimonials carousel with review text, trainer name, and role.

#### Scenario: Testimonial cards

- **WHEN** the page loads
- **THEN** testimonial text and trainer name "Linnie Walton" are visible

### Requirement: Footer

The page SHALL render a footer with business hours, inspiration links, about links, contact information, and a copyright bar.

#### Scenario: Footer renders

- **WHEN** the page loads
- **THEN** contact details (phone, email, address) and business hours are visible

#### Scenario: Footer links to Component Dock

- **WHEN** the page loads
- **THEN** the footer contains a link to https://www.componentdock.com/

## Verification Checklist

- [ ] DM Sans font loaded from Google Fonts
- [ ] Hero slider with heading and CTA
- [ ] About section with images and quote
- [ ] 6 yoga service cards
- [ ] Why Choose Us with animated counters
- [ ] 3 upcoming course cards
- [ ] Gallery grid
- [ ] 4 instructor cards
- [ ] Appointment section
- [ ] Testimonials carousel
- [ ] Footer with contact, hours, and Component Dock link
- [ ] All brand colors match tokens (#263246, #5768AD, #F5C136)
- [ ] No ColorLib references in app code
- [ ] Footer links to componentdock.com
- [ ] 100% test coverage
- [ ] Builds without errors
