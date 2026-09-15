# template-devotion

## Purpose

Recreation of ColorLib "Faithful" (https://colorlib.com/wp/template/faithful/) as a React church website template named "Devotion". The template provides a full church/ministry landing page with hero slider, services, sermon spotlight, features, events, and contact info.

Preview: https://preview.colorlib.com/theme/faithful/

## Requirements

### Requirement: Page renders all major sections

The page SHALL display Navbar, HeroSlider, EventsBanner, ChurchServices, LatestSermon, Features, UpcomingEvents, ContactInfo, and Footer in order.

#### Scenario: All sections present

- **WHEN** I visit the Devotion homepage
- **THEN** I see the Navbar with "Devotion" logo
- **AND** I see the Hero section with slide content
- **AND** I see the Events Banner
- **AND** I see the Church Services section with 3 cards
- **AND** I see the Latest Sermon section
- **AND** I see the More Features section with 3 items
- **AND** I see the Upcoming Events section
- **AND** I see the Contact Info section
- **AND** I see the Footer

### Requirement: Navbar navigation links

The Navbar SHALL contain links for Home, Sermons, Beliefs, Events, About, Contact.

#### Scenario: Desktop navigation

- **WHEN** I visit the Devotion homepage
- **THEN** the Navbar contains links for Home, Sermons, Beliefs, Events, About, Contact

#### Scenario: Mobile menu toggle

- **WHEN** I click the mobile menu toggle button
- **THEN** the mobile navigation menu opens
- **AND** I can see navigation links in the mobile menu

### Requirement: Hero displays slide content

The HeroSlider SHALL display slide headings and call-to-action buttons.

#### Scenario: Slide content

- **WHEN** I visit the Devotion homepage
- **THEN** I see "December Camp Meeting" heading
- **AND** I see a "Register Now" call-to-action

### Requirement: Church Services shows 3 service cards

The ChurchServices section SHALL display 3 cards with unique titles and "Read More" links.

#### Scenario: Service cards

- **WHEN** I visit the Devotion homepage
- **THEN** I see 3 church service cards with titles and "Read More" links

### Requirement: Latest Sermon section

The LatestSermon section SHALL display sermon title, speaker, and "Watch Video" link.

#### Scenario: Sermon details

- **WHEN** I visit the Devotion homepage
- **THEN** I see "God is Love" sermon title
- **AND** I see speaker "Ptr. Johnson"
- **AND** I see a "Watch Video" link

### Requirement: Footer links to Component Dock

The Footer SHALL link to https://www.componentdock.com/ with "Component Dock" text.

#### Scenario: Component Dock link

- **WHEN** I visit the Devotion homepage
- **THEN** the Footer contains a link to https://www.componentdock.com/
- **AND** the link text includes "Component Dock"

### Requirement: Footer shows copyright

The Footer SHALL show the current year and copyright text.

#### Scenario: Copyright

- **WHEN** I visit the Devotion homepage
- **THEN** the Footer shows the current year and copyright text

## Design Tokens

- **Primary brand color:** #f23a2e (warm red)
- **Header/footer background:** #1b2430 (dark navy)
- **Body background:** #ffffff (white), #f8f9fa (light sections)
- **Caption/accent background:** #ffc107 (amber)
- **Events banner background:** #0d6efd (blue)
- **Fonts:** Work Sans (body), Amatic SC (display headings via Google Fonts)
- **Buttons:** Pill-shaped (border-radius: 30px)

## Component Map

| Section       | Component      | Notes                           |
| ------------- | -------------- | ------------------------------- |
| Navbar        | Navbar         | Sticky, mobile hamburger toggle |
| Hero Slider   | HeroSlider     | Two slides with overlay         |
| Events Banner | EventsBanner   | Blue bg, countdown placeholder  |
| Church Svc    | ChurchServices | 3-column card grid              |
| Latest Sermon | LatestSermon   | Split layout, play button       |
| Features      | Features       | 3 icon cards                    |
| Events        | UpcomingEvents | Card grid                       |
| Contact Info  | ContactInfo    | 3-column icons + text           |
| Footer        | Footer         | 4-col + bottom bar              |
