# Template: Dishcraft (Restaurant)

## Purpose

Recreation of ColorLib **Meal** restaurant template.
Preview: https://preview.colorlib.com/theme/meal/
Source: https://colorlib.com/wp/template/meal/
Stack: React 19 · Vite · Tailwind CSS 4 · TypeScript

## Design tokens

| Token | Value |
|-------|-------|
| Body font | `"Open Sans", Arial, sans-serif` |
| Heading font | `"Playfair Display", serif` |
| Brand accent | `#ff7a5c` (coral/salmon) |
| Body text color | `gray` |
| Heading color | `#000` |
| Body background | `#fff` (white) |
| Light section bg | `#f8f9fa` (Bootstrap bg-light) |
| Button (hero CTA) | outline white, 2px border, padding 5px 20px |
| Button (form submit) | outline primary (#ff7a5c), full-width block |
| Button hover | fill with bg color |
| Section heading | centered, h2 with serif font, sub-heading below |
| Border radius | Bootstrap defaults (no custom radius in original) |

## Section structure (in order)

1. **Navbar** — Fixed top logo "M" (bordered square) + hamburger toggle → slide-out side menu with nav links (Home, About Us, Our Menu, Reserve A Table, Contact)
2. **Hero** — Full-width background image, centered heading "Welcome to Meal", white outline "Reserve A Table" button
3. **Food Highlights** — "Find your best food" heading, 3 food items in alternating image+text layout (image left/text right, then reversed, then image top/text bottom)
4. **About ("The Restaurant")** — White bg, centered heading + 2 paragraphs of descriptive text
5. **Chef Banner** — Centered decorative image
6. **Meet The Chefs** — 2 chef cards side by side, each with photo, name, title, bio text, and social media icons (Facebook, Twitter, Instagram)
7. **Menu** — Tabbed interface (Breakfast / Brunch / Dinner), each tab has 4 menu items with thumbnail image, dish name, description, and price
8. **Other Services** — 3x2 grid of feature cards with icon + title + description (Quality Cuisine, Fresh Food, Bread & Pancake, Reserve Now, Fresh Vegies Salad, Whole Chicken)
9. **Reservation Form** — Light bg, 6 fields (Name, Email, Phone, Number of Persons, Date, Time) + "Reserve Now" submit button
10. **Customer Reviews** — Carousel of testimonials with quote, author photo, name, title
11. **Contact Form ("Get In Touch")** — 4 fields (Name, Email, Phone, Message) + "Send Message" submit button
12. **Map** — Embedded Google Map placeholder
13. **Footer** — 3-column layout: About text + Read More button | Service hours (Lunch + Dinner) | Social links + Newsletter email input. Copyright line at bottom.

## Gherkin requirements

### Feature: Dishcraft Restaurant Template

#### Scenario: Navbar displays with logo and hamburger menu
- Given the user is on the page
- When the page loads
- Then a centered logo "D" (bordered square) is visible
- And a hamburger menu icon is visible on the right
- And clicking the hamburger opens a slide-out navigation panel

#### Scenario: Navigation links in side menu
- Given the side menu is open
- When the user views the navigation
- Then 5 links are shown: Home, About Us, Our Menu, Reserve A Table, Contact
- And clicking a link scrolls to the corresponding section

#### Scenario: Hero section displays
- Given the user is on the page
- When the hero section is visible
- Then a full-width background image is shown
- And the heading "Welcome to Dishcraft" is centered
- And a "Reserve A Table" button is displayed with white outline style

#### Scenario: Hero CTA button scrolls to reservation
- Given the hero section is visible
- When the user clicks "Reserve A Table"
- Then the page scrolls to the reservation form section

#### Scenario: Food Highlights section
- Given the user scrolls to the food highlights section
- When the section is visible
- Then a centered heading "Find your best food" is displayed
- And 3 food items are shown in alternating image/text layout
- And each item has a category label, dish name, description, and "Learn More" link

#### Scenario: About section
- Given the user scrolls to the about section
- When the section is visible
- Then the heading "The Restaurant" is centered
- And 2 paragraphs of descriptive text are shown

#### Scenario: Meet The Chefs section
- Given the user scrolls to the chefs section
- When the section is visible
- Then 2 chef cards are displayed side by side
- And each card shows a photo, name, title ("Master Chef"), bio, and 3 social icons

#### Scenario: Menu tabs display food items
- Given the user scrolls to the menu section
- When the section is visible
- Then 3 tabs are shown: Breakfast, Brunch, Dinner
- And the Breakfast tab is active by default
- And each tab shows 4 menu items with thumbnail, name, description, and price

#### Scenario: Menu tab switching
- Given the menu section is visible with the Breakfast tab active
- When the user clicks the "Brunch" tab
- Then the Breakfast items are hidden
- And the Brunch items are shown
- And the Brunch tab is highlighted as active

#### Scenario: Other Services grid
- Given the user scrolls to the services section
- When the section is visible
- Then the heading "Other Services" is centered
- And 6 service cards are displayed in a 3x2 grid
- And each card has an icon, title, and description

#### Scenario: Reservation form displays
- Given the user scrolls to the reservation section
- When the section is visible
- Then the heading "Reservation" is centered
- And 6 form fields are shown: Name, Email, Phone, Number of Persons, Date, Time
- And each field has an icon
- And a "Reserve Now" submit button is displayed full-width

#### Scenario: Reservation form validation
- Given the reservation form is displayed
- When the user clicks "Reserve Now" without filling fields
- Then the form shows validation feedback

#### Scenario: Customer Reviews carousel
- Given the user scrolls to the reviews section
- When the section is visible
- Then the heading "Customer Reviews" is centered
- And testimonials are displayed in a carousel
- And each testimonial shows a quote, author photo, name, and title

#### Scenario: Contact form displays
- Given the user scrolls to the contact section
- When the section is visible
- Then the heading "Get In Touch" is centered
- And 4 form fields are shown: Name, Email, Phone, Message
- And a "Send Message" submit button is displayed full-width

#### Scenario: Map section
- Given the user scrolls past the contact form
- When the map section is visible
- Then a map placeholder is rendered

#### Scenario: Footer displays
- Given the user scrolls to the bottom
- When the footer is visible
- Then 3 columns are shown: About text, Service hours, Social + Newsletter
- And social icons link to Twitter, Facebook, Instagram
- And a newsletter email input with submit button is shown
- And a copyright line is displayed at the bottom
- And a "Component Dock" link is included

## Verification checklist

- [ ] Navbar: fixed logo + hamburger + slide-out menu with 5 links
- [ ] Hero: full-width bg image, centered heading, white outline CTA button
- [ ] Food Highlights: heading + 3 alternating image/text items
- [ ] About: centered heading + descriptive text
- [ ] Chef section: 2 side-by-side cards with photo, name, title, bio, social
- [ ] Menu: 3 tabs (Breakfast/Brunch/Dinner), each with 4 items + prices
- [ ] Services: 3x2 grid of icon cards
- [ ] Reservation: 6-field form with icons + submit button
- [ ] Reviews: carousel of testimonials
- [ ] Contact: 4-field form + submit button
- [ ] Map placeholder
- [ ] Footer: 3-column layout + copyright + Component Dock link
- [ ] All design tokens match: Playfair Display headings, Open Sans body, #ff7a5c accent
- [ ] Responsive layout (mobile hamburger, stacked columns)
- [ ] No ColorLib references in app code
- [ ] Footer links to https://www.componentdock.com/
