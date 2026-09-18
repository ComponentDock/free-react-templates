# Template: TechVault (E-Commerce Tech Store)

## Purpose

Recreation of ColorLib **Onetech** template as a React 19 + Vite + Tailwind 4 + TypeScript single-page site for a tech/electronics e-commerce store.

- **ColorLib source:** https://colorlib.com/wp/template/onetech/
- **Preview URL:** https://preview.colorlib.com/theme/onetech/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/onetech-free-template.jpg
- **Stack:** React 19, Vite, Tailwind CSS 4, TypeScript, packages/ui shared components
- **Deploy target:** techvault.free.componentdock.com

## Requirements

### Requirement: Page structure and layout

The template SHALL render a complete single-page e-commerce storefront with a header, hero banner, product sections, newsletter, and footer.

#### Scenario: Page loads with all sections visible

- **WHEN** the user opens the page
- **THEN** the TopBar with contact info is visible
- AND the Header with logo "TechVault" and search bar is visible
- AND the MainNav with categories and menu items is visible
- AND the Hero Banner with product spotlight is visible

#### Scenario: All product sections render

- **WHEN** the user scrolls through the page
- **THEN** a "Characteristics" section with 4 feature tiles is visible
- AND a "Deals of the Week" section with a countdown timer is visible
- AND a "Popular Categories" section with category cards is visible
- AND an "Adverts" section with 2 banner columns is visible
- AND a "Best Sellers" section with a product grid is visible
- AND a "Hot New Arrivals" section with tabbed listings is visible
- AND a "Brands" section with brand logos is visible

### Requirement: Navigation and search

The template SHALL provide a functional navigation bar with category and main menu items, plus a search form.

#### Scenario: Navigation items are accessible

- **WHEN** the user views the navigation
- **THEN** the categories menu shows product categories (Computers, Cameras, Hardware, Smartphones, etc.)
- AND the main nav shows links (Home, Super Deals, Featured Brands, Pages, Blog, Contact)

#### Scenario: Search form is present

- **WHEN** the user views the header
- **THEN** a search input with placeholder "Search for products..." is visible
- AND a category dropdown ("All Categories") is adjacent to the search input

### Requirement: Hero banner with product spotlight

The template SHALL display a hero banner with a featured product, price, and call-to-action.

#### Scenario: Banner shows product details

- **WHEN** the user views the banner
- **THEN** a headline "New Era of Smartphones" is visible
- AND a crossed-out original price ($530) and discounted price ($460) are shown
- AND a "Shop Now" button is present

### Requirement: Deals of the Week with countdown

The template SHALL show a deals section with a product card and countdown timer display.

#### Scenario: Deal card displays correctly

- **WHEN** the user views the deals section
- **THEN** the title "Deals of the Week" is visible
- AND a product image, category, name, and prices (original/discounted) are shown
- AND a countdown timer with hours, minutes, and seconds is displayed

### Requirement: Newsletter signup

The template SHALL provide a newsletter email subscription form.

#### Scenario: Newsletter form renders

- **WHEN** the user reaches the newsletter section
- **THEN** the title "Sign up for Newsletter" is visible
- AND an email input with placeholder "Enter your email address" is present
- AND a "Subscribe" button is present

#### Scenario: Newsletter form prevents default submit

- **WHEN** the user enters an email and clicks Subscribe
- **THEN** the form does not navigate away (demo mode, preventDefault)

### Requirement: Footer with Component Dock link

The template SHALL display a footer with contact info, navigation links, and a link to Component Dock.

#### Scenario: Footer sections are present

- **WHEN** the user views the footer
- **THEN** a contact column with phone number is visible
- AND a "Find it Fast" column with category links is visible
- AND a "Customer Care" column with support links is visible

#### Scenario: Copyright links to Component Dock

- **WHEN** the user views the copyright bar
- **THEN** a link to https://www.componentdock.com/ is present
- AND the text "Made with Component Dock" or similar branding is shown

### Requirement: Responsive design

The template SHALL be responsive and adapt to mobile screen sizes.

#### Scenario: Mobile layout adapts

- **WHEN** the user views the page on a mobile device (width < 768px)
- **THEN** the navigation collapses to a hamburger menu icon
- AND product grids stack to fewer columns
- AND the footer columns stack vertically
