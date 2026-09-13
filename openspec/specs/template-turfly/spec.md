# Template: Turfly (Lawn Care Landing Page)

## Purpose

Turfly is a single-page lawn care & landscaping landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Lawncare" website template design (see TEMPLATES.md), built
under a DIFFERENT name ("Turfly") with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

## Design reference

- **Original:** ColorLib "Lawncare" — lawn care & landscaping landing page
  (source: https://colorlib.com/wp/template/lawncare/).
- **Demo DOM:** https://preview.colorlib.com/theme/lawncare/
- **Design tokens:** Primary green `#4e9525`, yellow accent `#fbd341`,
  dark footer `#343a40`, font "Lato" (Google Fonts).
- **Section order:** Top bar → Navbar → Hero → Services → About →
  Seasonal Tips → Testimonials → Blog → Newsletter → Footer.

## Requirements

### Requirement: Navbar navigation

Users SHALL see a sticky dark navbar with the Turfly logo and navigation links (Home, Services, About, Blog, Contact) plus a "Get a Quote" CTA.

#### Scenario: Desktop navbar renders all links

- **WHEN** the page loads on desktop
- **THEN** the navbar displays the Turfly brand, five navigation links, and a "Get a Quote" button

#### Scenario: Mobile menu toggle

- **WHEN** a user taps the hamburger button on mobile
- **THEN** the mobile menu opens with the same links and a "Get a Quote" button

#### Scenario: Mobile menu close

- **WHEN** the mobile menu is open and the user taps the close button
- **THEN** the mobile menu closes

### Requirement: Hero section

Users SHALL see a hero section with a background image, the headline "Lawn care for everyone", a description, and two CTA buttons.

#### Scenario: Hero content renders

- **WHEN** the page loads
- **THEN** the hero section shows the headline "Lawn care for everyone", a description, "Our Services" link, and "Get a Quote" link

#### Scenario: Hero background image

- **WHEN** the hero section renders
- **THEN** a background image is displayed behind the text content

### Requirement: Services section

Users SHALL see three service cards (Garden Care, Lawn Mowing, Lawn Treatment) each with an icon, title, and description.

#### Scenario: Three service cards render

- **WHEN** the user scrolls to the Services section
- **THEN** three cards are displayed with headings "Garden Care", "Lawn Mowing", and "Lawn Treatment"

### Requirement: About section

Users SHALL see an about section with the heading "Welcome to Turfly", a five-item feature checklist, a "Learn More" CTA, and a lawn image.

#### Scenario: About content renders

- **WHEN** the user scrolls to the About section
- **THEN** the heading "Welcome to Turfly", five checklist items, a "Learn More" link, and a decorative image are displayed

### Requirement: Seasonal Tips section

Users SHALL see four seasonal tip cards (Spring, Summer, Autumn, Winter) each with an image, season badge, title, and description.

#### Scenario: Four seasonal cards render

- **WHEN** the user scrolls to the Seasonal Tips section
- **THEN** four cards are displayed with seasons Spring, Summer, Autumn, and Winter

### Requirement: Testimonials section

Users SHALL see three client testimonial cards each with an avatar, 5-star rating, quote, name, and role.

#### Scenario: Three testimonials render

- **WHEN** the user scrolls to the Testimonials section
- **THEN** three cards are displayed with names Sarah Mitchell, James Cooper, and Emily Watson

### Requirement: Blog section

Users SHALL see three blog post cards each with an image, date, title, excerpt, and "Read More" link.

#### Scenario: Three blog posts render

- **WHEN** the user scrolls to the Blog section
- **THEN** three blog post cards are displayed with titles and "Read More" links

### Requirement: Newsletter subscription

Users SHALL see a green newsletter banner with a heading, email input, and subscribe button. Submitting the form clears the email field.

#### Scenario: Newsletter form renders

- **WHEN** the user scrolls to the Newsletter section
- **THEN** a heading "Subscribe to our Newsletter", an email input, and a "Subscribe" button are displayed

#### Scenario: Newsletter form submission

- **WHEN** the user enters an email and clicks Subscribe
- **THEN** the email input is cleared

### Requirement: Footer with Component Dock link

Users SHALL see a four-column footer (brand, services, contact, newsletter) with a copyright line and a "Made with Component Dock" link to https://www.componentdock.com/.

#### Scenario: Footer columns render

- **WHEN** the user scrolls to the footer
- **THEN** four columns are displayed: brand with social links, services list, contact information, and a newsletter form

#### Scenario: Component Dock attribution

- **WHEN** the user looks at the footer bottom
- **THEN** a "Component Dock" link pointing to https://www.componentdock.com/ is displayed

#### Scenario: Footer newsletter form

- **WHEN** the user fills the footer newsletter email and clicks Subscribe
- **THEN** the email input is cleared
