# Template: SilkHouse (Fashion / E-Commerce)

## Purpose

Recreation of ColorLib **Shionhouse** template as a React 19 + Vite + Tailwind CSS 4 + TypeScript fashion e-commerce storefront.

- **Source:** https://colorlib.com/wp/template/shionhouse/
- **Preview:** https://preview.colorlib.com/theme/shionhouse/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/shionhouse-free-template.jpg
- **Stack:** React 19, Vite, Tailwind CSS 4, TypeScript, packages/ui

## Requirements

### Requirement: Navbar displays logo, navigation, social icons, search, and cart

The navbar SHALL display the "SilkHouse" logo in Cinzel serif font, navigation links (Home, Shop, About, Blog, Contact), social media icons (Twitter, Facebook, Pinterest), a search icon, and a cart badge with count.

#### Scenario: Navbar renders all elements

- **WHEN** the page is loaded
- **THEN** the navbar displays the "SilkHouse" logo
- **AND** navigation links: Home, Shop, About, Blog, Contact
- **AND** social icons (Twitter, Facebook, Pinterest)
- **AND** a search icon and cart badge

### Requirement: Hero slider displays fashion imagery with auto-advance

The hero slider SHALL display 3 slides with full-width background images, dark overlay, animated headline text "FASHION CHANGING ALWAYS" in Cinzel serif, a purple "Shop Now" CTA button, and dot navigation. The slider SHALL auto-advance after 5 seconds.

#### Scenario: Hero slider displays slides

- **WHEN** the page is loaded
- **THEN** a full-width image slider shows 3 slides
- **AND** each slide has a background image with dark overlay
- **AND** each slide shows a headline in large serif text
- **AND** a purple "Shop Now" button
- **AND** dot navigation to switch slides

#### Scenario: Slider auto-advances

- **WHEN** the page is loaded and 5 seconds pass
- **THEN** the slider advances to the next slide

### Requirement: Categories grid shows 4 items with hover overlay

The categories section SHALL display 4 category cards in a row, each with a background image and overlay text on hover.

#### Scenario: Categories grid renders

- **WHEN** the page is loaded
- **THEN** 4 category cards display in a row
- **AND** each card has a background image with overlay text

### Requirement: New arrivals displays product grid with ratings and prices

The new arrivals section SHALL display 8 product cards in a 4-column grid, each with an image, product name, star rating, and price.

#### Scenario: New arrivals grid shows products

- **WHEN** the page is loaded
- **THEN** the "New Arrival" section displays 8 product cards
- **AND** each card has an image, product name, star rating, and price

### Requirement: Collection promo renders promotional section

The collection promo section SHALL display a promotional section with a background image, heading about the collection, and an "About Us" button.

#### Scenario: Collection promo renders

- **WHEN** the page is loaded
- **THEN** a promotional section shows a heading about the collection
- **AND** a background image with text overlay
- **AND** an "About Us" button

### Requirement: Popular products displays product cards with Shop Now buttons

The popular products section SHALL display product cards with images, names, prices, and "Shop Now" buttons.

#### Scenario: Popular products renders

- **WHEN** the page is loaded
- **THEN** the "Popular Items" section displays product cards
- **AND** each card has an image, name, price, and "Shop Now" button

### Requirement: Features section shows 4 service items

The features section SHALL display 4 feature items in a row, each with an icon, title, and description.

#### Scenario: Features renders 4 items

- **WHEN** the page is loaded
- **THEN** 4 feature items display in a row
- **AND** each has an icon, title, and description

### Requirement: Footer shows 4 columns on dark background with Component Dock link

The footer SHALL have a dark navy background, 4 columns (Quick Links, Shop Category, Partners, Get in Touch), social media links, a copyright bar, and a link to https://www.componentdock.com/ branded as "Component Dock".

#### Scenario: Footer renders all columns

- **WHEN** the page is loaded
- **THEN** the footer has a dark navy background
- **AND** 4 columns: Quick Links, Shop Category, Partners, Get in Touch
- **AND** social media links
- **AND** a copyright bar at the bottom
- **AND** a link to https://www.componentdock.com/ as "Component Dock"
