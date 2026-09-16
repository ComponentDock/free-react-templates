# Spec: Foundation — Construction Company Landing Template

## Purpose

Recreate the ColorLib "Wilcon" construction company landing page as a modern
React 19 + Tailwind CSS 4 + TypeScript single-page template named "Foundation".
The template provides a full-featured construction company website with navbar,
hero slider, stats, about, services, CTA, projects gallery, testimonials, blog,
and footer sections.

- **ColorLib source:** "Wilcon"
- **Source URL:** https://colorlib.com/wp/template/wilcon/
- **Preview URL:** https://preview.colorlib.com/theme/wilcon/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/wilcon-free-template.jpg
- **Stack:** React 19, Vite, Tailwind CSS 4, TypeScript
- **Framework heritage:** Bootstrap 5 (structure conventions), AOS (scroll animations replaced by Tailwind/IntersectionObserver), Swiper (carousel replaced by custom React carousel)

## Design tokens (from live preview CSS, verified 2026-09-16)

| Token         | Value               | Notes                                                    |
| ------------- | ------------------- | -------------------------------------------------------- |
| Brand primary | `#fc5e28`           | Orange-red; 90 occurrences in CSS; hero buttons, CTAs    |
| Dark navy     | `#040e26`           | 31 occurrences; secondary dark sections, overlays        |
| White         | `#fff`              | Text on dark backgrounds, card backgrounds               |
| Light gray    | `#f8f9fa`           | Section alternating bg (`bg-light`)                      |
| Font          | Roboto 300/400/500  | Google Fonts `<link>`; body base 16px/1.5                |
| Button radius | ~0.375rem (3px)     | Bootstrap `--bs-border-radius-lg`; use `rounded` in TW  |
| Hero height   | 700px               | Full-width background image with dark overlay            |
| Navbar bg     | `#040e26` dark      | Dark navy navbar, white text                             |
| CTA bar bg    | `#fc5e28`           | Full-width orange banner between sections                |
| Card style    | White bg, subtle shadow, no visible radius on content cards |
| Footer bg     | `#040e26` dark      | 4-column layout, white text, links                       |

## Section structure (DOM order from live preview)

| #  | Section              | Key content                                                 |
| -- | -------------------- | ----------------------------------------------------------- |
| 1  | TopBar               | Social media icons (fa-facebook, fa-twitter, etc.) + phone/email |
| 2  | Navbar               | Logo "Foundation" · Home · About · Services · Projects · Blog · Contact · "Inquire Now" CTA button |
| 3  | Hero                 | Background image with dark overlay · "We Build Great Projects" h1 · Subtext · "Inquire Now" + "Our Services" CTAs |
| 4  | Stats                | 3-column: "Quality Construction" · "Professional Liability" · "Dedicated To Our Clients" with icons |
| 5  | About                | "Wilcon A Construction Company" → "Foundation A Construction Company" heading · Description · "This is how we work on our clients, Watch video" · Background image |
| 6  | Services intro       | "Providing Personalized and High Quality Services" heading + description |
| 7  | Services cards       | "We Offer Services" · 3 cards with background images: Architecture · Renovation · Construction · "Request A Quote" buttons |
| 8  | CTA banner           | "Best Provider for Industrial Services" · Description · Orange bg (`#fc5e28`) |
| 9  | Projects gallery     | "Latest Projects" · 4 project cards with images, titles, "Read more" links |
| 10 | Testimonials         | "It's always a joy to hear that the work we do has positively reviews" heading · Testimonial slider |
| 11 | Blog                 | "Latest Blog Updates" · Blog post cards                    |
| 12 | Footer               | 4 columns: About (description) · Links (Project, About Us, Services, Blog Posts, Industries, Contact, Help, Privacy Policy, Terms of Use) · Services (Customer Services, Prompt Delivery, Reliable Equipment, New Heavy Equipment) · Contact info · Copyright bar |

## Requirements

### Requirement: All sections render in correct order

The template SHALL display 12 sections in the correct order: TopBar, Navbar, Hero, Stats, About, ServicesIntro, ServicesCards, CtaBanner, ProjectsGallery, Testimonials, Blog, Footer.

#### Scenario: Page loads with all sections

- **GIVEN** the page loads
- **THEN** all 12 sections are visible in the correct order

### Requirement: TopBar displays social and contact info

The TopBar SHALL display social media icons (Facebook, Twitter, Instagram, etc.) on the left and phone number / email on the right.

#### Scenario: TopBar renders social links and contact

- **GIVEN** the TopBar renders
- **THEN** social media icons are visible
- **AND** phone number and email are displayed

### Requirement: Navbar displays navigation and CTA

The navbar SHALL display the logo "Foundation", navigation links (Home, About, Services, Projects, Blog, Contact), and an "Inquire Now" CTA button. The navbar SHALL have a dark navy background (`#040e26`).

#### Scenario: Navbar renders all nav items

- **GIVEN** the navbar renders
- **THEN** "Foundation" logo text is visible
- **AND** Home, About, Services, Projects, Blog, Contact links are visible
- **AND** an "Inquire Now" button is displayed
- **AND** the navbar background is dark navy

### Requirement: Hero displays heading and CTAs

The hero section SHALL display a background image with dark overlay, "We Build Great Projects" heading, descriptive subtext, and two CTA buttons ("Inquire Now" and "Our Services"). The hero SHALL be 700px tall.

#### Scenario: Hero renders heading and CTAs

- **GIVEN** the hero section renders
- **THEN** "We Build Great Projects" heading is visible
- **AND** "Inquire Now" button is displayed
- **AND** "Our Services" button is displayed

#### Scenario: Hero has background image with overlay

- **GIVEN** the hero section renders
- **THEN** a background image is displayed
- **AND** a dark overlay covers the image

### Requirement: Stats section shows 3 metrics

The stats section SHALL display 3 statistics in a row: "Quality Construction", "Professional Liability", and "Dedicated To Our Clients", each with an icon.

#### Scenario: Stats renders 3 items

- **GIVEN** the stats section renders
- **THEN** 3 stat items are displayed
- **AND** "Quality Construction" is visible
- **AND** "Professional Liability" is visible
- **AND** "Dedicated To Our Clients" is visible

### Requirement: About section with video CTA

The about section SHALL display a heading ("Foundation A Construction Company"), descriptive text, and a "Watch video" call-to-action. It SHALL have a background image on one side.

#### Scenario: About renders content and video link

- **GIVEN** the about section renders
- **THEN** "Foundation A Construction Company" heading is visible
- **AND** descriptive text is present
- **AND** a "Watch video" link/button is displayed

### Requirement: Services intro section

The services intro section SHALL display the heading "Providing Personalized and High Quality Services" with a description paragraph.

#### Scenario: Services intro renders heading

- **GIVEN** the services intro section renders
- **THEN** "Providing Personalized and High Quality Services" heading is visible

### Requirement: Services cards show 3 services

The services cards section SHALL display 3 service cards (Architecture, Renovation, Construction), each with a background image, title, and "Request A Quote" button.

#### Scenario: Services cards render 3 items

- **GIVEN** the services cards section renders
- **THEN** 3 service cards are displayed
- **AND** "Architecture" card is visible with "Request A Quote" button
- **AND** "Renovation" card is visible with "Request A Quote" button
- **AND** "Construction" card is visible with "Request A Quote" button

### Requirement: CTA banner with orange background

The CTA banner SHALL display "Best Provider for Industrial Services" heading, descriptive text, on an orange (`#fc5e28`) background spanning full width.

#### Scenario: CTA banner renders with brand color

- **GIVEN** the CTA banner renders
- **THEN** "Best Provider for Industrial Services" heading is visible
- **AND** the background is orange (`#fc5e28`)

### Requirement: Projects gallery shows project cards

The projects gallery SHALL display "Latest Projects" heading and 4 project cards, each with a background image, title, and "Read more" link.

#### Scenario: Projects gallery renders cards

- **GIVEN** the projects gallery renders
- **THEN** "Latest Projects" heading is visible
- **AND** 4 project cards are displayed

### Requirement: Testimonials section

The testimonials section SHALL display a heading about client reviews and a testimonial slider/card with client feedback.

#### Scenario: Testimonials renders content

- **GIVEN** the testimonials section renders
- **THEN** a heading about client reviews is visible
- **AND** at least one testimonial is displayed

### Requirement: Blog section shows latest posts

The blog section SHALL display "Latest Blog Updates" heading and blog post cards with images, titles, dates, and "Read more" links.

#### Scenario: Blog renders post cards

- **GIVEN** the blog section renders
- **THEN** "Latest Blog Updates" heading is visible
- **AND** blog post cards are displayed

### Requirement: Footer with 4 columns

The footer SHALL have a dark navy background (`#040e26`) with 4 columns: About (description + social icons), Links, Services, and Contact information. A copyright bar with "Component Dock" link SHALL appear at the bottom.

#### Scenario: Footer renders all columns

- **GIVEN** the footer renders
- **THEN** 4 columns are visible
- **AND** "About" column has a description
- **AND** "Links" column has navigation links
- **AND** "Services" column has service items
- **AND** "Contact" column has contact information
- **AND** a copyright bar with "Component Dock" link is present

### Requirement: Responsive design

The template SHALL be fully responsive. On mobile, the navbar SHALL collapse into a hamburger menu, columns SHALL stack vertically, and the hero SHALL adapt to smaller viewports.

#### Scenario: Mobile view adapts layout

- **GIVEN** the viewport is 375px wide
- **THEN** the navbar shows a hamburger menu
- **AND** multi-column sections stack vertically
- **AND** all content remains readable

### Requirement: Footer links to Component Dock

The footer SHALL include a link to `https://www.componentdock.com/` branded as "Component Dock".

#### Scenario: Footer has Component Dock link

- **GIVEN** the footer renders
- **THEN** a link to `https://www.componentdock.com/` is present
- **AND** the link text includes "Component Dock"

## Verification checklist

- [ ] All 12 sections render in correct order
- [ ] TopBar has social icons and contact info
- [ ] Navbar is dark navy with all nav links + CTA
- [ ] Hero has background image, overlay, heading, and 2 CTAs
- [ ] Stats show 3 metrics with icons
- [ ] About section has heading, text, and video link
- [ ] Services intro has heading and description
- [ ] Services cards show 3 services with "Request A Quote"
- [ ] CTA banner is orange with heading
- [ ] Projects gallery shows 4 cards
- [ ] Testimonials section renders
- [ ] Blog section shows post cards
- [ ] Footer has 4 columns and Component Dock link
- [ ] Responsive on mobile (375px)
- [ ] Brand color `#fc5e28` used for CTAs and accent
- [ ] Font is Roboto via Google Fonts
- [ ] No ColorLib references in app code
- [ ] `packages/ui` components reused where applicable
- [ ] Tests pass with 100% coverage
