---
name: template-turnkey
description: Turnkey — Real estate website template (recreation of ColorLib Holmes)
---

# Turnkey — Real Estate Template

Recreation of [ColorLib Holmes](https://colorlib.com/wp/template/holmes/).
Preview: https://preview.colorlib.com/theme/holmes/

## Purpose

Turnkey is a real estate template with a navbar, hero, properties, city gallery, testimonials, blog and footer. It recreates the ColorLib **Holmes** design (https://colorlib.com/wp/template/holmes/, preview: https://preview.colorlib.com/theme/holmes/) as a Vite + React 19 + Tailwind CSS 4 + TypeScript template.

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

## Requirements

### Feature: Navbar

#### Scenario: Renders logo and navigation links

- **Given** the page is rendered
- **When** the Navbar is inspected
- **Then** renders logo and navigation links

#### Scenario: Renders top bar with phone and login links

- **Given** the page is rendered
- **When** the Navbar is inspected
- **Then** renders top bar with phone and login links

#### Scenario: Toggles mobile menu on button click

- **Given** the page is rendered
- **When** the Navbar is inspected
- **Then** toggles mobile menu on button click

#### Scenario: Closes mobile menu when a link is clicked

- **Given** the page is rendered
- **When** the Navbar is inspected
- **Then** closes mobile menu when a link is clicked

### Feature: Hero

#### Scenario: Renders the main heading

- **Given** the page is rendered
- **When** the Hero is inspected
- **Then** renders the main heading

#### Scenario: Renders search form selects

- **Given** the page is rendered
- **When** the Hero is inspected
- **Then** renders search form selects

#### Scenario: Renders search button

- **Given** the page is rendered
- **When** the Hero is inspected
- **Then** renders search button

#### Scenario: Toggles sell/rent mode on toggle click

- **Given** the page is rendered
- **When** the Hero is inspected
- **Then** toggles sell/rent mode on toggle click

### Feature: Properties

#### Scenario: Renders the section heading

- **Given** the page is rendered
- **When** the Properties is inspected
- **Then** renders the section heading

#### Scenario: Renders property cards with details

- **Given** the page is rendered
- **When** the Properties is inspected
- **Then** renders property cards with details

#### Scenario: Renders badges

- **Given** the page is rendered
- **When** the Properties is inspected
- **Then** renders badges

### Feature: CityGallery

#### Scenario: Renders the section heading

- **Given** the page is rendered
- **When** the CityGallery is inspected
- **Then** renders the section heading

#### Scenario: Renders city images

- **Given** the page is rendered
- **When** the CityGallery is inspected
- **Then** renders city images

### Feature: Testimonials

#### Scenario: Renders the section heading

- **Given** the page is rendered
- **When** the Testimonials is inspected
- **Then** renders the section heading

#### Scenario: Renders testimonial authors

- **Given** the page is rendered
- **When** the Testimonials is inspected
- **Then** renders testimonial authors

#### Scenario: Renders testimonial roles

- **Given** the page is rendered
- **When** the Testimonials is inspected
- **Then** renders testimonial roles

### Feature: Blog

#### Scenario: Renders the section heading

- **Given** the page is rendered
- **When** the Blog is inspected
- **Then** renders the section heading

#### Scenario: Renders blog post titles

- **Given** the page is rendered
- **When** the Blog is inspected
- **Then** renders blog post titles

#### Scenario: Renders blog metadata

- **Given** the page is rendered
- **When** the Blog is inspected
- **Then** renders blog metadata

### Feature: Footer

#### Scenario: Renders footer sections

- **Given** the page is rendered
- **When** the Footer is inspected
- **Then** renders footer sections

#### Scenario: Renders newsletter form

- **Given** the page is rendered
- **When** the Footer is inspected
- **Then** renders newsletter form

#### Scenario: Renders Component Dock link in footer bottom

- **Given** the page is rendered
- **When** the Footer is inspected
- **Then** renders Component Dock link in footer bottom

#### Scenario: Renders social media links

- **Given** the page is rendered
- **When** the Footer is inspected
- **Then** renders social media links

#### Scenario: Handles newsletter form submission

- **Given** the page is rendered
- **When** the Footer is inspected
- **Then** handles newsletter form submission

### Feature: App

#### Scenario: Renders all sections

- **Given** the page is rendered
- **When** the App is inspected
- **Then** renders all sections

#### Scenario: Has a skip to main content link

- **Given** the page is rendered
- **When** the App is inspected
- **Then** has a skip to main content link
