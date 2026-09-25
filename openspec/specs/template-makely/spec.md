# Spec: Makely

Recreation of ColorLib "Create" (https://colorlib.com/wp/template/create/).

## Overview

Makely is a creative agency / business landing page template with a teal brand
palette, Quicksand typography, and pill-shaped buttons. It features a hero with
typed text animation, numbered feature cards, a portfolio gallery, a dark
services split, testimonials carousel, services grid, about section, team
members, blog posts, contact form, CTA banner, and a dark footer.

## Design Tokens (from preview CSS)

- **Primary:** #32dbc6 (teal/mint)
- **Text:** #4d4d4d (body), #000 (headings)
- **Footer bg:** #333333
- **Border:** #edf0f5
- **Button radius:** 30px (pill shape)
- **Font:** Quicksand (Google Fonts)
- **Check icon color:** #32dbc6 (primary teal)

## Sections (in order)

1. **TopBar** — dark bg (#000), phone + email left, social icons right
2. **Navbar** — white bg, "Makely." logo (teal dot), nav: Home, Work, Services, About, Blog, Contact
3. **Hero** — background image, "We Love To Build" + typed words (Web Apps, WordPress, Mobile Apps), "Watch Video" CTA button
4. **Features** — 3 numbered columns (01. Innovate, 02. Create, 03. Scale) with teal check items
5. **Gallery** — 6-item image grid with overlay titles
6. **AboutDark** — black bg, image left, 4 service items (Strategy, Web Dev, Art Direction, Copywriting) right
7. **Testimonials** — centered heading, carousel with quotes + avatars
8. **Services** — 6 service cards with icons (Web Design, eCommerce, Web Apps, Branding, Copywriting, Mobile Apps)
9. **About** — image + text + 2 feature items (Web & Mobile Specialties, Intuitive Thinkers)
10. **Team** — 3 members with circular photos, roles, social links
11. **Blog** — 3 blog post cards with images, titles, meta, excerpts
12. **Contact** — form (first/last name, email, subject, message) + address card
13. **CTA** — teal banner "Let's Get Started"
14. **Footer** — About, Features links, Follow Us social, Newsletter form, copyright with Component Dock link

## Scenarios

### TopBar

- Renders phone number and email address
- Renders social media icon links (Facebook, Twitter, Instagram, LinkedIn)

### Navbar

- Shows "Makely." logo with teal dot
- Shows navigation links: Home, Work, Services, About, Blog, Contact
- Mobile menu toggle button exists

### Hero

- Displays "We Love To Build" heading
- Displays typed words animation placeholder
- "Watch Video" CTA button visible

### Features

- Shows 3 feature cards with numbers 01, 02, 03
- Each card has a heading, description, and checklist items

### Gallery

- Shows 6 portfolio items in a grid
- Each item has an image and overlay title/category

### AboutDark

- Dark background section
- Shows image on left
- Shows 4 service items with icons on right

### Testimonials

- Shows "Testimonials" heading
- Shows testimonial quotes with author names and avatars

### Services

- Shows "Our Services" heading
- Shows 6 service cards with icons and descriptions

### About

- Shows "About Us" heading
- Shows image and description text
- Shows 2 feature items with icons

### Team

- Shows "Our Team" heading
- Shows 3 team member cards with photos, names, roles, descriptions, social links

### Blog

- Shows "Blog" heading
- Shows 3 blog post cards with images, titles, dates, excerpts

### Contact

- Shows "Contact Us" heading
- Contact form with first name, last name, email, subject, message fields
- Address/phone/email info card

### CTA

- Teal banner with "Let's Get Started" heading

### Footer

- About Us text
- Features links
- Follow Us social icons
- Newsletter signup form
- Copyright line with Component Dock link
