---
name: template-turnkey
description: Turnkey — Real estate website template (recreation of ColorLib Holmes)
---

# Turnkey — Real Estate Template

Recreation of [ColorLib Holmes](https://colorlib.com/wp/template/holmes/).
Preview: https://preview.colorlib.com/theme/holmes/

## Design Tokens

- Font: Poppins (300/400/500/600/700)
- Brand: #ea6c5d (coral/salmon)
- Heading: #222222
- Body: #777777
- Selection: #ea6c5d
- Light: #f9f9ff

## Sections

1. **Navbar** — Top bar (phone, Sell/Rent Property, Login/Register) + sticky main nav (Home, Properties, About, Blog, Contact) + mobile hamburger
2. **Hero** — Full-screen background image with dark overlay, heading "We're Real Estate King", search form with Buy/Rent toggle, location/property type/bedrooms/price selects, search button
3. **Properties** — "Properties in Various Cities" — 3-column grid of property cards (image, For Sale/Rent badge, bed/bath/area, title, price)
4. **CityGallery** — "Find Home in Your City" — asymmetric grid of city images with hover overlay titles
5. **Testimonials** — "Feedback from Our Real Clients" — 3-column grid of client testimonials (avatar, quote, name, role)
6. **Blog** — "Latest Blog Posts" — 3-column grid of blog cards (image, title, excerpt, date/likes/comments)
7. **Footer** — 4-column layout (About Us, Newsletter, Instagram Feed, Follow Us) + footer bottom with Component Dock link

## Scenarios

### Navbar

- renders logo and navigation links
- renders top bar with phone and login links
- toggles mobile menu on button click
- closes mobile menu when a link is clicked

### Hero

- renders the main heading
- renders search form selects
- renders search button
- toggles sell/rent mode on toggle click

### Properties

- renders the section heading
- renders property cards with details
- renders badges

### CityGallery

- renders the section heading
- renders city images

### Testimonials

- renders the section heading
- renders testimonial authors
- renders testimonial roles

### Blog

- renders the section heading
- renders blog post titles
- renders blog metadata

### Footer

- renders footer sections
- renders newsletter form
- renders Component Dock link in footer bottom
- renders social media links
- handles newsletter form submission

### App

- renders all sections
- has a skip to main content link
