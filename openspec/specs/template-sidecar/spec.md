# Template: Sidecar (Sidebar — Shopping Bag)

## Purpose

Recreation of ColorLib **Sidebar V09** — a right-hand sliding shopping bag sidebar
with a blog-post grid as the main content area. The sidebar opens from the header
bag counter, showing product thumbnails, prices, remove links, subtotal, and a
Checkout button.

- **Source slug:** `colorlib-sidebar-v09`
- **Source URL:** https://colorlib.com/wp/template/colorlib-sidebar-v09/
- **Preview URL:** https://preview.colorlib.com/theme/colorlib-sidebar-v09/ (404 — preview unreachable; design captured from screenshot + source page metadata)
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript

## Design tokens (from source screenshot + Colorlib page CSS)

| Token              | Value                                        |
| ------------------ | -------------------------------------------- |
| Brand accent       | `#1a73e8` (Google Blue)                      |
| Body text          | `#26282b` (near-black)                       |
| Background         | `#ffffff` (white)                            |
| Sidebar background | `#ffffff` (white with border-left)           |
| Font family        | system sans-serif (`Inter` via Google Fonts) |
| Button radius      | 4px (subtle rounding)                        |
| Link color         | `#1a73e8`                                    |
| Link hover         | `#1464cc` (darker blue)                      |
| Border color       | `#e0e0e0` (light gray dividers)              |

## Requirements

### Requirement: Header bag counter

The page header SHALL display a shopping bag icon with the item count and total price ("$150 / 3 items"), right-aligned.

#### Scenario: Bag counter displays item count and total

- **WHEN** the page loads
- **THEN** the header shows a bag icon with "$150 / 3 items" text

#### Scenario: Clicking bag icon opens sidebar

- **WHEN** the user clicks the bag counter button
- **THEN** the shopping bag sidebar opens from the right

### Requirement: Shopping bag sidebar

The sidebar SHALL slide in from the right, showing the heading "YOUR BAG", a list of products, subtotal, and checkout button.

#### Scenario: Sidebar opens from the right

- **GIVEN** the sidebar is closed
- **WHEN** the user clicks the bag counter
- **THEN** the sidebar appears on the right side

#### Scenario: Sidebar shows product list

- **GIVEN** the sidebar is open
- **THEN** the heading "YOUR BAG" is visible
- **AND** 3 product items are displayed, each with a thumbnail, name, price, and Remove link

#### Scenario: Sidebar shows subtotal and checkout

- **GIVEN** the sidebar is open
- **THEN** a subtotal of "$150.00" is displayed
- **AND** a "Checkout" button is visible

#### Scenario: Close button dismisses sidebar

- **GIVEN** the sidebar is open
- **WHEN** the user clicks the close (X) button
- **THEN** the sidebar is removed from view

#### Scenario: Remove link removes item from bag

- **GIVEN** the sidebar is open with 3 items
- **WHEN** the user clicks "Remove" on the first product
- **THEN** the product is removed from the list
- **AND** the subtotal updates to $100.00
- **AND** the item count updates to "2 items"

### Requirement: Blog post grid

The main content area SHALL display a 2-column grid of blog post cards, each with a circular author avatar, post title, and date.

#### Scenario: Blog post card displays author info

- **WHEN** the page loads
- **THEN** 8 blog post cards are displayed in a grid
- **AND** each card shows an avatar image, title text, and "Posted: Dec 17, 2019" date

#### Scenario: Responsive layout

- **WHEN** the viewport width is 375px
- **THEN** the blog post grid shows 1 column

### Requirement: Footer

The template SHALL include a footer linking to https://www.componentdock.com/ branded as "Component Dock".

#### Scenario: Footer links to Component Dock

- **WHEN** the user views the page
- **THEN** a link to https://www.componentdock.com/ is present with text "Component Dock"

### Requirement: No ColorLib references

The app source code SHALL NOT contain any references to "ColorLib" or "colorlib.com" in source files, comments, or data.

#### Scenario: No ColorLib strings in app

- **WHEN** the app source files are inspected
- **THEN** no file contains "colorlib" (case-insensitive)

## Verification checklist

- [x] Header bag counter shows item count and total price
- [x] Clicking bag icon opens the right-hand sidebar
- [x] Sidebar displays "YOUR BAG" heading
- [x] Each product shows thumbnail, name, price, and Remove link
- [x] Subtotal and Checkout button are visible at the bottom of the sidebar
- [x] Close button (X) dismisses the sidebar
- [x] Remove link removes an item and updates the subtotal
- [x] Blog post grid displays 2 columns on desktop, 1 on mobile
- [x] Each blog card shows avatar, title, and date
- [x] Sidebar slides in/out with smooth animation
- [x] 100% test coverage (lines, functions, branches, statements)
- [x] No references to ColorLib in app code
- [x] Footer links to https://www.componentdock.com/
- [x] Public CNAME and homepage set correctly
