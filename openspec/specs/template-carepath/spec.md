# Template: CarePath (Medical / Healthcare)

## Purpose

Recreation of ColorLib **Medcare** — a medical/healthcare website template with top bar, navbar, hero banner, feature cards, services, about section, team cards, appointment area (FAQ + form), blog carousel, brand logos, and footer.

- **Source slug:** `medcare`
- **Preview URL:** https://preview.colorlib.com/theme/medcare/
- **Original:** https://colorlib.com/wp/template/medcare/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/medcare-free-template.jpg
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript

## Design Tokens (from preview DOM + CSS)

| Token            | Value                                | Notes                                       |
| ---------------- | ------------------------------------ | ------------------------------------------- |
| Font family      | `'Open Sans', sans-serif`            | Google Font, body text                      |
| Heading font     | `'Playfair Display', serif`          | Google Font, section headings / hero        |
| Primary accent   | `#0051d2` (medical blue)             | CTAs, buttons, brand color                  |
| Dark text        | `#020a21` (near-black)               | Headings, hero text                         |
| Body text        | `#797979` (medium gray)              | Paragraph copy                              |
| Light bg         | `#f7f7f7` (off-white)                | Alternating section backgrounds             |
| Button radius    | `0px` (square / no rounding)         | `main_btn` and `main_btn_light`             |
| Hero background  | `#0051d2` (solid blue)               | Banner area background                      |
| Section padding  | `3em 0` / `7em 0` (responsive)      | `.site-section` equivalent                  |

## Requirements

### Requirement: Top bar displays contact info and social links

The top bar SHALL display an email address, a location link, and social media icons (Facebook, Twitter, LinkedIn, Skype, Vimeo).

#### Scenario: Top bar renders contact and social

- **WHEN** the page loads
- **THEN** the email `medical@example.com` is visible
- **AND** a location link "Find our Location" is visible
- **AND** social media icons are displayed

### Requirement: Navbar displays logo and navigation links

The navbar SHALL display the CarePath logo and navigation links: Home, About, Department, Doctors, Blog (with dropdown for Blog, Blog Details, Element), Contact.

#### Scenario: Navbar renders all nav items

- **WHEN** the page loads
- **THEN** the CarePath logo is visible
- **AND** navigation links "Home", "About", "Department", "Doctors", "Blog", "Contact" are displayed

#### Scenario: Blog dropdown shows sub-items

- **WHEN** the user hovers/clicks on "Blog"
- **THEN** a dropdown shows "Blog", "Blog Details", "Element"

### Requirement: Hero banner displays main heading and CTAs

The hero banner SHALL display the heading "Making Health Care Better Together", description text, and two CTA buttons: "Make an Appointment" (primary) and "View Department" (light).

#### Scenario: Hero renders heading and CTAs

- **WHEN** the page loads
- **THEN** the heading "Making Health Care Better Together" is displayed
- **AND** a "Make an Appointment" button is present
- **AND** a "View Department" button is present

### Requirement: Feature section shows three feature cards

The feature section SHALL display three cards: Primary Care, Emergency Cases, and Online Appointment, each with an icon, title, and description.

#### Scenario: Feature section renders three cards

- **WHEN** the feature section is rendered
- **THEN** "Primary Care", "Emergency Cases", and "Online Appointment" cards are shown
- **AND** each card has an icon, title, and subtitle description

### Requirement: Services section displays three service items

The services section SHALL display the heading "Awesome Health Service" with a description, and three service cards: Neurology Service, Dental Clinic, and Plastic Surgery, each with an icon, title, description, and "Learn More" link.

#### Scenario: Services section renders three items

- **WHEN** the services section is rendered
- **THEN** "Neurology Service", "Dental Clinic", and "Plastic Surgery" cards are shown
- **AND** each card has a "Learn More" link

### Requirement: About section displays company info

The about section SHALL display the heading "Second Abundantly Move That Cattle Perform Appen Land", a subheading, paragraph text, and a "learn more" link. The about section is positioned right-aligned on desktop.

#### Scenario: About section renders content

- **WHEN** the about section is visible
- **THEN** the heading is displayed
- **AND** a "learn more" link is present

### Requirement: Team section shows three doctor cards

The team section SHALL display the heading "Medcare Experience Doctors" with description text, and three doctor cards with photo, name, specialty, phone number, and social icons.

#### Scenario: Team section renders three doctors

- **WHEN** the team section is rendered
- **THEN** three doctor cards are shown
- **AND** each card has a photo, name, specialty (Cardiologist), phone number, and social icons (Facebook, Twitter, Instagram, Skype)

### Requirement: Appointment area shows FAQ accordion and form

The appointment area SHALL display "Have Some Questions?" heading with a 5-item FAQ accordion on the left, and a "Make an Appointment" form with Full Name, Email, Message fields and a submit button on the right.

#### Scenario: Appointment area renders FAQ and form

- **WHEN** the appointment area is rendered
- **THEN** the FAQ accordion with 5 questions is displayed
- **AND** the appointment form with Name, Email, Message fields is shown
- **AND** a "Make an Appointment" submit button is present

### Requirement: Blog section displays three blog cards

The blog section SHALL display three blog post cards with an image, category tags (medical, dental, health), title, comment count, and like count.

#### Scenario: Blog section renders three posts

- **WHEN** the blog section is rendered
- **THEN** three blog cards are shown
- **AND** each card has category tags, a title, comment count, and like count

### Requirement: Brands section shows logo carousel

The brands section SHALL display a carousel of 6 brand/partner logos on a light (#f7f7f7) background.

#### Scenario: Brands carousel renders logos

- **WHEN** the brands section is rendered
- **THEN** a carousel of brand logos is displayed

### Requirement: Footer displays links, newsletter, and copyright

The footer SHALL display four link columns (Top Products, Quick Links, Features, Resources), a Newsletter section with email input and submit button, social icons (Facebook, Twitter, Dribbble, LinkedIn), and a copyright line. The footer MUST link `https://www.componentdock.com/` branded as "Component Dock".

#### Scenario: Footer renders all sections

- **WHEN** the footer is rendered
- **THEN** four link columns are displayed
- **AND** a newsletter email input and button are present
- **AND** social media icons are shown
- **AND** a copyright line is present
- **AND** a "Component Dock" link is present

## Verification Checklist

- [ ] All 10 section components render without errors
- [ ] Design tokens match: Open Sans body, Playfair Display headings, #0051d2 primary
- [ ] Hero banner has correct heading and two CTA buttons
- [ ] Feature section shows 3 cards with icons
- [ ] Services section shows 3 service items with "Learn More" links
- [ ] About section right-aligned on desktop
- [ ] Team section shows 3 doctor cards with social icons
- [ ] Appointment area: FAQ accordion (5 items) + form (Name, Email, Message)
- [ ] Blog section: 3 cards with tags, title, comments, likes
- [ ] Brands logo carousel renders
- [ ] Footer: 4 link columns + newsletter + social icons + copyright + Component Dock link
- [ ] Responsive: mobile hamburger menu, stacked layouts
- [ ] No ColorLib references in app code
- [ ] Tests pass with 100% coverage
