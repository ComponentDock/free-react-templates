# Crux — Recreation of ColorLib Bbs

> Recreation of ColorLib "Bbs" (https://colorlib.com/wp/template/bbs/)
> Preview: https://preview.colorlib.com/theme/bbs/

## Purpose

Crux is a creative agency / small company landing page template featuring
a bold purple hero, 4-feature grid, tabbed about section, video callout,
blog cards, story section, newsletter subscription, and footer. Recreated
from the ColorLib Bbs design with identical section order, layout, and
design tokens (purple brand, Poppins font, gradient CTA buttons).

## Requirements

### Requirement: Navbar with navigation and mobile menu

The page SHALL display a fixed navbar with logo "Crux" and navigation links
(Home, About, Services, Blog). A mobile hamburger toggle SHALL open/close
a mobile menu overlay. Clicking a mobile nav link SHALL close the menu.

#### Scenario: Desktop navbar renders logo and links

- **WHEN** the page loads
- **THEN** the logo "Crux" and all four nav links are visible

#### Scenario: Mobile menu toggle

- **WHEN** the user clicks the hamburger button
- **THEN** the mobile navigation overlay appears with all links
- **AND** the close button is displayed

#### Scenario: Mobile menu link click closes menu

- **WHEN** the user opens the mobile menu and clicks a nav link
- **THEN** the mobile navigation overlay is removed from the DOM

### Requirement: Hero section with CTA

The hero SHALL display "We're Creative" heading centered on a purple radial
gradient background with a "Get Started" pill-shaped CTA button.

#### Scenario: Hero renders heading and CTA

- **WHEN** the page loads
- **THEN** the heading "We're Creative" is visible
- **AND** a "Get Started" link is present

### Requirement: Features grid with 4 cards

The features section SHALL display a 2×2 grid of feature cards, each with
an icon, title, and description.

#### Scenario: All four feature cards render

- **WHEN** the user scrolls to the features section
- **THEN** headings for "Unlimited Colors", "Smart Security", "Endless Support", and "Reliable Design" are visible
- **AND** each card has an icon and description text

### Requirement: About section with tabbed content

The about section SHALL display a heading "About Our Company", an image,
and tabbed content with "History" and "Mission & Vision" tabs. Clicking
a tab SHALL switch the visible content panel.

#### Scenario: About section renders heading and image

- **WHEN** the user scrolls to the about section
- **THEN** the heading "About Our Company" is visible
- **AND** the about image is rendered

#### Scenario: Default tab is History

- **WHEN** the about section first renders
- **THEN** the "History" tab is active and its content is visible

#### Scenario: Switching tabs

- **WHEN** the user clicks the "Mission & Vision" tab
- **THEN** the mission content panel is displayed
- **AND** the history content is no longer visible

#### Scenario: Switching back to History

- **WHEN** the user clicks the "History" tab after viewing Mission
- **THEN** the history content panel is displayed again

### Requirement: Video callout section

The video section SHALL display a heading "New Features that open the door
of future" with a play button and description text on a purple gradient
background.

#### Scenario: Video callout renders elements

- **WHEN** the user scrolls to the video section
- **THEN** the heading with "New Features" is visible
- **AND** a play button is present
- **AND** description text is displayed

### Requirement: Blog cards section with 3 articles

The blog section SHALL display three cards with background images,
titles, and descriptions.

#### Scenario: All three blog cards render

- **WHEN** the user scrolls to the blog section
- **THEN** headings for "Creative Projects", "Digital Solutions", and "Growth Strategy" are visible
- **AND** each card has a description and image

### Requirement: Story / CTA section

The story section SHALL display a heading "Crafting Our Experiences"
with descriptive text on a dark background.

#### Scenario: Story renders heading and text

- **WHEN** the user scrolls to the story section
- **THEN** the heading with "Crafting Our Experiences" is visible
- **AND** descriptive paragraph text is present

### Requirement: Newsletter subscription form

The newsletter section SHALL display a heading "Subscribe Newsletter"
with an email input and "Get Started" submit button. Submitting the
form SHALL clear the email field (demo mode).

#### Scenario: Newsletter form renders

- **WHEN** the user scrolls to the newsletter section
- **THEN** the heading "Subscribe Newsletter" is visible
- **AND** an email input and submit button are present

#### Scenario: Email input accepts text

- **WHEN** the user types into the email input
- **THEN** the input value updates to reflect typed text

#### Scenario: Form submission clears input

- **WHEN** the user enters an email and clicks submit
- **THEN** the email input is cleared

### Requirement: Footer with Component Dock attribution

The footer SHALL display navigation links, social media icons, and a
"Made with Component Dock" attribution linking to componentdock.com.

#### Scenario: Footer renders navigation and social links

- **WHEN** the user scrolls to the footer
- **THEN** nav links for Home, About, Services, Blog are present
- **AND** social links for Facebook, Twitter, Dribbble are present

#### Scenario: Footer links to Component Dock

- **WHEN** the footer renders
- **THEN** a link to https://www.componentdock.com/ is present with text "Component Dock"

#### Scenario: Footer has contentinfo landmark

- **WHEN** the page renders
- **THEN** the footer has role="contentinfo"

### Requirement: Page composition

The App component SHALL compose all sections in order within main landmark,
set the document title, and include banner and contentinfo landmarks.

#### Scenario: All sections compose in the App

- **WHEN** the page loads
- **THEN** banner, main, and contentinfo landmarks are present
- **AND** headings for Hero, Features, About, Video, Blog, Story, and Newsletter are all rendered
