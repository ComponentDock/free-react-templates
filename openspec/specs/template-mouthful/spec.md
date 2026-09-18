# Template: Mouthful (Restaurant Landing)

## Purpose

Mouthful is a single-page restaurant landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Dingo" design (see TEMPLATES.md), built under the monorepo
stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a warm, food-themed restaurant template with a hero banner
featuring a headline and reservation CTA, an exclusive items carousel, an
about section with history, an intro video band, a food menu with tabs, a
chefs section, a reservation form, a testimonials carousel, a blog section,
and a 4-column footer. Mouthful recreates that structure section-for-section
with matching layout, colors, typography, and content types (no ColorLib
assets copied).

## Design reference (replication findings)

- **Original:** ColorLib "Dingo" — restaurant website template
  (source: https://colorlib.com/wp/template/dingo/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/dingo/`
  (HTTP 200, 55.8KB) + stylesheet `css/style.css` (205.6KB). The rendered DOM
  is the reference below; the TEMPLATES.md screenshot
  (`dingo-free-template.jpg`) confirms the visual design (warm food theme,
  orange accent, dark text, clean layout).
- **Section order (1:1):**
  1. Header/navbar: "Dingo" logo + nav (Home, About, Menu, Chefs, Blog
     dropdown, Contact) + "Book a table" button.
  2. Hero (`banner_part`): "Expensive but the best" subtitle + "Deliciousness
     jumping into the mouth" headline + paragraph + "Reservation" button +
     "Watch our story" video link with play icon.
  3. Exclusive items (`exclusive_item_part`): "Our Exclusive Items" heading +
     4-item carousel (Indian Burger, Cremy Noodles, Honey Meat, Cremy
     Noodles) with images and titles.
  4. About (`about_part`): split layout — left: food image; right: "Our
     History" subtitle + "Where The Food's As Good As The Root Beer" heading
     + "Satisfying people hunger for simple pleasures" subheading + paragraph
     + "Read More" button.
  5. Intro video band (`intro_video_bg`): full-width background image with
     play button overlay.
  6. Food menu (`food_menu gray_bg`): "Delicious Food Menu" heading + menu
     items in grid (Pork Sandwich $40.00, Roasted Marrow $40.00, Summer
     Cooking $40.00, Easter Delight $40.00, Tiener Schnitze $40.00, Chicken
     Roast $40.00) with images and prices.
  7. Chefs (`chefs_part`): "Our Expert Chefs" heading + chef cards (Justin
     Stuard and others) with photos and names.
  8. Reservation (`regervation_part`): "Book A Table" heading + form (name,
     email, select dropdowns for date/time, message textarea, submit button).
  9. Testimonials (`review_part gray_bg`): "Customers Feedback" heading +
     carousel of review cards (author photo, quote, name + role).
  10. Blog (`blog_section`): "Latest From Blog" heading + 3 blog cards
      (image, date/category tags, title, "Read More" link).
  11. Footer (`footer-area`): 4-column layout — About Us, Important Links,
      Contact us (address/phone/email), Newsletter (email input + submit).
      Copyright bar at bottom.

- **Design tokens extracted from `css/style.css`:**
  - Brand color: **#ff6426** (orange — primary buttons, accents, hover).
  - Dark hover: **#e04000** (darker orange on hover).
  - Dark text: **#1d272f** headings, **#777777** body.
  - Light backgrounds: gray sections, white default.
  - Font: **"Lora"** (serif) for headings + **"Cardo"** (serif) for accents.
  - Buttons: `.btn_1` (solid with arrow), `.btn_2` (text with arrow),
    `.btn_3` (text with arrow, outline). Standard border-radius 50px on
    some buttons.
  - Hero: likely has a food-themed background image.
  - Menu items: grid layout with food images and prices.
  - Reservation form: clean form with input fields and select dropdowns.
  - Testimonials: carousel with author photos and quotes.
  - Footer: dark background, light text.

- **Recreation decisions:** repo-standard Navbar (site name, Home link,
  dark-mode toggle) + Footer chrome; hero uses a food-themed picsum photo;
  exclusive items as a grid/carousel; about section with image and text;
  food menu as a grid with images, names, and prices; chefs as card grid;
  reservation as a form; testimonials as cards; blog as image cards with
  date tags. All images picsum-seeded, icons lucide-react (no assets copied).

Mouthful lives in `apps/mouthful` and uses shared components from `packages/ui`
(Button, ButtonLink, Card, Badge, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a navigation bar with the site name "Mouthful" and
nav links.

#### Scenario: Renders site name and navigation

    Given the page is loaded
    When I look at the navigation bar
    Then I see the text "Mouthful" as the site name
    And I see navigation links: "Home", "About", "Menu", "Chefs", "Blog",
      "Contact"

#### Scenario: Book a table button

    Given the page is loaded
    When I look at the navigation bar
    Then I see a "Book a table" button

#### Scenario: Dark mode toggle

    Given the page is loaded
    When I look at the navigation bar
    Then I see a dark-mode toggle button

### Requirement: Hero section

The system SHALL render a hero section with a headline, subtitle, and
call-to-action buttons.

#### Scenario: Hero content

    Given the page is loaded
    When I look at the hero section
    Then I see the subtitle "Expensive but the best"
    And I see the headline "Deliciousness jumping into the mouth"
    And I see a "Reservation" button

#### Scenario: Video link

    Given the page is loaded
    When I look at the hero section
    Then I see a "Watch our story" video link with a play icon

### Requirement: Exclusive items

The system SHALL render an exclusive items section with a heading and
product cards.

#### Scenario: Exclusive items heading

    Given the page is loaded
    When I scroll to the exclusive items section
    Then I see the heading "Our Exclusive Items"

#### Scenario: Exclusive item cards

    Given the page is loaded
    When I look at the exclusive items
    Then I see items with images and titles

### Requirement: About section

The system SHALL render an about section with a split layout and history text.

#### Scenario: About content

    Given the page is loaded
    When I scroll to the about section
    Then I see the subtitle "Our History"
    And I see the heading "Where The Food's As Good As The Root Beer"
    And I see a "Read More" button

### Requirement: Food menu

The system SHALL render a food menu section with a heading and menu items.

#### Scenario: Menu heading

    Given the page is loaded
    When I scroll to the food menu section
    Then I see the heading "Delicious Food Menu"

#### Scenario: Menu items

    Given the page is loaded
    When I look at the menu items
    Then I see food items with names and prices

### Requirement: Chefs section

The system SHALL render a chefs section with chef cards.

#### Scenario: Chefs heading

    Given the page is loaded
    When I scroll to the chefs section
    Then I see a heading for the chefs section

#### Scenario: Chef cards

    Given the page is loaded
    When I look at the chef cards
    Then I see chef photos and names

### Requirement: Reservation form

The system SHALL render a reservation form with input fields and submit button.

#### Scenario: Reservation heading

    Given the page is loaded
    When I scroll to the reservation section
    Then I see the heading "Book A Table"

#### Scenario: Reservation form fields

    Given the page is loaded
    When I look at the reservation form
    Then I see fields for name, email, date, time, and message
    And I see a submit button

### Requirement: Testimonials

The system SHALL render a testimonials section with author photos and quotes.

#### Scenario: Testimonials heading

    Given the page is loaded
    When I scroll to the testimonials section
    Then I see the heading "Customers Feedback"

#### Scenario: Testimonial cards

    Given the page is loaded
    When I look at the testimonials
    Then I see cards with author photos, quotes, names, and roles

### Requirement: Blog section

The system SHALL render a blog section with post cards.

#### Scenario: Blog heading

    Given the page is loaded
    When I scroll to the blog section
    Then I see the heading "Latest From Blog"

#### Scenario: Blog cards

    Given the page is loaded
    When I look at the blog cards
    Then I see 3 cards with images, dates, titles, and "Read More" links

### Requirement: Footer

The system SHALL render a footer with About, Links, Contact, and Newsletter
sections. The footer MUST link to `https://www.componentdock.com/`.

#### Scenario: Footer columns

    Given the page is loaded
    When I look at the footer
    Then I see an "About Us" column with description
    And I see "Important Link" with navigation links
    And I see "Contact us" with address, phone, email
    And I see "Newsletter" with email input

#### Scenario: Footer links to Component Dock

    Given the page is loaded
    When I look at the footer
    Then I see a link to "https://www.componentdock.com/" labeled
      "Component Dock"

### Requirement: Responsive layout

The system SHALL be responsive across mobile, tablet, and desktop viewports.

#### Scenario: Mobile navigation

    Given the viewport is 375px wide
    When I look at the navigation
    Then it adapts to mobile layout with a hamburger menu

## Verification checklist

- [ ] Navbar with "Mouthful" logo, nav links, and "Book a table" button
- [ ] Hero with headline, subtitle, and "Reservation" button
- [ ] Exclusive items section with product cards
- [ ] About section with split layout and history text
- [ ] Food menu with items and prices
- [ ] Chefs section with chef cards
- [ ] Reservation form with fields and submit
- [ ] Testimonials carousel with author photos
- [ ] Blog section with 3 image cards
- [ ] Footer with 4 columns + Component Dock link
- [ ] Primary orange (#ff6426) for buttons and accents
- [ ] Fonts: Lora (headings) + Cardo (accents)
- [ ] Dark mode toggle functional
- [ ] All images use picsum.photos seeded URLs
- [ ] No ColorLib references in app code
