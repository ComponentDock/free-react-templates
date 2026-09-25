# Spec: Penman

> Recreation of ColorLib "Author" (https://colorlib.com/wp/template/author/)
> Preview: https://preview.colorlib.com/theme/author/

## Purpose

Penman is a personal author/book landing template with a clean, literary aesthetic. It features a full-height hero with book illustration, partner logos, about section, animated counters, chapter browser, testimonial carousel, book gallery, author bio, contact form with map, and a four-column footer.

## Requirements

### Requirement: Navbar

The template SHALL render a sticky dark navbar with "Penman." brand (green dot accent), and navigation links: Home, About, Chapter, Reviews, My Books, Author, Contact.

#### Scenario: Brand and links visible

- **WHEN** the page loads
- **THEN** the brand "Penman" is displayed
- **THEN** all 7 navigation links are visible

#### Scenario: Mobile menu toggle

- **WHEN** the user clicks the hamburger menu button on mobile
- **THEN** the navigation links become visible
- **WHEN** the user clicks a navigation link
- **THEN** the mobile menu closes

### Requirement: Hero Section

The template SHALL render a full-height hero section with a book headline, description, and CTA button.

#### Scenario: Hero content

- **WHEN** the page loads
- **THEN** the subheading "Best Seller Book Of The Week" is displayed
- **THEN** the headline "Clue Of The Wooden Cottage" is displayed
- **THEN** a "Buy Now For $22.78" CTA button is present
- **THEN** a book illustration image is displayed

### Requirement: Partners Section

The template SHALL render 5 partner logo placeholders in a row.

#### Scenario: Partner logos

- **WHEN** the page loads
- **THEN** 5 partner logo images are displayed

### Requirement: About Section

The template SHALL render a split about section with image and book description.

#### Scenario: About content

- **WHEN** the page loads
- **THEN** the heading "About The Book" is displayed
- **THEN** subsections "Award achievements", "Read On Any Devices", "Very High Resolution" are displayed

### Requirement: Counter Section

The template SHALL render animated stat counters for book metrics.

#### Scenario: Counter labels

- **WHEN** the page loads
- **THEN** the labels "Copies Sold", "Copies Released", "Cup Of Coffee", "Happy Readers" are displayed

### Requirement: Chapter Section

The template SHALL render a chapter browser with sidebar navigation and content panels.

#### Scenario: Chapter navigation

- **WHEN** the page loads
- **THEN** the heading "What's Inside The Book" is displayed
- **THEN** 8 chapter navigation links are displayed
- **THEN** the default chapter "Title Page" content is shown

#### Scenario: Chapter switching

- **WHEN** the user clicks a different chapter link
- **THEN** the content panel updates to show the selected chapter

### Requirement: Testimonials Section

The template SHALL render customer testimonials on a dark background.

#### Scenario: Testimonials

- **WHEN** the page loads
- **THEN** the heading "Kinds Words From Customers" is displayed
- **THEN** 3 testimonial cards with quote, name, and position are displayed

### Requirement: My Books Section

The template SHALL render a grid of book cover cards.

#### Scenario: Book grid

- **WHEN** the page loads
- **THEN** the heading "My Other Books" is displayed
- **THEN** 8 book cover cards are displayed with title and genre

### Requirement: Author Bio Section

The template SHALL render an author bio with info list and CTA.

#### Scenario: Author info

- **WHEN** the page loads
- **THEN** the author name "Franklin Henderson" is displayed
- **THEN** the info list with Name, Date of birth, Address, Zip code, Email, Phone is displayed
- **THEN** "View All Books" CTA is displayed

### Requirement: Contact Section

The template SHALL render a contact form with info cards and map placeholder.

#### Scenario: Contact form

- **WHEN** the page loads
- **THEN** the heading "Contact Me" is displayed
- **THEN** 4 info cards (Address, Phone, Email, Website) are displayed
- **THEN** a contact form with Name, Email, Subject, Message fields and Send button is displayed

### Requirement: Footer

The template SHALL render a four-column footer with Component Dock branding.

#### Scenario: Footer columns

- **WHEN** the page loads
- **THEN** columns "About", "Links", "Services", "Have a Questions?" are displayed
- **THEN** social links (Twitter, Facebook, Instagram) are displayed

#### Scenario: Component Dock link

- **WHEN** the page loads
- **THEN** a link to "https://www.componentdock.com/" branded as "Component Dock" is present

## Design Tokens

- **Primary brand color:** `#17b978` (green/teal)
- **Button color:** `#007bff` (Bootstrap blue)
- **Font pairing:** Raleway (headings) + Open Sans (body)
- **Section backgrounds:** White (`#fff`), light gray (`#f8f9fa`), dark overlay on images
- **Testimonial section:** Dark background with white text overlay
