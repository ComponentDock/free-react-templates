# Spec: Locate

## Purpose

Recreation of ColorLib "Browse" (https://colorlib.com/wp/template/browse/).
A directory listing / "find nearby" landing page for discovering local places,
attractions, restaurants, and services.

## Requirements

### Requirement: Navbar renders with logo and navigation links

The template SHALL display a navigation bar with the "Scout" logo and links to Home, Directory, About, Blog, and Contact.

#### Scenario: Navbar displays all links

- **WHEN** the page loads
- **THEN** the navbar shows "Scout" as the logo text
- **AND** navigation links "Home", "Directory", "About", "Blog", "Contact" are visible

#### Scenario: Mobile menu toggle

- **WHEN** the mobile menu toggle button is clicked
- **THEN** the mobile navigation menu expands

### Requirement: Hero section with search form

The template SHALL display a hero section with a background image, "Find Nearby" heading with animated typed text, and a search form with keyword, location, category, and search button.

#### Scenario: Hero renders heading and search form

- **WHEN** the page loads
- **THEN** the hero heading contains "Find Nearby"
- **AND** a search keyword input, location input, category dropdown, and search button are visible

#### Scenario: Form prevents default submission

- **WHEN** the search form is submitted
- **THEN** the default form submission is prevented

### Requirement: Most Visited Places section

The template SHALL display a 3-column grid of 6 listing cards with images, bookmark buttons, category badges, names, and addresses.

#### Scenario: Listing cards render with all elements

- **WHEN** the page loads
- **THEN** 6 listing cards are displayed
- **AND** each card has a bookmark button, category badge, name, and address

### Requirement: Popular Categories section

The template SHALL display 6 category tiles with icons, names, and listing counts, plus a "View All Categories" button.

#### Scenario: Category tiles render correctly

- **WHEN** the page loads
- **THEN** 6 category tiles are shown (Hotels, Events, Spa, Stores, Restaurants, Other)
- **AND** listing counts are displayed for each category

### Requirement: Why Us accordion section

The template SHALL display an image alongside a 4-item accordion FAQ that expands/collapses on click.

#### Scenario: Accordion expands on click

- **WHEN** a FAQ question is clicked
- **THEN** the answer becomes visible

#### Scenario: Accordion collapses on second click

- **WHEN** an expanded FAQ question is clicked again
- **THEN** the answer is hidden

### Requirement: How It Works section

The template SHALL display 3 numbered step cards with icons, titles, and descriptions.

#### Scenario: Step cards render correctly

- **WHEN** the page loads
- **THEN** 3 step cards are shown with numbers 1, 2, 3

### Requirement: Testimonials carousel

The template SHALL display a carousel of customer testimonials with previous/next navigation and dot indicators.

#### Scenario: Testimonial navigation

- **WHEN** the next button is clicked
- **THEN** the next testimonial is displayed

#### Scenario: Testimonial dot navigation

- **WHEN** a dot indicator is clicked
- **THEN** the corresponding testimonial is shown

### Requirement: Blog / Tips section

The template SHALL display 3 blog post preview cards with images, titles, authors, dates, and excerpts.

#### Scenario: Blog cards render correctly

- **WHEN** the page loads
- **THEN** 3 blog articles are shown with title, author, date, and excerpt

### Requirement: CTA banner

The template SHALL display a full-width primary-colored call-to-action banner with heading, subtitle, and Sign Up button.

#### Scenario: CTA renders correctly

- **WHEN** the page loads
- **THEN** the CTA banner shows "Let's get started" heading and "Sign Up" button

### Requirement: Footer with Component Dock link

The template SHALL display a footer with link columns, social icons, newsletter signup, and a copyright line linking to Component Dock.

#### Scenario: Footer renders all elements

- **WHEN** the page loads
- **THEN** Quick Links, Products, and Features columns are visible
- **AND** social media icons (Facebook, Twitter, Instagram, LinkedIn) are present
- **AND** newsletter email input and Send button are visible
- **AND** a "Component Dock" link points to https://www.componentdock.com/

#### Scenario: Newsletter form prevents default

- **WHEN** the newsletter form is submitted
- **THEN** the default form submission is prevented

### Requirement: Typed text animation

The template SHALL animate the hero heading text through a cycle of words: Attractions, Events, Hotels, Restaurants.

#### Scenario: Typing animation cycles through words

- **WHEN** the page loads
- **THEN** characters are typed one by one with a delay
- **AND** after a word is fully typed, it pauses then deletes
- **AND** the next word in the cycle begins typing

### Requirement: Design tokens

The template SHALL use teal #00918e as primary color, Rubik font, and match the original Browse template's visual style.

#### Scenario: Brand colors are applied

- **WHEN** the page renders
- **THEN** teal primary color is used for buttons, links, and accents
- **AND** Rubik font family is applied to all text
