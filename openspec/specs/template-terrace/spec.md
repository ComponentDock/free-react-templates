# Template: Terrace (Food & Drinks)

## Purpose

Recreation of ColorLib's **Rooftop** — a fine dining restaurant landing page with elegant serif typography, hero banner, menu grid, image gallery, reservation form, chef's quotes, call-to-action carousel, contact section with map, and dark footer with newsletter.

- **Source:** Rooftop — https://colorlib.com/wp/template/rooftop/
- **Preview:** https://preview.colorlib.com/theme/rooftop/
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript
- **Category:** Food & Drinks

## Design Tokens

| Token                   | Value                                    | Source                                                                      |
| ----------------------- | ---------------------------------------- | --------------------------------------------------------------------------- |
| Font family (body)      | `"Roboto", sans-serif`                   | CSS `body { font-family: "Roboto", sans-serif }`                            |
| Font family (heading)   | `"Playfair Display", serif`              | CSS `h1,h2,h3 { font-family: "Playfair Display", serif }`                   |
| Primary/accent          | `#ad9966` (muted gold)                   | CSS `.primary-btn { background: #ad9966 }`, `.single-menu h3 { color: #ad9966 }` |
| Dark background         | `#04091e` (deep navy)                    | CSS `.footer-area { background-color: #04091e }`                            |
| Body text               | `#777777`                                | CSS `body { color: #777777 }`                                               |
| Heading color           | `#000000` (black)                        | CSS `.section-title h1 { color: #000 }`                                     |
| Light section bg        | `#faf5f0` (warm cream)                   | CSS `.booking-form { background: #faf5f0 }`                                 |
| Light card/input bg     | `#f9f9ff` (very light lavender)          | CSS `.single-menu { background: #f9f9ff }`                                  |
| White                   | `#ffffff`                                | CSS `.header-area { background-color: #fff }`, `.home-banner-content { color: #fff }` |
| Button style            | uppercase, no radius, letter-spacing 2px | CSS `.primary-btn { text-transform: uppercase; border-radius: 0; letter-spacing: 2px }` |
| Button bg               | `#ad9966`                                | CSS `.primary-btn { background: #ad9966; border: 1px solid #ad9966 }`       |
| Button hover            | transparent + gold text                  | CSS `.primary-btn:hover { background: transparent; color: #ad9966 }`        |
| Button dark variant     | `#000` bg, `#fff` text, white border     | CSS `.primary-btn.dark { background: #000; color: #fff; border: 1px solid #fff }` |
| Section padding         | `section-gap` (~120px)                   | CSS classes throughout                                                       |
| Hero heading            | 72px, uppercase, 10.8px letter-spacing   | CSS `.home-banner-content h1 { font-size: 72px; letter-spacing: 10.8px }`   |
| Section heading         | 48px, uppercase, 7.2px letter-spacing    | CSS `.section-title h1 { font-size: 48px; letter-spacing: 7.2px }`          |
| Menu category heading   | 21px italic, uppercase                   | CSS `.single-menu h3 { font-size: 21px; font-style: italic; text-transform: uppercase }` |
| Footer widget heading   | 18px, white, uppercase, 500 weight        | CSS `.single-footer-widget h4 { color: #fff; font-size: 18px; text-transform: uppercase }` |

## Requirements

### Requirement: Navbar with three-part layout

The application SHALL display a navbar with left navigation links, a centered logo, and right navigation links with dropdown menus.

#### Scenario: Navbar renders with all links

- **WHEN** the page loads
- **THEN** left navigation links for Home, Menu, and About are visible
- **AND** a centered logo image is displayed
- **AND** right navigation includes Pages (dropdown with Contact, Elements), Blog (dropdown with Blog, Blog Detail), and Gallery links

#### Scenario: Navbar dropdowns toggle

- **WHEN** the user clicks the Pages or Blog dropdown toggle
- **THEN** a dropdown menu appears with the sub-items
- **AND** clicking again or clicking elsewhere closes the dropdown

### Requirement: Hero banner with restaurant name and tagline

The application SHALL display a full-width hero banner with a background image, the restaurant name "Terrace", and a tagline.

#### Scenario: Hero content renders

- **WHEN** the page loads
- **THEN** the heading "Terrace" is displayed in large uppercase white text (72px, letter-spacing 10.8px)
- **AND** a horizontal rule divider is shown below the heading
- **AND** the tagline "A Fine Dining Restaurant" appears below the divider in uppercase white text

### Requirement: Side fixed navigation links

The application SHALL display fixed side elements with "View Menu" and "Book a Table" links.

#### Scenario: Fixed side links render

- **WHEN** the page loads
- **THEN** a "View Menu" link is visible on the left side with a downward arrow icon
- **AND** a "Book a Table" link is visible on the right side with a table icon

### Requirement: Menu section with categories and items

The application SHALL display a menu section with a heading on the left and three menu categories on the right, each containing items with names, prices, and descriptions.

#### Scenario: Menu heading renders

- **WHEN** the page loads
- **THEN** the heading "Daily Food Courses with Drinks" is displayed on the left
- **AND** a description paragraph is shown below the heading
- **AND** a "See Full Menu" button is present

#### Scenario: Menu categories render

- **WHEN** the page loads
- **THEN** three menu categories are displayed: Appetizer, Main Courses, and Drinks & Juices
- **AND** each category has an italic uppercase heading with a gold underline
- **AND** each category contains at least 2 menu items with name, price, and description

### Requirement: Gallery with 4 images in masonry layout

The application SHALL display a gallery section with 4 food/restaurant images in a staggered masonry layout.

#### Scenario: Gallery images render

- **WHEN** the page loads
- **THEN** 4 gallery images are displayed in a staggered layout
- **AND** each image has an overlay with a cross icon for lightbox popup
- **AND** images have different top margins creating the masonry effect

### Requirement: Reservation form with fields and heading

The application SHALL display a reservation section with a multi-field form on the left and a heading on the right.

#### Scenario: Reservation form renders

- **WHEN** the page loads
- **THEN** a form with warm cream background (`#faf5f0`) is displayed on the left
- **AND** form fields include: Event Name, Event Date (with calendar icon), Meal Preferences (select), Number of Guests (select), Budget, Contact Name, Email Address, Phone Number, and a message textarea
- **AND** a "Send Request" dark button is at the bottom

#### Scenario: Reservation heading renders

- **WHEN** the page loads
- **THEN** the heading "Book a Table or Rooms for private dining" is displayed on the right
- **AND** a description paragraph is shown below the heading

### Requirement: Chef's quotes section with image and signature

The application SHALL display a chef's quotes section with a heading, description, and signature on the left, and a chef image on the right.

#### Scenario: Chef's quotes content renders

- **WHEN** the page loads
- **THEN** the heading "Chef's Quotes" is displayed on the left
- **AND** a description paragraph is shown
- **AND** a signature image is displayed below the description
- **AND** a chef/restaurant image is shown on the right

### Requirement: Call-to-action carousel with food items

The application SHALL display a call-to-action section with an owl carousel showing food items with images and descriptions.

#### Scenario: CTA carousel renders

- **WHEN** the page loads
- **THEN** a carousel with at least 2 food items is displayed
- **AND** each item has a background image, a course heading, and a description

### Requirement: Contact section with map and details

The application SHALL display a contact section with a map on the left and restaurant contact details on the right.

#### Scenario: Contact details render

- **WHEN** the page loads
- **THEN** the heading "Terrace Fine Dining Restaurant" is displayed on the right
- **AND** address, phone numbers, and email addresses are shown
- **AND** a map placeholder is displayed on the left

### Requirement: Footer with columns, newsletter, and social links

The application SHALL display a dark navy footer with four link columns, a newsletter signup, and a copyright bar with social icons.

#### Scenario: Footer sections render

- **WHEN** the page loads
- **THEN** a dark navy footer (`#04091e`) with four link columns is displayed
- **AND** columns include Top Products, Quick Links, Features, and Resources
- **AND** a newsletter section with email input and arrow submit button is shown
- **AND** a copyright bar with social media icons (Facebook, Twitter, Dribbble, Behance) is present
- **AND** the copyright bar links to https://www.componentdock.com/ branded as "Component Dock"

### Requirement: No ColorLib references

The application SHALL NOT contain any references to ColorLib in source files.

#### Scenario: App code contains no ColorLib strings

- **WHEN** any source file in apps/terrace/ is inspected
- **THEN** no file contains the string "colorlib" (case-insensitive)

## Verification Checklist

- [ ] Navbar: 3-part layout, left links, center logo, right dropdowns
- [ ] Hero: background image, "Terrace" heading, hr divider, tagline
- [ ] Side links: "View Menu" left, "Book a Table" right
- [ ] Menu: heading + description + button left, 3 categories right with items
- [ ] Gallery: 4 images in staggered masonry, overlays with icons
- [ ] Reservation: form with 8+ fields, dark submit button, heading on right
- [ ] Chef's Quotes: heading, description, signature image, chef photo
- [ ] CTA Carousel: 2+ food items with images and descriptions
- [ ] Contact: map left, heading + address + phones + emails right
- [ ] Footer: 4 link columns, newsletter, copyright bar, social icons, Component Dock link
- [ ] No ColorLib references in app code
- [ ] All tests pass with 100% coverage
