# Template: Autolane (Car Rental)

## Purpose

Autolane is a single-page car-rental landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Autoroad" free template (source:
https://colorlib.com/wp/template/autoroad/, preview:
https://preview.colorlib.com/theme/autoroad/), built under a
**DIFFERENT name** (**Autolane**), with the monorepo stack: Vite + React 19
+ Tailwind CSS 4 + TypeScript.

The original is a Bootstrap 4 + jQuery car-rental landing page with a
full-width hero background image, floating booking form widget, car search
filter bar, 4-column services grid, 8-card car listings grid, parallax
"how it works" section, testimonial carousel, split about-us section, 3-column
blog cards, and a dark four-column footer. The page uses Poppins font, orange
(#fc983c) brand accent, and dark section overlays.

**WHAT MAKES AUTOLANE DISTINCT (signature behaviors):**

1. **Full-width hero with floating booking form card.** A 850px hero with
   a background image (desert/off-road landscape), a 40%-opacity black
   overlay, left-aligned white headline ("Now It's easy for you rent a car")
   with a circular orange play-button CTA ("Easy steps for renting a car"),
   and a right-column white floating card ("Make your trip") containing a
   multi-field booking form (pick-up location, drop-off location, pick-up
   date, drop-off date, pick-up time, "Search Vehicle" button). The card
   has border-radius 5px and a pronounced box-shadow
   (0px 10px 31px -21px rgba(0,0,0,0.33)).

2. **Secondary search/filter bar.** Below the hero, a full-width
   4-column select-bar (Select Model, Select Brand, Year Model, Price Limit)
   with custom-styled select dropdowns (arrow icons, no native chrome)
   and a full-width orange "Search" submit button. Each select has a
   50px height, border-radius 0, border 1px #ebebeb.

3. **4-column services grid.** "Our Services" section with 4 cards:
   24/7 Car Support, Lots of Location, Reservation, Rental Cars. Each card
   has a flaticon icon (orange tint), heading, and short description. Cards
   use media layout (icon + heading row, then description).

4. **8-card car listings grid (4×2).** "Choose Your Car" section with 8
   car cards in a full-width (container-fluid) 4-column grid. Each card
   has a background-image car photo (200px height), an overlaid white
   price-tag badge ("$25 From /Day" with orange rate text, box-shadow
   offset), a text block below with car name (h2), brand label (uppercase,
   letter-spacing 2px, muted), and two side-by-side buttons ("Book now"
   + "Details", black outline style with orange hover).

5. **Parallax "How it works" section.** Background image with dark overlay,
   white text heading ("Work flow" / "How it works"), 4 centered service
   steps (Pick Destination, Select Term, Choose A Car, Enjoy The Ride) with
   white icons. This is a visual-workflow explainer, not a pricing table.

6. **Testimonial carousel.** "Happy Clients" section with owl-carousel-style
   sliding testimonials. Each item: circular person image, quote paragraph,
   name, and position. 5 testimonial items.

7. **Split About Us section.** 50/50 split: left half is a background-image
   (about.jpg, full height), right half is text with "Choose A Perfect Car"
   heading, two paragraphs, and an orange "Search Vehicle" CTA button.

8. **3-column blog cards.** "Recent Blog" section with 3 blog entry cards.
   Each: background-image thumbnail, meta row (date, author, comment count
   with chat icon), heading link, and short excerpt.

9. **Dark four-column footer.** Brownish-dark (#3c312e) footer with 4 columns:
   About (brand description + social icons), Information (links), Customer
   Support (links), Have a Questions? (address, phone, email with map
   marker/phone/envelope icons). Copyright line at bottom.

## Design Tokens

| Token              | Value / Notes                                         |
| ------------------ | ----------------------------------------------------- |
| Brand color        | `#fc983c` (warm orange)                               |
| Brand hover        | `transparent` bg + `#fc983c` text (buttons)           |
| Accent gold        | `#f7b71d` (navbar active/hover state)                 |
| Body text          | `#666666`                                             |
| Headings           | `rgba(0,0,0,0.8)` — font-weight 400                   |
| Black text         | `#000000` (car names, brand labels, footer links)      |
| Background white   | `#ffffff`                                             |
| Footer background  | `#3c312e` (warm dark brown)                           |
| Dark overlay       | `#000000` at 40% opacity (hero), 5% opacity (parallax)|
| Button primary     | bg `#fc983c`, border `#fc983c`, radius `3px`, white text |
| Button black       | bg `#000000`, border `#000000`, radius `3px`, white text |
| Button black outline | bg `transparent`, border `#ebebeb`, text `#000`     |
| Form input border  | `1px solid #ebebeb`, radius `0`, height `50px`        |
| Price badge        | bg `#fff`, shadow `-10px 10px 25px -15px rgba(0,0,0,0.17)` |
| Font family        | `"Poppins", Arial, sans-serif` (loaded via Google Fonts/Cloudflare) |
| Font weights used  | 200 (hero headline), 300 (price), 400 (body/headings), 500, 600 (labels), 800 (navbar brand) |
| Body font size     | `16px`, line-height `1.8`                             |
| Section padding    | `ftco-section` class (approx 80px vertical)           |
| Border-radius      | `3px` (buttons), `5px` (request form card), `0` (form inputs/selects) |

## Gherkin Requirements

### Feature: Autolane — Car Rental Landing Page

  Scenario: Navbar renders with brand and navigation links
    Given the user visits the Autolane page
    Then the navbar displays the brand "Autolane" (bold, uppercase)
    And the navbar contains links: Home, About, Pricing, Our Car, Blog, Contact
    And the navbar is transparent and overlays the hero section
    And on scroll the navbar becomes fixed with a white background

  Scenario: Hero section displays background image with overlay and booking form
    Given the user is on the landing page
    Then a full-width hero background image is displayed
    And a dark overlay at 40% opacity covers the hero image
    And the hero headline reads "Now It's easy for you rent a car"
    And a circular orange play-button CTA is shown with text "Easy steps for renting a car"
    And a white floating booking card titled "Make your trip" appears on the right

  Scenario: Booking form collects trip details
    Given the user sees the booking card
    Then the form has fields: Pick-up location, Drop-off location, Pick-up date, Drop-off date, Pick-up time
    And a "Search Vehicle" orange button submits the form
    And each input has a placeholder and 50px height

  Scenario: Search filter bar presents vehicle selectors
    Given the hero section is visible
    Then a 4-column filter bar appears below the hero
    And the filters are: Select Model, Select Brand, Year Model, Price Limit
    And each filter is a styled select dropdown with arrow icon
    And an orange "Search" button spans the bottom of the filter bar

  Scenario: Services section shows 4 service cards
    Given the user scrolls to the "Our Services" section
    Then 4 service cards are displayed in a row
    And the cards are: "24/7 Car Support", "Lots of Location", "Reservation", "Rental Cars"
    And each card has an icon, heading, and short description

  Scenario: Car listings display 8 vehicles in a grid
    Given the user scrolls to the "Choose Your Car" section
    Then 8 car cards are displayed in a 4-column grid
    And each card shows a car image, a price badge (e.g. "$25 From /Day"), a car name, and a brand label
    And each card has "Book now" and "Details" buttons
    And price rates are displayed in orange text

  Scenario: How it works section displays workflow steps
    Given the user scrolls to the "How it works" section
    Then a parallax background image is displayed with a dark overlay
    And the heading reads "Work flow" / "How it works"
    And 4 workflow steps are shown: "Pick Destination", "Select Term", "Choose A Car", "Enjoy The Ride"
    And each step has a white icon, heading, and short description

  Scenario: Testimonials section shows client reviews
    Given the user scrolls to the "Happy Clients" section
    Then a carousel of testimonials is displayed
    And each testimonial shows a person image, quote, name, and position
    And the carousel navigates with arrow buttons

  Scenario: About Us section displays split layout
    Given the user scrolls to the "About us" section
    Then a 50/50 split layout is shown
    And the left side displays a background image
    And the right side shows "Choose A Perfect Car" heading with descriptive text
    And an orange "Search Vehicle" CTA button is present

  Scenario: Blog section shows 3 recent posts
    Given the user scrolls to the "Recent Blog" section
    Then 3 blog cards are displayed in a row
    And each card shows a thumbnail image, date, author, comment count, title, and excerpt

  Scenario: Footer displays brand info and contact details
    Given the user scrolls to the footer
    Then a dark (#3c312e) footer is displayed with 4 columns
    And column 1: "About Autolane" with description and social icons (Twitter, Facebook, Instagram)
    And column 2: "Information" with links (About, Services, Terms, etc.)
    And column 3: "Customer Support" with links (FAQ, Payment, etc.)
    And column 4: "Have a Questions?" with address, phone, email
    And a copyright line at the bottom links to Component Dock

## Verification Checklist

- [ ] Navbar: transparent on hero, white on scroll, brand "Autolane" visible
- [ ] Hero: background image with 40% dark overlay, headline + play CTA + booking card
- [ ] Booking form: 5 fields + Search Vehicle button, card has 5px radius + shadow
- [ ] Filter bar: 4 styled selects + Search button, orange accents
- [ ] Services: 4 cards with icons, headings, descriptions in a row
- [ ] Car grid: 8 cards (4×2), each with image, price badge, name, brand, Book/Details buttons
- [ ] How it works: parallax bg image, 4 workflow steps with icons
- [ ] Testimonials: carousel with person images, quotes, names, positions
- [ ] About Us: 50/50 split (image left, text right), CTA button
- [ ] Blog: 3 cards with thumbnails, meta, titles, excerpts
- [ ] Footer: dark #3c312e bg, 4 columns (About, Info, Support, Contact), social icons
- [ ] Footer copyright links to Component Dock
- [ ] Color tokens: brand #fc983c, footer #3c312e, body text #666666
- [ ] Font: Poppins loaded and applied
- [ ] Responsive: all sections stack on mobile
- [ ] No ColorLib references in app code (provenance in spec only)
- [ ] Footer links to https://www.componentdock.com/
