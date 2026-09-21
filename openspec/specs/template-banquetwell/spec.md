# Template: BanquetWell (Restaurant & Venue)

## Purpose

Recreation of ColorLib **The Venue** restaurant template.
- Source slug: `thevenue`
- Preview URL: https://preview.colorlib.com/theme/thevenue/
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/thevenue-free-template.jpg
- Stack: React 19 + Vite + Tailwind CSS 4 + TypeScript
- Category: Restaurant / Venue / Dining

## Design Tokens (extracted from preview CSS)

| Token | Value | Usage |
|-------|-------|-------|
| Font (body) | `'PT Sans Narrow', sans-serif` | All body text, headings |
| Font (decorative) | `'Edward', sans-serif` | Subtitles, page_subtitle class |
| Brand tan | `#b49383` | Subtitle color, button text, links, accent |
| Accent tan (hover/border) | `#c4ab9f` | Button borders, hover fills |
| Red accent | `#db5246` | Secondary accent |
| Tomato red | `#FF6347` | Header phone highlight |
| Dark bg (footer) | `#232323` | Footer background |
| Dark bg (menu bar) | `#282828` | Menu title bar background |
| Body text | `#636363` | Primary text |
| Muted text | `#a5a5a5` | Secondary text |
| White | `#FFFFFF` | Intro, signature sections |
| Light gray | `#F7F7F7` | Alternative section background |
| Button border-radius | `0` (sharp/square) | "Order Now" and "Make a Reservation" buttons |
| Video play button | `50%` border-radius (circle) | Vimeo play overlay |

## Section Structure (top to bottom)

1. **Header** — Sticky nav bar. Logo "The Venue" / "restaurant" (text, no image). Nav links: Home, About Us, Menu, Delivery, Blog, Contact. Right side: reservation phone number.
2. **Hero / Home** — Full-width parallax background image. Centered text overlay: subtitle "The Venue is", heading "An Extraordinery Experience", paragraph description. Scroll-down icon at bottom.
3. **Intro** — White background. Subtitle "Something new", heading "An Extraordinery Experience", paragraph. Two-column image grid below.
4. **Video Section** — Parallax background image. Centered text "Food for the soul" with circular Vimeo play button.
5. **Signature Dish** — White background. Left side: subtitle "Something new", heading "Our Signature Dish", 5-star rating, dish name + price ($20), ingredient tag list (Pork, Tenderloin, Green Pepper, Veggies), "Order Now" button. Right side: large dish image.
6. **The Menu** — White background with dark (#282828) title bar showing "5 Stars" rating + "The Menu". Three columns: Starters, Main, Deserts. Each column has 5 dishes with title, price, ingredient tags, "Order Now" link.
7. **Reservations** — Parallax background image. Centered form: date picker, time picker, party size dropdown (2–6 persons), "Make a Reservation" button.
8. **Footer** — Dark (#232323) background. Three columns: Logo + copyright, About text, Contact info (address, phone, email).

## Gherkin Requirements

```gherkin
Feature: BanquetWell Restaurant Template
  As a visitor I want to see a premium restaurant website
  So that I can explore the menu and make reservations

  Scenario: Header displays navigation and reservation info
    Given I am on the homepage
    Then I see the logo "BanquetWell" with "restaurant" subtitle
    And I see navigation links: Home, About Us, Menu, Delivery, Blog, Contact
    And I see a reservation phone number on the right

  Scenario: Hero section shows parallax background with welcome text
    Given I am on the homepage
    Then I see a full-width hero with parallax background image
    And I see the subtitle "BanquetWell is"
    And I see the heading "An Extraordinary Experience"
    And I see a descriptive paragraph
    And I see a scroll-down indicator

  Scenario: Intro section displays brand overview with images
    Given I scroll to the intro section
    Then I see subtitle "Something new"
    And I see heading "An Extraordinary Experience"
    And I see two side-by-side food images

  Scenario: Video section shows promotional video
    Given I scroll to the video section
    Then I see a parallax background with "Food for the soul" text
    And I see a circular play button that links to a video

  Scenario: Signature dish section highlights featured item
    Given I scroll to the signature dish section
    Then I see subtitle "Something new"
    And I see heading "Our Signature Dish"
    And I see a 5-star rating
    And I see the dish name with price
    And I see ingredient tags
    And I see an "Order Now" button with sharp corners

  Scenario: Menu section displays three-column menu
    Given I scroll to the menu section
    Then I see a dark title bar with "5 Stars" and "The Menu"
    And I see three columns: Starters, Main, Deserts
    And each column contains 5 dishes with name, price, and ingredients
    And each dish has an "Order Now" link

  Scenario: Reservation form accepts date, time, and party size
    Given I scroll to the reservations section
    Then I see a parallax background
    And I see a date picker input
    And I see a time picker input
    And I see a party size dropdown (2–6 persons)
    And I see a "Make a Reservation" button

  Scenario: Footer shows contact and copyright info
    Given I scroll to the footer
    Then I see a dark background
    And I see the logo "BanquetWell" / "restaurant"
    And I see an about paragraph
    And I see contact details: address, phone, email
    And I see a copyright notice with link to Component Dock

  Scenario: Navigation is sticky on scroll
    Given I am on the homepage
    When I scroll down
    Then the header remains fixed at the top of the viewport

  Scenario: Mobile hamburger menu
    Given I am on a mobile viewport
    Then I see a hamburger menu toggle
    When I tap the hamburger
    Then a full-screen overlay menu appears with all nav links
```

## Verification Checklist

- [ ] Header: sticky, logo text, nav links, reservation phone
- [ ] Hero: parallax background, centered text, scroll indicator
- [ ] Intro: white bg, subtitle, heading, paragraph, 2-image grid
- [ ] Video: parallax bg, centered text, circular play button
- [ ] Signature dish: 5-star rating, dish details, ingredient tags, "Order Now" button
- [ ] Menu: dark title bar, 3 columns (Starters/Main/Deserts), 5 dishes each
- [ ] Reservations: parallax bg, date/time/party-size form
- [ ] Footer: dark bg, logo, about, contact, copyright with Component Dock link
- [ ] Design tokens: PT Sans Narrow font, #b49383 brand tan, #232323 dark bg
- [ ] Responsive: mobile hamburger, stacked columns
- [ ] Placeholder images: picsum.photos with deterministic seeds
- [ ] No ColorLib references in app code
- [ ] Footer links to https://www.componentdock.com/
