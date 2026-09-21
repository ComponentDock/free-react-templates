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

## Gherkin requirements

### Feature: Tastebud — Food & Restaurant Landing Page

#### Scenario: Header navigation renders correctly
- **Given** the user visits the Tastebud homepage
- **Then** a floating header bar is visible at the top with rounded corners and white background
- **And** the header contains a logo on the left and navigation links on the right
- **And** the navigation links are: Home, About, Menu, Blog (with submenu: Blog Home, Blog Details), Contact
- **And** the active link is "Home"
- **And** on mobile, a hamburger menu toggle is visible (gold background, white bars)

#### Scenario: Hero banner section
- **Given** the user is on the homepage
- **Then** a full-width hero banner is displayed with a food-themed background image
- **And** the banner has a dark overlay for text contrast
- **And** the banner contains the subtitle "THE MOST INTERESTING FOOD IN THE WORLD" in uppercase white text
- **And** the banner contains the heading "Discover the flavors of foodfun" with "flavors" and "food" highlighted in gold (#ffb606)
- **And** the heading uses Playfair Display serif font, italic, large size

#### Scenario: Welcome section
- **Given** the user scrolls below the hero
- **Then** a split layout section appears: image on the left, text on the right
- **And** the heading reads "welcome to food fun" with "welcome" in gold italic
- **And** there are two paragraphs of descriptive text
- **And** a "BOOK A TABLE" button with gold background and navy text is displayed
- **And** on mobile, the layout stacks vertically (image above text)

#### Scenario: Food menu cards section
- **Given** the user scrolls to the food menu area
- **Then** a section header reads "we serve delicious food" with "we serve" in gold
- **And** six food item cards are displayed in a 3-column grid
- **And** each card has a food image at the top (with overflow hidden)
- **And** each card has a content area below with the dish name and price
- **And** the price is displayed in gold text, right-aligned
- **And** each card has a short description paragraph
- **And** on hover, the image scales up 1.1x and the content background turns gold
- **And** on hover, the text color changes to navy for contrast

#### Scenario: Reservation CTA section
- **Given** the user scrolls past the food menu
- **Then** a full-width section with a food-themed background image is displayed
- **And** the section has a dark overlay for text contrast
- **And** the heading reads "Natural ingredients and testy food" in white Playfair Display
- **And** a subtitle reads "some trendy and popular courses offered" in italic white
- **And** a "RESERVATION" button is centered below with gold background, white text

#### Scenario: Special dishes section
- **Given** the user scrolls to the special dishes area
- **Then** a section header reads "Our special deshes" with "special" in gold
- **And** there is an italic subtitle below the heading
- **And** two dishes are displayed in alternating left-right layouts
- **And** each dish has a large number (01, 02) in white Playfair Display
- **And** each dish has a name with the first word in gold (e.g., "Garlic" / "Lemon")
- **And** each dish has a description paragraph, a price in gold, and a "book a table" link with arrow
- **And** each dish has a food image on the opposite side
- **And** the second dish swaps the image/text order (image left, text right)

#### Scenario: Customer testimonials section
- **Given** the user scrolls to the testimonials area
- **Then** a dark overlay background section is displayed
- **And** the section header reads "Customer says" with "says" in gold
- **And** testimonial cards are displayed in a carousel/slider
- **And** each card has a customer photo (circular, 100px), name in Playfair Display, title in italic, and quote text
- **And** each card has a white background with rounded corners (3px)
- **And** on hover, the customer name changes to gold

#### Scenario: Food update / blog section
- **Given** the user scrolls to the food update area
- **Then** the section header reads "Our food update" with "food" in gold
- **And** three blog post cards are displayed in a 3-column grid
- **And** each card has a food image at top, admin name and date below, a title, description, and "read more" link with arrow
- **And** the "read more" link uses the arrow-link style (text + arrow that moves on hover)

#### Scenario: Table reservation form section
- **Given** the user scrolls to the reservation form area
- **Then** a dark overlay background section is displayed
- **And** the section header reads "Book your table" with "your" in gold
- **And** three form fields are displayed: Date (calendar icon), Time (clock icon), Number of Guests (user icon)
- **And** each field has a white icon prefix and text input
- **And** a centered "BOOK A TABLE" button with gold background is below the form

#### Scenario: Footer
- **Given** the user scrolls to the bottom of the page
- **Then** a dark navy (#131230) footer widget area is displayed
- **And** the footer has three columns: logo + description, contact info (address, phone, email with icons), opening hours
- **And** a copyright bar at the very bottom with deep navy (#0d0d27) background
- **And** the copyright bar contains the copyright text and social media icons (Facebook, Twitter, Google+, Pinterest, Instagram)
- **And** social icons turn gold on hover
- **And** the footer MUST include a link to https://www.componentdock.com/ ("Component Dock")

#### Scenario: Responsive behavior
- **Given** the user views the page on a mobile device (< 576px)
- **Then** the header nav links are hidden and a hamburger toggle appears
- **And** the hero banner padding is reduced
- **And** food cards stack in a single column
- **And** the welcome section stacks vertically
- **And** the special dishes section stacks vertically
- **And** the reservation form fields stack full-width
- **And** the footer columns stack vertically

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
