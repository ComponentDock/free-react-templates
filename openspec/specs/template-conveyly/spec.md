# Template: Conveyly (Logistics & Freight Landing)

## Purpose

- **Recreation of ColorLib source**: Carries (`https://colorlib.com/wp/template/carries/`)
- **Preview URL**: `https://preview.colorlib.com/theme/carries/` (live and reachable)
- **New Name**: `conveyly` (App directory: `apps/conveyly`, Package: `@free-react-templates/conveyly`)
- **Category**: Business / Logistics & Transportation
- **Description**: A single-page logistics and freight services website template with a full-width hero slider, freight service cards, about section with quote form, services with hexagon icons, promo features, testimonials carousel, newsletter, and a dark footer. Designed for freight, shipping, and logistics companies.

## Design Tokens (captured from ColorLib CSS + live preview)

- **Primary Brand Amber**: `#f39c12` (buttons, hover states, icon highlights, accents)
- **Heading Color**: `#3c4a62` (dark navy-blue for h1–h6, 700 weight, uppercase)
- **Body Text**: `#687284` (medium gray for paragraphs)
- **Link Color**: `#5d6b82` (links and secondary text)
- **Background Light Sections**: `#f4f7f9` / `#f5f7f9` (very light blue-gray for alternating sections)
- **Background Dark (Footer)**: `#212121` / `#272727`
- **Background Hero Overlay**: Dark blue-gray (approx `#1a252f`)
- **Button Primary**: White border + transparent bg, 3px border-radius; hover → `#f39c12` fill with white text
- **Button Secondary (Quote Form)**: `#5d6b82` bg, white text, 5px border-radius
- **Typography**: Roboto (Google Fonts) — 400, 500, 500i, 700 weights
- **Border Radius (cards)**: ~3–5px
- **Border Radius (social icons)**: 50% (circular)
- **Border Radius (service hex icons)**: Hexagonal shape (CSS clip-path or SVG)
- **Drop Shadow (cards)**: Subtle shadow for service cards
- **Testimonial section**: Client photos in circular frames, carousel navigation arrows

## Section Structure (from live preview DOM — exact order)

1. **Navbar** — Dark transparent header with logo (left), nav links (Home, About, Service, Blog, Contact), right-side icons (user, search, cart, language selector)
2. **Hero Slider** — Full-width background images with dark overlay, centered bold uppercase headline ("WE MAKE STRONGEST SERVICE ABOVE THE WORLD"), subtitle, two CTA buttons ("Our Service", "Get A Quote")
3. **Freight Service Cards** (gray-bg) — 3 equal-width cards with images (ocean, air, street freight), circular icons, titles, descriptions, "Read More" links
4. **About Section** (gray-bg) — Split layout: left = "Get A Quote" form (Name, Email, Phone, Type, Quantity, Destination, Message textarea, Send button); right = about content ("We have 25 years experience") with stats row (120 Project Done, 100, 30 with icons)
5. **Service Section** — Top: centered title ("Our Service") + description; middle: split — left text ("we offer quick & powerful logistics solution"), right = "Why Choose Us" with checklist (4 items with check icons); bottom: 4 service items with hexagon icons (Ware House, Road Freight, Sea Freight, Air Freight) — each with title, description, "read more" link
6. **Promo Features** (4 items) — 2×2 grid: Our Location, Latest News, 24/7 Support, Fast Delivery — each with circular icon + title + description
7. **Promo CTA Banner** (parallax bg) — Dark background with parallax, centered headline ("we provide international freight & logistics service worldwide"), "Get a quote" button
8. **Testimonials** — Centered title ("what client's say"), client photo carousel (circular thumbnails), quote text, client name, role; prev/next arrow navigation
9. **Footer** (dark bg) — Top: newsletter subscription (email input + subscribe button); Bottom: 4-column layout (About Us + contact info, Latest Tweets, Customer Service links, Instagram photo grid); Copyright bar with social icons (Facebook, Vimeo, Twitter, Behance, Dribbble)

## Requirements

### Requirement: Navbar with logo, navigation, and utility icons

Users SHALL see a navigation bar with the site logo on the left, main navigation links in the center/right, and utility icons (user, search, cart, language selector) on the far right.

#### Scenario: Navbar is visible on page load

- **WHEN** the user loads the page
- **THEN** a sticky navigation bar is displayed with logo, nav links (Home, About, Service, Blog, Contact), and icon buttons

#### Scenario: Navbar is responsive on mobile

- **WHEN** the viewport width is less than 768px
- **THEN** the navigation collapses into a hamburger menu

### Requirement: Hero slider with headline, subtitle, and two CTA buttons

Users SHALL see a full-width hero section with a background image, centered bold uppercase headline, descriptive subtitle, and two action buttons.

#### Scenario: Hero displays headline and buttons

- **WHEN** the user views the hero section
- **THEN** the headline "WE MAKE STRONGEST SERVICE ABOVE THE WORLD" is displayed with two buttons: "Our Service" and "Get A Quote"

#### Scenario: Hero buttons are styled with white border and hover

- **WHEN** the user hovers over a hero CTA button
- **THEN** the button background changes to amber (`#f39c12`) with white text

### Requirement: Freight service cards section (Ocean, Air, Street)

Users SHALL see three equal-width freight service cards, each with an image, circular icon, title, short description, and "Read More" link.

#### Scenario: Three freight cards are displayed

- **WHEN** the user scrolls to the freight services section
- **THEN** three cards are shown: "Ocean Freight" (ship icon), "Air Freight" (plane icon), "Street Freight" (truck icon)

#### Scenario: Cards are responsive

- **WHEN** the viewport is less than 768px
- **THEN** the three cards stack vertically in a single column

### Requirement: About section with quote form and statistics

Users SHALL see a split-layout about section with a quote form on the left and company info with statistics on the right.

#### Scenario: Quote form has all required fields

- **WHEN** the user views the about section
- **THEN** a form is displayed with fields: Your Name, Email, Phone, Type, Quantity, Destination, Your Message (textarea), and a "Send" button

#### Scenario: Statistics counters are displayed

- **WHEN** the user views the about section
- **THEN** three statistics are shown with icons: 120 (Project Done), 100, 30

### Requirement: Service section with features and hexagon icons

Users SHALL see a service section with a "Why Choose Us" checklist and four service items with hexagonal icons.

#### Scenario: Why Choose Us checklist is visible

- **WHEN** the user scrolls to the service section
- **THEN** four checklist items with check icons are displayed under "Why Choose Us"

#### Scenario: Four services with hexagon icons

- **WHEN** the user views the service list
- **THEN** four service items are shown: Ware House, Road Freight, Sea Freight, Air Freight — each with a hexagonal icon container, title, description, and "read more" link

### Requirement: Promo features grid (4 items)

Users SHALL see a 2×2 grid of feature items with icons, titles, and short descriptions.

#### Scenario: Four promo features are displayed

- **WHEN** the user scrolls to the promo section
- **THEN** four items are shown: Our Location, Latest News, 24/7 Support, Fast Delivery

### Requirement: Parallax CTA banner

Users SHALL see a full-width parallax banner with a headline and a call-to-action button.

#### Scenario: Parallax CTA is visible

- **WHEN** the user scrolls to the promo banner
- **THEN** a dark background with parallax effect displays "we provide international freight & logistics service worldwide" with a "Get a quote" button

### Requirement: Testimonials carousel

Users SHALL see a testimonials section with client photos, quotes, names, and navigation arrows.

#### Scenario: Testimonial is displayed

- **WHEN** the user scrolls to the testimonials section
- **THEN** a client photo, quote text, client name, and role are displayed with prev/next navigation arrows

#### Scenario: Testimonial carousel navigation

- **WHEN** the user clicks the right arrow
- **THEN** the next testimonial slides into view

### Requirement: Footer with newsletter, columns, and social icons

Users SHALL see a dark footer with newsletter subscription, four content columns, and a copyright bar with social icons.

#### Scenario: Newsletter subscription form

- **WHEN** the user scrolls to the footer
- **THEN** a newsletter section is displayed with "Weekly Newsletter" heading, email input, and "subscribe" button

#### Scenario: Footer columns are displayed

- **WHEN** the user views the footer
- **THEN** four columns are shown: About Us (contact info), Latest Tweets, Customer Service (link list), Instagram photo grid

#### Scenario: Copyright bar with social icons

- **WHEN** the user views the bottom of the footer
- **THEN** a copyright line and social media icons (Facebook, Vimeo, Twitter, Behance, Dribbble) are displayed

### Requirement: Footer MUST link to Component Dock

The template footer SHALL include a link to `https://www.componentdock.com/` branded as "Component Dock".

#### Scenario: Component Dock link in footer

- **WHEN** the user views the footer
- **THEN** a link to `https://www.componentdock.com/` is visible with the text "Component Dock"

## Verification Checklist

- [ ] All 9 sections present in the correct order
- [ ] Navbar: logo, nav links, utility icons, sticky on scroll
- [ ] Hero: background image with overlay, headline, subtitle, 2 CTA buttons with hover state
- [ ] Freight cards: 3 cards with images, icons (ship/plane/truck), titles, descriptions, "Read More"
- [ ] About: split layout — quote form (7 fields + textarea + button) left, about content + 3 stats right
- [ ] Services: title + description, "Why Choose Us" 4-item checklist, 4 hexagon-icon service items
- [ ] Promo: 4-item grid with icons (anchor, newspaper, umbrella, bicycle)
- [ ] Parallax CTA: dark bg, headline, "Get a quote" button
- [ ] Testimonials: photo carousel, quote, name/role, prev/next arrows
- [ ] Footer: newsletter form, 4 columns, copyright, social icons, Component Dock link
- [ ] Brand color `#f39c12` used for accents and button hovers
- [ ] Font: Roboto via Google Fonts
- [ ] Dark heading color `#3c4a62` for all headings (uppercase)
- [ ] Body text color `#687284`
- [ ] Placeholder images via `https://picsum.photos/seed/conveyly-<n>/<w>/<h>`
- [ ] Icons from `lucide-react` (Ship, Plane, Truck, Anchor, Newspaper, Umbrella, etc.)
- [ ] Responsive layout (cards stack on mobile, hamburger nav)
- [ ] No references to ColorLib anywhere in the app code
- [ ] Footer links to `https://www.componentdock.com/`
