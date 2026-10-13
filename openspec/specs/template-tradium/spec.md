# Template: Tradium (E-Commerce Shop)

## Purpose

Tradium is a single-page e-commerce SHOP TEMPLATE in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Selling" free template (source:
https://colorlib.com/wp/template/selling/), built under a
DIFFERENT name (**Tradium**), with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

The original is a Bootstrap 4 multi-section e-commerce landing page with
jQuery plugins (Owl Carousel for testimonials, AOS for scroll animations,
Stellar for parallax, Fancybox for lightbox, countdown timer for promotions).
It features a full-width parallax hero, product grids, featured product
spotlights, about section with trust badge, team members, services, a
testimonial carousel, blog posts, a contact form, and a multi-column footer.

**Preview URL:** https://preview.colorlib.com/theme/selling/

## Design Tokens

### Colors

| Token | Hex | Usage |
|-------|-----|-------|
| Brand primary | `#f16821` | Orange — active nav link, form focus border, text-primary accents |
| Accent teal | `#46ddb0` | Experience/trust badge background in About section |
| Black | `#000` | Buttons (btn-black), headings, logo text, selection bg |
| White | `#fff` | Button outlines, hero overlay buttons, card backgrounds |
| Body text | `gray` (default) | Body copy, paragraph text |
| Footer bg | `#333333` | Dark footer background |
| Footer text | `#737373` | Footer paragraph text |
| Footer link | `#999999` | Footer anchor links |
| Light bg | `#f8f9fa` (Bootstrap light) | Alternating section backgrounds (Featured Products, Services, Contact) |
| Border light | `#edf0f5` | Top border on sections |
| Section subtitle | `#adb5bd` | Small uppercase section sub-headings |
| Muted/position | `#adb5bd` | Team member position text |
| Warning star | `#ffc107` (Bootstrap text-warning) | Star rating icon |

### Typography

- **Font family:** "Muli" (Google Fonts), 300/400/700/900 weights
- Fallback stack: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif
- Body: 1rem, weight 400, line-height 1.7, color gray
- Section title: 40px (30px mobile), weight 700, color black
- Section sub-title: 13px, color #adb5bd, uppercase, letter-spacing
- Headings use the Muli font family

### Buttons

- All buttons: uppercase, 12px, font-weight 900, letter-spacing normal
- `btn-black`: bg #000, border 2px #000, color #fff; hover → transparent bg, black text
- `btn-black btn-outline-black`: transparent bg, black text; hover → black bg, white text
- `btn-white`: bg #fff, border 2px #fff, color #000; hover → transparent bg, white text
- `btn-white btn-outline-white`: transparent bg, white text; hover → white bg, black text
- All buttons use `rounded-0` (square corners, no border-radius)

### Layout

- Container: Bootstrap container (max-width breakpoints)
- Product grid: 3-column (col-lg-4 col-md-6) with mb-5 spacing
- Featured products: alternating left/right image+text layout
- Team: 3-column (col-lg-4 col-md-6)
- Services: 3-column (col-lg-4 col-md-6) with icon+text flex layout
- Blog: 3-column (col-lg-4 col-md-6)
- Contact form: centered col-md-7

### Other

- Parallax backgrounds: `background-attachment: fixed` on hero/notification/special sections
- AOS scroll animations: fade, fade-up with delays
- Owl Carousel: testimonial slider (single item)
- Sticky navbar with scrollspy
- Mobile hamburger menu (off-canvas)
- Countdown timer on Special/Sale section

## Requirements

### Top Bar

#### Scenario: Top bar displays social icons and contact info

- **GIVEN** the user is on the page
- **THEN** the top bar shows social media icons (Facebook, Twitter, Instagram, LinkedIn) on the left
- **AND** the phone number "(+1) 234 5678 9101" and email "shop@yourdomain.com" on the right
- **AND** the top bar has a light background

### Navbar

#### Scenario: Navbar displays logo and navigation links

- **GIVEN** the user is on the page
- **THEN** the navbar shows the logo "Tradium" with an orange dot accent
- **AND** the navigation links are: Home, Products, About Us, Special, Testimonials, Blog, Contact
- **AND** the navbar has a white background and is sticky on scroll

#### Scenario: Navbar highlights active section

- **GIVEN** the user scrolls down the page
- **THEN** the current section's nav link is highlighted in orange (#f16821)

#### Scenario: Mobile hamburger menu

- **GIVEN** the user is on a mobile viewport
- **THEN** a hamburger menu icon is visible
- **AND** clicking it opens an off-canvas mobile menu

### Hero Section

#### Scenario: Hero displays heading and call-to-action buttons

- **GIVEN** the user is on the page
- **THEN** the hero shows "Shop With Us" heading
- **AND** a subtitle paragraph below the heading
- **AND** two buttons: "Shop Now" (white outline) and "Club Membership" (white solid)
- **AND** the hero has a full-width background image with overlay

### Popular Products

#### Scenario: Popular products grid displays 6 products

- **GIVEN** the user scrolls to the Products section
- **THEN** the section shows "Popular Products" sub-title and "Our Products" title
- **AND** 6 product cards are displayed in a 3-column grid
- **AND** each product card shows an image, title, star rating (5.0), heart/wishlist count, description, and two buttons ("Cart" black solid, "View" black outline)

### Newsletter Notification

#### Scenario: Newsletter section collects email subscriptions

- **GIVEN** the user scrolls to the notification section
- **THEN** a parallax background image is displayed
- **AND** the heading "Get notified on each updates." is shown
- **AND** an email input field and "Subscribe" button are present

### Featured Products

#### Scenario: Featured products section shows detailed product spotlights

- **GIVEN** the user scrolls to the Featured Products section
- **THEN** the section has a light background
- **AND** shows "Awesome Products" sub-title and "Featured Products" title
- **AND** 2 featured product items are displayed, each in a white card
- **AND** each item has a large image, numbered label (01., 02.), "About This Product" heading, description, price with strikethrough ($269.00) and sale price ($69.00)
- **AND** two buttons: "View Details" (black outline) and "Add To Cart" (black solid)
- **AND** the layout alternates image left/text right then image right/text left

### About Us

#### Scenario: About section shows company info with trust badge

- **GIVEN** the user scrolls to the About Us section
- **THEN** a large image is displayed on the left
- **AND** an "experience" badge overlays the image with teal background (#46ddb0) showing "Trusted Merchant" and "for 50 years"
- **AND** the right side shows "Merchant Company" sub-title, "About Us" title, description text, and "Learn More" button (black with hover effect)

### Team / Leadership

#### Scenario: Team section displays 3 team members

- **GIVEN** the user scrolls to the Team section
- **THEN** the section shows "Team" sub-title and "Leadership" title
- **AND** 3 team member cards are displayed in a 3-column layout
- **AND** each card shows a circular photo, name, position (muted text), bio paragraph, and 4 social circle icons (Facebook, Twitter, LinkedIn, Instagram)

### Special / Sale

#### Scenario: Special section displays a summer sale promotion

- **GIVEN** the user scrolls to the Special section
- **THEN** a parallax background image is displayed
- **AND** "Special Promo" sub-title and "Summer Sale" title are shown
- **AND** a countdown timer is displayed
- **AND** a "Shop Now" button (white outline) is present

### Services

#### Scenario: Services section displays 6 service offerings

- **GIVEN** the user scrolls to the Services section
- **THEN** the section has a light background
- **AND** shows "Our Services" sub-title and "We Offer Services" title
- **AND** 6 service cards are displayed in a 3-column grid
- **AND** each card has an orange icon, title, description, and "Learn More" link

### Testimonials

#### Scenario: Testimonials carousel shows customer quotes

- **GIVEN** the user scrolls to the Testimonials section
- **THEN** "People Says" sub-title and "Testimonials" title are shown
- **AND** an Owl Carousel slider displays 4 testimonials one at a time
- **AND** each testimonial shows a large photo, italicized quote, and person's name

### Blog

#### Scenario: Blog section shows 3 recent posts

- **GIVEN** the user scrolls to the Blog section
- **THEN** "Blog" sub-title and "Blog Posts" title are shown
- **AND** 3 blog post cards are displayed in a 3-column grid
- **AND** each card shows an image, title, meta info (author, date, category), excerpt, and "Continue Reading..." link

### Contact

#### Scenario: Contact form collects user messages

- **GIVEN** the user scrolls to the Contact section
- **THEN** the section has a light background
- **AND** shows "Contact Form" sub-title and "Get In Touch" title
- **AND** a white card contains the form with fields: First Name, Last Name, Email, Subject, Message (textarea)
- **AND** a "Send Message" button (black, square corners)

### Footer

#### Scenario: Footer displays company info, links, and social

- **GIVEN** the user scrolls to the footer
- **THEN** the footer has a white background
- **AND** shows three columns: "About Us" text, "Quick Links" (About Us, Services, Testimonials, Contact Us), and "Follow Us" social icons
- **AND** a "Featured Product" sidebar with product image, name, price, and "Add to Cart" button
- **AND** a copyright line at the bottom with "Made with Component Dock" link

## Verification Checklist

- [ ] All 14 sections render in correct order (top bar → navbar → hero → products → newsletter → featured → about → team → special → services → testimonials → blog → contact → footer)
- [ ] Design tokens match: brand orange #f16821, accent teal #46ddb0, Muli font, square buttons, #333 footer
- [ ] Hero has parallax background image with overlay
- [ ] Product grid shows 6 cards with star ratings and heart counts
- [ ] Featured products alternate layout (image left/right)
- [ ] About section has teal experience badge overlay
- [ ] Team section shows 3 members with social icons
- [ ] Special section has countdown timer
- [ ] Services section shows 6 items with icons on light bg
- [ ] Testimonials carousel slides through 4 quotes
- [ ] Blog shows 3 post cards
- [ ] Contact form has all 5 fields + submit button
- [ ] Footer links to componentdock.com
- [ ] No ColorLib references in app code
- [ ] Mobile responsive (hamburger menu, stacked layouts)
- [ ] All placeholder images use picsum.photos/seed/tradium-<n>
