# Template: Highland (Hotel / Resort)

## Purpose

Recreation of ColorLib **Montana** template as a React 19 + Vite + Tailwind 4 + TypeScript app.

- Source: https://colorlib.com/wp/template/montana/
- Preview: https://preview.colorlib.com/theme/montana/
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/montana-free-template.jpg
- New name: `highland` (apps/highland, @free-react-templates/highland)
- Stack: Vite · React 19 · Tailwind CSS 4 · TypeScript

## Design tokens (extracted from live preview CSS)

| Token | Value | Usage |
|-------|-------|-------|
| Brand blue | `#009DFF` | Section labels, CTA buttons, hover states, newsletter button, phone button, "book now" buttons, footer links |
| Heading color | `#1F1F1F` | All headings (h1–h5), nav links, body text default |
| Body text | `#4D4D4D` | Paragraphs, secondary text |
| Footer text | `#BABABA` | Footer paragraphs, links, newsletter text |
| Muted text | `#919191` | Line-button underline, copyright text, newsletter input placeholder |
| Social icon color | `#A8A7A0` | Header and footer social links (inactive) |
| Footer background | `#000` (solid black) | Entire footer section |
| Overlay color | `#1F1F1F` at `opacity 0.5` | Video section overlay, image overlays |
| Font family | `Raleway` (Google Fonts, weights 300–900) | Global font for all text |
| Button style — boxed | `#009DFF` bg, white text, no border-radius, uppercase, letter-spacing 3px, padding 18px 44px | Primary CTA (Check Availability) |
| Button style — outlined | transparent bg, `#009DFF` border 1px, `#009DFF` text, no border-radius, capitalize | "Book now" links |
| Button style — line | gray `#919191` text with underline, hover turns blue | "Learn More" secondary links |
| Phone button | `#009DFF` bg, white text, border-radius 30px (pill shape), padding 12px 53px | Reservation query phone number |
| Video play button | white circle (60×60px), border-radius 50%, blue `#009DFF` icon | Video section play overlay |
| Section heading label | `#009DFF`, 14px, font-weight 400, uppercase | Small label above main heading (e.g. "About Us", "Our Offers") |
| Section heading | `#1F1F1F`, 46px, font-weight 400, line-height 56px | Main section headings |
| Sticky header | `#000` background when scrolled, padding reduced | Navigation bar on scroll |

## Page structure (section order, from live preview DOM)

1. **Navbar** — transparent absolute header initially. Nav links left: Home, Rooms, About, Blog (dropdown), Pages (dropdown), Contact. Centered logo image. Right: social icons (Facebook, Twitter, Instagram) + "Book A Room" blue button. Sticky on scroll with black background.
2. **Hero slider** — full-viewport owl-carousel with 4 slides (2 unique). Background images (banner.png, banner2.png). Centered white text: "Montana Resort" / "Life is Beautiful" + subtitle "Unlock to enjoy the view of Martine".
3. **About section** — white background, 2-column layout. Left: label "About Us", heading "A Luxuries Hotel with Nature", paragraph, "Learn More" line-button. Right: two overlapping images.
4. **Offers section** — white background, centered label "Our Offers", heading "Ongoing Offers". 3-column card grid, each card: image, heading "Up to 35% savings on Club rooms and Suites", bullet list (Luxaries condition, 3 Adults & 2 Children size, Sea view side), "book now" outlined button.
5. **Video section** — background image with dark overlay, centered content: label "Montana Sea View", heading "Relax and Enjoy your Vacation", circular play button (links to YouTube video).
6. **Dining section** — white background, reversed 2-column layout (images left, text right). Label "Delicious Food", heading "We Serve Fresh and Delicious Food", paragraph, "Learn More" line-button.
7. **Featured Rooms** — white background, centered label "Featured Rooms", heading "Choose a Better Room". 4 room cards in a row, each: full-width image with gradient overlay, price label "From $250/night", room name (Superior Room, Deluxe Room, Signature Room, Couple Room), "book now" line-button.
8. **Reservation query bar** — white background, bordered box (1px solid #BABABA). Left: "For Reservation 0r Query?" text. Right: phone number button (blue pill, "+10 576 377 4789").
9. **Instagram feed** — 5 equal-width columns of images with dark overlay on hover and Instagram icon.
10. **Footer** — black background. Top area with 4 columns: Address (200, Green road, Mongla, New Yor City USA + "Get Direction" line-button), Reservation (+10 367 267 2678, reservation@montana.com), Navigation (Home, Rooms, About, News links), Newsletter (email input + "Sign Up" button + "Subscribe newsletter to get updates" text). Bottom: copyright bar with divider, copyright text + social icons (Facebook, Twitter, Instagram).

## Gherkin requirements

### Feature: Highland Hotel Template

```gherkin
Feature: Highland — Hotel/Resort Website Template
  As a user visiting the Highland website
  I want to see a professional luxury hotel website
  So that I can explore rooms, offers, and make a reservation

  Scenario: Navbar displays navigation and booking CTA
    Given I am on the Highland homepage
    Then I see a transparent header with centered logo
    And I see navigation links: Home, Rooms, About, Blog, Pages, Contact
    And I see social icons (Facebook, Twitter, Instagram)
    And I see a "Book A Room" blue button
    And the header becomes sticky with black background on scroll

  Scenario: Hero slider shows resort imagery with text
    Given I am on the Highland homepage
    Then I see a full-viewport image slider
    And I see centered white text "Montana Resort" or "Life is Beautiful"
    And I see subtitle "Unlock to enjoy the view of Martine"
    And slides rotate automatically

  Scenario: About section describes the hotel
    Given I scroll to the about section
    Then I see label "About Us" in blue
    And I see heading "A Luxuries Hotel with Nature"
    And I see a descriptive paragraph
    And I see a "Learn More" underline link
    And I see two overlapping images on the right

  Scenario: Offers section displays 3 deal cards
    Given I scroll to the offers section
    Then I see label "Our Offers" and heading "Ongoing Offers"
    And I see 3 offer cards in a row
    And each card has an image, heading, bullet list, and "book now" button
    And the bullets show: Luxaries condition, 3 Adults & 2 Children size, Sea view side

  Scenario: Video section shows play overlay
    Given I scroll to the video section
    Then I see a background image with dark overlay
    And I see label "Montana Sea View"
    And I see heading "Relax and Enjoy your Vacation"
    And I see a circular white play button

  Scenario: Dining section describes restaurant
    Given I scroll to the dining section
    Then I see label "Delicious Food"
    And I see heading "We Serve Fresh and Delicious Food"
    And I see a descriptive paragraph
    And I see a "Learn More" underline link
    And images appear on the left side (reversed layout)

  Scenario: Featured Rooms shows 4 room options
    Given I scroll to the rooms section
    Then I see label "Featured Rooms" and heading "Choose a Better Room"
    And I see 4 room cards: Superior Room, Deluxe Room, Signature Room, Couple Room
    And each card shows price "From $250/night"
    And each card has a "book now" line-button
    And each card has a gradient overlay on the image

  Scenario: Reservation query bar displays phone contact
    Given I scroll to the reservation bar
    Then I see a bordered box with "For Reservation 0r Query?"
    And I see a blue pill-shaped phone button "+10 576 377 4789"

  Scenario: Instagram feed shows 5 images
    Given I scroll to the Instagram section
    Then I see 5 equal-width images in a row
    And hovering shows a dark overlay with Instagram icon

  Scenario: Footer displays contact info and newsletter
    Given I scroll to the footer
    Then I see a black footer with 4 columns
    And I see address: "200, Green road, Mongla, New Yor City USA"
    And I see reservation contact: "+10 367 267 2678"
    And I see navigation links: Home, Rooms, About, News
    And I see a newsletter form with email input and "Sign Up" button
    And I see a copyright bar with social icons
    And I see a "Component Dock" link in the footer

  Scenario: All sections maintain consistent spacing
    Given I scroll through the entire page
    Then each section has consistent vertical padding
    And headings use Raleway font consistently
    And the brand color #009DFF appears in labels, buttons, and accents

  Scenario: Page is responsive on mobile
    Given I view the page on a 375px viewport
    Then the navbar collapses to a hamburger menu
    Then columns stack vertically
    And the hero text remains readable
    And room cards stack vertically
```

## Verification checklist

- [ ] All 10 sections present in correct order
- [ ] Brand color #009DFF used consistently (labels, buttons, accents, hover states)
- [ ] Raleway font family applied globally
- [ ] Navbar is transparent initially, sticky black on scroll
- [ ] Hero slider with 4 slides, centered white text
- [ ] About section has 2-column layout with overlapping images
- [ ] Offers section has 3 cards with images, bullets, and "book now" buttons
- [ ] Video section has dark overlay and circular play button
- [ ] Dining section has reversed layout (images left, text right)
- [ ] Featured Rooms has 4 room cards with gradient overlays
- [ ] Reservation bar has bordered box with phone pill button
- [ ] Instagram feed shows 5 images with hover overlay
- [ ] Footer has 4 columns + newsletter + copyright
- [ ] Responsive layout works on mobile (375px)
- [ ] No ColorLib references in app code
- [ ] Footer links to https://www.componentdock.com/
- [ ] public/CNAME contains highland.free.componentdock.com
- [ ] package.json homepage set to https://highland.free.componentdock.com
