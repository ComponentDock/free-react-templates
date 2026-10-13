# Template: Pixelforge (Creative Agency)

## Purpose

Pixelforge is a creative agency portfolio template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib "Pixel" free
template (source: https://colorlib.com/wp/template/pixel/), built under a
DIFFERENT name (**Pixelforge**), with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

The original is described as: "Pixel is a modern and sophisticated free
creative agency website template with many practical and valuable features
and assets for a striking web presence." Published September 18, 2022.

- **Source template:** [Pixel](https://colorlib.com/wp/template/pixel/)
- **Live preview:** https://preview.colorlib.com/theme/pixel/ (LIVE — tokens extracted from this)
- **Screenshot:** ![preview](https://colorlib.com/wp/wp-content/uploads/sites/2/pixel-free-template.jpg) (1200×946)

## Design Tokens (extracted from live preview CSS)

| Token                | Value        | Notes                                                    |
|----------------------|--------------|----------------------------------------------------------|
| Font family          | Poppins (300–900) | Google Fonts import; `font-family: "Poppins", sans-serif` |
| Brand orange (CTA)   | `#ff7902`    | `.pixel-btn` background, hover accent                    |
| Brand blue/indigo    | `#688bfe`    | Preloader bg, `.btn-2`, newsletter input, outline btn-3  |
| Heading color        | `#000000`    | h1–h6 color, font-weight 500                             |
| Body text            | `#969696`    | Paragraph text, font-size 15px, line-height 2            |
| Dark text            | `#212121`    | Nav links, footer text                                   |
| Light gray bg        | `#f8f8f8`    | Section alt background                                   |
| Button radius        | `0`          | Sharp/square corners (no border-radius)                  |
| Button hover transition | 500ms    | `transition-duration: 500ms`                             |
| Section padding      | `100px`      | `.section-padding-100` top and bottom                    |
| Preloader bg         | `#688bfe`    | Full-screen preloader with white dots                    |
| Link color           | `#000000`    | Links default to black, font-weight 500, font-size 16px  |

## Section Structure (from live preview DOM)

1. **Navbar** — `.header-area` → `.pixel-main-menu` (sticky on scroll via `#sticker`). Logo left, nav links right: Home, About, Services, Pages (dropdown with nested submenus), Contact. Hamburger menu on mobile with slide-in panel.
2. **Hero Slider** — `.hero-area` → Owl-carousel with 2 slides. Each slide: h2 headline ("Digital Agency of the year 2019" / "Creative Agency of the year 2019"), h4 subtext with client info, "View Project" pixel-btn. Background images with overlay.
3. **Top Category Area** — `.top-catagory-area` → flex-wrap row of category/service cards with images.
4. **Newsletter** — `.nl-area` → "Stay in touch with us" heading, email input with blue (`#688bfe`) background and `border-radius: 5px 0 0 5px`, orange (`#ff7902`) submit area with `border-radius: 0 5px 5px 0`.
5. **Portfolio** — `.pixel-portfolio-area` → section heading "Made by pixel", filter tab buttons (All Projects, Visual, Advertising, Web Development), masonry-style grid of portfolio items. Each item: background image with hover overlay showing "Branding Identity" text.
6. **Contact** — `.contact-area` → "Get In Touch" heading, contact form with name/email/subject inputs, textarea for message, "Send Message" pixel-btn.
7. **Footer** — `.footer-area` → 3-column layout: logo + description left, Address widget center, Support widget (phone) center-right, Social widget (Facebook, Dribbble, Flickr, Instagram, LinkedIn, Pinterest icons) right. Copyright line at bottom → replace with Component Dock link.

## Requirements

### Navbar

Feature: Navbar

#### Scenario: Navigation displays logo and menu links

- **GIVEN** the page loads
- **THEN** a navigation bar should be visible with a logo on the left
- **AND** menu links should include Home, About, Services, Pages, Contact
- **AND** the navbar should become sticky on scroll

#### Scenario: Mobile hamburger menu

- **GIVEN** the viewport is mobile width
- **THEN** a hamburger menu icon should replace the nav links
- **AND** tapping it should open a slide-in mobile menu

### Hero Slider

Feature: Hero Slider

#### Scenario: Hero displays rotating slides

- **GIVEN** the page loads
- **THEN** a full-width hero slider should be visible
- **AND** it should show a headline like "Digital Agency of the year 2019"
- **AND** a subtext with client/credit info should appear below
- **AND** a "View Project" button should be visible

#### Scenario: Hero auto-rotates

- **GIVEN** the hero slider is visible
- **THEN** the slides should auto-advance after a few seconds
- **AND** navigation dots or arrows should be present

#### Scenario: Hero button styling

- **GIVEN** the hero section is visible
- **THEN** the "View Project" button should have orange (#ff7902) background
- **AND** it should have 0 border-radius (sharp corners)
- **AND** on hover it should transition to blue (#688bfe) over 500ms

### Top Category Area

Feature: Top Category Area

#### Scenario: Category cards display

- **GIVEN** the page loads
- **THEN** a row of category/service cards should appear below the hero
- **AND** each card should have a background image and label
- **AND** cards should be laid out in a flex-wrap row

### Newsletter

Feature: Newsletter Signup

#### Scenario: Newsletter form displays

- **GIVEN** the page loads
- **THEN** a "Stay in touch with us" section should appear
- **AND** an email input with blue (#688bfe) background should be visible
- **AND** the input should have left-rounded corners (border-radius: 5px 0 0 5px)

#### Scenario: Newsletter form interaction

- **GIVEN** the newsletter section is visible
- **WHEN** the user enters an email and submits
- **THEN** the form should accept the submission

### Portfolio

Feature: Portfolio Grid

#### Scenario: Portfolio displays with filter tabs

- **GIVEN** the page loads
- **THEN** a "Made by pixel" section heading should appear
- **AND** filter buttons should show: All Projects, Visual, Advertising, Web Development
- **AND** "All Projects" should be active by default
- **AND** a grid of portfolio items should be displayed

#### Scenario: Portfolio items show hover overlay

- **GIVEN** the portfolio section is visible
- **WHEN** a user hovers over a portfolio item
- **THEN** a centered overlay with "Branding Identity" text should appear
- **AND** the overlay should have a semi-transparent dark background

#### Scenario: Filter tabs filter portfolio items

- **GIVEN** the portfolio section is visible
- **WHEN** a user clicks "Visual" filter
- **THEN** only visual-category items should be visible
- **WHEN** a user clicks "All Projects"
- **THEN** all items should be visible again

### Contact Form

Feature: Contact Form

#### Scenario: Contact form displays

- **GIVEN** the page loads
- **THEN** a "Get In Touch" heading should appear
- **AND** a contact form with name, email, subject fields should be present
- **AND** a message textarea should be present
- **AND** a "Send Message" orange button should be visible

#### Scenario: Contact form validation

- **GIVEN** the contact section is visible
- **WHEN** the user submits without filling required fields
- **THEN** validation messages should appear

### Footer

Feature: Footer

#### Scenario: Footer displays widgets and social links

- **GIVEN** the page loads
- **THEN** a footer should be visible with 3 columns
- **AND** a logo should appear in the first column
- **AND** an Address widget should show location info
- **AND** a Support widget should show a phone number
- **AND** a Social widget should show icons for Facebook, Dribbble, Flickr, Instagram, LinkedIn, Pinterest

#### Scenario: Footer links to Component Dock

- **GIVEN** the footer is visible
- **THEN** a link to https://www.componentdock.com/ should be present
- **AND** it should display as "Component Dock"

## Verification Checklist

- [ ] All 7 sections rendered in correct order matching preview DOM
- [ ] Brand colors match: orange #ff7902, blue #688bfe, black #000000
- [ ] Font is Poppins with correct weights (300–900)
- [ ] Buttons have 0 border-radius (sharp corners), correct hover transition (500ms)
- [ ] Hero slider auto-rotates with 2 slides
- [ ] Portfolio grid has filter tabs that toggle item visibility
- [ ] Portfolio items show hover overlay with project title
- [ ] Newsletter input has blue background with left-rounded corners
- [ ] Contact form has all fields (name, email, subject, message, submit)
- [ ] Footer has Address, Support, and Social widgets
- [ ] Footer social icons include Facebook, Dribbble, Flickr, Instagram, LinkedIn, Pinterest
- [ ] Footer links to Component Dock (https://www.componentdock.com/)
- [ ] All placeholder images use picsum.photos
- [ ] No ColorLib references in app code
- [ ] Responsive: mobile hamburger menu, stacked layouts
- [ ] 100% test coverage for all components
