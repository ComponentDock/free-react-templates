# Template: Spotlight (Business Directory)

> Recreation of ColorLib Listed2 (https://colorlib.com/wp/template/listed2/)
> Preview: https://preview.colorlib.com/theme/listed2/

## Purpose

Spotlight is a business directory template. It recreates the ColorLib **Listed2** design (https://colorlib.com/wp/template/listed2/, preview: https://preview.colorlib.com/theme/listed2/) as a Vite + React 19 + Tailwind CSS 4 + TypeScript template.

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

## Requirements

### Feature: Navbar

#### Scenario: The navbar displays with logo and nav links

- **Given** the page loads,
- **When** the Navbar is inspected
- **Then** the navbar displays with logo and nav links

#### Scenario: The hamburger menu icon is visible

- **Given** the viewport is mobile,
- **When** the Navbar is inspected
- **Then** the hamburger menu icon is visible

### Feature: Hero

#### Scenario: The hero shows the search form with all fields

- **Given** the page loads,
- **When** the Hero is inspected
- **Then** the hero shows the search form with all fields

#### Scenario: The input value updates

- **Given** the user types in the search input,
- **When** the Hero is inspected
- **Then** the input value updates

### Feature: Most Visited Places

#### Scenario: 3 listing cards are displayed

- **Given** the page loads,
- **When** the Most Visited Places is inspected
- **Then** 3 listing cards are displayed

#### Scenario: It shows an image, category, title, and address

- **Given** a listing card,
- **When** the Most Visited Places is inspected
- **Then** it shows an image, category, title, and address

### Feature: Popular Categories

#### Scenario: 6 category cards are displayed

- **Given** the page loads,
- **When** the Popular Categories is inspected
- **Then** 6 category cards are displayed

#### Scenario: It shows an icon, name, and count

- **Given** a category card,
- **When** the Popular Categories is inspected
- **Then** it shows an icon, name, and count

### Feature: Why Us

#### Scenario: The why-us section shows an image and text with checklist

- **Given** the page loads,
- **When** the Why Us is inspected
- **Then** the why-us section shows an image and text with checklist

### Feature: Testimonials

#### Scenario: Testimonials are displayed

- **Given** the page loads,
- **When** the Testimonials is inspected
- **Then** testimonials are displayed

#### Scenario: The next testimonial shows

- **Given** the user navigates testimonials,
- **When** the Testimonials is inspected
- **Then** the next testimonial shows

### Feature: Blog

#### Scenario: 2 blog cards are displayed

- **Given** the page loads,
- **When** the Blog is inspected
- **Then** 2 blog cards are displayed

### Feature: FAQ

#### Scenario: 4 FAQ items are shown in collapsed state

- **Given** the page loads,
- **When** the FAQ is inspected
- **Then** 4 FAQ items are shown in collapsed state

#### Scenario: The answer expands

- **Given** the user clicks an FAQ item,
- **When** the FAQ is inspected
- **Then** the answer expands

#### Scenario: Clicking it again collapses it

- **Given** an FAQ item is expanded,
- **When** the FAQ is inspected
- **Then** clicking it again collapses it

### Feature: CTA

#### Scenario: The CTA banner shows with signup button

- **Given** the page loads,
- **When** the CTA is inspected
- **Then** the CTA banner shows with signup button

### Feature: Footer

#### Scenario: The footer shows 4 columns and copyright

- **Given** the page loads,
- **When** the Footer is inspected
- **Then** the footer shows 4 columns and copyright

#### Scenario: It links to componentdock.com

- **Given** the footer,
- **When** the Footer is inspected
- **Then** it links to componentdock.com

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/spotlight/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/spotlight/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
