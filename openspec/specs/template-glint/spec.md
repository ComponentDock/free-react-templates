# Template: Glint (Dental Clinic Landing Page)

## Purpose

Glint is a single-page dental clinic landing page in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Prodent" free template (source:
https://colorlib.com/wp/template/prodent/), built under a DIFFERENT name
(**Glint**), with the monorepo stack: Vite + React 19 + Tailwind CSS 4

- TypeScript.

The original is a Bootstrap 4 dental clinic page with a sticky navbar,
hero slider, green CTA banner, about section, stats counter, services
grid, photo gallery, testimonials slider, newsletter subscription, and a
multi-column dark footer. The design uses Montserrat (Google Fonts),
#71cd29 green brand color, dark #2d2d2d headings, and #696969 body
text.

**WHAT MAKES GLINT DISTINCT (signature behaviors):**

1. **Green-branded dental clinic theme.** Primary brand #71cd29, with
   Montserrat font throughout. Dark navbar, light info bar above nav,
   green CTA buttons, and a dark footer.
2. **Header info bar.** Four-column bar (address, hours, phone,
   appointment) with lucide icons, rendered above the main navbar.
3. **Hero slider.** Two-slide carousel with dark overlay on dental
   images, heading, paragraph, and green CTA button.
4. **Green CTA banner.** Full-width green #71cd29 banner with
   "Schedule your appointment for a free consultation" and a light
   button.
5. **About section.** Image left, text right ("We Care About Your
   Teeth") with awards image below.
6. **Stats counter.** Dark background with 4 dental statistics (X-rays,
   Tooth Brushes, Extractions, Happy Patients) with tooth icons.
7. **Services grid.** 6 service cards in a 3-column grid with icons
   (Crowns Bridges, Implants, Teeth Whitening, Root Canals, Wisdom
   Teeth, Braces).
8. **Photo gallery.** 4 full-width images in a row.
9. **Testimonials.** Slider with quotes, author name, role, and photo.
10. **Newsletter.** Green background with email input and dark subscribe
    button.
11. **Footer.** Three-column footer top (about+social, services list,
    opening hours) + bottom copyright with Component Dock link.

## Requirements

### Requirement: Page structure and branding

The app SHALL render a single-page dental clinic landing page with the
Glint brand name, Montserrat font, and the #71cd29 green color scheme.

#### Scenario: Document title and meta

- **GIVEN** the Glint app is rendered
- **THEN** the document title SHALL be "Glint — Dental Clinic Template"
- **AND** a meta description SHALL mention "dental clinic"

#### Scenario: Font loading

- **GIVEN** the Glint app is rendered
- **THEN** the page SHALL load Montserrat from Google Fonts
- **AND** Montserrat SHALL be used for headings and body text

### Requirement: Header info bar

The header SHALL render a four-column info bar above the navbar with
address, hours, phone, and appointment details, each with an icon.

#### Scenario: Info bar columns

- **GIVEN** the Glint app is rendered
- **THEN** four info columns SHALL be visible in the header bar
- **AND** each column SHALL have an icon (lucide) and text content
- **AND** the info bar background SHALL be the light gray #eff2f4

### Requirement: Navigation bar

The navbar SHALL display the Glint logo and navigation links (Home,
About, Services, Blog, Contact).

#### Scenario: Navigation links

- **GIVEN** the Glint app is rendered
- **THEN** the navbar SHALL contain links for Home, About, Services,
  Blog, and Contact
- **AND** the logo text SHALL read "Glint"

### Requirement: Hero slider

The hero section SHALL render a two-slide carousel with dark overlay on
dental images, heading, paragraph, and green CTA button.

#### Scenario: Hero slides

- **GIVEN** the Glint app is rendered
- **THEN** a hero section SHALL be visible with a heading and CTA button
- **AND** the CTA button text SHALL read "Get Appointment"
- **AND** the hero background SHALL use a placeholder image from
  picsum.photos

### Requirement: CTA banner

A full-width green banner SHALL appear below the hero with a consultation
prompt and a light button.

#### Scenario: CTA banner content

- **GIVEN** the Glint app is rendered
- **THEN** a green banner SHALL be visible with text "Schedule your
  appointment for a free consultation"
- **AND** a "Learn More" button SHALL be present

### Requirement: About section

The about section SHALL display an image on the left and descriptive
text on the right, with an awards image below.

#### Scenario: About content

- **GIVEN** the Glint app is rendered
- **THEN** an about section SHALL be visible with a heading "We Care
  About Your Teeth"
- **AND** a paragraph SHALL describe the dental practice
- **AND** an image placeholder SHALL be rendered from picsum.photos

### Requirement: Stats counter

A dark-background section SHALL display 4 dental statistics with icons.

#### Scenario: Stats display

- **GIVEN** the Glint app is rendered
- **THEN** 4 statistics SHALL be visible
- **AND** each stat SHALL have a number, label, and tooth-related icon
- **AND** the stats section background SHALL be dark

### Requirement: Services grid

A services section SHALL display 6 service cards in a 3-column grid.

#### Scenario: Services cards

- **GIVEN** the Glint app is rendered
- **THEN** 6 service cards SHALL be rendered
- **AND** each card SHALL have an icon, title, and description
- **AND** the services SHALL include: Crowns Bridges, Implants, Teeth
  Whitening, Root Canals, Wisdom Teeth, Braces

### Requirement: Photo gallery

A gallery section SHALL display 4 placeholder images in a row.

#### Scenario: Gallery images

- **GIVEN** the Glint app is rendered
- **THEN** 4 gallery images SHALL be visible
- **AND** each image SHALL use picsum.photos as placeholder

### Requirement: Testimonials

A testimonials section SHALL display quotes with author name, role, and
photo.

#### Scenario: Testimonial content

- **GIVEN** the Glint app is rendered
- **THEN** at least one testimonial SHALL be visible with a quote,
  author name, and role

### Requirement: Newsletter section

A newsletter section SHALL render on a green background with an email
input and subscribe button.

#### Scenario: Newsletter form

- **GIVEN** the Glint app is rendered
- **THEN** a newsletter section SHALL be visible with text "Subscribe to
  our newsletter"
- **AND** an email input field SHALL be present
- **AND** a "Subscribe" button SHALL be present

### Requirement: Footer

The footer SHALL render a three-column top section and a copyright bar
with Component Dock link.

#### Scenario: Footer columns

- **GIVEN** the Glint app is rendered
- **THEN** the footer SHALL have 3 columns: about with social links,
  services links list, and opening hours table
- **AND** the footer background SHALL be dark (#0d0d0d)

#### Scenario: Component Dock credit

- **GIVEN** the Glint app is rendered
- **THEN** the footer SHALL contain a link to
  https://www.componentdock.com/
- **AND** the link text SHALL be "Component Dock"
- **AND** there SHALL be NO references to "colorlib" in the rendered app

### Requirement: Semantics

The page SHALL use semantic HTML elements (header, nav, main, section,
footer) and aria labels where appropriate.

#### Scenario: Semantic structure

- **GIVEN** the Glint app is rendered
- **THEN** a banner landmark SHALL be present
- **AND** a contentinfo landmark SHALL be present
- **AND** a main landmark SHALL be present
