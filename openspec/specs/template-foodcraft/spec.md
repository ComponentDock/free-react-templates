# Template: Foodcraft (Food & Drinks)

## Purpose

Recreation of ColorLib's **Foodfun** — a restaurant/food landing page with floating navbar, hero banner with background image, welcome split section, food grid with 6 items, reservation CTA, special dishes showcase, customer testimonials carousel, food updates/blog cards, table booking form, and three-column footer.

- **Source:** Foodfun — https://colorlib.com/wp/template/foodfun/
- **Preview:** https://preview.colorlib.com/theme/foodfun/
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript
- **Category:** Food & Drinks

## Design Tokens

| Token                  | Value                                     | Source                                                                      |
| ---------------------- | ----------------------------------------- | --------------------------------------------------------------------------- |
| Font family (body)     | `"Roboto", sans-serif`                    | Google Fonts import in CSS `@import url(...Roboto:300,400,500,700)`         |
| Font family (heading)  | `"Playfair Display", serif`              | Google Fonts import in CSS `@import url(...Playfair+Display:400,700)`       |
| Primary/accent         | `#ffb606` (golden yellow)                 | CSS `.prime-color`, `.template-btn`, `.style-change`, hover states           |
| Dark navy              | `#131230`                                 | CSS `h3 { color: #131230 }`, `.footer-widget { background: #131230 }`       |
| Deeper dark            | `#0d0d27`                                 | CSS `.footer-copyright { background: #0d0d27 }`                             |
| Light background       | `#f9f9ff`                                 | CSS `.food-content { background: #f9f9ff }`, `.main-menu` dropdown bg        |
| Body text color        | `#777777`                                 | CSS `body { color: #777 }`                                                   |
| Menu text color        | `#131230`                                 | CSS `.main-menu ul li a { color: #131230 }`                                 |
| Menu link hover        | `#ffb606`                                 | CSS `.sub-menu li a:hover { color: #ffb606 }`                               |
| Button style           | uppercase, Roboto 14px 500, no radius     | CSS `.template-btn { text-transform: uppercase; font-size: 14px; border-radius: 0 }` |
| Button bg              | `#ffb606`                                 | CSS `.template-btn { background: #ffb606 }`                                 |
| Button hover           | transparent + `#ffb606` border            | CSS `.template-btn:hover { background: transparent; border: 1px solid #ffb606 }` |
| Section padding        | 130px top/bottom                          | CSS `.section-padding { padding: 130px 0 }`                                 |
| Banner overlay         | grey fallback `#b0b0b0` + background img  | CSS `.banner-area { background-color: #b0b0b0; background-image: url(../images/banner-bg.jpg) }` |
| Testimonial overlay    | `rgba(1,7,16,0.8)`                        | CSS `.testimonial-area:after { background: rgba(1,7,16,0.8) }`              |
| Reservation overlay    | `rgba(1,7,16,0.7)`                        | CSS `.table-area:after { background: rgba(1,7,16,0.7) }`                    |
| Card border radius     | 3px                                       | CSS `.testimonial-slider .single-slide { border-radius: 3px }`              |
| Customer avatar radius | 50% (circle)                              | CSS `.testimonial-slider img { border-radius: 50% }`                        |
| Heading italic variant | Playfair Display italic, not italic       | CSS `.banner-area .style-change { font-style: normal }` overrides default italic |
| Input icon bg          | `#fff`                                    | CSS `.input-group-text { background: #fff }`                                |

## Requirements

### Requirement: Navbar renders with logo and navigation links

The application SHALL display a floating navbar with a logo image and navigation links.

#### Scenario: Navbar content renders

- **WHEN** the page loads
- **THEN** a logo image is displayed in the header
- **AND** navigation links for Home, About, Menu, Blog, and Contact are visible
- **AND** the Blog link has a submenu with Blog Home and Blog Details items

#### Scenario: Navbar is fixed at top

- **WHEN** the page loads
- **THEN** the header floats centered at the top with a white background and 3px border-radius

### Requirement: Hero banner displays with headline and subtext

The application SHALL display a full-width hero banner with a background image, heading text, and accent-colored highlights.

#### Scenario: Hero content renders

- **WHEN** the page loads
- **THEN** the heading "Discover the flavors of foodcraft" is displayed
- **AND** the subtext "the most interesting food in the world" is shown above the heading
- **AND** the words "flavors" and "food" are highlighted in the golden accent color `#ffb606`

### Requirement: Welcome section shows restaurant intro with image

The application SHALL display a split-layout welcome section with an image on the left and text on the right.

#### Scenario: Welcome content renders

- **WHEN** the page loads
- **THEN** the heading "welcome to foodcraft" is displayed with "welcome" in golden accent italic
- **AND** two description paragraphs are shown
- **AND** a "book a table" CTA button is present
- **AND** a decorative welcome image is displayed on the left side

### Requirement: Food grid displays 6 menu items

The application SHALL display a food grid section with 6 food items, each showing an image, name, price, and description.

#### Scenario: Food items render

- **WHEN** the page loads
- **THEN** 6 food item cards are displayed in a 3-column responsive grid
- **AND** each card has a food image, a name, a price in golden accent, and a description
- **AND** the section heading reads "we serve delicious food" with "we serve" in italic golden accent

#### Scenario: Food card hover effect

- **WHEN** the user hovers over a food card
- **THEN** the food image scales up slightly
- **AND** the card background changes to golden `#ffb606`
- **AND** the text color changes to dark `#131230`

### Requirement: Reservation CTA section with background image

The application SHALL display a full-width reservation call-to-action section with a background image and dark overlay.

#### Scenario: Reservation CTA renders

- **WHEN** the page loads
- **THEN** the heading "Natural ingredients and tasty food" is displayed
- **AND** the subheading "some trendy and popular courses offered" is shown
- **AND** a "reservation" button is present

### Requirement: Special dishes section with numbered items

The application SHALL display a special dishes section with two featured dishes in alternating left-right layouts.

#### Scenario: Special dishes render

- **WHEN** the page loads
- **THEN** the section heading "Our special deshes" is displayed with "special" in golden accent
- **AND** dish 01 "Garlic green beans" shows on the left with text and a "book a table" arrow link
- **AND** dish 01 has a description, price `$12.00`, and a decorative dish image on the right
- **AND** dish 02 "Lemon rosemary chicken" shows on the right with text (reversed layout)
- **AND** dish 02 has a description, price `$12.00`, and a decorative dish image on the left

### Requirement: Testimonials section with customer quotes

The application SHALL display a testimonials section with customer reviews including avatars, names, roles, and quotes.

#### Scenario: Testimonials render

- **WHEN** the page loads
- **THEN** the section heading "Customer says" is displayed with "says" in golden accent
- **AND** at least 2 customer testimonial cards are shown
- **AND** each card has a circular avatar image, customer name, role title, and quote text
- **AND** testimonial cards have a white background with 3px border-radius and a quote icon

### Requirement: Food updates section with blog-style cards

The application SHALL display a food updates section with 3 blog-style cards showing images, meta info, titles, descriptions, and read-more links.

#### Scenario: Food update cards render

- **WHEN** the page loads
- **THEN** the section heading "Our food update" is displayed with "food" in golden accent
- **AND** 3 blog-style cards are shown in a row
- **AND** each card has a food image, admin name, date, title, description, and a "read more" arrow link

### Requirement: Table booking form

The application SHALL display a table booking section with date, time, and party size inputs.

#### Scenario: Booking form renders

- **WHEN** the page loads
- **THEN** the section heading "Book your table" is displayed with "your" in golden accent
- **AND** three input fields with icon prefixes (calendar, clock, user) are shown
- **AND** a "book a table" button is present below the inputs
- **AND** the section has a background image with dark overlay

### Requirement: Footer with three columns and copyright bar

The application SHALL display a footer with three columns (about, contact, opening hours) and a copyright bar with social links.

#### Scenario: Footer sections render

- **WHEN** the page loads
- **THEN** a dark navy footer (`#131230`) with three columns is displayed
- **AND** column 1 shows a logo and description text
- **AND** column 2 shows "contact us" with address, phone, and email with icon markers
- **AND** column 3 shows "opening hours" with daily schedule
- **AND** a copyright bar at the bottom has social media icon links (Facebook, Twitter, Google+, Pinterest, Instagram)
- **AND** the copyright bar links to https://www.componentdock.com/ branded as "Component Dock"

### Requirement: No ColorLib references

The application SHALL NOT contain any references to ColorLib in source files.

#### Scenario: App code contains no ColorLib strings

- **WHEN** any source file in apps/foodcraft/ is inspected
- **THEN** no file contains the string "colorlib" (case-insensitive)

## Verification Checklist

- [ ] Navbar: white bg, logo, Home/About/Menu/Blog/Contact links, Blog submenu
- [ ] Hero: background image, "Discover the flavors of foodcraft" heading, accent highlights
- [ ] Welcome: split layout, "welcome to foodcraft" heading, paragraphs, "book a table" button, image
- [ ] Food Grid: 6 food cards with image, name, price, description; hover effect
- [ ] Reservation CTA: background image, heading, subheading, "reservation" button
- [ ] Special Dishes: 2 numbered dishes with alternating layout, descriptions, prices, images
- [ ] Testimonials: "Customer says" heading, 2+ testimonial cards with avatars and quotes
- [ ] Food Updates: 3 blog cards with image, meta, title, description, "read more"
- [ ] Table Booking: 3 input fields with icons, "book a table" button, background image
- [ ] Footer: 3 columns (about/contact/hours), copyright bar, social icons, Component Dock link
- [ ] No ColorLib references in app code
- [ ] All tests pass with 100% coverage
