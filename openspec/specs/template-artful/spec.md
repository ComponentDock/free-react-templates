## Purpose

Artful is a creative art and crafting services landing page template, recreated from the ColorLib "Five Star" design. It features a bold red brand color, full-screen hero, image gallery, carousel, services grid, video section, contact form, and dark footer with newsletter signup.

## Requirements

### Requirement: Navbar with responsive mobile menu

Users SHALL see a fixed dark navbar with the "Artful" branding and navigation links (Home, About, Services, Portfolio, Contact). On mobile, the menu SHALL collapse into a hamburger toggle that opens/closes the mobile navigation.

#### Scenario: Desktop navbar renders all links

- **WHEN** the page loads on desktop
- **THEN** the navbar displays all navigation links and the logo

#### Scenario: Mobile menu toggles open and closed

- **WHEN** the user taps the hamburger menu button
- **THEN** the mobile navigation panel opens
- **WHEN** the user taps a navigation link
- **THEN** the mobile navigation panel closes

### Requirement: Hero banner displays heading and subtitle

Users SHALL see a full-screen hero section with a background image, dark overlay, heading "Crafting Best Experience", subtitle text, and a "Get Started" CTA button.

#### Scenario: Hero renders heading and CTA

- **WHEN** the page loads
- **THEN** the hero section shows the heading "Crafting Best Experience"
- **AND** the subtitle text is visible
- **AND** the "Get Started" link points to the contact section

### Requirement: Experience section shows image grid and content

Users SHALL see an experience section with two side-by-side image thumbnails, a heading "We provide best art experience", descriptive paragraphs, and a "View Details" primary button.

#### Scenario: Experience section renders images and text

- **WHEN** the user scrolls past the hero
- **THEN** two images are displayed alongside the heading and description
- **AND** a "View Details" button is visible

### Requirement: Service carousel displays rotating content

Users SHALL see a dark-overlaid section with a text carousel showing titles and descriptions, with previous/next navigation arrows.

#### Scenario: Carousel displays the first slide

- **WHEN** the page loads
- **THEN** the carousel shows "Artistic Vision" as the first slide title

#### Scenario: Next and previous buttons navigate slides

- **WHEN** the user clicks the next button
- **THEN** the carousel advances to the next slide
- **WHEN** the user clicks the previous button
- **THEN** the carousel returns to the previous slide
- **AND** the carousel wraps around at boundaries

### Requirement: Services grid shows four icon cards

Users SHALL see a services grid section with four cards (Vector Illustration, Graphic Design, Web Design, Photography), each with an icon, title, and description, on a light lavender-gray background.

#### Scenario: All service cards render

- **WHEN** the services section is visible
- **THEN** four service cards are displayed with their respective icons and descriptions

### Requirement: Video section shows thumbnail and descriptive text

Users SHALL see a video section with a dark background image overlay, a video thumbnail with a play button on the left, and heading plus descriptive text on the right.

#### Scenario: Video section renders thumbnail and text

- **WHEN** the user scrolls to the video area
- **THEN** a video thumbnail with play button is displayed
- **AND** heading "Video Showcase" and descriptive text are visible

### Requirement: Features row shows three horizontal cards

Users SHALL see a features section with three horizontal cards (Award Winning, Passionate Team, Fast Delivery), each with an icon, title, and description.

#### Scenario: All feature cards render

- **WHEN** the features section is visible
- **THEN** three feature cards are displayed with icons and descriptions

### Requirement: Contact section has address info and form

Users SHALL see a contact section with address, email, and phone info with icons on the left, and a contact form with name, email, message fields and a "Send Message" button on the right.

#### Scenario: Contact info and form render

- **WHEN** the user scrolls to the contact area
- **THEN** address, email, and phone info are displayed
- **AND** a contact form with name, email, message fields is visible
- **AND** a "Send Message" button is present

### Requirement: Footer shows newsletter, about links, and instafeed

Users SHALL see a dark footer with an "About Agency" column with navigation links, a "Newsletter" column with email input and "Get Started" button, and an "Instafeed" column with 8 placeholder images.

#### Scenario: Footer columns render correctly

- **WHEN** the user scrolls to the footer
- **THEN** the About Agency column shows four navigation links
- **AND** the Newsletter column shows an email input and subscribe button
- **AND** the Instafeed column shows 8 images

### Requirement: Footer links to Component Dock

Users SHALL see a footer that contains a link to https://www.componentdock.com/ labeled "Component Dock".

#### Scenario: Component Dock link is present

- **WHEN** the user views the footer
- **THEN** a link to https://www.componentdock.com/ labeled "Component Dock" is present
- **AND** the link opens in a new tab

### Requirement: Responsive layout adapts to mobile

The template SHALL provide a responsive layout that stacks sections vertically on mobile viewports (375px), with the navbar collapsing to a hamburger menu.

#### Scenario: Mobile layout stacks content

- **WHEN** the user views the page on a 375px viewport
- **THEN** the navbar collapses to a hamburger menu
- **AND** the hero heading remains readable
- **AND** the services grid stacks vertically
- **AND** the contact section stacks vertically
- **AND** the footer columns stack vertically
