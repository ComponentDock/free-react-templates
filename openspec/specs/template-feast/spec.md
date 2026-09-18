# Feast — Food Catering Service Template

> Recreation of ColorLib "Flatter" (https://colorlib.com/wp/template/flatter/)

## Purpose

A food catering service landing page with centered navigation, hero slider,
services grid, video banner, popular orders, testimonials, brand logos, and a
multi-column footer. The design uses warm red-orange tones and a zigzag/wave
aesthetic on section borders.

## Requirements

### Requirement: Navbar with navigation and CTA

The template SHALL render a sticky navbar with logo, navigation links
(About, Services, Menu, Gallery, Blog dropdown, Pages dropdown, Contact),
and a "Custom Order" CTA button.

#### Scenario: Desktop navigation renders all links

- **WHEN** the page loads
- **THEN** the navbar displays the Feast logo, About, Services, Menu, Gallery, Blog, Pages, Contact links, and a "Custom Order" button

#### Scenario: Blog dropdown opens on click

- **WHEN** the user clicks the "Blog" dropdown button
- **THEN** a dropdown menu with "Blog" and "Single Post" links is shown

#### Scenario: Pages dropdown opens on click

- **WHEN** the user clicks the "Pages" dropdown button
- **THEN** a dropdown menu with "Elements" link is shown

#### Scenario: Mobile menu toggle

- **WHEN** the user clicks the mobile menu toggle button
- **THEN** a mobile navigation menu is displayed with all nav links

### Requirement: Hero section with heading and background

The template SHALL render a full-width hero section with a heading,
description text, and background image.

#### Scenario: Hero renders heading and description

- **WHEN** the page loads
- **THEN** the hero section displays "Food Catering Service." heading and a description about catering services

### Requirement: Services section with 6 service cards

The template SHALL render a services section with a heading and 6 service
cards in a grid layout.

#### Scenario: All services are displayed

- **WHEN** the page loads
- **THEN** 6 service cards are rendered: Birthday Catering, Wedding Service, Party Catering, Event Catering, Corporate Service, Catering On Demand

### Requirement: Video banner with play button

The template SHALL render a dark video banner section with a heading
and play button.

#### Scenario: Video banner renders

- **WHEN** the page loads
- **THEN** the "Watch Video" heading and a play button are displayed

### Requirement: Popular Orders section with 6 meal cards

The template SHALL render a popular orders section with 6 meal cards,
each showing a food image, price, name, ingredients, and "Order Now!" button.

#### Scenario: All meals are displayed

- **WHEN** the page loads
- **THEN** 6 meal cards are rendered with names, prices, and "Order Now!" buttons

### Requirement: Testimonials section with customer feedback

The template SHALL render a testimonials section with customer cards
showing avatar, name, role, and quote.

#### Scenario: Testimonials render

- **WHEN** the page loads
- **THEN** 3 testimonial cards are displayed with author names and quotes

### Requirement: Brands section with logo grid

The template SHALL render a brands section with 8 placeholder brand logos.

#### Scenario: Brand logos render

- **WHEN** the page loads
- **THEN** 8 brand logo placeholder images are displayed

### Requirement: Footer with newsletter and Component Dock link

The template SHALL render a footer with link columns, newsletter form,
social icons, and a link to https://www.componentdock.com/.

#### Scenario: Newsletter form works

- **WHEN** the user enters an email and submits the newsletter form
- **THEN** a "Thanks for subscribing!" message is displayed

#### Scenario: Component Dock link is present

- **WHEN** the page loads
- **THEN** the footer contains a link to https://www.componentdock.com/ with text "Component Dock"
