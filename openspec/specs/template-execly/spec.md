# Template: Execly (Corporate Business)

## Purpose

Recreation of the ColorLib **Corporate** business template as a React 19 + Vite +
Tailwind CSS 4 + TypeScript single-page application.

- **Source:** https://colorlib.com/wp/template/corporate/
- **Preview:** https://preview.colorlib.com/theme/corporate/
- **New name:** `execly` (apps/execly, @free-react-templates/execly)
- **Deploy target:** https://execly.free.componentdock.com
- **Category:** Business
- **Screenshot reference:** https://colorlib.com/wp/wp-content/uploads/sites/2/corporate-free-corporate-website-template.jpg

## Design Tokens

Extracted from the live preview stylesheet (css/main.css at preview.colorlib.com/theme/corporate/):

### Colors

| Token                 | Value             | Usage                   |
| --------------------- | ----------------- | ----------------------- |
| `--color-brand`       | `#6434fe`         | Primary buttons, accent |
| `--color-heading`     | `#222222`         | Headings h1-h6          |
| `--color-body`        | `#777777`         | Body text               |
| `--color-overlay`     | `rgba(0,0,0,0.5)` | Hero banner overlay     |
| `--color-footer`      | `#222222`         | Footer background       |
| `--color-footer-text` | `#999999`         | Footer paragraph text   |

### Typography

| Property       | Value                                   |
| -------------- | --------------------------------------- |
| Font family    | Poppins (Google Fonts, weights 300-700) |
| Body size      | 14px                                    |
| Body weight    | 300                                     |
| Line height    | 1.625em                                 |
| Heading weight | 600                                     |

## Requirements

### Requirement: Header with sticky navigation

The app SHALL render a sticky header containing the brand name "Execly" and navigation links (Home, About, Services, Portfolio, Recent Work, Contact) that scroll to the corresponding sections.

#### Scenario: Header renders with correct links

- **WHEN** the page loads
- **THEN** the header displays the brand name "Execly"
- **AND** navigation links are rendered for Home, About, Services, Portfolio, Recent Work, and Contact

#### Scenario: Mobile menu toggle

- **WHEN** the user clicks the mobile menu toggle button
- **THEN** the mobile navigation menu opens
- **AND** the toggle button icon changes to close
- **WHEN** the user clicks the close button
- **THEN** the mobile navigation menu closes

### Requirement: Hero banner section

The app SHALL render a full-width hero banner with a background image, dark overlay, subtitle "Discover the Colorful World", title "Build Your Dream", description text, and a "Discover Now" CTA button.

#### Scenario: Hero section renders all elements

- **WHEN** the page loads
- **THEN** the hero section displays the subtitle "Discover the Colorful World"
- **AND** the title "Build Your Dream" is displayed
- **AND** a "Discover Now" button is rendered

### Requirement: About section with features

The app SHALL render a two-column about section with an image on the left, a heading, description text, and two feature cards (Expert Services, Great Support).

#### Scenario: About section renders correctly

- **WHEN** the page loads
- **THEN** the about section displays the heading "We Believe that Interior beautifies total"
- **AND** two feature cards are rendered: "Expert Services" and "Great Support"

### Requirement: Services grid

The app SHALL render a 4-column grid of service cards, each with an icon, title, description, and "View Details" outlined button.

#### Scenario: Services section renders all cards

- **WHEN** the page loads
- **THEN** the services section displays the heading "What we can offer for you"
- **AND** four service cards are rendered: User friendly Admin, Full Responsive, Full Documentation, Reasonable Pricing
- **AND** each card has a "View Details" button

### Requirement: Features alternating layout

The app SHALL render two feature rows with alternating image/text layout.

#### Scenario: Features section renders alternating rows

- **WHEN** the page loads
- **THEN** two "Basic Revolutions" headings are displayed
- **AND** two "Basic & Common Repairs" subtitles are displayed

### Requirement: Portfolio gallery

The app SHALL render a grid of 6 portfolio images with hover overlay effect.

#### Scenario: Portfolio section renders all images

- **WHEN** the page loads
- **THEN** six portfolio images are rendered

### Requirement: Stats counter section

The app SHALL render a statistics section with 5 counters on a brand-colored background.

#### Scenario: Stats section displays all values

- **WHEN** the page loads
- **THEN** the stats section displays 2,536 Projects Completed, 6,784 Really Happy Clients, 1,059 Total Tasks Completed, 2,239 Cups of Coffee Taken, and 435 In House Professionals

### Requirement: Recent works section

The app SHALL render 3 recent work cards with background images, gradient overlay, title, description, and author info.

#### Scenario: Recent works renders all cards

- **WHEN** the page loads
- **THEN** the heading "Our Recent Works may impress you" is displayed
- **AND** three work cards are rendered with author name "Nettie Mullins"

### Requirement: Brand logos section

The app SHALL render a row of 5 brand logo placeholders.

#### Scenario: Brands section renders all logos

- **WHEN** the page loads
- **THEN** five brand placeholders are displayed (Brand One through Brand Five)

### Requirement: Contact form

The app SHALL render a contact form with name, email, subject, and message fields, plus a "Send Message" button.

#### Scenario: Contact form renders all fields

- **WHEN** the page loads
- **THEN** the heading "You can drop us a line" is displayed
- **AND** input fields exist for name, email, subject, and message
- **AND** a "Send Message" button is rendered

#### Scenario: Contact form prevents default submission

- **WHEN** the user fills in all required fields and clicks "Send Message"
- **THEN** the form prevents default submission (no page reload)

### Requirement: Footer with Component Dock link

The app SHALL render a footer with 3 columns (About Us, Contact Us, Newsletter), social links, and a copyright line linking to https://www.componentdock.com/.

#### Scenario: Footer renders all sections

- **WHEN** the page loads
- **THEN** the footer displays "About Us", "Contact Us", and "Newsletter" sections
- **AND** phone numbers 012-6532-568-9746 and 012-6532-569-9748 are displayed
- **AND** a link to "Component Dock" points to https://www.componentdock.com/
- **AND** social links for Facebook, Twitter, Dribbble, and Behance are rendered

### Requirement: Document title

The app SHALL set the document title to "Execly — Corporate Business Template" on mount.

#### Scenario: Title is set on mount

- **WHEN** the app mounts
- **THEN** document.title equals "Execly — Corporate Business Template"
