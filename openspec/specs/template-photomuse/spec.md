# Template: Photomuse

Recreation of ColorLib Louie (https://colorlib.com/wp/template/louie/)

## Purpose

A photographer portfolio template featuring a fixed sidebar navigation, split hero section with author info, Instagram photo grid, and dark footer with contact details.

## Requirements

### Requirement: Sidebar navigation

The template SHALL display a fixed left sidebar with author avatar, name, navigation links, and newsletter signup.

#### Scenario: Sidebar renders author identity

- **WHEN** the page loads
- **THEN** the sidebar displays an author avatar image and the name "Louie Smith"

#### Scenario: Sidebar navigation links

- **WHEN** the page loads
- **THEN** the sidebar contains links for Home, Collection, About Me, My Services, Blog, and Contact

#### Scenario: Newsletter signup form

- **WHEN** the page loads
- **THEN** the sidebar displays a newsletter heading and an email input with a submit button

### Requirement: Hero section

The template SHALL display a split hero section with a photographer portrait on the left and author info on the right.

#### Scenario: Hero author info

- **WHEN** the page loads
- **THEN** the hero shows a greeting "Hello! I'm", the author name, tagline "A Photographer. I Capture Life", a bio paragraph, a cursive signature, and social media links

#### Scenario: Hero portrait image

- **WHEN** the page loads
- **THEN** the hero displays a photographer portrait image

### Requirement: Instagram photo grid

The template SHALL display an Instagram photo grid with a heading and five images.

#### Scenario: Instagram grid renders

- **WHEN** the page loads
- **THEN** the section shows "Follow me on Instagram" and five images with hover overlay

### Requirement: Footer

The template SHALL display a dark footer with recent photos, archives, and contact information.

#### Scenario: Footer content

- **WHEN** the page loads
- **THEN** the footer shows Recent Photos thumbnails, monthly Archives, contact address/phone/email, and a Component Dock attribution link

### Requirement: Component Dock branding

The template footer SHALL link to https://www.componentdock.com/ branded as "Component Dock".

#### Scenario: Footer attribution

- **WHEN** the page loads
- **THEN** the footer contains a link to https://www.componentdock.com/ with text "Component Dock"
