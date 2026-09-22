# Lounge — Hotel Landing Template

Recreation of ColorLib "Cozy" (https://colorlib.com/wp/template/cozy/)

## Overview

A warm, boutique hotel landing page with hero carousel, reservation form, services tabs, room showcase, parallax conference section, restaurant menu, testimonials, blog, events, and Instagram gallery.

## Design Tokens

- **Brand color:** #ff6138 (warm orange-red)
- **Footer background:** #2c2727 (warm dark brown)
- **Navbar background:** transparent (over hero), dark on scroll
- **Overlay:** #404044 at 10% opacity
- **Body font:** Muli (Google Fonts), sans-serif
- **Heading font:** Playfair Display (Google Fonts), serif
- **Button style:** rounded (border-radius: 30px), orange primary
- **Section backgrounds:** alternating white / #f8f9fa light gray
- **Testimony cards:** white bg, subtle shadow, border

## Sections (in order)

1. **Navbar** — transparent over hero, dark on scroll; links: Home, About, Rooms (dropdown), Dining & Bar, Amenities, Booking, Blog, Contact; brand name "Lounge"
2. **Hero Carousel** — full-height background images with overlay, heading text + "Watch Video" button (pill-shaped), 3 slides
3. **Reservation Form** — floating card overlapping hero bottom-right, fields: Check-in, Check-out, Guests, Room Type select
4. **Services Tabs** — vertical pill navigation (left) + tab content (right): Master Bedrooms, Breakfast Buffet, Fitness Center, 24hr Reception, Sea View Balcony, Pool & Spa, Free WiFi, Resto Bar
5. **Room Showcase** — "Our Rooms" heading, horizontal scroll of room cards (image + name + description + price)
6. **Parallax Conference** — full-width background image with dark overlay, centered heading "Conference Centre" + "View more details" button
7. **Restaurant Menu** — "Our Menu" heading, horizontal pill tabs (Main/Dessert/Drinks), 2-column grid of menu items with image + name + ingredients + price
8. **Testimonials** — "Guests Says" heading, carousel of review cards with avatar, stars, quote, name, origin
9. **Blog** — "Recent Blog" heading, 3 blog cards with image + title + date + author + comment count
10. **Events** — "Our Events" heading, 2-column layout: left large image, right list of events with date badge + title + description + buttons
11. **Instagram Gallery** — heading with Instagram icon, 5-column image grid with hover overlay
12. **Footer** — 4-column: brand + social, Opening Hours, Contact Info, Newsletter; copyright + "More templates at Component Dock" link

## Scenarios

### Navbar

- GIVEN the page loads THEN the navbar is visible with brand "Lounge"
- GIVEN the user scrolls down THEN the navbar background becomes dark
- GIVEN the user clicks a nav link THEN the page scrolls to the section
- GIVEN the user clicks the Rooms dropdown THEN dropdown items appear
- GIVEN the user clicks the mobile menu button THEN the mobile nav opens
- GIVEN the mobile nav is open AND the user clicks a link THEN the nav closes

### Hero Carousel

- GIVEN the page loads THEN the first slide is visible with heading text
- GIVEN the user waits THEN slides auto-advance
- GIVEN the user clicks "Watch Video" THEN a video modal/overlay would open

### Reservation Form

- GIVEN the page loads THEN the reservation form is visible
- GIVEN the user fills check-in AND check-out dates THEN the form is valid
- GIVEN the user selects a room type THEN the selection is reflected

### Services

- GIVEN the page loads THEN "Master Bedrooms" tab is active
- GIVEN the user clicks a service tab THEN the corresponding content shows
- GIVEN a tab is active THEN its icon and description are visible

### Room Showcase

- GIVEN the page loads THEN room cards are visible with images and prices

### Parallax

- GIVEN the page loads THEN the conference section shows with background image

### Restaurant Menu

- GIVEN the page loads THEN "Main" tab is active
- GIVEN the user clicks "Dessert" tab THEN dessert items show
- GIVEN the user clicks "Drinks" tab THEN drink items show
- GIVEN a menu item is visible THEN it shows image, name, ingredients, price

### Testimonials

- GIVEN the page loads THEN testimonial cards are visible
- GIVEN a testimonial card is visible THEN it shows avatar, stars, quote, name, origin

### Blog

- GIVEN the page loads THEN 3 blog cards are visible
- GIVEN a blog card is visible THEN it shows image, title, date, author, comment count

### Events

- GIVEN the page loads THEN event items are visible with date badges
- GIVEN an event is visible THEN it shows title, description, and action buttons

### Instagram

- GIVEN the page loads THEN 5 Instagram images are visible in a grid
- GIVEN the user hovers an image THEN the Instagram icon overlay appears

### Footer

- GIVEN the page loads THEN the footer shows with 4 columns
- GIVEN the footer renders THEN it shows Opening Hours, Contact Info, Newsletter
- GIVEN the footer renders THEN it shows "More templates at Component Dock" link
