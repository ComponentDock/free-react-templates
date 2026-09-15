# Namastay — Yoga Instructor Template

**Recreation of:** ColorLib Yogafun
**Source:** https://colorlib.com/wp/template/yogafun/
**Preview:** https://preview.colorlib.com/theme/yogafun/
**New name:** Namastay

## Purpose

Namastay is a free yoga instructor website template that recreates the ColorLib Yogafun design in React 19 + Tailwind CSS 4 + TypeScript. It provides a complete landing page for yoga studios and instructors with a hero section, feature highlights, class listings, testimonials, blog preview, and newsletter signup.

## Requirements

### Requirement: Navbar renders with brand and navigation links

The template SHALL display a sticky navigation bar with the brand name "Namastay", navigation links (Home, About, Classes, Blog, Contact), a classes dropdown menu, and a search input.

#### Scenario: Desktop navbar renders all elements

- **GIVEN** the page is loaded on a desktop viewport
- **THEN** the navbar displays the brand "Namastay"
- **AND** navigation links for Home, About, Blog, Contact are visible
- **AND** a Classes dropdown button is present
- **AND** a search input is visible

#### Scenario: Classes dropdown opens on click

- **GIVEN** the page is loaded
- **WHEN** the user clicks the Classes button
- **THEN** a dropdown appears with Health Mind Meditation, Mind Balance Yoga, and Body Strength Pilates

#### Scenario: Mobile menu toggles

- **GIVEN** the page is loaded on a mobile viewport
- **WHEN** the user clicks the hamburger toggle button
- **THEN** the mobile menu expands showing navigation links

### Requirement: Hero section displays headline and play button

The template SHALL display a full-width hero section with a background image overlay, the headline "Lose Yourself In Ambience & Atmosphere", and a play button linking to a video.

#### Scenario: Hero renders headline and play button

- **GIVEN** the page is loaded
- **THEN** the hero section displays the headline text
- **AND** a play button labeled "Play video" is present
- **AND** "Watch Video" text is displayed below the button

### Requirement: Features section shows three yoga feature cards

The template SHALL display three feature items (Chakra, Lotus, Yoga) with icons, titles, and descriptions alongside a large image.

#### Scenario: Features render all three items

- **GIVEN** the page is loaded
- **THEN** the features section shows Chakra, Lotus, and Yoga cards
- **AND** each card has a descriptive text

### Requirement: Parallax quote section

The template SHALL display a parallax background section with the centered text "Do Yoga Today For Better Tomorrow".

#### Scenario: Parallax quote renders

- **GIVEN** the page is loaded
- **THEN** the parallax section displays the quote text

### Requirement: Yoga styles section

The template SHALL display a "Perfect Yoga Style" section with three yoga style cards (Hatha Yoga, Vinyasa Flow, Yin Yoga).

#### Scenario: Yoga styles render

- **GIVEN** the page is loaded
- **THEN** the yoga styles section shows three cards with titles and descriptions

### Requirement: Yoga classes section shows six class cards

The template SHALL display a "Yoga Classes" section with six class cards (Yoga Barre, Yoga Core, Yoga For Health, Yoga For Beginners, Yoga for All, Yoga Restore), each with an image, title, description, and Read More link.

#### Scenario: All six classes render

- **GIVEN** the page is loaded
- **THEN** all six class cards are visible
- **AND** each card has a Read More link

### Requirement: Testimonials section

The template SHALL display a "Testimonial" section with testimonial cards containing quotes, names, and photos.

#### Scenario: Testimonials render

- **GIVEN** the page is loaded
- **THEN** the testimonials section shows testimonial cards with quotes and names

### Requirement: Stats bar with brand color

The template SHALL display a brand-colored stats bar with three stat items: Chat With Us, Happy Customers, Fast Support.

#### Scenario: Stats bar renders

- **GIVEN** the page is loaded
- **THEN** the stats bar shows three items with counts and labels

### Requirement: Blog section with three posts

The template SHALL display an "Our Blog" section with three blog post cards containing images, dates, titles, descriptions, and Read More links.

#### Scenario: Blog posts render

- **GIVEN** the page is loaded
- **THEN** the blog section shows three post cards

### Requirement: Newsletter subscription form

The template SHALL display a newsletter section with a heading, email input, and subscribe button. The form handles submission and clears the input on success.

#### Scenario: Newsletter form renders

- **GIVEN** the page is loaded
- **THEN** the newsletter section shows a heading, email input, and subscribe button

#### Scenario: Newsletter form submits

- **GIVEN** the page is loaded
- **WHEN** the user enters an email and clicks Subscribe
- **THEN** the onSubmit callback is called with the email
- **AND** the input is cleared

#### Scenario: Newsletter form rejects empty email

- **GIVEN** the page is loaded
- **WHEN** the user clicks Subscribe without entering an email
- **THEN** the onSubmit callback is not called

### Requirement: Footer with Component Dock attribution

The template SHALL display a footer with About section, Contact Info, Quick Links, social icons, and a Component Dock attribution link.

#### Scenario: Footer renders all sections

- **GIVEN** the page is loaded
- **THEN** the footer shows About Namastay, Contact Info, and Quick Links sections
- **AND** social media icons are present
- **AND** a link to componentdock.com is displayed with text "Component Dock"

### Requirement: App composes all sections

The template SHALL compose all sections in the correct order: Navbar, Hero, Features, ParallaxQuote, YogaStyles, YogaClasses, Testimonials, StatsBar, BlogPosts, Newsletter, Footer.

#### Scenario: All sections render in App

- **GIVEN** the page is loaded
- **THEN** all major sections are present in the DOM
