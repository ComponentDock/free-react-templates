# Template: Tastebud (Food & Restaurant)

## Purpose

Recreation of ColorLib **Foodfun** — a food/restaurant landing page template.
- **Source slug:** `foodfun`
- **Preview URL:** https://preview.colorlib.com/theme/foodfun/
- **ColorLib page:** https://colorlib.com/wp/template/foodfun/
- **Stack:** React 19, Vite, Tailwind CSS 4, TypeScript
- **New name:** `tastebud` (no collision with existing apps)

## Design tokens (extracted from live preview CSS)

| Token | Value | Usage |
|-------|-------|-------|
| Brand gold | `#ffb606` | CTA buttons, highlights, accent text, hover states |
| Dark navy | `#131230` | Headings (h3, h5), nav links, footer background |
| Deep navy | `#0d0d27` | Copyright bar background |
| Light lavender | `#f9f9ff` | Card backgrounds, food content areas, dropdowns |
| Body text | `#777777` | Body paragraphs, secondary text |
| Dark overlay | `rgba(1,7,16,0.7)` / `rgba(1,7,16,0.8)` | Hero/testimonial/table overlays |
| White | `#fff` | Header background, testimonial cards |
| Font — headings | `"Playfair Display", serif` | h1-h5, italic weight 700 |
| Font — body | `"Roboto", sans-serif` | Body text, nav, buttons, uppercase labels |
| Button shape | `border-radius: 3px` radius variant | Primary buttons: gold bg, navy text |
| Button hover | transparent bg + gold border | `.template-btn:hover` |
| Section padding | `130px 0` (top/bottom) | Standard `.section-padding` |
| Card hover | `scale(1.1)` on image, gold bg on content | `.single-food:hover` |
| Testimonial card | white bg, `border-radius: 3px`, quote bg image | `.single-slide` |

## Requirements

### Feature: Tastebud — Food & Restaurant Landing Page

#### Scenario: Header navigation renders correctly

- **GIVEN** the user visits the Tastebud homepage
- **THEN** a floating header bar is visible at the top with rounded corners and white background
- **AND** the header contains a logo on the left and navigation links on the right
- **AND** the navigation links are: Home, About, Menu, Blog (with submenu: Blog Home, Blog Details), Contact
- **AND** the active link is "Home"
- **AND** on mobile, a hamburger menu toggle is visible (gold background, white bars)

#### Scenario: Hero banner section

- **GIVEN** the user is on the homepage
- **THEN** a full-width hero banner is displayed with a food-themed background image
- **AND** the banner has a dark overlay for text contrast
- **AND** the banner contains the subtitle "THE MOST INTERESTING FOOD IN THE WORLD" in uppercase white text
- **AND** the banner contains the heading "Discover the flavors of foodfun" with "flavors" and "food" highlighted in gold (#ffb606)
- **AND** the heading uses Playfair Display serif font, italic, large size

#### Scenario: Welcome section

- **GIVEN** the user scrolls below the hero
- **THEN** a split layout section appears: image on the left, text on the right
- **AND** the heading reads "welcome to food fun" with "welcome" in gold italic
- **AND** there are two paragraphs of descriptive text
- **AND** a "BOOK A TABLE" button with gold background and navy text is displayed
- **AND** on mobile, the layout stacks vertically (image above text)

#### Scenario: Food menu cards section

- **GIVEN** the user scrolls to the food menu area
- **THEN** a section header reads "we serve delicious food" with "we serve" in gold
- **AND** six food item cards are displayed in a 3-column grid
- **AND** each card has a food image at the top (with overflow hidden)
- **AND** each card has a content area below with the dish name and price
- **AND** the price is displayed in gold text, right-aligned
- **AND** each card has a short description paragraph
- **AND** on hover, the image scales up 1.1x and the content background turns gold
- **AND** on hover, the text color changes to navy for contrast

#### Scenario: Reservation CTA section

- **GIVEN** the user scrolls past the food menu
- **THEN** a full-width section with a food-themed background image is displayed
- **AND** the section has a dark overlay for text contrast
- **AND** the heading reads "Natural ingredients and testy food" in white Playfair Display
- **AND** a subtitle reads "some trendy and popular courses offered" in italic white
- **AND** a "RESERVATION" button is centered below with gold background, white text

#### Scenario: Special dishes section

- **GIVEN** the user scrolls to the special dishes area
- **THEN** a section header reads "Our special deshes" with "special" in gold
- **AND** there is an italic subtitle below the heading
- **AND** two dishes are displayed in alternating left-right layouts
- **AND** each dish has a large number (01, 02) in white Playfair Display
- **AND** each dish has a name with the first word in gold (e.g., "Garlic" / "Lemon")
- **AND** each dish has a description paragraph, a price in gold, and a "book a table" link with arrow
- **AND** each dish has a food image on the opposite side
- **AND** the second dish swaps the image/text order (image left, text right)

#### Scenario: Customer testimonials section

- **GIVEN** the user scrolls to the testimonials area
- **THEN** a dark overlay background section is displayed
- **AND** the section header reads "Customer says" with "says" in gold
- **AND** testimonial cards are displayed in a carousel/slider
- **AND** each card has a customer photo (circular, 100px), name in Playfair Display, title in italic, and quote text
- **AND** each card has a white background with rounded corners (3px)
- **AND** on hover, the customer name changes to gold

#### Scenario: Food update / blog section

- **GIVEN** the user scrolls to the food update area
- **THEN** the section header reads "Our food update" with "food" in gold
- **AND** three blog post cards are displayed in a 3-column grid
- **AND** each card has a food image at top, admin name and date below, a title, description, and "read more" link with arrow
- **AND** the "read more" link uses the arrow-link style (text + arrow that moves on hover)

#### Scenario: Table reservation form section

- **GIVEN** the user scrolls to the reservation form area
- **THEN** a dark overlay background section is displayed
- **AND** the section header reads "Book your table" with "your" in gold
- **AND** three form fields are displayed: Date (calendar icon), Time (clock icon), Number of Guests (user icon)
- **AND** each field has a white icon prefix and text input
- **AND** a centered "BOOK A TABLE" button with gold background is below the form

#### Scenario: Footer

- **GIVEN** the user scrolls to the bottom of the page
- **THEN** a dark navy (#131230) footer widget area is displayed
- **AND** the footer has three columns: logo + description, contact info (address, phone, email with icons), opening hours
- **AND** a copyright bar at the very bottom with deep navy (#0d0d27) background
- **AND** the copyright bar contains the copyright text and social media icons (Facebook, Twitter, Google+, Pinterest, Instagram)
- **AND** social icons turn gold on hover
- **AND** the footer MUST include a link to https://www.componentdock.com/ ("Component Dock")

#### Scenario: Responsive behavior

- **GIVEN** the user views the page on a mobile device (< 576px)
- **THEN** the header nav links are hidden and a hamburger toggle appears
- **AND** the hero banner padding is reduced
- **AND** food cards stack in a single column
- **AND** the welcome section stacks vertically
- **AND** the special dishes section stacks vertically
- **AND** the reservation form fields stack full-width
- **AND** the footer columns stack vertically

## Verification checklist

- [ ] Header renders with floating rounded white bar, logo, nav links
- [ ] Hero banner has food background image with dark overlay and correct text
- [ ] Welcome section has split layout (image + text) with gold accents
- [ ] Food menu grid shows 6 cards with image, name, price, description
- [ ] Food card hover effects work (image scale, background color change)
- [ ] Reservation CTA has background image, dark overlay, heading, button
- [ ] Special dishes section has alternating layout with numbered items
- [ ] Testimonials section has dark background, carousel with customer cards
- [ ] Blog/update section shows 3 cards with image, meta, title, read more
- [ ] Reservation form has 3 fields with icons and submit button
- [ ] Footer has 3-column widget area + copyright bar with social links
- [ ] Footer includes Component Dock link
- [ ] Responsive: hamburger menu on mobile, stacked layouts
- [ ] All colors match design tokens (gold #ffb606, navy #131230, lavender #f9f9ff)
- [ ] Fonts: Playfair Display for headings, Roboto for body
- [ ] No ColorLib references in app code
- [ ] 100% test coverage
