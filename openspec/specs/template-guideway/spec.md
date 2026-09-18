# Template: Guideway (Consulting / IT Agency)

## Purpose

Recreation of ColorLib's **Consulotion** template as a modern consulting business website.

- **Source slug:** `consulotion`
- **ColorLib page:** https://colorlib.com/wp/template/consulotion/
- **Live preview:** https://preview.colorlib.com/theme/consolotion/ (404 — unreachable at prep time; design based on screenshot)
- **New name:** `guideway`
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript
- **Deploy target:** https://guideway.free.componentdock.com

## Design Tokens

| Token          | Value               | Notes                                            |
| -------------- | ------------------- | ------------------------------------------------ |
| Brand / accent | `#3b82f6`           | Vibrant blue — buttons, icons, active nav states |
| Dark           | `#0f172a`           | Navbar background, dark overlay                  |
| Body text      | `#475569`           | Medium grey paragraph text                       |
| Heading text   | `#0f172a`           | Dark navy for headings                           |
| Background     | `#ffffff`           | Main page background                             |
| Button primary | `#3b82f6`           | Blue pill-shaped CTA buttons                     |
| Button hover   | `#2563eb`           | Darker blue on hover                             |
| Button radius  | `9999px`            | Fully rounded / pill shape                       |
| Card border    | `#e2e8f0`           | Light slate border on feature cards              |
| Body font      | Inter, sans-serif   | Modern, clean sans-serif                         |
| Heading font   | Poppins, sans-serif | Bold geometric sans-serif for headings           |

## Requirements

### Requirement: Top Utility Bar

The system SHALL render a top utility bar with logo "Guideway" on the left, email and phone contact info in the center, and a "Free Consulting" blue CTA button on the right.

#### Scenario: Utility bar content

- **GIVEN** the user views the top utility bar
- **THEN** the logo "Guideway" is displayed on the left
- **AND** an email address and phone number are visible in the center
- **AND** a "Free Consulting" button is displayed on the right

### Requirement: Navigation Bar

The system SHALL render a dark navbar with six navigation links (Home, About, Projects, Services, Blog, Contact) and a search icon on the right.

#### Scenario: Navbar content

- **GIVEN** the user views the navigation bar
- **THEN** the nav bar has a dark navy background
- **AND** links "Home", "About", "Projects", "Services", "Blog", "Contact" are visible
- **AND** a search icon is displayed on the right

#### Scenario: Mobile hamburger toggle

- **GIVEN** the viewport width is less than 768px
- **THEN** a hamburger menu icon is visible
- **AND** clicking it toggles the mobile nav menu open/closed

### Requirement: Hero / Banner

The system SHALL render a full-width hero section with a background image, dark gradient overlay, sub-headline "WELCOME TO GUIDEWAY", main heading, and a blue pill-shaped CTA button.

#### Scenario: Hero content

- **GIVEN** the user views the hero section
- **THEN** a full-width background image is displayed
- **AND** a dark gradient overlay ensures text readability
- **AND** the sub-headline "WELCOME TO GUIDEWAY" is visible in white uppercase
- **AND** the main heading "We Are The Best Consulting Agency" is large, bold, and white
- **AND** a blue pill-shaped "Our Services" CTA button is below the heading

### Requirement: Features Section

The system SHALL render a two-column features section with heading "Our Main Features", descriptive text, and two feature cards with distinct styling.

#### Scenario: Features content

- **GIVEN** the user scrolls to the features section
- **THEN** the heading "Our Main Features" is visible
- **AND** a descriptive paragraph is shown below the heading
- **AND** two feature cards are displayed with distinct styling

### Requirement: Services Section

The system SHALL render a grid of at least three service cards, each with an icon, title, and description.

#### Scenario: Services grid

- **GIVEN** the user scrolls to the services section
- **THEN** at least 3 service cards are displayed in a grid
- **AND** each card shows an icon, title, and description

### Requirement: Stats / Counter Section

The system SHALL render a dark background band with at least four animated counter values with labels.

#### Scenario: Stats band

- **GIVEN** the user scrolls to the stats section
- **THEN** a dark background band is displayed
- **AND** at least 4 counter values are visible with labels
- **AND** the counters animate on scroll into view

### Requirement: Testimonials Section

The system SHALL render a testimonials section with at least one testimonial card showing an avatar, name, role, star rating, and quote.

#### Scenario: Testimonials content

- **GIVEN** the user scrolls to the testimonials section
- **THEN** a heading is visible
- **AND** at least one testimonial card shows an avatar, name, role, star rating, and quote

### Requirement: Contact Section

The system SHALL render a contact form with fields (name, email, subject, message) and a submit button, alongside address, phone, and email info.

#### Scenario: Contact form

- **GIVEN** the user scrolls to the contact section
- **THEN** a form with fields: name, email, subject, message is displayed
- **AND** a submit button is visible
- **AND** address, phone number, and email are displayed

### Requirement: Footer

The system SHALL render a dark footer with 3-4 columns (logo + blurb, Quick Links, Services, Contact info + social icons) and a copyright bar linking to Component Dock.

#### Scenario: Footer content

- **GIVEN** the user scrolls to the footer
- **THEN** a dark background is applied
- **AND** the logo and company blurb are displayed
- **AND** Quick Links column is present
- **AND** Contact info with social icons is present

#### Scenario: Footer Component Dock link

- **GIVEN** the page loads
- **THEN** the footer contains a link to https://www.componentdock.com/

### Requirement: Design Fidelity

The system SHALL use Inter for body text, Poppins for headings, brand color #3b82f6 as accent, dark navbar background #0f172a, and pill-shaped buttons (border-radius: 9999px).

#### Scenario: Design tokens applied

- **GIVEN** the template is rendered
- **THEN** the body font is Inter
- **AND** the heading font is Poppins
- **AND** the brand accent color is #3b82f6
- **AND** the navbar has a dark background (#0f172a)
- **AND** buttons have pill shape (border-radius: 9999px)

## Verification Checklist

- [ ] Top utility bar with logo, contact info, and "Free Consulting" CTA
- [ ] Dark navbar with 6 nav links and search icon
- [ ] Hero section with background image, overlay, heading, sub-headline, CTA
- [ ] Features section with heading, paragraph, and two styled cards
- [ ] Services grid with icon + title + description cards
- [ ] Stats counter band with dark bg and animated numbers
- [ ] Testimonials with avatar, name, rating, quote
- [ ] Contact form (name, email, subject, message) + contact info
- [ ] Dark footer with 3-4 columns + Component Dock link
- [ ] Fonts: Inter (body), Poppins (headings)
- [ ] Brand color #3b82f6 applied as accent
- [ ] Dark navbar bg #0f172a
- [ ] Pill-shaped buttons (border-radius: 9999px)
- [ ] Responsive breakpoints: hamburger nav at <768px, stacking columns
- [ ] No ColorLib references in app code
- [ ] Footer links to componentdock.com
- [ ] CNAME set to guideway.free.componentdock.com
- [ ] Coverage 100% lines/functions/branches/statements
