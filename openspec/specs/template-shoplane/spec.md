# Template: ShopLane (E-Commerce)

## Purpose

Recreation of ColorLib **Coloshop** — a Bootstrap 4 e-commerce template with product listings, category banners, deal countdown, and blog section.

- **Source:** https://colorlib.com/wp/template/coloshop/
- **Preview:** https://preview.colorlib.com/theme/coloshop/
- **New name:** `shoplane` (apps/shoplane, @free-react-templates/shoplane)
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript (strict)

## Design Tokens

Extracted from the live preview CSS (`styles/main_styles.css`) and DOM.

| Token              | Value                   | Usage                                              |
| ------------------ | ----------------------- | -------------------------------------------------- |
| Brand primary      | `#fe4c50` (coral red)   | Buttons, icon accents, logo accent, hover feedback |
| Brand hover        | `#FE7C7F` (light coral) | Button hover state                                 |
| Heading text       | `#1e1e27` (near-black)  | h2 section titles, logo text                       |
| Body text          | `#51545f` (dark gray)   | Paragraphs, footer links                           |
| Muted text         | `#b5aec4` (lavender)    | Secondary text, product prices                     |
| White              | `#FFFFFF`               | Page background, card backgrounds                  |
| Light background   | `#f2f2f2`               | Newsletter section                                 |
| Benefit background | `#f3f3f3`               | Benefit icons row                                  |
| Font family        | `"Poppins", sans-serif` | All text (weights 400, 500, 600, 700, 900)         |
| Button shape       | `border-radius: 3px`    | Primary buttons (slightly rounded)                 |
| Button height      | `40px`                  | Standard button height                             |
| Sale bubble        | `#51a042` (green)       | "Sale" badge on products                           |
| New bubble         | `#fe4c50` (red)         | "New" badge on products                            |
| Font import        | Google Fonts Poppins    | `@import url(...)` in CSS                          |

## Requirements

### Requirement: Top navigation bar

Users SHALL see a thin top bar with a free shipping message on the left and currency/language/account selectors on the right.

#### Scenario: Top nav displays shipping banner and selectors

- **WHEN** the page loads
- **THEN** a top navigation bar is visible at the top
- **AND** "free shipping on all u.s orders over $50" text is displayed on the left
- **AND** a currency selector showing "usd" is present on the right
- **AND** a language selector showing "English" is present on the right

### Requirement: Main navigation with logo and links

Users SHALL see a main navigation bar with the logo "shoplane" (accent on "lane"), navigation links, and user action icons.

#### Scenario: Main nav displays logo and navigation links

- **WHEN** the page loads
- **THEN** the logo "shoplane" is displayed with accent styling on "lane"
- **AND** navigation links "home", "shop", "promotion", "pages", "blog", "contact" are present
- **AND** search, user, and cart icons are displayed
- **AND** the cart icon shows a badge with item count "2"

#### Scenario: Main nav shows hamburger on mobile

- **WHEN** the viewport width is less than 992px
- **THEN** a hamburger menu icon is visible
- **AND** the navigation links are collapsed

### Requirement: Category banners

Users SHALL see three category banner cards in a row with background images and category labels.

#### Scenario: Three category banners are displayed

- **WHEN** the page loads
- **THEN** three category banner cards are shown in a row
- **AND** each banner has a background image and a category label link
- **AND** the categories are "women's", "accessories", and "men's"

### Requirement: New arrivals product grid with filters

Users SHALL see a product grid with filter tabs to filter by category.

#### Scenario: New arrivals section shows product grid with filters

- **WHEN** the page loads
- **THEN** the heading "New Arrivals" is displayed
- **AND** filter tabs are shown: all, women's, accessories, men's
- **AND** "all" tab is active by default
- **AND** a product grid is displayed with product cards

#### Scenario: Product cards display correctly

- **WHEN** the new arrivals section is visible
- **THEN** each product card shows an image, name, and price
- **AND** some products have a "sale" badge in green
- **AND** some products have a "new" badge in red

#### Scenario: Filter tabs change visible products

- **WHEN** the user clicks the "women's" filter tab
- **THEN** only women's products are shown in the grid
- **AND** the "women's" tab becomes active

### Requirement: Deal of the week countdown

Users SHALL see a deal section with a countdown timer and product image.

#### Scenario: Deal section displays countdown and product

- **WHEN** the page loads
- **THEN** the heading "Deal Of The Week" is displayed
- **AND** a countdown timer shows days, hours, minutes, and seconds
- **AND** a product image is displayed on the left
- **AND** a "Shop Now" button is visible

### Requirement: Best sellers carousel

Users SHALL see a best sellers section with a product carousel and navigation arrows.

#### Scenario: Best sellers section displays product carousel

- **WHEN** the page loads
- **THEN** the heading "Best Sellers" is displayed
- **AND** a product carousel/grid is shown with navigation arrows

### Requirement: Benefits row

Users SHALL see a row of four benefit items with icons and descriptions.

#### Scenario: Benefits row displays four benefit icons

- **WHEN** the page loads
- **THEN** four benefit items are shown in a row
- **AND** the benefits are: Free Shipping, Cash on Delivery, 45 Days Return, Opening All Week
- **AND** each benefit has a red icon and uppercase title

### Requirement: Latest blogs section

Users SHALL see three blog post cards with background images.

#### Scenario: Blog section displays three blog posts

- **WHEN** the page loads
- **THEN** the heading "Latest Blogs" is displayed
- **AND** three blog post cards are shown in a row
- **AND** each card has a background image, date badge, and title

### Requirement: Newsletter subscription form

Users SHALL see a newsletter section with an email input and subscribe button.

#### Scenario: Newsletter section displays subscription form

- **WHEN** the page loads
- **THEN** the heading "Newsletter" is displayed
- **AND** a subtitle about 20% off first purchase is shown
- **AND** an email input field is present
- **AND** a "subscribe" button is displayed

#### Scenario: Newsletter form submits successfully

- **WHEN** the user enters a valid email and clicks subscribe
- **THEN** a thank you message is displayed

### Requirement: Footer with Component Dock link

Users SHALL see a footer with navigation links, social icons, and a Component Dock attribution link.

#### Scenario: Footer displays nav links, social icons, and copyright

- **WHEN** the page loads
- **THEN** footer navigation links "Blog", "FAQs", "Contact us" are present
- **AND** social icon links are shown for Facebook, Twitter, Instagram, Skype, and Pinterest
- **AND** copyright text is displayed
- **AND** a "Component Dock" link pointing to https://www.componentdock.com/ is present in the footer

### Requirement: Accessibility

Users SHALL experience accessible landmarks and semantic HTML.

#### Scenario: Page has accessible landmarks

- **WHEN** the page loads
- **THEN** the page has a navigation landmark for the header
- **AND** the main content area is wrapped in a semantic element
- **AND** the footer has a footer landmark
- **AND** all form inputs have associated labels or placeholders
