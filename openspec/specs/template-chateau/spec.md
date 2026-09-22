# Template: Chateau (Hotel & Hospitality)

## Purpose

Recreation of ColorLib's **Luxury Hotel** template as a React 19 + Vite + Tailwind CSS 4 + TypeScript single-page site.

- **Source:** [colorlib.com/wp/template/luxury-hotel/](https://colorlib.com/wp/template/luxury-hotel/)
- **Preview:** [preview.colorlib.com/theme/luxuryhotel/](https://preview.colorlib.com/theme/luxuryhotel/) (slug is `luxuryhotel`, no hyphen)
- **Screenshot:** `![preview](https://colorlib.com/wp/wp-content/uploads/sites/2/luxuryhotel-free-template.jpg)`
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript (strict)
- **New name:** `chateau` (apps/chateau, @free-react-templates/chateau)

## Design Tokens (extracted from preview CSS)

| Token              | Value                                              | Usage                                        |
| ------------------ | -------------------------------------------------- | -------------------------------------------- |
| Brand gold         | `#b99365`                                          | Primary buttons, outline button color, dropdown hover, newsletter submit |
| Hover gold         | `#c9ac88`                                          | Button hover/active state                    |
| Loader gold        | `#f4b214`                                          | Loading spinner stroke                       |
| Dark               | `#000`                                             | Headings (h1-h4), section backgrounds        |
| Body text          | `#6c757d`                                          | Body copy                                    |
| White              | `#fff`                                             | Hero text, card bg, overlay text             |
| Light bg           | `#f2f2f2` / `#f7f7f7`                              | Alternating section backgrounds              |
| Border             | `#e6e6e6`                                          | Card borders, dividers                       |
| Heading font       | `"Playfair Display", times, serif`                 | h1–h4 headings                              |
| Body font          | `"Rubik", arial, sans-serif`                       | Body copy, buttons, nav                      |
| Button style       | `border-radius: 0` (sharp rectangular), gold bg `#b99365` for `.btn-primary`, `#b99365` text for `.btn-outline-primary` | Primary CTA                                  |
| Outline button     | `border: 2px solid #b99365`, color `#b99365`       | Blog "Read More" buttons                     |
| Play button        | `border: 2px solid #fff`, `border-radius: 50%` (circle) | Video play overlay                           |
| Dropdown           | `border-radius: 4px`, white bg, box-shadow         | Rooms dropdown menu                          |
| CTA button         | `border: 2px solid #ccc`, padding `10px 20px`      | Navbar "Book Now"                            |

## Requirements

### Requirement: Navbar renders with transparent overlay and Book Now CTA

The navbar shall display the brand name "Chateau" and navigation links: Home, Rooms (with dropdown), Blog, About, Contact. A "Book Now" CTA button with a bordered pill style shall appear at the right. The navbar background shall be transparent over the hero and transition to a semi-transparent dark overlay on mobile.

#### Scenario: Navbar renders all links on desktop

- **WHEN** the user visits Chateau on desktop
- **THEN** the navbar shows links: Home, Rooms, Blog, About, Contact, and a "Book Now" button
- **AND** the navbar background is transparent (overlay on hero)

#### Scenario: Rooms dropdown opens on click

- **WHEN** the user clicks the Rooms link
- **THEN** a dropdown opens with: Presidential Room, Luxury Room, Deluxe Room, Room Videos
- **AND** the dropdown has a white background with 4px border-radius and subtle box-shadow

#### Scenario: Navbar collapses on mobile

- **WHEN** the user resizes to mobile viewport
- **THEN** a hamburger menu toggle appears
- **AND** the navbar background becomes semi-transparent dark

### Requirement: Hero displays full-viewport parallax with welcome heading

The hero section shall show a full-viewport background image with a dark overlay (rgba(0,0,0,0.5)), centered heading "Welcome To Our Luxury Rooms", subtitle "Discover our world's #1 Luxury Room For VIP.", and a gold "Book Now" primary button.

#### Scenario: Hero renders heading and CTA

- **WHEN** the user views the hero section
- **THEN** the heading "Welcome To Our Luxury Rooms" is displayed in Playfair Display
- **AND** the subtitle reads "Discover our world's #1 Luxury Room For VIP."
- **AND** a gold "Book Now" button is centered below the text
- **AND** the hero fills the full viewport height

### Requirement: "Stay and Enjoy" feature section with image

The feature section shall display a left-aligned text block with heading "Stay and Enjoy", sub-heading "Stay with our luxury rooms", descriptive paragraph, and a gold "More About Us" button. The right side shows a large image. The section has a white background.

#### Scenario: Feature section renders text and image

- **WHEN** the user scrolls to the feature section
- **THEN** a "Stay with our luxury rooms" sub-heading and "Stay and Enjoy" heading appear
- **AND** a descriptive paragraph is shown below the heading
- **AND** a gold "More About Us" button is present
- **AND** a large image occupies the right column

### Requirement: Featured Rooms section with asymmetric grid layout

The featured rooms section shall display the heading "Featured Rooms" with sub-heading "Our Luxury Rooms" on a light background. It shall show a large room card on the left (Presidential Room with image, star rating, specs, description, and "Book Now From $20" button) and two smaller stacked room cards on the right (Hotel Room with background image, star rating, and "from $22" pricing).

#### Scenario: Featured rooms render with correct layout

- **WHEN** the user scrolls to the featured rooms section
- **THEN** the heading "Featured Rooms" is displayed centered
- **AND** a large card shows "Presidential Room" with image, star icons, guest count, size specs, description, and a gold CTA
- **AND** two smaller cards show "Hotel Room" with background images, star icons, and pricing overlays

#### Scenario: Room cards show specifications

- **WHEN** the user views the Presidential Room card
- **THEN** it shows "2 Guests" and "22 ft²" with icons
- **AND** the card has a "Featured Room" overlap label with stars

### Requirement: Parallax cover section with video play button

The cover section shall display a parallax background image with a dark overlay, centered heading "Relax and Enjoy your Holiday", a lead paragraph, and a circular play button (border-radius 50%, white border, play icon).

#### Scenario: Cover section renders with play button

- **WHEN** the user scrolls to the cover section
- **THEN** the heading "Relax and Enjoy your Holiday" is displayed centered over a parallax background
- **AND** a circular white-bordered play button is centered below the text
- **AND** the section has a dark overlay on the background image

### Requirement: Blog section with three-column card grid

The blog section shall display the heading "Our Recent Blog" with sub-heading "Our Blog" on a light background. It shall show three blog post cards, each with an image, category label, title, description, and an outline-style "Read More" button.

#### Scenario: Blog cards render with category and CTA

- **WHEN** the user scrolls to the blog section
- **THEN** three blog cards are displayed in a row
- **AND** each card has an image, category label (e.g. "Rooms", "News"), title, and description
- **AND** each card has a gold outline "Read More" button

### Requirement: Footer with three-column layout

The footer shall display three columns: Phone Support (24/7 phone number), Connect With Us (social media icons for Facebook, Twitter, Instagram, Vimeo, YouTube), and a newsletter signup form (email input with arrow submit button). Below is a copyright line with "Made with ❤ by Component Dock" attribution.

#### Scenario: Footer renders all columns

- **WHEN** the user scrolls to the footer
- **THEN** Phone Support shows "+ 1 332 3093 323"
- **AND** social media icons are displayed for Facebook, Twitter, Instagram, Vimeo, YouTube
- **AND** a newsletter form with email input and submit arrow button is shown
- **AND** the copyright line links to Component Dock

#### Scenario: Newsletter form accepts email input

- **WHEN** the user types an email into the newsletter input
- **THEN** the input accepts the value
- **AND** the arrow submit button is clickable

### Requirement: Loading spinner overlay

The page shall show a fullscreen loading spinner on initial load with a circular SVG animation using gold (#f4b214) stroke color on a white background.

#### Scenario: Loading spinner displays on page load

- **WHEN** the page is loading
- **THEN** a fullscreen spinner overlay is visible
- **AND** the spinner has a gold circular stroke animation

## Verification Checklist

- [ ] Navbar: transparent bg, "Chateau" brand, all links, Rooms dropdown, Book Now CTA
- [ ] Hero: full-viewport, dark overlay, heading, subtitle, gold CTA button
- [ ] Feature section: left text + right image layout, "Stay and Enjoy" heading
- [ ] Featured Rooms: asymmetric grid, Presidential Room card, two Hotel Room cards
- [ ] Cover section: parallax bg, dark overlay, heading, circular play button
- [ ] Blog: 3-column cards, category labels, outline "Read More" buttons
- [ ] Footer: 3-column (phone, social, newsletter), Component Dock attribution
- [ ] Loading spinner: fullscreen gold circular animation
- [ ] Design tokens: Playfair Display headings, Rubik body, #b99365 gold accent
- [ ] No references to ColorLib in app code
- [ ] Footer links to componentdock.com
- [ ] Responsive: mobile hamburger menu, stacked columns
