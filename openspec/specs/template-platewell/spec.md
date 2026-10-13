# Template: Platewell (Restaurant / Dining)

## Purpose

Recreation of ColorLib **EatWell** template.
- **Source slug:** `eatwell`
- **Preview URL:** https://preview.colorlib.com/theme/eatwell/
- **Source screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/eatwell-free-template.jpg
- **Stack:** React 19 + Vite + Tailwind CSS 4 + TypeScript (strict)
- **New name:** `platewell` (app folder `apps/platewell`, package `@free-react-templates/platewell`)

## Design tokens (extracted from live preview CSS)

| Token | Value | Usage |
|---|---|---|
| Brand / primary color | `#FDA403` (amber-gold) | CTA buttons, prices, links, active nav, accent text |
| Body background | `#fff` | Default page background |
| Light section bg | `#fafafa` | `.bg-light` alternating sections |
| Dark section bg | `#222` | Footer background |
| Body text color | `#b8b8b8` | Paragraphs and body copy |
| Heading color | `#000` | All headings (h1-h5) |
| Body font | `Raleway`, sans-serif | Body text, sub-titles, form labels |
| Heading font | `Playfair Display`, serif | All headings (h1-h5), buttons, menu prices |
| Button border-radius | `0px` (square) | All buttons are sharp-cornered |
| Button primary bg | `#FDA403` | Primary CTA buttons |
| Button primary hover | `#cb8402` | Darker amber on hover |
| Button secondary | `border: 2px solid #ccc`, no fill | "Learn More" style buttons; hover → brand fill |
| Button outline-white | `border: 2px solid rgba(255,255,255,0.8)`, no fill | Hero CTA |
| Section padding | `7em 0` | All `.site-section` blocks |
| Nav link style | uppercase, `letter-spacing: .2em`, `13px`, `Raleway` | Transparent navbar, scrolled → white bg |
| Tab nav style | uppercase, `letter-spacing: .2em`, `border: 2px solid #ccc` | Active tab: `border: 2px solid #000` |
| Menu item image | `100px` round (`border-radius: 50%`) | Thumbnail next to menu description |
| Menu price font | `Playfair Display`, `24px` | Price under each menu item |
| Form input bg | `#e6e6e6`, no border, `height: 55px`, `border-radius: 0px` | Contact form fields |
| Social icons | `60x60px` circles, `rgba(255,255,255,0.05)` bg | Footer social row |
| Footer text | `rgba(255,255,255,0.3)` | Footer paragraphs and links |
| Footer heading | `rgba(255,255,255,0.6)`, uppercase, `14px` | Footer widget headings |

## Visual design notes (from screenshot analysis)

- Warm, appetizing restaurant aesthetic with dark tones contrasted by amber/gold accents
- Full-viewport hero with food background image, centered heading, reservation CTA
- Alternating white/light-gray section backgrounds create visual rhythm
- Navbar starts transparent over hero, becomes fixed white on scroll
- Offer section uses a horizontal carousel (owl-carousel equivalent) for food specials
- Menu section has tabbed navigation (Breakfast / Lunch / Dinner) with pill-style tabs
- Gallery uses a 3×2 grid of food photography thumbnails
- Contact section is a two-column layout: form left, info + image right
- Footer is dark (#222) with 4-column layout: about text, two link columns, social icons

## Requirements

### Feature: Platewell Restaurant Template

#### Scenario: Navbar renders with correct links

- **GIVEN** the page loads
- **THEN** a navigation bar is visible with brand text "Platewell"
- **AND** nav links exist for "Home", "About", "Offers", "Menu", "News", "Gallery", "Contact"
- **AND** clicking each nav link scrolls to the corresponding section

#### Scenario: Hero section displays full-viewport cover

- **GIVEN** the page loads
- **THEN** a full-viewport hero section is visible
- **AND** the hero heading reads "Welcome To Platewell"
- **AND** the hero subheading reads "Come and eat well with our delicious & healthy foods."
- **AND** a "Reservation" button is displayed in outline-white style

#### Scenario: About section shows story and image

- **GIVEN** the user scrolls to the About section
- **THEN** a "Our Story" subtitle and "Welcome" heading are visible
- **AND** two paragraphs of introductory text are shown
- **AND** a "Learn More About Us" secondary button is displayed
- **AND** a food/restaurant image appears to the right of the text

#### Scenario: Offers section displays food carousel

- **GIVEN** the user scrolls to the Offers section
- **THEN** an "Our Offers" subtitle and "Our Offer This Summer" heading are shown
- **AND** a carousel displays at least 3 food offer cards
- **AND** each card shows a food image, price, dish name, description, and "Order Now!" button
- **AND** carousel navigation dots are visible

#### Scenario: Menu section has tabbed food categories

- **GIVEN** the user scrolls to the Menu section
- **THEN** a "Delicious Menu" heading is shown
- **AND** three tab buttons exist: "Breakfast", "Lunch", "Dinner"
- **AND** "Breakfast" tab is active by default
- **AND** each tab displays a 2-column grid of food items
- **AND** each food item shows a circular thumbnail, dish name, description, and price
- **WHEN** the user clicks "Lunch" tab then the Lunch items are displayed
- **WHEN** the user clicks "Dinner" tab then the Dinner items are displayed

#### Scenario: News section shows blog cards

- **GIVEN** the user scrolls to the News section
- **THEN** a "News" heading is shown on a light background
- **AND** 3 blog cards are displayed in a row
- **AND** each card shows an image, title, description, and "Read More" button

#### Scenario: Gallery section displays image grid

- **GIVEN** the user scrolls to the Gallery section
- **THEN** a "Gallery" heading is shown
- **AND** a 3×2 grid of food photography thumbnails is displayed
- **AND** each thumbnail is clickable (lightbox interaction)

#### Scenario: Contact section shows form and info

- **GIVEN** the user scrolls to the Contact section
- **THEN** a "Get In Touch" heading is shown on a light background
- **AND** a contact form with Name, Email, Message fields and "Send Message" button is displayed
- **AND** contact information (address, phone, email) is shown to the right

#### Scenario: Footer renders with links and social icons

- **GIVEN** the user scrolls to the footer
- **THEN** a dark background footer is visible
- **AND** an "About Us" column with description text is shown
- **AND** "The Restaurant" links column is shown (About Us, Chefs, Events, Contact)
- **AND** two "Useful Links" columns are shown
- **AND** social icons (Twitter, Facebook, Instagram) are displayed as circles
- **AND** a copyright line is shown
- **AND** the footer links to "https://www.componentdock.com/" branded as "Component Dock"

#### Scenario: Navbar scrolls to fixed position

- **GIVEN** the page is scrolled past the hero
- **THEN** the navbar becomes fixed at the top
- **AND** the navbar background changes from transparent to white
- **AND** nav link text changes from white to dark

## Verification checklist

- [ ] All sections render in correct order: Navbar → Hero → About → Offers → Menu → News → Gallery → Contact → Map placeholder → Footer
- [ ] Brand color `#FDA403` is used consistently for CTAs, prices, active states
- [ ] Playfair Display serif font on all headings and buttons
- [ ] Raleway sans-serif on body text and form elements
- [ ] All buttons are square (border-radius: 0)
- [ ] Hero is full-viewport with background image
- [ ] Offers carousel works with horizontal scrolling and dot navigation
- [ ] Menu tabs switch content correctly (Breakfast/Lunch/Dinner)
- [ ] Gallery grid is 3 columns × 2 rows
- [ ] Contact form has proper input styling (gray bg, no border, square corners)
- [ ] Footer links to componentdock.com
- [ ] No references to ColorLib in app source code
- [ ] Footer attribution: "Component Dock" branding
- [ ] `public/CNAME` contains `platewell.free.componentdock.com`
- [ ] `package.json` homepage is `https://platewell.free.componentdock.com`
