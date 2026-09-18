# Spotlight — Business Directory Template

> Recreation of ColorLib Listed2 (https://colorlib.com/wp/template/listed2/)
> Preview: https://preview.colorlib.com/theme/listed2/

## Design Tokens (extracted from preview CSS)

- **Brand color:** `#7971ea` (purple)
- **Brand hover:** `#6a62d6`
- **Body text:** `#4d4d4d`
- **Headings:** `#000000`
- **Background:** `#ffffff` (white)
- **Light sections:** `#f4f5f9`
- **Footer background:** `#333333`
- **Footer text:** `#737373`
- **Border:** `#edf0f5`
- **Font family:** Quicksand (weights 300-700)
- **Button:** rounded, primary bg, white text
- **Cards:** white bg, image top, overlay content

## Sections (in order)

### 1. Navbar

- Logo text "Spotlight"
- Nav links: Home, Listings, About (with dropdown), Blog, Contact
- Mobile hamburger menu toggle
- White background, sticky top

### 2. Hero

- Full-width background image with dark overlay
- Heading: "Find Nearby" + typed words animation ("Appartments", "Restaurants", "Hotels", "Events")
- Subtext: "Explore top-rated attractions, activities and more!"
- Search form: text input (What), location input (Location), category dropdown (All Categories, Apartment, Restaurant, Eat & Drink, Events, Fitness, Others), Search button
- Brand color `#7971ea` on button and accents

### 3. Most Visited Places

- Section heading: "Most Visited Places" with primary color underline
- 3-column grid of listing cards
- Each card: image, bookmark heart icon, category badge (Stores/Restaurants/Events), title, address
- Cards have image overlay with content at bottom

### 4. Popular Categories

- Section heading: "Popular Categories"
- 6-column grid (2 cols on mobile, 3 on md, 6 on lg)
- Each: icon, category name, count number
- Categories: Apartments (3,921), Events (398), Fitness (1,229), Department Store (32,891), Restaurants (29,221), Other (219)
- Light border, rounded, hover effect

### 5. Why Us

- 2-column layout: left image, right text
- Heading: "Why Us" (primary color)
- Two paragraphs of text
- Checklist with green checkmarks (3 items)
- Lucide icons for checks

### 6. Testimonials

- Light background section
- Heading: "Testimonials"
- Carousel/slider with testimonials
- Each: person photo, name, quoted text
- 4 testimonials: John Smith, Christine Aguilar, Robert Spears, Bruce Rogers

### 7. Blog

- Section heading: "Our Blog" with subtitle
- 2-column layout of blog cards
- Each: image, title, meta (author, date, category), excerpt

### 8. FAQ

- Section heading: "Frequently Ask Question"
- 4 accordion items with collapse toggle:
  1. "How to list my item?"
  2. "Is this available in my country?"
  3. "How the system works?"
  4. "Is it free?"

### 9. CTA Banner

- Full-width, brand color background (`#7971ea`)
- Heading: "Let's get started. Create your account"
- Subtext
- "Sign Up" button (white outline)

### 10. Footer

- Dark background (`#333333`)
- 4-column layout: Quick Links, Products, Features, Follow Us (social icons)
- Newsletter subscription form (email input + Send button)
- Copyright line with Component Dock link (NOT ColorLib)

## Scenarios

### Navbar

- GIVEN the page loads, THEN the navbar displays with logo and nav links
- GIVEN the viewport is mobile, THEN the hamburger menu icon is visible

### Hero

- GIVEN the page loads, THEN the hero shows the search form with all fields
- GIVEN the user types in the search input, THEN the input value updates

### Most Visited Places

- GIVEN the page loads, THEN 3 listing cards are displayed
- GIVEN a listing card, THEN it shows an image, category, title, and address

### Popular Categories

- GIVEN the page loads, THEN 6 category cards are displayed
- GIVEN a category card, THEN it shows an icon, name, and count

### Why Us

- GIVEN the page loads, THEN the why-us section shows an image and text with checklist

### Testimonials

- GIVEN the page loads, THEN testimonials are displayed
- GIVEN the user navigates testimonials, THEN the next testimonial shows

### Blog

- GIVEN the page loads, THEN 2 blog cards are displayed

### FAQ

- GIVEN the page loads, THEN 4 FAQ items are shown in collapsed state
- GIVEN the user clicks an FAQ item, THEN the answer expands
- GIVEN an FAQ item is expanded, THEN clicking it again collapses it

### CTA

- GIVEN the page loads, THEN the CTA banner shows with signup button

### Footer

- GIVEN the page loads, THEN the footer shows 4 columns and copyright
- GIVEN the footer, THEN it links to componentdock.com
