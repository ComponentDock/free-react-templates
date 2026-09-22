# Vitaflow — Health Coaching Landing Template

**Recreation of:** ColorLib "Healthcoach" (https://colorlib.com/wp/template/healthcoach/)
**Preview:** https://preview.colorlib.com/theme/healthcoach/
**Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript · Vitest + Testing Library

## Purpose

A free, production-ready React recreation of the ColorLib "Healthcoach" health coaching landing template. Provides a hero carousel, services showcase, consultation form, testimonials, pricing plans, blog cards, and a branded footer — all rebuilt with React 19, Tailwind CSS 4, and TypeScript under the name "Vitaflow".

## Requirements

### Requirement: TopBar renders contact info and social links

The template SHALL display a top bar with phone number, email address, and social media icon links.

#### Scenario: Renders contact information

- **WHEN** the TopBar component mounts
- **THEN** the phone number "+00 1234 567" and email "emailsample@email.com" are visible

#### Scenario: Renders social media links

- **WHEN** the TopBar component mounts
- **THEN** Facebook, Twitter, Instagram, and Dribbble icon links are present

### Requirement: Navbar renders brand and navigation

The navbar SHALL display the brand name "Vitaflow" and navigation links for Home, About, Coach, Pricing, Services, Stories, Blog, and Contact.

#### Scenario: Renders logo and nav links

- **WHEN** the Navbar component mounts
- **THEN** the logo "Vitaflow" and all 8 nav links are visible

#### Scenario: Mobile toggle works

- **WHEN** the user clicks the mobile toggle button
- **THEN** the menu state toggles

### Requirement: Hero displays hero content with CTA

The hero section SHALL display a background image with dark overlay, heading, subtext, and two CTA buttons.

#### Scenario: Renders heading and buttons

- **WHEN** the Hero component mounts
- **THEN** the heading "Get in shape faster" and buttons "Learn more" and "Contact us" are visible

#### Scenario: Background image renders

- **WHEN** the Hero component mounts
- **THEN** a section element with background-image style is present

### Requirement: Services shows 3 service cards

The services section SHALL display 3 service cards (Exercise Program, Nutrition Plans, Diet Program) with images, headings, descriptions, and "Read more" links.

#### Scenario: Renders 3 cards

- **WHEN** the Services component mounts
- **THEN** 3 service cards with headings and "Read more" links are visible

### Requirement: AboutSplit shows founder info

The about section SHALL display a split layout with an image, heading, description, and founder avatar with name and title.

#### Scenario: Renders founder info

- **WHEN** the AboutSplit component mounts
- **THEN** the founder name "Cythia Hunter" and title "Personal Dietitian" are visible

### Requirement: ConsultationBar has form and CTAs

The consultation bar SHALL display 3 columns: healthcare services info, a free consultation form, and find-a-health-expert CTA.

#### Scenario: Form renders and accepts input

- **WHEN** the ConsultationBar component mounts
- **THEN** form inputs for First Name, Last Name, Date, Time, and a Services select are present

#### Scenario: Form submits

- **WHEN** the user clicks the Appointment button
- **THEN** the form submission handler runs without error

### Requirement: Testimonials display client quotes

The testimonials section SHALL display client testimonials with avatars, quotes, names, and positions.

#### Scenario: Renders testimonials

- **WHEN** the Testimonials component mounts
- **THEN** 4 testimonial cards with names and positions are visible

### Requirement: HowItWorks shows 4 steps

The how-it-works section SHALL display 4 step cards with icons, headings, and descriptions.

#### Scenario: Renders 4 steps

- **WHEN** the HowItWorks component mounts
- **THEN** 4 step cards with headings are visible

### Requirement: SuccessStories shows client stories

The success stories section SHALL display client stories with images, quotes, names, and roles.

#### Scenario: Renders stories

- **WHEN** the SuccessStories component mounts
- **THEN** 3 story cards with names and roles are visible

### Requirement: CTAIntro displays CTA banner

The CTA intro SHALL display a full-width background image with heading and consultation button.

#### Scenario: Renders CTA

- **WHEN** the CTAIntro component mounts
- **THEN** the heading and "Free Consultation" button are visible

### Requirement: Pricing shows 4 plans

The pricing section SHALL display 4 pricing cards (Starter $49, Standard $79, Premium $109, Platinum $159) with feature lists and "Get Started" buttons.

#### Scenario: Renders 4 plans

- **WHEN** the Pricing component mounts
- **THEN** 4 pricing cards with plan names, prices, and "Get Started" buttons are visible

### Requirement: Blog shows 3 posts

The blog section SHALL display 3 blog cards with images, dates, authors, comment counts, and headings.

#### Scenario: Renders blog cards

- **WHEN** the Blog component mounts
- **THEN** 3 blog cards with dates and headings are visible

### Requirement: Footer has subscribe form and links

The footer SHALL display a subscribe form, 4 link columns (Services, About, Resources, Social), and a copyright line linking to Component Dock.

#### Scenario: Renders subscribe form

- **WHEN** the Footer component mounts
- **THEN** an email input and "Subscribe" button are present

#### Scenario: Renders Component Dock link

- **WHEN** the Footer component mounts
- **THEN** a link to "https://www.componentdock.com/" labeled "Component Dock" is present

#### Scenario: Subscribe form submits

- **WHEN** the user clicks Subscribe
- **THEN** the form submission handler runs without error

### Requirement: App renders all sections in order

The App component SHALL render all sections in the correct order and set the document title.

#### Scenario: All sections present

- **WHEN** the App component mounts
- **THEN** all 13 sections (TopBar, Navbar, Hero, Services, AboutSplit, ConsultationBar, Testimonials, HowItWorks, SuccessStories, CTAIntro, Pricing, Blog, Footer) are present

#### Scenario: Document title set

- **WHEN** the App component mounts
- **THEN** the document title is "Vitaflow — Health Coaching Landing Template"

## Design Tokens

| Token            | Value                  | Usage                              |
| ---------------- | ---------------------- | ---------------------------------- |
| Font family      | Poppins (Google Fonts) | Headings + body text               |
| Brand blue       | #1089ff                | Primary accent, links, subheadings |
| Brand green      | #a3cb4c                | Logo accent                        |
| Subscribe green  | #a7cd54                | Footer subscribe button            |
| Dark blue        | #006fdc                | Consultation form background       |
| Footer bg        | #131719                | Very dark footer                   |
| Light section bg | #f8f9fa                | Alternating sections               |
| Body text        | #212529                | Default text color                 |
