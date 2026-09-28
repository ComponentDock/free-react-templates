# Template: Crustly (Restaurant/Bakery)

## Purpose

Recreation of ColorLib's **Bakery2** template.

- **Source:** https://colorlib.com/wp/template/bakery2/
- **Preview:** https://preview.colorlib.com/theme/bakery2/
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript
- **Design category:** Restaurant / Bakery / Food

## Design Tokens (extracted from preview)

| Token                       | Value                                  |
| --------------------------- | -------------------------------------- |
| Primary brand color         | `#f42f2c` (vivid red)                  |
| Dark navy / header bg       | `#04091e`                              |
| Body text                   | `#777777`                              |
| Heading text                | `#222222`                              |
| Light background            | `#fafaff`                              |
| Input background            | `#e8e8e8`                              |
| Border color                | `#ededed` / `#eeeeee`                  |
| Heading font                | Playfair Display, serif (Google Fonts) |
| Body font                   | Roboto, sans-serif (Google Fonts)      |
| Button radius (main)        | 0px (square)                           |
| Button radius (newsletter)  | 45px (pill)                            |
| Button radius (form submit) | 3px                                    |

## Replication Reference

- **Live preview fetched:** Yes (200 OK). HTML + CSS analyzed.
- **CSS:** `css/style.css` fetched — tokens above extracted from it.
- **Screenshot:** `https://colorlib.com/wp/wp-content/uploads/sites/2/bakery2-free-template.jpg`
  (not analyzed in browser — preview DOM is the primary reference)

## Section Structure (1:1 fidelity)

| #   | Section                             | Description                                                                                                                                                                                |
| --- | ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 1   | Navbar                              | Transparent header over hero. Links: Home, About, Menu, Pages (dropdown), Blog (dropdown), Contact. White text, red `#f42f2c` on hover. Logo left, nav right.                              |
| 2   | Canvas Menu Bar                     | Sticky bar below navbar with hamburger icon (left) and "Contact Us" button (right). Dark background `#04091e`.                                                                             |
| 3   | Hero Banner                         | Full-width Swiper slider, 3 slides with food images. Overlay text image (slider-content.png).                                                                                              |
| 4   | About Our Story                     | Two-column: left text "About Our Story" + paragraph + "View Full Menu" button; right image. Light `#fafaff` bg.                                                                            |
| 5   | Feature Story (Honey Chocolate Pie) | Two-column reversed: left image, right text "Honey Chocolate Pie" + description + CTA. Same light bg.                                                                                      |
| 6   | Our Menu                            | Carousel (Owl) with 3 slides: Starter, Main Courses, Desserts. Each slide: left column menu items (item name, price, description), right column image. Section title "Our Menu / Explore". |
| 7   | Testimonials                        | Carousel: person image (4 cols) + text (8 cols): name, role, quote. 3 slides.                                                                                                              |
| 8   | Book a Table                        | Two-column: left image, right form (name, email, phone, date/time, event select, "Make Reservation" button).                                                                               |
| 9   | Footer                              | 4 link columns (Top Products, Quick Features, Quick Links, Resources) + Newsletter column (email input + arrow button). Bottom bar with copyright + social icons.                          |

## Requirements

### Requirement: Floating navbar with brand and navigation links

The system SHALL render a transparent floating navbar over the hero section with the brand "Crustly" and navigation links (Home, About, Menu, Pages, Blog, Contact). Links SHALL turn red (#f42f2c) on hover. On scroll past 50px, the navbar SHALL switch to a dark navy (#04091e) background.

#### Scenario: Navbar renders with brand and links

- **WHEN** the Crustly page loads
- **THEN** a navigation element SHALL be visible at the top
- **AND** the brand text "Crustly" SHALL be displayed
- **AND** links for Home, About, Menu, Pages, Blog, and Contact SHALL be present

#### Scenario: Navbar changes on scroll

- **GIVEN** the page is at the top
- **WHEN** the user scrolls past 50px
- **THEN** the navbar background SHALL change from transparent to dark navy

### Requirement: Sticky canvas menu bar with hamburger and contact button

The system SHALL render a sticky bar below the navbar with a hamburger toggle icon on the left and a "Contact Us" button on the right, using dark navy background.

#### Scenario: Canvas menu bar renders

- **WHEN** the page loads
- **THEN** a sticky bar SHALL be visible below the navbar
- **AND** a hamburger menu icon SHALL be present on the left
- **AND** a "Contact Us" link SHALL be on the right

#### Scenario: Hamburger toggles side menu

- **GIVEN** the canvas menu bar is visible
- **WHEN** the user clicks the hamburger icon
- **THEN** a side navigation menu SHALL open

### Requirement: Hero banner with food image and overlay text

The system SHALL render a full-width hero section with a food-themed background image, a dark overlay for contrast, and centered heading text.

#### Scenario: Hero section content

- **WHEN** the hero section renders
- **THEN** a full-width background image SHALL be displayed
- **AND** a dark overlay SHALL provide text contrast
- **AND** a heading "Welcome to Crustly" SHALL be shown centered

### Requirement: About Our Story section with split layout

The system SHALL render a two-column section with text on the left (heading "About Our Story", paragraphs, "View Full Menu" button) and an image on the right, on a light background (#fafaff).

#### Scenario: About section layout

- **WHEN** the about section renders
- **THEN** the heading "About Our Story" SHALL be visible
- **AND** a "View Full Menu" button SHALL be displayed
- **AND** an image SHALL appear on the right side

### Requirement: Feature Story section with reversed layout

The system SHALL render a reversed two-column section with an image on the left and text on the right ("Honey Chocolate Pie" heading, description, CTA), on a light background.

#### Scenario: Feature story layout

- **WHEN** the feature story section renders
- **THEN** the heading "Honey Chocolate Pie" SHALL be visible
- **AND** an image SHALL appear on the left side
- **AND** a CTA button SHALL be present

### Requirement: Our Menu section with tabbed categories

The system SHALL render a menu section with three tabbed categories (Starter, Main Courses, Desserts), each showing 4 menu items with name, price, and description.

#### Scenario: Menu tabs switch content

- **GIVEN** the Our Menu section is visible
- **WHEN** the user clicks a category tab
- **THEN** the corresponding menu items SHALL be displayed
- **AND** the active tab SHALL be visually indicated

#### Scenario: Menu items display

- **WHEN** a menu category is selected
- **THEN** 4 menu items SHALL be shown
- **AND** each item SHALL have a name, price, and description

### Requirement: Testimonials section with slider

The system SHALL render a testimonials section with a dark overlay background, a heading "What our customers say", and a slider showing one testimonial at a time with prev/next controls.

#### Scenario: Testimonial navigation

- **GIVEN** the testimonials section is visible
- **WHEN** the user clicks the next button
- **THEN** the next testimonial SHALL be displayed

#### Scenario: Testimonial content

- **WHEN** a testimonial is displayed
- **THEN** it SHALL show a circular avatar, name, role, and quote text

### Requirement: Book a Table section with reservation form

The system SHALL render a two-column section with an image on the left and a reservation form on the right (name, email, phone, date/time, event select, "Make Reservation" button).

#### Scenario: Reservation form fields

- **WHEN** the Book a Table section renders
- **THEN** input fields for Name, Email, Phone, and Date & Time SHALL be present
- **AND** a select dropdown for Event SHALL be present
- **AND** a "Make Reservation" button SHALL be displayed

### Requirement: Footer with link columns, newsletter, and copyright

The system SHALL render a dark navy footer with four link columns (Top Products, Quick Links, Features, Resources), a newsletter signup column, social icons, and a copyright bar linking to https://www.componentdock.com/.

#### Scenario: Footer link columns

- **WHEN** the footer renders
- **THEN** four link columns SHALL be displayed
- **AND** a newsletter email input SHALL be present

#### Scenario: Footer copyright and social

- **WHEN** the footer renders
- **THEN** social icons (Facebook, Twitter, Dribbble, Behance) SHALL be present
- **AND** a copyright line with a link to https://www.componentdock.com/ SHALL be displayed

## Verification Checklist

- [ ] All 9 sections present in order
- [ ] Brand color `#f42f2c` used for buttons and hover states
- [ ] Playfair Display for headings, Roboto for body
- [ ] Hero banner is full-width with slider
- [ ] Menu section uses carousel with 3 food categories
- [ ] Testimonials carousel with person image + text
- [ ] Book a Table form with all fields
- [ ] Footer with 4 link columns + newsletter + social icons
- [ ] Footer links to https://www.componentdock.com/
- [ ] No ColorLib references in app code
- [ ] Placeholder images via picsum.photos
- [ ] Responsive (mobile nav toggle)
