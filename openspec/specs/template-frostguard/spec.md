# Template: FrostGuard (HVAC Company)

## Purpose

Recreation of the ColorLib **Hvacompany** template
([colorlib.com/wp/template/hvacompany/](https://colorlib.com/wp/template/hvacompany/)),
preview at [preview.colorlib.com/theme/hvacompany/](https://preview.colorlib.com/theme/hvacompany/).

**Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript.
**Name:** `frostguard` (apps/frostguard, @free-react-templates/frostguard).

## Design Tokens

Extracted from `preview.colorlib.com/theme/hvacompany/css/style.css` and DOM:

| Token              | Value              | Usage                                  |
| ------------------ | ------------------ | -------------------------------------- |
| Primary / Dark     | `#142336`          | Header bar, counter bg, footer bg, headings |
| Accent Blue        | `#4586D5`          | Counter h4, links, testimonial accents |
| CTA Yellow         | `#FAD110`          | primary-btn background, testimonial border |
| Body Text          | `#444444`          | Body paragraph color                   |
| Light Gray BG      | `#F3F8FC`          | Section backgrounds (about, testimonial, products, blog) |
| Card BG            | `#ffffff`          | Benefit items, service cards           |
| Heading Font       | Saira Condensed    | All headings and buttons               |
| Body Font          | Mulish             | Body text, navigation                  |
| Button Radius      | `60px` (pill)      | primary-btn, site-btn                  |
| Button Border      | transparent outline | .primary-btn.border_btn variant        |

## Requirements

### Requirement: Header Navigation

Users SHALL see a header with social icons on the left, a centered logo, navigation links, and a phone number on the right.

#### Scenario: Header displays social icons and nav links

- **WHEN** the user is on any page
- **THEN** the header shows social icons (Facebook, Twitter, Instagram, YouTube) on the left
- **AND** the logo is centered in the nav area
- **AND** nav links are: Home, About, Shop, Contact, News
- **AND** a "Pages" dropdown menu is visible
- **AND** a phone number (1-688-688-94) is shown on the right

#### Scenario: Header is sticky on scroll

- **WHEN** the user scrolls down the page
- **THEN** the header remains visible (sticky positioning)

### Requirement: Hero Section

Users SHALL see a full-width hero with a background image slider, headline, subtext, and a CTA button.

#### Scenario: Hero displays main headline

- **WHEN** the user lands on the home page
- **THEN** the hero section shows a full-width background image
- **AND** the headline "Keeping your home comfortable all year long" is visible
- **AND** a subtext about air conditioning maintenance is shown
- **AND** a "Contact us" CTA button (yellow, pill-shaped) is visible

#### Scenario: Hero has navigation arrows

- **WHEN** the hero slider is rendered
- **THEN** left and right navigation arrows are visible for the carousel

### Requirement: Benefits Section

Users SHALL see 4 benefit items in a row, each with an icon and title.

#### Scenario: Four benefit items are displayed

- **WHEN** the user scrolls to the benefits section
- **THEN** 4 benefit items are visible in a row
- **AND** each item has an icon image and a title
- **AND** the items are: No Upfront Payments, Satisfaction Guarantee, Emergency Service, 8 Years Experience
- **AND** each item has a white card background

### Requirement: Services Section

Users SHALL see a services section with a heading, description, and a carousel of service cards.

#### Scenario: Services section shows heading and cards

- **WHEN** the user scrolls to the services section
- **THEN** the heading "What We Can Offer You" is visible
- **AND** a "Get a quote" outline button is shown on the right
- **AND** service cards are displayed in a carousel

#### Scenario: Service cards have correct content

- **WHEN** the service carousel is rendered
- **THEN** each service card shows a background image, icon, title, description, and "More info" link
- **AND** services include: A/C Installation, Cleaning & Optimization, and others

### Requirement: Counter Section

Users SHALL see a dark background section with 4 animated counter statistics.

#### Scenario: Counter displays statistics

- **WHEN** the user scrolls to the counter section
- **THEN** a dark background (`#142336`) section is visible
- **AND** 4 counter items are shown: Satisfied Customers (3589), Professional (868), Equipment Sold (5148), Branches Operating (025)
- **AND** each counter has an icon, number, and label
- **AND** counter numbers are displayed in white text
- **AND** counter labels are in accent blue (`#4586D5`)

### Requirement: About Section

Users SHALL see a split layout with images on the left and descriptive text with a checklist on the right.

#### Scenario: About section shows images and text

- **WHEN** the user scrolls to the about section
- **THEN** two images are displayed on the left (one large, one small overlaid)
- **AND** the heading "Quality Heating & Cooling" is visible on the right
- **AND** a paragraph about installation warranty and service warranty is shown
- **AND** a checklist with 3 checked items is visible
- **AND** a "Get in touch" outline button is shown

### Requirement: Quote Section

Users SHALL see a quote form on the left and a video thumbnail on the right.

#### Scenario: Quote form has input fields

- **WHEN** the user scrolls to the quote section
- **THEN** a "Get a quote" heading is visible
- **AND** form fields are shown: Name, Phone, Email, service dropdown (Clean/Repair/Heating), Message textarea
- **AND** a "Get a quote" submit button is visible

#### Scenario: Video thumbnail with play button

- **WHEN** the quote section is rendered
- **THEN** a video thumbnail is displayed on the right side
- **AND** a play button overlay is visible on the thumbnail

### Requirement: Testimonial Section

Users SHALL see a testimonial carousel with client quotes, author photos, and locations.

#### Scenario: Testimonials display correctly

- **WHEN** the user scrolls to the testimonial section
- **THEN** the heading "What Clients Say?" is visible (centered)
- **AND** testimonial cards are displayed in a carousel
- **AND** each card shows a quote, author photo, author name, and location
- **AND** 3 testimonials are visible: Sophie Jefferson (Swindon, England), Cynthia Moore (Kansas, USA), Andre Curtis (Dresden, Germany)

#### Scenario: Testimonial card hover effect

- **WHEN** the user hovers over a testimonial card
- **THEN** the card shows a yellow (`#FAD110`) border highlight effect

### Requirement: Call to Action Section

Users SHALL see a full-width call-to-action section with a dark background image and centered text.

#### Scenario: CTA section displays centered content

- **WHEN** the user scrolls to the CTA section
- **THEN** a full-width background image is shown
- **AND** the text "Modern Styling for your Modern Life" is visible
- **AND** the heading "less power Consume, more cooling" is displayed
- **AND** a "installation now" yellow CTA button is visible

### Requirement: Products Section

Users SHALL see a products grid with product cards showing images, names, prices, and add-to-cart buttons.

#### Scenario: Products section displays heading and cards

- **WHEN** the user scrolls to the products section
- **THEN** the heading "Heating & Cooling Store" is visible
- **AND** a "View all products" outline button is shown
- **AND** 4 product cards are displayed in a row

#### Scenario: Product card shows details

- **WHEN** a product card is rendered
- **THEN** it shows a product image, product name, price, and "Add to cart" link
- **AND** some cards have labels: "New", "-10%", or "Out of stock"

### Requirement: Latest News Section

Users SHALL see a blog section with 3 news cards.

#### Scenario: Blog cards display correctly

- **WHEN** the user scrolls to the latest news section
- **THEN** the heading "HVAC Tips & Tricks" is visible (centered)
- **AND** 3 blog cards are shown in a row
- **AND** each card has an image, category label ("Tips & tricks"), title, author name, and date

### Requirement: Footer

Users SHALL see a multi-column footer with a call-to-action bar, contact info, quick links, recent posts, and a subscribe form.

#### Scenario: Footer call-to-action bar

- **WHEN** the user scrolls to the footer
- **THEN** a call-to-action bar shows "Contact us now to get quote"
- **AND** a phone number with support icon is displayed

#### Scenario: Footer multi-column layout

- **WHEN** the footer content is rendered
- **THEN** 4 columns are visible: Contact us (address, email, phone), Quick links (2 columns of links), What's news (2 recent posts with thumbnails), Subscribe (email input + button)
- **AND** social media icons are visible in the contact column

#### Scenario: Footer copyright

- **WHEN** the footer bottom is rendered
- **THEN** a copyright line is shown
- **AND** a link to Component Dock (https://www.componentdock.com/) replaces the Colorlib attribution

## Verification Checklist

- [ ] Header: sticky, social icons, nav links, phone number
- [ ] Hero: background image, headline, subtext, CTA button, carousel arrows
- [ ] Benefits: 4 items in a row with icons and titles
- [ ] Services: heading, carousel of service cards with images/icons/descriptions
- [ ] Counter: dark bg, 4 stats with icons, animated numbers
- [ ] About: split layout, images left, text + checklist + CTA right
- [ ] Quote: form with fields, video thumbnail with play button
- [ ] Testimonials: carousel with quotes, author photos, locations
- [ ] CTA: dark bg image, centered text, yellow button
- [ ] Products: grid of 4 product cards with labels
- [ ] Latest News: 3 blog cards with images, categories, dates
- [ ] Footer: CTA bar, multi-column layout, social icons, subscribe, copyright with Component Dock link
- [ ] Design tokens: `#142336` dark, `#4586D5` blue, `#FAD110` yellow, Saira Condensed + Mulish fonts
- [ ] Pill-shaped buttons (`border-radius: 60px`) for primary CTAs
- [ ] No Colorlib references in app code; Component Dock link in footer
- [ ] Placeholder images via `picsum.photos/seed/frostguard-*`
