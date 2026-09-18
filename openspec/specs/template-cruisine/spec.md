# Template: Cruisine (Food & Drinks)

## Purpose

Recreation of ColorLib's **Wordpress Restaurant Themes** — a luxury restaurant landing page with full-screen hero, elegant cursive typography, floating sidebar, menu showcase, gallery, reservation form, and dark footer.

- **Source:** Wordpress Restaurant Themes — https://colorlib.com/wp/template/wordpress-restaurant-themes/
- **Preview:** https://preview.colorlib.com/theme/wordpress-restaurant-themes/ (UNREACHABLE — returns 404; research based on screenshot only)
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/jevelin-restaurant-website-template.jpg
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript
- **Category:** Food & Drinks
- **Note:** The ColorLib item "Wordpress Restaurant Themes" is a blog post (collection page) at `colorlib.com/wp/wordpress-restaurant-themes/`, not a template slug. The screenshot shows the Jevelin WordPress theme's restaurant demo (hosted at `jevelin.shufflehound.com`). The preview at `preview.colorlib.com/theme/wordpress-restaurant-themes/` returns 404. All design data derived from the screenshot.

## Design Tokens

| Token                 | Value                              | Source                                                        |
| --------------------- | ---------------------------------- | ------------------------------------------------------------- |
| Font family (heading) | `"Playfair Display", serif`        | Screenshot: elegant serif/cursive for "Restaurant & Dishes"   |
| Font family (script)  | `"Great Vibes", cursive`           | Screenshot: "Premium" text in flowing script                  |
| Font family (body)    | `"Poppins", sans-serif`            | Screenshot: clean sans-serif for nav links and body text      |
| Primary/accent        | `#c8d64e` (lime-gold)             | Screenshot: "Premium" text color, warm yellow-green           |
| Hero overlay          | `rgba(0,0,0,0.5)`                 | Screenshot: dark semi-transparent overlay on hero image       |
| Heading color (hero)  | `#ffffff` (white)                  | Screenshot: "Restaurant & Dishes" in white                    |
| Body text color       | `#333333` (dark charcoal)          | Screenshot: body text on light sections                       |
| Navbar background     | `transparent`                      | Screenshot: transparent navbar over hero image                |
| Navbar link color     | `#ffffff` (white)                  | Screenshot: white nav links on transparent bg                 |
| Navbar active color   | `#c8d64e` (lime-gold)             | Screenshot: active/hover state matches accent                 |
| Button style          | rounded, border, uppercase         | Screenshot: rounded pill buttons with white border            |
| Button primary bg     | `transparent` with `#fff` border   | Screenshot: hero CTA button                                   |
| Footer background     | `#222222` (dark charcoal)          | Screenshot: dark footer area                                  |
| Footer text color     | `#aaaaaa` (light gray)             | Screenshot: footer body text                                  |
| Section bg (light)    | `#ffffff` (white)                  | Screenshot: content sections on white                         |
| Border radius (cards) | `0px` (sharp edges)                | Screenshot: sharp rectangular cards, no rounded corners       |

## Requirements

### Requirement: Navbar renders with brand and navigation links

The application SHALL display a transparent navbar with the brand name "Cruisine" in a cursive/script font and navigation links.

#### Scenario: Brand and links render

- **WHEN** the page loads
- **THEN** the brand text "Cruisine" is displayed in the header in a cursive font
- **AND** navigation links for Home, About us, Menu, Reservation, and Contacts are visible
- **AND** social media icons (search, Twitter, Facebook, Instagram) are present on the right

#### Scenario: Navbar becomes opaque on scroll

- **WHEN** the user scrolls past the hero section
- **THEN** the navbar background transitions from transparent to dark (#222) with a shadow

### Requirement: Hero section displays full-screen with overlay text

The application SHALL display a full-screen hero section with a dark food photography background, a semi-transparent overlay, and elegant typography.

#### Scenario: Hero content renders

- **WHEN** the page loads
- **THEN** a full-viewport hero section is displayed with a food/drink background image
- **AND** a dark semi-transparent overlay covers the background
- **AND** the text "Premium" appears in a cursive/script font with lime-gold (#c8d64e) color
- **AND** "QUALITY" appears below in small uppercase spaced letters
- **AND** "Restaurant & Dishes" appears as the main heading in large white serif text
- **AND** a scroll-down indicator (mouse icon) is centered below the text

### Requirement: Floating sidebar with quick-action icons

The application SHALL display a fixed floating sidebar on the right side with quick-action icons.

#### Scenario: Sidebar renders with icons

- **WHEN** the page loads
- **THEN** a vertical sidebar is positioned on the right edge of the viewport
- **AND** the sidebar contains icons for layers, cart, help, globe, and mail
- **AND** each icon is clickable and styled with a white/light background

### Requirement: About section shows restaurant story

The application SHALL display an about section with a heading and descriptive content.

#### Scenario: About content renders

- **WHEN** the user scrolls to the about section
- **THEN** a section heading "About Us" or "Our Story" is displayed
- **AND** descriptive text about the restaurant is visible
- **AND** the section has a white background

### Requirement: Menu section displays dishes

The application SHALL display a menu section showcasing dishes with names, descriptions, and prices.

#### Scenario: Menu items render

- **WHEN** the user scrolls to the menu section
- **THEN** multiple menu items are displayed in a grid or list layout
- **AND** each item shows a dish name, brief description, and price
- **AND** the section has a heading like "Our Menu" or "Special Menu"

### Requirement: Gallery displays food photography

The application SHALL display a gallery section with food images.

#### Scenario: Gallery renders

- **WHEN** the user scrolls to the gallery section
- **THEN** multiple food images are displayed in a grid layout
- **AND** each image uses a placeholder (picsum) URL
- **AND** images have hover effects (subtle zoom or overlay)

### Requirement: Reservation section with form

The application SHALL display a reservation/booking section with a form.

#### Scenario: Reservation form renders

- **WHEN** the user scrolls to the reservation section
- **THEN** a heading like "Make a Reservation" is displayed
- **AND** form fields for name, email, phone, date, time, and number of guests are present
- **AND** a submit button is visible

### Requirement: Footer with Component Dock link

The application SHALL display a dark footer with restaurant info and a Component Dock link.

#### Scenario: Footer sections render

- **WHEN** the user scrolls to the footer
- **THEN** a dark (#222) footer with restaurant contact info is visible
- **AND** quick links and social media icons are displayed
- **AND** a copyright bar with a link to https://www.componentdock.com/ branded as "Component Dock" is present

### Requirement: No ColorLib references

The application SHALL NOT contain any references to ColorLib in source files.

#### Scenario: App code contains no ColorLib strings

- **WHEN** any source file in apps/cruisine/ is inspected
- **THEN** no file contains the string "colorlib" (case-insensitive)

## Verification Checklist

- [ ] Navbar: transparent over hero, brand "Cruisine" in cursive, all nav links, social icons
- [ ] Navbar: opaque dark background on scroll with shadow
- [ ] Hero: full-viewport, food background image, dark overlay
- [ ] Hero: "Premium" in script (lime-gold), "QUALITY" uppercase, "Restaurant & Dishes" heading
- [ ] Hero: scroll-down mouse indicator
- [ ] Floating sidebar: fixed right, 5 icons (layers, cart, help, globe, mail)
- [ ] About section: heading + descriptive text, white background
- [ ] Menu section: dishes with names, descriptions, prices
- [ ] Gallery: food images in grid, placeholder URLs, hover effects
- [ ] Reservation: form with name, email, phone, date, time, guests, submit
- [ ] Footer: dark bg, contact info, quick links, Component Dock link
- [ ] No ColorLib references in app code
- [ ] All tests pass with 100% coverage
