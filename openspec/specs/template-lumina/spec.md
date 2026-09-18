# Spec: Lumina

Recreation of ColorLib "Ilene Berg" (https://colorlib.com/wp/template/ilene-berg/).
Preview: https://preview.colorlib.com/theme/ilene-berg/

## Purpose

Lumina is a professional agency landing page template with a fullscreen hero, tabbed about/history section, services grid, experience gallery, projects showcase, contact form, newsletter signup, and a branded footer.

## Requirements

### Requirement: Navbar with mobile toggle

Users SHALL see a fixed navbar with the "Lumina" logo and navigation links (Home, About, Services, Contact). On mobile, a hamburger button toggles the nav menu open/closed.

#### Scenario: Desktop navbar renders

- **WHEN** the page loads on desktop
- **THEN** I see the Lumina logo and all four navigation links

#### Scenario: Mobile hamburger toggles menu

- **WHEN** I click the hamburger button on mobile
- **THEN** the mobile nav links appear and the button changes to a close icon

#### Scenario: Mobile menu closes on link click

- **WHEN** I click any mobile nav link
- **THEN** the mobile menu closes

### Requirement: Fullscreen hero with CTA

Users SHALL see a fullscreen hero section with a background image, purple overlay, heading, subtitle, and a "Get Started" call-to-action button.

#### Scenario: Hero renders with content

- **WHEN** the page loads
- **THEN** I see the hero heading "No Need to Find, This Is the Place on Web", a subtitle, and a "Get Started" button

### Requirement: Tabbed history section

Users SHALL see a "Glorious History" section with three tabs (History, Mission, Vision) that switch content panels.

#### Scenario: Default tab is History

- **WHEN** the page loads
- **THEN** the History tab is active and its content is visible

#### Scenario: Clicking a tab switches content

- **WHEN** I click the "Mission" tab
- **THEN** the Mission content panel becomes visible

### Requirement: Services grid

Users SHALL see a 4-column services grid showing Software, WordPress, Front End, and UX Design with icons and descriptions.

#### Scenario: All services render

- **WHEN** the page loads
- **THEN** I see all four service cards with their titles and descriptions

### Requirement: Experience gallery

Users SHALL see a "Beautiful Experiences" section with image thumbnails, descriptive content, and a "View Details" CTA.

#### Scenario: Experience section renders

- **WHEN** the page loads
- **THEN** I see the section title, images, content heading, and "View Details" button

### Requirement: Projects showcase

Users SHALL see a "Some Projects" section on a purple background with project cards containing images and descriptions.

#### Scenario: Projects render

- **WHEN** the page loads
- **THEN** I see all three project cards with images and titles

### Requirement: Contact form

Users SHALL see a "Keep in Touch" section with a contact form (name, email, message fields) and a "Send Message" button.

#### Scenario: Form renders with required fields

- **WHEN** the page loads
- **THEN** I see name, email, and message inputs, all required, plus a submit button

#### Scenario: Form submission is handled

- **WHEN** I fill in the form and click "Send Message"
- **THEN** the form submission is handled without page navigation

### Requirement: Newsletter signup

Users SHALL see a yellow newsletter section with an email input and "Get Started" button.

#### Scenario: Newsletter renders

- **WHEN** the page loads
- **THEN** I see the yellow section with email input and "Get Started" button

### Requirement: Footer with Component Dock link

Users SHALL see a dark footer with four columns (About Agency, Navigation Links, Navigation Links, Instafeed), social icons, and a "Component Dock" attribution link.

#### Scenario: Footer renders all columns

- **WHEN** the page loads
- **THEN** I see all footer columns, social icons, and a link to componentdock.com

### Requirement: Design tokens match source

The template SHALL use Poppins font, purple (#8460f6) brand color, pink (#f3487f) service icons, yellow (#f9c400) newsletter background, and dark blue-gray (#4e5375) footer background.

#### Scenario: Brand colors are applied

- **WHEN** I inspect the styles
- **THEN** the hero overlay, buttons, and accents use purple, the newsletter uses yellow, and the footer uses dark blue-gray
