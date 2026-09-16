# Template: Crescent (Church / Community)

## Purpose

Recreation of ColorLib **Crose** (https://colorlib.com/wp/template/crose/).
Preview URL: https://preview.colorlib.com/theme/crose/

Stack: React 19 · Vite · Tailwind CSS 4 · TypeScript (strict).

Crose is a church/community website template featuring a hero carousel,
about section with cards, call-to-action parallax banner, sermon cards
with date badges and media icons, upcoming events carousel, blog cards,
newsletter subscription, and a 4-column footer. Brand color is deep red
(#c92f2f). Font is Open Sans.

## Requirements

### Requirement: TopBar displays contact info and social links

The top bar SHALL display opening hours, social media icons (Facebook, Twitter), email address, and phone number on a light background.

#### Scenario: TopBar renders opening hours

- **GIVEN** the page loads
- **WHEN** the top bar is rendered
- **THEN** it shows "Opening Hours - 10 Am to 6 PM"
- **AND** it shows social media icons for Facebook and Twitter
- **AND** it shows the email address and phone number

### Requirement: Navbar provides sticky navigation

The navbar SHALL be sticky on scroll, display a logo, navigation links (Home, About, Sermons, Events, Blog, Contact), a search icon, and a "Donate Us" CTA button.

#### Scenario: Navbar renders navigation links

- **GIVEN** the page loads
- **WHEN** the navbar is rendered
- **THEN** it shows the logo "CRESCENT"
- **AND** it shows all navigation links
- **AND** it shows the "Donate Us" button

#### Scenario: Navbar is sticky

- **GIVEN** the user scrolls past the hero
- **WHEN** the navbar becomes sticky
- **THEN** it remains fixed at the top with a white background and shadow

#### Scenario: Mobile menu toggles

- **GIVEN** the page is on mobile viewport
- **WHEN** the user clicks the hamburger button
- **THEN** the mobile menu opens
- **AND** clicking a link closes the mobile menu

### Requirement: Hero section displays carousel with background images

The hero SHALL show a full-width section with background images, centered white heading, subtext, and a brand-red CTA button.

#### Scenario: Hero renders content

- **GIVEN** the page loads
- **WHEN** the hero section is visible
- **THEN** it shows a heading "Building The Hope"
- **AND** it shows subtext about the mission
- **AND** it shows an "About Us" CTA button

### Requirement: About section shows 3 content cards

The about section SHALL display a heading "Welcome To Church" and 3 cards with image, title, description, and "Read More" link.

#### Scenario: About renders cards

- **GIVEN** the page loads
- **WHEN** the about section is visible
- **THEN** it shows the heading "Welcome To Church"
- **AND** it shows 3 cards: "Our Church", "Our History", "Our Sermons"
- **AND** each card has a "Read More" link

### Requirement: Call to Action section shows parallax banner

The CTA section SHALL show a parallax background image with dark overlay, centered white text, and a transparent button with red border.

#### Scenario: CTA renders content

- **GIVEN** the page loads
- **WHEN** the CTA section is visible
- **THEN** it shows "A Place For You" heading
- **AND** it shows description text
- **AND** it shows a "Become A Member" outlined button

### Requirement: Latest Sermons displays sermon cards

The sermons section SHALL show 3 sermon cards with thumbnail image, date badge, media action icons (video, audio, docs, download), title, speaker, categories, and time.

#### Scenario: Sermons renders cards

- **GIVEN** the page loads
- **WHEN** the sermons section is visible
- **THEN** it shows the heading "Latest Sermons"
- **AND** it shows 3 sermon cards
- **AND** each card has media icons and metadata

### Requirement: Upcoming Events shows event cards with parallax heading

The events section SHALL show a parallax heading area and event cards with thumbnail image, title, date, time, location, description, and "Find Out More" button.

#### Scenario: Events renders cards

- **GIVEN** the page loads
- **WHEN** the events section is visible
- **THEN** it shows "Upcoming Events" heading
- **AND** it shows 3 event cards with metadata

### Requirement: Gallery displays image grid

The gallery SHALL show 10 images in a responsive grid layout.

#### Scenario: Gallery renders images

- **GIVEN** the page loads
- **WHEN** the gallery section is visible
- **THEN** it shows 10 images

### Requirement: Blog section shows blog post cards

The blog section SHALL show 3 blog cards with image, title, author, date, and excerpt.

#### Scenario: Blog renders cards

- **GIVEN** the page loads
- **WHEN** the blog section is visible
- **THEN** it shows the heading "Latest News"
- **AND** it shows 3 blog cards

### Requirement: Subscribe section shows newsletter form

The subscribe section SHALL show a heading, subtext, email input, and subscribe button.

#### Scenario: Subscribe renders form

- **GIVEN** the page loads
- **WHEN** the subscribe section is visible
- **THEN** it shows "Subscribe To Our Newsletter" heading
- **AND** it shows an email input field
- **AND** it shows a "Subscribe" button

#### Scenario: Subscribe form clears on submit

- **GIVEN** the user types an email
- **WHEN** the user clicks "Subscribe"
- **THEN** the email field is cleared

### Requirement: Footer displays 4 columns with links and contact info

The footer SHALL have a dark navy background (#1f1f2c), 4 columns (about, quick links, latest news, contact info), and a copyright bar linking to Component Dock.

#### Scenario: Footer renders content

- **GIVEN** the page loads
- **WHEN** the footer is visible
- **THEN** it shows 4 columns
- **AND** it links to https://www.componentdock.com/ branded as "Component Dock"
- **AND** it has role="contentinfo"

### Requirement: App renders all sections in correct order

The App SHALL compose all sections in the order: TopBar → Navbar → Hero → About → CTA → Sermons → Events → Gallery → Blog → Subscribe → Footer.

#### Scenario: App renders all sections

- **GIVEN** the page loads
- **WHEN** the App component renders
- **THEN** all sections are present in the correct order
- **AND** the document title is set to "Crescent — Church Community Template"

## Verification Checklist

- [ ] All sections match the order: TopBar → Navbar → Hero → About → CTA → Sermons → Events → Gallery → Blog → Subscribe → Footer
- [ ] Brand color `#c92f2f` used for buttons and accents via Tailwind theme
- [ ] Font is Open Sans via Google Fonts link in index.html
- [ ] Buttons have `rounded-[3px]` shape, red background, white text
- [ ] Hero section uses parallax bg images with dark overlay
- [ ] CTA section uses parallax bg image with transparent+border button
- [ ] Sermon cards have date badge, media icons, metadata rows
- [ ] Events section has parallax heading + event cards
- [ ] Footer is dark navy (#1f1f2c) with 4 columns
- [ ] Footer links to ComponentDock
- [ ] No ColorLib references in app code
- [ ] Footer branded as "Component Dock"
- [ ] 100% test coverage (Vitest)
- [ ] Tests cover all interactive elements and section rendering
