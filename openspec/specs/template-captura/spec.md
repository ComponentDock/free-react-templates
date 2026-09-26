## Purpose

Captura is a photography portfolio template recreating the ColorLib "Halen" design. It features a dark hero with blue accent, photography skills showcase, wildlife split section, 3x3 photo gallery with hover overlays, testimonials, team section, contact info with map, Instagram feed, and footer with Component Dock branding.

## Requirements

### Requirement: Navbar with brand and navigation

Users SHALL see a sticky header with the "Captura" brand, navigation links (Home, About, Albums, Blog, Contact), and social media icons.

#### Scenario: Desktop navbar renders all elements

- **WHEN** the page loads
- **THEN** the navbar displays the Captura logo, all five navigation links, and Facebook/Twitter/Instagram social icons

### Requirement: Hero section with headline and CTA

Users SHALL see a full-width dark hero section with centered headline text and an "Explore Work" call-to-action button.

#### Scenario: Hero displays headline and CTA

- **WHEN** the page loads
- **THEN** the hero section shows "Hi, This is Captura, a professional Photographer" and "I Captured Moments" with an "Explore Work" button

### Requirement: Photography skills section

Users SHALL see a centered section with title "World class photography skills" and a descriptive paragraph.

#### Scenario: Skills section content

- **WHEN** the user scrolls past the hero
- **THEN** the photography skills section displays the title and description text

### Requirement: Wildlife photography split section

Users SHALL see a split layout with a wildlife image on one side and title, description, and "Explore Work" button on the other.

#### Scenario: Wildlife section split layout

- **WHEN** the user scrolls to the wildlife section
- **THEN** an image and text block are displayed side by side with a CTA button

### Requirement: Photo gallery grid

Users SHALL see a 3x3 grid of photos where each photo shows a hover overlay with album title and category.

#### Scenario: Gallery renders 9 photos

- **WHEN** the gallery section is visible
- **THEN** 9 photos are displayed in a grid with titles like "Baby album", "Portrait album", and "Nature album"

### Requirement: Testimonials section

Users SHALL see a centered testimonial with a quote, author name, and avatar image.

#### Scenario: Testimonial displays author and quote

- **WHEN** the user scrolls to testimonials
- **THEN** "Our Customers Say" heading, quote text, and "Robert Thomson" author name with avatar are visible

### Requirement: Team section with member cards

Users SHALL see three team member cards, each with a photo, name, role "Photographer", and social media links.

#### Scenario: Three team members displayed

- **WHEN** the team section loads
- **THEN** Milani Mou, Jasmine Pinky, and Piya Zosoldos are shown with their photos and social links

### Requirement: Contact information section

Users SHALL see a contact section with address, phone, email, social links, and a map placeholder.

#### Scenario: Contact details visible

- **WHEN** the contact section loads
- **THEN** the address "200/D, Green lane, Kings street, New York", phone "+10 787 367 2567", and email "contact08@captura.com" are displayed

### Requirement: Instagram feed row

Users SHALL see a horizontal row of 6 photos with hover overlays showing Instagram icons.

#### Scenario: Six Instagram photos rendered

- **WHEN** the Instagram feed section is visible
- **THEN** 6 photos are displayed in a row with Instagram overlay icons

### Requirement: Footer with Component Dock branding

Users SHALL see a dark footer with copyright text, social icons, and a link to Component Dock.

#### Scenario: Footer renders Component Dock link

- **WHEN** the footer is visible
- **THEN** the text "Component Dock" links to https://www.componentdock.com/ with target="_blank"
