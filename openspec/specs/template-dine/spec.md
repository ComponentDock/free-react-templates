# Template: Dine

## Purpose

Recreation of ColorLib's **Gourmet** — a restaurant/food landing page with dark navbar, hero slider, about section, gallery, special menu carousel, our menu grid, testimonials, blog, and footer.

- **Source:** Gourmet — https://colorlib.com/wp/template/gourmet/
- **Preview:** https://preview.colorlib.com/theme/gourmet/
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript
- **Category:** Food & Drinks

## Design Tokens

| Token                 | Value                          | Source                                                         |
| --------------------- | ------------------------------ | -------------------------------------------------------------- |
| Font family (body)    | `"Open Sans", sans-serif`      | Google Fonts link                                              |
| Font family (heading) | `"DM Serif Display", serif`    | Google Fonts link                                              |
| Primary/accent        | `#ff7404` (orange)             | CSS `text-primary`, `.btn-primary`, `.wrap-icon`               |
| Body text color       | `#868e96`                      | CSS `body { color: #868e96 }`                                  |
| Heading color         | `#000000`                      | CSS `h1,h2,h3,h4 { color: #000 }`                              |
| Navbar background     | `#000000` (black)              | CSS `header .navbar { background: black }`                     |
| Navbar link color     | `#ffffff` (white)              | CSS `.nav-link { color: white }`                               |
| Navbar active color   | `#ff7404`                      | CSS `.nav-link.active { color: #ff7404 }`                      |
| Hero overlay          | `rgba(0,0,0,0.2)`              | CSS `.slider-item:before { background: rgba(0,0,0,0.2) }`      |
| Button style          | uppercase, letter-spacing .2em | CSS `.btn { text-transform: uppercase; letter-spacing: .2em }` |
| Button primary bg     | `#ff9037` (hover)              | CSS `.btn.btn-primary:hover { background: #ff9037 }`           |
| Light section bg      | `#f8f9fa`                      | CSS `background-color: #f8f9fa` on slanted sections            |
| Slant angle           | `skewY(-6deg)`                 | CSS decorative slanted section overlays                        |

## Requirements

### Requirement: Navbar renders with brand and navigation links

The application SHALL display a dark navbar with the brand name "Dine" and navigation links including a Services dropdown.

#### Scenario: Brand and links render

- **WHEN** the page loads
- **THEN** the brand text "Dine" is displayed in the header
- **AND** navigation links for Home, Recipes, About, News, and Contact are visible
- **AND** a Services button is present that toggles a dropdown

#### Scenario: Services dropdown toggles

- **WHEN** the user clicks the Services button
- **THEN** a dropdown menu appears with Catering, Private Events, and Reservations items
- **AND** clicking a second time closes the dropdown

### Requirement: Hero slider displays with CTA

The application SHALL display a hero section with slide headings and a call-to-action button.

#### Scenario: Hero content renders

- **WHEN** the page loads
- **THEN** two hero slide headings are present ("Eat, Drinks at Dine" and "Enjoy delicious food at Dine")
- **AND** "Get Started" CTA buttons are visible on each slide

### Requirement: About section shows restaurant info

The application SHALL display an about section with a heading, description text, and signature placeholder.

#### Scenario: About content renders

- **WHEN** the page loads
- **THEN** the heading "The Restaurant" is displayed
- **AND** a description paragraph about the restaurant is visible
- **AND** a signature placeholder image is shown

### Requirement: Gallery displays three food images

The application SHALL display a gallery section with three food images.

#### Scenario: Gallery renders three images

- **WHEN** the page loads
- **THEN** three food images are displayed in the gallery section

### Requirement: Special menu carousel shows dishes

The application SHALL display a special menu section with a carousel of dish cards showing names and prices.

#### Scenario: Menu items render with prices

- **WHEN** the page loads
- **THEN** four menu items are displayed with dish names and prices
- **AND** each item shows a price in the range of $11.00 to $12.00

### Requirement: Our menu grid displays items

The application SHALL display a 2-column menu grid with six items showing names, descriptions, and prices.

#### Scenario: Menu grid renders all items

- **WHEN** the page loads
- **THEN** six menu items are displayed in a grid layout
- **AND** each item has a name, description, and price

### Requirement: Testimonials carousel shows quotes

The application SHALL display a testimonials section with three quotes including author names and roles.

#### Scenario: Testimonials render

- **WHEN** the page loads
- **THEN** three testimonial quotes are displayed
- **AND** each quote shows an author name and role

### Requirement: Blog section shows posts

The application SHALL display a blog section with two post cards showing titles and dates.

#### Scenario: Blog posts render

- **WHEN** the page loads
- **THEN** two blog post cards are displayed
- **AND** each card shows a title and date

### Requirement: Footer with Component Dock link

The application SHALL display a footer with About Us, Opening Hours, Contact Info, Quick Links, and a copyright bar linking to Component Dock.

#### Scenario: Footer sections render

- **WHEN** the page loads
- **THEN** an About Us section with social icons is visible
- **AND** Opening Hours and Contact Info sections are displayed
- **AND** Quick Links for About, Terms, Disclaimers, and Contact are shown
- **AND** a copyright bar with a link to https://www.componentdock.com/ branded as "Component Dock" is present

### Requirement: No ColorLib references

The application SHALL NOT contain any references to ColorLib in source files.

#### Scenario: App code contains no ColorLib strings

- **WHEN** any source file in apps/dine/ is inspected
- **THEN** no file contains the string "colorlib" (case-insensitive)

## Verification Checklist

- [ ] Navbar: dark bg, brand "Dine", all nav links, services dropdown
- [ ] Hero: 2 slides, background images, headings, CTA button
- [ ] About: image + text layout, "The Restaurant" heading
- [ ] Gallery: 3 food images
- [ ] Special Menu: carousel with 4 dish cards
- [ ] Our Menu: 2-column grid with 6 items
- [ ] Testimonials: 3 quotes with avatars
- [ ] Blog: 2 post cards
- [ ] Footer: About Us, Hours, Contact, Quick Links, Component Dock link
- [ ] No ColorLib references in app code
- [ ] All tests pass with 100% coverage
