# Spec — AlignWell (ColorLib Chiropractic)

## Purpose

Recreate the ColorLib Chiropractic template as a React 19 + Vite + Tailwind CSS 4 + TypeScript single-page application under the name "AlignWell". The template is a chiropractic and wellness landing page with a top bar, sticky navbar, hero carousel, appointment booking form, services grid, team cards, about section with counters, testimonials, gallery, blog cards, and a branded footer.

## Source

- **ColorLib template:** Chiropractic
- **Preview URL:** https://preview.colorlib.com/theme/chiropractic/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/chiropractic-free-template.jpg

## Requirements

### Requirement: Top bar and navigation

The template SHALL display a top bar with contact email, help desk link, and social media icons. The sticky navbar SHALL include the AlignWell brand logo, navigation links (Home, About, Services, Team, Gallery, Blog, Contact), and a "Make an Appointment" CTA button. The navbar SHALL support a mobile hamburger menu.

#### Scenario: Top bar renders contact info

- **WHEN** the page loads
- **THEN** the email "hello@alignwell.com" and "Help Desk" link are visible

#### Scenario: Navbar renders links and CTA

- **WHEN** the page loads
- **THEN** all navigation links and the "Make an Appointment" button are visible

#### Scenario: Mobile menu toggle

- **WHEN** the user clicks the hamburger menu button
- **THEN** the mobile navigation panel opens
- **WHEN** the user clicks the close button
- **THEN** the mobile navigation panel closes

### Requirement: Hero section

The template SHALL display a hero section with a background image, overlay, headline text, description, and a "Book an Appointment" CTA button.

#### Scenario: Hero renders heading and CTA

- **WHEN** the page loads
- **THEN** the heading "Welcome to our chiropractic centre" and "Book an Appointment" link are visible

### Requirement: Appointment booking form

The template SHALL display a split appointment section with a booking form on the left (name, phone, service select, doctor select, date, time, submit) and business hours + emergency phone on the right. The form SHALL show a success message on valid submission.

#### Scenario: Form fields are visible

- **WHEN** the page loads
- **THEN** name, phone, service select, and doctor select inputs are visible

#### Scenario: Form submits successfully

- **WHEN** the user fills in name and phone and clicks "Send Message"
- **THEN** a success message "appointment request has been received" is displayed

#### Scenario: Form does not submit without name

- **WHEN** the user fills in only phone and clicks "Send Message"
- **THEN** no success message is displayed

### Requirement: Services section

The template SHALL display a 3-column grid of 6 services, each with an icon, title, description, and "Read more" link.

#### Scenario: All services are listed

- **WHEN** the page loads
- **THEN** Spinal Manipulation, Electrotherapy, Medical Acupuncture, Therapeutic Exercise, Manual Lymphatic, and Joint Mobilization are visible in the services section

### Requirement: Team section

The template SHALL display horizontally scrollable staff cards with name, role, photo, and social icons.

#### Scenario: Team members are displayed

- **WHEN** the page loads
- **THEN** Lloyd Wilson, Rachel Parker, and Ian Smith are visible

### Requirement: About section with stats

The template SHALL display an about section with an image, description text, and three stat counters (45+ Years of Experience, 2342+ Happy Customers, 30+ Awards Winning).

#### Scenario: About content and stats render

- **WHEN** the page loads
- **THEN** the about text and all three stat labels and values are visible

### Requirement: Testimonials section

The template SHALL display a dark-background testimonials section with client quotes, avatars, names, and roles.

#### Scenario: Testimonials render

- **WHEN** the page loads
- **THEN** at least one testimonial quote and client name are visible

### Requirement: Gallery section

The template SHALL display a grid of 8 work/treatment images with hover overlay and labels.

#### Scenario: Gallery items render

- **WHEN** the page loads
- **THEN** Foot Pain, Back Pain, and Lower Back Pain are visible in the gallery

### Requirement: Blog section

The template SHALL display 3 blog post cards with image, author, date, and title.

#### Scenario: Blog posts render

- **WHEN** the page loads
- **THEN** at least two blog post titles are visible

### Requirement: Footer with Component Dock link

The template SHALL display a 4-column footer with brand info, services list, contact information, and business hours. The footer SHALL link to https://www.componentdock.com/ branded as "Component Dock".

#### Scenario: Footer links and branding

- **WHEN** the page loads
- **THEN** the "Component Dock" link points to https://www.componentdock.com/
- **THEN** contact info, services list, and business hours are visible
