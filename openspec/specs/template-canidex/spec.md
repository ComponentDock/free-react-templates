# Template: Canidex (Restaurant Landing)

## Purpose

Canidex is a single-page restaurant landing page in the free-react-templates
monorepo. It is an original React recreation of the ColorLib "Dingo" free
template (source: https://colorlib.com/wp/template/dingo/), built under a
DIFFERENT name (**Canidex**), with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

The original is a Bootstrap 4 restaurant template with serif typography
(Cardo headings, Lora body), warm orange brand (#ff6426), cream/beige
banner background, tabbed food menu, reservation form, testimonial carousel,
and a light-warm footer. The homepage is a single long-scroll page with
10 sections: Navbar, Hero, Exclusive Dishes, About, Video CTA, Tabbed Menu,
Reservation Form, Testimonials, Blog Posts, Footer.

**Preview analyzed:** https://preview.colorlib.com/theme/dingo/
(DOM fetched via curl, CSS style.css extracted; full HTML + stylesheet
parsed for section structure and design tokens.)

## Design tokens

- **Brand primary:** `#ff6426` (warm orange) — buttons, link hovers, section
  title underline bars, play icons, form accents.
- **Brand hover/dark:** `#e04000` — darker orange for button hover states.
- **Page background:** `#ffffff` (white).
- **Gray sections:** `#f6f5f1` — food menu and testimonials background
  (`.gray_bg`).
- **Banner background:** `#f0eed4` (cream/beige) on mobile; desktop uses
  `banner_bg.png` (ornamental illustration on right side).
- **Reservation overlay:** dark photo background with overlay
  (`booking_tabel_bg.png`), text in white `#fff`.
- **Footer background:** `#f9f8f3` (warm off-white).
- **Heading font:** `"Cardo", serif` — all h1–h6.
- **Body font:** `"Lora", serif` — paragraphs, nav links.
- **Headings color:** `#2c3033` (dark charcoal).
- **Body text color:** `#555555` (medium gray).
- **Buttons:**
  - `.btn_1` (nav "book a table"): pill `border-radius: 50px`, white bg,
    orange text `#ff6426`, hover fills orange.
  - `.btn_2` (hero "Reservation"): dark text `#1d272f`, underline accent
    `#ff6426`, circular orange after pseudo-element.
  - `.btn_3` (read-more links): dark text, circular orange underline accent.
  - `.btn_4` (reservation submit): orange bg `#ff6426`, white text,
    `border-radius: 4px`, hover darker `#e04000`.
- **Section title underline:** `::after` pseudo-element, 90×10px bar,
  `background-color: #ff6426`, positioned below h2.
- **Border radius on cards:** none (square cards with image overflow).
- **Testimonial carousel:** owl-carousel, client image left + quote right.

## Sections (1:1 order, matched from live DOM)

1. **Navbar** — sticky, white bg, logo left, nav links center-right
   (Home, About, Menu, Chefs, Blog dropdown, Contact), "book a table"
   pill button far right. Mobile: hamburger toggler.
2. **Hero / Banner** — left-aligned text over cream `#f0eed4` bg (desktop:
   decorative illustration on right). Tagline "Expensive but the best"
   (small orange text), H1 "Deliciousness jumping into the mouth", blurb
   paragraph, "Reservation →" link (btn_2) + "▶ Watch our story" video
   popup link.
3. **Exclusive Dishes** — "Popular Dishes" / "Our Exclusive Items" section
   title with orange underline. 3-column grid of food item cards (image +
   title + description + "Read More →" btn_3). White background.
4. **About** — "Our History" / "Where The Food's As Good As The Root Beer."
   Split layout: left image, right text block with h5 subtitle, h2 title,
   h4 subheading, paragraph, "Read More →" btn_3. White background.
5. **Video CTA** — full-width dark section (`intro_video_bg`), "Expect The
   Best" heading, centered circular play button (links to YouTube). Dark
   background (inline style or bg image).
6. **Food Menu** — gray `#f6f5f1` bg. "Popular Menu" / "Delicious Food
   Menu" section title. Tab navigation (Special, Breakfast, Lunch, Dinner,
   Snacks) with play-icon accents. Each tab: 2-column grid of food items
   (thumbnail + name + description + price). 6 items per tab.
7. **Reservation Form** — dark photo background with overlay. "Book A Table"
   heading in white. 2-column form grid: Name, Email, Persons (dropdown),
   Phone, Date (datepicker), Time (dropdown), Note (textarea). Orange
   "Book A Table" submit button (btn_4).
8. **Testimonials** — gray `#f6f5f1` bg. "Testimonials" / "Customers
   Feedback" section title. Carousel of client reviews (client avatar left
   + quote text + name/title right). 3 slides.
9. **Blog** — "Recent News" / "Latest From Blog" section title. 3-column
   grid of blog post cards (image + date/category tags + title link +
   "Read More →" btn_3). White background.
10. **Footer** — warm off-white `#f9f8f3`. 4-column grid: About Us (blurb),
    Important Links (list), Contact Us (address/phone/email), Newsletter
    (email input + send button). Copyright bar: attribution text + social
    icons (Facebook, Twitter, Dribbble, Behance). Footer MUST link
    `https://www.componentdock.com/`.

## Gherkin requirements

Feature: Canidex Restaurant Landing Page
  As a visitor to a restaurant website
  I want to see the menu, book a table, and read about the restaurant
  So that I can decide to visit and make a reservation

  Background:
    Given the user opens the Canidex homepage

  # --- Navbar ---
  Scenario: Navbar displays all navigation links
    Then the navbar contains links: Home, About, Menu, Chefs, Blog, Contact
    And the navbar contains a "book a table" button

  Scenario: Navbar is sticky on scroll
    When the user scrolls down past the hero
    Then the navbar remains fixed at the top of the viewport

  # --- Hero ---
  Scenario: Hero displays headline and CTAs
    Then the hero shows the tagline "Expensive but the best"
    And the hero shows heading "Deliciousness jumping into the mouth"
    And the hero shows a "Reservation" link
    And the hero shows a "Watch our story" video link

  # --- Exclusive Dishes ---
  Scenario: Exclusive Dishes section renders food items
    Then the exclusive dishes section shows heading "Our Exclusive Items"
    And there are 3 food item cards visible
    And each card has an image, title, description, and "Read More" link

  # --- About ---
  Scenario: About section shows restaurant history
    Then the about section shows heading "Where The Food's As Good As The Root Beer."
    And the about section shows an image alongside the text
    And the about section has a "Read More" link

  # --- Video CTA ---
  Scenario: Video CTA section shows play button
    Then the video section shows heading "Expect The Best"
    And there is a play button linking to a video

  # --- Food Menu ---
  Scenario: Food menu has tabbed navigation
    Then the food menu section shows heading "Delicious Food Menu"
    And there are 5 tabs: Special, Breakfast, Lunch, Dinner, Snacks
    And the Special tab is active by default

  Scenario: Food menu displays items with prices
    When the user views the Special tab
    Then there are 6 food items visible
    And each item shows a name, description, and price

  Scenario: Food menu tabs switch content
    When the user clicks the "Breakfast" tab
    Then the Breakfast tab content is displayed
    And the Special tab content is hidden

  # --- Reservation Form ---
  Scenario: Reservation form displays all fields
    Then the reservation section shows heading "Book A Table"
    And the form has fields: Name, Email, Persons, Phone, Date, Time, Note
    And the form has a "Book A Table" submit button

  Scenario: Reservation form validates required fields
    When the user submits the reservation form without filling fields
    Then the form shows validation errors for required fields

  # --- Testimonials ---
  Scenario: Testimonials carousel shows reviews
    Then the testimonials section shows heading "Customers Feedback"
    And there are 3 testimonial slides
    And each slide shows a client image, quote, and name

  # --- Blog ---
  Scenario: Blog section shows recent posts
    Then the blog section shows heading "Latest From Blog"
    And there are 3 blog post cards
    And each card has an image, date, category, title, and "Read More" link

  # --- Footer ---
  Scenario: Footer displays columns and copyright
    Then the footer shows 4 columns: About Us, Important Links, Contact, Newsletter
    And the footer shows a copyright line
    And the footer links to https://www.componentdock.com/
    And the footer shows social media icon links

  # --- Responsive ---
  Scenario: Mobile view collapses navbar
    When the viewport width is less than 992px
    Then the navbar collapses to a hamburger menu
    And the "book a table" button is hidden on mobile

  Scenario: Mobile view stacks grid columns
    When the viewport width is less than 576px
    Then food item cards stack vertically
    And blog post cards stack vertically

## Verification checklist

- [ ] All 10 sections render in correct order
- [ ] Navbar is sticky, contains all links + "book a table" pill
- [ ] Hero shows tagline, heading, Reservation link, video link
- [ ] Exclusive Dishes shows 3 food item cards
- [ ] About section shows image + text + Read More
- [ ] Video CTA section has play button
- [ ] Food menu has 5 tabs, Special active by default, items with prices
- [ ] Reservation form has all 7 fields + submit button
- [ ] Testimonials carousel shows 3 slides
- [ ] Blog section shows 3 post cards
- [ ] Footer has 4 columns, copyright, Component Dock link, social icons
- [ ] Brand color #ff6426 used throughout (buttons, underlines, accents)
- [ ] Cardo serif font for headings, Lora serif for body text
- [ ] Gray section backgrounds (#f6f5f1) on menu + testimonials
- [ ] Responsive: mobile hamburger, stacked grids
- [ ] No ColorLib references in app code (provenance only in spec/PR)
- [ ] Footer links to https://www.componentdock.com/
- [ ] Tests: 100% line/function/branch/statement coverage
- [ ] Typecheck + lint pass
- [ ] Build succeeds
