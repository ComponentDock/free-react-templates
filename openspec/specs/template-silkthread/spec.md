# Template: SilkThread (Men's Fashion E-Commerce)

## Purpose

Recreation of the ColorLib **Malefashion** template as a React 19 + Vite + Tailwind 4 + TypeScript single-page application.

- **Source:** https://colorlib.com/wp/template/malefashion/
- **Preview:** https://preview.colorlib.com/theme/malefashion/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/malefashion-free-template.jpg
- **New name:** `silkthread` (app folder `apps/silkthread`, package `@free-react-templates/silkthread`)
- **Surge target:** `silkthread.free.componentdock.com`
- **Category:** E-Commerce / Men's Fashion

## Design tokens

Extracted from the live preview CSS (`css/style.css`):

| Token          | Value                       | Usage                                               |
| -------------- | --------------------------- | --------------------------------------------------- |
| Accent / red   | `#e53637`                   | Section subtitle span, hot deal sticker, sale label |
| Dark primary   | `#111111`                   | Headings, footer background, primary button bg      |
| Body text      | `#3d3d3d`                   | Paragraph text                                      |
| Headings       | `#111111`                   | All h1-h6 default color                             |
| Categories bg  | `#f3f2ee`                   | Light beige/cream background for categories section |
| Footer bg      | `#111111`                   | Dark footer                                         |
| Button primary | bg `#000000`, text `#fff`   | Primary CTA buttons                                 |
| Button radius  | `60px`                      | Fully rounded pill buttons                          |
| Body font      | `"Nunito Sans", sans-serif` | All text                                            |

## Requirements

### Requirement: Header with top bar and navigation

The header SHALL display a dark top bar with shipping info, sign-in/FAQs links, and currency selector. Below it, a white bar with the SilkThread logo, desktop navigation (Home, Shop, Pages dropdown, Blog, Contacts), and search/wishlist/cart icons. On mobile, a hamburger icon opens an offcanvas menu.

#### Scenario: Header displays top bar and navigation

- **GIVEN** the user is on the SilkThread page
- **THEN** a top bar shows "Free shipping, 30-day return or refund guarantee"
- **AND** Sign in and FAQs links are visible
- **AND** a USD currency selector is present
- **AND** the logo is displayed
- **AND** navigation links are visible: Home, Shop, Pages, Blog, Contacts
- **AND** search, heart (wishlist), and cart icons are displayed

#### Scenario: Mobile hamburger menu opens offcanvas

- **GIVEN** the user is on a mobile viewport
- **WHEN** the user clicks the hamburger menu icon
- **THEN** the offcanvas menu slides in with navigation links and icons

### Requirement: Hero carousel

The hero section SHALL display a full-width dark background image with centered text: subtitle "Summer Collection", heading "Fall - Winter Collections 2030", description, and a black pill-shaped "Shop now" button with arrow icon.

#### Scenario: Hero displays slide content

- **GIVEN** the user is on the SilkThread page
- **THEN** a full-width hero section is visible with a dark background image
- **AND** the subtitle "Summer Collection" is displayed
- **AND** the heading "Fall - Winter Collections 2030" is displayed
- **AND** a "Shop now" button with arrow icon is displayed

### Requirement: Banner with 3 category items

The banner section SHALL show 3 category banner items in a row, each with an image and text heading overlay.

#### Scenario: Banner shows 3 category items

- **GIVEN** the user scrolls to the banner section
- **THEN** 3 banner items are displayed
- **AND** each banner has an image and a text heading
- **AND** the headings are: "Clothing Collections 2030", "Accessories", "Shoes Spring 2030"

### Requirement: Product grid with filter tabs

The product section SHALL display filter tabs (Best Sellers, New Arrivals, Hot Sales) and a responsive grid of product cards with images, hover overlay icons, titles, prices, star ratings, color swatches, and New/Sale labels.

#### Scenario: Product section displays items

- **GIVEN** the user scrolls to the product section
- **THEN** filter tabs are displayed: Best Sellers, New Arrivals, Hot Sales
- **AND** 8 product cards are shown in the default view
- **AND** each card has a product image
- **AND** each card shows a product title and price
- **AND** some cards show "New" or "Sale" labels

#### Scenario: Filter tabs change visible products

- **WHEN** the user clicks the "New Arrivals" tab
- **THEN** only New Arrivals products are shown

### Requirement: Categories section with hot deal and countdown

The categories section SHALL have a light beige (#f3f2ee) background, large category text on the left, a hot deal product image with sale sticker in the center, and a countdown timer on the right.

#### Scenario: Categories section with hot deal

- **GIVEN** the user scrolls to the categories section
- **THEN** the section has a light beige background
- **AND** the left side shows category text
- **AND** the right side shows a countdown timer with Days, Hours, Minutes, Seconds

### Requirement: Instagram image grid

The Instagram section SHALL display 6 images in a row with an Instagram heading and hashtag text.

#### Scenario: Instagram section displays image grid

- **GIVEN** the user scrolls to the instagram section
- **THEN** 6 images are displayed in a grid

### Requirement: Blog/Latest section

The latest section SHALL display a "Latest News" heading and 3 blog post cards with images, dates, titles, and Read More links.

#### Scenario: Blog section displays posts

- **GIVEN** the user scrolls to the latest section
- **THEN** a section title "Latest News" is displayed
- **AND** 3 blog post cards are shown
- **AND** each card has an image, date, title, and Read More link

### Requirement: Footer with Component Dock link

The footer SHALL have a dark (#111111) background with about section, shopping links, support links, newsletter form, and a copyright bar linking to Component Dock.

#### Scenario: Footer displays all widgets

- **GIVEN** the user scrolls to the footer
- **THEN** the footer has a dark background
- **AND** an about section with logo and description is present
- **AND** widget columns with contact info or links are displayed
- **AND** a copyright bar is at the bottom

#### Scenario: Footer links to Component Dock

- **GIVEN** the footer is rendered
- **THEN** the copyright text includes a link to "Component Dock" (https://www.componentdock.com/)
- **AND** no ColorLib attribution links appear in the app code
