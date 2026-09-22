# Lodgely — Luxury Hotel Landing Template

> Recreation of ColorLib "Sogo" (https://colorlib.com/wp/template/sogo/)

## Design Tokens

- **Font pairing:** Playfair Display (headings, serif) + Roboto (body, sans-serif)
- **Primary accent:** #ffba5a (golden amber)
- **Body text:** #6c757d (muted gray)
- **Headings:** #000000 (black)
- **Light background:** #f2f4fb
- **Overlay:** rgba(0, 0, 0, 0.45) on hero/CTA sections
- **Button:** rounded-full (pill shape), primary-500 bg, white text
- **Section padding:** 5rem vertical (lg: 7rem)

## Sections (in order)

### 1. Navbar

- Fixed top, transparent on hero, white bg on scroll
- Brand name "Lodgely" (Playfair Display, bold)
- Links: Home, Rooms, Restaurant, Events, Contact
- Mobile: hamburger menu toggle

### 2. Hero

- Full-screen height, background image with dark overlay
- Centered text: "Welcome To 5 Star Hotel" (subtitle with star icon)
- "A Best Place To Stay" (heading, large)
- Scroll-down indicator

### 3. Booking Form

- Light gray background (#f2f4fb)
- Form row: Check In (date), Check Out (date), Adults (select), Children (select), Check Availability button
- Pill-shaped button, golden amber

### 4. Welcome / About

- Split layout: large image left, text right
- Heading "Welcome!"
- Body paragraph
- "Learn More" button + "or See video" link

### 5. Rooms & Suites

- Centered heading "Rooms & Suites"
- 3-column grid of room cards
- Each card: image, room name, price per night
- Rooms: Single Room ($90), Family Room ($120), Presidential Room ($250)

### 6. Photos Gallery

- Centered heading "Photos"
- Grid of 6 images (3x2)

### 7. Restaurant Menu

- Full-width background image with dark overlay
- Heading "Our Restaurant Menu"
- Tabbed navigation: Mains, Desserts, Drinks
- 2-column grid of menu items per tab
- Each item: price (golden), name, description

### 8. Testimonials

- Centered heading "People Says"
- 3 testimonial cards: avatar, quote, author name

### 9. Events

- Light gray background
- Centered heading "Events"
- 3 event cards: image, date, title, excerpt

### 10. CTA Banner

- Full-width background image with dark overlay
- "A Best Place To Stay. Reserve Now!" heading
- "Reserve Now" outline button (white border, pill shape)

### 11. Footer

- 4-column layout: About links, Rooms links, Contact info, Newsletter form
- Copyright bar with Component Dock link
- Social media icons (Facebook, Twitter, LinkedIn, Instagram)

## Gherkin Scenarios

```gherkin
Feature: Lodgely hotel template

  Scenario: Hero renders headline and subtitle
    Given I visit the Lodgely homepage
    Then I should see the heading "A Best Place To Stay"
    And I should see "Welcome To" with star icons

  Scenario: Booking form is present
    Given I visit the Lodgely homepage
    Then I should see a booking form with check-in and check-out date fields
    And I should see adults and children select fields
    And I should see a "Check Availability" button

  Scenario: Booking form prevents default submission
    Given I visit the Lodgely homepage
    When I click the "Check Availability" button
    Then the form should not navigate away

  Scenario: Welcome section renders
    Given I visit the Lodgely homepage
    Then I should see a "Welcome!" heading
    And I should see a "Learn More" button

  Scenario: Rooms and suites are displayed
    Given I visit the Lodgely homepage
    Then I should see a "Rooms & Suites" heading
    And I should see 3 room cards with names and prices

  Scenario: Photos gallery is displayed
    Given I visit the Lodgely homepage
    Then I should see a "Photos" heading
    And I should see a gallery of images

  Scenario: Restaurant menu has tabs
    Given I visit the Lodgely homepage
    Then I should see "Our Restaurant Menu" heading
    And I should see Mains, Desserts, and Drinks tabs
    And the Mains tab should be active by default

  Scenario: Restaurant menu tab switching
    Given I visit the Lodgely homepage
    When I click the "Desserts" tab
    Then the Desserts tab should be active
    And I should see dessert menu items

  Scenario: Testimonials are displayed
    Given I visit the Lodgely homepage
    Then I should see a "People Says" heading
    And I should see testimonial cards with quotes and authors

  Scenario: Events section is displayed
    Given I visit the Lodgely homepage
    Then I should see an "Events" heading
    And I should see 3 event cards

  Scenario: CTA banner with reserve button
    Given I visit the Lodgely homepage
    Then I should see "Reserve Now" text
    And I should see a "Reserve Now" link

  Scenario: Footer contains Component Dock link
    Given I visit the Lodgely homepage
    Then the footer should contain a "Component Dock" link
    And the link should point to https://www.componentdock.com/

  Scenario: Footer has newsletter form
    Given I visit the Lodgely homepage
    Then I should see a newsletter email input
    And I should see a subscribe button

  Scenario: Newsletter form clears on submit
    Given I visit the Lodgely homepage
    When I enter an email and click subscribe
    Then the email input should be cleared
```
