# Template: Taster (Restaurant)

## Purpose

Taster is a single-page restaurant landing page in the free-react-templates monorepo. It is an original React recreation of the ColorLib "Meal" free template (source: https://colorlib.com/wp/template/meal/), built under a DIFFERENT name (**Taster**), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

**Preview URL:** https://preview.colorlib.com/theme/meal/
**Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/meal-free-template.jpg

## Design Tokens (extracted from preview CSS)

| Token                | Value                                  | Usage                                                       |
| -------------------- | -------------------------------------- | ----------------------------------------------------------- |
| **Brand accent**     | `#FF7A5C` (coral/orange)               | Buttons, tabs, subheadings, loader, links                   |
| **Headings color**   | `#000000`                              | All h2/h3/h4 headings                                       |
| **Body font**        | `"Open Sans", Arial, sans-serif`       | Body text                                                   |
| **Heading font**     | `"Playfair Display", serif`            | All headings                                                |
| **Body weight**      | 300 (light)                            | Body text                                                   |
| **Muted text**       | `#B3B3B3`                              | Subheadings, chef roles, labels                             |
| **Border**           | `#CCCCCC`                              | Form control borders                                        |
| **Light bg**         | `#F8F9FA`                              | Menu section, reservation section                           |
| **White bg**         | `#FFFFFF`                              | Default body, about, chefs, services, testimonials, contact |
| **Button uppercase** | 14px, letter-spacing 0.2em, weight 700 | All buttons                                                 |

## Requirements

### Requirement: Navbar renders with logo and hamburger

The system SHALL render a fixed top header with a "T" logo centered and a hamburger toggle. Clicking the toggle SHALL open a right-sliding sidebar with nav links: Home, About Us, Our Menu, Reserve A Table, Contact.

#### Scenario: Navbar renders with logo and nav links

- **WHEN** the page loads
- **THEN** the logo "T" is visible at the top center
- **AND** a hamburger menu toggle is visible at the top right

#### Scenario: Sidebar opens and closes on toggle

- **WHEN** I click the hamburger toggle
- **THEN** a sidebar navigation panel appears with links: Home, About Us, Our Menu, Reserve A Table, Contact
- **WHEN** I click the close button
- **THEN** the sidebar disappears

### Requirement: Hero section displays with background image and CTA

The system SHALL render a full-width hero section with a background image, centered heading "Welcome to Taster", and a "Reserve A Table" button that scrolls to the reservation section.

#### Scenario: Hero section displays with heading and CTA

- **WHEN** the page loads
- **THEN** the heading "Welcome to Taster" is visible
- **AND** a "Reserve A Table" link is visible below it
- **AND** the link points to the reservation section

### Requirement: Features section shows alternating image-text cards

The system SHALL render 3 feature cards in alternating image/text layout with category labels, headings, descriptions, and "Learn More" links.

#### Scenario: Features section renders all cards

- **WHEN** I scroll to the "Find Your Best Food" section
- **THEN** 3 feature cards are displayed
- **AND** each card has a category label, heading, description, and "Learn More" link

### Requirement: About section displays restaurant description

The system SHALL render a centered "The Restaurant" heading with two descriptive paragraphs.

#### Scenario: About section renders heading and text

- **WHEN** I scroll to "The Restaurant" section
- **THEN** the heading "The Restaurant" is visible
- **AND** two descriptive paragraphs are displayed

### Requirement: Image divider renders decorative image

The system SHALL render a full-width decorative image divider between sections.

#### Scenario: Image divider renders

- **WHEN** the page loads
- **THEN** a decorative restaurant ambiance image is visible

### Requirement: Chefs section shows chef profiles

The system SHALL render 2 chef profiles side by side, each with a circular photo, name, "Master Chef" role, bio text, and social icons (Facebook, Twitter, Instagram).

#### Scenario: Chefs section renders 2 profiles

- **WHEN** I scroll to "Meet The Chefs" section
- **THEN** 2 chef cards are displayed
- **AND** each card has a circular photo, name, role, bio, and social links

### Requirement: Menu section has tabbed food items

The system SHALL render a tabbed menu interface with 3 tabs (Breakfast, Brunch, Dinner), each containing 4 menu items with thumbnail, dish name, description, and price. The Breakfast tab is active by default.

#### Scenario: Menu section displays with tabs

- **WHEN** I scroll to the "Menu" section
- **THEN** 3 tabs are visible: Breakfast, Brunch, Dinner
- **AND** the Breakfast tab is active by default
- **AND** 4 menu items are shown with thumbnail, name, description, and price

#### Scenario: Tab switching works correctly

- **WHEN** I click the "Brunch" tab
- **THEN** the Brunch tab becomes active
- **AND** 4 different menu items are shown

### Requirement: Services section displays 6 service cards

The system SHALL render 6 service cards in a 3-column grid, each with an icon, heading, and description.

#### Scenario: Services section renders all cards

- **WHEN** I scroll to "Other Services" section
- **THEN** 6 service cards are displayed
- **AND** each card has an icon, heading, and description

### Requirement: Reservation form renders all fields

The system SHALL render a reservation form with fields: Name, Email, Phone, Number of Persons (dropdown), Date, Time, and a "Reserve Now" submit button. Submitting shows a confirmation message.

#### Scenario: Reservation form renders with fields

- **WHEN** I scroll to the "Reservation" section
- **THEN** a form is visible with fields: Name, Email, Phone, Number of Persons, Date, Time
- **AND** a "Reserve Now" button is displayed

#### Scenario: Reservation form submits successfully

- **WHEN** I click "Reserve Now"
- **THEN** a confirmation message is displayed

### Requirement: Testimonials carousel cycles through reviews

The system SHALL render a testimonial carousel with 4 reviews, each showing a quote, author photo, author name, and role. Navigation via prev/next buttons and dot indicators.

#### Scenario: Testimonials carousel renders

- **WHEN** I scroll to "Customer Reviews" section
- **THEN** a testimonial with quote, author photo, name, and role is visible

#### Scenario: Testimonials navigation works

- **WHEN** I click the next button
- **THEN** the next testimonial is shown
- **WHEN** I click a dot indicator
- **THEN** the corresponding testimonial is shown

### Requirement: Contact form renders with fields

The system SHALL render a contact form with fields: Name, Email, Phone, Message, and a "Send Message" submit button. Submitting shows a confirmation message.

#### Scenario: Contact form renders

- **WHEN** I scroll to "Get In Touch" section
- **THEN** a contact form is visible with fields: Name, Email, Phone, Message
- **AND** a "Send Message" button is displayed

### Requirement: Footer contains about, hours, social, newsletter, and Component Dock link

The system SHALL render a 3-column footer with: (1) About Taster + Read More button, (2) Lunch/Dinner service hours, (3) Social icons + Newsletter form. The copyright line SHALL include a "Component Dock" link to https://www.componentdock.com/.

#### Scenario: Footer renders all columns

- **WHEN** I scroll to the footer
- **THEN** 3 columns are displayed: About, Service Hours, Follow Along + Newsletter
- **AND** a "Component Dock" link pointing to https://www.componentdock.com/ is visible

#### Scenario: Newsletter form validates email

- **WHEN** I enter an invalid email and click Subscribe
- **THEN** an error message is shown
- **WHEN** I enter a valid email and click Subscribe
- **THEN** a success message is shown
