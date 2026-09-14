# Template: Palazzo (Hotel & Resort)

## Purpose

Recreation of ColorLib's **Roberto** — a hotel & resort website template.

- **Source slug:** `roberto`
- **ColorLib URL:** https://colorlib.com/wp/template/roberto/
- **Preview URL:** https://preview.colorlib.com/theme/roberto/
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript (strict)
- **Category:** Hospitality / Hotel & Resort

## Design tokens (extracted from live preview)

| Token               | Value                         | Notes                                   |
| ------------------- | ----------------------------- | --------------------------------------- |
| Brand color         | `#1cc3b2`                     | Teal/mint green — buttons, accents      |
| Heading color       | `#2a303b`                     | Dark blue-gray for headings             |
| Body text           | `#636a76`                     | Gray paragraph text                     |
| Dark overlay        | `rgba(14, 39, 55, 0.7)`      | `#0e2737` at 70% alpha                 |
| Dark bg             | `#0e2737`                     | Used in header / dark sections          |
| Light bg            | `#e8f1f8`                     | Soft blue-gray section backgrounds      |
| Border              | `#ebebeb`                     | Light gray borders                      |
| Placeholder text    | `#afb4bf`                     | Muted gray for input placeholders       |
| White               | `#ffffff`                     | Buttons, nav text on dark               |
| Font family         | `Poppins, sans-serif`         | Google Fonts, weights 400–700           |
| Button radius       | `2px`                         | Slight rounding on `.roberto-btn`       |
| Button variant      | `2px solid #1cc3b2` border    | Transparent bg, teal border (`.btn-2`)  |
| Button hover        | bg `#1cc3b2`, text `#ffffff`  | Fills on hover                          |
| Section padding     | `100px 0`                     | Standard section rhythm                 |
| Overlay images      | bg-img + bg-overlay classes   | Dark semi-transparent overlay on images |

## Gherkin requirements

### Scenario: Header displays navigation and contact info

```gherkin
Feature: Header

  Scenario: Top header shows contact details and social links
    Given I visit the Palazzo homepage
    Then I see a phone number "(123) 456-789-1230"
    And I see an email "info.colorlib@gmail.com"
    And I see social icons for Facebook, Twitter, TripAdvisor, Instagram

  Scenario: Main navigation shows menu items
    Given I visit the Palazzo homepage
    Then I see navigation links: Home, Rooms, About Us, Pages, News, Contact
    And I see a "Book Now" button in the navigation

  Scenario: Mobile hamburger menu toggles navigation
    Given I visit the Palazzo homepage on a mobile viewport
    When I click the hamburger menu icon
    Then the navigation menu becomes visible
    And the hamburger icon changes to a close icon
```

### Scenario: Hero section shows rotating slides

```gherkin
Feature: Hero / Welcome Area

  Scenario: Hero displays a carousel of welcome slides
    Given I visit the Palazzo homepage
    Then I see a full-width hero section with a background image
    And I see the text "Hotel & Resort" as a subtitle
    And I see "Welcome To Palazzo" as the main heading
    And I see a "Discover Now" button with transparent border

  Scenario: Hero slides auto-rotate
    Given I visit the Palazzo homepage
    When I wait for the carousel interval
    Then the hero slide transitions to the next slide
```

### Scenario: Hotel search form

```gherkin
Feature: Hotel Search Form

  Scenario: Search form displays date and guest fields
    Given I visit the Palazzo homepage
    Then I see a "Check In" date input
    And I see a "Check Out" date input
    And I see a "Room" select dropdown
    And I see an "Adult" select dropdown
    And I see a "Children" select dropdown
    And I see a "Check Availability" button

  Scenario: Form fields are interactive
    Given I visit the Palazzo homepage
    When I select a check-in date
    Then the check-in field updates to show the selected date
```

### Scenario: About Us section

```gherkin
Feature: About Us

  Scenario: About section shows hotel description with images
    Given I visit the Palazzo homepage
    Then I see an "About Us" section heading
    And I see "Welcome to Palazzo Hotel Luxury" as the title
    And I see a description paragraph about the hotel group
    And I see a manager name "Michen Taylor"
    And I see a signature image
    And I see a 2x2 image grid on the right side
```

### Scenario: Services section

```gherkin
Feature: Services

  Scenario: Services display five amenity cards in a row
    Given I visit the Palazzo homepage
    Then I see a services section with 5 items
    And the services are: Transportation, Travel Service, Spa Relaxation, Restaurant, Bar & Drink
    And each service has an icon image and label
```

### Scenario: Rooms carousel

```gherkin
Feature: Rooms

  Scenario: Rooms section shows a carousel of room cards
    Given I visit the Palazzo homepage
    Then I see a rooms section with a carousel
    And each room slide shows a background image on the left
    And each room slide shows a room name, price per day, and feature list
    And each room has features: Size, Capacity, Bed, Services
    And each room has a "View Details" button

  Scenario: Room carousel navigates between rooms
    Given I visit the Palazzo homepage
    When I click the next arrow in the rooms carousel
    Then the next room slide becomes active
```

### Scenario: Testimonials section

```gherkin
Feature: Testimonials

  Scenario: Testimonials show guest reviews with ratings
    Given I visit the Palazzo homepage
    Then I see a "Testimonials" section heading
    And I see "Our Guests Love Us" as the title
    And I see an image carousel on the left
    And I see testimonial quotes with 5-star ratings on the right
    And each testimonial shows a name and role
```

### Scenario: Projects/Gallery carousel

```gherkin
Feature: Projects Gallery

  Scenario: Projects section shows image slides with hover effects
    Given I visit the Palazzo homepage
    Then I see a projects/gallery carousel
    And each slide shows a full-width background image
    And each slide has a category label and title overlay
    And hovering reveals a description and "Discover Now" button
```

### Scenario: Blog/News section

```gherkin
Feature: Blog

  Scenario: Blog section shows three post cards
    Given I visit the Palazzo homepage
    Then I see a "Latest News" section heading
    And I see 3 blog post cards in a row
    And each card shows a thumbnail image, date, category tag, title, excerpt, and an arrow button
```

### Scenario: Call to Action section

```gherkin
Feature: Call to Action

  Scenario: CTA section shows contact prompt with background image
    Given I visit the Palazzo homepage
    Then I see a CTA section with a background image and dark overlay
    And I see "Contact us now!" as the heading
    And I see a phone number for booking
    And I see a "Contact Now" button
```

### Scenario: Partners section

```gherkin
Feature: Partners

  Scenario: Partners section shows logos in a row
    Given I visit the Palazzo homepage
    Then I see a partners section with 5 partner logo images
    And the logos are evenly spaced in a horizontal row
```

### Scenario: Footer

```gherkin
Feature: Footer

  Scenario: Footer shows contact info, blog links, nav links, and newsletter
    Given I visit the Palazzo homepage
    Then I see a footer with 4 columns
    And the first column has a logo, phone, email, and address
    And the second column has "Our Blog" with 2 recent posts
    And the third column has "Links" with About Us, Our Room, Career, FAQs
    And the fourth column has "Subscribe Newsletter" with an email input and submit button

  Scenario: Footer copyright and social links
    Given I visit the Palazzo homepage
    Then I see a copyright notice in the footer
    And I see social icons (Facebook, Twitter, Instagram, LinkedIn) in the footer
    And the footer links to https://www.componentdock.com/
```

## Verification checklist

- [ ] All 11 sections present in correct order: Header → Hero → Search Form → About → Services → Rooms → Testimonials → Projects → Blog → CTA → Partners → Footer
- [ ] Brand color `#1cc3b2` used for buttons, accents, hover states
- [ ] Font: Poppins (Google Fonts link in `index.html`)
- [ ] Hero: full-width background images with dark overlay, centered text, "Discover Now" button
- [ ] Search form: 5 fields (check-in, check-out, room, adult, children) + submit button
- [ ] About: split layout — left text, right 2x2 image grid
- [ ] Services: 5 icon+label cards in a horizontal row
- [ ] Rooms: carousel with room thumbnail, price, feature list, CTA button
- [ ] Testimonials: split layout — left image carousel, right testimonial carousel with star ratings
- [ ] Projects: carousel with hover overlay effect
- [ ] Blog: 3-column post cards with image, date, category, title, excerpt
- [ ] CTA: background image with overlay, heading, phone number, button
- [ ] Partners: 5 logo images in a row
- [ ] Footer: 4-column layout (contact, blog, links, newsletter) + copyright + social icons
- [ ] Footer links to `https://www.componentdock.com/`
- [ ] No ColorLib references in app code (provenance only in spec + TEMPLATES.md)
- [ ] Placeholder images via `https://picsum.photos/seed/palazzo-<n>/<w>/<h>`
- [ ] Package: `@free-react-templates/palazzo` in `apps/palazzo`
