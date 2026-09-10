# Template: Sugarcove (Cake Shop Business Website)

## Purpose

- **Recreation of ColorLib source**: Cakes (`https://colorlib.com/wp/template/cakes/`)
- **Preview URL**: `https://preview.colorlib.com/theme/cakes/` (live at prep time)
- **New Name**: `sugarcove` (App directory: `apps/sugarcove`, Package: `@free-react-templates/sugarcove`)
- **Category**: Business Website — Cake Shop / Bakery
- **Description**: A warm, inviting cake shop website with a hero section featuring a large background image and decorative "Delicious" watermark text, a product carousel of popular cakes, an about section, services grid, testimonials carousel, Instagram feed area, and a multi-column footer. Bright orange-red brand color with DM Sans + Quicksand typography.

## Design Tokens

- **Primary Brand Color**: `#F04506` (bright orange-red) — buttons, active states, accents, nav hover, links, newsletter highlights
- **Button Gradient**: `linear-gradient(to left, #F04506, #d83e06, #F04506)` — CTA buttons
- **Button Hover**: `#d9bda3` (darker tan for hover state)
- **Card Background**: `#FFF5F2` (warm pink/peach) — product cards
- **Footer Background**: `#FFF7F3` (very light peach)
- **Page Background**: Full-viewport background image (cake/food themed)
- **Text Primary (Headings)**: `#000000`
- **Text Body**: `#000000` (paragraphs)
- **Text Muted/Nav**: `#5E5E5E` (nav links, body descriptions)
- **Text Secondary**: `#999999` (placeholder text, form text)
- **Typography — Body**: DM Sans (400, 500, 700) — paragraphs, body text
- **Typography — Headings/Nav/Buttons**: Quicksand (300, 400, 600, 700) — headings, navigation, button labels
- **Typography — Decorative Watermark**: Lobster (cursive) — large background text on hero
- **Button Border Radius**: `30px` (pill shape)
- **Button Box Shadow**: `0px 17px 27px rgba(240, 69, 6, 0.27)`
- **Product Card Border Radius**: `0 0 60px 0` (bottom-right corner rounding)
- **Product Card Padding**: `20px`
- **Section Title Subtitle**: `#F04506` color, letter-spacing `0.2em`, uppercase
- **Section Title Heading**: 44px, font-weight 700, line-height 1.1
- **Nav Underline on Hover**: `#F04506`, 3px height, width transition
- **Dropdown Menu BG**: `#F04506` with white text
- **Instagram Area**: Grid of images with hover overlay
- **Section Padding**: `110px 0` (section-padding40)
- **Hero Height**: `min-height: 820px`
- **Box Shadow (sticky nav)**: `0 10px 15px rgba(25, 25, 25, 0.1)`

## Gherkin Requirements

### Requirement: Sticky navigation header

The site SHALL display a sticky header with logo, navigation menu, phone CTA, and "Order Online" button.

#### Scenario: Header displays logo and nav links

- **WHEN** the user loads the page
- **THEN** a sticky header shows the site logo on the left, navigation links (Home, About, Services, Pages, Blog, Contact) in the center, and action buttons on the right

#### Scenario: Header becomes sticky on scroll

- **WHEN** the user scrolls past the hero section
- **THEN** the header becomes fixed at the top with a white background and subtle shadow

#### Scenario: Mobile hamburger menu

- **WHEN** the viewport is below 992px
- **THEN** the main navigation collapses into a hamburger/mobile menu

### Requirement: Hero section with background image

The site SHALL display a full-width hero section with a background image, decorative watermark text, headline, and CTA button.

#### Scenario: Hero shows headline and CTA

- **WHEN** the user views the hero section
- **THEN** it displays a large headline, descriptive text, and an "Explore Menu" button with gradient orange styling

#### Scenario: Hero has decorative watermark

- **WHEN** the hero section renders
- **THEN** a large "Delicious" watermark in Lobster font appears behind the headline with very low opacity

#### Scenario: Hero has animated shape

- **WHEN** the hero section renders
- **THEN** an animated decorative shape appears at the bottom of the hero with a bounce animation

### Requirement: Popular items product carousel

The site SHALL display a carousel of popular cake products with images, names, prices, and order buttons.

#### Scenario: Section title displays

- **WHEN** the user scrolls to the popular items section
- **THEN** it shows a section title "Most Popular" (subtitle) and "Our Exclusive Cakes" (heading)

#### Scenario: Product cards display correctly

- **WHEN** the carousel renders
- **THEN** each product card shows an image, product name, price, and an "Order Now" button on a warm pink (`#FFF5F2`) card with bottom-right rounded corners

#### Scenario: Product cards hover interaction

- **WHEN** the user hovers over a product card
- **THEN** the product image scales down slightly and the order button shifts upward

#### Scenario: Carousel navigation

- **WHEN** more products exist than fit in the viewport
- **THEN** navigation arrows allow scrolling through products

### Requirement: About / support company section

The site SHALL display a split-layout about section with an image on the left and text on the right.

#### Scenario: About section layout

- **WHEN** the user scrolls to the about section
- **THEN** a split layout shows a decorative/illustrative image on the left (~50%) and text content on the right (~50%)

#### Scenario: About section content

- **WHEN** the about section renders
- **THEN** it displays a section title "Fresh & Delicious" (subtitle), a heading, description paragraph, and a "Our Story" CTA button

### Requirement: Services features grid

The site SHALL display a grid of service/feature items with icons and descriptions.

#### Scenario: Services section layout

- **WHEN** the user scrolls to the services section
- **THEN** a centered section title "Our Features" / "Quality is Our First Priority" appears above a grid of service cards

#### Scenario: Each service card shows icon + text

- **WHEN** a service card renders
- **THEN** it displays an icon, a title, and a short description in a centered layout

### Requirement: Testimonials carousel

The site SHALL display a carousel of customer testimonials with author images, names, and quotes.

#### Scenario: Testimonials section layout

- **WHEN** the user scrolls to the testimonials section
- **THEN** a section title "Testimonial" / "What Customers Say" appears above the carousel

#### Scenario: Each testimonial shows author info

- **WHEN** a testimonial slide renders
- **THEN** it displays the customer's name, designation, a quote, and an avatar image

#### Scenario: Testimonial carousel auto-plays

- **WHEN** the testimonials section is visible
- **THEN** testimonials cycle automatically with a smooth transition

### Requirement: Instagram social feed area

The site SHALL display an Instagram-style image grid.

#### Scenario: Instagram area renders images

- **WHEN** the user scrolls to the Instagram section
- **THEN** a horizontal grid of Instagram-style images appears with hover overlay showing an Instagram icon

### Requirement: Footer with multiple columns

The site SHALL display a footer with about text, quick links, category links, and contact information.

#### Scenario: Footer column layout

- **WHEN** the user scrolls to the footer
- **THEN** a multi-column footer shows: site logo + about text, Quick Links, Cakes (category links), and Contact Us with address

#### Scenario: Footer social icons

- **WHEN** the footer renders
- **THEN** social media icons (Facebook, Twitter, Instagram, LinkedIn) appear in the copyright area

#### Scenario: Footer copyright

- **WHEN** the footer renders
- **THEN** a copyright line with a link to `https://www.componentdock.com/` ("Component Dock") is displayed

### Requirement: Responsive design

The site SHALL be fully responsive across desktop, tablet, and mobile viewports.

#### Scenario: Desktop layout (>= 1200px)

- **WHEN** the viewport is 1200px or wider
- **THEN** the full desktop layout is shown with all sections side-by-side where applicable

#### Scenario: Tablet layout (768px - 1199px)

- **WHEN** the viewport is between 768px and 1199px
- **THEN** sections stack appropriately, product carousel adapts, and nav may collapse

#### Scenario: Mobile layout (< 768px)

- **WHEN** the viewport is below 768px
- **THEN** all sections stack vertically, the hamburger menu is shown, and product cards display in a single column

## Verification Checklist

- [ ] Sticky header with logo, nav, CTA buttons; sticky on scroll with shadow
- [ ] Hero section with background image, "Delicious" Lobster watermark, headline, gradient CTA button
- [ ] Animated hero shape at bottom
- [ ] Popular items carousel with product cards (pink bg, rounded corners, images, names, prices, order buttons)
- [ ] Product card hover effects (image scale, button shift)
- [ ] About section: split layout with image left, text right, "Our Story" CTA
- [ ] Services grid with icons, titles, descriptions
- [ ] Testimonials carousel with author avatars, names, quotes
- [ ] Instagram feed image grid with hover overlay
- [ ] Footer: 4-column layout with logo, Quick Links, Cakes links, Contact info
- [ ] Footer social icons + copyright with Component Dock link
- [ ] Responsive: desktop, tablet, mobile breakpoints
- [ ] Font families: DM Sans (body), Quicksand (headings/nav), Lobster (watermark)
- [ ] Brand color `#F04506` used consistently for accents, buttons, links
- [ ] No ColorLib references in app code — provenance only in spec
- [ ] `packages/ui` components reused where applicable (Button, ButtonLink, cn())
- [ ] 100% test coverage on all component files
- [ ] `npm run verify:app sugarcove` passes (typecheck + lint + tests + build)
