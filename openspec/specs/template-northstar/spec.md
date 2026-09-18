# Template: Northstar (Life Coaching One-Page)

## Purpose

Recreation of ColorLib's **Coach** life coaching template.

- **Source:** https://colorlib.com/wp/template/coach/
- **Preview:** https://preview.colorlib.com/theme/coach/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/coach-free-template.jpg
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript
- **Package:** `@free-react-templates/northstar`
- **Deploy:** `northstar.free.componentdock.com`

A life coaching / personal development single-page template with a hero image
slider, founder about section, training carousel, services icons, photo gallery
with lightbox, testimonial carousel, blog entries, contact form, and a 3-column
footer with newsletter subscription.

## Design Tokens

| Token         | Value                     | Usage                           |
| ------------- | ------------------------- | ------------------------------- |
| primary       | `#037ef3`                 | Buttons, links, logo dot, icons |
| primary-hover | `#0265c5`                 | Button hover state              |
| text-dark     | `#212529`                 | Headings, strong text           |
| text-body     | `#333333`                 | Body text                       |
| text-muted    | `#737373`                 | Secondary text, captions        |
| bg-light      | `#eff1f3`                 | Section alternating bg          |
| font-body     | `'Open Sans', sans-serif` | Body text, UI elements          |
| font-heading  | `'Playfair Display'`      | Display headings, hero text     |

## Requirements

### Requirement: Navigation

The system SHALL render a sticky top navbar with the site name "Northstar" and a blue dot accent. The navbar SHALL include section links (Home, About with dropdown, Our Training, Services, Contact) and a hamburger toggle for mobile menus. Navigation links SHALL smooth-scroll to their target sections.

#### Scenario: Navbar shows navigation links

- **WHEN** the page loads
- **THEN** I should see links for Home, About, Our Training, Services, Contact
- **AND** the navbar should be sticky at the top

#### Scenario: Navbar has dropdown menus

- **WHEN** I hover over "About"
- **THEN** a dropdown with Our Training, Testimonials, Gallery, Blog should appear

#### Scenario: Navbar smooth-scrolls to sections

- **WHEN** I click "Services" in the navbar
- **THEN** the page should scroll smoothly to the services section

### Requirement: Hero section

The system SHALL render a full-width hero section with an image slider that cycles through 3 slides every 5 seconds. The hero SHALL display a heading overlay with "We are" text and a CTA button.

#### Scenario: Hero displays heading and CTA

- **WHEN** the page loads
- **THEN** I should see a heading starting with "We are"
- **AND** I should see a "Learn More" button

#### Scenario: Hero cycles through slides

- **WHEN** 5 seconds pass
- **THEN** the hero heading should change to the next slide

### Requirement: About section

The system SHALL render an about section with a founder introduction heading "Hey there, I'm John The Founder", three bio paragraphs, a "Learn More" button, an upcoming speaking gigs list, and 4 team member cards with circular avatars.

#### Scenario: About displays founder info

- **WHEN** the page loads
- **THEN** I should see "Hey there, I'm John The Founder"
- **AND** I should see a "Learn More" button

#### Scenario: About shows speaking gigs

- **WHEN** the page loads
- **THEN** I should see "Upcoming Speaking Gigs" with 4 events

#### Scenario: About shows team members

- **WHEN** the page loads
- **THEN** I should see 4 team member cards with names and bios

### Requirement: Training section

The system SHALL render a training section with gray background, centered heading "Our Training", description text, and a grid of training cards with images and descriptions.

#### Scenario: Training displays program cards

- **WHEN** the page loads
- **THEN** I should see heading "Our Training"
- **AND** I should see training cards with images and descriptions

### Requirement: Services section

The system SHALL render a services section with white background, centered heading "Our Services", description text, and a grid of service cards with lucide-react icons, titles, and descriptions.

#### Scenario: Services displays service cards

- **WHEN** the page loads
- **THEN** I should see heading "Our Services"
- **AND** I should see service cards with icons, titles, and descriptions

### Requirement: Gallery section

The system SHALL render a gallery section with centered heading "Gallery" and a 4-column responsive grid of 12 images. Clicking an image SHALL open a lightbox overlay, and clicking the backdrop SHALL close it.

#### Scenario: Gallery displays image grid

- **WHEN** the page loads
- **THEN** I should see heading "Gallery"
- **AND** I should see a grid of 12 images

#### Scenario: Gallery opens lightbox on click

- **WHEN** I click a gallery image
- **THEN** a lightbox overlay should open with the full image

#### Scenario: Gallery closes lightbox on backdrop click

- **WHEN** the lightbox is open
- **AND** I click the backdrop
- **THEN** the lightbox should close

### Requirement: Testimonials section

The system SHALL render a testimonials section with centered heading "Happy Customers" and a grid of testimonial cards with blockquotes, circular avatar photos, and names.

#### Scenario: Testimonials display quotes

- **WHEN** the page loads
- **THEN** I should see heading "Happy Customers"
- **AND** I should see testimonial cards with quotes, avatars, and names

### Requirement: Blog section

The system SHALL render a blog section with centered heading "Our Blog", description text, and a 2-column grid of 4 blog entries with thumbnail images, titles, dates, excerpts, and "Read More" links.

#### Scenario: Blog displays entries

- **WHEN** the page loads
- **THEN** I should see heading "Our Blog"
- **AND** I should see 4 blog entries with thumbnails, titles, dates, and excerpts

### Requirement: Contact section

The system SHALL render a contact section with gray background, centered heading "Contact Us", a 3-column info row (Address, Phone, Email), and a form with First Name (x2), Email, Message textarea, and "Send Message" button.

#### Scenario: Contact displays form fields

- **WHEN** the page loads
- **THEN** I should see fields for First Name (x2), Email, Message
- **AND** a "Send Message" button

#### Scenario: Contact shows info

- **WHEN** the page loads
- **THEN** I should see Address, Phone, and Email information

### Requirement: Footer section

The system SHALL render a footer with dark background, 3-column layout (About Us, Quick Links, Follow Us + Subscribe Newsletter), and a copyright bar with a link to componentdock.com.

#### Scenario: Footer displays content

- **WHEN** the page loads
- **THEN** I should see an "About Us" description
- **AND** I should see "Quick Links" with smooth-scroll anchors
- **AND** I should see a "Subscribe Newsletter" form with email input

#### Scenario: Footer links to Component Dock

- **WHEN** the page loads
- **THEN** the footer should contain a link to componentdock.com
