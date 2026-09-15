# Chapel — Church Event Template

## Purpose

Recreate the ColorLib "Libchurch" church event template as a React 19 + Vite + Tailwind CSS 4 + TypeScript single-page app. The template provides a full church website with hero, events, about, services, sermons, blog, newsletter, and contact sections.

## Requirements

### Requirement: TopBar renders social links and countdown

The top bar SHALL display social media icon links and an event countdown timer.

#### Scenario: Social icons are visible

- **WHEN** the page loads
- **THEN** Facebook, Twitter, Google, and Instagram icon links are rendered

#### Scenario: Countdown displays event timing

- **WHEN** the page loads
- **THEN** the upcoming event label, days, hours, minutes, and seconds are displayed

### Requirement: Navbar displays site name, donation CTA, and navigation

The navbar SHALL show the site logo/name, a "Send Donation" button, and navigation links with mobile hamburger menu.

#### Scenario: Desktop nav shows all links

- **WHEN** the page loads on desktop
- **THEN** Home, About Us, Sermons, Event, Blog, and Contact links are visible

#### Scenario: Mobile menu toggles

- **WHEN** the user taps the hamburger icon
- **THEN** the mobile menu opens and all nav links are accessible
- **WHEN** the user taps a link
- **THEN** the mobile menu closes

### Requirement: Hero section renders heading and CTA

The hero SHALL display a background image with overlay, heading text, paragraph, and a call-to-action button.

#### Scenario: Hero content is visible

- **WHEN** the page loads
- **THEN** the heading "Living in God's Amazing Grace!" is displayed
- **THEN** the paragraph and "join with us" CTA button are present

### Requirement: EventSpotlight shows event details and countdown

The event spotlight section SHALL display the next event's date, title, time, location, and countdown.

#### Scenario: Event info is rendered

- **WHEN** the page loads
- **THEN** the event date (20 may), title, time, and location are visible

### Requirement: About section renders heading, text, CTA, and image

The about section SHALL show the heading, descriptive paragraphs, a CTA button, and a complementary image.

#### Scenario: About content is visible

- **WHEN** the page loads
- **THEN** the heading, paragraphs, CTA button, and image are rendered

### Requirement: Services section renders three cards

The services section SHALL display three service cards (Our Values, Our Vision, Our Mission) each with an icon, description, and read-more link.

#### Scenario: Three service cards are rendered

- **WHEN** the page loads
- **THEN** three cards with titles, descriptions, and read-more links are visible

### Requirement: Sermon section displays sermon details

The sermon section SHALL show the sermon title, preacher, categories, date, description, and download action links.

#### Scenario: Sermon content is visible

- **WHEN** the page loads
- **THEN** the sermon title, preacher name, categories, and description are displayed
- **THEN** link, archive, listen, and download icons are present

### Requirement: EventList renders upcoming events

The event list SHALL display event items with thumbnails, dates, authors, locations, descriptions, and read-more buttons.

#### Scenario: Event items are rendered

- **WHEN** the page loads
- **THEN** the "Upcoming Events" heading and event cards with thumbnails and details are visible

### Requirement: Blog section renders post cards

The blog section SHALL display three blog post cards with thumbnails, dates, titles, authors, and categories.

#### Scenario: Blog cards are rendered

- **WHEN** the page loads
- **THEN** three article cards with images, titles, authors, and categories are visible

### Requirement: Newsletter renders email subscription form

The newsletter section SHALL display a heading and an email input with a subscribe button.

#### Scenario: Newsletter form is visible

- **WHEN** the page loads
- **THEN** the heading, email input, and subscribe button are rendered
- **WHEN** the user types in the email input
- **THEN** the value is accepted

### Requirement: ContactInfo displays contact details

The contact section SHALL show the heading, address, email, and phone number.

#### Scenario: Contact details are visible

- **WHEN** the page loads
- **THEN** the heading, city, address, email (as mailto link), and phone (as tel link) are rendered

### Requirement: Footer links to Component Dock

The footer SHALL display the copyright line with a link to Component Dock and social media icon links.

#### Scenario: Footer copyright and Component Dock link are present

- **WHEN** the page loads
- **THEN** the copyright text with site name and Component Dock link are visible
- **THEN** social icon links are rendered

### Requirement: Document title is set

The App component SHALL set the document title on mount.

#### Scenario: Title is set

- **WHEN** the app mounts
- **THEN** the document title is "Chapel — Church Event Template"
