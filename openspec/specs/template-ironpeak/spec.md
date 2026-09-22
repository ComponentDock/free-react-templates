---
name: ironpeak
description: Recreation of ColorLib Fitnezz — fitness and gym landing page with classes, schedule, trainers, testimonials, blog, and footer
template: true
original: fitnezz
original_url: https://colorlib.com/wp/template/fitnezz/
preview_url: https://preview.colorlib.com/theme/fitnezz/
---

## Purpose

Recreation of ColorLib Fitnezz (https://colorlib.com/wp/template/fitnezz/) as a React + Tailwind CSS fitness and gym landing page.

## Requirements

### Requirement: Navbar renders brand and navigation links

The navbar SHALL display the brand name "Ironpeak" with golden accent, navigation links (Home, About, Classes, Schedule, Trainers, Contact), and a "Become a Member" CTA button. The navbar SHALL be dark-backgrounded and sticky. On mobile, a hamburger menu SHALL toggle the nav links.

#### Scenario: Desktop navbar renders all links

- **WHEN** the page loads on a desktop viewport
- **THEN** the brand "Ironpeak" link, all six nav links, and the "Become a Member" button are visible

#### Scenario: Mobile menu opens and closes

- **WHEN** the user clicks the "Open menu" button
- **THEN** a mobile nav overlay appears with all links and a "Become a Member" CTA

#### Scenario: Escape key closes mobile menu

- **WHEN** the mobile menu is open and the user presses Escape
- **THEN** the mobile menu closes

### Requirement: Hero section displays heading and CTAs

The hero SHALL show a full-width background image with dark overlay, the heading "Health is wealth", a description paragraph, and two CTAs ("Get Started" linking to classes, "Download").

#### Scenario: Hero renders heading and buttons

- **WHEN** the page loads
- **THEN** the h1 heading "Health is wealth" and both CTA links are visible

### Requirement: Featured Classes section shows class cards

The featured classes section SHALL display four class cards in a grid, each with an image, price ($30.99), and class name. The section heading SHALL read "Featured Classes" with decorative background text "The Classes".

#### Scenario: All four classes are displayed

- **WHEN** the user scrolls to the classes section
- **THEN** four class cards are visible with prices and names

### Requirement: Schedule section shows class times in a grid

The schedule section SHALL display four schedule items in a 2-column grid, each with an image, class name, description, time, date, and "Join from $15" button.

#### Scenario: Schedule items render with times

- **WHEN** the user views the schedule section
- **THEN** all four items show their class name, time, date, and join button

### Requirement: Trainers section displays trainer profiles

The trainers section SHALL display three trainer cards in a grid, each with a round portrait image, name, and role "Gym Trainer".

#### Scenario: All trainers are displayed

- **WHEN** the user scrolls to the trainers section
- **THEN** three trainer profiles are visible with names and roles

### Requirement: Testimonials section shows client quotes

The testimonials section SHALL display three testimonial cards, each with a quote, author photo, author name, and author role.

#### Scenario: Testimonials render with author info

- **WHEN** the user views the testimonials section
- **THEN** three testimonial quotes are visible with author names

### Requirement: Blog section shows post cards

The blog section SHALL display two blog post cards, each with an image, title, date, description, and "Read More" button.

#### Scenario: Blog posts render

- **WHEN** the user scrolls to the blog section
- **THEN** two blog cards are visible with titles, dates, and "Read More" buttons

### Requirement: Footer links to Component Dock

The footer SHALL display About Us, Contact Info, Quick Links, and Newsletter sections on a dark background. The footer copyright line SHALL include "More templates at Component Dock" linking to https://www.componentdock.com/.

#### Scenario: Footer renders all columns

- **WHEN** the user scrolls to the footer
- **THEN** the footer shows About Us, Contact Info, Quick Links, Newsletter, and a Component Dock link

#### Scenario: Newsletter subscription works

- **WHEN** the user enters an email and clicks "Subscribe"
- **THEN** a confirmation message "Thanks for subscribing!" is displayed
