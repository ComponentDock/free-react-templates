# Template: Grove (Restaurant / Food)

## Purpose

Recreation of ColorLib Buri — a free restaurant/food HTML5 Bootstrap template
with a full-width hero banner, about section, food menu grid, video background,
testimonials carousel, contact info, and a dark footer. The original is a
jQuery-based Bootstrap template for restaurant websites.

- **Source template**: [Colorlib Buri](https://colorlib.com/wp/template/buri/)
- **New Name**: `grove` (App directory: `apps/grove`, Package: `@free-react-templates/grove`)
- **Category**: Restaurant / Food
- **Preview URL**: `https://preview.colorlib.com/theme/buri/` (reachable at prep time)
- **Screenshot**: `https://colorlib.com/wp/wp-content/uploads/sites/2/buri-free-template.jpg`
- **Stack**: React 19, Vite, Tailwind CSS 4, TypeScript (strict)

## Design tokens

> Extracted from the live preview CSS (`css/style.css`) at
> `https://preview.colorlib.com/theme/buri/css/style.css`.

| Token                          | Value                  | Notes                                                        |
| ------------------------------ | ---------------------- | ------------------------------------------------------------ |
| Font family (body)             | `"Montserrat", sans-serif` | Weight: 400 (Regular) — body text, nav, descriptions      |
| Font family (headings accent)  | `"Playfair Display", serif` | Weight: 700 — section headings, hero h1                  |
| Accent / CTA primary           | `#d6ad86`              | Warm gold/bronze — buttons, section subtitle text, nav links, footer accents |
| Accent hover                   | `#ffb830`              | Warm amber/orange — button hover state                       |
| Text primary (headings)        | `#2c3033`              | Dark near-black — h2 headings, nav text                      |
| Text body                      | `#555555`              | Medium gray — body paragraphs                                |
| Text secondary                 | `#2a2a2a`              | Slightly lighter dark — about section text                    |
| Text muted                     | `#999999`              | Light gray — secondary info, menu item descriptions           |
| Text on dark                   | `#666666`              | Footer secondary text                                        |
| Background (body/page)         | `#ffffff`              | White page background                                        |
| Background (footer)            | `#1c1a18`              | Very dark brown/charcoal — footer area                        |
| Background (banner)            | Background image       | Full-width hero image (replace with picsum.photos)            |
| Background (video section)     | Background image       | Dark overlay image with play button (replace with gradient)   |
| Background (contact)           | Background image       | Contact section background image (replace with picsum.photos) |
| Button primary (btn_1)         | `#d6ad86` bg, `#fff` text | Height: auto, padding: 23px 60px, font-size: 14px         |
| Button primary hover           | `#ffb830` bg, `#fff` text | Smooth 0.5s transition                                     |
| Button secondary (btn_3)       | `#000000` bg, `#fff` text | Padding: 14px 37.5px, font-size: 15px                     |
| Button secondary hover         | `#ffb830` bg, `#fff` text | Smooth 0.5s transition                                     |
| Button border-radius           | `4px`                  | Slight rounding on buttons                                   |
| Social icon color              | `#d6ad86`              | Gold accent for social icons in header/footer                 |
| Review star color              | `#ffb830`              | Amber/gold for star ratings                                  |
| Input border (newsletter)      | `1px solid #fdcb9e`    | Warm peach border on newsletter email input                   |
| Section title subtitle color   | `#d6ad86`              | Gold for "Popular Menu", "Testimonials", etc.                |
| Banner height                  | `1080px`               | Full-viewport hero section                                   |
| Video section height           | `550px`                | Mid-page video background section                            |
| Food menu padding              | `140px 0 90px`         | Generous vertical spacing                                    |
| Section padding (general)      | ~`100px` top/bottom    | Used on reviews, contact, about                              |
| Transitions                    | `0.5s`                 | Button hover and general transitions                         |

## Requirements

### Feature: Grove — Restaurant Website Template

#### Scenario: Page loads with navbar and hero banner

- **GIVEN** the user opens the Grove page
- **THEN** a navbar should be visible with the logo on the left
- **AND** navigation links should include Home, About, Menu, Blog, and Contact
- **AND** social icons (Facebook, Instagram) should appear on the right side of the navbar
- **AND** a full-width hero banner should display below the navbar
- **AND** the banner should show a subtitle "Expensive but the best"
- **AND** the banner should show a heading "Modern restaurant in center of the city"
- **AND** a "book a table" CTA button should be visible on the banner

#### Scenario: Hero banner CTA button

- **GIVEN** the hero banner is visible
- **THEN** the "book a table" button should have a gold (#d6ad86) background
- **AND** the button should have white text
- **AND** on hover the button background should change to amber (#ffb830)
- **AND** the transition should take 0.5s

#### Scenario: About section

- **GIVEN** the user scrolls past the hero banner
- **THEN** an "about us" section should appear
- **AND** it should display a subtitle "about us" in gold (#d6ad86)
- **AND** a heading "Delicious food provider since 1990" in dark (#2c3033)
- **AND** two paragraphs of descriptive text
- **AND** a "learn More" button with black (#000) background and white text
- **AND** an image should be positioned to the right of the text

#### Scenario: Food Menu section

- **GIVEN** the user scrolls to the food menu section
- **THEN** a "Popular Menu" subtitle should appear in gold (#d6ad86)
- **AND** a "Delicious Food Menu" heading should be centered
- **AND** 6 food items should be displayed in a 2-column grid
- **AND** each food item should show an image, name, description, and price
- **AND** food items should include Pork Sandwich, Roasted Marrow, Summer Cooking, Easter Delight, Tiener Schnitze, and Chicken Roast

#### Scenario: Video background section

- **GIVEN** the user scrolls past the food menu
- **THEN** a video background section should appear with a dark overlay image
- **AND** a centered play button icon should be visible
- **AND** the section should be approximately 550px tall

#### Scenario: Testimonials section

- **GIVEN** the user scrolls to the testimonials section
- **THEN** a "Testimonials" subtitle should appear in gold (#d6ad86)
- **AND** a "What they said" heading should be centered
- **AND** a carousel of reviews should be displayed
- **AND** each review should contain a text quote, avatar image, name, and 5 gold stars
- **AND** the carousel should support horizontal scrolling/navigation

#### Scenario: Contact section

- **GIVEN** the user scrolls to the contact section
- **THEN** a "Contact Us" heading should be visible
- **AND** the section should display an address (240, Kings street, New York city USA)
- **AND** business hours should be shown (Mon-Fri 9:00-19:00, Sat-Sun 9:00-19:00)
- **AND** a reservation phone number should be displayed (+880 367 251 167)
- **AND** an email address should be shown (barires@contact.com)
- **AND** the section should have a background image

#### Scenario: Footer

- **GIVEN** the user scrolls to the footer
- **THEN** the footer should have a very dark brown (#1c1a18) background
- **AND** it should display the logo, phone number, and email
- **AND** social icons (Facebook, Instagram) should be visible
- **AND** a "Quick links" column should list About, Menu, Reservation, Blog, Breakfast, Lunch, Dinner
- **AND** a newsletter signup form should be present with an email input and send button
- **AND** the copyright line should link to Component Dock (https://www.componentdock.com/)

#### Scenario: Responsive layout

- **GIVEN** the user views the page on a mobile device (< 768px)
- **THEN** the navbar should collapse into a hamburger menu
- **AND** the hero banner text should stack vertically
- **AND** the about section image should move below the text
- **AND** the food menu grid should stack to a single column
- **AND** the footer columns should stack vertically

#### Scenario: Typography consistency

- **GIVEN** any text is rendered on the page
- **THEN** body text should use Montserrat font family
- **AND** headings (h1, h2) should use Playfair Display serif font
- **AND** section subtitles should be gold (#d6ad86) colored
- **AND** main headings should be dark (#2c3033) colored

## Verification checklist

- [ ] Navbar renders with logo, nav links, and social icons
- [ ] Hero banner shows full-width background image with text overlay and CTA
- [ ] About section has correct text layout, heading, and image placement
- [ ] Food menu displays 6 items in a 2-column grid with images and prices
- [ ] Video section shows background image with centered play button
- [ ] Testimonials carousel displays reviews with avatars and star ratings
- [ ] Contact section shows address, hours, phone, and email over background image
- [ ] Footer has dark background, logo, quick links, newsletter form, and copyright
- [ ] Footer copyright links to Component Dock
- [ ] All buttons have correct gold accent color and hover transitions
- [ ] Typography uses Montserrat (body) and Playfair Display (headings)
- [ ] Responsive layout works on mobile (hamburger nav, stacked columns)
- [ ] No ColorLib references in app code (only in spec and TEMPLATES.md)
- [ ] CNAME file contains `grove.free.componentdock.com`
- [ ] package.json homepage is `https://grove.free.componentdock.com`
- [ ] All placeholder images use `https://picsum.photos/seed/grove-<n>/<w>/<h>`
