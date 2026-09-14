---
name: propstack
description: 'Real estate property listing template — recreation of ColorLib Stated'
colorlib: https://colorlib.com/wp/template/stated/
preview: https://preview.colorlib.com/theme/stated/
---

## Purpose

Recreation of ColorLib "Stated" (https://colorlib.com/wp/template/stated/) as a React 19 + Tailwind CSS 4 + TypeScript template named **Propstack**. A clean, professional real estate website with property listings, agent profiles, and contact form.

## Design Tokens

- **Primary color:** #f69314 (orange)
- **Dark color:** #343a40
- **Body text:** gray
- **Headings font:** Playfair Display (serif) — loaded via Google Fonts
- **Body font:** Roboto — loaded via Google Fonts
- **Buttons:** pill shape (border-radius: 30px), orange (#f69314) primary, dark hover (#343a40)
- **Footer background:** #333333 (dark gray)

## Requirements

### Requirement: Navbar

Users SHALL see a sticky navbar with the "Propstack." logo and navigation links (Home, Properties, Agents, About, News, Contact). The navbar SHALL be responsive with a mobile hamburger menu.

#### Scenario: Desktop navbar

- **GIVEN** the page loads
- **WHEN** the user views the navbar
- **THEN** the logo "Propstack." and all navigation links are visible

#### Scenario: Mobile menu toggle

- **GIVEN** the navbar is displayed on a mobile viewport
- **WHEN** the user clicks the hamburger button
- **THEN** the mobile menu opens with all navigation links

### Requirement: Hero section

Users SHALL see a full-width hero section with a background image, a heading "Buy and sell real estate properties", and a descriptive paragraph.

#### Scenario: Hero content

- **GIVEN** the page loads
- **WHEN** the hero section is visible
- **THEN** the heading and subtext are displayed

### Requirement: How It Works

Users SHALL see a "How It Works" section with 3 columns: Find Property, Buy Property, Make Investment, each with an icon and description.

#### Scenario: Three steps displayed

- **GIVEN** the How It Works section is visible
- **WHEN** the user views it
- **THEN** 3 steps are displayed with icons and text

### Requirement: Properties

Users SHALL see a "Properties" section with property cards showing price, beds, baths, sqft, and address. A "View All Property Listings" button SHALL be displayed.

#### Scenario: Property cards

- **GIVEN** the Properties section is visible
- **WHEN** the user views it
- **THEN** at least 1 property card with price, beds, baths, sqft is displayed

### Requirement: Agents

Users SHALL see an "Agents" section with agent cards showing avatar, name, and social media icons.

#### Scenario: Agent cards

- **GIVEN** the Agents section is visible
- **WHEN** the user views it
- **THEN** at least 1 agent card with name and social links is displayed

### Requirement: About

Users SHALL see an "About Us" section with a heading and descriptive text about the agency.

#### Scenario: About content

- **GIVEN** the About section is visible
- **WHEN** the user views it
- **THEN** a heading and descriptive text are displayed

### Requirement: News

Users SHALL see a "News" section with blog post cards showing image, date, title, and excerpt.

#### Scenario: Blog cards

- **GIVEN** the News section is visible
- **WHEN** the user views it
- **THEN** at least 1 blog card with title and date is displayed

### Requirement: Contact

Users SHALL see a "Get In Touch" section with a contact form (name, email, subject, message fields and submit button) and contact info.

#### Scenario: Contact form

- **GIVEN** the Contact section is visible
- **WHEN** the user fills in the form and clicks submit
- **THEN** a thank-you message is displayed

### Requirement: Footer

Users SHALL see a dark footer with about text, quick links, newsletter subscription form, and a link to https://www.componentdock.com/ branded "Component Dock".

#### Scenario: Footer links

- **GIVEN** the footer is visible
- **WHEN** the user views it
- **THEN** a link to https://www.componentdock.com/ is present with "Component Dock" text
